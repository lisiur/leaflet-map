import { DataListItem } from '../definitions';
export declare type PolylineLatLngExpression = L.LatLngExpression[] | L.LatLngExpression[][];
export default class Polyline extends L.Polyline {
    private __data;
    constructor(latlngs: PolylineLatLngExpression, options?: L.PolylineOptions);
    setData(data: DataListItem): void;
    getData(): DataListItem;
}
