import { DataListItem, ChannelFunc } from '../definitions';
import Marker from './Marker';
/** 渲染样式 散点|热力图 */
declare type MarkersLayerRenderType = 'point' | 'heat' | 'cluster' | 'bubble';
/** 渲染颜色样式 单色|分段|分类 */
declare type MarkersLayerRenderPointColorType = 'single' | 'segmented' | 'classified';
/** 散点图标类型 iconfont|svg|image */
declare type MarkersLayerIconType = 'font_class' | 'unicode' | 'symbol' | 'image';
declare type MarkersLayerRenderClusterColorType = 'single' | 'smart';
interface IconRenderFuncOption {
    iconSize: [number, number];
    iconColor: string;
}
declare type IconRenderFunc = (data: DataListItem, params: IconRenderFuncOption) => string;
export interface MarkersLayerOptions {
    renderType: MarkersLayerRenderType;
    renderPointColorType?: MarkersLayerRenderPointColorType;
    iconType?: MarkersLayerIconType;
    iconImageUrl?: string;
    iconSize?: [number, number];
    iconClass?: string;
    iconUnicode?: string;
    iconSymbol?: string;
    iconColor?: string;
    iconAnchor?: [number, number];
    iconRenderer?: IconRenderFunc;
    bubbleColorAttr?: string;
    bubbleSizeAttr?: string;
    bubbleStrokeWidth?: number;
    bubbleStrokeColor?: string;
    bubbleColors?: string[];
    bubbleSizes?: number[];
    bubbleStrokeOpacity?: number;
    bubbleFillOpacity?: number;
    isCluster?: boolean;
    renderClusterColorType?: MarkersLayerRenderClusterColorType;
    /** 是否展示 popup */
    popup?: boolean;
    /** 是否展示 tooltip */
    tooltip?: boolean;
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
    heatOptions?: MarkersHeatLayerOptions;
    clusterOptions?: L.MarkersClusterOptions;
}
/** 转化为热力图的 options */
export interface MarkersHeatLayerOptions extends L.HeatLayerOptions {
    dimensionAttr?: string;
}
export default class MarkersLayer {
    map: L.Map;
    dataList: DataListItem[];
    options: MarkersLayerOptions;
    channelFunc: ChannelFunc;
    type: string;
    protected markers: Marker[];
    protected focusedMarker: Marker;
    protected hoveredMarker: Marker;
    /** 需要展示的放大的图标 */
    protected focusedDisplayMarker: Marker;
    protected markerLayer: L.CanvasIconLayer;
    protected visible: boolean;
    protected layer: L.CanvasIconLayer | L.HeatLayer | L.MarkersCluster | L.LayerGroup;
    private heatLayer;
    private clusterLayer;
    private bubbleLayer;
    private segmentedMin;
    private segmentedStep;
    private bubbledSizeMin;
    private bubbledSizeStep;
    private bubbledColorMap;
    private bubbledColorRefs;
    private bubbledSizeRefs;
    /** 记录某个 prop 对应的渲染颜色 */
    private classifiedColorMap;
    /** 分类渲染颜色参照(提供给调用者使用) */
    private classifiedColorRefs;
    private defaultOptions;
    constructor(map: L.Map, dataList: DataListItem[], options: MarkersLayerOptions, channelFunc: ChannelFunc);
    draw(options?: MarkersLayerOptions): this;
    redraw(): this;
    setData(data: DataListItem[]): void;
    setOptions(options: MarkersLayerOptions, redraw?: boolean): void;
    /** 获取当前 options */
    getOptions(): MarkersLayerOptions;
    fitBounds(): void;
    getBounds(): L.LatLngBoundsExpression;
    destroy(): void;
    toggleVisible(visible: boolean): void;
    changeColor(color: string): void;
    changeIcon(iconUnicode: string): void;
    pitch(id: string): void;
    getClassifiedColorRefs(): {
        attr: string;
        color: string;
        nums: number;
    }[];
    getBubbledColorRefs(): {
        attr: string;
        color: string;
        nums: number;
    }[];
    getBubbledSizeRefs(): {
        size: number;
        range: [number, number];
    }[];
    protected _zoomStartCb(): void;
    protected _zoomEndCb(): void;
    /** 渲染为散点图 */
    protected configMarkerLayer(): import("../../typings/leaflet").CanvasIconLayer;
    protected getToolTipContent(data: DataListItem): string;
    protected initOptions(options: MarkersLayerOptions): void;
    protected initMarkers(): void;
    protected initEvents(): void;
    private markerClickHandler;
    private configClusterLayer;
    /** 渲染为热力图 */
    private configHeatLayer;
    /** 渲染为气泡图 */
    private configBubbleLayer;
    private getLargerMarkerIcon;
    private getMarkerIcon;
    /** 获取当前 marker 需要展示的 icon */
    private _getMarkerIcon;
    private getCustomIconHTML;
    private cacheClassifyParams;
    private cacheBubbleParams;
    private getClassifyMarkerColor;
    private cacheSegmentParams;
    private getSegmentedMarkerColor;
    private getBubbledMarkerSize;
    private getBubbledMarkerColor;
    private getPopupContent;
    private iconCreateFunction;
}
export {};
