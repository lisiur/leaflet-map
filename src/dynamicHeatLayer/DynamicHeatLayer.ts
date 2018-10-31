import { DataListItem, ChannelFunc } from '../definitions'
import MarkersLayer, {
  MarkersLayerOptions,
  MarkersHeatLayerOptions,
} from '../marker/MarkersLayer'

interface DynamicHeatLayerOptions extends MarkersHeatLayerOptions {
  /** 是否循环播放 */
  loop: boolean
  /** 是否自动播放 */
  auto: boolean
  /** 间隔时间 */
  interval: number
}

export default class DynamicHeatLayer {
  /** 当前播放到第几步 */
  private currentStep: number

  private map: L.Map
  private dynamicDataList: DataListItem[][]
  private options: DynamicHeatLayerOptions
  private channelFunc: ChannelFunc
  private layer: MarkersLayer
  private isPause: boolean
  constructor(
    map: L.Map,
    dynamicDataList: DataListItem[][],
    options: DynamicHeatLayerOptions,
    channelFunc: ChannelFunc
  ) {
    if (!Array.isArray(dynamicDataList) || dynamicDataList.length === 0) {
      throw new Error(`dataList 必须是非空数组`)
    }
    this.map = map
    this.dynamicDataList = dynamicDataList
    this.options = options
    this.channelFunc = channelFunc
    this.currentStep = 0
    this.isPause = true
  }
  public restart() {
    this.isPause = false
    this.currentStep = 0
    this.gotoStep(this.currentStep)
    this.start()
  }
  public start() {
    this.isPause = false
    if (!this.options.auto) {
      return
    }
    setTimeout(() => {
      if (this.isPause) {
        return
      }
      /** 播放完毕 */
      if (this.currentStep >= this.dynamicDataList.length - 1) {
        if (!this.options.loop) {
          return
        }
        this.restart()
      } else {
        this.currentStep++
        this.gotoStep(this.currentStep)
        this.start()
      }
    }, this.options.interval)
  }
  public pause() {
    this.isPause = true
  }
  public prev() {
    this.currentStep--
    this.currentStep =
      (this.currentStep + this.dynamicDataList.length) %
      this.dynamicDataList.length
    this.gotoStep(this.currentStep)
  }
  public next() {
    this.currentStep++
    this.currentStep = this.currentStep % this.dynamicDataList.length
    this.gotoStep(this.currentStep)
  }
  public gotoStep(step: number) {
    if (step < 0 || step >= this.dynamicDataList.length) {
      throw new Error(`gotoStep(${step}): step is out of index `)
    }
    this.layer.setData(this.dynamicDataList[step])
    this.layer.draw()
  }
  public draw(options?: DynamicHeatLayerOptions) {
    this.initOptions(options)
    this.initLayer()
    this.layer.draw()
    return this
  }
  public fitBounds() {
    this.layer.fitBounds()
  }
  private initOptions(options?: DynamicHeatLayerOptions) {
    this.options = Object.assign(
      {
        loop: false,
        auto: false,
        interval: 1000,
      },
      this.options,
      options
    )
  }
  private initLayer() {
    const markersLayerOptions: MarkersLayerOptions = {
      renderType: 'heat',
      heatOptions: this.options,
    }
    this.layer = new MarkersLayer(
      this.map,
      this.dynamicDataList[0],
      markersLayerOptions,
      this.channelFunc
    )
    return this.layer
  }
}
