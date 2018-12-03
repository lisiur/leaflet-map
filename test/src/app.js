// @ts-ignore
import leafletMap from '../../../leaflet-layer'
import { PointStyles } from 'leaflet-layer'
const convert = require('xml-js')

// @ts-ignore
const L = window.L

const position = new L.LatLng(30.90778, 120.401216)
// var position = new L.LatLng(39.90778, 116.401216)
const map = L.map('map', {
  // crs: L.CRS.EPSG4326
  crs: L.CRS.EPSG3857,
}).setView(position, 13)
L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)
const tile = L.tileLayer.wms(
  'http://192.168.1.54:8090/geo/workspace_dev/wms',
  {
    layers: 'layerName',
    transparent: true,
    format: 'image/png',
    crs: L.CRS.EPSG4326,
  }
)

tile.setParams({
  sld_body: new PointStyles('layerName', {
    fill: '#ccc',
    renderType: 'bubble',
    iconUrl: 'https://svg.svg/svg.svg',
    iconSize: 20,
    rangeProp: {
      type: ['java', 'ruby', 'perl']
    },
    rangeSize: {
      num: [0, 100],
    },
    segmentedProp: 'num',
    segmentedColors: ['#123', '#234', '#345'],
    classifiedProp: 'type',
    classifiedColors: ['#123', '#234', '#345'],
    bubbleColorType: 'prop',
    bubbleSizeType: 'range',
    bubbleColorProp: 'type',
    bubbleColors: ['#123', '#234', '#345'],
    bubbleSizeProp: 'num',
    bubbleSizes: [12, 13, 14],

  }).toXMLStr(),
})
tile.addTo(map)
