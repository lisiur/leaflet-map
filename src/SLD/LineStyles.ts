import { SLDStyles } from './SLDStyles'
import {
  StylesConfig,
  Rule,
  LineSymbolizerItem,
  RuleItem,
  Transformation,
} from './def'
import { isNothing } from '../utils'

export interface LineStylesConfig extends StylesConfig {
  renderType: 'single' | 'segmented' | 'classified'
}
export default class LineStyles extends SLDStyles {
  constructor(
    protected layerName: string,
    protected stylesCfg: LineStylesConfig
  ) {
    super(layerName, stylesCfg)
  }
  protected getRule(stylesCfg: LineStylesConfig): Rule {
    switch (stylesCfg.renderType) {
      case 'single': {
        return this.getSingleRenderRule(stylesCfg)
      }
      case 'segmented': {
        return this.getSegmentedRenderRule(stylesCfg)
      }
      case 'classified': {
        return this.getClassifiedRenderRule(stylesCfg)
      }
    }
  }
  protected getTransformation(_: StylesConfig): Transformation | null {
    return null
  }
  private getSingleRenderRule(stylesCfg: LineStylesConfig): Rule {
    return [
      {
        LineSymbolizer: [
          this.getLineSymbolizerItem({
            stroke: stylesCfg.stroke,
            strokeWidth: stylesCfg.strokeWidth,
          }),
        ],
      },
    ]
  }

  private getSegmentedRenderRule(stylesCfg: LineStylesConfig): Rule {
    if (isNothing(stylesCfg.rangeSize)) {
      throw this.sldError(
        `invalid PointStylesConfig.rangeSize: ${stylesCfg.rangeSize}`
      )
    }
    if (isNothing(stylesCfg.segmentedProp)) {
      throw this.sldError(
        `invalid PointStylesConfig.segmentedProp: ${stylesCfg.segmentedProp}`
      )
    }
    const sizeRange = stylesCfg.rangeSize[stylesCfg.segmentedProp]
    if (isNothing(sizeRange)) {
      throw this.sldError(
        `invalid PointStylesConfig.rangeSize[${
          stylesCfg.segmentedProp
        }]: ${sizeRange}`
      )
    }
    return this.getRangeColorRefs(sizeRange, stylesCfg.segmentedColors).map(
      (ref) => {
        return {
          Filter: this.getRangeFilter(stylesCfg.segmentedProp, ref.range),
          LineSymbolizer: [
            this.getLineSymbolizerItem({
              stroke: ref.color,
              strokeWidth: stylesCfg.strokeWidth,
            }),
          ],
        } as RuleItem
      }
    )
  }

  private getClassifiedRenderRule(stylesCfg: LineStylesConfig): Rule {
    if (isNothing(stylesCfg.rangeProp)) {
      throw this.sldError(
        `invalid PointStylesConfig.rangeProp: ${stylesCfg.rangeProp}`
      )
    }
    if (isNothing(stylesCfg.classifiedProp)) {
      throw this.sldError(
        `invalid PointStylesConfig.classifiedProp: ${stylesCfg.classifiedProp}`
      )
    }
    const propRange = stylesCfg.rangeProp[stylesCfg.classifiedProp]
    if (isNothing(propRange)) {
      throw this.sldError(
        `invalid PointStylesConfig.rangeProp[${
          stylesCfg.classifiedProp
        }]: ${propRange}`
      )
    }
    return this.getPropColorRefs(propRange, stylesCfg.classifiedColors).map(
      (ref) => {
        return {
          Filter: this.getTypeFilter(stylesCfg.classifiedProp, ref.prop),
          LineSymbolizer: [
            this.getLineSymbolizerItem({
              stroke: ref.color,
              strokeWidth: stylesCfg.strokeWidth,
            }),
          ],
        } as RuleItem
      }
    )
  }

  private getLineSymbolizerItem(options: {
    stroke: string
    strokeWidth: number
  }): LineSymbolizerItem {
    return {
      Stroke: {
        CssParameter: this.getStrokeCssParameters({
          stroke: options.stroke,
          strokeWidth: options.strokeWidth,
        } as StylesConfig),
      },
    }
  }
}
