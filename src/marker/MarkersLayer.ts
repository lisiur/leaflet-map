import { DataListItem, ChannelFunc } from '../definitions'
import Marker from './Marker'

/** 渲染样式 散点|热力图 */
type MarkersLayerRenderType = 'point' | 'heat' | 'cluster'

/** 渲染颜色样式 单色|分段 */
type MarkersLayerRenderPointColorType = 'single' | 'segmented'

/** 散点图标类型 iconfont|svg|image */
type MarkersLayerIconType = 'font_class' | 'unicode' | 'symbol' | 'image'

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
  renderPointColorType: MarkersLayerRenderPointColorType
  iconType: MarkersLayerIconType

  iconImageUrl?: string
  iconSize?: [number, number]
  iconClass?: string
  iconUnicode?: string
  iconSymbol?: string
  iconColor?: string
  iconAnchor?: [number, number]
  iconRenderer?: IconRenderFunc

  isCluster?: boolean

  /** popup 展示字段 */
  popupAttr?: string
  /** tooltip 展示字段 */
  tooltipAttr?: string

  opacity?: number

  /** 分段渲染统计字段 */
  segmentedAttr?: string
  segmentedColors?: string[]

  heatOptions?: MarkersHeatLayerOptions
  clusterOptions?: L.MarkersClusterOptions
}

/** 转化为热力图的 options */
interface MarkersHeatLayerOptions extends L.HeatLayerOptions {
  dimensionAttr?: string
}

export default class MarkersLayer {
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
  private heatLayer: L.HeatLayer
  private clusterLayer: L.MarkersCluster

