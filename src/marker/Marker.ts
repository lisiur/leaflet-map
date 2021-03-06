import { DataListItem } from '../definitions'

export default class Marker extends L.Marker {
  // tslint:disable-next-line:variable-name
  private __data: DataListItem
  constructor(latlng: L.LatLngExpression, options?: L.MarkerOptions) {
    super(latlng, options)
  }
  public setData(data: DataListItem) {
    this.__data = data
  }
  public getData() {
    return this.__data
  }
}
