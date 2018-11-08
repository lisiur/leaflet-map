import { ChannelFunc } from '../definitions'
import { optionsMerge } from 'src/utils/index'

interface WmsTileOptions extends L.WMSOptions {
  baseUrl?: string
}

export default class WmsTile {
  public type: string
  private map: L.Map
  private options: WmsTileOptions
  private channelFunc: ChannelFunc
  private layer: L.TileLayer
  constructor(map: L.Map, options: WmsTileOptions, channelFunc: ChannelFunc) {
    this.type = 'wmsTile'
    this.map = map
    this.options = options
    this.channelFunc = channelFunc
    this.layer = null
    this.initOptions(options)
    this.initEvents()
    this.configLayer()
  }
  public draw() {}
  private initEvents() {
    this.map.on('click', this.showGridPopup, this)
  }
  private initOptions(options: WmsTileOptions) {
    const defaultOptions: WmsTileOptions = {
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
  private configLayer() {
    if (this.layer) {
      this.layer.remove()
    }

    const { baseUrl, ...options } = this.options
    this.layer = L.tileLayer.wms(baseUrl, options)
    this.layer.addTo(this.map)
  }
  private showGridPopup(event: L.LeafletMouseEvent) {}
}
