import { WfsCqlOptions, QUERY_CONDITION_TYPE } from './def';
import { WFSQuery } from '../SLD/def';
export default class WfsCql {
    static QUERY_CONDITION_TYPE: typeof QUERY_CONDITION_TYPE;
    private workspace;
    private layerName;
    private conditions;
    private layers;
    constructor(options: WfsCqlOptions);
    toXMLStr(): string;
    protected getCQLJson(): WFSQuery;
    private getQuery;
    private jsonifyCondition;
    private consBaseGeometry;
    private consFunction;
    private consAttrQuery;
}
