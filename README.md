# MarkersLayer
## Options
### MarkerLayerOptions
| 参数名               | 说明              | 类型                              |
| -------------------- | ----------------- | --------------------------------- |
| renderType           | 渲染类型          | string ('point','heat','cluster') |
| renderPointColorType | 渲染颜色样式      | string ('single','segmented')     |
| iconType             | 散点图标类型      | string ('unicode')                |
| iconSize             | 图标大小          | [number, number]                  |
| iconClass            | 图标 class        | string                            |
| iconUnicode          | 图标 unicode      | string                            |
| iconColor            | 图标颜色          | string                            |
| iconColor            | 图标颜色          | string                            |
| iconAnchor           | 图标 anchor       | [number, number]                  |
| bubbleColorAttr      | bubble 分色字段   | string                            |
| bubbleSizeAttr       | bubble 大小字段   | string                            |
| bubbleStrokeWidth    | bubble 边框宽度   | number                            |
| bubbleStrokeColor    | bubble 边框颜色   | string                            |
| bubbleSizes          | bubble 大小区间   | number[]                          |
| bubbleColors         | bubble 颜色区间   | string[]                          |
| bubbleStrokeOpacity  | bubble 边框透明度 | number                            |
| bubbleFillOpacity    | bubble 填充透明度 | number                            |
| popupAttr            | popup 显示字段    | string                            |
| tooltipAttr          | tooltip 显示字段  | string                            |
| segmentedAttr        | 分段渲染统计字段  | string                            |
| segmentedColors      | 分段渲染颜色区间  | string[]                          |
| heatOptions          | 热力图 options    | MarkersHeatLayerOptions           |
| clusterOptions       | 聚合 options      | MarkersClusterOptions             |

## Methods
| 方法名                 | 说明                   | 类型                                                  |
| ---------------------- | ---------------------- | ----------------------------------------------------- |
| draw                   | 画图层                 | (options?: MarkersLayerOptions) => MarkersLayer       |
| redraw                 | 重新画图层             | () => MarkersLayer                                    |
| setData                | 设置数据               | (data: DataListItem) => void                          |
| getOptions             | 获取当前 options       | () => MarkersLayerOptions                             |
| fitBounds              | fit bounds             | () => void                                            |
| getBounds              | get bounds             | ()=> L.LatLngBoundsExpression                         |
| destroy                | 销毁图层               | () => void                                            |
| toggleVisible          | toggle visible         | (visible: boolean) => void                            |
| pitch                  | 选择并聚焦             | (id => string) => void                                |
| getClassifiedColorRefs | 获取分类渲染颜色参照   | () => { attr: string, color: string, nums: number }[] |
| getBubbledColorRefs    | 获取气泡图渲染颜色参照 | () => { attr: string, color: string, nums: number }[] |
| getBubbledSizeRefs     | 获取气泡图渲染大小参照 | () => { size: number, range: [number, number]}[]      |

### MarkersBufferLayerOptions extends MarkerLayerOptions
| 参数名            | 说明                      | 类型                  |
| ----------------- | ------------------------- | --------------------- |
| bufferTooltipAttr | 缓冲点的 tooltip 展示字段 | string                |
| bufferOptions     | 缓冲点的配置选项          | L.CircleMarkerOptions |

### MarkersHeatLayerOptions
| 参数名        | 说明               | 类型   |
| ------------- | ------------------ | ------ |
| max           | 最大值             | number |
| radius        | 半径               | number |
| dimensionAttr | 热力图权重统计字段 | string |


### MarkersClusterOptions
| 参数名 | 说明  | 类型 |
| ------ | :---: | ---: |
|        |       |      |

# PolylinesLayer
## Options
### PolylineLayerOptions
| 参数名                  | 说明             | 类型                          |
| ----------------------- | ---------------- | ----------------------------- |
| renderPolylineColorType | 渲染颜色样式     | string ('single','segmented') |
| popupAttr               | popup 显示字段   | string                        |
| tooltipAttr             | tooltip 显示字段 | string                        |
| segmentedAttr           | 分段渲染统计字段 | string                        |
| segmentedColors         | 分段渲染颜色区间 | string[]                      |

# PolygonsLayer
## Options
### PolygonLayerOptions
| 参数名                 | 说明             | 类型                          |
| ---------------------- | ---------------- | ----------------------------- |
| renderPolygonColorType | 渲染颜色样式     | string ('single','segmented') |
| popupAttr              | popup 显示字段   | string                        |
| tooltipAttr            | tooltip 显示字段 | string                        |
| segmentedAttr          | 分段渲染统计字段 | string                        |
| segmentedColors        | 分段渲染颜色区间 | string[]                      |
