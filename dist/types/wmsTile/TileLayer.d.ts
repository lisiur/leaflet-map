import { ILayer, ChannelFunc } from '../definitions';
declare type GetStyles = (options: any) => Promise<string>;
declare type GetLayers = (options: any) => Promise<string>;
export interface WmsTileOptions extends L.WMSOptions {
    wmsURL?: string;
    getLayers?: GetLayers;
    getStyles?: GetStyles;
}
export default class TileLayer implements ILayer {
    map: L.Map;
    options: WmsTileOptions;
    channelFunc: ChannelFunc;
    data: any;
    private visible;
    private tileLayer;
    private popup;
    private popupProp;
    private popupData;
    private layers;
    private styles;
    constructor(map: L.Map, options: WmsTileOptions, channelFunc: ChannelFunc, data: any);
    draw(): Promise<void>;
    destroy(): void;
    getData(): any;
    getOptions(): WmsTileOptions;
    fitBounds(): Promise<void>;
    getBounds(): Promise<any>;
    toggleVisible(visible: boolean): void;
    pitch(_id: string): void;
    setPopupProp(prop: string): void;
    private getLayer;
    private clickHandler;
    private getPopupContent;
    private contextmenuHandler;
    private getFeatureInfo;
    private initEvents;
    private destroyEvents;
}
export {};
