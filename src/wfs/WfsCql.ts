import * as convert from 'xml-js'
import {
  WfsCqlOptions,
  QueryConditions,
  QueryConditionItem,
  QUERY_CONDITION_TYPE,
} from './def'

import { WFSQuery, Query, FilterItem, FunctionItem, DWITHIN } from '../SLD/def'

export default class WfsCql {
  public static QUERY_CONDITION_TYPE = QUERY_CONDITION_TYPE
  private workspace: string
  private layerName: string
  private conditions: QueryConditions
  private layers: string

  constructor(options: WfsCqlOptions) {
    this.workspace = options.workspace
    this.layerName = options.layerName
    this.conditions = options.conditions
    this.layers = `${this.workspace}:${this.layerName}`
  }

  public toXMLStr(): string {
    return convert.js2xml(this.getCQLJson(), {
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
            'PropertyIsBetween',
            'PropertyIsGreaterThan',
            'PropertyIsLessThanOrEqualTo',
            'PropertyIsGreaterThanOrEqualTo',
          ].includes(name)
        ) {
          return `ogc:${name}`
        } else if (['Query', 'GetFeature'].includes(name)) {
          return `wfs:${name}`
        } else if (
          [
            'Filter',
            'INTERSECTS',
            'PropertyName',
            'Function',
            'Literal',
          ].includes(name)
        ) {
          return `ogc:${name}`
        } else if (['Point', 'LineString', 'Polygon'].includes(name)) {
          return `gml:${name}`
        } else {
          return name
        }
      },
    })
  }

  protected getCQLJson(): WFSQuery {
    return {
      GetFeature: {
        _attributes: {
          'xmlns:ogc': 'http://www.opengis.net/ogc',
          'xmlns:sf': 'http://www.openplans.org/spearfish',
          'xmlns:wfs': 'http://www.opengis.net/wfs',
          service: 'WFS',
          version: '1.0.0',
        },
        Query: this.getQuery(),
      },
    }
  }

  private getQuery(): Query {
    return {
      _attributes: {
        typeName: this.layers,
      },
      Filter: {
        Or: {
          And: this.conditions.map(this.jsonifyCondition.bind(this)),
        },
      },
    }
  }

  private jsonifyCondition(condition: QueryConditionItem): FilterItem {
    switch (condition.type) {
      case QUERY_CONDITION_TYPE.CROSS_LAYER_QUERY: {
        return {
          INTERSECTS: {
            PropertyName: {
              _text: 'geometry',
            },
            Function: {
              _attributes: {
                name: 'collectGeometries',
              },
              Function: this.consFunction(
                'queryCollection',
                condition.layerName,
                'geometry',
                condition.rangeString
              ),
            },
          },
        }
      }
      case QUERY_CONDITION_TYPE.ATTR_QUERY: {
        return this.consAttrQuery(condition)
      }
      case QUERY_CONDITION_TYPE.BUFFER_QUERY: {
        return {
          DWITHIN: {
            PropertyName: {
              _text: 'geometry',
            },
            [condition.bufferType]: this.consBaseGeometry(condition.wkt),
            Distance: {
              _attributes: {
                units: 'meter',
              },
              _text: condition.radius,
            },
          },
        }
      }
      case QUERY_CONDITION_TYPE.POLYGON_QUERY: {
        return {
          DWITHIN: {
            PropertyName: {
              _text: 'geometry',
            },
            Polygon: this.consBaseGeometry(condition.wkt),
            Distance: {
              _attributes: {
                units: 'meter',
              },
              _text: 0,
            },
          },
        }
      }
    }
  }

  private consBaseGeometry(wkt: string): DWITHIN['Point'] {
    return {
      _attributes: {
        srsName: 'EPSG:4326',
      },
      coordinates: {
        _text: wkt,
      },
    }
  }

  private consFunction(
    funcName: FunctionItem['_attributes']['name'],
    ...funcArgs: any[]
  ): FunctionItem {
    return {
      _attributes: {
        name: funcName,
      },
      Literal: funcArgs.map((arg) => ({
        _text: arg,
      })),
    }
  }

  private consAttrQuery(condition: QueryConditionItem): FilterItem {
    if (condition.type !== QUERY_CONDITION_TYPE.ATTR_QUERY) {
      return {}
    }
    if (condition.operation === 'between') {
      return {
        PropertyIsBetween: {
          PropertyName: {
            _text: condition.property,
          },
          LowerBoundary: {
            Literal: {
              _text: condition.values[0],
            },
          },
          UpperBoundary: {
            Literal: {
              _text: condition.values[1],
            },
          },
        },
      }
    }
    if (condition.operation === 'in') {
      return {
        And: {
          PropertyIsEqualTo: condition.values.map((value) => ({
            PropertyName: {
              _text: condition.property,
            },
            Literal: {
              _text: value,
            },
          })),
        },
      }
    }
  }
}
