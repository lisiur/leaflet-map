import { ILayer, ChannelFunc, DataListItem } from '../definitions';
import { RankOptions } from '../rankLayer/RankLayer';
declare type GetStyles = (options: any) => Promise<string>;
declare type GetLayers = (options: any) => Promise<string>;
declare type GetEnvParams = (options: any) => Promise<object>;
declare type GetCqlFilter = (options: any) => Promise<string>;
export interface WmsTileOptions extends L.WMSOptions {
    getLayers?: GetLayers;
    getStyles?: GetStyles;
    getEnvParams?: GetEnvParams;
    getCqlFilter?: GetCqlFilter;
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
    private pitchedTarget;
    private layers;
    private styles;
    private envParams;
    private cqlFilter;
    private gridLayer;
    private superCluster;
    private isCluster;
    private clusterLayer;
    private clusterFeatureCollectionFeatures;
    private clusterLayerDataList;
    private clusterColor;
    private isRank;
    private rankLayer;
    private rankOptions;
    private rankLayerDataList;
    private showGridFlag;
    private eventHandlers;
    private worker;
    constructor(map: L.Map, options: WmsTileOptions, channelFunc: ChannelFunc, data: any);
    /**
     * 绘制 geoserver 渲染的图层
     * @param options
     */
    draw(options?: {
        showGrid: boolean;
    }): Promise<void>;
    /** 清除所有图层 */
    clearLayers(): void;
    /**
     * 销毁所有图层，包括事件
     */
    destroy(): void;
    /**
     * 获取额外传入的数据
     */
    getData(): any;
    /**
     * 获取 options
     */
    getOptions(): WmsTileOptions;
    /**
     * 设置 options
     * @param options
     * @param redraw 是否重绘，默认为 true
     */
    setOptions(options: WmsTileOptions, redraw?: boolean): void;
    /**
     * 将地图缩放到合适比例
     */
    fitBounds(): Promise<void>;
    /**
     * 获取 bounds
     * @param fresh 是否强制刷新数据
     */
    getBounds(): Promise<any>;
    toggleVisible(visible: boolean): Promise<void>;
    isVisible(): boolean;
    /**
     * 聚焦某条数据
     * @param data
     */
    pitch(data: DataListItem): void;
    /**
     * 设置 popup 显示的字段
     * @param prop
     */
    setPopupProp(prop: string): void;
    /**
     * 显示全球网格
     * @param distance 网格半径
     */
    showGrid(distance?: number): void;
    /**
     * 移除全球网格
     */
    hideGrid(): void;
    /**
     * top 排名
     */
    rank(dataList: DataListItem[], options?: RankOptions, allDatas?: DataListItem[]): Promise<void>;
    markRank(): void;
    getRankDataList(): DataListItem[];
    _cluster(dataList: DataListItem[], color?: string): void;
    /**
     * 聚合
     * @param dataList 包含 geometry 信息的数据集
     */
    cluster(dataList: DataListItem[], color?: string): void;
    setZIndex(zIndex: number): void;
    getZIndex(): number;
    isTileLayer(): boolean;
    hasTileLayer(): boolean;
    emit(event: string, ...params: any[]): void;
    handleClick(e: L.LeafletMouseEvent, data: any): void;
    /**
     * 获取鼠标下的图层数据信息
     * @param e event
     */
    getFeatureInfo(e: L.LeafletMouseEvent): Promise<{
        features: {
            type: "Feature";
            id: string;
            geometry: import("../../typings/geojson").GeometryObject;
            geometry_name: string;
            properties: {
                [prop: string]: any;
            };
        }[];
        originalEvent: import("../../typings/leaflet").LeafletMouseEvent;
    }>;
    private updateCluster;
    private getLayerBounds;
    /**
     * 获取 wms tile layer
     */
    private getLayer;
    private zoomHandler;
    private moveHandler;
    /**
     * 点击事件处理
     * @param e event
     */
    private clickHandler;
    /**
     * 获取 popup 需要展示的内容，为 null 值表示不需要展示
     */
    private getPopupContent;
    /**
     * 右键处理函数
     * @param e {L.LeafletMouseEvent}
     */
    private contextmenuHandler;
    /**
     * 注册事件监听
     */
    private registerEvents;
    private initClusterEvents;
    private destroyClusterEvents;
    /**
     * 添加全局事件监听
     * 在 clear layer 时不需要 destroy
     * 只有在 destroy layer 时才需要 destroy
     */
    private initEvents;
    /**
     * 移除事件监听
     */
    private destroyEvents;
    private mapDataListItemToGeojsonFeature;
    private createClusterIcon;
}
export {};
