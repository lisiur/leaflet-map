import Polygon from './Polygon'
import PolygonsLayer, { PolygonLayerOptions } from './PolygonsLayer'
import { DataListItem, ChannelFunc } from '../definitions'

export default class GridsLayer extends PolygonsLayer {
  private tooltipVisible: boolean
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: PolygonLayerOptions,
    channelFunc: ChannelFunc
  ) {
    super(map, dataList, options, channelFunc)
    this.tooltipVisible = true
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
    return this
  }
  public toggleTooltip(visible: boolean) {
    this.tooltipVisible = visible
    this._toggleTooltip()
  }
  private _toggleTooltip() {
    if (this.tooltipVisible) {
      if (this.options.tooltipAttr) {
        this.polygons.forEach((polygon) => {
          polygon.bindTooltip(this.getToolTipContent(polygon.getData()), {
            permanent: true,
          })
        })
      }
    } else {
      this.polygons.forEach((polygon) => {
        polygon.unbindTooltip()
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
        this.polygonClickHandler(polygon)
      })
      this._toggleTooltip()
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
}
