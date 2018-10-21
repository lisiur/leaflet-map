// @ts-ignore
import leafletMap from '../../../leaflet-layer'

// @ts-ignore
const L = window.L

var position = new L.LatLng(32.0304, 118.7968)
var map = L.map('map').setView(position, 13)

L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)

// L.marker([32.0304, 118.7968], {
//   icon: L.divIcon({
//     html: '<i class="iconfont" style="font-size: 40px;">&#xe655;</i>',
//     iconSize: [40, 40],
//     className: 'test',
//   }),
// }).addTo(map)
// L.marker([32.0304, 118.7968]).addTo(map)
var dataList = [
  {
    geometry: {
      type: 'Point',
      coordinates: [32.0304, 118.7968],
    },
    price: 1,
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [32.0404, 118.7968],
    },
    price: 2,
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [32.0404, 118.7868],
    },
    price: 3,
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [32.0304, 118.7868],
    },
    price: 4,
  },
]

const layer = new leafletMap.MarkersBufferLayer(
  map,
  dataList,
  {
    renderType: 'point',
    renderPointColorType: 'segmented',
    iconType: 'unicode',

    // iconImageUrl: 'img/marker.png',
    iconSize: [20, 20],
    iconUnicode: '&#xe655;',
    iconAnchor: [10, 10],
    iconColor: 'red',
    iconClass: 'iconfont',

    /** popup 展示字段 */
    popupAttr: 'price',
    /** tooltip 展示字段 */
    tooltipAttr: 'price',

    /** 分段渲染统计字段 */
    segmentedAttr: 'price',
    segmentedColors: ['red', 'green', 'blue', 'pink'],

    heatOptions: {},
    // iconRenderer(data, params) {
    //   return `<i style="font-size: 20px; color: red;">X</i>`
    // },
  },
  function(eventName) {
    console.log(eventName)
  }
)

layer.draw()
window.layer = layer
