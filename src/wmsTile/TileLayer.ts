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
  wmsURL?: string
  getLayers?: GetLayers
  getStyles?: GetStyles
  getEnvParams?: GetEnvParams
  getCqlFilter?: GetCqlFilter
}

const POPUP_CONTENT_NULL_TEXT = '无数据'

const WMS_URL = '/geo/workspace_dev/wms'
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
  private layers: string
  private styles: string
  private envParams: object
  private cqlFilter: string
  private gridLayer: GridLayer
  private clusterLayer: MarkersLayer
  constructor(
    public map: L.Map,
    public options: WmsTileOptions,
    public channelFunc: ChannelFunc,
    public data: any
  ) {
    this.visible = true
    this.tileLayer = null
    this.popup = null
    this.popupProp = null
    this.popupData = null
    this.layers = this.options.layers
    this.styles = this.options.styles
    this.gridLayer = null
    this.envParams = null
    this.cqlFilter = null
    this.initEvents()
  }
  public async draw() {
    if (!this.visible) {
      return
    }
    if (this.clusterLayer) {
      this.clusterLayer.destroy()
    }
    if (this.tileLayer) {
      this.tileLayer.remove()
    }
    this.tileLayer = await this.getLayer()
    if (this.tileLayer) {
      this.tileLayer.addTo(this.map)
    }
  }
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
  public getData() {
    return this.data
  }
  public getOptions() {
    return this.options
  }
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
  public async getBounds(fresh: boolean = false) {
    if (isNull(geoserverCapabilities)) {
      await geoserverCapabilitiesPromise
    }
    if (fresh) {
      geoserverCapabilities = await getCapabilities(this.options.wmsURL)
    }
    const layerList = geoserverCapabilities.WMT_MS_Capabilities.Capability.Layer
      .Layer as any[]
    if (!this.layers) {
      if (this.options.getLayers) {
        this.layers = await this.options.getLayers(this.getData())
      } else {
        console.warn('wms.config.layers is null')
        return null
      }
    }
    const layers = this.layers.split(',')
    const layerTableNameList = layers.map((it) => it.split(':')[1])
    const layerInfos = layerTableNameList
      .map((tableName) => {
        return layerList.find((it) => it.Name._text === tableName)
      })
      .filter((it) => !isUndefined(it))
    if (layerInfos.length <= 0) {
      console.warn('not found layerInfo')
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
      return this.draw()
    } else {
      this.destroy()
    }
  }
  public pitch(_id: string): void {
    throw new Error('Method not implemented.')
  }
  public setPopupProp(prop: string) {
    this.popupProp = prop
    if (this.popup && this.popup.isOpen()) {
      const popupContent = this.getPopupContent()
      if (!isNull(popupContent)) {
        this.popup.setContent(popupContent)
      }
    }
  }
  public showGrid(distance: number = 100) {
    this.hideGrid()
    this.gridLayer = new GridLayer({ map: this.map, distance })
    this.gridLayer.draw()
  }
  public hideGrid() {
    if (this.gridLayer) {
      this.gridLayer.remove()
    }
  }

  public _cluster(dataList: DataListItem[]) {
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
  private async getLayer() {
    const {
      wmsURL,
      getLayers,
      getStyles,
      getEnvParams,
      getCqlFilter,
    } = this.options
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
    const tileLayer = L.tileLayer.wms(wmsURL, {
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
  private async contextmenuHandler(e: L.LeafletMouseEvent) {
    if (this.popup) {
      this.popup.remove()
    }
    const data = await this.getFeatureInfo(e)
    this.channelFunc('contextmenu', data)
  }
  private async getFeatureInfo(e: L.LeafletMouseEvent) {
    const res = await getFeatureInfo({
      map: this.map,
      latlng: e.latlng,
      wmsURL: this.options.wmsURL,
      layers: this.layers,
      styles: this.styles,
    })
    return {
      features: res.features,
      originalEvent: e,
    }
  }
  private initEvents() {
    this.map.on('contextmenu', this.contextmenuHandler, this)
    this.map.on('click', this.clickHandler, this)
  }
  private destroyEvents() {
    this.map.off('click', this.clickHandler, this)
  }
}