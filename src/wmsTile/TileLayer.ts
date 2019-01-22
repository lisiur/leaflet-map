import { ILayer, ChannelFunc, DataListItem } from '../definitions'
import { getFeatureInfo, getCapabilities } from './utils'
import { isUndefined, isNull, isNothing, debounce, lighten } from '../utils'
import GridLayer from '../grid/GridLayer'
import Supercluster from 'supercluster'
import { FeatureCollection, GeoJsonObject } from 'typings/geojson'
import { RankOptions, RankLayer } from '../rankLayer/RankLayer'

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
const GET_WMS_LAYER_URL =
  window.GET_WMS_LAYER_URL ||
  // tslint:disable-next-line:only-arrow-functions
  function(name: string) {
    if (name.includes(':')) {
      // has workspace
      return `/geo/${name.split(':')[1]}/wms`
    }
  }

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
  private superCluster: supercluster.Supercluster

  private isCluster: boolean
  private clusterLayer: L.GeoJSON<any>
  private clusterFeatureCollectionFeatures: FeatureCollection['features']
  private clusterLayerDataList: DataListItem[]
  private clusterColor: string

  private isRank: boolean
  private rankLayer: RankLayer
  private rankOptions: RankOptions
  private rankLayerDataList: DataListItem[]

  private showGridFlag: boolean
  private eventHandlers: any[]
  private worker: Worker

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
    this.clusterColor = '#38f'
    this.superCluster = null
    this.clusterFeatureCollectionFeatures = null
    this.clusterLayer = L.geoJSON(null, {
      pointToLayer: this.createClusterIcon.bind(this),
    })
    // @ts-ignore
    if (window.Worker) {
      this.worker = new Worker('./statics/js/clusterWorker.js')
    } else {
      this.worker = null
    }

    this.isRank = false
    this.rankLayer = null
    this.rankOptions = null

    this.registerEvents()
    this.initEvents()
  }

  /**
   * 绘制 geoserver 渲染的图层
   * @param options
   */
  public async draw(options?: { showGrid: boolean }) {
    if (!this.visible) {
      return
    }

    this.isCluster = false
    this.isRank = false

    this.showGridFlag = !!(options && options.showGrid)
    if (this.showGridFlag) {
      // this.showGrid()
    } else {
      // this.hideGrid()
    }

    this.clearLayers()

    this.tileLayer = await this.getLayer()
    if (this.tileLayer) {
      this.tileLayer.addTo(this.map)
    }
  }

  /** 清除所有图层 */
  public clearLayers() {
    if (this.map.hasLayer(this.tileLayer)) {
      this.tileLayer.remove()
    }
    if (this.gridLayer) {
      this.gridLayer.remove()
    }
    if (this.popup) {
      this.popup.remove()
    }
    if (this.map.hasLayer(this.clusterLayer)) {
      this.clusterLayer.remove()
    }
    if (this.rankLayer && this.rankLayer.inMap()) {
      this.rankLayer.remove()
    }
  }

  /**
   * 销毁所有图层，包括事件
   */
  public destroy() {
    this.clearLayers()
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
   * 设置 options
   * @param options
   * @param redraw 是否重绘，默认为 true
   */
  public setOptions(options: WmsTileOptions, redraw = true) {
    this.options = Object.assign(this.options, options)
    if (redraw) {
      this.draw()
    }
  }

  /**
   * 将地图缩放到合适比例
   */
  public async fitBounds() {
    if (this.isRank) {
      this.rankLayer.fitBounds()
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
  public async getBounds() {
    if (this.isRank) {
      return this.rankLayer.getBounds()
    }

    // TODO: 获取所有 layer bounds 的并集
    // NOTE: 目前只获取第一个
    const layers = await this.options.getLayers(this.getData())
    // const firstLayerName = layers.split(',')[0].split(':')[1]
    const firstLayerName = layers.split(',')[0]
    return this.getLayerBounds(firstLayerName)
  }

  public async toggleVisible(visible: boolean): Promise<void> {
    this.visible = visible
    if (this.visible) {
      if (this.isCluster) {
        this.cluster(this.clusterLayerDataList)
      } else if (this.isRank) {
        this.rank(this.rankLayerDataList)
      } else {
        this.draw({ showGrid: this.showGridFlag })
      }
    } else {
      this.clearLayers()
    }
  }

  public isVisible() {
    return this.visible
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
    if (prop === '_none') {
      this.popupProp = null
      if (this.popup && this.popup.isOpen()) {
        this.map.closePopup(this.popup)
      }
    } else {
      this.popupProp = prop
      if (this.popup && this.popup.isOpen()) {
        const popupContent = this.getPopupContent()
        if (!isNull(popupContent)) {
          this.popup.setContent(popupContent)
        }
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
   * top 排名
   */
  public rank(dataList: DataListItem[], options?: RankOptions) {
    this.isRank = true
    this.rankOptions = Object.assign({}, this.rankOptions, options)
    this.rankLayerDataList = dataList

    // 清除老图层
    this.clearLayers()

    // 构建新图层
    const self = this
    this.rankLayer = new RankLayer(
      this.map,
      this.rankLayerDataList,
      this.rankOptions,
      {
        click: (e: any) => self.clickHandler(e),
        contextmenu: (e: any) => self.contextmenuHandler(e),
      }
    )
  }

  public getRankDataList() {
    return this.rankLayerDataList
  }

  public _cluster(dataList: DataListItem[], color?: string) {
    this.clusterColor = color || this.clusterColor
    this.clusterLayerDataList = dataList
    this.isCluster = true
    if (this.map.hasLayer(this.tileLayer)) {
      this.tileLayer.remove()
    }
    // 已经聚合
    if (this.map.hasLayer(this.clusterLayer)) {
      this.updateCluster()
      return
    }
    this.clusterFeatureCollectionFeatures =
      this.clusterFeatureCollectionFeatures ||
      (dataList.map(
        this.mapDataListItemToGeojsonFeature
      ) as FeatureCollection['features'])
    if (this.worker) {
      this.worker.postMessage({
        action: 'loadData',
        data: this.clusterFeatureCollectionFeatures,
      })
    } else {
      // @ts-ignore
      this.superCluster = new Supercluster({
        radius: 160,
        nodeSize: 8,
      }).load(this.clusterFeatureCollectionFeatures)
    }
    this.clusterLayer.addTo(this.map)
    this.clusterLayer.on('contextmenu', (e: any) => {
      const isCluster = e.layer.feature.properties.cluster
      if (!isCluster) {
        this.contextmenuHandler(e)
      }
    })
    this.clusterLayer.on('click', (e: any) => {
      const clusterId = e.layer.feature.properties.cluster_id
      if (clusterId) {
        if (this.worker) {
          this.worker.postMessage({
            action: 'zoom',
            data: {
              clusterId,
              center: e.latlng,
            },
          })
        } else {
          this.map.setView(
            e.latLng,
            // @ts-ignore
            this.superCluster.getClusterExpansionZoom(clusterId)
          )
        }
      } else {
        this.clickHandler(e)
      }
    })
    this.updateCluster()
  }

  /**
   * 聚合
   * @param dataList 包含 geometry 信息的数据集
   */
  public cluster(dataList: DataListItem[], color?: string) {
    this._cluster(dataList, color)
  }

  public setZIndex(zIndex: number) {
    this.options.zIndex = zIndex
    if (this.tileLayer) {
      this.tileLayer.setZIndex(zIndex)
    }
    if (this.isRank) {
      this.rankLayer.setZIndex(zIndex)
    }
  }

  public getZIndex() {
    return this.options.zIndex
  }

  public isTileLayer() {
    return !(this.isCluster || this.isRank)
  }

  public handleClick(e: L.LeafletMouseEvent, data: any) {
    if (this.popup) {
      this.popup.remove()
    }
    if (data.features.length > 0) {
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
   * 获取鼠标下的图层数据信息
   * @param e event
   */
  public async getFeatureInfo(e: L.LeafletMouseEvent) {
    const cqlFilter = await this.options.getCqlFilter(this.getData())
    const res = await getFeatureInfo({
      map: this.map,
      latlng: e.latlng,
      wmsURL: WMS_URL,
      layers: this.layers,
      styles: this.styles,
      cql_filter: cqlFilter,
    })
    return {
      features: res.features,
      originalEvent: e,
    }
  }

  private updateCluster() {
    if (!this.map.hasLayer(this.clusterLayer)) {
      return
    }
    const bounds = this.map.getBounds()
    const bbox = [
      bounds.getWest(),
      bounds.getSouth(),
      bounds.getEast(),
      bounds.getNorth(),
    ] as [number, number, number, number]
    const zoom = this.map.getZoom()
    if (this.worker) {
      this.worker.postMessage({ action: 'draw', bbox, zoom })
    } else {
      const data = (this.superCluster.getClusters(
        bbox,
        zoom
      ) as unknown) as GeoJsonObject
      this.clusterLayer.clearLayers()
      this.clusterLayer.addData(data)
    }
    return
  }

  private async getLayerBounds(layerName: string) {
    const wmsUrl = GET_WMS_LAYER_URL(layerName)
    const capabilities = await getCapabilities(wmsUrl)
    const singleLayer = capabilities.WMT_MS_Capabilities.Capability.Layer
      .Layer as any
    if (!this.layers) {
      if (this.options.getLayers) {
        this.layers = await this.options.getLayers(this.getData())
      } else {
        // console.warn('[TileLayer.getBounds] wms.config.layers is null')
        return null
      }
    }
    const layerInfos = [singleLayer]
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
      zIndex: this.options.zIndex || 1,
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

  private zoomHandler() {
    if (this.isCluster && this.map.hasLayer(this.clusterLayer)) {
      this.updateCluster()
    }
  }
  private moveHandler() {
    if (this.isCluster && this.map.hasLayer(this.clusterLayer)) {
      this.updateCluster()
    }
  }

  /**
   * 点击事件处理
   * @param e event
   */
  private async clickHandler(e: L.LeafletMouseEvent) {
    L.DomEvent.stopPropagation(e.originalEvent)
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
    L.DomEvent.stopPropagation(e.originalEvent)
    if (this.popup) {
      this.popup.remove()
    }
    const data = await this.getFeatureInfo(e)
    this.channelFunc('contextmenu', data)
  }

  /**
   * 注册事件监听
   */
  private registerEvents() {
    this.eventHandlers = [
      // ['single-contextmenu', this.contextmenuHandler], // single-contextmenu 避免在 layer 上触发 contextmenu，由业务 map 触发
      // ['single-click', this.clickHandler], // single-click 避免在 layer 上触发 click，由业务 map 处理
      ['zoom', debounce(this.zoomHandler, 200)],
      ['moveend', debounce(this.moveHandler, 200)],
    ]
  }

  private initClusterEvents() {
    if (this.worker) {
      this.worker.onmessage = (e) => {
        if (e.data.action === 'draw') {
          this.clusterLayer.clearLayers()
          this.clusterLayer.addData(e.data.data)
        } else if (e.data.action === 'zoom') {
          this.map.setView(e.data.center, e.data.expansionZoom)
        }
      }
    }
  }

  private destroyClusterEvents() {
    if (this.worker) {
      this.worker.terminate()
    }
  }
  /**
   * 添加全局事件监听
   * 在 clear layer 时不需要 destroy
   * 只有在 destroy layer 时才需要 destroy
   */
  private initEvents() {
    this.eventHandlers.forEach(([eventName, handler]) => {
      this.map.on(eventName, handler, this)
    })
    this.initClusterEvents()
  }
  /**
   * 移除事件监听
   */
  private destroyEvents() {
    this.eventHandlers.forEach(([eventName, handler]) => {
      this.map.off(eventName, handler, this)
    })
    this.destroyClusterEvents()
  }

  private mapDataListItemToGeojsonFeature(dataItem: DataListItem) {
    const { geometry, ...properties } = dataItem
    return {
      type: 'Feature',
      properties,
      geometry,
    }
  }

  private createClusterIcon(feature: any, latlng: L.LatLng) {
    const levels = 4
    const color = this.clusterColor
    if (!feature.properties.cluster) {
      return L.marker(latlng, {
        icon: L.icon({
          iconUrl: `http://47.101.142.174:8011/fs/svg/marker.svg?color=${color.slice(
            1
          )}`,
          iconAnchor: [11, 11],
        }),
      })
    }

    const length = this.clusterLayerDataList.length
    const step = length / levels
    const scaleStep = (1 - 0.75) / levels
    const count = feature.properties.point_count
    const scale = (Math.floor((count - 1) / step) + 1) * scaleStep + 0.75
    const icon = L.divIcon({
      className: 'cluster-icon',
      html: `
       <div
        style="
          border-radius: 50%;
          position: relative;
          width: 50px;
          height: 50px;
          transform: scale3d(${scale}, ${scale}, 1)
        "
        >
        <div
          style="
            border-radius: 50%;
            background: ${lighten(color)};
            width: 50px;
            height: 50px;
            opacity: 0.7;
            position: absolute;
            top: 0;
            left: 0;
            ">
        </div>
        <div
          style="
            border-radius: 50%;
            background: ${color};
            opacity: 0.8;
            width: 32px;
            height: 32px;
            margin: 9px;
            position: absolute;
          ">
        </div>
        <div
          style="
            text-align: center;
            line-height: 32px;
            position: absolute;
            top: 9px;
            left: 9px;
            width: 32px;
            height: 32px;
            color: white;
            font-size: 14px;
          "
          >
          ${feature.properties.point_count_abbreviated}
        </div>
       </div>
      `,
      iconSize: [40, 40],
    })

    return L.marker(latlng, { icon })
  }
}
