// @ts-ignore
import leafletMap from '../../../leaflet-layer'
import { red } from 'ansi-colors'

// @ts-ignore
const L = window.L

var position = new L.LatLng(39.90778, 116.401216)
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
      coordinates: [116.401216, 39.90778],
    },
    price: 2,
  },
]

const layer = new leafletMap.MarkersLayer(
  map,
  dataList,
  {
    iconUnicode: '&#xe655;',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAttr: 'price',
    tooltipAttr: 'price',
  },
  function(eventName) {
    console.log(eventName)
  }
)

layer.draw()

L.marker(L.latLng(39.90778, 116.401216)).addTo(map)

L.marker(L.latLng(39.90778, 116.401216), {
  icon: L.divIcon({
    html: `
    <i
      class="iconfont"
      style="
        color: red;
        font-size: 20px;
      "
      >
      &#xe655;
    </i>
  `,
  }),
}).addTo(map)
window.layer = layer
