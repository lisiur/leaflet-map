import * as LeafLet from './leaflet'
import * as GeoJSON from './geojson'

declare global {
  const L: typeof LeafLet
  const GeoJSON: typeof GeoJSON
  interface Window {
    WMS_URL: string
    GET_WMS_LAYER_URL: function
  }
}
export {}
