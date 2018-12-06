import { SLDStyles } from './SLDStyles';
import { StylesConfig, Rule } from './def';
export interface LineStylesConfig extends StylesConfig {
    renderType: 'single' | 'segmented' | 'classified';
}
export default class LineStyles extends SLDStyles {
    protected layerName: string;
    protected stylesCfg: LineStylesConfig;
    constructor(layerName: string, stylesCfg: LineStylesConfig);
    protected getRule(stylesCfg: LineStylesConfig): Rule;
    private getSingleRenderRule;
    private getSegmentedRenderRule;
    private getClassifiedRenderRule;
    private getLineSymbolizerItem;
}
