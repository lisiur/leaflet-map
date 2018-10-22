import { DataListItem, ChannelFunc } from '../definitions'
import Polygon from './Polygon'

/** 渲染颜色样式 单色|分段 */
type PolygonLayerRenderColorType = 'single' | 'segmented'
interface PolygonLayerOptions extends L.PolylineOptions {
  renderPolygonColorType: PolygonLayerRenderColorType

  /** popup 展示字段 */
  popupAttr?: string
  /** tooltip 展示字段 */
  tooltipAttr?: string

  opacity?: number

  /** 分段渲染统计字段 */
  segmentedAttr?: string
  segmentedColors?: string[]
}
export default class PolygonsLayer {
  private map: L.Map
  private dataList: DataListItem[]
  private options: PolygonLayerOptions
  private channelFunc: ChannelFunc
  private polygons: Polygon[]
  private segmentedMin: number
  private segmentedStep: number
  // private focusedPolygon: Polygon
  private layer: L.LayerGroup
  private polygonLayer: L.LayerGroup
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: PolygonLayerOptions,
    channelFunc: ChannelFunc
  ) {
    const defaultOptions: PolygonLayerOptions = {
      renderPolygonColorType: 'single',
    }
    this.map = map
    this.dataList = dataList
    this.options = options
    this.channelFunc = channelFunc

    this.segmentedMin = Infinity
    this.segmentedStep = 1
    // this.focusedPolygon = null

    this.options = Object.assign({}, defaultOptions, options)

    // 缓存 segment 相关数据
    this.cacheSegmentParams()
    this.initPolygons()
  }
  public draw(options?: PolygonLayerOptions) {
    this.options = Object.assign(this.options, options)
    return this.redraw()
  }
  public redraw() {
    if (this.layer) {
      this.map.removeLayer(this.layer)
    }
    this.layer = this.configPolygonLayer()
    this.map.addLayer(this.layer)
    return this
  }
  private initPolygons() {
    this.dataList.forEach((data) => {
      this.cacheSegmentParams()

      const layer = L.geoJSON(data.geometry).getLayers()[0]
      const polygon = new Polygon((layer as L.Polygon).getLatLngs())

      // 将相关值绑定到 marker上
      polygon.setData(data)

      this.polygons.push(polygon)
    })
  }
  private configPolygonLayer() {
    this.polygonLayer = L.layerGroup()
    this.polygons.forEach((polygon) => {
      polygon.on('click', () => {
        this.polygonClickHandler(polygon)
      })
      const options: L.PolylineOptions = Object.assign({}, this.options, {
        color: this.getSegmentedPolygonColor(polygon.getData()),
      })
      const newPolygon = new Polygon(polygon.getLatLngs(), options)
      this.polygonLayer.addLayer(newPolygon)
    })
    return this.polygonLayer
  }
  private polygonClickHandler(polygon: Polygon) {
    // this.focusedPolygon = polygon
    this.channelFunc('on-click-polygon', polygon)
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
  private getSegmentedPolygonColor(data: DataListItem): string {
    const val = data[this.options.segmentedAttr]
    const color = this.options.segmentedColors[
      (val - this.segmentedMin) / this.segmentedStep
    ]
    return color
  }
}
