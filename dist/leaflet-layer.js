(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["leafletMap"] = factory();
	else
		root["leafletMap"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _marker_Marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marker/Marker */ "./src/marker/Marker.ts");
/* harmony import */ var _marker_MarkersLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marker/MarkersLayer */ "./src/marker/MarkersLayer.ts");
/* harmony import */ var _marker_MarkersBufferLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marker/MarkersBufferLayer */ "./src/marker/MarkersBufferLayer.ts");
/* harmony import */ var _polyline_Polyline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyline/Polyline */ "./src/polyline/Polyline.ts");
/* harmony import */ var _polyline_PolylineLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyline/PolylineLayer */ "./src/polyline/PolylineLayer.ts");
/* harmony import */ var _polygon_Polygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polygon/Polygon */ "./src/polygon/Polygon.ts");
/* harmony import */ var _polygon_PolygonLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./polygon/PolygonLayer */ "./src/polygon/PolygonLayer.ts");







/* harmony default export */ __webpack_exports__["default"] = ({
    Marker: _marker_Marker__WEBPACK_IMPORTED_MODULE_0__["default"],
    MarkersLayer: _marker_MarkersLayer__WEBPACK_IMPORTED_MODULE_1__["default"],
    MarkersBufferLayer: _marker_MarkersBufferLayer__WEBPACK_IMPORTED_MODULE_2__["default"],
    Polyline: _polyline_Polyline__WEBPACK_IMPORTED_MODULE_3__["default"],
    PolylineLayer: _polyline_PolylineLayer__WEBPACK_IMPORTED_MODULE_4__["default"],
    Polygon: _polygon_Polygon__WEBPACK_IMPORTED_MODULE_5__["default"],
    PolygonLayer: _polygon_PolygonLayer__WEBPACK_IMPORTED_MODULE_6__["default"],
});


/***/ }),

/***/ "./src/marker/Marker.ts":
/*!******************************!*\
  !*** ./src/marker/Marker.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Marker; });
class Marker extends L.Marker {
    constructor(latlng, options) {
        super(latlng, options);
    }
    setData(data) {
        this.__data = data;
    }
    getData() {
        return this.__data;
    }
}


/***/ }),

/***/ "./src/marker/MarkersBufferLayer.ts":
/*!******************************************!*\
  !*** ./src/marker/MarkersBufferLayer.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarkersBufferLayer; });
/* harmony import */ var _MarkersLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarkersLayer */ "./src/marker/MarkersLayer.ts");

class MarkersBufferLayer extends _MarkersLayer__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(map, dataList, options, channelFunc) {
        super(map, dataList, options, channelFunc);
        const defaultBufferOptions = {
            radius: 1000,
            stroke: false,
        };
        this.options = Object.assign(this.options, { bufferOptions: defaultBufferOptions }, options);
    }
    draw(options) {
        this.options = Object.assign(this.options, options);
        return this.redraw();
    }
    redraw() {
        if (this.markerLayer) {
            this.map.removeLayer(this.markerLayer);
        }
        if (this.bufferLayer) {
            this.map.removeLayer(this.bufferLayer);
        }
        this.markerLayer = this.configMarkerLayer();
        this.bufferLayer = this.configBufferLayer();
        this.map.addLayer(this.markerLayer);
        this.map.addLayer(this.bufferLayer);
        return this;
    }
    configBufferLayer() {
        const groupLayer = L.layerGroup();
        this.markers.forEach((marker) => {
            const circleLayer = L.circle(marker.getLatLng(), this.options.bufferOptions);
            groupLayer.addLayer(circleLayer);
        });
        return groupLayer;
    }
}


/***/ }),

/***/ "./src/marker/MarkersLayer.ts":
/*!************************************!*\
  !*** ./src/marker/MarkersLayer.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MarkersLayer; });
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Marker */ "./src/marker/Marker.ts");

