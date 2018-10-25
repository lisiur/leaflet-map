import { DataListItem } from '../definitions'

export type PolylineLatLngExpression =
  | L.LatLngExpression[]
  | L.LatLngExpression[][]
export default class Polyline extends L.Polyline {
  // tslint:disable-next-line:variable-name
  private __data: DataListItem
  constructor(latlngs: PolylineLatLngExpression, options?: L.PolylineOptions) {
    super(latlngs, options)
  }
  public setData(data: DataListItem) {
    this.__data = data
  }
  public getData() {
    return this.__data
  }
}
