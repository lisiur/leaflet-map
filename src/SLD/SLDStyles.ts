import * as convert from 'xml-js'
import {
  Ref,
  StylesConfig,
  IStyles,
  Styles,
  Rule,
  UserStyle,
  CssParameter,
  CssParameterItem,
  CssParameterItemName,
  XMLBaseDeclaration,
  StyledLayerDescriptorBaseAttributes,
  RangeColorRef,
  RangeColorRefs,
  RangeSizeRefs,
  RangeSizeRef,
  PropColorRefs,
  PropColorRef,
  PropSizeRefs,
  PropSizeRef,
  Filter,
  Transformation,
  FeatureTypeStyleItem,
  DEFAULT_STYLES_CONFIG,
  RANGE_TYPE,
} from './def'
import { isUndefined, isNothing } from '../utils'

const OTHERS_DEFAULT_PROP = '__others__=>'
const OTHERS_DEFAULT_PROP_TEXT = '其它'
const OTHERS_DEFAULT_COLOR = '#3388ff'
const OTHERS_DEFAULT_SIZE = 10

export abstract class SLDStyles implements IStyles {
  constructor(protected layerName: string, protected stylesCfg: StylesConfig) {
    this.stylesCfg = Object.assign({}, DEFAULT_STYLES_CONFIG, stylesCfg)
  }
  public toXMLStr(): string {
    return convert.js2xml(
      this.getSLDStyles(this.layerName, this.lowercaseProps(this.stylesCfg)),
      {
        compact: true,
        spaces: '\t',
        elementNameFn: (name) => {
          if (
            [
              'Filter',
              'And',
              'Or',
              'Not',
              'PropertyName',
              'Literal',
              'Function',
              'PropertyIsLike',
              'PropertyIsLessThan',
              'PropertyIsEqualTo',
              'PropertyIsNotEqualTo',
              'PropertyIsGreaterThan',
              'PropertyIsLessThanOrEqualTo',
              'PropertyIsGreaterThanOrEqualTo',
            ].includes(name)
          ) {
            return `ogc:${name}`
          } else if (['Heatmap'].includes(name)) {
            return `vec:${name}`
          } else {
            return name
          }
        },
      }
    )
  }
  public getStylesConfig() {
    return this.stylesCfg
  }
  public getLayers() {
    return this.layerName
  }
  public getRefs(): Ref[] {
    switch (this.stylesCfg.renderType) {
      case 'segmented': {
        return this.getSegmentedColorRefs()
      }
      case 'classified': {
        return this.getClassifiedColorRefs()
      }
      default: {
        return []
      }
    }
  }
  protected abstract getRule(stylesCfg: StylesConfig): Rule
  protected abstract getTransformation(
    stylesCfg: StylesConfig
  ): Transformation | null
  protected getUserStyles(stylesCfg: StylesConfig): UserStyle {
    const featureTypeStyleItem: FeatureTypeStyleItem = {}
    const transformation = this.getTransformation(stylesCfg)
    featureTypeStyleItem.Rule = this.getRule(stylesCfg)
    if (transformation) {
      featureTypeStyleItem.Transformation = transformation
    }
    return [
      {
        FeatureTypeStyle: [featureTypeStyleItem],
      },
    ]
  }

  protected getSLDStyles(layerName: string, stylesCfg: StylesConfig): Styles {
    return {
      _declaration: XMLBaseDeclaration,
      StyledLayerDescriptor: {
        _attributes: StyledLayerDescriptorBaseAttributes,
        NamedLayer: {
          Name: {
            _text: layerName,
          },
          UserStyle: this.getUserStyles(stylesCfg),
        },
      },
    }
  }

  protected getFillCssParameters(params: object): CssParameter {
    const slashKeys = ['fill', 'fill-opacity'] as CssParameterItemName[]
    return this.getCssParameterItems(slashKeys, params)
  }

  protected getFontCssParameters(stylesCfg: StylesConfig): CssParameter {
    const slashKeys = [
      'font-family',
      'font-size',
      'font-style',
      'font-weight',
    ] as CssParameterItemName[]
    return this.getCssParameterItems(slashKeys, stylesCfg)
  }

