export interface DataListItem {
  geometry: GeoJSON.GeoJsonObject
  [prop: string]: any
}

export interface ILayerConstructor {
  new (
    map: L.Map,
    dataList: DataListItem[],
    options: any,
    channelFunc: ChannelFunc
  ): ILayer
}
export interface ILayer {
  draw(): void
  getOptions(): any
  fitBounds(): void
  getBounds(): void
  destroy(): void
  toggleVisible(visible: boolean): void
  pitch(data: DataListItem): void
}

export type ChannelFunc = (event: string, ...params: any[]) => void

export type GetDataByLatLng = (latlng: number[]) => Promise<DataListItem>
