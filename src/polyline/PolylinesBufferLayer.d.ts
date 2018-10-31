import { DataListItem, ChannelFunc } from '../definitions';
import PolylinesLayer from './PolylinesLayer';
/** 渲染颜色样式 单色|分段 */
declare type PolylineLayerRenderColorType = 'single' | 'segmented';
interface PolylineBufferLayerOptions extends L.CorridorOptions {
    renderPolylineColorType: PolylineLayerRenderColorType;
    /** popup 展示字段 */
    popupAttr?: string;
    /** tooltip 展示字段 */
    tooltipAttr?: string;
    opacity?: number;
    /** 分段渲染统计字段 */
    segmentedAttr?: string;
    segmentedColors?: string[];
}
export default class PolylinesBufferLayer extends PolylinesLayer {
    type: string;
    protected options: PolylineBufferLayerOptions;
    constructor(map: L.Map, dataList: DataListItem[], options: PolylineBufferLayerOptions, channelFunc: ChannelFunc);
    draw(options?: PolylineBufferLayerOptions): this;
    redraw(): this;
    fitBounds(): void;
    getBounds(): L.LatLngBoundsExpression;
    changeColor(color: string): void;
    private configPolylineBufferLayer;
}
export {};
