interface Config {
  distance: number
  map: L.Map
}
export default class GridLayer {
  private distance: number
  private map: L.Map
  private gridLayer1: L.Polyline
  private gridLayer2: L.Polyline
  private gridLayer3: L.Polyline
  private minlat: number
  private maxlat: number
  private minlng: number
  private maxlng: number
  private zoomLevelBestMeter: any
  private latlngList: any
  private customMeterLatlngList: any
  constructor(config: Config) {
    this.distance = config.distance
    this.map = config.map
    this.gridLayer1 = null
    this.gridLayer2 = null
    this.gridLayer3 = null

    this.customMeterLatlngList = {}

    this.minlat = 18
    this.maxlat = 54
    this.minlng = 72
    this.maxlng = 139

    this.zoomLevelBestMeter = {
      18: 50,
      17: 100,
      16: 300,
      15: 500,
      14: 1000,
      13: 3000,
      12: 5000,
      11: 10000,
      10: 20000,
      9: 50000,
      8: 100000,
      7: 200000,
      6: 300000,
      5: 500000,
      4: 1000000,
      3: 2000000,
    }

    this.map.on('zoom', this.zoomCb, this)
    this.map.on('move', this.zoomCb, this)

    const zoom = this.map.getZoom()

    this.latlngList = this.getLatlngList(this.distance)
    this.showGridLayerByZoom(this.distance, zoom)
  }

  public clear() {
    this.map.off('zoom', this.zoomCb, this)
    this.map.off('move', this.zoomCb, this)
    if (this.gridLayer1) {
      this.gridLayer1.remove()
    }
    if (this.gridLayer2) {
      this.gridLayer2.remove()
    }
    if (this.gridLayer3) {
      this.gridLayer3.remove()
    }
  }

  public getPolygonByPoint(point2: string[]) {
    const { latList, lngList } = this.latlngList

    const latIndex = this.binary_search(latList, point2[0])
    const lngIndex = this.binary_search(lngList, point2[1])

    const lat1 = [latList[latIndex], latList[latIndex + 1]]
    const lng1 = [lngList[lngIndex], lngList[lngIndex + 1]]

    return [
      [lat1[0], lng1[0]],
      [lat1[0], lng1[1]],
      [lat1[1], lng1[1]],
      [lat1[1], lng1[0]],
      [lat1[0], lng1[0]],
    ]
  }

  private zoomCb() {
    const zoom = this.map.getZoom()
    this.showGridLayerByZoom(this.distance, zoom)
  }

  private getNear(meter: number) {
    return Object.keys(this.zoomLevelBestMeter).sort((it) => {
      return this.zoomLevelBestMeter[it] - meter
    })
  }

  private getZoomMeterList(meter: number) {
    const near = +this.getNear(meter)[0]
    const res = {} as any

    for (let i = 18; i >= +near; i--) {
      res[i] = meter
    }

    for (let i = near - 1; i > 3; i--) {
      meter *= 2
      res[i] = meter
    }

    return res
  }

  private getNextPointByDistance(latlng: number[], meter: number) {
    const latitude = latlng[0]
    const longitude = latlng[1]
    const earth = 6378.137 // radius of the earth in kilometer
    const pi = Math.PI
    const cos = Math.cos
    const m = 1 / (((2 * pi) / 360) * earth) / 1000 // 1 meter in degree

    const newLatitude = latitude + meter * m

    const newLongitude = longitude + (meter * m) / cos(latitude * (pi / 180))

    return [newLatitude, newLongitude]
  }