class MarkersLayer {
    constructor(map, dataList, options, channelFunc) {
        const defaultOptions = {
            renderType: 'point',
            renderPointColorType: 'single',
            iconType: 'unicode',
            iconSize: [20, 20],
            iconClass: 'iconfont',
            iconColor: '#3388FF',
            iconAnchor: [10, 10],
        };
        this.map = map;
        this.dataList = dataList;
        this.options = Object.assign({}, defaultOptions, options);
        this.channelFunc = channelFunc;
        this.layer = null;
        this.focusedMarker = null;
        this.hoveredMarker = null;
        this.focusedDisplayMarker = null;
        this.markers = [];
        this.markerLayer = null;
        this.heatLayer = null;
        this.clusterLayer = null;
        this.segmentedMin = Infinity;
        this.segmentedStep = 1;
        this.initMarkers();
    }
    draw(options) {
        this.options = Object.assign(this.options, options);
        return this.redraw();
    }
    redraw() {
        if (this.layer) {
            this.map.removeLayer(this.layer);
        }
        switch (this.options.renderType) {
            case 'point': {
                this.layer = this.configMarkerLayer();
                break;
            }
            case 'cluster': {
                this.layer = this.configClusterLayer();
                break;
            }
            case 'heat': {
                this.layer = this.configHeatLayer();
                break;
            }
            default: {
                throw new Error(`renderType 不支持"${this.options.renderType}"`);
            }
        }
        this.map.addLayer(this.layer);
        return this;
    }
    setOptions(options, redraw = false) {
        this.options = Object.assign(this.options, options);
        if (redraw) {
            this.redraw();
        }
    }
    /** 渲染为散点图 */
    configMarkerLayer() {
        const canvasIconLayer = L.canvasIconLayer({}).addTo(this.map);
        // 添加点击事件
        canvasIconLayer.addOnClickListener((_, [{ data: marker }]) => {
            this.markerClickHandler(marker);
        });
        // 添加 hover 事件
        canvasIconLayer.addOnHoverListener((_, [{ data: marker }]) => {
            // 之前有 hover 的关闭 tooltip
            if (this.hoveredMarker) {
                this.hoveredMarker.closeTooltip();
            }
            this.hoveredMarker = marker;
            if (this.hoveredMarker.getTooltip()) {
                // 如果已经设置 tooltip 直接展示 tooltip
                this.hoveredMarker.openTooltip();
            }
            else {
                // 否则绑定 tooltip 并展示
                if (this.options.tooltipAttr) {
                    this.hoveredMarker.bindTooltip('' + this.hoveredMarker.getData()[this.options.tooltipAttr]);
                }
            }
        });
        canvasIconLayer.addMarkers(this.markers);
        this.map.on('zoomstart', () => {
            this.map.removeLayer(this.markerLayer);
        });
        this.map.on('zoomend', () => {
            this.map.addLayer(this.markerLayer);
        });
        // 解决初次渲染不出图标问题
        setTimeout(() => {
            this.map.panTo(this.map.getCenter());
        });
        this.markerLayer = canvasIconLayer;
        return this.markerLayer;
    }
    initMarkers() {
        this.dataList.forEach((data) => {
            // 缓存 segment 相关数据
            this.cacheSegmentParams();
            const layer = L.geoJSON(data.geometry).getLayers()[0];
            const marker = new _Marker__WEBPACK_IMPORTED_MODULE_0__["default"]([
                layer.getLatLng().lng,
                layer.getLatLng().lat,
            ], {
                icon: this.getMarkerIcon(data),
            });
            // 将相关值绑定到 marker上
            marker.setData(data);
            this.markers.push(marker);
        });
    }
    // 处理 marker 点击事件
    markerClickHandler(marker) {
        this.focusedMarker = marker;
        // 删除前一个放大图标
        if (this.focusedDisplayMarker) {
            this.focusedDisplayMarker.removeFrom(this.map);
        }
        // 生成当前放大图标
        this.focusedDisplayMarker = new _Marker__WEBPACK_IMPORTED_MODULE_0__["default"](marker.getLatLng(), {
            icon: this.getLargerMarkerIcon(marker.getData()),
        });
        this.focusedDisplayMarker.addTo(this.map);
        this.focusedDisplayMarker
            .bindPopup(this.getPopupContent(marker.getData()))
            .openPopup();
        this.focusedDisplayMarker.on('popupclose', () => {
            this.focusedDisplayMarker.remove();
        });
        this.map.panTo(this.focusedMarker.getLatLng());
        this.channelFunc('on-click-marker', marker);
    }
    configClusterLayer() {
        // 展示聚合图层
        this.clusterLayer = L.markerClusterGroup();
        this.clusterLayer.addLayers(this.markers.map((m) => {
            const marker = new _Marker__WEBPACK_IMPORTED_MODULE_0__["default"](m.getLatLng(), {
                icon: this.getMarkerIcon(m.getData()),
            });
            marker.setData(m.getData());
            marker.bindTooltip('' + marker.getData()[this.options.tooltipAttr]);
            marker.on('click', () => {
                this.markerClickHandler(marker);
            });
            return marker;
        }));
        return this.clusterLayer;
    }
    /** 渲染为热力图 */
    configHeatLayer() {
        this.markers.forEach((marker) => {
            const latLng = marker.getLatLng();
            let alt = marker.getData()[this.options.heatOptions.dimensionAttr];
            if (typeof alt !== 'number') {
                alt = this.options.heatOptions.max;
            }
            marker.setLatLng(L.latLng(latLng.lat, latLng.lng, alt));
        });
        this.heatLayer = L.heatLayer(this.markers.map((it) => it.getLatLng()), this.options.heatOptions);
        return this.heatLayer;
    }
    getLargerMarkerIcon(data) {
        return this._getMarkerIcon(data, true);
    }
    getMarkerIcon(data) {
        return this._getMarkerIcon(data, false);
    }
    /** 获取当前 marker 需要展示的 icon */
    _getMarkerIcon(data, isLarger) {
        let iconSize = this.options.iconSize;
        let iconAnchor = this.options.iconAnchor;
        iconSize = isLarger ? [iconSize[0] * 1.5, iconSize[1] * 1.5] : iconSize;
        iconAnchor = isLarger
            ? [iconAnchor[0] * 1.5, iconAnchor[1] * 1.5]
            : iconAnchor;
        const iconColor = this.options.iconColor;
        switch (this.options.iconType) {
            case 'image': {
                return L.icon({
                    iconUrl: this.options.iconImageUrl,
                    iconSize,
                    iconAnchor,
                });
            }
            case 'font_class':
            case 'symbol':
            case 'unicode': {
                return L.divIcon({
                    html: this.getCustomIconHTML(data, {
                        iconSize,
                        iconColor,
                    }),
                    className: isLarger ? 'large-div-icon-marker' : '',
                    iconSize,
                    iconAnchor,
                });
            }
            default: {
                throw new Error(`图标类型不支持"${this.options.iconType}"`);
            }
        }
    }
    getCustomIconHTML(data, options) {
        if (this.options.iconRenderer) {
            options = Object.assign({}, this.options, options);
            return this.options.iconRenderer(data, options);
        }
        switch (this.options.renderPointColorType) {
            case 'single': {
                switch (this.options.iconType) {
                    // 使用 class
                    case 'font_class': {
                        return `
              <i class="${this.options.iconClass}"
                style="
                  color: ${options.iconColor};
                  font-size: ${options.iconSize[0]}px;
                "
                />
            `;
                    }
                    // 使用 svg
                    case 'symbol': {
                        return `
              <svg class="icon-symbol" aria-hidden="true">
                <use xlink:href="${this.options.iconSymbol}" />
              </svg>
            `;
                    }
                    // 使用 unicode
                    case 'unicode': {
                        return `
              <i
                class="${this.options.iconClass}"
                style="
                  color: ${options.iconColor};
                  font-size: ${options.iconSize[0]}px;
                "
                >
                ${this.options.iconUnicode}
              </i>
            `;
                    }
                }
            }
            case 'segmented': {
                switch (this.options.iconType) {
                    // 使用 class
                    case 'font_class': {
                        return `
              <i
                class="${this.options.iconClass}"
                style="
                  color: ${this.getSegmentedMarkerColor(data)};
                  font-size: ${options.iconSize[0]}px;
                "
                />
            `;
                    }
                    // 使用 svg
                    case 'symbol': {
                        return `
              <svg class="icon-symbol" aria-hidden="true">
                <use xlink:href="${this.options.iconSymbol}" />
              </svg>
            `;
                    }
                    // 使用 unicode
                    case 'unicode': {
                        return `
              <i
                class="${this.options.iconClass}"
                style="
                  color: ${this.getSegmentedMarkerColor(data)};
                  font-size: ${options.iconSize[0]}px;
                "
                >
                ${this.options.iconUnicode}
              </i>
            `;
                    }
                }
            }
            default: {
                throw new Error(`renderPointColorType 不支持"${this.options.renderPointColorType}"`);
            }
        }
    }
    cacheSegmentParams() {
        const segmentedLength = this.options.segmentedColors.length;
        let maxVal = -Infinity;
        let minVal = Infinity;
        for (const data of this.dataList) {
            const val = data[this.options.segmentedAttr];
            maxVal = Math.max(maxVal, val);
            minVal = Math.min(minVal, val);
        }
        const step = (maxVal - minVal + 1) / segmentedLength;
        this.segmentedMin = minVal;
        this.segmentedStep = step;
    }
    getSegmentedMarkerColor(data) {
        const val = data[this.options.segmentedAttr];
        const color = this.options.segmentedColors[(val - this.segmentedMin) / this.segmentedStep];
        return color;
    }
    getPopupContent(data) {
        if (!this.options.popupAttr) {
            return '';
        }
        return `${this.options.popupAttr}: ${data[this.options.popupAttr]}`;
    }
}


