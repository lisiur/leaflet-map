// @ts-ignore
import leafletMap from '../../../leaflet-layer'
import { PointStyles, RasterStyles } from 'leaflet-layer'
const convert = require('xml-js')

// @ts-ignore
const L = window.L

const position = new L.LatLng(31.288620939442616, 121.4843226505896)
// var position = new L.LatLng(39.90778, 116.401216)
const map = L.map('map', {
  // crs: L.CRS.EPSG4326
  crs: L.CRS.EPSG3857,
}).setView(position, 13)
L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)
const tile = L.tileLayer.wms(
  'http://192.168.1.54:8090/geoserver/workspace_dev/wms',
  {
    layers: 'workspace_dev:t_grid',
    transparent: true,
    format: 'image/png',
    crs: L.CRS.EPSG4326,
  }
)

// tile.setParams({
//   sld_body: new PointStyles('layerName', {
//     fill: '#ccc',
//     renderType: 'bubble',
//     iconUrl: 'https://svg.svg/svg.svg',
//     iconSize: 20,
//     rangeProp: {
//       type: ['java', 'ruby', 'perl'],
//     },
//     rangeSize: {
//       num: [0, 200],
//     },
//     segmentedProp: 'num',
//     segmentedColors: ['#123', '#234', '#345'],
//     classifiedProp: 'type',
//     classifiedColors: ['#123', '#234', '#345'],
//     bubbleColorType: 'prop',
//     bubbleSizeType: 'range',
//     bubbleColorProp: 'type',
//     bubbleColors: ['#123', '#234', '#345'],
//     bubbleSizeProp: 'num',
//     bubbleSizes: [12, 13, 14],
//     gradient: [
//       {
//         color: '#123',
//         percent: 0,
//       },
//       {
//         color: '#234',
//         percent: 0.5,
//       },
//       {
//         color: '#456',
//         percent: 1,
//       },
//     ],
//     dimensionProp: 'num',
//   }).toXMLStr(),
// })
tile.addTo(map)

// const latlngs = [
//   [0, 0].reverse(),
//   [0.0008983152841195, 0].reverse(),
//   [0.0008983152842311, -0.0009043694769296].reverse(),
//   [0, -0.0009043694770415].reverse(),
//   [0, 0].reverse(),
// ]
// const latlngs2 = [
//   [0.0008983152841195, 0].reverse(),
//   [0.001796630568239, 0].reverse(),
//   [0.0017966305683506, -0.0009043694769296].reverse(),
//   [0.0008983152841195, -0.0009043694770415].reverse(),
//   [0.0008983152841195, 0].reverse(),
// ]
// const latlngs3 = [
//   [0, 0.0009043694770415].reverse(),
//   [0.0008983152842311, 0.0009043694769296].reverse(),
//   [0.0008983152841195, 0].reverse(),
//   [0, 0].reverse(),
//   [0, 0.0009043694770415].reverse(),
// ]
// L.polygon(latlngs).addTo(map).bindTooltip('1')
// L.polygon(latlngs2).addTo(map).bindTooltip('2')
// L.polygon(latlngs3).addTo(map).bindTooltip('3')

// L.marker([0, 0]).addTo(map)

const latlngs = [
  [121.4843226505896, 31.288620939442616].reverse(),
  [121.48432083690783, 31.288606772035326].reverse(),
  [121.48400288527716, 31.286265099108153].reverse(),
  [121.48393125911045, 31.28573230296853].reverse(),
  [121.48387899789583, 31.28552490424604].reverse(),
  [121.48378062698488, 31.285330246563497].reverse(),
  [121.48363992694362, 31.28515581041458].reverse(),
  [121.48346230491943, 31.28500829915954].reverse(),
  [121.48325458682828, 31.284893381437502].reverse(),
  [121.48302475503861, 31.284815473344555].reverse(),
  [121.48278164163172, 31.28477756874504].reverse(),
  [121.48253458902425, 31.284781124234264].reverse(),
  [121.48229309098927, 31.284826003171027].reverse(),
  [121.48206642786461, 31.284910480929558].reverse(),
  [121.48186330995985, 31.28503131116885].reverse(),
  [121.4816915428585, 31.28518385057372].reverse(),
  [121.48155772747265, 31.285362237276033].reverse(),
  [121.48146700637389, 31.285559616102393].reverse(),
  [121.48142286614863, 31.285768401995195].reverse(),
  [121.4814270033762, 31.285980571486895].reverse(),
  [121.48149869768274, 31.286513979849158].reverse(),
  [121.48149886281789, 31.2865152023534].reverse(),
  [121.48181587484251, 31.288850412053264].reverse(),
  [121.48234280476738, 31.293232637697905].reverse(),
  [121.48239215687174, 31.29344056170395].reverse(),
  [121.48248779848346, 31.29363622255914].reverse(),
  [121.48262605438171, 31.29381210103704].reverse(),
  [121.48280161160059, 31.293961438104606].reverse(),
  [121.48300772358363, 31.294078494686556].reverse(),
  [121.48323646944863, 31.294158772235402].reverse(),
  [121.48347905840025, 31.294199185627782].reverse(),
  [121.48372616758881, 31.294198181739507].reverse(),
  [121.48396830042662, 31.29415579914044].reverse(),
  [121.48419615158534, 31.29407366661368].reverse(),
  [121.48440096464007, 31.293954940555647].reverse(),
  [121.48457486860923, 31.293804183663976].reverse(),
  [121.48471118045188, 31.29362718957699].reverse(),
  [121.48480466189464, 31.29343076020686].reverse(),
  [121.48485172071814, 31.293222444326318].reverse(),
  [121.48485054877051, 31.29301024745796].reverse(),
  [121.4843226505896, 31.288620939442616].reverse(),
]

L.polygon(latlngs).addTo(map)
