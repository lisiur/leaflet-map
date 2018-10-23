# MarkerLayerOptions
| 参数名               | 说明             | 类型                              |
| -------------------- | ---------------- | --------------------------------- |
| renderType           | 渲染类型         | string ('point','heat','cluster') |
| renderPointColorType | 渲染颜色样式     | string ('single','segmented')     |
| iconType             | 散点图标类型     | string ('unicode')                |
| iconSize             | 图标大小         | [number, number]                  |
| iconClass            | 图标 class       | string                            |
| iconUnicode          | 图标 unicode     | string                            |
| iconColor            | 图标颜色         | string                            |
| iconColor            | 图标颜色         | string                            |
| iconAnchor           | 图标 anchor      | [number, number]                  |
| popupAttr            | popup 显示字段   | string                            |
| tooltipAttr          | tooltip 显示字段 | string                            |
| segmentedAttr        | 分段渲染统计字段 | string                            |
| segmentedColors      | 分段渲染颜色区间 | string[]                          |
| heatOptions          | 热力图 options   | MarkersHeatLayerOptions           |
| clusterOptions       | 聚合 options     | MarkersClusterOptions             |

# MarkersBufferLayerOptions extends MarkerLayerOptions
| 参数名               | 说明             | 类型                              |
| -------------------- | ---------------- | --------------------------------- |


# MarkersHeatLayerOptions
| 参数名        | 说明               | 类型   |
| ------------- | ------------------ | ------ |
| max           | 最大值             | number |
| radius        | 半径               | number |
| dimensionAttr | 热力图权重统计字段 | string |


# MarkersClusterOptions
| 参数名 | 说明  | 类型 |
| ------ | :---: | ---: |
|        |       |      |

# PolylineLayerOptions
| 参数名                 | 说明             | 类型                          |
| ---------------------- | ---------------- | ----------------------------- |
| renderPolygonColorType | 渲染颜色样式     | string ('single','segmented') |
| popupAttr              | popup 显示字段   | string                        |
| tooltipAttr            | tooltip 显示字段 | string                        |
| segmentedAttr          | 分段渲染统计字段 | string                        |
| segmentedColors        | 分段渲染颜色区间 | string[]                      |

# PolygonLayerOptions
| 参数名                 | 说明             | 类型                          |
| ---------------------- | -------------- | ---------------------------- |
| renderPolygonColorType | 渲染颜色样式     | string ('single','segmented') |
| popupAttr              | popup 显示字段   | string                        |
| tooltipAttr            | tooltip 显示字段 | string                        |
| segmentedAttr          | 分段渲染统计字段 | string                        |
| segmentedColors        | 分段渲染颜色区间 | string[]                      |





