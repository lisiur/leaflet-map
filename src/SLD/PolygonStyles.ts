import { StylesConfig, RuleItem, PolygonSymbolizerItem, Rule } from './def'
import { SLDStyles } from './SLDStyles'
import { isNothing } from '../utils'

export interface PolygonStylesConfig extends StylesConfig {
  renderType: 'single' | 'segmented' | 'classified'
}

export default class PolygonStyles extends SLDStyles {
  constructor(
    protected layerName: string,
    protected stylesCfg: PolygonStylesConfig
  ) {
    super(layerName, stylesCfg)
  }
  protected getRule(stylesCfg: PolygonStylesConfig): RuleItem[] {
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
  private getSingleRenderRule(stylesCfg: PolygonStylesConfig): Rule {
    return [
      {
        PolygonSymbolizer: [
          this.getPolygonSymbolizerItem(
            stylesCfg.stroke,
            stylesCfg.strokeWidth,
            stylesCfg.fill
          ),
        ],
      },
    ]
  }

  private getSegmentedRenderRule(stylesCfg: PolygonStylesConfig): Rule {
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
          PolygonSymbolizer: [
            this.getPolygonSymbolizerItem(
              ref.color,
              stylesCfg.strokeWidth,
              ref.color
            ),
          ],
        } as RuleItem
      }
    )
  }

  private getClassifiedRenderRule(stylesCfg: PolygonStylesConfig): Rule {
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
          PolygonSymbolizer: [
            this.getPolygonSymbolizerItem(
              ref.color,
              stylesCfg.strokeWidth,
              ref.color
            ),
          ],
        } as RuleItem
      }
    )
  }

  private getPolygonSymbolizerItem(
    stroke: string,
    strokeWidth: number,
    fill: string
  ): PolygonSymbolizerItem {
    return {
      Fill: {
        CssParameter: this.getFillCssParameters({
          fill,
        } as StylesConfig),
      },
      Stroke: {
        CssParameter: this.getStrokeCssParameters({
          stroke,
          strokeWidth,
        } as StylesConfig),
      },
    }
  }
}
