import { DataListItem, ChannelFunc, GetDataByLatLng } from '../definitions'
import { optionsMerge } from '../utils/index'

type GetOptionsByOptions = (
  options: WmsTileOptions
) => Promise<{ wmsUrl: string; layers: string }>

/** 渲染样式 散点|热力图 */
type GridLayerRenderType = 'single' | 'segmented' | 'heat'

export interface HeatLayerOptions extends L.HeatLayerOptions {
  dimensionAttr?: string
}

interface WmsTileOptions extends L.WMSOptions {
  renderType?: GridLayerRenderType
  wmsUrl?: string
  getDataByLatLng?: GetDataByLatLng
  getOptionsByOptions?: GetOptionsByOptions
  popupAttr?: string | { label: string; value: any }
  color?: string
  segmentedAttr?: string
  segmentedColors?: string[]
  heatOptions?: HeatLayerOptions
}

const DEFAULT_COLORS = '#3388ff'

export default class WmsTile {
  public type: string
  private map: L.Map
  private dataList: DataListItem[]
  private options: WmsTileOptions
  private channelFunc: ChannelFunc
  private layer: L.TileLayer
  private visible: boolean
  private popup: L.Popup
  constructor(
    map: L.Map,
    dataList: DataListItem[],
    options: WmsTileOptions = {},
    channelFunc: ChannelFunc
  ) {
    this.type = 'wmsTile'
    this.visible = true
    this.map = map
    this.dataList = dataList
    this.options = options
    this.channelFunc = channelFunc
    this.layer = null
    this.initOptions(options)
    this.initEvents()
  }
  public async draw(options?: WmsTileOptions) {
    if (!this.visible) {
      return
    }

    if (this.layer) {
      this.layer.remove()
    }
    if (options) {
      this.initOptions(options)
    }
    if (this.options.getOptionsByOptions) {
      const { wmsUrl, layers } = await this.options.getOptionsByOptions(
        this.options
      )
      this.initOptions({ wmsUrl, layers })
    }
    this.layer = this.getLayer()
    if (this.layer) {
      this.layer.addTo(this.map)
    }
  }

  public destroy() {
    if (this.layer) {
      this.layer.remove()
    }
    this.map.off('click', this.clickHandler, this)
  }

  public pitch(id: string) {
    this.dataList.forEach((data) => {
      if (data.id === id) {
        const polygon = L.geoJSON(data.geometry).getLayers()[0] as L.Polygon
        this.showPopup(data, polygon.getCenter())
        this.map.fitBounds(polygon.getBounds())
      }
    })
  }

  public toggleVisible(visible: boolean) {
    this.visible = visible
    if (!this.layer) {
      return
    }
    if (visible) {
      this.map.addLayer(this.layer)
    } else {
      if (this.popup) {
        this.popup.closePopup()
      }
      this.map.removeLayer(this.layer)
    }
  }

  public fitBounds() {
    this.map.fitBounds(this.getBounds(), {
      padding: [20, 20],
    })
  }

  public getBounds() {
    if (this.dataList.length <= 0) {
      return this.map.getBounds()
    }
    return this.dataList.reduce(
      (prev, curr) =>
        prev.extend(
          (L.geoJSON(curr.geometry).getLayers()[0] as L.Polygon).getBounds()
        ),
      L.latLngBounds(
        (L.geoJSON(this.dataList[0].geometry).getLayers()[0] as L.Polygon)
          .getBounds()
          .getNorthEast(),
        (L.geoJSON(this.dataList[0].geometry).getLayers()[0] as L.Polygon)
          .getBounds()
          .getSouthWest()
      )
    )
  }

  private initEvents() {
    this.map.on('click', this.clickHandler, this)
  }

  private initOptions(options: WmsTileOptions) {
    const getDataByLatLng =
      options.getDataByLatLng || this.options.getDataByLatLng
    const getOptionsByOptions =
      options.getOptionsByOptions || this.options.getOptionsByOptions

    const defaultOptions: WmsTileOptions = {
      renderType: 'single',
      color: DEFAULT_COLORS,
      segmentedAttr: null,
      segmentedColors: [DEFAULT_COLORS],
      format: 'image/png',
      transparent: true,
      crs: L.CRS.EPSG4326,
      heatOptions: {
        dimensionAttr: null,
      },
    }
    this.options = optionsMerge(
      this.options,
      defaultOptions,
      options
    ) as WmsTileOptions
    this.options.getDataByLatLng = getDataByLatLng
    this.options.getOptionsByOptions = getOptionsByOptions
  }

  private getLayer() {
    const { wmsUrl } = this.options
    if (wmsUrl) {
      return L.tileLayer.wms(wmsUrl, {
        layers: this.options.layers,
        transparent: true,
        format: 'image/png',
        crs: L.CRS.EPSG4326,
      })
    } else {
      return null
    }
  }
  private async clickHandler(event: L.LeafletMouseEvent) {
    this.channelFunc('click', event)
    if (!this.options.getDataByLatLng) {
      // console.warn('options.getDataByLatLng is not defined')
      return
    }
    const latlng = [event.latlng.lat, event.latlng.lng]
    const data = await this.options.getDataByLatLng(latlng)
    this.showPopup(data, event.latlng)
  }
  private showPopup(data: DataListItem, latlng: L.LatLng) {
    this.popup = L.popup()
      .setLatLng(latlng)
      .setContent(this.getPopupContent(data))
      .openOn(this.map)
  }
  private getPopupContent(data: DataListItem) {
    if (!this.options.popupAttr) {
      return ''
    }
    if (typeof this.options.popupAttr === 'string') {
      return `${this.options.popupAttr}: ${data[this.options.popupAttr]}`
    }
    if (typeof this.options.popupAttr === 'object') {
      return `${this.options.popupAttr.label}: ${
        data[this.options.popupAttr.value]
      }`
    }
  }
}
