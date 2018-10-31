import { DataListItem, ChannelFunc } from '../definitions';
import Polygon from './Polygon';
/** 渲染颜色样式 单色|分段 */
declare type PolygonLayerRenderColorType = 'single' | 'segmented' | 'classified';
export interface PolygonLayerOptions extends L.PolylineOptions {
    renderPolygonColorType: PolygonLayerRenderColorType;
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
export default class PolygonsLayer {
    type: string;
    protected visible: boolean;
    protected layer: L.LayerGroup;
    protected map: L.Map;
    protected dataList: DataListItem[];
    protected options: PolygonLayerOptions;
    protected channelFunc: ChannelFunc;
    protected segmentedMin: number;
    protected segmentedStep: number;
    protected polygons: Polygon[];
    protected focusedPolygon: Polygon;
    protected focusedDisplayPolygon: Polygon;
    protected polygonLayer: L.LayerGroup;
    /** 记录某个 prop 对应的渲染颜色 */
    private classifyColorMap;
    /** 分类渲染颜色参照(提供给调用者使用) */
    private classifyColorRefs;
    private defaultOptions;
    constructor(map: L.Map, dataList: DataListItem[], options: PolygonLayerOptions, channelFunc: ChannelFunc);
    draw(options?: PolygonLayerOptions): this;
    redraw(): this;
    fitBounds(): void;
    getBounds(): L.LatLngBoundsExpression;
    destroy(): void;
    toggleVisible(visible: boolean): void;
    changeColor(color: string): void;
    pitch(id: string): void;
    getClassifyColorRefs(): {
        attr: string;
        color: string;
        nums: number;
    }[];
    protected initEvent(): void;
    protected getToolTipContent(data: DataListItem): string;
    protected getPopupContent(data: DataListItem): string;
    protected cacheClassifyParams(): void;
    protected getClassifyPolygonColor(data: DataListItem): string;
    protected cacheSegmentParams(): void;
    protected getSegmentedPolygonColor(data: DataListItem): string;
    protected polygonClickHandler(polygon: Polygon, fitBounds?: boolean): void;
    protected initOptions(options: PolygonLayerOptions): void;
    protected initPolygons(): void;
    private configPolygonLayer;
    private getColor;
}
export {};
