import { DataListItem, ChannelFunc } from '../definitions'
import PolylinesLayer from './PolylinesLayer'

/** 渲染颜色样式 单色|分段 */
type PolylineLayerRenderColorType = 'single' | 'segmented'
interface PolylineBufferLayerOptions extends L.CorridorOptions {
  renderPolylineColorType: PolylineLayerRenderColorType

  /** popup 展示字段 */
  popupAttr?: string
  /** tooltip 展示字段 */
  tooltipAttr?: string

  opacity?: number

  /** 分段渲染统计字段 */
  segmentedAttr?: string
  segmentedColors?: string[]
}
export default class PolylinesBufferLayer extends PolylinesLayer {
  public type: string
  protected options: PolylineBufferLayerOptions
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: PolylineBufferLayerOptions,
    channelFunc: ChannelFunc
  ) {
    super(map, dataList, options, channelFunc)
    const defaultOptions: PolylineBufferLayerOptions = {
      renderPolylineColorType: 'single',
      segmentedColors: ['#3388FF'],
      corridor: 100,
      color: '#3388FF',
      opacity: 0.5,
    }
    this.type = 'polylineBuffer'
    this.map = map
    this.dataList = dataList
    this.options = options
    this.channelFunc = channelFunc

    this.visible = true
    this.polylines = []
    this.segmentedMin = Infinity
    this.segmentedStep = 1
    // this.focusedPolyline = null

    this.options = Object.assign({}, defaultOptions, options)
    this.initPolylines()
  }
  public draw(options?: PolylineBufferLayerOptions) {
    this.options = Object.assign(this.options, options)
    return this.redraw()
  }
  public redraw() {
    if (!this.visible) {
      return
    }
    if (this.layer) {
      this.layer.remove()
    }
    this.layer = this.configPolylineBufferLayer()
    this.map.addLayer(this.layer)
    return this
  }
  public fitBounds() {
    this.map.fitBounds(this.getBounds())
  }
  public getBounds(): L.LatLngBoundsExpression {
    if (this.polylines.length <= 0) {
      return this.map.getBounds()
    }
    return this.polylines.reduce(
      (prev, curr) => prev.extend(curr.getBounds()),
      this.polylines[0].getBounds()
    )
  }
  public changeColor(color: string) {
    this.options.color = color
    this.redraw()
  }
  private configPolylineBufferLayer() {
    this.polylineLayer = L.layerGroup()
    this.polylines.forEach((polyline) => {
      polyline.on('click', () => {
        this.polylineClickHandler(polyline)
      })
      const options: PolylineBufferLayerOptions = Object.assign(
        {},
        this.options,
        {
          color:
            this.options.renderPolylineColorType === 'single'
              ? this.options.color
              : this.getSegmentedPolylineColor(polyline.getData()),
        }
      )

      const polylineBuffer = L.corridor(
        (polyline.getLatLngs() as L.LatLng[]).map((latLng) =>
          L.latLng([latLng.lng, latLng.lat])
        ),
        options
      )
      if (this.options.tooltipAttr) {
        polylineBuffer.bindTooltip(this.getToolTipContent(polyline.getData()))
      }
      this.polylineLayer.addLayer(polylineBuffer)
    })
    return this.polylineLayer
  }
}
