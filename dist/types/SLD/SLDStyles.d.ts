import { Ref, StylesConfig, IStyles, Styles, Rule, UserStyle, CssParameter, RangeColorRefs, RangeSizeRefs, PropColorRefs, PropSizeRefs, Filter, Transformation } from './def';
export declare abstract class SLDStyles implements IStyles {
    protected layerName: string;
    protected stylesCfg: StylesConfig;
    constructor(layerName: string, stylesCfg: StylesConfig);
    toXMLStr(): string;
    getStylesConfig(): StylesConfig;
    getLayers(): string;
    getRefs(): Ref[];
    protected abstract getRule(stylesCfg: StylesConfig): Rule;
    protected abstract getTransformation(stylesCfg: StylesConfig): Transformation | null;
    protected getUserStyles(stylesCfg: StylesConfig): UserStyle;
    protected getSLDStyles(layerName: string, stylesCfg: StylesConfig): Styles;
    protected getFillCssParameters(params: object): CssParameter;
    protected getFontCssParameters(stylesCfg: StylesConfig): CssParameter;
    protected getStrokeCssParameters(stylesCfg: StylesConfig): CssParameter;
    protected sldError(msg: string): Error;
    protected getRangeColorRefs(range: [number, number], colors: string[]): RangeColorRefs;
    protected getRangeSizeRefs(range: [number, number], sizes: number[]): RangeSizeRefs;
    protected getPropColorRefs(props: string[], colors: string[]): PropColorRefs;
    protected getPropSizeRefs(props: string[], sizes: number[]): PropSizeRefs;
    protected getRangeFilter(prop: string, range: [number, number]): Filter;
    protected getTypeFilter(prop: string, value: any): Filter;
    protected translateOtherProp(item: {
        prop: string;
        [prop: string]: any;
    }): {
        [prop: string]: any;
        prop: string;
    };
    protected isOtherPropRef(prop: string): boolean;
    private getSegmentedColorRefs;
    private getClassifiedColorRefs;
    private getTypeNotInFilter;
    private stringifyOtherProps;
    private parseOtherProps;
    /** get valuable config */
    private getCssParameterItems;
    /** get specified key/value CssParameterItem */
    private getCssParameterItem;
    /** transform slash var to camel style */
    private slash2Camel;
}