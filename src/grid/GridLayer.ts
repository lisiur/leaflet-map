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
      18: 4,
      17: 8,
      16: 15,
      15: 30,
      14: 62,
      13: 125,
      12: 225,
      11: 450,
      10: 900,
      9: 1800,
      8: 3600,
      7: 7500,
      6: 15000,
      5: 30000,
      4: 60000,
      3: 110000,
    }

    this.map.on('zoom', this.draw, this)
    this.map.on('move', this.draw, this)
    this.latlngList = this.getLatlngList(this.distance)
  }

  public draw() {
    this.showGridLayerByZoom(this.distance, this.map.getZoom())
  }

  public remove() {
    this.map.off('zoom', this.draw, this)
    this.map.off('move', this.draw, this)
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

  public getPolygonByPoint(latLng: number[]) {
    const { latList, lngList } = this.latlngList

    const latIndex = this.binary_search(latList, latLng[0])
    const lngIndex = this.binary_search(lngList, latLng[1])

    const lat = [latList[latIndex], latList[latIndex + 1]]
    const lng = [lngList[lngIndex], lngList[lngIndex + 1]]

    return [
      [lat[0], lng[0]],
      [lat[0], lng[1]],
      [lat[1], lng[1]],
      [lat[1], lng[0]],
      [lat[0], lng[0]],
    ]
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

    const latLowIndex = this.binary_search(latList, southEast.lat)

    const lngLowIndex = this.binary_search(lngList, northWest.lng)

    for (let i = latLowIndex; i < latList.length - 2; i++) {
      if (northWest.lat > latList[i] && southEast.lat < latList[i]) {
        lineList.push([[latList[i], minlng], [latList[i], maxlng]])
      }
      // fix right top line
      if (northWest.lat < latList[i]) {
        lineList.push([[latList[i], minlng], [latList[i], maxlng]])
        break
      }
    }

    lat = lineList[lineList.length - 1][0][0]

    for (let i = lngLowIndex; i < lngList.length - 2; i++) {
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
    if (this.gridLayer1) {
      this.gridLayer1.remove()
    }
    if (this.gridLayer2) {
      this.gridLayer2.remove()
    }
    if (this.gridLayer3) {
      this.gridLayer3.remove()
    }
    const bestMeter = this.zoomLevelBestMeter[zoom]
    const mod = bestMeter % meter
    const quotient = bestMeter / meter
    let realMeter = meter
    if (mod < meter / 2) {
      realMeter = quotient * meter
    }
    if (mod >= meter / 2) {
      realMeter = (quotient + 1) * meter
    }
    if (meter > bestMeter || zoom === 18) {
      this.gridLayer3 = this.showGlobalGrid(meter, '#ccc')
      return
    }
    this.gridLayer3 = this.showGlobalGrid(realMeter, '#ccc')
    this.gridLayer2 = this.showGlobalGrid(realMeter * 4, '#999')
    this.gridLayer1 = this.showGlobalGrid(realMeter * 8, '#666')
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

  private binary_search(arr: number[], key: number) {
    let low = 0
    let high = arr.length - 2

    while (low <= high) {
      const mid = Math.floor((high + low) / 2)
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
