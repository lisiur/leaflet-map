import { DataListItem, ChannelFunc } from '../definitions'
import Polyline, { PolylineLatLngExpression } from './Polyline'
import { darken, lighten, optionsMerge } from '../utils/index'

/** 渲染颜色样式 单色|分段 */
type PolylineLayerRenderColorType = 'single' | 'segmented' | 'classified'
type ColorMode = 'darken' | 'lighten' | 'normal'
interface PolylineLayerOptions extends L.PolylineOptions {
  renderPolylineColorType: PolylineLayerRenderColorType

  /** popup 展示字段 */
  popupAttr?: string | { label: string; value: any }
  /** tooltip 展示字段 */
  tooltipAttr?: string

  opacity?: number

  /** 分段渲染统计字段 */
  segmentedAttr?: string
  segmentedColors?: string[]

  /** 分类型渲染统计字段 */
  classifiedAttr?: string
  classifiedColors?: string[]
}

const DEFAULT_COLORS = '#3388FF'
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
  protected focusedPolyline: Polyline
  protected focusedDisplayPolyline: Polyline
  protected polylineLayer: L.LayerGroup
  /** 记录某个 prop 对应的渲染颜色 */
  private classifyColorMap: { [prop: string]: string }
  /** 分类渲染颜色参照(提供给调用者使用) */
  private classifyColorRefs: Array<{
    attr: string
    color: string
    nums: number
  }>
  private defaultOptions: PolylineLayerOptions
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: PolylineLayerOptions,
    channelFunc: ChannelFunc
  ) {
    if (!Array.isArray(dataList) || dataList.length === 0) {
      throw new Error(`dataList 必须是非空数组`)
    }
    this.defaultOptions = {
      color: DEFAULT_COLORS,
      renderPolylineColorType: 'single',
      segmentedColors: [DEFAULT_COLORS],
      popupAttr: { label: '名称', value: 'name' },
      tooltipAttr: 'name',
      classifiedColors: [DEFAULT_COLORS],
    }
    this.type = 'polyline'
    this.map = map
    this.dataList = dataList
    this.options = optionsMerge(
      this.defaultOptions,
      options
    ) as PolylineLayerOptions
    this.channelFunc = channelFunc

    this.visible = true
    this.polylines = []
    this.segmentedMin = Infinity
    this.segmentedStep = 1
    this.classifyColorMap = {}
    this.focusedPolyline = null
    this.focusedDisplayPolyline = null
  }
  public draw(options?: PolylineLayerOptions) {
    this.initOptions(options)
    this.initPolylines()
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
  public getOptions() {
    return this.options
  }
  public fitBounds() {
    this.map.fitBounds(this.getBounds(), { padding: [20, 20] })
  }
  public getBounds(): L.LatLngBoundsExpression {
    if (this.polylines.length <= 0) {
      return this.map.getBounds()
    }
    return this.polylines.reduce(
      (prev, curr) => prev.extend(curr.getBounds()),
      L.latLngBounds(
        this.polylines[0].getBounds().getNorthEast(),
        this.polylines[0].getBounds().getSouthWest()
      )
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
      if (this.focusedDisplayPolyline) {
        this.focusedDisplayPolyline.remove()
      }
      this.map.removeLayer(this.layer)
    }
  }
  public changeColor(color: string) {
    this.options.fillColor = color
    this.redraw()
  }
  public pitch(id: string) {
    this.polylines.forEach((polyline) => {
      if (polyline.getData().id === id) {
        this.polylineClickHandler(polyline, true)
        return
      }
    })
  }
  public getClassifiedColorRefs() {
    return this.classifyColorRefs
  }
  protected initOptions(options: PolylineLayerOptions) {
    this.options = optionsMerge(
      this.defaultOptions,
      this.options,
      options
    ) as PolylineLayerOptions
  }
  protected initPolylines() {
    // 缓存 segment 相关数据
    this.cacheSegmentParams()
    this.cacheClassifyParams()

    this.polylines = this.dataList.map((data) => {
      const layer = L.geoJSON(data.geometry).getLayers()[0]
      const polyline = new Polyline(
        (layer as L.Polyline).getLatLngs() as PolylineLatLngExpression
      )
      // 将相关值绑定到 marker上
      polyline.setData(data)

      return polyline
    })
  }
  protected getSegmentedPolylineColor(data: DataListItem): string {
    const val = data[this.options.segmentedAttr]
    const color = this.options.segmentedColors[
      parseInt('' + (val - this.segmentedMin) / this.segmentedStep, 10)
    ]
    return color
  }
  protected polylineClickHandler(polyline: Polyline, fitBounds?: boolean) {
    this.focusedPolyline = polyline
    // 删除前一个 focus
    if (this.focusedDisplayPolyline) {
      this.focusedDisplayPolyline.remove()
    }
    // 生成当前 focus
    this.focusedDisplayPolyline = new Polyline(
      polyline.getLatLngs() as PolylineLatLngExpression,
      {
        color: this.getColor(polyline.getData()),
        fillColor: this.getColor(polyline.getData(), 'normal'),
      }
    )
    this.focusedDisplayPolyline.addTo(this.map)

    this.focusedDisplayPolyline
      .bindPopup(this.getPopupContent(polyline.getData()))
      .openPopup()

    this.focusedDisplayPolyline.on('popupclose', () => {
      this.focusedDisplayPolyline.remove()
    })

    polyline.closeTooltip()

    this.map.panTo(this.focusedDisplayPolyline.getCenter())
    if (fitBounds) {
      this.map.fitBounds(polyline.getBounds())
    }
    this.channelFunc('on-click-polyline', polyline)
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
  private configPolylineLayer() {
    this.polylineLayer = L.layerGroup()
    this.polylines.forEach((polyline) => {
      const options: L.PolylineOptions = optionsMerge({}, this.options, {
        color: this.getColor(polyline.getData()),
      })
      const newPolyline = new Polyline(
        polyline.getLatLngs() as PolylineLatLngExpression,
        options
      )
      newPolyline.on('click', () => {
        this.polylineClickHandler(polyline)
      })
      newPolyline.setData(polyline.getData())
      if (this.options.tooltipAttr) {
        newPolyline.bindTooltip(this.getToolTipContent(newPolyline.getData()))
      }
      this.polylineLayer.addLayer(newPolyline)
    })
    return this.polylineLayer
  }
  private cacheClassifyParams() {
    if (!this.options.classifiedAttr) {
      return
    }

    const tmp: { [prop: string]: [string, number] } = {}
    const prop = this.options.classifiedAttr
    this.dataList.forEach((data) => {
      if (data[prop] in tmp) {
        tmp[data[prop]] = [data[prop], tmp[data[prop]][1] + 1]
      } else {
        tmp[data[prop]] = [data[prop], 1]
      }
    })
    const values = Object.values(tmp)
    values.sort((a, b) => b[1] - a[1])
    this.classifyColorRefs = []
    let otherNums = 0
    values.forEach(([attr, nums], index) => {
      let color = DEFAULT_COLORS
      if (index < this.options.classifiedColors.length) {
        color = this.options.classifiedColors[index]
        this.classifyColorRefs.push({
          attr,
          color,
          nums,
        })
      } else {
        otherNums += nums
      }
      this.classifyColorMap[attr] = color
    })
    if (this.options.classifiedColors.length < values.length) {
      this.classifyColorRefs.push({
        attr: '其他',
        color: DEFAULT_COLORS,
        nums: otherNums,
      })
    }
  }
  private getClassifyPolylineColor(data: DataListItem): string {
    return this.classifyColorMap[data[this.options.classifiedAttr]]
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
  private getColor(data: DataListItem, mode?: ColorMode) {
    let color = this.options.color
    if (this.options.renderPolylineColorType === 'segmented') {
      color = this.getSegmentedPolylineColor(data)
    }
    if (this.options.renderPolylineColorType === 'classified') {
      color = this.getClassifyPolylineColor(data)
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
