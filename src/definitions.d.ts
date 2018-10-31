interface DataListItem {
    geometry: GeoJSON.GeoJsonObject;
    [prop: string]: any;
}
declare type ChannelFunc = (event: string, ...params: any[]) => void;
export { DataListItem, ChannelFunc };
