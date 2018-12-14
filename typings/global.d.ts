import * as LeafLet from './leaflet'
import * as GeoJSON from './geojson'

declare global {
  const L: typeof LeafLet
  const GeoJSON: typeof GeoJSON
  interface Window {
    WMS_URL: string
  }
}
export {}
