import * as convert from 'xml-js'
export default class WfsCql {
  private workspace: string
  private layerName: string
  constructor(workspace: string, layerName: string) {
    this.workspace = workspace
    this.layerName = layerName
  }
  public toXMLStr(): string {
    const layer = `${this.workspace}:${this.layerName}`
    return convert.js2xml({ layer })
  }
}