  protected getStrokeCssParameters(stylesCfg: StylesConfig): CssParameter {
    const slashKeys = [
      'stroke',
      'stroke-opacity',
      'stroke-width',
      'stroke-dasharray',
      'stroke-dashoffset',
      'stroke-linecap',
      'stroke-linejoin',
    ] as CssParameterItemName[]
    return this.getCssParameterItems(slashKeys, stylesCfg)
  }

  protected sldError(msg: string) {
    return new Error(`[sld] ${msg}`)
  }

  protected getRangeColorRefs(
    range: [number, number],
    colors: string[]
  ): RangeColorRefs {
    if (this.stylesCfg.segmentedRefs) {
      return this.stylesCfg.segmentedRefs
    }
    const minVal = range[0]
    const maxVal = range[1]
    const steps = colors.length
    const step = (maxVal - minVal) / steps
    return colors.map((color, index) => {
      return {
        range: [minVal + step * index, minVal + step * (index + 1)],
        color,
      } as RangeColorRef
    })
  }

  protected getRangeSizeRefs(
    range: [number, number],
    sizes: number[]
  ): RangeSizeRefs {
    const minVal = range[0]
    const maxVal = range[1]
    const steps = sizes.length
    const step = (maxVal - minVal) / steps
    return sizes.map((size, index) => {
      return {
        range: [minVal + step * index, minVal + step * (index + 1)],
        size,
      } as RangeSizeRef
    })
  }

  /**
   * 获取 prop-color 的 refs
   * @param props 属性值列表
   * @param colors 颜色列表
   */
  protected getPropColorRefs(props: string[], colors: string[]): PropColorRefs {
    const refs = props
      .slice(0, Math.min(props.length, colors.length))
      .map((prop, index) => {
        return {
          prop,
          color: colors[index],
        } as PropColorRef
      })
    if (props.length > colors.length) {
      refs.push({
        prop: this.stringifyOtherProps(props.slice(0, colors.length)),
        color: OTHERS_DEFAULT_COLOR,
      } as PropColorRef)
    }
    return refs
  }

  protected getPropSizeRefs(props: string[], sizes: number[]): PropSizeRefs {
    const refs = props
      .slice(0, Math.min(props.length, sizes.length))
      .map((prop, index) => {
        return {
          prop,
          size: sizes[index],
        } as PropSizeRef
      })
    if (props.length > sizes.length) {
      refs.push({
        prop: this.stringifyOtherProps(props.slice(0, sizes.length)),
        size: OTHERS_DEFAULT_SIZE,
      } as PropSizeRef)
    }
    return refs
  }

  /**
   * 获取以 range 划分的 filter
   * @param prop
   * @param range
   */
  protected getRangeFilter(
    prop: string,
    range: [number, number],
    rangeType = RANGE_TYPE['[)']
  ): Filter {
    const rangeMap: {
      [prop: string]: keyof Filter
    } = {
      '[': 'PropertyIsGreaterThanOrEqualTo',
      '(': 'PropertyIsGreaterThan',
      ']': 'PropertyIsLessThanOrEqualTo',
      ')': 'PropertyIsLessThan',
    }
    const [left, right] = rangeType
    return {
      And: {
        [rangeMap[left]]: {
          PropertyName: {
            _text: prop,
          },
          Literal: {
            _text: range[0],
          },
        },
        [rangeMap[right]]: {
          PropertyName: {
            _text: prop,
          },
          Literal: {
            _text: range[1],
          },
        },
      },
    }
  }

  /** 获取以 prop 划分的 filter */
  protected getTypeFilter(prop: string, value: any): Filter {
    if (this.isOtherPropRef(value)) {
      const props = this.parseOtherProps(value)
      return this.getTypeNotInFilter(prop, props)
    } else {
      return {
        PropertyIsEqualTo: {
          PropertyName: {
            _text: prop,
          },
          Literal: {
            _text: value,
          },
        },
      }
    }
  }

  /**
   * 将内部表示的其他属性名翻译为 OTHERS_DEFAULT_PROP_TEXT
   * @param item
   */
  protected translateOtherProp(item: { prop: string; [prop: string]: any }) {
    if (this.isOtherPropRef(item.prop)) {
      return {
        ...item,
        prop: OTHERS_DEFAULT_PROP_TEXT,
      }
    }
    return item
  }

