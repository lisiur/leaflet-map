import { DataListItem } from '../definitions';
export default class Marker extends L.Marker {
    private __data;
    constructor(latlng: L.LatLngExpression, options?: L.MarkerOptions);
    setData(data: DataListItem): void;
    getData(): DataListItem;
}
