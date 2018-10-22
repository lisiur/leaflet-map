import { DataListItem } from '../definitions'

export default class Polygon extends L.Polygon {
  // tslint:disable-next-line:variable-name
  private __data: DataListItem
  constructor(
    latlngs:
      | L.LatLngExpression[]
      | L.LatLngExpression[][]
      | L.LatLngExpression[][][],
    options?: L.PolylineOptions
  ) {
    super(latlngs, options)
  }
  public setData(data: DataListItem) {
    this.__data = data
  }
  public getData() {
    return this.__data
  }
}
