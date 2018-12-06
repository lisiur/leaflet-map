import { ILayer, ChannelFunc } from 'src/definitions'
import { getFeatureInfo, getCapabilities } from './utils'

export interface WmsTileOptions extends L.WMSOptions {
  wmsURL?: string
}

export default class TileLayer implements ILayer {
  private visible: boolean
  private layer: L.TileLayer
  constructor(
    public map: L.Map,
    public options: WmsTileOptions,
    public channelFunc: ChannelFunc,
    public data: any
  ) {
    this.visible = true
    this.layer = null
    this.initEvents()
  }
  public draw() {
    if (!this.visible) {
      return
    }
    if (this.layer) {
      this.layer.remove()
    }
    this.layer = this.getLayer()
    if (this.layer) {
      this.layer.addTo(this.map)
    }
  }
  public destroy(): void {
    this.layer.remove()
    this.destroyEvents()
  }
  public getData() {
    return this.data
  }
  public getOptions() {
    return this.options
  }
  public async fitBounds() {
    const jsData = await getCapabilities(this.options.wmsURL)
    const layers = jsData.WMT_MS_Capabilities.Capability.Layer.Layer as any[]
    // TODO:
    const layer = layers.find(
      (it) => it.Name._text === this.options.layers.split(':')[1]
    )
    if (!layer) {
      return
    }
    const { minx, miny, maxx, maxy } = layer.LatLonBoundingBox._attributes
    const bounds = L.latLngBounds(L.latLng(miny, minx), L.latLng(maxy, maxx))
    this.map.fitBounds(bounds)
  }
  public getBounds(): void {
    throw new Error('Method not implemented.')
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
  private getLayer(): L.TileLayer {
    const { wmsURL, layers, styles } = this.options
    return L.tileLayer.wms(wmsURL, {
      layers,
      styles,
      transparent: true,
      format: 'image/png',
      crs: L.CRS.EPSG4326,
    })
  }
  private async clickHandler(e: L.LeafletMouseEvent) {
    const res = await getFeatureInfo({
      map: this.map,
      latlng: e.latlng,
      wmsURL: this.options.wmsURL,
      layers: this.options.layers,
      styles: this.options.styles,
    })
    this.channelFunc('on-click', res)
  }
  private initEvents() {
    this.map.on('click', this.clickHandler, this)
  }
  private destroyEvents() {
    this.map.off('click', this.clickHandler, this)
  }
}
