import { StylesConfig, RuleItem, Transformation } from './def';
import RasterStyles, { RasterStylesConfig } from './RasterStyles';
export declare type PolygonStylesConfig = RasterStylesConfig;
export default class PolygonStyles extends RasterStyles {
    protected layerName: string;
    protected stylesCfg: PolygonStylesConfig;
    constructor(layerName: string, stylesCfg: PolygonStylesConfig);
    protected getRule(stylesCfg: PolygonStylesConfig): RuleItem[];
    protected getTransformation(_: StylesConfig): Transformation | null;
    private getSingleRenderRule;
    private getSegmentedRenderRule;
    private getClassifiedRenderRule;
    private getRankRenderRule;
    private getPolygonSymbolizerItem;
    private getTextSymbolizer;
}
