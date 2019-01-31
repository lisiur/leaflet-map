import Marker from '../marker/Marker'
import { DataListItem, DataList } from '../definitions'
import { darken } from '../utils'

export interface RankOptions {
  /** 颜色 */
  rankFill: string
  rankIconUrl: string
}

export default class RankLayer {
  private groupLayer: L.LayerGroup
  private map: L.Map
  private dataList: DataList
  private options: RankOptions
  private eventHandlers: any
  constructor(
    map: L.Map,
    dataList: DataList,
    options: RankOptions,
    eventHandlers: any
  ) {
    this.map = map
    this.dataList = dataList
    this.options = options
    this.eventHandlers = eventHandlers
    this.groupLayer = this.initLayer()
  }

  public inMap() {
    return this.map.hasLayer(this.groupLayer)
  }

  public addTo(map: L.Map) {
    this.groupLayer.addTo(map)
  }

  public setZIndex(index: number) {
    this.groupLayer.setZIndex(index)
  }

  public remove() {
    this.groupLayer.remove()
  }

  public fitBounds() {
    const bounds = this.getBounds()
    if (bounds) {
      this.map.fitBounds(bounds)
    }
  }

  public getBounds(): L.LatLngBoundsExpression {
    return L.featureGroup(
      this.dataList.map(
        (dataItem) => L.geoJSON(dataItem.geometry).getLayers()[0]
      )
    ).getBounds()
  }

  private initLayer(): L.LayerGroup {
    const dataType = this.detectDataItemType()
    const layerGroup = L.layerGroup()
    layerGroup.addTo(this.map)
    switch (dataType) {
      case 'Point': {
        this.dataList.forEach((data) => {
          const layer = L.geoJSON(data.geometry).getLayers()[0]
          const center = (layer as L.Marker).getLatLng()
          const markerLayer = new Marker(center, {
            icon: this.getRankMarkerIcon(data),
            zIndexOffset: 500,
          })
          markerLayer.on('click', (e) => this.eventHandlers.click(e, data))
          markerLayer.on('contextmenu', (e) =>
            this.eventHandlers.contextmenu(e, data)
          )
          layerGroup.addLayer(markerLayer)
        })
        break
      }
      case 'Polygon':
      case 'MultiPolygon': {
        const polygonLayers = this.dataList.map((data) => {
          const latlngs = (L.geoJSON(
            data.geometry
          ).getLayers()[0] as L.Polygon).getLatLngs()
          const polygonLayer = L.polygon(latlngs, {
            fillColor: this.options.rankFill,
            fillOpacity: 0.3,
            opacity: 0.6,
            color: darken(this.options.rankFill),
          })
          polygonLayer.on(
            'click',
            (e) => this.eventHandlers.click(e, data),
            this
          )
          polygonLayer.on('contextmenu', (e) =>
            this.eventHandlers.contextmenu(e, data)
          )
          return polygonLayer
        })

        // polygon.getCenter 需要 polygon 先添加到图层才能调用
        polygonLayers.forEach(layerGroup.addLayer, layerGroup)
        const markerLayers = this.dataList.map((data, index) => {
          const polygon = polygonLayers[index]
          const center = polygon.getBounds().getCenter()
          const markerLayer = new Marker(center, {
            icon: this.getRankMarkerIcon(data),
          })
          markerLayer.on('click', this.eventHandlers.click)
          markerLayer.on('contextmenu', (e) =>
            this.eventHandlers.contextmenu(e, data)
          )
          return markerLayer
        })
        // 将 polygonLayers 全部移除
        // polygonLayers.forEach(layerGroup.removeLayer, layerGroup)

        markerLayers.forEach(layerGroup.addLayer, layerGroup)
        break
      }
    }
    return layerGroup
  }

  private detectDataItemType() {
    if (this.dataList.length <= 0) {
      return null
    }
    return this.dataList[0].geometry.type
  }

  private getRankMarkerIcon(data: DataListItem) {
    const color = this.options.rankFill
    const iconUrl = `${this.options.rankIconUrl}?color=${color.slice(1)}`
    const rank = this.dataList.findIndex((dataItem) => data === dataItem) + 1
    return L.divIcon({
      className: 'cluster-icon',
      iconAnchor: [18, 18],
      html: `
        <div
          style="
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          "
          >
          <img
            src="${iconUrl}"
            style="
              position: relative;
              width: 36px;
              z-index: 2;
            "
            />
          <div
            style="
              position: relative;
              top: -2px;
              width: 50%;
              height: 5px;
              background: #666;
              opacity: 0.8;
              border-radius: 50%;
              z-index: 1;
            "
           ></div>
          <span
            style="
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              color: white;
              font-size: 16px;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 3;
            "
            >
            <span
              style="
                position: relative;
                top: -6px;
              "
              >${rank}</span>
          </span>
        </div>
      `,
    })
  }
}
