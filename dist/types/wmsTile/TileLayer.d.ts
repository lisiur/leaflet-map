import { ILayer, ChannelFunc, DataListItem } from '../definitions';
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
    private clusterLayer;
    private superCluster;
    private clusterMarkersLayer;
    private clusterFeatureCollectionFeatures;
    private isCluster;
    private clusterLayerDataList;
    private clusterColor;
    private showGridFlag;
    private eventHandlers;
    private worker;
    constructor(map: L.Map, options: WmsTileOptions, channelFunc: ChannelFunc, data: any);
    /**
     * 绘制 layer
     * @param options
     */
    draw(options?: {
        showGrid: boolean;
    }): Promise<void>;
    /**
     * 销毁 layer
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
    _cluster_(dataList: DataListItem[], color?: string): void;
    /**
     * 聚合
     * @deprecated
     * @param dataList 包含 geometry 信息的数据集
     */
    _cluster(dataList: DataListItem[], color?: string): void;
    setZIndex(zIndex: number): void;
    getZIndex(): number;
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
    /**
     * 添加事件监听
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
