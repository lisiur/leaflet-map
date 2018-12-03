import { DataListItem } from '../definitions';
export default class Polygon extends L.Polygon {
    private __data;
    constructor(latlngs: L.LatLngExpression[] | L.LatLngExpression[][] | L.LatLngExpression[][][], options?: L.PolylineOptions);
    setData(data: DataListItem): void;
    getData(): DataListItem;
}
