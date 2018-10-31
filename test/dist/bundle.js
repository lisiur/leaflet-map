/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/leaflet-layer.js":
/*!*******************************!*\
  !*** ./dist/leaflet-layer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
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

/***/ "./node_modules/color-convert/conversions.js":
/*!***************************************************!*\
  !*** ./node_modules/color-convert/conversions.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var cssKeywords = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");

// NOTE: conversions should only return primitive values (i.e. arrays, or
//       values that give correct `typeof` results).
//       do not use box values types (i.e. Number(), String(), etc.)

var reverseKeywords = {};
for (var key in cssKeywords) {
	if (cssKeywords.hasOwnProperty(key)) {
		reverseKeywords[cssKeywords[key]] = key;
	}
}

var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};

// hide .channels and .labels properties
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}

		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}

		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}

		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}

convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};

convert.rgb.hsv = function (rgb) {
	var rdif;
	var gdif;
	var bdif;
	var h;
	var s;

	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var v = Math.max(r, g, b);
	var diff = v - Math.min(r, g, b);
	var diffc = function (c) {
		return (v - c) / 6 / diff + 1 / 2;
	};

	if (diff === 0) {
		h = s = 0;
	} else {
		s = diff / v;
		rdif = diffc(r);
		gdif = diffc(g);
		bdif = diffc(b);

		if (r === v) {
			h = bdif - gdif;
		} else if (g === v) {
			h = (1 / 3) + rdif - bdif;
		} else if (b === v) {
			h = (2 / 3) + gdif - rdif;
		}
		if (h < 0) {
			h += 1;
		} else if (h > 1) {
			h -= 1;
		}
	}

	return [
		h * 360,
		s * 100,
		v * 100
	];
};

convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));

	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));

	return [h, w * 100, b * 100];
};

convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;

	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;

	return [c * 100, m * 100, y * 100, k * 100];
};

/**
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
 * */
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}

convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}

	var currentClosestDistance = Infinity;
	var currentClosestKeyword;

	for (var keyword in cssKeywords) {
		if (cssKeywords.hasOwnProperty(keyword)) {
			var value = cssKeywords[keyword];

			// Compute comparative distance
			var distance = comparativeDistance(rgb, value);

			// Check if its less, if so set as closest
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}

	return currentClosestKeyword;
};

convert.keyword.rgb = function (keyword) {
	return cssKeywords[keyword];
};

convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;

	// assume sRGB
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

	return [x * 100, y * 100, z * 100];
};

convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;

	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}

	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}

	t1 = 2 * l - t2;

	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}

		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}

		rgb[i] = val * 255;
	}

	return rgb;
};

convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;

	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

	return [h, sv * 100, v * 100];
};

convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;

	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;

	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};

convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;

	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;

	return [h, sl * 100, l * 100];
};

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;

	// wh + bl cant be > 1
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}

	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;

	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}

	n = wh + f * (v - wh); // linear interpolation

	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}

	return [r * 255, g * 255, b * 255];
};

convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;

	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;

	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

	// assume sRGB
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;

	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;

	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;

	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);

	return [r * 255, g * 255, b * 255];
};

convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;

	x /= 95.047;
	y /= 100;
	z /= 108.883;

	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);

	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);

	return [l, a, b];
};

convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;

	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;

	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

	x *= 95.047;
	y *= 100;
	z *= 108.883;

	return [x, y, z];
};

convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;

	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;

	if (h < 0) {
		h += 360;
	}

	c = Math.sqrt(a * a + b * b);

	return [l, c, h];
};

convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;

	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);

	return [l, a, b];
};

convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

	value = Math.round(value / 50);

	if (value === 0) {
		return 30;
	}

	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));

	if (value === 2) {
		ansi += 60;
	}

	return ansi;
};

convert.hsv.ansi16 = function (args) {
	// optimization here; we already know the value and don't need to get
	// it converted for us.
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};

convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];

	// we use the extended greyscale palette here, with the exception of
	// black and white. normal palette only has 4 greyscale shades.
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}

		if (r > 248) {
			return 231;
		}

		return Math.round(((r - 8) / 247) * 24) + 232;
	}

	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);

	return ansi;
};

convert.ansi16.rgb = function (args) {
	var color = args % 10;

	// handle greyscale
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}

		color = color / 10.5 * 255;

		return [color, color, color];
	}

	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;

	return [r, g, b];
};

convert.ansi256.rgb = function (args) {
	// handle greyscale
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}

	args -= 16;

	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;

	return [r, g, b];
};

convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}

	var colorString = match[0];

	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}

	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;

	return [r, g, b];
};

convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;

	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}

	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}

	hue /= 6;
	hue %= 1;

	return [hue * 360, chroma * 100, grayscale * 100];
};

convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;

	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}

	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}

	return [hsl[0], c * 100, f * 100];
};

convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;

	var c = s * v;
	var f = 0;

	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}

	return [hsv[0], c * 100, f * 100];
};

convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}

	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;

	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}

	mg = (1.0 - c) * g;

	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};

convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var v = c + g * (1.0 - c);
	var f = 0;

	if (v > 0.0) {
		f = c / v;
	}

	return [hcg[0], f * 100, v * 100];
};

convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;

	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;

	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}

	return [hcg[0], s * 100, l * 100];
};

convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};

convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;

	if (c < 1) {
		g = (v - c) / (1 - c);
	}

	return [hwb[0], c * 100, g * 100];
};

convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};

convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};

convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};

convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};

convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};

convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};

convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};

convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;

	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};

convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};


/***/ }),

/***/ "./node_modules/color-convert/index.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");
var route = __webpack_require__(/*! ./route */ "./node_modules/color-convert/route.js");

var convert = {};

var models = Object.keys(conversions);

function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		return fn(args);
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}

		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}

		var result = fn(args);

		// we're assuming the result is an array here.
		// see notice in conversions.js; don't use box types
		// in conversion functions.
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}

		return result;
	};

	// preserve .conversion property if there is one
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}

	return wrappedFn;
}

models.forEach(function (fromModel) {
	convert[fromModel] = {};

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});

	var routes = route(fromModel);
	var routeModels = Object.keys(routes);

	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];

		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});

module.exports = convert;


/***/ }),

/***/ "./node_modules/color-convert/route.js":
/*!*********************************************!*\
  !*** ./node_modules/color-convert/route.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var conversions = __webpack_require__(/*! ./conversions */ "./node_modules/color-convert/conversions.js");

/*
	this function routes a model to all other models.

	all functions that are routed have a property `.conversion` attached
	to the returned synthetic function. This property is an array
	of strings, each with the steps in between the 'from' and 'to'
	color models (inclusive).

	conversions that are not possible simply are not included.
*/

function buildGraph() {
	var graph = {};
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	var models = Object.keys(conversions);

	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
			// http://jsperf.com/1-vs-infinity
			// micro-opt, but this is simple.
			distance: -1,
			parent: null
		};
	}

	return graph;
}

// https://en.wikipedia.org/wiki/Breadth-first_search
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel]; // unshift -> queue -> pop

	graph[fromModel].distance = 0;

	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);

		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];

			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}

	return graph;
}

function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}

function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];

	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}

	fn.conversion = path;
	return fn;
}

module.exports = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};

	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];

		if (node.parent === null) {
			// no possible conversion, or this node is the source model.
			continue;
		}

		conversion[toModel] = wrapConversion(toModel, graph);
	}

	return conversion;
};



/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/color-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(/*! color-name */ "./node_modules/color-string/node_modules/color-name/index.js");
var swizzle = __webpack_require__(/*! simple-swizzle */ "./node_modules/simple-swizzle/index.js");

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),

/***/ "./node_modules/color-string/node_modules/color-name/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/color-string/node_modules/color-name/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color/index.js":
/*!*************************************!*\
  !*** ./node_modules/color/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var colorString = __webpack_require__(/*! color-string */ "./node_modules/color-string/index.js");
var convert = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");

var _slice = [].slice;

var skippedModels = [
	// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword',

	// gray conflicts with some method names, and has its own method defined.
	'gray',

	// shouldn't really be in color-convert either...
	'hex'
];

var hashedModelKeys = {};
Object.keys(convert).forEach(function (model) {
	hashedModelKeys[_slice.call(convert[model].labels).sort().join('')] = model;
});

var limiters = {};

function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}

	if (model && model in skippedModels) {
		model = null;
	}

	if (model && !(model in convert)) {
		throw new Error('Unknown model: ' + model);
	}

	var i;
	var channels;

	if (typeof obj === 'undefined') {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}

		this.model = result.model;
		channels = convert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = convert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		// this is always RGB - can be converted later on.
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;

		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}

		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}

		this.model = hashedModelKeys[hashedKeys];

		var labels = convert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}

		this.color = zeroArray(color);
	}

	// perform limitations (clamping, etc.)
	if (limiters[this.model]) {
		channels = convert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}

	this.valpha = Math.max(0, Math.min(1, this.valpha));

	if (Object.freeze) {
		Object.freeze(this);
	}
}

Color.prototype = {
	toString: function () {
		return this.string();
	},

	toJSON: function () {
		return this[this.model]();
	},

	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},

	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},

	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},

	object: function () {
		var result = {};
		var channels = convert[this.model].channels;
		var labels = convert[this.model].labels;

		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}

		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}

		return result;
	},

	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;

		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}

		return rgb;
	},

	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;

		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}

		return rgb;
	},

	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},

	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}

		return this.valpha;
	},

	// rgb
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),

	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }), // eslint-disable-line brace-style

	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),

	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),

	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),

	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),

	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),

	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),

	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),

	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return convert[this.model].keyword(this.color);
	},

	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}

		return colorString.to.hex(this.rgb().round().color);
	},

	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.rgb().color;

		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}

		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();

		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}

		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	isDark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	isLight: function () {
		return !this.isDark();
	},

	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},

	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},

	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},

	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},

	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},

	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},

	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},

	grayscale: function () {
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},

	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},

	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},

	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},

	mix: function (mixinColor, weight) {
		// ported from sass implementation in C
		// https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
		var color1 = mixinColor.rgb();
		var color2 = this.rgb();
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};

// model conversion methods and static constructors
Object.keys(convert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}

	var channels = convert[model].channels;

	// conversion methods
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}

		if (arguments.length) {
			return new Color(arguments, model);
		}

		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};

	// 'static' construction methods
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});

function roundTo(num, places) {
	return Number(num.toFixed(places));
}

function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}

function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];

	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});

	model = model[0];

	return function (val) {
		var result;

		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}

			result = this[model]();
			result.color[channel] = val;
			return result;
		}

		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}

		return result;
	};
}

function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}

function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}

function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}

	return arr;
}

module.exports = Color;


/***/ }),

/***/ "./node_modules/is-arrayish/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-arrayish/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),

/***/ "./node_modules/simple-swizzle/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-swizzle/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(/*! is-arrayish */ "./node_modules/is-arrayish/index.js");

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),

/***/ "./src/dynamicHeatLayer/DynamicHeatLayer.ts":
/*!**************************************************!*\
  !*** ./src/dynamicHeatLayer/DynamicHeatLayer.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DynamicHeatLayer; });
/* harmony import */ var _marker_MarkersLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../marker/MarkersLayer */ "./src/marker/MarkersLayer.ts");

class DynamicHeatLayer {
    constructor(map, dynamicDataList, options, channelFunc) {
        if (!Array.isArray(dynamicDataList) || dynamicDataList.length === 0) {
            throw new Error(`dataList 必须是非空数组`);
        }
        this.map = map;
        this.dynamicDataList = dynamicDataList;
        this.options = options;
        this.channelFunc = channelFunc;
        this.currentStep = 0;
        this.isPause = true;
    }
    restart() {
        this.isPause = false;
        this.currentStep = 0;
        this.gotoStep(this.currentStep);
        this.start();
    }
    start() {
        this.isPause = false;
        if (!this.options.auto) {
            return;
        }
        setTimeout(() => {
            if (this.isPause) {
                return;
            }
            /** 播放完毕 */
            if (this.currentStep >= this.dynamicDataList.length - 1) {
                if (!this.options.loop) {
                    return;
                }
                this.restart();
            }
            else {
                this.currentStep++;
                this.gotoStep(this.currentStep);
                this.start();
            }
        }, this.options.interval);
    }
    pause() {
        this.isPause = true;
    }
    prev() {
        this.currentStep--;
        this.currentStep =
            (this.currentStep + this.dynamicDataList.length) %
                this.dynamicDataList.length;
        this.gotoStep(this.currentStep);
    }
    next() {
        this.currentStep++;
        this.currentStep = this.currentStep % this.dynamicDataList.length;
        this.gotoStep(this.currentStep);
    }
    gotoStep(step) {
        if (step < 0 || step >= this.dynamicDataList.length) {
            throw new Error(`gotoStep(${step}): step is out of index `);
        }
        this.layer.setData(this.dynamicDataList[step]);
        this.layer.draw();
    }
    draw(options) {
        this.initOptions(options);
        this.initLayer();
        this.layer.draw();
        return this;
    }
    fitBounds() {
        this.layer.fitBounds();
    }
    initOptions(options) {
        this.options = Object.assign({
            loop: false,
            auto: false,
            interval: 1000,
        }, this.options, options);
    }
    initLayer() {
        const markersLayerOptions = {
            renderType: 'heat',
            heatOptions: this.options,
        };
        this.layer = new _marker_MarkersLayer__WEBPACK_IMPORTED_MODULE_0__["default"](this.map, this.dynamicDataList[0], markersLayerOptions, this.channelFunc);
        return this.layer;
    }
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default, Marker, MarkersLayer, MarkersBufferLayer, Polyline, PolylinesLayer, PolylinesBufferLayer, Polygon, PolygonsLayer, GridsLayer, DynamicHeatLayer */
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

/* harmony import */ var _polygon_GridsLayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./polygon/GridsLayer */ "./src/polygon/GridsLayer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridsLayer", function() { return _polygon_GridsLayer__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _dynamicHeatLayer_DynamicHeatLayer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamicHeatLayer/DynamicHeatLayer */ "./src/dynamicHeatLayer/DynamicHeatLayer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicHeatLayer", function() { return _dynamicHeatLayer_DynamicHeatLayer__WEBPACK_IMPORTED_MODULE_9__["default"]; });











/* harmony default export */ __webpack_exports__["default"] = ({
    Marker: _marker_Marker__WEBPACK_IMPORTED_MODULE_0__["default"],
    MarkersLayer: _marker_MarkersLayer__WEBPACK_IMPORTED_MODULE_1__["default"],
    MarkersBufferLayer: _marker_MarkersBufferLayer__WEBPACK_IMPORTED_MODULE_2__["default"],
    Polyline: _polyline_Polyline__WEBPACK_IMPORTED_MODULE_3__["default"],
    PolylinesLayer: _polyline_PolylinesLayer__WEBPACK_IMPORTED_MODULE_4__["default"],
    PolylinesBufferLayer: _polyline_PolylinesBufferLayer__WEBPACK_IMPORTED_MODULE_5__["default"],
    Polygon: _polygon_Polygon__WEBPACK_IMPORTED_MODULE_6__["default"],
    PolygonsLayer: _polygon_PolygonsLayer__WEBPACK_IMPORTED_MODULE_7__["default"],
    GridsLayer: _polygon_GridsLayer__WEBPACK_IMPORTED_MODULE_8__["default"],
    DynamicHeatLayer: _dynamicHeatLayer_DynamicHeatLayer__WEBPACK_IMPORTED_MODULE_9__["default"],
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
            stroke: true,
            weight: 1,
        };
        this.options = Object.assign(this.options, { bufferOptions: defaultBufferOptions }, options);
    }
    draw(options) {
        this.options = Object.assign(this.options, options);
        this.options.bufferOptions.color = this.options.iconColor;
        this.initMarkers();
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
        this.layer = L.layerGroup();
        this.layer.addLayer(this.markerLayer);
        this.layer.addLayer(this.bufferLayer);
        this.map.addLayer(this.layer);
        return this;
    }
    getBounds() {
        if (this.markers.length <= 0) {
            return this.map.getBounds();
        }
        return this.markers.reduce((prev, curr) => {
            return prev.extend(curr.getLatLng().toBounds(this.options.bufferOptions.radius));
        }, this.markers[0].getLatLng().toBounds(this.options.bufferOptions.radius));
    }
    configBufferLayer() {
        const groupLayer = L.layerGroup();
        this.markers.forEach((marker) => {
            const circleLayer = L.circle(marker.getLatLng(), this.options.bufferOptions);
            if (this.options.bufferTooltipAttr) {
                circleLayer.bindTooltip('' + marker.getData()[this.options.bufferTooltipAttr]);
            }
            else {
                switch (typeof this.options.popupAttr) {
                    case 'string':
                        circleLayer.bindTooltip('' + marker.getData()[this.options.popupAttr]);
                        break;
                    case 'object':
                        circleLayer.bindTooltip('' + marker.getData()[this.options.popupAttr.value]);
                    default:
                        break;
                }
            }
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
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marker */ "./src/marker/Marker.ts");


class MarkersLayer {
    constructor(map, dataList, options, channelFunc) {
        if (!Array.isArray(dataList) || dataList.length === 0) {
            throw new Error(`dataList 必须是非空数组`);
        }
        this.defaultOptions = {
            renderType: 'point',
            renderPointColorType: 'single',
            iconType: 'unicode',
            iconSize: [20, 20],
            iconClass: 'iconfont',
            iconColor: '#3388FF',
            iconAnchor: [10, 20],
            popup: true,
            tooltip: true,
            popupAttr: { label: '名称', value: 'name' },
            tooltipAttr: 'name',
            segmentedColors: ['#3388FF'],
            classifiedColors: ['#3388FF'],
            isCluster: false,
            renderClusterColorType: 'smart',
            heatOptions: {
                max: 1,
                minOpacity: 0.5,
            },
        };
        this.type = 'marker';
        this.map = map;
        this.dataList = dataList;
        this.options = options;
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
        this.classifyColorMap = {};
    }
    draw(options) {
        this.visible = true;
        this.initOptions(options);
        this.initMarkers();
        this.initEvents();
        return this.redraw();
    }
    redraw() {
        if (!this.visible) {
            return;
        }
        if (this.layer) {
            this.layer.remove();
        }
        // 优先判断 isCluster
        if (this.options.isCluster && this.options.renderType === 'point') {
            this.layer = this.configClusterLayer();
        }
        else {
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
        }
        this.map.addLayer(this.layer);
        return this;
    }
    setData(data) {
        this.dataList = data;
    }
    setOptions(options, redraw = false) {
        this.options = Object.assign(this.options, options);
        if (redraw) {
            this.redraw();
        }
    }
    /** 获取当前 options */
    getOptions() {
        return this.options;
    }
    fitBounds() {
        this.map.fitBounds(this.getBounds(), { padding: [20, 20] });
    }
    getBounds() {
        if (this.markers.length <= 0) {
            return this.map.getBounds();
        }
        return this.markers.map((marker) => [marker.getLatLng().lat, marker.getLatLng().lng]);
    }
    destroy() {
        if (this.layer) {
            this.map.removeLayer(this.layer);
        }
        if (this.focusedDisplayMarker) {
            this.map.removeLayer(this.focusedDisplayMarker);
        }
        this.map.off('zoomstart', this._zoomStartCb, this);
        this.map.off('zoomend', this._zoomEndCb, this);
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
            if (this.focusedDisplayMarker) {
                this.focusedDisplayMarker.remove();
            }
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
    pitch(id) {
        this.markers.forEach((marker) => {
            if (marker.getData().id === id) {
                this.markerClickHandler(marker, true);
                return;
            }
        });
    }
    getClassifyColorRefs() {
        return this.classifyColorRefs;
    }
    _zoomStartCb() {
        if (!this.visible) {
            return;
        }
        if (this.type === 'marker') {
            if (this.options.renderType === 'point' && !this.options.isCluster) {
                this.map.removeLayer(this.markerLayer);
            }
        }
        else {
            this.map.removeLayer(this.markerLayer);
        }
    }
    _zoomEndCb() {
        if (!this.visible) {
            return;
        }
        if (this.type === 'marker') {
            if (this.options.renderType === 'point' && !this.options.isCluster) {
                this.map.addLayer(this.markerLayer);
            }
        }
        else {
            this.map.addLayer(this.markerLayer);
        }
    }
    /** 渲染为散点图 */
    configMarkerLayer() {
        if (this.markerLayer) {
            this.markerLayer.remove();
        }
        const canvasIconLayer = L.canvasIconLayer({}).addTo(this.map);
        // 添加点击事件
        canvasIconLayer.addOnClickListener((_, [{ data: marker }]) => {
            this.markerClickHandler(marker);
        });
        // 添加右键事件
        canvasIconLayer.addOnContextmenuListener((event, [{ data: marker }]) => {
            this.channelFunc('contextmenu', {
                event,
                marker,
            });
        });
        // 添加 hover 事件
        if (this.options.tooltip) {
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
        }
        canvasIconLayer.addMarkers(this.markers);
        // 解决初次渲染不出图标问题
        this.map.panTo(this.map.getCenter());
        this.markerLayer = canvasIconLayer;
        return this.markerLayer;
    }
    getToolTipContent(data) {
        return '' + data[this.options.tooltipAttr];
    }
    initOptions(options) {
        this.options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["optionsMerge"])(this.defaultOptions, this.options, options);
    }
    initMarkers() {
        // 缓存 segment 相关数据
        this.cacheSegmentParams();
        this.cacheClassifyParams();
        this.markers = [];
        this.dataList.forEach((data) => {
            const layer = L.geoJSON(data.geometry).getLayers()[0];
            const marker = new _Marker__WEBPACK_IMPORTED_MODULE_1__["default"]([layer.getLatLng().lat, layer.getLatLng().lng], {
                icon: this.getMarkerIcon(data),
            });
            // 将相关值绑定到 marker上
            marker.setData(data);
            this.markers.push(marker);
        });
    }
    initEvents() {
        this.map.on('zoomstart', this._zoomStartCb, this);
        this.map.on('zoomend', this._zoomEndCb, this);
    }
    // 处理 marker 点击事件
    markerClickHandler(marker, fitBounds) {
        this.focusedMarker = marker;
        if (this.options.popup) {
            // 删除前一个放大图标
            if (this.focusedDisplayMarker) {
                this.focusedDisplayMarker.removeFrom(this.map);
            }
            // 生成当前放大图标
            this.focusedDisplayMarker = new _Marker__WEBPACK_IMPORTED_MODULE_1__["default"](marker.getLatLng(), {
                icon: this.getLargerMarkerIcon(marker.getData()),
            });
            this.focusedDisplayMarker.addTo(this.map);
            // 添加放大图标的 popup
            this.focusedDisplayMarker
                .bindPopup(this.getPopupContent(marker.getData()))
                .openPopup();
            this.focusedDisplayMarker.on('popupclose', () => {
                this.focusedDisplayMarker.remove();
            });
        }
        marker.closeTooltip();
        this.map.panTo(this.focusedMarker.getLatLng());
        if (fitBounds) {
            this.map.fitBounds(marker.getLatLng().toBounds(10));
        }
        this.channelFunc('on-click-marker', marker);
    }
    configClusterLayer() {
        // 展示聚合图层
        if (this.clusterLayer) {
            this.clusterLayer.remove();
        }
        this.clusterLayer = L.markerClusterGroup({
            iconCreateFunction: this.iconCreateFunction.bind(this),
        });
        this.clusterLayer.addLayers(this.markers.map((m) => {
            const marker = new _Marker__WEBPACK_IMPORTED_MODULE_1__["default"](m.getLatLng(), {
                icon: this.getMarkerIcon(m.getData()),
            });
            marker.setData(m.getData());
            marker.bindTooltip('' + marker.getData()[this.options.tooltipAttr]);
            marker.bindPopup(this.getPopupContent(marker.getData()));
            marker.on('click', () => {
                this.markerClickHandler(marker);
            });
            return marker;
        }));
        return this.clusterLayer;
    }
    /** 渲染为热力图 */
    configHeatLayer() {
        if (this.heatLayer) {
            this.heatLayer.remove();
        }
        const alts = [];
        this.markers.forEach((marker) => {
            const latLng = marker.getLatLng();
            const dimensionAttr = this.options.heatOptions && this.options.heatOptions.dimensionAttr;
            let alt = (dimensionAttr && marker.getData()[dimensionAttr]) ||
                this.options.heatOptions.max;
            if (typeof alt !== 'number') {
                alt = this.options.heatOptions.max;
            }
            alts.push(alt);
            marker.setLatLng(L.latLng(latLng.lat, latLng.lng, alt));
        });
        this.heatLayer = L.heatLayer(this.markers.map((it, index) => [
            it.getLatLng().lat,
            it.getLatLng().lng,
            alts[index],
        ]), Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["optionsMerge"])({ minOpacity: 0.5 }, this.options.heatOptions));
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
        const iconSize = this.options.iconSize;
        const iconAnchor = this.options.iconAnchor;
        const largerIconSize = [iconSize[0] * 1.5, iconSize[1] * 1.5];
        const largerIconAnchor = [iconAnchor[0] * 1.5, iconAnchor[1] * 1.5];
        const iconColor = this.options.iconColor;
        switch (this.options.iconType) {
            case 'image': {
                // return L.icon({
                //   iconUrl: this.options.iconImageUrl,
                //   iconSize: isLarger ? largerIconSize : iconSize,
                //   iconAnchor,
                // })
            }
            case 'font_class':
            case 'symbol':
            case 'unicode': {
                return L.divIcon({
                    html: this.getCustomIconHTML(data, {
                        iconSize: isLarger ? largerIconSize : iconSize,
                        iconColor,
                    }),
                    className: isLarger ? 'large-div-icon-marker' : '',
                    iconSize: isLarger ? largerIconSize : iconSize,
                    iconAnchor: isLarger ? largerIconAnchor : iconAnchor,
                    tooltipAnchor: isLarger
                        ? [0, -largerIconAnchor[1] / 2]
                        : [0, -iconAnchor[1] / 2],
                    popupAnchor: isLarger
                        ? [0, -largerIconAnchor[1] / 2]
                        : [0, -iconAnchor[1] / 2],
                });
            }
            default: {
                throw new Error(`renderType 不能为 ${this.options.iconType}`);
            }
        }
    }
    getCustomIconHTML(data, options) {
        if (this.options.iconRenderer) {
            options = Object.assign({}, this.options, options);
            return this.options.iconRenderer(data, options);
        }
        let color = this.options.iconColor;
        switch (this.options.renderPointColorType) {
            case 'single': {
                color = this.options.iconColor;
                break;
            }
            case 'classified': {
                color = this.getClassifyMarkerColor(data);
                break;
            }
            case 'segmented': {
                color = this.getSegmentedMarkerColor(data);
                break;
            }
            default: {
                throw new Error(`renderPointColorType 不支持"${this.options.renderPointColorType}"`);
            }
        }
        switch (this.options.iconType) {
            // 使用 class
            case 'font_class': {
                return `
          <i class="${this.options.iconClass}"
            style="
              color: ${color};
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
              color: ${color};
              font-size: ${options.iconSize[0]}px;
            "
            >
            ${this.options.iconUnicode}
          </i>
        `;
            }
        }
    }
    cacheClassifyParams() {
        if (!this.options.classifiedAttr) {
            return;
        }
        const tmp = {};
        const prop = this.options.classifiedAttr;
        this.dataList.forEach((data) => {
            if (data[prop] in tmp) {
                tmp[data[prop]] = [data[prop], tmp[data[prop]][1] + 1];
            }
            else {
                tmp[data[prop]] = [data[prop], 1];
            }
        });
        const values = Object.values(tmp);
        values.sort((a, b) => b[1] - a[1]);
        this.classifyColorRefs = [];
        values.forEach(([attr, nums], index) => {
            let color = 'black';
            if (index < this.options.classifiedColors.length) {
                color = this.options.classifiedColors[index];
            }
            this.classifyColorMap[attr] = color;
            this.classifyColorRefs.push({
                attr,
                color,
                nums,
            });
        });
    }
    getClassifyMarkerColor(data) {
        return this.classifyColorMap[data[this.options.classifiedAttr]];
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
        const color = this.options.segmentedColors[parseInt('' + (val - this.segmentedMin) / this.segmentedStep, 10)];
        return color;
    }
    getPopupContent(data) {
        if (!this.options.popupAttr) {
            return '';
        }
        if (typeof this.options.popupAttr === 'string') {
            return `${this.options.popupAttr}: ${data[this.options.popupAttr]}`;
        }
        if (typeof this.options.popupAttr === 'object') {
            return `${this.options.popupAttr.label}: ${data[this.options.popupAttr.value]}`;
        }
    }
    iconCreateFunction(cluster) {
        const colors = ['#757472', '#5093E2', '#CB7987', '#FC763B'];
        const length = this.dataList.length;
        const step = length / colors.length;
        const scaleStep = (1 - 0.75) / colors.length;
        let color = this.options.iconColor;
        let scale = 1;
        if (this.options.renderClusterColorType === 'smart') {
            color = colors[Math.floor((cluster.getChildCount() - 1) / step)];
            scale =
                (Math.floor((cluster.getChildCount() - 1) / step) + 1) * scaleStep +
                    0.75;
        }
        return L.divIcon({
            html: `
       <div
        style="
          border-radius: 50%;
          position: relative;
          width: 50px;
          height: 50px;
          transform: scale3d(${scale}, ${scale}, 1)
        "
        >
        <div
          style="
            border-radius: 50%;
            background: ${Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["lighten"])(color)};
            width: 50px;
            height: 50px;
            opacity: 0.7;
            position: absolute;
            top: 0;
            left: 0;
            ">
        </div>
        <div
          style="
            border-radius: 50%;
            background: ${color};
            opacity: 0.8;
            width: 32px;
            height: 32px;
            margin: 9px;
          ">
        </div>
        <div
          style="
            text-align: center;
            line-height: 32px;
            position: absolute;
            top: 9px;
            left: 9px;
            width: 32px;
            height: 32px;
            color: white;
            font-size: 14px;
          "
          >
          ${cluster.getChildCount()}
        </div>
       </div>
      `,
            iconSize: [40, 40],
        });
    }
}


/***/ }),

/***/ "./src/polygon/GridsLayer.ts":
/*!***********************************!*\
  !*** ./src/polygon/GridsLayer.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridsLayer; });
/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Polygon */ "./src/polygon/Polygon.ts");
/* harmony import */ var _PolygonsLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PolygonsLayer */ "./src/polygon/PolygonsLayer.ts");


class GridsLayer extends _PolygonsLayer__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(map, dataList, options, channelFunc) {
        super(map, dataList, options, channelFunc);
        this.propMaxLength = -1;
    }
    redraw() {
        if (!this.visible) {
            return;
        }
        if (this.layer) {
            this.layer.remove();
        }
        this.layer = this.configGridLayer();
        this.map.addLayer(this.layer);
        // tooltip 有可能需要直接展示，需要在 polygon 添加到地图上之后才可以，所以需要延迟设置
        this.configTooltip();
        setTimeout(() => {
            this.zoomHandler();
        }, 200);
        return this;
    }
    toggleTooltip(visible) {
        this.polygons.forEach((polygon) => {
            if (polygon.getTooltip()) {
                polygon.getTooltip().setOpacity(visible ? 1 : 0);
            }
        });
    }
    initEvent() {
        this.map.on('zoom', this.zoomHandler.bind(this));
    }
    configTooltip() {
        this.propMaxLength = this.getPropMaxLength();
        if (this.options.tooltipAttr) {
            this.polygons.forEach((polygon) => {
                polygon.bindTooltip(this.getToolTipContent(polygon.getData()), {
                    permanent: true,
                    direction: 'center',
                });
            });
        }
    }
    configGridLayer() {
        this.polygonLayer = L.layerGroup();
        this.polygons = this.polygons.map((polygon) => {
            let color = this.options.color;
            if (this.options.renderPolygonColorType === 'segmented') {
                color = this.getSegmentedPolygonColor(polygon.getData());
            }
            const options = Object.assign({}, this.options, {
                color,
            });
            // 重新应用 options
            const newPolygon = new _Polygon__WEBPACK_IMPORTED_MODULE_0__["default"](polygon.getLatLngs(), options);
            newPolygon.setData(polygon.getData());
            newPolygon.on('click', () => {
                // this.polygonClickHandler(polygon)
            });
            if (this.options.popupAttr) {
                newPolygon.bindPopup(this.getPopupContent(newPolygon.getData()));
            }
            return newPolygon;
        });
        this.polygons.forEach((polygon) => {
            this.polygonLayer.addLayer(polygon);
        });
        return this.polygonLayer;
    }
    zoomHandler() {
        const polygon = this.polygons[0];
        if (!polygon) {
            return;
        }
        this.toggleTooltip(this.getRectangleWidth(polygon) >
            this.getTooltipMaxWidth(this.propMaxLength));
    }
    getRectangleWidth(polygon) {
        return (this.map.latLngToLayerPoint(polygon.getBounds().getNorthEast()).x -
            this.map.latLngToLayerPoint(polygon.getBounds().getSouthWest()).x);
    }
    getTooltipMaxWidth(textLength) {
        return textLength * 12 + 14;
    }
    getPropMaxLength() {
        const prop = typeof this.options.popupAttr === 'string'
            ? this.options.popupAttr
            : this.options.popupAttr.value;
        return this.polygons
            .map((polygon) => `${polygon.getData()[prop]}`.length)
            .reduce((prev, curr) => {
            return Math.max(prev, curr);
        }, 0);
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
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Polygon */ "./src/polygon/Polygon.ts");


const DEFAULT_COLOR = '#72AFDF';
class PolygonsLayer {
    constructor(map, dataList, options, channelFunc) {
        if (!Array.isArray(dataList) || dataList.length === 0) {
            throw new Error(`dataList 必须是非空数组`);
        }
        this.defaultOptions = {
            popupAttr: { label: '名称', value: 'name' },
            tooltipAttr: 'name',
            color: DEFAULT_COLOR,
            fill: true,
            fillColor: DEFAULT_COLOR,
            weight: 1,
            opacity: 1,
            fillOpacity: 0.4,
            renderPolygonColorType: 'single',
            segmentedColors: [DEFAULT_COLOR],
        };
        this.type = 'polygon';
        this.map = map;
        this.dataList = dataList;
        this.options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["optionsMerge"])(this.defaultOptions, options);
        this.channelFunc = channelFunc;
        this.visible = true;
        this.polygons = [];
        this.segmentedMin = Infinity;
        this.segmentedStep = 1;
        this.focusedPolygon = null;
        this.focusedDisplayPolygon = null;
    }
    draw(options) {
        this.initOptions(options);
        this.initPolygons();
        this.initEvent();
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
        this.map.fitBounds(this.getBounds(), { padding: [20, 20] });
    }
    getBounds() {
        if (this.polygons.length <= 0) {
            return this.map.getBounds();
        }
        return this.polygons.reduce((prev, curr) => prev.extend(curr.getBounds()), L.latLngBounds(this.polygons[0].getBounds().getNorthEast(), this.polygons[0].getBounds().getSouthWest()));
    }
    destroy() {
        if (this.layer) {
            this.map.removeLayer(this.layer);
        }
        if (this.focusedDisplayPolygon) {
            this.map.removeLayer(this.focusedDisplayPolygon);
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
            if (this.focusedDisplayPolygon) {
                this.focusedDisplayPolygon.remove();
            }
            this.map.removeLayer(this.layer);
        }
    }
    changeColor(color) {
        this.options.fillColor = color;
        this.redraw();
    }
    pitch(id) {
        this.polygons.forEach((polygon) => {
            if (polygon.getData().id === id) {
                this.polygonClickHandler(polygon, true);
                return;
            }
        });
    }
    // tslint:disable-next-line:no-empty
    initEvent() { }
    getToolTipContent(data) {
        return '' + data[this.options.tooltipAttr];
    }
    getPopupContent(data) {
        if (!this.options.popupAttr) {
            return '';
        }
        if (typeof this.options.popupAttr === 'string') {
            return `${this.options.popupAttr}: ${data[this.options.popupAttr]}`;
        }
        if (typeof this.options.popupAttr === 'object') {
            return `${this.options.popupAttr.label}: ${data[this.options.popupAttr.value]}`;
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
    getSegmentedPolygonColor(data) {
        const val = data[this.options.segmentedAttr];
        const color = this.options.segmentedColors[parseInt('' + (val - this.segmentedMin) / this.segmentedStep, 10)];
        return color;
    }
    polygonClickHandler(polygon, fitBounds) {
        this.focusedPolygon = polygon;
        // 删除前一个 focus
        if (this.focusedDisplayPolygon) {
            this.focusedDisplayPolygon.remove();
        }
        // 生成当前 focus
        this.focusedDisplayPolygon = new _Polygon__WEBPACK_IMPORTED_MODULE_1__["default"](polygon.getLatLngs(), {
            color: DEFAULT_COLOR,
            fillColor: this.getColor(polygon.getData()),
        });
        this.focusedDisplayPolygon.addTo(this.map);
        this.focusedDisplayPolygon
            .bindPopup(this.getPopupContent(polygon.getData()))
            .openPopup();
        this.focusedDisplayPolygon.on('popupclose', () => {
            this.focusedDisplayPolygon.remove();
        });
        polygon.closeTooltip();
        this.map.panTo(this.focusedDisplayPolygon.getCenter());
        if (fitBounds) {
            this.map.fitBounds(polygon.getBounds());
        }
        this.channelFunc('on-click-polygon', polygon);
    }
    initOptions(options) {
        this.options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["optionsMerge"])(this.defaultOptions, this.options, options);
    }
    initPolygons() {
        // 缓存 segment 相关数据
        this.cacheSegmentParams();
        this.polygons = [];
        this.dataList.forEach((data) => {
            const layer = L.geoJSON(data.geometry).getLayers()[0];
            const polygon = new _Polygon__WEBPACK_IMPORTED_MODULE_1__["default"](layer.getLatLngs());
            polygon.setData(data);
            this.polygons.push(polygon);
        });
    }
    configPolygonLayer() {
        this.polygonLayer = L.layerGroup();
        this.polygons = this.polygons.map((polygon) => {
            const options = Object.assign({}, this.options, {
                color: DEFAULT_COLOR,
                fillColor: this.getColor(polygon.getData()),
            });
            // 重新应用 options
            const newPolygon = new _Polygon__WEBPACK_IMPORTED_MODULE_1__["default"](polygon.getLatLngs(), options);
            newPolygon.setData(polygon.getData());
            if (this.options.tooltipAttr) {
                newPolygon.bindTooltip(this.getToolTipContent(newPolygon.getData()));
            }
            newPolygon.on('click', () => {
                this.polygonClickHandler(polygon);
            });
            return newPolygon;
        });
        this.polygons.forEach((polygon) => {
            this.polygonLayer.addLayer(polygon);
        });
        return this.polygonLayer;
    }
    getColor(data, mode) {
        let color = this.options.color;
        if (this.options.renderPolygonColorType === 'segmented') {
            color = this.getSegmentedPolygonColor(data);
        }
        switch (mode) {
            case 'darken':
                return Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["darken"])(color);
            case 'lighten':
                return Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["lighten"])(color);
            default:
                return color;
        }
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
    }
    draw(options) {
        this.options = Object.assign(this.options, options);
        this.initPolylines();
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
            const polylineBuffer = L.corridor(polyline.getLatLngs().map((latLng) => L.latLng([latLng.lat, latLng.lng])), options);
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
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");


class PolylinesLayer {
    constructor(map, dataList, options, channelFunc) {
        if (!Array.isArray(dataList) || dataList.length === 0) {
            throw new Error(`dataList 必须是非空数组`);
        }
        this.defaultOptions = {
            color: '#3388FF',
            renderPolylineColorType: 'single',
            segmentedColors: ['#3388FF'],
            popupAttr: { label: '名称', value: 'name' },
            tooltipAttr: 'name',
        };
        this.type = 'polyline';
        this.map = map;
        this.dataList = dataList;
        this.options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["optionsMerge"])(this.defaultOptions, options);
        this.channelFunc = channelFunc;
        this.visible = true;
        this.polylines = [];
        this.segmentedMin = Infinity;
        this.segmentedStep = 1;
        this.focusedPolyline = null;
        this.focusedDisplayPolyline = null;
    }
    draw(options) {
        this.initOptions(options);
        this.initPolylines();
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
        this.map.fitBounds(this.getBounds(), { padding: [20, 20] });
    }
    getBounds() {
        if (this.polylines.length <= 0) {
            return this.map.getBounds();
        }
        return this.polylines.reduce((prev, curr) => prev.extend(curr.getBounds()), L.latLngBounds(this.polylines[0].getBounds().getNorthEast(), this.polylines[0].getBounds().getSouthWest()));
    }
    destroy() {
        if (this.layer) {
            this.map.removeLayer(this.layer);
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
            if (this.focusedDisplayPolyline) {
                this.focusedDisplayPolyline.remove();
            }
            this.map.removeLayer(this.layer);
        }
    }
    changeColor(color) {
        this.options.fillColor = color;
        this.redraw();
    }
    pitch(id) {
        this.polylines.forEach((polyline) => {
            if (polyline.getData().id === id) {
                this.polylineClickHandler(polyline, true);
                return;
            }
        });
    }
    initOptions(options) {
        this.options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["optionsMerge"])(this.defaultOptions, this.options, options);
    }
    initPolylines() {
        // 缓存 segment 相关数据
        this.cacheSegmentParams();
        this.polylines = this.dataList.map((data) => {
            const layer = L.geoJSON(data.geometry).getLayers()[0];
            // let color = this.options.color
            // if (this.options.renderPolylineColorType === 'segmented') {
            //   color = this.getSegmentedPolylineColor(data)
            // }
            const polyline = new _Polyline__WEBPACK_IMPORTED_MODULE_0__["default"](layer.getLatLngs());
            // 将相关值绑定到 marker上
            polyline.setData(data);
            return polyline;
        });
    }
    getSegmentedPolylineColor(data) {
        const val = data[this.options.segmentedAttr];
        const color = this.options.segmentedColors[parseInt('' + (val - this.segmentedMin) / this.segmentedStep, 10)];
        return color;
    }
    polylineClickHandler(polyline, fitBounds) {
        this.focusedPolyline = polyline;
        // 删除前一个 focus
        if (this.focusedDisplayPolyline) {
            this.focusedDisplayPolyline.remove();
        }
        // 生成当前 focus
        this.focusedDisplayPolyline = new _Polyline__WEBPACK_IMPORTED_MODULE_0__["default"](polyline.getLatLngs(), {
            color: this.getColor(polyline.getData()),
            fillColor: this.getColor(polyline.getData(), 'normal'),
        });
        this.focusedDisplayPolyline.addTo(this.map);
        this.focusedDisplayPolyline
            .bindPopup(this.getPopupContent(polyline.getData()))
            .openPopup();
        this.focusedDisplayPolyline.on('popupclose', () => {
            this.focusedDisplayPolyline.remove();
        });
        polyline.closeTooltip();
        this.map.panTo(this.focusedDisplayPolyline.getCenter());
        if (fitBounds) {
            this.map.fitBounds(polyline.getBounds());
        }
        this.channelFunc('on-click-polyline', polyline);
    }
    getToolTipContent(data) {
        return '' + data[this.options.tooltipAttr];
    }
    getPopupContent(data) {
        if (!this.options.popupAttr) {
            return '';
        }
        if (typeof this.options.popupAttr === 'string') {
            return `${this.options.popupAttr}: ${data[this.options.popupAttr]}`;
        }
        if (typeof this.options.popupAttr === 'object') {
            return `${this.options.popupAttr.label}: ${data[this.options.popupAttr.value]}`;
        }
    }
    configPolylineLayer() {
        this.polylineLayer = L.layerGroup();
        this.polylines.forEach((polyline) => {
            let color = this.options.color;
            if (this.options.renderPolylineColorType === 'segmented') {
                color = this.getSegmentedPolylineColor(polyline.getData());
            }
            const options = Object.assign({}, this.options, {
                color,
            });
            const newPolyline = new _Polyline__WEBPACK_IMPORTED_MODULE_0__["default"](polyline.getLatLngs(), options);
            newPolyline.on('click', () => {
                this.polylineClickHandler(polyline);
            });
            newPolyline.setData(polyline.getData());
            if (this.options.tooltipAttr) {
                newPolyline.bindTooltip(this.getToolTipContent(newPolyline.getData()));
            }
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
    getColor(data, mode) {
        let color = this.options.color;
        if (this.options.renderPolylineColorType === 'segmented') {
            color = this.getSegmentedPolylineColor(data);
        }
        switch (mode) {
            case 'darken':
                return Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["darken"])(color);
            case 'lighten':
                return Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["lighten"])(color);
            default:
                return color;
        }
    }
}


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: default, lighten, darken, optionsMerge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return lighten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return darken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsMerge", function() { return optionsMerge; });
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_0__);

function lighten(hexColor) {
    return color__WEBPACK_IMPORTED_MODULE_0__(hexColor)
        .lighten(0.5)
        .hex();
}
function darken(hexColor) {
    return color__WEBPACK_IMPORTED_MODULE_0__(hexColor)
        .darken(0.5)
        .hex();
}
function optionsMerge(...targets) {
    if (targets.length === 0) {
        return {};
    }
    if (targets.length === 1) {
        return targets[0];
    }
    const merged = targets[0];
    for (const key in targets[1]) {
        if (key in merged) {
            if (Object.prototype.toString.call(merged[key]) === '[object Object]') {
                merged[key] = optionsMerge(merged[key], targets[1][key]);
            }
            else {
                merged[key] = targets[1][key];
            }
        }
        else {
            merged[key] = targets[1][key];
        }
    }
    return optionsMerge(merged, ...targets.slice(2));
}
/* harmony default export */ __webpack_exports__["default"] = ({
    lighten,
    darken,
    optionsMerge,
});



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvbWFya2VyL01hcmtlci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHNEQUFZOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYTtBQUM1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuMkJBLGtCQUFrQixtQkFBTyxDQUFDLGtFQUFlO0FBQ3pDLFlBQVksbUJBQU8sQ0FBQyxzREFBUzs7QUFFN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0RBQXdELHVDQUF1QztBQUMvRixzREFBc0QscUNBQXFDOztBQUUzRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7QUM3RUEsa0JBQWtCLG1CQUFPLENBQUMsa0VBQWU7O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsU0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9GWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGdGQUFZO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixJQUFJO0FBQzdCLHdCQUF3QixFQUFFLFdBQVcsRUFBRTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDek9ZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQywwREFBYztBQUN4QyxjQUFjLG1CQUFPLENBQUMsNERBQWU7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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R0FBRyxJQUFJLE1BQU0sRUFBRTtZQUNqQixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxpQkFBaUIsRUFBRTtnQkFDckUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2FBQzlCO1NBQ0Y7YUFBTTtZQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQzlCO0tBQ0Y7SUFDRCxPQUFPLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFYztJQUNiLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtDQUNiO0FBQ3VDIiwiZmlsZSI6ImxlYWZsZXQtbGF5ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxlYWZsZXRNYXBcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjc3NLZXl3b3JkcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxudmFyIHJldmVyc2VLZXl3b3JkcyA9IHt9O1xuZm9yICh2YXIga2V5IGluIGNzc0tleXdvcmRzKSB7XG5cdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0cmV2ZXJzZUtleXdvcmRzW2Nzc0tleXdvcmRzW2tleV1dID0ga2V5O1xuXHR9XG59XG5cbnZhciBjb252ZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHJnYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdyZ2InfSxcblx0aHNsOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzbCd9LFxuXHRoc3Y6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHN2J30sXG5cdGh3Yjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdod2InfSxcblx0Y215azoge2NoYW5uZWxzOiA0LCBsYWJlbHM6ICdjbXlrJ30sXG5cdHh5ejoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICd4eXonfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xhYid9LFxuXHRsY2g6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGNoJ30sXG5cdGhleDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnaGV4J119LFxuXHRrZXl3b3JkOiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydrZXl3b3JkJ119LFxuXHRhbnNpMTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kxNiddfSxcblx0YW5zaTI1Njoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTI1NiddfSxcblx0aGNnOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydoJywgJ2MnLCAnZyddfSxcblx0YXBwbGU6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ3IxNicsICdnMTYnLCAnYjE2J119LFxuXHRncmF5OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydncmF5J119XG59O1xuXG4vLyBoaWRlIC5jaGFubmVscyBhbmQgLmxhYmVscyBwcm9wZXJ0aWVzXG5mb3IgKHZhciBtb2RlbCBpbiBjb252ZXJ0KSB7XG5cdGlmIChjb252ZXJ0Lmhhc093blByb3BlcnR5KG1vZGVsKSkge1xuXHRcdGlmICghKCdjaGFubmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoJ2xhYmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbCBsYWJlbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnZlcnRbbW9kZWxdLmxhYmVscy5sZW5ndGggIT09IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NoYW5uZWwgYW5kIGxhYmVsIGNvdW50cyBtaXNtYXRjaDogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbGFiZWxzID0gY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjaGFubmVsc30pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogbGFiZWxzfSk7XG5cdH1cbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRlbHRhID0gbWF4IC0gbWluO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cdHZhciBsO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0bCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZGlmO1xuXHR2YXIgZ2RpZjtcblx0dmFyIGJkaWY7XG5cdHZhciBoO1xuXHR2YXIgcztcblxuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgdiA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIGRpZmZjID0gZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gKHYgLSBjKSAvIDYgLyBkaWZmICsgMSAvIDI7XG5cdH07XG5cblx0aWYgKGRpZmYgPT09IDApIHtcblx0XHRoID0gcyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRpZmYgLyB2O1xuXHRcdHJkaWYgPSBkaWZmYyhyKTtcblx0XHRnZGlmID0gZGlmZmMoZyk7XG5cdFx0YmRpZiA9IGRpZmZjKGIpO1xuXG5cdFx0aWYgKHIgPT09IHYpIHtcblx0XHRcdGggPSBiZGlmIC0gZ2RpZjtcblx0XHR9IGVsc2UgaWYgKGcgPT09IHYpIHtcblx0XHRcdGggPSAoMSAvIDMpICsgcmRpZiAtIGJkaWY7XG5cdFx0fSBlbHNlIGlmIChiID09PSB2KSB7XG5cdFx0XHRoID0gKDIgLyAzKSArIGdkaWYgLSByZGlmO1xuXHRcdH1cblx0XHRpZiAoaCA8IDApIHtcblx0XHRcdGggKz0gMTtcblx0XHR9IGVsc2UgaWYgKGggPiAxKSB7XG5cdFx0XHRoIC09IDE7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRoICogMzYwLFxuXHRcdHMgKiAxMDAsXG5cdFx0diAqIDEwMFxuXHRdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXTtcblx0dmFyIGcgPSByZ2JbMV07XG5cdHZhciBiID0gcmdiWzJdO1xuXHR2YXIgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHR2YXIgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgYztcblx0dmFyIG07XG5cdHZhciB5O1xuXHR2YXIgaztcblxuXHRrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cdGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0bSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHR5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbi8qKlxuICogU2VlIGh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvRXVjbGlkZWFuX2Rpc3RhbmNlI1NxdWFyZWRfRXVjbGlkZWFuX2Rpc3RhbmNlXG4gKiAqL1xuZnVuY3Rpb24gY29tcGFyYXRpdmVEaXN0YW5jZSh4LCB5KSB7XG5cdHJldHVybiAoXG5cdFx0TWF0aC5wb3coeFswXSAtIHlbMF0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzFdIC0geVsxXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMl0gLSB5WzJdLCAyKVxuXHQpO1xufVxuXG5jb252ZXJ0LnJnYi5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmV2ZXJzZWQgPSByZXZlcnNlS2V5d29yZHNbcmdiXTtcblx0aWYgKHJldmVyc2VkKSB7XG5cdFx0cmV0dXJuIHJldmVyc2VkO1xuXHR9XG5cblx0dmFyIGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0dmFyIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcblxuXHRmb3IgKHZhciBrZXl3b3JkIGluIGNzc0tleXdvcmRzKSB7XG5cdFx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleXdvcmQpKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcblxuXHRcdFx0Ly8gQ29tcHV0ZSBjb21wYXJhdGl2ZSBkaXN0YW5jZVxuXHRcdFx0dmFyIGRpc3RhbmNlID0gY29tcGFyYXRpdmVEaXN0YW5jZShyZ2IsIHZhbHVlKTtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgaXRzIGxlc3MsIGlmIHNvIHNldCBhcyBjbG9zZXN0XG5cdFx0XHRpZiAoZGlzdGFuY2UgPCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlKSB7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3RLZXl3b3JkID0ga2V5d29yZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENsb3Nlc3RLZXl3b3JkO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKHIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChnICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KCgoYiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdHZhciB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHR2YXIgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcblx0dmFyIHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHh5eiA9IGNvbnZlcnQucmdiLnh5eihyZ2IpO1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF0gLyAzNjA7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHQxO1xuXHR2YXIgdDI7XG5cdHZhciB0Mztcblx0dmFyIHJnYjtcblx0dmFyIHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHR0MSA9IDIgKiBsIC0gdDI7XG5cblx0cmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF07XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHNtaW4gPSBzO1xuXHR2YXIgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXHR2YXIgc3Y7XG5cdHZhciB2O1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdHYgPSAobCArIHMpIC8gMjtcblx0c3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF0gLyA2MDtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHR2YXIgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHR2YXIgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHR2YXIgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHR2YXIgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF07XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcblx0dmFyIGxtaW47XG5cdHZhciBzbDtcblx0dmFyIGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgaCA9IGh3YlswXSAvIDM2MDtcblx0dmFyIHdoID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYmwgPSBod2JbMl0gLyAxMDA7XG5cdHZhciByYXRpbyA9IHdoICsgYmw7XG5cdHZhciBpO1xuXHR2YXIgdjtcblx0dmFyIGY7XG5cdHZhciBuO1xuXG5cdC8vIHdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0aSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHR2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0biA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cdHN3aXRjaCAoaSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0Y2FzZSA2OlxuXHRcdGNhc2UgMDogciA9IHY7IGcgPSBuOyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47IGcgPSB2OyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNDogciA9IG47IGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7IGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHR2YXIgYyA9IGNteWtbMF0gLyAxMDA7XG5cdHZhciBtID0gY215a1sxXSAvIDEwMDtcblx0dmFyIHkgPSBjbXlrWzJdIC8gMTAwO1xuXHR2YXIgayA9IGNteWtbM10gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXSAvIDEwMDtcblx0dmFyIHkgPSB4eXpbMV0gLyAxMDA7XG5cdHZhciB6ID0geHl6WzJdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGcsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBnICogMTIuOTI7XG5cblx0YiA9IGIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhiLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciB4O1xuXHR2YXIgeTtcblx0dmFyIHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHR2YXIgeTIgPSBNYXRoLnBvdyh5LCAzKTtcblx0dmFyIHgyID0gTWF0aC5wb3coeCwgMyk7XG5cdHZhciB6MiA9IE1hdGgucG93KHosIDMpO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciBocjtcblx0dmFyIGg7XG5cdHZhciBjO1xuXG5cdGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdHZhciBsID0gbGNoWzBdO1xuXHR2YXIgYyA9IGxjaFsxXTtcblx0dmFyIGggPSBsY2hbMl07XG5cdHZhciBhO1xuXHR2YXIgYjtcblx0dmFyIGhyO1xuXG5cdGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRhID0gYyAqIE1hdGguY29zKGhyKTtcblx0YiA9IGMgKiBNYXRoLnNpbihocik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cdHZhciB2YWx1ZSA9IDEgaW4gYXJndW1lbnRzID8gYXJndW1lbnRzWzFdIDogY29udmVydC5yZ2IuaHN2KGFyZ3MpWzJdOyAvLyBoc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBvcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cblx0Ly8gd2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDE2XG5cdFx0KyAoMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSlcblx0XHQrICg2ICogTWF0aC5yb3VuZChnIC8gMjU1ICogNSkpXG5cdFx0KyBNYXRoLnJvdW5kKGIgLyAyNTUgKiA1KTtcblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHR2YXIgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdHZhciByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5hbnNpMjU2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGFyZ3MgPj0gMjMyKSB7XG5cdFx0dmFyIGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0dmFyIHJlbTtcblx0dmFyIHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHR2YXIgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG5cdHZhciBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGludGVnZXIgPSAoKE1hdGgucm91bmQoYXJnc1swXSkgJiAweEZGKSA8PCAxNilcblx0XHQrICgoTWF0aC5yb3VuZChhcmdzWzFdKSAmIDB4RkYpIDw8IDgpXG5cdFx0KyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9fFthLWYwLTldezN9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdHZhciBjb2xvclN0cmluZyA9IG1hdGNoWzBdO1xuXG5cdGlmIChtYXRjaFswXS5sZW5ndGggPT09IDMpIHtcblx0XHRjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGNoYXIpIHtcblx0XHRcdHJldHVybiBjaGFyICsgY2hhcjtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdHZhciBpbnRlZ2VyID0gcGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcblx0dmFyIHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHR2YXIgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0dmFyIGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHR2YXIgbWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHR2YXIgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdHZhciBncmF5c2NhbGU7XG5cdHZhciBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYSArIDQ7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHNsLmhjZyA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgYyA9IDE7XG5cdHZhciBmID0gMDtcblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdGMgPSAyLjAgKiBzICogbDtcblx0fSBlbHNlIHtcblx0XHRjID0gMi4wICogcyAqICgxLjAgLSBsKTtcblx0fVxuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHR2YXIgYyA9IHMgKiB2O1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBoID0gaGNnWzBdIC8gMzYwO1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHR2YXIgcHVyZSA9IFswLCAwLCAwXTtcblx0dmFyIGhpID0gKGggJSAxKSAqIDY7XG5cdHZhciB2ID0gaGkgJSAxO1xuXHR2YXIgdyA9IDEgLSB2O1xuXHR2YXIgbWcgPSAwO1xuXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXG5cdG1nID0gKDEuMCAtIGMpICogZztcblxuXHRyZXR1cm4gW1xuXHRcdChjICogcHVyZVswXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XG5cdF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHR2YXIgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHJldHVybiBbaGNnWzBdLCAodiAtIGMpICogMTAwLCAoMSAtIHYpICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIHcgPSBod2JbMV0gLyAxMDA7XG5cdHZhciBiID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgdiA9IDEgLSBiO1xuXHR2YXIgYyA9IHYgLSB3O1xuXHR2YXIgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcblxuY29udmVydC5ncmF5LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHNsID0gY29udmVydC5ncmF5LmhzdiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbMCwgMCwgYXJnc1swXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHdiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAxMDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmNteWsgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDAsIDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmxhYiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbZ3JheVswXSwgMCwgMF07XG59O1xuXG5jb252ZXJ0LmdyYXkuaGV4ID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0dmFyIHZhbCA9IE1hdGgucm91bmQoZ3JheVswXSAvIDEwMCAqIDI1NSkgJiAweEZGO1xuXHR2YXIgaW50ZWdlciA9ICh2YWwgPDwgMTYpICsgKHZhbCA8PCA4KSArIHZhbDtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQucmdiLmdyYXkgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB2YWwgPSAocmdiWzBdICsgcmdiWzFdICsgcmdiWzJdKSAvIDM7XG5cdHJldHVybiBbdmFsIC8gMjU1ICogMTAwXTtcbn07XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG52YXIgcm91dGUgPSByZXF1aXJlKCcuL3JvdXRlJyk7XG5cbnZhciBjb252ZXJ0ID0ge307XG5cbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbihhcmdzKTtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHR2YXIgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyB3ZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yICh2YXIgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0Y29udmVydFtmcm9tTW9kZWxdID0ge307XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0ubGFiZWxzfSk7XG5cblx0dmFyIHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdHZhciByb3V0ZU1vZGVscyA9IE9iamVjdC5rZXlzKHJvdXRlcyk7XG5cblx0cm91dGVNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAodG9Nb2RlbCkge1xuXHRcdHZhciBmbiA9IHJvdXRlc1t0b01vZGVsXTtcblxuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG5cdH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcblxuLypcblx0dGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdHZhciBncmFwaCA9IHt9O1xuXHQvLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cblx0Zm9yICh2YXIgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGdyYXBoW21vZGVsc1tpXV0gPSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS8xLXZzLWluZmluaXR5XG5cdFx0XHQvLyBtaWNyby1vcHQsIGJ1dCB0aGlzIGlzIHNpbXBsZS5cblx0XHRcdGRpc3RhbmNlOiAtMSxcblx0XHRcdHBhcmVudDogbnVsbFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JyZWFkdGgtZmlyc3Rfc2VhcmNoXG5mdW5jdGlvbiBkZXJpdmVCRlMoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGJ1aWxkR3JhcGgoKTtcblx0dmFyIHF1ZXVlID0gW2Zyb21Nb2RlbF07IC8vIHVuc2hpZnQgLT4gcXVldWUgLT4gcG9wXG5cblx0Z3JhcGhbZnJvbU1vZGVsXS5kaXN0YW5jZSA9IDA7XG5cblx0d2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuXHRcdHZhciBjdXJyZW50ID0gcXVldWUucG9wKCk7XG5cdFx0dmFyIGFkamFjZW50cyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zW2N1cnJlbnRdKTtcblxuXHRcdGZvciAodmFyIGxlbiA9IGFkamFjZW50cy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHZhciBhZGphY2VudCA9IGFkamFjZW50c1tpXTtcblx0XHRcdHZhciBub2RlID0gZ3JhcGhbYWRqYWNlbnRdO1xuXG5cdFx0XHRpZiAobm9kZS5kaXN0YW5jZSA9PT0gLTEpIHtcblx0XHRcdFx0bm9kZS5kaXN0YW5jZSA9IGdyYXBoW2N1cnJlbnRdLmRpc3RhbmNlICsgMTtcblx0XHRcdFx0bm9kZS5wYXJlbnQgPSBjdXJyZW50O1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KGFkamFjZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGxpbmsoZnJvbSwgdG8pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0cmV0dXJuIHRvKGZyb20oYXJncykpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCkge1xuXHR2YXIgcGF0aCA9IFtncmFwaFt0b01vZGVsXS5wYXJlbnQsIHRvTW9kZWxdO1xuXHR2YXIgZm4gPSBjb252ZXJzaW9uc1tncmFwaFt0b01vZGVsXS5wYXJlbnRdW3RvTW9kZWxdO1xuXG5cdHZhciBjdXIgPSBncmFwaFt0b01vZGVsXS5wYXJlbnQ7XG5cdHdoaWxlIChncmFwaFtjdXJdLnBhcmVudCkge1xuXHRcdHBhdGgudW5zaGlmdChncmFwaFtjdXJdLnBhcmVudCk7XG5cdFx0Zm4gPSBsaW5rKGNvbnZlcnNpb25zW2dyYXBoW2N1cl0ucGFyZW50XVtjdXJdLCBmbik7XG5cdFx0Y3VyID0gZ3JhcGhbY3VyXS5wYXJlbnQ7XG5cdH1cblxuXHRmbi5jb252ZXJzaW9uID0gcGF0aDtcblx0cmV0dXJuIGZuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gZGVyaXZlQkZTKGZyb21Nb2RlbCk7XG5cdHZhciBjb252ZXJzaW9uID0ge307XG5cblx0dmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGdyYXBoKTtcblx0Zm9yICh2YXIgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciB0b01vZGVsID0gbW9kZWxzW2ldO1xuXHRcdHZhciBub2RlID0gZ3JhcGhbdG9Nb2RlbF07XG5cblx0XHRpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcblx0XHRcdC8vIG5vIHBvc3NpYmxlIGNvbnZlcnNpb24sIG9yIHRoaXMgbm9kZSBpcyB0aGUgc291cmNlIG1vZGVsLlxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udmVyc2lvblt0b01vZGVsXSA9IHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKTtcblx0fVxuXG5cdHJldHVybiBjb252ZXJzaW9uO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY29sb3JOYW1lcyA9IHJlcXVpcmUoJ2NvbG9yLW5hbWUnKTtcbnZhciBzd2l6emxlID0gcmVxdWlyZSgnc2ltcGxlLXN3aXp6bGUnKTtcblxudmFyIHJldmVyc2VOYW1lcyA9IHt9O1xuXG4vLyBjcmVhdGUgYSBsaXN0IG9mIHJldmVyc2UgY29sb3IgbmFtZXNcbmZvciAodmFyIG5hbWUgaW4gY29sb3JOYW1lcykge1xuXHRpZiAoY29sb3JOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdHJldmVyc2VOYW1lc1tjb2xvck5hbWVzW25hbWVdXSA9IG5hbWU7XG5cdH1cbn1cblxudmFyIGNzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHRvOiB7fSxcblx0Z2V0OiB7fVxufTtcblxuY3MuZ2V0ID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHR2YXIgcHJlZml4ID0gc3RyaW5nLnN1YnN0cmluZygwLCAzKS50b0xvd2VyQ2FzZSgpO1xuXHR2YXIgdmFsO1xuXHR2YXIgbW9kZWw7XG5cdHN3aXRjaCAocHJlZml4KSB7XG5cdFx0Y2FzZSAnaHNsJzpcblx0XHRcdHZhbCA9IGNzLmdldC5oc2woc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2hzbCc7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdod2InOlxuXHRcdFx0dmFsID0gY3MuZ2V0Lmh3YihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAnaHdiJztcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2YWwgPSBjcy5nZXQucmdiKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdyZ2InO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRpZiAoIXZhbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHttb2RlbDogbW9kZWwsIHZhbHVlOiB2YWx9O1xufTtcblxuY3MuZ2V0LnJnYiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBhYmJyID0gL14jKFthLWYwLTldezMsNH0pJC9pO1xuXHR2YXIgaGV4ID0gL14jKFthLWYwLTldezZ9KShbYS1mMC05XXsyfSk/JC9pO1xuXHR2YXIgcmdiYSA9IC9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgcGVyID0gL15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBrZXl3b3JkID0gLyhcXEQrKS87XG5cblx0dmFyIHJnYiA9IFswLCAwLCAwLCAxXTtcblx0dmFyIG1hdGNoO1xuXHR2YXIgaTtcblx0dmFyIGhleEFscGhhO1xuXG5cdGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChoZXgpKSB7XG5cdFx0aGV4QWxwaGEgPSBtYXRjaFsyXTtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL3NsaWNlLXZzLXN1YnN0ci12cy1zdWJzdHJpbmctbWV0aG9kcy1sb25nLXN0cmluZy8xOVxuXHRcdFx0dmFyIGkyID0gaSAqIDI7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaC5zbGljZShpMiwgaTIgKyAyKSwgMTYpO1xuXHRcdH1cblxuXHRcdGlmIChoZXhBbHBoYSkge1xuXHRcdFx0cmdiWzNdID0gTWF0aC5yb3VuZCgocGFyc2VJbnQoaGV4QWxwaGEsIDE2KSAvIDI1NSkgKiAxMDApIC8gMTAwO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKSkge1xuXHRcdG1hdGNoID0gbWF0Y2hbMV07XG5cdFx0aGV4QWxwaGEgPSBtYXRjaFszXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2ldICsgbWF0Y2hbaV0sIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhICsgaGV4QWxwaGEsIDE2KSAvIDI1NSkgKiAxMDApIC8gMTAwO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSwgMCk7XG5cdFx0fVxuXG5cdFx0aWYgKG1hdGNoWzRdKSB7XG5cdFx0XHRyZ2JbM10gPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocGVyKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChtYXRjaFtpICsgMV0pICogMi41NSk7XG5cdFx0fVxuXG5cdFx0aWYgKG1hdGNoWzRdKSB7XG5cdFx0XHRyZ2JbM10gPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goa2V5d29yZCkpIHtcblx0XHRpZiAobWF0Y2hbMV0gPT09ICd0cmFuc3BhcmVudCcpIHtcblx0XHRcdHJldHVybiBbMCwgMCwgMCwgMF07XG5cdFx0fVxuXG5cdFx0cmdiID0gY29sb3JOYW1lc1ttYXRjaFsxXV07XG5cblx0XHRpZiAoIXJnYikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmdiWzNdID0gMTtcblxuXHRcdHJldHVybiByZ2I7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0cmdiW2ldID0gY2xhbXAocmdiW2ldLCAwLCAyNTUpO1xuXHR9XG5cdHJnYlszXSA9IGNsYW1wKHJnYlszXSwgMCwgMSk7XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNzLmdldC5oc2wgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgaHNsID0gL15oc2xhP1xcKFxccyooWystXT8oPzpcXGQqXFwuKT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGhzbCk7XG5cblx0aWYgKG1hdGNoKSB7XG5cdFx0dmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0dmFyIGggPSAocGFyc2VGbG9hdChtYXRjaFsxXSkgKyAzNjApICUgMzYwO1xuXHRcdHZhciBzID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGwgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cblx0XHRyZXR1cm4gW2gsIHMsIGwsIGFdO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jcy5nZXQuaHdiID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGh3YiA9IC9eaHdiXFwoXFxzKihbKy1dP1xcZCpbXFwuXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG5cblx0aWYgKG1hdGNoKSB7XG5cdFx0dmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0dmFyIGggPSAoKHBhcnNlRmxvYXQobWF0Y2hbMV0pICUgMzYwKSArIDM2MCkgJSAzNjA7XG5cdFx0dmFyIHcgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKTtcblx0XHR2YXIgYiA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApO1xuXHRcdHZhciBhID0gY2xhbXAoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcblx0XHRyZXR1cm4gW2gsIHcsIGIsIGFdO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jcy50by5oZXggPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHJldHVybiAoXG5cdFx0JyMnICtcblx0XHRoZXhEb3VibGUocmdiYVswXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzFdKSArXG5cdFx0aGV4RG91YmxlKHJnYmFbMl0pICtcblx0XHQocmdiYVszXSA8IDFcblx0XHRcdD8gKGhleERvdWJsZShNYXRoLnJvdW5kKHJnYmFbM10gKiAyNTUpKSlcblx0XHRcdDogJycpXG5cdCk7XG59O1xuXG5jcy50by5yZ2IgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnKSdcblx0XHQ6ICdyZ2JhKCcgKyBNYXRoLnJvdW5kKHJnYmFbMF0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsxXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzJdKSArICcsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8ucmdiLnBlcmNlbnQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdIC8gMjU1ICogMTAwKTtcblx0dmFyIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0gLyAyNTUgKiAxMDApO1xuXHR2YXIgYiA9IE1hdGgucm91bmQocmdiYVsyXSAvIDI1NSAqIDEwMCk7XG5cblx0cmV0dXJuIHJnYmEubGVuZ3RoIDwgNCB8fCByZ2JhWzNdID09PSAxXG5cdFx0PyAncmdiKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUpJ1xuXHRcdDogJ3JnYmEoJyArIHIgKyAnJSwgJyArIGcgKyAnJSwgJyArIGIgKyAnJSwgJyArIHJnYmFbM10gKyAnKSc7XG59O1xuXG5jcy50by5oc2wgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBoc2xhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXHRyZXR1cm4gaHNsYS5sZW5ndGggPCA0IHx8IGhzbGFbM10gPT09IDFcblx0XHQ/ICdoc2woJyArIGhzbGFbMF0gKyAnLCAnICsgaHNsYVsxXSArICclLCAnICsgaHNsYVsyXSArICclKSdcblx0XHQ6ICdoc2xhKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSwgJyArIGhzbGFbM10gKyAnKSc7XG59O1xuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuY3MudG8uaHdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgYSA9ICcnO1xuXHRpZiAoaHdiYS5sZW5ndGggPj0gNCAmJiBod2JhWzNdICE9PSAxKSB7XG5cdFx0YSA9ICcsICcgKyBod2JhWzNdO1xuXHR9XG5cblx0cmV0dXJuICdod2IoJyArIGh3YmFbMF0gKyAnLCAnICsgaHdiYVsxXSArICclLCAnICsgaHdiYVsyXSArICclJyArIGEgKyAnKSc7XG59O1xuXG5jcy50by5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gcmV2ZXJzZU5hbWVzW3JnYi5zbGljZSgwLCAzKV07XG59O1xuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBjbGFtcChudW0sIG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIG51bSksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGhleERvdWJsZShudW0pIHtcblx0dmFyIHN0ciA9IG51bS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuIChzdHIubGVuZ3RoIDwgMikgPyAnMCcgKyBzdHIgOiBzdHI7XG59XG4iLCIndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcclxuXHRcImFudGlxdWV3aGl0ZVwiOiBbMjUwLCAyMzUsIDIxNV0sXHJcblx0XCJhcXVhXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcclxuXHRcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcclxuXHRcImJlaWdlXCI6IFsyNDUsIDI0NSwgMjIwXSxcclxuXHRcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXHJcblx0XCJibGFja1wiOiBbMCwgMCwgMF0sXHJcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LCAyMzUsIDIwNV0sXHJcblx0XCJibHVlXCI6IFswLCAwLCAyNTVdLFxyXG5cdFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcclxuXHRcImJyb3duXCI6IFsxNjUsIDQyLCA0Ml0sXHJcblx0XCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxyXG5cdFwiY2FkZXRibHVlXCI6IFs5NSwgMTU4LCAxNjBdLFxyXG5cdFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxyXG5cdFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxyXG5cdFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXHJcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLCAxNDksIDIzN10sXHJcblx0XCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXHJcblx0XCJjcmltc29uXCI6IFsyMjAsIDIwLCA2MF0sXHJcblx0XCJjeWFuXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcclxuXHRcImRhcmtjeWFuXCI6IFswLCAxMzksIDEzOV0sXHJcblx0XCJkYXJrZ29sZGVucm9kXCI6IFsxODQsIDEzNCwgMTFdLFxyXG5cdFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxyXG5cdFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcclxuXHRcImRhcmttYWdlbnRhXCI6IFsxMzksIDAsIDEzOV0sXHJcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbODUsIDEwNywgNDddLFxyXG5cdFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxyXG5cdFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcclxuXHRcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXHJcblx0XCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcclxuXHRcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXHJcblx0XCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXHJcblx0XCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmtzbGF0ZWdyZXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbMCwgMjA2LCAyMDldLFxyXG5cdFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxyXG5cdFwiZGVlcHBpbmtcIjogWzI1NSwgMjAsIDE0N10sXHJcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbMCwgMTkxLCAyNTVdLFxyXG5cdFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRvZGdlcmJsdWVcIjogWzMwLCAxNDQsIDI1NV0sXHJcblx0XCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcclxuXHRcImZsb3JhbHdoaXRlXCI6IFsyNTUsIDI1MCwgMjQwXSxcclxuXHRcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXHJcblx0XCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJnYWluc2Jvcm9cIjogWzIyMCwgMjIwLCAyMjBdLFxyXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LCAyNDgsIDI1NV0sXHJcblx0XCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXHJcblx0XCJnb2xkZW5yb2RcIjogWzIxOCwgMTY1LCAzMl0sXHJcblx0XCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxyXG5cdFwiZ3JlZW55ZWxsb3dcIjogWzE3MywgMjU1LCA0N10sXHJcblx0XCJncmV5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcclxuXHRcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxyXG5cdFwiaW5kaWFucmVkXCI6IFsyMDUsIDkyLCA5Ml0sXHJcblx0XCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxyXG5cdFwiaXZvcnlcIjogWzI1NSwgMjU1LCAyNDBdLFxyXG5cdFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxyXG5cdFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxyXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXHJcblx0XCJsYXduZ3JlZW5cIjogWzEyNCwgMjUyLCAwXSxcclxuXHRcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXHJcblx0XCJsaWdodGJsdWVcIjogWzE3MywgMjE2LCAyMzBdLFxyXG5cdFwibGlnaHRjb3JhbFwiOiBbMjQwLCAxMjgsIDEyOF0sXHJcblx0XCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxyXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxyXG5cdFwibGlnaHRncmF5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxyXG5cdFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXHJcblx0XCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXHJcblx0XCJsaWdodHNlYWdyZWVuXCI6IFszMiwgMTc4LCAxNzBdLFxyXG5cdFwibGlnaHRza3libHVlXCI6IFsxMzUsIDIwNiwgMjUwXSxcclxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsIDE5NiwgMjIyXSxcclxuXHRcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcclxuXHRcImxpbWVcIjogWzAsIDI1NSwgMF0sXHJcblx0XCJsaW1lZ3JlZW5cIjogWzUwLCAyMDUsIDUwXSxcclxuXHRcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcclxuXHRcIm1hZ2VudGFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcIm1hcm9vblwiOiBbMTI4LCAwLCAwXSxcclxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxyXG5cdFwibWVkaXVtYmx1ZVwiOiBbMCwgMCwgMjA1XSxcclxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcclxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXHJcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbNjAsIDE3OSwgMTEzXSxcclxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLCAxMDQsIDIzOF0sXHJcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxyXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFs3MiwgMjA5LCAyMDRdLFxyXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksIDIxLCAxMzNdLFxyXG5cdFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXHJcblx0XCJtaW50Y3JlYW1cIjogWzI0NSwgMjU1LCAyNTBdLFxyXG5cdFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcclxuXHRcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcclxuXHRcIm5hdmFqb3doaXRlXCI6IFsyNTUsIDIyMiwgMTczXSxcclxuXHRcIm5hdnlcIjogWzAsIDAsIDEyOF0sXHJcblx0XCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcclxuXHRcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXHJcblx0XCJvbGl2ZWRyYWJcIjogWzEwNywgMTQyLCAzNV0sXHJcblx0XCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcclxuXHRcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXHJcblx0XCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxyXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXHJcblx0XCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxyXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXHJcblx0XCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcclxuXHRcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxyXG5cdFwicGVhY2hwdWZmXCI6IFsyNTUsIDIxOCwgMTg1XSxcclxuXHRcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXHJcblx0XCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcclxuXHRcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxyXG5cdFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXHJcblx0XCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcclxuXHRcInJlYmVjY2FwdXJwbGVcIjogWzEwMiwgNTEsIDE1M10sXHJcblx0XCJyZWRcIjogWzI1NSwgMCwgMF0sXHJcblx0XCJyb3N5YnJvd25cIjogWzE4OCwgMTQzLCAxNDNdLFxyXG5cdFwicm95YWxibHVlXCI6IFs2NSwgMTA1LCAyMjVdLFxyXG5cdFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcclxuXHRcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXHJcblx0XCJzYW5keWJyb3duXCI6IFsyNDQsIDE2NCwgOTZdLFxyXG5cdFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcclxuXHRcInNlYXNoZWxsXCI6IFsyNTUsIDI0NSwgMjM4XSxcclxuXHRcInNpZW5uYVwiOiBbMTYwLCA4MiwgNDVdLFxyXG5cdFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcclxuXHRcInNreWJsdWVcIjogWzEzNSwgMjA2LCAyMzVdLFxyXG5cdFwic2xhdGVibHVlXCI6IFsxMDYsIDkwLCAyMDVdLFxyXG5cdFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNsYXRlZ3JleVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbm93XCI6IFsyNTUsIDI1MCwgMjUwXSxcclxuXHRcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXHJcblx0XCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXHJcblx0XCJ0YW5cIjogWzIxMCwgMTgwLCAxNDBdLFxyXG5cdFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxyXG5cdFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXHJcblx0XCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcclxuXHRcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcclxuXHRcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXHJcblx0XCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXHJcblx0XCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXHJcblx0XCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcclxuXHRcInllbGxvd1wiOiBbMjU1LCAyNTUsIDBdLFxyXG5cdFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cclxufTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29sb3JTdHJpbmcgPSByZXF1aXJlKCdjb2xvci1zdHJpbmcnKTtcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgnY29sb3ItY29udmVydCcpO1xuXG52YXIgX3NsaWNlID0gW10uc2xpY2U7XG5cbnZhciBza2lwcGVkTW9kZWxzID0gW1xuXHQvLyB0byBiZSBob25lc3QsIEkgZG9uJ3QgcmVhbGx5IGZlZWwgbGlrZSBrZXl3b3JkIGJlbG9uZ3MgaW4gY29sb3IgY29udmVydCwgYnV0IGVoLlxuXHQna2V5d29yZCcsXG5cblx0Ly8gZ3JheSBjb25mbGljdHMgd2l0aCBzb21lIG1ldGhvZCBuYW1lcywgYW5kIGhhcyBpdHMgb3duIG1ldGhvZCBkZWZpbmVkLlxuXHQnZ3JheScsXG5cblx0Ly8gc2hvdWxkbid0IHJlYWxseSBiZSBpbiBjb2xvci1jb252ZXJ0IGVpdGhlci4uLlxuXHQnaGV4J1xuXTtcblxudmFyIGhhc2hlZE1vZGVsS2V5cyA9IHt9O1xuT2JqZWN0LmtleXMoY29udmVydCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcblx0aGFzaGVkTW9kZWxLZXlzW19zbGljZS5jYWxsKGNvbnZlcnRbbW9kZWxdLmxhYmVscykuc29ydCgpLmpvaW4oJycpXSA9IG1vZGVsO1xufSk7XG5cbnZhciBsaW1pdGVycyA9IHt9O1xuXG5mdW5jdGlvbiBDb2xvcihvYmosIG1vZGVsKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb2xvcikpIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKG9iaiwgbW9kZWwpO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmIG1vZGVsIGluIHNraXBwZWRNb2RlbHMpIHtcblx0XHRtb2RlbCA9IG51bGw7XG5cdH1cblxuXHRpZiAobW9kZWwgJiYgIShtb2RlbCBpbiBjb252ZXJ0KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlbDogJyArIG1vZGVsKTtcblx0fVxuXG5cdHZhciBpO1xuXHR2YXIgY2hhbm5lbHM7XG5cblx0aWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbMCwgMCwgMF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG9iai5tb2RlbDtcblx0XHR0aGlzLmNvbG9yID0gb2JqLmNvbG9yLnNsaWNlKCk7XG5cdFx0dGhpcy52YWxwaGEgPSBvYmoudmFscGhhO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGNvbG9yU3RyaW5nLmdldChvYmopO1xuXHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nOiAnICsgb2JqKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gcmVzdWx0Lm1vZGVsO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR0aGlzLmNvbG9yID0gcmVzdWx0LnZhbHVlLnNsaWNlKDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiByZXN1bHQudmFsdWVbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IHJlc3VsdC52YWx1ZVtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKG9iai5sZW5ndGgpIHtcblx0XHR0aGlzLm1vZGVsID0gbW9kZWwgfHwgJ3JnYic7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBuZXdBcnIgPSBfc2xpY2UuY2FsbChvYmosIDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KG5ld0FyciwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9ialtjaGFubmVsc10gPT09ICdudW1iZXInID8gb2JqW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHtcblx0XHQvLyB0aGlzIGlzIGFsd2F5cyBSR0IgLSBjYW4gYmUgY29udmVydGVkIGxhdGVyIG9uLlxuXHRcdG9iaiAmPSAweEZGRkZGRjtcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFtcblx0XHRcdChvYmogPj4gMTYpICYgMHhGRixcblx0XHRcdChvYmogPj4gOCkgJiAweEZGLFxuXHRcdFx0b2JqICYgMHhGRlxuXHRcdF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMudmFscGhhID0gMTtcblxuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblx0XHRpZiAoJ2FscGhhJyBpbiBvYmopIHtcblx0XHRcdGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZignYWxwaGEnKSwgMSk7XG5cdFx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmouYWxwaGEgPT09ICdudW1iZXInID8gb2JqLmFscGhhIDogMDtcblx0XHR9XG5cblx0XHR2YXIgaGFzaGVkS2V5cyA9IGtleXMuc29ydCgpLmpvaW4oJycpO1xuXHRcdGlmICghKGhhc2hlZEtleXMgaW4gaGFzaGVkTW9kZWxLZXlzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gaGFzaGVkTW9kZWxLZXlzW2hhc2hlZEtleXNdO1xuXG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXHRcdHZhciBjb2xvciA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbG9yLnB1c2gob2JqW2xhYmVsc1tpXV0pO1xuXHRcdH1cblxuXHRcdHRoaXMuY29sb3IgPSB6ZXJvQXJyYXkoY29sb3IpO1xuXHR9XG5cblx0Ly8gcGVyZm9ybSBsaW1pdGF0aW9ucyAoY2xhbXBpbmcsIGV0Yy4pXG5cdGlmIChsaW1pdGVyc1t0aGlzLm1vZGVsXSkge1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0dmFyIGxpbWl0ID0gbGltaXRlcnNbdGhpcy5tb2RlbF1baV07XG5cdFx0XHRpZiAobGltaXQpIHtcblx0XHRcdFx0dGhpcy5jb2xvcltpXSA9IGxpbWl0KHRoaXMuY29sb3JbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRoaXMudmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdGhpcy52YWxwaGEpKTtcblxuXHRpZiAoT2JqZWN0LmZyZWV6ZSkge1xuXHRcdE9iamVjdC5mcmVlemUodGhpcyk7XG5cdH1cbn1cblxuQ29sb3IucHJvdG90eXBlID0ge1xuXHR0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnN0cmluZygpO1xuXHR9LFxuXG5cdHRvSlNPTjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzW3RoaXMubW9kZWxdKCk7XG5cdH0sXG5cblx0c3RyaW5nOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLm1vZGVsIGluIGNvbG9yU3RyaW5nLnRvID8gdGhpcyA6IHRoaXMucmdiKCk7XG5cdFx0c2VsZiA9IHNlbGYucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG9bc2VsZi5tb2RlbF0oYXJncyk7XG5cdH0sXG5cblx0cGVyY2VudFN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5yZ2IoKS5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdHZhciBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogc2VsZi5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5yZ2IucGVyY2VudChhcmdzKTtcblx0fSxcblxuXHRhcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHBoYSA9PT0gMSA/IHRoaXMuY29sb3Iuc2xpY2UoKSA6IHRoaXMuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0fSxcblxuXHRvYmplY3Q6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbGFiZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5sYWJlbHM7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHJlc3VsdFtsYWJlbHNbaV1dID0gdGhpcy5jb2xvcltpXTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJlc3VsdC5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cblx0dW5pdEFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmdiWzBdIC89IDI1NTtcblx0XHRyZ2JbMV0gLz0gMjU1O1xuXHRcdHJnYlsyXSAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5wdXNoKHRoaXMudmFscGhhKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHVuaXRPYmplY3Q6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5vYmplY3QoKTtcblx0XHRyZ2IuciAvPSAyNTU7XG5cdFx0cmdiLmcgLz0gMjU1O1xuXHRcdHJnYi5iIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRyb3VuZDogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHBsYWNlcyA9IE1hdGgubWF4KHBsYWNlcyB8fCAwLCAwKTtcblx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuY29sb3IubWFwKHJvdW5kVG9QbGFjZShwbGFjZXMpKS5jb25jYXQodGhpcy52YWxwaGEpLCB0aGlzLm1vZGVsKTtcblx0fSxcblxuXHRhbHBoYTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuY29sb3IuY29uY2F0KE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbCkpKSwgdGhpcy5tb2RlbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudmFscGhhO1xuXHR9LFxuXG5cdC8vIHJnYlxuXHRyZWQ6IGdldHNldCgncmdiJywgMCwgbWF4Zm4oMjU1KSksXG5cdGdyZWVuOiBnZXRzZXQoJ3JnYicsIDEsIG1heGZuKDI1NSkpLFxuXHRibHVlOiBnZXRzZXQoJ3JnYicsIDIsIG1heGZuKDI1NSkpLFxuXG5cdGh1ZTogZ2V0c2V0KFsnaHNsJywgJ2hzdicsICdoc2wnLCAnaHdiJywgJ2hjZyddLCAwLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiAoKHZhbCAlIDM2MCkgKyAzNjApICUgMzYwOyB9KSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBicmFjZS1zdHlsZVxuXG5cdHNhdHVyYXRpb25sOiBnZXRzZXQoJ2hzbCcsIDEsIG1heGZuKDEwMCkpLFxuXHRsaWdodG5lc3M6IGdldHNldCgnaHNsJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0c2F0dXJhdGlvbnY6IGdldHNldCgnaHN2JywgMSwgbWF4Zm4oMTAwKSksXG5cdHZhbHVlOiBnZXRzZXQoJ2hzdicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGNocm9tYTogZ2V0c2V0KCdoY2cnLCAxLCBtYXhmbigxMDApKSxcblx0Z3JheTogZ2V0c2V0KCdoY2cnLCAyLCBtYXhmbigxMDApKSxcblxuXHR3aGl0ZTogZ2V0c2V0KCdod2InLCAxLCBtYXhmbigxMDApKSxcblx0d2JsYWNrOiBnZXRzZXQoJ2h3YicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGN5YW46IGdldHNldCgnY215aycsIDAsIG1heGZuKDEwMCkpLFxuXHRtYWdlbnRhOiBnZXRzZXQoJ2NteWsnLCAxLCBtYXhmbigxMDApKSxcblx0eWVsbG93OiBnZXRzZXQoJ2NteWsnLCAyLCBtYXhmbigxMDApKSxcblx0YmxhY2s6IGdldHNldCgnY215aycsIDMsIG1heGZuKDEwMCkpLFxuXG5cdHg6IGdldHNldCgneHl6JywgMCwgbWF4Zm4oMTAwKSksXG5cdHk6IGdldHNldCgneHl6JywgMSwgbWF4Zm4oMTAwKSksXG5cdHo6IGdldHNldCgneHl6JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0bDogZ2V0c2V0KCdsYWInLCAwLCBtYXhmbigxMDApKSxcblx0YTogZ2V0c2V0KCdsYWInLCAxKSxcblx0YjogZ2V0c2V0KCdsYWInLCAyKSxcblxuXHRrZXl3b3JkOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udmVydFt0aGlzLm1vZGVsXS5rZXl3b3JkKHRoaXMuY29sb3IpO1xuXHR9LFxuXG5cdGhleDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLmhleCh0aGlzLnJnYigpLnJvdW5kKCkuY29sb3IpO1xuXHR9LFxuXG5cdHJnYk51bWJlcjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJldHVybiAoKHJnYlswXSAmIDB4RkYpIDw8IDE2KSB8ICgocmdiWzFdICYgMHhGRikgPDwgOCkgfCAocmdiWzJdICYgMHhGRik7XG5cdH0sXG5cblx0bHVtaW5vc2l0eTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblxuXHRcdHZhciBsdW0gPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoYW4gPSByZ2JbaV0gLyAyNTU7XG5cdFx0XHRsdW1baV0gPSAoY2hhbiA8PSAwLjAzOTI4KSA/IGNoYW4gLyAxMi45MiA6IE1hdGgucG93KCgoY2hhbiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMC4yMTI2ICogbHVtWzBdICsgMC43MTUyICogbHVtWzFdICsgMC4wNzIyICogbHVtWzJdO1xuXHR9LFxuXG5cdGNvbnRyYXN0OiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZlxuXHRcdHZhciBsdW0xID0gdGhpcy5sdW1pbm9zaXR5KCk7XG5cdFx0dmFyIGx1bTIgPSBjb2xvcjIubHVtaW5vc2l0eSgpO1xuXG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChsdW0yICsgMC4wNSkgLyAobHVtMSArIDAuMDUpO1xuXHR9LFxuXG5cdGxldmVsOiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0dmFyIGNvbnRyYXN0UmF0aW8gPSB0aGlzLmNvbnRyYXN0KGNvbG9yMik7XG5cdFx0aWYgKGNvbnRyYXN0UmF0aW8gPj0gNy4xKSB7XG5cdFx0XHRyZXR1cm4gJ0FBQSc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChjb250cmFzdFJhdGlvID49IDQuNSkgPyAnQUEnIDogJyc7XG5cdH0sXG5cblx0aXNEYXJrOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gWUlRIGVxdWF0aW9uIGZyb20gaHR0cDovLzI0d2F5cy5vcmcvMjAxMC9jYWxjdWxhdGluZy1jb2xvci1jb250cmFzdFxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHZhciB5aXEgPSAocmdiWzBdICogMjk5ICsgcmdiWzFdICogNTg3ICsgcmdiWzJdICogMTE0KSAvIDEwMDA7XG5cdFx0cmV0dXJuIHlpcSA8IDEyODtcblx0fSxcblxuXHRpc0xpZ2h0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmlzRGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2IuY29sb3JbaV0gPSAyNTUgLSByZ2IuY29sb3JbaV07XG5cdFx0fVxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0bGlnaHRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdICs9IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gLT0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdICs9IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGVzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdIC09IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMV0gKz0gaHdiLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRibGFja2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMl0gKz0gaHdiLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRncmF5c2NhbGU6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYXlzY2FsZSNDb252ZXJ0aW5nX2NvbG9yX3RvX2dyYXlzY2FsZVxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHZhciB2YWwgPSByZ2JbMF0gKiAwLjMgKyByZ2JbMV0gKiAwLjU5ICsgcmdiWzJdICogMC4xMTtcblx0XHRyZXR1cm4gQ29sb3IucmdiKHZhbCwgdmFsLCB2YWwpO1xuXHR9LFxuXG5cdGZhZGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhIC0gKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRvcGFxdWVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSArICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0cm90YXRlOiBmdW5jdGlvbiAoZGVncmVlcykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdHZhciBodWUgPSBoc2wuY29sb3JbMF07XG5cdFx0aHVlID0gKGh1ZSArIGRlZ3JlZXMpICUgMzYwO1xuXHRcdGh1ZSA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG5cdFx0aHNsLmNvbG9yWzBdID0gaHVlO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0bWl4OiBmdW5jdGlvbiAobWl4aW5Db2xvciwgd2VpZ2h0KSB7XG5cdFx0Ly8gcG9ydGVkIGZyb20gc2FzcyBpbXBsZW1lbnRhdGlvbiBpbiBDXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9ibG9iLzBlNmI0YTI4NTAwOTIzNTZhYTNlY2UwN2M2YjI0OWYwMjIxY2FjZWQvZnVuY3Rpb25zLmNwcCNMMjA5XG5cdFx0dmFyIGNvbG9yMSA9IG1peGluQ29sb3IucmdiKCk7XG5cdFx0dmFyIGNvbG9yMiA9IHRoaXMucmdiKCk7XG5cdFx0dmFyIHAgPSB3ZWlnaHQgPT09IHVuZGVmaW5lZCA/IDAuNSA6IHdlaWdodDtcblxuXHRcdHZhciB3ID0gMiAqIHAgLSAxO1xuXHRcdHZhciBhID0gY29sb3IxLmFscGhhKCkgLSBjb2xvcjIuYWxwaGEoKTtcblxuXHRcdHZhciB3MSA9ICgoKHcgKiBhID09PSAtMSkgPyB3IDogKHcgKyBhKSAvICgxICsgdyAqIGEpKSArIDEpIC8gMi4wO1xuXHRcdHZhciB3MiA9IDEgLSB3MTtcblxuXHRcdHJldHVybiBDb2xvci5yZ2IoXG5cdFx0XHRcdHcxICogY29sb3IxLnJlZCgpICsgdzIgKiBjb2xvcjIucmVkKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmdyZWVuKCkgKyB3MiAqIGNvbG9yMi5ncmVlbigpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ibHVlKCkgKyB3MiAqIGNvbG9yMi5ibHVlKCksXG5cdFx0XHRcdGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH1cbn07XG5cbi8vIG1vZGVsIGNvbnZlcnNpb24gbWV0aG9kcyBhbmQgc3RhdGljIGNvbnN0cnVjdG9yc1xuT2JqZWN0LmtleXMoY29udmVydCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcblx0aWYgKHNraXBwZWRNb2RlbHMuaW5kZXhPZihtb2RlbCkgIT09IC0xKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cblx0Ly8gY29udmVyc2lvbiBtZXRob2RzXG5cdENvbG9yLnByb3RvdHlwZVttb2RlbF0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMubW9kZWwgPT09IG1vZGVsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKGFyZ3VtZW50cywgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBuZXdBbHBoYSA9IHR5cGVvZiBhcmd1bWVudHNbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IGNoYW5uZWxzIDogdGhpcy52YWxwaGE7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihhc3NlcnRBcnJheShjb252ZXJ0W3RoaXMubW9kZWxdW21vZGVsXS5yYXcodGhpcy5jb2xvcikpLmNvbmNhdChuZXdBbHBoYSksIG1vZGVsKTtcblx0fTtcblxuXHQvLyAnc3RhdGljJyBjb25zdHJ1Y3Rpb24gbWV0aG9kc1xuXHRDb2xvclttb2RlbF0gPSBmdW5jdGlvbiAoY29sb3IpIHtcblx0XHRpZiAodHlwZW9mIGNvbG9yID09PSAnbnVtYmVyJykge1xuXHRcdFx0Y29sb3IgPSB6ZXJvQXJyYXkoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSwgY2hhbm5lbHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IENvbG9yKGNvbG9yLCBtb2RlbCk7XG5cdH07XG59KTtcblxuZnVuY3Rpb24gcm91bmRUbyhudW0sIHBsYWNlcykge1xuXHRyZXR1cm4gTnVtYmVyKG51bS50b0ZpeGVkKHBsYWNlcykpO1xufVxuXG5mdW5jdGlvbiByb3VuZFRvUGxhY2UocGxhY2VzKSB7XG5cdHJldHVybiBmdW5jdGlvbiAobnVtKSB7XG5cdFx0cmV0dXJuIHJvdW5kVG8obnVtLCBwbGFjZXMpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBnZXRzZXQobW9kZWwsIGNoYW5uZWwsIG1vZGlmaWVyKSB7XG5cdG1vZGVsID0gQXJyYXkuaXNBcnJheShtb2RlbCkgPyBtb2RlbCA6IFttb2RlbF07XG5cblx0bW9kZWwuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuXHRcdChsaW1pdGVyc1ttXSB8fCAobGltaXRlcnNbbV0gPSBbXSkpW2NoYW5uZWxdID0gbW9kaWZpZXI7XG5cdH0pO1xuXG5cdG1vZGVsID0gbW9kZWxbMF07XG5cblx0cmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcblx0XHR2YXIgcmVzdWx0O1xuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdGlmIChtb2RpZmllcikge1xuXHRcdFx0XHR2YWwgPSBtb2RpZmllcih2YWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHQgPSB0aGlzW21vZGVsXSgpO1xuXHRcdFx0cmVzdWx0LmNvbG9yW2NoYW5uZWxdID0gdmFsO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRyZXN1bHQgPSB0aGlzW21vZGVsXSgpLmNvbG9yW2NoYW5uZWxdO1xuXHRcdGlmIChtb2RpZmllcikge1xuXHRcdFx0cmVzdWx0ID0gbW9kaWZpZXIocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xufVxuXG5mdW5jdGlvbiBtYXhmbihtYXgpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICh2KSB7XG5cdFx0cmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKG1heCwgdikpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBhc3NlcnRBcnJheSh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdO1xufVxuXG5mdW5jdGlvbiB6ZXJvQXJyYXkoYXJyLCBsZW5ndGgpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdGlmICh0eXBlb2YgYXJyW2ldICE9PSAnbnVtYmVyJykge1xuXHRcdFx0YXJyW2ldID0gMDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FycmF5aXNoKG9iaikge1xuXHRpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KG9iaikgfHxcblx0XHQob2JqLmxlbmd0aCA+PSAwICYmIChvYmouc3BsaWNlIGluc3RhbmNlb2YgRnVuY3Rpb24gfHxcblx0XHRcdChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgKG9iai5sZW5ndGggLSAxKSkgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdTdHJpbmcnKSkpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXlpc2ggPSByZXF1aXJlKCdpcy1hcnJheWlzaCcpO1xuXG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIHN3aXp6bGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN3aXp6bGUoYXJncykge1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIGFyZyA9IGFyZ3NbaV07XG5cblx0XHRpZiAoaXNBcnJheWlzaChhcmcpKSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS9qYXZhc2NyaXB0LWFycmF5LWNvbmNhdC12cy1wdXNoLzk4XG5cdFx0XHRyZXN1bHRzID0gY29uY2F0LmNhbGwocmVzdWx0cywgc2xpY2UuY2FsbChhcmcpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0cy5wdXNoKGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5zd2l6emxlLndyYXAgPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZm4oc3dpenpsZShhcmd1bWVudHMpKTtcblx0fTtcbn07XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgTWFya2Vyc0xheWVyLCB7XG4gIE1hcmtlcnNMYXllck9wdGlvbnMsXG4gIE1hcmtlcnNIZWF0TGF5ZXJPcHRpb25zLFxufSBmcm9tICcuLi9tYXJrZXIvTWFya2Vyc0xheWVyJ1xuXG5pbnRlcmZhY2UgRHluYW1pY0hlYXRMYXllck9wdGlvbnMgZXh0ZW5kcyBNYXJrZXJzSGVhdExheWVyT3B0aW9ucyB7XG4gIC8qKiDmmK/lkKblvqrnjq/mkq3mlL4gKi9cbiAgbG9vcDogYm9vbGVhblxuICAvKiog5piv5ZCm6Ieq5Yqo5pKt5pS+ICovXG4gIGF1dG86IGJvb2xlYW5cbiAgLyoqIOmXtOmalOaXtumXtCAqL1xuICBpbnRlcnZhbDogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER5bmFtaWNIZWF0TGF5ZXIge1xuICAvKiog5b2T5YmN5pKt5pS+5Yiw56ys5Yeg5q2lICovXG4gIHByaXZhdGUgY3VycmVudFN0ZXA6IG51bWJlclxuXG4gIHByaXZhdGUgbWFwOiBMLk1hcFxuICBwcml2YXRlIGR5bmFtaWNEYXRhTGlzdDogRGF0YUxpc3RJdGVtW11bXVxuICBwcml2YXRlIG9wdGlvbnM6IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zXG4gIHByaXZhdGUgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gIHByaXZhdGUgbGF5ZXI6IE1hcmtlcnNMYXllclxuICBwcml2YXRlIGlzUGF1c2U6IGJvb2xlYW5cbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkeW5hbWljRGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdW10sXG4gICAgb3B0aW9uczogRHluYW1pY0hlYXRMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkeW5hbWljRGF0YUxpc3QpIHx8IGR5bmFtaWNEYXRhTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZGF0YUxpc3Qg5b+F6aG75piv6Z2e56m65pWw57uEYClcbiAgICB9XG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdCA9IGR5bmFtaWNEYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gMFxuICAgIHRoaXMuaXNQYXVzZSA9IHRydWVcbiAgfVxuICBwdWJsaWMgcmVzdGFydCgpIHtcbiAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZVxuICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwXG4gICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKVxuICAgIHRoaXMuc3RhcnQoKVxuICB9XG4gIHB1YmxpYyBzdGFydCgpIHtcbiAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZVxuICAgIGlmICghdGhpcy5vcHRpb25zLmF1dG8pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzUGF1c2UpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvKiog5pKt5pS+5a6M5q+VICovXG4gICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA+PSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3RhcnQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrXG4gICAgICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcClcbiAgICAgICAgdGhpcy5zdGFydCgpXG4gICAgICB9XG4gICAgfSwgdGhpcy5vcHRpb25zLmludGVydmFsKVxuICB9XG4gIHB1YmxpYyBwYXVzZSgpIHtcbiAgICB0aGlzLmlzUGF1c2UgPSB0cnVlXG4gIH1cbiAgcHVibGljIHByZXYoKSB7XG4gICAgdGhpcy5jdXJyZW50U3RlcC0tXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9XG4gICAgICAodGhpcy5jdXJyZW50U3RlcCArIHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkgJVxuICAgICAgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoXG4gICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKVxuICB9XG4gIHB1YmxpYyBuZXh0KCkge1xuICAgIHRoaXMuY3VycmVudFN0ZXArK1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSB0aGlzLmN1cnJlbnRTdGVwICUgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoXG4gICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKVxuICB9XG4gIHB1YmxpYyBnb3RvU3RlcChzdGVwOiBudW1iZXIpIHtcbiAgICBpZiAoc3RlcCA8IDAgfHwgc3RlcCA+PSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZ290b1N0ZXAoJHtzdGVwfSk6IHN0ZXAgaXMgb3V0IG9mIGluZGV4IGApXG4gICAgfVxuICAgIHRoaXMubGF5ZXIuc2V0RGF0YSh0aGlzLmR5bmFtaWNEYXRhTGlzdFtzdGVwXSlcbiAgICB0aGlzLmxheWVyLmRyYXcoKVxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBEeW5hbWljSGVhdExheWVyT3B0aW9ucykge1xuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRMYXllcigpXG4gICAgdGhpcy5sYXllci5kcmF3KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5sYXllci5maXRCb3VuZHMoKVxuICB9XG4gIHByaXZhdGUgaW5pdE9wdGlvbnMob3B0aW9ucz86IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIGF1dG86IGZhbHNlLFxuICAgICAgICBpbnRlcnZhbDogMTAwMCxcbiAgICAgIH0sXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICBvcHRpb25zXG4gICAgKVxuICB9XG4gIHByaXZhdGUgaW5pdExheWVyKCkge1xuICAgIGNvbnN0IG1hcmtlcnNMYXllck9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMgPSB7XG4gICAgICByZW5kZXJUeXBlOiAnaGVhdCcsXG4gICAgICBoZWF0T3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgIH1cbiAgICB0aGlzLmxheWVyID0gbmV3IE1hcmtlcnNMYXllcihcbiAgICAgIHRoaXMubWFwLFxuICAgICAgdGhpcy5keW5hbWljRGF0YUxpc3RbMF0sXG4gICAgICBtYXJrZXJzTGF5ZXJPcHRpb25zLFxuICAgICAgdGhpcy5jaGFubmVsRnVuY1xuICAgIClcbiAgICByZXR1cm4gdGhpcy5sYXllclxuICB9XG59XG4iLCJpbXBvcnQgTWFya2VyIGZyb20gJy4vbWFya2VyL01hcmtlcidcbmltcG9ydCBNYXJrZXJzTGF5ZXIgZnJvbSAnLi9tYXJrZXIvTWFya2Vyc0xheWVyJ1xuaW1wb3J0IE1hcmtlcnNCdWZmZXJMYXllciBmcm9tICcuL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXInXG5pbXBvcnQgUG9seWxpbmUgZnJvbSAnLi9wb2x5bGluZS9Qb2x5bGluZSdcbmltcG9ydCBQb2x5bGluZXNMYXllciBmcm9tICcuL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyJ1xuaW1wb3J0IFBvbHlsaW5lc0J1ZmZlckxheWVyIGZyb20gJy4vcG9seWxpbmUvUG9seWxpbmVzQnVmZmVyTGF5ZXInXG5pbXBvcnQgUG9seWdvbiBmcm9tICcuL3BvbHlnb24vUG9seWdvbidcbmltcG9ydCBQb2x5Z29uc0xheWVyIGZyb20gJy4vcG9seWdvbi9Qb2x5Z29uc0xheWVyJ1xuaW1wb3J0IEdyaWRzTGF5ZXIgZnJvbSAnLi9wb2x5Z29uL0dyaWRzTGF5ZXInXG5pbXBvcnQgRHluYW1pY0hlYXRMYXllciBmcm9tICcuL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBNYXJrZXIsXG4gIE1hcmtlcnNMYXllcixcbiAgTWFya2Vyc0J1ZmZlckxheWVyLFxuICBQb2x5bGluZSxcbiAgUG9seWxpbmVzTGF5ZXIsXG4gIFBvbHlsaW5lc0J1ZmZlckxheWVyLFxuICBQb2x5Z29uLFxuICBQb2x5Z29uc0xheWVyLFxuICBHcmlkc0xheWVyLFxuICBEeW5hbWljSGVhdExheWVyLFxufVxuZXhwb3J0IHtcbiAgTWFya2VyLFxuICBNYXJrZXJzTGF5ZXIsXG4gIE1hcmtlcnNCdWZmZXJMYXllcixcbiAgUG9seWxpbmUsXG4gIFBvbHlsaW5lc0xheWVyLFxuICBQb2x5bGluZXNCdWZmZXJMYXllcixcbiAgUG9seWdvbixcbiAgUG9seWdvbnNMYXllcixcbiAgR3JpZHNMYXllcixcbiAgRHluYW1pY0hlYXRMYXllcixcbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBMLk1hcmtlciB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX19kYXRhOiBEYXRhTGlzdEl0ZW1cbiAgY29uc3RydWN0b3IobGF0bG5nOiBMLkxhdExuZ0V4cHJlc3Npb24sIG9wdGlvbnM/OiBMLk1hcmtlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsYXRsbmcsIG9wdGlvbnMpXG4gIH1cbiAgcHVibGljIHNldERhdGEoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgdGhpcy5fX2RhdGEgPSBkYXRhXG4gIH1cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kYXRhXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBNYXJrZXJzTGF5ZXIsIHsgTWFya2Vyc0xheWVyT3B0aW9ucyB9IGZyb20gJy4vTWFya2Vyc0xheWVyJ1xuaW50ZXJmYWNlIE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMgZXh0ZW5kcyBNYXJrZXJzTGF5ZXJPcHRpb25zIHtcbiAgYnVmZmVyVG9vbHRpcEF0dHI6IHN0cmluZ1xuICBidWZmZXJPcHRpb25zOiBMLkNpcmNsZU1hcmtlck9wdGlvbnNcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlcnNCdWZmZXJMYXllciBleHRlbmRzIE1hcmtlcnNMYXllciB7XG4gIHB1YmxpYyBvcHRpb25zOiBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zXG4gIHByaXZhdGUgYnVmZmVyTGF5ZXI6IEwuTGF5ZXJHcm91cFxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYylcbiAgICB0aGlzLnR5cGUgPSAnbWFya2VyQnVmZmVyJ1xuICAgIGNvbnN0IGRlZmF1bHRCdWZmZXJPcHRpb25zOiBMLkNpcmNsZU1hcmtlck9wdGlvbnMgPSB7XG4gICAgICByYWRpdXM6IDEwMDAsXG4gICAgICBzdHJva2U6IHRydWUsXG4gICAgICB3ZWlnaHQ6IDEsXG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICB7IGJ1ZmZlck9wdGlvbnM6IGRlZmF1bHRCdWZmZXJPcHRpb25zIH0sXG4gICAgICBvcHRpb25zXG4gICAgKVxuICB9XG5cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5jb2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3JcbiAgICB0aGlzLmluaXRNYXJrZXJzKClcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG5cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5idWZmZXJMYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5idWZmZXJMYXllcilcbiAgICB9XG4gICAgdGhpcy5tYXJrZXJMYXllciA9IHRoaXMuY29uZmlnTWFya2VyTGF5ZXIoKVxuICAgIHRoaXMuYnVmZmVyTGF5ZXIgPSB0aGlzLmNvbmZpZ0J1ZmZlckxheWVyKClcblxuICAgIHRoaXMubGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB0aGlzLmxheWVyLmFkZExheWVyKHRoaXMuYnVmZmVyTGF5ZXIpXG5cbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcmtlcnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICByZXR1cm4gcHJldi5leHRlbmQoXG4gICAgICAgIGN1cnIuZ2V0TGF0TG5nKCkudG9Cb3VuZHModGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMucmFkaXVzKVxuICAgICAgKVxuICAgIH0sIHRoaXMubWFya2Vyc1swXS5nZXRMYXRMbmcoKS50b0JvdW5kcyh0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5yYWRpdXMpKVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWdCdWZmZXJMYXllcigpIHtcbiAgICBjb25zdCBncm91cExheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBjaXJjbGVMYXllciA9IEwuY2lyY2xlKFxuICAgICAgICBtYXJrZXIuZ2V0TGF0TG5nKCksXG4gICAgICAgIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zXG4gICAgICApXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJ1ZmZlclRvb2x0aXBBdHRyKSB7XG4gICAgICAgIGNpcmNsZUxheWVyLmJpbmRUb29sdGlwKFxuICAgICAgICAgICcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMuYnVmZmVyVG9vbHRpcEF0dHJdXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgICAgICcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgICAgICcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBncm91cExheWVyLmFkZExheWVyKGNpcmNsZUxheWVyKVxuICAgIH0pXG4gICAgcmV0dXJuIGdyb3VwTGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgbGlnaHRlbiwgb3B0aW9uc01lcmdlIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXG5pbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgTWFya2VyIGZyb20gJy4vTWFya2VyJ1xuXG4vKiog5riy5p+T5qC35byPIOaVo+eCuXzng63lipvlm74gKi9cbnR5cGUgTWFya2Vyc0xheWVyUmVuZGVyVHlwZSA9ICdwb2ludCcgfCAnaGVhdCcgfCAnY2x1c3RlcidcblxuLyoqIOa4suafk+minOiJsuagt+W8jyDljZXoibJ85YiG5q61fOWIhuexuyAqL1xudHlwZSBNYXJrZXJzTGF5ZXJSZW5kZXJQb2ludENvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCcgfCAnY2xhc3NpZmllZCdcblxuLyoqIOaVo+eCueWbvuagh+exu+WeiyBpY29uZm9udHxzdmd8aW1hZ2UgKi9cbnR5cGUgTWFya2Vyc0xheWVySWNvblR5cGUgPSAnZm9udF9jbGFzcycgfCAndW5pY29kZScgfCAnc3ltYm9sJyB8ICdpbWFnZSdcblxudHlwZSBNYXJrZXJzTGF5ZXJSZW5kZXJDbHVzdGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc21hcnQnXG5cbmludGVyZmFjZSBJY29uUmVuZGVyRnVuY09wdGlvbiB7XG4gIGljb25TaXplOiBbbnVtYmVyLCBudW1iZXJdXG4gIGljb25Db2xvcjogc3RyaW5nXG59XG50eXBlIEljb25SZW5kZXJGdW5jID0gKFxuICBkYXRhOiBEYXRhTGlzdEl0ZW0sXG4gIHBhcmFtczogSWNvblJlbmRlckZ1bmNPcHRpb25cbikgPT4gc3RyaW5nXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2Vyc0xheWVyT3B0aW9ucyB7XG4gIHJlbmRlclR5cGU6IE1hcmtlcnNMYXllclJlbmRlclR5cGVcbiAgcmVuZGVyUG9pbnRDb2xvclR5cGU/OiBNYXJrZXJzTGF5ZXJSZW5kZXJQb2ludENvbG9yVHlwZVxuICBpY29uVHlwZT86IE1hcmtlcnNMYXllckljb25UeXBlXG5cbiAgaWNvbkltYWdlVXJsPzogc3RyaW5nXG4gIGljb25TaXplPzogW251bWJlciwgbnVtYmVyXVxuICBpY29uQ2xhc3M/OiBzdHJpbmdcbiAgaWNvblVuaWNvZGU/OiBzdHJpbmdcbiAgaWNvblN5bWJvbD86IHN0cmluZ1xuICBpY29uQ29sb3I/OiBzdHJpbmdcbiAgaWNvbkFuY2hvcj86IFtudW1iZXIsIG51bWJlcl1cbiAgaWNvblJlbmRlcmVyPzogSWNvblJlbmRlckZ1bmNcblxuICAvLyDmmK/lkKbogZrlkIjvvIzkvJjlhYjnuqfpq5jkuo4gcmVuZGVyVHlwZSA9PSBwb2ludFxuICBpc0NsdXN0ZXI/OiBib29sZWFuXG4gIHJlbmRlckNsdXN0ZXJDb2xvclR5cGU/OiBNYXJrZXJzTGF5ZXJSZW5kZXJDbHVzdGVyQ29sb3JUeXBlXG5cbiAgLyoqIOaYr+WQpuWxleekuiBwb3B1cCAqL1xuICBwb3B1cD86IGJvb2xlYW5cbiAgLyoqIOaYr+WQpuWxleekuiB0b29sdGlwICovXG4gIHRvb2x0aXA/OiBib29sZWFuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxuXG4gIC8qKiDliIbnsbvlnovmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgY2xhc3NpZmllZEF0dHI/OiBzdHJpbmdcbiAgY2xhc3NpZmllZENvbG9ycz86IHN0cmluZ1tdXG5cbiAgaGVhdE9wdGlvbnM/OiBNYXJrZXJzSGVhdExheWVyT3B0aW9uc1xuICBjbHVzdGVyT3B0aW9ucz86IEwuTWFya2Vyc0NsdXN0ZXJPcHRpb25zXG59XG5cbi8qKiDovazljJbkuLrng63lipvlm77nmoQgb3B0aW9ucyAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJzSGVhdExheWVyT3B0aW9ucyBleHRlbmRzIEwuSGVhdExheWVyT3B0aW9ucyB7XG4gIGRpbWVuc2lvbkF0dHI/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Vyc0xheWVyIHtcbiAgcHVibGljIG1hcDogTC5NYXBcbiAgcHVibGljIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVxuICBwdWJsaWMgb3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9uc1xuICBwdWJsaWMgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG5cbiAgcHVibGljIHR5cGU6IHN0cmluZ1xuXG4gIHByb3RlY3RlZCBtYXJrZXJzOiBNYXJrZXJbXVxuXG4gIHByb3RlY3RlZCBmb2N1c2VkTWFya2VyOiBNYXJrZXJcbiAgcHJvdGVjdGVkIGhvdmVyZWRNYXJrZXI6IE1hcmtlclxuICAvKiog6ZyA6KaB5bGV56S655qE5pS+5aSn55qE5Zu+5qCHICovXG4gIHByb3RlY3RlZCBmb2N1c2VkRGlzcGxheU1hcmtlcjogTWFya2VyXG4gIHByb3RlY3RlZCBtYXJrZXJMYXllcjogTC5DYW52YXNJY29uTGF5ZXJcblxuICBwcm90ZWN0ZWQgdmlzaWJsZTogYm9vbGVhblxuICBwcm90ZWN0ZWQgbGF5ZXI6XG4gICAgfCBMLkNhbnZhc0ljb25MYXllclxuICAgIHwgTC5IZWF0TGF5ZXJcbiAgICB8IEwuTWFya2Vyc0NsdXN0ZXJcbiAgICB8IEwuTGF5ZXJHcm91cFxuICBwcml2YXRlIGhlYXRMYXllcjogTC5IZWF0TGF5ZXJcbiAgcHJpdmF0ZSBjbHVzdGVyTGF5ZXI6IEwuTWFya2Vyc0NsdXN0ZXJcblxuICBwcml2YXRlIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByaXZhdGUgc2VnbWVudGVkU3RlcDogbnVtYmVyXG4gIHByaXZhdGUgY2xhc3NpZnlDb2xvck1hcDogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH1cbiAgcHJpdmF0ZSBjbGFzc2lmeUNvbG9yUmVmczogQXJyYXk8e1xuICAgIGF0dHI6IHN0cmluZ1xuICAgIGNvbG9yOiBzdHJpbmdcbiAgICBudW1zOiBudW1iZXJcbiAgfT5cbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9uc1xuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YUxpc3QpIHx8IGRhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhTGlzdCDlv4XpobvmmK/pnZ7nqbrmlbDnu4RgKVxuICAgIH1cbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcmVuZGVyVHlwZTogJ3BvaW50JyxcbiAgICAgIHJlbmRlclBvaW50Q29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgIGljb25UeXBlOiAndW5pY29kZScsXG4gICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4gICAgICBpY29uQ2xhc3M6ICdpY29uZm9udCcsXG4gICAgICBpY29uQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIGljb25BbmNob3I6IFsxMCwgMjBdLFxuICAgICAgcG9wdXA6IHRydWUsXG4gICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICBjbGFzc2lmaWVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIGlzQ2x1c3RlcjogZmFsc2UsXG4gICAgICByZW5kZXJDbHVzdGVyQ29sb3JUeXBlOiAnc21hcnQnLFxuICAgICAgaGVhdE9wdGlvbnM6IHtcbiAgICAgICAgbWF4OiAxLFxuICAgICAgICBtaW5PcGFjaXR5OiAwLjUsXG4gICAgICB9LFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAnbWFya2VyJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMubGF5ZXIgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkTWFya2VyID0gbnVsbFxuICAgIHRoaXMuaG92ZXJlZE1hcmtlciA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbnVsbFxuICAgIHRoaXMubWFya2VycyA9IFtdXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IG51bGxcbiAgICB0aGlzLmhlYXRMYXllciA9IG51bGxcbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IG51bGxcblxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5jbGFzc2lmeUNvbG9yTWFwID0ge31cbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogTWFya2Vyc0xheWVyT3B0aW9ucykge1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdGhpcy5pbml0TWFya2VycygpXG4gICAgdGhpcy5pbml0RXZlbnRzKClcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5sYXllci5yZW1vdmUoKVxuICAgIH1cblxuICAgIC8vIOS8mOWFiOWIpOaWrSBpc0NsdXN0ZXJcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzQ2x1c3RlciAmJiB0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50Jykge1xuICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQ2x1c3RlckxheWVyKClcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSkge1xuICAgICAgICBjYXNlICdwb2ludCc6IHtcbiAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdjbHVzdGVyJzoge1xuICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0NsdXN0ZXJMYXllcigpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdoZWF0Jzoge1xuICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0hlYXRMYXllcigpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyVHlwZX1cImApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbVtdKSB7XG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFcbiAgfVxuICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zLCByZWRyYXcgPSBmYWxzZSkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIGlmIChyZWRyYXcpIHtcbiAgICAgIHRoaXMucmVkcmF3KClcbiAgICB9XG4gIH1cbiAgLyoqIOiOt+WPluW9k+WJjSBvcHRpb25zICovXG4gIHB1YmxpYyBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pXG4gIH1cbiAgcHVibGljIGdldEJvdW5kcygpOiBMLkxhdExuZ0JvdW5kc0V4cHJlc3Npb24ge1xuICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXJrZXJzLm1hcChcbiAgICAgIChtYXJrZXIpID0+XG4gICAgICAgIFttYXJrZXIuZ2V0TGF0TG5nKCkubGF0LCBtYXJrZXIuZ2V0TGF0TG5nKCkubG5nXSBhcyBbbnVtYmVyLCBudW1iZXJdXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcilcbiAgICB9XG4gICAgdGhpcy5tYXAub2ZmKCd6b29tc3RhcnQnLCB0aGlzLl96b29tU3RhcnRDYiwgdGhpcylcbiAgICB0aGlzLm1hcC5vZmYoJ3pvb21lbmQnLCB0aGlzLl96b29tRW5kQ2IsIHRoaXMpXG4gIH1cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmUoKVxuICAgICAgfVxuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIGNoYW5nZUljb24oaWNvblVuaWNvZGU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5pY29uVW5pY29kZSA9IGljb25Vbmljb2RlXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgaWYgKG1hcmtlci5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciwgdHJ1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwdWJsaWMgZ2V0Q2xhc3NpZnlDb2xvclJlZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NpZnlDb2xvclJlZnNcbiAgfVxuICBwcm90ZWN0ZWQgX3pvb21TdGFydENiKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlcicpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50JyAmJiAhdGhpcy5vcHRpb25zLmlzQ2x1c3Rlcikge1xuICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX3pvb21FbmRDYigpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUgPT09ICdwb2ludCcgJiYgIXRoaXMub3B0aW9ucy5pc0NsdXN0ZXIpIHtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9XG4gIH1cbiAgLyoqIOa4suafk+S4uuaVo+eCueWbviAqL1xuICBwcm90ZWN0ZWQgY29uZmlnTWFya2VyTGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgY29uc3QgY2FudmFzSWNvbkxheWVyID0gTC5jYW52YXNJY29uTGF5ZXIoe30pLmFkZFRvKHRoaXMubWFwKVxuICAgIC8vIOa3u+WKoOeCueWHu+S6i+S7tlxuICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkNsaWNrTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyIGFzIE1hcmtlcilcbiAgICB9KVxuICAgIC8vIOa3u+WKoOWPs+mUruS6i+S7tlxuICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkNvbnRleHRtZW51TGlzdGVuZXIoKGV2ZW50LCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ2NvbnRleHRtZW51Jywge1xuICAgICAgICBldmVudCxcbiAgICAgICAgbWFya2VyLFxuICAgICAgfSlcbiAgICB9KVxuICAgIC8vIOa3u+WKoCBob3ZlciDkuovku7ZcbiAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXApIHtcbiAgICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkhvdmVyTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgICAvLyDkuYvliY3mnIkgaG92ZXIg55qE5YWz6ZetIHRvb2x0aXBcbiAgICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlcikge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5jbG9zZVRvb2x0aXAoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlciA9IG1hcmtlciBhcyBNYXJrZXJcblxuICAgICAgICBpZiAodGhpcy5ob3ZlcmVkTWFya2VyLmdldFRvb2x0aXAoKSkge1xuICAgICAgICAgIC8vIOWmguaenOW3sue7j+iuvue9riB0b29sdGlwIOebtOaOpeWxleekuiB0b29sdGlwXG4gICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLm9wZW5Ub29sdGlwKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyDlkKbliJnnu5HlrpogdG9vbHRpcCDlubblsZXnpLpcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgICAgICcnICsgdGhpcy5ob3ZlcmVkTWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkTWFya2Vycyh0aGlzLm1hcmtlcnMpXG5cbiAgICAvLyDop6PlhrPliJ3mrKHmuLLmn5PkuI3lh7rlm77moIfpl67pophcbiAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLm1hcC5nZXRDZW50ZXIoKSlcblxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBjYW52YXNJY29uTGF5ZXJcbiAgICByZXR1cm4gdGhpcy5tYXJrZXJMYXllclxuICB9XG4gIHByb3RlY3RlZCBnZXRUb29sVGlwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgfVxuICBwcm90ZWN0ZWQgaW5pdE9wdGlvbnMob3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNNZXJnZShcbiAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICBvcHRpb25zXG4gICAgKSBhcyBNYXJrZXJzTGF5ZXJPcHRpb25zXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRNYXJrZXJzKCkge1xuICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKClcbiAgICB0aGlzLmNhY2hlQ2xhc3NpZnlQYXJhbXMoKVxuICAgIHRoaXMubWFya2VycyA9IFtdXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXSBhcyBMLk1hcmtlclxuXG4gICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKFxuICAgICAgICBbbGF5ZXIuZ2V0TGF0TG5nKCkubGF0LCBsYXllci5nZXRMYXRMbmcoKS5sbmddLFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKGRhdGEpLFxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIC8vIOWwhuebuOWFs+WAvOe7keWumuWIsCBtYXJrZXLkuIpcbiAgICAgIG1hcmtlci5zZXREYXRhKGRhdGEpXG4gICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpXG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdEV2ZW50cygpIHtcbiAgICB0aGlzLm1hcC5vbignem9vbXN0YXJ0JywgdGhpcy5fem9vbVN0YXJ0Q2IsIHRoaXMpXG4gICAgdGhpcy5tYXAub24oJ3pvb21lbmQnLCB0aGlzLl96b29tRW5kQ2IsIHRoaXMpXG4gIH1cbiAgLy8g5aSE55CGIG1hcmtlciDngrnlh7vkuovku7ZcbiAgcHJpdmF0ZSBtYXJrZXJDbGlja0hhbmRsZXIobWFya2VyOiBNYXJrZXIsIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBtYXJrZXJcbiAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwKSB7XG4gICAgICAvLyDliKDpmaTliY3kuIDkuKrmlL7lpKflm77moIdcbiAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlRnJvbSh0aGlzLm1hcClcbiAgICAgIH1cbiAgICAgIC8vIOeUn+aIkOW9k+WJjeaUvuWkp+Wbvuagh1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlciA9IG5ldyBNYXJrZXIobWFya2VyLmdldExhdExuZygpLCB7XG4gICAgICAgIGljb246IHRoaXMuZ2V0TGFyZ2VyTWFya2VySWNvbihtYXJrZXIuZ2V0RGF0YSgpKSxcbiAgICAgIH0pXG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLmFkZFRvKHRoaXMubWFwKVxuICAgICAgLy8g5re75Yqg5pS+5aSn5Zu+5qCH55qEIHBvcHVwXG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyXG4gICAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpXG4gICAgICAgIC5vcGVuUG9wdXAoKVxuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmUoKVxuICAgICAgfSlcbiAgICB9XG4gICAgbWFya2VyLmNsb3NlVG9vbHRpcCgpXG5cbiAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWRNYXJrZXIuZ2V0TGF0TG5nKCkpXG4gICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKG1hcmtlci5nZXRMYXRMbmcoKS50b0JvdW5kcygxMCkpXG4gICAgfVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLW1hcmtlcicsIG1hcmtlcilcbiAgfVxuICBwcml2YXRlIGNvbmZpZ0NsdXN0ZXJMYXllcigpIHtcbiAgICAvLyDlsZXnpLrogZrlkIjlm77lsYJcbiAgICBpZiAodGhpcy5jbHVzdGVyTGF5ZXIpIHtcbiAgICAgIHRoaXMuY2x1c3RlckxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMuY2x1c3RlckxheWVyID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoe1xuICAgICAgaWNvbkNyZWF0ZUZ1bmN0aW9uOiB0aGlzLmljb25DcmVhdGVGdW5jdGlvbi5iaW5kKHRoaXMpLFxuICAgIH0pXG4gICAgdGhpcy5jbHVzdGVyTGF5ZXIuYWRkTGF5ZXJzKFxuICAgICAgdGhpcy5tYXJrZXJzLm1hcCgobSkgPT4ge1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKG0uZ2V0TGF0TG5nKCksIHtcbiAgICAgICAgICBpY29uOiB0aGlzLmdldE1hcmtlckljb24obS5nZXREYXRhKCkpLFxuICAgICAgICB9KVxuICAgICAgICBtYXJrZXIuc2V0RGF0YShtLmdldERhdGEoKSlcbiAgICAgICAgbWFya2VyLmJpbmRUb29sdGlwKCcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdKVxuICAgICAgICBtYXJrZXIuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgICBtYXJrZXIub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcilcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG1hcmtlclxuICAgICAgfSlcbiAgICApXG4gICAgcmV0dXJuIHRoaXMuY2x1c3RlckxheWVyXG4gIH1cblxuICAvKiog5riy5p+T5Li654Ot5Yqb5Zu+ICovXG4gIHByaXZhdGUgY29uZmlnSGVhdExheWVyKCkge1xuICAgIGlmICh0aGlzLmhlYXRMYXllcikge1xuICAgICAgdGhpcy5oZWF0TGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgY29uc3QgYWx0czogbnVtYmVyW10gPSBbXVxuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGNvbnN0IGxhdExuZyA9IG1hcmtlci5nZXRMYXRMbmcoKVxuICAgICAgY29uc3QgZGltZW5zaW9uQXR0ciA9XG4gICAgICAgIHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMuZGltZW5zaW9uQXR0clxuICAgICAgbGV0IGFsdCA9XG4gICAgICAgIChkaW1lbnNpb25BdHRyICYmIG1hcmtlci5nZXREYXRhKClbZGltZW5zaW9uQXR0cl0pIHx8XG4gICAgICAgIHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucy5tYXhcbiAgICAgIGlmICh0eXBlb2YgYWx0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBhbHQgPSB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4XG4gICAgICB9XG4gICAgICBhbHRzLnB1c2goYWx0KVxuICAgICAgbWFya2VyLnNldExhdExuZyhMLmxhdExuZyhsYXRMbmcubGF0LCBsYXRMbmcubG5nLCBhbHQpKVxuICAgIH0pXG4gICAgdGhpcy5oZWF0TGF5ZXIgPSBMLmhlYXRMYXllcihcbiAgICAgIHRoaXMubWFya2Vycy5tYXAoKGl0LCBpbmRleCkgPT4gW1xuICAgICAgICBpdC5nZXRMYXRMbmcoKS5sYXQsXG4gICAgICAgIGl0LmdldExhdExuZygpLmxuZyxcbiAgICAgICAgYWx0c1tpbmRleF0sXG4gICAgICBdKSxcbiAgICAgIG9wdGlvbnNNZXJnZSh7IG1pbk9wYWNpdHk6IDAuNSB9LCB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMpXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmhlYXRMYXllclxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYXJnZXJNYXJrZXJJY29uKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIHRydWUpXG4gIH1cblxuICBwcml2YXRlIGdldE1hcmtlckljb24oZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgZmFsc2UpXG4gIH1cblxuICAvKiog6I635Y+W5b2T5YmNIG1hcmtlciDpnIDopoHlsZXnpLrnmoQgaWNvbiAqL1xuICBwcml2YXRlIF9nZXRNYXJrZXJJY29uKFxuICAgIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgICBpc0xhcmdlcjogYm9vbGVhblxuICApOiBMLkljb24gfCBMLkRpdkljb24ge1xuICAgIGNvbnN0IGljb25TaXplID0gdGhpcy5vcHRpb25zLmljb25TaXplXG4gICAgY29uc3QgaWNvbkFuY2hvciA9IHRoaXMub3B0aW9ucy5pY29uQW5jaG9yXG4gICAgY29uc3QgbGFyZ2VySWNvblNpemUgPSBbaWNvblNpemVbMF0gKiAxLjUsIGljb25TaXplWzFdICogMS41XSBhcyBbXG4gICAgICBudW1iZXIsXG4gICAgICBudW1iZXJcbiAgICBdXG4gICAgY29uc3QgbGFyZ2VySWNvbkFuY2hvciA9IFtpY29uQW5jaG9yWzBdICogMS41LCBpY29uQW5jaG9yWzFdICogMS41XSBhcyBbXG4gICAgICBudW1iZXIsXG4gICAgICBudW1iZXJcbiAgICBdXG5cbiAgICBjb25zdCBpY29uQ29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yXG5cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgY2FzZSAnaW1hZ2UnOiB7XG4gICAgICAgIC8vIHJldHVybiBMLmljb24oe1xuICAgICAgICAvLyAgIGljb25Vcmw6IHRoaXMub3B0aW9ucy5pY29uSW1hZ2VVcmwsXG4gICAgICAgIC8vICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgLy8gICBpY29uQW5jaG9yLFxuICAgICAgICAvLyB9KVxuICAgICAgfVxuICAgICAgY2FzZSAnZm9udF9jbGFzcyc6XG4gICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgaHRtbDogdGhpcy5nZXRDdXN0b21JY29uSFRNTChkYXRhLCB7XG4gICAgICAgICAgICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXJnZXIgPyAnbGFyZ2UtZGl2LWljb24tbWFya2VyJyA6ICcnLFxuICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgaWNvbkFuY2hvcjogaXNMYXJnZXIgPyBsYXJnZXJJY29uQW5jaG9yIDogaWNvbkFuY2hvcixcbiAgICAgICAgICB0b29sdGlwQW5jaG9yOiBpc0xhcmdlclxuICAgICAgICAgICAgPyBbMCwgLWxhcmdlckljb25BbmNob3JbMV0gLyAyXVxuICAgICAgICAgICAgOiBbMCwgLWljb25BbmNob3JbMV0gLyAyXSxcbiAgICAgICAgICBwb3B1cEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyVHlwZSDkuI3og73kuLogJHt0aGlzLm9wdGlvbnMuaWNvblR5cGV9YClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBnZXRDdXN0b21JY29uSFRNTChcbiAgICBkYXRhOiBEYXRhTGlzdEl0ZW0sXG4gICAgb3B0aW9ucz86IEljb25SZW5kZXJGdW5jT3B0aW9uXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmljb25SZW5kZXJlcihkYXRhLCBvcHRpb25zKVxuICAgIH1cbiAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yXG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGUpIHtcbiAgICAgIGNhc2UgJ3NpbmdsZSc6IHtcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdjbGFzc2lmaWVkJzoge1xuICAgICAgICBjb2xvciA9IHRoaXMuZ2V0Q2xhc3NpZnlNYXJrZXJDb2xvcihkYXRhKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnc2VnbWVudGVkJzoge1xuICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGByZW5kZXJQb2ludENvbG9yVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlfVwiYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgIGNhc2UgJ2ZvbnRfY2xhc3MnOiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgPGkgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgYFxuICAgICAgfVxuICAgICAgLy8g5L2/55SoIHN2Z1xuICAgICAgY2FzZSAnc3ltYm9sJzoge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uLXN5bWJvbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLm9wdGlvbnMuaWNvblN5bWJvbH1cIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICBgXG4gICAgICB9XG4gICAgICAvLyDkvb/nlKggdW5pY29kZVxuICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICA8aVxuICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGV9XG4gICAgICAgICAgPC9pPlxuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgY2FjaGVDbGFzc2lmeVBhcmFtcygpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQXR0cikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG1wOiB7IFtwcm9wOiBzdHJpbmddOiBbc3RyaW5nLCBudW1iZXJdIH0gPSB7fVxuICAgIGNvbnN0IHByb3AgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHJcbiAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhW3Byb3BdIGluIHRtcCkge1xuICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgdG1wW2RhdGFbcHJvcF1dWzFdICsgMV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCAxXVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0bXApXG4gICAgdmFsdWVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgIHRoaXMuY2xhc3NpZnlDb2xvclJlZnMgPSBbXVxuICAgIHZhbHVlcy5mb3JFYWNoKChbYXR0ciwgbnVtc10sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY29sb3IgPSAnYmxhY2snXG4gICAgICBpZiAoaW5kZXggPCB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9yc1tpbmRleF1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2xhc3NpZnlDb2xvck1hcFthdHRyXSA9IGNvbG9yXG4gICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JSZWZzLnB1c2goe1xuICAgICAgICBhdHRyLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgbnVtcyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBwcml2YXRlIGdldENsYXNzaWZ5TWFya2VyQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2RhdGFbdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyXV1cbiAgfVxuICBwcml2YXRlIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aFxuICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHlcbiAgICBsZXQgbWluVmFsID0gSW5maW5pdHlcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKVxuICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpXG4gICAgfVxuICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGhcbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IG1pblZhbFxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXBcbiAgfVxuICBwcml2YXRlIGdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGE6IERhdGFMaXN0SXRlbSk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbXG4gICAgICBwYXJzZUludCgnJyArICh2YWwgLSB0aGlzLnNlZ21lbnRlZE1pbikgLyB0aGlzLnNlZ21lbnRlZFN0ZXAsIDEwKVxuICAgIF1cbiAgICByZXR1cm4gY29sb3JcbiAgfVxuICBwcml2YXRlIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtcbiAgICAgICAgZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgfWBcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBpY29uQ3JlYXRlRnVuY3Rpb24oY2x1c3RlcjogTC5NYXJrZXJzQ2x1c3Rlcikge1xuICAgIGNvbnN0IGNvbG9ycyA9IFsnIzc1NzQ3MicsICcjNTA5M0UyJywgJyNDQjc5ODcnLCAnI0ZDNzYzQiddXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5kYXRhTGlzdC5sZW5ndGhcbiAgICBjb25zdCBzdGVwID0gbGVuZ3RoIC8gY29sb3JzLmxlbmd0aFxuICAgIGNvbnN0IHNjYWxlU3RlcCA9ICgxIC0gMC43NSkgLyBjb2xvcnMubGVuZ3RoXG4gICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvclxuICAgIGxldCBzY2FsZSA9IDFcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlckNsdXN0ZXJDb2xvclR5cGUgPT09ICdzbWFydCcpIHtcbiAgICAgIGNvbG9yID0gY29sb3JzW01hdGguZmxvb3IoKGNsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpIC0gMSkgLyBzdGVwKV1cbiAgICAgIHNjYWxlID1cbiAgICAgICAgKE1hdGguZmxvb3IoKGNsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpIC0gMSkgLyBzdGVwKSArIDEpICogc2NhbGVTdGVwICtcbiAgICAgICAgMC43NVxuICAgIH1cbiAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgIGh0bWw6IGBcbiAgICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKCR7c2NhbGV9LCAke3NjYWxlfSwgMSlcbiAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbihjb2xvcil9O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3J9O1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBtYXJnaW46IDlweDtcbiAgICAgICAgICBcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgIGxlZnQ6IDlweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICR7Y2x1c3Rlci5nZXRDaGlsZENvdW50KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgIGljb25TaXplOiBbNDAsIDQwXSxcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgUG9seWdvbiBmcm9tICcuL1BvbHlnb24nXG5pbXBvcnQgUG9seWdvbnNMYXllciwgeyBQb2x5Z29uTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi9Qb2x5Z29uc0xheWVyJ1xuaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkc0xheWVyIGV4dGVuZHMgUG9seWdvbnNMYXllciB7XG4gIHByaXZhdGUgcHJvcE1heExlbmd0aDogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIHRoaXMucHJvcE1heExlbmd0aCA9IC0xXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0dyaWRMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICAvLyB0b29sdGlwIOacieWPr+iDvemcgOimgeebtOaOpeWxleekuu+8jOmcgOimgeWcqCBwb2x5Z29uIOa3u+WKoOWIsOWcsOWbvuS4iuS5i+WQjuaJjeWPr+S7pe+8jOaJgOS7pemcgOimgeW7tui/n+iuvue9rlxuICAgIHRoaXMuY29uZmlnVG9vbHRpcCgpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnpvb21IYW5kbGVyKClcbiAgICB9LCAyMDApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgdG9nZ2xlVG9vbHRpcCh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICBpZiAocG9seWdvbi5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgcG9seWdvbi5nZXRUb29sdGlwKCkuc2V0T3BhY2l0eSh2aXNpYmxlID8gMSA6IDApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdEV2ZW50KCkge1xuICAgIHRoaXMubWFwLm9uKCd6b29tJywgdGhpcy56b29tSGFuZGxlci5iaW5kKHRoaXMpKVxuICB9XG4gIHByaXZhdGUgY29uZmlnVG9vbHRpcCgpIHtcbiAgICB0aGlzLnByb3BNYXhMZW5ndGggPSB0aGlzLmdldFByb3BNYXhMZW5ndGgoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICBwb2x5Z29uLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQocG9seWdvbi5nZXREYXRhKCkpLCB7XG4gICAgICAgICAgcGVybWFuZW50OiB0cnVlLFxuICAgICAgICAgIGRpcmVjdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGNvbmZpZ0dyaWRMYXllcigpIHtcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5Z29ucyA9IHRoaXMucG9seWdvbnMubWFwKChwb2x5Z29uKSA9PiB7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWdvbkNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihwb2x5Z29uLmdldERhdGEoKSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnM6IEwuUG9seWxpbmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yLFxuICAgICAgfSlcbiAgICAgIC8vIOmHjeaWsOW6lOeUqCBvcHRpb25zXG4gICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IFBvbHlnb24ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpXG4gICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpXG4gICAgICBuZXdQb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWdvbi5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1BvbHlnb25cbiAgICB9KVxuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIuYWRkTGF5ZXIocG9seWdvbilcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllclxuICB9XG4gIHByaXZhdGUgem9vbUhhbmRsZXIoKSB7XG4gICAgY29uc3QgcG9seWdvbiA9IHRoaXMucG9seWdvbnNbMF1cbiAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb24pID5cbiAgICAgICAgdGhpcy5nZXRUb29sdGlwTWF4V2lkdGgodGhpcy5wcm9wTWF4TGVuZ3RoKVxuICAgIClcbiAgfVxuICBwcml2YXRlIGdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb246IFBvbHlnb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCkpLnggLVxuICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpLnhcbiAgICApXG4gIH1cbiAgcHJpdmF0ZSBnZXRUb29sdGlwTWF4V2lkdGgodGV4dExlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRleHRMZW5ndGggKiAxMiArIDE0XG4gIH1cbiAgcHJpdmF0ZSBnZXRQcm9wTWF4TGVuZ3RoKCkge1xuICAgIGNvbnN0IHByb3AgPVxuICAgICAgdHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnBvcHVwQXR0clxuICAgICAgICA6IHRoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVcbiAgICByZXR1cm4gdGhpcy5wb2x5Z29uc1xuICAgICAgLm1hcCgocG9seWdvbikgPT4gYCR7cG9seWdvbi5nZXREYXRhKClbcHJvcF19YC5sZW5ndGgpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChwcmV2LCBjdXJyKVxuICAgICAgfSwgMClcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBMLlBvbHlnb24ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxhdGxuZ3M6XG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdXG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdW11cbiAgICAgIHwgTC5MYXRMbmdFeHByZXNzaW9uW11bXVtdLFxuICAgIG9wdGlvbnM/OiBMLlBvbHlsaW5lT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKVxuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHRoaXMuX19kYXRhID0gZGF0YVxuICB9XG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YVxuICB9XG59XG4iLCJpbXBvcnQgeyBsaWdodGVuLCBkYXJrZW4sIG9wdGlvbnNNZXJnZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi9Qb2x5Z29uJ1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWdvbkxheWVyUmVuZGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xudHlwZSBDb2xvck1vZGUgPSAnZGFya2VuJyB8ICdsaWdodGVuJyB8ICdub3JtYWwnXG5cbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAnIzcyQUZERidcbmV4cG9ydCBpbnRlcmZhY2UgUG9seWdvbkxheWVyT3B0aW9ucyBleHRlbmRzIEwuUG9seWxpbmVPcHRpb25zIHtcbiAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogUG9seWdvbkxheWVyUmVuZGVyQ29sb3JUeXBlXG5cbiAgLyoqIHBvcHVwIOWxleekuuWtl+autSAqL1xuICBwb3B1cEF0dHI/OiBzdHJpbmcgfCB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBhbnkgfVxuICAvKiogdG9vbHRpcCDlsZXnpLrlrZfmrrUgKi9cbiAgdG9vbHRpcEF0dHI/OiBzdHJpbmdcblxuICBvcGFjaXR5PzogbnVtYmVyXG5cbiAgLyoqIOWIhuautea4suafk+e7n+iuoeWtl+autSAqL1xuICBzZWdtZW50ZWRBdHRyPzogc3RyaW5nXG4gIHNlZ21lbnRlZENvbG9ycz86IHN0cmluZ1tdXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uc0xheWVyIHtcbiAgcHVibGljIHR5cGU6IHN0cmluZ1xuXG4gIHByb3RlY3RlZCB2aXNpYmxlOiBib29sZWFuXG4gIHByb3RlY3RlZCBsYXllcjogTC5MYXllckdyb3VwXG5cbiAgcHJvdGVjdGVkIG1hcDogTC5NYXBcbiAgcHJvdGVjdGVkIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVxuICBwcm90ZWN0ZWQgb3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9uc1xuICBwcm90ZWN0ZWQgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRNaW46IG51bWJlclxuICBwcm90ZWN0ZWQgc2VnbWVudGVkU3RlcDogbnVtYmVyXG4gIHByb3RlY3RlZCBwb2x5Z29uczogUG9seWdvbltdXG4gIHByb3RlY3RlZCBmb2N1c2VkUG9seWdvbjogUG9seWdvblxuICBwcm90ZWN0ZWQgZm9jdXNlZERpc3BsYXlQb2x5Z29uOiBQb2x5Z29uXG4gIHByb3RlY3RlZCBwb2x5Z29uTGF5ZXI6IEwuTGF5ZXJHcm91cFxuXG4gIHByaXZhdGUgZGVmYXVsdE9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnNcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGFMaXN0KSB8fCBkYXRhTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZGF0YUxpc3Qg5b+F6aG75piv6Z2e56m65pWw57uEYClcbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICAgIGNvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgIGZpbGxDb2xvcjogREVGQVVMVF9DT0xPUixcbiAgICAgIHdlaWdodDogMSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBmaWxsT3BhY2l0eTogMC40LFxuICAgICAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFtERUZBVUxUX0NPTE9SXSxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3BvbHlnb24nXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zTWVyZ2UoXG4gICAgICB0aGlzLmRlZmF1bHRPcHRpb25zLFxuICAgICAgb3B0aW9uc1xuICAgICkgYXMgUG9seWdvbkxheWVyT3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMucG9seWdvbnMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5mb2N1c2VkUG9seWdvbiA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbiA9IG51bGxcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWdvbkxheWVyT3B0aW9ucykge1xuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5Z29ucygpXG4gICAgdGhpcy5pbml0RXZlbnQoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlnb25MYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWdvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5Z29ucy5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksXG4gICAgICBMLmxhdExuZ0JvdW5kcyhcbiAgICAgICAgdGhpcy5wb2x5Z29uc1swXS5nZXRCb3VuZHMoKS5nZXROb3J0aEVhc3QoKSxcbiAgICAgICAgdGhpcy5wb2x5Z29uc1swXS5nZXRCb3VuZHMoKS5nZXRTb3V0aFdlc3QoKVxuICAgICAgKVxuICAgIClcbiAgfVxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbilcbiAgICB9XG4gIH1cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLnJlbW92ZSgpXG4gICAgICB9XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5maWxsQ29sb3IgPSBjb2xvclxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcGl0Y2goaWQ6IHN0cmluZykge1xuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgaWYgKHBvbHlnb24uZ2V0RGF0YSgpLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbiwgdHJ1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcbiAgcHJvdGVjdGVkIGluaXRFdmVudCgpIHt9XG4gIHByb3RlY3RlZCBnZXRUb29sVGlwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgfVxuICBwcm90ZWN0ZWQgZ2V0UG9wdXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWBcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke1xuICAgICAgICBkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICB9YFxuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByb3RlY3RlZCBnZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByb3RlY3RlZCBwb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb246IFBvbHlnb24sIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRQb2x5Z29uID0gcG9seWdvblxuICAgIC8vIOWIoOmZpOWJjeS4gOS4qiBmb2N1c1xuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKClcbiAgICB9XG4gICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwge1xuICAgICAgY29sb3I6IERFRkFVTFRfQ09MT1IsXG4gICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWdvbi5nZXREYXRhKCkpLFxuICAgIH0pXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24uYWRkVG8odGhpcy5tYXApXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvblxuICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChwb2x5Z29uLmdldERhdGEoKSkpXG4gICAgICAub3BlblBvcHVwKClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKClcbiAgICB9KVxuICAgIHBvbHlnb24uY2xvc2VUb29sdGlwKClcblxuICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLmdldENlbnRlcigpKVxuICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5Z29uLmdldEJvdW5kcygpKVxuICAgIH1cbiAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1wb2x5Z29uJywgcG9seWdvbilcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdE9wdGlvbnMob3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNNZXJnZShcbiAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICBvcHRpb25zXG4gICAgKSBhcyBQb2x5Z29uTGF5ZXJPcHRpb25zXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRQb2x5Z29ucygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5wb2x5Z29ucyA9IFtdXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuICAgICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKChsYXllciBhcyBMLlBvbHlnb24pLmdldExhdExuZ3MoKSlcblxuICAgICAgcG9seWdvbi5zZXREYXRhKGRhdGEpXG4gICAgICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbilcbiAgICB9KVxuICB9XG4gIHByaXZhdGUgY29uZmlnUG9seWdvbkxheWVyKCkge1xuICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlnb25zID0gdGhpcy5wb2x5Z29ucy5tYXAoKHBvbHlnb24pID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IEwuUG9seWxpbmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWdvbi5nZXREYXRhKCkpLFxuICAgICAgfSlcbiAgICAgIC8vIOmHjeaWsOW6lOeUqCBvcHRpb25zXG4gICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IFBvbHlnb24ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpXG4gICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgIG5ld1BvbHlnb24uYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5Z29uLmdldERhdGEoKSkpXG4gICAgICB9XG4gICAgICBuZXdQb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICB9KVxuICAgICAgcmV0dXJuIG5ld1BvbHlnb25cbiAgICB9KVxuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIuYWRkTGF5ZXIocG9seWdvbilcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllclxuICB9XG4gIHByaXZhdGUgZ2V0Q29sb3IoZGF0YTogRGF0YUxpc3RJdGVtLCBtb2RlPzogQ29sb3JNb2RlKSB7XG4gICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihkYXRhKVxuICAgIH1cbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgIHJldHVybiBkYXJrZW4oY29sb3IpXG4gICAgICBjYXNlICdsaWdodGVuJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0ZW4oY29sb3IpXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gY29sb3JcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgdHlwZSBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24gPVxuICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdXG4gIHwgTC5MYXRMbmdFeHByZXNzaW9uW11bXVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWxpbmUgZXh0ZW5kcyBMLlBvbHlsaW5lIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfX2RhdGE6IERhdGFMaXN0SXRlbVxuICBjb25zdHJ1Y3RvcihsYXRsbmdzOiBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sIG9wdGlvbnM/OiBMLlBvbHlsaW5lT3B0aW9ucykge1xuICAgIHN1cGVyKGxhdGxuZ3MsIG9wdGlvbnMpXG4gIH1cbiAgcHVibGljIHNldERhdGEoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgdGhpcy5fX2RhdGEgPSBkYXRhXG4gIH1cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kYXRhXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBQb2x5bGluZXNMYXllciBmcm9tICcuL1BvbHlsaW5lc0xheWVyJ1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbmludGVyZmFjZSBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyBleHRlbmRzIEwuQ29ycmlkb3JPcHRpb25zIHtcbiAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6IFBvbHlsaW5lTGF5ZXJSZW5kZXJDb2xvclR5cGVcblxuICAvKiogcG9wdXAg5bGV56S65a2X5q61ICovXG4gIHBvcHVwQXR0cj86IHN0cmluZ1xuICAvKiogdG9vbHRpcCDlsZXnpLrlrZfmrrUgKi9cbiAgdG9vbHRpcEF0dHI/OiBzdHJpbmdcblxuICBvcGFjaXR5PzogbnVtYmVyXG5cbiAgLyoqIOWIhuautea4suafk+e7n+iuoeWtl+autSAqL1xuICBzZWdtZW50ZWRBdHRyPzogc3RyaW5nXG4gIHNlZ21lbnRlZENvbG9ycz86IHN0cmluZ1tdXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZXNCdWZmZXJMYXllciBleHRlbmRzIFBvbHlsaW5lc0xheWVyIHtcbiAgcHVibGljIHR5cGU6IHN0cmluZ1xuICBwcm90ZWN0ZWQgb3B0aW9uczogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnNcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyA9IHtcbiAgICAgIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICBjb3JyaWRvcjogMTAwLFxuICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3BvbHlsaW5lQnVmZmVyJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMucG9seWxpbmVzID0gW11cbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMVxuICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbFxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgdGhpcy5pbml0UG9seWxpbmVzKClcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5sYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdQb2x5bGluZUJ1ZmZlckxheWVyKClcbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIGZpdEJvdW5kcygpIHtcbiAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5nZXRCb3VuZHMoKSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVzLnJlZHVjZShcbiAgICAgIChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSxcbiAgICAgIHRoaXMucG9seWxpbmVzWzBdLmdldEJvdW5kcygpXG4gICAgKVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25zLmNvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHJpdmF0ZSBjb25maWdQb2x5bGluZUJ1ZmZlckxheWVyKCkge1xuICAgIHRoaXMucG9seWxpbmVMYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIHBvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSlcbiAgICAgIH0pXG4gICAgICBjb25zdCBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NpbmdsZSdcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICAgICAgICAgICAgOiB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKSxcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBjb25zdCBwb2x5bGluZUJ1ZmZlciA9IEwuY29ycmlkb3IoXG4gICAgICAgIChwb2x5bGluZS5nZXRMYXRMbmdzKCkgYXMgTC5MYXRMbmdbXSkubWFwKChsYXRMbmcpID0+XG4gICAgICAgICAgTC5sYXRMbmcoW2xhdExuZy5sYXQsIGxhdExuZy5sbmddKVxuICAgICAgICApLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgIHBvbHlsaW5lQnVmZmVyLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQocG9seWxpbmUuZ2V0RGF0YSgpKSlcbiAgICAgIH1cbiAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihwb2x5bGluZUJ1ZmZlcilcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlsaW5lTGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlsaW5lLCB7IFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiB9IGZyb20gJy4vUG9seWxpbmUnXG5pbXBvcnQgeyBkYXJrZW4sIGxpZ2h0ZW4sIG9wdGlvbnNNZXJnZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbnR5cGUgQ29sb3JNb2RlID0gJ2RhcmtlbicgfCAnbGlnaHRlbicgfCAnbm9ybWFsJ1xuaW50ZXJmYWNlIFBvbHlsaW5lTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWxpbmVzTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOiBMLkxheWVyR3JvdXBcblxuICBwcm90ZWN0ZWQgbWFwOiBMLk1hcFxuICBwcm90ZWN0ZWQgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9uc1xuICBwcm90ZWN0ZWQgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gIHByb3RlY3RlZCBwb2x5bGluZXM6IFBvbHlsaW5lW11cbiAgcHJvdGVjdGVkIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJvdGVjdGVkIGZvY3VzZWRQb2x5bGluZTogUG9seWxpbmVcbiAgcHJvdGVjdGVkIGZvY3VzZWREaXNwbGF5UG9seWxpbmU6IFBvbHlsaW5lXG4gIHByb3RlY3RlZCBwb2x5bGluZUxheWVyOiBMLkxheWVyR3JvdXBcbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnNcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhTGlzdCkgfHwgZGF0YUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGRhdGFMaXN0IOW/hemhu+aYr+mdnuepuuaVsOe7hGApXG4gICAgfVxuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIHBvcHVwQXR0cjogeyBsYWJlbDogJ+WQjeensCcsIHZhbHVlOiAnbmFtZScgfSxcbiAgICAgIHRvb2x0aXBBdHRyOiAnbmFtZScsXG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdwb2x5bGluZSdcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNNZXJnZShcbiAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBvcHRpb25zXG4gICAgKSBhcyBQb2x5bGluZUxheWVyT3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMucG9seWxpbmVzID0gW11cbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMVxuICAgIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbFxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSA9IG51bGxcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWxpbmVMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdGhpcy5pbml0UG9seWxpbmVzKClcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5sYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdQb2x5bGluZUxheWVyKClcbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIGZpdEJvdW5kcygpIHtcbiAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5nZXRCb3VuZHMoKSwgeyBwYWRkaW5nOiBbMjAsIDIwXSB9KVxuICB9XG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKFxuICAgICAgKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLFxuICAgICAgTC5sYXRMbmdCb3VuZHMoXG4gICAgICAgIHRoaXMucG9seWxpbmVzWzBdLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpLFxuICAgICAgICB0aGlzLnBvbHlsaW5lc1swXS5nZXRCb3VuZHMoKS5nZXRTb3V0aFdlc3QoKVxuICAgICAgKVxuICAgIClcbiAgfVxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSkge1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKClcbiAgICAgIH1cbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25zLmZpbGxDb2xvciA9IGNvbG9yXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIGlmIChwb2x5bGluZS5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUsIHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRPcHRpb25zKG9wdGlvbnM6IFBvbHlsaW5lTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc01lcmdlKFxuICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIG9wdGlvbnNcbiAgICApIGFzIFBvbHlsaW5lTGF5ZXJPcHRpb25zXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRQb2x5bGluZXMoKSB7XG4gICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuXG4gICAgdGhpcy5wb2x5bGluZXMgPSB0aGlzLmRhdGFMaXN0Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF1cbiAgICAgIC8vIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgLy8gaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIC8vICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSlcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IHBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKFxuICAgICAgICAobGF5ZXIgYXMgTC5Qb2x5bGluZSkuZ2V0TGF0TG5ncygpIGFzIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvblxuICAgICAgKVxuXG4gICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICBwb2x5bGluZS5zZXREYXRhKGRhdGEpXG5cbiAgICAgIHJldHVybiBwb2x5bGluZVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByb3RlY3RlZCBwb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZTogUG9seWxpbmUsIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRQb2x5bGluZSA9IHBvbHlsaW5lXG4gICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSkge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpXG4gICAgfVxuICAgIC8vIOeUn+aIkOW9k+WJjSBmb2N1c1xuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSA9IG5ldyBQb2x5bGluZShcbiAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5bGluZS5nZXREYXRhKCksICdub3JtYWwnKSxcbiAgICAgIH1cbiAgICApXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmFkZFRvKHRoaXMubWFwKVxuXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlsaW5lLmdldERhdGEoKSkpXG4gICAgICAub3BlblBvcHVwKClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICBwb2x5bGluZS5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmdldENlbnRlcigpKVxuICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5bGluZS5nZXRCb3VuZHMoKSlcbiAgICB9XG4gICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stcG9seWxpbmUnLCBwb2x5bGluZSlcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gIH1cbiAgcHJvdGVjdGVkIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtcbiAgICAgICAgZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgfWBcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjb25maWdQb2x5bGluZUxheWVyKCkge1xuICAgIHRoaXMucG9seWxpbmVMYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKVxuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgY29sb3IsXG4gICAgICB9KVxuICAgICAgY29uc3QgbmV3UG9seWxpbmUgPSBuZXcgUG9seWxpbmUoXG4gICAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIG5ld1BvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSlcbiAgICAgIH0pXG4gICAgICBuZXdQb2x5bGluZS5zZXREYXRhKHBvbHlsaW5lLmdldERhdGEoKSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWxpbmUuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKG5ld1BvbHlsaW5lKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0Q29sb3IoZGF0YTogRGF0YUxpc3RJdGVtLCBtb2RlPzogQ29sb3JNb2RlKSB7XG4gICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKGRhdGEpXG4gICAgfVxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgcmV0dXJuIGRhcmtlbihjb2xvcilcbiAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICByZXR1cm4gbGlnaHRlbihjb2xvcilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb2xvclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgQ29sb3IgZnJvbSAnY29sb3InXG5cbmZ1bmN0aW9uIGxpZ2h0ZW4oaGV4Q29sb3I6IHN0cmluZykge1xuICByZXR1cm4gQ29sb3IoaGV4Q29sb3IpXG4gICAgLmxpZ2h0ZW4oMC41KVxuICAgIC5oZXgoKVxufVxuZnVuY3Rpb24gZGFya2VuKGhleENvbG9yOiBzdHJpbmcpIHtcbiAgcmV0dXJuIENvbG9yKGhleENvbG9yKVxuICAgIC5kYXJrZW4oMC41KVxuICAgIC5oZXgoKVxufVxuXG5mdW5jdGlvbiBvcHRpb25zTWVyZ2UoLi4udGFyZ2V0czogYW55W10pOiBvYmplY3Qge1xuICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gdGFyZ2V0c1swXVxuICB9XG4gIGNvbnN0IG1lcmdlZCA9IHRhcmdldHNbMF1cbiAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0c1sxXSkge1xuICAgIGlmIChrZXkgaW4gbWVyZ2VkKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG1lcmdlZFtrZXldKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICAgICAgbWVyZ2VkW2tleV0gPSBvcHRpb25zTWVyZ2UobWVyZ2VkW2tleV0sIHRhcmdldHNbMV1ba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZFtrZXldID0gdGFyZ2V0c1sxXVtrZXldXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lcmdlZFtrZXldID0gdGFyZ2V0c1sxXVtrZXldXG4gICAgfVxuICB9XG4gIHJldHVybiBvcHRpb25zTWVyZ2UobWVyZ2VkLCAuLi50YXJnZXRzLnNsaWNlKDIpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpZ2h0ZW4sXG4gIGRhcmtlbixcbiAgb3B0aW9uc01lcmdlLFxufVxuZXhwb3J0IHsgbGlnaHRlbiwgZGFya2VuLCBvcHRpb25zTWVyZ2UgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==

/***/ }),

/***/ "./test/src/app.js":
/*!*************************!*\
  !*** ./test/src/app.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _leaflet_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../leaflet-layer */ "./dist/leaflet-layer.js");
/* harmony import */ var _leaflet_layer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_leaflet_layer__WEBPACK_IMPORTED_MODULE_0__);
// @ts-ignore


// @ts-ignore
const L = window.L

function isPointInViewport(x, y) {
  return (
    x >= 0 &&
    y >= 0 &&
    x <= (window.innerWidth || document.documentElement.clientWidth) &&
    y <= (window.innerHeight || document.documentElement.clientHeight)
  )
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function calcOffset(x, y, w, h) {
  const BOTTOM_RIGHT = 0
  const BOTTOM_LEFT = 1
  const TOP_RIGHT = 2
  const TOP_LEFT = 3
  const bounds = [
    [x + w, y + h],
    [x - w, y + h],
    [x + w, y - h],
    [x - w, y - h],
  ]

  let i = 0
  for (; i < bounds.length; i++) {
    if (isPointInViewport(...bounds[i])) {
      break
    }
  }
  switch (i) {
    case BOTTOM_RIGHT:
      return [x, y]
    case BOTTOM_LEFT:
      return [x - w, y]
    case TOP_RIGHT:
      return [x, y - h]
    case TOP_LEFT:
      return [x - w, y - h]
    default:
      return [x, y]
  }
}

var position = new L.LatLng(39.90778, 116.401216)
var map = L.map('map').setView(position, 13)

L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)

// var dataList = [
//   {
//     geometry: {
//       type: 'Polygon',
//       coordinates: [
//         [
//           [116.401216, 39.90778],
//           [116.391216, 39.90778],
//           [116.391216, 39.91778],
//           [116.401216, 39.91778],
//         ],
//       ],
//     },
//     price: 109090909090,
//   },
// ]

// var layer = new leafletMap.GridsLayer(
//   map,
//   dataList,
//   { tooltipAttr: 'price', popupAttr: { label: 'p', value: 'price' } },
//   console.log
// )
// layer.toggleTooltip(true)
// layer.draw()

// var dataList = [
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.401216, 39.90778],
//     },
//     price: 0.1,
//     name: '5',
//   },
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.391216, 39.90778],
//     },
//     price: 0.1,
//     name: '2',
//   },
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.391216, 39.91778],
//     },
//     price: 0.1,
//     name: '1',
//   },
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.401216, 39.91778],
//     },
//     price: 100,
//     name: '2',
//   },
// ]

// var layer = new leafletMap.MarkersLayer(
//   map,
//   dataList,
//   {
//     renderType: 'heat',
//     heatOptions: {
//       dimensionAttr: 'price',
//       radius: 30,
//       minOpacity: 0.7,
//       blur: 60,
//       // max: 1,
//     },
//   },
//   console.log
// )
// layer.draw()

var dataList = [
  {
    geometry: {
      type: 'Point',
      coordinates: [116.401216, 39.90778],
    },
    price: 1,
    class: 'a'
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [116.391216, 39.90778],
    },
    price: 1,
    class: 'b'
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [116.381216, 39.90778],
    },
    price: 1,
    class: 'b'
  },
]

var layer = new _leaflet_layer__WEBPACK_IMPORTED_MODULE_0___default.a.MarkersLayer(
  map,
  dataList,
  {
    iconUnicode: '&#xe655;',
    tooltip: false,
    popup: false,
    renderPointColorType: 'classified',
    classifiedAttr: 'class',
    classifiedColors: ['red'],
  },
  function(eventName) {
    // const w = 100
    // const h = 200
    // const { x, y } = event.containerPoint
    // calcOffset(x, y, w, h)
  }
)
layer.draw()
console.log(layer.getClassifyColorRefs())

// var dataList = [
//   [
//     {
//       geometry: {
//         type: 'Point',
//         coordinates: [116.401216, 39.90778],
//       },
//       price: 1,
//     },
//   ],
//   [
//     {
//       geometry: {
//         type: 'Point',
//         coordinates: [116.391216, 39.90778],
//       },
//       price: 1,
//     },
//   ],
//   [
//     {
//       geometry: {
//         type: 'Point',
//         coordinates: [116.391216, 39.91778],
//       },
//       price: 1,
//     },
//   ],
//   [
//     {
//       geometry: {
//         type: 'Point',
//         coordinates: [116.401216, 39.91778],
//       },
//       price: 1,
//     },
//   ],
// ]
// const layer = new leafletMap.DynamicHeatLayer(
//   map,
//   dataList,
//   { loop: true, auto: true },
//   console.log
// )
//   .draw()
//   .start()

// L.marker([32.0304, 118.7968], {
//   icon: L.divIcon({
//     html: '<i class="iconfont" style="font-size: 40px;">&#xe655;</i>',
//     iconSize: [40, 40],
//     className: 'test',
//   }),
// }).addTo(map)
// L.marker([32.0304, 118.7968]).addTo(map)
// var dataList = [
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.401216, 39.90778],
//     },
//     price: 2,
//   },
// ]

// const layer = new leafletMap.MarkersLayer(
//   map,
//   dataList,
//   {
//     iconUnicode: '&#xe655;',
//     iconSize: [20, 20],
//     iconAnchor: [10, 20],
//     popupAttr: 'price',
//     tooltipAttr: 'price',
//   },
//   function(eventName) {
//     console.log(eventName)
//   }
// )

// layer.draw()

// // L.marker(L.latLng(39.90778, 116.401216))
// //   .addTo(map)
// //   .bindTooltip('adf')

// L.marker(L.latLng(39.90778, 116.401216), {
//   opacity: 0.2,
//   icon: L.divIcon({
//     iconAnchor: [10, 20],
//     iconSize: [20, 20],
//     html: `
//     <i
//       class="iconfont"
//       style="
//         color: red;
//         font-size: 20px;
//       "
//       >
//       &#xe655;
//     </i>
//   `,
//   }),
// }).addTo(map)
// window.layer = layer


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sZWFmbGV0LWxheWVyLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUsyQjtBQUNqQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYTtBQUM1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RCx1Q0FBdUM7QUFDL0Ysc0RBQXNELHFDQUFxQzs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLElBQUk7QUFDN0Isd0JBQXdCLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DLFNBQVM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpR0FBaUcseUJBQXlCLEVBQUU7QUFDNUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLCtEQUErRCxFQUFFOztBQUVoSztBQUNBLHFHQUFxRyxxRUFBcUUsRUFBRTs7QUFFNUs7QUFDQSwyR0FBMkcsMkVBQTJFLEVBQUU7O0FBRXhMO0FBQ0EsaUdBQWlHLG1FQUFtRSxFQUFFOztBQUV0SztBQUNBLHVHQUF1Ryx5RUFBeUUsRUFBRTs7QUFFbEw7QUFDQSw2R0FBNkcsK0VBQStFLEVBQUU7O0FBRTlMO0FBQ0EsZ0dBQWdHLGlFQUFpRSxFQUFFOztBQUVuSztBQUNBLHNHQUFzRyx1RUFBdUUsRUFBRTs7QUFFL0s7QUFDQSxtR0FBbUcsb0VBQW9FLEVBQUU7O0FBRXpLO0FBQ0EseUdBQXlHLG1GQUFtRixFQUFFOzs7Ozs7Ozs7Ozs7QUFZOUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUdBQWlHLGVBQWUsRUFBRTtBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUdBQWlHLDJCQUEyQixFQUFFO0FBQzlIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxzQ0FBc0M7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpR0FBaUcscUJBQXFCLEVBQUU7QUFDeEg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZCQUE2QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHdCQUF3QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLG9CQUFvQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixJQUFJO0FBQ0oiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZXN0L3NyYy9hcHAuanNcIik7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxlYWZsZXRNYXBcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb2xvci1uYW1lICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qc1wiKTtcblxuLy8gTk9URTogY29udmVyc2lvbnMgc2hvdWxkIG9ubHkgcmV0dXJuIHByaW1pdGl2ZSB2YWx1ZXMgKGkuZS4gYXJyYXlzLCBvclxuLy8gICAgICAgdmFsdWVzIHRoYXQgZ2l2ZSBjb3JyZWN0IGB0eXBlb2ZgIHJlc3VsdHMpLlxuLy8gICAgICAgZG8gbm90IHVzZSBib3ggdmFsdWVzIHR5cGVzIChpLmUuIE51bWJlcigpLCBTdHJpbmcoKSwgZXRjLilcblxudmFyIHJldmVyc2VLZXl3b3JkcyA9IHt9O1xuZm9yICh2YXIga2V5IGluIGNzc0tleXdvcmRzKSB7XG5cdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0cmV2ZXJzZUtleXdvcmRzW2Nzc0tleXdvcmRzW2tleV1dID0ga2V5O1xuXHR9XG59XG5cbnZhciBjb252ZXJ0ID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHJnYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdyZ2InfSxcblx0aHNsOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzbCd9LFxuXHRoc3Y6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHN2J30sXG5cdGh3Yjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdod2InfSxcblx0Y215azoge2NoYW5uZWxzOiA0LCBsYWJlbHM6ICdjbXlrJ30sXG5cdHh5ejoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICd4eXonfSxcblx0bGFiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xhYid9LFxuXHRsY2g6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGNoJ30sXG5cdGhleDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnaGV4J119LFxuXHRrZXl3b3JkOiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydrZXl3b3JkJ119LFxuXHRhbnNpMTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kxNiddfSxcblx0YW5zaTI1Njoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTI1NiddfSxcblx0aGNnOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydoJywgJ2MnLCAnZyddfSxcblx0YXBwbGU6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ3IxNicsICdnMTYnLCAnYjE2J119LFxuXHRncmF5OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydncmF5J119XG59O1xuXG4vLyBoaWRlIC5jaGFubmVscyBhbmQgLmxhYmVscyBwcm9wZXJ0aWVzXG5mb3IgKHZhciBtb2RlbCBpbiBjb252ZXJ0KSB7XG5cdGlmIChjb252ZXJ0Lmhhc093blByb3BlcnR5KG1vZGVsKSkge1xuXHRcdGlmICghKCdjaGFubmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0aWYgKCEoJ2xhYmVscycgaW4gY29udmVydFttb2RlbF0pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgY2hhbm5lbCBsYWJlbHMgcHJvcGVydHk6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbnZlcnRbbW9kZWxdLmxhYmVscy5sZW5ndGggIT09IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NoYW5uZWwgYW5kIGxhYmVsIGNvdW50cyBtaXNtYXRjaDogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbGFiZWxzID0gY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0ubGFiZWxzO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjaGFubmVsc30pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W21vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogbGFiZWxzfSk7XG5cdH1cbn1cblxuY29udmVydC5yZ2IuaHNsID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRlbHRhID0gbWF4IC0gbWluO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cdHZhciBsO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdGggPSAwO1xuXHR9IGVsc2UgaWYgKHIgPT09IG1heCkge1xuXHRcdGggPSAoZyAtIGIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG5cdFx0aCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG5cdH0gZWxzZSBpZiAoYiA9PT0gbWF4KSB7XG5cdFx0aCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG5cdH1cblxuXHRoID0gTWF0aC5taW4oaCAqIDYwLCAzNjApO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0bCA9IChtaW4gKyBtYXgpIC8gMjtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRzID0gMDtcblx0fSBlbHNlIGlmIChsIDw9IDAuNSkge1xuXHRcdHMgPSBkZWx0YSAvIChtYXggKyBtaW4pO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkZWx0YSAvICgyIC0gbWF4IC0gbWluKTtcblx0fVxuXG5cdHJldHVybiBbaCwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5oc3YgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZGlmO1xuXHR2YXIgZ2RpZjtcblx0dmFyIGJkaWY7XG5cdHZhciBoO1xuXHR2YXIgcztcblxuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgdiA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGlmZiA9IHYgLSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIGRpZmZjID0gZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gKHYgLSBjKSAvIDYgLyBkaWZmICsgMSAvIDI7XG5cdH07XG5cblx0aWYgKGRpZmYgPT09IDApIHtcblx0XHRoID0gcyA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRpZmYgLyB2O1xuXHRcdHJkaWYgPSBkaWZmYyhyKTtcblx0XHRnZGlmID0gZGlmZmMoZyk7XG5cdFx0YmRpZiA9IGRpZmZjKGIpO1xuXG5cdFx0aWYgKHIgPT09IHYpIHtcblx0XHRcdGggPSBiZGlmIC0gZ2RpZjtcblx0XHR9IGVsc2UgaWYgKGcgPT09IHYpIHtcblx0XHRcdGggPSAoMSAvIDMpICsgcmRpZiAtIGJkaWY7XG5cdFx0fSBlbHNlIGlmIChiID09PSB2KSB7XG5cdFx0XHRoID0gKDIgLyAzKSArIGdkaWYgLSByZGlmO1xuXHRcdH1cblx0XHRpZiAoaCA8IDApIHtcblx0XHRcdGggKz0gMTtcblx0XHR9IGVsc2UgaWYgKGggPiAxKSB7XG5cdFx0XHRoIC09IDE7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRoICogMzYwLFxuXHRcdHMgKiAxMDAsXG5cdFx0diAqIDEwMFxuXHRdO1xufTtcblxuY29udmVydC5yZ2IuaHdiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXTtcblx0dmFyIGcgPSByZ2JbMV07XG5cdHZhciBiID0gcmdiWzJdO1xuXHR2YXIgaCA9IGNvbnZlcnQucmdiLmhzbChyZ2IpWzBdO1xuXHR2YXIgdyA9IDEgLyAyNTUgKiBNYXRoLm1pbihyLCBNYXRoLm1pbihnLCBiKSk7XG5cblx0YiA9IDEgLSAxIC8gMjU1ICogTWF0aC5tYXgociwgTWF0aC5tYXgoZywgYikpO1xuXG5cdHJldHVybiBbaCwgdyAqIDEwMCwgYiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5jbXlrID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgYztcblx0dmFyIG07XG5cdHZhciB5O1xuXHR2YXIgaztcblxuXHRrID0gTWF0aC5taW4oMSAtIHIsIDEgLSBnLCAxIC0gYik7XG5cdGMgPSAoMSAtIHIgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0bSA9ICgxIC0gZyAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHR5ID0gKDEgLSBiIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cblx0cmV0dXJuIFtjICogMTAwLCBtICogMTAwLCB5ICogMTAwLCBrICogMTAwXTtcbn07XG5cbi8qKlxuICogU2VlIGh0dHBzOi8vZW4ubS53aWtpcGVkaWEub3JnL3dpa2kvRXVjbGlkZWFuX2Rpc3RhbmNlI1NxdWFyZWRfRXVjbGlkZWFuX2Rpc3RhbmNlXG4gKiAqL1xuZnVuY3Rpb24gY29tcGFyYXRpdmVEaXN0YW5jZSh4LCB5KSB7XG5cdHJldHVybiAoXG5cdFx0TWF0aC5wb3coeFswXSAtIHlbMF0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzFdIC0geVsxXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMl0gLSB5WzJdLCAyKVxuXHQpO1xufVxuXG5jb252ZXJ0LnJnYi5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmV2ZXJzZWQgPSByZXZlcnNlS2V5d29yZHNbcmdiXTtcblx0aWYgKHJldmVyc2VkKSB7XG5cdFx0cmV0dXJuIHJldmVyc2VkO1xuXHR9XG5cblx0dmFyIGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcblx0dmFyIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcblxuXHRmb3IgKHZhciBrZXl3b3JkIGluIGNzc0tleXdvcmRzKSB7XG5cdFx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleXdvcmQpKSB7XG5cdFx0XHR2YXIgdmFsdWUgPSBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcblxuXHRcdFx0Ly8gQ29tcHV0ZSBjb21wYXJhdGl2ZSBkaXN0YW5jZVxuXHRcdFx0dmFyIGRpc3RhbmNlID0gY29tcGFyYXRpdmVEaXN0YW5jZShyZ2IsIHZhbHVlKTtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgaXRzIGxlc3MsIGlmIHNvIHNldCBhcyBjbG9zZXN0XG5cdFx0XHRpZiAoZGlzdGFuY2UgPCBjdXJyZW50Q2xvc2VzdERpc3RhbmNlKSB7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3RLZXl3b3JkID0ga2V5d29yZDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENsb3Nlc3RLZXl3b3JkO1xufTtcblxuY29udmVydC5rZXl3b3JkLnJnYiA9IGZ1bmN0aW9uIChrZXl3b3JkKSB7XG5cdHJldHVybiBjc3NLZXl3b3Jkc1trZXl3b3JkXTtcbn07XG5cbmNvbnZlcnQucmdiLnh5eiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKHIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAociAvIDEyLjkyKTtcblx0ZyA9IGcgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChnICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGcgLyAxMi45Mik7XG5cdGIgPSBiID4gMC4wNDA0NSA/IE1hdGgucG93KCgoYiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChiIC8gMTIuOTIpO1xuXG5cdHZhciB4ID0gKHIgKiAwLjQxMjQpICsgKGcgKiAwLjM1NzYpICsgKGIgKiAwLjE4MDUpO1xuXHR2YXIgeSA9IChyICogMC4yMTI2KSArIChnICogMC43MTUyKSArIChiICogMC4wNzIyKTtcblx0dmFyIHogPSAociAqIDAuMDE5MykgKyAoZyAqIDAuMTE5MikgKyAoYiAqIDAuOTUwNSk7XG5cblx0cmV0dXJuIFt4ICogMTAwLCB5ICogMTAwLCB6ICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmxhYiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHh5eiA9IGNvbnZlcnQucmdiLnh5eihyZ2IpO1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQuaHNsLnJnYiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF0gLyAzNjA7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHQxO1xuXHR2YXIgdDI7XG5cdHZhciB0Mztcblx0dmFyIHJnYjtcblx0dmFyIHZhbDtcblxuXHRpZiAocyA9PT0gMCkge1xuXHRcdHZhbCA9IGwgKiAyNTU7XG5cdFx0cmV0dXJuIFt2YWwsIHZhbCwgdmFsXTtcblx0fVxuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0dDIgPSBsICogKDEgKyBzKTtcblx0fSBlbHNlIHtcblx0XHR0MiA9IGwgKyBzIC0gbCAqIHM7XG5cdH1cblxuXHR0MSA9IDIgKiBsIC0gdDI7XG5cblx0cmdiID0gWzAsIDAsIDBdO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHQzID0gaCArIDEgLyAzICogLShpIC0gMSk7XG5cdFx0aWYgKHQzIDwgMCkge1xuXHRcdFx0dDMrKztcblx0XHR9XG5cdFx0aWYgKHQzID4gMSkge1xuXHRcdFx0dDMtLTtcblx0XHR9XG5cblx0XHRpZiAoNiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDM7XG5cdFx0fSBlbHNlIGlmICgyICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0Mjtcblx0XHR9IGVsc2UgaWYgKDMgKiB0MyA8IDIpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogKDIgLyAzIC0gdDMpICogNjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsID0gdDE7XG5cdFx0fVxuXG5cdFx0cmdiW2ldID0gdmFsICogMjU1O1xuXHR9XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNvbnZlcnQuaHNsLmhzdiA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIGggPSBoc2xbMF07XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIHNtaW4gPSBzO1xuXHR2YXIgbG1pbiA9IE1hdGgubWF4KGwsIDAuMDEpO1xuXHR2YXIgc3Y7XG5cdHZhciB2O1xuXG5cdGwgKj0gMjtcblx0cyAqPSAobCA8PSAxKSA/IGwgOiAyIC0gbDtcblx0c21pbiAqPSBsbWluIDw9IDEgPyBsbWluIDogMiAtIGxtaW47XG5cdHYgPSAobCArIHMpIC8gMjtcblx0c3YgPSBsID09PSAwID8gKDIgKiBzbWluKSAvIChsbWluICsgc21pbikgOiAoMiAqIHMpIC8gKGwgKyBzKTtcblxuXHRyZXR1cm4gW2gsIHN2ICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LnJnYiA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF0gLyA2MDtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgaGkgPSBNYXRoLmZsb29yKGgpICUgNjtcblxuXHR2YXIgZiA9IGggLSBNYXRoLmZsb29yKGgpO1xuXHR2YXIgcCA9IDI1NSAqIHYgKiAoMSAtIHMpO1xuXHR2YXIgcSA9IDI1NSAqIHYgKiAoMSAtIChzICogZikpO1xuXHR2YXIgdCA9IDI1NSAqIHYgKiAoMSAtIChzICogKDEgLSBmKSkpO1xuXHR2ICo9IDI1NTtcblxuXHRzd2l0Y2ggKGhpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIFt2LCB0LCBwXTtcblx0XHRjYXNlIDE6XG5cdFx0XHRyZXR1cm4gW3EsIHYsIHBdO1xuXHRcdGNhc2UgMjpcblx0XHRcdHJldHVybiBbcCwgdiwgdF07XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cmV0dXJuIFtwLCBxLCB2XTtcblx0XHRjYXNlIDQ6XG5cdFx0XHRyZXR1cm4gW3QsIHAsIHZdO1xuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBbdiwgcCwgcV07XG5cdH1cbn07XG5cbmNvbnZlcnQuaHN2LmhzbCA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIGggPSBoc3ZbMF07XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIHZtaW4gPSBNYXRoLm1heCh2LCAwLjAxKTtcblx0dmFyIGxtaW47XG5cdHZhciBzbDtcblx0dmFyIGw7XG5cblx0bCA9ICgyIC0gcykgKiB2O1xuXHRsbWluID0gKDIgLSBzKSAqIHZtaW47XG5cdHNsID0gcyAqIHZtaW47XG5cdHNsIC89IChsbWluIDw9IDEpID8gbG1pbiA6IDIgLSBsbWluO1xuXHRzbCA9IHNsIHx8IDA7XG5cdGwgLz0gMjtcblxuXHRyZXR1cm4gW2gsIHNsICogMTAwLCBsICogMTAwXTtcbn07XG5cbi8vIGh0dHA6Ly9kZXYudzMub3JnL2Nzc3dnL2Nzcy1jb2xvci8jaHdiLXRvLXJnYlxuY29udmVydC5od2IucmdiID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgaCA9IGh3YlswXSAvIDM2MDtcblx0dmFyIHdoID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYmwgPSBod2JbMl0gLyAxMDA7XG5cdHZhciByYXRpbyA9IHdoICsgYmw7XG5cdHZhciBpO1xuXHR2YXIgdjtcblx0dmFyIGY7XG5cdHZhciBuO1xuXG5cdC8vIHdoICsgYmwgY2FudCBiZSA+IDFcblx0aWYgKHJhdGlvID4gMSkge1xuXHRcdHdoIC89IHJhdGlvO1xuXHRcdGJsIC89IHJhdGlvO1xuXHR9XG5cblx0aSA9IE1hdGguZmxvb3IoNiAqIGgpO1xuXHR2ID0gMSAtIGJsO1xuXHRmID0gNiAqIGggLSBpO1xuXG5cdGlmICgoaSAmIDB4MDEpICE9PSAwKSB7XG5cdFx0ZiA9IDEgLSBmO1xuXHR9XG5cblx0biA9IHdoICsgZiAqICh2IC0gd2gpOyAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuXG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cdHN3aXRjaCAoaSkge1xuXHRcdGRlZmF1bHQ6XG5cdFx0Y2FzZSA2OlxuXHRcdGNhc2UgMDogciA9IHY7IGcgPSBuOyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMTogciA9IG47IGcgPSB2OyBiID0gd2g7IGJyZWFrO1xuXHRcdGNhc2UgMjogciA9IHdoOyBnID0gdjsgYiA9IG47IGJyZWFrO1xuXHRcdGNhc2UgMzogciA9IHdoOyBnID0gbjsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNDogciA9IG47IGcgPSB3aDsgYiA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgNTogciA9IHY7IGcgPSB3aDsgYiA9IG47IGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQuY215ay5yZ2IgPSBmdW5jdGlvbiAoY215aykge1xuXHR2YXIgYyA9IGNteWtbMF0gLyAxMDA7XG5cdHZhciBtID0gY215a1sxXSAvIDEwMDtcblx0dmFyIHkgPSBjbXlrWzJdIC8gMTAwO1xuXHR2YXIgayA9IGNteWtbM10gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9IDEgLSBNYXRoLm1pbigxLCBjICogKDEgLSBrKSArIGspO1xuXHRnID0gMSAtIE1hdGgubWluKDEsIG0gKiAoMSAtIGspICsgayk7XG5cdGIgPSAxIC0gTWF0aC5taW4oMSwgeSAqICgxIC0gaykgKyBrKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoucmdiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXSAvIDEwMDtcblx0dmFyIHkgPSB4eXpbMV0gLyAxMDA7XG5cdHZhciB6ID0geHl6WzJdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAoeCAqIDMuMjQwNikgKyAoeSAqIC0xLjUzNzIpICsgKHogKiAtMC40OTg2KTtcblx0ZyA9ICh4ICogLTAuOTY4OSkgKyAoeSAqIDEuODc1OCkgKyAoeiAqIDAuMDQxNSk7XG5cdGIgPSAoeCAqIDAuMDU1NykgKyAoeSAqIC0wLjIwNDApICsgKHogKiAxLjA1NzApO1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3cociwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IHIgKiAxMi45MjtcblxuXHRnID0gZyA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGcsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBnICogMTIuOTI7XG5cblx0YiA9IGIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhiLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogYiAqIDEyLjkyO1xuXG5cdHIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCByKSwgMSk7XG5cdGcgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBnKSwgMSk7XG5cdGIgPSBNYXRoLm1pbihNYXRoLm1heCgwLCBiKSwgMSk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LmxhYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmxhYi54eXogPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciB4O1xuXHR2YXIgeTtcblx0dmFyIHo7XG5cblx0eSA9IChsICsgMTYpIC8gMTE2O1xuXHR4ID0gYSAvIDUwMCArIHk7XG5cdHogPSB5IC0gYiAvIDIwMDtcblxuXHR2YXIgeTIgPSBNYXRoLnBvdyh5LCAzKTtcblx0dmFyIHgyID0gTWF0aC5wb3coeCwgMyk7XG5cdHZhciB6MiA9IE1hdGgucG93KHosIDMpO1xuXHR5ID0geTIgPiAwLjAwODg1NiA/IHkyIDogKHkgLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eCA9IHgyID4gMC4wMDg4NTYgPyB4MiA6ICh4IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHogPSB6MiA+IDAuMDA4ODU2ID8gejIgOiAoeiAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXG5cdHggKj0gOTUuMDQ3O1xuXHR5ICo9IDEwMDtcblx0eiAqPSAxMDguODgzO1xuXG5cdHJldHVybiBbeCwgeSwgel07XG59O1xuXG5jb252ZXJ0LmxhYi5sY2ggPSBmdW5jdGlvbiAobGFiKSB7XG5cdHZhciBsID0gbGFiWzBdO1xuXHR2YXIgYSA9IGxhYlsxXTtcblx0dmFyIGIgPSBsYWJbMl07XG5cdHZhciBocjtcblx0dmFyIGg7XG5cdHZhciBjO1xuXG5cdGhyID0gTWF0aC5hdGFuMihiLCBhKTtcblx0aCA9IGhyICogMzYwIC8gMiAvIE1hdGguUEk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRjID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xuXG5cdHJldHVybiBbbCwgYywgaF07XG59O1xuXG5jb252ZXJ0LmxjaC5sYWIgPSBmdW5jdGlvbiAobGNoKSB7XG5cdHZhciBsID0gbGNoWzBdO1xuXHR2YXIgYyA9IGxjaFsxXTtcblx0dmFyIGggPSBsY2hbMl07XG5cdHZhciBhO1xuXHR2YXIgYjtcblx0dmFyIGhyO1xuXG5cdGhyID0gaCAvIDM2MCAqIDIgKiBNYXRoLlBJO1xuXHRhID0gYyAqIE1hdGguY29zKGhyKTtcblx0YiA9IGMgKiBNYXRoLnNpbihocik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cdHZhciB2YWx1ZSA9IDEgaW4gYXJndW1lbnRzID8gYXJndW1lbnRzWzFdIDogY29udmVydC5yZ2IuaHN2KGFyZ3MpWzJdOyAvLyBoc3YgLT4gYW5zaTE2IG9wdGltaXphdGlvblxuXG5cdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIDUwKTtcblxuXHRpZiAodmFsdWUgPT09IDApIHtcblx0XHRyZXR1cm4gMzA7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDMwXG5cdFx0KyAoKE1hdGgucm91bmQoYiAvIDI1NSkgPDwgMilcblx0XHR8IChNYXRoLnJvdW5kKGcgLyAyNTUpIDw8IDEpXG5cdFx0fCBNYXRoLnJvdW5kKHIgLyAyNTUpKTtcblxuXHRpZiAodmFsdWUgPT09IDIpIHtcblx0XHRhbnNpICs9IDYwO1xuXHR9XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0Lmhzdi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBvcHRpbWl6YXRpb24gaGVyZTsgd2UgYWxyZWFkeSBrbm93IHRoZSB2YWx1ZSBhbmQgZG9uJ3QgbmVlZCB0byBnZXRcblx0Ly8gaXQgY29udmVydGVkIGZvciB1cy5cblx0cmV0dXJuIGNvbnZlcnQucmdiLmFuc2kxNihjb252ZXJ0Lmhzdi5yZ2IoYXJncyksIGFyZ3NbMl0pO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTI1NiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciByID0gYXJnc1swXTtcblx0dmFyIGcgPSBhcmdzWzFdO1xuXHR2YXIgYiA9IGFyZ3NbMl07XG5cblx0Ly8gd2UgdXNlIHRoZSBleHRlbmRlZCBncmV5c2NhbGUgcGFsZXR0ZSBoZXJlLCB3aXRoIHRoZSBleGNlcHRpb24gb2Zcblx0Ly8gYmxhY2sgYW5kIHdoaXRlLiBub3JtYWwgcGFsZXR0ZSBvbmx5IGhhcyA0IGdyZXlzY2FsZSBzaGFkZXMuXG5cdGlmIChyID09PSBnICYmIGcgPT09IGIpIHtcblx0XHRpZiAociA8IDgpIHtcblx0XHRcdHJldHVybiAxNjtcblx0XHR9XG5cblx0XHRpZiAociA+IDI0OCkge1xuXHRcdFx0cmV0dXJuIDIzMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5yb3VuZCgoKHIgLSA4KSAvIDI0NykgKiAyNCkgKyAyMzI7XG5cdH1cblxuXHR2YXIgYW5zaSA9IDE2XG5cdFx0KyAoMzYgKiBNYXRoLnJvdW5kKHIgLyAyNTUgKiA1KSlcblx0XHQrICg2ICogTWF0aC5yb3VuZChnIC8gMjU1ICogNSkpXG5cdFx0KyBNYXRoLnJvdW5kKGIgLyAyNTUgKiA1KTtcblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuYW5zaTE2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBjb2xvciA9IGFyZ3MgJSAxMDtcblxuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChjb2xvciA9PT0gMCB8fCBjb2xvciA9PT0gNykge1xuXHRcdGlmIChhcmdzID4gNTApIHtcblx0XHRcdGNvbG9yICs9IDMuNTtcblx0XHR9XG5cblx0XHRjb2xvciA9IGNvbG9yIC8gMTAuNSAqIDI1NTtcblxuXHRcdHJldHVybiBbY29sb3IsIGNvbG9yLCBjb2xvcl07XG5cdH1cblxuXHR2YXIgbXVsdCA9ICh+fihhcmdzID4gNTApICsgMSkgKiAwLjU7XG5cdHZhciByID0gKChjb2xvciAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBnID0gKCgoY29sb3IgPj4gMSkgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgYiA9ICgoKGNvbG9yID4+IDIpICYgMSkgKiBtdWx0KSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5hbnNpMjU2LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGFyZ3MgPj0gMjMyKSB7XG5cdFx0dmFyIGMgPSAoYXJncyAtIDIzMikgKiAxMCArIDg7XG5cdFx0cmV0dXJuIFtjLCBjLCBjXTtcblx0fVxuXG5cdGFyZ3MgLT0gMTY7XG5cblx0dmFyIHJlbTtcblx0dmFyIHIgPSBNYXRoLmZsb29yKGFyZ3MgLyAzNikgLyA1ICogMjU1O1xuXHR2YXIgZyA9IE1hdGguZmxvb3IoKHJlbSA9IGFyZ3MgJSAzNikgLyA2KSAvIDUgKiAyNTU7XG5cdHZhciBiID0gKHJlbSAlIDYpIC8gNSAqIDI1NTtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGV4ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGludGVnZXIgPSAoKE1hdGgucm91bmQoYXJnc1swXSkgJiAweEZGKSA8PCAxNilcblx0XHQrICgoTWF0aC5yb3VuZChhcmdzWzFdKSAmIDB4RkYpIDw8IDgpXG5cdFx0KyAoTWF0aC5yb3VuZChhcmdzWzJdKSAmIDB4RkYpO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5oZXgucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIG1hdGNoID0gYXJncy50b1N0cmluZygxNikubWF0Y2goL1thLWYwLTldezZ9fFthLWYwLTldezN9L2kpO1xuXHRpZiAoIW1hdGNoKSB7XG5cdFx0cmV0dXJuIFswLCAwLCAwXTtcblx0fVxuXG5cdHZhciBjb2xvclN0cmluZyA9IG1hdGNoWzBdO1xuXG5cdGlmIChtYXRjaFswXS5sZW5ndGggPT09IDMpIHtcblx0XHRjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLnNwbGl0KCcnKS5tYXAoZnVuY3Rpb24gKGNoYXIpIHtcblx0XHRcdHJldHVybiBjaGFyICsgY2hhcjtcblx0XHR9KS5qb2luKCcnKTtcblx0fVxuXG5cdHZhciBpbnRlZ2VyID0gcGFyc2VJbnQoY29sb3JTdHJpbmcsIDE2KTtcblx0dmFyIHIgPSAoaW50ZWdlciA+PiAxNikgJiAweEZGO1xuXHR2YXIgZyA9IChpbnRlZ2VyID4+IDgpICYgMHhGRjtcblx0dmFyIGIgPSBpbnRlZ2VyICYgMHhGRjtcblxuXHRyZXR1cm4gW3IsIGcsIGJdO1xufTtcblxuY29udmVydC5yZ2IuaGNnID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgoTWF0aC5tYXgociwgZyksIGIpO1xuXHR2YXIgbWluID0gTWF0aC5taW4oTWF0aC5taW4ociwgZyksIGIpO1xuXHR2YXIgY2hyb21hID0gKG1heCAtIG1pbik7XG5cdHZhciBncmF5c2NhbGU7XG5cdHZhciBodWU7XG5cblx0aWYgKGNocm9tYSA8IDEpIHtcblx0XHRncmF5c2NhbGUgPSBtaW4gLyAoMSAtIGNocm9tYSk7XG5cdH0gZWxzZSB7XG5cdFx0Z3JheXNjYWxlID0gMDtcblx0fVxuXG5cdGlmIChjaHJvbWEgPD0gMCkge1xuXHRcdGh1ZSA9IDA7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSByKSB7XG5cdFx0aHVlID0gKChnIC0gYikgLyBjaHJvbWEpICUgNjtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IGcpIHtcblx0XHRodWUgPSAyICsgKGIgLSByKSAvIGNocm9tYTtcblx0fSBlbHNlIHtcblx0XHRodWUgPSA0ICsgKHIgLSBnKSAvIGNocm9tYSArIDQ7XG5cdH1cblxuXHRodWUgLz0gNjtcblx0aHVlICU9IDE7XG5cblx0cmV0dXJuIFtodWUgKiAzNjAsIGNocm9tYSAqIDEwMCwgZ3JheXNjYWxlICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHNsLmhjZyA9IGZ1bmN0aW9uIChoc2wpIHtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgYyA9IDE7XG5cdHZhciBmID0gMDtcblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdGMgPSAyLjAgKiBzICogbDtcblx0fSBlbHNlIHtcblx0XHRjID0gMi4wICogcyAqICgxLjAgLSBsKTtcblx0fVxuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9IChsIC0gMC41ICogYykgLyAoMS4wIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzbFswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5oY2cgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblxuXHR2YXIgYyA9IHMgKiB2O1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2hzdlswXSwgYyAqIDEwMCwgZiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5yZ2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBoID0gaGNnWzBdIC8gMzYwO1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0aWYgKGMgPT09IDAuMCkge1xuXHRcdHJldHVybiBbZyAqIDI1NSwgZyAqIDI1NSwgZyAqIDI1NV07XG5cdH1cblxuXHR2YXIgcHVyZSA9IFswLCAwLCAwXTtcblx0dmFyIGhpID0gKGggJSAxKSAqIDY7XG5cdHZhciB2ID0gaGkgJSAxO1xuXHR2YXIgdyA9IDEgLSB2O1xuXHR2YXIgbWcgPSAwO1xuXG5cdHN3aXRjaCAoTWF0aC5mbG9vcihoaSkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IHY7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDE6XG5cdFx0XHRwdXJlWzBdID0gdzsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSAwOyBicmVhaztcblx0XHRjYXNlIDI6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IDE7IHB1cmVbMl0gPSB2OyBicmVhaztcblx0XHRjYXNlIDM6XG5cdFx0XHRwdXJlWzBdID0gMDsgcHVyZVsxXSA9IHc7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRjYXNlIDQ6XG5cdFx0XHRwdXJlWzBdID0gdjsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSAxOyBicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gdztcblx0fVxuXG5cdG1nID0gKDEuMCAtIGMpICogZztcblxuXHRyZXR1cm4gW1xuXHRcdChjICogcHVyZVswXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMV0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzJdICsgbWcpICogMjU1XG5cdF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc3YgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKHYgPiAwLjApIHtcblx0XHRmID0gYyAvIHY7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgZiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5oc2wgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHR2YXIgbCA9IGcgKiAoMS4wIC0gYykgKyAwLjUgKiBjO1xuXHR2YXIgcyA9IDA7XG5cblx0aWYgKGwgPiAwLjAgJiYgbCA8IDAuNSkge1xuXHRcdHMgPSBjIC8gKDIgKiBsKTtcblx0fSBlbHNlXG5cdGlmIChsID49IDAuNSAmJiBsIDwgMS4wKSB7XG5cdFx0cyA9IGMgLyAoMiAqICgxIC0gbCkpO1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHJldHVybiBbaGNnWzBdLCAodiAtIGMpICogMTAwLCAoMSAtIHYpICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHdiLmhjZyA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIHcgPSBod2JbMV0gLyAxMDA7XG5cdHZhciBiID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgdiA9IDEgLSBiO1xuXHR2YXIgYyA9IHYgLSB3O1xuXHR2YXIgZyA9IDA7XG5cblx0aWYgKGMgPCAxKSB7XG5cdFx0ZyA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtod2JbMF0sIGMgKiAxMDAsIGcgKiAxMDBdO1xufTtcblxuY29udmVydC5hcHBsZS5yZ2IgPSBmdW5jdGlvbiAoYXBwbGUpIHtcblx0cmV0dXJuIFsoYXBwbGVbMF0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsxXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzJdIC8gNjU1MzUpICogMjU1XTtcbn07XG5cbmNvbnZlcnQucmdiLmFwcGxlID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gWyhyZ2JbMF0gLyAyNTUpICogNjU1MzUsIChyZ2JbMV0gLyAyNTUpICogNjU1MzUsIChyZ2JbMl0gLyAyNTUpICogNjU1MzVdO1xufTtcblxuY29udmVydC5ncmF5LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NSwgYXJnc1swXSAvIDEwMCAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHNsID0gY29udmVydC5ncmF5LmhzdiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHJldHVybiBbMCwgMCwgYXJnc1swXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuaHdiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAxMDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmNteWsgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDAsIDAsIGdyYXlbMF1dO1xufTtcblxuY29udmVydC5ncmF5LmxhYiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbZ3JheVswXSwgMCwgMF07XG59O1xuXG5jb252ZXJ0LmdyYXkuaGV4ID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0dmFyIHZhbCA9IE1hdGgucm91bmQoZ3JheVswXSAvIDEwMCAqIDI1NSkgJiAweEZGO1xuXHR2YXIgaW50ZWdlciA9ICh2YWwgPDwgMTYpICsgKHZhbCA8PCA4KSArIHZhbDtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQucmdiLmdyYXkgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB2YWwgPSAocmdiWzBdICsgcmdiWzFdICsgcmdiWzJdKSAvIDM7XG5cdHJldHVybiBbdmFsIC8gMjU1ICogMTAwXTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY29udmVyc2lvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvbnZlcnNpb25zICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qc1wiKTtcbnZhciByb3V0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcm91dGUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzXCIpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY29udmVyc2lvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvbnZlcnNpb25zICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qc1wiKTtcblxuLypcblx0dGhpcyBmdW5jdGlvbiByb3V0ZXMgYSBtb2RlbCB0byBhbGwgb3RoZXIgbW9kZWxzLlxuXG5cdGFsbCBmdW5jdGlvbnMgdGhhdCBhcmUgcm91dGVkIGhhdmUgYSBwcm9wZXJ0eSBgLmNvbnZlcnNpb25gIGF0dGFjaGVkXG5cdHRvIHRoZSByZXR1cm5lZCBzeW50aGV0aWMgZnVuY3Rpb24uIFRoaXMgcHJvcGVydHkgaXMgYW4gYXJyYXlcblx0b2Ygc3RyaW5ncywgZWFjaCB3aXRoIHRoZSBzdGVwcyBpbiBiZXR3ZWVuIHRoZSAnZnJvbScgYW5kICd0bydcblx0Y29sb3IgbW9kZWxzIChpbmNsdXNpdmUpLlxuXG5cdGNvbnZlcnNpb25zIHRoYXQgYXJlIG5vdCBwb3NzaWJsZSBzaW1wbHkgYXJlIG5vdCBpbmNsdWRlZC5cbiovXG5cbmZ1bmN0aW9uIGJ1aWxkR3JhcGgoKSB7XG5cdHZhciBncmFwaCA9IHt9O1xuXHQvLyBodHRwczovL2pzcGVyZi5jb20vb2JqZWN0LWtleXMtdnMtZm9yLWluLXdpdGgtY2xvc3VyZS8zXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cblx0Zm9yICh2YXIgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdGdyYXBoW21vZGVsc1tpXV0gPSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS8xLXZzLWluZmluaXR5XG5cdFx0XHQvLyBtaWNyby1vcHQsIGJ1dCB0aGlzIGlzIHNpbXBsZS5cblx0XHRcdGRpc3RhbmNlOiAtMSxcblx0XHRcdHBhcmVudDogbnVsbFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0JyZWFkdGgtZmlyc3Rfc2VhcmNoXG5mdW5jdGlvbiBkZXJpdmVCRlMoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGJ1aWxkR3JhcGgoKTtcblx0dmFyIHF1ZXVlID0gW2Zyb21Nb2RlbF07IC8vIHVuc2hpZnQgLT4gcXVldWUgLT4gcG9wXG5cblx0Z3JhcGhbZnJvbU1vZGVsXS5kaXN0YW5jZSA9IDA7XG5cblx0d2hpbGUgKHF1ZXVlLmxlbmd0aCkge1xuXHRcdHZhciBjdXJyZW50ID0gcXVldWUucG9wKCk7XG5cdFx0dmFyIGFkamFjZW50cyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zW2N1cnJlbnRdKTtcblxuXHRcdGZvciAodmFyIGxlbiA9IGFkamFjZW50cy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHZhciBhZGphY2VudCA9IGFkamFjZW50c1tpXTtcblx0XHRcdHZhciBub2RlID0gZ3JhcGhbYWRqYWNlbnRdO1xuXG5cdFx0XHRpZiAobm9kZS5kaXN0YW5jZSA9PT0gLTEpIHtcblx0XHRcdFx0bm9kZS5kaXN0YW5jZSA9IGdyYXBoW2N1cnJlbnRdLmRpc3RhbmNlICsgMTtcblx0XHRcdFx0bm9kZS5wYXJlbnQgPSBjdXJyZW50O1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KGFkamFjZW50KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZ3JhcGg7XG59XG5cbmZ1bmN0aW9uIGxpbmsoZnJvbSwgdG8pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0cmV0dXJuIHRvKGZyb20oYXJncykpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCkge1xuXHR2YXIgcGF0aCA9IFtncmFwaFt0b01vZGVsXS5wYXJlbnQsIHRvTW9kZWxdO1xuXHR2YXIgZm4gPSBjb252ZXJzaW9uc1tncmFwaFt0b01vZGVsXS5wYXJlbnRdW3RvTW9kZWxdO1xuXG5cdHZhciBjdXIgPSBncmFwaFt0b01vZGVsXS5wYXJlbnQ7XG5cdHdoaWxlIChncmFwaFtjdXJdLnBhcmVudCkge1xuXHRcdHBhdGgudW5zaGlmdChncmFwaFtjdXJdLnBhcmVudCk7XG5cdFx0Zm4gPSBsaW5rKGNvbnZlcnNpb25zW2dyYXBoW2N1cl0ucGFyZW50XVtjdXJdLCBmbik7XG5cdFx0Y3VyID0gZ3JhcGhbY3VyXS5wYXJlbnQ7XG5cdH1cblxuXHRmbi5jb252ZXJzaW9uID0gcGF0aDtcblx0cmV0dXJuIGZuO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gZGVyaXZlQkZTKGZyb21Nb2RlbCk7XG5cdHZhciBjb252ZXJzaW9uID0ge307XG5cblx0dmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGdyYXBoKTtcblx0Zm9yICh2YXIgbGVuID0gbW9kZWxzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciB0b01vZGVsID0gbW9kZWxzW2ldO1xuXHRcdHZhciBub2RlID0gZ3JhcGhbdG9Nb2RlbF07XG5cblx0XHRpZiAobm9kZS5wYXJlbnQgPT09IG51bGwpIHtcblx0XHRcdC8vIG5vIHBvc3NpYmxlIGNvbnZlcnNpb24sIG9yIHRoaXMgbm9kZSBpcyB0aGUgc291cmNlIG1vZGVsLlxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udmVyc2lvblt0b01vZGVsXSA9IHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKTtcblx0fVxuXG5cdHJldHVybiBjb252ZXJzaW9uO1xufTtcblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcclxuXHRcImFudGlxdWV3aGl0ZVwiOiBbMjUwLCAyMzUsIDIxNV0sXHJcblx0XCJhcXVhXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcclxuXHRcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcclxuXHRcImJlaWdlXCI6IFsyNDUsIDI0NSwgMjIwXSxcclxuXHRcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXHJcblx0XCJibGFja1wiOiBbMCwgMCwgMF0sXHJcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LCAyMzUsIDIwNV0sXHJcblx0XCJibHVlXCI6IFswLCAwLCAyNTVdLFxyXG5cdFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcclxuXHRcImJyb3duXCI6IFsxNjUsIDQyLCA0Ml0sXHJcblx0XCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxyXG5cdFwiY2FkZXRibHVlXCI6IFs5NSwgMTU4LCAxNjBdLFxyXG5cdFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxyXG5cdFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxyXG5cdFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXHJcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLCAxNDksIDIzN10sXHJcblx0XCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXHJcblx0XCJjcmltc29uXCI6IFsyMjAsIDIwLCA2MF0sXHJcblx0XCJjeWFuXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcclxuXHRcImRhcmtjeWFuXCI6IFswLCAxMzksIDEzOV0sXHJcblx0XCJkYXJrZ29sZGVucm9kXCI6IFsxODQsIDEzNCwgMTFdLFxyXG5cdFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxyXG5cdFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcclxuXHRcImRhcmttYWdlbnRhXCI6IFsxMzksIDAsIDEzOV0sXHJcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbODUsIDEwNywgNDddLFxyXG5cdFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxyXG5cdFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcclxuXHRcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXHJcblx0XCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcclxuXHRcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXHJcblx0XCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXHJcblx0XCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmtzbGF0ZWdyZXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbMCwgMjA2LCAyMDldLFxyXG5cdFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxyXG5cdFwiZGVlcHBpbmtcIjogWzI1NSwgMjAsIDE0N10sXHJcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbMCwgMTkxLCAyNTVdLFxyXG5cdFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRvZGdlcmJsdWVcIjogWzMwLCAxNDQsIDI1NV0sXHJcblx0XCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcclxuXHRcImZsb3JhbHdoaXRlXCI6IFsyNTUsIDI1MCwgMjQwXSxcclxuXHRcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXHJcblx0XCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJnYWluc2Jvcm9cIjogWzIyMCwgMjIwLCAyMjBdLFxyXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LCAyNDgsIDI1NV0sXHJcblx0XCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXHJcblx0XCJnb2xkZW5yb2RcIjogWzIxOCwgMTY1LCAzMl0sXHJcblx0XCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxyXG5cdFwiZ3JlZW55ZWxsb3dcIjogWzE3MywgMjU1LCA0N10sXHJcblx0XCJncmV5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcclxuXHRcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxyXG5cdFwiaW5kaWFucmVkXCI6IFsyMDUsIDkyLCA5Ml0sXHJcblx0XCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxyXG5cdFwiaXZvcnlcIjogWzI1NSwgMjU1LCAyNDBdLFxyXG5cdFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxyXG5cdFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxyXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXHJcblx0XCJsYXduZ3JlZW5cIjogWzEyNCwgMjUyLCAwXSxcclxuXHRcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXHJcblx0XCJsaWdodGJsdWVcIjogWzE3MywgMjE2LCAyMzBdLFxyXG5cdFwibGlnaHRjb3JhbFwiOiBbMjQwLCAxMjgsIDEyOF0sXHJcblx0XCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxyXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxyXG5cdFwibGlnaHRncmF5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxyXG5cdFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXHJcblx0XCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXHJcblx0XCJsaWdodHNlYWdyZWVuXCI6IFszMiwgMTc4LCAxNzBdLFxyXG5cdFwibGlnaHRza3libHVlXCI6IFsxMzUsIDIwNiwgMjUwXSxcclxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsIDE5NiwgMjIyXSxcclxuXHRcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcclxuXHRcImxpbWVcIjogWzAsIDI1NSwgMF0sXHJcblx0XCJsaW1lZ3JlZW5cIjogWzUwLCAyMDUsIDUwXSxcclxuXHRcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcclxuXHRcIm1hZ2VudGFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcIm1hcm9vblwiOiBbMTI4LCAwLCAwXSxcclxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxyXG5cdFwibWVkaXVtYmx1ZVwiOiBbMCwgMCwgMjA1XSxcclxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcclxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXHJcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbNjAsIDE3OSwgMTEzXSxcclxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLCAxMDQsIDIzOF0sXHJcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxyXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFs3MiwgMjA5LCAyMDRdLFxyXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksIDIxLCAxMzNdLFxyXG5cdFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXHJcblx0XCJtaW50Y3JlYW1cIjogWzI0NSwgMjU1LCAyNTBdLFxyXG5cdFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcclxuXHRcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcclxuXHRcIm5hdmFqb3doaXRlXCI6IFsyNTUsIDIyMiwgMTczXSxcclxuXHRcIm5hdnlcIjogWzAsIDAsIDEyOF0sXHJcblx0XCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcclxuXHRcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXHJcblx0XCJvbGl2ZWRyYWJcIjogWzEwNywgMTQyLCAzNV0sXHJcblx0XCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcclxuXHRcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXHJcblx0XCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxyXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXHJcblx0XCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxyXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXHJcblx0XCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcclxuXHRcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxyXG5cdFwicGVhY2hwdWZmXCI6IFsyNTUsIDIxOCwgMTg1XSxcclxuXHRcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXHJcblx0XCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcclxuXHRcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxyXG5cdFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXHJcblx0XCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcclxuXHRcInJlYmVjY2FwdXJwbGVcIjogWzEwMiwgNTEsIDE1M10sXHJcblx0XCJyZWRcIjogWzI1NSwgMCwgMF0sXHJcblx0XCJyb3N5YnJvd25cIjogWzE4OCwgMTQzLCAxNDNdLFxyXG5cdFwicm95YWxibHVlXCI6IFs2NSwgMTA1LCAyMjVdLFxyXG5cdFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcclxuXHRcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXHJcblx0XCJzYW5keWJyb3duXCI6IFsyNDQsIDE2NCwgOTZdLFxyXG5cdFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcclxuXHRcInNlYXNoZWxsXCI6IFsyNTUsIDI0NSwgMjM4XSxcclxuXHRcInNpZW5uYVwiOiBbMTYwLCA4MiwgNDVdLFxyXG5cdFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcclxuXHRcInNreWJsdWVcIjogWzEzNSwgMjA2LCAyMzVdLFxyXG5cdFwic2xhdGVibHVlXCI6IFsxMDYsIDkwLCAyMDVdLFxyXG5cdFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNsYXRlZ3JleVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbm93XCI6IFsyNTUsIDI1MCwgMjUwXSxcclxuXHRcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXHJcblx0XCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXHJcblx0XCJ0YW5cIjogWzIxMCwgMTgwLCAxNDBdLFxyXG5cdFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxyXG5cdFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXHJcblx0XCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcclxuXHRcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcclxuXHRcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXHJcblx0XCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXHJcblx0XCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXHJcblx0XCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcclxuXHRcInllbGxvd1wiOiBbMjU1LCAyNTUsIDBdLFxyXG5cdFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cclxufTtcclxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb2xvci1uYW1lICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzXCIpO1xudmFyIHN3aXp6bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBzaW1wbGUtc3dpenpsZSAqLyBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zd2l6emxlL2luZGV4LmpzXCIpO1xuXG52YXIgcmV2ZXJzZU5hbWVzID0ge307XG5cbi8vIGNyZWF0ZSBhIGxpc3Qgb2YgcmV2ZXJzZSBjb2xvciBuYW1lc1xuZm9yICh2YXIgbmFtZSBpbiBjb2xvck5hbWVzKSB7XG5cdGlmIChjb2xvck5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0cmV2ZXJzZU5hbWVzW2NvbG9yTmFtZXNbbmFtZV1dID0gbmFtZTtcblx0fVxufVxuXG52YXIgY3MgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0dG86IHt9LFxuXHRnZXQ6IHt9XG59O1xuXG5jcy5nZXQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdHZhciBwcmVmaXggPSBzdHJpbmcuc3Vic3RyaW5nKDAsIDMpLnRvTG93ZXJDYXNlKCk7XG5cdHZhciB2YWw7XG5cdHZhciBtb2RlbDtcblx0c3dpdGNoIChwcmVmaXgpIHtcblx0XHRjYXNlICdoc2wnOlxuXHRcdFx0dmFsID0gY3MuZ2V0LmhzbChzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAnaHNsJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2h3Yic6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHdiKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdod2InO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhbCA9IGNzLmdldC5yZ2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ3JnYic7XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdGlmICghdmFsKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4ge21vZGVsOiBtb2RlbCwgdmFsdWU6IHZhbH07XG59O1xuXG5jcy5nZXQucmdiID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGFiYnIgPSAvXiMoW2EtZjAtOV17Myw0fSkkL2k7XG5cdHZhciBoZXggPSAvXiMoW2EtZjAtOV17Nn0pKFthLWYwLTldezJ9KT8kL2k7XG5cdHZhciByZ2JhID0gL15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBwZXIgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIGtleXdvcmQgPSAvKFxcRCspLztcblxuXHR2YXIgcmdiID0gWzAsIDAsIDAsIDFdO1xuXHR2YXIgbWF0Y2g7XG5cdHZhciBpO1xuXHR2YXIgaGV4QWxwaGE7XG5cblx0aWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGhleCkpIHtcblx0XHRoZXhBbHBoYSA9IG1hdGNoWzJdO1xuXHRcdG1hdGNoID0gbWF0Y2hbMV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHQvLyBodHRwczovL2pzcGVyZi5jb20vc2xpY2UtdnMtc3Vic3RyLXZzLXN1YnN0cmluZy1tZXRob2RzLWxvbmctc3RyaW5nLzE5XG5cdFx0XHR2YXIgaTIgPSBpICogMjtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkyLCBpMiArIDIpLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSwgMTYpIC8gMjU1KSAqIDEwMCkgLyAxMDA7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGFiYnIpKSB7XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblx0XHRoZXhBbHBoYSA9IG1hdGNoWzNdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaV0gKyBtYXRjaFtpXSwgMTYpO1xuXHRcdH1cblxuXHRcdGlmIChoZXhBbHBoYSkge1xuXHRcdFx0cmdiWzNdID0gTWF0aC5yb3VuZCgocGFyc2VJbnQoaGV4QWxwaGEgKyBoZXhBbHBoYSwgMTYpIC8gMjU1KSAqIDEwMCkgLyAxMDA7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHJnYmEpKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaSArIDFdLCAwKTtcblx0XHR9XG5cblx0XHRpZiAobWF0Y2hbNF0pIHtcblx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcblx0XHR9XG5cblx0XHRpZiAobWF0Y2hbNF0pIHtcblx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChrZXl3b3JkKSkge1xuXHRcdGlmIChtYXRjaFsxXSA9PT0gJ3RyYW5zcGFyZW50Jykge1xuXHRcdFx0cmV0dXJuIFswLCAwLCAwLCAwXTtcblx0XHR9XG5cblx0XHRyZ2IgPSBjb2xvck5hbWVzW21hdGNoWzFdXTtcblxuXHRcdGlmICghcmdiKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZ2JbM10gPSAxO1xuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRyZ2JbaV0gPSBjbGFtcChyZ2JbaV0sIDAsIDI1NSk7XG5cdH1cblx0cmdiWzNdID0gY2xhbXAocmdiWzNdLCAwLCAxKTtcblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY3MuZ2V0LmhzbCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dPyg/OlxcZCpcXC4pP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcblxuXHRpZiAobWF0Y2gpIHtcblx0XHR2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR2YXIgaCA9IChwYXJzZUZsb2F0KG1hdGNoWzFdKSArIDM2MCkgJSAzNjA7XG5cdFx0dmFyIHMgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKTtcblx0XHR2YXIgbCA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApO1xuXHRcdHZhciBhID0gY2xhbXAoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcblxuXHRcdHJldHVybiBbaCwgcywgbCwgYV07XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNzLmdldC5od2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgaHdiID0gL15od2JcXChcXHMqKFsrLV0/XFxkKltcXC5dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHdiKTtcblxuXHRpZiAobWF0Y2gpIHtcblx0XHR2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR2YXIgaCA9ICgocGFyc2VGbG9hdChtYXRjaFsxXSkgJSAzNjApICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgdyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBiID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXHRcdHJldHVybiBbaCwgdywgYiwgYV07XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNzLnRvLmhleCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0cmV0dXJuIChcblx0XHQnIycgK1xuXHRcdGhleERvdWJsZShyZ2JhWzBdKSArXG5cdFx0aGV4RG91YmxlKHJnYmFbMV0pICtcblx0XHRoZXhEb3VibGUocmdiYVsyXSkgK1xuXHRcdChyZ2JhWzNdIDwgMVxuXHRcdFx0PyAoaGV4RG91YmxlKE1hdGgucm91bmQocmdiYVszXSAqIDI1NSkpKVxuXHRcdFx0OiAnJylcblx0KTtcbn07XG5cbmNzLnRvLnJnYiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0cmV0dXJuIHJnYmEubGVuZ3RoIDwgNCB8fCByZ2JhWzNdID09PSAxXG5cdFx0PyAncmdiKCcgKyBNYXRoLnJvdW5kKHJnYmFbMF0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsxXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzJdKSArICcpJ1xuXHRcdDogJ3JnYmEoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJywgJyArIHJnYmFbM10gKyAnKSc7XG59O1xuXG5jcy50by5yZ2IucGVyY2VudCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0gLyAyNTUgKiAxMDApO1xuXHR2YXIgZyA9IE1hdGgucm91bmQocmdiYVsxXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBiID0gTWF0aC5yb3VuZChyZ2JhWzJdIC8gMjU1ICogMTAwKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIHIgKyAnJSwgJyArIGcgKyAnJSwgJyArIGIgKyAnJSknXG5cdFx0OiAncmdiYSgnICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLmhzbCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGhzbGEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cdHJldHVybiBoc2xhLmxlbmd0aCA8IDQgfHwgaHNsYVszXSA9PT0gMVxuXHRcdD8gJ2hzbCgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUpJ1xuXHRcdDogJ2hzbGEoJyArIGhzbGFbMF0gKyAnLCAnICsgaHNsYVsxXSArICclLCAnICsgaHNsYVsyXSArICclLCAnICsgaHNsYVszXSArICcpJztcbn07XG5cbi8vIGh3YiBpcyBhIGJpdCBkaWZmZXJlbnQgdGhhbiByZ2IoYSkgJiBoc2woYSkgc2luY2UgdGhlcmUgaXMgbm8gYWxwaGEgc3BlY2lmaWMgc3ludGF4XG4vLyAoaHdiIGhhdmUgYWxwaGEgb3B0aW9uYWwgJiAxIGlzIGRlZmF1bHQgdmFsdWUpXG5jcy50by5od2IgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBod2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHZhciBhID0gJyc7XG5cdGlmIChod2JhLmxlbmd0aCA+PSA0ICYmIGh3YmFbM10gIT09IDEpIHtcblx0XHRhID0gJywgJyArIGh3YmFbM107XG5cdH1cblxuXHRyZXR1cm4gJ2h3YignICsgaHdiYVswXSArICcsICcgKyBod2JhWzFdICsgJyUsICcgKyBod2JhWzJdICsgJyUnICsgYSArICcpJztcbn07XG5cbmNzLnRvLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiByZXZlcnNlTmFtZXNbcmdiLnNsaWNlKDAsIDMpXTtcbn07XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIGNsYW1wKG51bSwgbWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaGV4RG91YmxlKG51bSkge1xuXHR2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gKHN0ci5sZW5ndGggPCAyKSA/ICcwJyArIHN0ciA6IHN0cjtcbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcclxuXHRcImFudGlxdWV3aGl0ZVwiOiBbMjUwLCAyMzUsIDIxNV0sXHJcblx0XCJhcXVhXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcclxuXHRcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcclxuXHRcImJlaWdlXCI6IFsyNDUsIDI0NSwgMjIwXSxcclxuXHRcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXHJcblx0XCJibGFja1wiOiBbMCwgMCwgMF0sXHJcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LCAyMzUsIDIwNV0sXHJcblx0XCJibHVlXCI6IFswLCAwLCAyNTVdLFxyXG5cdFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcclxuXHRcImJyb3duXCI6IFsxNjUsIDQyLCA0Ml0sXHJcblx0XCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxyXG5cdFwiY2FkZXRibHVlXCI6IFs5NSwgMTU4LCAxNjBdLFxyXG5cdFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxyXG5cdFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxyXG5cdFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXHJcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLCAxNDksIDIzN10sXHJcblx0XCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXHJcblx0XCJjcmltc29uXCI6IFsyMjAsIDIwLCA2MF0sXHJcblx0XCJjeWFuXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcclxuXHRcImRhcmtjeWFuXCI6IFswLCAxMzksIDEzOV0sXHJcblx0XCJkYXJrZ29sZGVucm9kXCI6IFsxODQsIDEzNCwgMTFdLFxyXG5cdFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxyXG5cdFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcclxuXHRcImRhcmttYWdlbnRhXCI6IFsxMzksIDAsIDEzOV0sXHJcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbODUsIDEwNywgNDddLFxyXG5cdFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxyXG5cdFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcclxuXHRcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXHJcblx0XCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcclxuXHRcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXHJcblx0XCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXHJcblx0XCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmtzbGF0ZWdyZXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbMCwgMjA2LCAyMDldLFxyXG5cdFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxyXG5cdFwiZGVlcHBpbmtcIjogWzI1NSwgMjAsIDE0N10sXHJcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbMCwgMTkxLCAyNTVdLFxyXG5cdFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRvZGdlcmJsdWVcIjogWzMwLCAxNDQsIDI1NV0sXHJcblx0XCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcclxuXHRcImZsb3JhbHdoaXRlXCI6IFsyNTUsIDI1MCwgMjQwXSxcclxuXHRcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXHJcblx0XCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJnYWluc2Jvcm9cIjogWzIyMCwgMjIwLCAyMjBdLFxyXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LCAyNDgsIDI1NV0sXHJcblx0XCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXHJcblx0XCJnb2xkZW5yb2RcIjogWzIxOCwgMTY1LCAzMl0sXHJcblx0XCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxyXG5cdFwiZ3JlZW55ZWxsb3dcIjogWzE3MywgMjU1LCA0N10sXHJcblx0XCJncmV5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcclxuXHRcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxyXG5cdFwiaW5kaWFucmVkXCI6IFsyMDUsIDkyLCA5Ml0sXHJcblx0XCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxyXG5cdFwiaXZvcnlcIjogWzI1NSwgMjU1LCAyNDBdLFxyXG5cdFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxyXG5cdFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxyXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXHJcblx0XCJsYXduZ3JlZW5cIjogWzEyNCwgMjUyLCAwXSxcclxuXHRcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXHJcblx0XCJsaWdodGJsdWVcIjogWzE3MywgMjE2LCAyMzBdLFxyXG5cdFwibGlnaHRjb3JhbFwiOiBbMjQwLCAxMjgsIDEyOF0sXHJcblx0XCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxyXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxyXG5cdFwibGlnaHRncmF5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxyXG5cdFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXHJcblx0XCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXHJcblx0XCJsaWdodHNlYWdyZWVuXCI6IFszMiwgMTc4LCAxNzBdLFxyXG5cdFwibGlnaHRza3libHVlXCI6IFsxMzUsIDIwNiwgMjUwXSxcclxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsIDE5NiwgMjIyXSxcclxuXHRcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcclxuXHRcImxpbWVcIjogWzAsIDI1NSwgMF0sXHJcblx0XCJsaW1lZ3JlZW5cIjogWzUwLCAyMDUsIDUwXSxcclxuXHRcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcclxuXHRcIm1hZ2VudGFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcIm1hcm9vblwiOiBbMTI4LCAwLCAwXSxcclxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxyXG5cdFwibWVkaXVtYmx1ZVwiOiBbMCwgMCwgMjA1XSxcclxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcclxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXHJcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbNjAsIDE3OSwgMTEzXSxcclxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLCAxMDQsIDIzOF0sXHJcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxyXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFs3MiwgMjA5LCAyMDRdLFxyXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksIDIxLCAxMzNdLFxyXG5cdFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXHJcblx0XCJtaW50Y3JlYW1cIjogWzI0NSwgMjU1LCAyNTBdLFxyXG5cdFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcclxuXHRcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcclxuXHRcIm5hdmFqb3doaXRlXCI6IFsyNTUsIDIyMiwgMTczXSxcclxuXHRcIm5hdnlcIjogWzAsIDAsIDEyOF0sXHJcblx0XCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcclxuXHRcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXHJcblx0XCJvbGl2ZWRyYWJcIjogWzEwNywgMTQyLCAzNV0sXHJcblx0XCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcclxuXHRcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXHJcblx0XCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxyXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXHJcblx0XCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxyXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXHJcblx0XCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcclxuXHRcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxyXG5cdFwicGVhY2hwdWZmXCI6IFsyNTUsIDIxOCwgMTg1XSxcclxuXHRcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXHJcblx0XCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcclxuXHRcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxyXG5cdFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXHJcblx0XCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcclxuXHRcInJlYmVjY2FwdXJwbGVcIjogWzEwMiwgNTEsIDE1M10sXHJcblx0XCJyZWRcIjogWzI1NSwgMCwgMF0sXHJcblx0XCJyb3N5YnJvd25cIjogWzE4OCwgMTQzLCAxNDNdLFxyXG5cdFwicm95YWxibHVlXCI6IFs2NSwgMTA1LCAyMjVdLFxyXG5cdFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcclxuXHRcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXHJcblx0XCJzYW5keWJyb3duXCI6IFsyNDQsIDE2NCwgOTZdLFxyXG5cdFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcclxuXHRcInNlYXNoZWxsXCI6IFsyNTUsIDI0NSwgMjM4XSxcclxuXHRcInNpZW5uYVwiOiBbMTYwLCA4MiwgNDVdLFxyXG5cdFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcclxuXHRcInNreWJsdWVcIjogWzEzNSwgMjA2LCAyMzVdLFxyXG5cdFwic2xhdGVibHVlXCI6IFsxMDYsIDkwLCAyMDVdLFxyXG5cdFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNsYXRlZ3JleVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbm93XCI6IFsyNTUsIDI1MCwgMjUwXSxcclxuXHRcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXHJcblx0XCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXHJcblx0XCJ0YW5cIjogWzIxMCwgMTgwLCAxNDBdLFxyXG5cdFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxyXG5cdFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXHJcblx0XCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcclxuXHRcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcclxuXHRcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXHJcblx0XCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXHJcblx0XCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXHJcblx0XCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcclxuXHRcInllbGxvd1wiOiBbMjU1LCAyNTUsIDBdLFxyXG5cdFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cclxufTtcclxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBjb2xvclN0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yLXN0cmluZyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qc1wiKTtcbnZhciBjb252ZXJ0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29sb3ItY29udmVydCAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanNcIik7XG5cbnZhciBfc2xpY2UgPSBbXS5zbGljZTtcblxudmFyIHNraXBwZWRNb2RlbHMgPSBbXG5cdC8vIHRvIGJlIGhvbmVzdCwgSSBkb24ndCByZWFsbHkgZmVlbCBsaWtlIGtleXdvcmQgYmVsb25ncyBpbiBjb2xvciBjb252ZXJ0LCBidXQgZWguXG5cdCdrZXl3b3JkJyxcblxuXHQvLyBncmF5IGNvbmZsaWN0cyB3aXRoIHNvbWUgbWV0aG9kIG5hbWVzLCBhbmQgaGFzIGl0cyBvd24gbWV0aG9kIGRlZmluZWQuXG5cdCdncmF5JyxcblxuXHQvLyBzaG91bGRuJ3QgcmVhbGx5IGJlIGluIGNvbG9yLWNvbnZlcnQgZWl0aGVyLi4uXG5cdCdoZXgnXG5dO1xuXG52YXIgaGFzaGVkTW9kZWxLZXlzID0ge307XG5PYmplY3Qua2V5cyhjb252ZXJ0KS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuXHRoYXNoZWRNb2RlbEtleXNbX3NsaWNlLmNhbGwoY29udmVydFttb2RlbF0ubGFiZWxzKS5zb3J0KCkuam9pbignJyldID0gbW9kZWw7XG59KTtcblxudmFyIGxpbWl0ZXJzID0ge307XG5cbmZ1bmN0aW9uIENvbG9yKG9iaiwgbW9kZWwpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbG9yKSkge1xuXHRcdHJldHVybiBuZXcgQ29sb3Iob2JqLCBtb2RlbCk7XG5cdH1cblxuXHRpZiAobW9kZWwgJiYgbW9kZWwgaW4gc2tpcHBlZE1vZGVscykge1xuXHRcdG1vZGVsID0gbnVsbDtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiAhKG1vZGVsIGluIGNvbnZlcnQpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG1vZGVsOiAnICsgbW9kZWwpO1xuXHR9XG5cblx0dmFyIGk7XG5cdHZhciBjaGFubmVscztcblxuXHRpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFswLCAwLCAwXTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHR0aGlzLm1vZGVsID0gb2JqLm1vZGVsO1xuXHRcdHRoaXMuY29sb3IgPSBvYmouY29sb3Iuc2xpY2UoKTtcblx0XHR0aGlzLnZhbHBoYSA9IG9iai52YWxwaGE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHR2YXIgcmVzdWx0ID0gY29sb3JTdHJpbmcuZ2V0KG9iaik7XG5cdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBzdHJpbmc6ICcgKyBvYmopO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kZWwgPSByZXN1bHQubW9kZWw7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHRoaXMuY29sb3IgPSByZXN1bHQudmFsdWUuc2xpY2UoMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIHJlc3VsdC52YWx1ZVtjaGFubmVsc10gPT09ICdudW1iZXInID8gcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAob2JqLmxlbmd0aCkge1xuXHRcdHRoaXMubW9kZWwgPSBtb2RlbCB8fCAncmdiJztcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIG5ld0FyciA9IF9zbGljZS5jYWxsKG9iaiwgMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMuY29sb3IgPSB6ZXJvQXJyYXkobmV3QXJyLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBvYmpbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuXHRcdC8vIHRoaXMgaXMgYWx3YXlzIFJHQiAtIGNhbiBiZSBjb252ZXJ0ZWQgbGF0ZXIgb24uXG5cdFx0b2JqICY9IDB4RkZGRkZGO1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gW1xuXHRcdFx0KG9iaiA+PiAxNikgJiAweEZGLFxuXHRcdFx0KG9iaiA+PiA4KSAmIDB4RkYsXG5cdFx0XHRvYmogJiAweEZGXG5cdFx0XTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXHRcdGlmICgnYWxwaGEnIGluIG9iaikge1xuXHRcdFx0a2V5cy5zcGxpY2Uoa2V5cy5pbmRleE9mKCdhbHBoYScpLCAxKTtcblx0XHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9iai5hbHBoYSA9PT0gJ251bWJlcicgPyBvYmouYWxwaGEgOiAwO1xuXHRcdH1cblxuXHRcdHZhciBoYXNoZWRLZXlzID0ga2V5cy5zb3J0KCkuam9pbignJyk7XG5cdFx0aWYgKCEoaGFzaGVkS2V5cyBpbiBoYXNoZWRNb2RlbEtleXMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kZWwgPSBoYXNoZWRNb2RlbEtleXNbaGFzaGVkS2V5c107XG5cblx0XHR2YXIgbGFiZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5sYWJlbHM7XG5cdFx0dmFyIGNvbG9yID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29sb3IucHVzaChvYmpbbGFiZWxzW2ldXSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShjb2xvcik7XG5cdH1cblxuXHQvLyBwZXJmb3JtIGxpbWl0YXRpb25zIChjbGFtcGluZywgZXRjLilcblx0aWYgKGxpbWl0ZXJzW3RoaXMubW9kZWxdKSB7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHR2YXIgbGltaXQgPSBsaW1pdGVyc1t0aGlzLm1vZGVsXVtpXTtcblx0XHRcdGlmIChsaW1pdCkge1xuXHRcdFx0XHR0aGlzLmNvbG9yW2ldID0gbGltaXQodGhpcy5jb2xvcltpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhpcy52YWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0aGlzLnZhbHBoYSkpO1xuXG5cdGlmIChPYmplY3QuZnJlZXplKSB7XG5cdFx0T2JqZWN0LmZyZWV6ZSh0aGlzKTtcblx0fVxufVxuXG5Db2xvci5wcm90b3R5cGUgPSB7XG5cdHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyaW5nKCk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXNbdGhpcy5tb2RlbF0oKTtcblx0fSxcblxuXHRzdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMubW9kZWwgaW4gY29sb3JTdHJpbmcudG8gPyB0aGlzIDogdGhpcy5yZ2IoKTtcblx0XHRzZWxmID0gc2VsZi5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdHZhciBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogc2VsZi5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50b1tzZWxmLm1vZGVsXShhcmdzKTtcblx0fSxcblxuXHRwZXJjZW50U3RyaW5nOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLnJnYigpLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLnJnYi5wZXJjZW50KGFyZ3MpO1xuXHR9LFxuXG5cdGFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFscGhhID09PSAxID8gdGhpcy5jb2xvci5zbGljZSgpIDogdGhpcy5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHR9LFxuXG5cdG9iamVjdDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0cmVzdWx0W2xhYmVsc1tpXV0gPSB0aGlzLmNvbG9yW2ldO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmVzdWx0LmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblxuXHR1bml0QXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZ2JbMF0gLz0gMjU1O1xuXHRcdHJnYlsxXSAvPSAyNTU7XG5cdFx0cmdiWzJdIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLnB1c2godGhpcy52YWxwaGEpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0dW5pdE9iamVjdDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLm9iamVjdCgpO1xuXHRcdHJnYi5yIC89IDI1NTtcblx0XHRyZ2IuZyAvPSAyNTU7XG5cdFx0cmdiLmIgLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHJvdW5kOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0cGxhY2VzID0gTWF0aC5tYXgocGxhY2VzIHx8IDAsIDApO1xuXHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5jb2xvci5tYXAocm91bmRUb1BsYWNlKHBsYWNlcykpLmNvbmNhdCh0aGlzLnZhbHBoYSksIHRoaXMubW9kZWwpO1xuXHR9LFxuXG5cdGFscGhhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5jb2xvci5jb25jYXQoTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsKSkpLCB0aGlzLm1vZGVsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52YWxwaGE7XG5cdH0sXG5cblx0Ly8gcmdiXG5cdHJlZDogZ2V0c2V0KCdyZ2InLCAwLCBtYXhmbigyNTUpKSxcblx0Z3JlZW46IGdldHNldCgncmdiJywgMSwgbWF4Zm4oMjU1KSksXG5cdGJsdWU6IGdldHNldCgncmdiJywgMiwgbWF4Zm4oMjU1KSksXG5cblx0aHVlOiBnZXRzZXQoWydoc2wnLCAnaHN2JywgJ2hzbCcsICdod2InLCAnaGNnJ10sIDAsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuICgodmFsICUgMzYwKSArIDM2MCkgJSAzNjA7IH0pLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJyYWNlLXN0eWxlXG5cblx0c2F0dXJhdGlvbmw6IGdldHNldCgnaHNsJywgMSwgbWF4Zm4oMTAwKSksXG5cdGxpZ2h0bmVzczogZ2V0c2V0KCdoc2wnLCAyLCBtYXhmbigxMDApKSxcblxuXHRzYXR1cmF0aW9udjogZ2V0c2V0KCdoc3YnLCAxLCBtYXhmbigxMDApKSxcblx0dmFsdWU6IGdldHNldCgnaHN2JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y2hyb21hOiBnZXRzZXQoJ2hjZycsIDEsIG1heGZuKDEwMCkpLFxuXHRncmF5OiBnZXRzZXQoJ2hjZycsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHdoaXRlOiBnZXRzZXQoJ2h3YicsIDEsIG1heGZuKDEwMCkpLFxuXHR3YmxhY2s6IGdldHNldCgnaHdiJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y3lhbjogZ2V0c2V0KCdjbXlrJywgMCwgbWF4Zm4oMTAwKSksXG5cdG1hZ2VudGE6IGdldHNldCgnY215aycsIDEsIG1heGZuKDEwMCkpLFxuXHR5ZWxsb3c6IGdldHNldCgnY215aycsIDIsIG1heGZuKDEwMCkpLFxuXHRibGFjazogZ2V0c2V0KCdjbXlrJywgMywgbWF4Zm4oMTAwKSksXG5cblx0eDogZ2V0c2V0KCd4eXonLCAwLCBtYXhmbigxMDApKSxcblx0eTogZ2V0c2V0KCd4eXonLCAxLCBtYXhmbigxMDApKSxcblx0ejogZ2V0c2V0KCd4eXonLCAyLCBtYXhmbigxMDApKSxcblxuXHRsOiBnZXRzZXQoJ2xhYicsIDAsIG1heGZuKDEwMCkpLFxuXHRhOiBnZXRzZXQoJ2xhYicsIDEpLFxuXHRiOiBnZXRzZXQoJ2xhYicsIDIpLFxuXG5cdGtleXdvcmQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb252ZXJ0W3RoaXMubW9kZWxdLmtleXdvcmQodGhpcy5jb2xvcik7XG5cdH0sXG5cblx0aGV4OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8uaGV4KHRoaXMucmdiKCkucm91bmQoKS5jb2xvcik7XG5cdH0sXG5cblx0cmdiTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmV0dXJuICgocmdiWzBdICYgMHhGRikgPDwgMTYpIHwgKChyZ2JbMV0gJiAweEZGKSA8PCA4KSB8IChyZ2JbMl0gJiAweEZGKTtcblx0fSxcblxuXHRsdW1pbm9zaXR5OiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXG5cdFx0dmFyIGx1bSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hhbiA9IHJnYltpXSAvIDI1NTtcblx0XHRcdGx1bVtpXSA9IChjaGFuIDw9IDAuMDM5MjgpID8gY2hhbiAvIDEyLjkyIDogTWF0aC5wb3coKChjaGFuICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cblx0XHRpZiAobHVtMSA+IGx1bTIpIHtcblx0XHRcdHJldHVybiAobHVtMSArIDAuMDUpIC8gKGx1bTIgKyAwLjA1KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKGx1bTIgKyAwLjA1KSAvIChsdW0xICsgMC4wNSk7XG5cdH0sXG5cblx0bGV2ZWw6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHR2YXIgY29udHJhc3RSYXRpbyA9IHRoaXMuY29udHJhc3QoY29sb3IyKTtcblx0XHRpZiAoY29udHJhc3RSYXRpbyA+PSA3LjEpIHtcblx0XHRcdHJldHVybiAnQUFBJztcblx0XHR9XG5cblx0XHRyZXR1cm4gKGNvbnRyYXN0UmF0aW8gPj0gNC41KSA/ICdBQScgOiAnJztcblx0fSxcblxuXHRpc0Rhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0dmFyIHlpcSA9IChyZ2JbMF0gKiAyOTkgKyByZ2JbMV0gKiA1ODcgKyByZ2JbMl0gKiAxMTQpIC8gMTAwMDtcblx0XHRyZXR1cm4geWlxIDwgMTI4O1xuXHR9LFxuXG5cdGlzTGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuaXNEYXJrKCk7XG5cdH0sXG5cblx0bmVnYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYi5jb2xvcltpXSA9IDI1NSAtIHJnYi5jb2xvcltpXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gKz0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRkYXJrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSAtPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMV0gKz0gaHNsLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMV0gLT0gaHNsLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHR3aGl0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBod2IgPSB0aGlzLmh3YigpO1xuXHRcdGh3Yi5jb2xvclsxXSArPSBod2IuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHdiO1xuXHR9LFxuXG5cdGJsYWNrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBod2IgPSB0aGlzLmh3YigpO1xuXHRcdGh3Yi5jb2xvclsyXSArPSBod2IuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHdiO1xuXHR9LFxuXG5cdGdyYXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JheXNjYWxlI0NvbnZlcnRpbmdfY29sb3JfdG9fZ3JheXNjYWxlXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0dmFyIHZhbCA9IHJnYlswXSAqIDAuMyArIHJnYlsxXSAqIDAuNTkgKyByZ2JbMl0gKiAwLjExO1xuXHRcdHJldHVybiBDb2xvci5yZ2IodmFsLCB2YWwsIHZhbCk7XG5cdH0sXG5cblx0ZmFkZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgLSAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhICsgKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0dmFyIGh1ZSA9IGhzbC5jb2xvclswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHRoc2wuY29sb3JbMF0gPSBodWU7XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRtaXg6IGZ1bmN0aW9uIChtaXhpbkNvbG9yLCB3ZWlnaHQpIHtcblx0XHQvLyBwb3J0ZWQgZnJvbSBzYXNzIGltcGxlbWVudGF0aW9uIGluIENcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0XHR2YXIgY29sb3IxID0gbWl4aW5Db2xvci5yZ2IoKTtcblx0XHR2YXIgY29sb3IyID0gdGhpcy5yZ2IoKTtcblx0XHR2YXIgcCA9IHdlaWdodCA9PT0gdW5kZWZpbmVkID8gMC41IDogd2VpZ2h0O1xuXG5cdFx0dmFyIHcgPSAyICogcCAtIDE7XG5cdFx0dmFyIGEgPSBjb2xvcjEuYWxwaGEoKSAtIGNvbG9yMi5hbHBoYSgpO1xuXG5cdFx0dmFyIHcxID0gKCgodyAqIGEgPT09IC0xKSA/IHcgOiAodyArIGEpIC8gKDEgKyB3ICogYSkpICsgMSkgLyAyLjA7XG5cdFx0dmFyIHcyID0gMSAtIHcxO1xuXG5cdFx0cmV0dXJuIENvbG9yLnJnYihcblx0XHRcdFx0dzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKSxcblx0XHRcdFx0Y29sb3IxLmFscGhhKCkgKiBwICsgY29sb3IyLmFscGhhKCkgKiAoMSAtIHApKTtcblx0fVxufTtcblxuLy8gbW9kZWwgY29udmVyc2lvbiBtZXRob2RzIGFuZCBzdGF0aWMgY29uc3RydWN0b3JzXG5PYmplY3Qua2V5cyhjb252ZXJ0KS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuXHRpZiAoc2tpcHBlZE1vZGVscy5pbmRleE9mKG1vZGVsKSAhPT0gLTEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblxuXHQvLyBjb252ZXJzaW9uIG1ldGhvZHNcblx0Q29sb3IucHJvdG90eXBlW21vZGVsXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy5tb2RlbCA9PT0gbW9kZWwpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoYXJndW1lbnRzLCBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0FscGhhID0gdHlwZW9mIGFyZ3VtZW50c1tjaGFubmVsc10gPT09ICdudW1iZXInID8gY2hhbm5lbHMgOiB0aGlzLnZhbHBoYTtcblx0XHRyZXR1cm4gbmV3IENvbG9yKGFzc2VydEFycmF5KGNvbnZlcnRbdGhpcy5tb2RlbF1bbW9kZWxdLnJhdyh0aGlzLmNvbG9yKSkuY29uY2F0KG5ld0FscGhhKSwgbW9kZWwpO1xuXHR9O1xuXG5cdC8vICdzdGF0aWMnIGNvbnN0cnVjdGlvbiBtZXRob2RzXG5cdENvbG9yW21vZGVsXSA9IGZ1bmN0aW9uIChjb2xvcikge1xuXHRcdGlmICh0eXBlb2YgY29sb3IgPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb2xvciA9IHplcm9BcnJheShfc2xpY2UuY2FsbChhcmd1bWVudHMpLCBjaGFubmVscyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQ29sb3IoY29sb3IsIG1vZGVsKTtcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiByb3VuZFRvKG51bSwgcGxhY2VzKSB7XG5cdHJldHVybiBOdW1iZXIobnVtLnRvRml4ZWQocGxhY2VzKSk7XG59XG5cbmZ1bmN0aW9uIHJvdW5kVG9QbGFjZShwbGFjZXMpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChudW0pIHtcblx0XHRyZXR1cm4gcm91bmRUbyhudW0sIHBsYWNlcyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGdldHNldChtb2RlbCwgY2hhbm5lbCwgbW9kaWZpZXIpIHtcblx0bW9kZWwgPSBBcnJheS5pc0FycmF5KG1vZGVsKSA/IG1vZGVsIDogW21vZGVsXTtcblxuXHRtb2RlbC5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG5cdFx0KGxpbWl0ZXJzW21dIHx8IChsaW1pdGVyc1ttXSA9IFtdKSlbY2hhbm5lbF0gPSBtb2RpZmllcjtcblx0fSk7XG5cblx0bW9kZWwgPSBtb2RlbFswXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuXHRcdHZhciByZXN1bHQ7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0aWYgKG1vZGlmaWVyKSB7XG5cdFx0XHRcdHZhbCA9IG1vZGlmaWVyKHZhbCk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdCA9IHRoaXNbbW9kZWxdKCk7XG5cdFx0XHRyZXN1bHQuY29sb3JbY2hhbm5lbF0gPSB2YWw7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdHJlc3VsdCA9IHRoaXNbbW9kZWxdKCkuY29sb3JbY2hhbm5lbF07XG5cdFx0aWYgKG1vZGlmaWVyKSB7XG5cdFx0XHRyZXN1bHQgPSBtb2RpZmllcihyZXN1bHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59XG5cbmZ1bmN0aW9uIG1heGZuKG1heCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKHYpIHtcblx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4LCB2KSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFzc2VydEFycmF5KHZhbCkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF07XG59XG5cbmZ1bmN0aW9uIHplcm9BcnJheShhcnIsIGxlbmd0aCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHR5cGVvZiBhcnJbaV0gIT09ICdudW1iZXInKSB7XG5cdFx0XHRhcnJbaV0gPSAwO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0FycmF5aXNoKG9iaikge1xuXHRpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KG9iaikgfHxcblx0XHQob2JqLmxlbmd0aCA+PSAwICYmIChvYmouc3BsaWNlIGluc3RhbmNlb2YgRnVuY3Rpb24gfHxcblx0XHRcdChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgKG9iai5sZW5ndGggLSAxKSkgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgIT09ICdTdHJpbmcnKSkpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgaXNBcnJheWlzaCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGlzLWFycmF5aXNoICovIFwiLi9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanNcIik7XG5cbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgc3dpenpsZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3dpenpsZShhcmdzKSB7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgYXJnID0gYXJnc1tpXTtcblxuXHRcdGlmIChpc0FycmF5aXNoKGFyZykpIHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tL2phdmFzY3JpcHQtYXJyYXktY29uY2F0LXZzLXB1c2gvOThcblx0XHRcdHJlc3VsdHMgPSBjb25jYXQuY2FsbChyZXN1bHRzLCBzbGljZS5jYWxsKGFyZykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goYXJnKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbnN3aXp6bGUud3JhcCA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmbihzd2l6emxlKGFyZ3VtZW50cykpO1xuXHR9O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gRHluYW1pY0hlYXRMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21hcmtlcl9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL21hcmtlci9NYXJrZXJzTGF5ZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzXCIpO1xuXG5jbGFzcyBEeW5hbWljSGVhdExheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGR5bmFtaWNEYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGR5bmFtaWNEYXRhTGlzdCkgfHwgZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhTGlzdCDlv4XpobvmmK/pnZ7nqbrmlbDnu4RgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5keW5hbWljRGF0YUxpc3QgPSBkeW5hbWljRGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuYztcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgfVxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmF1dG8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGF1c2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiog5pKt5pS+5a6M5q+VICovXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA+PSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcbiAgICB9XG4gICAgcHJldigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcC0tO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID1cbiAgICAgICAgICAgICh0aGlzLmN1cnJlbnRTdGVwICsgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoKSAlXG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKys7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSB0aGlzLmN1cnJlbnRTdGVwICUgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIH1cbiAgICBnb3RvU3RlcChzdGVwKSB7XG4gICAgICAgIGlmIChzdGVwIDwgMCB8fCBzdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBnb3RvU3RlcCgke3N0ZXB9KTogc3RlcCBpcyBvdXQgb2YgaW5kZXggYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllci5zZXREYXRhKHRoaXMuZHluYW1pY0RhdGFMaXN0W3N0ZXBdKTtcbiAgICAgICAgdGhpcy5sYXllci5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRMYXllcigpO1xuICAgICAgICB0aGlzLmxheWVyLmRyYXcoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5sYXllci5maXRCb3VuZHMoKTtcbiAgICB9XG4gICAgaW5pdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgYXV0bzogZmFsc2UsXG4gICAgICAgICAgICBpbnRlcnZhbDogMTAwMCxcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaW5pdExheWVyKCkge1xuICAgICAgICBjb25zdCBtYXJrZXJzTGF5ZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgcmVuZGVyVHlwZTogJ2hlYXQnLFxuICAgICAgICAgICAgaGVhdE9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sYXllciA9IG5ldyBfbWFya2VyX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSh0aGlzLm1hcCwgdGhpcy5keW5hbWljRGF0YUxpc3RbMF0sIG1hcmtlcnNMYXllck9wdGlvbnMsIHRoaXMuY2hhbm5lbEZ1bmMpO1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcjtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvaW5kZXgudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCwgTWFya2VyLCBNYXJrZXJzTGF5ZXIsIE1hcmtlcnNCdWZmZXJMYXllciwgUG9seWxpbmUsIFBvbHlsaW5lc0xheWVyLCBQb2x5bGluZXNCdWZmZXJMYXllciwgUG9seWdvbiwgUG9seWdvbnNMYXllciwgR3JpZHNMYXllciwgRHluYW1pY0hlYXRMYXllciAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWFya2VyX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tYXJrZXIvTWFya2VyICovIFwiLi9zcmMvbWFya2VyL01hcmtlci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk1hcmtlclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9tYXJrZXJfTWFya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21hcmtlci9NYXJrZXJzTGF5ZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTWFya2Vyc0xheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX21hcmtlcl9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21hcmtlcl9NYXJrZXJzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWFya2VyL01hcmtlcnNCdWZmZXJMYXllciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNYXJrZXJzQnVmZmVyTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbWFya2VyX01hcmtlcnNCdWZmZXJMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWxpbmVfUG9seWxpbmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWxpbmUvUG9seWxpbmUgKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZS50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlsaW5lXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlsaW5lX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5bGluZV9Qb2x5bGluZXNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5bGluZS9Qb2x5bGluZXNMYXllciAqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUG9seWxpbmVzTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWxpbmVfUG9seWxpbmVzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlsaW5lX1BvbHlsaW5lc0J1ZmZlckxheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlsaW5lL1BvbHlsaW5lc0J1ZmZlckxheWVyICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmVzQnVmZmVyTGF5ZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5bGluZXNCdWZmZXJMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5bGluZV9Qb2x5bGluZXNCdWZmZXJMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWdvbl9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlnb24vUG9seWdvbiAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbi50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlnb25cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWdvbl9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5Z29uX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWdvbi9Qb2x5Z29uc0xheWVyICovIFwiLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUG9seWdvbnNMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5Z29uX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlnb25fR3JpZHNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5Z29uL0dyaWRzTGF5ZXIgKi8gXCIuL3NyYy9wb2x5Z29uL0dyaWRzTGF5ZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJHcmlkc0xheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlnb25fR3JpZHNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfZHluYW1pY0hlYXRMYXllcl9EeW5hbWljSGVhdExheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV85X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllciAqLyBcIi4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkR5bmFtaWNIZWF0TGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfZHluYW1pY0hlYXRMYXllcl9EeW5hbWljSGVhdExheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV85X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHtcbiAgICBNYXJrZXI6IF9tYXJrZXJfTWFya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdLFxuICAgIE1hcmtlcnNMYXllcjogX21hcmtlcl9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0sXG4gICAgTWFya2Vyc0J1ZmZlckxheWVyOiBfbWFya2VyX01hcmtlcnNCdWZmZXJMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5bGluZTogX3BvbHlsaW5lX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJkZWZhdWx0XCJdLFxuICAgIFBvbHlsaW5lc0xheWVyOiBfcG9seWxpbmVfUG9seWxpbmVzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWxpbmVzQnVmZmVyTGF5ZXI6IF9wb2x5bGluZV9Qb2x5bGluZXNCdWZmZXJMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5Z29uOiBfcG9seWdvbl9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X19bXCJkZWZhdWx0XCJdLFxuICAgIFBvbHlnb25zTGF5ZXI6IF9wb2x5Z29uX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfX1tcImRlZmF1bHRcIl0sXG4gICAgR3JpZHNMYXllcjogX3BvbHlnb25fR3JpZHNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fW1wiZGVmYXVsdFwiXSxcbiAgICBEeW5hbWljSGVhdExheWVyOiBfZHluYW1pY0hlYXRMYXllcl9EeW5hbWljSGVhdExheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV85X19bXCJkZWZhdWx0XCJdLFxufSk7XG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tYXJrZXIvTWFya2VyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbWFya2VyL01hcmtlci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIE1hcmtlcjsgfSk7XG5jbGFzcyBNYXJrZXIgZXh0ZW5kcyBMLk1hcmtlciB7XG4gICAgY29uc3RydWN0b3IobGF0bG5nLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGxhdGxuZywgb3B0aW9ucyk7XG4gICAgfVxuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLl9fZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fZGF0YTtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNCdWZmZXJMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBNYXJrZXJzQnVmZmVyTGF5ZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTWFya2Vyc0xheWVyICovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50c1wiKTtcblxuY2xhc3MgTWFya2Vyc0J1ZmZlckxheWVyIGV4dGVuZHMgX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgc3VwZXIobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbWFya2VyQnVmZmVyJztcbiAgICAgICAgY29uc3QgZGVmYXVsdEJ1ZmZlck9wdGlvbnMgPSB7XG4gICAgICAgICAgICByYWRpdXM6IDEwMDAsXG4gICAgICAgICAgICBzdHJva2U6IHRydWUsXG4gICAgICAgICAgICB3ZWlnaHQ6IDEsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCB7IGJ1ZmZlck9wdGlvbnM6IGRlZmF1bHRCdWZmZXJPcHRpb25zIH0sIG9wdGlvbnMpO1xuICAgIH1cbiAgICBkcmF3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5jb2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3I7XG4gICAgICAgIHRoaXMuaW5pdE1hcmtlcnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXJrZXJMYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYnVmZmVyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuYnVmZmVyTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFya2VyTGF5ZXIgPSB0aGlzLmNvbmZpZ01hcmtlckxheWVyKCk7XG4gICAgICAgIHRoaXMuYnVmZmVyTGF5ZXIgPSB0aGlzLmNvbmZpZ0J1ZmZlckxheWVyKCk7XG4gICAgICAgIHRoaXMubGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcbiAgICAgICAgdGhpcy5sYXllci5hZGRMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgdGhpcy5sYXllci5hZGRMYXllcih0aGlzLmJ1ZmZlckxheWVyKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZXJzLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYuZXh0ZW5kKGN1cnIuZ2V0TGF0TG5nKCkudG9Cb3VuZHModGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMucmFkaXVzKSk7XG4gICAgICAgIH0sIHRoaXMubWFya2Vyc1swXS5nZXRMYXRMbmcoKS50b0JvdW5kcyh0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5yYWRpdXMpKTtcbiAgICB9XG4gICAgY29uZmlnQnVmZmVyTGF5ZXIoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwTGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcbiAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2lyY2xlTGF5ZXIgPSBMLmNpcmNsZShtYXJrZXIuZ2V0TGF0TG5nKCksIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnVmZmVyVG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcCgnJyArIG1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLmJ1ZmZlclRvb2x0aXBBdHRyXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcCgnJyArIG1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLnBvcHVwQXR0cl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcCgnJyArIG1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JvdXBMYXllci5hZGRMYXllcihjaXJjbGVMYXllcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ3JvdXBMYXllcjtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBNYXJrZXJzTGF5ZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vdXRpbHMvaW5kZXggKi8gXCIuL3NyYy91dGlscy9pbmRleC50c1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfTWFya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01hcmtlciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXIudHNcIik7XG5cblxuY2xhc3MgTWFya2Vyc0xheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YUxpc3QpIHx8IGRhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhTGlzdCDlv4XpobvmmK/pnZ7nqbrmlbDnu4RgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgcmVuZGVyVHlwZTogJ3BvaW50JyxcbiAgICAgICAgICAgIHJlbmRlclBvaW50Q29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgIGljb25UeXBlOiAndW5pY29kZScsXG4gICAgICAgICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4gICAgICAgICAgICBpY29uQ2xhc3M6ICdpY29uZm9udCcsXG4gICAgICAgICAgICBpY29uQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIGljb25BbmNob3I6IFsxMCwgMjBdLFxuICAgICAgICAgICAgcG9wdXA6IHRydWUsXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICAgICAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICAgICAgICBjbGFzc2lmaWVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgICAgICAgIGlzQ2x1c3RlcjogZmFsc2UsXG4gICAgICAgICAgICByZW5kZXJDbHVzdGVyQ29sb3JUeXBlOiAnc21hcnQnLFxuICAgICAgICAgICAgaGVhdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBtYXg6IDEsXG4gICAgICAgICAgICAgICAgbWluT3BhY2l0eTogMC41LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50eXBlID0gJ21hcmtlcic7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuYztcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9jdXNlZE1hcmtlciA9IG51bGw7XG4gICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm1hcmtlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXJrZXJMYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhdExheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5jbHVzdGVyTGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxO1xuICAgICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JNYXAgPSB7fTtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdE1hcmtlcnMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5LyY5YWI5Yik5patIGlzQ2x1c3RlclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzQ2x1c3RlciAmJiB0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQ2x1c3RlckxheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncG9pbnQnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ01hcmtlckxheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdjbHVzdGVyJzoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYXQnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0hlYXRMYXllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclR5cGUg5LiN5pSv5oyBXCIke3RoaXMub3B0aW9ucy5yZW5kZXJUeXBlfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhO1xuICAgIH1cbiAgICBzZXRPcHRpb25zKG9wdGlvbnMsIHJlZHJhdyA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKHJlZHJhdykge1xuICAgICAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog6I635Y+W5b2T5YmNIG9wdGlvbnMgKi9cbiAgICBnZXRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pO1xuICAgIH1cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZXJzLm1hcCgobWFya2VyKSA9PiBbbWFya2VyLmdldExhdExuZygpLmxhdCwgbWFya2VyLmdldExhdExuZygpLmxuZ10pO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFwLm9mZignem9vbXN0YXJ0JywgdGhpcy5fem9vbVN0YXJ0Q2IsIHRoaXMpO1xuICAgICAgICB0aGlzLm1hcC5vZmYoJ3pvb21lbmQnLCB0aGlzLl96b29tRW5kQ2IsIHRoaXMpO1xuICAgIH1cbiAgICB0b2dnbGVWaXNpYmxlKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmljb25Db2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICBjaGFuZ2VJY29uKGljb25Vbmljb2RlKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pY29uVW5pY29kZSA9IGljb25Vbmljb2RlO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICBwaXRjaChpZCkge1xuICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAobWFya2VyLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENsYXNzaWZ5Q29sb3JSZWZzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yUmVmcztcbiAgICB9XG4gICAgX3pvb21TdGFydENiKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUgPT09ICdwb2ludCcgJiYgIXRoaXMub3B0aW9ucy5pc0NsdXN0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIF96b29tRW5kQ2IoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50JyAmJiAhdGhpcy5vcHRpb25zLmlzQ2x1c3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOa4suafk+S4uuaVo+eCueWbviAqL1xuICAgIGNvbmZpZ01hcmtlckxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5tYXJrZXJMYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXJrZXJMYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW52YXNJY29uTGF5ZXIgPSBMLmNhbnZhc0ljb25MYXllcih7fSkuYWRkVG8odGhpcy5tYXApO1xuICAgICAgICAvLyDmt7vliqDngrnlh7vkuovku7ZcbiAgICAgICAgY2FudmFzSWNvbkxheWVyLmFkZE9uQ2xpY2tMaXN0ZW5lcigoXywgW3sgZGF0YTogbWFya2VyIH1dKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5re75Yqg5Y+z6ZSu5LqL5Lu2XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkNvbnRleHRtZW51TGlzdGVuZXIoKGV2ZW50LCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ2NvbnRleHRtZW51Jywge1xuICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIG1hcmtlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5re75YqgIGhvdmVyIOS6i+S7tlxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXApIHtcbiAgICAgICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkhvdmVyTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOS5i+WJjeaciSBob3ZlciDnmoTlhbPpl60gdG9vbHRpcFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBtYXJrZXI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlci5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5bey57uP6K6+572uIHRvb2x0aXAg55u05o6l5bGV56S6IHRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLm9wZW5Ub29sdGlwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDlkKbliJnnu5HlrpogdG9vbHRpcCDlubblsZXnpLpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmJpbmRUb29sdGlwKCcnICsgdGhpcy5ob3ZlcmVkTWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRNYXJrZXJzKHRoaXMubWFya2Vycyk7XG4gICAgICAgIC8vIOino+WGs+WIneasoea4suafk+S4jeWHuuWbvuagh+mXrumimFxuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLm1hcC5nZXRDZW50ZXIoKSk7XG4gICAgICAgIHRoaXMubWFya2VyTGF5ZXIgPSBjYW52YXNJY29uTGF5ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlckxheWVyO1xuICAgIH1cbiAgICBnZXRUb29sVGlwQ29udGVudChkYXRhKSB7XG4gICAgICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXTtcbiAgICB9XG4gICAgaW5pdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJvcHRpb25zTWVyZ2VcIl0pKHRoaXMuZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRNYXJrZXJzKCkge1xuICAgICAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICAgICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKTtcbiAgICAgICAgdGhpcy5jYWNoZUNsYXNzaWZ5UGFyYW1zKCk7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdO1xuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0oW2xheWVyLmdldExhdExuZygpLmxhdCwgbGF5ZXIuZ2V0TGF0TG5nKCkubG5nXSwge1xuICAgICAgICAgICAgICAgIGljb246IHRoaXMuZ2V0TWFya2VySWNvbihkYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgICAgICAgbWFya2VyLnNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5tYXAub24oJ3pvb21zdGFydCcsIHRoaXMuX3pvb21TdGFydENiLCB0aGlzKTtcbiAgICAgICAgdGhpcy5tYXAub24oJ3pvb21lbmQnLCB0aGlzLl96b29tRW5kQ2IsIHRoaXMpO1xuICAgIH1cbiAgICAvLyDlpITnkIYgbWFya2VyIOeCueWHu+S6i+S7tlxuICAgIG1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIsIGZpdEJvdW5kcykge1xuICAgICAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBtYXJrZXI7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXApIHtcbiAgICAgICAgICAgIC8vIOWIoOmZpOWJjeS4gOS4quaUvuWkp+Wbvuagh1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZUZyb20odGhpcy5tYXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g55Sf5oiQ5b2T5YmN5pS+5aSn5Zu+5qCHXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbmV3IF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0obWFya2VyLmdldExhdExuZygpLCB7XG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRMYXJnZXJNYXJrZXJJY29uKG1hcmtlci5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgICAgICAgIC8vIOa3u+WKoOaUvuWkp+Wbvuagh+eahCBwb3B1cFxuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlclxuICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpXG4gICAgICAgICAgICAgICAgLm9wZW5Qb3B1cCgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbWFya2VyLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWRNYXJrZXIuZ2V0TGF0TG5nKCkpO1xuICAgICAgICBpZiAoZml0Qm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMobWFya2VyLmdldExhdExuZygpLnRvQm91bmRzKDEwKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stbWFya2VyJywgbWFya2VyKTtcbiAgICB9XG4gICAgY29uZmlnQ2x1c3RlckxheWVyKCkge1xuICAgICAgICAvLyDlsZXnpLrogZrlkIjlm77lsYJcbiAgICAgICAgaWYgKHRoaXMuY2x1c3RlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmNsdXN0ZXJMYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsdXN0ZXJMYXllciA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKHtcbiAgICAgICAgICAgIGljb25DcmVhdGVGdW5jdGlvbjogdGhpcy5pY29uQ3JlYXRlRnVuY3Rpb24uYmluZCh0aGlzKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2x1c3RlckxheWVyLmFkZExheWVycyh0aGlzLm1hcmtlcnMubWFwKChtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXShtLmdldExhdExuZygpLCB7XG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKG0uZ2V0RGF0YSgpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWFya2VyLnNldERhdGEobS5nZXREYXRhKCkpO1xuICAgICAgICAgICAgbWFya2VyLmJpbmRUb29sdGlwKCcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdKTtcbiAgICAgICAgICAgIG1hcmtlci5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpO1xuICAgICAgICAgICAgbWFya2VyLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWFya2VyO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNsdXN0ZXJMYXllcjtcbiAgICB9XG4gICAgLyoqIOa4suafk+S4uueDreWKm+WbviAqL1xuICAgIGNvbmZpZ0hlYXRMYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhdExheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmhlYXRMYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbHRzID0gW107XG4gICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhdExuZyA9IG1hcmtlci5nZXRMYXRMbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbkF0dHIgPSB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLmRpbWVuc2lvbkF0dHI7XG4gICAgICAgICAgICBsZXQgYWx0ID0gKGRpbWVuc2lvbkF0dHIgJiYgbWFya2VyLmdldERhdGEoKVtkaW1lbnNpb25BdHRyXSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhbHQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgYWx0ID0gdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLm1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsdHMucHVzaChhbHQpO1xuICAgICAgICAgICAgbWFya2VyLnNldExhdExuZyhMLmxhdExuZyhsYXRMbmcubGF0LCBsYXRMbmcubG5nLCBhbHQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGVhdExheWVyID0gTC5oZWF0TGF5ZXIodGhpcy5tYXJrZXJzLm1hcCgoaXQsIGluZGV4KSA9PiBbXG4gICAgICAgICAgICBpdC5nZXRMYXRMbmcoKS5sYXQsXG4gICAgICAgICAgICBpdC5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgICAgICBhbHRzW2luZGV4XSxcbiAgICAgICAgXSksIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIm9wdGlvbnNNZXJnZVwiXSkoeyBtaW5PcGFjaXR5OiAwLjUgfSwgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXRMYXllcjtcbiAgICB9XG4gICAgZ2V0TGFyZ2VyTWFya2VySWNvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIHRydWUpO1xuICAgIH1cbiAgICBnZXRNYXJrZXJJY29uKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgZmFsc2UpO1xuICAgIH1cbiAgICAvKiog6I635Y+W5b2T5YmNIG1hcmtlciDpnIDopoHlsZXnpLrnmoQgaWNvbiAqL1xuICAgIF9nZXRNYXJrZXJJY29uKGRhdGEsIGlzTGFyZ2VyKSB7XG4gICAgICAgIGNvbnN0IGljb25TaXplID0gdGhpcy5vcHRpb25zLmljb25TaXplO1xuICAgICAgICBjb25zdCBpY29uQW5jaG9yID0gdGhpcy5vcHRpb25zLmljb25BbmNob3I7XG4gICAgICAgIGNvbnN0IGxhcmdlckljb25TaXplID0gW2ljb25TaXplWzBdICogMS41LCBpY29uU2l6ZVsxXSAqIDEuNV07XG4gICAgICAgIGNvbnN0IGxhcmdlckljb25BbmNob3IgPSBbaWNvbkFuY2hvclswXSAqIDEuNSwgaWNvbkFuY2hvclsxXSAqIDEuNV07XG4gICAgICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3I7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6IHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gTC5pY29uKHtcbiAgICAgICAgICAgICAgICAvLyAgIGljb25Vcmw6IHRoaXMub3B0aW9ucy5pY29uSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgLy8gICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAgICAgICAgIC8vICAgaWNvbkFuY2hvcixcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6XG4gICAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogdGhpcy5nZXRDdXN0b21JY29uSFRNTChkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBpc0xhcmdlciA/ICdsYXJnZS1kaXYtaWNvbi1tYXJrZXInIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICAgICAgICAgIGljb25BbmNob3I6IGlzTGFyZ2VyID8gbGFyZ2VySWNvbkFuY2hvciA6IGljb25BbmNob3IsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBBbmNob3I6IGlzTGFyZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFswLCAtbGFyZ2VySWNvbkFuY2hvclsxXSAvIDJdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFswLCAtaWNvbkFuY2hvclsxXSAvIDJdLFxuICAgICAgICAgICAgICAgICAgICBwb3B1cEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJUeXBlIOS4jeiDveS4uiAke3RoaXMub3B0aW9ucy5pY29uVHlwZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDdXN0b21JY29uSFRNTChkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3I7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzaW5nbGUnOiB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnY2xhc3NpZmllZCc6IHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuZ2V0Q2xhc3NpZnlNYXJrZXJDb2xvcihkYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3NlZ21lbnRlZCc6IHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJQb2ludENvbG9yVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAgIC8vIOS9v+eUqCBjbGFzc1xuICAgICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIDxpIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIGA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDkvb/nlKggc3ZnXG4gICAgICAgICAgICBjYXNlICdzeW1ib2wnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbi1zeW1ib2xcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7dGhpcy5vcHRpb25zLmljb25TeW1ib2x9XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOS9v+eUqCB1bmljb2RlXG4gICAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgPGlcbiAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5vcHRpb25zLmljb25Vbmljb2RlfVxuICAgICAgICAgIDwvaT5cbiAgICAgICAgYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZUNsYXNzaWZ5UGFyYW1zKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQXR0cikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRtcCA9IHt9O1xuICAgICAgICBjb25zdCBwcm9wID0gdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyO1xuICAgICAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhW3Byb3BdIGluIHRtcCkge1xuICAgICAgICAgICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCB0bXBbZGF0YVtwcm9wXV1bMV0gKyAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXModG1wKTtcbiAgICAgICAgdmFsdWVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcbiAgICAgICAgdGhpcy5jbGFzc2lmeUNvbG9yUmVmcyA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoW2F0dHIsIG51bXNdLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRDb2xvcnNbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2F0dHJdID0gY29sb3I7XG4gICAgICAgICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JSZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgbnVtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2xhc3NpZnlNYXJrZXJDb2xvcihkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzaWZ5Q29sb3JNYXBbZGF0YVt0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHJdXTtcbiAgICB9XG4gICAgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgICAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aDtcbiAgICAgICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eTtcbiAgICAgICAgbGV0IG1pblZhbCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl07XG4gICAgICAgICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbCk7XG4gICAgICAgICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXA7XG4gICAgfVxuICAgIGdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl07XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1twYXJzZUludCgnJyArICh2YWwgLSB0aGlzLnNlZ21lbnRlZE1pbikgLyB0aGlzLnNlZ21lbnRlZFN0ZXAsIDEwKV07XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG4gICAgZ2V0UG9wdXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHJ9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0cl19YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0ci5sYWJlbH06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGljb25DcmVhdGVGdW5jdGlvbihjbHVzdGVyKSB7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IFsnIzc1NzQ3MicsICcjNTA5M0UyJywgJyNDQjc5ODcnLCAnI0ZDNzYzQiddO1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmRhdGFMaXN0Lmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc3RlcCA9IGxlbmd0aCAvIGNvbG9ycy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNjYWxlU3RlcCA9ICgxIC0gMC43NSkgLyBjb2xvcnMubGVuZ3RoO1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yO1xuICAgICAgICBsZXQgc2NhbGUgPSAxO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlckNsdXN0ZXJDb2xvclR5cGUgPT09ICdzbWFydCcpIHtcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3JzW01hdGguZmxvb3IoKGNsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpIC0gMSkgLyBzdGVwKV07XG4gICAgICAgICAgICBzY2FsZSA9XG4gICAgICAgICAgICAgICAgKE1hdGguZmxvb3IoKGNsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpIC0gMSkgLyBzdGVwKSArIDEpICogc2NhbGVTdGVwICtcbiAgICAgICAgICAgICAgICAgICAgMC43NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgICAgICAgIGh0bWw6IGBcbiAgICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKCR7c2NhbGV9LCAke3NjYWxlfSwgMSlcbiAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7T2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wibGlnaHRlblwiXSkoY29sb3IpfTtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2NvbG9yfTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgbWFyZ2luOiA5cHg7XG4gICAgICAgICAgXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICBsZWZ0OiA5cHg7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAke2NsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgICAgICAgICBpY29uU2l6ZTogWzQwLCA0MF0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5Z29uL0dyaWRzTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlnb24vR3JpZHNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gR3JpZHNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUG9seWdvbiAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbi50c1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfUG9seWdvbnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9Qb2x5Z29uc0xheWVyICovIFwiLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzXCIpO1xuXG5cbmNsYXNzIEdyaWRzTGF5ZXIgZXh0ZW5kcyBfUG9seWdvbnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXSB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgc3VwZXIobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpO1xuICAgICAgICB0aGlzLnByb3BNYXhMZW5ndGggPSAtMTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0dyaWRMYXllcigpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgLy8gdG9vbHRpcCDmnInlj6/og73pnIDopoHnm7TmjqXlsZXnpLrvvIzpnIDopoHlnKggcG9seWdvbiDmt7vliqDliLDlnLDlm77kuIrkuYvlkI7miY3lj6/ku6XvvIzmiYDku6XpnIDopoHlu7bov5/orr7nva5cbiAgICAgICAgdGhpcy5jb25maWdUb29sdGlwKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy56b29tSGFuZGxlcigpO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdG9nZ2xlVG9vbHRpcCh2aXNpYmxlKSB7XG4gICAgICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgaWYgKHBvbHlnb24uZ2V0VG9vbHRpcCgpKSB7XG4gICAgICAgICAgICAgICAgcG9seWdvbi5nZXRUb29sdGlwKCkuc2V0T3BhY2l0eSh2aXNpYmxlID8gMSA6IDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdEV2ZW50KCkge1xuICAgICAgICB0aGlzLm1hcC5vbignem9vbScsIHRoaXMuem9vbUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGNvbmZpZ1Rvb2x0aXAoKSB7XG4gICAgICAgIHRoaXMucHJvcE1heExlbmd0aCA9IHRoaXMuZ2V0UHJvcE1heExlbmd0aCgpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgICAgICBwb2x5Z29uLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQocG9seWdvbi5nZXREYXRhKCkpLCB7XG4gICAgICAgICAgICAgICAgICAgIHBlcm1hbmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbmZpZ0dyaWRMYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucyA9IHRoaXMucG9seWdvbnMubWFwKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3I7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlnb25Db2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihwb2x5Z29uLmdldERhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIOmHjeaWsOW6lOeUqCBvcHRpb25zXG4gICAgICAgICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKHBvbHlnb24uZ2V0TGF0TG5ncygpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIG5ld1BvbHlnb24uc2V0RGF0YShwb2x5Z29uLmdldERhdGEoKSk7XG4gICAgICAgICAgICBuZXdQb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb2x5Z29uLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChuZXdQb2x5Z29uLmdldERhdGEoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld1BvbHlnb247XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9seWdvbkxheWVyLmFkZExheWVyKHBvbHlnb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkxheWVyO1xuICAgIH1cbiAgICB6b29tSGFuZGxlcigpIHtcbiAgICAgICAgY29uc3QgcG9seWdvbiA9IHRoaXMucG9seWdvbnNbMF07XG4gICAgICAgIGlmICghcG9seWdvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9nZ2xlVG9vbHRpcCh0aGlzLmdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb24pID5cbiAgICAgICAgICAgIHRoaXMuZ2V0VG9vbHRpcE1heFdpZHRoKHRoaXMucHJvcE1heExlbmd0aCkpO1xuICAgIH1cbiAgICBnZXRSZWN0YW5nbGVXaWR0aChwb2x5Z29uKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCkpLnggLVxuICAgICAgICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpLngpO1xuICAgIH1cbiAgICBnZXRUb29sdGlwTWF4V2lkdGgodGV4dExlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGV4dExlbmd0aCAqIDEyICsgMTQ7XG4gICAgfVxuICAgIGdldFByb3BNYXhMZW5ndGgoKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLnBvcHVwQXR0clxuICAgICAgICAgICAgOiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uc1xuICAgICAgICAgICAgLm1hcCgocG9seWdvbikgPT4gYCR7cG9seWdvbi5nZXREYXRhKClbcHJvcF19YC5sZW5ndGgpXG4gICAgICAgICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgocHJldiwgY3Vycik7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlnb24vUG9seWdvbi50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUG9seWdvbjsgfSk7XG5jbGFzcyBQb2x5Z29uIGV4dGVuZHMgTC5Qb2x5Z29uIHtcbiAgICBjb25zdHJ1Y3RvcihsYXRsbmdzLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGxhdGxuZ3MsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fX2RhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGE7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5Z29uc0xheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL3V0aWxzL2luZGV4ICovIFwiLi9zcmMvdXRpbHMvaW5kZXgudHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUG9seWdvbiAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbi50c1wiKTtcblxuXG5jb25zdCBERUZBVUxUX0NPTE9SID0gJyM3MkFGREYnO1xuY2xhc3MgUG9seWdvbnNMYXllciB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGFMaXN0KSB8fCBkYXRhTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZGF0YUxpc3Qg5b+F6aG75piv6Z2e56m65pWw57uEYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHBvcHVwQXR0cjogeyBsYWJlbDogJ+WQjeensCcsIHZhbHVlOiAnbmFtZScgfSxcbiAgICAgICAgICAgIHRvb2x0aXBBdHRyOiAnbmFtZScsXG4gICAgICAgICAgICBjb2xvcjogREVGQVVMVF9DT0xPUixcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgICBmaWxsQ29sb3I6IERFRkFVTFRfQ09MT1IsXG4gICAgICAgICAgICB3ZWlnaHQ6IDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuNCxcbiAgICAgICAgICAgIHJlbmRlclBvbHlnb25Db2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgICAgICAgc2VnbWVudGVkQ29sb3JzOiBbREVGQVVMVF9DT0xPUl0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHlwZSA9ICdwb2x5Z29uJztcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wib3B0aW9uc01lcmdlXCJdKSh0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBudWxsO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbiA9IG51bGw7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRQb2x5Z29ucygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlnb25MYXllcigpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSk7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9seWdvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29ucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLCBMLmxhdExuZ0JvdW5kcyh0aGlzLnBvbHlnb25zWzBdLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpLCB0aGlzLnBvbHlnb25zWzBdLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpKSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGVWaXNpYmxlKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuICAgIHBpdGNoKGlkKSB7XG4gICAgICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgaWYgKHBvbHlnb24uZ2V0RGF0YSgpLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcbiAgICBpbml0RXZlbnQoKSB7IH1cbiAgICBnZXRUb29sVGlwQ29udGVudChkYXRhKSB7XG4gICAgICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXTtcbiAgICB9XG4gICAgZ2V0UG9wdXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHJ9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0cl19YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0ci5sYWJlbH06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICAgICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpO1xuICAgICAgICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwO1xuICAgIH1cbiAgICBnZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YSkge1xuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW3BhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICBwb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24sIGZpdEJvdW5kcykge1xuICAgICAgICB0aGlzLmZvY3VzZWRQb2x5Z29uID0gcG9seWdvbjtcbiAgICAgICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uID0gbmV3IF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKHBvbHlnb24uZ2V0TGF0TG5ncygpLCB7XG4gICAgICAgICAgICBjb2xvcjogREVGQVVMVF9DT0xPUixcbiAgICAgICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uXG4gICAgICAgICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgICAgICAgIC5vcGVuUG9wdXAoKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBvbHlnb24uY2xvc2VUb29sdGlwKCk7XG4gICAgICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLmdldENlbnRlcigpKTtcbiAgICAgICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHBvbHlnb24uZ2V0Qm91bmRzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlnb24nLCBwb2x5Z29uKTtcbiAgICB9XG4gICAgaW5pdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJvcHRpb25zTWVyZ2VcIl0pKHRoaXMuZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRQb2x5Z29ucygpIHtcbiAgICAgICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXTtcbiAgICAgICAgICAgIGNvbnN0IHBvbHlnb24gPSBuZXcgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0obGF5ZXIuZ2V0TGF0TG5ncygpKTtcbiAgICAgICAgICAgIHBvbHlnb24uc2V0RGF0YShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucG9seWdvbnMucHVzaChwb2x5Z29uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbmZpZ1BvbHlnb25MYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucyA9IHRoaXMucG9seWdvbnMubWFwKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IERFRkFVTFRfQ09MT1IsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlnb24uZ2V0RGF0YSgpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g6YeN5paw5bqU55SoIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IG5ld1BvbHlnb24gPSBuZXcgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgbmV3UG9seWdvbi5zZXREYXRhKHBvbHlnb24uZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb2x5Z29uLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1BvbHlnb24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1BvbHlnb247XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9seWdvbkxheWVyLmFkZExheWVyKHBvbHlnb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkxheWVyO1xuICAgIH1cbiAgICBnZXRDb2xvcihkYXRhLCBtb2RlKSB7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvcjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRhcmtlblwiXSkoY29sb3IpO1xuICAgICAgICAgICAgY2FzZSAnbGlnaHRlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlsaW5lOyB9KTtcbmNsYXNzIFBvbHlsaW5lIGV4dGVuZHMgTC5Qb2x5bGluZSB7XG4gICAgY29uc3RydWN0b3IobGF0bG5ncywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5bGluZXNCdWZmZXJMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlsaW5lc0xheWVyICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIudHNcIik7XG5cbmNsYXNzIFBvbHlsaW5lc0J1ZmZlckxheWVyIGV4dGVuZHMgX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYyk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgICAgICAgIGNvcnJpZG9yOiAxMDAsXG4gICAgICAgICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWxpbmVCdWZmZXInO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKTtcbiAgICB9XG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSwgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKCkpO1xuICAgIH1cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgY29uZmlnUG9seWxpbmVCdWZmZXJMYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBwb2x5bGluZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBwb2x5bGluZUJ1ZmZlciA9IEwuY29ycmlkb3IocG9seWxpbmUuZ2V0TGF0TG5ncygpLm1hcCgobGF0TG5nKSA9PiBMLmxhdExuZyhbbGF0TG5nLmxhdCwgbGF0TG5nLmxuZ10pKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgcG9seWxpbmVCdWZmZXIuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihwb2x5bGluZUJ1ZmZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZUxheWVyO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5bGluZXNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlsaW5lICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuXG5cbmNsYXNzIFBvbHlsaW5lc0xheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YUxpc3QpIHx8IGRhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhTGlzdCDlv4XpobvmmK/pnZ7nqbrmlbDnu4RgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWxpbmUnO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJvcHRpb25zTWVyZ2VcIl0pKHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbnVsbDtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pO1xuICAgIH1cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvbHlsaW5lcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLCBMLmxhdExuZ0JvdW5kcyh0aGlzLnBvbHlsaW5lc1swXS5nZXRCb3VuZHMoKS5nZXROb3J0aEVhc3QoKSwgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICBwaXRjaChpZCkge1xuICAgICAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBvbHlsaW5lLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIm9wdGlvbnNNZXJnZVwiXSkodGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG4gICAgaW5pdFBvbHlsaW5lcygpIHtcbiAgICAgICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gdGhpcy5kYXRhTGlzdC5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdO1xuICAgICAgICAgICAgLy8gbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgLy8gICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgY29uc3QgcG9seWxpbmUgPSBuZXcgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKGxheWVyLmdldExhdExuZ3MoKSk7XG4gICAgICAgICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICAgICAgICBwb2x5bGluZS5zZXREYXRhKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHBvbHlsaW5lO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMCldO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIHBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lLCBmaXRCb3VuZHMpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBwb2x5bGluZTtcbiAgICAgICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnlJ/miJDlvZPliY0gZm9jdXNcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbmV3IF9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShwb2x5bGluZS5nZXRMYXRMbmdzKCksIHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICAgICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWxpbmUuZ2V0RGF0YSgpLCAnbm9ybWFsJyksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUuYWRkVG8odGhpcy5tYXApO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmVcbiAgICAgICAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQocG9seWxpbmUuZ2V0RGF0YSgpKSlcbiAgICAgICAgICAgIC5vcGVuUG9wdXAoKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcG9seWxpbmUuY2xvc2VUb29sdGlwKCk7XG4gICAgICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5nZXRDZW50ZXIoKSk7XG4gICAgICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5bGluZS5nZXRCb3VuZHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stcG9seWxpbmUnLCBwb2x5bGluZSk7XG4gICAgfVxuICAgIGdldFRvb2xUaXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdO1xuICAgIH1cbiAgICBnZXRQb3B1cENvbnRlbnQoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uZmlnUG9seWxpbmVMYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3I7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKHBvbHlsaW5lLmdldERhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BvbHlsaW5lID0gbmV3IF9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShwb2x5bGluZS5nZXRMYXRMbmdzKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgbmV3UG9seWxpbmUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdQb2x5bGluZS5zZXREYXRhKHBvbHlsaW5lLmdldERhdGEoKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9seWxpbmUuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5bGluZS5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihuZXdQb2x5bGluZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZUxheWVyO1xuICAgIH1cbiAgICBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5O1xuICAgICAgICBsZXQgbWluVmFsID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKTtcbiAgICAgICAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IG1pblZhbDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcDtcbiAgICB9XG4gICAgZ2V0Q29sb3IoZGF0YSwgbW9kZSkge1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3I7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWxpbmVDb2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRhcmtlblwiXSkoY29sb3IpO1xuICAgICAgICAgICAgY2FzZSAnbGlnaHRlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3V0aWxzL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQsIGxpZ2h0ZW4sIGRhcmtlbiwgb3B0aW9uc01lcmdlICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImxpZ2h0ZW5cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBsaWdodGVuOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkYXJrZW5cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkYXJrZW47IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIm9wdGlvbnNNZXJnZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIG9wdGlvbnNNZXJnZTsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29sb3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29sb3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxuZnVuY3Rpb24gbGlnaHRlbihoZXhDb2xvcikge1xuICAgIHJldHVybiBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKGhleENvbG9yKVxuICAgICAgICAubGlnaHRlbigwLjUpXG4gICAgICAgIC5oZXgoKTtcbn1cbmZ1bmN0aW9uIGRhcmtlbihoZXhDb2xvcikge1xuICAgIHJldHVybiBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKGhleENvbG9yKVxuICAgICAgICAuZGFya2VuKDAuNSlcbiAgICAgICAgLmhleCgpO1xufVxuZnVuY3Rpb24gb3B0aW9uc01lcmdlKC4uLnRhcmdldHMpIHtcbiAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldHNbMF07XG4gICAgfVxuICAgIGNvbnN0IG1lcmdlZCA9IHRhcmdldHNbMF07XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0c1sxXSkge1xuICAgICAgICBpZiAoa2V5IGluIG1lcmdlZCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtZXJnZWRba2V5XSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2tleV0gPSBvcHRpb25zTWVyZ2UobWVyZ2VkW2tleV0sIHRhcmdldHNbMV1ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRba2V5XSA9IHRhcmdldHNbMV1ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lcmdlZFtrZXldID0gdGFyZ2V0c1sxXVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zTWVyZ2UobWVyZ2VkLCAuLi50YXJnZXRzLnNsaWNlKDIpKTtcbn1cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoe1xuICAgIGxpZ2h0ZW4sXG4gICAgZGFya2VuLFxuICAgIG9wdGlvbnNNZXJnZSxcbn0pO1xuXG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMM2RsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3TDNkbFluQmhZMnN2WW05dmRITjBjbUZ3SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0WTI5dWRtVnlkQzlqYjI1MlpYSnphVzl1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUxXTnZiblpsY25RdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDI1dlpHVmZiVzlrZFd4bGN5OWpiMnh2Y2kxamIyNTJaWEowTDNKdmRYUmxMbXB6SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0Ym1GdFpTOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUxYTjBjbWx1Wnk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2Ym05a1pWOXRiMlIxYkdWekwyTnZiRzl5TFhOMGNtbHVaeTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0Ym1GdFpTOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5dWIyUmxYMjF2WkhWc1pYTXZhWE10WVhKeVlYbHBjMmd2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dmJHVmhabXhsZEUxaGNDOHVMMjV2WkdWZmJXOWtkV3hsY3k5emFXMXdiR1V0YzNkcGVucHNaUzlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZjM0pqTDJSNWJtRnRhV05JWldGMFRHRjVaWEl2UkhsdVlXMXBZMGhsWVhSTVlYbGxjaTUwY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2YzNKakwybHVaR1Y0TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZiV0Z5YTJWeUwwMWhjbXRsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmMzSmpMMjFoY210bGNpOU5ZWEpyWlhKelFuVm1abVZ5VEdGNVpYSXVkSE1pTENKM1pXSndZV05yT2k4dmJHVmhabXhsZEUxaGNDOHVMM055WXk5dFlYSnJaWEl2VFdGeWEyVnljMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXZHZiaTlIY21sa2MweGhlV1Z5TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZjRzlzZVdkdmJpOVFiMng1WjI5dUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXZHZiaTlRYjJ4NVoyOXVjMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXeHBibVV2VUc5c2VXeHBibVV1ZEhNaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDNOeVl5OXdiMng1YkdsdVpTOVFiMng1YkdsdVpYTkNkV1ptWlhKTVlYbGxjaTUwY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2YzNKakwzQnZiSGxzYVc1bEwxQnZiSGxzYVc1bGMweGhlV1Z5TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZkWFJwYkhNdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3p0QlEyeEdRVHRCUVVOQkxHdENRVUZyUWl4dFFrRkJUeXhEUVVGRExITkVRVUZaT3p0QlFVVjBRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNVVUZCVVN3MFFrRkJORUk3UVVGRGNFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3MlFrRkJOa0k3UVVGRGNFTXNWMEZCVnl4cFEwRkJhVU03UVVGRE5VTXNWVUZCVlN4blEwRkJaME03UVVGRE1VTXNWMEZCVnl4cFEwRkJhVU03UVVGRE5VTXNUMEZCVHl4eFEwRkJjVU03UVVGRE5VTXNVMEZCVXl3eVEwRkJNa003UVVGRGNFUXNVVUZCVVR0QlFVTlNPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNjVVJCUVhGRUxHZENRVUZuUWp0QlFVTnlSU3h0UkVGQmJVUXNZMEZCWXp0QlFVTnFSVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTEdkQ1FVRm5RaXhQUVVGUE8wRkJRM1pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeDFRa0ZCZFVJN08wRkJSWFpDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZENRVUZuUWl4UFFVRlBMRkZCUVZFN1FVRkRMMElzWjBKQlFXZENMRTlCUVU4c1VVRkJVVHRCUVVNdlFpeHBRa0ZCYVVJc1QwRkJUeXhQUVVGUE8wRkJReTlDTEdsQ1FVRnBRaXhQUVVGUExFOUJRVTg3UVVGREwwSXNaMEpCUVdkQ0xGRkJRVkVzVDBGQlR6dEJRVU12UWl4blFrRkJaMElzVVVGQlVTeFBRVUZQTzBGQlF5OUNPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSE5GUVVGelJUczdRVUZGZEVVN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNjMEpCUVhOQ08wRkJRM1JDTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEN0RFFVRXJReXhGUVVGRkxGVkJRVlVzUlVGQlJUdEJRVU0zUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR08wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzWlVGQlpTeGhRVUZoTEdGQlFXRTdRVUZEZWtNN1FVRkRRU3hsUVVGbExHRkJRV0VzWVVGQllUdEJRVU42UXp0QlFVTkJMR1ZCUVdVc1lVRkJZU3hoUVVGaE8wRkJRM3BETzBGQlEwRXNaVUZCWlN4aFFVRmhMR0ZCUVdFN1FVRkRla003UVVGRFFTeGxRVUZsTEdGQlFXRXNZVUZCWVR0QlFVTjZRenRCUVVOQkxHVkJRV1VzWVVGQllUdEJRVU0xUWpzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOdU1rSkJMR3RDUVVGclFpeHRRa0ZCVHl4RFFVRkRMR3RGUVVGbE8wRkJRM3BETEZsQlFWa3NiVUpCUVU4c1EwRkJReXh6UkVGQlV6czdRVUZGTjBJN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEVzYTBOQlFXdERPMEZCUTJ4RE8wRkJRMEU3UVVGRFFTeDFRMEZCZFVNc1UwRkJVenRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFc2QwUkJRWGRFTEhWRFFVRjFRenRCUVVNdlJpeHpSRUZCYzBRc2NVTkJRWEZET3p0QlFVVXpSanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJpeERRVUZET3p0QlFVVkVPenM3T3pzN096czdPenM3UVVNM1JVRXNhMEpCUVd0Q0xHMUNRVUZQTEVOQlFVTXNhMFZCUVdVN08wRkJSWHBETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4eFEwRkJjVU1zVTBGQlV6dEJRVU01UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhsQ1FVRjVRanM3UVVGRmVrSTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEhsRFFVRjVReXhUUVVGVE8wRkJRMnhFTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMSEZEUVVGeFF5eFRRVUZUTzBGQlF6bERPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096dEJReTlHV1RzN1FVRkZXanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUTNaS1FUdEJRVU5CTEdsQ1FVRnBRaXh0UWtGQlR5eERRVUZETEdkR1FVRlpPMEZCUTNKRExHTkJRV01zYlVKQlFVOHNRMEZCUXl3NFJFRkJaMEk3TzBGQlJYUkRPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNVMEZCVXp0QlFVTlVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMSGxDUVVGNVFpeEpRVUZKTzBGQlF6ZENMSGRDUVVGM1FpeEZRVUZGTEZkQlFWY3NSVUZCUlR0QlFVTjJRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMR0ZCUVdFc1QwRkJUenRCUVVOd1FqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRU3hoUVVGaExFOUJRVTg3UVVGRGNFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR0xHRkJRV0VzVDBGQlR6dEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRXNSVUZCUlR0QlFVTkdPMEZCUTBFN08wRkJSVUVzV1VGQldTeFBRVUZQTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEZWs5Wk96dEJRVVZhTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEzWktZVHM3UVVGRllpeHJRa0ZCYTBJc2JVSkJRVThzUTBGQlF5d3dSRUZCWXp0QlFVTjRReXhqUVVGakxHMUNRVUZQTEVOQlFVTXNORVJCUVdVN08wRkJSWEpET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPenRCUVVWRU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNZVUZCWVN4dFFrRkJiVUk3UVVGRGFFTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVdFc1kwRkJZenRCUVVNelFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2FVSkJRV2xDTEdOQlFXTTdRVUZETDBJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2NVVkJRWEZGTEd0RFFVRnJReXhGUVVGRk96dEJRVVY2Unp0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxHbENRVUZwUWl4blFrRkJaMEk3UVVGRGFrTTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzVDBGQlR6dEJRVU40UWp0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNaMEpCUVdkQ0xGbEJRVms3UVVGRE5VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN08wRkRPV1JCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRVbUU3TzBGQlJXSXNhVUpCUVdsQ0xHMUNRVUZQTEVOQlFVTXNkMFJCUVdFN08wRkJSWFJETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFTeHRRMEZCYlVNc1UwRkJVenRCUVVNMVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRek5DUVR0QlFVRkJPMEZCUVVFN1FVRkhLMEk3UVVGWGFFSXNUVUZCVFN4blFrRkJaMEk3U1VGVmJrTXNXVUZEUlN4SFFVRlZMRVZCUTFZc1pVRkJhVU1zUlVGRGFrTXNUMEZCWjBNc1JVRkRhRU1zVjBGQmQwSTdVVUZGZUVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1pVRkJaU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEYmtVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJRenRUUVVOd1F6dFJRVU5FTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSenRSUVVOa0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NaVUZCWlR0UlFVTjBReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVODdVVUZEZEVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTzFGQlF6bENMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWs3U1VGRGNrSXNRMEZCUXp0SlFVTk5MRTlCUVU4N1VVRkRXaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVczdVVUZEY0VJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETzFGQlEzQkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTXZRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzBsQlEyUXNRMEZCUXp0SlFVTk5MRXRCUVVzN1VVRkRWaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVczdVVUZEY0VJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUTNSQ0xFOUJRVTA3VTBGRFVEdFJRVU5FTEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUTJoQ0xFOUJRVTA3WVVGRFVEdFpRVU5FTEZkQlFWYzdXVUZEV0N4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU4yUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVTdiMEpCUTNSQ0xFOUJRVTA3YVVKQlExQTdaMEpCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdGhRVU5tTzJsQ1FVRk5PMmRDUVVOTUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdaMEpCUTJ4Q0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRuUWtGREwwSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRoUVVOaU8xRkJRMGdzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRE8wbEJRek5DTEVOQlFVTTdTVUZEVFN4TFFVRkxPMUZCUTFZc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTzBsQlEzSkNMRU5CUVVNN1NVRkRUU3hKUVVGSk8xRkJRMVFzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zVjBGQlZ6dFpRVU5rTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkRhRVFzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5PMUZCUXpkQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVOcVF5eERRVUZETzBsQlEwMHNTVUZCU1R0UlFVTlVMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3VVVGRGJFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1RVRkJUVHRSUVVOcVJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVTk5MRkZCUVZFc1EwRkJReXhKUVVGWk8xRkJRekZDTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRia1FzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4WlFVRlpMRWxCUVVrc01FSkJRVEJDTEVOQlFVTTdVMEZETlVRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6bERMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTzBsQlEyNUNMRU5CUVVNN1NVRkRUU3hKUVVGSkxFTkJRVU1zVDBGQmFVTTdVVUZETTBNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdFJRVU5vUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJUdFJRVU5xUWl4UFFVRlBMRWxCUVVrN1NVRkRZaXhEUVVGRE8wbEJRMDBzVTBGQlV6dFJRVU5rTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhGUVVGRk8wbEJRM2hDTEVOQlFVTTdTVUZEVHl4WFFVRlhMRU5CUVVNc1QwRkJhVU03VVVGRGJrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVU14UWp0WlFVTkZMRWxCUVVrc1JVRkJSU3hMUVVGTE8xbEJRMWdzU1VGQlNTeEZRVUZGTEV0QlFVczdXVUZEV0N4UlFVRlJMRVZCUVVVc1NVRkJTVHRUUVVObUxFVkJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZEV2l4UFFVRlBMRU5CUTFJN1NVRkRTQ3hEUVVGRE8wbEJRMDhzVTBGQlV6dFJRVU5tTEUxQlFVMHNiVUpCUVcxQ0xFZEJRWGRDTzFsQlF5OURMRlZCUVZVc1JVRkJSU3hOUVVGTk8xbEJRMnhDTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUenRUUVVNeFFqdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3cwUkVGQldTeERRVU16UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVOU0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTNaQ0xHMUNRVUZ0UWl4RlFVTnVRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVU5xUWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXM3U1VGRGJrSXNRMEZCUXp0RFFVTkdPenM3T3pzN096czdPenM3TzBGRE5VaEVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVzlETzBGQlExazdRVUZEV1R0QlFVTnNRanRCUVVOWk8wRkJRMWs3UVVGRE0wSTdRVUZEV1R0QlFVTk9PMEZCUTNGQ08wRkJSV3hGTEN0RVFVRmxPMGxCUTJJc09FUkJRVTA3U1VGRFRpd3dSVUZCV1R0SlFVTmFMSE5HUVVGclFqdEpRVU5zUWl4dlJVRkJVVHRKUVVOU0xHZEdRVUZqTzBsQlEyUXNORVpCUVc5Q08wbEJRM0JDTEdsRlFVRlBPMGxCUTFBc05rVkJRV0U3U1VGRFlpeDFSVUZCVlR0SlFVTldMRFJHUVVGblFqdERRVU5xUWp0QlFWbEJPenM3T3pzN096czdPenM3TzBGRGFFTkVPMEZCUVVFN1FVRkJaU3hOUVVGTkxFMUJRVThzVTBGQlVTeERRVUZETEVOQlFVTXNUVUZCVFR0SlFVY3hReXhaUVVGWkxFMUJRVEJDTEVWQlFVVXNUMEZCZVVJN1VVRkRMMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVU5OTEU5QlFVOHNRMEZCUXl4SlFVRnJRanRSUVVNdlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrN1NVRkRjRUlzUTBGQlF6dEpRVU5OTEU5QlFVODdVVUZEV2l4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTk8wbEJRM0JDTEVOQlFVTTdRMEZEUmpzN096czdPenM3T3pzN096dEJRMkpFTzBGQlFVRTdRVUZCUVR0QlFVRnJSVHRCUVV0dVJDeE5RVUZOTEd0Q1FVRnRRaXhUUVVGUkxIRkVRVUZaTzBsQlJ6RkVMRmxCUTBVc1IwRkJWU3hGUVVOV0xGRkJRWGRDTEVWQlEzaENMRTlCUVd0RExFVkJRMnhETEZkQlFYZENPMUZCUlhoQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSU3hYUVVGWExFTkJRVU03VVVGRE1VTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhqUVVGak8xRkJRekZDTEUxQlFVMHNiMEpCUVc5Q0xFZEJRVEJDTzFsQlEyeEVMRTFCUVUwc1JVRkJSU3hKUVVGSk8xbEJRMW9zVFVGQlRTeEZRVUZGTEVsQlFVazdXVUZEV2l4TlFVRk5MRVZCUVVVc1EwRkJRenRUUVVOV08xRkJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVNeFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVTmFMRVZCUVVVc1lVRkJZU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRVZCUTNaRExFOUJRVThzUTBGRFVqdEpRVU5JTEVOQlFVTTdTVUZGVFN4SlFVRkpMRU5CUVVNc1QwRkJiVU03VVVGRE4wTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRE8xRkJRMjVFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNN1VVRkRla1FzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0UlFVTnNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdTVUZEZEVJc1EwRkJRenRKUVVWTkxFMUJRVTA3VVVGRFdDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOcVFpeFBRVUZOTzFOQlExQTdVVUZEUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3V1VGRGNFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTjJRenRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTndRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xTkJRM1pETzFGQlEwUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVN1VVRkRNME1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVTdVVUZGTTBNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNWVUZCVlN4RlFVRkZPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGNrTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVVnlReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRemRDTEU5QlFVOHNTVUZCU1R0SlFVTmlMRU5CUVVNN1NVRkZUU3hUUVVGVE8xRkJRMlFzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJUdFRRVU0xUWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRGVFTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVOb1FpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVNM1JEdFJRVU5JTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVNM1JTeERRVUZETzBsQlJVOHNhVUpCUVdsQ08xRkJRM1pDTEUxQlFVMHNWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhWUVVGVkxFVkJRVVU3VVVGRGFrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNSVUZCUlR0WlFVTTVRaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVTXhRaXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlEyeENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeERRVU16UWp0WlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSVHRuUWtGRGJFTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1EwRkRja0lzUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRM1JFTzJGQlEwWTdhVUpCUVUwN1owSkJRMHdzVVVGQlVTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRk8yOUNRVU55UXl4TFFVRkxMRkZCUVZFN2QwSkJRMWdzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZEY2tJc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVU01UXp0M1FrRkRSQ3hOUVVGTE8yOUNRVU5RTEV0QlFVc3NVVUZCVVR0M1FrRkRXQ3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVU55UWl4RlFVRkZMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVU53UkR0dlFrRkRTRHQzUWtGRFJTeE5RVUZMTzJsQ1FVTlNPMkZCUTBZN1dVRkRSQ3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTnNReXhEUVVGRExFTkJRVU03VVVGRFJpeFBRVUZQTEZWQlFWVTdTVUZEYmtJc1EwRkJRenREUVVOR096czdPenM3T3pzN096czdPMEZEYkVkRU8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFYTkVPMEZCUlhwQ08wRkJiMFZrTEUxQlFVMHNXVUZCV1R0SlFXdERMMElzV1VGRFJTeEhRVUZWTEVWQlExWXNVVUZCZDBJc1JVRkRlRUlzVDBGQk5FSXNSVUZETlVJc1YwRkJkMEk3VVVGRmVFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNrUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0VFFVTndRenRSUVVORUxFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVYzdXVUZEY0VJc1ZVRkJWU3hGUVVGRkxFOUJRVTg3V1VGRGJrSXNiMEpCUVc5Q0xFVkJRVVVzVVVGQlVUdFpRVU01UWl4UlFVRlJMRVZCUVVVc1UwRkJVenRaUVVOdVFpeFJRVUZSTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRMnhDTEZOQlFWTXNSVUZCUlN4VlFVRlZPMWxCUTNKQ0xGTkJRVk1zUlVGQlJTeFRRVUZUTzFsQlEzQkNMRlZCUVZVc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZEY0VJc1MwRkJTeXhGUVVGRkxFbEJRVWs3V1VGRFdDeFBRVUZQTEVWQlFVVXNTVUZCU1R0WlFVTmlMRk5CUVZNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSVHRaUVVONlF5eFhRVUZYTEVWQlFVVXNUVUZCVFR0WlFVTnVRaXhsUVVGbExFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZETlVJc1owSkJRV2RDTEVWQlFVVXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkROMElzVTBGQlV5eEZRVUZGTEV0QlFVczdXVUZEYUVJc2MwSkJRWE5DTEVWQlFVVXNUMEZCVHp0WlFVTXZRaXhYUVVGWExFVkJRVVU3WjBKQlExZ3NSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRMDRzVlVGQlZTeEZRVUZGTEVkQlFVYzdZVUZEYUVJN1UwRkRSanRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NVVUZCVVR0UlFVTndRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVYzdVVUZEWkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkU3VVVGRGVFSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUE8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1YwRkJWenRSUVVVNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrN1VVRkRia0lzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1R0UlFVTjZRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVsQlFVazdVVUZEZWtJc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4SFFVRkhMRWxCUVVrN1VVRkRhRU1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1R0UlFVTjJRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVazdVVUZEY2tJc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTzFGQlJYaENMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzVVVGQlVUdFJRVU0xUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU03VVVGRGRFSXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEhRVUZITEVWQlFVVTdTVUZETlVJc1EwRkJRenRKUVVOTkxFbEJRVWtzUTBGQlF5eFBRVUUyUWp0UlFVTjJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVazdVVUZEYmtJc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xRkJRMnBDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRKUVVOMFFpeERRVUZETzBsQlEwMHNUVUZCVFR0UlFVTllMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEycENMRTlCUVUwN1UwRkRVRHRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTmtMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTzFOQlEzQkNPMUZCUlVRc2FVSkJRV2xDTzFGQlEycENMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFdEJRVXNzVDBGQlR5eEZRVUZGTzFsQlEycEZMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhGUVVGRk8xTkJRM1pETzJGQlFVMDdXVUZEVEN4UlFVRlJMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTzJkQ1FVTXZRaXhMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzI5Q1FVTmFMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRk8yOUNRVU55UXl4TlFVRkxPMmxDUVVOT08yZENRVU5FTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN2IwSkJRMlFzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVTdiMEpCUTNSRExFMUJRVXM3YVVKQlEwNDdaMEpCUTBRc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF6dHZRa0ZEV0N4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVTdiMEpCUTI1RExFMUJRVXM3YVVKQlEwNDdaMEpCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03YjBKQlExQXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhyUWtGQmEwSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF6dHBRa0ZET1VRN1lVRkRSanRUUVVOR08xRkJRMFFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU0zUWl4UFFVRlBMRWxCUVVrN1NVRkRZaXhEUVVGRE8wbEJRMDBzVDBGQlR5eERRVUZETEVsQlFXOUNPMUZCUTJwRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1R0SlFVTjBRaXhEUVVGRE8wbEJRMDBzVlVGQlZTeERRVUZETEU5QlFUUkNMRVZCUVVVc1RVRkJUU3hIUVVGSExFdEJRVXM3VVVGRE5VUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRE8xRkJRMjVFTEVsQlFVa3NUVUZCVFN4RlFVRkZPMWxCUTFZc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU5rTzBsQlEwZ3NRMEZCUXp0SlFVTkVMRzFDUVVGdFFqdEpRVU5hTEZWQlFWVTdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUE8wbEJRM0pDTEVOQlFVTTdTVUZEVFN4VFFVRlRPMUZCUTJRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRE4wUXNRMEZCUXp0SlFVTk5MRk5CUVZNN1VVRkRaQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNMVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRk8xTkJRelZDTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGRGNrSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVOVUxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRnhRaXhEUVVOMlJUdEpRVU5JTEVOQlFVTTdTVUZEVFN4UFFVRlBPMUZCUTFvc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTnFRenRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhGUVVGRk8xbEJRemRDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJRenRUUVVOb1JEdFJRVU5FTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWxCUVVrc1EwRkJRenRSUVVOc1JDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNN1NVRkRhRVFzUTBGQlF6dEpRVU5OTEdGQlFXRXNRMEZCUXl4UFFVRm5RanRSUVVOdVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4N1VVRkRkRUlzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTllMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRPVUk3WVVGQlRUdFpRVU5NTEVsQlFVa3NTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeEZRVUZGTzJkQ1FVTTNRaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1RVRkJUU3hGUVVGRk8yRkJRMjVETzFsQlEwUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTnFRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTMEZCWVR0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdTVUZEWml4RFFVRkRPMGxCUTAwc1ZVRkJWU3hEUVVGRExGZEJRVzFDTzFGQlEyNURMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eEhRVUZITEZkQlFWYzdVVUZEZEVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdEpRVU5tTEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1JVRkJWVHRSUVVOeVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzFsQlF6bENMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVN1owSkJRemxDTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRPMmRDUVVOeVF5eFBRVUZOTzJGQlExQTdVVUZEU0N4RFFVRkRMRU5CUVVNN1NVRkRTaXhEUVVGRE8wbEJRMDBzYjBKQlFXOUNPMUZCUTNwQ0xFOUJRVThzU1VGQlNTeERRVUZETEdsQ1FVRnBRanRKUVVNdlFpeERRVUZETzBsQlExTXNXVUZCV1R0UlFVTndRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTnFRaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc1VVRkJVU3hGUVVGRk8xbEJRekZDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFdEJRVXNzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVU3WjBKQlEyeEZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1lVRkRka003VTBGRFJqdGhRVUZOTzFsQlEwd3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTjJRenRKUVVOSUxFTkJRVU03U1VGRFV5eFZRVUZWTzFGQlEyeENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEycENMRTlCUVUwN1UwRkRVRHRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NTMEZCU3l4UlFVRlJMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1MwRkJTeXhQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSVHRuUWtGRGJFVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0aFFVTndRenRUUVVOR08yRkJRVTA3V1VGRFRDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFOQlEzQkRPMGxCUTBnc1EwRkJRenRKUVVORUxHRkJRV0U3U1VGRFNDeHBRa0ZCYVVJN1VVRkRla0lzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMWxCUTNCQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZPMU5CUXpGQ08xRkJRMFFzVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZCUXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVNM1JDeFRRVUZUTzFGQlExUXNaVUZCWlN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpORUxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhOUVVGblFpeERRVUZETzFGQlF6TkRMRU5CUVVNc1EwRkJRenRSUVVOR0xGTkJRVk03VVVGRFZDeGxRVUZsTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEY2tVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eGhRVUZoTEVWQlFVVTdaMEpCUXpsQ0xFdEJRVXM3WjBKQlEwd3NUVUZCVFR0aFFVTlFMRU5CUVVNN1VVRkRTaXhEUVVGRExFTkJRVU03VVVGRFJpeGpRVUZqTzFGQlEyUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJUdFpRVU40UWl4bFFVRmxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1owSkJRek5FTEhkQ1FVRjNRanRuUWtGRGVFSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8yOUNRVU4wUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGbEJRVmtzUlVGQlJUdHBRa0ZEYkVNN1owSkJRMFFzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4TlFVRm5RanRuUWtGRmNrTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTzI5Q1FVTnVReXc0UWtGQk9FSTdiMEpCUXpsQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNWMEZCVnl4RlFVRkZPMmxDUVVOcVF6dHhRa0ZCVFR0dlFrRkRUQ3h0UWtGQmJVSTdiMEpCUTI1Q0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVN2QwSkJRelZDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVNMVFpeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVNMVJEdHhRa0ZEUmp0cFFrRkRSanRaUVVOSUxFTkJRVU1zUTBGQlF6dFRRVU5JTzFGQlEwUXNaVUZCWlN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETzFGQlJYaERMR1ZCUVdVN1VVRkRaaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFGQlJYQkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzWlVGQlpUdFJRVU5zUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWE8wbEJRM3BDTEVOQlFVTTdTVUZEVXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZyUWp0UlFVTTFReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU03U1VGRE5VTXNRMEZCUXp0SlFVTlRMRmRCUVZjc1EwRkJReXhQUVVFMFFqdFJRVU5vUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbEZRVUZaTEVOQlEzcENMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRMjVDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUTFvc1QwRkJUeXhEUVVObE8wbEJRekZDTEVOQlFVTTdTVUZEVXl4WFFVRlhPMUZCUTI1Q0xHdENRVUZyUWp0UlFVTnNRaXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVN1VVRkRla0lzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhGUVVGRk8xRkJRekZDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRSUVVOcVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTzFsQlF6ZENMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCWVR0WlFVVnFSU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEN0RFFVRk5MRU5CUTNaQ0xFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUXpsRE8yZENRVU5GTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF6dGhRVU12UWl4RFFVTkdPMWxCUlVRc2EwSkJRV3RDTzFsQlEyeENMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlEzQkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTXpRaXhEUVVGRExFTkJRVU03U1VGRFNpeERRVUZETzBsQlExTXNWVUZCVlR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4WFFVRlhMRVZCUVVVc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeEpRVUZKTEVOQlFVTTdVVUZEYWtRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVVzU1VGQlNTeERRVUZETzBsQlF5OURMRU5CUVVNN1NVRkRSQ3hwUWtGQmFVSTdTVUZEVkN4clFrRkJhMElzUTBGQlF5eE5RVUZqTEVWQlFVVXNVMEZCYlVJN1VVRkROVVFzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4TlFVRk5PMUZCUXpOQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRkRUlzV1VGQldUdFpRVU5hTEVsQlFVa3NTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeEZRVUZGTzJkQ1FVTTNRaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdZVUZETDBNN1dVRkRSQ3hYUVVGWE8xbEJRMWdzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhIUVVGSExFbEJRVWtzSzBOQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVU3WjBKQlEzcEVMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJGQlEycEVMRU5CUVVNN1dVRkRSaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdXVUZEZWtNc1owSkJRV2RDTzFsQlEyaENMRWxCUVVrc1EwRkJReXh2UWtGQmIwSTdhVUpCUTNSQ0xGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzJsQ1FVTnFSQ3hUUVVGVExFVkJRVVU3V1VGRFpDeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4SFFVRkhMRVZCUVVVN1owSkJRemxETEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEY0VNc1EwRkJReXhEUVVGRE8xTkJRMGc3VVVGRFJDeE5RVUZOTEVOQlFVTXNXVUZCV1N4RlFVRkZPMUZCUlhKQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZET1VNc1NVRkJTU3hUUVVGVExFVkJRVVU3V1VGRFlpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8xTkJRM0JFTzFGQlEwUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhwUWtGQmFVSXNSVUZCUlN4TlFVRk5MRU5CUVVNN1NVRkROME1zUTBGQlF6dEpRVU5QTEd0Q1FVRnJRanRSUVVONFFpeFRRVUZUTzFGQlExUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRk8xbEJRM0pDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hGUVVGRk8xTkJRek5DTzFGQlEwUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1dVRkRka01zYTBKQlFXdENMRVZCUVVVc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03VTBGRGRrUXNRMEZCUXp0UlFVTkdMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVTBGQlV5eERRVU42UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUTNKQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NLME5CUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVTdaMEpCUTNaRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU4wUXl4RFFVRkRPMWxCUTBZc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1dVRkRNMElzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03V1VGRGJrVXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8xbEJRM2hFTEUxQlFVMHNRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJUdG5Ra0ZEZEVJc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRTFCUVUwc1EwRkJRenRaUVVOcVF5eERRVUZETEVOQlFVTTdXVUZEUml4UFFVRlBMRTFCUVUwN1VVRkRaaXhEUVVGRExFTkJRVU1zUTBGRFNEdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrN1NVRkRNVUlzUTBGQlF6dEpRVVZFTEdGQlFXRTdTVUZEVEN4bFFVRmxPMUZCUTNKQ0xFbEJRVWtzU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlR0WlFVTnNRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlR0VFFVTjRRanRSUVVORUxFMUJRVTBzU1VGQlNTeEhRVUZoTEVWQlFVVTdVVUZEZWtJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVNNVFpeE5RVUZOTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRMnBETEUxQlFVMHNZVUZCWVN4SFFVTnFRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eGhRVUZoTzFsQlEzQkZMRWxCUVVrc1IwRkJSeXhIUVVOTUxFTkJRVU1zWVVGQllTeEpRVUZKTEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZEYkVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnp0WlFVTTVRaXhKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRXNSVUZCUlR0blFrRkRNMElzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFZEJRVWM3WVVGRGJrTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dFpRVU5rTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVVUZEZWtRc1EwRkJReXhEUVVGRE8xRkJRMFlzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVNeFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUXpsQ0xFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4SFFVRkhPMWxCUTJ4Q0xFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4SFFVRkhPMWxCUTJ4Q0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZEV2l4RFFVRkRMRVZCUTBZc2FVVkJRVmtzUTBGQlF5eEZRVUZGTEZWQlFWVXNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVTTFSRHRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTTdTVUZEZGtJc1EwRkJRenRKUVVWUExHMUNRVUZ0UWl4RFFVRkRMRWxCUVd0Q08xRkJRelZETEU5QlFVOHNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETzBsQlEzaERMRU5CUVVNN1NVRkZUeXhoUVVGaExFTkJRVU1zU1VGQmEwSTdVVUZEZEVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNN1NVRkRla01zUTBGQlF6dEpRVVZFTERaQ1FVRTJRanRKUVVOeVFpeGpRVUZqTEVOQlEzQkNMRWxCUVd0Q0xFVkJRMnhDTEZGQlFXbENPMUZCUldwQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVVHRSUVVOMFF5eE5RVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlU3VVVGRE1VTXNUVUZCVFN4alFVRmpMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlJ6TkVPMUZCUTBRc1RVRkJUU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGSGFrVTdVVUZGUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTTdVVUZGZUVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlR0WlFVTTNRaXhMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzJkQ1FVTmFMR3RDUVVGclFqdG5Ra0ZEYkVJc2QwTkJRWGRETzJkQ1FVTjRReXh2UkVGQmIwUTdaMEpCUTNCRUxHZENRVUZuUWp0blFrRkRhRUlzUzBGQlN6dGhRVU5PTzFsQlEwUXNTMEZCU3l4WlFVRlpMRU5CUVVNN1dVRkRiRUlzUzBGQlN5eFJRVUZSTEVOQlFVTTdXVUZEWkN4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRE8yZENRVU5rTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJRenR2UWtGRFppeEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEVsQlFVa3NSVUZCUlR0M1FrRkRha01zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eFJRVUZSTzNkQ1FVTTVReXhUUVVGVE8zRkNRVU5XTEVOQlFVTTdiMEpCUTBZc1UwRkJVeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVTdiMEpCUTJ4RUxGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVUdHZRa0ZET1VNc1ZVRkJWU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEZWQlFWVTdiMEpCUTNCRUxHRkJRV0VzUlVGQlJTeFJRVUZSTzNkQ1FVTnlRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2QwSkJReTlDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2IwSkJRek5DTEZkQlFWY3NSVUZCUlN4UlFVRlJPM2RDUVVOdVFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZDBKQlF5OUNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03YVVKQlF6VkNMRU5CUVVNN1lVRkRTRHRaUVVORUxFOUJRVThzUTBGQlF5eERRVUZETzJkQ1FVTlFMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYTBKQlFXdENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdZVUZETTBRN1UwRkRSanRKUVVOSUxFTkJRVU03U1VGRFR5eHBRa0ZCYVVJc1EwRkRka0lzU1VGQmEwSXNSVUZEYkVJc1QwRkJPRUk3VVVGRk9VSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUlVGQlJUdFpRVU0zUWl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU03V1VGRGJFUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVWQlFVVXNUMEZCVHl4RFFVRkRPMU5CUTJoRU8xRkJRMFFzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVE8xRkJRMnhETEZGQlFWRXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNSVUZCUlR0WlFVTjZReXhMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTmlMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTTdaMEpCUXpsQ0xFMUJRVXM3WVVGRFRqdFpRVU5FTEV0QlFVc3NXVUZCV1N4RFFVRkRMRU5CUVVNN1owSkJRMnBDTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNTVUZCU1N4RFFVRkRPMmRDUVVONlF5eE5RVUZMTzJGQlEwNDdXVUZEUkN4TFFVRkxMRmRCUVZjc1EwRkJReXhEUVVGRE8yZENRVU5vUWl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVRkRMRWxCUVVrc1EwRkJRenRuUWtGRE1VTXNUVUZCU3p0aFFVTk9PMWxCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlExQXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkRZaXcwUWtGQk5FSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNSMEZCUnl4RFFVTnFSVHRoUVVOR08xTkJRMFk3VVVGRFJDeFJRVUZSTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRemRDTEZkQlFWYzdXVUZEV0N4TFFVRkxMRmxCUVZrc1EwRkJReXhEUVVGRE8yZENRVU5xUWl4UFFVRlBPM05DUVVOUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXpzN2RVSkJSWEpDTEV0QlFVczdNa0pCUTBRc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdPenRUUVVkeVF6dGhRVU5HTzFsQlEwUXNVMEZCVXp0WlFVTlVMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU03WjBKQlEySXNUMEZCVHpzN0swSkJSV2RDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWVHM3VTBGRk4wTTdZVUZEUmp0WlFVTkVMR0ZCUVdFN1dVRkRZaXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETzJkQ1FVTmtMRTlCUVU4N08zRkNRVVZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenM3ZFVKQlJYQkNMRXRCUVVzN01rSkJRMFFzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN096dGpRVWRvUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmM3TzFOQlJUZENPMkZCUTBZN1UwRkRSanRKUVVOSUxFTkJRVU03U1VGRFR5eHRRa0ZCYlVJN1VVRkRla0lzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRk8xbEJRMmhETEU5QlFVMDdVMEZEVUR0UlFVVkVMRTFCUVUwc1IwRkJSeXhIUVVGNVF5eEZRVUZGTzFGQlEzQkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXp0UlFVTjRReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRk8xbEJRemRDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJUdG5Ra0ZEY2tJc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRka1E3YVVKQlFVMDdaMEpCUTB3c1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnNRenRSUVVOSUxFTkJRVU1zUTBGQlF6dFJRVU5HTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETzFGQlEycERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eEZRVUZGTzFGQlF6TkNMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJUdFpRVU55UXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhQUVVGUE8xbEJRMjVDTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU5vUkN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU03WVVGRE4wTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1MwRkJTenRaUVVOdVF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVTXhRaXhKUVVGSk8yZENRVU5LTEV0QlFVczdaMEpCUTB3c1NVRkJTVHRoUVVOTUxFTkJRVU03VVVGRFNpeERRVUZETEVOQlFVTTdTVUZEU2l4RFFVRkRPMGxCUTA4c2MwSkJRWE5DTEVOQlFVTXNTVUZCYTBJN1VVRkRMME1zVDBGQlR5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03U1VGRGFrVXNRMEZCUXp0SlFVTlBMR3RDUVVGclFqdFJRVU40UWl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5PMUZCUXpORUxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNVVUZCVVR0UlFVTjBRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eFJRVUZSTzFGQlEzSkNMRXRCUVVzc1RVRkJUU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU03V1VGRE5VTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXp0WlFVTTVRaXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRE8xTkJReTlDTzFGQlEwUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMR1ZCUVdVN1VVRkRjRVFzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4TlFVRk5PMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1R0SlFVTXpRaXhEUVVGRE8wbEJRMDhzZFVKQlFYVkNMRU5CUVVNc1NVRkJhMEk3VVVGRGFFUXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRPMUZCUXpWRExFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVONFF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVU5zUlR0UlFVTkVMRTlCUVU4c1MwRkJTenRKUVVOa0xFTkJRVU03U1VGRFR5eGxRVUZsTEVOQlFVTXNTVUZCYTBJN1VVRkRlRU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRek5DTEU5QlFVOHNSVUZCUlR0VFFVTldPMUZCUTBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVNNVF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3VTBGRGNFVTdVVUZEUkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpsRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFdEJRM0JETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlEyNURMRVZCUVVVN1UwRkRTRHRKUVVOSUxFTkJRVU03U1VGRFR5eHJRa0ZCYTBJc1EwRkJReXhQUVVGNVFqdFJRVU5zUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeFRRVUZUTEVWQlFVVXNVMEZCVXl4RlFVRkZMRk5CUVZNc1EwRkJRenRSUVVNelJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTA3VVVGRGJrTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTzFGQlEyNURMRTFCUVUwc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTk8xRkJRelZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV6dFJRVU5zUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRE8xRkJRMklzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMSE5DUVVGelFpeExRVUZMTEU5QlFVOHNSVUZCUlR0WlFVTnVSQ3hMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGFFVXNTMEZCU3p0blFrRkRTQ3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVTBGQlV6dHZRa0ZEYkVVc1NVRkJTVHRUUVVOUU8xRkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMWxCUTJZc1NVRkJTU3hGUVVGRk96czdPenM3T3l0Q1FVOXRRaXhMUVVGTExFdEJRVXNzUzBGQlN6czdPenM3T3pCQ1FVMXdRaXcwUkVGQlR5eERRVUZETEV0QlFVc3NRMEZCUXpzN096czdPenM3T3pzN096QkNRVmxrTEV0QlFVczdPenM3T3pzN096czdPenM3T3pzN096czdPMWxCYjBKdVFpeFBRVUZQTEVOQlFVTXNZVUZCWVN4RlFVRkZPenM3VDBGSE5VSTdXVUZEUkN4UlFVRlJMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzFOQlEyNUNMRU5CUVVNN1NVRkRTaXhEUVVGRE8wTkJRMFk3T3pzN096czdPenM3T3pzN1FVTnFjMEpFTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVN0Q08wRkJRM0ZETzBGQlIzSkVMRTFCUVUwc1ZVRkJWeXhUUVVGUkxITkVRVUZoTzBsQlJXNUVMRmxCUTBVc1IwRkJWU3hGUVVOV0xGRkJRWGRDTEVWQlEzaENMRTlCUVRSQ0xFVkJRelZDTEZkQlFYZENPMUZCUlhoQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSU3hYUVVGWExFTkJRVU03VVVGRE1VTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVTk5MRTFCUVUwN1VVRkRXQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTnFRaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0VFFVTndRanRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSVHRSUVVOdVF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlF6ZENMSEZFUVVGeFJEdFJRVU55UkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8xRkJRM0JDTEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzFGQlEzQkNMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU03VVVGRFVDeFBRVUZQTEVsQlFVazdTVUZEWWl4RFFVRkRPMGxCUTAwc1lVRkJZU3hEUVVGRExFOUJRV2RDTzFGQlEyNURMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRhRU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVVN1owSkJRM2hDTEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5xUkR0UlFVTklMRU5CUVVNc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGRFV5eFRRVUZUTzFGQlEycENMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJRMDhzWVVGQllUdFJRVU51UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSVHRSUVVNMVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRk8xbEJRelZDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdaMEpCUTJoRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVGRk8yOUNRVU0zUkN4VFFVRlRMRVZCUVVVc1NVRkJTVHR2UWtGRFppeFRRVUZUTEVWQlFVVXNVVUZCVVR0cFFrRkRjRUlzUTBGQlF6dFpRVU5LTEVOQlFVTXNRMEZCUXp0VFFVTklPMGxCUTBnc1EwRkJRenRKUVVOUExHVkJRV1U3VVVGRGNrSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTzFGQlEyeERMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdFpRVU0xUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVczdXVUZET1VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEhOQ1FVRnpRaXhMUVVGTExGZEJRVmNzUlVGQlJUdG5Ra0ZEZGtRc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdZVUZEZWtRN1dVRkRSQ3hOUVVGTkxFOUJRVThzUjBGQmMwSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0blFrRkRha1VzUzBGQlN6dGhRVU5PTEVOQlFVTTdXVUZEUml4bFFVRmxPMWxCUTJZc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeG5SRUZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVOQlFVTTdXVUZETjBRc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1dVRkRja01zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRk8yZENRVU14UWl4dlEwRkJiME03V1VGRGRFTXNRMEZCUXl4RFFVRkRPMWxCUTBZc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlR0blFrRkRNVUlzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTJwRk8xbEJRMFFzVDBGQlR5eFZRVUZWTzFGQlEyNUNMRU5CUVVNc1EwRkJRenRSUVVOR0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRGFFTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETzFGQlEzSkRMRU5CUVVNc1EwRkJRenRSUVVOR0xFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWazdTVUZETVVJc1EwRkJRenRKUVVOUExGZEJRVmM3VVVGRGFrSXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5hTEU5QlFVMDdVMEZEVUR0UlFVTkVMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRMmhDTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZETjBJc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGRE9VTTdTVUZEU0N4RFFVRkRPMGxCUTA4c2FVSkJRV2xDTEVOQlFVTXNUMEZCWjBJN1VVRkRlRU1zVDBGQlR5eERRVU5NTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGRGJFVTdTVUZEU0N4RFFVRkRPMGxCUTA4c2EwSkJRV3RDTEVOQlFVTXNWVUZCYTBJN1VVRkRNME1zVDBGQlR5eFZRVUZWTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVN1NVRkROMElzUTBGQlF6dEpRVU5QTEdkQ1FVRm5RanRSUVVOMFFpeE5RVUZOTEVsQlFVa3NSMEZEVWl4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eExRVUZMTEZGQlFWRTdXVUZEZUVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXp0WlFVTjRRaXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTenRSUVVOc1F5eFBRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJPMkZCUTJwQ0xFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU03WVVGRGNrUXNUVUZCVFN4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTzFsQlEzSkNMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRPMUZCUXpkQ0xFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEVkN4RFFVRkRPME5CUTBZN096czdPenM3T3pzN096czdRVU14UjBRN1FVRkJRVHRCUVVGbExFMUJRVTBzVDBGQlVTeFRRVUZSTEVOQlFVTXNRMEZCUXl4UFFVRlBPMGxCUnpWRExGbEJRMFVzVDBGSE5FSXNSVUZETlVJc1QwRkJNa0k3VVVGRk0wSXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVTk5MRTlCUVU4c1EwRkJReXhKUVVGclFqdFJRVU12UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWs3U1VGRGNFSXNRMEZCUXp0SlFVTk5MRTlCUVU4N1VVRkRXaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTzBsQlEzQkNMRU5CUVVNN1EwRkRSanM3T3pzN096czdPenM3T3p0QlEzQkNSRHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUU0UkR0QlFVVXZRanRCUVUwdlFpeE5RVUZOTEdGQlFXRXNSMEZCUnl4VFFVRlRPMEZCWldoQ0xFMUJRVTBzWVVGQllUdEpRV3RDYUVNc1dVRkRSU3hIUVVGVkxFVkJRMVlzVVVGQmQwSXNSVUZEZUVJc1QwRkJORUlzUlVGRE5VSXNWMEZCZDBJN1VVRkZlRUlzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1dVRkRja1FzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4clFrRkJhMElzUTBGQlF6dFRRVU53UXp0UlFVVkVMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWM3V1VGRGNFSXNVMEZCVXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RlFVRkZPMWxCUTNwRExGZEJRVmNzUlVGQlJTeE5RVUZOTzFsQlEyNUNMRXRCUVVzc1JVRkJSU3hoUVVGaE8xbEJRM0JDTEVsQlFVa3NSVUZCUlN4SlFVRkpPMWxCUTFZc1UwRkJVeXhGUVVGRkxHRkJRV0U3V1VGRGVFSXNUVUZCVFN4RlFVRkZMRU5CUVVNN1dVRkRWQ3hQUVVGUExFVkJRVVVzUTBGQlF6dFpRVU5XTEZkQlFWY3NSVUZCUlN4SFFVRkhPMWxCUTJoQ0xITkNRVUZ6UWl4RlFVRkZMRkZCUVZFN1dVRkRhRU1zWlVGQlpTeEZRVUZGTEVOQlFVTXNZVUZCWVN4RFFVRkRPMU5CUTJwRE8xRkJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4VFFVRlRPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnp0UlFVTmtMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVUdFJRVU40UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbEZRVUZaTEVOQlEzcENMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRMjVDTEU5QlFVOHNRMEZEWlR0UlFVTjRRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZkQlFWYzdVVUZGT1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTzFGQlEyNUNMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUlVGQlJUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExGRkJRVkU3VVVGRE5VSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRE8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTVHRSUVVNeFFpeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFZEJRVWNzU1VGQlNUdEpRVU51UXl4RFFVRkRPMGxCUTAwc1NVRkJTU3hEUVVGRExFOUJRVFpDTzFGQlEzWkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVU3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRSUVVOb1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1NVRkRkRUlzUTBGQlF6dEpRVU5OTEUxQlFVMDdVVUZEV0N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5xUWl4UFFVRk5PMU5CUTFBN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEWkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU53UWp0UlFVTkVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhGUVVGRk8xRkJRM1JETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZETjBJc1QwRkJUeXhKUVVGSk8wbEJRMklzUTBGQlF6dEpRVU5OTEZOQlFWTTdVVUZEWkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNM1JDeERRVUZETzBsQlEwMHNVMEZCVXp0UlFVTmtMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpkQ0xFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVN1UwRkROVUk3VVVGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVONlFpeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRemRETEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUTFvc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUlVGRE0wTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkROVU1zUTBGRFJqdEpRVU5JTEVOQlFVTTdTVUZEVFN4UFFVRlBPMUZCUTFvc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTnFRenRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRk8xbEJRemxDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJRenRUUVVOcVJEdEpRVU5JTEVOQlFVTTdTVUZEVFN4aFFVRmhMRU5CUVVNc1QwRkJaMEk3VVVGRGJrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUE8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8xbEJRMllzVDBGQlRUdFRRVU5RTzFGQlEwUXNTVUZCU1N4UFFVRlBMRVZCUVVVN1dVRkRXQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xTkJRemxDTzJGQlFVMDdXVUZEVEN4SlFVRkpMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNSVUZCUlR0blFrRkRPVUlzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFMUJRVTBzUlVGQlJUdGhRVU53UXp0WlFVTkVMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRha003U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRXRCUVdFN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMGxCUTJZc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eEZRVUZWTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRhRU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJUdG5Ra0ZETDBJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU03WjBKQlEzWkRMRTlCUVUwN1lVRkRVRHRSUVVOSUxFTkJRVU1zUTBGQlF6dEpRVU5LTEVOQlFVTTdTVUZEUkN4dlEwRkJiME03U1VGRE1VSXNVMEZCVXl4TFFVRkpMRU5CUVVNN1NVRkRaQ3hwUWtGQmFVSXNRMEZCUXl4SlFVRnJRanRSUVVNMVF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTTdTVUZETlVNc1EwRkJRenRKUVVOVExHVkJRV1VzUTBGQlF5eEpRVUZyUWp0UlFVTXhReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVN1dVRkRNMElzVDBGQlR5eEZRVUZGTzFOQlExWTdVVUZEUkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpsRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1MwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRUUVVOd1JUdFJRVU5FTEVsQlFVa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZET1VNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1MwRkRjRU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGRGJrTXNSVUZCUlR0VFFVTklPMGxCUTBnc1EwRkJRenRKUVVOVExHdENRVUZyUWp0UlFVTXhRaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJReXhOUVVGTk8xRkJRek5FTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1VVRkJVVHRSUVVOMFFpeEpRVUZKTEUxQlFVMHNSMEZCUnl4UlFVRlJPMUZCUTNKQ0xFdEJRVXNzVFVGQlRTeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRaUVVOb1F5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTTdXVUZETlVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJRenRaUVVNNVFpeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETzFOQlF5OUNPMUZCUTBRc1RVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExHVkJRV1U3VVVGRGNFUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhOUVVGTk8xRkJRekZDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTVHRKUVVNelFpeERRVUZETzBsQlExTXNkMEpCUVhkQ0xFTkJRVU1zU1VGQmEwSTdVVUZEYmtRc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRE8xRkJRelZETEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVU40UXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVTnNSVHRSUVVORUxFOUJRVThzUzBGQlN6dEpRVU5rTEVOQlFVTTdTVUZEVXl4dFFrRkJiVUlzUTBGQlF5eFBRVUZuUWl4RlFVRkZMRk5CUVcxQ08xRkJRMnBGTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1QwRkJUenRSUVVNM1FpeGpRVUZqTzFGQlEyUXNTVUZCU1N4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVTdXVUZET1VJc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRUUVVOd1F6dFJRVU5FTEdGQlFXRTdVVUZEWWl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVkQlFVY3NTVUZCU1N4blJFRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlR0WlFVTTNSQ3hMUVVGTExFVkJRVVVzWVVGQllUdFpRVU53UWl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1UwRkROVU1zUTBGQlF6dFJRVU5HTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVVeFF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ08yRkJRM1pDTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTJ4RUxGTkJRVk1zUlVGQlJUdFJRVVZrTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVNdlF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTzFGQlEzSkRMRU5CUVVNc1EwRkJRenRSUVVOR0xFOUJRVThzUTBGQlF5eFpRVUZaTEVWQlFVVTdVVUZGZEVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUTNSRUxFbEJRVWtzVTBGQlV5eEZRVUZGTzFsQlEySXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMU5CUTNoRE8xRkJRMFFzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4clFrRkJhMElzUlVGQlJTeFBRVUZQTEVOQlFVTTdTVUZETDBNc1EwRkJRenRKUVVOVExGZEJRVmNzUTBGQlF5eFBRVUUwUWp0UlFVTm9SQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsRlFVRlpMRU5CUTNwQ0xFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlEyNUNMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRMW9zVDBGQlR5eERRVU5sTzBsQlF6RkNMRU5CUVVNN1NVRkRVeXhaUVVGWk8xRkJRM0JDTEd0Q1FVRnJRanRSUVVOc1FpeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVU3VVVGRGVrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhGUVVGRk8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdXVUZETjBJc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NaMFJCUVU4c1EwRkJSU3hMUVVGdFFpeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMWxCUlRsRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVNM1FpeERRVUZETEVOQlFVTTdTVUZEU2l4RFFVRkRPMGxCUTA4c2EwSkJRV3RDTzFGQlEzaENMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlR0UlFVTnNReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZETlVNc1RVRkJUU3hQUVVGUExFZEJRWE5DTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUTJwRkxFdEJRVXNzUlVGQlJTeGhRVUZoTzJkQ1FVTndRaXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WVVGRE5VTXNRMEZCUXp0WlFVTkdMR1ZCUVdVN1dVRkRaaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEdkRVFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXp0WlFVTTNSQ3hWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRaUVVOeVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRk8yZENRVU0xUWl4VlFVRlZMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnlSVHRaUVVORUxGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSVHRuUWtGRE1VSXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEU5QlFVOHNRMEZCUXp0WlFVTnVReXhEUVVGRExFTkJRVU03V1VGRFJpeFBRVUZQTEZWQlFWVTdVVUZEYmtJc1EwRkJReXhEUVVGRE8xRkJRMFlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdFpRVU5vUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEY2tNc1EwRkJReXhEUVVGRE8xRkJRMFlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1R0SlFVTXhRaXhEUVVGRE8wbEJRMDhzVVVGQlVTeERRVUZETEVsQlFXdENMRVZCUVVVc1NVRkJaMEk3VVVGRGJrUXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTzFGQlF6bENMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eHpRa0ZCYzBJc1MwRkJTeXhYUVVGWExFVkJRVVU3V1VGRGRrUXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4SlFVRkpMRU5CUVVNN1UwRkROVU03VVVGRFJDeFJRVUZSTEVsQlFVa3NSVUZCUlR0WlFVTmFMRXRCUVVzc1VVRkJVVHRuUWtGRFdDeFBRVUZQTERKRVFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRM1JDTEV0QlFVc3NVMEZCVXp0blFrRkRXaXhQUVVGUExEUkVRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUTNaQ08yZENRVU5GTEU5QlFVOHNTMEZCU3p0VFFVTm1PMGxCUTBnc1EwRkJRenREUVVOR096czdPenM3T3pzN096czdPMEZEZEZGRU8wRkJRVUU3UVVGQlpTeE5RVUZOTEZGQlFWTXNVMEZCVVN4RFFVRkRMRU5CUVVNc1VVRkJVVHRKUVVjNVF5eFpRVUZaTEU5QlFXbERMRVZCUVVVc1QwRkJNa0k3VVVGRGVFVXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVTk5MRTlCUVU4c1EwRkJReXhKUVVGclFqdFJRVU12UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWs3U1VGRGNFSXNRMEZCUXp0SlFVTk5MRTlCUVU4N1VVRkRXaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTzBsQlEzQkNMRU5CUVVNN1EwRkRSanM3T3pzN096czdPenM3T3p0QlEyaENSRHRCUVVGQk8wRkJRVUU3UVVGQk5rTTdRVUZyUWpsQ0xFMUJRVTBzYjBKQlFYRkNMRk5CUVZFc2RVUkJRV003U1VGSE9VUXNXVUZEUlN4SFFVRlZMRVZCUTFZc1VVRkJkMElzUlVGRGVFSXNUMEZCYlVNc1JVRkRia01zVjBGQmQwSTdVVUZGZUVJc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeFJRVUZSTEVWQlFVVXNUMEZCVHl4RlFVRkZMRmRCUVZjc1EwRkJRenRSUVVNeFF5eE5RVUZOTEdOQlFXTXNSMEZCSzBJN1dVRkRha1FzZFVKQlFYVkNMRVZCUVVVc1VVRkJVVHRaUVVOcVF5eGxRVUZsTEVWQlFVVXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkROVUlzVVVGQlVTeEZRVUZGTEVkQlFVYzdXVUZEWWl4TFFVRkxMRVZCUVVVc1UwRkJVenRaUVVOb1FpeFBRVUZQTEVWQlFVVXNSMEZCUnp0VFFVTmlPMUZCUTBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eG5Ra0ZCWjBJN1VVRkROVUlzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhPMUZCUTJRc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTzFGQlEzaENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR6dFJRVU4wUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGZEJRVmM3VVVGRk9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSk8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSVHRSUVVOdVFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRkZCUVZFN1VVRkROVUlzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRPMUZCUTNSQ0xEaENRVUU0UWp0UlFVVTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxHTkJRV01zUlVGQlJTeFBRVUZQTEVOQlFVTTdTVUZETTBRc1EwRkJRenRKUVVOTkxFbEJRVWtzUTBGQlF5eFBRVUZ2UXp0UlFVTTVReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTTdVVUZEYmtRc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJUdFJRVU53UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3U1VGRGRFSXNRMEZCUXp0SlFVTk5MRTFCUVUwN1VVRkRXQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTnFRaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0VFFVTndRanRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMSGxDUVVGNVFpeEZRVUZGTzFGQlF6ZERMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkROMElzVDBGQlR5eEpRVUZKTzBsQlEySXNRMEZCUXp0SlFVTk5MRk5CUVZNN1VVRkRaQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03U1VGRGRFTXNRMEZCUXp0SlFVTk5MRk5CUVZNN1VVRkRaQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNNVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRk8xTkJRelZDTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGRE1VSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEZRVU0zUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVTTVRanRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTMEZCWVR0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdTVUZEWml4RFFVRkRPMGxCUTA4c2VVSkJRWGxDTzFGQlF5OUNMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlR0UlFVTnVReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRk8xbEJRMnhETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJUdG5Ra0ZEZUVJc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRkZCUVZFc1EwRkJRenRaUVVOeVF5eERRVUZETEVOQlFVTTdXVUZEUml4TlFVRk5MRTlCUVU4c1IwRkJLMElzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZEZGtRc1JVRkJSU3hGUVVOR0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlExbzdaMEpCUTBVc1MwRkJTeXhGUVVOSUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNkVUpCUVhWQ0xFdEJRVXNzVVVGQlVUdHZRa0ZETDBNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3p0dlFrRkRjRUlzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1lVRkRla1FzUTBGRFJqdFpRVVZFTEUxQlFVMHNZMEZCWXl4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRemxDTEZGQlFWRXNRMEZCUXl4VlFVRlZMRVZCUVdsQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkRia1FzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUTI1RExFVkJRMFFzVDBGQlR5eERRVU5TTzFsQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUlVGQlJUdG5Ra0ZETlVJc1kwRkJZeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRka1U3V1VGRFJDeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU03VVVGRE4wTXNRMEZCUXl4RFFVRkRPMUZCUTBZc1QwRkJUeXhKUVVGSkxFTkJRVU1zWVVGQllUdEpRVU16UWl4RFFVRkRPME5CUTBZN096czdPenM3T3pzN096czdRVU12UjBRN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQkswUTdRVUZEUkR0QlFXMUNMME1zVFVGQlRTeGpRVUZqTzBsQmFVSnFReXhaUVVORkxFZEJRVlVzUlVGRFZpeFJRVUYzUWl4RlFVTjRRaXhQUVVFMlFpeEZRVU0zUWl4WFFVRjNRanRSUVVWNFFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRaUVVOeVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMR3RDUVVGclFpeERRVUZETzFOQlEzQkRPMUZCUTBRc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ6dFpRVU53UWl4TFFVRkxMRVZCUVVVc1UwRkJVenRaUVVOb1FpeDFRa0ZCZFVJc1JVRkJSU3hSUVVGUk8xbEJRMnBETEdWQlFXVXNSVUZCUlN4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVNMVFpeFRRVUZUTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVTdXVUZEZWtNc1YwRkJWeXhGUVVGRkxFMUJRVTA3VTBGRGNFSTdVVUZEUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExGVkJRVlU3VVVGRGRFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSE8xRkJRMlFzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJPMUZCUTNoQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVVZCUVZrc1EwRkRla0lzU1VGQlNTeERRVUZETEdOQlFXTXNSVUZEYmtJc1QwRkJUeXhEUVVOblFqdFJRVU42UWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGZEJRVmM3VVVGRk9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSk8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSVHRSUVVOdVFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRkZCUVZFN1VVRkROVUlzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NTVUZCU1R0UlFVTXpRaXhKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1NVRkJTVHRKUVVOd1F5eERRVUZETzBsQlEwMHNTVUZCU1N4RFFVRkRMRTlCUVRoQ08xRkJRM2hETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRE8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVN1VVRkRjRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMGxCUTNSQ0xFTkJRVU03U1VGRFRTeE5RVUZOTzFGQlExZ3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGRGFrSXNUMEZCVFR0VFFVTlFPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3VTBGRGNFSTdVVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSVHRSUVVOMlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlF6ZENMRTlCUVU4c1NVRkJTVHRKUVVOaUxFTkJRVU03U1VGRFRTeFRRVUZUTzFGQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkROMFFzUTBGQlF6dEpRVU5OTEZOQlFWTTdVVUZEWkN4SlFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTVRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RlFVRkZPMU5CUXpWQ08xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkRNVUlzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhGUVVNM1F5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVTmFMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFVkJRelZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUXpkRExFTkJRMFk3U1VGRFNDeERRVUZETzBsQlEwMHNUMEZCVHp0UlFVTmFMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5rTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZEYWtNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzWVVGQllTeERRVUZETEU5QlFXZENPMUZCUTI1RExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHp0UlFVTjBRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTm1MRTlCUVUwN1UwRkRVRHRSUVVORUxFbEJRVWtzVDBGQlR5eEZRVUZGTzFsQlExZ3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTTVRanRoUVVGTk8xbEJRMHdzU1VGQlNTeEpRVUZKTEVOQlFVTXNjMEpCUVhOQ0xFVkJRVVU3WjBKQlF5OUNMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNRMEZCUXl4TlFVRk5MRVZCUVVVN1lVRkRja003V1VGRFJDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFOQlEycERPMGxCUTBnc1EwRkJRenRKUVVOTkxGZEJRVmNzUTBGQlF5eExRVUZoTzFGQlF6bENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEV0QlFVczdVVUZET1VJc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdEpRVU5tTEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1JVRkJWVHRSUVVOeVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTzFsQlEyeERMRWxCUVVrc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVN1owSkJRMmhETEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRPMmRDUVVONlF5eFBRVUZOTzJGQlExQTdVVUZEU0N4RFFVRkRMRU5CUVVNN1NVRkRTaXhEUVVGRE8wbEJRMU1zVjBGQlZ5eERRVUZETEU5QlFUWkNPMUZCUTJwRUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NhVVZCUVZrc1EwRkRla0lzU1VGQlNTeERRVUZETEdOQlFXTXNSVUZEYmtJc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGRFdpeFBRVUZQTEVOQlEyZENPMGxCUXpOQ0xFTkJRVU03U1VGRFV5eGhRVUZoTzFGQlEzSkNMR3RDUVVGclFqdFJRVU5zUWl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVTdVVUZGZWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTzFsQlF6RkRMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlSQ3hwUTBGQmFVTTdXVUZEYWtNc09FUkJRVGhFTzFsQlF6bEVMR2xFUVVGcFJEdFpRVU5xUkN4SlFVRkpPMWxCUTBvc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeHBSRUZCVVN4RFFVTXhRaXhMUVVGdlFpeERRVUZETEZWQlFWVXNSVUZCT0VJc1EwRkRMMFE3V1VGRlJDeHJRa0ZCYTBJN1dVRkRiRUlzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNN1dVRkZkRUlzVDBGQlR5eFJRVUZSTzFGQlEycENMRU5CUVVNc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGRFV5eDVRa0ZCZVVJc1EwRkJReXhKUVVGclFqdFJRVU53UkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4aFFVRmhMRU5CUVVNN1VVRkROVU1zVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRM2hETEZGQlFWRXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlEyeEZPMUZCUTBRc1QwRkJUeXhMUVVGTE8wbEJRMlFzUTBGQlF6dEpRVU5UTEc5Q1FVRnZRaXhEUVVGRExGRkJRV3RDTEVWQlFVVXNVMEZCYlVJN1VVRkRjRVVzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4UlFVRlJPMUZCUXk5Q0xHTkJRV003VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUlVGQlJUdFpRVU12UWl4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNUVUZCVFN4RlFVRkZPMU5CUTNKRE8xRkJRMFFzWVVGQllUdFJRVU5pTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEpRVUZKTEdsRVFVRlJMRU5CUTNoRExGRkJRVkVzUTBGQlF5eFZRVUZWTEVWQlFUaENMRVZCUTJwRU8xbEJRMFVzUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFsQlEzaERMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJSU3hSUVVGUkxFTkJRVU03VTBGRGRrUXNRMEZEUmp0UlFVTkVMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dFJRVVV6UXl4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTzJGQlEzaENMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRMjVFTEZOQlFWTXNSVUZCUlR0UlFVVmtMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFZEJRVWNzUlVGQlJUdFpRVU5vUkN4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNUVUZCVFN4RlFVRkZPMUZCUTNSRExFTkJRVU1zUTBGQlF6dFJRVVZHTEZGQlFWRXNRMEZCUXl4WlFVRlpMRVZCUVVVN1VVRkZka0lzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xRkJRM1pFTEVsQlFVa3NVMEZCVXl4RlFVRkZPMWxCUTJJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xTkJRM3BETzFGQlEwUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4UlFVRlJMRU5CUVVNN1NVRkRha1FzUTBGQlF6dEpRVU5UTEdsQ1FVRnBRaXhEUVVGRExFbEJRV3RDTzFGQlF6VkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVNMVF5eERRVUZETzBsQlExTXNaVUZCWlN4RFFVRkRMRWxCUVd0Q08xRkJRekZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU16UWl4UFFVRlBMRVZCUVVVN1UwRkRWanRSUVVORUxFbEJRVWtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1MwRkJTeXhSUVVGUkxFVkJRVVU3V1VGRE9VTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzFOQlEzQkZPMUZCUTBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVNNVF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eExRVU53UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVTnVReXhGUVVGRk8xTkJRMGc3U1VGRFNDeERRVUZETzBsQlEwOHNiVUpCUVcxQ08xRkJRM3BDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJUdFJRVU51UXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZPMWxCUTJ4RExFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTenRaUVVNNVFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2RVSkJRWFZDTEV0QlFVc3NWMEZCVnl4RlFVRkZPMmRDUVVONFJDeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMSGxDUVVGNVFpeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRoUVVNelJEdFpRVU5FTEUxQlFVMHNUMEZCVHl4SFFVRnpRaXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8yZENRVU5xUlN4TFFVRkxPMkZCUTA0c1EwRkJRenRaUVVOR0xFMUJRVTBzVjBGQlZ5eEhRVUZITEVsQlFVa3NhVVJCUVZFc1EwRkRPVUlzVVVGQlVTeERRVUZETEZWQlFWVXNSVUZCT0VJc1JVRkRha1FzVDBGQlR5eERRVU5TTzFsQlEwUXNWMEZCVnl4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTzJkQ1FVTXpRaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1VVRkJVU3hEUVVGRE8xbEJRM0pETEVOQlFVTXNRMEZCUXp0WlFVTkdMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMWxCUTNaRExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVN1owSkJRelZDTEZkQlFWY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzWkZPMWxCUTBRc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUXpGRExFTkJRVU1zUTBGQlF6dFJRVU5HTEU5QlFVOHNTVUZCU1N4RFFVRkRMR0ZCUVdFN1NVRkRNMElzUTBGQlF6dEpRVU5QTEd0Q1FVRnJRanRSUVVONFFpeE5RVUZOTEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eE5RVUZOTzFGQlF6TkVMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zVVVGQlVUdFJRVU4wUWl4SlFVRkpMRTFCUVUwc1IwRkJSeXhSUVVGUk8xRkJRM0pDTEV0QlFVc3NUVUZCVFN4SlFVRkpMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJUdFpRVU5vUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4aFFVRmhMRU5CUVVNN1dVRkROVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF6dFpRVU01UWl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRPMU5CUXk5Q08xRkJRMFFzVFVGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEdWQlFXVTdVVUZEY0VRc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eE5RVUZOTzFGQlF6RkNMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNUdEpRVU16UWl4RFFVRkRPMGxCUTA4c1VVRkJVU3hEUVVGRExFbEJRV3RDTEVWQlFVVXNTVUZCWjBJN1VVRkRia1FzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTE8xRkJRemxDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXgxUWtGQmRVSXNTMEZCU3l4WFFVRlhMRVZCUVVVN1dVRkRlRVFzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eEpRVUZKTEVOQlFVTTdVMEZETjBNN1VVRkRSQ3hSUVVGUkxFbEJRVWtzUlVGQlJUdFpRVU5hTEV0QlFVc3NVVUZCVVR0blFrRkRXQ3hQUVVGUExESkVRVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUTNSQ0xFdEJRVXNzVTBGQlV6dG5Ra0ZEV2l4UFFVRlBMRFJFUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETzFsQlEzWkNPMmRDUVVORkxFOUJRVThzUzBGQlN6dFRRVU5tTzBsQlEwZ3NRMEZCUXp0RFFVTkdPenM3T3pzN096czdPenM3TzBGRE1WRkVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUU0UWp0QlFVVTVRaXhUUVVGVExFOUJRVThzUTBGQlF5eFJRVUZuUWp0SlFVTXZRaXhQUVVGUExHdERRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRPMU5CUTI1Q0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTTdVMEZEV2l4SFFVRkhMRVZCUVVVN1FVRkRWaXhEUVVGRE8wRkJRMFFzVTBGQlV5eE5RVUZOTEVOQlFVTXNVVUZCWjBJN1NVRkRPVUlzVDBGQlR5eHJRMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJRenRUUVVOdVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMU5CUTFnc1IwRkJSeXhGUVVGRk8wRkJRMVlzUTBGQlF6dEJRVVZFTEZOQlFWTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1QwRkJZenRKUVVOeVF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRM2hDTEU5QlFVOHNSVUZCUlR0TFFVTldPMGxCUTBRc1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0UlFVTjRRaXhQUVVGUExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZEYkVJN1NVRkRSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNwQ0xFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRk8xRkJRelZDTEVsQlFVa3NSMEZCUnl4SlFVRkpMRTFCUVUwc1JVRkJSVHRaUVVOcVFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1MwRkJTeXhwUWtGQmFVSXNSVUZCUlR0blFrRkRja1VzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzcEVPMmxDUVVGTk8yZENRVU5NTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRPMkZCUXpsQ08xTkJRMFk3WVVGQlRUdFpRVU5NTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRPMU5CUXpsQ08wdEJRMFk3U1VGRFJDeFBRVUZQTEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJ4RUxFTkJRVU03UVVGRll6dEpRVU5pTEU5QlFVODdTVUZEVUN4TlFVRk5PMGxCUTA0c1dVRkJXVHREUVVOaU8wRkJRM1ZESWl3aVptbHNaU0k2SW14bFlXWnNaWFF0YkdGNVpYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0Z2QyVmljR0ZqYTFWdWFYWmxjbk5oYkUxdlpIVnNaVVJsWm1sdWFYUnBiMjRvY205dmRDd2dabUZqZEc5eWVTa2dlMXh1WEhScFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY2dKaVlnZEhsd1pXOW1JRzF2WkhWc1pTQTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1JsWm1sdVpTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQmtaV1pwYm1VdVlXMWtLVnh1WEhSY2RHUmxabWx1WlNoYlhTd2dabUZqZEc5eWVTazdYRzVjZEdWc2MyVWdhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuS1Z4dVhIUmNkR1Y0Y0c5eWRITmJYQ0pzWldGbWJHVjBUV0Z3WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1WEhSbGJITmxYRzVjZEZ4MGNtOXZkRnRjSW14bFlXWnNaWFJOWVhCY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1OUtTaDNhVzVrYjNjc0lHWjFibU4wYVc5dUtDa2dlMXh1Y21WMGRYSnVJQ0lzSWlCY2RDOHZJRlJvWlNCdGIyUjFiR1VnWTJGamFHVmNiaUJjZEhaaGNpQnBibk4wWVd4c1pXUk5iMlIxYkdWeklEMGdlMzA3WEc1Y2JpQmNkQzh2SUZSb1pTQnlaWEYxYVhKbElHWjFibU4wYVc5dVhHNGdYSFJtZFc1amRHbHZiaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0cxdlpIVnNaVWxrS1NCN1hHNWNiaUJjZEZ4MEx5OGdRMmhsWTJzZ2FXWWdiVzlrZFd4bElHbHpJR2x1SUdOaFkyaGxYRzRnWEhSY2RHbG1LR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRLU0I3WEc0Z1hIUmNkRngwY21WMGRYSnVJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbVY0Y0c5eWRITTdYRzRnWEhSY2RIMWNiaUJjZEZ4MEx5OGdRM0psWVhSbElHRWdibVYzSUcxdlpIVnNaU0FvWVc1a0lIQjFkQ0JwZENCcGJuUnZJSFJvWlNCallXTm9aU2xjYmlCY2RGeDBkbUZ5SUcxdlpIVnNaU0E5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkSUQwZ2UxeHVJRngwWEhSY2RHazZJRzF2WkhWc1pVbGtMRnh1SUZ4MFhIUmNkR3c2SUdaaGJITmxMRnh1SUZ4MFhIUmNkR1Y0Y0c5eWRITTZJSHQ5WEc0Z1hIUmNkSDA3WEc1Y2JpQmNkRngwTHk4Z1JYaGxZM1YwWlNCMGFHVWdiVzlrZFd4bElHWjFibU4wYVc5dVhHNGdYSFJjZEcxdlpIVnNaWE5iYlc5a2RXeGxTV1JkTG1OaGJHd29iVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlN3Z2JXOWtkV3hsTG1WNGNHOXlkSE1zSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4cE8xeHVYRzRnWEhSY2RDOHZJRVpzWVdjZ2RHaGxJRzF2WkhWc1pTQmhjeUJzYjJGa1pXUmNiaUJjZEZ4MGJXOWtkV3hsTG13Z1BTQjBjblZsTzF4dVhHNGdYSFJjZEM4dklGSmxkSFZ5YmlCMGFHVWdaWGh3YjNKMGN5QnZaaUIwYUdVZ2JXOWtkV3hsWEc0Z1hIUmNkSEpsZEhWeWJpQnRiMlIxYkdVdVpYaHdiM0owY3p0Y2JpQmNkSDFjYmx4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlhNZ2IySnFaV04wSUNoZlgzZGxZbkJoWTJ0ZmJXOWtkV3hsYzE5ZktWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dElEMGdiVzlrZFd4bGN6dGNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WXlBOUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHUmxabWx1WlNCblpYUjBaWElnWm5WdVkzUnBiMjRnWm05eUlHaGhjbTF2Ym5rZ1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrSUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3l3Z2JtRnRaU3dnWjJWMGRHVnlLU0I3WEc0Z1hIUmNkR2xtS0NGZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtOG9aWGh3YjNKMGN5d2dibUZ0WlNrcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnYm1GdFpTd2dleUJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMQ0JuWlhRNklHZGxkSFJsY2lCOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUY5ZlpYTk5iMlIxYkdVZ2IyNGdaWGh3YjNKMGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eUlEMGdablZ1WTNScGIyNG9aWGh3YjNKMGN5a2dlMXh1SUZ4MFhIUnBaaWgwZVhCbGIyWWdVM2x0WW05c0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQlRlVzFpYjJ3dWRHOVRkSEpwYm1kVVlXY3BJSHRjYmlCY2RGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbkxDQjdJSFpoYkhWbE9pQW5UVzlrZFd4bEp5QjlLVHRjYmlCY2RGeDBmVnh1SUZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnSjE5ZlpYTk5iMlIxYkdVbkxDQjdJSFpoYkhWbE9pQjBjblZsSUgwcE8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1kzSmxZWFJsSUdFZ1ptRnJaU0J1WVcxbGMzQmhZMlVnYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ01Ub2dkbUZzZFdVZ2FYTWdZU0J0YjJSMWJHVWdhV1FzSUhKbGNYVnBjbVVnYVhSY2JpQmNkQzh2SUcxdlpHVWdKaUF5T2lCdFpYSm5aU0JoYkd3Z2NISnZjR1Z5ZEdsbGN5QnZaaUIyWVd4MVpTQnBiblJ2SUhSb1pTQnVjMXh1SUZ4MEx5OGdiVzlrWlNBbUlEUTZJSEpsZEhWeWJpQjJZV3gxWlNCM2FHVnVJR0ZzY21WaFpIa2dibk1nYjJKcVpXTjBYRzRnWEhRdkx5QnRiMlJsSUNZZ09Id3hPaUJpWldoaGRtVWdiR2xyWlNCeVpYRjFhWEpsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMblFnUFNCbWRXNWpkR2x2YmloMllXeDFaU3dnYlc5a1pTa2dlMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdNU2tnZG1Gc2RXVWdQU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0haaGJIVmxLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRGdwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGFXWW9LRzF2WkdVZ0ppQTBLU0FtSmlCMGVYQmxiMllnZG1Gc2RXVWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIWmhiSFZsSUNZbUlIWmhiSFZsTGw5ZlpYTk5iMlIxYkdVcElISmxkSFZ5YmlCMllXeDFaVHRjYmlCY2RGeDBkbUZ5SUc1eklEMGdUMkpxWldOMExtTnlaV0YwWlNodWRXeHNLVHRjYmlCY2RGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5S0c1ektUdGNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRzV6TENBblpHVm1ZWFZzZENjc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2dkbUZzZFdVNklIWmhiSFZsSUgwcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ01pQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ0lUMGdKM04wY21sdVp5Y3BJR1p2Y2loMllYSWdhMlY1SUdsdUlIWmhiSFZsS1NCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9ibk1zSUd0bGVTd2dablZ1WTNScGIyNG9hMlY1S1NCN0lISmxkSFZ5YmlCMllXeDFaVnRyWlhsZE95QjlMbUpwYm1Rb2JuVnNiQ3dnYTJWNUtTazdYRzRnWEhSY2RISmxkSFZ5YmlCdWN6dGNiaUJjZEgwN1hHNWNiaUJjZEM4dklHZGxkRVJsWm1GMWJIUkZlSEJ2Y25RZ1puVnVZM1JwYjI0Z1ptOXlJR052YlhCaGRHbGlhV3hwZEhrZ2QybDBhQ0J1YjI0dGFHRnliVzl1ZVNCdGIyUjFiR1Z6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTRnUFNCbWRXNWpkR2x2YmlodGIyUjFiR1VwSUh0Y2JpQmNkRngwZG1GeUlHZGxkSFJsY2lBOUlHMXZaSFZzWlNBbUppQnRiMlIxYkdVdVgxOWxjMDF2WkhWc1pTQS9YRzRnWEhSY2RGeDBablZ1WTNScGIyNGdaMlYwUkdWbVlYVnNkQ2dwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVnNuWkdWbVlYVnNkQ2RkT3lCOUlEcGNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJOYjJSMWJHVkZlSEJ2Y25SektDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bE95QjlPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFvWjJWMGRHVnlMQ0FuWVNjc0lHZGxkSFJsY2lrN1hHNGdYSFJjZEhKbGRIVnliaUJuWlhSMFpYSTdYRzRnWEhSOU8xeHVYRzRnWEhRdkx5QlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHeGNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5QTlJR1oxYm1OMGFXOXVLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BJSHNnY21WMGRYSnVJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2h2WW1wbFkzUXNJSEJ5YjNCbGNuUjVLVHNnZlR0Y2JseHVJRngwTHk4Z1gxOTNaV0p3WVdOclgzQjFZbXhwWTE5d1lYUm9YMTljYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjQ0E5SUZ3aVhDSTdYRzVjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNCY0lpNHZjM0pqTDJsdVpHVjRMblJ6WENJcE8xeHVJaXdpTHlvZ1RVbFVJR3hwWTJWdWMyVWdLaTljYm5aaGNpQmpjM05MWlhsM2IzSmtjeUE5SUhKbGNYVnBjbVVvSjJOdmJHOXlMVzVoYldVbktUdGNibHh1THk4Z1RrOVVSVG9nWTI5dWRtVnljMmx2Ym5NZ2MyaHZkV3hrSUc5dWJIa2djbVYwZFhKdUlIQnlhVzFwZEdsMlpTQjJZV3gxWlhNZ0tHa3VaUzRnWVhKeVlYbHpMQ0J2Y2x4dUx5OGdJQ0FnSUNBZ2RtRnNkV1Z6SUhSb1lYUWdaMmwyWlNCamIzSnlaV04wSUdCMGVYQmxiMlpnSUhKbGMzVnNkSE1wTGx4dUx5OGdJQ0FnSUNBZ1pHOGdibTkwSUhWelpTQmliM2dnZG1Gc2RXVnpJSFI1Y0dWeklDaHBMbVV1SUU1MWJXSmxjaWdwTENCVGRISnBibWNvS1N3Z1pYUmpMaWxjYmx4dWRtRnlJSEpsZG1WeWMyVkxaWGwzYjNKa2N5QTlJSHQ5TzF4dVptOXlJQ2gyWVhJZ2EyVjVJR2x1SUdOemMwdGxlWGR2Y21SektTQjdYRzVjZEdsbUlDaGpjM05MWlhsM2IzSmtjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNWNkRngwY21WMlpYSnpaVXRsZVhkdmNtUnpXMk56YzB0bGVYZHZjbVJ6VzJ0bGVWMWRJRDBnYTJWNU8xeHVYSFI5WEc1OVhHNWNiblpoY2lCamIyNTJaWEowSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN1hHNWNkSEpuWWpvZ2UyTm9ZVzV1Wld4ek9pQXpMQ0JzWVdKbGJITTZJQ2R5WjJJbmZTeGNibHgwYUhOc09pQjdZMmhoYm01bGJITTZJRE1zSUd4aFltVnNjem9nSjJoemJDZDlMRnh1WEhSb2MzWTZJSHRqYUdGdWJtVnNjem9nTXl3Z2JHRmlaV3h6T2lBbmFITjJKMzBzWEc1Y2RHaDNZam9nZTJOb1lXNXVaV3h6T2lBekxDQnNZV0psYkhNNklDZG9kMkluZlN4Y2JseDBZMjE1YXpvZ2UyTm9ZVzV1Wld4ek9pQTBMQ0JzWVdKbGJITTZJQ2RqYlhsckozMHNYRzVjZEhoNWVqb2dlMk5vWVc1dVpXeHpPaUF6TENCc1lXSmxiSE02SUNkNGVYb25mU3hjYmx4MGJHRmlPaUI3WTJoaGJtNWxiSE02SURNc0lHeGhZbVZzY3pvZ0oyeGhZaWQ5TEZ4dVhIUnNZMmc2SUh0amFHRnVibVZzY3pvZ015d2diR0ZpWld4ek9pQW5iR05vSjMwc1hHNWNkR2hsZURvZ2UyTm9ZVzV1Wld4ek9pQXhMQ0JzWVdKbGJITTZJRnNuYUdWNEoxMTlMRnh1WEhSclpYbDNiM0prT2lCN1kyaGhibTVsYkhNNklERXNJR3hoWW1Wc2N6b2dXeWRyWlhsM2IzSmtKMTE5TEZ4dVhIUmhibk5wTVRZNklIdGphR0Z1Ym1Wc2N6b2dNU3dnYkdGaVpXeHpPaUJiSjJGdWMya3hOaWRkZlN4Y2JseDBZVzV6YVRJMU5qb2dlMk5vWVc1dVpXeHpPaUF4TENCc1lXSmxiSE02SUZzbllXNXphVEkxTmlkZGZTeGNibHgwYUdObk9pQjdZMmhoYm01bGJITTZJRE1zSUd4aFltVnNjem9nV3lkb0p5d2dKMk1uTENBblp5ZGRmU3hjYmx4MFlYQndiR1U2SUh0amFHRnVibVZzY3pvZ015d2diR0ZpWld4ek9pQmJKM0l4Tmljc0lDZG5NVFluTENBbllqRTJKMTE5TEZ4dVhIUm5jbUY1T2lCN1kyaGhibTVsYkhNNklERXNJR3hoWW1Wc2N6b2dXeWRuY21GNUoxMTlYRzU5TzF4dVhHNHZMeUJvYVdSbElDNWphR0Z1Ym1Wc2N5QmhibVFnTG14aFltVnNjeUJ3Y205d1pYSjBhV1Z6WEc1bWIzSWdLSFpoY2lCdGIyUmxiQ0JwYmlCamIyNTJaWEowS1NCN1hHNWNkR2xtSUNoamIyNTJaWEowTG1oaGMwOTNibEJ5YjNCbGNuUjVLRzF2WkdWc0tTa2dlMXh1WEhSY2RHbG1JQ2doS0NkamFHRnVibVZzY3ljZ2FXNGdZMjl1ZG1WeWRGdHRiMlJsYkYwcEtTQjdYRzVjZEZ4MFhIUjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oyMXBjM05wYm1jZ1kyaGhibTVsYkhNZ2NISnZjR1Z5ZEhrNklDY2dLeUJ0YjJSbGJDazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLQ0VvSjJ4aFltVnNjeWNnYVc0Z1kyOXVkbVZ5ZEZ0dGIyUmxiRjBwS1NCN1hHNWNkRngwWEhSMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjIxcGMzTnBibWNnWTJoaGJtNWxiQ0JzWVdKbGJITWdjSEp2Y0dWeWRIazZJQ2NnS3lCdGIyUmxiQ2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0dOdmJuWmxjblJiYlc5a1pXeGRMbXhoWW1Wc2N5NXNaVzVuZEdnZ0lUMDlJR052Ym5abGNuUmJiVzlrWld4ZExtTm9ZVzV1Wld4ektTQjdYRzVjZEZ4MFhIUjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oyTm9ZVzV1Wld3Z1lXNWtJR3hoWW1Wc0lHTnZkVzUwY3lCdGFYTnRZWFJqYURvZ0p5QXJJRzF2WkdWc0tUdGNibHgwWEhSOVhHNWNibHgwWEhSMllYSWdZMmhoYm01bGJITWdQU0JqYjI1MlpYSjBXMjF2WkdWc1hTNWphR0Z1Ym1Wc2N6dGNibHgwWEhSMllYSWdiR0ZpWld4eklEMGdZMjl1ZG1WeWRGdHRiMlJsYkYwdWJHRmlaV3h6TzF4dVhIUmNkR1JsYkdWMFpTQmpiMjUyWlhKMFcyMXZaR1ZzWFM1amFHRnVibVZzY3p0Y2JseDBYSFJrWld4bGRHVWdZMjl1ZG1WeWRGdHRiMlJsYkYwdWJHRmlaV3h6TzF4dVhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoamIyNTJaWEowVzIxdlpHVnNYU3dnSjJOb1lXNXVaV3h6Snl3Z2UzWmhiSFZsT2lCamFHRnVibVZzYzMwcE8xeHVYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGpiMjUyWlhKMFcyMXZaR1ZzWFN3Z0oyeGhZbVZzY3ljc0lIdDJZV3gxWlRvZ2JHRmlaV3h6ZlNrN1hHNWNkSDFjYm4xY2JseHVZMjl1ZG1WeWRDNXlaMkl1YUhOc0lEMGdablZ1WTNScGIyNGdLSEpuWWlrZ2UxeHVYSFIyWVhJZ2NpQTlJSEpuWWxzd1hTQXZJREkxTlR0Y2JseDBkbUZ5SUdjZ1BTQnlaMkpiTVYwZ0x5QXlOVFU3WEc1Y2RIWmhjaUJpSUQwZ2NtZGlXekpkSUM4Z01qVTFPMXh1WEhSMllYSWdiV2x1SUQwZ1RXRjBhQzV0YVc0b2Npd2daeXdnWWlrN1hHNWNkSFpoY2lCdFlYZ2dQU0JOWVhSb0xtMWhlQ2h5TENCbkxDQmlLVHRjYmx4MGRtRnlJR1JsYkhSaElEMGdiV0Y0SUMwZ2JXbHVPMXh1WEhSMllYSWdhRHRjYmx4MGRtRnlJSE03WEc1Y2RIWmhjaUJzTzF4dVhHNWNkR2xtSUNodFlYZ2dQVDA5SUcxcGJpa2dlMXh1WEhSY2RHZ2dQU0F3TzF4dVhIUjlJR1ZzYzJVZ2FXWWdLSElnUFQwOUlHMWhlQ2tnZTF4dVhIUmNkR2dnUFNBb1p5QXRJR0lwSUM4Z1pHVnNkR0U3WEc1Y2RIMGdaV3h6WlNCcFppQW9aeUE5UFQwZ2JXRjRLU0I3WEc1Y2RGeDBhQ0E5SURJZ0t5QW9ZaUF0SUhJcElDOGdaR1ZzZEdFN1hHNWNkSDBnWld4elpTQnBaaUFvWWlBOVBUMGdiV0Y0S1NCN1hHNWNkRngwYUNBOUlEUWdLeUFvY2lBdElHY3BJQzhnWkdWc2RHRTdYRzVjZEgxY2JseHVYSFJvSUQwZ1RXRjBhQzV0YVc0b2FDQXFJRFl3TENBek5qQXBPMXh1WEc1Y2RHbG1JQ2hvSUR3Z01Da2dlMXh1WEhSY2RHZ2dLejBnTXpZd08xeHVYSFI5WEc1Y2JseDBiQ0E5SUNodGFXNGdLeUJ0WVhncElDOGdNanRjYmx4dVhIUnBaaUFvYldGNElEMDlQU0J0YVc0cElIdGNibHgwWEhSeklEMGdNRHRjYmx4MGZTQmxiSE5sSUdsbUlDaHNJRHc5SURBdU5Ta2dlMXh1WEhSY2RITWdQU0JrWld4MFlTQXZJQ2h0WVhnZ0t5QnRhVzRwTzF4dVhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEhNZ1BTQmtaV3gwWVNBdklDZ3lJQzBnYldGNElDMGdiV2x1S1R0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCYmFDd2djeUFxSURFd01Dd2diQ0FxSURFd01GMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExuSm5ZaTVvYzNZZ1BTQm1kVzVqZEdsdmJpQW9jbWRpS1NCN1hHNWNkSFpoY2lCeVpHbG1PMXh1WEhSMllYSWdaMlJwWmp0Y2JseDBkbUZ5SUdKa2FXWTdYRzVjZEhaaGNpQm9PMXh1WEhSMllYSWdjenRjYmx4dVhIUjJZWElnY2lBOUlISm5ZbHN3WFNBdklESTFOVHRjYmx4MGRtRnlJR2NnUFNCeVoySmJNVjBnTHlBeU5UVTdYRzVjZEhaaGNpQmlJRDBnY21kaVd6SmRJQzhnTWpVMU8xeHVYSFIyWVhJZ2RpQTlJRTFoZEdndWJXRjRLSElzSUdjc0lHSXBPMXh1WEhSMllYSWdaR2xtWmlBOUlIWWdMU0JOWVhSb0xtMXBiaWh5TENCbkxDQmlLVHRjYmx4MGRtRnlJR1JwWm1aaklEMGdablZ1WTNScGIyNGdLR01wSUh0Y2JseDBYSFJ5WlhSMWNtNGdLSFlnTFNCaktTQXZJRFlnTHlCa2FXWm1JQ3NnTVNBdklESTdYRzVjZEgwN1hHNWNibHgwYVdZZ0tHUnBabVlnUFQwOUlEQXBJSHRjYmx4MFhIUm9JRDBnY3lBOUlEQTdYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBjeUE5SUdScFptWWdMeUIyTzF4dVhIUmNkSEprYVdZZ1BTQmthV1ptWXloeUtUdGNibHgwWEhSblpHbG1JRDBnWkdsbVptTW9aeWs3WEc1Y2RGeDBZbVJwWmlBOUlHUnBabVpqS0dJcE8xeHVYRzVjZEZ4MGFXWWdLSElnUFQwOUlIWXBJSHRjYmx4MFhIUmNkR2dnUFNCaVpHbG1JQzBnWjJScFpqdGNibHgwWEhSOUlHVnNjMlVnYVdZZ0tHY2dQVDA5SUhZcElIdGNibHgwWEhSY2RHZ2dQU0FvTVNBdklETXBJQ3NnY21ScFppQXRJR0prYVdZN1hHNWNkRngwZlNCbGJITmxJR2xtSUNoaUlEMDlQU0IyS1NCN1hHNWNkRngwWEhSb0lEMGdLRElnTHlBektTQXJJR2RrYVdZZ0xTQnlaR2xtTzF4dVhIUmNkSDFjYmx4MFhIUnBaaUFvYUNBOElEQXBJSHRjYmx4MFhIUmNkR2dnS3owZ01UdGNibHgwWEhSOUlHVnNjMlVnYVdZZ0tHZ2dQaUF4S1NCN1hHNWNkRngwWEhSb0lDMDlJREU3WEc1Y2RGeDBmVnh1WEhSOVhHNWNibHgwY21WMGRYSnVJRnRjYmx4MFhIUm9JQ29nTXpZd0xGeHVYSFJjZEhNZ0tpQXhNREFzWEc1Y2RGeDBkaUFxSURFd01GeHVYSFJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzV5WjJJdWFIZGlJRDBnWm5WdVkzUnBiMjRnS0hKbllpa2dlMXh1WEhSMllYSWdjaUE5SUhKbllsc3dYVHRjYmx4MGRtRnlJR2NnUFNCeVoySmJNVjA3WEc1Y2RIWmhjaUJpSUQwZ2NtZGlXekpkTzF4dVhIUjJZWElnYUNBOUlHTnZiblpsY25RdWNtZGlMbWh6YkNoeVoySXBXekJkTzF4dVhIUjJZWElnZHlBOUlERWdMeUF5TlRVZ0tpQk5ZWFJvTG0xcGJpaHlMQ0JOWVhSb0xtMXBiaWhuTENCaUtTazdYRzVjYmx4MFlpQTlJREVnTFNBeElDOGdNalUxSUNvZ1RXRjBhQzV0WVhnb2Npd2dUV0YwYUM1dFlYZ29aeXdnWWlrcE8xeHVYRzVjZEhKbGRIVnliaUJiYUN3Z2R5QXFJREV3TUN3Z1lpQXFJREV3TUYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG5KbllpNWpiWGxySUQwZ1puVnVZM1JwYjI0Z0tISm5ZaWtnZTF4dVhIUjJZWElnY2lBOUlISm5ZbHN3WFNBdklESTFOVHRjYmx4MGRtRnlJR2NnUFNCeVoySmJNVjBnTHlBeU5UVTdYRzVjZEhaaGNpQmlJRDBnY21kaVd6SmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1l6dGNibHgwZG1GeUlHMDdYRzVjZEhaaGNpQjVPMXh1WEhSMllYSWdhenRjYmx4dVhIUnJJRDBnVFdGMGFDNXRhVzRvTVNBdElISXNJREVnTFNCbkxDQXhJQzBnWWlrN1hHNWNkR01nUFNBb01TQXRJSElnTFNCcktTQXZJQ2d4SUMwZ2F5a2dmSHdnTUR0Y2JseDBiU0E5SUNneElDMGdaeUF0SUdzcElDOGdLREVnTFNCcktTQjhmQ0F3TzF4dVhIUjVJRDBnS0RFZ0xTQmlJQzBnYXlrZ0x5QW9NU0F0SUdzcElIeDhJREE3WEc1Y2JseDBjbVYwZFhKdUlGdGpJQ29nTVRBd0xDQnRJQ29nTVRBd0xDQjVJQ29nTVRBd0xDQnJJQ29nTVRBd1hUdGNibjA3WEc1Y2JpOHFLbHh1SUNvZ1UyVmxJR2gwZEhCek9pOHZaVzR1YlM1M2FXdHBjR1ZrYVdFdWIzSm5MM2RwYTJrdlJYVmpiR2xrWldGdVgyUnBjM1JoYm1ObEkxTnhkV0Z5WldSZlJYVmpiR2xrWldGdVgyUnBjM1JoYm1ObFhHNGdLaUFxTDF4dVpuVnVZM1JwYjI0Z1kyOXRjR0Z5WVhScGRtVkVhWE4wWVc1alpTaDRMQ0I1S1NCN1hHNWNkSEpsZEhWeWJpQW9YRzVjZEZ4MFRXRjBhQzV3YjNjb2VGc3dYU0F0SUhsYk1GMHNJRElwSUN0Y2JseDBYSFJOWVhSb0xuQnZkeWg0V3pGZElDMGdlVnN4WFN3Z01pa2dLMXh1WEhSY2RFMWhkR2d1Y0c5M0tIaGJNbDBnTFNCNVd6SmRMQ0F5S1Z4dVhIUXBPMXh1ZlZ4dVhHNWpiMjUyWlhKMExuSm5ZaTVyWlhsM2IzSmtJRDBnWm5WdVkzUnBiMjRnS0hKbllpa2dlMXh1WEhSMllYSWdjbVYyWlhKelpXUWdQU0J5WlhabGNuTmxTMlY1ZDI5eVpITmJjbWRpWFR0Y2JseDBhV1lnS0hKbGRtVnljMlZrS1NCN1hHNWNkRngwY21WMGRYSnVJSEpsZG1WeWMyVmtPMXh1WEhSOVhHNWNibHgwZG1GeUlHTjFjbkpsYm5SRGJHOXpaWE4wUkdsemRHRnVZMlVnUFNCSmJtWnBibWwwZVR0Y2JseDBkbUZ5SUdOMWNuSmxiblJEYkc5elpYTjBTMlY1ZDI5eVpEdGNibHh1WEhSbWIzSWdLSFpoY2lCclpYbDNiM0prSUdsdUlHTnpjMHRsZVhkdmNtUnpLU0I3WEc1Y2RGeDBhV1lnS0dOemMwdGxlWGR2Y21SekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVYZHZjbVFwS1NCN1hHNWNkRngwWEhSMllYSWdkbUZzZFdVZ1BTQmpjM05MWlhsM2IzSmtjMXRyWlhsM2IzSmtYVHRjYmx4dVhIUmNkRngwTHk4Z1EyOXRjSFYwWlNCamIyMXdZWEpoZEdsMlpTQmthWE4wWVc1alpWeHVYSFJjZEZ4MGRtRnlJR1JwYzNSaGJtTmxJRDBnWTI5dGNHRnlZWFJwZG1WRWFYTjBZVzVqWlNoeVoySXNJSFpoYkhWbEtUdGNibHh1WEhSY2RGeDBMeThnUTJobFkyc2dhV1lnYVhSeklHeGxjM01zSUdsbUlITnZJSE5sZENCaGN5QmpiRzl6WlhOMFhHNWNkRngwWEhScFppQW9aR2x6ZEdGdVkyVWdQQ0JqZFhKeVpXNTBRMnh2YzJWemRFUnBjM1JoYm1ObEtTQjdYRzVjZEZ4MFhIUmNkR04xY25KbGJuUkRiRzl6WlhOMFJHbHpkR0Z1WTJVZ1BTQmthWE4wWVc1alpUdGNibHgwWEhSY2RGeDBZM1Z5Y21WdWRFTnNiM05sYzNSTFpYbDNiM0prSUQwZ2EyVjVkMjl5WkR0Y2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnWTNWeWNtVnVkRU5zYjNObGMzUkxaWGwzYjNKa08xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1clpYbDNiM0prTG5KbllpQTlJR1oxYm1OMGFXOXVJQ2hyWlhsM2IzSmtLU0I3WEc1Y2RISmxkSFZ5YmlCamMzTkxaWGwzYjNKa2MxdHJaWGwzYjNKa1hUdGNibjA3WEc1Y2JtTnZiblpsY25RdWNtZGlMbmg1ZWlBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBkbUZ5SUhJZ1BTQnlaMkpiTUYwZ0x5QXlOVFU3WEc1Y2RIWmhjaUJuSUQwZ2NtZGlXekZkSUM4Z01qVTFPMXh1WEhSMllYSWdZaUE5SUhKbllsc3lYU0F2SURJMU5UdGNibHh1WEhRdkx5QmhjM04xYldVZ2MxSkhRbHh1WEhSeUlEMGdjaUErSURBdU1EUXdORFVnUHlCTllYUm9MbkJ2ZHlnb0tISWdLeUF3TGpBMU5Ta2dMeUF4TGpBMU5Ta3NJREl1TkNrZ09pQW9jaUF2SURFeUxqa3lLVHRjYmx4MFp5QTlJR2NnUGlBd0xqQTBNRFExSUQ4Z1RXRjBhQzV3YjNjb0tDaG5JQ3NnTUM0d05UVXBJQzhnTVM0d05UVXBMQ0F5TGpRcElEb2dLR2NnTHlBeE1pNDVNaWs3WEc1Y2RHSWdQU0JpSUQ0Z01DNHdOREEwTlNBL0lFMWhkR2d1Y0c5M0tDZ29ZaUFySURBdU1EVTFLU0F2SURFdU1EVTFLU3dnTWk0MEtTQTZJQ2hpSUM4Z01USXVPVElwTzF4dVhHNWNkSFpoY2lCNElEMGdLSElnS2lBd0xqUXhNalFwSUNzZ0tHY2dLaUF3TGpNMU56WXBJQ3NnS0dJZ0tpQXdMakU0TURVcE8xeHVYSFIyWVhJZ2VTQTlJQ2h5SUNvZ01DNHlNVEkyS1NBcklDaG5JQ29nTUM0M01UVXlLU0FySUNoaUlDb2dNQzR3TnpJeUtUdGNibHgwZG1GeUlIb2dQU0FvY2lBcUlEQXVNREU1TXlrZ0t5QW9aeUFxSURBdU1URTVNaWtnS3lBb1lpQXFJREF1T1RVd05TazdYRzVjYmx4MGNtVjBkWEp1SUZ0NElDb2dNVEF3TENCNUlDb2dNVEF3TENCNklDb2dNVEF3WFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1Y21kaUxteGhZaUE5SUdaMWJtTjBhVzl1SUNoeVoySXBJSHRjYmx4MGRtRnlJSGg1ZWlBOUlHTnZiblpsY25RdWNtZGlMbmg1ZWloeVoySXBPMXh1WEhSMllYSWdlQ0E5SUhoNWVsc3dYVHRjYmx4MGRtRnlJSGtnUFNCNGVYcGJNVjA3WEc1Y2RIWmhjaUI2SUQwZ2VIbDZXekpkTzF4dVhIUjJZWElnYkR0Y2JseDBkbUZ5SUdFN1hHNWNkSFpoY2lCaU8xeHVYRzVjZEhnZ0x6MGdPVFV1TURRM08xeHVYSFI1SUM4OUlERXdNRHRjYmx4MGVpQXZQU0F4TURndU9EZ3pPMXh1WEc1Y2RIZ2dQU0I0SUQ0Z01DNHdNRGc0TlRZZ1B5Qk5ZWFJvTG5CdmR5aDRMQ0F4SUM4Z015a2dPaUFvTnk0M09EY2dLaUI0S1NBcklDZ3hOaUF2SURFeE5pazdYRzVjZEhrZ1BTQjVJRDRnTUM0d01EZzROVFlnUHlCTllYUm9MbkJ2ZHloNUxDQXhJQzhnTXlrZ09pQW9OeTQzT0RjZ0tpQjVLU0FySUNneE5pQXZJREV4TmlrN1hHNWNkSG9nUFNCNklENGdNQzR3TURnNE5UWWdQeUJOWVhSb0xuQnZkeWg2TENBeElDOGdNeWtnT2lBb055NDNPRGNnS2lCNktTQXJJQ2d4TmlBdklERXhOaWs3WEc1Y2JseDBiQ0E5SUNneE1UWWdLaUI1S1NBdElERTJPMXh1WEhSaElEMGdOVEF3SUNvZ0tIZ2dMU0I1S1R0Y2JseDBZaUE5SURJd01DQXFJQ2g1SUMwZ2VpazdYRzVjYmx4MGNtVjBkWEp1SUZ0c0xDQmhMQ0JpWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1YUhOc0xuSm5ZaUE5SUdaMWJtTjBhVzl1SUNob2Myd3BJSHRjYmx4MGRtRnlJR2dnUFNCb2MyeGJNRjBnTHlBek5qQTdYRzVjZEhaaGNpQnpJRDBnYUhOc1d6RmRJQzhnTVRBd08xeHVYSFIyWVhJZ2JDQTlJR2h6YkZzeVhTQXZJREV3TUR0Y2JseDBkbUZ5SUhReE8xeHVYSFIyWVhJZ2RESTdYRzVjZEhaaGNpQjBNenRjYmx4MGRtRnlJSEpuWWp0Y2JseDBkbUZ5SUhaaGJEdGNibHh1WEhScFppQW9jeUE5UFQwZ01Da2dlMXh1WEhSY2RIWmhiQ0E5SUd3Z0tpQXlOVFU3WEc1Y2RGeDBjbVYwZFhKdUlGdDJZV3dzSUhaaGJDd2dkbUZzWFR0Y2JseDBmVnh1WEc1Y2RHbG1JQ2hzSUR3Z01DNDFLU0I3WEc1Y2RGeDBkRElnUFNCc0lDb2dLREVnS3lCektUdGNibHgwZlNCbGJITmxJSHRjYmx4MFhIUjBNaUE5SUd3Z0t5QnpJQzBnYkNBcUlITTdYRzVjZEgxY2JseHVYSFIwTVNBOUlESWdLaUJzSUMwZ2RESTdYRzVjYmx4MGNtZGlJRDBnV3pBc0lEQXNJREJkTzF4dVhIUm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJRE03SUdrckt5a2dlMXh1WEhSY2RIUXpJRDBnYUNBcklERWdMeUF6SUNvZ0xTaHBJQzBnTVNrN1hHNWNkRngwYVdZZ0tIUXpJRHdnTUNrZ2UxeHVYSFJjZEZ4MGRETXJLenRjYmx4MFhIUjlYRzVjZEZ4MGFXWWdLSFF6SUQ0Z01Ta2dlMXh1WEhSY2RGeDBkRE10TFR0Y2JseDBYSFI5WEc1Y2JseDBYSFJwWmlBb05pQXFJSFF6SUR3Z01Ta2dlMXh1WEhSY2RGeDBkbUZzSUQwZ2RERWdLeUFvZERJZ0xTQjBNU2tnS2lBMklDb2dkRE03WEc1Y2RGeDBmU0JsYkhObElHbG1JQ2d5SUNvZ2RETWdQQ0F4S1NCN1hHNWNkRngwWEhSMllXd2dQU0IwTWp0Y2JseDBYSFI5SUdWc2MyVWdhV1lnS0RNZ0tpQjBNeUE4SURJcElIdGNibHgwWEhSY2RIWmhiQ0E5SUhReElDc2dLSFF5SUMwZ2RERXBJQ29nS0RJZ0x5QXpJQzBnZERNcElDb2dOanRjYmx4MFhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEZ4MGRtRnNJRDBnZERFN1hHNWNkRngwZlZ4dVhHNWNkRngwY21kaVcybGRJRDBnZG1Gc0lDb2dNalUxTzF4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUhKbllqdGNibjA3WEc1Y2JtTnZiblpsY25RdWFITnNMbWh6ZGlBOUlHWjFibU4wYVc5dUlDaG9jMndwSUh0Y2JseDBkbUZ5SUdnZ1BTQm9jMnhiTUYwN1hHNWNkSFpoY2lCeklEMGdhSE5zV3pGZElDOGdNVEF3TzF4dVhIUjJZWElnYkNBOUlHaHpiRnN5WFNBdklERXdNRHRjYmx4MGRtRnlJSE50YVc0Z1BTQnpPMXh1WEhSMllYSWdiRzFwYmlBOUlFMWhkR2d1YldGNEtHd3NJREF1TURFcE8xeHVYSFIyWVhJZ2MzWTdYRzVjZEhaaGNpQjJPMXh1WEc1Y2RHd2dLajBnTWp0Y2JseDBjeUFxUFNBb2JDQThQU0F4S1NBL0lHd2dPaUF5SUMwZ2JEdGNibHgwYzIxcGJpQXFQU0JzYldsdUlEdzlJREVnUHlCc2JXbHVJRG9nTWlBdElHeHRhVzQ3WEc1Y2RIWWdQU0FvYkNBcklITXBJQzhnTWp0Y2JseDBjM1lnUFNCc0lEMDlQU0F3SUQ4Z0tESWdLaUJ6YldsdUtTQXZJQ2hzYldsdUlDc2djMjFwYmlrZ09pQW9NaUFxSUhNcElDOGdLR3dnS3lCektUdGNibHh1WEhSeVpYUjFjbTRnVzJnc0lITjJJQ29nTVRBd0xDQjJJQ29nTVRBd1hUdGNibjA3WEc1Y2JtTnZiblpsY25RdWFITjJMbkpuWWlBOUlHWjFibU4wYVc5dUlDaG9jM1lwSUh0Y2JseDBkbUZ5SUdnZ1BTQm9jM1piTUYwZ0x5QTJNRHRjYmx4MGRtRnlJSE1nUFNCb2MzWmJNVjBnTHlBeE1EQTdYRzVjZEhaaGNpQjJJRDBnYUhOMld6SmRJQzhnTVRBd08xeHVYSFIyWVhJZ2FHa2dQU0JOWVhSb0xtWnNiMjl5S0dncElDVWdOanRjYmx4dVhIUjJZWElnWmlBOUlHZ2dMU0JOWVhSb0xtWnNiMjl5S0dncE8xeHVYSFIyWVhJZ2NDQTlJREkxTlNBcUlIWWdLaUFvTVNBdElITXBPMXh1WEhSMllYSWdjU0E5SURJMU5TQXFJSFlnS2lBb01TQXRJQ2h6SUNvZ1ppa3BPMXh1WEhSMllYSWdkQ0E5SURJMU5TQXFJSFlnS2lBb01TQXRJQ2h6SUNvZ0tERWdMU0JtS1NrcE8xeHVYSFIySUNvOUlESTFOVHRjYmx4dVhIUnpkMmwwWTJnZ0tHaHBLU0I3WEc1Y2RGeDBZMkZ6WlNBd09seHVYSFJjZEZ4MGNtVjBkWEp1SUZ0MkxDQjBMQ0J3WFR0Y2JseDBYSFJqWVhObElERTZYRzVjZEZ4MFhIUnlaWFIxY200Z1czRXNJSFlzSUhCZE8xeHVYSFJjZEdOaGMyVWdNanBjYmx4MFhIUmNkSEpsZEhWeWJpQmJjQ3dnZGl3Z2RGMDdYRzVjZEZ4MFkyRnpaU0F6T2x4dVhIUmNkRngwY21WMGRYSnVJRnR3TENCeExDQjJYVHRjYmx4MFhIUmpZWE5sSURRNlhHNWNkRngwWEhSeVpYUjFjbTRnVzNRc0lIQXNJSFpkTzF4dVhIUmNkR05oYzJVZ05UcGNibHgwWEhSY2RISmxkSFZ5YmlCYmRpd2djQ3dnY1YwN1hHNWNkSDFjYm4wN1hHNWNibU52Ym5abGNuUXVhSE4yTG1oemJDQTlJR1oxYm1OMGFXOXVJQ2hvYzNZcElIdGNibHgwZG1GeUlHZ2dQU0JvYzNaYk1GMDdYRzVjZEhaaGNpQnpJRDBnYUhOMld6RmRJQzhnTVRBd08xeHVYSFIyWVhJZ2RpQTlJR2h6ZGxzeVhTQXZJREV3TUR0Y2JseDBkbUZ5SUhadGFXNGdQU0JOWVhSb0xtMWhlQ2gyTENBd0xqQXhLVHRjYmx4MGRtRnlJR3h0YVc0N1hHNWNkSFpoY2lCemJEdGNibHgwZG1GeUlHdzdYRzVjYmx4MGJDQTlJQ2d5SUMwZ2N5a2dLaUIyTzF4dVhIUnNiV2x1SUQwZ0tESWdMU0J6S1NBcUlIWnRhVzQ3WEc1Y2RITnNJRDBnY3lBcUlIWnRhVzQ3WEc1Y2RITnNJQzg5SUNoc2JXbHVJRHc5SURFcElEOGdiRzFwYmlBNklESWdMU0JzYldsdU8xeHVYSFJ6YkNBOUlITnNJSHg4SURBN1hHNWNkR3dnTHowZ01qdGNibHh1WEhSeVpYUjFjbTRnVzJnc0lITnNJQ29nTVRBd0xDQnNJQ29nTVRBd1hUdGNibjA3WEc1Y2JpOHZJR2gwZEhBNkx5OWtaWFl1ZHpNdWIzSm5MMk56YzNkbkwyTnpjeTFqYjJ4dmNpOGphSGRpTFhSdkxYSm5ZbHh1WTI5dWRtVnlkQzVvZDJJdWNtZGlJRDBnWm5WdVkzUnBiMjRnS0doM1lpa2dlMXh1WEhSMllYSWdhQ0E5SUdoM1lsc3dYU0F2SURNMk1EdGNibHgwZG1GeUlIZG9JRDBnYUhkaVd6RmRJQzhnTVRBd08xeHVYSFIyWVhJZ1ltd2dQU0JvZDJKYk1sMGdMeUF4TURBN1hHNWNkSFpoY2lCeVlYUnBieUE5SUhkb0lDc2dZbXc3WEc1Y2RIWmhjaUJwTzF4dVhIUjJZWElnZGp0Y2JseDBkbUZ5SUdZN1hHNWNkSFpoY2lCdU8xeHVYRzVjZEM4dklIZG9JQ3NnWW13Z1kyRnVkQ0JpWlNBK0lERmNibHgwYVdZZ0tISmhkR2x2SUQ0Z01Ta2dlMXh1WEhSY2RIZG9JQzg5SUhKaGRHbHZPMXh1WEhSY2RHSnNJQzg5SUhKaGRHbHZPMXh1WEhSOVhHNWNibHgwYVNBOUlFMWhkR2d1Wm14dmIzSW9OaUFxSUdncE8xeHVYSFIySUQwZ01TQXRJR0pzTzF4dVhIUm1JRDBnTmlBcUlHZ2dMU0JwTzF4dVhHNWNkR2xtSUNnb2FTQW1JREI0TURFcElDRTlQU0F3S1NCN1hHNWNkRngwWmlBOUlERWdMU0JtTzF4dVhIUjlYRzVjYmx4MGJpQTlJSGRvSUNzZ1ppQXFJQ2gySUMwZ2QyZ3BPeUF2THlCc2FXNWxZWElnYVc1MFpYSndiMnhoZEdsdmJseHVYRzVjZEhaaGNpQnlPMXh1WEhSMllYSWdaenRjYmx4MGRtRnlJR0k3WEc1Y2RITjNhWFJqYUNBb2FTa2dlMXh1WEhSY2RHUmxabUYxYkhRNlhHNWNkRngwWTJGelpTQTJPbHh1WEhSY2RHTmhjMlVnTURvZ2NpQTlJSFk3SUdjZ1BTQnVPeUJpSUQwZ2QyZzdJR0p5WldGck8xeHVYSFJjZEdOaGMyVWdNVG9nY2lBOUlHNDdJR2NnUFNCMk95QmlJRDBnZDJnN0lHSnlaV0ZyTzF4dVhIUmNkR05oYzJVZ01qb2djaUE5SUhkb095Qm5JRDBnZGpzZ1lpQTlJRzQ3SUdKeVpXRnJPMXh1WEhSY2RHTmhjMlVnTXpvZ2NpQTlJSGRvT3lCbklEMGdianNnWWlBOUlIWTdJR0p5WldGck8xeHVYSFJjZEdOaGMyVWdORG9nY2lBOUlHNDdJR2NnUFNCM2FEc2dZaUE5SUhZN0lHSnlaV0ZyTzF4dVhIUmNkR05oYzJVZ05Ub2djaUE5SUhZN0lHY2dQU0IzYURzZ1lpQTlJRzQ3SUdKeVpXRnJPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJRnR5SUNvZ01qVTFMQ0JuSUNvZ01qVTFMQ0JpSUNvZ01qVTFYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVZMjE1YXk1eVoySWdQU0JtZFc1amRHbHZiaUFvWTIxNWF5a2dlMXh1WEhSMllYSWdZeUE5SUdOdGVXdGJNRjBnTHlBeE1EQTdYRzVjZEhaaGNpQnRJRDBnWTIxNWExc3hYU0F2SURFd01EdGNibHgwZG1GeUlIa2dQU0JqYlhscld6SmRJQzhnTVRBd08xeHVYSFIyWVhJZ2F5QTlJR050ZVd0Yk0xMGdMeUF4TURBN1hHNWNkSFpoY2lCeU8xeHVYSFIyWVhJZ1p6dGNibHgwZG1GeUlHSTdYRzVjYmx4MGNpQTlJREVnTFNCTllYUm9MbTFwYmlneExDQmpJQ29nS0RFZ0xTQnJLU0FySUdzcE8xeHVYSFJuSUQwZ01TQXRJRTFoZEdndWJXbHVLREVzSUcwZ0tpQW9NU0F0SUdzcElDc2dheWs3WEc1Y2RHSWdQU0F4SUMwZ1RXRjBhQzV0YVc0b01Td2dlU0FxSUNneElDMGdheWtnS3lCcktUdGNibHh1WEhSeVpYUjFjbTRnVzNJZ0tpQXlOVFVzSUdjZ0tpQXlOVFVzSUdJZ0tpQXlOVFZkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzU0ZVhvdWNtZGlJRDBnWm5WdVkzUnBiMjRnS0hoNWVpa2dlMXh1WEhSMllYSWdlQ0E5SUhoNWVsc3dYU0F2SURFd01EdGNibHgwZG1GeUlIa2dQU0I0ZVhwYk1WMGdMeUF4TURBN1hHNWNkSFpoY2lCNklEMGdlSGw2V3pKZElDOGdNVEF3TzF4dVhIUjJZWElnY2p0Y2JseDBkbUZ5SUdjN1hHNWNkSFpoY2lCaU8xeHVYRzVjZEhJZ1BTQW9lQ0FxSURNdU1qUXdOaWtnS3lBb2VTQXFJQzB4TGpVek56SXBJQ3NnS0hvZ0tpQXRNQzQwT1RnMktUdGNibHgwWnlBOUlDaDRJQ29nTFRBdU9UWTRPU2tnS3lBb2VTQXFJREV1T0RjMU9Da2dLeUFvZWlBcUlEQXVNRFF4TlNrN1hHNWNkR0lnUFNBb2VDQXFJREF1TURVMU55a2dLeUFvZVNBcUlDMHdMakl3TkRBcElDc2dLSG9nS2lBeExqQTFOekFwTzF4dVhHNWNkQzh2SUdGemMzVnRaU0J6VWtkQ1hHNWNkSElnUFNCeUlENGdNQzR3TURNeE16QTRYRzVjZEZ4MFB5QW9LREV1TURVMUlDb2dUV0YwYUM1d2IzY29jaXdnTVM0d0lDOGdNaTQwS1NrZ0xTQXdMakExTlNsY2JseDBYSFE2SUhJZ0tpQXhNaTQ1TWp0Y2JseHVYSFJuSUQwZ1p5QStJREF1TURBek1UTXdPRnh1WEhSY2REOGdLQ2d4TGpBMU5TQXFJRTFoZEdndWNHOTNLR2NzSURFdU1DQXZJREl1TkNrcElDMGdNQzR3TlRVcFhHNWNkRngwT2lCbklDb2dNVEl1T1RJN1hHNWNibHgwWWlBOUlHSWdQaUF3TGpBd016RXpNRGhjYmx4MFhIUS9JQ2dvTVM0d05UVWdLaUJOWVhSb0xuQnZkeWhpTENBeExqQWdMeUF5TGpRcEtTQXRJREF1TURVMUtWeHVYSFJjZERvZ1lpQXFJREV5TGpreU8xeHVYRzVjZEhJZ1BTQk5ZWFJvTG0xcGJpaE5ZWFJvTG0xaGVDZ3dMQ0J5S1N3Z01TazdYRzVjZEdjZ1BTQk5ZWFJvTG0xcGJpaE5ZWFJvTG0xaGVDZ3dMQ0JuS1N3Z01TazdYRzVjZEdJZ1BTQk5ZWFJvTG0xcGJpaE5ZWFJvTG0xaGVDZ3dMQ0JpS1N3Z01TazdYRzVjYmx4MGNtVjBkWEp1SUZ0eUlDb2dNalUxTENCbklDb2dNalUxTENCaUlDb2dNalUxWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1ZUhsNkxteGhZaUE5SUdaMWJtTjBhVzl1SUNoNGVYb3BJSHRjYmx4MGRtRnlJSGdnUFNCNGVYcGJNRjA3WEc1Y2RIWmhjaUI1SUQwZ2VIbDZXekZkTzF4dVhIUjJZWElnZWlBOUlIaDVlbHN5WFR0Y2JseDBkbUZ5SUd3N1hHNWNkSFpoY2lCaE8xeHVYSFIyWVhJZ1lqdGNibHh1WEhSNElDODlJRGsxTGpBME56dGNibHgwZVNBdlBTQXhNREE3WEc1Y2RIb2dMejBnTVRBNExqZzRNenRjYmx4dVhIUjRJRDBnZUNBK0lEQXVNREE0T0RVMklEOGdUV0YwYUM1d2IzY29lQ3dnTVNBdklETXBJRG9nS0RjdU56ZzNJQ29nZUNrZ0t5QW9NVFlnTHlBeE1UWXBPMXh1WEhSNUlEMGdlU0ErSURBdU1EQTRPRFUySUQ4Z1RXRjBhQzV3YjNjb2VTd2dNU0F2SURNcElEb2dLRGN1TnpnM0lDb2dlU2tnS3lBb01UWWdMeUF4TVRZcE8xeHVYSFI2SUQwZ2VpQStJREF1TURBNE9EVTJJRDhnVFdGMGFDNXdiM2NvZWl3Z01TQXZJRE1wSURvZ0tEY3VOemczSUNvZ2Vpa2dLeUFvTVRZZ0x5QXhNVFlwTzF4dVhHNWNkR3dnUFNBb01URTJJQ29nZVNrZ0xTQXhOanRjYmx4MFlTQTlJRFV3TUNBcUlDaDRJQzBnZVNrN1hHNWNkR0lnUFNBeU1EQWdLaUFvZVNBdElIb3BPMXh1WEc1Y2RISmxkSFZ5YmlCYmJDd2dZU3dnWWwwN1hHNTlPMXh1WEc1amIyNTJaWEowTG14aFlpNTRlWG9nUFNCbWRXNWpkR2x2YmlBb2JHRmlLU0I3WEc1Y2RIWmhjaUJzSUQwZ2JHRmlXekJkTzF4dVhIUjJZWElnWVNBOUlHeGhZbHN4WFR0Y2JseDBkbUZ5SUdJZ1BTQnNZV0piTWwwN1hHNWNkSFpoY2lCNE8xeHVYSFIyWVhJZ2VUdGNibHgwZG1GeUlIbzdYRzVjYmx4MGVTQTlJQ2hzSUNzZ01UWXBJQzhnTVRFMk8xeHVYSFI0SUQwZ1lTQXZJRFV3TUNBcklIazdYRzVjZEhvZ1BTQjVJQzBnWWlBdklESXdNRHRjYmx4dVhIUjJZWElnZVRJZ1BTQk5ZWFJvTG5CdmR5aDVMQ0F6S1R0Y2JseDBkbUZ5SUhneUlEMGdUV0YwYUM1d2IzY29lQ3dnTXlrN1hHNWNkSFpoY2lCNk1pQTlJRTFoZEdndWNHOTNLSG9zSURNcE8xeHVYSFI1SUQwZ2VUSWdQaUF3TGpBd09EZzFOaUEvSUhreUlEb2dLSGtnTFNBeE5pQXZJREV4TmlrZ0x5QTNMamM0Tnp0Y2JseDBlQ0E5SUhneUlENGdNQzR3TURnNE5UWWdQeUI0TWlBNklDaDRJQzBnTVRZZ0x5QXhNVFlwSUM4Z055NDNPRGM3WEc1Y2RIb2dQU0I2TWlBK0lEQXVNREE0T0RVMklEOGdlaklnT2lBb2VpQXRJREUySUM4Z01URTJLU0F2SURjdU56ZzNPMXh1WEc1Y2RIZ2dLajBnT1RVdU1EUTNPMXh1WEhSNUlDbzlJREV3TUR0Y2JseDBlaUFxUFNBeE1EZ3VPRGd6TzF4dVhHNWNkSEpsZEhWeWJpQmJlQ3dnZVN3Z2VsMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExteGhZaTVzWTJnZ1BTQm1kVzVqZEdsdmJpQW9iR0ZpS1NCN1hHNWNkSFpoY2lCc0lEMGdiR0ZpV3pCZE8xeHVYSFIyWVhJZ1lTQTlJR3hoWWxzeFhUdGNibHgwZG1GeUlHSWdQU0JzWVdKYk1sMDdYRzVjZEhaaGNpQm9janRjYmx4MGRtRnlJR2c3WEc1Y2RIWmhjaUJqTzF4dVhHNWNkR2h5SUQwZ1RXRjBhQzVoZEdGdU1paGlMQ0JoS1R0Y2JseDBhQ0E5SUdoeUlDb2dNell3SUM4Z01pQXZJRTFoZEdndVVFazdYRzVjYmx4MGFXWWdLR2dnUENBd0tTQjdYRzVjZEZ4MGFDQXJQU0F6TmpBN1hHNWNkSDFjYmx4dVhIUmpJRDBnVFdGMGFDNXpjWEowS0dFZ0tpQmhJQ3NnWWlBcUlHSXBPMXh1WEc1Y2RISmxkSFZ5YmlCYmJDd2dZeXdnYUYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG14amFDNXNZV0lnUFNCbWRXNWpkR2x2YmlBb2JHTm9LU0I3WEc1Y2RIWmhjaUJzSUQwZ2JHTm9XekJkTzF4dVhIUjJZWElnWXlBOUlHeGphRnN4WFR0Y2JseDBkbUZ5SUdnZ1BTQnNZMmhiTWwwN1hHNWNkSFpoY2lCaE8xeHVYSFIyWVhJZ1lqdGNibHgwZG1GeUlHaHlPMXh1WEc1Y2RHaHlJRDBnYUNBdklETTJNQ0FxSURJZ0tpQk5ZWFJvTGxCSk8xeHVYSFJoSUQwZ1l5QXFJRTFoZEdndVkyOXpLR2h5S1R0Y2JseDBZaUE5SUdNZ0tpQk5ZWFJvTG5OcGJpaG9jaWs3WEc1Y2JseDBjbVYwZFhKdUlGdHNMQ0JoTENCaVhUdGNibjA3WEc1Y2JtTnZiblpsY25RdWNtZGlMbUZ1YzJreE5pQTlJR1oxYm1OMGFXOXVJQ2hoY21kektTQjdYRzVjZEhaaGNpQnlJRDBnWVhKbmMxc3dYVHRjYmx4MGRtRnlJR2NnUFNCaGNtZHpXekZkTzF4dVhIUjJZWElnWWlBOUlHRnlaM05iTWwwN1hHNWNkSFpoY2lCMllXeDFaU0E5SURFZ2FXNGdZWEpuZFcxbGJuUnpJRDhnWVhKbmRXMWxiblJ6V3pGZElEb2dZMjl1ZG1WeWRDNXlaMkl1YUhOMktHRnlaM01wV3pKZE95QXZMeUJvYzNZZ0xUNGdZVzV6YVRFMklHOXdkR2x0YVhwaGRHbHZibHh1WEc1Y2RIWmhiSFZsSUQwZ1RXRjBhQzV5YjNWdVpDaDJZV3gxWlNBdklEVXdLVHRjYmx4dVhIUnBaaUFvZG1Gc2RXVWdQVDA5SURBcElIdGNibHgwWEhSeVpYUjFjbTRnTXpBN1hHNWNkSDFjYmx4dVhIUjJZWElnWVc1emFTQTlJRE13WEc1Y2RGeDBLeUFvS0UxaGRHZ3VjbTkxYm1Rb1lpQXZJREkxTlNrZ1BEd2dNaWxjYmx4MFhIUjhJQ2hOWVhSb0xuSnZkVzVrS0djZ0x5QXlOVFVwSUR3OElERXBYRzVjZEZ4MGZDQk5ZWFJvTG5KdmRXNWtLSElnTHlBeU5UVXBLVHRjYmx4dVhIUnBaaUFvZG1Gc2RXVWdQVDA5SURJcElIdGNibHgwWEhSaGJuTnBJQ3M5SURZd08xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlHRnVjMms3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWh6ZGk1aGJuTnBNVFlnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUXZMeUJ2Y0hScGJXbDZZWFJwYjI0Z2FHVnlaVHNnZDJVZ1lXeHlaV0ZrZVNCcmJtOTNJSFJvWlNCMllXeDFaU0JoYm1RZ1pHOXVKM1FnYm1WbFpDQjBieUJuWlhSY2JseDBMeThnYVhRZ1kyOXVkbVZ5ZEdWa0lHWnZjaUIxY3k1Y2JseDBjbVYwZFhKdUlHTnZiblpsY25RdWNtZGlMbUZ1YzJreE5paGpiMjUyWlhKMExtaHpkaTV5WjJJb1lYSm5jeWtzSUdGeVozTmJNbDBwTzF4dWZUdGNibHh1WTI5dWRtVnlkQzV5WjJJdVlXNXphVEkxTmlBOUlHWjFibU4wYVc5dUlDaGhjbWR6S1NCN1hHNWNkSFpoY2lCeUlEMGdZWEpuYzFzd1hUdGNibHgwZG1GeUlHY2dQU0JoY21keld6RmRPMXh1WEhSMllYSWdZaUE5SUdGeVozTmJNbDA3WEc1Y2JseDBMeThnZDJVZ2RYTmxJSFJvWlNCbGVIUmxibVJsWkNCbmNtVjVjMk5oYkdVZ2NHRnNaWFIwWlNCb1pYSmxMQ0IzYVhSb0lIUm9aU0JsZUdObGNIUnBiMjRnYjJaY2JseDBMeThnWW14aFkyc2dZVzVrSUhkb2FYUmxMaUJ1YjNKdFlXd2djR0ZzWlhSMFpTQnZibXg1SUdoaGN5QTBJR2R5WlhselkyRnNaU0J6YUdGa1pYTXVYRzVjZEdsbUlDaHlJRDA5UFNCbklDWW1JR2NnUFQwOUlHSXBJSHRjYmx4MFhIUnBaaUFvY2lBOElEZ3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQXhOanRjYmx4MFhIUjlYRzVjYmx4MFhIUnBaaUFvY2lBK0lESTBPQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJREl6TVR0Y2JseDBYSFI5WEc1Y2JseDBYSFJ5WlhSMWNtNGdUV0YwYUM1eWIzVnVaQ2dvS0hJZ0xTQTRLU0F2SURJME55a2dLaUF5TkNrZ0t5QXlNekk3WEc1Y2RIMWNibHh1WEhSMllYSWdZVzV6YVNBOUlERTJYRzVjZEZ4MEt5QW9NellnS2lCTllYUm9Mbkp2ZFc1a0tISWdMeUF5TlRVZ0tpQTFLU2xjYmx4MFhIUXJJQ2cySUNvZ1RXRjBhQzV5YjNWdVpDaG5JQzhnTWpVMUlDb2dOU2twWEc1Y2RGeDBLeUJOWVhSb0xuSnZkVzVrS0dJZ0x5QXlOVFVnS2lBMUtUdGNibHh1WEhSeVpYUjFjbTRnWVc1emFUdGNibjA3WEc1Y2JtTnZiblpsY25RdVlXNXphVEUyTG5KbllpQTlJR1oxYm1OMGFXOXVJQ2hoY21kektTQjdYRzVjZEhaaGNpQmpiMnh2Y2lBOUlHRnlaM01nSlNBeE1EdGNibHh1WEhRdkx5Qm9ZVzVrYkdVZ1ozSmxlWE5qWVd4bFhHNWNkR2xtSUNoamIyeHZjaUE5UFQwZ01DQjhmQ0JqYjJ4dmNpQTlQVDBnTnlrZ2UxeHVYSFJjZEdsbUlDaGhjbWR6SUQ0Z05UQXBJSHRjYmx4MFhIUmNkR052Ykc5eUlDczlJRE11TlR0Y2JseDBYSFI5WEc1Y2JseDBYSFJqYjJ4dmNpQTlJR052Ykc5eUlDOGdNVEF1TlNBcUlESTFOVHRjYmx4dVhIUmNkSEpsZEhWeWJpQmJZMjlzYjNJc0lHTnZiRzl5TENCamIyeHZjbDA3WEc1Y2RIMWNibHh1WEhSMllYSWdiWFZzZENBOUlDaCtmaWhoY21keklENGdOVEFwSUNzZ01Ta2dLaUF3TGpVN1hHNWNkSFpoY2lCeUlEMGdLQ2hqYjJ4dmNpQW1JREVwSUNvZ2JYVnNkQ2tnS2lBeU5UVTdYRzVjZEhaaGNpQm5JRDBnS0Nnb1kyOXNiM0lnUGo0Z01Ta2dKaUF4S1NBcUlHMTFiSFFwSUNvZ01qVTFPMXh1WEhSMllYSWdZaUE5SUNnb0tHTnZiRzl5SUQ0K0lESXBJQ1lnTVNrZ0tpQnRkV3gwS1NBcUlESTFOVHRjYmx4dVhIUnlaWFIxY200Z1czSXNJR2NzSUdKZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1aGJuTnBNalUyTG5KbllpQTlJR1oxYm1OMGFXOXVJQ2hoY21kektTQjdYRzVjZEM4dklHaGhibVJzWlNCbmNtVjVjMk5oYkdWY2JseDBhV1lnS0dGeVozTWdQajBnTWpNeUtTQjdYRzVjZEZ4MGRtRnlJR01nUFNBb1lYSm5jeUF0SURJek1pa2dLaUF4TUNBcklEZzdYRzVjZEZ4MGNtVjBkWEp1SUZ0akxDQmpMQ0JqWFR0Y2JseDBmVnh1WEc1Y2RHRnlaM01nTFQwZ01UWTdYRzVjYmx4MGRtRnlJSEpsYlR0Y2JseDBkbUZ5SUhJZ1BTQk5ZWFJvTG1ac2IyOXlLR0Z5WjNNZ0x5QXpOaWtnTHlBMUlDb2dNalUxTzF4dVhIUjJZWElnWnlBOUlFMWhkR2d1Wm14dmIzSW9LSEpsYlNBOUlHRnlaM01nSlNBek5pa2dMeUEyS1NBdklEVWdLaUF5TlRVN1hHNWNkSFpoY2lCaUlEMGdLSEpsYlNBbElEWXBJQzhnTlNBcUlESTFOVHRjYmx4dVhIUnlaWFIxY200Z1czSXNJR2NzSUdKZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1eVoySXVhR1Y0SUQwZ1puVnVZM1JwYjI0Z0tHRnlaM01wSUh0Y2JseDBkbUZ5SUdsdWRHVm5aWElnUFNBb0tFMWhkR2d1Y205MWJtUW9ZWEpuYzFzd1hTa2dKaUF3ZUVaR0tTQThQQ0F4TmlsY2JseDBYSFFySUNnb1RXRjBhQzV5YjNWdVpDaGhjbWR6V3pGZEtTQW1JREI0UmtZcElEdzhJRGdwWEc1Y2RGeDBLeUFvVFdGMGFDNXliM1Z1WkNoaGNtZHpXekpkS1NBbUlEQjRSa1lwTzF4dVhHNWNkSFpoY2lCemRISnBibWNnUFNCcGJuUmxaMlZ5TG5SdlUzUnlhVzVuS0RFMktTNTBiMVZ3Y0dWeVEyRnpaU2dwTzF4dVhIUnlaWFIxY200Z0p6QXdNREF3TUNjdWMzVmljM1J5YVc1bktITjBjbWx1Wnk1c1pXNW5kR2dwSUNzZ2MzUnlhVzVuTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVvWlhndWNtZGlJRDBnWm5WdVkzUnBiMjRnS0dGeVozTXBJSHRjYmx4MGRtRnlJRzFoZEdOb0lEMGdZWEpuY3k1MGIxTjBjbWx1WnlneE5pa3ViV0YwWTJnb0wxdGhMV1l3TFRsZGV6WjlmRnRoTFdZd0xUbGRlek45TDJrcE8xeHVYSFJwWmlBb0lXMWhkR05vS1NCN1hHNWNkRngwY21WMGRYSnVJRnN3TENBd0xDQXdYVHRjYmx4MGZWeHVYRzVjZEhaaGNpQmpiMnh2Y2xOMGNtbHVaeUE5SUcxaGRHTm9XekJkTzF4dVhHNWNkR2xtSUNodFlYUmphRnN3WFM1c1pXNW5kR2dnUFQwOUlETXBJSHRjYmx4MFhIUmpiMnh2Y2xOMGNtbHVaeUE5SUdOdmJHOXlVM1J5YVc1bkxuTndiR2wwS0NjbktTNXRZWEFvWm5WdVkzUnBiMjRnS0dOb1lYSXBJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQmphR0Z5SUNzZ1kyaGhjanRjYmx4MFhIUjlLUzVxYjJsdUtDY25LVHRjYmx4MGZWeHVYRzVjZEhaaGNpQnBiblJsWjJWeUlEMGdjR0Z5YzJWSmJuUW9ZMjlzYjNKVGRISnBibWNzSURFMktUdGNibHgwZG1GeUlISWdQU0FvYVc1MFpXZGxjaUErUGlBeE5pa2dKaUF3ZUVaR08xeHVYSFIyWVhJZ1p5QTlJQ2hwYm5SbFoyVnlJRDQrSURncElDWWdNSGhHUmp0Y2JseDBkbUZ5SUdJZ1BTQnBiblJsWjJWeUlDWWdNSGhHUmp0Y2JseHVYSFJ5WlhSMWNtNGdXM0lzSUdjc0lHSmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNXlaMkl1YUdObklEMGdablZ1WTNScGIyNGdLSEpuWWlrZ2UxeHVYSFIyWVhJZ2NpQTlJSEpuWWxzd1hTQXZJREkxTlR0Y2JseDBkbUZ5SUdjZ1BTQnlaMkpiTVYwZ0x5QXlOVFU3WEc1Y2RIWmhjaUJpSUQwZ2NtZGlXekpkSUM4Z01qVTFPMXh1WEhSMllYSWdiV0Y0SUQwZ1RXRjBhQzV0WVhnb1RXRjBhQzV0WVhnb2Npd2daeWtzSUdJcE8xeHVYSFIyWVhJZ2JXbHVJRDBnVFdGMGFDNXRhVzRvVFdGMGFDNXRhVzRvY2l3Z1p5a3NJR0lwTzF4dVhIUjJZWElnWTJoeWIyMWhJRDBnS0cxaGVDQXRJRzFwYmlrN1hHNWNkSFpoY2lCbmNtRjVjMk5oYkdVN1hHNWNkSFpoY2lCb2RXVTdYRzVjYmx4MGFXWWdLR05vY205dFlTQThJREVwSUh0Y2JseDBYSFJuY21GNWMyTmhiR1VnUFNCdGFXNGdMeUFvTVNBdElHTm9jbTl0WVNrN1hHNWNkSDBnWld4elpTQjdYRzVjZEZ4MFozSmhlWE5qWVd4bElEMGdNRHRjYmx4MGZWeHVYRzVjZEdsbUlDaGphSEp2YldFZ1BEMGdNQ2tnZTF4dVhIUmNkR2gxWlNBOUlEQTdYRzVjZEgwZ1pXeHpaVnh1WEhScFppQW9iV0Y0SUQwOVBTQnlLU0I3WEc1Y2RGeDBhSFZsSUQwZ0tDaG5JQzBnWWlrZ0x5QmphSEp2YldFcElDVWdOanRjYmx4MGZTQmxiSE5sWEc1Y2RHbG1JQ2h0WVhnZ1BUMDlJR2NwSUh0Y2JseDBYSFJvZFdVZ1BTQXlJQ3NnS0dJZ0xTQnlLU0F2SUdOb2NtOXRZVHRjYmx4MGZTQmxiSE5sSUh0Y2JseDBYSFJvZFdVZ1BTQTBJQ3NnS0hJZ0xTQm5LU0F2SUdOb2NtOXRZU0FySURRN1hHNWNkSDFjYmx4dVhIUm9kV1VnTHowZ05qdGNibHgwYUhWbElDVTlJREU3WEc1Y2JseDBjbVYwZFhKdUlGdG9kV1VnS2lBek5qQXNJR05vY205dFlTQXFJREV3TUN3Z1ozSmhlWE5qWVd4bElDb2dNVEF3WFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1YUhOc0xtaGpaeUE5SUdaMWJtTjBhVzl1SUNob2Myd3BJSHRjYmx4MGRtRnlJSE1nUFNCb2MyeGJNVjBnTHlBeE1EQTdYRzVjZEhaaGNpQnNJRDBnYUhOc1d6SmRJQzhnTVRBd08xeHVYSFIyWVhJZ1l5QTlJREU3WEc1Y2RIWmhjaUJtSUQwZ01EdGNibHh1WEhScFppQW9iQ0E4SURBdU5Ta2dlMXh1WEhSY2RHTWdQU0F5TGpBZ0tpQnpJQ29nYkR0Y2JseDBmU0JsYkhObElIdGNibHgwWEhSaklEMGdNaTR3SUNvZ2N5QXFJQ2d4TGpBZ0xTQnNLVHRjYmx4MGZWeHVYRzVjZEdsbUlDaGpJRHdnTVM0d0tTQjdYRzVjZEZ4MFppQTlJQ2hzSUMwZ01DNDFJQ29nWXlrZ0x5QW9NUzR3SUMwZ1l5azdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdXMmh6YkZzd1hTd2dZeUFxSURFd01Dd2daaUFxSURFd01GMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExtaHpkaTVvWTJjZ1BTQm1kVzVqZEdsdmJpQW9hSE4yS1NCN1hHNWNkSFpoY2lCeklEMGdhSE4yV3pGZElDOGdNVEF3TzF4dVhIUjJZWElnZGlBOUlHaHpkbHN5WFNBdklERXdNRHRjYmx4dVhIUjJZWElnWXlBOUlITWdLaUIyTzF4dVhIUjJZWElnWmlBOUlEQTdYRzVjYmx4MGFXWWdLR01nUENBeExqQXBJSHRjYmx4MFhIUm1JRDBnS0hZZ0xTQmpLU0F2SUNneElDMGdZeWs3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnVzJoemRsc3dYU3dnWXlBcUlERXdNQ3dnWmlBcUlERXdNRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWhqWnk1eVoySWdQU0JtZFc1amRHbHZiaUFvYUdObktTQjdYRzVjZEhaaGNpQm9JRDBnYUdObld6QmRJQzhnTXpZd08xeHVYSFIyWVhJZ1l5QTlJR2hqWjFzeFhTQXZJREV3TUR0Y2JseDBkbUZ5SUdjZ1BTQm9ZMmRiTWwwZ0x5QXhNREE3WEc1Y2JseDBhV1lnS0dNZ1BUMDlJREF1TUNrZ2UxeHVYSFJjZEhKbGRIVnliaUJiWnlBcUlESTFOU3dnWnlBcUlESTFOU3dnWnlBcUlESTFOVjA3WEc1Y2RIMWNibHh1WEhSMllYSWdjSFZ5WlNBOUlGc3dMQ0F3TENBd1hUdGNibHgwZG1GeUlHaHBJRDBnS0dnZ0pTQXhLU0FxSURZN1hHNWNkSFpoY2lCMklEMGdhR2tnSlNBeE8xeHVYSFIyWVhJZ2R5QTlJREVnTFNCMk8xeHVYSFIyWVhJZ2JXY2dQU0F3TzF4dVhHNWNkSE4zYVhSamFDQW9UV0YwYUM1bWJHOXZjaWhvYVNrcElIdGNibHgwWEhSallYTmxJREE2WEc1Y2RGeDBYSFJ3ZFhKbFd6QmRJRDBnTVRzZ2NIVnlaVnN4WFNBOUlIWTdJSEIxY21WYk1sMGdQU0F3T3lCaWNtVmhhenRjYmx4MFhIUmpZWE5sSURFNlhHNWNkRngwWEhSd2RYSmxXekJkSUQwZ2R6c2djSFZ5WlZzeFhTQTlJREU3SUhCMWNtVmJNbDBnUFNBd095QmljbVZoYXp0Y2JseDBYSFJqWVhObElESTZYRzVjZEZ4MFhIUndkWEpsV3pCZElEMGdNRHNnY0hWeVpWc3hYU0E5SURFN0lIQjFjbVZiTWwwZ1BTQjJPeUJpY21WaGF6dGNibHgwWEhSallYTmxJRE02WEc1Y2RGeDBYSFJ3ZFhKbFd6QmRJRDBnTURzZ2NIVnlaVnN4WFNBOUlIYzdJSEIxY21WYk1sMGdQU0F4T3lCaWNtVmhhenRjYmx4MFhIUmpZWE5sSURRNlhHNWNkRngwWEhSd2RYSmxXekJkSUQwZ2Rqc2djSFZ5WlZzeFhTQTlJREE3SUhCMWNtVmJNbDBnUFNBeE95QmljbVZoYXp0Y2JseDBYSFJrWldaaGRXeDBPbHh1WEhSY2RGeDBjSFZ5WlZzd1hTQTlJREU3SUhCMWNtVmJNVjBnUFNBd095QndkWEpsV3pKZElEMGdkenRjYmx4MGZWeHVYRzVjZEcxbklEMGdLREV1TUNBdElHTXBJQ29nWnp0Y2JseHVYSFJ5WlhSMWNtNGdXMXh1WEhSY2RDaGpJQ29nY0hWeVpWc3dYU0FySUcxbktTQXFJREkxTlN4Y2JseDBYSFFvWXlBcUlIQjFjbVZiTVYwZ0t5QnRaeWtnS2lBeU5UVXNYRzVjZEZ4MEtHTWdLaUJ3ZFhKbFd6SmRJQ3NnYldjcElDb2dNalUxWEc1Y2RGMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExtaGpaeTVvYzNZZ1BTQm1kVzVqZEdsdmJpQW9hR05uS1NCN1hHNWNkSFpoY2lCaklEMGdhR05uV3pGZElDOGdNVEF3TzF4dVhIUjJZWElnWnlBOUlHaGpaMXN5WFNBdklERXdNRHRjYmx4dVhIUjJZWElnZGlBOUlHTWdLeUJuSUNvZ0tERXVNQ0F0SUdNcE8xeHVYSFIyWVhJZ1ppQTlJREE3WEc1Y2JseDBhV1lnS0hZZ1BpQXdMakFwSUh0Y2JseDBYSFJtSUQwZ1l5QXZJSFk3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnVzJoaloxc3dYU3dnWmlBcUlERXdNQ3dnZGlBcUlERXdNRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWhqWnk1b2Myd2dQU0JtZFc1amRHbHZiaUFvYUdObktTQjdYRzVjZEhaaGNpQmpJRDBnYUdObld6RmRJQzhnTVRBd08xeHVYSFIyWVhJZ1p5QTlJR2hqWjFzeVhTQXZJREV3TUR0Y2JseHVYSFIyWVhJZ2JDQTlJR2NnS2lBb01TNHdJQzBnWXlrZ0t5QXdMalVnS2lCak8xeHVYSFIyWVhJZ2N5QTlJREE3WEc1Y2JseDBhV1lnS0d3Z1BpQXdMakFnSmlZZ2JDQThJREF1TlNrZ2UxeHVYSFJjZEhNZ1BTQmpJQzhnS0RJZ0tpQnNLVHRjYmx4MGZTQmxiSE5sWEc1Y2RHbG1JQ2hzSUQ0OUlEQXVOU0FtSmlCc0lEd2dNUzR3S1NCN1hHNWNkRngwY3lBOUlHTWdMeUFvTWlBcUlDZ3hJQzBnYkNrcE8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlGdG9ZMmRiTUYwc0lITWdLaUF4TURBc0lHd2dLaUF4TURCZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b1kyY3VhSGRpSUQwZ1puVnVZM1JwYjI0Z0tHaGpaeWtnZTF4dVhIUjJZWElnWXlBOUlHaGpaMXN4WFNBdklERXdNRHRjYmx4MGRtRnlJR2NnUFNCb1kyZGJNbDBnTHlBeE1EQTdYRzVjZEhaaGNpQjJJRDBnWXlBcklHY2dLaUFvTVM0d0lDMGdZeWs3WEc1Y2RISmxkSFZ5YmlCYmFHTm5XekJkTENBb2RpQXRJR01wSUNvZ01UQXdMQ0FvTVNBdElIWXBJQ29nTVRBd1hUdGNibjA3WEc1Y2JtTnZiblpsY25RdWFIZGlMbWhqWnlBOUlHWjFibU4wYVc5dUlDaG9kMklwSUh0Y2JseDBkbUZ5SUhjZ1BTQm9kMkpiTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUJpSUQwZ2FIZGlXekpkSUM4Z01UQXdPMXh1WEhSMllYSWdkaUE5SURFZ0xTQmlPMXh1WEhSMllYSWdZeUE5SUhZZ0xTQjNPMXh1WEhSMllYSWdaeUE5SURBN1hHNWNibHgwYVdZZ0tHTWdQQ0F4S1NCN1hHNWNkRngwWnlBOUlDaDJJQzBnWXlrZ0x5QW9NU0F0SUdNcE8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlGdG9kMkpiTUYwc0lHTWdLaUF4TURBc0lHY2dLaUF4TURCZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1aGNIQnNaUzV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9ZWEJ3YkdVcElIdGNibHgwY21WMGRYSnVJRnNvWVhCd2JHVmJNRjBnTHlBMk5UVXpOU2tnS2lBeU5UVXNJQ2hoY0hCc1pWc3hYU0F2SURZMU5UTTFLU0FxSURJMU5Td2dLR0Z3Y0d4bFd6SmRJQzhnTmpVMU16VXBJQ29nTWpVMVhUdGNibjA3WEc1Y2JtTnZiblpsY25RdWNtZGlMbUZ3Y0d4bElEMGdablZ1WTNScGIyNGdLSEpuWWlrZ2UxeHVYSFJ5WlhSMWNtNGdXeWh5WjJKYk1GMGdMeUF5TlRVcElDb2dOalUxTXpVc0lDaHlaMkpiTVYwZ0x5QXlOVFVwSUNvZ05qVTFNelVzSUNoeVoySmJNbDBnTHlBeU5UVXBJQ29nTmpVMU16VmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW5jbUY1TG5KbllpQTlJR1oxYm1OMGFXOXVJQ2hoY21kektTQjdYRzVjZEhKbGRIVnliaUJiWVhKbmMxc3dYU0F2SURFd01DQXFJREkxTlN3Z1lYSm5jMXN3WFNBdklERXdNQ0FxSURJMU5Td2dZWEpuYzFzd1hTQXZJREV3TUNBcUlESTFOVjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWR5WVhrdWFITnNJRDBnWTI5dWRtVnlkQzVuY21GNUxtaHpkaUE5SUdaMWJtTjBhVzl1SUNoaGNtZHpLU0I3WEc1Y2RISmxkSFZ5YmlCYk1Dd2dNQ3dnWVhKbmMxc3dYVjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWR5WVhrdWFIZGlJRDBnWm5WdVkzUnBiMjRnS0dkeVlYa3BJSHRjYmx4MGNtVjBkWEp1SUZzd0xDQXhNREFzSUdkeVlYbGJNRjFkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVuY21GNUxtTnRlV3NnUFNCbWRXNWpkR2x2YmlBb1ozSmhlU2tnZTF4dVhIUnlaWFIxY200Z1d6QXNJREFzSURBc0lHZHlZWGxiTUYxZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1bmNtRjVMbXhoWWlBOUlHWjFibU4wYVc5dUlDaG5jbUY1S1NCN1hHNWNkSEpsZEhWeWJpQmJaM0poZVZzd1hTd2dNQ3dnTUYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG1keVlYa3VhR1Y0SUQwZ1puVnVZM1JwYjI0Z0tHZHlZWGtwSUh0Y2JseDBkbUZ5SUhaaGJDQTlJRTFoZEdndWNtOTFibVFvWjNKaGVWc3dYU0F2SURFd01DQXFJREkxTlNrZ0ppQXdlRVpHTzF4dVhIUjJZWElnYVc1MFpXZGxjaUE5SUNoMllXd2dQRHdnTVRZcElDc2dLSFpoYkNBOFBDQTRLU0FySUhaaGJEdGNibHh1WEhSMllYSWdjM1J5YVc1bklEMGdhVzUwWldkbGNpNTBiMU4wY21sdVp5Z3hOaWt1ZEc5VmNIQmxja05oYzJVb0tUdGNibHgwY21WMGRYSnVJQ2N3TURBd01EQW5Mbk4xWW5OMGNtbHVaeWh6ZEhKcGJtY3ViR1Z1WjNSb0tTQXJJSE4wY21sdVp6dGNibjA3WEc1Y2JtTnZiblpsY25RdWNtZGlMbWR5WVhrZ1BTQm1kVzVqZEdsdmJpQW9jbWRpS1NCN1hHNWNkSFpoY2lCMllXd2dQU0FvY21kaVd6QmRJQ3NnY21kaVd6RmRJQ3NnY21kaVd6SmRLU0F2SURNN1hHNWNkSEpsZEhWeWJpQmJkbUZzSUM4Z01qVTFJQ29nTVRBd1hUdGNibjA3WEc0aUxDSjJZWElnWTI5dWRtVnljMmx2Ym5NZ1BTQnlaWEYxYVhKbEtDY3VMMk52Ym5abGNuTnBiMjV6SnlrN1hHNTJZWElnY205MWRHVWdQU0J5WlhGMWFYSmxLQ2N1TDNKdmRYUmxKeWs3WEc1Y2JuWmhjaUJqYjI1MlpYSjBJRDBnZTMwN1hHNWNiblpoY2lCdGIyUmxiSE1nUFNCUFltcGxZM1F1YTJWNWN5aGpiMjUyWlhKemFXOXVjeWs3WEc1Y2JtWjFibU4wYVc5dUlIZHlZWEJTWVhjb1ptNHBJSHRjYmx4MGRtRnlJSGR5WVhCd1pXUkdiaUE5SUdaMWJtTjBhVzl1SUNoaGNtZHpLU0I3WEc1Y2RGeDBhV1lnS0dGeVozTWdQVDA5SUhWdVpHVm1hVzVsWkNCOGZDQmhjbWR6SUQwOVBTQnVkV3hzS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWVhKbmN6dGNibHgwWEhSOVhHNWNibHgwWEhScFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQStJREVwSUh0Y2JseDBYSFJjZEdGeVozTWdQU0JCY25KaGVTNXdjbTkwYjNSNWNHVXVjMnhwWTJVdVkyRnNiQ2hoY21kMWJXVnVkSE1wTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQm1iaWhoY21kektUdGNibHgwZlR0Y2JseHVYSFF2THlCd2NtVnpaWEoyWlNBdVkyOXVkbVZ5YzJsdmJpQndjbTl3WlhKMGVTQnBaaUIwYUdWeVpTQnBjeUJ2Ym1WY2JseDBhV1lnS0NkamIyNTJaWEp6YVc5dUp5QnBiaUJtYmlrZ2UxeHVYSFJjZEhkeVlYQndaV1JHYmk1amIyNTJaWEp6YVc5dUlEMGdabTR1WTI5dWRtVnljMmx2Ymp0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCM2NtRndjR1ZrUm00N1hHNTlYRzVjYm1aMWJtTjBhVzl1SUhkeVlYQlNiM1Z1WkdWa0tHWnVLU0I3WEc1Y2RIWmhjaUIzY21Gd2NHVmtSbTRnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUmNkR2xtSUNoaGNtZHpJRDA5UFNCMWJtUmxabWx1WldRZ2ZId2dZWEpuY3lBOVBUMGdiblZzYkNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdGeVozTTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dQaUF4S1NCN1hHNWNkRngwWEhSaGNtZHpJRDBnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbk5zYVdObExtTmhiR3dvWVhKbmRXMWxiblJ6S1R0Y2JseDBYSFI5WEc1Y2JseDBYSFIyWVhJZ2NtVnpkV3gwSUQwZ1ptNG9ZWEpuY3lrN1hHNWNibHgwWEhRdkx5QjNaU2R5WlNCaGMzTjFiV2x1WnlCMGFHVWdjbVZ6ZFd4MElHbHpJR0Z1SUdGeWNtRjVJR2hsY21VdVhHNWNkRngwTHk4Z2MyVmxJRzV2ZEdsalpTQnBiaUJqYjI1MlpYSnphVzl1Y3k1cWN6c2daRzl1SjNRZ2RYTmxJR0p2ZUNCMGVYQmxjMXh1WEhSY2RDOHZJR2x1SUdOdmJuWmxjbk5wYjI0Z1puVnVZM1JwYjI1ekxseHVYSFJjZEdsbUlDaDBlWEJsYjJZZ2NtVnpkV3gwSUQwOVBTQW5iMkpxWldOMEp5a2dlMXh1WEhSY2RGeDBabTl5SUNoMllYSWdiR1Z1SUQwZ2NtVnpkV3gwTG14bGJtZDBhQ3dnYVNBOUlEQTdJR2tnUENCc1pXNDdJR2tyS3lrZ2UxeHVYSFJjZEZ4MFhIUnlaWE4xYkhSYmFWMGdQU0JOWVhSb0xuSnZkVzVrS0hKbGMzVnNkRnRwWFNrN1hHNWNkRngwWEhSOVhHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJSEpsYzNWc2REdGNibHgwZlR0Y2JseHVYSFF2THlCd2NtVnpaWEoyWlNBdVkyOXVkbVZ5YzJsdmJpQndjbTl3WlhKMGVTQnBaaUIwYUdWeVpTQnBjeUJ2Ym1WY2JseDBhV1lnS0NkamIyNTJaWEp6YVc5dUp5QnBiaUJtYmlrZ2UxeHVYSFJjZEhkeVlYQndaV1JHYmk1amIyNTJaWEp6YVc5dUlEMGdabTR1WTI5dWRtVnljMmx2Ymp0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCM2NtRndjR1ZrUm00N1hHNTlYRzVjYm0xdlpHVnNjeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2htY205dFRXOWtaV3dwSUh0Y2JseDBZMjl1ZG1WeWRGdG1jbTl0VFc5a1pXeGRJRDBnZTMwN1hHNWNibHgwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHTnZiblpsY25SYlpuSnZiVTF2WkdWc1hTd2dKMk5vWVc1dVpXeHpKeXdnZTNaaGJIVmxPaUJqYjI1MlpYSnphVzl1YzF0bWNtOXRUVzlrWld4ZExtTm9ZVzV1Wld4emZTazdYRzVjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGpiMjUyWlhKMFcyWnliMjFOYjJSbGJGMHNJQ2RzWVdKbGJITW5MQ0I3ZG1Gc2RXVTZJR052Ym5abGNuTnBiMjV6VzJaeWIyMU5iMlJsYkYwdWJHRmlaV3h6ZlNrN1hHNWNibHgwZG1GeUlISnZkWFJsY3lBOUlISnZkWFJsS0daeWIyMU5iMlJsYkNrN1hHNWNkSFpoY2lCeWIzVjBaVTF2WkdWc2N5QTlJRTlpYW1WamRDNXJaWGx6S0hKdmRYUmxjeWs3WEc1Y2JseDBjbTkxZEdWTmIyUmxiSE11Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvZEc5TmIyUmxiQ2tnZTF4dVhIUmNkSFpoY2lCbWJpQTlJSEp2ZFhSbGMxdDBiMDF2WkdWc1hUdGNibHh1WEhSY2RHTnZiblpsY25SYlpuSnZiVTF2WkdWc1hWdDBiMDF2WkdWc1hTQTlJSGR5WVhCU2IzVnVaR1ZrS0dadUtUdGNibHgwWEhSamIyNTJaWEowVzJaeWIyMU5iMlJsYkYxYmRHOU5iMlJsYkYwdWNtRjNJRDBnZDNKaGNGSmhkeWhtYmlrN1hHNWNkSDBwTzF4dWZTazdYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWTI5dWRtVnlkRHRjYmlJc0luWmhjaUJqYjI1MlpYSnphVzl1Y3lBOUlISmxjWFZwY21Vb0p5NHZZMjl1ZG1WeWMybHZibk1uS1R0Y2JseHVMeXBjYmx4MGRHaHBjeUJtZFc1amRHbHZiaUJ5YjNWMFpYTWdZU0J0YjJSbGJDQjBieUJoYkd3Z2IzUm9aWElnYlc5a1pXeHpMbHh1WEc1Y2RHRnNiQ0JtZFc1amRHbHZibk1nZEdoaGRDQmhjbVVnY205MWRHVmtJR2hoZG1VZ1lTQndjbTl3WlhKMGVTQmdMbU52Ym5abGNuTnBiMjVnSUdGMGRHRmphR1ZrWEc1Y2RIUnZJSFJvWlNCeVpYUjFjbTVsWkNCemVXNTBhR1YwYVdNZ1puVnVZM1JwYjI0dUlGUm9hWE1nY0hKdmNHVnlkSGtnYVhNZ1lXNGdZWEp5WVhsY2JseDBiMllnYzNSeWFXNW5jeXdnWldGamFDQjNhWFJvSUhSb1pTQnpkR1Z3Y3lCcGJpQmlaWFIzWldWdUlIUm9aU0FuWm5KdmJTY2dZVzVrSUNkMGJ5ZGNibHgwWTI5c2IzSWdiVzlrWld4eklDaHBibU5zZFhOcGRtVXBMbHh1WEc1Y2RHTnZiblpsY25OcGIyNXpJSFJvWVhRZ1lYSmxJRzV2ZENCd2IzTnphV0pzWlNCemFXMXdiSGtnWVhKbElHNXZkQ0JwYm1Oc2RXUmxaQzVjYmlvdlhHNWNibVoxYm1OMGFXOXVJR0oxYVd4a1IzSmhjR2dvS1NCN1hHNWNkSFpoY2lCbmNtRndhQ0E5SUh0OU8xeHVYSFF2THlCb2RIUndjem92TDJwemNHVnlaaTVqYjIwdmIySnFaV04wTFd0bGVYTXRkbk10Wm05eUxXbHVMWGRwZEdndFkyeHZjM1Z5WlM4elhHNWNkSFpoY2lCdGIyUmxiSE1nUFNCUFltcGxZM1F1YTJWNWN5aGpiMjUyWlhKemFXOXVjeWs3WEc1Y2JseDBabTl5SUNoMllYSWdiR1Z1SUQwZ2JXOWtaV3h6TG14bGJtZDBhQ3dnYVNBOUlEQTdJR2tnUENCc1pXNDdJR2tyS3lrZ2UxeHVYSFJjZEdkeVlYQm9XMjF2WkdWc2MxdHBYVjBnUFNCN1hHNWNkRngwWEhRdkx5Qm9kSFJ3T2k4dmFuTndaWEptTG1OdmJTOHhMWFp6TFdsdVptbHVhWFI1WEc1Y2RGeDBYSFF2THlCdGFXTnlieTF2Y0hRc0lHSjFkQ0IwYUdseklHbHpJSE5wYlhCc1pTNWNibHgwWEhSY2RHUnBjM1JoYm1ObE9pQXRNU3hjYmx4MFhIUmNkSEJoY21WdWREb2diblZzYkZ4dVhIUmNkSDA3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnWjNKaGNHZzdYRzU5WEc1Y2JpOHZJR2gwZEhCek9pOHZaVzR1ZDJscmFYQmxaR2xoTG05eVp5OTNhV3RwTDBKeVpXRmtkR2d0Wm1seWMzUmZjMlZoY21Ob1hHNW1kVzVqZEdsdmJpQmtaWEpwZG1WQ1JsTW9abkp2YlUxdlpHVnNLU0I3WEc1Y2RIWmhjaUJuY21Gd2FDQTlJR0oxYVd4a1IzSmhjR2dvS1R0Y2JseDBkbUZ5SUhGMVpYVmxJRDBnVzJaeWIyMU5iMlJsYkYwN0lDOHZJSFZ1YzJocFpuUWdMVDRnY1hWbGRXVWdMVDRnY0c5d1hHNWNibHgwWjNKaGNHaGJabkp2YlUxdlpHVnNYUzVrYVhOMFlXNWpaU0E5SURBN1hHNWNibHgwZDJocGJHVWdLSEYxWlhWbExteGxibWQwYUNrZ2UxeHVYSFJjZEhaaGNpQmpkWEp5Wlc1MElEMGdjWFZsZFdVdWNHOXdLQ2s3WEc1Y2RGeDBkbUZ5SUdGa2FtRmpaVzUwY3lBOUlFOWlhbVZqZEM1clpYbHpLR052Ym5abGNuTnBiMjV6VzJOMWNuSmxiblJkS1R0Y2JseHVYSFJjZEdadmNpQW9kbUZ5SUd4bGJpQTlJR0ZrYW1GalpXNTBjeTVzWlc1bmRHZ3NJR2tnUFNBd095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JseDBYSFJjZEhaaGNpQmhaR3BoWTJWdWRDQTlJR0ZrYW1GalpXNTBjMXRwWFR0Y2JseDBYSFJjZEhaaGNpQnViMlJsSUQwZ1ozSmhjR2hiWVdScVlXTmxiblJkTzF4dVhHNWNkRngwWEhScFppQW9ibTlrWlM1a2FYTjBZVzVqWlNBOVBUMGdMVEVwSUh0Y2JseDBYSFJjZEZ4MGJtOWtaUzVrYVhOMFlXNWpaU0E5SUdkeVlYQm9XMk4xY25KbGJuUmRMbVJwYzNSaGJtTmxJQ3NnTVR0Y2JseDBYSFJjZEZ4MGJtOWtaUzV3WVhKbGJuUWdQU0JqZFhKeVpXNTBPMXh1WEhSY2RGeDBYSFJ4ZFdWMVpTNTFibk5vYVdaMEtHRmthbUZqWlc1MEtUdGNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNkSDFjYmx4dVhIUnlaWFIxY200Z1ozSmhjR2c3WEc1OVhHNWNibVoxYm1OMGFXOXVJR3hwYm1zb1puSnZiU3dnZEc4cElIdGNibHgwY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2hoY21kektTQjdYRzVjZEZ4MGNtVjBkWEp1SUhSdktHWnliMjBvWVhKbmN5a3BPMXh1WEhSOU8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCM2NtRndRMjl1ZG1WeWMybHZiaWgwYjAxdlpHVnNMQ0JuY21Gd2FDa2dlMXh1WEhSMllYSWdjR0YwYUNBOUlGdG5jbUZ3YUZ0MGIwMXZaR1ZzWFM1d1lYSmxiblFzSUhSdlRXOWtaV3hkTzF4dVhIUjJZWElnWm00Z1BTQmpiMjUyWlhKemFXOXVjMXRuY21Gd2FGdDBiMDF2WkdWc1hTNXdZWEpsYm5SZFczUnZUVzlrWld4ZE8xeHVYRzVjZEhaaGNpQmpkWElnUFNCbmNtRndhRnQwYjAxdlpHVnNYUzV3WVhKbGJuUTdYRzVjZEhkb2FXeGxJQ2huY21Gd2FGdGpkWEpkTG5CaGNtVnVkQ2tnZTF4dVhIUmNkSEJoZEdndWRXNXphR2xtZENobmNtRndhRnRqZFhKZExuQmhjbVZ1ZENrN1hHNWNkRngwWm00Z1BTQnNhVzVyS0dOdmJuWmxjbk5wYjI1elcyZHlZWEJvVzJOMWNsMHVjR0Z5Wlc1MFhWdGpkWEpkTENCbWJpazdYRzVjZEZ4MFkzVnlJRDBnWjNKaGNHaGJZM1Z5WFM1d1lYSmxiblE3WEc1Y2RIMWNibHh1WEhSbWJpNWpiMjUyWlhKemFXOXVJRDBnY0dGMGFEdGNibHgwY21WMGRYSnVJR1p1TzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJQ2htY205dFRXOWtaV3dwSUh0Y2JseDBkbUZ5SUdkeVlYQm9JRDBnWkdWeWFYWmxRa1pUS0daeWIyMU5iMlJsYkNrN1hHNWNkSFpoY2lCamIyNTJaWEp6YVc5dUlEMGdlMzA3WEc1Y2JseDBkbUZ5SUcxdlpHVnNjeUE5SUU5aWFtVmpkQzVyWlhsektHZHlZWEJvS1R0Y2JseDBabTl5SUNoMllYSWdiR1Z1SUQwZ2JXOWtaV3h6TG14bGJtZDBhQ3dnYVNBOUlEQTdJR2tnUENCc1pXNDdJR2tyS3lrZ2UxeHVYSFJjZEhaaGNpQjBiMDF2WkdWc0lEMGdiVzlrWld4elcybGRPMXh1WEhSY2RIWmhjaUJ1YjJSbElEMGdaM0poY0doYmRHOU5iMlJsYkYwN1hHNWNibHgwWEhScFppQW9ibTlrWlM1d1lYSmxiblFnUFQwOUlHNTFiR3dwSUh0Y2JseDBYSFJjZEM4dklHNXZJSEJ2YzNOcFlteGxJR052Ym5abGNuTnBiMjRzSUc5eUlIUm9hWE1nYm05a1pTQnBjeUIwYUdVZ2MyOTFjbU5sSUcxdlpHVnNMbHh1WEhSY2RGeDBZMjl1ZEdsdWRXVTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MFkyOXVkbVZ5YzJsdmJsdDBiMDF2WkdWc1hTQTlJSGR5WVhCRGIyNTJaWEp6YVc5dUtIUnZUVzlrWld3c0lHZHlZWEJvS1R0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCamIyNTJaWEp6YVc5dU8xeHVmVHRjYmx4dUlpd2lKM1Z6WlNCemRISnBZM1FuWEhKY2JseHlYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjY2x4dVhIUmNJbUZzYVdObFlteDFaVndpT2lCYk1qUXdMQ0F5TkRnc0lESTFOVjBzWEhKY2JseDBYQ0poYm5ScGNYVmxkMmhwZEdWY0lqb2dXekkxTUN3Z01qTTFMQ0F5TVRWZExGeHlYRzVjZEZ3aVlYRjFZVndpT2lCYk1Dd2dNalUxTENBeU5UVmRMRnh5WEc1Y2RGd2lZWEYxWVcxaGNtbHVaVndpT2lCYk1USTNMQ0F5TlRVc0lESXhNbDBzWEhKY2JseDBYQ0poZW5WeVpWd2lPaUJiTWpRd0xDQXlOVFVzSURJMU5WMHNYSEpjYmx4MFhDSmlaV2xuWlZ3aU9pQmJNalExTENBeU5EVXNJREl5TUYwc1hISmNibHgwWENKaWFYTnhkV1ZjSWpvZ1d6STFOU3dnTWpJNExDQXhPVFpkTEZ4eVhHNWNkRndpWW14aFkydGNJam9nV3pBc0lEQXNJREJkTEZ4eVhHNWNkRndpWW14aGJtTm9aV1JoYkcxdmJtUmNJam9nV3pJMU5Td2dNak0xTENBeU1EVmRMRnh5WEc1Y2RGd2lZbXgxWlZ3aU9pQmJNQ3dnTUN3Z01qVTFYU3hjY2x4dVhIUmNJbUpzZFdWMmFXOXNaWFJjSWpvZ1d6RXpPQ3dnTkRNc0lESXlObDBzWEhKY2JseDBYQ0ppY205M2Jsd2lPaUJiTVRZMUxDQTBNaXdnTkRKZExGeHlYRzVjZEZ3aVluVnliSGwzYjI5a1hDSTZJRnN5TWpJc0lERTROQ3dnTVRNMVhTeGNjbHh1WEhSY0ltTmhaR1YwWW14MVpWd2lPaUJiT1RVc0lERTFPQ3dnTVRZd1hTeGNjbHh1WEhSY0ltTm9ZWEowY21WMWMyVmNJam9nV3pFeU55d2dNalUxTENBd1hTeGNjbHh1WEhSY0ltTm9iMk52YkdGMFpWd2lPaUJiTWpFd0xDQXhNRFVzSURNd1hTeGNjbHh1WEhSY0ltTnZjbUZzWENJNklGc3lOVFVzSURFeU55d2dPREJkTEZ4eVhHNWNkRndpWTI5eWJtWnNiM2RsY21Kc2RXVmNJam9nV3pFd01Dd2dNVFE1TENBeU16ZGRMRnh5WEc1Y2RGd2lZMjl5Ym5OcGJHdGNJam9nV3pJMU5Td2dNalE0TENBeU1qQmRMRnh5WEc1Y2RGd2lZM0pwYlhOdmJsd2lPaUJiTWpJd0xDQXlNQ3dnTmpCZExGeHlYRzVjZEZ3aVkzbGhibHdpT2lCYk1Dd2dNalUxTENBeU5UVmRMRnh5WEc1Y2RGd2laR0Z5YTJKc2RXVmNJam9nV3pBc0lEQXNJREV6T1Ywc1hISmNibHgwWENKa1lYSnJZM2xoYmx3aU9pQmJNQ3dnTVRNNUxDQXhNemxkTEZ4eVhHNWNkRndpWkdGeWEyZHZiR1JsYm5KdlpGd2lPaUJiTVRnMExDQXhNelFzSURFeFhTeGNjbHh1WEhSY0ltUmhjbXRuY21GNVhDSTZJRnN4Tmprc0lERTJPU3dnTVRZNVhTeGNjbHh1WEhSY0ltUmhjbXRuY21WbGJsd2lPaUJiTUN3Z01UQXdMQ0F3WFN4Y2NseHVYSFJjSW1SaGNtdG5jbVY1WENJNklGc3hOamtzSURFMk9Td2dNVFk1WFN4Y2NseHVYSFJjSW1SaGNtdHJhR0ZyYVZ3aU9pQmJNVGc1TENBeE9ETXNJREV3TjEwc1hISmNibHgwWENKa1lYSnJiV0ZuWlc1MFlWd2lPaUJiTVRNNUxDQXdMQ0F4TXpsZExGeHlYRzVjZEZ3aVpHRnlhMjlzYVhabFozSmxaVzVjSWpvZ1d6ZzFMQ0F4TURjc0lEUTNYU3hjY2x4dVhIUmNJbVJoY210dmNtRnVaMlZjSWpvZ1d6STFOU3dnTVRRd0xDQXdYU3hjY2x4dVhIUmNJbVJoY210dmNtTm9hV1JjSWpvZ1d6RTFNeXdnTlRBc0lESXdORjBzWEhKY2JseDBYQ0prWVhKcmNtVmtYQ0k2SUZzeE16a3NJREFzSURCZExGeHlYRzVjZEZ3aVpHRnlhM05oYkcxdmJsd2lPaUJiTWpNekxDQXhOVEFzSURFeU1sMHNYSEpjYmx4MFhDSmtZWEpyYzJWaFozSmxaVzVjSWpvZ1d6RTBNeXdnTVRnNExDQXhORE5kTEZ4eVhHNWNkRndpWkdGeWEzTnNZWFJsWW14MVpWd2lPaUJiTnpJc0lEWXhMQ0F4TXpsZExGeHlYRzVjZEZ3aVpHRnlhM05zWVhSbFozSmhlVndpT2lCYk5EY3NJRGM1TENBM09WMHNYSEpjYmx4MFhDSmtZWEpyYzJ4aGRHVm5jbVY1WENJNklGczBOeXdnTnprc0lEYzVYU3hjY2x4dVhIUmNJbVJoY210MGRYSnhkVzlwYzJWY0lqb2dXekFzSURJd05pd2dNakE1WFN4Y2NseHVYSFJjSW1SaGNtdDJhVzlzWlhSY0lqb2dXekUwT0N3Z01Dd2dNakV4WFN4Y2NseHVYSFJjSW1SbFpYQndhVzVyWENJNklGc3lOVFVzSURJd0xDQXhORGRkTEZ4eVhHNWNkRndpWkdWbGNITnJlV0pzZFdWY0lqb2dXekFzSURFNU1Td2dNalUxWFN4Y2NseHVYSFJjSW1ScGJXZHlZWGxjSWpvZ1d6RXdOU3dnTVRBMUxDQXhNRFZkTEZ4eVhHNWNkRndpWkdsdFozSmxlVndpT2lCYk1UQTFMQ0F4TURVc0lERXdOVjBzWEhKY2JseDBYQ0prYjJSblpYSmliSFZsWENJNklGc3pNQ3dnTVRRMExDQXlOVFZkTEZ4eVhHNWNkRndpWm1seVpXSnlhV05yWENJNklGc3hOemdzSURNMExDQXpORjBzWEhKY2JseDBYQ0ptYkc5eVlXeDNhR2wwWlZ3aU9pQmJNalUxTENBeU5UQXNJREkwTUYwc1hISmNibHgwWENKbWIzSmxjM1JuY21WbGJsd2lPaUJiTXpRc0lERXpPU3dnTXpSZExGeHlYRzVjZEZ3aVpuVmphSE5wWVZ3aU9pQmJNalUxTENBd0xDQXlOVFZkTEZ4eVhHNWNkRndpWjJGcGJuTmliM0p2WENJNklGc3lNakFzSURJeU1Dd2dNakl3WFN4Y2NseHVYSFJjSW1kb2IzTjBkMmhwZEdWY0lqb2dXekkwT0N3Z01qUTRMQ0F5TlRWZExGeHlYRzVjZEZ3aVoyOXNaRndpT2lCYk1qVTFMQ0F5TVRVc0lEQmRMRnh5WEc1Y2RGd2laMjlzWkdWdWNtOWtYQ0k2SUZzeU1UZ3NJREUyTlN3Z016SmRMRnh5WEc1Y2RGd2laM0poZVZ3aU9pQmJNVEk0TENBeE1qZ3NJREV5T0Ywc1hISmNibHgwWENKbmNtVmxibHdpT2lCYk1Dd2dNVEk0TENBd1hTeGNjbHh1WEhSY0ltZHlaV1Z1ZVdWc2JHOTNYQ0k2SUZzeE56TXNJREkxTlN3Z05EZGRMRnh5WEc1Y2RGd2laM0psZVZ3aU9pQmJNVEk0TENBeE1qZ3NJREV5T0Ywc1hISmNibHgwWENKb2IyNWxlV1JsZDF3aU9pQmJNalF3TENBeU5UVXNJREkwTUYwc1hISmNibHgwWENKb2IzUndhVzVyWENJNklGc3lOVFVzSURFd05Td2dNVGd3WFN4Y2NseHVYSFJjSW1sdVpHbGhibkpsWkZ3aU9pQmJNakExTENBNU1pd2dPVEpkTEZ4eVhHNWNkRndpYVc1a2FXZHZYQ0k2SUZzM05Td2dNQ3dnTVRNd1hTeGNjbHh1WEhSY0ltbDJiM0o1WENJNklGc3lOVFVzSURJMU5Td2dNalF3WFN4Y2NseHVYSFJjSW10b1lXdHBYQ0k2SUZzeU5EQXNJREl6TUN3Z01UUXdYU3hjY2x4dVhIUmNJbXhoZG1WdVpHVnlYQ0k2SUZzeU16QXNJREl6TUN3Z01qVXdYU3hjY2x4dVhIUmNJbXhoZG1WdVpHVnlZbXgxYzJoY0lqb2dXekkxTlN3Z01qUXdMQ0F5TkRWZExGeHlYRzVjZEZ3aWJHRjNibWR5WldWdVhDSTZJRnN4TWpRc0lESTFNaXdnTUYwc1hISmNibHgwWENKc1pXMXZibU5vYVdabWIyNWNJam9nV3pJMU5Td2dNalV3TENBeU1EVmRMRnh5WEc1Y2RGd2liR2xuYUhSaWJIVmxYQ0k2SUZzeE56TXNJREl4Tml3Z01qTXdYU3hjY2x4dVhIUmNJbXhwWjJoMFkyOXlZV3hjSWpvZ1d6STBNQ3dnTVRJNExDQXhNamhkTEZ4eVhHNWNkRndpYkdsbmFIUmplV0Z1WENJNklGc3lNalFzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW14cFoyaDBaMjlzWkdWdWNtOWtlV1ZzYkc5M1hDSTZJRnN5TlRBc0lESTFNQ3dnTWpFd1hTeGNjbHh1WEhSY0lteHBaMmgwWjNKaGVWd2lPaUJiTWpFeExDQXlNVEVzSURJeE1WMHNYSEpjYmx4MFhDSnNhV2RvZEdkeVpXVnVYQ0k2SUZzeE5EUXNJREl6T0N3Z01UUTBYU3hjY2x4dVhIUmNJbXhwWjJoMFozSmxlVndpT2lCYk1qRXhMQ0F5TVRFc0lESXhNVjBzWEhKY2JseDBYQ0pzYVdkb2RIQnBibXRjSWpvZ1d6STFOU3dnTVRneUxDQXhPVE5kTEZ4eVhHNWNkRndpYkdsbmFIUnpZV3h0YjI1Y0lqb2dXekkxTlN3Z01UWXdMQ0F4TWpKZExGeHlYRzVjZEZ3aWJHbG5hSFJ6WldGbmNtVmxibHdpT2lCYk16SXNJREUzT0N3Z01UY3dYU3hjY2x4dVhIUmNJbXhwWjJoMGMydDVZbXgxWlZ3aU9pQmJNVE0xTENBeU1EWXNJREkxTUYwc1hISmNibHgwWENKc2FXZG9kSE5zWVhSbFozSmhlVndpT2lCYk1URTVMQ0F4TXpZc0lERTFNMTBzWEhKY2JseDBYQ0pzYVdkb2RITnNZWFJsWjNKbGVWd2lPaUJiTVRFNUxDQXhNellzSURFMU0xMHNYSEpjYmx4MFhDSnNhV2RvZEhOMFpXVnNZbXgxWlZ3aU9pQmJNVGMyTENBeE9UWXNJREl5TWwwc1hISmNibHgwWENKc2FXZG9kSGxsYkd4dmQxd2lPaUJiTWpVMUxDQXlOVFVzSURJeU5GMHNYSEpjYmx4MFhDSnNhVzFsWENJNklGc3dMQ0F5TlRVc0lEQmRMRnh5WEc1Y2RGd2liR2x0WldkeVpXVnVYQ0k2SUZzMU1Dd2dNakExTENBMU1GMHNYSEpjYmx4MFhDSnNhVzVsYmx3aU9pQmJNalV3TENBeU5EQXNJREl6TUYwc1hISmNibHgwWENKdFlXZGxiblJoWENJNklGc3lOVFVzSURBc0lESTFOVjBzWEhKY2JseDBYQ0p0WVhKdmIyNWNJam9nV3pFeU9Dd2dNQ3dnTUYwc1hISmNibHgwWENKdFpXUnBkVzFoY1hWaGJXRnlhVzVsWENJNklGc3hNRElzSURJd05Td2dNVGN3WFN4Y2NseHVYSFJjSW0xbFpHbDFiV0pzZFdWY0lqb2dXekFzSURBc0lESXdOVjBzWEhKY2JseDBYQ0p0WldScGRXMXZjbU5vYVdSY0lqb2dXekU0Tml3Z09EVXNJREl4TVYwc1hISmNibHgwWENKdFpXUnBkVzF3ZFhKd2JHVmNJam9nV3pFME55d2dNVEV5TENBeU1UbGRMRnh5WEc1Y2RGd2liV1ZrYVhWdGMyVmhaM0psWlc1Y0lqb2dXell3TENBeE56a3NJREV4TTEwc1hISmNibHgwWENKdFpXUnBkVzF6YkdGMFpXSnNkV1ZjSWpvZ1d6RXlNeXdnTVRBMExDQXlNemhkTEZ4eVhHNWNkRndpYldWa2FYVnRjM0J5YVc1blozSmxaVzVjSWpvZ1d6QXNJREkxTUN3Z01UVTBYU3hjY2x4dVhIUmNJbTFsWkdsMWJYUjFjbkYxYjJselpWd2lPaUJiTnpJc0lESXdPU3dnTWpBMFhTeGNjbHh1WEhSY0ltMWxaR2wxYlhacGIyeGxkSEpsWkZ3aU9pQmJNVGs1TENBeU1Td2dNVE16WFN4Y2NseHVYSFJjSW0xcFpHNXBaMmgwWW14MVpWd2lPaUJiTWpVc0lESTFMQ0F4TVRKZExGeHlYRzVjZEZ3aWJXbHVkR055WldGdFhDSTZJRnN5TkRVc0lESTFOU3dnTWpVd1hTeGNjbHh1WEhSY0ltMXBjM1I1Y205elpWd2lPaUJiTWpVMUxDQXlNamdzSURJeU5WMHNYSEpjYmx4MFhDSnRiMk5qWVhOcGJsd2lPaUJiTWpVMUxDQXlNamdzSURFNE1WMHNYSEpjYmx4MFhDSnVZWFpoYW05M2FHbDBaVndpT2lCYk1qVTFMQ0F5TWpJc0lERTNNMTBzWEhKY2JseDBYQ0p1WVhaNVhDSTZJRnN3TENBd0xDQXhNamhkTEZ4eVhHNWNkRndpYjJ4a2JHRmpaVndpT2lCYk1qVXpMQ0F5TkRVc0lESXpNRjBzWEhKY2JseDBYQ0p2YkdsMlpWd2lPaUJiTVRJNExDQXhNamdzSURCZExGeHlYRzVjZEZ3aWIyeHBkbVZrY21GaVhDSTZJRnN4TURjc0lERTBNaXdnTXpWZExGeHlYRzVjZEZ3aWIzSmhibWRsWENJNklGc3lOVFVzSURFMk5Td2dNRjBzWEhKY2JseDBYQ0p2Y21GdVoyVnlaV1JjSWpvZ1d6STFOU3dnTmprc0lEQmRMRnh5WEc1Y2RGd2liM0pqYUdsa1hDSTZJRnN5TVRnc0lERXhNaXdnTWpFMFhTeGNjbHh1WEhSY0luQmhiR1ZuYjJ4a1pXNXliMlJjSWpvZ1d6SXpPQ3dnTWpNeUxDQXhOekJkTEZ4eVhHNWNkRndpY0dGc1pXZHlaV1Z1WENJNklGc3hOVElzSURJMU1Td2dNVFV5WFN4Y2NseHVYSFJjSW5CaGJHVjBkWEp4ZFc5cGMyVmNJam9nV3pFM05Td2dNak00TENBeU16aGRMRnh5WEc1Y2RGd2ljR0ZzWlhacGIyeGxkSEpsWkZ3aU9pQmJNakU1TENBeE1USXNJREUwTjEwc1hISmNibHgwWENKd1lYQmhlV0YzYUdsd1hDSTZJRnN5TlRVc0lESXpPU3dnTWpFelhTeGNjbHh1WEhSY0luQmxZV05vY0hWbVpsd2lPaUJiTWpVMUxDQXlNVGdzSURFNE5WMHNYSEpjYmx4MFhDSndaWEoxWENJNklGc3lNRFVzSURFek15d2dOak5kTEZ4eVhHNWNkRndpY0dsdWExd2lPaUJiTWpVMUxDQXhPVElzSURJd00xMHNYSEpjYmx4MFhDSndiSFZ0WENJNklGc3lNakVzSURFMk1Dd2dNakl4WFN4Y2NseHVYSFJjSW5CdmQyUmxjbUpzZFdWY0lqb2dXekUzTml3Z01qSTBMQ0F5TXpCZExGeHlYRzVjZEZ3aWNIVnljR3hsWENJNklGc3hNamdzSURBc0lERXlPRjBzWEhKY2JseDBYQ0p5WldKbFkyTmhjSFZ5Y0d4bFhDSTZJRnN4TURJc0lEVXhMQ0F4TlROZExGeHlYRzVjZEZ3aWNtVmtYQ0k2SUZzeU5UVXNJREFzSURCZExGeHlYRzVjZEZ3aWNtOXplV0p5YjNkdVhDSTZJRnN4T0Rnc0lERTBNeXdnTVRRelhTeGNjbHh1WEhSY0luSnZlV0ZzWW14MVpWd2lPaUJiTmpVc0lERXdOU3dnTWpJMVhTeGNjbHh1WEhSY0luTmhaR1JzWldKeWIzZHVYQ0k2SUZzeE16a3NJRFk1TENBeE9WMHNYSEpjYmx4MFhDSnpZV3h0YjI1Y0lqb2dXekkxTUN3Z01USTRMQ0F4TVRSZExGeHlYRzVjZEZ3aWMyRnVaSGxpY205M2Jsd2lPaUJiTWpRMExDQXhOalFzSURrMlhTeGNjbHh1WEhSY0luTmxZV2R5WldWdVhDSTZJRnMwTml3Z01UTTVMQ0E0TjEwc1hISmNibHgwWENKelpXRnphR1ZzYkZ3aU9pQmJNalUxTENBeU5EVXNJREl6T0Ywc1hISmNibHgwWENKemFXVnVibUZjSWpvZ1d6RTJNQ3dnT0RJc0lEUTFYU3hjY2x4dVhIUmNJbk5wYkhabGNsd2lPaUJiTVRreUxDQXhPVElzSURFNU1sMHNYSEpjYmx4MFhDSnphM2xpYkhWbFhDSTZJRnN4TXpVc0lESXdOaXdnTWpNMVhTeGNjbHh1WEhSY0luTnNZWFJsWW14MVpWd2lPaUJiTVRBMkxDQTVNQ3dnTWpBMVhTeGNjbHh1WEhSY0luTnNZWFJsWjNKaGVWd2lPaUJiTVRFeUxDQXhNamdzSURFME5GMHNYSEpjYmx4MFhDSnpiR0YwWldkeVpYbGNJam9nV3pFeE1pd2dNVEk0TENBeE5EUmRMRnh5WEc1Y2RGd2ljMjV2ZDF3aU9pQmJNalUxTENBeU5UQXNJREkxTUYwc1hISmNibHgwWENKemNISnBibWRuY21WbGJsd2lPaUJiTUN3Z01qVTFMQ0F4TWpkZExGeHlYRzVjZEZ3aWMzUmxaV3hpYkhWbFhDSTZJRnMzTUN3Z01UTXdMQ0F4T0RCZExGeHlYRzVjZEZ3aWRHRnVYQ0k2SUZzeU1UQXNJREU0TUN3Z01UUXdYU3hjY2x4dVhIUmNJblJsWVd4Y0lqb2dXekFzSURFeU9Dd2dNVEk0WFN4Y2NseHVYSFJjSW5Sb2FYTjBiR1ZjSWpvZ1d6SXhOaXdnTVRreExDQXlNVFpkTEZ4eVhHNWNkRndpZEc5dFlYUnZYQ0k2SUZzeU5UVXNJRGs1TENBM01WMHNYSEpjYmx4MFhDSjBkWEp4ZFc5cGMyVmNJam9nV3pZMExDQXlNalFzSURJd09GMHNYSEpjYmx4MFhDSjJhVzlzWlhSY0lqb2dXekl6T0N3Z01UTXdMQ0F5TXpoZExGeHlYRzVjZEZ3aWQyaGxZWFJjSWpvZ1d6STBOU3dnTWpJeUxDQXhOemxkTEZ4eVhHNWNkRndpZDJocGRHVmNJam9nV3pJMU5Td2dNalUxTENBeU5UVmRMRnh5WEc1Y2RGd2lkMmhwZEdWemJXOXJaVndpT2lCYk1qUTFMQ0F5TkRVc0lESTBOVjBzWEhKY2JseDBYQ0o1Wld4c2IzZGNJam9nV3pJMU5Td2dNalUxTENBd1hTeGNjbHh1WEhSY0lubGxiR3h2ZDJkeVpXVnVYQ0k2SUZzeE5UUXNJREl3TlN3Z05UQmRYSEpjYm4wN1hISmNiaUlzSWk4cUlFMUpWQ0JzYVdObGJuTmxJQ292WEc1MllYSWdZMjlzYjNKT1lXMWxjeUE5SUhKbGNYVnBjbVVvSjJOdmJHOXlMVzVoYldVbktUdGNiblpoY2lCemQybDZlbXhsSUQwZ2NtVnhkV2x5WlNnbmMybHRjR3hsTFhOM2FYcDZiR1VuS1R0Y2JseHVkbUZ5SUhKbGRtVnljMlZPWVcxbGN5QTlJSHQ5TzF4dVhHNHZMeUJqY21WaGRHVWdZU0JzYVhOMElHOW1JSEpsZG1WeWMyVWdZMjlzYjNJZ2JtRnRaWE5jYm1admNpQW9kbUZ5SUc1aGJXVWdhVzRnWTI5c2IzSk9ZVzFsY3lrZ2UxeHVYSFJwWmlBb1kyOXNiM0pPWVcxbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNodVlXMWxLU2tnZTF4dVhIUmNkSEpsZG1WeWMyVk9ZVzFsYzF0amIyeHZjazVoYldWelcyNWhiV1ZkWFNBOUlHNWhiV1U3WEc1Y2RIMWNibjFjYmx4dWRtRnlJR056SUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN1hHNWNkSFJ2T2lCN2ZTeGNibHgwWjJWME9pQjdmVnh1ZlR0Y2JseHVZM011WjJWMElEMGdablZ1WTNScGIyNGdLSE4wY21sdVp5a2dlMXh1WEhSMllYSWdjSEpsWm1sNElEMGdjM1J5YVc1bkxuTjFZbk4wY21sdVp5Z3dMQ0F6S1M1MGIweHZkMlZ5UTJGelpTZ3BPMXh1WEhSMllYSWdkbUZzTzF4dVhIUjJZWElnYlc5a1pXdzdYRzVjZEhOM2FYUmphQ0FvY0hKbFptbDRLU0I3WEc1Y2RGeDBZMkZ6WlNBbmFITnNKenBjYmx4MFhIUmNkSFpoYkNBOUlHTnpMbWRsZEM1b2Myd29jM1J5YVc1bktUdGNibHgwWEhSY2RHMXZaR1ZzSUQwZ0oyaHpiQ2M3WEc1Y2RGeDBYSFJpY21WaGF6dGNibHgwWEhSallYTmxJQ2RvZDJJbk9seHVYSFJjZEZ4MGRtRnNJRDBnWTNNdVoyVjBMbWgzWWloemRISnBibWNwTzF4dVhIUmNkRngwYlc5a1pXd2dQU0FuYUhkaUp6dGNibHgwWEhSY2RHSnlaV0ZyTzF4dVhIUmNkR1JsWm1GMWJIUTZYRzVjZEZ4MFhIUjJZV3dnUFNCamN5NW5aWFF1Y21kaUtITjBjbWx1WnlrN1hHNWNkRngwWEhSdGIyUmxiQ0E5SUNkeVoySW5PMXh1WEhSY2RGeDBZbkpsWVdzN1hHNWNkSDFjYmx4dVhIUnBaaUFvSVhaaGJDa2dlMXh1WEhSY2RISmxkSFZ5YmlCdWRXeHNPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJSHR0YjJSbGJEb2diVzlrWld3c0lIWmhiSFZsT2lCMllXeDlPMXh1ZlR0Y2JseHVZM011WjJWMExuSm5ZaUE5SUdaMWJtTjBhVzl1SUNoemRISnBibWNwSUh0Y2JseDBhV1lnS0NGemRISnBibWNwSUh0Y2JseDBYSFJ5WlhSMWNtNGdiblZzYkR0Y2JseDBmVnh1WEc1Y2RIWmhjaUJoWW1KeUlEMGdMMTRqS0Z0aExXWXdMVGxkZXpNc05IMHBKQzlwTzF4dVhIUjJZWElnYUdWNElEMGdMMTRqS0Z0aExXWXdMVGxkZXpaOUtTaGJZUzFtTUMwNVhYc3lmU2svSkM5cE8xeHVYSFIyWVhJZ2NtZGlZU0E5SUM5ZWNtZGlZVDljWENoY1hITXFLRnNyTFYwL1hGeGtLeWxjWEhNcUxGeGNjeW9vV3lzdFhUOWNYR1FyS1Z4Y2N5b3NYRnh6S2loYkt5MWRQMXhjWkNzcFhGeHpLaWcvT2l4Y1hITXFLRnNyTFYwL1cxeGNaRnhjTGwwcktWeGNjeW9wUDF4Y0tTUXZPMXh1WEhSMllYSWdjR1Z5SUQwZ0wxNXlaMkpoUDF4Y0tGeGNjeW9vV3lzdFhUOWJYRnhrWEZ3dVhTc3BYRndsWEZ4ektpeGNYSE1xS0ZzckxWMC9XMXhjWkZ4Y0xsMHJLVnhjSlZ4Y2N5b3NYRnh6S2loYkt5MWRQMXRjWEdSY1hDNWRLeWxjWENWY1hITXFLRDg2TEZ4Y2N5b29XeXN0WFQ5YlhGeGtYRnd1WFNzcFhGeHpLaWsvWEZ3cEpDODdYRzVjZEhaaGNpQnJaWGwzYjNKa0lEMGdMeWhjWEVRcktTODdYRzVjYmx4MGRtRnlJSEpuWWlBOUlGc3dMQ0F3TENBd0xDQXhYVHRjYmx4MGRtRnlJRzFoZEdOb08xeHVYSFIyWVhJZ2FUdGNibHgwZG1GeUlHaGxlRUZzY0doaE8xeHVYRzVjZEdsbUlDaHRZWFJqYUNBOUlITjBjbWx1Wnk1dFlYUmphQ2hvWlhncEtTQjdYRzVjZEZ4MGFHVjRRV3h3YUdFZ1BTQnRZWFJqYUZzeVhUdGNibHgwWEhSdFlYUmphQ0E5SUcxaGRHTm9XekZkTzF4dVhHNWNkRngwWm05eUlDaHBJRDBnTURzZ2FTQThJRE03SUdrckt5a2dlMXh1WEhSY2RGeDBMeThnYUhSMGNITTZMeTlxYzNCbGNtWXVZMjl0TDNOc2FXTmxMWFp6TFhOMVluTjBjaTEyY3kxemRXSnpkSEpwYm1jdGJXVjBhRzlrY3kxc2IyNW5MWE4wY21sdVp5OHhPVnh1WEhSY2RGeDBkbUZ5SUdreUlEMGdhU0FxSURJN1hHNWNkRngwWEhSeVoySmJhVjBnUFNCd1lYSnpaVWx1ZENodFlYUmphQzV6YkdsalpTaHBNaXdnYVRJZ0t5QXlLU3dnTVRZcE8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaG9aWGhCYkhCb1lTa2dlMXh1WEhSY2RGeDBjbWRpV3pOZElEMGdUV0YwYUM1eWIzVnVaQ2dvY0dGeWMyVkpiblFvYUdWNFFXeHdhR0VzSURFMktTQXZJREkxTlNrZ0tpQXhNREFwSUM4Z01UQXdPMXh1WEhSY2RIMWNibHgwZlNCbGJITmxJR2xtSUNodFlYUmphQ0E5SUhOMGNtbHVaeTV0WVhSamFDaGhZbUp5S1NrZ2UxeHVYSFJjZEcxaGRHTm9JRDBnYldGMFkyaGJNVjA3WEc1Y2RGeDBhR1Y0UVd4d2FHRWdQU0J0WVhSamFGc3pYVHRjYmx4dVhIUmNkR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQXpPeUJwS3lzcElIdGNibHgwWEhSY2RISm5ZbHRwWFNBOUlIQmhjbk5sU1c1MEtHMWhkR05vVzJsZElDc2diV0YwWTJoYmFWMHNJREUyS1R0Y2JseDBYSFI5WEc1Y2JseDBYSFJwWmlBb2FHVjRRV3h3YUdFcElIdGNibHgwWEhSY2RISm5ZbHN6WFNBOUlFMWhkR2d1Y205MWJtUW9LSEJoY25ObFNXNTBLR2hsZUVGc2NHaGhJQ3NnYUdWNFFXeHdhR0VzSURFMktTQXZJREkxTlNrZ0tpQXhNREFwSUM4Z01UQXdPMXh1WEhSY2RIMWNibHgwZlNCbGJITmxJR2xtSUNodFlYUmphQ0E5SUhOMGNtbHVaeTV0WVhSamFDaHlaMkpoS1NrZ2UxeHVYSFJjZEdadmNpQW9hU0E5SURBN0lHa2dQQ0F6T3lCcEt5c3BJSHRjYmx4MFhIUmNkSEpuWWx0cFhTQTlJSEJoY25ObFNXNTBLRzFoZEdOb1cya2dLeUF4WFN3Z01DazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLRzFoZEdOb1d6UmRLU0I3WEc1Y2RGeDBYSFJ5WjJKYk0xMGdQU0J3WVhKelpVWnNiMkYwS0cxaGRHTm9XelJkS1R0Y2JseDBYSFI5WEc1Y2RIMGdaV3h6WlNCcFppQW9iV0YwWTJnZ1BTQnpkSEpwYm1jdWJXRjBZMmdvY0dWeUtTa2dlMXh1WEhSY2RHWnZjaUFvYVNBOUlEQTdJR2tnUENBek95QnBLeXNwSUh0Y2JseDBYSFJjZEhKbllsdHBYU0E5SUUxaGRHZ3VjbTkxYm1Rb2NHRnljMlZHYkc5aGRDaHRZWFJqYUZ0cElDc2dNVjBwSUNvZ01pNDFOU2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0cxaGRHTm9XelJkS1NCN1hHNWNkRngwWEhSeVoySmJNMTBnUFNCd1lYSnpaVVpzYjJGMEtHMWhkR05vV3pSZEtUdGNibHgwWEhSOVhHNWNkSDBnWld4elpTQnBaaUFvYldGMFkyZ2dQU0J6ZEhKcGJtY3ViV0YwWTJnb2EyVjVkMjl5WkNrcElIdGNibHgwWEhScFppQW9iV0YwWTJoYk1WMGdQVDA5SUNkMGNtRnVjM0JoY21WdWRDY3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQmJNQ3dnTUN3Z01Dd2dNRjA3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbWRpSUQwZ1kyOXNiM0pPWVcxbGMxdHRZWFJqYUZzeFhWMDdYRzVjYmx4MFhIUnBaaUFvSVhKbllpa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHNTFiR3c3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbWRpV3pOZElEMGdNVHRjYmx4dVhIUmNkSEpsZEhWeWJpQnlaMkk3WEc1Y2RIMGdaV3h6WlNCN1hHNWNkRngwY21WMGRYSnVJRzUxYkd3N1hHNWNkSDFjYmx4dVhIUm1iM0lnS0drZ1BTQXdPeUJwSUR3Z016c2dhU3NyS1NCN1hHNWNkRngwY21kaVcybGRJRDBnWTJ4aGJYQW9jbWRpVzJsZExDQXdMQ0F5TlRVcE8xeHVYSFI5WEc1Y2RISm5ZbHN6WFNBOUlHTnNZVzF3S0hKbllsc3pYU3dnTUN3Z01TazdYRzVjYmx4MGNtVjBkWEp1SUhKbllqdGNibjA3WEc1Y2JtTnpMbWRsZEM1b2Myd2dQU0JtZFc1amRHbHZiaUFvYzNSeWFXNW5LU0I3WEc1Y2RHbG1JQ2doYzNSeWFXNW5LU0I3WEc1Y2RGeDBjbVYwZFhKdUlHNTFiR3c3WEc1Y2RIMWNibHh1WEhSMllYSWdhSE5zSUQwZ0wxNW9jMnhoUDF4Y0tGeGNjeW9vV3lzdFhUOG9QenBjWEdRcVhGd3VLVDljWEdRcktTZy9PbVJsWnlrL1hGeHpLaXhjWEhNcUtGc3JMVjAvVzF4Y1pGeGNMbDByS1NWY1hITXFMRnhjY3lvb1d5c3RYVDliWEZ4a1hGd3VYU3NwSlZ4Y2N5b29Qem9zWEZ4ektpaGJLeTFkUDF0Y1hHUmNYQzVkS3lsY1hITXFLVDljWENra0x6dGNibHgwZG1GeUlHMWhkR05vSUQwZ2MzUnlhVzVuTG0xaGRHTm9LR2h6YkNrN1hHNWNibHgwYVdZZ0tHMWhkR05vS1NCN1hHNWNkRngwZG1GeUlHRnNjR2hoSUQwZ2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzMFhTazdYRzVjZEZ4MGRtRnlJR2dnUFNBb2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzeFhTa2dLeUF6TmpBcElDVWdNell3TzF4dVhIUmNkSFpoY2lCeklEMGdZMnhoYlhBb2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzeVhTa3NJREFzSURFd01DazdYRzVjZEZ4MGRtRnlJR3dnUFNCamJHRnRjQ2h3WVhKelpVWnNiMkYwS0cxaGRHTm9Xek5kS1N3Z01Dd2dNVEF3S1R0Y2JseDBYSFIyWVhJZ1lTQTlJR05zWVcxd0tHbHpUbUZPS0dGc2NHaGhLU0EvSURFZ09pQmhiSEJvWVN3Z01Dd2dNU2s3WEc1Y2JseDBYSFJ5WlhSMWNtNGdXMmdzSUhNc0lHd3NJR0ZkTzF4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUc1MWJHdzdYRzU5TzF4dVhHNWpjeTVuWlhRdWFIZGlJRDBnWm5WdVkzUnBiMjRnS0hOMGNtbHVaeWtnZTF4dVhIUnBaaUFvSVhOMGNtbHVaeWtnZTF4dVhIUmNkSEpsZEhWeWJpQnVkV3hzTzF4dVhIUjlYRzVjYmx4MGRtRnlJR2gzWWlBOUlDOWVhSGRpWEZ3b1hGeHpLaWhiS3kxZFAxeGNaQ3BiWEZ3dVhUOWNYR1FyS1NnL09tUmxaeWsvWEZ4ektpeGNYSE1xS0ZzckxWMC9XMXhjWkZ4Y0xsMHJLU1ZjWEhNcUxGeGNjeW9vV3lzdFhUOWJYRnhrWEZ3dVhTc3BKVnhjY3lvb1B6b3NYRnh6S2loYkt5MWRQMXRjWEdSY1hDNWRLeWxjWEhNcUtUOWNYQ2trTHp0Y2JseDBkbUZ5SUcxaGRHTm9JRDBnYzNSeWFXNW5MbTFoZEdOb0tHaDNZaWs3WEc1Y2JseDBhV1lnS0cxaGRHTm9LU0I3WEc1Y2RGeDBkbUZ5SUdGc2NHaGhJRDBnY0dGeWMyVkdiRzloZENodFlYUmphRnMwWFNrN1hHNWNkRngwZG1GeUlHZ2dQU0FvS0hCaGNuTmxSbXh2WVhRb2JXRjBZMmhiTVYwcElDVWdNell3S1NBcklETTJNQ2tnSlNBek5qQTdYRzVjZEZ4MGRtRnlJSGNnUFNCamJHRnRjQ2h3WVhKelpVWnNiMkYwS0cxaGRHTm9XekpkS1N3Z01Dd2dNVEF3S1R0Y2JseDBYSFIyWVhJZ1lpQTlJR05zWVcxd0tIQmhjbk5sUm14dllYUW9iV0YwWTJoYk0xMHBMQ0F3TENBeE1EQXBPMXh1WEhSY2RIWmhjaUJoSUQwZ1kyeGhiWEFvYVhOT1lVNG9ZV3h3YUdFcElEOGdNU0E2SUdGc2NHaGhMQ0F3TENBeEtUdGNibHgwWEhSeVpYUjFjbTRnVzJnc0lIY3NJR0lzSUdGZE8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlHNTFiR3c3WEc1OU8xeHVYRzVqY3k1MGJ5NW9aWGdnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEhaaGNpQnlaMkpoSUQwZ2MzZHBlbnBzWlNoaGNtZDFiV1Z1ZEhNcE8xeHVYRzVjZEhKbGRIVnliaUFvWEc1Y2RGeDBKeU1uSUN0Y2JseDBYSFJvWlhoRWIzVmliR1VvY21kaVlWc3dYU2tnSzF4dVhIUmNkR2hsZUVSdmRXSnNaU2h5WjJKaFd6RmRLU0FyWEc1Y2RGeDBhR1Y0Ukc5MVlteGxLSEpuWW1GYk1sMHBJQ3RjYmx4MFhIUW9jbWRpWVZzelhTQThJREZjYmx4MFhIUmNkRDhnS0dobGVFUnZkV0pzWlNoTllYUm9Mbkp2ZFc1a0tISm5ZbUZiTTEwZ0tpQXlOVFVwS1NsY2JseDBYSFJjZERvZ0p5Y3BYRzVjZENrN1hHNTlPMXh1WEc1amN5NTBieTV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RIWmhjaUJ5WjJKaElEMGdjM2RwZW5wc1pTaGhjbWQxYldWdWRITXBPMXh1WEc1Y2RISmxkSFZ5YmlCeVoySmhMbXhsYm1kMGFDQThJRFFnZkh3Z2NtZGlZVnN6WFNBOVBUMGdNVnh1WEhSY2REOGdKM0puWWlnbklDc2dUV0YwYUM1eWIzVnVaQ2h5WjJKaFd6QmRLU0FySUNjc0lDY2dLeUJOWVhSb0xuSnZkVzVrS0hKblltRmJNVjBwSUNzZ0p5d2dKeUFySUUxaGRHZ3VjbTkxYm1Rb2NtZGlZVnN5WFNrZ0t5QW5LU2RjYmx4MFhIUTZJQ2R5WjJKaEtDY2dLeUJOWVhSb0xuSnZkVzVrS0hKblltRmJNRjBwSUNzZ0p5d2dKeUFySUUxaGRHZ3VjbTkxYm1Rb2NtZGlZVnN4WFNrZ0t5QW5MQ0FuSUNzZ1RXRjBhQzV5YjNWdVpDaHlaMkpoV3pKZEtTQXJJQ2NzSUNjZ0t5QnlaMkpoV3pOZElDc2dKeWtuTzF4dWZUdGNibHh1WTNNdWRHOHVjbWRpTG5CbGNtTmxiblFnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEhaaGNpQnlaMkpoSUQwZ2MzZHBlbnBzWlNoaGNtZDFiV1Z1ZEhNcE8xeHVYRzVjZEhaaGNpQnlJRDBnVFdGMGFDNXliM1Z1WkNoeVoySmhXekJkSUM4Z01qVTFJQ29nTVRBd0tUdGNibHgwZG1GeUlHY2dQU0JOWVhSb0xuSnZkVzVrS0hKblltRmJNVjBnTHlBeU5UVWdLaUF4TURBcE8xeHVYSFIyWVhJZ1lpQTlJRTFoZEdndWNtOTFibVFvY21kaVlWc3lYU0F2SURJMU5TQXFJREV3TUNrN1hHNWNibHgwY21WMGRYSnVJSEpuWW1FdWJHVnVaM1JvSUR3Z05DQjhmQ0J5WjJKaFd6TmRJRDA5UFNBeFhHNWNkRngwUHlBbmNtZGlLQ2NnS3lCeUlDc2dKeVVzSUNjZ0t5Qm5JQ3NnSnlVc0lDY2dLeUJpSUNzZ0p5VXBKMXh1WEhSY2REb2dKM0puWW1Fb0p5QXJJSElnS3lBbkpTd2dKeUFySUdjZ0t5QW5KU3dnSnlBcklHSWdLeUFuSlN3Z0p5QXJJSEpuWW1GYk0xMGdLeUFuS1NjN1hHNTlPMXh1WEc1amN5NTBieTVvYzJ3Z1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RIWmhjaUJvYzJ4aElEMGdjM2RwZW5wc1pTaGhjbWQxYldWdWRITXBPMXh1WEhSeVpYUjFjbTRnYUhOc1lTNXNaVzVuZEdnZ1BDQTBJSHg4SUdoemJHRmJNMTBnUFQwOUlERmNibHgwWEhRL0lDZG9jMndvSnlBcklHaHpiR0ZiTUYwZ0t5QW5MQ0FuSUNzZ2FITnNZVnN4WFNBcklDY2xMQ0FuSUNzZ2FITnNZVnN5WFNBcklDY2xLU2RjYmx4MFhIUTZJQ2RvYzJ4aEtDY2dLeUJvYzJ4aFd6QmRJQ3NnSnl3Z0p5QXJJR2h6YkdGYk1WMGdLeUFuSlN3Z0p5QXJJR2h6YkdGYk1sMGdLeUFuSlN3Z0p5QXJJR2h6YkdGYk0xMGdLeUFuS1NjN1hHNTlPMXh1WEc0dkx5Qm9kMklnYVhNZ1lTQmlhWFFnWkdsbVptVnlaVzUwSUhSb1lXNGdjbWRpS0dFcElDWWdhSE5zS0dFcElITnBibU5sSUhSb1pYSmxJR2x6SUc1dklHRnNjR2hoSUhOd1pXTnBabWxqSUhONWJuUmhlRnh1THk4Z0tHaDNZaUJvWVhabElHRnNjR2hoSUc5d2RHbHZibUZzSUNZZ01TQnBjeUJrWldaaGRXeDBJSFpoYkhWbEtWeHVZM011ZEc4dWFIZGlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFIyWVhJZ2FIZGlZU0E5SUhOM2FYcDZiR1VvWVhKbmRXMWxiblJ6S1R0Y2JseHVYSFIyWVhJZ1lTQTlJQ2NuTzF4dVhIUnBaaUFvYUhkaVlTNXNaVzVuZEdnZ1BqMGdOQ0FtSmlCb2QySmhXek5kSUNFOVBTQXhLU0I3WEc1Y2RGeDBZU0E5SUNjc0lDY2dLeUJvZDJKaFd6TmRPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJQ2RvZDJJb0p5QXJJR2gzWW1GYk1GMGdLeUFuTENBbklDc2dhSGRpWVZzeFhTQXJJQ2NsTENBbklDc2dhSGRpWVZzeVhTQXJJQ2NsSnlBcklHRWdLeUFuS1NjN1hHNTlPMXh1WEc1amN5NTBieTVyWlhsM2IzSmtJRDBnWm5WdVkzUnBiMjRnS0hKbllpa2dlMXh1WEhSeVpYUjFjbTRnY21WMlpYSnpaVTVoYldWelczSm5ZaTV6YkdsalpTZ3dMQ0F6S1YwN1hHNTlPMXh1WEc0dkx5Qm9aV3h3WlhKelhHNW1kVzVqZEdsdmJpQmpiR0Z0Y0NodWRXMHNJRzFwYml3Z2JXRjRLU0I3WEc1Y2RISmxkSFZ5YmlCTllYUm9MbTFwYmloTllYUm9MbTFoZUNodGFXNHNJRzUxYlNrc0lHMWhlQ2s3WEc1OVhHNWNibVoxYm1OMGFXOXVJR2hsZUVSdmRXSnNaU2h1ZFcwcElIdGNibHgwZG1GeUlITjBjaUE5SUc1MWJTNTBiMU4wY21sdVp5Z3hOaWt1ZEc5VmNIQmxja05oYzJVb0tUdGNibHgwY21WMGRYSnVJQ2h6ZEhJdWJHVnVaM1JvSUR3Z01pa2dQeUFuTUNjZ0t5QnpkSElnT2lCemRISTdYRzU5WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2RjY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh5WEc1Y2RGd2lZV3hwWTJWaWJIVmxYQ0k2SUZzeU5EQXNJREkwT0N3Z01qVTFYU3hjY2x4dVhIUmNJbUZ1ZEdseGRXVjNhR2wwWlZ3aU9pQmJNalV3TENBeU16VXNJREl4TlYwc1hISmNibHgwWENKaGNYVmhYQ0k2SUZzd0xDQXlOVFVzSURJMU5WMHNYSEpjYmx4MFhDSmhjWFZoYldGeWFXNWxYQ0k2SUZzeE1qY3NJREkxTlN3Z01qRXlYU3hjY2x4dVhIUmNJbUY2ZFhKbFhDSTZJRnN5TkRBc0lESTFOU3dnTWpVMVhTeGNjbHh1WEhSY0ltSmxhV2RsWENJNklGc3lORFVzSURJME5Td2dNakl3WFN4Y2NseHVYSFJjSW1KcGMzRjFaVndpT2lCYk1qVTFMQ0F5TWpnc0lERTVObDBzWEhKY2JseDBYQ0ppYkdGamExd2lPaUJiTUN3Z01Dd2dNRjBzWEhKY2JseDBYQ0ppYkdGdVkyaGxaR0ZzYlc5dVpGd2lPaUJiTWpVMUxDQXlNelVzSURJd05WMHNYSEpjYmx4MFhDSmliSFZsWENJNklGc3dMQ0F3TENBeU5UVmRMRnh5WEc1Y2RGd2lZbXgxWlhacGIyeGxkRndpT2lCYk1UTTRMQ0EwTXl3Z01qSTJYU3hjY2x4dVhIUmNJbUp5YjNkdVhDSTZJRnN4TmpVc0lEUXlMQ0EwTWwwc1hISmNibHgwWENKaWRYSnNlWGR2YjJSY0lqb2dXekl5TWl3Z01UZzBMQ0F4TXpWZExGeHlYRzVjZEZ3aVkyRmtaWFJpYkhWbFhDSTZJRnM1TlN3Z01UVTRMQ0F4TmpCZExGeHlYRzVjZEZ3aVkyaGhjblJ5WlhWelpWd2lPaUJiTVRJM0xDQXlOVFVzSURCZExGeHlYRzVjZEZ3aVkyaHZZMjlzWVhSbFhDSTZJRnN5TVRBc0lERXdOU3dnTXpCZExGeHlYRzVjZEZ3aVkyOXlZV3hjSWpvZ1d6STFOU3dnTVRJM0xDQTRNRjBzWEhKY2JseDBYQ0pqYjNKdVpteHZkMlZ5WW14MVpWd2lPaUJiTVRBd0xDQXhORGtzSURJek4xMHNYSEpjYmx4MFhDSmpiM0p1YzJsc2Exd2lPaUJiTWpVMUxDQXlORGdzSURJeU1GMHNYSEpjYmx4MFhDSmpjbWx0YzI5dVhDSTZJRnN5TWpBc0lESXdMQ0EyTUYwc1hISmNibHgwWENKamVXRnVYQ0k2SUZzd0xDQXlOVFVzSURJMU5WMHNYSEpjYmx4MFhDSmtZWEpyWW14MVpWd2lPaUJiTUN3Z01Dd2dNVE01WFN4Y2NseHVYSFJjSW1SaGNtdGplV0Z1WENJNklGc3dMQ0F4TXprc0lERXpPVjBzWEhKY2JseDBYQ0prWVhKcloyOXNaR1Z1Y205a1hDSTZJRnN4T0RRc0lERXpOQ3dnTVRGZExGeHlYRzVjZEZ3aVpHRnlhMmR5WVhsY0lqb2dXekUyT1N3Z01UWTVMQ0F4TmpsZExGeHlYRzVjZEZ3aVpHRnlhMmR5WldWdVhDSTZJRnN3TENBeE1EQXNJREJkTEZ4eVhHNWNkRndpWkdGeWEyZHlaWGxjSWpvZ1d6RTJPU3dnTVRZNUxDQXhOamxkTEZ4eVhHNWNkRndpWkdGeWEydG9ZV3RwWENJNklGc3hPRGtzSURFNE15d2dNVEEzWFN4Y2NseHVYSFJjSW1SaGNtdHRZV2RsYm5SaFhDSTZJRnN4TXprc0lEQXNJREV6T1Ywc1hISmNibHgwWENKa1lYSnJiMnhwZG1WbmNtVmxibHdpT2lCYk9EVXNJREV3Tnl3Z05EZGRMRnh5WEc1Y2RGd2laR0Z5YTI5eVlXNW5aVndpT2lCYk1qVTFMQ0F4TkRBc0lEQmRMRnh5WEc1Y2RGd2laR0Z5YTI5eVkyaHBaRndpT2lCYk1UVXpMQ0ExTUN3Z01qQTBYU3hjY2x4dVhIUmNJbVJoY210eVpXUmNJam9nV3pFek9Td2dNQ3dnTUYwc1hISmNibHgwWENKa1lYSnJjMkZzYlc5dVhDSTZJRnN5TXpNc0lERTFNQ3dnTVRJeVhTeGNjbHh1WEhSY0ltUmhjbXR6WldGbmNtVmxibHdpT2lCYk1UUXpMQ0F4T0Rnc0lERTBNMTBzWEhKY2JseDBYQ0prWVhKcmMyeGhkR1ZpYkhWbFhDSTZJRnMzTWl3Z05qRXNJREV6T1Ywc1hISmNibHgwWENKa1lYSnJjMnhoZEdWbmNtRjVYQ0k2SUZzME55d2dOemtzSURjNVhTeGNjbHh1WEhSY0ltUmhjbXR6YkdGMFpXZHlaWGxjSWpvZ1d6UTNMQ0EzT1N3Z056bGRMRnh5WEc1Y2RGd2laR0Z5YTNSMWNuRjFiMmx6WlZ3aU9pQmJNQ3dnTWpBMkxDQXlNRGxkTEZ4eVhHNWNkRndpWkdGeWEzWnBiMnhsZEZ3aU9pQmJNVFE0TENBd0xDQXlNVEZkTEZ4eVhHNWNkRndpWkdWbGNIQnBibXRjSWpvZ1d6STFOU3dnTWpBc0lERTBOMTBzWEhKY2JseDBYQ0prWldWd2MydDVZbXgxWlZ3aU9pQmJNQ3dnTVRreExDQXlOVFZkTEZ4eVhHNWNkRndpWkdsdFozSmhlVndpT2lCYk1UQTFMQ0F4TURVc0lERXdOVjBzWEhKY2JseDBYQ0prYVcxbmNtVjVYQ0k2SUZzeE1EVXNJREV3TlN3Z01UQTFYU3hjY2x4dVhIUmNJbVJ2WkdkbGNtSnNkV1ZjSWpvZ1d6TXdMQ0F4TkRRc0lESTFOVjBzWEhKY2JseDBYQ0ptYVhKbFluSnBZMnRjSWpvZ1d6RTNPQ3dnTXpRc0lETTBYU3hjY2x4dVhIUmNJbVpzYjNKaGJIZG9hWFJsWENJNklGc3lOVFVzSURJMU1Dd2dNalF3WFN4Y2NseHVYSFJjSW1admNtVnpkR2R5WldWdVhDSTZJRnN6TkN3Z01UTTVMQ0F6TkYwc1hISmNibHgwWENKbWRXTm9jMmxoWENJNklGc3lOVFVzSURBc0lESTFOVjBzWEhKY2JseDBYQ0puWVdsdWMySnZjbTljSWpvZ1d6SXlNQ3dnTWpJd0xDQXlNakJkTEZ4eVhHNWNkRndpWjJodmMzUjNhR2wwWlZ3aU9pQmJNalE0TENBeU5EZ3NJREkxTlYwc1hISmNibHgwWENKbmIyeGtYQ0k2SUZzeU5UVXNJREl4TlN3Z01GMHNYSEpjYmx4MFhDSm5iMnhrWlc1eWIyUmNJam9nV3pJeE9Dd2dNVFkxTENBek1sMHNYSEpjYmx4MFhDSm5jbUY1WENJNklGc3hNamdzSURFeU9Dd2dNVEk0WFN4Y2NseHVYSFJjSW1keVpXVnVYQ0k2SUZzd0xDQXhNamdzSURCZExGeHlYRzVjZEZ3aVozSmxaVzU1Wld4c2IzZGNJam9nV3pFM015d2dNalUxTENBME4xMHNYSEpjYmx4MFhDSm5jbVY1WENJNklGc3hNamdzSURFeU9Dd2dNVEk0WFN4Y2NseHVYSFJjSW1odmJtVjVaR1YzWENJNklGc3lOREFzSURJMU5Td2dNalF3WFN4Y2NseHVYSFJjSW1odmRIQnBibXRjSWpvZ1d6STFOU3dnTVRBMUxDQXhPREJkTEZ4eVhHNWNkRndpYVc1a2FXRnVjbVZrWENJNklGc3lNRFVzSURreUxDQTVNbDBzWEhKY2JseDBYQ0pwYm1ScFoyOWNJam9nV3pjMUxDQXdMQ0F4TXpCZExGeHlYRzVjZEZ3aWFYWnZjbmxjSWpvZ1d6STFOU3dnTWpVMUxDQXlOREJkTEZ4eVhHNWNkRndpYTJoaGEybGNJam9nV3pJME1Dd2dNak13TENBeE5EQmRMRnh5WEc1Y2RGd2liR0YyWlc1a1pYSmNJam9nV3pJek1Dd2dNak13TENBeU5UQmRMRnh5WEc1Y2RGd2liR0YyWlc1a1pYSmliSFZ6YUZ3aU9pQmJNalUxTENBeU5EQXNJREkwTlYwc1hISmNibHgwWENKc1lYZHVaM0psWlc1Y0lqb2dXekV5TkN3Z01qVXlMQ0F3WFN4Y2NseHVYSFJjSW14bGJXOXVZMmhwWm1admJsd2lPaUJiTWpVMUxDQXlOVEFzSURJd05WMHNYSEpjYmx4MFhDSnNhV2RvZEdKc2RXVmNJam9nV3pFM015d2dNakUyTENBeU16QmRMRnh5WEc1Y2RGd2liR2xuYUhSamIzSmhiRndpT2lCYk1qUXdMQ0F4TWpnc0lERXlPRjBzWEhKY2JseDBYQ0pzYVdkb2RHTjVZVzVjSWpvZ1d6SXlOQ3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpYkdsbmFIUm5iMnhrWlc1eWIyUjVaV3hzYjNkY0lqb2dXekkxTUN3Z01qVXdMQ0F5TVRCZExGeHlYRzVjZEZ3aWJHbG5hSFJuY21GNVhDSTZJRnN5TVRFc0lESXhNU3dnTWpFeFhTeGNjbHh1WEhSY0lteHBaMmgwWjNKbFpXNWNJam9nV3pFME5Dd2dNak00TENBeE5EUmRMRnh5WEc1Y2RGd2liR2xuYUhSbmNtVjVYQ0k2SUZzeU1URXNJREl4TVN3Z01qRXhYU3hjY2x4dVhIUmNJbXhwWjJoMGNHbHVhMXdpT2lCYk1qVTFMQ0F4T0RJc0lERTVNMTBzWEhKY2JseDBYQ0pzYVdkb2RITmhiRzF2Ymx3aU9pQmJNalUxTENBeE5qQXNJREV5TWwwc1hISmNibHgwWENKc2FXZG9kSE5sWVdkeVpXVnVYQ0k2SUZzek1pd2dNVGM0TENBeE56QmRMRnh5WEc1Y2RGd2liR2xuYUhSemEzbGliSFZsWENJNklGc3hNelVzSURJd05pd2dNalV3WFN4Y2NseHVYSFJjSW14cFoyaDBjMnhoZEdWbmNtRjVYQ0k2SUZzeE1Ua3NJREV6Tml3Z01UVXpYU3hjY2x4dVhIUmNJbXhwWjJoMGMyeGhkR1ZuY21WNVhDSTZJRnN4TVRrc0lERXpOaXdnTVRVelhTeGNjbHh1WEhSY0lteHBaMmgwYzNSbFpXeGliSFZsWENJNklGc3hOellzSURFNU5pd2dNakl5WFN4Y2NseHVYSFJjSW14cFoyaDBlV1ZzYkc5M1hDSTZJRnN5TlRVc0lESTFOU3dnTWpJMFhTeGNjbHh1WEhSY0lteHBiV1ZjSWpvZ1d6QXNJREkxTlN3Z01GMHNYSEpjYmx4MFhDSnNhVzFsWjNKbFpXNWNJam9nV3pVd0xDQXlNRFVzSURVd1hTeGNjbHh1WEhSY0lteHBibVZ1WENJNklGc3lOVEFzSURJME1Dd2dNak13WFN4Y2NseHVYSFJjSW0xaFoyVnVkR0ZjSWpvZ1d6STFOU3dnTUN3Z01qVTFYU3hjY2x4dVhIUmNJbTFoY205dmJsd2lPaUJiTVRJNExDQXdMQ0F3WFN4Y2NseHVYSFJjSW0xbFpHbDFiV0Z4ZFdGdFlYSnBibVZjSWpvZ1d6RXdNaXdnTWpBMUxDQXhOekJkTEZ4eVhHNWNkRndpYldWa2FYVnRZbXgxWlZ3aU9pQmJNQ3dnTUN3Z01qQTFYU3hjY2x4dVhIUmNJbTFsWkdsMWJXOXlZMmhwWkZ3aU9pQmJNVGcyTENBNE5Td2dNakV4WFN4Y2NseHVYSFJjSW0xbFpHbDFiWEIxY25Cc1pWd2lPaUJiTVRRM0xDQXhNVElzSURJeE9WMHNYSEpjYmx4MFhDSnRaV1JwZFcxelpXRm5jbVZsYmx3aU9pQmJOakFzSURFM09Td2dNVEV6WFN4Y2NseHVYSFJjSW0xbFpHbDFiWE5zWVhSbFlteDFaVndpT2lCYk1USXpMQ0F4TURRc0lESXpPRjBzWEhKY2JseDBYQ0p0WldScGRXMXpjSEpwYm1kbmNtVmxibHdpT2lCYk1Dd2dNalV3TENBeE5UUmRMRnh5WEc1Y2RGd2liV1ZrYVhWdGRIVnljWFZ2YVhObFhDSTZJRnMzTWl3Z01qQTVMQ0F5TURSZExGeHlYRzVjZEZ3aWJXVmthWFZ0ZG1sdmJHVjBjbVZrWENJNklGc3hPVGtzSURJeExDQXhNek5kTEZ4eVhHNWNkRndpYldsa2JtbG5hSFJpYkhWbFhDSTZJRnN5TlN3Z01qVXNJREV4TWwwc1hISmNibHgwWENKdGFXNTBZM0psWVcxY0lqb2dXekkwTlN3Z01qVTFMQ0F5TlRCZExGeHlYRzVjZEZ3aWJXbHpkSGx5YjNObFhDSTZJRnN5TlRVc0lESXlPQ3dnTWpJMVhTeGNjbHh1WEhSY0ltMXZZMk5oYzJsdVhDSTZJRnN5TlRVc0lESXlPQ3dnTVRneFhTeGNjbHh1WEhSY0ltNWhkbUZxYjNkb2FYUmxYQ0k2SUZzeU5UVXNJREl5TWl3Z01UY3pYU3hjY2x4dVhIUmNJbTVoZG5sY0lqb2dXekFzSURBc0lERXlPRjBzWEhKY2JseDBYQ0p2YkdSc1lXTmxYQ0k2SUZzeU5UTXNJREkwTlN3Z01qTXdYU3hjY2x4dVhIUmNJbTlzYVhabFhDSTZJRnN4TWpnc0lERXlPQ3dnTUYwc1hISmNibHgwWENKdmJHbDJaV1J5WVdKY0lqb2dXekV3Tnl3Z01UUXlMQ0F6TlYwc1hISmNibHgwWENKdmNtRnVaMlZjSWpvZ1d6STFOU3dnTVRZMUxDQXdYU3hjY2x4dVhIUmNJbTl5WVc1blpYSmxaRndpT2lCYk1qVTFMQ0EyT1N3Z01GMHNYSEpjYmx4MFhDSnZjbU5vYVdSY0lqb2dXekl4T0N3Z01URXlMQ0F5TVRSZExGeHlYRzVjZEZ3aWNHRnNaV2R2YkdSbGJuSnZaRndpT2lCYk1qTTRMQ0F5TXpJc0lERTNNRjBzWEhKY2JseDBYQ0p3WVd4bFozSmxaVzVjSWpvZ1d6RTFNaXdnTWpVeExDQXhOVEpkTEZ4eVhHNWNkRndpY0dGc1pYUjFjbkYxYjJselpWd2lPaUJiTVRjMUxDQXlNemdzSURJek9GMHNYSEpjYmx4MFhDSndZV3hsZG1sdmJHVjBjbVZrWENJNklGc3lNVGtzSURFeE1pd2dNVFEzWFN4Y2NseHVYSFJjSW5CaGNHRjVZWGRvYVhCY0lqb2dXekkxTlN3Z01qTTVMQ0F5TVROZExGeHlYRzVjZEZ3aWNHVmhZMmh3ZFdabVhDSTZJRnN5TlRVc0lESXhPQ3dnTVRnMVhTeGNjbHh1WEhSY0luQmxjblZjSWpvZ1d6SXdOU3dnTVRNekxDQTJNMTBzWEhKY2JseDBYQ0p3YVc1clhDSTZJRnN5TlRVc0lERTVNaXdnTWpBelhTeGNjbHh1WEhSY0luQnNkVzFjSWpvZ1d6SXlNU3dnTVRZd0xDQXlNakZkTEZ4eVhHNWNkRndpY0c5M1pHVnlZbXgxWlZ3aU9pQmJNVGMyTENBeU1qUXNJREl6TUYwc1hISmNibHgwWENKd2RYSndiR1ZjSWpvZ1d6RXlPQ3dnTUN3Z01USTRYU3hjY2x4dVhIUmNJbkpsWW1WalkyRndkWEp3YkdWY0lqb2dXekV3TWl3Z05URXNJREUxTTEwc1hISmNibHgwWENKeVpXUmNJam9nV3pJMU5Td2dNQ3dnTUYwc1hISmNibHgwWENKeWIzTjVZbkp2ZDI1Y0lqb2dXekU0T0N3Z01UUXpMQ0F4TkROZExGeHlYRzVjZEZ3aWNtOTVZV3hpYkhWbFhDSTZJRnMyTlN3Z01UQTFMQ0F5TWpWZExGeHlYRzVjZEZ3aWMyRmtaR3hsWW5KdmQyNWNJam9nV3pFek9Td2dOamtzSURFNVhTeGNjbHh1WEhSY0luTmhiRzF2Ymx3aU9pQmJNalV3TENBeE1qZ3NJREV4TkYwc1hISmNibHgwWENKellXNWtlV0p5YjNkdVhDSTZJRnN5TkRRc0lERTJOQ3dnT1RaZExGeHlYRzVjZEZ3aWMyVmhaM0psWlc1Y0lqb2dXelEyTENBeE16a3NJRGczWFN4Y2NseHVYSFJjSW5ObFlYTm9aV3hzWENJNklGc3lOVFVzSURJME5Td2dNak00WFN4Y2NseHVYSFJjSW5OcFpXNXVZVndpT2lCYk1UWXdMQ0E0TWl3Z05EVmRMRnh5WEc1Y2RGd2ljMmxzZG1WeVhDSTZJRnN4T1RJc0lERTVNaXdnTVRreVhTeGNjbHh1WEhSY0luTnJlV0pzZFdWY0lqb2dXekV6TlN3Z01qQTJMQ0F5TXpWZExGeHlYRzVjZEZ3aWMyeGhkR1ZpYkhWbFhDSTZJRnN4TURZc0lEa3dMQ0F5TURWZExGeHlYRzVjZEZ3aWMyeGhkR1ZuY21GNVhDSTZJRnN4TVRJc0lERXlPQ3dnTVRRMFhTeGNjbHh1WEhSY0luTnNZWFJsWjNKbGVWd2lPaUJiTVRFeUxDQXhNamdzSURFME5GMHNYSEpjYmx4MFhDSnpibTkzWENJNklGc3lOVFVzSURJMU1Dd2dNalV3WFN4Y2NseHVYSFJjSW5Od2NtbHVaMmR5WldWdVhDSTZJRnN3TENBeU5UVXNJREV5TjEwc1hISmNibHgwWENKemRHVmxiR0pzZFdWY0lqb2dXemN3TENBeE16QXNJREU0TUYwc1hISmNibHgwWENKMFlXNWNJam9nV3pJeE1Dd2dNVGd3TENBeE5EQmRMRnh5WEc1Y2RGd2lkR1ZoYkZ3aU9pQmJNQ3dnTVRJNExDQXhNamhkTEZ4eVhHNWNkRndpZEdocGMzUnNaVndpT2lCYk1qRTJMQ0F4T1RFc0lESXhObDBzWEhKY2JseDBYQ0owYjIxaGRHOWNJam9nV3pJMU5Td2dPVGtzSURjeFhTeGNjbHh1WEhSY0luUjFjbkYxYjJselpWd2lPaUJiTmpRc0lESXlOQ3dnTWpBNFhTeGNjbHh1WEhSY0luWnBiMnhsZEZ3aU9pQmJNak00TENBeE16QXNJREl6T0Ywc1hISmNibHgwWENKM2FHVmhkRndpT2lCYk1qUTFMQ0F5TWpJc0lERTNPVjBzWEhKY2JseDBYQ0ozYUdsMFpWd2lPaUJiTWpVMUxDQXlOVFVzSURJMU5WMHNYSEpjYmx4MFhDSjNhR2wwWlhOdGIydGxYQ0k2SUZzeU5EVXNJREkwTlN3Z01qUTFYU3hjY2x4dVhIUmNJbmxsYkd4dmQxd2lPaUJiTWpVMUxDQXlOVFVzSURCZExGeHlYRzVjZEZ3aWVXVnNiRzkzWjNKbFpXNWNJam9nV3pFMU5Dd2dNakExTENBMU1GMWNjbHh1ZlR0Y2NseHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ1kyOXNiM0pUZEhKcGJtY2dQU0J5WlhGMWFYSmxLQ2RqYjJ4dmNpMXpkSEpwYm1jbktUdGNiblpoY2lCamIyNTJaWEowSUQwZ2NtVnhkV2x5WlNnblkyOXNiM0l0WTI5dWRtVnlkQ2NwTzF4dVhHNTJZWElnWDNOc2FXTmxJRDBnVzEwdWMyeHBZMlU3WEc1Y2JuWmhjaUJ6YTJsd2NHVmtUVzlrWld4eklEMGdXMXh1WEhRdkx5QjBieUJpWlNCb2IyNWxjM1FzSUVrZ1pHOXVKM1FnY21WaGJHeDVJR1psWld3Z2JHbHJaU0JyWlhsM2IzSmtJR0psYkc5dVozTWdhVzRnWTI5c2IzSWdZMjl1ZG1WeWRDd2dZblYwSUdWb0xseHVYSFFuYTJWNWQyOXlaQ2NzWEc1Y2JseDBMeThnWjNKaGVTQmpiMjVtYkdsamRITWdkMmwwYUNCemIyMWxJRzFsZEdodlpDQnVZVzFsY3l3Z1lXNWtJR2hoY3lCcGRITWdiM2R1SUcxbGRHaHZaQ0JrWldacGJtVmtMbHh1WEhRblozSmhlU2NzWEc1Y2JseDBMeThnYzJodmRXeGtiaWQwSUhKbFlXeHNlU0JpWlNCcGJpQmpiMnh2Y2kxamIyNTJaWEowSUdWcGRHaGxjaTR1TGx4dVhIUW5hR1Y0SjF4dVhUdGNibHh1ZG1GeUlHaGhjMmhsWkUxdlpHVnNTMlY1Y3lBOUlIdDlPMXh1VDJKcVpXTjBMbXRsZVhNb1kyOXVkbVZ5ZENrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2JXOWtaV3dwSUh0Y2JseDBhR0Z6YUdWa1RXOWtaV3hMWlhselcxOXpiR2xqWlM1allXeHNLR052Ym5abGNuUmJiVzlrWld4ZExteGhZbVZzY3lrdWMyOXlkQ2dwTG1wdmFXNG9KeWNwWFNBOUlHMXZaR1ZzTzF4dWZTazdYRzVjYm5aaGNpQnNhVzFwZEdWeWN5QTlJSHQ5TzF4dVhHNW1kVzVqZEdsdmJpQkRiMnh2Y2lodlltb3NJRzF2WkdWc0tTQjdYRzVjZEdsbUlDZ2hLSFJvYVhNZ2FXNXpkR0Z1WTJWdlppQkRiMnh2Y2lrcElIdGNibHgwWEhSeVpYUjFjbTRnYm1WM0lFTnZiRzl5S0c5aWFpd2diVzlrWld3cE8xeHVYSFI5WEc1Y2JseDBhV1lnS0cxdlpHVnNJQ1ltSUcxdlpHVnNJR2x1SUhOcmFYQndaV1JOYjJSbGJITXBJSHRjYmx4MFhIUnRiMlJsYkNBOUlHNTFiR3c3WEc1Y2RIMWNibHh1WEhScFppQW9iVzlrWld3Z0ppWWdJU2h0YjJSbGJDQnBiaUJqYjI1MlpYSjBLU2tnZTF4dVhIUmNkSFJvY205M0lHNWxkeUJGY25KdmNpZ25WVzVyYm05M2JpQnRiMlJsYkRvZ0p5QXJJRzF2WkdWc0tUdGNibHgwZlZ4dVhHNWNkSFpoY2lCcE8xeHVYSFIyWVhJZ1kyaGhibTVsYkhNN1hHNWNibHgwYVdZZ0tIUjVjR1Z2WmlCdlltb2dQVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzVjZEZ4MGRHaHBjeTV0YjJSbGJDQTlJQ2R5WjJJbk8xeHVYSFJjZEhSb2FYTXVZMjlzYjNJZ1BTQmJNQ3dnTUN3Z01GMDdYRzVjZEZ4MGRHaHBjeTUyWVd4d2FHRWdQU0F4TzF4dVhIUjlJR1ZzYzJVZ2FXWWdLRzlpYWlCcGJuTjBZVzVqWlc5bUlFTnZiRzl5S1NCN1hHNWNkRngwZEdocGN5NXRiMlJsYkNBOUlHOWlhaTV0YjJSbGJEdGNibHgwWEhSMGFHbHpMbU52Ykc5eUlEMGdiMkpxTG1OdmJHOXlMbk5zYVdObEtDazdYRzVjZEZ4MGRHaHBjeTUyWVd4d2FHRWdQU0J2WW1vdWRtRnNjR2hoTzF4dVhIUjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQnZZbW9nUFQwOUlDZHpkSEpwYm1jbktTQjdYRzVjZEZ4MGRtRnlJSEpsYzNWc2RDQTlJR052Ykc5eVUzUnlhVzVuTG1kbGRDaHZZbW9wTzF4dVhIUmNkR2xtSUNoeVpYTjFiSFFnUFQwOUlHNTFiR3dwSUh0Y2JseDBYSFJjZEhSb2NtOTNJRzVsZHlCRmNuSnZjaWduVlc1aFlteGxJSFJ2SUhCaGNuTmxJR052Ykc5eUlHWnliMjBnYzNSeWFXNW5PaUFuSUNzZ2IySnFLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUjBhR2x6TG0xdlpHVnNJRDBnY21WemRXeDBMbTF2WkdWc08xeHVYSFJjZEdOb1lXNXVaV3h6SUQwZ1kyOXVkbVZ5ZEZ0MGFHbHpMbTF2WkdWc1hTNWphR0Z1Ym1Wc2N6dGNibHgwWEhSMGFHbHpMbU52Ykc5eUlEMGdjbVZ6ZFd4MExuWmhiSFZsTG5Oc2FXTmxLREFzSUdOb1lXNXVaV3h6S1R0Y2JseDBYSFIwYUdsekxuWmhiSEJvWVNBOUlIUjVjR1Z2WmlCeVpYTjFiSFF1ZG1Gc2RXVmJZMmhoYm01bGJITmRJRDA5UFNBbmJuVnRZbVZ5SnlBL0lISmxjM1ZzZEM1MllXeDFaVnRqYUdGdWJtVnNjMTBnT2lBeE8xeHVYSFI5SUdWc2MyVWdhV1lnS0c5aWFpNXNaVzVuZEdncElIdGNibHgwWEhSMGFHbHpMbTF2WkdWc0lEMGdiVzlrWld3Z2ZId2dKM0puWWljN1hHNWNkRngwWTJoaGJtNWxiSE1nUFNCamIyNTJaWEowVzNSb2FYTXViVzlrWld4ZExtTm9ZVzV1Wld4ek8xeHVYSFJjZEhaaGNpQnVaWGRCY25JZ1BTQmZjMnhwWTJVdVkyRnNiQ2h2WW1vc0lEQXNJR05vWVc1dVpXeHpLVHRjYmx4MFhIUjBhR2x6TG1OdmJHOXlJRDBnZW1WeWIwRnljbUY1S0c1bGQwRnljaXdnWTJoaGJtNWxiSE1wTzF4dVhIUmNkSFJvYVhNdWRtRnNjR2hoSUQwZ2RIbHdaVzltSUc5aWFsdGphR0Z1Ym1Wc2MxMGdQVDA5SUNkdWRXMWlaWEluSUQ4Z2IySnFXMk5vWVc1dVpXeHpYU0E2SURFN1hHNWNkSDBnWld4elpTQnBaaUFvZEhsd1pXOW1JRzlpYWlBOVBUMGdKMjUxYldKbGNpY3BJSHRjYmx4MFhIUXZMeUIwYUdseklHbHpJR0ZzZDJGNWN5QlNSMElnTFNCallXNGdZbVVnWTI5dWRtVnlkR1ZrSUd4aGRHVnlJRzl1TGx4dVhIUmNkRzlpYWlBbVBTQXdlRVpHUmtaR1JqdGNibHgwWEhSMGFHbHpMbTF2WkdWc0lEMGdKM0puWWljN1hHNWNkRngwZEdocGN5NWpiMnh2Y2lBOUlGdGNibHgwWEhSY2RDaHZZbW9nUGo0Z01UWXBJQ1lnTUhoR1JpeGNibHgwWEhSY2RDaHZZbW9nUGo0Z09Da2dKaUF3ZUVaR0xGeHVYSFJjZEZ4MGIySnFJQ1lnTUhoR1JseHVYSFJjZEYwN1hHNWNkRngwZEdocGN5NTJZV3h3YUdFZ1BTQXhPMXh1WEhSOUlHVnNjMlVnZTF4dVhIUmNkSFJvYVhNdWRtRnNjR2hoSUQwZ01UdGNibHh1WEhSY2RIWmhjaUJyWlhseklEMGdUMkpxWldOMExtdGxlWE1vYjJKcUtUdGNibHgwWEhScFppQW9KMkZzY0doaEp5QnBiaUJ2WW1vcElIdGNibHgwWEhSY2RHdGxlWE11YzNCc2FXTmxLR3RsZVhNdWFXNWtaWGhQWmlnbllXeHdhR0VuS1N3Z01TazdYRzVjZEZ4MFhIUjBhR2x6TG5aaGJIQm9ZU0E5SUhSNWNHVnZaaUJ2WW1vdVlXeHdhR0VnUFQwOUlDZHVkVzFpWlhJbklEOGdiMkpxTG1Gc2NHaGhJRG9nTUR0Y2JseDBYSFI5WEc1Y2JseDBYSFIyWVhJZ2FHRnphR1ZrUzJWNWN5QTlJR3RsZVhNdWMyOXlkQ2dwTG1wdmFXNG9KeWNwTzF4dVhIUmNkR2xtSUNnaEtHaGhjMmhsWkV0bGVYTWdhVzRnYUdGemFHVmtUVzlrWld4TFpYbHpLU2tnZTF4dVhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RWYm1GaWJHVWdkRzhnY0dGeWMyVWdZMjlzYjNJZ1puSnZiU0J2WW1wbFkzUTZJQ2NnS3lCS1UwOU9Mbk4wY21sdVoybG1lU2h2WW1vcEtUdGNibHgwWEhSOVhHNWNibHgwWEhSMGFHbHpMbTF2WkdWc0lEMGdhR0Z6YUdWa1RXOWtaV3hMWlhselcyaGhjMmhsWkV0bGVYTmRPMXh1WEc1Y2RGeDBkbUZ5SUd4aFltVnNjeUE5SUdOdmJuWmxjblJiZEdocGN5NXRiMlJsYkYwdWJHRmlaV3h6TzF4dVhIUmNkSFpoY2lCamIyeHZjaUE5SUZ0ZE8xeHVYSFJjZEdadmNpQW9hU0E5SURBN0lHa2dQQ0JzWVdKbGJITXViR1Z1WjNSb095QnBLeXNwSUh0Y2JseDBYSFJjZEdOdmJHOXlMbkIxYzJnb2IySnFXMnhoWW1Wc2MxdHBYVjBwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSFJvYVhNdVkyOXNiM0lnUFNCNlpYSnZRWEp5WVhrb1kyOXNiM0lwTzF4dVhIUjlYRzVjYmx4MEx5OGdjR1Z5Wm05eWJTQnNhVzFwZEdGMGFXOXVjeUFvWTJ4aGJYQnBibWNzSUdWMFl5NHBYRzVjZEdsbUlDaHNhVzFwZEdWeWMxdDBhR2x6TG0xdlpHVnNYU2tnZTF4dVhIUmNkR05vWVc1dVpXeHpJRDBnWTI5dWRtVnlkRnQwYUdsekxtMXZaR1ZzWFM1amFHRnVibVZzY3p0Y2JseDBYSFJtYjNJZ0tHa2dQU0F3T3lCcElEd2dZMmhoYm01bGJITTdJR2tyS3lrZ2UxeHVYSFJjZEZ4MGRtRnlJR3hwYldsMElEMGdiR2x0YVhSbGNuTmJkR2hwY3k1dGIyUmxiRjFiYVYwN1hHNWNkRngwWEhScFppQW9iR2x0YVhRcElIdGNibHgwWEhSY2RGeDBkR2hwY3k1amIyeHZjbHRwWFNBOUlHeHBiV2wwS0hSb2FYTXVZMjlzYjNKYmFWMHBPMXh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlZ4dVhHNWNkSFJvYVhNdWRtRnNjR2hoSUQwZ1RXRjBhQzV0WVhnb01Dd2dUV0YwYUM1dGFXNG9NU3dnZEdocGN5NTJZV3h3YUdFcEtUdGNibHh1WEhScFppQW9UMkpxWldOMExtWnlaV1Y2WlNrZ2UxeHVYSFJjZEU5aWFtVmpkQzVtY21WbGVtVW9kR2hwY3lrN1hHNWNkSDFjYm4xY2JseHVRMjlzYjNJdWNISnZkRzkwZVhCbElEMGdlMXh1WEhSMGIxTjBjbWx1WnpvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RISmxkSFZ5YmlCMGFHbHpMbk4wY21sdVp5Z3BPMXh1WEhSOUxGeHVYRzVjZEhSdlNsTlBUam9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJjZEhKbGRIVnliaUIwYUdselczUm9hWE11Ylc5a1pXeGRLQ2s3WEc1Y2RIMHNYRzVjYmx4MGMzUnlhVzVuT2lCbWRXNWpkR2x2YmlBb2NHeGhZMlZ6S1NCN1hHNWNkRngwZG1GeUlITmxiR1lnUFNCMGFHbHpMbTF2WkdWc0lHbHVJR052Ykc5eVUzUnlhVzVuTG5SdklEOGdkR2hwY3lBNklIUm9hWE11Y21kaUtDazdYRzVjZEZ4MGMyVnNaaUE5SUhObGJHWXVjbTkxYm1Rb2RIbHdaVzltSUhCc1lXTmxjeUE5UFQwZ0oyNTFiV0psY2ljZ1B5QndiR0ZqWlhNZ09pQXhLVHRjYmx4MFhIUjJZWElnWVhKbmN5QTlJSE5sYkdZdWRtRnNjR2hoSUQwOVBTQXhJRDhnYzJWc1ppNWpiMnh2Y2lBNklITmxiR1l1WTI5c2IzSXVZMjl1WTJGMEtIUm9hWE11ZG1Gc2NHaGhLVHRjYmx4MFhIUnlaWFIxY200Z1kyOXNiM0pUZEhKcGJtY3VkRzliYzJWc1ppNXRiMlJsYkYwb1lYSm5jeWs3WEc1Y2RIMHNYRzVjYmx4MGNHVnlZMlZ1ZEZOMGNtbHVaem9nWm5WdVkzUnBiMjRnS0hCc1lXTmxjeWtnZTF4dVhIUmNkSFpoY2lCelpXeG1JRDBnZEdocGN5NXlaMklvS1M1eWIzVnVaQ2gwZVhCbGIyWWdjR3hoWTJWeklEMDlQU0FuYm5WdFltVnlKeUEvSUhCc1lXTmxjeUE2SURFcE8xeHVYSFJjZEhaaGNpQmhjbWR6SUQwZ2MyVnNaaTUyWVd4d2FHRWdQVDA5SURFZ1B5QnpaV3htTG1OdmJHOXlJRG9nYzJWc1ppNWpiMnh2Y2k1amIyNWpZWFFvZEdocGN5NTJZV3h3YUdFcE8xeHVYSFJjZEhKbGRIVnliaUJqYjJ4dmNsTjBjbWx1Wnk1MGJ5NXlaMkl1Y0dWeVkyVnVkQ2hoY21kektUdGNibHgwZlN4Y2JseHVYSFJoY25KaGVUb2dablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkSEpsZEhWeWJpQjBhR2x6TG5aaGJIQm9ZU0E5UFQwZ01TQS9JSFJvYVhNdVkyOXNiM0l1YzJ4cFkyVW9LU0E2SUhSb2FYTXVZMjlzYjNJdVkyOXVZMkYwS0hSb2FYTXVkbUZzY0doaEtUdGNibHgwZlN4Y2JseHVYSFJ2WW1wbFkzUTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFIyWVhJZ2NtVnpkV3gwSUQwZ2UzMDdYRzVjZEZ4MGRtRnlJR05vWVc1dVpXeHpJRDBnWTI5dWRtVnlkRnQwYUdsekxtMXZaR1ZzWFM1amFHRnVibVZzY3p0Y2JseDBYSFIyWVhJZ2JHRmlaV3h6SUQwZ1kyOXVkbVZ5ZEZ0MGFHbHpMbTF2WkdWc1hTNXNZV0psYkhNN1hHNWNibHgwWEhSbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHTm9ZVzV1Wld4ek95QnBLeXNwSUh0Y2JseDBYSFJjZEhKbGMzVnNkRnRzWVdKbGJITmJhVjFkSUQwZ2RHaHBjeTVqYjJ4dmNsdHBYVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnBaaUFvZEdocGN5NTJZV3h3YUdFZ0lUMDlJREVwSUh0Y2JseDBYSFJjZEhKbGMzVnNkQzVoYkhCb1lTQTlJSFJvYVhNdWRtRnNjR2hoTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQnlaWE4xYkhRN1hHNWNkSDBzWEc1Y2JseDBkVzVwZEVGeWNtRjVPaUJtZFc1amRHbHZiaUFvS1NCN1hHNWNkRngwZG1GeUlISm5ZaUE5SUhSb2FYTXVjbWRpS0NrdVkyOXNiM0k3WEc1Y2RGeDBjbWRpV3pCZElDODlJREkxTlR0Y2JseDBYSFJ5WjJKYk1WMGdMejBnTWpVMU8xeHVYSFJjZEhKbllsc3lYU0F2UFNBeU5UVTdYRzVjYmx4MFhIUnBaaUFvZEdocGN5NTJZV3h3YUdFZ0lUMDlJREVwSUh0Y2JseDBYSFJjZEhKbllpNXdkWE5vS0hSb2FYTXVkbUZzY0doaEtUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnY21kaU8xeHVYSFI5TEZ4dVhHNWNkSFZ1YVhSUFltcGxZM1E2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhSMllYSWdjbWRpSUQwZ2RHaHBjeTV5WjJJb0tTNXZZbXBsWTNRb0tUdGNibHgwWEhSeVoySXVjaUF2UFNBeU5UVTdYRzVjZEZ4MGNtZGlMbWNnTHowZ01qVTFPMXh1WEhSY2RISm5ZaTVpSUM4OUlESTFOVHRjYmx4dVhIUmNkR2xtSUNoMGFHbHpMblpoYkhCb1lTQWhQVDBnTVNrZ2UxeHVYSFJjZEZ4MGNtZGlMbUZzY0doaElEMGdkR2hwY3k1MllXeHdhR0U3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlISm5ZanRjYmx4MGZTeGNibHh1WEhSeWIzVnVaRG9nWm5WdVkzUnBiMjRnS0hCc1lXTmxjeWtnZTF4dVhIUmNkSEJzWVdObGN5QTlJRTFoZEdndWJXRjRLSEJzWVdObGN5QjhmQ0F3TENBd0tUdGNibHgwWEhSeVpYUjFjbTRnYm1WM0lFTnZiRzl5S0hSb2FYTXVZMjlzYjNJdWJXRndLSEp2ZFc1a1ZHOVFiR0ZqWlNod2JHRmpaWE1wS1M1amIyNWpZWFFvZEdocGN5NTJZV3h3YUdFcExDQjBhR2x6TG0xdlpHVnNLVHRjYmx4MGZTeGNibHh1WEhSaGJIQm9ZVG9nWm5WdVkzUnBiMjRnS0haaGJDa2dlMXh1WEhSY2RHbG1JQ2hoY21kMWJXVnVkSE11YkdWdVozUm9LU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdibVYzSUVOdmJHOXlLSFJvYVhNdVkyOXNiM0l1WTI5dVkyRjBLRTFoZEdndWJXRjRLREFzSUUxaGRHZ3ViV2x1S0RFc0lIWmhiQ2twS1N3Z2RHaHBjeTV0YjJSbGJDazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUhSb2FYTXVkbUZzY0doaE8xeHVYSFI5TEZ4dVhHNWNkQzh2SUhKbllseHVYSFJ5WldRNklHZGxkSE5sZENnbmNtZGlKeXdnTUN3Z2JXRjRabTRvTWpVMUtTa3NYRzVjZEdkeVpXVnVPaUJuWlhSelpYUW9KM0puWWljc0lERXNJRzFoZUdadUtESTFOU2twTEZ4dVhIUmliSFZsT2lCblpYUnpaWFFvSjNKbllpY3NJRElzSUcxaGVHWnVLREkxTlNrcExGeHVYRzVjZEdoMVpUb2daMlYwYzJWMEtGc25hSE5zSnl3Z0oyaHpkaWNzSUNkb2Myd25MQ0FuYUhkaUp5d2dKMmhqWnlkZExDQXdMQ0JtZFc1amRHbHZiaUFvZG1Gc0tTQjdJSEpsZEhWeWJpQW9LSFpoYkNBbElETTJNQ2tnS3lBek5qQXBJQ1VnTXpZd095QjlLU3dnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQmljbUZqWlMxemRIbHNaVnh1WEc1Y2RITmhkSFZ5WVhScGIyNXNPaUJuWlhSelpYUW9KMmh6YkNjc0lERXNJRzFoZUdadUtERXdNQ2twTEZ4dVhIUnNhV2RvZEc1bGMzTTZJR2RsZEhObGRDZ25hSE5zSnl3Z01pd2diV0Y0Wm00b01UQXdLU2tzWEc1Y2JseDBjMkYwZFhKaGRHbHZiblk2SUdkbGRITmxkQ2duYUhOMkp5d2dNU3dnYldGNFptNG9NVEF3S1Nrc1hHNWNkSFpoYkhWbE9pQm5aWFJ6WlhRb0oyaHpkaWNzSURJc0lHMWhlR1p1S0RFd01Da3BMRnh1WEc1Y2RHTm9jbTl0WVRvZ1oyVjBjMlYwS0Nkb1kyY25MQ0F4TENCdFlYaG1iaWd4TURBcEtTeGNibHgwWjNKaGVUb2daMlYwYzJWMEtDZG9ZMmNuTENBeUxDQnRZWGhtYmlneE1EQXBLU3hjYmx4dVhIUjNhR2wwWlRvZ1oyVjBjMlYwS0Nkb2QySW5MQ0F4TENCdFlYaG1iaWd4TURBcEtTeGNibHgwZDJKc1lXTnJPaUJuWlhSelpYUW9KMmgzWWljc0lESXNJRzFoZUdadUtERXdNQ2twTEZ4dVhHNWNkR041WVc0NklHZGxkSE5sZENnblkyMTVheWNzSURBc0lHMWhlR1p1S0RFd01Da3BMRnh1WEhSdFlXZGxiblJoT2lCblpYUnpaWFFvSjJOdGVXc25MQ0F4TENCdFlYaG1iaWd4TURBcEtTeGNibHgwZVdWc2JHOTNPaUJuWlhSelpYUW9KMk50ZVdzbkxDQXlMQ0J0WVhobWJpZ3hNREFwS1N4Y2JseDBZbXhoWTJzNklHZGxkSE5sZENnblkyMTVheWNzSURNc0lHMWhlR1p1S0RFd01Da3BMRnh1WEc1Y2RIZzZJR2RsZEhObGRDZ25lSGw2Snl3Z01Dd2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RIazZJR2RsZEhObGRDZ25lSGw2Snl3Z01Td2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RIbzZJR2RsZEhObGRDZ25lSGw2Snl3Z01pd2diV0Y0Wm00b01UQXdLU2tzWEc1Y2JseDBiRG9nWjJWMGMyVjBLQ2RzWVdJbkxDQXdMQ0J0WVhobWJpZ3hNREFwS1N4Y2JseDBZVG9nWjJWMGMyVjBLQ2RzWVdJbkxDQXhLU3hjYmx4MFlqb2daMlYwYzJWMEtDZHNZV0luTENBeUtTeGNibHh1WEhSclpYbDNiM0prT2lCbWRXNWpkR2x2YmlBb2RtRnNLU0I3WEc1Y2RGeDBhV1lnS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJ1WlhjZ1EyOXNiM0lvZG1Gc0tUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnWTI5dWRtVnlkRnQwYUdsekxtMXZaR1ZzWFM1clpYbDNiM0prS0hSb2FYTXVZMjlzYjNJcE8xeHVYSFI5TEZ4dVhHNWNkR2hsZURvZ1puVnVZM1JwYjI0Z0tIWmhiQ2tnZTF4dVhIUmNkR2xtSUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnYm1WM0lFTnZiRzl5S0haaGJDazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUdOdmJHOXlVM1J5YVc1bkxuUnZMbWhsZUNoMGFHbHpMbkpuWWlncExuSnZkVzVrS0NrdVkyOXNiM0lwTzF4dVhIUjlMRnh1WEc1Y2RISm5ZazUxYldKbGNqb2dablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkSFpoY2lCeVoySWdQU0IwYUdsekxuSm5ZaWdwTG1OdmJHOXlPMXh1WEhSY2RISmxkSFZ5YmlBb0tISm5ZbHN3WFNBbUlEQjRSa1lwSUR3OElERTJLU0I4SUNnb2NtZGlXekZkSUNZZ01IaEdSaWtnUER3Z09Da2dmQ0FvY21kaVd6SmRJQ1lnTUhoR1JpazdYRzVjZEgwc1hHNWNibHgwYkhWdGFXNXZjMmwwZVRvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RDOHZJR2gwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMVJTTDFkRFFVY3lNQzhqY21Wc1lYUnBkbVZzZFcxcGJtRnVZMlZrWldaY2JseDBYSFIyWVhJZ2NtZGlJRDBnZEdocGN5NXlaMklvS1M1amIyeHZjanRjYmx4dVhIUmNkSFpoY2lCc2RXMGdQU0JiWFR0Y2JseDBYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUhKbllpNXNaVzVuZEdnN0lHa3JLeWtnZTF4dVhIUmNkRngwZG1GeUlHTm9ZVzRnUFNCeVoySmJhVjBnTHlBeU5UVTdYRzVjZEZ4MFhIUnNkVzFiYVYwZ1BTQW9ZMmhoYmlBOFBTQXdMakF6T1RJNEtTQS9JR05vWVc0Z0x5QXhNaTQ1TWlBNklFMWhkR2d1Y0c5M0tDZ29ZMmhoYmlBcklEQXVNRFUxS1NBdklERXVNRFUxS1N3Z01pNDBLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnlaWFIxY200Z01DNHlNVEkySUNvZ2JIVnRXekJkSUNzZ01DNDNNVFV5SUNvZ2JIVnRXekZkSUNzZ01DNHdOekl5SUNvZ2JIVnRXekpkTzF4dVhIUjlMRnh1WEc1Y2RHTnZiblJ5WVhOME9pQm1kVzVqZEdsdmJpQW9ZMjlzYjNJeUtTQjdYRzVjZEZ4MEx5OGdhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZWRkl2VjBOQlJ6SXdMeU5qYjI1MGNtRnpkQzF5WVhScGIyUmxabHh1WEhSY2RIWmhjaUJzZFcweElEMGdkR2hwY3k1c2RXMXBibTl6YVhSNUtDazdYRzVjZEZ4MGRtRnlJR3gxYlRJZ1BTQmpiMnh2Y2pJdWJIVnRhVzV2YzJsMGVTZ3BPMXh1WEc1Y2RGeDBhV1lnS0d4MWJURWdQaUJzZFcweUtTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z0tHeDFiVEVnS3lBd0xqQTFLU0F2SUNoc2RXMHlJQ3NnTUM0d05TazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUNoc2RXMHlJQ3NnTUM0d05Ta2dMeUFvYkhWdE1TQXJJREF1TURVcE8xeHVYSFI5TEZ4dVhHNWNkR3hsZG1Wc09pQm1kVzVqZEdsdmJpQW9ZMjlzYjNJeUtTQjdYRzVjZEZ4MGRtRnlJR052Ym5SeVlYTjBVbUYwYVc4Z1BTQjBhR2x6TG1OdmJuUnlZWE4wS0dOdmJHOXlNaWs3WEc1Y2RGeDBhV1lnS0dOdmJuUnlZWE4wVW1GMGFXOGdQajBnTnk0eEtTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z0owRkJRU2M3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlDaGpiMjUwY21GemRGSmhkR2x2SUQ0OUlEUXVOU2tnUHlBblFVRW5JRG9nSnljN1hHNWNkSDBzWEc1Y2JseDBhWE5FWVhKck9pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBMeThnV1VsUklHVnhkV0YwYVc5dUlHWnliMjBnYUhSMGNEb3ZMekkwZDJGNWN5NXZjbWN2TWpBeE1DOWpZV3hqZFd4aGRHbHVaeTFqYjJ4dmNpMWpiMjUwY21GemRGeHVYSFJjZEhaaGNpQnlaMklnUFNCMGFHbHpMbkpuWWlncExtTnZiRzl5TzF4dVhIUmNkSFpoY2lCNWFYRWdQU0FvY21kaVd6QmRJQ29nTWprNUlDc2djbWRpV3pGZElDb2dOVGczSUNzZ2NtZGlXekpkSUNvZ01URTBLU0F2SURFd01EQTdYRzVjZEZ4MGNtVjBkWEp1SUhscGNTQThJREV5T0R0Y2JseDBmU3hjYmx4dVhIUnBjMHhwWjJoME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBjbVYwZFhKdUlDRjBhR2x6TG1selJHRnlheWdwTzF4dVhIUjlMRnh1WEc1Y2RHNWxaMkYwWlRvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RIWmhjaUJ5WjJJZ1BTQjBhR2x6TG5KbllpZ3BPMXh1WEhSY2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dNenNnYVNzcktTQjdYRzVjZEZ4MFhIUnlaMkl1WTI5c2IzSmJhVjBnUFNBeU5UVWdMU0J5WjJJdVkyOXNiM0piYVYwN1hHNWNkRngwZlZ4dVhIUmNkSEpsZEhWeWJpQnlaMkk3WEc1Y2RIMHNYRzVjYmx4MGJHbG5hSFJsYmpvZ1puVnVZM1JwYjI0Z0tISmhkR2x2S1NCN1hHNWNkRngwZG1GeUlHaHpiQ0E5SUhSb2FYTXVhSE5zS0NrN1hHNWNkRngwYUhOc0xtTnZiRzl5V3pKZElDczlJR2h6YkM1amIyeHZjbHN5WFNBcUlISmhkR2x2TzF4dVhIUmNkSEpsZEhWeWJpQm9jMnc3WEc1Y2RIMHNYRzVjYmx4MFpHRnlhMlZ1T2lCbWRXNWpkR2x2YmlBb2NtRjBhVzhwSUh0Y2JseDBYSFIyWVhJZ2FITnNJRDBnZEdocGN5NW9jMndvS1R0Y2JseDBYSFJvYzJ3dVkyOXNiM0piTWwwZ0xUMGdhSE5zTG1OdmJHOXlXekpkSUNvZ2NtRjBhVzg3WEc1Y2RGeDBjbVYwZFhKdUlHaHpiRHRjYmx4MGZTeGNibHh1WEhSellYUjFjbUYwWlRvZ1puVnVZM1JwYjI0Z0tISmhkR2x2S1NCN1hHNWNkRngwZG1GeUlHaHpiQ0E5SUhSb2FYTXVhSE5zS0NrN1hHNWNkRngwYUhOc0xtTnZiRzl5V3pGZElDczlJR2h6YkM1amIyeHZjbHN4WFNBcUlISmhkR2x2TzF4dVhIUmNkSEpsZEhWeWJpQm9jMnc3WEc1Y2RIMHNYRzVjYmx4MFpHVnpZWFIxY21GMFpUb2dablZ1WTNScGIyNGdLSEpoZEdsdktTQjdYRzVjZEZ4MGRtRnlJR2h6YkNBOUlIUm9hWE11YUhOc0tDazdYRzVjZEZ4MGFITnNMbU52Ykc5eVd6RmRJQzA5SUdoemJDNWpiMnh2Y2xzeFhTQXFJSEpoZEdsdk8xeHVYSFJjZEhKbGRIVnliaUJvYzJ3N1hHNWNkSDBzWEc1Y2JseDBkMmhwZEdWdU9pQm1kVzVqZEdsdmJpQW9jbUYwYVc4cElIdGNibHgwWEhSMllYSWdhSGRpSUQwZ2RHaHBjeTVvZDJJb0tUdGNibHgwWEhSb2QySXVZMjlzYjNKYk1WMGdLejBnYUhkaUxtTnZiRzl5V3pGZElDb2djbUYwYVc4N1hHNWNkRngwY21WMGRYSnVJR2gzWWp0Y2JseDBmU3hjYmx4dVhIUmliR0ZqYTJWdU9pQm1kVzVqZEdsdmJpQW9jbUYwYVc4cElIdGNibHgwWEhSMllYSWdhSGRpSUQwZ2RHaHBjeTVvZDJJb0tUdGNibHgwWEhSb2QySXVZMjlzYjNKYk1sMGdLejBnYUhkaUxtTnZiRzl5V3pKZElDb2djbUYwYVc4N1hHNWNkRngwY21WMGRYSnVJR2gzWWp0Y2JseDBmU3hjYmx4dVhIUm5jbUY1YzJOaGJHVTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFF2THlCb2RIUndPaTh2Wlc0dWQybHJhWEJsWkdsaExtOXlaeTkzYVd0cEwwZHlZWGx6WTJGc1pTTkRiMjUyWlhKMGFXNW5YMk52Ykc5eVgzUnZYMmR5WVhselkyRnNaVnh1WEhSY2RIWmhjaUJ5WjJJZ1BTQjBhR2x6TG5KbllpZ3BMbU52Ykc5eU8xeHVYSFJjZEhaaGNpQjJZV3dnUFNCeVoySmJNRjBnS2lBd0xqTWdLeUJ5WjJKYk1WMGdLaUF3TGpVNUlDc2djbWRpV3pKZElDb2dNQzR4TVR0Y2JseDBYSFJ5WlhSMWNtNGdRMjlzYjNJdWNtZGlLSFpoYkN3Z2RtRnNMQ0IyWVd3cE8xeHVYSFI5TEZ4dVhHNWNkR1poWkdVNklHWjFibU4wYVc5dUlDaHlZWFJwYnlrZ2UxeHVYSFJjZEhKbGRIVnliaUIwYUdsekxtRnNjR2hoS0hSb2FYTXVkbUZzY0doaElDMGdLSFJvYVhNdWRtRnNjR2hoSUNvZ2NtRjBhVzhwS1R0Y2JseDBmU3hjYmx4dVhIUnZjR0Z4ZFdWeU9pQm1kVzVqZEdsdmJpQW9jbUYwYVc4cElIdGNibHgwWEhSeVpYUjFjbTRnZEdocGN5NWhiSEJvWVNoMGFHbHpMblpoYkhCb1lTQXJJQ2gwYUdsekxuWmhiSEJvWVNBcUlISmhkR2x2S1NrN1hHNWNkSDBzWEc1Y2JseDBjbTkwWVhSbE9pQm1kVzVqZEdsdmJpQW9aR1ZuY21WbGN5a2dlMXh1WEhSY2RIWmhjaUJvYzJ3Z1BTQjBhR2x6TG1oemJDZ3BPMXh1WEhSY2RIWmhjaUJvZFdVZ1BTQm9jMnd1WTI5c2IzSmJNRjA3WEc1Y2RGeDBhSFZsSUQwZ0tHaDFaU0FySUdSbFozSmxaWE1wSUNVZ016WXdPMXh1WEhSY2RHaDFaU0E5SUdoMVpTQThJREFnUHlBek5qQWdLeUJvZFdVZ09pQm9kV1U3WEc1Y2RGeDBhSE5zTG1OdmJHOXlXekJkSUQwZ2FIVmxPMXh1WEhSY2RISmxkSFZ5YmlCb2MydzdYRzVjZEgwc1hHNWNibHgwYldsNE9pQm1kVzVqZEdsdmJpQW9iV2w0YVc1RGIyeHZjaXdnZDJWcFoyaDBLU0I3WEc1Y2RGeDBMeThnY0c5eWRHVmtJR1p5YjIwZ2MyRnpjeUJwYlhCc1pXMWxiblJoZEdsdmJpQnBiaUJEWEc1Y2RGeDBMeThnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDNOaGMzTXZiR2xpYzJGemN5OWliRzlpTHpCbE5tSTBZVEk0TlRBd09USXpOVFpoWVRObFkyVXdOMk0yWWpJME9XWXdNakl4WTJGalpXUXZablZ1WTNScGIyNXpMbU53Y0NOTU1qQTVYRzVjZEZ4MGRtRnlJR052Ykc5eU1TQTlJRzFwZUdsdVEyOXNiM0l1Y21kaUtDazdYRzVjZEZ4MGRtRnlJR052Ykc5eU1pQTlJSFJvYVhNdWNtZGlLQ2s3WEc1Y2RGeDBkbUZ5SUhBZ1BTQjNaV2xuYUhRZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSURBdU5TQTZJSGRsYVdkb2REdGNibHh1WEhSY2RIWmhjaUIzSUQwZ01pQXFJSEFnTFNBeE8xeHVYSFJjZEhaaGNpQmhJRDBnWTI5c2IzSXhMbUZzY0doaEtDa2dMU0JqYjJ4dmNqSXVZV3h3YUdFb0tUdGNibHh1WEhSY2RIWmhjaUIzTVNBOUlDZ29LSGNnS2lCaElEMDlQU0F0TVNrZ1B5QjNJRG9nS0hjZ0t5QmhLU0F2SUNneElDc2dkeUFxSUdFcEtTQXJJREVwSUM4Z01pNHdPMXh1WEhSY2RIWmhjaUIzTWlBOUlERWdMU0IzTVR0Y2JseHVYSFJjZEhKbGRIVnliaUJEYjJ4dmNpNXlaMklvWEc1Y2RGeDBYSFJjZEhjeElDb2dZMjlzYjNJeExuSmxaQ2dwSUNzZ2R6SWdLaUJqYjJ4dmNqSXVjbVZrS0Nrc1hHNWNkRngwWEhSY2RIY3hJQ29nWTI5c2IzSXhMbWR5WldWdUtDa2dLeUIzTWlBcUlHTnZiRzl5TWk1bmNtVmxiaWdwTEZ4dVhIUmNkRngwWEhSM01TQXFJR052Ykc5eU1TNWliSFZsS0NrZ0t5QjNNaUFxSUdOdmJHOXlNaTVpYkhWbEtDa3NYRzVjZEZ4MFhIUmNkR052Ykc5eU1TNWhiSEJvWVNncElDb2djQ0FySUdOdmJHOXlNaTVoYkhCb1lTZ3BJQ29nS0RFZ0xTQndLU2s3WEc1Y2RIMWNibjA3WEc1Y2JpOHZJRzF2WkdWc0lHTnZiblpsY25OcGIyNGdiV1YwYUc5a2N5QmhibVFnYzNSaGRHbGpJR052Ym5OMGNuVmpkRzl5YzF4dVQySnFaV04wTG10bGVYTW9ZMjl1ZG1WeWRDa3VabTl5UldGamFDaG1kVzVqZEdsdmJpQW9iVzlrWld3cElIdGNibHgwYVdZZ0tITnJhWEJ3WldSTmIyUmxiSE11YVc1a1pYaFBaaWh0YjJSbGJDa2dJVDA5SUMweEtTQjdYRzVjZEZ4MGNtVjBkWEp1TzF4dVhIUjlYRzVjYmx4MGRtRnlJR05vWVc1dVpXeHpJRDBnWTI5dWRtVnlkRnR0YjJSbGJGMHVZMmhoYm01bGJITTdYRzVjYmx4MEx5OGdZMjl1ZG1WeWMybHZiaUJ0WlhSb2IyUnpYRzVjZEVOdmJHOXlMbkJ5YjNSdmRIbHdaVnR0YjJSbGJGMGdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNWNkRngwYVdZZ0tIUm9hWE11Ylc5a1pXd2dQVDA5SUcxdlpHVnNLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdibVYzSUVOdmJHOXlLSFJvYVhNcE8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2JtVjNJRU52Ykc5eUtHRnlaM1Z0Wlc1MGN5d2diVzlrWld3cE8xeHVYSFJjZEgxY2JseHVYSFJjZEhaaGNpQnVaWGRCYkhCb1lTQTlJSFI1Y0dWdlppQmhjbWQxYldWdWRITmJZMmhoYm01bGJITmRJRDA5UFNBbmJuVnRZbVZ5SnlBL0lHTm9ZVzV1Wld4eklEb2dkR2hwY3k1MllXeHdhR0U3WEc1Y2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaGhjM05sY25SQmNuSmhlU2hqYjI1MlpYSjBXM1JvYVhNdWJXOWtaV3hkVzIxdlpHVnNYUzV5WVhjb2RHaHBjeTVqYjJ4dmNpa3BMbU52Ym1OaGRDaHVaWGRCYkhCb1lTa3NJRzF2WkdWc0tUdGNibHgwZlR0Y2JseHVYSFF2THlBbmMzUmhkR2xqSnlCamIyNXpkSEoxWTNScGIyNGdiV1YwYUc5a2MxeHVYSFJEYjJ4dmNsdHRiMlJsYkYwZ1BTQm1kVzVqZEdsdmJpQW9ZMjlzYjNJcElIdGNibHgwWEhScFppQW9kSGx3Wlc5bUlHTnZiRzl5SUQwOVBTQW5iblZ0WW1WeUp5a2dlMXh1WEhSY2RGeDBZMjlzYjNJZ1BTQjZaWEp2UVhKeVlYa29YM05zYVdObExtTmhiR3dvWVhKbmRXMWxiblJ6S1N3Z1kyaGhibTVsYkhNcE8xeHVYSFJjZEgxY2JseDBYSFJ5WlhSMWNtNGdibVYzSUVOdmJHOXlLR052Ykc5eUxDQnRiMlJsYkNrN1hHNWNkSDA3WEc1OUtUdGNibHh1Wm5WdVkzUnBiMjRnY205MWJtUlVieWh1ZFcwc0lIQnNZV05sY3lrZ2UxeHVYSFJ5WlhSMWNtNGdUblZ0WW1WeUtHNTFiUzUwYjBacGVHVmtLSEJzWVdObGN5a3BPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnliM1Z1WkZSdlVHeGhZMlVvY0d4aFkyVnpLU0I3WEc1Y2RISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb2JuVnRLU0I3WEc1Y2RGeDBjbVYwZFhKdUlISnZkVzVrVkc4b2JuVnRMQ0J3YkdGalpYTXBPMXh1WEhSOU8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCblpYUnpaWFFvYlc5a1pXd3NJR05vWVc1dVpXd3NJRzF2WkdsbWFXVnlLU0I3WEc1Y2RHMXZaR1ZzSUQwZ1FYSnlZWGt1YVhOQmNuSmhlU2h0YjJSbGJDa2dQeUJ0YjJSbGJDQTZJRnR0YjJSbGJGMDdYRzVjYmx4MGJXOWtaV3d1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYlNrZ2UxeHVYSFJjZENoc2FXMXBkR1Z5YzF0dFhTQjhmQ0FvYkdsdGFYUmxjbk5iYlYwZ1BTQmJYU2twVzJOb1lXNXVaV3hkSUQwZ2JXOWthV1pwWlhJN1hHNWNkSDBwTzF4dVhHNWNkRzF2WkdWc0lEMGdiVzlrWld4Yk1GMDdYRzVjYmx4MGNtVjBkWEp1SUdaMWJtTjBhVzl1SUNoMllXd3BJSHRjYmx4MFhIUjJZWElnY21WemRXeDBPMXh1WEc1Y2RGeDBhV1lnS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dwSUh0Y2JseDBYSFJjZEdsbUlDaHRiMlJwWm1sbGNpa2dlMXh1WEhSY2RGeDBYSFIyWVd3Z1BTQnRiMlJwWm1sbGNpaDJZV3dwTzF4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhSeVpYTjFiSFFnUFNCMGFHbHpXMjF2WkdWc1hTZ3BPMXh1WEhSY2RGeDBjbVZ6ZFd4MExtTnZiRzl5VzJOb1lXNXVaV3hkSUQwZ2RtRnNPMXh1WEhSY2RGeDBjbVYwZFhKdUlISmxjM1ZzZER0Y2JseDBYSFI5WEc1Y2JseDBYSFJ5WlhOMWJIUWdQU0IwYUdselcyMXZaR1ZzWFNncExtTnZiRzl5VzJOb1lXNXVaV3hkTzF4dVhIUmNkR2xtSUNodGIyUnBabWxsY2lrZ2UxeHVYSFJjZEZ4MGNtVnpkV3gwSUQwZ2JXOWthV1pwWlhJb2NtVnpkV3gwS1R0Y2JseDBYSFI5WEc1Y2JseDBYSFJ5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVYSFI5TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ0WVhobWJpaHRZWGdwSUh0Y2JseDBjbVYwZFhKdUlHWjFibU4wYVc5dUlDaDJLU0I3WEc1Y2RGeDBjbVYwZFhKdUlFMWhkR2d1YldGNEtEQXNJRTFoZEdndWJXbHVLRzFoZUN3Z2Rpa3BPMXh1WEhSOU8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCaGMzTmxjblJCY25KaGVTaDJZV3dwSUh0Y2JseDBjbVYwZFhKdUlFRnljbUY1TG1selFYSnlZWGtvZG1Gc0tTQS9JSFpoYkNBNklGdDJZV3hkTzF4dWZWeHVYRzVtZFc1amRHbHZiaUI2WlhKdlFYSnlZWGtvWVhKeUxDQnNaVzVuZEdncElIdGNibHgwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCc1pXNW5kR2c3SUdrckt5a2dlMXh1WEhSY2RHbG1JQ2gwZVhCbGIyWWdZWEp5VzJsZElDRTlQU0FuYm5WdFltVnlKeWtnZTF4dVhIUmNkRngwWVhKeVcybGRJRDBnTUR0Y2JseDBYSFI5WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnWVhKeU8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVOdmJHOXlPMXh1SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCcGMwRnljbUY1YVhOb0tHOWlhaWtnZTF4dVhIUnBaaUFvSVc5aWFpQjhmQ0IwZVhCbGIyWWdiMkpxSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1WEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJ2WW1vZ2FXNXpkR0Z1WTJWdlppQkJjbkpoZVNCOGZDQkJjbkpoZVM1cGMwRnljbUY1S0c5aWFpa2dmSHhjYmx4MFhIUW9iMkpxTG14bGJtZDBhQ0ErUFNBd0lDWW1JQ2h2WW1vdWMzQnNhV05sSUdsdWMzUmhibU5sYjJZZ1JuVnVZM1JwYjI0Z2ZIeGNibHgwWEhSY2RDaFBZbXBsWTNRdVoyVjBUM2R1VUhKdmNHVnlkSGxFWlhOamNtbHdkRzl5S0c5aWFpd2dLRzlpYWk1c1pXNW5kR2dnTFNBeEtTa2dKaVlnYjJKcUxtTnZibk4wY25WamRHOXlMbTVoYldVZ0lUMDlJQ2RUZEhKcGJtY25LU2twTzF4dWZUdGNiaUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlHbHpRWEp5WVhscGMyZ2dQU0J5WlhGMWFYSmxLQ2RwY3kxaGNuSmhlV2x6YUNjcE8xeHVYRzUyWVhJZ1kyOXVZMkYwSUQwZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG1OdmJtTmhkRHRjYm5aaGNpQnpiR2xqWlNBOUlFRnljbUY1TG5CeWIzUnZkSGx3WlM1emJHbGpaVHRjYmx4dWRtRnlJSE4zYVhwNmJHVWdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJSE4zYVhwNmJHVW9ZWEpuY3lrZ2UxeHVYSFIyWVhJZ2NtVnpkV3gwY3lBOUlGdGRPMXh1WEc1Y2RHWnZjaUFvZG1GeUlHa2dQU0F3TENCc1pXNGdQU0JoY21kekxteGxibWQwYURzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3WEc1Y2RGeDBkbUZ5SUdGeVp5QTlJR0Z5WjNOYmFWMDdYRzVjYmx4MFhIUnBaaUFvYVhOQmNuSmhlV2x6YUNoaGNtY3BLU0I3WEc1Y2RGeDBYSFF2THlCb2RIUndPaTh2YW5Od1pYSm1MbU52YlM5cVlYWmhjMk55YVhCMExXRnljbUY1TFdOdmJtTmhkQzEyY3kxd2RYTm9Mems0WEc1Y2RGeDBYSFJ5WlhOMWJIUnpJRDBnWTI5dVkyRjBMbU5oYkd3b2NtVnpkV3gwY3l3Z2MyeHBZMlV1WTJGc2JDaGhjbWNwS1R0Y2JseDBYSFI5SUdWc2MyVWdlMXh1WEhSY2RGeDBjbVZ6ZFd4MGN5NXdkWE5vS0dGeVp5azdYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlISmxjM1ZzZEhNN1hHNTlPMXh1WEc1emQybDZlbXhsTG5keVlYQWdQU0JtZFc1amRHbHZiaUFvWm00cElIdGNibHgwY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFJ5WlhSMWNtNGdabTRvYzNkcGVucHNaU2hoY21kMWJXVnVkSE1wS1R0Y2JseDBmVHRjYm4wN1hHNGlMQ0pwYlhCdmNuUWdleUJFWVhSaFRHbHpkRWwwWlcwc0lFTm9ZVzV1Wld4R2RXNWpJSDBnWm5KdmJTQW5MaTR2WkdWbWFXNXBkR2x2Ym5NblhHNXBiWEJ2Y25RZ1RXRnlhMlZ5YzB4aGVXVnlMQ0I3WEc0Z0lFMWhjbXRsY25OTVlYbGxjazl3ZEdsdmJuTXNYRzRnSUUxaGNtdGxjbk5JWldGMFRHRjVaWEpQY0hScGIyNXpMRnh1ZlNCbWNtOXRJQ2N1TGk5dFlYSnJaWEl2VFdGeWEyVnljMHhoZVdWeUoxeHVYRzVwYm5SbGNtWmhZMlVnUkhsdVlXMXBZMGhsWVhSTVlYbGxjazl3ZEdsdmJuTWdaWGgwWlc1a2N5Qk5ZWEpyWlhKelNHVmhkRXhoZVdWeVQzQjBhVzl1Y3lCN1hHNGdJQzhxS2lEbW1LL2xrS2JsdnFybmpxL21rcTNtbEw0Z0tpOWNiaUFnYkc5dmNEb2dZbTl2YkdWaGJseHVJQ0F2S2lvZzVwaXY1WkNtNkllcTVZcW81cEt0NXBTK0lDb3ZYRzRnSUdGMWRHODZJR0p2YjJ4bFlXNWNiaUFnTHlvcUlPbVh0T21hbE9hWHR1bVh0Q0FxTDF4dUlDQnBiblJsY25aaGJEb2diblZ0WW1WeVhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFUjVibUZ0YVdOSVpXRjBUR0Y1WlhJZ2UxeHVJQ0F2S2lvZzViMlQ1WW1ONXBLdDVwUys1WWl3NTZ5czVZZWc1cTJsSUNvdlhHNGdJSEJ5YVhaaGRHVWdZM1Z5Y21WdWRGTjBaWEE2SUc1MWJXSmxjbHh1WEc0Z0lIQnlhWFpoZEdVZ2JXRndPaUJNTGsxaGNGeHVJQ0J3Y21sMllYUmxJR1I1Ym1GdGFXTkVZWFJoVEdsemREb2dSR0YwWVV4cGMzUkpkR1Z0VzExYlhWeHVJQ0J3Y21sMllYUmxJRzl3ZEdsdmJuTTZJRVI1Ym1GdGFXTklaV0YwVEdGNVpYSlBjSFJwYjI1elhHNGdJSEJ5YVhaaGRHVWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJSEJ5YVhaaGRHVWdiR0Y1WlhJNklFMWhjbXRsY25OTVlYbGxjbHh1SUNCd2NtbDJZWFJsSUdselVHRjFjMlU2SUdKdmIyeGxZVzVjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9YRzRnSUNBZ2JXRndPaUJNTGsxaGNDeGNiaUFnSUNCa2VXNWhiV2xqUkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRXMTBzWEc0Z0lDQWdiM0IwYVc5dWN6b2dSSGx1WVcxcFkwaGxZWFJNWVhsbGNrOXdkR2x2Ym5Nc1hHNGdJQ0FnWTJoaGJtNWxiRVoxYm1NNklFTm9ZVzV1Wld4R2RXNWpYRzRnSUNrZ2UxeHVJQ0FnSUdsbUlDZ2hRWEp5WVhrdWFYTkJjbkpoZVNoa2VXNWhiV2xqUkdGMFlVeHBjM1FwSUh4OElHUjVibUZ0YVdORVlYUmhUR2x6ZEM1c1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaGdaR0YwWVV4cGMzUWc1YitGNmFHNzVwaXY2WjJlNTZtNjVwV3c1N3VFWUNsY2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1dFlYQWdQU0J0WVhCY2JpQWdJQ0IwYUdsekxtUjVibUZ0YVdORVlYUmhUR2x6ZENBOUlHUjVibUZ0YVdORVlYUmhUR2x6ZEZ4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5OY2JpQWdJQ0IwYUdsekxtTm9ZVzV1Wld4R2RXNWpJRDBnWTJoaGJtNWxiRVoxYm1OY2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5SVGRHVndJRDBnTUZ4dUlDQWdJSFJvYVhNdWFYTlFZWFZ6WlNBOUlIUnlkV1ZjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjbVZ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1selVHRjFjMlVnUFNCbVlXeHpaVnh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkRk4wWlhBZ1BTQXdYRzRnSUNBZ2RHaHBjeTVuYjNSdlUzUmxjQ2gwYUdsekxtTjFjbkpsYm5SVGRHVndLVnh1SUNBZ0lIUm9hWE11YzNSaGNuUW9LVnh1SUNCOVhHNGdJSEIxWW14cFl5QnpkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbWx6VUdGMWMyVWdQU0JtWVd4elpWeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1dmNIUnBiMjV6TG1GMWRHOHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUgxY2JpQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbWx6VUdGMWMyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQXZLaW9nNXBLdDVwUys1YTZNNXErVklDb3ZYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NWpkWEp5Wlc1MFUzUmxjQ0ErUFNCMGFHbHpMbVI1Ym1GdGFXTkVZWFJoVEdsemRDNXNaVzVuZEdnZ0xTQXhLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1dmNIUnBiMjV6TG14dmIzQXBJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGFHbHpMbkpsYzNSaGNuUW9LVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amRYSnlaVzUwVTNSbGNDc3JYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyOTBiMU4wWlhBb2RHaHBjeTVqZFhKeVpXNTBVM1JsY0NsY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDZ3BYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTd2dkR2hwY3k1dmNIUnBiMjV6TG1sdWRHVnlkbUZzS1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ3WVhWelpTZ3BJSHRjYmlBZ0lDQjBhR2x6TG1selVHRjFjMlVnUFNCMGNuVmxYRzRnSUgxY2JpQWdjSFZpYkdsaklIQnlaWFlvS1NCN1hHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MFUzUmxjQzB0WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwVTNSbGNDQTlYRzRnSUNBZ0lDQW9kR2hwY3k1amRYSnlaVzUwVTNSbGNDQXJJSFJvYVhNdVpIbHVZVzFwWTBSaGRHRk1hWE4wTG14bGJtZDBhQ2tnSlZ4dUlDQWdJQ0FnZEdocGN5NWtlVzVoYldsalJHRjBZVXhwYzNRdWJHVnVaM1JvWEc0Z0lDQWdkR2hwY3k1bmIzUnZVM1JsY0NoMGFHbHpMbU4xY25KbGJuUlRkR1Z3S1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ1WlhoMEtDa2dlMXh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkRk4wWlhBcksxeHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRGTjBaWEFnUFNCMGFHbHpMbU4xY25KbGJuUlRkR1Z3SUNVZ2RHaHBjeTVrZVc1aGJXbGpSR0YwWVV4cGMzUXViR1Z1WjNSb1hHNGdJQ0FnZEdocGN5NW5iM1J2VTNSbGNDaDBhR2x6TG1OMWNuSmxiblJUZEdWd0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCbmIzUnZVM1JsY0NoemRHVndPaUJ1ZFcxaVpYSXBJSHRjYmlBZ0lDQnBaaUFvYzNSbGNDQThJREFnZkh3Z2MzUmxjQ0ErUFNCMGFHbHpMbVI1Ym1GdGFXTkVZWFJoVEdsemRDNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1oyOTBiMU4wWlhBb0pIdHpkR1Z3ZlNrNklITjBaWEFnYVhNZ2IzVjBJRzltSUdsdVpHVjRJR0FwWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11YkdGNVpYSXVjMlYwUkdGMFlTaDBhR2x6TG1SNWJtRnRhV05FWVhSaFRHbHpkRnR6ZEdWd1hTbGNiaUFnSUNCMGFHbHpMbXhoZVdWeUxtUnlZWGNvS1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJrY21GM0tHOXdkR2x2Ym5NL09pQkVlVzVoYldsalNHVmhkRXhoZVdWeVQzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVhVzVwZEU5d2RHbHZibk1vYjNCMGFXOXVjeWxjYmlBZ0lDQjBhR2x6TG1sdWFYUk1ZWGxsY2lncFhHNGdJQ0FnZEdocGN5NXNZWGxsY2k1a2NtRjNLQ2xjYmlBZ0lDQnlaWFIxY200Z2RHaHBjMXh1SUNCOVhHNGdJSEIxWW14cFl5Qm1hWFJDYjNWdVpITW9LU0I3WEc0Z0lDQWdkR2hwY3k1c1lYbGxjaTVtYVhSQ2IzVnVaSE1vS1Z4dUlDQjlYRzRnSUhCeWFYWmhkR1VnYVc1cGRFOXdkR2x2Ym5Nb2IzQjBhVzl1Y3o4NklFUjVibUZ0YVdOSVpXRjBUR0Y1WlhKUGNIUnBiMjV6S1NCN1hHNGdJQ0FnZEdocGN5NXZjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloY2JpQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ2JHOXZjRG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJR0YxZEc4NklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNCcGJuUmxjblpoYkRvZ01UQXdNQ3hjYmlBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0IwYUdsekxtOXdkR2x2Ym5Nc1hHNGdJQ0FnSUNCdmNIUnBiMjV6WEc0Z0lDQWdLVnh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdhVzVwZEV4aGVXVnlLQ2tnZTF4dUlDQWdJR052Ym5OMElHMWhjbXRsY25OTVlYbGxjazl3ZEdsdmJuTTZJRTFoY210bGNuTk1ZWGxsY2s5d2RHbHZibk1nUFNCN1hHNGdJQ0FnSUNCeVpXNWtaWEpVZVhCbE9pQW5hR1ZoZENjc1hHNGdJQ0FnSUNCb1pXRjBUM0IwYVc5dWN6b2dkR2hwY3k1dmNIUnBiMjV6TEZ4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG14aGVXVnlJRDBnYm1WM0lFMWhjbXRsY25OTVlYbGxjaWhjYmlBZ0lDQWdJSFJvYVhNdWJXRndMRnh1SUNBZ0lDQWdkR2hwY3k1a2VXNWhiV2xqUkdGMFlVeHBjM1JiTUYwc1hHNGdJQ0FnSUNCdFlYSnJaWEp6VEdGNVpYSlBjSFJwYjI1ekxGeHVJQ0FnSUNBZ2RHaHBjeTVqYUdGdWJtVnNSblZ1WTF4dUlDQWdJQ2xjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVzWVhsbGNseHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdUV0Z5YTJWeUlHWnliMjBnSnk0dmJXRnlhMlZ5TDAxaGNtdGxjaWRjYm1sdGNHOXlkQ0JOWVhKclpYSnpUR0Y1WlhJZ1puSnZiU0FuTGk5dFlYSnJaWEl2VFdGeWEyVnljMHhoZVdWeUoxeHVhVzF3YjNKMElFMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNpQm1jbTl0SUNjdUwyMWhjbXRsY2k5TllYSnJaWEp6UW5WbVptVnlUR0Y1WlhJblhHNXBiWEJ2Y25RZ1VHOXNlV3hwYm1VZ1puSnZiU0FuTGk5d2IyeDViR2x1WlM5UWIyeDViR2x1WlNkY2JtbHRjRzl5ZENCUWIyeDViR2x1WlhOTVlYbGxjaUJtY205dElDY3VMM0J2Ykhsc2FXNWxMMUJ2Ykhsc2FXNWxjMHhoZVdWeUoxeHVhVzF3YjNKMElGQnZiSGxzYVc1bGMwSjFabVpsY2t4aGVXVnlJR1p5YjIwZ0p5NHZjRzlzZVd4cGJtVXZVRzlzZVd4cGJtVnpRblZtWm1WeVRHRjVaWEluWEc1cGJYQnZjblFnVUc5c2VXZHZiaUJtY205dElDY3VMM0J2YkhsbmIyNHZVRzlzZVdkdmJpZGNibWx0Y0c5eWRDQlFiMng1WjI5dWMweGhlV1Z5SUdaeWIyMGdKeTR2Y0c5c2VXZHZiaTlRYjJ4NVoyOXVjMHhoZVdWeUoxeHVhVzF3YjNKMElFZHlhV1J6VEdGNVpYSWdabkp2YlNBbkxpOXdiMng1WjI5dUwwZHlhV1J6VEdGNVpYSW5YRzVwYlhCdmNuUWdSSGx1WVcxcFkwaGxZWFJNWVhsbGNpQm1jbTl0SUNjdUwyUjVibUZ0YVdOSVpXRjBUR0Y1WlhJdlJIbHVZVzFwWTBobFlYUk1ZWGxsY2lkY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0JOWVhKclpYSXNYRzRnSUUxaGNtdGxjbk5NWVhsbGNpeGNiaUFnVFdGeWEyVnljMEoxWm1abGNreGhlV1Z5TEZ4dUlDQlFiMng1YkdsdVpTeGNiaUFnVUc5c2VXeHBibVZ6VEdGNVpYSXNYRzRnSUZCdmJIbHNhVzVsYzBKMVptWmxja3hoZVdWeUxGeHVJQ0JRYjJ4NVoyOXVMRnh1SUNCUWIyeDVaMjl1YzB4aGVXVnlMRnh1SUNCSGNtbGtjMHhoZVdWeUxGeHVJQ0JFZVc1aGJXbGpTR1ZoZEV4aGVXVnlMRnh1ZlZ4dVpYaHdiM0owSUh0Y2JpQWdUV0Z5YTJWeUxGeHVJQ0JOWVhKclpYSnpUR0Y1WlhJc1hHNGdJRTFoY210bGNuTkNkV1ptWlhKTVlYbGxjaXhjYmlBZ1VHOXNlV3hwYm1Vc1hHNGdJRkJ2Ykhsc2FXNWxjMHhoZVdWeUxGeHVJQ0JRYjJ4NWJHbHVaWE5DZFdabVpYSk1ZWGxsY2l4Y2JpQWdVRzlzZVdkdmJpeGNiaUFnVUc5c2VXZHZibk5NWVhsbGNpeGNiaUFnUjNKcFpITk1ZWGxsY2l4Y2JpQWdSSGx1WVcxcFkwaGxZWFJNWVhsbGNpeGNibjFjYmlJc0ltbHRjRzl5ZENCN0lFUmhkR0ZNYVhOMFNYUmxiU0I5SUdaeWIyMGdKeTR1TDJSbFptbHVhWFJwYjI1ekoxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCTllYSnJaWElnWlhoMFpXNWtjeUJNTGsxaGNtdGxjaUI3WEc0Z0lDOHZJSFJ6YkdsdWREcGthWE5oWW14bExXNWxlSFF0YkdsdVpUcDJZWEpwWVdKc1pTMXVZVzFsWEc0Z0lIQnlhWFpoZEdVZ1gxOWtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMWNiaUFnWTI5dWMzUnlkV04wYjNJb2JHRjBiRzVuT2lCTUxreGhkRXh1WjBWNGNISmxjM05wYjI0c0lHOXdkR2x2Ym5NL09pQk1MazFoY210bGNrOXdkR2x2Ym5NcElIdGNiaUFnSUNCemRYQmxjaWhzWVhSc2JtY3NJRzl3ZEdsdmJuTXBYRzRnSUgxY2JpQWdjSFZpYkdsaklITmxkRVJoZEdFb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtTQjdYRzRnSUNBZ2RHaHBjeTVmWDJSaGRHRWdQU0JrWVhSaFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdkbGRFUmhkR0VvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgxOWtZWFJoWEc0Z0lIMWNibjFjYmlJc0ltbHRjRzl5ZENCN0lFUmhkR0ZNYVhOMFNYUmxiU3dnUTJoaGJtNWxiRVoxYm1NZ2ZTQm1jbTl0SUNjdUxpOWtaV1pwYm1sMGFXOXVjeWRjYm1sdGNHOXlkQ0JOWVhKclpYSnpUR0Y1WlhJc0lIc2dUV0Z5YTJWeWMweGhlV1Z5VDNCMGFXOXVjeUI5SUdaeWIyMGdKeTR2VFdGeWEyVnljMHhoZVdWeUoxeHVhVzUwWlhKbVlXTmxJRTFoY210bGNuTkNkV1ptWlhKTVlYbGxjazl3ZEdsdmJuTWdaWGgwWlc1a2N5Qk5ZWEpyWlhKelRHRjVaWEpQY0hScGIyNXpJSHRjYmlBZ1luVm1abVZ5Vkc5dmJIUnBjRUYwZEhJNklITjBjbWx1WjF4dUlDQmlkV1ptWlhKUGNIUnBiMjV6T2lCTUxrTnBjbU5zWlUxaGNtdGxjazl3ZEdsdmJuTmNibjFjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNpQmxlSFJsYm1SeklFMWhjbXRsY25OTVlYbGxjaUI3WEc0Z0lIQjFZbXhwWXlCdmNIUnBiMjV6T2lCTllYSnJaWEp6UW5WbVptVnlUR0Y1WlhKUGNIUnBiMjV6WEc0Z0lIQnlhWFpoZEdVZ1luVm1abVZ5VEdGNVpYSTZJRXd1VEdGNVpYSkhjbTkxY0Z4dUlDQmpiMjV6ZEhKMVkzUnZjaWhjYmlBZ0lDQnRZWEE2SUV3dVRXRndMRnh1SUNBZ0lHUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFN4Y2JpQWdJQ0J2Y0hScGIyNXpPaUJOWVhKclpYSnpRblZtWm1WeVRHRjVaWEpQY0hScGIyNXpMRnh1SUNBZ0lHTm9ZVzV1Wld4R2RXNWpPaUJEYUdGdWJtVnNSblZ1WTF4dUlDQXBJSHRjYmlBZ0lDQnpkWEJsY2lodFlYQXNJR1JoZEdGTWFYTjBMQ0J2Y0hScGIyNXpMQ0JqYUdGdWJtVnNSblZ1WXlsY2JpQWdJQ0IwYUdsekxuUjVjR1VnUFNBbmJXRnlhMlZ5UW5WbVptVnlKMXh1SUNBZ0lHTnZibk4wSUdSbFptRjFiSFJDZFdabVpYSlBjSFJwYjI1ek9pQk1Ma05wY21Oc1pVMWhjbXRsY2s5d2RHbHZibk1nUFNCN1hHNGdJQ0FnSUNCeVlXUnBkWE02SURFd01EQXNYRzRnSUNBZ0lDQnpkSEp2YTJVNklIUnlkV1VzWEc0Z0lDQWdJQ0IzWldsbmFIUTZJREVzWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9YRzRnSUNBZ0lDQjBhR2x6TG05d2RHbHZibk1zWEc0Z0lDQWdJQ0I3SUdKMVptWmxjazl3ZEdsdmJuTTZJR1JsWm1GMWJIUkNkV1ptWlhKUGNIUnBiMjV6SUgwc1hHNGdJQ0FnSUNCdmNIUnBiMjV6WEc0Z0lDQWdLVnh1SUNCOVhHNWNiaUFnY0hWaWJHbGpJR1J5WVhjb2IzQjBhVzl1Y3o4NklFMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNrOXdkR2x2Ym5NcElIdGNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTWdQU0JQWW1wbFkzUXVZWE56YVdkdUtIUm9hWE11YjNCMGFXOXVjeXdnYjNCMGFXOXVjeWxjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk11WW5WbVptVnlUM0IwYVc5dWN5NWpiMnh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVEyOXNiM0pjYmlBZ0lDQjBhR2x6TG1sdWFYUk5ZWEpyWlhKektDbGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXlaV1J5WVhjb0tWeHVJQ0I5WEc1Y2JpQWdjSFZpYkdsaklISmxaSEpoZHlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxtMWhjbXRsY2t4aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbTFoY210bGNreGhlV1Z5S1Z4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZEdocGN5NWlkV1ptWlhKTVlYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1Y21WdGIzWmxUR0Y1WlhJb2RHaHBjeTVpZFdabVpYSk1ZWGxsY2lsY2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1dFlYSnJaWEpNWVhsbGNpQTlJSFJvYVhNdVkyOXVabWxuVFdGeWEyVnlUR0Y1WlhJb0tWeHVJQ0FnSUhSb2FYTXVZblZtWm1WeVRHRjVaWElnUFNCMGFHbHpMbU52Ym1acFowSjFabVpsY2t4aGVXVnlLQ2xjYmx4dUlDQWdJSFJvYVhNdWJHRjVaWElnUFNCTUxteGhlV1Z5UjNKdmRYQW9LVnh1SUNBZ0lIUm9hWE11YkdGNVpYSXVZV1JrVEdGNVpYSW9kR2hwY3k1dFlYSnJaWEpNWVhsbGNpbGNiaUFnSUNCMGFHbHpMbXhoZVdWeUxtRmtaRXhoZVdWeUtIUm9hWE11WW5WbVptVnlUR0Y1WlhJcFhHNWNiaUFnSUNCMGFHbHpMbTFoY0M1aFpHUk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUhKbGRIVnliaUIwYUdselhHNGdJSDFjYmx4dUlDQndkV0pzYVdNZ1oyVjBRbTkxYm1SektDazZJRXd1VEdGMFRHNW5RbTkxYm1SelJYaHdjbVZ6YzJsdmJpQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdWJXRnlhMlZ5Y3k1c1pXNW5kR2dnUEQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YldGd0xtZGxkRUp2ZFc1a2N5Z3BYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtMWhjbXRsY25NdWNtVmtkV05sS0Nod2NtVjJMQ0JqZFhKeUtTQTlQaUI3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdjSEpsZGk1bGVIUmxibVFvWEc0Z0lDQWdJQ0FnSUdOMWNuSXVaMlYwVEdGMFRHNW5LQ2t1ZEc5Q2IzVnVaSE1vZEdocGN5NXZjSFJwYjI1ekxtSjFabVpsY2s5d2RHbHZibk11Y21Ga2FYVnpLVnh1SUNBZ0lDQWdLVnh1SUNBZ0lIMHNJSFJvYVhNdWJXRnlhMlZ5YzFzd1hTNW5aWFJNWVhSTWJtY29LUzUwYjBKdmRXNWtjeWgwYUdsekxtOXdkR2x2Ym5NdVluVm1abVZ5VDNCMGFXOXVjeTV5WVdScGRYTXBLVnh1SUNCOVhHNWNiaUFnY0hKcGRtRjBaU0JqYjI1bWFXZENkV1ptWlhKTVlYbGxjaWdwSUh0Y2JpQWdJQ0JqYjI1emRDQm5jbTkxY0V4aGVXVnlJRDBnVEM1c1lYbGxja2R5YjNWd0tDbGNiaUFnSUNCMGFHbHpMbTFoY210bGNuTXVabTl5UldGamFDZ29iV0Z5YTJWeUtTQTlQaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQmphWEpqYkdWTVlYbGxjaUE5SUV3dVkybHlZMnhsS0Z4dUlDQWdJQ0FnSUNCdFlYSnJaWEl1WjJWMFRHRjBURzVuS0Nrc1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjNCMGFXOXVjeTVpZFdabVpYSlBjSFJwYjI1elhHNGdJQ0FnSUNBcFhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG1KMVptWmxjbFJ2YjJ4MGFYQkJkSFJ5S1NCN1hHNGdJQ0FnSUNBZ0lHTnBjbU5zWlV4aGVXVnlMbUpwYm1SVWIyOXNkR2x3S0Z4dUlDQWdJQ0FnSUNBZ0lDY25JQ3NnYldGeWEyVnlMbWRsZEVSaGRHRW9LVnQwYUdsekxtOXdkR2x2Ym5NdVluVm1abVZ5Vkc5dmJIUnBjRUYwZEhKZFhHNGdJQ0FnSUNBZ0lDbGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lITjNhWFJqYUNBb2RIbHdaVzltSUhSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnSUNCallYTmxJQ2R6ZEhKcGJtY25PbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kybHlZMnhsVEdGNVpYSXVZbWx1WkZSdmIyeDBhWEFvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ2NuSUNzZ2JXRnlhMlZ5TG1kbGRFUmhkR0VvS1Z0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlYVnh1SUNBZ0lDQWdJQ0FnSUNBZ0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lDQWdJQ0JqWVhObElDZHZZbXBsWTNRbk9seHVJQ0FnSUNBZ0lDQWdJQ0FnWTJseVkyeGxUR0Y1WlhJdVltbHVaRlJ2YjJ4MGFYQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDY25JQ3NnYldGeWEyVnlMbWRsZEVSaGRHRW9LVnQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUxuWmhiSFZsWFZ4dUlDQWdJQ0FnSUNBZ0lDQWdLVnh1SUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCbmNtOTFjRXhoZVdWeUxtRmtaRXhoZVdWeUtHTnBjbU5zWlV4aGVXVnlLVnh1SUNBZ0lIMHBYRzRnSUNBZ2NtVjBkWEp1SUdkeWIzVndUR0Y1WlhKY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElIc2diR2xuYUhSbGJpd2diM0IwYVc5dWMwMWxjbWRsSUgwZ1puSnZiU0FuTGk0dmRYUnBiSE12YVc1a1pYZ25YRzVwYlhCdmNuUWdleUJFWVhSaFRHbHpkRWwwWlcwc0lFTm9ZVzV1Wld4R2RXNWpJSDBnWm5KdmJTQW5MaTR2WkdWbWFXNXBkR2x2Ym5NblhHNXBiWEJ2Y25RZ1RXRnlhMlZ5SUdaeWIyMGdKeTR2VFdGeWEyVnlKMXh1WEc0dktpb2c1cml5NXArVDVxQzM1YnlQSU9hVm8rZUN1WHpuZzYzbGlwdmxtNzRnS2k5Y2JuUjVjR1VnVFdGeWEyVnljMHhoZVdWeVVtVnVaR1Z5Vkhsd1pTQTlJQ2R3YjJsdWRDY2dmQ0FuYUdWaGRDY2dmQ0FuWTJ4MWMzUmxjaWRjYmx4dUx5b3FJT2E0c3VhZmsrbWluT2lKc3VhZ3QrVzhqeURsalpYb2liSjg1WWlHNXE2MWZPV0lodWV4dXlBcUwxeHVkSGx3WlNCTllYSnJaWEp6VEdGNVpYSlNaVzVrWlhKUWIybHVkRU52Ykc5eVZIbHdaU0E5SUNkemFXNW5iR1VuSUh3Z0ozTmxaMjFsYm5SbFpDY2dmQ0FuWTJ4aGMzTnBabWxsWkNkY2JseHVMeW9xSU9hVm8rZUN1ZVdidnVhZ2grZXh1K1dlaXlCcFkyOXVabTl1ZEh4emRtZDhhVzFoWjJVZ0tpOWNiblI1Y0dVZ1RXRnlhMlZ5YzB4aGVXVnlTV052YmxSNWNHVWdQU0FuWm05dWRGOWpiR0Z6Y3ljZ2ZDQW5kVzVwWTI5a1pTY2dmQ0FuYzNsdFltOXNKeUI4SUNkcGJXRm5aU2RjYmx4dWRIbHdaU0JOWVhKclpYSnpUR0Y1WlhKU1pXNWtaWEpEYkhWemRHVnlRMjlzYjNKVWVYQmxJRDBnSjNOcGJtZHNaU2NnZkNBbmMyMWhjblFuWEc1Y2JtbHVkR1Z5Wm1GalpTQkpZMjl1VW1WdVpHVnlSblZ1WTA5d2RHbHZiaUI3WEc0Z0lHbGpiMjVUYVhwbE9pQmJiblZ0WW1WeUxDQnVkVzFpWlhKZFhHNGdJR2xqYjI1RGIyeHZjam9nYzNSeWFXNW5YRzU5WEc1MGVYQmxJRWxqYjI1U1pXNWtaWEpHZFc1aklEMGdLRnh1SUNCa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwc1hHNGdJSEJoY21GdGN6b2dTV052YmxKbGJtUmxja1oxYm1OUGNIUnBiMjVjYmlrZ1BUNGdjM1J5YVc1blhHNWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdUV0Z5YTJWeWMweGhlV1Z5VDNCMGFXOXVjeUI3WEc0Z0lISmxibVJsY2xSNWNHVTZJRTFoY210bGNuTk1ZWGxsY2xKbGJtUmxjbFI1Y0dWY2JpQWdjbVZ1WkdWeVVHOXBiblJEYjJ4dmNsUjVjR1UvT2lCTllYSnJaWEp6VEdGNVpYSlNaVzVrWlhKUWIybHVkRU52Ykc5eVZIbHdaVnh1SUNCcFkyOXVWSGx3WlQ4NklFMWhjbXRsY25OTVlYbGxja2xqYjI1VWVYQmxYRzVjYmlBZ2FXTnZia2x0WVdkbFZYSnNQem9nYzNSeWFXNW5YRzRnSUdsamIyNVRhWHBsUHpvZ1cyNTFiV0psY2l3Z2JuVnRZbVZ5WFZ4dUlDQnBZMjl1UTJ4aGMzTS9PaUJ6ZEhKcGJtZGNiaUFnYVdOdmJsVnVhV052WkdVL09pQnpkSEpwYm1kY2JpQWdhV052YmxONWJXSnZiRDg2SUhOMGNtbHVaMXh1SUNCcFkyOXVRMjlzYjNJL09pQnpkSEpwYm1kY2JpQWdhV052YmtGdVkyaHZjajg2SUZ0dWRXMWlaWElzSUc1MWJXSmxjbDFjYmlBZ2FXTnZibEpsYm1SbGNtVnlQem9nU1dOdmJsSmxibVJsY2taMWJtTmNibHh1SUNBdkx5RG1tSy9sa0tib2dacmxrSWp2dkl6a3ZKamxoWWpudXFmcHE1amt1bzRnY21WdVpHVnlWSGx3WlNBOVBTQndiMmx1ZEZ4dUlDQnBjME5zZFhOMFpYSS9PaUJpYjI5c1pXRnVYRzRnSUhKbGJtUmxja05zZFhOMFpYSkRiMnh2Y2xSNWNHVS9PaUJOWVhKclpYSnpUR0Y1WlhKU1pXNWtaWEpEYkhWemRHVnlRMjlzYjNKVWVYQmxYRzVjYmlBZ0x5b3FJT2FZcitXUXB1V3hsZWVrdWlCd2IzQjFjQ0FxTDF4dUlDQndiM0IxY0Q4NklHSnZiMnhsWVc1Y2JpQWdMeW9xSU9hWXIrV1FwdVd4bGVla3VpQjBiMjlzZEdsd0lDb3ZYRzRnSUhSdmIyeDBhWEEvT2lCaWIyOXNaV0Z1WEc0Z0lDOHFLaUJ3YjNCMWNDRGxzWlhucExybHJaZm1yclVnS2k5Y2JpQWdjRzl3ZFhCQmRIUnlQem9nYzNSeWFXNW5JSHdnZXlCc1lXSmxiRG9nYzNSeWFXNW5PeUIyWVd4MVpUb2dZVzU1SUgxY2JpQWdMeW9xSUhSdmIyeDBhWEFnNWJHVjU2UzY1YTJYNXE2MUlDb3ZYRzRnSUhSdmIyeDBhWEJCZEhSeVB6b2djM1J5YVc1blhHNWNiaUFnYjNCaFkybDBlVDg2SUc1MWJXSmxjbHh1WEc0Z0lDOHFLaURsaUlibXJyWG11TExtbjVQbnU1L29ycUhsclpmbXJyVWdLaTljYmlBZ2MyVm5iV1Z1ZEdWa1FYUjBjajg2SUhOMGNtbHVaMXh1SUNCelpXZHRaVzUwWldSRGIyeHZjbk0vT2lCemRISnBibWRiWFZ4dVhHNGdJQzhxS2lEbGlJYm5zYnZsbm92bXVMTG1uNVBudTUvb3JxSGxyWmZtcnJVZ0tpOWNiaUFnWTJ4aGMzTnBabWxsWkVGMGRISS9PaUJ6ZEhKcGJtZGNiaUFnWTJ4aGMzTnBabWxsWkVOdmJHOXljejg2SUhOMGNtbHVaMXRkWEc1Y2JpQWdhR1ZoZEU5d2RHbHZibk0vT2lCTllYSnJaWEp6U0dWaGRFeGhlV1Z5VDNCMGFXOXVjMXh1SUNCamJIVnpkR1Z5VDNCMGFXOXVjejg2SUV3dVRXRnlhMlZ5YzBOc2RYTjBaWEpQY0hScGIyNXpYRzU5WEc1Y2JpOHFLaURvdmF6bGpKYmt1THJuZzYzbGlwdmxtNzdubW9RZ2IzQjBhVzl1Y3lBcUwxeHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQk5ZWEpyWlhKelNHVmhkRXhoZVdWeVQzQjBhVzl1Y3lCbGVIUmxibVJ6SUV3dVNHVmhkRXhoZVdWeVQzQjBhVzl1Y3lCN1hHNGdJR1JwYldWdWMybHZia0YwZEhJL09pQnpkSEpwYm1kY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1RXRnlhMlZ5YzB4aGVXVnlJSHRjYmlBZ2NIVmliR2xqSUcxaGNEb2dUQzVOWVhCY2JpQWdjSFZpYkdsaklHUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFZ4dUlDQndkV0pzYVdNZ2IzQjBhVzl1Y3pvZ1RXRnlhMlZ5YzB4aGVXVnlUM0IwYVc5dWMxeHVJQ0J3ZFdKc2FXTWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNWNiaUFnY0hWaWJHbGpJSFI1Y0dVNklITjBjbWx1WjF4dVhHNGdJSEJ5YjNSbFkzUmxaQ0J0WVhKclpYSnpPaUJOWVhKclpYSmJYVnh1WEc0Z0lIQnliM1JsWTNSbFpDQm1iMk4xYzJWa1RXRnlhMlZ5T2lCTllYSnJaWEpjYmlBZ2NISnZkR1ZqZEdWa0lHaHZkbVZ5WldSTllYSnJaWEk2SUUxaGNtdGxjbHh1SUNBdktpb2c2WnlBNkthQjViR1Y1NlM2NTVxRTVwUys1YVNuNTVxRTVadSs1cUNISUNvdlhHNGdJSEJ5YjNSbFkzUmxaQ0JtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2pvZ1RXRnlhMlZ5WEc0Z0lIQnliM1JsWTNSbFpDQnRZWEpyWlhKTVlYbGxjam9nVEM1RFlXNTJZWE5KWTI5dVRHRjVaWEpjYmx4dUlDQndjbTkwWldOMFpXUWdkbWx6YVdKc1pUb2dZbTl2YkdWaGJseHVJQ0J3Y205MFpXTjBaV1FnYkdGNVpYSTZYRzRnSUNBZ2ZDQk1Ma05oYm5aaGMwbGpiMjVNWVhsbGNseHVJQ0FnSUh3Z1RDNUlaV0YwVEdGNVpYSmNiaUFnSUNCOElFd3VUV0Z5YTJWeWMwTnNkWE4wWlhKY2JpQWdJQ0I4SUV3dVRHRjVaWEpIY205MWNGeHVJQ0J3Y21sMllYUmxJR2hsWVhSTVlYbGxjam9nVEM1SVpXRjBUR0Y1WlhKY2JpQWdjSEpwZG1GMFpTQmpiSFZ6ZEdWeVRHRjVaWEk2SUV3dVRXRnlhMlZ5YzBOc2RYTjBaWEpjYmx4dUlDQndjbWwyWVhSbElITmxaMjFsYm5SbFpFMXBiam9nYm5WdFltVnlYRzRnSUhCeWFYWmhkR1VnYzJWbmJXVnVkR1ZrVTNSbGNEb2diblZ0WW1WeVhHNGdJSEJ5YVhaaGRHVWdZMnhoYzNOcFpubERiMnh2Y2sxaGNEb2dleUJiY0hKdmNEb2djM1J5YVc1blhUb2djM1J5YVc1bklIMWNiaUFnY0hKcGRtRjBaU0JqYkdGemMybG1lVU52Ykc5eVVtVm1jem9nUVhKeVlYazhlMXh1SUNBZ0lHRjBkSEk2SUhOMGNtbHVaMXh1SUNBZ0lHTnZiRzl5T2lCemRISnBibWRjYmlBZ0lDQnVkVzF6T2lCdWRXMWlaWEpjYmlBZ2ZUNWNiaUFnY0hKcGRtRjBaU0JrWldaaGRXeDBUM0IwYVc5dWN6b2dUV0Z5YTJWeWMweGhlV1Z5VDNCMGFXOXVjMXh1SUNCamIyNXpkSEoxWTNSdmNpaGNiaUFnSUNCdFlYQTZJRXd1VFdGd0xGeHVJQ0FnSUdSaGRHRk1hWE4wT2lCRVlYUmhUR2x6ZEVsMFpXMWJYU3hjYmlBZ0lDQnZjSFJwYjI1ek9pQk5ZWEpyWlhKelRHRjVaWEpQY0hScGIyNXpMRnh1SUNBZ0lHTm9ZVzV1Wld4R2RXNWpPaUJEYUdGdWJtVnNSblZ1WTF4dUlDQXBJSHRjYmlBZ0lDQnBaaUFvSVVGeWNtRjVMbWx6UVhKeVlYa29aR0YwWVV4cGMzUXBJSHg4SUdSaGRHRk1hWE4wTG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtHQmtZWFJoVEdsemRDRGx2NFhwb2J2bW1LL3BuWjducWJybWxiRG51NFJnS1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG1SbFptRjFiSFJQY0hScGIyNXpJRDBnZTF4dUlDQWdJQ0FnY21WdVpHVnlWSGx3WlRvZ0ozQnZhVzUwSnl4Y2JpQWdJQ0FnSUhKbGJtUmxjbEJ2YVc1MFEyOXNiM0pVZVhCbE9pQW5jMmx1WjJ4bEp5eGNiaUFnSUNBZ0lHbGpiMjVVZVhCbE9pQW5kVzVwWTI5a1pTY3NYRzRnSUNBZ0lDQnBZMjl1VTJsNlpUb2dXekl3TENBeU1GMHNYRzRnSUNBZ0lDQnBZMjl1UTJ4aGMzTTZJQ2RwWTI5dVptOXVkQ2NzWEc0Z0lDQWdJQ0JwWTI5dVEyOXNiM0k2SUNjak16TTRPRVpHSnl4Y2JpQWdJQ0FnSUdsamIyNUJibU5vYjNJNklGc3hNQ3dnTWpCZExGeHVJQ0FnSUNBZ2NHOXdkWEE2SUhSeWRXVXNYRzRnSUNBZ0lDQjBiMjlzZEdsd09pQjBjblZsTEZ4dUlDQWdJQ0FnY0c5d2RYQkJkSFJ5T2lCN0lHeGhZbVZzT2lBbjVaQ041NmV3Snl3Z2RtRnNkV1U2SUNkdVlXMWxKeUI5TEZ4dUlDQWdJQ0FnZEc5dmJIUnBjRUYwZEhJNklDZHVZVzFsSnl4Y2JpQWdJQ0FnSUhObFoyMWxiblJsWkVOdmJHOXljem9nV3ljak16TTRPRVpHSjEwc1hHNGdJQ0FnSUNCamJHRnpjMmxtYVdWa1EyOXNiM0p6T2lCYkp5TXpNemc0UmtZblhTeGNiaUFnSUNBZ0lHbHpRMngxYzNSbGNqb2dabUZzYzJVc1hHNGdJQ0FnSUNCeVpXNWtaWEpEYkhWemRHVnlRMjlzYjNKVWVYQmxPaUFuYzIxaGNuUW5MRnh1SUNBZ0lDQWdhR1ZoZEU5d2RHbHZibk02SUh0Y2JpQWdJQ0FnSUNBZ2JXRjRPaUF4TEZ4dUlDQWdJQ0FnSUNCdGFXNVBjR0ZqYVhSNU9pQXdMalVzWEc0Z0lDQWdJQ0I5TEZ4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5SNWNHVWdQU0FuYldGeWEyVnlKMXh1SUNBZ0lIUm9hWE11YldGd0lEMGdiV0Z3WEc0Z0lDQWdkR2hwY3k1a1lYUmhUR2x6ZENBOUlHUmhkR0ZNYVhOMFhHNGdJQ0FnZEdocGN5NXZjSFJwYjI1eklEMGdiM0IwYVc5dWMxeHVJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1nUFNCamFHRnVibVZzUm5WdVkxeHVYRzRnSUNBZ2RHaHBjeTUyYVhOcFlteGxJRDBnZEhKMVpWeHVJQ0FnSUhSb2FYTXViR0Y1WlhJZ1BTQnVkV3hzWEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrVFdGeWEyVnlJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVhRzkyWlhKbFpFMWhjbXRsY2lBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVUV0Z5YTJWeUlEMGdiblZzYkZ4dUlDQWdJSFJvYVhNdWJXRnlhMlZ5Y3lBOUlGdGRYRzRnSUNBZ2RHaHBjeTV0WVhKclpYSk1ZWGxsY2lBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG1obFlYUk1ZWGxsY2lBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG1Oc2RYTjBaWEpNWVhsbGNpQTlJRzUxYkd4Y2JseHVJQ0FnSUhSb2FYTXVjMlZuYldWdWRHVmtUV2x1SUQwZ1NXNW1hVzVwZEhsY2JpQWdJQ0IwYUdsekxuTmxaMjFsYm5SbFpGTjBaWEFnUFNBeFhHNGdJQ0FnZEdocGN5NWpiR0Z6YzJsbWVVTnZiRzl5VFdGd0lEMGdlMzFjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaSEpoZHlodmNIUnBiMjV6UHpvZ1RXRnlhMlZ5YzB4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11ZG1semFXSnNaU0E5SUhSeWRXVmNiaUFnSUNCMGFHbHpMbWx1YVhSUGNIUnBiMjV6S0c5d2RHbHZibk1wWEc0Z0lDQWdkR2hwY3k1cGJtbDBUV0Z5YTJWeWN5Z3BYRzRnSUNBZ2RHaHBjeTVwYm1sMFJYWmxiblJ6S0NsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eVpXUnlZWGNvS1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ5WldSeVlYY29LU0I3WEc0Z0lDQWdhV1lnS0NGMGFHbHpMblpwYzJsaWJHVXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTVzWVhsbGNpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1c1lYbGxjaTV5WlcxdmRtVW9LVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJT1M4bU9XRmlPV0lwT2FXclNCcGMwTnNkWE4wWlhKY2JpQWdJQ0JwWmlBb2RHaHBjeTV2Y0hScGIyNXpMbWx6UTJ4MWMzUmxjaUFtSmlCMGFHbHpMbTl3ZEdsdmJuTXVjbVZ1WkdWeVZIbHdaU0E5UFQwZ0ozQnZhVzUwSnlrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVzWVhsbGNpQTlJSFJvYVhNdVkyOXVabWxuUTJ4MWMzUmxja3hoZVdWeUtDbGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYzNkcGRHTm9JQ2gwYUdsekxtOXdkR2x2Ym5NdWNtVnVaR1Z5Vkhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0JqWVhObElDZHdiMmx1ZENjNklIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxteGhlV1Z5SUQwZ2RHaHBjeTVqYjI1bWFXZE5ZWEpyWlhKTVlYbGxjaWdwWEc0Z0lDQWdJQ0FnSUNBZ1luSmxZV3RjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCallYTmxJQ2RqYkhWemRHVnlKem9nZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YkdGNVpYSWdQU0IwYUdsekxtTnZibVpwWjBOc2RYTjBaWEpNWVhsbGNpZ3BYRzRnSUNBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JqWVhObElDZG9aV0YwSnpvZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJHRjVaWElnUFNCMGFHbHpMbU52Ym1acFowaGxZWFJNWVhsbGNpZ3BYRzRnSUNBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JrWldaaGRXeDBPaUI3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCeVpXNWtaWEpVZVhCbElPUzRqZWFVcithTWdWd2lKSHQwYUdsekxtOXdkR2x2Ym5NdWNtVnVaR1Z5Vkhsd1pYMWNJbUFwWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1dFlYQXVZV1JrVEdGNVpYSW9kR2hwY3k1c1lYbGxjaWxjYmlBZ0lDQnlaWFIxY200Z2RHaHBjMXh1SUNCOVhHNGdJSEIxWW14cFl5QnpaWFJFWVhSaEtHUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJWdGRLU0I3WEc0Z0lDQWdkR2hwY3k1a1lYUmhUR2x6ZENBOUlHUmhkR0ZjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjMlYwVDNCMGFXOXVjeWh2Y0hScGIyNXpPaUJOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6TENCeVpXUnlZWGNnUFNCbVlXeHpaU2tnZTF4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlFOWlhbVZqZEM1aGMzTnBaMjRvZEdocGN5NXZjSFJwYjI1ekxDQnZjSFJwYjI1ektWeHVJQ0FnSUdsbUlDaHlaV1J5WVhjcElIdGNiaUFnSUNBZ0lIUm9hWE11Y21Wa2NtRjNLQ2xjYmlBZ0lDQjlYRzRnSUgxY2JpQWdMeW9xSU9pT3QrV1BsdVc5aytXSmpTQnZjSFJwYjI1eklDb3ZYRzRnSUhCMVlteHBZeUJuWlhSUGNIUnBiMjV6S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtOXdkR2x2Ym5OY2JpQWdmVnh1SUNCd2RXSnNhV01nWm1sMFFtOTFibVJ6S0NrZ2UxeHVJQ0FnSUhSb2FYTXViV0Z3TG1acGRFSnZkVzVrY3loMGFHbHpMbWRsZEVKdmRXNWtjeWdwTENCN0lIQmhaR1JwYm1jNklGc3lNQ3dnTWpCZElIMHBYRzRnSUgxY2JpQWdjSFZpYkdsaklHZGxkRUp2ZFc1a2N5Z3BPaUJNTGt4aGRFeHVaMEp2ZFc1a2MwVjRjSEpsYzNOcGIyNGdlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtMWhjbXRsY25NdWJHVnVaM1JvSUR3OUlEQXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG0xaGNDNW5aWFJDYjNWdVpITW9LVnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXRZWEpyWlhKekxtMWhjQ2hjYmlBZ0lDQWdJQ2h0WVhKclpYSXBJRDArWEc0Z0lDQWdJQ0FnSUZ0dFlYSnJaWEl1WjJWMFRHRjBURzVuS0NrdWJHRjBMQ0J0WVhKclpYSXVaMlYwVEdGMFRHNW5LQ2t1Ykc1blhTQmhjeUJiYm5WdFltVnlMQ0J1ZFcxaVpYSmRYRzRnSUNBZ0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa1pYTjBjbTk1S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWNtVnRiM1psVEdGNVpYSW9kR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVTFoY210bGNpbGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXRZWEF1YjJabUtDZDZiMjl0YzNSaGNuUW5MQ0IwYUdsekxsOTZiMjl0VTNSaGNuUkRZaXdnZEdocGN5bGNiaUFnSUNCMGFHbHpMbTFoY0M1dlptWW9KM3B2YjIxbGJtUW5MQ0IwYUdsekxsOTZiMjl0Ulc1a1EySXNJSFJvYVhNcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhSdloyZHNaVlpwYzJsaWJHVW9kbWx6YVdKc1pUb2dZbTl2YkdWaGJpa2dlMXh1SUNBZ0lIUm9hWE11ZG1semFXSnNaU0E5SUhacGMybGliR1ZjYmlBZ0lDQnBaaUFvSVhSb2FYTXViR0Y1WlhJcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1WVdSa1RHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsTllYSnJaWElwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnZEdocGN5NXRZWEF1Y21WdGIzWmxUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NIVmliR2xqSUdOb1lXNW5aVU52Ykc5eUtHTnZiRzl5T2lCemRISnBibWNwSUh0Y2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NdWFXTnZia052Ykc5eUlEMGdZMjlzYjNKY2JpQWdJQ0IwYUdsekxuSmxaSEpoZHlncFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdOb1lXNW5aVWxqYjI0b2FXTnZibFZ1YVdOdlpHVTZJSE4wY21sdVp5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVZXNXBZMjlrWlNBOUlHbGpiMjVWYm1samIyUmxYRzRnSUNBZ2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNGdJSEIxWW14cFl5QndhWFJqYUNocFpEb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV0WVhKclpYSnpMbVp2Y2tWaFkyZ29LRzFoY210bGNpa2dQVDRnZTF4dUlDQWdJQ0FnYVdZZ0tHMWhjbXRsY2k1blpYUkVZWFJoS0NrdWFXUWdQVDA5SUdsa0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXRnlhMlZ5UTJ4cFkydElZVzVrYkdWeUtHMWhjbXRsY2l3Z2RISjFaU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1oyVjBRMnhoYzNOcFpubERiMnh2Y2xKbFpuTW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WTJ4aGMzTnBabmxEYjJ4dmNsSmxabk5jYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWDNwdmIyMVRkR0Z5ZEVOaUtDa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NTJhWE5wWW14bEtTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSb2FYTXVkSGx3WlNBOVBUMGdKMjFoY210bGNpY3BJSHRjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVjbVZ1WkdWeVZIbHdaU0E5UFQwZ0ozQnZhVzUwSnlBbUppQWhkR2hwY3k1dmNIUnBiMjV6TG1selEyeDFjM1JsY2lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xaGNDNXlaVzF2ZG1WTVlYbGxjaWgwYUdsekxtMWhjbXRsY2t4aGVXVnlLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1eVpXMXZkbVZNWVhsbGNpaDBhR2x6TG0xaGNtdGxja3hoZVdWeUtWeHVJQ0FnSUgxY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1gzcHZiMjFGYm1SRFlpZ3BJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXVkbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGFHbHpMblI1Y0dVZ1BUMDlJQ2R0WVhKclpYSW5LU0I3WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTV2Y0hScGIyNXpMbkpsYm1SbGNsUjVjR1VnUFQwOUlDZHdiMmx1ZENjZ0ppWWdJWFJvYVhNdWIzQjBhVzl1Y3k1cGMwTnNkWE4wWlhJcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dFlYQXVZV1JrVEdGNVpYSW9kR2hwY3k1dFlYSnJaWEpNWVhsbGNpbGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1WVdSa1RHRjVaWElvZEdocGN5NXRZWEpyWlhKTVlYbGxjaWxjYmlBZ0lDQjlYRzRnSUgxY2JpQWdMeW9xSU9hNHN1YWZrK1M0dXVhVm8rZUN1ZVdidmlBcUwxeHVJQ0J3Y205MFpXTjBaV1FnWTI5dVptbG5UV0Z5YTJWeVRHRjVaWElvS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YldGeWEyVnlUR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YldGeWEyVnlUR0Y1WlhJdWNtVnRiM1psS0NsY2JpQWdJQ0I5WEc0Z0lDQWdZMjl1YzNRZ1kyRnVkbUZ6U1dOdmJreGhlV1Z5SUQwZ1RDNWpZVzUyWVhOSlkyOXVUR0Y1WlhJb2UzMHBMbUZrWkZSdktIUm9hWE11YldGd0tWeHVJQ0FnSUM4dklPYTN1K1dLb09lQ3VlV0h1K1M2aStTN3RseHVJQ0FnSUdOaGJuWmhjMGxqYjI1TVlYbGxjaTVoWkdSUGJrTnNhV05yVEdsemRHVnVaWElvS0Y4c0lGdDdJR1JoZEdFNklHMWhjbXRsY2lCOVhTa2dQVDRnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEpyWlhKRGJHbGphMGhoYm1Sc1pYSW9iV0Z5YTJWeUlHRnpJRTFoY210bGNpbGNiaUFnSUNCOUtWeHVJQ0FnSUM4dklPYTN1K1dLb09XUHMrbVVydVM2aStTN3RseHVJQ0FnSUdOaGJuWmhjMGxqYjI1TVlYbGxjaTVoWkdSUGJrTnZiblJsZUhSdFpXNTFUR2x6ZEdWdVpYSW9LR1YyWlc1MExDQmJleUJrWVhSaE9pQnRZWEpyWlhJZ2ZWMHBJRDArSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1vSjJOdmJuUmxlSFJ0Wlc1MUp5d2dlMXh1SUNBZ0lDQWdJQ0JsZG1WdWRDeGNiaUFnSUNBZ0lDQWdiV0Z5YTJWeUxGeHVJQ0FnSUNBZ2ZTbGNiaUFnSUNCOUtWeHVJQ0FnSUM4dklPYTN1K1dLb0NCb2IzWmxjaURrdW92a3U3WmNiaUFnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5SdmIyeDBhWEFwSUh0Y2JpQWdJQ0FnSUdOaGJuWmhjMGxqYjI1TVlYbGxjaTVoWkdSUGJraHZkbVZ5VEdsemRHVnVaWElvS0Y4c0lGdDdJR1JoZEdFNklHMWhjbXRsY2lCOVhTa2dQVDRnZTF4dUlDQWdJQ0FnSUNBdkx5RGt1WXZsaVkzbW5Ja2dhRzkyWlhJZzU1cUU1WVd6NlpldElIUnZiMngwYVhCY2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWFHOTJaWEpsWkUxaGNtdGxjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YUc5MlpYSmxaRTFoY210bGNpNWpiRzl6WlZSdmIyeDBhWEFvS1Z4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIUm9hWE11YUc5MlpYSmxaRTFoY210bGNpQTlJRzFoY210bGNpQmhjeUJOWVhKclpYSmNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVvYjNabGNtVmtUV0Z5YTJWeUxtZGxkRlJ2YjJ4MGFYQW9LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJT1dtZ3VhZW5PVzNzdWU3aitpdXZ1ZTlyaUIwYjI5c2RHbHdJT2VidE9hT3BlV3hsZWVrdWlCMGIyOXNkR2x3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVvYjNabGNtVmtUV0Z5YTJWeUxtOXdaVzVVYjI5c2RHbHdLQ2xjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBdkx5RGxrS2JsaUpubnU1SGxycG9nZEc5dmJIUnBjQ0RsdWJibHNaWG5wTHBjYmlBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5SdmIyeDBhWEJCZEhSeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWh2ZG1WeVpXUk5ZWEpyWlhJdVltbHVaRlJ2YjJ4MGFYQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDY25JQ3NnZEdocGN5NW9iM1psY21Wa1RXRnlhMlZ5TG1kbGRFUmhkR0VvS1Z0MGFHbHpMbTl3ZEdsdmJuTXVkRzl2YkhScGNFRjBkSEpkWEc0Z0lDQWdJQ0FnSUNBZ0lDQXBYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOUtWeHVJQ0FnSUgxY2JpQWdJQ0JqWVc1MllYTkpZMjl1VEdGNVpYSXVZV1JrVFdGeWEyVnljeWgwYUdsekxtMWhjbXRsY25NcFhHNWNiaUFnSUNBdkx5RG9wNlBsaHJQbGlKM21yS0htdUxMbW41UGt1STNsaDdybG03N21vSWZwbDY3cG9waGNiaUFnSUNCMGFHbHpMbTFoY0M1d1lXNVVieWgwYUdsekxtMWhjQzVuWlhSRFpXNTBaWElvS1NsY2JseHVJQ0FnSUhSb2FYTXViV0Z5YTJWeVRHRjVaWElnUFNCallXNTJZWE5KWTI5dVRHRjVaWEpjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV0WVhKclpYSk1ZWGxsY2x4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCblpYUlViMjlzVkdsd1EyOXVkR1Z1ZENoa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwcElIdGNiaUFnSUNCeVpYUjFjbTRnSnljZ0t5QmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NTBiMjlzZEdsd1FYUjBjbDFjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnYVc1cGRFOXdkR2x2Ym5Nb2IzQjBhVzl1Y3pvZ1RXRnlhMlZ5YzB4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUc5d2RHbHZibk5OWlhKblpTaGNiaUFnSUNBZ0lIUm9hWE11WkdWbVlYVnNkRTl3ZEdsdmJuTXNYRzRnSUNBZ0lDQjBhR2x6TG05d2RHbHZibk1zWEc0Z0lDQWdJQ0J2Y0hScGIyNXpYRzRnSUNBZ0tTQmhjeUJOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6WEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdsdWFYUk5ZWEpyWlhKektDa2dlMXh1SUNBZ0lDOHZJT2U4aytXdG1DQnpaV2R0Wlc1MElPZWJ1T1dGcythVnNPYU5ybHh1SUNBZ0lIUm9hWE11WTJGamFHVlRaV2R0Wlc1MFVHRnlZVzF6S0NsY2JpQWdJQ0IwYUdsekxtTmhZMmhsUTJ4aGMzTnBabmxRWVhKaGJYTW9LVnh1SUNBZ0lIUm9hWE11YldGeWEyVnljeUE5SUZ0ZFhHNGdJQ0FnZEdocGN5NWtZWFJoVEdsemRDNW1iM0pGWVdOb0tDaGtZWFJoS1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCc1lYbGxjaUE5SUV3dVoyVnZTbE5QVGloa1lYUmhMbWRsYjIxbGRISjVLUzVuWlhSTVlYbGxjbk1vS1Zzd1hTQmhjeUJNTGsxaGNtdGxjbHh1WEc0Z0lDQWdJQ0JqYjI1emRDQnRZWEpyWlhJZ1BTQnVaWGNnVFdGeWEyVnlLRnh1SUNBZ0lDQWdJQ0JiYkdGNVpYSXVaMlYwVEdGMFRHNW5LQ2t1YkdGMExDQnNZWGxsY2k1blpYUk1ZWFJNYm1jb0tTNXNibWRkTEZ4dUlDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdhV052YmpvZ2RHaHBjeTVuWlhSTllYSnJaWEpKWTI5dUtHUmhkR0VwTEZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBcFhHNWNiaUFnSUNBZ0lDOHZJT1d3aHVlYnVPV0ZzK1dBdk9lN2tlV3VtdVdJc0NCdFlYSnJaWExrdUlwY2JpQWdJQ0FnSUcxaGNtdGxjaTV6WlhSRVlYUmhLR1JoZEdFcFhHNGdJQ0FnSUNCMGFHbHpMbTFoY210bGNuTXVjSFZ6YUNodFlYSnJaWElwWEc0Z0lDQWdmU2xjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnYVc1cGRFVjJaVzUwY3lncElIdGNiaUFnSUNCMGFHbHpMbTFoY0M1dmJpZ25lbTl2YlhOMFlYSjBKeXdnZEdocGN5NWZlbTl2YlZOMFlYSjBRMklzSUhSb2FYTXBYRzRnSUNBZ2RHaHBjeTV0WVhBdWIyNG9KM3B2YjIxbGJtUW5MQ0IwYUdsekxsOTZiMjl0Ulc1a1EySXNJSFJvYVhNcFhHNGdJSDFjYmlBZ0x5OGc1YVNFNTVDR0lHMWhjbXRsY2lEbmdybmxoN3ZrdW92a3U3WmNiaUFnY0hKcGRtRjBaU0J0WVhKclpYSkRiR2xqYTBoaGJtUnNaWElvYldGeWEyVnlPaUJOWVhKclpYSXNJR1pwZEVKdmRXNWtjejg2SUdKdmIyeGxZVzRwSUh0Y2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSTllYSnJaWElnUFNCdFlYSnJaWEpjYmlBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3S1NCN1hHNGdJQ0FnSUNBdkx5RGxpS0RwbWFUbGlZM2t1SURrdUtybWxMN2xwS2ZsbTc3bW9JZGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VFdGeWEyVnlLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsTllYSnJaWEl1Y21WdGIzWmxSbkp2YlNoMGFHbHpMbTFoY0NsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUM4dklPZVVuK2FJa09XOWsrV0pqZWFVdnVXa3ArV2J2dWFnaDF4dUlDQWdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVUxaGNtdGxjaUE5SUc1bGR5Qk5ZWEpyWlhJb2JXRnlhMlZ5TG1kbGRFeGhkRXh1WnlncExDQjdYRzRnSUNBZ0lDQWdJR2xqYjI0NklIUm9hWE11WjJWMFRHRnlaMlZ5VFdGeWEyVnlTV052YmlodFlYSnJaWEl1WjJWMFJHRjBZU2dwS1N4Y2JpQWdJQ0FnSUgwcFhHNGdJQ0FnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVRXRnlhMlZ5TG1Ga1pGUnZLSFJvYVhNdWJXRndLVnh1SUNBZ0lDQWdMeThnNXJlNzVZcWc1cFMrNWFTbjVadSs1cUNINTVxRUlIQnZjSFZ3WEc0Z0lDQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VFdGeWEyVnlYRzRnSUNBZ0lDQWdJQzVpYVc1a1VHOXdkWEFvZEdocGN5NW5aWFJRYjNCMWNFTnZiblJsYm5Rb2JXRnlhMlZ5TG1kbGRFUmhkR0VvS1NrcFhHNGdJQ0FnSUNBZ0lDNXZjR1Z1VUc5d2RYQW9LVnh1SUNBZ0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVTFoY210bGNpNXZiaWduY0c5d2RYQmpiRzl6WlNjc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJQ0FnZlNsY2JpQWdJQ0I5WEc0Z0lDQWdiV0Z5YTJWeUxtTnNiM05sVkc5dmJIUnBjQ2dwWEc1Y2JpQWdJQ0IwYUdsekxtMWhjQzV3WVc1VWJ5aDBhR2x6TG1adlkzVnpaV1JOWVhKclpYSXVaMlYwVEdGMFRHNW5LQ2twWEc0Z0lDQWdhV1lnS0dacGRFSnZkVzVrY3lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdVptbDBRbTkxYm1SektHMWhjbXRsY2k1blpYUk1ZWFJNYm1jb0tTNTBiMEp2ZFc1a2N5Z3hNQ2twWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11WTJoaGJtNWxiRVoxYm1Nb0oyOXVMV05zYVdOckxXMWhjbXRsY2ljc0lHMWhjbXRsY2lsY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdOdmJtWnBaME5zZFhOMFpYSk1ZWGxsY2lncElIdGNiaUFnSUNBdkx5RGxzWlhucExyb2dacmxrSWpsbTc3bHNZSmNiaUFnSUNCcFppQW9kR2hwY3k1amJIVnpkR1Z5VEdGNVpYSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyeDFjM1JsY2t4aGVXVnlMbkpsYlc5MlpTZ3BYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVZMngxYzNSbGNreGhlV1Z5SUQwZ1RDNXRZWEpyWlhKRGJIVnpkR1Z5UjNKdmRYQW9lMXh1SUNBZ0lDQWdhV052YmtOeVpXRjBaVVoxYm1OMGFXOXVPaUIwYUdsekxtbGpiMjVEY21WaGRHVkdkVzVqZEdsdmJpNWlhVzVrS0hSb2FYTXBMRnh1SUNBZ0lIMHBYRzRnSUNBZ2RHaHBjeTVqYkhWemRHVnlUR0Y1WlhJdVlXUmtUR0Y1WlhKektGeHVJQ0FnSUNBZ2RHaHBjeTV0WVhKclpYSnpMbTFoY0Nnb2JTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J0WVhKclpYSWdQU0J1WlhjZ1RXRnlhMlZ5S0cwdVoyVjBUR0YwVEc1bktDa3NJSHRjYmlBZ0lDQWdJQ0FnSUNCcFkyOXVPaUIwYUdsekxtZGxkRTFoY210bGNrbGpiMjRvYlM1blpYUkVZWFJoS0NrcExGeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0J0WVhKclpYSXVjMlYwUkdGMFlTaHRMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJQ0FnYldGeWEyVnlMbUpwYm1SVWIyOXNkR2x3S0NjbklDc2diV0Z5YTJWeUxtZGxkRVJoZEdFb0tWdDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjRUYwZEhKZEtWeHVJQ0FnSUNBZ0lDQnRZWEpyWlhJdVltbHVaRkJ2Y0hWd0tIUm9hWE11WjJWMFVHOXdkWEJEYjI1MFpXNTBLRzFoY210bGNpNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdJQ0J0WVhKclpYSXViMjRvSjJOc2FXTnJKeXdnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXViV0Z5YTJWeVEyeHBZMnRJWVc1a2JHVnlLRzFoY210bGNpbGNiaUFnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzFoY210bGNseHVJQ0FnSUNBZ2ZTbGNiaUFnSUNBcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVkyeDFjM1JsY2t4aGVXVnlYRzRnSUgxY2JseHVJQ0F2S2lvZzVyaXk1cCtUNUxpNjU0T3Q1WXFiNVp1K0lDb3ZYRzRnSUhCeWFYWmhkR1VnWTI5dVptbG5TR1ZoZEV4aGVXVnlLQ2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbWhsWVhSTVlYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NW9aV0YwVEdGNVpYSXVjbVZ0YjNabEtDbGNiaUFnSUNCOVhHNGdJQ0FnWTI5dWMzUWdZV3gwY3pvZ2JuVnRZbVZ5VzEwZ1BTQmJYVnh1SUNBZ0lIUm9hWE11YldGeWEyVnljeTVtYjNKRllXTm9LQ2h0WVhKclpYSXBJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR3hoZEV4dVp5QTlJRzFoY210bGNpNW5aWFJNWVhSTWJtY29LVnh1SUNBZ0lDQWdZMjl1YzNRZ1pHbHRaVzV6YVc5dVFYUjBjaUE5WEc0Z0lDQWdJQ0FnSUhSb2FYTXViM0IwYVc5dWN5NW9aV0YwVDNCMGFXOXVjeUFtSmlCMGFHbHpMbTl3ZEdsdmJuTXVhR1ZoZEU5d2RHbHZibk11WkdsdFpXNXphVzl1UVhSMGNseHVJQ0FnSUNBZ2JHVjBJR0ZzZENBOVhHNGdJQ0FnSUNBZ0lDaGthVzFsYm5OcGIyNUJkSFJ5SUNZbUlHMWhjbXRsY2k1blpYUkVZWFJoS0NsYlpHbHRaVzV6YVc5dVFYUjBjbDBwSUh4OFhHNGdJQ0FnSUNBZ0lIUm9hWE11YjNCMGFXOXVjeTVvWldGMFQzQjBhVzl1Y3k1dFlYaGNiaUFnSUNBZ0lHbG1JQ2gwZVhCbGIyWWdZV3gwSUNFOVBTQW5iblZ0WW1WeUp5a2dlMXh1SUNBZ0lDQWdJQ0JoYkhRZ1BTQjBhR2x6TG05d2RHbHZibk11YUdWaGRFOXdkR2x2Ym5NdWJXRjRYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQmhiSFJ6TG5CMWMyZ29ZV3gwS1Z4dUlDQWdJQ0FnYldGeWEyVnlMbk5sZEV4aGRFeHVaeWhNTG14aGRFeHVaeWhzWVhSTWJtY3ViR0YwTENCc1lYUk1ibWN1Ykc1bkxDQmhiSFFwS1Z4dUlDQWdJSDBwWEc0Z0lDQWdkR2hwY3k1b1pXRjBUR0Y1WlhJZ1BTQk1MbWhsWVhSTVlYbGxjaWhjYmlBZ0lDQWdJSFJvYVhNdWJXRnlhMlZ5Y3k1dFlYQW9LR2wwTENCcGJtUmxlQ2tnUFQ0Z1cxeHVJQ0FnSUNBZ0lDQnBkQzVuWlhSTVlYUk1ibWNvS1M1c1lYUXNYRzRnSUNBZ0lDQWdJR2wwTG1kbGRFeGhkRXh1WnlncExteHVaeXhjYmlBZ0lDQWdJQ0FnWVd4MGMxdHBibVJsZUYwc1hHNGdJQ0FnSUNCZEtTeGNiaUFnSUNBZ0lHOXdkR2x2Ym5OTlpYSm5aU2g3SUcxcGJrOXdZV05wZEhrNklEQXVOU0I5TENCMGFHbHpMbTl3ZEdsdmJuTXVhR1ZoZEU5d2RHbHZibk1wWEc0Z0lDQWdLVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWhsWVhSTVlYbGxjbHh1SUNCOVhHNWNiaUFnY0hKcGRtRjBaU0JuWlhSTVlYSm5aWEpOWVhKclpYSkpZMjl1S0dSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOW5aWFJOWVhKclpYSkpZMjl1S0dSaGRHRXNJSFJ5ZFdVcFhHNGdJSDFjYmx4dUlDQndjbWwyWVhSbElHZGxkRTFoY210bGNrbGpiMjRvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyZGxkRTFoY210bGNrbGpiMjRvWkdGMFlTd2dabUZzYzJVcFhHNGdJSDFjYmx4dUlDQXZLaW9nNkk2MzVZK1c1YjJUNVltTklHMWhjbXRsY2lEcG5JRG9wb0hsc1pYbnBMcm5tb1FnYVdOdmJpQXFMMXh1SUNCd2NtbDJZWFJsSUY5blpYUk5ZWEpyWlhKSlkyOXVLRnh1SUNBZ0lHUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJTeGNiaUFnSUNCcGMweGhjbWRsY2pvZ1ltOXZiR1ZoYmx4dUlDQXBPaUJNTGtsamIyNGdmQ0JNTGtScGRrbGpiMjRnZTF4dUlDQWdJR052Ym5OMElHbGpiMjVUYVhwbElEMGdkR2hwY3k1dmNIUnBiMjV6TG1samIyNVRhWHBsWEc0Z0lDQWdZMjl1YzNRZ2FXTnZia0Z1WTJodmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1cFkyOXVRVzVqYUc5eVhHNGdJQ0FnWTI5dWMzUWdiR0Z5WjJWeVNXTnZibE5wZW1VZ1BTQmJhV052YmxOcGVtVmJNRjBnS2lBeExqVXNJR2xqYjI1VGFYcGxXekZkSUNvZ01TNDFYU0JoY3lCYlhHNGdJQ0FnSUNCdWRXMWlaWElzWEc0Z0lDQWdJQ0J1ZFcxaVpYSmNiaUFnSUNCZFhHNGdJQ0FnWTI5dWMzUWdiR0Z5WjJWeVNXTnZia0Z1WTJodmNpQTlJRnRwWTI5dVFXNWphRzl5V3pCZElDb2dNUzQxTENCcFkyOXVRVzVqYUc5eVd6RmRJQ29nTVM0MVhTQmhjeUJiWEc0Z0lDQWdJQ0J1ZFcxaVpYSXNYRzRnSUNBZ0lDQnVkVzFpWlhKY2JpQWdJQ0JkWEc1Y2JpQWdJQ0JqYjI1emRDQnBZMjl1UTI5c2IzSWdQU0IwYUdsekxtOXdkR2x2Ym5NdWFXTnZia052Ykc5eVhHNWNiaUFnSUNCemQybDBZMmdnS0hSb2FYTXViM0IwYVc5dWN5NXBZMjl1Vkhsd1pTa2dlMXh1SUNBZ0lDQWdZMkZ6WlNBbmFXMWhaMlVuT2lCN1hHNGdJQ0FnSUNBZ0lDOHZJSEpsZEhWeWJpQk1MbWxqYjI0b2UxeHVJQ0FnSUNBZ0lDQXZMeUFnSUdsamIyNVZjbXc2SUhSb2FYTXViM0IwYVc5dWN5NXBZMjl1U1cxaFoyVlZjbXdzWEc0Z0lDQWdJQ0FnSUM4dklDQWdhV052YmxOcGVtVTZJR2x6VEdGeVoyVnlJRDhnYkdGeVoyVnlTV052YmxOcGVtVWdPaUJwWTI5dVUybDZaU3hjYmlBZ0lDQWdJQ0FnTHk4Z0lDQnBZMjl1UVc1amFHOXlMRnh1SUNBZ0lDQWdJQ0F2THlCOUtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1kyRnpaU0FuWm05dWRGOWpiR0Z6Y3ljNlhHNGdJQ0FnSUNCallYTmxJQ2R6ZVcxaWIyd25PbHh1SUNBZ0lDQWdZMkZ6WlNBbmRXNXBZMjlrWlNjNklIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFd3VaR2wyU1dOdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnYUhSdGJEb2dkR2hwY3k1blpYUkRkWE4wYjIxSlkyOXVTRlJOVENoa1lYUmhMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBZMjl1VTJsNlpUb2dhWE5NWVhKblpYSWdQeUJzWVhKblpYSkpZMjl1VTJsNlpTQTZJR2xqYjI1VGFYcGxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXTnZia052Ykc5eUxGeHVJQ0FnSUNBZ0lDQWdJSDBwTEZ4dUlDQWdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpUb2dhWE5NWVhKblpYSWdQeUFuYkdGeVoyVXRaR2wyTFdsamIyNHRiV0Z5YTJWeUp5QTZJQ2NuTEZ4dUlDQWdJQ0FnSUNBZ0lHbGpiMjVUYVhwbE9pQnBjMHhoY21kbGNpQS9JR3hoY21kbGNrbGpiMjVUYVhwbElEb2dhV052YmxOcGVtVXNYRzRnSUNBZ0lDQWdJQ0FnYVdOdmJrRnVZMmh2Y2pvZ2FYTk1ZWEpuWlhJZ1B5QnNZWEpuWlhKSlkyOXVRVzVqYUc5eUlEb2dhV052YmtGdVkyaHZjaXhjYmlBZ0lDQWdJQ0FnSUNCMGIyOXNkR2x3UVc1amFHOXlPaUJwYzB4aGNtZGxjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1B5QmJNQ3dnTFd4aGNtZGxja2xqYjI1QmJtTm9iM0piTVYwZ0x5QXlYVnh1SUNBZ0lDQWdJQ0FnSUNBZ09pQmJNQ3dnTFdsamIyNUJibU5vYjNKYk1WMGdMeUF5WFN4Y2JpQWdJQ0FnSUNBZ0lDQndiM0IxY0VGdVkyaHZjam9nYVhOTVlYSm5aWEpjYmlBZ0lDQWdJQ0FnSUNBZ0lEOGdXekFzSUMxc1lYSm5aWEpKWTI5dVFXNWphRzl5V3pGZElDOGdNbDFjYmlBZ0lDQWdJQ0FnSUNBZ0lEb2dXekFzSUMxcFkyOXVRVzVqYUc5eVd6RmRJQzhnTWwwc1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQmtaV1poZFd4ME9pQjdYRzRnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaGdjbVZ1WkdWeVZIbHdaU0RrdUkzb2c3M2t1TG9nSkh0MGFHbHpMbTl3ZEdsdmJuTXVhV052YmxSNWNHVjlZQ2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJEZFhOMGIyMUpZMjl1U0ZSTlRDaGNiaUFnSUNCa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwc1hHNGdJQ0FnYjNCMGFXOXVjejg2SUVsamIyNVNaVzVrWlhKR2RXNWpUM0IwYVc5dVhHNGdJQ2s2SUhOMGNtbHVaeUI3WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXBZMjl1VW1WdVpHVnlaWElwSUh0Y2JpQWdJQ0FnSUc5d2RHbHZibk1nUFNCUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCMGFHbHpMbTl3ZEdsdmJuTXNJRzl3ZEdsdmJuTXBYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1U1pXNWtaWEpsY2loa1lYUmhMQ0J2Y0hScGIyNXpLVnh1SUNBZ0lIMWNiaUFnSUNCc1pYUWdZMjlzYjNJZ1BTQjBhR2x6TG05d2RHbHZibk11YVdOdmJrTnZiRzl5WEc0Z0lDQWdjM2RwZEdOb0lDaDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlVRzlwYm5SRGIyeHZjbFI1Y0dVcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjNOcGJtZHNaU2M2SUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVhV052YmtOdmJHOXlYRzRnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCallYTmxJQ2RqYkdGemMybG1hV1ZrSnpvZ2UxeHVJQ0FnSUNBZ0lDQmpiMnh2Y2lBOUlIUm9hWE11WjJWMFEyeGhjM05wWm5sTllYSnJaWEpEYjJ4dmNpaGtZWFJoS1Z4dUlDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdZMkZ6WlNBbmMyVm5iV1Z1ZEdWa0p6b2dlMXh1SUNBZ0lDQWdJQ0JqYjJ4dmNpQTlJSFJvYVhNdVoyVjBVMlZuYldWdWRHVmtUV0Z5YTJWeVEyOXNiM0lvWkdGMFlTbGNiaUFnSUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdSbFptRjFiSFE2SUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Z4dUlDQWdJQ0FnSUNBZ0lHQnlaVzVrWlhKUWIybHVkRU52Ykc5eVZIbHdaU0RrdUkzbWxLL21qSUZjSWlSN2RHaHBjeTV2Y0hScGIyNXpMbkpsYm1SbGNsQnZhVzUwUTI5c2IzSlVlWEJsZlZ3aVlGeHVJQ0FnSUNBZ0lDQXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUhOM2FYUmphQ0FvZEdocGN5NXZjSFJwYjI1ekxtbGpiMjVVZVhCbEtTQjdYRzRnSUNBZ0lDQXZMeURrdmIvbmxLZ2dZMnhoYzNOY2JpQWdJQ0FnSUdOaGMyVWdKMlp2Ym5SZlkyeGhjM01uT2lCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCZ1hHNGdJQ0FnSUNBZ0lDQWdQR2tnWTJ4aGMzTTlYQ0lrZTNSb2FYTXViM0IwYVc5dWN5NXBZMjl1UTJ4aGMzTjlYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsUFZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUFrZTJOdmJHOXlmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUFrZTI5d2RHbHZibk11YVdOdmJsTnBlbVZiTUYxOWNIZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnTHo1Y2JpQWdJQ0FnSUNBZ1lGeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0x5OGc1TDIvNTVTb0lITjJaMXh1SUNBZ0lDQWdZMkZ6WlNBbmMzbHRZbTlzSnpvZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1lGeHVJQ0FnSUNBZ0lDQWdJRHh6ZG1jZ1kyeGhjM005WENKcFkyOXVMWE41YldKdmJGd2lJR0Z5YVdFdGFHbGtaR1Z1UFZ3aWRISjFaVndpUGx4dUlDQWdJQ0FnSUNBZ0lDQWdQSFZ6WlNCNGJHbHVhenBvY21WbVBWd2lKSHQwYUdsekxtOXdkR2x2Ym5NdWFXTnZibE41YldKdmJIMWNJaUF2UGx4dUlDQWdJQ0FnSUNBZ0lEd3ZjM1puUGx4dUlDQWdJQ0FnSUNCZ1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNBdkx5RGt2Yi9ubEtnZ2RXNXBZMjlrWlZ4dUlDQWdJQ0FnWTJGelpTQW5kVzVwWTI5a1pTYzZJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0JjYmlBZ0lDQWdJQ0FnSUNBOGFWeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJ4aGMzTTlYQ0lrZTNSb2FYTXViM0IwYVc5dWN5NXBZMjl1UTJ4aGMzTjlYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsUFZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUFrZTJOdmJHOXlmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUFrZTI5d2RHbHZibk11YVdOdmJsTnBlbVZiTUYxOWNIZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnUGx4dUlDQWdJQ0FnSUNBZ0lDQWdKSHQwYUdsekxtOXdkR2x2Ym5NdWFXTnZibFZ1YVdOdlpHVjlYRzRnSUNBZ0lDQWdJQ0FnUEM5cFBseHVJQ0FnSUNBZ0lDQmdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1kyRmphR1ZEYkdGemMybG1lVkJoY21GdGN5Z3BJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXViM0IwYVc5dWN5NWpiR0Z6YzJsbWFXVmtRWFIwY2lrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1YzNRZ2RHMXdPaUI3SUZ0d2NtOXdPaUJ6ZEhKcGJtZGRPaUJiYzNSeWFXNW5MQ0J1ZFcxaVpYSmRJSDBnUFNCN2ZWeHVJQ0FnSUdOdmJuTjBJSEJ5YjNBZ1BTQjBhR2x6TG05d2RHbHZibk11WTJ4aGMzTnBabWxsWkVGMGRISmNiaUFnSUNCMGFHbHpMbVJoZEdGTWFYTjBMbVp2Y2tWaFkyZ29LR1JoZEdFcElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNoa1lYUmhXM0J5YjNCZElHbHVJSFJ0Y0NrZ2UxeHVJQ0FnSUNBZ0lDQjBiWEJiWkdGMFlWdHdjbTl3WFYwZ1BTQmJaR0YwWVZ0d2NtOXdYU3dnZEcxd1cyUmhkR0ZiY0hKdmNGMWRXekZkSUNzZ01WMWNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lIUnRjRnRrWVhSaFczQnliM0JkWFNBOUlGdGtZWFJoVzNCeWIzQmRMQ0F4WFZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBwWEc0Z0lDQWdZMjl1YzNRZ2RtRnNkV1Z6SUQwZ1QySnFaV04wTG5aaGJIVmxjeWgwYlhBcFhHNGdJQ0FnZG1Gc2RXVnpMbk52Y25Rb0tHRXNJR0lwSUQwK0lHSmJNVjBnTFNCaFd6RmRLVnh1SUNBZ0lIUm9hWE11WTJ4aGMzTnBabmxEYjJ4dmNsSmxabk1nUFNCYlhWeHVJQ0FnSUhaaGJIVmxjeTVtYjNKRllXTm9LQ2hiWVhSMGNpd2diblZ0YzEwc0lHbHVaR1Y0S1NBOVBpQjdYRzRnSUNBZ0lDQnNaWFFnWTI5c2IzSWdQU0FuWW14aFkyc25YRzRnSUNBZ0lDQnBaaUFvYVc1a1pYZ2dQQ0IwYUdsekxtOXdkR2x2Ym5NdVkyeGhjM05wWm1sbFpFTnZiRzl5Y3k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZMnhoYzNOcFptbGxaRU52Ykc5eWMxdHBibVJsZUYxY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhSb2FYTXVZMnhoYzNOcFpubERiMnh2Y2sxaGNGdGhkSFJ5WFNBOUlHTnZiRzl5WEc0Z0lDQWdJQ0IwYUdsekxtTnNZWE56YVdaNVEyOXNiM0pTWldaekxuQjFjMmdvZTF4dUlDQWdJQ0FnSUNCaGRIUnlMRnh1SUNBZ0lDQWdJQ0JqYjJ4dmNpeGNiaUFnSUNBZ0lDQWdiblZ0Y3l4Y2JpQWdJQ0FnSUgwcFhHNGdJQ0FnZlNsY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdkbGRFTnNZWE56YVdaNVRXRnlhMlZ5UTI5c2IzSW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqYkdGemMybG1lVU52Ykc5eVRXRndXMlJoZEdGYmRHaHBjeTV2Y0hScGIyNXpMbU5zWVhOemFXWnBaV1JCZEhSeVhWMWNiaUFnZlZ4dUlDQndjbWwyWVhSbElHTmhZMmhsVTJWbmJXVnVkRkJoY21GdGN5Z3BJSHRjYmlBZ0lDQmpiMjV6ZENCelpXZHRaVzUwWldSTVpXNW5kR2dnUFNCMGFHbHpMbTl3ZEdsdmJuTXVjMlZuYldWdWRHVmtRMjlzYjNKekxteGxibWQwYUZ4dUlDQWdJR3hsZENCdFlYaFdZV3dnUFNBdFNXNW1hVzVwZEhsY2JpQWdJQ0JzWlhRZ2JXbHVWbUZzSUQwZ1NXNW1hVzVwZEhsY2JpQWdJQ0JtYjNJZ0tHTnZibk4wSUdSaGRHRWdiMllnZEdocGN5NWtZWFJoVEdsemRDa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2RtRnNJRDBnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11YzJWbmJXVnVkR1ZrUVhSMGNsMWNiaUFnSUNBZ0lHMWhlRlpoYkNBOUlFMWhkR2d1YldGNEtHMWhlRlpoYkN3Z2RtRnNLVnh1SUNBZ0lDQWdiV2x1Vm1Gc0lEMGdUV0YwYUM1dGFXNG9iV2x1Vm1Gc0xDQjJZV3dwWEc0Z0lDQWdmVnh1SUNBZ0lHTnZibk4wSUhOMFpYQWdQU0FvYldGNFZtRnNJQzBnYldsdVZtRnNJQ3NnTVNrZ0x5QnpaV2R0Wlc1MFpXUk1aVzVuZEdoY2JpQWdJQ0IwYUdsekxuTmxaMjFsYm5SbFpFMXBiaUE5SUcxcGJsWmhiRnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVTNSbGNDQTlJSE4wWlhCY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdkbGRGTmxaMjFsYm5SbFpFMWhjbXRsY2tOdmJHOXlLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2s2SUhOMGNtbHVaeUI3WEc0Z0lDQWdZMjl1YzNRZ2RtRnNJRDBnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11YzJWbmJXVnVkR1ZrUVhSMGNsMWNiaUFnSUNCamIyNXpkQ0JqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSRGIyeHZjbk5iWEc0Z0lDQWdJQ0J3WVhKelpVbHVkQ2duSnlBcklDaDJZV3dnTFNCMGFHbHpMbk5sWjIxbGJuUmxaRTFwYmlrZ0x5QjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQXNJREV3S1Z4dUlDQWdJRjFjYmlBZ0lDQnlaWFIxY200Z1kyOXNiM0pjYmlBZ2ZWeHVJQ0J3Y21sMllYUmxJR2RsZEZCdmNIVndRMjl1ZEdWdWRDaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW5KMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1lDUjdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY24wNklDUjdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlYWDFnWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lBOVBUMGdKMjlpYW1WamRDY3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmdKSHQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUxteGhZbVZzZlRvZ0pIdGNiaUFnSUNBZ0lDQWdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlMblpoYkhWbFhWeHVJQ0FnSUNBZ2ZXQmNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCcFkyOXVRM0psWVhSbFJuVnVZM1JwYjI0b1kyeDFjM1JsY2pvZ1RDNU5ZWEpyWlhKelEyeDFjM1JsY2lrZ2UxeHVJQ0FnSUdOdmJuTjBJR052Ykc5eWN5QTlJRnNuSXpjMU56UTNNaWNzSUNjak5UQTVNMFV5Snl3Z0p5TkRRamM1T0RjbkxDQW5JMFpETnpZelFpZGRYRzRnSUNBZ1kyOXVjM1FnYkdWdVozUm9JRDBnZEdocGN5NWtZWFJoVEdsemRDNXNaVzVuZEdoY2JpQWdJQ0JqYjI1emRDQnpkR1Z3SUQwZ2JHVnVaM1JvSUM4Z1kyOXNiM0p6TG14bGJtZDBhRnh1SUNBZ0lHTnZibk4wSUhOallXeGxVM1JsY0NBOUlDZ3hJQzBnTUM0M05Ta2dMeUJqYjJ4dmNuTXViR1Z1WjNSb1hHNGdJQ0FnYkdWMElHTnZiRzl5SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1RGIyeHZjbHh1SUNBZ0lHeGxkQ0J6WTJGc1pTQTlJREZjYmlBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2tOc2RYTjBaWEpEYjJ4dmNsUjVjR1VnUFQwOUlDZHpiV0Z5ZENjcElIdGNiaUFnSUNBZ0lHTnZiRzl5SUQwZ1kyOXNiM0p6VzAxaGRHZ3VabXh2YjNJb0tHTnNkWE4wWlhJdVoyVjBRMmhwYkdSRGIzVnVkQ2dwSUMwZ01Ta2dMeUJ6ZEdWd0tWMWNiaUFnSUNBZ0lITmpZV3hsSUQxY2JpQWdJQ0FnSUNBZ0tFMWhkR2d1Wm14dmIzSW9LR05zZFhOMFpYSXVaMlYwUTJocGJHUkRiM1Z1ZENncElDMGdNU2tnTHlCemRHVndLU0FySURFcElDb2djMk5oYkdWVGRHVndJQ3RjYmlBZ0lDQWdJQ0FnTUM0M05WeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdUQzVrYVhaSlkyOXVLSHRjYmlBZ0lDQWdJR2gwYld3NklHQmNiaUFnSUNBZ0lDQThaR2wyWEc0Z0lDQWdJQ0FnSUhOMGVXeGxQVndpWEc0Z0lDQWdJQ0FnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTlRBbE8xeHVJQ0FnSUNBZ0lDQWdJSEJ2YzJsMGFXOXVPaUJ5Wld4aGRHbDJaVHRjYmlBZ0lDQWdJQ0FnSUNCM2FXUjBhRG9nTlRCd2VEdGNiaUFnSUNBZ0lDQWdJQ0JvWldsbmFIUTZJRFV3Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdkSEpoYm5ObWIzSnRPaUJ6WTJGc1pUTmtLQ1I3YzJOaGJHVjlMQ0FrZTNOallXeGxmU3dnTVNsY2JpQWdJQ0FnSUNBZ1hDSmNiaUFnSUNBZ0lDQWdQbHh1SUNBZ0lDQWdJQ0E4WkdsMlhHNGdJQ0FnSUNBZ0lDQWdjM1I1YkdVOVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJRFV3SlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVE2SUNSN2JHbG5hSFJsYmloamIyeHZjaWw5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdkMmxrZEdnNklEVXdjSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm9aV2xuYUhRNklEVXdjSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZjR0ZqYVhSNU9pQXdMamM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGIzQTZJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaV1owT2lBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJK1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBOFpHbDJYRzRnSUNBZ0lDQWdJQ0FnYzNSNWJHVTlYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURVd0pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RNklDUjdZMjlzYjNKOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNCaFkybDBlVG9nTUM0NE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZJRE15Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JvWldsbmFIUTZJRE15Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhKbmFXNDZJRGx3ZUR0Y2JpQWdJQ0FnSUNBZ0lDQmNJajVjYmlBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJRHhrYVhaY2JpQWdJQ0FnSUNBZ0lDQnpkSGxzWlQxY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR2x1WlMxb1pXbG5hSFE2SURNeWNIZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2IzTnBkR2x2YmpvZ1lXSnpiMngxZEdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjNBNklEbHdlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxablE2SURsd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUhkcFpIUm9PaUF6TW5CNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYUdWcFoyaDBPaUF6TW5CNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSTZJSGRvYVhSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2lBeE5IQjRPMXh1SUNBZ0lDQWdJQ0FnSUZ3aVhHNGdJQ0FnSUNBZ0lDQWdQbHh1SUNBZ0lDQWdJQ0FnSUNSN1kyeDFjM1JsY2k1blpYUkRhR2xzWkVOdmRXNTBLQ2w5WEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ1lDeGNiaUFnSUNBZ0lHbGpiMjVUYVhwbE9pQmJOREFzSURRd1hTeGNiaUFnSUNCOUtWeHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdVRzlzZVdkdmJpQm1jbTl0SUNjdUwxQnZiSGxuYjI0blhHNXBiWEJ2Y25RZ1VHOXNlV2R2Ym5OTVlYbGxjaXdnZXlCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1eklIMGdabkp2YlNBbkxpOVFiMng1WjI5dWMweGhlV1Z5SjF4dWFXMXdiM0owSUhzZ1JHRjBZVXhwYzNSSmRHVnRMQ0JEYUdGdWJtVnNSblZ1WXlCOUlHWnliMjBnSnk0dUwyUmxabWx1YVhScGIyNXpKMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkhjbWxrYzB4aGVXVnlJR1Y0ZEdWdVpITWdVRzlzZVdkdmJuTk1ZWGxsY2lCN1hHNGdJSEJ5YVhaaGRHVWdjSEp2Y0UxaGVFeGxibWQwYURvZ2JuVnRZbVZ5WEc0Z0lHTnZibk4wY25WamRHOXlLRnh1SUNBZ0lHMWhjRG9nVEM1TllYQXNYRzRnSUNBZ1pHRjBZVXhwYzNRNklFUmhkR0ZNYVhOMFNYUmxiVnRkTEZ4dUlDQWdJRzl3ZEdsdmJuTTZJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJSE4xY0dWeUtHMWhjQ3dnWkdGMFlVeHBjM1FzSUc5d2RHbHZibk1zSUdOb1lXNXVaV3hHZFc1aktWeHVJQ0FnSUhSb2FYTXVjSEp2Y0UxaGVFeGxibWQwYUNBOUlDMHhYRzRnSUgxY2JpQWdjSFZpYkdsaklISmxaSEpoZHlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxteGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhoZVdWeUxuSmxiVzkyWlNncFhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWJHRjVaWElnUFNCMGFHbHpMbU52Ym1acFowZHlhV1JNWVhsbGNpZ3BYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNBdkx5QjBiMjlzZEdsd0lPYWNpZVdQcitpRHZlbWNnT2ltZ2VlYnRPYU9wZVd4bGVla3V1KzhqT21jZ09pbWdlV2NxQ0J3YjJ4NVoyOXVJT2EzdStXS29PV0lzT1djc09XYnZ1UzRpdVM1aStXUWp1YUpqZVdQcitTN3BlKzhqT2FKZ09TN3BlbWNnT2ltZ2VXN3R1aS9uK2l1dnVlOXJseHVJQ0FnSUhSb2FYTXVZMjl1Wm1sblZHOXZiSFJwY0NncFhHNGdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEc0Z0lDQWdJQ0IwYUdsekxucHZiMjFJWVc1a2JHVnlLQ2xjYmlBZ0lDQjlMQ0F5TURBcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhOY2JpQWdmVnh1SUNCd2RXSnNhV01nZEc5bloyeGxWRzl2YkhScGNDaDJhWE5wWW14bE9pQmliMjlzWldGdUtTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjeTVtYjNKRllXTm9LQ2h3YjJ4NVoyOXVLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9jRzlzZVdkdmJpNW5aWFJVYjI5c2RHbHdLQ2twSUh0Y2JpQWdJQ0FnSUNBZ2NHOXNlV2R2Ymk1blpYUlViMjlzZEdsd0tDa3VjMlYwVDNCaFkybDBlU2gyYVhOcFlteGxJRDhnTVNBNklEQXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndjbTkwWldOMFpXUWdhVzVwZEVWMlpXNTBLQ2tnZTF4dUlDQWdJSFJvYVhNdWJXRndMbTl1S0NkNmIyOXRKeXdnZEdocGN5NTZiMjl0U0dGdVpHeGxjaTVpYVc1a0tIUm9hWE1wS1Z4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTI5dVptbG5WRzl2YkhScGNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQk5ZWGhNWlc1bmRHZ2dQU0IwYUdsekxtZGxkRkJ5YjNCTllYaE1aVzVuZEdnb0tWeHVJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjRUYwZEhJcElIdGNiaUFnSUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQndiMng1WjI5dUxtSnBibVJVYjI5c2RHbHdLSFJvYVhNdVoyVjBWRzl2YkZScGNFTnZiblJsYm5Rb2NHOXNlV2R2Ymk1blpYUkVZWFJoS0NrcExDQjdYRzRnSUNBZ0lDQWdJQ0FnY0dWeWJXRnVaVzUwT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUdScGNtVmpkR2x2YmpvZ0oyTmxiblJsY2ljc1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndjbWwyWVhSbElHTnZibVpwWjBkeWFXUk1ZWGxsY2lncElIdGNiaUFnSUNCMGFHbHpMbkJ2YkhsbmIyNU1ZWGxsY2lBOUlFd3ViR0Y1WlhKSGNtOTFjQ2dwWEc0Z0lDQWdkR2hwY3k1d2IyeDVaMjl1Y3lBOUlIUm9hWE11Y0c5c2VXZHZibk11YldGd0tDaHdiMng1WjI5dUtTQTlQaUI3WEc0Z0lDQWdJQ0JzWlhRZ1kyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZMjlzYjNKY2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlVRzlzZVdkdmJrTnZiRzl5Vkhsd1pTQTlQVDBnSjNObFoyMWxiblJsWkNjcElIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJZ1BTQjBhR2x6TG1kbGRGTmxaMjFsYm5SbFpGQnZiSGxuYjI1RGIyeHZjaWh3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR052Ym5OMElHOXdkR2x2Ym5NNklFd3VVRzlzZVd4cGJtVlBjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2dkR2hwY3k1dmNIUnBiMjV6TENCN1hHNGdJQ0FnSUNBZ0lHTnZiRzl5TEZ4dUlDQWdJQ0FnZlNsY2JpQWdJQ0FnSUM4dklPbUhqZWFXc09XNmxPZVVxQ0J2Y0hScGIyNXpYRzRnSUNBZ0lDQmpiMjV6ZENCdVpYZFFiMng1WjI5dUlEMGdibVYzSUZCdmJIbG5iMjRvY0c5c2VXZHZiaTVuWlhSTVlYUk1ibWR6S0Nrc0lHOXdkR2x2Ym5NcFhHNGdJQ0FnSUNCdVpYZFFiMng1WjI5dUxuTmxkRVJoZEdFb2NHOXNlV2R2Ymk1blpYUkVZWFJoS0NrcFhHNGdJQ0FnSUNCdVpYZFFiMng1WjI5dUxtOXVLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdMeThnZEdocGN5NXdiMng1WjI5dVEyeHBZMnRJWVc1a2JHVnlLSEJ2YkhsbmIyNHBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1VHOXNlV2R2Ymk1aWFXNWtVRzl3ZFhBb2RHaHBjeTVuWlhSUWIzQjFjRU52Ym5SbGJuUW9ibVYzVUc5c2VXZHZiaTVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WMGRYSnVJRzVsZDFCdmJIbG5iMjVjYmlBZ0lDQjlLVnh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVUR0Y1WlhJdVlXUmtUR0Y1WlhJb2NHOXNlV2R2YmlsY2JpQWdJQ0I5S1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5CdmJIbG5iMjVNWVhsbGNseHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ2VtOXZiVWhoYm1Sc1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2NHOXNlV2R2YmlBOUlIUm9hWE11Y0c5c2VXZHZibk5iTUYxY2JpQWdJQ0JwWmlBb0lYQnZiSGxuYjI0cElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5SdloyZHNaVlJ2YjJ4MGFYQW9YRzRnSUNBZ0lDQjBhR2x6TG1kbGRGSmxZM1JoYm1kc1pWZHBaSFJvS0hCdmJIbG5iMjRwSUQ1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWlhSVWIyOXNkR2x3VFdGNFYybGtkR2dvZEdocGN5NXdjbTl3VFdGNFRHVnVaM1JvS1Z4dUlDQWdJQ2xjYmlBZ2ZWeHVJQ0J3Y21sMllYUmxJR2RsZEZKbFkzUmhibWRzWlZkcFpIUm9LSEJ2YkhsbmIyNDZJRkJ2YkhsbmIyNHBJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWJHRjBURzVuVkc5TVlYbGxjbEJ2YVc1MEtIQnZiSGxuYjI0dVoyVjBRbTkxYm1SektDa3VaMlYwVG05eWRHaEZZWE4wS0NrcExuZ2dMVnh1SUNBZ0lDQWdkR2hwY3k1dFlYQXViR0YwVEc1blZHOU1ZWGxsY2xCdmFXNTBLSEJ2YkhsbmIyNHVaMlYwUW05MWJtUnpLQ2t1WjJWMFUyOTFkR2hYWlhOMEtDa3BMbmhjYmlBZ0lDQXBYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJVYjI5c2RHbHdUV0Y0VjJsa2RHZ29kR1Y0ZEV4bGJtZDBhRG9nYm5WdFltVnlLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUmxlSFJNWlc1bmRHZ2dLaUF4TWlBcklERTBYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJRY205d1RXRjRUR1Z1WjNSb0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhCeWIzQWdQVnh1SUNBZ0lDQWdkSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElnUFQwOUlDZHpkSEpwYm1jblhHNGdJQ0FnSUNBZ0lEOGdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2x4dUlDQWdJQ0FnSUNBNklIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEl1ZG1Gc2RXVmNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdiMng1WjI5dWMxeHVJQ0FnSUNBZ0xtMWhjQ2dvY0c5c2VXZHZiaWtnUFQ0Z1lDUjdjRzlzZVdkdmJpNW5aWFJFWVhSaEtDbGJjSEp2Y0YxOVlDNXNaVzVuZEdncFhHNGdJQ0FnSUNBdWNtVmtkV05sS0Nod2NtVjJMQ0JqZFhKeUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJOWVhSb0xtMWhlQ2h3Y21WMkxDQmpkWEp5S1Z4dUlDQWdJQ0FnZlN3Z01DbGNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdElIMGdabkp2YlNBbkxpNHZaR1ZtYVc1cGRHbHZibk1uWEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ2YkhsbmIyNGdaWGgwWlc1a2N5Qk1MbEJ2YkhsbmIyNGdlMXh1SUNBdkx5QjBjMnhwYm5RNlpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VNmRtRnlhV0ZpYkdVdGJtRnRaVnh1SUNCd2NtbDJZWFJsSUY5ZlpHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdFhHNGdJR052Ym5OMGNuVmpkRzl5S0Z4dUlDQWdJR3hoZEd4dVozTTZYRzRnSUNBZ0lDQjhJRXd1VEdGMFRHNW5SWGh3Y21WemMybHZibHRkWEc0Z0lDQWdJQ0I4SUV3dVRHRjBURzVuUlhod2NtVnpjMmx2Ymx0ZFcxMWNiaUFnSUNBZ0lId2dUQzVNWVhSTWJtZEZlSEJ5WlhOemFXOXVXMTFiWFZ0ZExGeHVJQ0FnSUc5d2RHbHZibk0vT2lCTUxsQnZiSGxzYVc1bFQzQjBhVzl1YzF4dUlDQXBJSHRjYmlBZ0lDQnpkWEJsY2loc1lYUnNibWR6TENCdmNIUnBiMjV6S1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ6WlhSRVlYUmhLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2tnZTF4dUlDQWdJSFJvYVhNdVgxOWtZWFJoSUQwZ1pHRjBZVnh1SUNCOVhHNGdJSEIxWW14cFl5Qm5aWFJFWVhSaEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlmWkdGMFlWeHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdleUJzYVdkb2RHVnVMQ0JrWVhKclpXNHNJRzl3ZEdsdmJuTk5aWEpuWlNCOUlHWnliMjBnSnk0dUwzVjBhV3h6TDJsdVpHVjRKMXh1YVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdExDQkRhR0Z1Ym1Wc1JuVnVZeUI5SUdaeWIyMGdKeTR1TDJSbFptbHVhWFJwYjI1ekoxeHVhVzF3YjNKMElGQnZiSGxuYjI0Z1puSnZiU0FuTGk5UWIyeDVaMjl1SjF4dVhHNHZLaW9nNXJpeTVwK1Q2YUtjNklteTVxQzM1YnlQSU9XTmxlaUpzbnpsaUlibXJyVWdLaTljYm5SNWNHVWdVRzlzZVdkdmJreGhlV1Z5VW1WdVpHVnlRMjlzYjNKVWVYQmxJRDBnSjNOcGJtZHNaU2NnZkNBbmMyVm5iV1Z1ZEdWa0oxeHVkSGx3WlNCRGIyeHZjazF2WkdVZ1BTQW5aR0Z5YTJWdUp5QjhJQ2RzYVdkb2RHVnVKeUI4SUNkdWIzSnRZV3duWEc1Y2JtTnZibk4wSUVSRlJrRlZURlJmUTA5TVQxSWdQU0FuSXpjeVFVWkVSaWRjYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVUc5c2VXZHZia3hoZVdWeVQzQjBhVzl1Y3lCbGVIUmxibVJ6SUV3dVVHOXNlV3hwYm1WUGNIUnBiMjV6SUh0Y2JpQWdjbVZ1WkdWeVVHOXNlV2R2YmtOdmJHOXlWSGx3WlRvZ1VHOXNlV2R2Ymt4aGVXVnlVbVZ1WkdWeVEyOXNiM0pVZVhCbFhHNWNiaUFnTHlvcUlIQnZjSFZ3SU9XeGxlZWt1dVd0bCthdXRTQXFMMXh1SUNCd2IzQjFjRUYwZEhJL09pQnpkSEpwYm1jZ2ZDQjdJR3hoWW1Wc09pQnpkSEpwYm1jN0lIWmhiSFZsT2lCaGJua2dmVnh1SUNBdktpb2dkRzl2YkhScGNDRGxzWlhucExybHJaZm1yclVnS2k5Y2JpQWdkRzl2YkhScGNFRjBkSEkvT2lCemRISnBibWRjYmx4dUlDQnZjR0ZqYVhSNVB6b2diblZ0WW1WeVhHNWNiaUFnTHlvcUlPV0lodWF1dGVhNHN1YWZrK2U3bitpdW9lV3RsK2F1dFNBcUwxeHVJQ0J6WldkdFpXNTBaV1JCZEhSeVB6b2djM1J5YVc1blhHNGdJSE5sWjIxbGJuUmxaRU52Ykc5eWN6ODZJSE4wY21sdVoxdGRYRzU5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFiMng1WjI5dWMweGhlV1Z5SUh0Y2JpQWdjSFZpYkdsaklIUjVjR1U2SUhOMGNtbHVaMXh1WEc0Z0lIQnliM1JsWTNSbFpDQjJhWE5wWW14bE9pQmliMjlzWldGdVhHNGdJSEJ5YjNSbFkzUmxaQ0JzWVhsbGNqb2dUQzVNWVhsbGNrZHliM1Z3WEc1Y2JpQWdjSEp2ZEdWamRHVmtJRzFoY0RvZ1RDNU5ZWEJjYmlBZ2NISnZkR1ZqZEdWa0lHUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFZ4dUlDQndjbTkwWldOMFpXUWdiM0IwYVc5dWN6b2dVRzlzZVdkdmJreGhlV1Z5VDNCMGFXOXVjMXh1SUNCd2NtOTBaV04wWldRZ1kyaGhibTVsYkVaMWJtTTZJRU5vWVc1dVpXeEdkVzVqWEc0Z0lIQnliM1JsWTNSbFpDQnpaV2R0Wlc1MFpXUk5hVzQ2SUc1MWJXSmxjbHh1SUNCd2NtOTBaV04wWldRZ2MyVm5iV1Z1ZEdWa1UzUmxjRG9nYm5WdFltVnlYRzRnSUhCeWIzUmxZM1JsWkNCd2IyeDVaMjl1Y3pvZ1VHOXNlV2R2Ymx0ZFhHNGdJSEJ5YjNSbFkzUmxaQ0JtYjJOMWMyVmtVRzlzZVdkdmJqb2dVRzlzZVdkdmJseHVJQ0J3Y205MFpXTjBaV1FnWm05amRYTmxaRVJwYzNCc1lYbFFiMng1WjI5dU9pQlFiMng1WjI5dVhHNGdJSEJ5YjNSbFkzUmxaQ0J3YjJ4NVoyOXVUR0Y1WlhJNklFd3VUR0Y1WlhKSGNtOTFjRnh1WEc0Z0lIQnlhWFpoZEdVZ1pHVm1ZWFZzZEU5d2RHbHZibk02SUZCdmJIbG5iMjVNWVhsbGNrOXdkR2x2Ym5OY2JpQWdZMjl1YzNSeWRXTjBiM0lvWEc0Z0lDQWdiV0Z3T2lCTUxrMWhjQ3hjYmlBZ0lDQmtZWFJoVEdsemREb2dSR0YwWVV4cGMzUkpkR1Z0VzEwc1hHNGdJQ0FnYjNCMGFXOXVjem9nVUc5c2VXZHZia3hoZVdWeVQzQjBhVzl1Y3l4Y2JpQWdJQ0JqYUdGdWJtVnNSblZ1WXpvZ1EyaGhibTVsYkVaMWJtTmNiaUFnS1NCN1hHNGdJQ0FnYVdZZ0tDRkJjbkpoZVM1cGMwRnljbUY1S0dSaGRHRk1hWE4wS1NCOGZDQmtZWFJoVEdsemRDNXNaVzVuZEdnZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhnWkdGMFlVeHBjM1FnNWIrRjZhRzc1cGl2NloyZTU2bTY1cFd3NTd1RVlDbGNiaUFnSUNCOVhHNWNiaUFnSUNCMGFHbHpMbVJsWm1GMWJIUlBjSFJwYjI1eklEMGdlMXh1SUNBZ0lDQWdjRzl3ZFhCQmRIUnlPaUI3SUd4aFltVnNPaUFuNVpDTjU2ZXdKeXdnZG1Gc2RXVTZJQ2R1WVcxbEp5QjlMRnh1SUNBZ0lDQWdkRzl2YkhScGNFRjBkSEk2SUNkdVlXMWxKeXhjYmlBZ0lDQWdJR052Ykc5eU9pQkVSVVpCVlV4VVgwTlBURTlTTEZ4dUlDQWdJQ0FnWm1sc2JEb2dkSEoxWlN4Y2JpQWdJQ0FnSUdacGJHeERiMnh2Y2pvZ1JFVkdRVlZNVkY5RFQweFBVaXhjYmlBZ0lDQWdJSGRsYVdkb2REb2dNU3hjYmlBZ0lDQWdJRzl3WVdOcGRIazZJREVzWEc0Z0lDQWdJQ0JtYVd4c1QzQmhZMmwwZVRvZ01DNDBMRnh1SUNBZ0lDQWdjbVZ1WkdWeVVHOXNlV2R2YmtOdmJHOXlWSGx3WlRvZ0ozTnBibWRzWlNjc1hHNGdJQ0FnSUNCelpXZHRaVzUwWldSRGIyeHZjbk02SUZ0RVJVWkJWVXhVWDBOUFRFOVNYU3hjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTUwZVhCbElEMGdKM0J2YkhsbmIyNG5YRzRnSUNBZ2RHaHBjeTV0WVhBZ1BTQnRZWEJjYmlBZ0lDQjBhR2x6TG1SaGRHRk1hWE4wSUQwZ1pHRjBZVXhwYzNSY2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1elRXVnlaMlVvWEc0Z0lDQWdJQ0IwYUdsekxtUmxabUYxYkhSUGNIUnBiMjV6TEZ4dUlDQWdJQ0FnYjNCMGFXOXVjMXh1SUNBZ0lDa2dZWE1nVUc5c2VXZHZia3hoZVdWeVQzQjBhVzl1YzF4dUlDQWdJSFJvYVhNdVkyaGhibTVsYkVaMWJtTWdQU0JqYUdGdWJtVnNSblZ1WTF4dVhHNGdJQ0FnZEdocGN5NTJhWE5wWW14bElEMGdkSEoxWlZ4dUlDQWdJSFJvYVhNdWNHOXNlV2R2Ym5NZ1BTQmJYVnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVFdsdUlEMGdTVzVtYVc1cGRIbGNiaUFnSUNCMGFHbHpMbk5sWjIxbGJuUmxaRk4wWlhBZ1BTQXhYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtVRzlzZVdkdmJpQTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXZHZiaUE5SUc1MWJHeGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1pISmhkeWh2Y0hScGIyNXpQem9nVUc5c2VXZHZia3hoZVdWeVQzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVhVzVwZEU5d2RHbHZibk1vYjNCMGFXOXVjeWxjYmlBZ0lDQjBhR2x6TG1sdWFYUlFiMng1WjI5dWN5Z3BYRzRnSUNBZ2RHaHBjeTVwYm1sMFJYWmxiblFvS1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbFpISmhkeWdwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSEpsWkhKaGR5Z3BJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXVkbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGFHbHpMbXhoZVdWeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG14aGVXVnlMbkpsYlc5MlpTZ3BYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViR0Y1WlhJZ1BTQjBhR2x6TG1OdmJtWnBaMUJ2YkhsbmIyNU1ZWGxsY2lncFhHNGdJQ0FnZEdocGN5NXRZWEF1WVdSa1RHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwYzF4dUlDQjlYRzRnSUhCMVlteHBZeUJtYVhSQ2IzVnVaSE1vS1NCN1hHNGdJQ0FnZEdocGN5NXRZWEF1Wm1sMFFtOTFibVJ6S0hSb2FYTXVaMlYwUW05MWJtUnpLQ2tzSUhzZ2NHRmtaR2x1WnpvZ1d6SXdMQ0F5TUYwZ2ZTbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1oyVjBRbTkxYm1SektDazZJRXd1VEdGMFRHNW5RbTkxYm1SelJYaHdjbVZ6YzJsdmJpQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdWNHOXNlV2R2Ym5NdWJHVnVaM1JvSUR3OUlEQXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG0xaGNDNW5aWFJDYjNWdVpITW9LVnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdiMng1WjI5dWN5NXlaV1IxWTJVb1hHNGdJQ0FnSUNBb2NISmxkaXdnWTNWeWNpa2dQVDRnY0hKbGRpNWxlSFJsYm1Rb1kzVnljaTVuWlhSQ2IzVnVaSE1vS1Nrc1hHNGdJQ0FnSUNCTUxteGhkRXh1WjBKdmRXNWtjeWhjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiMng1WjI5dWMxc3dYUzVuWlhSQ2IzVnVaSE1vS1M1blpYUk9iM0owYUVWaGMzUW9LU3hjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiMng1WjI5dWMxc3dYUzVuWlhSQ2IzVnVaSE1vS1M1blpYUlRiM1YwYUZkbGMzUW9LVnh1SUNBZ0lDQWdLVnh1SUNBZ0lDbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1pHVnpkSEp2ZVNncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1c1lYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1Y21WdGIzWmxUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1WjI5dUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG0xaGNDNXlaVzF2ZG1WTVlYbGxjaWgwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXZHZiaWxjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjSFZpYkdsaklIUnZaMmRzWlZacGMybGliR1VvZG1semFXSnNaVG9nWW05dmJHVmhiaWtnZTF4dUlDQWdJSFJvYVhNdWRtbHphV0pzWlNBOUlIWnBjMmxpYkdWY2JpQWdJQ0JwWmlBb0lYUm9hWE11YkdGNVpYSXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1WjI5dUtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVMbkpsYlc5MlpTZ3BYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQjBhR2x6TG0xaGNDNXlaVzF2ZG1WTVlYbGxjaWgwYUdsekxteGhlV1Z5S1Z4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdZMmhoYm1kbFEyOXNiM0lvWTI5c2IzSTZJSE4wY21sdVp5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeTVtYVd4c1EyOXNiM0lnUFNCamIyeHZjbHh1SUNBZ0lIUm9hWE11Y21Wa2NtRjNLQ2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjR2wwWTJnb2FXUTZJSE4wY21sdVp5a2dlMXh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ2FXWWdLSEJ2YkhsbmIyNHVaMlYwUkdGMFlTZ3BMbWxrSUQwOVBTQnBaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2YkhsbmIyNURiR2xqYTBoaGJtUnNaWElvY0c5c2VXZHZiaXdnZEhKMVpTbGNiaUFnSUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNsY2JpQWdmVnh1SUNBdkx5QjBjMnhwYm5RNlpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VNmJtOHRaVzF3ZEhsY2JpQWdjSEp2ZEdWamRHVmtJR2x1YVhSRmRtVnVkQ2dwSUh0OVhHNGdJSEJ5YjNSbFkzUmxaQ0JuWlhSVWIyOXNWR2x3UTI5dWRHVnVkQ2hrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdKeWNnS3lCa1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1MGIyOXNkR2x3UVhSMGNsMWNiaUFnZlZ4dUlDQndjbTkwWldOMFpXUWdaMlYwVUc5d2RYQkRiMjUwWlc1MEtHUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJTa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlDY25YRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjaUE5UFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCZ0pIdDBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5ZlRvZ0pIdGtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISmRmV0JjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQjBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5SUQwOVBTQW5iMkpxWldOMEp5a2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHQWtlM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJdWJHRmlaV3g5T2lBa2UxeHVJQ0FnSUNBZ0lDQmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXVkbUZzZFdWZFhHNGdJQ0FnSUNCOVlGeHVJQ0FnSUgxY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1kyRmphR1ZUWldkdFpXNTBVR0Z5WVcxektDa2dlMXh1SUNBZ0lHTnZibk4wSUhObFoyMWxiblJsWkV4bGJtZDBhQ0E5SUhSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkRiMnh2Y25NdWJHVnVaM1JvWEc0Z0lDQWdiR1YwSUcxaGVGWmhiQ0E5SUMxSmJtWnBibWwwZVZ4dUlDQWdJR3hsZENCdGFXNVdZV3dnUFNCSmJtWnBibWwwZVZ4dUlDQWdJR1p2Y2lBb1kyOXVjM1FnWkdGMFlTQnZaaUIwYUdsekxtUmhkR0ZNYVhOMEtTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCMllXd2dQU0JrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JCZEhSeVhWeHVJQ0FnSUNBZ2JXRjRWbUZzSUQwZ1RXRjBhQzV0WVhnb2JXRjRWbUZzTENCMllXd3BYRzRnSUNBZ0lDQnRhVzVXWVd3Z1BTQk5ZWFJvTG0xcGJpaHRhVzVXWVd3c0lIWmhiQ2xjYmlBZ0lDQjlYRzRnSUNBZ1kyOXVjM1FnYzNSbGNDQTlJQ2h0WVhoV1lXd2dMU0J0YVc1V1lXd2dLeUF4S1NBdklITmxaMjFsYm5SbFpFeGxibWQwYUZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnYldsdVZtRnNYRzRnSUNBZ2RHaHBjeTV6WldkdFpXNTBaV1JUZEdWd0lEMGdjM1JsY0Z4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCblpYUlRaV2R0Wlc1MFpXUlFiMng1WjI5dVEyOXNiM0lvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1RvZ2MzUnlhVzVuSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3dnUFNCa1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSQmRIUnlYVnh1SUNBZ0lHTnZibk4wSUdOdmJHOXlJRDBnZEdocGN5NXZjSFJwYjI1ekxuTmxaMjFsYm5SbFpFTnZiRzl5YzF0Y2JpQWdJQ0FnSUhCaGNuTmxTVzUwS0NjbklDc2dLSFpoYkNBdElIUm9hWE11YzJWbmJXVnVkR1ZrVFdsdUtTQXZJSFJvYVhNdWMyVm5iV1Z1ZEdWa1UzUmxjQ3dnTVRBcFhHNGdJQ0FnWFZ4dUlDQWdJSEpsZEhWeWJpQmpiMnh2Y2x4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCd2IyeDVaMjl1UTJ4cFkydElZVzVrYkdWeUtIQnZiSGxuYjI0NklGQnZiSGxuYjI0c0lHWnBkRUp2ZFc1a2N6ODZJR0p2YjJ4bFlXNHBJSHRjYmlBZ0lDQjBhR2x6TG1adlkzVnpaV1JRYjJ4NVoyOXVJRDBnY0c5c2VXZHZibHh1SUNBZ0lDOHZJT1dJb09tWnBPV0pqZVM0Z09TNHFpQm1iMk4xYzF4dUlDQWdJR2xtSUNoMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV2R2YmlrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0dWNtVnRiM1psS0NsY2JpQWdJQ0I5WEc0Z0lDQWdMeThnNTVTZjVvaVE1YjJUNVltTklHWnZZM1Z6WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2YkhsbmIyNGdQU0J1WlhjZ1VHOXNlV2R2Ymlod2IyeDVaMjl1TG1kbGRFeGhkRXh1WjNNb0tTd2dlMXh1SUNBZ0lDQWdZMjlzYjNJNklFUkZSa0ZWVEZSZlEwOU1UMUlzWEc0Z0lDQWdJQ0JtYVd4c1EyOXNiM0k2SUhSb2FYTXVaMlYwUTI5c2IzSW9jRzlzZVdkdmJpNW5aWFJFWVhSaEtDa3BMRnh1SUNBZ0lIMHBYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0dVlXUmtWRzhvZEdocGN5NXRZWEFwWEc1Y2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXZHZibHh1SUNBZ0lDQWdMbUpwYm1SUWIzQjFjQ2gwYUdsekxtZGxkRkJ2Y0hWd1EyOXVkR1Z1ZENod2IyeDVaMjl1TG1kbGRFUmhkR0VvS1NrcFhHNGdJQ0FnSUNBdWIzQmxibEJ2Y0hWd0tDbGNibHh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1WjI5dUxtOXVLQ2R3YjNCMWNHTnNiM05sSnl3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbG5iMjR1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlLVnh1SUNBZ0lIQnZiSGxuYjI0dVkyeHZjMlZVYjI5c2RHbHdLQ2xjYmx4dUlDQWdJSFJvYVhNdWJXRndMbkJoYmxSdktIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1WjI5dUxtZGxkRU5sYm5SbGNpZ3BLVnh1SUNBZ0lHbG1JQ2htYVhSQ2IzVnVaSE1wSUh0Y2JpQWdJQ0FnSUhSb2FYTXViV0Z3TG1acGRFSnZkVzVrY3lod2IyeDVaMjl1TG1kbGRFSnZkVzVrY3lncEtWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxtTm9ZVzV1Wld4R2RXNWpLQ2R2YmkxamJHbGpheTF3YjJ4NVoyOXVKeXdnY0c5c2VXZHZiaWxjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnYVc1cGRFOXdkR2x2Ym5Nb2IzQjBhVzl1Y3pvZ1VHOXNlV2R2Ymt4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUc5d2RHbHZibk5OWlhKblpTaGNiaUFnSUNBZ0lIUm9hWE11WkdWbVlYVnNkRTl3ZEdsdmJuTXNYRzRnSUNBZ0lDQjBhR2x6TG05d2RHbHZibk1zWEc0Z0lDQWdJQ0J2Y0hScGIyNXpYRzRnSUNBZ0tTQmhjeUJRYjJ4NVoyOXVUR0Y1WlhKUGNIUnBiMjV6WEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdsdWFYUlFiMng1WjI5dWN5Z3BJSHRjYmlBZ0lDQXZMeURudkpQbHJaZ2djMlZuYldWdWRDRG5tN2psaGJQbWxiRG1qYTVjYmlBZ0lDQjBhR2x6TG1OaFkyaGxVMlZuYldWdWRGQmhjbUZ0Y3lncFhHNGdJQ0FnZEdocGN5NXdiMng1WjI5dWN5QTlJRnRkWEc0Z0lDQWdkR2hwY3k1a1lYUmhUR2x6ZEM1bWIzSkZZV05vS0Noa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNCamIyNXpkQ0JzWVhsbGNpQTlJRXd1WjJWdlNsTlBUaWhrWVhSaExtZGxiMjFsZEhKNUtTNW5aWFJNWVhsbGNuTW9LVnN3WFZ4dUlDQWdJQ0FnWTI5dWMzUWdjRzlzZVdkdmJpQTlJRzVsZHlCUWIyeDVaMjl1S0Noc1lYbGxjaUJoY3lCTUxsQnZiSGxuYjI0cExtZGxkRXhoZEV4dVozTW9LU2xjYmx4dUlDQWdJQ0FnY0c5c2VXZHZiaTV6WlhSRVlYUmhLR1JoZEdFcFhHNGdJQ0FnSUNCMGFHbHpMbkJ2YkhsbmIyNXpMbkIxYzJnb2NHOXNlV2R2YmlsY2JpQWdJQ0I5S1Z4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTI5dVptbG5VRzlzZVdkdmJreGhlV1Z5S0NrZ2UxeHVJQ0FnSUhSb2FYTXVjRzlzZVdkdmJreGhlV1Z5SUQwZ1RDNXNZWGxsY2tkeWIzVndLQ2xjYmlBZ0lDQjBhR2x6TG5CdmJIbG5iMjV6SUQwZ2RHaHBjeTV3YjJ4NVoyOXVjeTV0WVhBb0tIQnZiSGxuYjI0cElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElHOXdkR2x2Ym5NNklFd3VVRzlzZVd4cGJtVlBjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2dkR2hwY3k1dmNIUnBiMjV6TENCN1hHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lCRVJVWkJWVXhVWDBOUFRFOVNMRnh1SUNBZ0lDQWdJQ0JtYVd4c1EyOXNiM0k2SUhSb2FYTXVaMlYwUTI5c2IzSW9jRzlzZVdkdmJpNW5aWFJFWVhSaEtDa3BMRnh1SUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQzh2SU9tSGplYVdzT1c2bE9lVXFDQnZjSFJwYjI1elhHNGdJQ0FnSUNCamIyNXpkQ0J1WlhkUWIyeDVaMjl1SUQwZ2JtVjNJRkJ2YkhsbmIyNG9jRzlzZVdkdmJpNW5aWFJNWVhSTWJtZHpLQ2tzSUc5d2RHbHZibk1wWEc0Z0lDQWdJQ0J1WlhkUWIyeDVaMjl1TG5ObGRFUmhkR0VvY0c5c2VXZHZiaTVuWlhSRVlYUmhLQ2twWEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTV2Y0hScGIyNXpMblJ2YjJ4MGFYQkJkSFJ5S1NCN1hHNGdJQ0FnSUNBZ0lHNWxkMUJ2YkhsbmIyNHVZbWx1WkZSdmIyeDBhWEFvZEdocGN5NW5aWFJVYjI5c1ZHbHdRMjl1ZEdWdWRDaHVaWGRRYjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2twWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0J1WlhkUWIyeDVaMjl1TG05dUtDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVRMnhwWTJ0SVlXNWtiR1Z5S0hCdmJIbG5iMjRwWEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnY21WMGRYSnVJRzVsZDFCdmJIbG5iMjVjYmlBZ0lDQjlLVnh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVUR0Y1WlhJdVlXUmtUR0Y1WlhJb2NHOXNlV2R2YmlsY2JpQWdJQ0I5S1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5CdmJIbG5iMjVNWVhsbGNseHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1oyVjBRMjlzYjNJb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdExDQnRiMlJsUHpvZ1EyOXNiM0pOYjJSbEtTQjdYRzRnSUNBZ2JHVjBJR052Ykc5eUlEMGdkR2hwY3k1dmNIUnBiMjV6TG1OdmJHOXlYRzRnSUNBZ2FXWWdLSFJvYVhNdWIzQjBhVzl1Y3k1eVpXNWtaWEpRYjJ4NVoyOXVRMjlzYjNKVWVYQmxJRDA5UFNBbmMyVm5iV1Z1ZEdWa0p5a2dlMXh1SUNBZ0lDQWdZMjlzYjNJZ1BTQjBhR2x6TG1kbGRGTmxaMjFsYm5SbFpGQnZiSGxuYjI1RGIyeHZjaWhrWVhSaEtWeHVJQ0FnSUgxY2JpQWdJQ0J6ZDJsMFkyZ2dLRzF2WkdVcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJSaGNtdGxiaWM2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJrWVhKclpXNG9ZMjlzYjNJcFhHNGdJQ0FnSUNCallYTmxJQ2RzYVdkb2RHVnVKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR3hwWjJoMFpXNG9ZMjlzYjNJcFhHNGdJQ0FnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWTI5c2IzSmNiaUFnSUNCOVhHNGdJSDFjYm4xY2JpSXNJbWx0Y0c5eWRDQjdJRVJoZEdGTWFYTjBTWFJsYlNCOUlHWnliMjBnSnk0dUwyUmxabWx1YVhScGIyNXpKMXh1WEc1bGVIQnZjblFnZEhsd1pTQlFiMng1YkdsdVpVeGhkRXh1WjBWNGNISmxjM05wYjI0Z1BWeHVJQ0I4SUV3dVRHRjBURzVuUlhod2NtVnpjMmx2Ymx0ZFhHNGdJSHdnVEM1TVlYUk1ibWRGZUhCeVpYTnphVzl1VzExYlhWeHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUc5c2VXeHBibVVnWlhoMFpXNWtjeUJNTGxCdmJIbHNhVzVsSUh0Y2JpQWdMeThnZEhOc2FXNTBPbVJwYzJGaWJHVXRibVY0ZEMxc2FXNWxPblpoY21saFlteGxMVzVoYldWY2JpQWdjSEpwZG1GMFpTQmZYMlJoZEdFNklFUmhkR0ZNYVhOMFNYUmxiVnh1SUNCamIyNXpkSEoxWTNSdmNpaHNZWFJzYm1kek9pQlFiMng1YkdsdVpVeGhkRXh1WjBWNGNISmxjM05wYjI0c0lHOXdkR2x2Ym5NL09pQk1MbEJ2Ykhsc2FXNWxUM0IwYVc5dWN5a2dlMXh1SUNBZ0lITjFjR1Z5S0d4aGRHeHVaM01zSUc5d2RHbHZibk1wWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSE5sZEVSaGRHRW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLU0I3WEc0Z0lDQWdkR2hwY3k1ZlgyUmhkR0VnUFNCa1lYUmhYRzRnSUgxY2JpQWdjSFZpYkdsaklHZGxkRVJoZEdFb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYMTlrWVhSaFhHNGdJSDFjYm4xY2JpSXNJbWx0Y0c5eWRDQjdJRVJoZEdGTWFYTjBTWFJsYlN3Z1EyaGhibTVsYkVaMWJtTWdmU0JtY205dElDY3VMaTlrWldacGJtbDBhVzl1Y3lkY2JtbHRjRzl5ZENCUWIyeDViR2x1WlhOTVlYbGxjaUJtY205dElDY3VMMUJ2Ykhsc2FXNWxjMHhoZVdWeUoxeHVYRzR2S2lvZzVyaXk1cCtUNmFLYzZJbXk1cUMzNWJ5UElPV05sZWlKc256bGlJYm1yclVnS2k5Y2JuUjVjR1VnVUc5c2VXeHBibVZNWVhsbGNsSmxibVJsY2tOdmJHOXlWSGx3WlNBOUlDZHphVzVuYkdVbklId2dKM05sWjIxbGJuUmxaQ2RjYm1sdWRHVnlabUZqWlNCUWIyeDViR2x1WlVKMVptWmxja3hoZVdWeVQzQjBhVzl1Y3lCbGVIUmxibVJ6SUV3dVEyOXljbWxrYjNKUGNIUnBiMjV6SUh0Y2JpQWdjbVZ1WkdWeVVHOXNlV3hwYm1WRGIyeHZjbFI1Y0dVNklGQnZiSGxzYVc1bFRHRjVaWEpTWlc1a1pYSkRiMnh2Y2xSNWNHVmNibHh1SUNBdktpb2djRzl3ZFhBZzViR1Y1NlM2NWEyWDVxNjFJQ292WEc0Z0lIQnZjSFZ3UVhSMGNqODZJSE4wY21sdVoxeHVJQ0F2S2lvZ2RHOXZiSFJwY0NEbHNaWG5wTHJsclpmbXJyVWdLaTljYmlBZ2RHOXZiSFJwY0VGMGRISS9PaUJ6ZEhKcGJtZGNibHh1SUNCdmNHRmphWFI1UHpvZ2JuVnRZbVZ5WEc1Y2JpQWdMeW9xSU9XSWh1YXV0ZWE0c3VhZmsrZTduK2l1b2VXdGwrYXV0U0FxTDF4dUlDQnpaV2R0Wlc1MFpXUkJkSFJ5UHpvZ2MzUnlhVzVuWEc0Z0lITmxaMjFsYm5SbFpFTnZiRzl5Y3o4NklITjBjbWx1WjF0ZFhHNTlYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWIyeDViR2x1WlhOQ2RXWm1aWEpNWVhsbGNpQmxlSFJsYm1SeklGQnZiSGxzYVc1bGMweGhlV1Z5SUh0Y2JpQWdjSFZpYkdsaklIUjVjR1U2SUhOMGNtbHVaMXh1SUNCd2NtOTBaV04wWldRZ2IzQjBhVzl1Y3pvZ1VHOXNlV3hwYm1WQ2RXWm1aWEpNWVhsbGNrOXdkR2x2Ym5OY2JpQWdZMjl1YzNSeWRXTjBiM0lvWEc0Z0lDQWdiV0Z3T2lCTUxrMWhjQ3hjYmlBZ0lDQmtZWFJoVEdsemREb2dSR0YwWVV4cGMzUkpkR1Z0VzEwc1hHNGdJQ0FnYjNCMGFXOXVjem9nVUc5c2VXeHBibVZDZFdabVpYSk1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJSE4xY0dWeUtHMWhjQ3dnWkdGMFlVeHBjM1FzSUc5d2RHbHZibk1zSUdOb1lXNXVaV3hHZFc1aktWeHVJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUlBjSFJwYjI1ek9pQlFiMng1YkdsdVpVSjFabVpsY2t4aGVXVnlUM0IwYVc5dWN5QTlJSHRjYmlBZ0lDQWdJSEpsYm1SbGNsQnZiSGxzYVc1bFEyOXNiM0pVZVhCbE9pQW5jMmx1WjJ4bEp5eGNiaUFnSUNBZ0lITmxaMjFsYm5SbFpFTnZiRzl5Y3pvZ1d5Y2pNek00T0VaR0oxMHNYRzRnSUNBZ0lDQmpiM0p5YVdSdmNqb2dNVEF3TEZ4dUlDQWdJQ0FnWTI5c2IzSTZJQ2NqTXpNNE9FWkdKeXhjYmlBZ0lDQWdJRzl3WVdOcGRIazZJREF1TlN4Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1MGVYQmxJRDBnSjNCdmJIbHNhVzVsUW5WbVptVnlKMXh1SUNBZ0lIUm9hWE11YldGd0lEMGdiV0Z3WEc0Z0lDQWdkR2hwY3k1a1lYUmhUR2x6ZENBOUlHUmhkR0ZNYVhOMFhHNGdJQ0FnZEdocGN5NXZjSFJwYjI1eklEMGdiM0IwYVc5dWMxeHVJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1nUFNCamFHRnVibVZzUm5WdVkxeHVYRzRnSUNBZ2RHaHBjeTUyYVhOcFlteGxJRDBnZEhKMVpWeHVJQ0FnSUhSb2FYTXVjRzlzZVd4cGJtVnpJRDBnVzExY2JpQWdJQ0IwYUdsekxuTmxaMjFsYm5SbFpFMXBiaUE5SUVsdVptbHVhWFI1WEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSVGRHVndJRDBnTVZ4dUlDQWdJQzh2SUhSb2FYTXVabTlqZFhObFpGQnZiSGxzYVc1bElEMGdiblZzYkZ4dVhHNGdJQ0FnZEdocGN5NXZjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2daR1ZtWVhWc2RFOXdkR2x2Ym5Nc0lHOXdkR2x2Ym5NcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdSeVlYY29iM0IwYVc5dWN6ODZJRkJ2Ykhsc2FXNWxRblZtWm1WeVRHRjVaWEpQY0hScGIyNXpLU0I3WEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWgwYUdsekxtOXdkR2x2Ym5Nc0lHOXdkR2x2Ym5NcFhHNGdJQ0FnZEdocGN5NXBibWwwVUc5c2VXeHBibVZ6S0NsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eVpXUnlZWGNvS1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ5WldSeVlYY29LU0I3WEc0Z0lDQWdhV1lnS0NGMGFHbHpMblpwYzJsaWJHVXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTVzWVhsbGNpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1c1lYbGxjaTV5WlcxdmRtVW9LVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbXhoZVdWeUlEMGdkR2hwY3k1amIyNW1hV2RRYjJ4NWJHbHVaVUoxWm1abGNreGhlV1Z5S0NsY2JpQWdJQ0IwYUdsekxtMWhjQzVoWkdSTVlYbGxjaWgwYUdsekxteGhlV1Z5S1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6WEc0Z0lIMWNiaUFnY0hWaWJHbGpJR1pwZEVKdmRXNWtjeWdwSUh0Y2JpQWdJQ0IwYUdsekxtMWhjQzVtYVhSQ2IzVnVaSE1vZEdocGN5NW5aWFJDYjNWdVpITW9LU2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMlYwUW05MWJtUnpLQ2s2SUV3dVRHRjBURzVuUW05MWJtUnpSWGh3Y21WemMybHZiaUI3WEc0Z0lDQWdhV1lnS0hSb2FYTXVjRzlzZVd4cGJtVnpMbXhsYm1kMGFDQThQU0F3S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXRZWEF1WjJWMFFtOTFibVJ6S0NsY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y0c5c2VXeHBibVZ6TG5KbFpIVmpaU2hjYmlBZ0lDQWdJQ2h3Y21WMkxDQmpkWEp5S1NBOVBpQndjbVYyTG1WNGRHVnVaQ2hqZFhKeUxtZGxkRUp2ZFc1a2N5Z3BLU3hjYmlBZ0lDQWdJSFJvYVhNdWNHOXNlV3hwYm1Weld6QmRMbWRsZEVKdmRXNWtjeWdwWEc0Z0lDQWdLVnh1SUNCOVhHNGdJSEIxWW14cFl5QmphR0Z1WjJWRGIyeHZjaWhqYjJ4dmNqb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpMbU52Ykc5eUlEMGdZMjlzYjNKY2JpQWdJQ0IwYUdsekxuSmxaSEpoZHlncFhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCamIyNW1hV2RRYjJ4NWJHbHVaVUoxWm1abGNreGhlV1Z5S0NrZ2UxeHVJQ0FnSUhSb2FYTXVjRzlzZVd4cGJtVk1ZWGxsY2lBOUlFd3ViR0Y1WlhKSGNtOTFjQ2dwWEc0Z0lDQWdkR2hwY3k1d2IyeDViR2x1WlhNdVptOXlSV0ZqYUNnb2NHOXNlV3hwYm1VcElEMCtJSHRjYmlBZ0lDQWdJSEJ2Ykhsc2FXNWxMbTl1S0NkamJHbGpheWNzSUNncElEMCtJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiMng1YkdsdVpVTnNhV05yU0dGdVpHeGxjaWh3YjJ4NWJHbHVaU2xjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0JqYjI1emRDQnZjSFJwYjI1ek9pQlFiMng1YkdsdVpVSjFabVpsY2t4aGVXVnlUM0IwYVc5dWN5QTlJRTlpYW1WamRDNWhjM05wWjI0b1hHNGdJQ0FnSUNBZ0lIdDlMRnh1SUNBZ0lDQWdJQ0IwYUdsekxtOXdkR2x2Ym5Nc1hHNGdJQ0FnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdJQ0JqYjJ4dmNqcGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlNBOVBUMGdKM05wYm1kc1pTZGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1B5QjBhR2x6TG05d2RHbHZibk11WTI5c2IzSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ09pQjBhR2x6TG1kbGRGTmxaMjFsYm5SbFpGQnZiSGxzYVc1bFEyOXNiM0lvY0c5c2VXeHBibVV1WjJWMFJHRjBZU2dwS1N4Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0tWeHVYRzRnSUNBZ0lDQmpiMjV6ZENCd2IyeDViR2x1WlVKMVptWmxjaUE5SUV3dVkyOXljbWxrYjNJb1hHNGdJQ0FnSUNBZ0lDaHdiMng1YkdsdVpTNW5aWFJNWVhSTWJtZHpLQ2tnWVhNZ1RDNU1ZWFJNYm1kYlhTa3ViV0Z3S0Noc1lYUk1ibWNwSUQwK1hHNGdJQ0FnSUNBZ0lDQWdUQzVzWVhSTWJtY29XMnhoZEV4dVp5NXNZWFFzSUd4aGRFeHVaeTVzYm1kZEtWeHVJQ0FnSUNBZ0lDQXBMRnh1SUNBZ0lDQWdJQ0J2Y0hScGIyNXpYRzRnSUNBZ0lDQXBYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxuUnZiMngwYVhCQmRIUnlLU0I3WEc0Z0lDQWdJQ0FnSUhCdmJIbHNhVzVsUW5WbVptVnlMbUpwYm1SVWIyOXNkR2x3S0hSb2FYTXVaMlYwVkc5dmJGUnBjRU52Ym5SbGJuUW9jRzlzZVd4cGJtVXVaMlYwUkdGMFlTZ3BLU2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSFJvYVhNdWNHOXNlV3hwYm1WTVlYbGxjaTVoWkdSTVlYbGxjaWh3YjJ4NWJHbHVaVUoxWm1abGNpbGNiaUFnSUNCOUtWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuQnZiSGxzYVc1bFRHRjVaWEpjYmlBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUhzZ1JHRjBZVXhwYzNSSmRHVnRMQ0JEYUdGdWJtVnNSblZ1WXlCOUlHWnliMjBnSnk0dUwyUmxabWx1YVhScGIyNXpKMXh1YVcxd2IzSjBJRkJ2Ykhsc2FXNWxMQ0I3SUZCdmJIbHNhVzVsVEdGMFRHNW5SWGh3Y21WemMybHZiaUI5SUdaeWIyMGdKeTR2VUc5c2VXeHBibVVuWEc1cGJYQnZjblFnZXlCa1lYSnJaVzRzSUd4cFoyaDBaVzRzSUc5d2RHbHZibk5OWlhKblpTQjlJR1p5YjIwZ0p5NHVMM1YwYVd4ekwybHVaR1Y0SjF4dVhHNHZLaW9nNXJpeTVwK1Q2YUtjNklteTVxQzM1YnlQSU9XTmxlaUpzbnpsaUlibXJyVWdLaTljYm5SNWNHVWdVRzlzZVd4cGJtVk1ZWGxsY2xKbGJtUmxja052Ykc5eVZIbHdaU0E5SUNkemFXNW5iR1VuSUh3Z0ozTmxaMjFsYm5SbFpDZGNiblI1Y0dVZ1EyOXNiM0pOYjJSbElEMGdKMlJoY210bGJpY2dmQ0FuYkdsbmFIUmxiaWNnZkNBbmJtOXliV0ZzSjF4dWFXNTBaWEptWVdObElGQnZiSGxzYVc1bFRHRjVaWEpQY0hScGIyNXpJR1Y0ZEdWdVpITWdUQzVRYjJ4NWJHbHVaVTl3ZEdsdmJuTWdlMXh1SUNCeVpXNWtaWEpRYjJ4NWJHbHVaVU52Ykc5eVZIbHdaVG9nVUc5c2VXeHBibVZNWVhsbGNsSmxibVJsY2tOdmJHOXlWSGx3WlZ4dVhHNGdJQzhxS2lCd2IzQjFjQ0Rsc1pYbnBMcmxyWmZtcnJVZ0tpOWNiaUFnY0c5d2RYQkJkSFJ5UHpvZ2MzUnlhVzVuSUh3Z2V5QnNZV0psYkRvZ2MzUnlhVzVuT3lCMllXeDFaVG9nWVc1NUlIMWNiaUFnTHlvcUlIUnZiMngwYVhBZzViR1Y1NlM2NWEyWDVxNjFJQ292WEc0Z0lIUnZiMngwYVhCQmRIUnlQem9nYzNSeWFXNW5YRzVjYmlBZ2IzQmhZMmwwZVQ4NklHNTFiV0psY2x4dVhHNGdJQzhxS2lEbGlJYm1yclhtdUxMbW41UG51NS9vcnFIbHJaZm1yclVnS2k5Y2JpQWdjMlZuYldWdWRHVmtRWFIwY2o4NklITjBjbWx1WjF4dUlDQnpaV2R0Wlc1MFpXUkRiMnh2Y25NL09pQnpkSEpwYm1kYlhWeHVmVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHOXNlV3hwYm1WelRHRjVaWElnZTF4dUlDQndkV0pzYVdNZ2RIbHdaVG9nYzNSeWFXNW5YRzVjYmlBZ2NISnZkR1ZqZEdWa0lIWnBjMmxpYkdVNklHSnZiMnhsWVc1Y2JpQWdjSEp2ZEdWamRHVmtJR3hoZVdWeU9pQk1Ma3hoZVdWeVIzSnZkWEJjYmx4dUlDQndjbTkwWldOMFpXUWdiV0Z3T2lCTUxrMWhjRnh1SUNCd2NtOTBaV04wWldRZ1pHRjBZVXhwYzNRNklFUmhkR0ZNYVhOMFNYUmxiVnRkWEc0Z0lIQnliM1JsWTNSbFpDQnZjSFJwYjI1ek9pQlFiMng1YkdsdVpVeGhlV1Z5VDNCMGFXOXVjMXh1SUNCd2NtOTBaV04wWldRZ1kyaGhibTVsYkVaMWJtTTZJRU5vWVc1dVpXeEdkVzVqWEc0Z0lIQnliM1JsWTNSbFpDQndiMng1YkdsdVpYTTZJRkJ2Ykhsc2FXNWxXMTFjYmlBZ2NISnZkR1ZqZEdWa0lITmxaMjFsYm5SbFpFMXBiam9nYm5WdFltVnlYRzRnSUhCeWIzUmxZM1JsWkNCelpXZHRaVzUwWldSVGRHVndPaUJ1ZFcxaVpYSmNiaUFnY0hKdmRHVmpkR1ZrSUdadlkzVnpaV1JRYjJ4NWJHbHVaVG9nVUc5c2VXeHBibVZjYmlBZ2NISnZkR1ZqZEdWa0lHWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXeHBibVU2SUZCdmJIbHNhVzVsWEc0Z0lIQnliM1JsWTNSbFpDQndiMng1YkdsdVpVeGhlV1Z5T2lCTUxreGhlV1Z5UjNKdmRYQmNiaUFnY0hKcGRtRjBaU0JrWldaaGRXeDBUM0IwYVc5dWN6b2dVRzlzZVd4cGJtVk1ZWGxsY2s5d2RHbHZibk5jYmlBZ1kyOXVjM1J5ZFdOMGIzSW9YRzRnSUNBZ2JXRndPaUJNTGsxaGNDeGNiaUFnSUNCa1lYUmhUR2x6ZERvZ1JHRjBZVXhwYzNSSmRHVnRXMTBzWEc0Z0lDQWdiM0IwYVc5dWN6b2dVRzlzZVd4cGJtVk1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJR2xtSUNnaFFYSnlZWGt1YVhOQmNuSmhlU2hrWVhSaFRHbHpkQ2tnZkh3Z1pHRjBZVXhwYzNRdWJHVnVaM1JvSUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9ZR1JoZEdGTWFYTjBJT1cvaGVtaHUrYVlyK21kbnVlcHV1YVZzT2U3aEdBcFhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdVpHVm1ZWFZzZEU5d2RHbHZibk1nUFNCN1hHNGdJQ0FnSUNCamIyeHZjam9nSnlNek16ZzRSa1luTEZ4dUlDQWdJQ0FnY21WdVpHVnlVRzlzZVd4cGJtVkRiMnh2Y2xSNWNHVTZJQ2R6YVc1bmJHVW5MRnh1SUNBZ0lDQWdjMlZuYldWdWRHVmtRMjlzYjNKek9pQmJKeU16TXpnNFJrWW5YU3hjYmlBZ0lDQWdJSEJ2Y0hWd1FYUjBjam9nZXlCc1lXSmxiRG9nSitXUWplZW5zQ2NzSUhaaGJIVmxPaUFuYm1GdFpTY2dmU3hjYmlBZ0lDQWdJSFJ2YjJ4MGFYQkJkSFJ5T2lBbmJtRnRaU2NzWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11ZEhsd1pTQTlJQ2R3YjJ4NWJHbHVaU2RjYmlBZ0lDQjBhR2x6TG0xaGNDQTlJRzFoY0Z4dUlDQWdJSFJvYVhNdVpHRjBZVXhwYzNRZ1BTQmtZWFJoVEdsemRGeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTk5aWEpuWlNoY2JpQWdJQ0FnSUhSb2FYTXVaR1ZtWVhWc2RFOXdkR2x2Ym5Nc1hHNGdJQ0FnSUNCdmNIUnBiMjV6WEc0Z0lDQWdLU0JoY3lCUWIyeDViR2x1WlV4aGVXVnlUM0IwYVc5dWMxeHVJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1nUFNCamFHRnVibVZzUm5WdVkxeHVYRzRnSUNBZ2RHaHBjeTUyYVhOcFlteGxJRDBnZEhKMVpWeHVJQ0FnSUhSb2FYTXVjRzlzZVd4cGJtVnpJRDBnVzExY2JpQWdJQ0IwYUdsekxuTmxaMjFsYm5SbFpFMXBiaUE5SUVsdVptbHVhWFI1WEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSVGRHVndJRDBnTVZ4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkZCdmJIbHNhVzVsSUQwZ2JuVnNiRnh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1YkdsdVpTQTlJRzUxYkd4Y2JpQWdmVnh1SUNCd2RXSnNhV01nWkhKaGR5aHZjSFJwYjI1elB6b2dVRzlzZVd4cGJtVk1ZWGxsY2s5d2RHbHZibk1wSUh0Y2JpQWdJQ0IwYUdsekxtbHVhWFJQY0hScGIyNXpLRzl3ZEdsdmJuTXBYRzRnSUNBZ2RHaHBjeTVwYm1sMFVHOXNlV3hwYm1WektDbGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXlaV1J5WVhjb0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCeVpXUnlZWGNvS1NCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6TG5acGMybGliR1VwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kR2hwY3k1c1lYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXNZWGxsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG14aGVXVnlJRDBnZEdocGN5NWpiMjVtYVdkUWIyeDViR2x1WlV4aGVXVnlLQ2xjYmlBZ0lDQjBhR2x6TG0xaGNDNWhaR1JNWVhsbGNpaDBhR2x6TG14aGVXVnlLVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpYRzRnSUgxY2JpQWdjSFZpYkdsaklHWnBkRUp2ZFc1a2N5Z3BJSHRjYmlBZ0lDQjBhR2x6TG0xaGNDNW1hWFJDYjNWdVpITW9kR2hwY3k1blpYUkNiM1Z1WkhNb0tTd2dleUJ3WVdSa2FXNW5PaUJiTWpBc0lESXdYU0I5S1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJuWlhSQ2IzVnVaSE1vS1RvZ1RDNU1ZWFJNYm1kQ2IzVnVaSE5GZUhCeVpYTnphVzl1SUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTV3YjJ4NWJHbHVaWE11YkdWdVozUm9JRHc5SURBcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTFoY0M1blpYUkNiM1Z1WkhNb0tWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1d2IyeDViR2x1WlhNdWNtVmtkV05sS0Z4dUlDQWdJQ0FnS0hCeVpYWXNJR04xY25JcElEMCtJSEJ5WlhZdVpYaDBaVzVrS0dOMWNuSXVaMlYwUW05MWJtUnpLQ2twTEZ4dUlDQWdJQ0FnVEM1c1lYUk1ibWRDYjNWdVpITW9YRzRnSUNBZ0lDQWdJSFJvYVhNdWNHOXNlV3hwYm1Weld6QmRMbWRsZEVKdmRXNWtjeWdwTG1kbGRFNXZjblJvUldGemRDZ3BMRnh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZiSGxzYVc1bGMxc3dYUzVuWlhSQ2IzVnVaSE1vS1M1blpYUlRiM1YwYUZkbGMzUW9LVnh1SUNBZ0lDQWdLVnh1SUNBZ0lDbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1pHVnpkSEp2ZVNncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1c1lYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1Y21WdGIzWmxUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NIVmliR2xqSUhSdloyZHNaVlpwYzJsaWJHVW9kbWx6YVdKc1pUb2dZbTl2YkdWaGJpa2dlMXh1SUNBZ0lIUm9hWE11ZG1semFXSnNaU0E5SUhacGMybGliR1ZjYmlBZ0lDQnBaaUFvSVhSb2FYTXViR0Y1WlhJcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1WVdSa1RHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsUWIyeDViR2x1WlNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVVRzlzZVd4cGJtVXVjbVZ0YjNabEtDbGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEIxWW14cFl5QmphR0Z1WjJWRGIyeHZjaWhqYjJ4dmNqb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpMbVpwYkd4RGIyeHZjaUE5SUdOdmJHOXlYRzRnSUNBZ2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNGdJSEIxWW14cFl5QndhWFJqYUNocFpEb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaWE11Wm05eVJXRmphQ2dvY0c5c2VXeHBibVVwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2h3YjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2t1YVdRZ1BUMDlJR2xrS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZEYkdsamEwaGhibVJzWlhJb2NHOXNlV3hwYm1Vc0lIUnlkV1VwWEc0Z0lDQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBYRzRnSUgxY2JpQWdjSEp2ZEdWamRHVmtJR2x1YVhSUGNIUnBiMjV6S0c5d2RHbHZibk02SUZCdmJIbHNhVzVsVEdGNVpYSlBjSFJwYjI1ektTQjdYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpJRDBnYjNCMGFXOXVjMDFsY21kbEtGeHVJQ0FnSUNBZ2RHaHBjeTVrWldaaGRXeDBUM0IwYVc5dWN5eGNiaUFnSUNBZ0lIUm9hWE11YjNCMGFXOXVjeXhjYmlBZ0lDQWdJRzl3ZEdsdmJuTmNiaUFnSUNBcElHRnpJRkJ2Ykhsc2FXNWxUR0Y1WlhKUGNIUnBiMjV6WEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdsdWFYUlFiMng1YkdsdVpYTW9LU0I3WEc0Z0lDQWdMeThnNTd5VDVhMllJSE5sWjIxbGJuUWc1NXU0NVlXejVwV3c1bzJ1WEc0Z0lDQWdkR2hwY3k1allXTm9aVk5sWjIxbGJuUlFZWEpoYlhNb0tWeHVYRzRnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaWE1nUFNCMGFHbHpMbVJoZEdGTWFYTjBMbTFoY0Nnb1pHRjBZU2tnUFQ0Z2UxeHVJQ0FnSUNBZ1kyOXVjM1FnYkdGNVpYSWdQU0JNTG1kbGIwcFRUMDRvWkdGMFlTNW5aVzl0WlhSeWVTa3VaMlYwVEdGNVpYSnpLQ2xiTUYxY2JpQWdJQ0FnSUM4dklHeGxkQ0JqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1amIyeHZjbHh1SUNBZ0lDQWdMeThnYVdZZ0tIUm9hWE11YjNCMGFXOXVjeTV5Wlc1a1pYSlFiMng1YkdsdVpVTnZiRzl5Vkhsd1pTQTlQVDBnSjNObFoyMWxiblJsWkNjcElIdGNiaUFnSUNBZ0lDOHZJQ0FnWTI5c2IzSWdQU0IwYUdsekxtZGxkRk5sWjIxbGJuUmxaRkJ2Ykhsc2FXNWxRMjlzYjNJb1pHRjBZU2xjYmlBZ0lDQWdJQzh2SUgxY2JpQWdJQ0FnSUdOdmJuTjBJSEJ2Ykhsc2FXNWxJRDBnYm1WM0lGQnZiSGxzYVc1bEtGeHVJQ0FnSUNBZ0lDQW9iR0Y1WlhJZ1lYTWdUQzVRYjJ4NWJHbHVaU2t1WjJWMFRHRjBURzVuY3lncElHRnpJRkJ2Ykhsc2FXNWxUR0YwVEc1blJYaHdjbVZ6YzJsdmJseHVJQ0FnSUNBZ0tWeHVYRzRnSUNBZ0lDQXZMeURsc0libm03amxoYlBsZ0x6bnU1SGxycHJsaUxBZ2JXRnlhMlZ5NUxpS1hHNGdJQ0FnSUNCd2IyeDViR2x1WlM1elpYUkVZWFJoS0dSaGRHRXBYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQndiMng1YkdsdVpWeHVJQ0FnSUgwcFhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lHZGxkRk5sWjIxbGJuUmxaRkJ2Ykhsc2FXNWxRMjlzYjNJb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtUb2djM1J5YVc1bklIdGNiaUFnSUNCamIyNXpkQ0IyWVd3Z1BTQmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkJkSFJ5WFZ4dUlDQWdJR052Ym5OMElHTnZiRzl5SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbk5sWjIxbGJuUmxaRU52Ykc5eWMxdGNiaUFnSUNBZ0lIQmhjbk5sU1c1MEtDY25JQ3NnS0haaGJDQXRJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVLU0F2SUhSb2FYTXVjMlZuYldWdWRHVmtVM1JsY0N3Z01UQXBYRzRnSUNBZ1hWeHVJQ0FnSUhKbGRIVnliaUJqYjJ4dmNseHVJQ0I5WEc0Z0lIQnliM1JsWTNSbFpDQndiMng1YkdsdVpVTnNhV05yU0dGdVpHeGxjaWh3YjJ4NWJHbHVaVG9nVUc5c2VXeHBibVVzSUdacGRFSnZkVzVrY3o4NklHSnZiMnhsWVc0cElIdGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUlFiMng1YkdsdVpTQTlJSEJ2Ykhsc2FXNWxYRzRnSUNBZ0x5OGc1WWlnNlptazVZbU41TGlBNUxpcUlHWnZZM1Z6WEc0Z0lDQWdhV1lnS0hSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsUWIyeDViR2x1WlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxzYVc1bExuSmxiVzkyWlNncFhHNGdJQ0FnZlZ4dUlDQWdJQzh2SU9lVW4rYUlrT1c5aytXSmpTQm1iMk4xYzF4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NWJHbHVaU0E5SUc1bGR5QlFiMng1YkdsdVpTaGNiaUFnSUNBZ0lIQnZiSGxzYVc1bExtZGxkRXhoZEV4dVozTW9LU0JoY3lCUWIyeDViR2x1WlV4aGRFeHVaMFY0Y0hKbGMzTnBiMjRzWEc0Z0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUdOdmJHOXlPaUIwYUdsekxtZGxkRU52Ykc5eUtIQnZiSGxzYVc1bExtZGxkRVJoZEdFb0tTa3NYRzRnSUNBZ0lDQWdJR1pwYkd4RGIyeHZjam9nZEdocGN5NW5aWFJEYjJ4dmNpaHdiMng1YkdsdVpTNW5aWFJFWVhSaEtDa3NJQ2R1YjNKdFlXd25LU3hjYmlBZ0lDQWdJSDFjYmlBZ0lDQXBYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxzYVc1bExtRmtaRlJ2S0hSb2FYTXViV0Z3S1Z4dVhHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsWEc0Z0lDQWdJQ0F1WW1sdVpGQnZjSFZ3S0hSb2FYTXVaMlYwVUc5d2RYQkRiMjUwWlc1MEtIQnZiSGxzYVc1bExtZGxkRVJoZEdFb0tTa3BYRzRnSUNBZ0lDQXViM0JsYmxCdmNIVndLQ2xjYmx4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NWJHbHVaUzV2YmlnbmNHOXdkWEJqYkc5elpTY3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1YkdsdVpTNXlaVzF2ZG1Vb0tWeHVJQ0FnSUgwcFhHNWNiaUFnSUNCd2IyeDViR2x1WlM1amJHOXpaVlJ2YjJ4MGFYQW9LVnh1WEc0Z0lDQWdkR2hwY3k1dFlYQXVjR0Z1Vkc4b2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxzYVc1bExtZGxkRU5sYm5SbGNpZ3BLVnh1SUNBZ0lHbG1JQ2htYVhSQ2IzVnVaSE1wSUh0Y2JpQWdJQ0FnSUhSb2FYTXViV0Z3TG1acGRFSnZkVzVrY3lod2IyeDViR2x1WlM1blpYUkNiM1Z1WkhNb0tTbGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NWphR0Z1Ym1Wc1JuVnVZeWduYjI0dFkyeHBZMnN0Y0c5c2VXeHBibVVuTENCd2IyeDViR2x1WlNsY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1oyVjBWRzl2YkZScGNFTnZiblJsYm5Rb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUNjbklDc2daR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVkRzl2YkhScGNFRjBkSEpkWEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdkbGRGQnZjSFZ3UTI5dWRHVnVkQ2hrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUFuSjF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSFJvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJZ1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZQ1I3ZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNuMDZJQ1I3WkdGMFlWdDBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5WFgxZ1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGVYQmxiMllnZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpQTlQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJnSkh0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlMbXhoWW1Wc2ZUb2dKSHRjYmlBZ0lDQWdJQ0FnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5TG5aaGJIVmxYVnh1SUNBZ0lDQWdmV0JjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQmpiMjVtYVdkUWIyeDViR2x1WlV4aGVXVnlLQ2tnZTF4dUlDQWdJSFJvYVhNdWNHOXNlV3hwYm1WTVlYbGxjaUE5SUV3dWJHRjVaWEpIY205MWNDZ3BYRzRnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaWE11Wm05eVJXRmphQ2dvY0c5c2VXeHBibVVwSUQwK0lIdGNiaUFnSUNBZ0lHeGxkQ0JqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1amIyeHZjbHh1SUNBZ0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlNBOVBUMGdKM05sWjIxbGJuUmxaQ2NwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0lnUFNCMGFHbHpMbWRsZEZObFoyMWxiblJsWkZCdmJIbHNhVzVsUTI5c2IzSW9jRzlzZVd4cGJtVXVaMlYwUkdGMFlTZ3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdZMjl1YzNRZ2IzQjBhVzl1Y3pvZ1RDNVFiMng1YkdsdVpVOXdkR2x2Ym5NZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQjBhR2x6TG05d2RHbHZibk1zSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0lzWEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnWTI5dWMzUWdibVYzVUc5c2VXeHBibVVnUFNCdVpYY2dVRzlzZVd4cGJtVW9YRzRnSUNBZ0lDQWdJSEJ2Ykhsc2FXNWxMbWRsZEV4aGRFeHVaM01vS1NCaGN5QlFiMng1YkdsdVpVeGhkRXh1WjBWNGNISmxjM05wYjI0c1hHNGdJQ0FnSUNBZ0lHOXdkR2x2Ym5OY2JpQWdJQ0FnSUNsY2JpQWdJQ0FnSUc1bGQxQnZiSGxzYVc1bExtOXVLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlVOc2FXTnJTR0Z1Wkd4bGNpaHdiMng1YkdsdVpTbGNiaUFnSUNBZ0lIMHBYRzRnSUNBZ0lDQnVaWGRRYjJ4NWJHbHVaUzV6WlhSRVlYUmhLSEJ2Ykhsc2FXNWxMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVkRzl2YkhScGNFRjBkSElwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNVRzlzZVd4cGJtVXVZbWx1WkZSdmIyeDBhWEFvZEdocGN5NW5aWFJVYjI5c1ZHbHdRMjl1ZEdWdWRDaHVaWGRRYjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnZEdocGN5NXdiMng1YkdsdVpVeGhlV1Z5TG1Ga1pFeGhlV1Z5S0c1bGQxQnZiSGxzYVc1bEtWeHVJQ0FnSUgwcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNHOXNlV3hwYm1WTVlYbGxjbHh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdZMkZqYUdWVFpXZHRaVzUwVUdGeVlXMXpLQ2tnZTF4dUlDQWdJR052Ym5OMElITmxaMjFsYm5SbFpFeGxibWQwYUNBOUlIUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JEYjJ4dmNuTXViR1Z1WjNSb1hHNGdJQ0FnYkdWMElHMWhlRlpoYkNBOUlDMUpibVpwYm1sMGVWeHVJQ0FnSUd4bGRDQnRhVzVXWVd3Z1BTQkpibVpwYm1sMGVWeHVJQ0FnSUdadmNpQW9ZMjl1YzNRZ1pHRjBZU0J2WmlCMGFHbHpMbVJoZEdGTWFYTjBLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQjJZV3dnUFNCa1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSQmRIUnlYVnh1SUNBZ0lDQWdiV0Y0Vm1Gc0lEMGdUV0YwYUM1dFlYZ29iV0Y0Vm1Gc0xDQjJZV3dwWEc0Z0lDQWdJQ0J0YVc1V1lXd2dQU0JOWVhSb0xtMXBiaWh0YVc1V1lXd3NJSFpoYkNsY2JpQWdJQ0I5WEc0Z0lDQWdZMjl1YzNRZ2MzUmxjQ0E5SUNodFlYaFdZV3dnTFNCdGFXNVdZV3dnS3lBeEtTQXZJSE5sWjIxbGJuUmxaRXhsYm1kMGFGeHVJQ0FnSUhSb2FYTXVjMlZuYldWdWRHVmtUV2x1SUQwZ2JXbHVWbUZzWEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSVGRHVndJRDBnYzNSbGNGeHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1oyVjBRMjlzYjNJb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdExDQnRiMlJsUHpvZ1EyOXNiM0pOYjJSbEtTQjdYRzRnSUNBZ2JHVjBJR052Ykc5eUlEMGdkR2hwY3k1dmNIUnBiMjV6TG1OdmJHOXlYRzRnSUNBZ2FXWWdLSFJvYVhNdWIzQjBhVzl1Y3k1eVpXNWtaWEpRYjJ4NWJHbHVaVU52Ykc5eVZIbHdaU0E5UFQwZ0ozTmxaMjFsYm5SbFpDY3BJSHRjYmlBZ0lDQWdJR052Ykc5eUlEMGdkR2hwY3k1blpYUlRaV2R0Wlc1MFpXUlFiMng1YkdsdVpVTnZiRzl5S0dSaGRHRXBYRzRnSUNBZ2ZWeHVJQ0FnSUhOM2FYUmphQ0FvYlc5a1pTa2dlMXh1SUNBZ0lDQWdZMkZ6WlNBblpHRnlhMlZ1SnpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSaGNtdGxiaWhqYjJ4dmNpbGNiaUFnSUNBZ0lHTmhjMlVnSjJ4cFoyaDBaVzRuT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYkdsbmFIUmxiaWhqYjJ4dmNpbGNiaUFnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyeHZjbHh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJQ29nWVhNZ1EyOXNiM0lnWm5KdmJTQW5ZMjlzYjNJblhHNWNibVoxYm1OMGFXOXVJR3hwWjJoMFpXNG9hR1Y0UTI5c2IzSTZJSE4wY21sdVp5a2dlMXh1SUNCeVpYUjFjbTRnUTI5c2IzSW9hR1Y0UTI5c2IzSXBYRzRnSUNBZ0xteHBaMmgwWlc0b01DNDFLVnh1SUNBZ0lDNW9aWGdvS1Z4dWZWeHVablZ1WTNScGIyNGdaR0Z5YTJWdUtHaGxlRU52Ykc5eU9pQnpkSEpwYm1jcElIdGNiaUFnY21WMGRYSnVJRU52Ykc5eUtHaGxlRU52Ykc5eUtWeHVJQ0FnSUM1a1lYSnJaVzRvTUM0MUtWeHVJQ0FnSUM1b1pYZ29LVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnZjSFJwYjI1elRXVnlaMlVvTGk0dWRHRnlaMlYwY3pvZ1lXNTVXMTBwT2lCdlltcGxZM1FnZTF4dUlDQnBaaUFvZEdGeVoyVjBjeTVzWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNCeVpYUjFjbTRnZTMxY2JpQWdmVnh1SUNCcFppQW9kR0Z5WjJWMGN5NXNaVzVuZEdnZ1BUMDlJREVwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR0Z5WjJWMGMxc3dYVnh1SUNCOVhHNGdJR052Ym5OMElHMWxjbWRsWkNBOUlIUmhjbWRsZEhOYk1GMWNiaUFnWm05eUlDaGpiMjV6ZENCclpYa2dhVzRnZEdGeVoyVjBjMXN4WFNrZ2UxeHVJQ0FnSUdsbUlDaHJaWGtnYVc0Z2JXVnlaMlZrS1NCN1hHNGdJQ0FnSUNCcFppQW9UMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5NWpZV3hzS0cxbGNtZGxaRnRyWlhsZEtTQTlQVDBnSjF0dlltcGxZM1FnVDJKcVpXTjBYU2NwSUh0Y2JpQWdJQ0FnSUNBZ2JXVnlaMlZrVzJ0bGVWMGdQU0J2Y0hScGIyNXpUV1Z5WjJVb2JXVnlaMlZrVzJ0bGVWMHNJSFJoY21kbGRITmJNVjFiYTJWNVhTbGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHMWxjbWRsWkZ0clpYbGRJRDBnZEdGeVoyVjBjMXN4WFZ0clpYbGRYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUcxbGNtZGxaRnRyWlhsZElEMGdkR0Z5WjJWMGMxc3hYVnRyWlhsZFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhKbGRIVnliaUJ2Y0hScGIyNXpUV1Z5WjJVb2JXVnlaMlZrTENBdUxpNTBZWEpuWlhSekxuTnNhV05sS0RJcEtWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lHeHBaMmgwWlc0c1hHNGdJR1JoY210bGJpeGNiaUFnYjNCMGFXOXVjMDFsY21kbExGeHVmVnh1Wlhod2IzSjBJSHNnYkdsbmFIUmxiaXdnWkdGeWEyVnVMQ0J2Y0hScGIyNXpUV1Z5WjJVZ2ZWeHVJbDBzSW5OdmRYSmpaVkp2YjNRaU9pSWlmUT09IiwiLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGxlYWZsZXRNYXAgZnJvbSAnLi4vLi4vLi4vbGVhZmxldC1sYXllcidcblxuLy8gQHRzLWlnbm9yZVxuY29uc3QgTCA9IHdpbmRvdy5MXG5cbmZ1bmN0aW9uIGlzUG9pbnRJblZpZXdwb3J0KHgsIHkpIHtcbiAgcmV0dXJuIChcbiAgICB4ID49IDAgJiZcbiAgICB5ID49IDAgJiZcbiAgICB4IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICYmXG4gICAgeSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gIClcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50SW5WaWV3cG9ydChlbCkge1xuICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHJldHVybiAoXG4gICAgcmVjdC50b3AgPj0gMCAmJlxuICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgcmVjdC5ib3R0b20gPD1cbiAgICAgICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gIClcbn1cblxuZnVuY3Rpb24gY2FsY09mZnNldCh4LCB5LCB3LCBoKSB7XG4gIGNvbnN0IEJPVFRPTV9SSUdIVCA9IDBcbiAgY29uc3QgQk9UVE9NX0xFRlQgPSAxXG4gIGNvbnN0IFRPUF9SSUdIVCA9IDJcbiAgY29uc3QgVE9QX0xFRlQgPSAzXG4gIGNvbnN0IGJvdW5kcyA9IFtcbiAgICBbeCArIHcsIHkgKyBoXSxcbiAgICBbeCAtIHcsIHkgKyBoXSxcbiAgICBbeCArIHcsIHkgLSBoXSxcbiAgICBbeCAtIHcsIHkgLSBoXSxcbiAgXVxuXG4gIGxldCBpID0gMFxuICBmb3IgKDsgaSA8IGJvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpc1BvaW50SW5WaWV3cG9ydCguLi5ib3VuZHNbaV0pKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICBzd2l0Y2ggKGkpIHtcbiAgICBjYXNlIEJPVFRPTV9SSUdIVDpcbiAgICAgIHJldHVybiBbeCwgeV1cbiAgICBjYXNlIEJPVFRPTV9MRUZUOlxuICAgICAgcmV0dXJuIFt4IC0gdywgeV1cbiAgICBjYXNlIFRPUF9SSUdIVDpcbiAgICAgIHJldHVybiBbeCwgeSAtIGhdXG4gICAgY2FzZSBUT1BfTEVGVDpcbiAgICAgIHJldHVybiBbeCAtIHcsIHkgLSBoXVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW3gsIHldXG4gIH1cbn1cblxudmFyIHBvc2l0aW9uID0gbmV3IEwuTGF0TG5nKDM5LjkwNzc4LCAxMTYuNDAxMjE2KVxudmFyIG1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KHBvc2l0aW9uLCAxMylcblxuTC50aWxlTGF5ZXJcbiAgLmNoaW5hUHJvdmlkZXIoJ0dhb0RlLk5vcm1hbC5NYXAnLCB7IG1heFpvb206IDE4LCBtaW5ab29tOiAzIH0pXG4gIC5hZGRUbyhtYXApXG5cbi8vIHZhciBkYXRhTGlzdCA9IFtcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9seWdvbicsXG4vLyAgICAgICBjb29yZGluYXRlczogW1xuLy8gICAgICAgICBbXG4vLyAgICAgICAgICAgWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICAgICAgICBbMTE2LjM5MTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgICAgICAgIFsxMTYuMzkxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgICAgICAgWzExNi40MDEyMTYsIDM5LjkxNzc4XSxcbi8vICAgICAgICAgXSxcbi8vICAgICAgIF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMTA5MDkwOTA5MDkwLFxuLy8gICB9LFxuLy8gXVxuXG4vLyB2YXIgbGF5ZXIgPSBuZXcgbGVhZmxldE1hcC5Hcmlkc0xheWVyKFxuLy8gICBtYXAsXG4vLyAgIGRhdGFMaXN0LFxuLy8gICB7IHRvb2x0aXBBdHRyOiAncHJpY2UnLCBwb3B1cEF0dHI6IHsgbGFiZWw6ICdwJywgdmFsdWU6ICdwcmljZScgfSB9LFxuLy8gICBjb25zb2xlLmxvZ1xuLy8gKVxuLy8gbGF5ZXIudG9nZ2xlVG9vbHRpcCh0cnVlKVxuLy8gbGF5ZXIuZHJhdygpXG5cbi8vIHZhciBkYXRhTGlzdCA9IFtcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMC4xLFxuLy8gICAgIG5hbWU6ICc1Jyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMC4xLFxuLy8gICAgIG5hbWU6ICcyJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMC4xLFxuLy8gICAgIG5hbWU6ICcxJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMTAwLFxuLy8gICAgIG5hbWU6ICcyJyxcbi8vICAgfSxcbi8vIF1cblxuLy8gdmFyIGxheWVyID0gbmV3IGxlYWZsZXRNYXAuTWFya2Vyc0xheWVyKFxuLy8gICBtYXAsXG4vLyAgIGRhdGFMaXN0LFxuLy8gICB7XG4vLyAgICAgcmVuZGVyVHlwZTogJ2hlYXQnLFxuLy8gICAgIGhlYXRPcHRpb25zOiB7XG4vLyAgICAgICBkaW1lbnNpb25BdHRyOiAncHJpY2UnLFxuLy8gICAgICAgcmFkaXVzOiAzMCxcbi8vICAgICAgIG1pbk9wYWNpdHk6IDAuNyxcbi8vICAgICAgIGJsdXI6IDYwLFxuLy8gICAgICAgLy8gbWF4OiAxLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyAgIGNvbnNvbGUubG9nXG4vLyApXG4vLyBsYXllci5kcmF3KClcblxudmFyIGRhdGFMaXN0ID0gW1xuICB7XG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbiAgICB9LFxuICAgIHByaWNlOiAxLFxuICAgIGNsYXNzOiAnYSdcbiAgfSxcbiAge1xuICAgIGdlb21ldHJ5OiB7XG4gICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MDc3OF0sXG4gICAgfSxcbiAgICBwcmljZTogMSxcbiAgICBjbGFzczogJ2InXG4gIH0sXG4gIHtcbiAgICBnZW9tZXRyeToge1xuICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM4MTIxNiwgMzkuOTA3NzhdLFxuICAgIH0sXG4gICAgcHJpY2U6IDEsXG4gICAgY2xhc3M6ICdiJ1xuICB9LFxuXVxuXG52YXIgbGF5ZXIgPSBuZXcgbGVhZmxldE1hcC5NYXJrZXJzTGF5ZXIoXG4gIG1hcCxcbiAgZGF0YUxpc3QsXG4gIHtcbiAgICBpY29uVW5pY29kZTogJyYjeGU2NTU7JyxcbiAgICB0b29sdGlwOiBmYWxzZSxcbiAgICBwb3B1cDogZmFsc2UsXG4gICAgcmVuZGVyUG9pbnRDb2xvclR5cGU6ICdjbGFzc2lmaWVkJyxcbiAgICBjbGFzc2lmaWVkQXR0cjogJ2NsYXNzJyxcbiAgICBjbGFzc2lmaWVkQ29sb3JzOiBbJ3JlZCddLFxuICB9LFxuICBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAvLyBjb25zdCB3ID0gMTAwXG4gICAgLy8gY29uc3QgaCA9IDIwMFxuICAgIC8vIGNvbnN0IHsgeCwgeSB9ID0gZXZlbnQuY29udGFpbmVyUG9pbnRcbiAgICAvLyBjYWxjT2Zmc2V0KHgsIHksIHcsIGgpXG4gIH1cbilcbmxheWVyLmRyYXcoKVxuY29uc29sZS5sb2cobGF5ZXIuZ2V0Q2xhc3NpZnlDb2xvclJlZnMoKSlcblxuLy8gdmFyIGRhdGFMaXN0ID0gW1xuLy8gICBbXG4vLyAgICAge1xuLy8gICAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgcHJpY2U6IDEsXG4vLyAgICAgfSxcbi8vICAgXSxcbi8vICAgW1xuLy8gICAgIHtcbi8vICAgICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM5MTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgICAgfSxcbi8vICAgICAgIHByaWNlOiAxLFxuLy8gICAgIH0sXG4vLyAgIF0sXG4vLyAgIFtcbi8vICAgICB7XG4vLyAgICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgICBjb29yZGluYXRlczogWzExNi4zOTEyMTYsIDM5LjkxNzc4XSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBwcmljZTogMSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gICBbXG4vLyAgICAge1xuLy8gICAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgcHJpY2U6IDEsXG4vLyAgICAgfSxcbi8vICAgXSxcbi8vIF1cbi8vIGNvbnN0IGxheWVyID0gbmV3IGxlYWZsZXRNYXAuRHluYW1pY0hlYXRMYXllcihcbi8vICAgbWFwLFxuLy8gICBkYXRhTGlzdCxcbi8vICAgeyBsb29wOiB0cnVlLCBhdXRvOiB0cnVlIH0sXG4vLyAgIGNvbnNvbGUubG9nXG4vLyApXG4vLyAgIC5kcmF3KClcbi8vICAgLnN0YXJ0KClcblxuLy8gTC5tYXJrZXIoWzMyLjAzMDQsIDExOC43OTY4XSwge1xuLy8gICBpY29uOiBMLmRpdkljb24oe1xuLy8gICAgIGh0bWw6ICc8aSBjbGFzcz1cImljb25mb250XCIgc3R5bGU9XCJmb250LXNpemU6IDQwcHg7XCI+JiN4ZTY1NTs8L2k+Jyxcbi8vICAgICBpY29uU2l6ZTogWzQwLCA0MF0sXG4vLyAgICAgY2xhc3NOYW1lOiAndGVzdCcsXG4vLyAgIH0pLFxuLy8gfSkuYWRkVG8obWFwKVxuLy8gTC5tYXJrZXIoWzMyLjAzMDQsIDExOC43OTY4XSkuYWRkVG8obWFwKVxuLy8gdmFyIGRhdGFMaXN0ID0gW1xuLy8gICB7XG4vLyAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICB9LFxuLy8gICAgIHByaWNlOiAyLFxuLy8gICB9LFxuLy8gXVxuXG4vLyBjb25zdCBsYXllciA9IG5ldyBsZWFmbGV0TWFwLk1hcmtlcnNMYXllcihcbi8vICAgbWFwLFxuLy8gICBkYXRhTGlzdCxcbi8vICAge1xuLy8gICAgIGljb25Vbmljb2RlOiAnJiN4ZTY1NTsnLFxuLy8gICAgIGljb25TaXplOiBbMjAsIDIwXSxcbi8vICAgICBpY29uQW5jaG9yOiBbMTAsIDIwXSxcbi8vICAgICBwb3B1cEF0dHI6ICdwcmljZScsXG4vLyAgICAgdG9vbHRpcEF0dHI6ICdwcmljZScsXG4vLyAgIH0sXG4vLyAgIGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSlcbi8vICAgfVxuLy8gKVxuXG4vLyBsYXllci5kcmF3KClcblxuLy8gLy8gTC5tYXJrZXIoTC5sYXRMbmcoMzkuOTA3NzgsIDExNi40MDEyMTYpKVxuLy8gLy8gICAuYWRkVG8obWFwKVxuLy8gLy8gICAuYmluZFRvb2x0aXAoJ2FkZicpXG5cbi8vIEwubWFya2VyKEwubGF0TG5nKDM5LjkwNzc4LCAxMTYuNDAxMjE2KSwge1xuLy8gICBvcGFjaXR5OiAwLjIsXG4vLyAgIGljb246IEwuZGl2SWNvbih7XG4vLyAgICAgaWNvbkFuY2hvcjogWzEwLCAyMF0sXG4vLyAgICAgaWNvblNpemU6IFsyMCwgMjBdLFxuLy8gICAgIGh0bWw6IGBcbi8vICAgICA8aVxuLy8gICAgICAgY2xhc3M9XCJpY29uZm9udFwiXG4vLyAgICAgICBzdHlsZT1cIlxuLy8gICAgICAgICBjb2xvcjogcmVkO1xuLy8gICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICBcIlxuLy8gICAgICAgPlxuLy8gICAgICAgJiN4ZTY1NTtcbi8vICAgICA8L2k+XG4vLyAgIGAsXG4vLyAgIH0pLFxuLy8gfSkuYWRkVG8obWFwKVxuLy8gd2luZG93LmxheWVyID0gbGF5ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=