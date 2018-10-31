import { DataListItem, ChannelFunc } from '../definitions';
import MarkersLayer, { MarkersLayerOptions } from './MarkersLayer';
interface MarkersBufferLayerOptions extends MarkersLayerOptions {
    bufferTooltipAttr: string;
    bufferOptions: L.CircleMarkerOptions;
}
export default class MarkersBufferLayer extends MarkersLayer {
    options: MarkersBufferLayerOptions;
    private bufferLayer;
    constructor(map: L.Map, dataList: DataListItem[], options: MarkersBufferLayerOptions, channelFunc: ChannelFunc);
    draw(options?: MarkersBufferLayerOptions): this;
    redraw(): this;
    getBounds(): L.LatLngBoundsExpression;
    private configBufferLayer;
}
export {};
