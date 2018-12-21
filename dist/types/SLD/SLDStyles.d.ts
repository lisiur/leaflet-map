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
    /**
     * 获取 prop-color 的 refs
     * @param props 属性值列表
     * @param colors 颜色列表
     */
    protected getPropColorRefs(props: string[], colors: string[]): PropColorRefs;
    protected getPropSizeRefs(props: string[], sizes: number[]): PropSizeRefs;
    /**
     * 获取以 range 划分的 filter
     * @param prop
     * @param range
     */
    protected getRangeFilter(prop: string, range: [number, number]): Filter;
    /** 获取以 prop 划分的 filter */
    protected getTypeFilter(prop: string, value: any): Filter;
    /**
     * 将内部表示的其他属性名翻译为 OTHERS_DEFAULT_PROP_TEXT
     * @param item
     */
    protected translateOtherProp(item: {
        prop: string;
        [prop: string]: any;
    }): {
        [prop: string]: any;
        prop: string;
    };
    /**
     * 判断是否是描述其他属性的 prop
     * @param prop
     */
    protected isOtherPropRef(prop: string): boolean;
    /**
     * 获取分段渲染的 refs
     */
    private getSegmentedColorRefs;
    /**
     * 获取分类渲染的 refs
     */
    private getClassifiedColorRefs;
    /**
     * 获取不属于 propValues 的 filter 描述
     * @param propName
     * @param propValues all **not** other props
     */
    private getTypeNotInFilter;
    /**
     * 将所有非其他 prop 序列化为表示其他字段的 prop
     * @param props all **not** other props
     */
    private stringifyOtherProps;
    /**
     * get all **not** other props
     * @description other prop 是由 OTHERS_DEFAULT_PROP + 所有非 other prop 组合成的字符串所表示
     */
    private parseOtherProps;
    /** get valuable config */
    private getCssParameterItems;
    /** get specified key/value CssParameterItem */
    private getCssParameterItem;
    /** transform slash var to camel style */
    private slash2Camel;
    private lowercaseProps;
}