  private showGlobalGrid(meter: number, color: string) {
    const lineList = []
    const maxlat = this.maxlat
    const maxlng = this.maxlng
    const minlat = this.minlat
    const minlng = this.minlng

    if (!this.customMeterLatlngList[meter]) {
      this.customMeterLatlngList[meter] = this.getLatlngList(meter)
    }

    const { latList, lngList } = this.customMeterLatlngList[meter]
    let lat: any
    let lng: any
    const mapBounds = this.map.getBounds()
    const northWest = mapBounds.getNorthWest()
    const southEast = mapBounds.getSouthEast()

    for (let i = 0; i < latList.length - 2; i++) {
      if (northWest.lat > latList[i] && southEast.lat < latList[i]) {
        lineList.push([[latList[i], minlng], [latList[i], maxlng]])
      }
      // fix
      if (northWest.lat < latList[i]) {
        lineList.push([[latList[i], minlng], [latList[i], maxlng]])
        break
      }
    }

    lat = lineList[lineList.length - 1][0][0]

    for (let i = 0; i < lngList.length - 2; i++) {
      if (northWest.lng < lngList[i] && southEast.lng > lngList[i]) {
        lineList.push([[minlat, lngList[i]], [maxlat, lngList[i]]])
      }
      if (southEast.lng < lngList[i]) {
        lineList.push([[minlat, lngList[i]], [maxlat, lngList[i]]])
        break
      }
    }

    lng = lineList[lineList.length - 1][0][1]

    lineList.forEach((it) => {
      if (it[1][1] === maxlng) {
        it[1][1] = lng
      }
      if (it[1][0] === maxlat) {
        it[1][0] = lat
      }
    })

    return L.polyline(lineList as L.LatLngExpression[][], {
      color,
      weight: 1,
    }).addTo(this.map)
  }

  private showGridLayerByZoom(meter: number, zoom: number) {
    const zoomMeterList = this.getZoomMeterList(meter)
    const near = +this.getNear(meter)[0]
    zoom = zoom <= 3 ? 4 : zoom

    const zoomLevel1 = zoom
    let zoomLevel2 = zoom < near && zoom + 2 <= 18 ? zoom + 2 : null
    let zoomLevel3 = zoom < near && zoom + 4 <= 18 ? zoom + 4 : null
    if (zoom === near - 1) {
      zoomLevel2 = zoom + 1
    }

    if (zoom === near - 2) {
      zoomLevel2 = zoom + 1
      zoomLevel3 = zoom + 2
    }

    if (zoom === near - 3) {
      zoomLevel2 = zoom + 1
      zoomLevel3 = zoom + 3
    }

    if (zoom >= near) {
      zoomLevel2 = null
      zoomLevel3 = null
    }

    if (
      !zoomLevel2 &&
      zoomMeterList[zoomLevel2] === zoomMeterList[zoomLevel1]
    ) {
      zoomLevel2 = null
    }

    if (
      !zoomLevel3 &&
      zoomMeterList[zoomLevel3] === zoomMeterList[zoomLevel1]
    ) {
      zoomLevel3 = null
    }

    if (
      !zoomLevel3 &&
      !zoomLevel2 &&
      zoomMeterList[zoomLevel3] === zoomMeterList[zoomLevel2]
    ) {
      zoomLevel3 = null
    }

    if (this.gridLayer1) {
      this.gridLayer1.remove()
    }
    if (this.gridLayer2) {
      this.gridLayer2.remove()
    }
    if (this.gridLayer3) {
      this.gridLayer3.remove()
    }
    if (zoomLevel3) {
      this.gridLayer3 = this.showGlobalGrid(zoomMeterList[zoomLevel3], '#ccc')
    }

    if (zoomLevel2) {
      this.gridLayer2 = this.showGlobalGrid(zoomMeterList[zoomLevel2], '#999')
    }

    this.gridLayer1 = this.showGlobalGrid(zoomMeterList[zoomLevel1], '#666')
  }

  private getLatlngList(meter: number) {
    const maxlat = this.maxlat
    const maxlng = this.maxlng
    const minlat = this.minlat
    const minlng = this.minlng
    let lat = minlat
    let lng = minlng
    const latList = []
    const lngList = []

    while (lat < maxlat) {
      const point = [lat, minlng]
      latList.push(lat)
      const newPoint = this.getNextPointByDistance(point, meter)

      lat = newPoint[0]
    }

    while (lng < maxlng) {
      const point = [minlat, lng]
      const newPoint = this.getNextPointByDistance(point, meter)

      lngList.push(lng)
      lng = newPoint[1]
    }

    return { latList, lngList }
  }

  private binary_search(arr: any[], key: string) {
    let low = 0
    let high = arr.length - 2

    while (low <= high) {
      const mid = (high + low) / 2
      if (key >= arr[mid] && key < arr[mid + 1]) {
        return mid
      } else if (key > arr[mid] && key > arr[mid + 1]) {
        low = mid + 1
      } else if (key < arr[mid] && key < arr[mid + 1]) {
        high = mid - 1
      } else {
        return -1
      }
    }
  }
}
