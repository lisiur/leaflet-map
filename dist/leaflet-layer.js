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
/*! exports provided: default, Marker, MarkersLayer, MarkersBufferLayer, Polyline, PolylinesLayer, PolylinesBufferLayer, Polygon, PolygonsLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _marker_Marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marker/Marker */ "./src/marker/Marker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return _marker_Marker__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _marker_MarkersLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./marker/MarkersLayer */ "./src/marker/MarkersLayer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkersLayer", function() { return _marker_MarkersLayer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _marker_MarkersBufferLayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marker/MarkersBufferLayer */ "./src/marker/MarkersBufferLayer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarkersBufferLayer", function() { return _marker_MarkersBufferLayer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _polyline_Polyline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyline/Polyline */ "./src/polyline/Polyline.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return _polyline_Polyline__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _polyline_PolylinesLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyline/PolylinesLayer */ "./src/polyline/PolylinesLayer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylinesLayer", function() { return _polyline_PolylinesLayer__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _polyline_PolylinesBufferLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polyline/PolylinesBufferLayer */ "./src/polyline/PolylinesBufferLayer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylinesBufferLayer", function() { return _polyline_PolylinesBufferLayer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _polygon_Polygon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./polygon/Polygon */ "./src/polygon/Polygon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return _polygon_Polygon__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _polygon_PolygonsLayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./polygon/PolygonsLayer */ "./src/polygon/PolygonsLayer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonsLayer", function() { return _polygon_PolygonsLayer__WEBPACK_IMPORTED_MODULE_7__["default"]; });









/* harmony default export */ __webpack_exports__["default"] = ({
    Marker: _marker_Marker__WEBPACK_IMPORTED_MODULE_0__["default"],
    MarkersLayer: _marker_MarkersLayer__WEBPACK_IMPORTED_MODULE_1__["default"],
    MarkersBufferLayer: _marker_MarkersBufferLayer__WEBPACK_IMPORTED_MODULE_2__["default"],
    Polyline: _polyline_Polyline__WEBPACK_IMPORTED_MODULE_3__["default"],
    PolylinesLayer: _polyline_PolylinesLayer__WEBPACK_IMPORTED_MODULE_4__["default"],
    PolylinesBufferLayer: _polyline_PolylinesBufferLayer__WEBPACK_IMPORTED_MODULE_5__["default"],
    Polygon: _polygon_Polygon__WEBPACK_IMPORTED_MODULE_6__["default"],
    PolygonsLayer: _polygon_PolygonsLayer__WEBPACK_IMPORTED_MODULE_7__["default"],
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
        this.type = 'markerBuffer';
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
        if (!this.visible) {
            return;
        }
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
            circleLayer.bindTooltip('' + marker.getData()[this.options.bufferTooltipAttr]);
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
            segmentedColors: ['#3388FF'],
            heatOptions: {
                max: 1,
            },
        };
        this.type = 'marker';
        this.map = map;
        this.dataList = dataList;
        this.options = Object.assign({}, defaultOptions, options);
        this.channelFunc = channelFunc;
        this.visible = true;
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
        // 缓存 segment 相关数据
        this.cacheSegmentParams();
        this.initMarkers();
    }
    draw(options) {
        this.visible = true;
        this.options = Object.assign(this.options, options);
        return this.redraw();
    }
    redraw() {
        if (!this.visible) {
            return;
        }
        if (this.layer) {
            this.layer.remove();
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
    fitBounds() {
        this.map.fitBounds(this.getBounds());
    }
    getBounds() {
        if (this.markers.length <= 0) {
            return this.map.getBounds();
        }
        return this.markers.map((marker) => [marker.getLatLng().lat, marker.getLatLng().lng]);
    }
    destroy() {
        // TODO: 将事件移除
        if (this.layer) {
            this.layer.remove();
        }
    }
    toggleVisible(visible) {
        this.visible = visible;
        if (!this.layer) {
            return;
        }
        if (visible) {
            this.map.addLayer(this.layer);
        }
        else {
            this.map.removeLayer(this.layer);
        }
    }
    changeColor(color) {
        this.options.iconColor = color;
        this.redraw();
    }
    changeIcon(iconUnicode) {
        this.options.iconUnicode = iconUnicode;
        this.redraw();
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
            if (this.layer === this.markerLayer) {
                this.map.removeLayer(this.markerLayer);
            }
        });
        this.map.on('zoomend', () => {
            if (this.layer === this.markerLayer) {
                this.map.addLayer(this.markerLayer);
            }
        });
        // 解决初次渲染不出图标问题
        setTimeout(() => {
            this.map.panTo(this.map.getCenter());
        });
        this.markerLayer = canvasIconLayer;
        return this.markerLayer;
    }
    getToolTipContent(data) {
        return '' + data[this.options.tooltipAttr];
    }
    initMarkers() {
        this.dataList.forEach((data) => {
            const layer = L.geoJSON(data.geometry).getLayers()[0];
            const marker = new _Marker__WEBPACK_IMPORTED_MODULE_0__["default"]([
                layer.getLatLng().lat,
                layer.getLatLng().lng,
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
            const dimensionAttr = this.options.heatOptions && this.options.heatOptions.dimensionAttr;
            let alt = marker.getData()[dimensionAttr];
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
                break;
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
                break;
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

/***/ "./src/polygon/PolygonsLayer.ts":
/*!**************************************!*\
  !*** ./src/polygon/PolygonsLayer.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolygonsLayer; });
/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Polygon */ "./src/polygon/Polygon.ts");

class PolygonsLayer {
    constructor(map, dataList, options, channelFunc) {
        const defaultOptions = {
            color: '#3388FF',
            renderPolygonColorType: 'single',
            segmentedColors: ['#3388FF'],
        };
        this.type = 'polygon';
        this.map = map;
        this.dataList = dataList;
        this.options = options;
        this.channelFunc = channelFunc;
        this.visible = true;
        this.polygons = [];
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
        if (!this.visible) {
            return;
        }
        if (this.layer) {
            this.layer.remove();
        }
        this.layer = this.configPolygonLayer();
        this.map.addLayer(this.layer);
        return this;
    }
    fitBounds() {
        this.map.fitBounds(this.getBounds());
    }
    getBounds() {
        if (this.polygons.length <= 0) {
            return this.map.getBounds();
        }
        return this.polygons.reduce((prev, curr) => prev.extend(curr.getBounds()), this.polygons[0].getBounds());
    }
    destroy() {
        if (this.layer) {
            this.layer.remove();
        }
    }
    toggleVisible(visible) {
        this.visible = visible;
        if (!this.layer) {
            return;
        }
        if (visible) {
            this.map.addLayer(this.layer);
        }
        else {
            this.map.removeLayer(this.layer);
        }
    }
    changeColor(color) {
        this.options.fillColor = color;
        this.redraw();
    }
    getToolTipContent(data) {
        return '' + data[this.options.tooltipAttr];
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
            let fillColor = this.options.fillColor;
            if (this.options.renderPolygonColorType === 'segmented') {
                fillColor = this.getSegmentedPolygonColor(polygon.getData());
            }
            const options = Object.assign({}, this.options, {
                fillColor,
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

/***/ "./src/polyline/PolylinesBufferLayer.ts":
/*!**********************************************!*\
  !*** ./src/polyline/PolylinesBufferLayer.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolylinesBufferLayer; });
/* harmony import */ var _PolylinesLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PolylinesLayer */ "./src/polyline/PolylinesLayer.ts");

class PolylinesBufferLayer extends _PolylinesLayer__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(map, dataList, options, channelFunc) {
        super(map, dataList, options, channelFunc);
        const defaultOptions = {
            renderPolylineColorType: 'single',
            segmentedColors: ['#3388FF'],
            corridor: 100,
            color: '#3388FF',
            opacity: 0.5,
        };
        this.type = 'polylineBuffer';
        this.map = map;
        this.dataList = dataList;
        this.options = options;
        this.channelFunc = channelFunc;
        this.visible = true;
        this.polylines = [];
        this.segmentedMin = Infinity;
        this.segmentedStep = 1;
        // this.focusedPolyline = null
        this.options = Object.assign({}, defaultOptions, options);
        this.initPolylines();
    }
    draw(options) {
        this.options = Object.assign(this.options, options);
        return this.redraw();
    }
    redraw() {
        if (!this.visible) {
            return;
        }
        if (this.layer) {
            this.layer.remove();
        }
        this.layer = this.configPolylineBufferLayer();
        this.map.addLayer(this.layer);
        return this;
    }
    fitBounds() {
        this.map.fitBounds(this.getBounds());
    }
    getBounds() {
        if (this.polylines.length <= 0) {
            return this.map.getBounds();
        }
        return this.polylines.reduce((prev, curr) => prev.extend(curr.getBounds()), this.polylines[0].getBounds());
    }
    changeColor(color) {
        this.options.color = color;
        this.redraw();
    }
    configPolylineBufferLayer() {
        this.polylineLayer = L.layerGroup();
        this.polylines.forEach((polyline) => {
            polyline.on('click', () => {
                this.polylineClickHandler(polyline);
            });
            const options = Object.assign({}, this.options, {
                color: this.options.renderPolylineColorType === 'single'
                    ? this.options.color
                    : this.getSegmentedPolylineColor(polyline.getData()),
            });
            const polylineBuffer = L.corridor(polyline.getLatLngs().map((latLng) => L.latLng([latLng.lng, latLng.lat])), options);
            if (this.options.tooltipAttr) {
                polylineBuffer.bindTooltip(this.getToolTipContent(polyline.getData()));
            }
            this.polylineLayer.addLayer(polylineBuffer);
        });
        return this.polylineLayer;
    }
}


/***/ }),

/***/ "./src/polyline/PolylinesLayer.ts":
/*!****************************************!*\
  !*** ./src/polyline/PolylinesLayer.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolylinesLayer; });
/* harmony import */ var _Polyline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Polyline */ "./src/polyline/Polyline.ts");

class PolylinesLayer {
    constructor(map, dataList, options, channelFunc) {
        const defaultOptions = {
            color: '#3388FF',
            renderPolylineColorType: 'single',
            segmentedColors: ['#3388FF'],
        };
        this.type = 'polyline';
        this.map = map;
        this.dataList = dataList;
        this.options = options;
        this.channelFunc = channelFunc;
        this.visible = true;
        this.polylines = [];
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
        if (!this.visible) {
            return;
        }
        if (this.layer) {
            this.layer.remove();
        }
        this.layer = this.configPolylineLayer();
        this.map.addLayer(this.layer);
        return this;
    }
    fitBounds() {
        this.map.fitBounds(this.getBounds());
    }
    getBounds() {
        if (this.polylines.length <= 0) {
            return this.map.getBounds();
        }
        return this.polylines.reduce((prev, curr) => prev.extend(curr.getBounds()), this.polylines[0].getBounds());
    }
    destroy() {
        if (this.layer) {
            this.layer.remove();
        }
    }
    toggleVisible(visible) {
        this.visible = visible;
        if (!this.layer) {
            return;
        }
        if (visible) {
            this.map.addLayer(this.layer);
        }
        else {
            this.map.removeLayer(this.layer);
        }
    }
    changeColor(color) {
        this.options.fillColor = color;
        this.redraw();
    }
    initPolylines() {
        this.dataList.forEach((data) => {
            this.cacheSegmentParams();
            const layer = L.geoJSON(data.geometry).getLayers()[0];
            let fillColor = this.options.fillColor;
            if (this.options.renderPolylineColorType === 'segmented') {
                fillColor = this.getSegmentedPolylineColor(data);
            }
            const polyline = new _Polyline__WEBPACK_IMPORTED_MODULE_0__["default"](layer.getLatLngs(), Object.assign({}, this.options, { fillColor }));
            // 将相关值绑定到 marker上
            polyline.setData(data);
            this.polylines.push(polyline);
        });
    }
    getSegmentedPolylineColor(data) {
        const val = data[this.options.segmentedAttr];
        const color = this.options.segmentedColors[(val - this.segmentedMin) / this.segmentedStep];
        return color;
    }
    polylineClickHandler(polyline) {
        // this.focusedPolyline = polyline
        this.channelFunc('on-click-polyline', polyline);
    }
    getToolTipContent(data) {
        return '' + data[this.options.tooltipAttr];
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
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9tYXJrZXIvTWFya2VyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvbWFya2VyL01hcmtlcnNCdWZmZXJMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5Z29uL1BvbHlnb24udHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5Z29uL1BvbHlnb25zTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5bGluZS9Qb2x5bGluZS50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0J1ZmZlckxheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURB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QUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzFELENBQUM7WUFDRixNQUFNLFdBQVcsR0FBRyxJQUFJLGlEQUFRLENBQzlCLFFBQVEsQ0FBQyxVQUFVLEVBQXFCLEVBQ3hDLE9BQU8sQ0FDUjtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxDQUFDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxhQUFhO0lBQzNCLENBQUM7SUFDTyxrQkFBa0I7UUFDeEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTTtRQUMzRCxJQUFJLE1BQU0sR0FBRyxDQUFDLFFBQVE7UUFDdEIsSUFBSSxNQUFNLEdBQUcsUUFBUTtRQUNyQixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7WUFDOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUMvQjtRQUNELE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxlQUFlO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTTtRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUk7SUFDM0IsQ0FBQztDQUNGIiwiZmlsZSI6ImxlYWZsZXQtbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxlYWZsZXRNYXBcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IE1hcmtlciBmcm9tICcuL21hcmtlci9NYXJrZXInXG5pbXBvcnQgTWFya2Vyc0xheWVyIGZyb20gJy4vbWFya2VyL01hcmtlcnNMYXllcidcbmltcG9ydCBNYXJrZXJzQnVmZmVyTGF5ZXIgZnJvbSAnLi9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyJ1xuaW1wb3J0IFBvbHlsaW5lIGZyb20gJy4vcG9seWxpbmUvUG9seWxpbmUnXG5pbXBvcnQgUG9seWxpbmVzTGF5ZXIgZnJvbSAnLi9wb2x5bGluZS9Qb2x5bGluZXNMYXllcidcbmltcG9ydCBQb2x5bGluZXNCdWZmZXJMYXllciBmcm9tICcuL3BvbHlsaW5lL1BvbHlsaW5lc0J1ZmZlckxheWVyJ1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi9wb2x5Z29uL1BvbHlnb24nXG5pbXBvcnQgUG9seWdvbnNMYXllciBmcm9tICcuL3BvbHlnb24vUG9seWdvbnNMYXllcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBNYXJrZXIsXG4gIE1hcmtlcnNMYXllcixcbiAgTWFya2Vyc0J1ZmZlckxheWVyLFxuICBQb2x5bGluZSxcbiAgUG9seWxpbmVzTGF5ZXIsXG4gIFBvbHlsaW5lc0J1ZmZlckxheWVyLFxuICBQb2x5Z29uLFxuICBQb2x5Z29uc0xheWVyLFxufVxuZXhwb3J0IHtcbiAgTWFya2VyLFxuICBNYXJrZXJzTGF5ZXIsXG4gIE1hcmtlcnNCdWZmZXJMYXllcixcbiAgUG9seWxpbmUsXG4gIFBvbHlsaW5lc0xheWVyLFxuICBQb2x5bGluZXNCdWZmZXJMYXllcixcbiAgUG9seWdvbixcbiAgUG9seWdvbnNMYXllcixcbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBMLk1hcmtlciB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX19kYXRhOiBEYXRhTGlzdEl0ZW1cbiAgY29uc3RydWN0b3IobGF0bG5nOiBMLkxhdExuZ0V4cHJlc3Npb24sIG9wdGlvbnM/OiBMLk1hcmtlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsYXRsbmcsIG9wdGlvbnMpXG4gIH1cbiAgcHVibGljIHNldERhdGEoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgdGhpcy5fX2RhdGEgPSBkYXRhXG4gIH1cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kYXRhXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBNYXJrZXJzTGF5ZXIsIHsgTWFya2Vyc0xheWVyT3B0aW9ucyB9IGZyb20gJy4vTWFya2Vyc0xheWVyJ1xuaW50ZXJmYWNlIE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMgZXh0ZW5kcyBNYXJrZXJzTGF5ZXJPcHRpb25zIHtcbiAgYnVmZmVyVG9vbHRpcEF0dHI6IHN0cmluZ1xuICBidWZmZXJPcHRpb25zOiBMLkNpcmNsZU1hcmtlck9wdGlvbnNcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlcnNCdWZmZXJMYXllciBleHRlbmRzIE1hcmtlcnNMYXllciB7XG4gIHB1YmxpYyBvcHRpb25zOiBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zXG4gIHByaXZhdGUgYnVmZmVyTGF5ZXI6IEwuTGF5ZXJHcm91cFxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYylcbiAgICB0aGlzLnR5cGUgPSAnbWFya2VyQnVmZmVyJ1xuICAgIGNvbnN0IGRlZmF1bHRCdWZmZXJPcHRpb25zOiBMLkNpcmNsZU1hcmtlck9wdGlvbnMgPSB7XG4gICAgICByYWRpdXM6IDEwMDAsXG4gICAgICBzdHJva2U6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgeyBidWZmZXJPcHRpb25zOiBkZWZhdWx0QnVmZmVyT3B0aW9ucyB9LFxuICAgICAgb3B0aW9uc1xuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuXG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5tYXJrZXJMYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9XG4gICAgaWYgKHRoaXMuYnVmZmVyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuYnVmZmVyTGF5ZXIpXG4gICAgfVxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSB0aGlzLmNvbmZpZ01hcmtlckxheWVyKClcbiAgICB0aGlzLmJ1ZmZlckxheWVyID0gdGhpcy5jb25maWdCdWZmZXJMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmJ1ZmZlckxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0J1ZmZlckxheWVyKCkge1xuICAgIGNvbnN0IGdyb3VwTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGNvbnN0IGNpcmNsZUxheWVyID0gTC5jaXJjbGUoXG4gICAgICAgIG1hcmtlci5nZXRMYXRMbmcoKSxcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnNcbiAgICAgIClcbiAgICAgIGNpcmNsZUxheWVyLmJpbmRUb29sdGlwKFxuICAgICAgICAnJyArIG1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLmJ1ZmZlclRvb2x0aXBBdHRyXVxuICAgICAgKVxuICAgICAgZ3JvdXBMYXllci5hZGRMYXllcihjaXJjbGVMYXllcilcbiAgICB9KVxuICAgIHJldHVybiBncm91cExheWVyXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBNYXJrZXIgZnJvbSAnLi9NYXJrZXInXG5cbi8qKiDmuLLmn5PmoLflvI8g5pWj54K5fOeDreWKm+WbviAqL1xudHlwZSBNYXJrZXJzTGF5ZXJSZW5kZXJUeXBlID0gJ3BvaW50JyB8ICdoZWF0JyB8ICdjbHVzdGVyJ1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgTWFya2Vyc0xheWVyUmVuZGVyUG9pbnRDb2xvclR5cGUgPSAnc2luZ2xlJyB8ICdzZWdtZW50ZWQnXG5cbi8qKiDmlaPngrnlm77moIfnsbvlnosgaWNvbmZvbnR8c3ZnfGltYWdlICovXG50eXBlIE1hcmtlcnNMYXllckljb25UeXBlID0gJ2ZvbnRfY2xhc3MnIHwgJ3VuaWNvZGUnIHwgJ3N5bWJvbCcgfCAnaW1hZ2UnXG5cbmludGVyZmFjZSBJY29uUmVuZGVyRnVuY09wdGlvbiB7XG4gIGljb25TaXplOiBbbnVtYmVyLCBudW1iZXJdXG4gIGljb25Db2xvcjogc3RyaW5nXG59XG50eXBlIEljb25SZW5kZXJGdW5jID0gKFxuICBkYXRhOiBEYXRhTGlzdEl0ZW0sXG4gIHBhcmFtczogSWNvblJlbmRlckZ1bmNPcHRpb25cbikgPT4gc3RyaW5nXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2Vyc0xheWVyT3B0aW9ucyB7XG4gIHJlbmRlclR5cGU6IE1hcmtlcnNMYXllclJlbmRlclR5cGVcbiAgcmVuZGVyUG9pbnRDb2xvclR5cGU6IE1hcmtlcnNMYXllclJlbmRlclBvaW50Q29sb3JUeXBlXG4gIGljb25UeXBlOiBNYXJrZXJzTGF5ZXJJY29uVHlwZVxuXG4gIGljb25JbWFnZVVybD86IHN0cmluZ1xuICBpY29uU2l6ZT86IFtudW1iZXIsIG51bWJlcl1cbiAgaWNvbkNsYXNzPzogc3RyaW5nXG4gIGljb25Vbmljb2RlPzogc3RyaW5nXG4gIGljb25TeW1ib2w/OiBzdHJpbmdcbiAgaWNvbkNvbG9yPzogc3RyaW5nXG4gIGljb25BbmNob3I/OiBbbnVtYmVyLCBudW1iZXJdXG4gIGljb25SZW5kZXJlcj86IEljb25SZW5kZXJGdW5jXG5cbiAgLyoqIHBvcHVwIOWxleekuuWtl+autSAqL1xuICBwb3B1cEF0dHI/OiBzdHJpbmdcbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxuXG4gIGhlYXRPcHRpb25zPzogTWFya2Vyc0hlYXRMYXllck9wdGlvbnNcbiAgY2x1c3Rlck9wdGlvbnM/OiBMLk1hcmtlcnNDbHVzdGVyT3B0aW9uc1xufVxuXG4vKiog6L2s5YyW5Li654Ot5Yqb5Zu+55qEIG9wdGlvbnMgKi9cbmludGVyZmFjZSBNYXJrZXJzSGVhdExheWVyT3B0aW9ucyBleHRlbmRzIEwuSGVhdExheWVyT3B0aW9ucyB7XG4gIGRpbWVuc2lvbkF0dHI/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Vyc0xheWVyIHtcbiAgcHVibGljIG1hcDogTC5NYXBcbiAgcHVibGljIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVxuICBwdWJsaWMgb3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9uc1xuICBwdWJsaWMgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG5cbiAgcHVibGljIHR5cGU6IHN0cmluZ1xuXG4gIHByb3RlY3RlZCBtYXJrZXJzOiBNYXJrZXJbXVxuXG4gIHByb3RlY3RlZCBmb2N1c2VkTWFya2VyOiBNYXJrZXJcbiAgcHJvdGVjdGVkIGhvdmVyZWRNYXJrZXI6IE1hcmtlclxuICAvKiog6ZyA6KaB5bGV56S655qE5pS+5aSn55qE5Zu+5qCHICovXG4gIHByb3RlY3RlZCBmb2N1c2VkRGlzcGxheU1hcmtlcjogTWFya2VyXG4gIHByb3RlY3RlZCBtYXJrZXJMYXllcjogTC5DYW52YXNJY29uTGF5ZXJcblxuICBwcm90ZWN0ZWQgdmlzaWJsZTogYm9vbGVhblxuICBwcm90ZWN0ZWQgbGF5ZXI6XG4gICAgfCBMLkNhbnZhc0ljb25MYXllclxuICAgIHwgTC5IZWF0TGF5ZXJcbiAgICB8IEwuTWFya2Vyc0NsdXN0ZXJcbiAgICB8IEwuTGF5ZXJHcm91cFxuICBwcml2YXRlIGhlYXRMYXllcjogTC5IZWF0TGF5ZXJcbiAgcHJpdmF0ZSBjbHVzdGVyTGF5ZXI6IEwuTWFya2Vyc0NsdXN0ZXJcblxuICBwcml2YXRlIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByaXZhdGUgc2VnbWVudGVkU3RlcDogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zID0ge1xuICAgICAgcmVuZGVyVHlwZTogJ3BvaW50JyxcbiAgICAgIHJlbmRlclBvaW50Q29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgIGljb25UeXBlOiAndW5pY29kZScsXG4gICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4gICAgICBpY29uQ2xhc3M6ICdpY29uZm9udCcsXG4gICAgICBpY29uQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIGljb25BbmNob3I6IFsxMCwgMTBdLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIGhlYXRPcHRpb25zOiB7XG4gICAgICAgIG1heDogMSxcbiAgICAgIH0sXG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdtYXJrZXInXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcblxuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLmxheWVyID0gbnVsbFxuICAgIHRoaXMuZm9jdXNlZE1hcmtlciA9IG51bGxcbiAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlciA9IG51bGxcbiAgICB0aGlzLm1hcmtlcnMgPSBbXVxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBudWxsXG4gICAgdGhpcy5oZWF0TGF5ZXIgPSBudWxsXG4gICAgdGhpcy5jbHVzdGVyTGF5ZXIgPSBudWxsXG5cbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMVxuXG4gICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuICAgIHRoaXMuaW5pdE1hcmtlcnMoKVxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBNYXJrZXJzTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUpIHtcbiAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdjbHVzdGVyJzoge1xuICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnaGVhdCc6IHtcbiAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnSGVhdExheWVyKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyVHlwZX1cImApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zLCByZWRyYXcgPSBmYWxzZSkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIGlmIChyZWRyYXcpIHtcbiAgICAgIHRoaXMucmVkcmF3KClcbiAgICB9XG4gIH1cbiAgcHVibGljIGZpdEJvdW5kcygpIHtcbiAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5nZXRCb3VuZHMoKSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcmtlcnMubWFwKFxuICAgICAgKG1hcmtlcikgPT5cbiAgICAgICAgW21hcmtlci5nZXRMYXRMbmcoKS5sYXQsIG1hcmtlci5nZXRMYXRMbmcoKS5sbmddIGFzIFtudW1iZXIsIG51bWJlcl1cbiAgICApXG4gIH1cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgLy8gVE9ETzog5bCG5LqL5Lu256e76ZmkXG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gIH1cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIGNoYW5nZUljb24oaWNvblVuaWNvZGU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5pY29uVW5pY29kZSA9IGljb25Vbmljb2RlXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIC8qKiDmuLLmn5PkuLrmlaPngrnlm74gKi9cbiAgcHJvdGVjdGVkIGNvbmZpZ01hcmtlckxheWVyKCkge1xuICAgIGNvbnN0IGNhbnZhc0ljb25MYXllciA9IEwuY2FudmFzSWNvbkxheWVyKHt9KS5hZGRUbyh0aGlzLm1hcClcbiAgICAvLyDmt7vliqDngrnlh7vkuovku7ZcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25DbGlja0xpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciBhcyBNYXJrZXIpXG4gICAgfSlcbiAgICAvLyDmt7vliqAgaG92ZXIg5LqL5Lu2XG4gICAgY2FudmFzSWNvbkxheWVyLmFkZE9uSG92ZXJMaXN0ZW5lcigoXywgW3sgZGF0YTogbWFya2VyIH1dKSA9PiB7XG4gICAgICAvLyDkuYvliY3mnIkgaG92ZXIg55qE5YWz6ZetIHRvb2x0aXBcbiAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIpIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmNsb3NlVG9vbHRpcCgpXG4gICAgICB9XG4gICAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBtYXJrZXIgYXMgTWFya2VyXG5cbiAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0VG9vbHRpcCgpKSB7XG4gICAgICAgIC8vIOWmguaenOW3sue7j+iuvue9riB0b29sdGlwIOebtOaOpeWxleekuiB0b29sdGlwXG4gICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5vcGVuVG9vbHRpcCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlkKbliJnnu5HlrpogdG9vbHRpcCDlubblsZXnpLpcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICcnICsgdGhpcy5ob3ZlcmVkTWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkTWFya2Vycyh0aGlzLm1hcmtlcnMpXG5cbiAgICB0aGlzLm1hcC5vbignem9vbXN0YXJ0JywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubGF5ZXIgPT09IHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMubWFwLm9uKCd6b29tZW5kJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubGF5ZXIgPT09IHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g6Kej5Yaz5Yid5qyh5riy5p+T5LiN5Ye65Zu+5qCH6Zeu6aKYXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLm1hcC5nZXRDZW50ZXIoKSlcbiAgICB9KVxuXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IGNhbnZhc0ljb25MYXllclxuICAgIHJldHVybiB0aGlzLm1hcmtlckxheWVyXG4gIH1cbiAgcHJvdGVjdGVkIGdldFRvb2xUaXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXVxuICB9XG4gIHByaXZhdGUgaW5pdE1hcmtlcnMoKSB7XG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuXG4gICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKFxuICAgICAgICBbXG4gICAgICAgICAgKGxheWVyIGFzIEwuTWFya2VyKS5nZXRMYXRMbmcoKS5sYXQsXG4gICAgICAgICAgKGxheWVyIGFzIEwuTWFya2VyKS5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgIF0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiB0aGlzLmdldE1hcmtlckljb24oZGF0YSksXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgbWFya2VyLnNldERhdGEoZGF0YSlcblxuICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKVxuICAgIH0pXG4gIH1cbiAgLy8g5aSE55CGIG1hcmtlciDngrnlh7vkuovku7ZcbiAgcHJpdmF0ZSBtYXJrZXJDbGlja0hhbmRsZXIobWFya2VyOiBNYXJrZXIpIHtcbiAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBtYXJrZXJcbiAgICAvLyDliKDpmaTliY3kuIDkuKrmlL7lpKflm77moIdcbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmVGcm9tKHRoaXMubWFwKVxuICAgIH1cbiAgICAvLyDnlJ/miJDlvZPliY3mlL7lpKflm77moIdcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbmV3IE1hcmtlcihtYXJrZXIuZ2V0TGF0TG5nKCksIHtcbiAgICAgIGljb246IHRoaXMuZ2V0TGFyZ2VyTWFya2VySWNvbihtYXJrZXIuZ2V0RGF0YSgpKSxcbiAgICB9KVxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIuYWRkVG8odGhpcy5tYXApXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgLm9wZW5Qb3B1cCgpXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkTWFya2VyLmdldExhdExuZygpKVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLW1hcmtlcicsIG1hcmtlcilcbiAgfVxuICBwcml2YXRlIGNvbmZpZ0NsdXN0ZXJMYXllcigpIHtcbiAgICAvLyDlsZXnpLrogZrlkIjlm77lsYJcbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKClcbiAgICB0aGlzLmNsdXN0ZXJMYXllci5hZGRMYXllcnMoXG4gICAgICB0aGlzLm1hcmtlcnMubWFwKChtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIobS5nZXRMYXRMbmcoKSwge1xuICAgICAgICAgIGljb246IHRoaXMuZ2V0TWFya2VySWNvbihtLmdldERhdGEoKSksXG4gICAgICAgIH0pXG4gICAgICAgIG1hcmtlci5zZXREYXRhKG0uZ2V0RGF0YSgpKVxuICAgICAgICBtYXJrZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pXG4gICAgICAgIG1hcmtlci5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbWFya2VyXG4gICAgICB9KVxuICAgIClcbiAgICByZXR1cm4gdGhpcy5jbHVzdGVyTGF5ZXJcbiAgfVxuXG4gIC8qKiDmuLLmn5PkuLrng63lipvlm74gKi9cbiAgcHJpdmF0ZSBjb25maWdIZWF0TGF5ZXIoKSB7XG4gICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgY29uc3QgbGF0TG5nID0gbWFya2VyLmdldExhdExuZygpXG4gICAgICBjb25zdCBkaW1lbnNpb25BdHRyID1cbiAgICAgICAgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zICYmIHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucy5kaW1lbnNpb25BdHRyXG4gICAgICBsZXQgYWx0ID0gbWFya2VyLmdldERhdGEoKVtkaW1lbnNpb25BdHRyXVxuICAgICAgaWYgKHR5cGVvZiBhbHQgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGFsdCA9IHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucy5tYXhcbiAgICAgIH1cbiAgICAgIG1hcmtlci5zZXRMYXRMbmcoTC5sYXRMbmcobGF0TG5nLmxhdCwgbGF0TG5nLmxuZywgYWx0KSlcbiAgICB9KVxuICAgIHRoaXMuaGVhdExheWVyID0gTC5oZWF0TGF5ZXIoXG4gICAgICB0aGlzLm1hcmtlcnMubWFwKChpdCkgPT4gaXQuZ2V0TGF0TG5nKCkpLFxuICAgICAgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmhlYXRMYXllclxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYXJnZXJNYXJrZXJJY29uKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIHRydWUpXG4gIH1cblxuICBwcml2YXRlIGdldE1hcmtlckljb24oZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgZmFsc2UpXG4gIH1cblxuICAvKiog6I635Y+W5b2T5YmNIG1hcmtlciDpnIDopoHlsZXnpLrnmoQgaWNvbiAqL1xuICBwcml2YXRlIF9nZXRNYXJrZXJJY29uKFxuICAgIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgICBpc0xhcmdlcjogYm9vbGVhblxuICApOiBMLkljb24gfCBMLkRpdkljb24ge1xuICAgIGxldCBpY29uU2l6ZSA9IHRoaXMub3B0aW9ucy5pY29uU2l6ZVxuICAgIGxldCBpY29uQW5jaG9yID0gdGhpcy5vcHRpb25zLmljb25BbmNob3JcbiAgICBpY29uU2l6ZSA9IGlzTGFyZ2VyID8gW2ljb25TaXplWzBdICogMS41LCBpY29uU2l6ZVsxXSAqIDEuNV0gOiBpY29uU2l6ZVxuICAgIGljb25BbmNob3IgPSBpc0xhcmdlclxuICAgICAgPyBbaWNvbkFuY2hvclswXSAqIDEuNSwgaWNvbkFuY2hvclsxXSAqIDEuNV1cbiAgICAgIDogaWNvbkFuY2hvclxuXG4gICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvclxuXG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgIGNhc2UgJ2ltYWdlJzoge1xuICAgICAgICByZXR1cm4gTC5pY29uKHtcbiAgICAgICAgICBpY29uVXJsOiB0aGlzLm9wdGlvbnMuaWNvbkltYWdlVXJsLFxuICAgICAgICAgIGljb25TaXplLFxuICAgICAgICAgIGljb25BbmNob3IsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBjYXNlICdmb250X2NsYXNzJzpcbiAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgICAgICBodG1sOiB0aGlzLmdldEN1c3RvbUljb25IVE1MKGRhdGEsIHtcbiAgICAgICAgICAgIGljb25TaXplLFxuICAgICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXJnZXIgPyAnbGFyZ2UtZGl2LWljb24tbWFya2VyJyA6ICcnLFxuICAgICAgICAgIGljb25TaXplLFxuICAgICAgICAgIGljb25BbmNob3IsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihg5Zu+5qCH57G75Z6L5LiN5pSv5oyBXCIke3RoaXMub3B0aW9ucy5pY29uVHlwZX1cImApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgZ2V0Q3VzdG9tSWNvbkhUTUwoXG4gICAgZGF0YTogRGF0YUxpc3RJdGVtLFxuICAgIG9wdGlvbnM/OiBJY29uUmVuZGVyRnVuY09wdGlvblxuICApOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIoZGF0YSwgb3B0aW9ucylcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGUpIHtcbiAgICAgIGNhc2UgJ3NpbmdsZSc6IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgICAgICBjYXNlICdmb250X2NsYXNzJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7b3B0aW9ucy5pY29uQ29sb3J9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkvb/nlKggc3ZnXG4gICAgICAgICAgY2FzZSAnc3ltYm9sJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24tc3ltYm9sXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLm9wdGlvbnMuaWNvblN5bWJvbH1cIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L2/55SoIHVuaWNvZGVcbiAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHtvcHRpb25zLmljb25Db2xvcn07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3B0aW9ucy5pY29uVW5pY29kZX1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnc2VnbWVudGVkJzoge1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgICAgIC8vIOS9v+eUqCBjbGFzc1xuICAgICAgICAgIGNhc2UgJ2ZvbnRfY2xhc3MnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSl9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkvb/nlKggc3ZnXG4gICAgICAgICAgY2FzZSAnc3ltYm9sJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24tc3ltYm9sXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLm9wdGlvbnMuaWNvblN5bWJvbH1cIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L2/55SoIHVuaWNvZGVcbiAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLmdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGEpfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5vcHRpb25zLmljb25Vbmljb2RlfVxuICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgcmVuZGVyUG9pbnRDb2xvclR5cGUg5LiN5pSv5oyBXCIke3RoaXMub3B0aW9ucy5yZW5kZXJQb2ludENvbG9yVHlwZX1cImBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aFxuICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHlcbiAgICBsZXQgbWluVmFsID0gSW5maW5pdHlcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKVxuICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpXG4gICAgfVxuICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGhcbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IG1pblZhbFxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXBcbiAgfVxuICBwcml2YXRlIGdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGE6IERhdGFMaXN0SXRlbSk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbXG4gICAgICAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByaXZhdGUgZ2V0UG9wdXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWBcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBMLlBvbHlnb24ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxhdGxuZ3M6XG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdXG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdW11cbiAgICAgIHwgTC5MYXRMbmdFeHByZXNzaW9uW11bXVtdLFxuICAgIG9wdGlvbnM/OiBMLlBvbHlsaW5lT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKVxuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHRoaXMuX19kYXRhID0gZGF0YVxuICB9XG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YVxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgUG9seWdvbiBmcm9tICcuL1BvbHlnb24nXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBQb2x5Z29uTGF5ZXJSZW5kZXJDb2xvclR5cGUgPSAnc2luZ2xlJyB8ICdzZWdtZW50ZWQnXG5pbnRlcmZhY2UgUG9seWdvbkxheWVyT3B0aW9ucyBleHRlbmRzIEwuUG9seWxpbmVPcHRpb25zIHtcbiAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogUG9seWdvbkxheWVyUmVuZGVyQ29sb3JUeXBlXG5cbiAgLyoqIHBvcHVwIOWxleekuuWtl+autSAqL1xuICBwb3B1cEF0dHI/OiBzdHJpbmdcbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbnNMYXllciB7XG4gIHB1YmxpYyB0eXBlOiBzdHJpbmdcblxuICBwcm90ZWN0ZWQgdmlzaWJsZTogYm9vbGVhblxuICBwcm90ZWN0ZWQgbGF5ZXI6IEwuTGF5ZXJHcm91cFxuXG4gIHByaXZhdGUgbWFwOiBMLk1hcFxuICBwcml2YXRlIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVxuICBwcml2YXRlIG9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnNcbiAgcHJpdmF0ZSBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgcHJpdmF0ZSBwb2x5Z29uczogUG9seWdvbltdXG4gIHByaXZhdGUgc2VnbWVudGVkTWluOiBudW1iZXJcbiAgcHJpdmF0ZSBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgLy8gcHJpdmF0ZSBmb2N1c2VkUG9seWdvbjogUG9seWdvblxuICBwcml2YXRlIHBvbHlnb25MYXllcjogTC5MYXllckdyb3VwXG5cbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMgPSB7XG4gICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncG9seWdvbidcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcblxuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLnBvbHlnb25zID0gW11cbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMVxuICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBudWxsXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcblxuICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKClcbiAgICB0aGlzLmluaXRQb2x5Z29ucygpXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IFBvbHlnb25MYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5sYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdQb2x5Z29uTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKVxuICB9XG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5wb2x5Z29ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25zLnJlZHVjZShcbiAgICAgIChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSxcbiAgICAgIHRoaXMucG9seWdvbnNbMF0uZ2V0Qm91bmRzKClcbiAgICApXG4gIH1cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gIH1cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsbENvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHJvdGVjdGVkIGdldFRvb2xUaXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXVxuICB9XG4gIHByaXZhdGUgaW5pdFBvbHlnb25zKCkge1xuICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuXG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuICAgICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKChsYXllciBhcyBMLlBvbHlnb24pLmdldExhdExuZ3MoKSlcblxuICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgcG9seWdvbi5zZXREYXRhKGRhdGEpXG5cbiAgICAgIHRoaXMucG9seWdvbnMucHVzaChwb2x5Z29uKVxuICAgIH0pXG4gIH1cbiAgcHJpdmF0ZSBjb25maWdQb2x5Z29uTGF5ZXIoKSB7XG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgcG9seWdvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uKVxuICAgICAgfSlcbiAgICAgIGxldCBmaWxsQ29sb3IgPSB0aGlzLm9wdGlvbnMuZmlsbENvbG9yXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlnb25Db2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICAgIGZpbGxDb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKHBvbHlnb24uZ2V0RGF0YSgpKVxuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgZmlsbENvbG9yLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IG5ld1BvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucylcbiAgICAgIHRoaXMucG9seWdvbkxheWVyLmFkZExheWVyKG5ld1BvbHlnb24pXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5wb2x5Z29uTGF5ZXJcbiAgfVxuICBwcml2YXRlIHBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbjogUG9seWdvbikge1xuICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBwb2x5Z29uXG4gICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stcG9seWdvbicsIHBvbHlnb24pXG4gIH1cbiAgcHJpdmF0ZSBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGhcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5XG4gICAgbGV0IG1pblZhbCA9IEluZmluaXR5XG4gICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbClcbiAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKVxuICAgIH1cbiAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWxcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwXG4gIH1cbiAgcHJpdmF0ZSBnZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgICh2YWwgLSB0aGlzLnNlZ21lbnRlZE1pbikgLyB0aGlzLnNlZ21lbnRlZFN0ZXBcbiAgICBdXG4gICAgcmV0dXJuIGNvbG9yXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgdHlwZSBQb2x5bGluZU9wdGlvbnMgPSBMLkxhdExuZ0V4cHJlc3Npb25bXSB8IEwuTGF0TG5nRXhwcmVzc2lvbltdW11cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlsaW5lIGV4dGVuZHMgTC5Qb2x5bGluZSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX19kYXRhOiBEYXRhTGlzdEl0ZW1cbiAgY29uc3RydWN0b3IobGF0bG5nczogUG9seWxpbmVPcHRpb25zLCBvcHRpb25zPzogTC5Qb2x5bGluZU9wdGlvbnMpIHtcbiAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKVxuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHRoaXMuX19kYXRhID0gZGF0YVxuICB9XG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YVxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgUG9seWxpbmVzTGF5ZXIgZnJvbSAnLi9Qb2x5bGluZXNMYXllcidcblxuLyoqIOa4suafk+minOiJsuagt+W8jyDljZXoibJ85YiG5q61ICovXG50eXBlIFBvbHlsaW5lTGF5ZXJSZW5kZXJDb2xvclR5cGUgPSAnc2luZ2xlJyB8ICdzZWdtZW50ZWQnXG5pbnRlcmZhY2UgUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnMgZXh0ZW5kcyBMLkNvcnJpZG9yT3B0aW9ucyB7XG4gIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiBQb2x5bGluZUxheWVyUmVuZGVyQ29sb3JUeXBlXG5cbiAgLyoqIHBvcHVwIOWxleekuuWtl+autSAqL1xuICBwb3B1cEF0dHI/OiBzdHJpbmdcbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWxpbmVzQnVmZmVyTGF5ZXIgZXh0ZW5kcyBQb2x5bGluZXNMYXllciB7XG4gIHB1YmxpYyB0eXBlOiBzdHJpbmdcbiAgcHJvdGVjdGVkIG9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYylcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnMgPSB7XG4gICAgICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgY29ycmlkb3I6IDEwMCxcbiAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICBvcGFjaXR5OiAwLjUsXG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdwb2x5bGluZUJ1ZmZlcidcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcblxuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLnBvbHlsaW5lcyA9IFtdXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBJbmZpbml0eVxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDFcbiAgICAvLyB0aGlzLmZvY3VzZWRQb2x5bGluZSA9IG51bGxcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWxpbmVCdWZmZXJMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCkpXG4gIH1cbiAgcHVibGljIGdldEJvdW5kcygpOiBMLkxhdExuZ0JvdW5kc0V4cHJlc3Npb24ge1xuICAgIGlmICh0aGlzLnBvbHlsaW5lcy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvbHlsaW5lcy5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksXG4gICAgICB0aGlzLnBvbHlsaW5lc1swXS5nZXRCb3VuZHMoKVxuICAgIClcbiAgfVxuICBwdWJsaWMgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5jb2xvciA9IGNvbG9yXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHByaXZhdGUgY29uZmlnUG9seWxpbmVCdWZmZXJMYXllcigpIHtcbiAgICB0aGlzLnBvbHlsaW5lTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICBwb2x5bGluZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUpXG4gICAgICB9KVxuICAgICAgY29uc3Qgb3B0aW9uczogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgICB7XG4gICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmVuZGVyUG9seWxpbmVDb2xvclR5cGUgPT09ICdzaW5nbGUnXG4gICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgICAgICAgICAgIDogdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgY29uc3QgcG9seWxpbmVCdWZmZXIgPSBMLmNvcnJpZG9yKFxuICAgICAgICAocG9seWxpbmUuZ2V0TGF0TG5ncygpIGFzIEwuTGF0TG5nW10pLm1hcCgobGF0TG5nKSA9PlxuICAgICAgICAgIEwubGF0TG5nKFtsYXRMbmcubG5nLCBsYXRMbmcubGF0XSlcbiAgICAgICAgKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICBwb2x5bGluZUJ1ZmZlci5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KHBvbHlsaW5lLmdldERhdGEoKSkpXG4gICAgICB9XG4gICAgICB0aGlzLnBvbHlsaW5lTGF5ZXIuYWRkTGF5ZXIocG9seWxpbmVCdWZmZXIpXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5wb2x5bGluZUxheWVyXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBQb2x5bGluZSwgeyBQb2x5bGluZU9wdGlvbnMgfSBmcm9tICcuL1BvbHlsaW5lJ1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbmludGVyZmFjZSBQb2x5bGluZUxheWVyT3B0aW9ucyBleHRlbmRzIEwuUG9seWxpbmVPcHRpb25zIHtcbiAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6IFBvbHlsaW5lTGF5ZXJSZW5kZXJDb2xvclR5cGVcblxuICAvKiogcG9wdXAg5bGV56S65a2X5q61ICovXG4gIHBvcHVwQXR0cj86IHN0cmluZ1xuICAvKiogdG9vbHRpcCDlsZXnpLrlrZfmrrUgKi9cbiAgdG9vbHRpcEF0dHI/OiBzdHJpbmdcblxuICBvcGFjaXR5PzogbnVtYmVyXG5cbiAgLyoqIOWIhuautea4suafk+e7n+iuoeWtl+autSAqL1xuICBzZWdtZW50ZWRBdHRyPzogc3RyaW5nXG4gIHNlZ21lbnRlZENvbG9ycz86IHN0cmluZ1tdXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZXNMYXllciB7XG4gIHB1YmxpYyB0eXBlOiBzdHJpbmdcblxuICBwcm90ZWN0ZWQgdmlzaWJsZTogYm9vbGVhblxuICBwcm90ZWN0ZWQgbGF5ZXI6IEwuTGF5ZXJHcm91cFxuXG4gIHByb3RlY3RlZCBtYXA6IEwuTWFwXG4gIHByb3RlY3RlZCBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW11cbiAgcHJvdGVjdGVkIG9wdGlvbnM6IFBvbHlsaW5lTGF5ZXJPcHRpb25zXG4gIHByb3RlY3RlZCBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgcHJvdGVjdGVkIHBvbHlsaW5lczogUG9seWxpbmVbXVxuICBwcm90ZWN0ZWQgc2VnbWVudGVkTWluOiBudW1iZXJcbiAgcHJvdGVjdGVkIHNlZ21lbnRlZFN0ZXA6IG51bWJlclxuICAvLyBwcml2YXRlIGZvY3VzZWRQb2x5bGluZTogUG9seWxpbmVcbiAgcHJvdGVjdGVkIHBvbHlsaW5lTGF5ZXI6IEwuTGF5ZXJHcm91cFxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBvbHlsaW5lTGF5ZXJPcHRpb25zID0ge1xuICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdwb2x5bGluZSdcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcblxuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLnBvbHlsaW5lcyA9IFtdXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBJbmZpbml0eVxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDFcbiAgICAvLyB0aGlzLmZvY3VzZWRQb2x5bGluZSA9IG51bGxcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuXG4gICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IFBvbHlsaW5lTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWxpbmVMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCkpXG4gIH1cbiAgcHVibGljIGdldEJvdW5kcygpOiBMLkxhdExuZ0JvdW5kc0V4cHJlc3Npb24ge1xuICAgIGlmICh0aGlzLnBvbHlsaW5lcy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvbHlsaW5lcy5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksXG4gICAgICB0aGlzLnBvbHlsaW5lc1swXS5nZXRCb3VuZHMoKVxuICAgIClcbiAgfVxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5sYXllci5yZW1vdmUoKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgdG9nZ2xlVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZVxuICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5maWxsQ29sb3IgPSBjb2xvclxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdFBvbHlsaW5lcygpIHtcbiAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKClcblxuICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF1cbiAgICAgIGxldCBmaWxsQ29sb3IgPSB0aGlzLm9wdGlvbnMuZmlsbENvbG9yXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICBmaWxsQ29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKFxuICAgICAgICAobGF5ZXIgYXMgTC5Qb2x5bGluZSkuZ2V0TGF0TG5ncygpIGFzIFBvbHlsaW5lT3B0aW9ucyxcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7IGZpbGxDb2xvciB9KVxuICAgICAgKVxuXG4gICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICBwb2x5bGluZS5zZXREYXRhKGRhdGEpXG5cbiAgICAgIHRoaXMucG9seWxpbmVzLnB1c2gocG9seWxpbmUpXG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW1xuICAgICAgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcFxuICAgIF1cbiAgICByZXR1cm4gY29sb3JcbiAgfVxuICBwcm90ZWN0ZWQgcG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmU6IFBvbHlsaW5lKSB7XG4gICAgLy8gdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBwb2x5bGluZVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlsaW5lJywgcG9seWxpbmUpXG4gIH1cbiAgcHJvdGVjdGVkIGdldFRvb2xUaXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXVxuICB9XG4gIHByaXZhdGUgY29uZmlnUG9seWxpbmVMYXllcigpIHtcbiAgICB0aGlzLnBvbHlsaW5lTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICBwb2x5bGluZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUpXG4gICAgICB9KVxuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgY29sb3I6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IG5ld1BvbHlsaW5lID0gbmV3IFBvbHlsaW5lKFxuICAgICAgICBwb2x5bGluZS5nZXRMYXRMbmdzKCkgYXMgUG9seWxpbmVPcHRpb25zLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgICB0aGlzLnBvbHlsaW5lTGF5ZXIuYWRkTGF5ZXIobmV3UG9seWxpbmUpXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5wb2x5bGluZUxheWVyXG4gIH1cbiAgcHJpdmF0ZSBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGhcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5XG4gICAgbGV0IG1pblZhbCA9IEluZmluaXR5XG4gICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbClcbiAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKVxuICAgIH1cbiAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWxcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=