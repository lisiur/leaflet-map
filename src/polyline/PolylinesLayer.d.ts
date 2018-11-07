import { DataListItem, ChannelFunc } from '../definitions';
import Polyline from './Polyline';
/** 渲染颜色样式 单色|分段 */
declare type PolylineLayerRenderColorType = 'single' | 'segmented' | 'classified';
interface PolylineLayerOptions extends L.PolylineOptions {
    renderPolylineColorType: PolylineLayerRenderColorType;
    /** popup 展示字段 */
    popupAttr?: string | {
        label: string;
        value: any;
    };
    /** tooltip 展示字段 */
    tooltipAttr?: string;
    opacity?: number;
    /** 分段渲染统计字段 */
    segmentedAttr?: string;
    segmentedColors?: string[];
    /** 分类型渲染统计字段 */
    classifiedAttr?: string;
    classifiedColors?: string[];
}
export default class PolylinesLayer {
    type: string;
    protected visible: boolean;
    protected layer: L.LayerGroup;
    protected map: L.Map;
    protected dataList: DataListItem[];
    protected options: PolylineLayerOptions;
    protected channelFunc: ChannelFunc;
    protected polylines: Polyline[];
    protected segmentedMin: number;
    protected segmentedStep: number;
    protected focusedPolyline: Polyline;
    protected focusedDisplayPolyline: Polyline;
    protected polylineLayer: L.LayerGroup;
    /** 记录某个 prop 对应的渲染颜色 */
    private classifyColorMap;
    /** 分类渲染颜色参照(提供给调用者使用) */
    private classifyColorRefs;
    private defaultOptions;
    constructor(map: L.Map, dataList: DataListItem[], options: PolylineLayerOptions, channelFunc: ChannelFunc);
    draw(options?: PolylineLayerOptions): this;
    redraw(): this;
    getOptions(): PolylineLayerOptions;
    fitBounds(): void;
    getBounds(): L.LatLngBoundsExpression;
    destroy(): void;
    toggleVisible(visible: boolean): void;
    changeColor(color: string): void;
    pitch(id: string): void;
    getClassifiedColorRefs(): {
        attr: string;
        color: string;
        nums: number;
    }[];
    protected initOptions(options: PolylineLayerOptions): void;
    protected initPolylines(): void;
    protected getSegmentedPolylineColor(data: DataListItem): string;
    protected polylineClickHandler(polyline: Polyline, fitBounds?: boolean): void;
    protected getToolTipContent(data: DataListItem): string;
    protected getPopupContent(data: DataListItem): string;
    private configPolylineLayer;
    private cacheClassifyParams;
    private getClassifyPolylineColor;
    private cacheSegmentParams;
    private getColor;
}
export {};
