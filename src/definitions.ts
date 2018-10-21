interface DataListItem {
  geometry: GeoJSON.GeoJsonObject
  [prop: string]: any
}
type ChannelFunc = (event: string, ...params: any[]) => void

export { DataListItem, ChannelFunc }
