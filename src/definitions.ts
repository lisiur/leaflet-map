interface DataListItem {
  geometry: GeoJSON.GeoJsonObject
  [prop: string]: any
}
type ChannelFunc = (event: string, ...params: any[]) => void

type GetDataByLatLng = (latlng: number[]) => Promise<DataListItem>

export { DataListItem, ChannelFunc, GetDataByLatLng }
