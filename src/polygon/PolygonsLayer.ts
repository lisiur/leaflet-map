import { lighten, darken, optionsMerge } from '../utils/index'
import { DataListItem, ChannelFunc } from '../definitions'
import Polygon from './Polygon'

/** 渲染颜色样式 单色|分段 */
type PolygonLayerRenderColorType = 'single' | 'segmented'
type ColorMode = 'darken' | 'lighten' | 'normal'

const DEFAULT_COLOR = '#72AFDF'
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
  protected focusedPolygon: Polygon
  protected focusedDisplayPolygon: Polygon
  protected polygonLayer: L.LayerGroup

  private defaultOptions: PolygonLayerOptions
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: PolygonLayerOptions,
    channelFunc: ChannelFunc
  ) {
    if (!Array.isArray(dataList) || dataList.length === 0) {
      throw new Error(`dataList 必须是非空数组`)
    }

    this.defaultOptions = {
      popupAttr: { label: '名称', value: 'name' },
      tooltipAttr: 'name',
      color: DEFAULT_COLOR,
      fill: true,
      fillColor: DEFAULT_COLOR,
      weight: 1,
      opacity: 1,
      fillOpacity: 0.4,
      renderPolygonColorType: 'single',
      segmentedColors: [DEFAULT_COLOR],
    }
    this.type = 'polygon'
    this.map = map
    this.dataList = dataList
    this.options = optionsMerge(
      this.defaultOptions,
      options
    ) as PolygonLayerOptions
    this.channelFunc = channelFunc

    this.visible = true
    this.polygons = []
    this.segmentedMin = Infinity
    this.segmentedStep = 1
    this.focusedPolygon = null
    this.focusedDisplayPolygon = null
  }
  public draw(options?: PolygonLayerOptions) {
    this.initOptions(options)
    this.initPolygons()
    this.initEvent()
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
    this.map.fitBounds(this.getBounds(), { padding: [20, 20] })
  }
  public getBounds(): L.LatLngBoundsExpression {
    if (this.polygons.length <= 0) {
      return this.map.getBounds()
    }
    return this.polygons.reduce(
      (prev, curr) => prev.extend(curr.getBounds()),
      L.latLngBounds(
        this.polygons[0].getBounds().getNorthEast(),
        this.polygons[0].getBounds().getSouthWest()
      )
    )
  }
  public destroy() {
    if (this.layer) {
      this.map.removeLayer(this.layer)
    }
    if (this.focusedDisplayPolygon) {
      this.map.removeLayer(this.focusedDisplayPolygon)
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
      if (this.focusedDisplayPolygon) {
        this.focusedDisplayPolygon.remove()
      }
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
        this.polygonClickHandler(polygon, true)
        return
      }
    })
  }
  // tslint:disable-next-line:no-empty
  protected initEvent() {}
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
  protected polygonClickHandler(polygon: Polygon, fitBounds?: boolean) {
    this.focusedPolygon = polygon
    // 删除前一个 focus
    if (this.focusedDisplayPolygon) {
      this.focusedDisplayPolygon.remove()
    }
    // 生成当前 focus
    this.focusedDisplayPolygon = new Polygon(polygon.getLatLngs(), {
      color: DEFAULT_COLOR,
      fillColor: this.getColor(polygon.getData()),
    })
    this.focusedDisplayPolygon.addTo(this.map)

    this.focusedDisplayPolygon
      .bindPopup(this.getPopupContent(polygon.getData()))
      .openPopup()

    this.focusedDisplayPolygon.on('popupclose', () => {
      this.focusedDisplayPolygon.remove()
    })
    polygon.closeTooltip()

    this.map.panTo(this.focusedDisplayPolygon.getCenter())
    if (fitBounds) {
      this.map.fitBounds(polygon.getBounds())
    }
    this.channelFunc('on-click-polygon', polygon)
  }
  protected initOptions(options: PolygonLayerOptions) {
    this.options = optionsMerge(
      this.defaultOptions,
      this.options,
      options
    ) as PolygonLayerOptions
  }
  protected initPolygons() {
    // 缓存 segment 相关数据
    this.cacheSegmentParams()
    this.polygons = []
    this.dataList.forEach((data) => {
      const layer = L.geoJSON(data.geometry).getLayers()[0]
      const polygon = new Polygon((layer as L.Polygon).getLatLngs())

      polygon.setData(data)
      this.polygons.push(polygon)
    })
  }
  private configPolygonLayer() {
    this.polygonLayer = L.layerGroup()
    this.polygons = this.polygons.map((polygon) => {
      const options: L.PolylineOptions = Object.assign({}, this.options, {
        color: DEFAULT_COLOR,
        fillColor: this.getColor(polygon.getData()),
      })
      // 重新应用 options
      const newPolygon = new Polygon(polygon.getLatLngs(), options)
      newPolygon.setData(polygon.getData())
      if (this.options.tooltipAttr) {
        newPolygon.bindTooltip(this.getToolTipContent(newPolygon.getData()))
      }
      newPolygon.on('click', () => {
        this.polygonClickHandler(polygon)
      })
      return newPolygon
    })
    this.polygons.forEach((polygon) => {
      this.polygonLayer.addLayer(polygon)
    })
    return this.polygonLayer
  }
  private getColor(data: DataListItem, mode?: ColorMode) {
    let color = this.options.color
    if (this.options.renderPolygonColorType === 'segmented') {
      color = this.getSegmentedPolygonColor(data)
    }
    switch (mode) {
      case 'darken':
        return darken(color)
      case 'lighten':
        return lighten(color)
      default:
        return color
    }
  }
}
