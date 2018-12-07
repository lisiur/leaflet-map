import { ILayer, ChannelFunc } from '../definitions'
import { getFeatureInfo, getCapabilities } from './utils'
import { isUndefined, isNull } from '../utils'

type GetStyles = (options: any) => Promise<string>
type GetLayers = (options: any) => Promise<string>
export interface WmsTileOptions extends L.WMSOptions {
  wmsURL?: string
  getLayers?: GetLayers
  getStyles?: GetStyles
}

const POPUP_CONTENT_NULL_TEXT = '无数据'

export default class TileLayer implements ILayer {
  private visible: boolean
  private tileLayer: L.TileLayer
  private popup: L.Popup
  private popupProp: string
  private popupData: any
  private layers: string
  private styles: string
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
    this.initEvents()
  }
  public async draw() {
    if (!this.visible) {
      return
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
    this.tileLayer.remove()
    this.destroyEvents()
  }
  public getData() {
    return this.data
  }
  public getOptions() {
    return this.options
  }
  public async fitBounds() {
    this.map.fitBounds(await this.getBounds())
  }
  public async getBounds() {
    const jsData = await getCapabilities(this.options.wmsURL)
    const layerList = jsData.WMT_MS_Capabilities.Capability.Layer.Layer as any[]
    const layers = this.layers.split(',')
    const layerTableNameList = layers.map((it) => it.split(':')[1])
    const layerInfos = layerTableNameList
      .map((tableName) => {
        return layerList.find((it) => it.Name._text === tableName)
      })
      .filter((it) => !isUndefined(it))
    if (layerInfos.length <= 0) {
      return
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
  public toggleVisible(visible: boolean): void {
    this.visible = visible
    if (this.visible) {
      this.draw()
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
  private async getLayer() {
    const { wmsURL, getLayers, getStyles } = this.options
    if (getLayers) {
      this.layers = await getLayers(this.getData())
    }
    if (getStyles) {
      this.styles = await getStyles(this.getData())
    }
    return L.tileLayer.wms(wmsURL, {
      layers: this.layers,
      styles: this.styles,
      transparent: true,
      format: 'image/png',
      crs: L.CRS.EPSG4326,
    })
  }
  private async clickHandler(e: L.LeafletMouseEvent) {
    const data = await this.getFeatureInfo(e)
    if (this.popup) {
      this.popup.remove()
    }
    if (data.features.length > 0) {
      if (!isNull(this.popupProp)) {
        this.popupData = data.features[0].properties
        const popupContent = this.getPopupContent()
        if (!isNull(popupContent)) {
          this.popup = L.popup()
            .setLatLng(e.latlng)
            .setContent(popupContent)
            .openOn(this.map)
        }
      }
    }
    this.channelFunc('click', data)
  }
  private getPopupContent(): null | string {
    if (isNull(this.popupProp)) {
      return null
    }
    const popupContent = this.popupData[this.popupProp]
    return isNull(popupContent) ? POPUP_CONTENT_NULL_TEXT : `${popupContent}`
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
