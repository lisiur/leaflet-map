import * as convert from 'xml-js'
import {
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
} from './def'
import { isUndefined } from '../utils'

export abstract class SLDStyles implements IStyles {
  constructor(protected layerName: string, protected stylesCfg: StylesConfig) {}
  public toXMLStr(): string {
    return convert.js2xml(this.getSLDStyles(this.layerName, this.stylesCfg), {
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
            'PropertyIsLessThan',
            'PropertyIsEqualTo',
            'PropertyIsNotEqualTo',
            'PropertyIsGreaterThan',
            'PropertyIsLessThanOrEqualTo',
            'PropertyIsGreaterThanOrEqualTo',
          ].includes(name)
        ) {
          return `ogc:${name}`
        } else {
          return name
        }
      },
    })
  }
  public getStylesConfig() {
    return this.stylesCfg
  }
  public getLayerName() {
    return this.layerName
  }
  protected abstract getRule(stylesCfg: StylesConfig): Rule
  protected getUserStyles(stylesCfg: StylesConfig): UserStyle {
    return [
      {
        FeatureTypeStyle: [
          {
            Rule: this.getRule(stylesCfg),
          },
        ],
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

  protected getFillCssParameters(stylesCfg: StylesConfig): CssParameter {
    const slashKeys = ['fill', 'fill-opacity'] as CssParameterItemName[]
    return this.getCssParameterItems(slashKeys, stylesCfg)
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
    const slashKeys = ['stroke', 'stroke-opacity'] as CssParameterItemName[]
    return this.getCssParameterItems(slashKeys, stylesCfg)
  }

  protected sldError(msg: string) {
    return new Error(`[sld] ${msg}`)
  }

  protected getRangeColorRefs(
    range: [number, number],
    colors: string[]
  ): RangeColorRefs {
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

  protected getPropColorRefs(props: string[], colors: string[]): PropColorRefs {
    return props
      .slice(0, Math.min(props.length, colors.length))
      .map((prop, index) => {
        return {
          prop,
          color: colors[index],
        } as PropColorRef
      })
  }

  protected getPropSizeRefs(props: string[], sizes: number[]): PropSizeRefs {
    return props
      .slice(0, Math.min(props.length, sizes.length))
      .map((prop, index) => {
        return {
          prop,
          size: sizes[index],
        } as PropSizeRef
      })
  }

  protected getRangeFilter(prop: string, range: [number, number]): Filter {
    return {
      And: {
        PropertyIsGreaterThanOrEqualTo: {
          PropertyName: {
            _text: prop,
          },
          Literal: {
            _text: range[0],
          },
        },
        PropertyIsLessThan: {
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

  protected getTypeFilter(prop: string, value: any): Filter {
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

  protected getTypeNotInFilter(prop: string, values: any[]): Filter {
    return {
      And: {
        PropertyIsNotEqualTo: values.map((value) => ({
          PropertyName: {
            _text: prop,
          },
          Literal: {
            _text: value,
          },
        })),
      },
    }
  }

  /** get valuable config */
  private getCssParameterItems(
    keys: CssParameterItemName[],
    stylesCfg: StylesConfig
  ) {
    // ): CssParameterItem[] {
    return keys
      .map(this.slash2Camel) // transform to camel style key
      .map(
        (key, index) =>
          [keys[index], stylesCfg[key as keyof StylesConfig]] as [
            CssParameterItemName,
            number
          ]
      ) // transform to [slash style key, value]
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
    return vItems.join()
  }
}
