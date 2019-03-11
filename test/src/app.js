// @ts-ignore
// import leafletMap from '../../../leaflet-layer'
// import { PointStyles, RasterStyles } from 'leaflet-layer'
import { StandardGrid, WfsCql } from 'leaflet-layer'
const convert = require('xml-js')

// @ts-ignore
const L = window.L

const position = new L.LatLng(31.1953349914293, 121.447382657192)
const map = L.map('map', {
  crs: L.CRS.EPSG4326,
  // crs: L.CRS.EPSG3857,
}).setView(position, 13)
L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)
