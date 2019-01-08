import { lighten, optionsMerge } from '../utils/index'
import { DataListItem, ChannelFunc, ILayer } from '../definitions'
import Marker from './Marker'

/** 渲染样式 散点|热力图 */
type MarkersLayerRenderType = 'point' | 'heat' | 'cluster' | 'bubble'

/** 渲染颜色样式 单色|分段|分类 */
type MarkersLayerRenderPointColorType = 'single' | 'segmented' | 'classified'

/** 散点图标类型 iconfont|svg|image */
type MarkersLayerIconType = 'font_class' | 'unicode' | 'symbol' | 'image'

type MarkersLayerRenderClusterColorType = 'single' | 'smart'

interface IconRenderFuncOption {
  iconSize: [number, number]
  iconColor: string
}
type IconRenderFunc = (
  data: DataListItem,
  params: IconRenderFuncOption
) => string

export interface MarkersLayerOptions {
  renderType: MarkersLayerRenderType
  renderPointColorType?: MarkersLayerRenderPointColorType
  iconType?: MarkersLayerIconType

  color?: string
  iconImageUrl?: string
  iconSize?: [number, number]
  iconClass?: string
  iconUnicode?: string
  iconSymbol?: string
  iconColor?: string
  iconAnchor?: [number, number]
  iconRenderer?: IconRenderFunc

  bubbleColorAttr?: string
  bubbleSizeAttr?: string
  bubbleStrokeWidth?: number
  bubbleStrokeColor?: string
  bubbleColors?: string[]
  bubbleSizes?: number[]
  bubbleStrokeOpacity?: number
  bubbleFillOpacity?: number
  zIndex?: number

  // 是否聚合，优先级高于 renderType == point
  isCluster?: boolean
  renderClusterColorType?: MarkersLayerRenderClusterColorType

  /** 是否展示 popup */
  popup?: boolean
  /** 是否展示 tooltip */
  tooltip?: boolean
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

  heatOptions?: MarkersHeatLayerOptions
  clusterOptions?: L.MarkersClusterOptions
}

/** 转化为热力图的 options */
export interface MarkersHeatLayerOptions extends L.HeatLayerOptions {
  dimensionAttr?: string
}

const DEFAULT_COLOR = '#3388FF'
export default class MarkersLayer implements ILayer {
  public map: L.Map
  public dataList: DataListItem[]
  public options: MarkersLayerOptions
  public channelFunc: ChannelFunc

  public type: string

  protected markers: Marker[]

  protected focusedMarker: Marker
  protected hoveredMarker: Marker
  /** 需要展示的放大的图标 */
  protected focusedDisplayMarker: Marker
  protected markerLayer: L.CanvasIconLayer

  protected visible: boolean
  protected layer:
    | L.CanvasIconLayer
    | L.HeatLayer
    | L.MarkersCluster
    | L.LayerGroup
  protected defaultOptions: MarkersLayerOptions
  /** 记录某个 prop 对应的渲染颜色 */
  protected classifiedColorMap: { [prop: string]: string }
  private heatLayer: L.HeatLayer
  private clusterLayer: L.MarkersCluster
  private bubbleLayer: L.LayerGroup

