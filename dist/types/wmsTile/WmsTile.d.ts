import { DataListItem, ChannelFunc, GetDataByLatLng } from '../definitions';
/**
 * 获取 GeoServer 参数
 */
declare type GetWmsConfigs = (options: WmsTileOptions) => Promise<{
    wmsURL: string;
    layers: string;
    styles: string;
}>;
interface WmsTileOptions extends L.WMSOptions {
    wmsURL?: string;
    layers?: string;
    style?: string;
    getDataByLatLng?: GetDataByLatLng;
    getWmsConfigs?: GetWmsConfigs;
    popupAttr?: string | {
        label: string;
        value: any;
    };
    [prop: string]: any;
}
export default class WmsTile {
    type: string;
    private map;
    private dataList;
    private options;
    private channelFunc;
    private layer;
    private visible;
    private popup;
    constructor(map: L.Map, dataList: DataListItem[], options: WmsTileOptions, channelFunc: ChannelFunc);
    draw(options?: WmsTileOptions): Promise<void>;
    destroy(): void;
    getOptions(): WmsTileOptions;
    pitch(id: string): void;
    toggleVisible(visible: boolean): void;
    fitBounds(): void;
    getBounds(): import("../../typings/leaflet").LatLngBounds;
    private initEvents;
    private initOptions;
    private getLayer;
    private clickHandler;
    private showPopup;
    private getPopupContent;
}
export {};
