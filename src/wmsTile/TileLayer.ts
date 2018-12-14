import { ILayer, ChannelFunc, DataListItem } from '../definitions'
import { getFeatureInfo, getCapabilities } from './utils'
import { isUndefined, isNull, isNothing } from '../utils'
import GridLayer from '../grid/GridLayer'
import MarkersLayer from '../marker/MarkersLayer'

type GetStyles = (options: any) => Promise<string>
type GetLayers = (options: any) => Promise<string>
type GetEnvParams = (options: any) => Promise<object>
type GetCqlFilter = (options: any) => Promise<string>
export interface WmsTileOptions extends L.WMSOptions {
  getLayers?: GetLayers
  getStyles?: GetStyles
  getEnvParams?: GetEnvParams
  getCqlFilter?: GetCqlFilter
}

const POPUP_CONTENT_NULL_TEXT = '无数据'

const WMS_URL = window.WMS_URL || '/geo/wms'
let geoserverCapabilities: any = null
const geoserverCapabilitiesPromise = getCapabilities(WMS_URL).then((data) => {
  geoserverCapabilities = data
  return data
})

export default class TileLayer implements ILayer {
  private visible: boolean
  private tileLayer: L.TileLayer
  private popup: L.Popup
  private popupProp: string
  private popupData: any
  private pitchedTarget: L.GeoJSON<any>
  private layers: string
  private styles: string
  private envParams: object
  private cqlFilter: string
  private gridLayer: GridLayer
  private clusterLayer: MarkersLayer
  private isCluster: boolean
  private clusterLayerDataList: DataListItem[]
  private showGridFlag: boolean
  private eventHandlers: any[]
  constructor(
    public map: L.Map,
    public options: WmsTileOptions,
    public channelFunc: ChannelFunc,
    public data: any
  ) {
    this.visible = true
    this.tileLayer = null
    this.popup = null
    this.pitchedTarget = null
    this.popupProp = null
    this.popupData = null
    this.layers = this.options.layers
    this.styles = this.options.styles
    this.eventHandlers = []
    this.showGridFlag = false
    this.gridLayer = null
    this.envParams = null
    this.cqlFilter = null
    this.isCluster = false
    this.registerEvents()
  }

  /**
   * 绘制 layer
   * @param options
   */
  public async draw(options?: { showGrid: boolean }) {
    if (!this.visible) {
      return
    }

    this.isCluster = false

    this.showGridFlag = !!(options && options.showGrid)
    if (this.showGridFlag) {
      this.showGrid()
    } else {
      this.hideGrid()
    }

    if (this.clusterLayer) {
      this.clusterLayer.destroy()
    }
    if (this.tileLayer) {
      this.tileLayer.remove()
    }
    this.initEvents()
    this.tileLayer = await this.getLayer()
    if (this.tileLayer) {
      this.tileLayer.addTo(this.map)
    }
  }

  /**
   * 销毁 layer
   */
  public destroy(): void {
    if (this.tileLayer) {
      this.tileLayer.remove()
    }
    if (this.gridLayer) {
      this.gridLayer.remove()
    }
    if (this.popup) {
      this.popup.remove()
    }
    if (this.clusterLayer) {
      this.clusterLayer.destroy()
    }
    this.destroyEvents()
  }

  /**
   * 获取额外传入的数据
   */
  public getData() {
    return this.data
  }

  /**
   * 获取 options
   */
  public getOptions() {
    return this.options
  }

  /**
   * 将地图缩放到合适比例
   */
  public async fitBounds() {
    // temp
    if (this.clusterLayer) {
      this.clusterLayer.fitBounds()
      return
    }

    const bounds = await this.getBounds()
    if (bounds) {
      this.map.fitBounds(bounds)
    }
  }

  /**
   * 获取 bounds
   * @param fresh 是否强制刷新数据
   */
  public async getBounds(fresh: boolean = false) {
    if (isNull(geoserverCapabilities)) {
      await geoserverCapabilitiesPromise
    }
    if (fresh) {
      geoserverCapabilities = await getCapabilities(WMS_URL)
    }
    const layerList = geoserverCapabilities.WMT_MS_Capabilities.Capability.Layer
      .Layer as any[]
    if (!this.layers) {
      if (this.options.getLayers) {
        this.layers = await this.options.getLayers(this.getData())
      } else {
        console.warn('[TileLayer.getBounds] wms.config.layers is null')
        return null
      }
    }
    const layers = this.layers.split(',')
    const layerTableNameList = layers.map((it) => it.split(':')[1])
    const layerInfos = layerTableNameList
      .map((tableName) => {
        return layerList.find((it) => new RegExp(tableName).test(it.Name._text))
      })
      .filter((it) => !isUndefined(it))
    if (layerInfos.length <= 0) {
      console.warn('[TileLayer.getBounds] not found layerInfo')
      return null
    }
    const {
      minx,
      miny,
      maxx,
      maxy,
    } = layerInfos[0].LatLonBoundingBox._attributes
    const initialBounds = L.latLngBounds(
      L.latLng(miny, minx),
      L.latLng(maxy, maxx)
    )
    const allBounds = layerInfos.slice(1).reduce((prev, curr) => {
      // tslint:disable-next-line:no-shadowed-variable
      const { minx, miny, maxx, maxy } = curr.LatLonBoundingBox._attributes
      return prev.extend(L.latLng(miny, minx)).extend(L.latLng(maxy, maxx))
    }, initialBounds)
    return allBounds
  }
  public async toggleVisible(visible: boolean): Promise<void> {
    this.visible = visible
    if (this.visible) {
      if (this.isCluster) {
        this._cluster(this.clusterLayerDataList)
      } else {
        this.draw({ showGrid: this.showGridFlag })
      }
    } else {
      this.destroy()
    }
  }

