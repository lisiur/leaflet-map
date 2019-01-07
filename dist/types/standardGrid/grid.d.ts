import { DataListItem, ChannelFunc } from '../definitions';
export interface StandardGridOptions extends L.PolylineOptions {
    popupProp: string;
}
export default class StandardGrid {
    private map;
    private dataList;
    private options;
    private channelFunc;
    private defaultOptions;
    private layer;
    private polygons;
    constructor(map: L.Map, dataList: DataListItem[], options: StandardGridOptions, channelFunc: ChannelFunc);
    draw(options?: StandardGridOptions): void;
    destroy(): void;
    fitBounds(): void;
    getBounds(): L.LatLngBoundsExpression;
    private initLayer;
    private initPolygons;
    private initOptions;
    private getLocatedGrid;
}
