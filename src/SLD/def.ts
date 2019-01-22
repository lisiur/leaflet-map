export interface StylesConfig {
  renderType?: 'single' | 'classified' | 'segmented' | 'rank' | 'top' | string
  stroke?: string
  strokeWidth?: number
  strokeDasharray?: string
  fill?: string
  fillOpacity?: number
  fontFamily?: string
  fontStyle?: string
  fontSize?: number
  fontWeight?: number
  popupProp?: string
  segmentedProp?: string
  segmentedColors?: string[]
  segmentedRefs?: RangeColorRefs
  classifiedProp?: string
  classifiedColors?: string[]
  rankProp?: string
  rankColors?: string[]
  rankPropRange?: string[]
  rangeSize?: {
    [prop: string]: [number, number]
  }
  rangeProp?: {
    [prop: string]: string[]
  }
}

const DEFAULT_COLOR = '#3388ff'
export const DEFAULT_STYLES_CONFIG: StylesConfig = {
  renderType: 'single',
  stroke: DEFAULT_COLOR,
  strokeWidth: 2,
  fill: DEFAULT_COLOR,
  fillOpacity: 0.8,
}

export enum RANGE_TYPE {
  '[)' = '[)',
  '[]' = '[]',
  '(]' = '(]',
  '()' = '()',
}

export interface Ref {
  size?: number
  prop?: string
  range?: [number, number]
  color?: string
}
export interface Styles {
  _declaration: {
    _attributes: {
      version: string
      encoding: string
    }
  }
  StyledLayerDescriptor: StyledLayerDescriptor
}

export interface IStyles {
  /** 获取描述 SLD 的 XML */
  toXMLStr(): string
  /** 获取 style 配置 */
  getStylesConfig(): StylesConfig
  /** 获取 layer name */
  getLayers(): string
}

export const XMLBaseDeclaration: Styles['_declaration'] = {
  _attributes: {
    version: '1.0',
    encoding: 'utf-8',
  },
}

export const StyledLayerDescriptorBaseAttributes: StyledLayerDescriptor['_attributes'] = {
  // tslint:disable-next-line:object-literal-key-quotes
  version: '1.0.0',
  'xsi:schemaLocation': 'http://www.opengis.net/sld StyledLayerDescriptor.xsd',
  // tslint:disable-next-line:object-literal-key-quotes
  xmlns: 'http://www.opengis.net/sld',
  'xmlns:ogc': 'http://www.opengis.net/ogc',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
}
export interface WFSQuery {
  GetFeature: GetFeature
}

export interface GetFeature {
  _attributes: {
    'xmlns:wfs': string
    'xmlns:sf': string
    'xmlns:ogc': string
    service: string
    version: string
  }
  Query: Query
}

export interface Query {
  _attributes: {
    typeName: string
  }
  Filter: Filter
}

export interface DWITHIN {
  PropertyName: Text
  Point?: BaseGeometry
  LineString?: BaseGeometry
  Polygon?: BaseGeometry
  Distance: {
    _attributes: {
      units: 'meter'
    }
    _text: number
  }
}

export interface BaseGeometry {
  _attributes: {
    srsName: string
  }
  coordinates: Text
}

export interface QueryFunction {
  PropertyName: Text
  Function: FunctionItem
}

export interface RuleItem {
  Name?: string
  Title?: string
  Filter?: Filter
  MinScaleDenominator?: any
  MaxScaleDenominator?: any
  PointSymbolizer?: PointSymbolizer
  LineSymbolizer?: LineSymbolizer
  PolygonSymbolizer?: PolygonSymbolizer
  TextSymbolizer?: TextSymbolizer
  RasterSymbolizer?: RasterSymbolizer
}

export type RangeColorRefs = RangeColorRef[]
export type RangeSizeRefs = RangeSizeRef[]
export type PropColorRefs = PropColorRef[]
export type PropSizeRefs = PropSizeRef[]

export interface RangeColorRef {
  range: [number, number]
  color: string
}
export interface RangeSizeRef {
  range: [number, number]
  size: number
}
export interface PropColorRef {
  prop: string
  color: string
}
export interface PropSizeRef {
  prop: string
  size: number
}

export type LineSymbolizer = LineSymbolizerItem[]

export interface LineSymbolizerItem {
  Geometry?: Geometry
  Stroke: Stroke
  PerpendicularOffset?: PerpendicularOffset
}

interface Geometry {
  Function: Functions
}

interface PerpendicularOffset {}

export type TextSymbolizer = TextSymbolizerItem[]

interface TextSymbolizerItem {
  Geometry?: Geometry
  Label?: Label
  Font?: Font
  LabelPlacement?: LabelPlacement
  Halo?: Halo
  Fill?: Fill
  Graphic?: Graphic
  Priority?: Priority
  VendorOption?: VendorOption
}

interface Priority {}

type VendorOption = VendorOptionItem[]

interface VendorOptionItem {}

interface Halo {
  Radius?: number
  Fill?: Fill
}

interface Font {
  CssParameter: Array<{
    _attributes: {
      name: 'font-family' | 'font-size' | 'font-style' | 'font-weight'
    }
    _text: any
  }>
}

export type RasterSymbolizer = RasterSymbolizerItem

export interface RasterSymbolizerItem {
  ColorMap: ColorMap
  Opacity?: number
  ContrastEnhancement?: ContrastEnhancement
}

interface ContrastEnhancement {
  Normalize?: any
  GammaValue?: Text
}

export interface ColorMap {
  ColorMapEntry: ColorMapEntry
}

export type ColorMapEntry = ColorMapEntryItem[]

