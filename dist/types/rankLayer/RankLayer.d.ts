import { DataList } from '../definitions';
export interface RankOptions {
    /** 颜色 */
    rankFill: string;
    rankIconUrl: string;
}
export default class RankLayer {
    private groupLayer;
    private map;
    private dataList;
    private options;
    private eventHandlers;
    constructor(map: L.Map, dataList: DataList, options: RankOptions, eventHandlers: any);
    inMap(): boolean;
    addTo(map: L.Map): void;
    setZIndex(index: number): void;
    remove(): void;
    fitBounds(): void;
    getBounds(): L.LatLngBoundsExpression;
    private initLayer;
    private detectDataItemType;
    private getRankMarkerIcon;
}
