import { Rule, Transformation } from './def';
import RasterStyles, { RasterStylesConfig } from './RasterStyles';
export interface PointStylesConfig extends RasterStylesConfig {
    renderType: 'single' | 'segmented' | 'classified' | 'cluster' | 'heat' | 'bubble';
    iconUrl: string;
    iconSize: number;
    bubbleColorProp: string;
    bubbleColorType: 'prop' | 'range';
    bubbleColors: string[];
    bubbleSizeProp: string;
    bubbleSizeType: 'prop' | 'range';
    bubbleSizes: number[];
}
export default class PointStyles extends RasterStyles {
    protected layerName: string;
    protected stylesCfg: PointStylesConfig;
    constructor(layerName: string, stylesCfg: PointStylesConfig);
    protected getRule(stylesCfg: PointStylesConfig): Rule;
    protected getTransformation(stylesCfg: PointStylesConfig): Transformation | null;
    private getSingleRenderRule;
    private getSegmentedRenderRule;
    private getClassifiedRenderRule;
    private getBubbleRenderRule;
    private colorPropXSizeProp;
    private colorPropXSizeRange;
    private colorRangeXSizeProp;
    private colorRangeXSizeRange;
    private getPointSymbolizerItemUsingMark;
    private getPointSymbolizerItemUsingOnlineResource;
}