export interface ColorMapEntryItem {
  _attributes: {
    color: string
    quantity: number
    opacity?: number
  }
}

export type Rule = RuleItem[]

interface StyledLayerDescriptor {
  _attributes: {
    version: string
    'xsi:schemaLocation': string
    xmlns: string
    'xmlns:ogc': string
    'xmlns:xlink': string
    'xmlns:xsi': string
  }
  NamedLayer?: NamedLayer
  UserLayer?: UserLayer
}

interface NamedLayer {
  Name: Text
  Description?: Text
  UserStyle?: UserStyle
  NamedStyle?: any
}

type UserLayer = UserLayerItem[]

interface UserLayerItem {
  Name: Text
  Description?: Text
  InlineFeature?: InlineFeature
}

interface InlineFeature {}

interface Text {
  _text: any
}

export type UserStyle = UserStyleItem[]

export interface UserStyleItem {
  Name?: Text
  Title?: Text
  Abstract?: Text
  IsDefault?: 1 | 0
  FeatureTypeStyle: FeatureTypeStyle
}

type FeatureTypeStyle = FeatureTypeStyleItem[]

export interface FeatureTypeStyleItem {
  Transformation?: Transformation
  Name?: Text
  Title?: Text
  Abstract?: Text
  FeatureTypeName?: Text
  Rule?: Rule
}

export interface Transformation {
  Function: Functions
}

export type Functions = FunctionItem[]
export interface FunctionItem {
  _attributes?: {
    name:
      | 'vec:Heatmap'
      | 'parameter'
      | 'env'
      | 'centroid'
      | 'labelPoint'
      | 'collectGeometries'
      | 'queryCollection'
      | 'vec:PointStacker'
  }
  PropertyName?: Text
  Function?: FunctionItem | Functions
  Literal?: Text | Text[]
}

export type Filter = FilterItem

export interface FilterItem {
  And?: FilterItem | FilterItem[]
  Or?: FilterItem | FilterItem[]
  Not?: Filter
  PropertyIsLike?: FilterProperty
  PropertyIsLessThan?: FilterProperty
  PropertyIsEqualTo?: FilterProperty
  PropertyIsNotEqualTo?: FilterProperty
  PropertyIsGreaterThan?: FilterProperty
  PropertyIsLessThanOrEqualTo?: FilterProperty
  PropertyIsGreaterThanOrEqualTo?: FilterProperty
  PropertyIsBetween?: FilterProperty
  INTERSECTS?: QueryFunction
  DWITHIN?: DWITHIN
}

type FilterProperty = FilterPropertyItem | FilterPropertyItem[]

interface FilterPropertyItem {
  Function?: {
    _attributes: {
      name: string
    }
    PropertyName: Text
  }
  PropertyName?: Text
  LowerBoundary?: {
    Literal: Text
  }
  UpperBoundary?: {
    Literal: Text
  }
  Literal?: Text
}

export type PolygonSymbolizer = PolygonSymbolizerItem[]
export interface PolygonSymbolizerItem {
  Geometry?: Geometry
  Fill?: Fill
  Stroke?: Stroke
}

export type PointSymbolizer = PointSymbolizerItem[]

export interface PointSymbolizerItem {
  Geometry?: Geometry
  Graphic: Graphic
}

interface Label {
  PropertyName: Text
}

interface LabelPlacement {
  PointPlacement?: PointPlacement
  LinePlacement?: LinePlacement
}

interface LinePlacement {
  PerpendicularOffset: PerpendicularOffset
}

interface PointPlacement {
  AnchorPoint?: AnchorPoint
  Displacement?: Displacement
  Rotation?: Rotation
}

interface AnchorPoint {
  AnchorPointX?: Text
  AnchorPointY?: Text
}

interface Displacement {
  DisplacementX?: Text
  DisplacementY?: Text
}

interface Graphic {
  ExternalGraphic?: ExternalGraphic
  Mark?: Mark
  Opacity?: number
  Size?: Size
  Rotation?: Rotation
}

interface ExternalGraphic {
  OnlineResource: OnlineResource
  Format: Format
}

interface OnlineResource {
  _attributes: {
    'xlink:type'?: 'simple'
    'xlink:href'?: string
  }
}

interface Format {
  _text: 'image/png' | 'image/jpeg' | 'image/gif' | 'image/svg'
}

interface Mark {
  WellKnownName: WellKnownName
  Fill?: Fill
  Stroke?: Stroke
}

interface WellKnownName {
  _text: WellKnownNameItem
}

export type WellKnownNameItem =
  | 'square'
  | 'triangle'
  | 'circle'
  | 'star'
  | 'cross'
  | 'x'

interface Fill {
  GraphicFill?: GraphicFill
  CssParameter?: CssParameter
}

export type CssParameter = CssParameterItem[]
export type CssParameterItemName =
  | 'stroke'
  | 'stroke-width'
  | 'stroke-opacity'
  | 'stroke-linejoin'
  | 'stroke-linecap'
  | 'stroke-dasharray'
  | 'stroke-dashoffset'
  | 'fill'
  | 'fill-opacity'
  | 'font-family'
  | 'font-style'
  | 'font-size'
  | 'font-weight'
export interface CssParameterItem {
  _attributes: {
    name: CssParameterItemName
  }
  _text: any
}

interface Stroke {
  GraphicFill?: GraphicFill
  GraphicStroke?: GraphicStroke
  CssParameter?: CssParameter
}

interface GraphicFill {}

interface GraphicStroke {}

interface Size {
  _text: number
}

interface Rotation {
  _text: number
}
