// @ts-ignore
import leafletMap from '../../../leaflet-layer'
import { red } from 'ansi-colors'

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
      type: 'LineString',
      coordinates: [[32.0404, 118.7968], [32.0404, 118.7868]],
    },
    price: 2,
  },
]

const layer = new leafletMap.PolylinesBufferLayer(
  map,
  dataList,
  { tooltipAttr: 'price' },
  function(eventName) {
    console.log(eventName)
  }
)

layer.draw()

window.layer = layer