  private segmentedMin: number
  private segmentedStep: number
  private segmentedRefs: Array<{
    range: [number, number]
    color: string
  }>
  private bubbledSizeMin: number
  private bubbledSizeStep: number
  private bubbledColorMap: { [prop: string]: string }
  private bubbledColorRefs: Array<{
    attr: string
    color: string
    nums: number
  }>
  private bubbledSizeRefs: Array<{
    size: number
    range: [number, number]
  }>
  /** 分类渲染颜色参照(提供给调用者使用) */
  private classifiedColorRefs: Array<{
    attr: string
    color: string
    nums: number
  }>
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: MarkersLayerOptions,
    channelFunc: ChannelFunc
  ) {
    if (!Array.isArray(dataList) || dataList.length === 0) {
      throw new Error(`dataList 必须是非空数组`)
    }
    this.defaultOptions = {
      renderType: 'point',
      renderPointColorType: 'single',
      iconType: 'unicode',
      iconSize: [20, 20],
      iconClass: 'iconfont',
      iconColor: DEFAULT_COLOR,
      color: DEFAULT_COLOR,
      iconAnchor: [10, 20],
      popup: true,
      tooltip: true,
      popupAttr: { label: '名称', value: 'name' },
      tooltipAttr: 'name',
      segmentedColors: [DEFAULT_COLOR],
      classifiedColors: [DEFAULT_COLOR],
      isCluster: false,
      renderClusterColorType: 'smart',
      bubbleStrokeWidth: 1,
      bubbleColors: [DEFAULT_COLOR],
      bubbleStrokeOpacity: 0.2,
      bubbleFillOpacity: 0.5,
      bubbleSizes: [10],
      heatOptions: {
        max: 1,
        minOpacity: 0.5,
      },
    }
    this.type = 'marker'
    this.map = map
    this.dataList = dataList
    this.options = options
    this.channelFunc = channelFunc

    this.visible = true
    this.layer = null
    this.focusedMarker = null
    this.hoveredMarker = null
    this.focusedDisplayMarker = null
    this.markers = []
    this.markerLayer = null
    this.heatLayer = null
    this.clusterLayer = null
    this.bubbleLayer = null

    this.segmentedMin = Infinity
    this.segmentedStep = 1
    this.bubbledSizeMin = Infinity
    this.bubbledSizeStep = 1
    this.classifiedColorMap = {}
    this.bubbledColorMap = {}
    this.initOptions(options)
    this.initEvents()
  }
  public setZIndex(index: number) {
    if (this.options.renderType === 'cluster' || this.options.isCluster) {
      this.clusterLayer.setZIndex(index)
      this.options.zIndex = index
    }
  }
  public getZIndex() {
    return this.options.zIndex
  }
  public draw(options?: MarkersLayerOptions) {
    if (!this.visible) {
      return
    }
    this.initOptions(options)
    this.initMarkers()
    this.initEvents()
    return this.redraw()
  }
  /** 绘制图层 */
  public redraw() {
    if (this.layer) {
      this.layer.remove()
    }

    // 优先判断 isCluster
    if (this.options.isCluster && this.options.renderType === 'point') {
      this.layer = this.configClusterLayer()
    } else {
      switch (this.options.renderType) {
        case 'point': {
          this.layer = this.configMarkerLayer()
          break
        }
        case 'cluster': {
          this.layer = this.configClusterLayer()
          break
        }
        case 'heat': {
          this.layer = this.configHeatLayer()
          break
        }
        case 'bubble': {
          this.layer = this.configBubbleLayer()
          break
        }
        default: {
          throw new Error(`renderType 不支持"${this.options.renderType}"`)
        }
      }
    }
    this.map.addLayer(this.layer)
    return this
  }
  /** 设置 data */
  public setData(data: DataListItem[]) {
    this.dataList = data
  }
  /** 设置配置参数 */
  public setOptions(options: MarkersLayerOptions, redraw = false) {
    this.options = optionsMerge(this.options, options) as MarkersLayerOptions
    if (redraw) {
      this.redraw()
    }
  }
  /** 获取当前 options */
  public getOptions() {
    return this.options
  }
  /** 缩放至包含所有边界 */
  public fitBounds() {
    this.map.fitBounds(this.getBounds(), { padding: [20, 20] })
  }
  /** 获取边界 */
  public getBounds(): L.LatLngBoundsExpression {
    if (this.markers.length <= 0) {
      return this.map.getBounds()
    }
    return this.markers.map(
      (marker) =>
        [marker.getLatLng().lat, marker.getLatLng().lng] as [number, number]
    )
  }
  /** 销毁图层 */
  public destroy() {
    if (this.layer) {
      this.map.removeLayer(this.layer)
    }
    if (this.focusedDisplayMarker) {
      this.map.removeLayer(this.focusedDisplayMarker)
    }
    this.map.off('zoomstart', this._zoomStartCb, this)
    this.map.off('zoomend', this._zoomEndCb, this)
  }
  /** 是否显示 */
  public toggleVisible(visible: boolean) {
    this.visible = visible
    if (!this.layer) {
      return
    }
    if (visible) {
      this.map.addLayer(this.layer)
    } else {
      if (this.focusedDisplayMarker) {
        this.focusedDisplayMarker.remove()
      }
      this.map.removeLayer(this.layer)
    }
  }
  /** 更换颜色 */
  public changeColor(color: string) {
    this.options.color = color
    this.options.iconColor = color
    this.redraw()
  }
  /** 更换 icon */
  public changeIcon(iconUnicode: string) {
    this.options.iconUnicode = iconUnicode
    this.redraw()
  }
  /** 聚焦某个 marker */
  public pitch(item: DataListItem) {
    this.markers.forEach((marker) => {
      if (marker.getData().id === item.id) {
        this.markerClickHandler(marker, true)
        return
      }
    })
  }
  /** 获取分段颜色说明 */
  public getSegmentedColorRefs() {
    if (
      !Number.isFinite(this.segmentedMin) ||
      !Number.isFinite(this.segmentedStep)
    ) {
      return []
    }
    this.segmentedRefs = []
    const sizeNums = this.options.segmentedColors.length
    for (let i = 0; i < sizeNums; i++) {
      const rangeStart = this.segmentedMin + i * this.segmentedStep
      const rangeEnd = rangeStart + this.segmentedStep
      this.segmentedRefs.push({
        range: [rangeStart, rangeEnd],
        color: this.options.segmentedColors[i],
      })
    }
    return this.segmentedRefs
  }
  /** 获取分类颜色说明 */
  public getClassifiedColorRefs() {
    return this.classifiedColorRefs
  }
  /** 获取气泡颜色图例说明 */
  public getBubbledColorRefs() {
    return this.bubbledColorRefs
  }
  /** 获取气泡大小图例说明 */
  public getBubbledSizeRefs() {
    this.bubbledSizeRefs = []
    const sizeNums = this.options.bubbleSizes.length
    for (let i = 0; i < sizeNums; i++) {
      const rangeStart = this.bubbledSizeMin + i * this.bubbledSizeStep
      const rangeEnd = rangeStart + this.bubbledSizeStep
      this.bubbledSizeRefs.push({
        range: [rangeStart, rangeEnd],
        size: this.options.bubbleSizes[i],
      })
    }
    return this.bubbledSizeRefs
  }
  protected _zoomStartCb() {
    if (!this.visible) {
      return
    }
    if (this.type === 'marker') {
      switch (this.options.renderType) {
        case 'point': {
          if (this.options.isCluster) {
            return
          }
          if (this.markerLayer) {
            this.map.removeLayer(this.markerLayer)
          }
          break
        }
        case 'bubble': {
          if (this.bubbleLayer) {
            this.map.removeLayer(this.bubbleLayer)
          }
          break
        }
        default: {
          return
        }
      }
    } else if (this.type === 'markerBuffer') {
      this.map.removeLayer(this.markerLayer)
    } else {
      return
    }
  }
  protected _zoomEndCb() {
    if (!this.visible) {
      return
    }
    if (this.type === 'marker') {
      switch (this.options.renderType) {
        case 'point': {
          if (this.options.isCluster) {
            return
          }
          if (this.markerLayer) {
            this.map.addLayer(this.markerLayer)
          }
          break
        }
        case 'bubble': {
          if (this.bubbleLayer) {
            this.map.addLayer(this.bubbleLayer)
          }
          break
        }
        default: {
          return
        }
      }
    } else if (this.type === 'markerBuffer') {
      this.map.addLayer(this.markerLayer)
    } else {
      return
    }
  }
  /** 配置散点图 */
  protected configMarkerLayer() {
    if (this.markerLayer) {
      this.markerLayer.remove()
      this.map.removeLayer(this.markerLayer)
    }
    const canvasIconLayer = L.canvasIconLayer({}).addTo(this.map)
    // 添加点击事件
    canvasIconLayer.addOnClickListener((_, [{ data: marker }]) => {
      this.markerClickHandler(marker as Marker)
    })
    // 添加右键事件
    canvasIconLayer.addOnContextmenuListener((event, [{ data: marker }]) => {
      this.channelFunc('contextmenu', {
        event,
        target: marker,
      })
    })
    // 添加 hover 事件
    if (this.options.tooltip) {
      canvasIconLayer.addOnHoverListener((_, [{ data: marker }]) => {
        // 之前有 hover 的关闭 tooltip
        if (this.hoveredMarker) {
          this.hoveredMarker.closeTooltip()
        }
        this.hoveredMarker = marker as Marker

        if (this.hoveredMarker.getTooltip()) {
          // 如果已经设置 tooltip 直接展示 tooltip
          this.hoveredMarker.openTooltip()
        } else {
          // 否则绑定 tooltip 并展示
          if (this.options.tooltipAttr) {
            this.hoveredMarker.bindTooltip(
              '' + this.hoveredMarker.getData()[this.options.tooltipAttr]
            )
          }
        }
      })
    }
    this.markerLayer = canvasIconLayer
    this.markerLayer.addMarkers(this.markers)

    // 解决初次渲染不出图标问题
    this.map.panTo(this.map.getCenter())
    return this.markerLayer
  }
  /** 获取 tooltip 内容 */
  protected getToolTipContent(data: DataListItem) {
    return '' + data[this.options.tooltipAttr]
  }
  /** 初始化配置参数 */
  protected initOptions(options: MarkersLayerOptions) {
    this.options = optionsMerge(
      this.defaultOptions,
      this.options,
      options
    ) as MarkersLayerOptions
    this.options.color = this.options.color || this.options.iconColor
  }
  /** 初始化 Marker */
  protected initMarkers() {
    // 缓存 segment 相关数据
    this.cacheSegmentParams()
    this.cacheClassifyParams()
    this.cacheBubbleParams()
    this.markers = []
    this.dataList.forEach((data) => {
      const layer = L.geoJSON(data.geometry).getLayers()[0] as L.Marker

      const marker = new Marker(
        [layer.getLatLng().lat, layer.getLatLng().lng],
        {
          icon: this.getMarkerIcon(data),
        }
      )

      // 将相关值绑定到 marker上
      marker.setData(data)
      this.markers.push(marker)
    })
  }
  /** 初始化事件 */
  protected initEvents() {
    this.map.on('zoomstart', this._zoomStartCb, this)
    this.map.on('zoomend', this._zoomEndCb, this)
  }
  /** 获取分类颜色 */
  protected getClassifyMarkerColor(data: DataListItem): string {
    return this.classifiedColorMap[data[this.options.classifiedAttr]]
  }
  /** 获取分段颜色 */
  protected getSegmentedMarkerColor(data: DataListItem): string {
    const val = data[this.options.segmentedAttr]
    const color = this.options.segmentedColors[
      parseInt('' + (val - this.segmentedMin) / this.segmentedStep, 10)
    ]
    return color
  }
  // 处理 marker 点击事件
  private markerClickHandler(marker: Marker, fitBounds?: boolean) {
    this.focusedMarker = marker
    if (this.options.popup) {
      // 删除前一个放大图标
      if (this.focusedDisplayMarker) {
        this.focusedDisplayMarker.removeFrom(this.map)
      }
      // 生成当前放大图标
      this.focusedDisplayMarker = new Marker(marker.getLatLng(), {
        icon: this.getLargerMarkerIcon(marker.getData()),
      })
      this.focusedDisplayMarker.addTo(this.map)
      // 添加放大图标的 popup
      this.focusedDisplayMarker
        .bindPopup(this.getPopupContent(marker.getData()))
        .openPopup()
      this.focusedDisplayMarker.on('popupclose', () => {
        this.focusedDisplayMarker.remove()
      })
    }
    marker.closeTooltip()

    this.map.panTo(this.focusedMarker.getLatLng())
    if (fitBounds) {
      this.map.fitBounds(marker.getLatLng().toBounds(10))
    }
    this.channelFunc('on-click-marker', marker)
  }
  /** 配置聚合图层 */
  private configClusterLayer() {
    // 展示聚合图层
    if (this.clusterLayer) {
      this.clusterLayer.remove()
    }
    this.clusterLayer = L.markerClusterGroup({
      iconCreateFunction: this.iconCreateFunction.bind(this),
    })
    this.clusterLayer.addLayers(
      this.markers.map((m) => {
        const marker = new Marker(m.getLatLng(), {
          icon: this.getMarkerIcon(m.getData()),
        })
        marker.setData(m.getData())
        marker.bindTooltip('' + marker.getData()[this.options.tooltipAttr])
        marker.bindPopup(this.getPopupContent(marker.getData()))
        marker.on('click', () => {
          this.markerClickHandler(marker)
        })
        return marker
      })
    )
    return this.clusterLayer
  }

  /** 渲染为热力图 */
  private configHeatLayer() {
    if (this.heatLayer) {
      this.heatLayer.remove()
    }
    const alts: number[] = []
    this.markers.forEach((marker) => {
      const latLng = marker.getLatLng()
      const dimensionAttr =
        this.options.heatOptions && this.options.heatOptions.dimensionAttr
      let alt =
        (dimensionAttr && marker.getData()[dimensionAttr]) ||
        this.options.heatOptions.max
      if (typeof alt !== 'number') {
        alt = this.options.heatOptions.max
      }
      alts.push(alt)
      marker.setLatLng(L.latLng(latLng.lat, latLng.lng, alt))
    })
    this.heatLayer = L.heatLayer(
      this.markers.map((it, index) => [
        it.getLatLng().lat,
        it.getLatLng().lng,
        alts[index],
      ]),
      optionsMerge({ minOpacity: 0.5 }, this.options.heatOptions)
    )
    return this.heatLayer
  }

  /** 渲染为气泡图 */
  private configBubbleLayer() {
    if (this.bubbleLayer) {
      this.bubbleLayer.remove()
    }
    this.bubbleLayer = L.layerGroup()
    this.markers.forEach((marker) => {
      const radius = this.getBubbledMarkerSize(marker.getData())
      const fillColor = this.getBubbledMarkerColor(marker.getData())
      const color = this.options.bubbleStrokeColor || lighten(fillColor)
      const weight = this.options.bubbleStrokeWidth
      const opacity = this.options.bubbleStrokeOpacity
      const fillOpacity = this.options.bubbleFillOpacity
      const bubble = L.circleMarker(marker.getLatLng(), {
        radius,
        color,
        fillColor,
        weight,
        opacity,
        fillOpacity,
      })
      if (this.options.popup) {
        bubble.bindPopup(this.getPopupContent(marker.getData()))
      }
      if (this.options.tooltip) {
        bubble.bindTooltip(this.getToolTipContent(marker.getData()))
      }
      this.bubbleLayer.addLayer(bubble)
    })
    return this.bubbleLayer
  }

  /** 获取图标放大后 icon */
  private getLargerMarkerIcon(data: DataListItem) {
    return this._getMarkerIcon(data, true)
  }

  /** 获取图标 icon */
  private getMarkerIcon(data: DataListItem) {
    return this._getMarkerIcon(data, false)
  }

  /** 获取当前 marker 需要展示的 icon
   * @param data
   * @param {boolean} isLarger 是否放大
   */
  private _getMarkerIcon(
    data: DataListItem,
    isLarger: boolean
  ): L.Icon | L.DivIcon {
    const iconSize = this.options.iconSize
    const iconAnchor = this.options.iconAnchor
    const largerIconSize = [iconSize[0] * 1.5, iconSize[1] * 1.5] as [
      number,
      number
    ]
    const largerIconAnchor = [iconAnchor[0] * 1.5, iconAnchor[1] * 1.5] as [
      number,
      number
    ]

    const iconColor = this.options.color || this.options.iconColor

    switch (this.options.iconType) {
      case 'image': {
        // return L.icon({
        //   iconUrl: this.options.iconImageUrl,
        //   iconSize: isLarger ? largerIconSize : iconSize,
        //   iconAnchor,
        // })
      }
      case 'font_class':
      case 'symbol':
      case 'unicode': {
        return L.divIcon({
          html: this.getCustomIconHTML(data, {
            iconSize: isLarger ? largerIconSize : iconSize,
            iconColor,
          }),
          className: isLarger ? 'large-div-icon-marker' : '',
          iconSize: isLarger ? largerIconSize : iconSize,
          iconAnchor: isLarger ? largerIconAnchor : iconAnchor,
          tooltipAnchor: isLarger
            ? [0, -largerIconAnchor[1] / 2]
            : [0, -iconAnchor[1] / 2],
          popupAnchor: isLarger
            ? [0, -largerIconAnchor[1] / 2]
            : [0, -iconAnchor[1] / 2],
        })
      }
      default: {
        throw new Error(`renderType 不能为 ${this.options.iconType}`)
      }
    }
  }
  /** 获取icon html */
  private getCustomIconHTML(
    data: DataListItem,
    options?: IconRenderFuncOption
  ): string {
    if (this.options.iconRenderer) {
      options = Object.assign({}, this.options, options)
      return this.options.iconRenderer(data, options)
    }
    let color = this.options.color || this.options.iconColor
    switch (this.options.renderPointColorType) {
      case 'single': {
        color = this.options.color || this.options.iconColor
        break
      }
      case 'classified': {
        color = this.getClassifyMarkerColor(data)
        break
      }
      case 'segmented': {
        color = this.getSegmentedMarkerColor(data)
        break
      }
      default: {
        throw new Error(
          `renderPointColorType 不支持"${this.options.renderPointColorType}"`
        )
      }
    }
    switch (this.options.iconType) {
      // 使用 class
      case 'font_class': {
        return `
          <i class="${this.options.iconClass}"
            style="
              color: ${color};
              font-size: ${options.iconSize[0]}px;
            "
            />
        `
      }
      // 使用 svg
      case 'symbol': {
        return `
          <svg class="icon-symbol" aria-hidden="true">
            <use xlink:href="${this.options.iconSymbol}" />
          </svg>
        `
      }
      // 使用 unicode
      case 'unicode': {
        return `
          <i
            class="${this.options.iconClass}"
            style="
              color: ${color};
              font-size: ${options.iconSize[0]}px;
            "
            >
            ${this.options.iconUnicode}
          </i>
        `
      }
    }
  }
  /** 缓存分类相关参数 */
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
    this.classifiedColorRefs = []
    let otherNums = 0
    values.forEach(([attr, nums], index) => {
      let color = DEFAULT_COLOR
      if (index < this.options.classifiedColors.length) {
        color = this.options.classifiedColors[index]
      }
      this.classifiedColorMap[attr] = color

      if (index < this.options.classifiedColors.length) {
        this.classifiedColorRefs.push({
          attr,
          color,
          nums,
        })
      } else {
        otherNums += nums
      }
    })
    if (otherNums > 0) {
      this.classifiedColorRefs.push({
        attr: '其它',
        color: DEFAULT_COLOR,
        nums: otherNums,
      })
    }
  }
  /** 缓存气泡相关参数 */
  private cacheBubbleParams() {
    if (!this.options.bubbleSizeAttr) {
      return
    }
    const bubbledSizesLength = this.options.bubbleSizes.length
    let maxSizeVal = -Infinity
    let minSizeVal = Infinity
    for (const data of this.dataList) {
      const sizeVal = data[this.options.bubbleSizeAttr]
      if (sizeVal !== undefined) {
        maxSizeVal = Math.max(maxSizeVal, sizeVal)
        minSizeVal = Math.min(minSizeVal, sizeVal)
      }
    }
    const sizeStep = (maxSizeVal - minSizeVal + 1) / bubbledSizesLength
    this.bubbledSizeMin = minSizeVal
    this.bubbledSizeStep = sizeStep

    if (!this.options.bubbleColorAttr) {
      return
    }

    const tmp: { [prop: string]: [string, number] } = {}
    const prop = this.options.bubbleColorAttr
    this.dataList.forEach((data) => {
      if (data[prop] in tmp) {
        tmp[data[prop]] = [data[prop], tmp[data[prop]][1] + 1]
      } else {
        tmp[data[prop]] = [data[prop], 1]
      }
    })
    const values = Object.values(tmp)
    values.sort((a, b) => b[1] - a[1])
    this.bubbledColorRefs = []
    let otherNums = 0
    values.forEach(([attr, nums], index) => {
      let color = DEFAULT_COLOR
      if (index < this.options.bubbleColors.length) {
        color = this.options.bubbleColors[index]
        this.bubbledColorRefs.push({
          attr,
          color,
          nums,
        })
      } else {
        otherNums += nums
      }
      this.bubbledColorMap[attr] = color
    })
    if (this.options.bubbleColors.length < values.length) {
      this.bubbledColorRefs.push({
        attr: '其他',
        color: DEFAULT_COLOR,
        nums: otherNums,
      })
    }
  }
  /** 缓存分段相关参数 */
  private cacheSegmentParams() {
    const segmentedLength = this.options.segmentedColors.length
    let maxVal = -Infinity
    let minVal = Infinity
    for (const data of this.dataList) {
      const val = data[this.options.segmentedAttr]
      if (val !== undefined) {
        maxVal = Math.max(maxVal, val)
        minVal = Math.min(minVal, val)
      }
    }
    const step = Math.ceil((maxVal - minVal + 1) / segmentedLength)
    this.segmentedMin = minVal
    this.segmentedStep = step
  }
  /** 获取气泡大小 */
  private getBubbledMarkerSize(data: DataListItem): number {
    const val = data[this.options.bubbleSizeAttr]
    const size = this.options.bubbleSizes[
      parseInt('' + (val - this.bubbledSizeMin) / this.bubbledSizeStep, 10)
    ]
    return size
  }
  /** 获取气泡颜色 */
  private getBubbledMarkerColor(data: DataListItem): string {
    return this.bubbledColorMap[data[this.options.bubbleColorAttr]]
  }
  /** 获取 popup 内容 */
  private getPopupContent(data: DataListItem) {
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
  /** 创建 cluster icon */
  private iconCreateFunction(cluster: L.MarkersCluster) {
    const colors = ['#757472', '#5093E2', '#CB7987', '#FC763B']
    const length = this.dataList.length
    const step = length / colors.length
    const scaleStep = (1 - 0.75) / colors.length
    let color = this.options.color || this.options.iconColor
    let scale = 1
    if (this.options.renderClusterColorType === 'smart') {
      color = colors[Math.floor((cluster.getChildCount() - 1) / step)]
      scale =
        (Math.floor((cluster.getChildCount() - 1) / step) + 1) * scaleStep +
        0.75
    }
    return L.divIcon({
      className: 'cluster-icon',
      html: `
       <div
        style="
          border-radius: 50%;
          position: relative;
          width: 50px;
          height: 50px;
          transform: scale3d(${scale}, ${scale}, 1)
        "
        >
        <div
          style="
            border-radius: 50%;
            background: ${lighten(color)};
            width: 50px;
            height: 50px;
            opacity: 0.7;
            position: absolute;
            top: 0;
            left: 0;
            ">
        </div>
        <div
          style="
            border-radius: 50%;
            background: ${color};
            opacity: 0.8;
            width: 32px;
            height: 32px;
            margin: 9px;
            position: absolute;
          ">
        </div>
        <div
          style="
            text-align: center;
            line-height: 32px;
            position: absolute;
            top: 9px;
            left: 9px;
            width: 32px;
            height: 32px;
            color: white;
            font-size: 14px;
          "
          >
          ${cluster.getChildCount()}
        </div>
       </div>
      `,
      iconSize: [40, 40],
    })
  }
}
