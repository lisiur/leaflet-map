/**
 * Created by Wandergis on 2015/7/8.
 * 提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换
 */
/**
 * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
 * 即 百度 转 谷歌、高德
 * @param bd_lon
 * @param bd_lat
 * @returns {*[]}
 */
export declare function bd09togcj02(bd_lon: number, bd_lat: number): number[];
/**
 * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
 * 即谷歌、高德 转 百度
 * @param lng
 * @param lat
 * @returns {*[]}
 */
export declare function gcj02tobd09(lng: number, lat: number): number[];
/**
 * WGS84转GCj02
 * @param lng
 * @param lat
 * @returns {*[]}
 */
export declare function wgs84togcj02(lng: number, lat: number): number[];
/**
 * GCJ02 转换为 WGS84
 * @param lng
 * @param lat
 * @returns {*[]}
 */
export declare function gcj02towgs84(lng: number, lat: number): number[];
export declare function transformlat(lng: number, lat: number): number;
export declare function transformlng(lng: number, lat: number): number;
/**
 * 判断是否在国内，不在国内则不做偏移
 * @param lng
 * @param lat
 * @returns {boolean}
 */
export declare function out_of_china(lng: number, lat: number): boolean;
declare const _default: {
    wgs84togcj02: typeof wgs84togcj02;
    gcj02towgs84: typeof gcj02towgs84;
};
export default _default;
