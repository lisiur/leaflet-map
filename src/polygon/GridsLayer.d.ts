import PolygonsLayer, { PolygonLayerOptions } from './PolygonsLayer';
import { DataListItem, ChannelFunc } from '../definitions';
export default class GridsLayer extends PolygonsLayer {
    private propMaxLength;
    constructor(map: L.Map, dataList: DataListItem[], options: PolygonLayerOptions, channelFunc: ChannelFunc);
    redraw(): this;
    toggleTooltip(visible: boolean): void;
    protected initEvent(): void;
    private configTooltip;
    private configGridLayer;
    private zoomHandler;
    private getRectangleWidth;
    private getTooltipMaxWidth;
    private getPropMaxLength;
}
