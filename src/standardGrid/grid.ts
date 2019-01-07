import { DataListItem } from 'src/definitions'

export interface StandardGridOptions {
  fill: string
  popupProp: string
}
export default class StandardGrid {
  constructor(private dataList: DataListItem[]) {}
  public getLocatedGrid(latlng: [number, number]): any {
    const [lat, lng] = latlng
    const STEP = 4
    const lngP = (360 + lng) % 360
    const latP = Math.abs(lat)
    const offLng = parseInt(`${(lngP * 3600) / STEP}`, 10)
    const offLat = parseInt(`${(latP * 3600) / STEP}`, 10)
    const g00 = [offLng, offLat]
    const g01 = [offLng, offLat + STEP]
    const g10 = [offLng + STEP, offLat]
    const g11 = [offLng + STEP, offLat + STEP]
    return [g00, g01, g11, g10, g00]
  }
}