  private segmentedMin: number
  private segmentedStep: number
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: MarkersLayerOptions,
    channelFunc: ChannelFunc
  ) {
    const defaultOptions: MarkersLayerOptions = {
      renderType: 'point',
      renderPointColorType: 'single',
      iconType: 'unicode',
      iconSize: [20, 20],
      iconClass: 'iconfont',
      iconColor: '#3388FF',
      iconAnchor: [10, 20],
      segmentedColors: ['#3388FF'],
      isCluster: false,
      heatOptions: {
        max: 1,
        minOpacity: 1,
      },
    }
    this.type = 'marker'
    this.map = map
    this.dataList = dataList
    this.options = Object.assign({}, defaultOptions, options)
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

    this.segmentedMin = Infinity
    this.segmentedStep = 1
  }
  public draw(options?: MarkersLayerOptions) {
    this.visible = true
    this.initMarkers()
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
        default: {
          throw new Error(`renderType 不支持"${this.options.renderType}"`)
        }
      }
    }
    this.map.addLayer(this.layer)
    return this
  }
  public setOptions(options: MarkersLayerOptions, redraw = false) {
    this.options = Object.assign(this.options, options)
    if (redraw) {
      this.redraw()
    }
  }
  public fitBounds() {
    this.map.fitBounds(this.getBounds())
  }
  public getBounds(): L.LatLngBoundsExpression {
    if (this.markers.length <= 0) {
      return this.map.getBounds()
    }
    return this.markers.map(
      (marker) =>
        [marker.getLatLng().lat, marker.getLatLng().lng] as [number, number]
    )
  }
  public destroy() {
    // TODO: 将事件移除
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
    this.options.iconColor = color
    this.redraw()
  }
  public changeIcon(iconUnicode: string) {
    this.options.iconUnicode = iconUnicode
    this.redraw()
  }
  public pitch(id: string) {
    this.markers.forEach((marker) => {
      if (marker.getData().id === id) {
        marker.fire('click')
        return
      }
    })
  }
  /** 渲染为散点图 */
  protected configMarkerLayer() {
    if (this.markerLayer) {
      this.markerLayer.remove()
    }
    const canvasIconLayer = L.canvasIconLayer({}).addTo(this.map)
    // 添加点击事件
    canvasIconLayer.addOnClickListener((_, [{ data: marker }]) => {
      this.markerClickHandler(marker as Marker)
    })
    // 添加 hover 事件
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
    canvasIconLayer.addMarkers(this.markers)

    this.map.on('zoomstart', () => {
      if (!this.visible) {
        return
      }
      if (this.type === 'marker') {
        if (this.options.renderType === 'point' && !this.options.isCluster) {
          this.map.removeLayer(this.markerLayer)
        }
      } else {
        this.map.removeLayer(this.markerLayer)
      }
    })
    this.map.on('zoomend', () => {
      if (!this.visible) {
        return
      }
      if (this.type === 'marker') {
        if (this.options.renderType === 'point' && !this.options.isCluster) {
          this.map.addLayer(this.markerLayer)
        }
      } else {
        this.map.addLayer(this.markerLayer)
      }
    })

    // 解决初次渲染不出图标问题
    setTimeout(() => {
      this.map.panTo(this.map.getCenter())
    })

    this.markerLayer = canvasIconLayer
    return this.markerLayer
  }
  protected getToolTipContent(data: DataListItem) {
    return '' + data[this.options.tooltipAttr]
  }
  private initMarkers() {
    // 缓存 segment 相关数据
    this.cacheSegmentParams()
    this.markers = []
    this.dataList.forEach((data) => {
      const layer = L.geoJSON(data.geometry).getLayers()[0]

      const marker = new Marker(
        [
          (layer as L.Marker).getLatLng().lat,
          (layer as L.Marker).getLatLng().lng,
        ],
        {
          icon: this.getMarkerIcon(data),
        }
      )

      // 将相关值绑定到 marker上
      marker.setData(data)

      this.markers.push(marker)
    })
  }
  // 处理 marker 点击事件
  private markerClickHandler(marker: Marker) {
    this.focusedMarker = marker
    // 删除前一个放大图标
    if (this.focusedDisplayMarker) {
      this.focusedDisplayMarker.removeFrom(this.map)
    }
    // 生成当前放大图标
    this.focusedDisplayMarker = new Marker(marker.getLatLng(), {
      icon: this.getLargerMarkerIcon(marker.getData()),
    })
    this.focusedDisplayMarker.addTo(this.map)

    this.focusedDisplayMarker
      .bindPopup(this.getPopupContent(marker.getData()))
      .openPopup()
    this.focusedDisplayMarker.on('popupclose', () => {
      this.focusedDisplayMarker.remove()
    })

    this.map.panTo(this.focusedMarker.getLatLng())
    this.channelFunc('on-click-marker', marker)
  }
  private configClusterLayer() {
    // 展示聚合图层
    if (this.clusterLayer) {
      this.clusterLayer.remove()
    }
    this.clusterLayer = L.markerClusterGroup()
    this.clusterLayer.addLayers(
      this.markers.map((m) => {
        const marker = new Marker(m.getLatLng(), {
          icon: this.getMarkerIcon(m.getData()),
        })
        marker.setData(m.getData())
        marker.bindTooltip('' + marker.getData()[this.options.tooltipAttr])
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
      marker.setLatLng(L.latLng(latLng.lat, latLng.lng, alt))
    })
    this.heatLayer = L.heatLayer(
      this.markers.map((it) => it.getLatLng()),
      // TODO: 使用 mergeConfig 简化
      Object.assign({}, this.options.heatOptions, { minOpacity: 1 })
    )
    return this.heatLayer
  }

  private getLargerMarkerIcon(data: DataListItem) {
    return this._getMarkerIcon(data, true)
  }

  private getMarkerIcon(data: DataListItem) {
    return this._getMarkerIcon(data, false)
  }

  /** 获取当前 marker 需要展示的 icon */
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

    const iconColor = this.options.iconColor

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
        })
      }
      default: {
        throw new Error(`图标类型不支持"${this.options.iconType}"`)
      }
    }
  }
  private getCustomIconHTML(
    data: DataListItem,
    options?: IconRenderFuncOption
  ): string {
    if (this.options.iconRenderer) {
      options = Object.assign({}, this.options, options)
      return this.options.iconRenderer(data, options)
    }
    switch (this.options.renderPointColorType) {
      case 'single': {
        switch (this.options.iconType) {
          // 使用 class
          case 'font_class': {
            return `
              <i class="${this.options.iconClass}"
                style="
                  color: ${options.iconColor};
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
                  color: ${options.iconColor};
                  font-size: ${options.iconSize[0]}px;
                "
                >
                ${this.options.iconUnicode}
              </i>
            `
          }
        }
        break
      }
      case 'segmented': {
        switch (this.options.iconType) {
          // 使用 class
          case 'font_class': {
            return `
              <i
                class="${this.options.iconClass}"
                style="
                  color: ${this.getSegmentedMarkerColor(data)};
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
                  color: ${this.getSegmentedMarkerColor(data)};
                  font-size: ${options.iconSize[0]}px;
                "
                >
                ${this.options.iconUnicode}
              </i>
            `
          }
        }
        break
      }
      default: {
        throw new Error(
          `renderPointColorType 不支持"${this.options.renderPointColorType}"`
        )
      }
    }
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
  private getSegmentedMarkerColor(data: DataListItem): string {
    const val = data[this.options.segmentedAttr]
    const color = this.options.segmentedColors[
      parseInt('' + (val - this.segmentedMin) / this.segmentedStep, 10)
    ]
    return color
  }
  private getPopupContent(data: DataListItem) {
    if (!this.options.popupAttr) {
      return ''
    }
    return `${this.options.popupAttr}: ${data[this.options.popupAttr]}`
  }
}
