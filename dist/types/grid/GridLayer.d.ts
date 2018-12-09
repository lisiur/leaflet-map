interface Config {
    distance: number;
    map: L.Map;
}
export default class GridLayer {
    private distance;
    private map;
    private gridLayer1;
    private gridLayer2;
    private gridLayer3;
    private minlat;
    private maxlat;
    private minlng;
    private maxlng;
    private zoomLevelBestMeter;
    private latlngList;
    private customMeterLatlngList;
    constructor(config: Config);
    draw(): void;
    remove(): void;
    getPolygonByPoint(latLng: number[]): any[][];
    private getNextPointByDistance;
    private showGlobalGrid;
    private showGridLayerByZoom;
    private getLatlngList;
    private binary_search;
}
export {};
