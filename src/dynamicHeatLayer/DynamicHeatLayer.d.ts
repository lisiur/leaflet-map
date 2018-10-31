import { DataListItem, ChannelFunc } from '../definitions';
import { MarkersHeatLayerOptions } from '../marker/MarkersLayer';
interface DynamicHeatLayerOptions extends MarkersHeatLayerOptions {
    /** 是否循环播放 */
    loop: boolean;
    /** 是否自动播放 */
    auto: boolean;
    /** 间隔时间 */
    interval: number;
}
export default class DynamicHeatLayer {
    /** 当前播放到第几步 */
    private currentStep;
    private map;
    private dynamicDataList;
    private options;
    private channelFunc;
    private layer;
    private isPause;
    constructor(map: L.Map, dynamicDataList: DataListItem[][], options: DynamicHeatLayerOptions, channelFunc: ChannelFunc);
    restart(): void;
    start(): void;
    pause(): void;
    prev(): void;
    next(): void;
    gotoStep(step: number): void;
    draw(options?: DynamicHeatLayerOptions): this;
    fitBounds(): void;
    private initOptions;
    private initLayer;
}
export {};
