import {
  StylesConfig,
  Rule,
  RasterSymbolizerItem,
  ColorMapEntryItem,
} from './def'
import { SLDStyles } from './SLDStyles'
import { isNothing } from '../utils'

export interface RasterStylesConfig extends StylesConfig {
  gradient: Array<{ color: string; percent: number }>
  opacity: number
  dimensionProp: string
}

interface ColorMap {
  color: string
  quantity: number
  opacity?: number
}

export default class PointStyles extends SLDStyles {
  constructor(
    protected layerName: string,
    protected stylesCfg: RasterStylesConfig
  ) {
    super(layerName, stylesCfg)
  }
  protected getRule(stylesCfg: RasterStylesConfig): Rule {
    return this.getRenderRule(stylesCfg)
  }

  private getRenderRule(stylesCfg: RasterStylesConfig): Rule {
    if (isNothing(stylesCfg.gradient)) {
      throw this.sldError(
        `invalid PointStylesConfig.gradient: ${stylesCfg.gradient}`
      )
    }
    const dimensionRange = stylesCfg.rangeSize[stylesCfg.dimensionProp]
    const [minVal, maxVal] = dimensionRange
    const gradient = stylesCfg.gradient
    const colorMaps = gradient.map((gra) => ({
      color: gra.color,
      quantity: gra.percent * (maxVal - minVal) + minVal,
    }))
    return [
      {
        RasterSymbolizer: this.getRasterSymbolizerItem(colorMaps),
      },
    ]
  }

  private getRasterSymbolizerItem(colorMaps: ColorMap[]): RasterSymbolizerItem {
    return {
      ColorMap: {
        ColorMapEntry: colorMaps.map(this.getColorMapEntryItem),
      },
    }
  }

  private getColorMapEntryItem(colorMap: ColorMap): ColorMapEntryItem {
    return {
      _attributes: {
        color: colorMap.color,
        quantity: colorMap.quantity,
      },
    }
  }
}
