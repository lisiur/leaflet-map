export interface GetFeatureInfoParams extends L.WMSOptions {
    map: L.Map;
    latlng: L.LatLng;
    wmsURL: string;
}
export declare function getFeatureInfo(options: GetFeatureInfoParams): Promise<any>;
export declare function getCapabilities(wmsURL: string): Promise<any>;
