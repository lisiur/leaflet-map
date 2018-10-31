// @ts-ignore
import leafletMap from '../../../leaflet-layer'

// @ts-ignore
const L = window.L

function isPointInViewport(x, y) {
  return (
    x >= 0 &&
    y >= 0 &&
    x <= (window.innerWidth || document.documentElement.clientWidth) &&
    y <= (window.innerHeight || document.documentElement.clientHeight)
  )
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function calcOffset(x, y, w, h) {
  const BOTTOM_RIGHT = 0
  const BOTTOM_LEFT = 1
  const TOP_RIGHT = 2
  const TOP_LEFT = 3
  const bounds = [
    [x + w, y + h],
    [x - w, y + h],
    [x + w, y - h],
    [x - w, y - h],
  ]

  let i = 0
  for (; i < bounds.length; i++) {
    if (isPointInViewport(...bounds[i])) {
      break
    }
  }
  switch (i) {
    case BOTTOM_RIGHT:
      return [x, y]
    case BOTTOM_LEFT:
      return [x - w, y]
    case TOP_RIGHT:
      return [x, y - h]
    case TOP_LEFT:
      return [x - w, y - h]
    default:
      return [x, y]
  }
}

var position = new L.LatLng(39.90778, 116.401216)
var map = L.map('map').setView(position, 13)

L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)

// var dataList = [
//   {
//     geometry: {
//       type: 'Polygon',
//       coordinates: [
//         [
//           [116.401216, 39.90778],
//           [116.391216, 39.90778],
//           [116.391216, 39.91778],
//           [116.401216, 39.91778],
//         ],
//       ],
//     },
//     price: 109090909090,
//   },
// ]

// var layer = new leafletMap.GridsLayer(
//   map,
//   dataList,
//   { tooltipAttr: 'price', popupAttr: { label: 'p', value: 'price' } },
//   console.log
// )
// layer.toggleTooltip(true)
// layer.draw()

// var dataList = [
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.401216, 39.90778],
//     },
//     price: 0.1,
//     name: '5',
//   },
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.391216, 39.90778],
//     },
//     price: 0.1,
//     name: '2',
//   },
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.391216, 39.91778],
//     },
//     price: 0.1,
//     name: '1',
//   },
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.401216, 39.91778],
//     },
//     price: 100,
//     name: '2',
//   },
// ]

// var layer = new leafletMap.MarkersLayer(
//   map,
//   dataList,
//   {
//     renderType: 'heat',
//     heatOptions: {
//       dimensionAttr: 'price',
//       radius: 30,
//       minOpacity: 0.7,
//       blur: 60,
//       // max: 1,
//     },
//   },
//   console.log
// )
// layer.draw()

var dataList = [
  {
    geometry: {
      type: 'Point',
      coordinates: [116.401216, 39.90778],
    },
    price: 1,
    class: 'a'
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [116.391216, 39.90778],
    },
    price: 5,
    class: 'b'
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [116.381216, 39.90778],
    },
    price: 10,
    class: 'b'
  },
]

var layer = new leafletMap.MarkersLayer(
  map,
  dataList,
  {
    renderType: 'bubble',
    // iconUnicode: '&#xe655;',
    // tooltip: false,
    popup: false,
    tooltipAttr: 'price',
    popupAttr: {label: '价格', value: 'price'},
    bubbleColorAttr: 'class',
    bubbleSizeAttr: 'price',
    bubbleColors: ['red', 'green', 'blue'],
    bubbleSizes: [10, 20, 30],
    bubbleStrokeWidth: 10,
    // bubbleStrokeColor: 'black',

  },
  function(eventName) {
    // const w = 100
    // const h = 200
    // const { x, y } = event.containerPoint
    // calcOffset(x, y, w, h)
  }
)
layer.draw()
console.log(layer.getBubbledColorRefs())

// var dataList = [
//   [
//     {
//       geometry: {
//         type: 'Point',
//         coordinates: [116.401216, 39.90778],
//       },
//       price: 1,
//     },
//   ],
//   [
//     {
//       geometry: {
//         type: 'Point',
//         coordinates: [116.391216, 39.90778],
//       },
//       price: 1,
//     },
//   ],
//   [
//     {
//       geometry: {
//         type: 'Point',
//         coordinates: [116.391216, 39.91778],
//       },
//       price: 1,
//     },
//   ],
//   [
//     {
//       geometry: {
//         type: 'Point',
//         coordinates: [116.401216, 39.91778],
//       },
//       price: 1,
//     },
//   ],
// ]
// const layer = new leafletMap.DynamicHeatLayer(
//   map,
//   dataList,
//   { loop: true, auto: true },
//   console.log
// )
//   .draw()
//   .start()

// L.marker([32.0304, 118.7968], {
//   icon: L.divIcon({
//     html: '<i class="iconfont" style="font-size: 40px;">&#xe655;</i>',
//     iconSize: [40, 40],
//     className: 'test',
//   }),
// }).addTo(map)
// L.marker([32.0304, 118.7968]).addTo(map)
// var dataList = [
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.401216, 39.90778],
//     },
//     price: 2,
//   },
// ]

// const layer = new leafletMap.MarkersLayer(
//   map,
//   dataList,
//   {
//     iconUnicode: '&#xe655;',
//     iconSize: [20, 20],
//     iconAnchor: [10, 20],
//     popupAttr: 'price',
//     tooltipAttr: 'price',
//   },
//   function(eventName) {
//     console.log(eventName)
//   }
// )

// layer.draw()

// // L.marker(L.latLng(39.90778, 116.401216))
// //   .addTo(map)
// //   .bindTooltip('adf')

// L.marker(L.latLng(39.90778, 116.401216), {
//   opacity: 0.2,
//   icon: L.divIcon({
//     iconAnchor: [10, 20],
//     iconSize: [20, 20],
//     html: `
//     <i
//       class="iconfont"
//       style="
//         color: red;
//         font-size: 20px;
//       "
//       >
//       &#xe655;
//     </i>
//   `,
//   }),
// }).addTo(map)
// window.layer = layer
