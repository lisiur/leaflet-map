import { StylesConfig, RuleItem, Transformation } from './def';
import { SLDStyles } from './SLDStyles';
export interface PolygonStylesConfig extends StylesConfig {
    renderType: 'single' | 'segmented' | 'classified';
}
export default class PolygonStyles extends SLDStyles {
    protected layerName: string;
    protected stylesCfg: PolygonStylesConfig;
    constructor(layerName: string, stylesCfg: PolygonStylesConfig);
    protected getRule(stylesCfg: PolygonStylesConfig): RuleItem[];
    protected getTransformation(_: StylesConfig): Transformation | null;
    private getSingleRenderRule;
    private getSegmentedRenderRule;
    private getClassifiedRenderRule;
    private getPolygonSymbolizerItem;
    private getTextSymbolizer;
}
