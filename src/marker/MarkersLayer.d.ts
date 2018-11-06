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
    protected defaultOptions: MarkersLayerOptions;
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
    constructor(map: L.Map, dataList: DataListItem[], options: MarkersLayerOptions, channelFunc: ChannelFunc);
    draw(options?: MarkersLayerOptions): this;
    /** 绘制图层 */
    redraw(): this;
    /** 设置 data */
    setData(data: DataListItem[]): void;
    /** 设置配置参数 */
    setOptions(options: MarkersLayerOptions, redraw?: boolean): void;
    /** 获取当前 options */
    getOptions(): MarkersLayerOptions;
    /** 缩放至包含所有边界 */
    fitBounds(): void;
    /** 获取边界 */
    getBounds(): L.LatLngBoundsExpression;
    /** 销毁图层 */
    destroy(): void;
    /** 是否显示 */
    toggleVisible(visible: boolean): void;
    /** 更换颜色 */
    changeColor(color: string): void;
    /** 更换 icon */
    changeIcon(iconUnicode: string): void;
    /** 聚焦某个 marker */
    pitch(id: string): void;
    /** 获取分类颜色说明 */
    getClassifiedColorRefs(): {
        attr: string;
        color: string;
        nums: number;
    }[];
    /** 获取气泡颜色图例说明 */
    getBubbledColorRefs(): {
        attr: string;
        color: string;
        nums: number;
    }[];
    /** 获取气泡大小图例说明 */
    getBubbledSizeRefs(): {
        size: number;
        range: [number, number];
    }[];
    protected _zoomStartCb(): void;
    protected _zoomEndCb(): void;
    /** 配置散点图 */
    protected configMarkerLayer(): import("../../typings/leaflet").CanvasIconLayer;
    /** 获取 tooltip 内容 */
    protected getToolTipContent(data: DataListItem): string;
    /** 初始化配置参数 */
    protected initOptions(options: MarkersLayerOptions): void;
    /** 初始化 Marker */
    protected initMarkers(): void;
    /** 初始化事件 */
    protected initEvents(): void;
    private markerClickHandler;
    /** 配置聚合图层 */
    private configClusterLayer;
    /** 渲染为热力图 */
    private configHeatLayer;
    /** 渲染为气泡图 */
    private configBubbleLayer;
    /** 获取图标放大后 icon */
    private getLargerMarkerIcon;
    /** 获取图标 icon */
    private getMarkerIcon;
    /** 获取当前 marker 需要展示的 icon
     * @param data
     * @param {boolean} isLarger 是否放大
     */
    private _getMarkerIcon;
    /** 获取icon html */
    private getCustomIconHTML;
    /** 缓存分类相关参数 */
    private cacheClassifyParams;
    /** 缓存气泡相关参数 */
    private cacheBubbleParams;
    /** 获取分类颜色 */
    private getClassifyMarkerColor;
    /** 缓存分段相关参数 */
    private cacheSegmentParams;
    /** 获取分段颜色 */
    private getSegmentedMarkerColor;
    /** 获取气泡大小 */
    private getBubbledMarkerSize;
    /** 获取气泡颜色 */
    private getBubbledMarkerColor;
    /** 获取 popup 内容 */
    private getPopupContent;
    /** 创建 cluster icon */
    private iconCreateFunction;
}
export {};
