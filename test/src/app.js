// @ts-ignore
import leafletMap from '../../../leaflet-layer'
import { PointStyles, RasterStyles } from 'leaflet-layer'
const convert = require('xml-js')

// @ts-ignore
const L = window.L

const position = new L.LatLng(20, 90)
// var position = new L.LatLng(39.90778, 116.401216)
const map = L.map('map', {
  // crs: L.CRS.EPSG4326
  crs: L.CRS.EPSG3857,
}).setView(position, 13)
L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)
const tile = L.tileLayer.wms('http://192.168.1.54:8090/geoserver/workspace_dev/wms', {
  layers: 'workspace_dev:t_grid',
  transparent: true,
  format: 'image/png',
  crs: L.CRS.EPSG4326,
})

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