/***/ }),

/***/ "./src/polygon/Polygon.ts":
/*!********************************!*\
  !*** ./src/polygon/Polygon.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polygon; });
class Polygon extends L.Polygon {
    constructor(latlngs, options) {
        super(latlngs, options);
    }
    setData(data) {
        this.__data = data;
    }
    getData() {
        return this.__data;
    }
}


/***/ }),

/***/ "./src/polygon/PolygonLayer.ts":
/*!*************************************!*\
  !*** ./src/polygon/PolygonLayer.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolygonLayer; });
/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Polygon */ "./src/polygon/Polygon.ts");

class PolygonLayer {
    constructor(map, dataList, options, channelFunc) {
        const defaultOptions = {
            renderPolygonColorType: 'single',
        };
        this.map = map;
        this.dataList = dataList;
        this.options = options;
        this.channelFunc = channelFunc;
        this.segmentedMin = Infinity;
        this.segmentedStep = 1;
        // this.focusedPolygon = null
        this.options = Object.assign({}, defaultOptions, options);
        // 缓存 segment 相关数据
        this.cacheSegmentParams();
        this.initPolygons();
    }
    draw(options) {
        this.options = Object.assign(this.options, options);
        return this.redraw();
    }
    redraw() {
        if (this.layer) {
            this.map.removeLayer(this.layer);
        }
        this.layer = this.configPolygonLayer();
        this.map.addLayer(this.layer);
        return this;
    }
    initPolygons() {
        this.dataList.forEach((data) => {
            this.cacheSegmentParams();
            const layer = L.geoJSON(data.geometry).getLayers()[0];
            const polygon = new _Polygon__WEBPACK_IMPORTED_MODULE_0__["default"](layer.getLatLngs());
            // 将相关值绑定到 marker上
            polygon.setData(data);
            this.polygons.push(polygon);
        });
    }
    configPolygonLayer() {
        this.polygonLayer = L.layerGroup();
        this.polygons.forEach((polygon) => {
            polygon.on('click', () => {
                this.polygonClickHandler(polygon);
            });
            const options = Object.assign({}, this.options, {
                color: this.getSegmentedPolygonColor(polygon.getData()),
            });
            const newPolygon = new _Polygon__WEBPACK_IMPORTED_MODULE_0__["default"](polygon.getLatLngs(), options);
            this.polygonLayer.addLayer(newPolygon);
        });
        return this.polygonLayer;
    }
    polygonClickHandler(polygon) {
        // this.focusedPolygon = polygon
        this.channelFunc('on-click-polygon', polygon);
    }
    cacheSegmentParams() {
        const segmentedLength = this.options.segmentedColors.length;
        let maxVal = -Infinity;
        let minVal = Infinity;
        for (const data of this.dataList) {
            const val = data[this.options.segmentedAttr];
            maxVal = Math.max(maxVal, val);
            minVal = Math.min(minVal, val);
        }
        const step = (maxVal - minVal + 1) / segmentedLength;
        this.segmentedMin = minVal;
        this.segmentedStep = step;
    }
    getSegmentedPolygonColor(data) {
        const val = data[this.options.segmentedAttr];
        const color = this.options.segmentedColors[(val - this.segmentedMin) / this.segmentedStep];
        return color;
    }
}


/***/ }),

/***/ "./src/polyline/Polyline.ts":
/*!**********************************!*\
  !*** ./src/polyline/Polyline.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polyline; });
class Polyline extends L.Polyline {
    constructor(latlngs, options) {
        super(latlngs, options);
    }
    setData(data) {
        this.__data = data;
    }
    getData() {
        return this.__data;
    }
}


/***/ }),

/***/ "./src/polyline/PolylineLayer.ts":
/*!***************************************!*\
  !*** ./src/polyline/PolylineLayer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolylineLayer; });
/* harmony import */ var _Polyline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Polyline */ "./src/polyline/Polyline.ts");

