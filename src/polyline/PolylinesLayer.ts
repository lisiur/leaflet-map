import { DataListItem, ChannelFunc } from '../definitions'
import Polyline, { PolylineLatLngExpression } from './Polyline'
import { darken, lighten, optionsMerge } from '../utils/index'

/** 渲染颜色样式 单色|分段 */
type PolylineLayerRenderColorType = 'single' | 'segmented'
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
  protected focusedPolyline: Polyline
  protected focusedDisplayPolyline: Polyline
  protected polylineLayer: L.LayerGroup
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
      color: '#3388FF',
      renderPolylineColorType: 'single',
      segmentedColors: ['#3388FF'],
      popupAttr: { label: '名称', value: 'name' },
      tooltipAttr: 'name',
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

    this.polylines = this.dataList.map((data) => {
      const layer = L.geoJSON(data.geometry).getLayers()[0]
      // let color = this.options.color
      // if (this.options.renderPolylineColorType === 'segmented') {
      //   color = this.getSegmentedPolylineColor(data)
      // }
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
      let color = this.options.color
      if (this.options.renderPolylineColorType === 'segmented') {
        color = this.getSegmentedPolylineColor(polyline.getData())
      }
      const options: L.PolylineOptions = Object.assign({}, this.options, {
        color,
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
