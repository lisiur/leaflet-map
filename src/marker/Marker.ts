import { DataListItem } from '../definitions'

export default class Marker extends L.Marker {
  private data: DataListItem
  constructor(latlng: L.LatLngExpression, options?: L.MarkerOptions) {
    super(latlng, options)
  }
  public setData(data: DataListItem) {
    this.data = data
  }
  public getData() {
    return this.data
  }
}
