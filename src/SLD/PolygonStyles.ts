import {
  StylesConfig,
  RuleItem,
  PolygonSymbolizerItem,
  Rule,
  Transformation,
  TextSymbolizer,
} from './def'
import { isNothing } from '../utils'
import RasterStyles, { RasterStylesConfig } from './RasterStyles'

export type PolygonStylesConfig = RasterStylesConfig

export default class PolygonStyles extends RasterStyles {
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
  protected getTransformation(_: StylesConfig): Transformation | null {
    return null
  }
  private getSingleRenderRule(stylesCfg: PolygonStylesConfig): Rule {
    return [
      {
        PolygonSymbolizer: [
          this.getPolygonSymbolizerItem({
            stroke: stylesCfg.stroke,
            strokeWidth: stylesCfg.strokeWidth,
            fill: stylesCfg.fill,
            fillOpacity: stylesCfg.fillOpacity,
          }),
        ],
        TextSymbolizer: this.getTextSymbolizer(stylesCfg.popupProp),
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
            this.getPolygonSymbolizerItem({
              stroke: ref.color,
              strokeWidth: stylesCfg.strokeWidth,
              fill: ref.color,
              fillOpacity: stylesCfg.fillOpacity,
            }),
          ],
          TextSymbolizer: this.getTextSymbolizer(stylesCfg.popupProp),
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
            this.getPolygonSymbolizerItem({
              stroke: ref.color,
              strokeWidth: stylesCfg.strokeWidth,
              fill: ref.color,
              fillOpacity: stylesCfg.fillOpacity,
            }),
          ],
          TextSymbolizer: this.getTextSymbolizer(stylesCfg.popupProp),
        } as RuleItem
      }
    )
  }

  private getPolygonSymbolizerItem(options: {
    stroke: string
    strokeWidth: number
    fill: string
    fillOpacity: number
  }): PolygonSymbolizerItem {
    return {
      Fill: {
        CssParameter: this.getFillCssParameters({
          fill: options.fill,
          fillOpacity: options.fillOpacity || 1,
        } as StylesConfig),
      },
      Stroke: {
        CssParameter: this.getStrokeCssParameters({
          stroke: options.stroke,
          strokeWidth: options.strokeWidth,
        } as StylesConfig),
      },
    }
  }

  private getTextSymbolizer(displayProp: string): TextSymbolizer {
    return [
      {
        Label: {
          PropertyName: {
            _text: displayProp,
          },
        },
        Geometry: {
          Function: [
            {
              _attributes: {
                name: 'centroid',
              },
              PropertyName: {
                _text: 'geometry',
              },
            },
          ],
        },
        LabelPlacement: {
          PointPlacement: {
            AnchorPoint: {
              AnchorPointX: {
                _text: 0.5,
              },
              AnchorPointY: {
                _text: 0.5,
              },
            },
          },
        },
      },
    ]
  }
}