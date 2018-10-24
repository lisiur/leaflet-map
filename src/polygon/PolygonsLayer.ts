import { DataListItem, ChannelFunc } from '../definitions'
import Polygon from './Polygon'

/** 渲染颜色样式 单色|分段 */
type PolygonLayerRenderColorType = 'single' | 'segmented'
export interface PolygonLayerOptions extends L.PolylineOptions {
  renderPolygonColorType: PolygonLayerRenderColorType

  /** popup 展示字段 */
  popupAttr?: string | { label: string; value: any }
  /** tooltip 展示字段 */
  tooltipAttr?: string

  opacity?: number

  /** 分段渲染统计字段 */
  segmentedAttr?: string
  segmentedColors?: string[]
}
export default class PolygonsLayer {
  public type: string

  protected visible: boolean
  protected layer: L.LayerGroup

  protected map: L.Map
  protected dataList: DataListItem[]
  protected options: PolygonLayerOptions
  protected channelFunc: ChannelFunc
  protected segmentedMin: number
  protected segmentedStep: number
  protected polygons: Polygon[]
  // private focusedPolygon: Polygon
  protected polygonLayer: L.LayerGroup

  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: PolygonLayerOptions,
    channelFunc: ChannelFunc
  ) {
    const defaultOptions: PolygonLayerOptions = {
      color: '#3388FF',
      fillColor: '#3388FF',
      opacity: 0.3,
      renderPolygonColorType: 'single',
      segmentedColors: ['#3388FF'],
    }
    this.type = 'polygon'
    this.map = map
    this.dataList = dataList
    this.options = options
    this.channelFunc = channelFunc

    this.visible = true
    this.polygons = []
    this.segmentedMin = Infinity
    this.segmentedStep = 1
    // this.focusedPolygon = null

    this.options = Object.assign({}, defaultOptions, options)
  }
  public draw(options?: PolygonLayerOptions) {
    this.options = Object.assign(this.options, options)
    this.initPolygons()
    return this.redraw()
  }
  public redraw() {
    if (!this.visible) {
      return
    }
    if (this.layer) {
      this.layer.remove()
    }
    this.layer = this.configPolygonLayer()
    this.map.addLayer(this.layer)
    return this
  }
  public fitBounds() {
    this.map.fitBounds(this.getBounds())
  }
  public getBounds(): L.LatLngBoundsExpression {
    if (this.polygons.length <= 0) {
      return this.map.getBounds()
    }
    return this.polygons.reduce(
      (prev, curr) => prev.extend(curr.getBounds()),
      this.polygons[0].getBounds()
    )
  }
  public destroy() {
    if (this.layer) {
      this.map.removeLayer(this.layer)
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
  public pitch(id: string) {
    this.polygons.forEach((polygon) => {
      if (polygon.getData().id === id) {
        polygon.fire('click')
        return
      }
    })
  }
  protected getToolTipContent(data: DataListItem) {
    return '' + data[this.options.tooltipAttr]
  }
  protected getPopupContent(data: DataListItem) {
    if (!this.options.popupAttr) {
      return ''
    }
    if (typeof this.options.popupAttr === 'string') {
      return `${this.options.popupAttr}: ${data[this.options.popupAttr]}`
    }
    if (typeof this.options.popupAttr === 'object') {
      return `${this.options.popupAttr.label}: ${
        data[this.options.popupAttr.value]
      }`
    }
  }
  protected cacheSegmentParams() {
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
  protected getSegmentedPolygonColor(data: DataListItem): string {
    const val = data[this.options.segmentedAttr]
    const color = this.options.segmentedColors[
      parseInt('' + (val - this.segmentedMin) / this.segmentedStep, 10)
    ]
    return color
  }
  protected polygonClickHandler(polygon: Polygon) {
    // this.focusedPolygon = polygon
    this.channelFunc('on-click-polygon', polygon)
  }
  protected initPolygons() {
    // 缓存 segment 相关数据
    this.cacheSegmentParams()
    this.polygons = []
    this.dataList.forEach((data) => {
      const layer = L.geoJSON(data.geometry).getLayers()[0]
      const polygon = new Polygon((layer as L.Polygon).getLatLngs())

      // 将相关值绑定到 marker上
      polygon.setData(data)
      polygon.on('click', () => {
        this.polygonClickHandler(polygon)
      })

      this.polygons.push(polygon)
    })
  }
  private configPolygonLayer() {
    this.polygonLayer = L.layerGroup()
    this.polygons.forEach((polygon) => {
      let color = this.options.color
      let fillColor = this.options.fillColor
      if (this.options.renderPolygonColorType === 'segmented') {
        color = this.getSegmentedPolygonColor(polygon.getData())
        fillColor = color
      }
      const options: L.PolylineOptions = Object.assign({}, this.options, {
        color,
        fillColor,
      })
      // 重新应用 options
      const newPolygon = new Polygon(polygon.getLatLngs(), options)
      newPolygon.setData(polygon.getData())
      newPolygon.on('click', () => {
        this.polygonClickHandler(polygon)
      })
      if (this.options.tooltipAttr) {
        newPolygon.bindTooltip(this.getToolTipContent(newPolygon.getData()))
      }
      if (this.options.popupAttr) {
        newPolygon.bindPopup(this.getPopupContent(newPolygon.getData()))
      }

      this.polygonLayer.addLayer(newPolygon)
    })
    return this.polygonLayer
  }
}
