import { StylesConfig, Rule } from './def';
import { SLDStyles } from './SLDStyles';
export interface RasterStylesConfig extends StylesConfig {
    gradient: Array<{
        color: string;
        percent: number;
    }>;
    opacity: number;
    dimensionProp: string;
}
export default class PointStyles extends SLDStyles {
    protected layerName: string;
    protected stylesCfg: RasterStylesConfig;
    constructor(layerName: string, stylesCfg: RasterStylesConfig);
    protected getRule(stylesCfg: RasterStylesConfig): Rule;
    private getRenderRule;
    private getRasterSymbolizerItem;
    private getColorMapEntryItem;
}
