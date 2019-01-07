import { DataListItem, ChannelFunc } from '../definitions'
import { optionsMerge } from '../utils'
import Polygon from '../polygon/Polygon'
import { hx2bs, bs2hx } from '../utils/transform'

export interface StandardGridOptions extends L.PolylineOptions {
  popupProp: string
}
export default class StandardGrid {
  private map: L.Map
  private dataList: DataListItem[]
  private options: StandardGridOptions
  private channelFunc: ChannelFunc
  private defaultOptions: StandardGridOptions
  private layer: L.LayerGroup
  private polygons: Polygon[]
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: StandardGridOptions,
    channelFunc: ChannelFunc
  ) {
    this.map = map
    this.dataList = dataList
    this.options = options
    this.channelFunc = channelFunc
    this.layer = null
    this.polygons = []
    this.defaultOptions = {
      fillColor: '#4268AC',
      popupProp: null,
    }
  }
  public draw(options?: StandardGridOptions) {
    this.initOptions(options)
    this.initPolygons()
    this.initLayer()
  }
  public destroy() {
    if (this.layer) {
      this.map.removeLayer(this.layer)
    }
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
  private initLayer() {
    this.layer = L.layerGroup()
    this.polygons.forEach((polygon) => {
      this.layer.addLayer(polygon)
    })
    this.map.addLayer(this.layer)
  }
  private initPolygons() {
    this.polygons = this.dataList.map((data) => {
      const marker = L.geoJSON(data.geometry).getLayers()[0] as L.Marker
      const polygonLatlngs = this.getLocatedGrid(marker.getLatLng())
      const polygon = new Polygon(polygonLatlngs, this.options)
      polygon.setData(data)
      polygon.on('click', () => {
        // this.polygonClickHandler(polygon)
      })
      polygon.on('contextmenu', (event) => {
        this.channelFunc('contextmenu', {
          event,
          target: polygon,
        })
      })
      return polygon
    })
  }
  private initOptions(options?: StandardGridOptions) {
    this.options = optionsMerge(
      this.defaultOptions,
      this.options,
      options
    ) as StandardGridOptions
  }
  private getLocatedGrid(latlng: L.LatLng): L.LatLng[] {
    const { lat, lng } = hx2bs(latlng)
    const STEP = 4
    const lngP = ((360 + lng) % 360) * 3600
    const latP = Math.abs(lat) * 3600
    const offLng = parseInt(`${lngP / STEP}`, 10)
    const offLat = parseInt(`${latP / STEP}`, 10)
    const g00 = L.latLng((offLat * STEP) / 3600, (offLng * STEP) / 3600)
    const g01 = L.latLng(((offLat + 1) * STEP) / 3600, (offLng * STEP) / 3600)
    const g10 = L.latLng((offLat * STEP) / 3600, ((offLng + 1) * STEP) / 3600)
    const g11 = L.latLng(
      ((offLat + 1) * STEP) / 3600,
      ((offLng + 1) * STEP) / 3600
    )
    return [bs2hx(g00), bs2hx(g01), bs2hx(g11), bs2hx(g10), bs2hx(g00)]
  }
}
