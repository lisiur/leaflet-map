import { SLDStyles } from './SLDStyles'
import {
  StylesConfig,
  Rule,
  LineSymbolizerItem,
  RuleItem,
  Transformation,
  RANGE_TYPE,
} from './def'
import { isNothing } from '../utils'

export type LineStylesConfig = StylesConfig
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
      case 'rank': {
        return this.getRankRenderRule(stylesCfg)
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
            strokeOpacity: stylesCfg.strokeOpacity,
            strokeDasharray: stylesCfg.strokeDasharray,
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
      (ref, index, { length }) => {
        return {
          Filter: this.getRangeFilter(
            stylesCfg.segmentedProp,
            ref.range,
            index === length - 1 ? RANGE_TYPE['[]'] : RANGE_TYPE['[)']
          ),
          LineSymbolizer: [
            this.getLineSymbolizerItem({
              stroke: ref.color,
              strokeWidth: stylesCfg.strokeWidth,
              strokeOpacity: stylesCfg.strokeOpacity,
              strokeDasharray: stylesCfg.strokeDasharray,
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
              strokeOpacity: stylesCfg.strokeOpacity,
              strokeDasharray: stylesCfg.strokeDasharray,
            }),
          ],
        } as RuleItem
      }
    )
  }

  private getRankRenderRule(stylesCfg: LineStylesConfig): Rule {
    if (isNothing(stylesCfg.rankProp)) {
      throw this.sldError(
        `invalid PointStylesConfig.rankProp: ${stylesCfg.rankProp}`
      )
    }
    if (isNothing(stylesCfg.rankColors)) {
      throw this.sldError(
        `invalid PointStylesConfig.rankColors: ${stylesCfg.rankColors}`
      )
    }
    if (isNothing(stylesCfg.rankPropRange)) {
      throw this.sldError(
        `invalid PointStylesConfig.rankPropRange: ${stylesCfg.rankPropRange}`
      )
    }
    return this.getPropColorRefs(
      stylesCfg.rankPropRange,
      stylesCfg.rankColors
    ).map((ref) => {
      return {
        Filter: this.getTypeFilter(stylesCfg.rankProp, ref.prop),
        LineSymbolizer: [
          this.getLineSymbolizerItem({
            stroke: ref.color,
            strokeWidth: stylesCfg.strokeWidth,
            strokeOpacity: stylesCfg.strokeOpacity,
            strokeDasharray: stylesCfg.strokeDasharray,
          }),
        ],
      } as RuleItem
    })
  }

  private getLineSymbolizerItem(options: {
    stroke: string
    strokeDasharray: string
    strokeOpacity: number
    strokeWidth: number
  }): LineSymbolizerItem {
    let strokeCssParamter = this.getStrokeCssParameters({
      stroke: options.stroke,
      strokeWidth: options.strokeWidth,
      strokeOpacity: options.strokeOpacity,
    })
    if (options.strokeDasharray && options.strokeDasharray !== '0') {
      strokeCssParamter = this.getStrokeCssParameters({
        stroke: options.stroke,
        strokeWidth: options.strokeWidth,
        strokeOpacity: options.strokeOpacity,
        strokeDasharray: options.strokeDasharray,
      })
    }
    return {
      Stroke: {
        CssParameter: strokeCssParamter
      },
    }
  }
}
