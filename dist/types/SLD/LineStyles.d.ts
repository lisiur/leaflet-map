import { SLDStyles } from './SLDStyles';
import { StylesConfig, Rule, Transformation } from './def';
export declare type LineStylesConfig = StylesConfig;
export default class LineStyles extends SLDStyles {
    protected layerName: string;
    protected stylesCfg: LineStylesConfig;
    constructor(layerName: string, stylesCfg: LineStylesConfig);
    protected getRule(stylesCfg: LineStylesConfig): Rule;
    protected getTransformation(_: StylesConfig): Transformation | null;
    private getSingleRenderRule;
    private getSegmentedRenderRule;
    private getClassifiedRenderRule;
    private getRankRenderRule;
    private getLineSymbolizerItem;
}
