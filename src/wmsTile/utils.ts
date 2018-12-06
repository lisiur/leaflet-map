import * as convert from 'xml-js'
export interface GetFeatureInfoParams extends L.WMSOptions {
  map: L.Map
  latlng: L.LatLng
  wmsURL: string
}

export async function getFeatureInfo(options: GetFeatureInfoParams) {
  const url = getFeatureInfoUrl(options)
  const res = await fetch(url, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
  })
  return res.json()
}

export async function getCapabilities(wmsURL: string) {
  const url = getCapabilitiesUrl(wmsURL)
  const jsonData = await fetch(url, {
    mode: 'cors',
    method: 'GET',
    credentials: 'include',
  })
    .then((res) => res.text())
    .then((str) =>
      convert.xml2js(str, {
        compact: true,
      })
    )
  return jsonData as any
}

function getFeatureInfoUrl(options: GetFeatureInfoParams) {
  const { wmsURL, map, latlng, layers, styles } = options
  const point = map.latLngToContainerPoint(latlng)
  const size = map.getSize()
  const params = {
    service: 'WMS',
    version: '1.1.1',
    request: 'GetFeatureInfo',
    layers,
    styles,
    srs: 'EPSG:4326',
    bbox: map.getBounds().toBBoxString(),
    height: size.y,
    width: size.x,
    query_layers: layers,
    x: Math.round(point.x),
    y: Math.round(point.y),
    info_format: 'application/json',
  }
  return wmsURL + L.Util.getParamString(params, wmsURL)
}

function getCapabilitiesUrl(wmsURL: string) {
  const params = {
    service: 'WMS',
    version: '1.1.1',
    request: 'GetCapabilities',
  }
  return wmsURL + L.Util.getParamString(params, wmsURL)
}
