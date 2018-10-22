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
export default class PolylineLayer {
  private map: L.Map
  private dataList: DataListItem[]
  private options: PolylineLayerOptions
  private channelFunc: ChannelFunc
  private polylines: Polyline[]
  private segmentedMin: number
  private segmentedStep: number
  // private focusedPolyline: Polyline
  private layer: L.LayerGroup
  private polylineLayer: L.LayerGroup
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: PolylineLayerOptions,
    channelFunc: ChannelFunc
  ) {
    const defaultOptions: PolylineLayerOptions = {
      renderPolylineColorType: 'single',
    }
    this.map = map
    this.dataList = dataList
    this.options = options
    this.channelFunc = channelFunc

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
    if (this.layer) {
      this.map.removeLayer(this.layer)
    }
    this.layer = this.configPolylineLayer()
    this.map.addLayer(this.layer)
    return this
  }
  private initPolylines() {
    this.dataList.forEach((data) => {
      this.cacheSegmentParams()

      const layer = L.geoJSON(data.geometry).getLayers()[0]
      const polyline = new Polyline(
        (layer as L.Polyline).getLatLngs() as PolylineOptions
      )

      // 将相关值绑定到 marker上
      polyline.setData(data)

      this.polylines.push(polyline)
    })
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
  private polylineClickHandler(polyline: Polyline) {
    // this.focusedPolyline = polyline
    this.channelFunc('on-click-polyline', polyline)
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
  private getSegmentedPolylineColor(data: DataListItem): string {
    const val = data[this.options.segmentedAttr]
    const color = this.options.segmentedColors[
      (val - this.segmentedMin) / this.segmentedStep
    ]
    return color
  }
}
