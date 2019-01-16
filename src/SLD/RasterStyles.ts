import {
  StylesConfig,
  Rule,
  RasterSymbolizerItem,
  ColorMapEntryItem,
  Transformation,
  Functions,
  FunctionItem,
} from './def'
import { SLDStyles } from './SLDStyles'
import { isNothing } from '../utils'

export interface RasterStylesConfig extends StylesConfig {
  gradient?: ColorMap[]
  weightAttr?: string
  radius?: number
  pixelsPerCell?: number
}

const DEFAULT_RASTER_STYLES_CONFIG: RasterStylesConfig = {
  gradient: [
    { color: '#FFFFFF', quantity: 0, opacity: 0 },
    { color: '#7F95E6', quantity: 0.1, opacity: 0.8 },
    { color: '#7DFC3F', quantity: 0.3, opacity: 0.8 },
    { color: '#F6FD01', quantity: 0.4, opacity: 0.8 },
    { color: '#EF8C07', quantity: 0.5, opacity: 0.8 },
    { color: '#FE0409', quantity: 1, opacity: 0.8 },
  ],
  radius: 20,
  pixelsPerCell: 1,
}

interface ColorMap {
  color: string
  quantity: number
  opacity?: number
}

export default class RasterStyles extends SLDStyles {
  protected stylesCfg: RasterStylesConfig
  constructor(layerName: string, stylesCfg: RasterStylesConfig) {
    super(layerName, stylesCfg)
    this.stylesCfg = Object.assign(
      {},
      DEFAULT_RASTER_STYLES_CONFIG,
      this.stylesCfg
    )
  }
  protected getRule(stylesCfg: RasterStylesConfig): Rule {
    return this.getRenderRule(stylesCfg)
  }
  protected getTransformation(
    stylesCfg: RasterStylesConfig
  ): Transformation | null {
    return {
      Function: [
        {
          _attributes: {
            name: 'vec:Heatmap',
          },
          Function: [
            this.getParameterFunction('data'),
            this.getParameterFunction('weightAttr', stylesCfg.weightAttr),
            this.getParameterFunction('radiusPixels', null, [
              this.getEnvFunction('radius', stylesCfg.radius),
            ]),
            this.getParameterFunction('pixelsPerCell', stylesCfg.pixelsPerCell),
            this.getParameterFunction('outputBBOX', null, [
              this.getEnvFunction('wms_bbox'),
            ]),
            this.getParameterFunction('outputWidth', null, [
              this.getEnvFunction('wms_width'),
            ]),
            this.getParameterFunction('outputHeight', null, [
              this.getEnvFunction('wms_height'),
            ]),
          ],
        },
      ],
    }
  }
  protected getParameterFunction(
    key: string,
    value?: any,
    functions?: Functions
  ): FunctionItem {
    const functionItem: FunctionItem = { _attributes: { name: 'parameter' } }
    functionItem.Literal = [
      {
        _text: key,
      },
    ]

    if (!isNothing(value)) {
      functionItem.Literal.push({
        _text: value,
      })
    }

    if (!isNothing(functions)) {
      functionItem.Function = functions
    }
    return functionItem
  }
  protected getEnvFunction(key: string, value?: any): FunctionItem {
    if (isNothing(value)) {
      return {
        _attributes: {
          name: 'env',
        },
        Literal: [
          {
            _text: key,
          },
        ],
      }
    } else {
      return {
        _attributes: {
          name: 'env',
        },
        Literal: [
          {
            _text: key,
          },
          {
            _text: value,
          },
        ],
      }
    }
  }
  private getRenderRule(stylesCfg: RasterStylesConfig): Rule {
    if (isNothing(stylesCfg.gradient)) {
      throw this.sldError(
        `invalid PointStylesConfig.gradient: ${stylesCfg.gradient}`
      )
    }
    const gradient = stylesCfg.gradient
    const colorMaps = gradient
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
      _attributes: colorMap,
    }
  }
}
