export interface StylesConfig {
    stroke: string;
    strokeWidth: number;
    fill: string;
    fillOpacity: number;
    fontFamily: string;
    fontStyle: string;
    fontSize: number;
    fontWeight: number;
    popupProp: {
        label: string;
        value: string;
    };
    segmentedProp: string;
    segmentedColors: string[];
    classifiedProp: string;
    classifiedColors: string[];
    rangeSize: {
        [prop: string]: [number, number];
    };
    rangeProp: {
        [prop: string]: string[];
    };
}
export interface Styles {
    _declaration: {
        _attributes: {
            version: string;
            encoding: string;
        };
    };
    StyledLayerDescriptor: StyledLayerDescriptor;
}
export interface IStyles {
    /** 获取描述 SLD 的 XML */
    toXMLStr(): string;
    /** 获取 style 配置 */
    getStylesConfig(): StylesConfig;
    /** 获取 layer name */
    getLayerName(): string;
}
export declare const XMLBaseDeclaration: Styles['_declaration'];
export declare const StyledLayerDescriptorBaseAttributes: StyledLayerDescriptor['_attributes'];
export interface RuleItem {
    Name?: string;
    Title?: string;
    Filter?: Filter;
    MinScaleDenominator?: any;
    MaxScaleDenominator?: any;
    PointSymbolizer?: PointSymbolizer;
    LineSymbolizer?: LineSymbolizer;
    PolygonSymbolizer?: PolygonSymbolizer;
    TextSymbolizer?: TextSymbolizer;
    RasterSymbolizer?: RasterSymbolizer;
}
export declare type RangeColorRefs = RangeColorRef[];
export declare type RangeSizeRefs = RangeSizeRef[];
export declare type PropColorRefs = PropColorRef[];
export declare type PropSizeRefs = PropSizeRef[];
export interface RangeColorRef {
    range: [number, number];
    color: string;
}
export interface RangeSizeRef {
    range: [number, number];
    size: number;
}
export interface PropColorRef {
    prop: string;
    color: string;
}
export interface PropSizeRef {
    prop: string;
    size: number;
}
export declare type LineSymbolizer = LineSymbolizerItem[];
export interface LineSymbolizerItem {
    Geometry?: Geometry;
    Stroke: Stroke;
    PerpendicularOffset?: PerpendicularOffset;
}
interface Geometry {
}
interface PerpendicularOffset {
}
declare type TextSymbolizer = TextSymbolizerItem[];
interface TextSymbolizerItem {
    Geometry?: Geometry;
    Label?: Label;
    Font?: Font;
    LabelPlacement?: LabelPlacement;
    Halo?: Halo;
    Fill?: Fill;
    Graphic?: Graphic;
    Priority?: Priority;
    VendorOption?: VendorOption;
}
interface Priority {
}
declare type VendorOption = VendorOptionItem[];
interface VendorOptionItem {
}
interface Halo {
    Radius?: number;
    Fill?: Fill;
}
interface Font {
    CssParameter: Array<{
        _attributes: {
            name: 'font-family' | 'font-size' | 'font-style' | 'font-weight';
        };
        _text: any;
    }>;
}
declare type RasterSymbolizer = RasterSymbolizerItem;
interface RasterSymbolizerItem {
}
export declare type Rule = RuleItem[];
interface StyledLayerDescriptor {
    _attributes: {
        version: string;
        'xsi:schemaLocation': string;
        xmlns: string;
        'xmlns:ogc': string;
        'xmlns:xlink': string;
        'xmlns:xsi': string;
    };
    NamedLayer?: NamedLayer;
    UserLayer?: UserLayer;
}
interface NamedLayer {
    Name: Text;
    Description?: Text;
    UserStyle?: UserStyle;
    NamedStyle?: any;
}
declare type UserLayer = UserLayerItem[];
interface UserLayerItem {
    Name: Text;
    Description?: Text;
    InlineFeature?: InlineFeature;
}
interface InlineFeature {
}
interface Text {
    _text: any;
}
export declare type UserStyle = UserStyleItem[];
export interface UserStyleItem {
    Name?: Text;
    Title?: Text;
    Abstract?: Text;
    IsDefault?: 1 | 0;
    FeatureTypeStyle: FeatureTypeStyle;
}
declare type FeatureTypeStyle = FeatureTypeStyleItem[];
interface FeatureTypeStyleItem {
    Name?: Text;
    Title?: Text;
    Abstract?: Text;
    FeatureTypeName?: Text;
    Rule: Rule;
}
export declare type Filter = FilterItem;
export interface FilterItem {
    And?: FilterItem | FilterItem[];
    Or?: Filter;
    Not?: Filter;
    PropertyIsLessThan?: FilterProperty;
    PropertyIsEqualTo?: FilterProperty;
    PropertyIsNotEqualTo?: FilterProperty;
    PropertyIsGreaterThan?: FilterProperty;
    PropertyIsLessThanOrEqualTo?: FilterProperty;
    PropertyIsGreaterThanOrEqualTo?: FilterProperty;
}
declare type FilterProperty = FilterPropertyItem | FilterPropertyItem[];
interface FilterPropertyItem {
    Function?: {
        _attributes: {
            name: string;
        };
        PropertyName: Text;
    };
    PropertyName?: Text;
    Literal?: Text;
}
export declare type PolygonSymbolizer = PolygonSymbolizerItem[];
export interface PolygonSymbolizerItem {
    Geometry?: Geometry;
    Fill?: Fill;
    Stroke?: Stroke;
}
export declare type PointSymbolizer = PointSymbolizerItem[];
export interface PointSymbolizerItem {
    Geometry?: Geometry;
    Graphic: Graphic;
}
interface Label {
    PropertyName: string;
}
interface LabelPlacement {
    PointPlacement?: PointPlacement;
    LinePlacement?: LinePlacement;
}
interface LinePlacement {
    PerpendicularOffset: PerpendicularOffset;
}
interface PointPlacement {
    AnchorPoint?: AnchorPoint;
    Displacement?: Displacement;
    Rotation?: Rotation;
}
interface AnchorPoint {
    AnchorPointX?: number;
    AnchorPointY?: number;
}
interface Displacement {
    DisplacementX?: number;
    DisplacementY?: number;
}
interface Graphic {
    ExternalGraphic?: ExternalGraphic;
    Mark?: Mark;
    Opacity?: number;
    Size?: Size;
    Rotation?: Rotation;
}
interface ExternalGraphic {
    OnlineResource: OnlineResource;
    Format: Format;
}
interface OnlineResource {
    _attributes: {
        'xlink:type'?: 'simple';
        'xlink:href'?: string;
    };
}
interface Format {
    _text: 'image/png' | 'image/jpeg' | 'image/gif' | 'image/svg';
}
interface Mark {
    WellKnownName: WellKnownName;
    Fill?: Fill;
    Stroke?: Stroke;
}
declare type WellKnownName = 'square' | 'triangle' | 'circle' | 'star' | 'cross' | 'x';
interface Fill {
    GraphicFill?: GraphicFill;
    CssParameter?: CssParameter;
}
export declare type CssParameter = CssParameterItem[];
export declare type CssParameterItemName = 'stroke' | 'stroke-width' | 'stroke-opacity' | 'stroke-linejoin' | 'stroke-linecap' | 'stroke-dasharray' | 'stroke-dashoffset' | 'fill' | 'fill-opacity' | 'font-family' | 'font-style' | 'font-size' | 'font-weight';
export interface CssParameterItem {
    _attributes: {
        name: CssParameterItemName;
    };
    _text: any;
}
interface Stroke {
    GraphicFill?: GraphicFill;
    GraphicStroke?: GraphicStroke;
    CssParameter?: CssParameter;
}
interface GraphicFill {
}
interface GraphicStroke {
}
interface Size {
    _text: number;
}
interface Rotation {
    _text: number;
}
export {};
