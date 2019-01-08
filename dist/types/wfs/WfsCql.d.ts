export default class WfsCql {
    private workspace;
    private layerName;
    constructor(workspace: string, layerName: string);
    toXMLStr(): string;
}