  /**
   * 聚焦某条数据
   * @param data
   */
  public pitch(data: DataListItem): void {
    this.pitchedTarget = L.geoJSON(data.geometry)
    const bounds = this.pitchedTarget.getBounds()
    this.map.fitBounds(bounds)
    this.map.panTo(bounds.getCenter())
  }

  /**
   * 设置 popup 显示的字段
   * @param prop
   */
  public setPopupProp(prop: string) {
    this.popupProp = prop
    if (this.popup && this.popup.isOpen()) {
      const popupContent = this.getPopupContent()
      if (!isNull(popupContent)) {
        this.popup.setContent(popupContent)
      }
    }
  }

  /**
   * 显示全球网格
   * @param distance 网格半径
   */
  public showGrid(distance: number = 100) {
    this.hideGrid()
    this.gridLayer = new GridLayer({ map: this.map, distance })
    this.gridLayer.draw()
  }

  /**
   * 移除全球网格
   */
  public hideGrid() {
    if (this.gridLayer) {
      this.gridLayer.remove()
    }
  }

  /**
   * 聚合
   * @deprecated
   * @param dataList 包含 geometry 信息的数据集
   */
  public _cluster(dataList: DataListItem[]) {
    this.clusterLayerDataList = dataList
    this.isCluster = true
    if (this.tileLayer) {
      this.tileLayer.remove()
    }
    const clusterLayer = new MarkersLayer(
      this.map,
      dataList,
      {
        renderType: 'cluster',
        iconType: 'unicode',
        iconUnicode: '&#xe655',
      },
      this.channelFunc
    )
    clusterLayer.draw()
    this.clusterLayer = clusterLayer
    return clusterLayer
  }

  /**
   * 获取 wms tile layer
   */
  private async getLayer() {
    const { getLayers, getStyles, getEnvParams, getCqlFilter } = this.options
    if (getLayers) {
      this.layers = await getLayers(this.getData())
    }
    if (getStyles) {
      this.styles = await getStyles(this.getData())
    }
    if (getEnvParams) {
      this.envParams = await getEnvParams(this.getData())
    }
    if (getCqlFilter) {
      this.cqlFilter = await getCqlFilter(this.getData())
    }
    const tileLayer = L.tileLayer.wms(WMS_URL, {
      layers: this.layers,
      styles: this.styles,
      transparent: true,
      format: 'image/png',
      crs: L.CRS.EPSG4326,
    })
    if (!isNull(this.envParams)) {
      tileLayer.setParams({
        env: Object.entries(this.envParams)
          .map(([k, v]) => `${k}:${v}`)
          .join(';'),
      })
    }
    if (!isNull(this.cqlFilter)) {
      tileLayer.setParams({
        cql_filter: this.cqlFilter,
      })
    }
    return tileLayer
  }
  /**
   * 点击事件处理
   * @param e event
   */
  private async clickHandler(e: L.LeafletMouseEvent) {
    const data = await this.getFeatureInfo(e)
    if (this.popup) {
      this.popup.remove()
    }
    if (data.features.length > 0) {
      this.channelFunc('click', data)
      if (isNull(this.popupProp)) {
        return
      }
      this.popupData = data.features[0].properties
      const popupContent = this.getPopupContent()
      if (isNull(popupContent)) {
        return
      }
      this.popup = L.popup()
        .setLatLng(e.latlng)
        .setContent(popupContent)
        .openOn(this.map)
    }
  }
  /**
   * 获取 popup 需要展示的内容，为 null 值表示不需要展示
   */
  private getPopupContent(): null | string {
    if (isNothing(this.popupProp)) {
      return null
    }
    const popupContent = this.popupData[this.popupProp]
    if (isUndefined(popupContent)) {
      return null
    }
    if (isNull(popupContent)) {
      return POPUP_CONTENT_NULL_TEXT
    }
    return `${popupContent}`
  }

  /**
   * 右键处理函数
   * @param e {L.LeafletMouseEvent}
   */
  private async contextmenuHandler(e: L.LeafletMouseEvent) {
    if (this.popup) {
      this.popup.remove()
    }
    const data = await this.getFeatureInfo(e)
    this.channelFunc('contextmenu', data)
  }

  /**
   * 获取鼠标下的图层数据信息
   * @param e event
   */
  private async getFeatureInfo(e: L.LeafletMouseEvent) {
    const res = await getFeatureInfo({
      map: this.map,
      latlng: e.latlng,
      wmsURL: WMS_URL,
      layers: this.layers,
      styles: this.styles,
    })
    return {
      features: res.features,
      originalEvent: e,
    }
  }
  /**
   * 注册事件监听
   */
  private registerEvents() {
    this.eventHandlers = [
      ['contextmenu', this.contextmenuHandler],
      ['click', this.clickHandler],
    ]
  }
  /**
   * 添加事件监听
   */
  private initEvents() {
    this.eventHandlers.forEach(([eventName, handler]) => {
      this.map.on(eventName, handler, this)
    })
  }
  /**
   * 移除事件监听
   */
  private destroyEvents() {
    this.eventHandlers.forEach(([eventName, handler]) => {
      this.map.off(eventName, handler, this)
    })
  }
}
