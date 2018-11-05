import { DataListItem, ChannelFunc } from '../definitions'
import MarkersLayer, { MarkersLayerOptions } from './MarkersLayer'
import { optionsMerge } from 'src/utils/index'
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
    this.options = optionsMerge(
      this.options,
      { bufferOptions: defaultBufferOptions },
      options
    ) as MarkersBufferLayerOptions
  }

  public draw(options?: MarkersBufferLayerOptions) {
    this.options = optionsMerge(
      this.options,
      options
    ) as MarkersBufferLayerOptions
    this.options.bufferOptions.color = this.options.iconColor
    this.initMarkers()
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

    this.layer = L.layerGroup()
    this.layer.addLayer(this.markerLayer)
    this.layer.addLayer(this.bufferLayer)

    this.map.addLayer(this.layer)
    return this
  }

  public getBounds(): L.LatLngBoundsExpression {
    if (this.markers.length <= 0) {
      return this.map.getBounds()
    }
    return this.markers.reduce((prev, curr) => {
      return prev.extend(
        curr.getLatLng().toBounds(this.options.bufferOptions.radius)
      )
    }, this.markers[0].getLatLng().toBounds(this.options.bufferOptions.radius))
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
      } else {
        switch (typeof this.options.popupAttr) {
          case 'string':
            circleLayer.bindTooltip(
              '' + marker.getData()[this.options.popupAttr]
            )
            break
          case 'object':
            circleLayer.bindTooltip(
              '' + marker.getData()[this.options.popupAttr.value]
            )
          default:
            break
        }
      }
      groupLayer.addLayer(circleLayer)
    })
    return groupLayer
  }
}
