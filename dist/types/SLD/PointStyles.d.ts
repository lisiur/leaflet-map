import { StylesConfig, Rule } from './def';
import { SLDStyles } from './SLDStyles';
export interface PointStylesConfig extends StylesConfig {
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
export default class PointStyles extends SLDStyles {
    protected layerName: string;
    protected stylesCfg: PointStylesConfig;
    constructor(layerName: string, stylesCfg: PointStylesConfig);
    protected getRule(stylesCfg: PointStylesConfig): Rule;
    private getSingleRenderRule;
    private getSegmentedRenderRule;
    private getClassifiedRenderRule;
    private getBubbleRenderRule;
    private colorPropXSizeProp;
    private colorPropXSizeRange;
    private colorRangeXSizeProp;
    private colorRangeXSizeRange;
    private getPointSymbolizerItem;
}
