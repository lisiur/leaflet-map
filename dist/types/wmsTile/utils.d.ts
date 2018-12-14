import { GeometryObject } from 'typings/geojson';
interface FeatureInfo {
    type: 'FeatureCollection';
    crs: {
        type: string;
        properties: {
            name: string;
        } | null;
    };
    features: Array<{
        type: 'Feature';
        id: string;
        geometry: GeometryObject;
        geometry_name: string;
        properties: {
            [prop: string]: any;
        };
    }>;
    totalFeatures: string;
}
export interface GetFeatureInfoParams extends L.WMSOptions {
    map: L.Map;
    latlng: L.LatLng;
    wmsURL: string;
}
export declare function getFeatureInfo(options: GetFeatureInfoParams): Promise<FeatureInfo>;
export declare function getCapabilities(wmsURL: string): Promise<any>;
export {};
