import { ILayer, ChannelFunc } from 'src/definitions';
export interface WmsTileOptions extends L.WMSOptions {
    wmsURL?: string;
}
export default class TileLayer implements ILayer {
    map: L.Map;
    options: WmsTileOptions;
    channelFunc: ChannelFunc;
    data: any;
    private visible;
    private layer;
    constructor(map: L.Map, options: WmsTileOptions, channelFunc: ChannelFunc, data: any);
    draw(): void;
    destroy(): void;
    getData(): any;
    getOptions(): WmsTileOptions;
    fitBounds(): Promise<void>;
    getBounds(): void;
    toggleVisible(visible: boolean): void;
    pitch(_id: string): void;
    private getLayer;
    private clickHandler;
    private initEvents;
    private destroyEvents;
}