  /**
   * 判断是否是描述其他属性的 prop
   * @param prop
   */
  protected isOtherPropRef(prop: string) {
    return prop.startsWith(OTHERS_DEFAULT_PROP)
  }

  /**
   * 获取分段渲染的 refs
   */
  private getSegmentedColorRefs(): Ref[] {
    if (this.stylesCfg.segmentedRefs) {
      return this.stylesCfg.segmentedRefs
    }
    if (isNothing(this.stylesCfg.rangeSize)) {
      return []
    }
    if (isNothing(this.stylesCfg.segmentedProp)) {
      return []
    }
    const sizeRange = this.stylesCfg.rangeSize[this.stylesCfg.segmentedProp]
    if (isNothing(sizeRange)) {
      return []
    }
    return this.getRangeColorRefs(sizeRange, this.stylesCfg.segmentedColors)
  }

  /**
   * 获取分类渲染的 refs
   */
  private getClassifiedColorRefs(): Ref[] {
    if (isNothing(this.stylesCfg.rangeProp)) {
      return []
    }
    if (isNothing(this.stylesCfg.classifiedProp)) {
      return []
    }
    const propRange = this.stylesCfg.rangeProp[this.stylesCfg.classifiedProp]
    if (isNothing(propRange)) {
      return []
    }
    const refs = this.getPropColorRefs(
      propRange,
      this.stylesCfg.classifiedColors
    )
    return refs.map((item) => this.translateOtherProp(item))
  }

  /**
   * 获取不属于 propValues 的 filter 描述
   * @param propName
   * @param propValues all **not** other props
   */
  private getTypeNotInFilter(propName: string, propValues: any[]): Filter {
    return {
      And: {
        PropertyIsNotEqualTo: propValues.map((value) => ({
          PropertyName: {
            _text: propName,
          },
          Literal: {
            _text: value,
          },
        })),
      },
    }
  }

  /**
   * 将所有非其他 prop 序列化为表示其他字段的 prop
   * @param props all **not** other props
   */
  private stringifyOtherProps(props: string[]) {
    return `${OTHERS_DEFAULT_PROP}${JSON.stringify(props)}`
  }

  /**
   * get all **not** other props
   * @description other prop 是由 OTHERS_DEFAULT_PROP + 所有非 other prop 组合成的字符串所表示
   */
  private parseOtherProps(prop: string): string[] {
    if (this.isOtherPropRef(prop)) {
      return JSON.parse(prop.slice(OTHERS_DEFAULT_PROP.length)) as string[]
    } else {
      return []
    }
  }

  /** get valuable config */
  private getCssParameterItems(
    keys: CssParameterItemName[],
    params: any
  ): CssParameter {
    return keys
      .map(this.slash2Camel) // transform to camel style key
      .map((key, index) => [keys[index], params[key]]) // transform to [slash style key, value]
      .filter(([_, val]) => !isUndefined(val)) // remove undefined value pair
      .map(([key, val]) => this.getCssParameterItem(key, val))
  }

  /** get specified key/value CssParameterItem */
  private getCssParameterItem(
    key: CssParameterItemName,
    value: any
  ): CssParameterItem {
    return {
      _attributes: {
        name: key,
      },
      _text: value,
    }
  }

  /** transform slash var to camel style */
  private slash2Camel(v: string): string {
    const vItems: string[] = []
    for (let i = 0; i < v.length; i++) {
      if (v[i] === '-') {
        i += 1
        if (i < v.length) {
          vItems.push(v[i].toUpperCase())
        }
      } else {
        vItems.push(v[i])
      }
    }
    return vItems.join('')
  }

  private lowercaseProps<T>(stylesCfg: any): T {
    const temp = JSON.parse(JSON.stringify(stylesCfg))
    const props = [
      'popupProp',
      'classifiedProp',
      'segmentedProp',
      'bubbleSizeProp',
      'bubbleColorProp',
    ]
    props.forEach((prop) => {
      if (temp[prop]) {
        temp[prop] = temp[prop].toLowerCase()
      }
    })
    return temp
  }
}
