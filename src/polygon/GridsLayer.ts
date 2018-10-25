import Polygon from './Polygon'
import PolygonsLayer, { PolygonLayerOptions } from './PolygonsLayer'
import { DataListItem, ChannelFunc } from '../definitions'

export default class GridsLayer extends PolygonsLayer {
  private propMaxLength: number
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: PolygonLayerOptions,
    channelFunc: ChannelFunc
  ) {
    super(map, dataList, options, channelFunc)
    this.propMaxLength = -1
  }
  public redraw() {
    if (!this.visible) {
      return
    }
    if (this.layer) {
      this.layer.remove()
    }
    this.layer = this.configGridLayer()
    this.map.addLayer(this.layer)
    // tooltip 有可能需要直接展示，需要在 polygon 添加到地图上之后才可以，所以需要延迟设置
    this.configTooltip()
    return this
  }
  public toggleTooltip(visible: boolean) {
    this.polygons.forEach((polygon) => {
      if (polygon.getTooltip()) {
        polygon.getTooltip().setOpacity(visible ? 1 : 0)
      }
    })
  }
  protected initEvent() {
    this.map.on('zoom', this.zoomHandler.bind(this))
  }
  private configTooltip() {
    this.propMaxLength = this.getPropMaxLength()
    if (this.options.tooltipAttr) {
      this.polygons.forEach((polygon) => {
        polygon.bindTooltip(this.getToolTipContent(polygon.getData()), {
          permanent: true,
          direction: 'center',
        })
      })
    }
  }
  private configGridLayer() {
    this.polygonLayer = L.layerGroup()
    this.polygons = this.polygons.map((polygon) => {
      let color = this.options.color
      if (this.options.renderPolygonColorType === 'segmented') {
        color = this.getSegmentedPolygonColor(polygon.getData())
      }
      const options: L.PolylineOptions = Object.assign({}, this.options, {
        color,
      })
      // 重新应用 options
      const newPolygon = new Polygon(polygon.getLatLngs(), options)
      newPolygon.setData(polygon.getData())
      newPolygon.on('click', () => {
        // this.polygonClickHandler(polygon)
      })
      if (this.options.popupAttr) {
        newPolygon.bindPopup(this.getPopupContent(newPolygon.getData()))
      }
      return newPolygon
    })
    this.polygons.forEach((polygon) => {
      this.polygonLayer.addLayer(polygon)
    })
    return this.polygonLayer
  }
  private zoomHandler() {
    const polygon = this.polygons[0]
    if (!polygon) {
      return
    }
    this.toggleTooltip(
      this.getRectangleWidth(polygon) >
        this.getTooltipMaxWidth(this.propMaxLength)
    )
  }
  private getRectangleWidth(polygon: Polygon) {
    return (
      this.map.latLngToLayerPoint(polygon.getBounds().getNorthEast()).x -
      this.map.latLngToLayerPoint(polygon.getBounds().getSouthWest()).x
    )
  }
  private getTooltipMaxWidth(textLength: number) {
    return textLength * 12 + 14
  }
  private getPropMaxLength() {
    const prop = this.options.tooltipAttr
    return this.polygons
      .map((polygon) => `${polygon.getData()[prop]}`.length)
      .reduce((prev, curr) => {
        return Math.max(prev, curr)
      }, 0)
  }
}
