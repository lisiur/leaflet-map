import { DataListItem, ChannelFunc, GetDataByLatLng } from '../definitions'
import { optionsMerge } from 'src/utils/index'

interface WmsTileOptions extends L.WMSOptions {
  wmsUrl?: string
  getDataByLatLng?: GetDataByLatLng
  popupAttr?: string
}

export default class WmsTile {
  public type: string
  private map: L.Map
  private dataList: DataListItem[]
  private options: WmsTileOptions
  private channelFunc: ChannelFunc
  private layer: L.TileLayer
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: WmsTileOptions,
    channelFunc: ChannelFunc
  ) {
    this.type = 'wmsTile'
    this.map = map
    this.dataList = dataList
    this.options = options
    this.channelFunc = channelFunc
    this.layer = null
    this.initOptions(options)
    this.initEvents()
  }
  public draw(options?: WmsTileOptions) {
    if (this.layer) {
      this.layer.remove()
    }
    if (options) {
      this.initOptions(options)
    }
    this.layer = this.getLayer()
    this.layer.addTo(this.map)
  }

  public destroy() {
    if (this.layer) {
      this.layer.remove()
    }
    this.map.off('click', this.clickHandler, this)
  }

  public pitch(id: string) {
    this.dataList.forEach((data) => {
      if (data.id === id) {
        const polygon = L.geoJSON(data.geometry).getLayers()[0] as L.Polygon
        this.showPopup(data, polygon.getCenter())
        this.map.fitBounds(polygon.getBounds())
      }
    })
  }

  private initEvents() {
    this.map.on('click', this.clickHandler, this)
  }

  private initOptions(options: WmsTileOptions) {
    const defaultOptions: WmsTileOptions = {
      popupAttr: 'gridId',
      format: 'image/png',
      transparent: true,
      crs: L.CRS.EPSG4326,
    }
    this.options = optionsMerge(
      this.options,
      defaultOptions,
      options
    ) as WmsTileOptions
  }

  private getLayer() {
    const { baseUrl, ...options } = this.options
    return L.tileLayer.wms(baseUrl, options)
  }
  private async clickHandler(event: L.LeafletMouseEvent) {
    this.channelFunc('click', event)
    if (!this.options.getDataByLatLng) {
      // console.warn('options.getDataByLatLng is not defined')
      return
    }
    const latlng = [event.latlng.lat, event.latlng.lng]
    const data = await this.options.getDataByLatLng(latlng)
    this.showPopup(data, event.latlng)
  }
  private showPopup(data: DataListItem, latlng: L.LatLng) {
    L.popup()
      .setLatLng(latlng)
      .setContent(data[this.options.popupAttr])
      .openOn(this.map)
  }
}
