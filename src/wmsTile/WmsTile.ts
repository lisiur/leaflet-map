import { DataListItem, ChannelFunc, GetDataByLatLng } from '../definitions'
import { optionsMerge } from '../utils/index'

/**
 * 获取 GeoServer 参数
 */
type GetWmsConfigs = (
  options: WmsTileOptions
) => Promise<{ wmsURL: string; layers: string; styles: string }>

interface WmsTileOptions extends L.WMSOptions {
  wmsURL?: string
  layers?: string
  style?: string

  getDataByLatLng?: GetDataByLatLng
  getWmsConfigs?: GetWmsConfigs
  popupAttr?: string | { label: string; value: any }

  [prop: string]: any
}

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
    if (this.popup) {
      this.popup.remove()
    }
    if (options) {
      this.initOptions(options)
    }
    if (this.options.getWmsConfigs) {
      const { wmsURL, layers, styles } = await this.options.getWmsConfigs(
        this.options
      )
      this.initOptions({ wmsURL, layers, styles })
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

  public getOptions() {
    return this.options
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
      this.initEvents()
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
    const getWmsConfigs = options.getWmsConfigs || this.options.getWmsConfigs

    const defaultOptions: WmsTileOptions = {
      format: 'image/png',
      transparent: true,
      crs: L.CRS.EPSG4326,
    }
    this.options = optionsMerge(
      this.options,
      defaultOptions,
      options
    ) as WmsTileOptions
    this.options.getDataByLatLng = getDataByLatLng
    this.options.getWmsConfigs = getWmsConfigs
  }

  private getLayer() {
    const { wmsURL, layers, styles } = this.options
    if (wmsURL) {
      return L.tileLayer.wms(wmsURL, {
        layers,
        styles,
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
    if (data) {
      this.showPopup(data, event.latlng)
    }
  }
  private showPopup(data: DataListItem, latlng: L.LatLng) {
    const popupContent = this.getPopupContent(data)
    // 有些数据没有该字段，则不显示 popup
    if (!popupContent) {
      return
    }
    this.popup = L.popup()
      .setLatLng(latlng)
      .setContent(popupContent)
      .openOn(this.map)
  }
  private getPopupContent(data: DataListItem) {
    if (!this.options.popupAttr) {
      return null
    }
    if (typeof this.options.popupAttr === 'string') {
      if (!data[this.options.popupAttr]) {
        return null
      }
      return `${this.options.popupAttr}: ${data[this.options.popupAttr]}`
    }
    if (typeof this.options.popupAttr === 'object') {
      if (!data[this.options.popupAttr.value]) {
        return null
      }
      return `${this.options.popupAttr.label}: ${
        data[this.options.popupAttr.value]
      }`
    }
  }
}