class PolylineLayer {
    constructor(map, dataList, options, channelFunc) {
        const defaultOptions = {
            renderPolylineColorType: 'single',
        };
        this.map = map;
        this.dataList = dataList;
        this.options = options;
        this.channelFunc = channelFunc;
        this.segmentedMin = Infinity;
        this.segmentedStep = 1;
        // this.focusedPolyline = null
        this.options = Object.assign({}, defaultOptions, options);
        // 缓存 segment 相关数据
        this.cacheSegmentParams();
        this.initPolylines();
    }
    draw(options) {
        this.options = Object.assign(this.options, options);
        return this.redraw();
    }
    redraw() {
        if (this.layer) {
            this.map.removeLayer(this.layer);
        }
        this.layer = this.configPolylineLayer();
        this.map.addLayer(this.layer);
        return this;
    }
    initPolylines() {
        this.dataList.forEach((data) => {
            this.cacheSegmentParams();
            const layer = L.geoJSON(data.geometry).getLayers()[0];
            const polyline = new _Polyline__WEBPACK_IMPORTED_MODULE_0__["default"](layer.getLatLngs());
            // 将相关值绑定到 marker上
            polyline.setData(data);
            this.polylines.push(polyline);
        });
    }
    configPolylineLayer() {
        this.polylineLayer = L.layerGroup();
        this.polylines.forEach((polyline) => {
            polyline.on('click', () => {
                this.polylineClickHandler(polyline);
            });
            const options = Object.assign({}, this.options, {
                color: this.getSegmentedPolylineColor(polyline.getData()),
            });
            const newPolyline = new _Polyline__WEBPACK_IMPORTED_MODULE_0__["default"](polyline.getLatLngs(), options);
            this.polylineLayer.addLayer(newPolyline);
        });
        return this.polylineLayer;
    }
    polylineClickHandler(polyline) {
        // this.focusedPolyline = polyline
        this.channelFunc('on-click-polyline', polyline);
    }
    cacheSegmentParams() {
        const segmentedLength = this.options.segmentedColors.length;
        let maxVal = -Infinity;
        let minVal = Infinity;
        for (const data of this.dataList) {
            const val = data[this.options.segmentedAttr];
            maxVal = Math.max(maxVal, val);
            minVal = Math.min(minVal, val);
        }
        const step = (maxVal - minVal + 1) / segmentedLength;
        this.segmentedMin = minVal;
        this.segmentedStep = step;
    }
    getSegmentedPolylineColor(data) {
        const val = data[this.options.segmentedAttr];
        const color = this.options.segmentedColors[(val - this.segmentedMin) / this.segmentedStep];
        return color;
    }
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9tYXJrZXIvTWFya2VyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvbWFya2VyL01hcmtlcnNCdWZmZXJMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5Z29uL1BvbHlnb24udHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5Z29uL1BvbHlnb25MYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWxpbmUvUG9seWxpbmVMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJO0lBQzNCLENBQUM7SUFDTyx5QkFBeUIsQ0FBQyxJQUFrQjtRQUNsRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQ3hDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUMvQztRQUNELE9BQU8sS0FBSztJQUNkLENBQUM7Q0FDRiIsImZpbGUiOiJsZWFmbGV0LWxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBNYXJrZXIgZnJvbSAnLi9tYXJrZXIvTWFya2VyJ1xuaW1wb3J0IE1hcmtlcnNMYXllciBmcm9tICcuL21hcmtlci9NYXJrZXJzTGF5ZXInXG5pbXBvcnQgTWFya2Vyc0J1ZmZlckxheWVyIGZyb20gJy4vbWFya2VyL01hcmtlcnNCdWZmZXJMYXllcidcbmltcG9ydCBQb2x5bGluZSBmcm9tICcuL3BvbHlsaW5lL1BvbHlsaW5lJ1xuaW1wb3J0IFBvbHlsaW5lTGF5ZXIgZnJvbSAnLi9wb2x5bGluZS9Qb2x5bGluZUxheWVyJ1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi9wb2x5Z29uL1BvbHlnb24nXG5pbXBvcnQgUG9seWdvbkxheWVyIGZyb20gJy4vcG9seWdvbi9Qb2x5Z29uTGF5ZXInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTWFya2VyLFxuICBNYXJrZXJzTGF5ZXIsXG4gIE1hcmtlcnNCdWZmZXJMYXllcixcbiAgUG9seWxpbmUsXG4gIFBvbHlsaW5lTGF5ZXIsXG4gIFBvbHlnb24sXG4gIFBvbHlnb25MYXllcixcbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBMLk1hcmtlciB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX19kYXRhOiBEYXRhTGlzdEl0ZW1cbiAgY29uc3RydWN0b3IobGF0bG5nOiBMLkxhdExuZ0V4cHJlc3Npb24sIG9wdGlvbnM/OiBMLk1hcmtlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsYXRsbmcsIG9wdGlvbnMpXG4gIH1cbiAgcHVibGljIHNldERhdGEoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgdGhpcy5fX2RhdGEgPSBkYXRhXG4gIH1cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kYXRhXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBNYXJrZXJzTGF5ZXIsIHsgTWFya2Vyc0xheWVyT3B0aW9ucyB9IGZyb20gJy4vTWFya2Vyc0xheWVyJ1xuaW50ZXJmYWNlIE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMgZXh0ZW5kcyBNYXJrZXJzTGF5ZXJPcHRpb25zIHtcbiAgYnVmZmVyT3B0aW9uczogTC5DaXJjbGVNYXJrZXJPcHRpb25zXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZXJzQnVmZmVyTGF5ZXIgZXh0ZW5kcyBNYXJrZXJzTGF5ZXIge1xuICBwdWJsaWMgb3B0aW9uczogTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9uc1xuICBwcml2YXRlIGJ1ZmZlckxheWVyOiBMLkxheWVyR3JvdXBcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgc3VwZXIobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpXG4gICAgY29uc3QgZGVmYXVsdEJ1ZmZlck9wdGlvbnM6IEwuQ2lyY2xlTWFya2VyT3B0aW9ucyA9IHtcbiAgICAgIHJhZGl1czogMTAwMCxcbiAgICAgIHN0cm9rZTogZmFsc2UsXG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICB7IGJ1ZmZlck9wdGlvbnM6IGRlZmF1bHRCdWZmZXJPcHRpb25zIH0sXG4gICAgICBvcHRpb25zXG4gICAgKVxuICB9XG5cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG5cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAodGhpcy5tYXJrZXJMYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9XG4gICAgaWYgKHRoaXMuYnVmZmVyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuYnVmZmVyTGF5ZXIpXG4gICAgfVxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSB0aGlzLmNvbmZpZ01hcmtlckxheWVyKClcbiAgICB0aGlzLmJ1ZmZlckxheWVyID0gdGhpcy5jb25maWdCdWZmZXJMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmJ1ZmZlckxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0J1ZmZlckxheWVyKCkge1xuICAgIGNvbnN0IGdyb3VwTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGNvbnN0IGNpcmNsZUxheWVyID0gTC5jaXJjbGUoXG4gICAgICAgIG1hcmtlci5nZXRMYXRMbmcoKSxcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnNcbiAgICAgIClcbiAgICAgIGdyb3VwTGF5ZXIuYWRkTGF5ZXIoY2lyY2xlTGF5ZXIpXG4gICAgfSlcbiAgICByZXR1cm4gZ3JvdXBMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgTWFya2VyIGZyb20gJy4vTWFya2VyJ1xuXG4vKiog5riy5p+T5qC35byPIOaVo+eCuXzng63lipvlm74gKi9cbnR5cGUgTWFya2Vyc0xheWVyUmVuZGVyVHlwZSA9ICdwb2ludCcgfCAnaGVhdCcgfCAnY2x1c3RlcidcblxuLyoqIOa4suafk+minOiJsuagt+W8jyDljZXoibJ85YiG5q61ICovXG50eXBlIE1hcmtlcnNMYXllclJlbmRlclBvaW50Q29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuXG4vKiog5pWj54K55Zu+5qCH57G75Z6LIGljb25mb250fHN2Z3xpbWFnZSAqL1xudHlwZSBNYXJrZXJzTGF5ZXJJY29uVHlwZSA9ICdmb250X2NsYXNzJyB8ICd1bmljb2RlJyB8ICdzeW1ib2wnIHwgJ2ltYWdlJ1xuXG5pbnRlcmZhY2UgSWNvblJlbmRlckZ1bmNPcHRpb24ge1xuICBpY29uU2l6ZTogW251bWJlciwgbnVtYmVyXVxuICBpY29uQ29sb3I6IHN0cmluZ1xufVxudHlwZSBJY29uUmVuZGVyRnVuYyA9IChcbiAgZGF0YTogRGF0YUxpc3RJdGVtLFxuICBwYXJhbXM6IEljb25SZW5kZXJGdW5jT3B0aW9uXG4pID0+IHN0cmluZ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlcnNMYXllck9wdGlvbnMge1xuICByZW5kZXJUeXBlOiBNYXJrZXJzTGF5ZXJSZW5kZXJUeXBlXG4gIHJlbmRlclBvaW50Q29sb3JUeXBlOiBNYXJrZXJzTGF5ZXJSZW5kZXJQb2ludENvbG9yVHlwZVxuICBpY29uVHlwZTogTWFya2Vyc0xheWVySWNvblR5cGVcblxuICBpY29uSW1hZ2VVcmw/OiBzdHJpbmdcbiAgaWNvblNpemU/OiBbbnVtYmVyLCBudW1iZXJdXG4gIGljb25DbGFzcz86IHN0cmluZ1xuICBpY29uVW5pY29kZT86IHN0cmluZ1xuICBpY29uU3ltYm9sPzogc3RyaW5nXG4gIGljb25Db2xvcj86IHN0cmluZ1xuICBpY29uQW5jaG9yPzogW251bWJlciwgbnVtYmVyXVxuICBpY29uUmVuZGVyZXI/OiBJY29uUmVuZGVyRnVuY1xuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nXG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cblxuICBoZWF0T3B0aW9ucz86IE1hcmtlcnNIZWF0TGF5ZXJPcHRpb25zXG4gIGNsdXN0ZXJPcHRpb25zPzogTC5NYXJrZXJzQ2x1c3Rlck9wdGlvbnNcbn1cblxuLyoqIOi9rOWMluS4uueDreWKm+WbvueahCBvcHRpb25zICovXG5pbnRlcmZhY2UgTWFya2Vyc0hlYXRMYXllck9wdGlvbnMgZXh0ZW5kcyBMLkhlYXRMYXllck9wdGlvbnMge1xuICBkaW1lbnNpb25BdHRyOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Vyc0xheWVyIHtcbiAgcHVibGljIG1hcDogTC5NYXBcbiAgcHVibGljIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVxuICBwdWJsaWMgb3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9uc1xuICBwdWJsaWMgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG5cbiAgcHJvdGVjdGVkIG1hcmtlcnM6IE1hcmtlcltdXG5cbiAgcHJvdGVjdGVkIGZvY3VzZWRNYXJrZXI6IE1hcmtlclxuICBwcm90ZWN0ZWQgaG92ZXJlZE1hcmtlcjogTWFya2VyXG4gIC8qKiDpnIDopoHlsZXnpLrnmoTmlL7lpKfnmoTlm77moIcgKi9cbiAgcHJvdGVjdGVkIGZvY3VzZWREaXNwbGF5TWFya2VyOiBNYXJrZXJcbiAgcHJvdGVjdGVkIG1hcmtlckxheWVyOiBMLkNhbnZhc0ljb25MYXllclxuXG4gIHByaXZhdGUgbGF5ZXI6XG4gICAgfCBMLkNhbnZhc0ljb25MYXllclxuICAgIHwgTC5IZWF0TGF5ZXJcbiAgICB8IEwuTWFya2Vyc0NsdXN0ZXJcbiAgICB8IEwuTGF5ZXJHcm91cFxuICBwcml2YXRlIGhlYXRMYXllcjogTC5IZWF0TGF5ZXJcbiAgcHJpdmF0ZSBjbHVzdGVyTGF5ZXI6IEwuTWFya2Vyc0NsdXN0ZXJcblxuICBwcml2YXRlIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByaXZhdGUgc2VnbWVudGVkU3RlcDogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zID0ge1xuICAgICAgcmVuZGVyVHlwZTogJ3BvaW50JyxcbiAgICAgIHJlbmRlclBvaW50Q29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgIGljb25UeXBlOiAndW5pY29kZScsXG4gICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4gICAgICBpY29uQ2xhc3M6ICdpY29uZm9udCcsXG4gICAgICBpY29uQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIGljb25BbmNob3I6IFsxMCwgMTBdLFxuICAgIH1cbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy5sYXllciA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBudWxsXG4gICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbnVsbFxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIgPSBudWxsXG4gICAgdGhpcy5tYXJrZXJzID0gW11cbiAgICB0aGlzLm1hcmtlckxheWVyID0gbnVsbFxuICAgIHRoaXMuaGVhdExheWVyID0gbnVsbFxuICAgIHRoaXMuY2x1c3RlckxheWVyID0gbnVsbFxuXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBJbmZpbml0eVxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDFcblxuICAgIHRoaXMuaW5pdE1hcmtlcnMoKVxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBNYXJrZXJzTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICBjYXNlICdwb2ludCc6IHtcbiAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnTWFya2VyTGF5ZXIoKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnY2x1c3Rlcic6IHtcbiAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQ2x1c3RlckxheWVyKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2hlYXQnOiB7XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0hlYXRMYXllcigpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclR5cGV9XCJgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucywgcmVkcmF3ID0gZmFsc2UpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICBpZiAocmVkcmF3KSB7XG4gICAgICB0aGlzLnJlZHJhdygpXG4gICAgfVxuICB9XG4gIC8qKiDmuLLmn5PkuLrmlaPngrnlm74gKi9cbiAgcHJvdGVjdGVkIGNvbmZpZ01hcmtlckxheWVyKCkge1xuICAgIGNvbnN0IGNhbnZhc0ljb25MYXllciA9IEwuY2FudmFzSWNvbkxheWVyKHt9KS5hZGRUbyh0aGlzLm1hcClcbiAgICAvLyDmt7vliqDngrnlh7vkuovku7ZcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25DbGlja0xpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciBhcyBNYXJrZXIpXG4gICAgfSlcbiAgICAvLyDmt7vliqAgaG92ZXIg5LqL5Lu2XG4gICAgY2FudmFzSWNvbkxheWVyLmFkZE9uSG92ZXJMaXN0ZW5lcigoXywgW3sgZGF0YTogbWFya2VyIH1dKSA9PiB7XG4gICAgICAvLyDkuYvliY3mnIkgaG92ZXIg55qE5YWz6ZetIHRvb2x0aXBcbiAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIpIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmNsb3NlVG9vbHRpcCgpXG4gICAgICB9XG4gICAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBtYXJrZXIgYXMgTWFya2VyXG5cbiAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0VG9vbHRpcCgpKSB7XG4gICAgICAgIC8vIOWmguaenOW3sue7j+iuvue9riB0b29sdGlwIOebtOaOpeWxleekuiB0b29sdGlwXG4gICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5vcGVuVG9vbHRpcCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlkKbliJnnu5HlrpogdG9vbHRpcCDlubblsZXnpLpcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICcnICsgdGhpcy5ob3ZlcmVkTWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkTWFya2Vycyh0aGlzLm1hcmtlcnMpXG5cbiAgICB0aGlzLm1hcC5vbignem9vbXN0YXJ0JywgKCkgPT4ge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9KVxuICAgIHRoaXMubWFwLm9uKCd6b29tZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9KVxuXG4gICAgLy8g6Kej5Yaz5Yid5qyh5riy5p+T5LiN5Ye65Zu+5qCH6Zeu6aKYXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLm1hcC5nZXRDZW50ZXIoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IGNhbnZhc0ljb25MYXllclxuICAgIHJldHVybiB0aGlzLm1hcmtlckxheWVyXG4gIH1cbiAgcHJpdmF0ZSBpbml0TWFya2VycygpIHtcbiAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuXG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuXG4gICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKFxuICAgICAgICBbXG4gICAgICAgICAgKGxheWVyIGFzIEwuTWFya2VyKS5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgICAgKGxheWVyIGFzIEwuTWFya2VyKS5nZXRMYXRMbmcoKS5sYXQsXG4gICAgICAgIF0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiB0aGlzLmdldE1hcmtlckljb24oZGF0YSksXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgbWFya2VyLnNldERhdGEoZGF0YSlcblxuICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKVxuICAgIH0pXG4gIH1cbiAgLy8g5aSE55CGIG1hcmtlciDngrnlh7vkuovku7ZcbiAgcHJpdmF0ZSBtYXJrZXJDbGlja0hhbmRsZXIobWFya2VyOiBNYXJrZXIpIHtcbiAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBtYXJrZXJcbiAgICAvLyDliKDpmaTliY3kuIDkuKrmlL7lpKflm77moIdcbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmVGcm9tKHRoaXMubWFwKVxuICAgIH1cbiAgICAvLyDnlJ/miJDlvZPliY3mlL7lpKflm77moIdcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbmV3IE1hcmtlcihtYXJrZXIuZ2V0TGF0TG5nKCksIHtcbiAgICAgIGljb246IHRoaXMuZ2V0TGFyZ2VyTWFya2VySWNvbihtYXJrZXIuZ2V0RGF0YSgpKSxcbiAgICB9KVxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIuYWRkVG8odGhpcy5tYXApXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgLm9wZW5Qb3B1cCgpXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkTWFya2VyLmdldExhdExuZygpKVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLW1hcmtlcicsIG1hcmtlcilcbiAgfVxuICBwcml2YXRlIGNvbmZpZ0NsdXN0ZXJMYXllcigpIHtcbiAgICAvLyDlsZXnpLrogZrlkIjlm77lsYJcbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKClcbiAgICB0aGlzLmNsdXN0ZXJMYXllci5hZGRMYXllcnMoXG4gICAgICB0aGlzLm1hcmtlcnMubWFwKChtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIobS5nZXRMYXRMbmcoKSwge1xuICAgICAgICAgIGljb246IHRoaXMuZ2V0TWFya2VySWNvbihtLmdldERhdGEoKSksXG4gICAgICAgIH0pXG4gICAgICAgIG1hcmtlci5zZXREYXRhKG0uZ2V0RGF0YSgpKVxuICAgICAgICBtYXJrZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pXG4gICAgICAgIG1hcmtlci5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbWFya2VyXG4gICAgICB9KVxuICAgIClcbiAgICByZXR1cm4gdGhpcy5jbHVzdGVyTGF5ZXJcbiAgfVxuXG4gIC8qKiDmuLLmn5PkuLrng63lipvlm74gKi9cbiAgcHJpdmF0ZSBjb25maWdIZWF0TGF5ZXIoKSB7XG4gICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgY29uc3QgbGF0TG5nID0gbWFya2VyLmdldExhdExuZygpXG4gICAgICBsZXQgYWx0ID0gbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMuZGltZW5zaW9uQXR0cl1cbiAgICAgIGlmICh0eXBlb2YgYWx0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBhbHQgPSB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4XG4gICAgICB9XG4gICAgICBtYXJrZXIuc2V0TGF0TG5nKEwubGF0TG5nKGxhdExuZy5sYXQsIGxhdExuZy5sbmcsIGFsdCkpXG4gICAgfSlcbiAgICB0aGlzLmhlYXRMYXllciA9IEwuaGVhdExheWVyKFxuICAgICAgdGhpcy5tYXJrZXJzLm1hcCgoaXQpID0+IGl0LmdldExhdExuZygpKSxcbiAgICAgIHRoaXMub3B0aW9ucy5oZWF0T3B0aW9uc1xuICAgIClcbiAgICByZXR1cm4gdGhpcy5oZWF0TGF5ZXJcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGFyZ2VyTWFya2VySWNvbihkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWFya2VySWNvbihkYXRhLCB0cnVlKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXJrZXJJY29uKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIGZhbHNlKVxuICB9XG5cbiAgLyoqIOiOt+WPluW9k+WJjSBtYXJrZXIg6ZyA6KaB5bGV56S655qEIGljb24gKi9cbiAgcHJpdmF0ZSBfZ2V0TWFya2VySWNvbihcbiAgICBkYXRhOiBEYXRhTGlzdEl0ZW0sXG4gICAgaXNMYXJnZXI6IGJvb2xlYW5cbiAgKTogTC5JY29uIHwgTC5EaXZJY29uIHtcbiAgICBsZXQgaWNvblNpemUgPSB0aGlzLm9wdGlvbnMuaWNvblNpemVcbiAgICBsZXQgaWNvbkFuY2hvciA9IHRoaXMub3B0aW9ucy5pY29uQW5jaG9yXG4gICAgaWNvblNpemUgPSBpc0xhcmdlciA/IFtpY29uU2l6ZVswXSAqIDEuNSwgaWNvblNpemVbMV0gKiAxLjVdIDogaWNvblNpemVcbiAgICBpY29uQW5jaG9yID0gaXNMYXJnZXJcbiAgICAgID8gW2ljb25BbmNob3JbMF0gKiAxLjUsIGljb25BbmNob3JbMV0gKiAxLjVdXG4gICAgICA6IGljb25BbmNob3JcblxuICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3JcblxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICBjYXNlICdpbWFnZSc6IHtcbiAgICAgICAgcmV0dXJuIEwuaWNvbih7XG4gICAgICAgICAgaWNvblVybDogdGhpcy5vcHRpb25zLmljb25JbWFnZVVybCxcbiAgICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgICBpY29uQW5jaG9yLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgY2FzZSAnZm9udF9jbGFzcyc6XG4gICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgaHRtbDogdGhpcy5nZXRDdXN0b21JY29uSFRNTChkYXRhLCB7XG4gICAgICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgICAgIGljb25Db2xvcixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjbGFzc05hbWU6IGlzTGFyZ2VyID8gJ2xhcmdlLWRpdi1pY29uLW1hcmtlcicgOiAnJyxcbiAgICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgICBpY29uQW5jaG9yLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOWbvuagh+exu+Wei+S4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMuaWNvblR5cGV9XCJgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGdldEN1c3RvbUljb25IVE1MKFxuICAgIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgICBvcHRpb25zPzogSWNvblJlbmRlckZ1bmNPcHRpb25cbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmljb25SZW5kZXJlcikge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKGRhdGEsIG9wdGlvbnMpXG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlKSB7XG4gICAgICBjYXNlICdzaW5nbGUnOiB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICAgICAgLy8g5L2/55SoIGNsYXNzXG4gICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke29wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L2/55SoIHN2Z1xuICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uLXN5bWJvbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7dGhpcy5vcHRpb25zLmljb25TeW1ib2x9XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS9v+eUqCB1bmljb2RlXG4gICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7b3B0aW9ucy5pY29uQ29sb3J9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGV9XG4gICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgJ3NlZ21lbnRlZCc6IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgICAgICBjYXNlICdmb250X2NsYXNzJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLmdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGEpfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L2/55SoIHN2Z1xuICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uLXN5bWJvbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7dGhpcy5vcHRpb25zLmljb25TeW1ib2x9XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS9v+eUqCB1bmljb2RlXG4gICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKX07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3B0aW9ucy5pY29uVW5pY29kZX1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYHJlbmRlclBvaW50Q29sb3JUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGV9XCJgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGhcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5XG4gICAgbGV0IG1pblZhbCA9IEluZmluaXR5XG4gICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbClcbiAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKVxuICAgIH1cbiAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWxcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwXG4gIH1cbiAgcHJpdmF0ZSBnZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW1xuICAgICAgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcFxuICAgIF1cbiAgICByZXR1cm4gY29sb3JcbiAgfVxuICBwcml2YXRlIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgTC5Qb2x5Z29uIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfX2RhdGE6IERhdGFMaXN0SXRlbVxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXRsbmdzOlxuICAgICAgfCBMLkxhdExuZ0V4cHJlc3Npb25bXVxuICAgICAgfCBMLkxhdExuZ0V4cHJlc3Npb25bXVtdXG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdW11bXSxcbiAgICBvcHRpb25zPzogTC5Qb2x5bGluZU9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIobGF0bG5ncywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi9Qb2x5Z29uJ1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWdvbkxheWVyUmVuZGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuaW50ZXJmYWNlIFBvbHlnb25MYXllck9wdGlvbnMgZXh0ZW5kcyBMLlBvbHlsaW5lT3B0aW9ucyB7XG4gIHJlbmRlclBvbHlnb25Db2xvclR5cGU6IFBvbHlnb25MYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nXG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb25MYXllciB7XG4gIHByaXZhdGUgbWFwOiBMLk1hcFxuICBwcml2YXRlIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVxuICBwcml2YXRlIG9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnNcbiAgcHJpdmF0ZSBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgcHJpdmF0ZSBwb2x5Z29uczogUG9seWdvbltdXG4gIHByaXZhdGUgc2VnbWVudGVkTWluOiBudW1iZXJcbiAgcHJpdmF0ZSBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgLy8gcHJpdmF0ZSBmb2N1c2VkUG9seWdvbjogUG9seWdvblxuICBwcml2YXRlIGxheWVyOiBMLkxheWVyR3JvdXBcbiAgcHJpdmF0ZSBwb2x5Z29uTGF5ZXI6IEwuTGF5ZXJHcm91cFxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9ucyA9IHtcbiAgICAgIHJlbmRlclBvbHlnb25Db2xvclR5cGU6ICdzaW5nbGUnLFxuICAgIH1cbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcblxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgLy8gdGhpcy5mb2N1c2VkUG9seWdvbiA9IG51bGxcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuXG4gICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuICAgIHRoaXMuaW5pdFBvbHlnb25zKClcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWdvbkxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWdvbkxheWVyKClcbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHJpdmF0ZSBpbml0UG9seWdvbnMoKSB7XG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG5cbiAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdXG4gICAgICBjb25zdCBwb2x5Z29uID0gbmV3IFBvbHlnb24oKGxheWVyIGFzIEwuUG9seWdvbikuZ2V0TGF0TG5ncygpKVxuXG4gICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICBwb2x5Z29uLnNldERhdGEoZGF0YSlcblxuICAgICAgdGhpcy5wb2x5Z29ucy5wdXNoKHBvbHlnb24pXG4gICAgfSlcbiAgfVxuICBwcml2YXRlIGNvbmZpZ1BvbHlnb25MYXllcigpIHtcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICBwb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICB9KVxuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgY29sb3I6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKHBvbHlnb24uZ2V0RGF0YSgpKSxcbiAgICAgIH0pXG4gICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IFBvbHlnb24ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpXG4gICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihuZXdQb2x5Z29uKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWdvbkxheWVyXG4gIH1cbiAgcHJpdmF0ZSBwb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb246IFBvbHlnb24pIHtcbiAgICAvLyB0aGlzLmZvY3VzZWRQb2x5Z29uID0gcG9seWdvblxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlnb24nLCBwb2x5Z29uKVxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKGRhdGE6IERhdGFMaXN0SXRlbSk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbXG4gICAgICAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0gfSBmcm9tICcuLi9kZWZpbml0aW9ucydcblxuZXhwb3J0IHR5cGUgUG9seWxpbmVPcHRpb25zID0gTC5MYXRMbmdFeHByZXNzaW9uW10gfCBMLkxhdExuZ0V4cHJlc3Npb25bXVtdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZSBleHRlbmRzIEwuUG9seWxpbmUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKGxhdGxuZ3M6IFBvbHlsaW5lT3B0aW9ucywgb3B0aW9ucz86IEwuUG9seWxpbmVPcHRpb25zKSB7XG4gICAgc3VwZXIobGF0bG5ncywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlsaW5lLCB7IFBvbHlsaW5lT3B0aW9ucyB9IGZyb20gJy4vUG9seWxpbmUnXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBQb2x5bGluZUxheWVyUmVuZGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuaW50ZXJmYWNlIFBvbHlsaW5lTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nXG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlsaW5lTGF5ZXIge1xuICBwcml2YXRlIG1hcDogTC5NYXBcbiAgcHJpdmF0ZSBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW11cbiAgcHJpdmF0ZSBvcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9uc1xuICBwcml2YXRlIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICBwcml2YXRlIHBvbHlsaW5lczogUG9seWxpbmVbXVxuICBwcml2YXRlIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByaXZhdGUgc2VnbWVudGVkU3RlcDogbnVtYmVyXG4gIC8vIHByaXZhdGUgZm9jdXNlZFBvbHlsaW5lOiBQb2x5bGluZVxuICBwcml2YXRlIGxheWVyOiBMLkxheWVyR3JvdXBcbiAgcHJpdmF0ZSBwb2x5bGluZUxheWVyOiBMLkxheWVyR3JvdXBcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9ucyA9IHtcbiAgICAgIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICB9XG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMVxuICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbFxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG5cbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5pbml0UG9seWxpbmVzKClcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWxpbmVMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwcml2YXRlIGluaXRQb2x5bGluZXMoKSB7XG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG5cbiAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdXG4gICAgICBjb25zdCBwb2x5bGluZSA9IG5ldyBQb2x5bGluZShcbiAgICAgICAgKGxheWVyIGFzIEwuUG9seWxpbmUpLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZU9wdGlvbnNcbiAgICAgIClcblxuICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgcG9seWxpbmUuc2V0RGF0YShkYXRhKVxuXG4gICAgICB0aGlzLnBvbHlsaW5lcy5wdXNoKHBvbHlsaW5lKVxuICAgIH0pXG4gIH1cbiAgcHJpdmF0ZSBjb25maWdQb2x5bGluZUxheWVyKCkge1xuICAgIHRoaXMucG9seWxpbmVMYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIHBvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSlcbiAgICAgIH0pXG4gICAgICBjb25zdCBvcHRpb25zOiBMLlBvbHlsaW5lT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICBjb2xvcjogdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICB9KVxuICAgICAgY29uc3QgbmV3UG9seWxpbmUgPSBuZXcgUG9seWxpbmUoXG4gICAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZU9wdGlvbnMsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihuZXdQb2x5bGluZSlcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlsaW5lTGF5ZXJcbiAgfVxuICBwcml2YXRlIHBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lOiBQb2x5bGluZSkge1xuICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gcG9seWxpbmVcbiAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1wb2x5bGluZScsIHBvbHlsaW5lKVxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW1xuICAgICAgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcFxuICAgIF1cbiAgICByZXR1cm4gY29sb3JcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==