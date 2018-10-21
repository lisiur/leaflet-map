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



/* harmony default export */ __webpack_exports__["default"] = ({
    Marker: _marker_Marker__WEBPACK_IMPORTED_MODULE_0__["default"],
    MarkersLayer: _marker_MarkersLayer__WEBPACK_IMPORTED_MODULE_1__["default"],
    MarkersBufferLayer: _marker_MarkersBufferLayer__WEBPACK_IMPORTED_MODULE_2__["default"],
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
        this.data = data;
    }
    getData() {
        return this.data;
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
            let marker = layer;
            marker = new _Marker__WEBPACK_IMPORTED_MODULE_0__["default"]([marker.getLatLng().lng, marker.getLatLng().lat], {
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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9tYXJrZXIvTWFya2VyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvbWFya2VyL01hcmtlcnNCdWZmZXJMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFB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RUFBRSxHQUFHLENBQUM7WUFDOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUMvQjtRQUNELE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxlQUFlO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTTtRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUk7SUFDM0IsQ0FBQztJQUNPLHVCQUF1QixDQUFDLElBQWtCO1FBQ2hELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FDeEMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQy9DO1FBQ0QsT0FBTyxLQUFLO0lBQ2QsQ0FBQztJQUNPLGVBQWUsQ0FBQyxJQUFrQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxFQUFFO1NBQ1Y7UUFDRCxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7SUFDckUsQ0FBQztDQUNGIiwiZmlsZSI6ImxlYWZsZXQtbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxlYWZsZXRNYXBcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IE1hcmtlciBmcm9tICcuL21hcmtlci9NYXJrZXInXG5pbXBvcnQgTWFya2Vyc0xheWVyIGZyb20gJy4vbWFya2VyL01hcmtlcnNMYXllcidcbmltcG9ydCBNYXJrZXJzQnVmZmVyTGF5ZXIgZnJvbSAnLi9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIE1hcmtlcixcbiAgTWFya2Vyc0xheWVyLFxuICBNYXJrZXJzQnVmZmVyTGF5ZXIsXG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0gfSBmcm9tICcuLi9kZWZpbml0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2VyIGV4dGVuZHMgTC5NYXJrZXIge1xuICBwcml2YXRlIGRhdGE6IERhdGFMaXN0SXRlbVxuICBjb25zdHJ1Y3RvcihsYXRsbmc6IEwuTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IEwuTWFya2VyT3B0aW9ucykge1xuICAgIHN1cGVyKGxhdGxuZywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gIH1cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgTWFya2Vyc0xheWVyLCB7IE1hcmtlcnNMYXllck9wdGlvbnMgfSBmcm9tICcuL01hcmtlcnNMYXllcidcbmludGVyZmFjZSBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zIGV4dGVuZHMgTWFya2Vyc0xheWVyT3B0aW9ucyB7XG4gIGJ1ZmZlck9wdGlvbnM6IEwuQ2lyY2xlTWFya2VyT3B0aW9uc1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Vyc0J1ZmZlckxheWVyIGV4dGVuZHMgTWFya2Vyc0xheWVyIHtcbiAgcHVibGljIG9wdGlvbnM6IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnNcbiAgcHJpdmF0ZSBidWZmZXJMYXllcjogTC5MYXllckdyb3VwXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIGNvbnN0IGRlZmF1bHRCdWZmZXJPcHRpb25zOiBMLkNpcmNsZU1hcmtlck9wdGlvbnMgPSB7XG4gICAgICByYWRpdXM6IDEwMDAsXG4gICAgICBzdHJva2U6IGZhbHNlLFxuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgeyBidWZmZXJPcHRpb25zOiBkZWZhdWx0QnVmZmVyT3B0aW9ucyB9LFxuICAgICAgb3B0aW9uc1xuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuXG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLmJ1ZmZlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmJ1ZmZlckxheWVyKVxuICAgIH1cbiAgICB0aGlzLm1hcmtlckxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpXG4gICAgdGhpcy5idWZmZXJMYXllciA9IHRoaXMuY29uZmlnQnVmZmVyTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5idWZmZXJMYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcHJpdmF0ZSBjb25maWdCdWZmZXJMYXllcigpIHtcbiAgICBjb25zdCBncm91cExheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBjaXJjbGVMYXllciA9IEwuY2lyY2xlKFxuICAgICAgICBtYXJrZXIuZ2V0TGF0TG5nKCksXG4gICAgICAgIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zXG4gICAgICApXG4gICAgICBncm91cExheWVyLmFkZExheWVyKGNpcmNsZUxheWVyKVxuICAgIH0pXG4gICAgcmV0dXJuIGdyb3VwTGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IE1hcmtlciBmcm9tICcuL01hcmtlcidcblxuLyoqIOa4suafk+agt+W8jyDmlaPngrl854Ot5Yqb5Zu+ICovXG50eXBlIE1hcmtlcnNMYXllclJlbmRlclR5cGUgPSAncG9pbnQnIHwgJ2hlYXQnIHwgJ2NsdXN0ZXInXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBNYXJrZXJzTGF5ZXJSZW5kZXJQb2ludENvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcblxuLyoqIOaVo+eCueWbvuagh+exu+WeiyBpY29uZm9udHxzdmd8aW1hZ2UgKi9cbnR5cGUgTWFya2Vyc0xheWVySWNvblR5cGUgPSAnZm9udF9jbGFzcycgfCAndW5pY29kZScgfCAnc3ltYm9sJyB8ICdpbWFnZSdcblxuaW50ZXJmYWNlIEljb25SZW5kZXJGdW5jT3B0aW9uIHtcbiAgaWNvblNpemU6IFtudW1iZXIsIG51bWJlcl1cbiAgaWNvbkNvbG9yOiBzdHJpbmdcbn1cbnR5cGUgSWNvblJlbmRlckZ1bmMgPSAoXG4gIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgcGFyYW1zOiBJY29uUmVuZGVyRnVuY09wdGlvblxuKSA9PiBzdHJpbmdcblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJzTGF5ZXJPcHRpb25zIHtcbiAgcmVuZGVyVHlwZTogTWFya2Vyc0xheWVyUmVuZGVyVHlwZVxuICByZW5kZXJQb2ludENvbG9yVHlwZTogTWFya2Vyc0xheWVyUmVuZGVyUG9pbnRDb2xvclR5cGVcbiAgaWNvblR5cGU6IE1hcmtlcnNMYXllckljb25UeXBlXG5cbiAgaWNvbkltYWdlVXJsPzogc3RyaW5nXG4gIGljb25TaXplPzogW251bWJlciwgbnVtYmVyXVxuICBpY29uQ2xhc3M/OiBzdHJpbmdcbiAgaWNvblVuaWNvZGU/OiBzdHJpbmdcbiAgaWNvblN5bWJvbD86IHN0cmluZ1xuICBpY29uQ29sb3I/OiBzdHJpbmdcbiAgaWNvbkFuY2hvcj86IFtudW1iZXIsIG51bWJlcl1cbiAgaWNvblJlbmRlcmVyPzogSWNvblJlbmRlckZ1bmNcblxuICAvKiogcG9wdXAg5bGV56S65a2X5q61ICovXG4gIHBvcHVwQXR0cj86IHN0cmluZ1xuICAvKiogdG9vbHRpcCDlsZXnpLrlrZfmrrUgKi9cbiAgdG9vbHRpcEF0dHI/OiBzdHJpbmdcblxuICBvcGFjaXR5PzogbnVtYmVyXG5cbiAgLyoqIOWIhuautea4suafk+e7n+iuoeWtl+autSAqL1xuICBzZWdtZW50ZWRBdHRyPzogc3RyaW5nXG4gIHNlZ21lbnRlZENvbG9ycz86IHN0cmluZ1tdXG5cbiAgaGVhdE9wdGlvbnM/OiBNYXJrZXJzSGVhdExheWVyT3B0aW9uc1xuICBjbHVzdGVyT3B0aW9ucz86IEwuTWFya2Vyc0NsdXN0ZXJPcHRpb25zXG59XG5cbi8qKiDovazljJbkuLrng63lipvlm77nmoQgb3B0aW9ucyAqL1xuaW50ZXJmYWNlIE1hcmtlcnNIZWF0TGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5IZWF0TGF5ZXJPcHRpb25zIHtcbiAgZGltZW5zaW9uQXR0cjogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlcnNMYXllciB7XG4gIHB1YmxpYyBtYXA6IEwuTWFwXG4gIHB1YmxpYyBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW11cbiAgcHVibGljIG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnNcbiAgcHVibGljIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuXG4gIHByb3RlY3RlZCBtYXJrZXJzOiBNYXJrZXJbXVxuXG4gIHByb3RlY3RlZCBmb2N1c2VkTWFya2VyOiBNYXJrZXJcbiAgcHJvdGVjdGVkIGhvdmVyZWRNYXJrZXI6IE1hcmtlclxuICAvKiog6ZyA6KaB5bGV56S655qE5pS+5aSn55qE5Zu+5qCHICovXG4gIHByb3RlY3RlZCBmb2N1c2VkRGlzcGxheU1hcmtlcjogTWFya2VyXG4gIHByb3RlY3RlZCBtYXJrZXJMYXllcjogTC5DYW52YXNJY29uTGF5ZXJcblxuICBwcml2YXRlIGxheWVyOlxuICAgIHwgTC5DYW52YXNJY29uTGF5ZXJcbiAgICB8IEwuSGVhdExheWVyXG4gICAgfCBMLk1hcmtlcnNDbHVzdGVyXG4gICAgfCBMLkxheWVyR3JvdXBcbiAgcHJpdmF0ZSBoZWF0TGF5ZXI6IEwuSGVhdExheWVyXG4gIHByaXZhdGUgY2x1c3RlckxheWVyOiBMLk1hcmtlcnNDbHVzdGVyXG5cbiAgcHJpdmF0ZSBzZWdtZW50ZWRNaW46IG51bWJlclxuICBwcml2YXRlIHNlZ21lbnRlZFN0ZXA6IG51bWJlclxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucyA9IHtcbiAgICAgIHJlbmRlclR5cGU6ICdwb2ludCcsXG4gICAgICByZW5kZXJQb2ludENvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBpY29uVHlwZTogJ3VuaWNvZGUnLFxuICAgICAgaWNvblNpemU6IFsyMCwgMjBdLFxuICAgICAgaWNvbkNsYXNzOiAnaWNvbmZvbnQnLFxuICAgICAgaWNvbkNvbG9yOiAnIzMzODhGRicsXG4gICAgICBpY29uQW5jaG9yOiBbMTAsIDEwXSxcbiAgICB9XG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcblxuICAgIHRoaXMubGF5ZXIgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkTWFya2VyID0gbnVsbFxuICAgIHRoaXMuaG92ZXJlZE1hcmtlciA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbnVsbFxuICAgIHRoaXMubWFya2VycyA9IFtdXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IG51bGxcbiAgICB0aGlzLmhlYXRMYXllciA9IG51bGxcbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IG51bGxcblxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG5cbiAgICB0aGlzLmluaXRNYXJrZXJzKClcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogTWFya2Vyc0xheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSkge1xuICAgICAgY2FzZSAncG9pbnQnOiB7XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ01hcmtlckxheWVyKClcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NsdXN0ZXInOiB7XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0NsdXN0ZXJMYXllcigpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdoZWF0Jzoge1xuICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdIZWF0TGF5ZXIoKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclR5cGUg5LiN5pSv5oyBXCIke3RoaXMub3B0aW9ucy5yZW5kZXJUeXBlfVwiYClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBzZXRPcHRpb25zKG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMsIHJlZHJhdyA9IGZhbHNlKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgaWYgKHJlZHJhdykge1xuICAgICAgdGhpcy5yZWRyYXcoKVxuICAgIH1cbiAgfVxuICAvKiog5riy5p+T5Li65pWj54K55Zu+ICovXG4gIHByb3RlY3RlZCBjb25maWdNYXJrZXJMYXllcigpIHtcbiAgICBjb25zdCBjYW52YXNJY29uTGF5ZXIgPSBMLmNhbnZhc0ljb25MYXllcih7fSkuYWRkVG8odGhpcy5tYXApXG4gICAgLy8g5re75Yqg54K55Ye75LqL5Lu2XG4gICAgY2FudmFzSWNvbkxheWVyLmFkZE9uQ2xpY2tMaXN0ZW5lcigoXywgW3sgZGF0YTogbWFya2VyIH1dKSA9PiB7XG4gICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIgYXMgTWFya2VyKVxuICAgIH0pXG4gICAgLy8g5re75YqgIGhvdmVyIOS6i+S7tlxuICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkhvdmVyTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgLy8g5LmL5YmN5pyJIGhvdmVyIOeahOWFs+mXrSB0b29sdGlwXG4gICAgICBpZiAodGhpcy5ob3ZlcmVkTWFya2VyKSB7XG4gICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5jbG9zZVRvb2x0aXAoKVxuICAgICAgfVxuICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbWFya2VyIGFzIE1hcmtlclxuXG4gICAgICBpZiAodGhpcy5ob3ZlcmVkTWFya2VyLmdldFRvb2x0aXAoKSkge1xuICAgICAgICAvLyDlpoLmnpzlt7Lnu4/orr7nva4gdG9vbHRpcCDnm7TmjqXlsZXnpLogdG9vbHRpcFxuICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIub3BlblRvb2x0aXAoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g5ZCm5YiZ57uR5a6aIHRvb2x0aXAg5bm25bGV56S6XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgICAnJyArIHRoaXMuaG92ZXJlZE1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgY2FudmFzSWNvbkxheWVyLmFkZE1hcmtlcnModGhpcy5tYXJrZXJzKVxuXG4gICAgdGhpcy5tYXAub24oJ3pvb21zdGFydCcsICgpID0+IHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgfSlcbiAgICB0aGlzLm1hcC5vbignem9vbWVuZCcsICgpID0+IHtcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgfSlcblxuICAgIC8vIOino+WGs+WIneasoea4suafk+S4jeWHuuWbvuagh+mXrumimFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5tYXAucGFuVG8odGhpcy5tYXAuZ2V0Q2VudGVyKCkpXG4gICAgfSlcblxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBjYW52YXNJY29uTGF5ZXJcbiAgICByZXR1cm4gdGhpcy5tYXJrZXJMYXllclxuICB9XG4gIHByaXZhdGUgaW5pdE1hcmtlcnMoKSB7XG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKClcblxuICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF1cbiAgICAgIGxldCBtYXJrZXIgPSBsYXllciBhcyBNYXJrZXJcblxuICAgICAgbWFya2VyID0gbmV3IE1hcmtlcihbbWFya2VyLmdldExhdExuZygpLmxuZywgbWFya2VyLmdldExhdExuZygpLmxhdF0sIHtcbiAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKGRhdGEpLFxuICAgICAgfSlcblxuICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgbWFya2VyLnNldERhdGEoZGF0YSlcblxuICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKVxuICAgIH0pXG4gIH1cbiAgLy8g5aSE55CGIG1hcmtlciDngrnlh7vkuovku7ZcbiAgcHJpdmF0ZSBtYXJrZXJDbGlja0hhbmRsZXIobWFya2VyOiBNYXJrZXIpIHtcbiAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBtYXJrZXJcbiAgICAvLyDliKDpmaTliY3kuIDkuKrmlL7lpKflm77moIdcbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmVGcm9tKHRoaXMubWFwKVxuICAgIH1cbiAgICAvLyDnlJ/miJDlvZPliY3mlL7lpKflm77moIdcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbmV3IE1hcmtlcihtYXJrZXIuZ2V0TGF0TG5nKCksIHtcbiAgICAgIGljb246IHRoaXMuZ2V0TGFyZ2VyTWFya2VySWNvbihtYXJrZXIuZ2V0RGF0YSgpKSxcbiAgICB9KVxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIuYWRkVG8odGhpcy5tYXApXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgLm9wZW5Qb3B1cCgpXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkTWFya2VyLmdldExhdExuZygpKVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLW1hcmtlcicsIG1hcmtlcilcbiAgfVxuICBwcml2YXRlIGNvbmZpZ0NsdXN0ZXJMYXllcigpIHtcbiAgICAvLyDlsZXnpLrogZrlkIjlm77lsYJcbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKClcbiAgICB0aGlzLmNsdXN0ZXJMYXllci5hZGRMYXllcnMoXG4gICAgICB0aGlzLm1hcmtlcnMubWFwKChtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIobS5nZXRMYXRMbmcoKSwge1xuICAgICAgICAgIGljb246IHRoaXMuZ2V0TWFya2VySWNvbihtLmdldERhdGEoKSksXG4gICAgICAgIH0pXG4gICAgICAgIG1hcmtlci5zZXREYXRhKG0uZ2V0RGF0YSgpKVxuICAgICAgICBtYXJrZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pXG4gICAgICAgIG1hcmtlci5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbWFya2VyXG4gICAgICB9KVxuICAgIClcbiAgICByZXR1cm4gdGhpcy5jbHVzdGVyTGF5ZXJcbiAgfVxuXG4gIC8qKiDmuLLmn5PkuLrng63lipvlm74gKi9cbiAgcHJpdmF0ZSBjb25maWdIZWF0TGF5ZXIoKSB7XG4gICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgY29uc3QgbGF0TG5nID0gbWFya2VyLmdldExhdExuZygpXG4gICAgICBsZXQgYWx0ID0gbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMuZGltZW5zaW9uQXR0cl1cbiAgICAgIGlmICh0eXBlb2YgYWx0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBhbHQgPSB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4XG4gICAgICB9XG4gICAgICBtYXJrZXIuc2V0TGF0TG5nKEwubGF0TG5nKGxhdExuZy5sYXQsIGxhdExuZy5sbmcsIGFsdCkpXG4gICAgfSlcbiAgICB0aGlzLmhlYXRMYXllciA9IEwuaGVhdExheWVyKFxuICAgICAgdGhpcy5tYXJrZXJzLm1hcCgoaXQpID0+IGl0LmdldExhdExuZygpKSxcbiAgICAgIHRoaXMub3B0aW9ucy5oZWF0T3B0aW9uc1xuICAgIClcbiAgICByZXR1cm4gdGhpcy5oZWF0TGF5ZXJcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGFyZ2VyTWFya2VySWNvbihkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWFya2VySWNvbihkYXRhLCB0cnVlKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXJrZXJJY29uKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIGZhbHNlKVxuICB9XG5cbiAgLyoqIOiOt+WPluW9k+WJjSBtYXJrZXIg6ZyA6KaB5bGV56S655qEIGljb24gKi9cbiAgcHJpdmF0ZSBfZ2V0TWFya2VySWNvbihcbiAgICBkYXRhOiBEYXRhTGlzdEl0ZW0sXG4gICAgaXNMYXJnZXI6IGJvb2xlYW5cbiAgKTogTC5JY29uIHwgTC5EaXZJY29uIHtcbiAgICBsZXQgaWNvblNpemUgPSB0aGlzLm9wdGlvbnMuaWNvblNpemVcbiAgICBsZXQgaWNvbkFuY2hvciA9IHRoaXMub3B0aW9ucy5pY29uQW5jaG9yXG4gICAgaWNvblNpemUgPSBpc0xhcmdlciA/IFtpY29uU2l6ZVswXSAqIDEuNSwgaWNvblNpemVbMV0gKiAxLjVdIDogaWNvblNpemVcbiAgICBpY29uQW5jaG9yID0gaXNMYXJnZXJcbiAgICAgID8gW2ljb25BbmNob3JbMF0gKiAxLjUsIGljb25BbmNob3JbMV0gKiAxLjVdXG4gICAgICA6IGljb25BbmNob3JcblxuICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3JcblxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICBjYXNlICdpbWFnZSc6IHtcbiAgICAgICAgcmV0dXJuIEwuaWNvbih7XG4gICAgICAgICAgaWNvblVybDogdGhpcy5vcHRpb25zLmljb25JbWFnZVVybCxcbiAgICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgICBpY29uQW5jaG9yLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgY2FzZSAnZm9udF9jbGFzcyc6XG4gICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgaHRtbDogdGhpcy5nZXRDdXN0b21JY29uSFRNTChkYXRhLCB7XG4gICAgICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgICAgIGljb25Db2xvcixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjbGFzc05hbWU6IGlzTGFyZ2VyID8gJ2xhcmdlLWRpdi1pY29uLW1hcmtlcicgOiAnJyxcbiAgICAgICAgICBpY29uU2l6ZSxcbiAgICAgICAgICBpY29uQW5jaG9yLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOWbvuagh+exu+Wei+S4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMuaWNvblR5cGV9XCJgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGdldEN1c3RvbUljb25IVE1MKFxuICAgIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgICBvcHRpb25zPzogSWNvblJlbmRlckZ1bmNPcHRpb25cbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmljb25SZW5kZXJlcikge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKGRhdGEsIG9wdGlvbnMpXG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlKSB7XG4gICAgICBjYXNlICdzaW5nbGUnOiB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICAgICAgLy8g5L2/55SoIGNsYXNzXG4gICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke29wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L2/55SoIHN2Z1xuICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uLXN5bWJvbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7dGhpcy5vcHRpb25zLmljb25TeW1ib2x9XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS9v+eUqCB1bmljb2RlXG4gICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7b3B0aW9ucy5pY29uQ29sb3J9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGV9XG4gICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhc2UgJ3NlZ21lbnRlZCc6IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgICAgICBjYXNlICdmb250X2NsYXNzJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLmdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGEpfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L2/55SoIHN2Z1xuICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uLXN5bWJvbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7dGhpcy5vcHRpb25zLmljb25TeW1ib2x9XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS9v+eUqCB1bmljb2RlXG4gICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKX07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3B0aW9ucy5pY29uVW5pY29kZX1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYHJlbmRlclBvaW50Q29sb3JUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGV9XCJgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGhcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5XG4gICAgbGV0IG1pblZhbCA9IEluZmluaXR5XG4gICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbClcbiAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKVxuICAgIH1cbiAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWxcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwXG4gIH1cbiAgcHJpdmF0ZSBnZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW1xuICAgICAgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcFxuICAgIF1cbiAgICByZXR1cm4gY29sb3JcbiAgfVxuICBwcml2YXRlIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=