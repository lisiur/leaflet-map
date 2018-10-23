import { DataListItem, ChannelFunc } from '../definitions'
import Polyline, { PolylineOptions } from './Polyline'

/** 渲染颜色样式 单色|分段 */
type PolylineLayerRenderColorType = 'single' | 'segmented'
interface PolylineLayerOptions extends L.PolylineOptions {
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
export default class PolylinesLayer {
  public type: string

  protected visible: boolean
  protected layer: L.LayerGroup

  protected map: L.Map
  protected dataList: DataListItem[]
  protected options: PolylineLayerOptions
  protected channelFunc: ChannelFunc
  protected polylines: Polyline[]
  protected segmentedMin: number
  protected segmentedStep: number
  // private focusedPolyline: Polyline
  protected polylineLayer: L.LayerGroup
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: PolylineLayerOptions,
    channelFunc: ChannelFunc
  ) {
    const defaultOptions: PolylineLayerOptions = {
      color: '#3388FF',
      renderPolylineColorType: 'single',
      segmentedColors: ['#3388FF'],
    }
    this.type = 'polyline'
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

    // 缓存 segment 相关数据
    this.cacheSegmentParams()
    this.initPolylines()
  }
  public draw(options?: PolylineLayerOptions) {
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
    this.layer = this.configPolylineLayer()
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
  public destroy() {
    if (this.layer) {
      this.layer.remove()
    }
  }
  public toggleVisible(visible: boolean) {
    this.visible = visible
    if (!this.layer) {
      return
    }
    if (visible) {
      this.map.addLayer(this.layer)
    } else {
      this.map.removeLayer(this.layer)
    }
  }
  public changeColor(color: string) {
    this.options.fillColor = color
    this.redraw()
  }
  protected initPolylines() {
    this.dataList.forEach((data) => {
      this.cacheSegmentParams()

      const layer = L.geoJSON(data.geometry).getLayers()[0]
      let fillColor = this.options.fillColor
      if (this.options.renderPolylineColorType === 'segmented') {
        fillColor = this.getSegmentedPolylineColor(data)
      }
      const polyline = new Polyline(
        (layer as L.Polyline).getLatLngs() as PolylineOptions,
        Object.assign({}, this.options, { fillColor })
      )

      // 将相关值绑定到 marker上
      polyline.setData(data)

      this.polylines.push(polyline)
    })
  }
  protected getSegmentedPolylineColor(data: DataListItem): string {
    const val = data[this.options.segmentedAttr]
    const color = this.options.segmentedColors[
      (val - this.segmentedMin) / this.segmentedStep
    ]
    return color
  }
  protected polylineClickHandler(polyline: Polyline) {
    // this.focusedPolyline = polyline
    this.channelFunc('on-click-polyline', polyline)
  }
  protected getToolTipContent(data: DataListItem) {
    return '' + data[this.options.tooltipAttr]
  }
  private configPolylineLayer() {
    this.polylineLayer = L.layerGroup()
    this.polylines.forEach((polyline) => {
      polyline.on('click', () => {
        this.polylineClickHandler(polyline)
      })
      const options: L.PolylineOptions = Object.assign({}, this.options, {
        color: this.getSegmentedPolylineColor(polyline.getData()),
      })
      const newPolyline = new Polyline(
        polyline.getLatLngs() as PolylineOptions,
        options
      )
      this.polylineLayer.addLayer(newPolyline)
    })
    return this.polylineLayer
  }
  private cacheSegmentParams() {
    const segmentedLength = this.options.segmentedColors.length
    let maxVal = -Infinity
    let minVal = Infinity
    for (const data of this.dataList) {
      const val = data[this.options.segmentedAttr]
      maxVal = Math.max(maxVal, val)
      minVal = Math.min(minVal, val)
    }
    const step = (maxVal - minVal + 1) / segmentedLength
    this.segmentedMin = minVal
    this.segmentedStep = step
  }
}
