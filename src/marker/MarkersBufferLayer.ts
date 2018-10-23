import { DataListItem, ChannelFunc } from '../definitions'
import MarkersLayer, { MarkersLayerOptions } from './MarkersLayer'
interface MarkersBufferLayerOptions extends MarkersLayerOptions {
  bufferTooltipAttr: string
  bufferOptions: L.CircleMarkerOptions
}
export default class MarkersBufferLayer extends MarkersLayer {
  public options: MarkersBufferLayerOptions
  private bufferLayer: L.LayerGroup
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: MarkersBufferLayerOptions,
    channelFunc: ChannelFunc
  ) {
    super(map, dataList, options, channelFunc)
    this.type = 'markerBuffer'
    const defaultBufferOptions: L.CircleMarkerOptions = {
      radius: 1000,
      stroke: true,
      weight: 1,
    }
    this.options = Object.assign(
      this.options,
      { bufferOptions: defaultBufferOptions },
      options
    )
  }

  public draw(options?: MarkersBufferLayerOptions) {
    this.options = Object.assign(this.options, options)
    return this.redraw()
  }

  public redraw() {
    if (!this.visible) {
      return
    }
    if (this.markerLayer) {
      this.map.removeLayer(this.markerLayer)
    }
    if (this.bufferLayer) {
      this.map.removeLayer(this.bufferLayer)
    }
    this.markerLayer = this.configMarkerLayer()
    this.bufferLayer = this.configBufferLayer()
    this.map.addLayer(this.markerLayer)
    this.map.addLayer(this.bufferLayer)
    return this
  }

  private configBufferLayer() {
    const groupLayer = L.layerGroup()
    this.markers.forEach((marker) => {
      const circleLayer = L.circle(
        marker.getLatLng(),
        this.options.bufferOptions
      )
      if (this.options.bufferTooltipAttr) {
        circleLayer.bindTooltip(
          '' + marker.getData()[this.options.bufferTooltipAttr]
        )
      }
      groupLayer.addLayer(circleLayer)
    })
    return groupLayer
  }
}
