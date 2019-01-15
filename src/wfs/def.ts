export type QueryConditions = QueryConditionItem[]

export type QueryConditionItem =
  | {
      type: QUERY_CONDITION_TYPE.CROSS_LAYER_QUERY
      layerName?: string
      rangeString?: 'INCLUDE' | string
    }
  | {
      type: QUERY_CONDITION_TYPE.ATTR_QUERY
      property: string
      operation?: 'in'
      values?: any[]
    }
  | {
      type: QUERY_CONDITION_TYPE.ATTR_QUERY
      property: string
      operation?: 'between'
      values?: [number, number]
    }
  | {
      type: QUERY_CONDITION_TYPE.BUFFER_QUERY
      wkt?: string
      bufferType?: 'Point' | 'LineString'
      radius?: number
    }
  | {
      type: QUERY_CONDITION_TYPE.POLYGON_QUERY
      wkt?: string
    }

export enum QUERY_CONDITION_TYPE {
  CROSS_LAYER_QUERY,
  ATTR_QUERY,
  BUFFER_QUERY,
  POLYGON_QUERY,
}

export interface WfsCqlOptions {
  workspace: string
  layerName: string
  conditions: QueryConditions
}
