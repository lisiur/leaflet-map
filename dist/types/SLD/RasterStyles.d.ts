import { StylesConfig, Rule, Transformation, Functions, FunctionItem } from './def';
import { SLDStyles } from './SLDStyles';
export interface RasterStylesConfig extends StylesConfig {
    gradient?: ColorMap[];
    weightAttr?: string;
    radius?: number;
    pixelsPerCell?: number;
}
interface ColorMap {
    color: string;
    quantity: number;
    opacity?: number;
}
export default class RasterStyles extends SLDStyles {
    protected stylesCfg: RasterStylesConfig;
    constructor(layerName: string, stylesCfg: RasterStylesConfig);
    protected getRule(stylesCfg: RasterStylesConfig): Rule;
    protected getTransformation(stylesCfg: RasterStylesConfig): Transformation | null;
    protected getParameterFunction(key: string, value?: any, functions?: Functions): FunctionItem;
    protected getEnvFunction(key: string, value?: any): FunctionItem;
    private getRenderRule;
    private getRasterSymbolizerItem;
    private getColorMapEntryItem;
}
export {};
