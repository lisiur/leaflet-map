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
        this.defaultOptions = {
            renderType: 'point',
            renderPointColorType: 'single',
            iconType: 'unicode',
            iconSize: [20, 20],
            iconClass: 'iconfont',
            iconColor: '#3388FF',
            iconAnchor: [10, 20],
            popupAttr: { label: '名称', value: 'name' },
            tooltipAttr: 'name',
            segmentedColors: ['#3388FF'],
            isCluster: false,
            heatOptions: {
                max: 1,
                minOpacity: 1,
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
        this.zoomStartCb = this._zoomStartCb.bind(this);
        this.zoomEndCb = this._zoomEndCb.bind(this);
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
        if (this.layer) {
            this.map.removeLayer(this.layer);
        }
        if (this.focusedDisplayMarker) {
            this.map.removeLayer(this.focusedDisplayMarker);
        }
        this.map.off('zoomstart', this.zoomStartCb);
        this.map.off('zoomend', this.zoomEndCb);
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
    pitch(id) {
        this.markers.forEach((marker) => {
            if (marker.getData().id === id) {
                this.markerClickHandler(marker);
                return;
            }
        });
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
        // 解决初次渲染不出图标问题
        this.map.panTo(this.map.getCenter());
        this.markerLayer = canvasIconLayer;
        return this.markerLayer;
    }
    getToolTipContent(data) {
        return '' + data[this.options.tooltipAttr];
    }
    initOptions(options) {
        this.options = Object.assign({}, this.defaultOptions, this.options, options);
    }
    initMarkers() {
        // 缓存 segment 相关数据
        this.cacheSegmentParams();
        this.markers = [];
        this.dataList.forEach((data) => {
            const layer = L.geoJSON(data.geometry).getLayers()[0];
            const marker = new _Marker__WEBPACK_IMPORTED_MODULE_1__["default"]([
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
    initEvents() {
        this.map.on('zoomstart', this.zoomStartCb);
        this.map.on('zoomend', this.zoomEndCb);
        this.map.on('contextmenu', console.log);
    }
    // 处理 marker 点击事件
    markerClickHandler(marker) {
        this.focusedMarker = marker;
        // 删除前一个放大图标
        if (this.focusedDisplayMarker) {
            this.focusedDisplayMarker.removeFrom(this.map);
        }
        // 生成当前放大图标
        this.focusedDisplayMarker = new _Marker__WEBPACK_IMPORTED_MODULE_1__["default"](marker.getLatLng(), {
            icon: this.getLargerMarkerIcon(marker.getData()),
        });
        this.focusedDisplayMarker.addTo(this.map);
        this.focusedDisplayMarker
            .bindPopup(this.getPopupContent(marker.getData()))
            .openPopup();
        this.focusedDisplayMarker.on('popupclose', () => {
            this.focusedDisplayMarker.remove();
        });
        marker.closeTooltip();
        this.map.panTo(this.focusedMarker.getLatLng());
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
        this.markers.forEach((marker) => {
            const latLng = marker.getLatLng();
            const dimensionAttr = this.options.heatOptions && this.options.heatOptions.dimensionAttr;
            let alt = (dimensionAttr && marker.getData()[dimensionAttr]) ||
                this.options.heatOptions.max;
            if (typeof alt !== 'number') {
                alt = this.options.heatOptions.max;
            }
            marker.setLatLng(L.latLng(latLng.lat, latLng.lng, alt));
        });
        this.heatLayer = L.heatLayer(this.markers.map((it) => it.getLatLng()), 
        // TODO: 使用 mergeConfig 简化
        Object.assign({}, this.options.heatOptions, { minOpacity: 1 }));
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
        return L.divIcon({
            html: `
        <div
          style="
            border-radius: 50%;
            background: ${Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["lighten"])(this.options.iconColor)};
            width: 50px;
            height: 50px;
            opacity: 0.8;
            ">
          <div
            style="
              text-align: center;
              line-height: 30px;
              border-radius: 50%;
              background: ${this.options.iconColor};
              width: 32px;
              height: 32px;
              margin: 9px;
              color: white;
              font-size: 14px;
            ">
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
        const prop = this.options.tooltipAttr;
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


class PolygonsLayer {
    constructor(map, dataList, options, channelFunc) {
        const defaultOptions = {
            popupAttr: { label: '名称', value: 'name' },
            tooltipAttr: 'name',
            color: '#3388FF',
            fill: true,
            fillColor: '#3388FF',
            weight: 1,
            opacity: 1,
            fillOpacity: 0.5,
            renderPolygonColorType: 'single',
            segmentedColors: ['#3388FF'],
        };
        this.type = 'polygon';
        this.map = map;
        this.dataList = dataList;
        this.options = Object.assign({}, defaultOptions, options);
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
                this.polygonClickHandler(polygon);
                return;
            }
        });
    }
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
    polygonClickHandler(polygon) {
        this.focusedPolygon = polygon;
        // 删除前一个 focus
        if (this.focusedDisplayPolygon) {
            this.focusedDisplayPolygon.remove();
        }
        // 生成当前 focus
        this.focusedDisplayPolygon = new _Polygon__WEBPACK_IMPORTED_MODULE_1__["default"](polygon.getLatLngs(), {
            color: '#3388FF',
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
        this.channelFunc('on-click-polygon', polygon);
    }
    initOptions(options) {
        this.options = Object.assign(this.options, options);
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
                color: '#3388FF',
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
        const defaultOptions = {
            color: '#3388FF',
            renderPolylineColorType: 'single',
            segmentedColors: ['#3388FF'],
            popupAttr: { label: '名称', value: 'name' },
            tooltipAttr: 'name',
        };
        this.type = 'polyline';
        this.map = map;
        this.dataList = dataList;
        this.options = Object.assign({}, defaultOptions, options);
        this.channelFunc = channelFunc;
        this.visible = true;
        this.polylines = [];
        this.segmentedMin = Infinity;
        this.segmentedStep = 1;
        this.focusedPolyline = null;
        this.focusedDisplayPolyline = null;
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
                this.polylineClickHandler(polyline);
                return;
            }
        });
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
    polylineClickHandler(polyline) {
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
/*! exports provided: default, lighten, darken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return lighten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return darken; });
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
/* harmony default export */ __webpack_exports__["default"] = ({
    lighten,
    darken,
});



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvbWFya2VyL01hcmtlci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHNEQUFZOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGdGQUFZO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixJQUFJO0FBQzdCLHdCQUF3QixFQUFFLFdBQVcsRUFBRTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDek9ZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQywwREFBYztBQUN4QyxjQUFjLG1CQUFPLENBQUMsNERBQWU7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUFDLElBQUksQ0FBQztTQUM3QztRQUNELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxRQUFRO2dCQUNYLE9BQU8sMkRBQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sNERBQU8sQ0FBQyxLQUFLLENBQUM7WUFDdkI7Z0JBQ0UsT0FBTyxLQUFLO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7QUNuUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUU5QixTQUFTLE9BQU8sQ0FBQyxRQUFnQjtJQUMvQixPQUFPLGtDQUFLLENBQUMsUUFBUSxDQUFDO1NBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDWixHQUFHLEVBQUU7QUFDVixDQUFDO0FBQ0QsU0FBUyxNQUFNLENBQUMsUUFBZ0I7SUFDOUIsT0FBTyxrQ0FBSyxDQUFDLFFBQVEsQ0FBQztTQUNuQixNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsR0FBRyxFQUFFO0FBQ1YsQ0FBQztBQUNjO0lBQ2IsT0FBTztJQUNQLE1BQU07Q0FDUDtBQUN5QiIsImZpbGUiOiJsZWFmbGV0LWxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmRpZjtcblx0dmFyIGdkaWY7XG5cdHZhciBiZGlmO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG4vKipcbiAqIFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICogKi9cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHRyZXR1cm4gKFxuXHRcdE1hdGgucG93KHhbMF0gLSB5WzBdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzJdIC0geVsyXSwgMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yICh2YXIga2V5d29yZCBpbiBjc3NLZXl3b3Jkcykge1xuXHRcdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXl3b3JkKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGNvbnZlcnQuZ3JheS5oc3YgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHZhciB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0dmFyIGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xudmFyIHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG52YXIgc3dpenpsZSA9IHJlcXVpcmUoJ3NpbXBsZS1zd2l6emxlJyk7XG5cbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcblxuLy8gY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcblx0aWYgKGNvbG9yTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0XHRyZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xuXHR9XG59XG5cbnZhciBjcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHR0bzoge30sXG5cdGdldDoge31cbn07XG5cbmNzLmdldCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIHByZWZpeCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0dmFyIHZhbDtcblx0dmFyIG1vZGVsO1xuXHRzd2l0Y2ggKHByZWZpeCkge1xuXHRcdGNhc2UgJ2hzbCc6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHNsKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdoc2wnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaHdiJzpcblx0XHRcdHZhbCA9IGNzLmdldC5od2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2h3Yic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFsID0gY3MuZ2V0LnJnYihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAncmdiJztcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0aWYgKCF2YWwpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7bW9kZWw6IG1vZGVsLCB2YWx1ZTogdmFsfTtcbn07XG5cbmNzLmdldC5yZ2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgYWJiciA9IC9eIyhbYS1mMC05XXszLDR9KSQvaTtcblx0dmFyIGhleCA9IC9eIyhbYS1mMC05XXs2fSkoW2EtZjAtOV17Mn0pPyQvaTtcblx0dmFyIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIga2V5d29yZCA9IC8oXFxEKykvO1xuXG5cdHZhciByZ2IgPSBbMCwgMCwgMCwgMV07XG5cdHZhciBtYXRjaDtcblx0dmFyIGk7XG5cdHZhciBoZXhBbHBoYTtcblxuXHRpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuXHRcdGhleEFscGhhID0gbWF0Y2hbMl07XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9zbGljZS12cy1zdWJzdHItdnMtc3Vic3RyaW5nLW1ldGhvZHMtbG9uZy1zdHJpbmcvMTlcblx0XHRcdHZhciBpMiA9IGkgKiAyO1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaTIsIGkyICsgMiksIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicikpIHtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXHRcdGhleEFscGhhID0gbWF0Y2hbM107XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSArIGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0sIDApO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdID09PSAndHJhbnNwYXJlbnQnKSB7XG5cdFx0XHRyZXR1cm4gWzAsIDAsIDAsIDBdO1xuXHRcdH1cblxuXHRcdHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuXG5cdFx0aWYgKCFyZ2IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJnYlszXSA9IDE7XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHJnYltpXSA9IGNsYW1wKHJnYltpXSwgMCwgMjU1KTtcblx0fVxuXHRyZ2JbM10gPSBjbGFtcChyZ2JbM10sIDAsIDEpO1xuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jcy5nZXQuaHNsID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/KD86XFxkKlxcLik/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKHBhcnNlRmxvYXQobWF0Y2hbMV0pICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgcyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBsID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXG5cdFx0cmV0dXJuIFtoLCBzLCBsLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MuZ2V0Lmh3YiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQqW1xcLl0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKChwYXJzZUZsb2F0KG1hdGNoWzFdKSAlIDM2MCkgKyAzNjApICUgMzYwO1xuXHRcdHZhciB3ID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGIgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cdFx0cmV0dXJuIFtoLCB3LCBiLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MudG8uaGV4ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gKFxuXHRcdCcjJyArXG5cdFx0aGV4RG91YmxlKHJnYmFbMF0pICtcblx0XHRoZXhEb3VibGUocmdiYVsxXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzJdKSArXG5cdFx0KHJnYmFbM10gPCAxXG5cdFx0XHQ/IChoZXhEb3VibGUoTWF0aC5yb3VuZChyZ2JhWzNdICogMjU1KSkpXG5cdFx0XHQ6ICcnKVxuXHQpO1xufTtcblxuY3MudG8ucmdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJyknXG5cdFx0OiAncmdiYSgnICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLnJnYi5wZXJjZW50ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgciA9IE1hdGgucm91bmQocmdiYVswXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBnID0gTWF0aC5yb3VuZChyZ2JhWzFdIC8gMjU1ICogMTAwKTtcblx0dmFyIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0gLyAyNTUgKiAxMDApO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclKSdcblx0XHQ6ICdyZ2JhKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8uaHNsID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHNsYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblx0cmV0dXJuIGhzbGEubGVuZ3RoIDwgNCB8fCBoc2xhWzNdID09PSAxXG5cdFx0PyAnaHNsKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSknXG5cdFx0OiAnaHNsYSgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUsICcgKyBoc2xhWzNdICsgJyknO1xufTtcblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmNzLnRvLmh3YiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGh3YmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIGEgPSAnJztcblx0aWYgKGh3YmEubGVuZ3RoID49IDQgJiYgaHdiYVszXSAhPT0gMSkge1xuXHRcdGEgPSAnLCAnICsgaHdiYVszXTtcblx0fVxuXG5cdHJldHVybiAnaHdiKCcgKyBod2JhWzBdICsgJywgJyArIGh3YmFbMV0gKyAnJSwgJyArIGh3YmFbMl0gKyAnJScgKyBhICsgJyknO1xufTtcblxuY3MudG8ua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufTtcblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG5cdHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gJzAnICsgc3RyIDogc3RyO1xufVxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbG9yU3RyaW5nID0gcmVxdWlyZSgnY29sb3Itc3RyaW5nJyk7XG52YXIgY29udmVydCA9IHJlcXVpcmUoJ2NvbG9yLWNvbnZlcnQnKTtcblxudmFyIF9zbGljZSA9IFtdLnNsaWNlO1xuXG52YXIgc2tpcHBlZE1vZGVscyA9IFtcblx0Ly8gdG8gYmUgaG9uZXN0LCBJIGRvbid0IHJlYWxseSBmZWVsIGxpa2Uga2V5d29yZCBiZWxvbmdzIGluIGNvbG9yIGNvbnZlcnQsIGJ1dCBlaC5cblx0J2tleXdvcmQnLFxuXG5cdC8vIGdyYXkgY29uZmxpY3RzIHdpdGggc29tZSBtZXRob2QgbmFtZXMsIGFuZCBoYXMgaXRzIG93biBtZXRob2QgZGVmaW5lZC5cblx0J2dyYXknLFxuXG5cdC8vIHNob3VsZG4ndCByZWFsbHkgYmUgaW4gY29sb3ItY29udmVydCBlaXRoZXIuLi5cblx0J2hleCdcbl07XG5cbnZhciBoYXNoZWRNb2RlbEtleXMgPSB7fTtcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGhhc2hlZE1vZGVsS2V5c1tfc2xpY2UuY2FsbChjb252ZXJ0W21vZGVsXS5sYWJlbHMpLnNvcnQoKS5qb2luKCcnKV0gPSBtb2RlbDtcbn0pO1xuXG52YXIgbGltaXRlcnMgPSB7fTtcblxuZnVuY3Rpb24gQ29sb3Iob2JqLCBtb2RlbCkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmosIG1vZGVsKTtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiBtb2RlbCBpbiBza2lwcGVkTW9kZWxzKSB7XG5cdFx0bW9kZWwgPSBudWxsO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmICEobW9kZWwgaW4gY29udmVydCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW9kZWw6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHR2YXIgaTtcblx0dmFyIGNoYW5uZWxzO1xuXG5cdGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gWzAsIDAsIDBdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHRoaXMubW9kZWwgPSBvYmoubW9kZWw7XG5cdFx0dGhpcy5jb2xvciA9IG9iai5jb2xvci5zbGljZSgpO1xuXHRcdHRoaXMudmFscGhhID0gb2JqLnZhbHBoYTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHZhciByZXN1bHQgPSBjb2xvclN0cmluZy5nZXQob2JqKTtcblx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZzogJyArIG9iaik7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IHJlc3VsdC5tb2RlbDtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dGhpcy5jb2xvciA9IHJlc3VsdC52YWx1ZS5zbGljZSgwLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2YgcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyByZXN1bHQudmFsdWVbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmIChvYmoubGVuZ3RoKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG1vZGVsIHx8ICdyZ2InO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbmV3QXJyID0gX3NsaWNlLmNhbGwob2JqLCAwLCBjaGFubmVscyk7XG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShuZXdBcnIsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmpbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IG9ialtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG5cdFx0Ly8gdGhpcyBpcyBhbHdheXMgUkdCIC0gY2FuIGJlIGNvbnZlcnRlZCBsYXRlciBvbi5cblx0XHRvYmogJj0gMHhGRkZGRkY7XG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbXG5cdFx0XHQob2JqID4+IDE2KSAmIDB4RkYsXG5cdFx0XHQob2JqID4+IDgpICYgMHhGRixcblx0XHRcdG9iaiAmIDB4RkZcblx0XHRdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cdFx0aWYgKCdhbHBoYScgaW4gb2JqKSB7XG5cdFx0XHRrZXlzLnNwbGljZShrZXlzLmluZGV4T2YoJ2FscGhhJyksIDEpO1xuXHRcdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqLmFscGhhID09PSAnbnVtYmVyJyA/IG9iai5hbHBoYSA6IDA7XG5cdFx0fVxuXG5cdFx0dmFyIGhhc2hlZEtleXMgPSBrZXlzLnNvcnQoKS5qb2luKCcnKTtcblx0XHRpZiAoIShoYXNoZWRLZXlzIGluIGhhc2hlZE1vZGVsS2V5cykpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IGhhc2hlZE1vZGVsS2V5c1toYXNoZWRLZXlzXTtcblxuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblx0XHR2YXIgY29sb3IgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb2xvci5wdXNoKG9ialtsYWJlbHNbaV1dKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KGNvbG9yKTtcblx0fVxuXG5cdC8vIHBlcmZvcm0gbGltaXRhdGlvbnMgKGNsYW1waW5nLCBldGMuKVxuXHRpZiAobGltaXRlcnNbdGhpcy5tb2RlbF0pIHtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHZhciBsaW1pdCA9IGxpbWl0ZXJzW3RoaXMubW9kZWxdW2ldO1xuXHRcdFx0aWYgKGxpbWl0KSB7XG5cdFx0XHRcdHRoaXMuY29sb3JbaV0gPSBsaW1pdCh0aGlzLmNvbG9yW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aGlzLnZhbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMudmFscGhhKSk7XG5cblx0aWYgKE9iamVjdC5mcmVlemUpIHtcblx0XHRPYmplY3QuZnJlZXplKHRoaXMpO1xuXHR9XG59XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0dG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJpbmcoKTtcblx0fSxcblxuXHR0b0pTT046IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpc1t0aGlzLm1vZGVsXSgpO1xuXHR9LFxuXG5cdHN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5tb2RlbCBpbiBjb2xvclN0cmluZy50byA/IHRoaXMgOiB0aGlzLnJnYigpO1xuXHRcdHNlbGYgPSBzZWxmLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvW3NlbGYubW9kZWxdKGFyZ3MpO1xuXHR9LFxuXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMucmdiKCkucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8ucmdiLnBlcmNlbnQoYXJncyk7XG5cdH0sXG5cblx0YXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxwaGEgPT09IDEgPyB0aGlzLmNvbG9yLnNsaWNlKCkgOiB0aGlzLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdH0sXG5cblx0b2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHRyZXN1bHRbbGFiZWxzW2ldXSA9IHRoaXMuY29sb3JbaV07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXN1bHQuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXG5cdHVuaXRBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJnYlswXSAvPSAyNTU7XG5cdFx0cmdiWzFdIC89IDI1NTtcblx0XHRyZ2JbMl0gLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IucHVzaCh0aGlzLnZhbHBoYSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHR1bml0T2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkub2JqZWN0KCk7XG5cdFx0cmdiLnIgLz0gMjU1O1xuXHRcdHJnYi5nIC89IDI1NTtcblx0XHRyZ2IuYiAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0cm91bmQ6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHRwbGFjZXMgPSBNYXRoLm1heChwbGFjZXMgfHwgMCwgMCk7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLm1hcChyb3VuZFRvUGxhY2UocGxhY2VzKSkuY29uY2F0KHRoaXMudmFscGhhKSwgdGhpcy5tb2RlbCk7XG5cdH0sXG5cblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLmNvbmNhdChNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWwpKSksIHRoaXMubW9kZWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnZhbHBoYTtcblx0fSxcblxuXHQvLyByZ2Jcblx0cmVkOiBnZXRzZXQoJ3JnYicsIDAsIG1heGZuKDI1NSkpLFxuXHRncmVlbjogZ2V0c2V0KCdyZ2InLCAxLCBtYXhmbigyNTUpKSxcblx0Ymx1ZTogZ2V0c2V0KCdyZ2InLCAyLCBtYXhmbigyNTUpKSxcblxuXHRodWU6IGdldHNldChbJ2hzbCcsICdoc3YnLCAnaHNsJywgJ2h3YicsICdoY2cnXSwgMCwgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gKCh2YWwgJSAzNjApICsgMzYwKSAlIDM2MDsgfSksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYnJhY2Utc3R5bGVcblxuXHRzYXR1cmF0aW9ubDogZ2V0c2V0KCdoc2wnLCAxLCBtYXhmbigxMDApKSxcblx0bGlnaHRuZXNzOiBnZXRzZXQoJ2hzbCcsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHNhdHVyYXRpb252OiBnZXRzZXQoJ2hzdicsIDEsIG1heGZuKDEwMCkpLFxuXHR2YWx1ZTogZ2V0c2V0KCdoc3YnLCAyLCBtYXhmbigxMDApKSxcblxuXHRjaHJvbWE6IGdldHNldCgnaGNnJywgMSwgbWF4Zm4oMTAwKSksXG5cdGdyYXk6IGdldHNldCgnaGNnJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0d2hpdGU6IGdldHNldCgnaHdiJywgMSwgbWF4Zm4oMTAwKSksXG5cdHdibGFjazogZ2V0c2V0KCdod2InLCAyLCBtYXhmbigxMDApKSxcblxuXHRjeWFuOiBnZXRzZXQoJ2NteWsnLCAwLCBtYXhmbigxMDApKSxcblx0bWFnZW50YTogZ2V0c2V0KCdjbXlrJywgMSwgbWF4Zm4oMTAwKSksXG5cdHllbGxvdzogZ2V0c2V0KCdjbXlrJywgMiwgbWF4Zm4oMTAwKSksXG5cdGJsYWNrOiBnZXRzZXQoJ2NteWsnLCAzLCBtYXhmbigxMDApKSxcblxuXHR4OiBnZXRzZXQoJ3h5eicsIDAsIG1heGZuKDEwMCkpLFxuXHR5OiBnZXRzZXQoJ3h5eicsIDEsIG1heGZuKDEwMCkpLFxuXHR6OiBnZXRzZXQoJ3h5eicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGw6IGdldHNldCgnbGFiJywgMCwgbWF4Zm4oMTAwKSksXG5cdGE6IGdldHNldCgnbGFiJywgMSksXG5cdGI6IGdldHNldCgnbGFiJywgMiksXG5cblx0a2V5d29yZDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnZlcnRbdGhpcy5tb2RlbF0ua2V5d29yZCh0aGlzLmNvbG9yKTtcblx0fSxcblxuXHRoZXg6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5oZXgodGhpcy5yZ2IoKS5yb3VuZCgpLmNvbG9yKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZXR1cm4gKChyZ2JbMF0gJiAweEZGKSA8PCAxNikgfCAoKHJnYlsxXSAmIDB4RkYpIDw8IDgpIHwgKHJnYlsyXSAmIDB4RkYpO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcblx0fSxcblxuXHRjb250cmFzdDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWZcblx0XHR2YXIgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuXHRcdHZhciBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcblxuXHRcdGlmIChsdW0xID4gbHVtMikge1xuXHRcdFx0cmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpO1xuXHRcdH1cblxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGlzRGFyazogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFlJUSBlcXVhdGlvbiBmcm9tIGh0dHA6Ly8yNHdheXMub3JnLzIwMTAvY2FsY3VsYXRpbmctY29sb3ItY29udHJhc3Rcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0aXNMaWdodDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAhdGhpcy5pc0RhcmsoKTtcblx0fSxcblxuXHRuZWdhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiLmNvbG9yW2ldID0gMjU1IC0gcmdiLmNvbG9yW2ldO1xuXHRcdH1cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdGxpZ2h0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSArPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRhcmtlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdIC09IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSArPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRlc2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSAtPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHdoaXRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzFdICs9IGh3Yi5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzJdICs9IGh3Yi5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0Z3JheXNjYWxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0cmV0dXJuIENvbG9yLnJnYih2YWwsIHZhbCwgdmFsKTtcblx0fSxcblxuXHRmYWRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSAtICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0b3BhcXVlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgKyAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdHJvdGF0ZTogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHR2YXIgaHVlID0gaHNsLmNvbG9yWzBdO1xuXHRcdGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcblx0XHRodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuXHRcdGhzbC5jb2xvclswXSA9IGh1ZTtcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdC8vIHBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuXHRcdHZhciBjb2xvcjEgPSBtaXhpbkNvbG9yLnJnYigpO1xuXHRcdHZhciBjb2xvcjIgPSB0aGlzLnJnYigpO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gQ29sb3IucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpLFxuXHRcdFx0XHRjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9XG59O1xuXG4vLyBtb2RlbCBjb252ZXJzaW9uIG1ldGhvZHMgYW5kIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGlmIChza2lwcGVkTW9kZWxzLmluZGV4T2YobW9kZWwpICE9PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXG5cdC8vIGNvbnZlcnNpb24gbWV0aG9kc1xuXHRDb2xvci5wcm90b3R5cGVbbW9kZWxdID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzLm1vZGVsID09PSBtb2RlbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihhcmd1bWVudHMsIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3QWxwaGEgPSB0eXBlb2YgYXJndW1lbnRzW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBjaGFubmVscyA6IHRoaXMudmFscGhhO1xuXHRcdHJldHVybiBuZXcgQ29sb3IoYXNzZXJ0QXJyYXkoY29udmVydFt0aGlzLm1vZGVsXVttb2RlbF0ucmF3KHRoaXMuY29sb3IpKS5jb25jYXQobmV3QWxwaGEpLCBtb2RlbCk7XG5cdH07XG5cblx0Ly8gJ3N0YXRpYycgY29uc3RydWN0aW9uIG1ldGhvZHNcblx0Q29sb3JbbW9kZWxdID0gZnVuY3Rpb24gKGNvbG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbG9yID0gemVyb0FycmF5KF9zbGljZS5jYWxsKGFyZ3VtZW50cyksIGNoYW5uZWxzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihjb2xvciwgbW9kZWwpO1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIHJvdW5kVG8obnVtLCBwbGFjZXMpIHtcblx0cmV0dXJuIE51bWJlcihudW0udG9GaXhlZChwbGFjZXMpKTtcbn1cblxuZnVuY3Rpb24gcm91bmRUb1BsYWNlKHBsYWNlcykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG51bSkge1xuXHRcdHJldHVybiByb3VuZFRvKG51bSwgcGxhY2VzKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0c2V0KG1vZGVsLCBjaGFubmVsLCBtb2RpZmllcikge1xuXHRtb2RlbCA9IEFycmF5LmlzQXJyYXkobW9kZWwpID8gbW9kZWwgOiBbbW9kZWxdO1xuXG5cdG1vZGVsLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcblx0XHQobGltaXRlcnNbbV0gfHwgKGxpbWl0ZXJzW21dID0gW10pKVtjaGFubmVsXSA9IG1vZGlmaWVyO1xuXHR9KTtcblxuXHRtb2RlbCA9IG1vZGVsWzBdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0dmFyIHJlc3VsdDtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdFx0dmFsID0gbW9kaWZpZXIodmFsKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKTtcblx0XHRcdHJlc3VsdC5jb2xvcltjaGFubmVsXSA9IHZhbDtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKS5jb2xvcltjaGFubmVsXTtcblx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdHJlc3VsdCA9IG1vZGlmaWVyKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn1cblxuZnVuY3Rpb24gbWF4Zm4obWF4KSB7XG5cdHJldHVybiBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIHYpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QXJyYXkodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXTtcbn1cblxuZnVuY3Rpb24gemVyb0FycmF5KGFyciwgbGVuZ3RoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodHlwZW9mIGFycltpXSAhPT0gJ251bWJlcicpIHtcblx0XHRcdGFycltpXSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcnJheWlzaChvYmopIHtcblx0aWYgKCFvYmogfHwgdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShvYmopIHx8XG5cdFx0KG9iai5sZW5ndGggPj0gMCAmJiAob2JqLnNwbGljZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG5cdFx0XHQoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIChvYmoubGVuZ3RoIC0gMSkpICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3RyaW5nJykpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5aXNoID0gcmVxdWlyZSgnaXMtYXJyYXlpc2gnKTtcblxudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBzd2l6emxlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzd2l6emxlKGFyZ3MpIHtcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciBhcmcgPSBhcmdzW2ldO1xuXG5cdFx0aWYgKGlzQXJyYXlpc2goYXJnKSkge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vamF2YXNjcmlwdC1hcnJheS1jb25jYXQtdnMtcHVzaC85OFxuXHRcdFx0cmVzdWx0cyA9IGNvbmNhdC5jYWxsKHJlc3VsdHMsIHNsaWNlLmNhbGwoYXJnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuc3dpenpsZS53cmFwID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZuKHN3aXp6bGUoYXJndW1lbnRzKSk7XG5cdH07XG59O1xuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IE1hcmtlcnNMYXllciwge1xuICBNYXJrZXJzTGF5ZXJPcHRpb25zLFxuICBNYXJrZXJzSGVhdExheWVyT3B0aW9ucyxcbn0gZnJvbSAnLi4vbWFya2VyL01hcmtlcnNMYXllcidcblxuaW50ZXJmYWNlIER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zIGV4dGVuZHMgTWFya2Vyc0hlYXRMYXllck9wdGlvbnMge1xuICAvKiog5piv5ZCm5b6q546v5pKt5pS+ICovXG4gIGxvb3A6IGJvb2xlYW5cbiAgLyoqIOaYr+WQpuiHquWKqOaSreaUviAqL1xuICBhdXRvOiBib29sZWFuXG4gIC8qKiDpl7TpmpTml7bpl7QgKi9cbiAgaW50ZXJ2YWw6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljSGVhdExheWVyIHtcbiAgLyoqIOW9k+WJjeaSreaUvuWIsOesrOWHoOatpSAqL1xuICBwcml2YXRlIGN1cnJlbnRTdGVwOiBudW1iZXJcblxuICBwcml2YXRlIG1hcDogTC5NYXBcbiAgcHJpdmF0ZSBkeW5hbWljRGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdW11cbiAgcHJpdmF0ZSBvcHRpb25zOiBEeW5hbWljSGVhdExheWVyT3B0aW9uc1xuICBwcml2YXRlIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICBwcml2YXRlIGxheWVyOiBNYXJrZXJzTGF5ZXJcbiAgcHJpdmF0ZSBpc1BhdXNlOiBib29sZWFuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZHluYW1pY0RhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVtdLFxuICAgIG9wdGlvbnM6IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZHluYW1pY0RhdGFMaXN0ID0gZHluYW1pY0RhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwXG4gICAgdGhpcy5pc1BhdXNlID0gdHJ1ZVxuICB9XG4gIHB1YmxpYyByZXN0YXJ0KCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IDBcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gICAgdGhpcy5zdGFydCgpXG4gIH1cbiAgcHVibGljIHN0YXJ0KCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYXV0bykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNQYXVzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8qKiDmkq3mlL7lrozmr5UgKi9cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdGFydCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKytcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKVxuICAgICAgICB0aGlzLnN0YXJ0KClcbiAgICAgIH1cbiAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpXG4gIH1cbiAgcHVibGljIHBhdXNlKCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IHRydWVcbiAgfVxuICBwdWJsaWMgcHJldigpIHtcbiAgICB0aGlzLmN1cnJlbnRTdGVwLS1cbiAgICB0aGlzLmN1cnJlbnRTdGVwID1cbiAgICAgICh0aGlzLmN1cnJlbnRTdGVwICsgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoKSAlXG4gICAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGhcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gIH1cbiAgcHVibGljIG5leHQoKSB7XG4gICAgdGhpcy5jdXJyZW50U3RlcCsrXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IHRoaXMuY3VycmVudFN0ZXAgJSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGhcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gIH1cbiAgcHVibGljIGdvdG9TdGVwKHN0ZXA6IG51bWJlcikge1xuICAgIGlmIChzdGVwIDwgMCB8fCBzdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBnb3RvU3RlcCgke3N0ZXB9KTogc3RlcCBpcyBvdXQgb2YgaW5kZXggYClcbiAgICB9XG4gICAgdGhpcy5sYXllci5zZXREYXRhKHRoaXMuZHluYW1pY0RhdGFMaXN0W3N0ZXBdKVxuICAgIHRoaXMubGF5ZXIuZHJhdygpXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKVxuICAgIHRoaXMuaW5pdExheWVyKClcbiAgICB0aGlzLmxheWVyLmRyYXcoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHJpdmF0ZSBpbml0T3B0aW9ucyhvcHRpb25zPzogRHluYW1pY0hlYXRMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgYXV0bzogZmFsc2UsXG4gICAgICAgIGludGVydmFsOiAxMDAwLFxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIG9wdGlvbnNcbiAgICApXG4gIH1cbiAgcHJpdmF0ZSBpbml0TGF5ZXIoKSB7XG4gICAgY29uc3QgbWFya2Vyc0xheWVyT3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucyA9IHtcbiAgICAgIHJlbmRlclR5cGU6ICdoZWF0JyxcbiAgICAgIGhlYXRPcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSBuZXcgTWFya2Vyc0xheWVyKFxuICAgICAgdGhpcy5tYXAsXG4gICAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdFswXSxcbiAgICAgIG1hcmtlcnNMYXllck9wdGlvbnMsXG4gICAgICB0aGlzLmNoYW5uZWxGdW5jXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmxheWVyXG4gIH1cbn1cbiIsImltcG9ydCBNYXJrZXIgZnJvbSAnLi9tYXJrZXIvTWFya2VyJ1xuaW1wb3J0IE1hcmtlcnNMYXllciBmcm9tICcuL21hcmtlci9NYXJrZXJzTGF5ZXInXG5pbXBvcnQgTWFya2Vyc0J1ZmZlckxheWVyIGZyb20gJy4vbWFya2VyL01hcmtlcnNCdWZmZXJMYXllcidcbmltcG9ydCBQb2x5bGluZSBmcm9tICcuL3BvbHlsaW5lL1BvbHlsaW5lJ1xuaW1wb3J0IFBvbHlsaW5lc0xheWVyIGZyb20gJy4vcG9seWxpbmUvUG9seWxpbmVzTGF5ZXInXG5pbXBvcnQgUG9seWxpbmVzQnVmZmVyTGF5ZXIgZnJvbSAnLi9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllcidcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vcG9seWdvbi9Qb2x5Z29uJ1xuaW1wb3J0IFBvbHlnb25zTGF5ZXIgZnJvbSAnLi9wb2x5Z29uL1BvbHlnb25zTGF5ZXInXG5pbXBvcnQgR3JpZHNMYXllciBmcm9tICcuL3BvbHlnb24vR3JpZHNMYXllcidcbmltcG9ydCBEeW5hbWljSGVhdExheWVyIGZyb20gJy4vZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIE1hcmtlcixcbiAgTWFya2Vyc0xheWVyLFxuICBNYXJrZXJzQnVmZmVyTGF5ZXIsXG4gIFBvbHlsaW5lLFxuICBQb2x5bGluZXNMYXllcixcbiAgUG9seWxpbmVzQnVmZmVyTGF5ZXIsXG4gIFBvbHlnb24sXG4gIFBvbHlnb25zTGF5ZXIsXG4gIEdyaWRzTGF5ZXIsXG4gIER5bmFtaWNIZWF0TGF5ZXIsXG59XG5leHBvcnQge1xuICBNYXJrZXIsXG4gIE1hcmtlcnNMYXllcixcbiAgTWFya2Vyc0J1ZmZlckxheWVyLFxuICBQb2x5bGluZSxcbiAgUG9seWxpbmVzTGF5ZXIsXG4gIFBvbHlsaW5lc0J1ZmZlckxheWVyLFxuICBQb2x5Z29uLFxuICBQb2x5Z29uc0xheWVyLFxuICBHcmlkc0xheWVyLFxuICBEeW5hbWljSGVhdExheWVyLFxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlciBleHRlbmRzIEwuTWFya2VyIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfX2RhdGE6IERhdGFMaXN0SXRlbVxuICBjb25zdHJ1Y3RvcihsYXRsbmc6IEwuTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IEwuTWFya2VyT3B0aW9ucykge1xuICAgIHN1cGVyKGxhdGxuZywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IE1hcmtlcnNMYXllciwgeyBNYXJrZXJzTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi9NYXJrZXJzTGF5ZXInXG5pbnRlcmZhY2UgTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9ucyBleHRlbmRzIE1hcmtlcnNMYXllck9wdGlvbnMge1xuICBidWZmZXJUb29sdGlwQXR0cjogc3RyaW5nXG4gIGJ1ZmZlck9wdGlvbnM6IEwuQ2lyY2xlTWFya2VyT3B0aW9uc1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Vyc0J1ZmZlckxheWVyIGV4dGVuZHMgTWFya2Vyc0xheWVyIHtcbiAgcHVibGljIG9wdGlvbnM6IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnNcbiAgcHJpdmF0ZSBidWZmZXJMYXllcjogTC5MYXllckdyb3VwXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIHRoaXMudHlwZSA9ICdtYXJrZXJCdWZmZXInXG4gICAgY29uc3QgZGVmYXVsdEJ1ZmZlck9wdGlvbnM6IEwuQ2lyY2xlTWFya2VyT3B0aW9ucyA9IHtcbiAgICAgIHJhZGl1czogMTAwMCxcbiAgICAgIHN0cm9rZTogdHJ1ZSxcbiAgICAgIHdlaWdodDogMSxcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHsgYnVmZmVyT3B0aW9uczogZGVmYXVsdEJ1ZmZlck9wdGlvbnMgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApXG4gIH1cblxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLmNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvclxuICAgIHRoaXMuaW5pdE1hcmtlcnMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cblxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLmJ1ZmZlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmJ1ZmZlckxheWVyKVxuICAgIH1cbiAgICB0aGlzLm1hcmtlckxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpXG4gICAgdGhpcy5idWZmZXJMYXllciA9IHRoaXMuY29uZmlnQnVmZmVyTGF5ZXIoKVxuXG4gICAgdGhpcy5sYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5sYXllci5hZGRMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5idWZmZXJMYXllcilcblxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFya2Vycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgIHJldHVybiBwcmV2LmV4dGVuZChcbiAgICAgICAgY3Vyci5nZXRMYXRMbmcoKS50b0JvdW5kcyh0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5yYWRpdXMpXG4gICAgICApXG4gICAgfSwgdGhpcy5tYXJrZXJzWzBdLmdldExhdExuZygpLnRvQm91bmRzKHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLnJhZGl1cykpXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0J1ZmZlckxheWVyKCkge1xuICAgIGNvbnN0IGdyb3VwTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGNvbnN0IGNpcmNsZUxheWVyID0gTC5jaXJjbGUoXG4gICAgICAgIG1hcmtlci5nZXRMYXRMbmcoKSxcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnNcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnVmZmVyVG9vbHRpcEF0dHIpIHtcbiAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5idWZmZXJUb29sdGlwQXR0cl1cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICAgICAgICApXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdyb3VwTGF5ZXIuYWRkTGF5ZXIoY2lyY2xlTGF5ZXIpXG4gICAgfSlcbiAgICByZXR1cm4gZ3JvdXBMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBsaWdodGVuIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXG5pbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgTWFya2VyIGZyb20gJy4vTWFya2VyJ1xuXG4vKiog5riy5p+T5qC35byPIOaVo+eCuXzng63lipvlm74gKi9cbnR5cGUgTWFya2Vyc0xheWVyUmVuZGVyVHlwZSA9ICdwb2ludCcgfCAnaGVhdCcgfCAnY2x1c3RlcidcblxuLyoqIOa4suafk+minOiJsuagt+W8jyDljZXoibJ85YiG5q61ICovXG50eXBlIE1hcmtlcnNMYXllclJlbmRlclBvaW50Q29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuXG4vKiog5pWj54K55Zu+5qCH57G75Z6LIGljb25mb250fHN2Z3xpbWFnZSAqL1xudHlwZSBNYXJrZXJzTGF5ZXJJY29uVHlwZSA9ICdmb250X2NsYXNzJyB8ICd1bmljb2RlJyB8ICdzeW1ib2wnIHwgJ2ltYWdlJ1xuXG5pbnRlcmZhY2UgSWNvblJlbmRlckZ1bmNPcHRpb24ge1xuICBpY29uU2l6ZTogW251bWJlciwgbnVtYmVyXVxuICBpY29uQ29sb3I6IHN0cmluZ1xufVxudHlwZSBJY29uUmVuZGVyRnVuYyA9IChcbiAgZGF0YTogRGF0YUxpc3RJdGVtLFxuICBwYXJhbXM6IEljb25SZW5kZXJGdW5jT3B0aW9uXG4pID0+IHN0cmluZ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlcnNMYXllck9wdGlvbnMge1xuICByZW5kZXJUeXBlOiBNYXJrZXJzTGF5ZXJSZW5kZXJUeXBlXG4gIHJlbmRlclBvaW50Q29sb3JUeXBlPzogTWFya2Vyc0xheWVyUmVuZGVyUG9pbnRDb2xvclR5cGVcbiAgaWNvblR5cGU/OiBNYXJrZXJzTGF5ZXJJY29uVHlwZVxuXG4gIGljb25JbWFnZVVybD86IHN0cmluZ1xuICBpY29uU2l6ZT86IFtudW1iZXIsIG51bWJlcl1cbiAgaWNvbkNsYXNzPzogc3RyaW5nXG4gIGljb25Vbmljb2RlPzogc3RyaW5nXG4gIGljb25TeW1ib2w/OiBzdHJpbmdcbiAgaWNvbkNvbG9yPzogc3RyaW5nXG4gIGljb25BbmNob3I/OiBbbnVtYmVyLCBudW1iZXJdXG4gIGljb25SZW5kZXJlcj86IEljb25SZW5kZXJGdW5jXG5cbiAgLy8g5piv5ZCm6IGa5ZCI77yM5LyY5YWI57qn6auY5LqOIHJlbmRlclR5cGUgPT0gcG9pbnRcbiAgaXNDbHVzdGVyPzogYm9vbGVhblxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxuXG4gIGhlYXRPcHRpb25zPzogTWFya2Vyc0hlYXRMYXllck9wdGlvbnNcbiAgY2x1c3Rlck9wdGlvbnM/OiBMLk1hcmtlcnNDbHVzdGVyT3B0aW9uc1xufVxuXG4vKiog6L2s5YyW5Li654Ot5Yqb5Zu+55qEIG9wdGlvbnMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2Vyc0hlYXRMYXllck9wdGlvbnMgZXh0ZW5kcyBMLkhlYXRMYXllck9wdGlvbnMge1xuICBkaW1lbnNpb25BdHRyPzogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlcnNMYXllciB7XG4gIHB1YmxpYyBtYXA6IEwuTWFwXG4gIHB1YmxpYyBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW11cbiAgcHVibGljIG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnNcbiAgcHVibGljIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuXG4gIHB1YmxpYyB0eXBlOiBzdHJpbmdcblxuICBwcm90ZWN0ZWQgbWFya2VyczogTWFya2VyW11cblxuICBwcm90ZWN0ZWQgZm9jdXNlZE1hcmtlcjogTWFya2VyXG4gIHByb3RlY3RlZCBob3ZlcmVkTWFya2VyOiBNYXJrZXJcbiAgLyoqIOmcgOimgeWxleekuueahOaUvuWkp+eahOWbvuaghyAqL1xuICBwcm90ZWN0ZWQgZm9jdXNlZERpc3BsYXlNYXJrZXI6IE1hcmtlclxuICBwcm90ZWN0ZWQgbWFya2VyTGF5ZXI6IEwuQ2FudmFzSWNvbkxheWVyXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOlxuICAgIHwgTC5DYW52YXNJY29uTGF5ZXJcbiAgICB8IEwuSGVhdExheWVyXG4gICAgfCBMLk1hcmtlcnNDbHVzdGVyXG4gICAgfCBMLkxheWVyR3JvdXBcbiAgcHJvdGVjdGVkIHpvb21TdGFydENiOiAoKSA9PiB2b2lkXG4gIHByb3RlY3RlZCB6b29tRW5kQ2I6ICgpID0+IHZvaWRcbiAgcHJpdmF0ZSBoZWF0TGF5ZXI6IEwuSGVhdExheWVyXG4gIHByaXZhdGUgY2x1c3RlckxheWVyOiBMLk1hcmtlcnNDbHVzdGVyXG5cbiAgcHJpdmF0ZSBzZWdtZW50ZWRNaW46IG51bWJlclxuICBwcml2YXRlIHNlZ21lbnRlZFN0ZXA6IG51bWJlclxuICBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICByZW5kZXJUeXBlOiAncG9pbnQnLFxuICAgICAgcmVuZGVyUG9pbnRDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgaWNvblR5cGU6ICd1bmljb2RlJyxcbiAgICAgIGljb25TaXplOiBbMjAsIDIwXSxcbiAgICAgIGljb25DbGFzczogJ2ljb25mb250JyxcbiAgICAgIGljb25Db2xvcjogJyMzMzg4RkYnLFxuICAgICAgaWNvbkFuY2hvcjogWzEwLCAyMF0sXG4gICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIGlzQ2x1c3RlcjogZmFsc2UsXG4gICAgICBoZWF0T3B0aW9uczoge1xuICAgICAgICBtYXg6IDEsXG4gICAgICAgIG1pbk9wYWNpdHk6IDEsXG4gICAgICB9LFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAnbWFya2VyJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMubGF5ZXIgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkTWFya2VyID0gbnVsbFxuICAgIHRoaXMuaG92ZXJlZE1hcmtlciA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbnVsbFxuICAgIHRoaXMubWFya2VycyA9IFtdXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IG51bGxcbiAgICB0aGlzLmhlYXRMYXllciA9IG51bGxcbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IG51bGxcblxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG5cbiAgICB0aGlzLnpvb21TdGFydENiID0gdGhpcy5fem9vbVN0YXJ0Q2IuYmluZCh0aGlzKVxuICAgIHRoaXMuem9vbUVuZENiID0gdGhpcy5fem9vbUVuZENiLmJpbmQodGhpcylcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogTWFya2Vyc0xheWVyT3B0aW9ucykge1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdGhpcy5pbml0TWFya2VycygpXG4gICAgdGhpcy5pbml0RXZlbnRzKClcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5sYXllci5yZW1vdmUoKVxuICAgIH1cblxuICAgIC8vIOS8mOWFiOWIpOaWrSBpc0NsdXN0ZXJcbiAgICBpZiAodGhpcy5vcHRpb25zLmlzQ2x1c3RlciAmJiB0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50Jykge1xuICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQ2x1c3RlckxheWVyKClcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSkge1xuICAgICAgICBjYXNlICdwb2ludCc6IHtcbiAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdjbHVzdGVyJzoge1xuICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0NsdXN0ZXJMYXllcigpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdoZWF0Jzoge1xuICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0hlYXRMYXllcigpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyVHlwZX1cImApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbVtdKSB7XG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFcbiAgfVxuICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zLCByZWRyYXcgPSBmYWxzZSkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIGlmIChyZWRyYXcpIHtcbiAgICAgIHRoaXMucmVkcmF3KClcbiAgICB9XG4gIH1cbiAgcHVibGljIGZpdEJvdW5kcygpIHtcbiAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5nZXRCb3VuZHMoKSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcmtlcnMubWFwKFxuICAgICAgKG1hcmtlcikgPT5cbiAgICAgICAgW21hcmtlci5nZXRMYXRMbmcoKS5sYXQsIG1hcmtlci5nZXRMYXRMbmcoKS5sbmddIGFzIFtudW1iZXIsIG51bWJlcl1cbiAgICApXG4gIH1cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyKVxuICAgIH1cbiAgICB0aGlzLm1hcC5vZmYoJ3pvb21zdGFydCcsIHRoaXMuem9vbVN0YXJ0Q2IpXG4gICAgdGhpcy5tYXAub2ZmKCd6b29tZW5kJywgdGhpcy56b29tRW5kQ2IpXG4gIH1cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIGNoYW5nZUljb24oaWNvblVuaWNvZGU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5pY29uVW5pY29kZSA9IGljb25Vbmljb2RlXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgaWYgKG1hcmtlci5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgX3pvb21TdGFydENiKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlcicpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50JyAmJiAhdGhpcy5vcHRpb25zLmlzQ2x1c3Rlcikge1xuICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX3pvb21FbmRDYigpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUgPT09ICdwb2ludCcgJiYgIXRoaXMub3B0aW9ucy5pc0NsdXN0ZXIpIHtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9XG4gIH1cbiAgLyoqIOa4suafk+S4uuaVo+eCueWbviAqL1xuICBwcm90ZWN0ZWQgY29uZmlnTWFya2VyTGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgY29uc3QgY2FudmFzSWNvbkxheWVyID0gTC5jYW52YXNJY29uTGF5ZXIoe30pLmFkZFRvKHRoaXMubWFwKVxuICAgIC8vIOa3u+WKoOeCueWHu+S6i+S7tlxuICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkNsaWNrTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyIGFzIE1hcmtlcilcbiAgICB9KVxuICAgIC8vIOa3u+WKoCBob3ZlciDkuovku7ZcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25Ib3Zlckxpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgIC8vIOS5i+WJjeaciSBob3ZlciDnmoTlhbPpl60gdG9vbHRpcFxuICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlcikge1xuICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIuY2xvc2VUb29sdGlwKClcbiAgICAgIH1cbiAgICAgIHRoaXMuaG92ZXJlZE1hcmtlciA9IG1hcmtlciBhcyBNYXJrZXJcblxuICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlci5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgLy8g5aaC5p6c5bey57uP6K6+572uIHRvb2x0aXAg55u05o6l5bGV56S6IHRvb2x0aXBcbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLm9wZW5Ub29sdGlwKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWQpuWImee7keWumiB0b29sdGlwIOW5tuWxleekulxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmJpbmRUb29sdGlwKFxuICAgICAgICAgICAgJycgKyB0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIGNhbnZhc0ljb25MYXllci5hZGRNYXJrZXJzKHRoaXMubWFya2VycylcblxuICAgIC8vIOino+WGs+WIneasoea4suafk+S4jeWHuuWbvuagh+mXrumimFxuICAgIHRoaXMubWFwLnBhblRvKHRoaXMubWFwLmdldENlbnRlcigpKVxuXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IGNhbnZhc0ljb25MYXllclxuICAgIHJldHVybiB0aGlzLm1hcmtlckxheWVyXG4gIH1cbiAgcHJvdGVjdGVkIGdldFRvb2xUaXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXVxuICB9XG4gIHByb3RlY3RlZCBpbml0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICB9XG4gIHByb3RlY3RlZCBpbml0TWFya2VycygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5tYXJrZXJzID0gW11cbiAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdXG5cbiAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIoXG4gICAgICAgIFtcbiAgICAgICAgICAobGF5ZXIgYXMgTC5NYXJrZXIpLmdldExhdExuZygpLmxhdCxcbiAgICAgICAgICAobGF5ZXIgYXMgTC5NYXJrZXIpLmdldExhdExuZygpLmxuZyxcbiAgICAgICAgXSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IHRoaXMuZ2V0TWFya2VySWNvbihkYXRhKSxcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICBtYXJrZXIuc2V0RGF0YShkYXRhKVxuICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRFdmVudHMoKSB7XG4gICAgdGhpcy5tYXAub24oJ3pvb21zdGFydCcsIHRoaXMuem9vbVN0YXJ0Q2IpXG4gICAgdGhpcy5tYXAub24oJ3pvb21lbmQnLCB0aGlzLnpvb21FbmRDYilcbiAgICB0aGlzLm1hcC5vbignY29udGV4dG1lbnUnLCBjb25zb2xlLmxvZylcbiAgfVxuICAvLyDlpITnkIYgbWFya2VyIOeCueWHu+S6i+S7tlxuICBwcml2YXRlIG1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXI6IE1hcmtlcikge1xuICAgIHRoaXMuZm9jdXNlZE1hcmtlciA9IG1hcmtlclxuICAgIC8vIOWIoOmZpOWJjeS4gOS4quaUvuWkp+Wbvuagh1xuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyKSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZUZyb20odGhpcy5tYXApXG4gICAgfVxuICAgIC8vIOeUn+aIkOW9k+WJjeaUvuWkp+Wbvuagh1xuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIgPSBuZXcgTWFya2VyKG1hcmtlci5nZXRMYXRMbmcoKSwge1xuICAgICAgaWNvbjogdGhpcy5nZXRMYXJnZXJNYXJrZXJJY29uKG1hcmtlci5nZXREYXRhKCkpLFxuICAgIH0pXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5hZGRUbyh0aGlzLm1hcClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXJcbiAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpXG4gICAgICAub3BlblBvcHVwKClcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmUoKVxuICAgIH0pXG4gICAgbWFya2VyLmNsb3NlVG9vbHRpcCgpXG5cbiAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWRNYXJrZXIuZ2V0TGF0TG5nKCkpXG4gICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stbWFya2VyJywgbWFya2VyKVxuICB9XG4gIHByaXZhdGUgY29uZmlnQ2x1c3RlckxheWVyKCkge1xuICAgIC8vIOWxleekuuiBmuWQiOWbvuWxglxuICAgIGlmICh0aGlzLmNsdXN0ZXJMYXllcikge1xuICAgICAgdGhpcy5jbHVzdGVyTGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5jbHVzdGVyTGF5ZXIgPSBMLm1hcmtlckNsdXN0ZXJHcm91cCh7XG4gICAgICBpY29uQ3JlYXRlRnVuY3Rpb246IHRoaXMuaWNvbkNyZWF0ZUZ1bmN0aW9uLmJpbmQodGhpcyksXG4gICAgfSlcbiAgICB0aGlzLmNsdXN0ZXJMYXllci5hZGRMYXllcnMoXG4gICAgICB0aGlzLm1hcmtlcnMubWFwKChtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIobS5nZXRMYXRMbmcoKSwge1xuICAgICAgICAgIGljb246IHRoaXMuZ2V0TWFya2VySWNvbihtLmdldERhdGEoKSksXG4gICAgICAgIH0pXG4gICAgICAgIG1hcmtlci5zZXREYXRhKG0uZ2V0RGF0YSgpKVxuICAgICAgICBtYXJrZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pXG4gICAgICAgIG1hcmtlci5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpXG4gICAgICAgIG1hcmtlci5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbWFya2VyXG4gICAgICB9KVxuICAgIClcbiAgICByZXR1cm4gdGhpcy5jbHVzdGVyTGF5ZXJcbiAgfVxuXG4gIC8qKiDmuLLmn5PkuLrng63lipvlm74gKi9cbiAgcHJpdmF0ZSBjb25maWdIZWF0TGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMuaGVhdExheWVyKSB7XG4gICAgICB0aGlzLmhlYXRMYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBsYXRMbmcgPSBtYXJrZXIuZ2V0TGF0TG5nKClcbiAgICAgIGNvbnN0IGRpbWVuc2lvbkF0dHIgPVxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLmRpbWVuc2lvbkF0dHJcbiAgICAgIGxldCBhbHQgPVxuICAgICAgICAoZGltZW5zaW9uQXR0ciAmJiBtYXJrZXIuZ2V0RGF0YSgpW2RpbWVuc2lvbkF0dHJdKSB8fFxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4XG4gICAgICBpZiAodHlwZW9mIGFsdCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgYWx0ID0gdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLm1heFxuICAgICAgfVxuICAgICAgbWFya2VyLnNldExhdExuZyhMLmxhdExuZyhsYXRMbmcubGF0LCBsYXRMbmcubG5nLCBhbHQpKVxuICAgIH0pXG4gICAgdGhpcy5oZWF0TGF5ZXIgPSBMLmhlYXRMYXllcihcbiAgICAgIHRoaXMubWFya2Vycy5tYXAoKGl0KSA9PiBpdC5nZXRMYXRMbmcoKSksXG4gICAgICAvLyBUT0RPOiDkvb/nlKggbWVyZ2VDb25maWcg566A5YyWXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMsIHsgbWluT3BhY2l0eTogMSB9KVxuICAgIClcbiAgICByZXR1cm4gdGhpcy5oZWF0TGF5ZXJcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGFyZ2VyTWFya2VySWNvbihkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWFya2VySWNvbihkYXRhLCB0cnVlKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRNYXJrZXJJY29uKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIGZhbHNlKVxuICB9XG5cbiAgLyoqIOiOt+WPluW9k+WJjSBtYXJrZXIg6ZyA6KaB5bGV56S655qEIGljb24gKi9cbiAgcHJpdmF0ZSBfZ2V0TWFya2VySWNvbihcbiAgICBkYXRhOiBEYXRhTGlzdEl0ZW0sXG4gICAgaXNMYXJnZXI6IGJvb2xlYW5cbiAgKTogTC5JY29uIHwgTC5EaXZJY29uIHtcbiAgICBjb25zdCBpY29uU2l6ZSA9IHRoaXMub3B0aW9ucy5pY29uU2l6ZVxuICAgIGNvbnN0IGljb25BbmNob3IgPSB0aGlzLm9wdGlvbnMuaWNvbkFuY2hvclxuICAgIGNvbnN0IGxhcmdlckljb25TaXplID0gW2ljb25TaXplWzBdICogMS41LCBpY29uU2l6ZVsxXSAqIDEuNV0gYXMgW1xuICAgICAgbnVtYmVyLFxuICAgICAgbnVtYmVyXG4gICAgXVxuICAgIGNvbnN0IGxhcmdlckljb25BbmNob3IgPSBbaWNvbkFuY2hvclswXSAqIDEuNSwgaWNvbkFuY2hvclsxXSAqIDEuNV0gYXMgW1xuICAgICAgbnVtYmVyLFxuICAgICAgbnVtYmVyXG4gICAgXVxuXG4gICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvclxuXG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgIGNhc2UgJ2ltYWdlJzoge1xuICAgICAgICAvLyByZXR1cm4gTC5pY29uKHtcbiAgICAgICAgLy8gICBpY29uVXJsOiB0aGlzLm9wdGlvbnMuaWNvbkltYWdlVXJsLFxuICAgICAgICAvLyAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgIC8vICAgaWNvbkFuY2hvcixcbiAgICAgICAgLy8gfSlcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2ZvbnRfY2xhc3MnOlxuICAgICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgIGNhc2UgJ3VuaWNvZGUnOiB7XG4gICAgICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgICAgIGh0bWw6IHRoaXMuZ2V0Q3VzdG9tSWNvbkhUTUwoZGF0YSwge1xuICAgICAgICAgICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgICAgIGljb25Db2xvcixcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjbGFzc05hbWU6IGlzTGFyZ2VyID8gJ2xhcmdlLWRpdi1pY29uLW1hcmtlcicgOiAnJyxcbiAgICAgICAgICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAgIGljb25BbmNob3I6IGlzTGFyZ2VyID8gbGFyZ2VySWNvbkFuY2hvciA6IGljb25BbmNob3IsXG4gICAgICAgICAgdG9vbHRpcEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgICAgcG9wdXBBbmNob3I6IGlzTGFyZ2VyXG4gICAgICAgICAgICA/IFswLCAtbGFyZ2VySWNvbkFuY2hvclsxXSAvIDJdXG4gICAgICAgICAgICA6IFswLCAtaWNvbkFuY2hvclsxXSAvIDJdLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclR5cGUg5LiN6IO95Li6ICR7dGhpcy5vcHRpb25zLmljb25UeXBlfWApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgZ2V0Q3VzdG9tSWNvbkhUTUwoXG4gICAgZGF0YTogRGF0YUxpc3RJdGVtLFxuICAgIG9wdGlvbnM/OiBJY29uUmVuZGVyRnVuY09wdGlvblxuICApOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKSB7XG4gICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIoZGF0YSwgb3B0aW9ucylcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGUpIHtcbiAgICAgIGNhc2UgJ3NpbmdsZSc6IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgICAgICBjYXNlICdmb250X2NsYXNzJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7b3B0aW9ucy5pY29uQ29sb3J9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkvb/nlKggc3ZnXG4gICAgICAgICAgY2FzZSAnc3ltYm9sJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24tc3ltYm9sXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLm9wdGlvbnMuaWNvblN5bWJvbH1cIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L2/55SoIHVuaWNvZGVcbiAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHtvcHRpb25zLmljb25Db2xvcn07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3B0aW9ucy5pY29uVW5pY29kZX1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnc2VnbWVudGVkJzoge1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgICAgIC8vIOS9v+eUqCBjbGFzc1xuICAgICAgICAgIGNhc2UgJ2ZvbnRfY2xhc3MnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSl9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkvb/nlKggc3ZnXG4gICAgICAgICAgY2FzZSAnc3ltYm9sJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24tc3ltYm9sXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLm9wdGlvbnMuaWNvblN5bWJvbH1cIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L2/55SoIHVuaWNvZGVcbiAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLmdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGEpfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5vcHRpb25zLmljb25Vbmljb2RlfVxuICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgcmVuZGVyUG9pbnRDb2xvclR5cGUg5LiN5pSv5oyBXCIke3RoaXMub3B0aW9ucy5yZW5kZXJQb2ludENvbG9yVHlwZX1cImBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aFxuICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHlcbiAgICBsZXQgbWluVmFsID0gSW5maW5pdHlcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKVxuICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpXG4gICAgfVxuICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGhcbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IG1pblZhbFxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXBcbiAgfVxuICBwcml2YXRlIGdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGE6IERhdGFMaXN0SXRlbSk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbXG4gICAgICBwYXJzZUludCgnJyArICh2YWwgLSB0aGlzLnNlZ21lbnRlZE1pbikgLyB0aGlzLnNlZ21lbnRlZFN0ZXAsIDEwKVxuICAgIF1cbiAgICByZXR1cm4gY29sb3JcbiAgfVxuICBwcml2YXRlIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtcbiAgICAgICAgZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgfWBcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBpY29uQ3JlYXRlRnVuY3Rpb24oY2x1c3RlcjogTC5NYXJrZXJzQ2x1c3Rlcikge1xuICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgaHRtbDogYFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbih0aGlzLm9wdGlvbnMuaWNvbkNvbG9yKX07XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLm9wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA5cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAke2NsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgICBpY29uU2l6ZTogWzQwLCA0MF0sXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IFBvbHlnb24gZnJvbSAnLi9Qb2x5Z29uJ1xuaW1wb3J0IFBvbHlnb25zTGF5ZXIsIHsgUG9seWdvbkxheWVyT3B0aW9ucyB9IGZyb20gJy4vUG9seWdvbnNMYXllcidcbmltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZHNMYXllciBleHRlbmRzIFBvbHlnb25zTGF5ZXIge1xuICBwcml2YXRlIHByb3BNYXhMZW5ndGg6IG51bWJlclxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYylcbiAgICB0aGlzLnByb3BNYXhMZW5ndGggPSAtMVxuICB9XG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5sYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdHcmlkTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgLy8gdG9vbHRpcCDmnInlj6/og73pnIDopoHnm7TmjqXlsZXnpLrvvIzpnIDopoHlnKggcG9seWdvbiDmt7vliqDliLDlnLDlm77kuIrkuYvlkI7miY3lj6/ku6XvvIzmiYDku6XpnIDopoHlu7bov5/orr7nva5cbiAgICB0aGlzLmNvbmZpZ1Rvb2x0aXAoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIHRvZ2dsZVRvb2x0aXAodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgaWYgKHBvbHlnb24uZ2V0VG9vbHRpcCgpKSB7XG4gICAgICAgIHBvbHlnb24uZ2V0VG9vbHRpcCgpLnNldE9wYWNpdHkodmlzaWJsZSA/IDEgOiAwKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRFdmVudCgpIHtcbiAgICB0aGlzLm1hcC5vbignem9vbScsIHRoaXMuem9vbUhhbmRsZXIuYmluZCh0aGlzKSlcbiAgfVxuICBwcml2YXRlIGNvbmZpZ1Rvb2x0aXAoKSB7XG4gICAgdGhpcy5wcm9wTWF4TGVuZ3RoID0gdGhpcy5nZXRQcm9wTWF4TGVuZ3RoKClcbiAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgcG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSwge1xuICAgICAgICAgIHBlcm1hbmVudDogdHJ1ZSxcbiAgICAgICAgICBkaXJlY3Rpb246ICdjZW50ZXInLFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjb25maWdHcmlkTGF5ZXIoKSB7XG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMucG9seWdvbnMgPSB0aGlzLnBvbHlnb25zLm1hcCgocG9seWdvbikgPT4ge1xuICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlnb25Db2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IocG9seWdvbi5nZXREYXRhKCkpXG4gICAgICB9XG4gICAgICBjb25zdCBvcHRpb25zOiBMLlBvbHlsaW5lT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICBjb2xvcixcbiAgICAgIH0pXG4gICAgICAvLyDph43mlrDlupTnlKggb3B0aW9uc1xuICAgICAgY29uc3QgbmV3UG9seWdvbiA9IG5ldyBQb2x5Z29uKHBvbHlnb24uZ2V0TGF0TG5ncygpLCBvcHRpb25zKVxuICAgICAgbmV3UG9seWdvbi5zZXREYXRhKHBvbHlnb24uZ2V0RGF0YSgpKVxuICAgICAgbmV3UG9seWdvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMucG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uKVxuICAgICAgfSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgIG5ld1BvbHlnb24uYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG5ld1BvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdQb2x5Z29uXG4gICAgfSlcbiAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgIHRoaXMucG9seWdvbkxheWVyLmFkZExheWVyKHBvbHlnb24pXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5wb2x5Z29uTGF5ZXJcbiAgfVxuICBwcml2YXRlIHpvb21IYW5kbGVyKCkge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLnBvbHlnb25zWzBdXG4gICAgaWYgKCFwb2x5Z29uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy50b2dnbGVUb29sdGlwKFxuICAgICAgdGhpcy5nZXRSZWN0YW5nbGVXaWR0aChwb2x5Z29uKSA+XG4gICAgICAgIHRoaXMuZ2V0VG9vbHRpcE1heFdpZHRoKHRoaXMucHJvcE1heExlbmd0aClcbiAgICApXG4gIH1cbiAgcHJpdmF0ZSBnZXRSZWN0YW5nbGVXaWR0aChwb2x5Z29uOiBQb2x5Z29uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubWFwLmxhdExuZ1RvTGF5ZXJQb2ludChwb2x5Z29uLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpKS54IC1cbiAgICAgIHRoaXMubWFwLmxhdExuZ1RvTGF5ZXJQb2ludChwb2x5Z29uLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpKS54XG4gICAgKVxuICB9XG4gIHByaXZhdGUgZ2V0VG9vbHRpcE1heFdpZHRoKHRleHRMZW5ndGg6IG51bWJlcikge1xuICAgIHJldHVybiB0ZXh0TGVuZ3RoICogMTIgKyAxNFxuICB9XG4gIHByaXZhdGUgZ2V0UHJvcE1heExlbmd0aCgpIHtcbiAgICBjb25zdCBwcm9wID0gdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXG4gICAgcmV0dXJuIHRoaXMucG9seWdvbnNcbiAgICAgIC5tYXAoKHBvbHlnb24pID0+IGAke3BvbHlnb24uZ2V0RGF0YSgpW3Byb3BdfWAubGVuZ3RoKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgocHJldiwgY3VycilcbiAgICAgIH0sIDApXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgTC5Qb2x5Z29uIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfX2RhdGE6IERhdGFMaXN0SXRlbVxuICBjb25zdHJ1Y3RvcihcbiAgICBsYXRsbmdzOlxuICAgICAgfCBMLkxhdExuZ0V4cHJlc3Npb25bXVxuICAgICAgfCBMLkxhdExuZ0V4cHJlc3Npb25bXVtdXG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdW11bXSxcbiAgICBvcHRpb25zPzogTC5Qb2x5bGluZU9wdGlvbnNcbiAgKSB7XG4gICAgc3VwZXIobGF0bG5ncywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXG5pbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgUG9seWdvbiBmcm9tICcuL1BvbHlnb24nXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBQb2x5Z29uTGF5ZXJSZW5kZXJDb2xvclR5cGUgPSAnc2luZ2xlJyB8ICdzZWdtZW50ZWQnXG50eXBlIENvbG9yTW9kZSA9ICdkYXJrZW4nIHwgJ2xpZ2h0ZW4nIHwgJ25vcm1hbCdcbmV4cG9ydCBpbnRlcmZhY2UgUG9seWdvbkxheWVyT3B0aW9ucyBleHRlbmRzIEwuUG9seWxpbmVPcHRpb25zIHtcbiAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogUG9seWdvbkxheWVyUmVuZGVyQ29sb3JUeXBlXG5cbiAgLyoqIHBvcHVwIOWxleekuuWtl+autSAqL1xuICBwb3B1cEF0dHI/OiBzdHJpbmcgfCB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBhbnkgfVxuICAvKiogdG9vbHRpcCDlsZXnpLrlrZfmrrUgKi9cbiAgdG9vbHRpcEF0dHI/OiBzdHJpbmdcblxuICBvcGFjaXR5PzogbnVtYmVyXG5cbiAgLyoqIOWIhuautea4suafk+e7n+iuoeWtl+autSAqL1xuICBzZWdtZW50ZWRBdHRyPzogc3RyaW5nXG4gIHNlZ21lbnRlZENvbG9ycz86IHN0cmluZ1tdXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5Z29uc0xheWVyIHtcbiAgcHVibGljIHR5cGU6IHN0cmluZ1xuXG4gIHByb3RlY3RlZCB2aXNpYmxlOiBib29sZWFuXG4gIHByb3RlY3RlZCBsYXllcjogTC5MYXllckdyb3VwXG5cbiAgcHJvdGVjdGVkIG1hcDogTC5NYXBcbiAgcHJvdGVjdGVkIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVxuICBwcm90ZWN0ZWQgb3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9uc1xuICBwcm90ZWN0ZWQgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRNaW46IG51bWJlclxuICBwcm90ZWN0ZWQgc2VnbWVudGVkU3RlcDogbnVtYmVyXG4gIHByb3RlY3RlZCBwb2x5Z29uczogUG9seWdvbltdXG4gIHByb3RlY3RlZCBmb2N1c2VkUG9seWdvbjogUG9seWdvblxuICBwcm90ZWN0ZWQgZm9jdXNlZERpc3BsYXlQb2x5Z29uOiBQb2x5Z29uXG4gIHByb3RlY3RlZCBwb2x5Z29uTGF5ZXI6IEwuTGF5ZXJHcm91cFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zID0ge1xuICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICBmaWxsOiB0cnVlLFxuICAgICAgZmlsbENvbG9yOiAnIzMzODhGRicsXG4gICAgICB3ZWlnaHQ6IDEsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZmlsbE9wYWNpdHk6IDAuNSxcbiAgICAgIHJlbmRlclBvbHlnb25Db2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3BvbHlnb24nXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcblxuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLnBvbHlnb25zID0gW11cbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMVxuICAgIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24gPSBudWxsXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IFBvbHlnb25MYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdGhpcy5pbml0UG9seWdvbnMoKVxuICAgIHRoaXMuaW5pdEV2ZW50KClcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5sYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdQb2x5Z29uTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKVxuICB9XG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5wb2x5Z29ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25zLnJlZHVjZShcbiAgICAgIChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSxcbiAgICAgIHRoaXMucG9seWdvbnNbMF0uZ2V0Qm91bmRzKClcbiAgICApXG4gIH1cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pXG4gICAgfVxuICB9XG4gIHB1YmxpYyB0b2dnbGVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlXG4gICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25zLmZpbGxDb2xvciA9IGNvbG9yXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICBpZiAocG9seWdvbi5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMucG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHByb3RlY3RlZCBpbml0RXZlbnQoKSB7fVxuICBwcm90ZWN0ZWQgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gIH1cbiAgcHJvdGVjdGVkIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtcbiAgICAgICAgZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgfWBcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aFxuICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHlcbiAgICBsZXQgbWluVmFsID0gSW5maW5pdHlcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKVxuICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpXG4gICAgfVxuICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGhcbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IG1pblZhbFxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXBcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKGRhdGE6IERhdGFMaXN0SXRlbSk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbXG4gICAgICBwYXJzZUludCgnJyArICh2YWwgLSB0aGlzLnNlZ21lbnRlZE1pbikgLyB0aGlzLnNlZ21lbnRlZFN0ZXAsIDEwKVxuICAgIF1cbiAgICByZXR1cm4gY29sb3JcbiAgfVxuICBwcm90ZWN0ZWQgcG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uOiBQb2x5Z29uKSB7XG4gICAgdGhpcy5mb2N1c2VkUG9seWdvbiA9IHBvbHlnb25cbiAgICAvLyDliKDpmaTliY3kuIDkuKogZm9jdXNcbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pIHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLnJlbW92ZSgpXG4gICAgfVxuICAgIC8vIOeUn+aIkOW9k+WJjSBmb2N1c1xuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uID0gbmV3IFBvbHlnb24ocG9seWdvbi5nZXRMYXRMbmdzKCksIHtcbiAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWdvbi5nZXREYXRhKCkpLFxuICAgIH0pXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24uYWRkVG8odGhpcy5tYXApXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvblxuICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChwb2x5Z29uLmdldERhdGEoKSkpXG4gICAgICAub3BlblBvcHVwKClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKClcbiAgICB9KVxuICAgIHBvbHlnb24uY2xvc2VUb29sdGlwKClcblxuICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLmdldENlbnRlcigpKVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlnb24nLCBwb2x5Z29uKVxuICB9XG4gIHByb3RlY3RlZCBpbml0T3B0aW9ucyhvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRQb2x5Z29ucygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5wb2x5Z29ucyA9IFtdXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuICAgICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKChsYXllciBhcyBMLlBvbHlnb24pLmdldExhdExuZ3MoKSlcblxuICAgICAgcG9seWdvbi5zZXREYXRhKGRhdGEpXG4gICAgICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbilcbiAgICB9KVxuICB9XG4gIHByaXZhdGUgY29uZmlnUG9seWdvbkxheWVyKCkge1xuICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlnb25zID0gdGhpcy5wb2x5Z29ucy5tYXAoKHBvbHlnb24pID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IEwuUG9seWxpbmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgICB9KVxuICAgICAgLy8g6YeN5paw5bqU55SoIG9wdGlvbnNcbiAgICAgIGNvbnN0IG5ld1BvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucylcbiAgICAgIG5ld1BvbHlnb24uc2V0RGF0YShwb2x5Z29uLmdldERhdGEoKSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG5ld1BvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgIH1cbiAgICAgIG5ld1BvbHlnb24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbilcbiAgICAgIH0pXG4gICAgICByZXR1cm4gbmV3UG9seWdvblxuICAgIH0pXG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWdvbkxheWVyXG4gIH1cbiAgcHJpdmF0ZSBnZXRDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0sIG1vZGU/OiBDb2xvck1vZGUpIHtcbiAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlnb25Db2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKGRhdGEpXG4gICAgfVxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgcmV0dXJuIGRhcmtlbihjb2xvcilcbiAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICByZXR1cm4gbGlnaHRlbihjb2xvcilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb2xvclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCB0eXBlIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiA9XG4gIHwgTC5MYXRMbmdFeHByZXNzaW9uW11cbiAgfCBMLkxhdExuZ0V4cHJlc3Npb25bXVtdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZSBleHRlbmRzIEwuUG9seWxpbmUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKGxhdGxuZ3M6IFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IEwuUG9seWxpbmVPcHRpb25zKSB7XG4gICAgc3VwZXIobGF0bG5ncywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlsaW5lc0xheWVyIGZyb20gJy4vUG9seWxpbmVzTGF5ZXInXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBQb2x5bGluZUxheWVyUmVuZGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuaW50ZXJmYWNlIFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Db3JyaWRvck9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nXG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlsaW5lc0J1ZmZlckxheWVyIGV4dGVuZHMgUG9seWxpbmVzTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9uc1xuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgc3VwZXIobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zID0ge1xuICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIGNvcnJpZG9yOiAxMDAsXG4gICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgb3BhY2l0eTogMC41LFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncG9seWxpbmVCdWZmZXInXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgLy8gdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5bGluZXMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKVxuICB9XG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKFxuICAgICAgKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLFxuICAgICAgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKClcbiAgICApXG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwcml2YXRlIGNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKSB7XG4gICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgcG9seWxpbmUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lKVxuICAgICAgfSlcbiAgICAgIGNvbnN0IG9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGNvbnN0IHBvbHlsaW5lQnVmZmVyID0gTC5jb3JyaWRvcihcbiAgICAgICAgKHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBMLkxhdExuZ1tdKS5tYXAoKGxhdExuZykgPT5cbiAgICAgICAgICBMLmxhdExuZyhbbGF0TG5nLmxhdCwgbGF0TG5nLmxuZ10pXG4gICAgICAgICksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgcG9seWxpbmVCdWZmZXIuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKHBvbHlsaW5lQnVmZmVyKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgUG9seWxpbmUsIHsgUG9seWxpbmVMYXRMbmdFeHByZXNzaW9uIH0gZnJvbSAnLi9Qb2x5bGluZSdcbmltcG9ydCB7IGRhcmtlbiwgbGlnaHRlbiB9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbnR5cGUgQ29sb3JNb2RlID0gJ2RhcmtlbicgfCAnbGlnaHRlbicgfCAnbm9ybWFsJ1xuaW50ZXJmYWNlIFBvbHlsaW5lTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWxpbmVzTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOiBMLkxheWVyR3JvdXBcblxuICBwcm90ZWN0ZWQgbWFwOiBMLk1hcFxuICBwcm90ZWN0ZWQgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9uc1xuICBwcm90ZWN0ZWQgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gIHByb3RlY3RlZCBwb2x5bGluZXM6IFBvbHlsaW5lW11cbiAgcHJvdGVjdGVkIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJvdGVjdGVkIGZvY3VzZWRQb2x5bGluZTogUG9seWxpbmVcbiAgcHJvdGVjdGVkIGZvY3VzZWREaXNwbGF5UG9seWxpbmU6IFBvbHlsaW5lXG4gIHByb3RlY3RlZCBwb2x5bGluZUxheWVyOiBMLkxheWVyR3JvdXBcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9ucyA9IHtcbiAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3BvbHlsaW5lJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbnVsbFxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBQb2x5bGluZUxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWxpbmVMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCkpXG4gIH1cbiAgcHVibGljIGdldEJvdW5kcygpOiBMLkxhdExuZ0JvdW5kc0V4cHJlc3Npb24ge1xuICAgIGlmICh0aGlzLnBvbHlsaW5lcy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvbHlsaW5lcy5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksXG4gICAgICB0aGlzLnBvbHlsaW5lc1swXS5nZXRCb3VuZHMoKVxuICAgIClcbiAgfVxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsbENvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHBpdGNoKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgaWYgKHBvbHlsaW5lLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdFBvbHlsaW5lcygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG5cbiAgICB0aGlzLnBvbHlsaW5lcyA9IHRoaXMuZGF0YUxpc3QubWFwKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuICAgICAgLy8gbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgICAvLyBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgLy8gICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhKVxuICAgICAgLy8gfVxuICAgICAgY29uc3QgcG9seWxpbmUgPSBuZXcgUG9seWxpbmUoXG4gICAgICAgIChsYXllciBhcyBMLlBvbHlsaW5lKS5nZXRMYXRMbmdzKCkgYXMgUG9seWxpbmVMYXRMbmdFeHByZXNzaW9uXG4gICAgICApXG5cbiAgICAgIC8vIOWwhuebuOWFs+WAvOe7keWumuWIsCBtYXJrZXLkuIpcbiAgICAgIHBvbHlsaW5lLnNldERhdGEoZGF0YSlcblxuICAgICAgcmV0dXJuIHBvbHlsaW5lXG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW1xuICAgICAgcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMClcbiAgICBdXG4gICAgcmV0dXJuIGNvbG9yXG4gIH1cbiAgcHJvdGVjdGVkIHBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lOiBQb2x5bGluZSkge1xuICAgIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gcG9seWxpbmVcbiAgICAvLyDliKDpmaTliY3kuIDkuKogZm9jdXNcbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lKSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKClcbiAgICB9XG4gICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKFxuICAgICAgcG9seWxpbmUuZ2V0TGF0TG5ncygpIGFzIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbixcbiAgICAgIHtcbiAgICAgICAgY29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKSxcbiAgICAgICAgZmlsbENvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSwgJ25vcm1hbCcpLFxuICAgICAgfVxuICAgIClcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUuYWRkVG8odGhpcy5tYXApXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmVcbiAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQocG9seWxpbmUuZ2V0RGF0YSgpKSlcbiAgICAgIC5vcGVuUG9wdXAoKVxuXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIHBvbHlsaW5lLmNsb3NlVG9vbHRpcCgpXG5cbiAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUuZ2V0Q2VudGVyKCkpXG4gICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stcG9seWxpbmUnLCBwb2x5bGluZSlcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gIH1cbiAgcHJvdGVjdGVkIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtcbiAgICAgICAgZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgfWBcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjb25maWdQb2x5bGluZUxheWVyKCkge1xuICAgIHRoaXMucG9seWxpbmVMYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKVxuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgY29sb3IsXG4gICAgICB9KVxuICAgICAgY29uc3QgbmV3UG9seWxpbmUgPSBuZXcgUG9seWxpbmUoXG4gICAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIG5ld1BvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSlcbiAgICAgIH0pXG4gICAgICBuZXdQb2x5bGluZS5zZXREYXRhKHBvbHlsaW5lLmdldERhdGEoKSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWxpbmUuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKG5ld1BvbHlsaW5lKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0Q29sb3IoZGF0YTogRGF0YUxpc3RJdGVtLCBtb2RlPzogQ29sb3JNb2RlKSB7XG4gICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKGRhdGEpXG4gICAgfVxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgcmV0dXJuIGRhcmtlbihjb2xvcilcbiAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICByZXR1cm4gbGlnaHRlbihjb2xvcilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb2xvclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgQ29sb3IgZnJvbSAnY29sb3InXG5cbmZ1bmN0aW9uIGxpZ2h0ZW4oaGV4Q29sb3I6IHN0cmluZykge1xuICByZXR1cm4gQ29sb3IoaGV4Q29sb3IpXG4gICAgLmxpZ2h0ZW4oMC41KVxuICAgIC5oZXgoKVxufVxuZnVuY3Rpb24gZGFya2VuKGhleENvbG9yOiBzdHJpbmcpIHtcbiAgcmV0dXJuIENvbG9yKGhleENvbG9yKVxuICAgIC5kYXJrZW4oMC41KVxuICAgIC5oZXgoKVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICBsaWdodGVuLFxuICBkYXJrZW4sXG59XG5leHBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==

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

var position = new L.LatLng(39.90778, 116.401216)
var map = L.map('map').setView(position, 13)

L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)

var dataList = [
  {
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [116.401216, 39.90778],
          [116.391216, 39.90778],
          [116.391216, 39.91778],
          [116.401216, 39.91778],
        ],
      ],
    },
    price: 1,
  },
]

var layer = new _leaflet_layer__WEBPACK_IMPORTED_MODULE_0___default.a.GridsLayer(
  map,
  dataList,
  { tooltipAttr: 'price', popupAttr: { label: 'p', value: 'price' } },
  console.log
)
layer.toggleTooltip(true)
layer.draw()

// var dataList = [
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.401216, 39.90778],
//     },
//     price: 1,
//     name: '5',
//   },
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.391216, 39.90778],
//     },
//     price: 1,
//     name: '2',
//   },
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.391216, 39.91778],
//     },
//     price: 1,
//     name: '1',
//   },
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.401216, 39.91778],
//     },
//     price: 1,
//     name: '2'
//   },
// ]

// var layer = new leafletMap.MarkersLayer(
//   map,
//   dataList,
//   { renderType: 'cluster', iconUnicode: '&#xe655;', popupAttr: 'name', tooltipAttr: 'name' },
//   console.log
// )
// layer.draw()

// var dataList = [
//   {
//     geometry: {
//       type: 'Point',
//       coordinates: [116.401216, 39.90778],
//     },
//     price: 1,
//   },
// ]

// var layer = new leafletMap.MakersLayer(map, dataList, {}, console.log)
// layer.draw()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sZWFmbGV0LWxheWVyLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUsyQjtBQUNqQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYTtBQUM1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RCx1Q0FBdUM7QUFDL0Ysc0RBQXNELHFDQUFxQzs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLElBQUk7QUFDN0Isd0JBQXdCLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVB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QTs7QUFFQTtBQUNBO0FBQ0EsaUdBQWlHLHNCQUFzQixFQUFFO0FBQ3pIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUIsSUFBSSw2QkFBNkI7QUFDOUU7QUFDQTtBQUNBLHNCQUFzQiw2QkFBNkIsSUFBSSxtQ0FBbUM7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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TUFBTSw4Q0FBOEMsMkNBQTJDO0FBQy9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsTUFBTTtBQUNOOztBQUVBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seUJBQXlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsVUFBVTtBQUNuRTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rlc3Qvc3JjL2FwcC5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxlYWZsZXRNYXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjc3NLZXl3b3JkcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yLW5hbWUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzXCIpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKHZhciBrZXkgaW4gY3NzS2V5d29yZHMpIHtcblx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XV0gPSBrZXk7XG5cdH1cbn1cblxudmFyIGNvbnZlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3JnYid9LFxuXHRoc2w6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHNsJ30sXG5cdGhzdjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc3YnfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2h3Yid9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDQsIGxhYmVsczogJ2NteWsnfSxcblx0eHl6OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3h5eid9LFxuXHRsYWI6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGFiJ30sXG5cdGxjaDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsY2gnfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydoZXgnXX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2tleXdvcmQnXX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTE2J119LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMjU2J119LFxuXHRoY2c6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ2gnLCAnYycsICdnJ119LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsncjE2JywgJ2cxNicsICdiMTYnXX0sXG5cdGdyYXk6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2dyYXknXX1cbn07XG5cbi8vIGhpZGUgLmNoYW5uZWxzIGFuZCAubGFiZWxzIHByb3BlcnRpZXNcbmZvciAodmFyIG1vZGVsIGluIGNvbnZlcnQpIHtcblx0aWYgKGNvbnZlcnQuaGFzT3duUHJvcGVydHkobW9kZWwpKSB7XG5cdFx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoISgnbGFiZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVsIGxhYmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoY29udmVydFttb2RlbF0ubGFiZWxzLmxlbmd0aCAhPT0gY29udmVydFttb2RlbF0uY2hhbm5lbHMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2hhbm5lbCBhbmQgbGFiZWwgY291bnRzIG1pc21hdGNoOiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBsYWJlbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJkaWY7XG5cdHZhciBnZGlmO1xuXHR2YXIgYmRpZjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciB2ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkaWZmID0gdiAtIE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgZGlmZmMgPSBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAodiAtIGMpIC8gNiAvIGRpZmYgKyAxIC8gMjtcblx0fTtcblxuXHRpZiAoZGlmZiA9PT0gMCkge1xuXHRcdGggPSBzID0gMDtcblx0fSBlbHNlIHtcblx0XHRzID0gZGlmZiAvIHY7XG5cdFx0cmRpZiA9IGRpZmZjKHIpO1xuXHRcdGdkaWYgPSBkaWZmYyhnKTtcblx0XHRiZGlmID0gZGlmZmMoYik7XG5cblx0XHRpZiAociA9PT0gdikge1xuXHRcdFx0aCA9IGJkaWYgLSBnZGlmO1xuXHRcdH0gZWxzZSBpZiAoZyA9PT0gdikge1xuXHRcdFx0aCA9ICgxIC8gMykgKyByZGlmIC0gYmRpZjtcblx0XHR9IGVsc2UgaWYgKGIgPT09IHYpIHtcblx0XHRcdGggPSAoMiAvIDMpICsgZ2RpZiAtIHJkaWY7XG5cdFx0fVxuXHRcdGlmIChoIDwgMCkge1xuXHRcdFx0aCArPSAxO1xuXHRcdH0gZWxzZSBpZiAoaCA+IDEpIHtcblx0XHRcdGggLT0gMTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGggKiAzNjAsXG5cdFx0cyAqIDEwMCxcblx0XHR2ICogMTAwXG5cdF07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2VcbiAqICovXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0cmV0dXJuIChcblx0XHRNYXRoLnBvdyh4WzBdIC0geVswXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMV0gLSB5WzFdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsyXSAtIHlbMl0sIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHR2YXIgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHR2YXIgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAodmFyIGtleXdvcmQgaW4gY3NzS2V5d29yZHMpIHtcblx0XHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5d29yZCkpIHtcblx0XHRcdHZhciB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn18W2EtZjAtOV17M30vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGNvbG9yU3RyaW5nID0gbWF0Y2hbMF07XG5cblx0aWYgKG1hdGNoWzBdLmxlbmd0aCA9PT0gMykge1xuXHRcdGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoY2hhcikge1xuXHRcdFx0cmV0dXJuIGNoYXIgKyBjaGFyO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuXG5jb252ZXJ0LmdyYXkucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFthcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc2wgPSBjb252ZXJ0LmdyYXkuaHN2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFswLCAwLCBhcmdzWzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5od2IgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDEwMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuY215ayA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMCwgMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkubGFiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFtncmF5WzBdLCAwLCAwXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oZXggPSBmdW5jdGlvbiAoZ3JheSkge1xuXHR2YXIgdmFsID0gTWF0aC5yb3VuZChncmF5WzBdIC8gMTAwICogMjU1KSAmIDB4RkY7XG5cdHZhciBpbnRlZ2VyID0gKHZhbCA8PCAxNikgKyAodmFsIDw8IDgpICsgdmFsO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5yZ2IuZ3JheSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHZhbCA9IChyZ2JbMF0gKyByZ2JbMV0gKyByZ2JbMl0pIC8gMztcblx0cmV0dXJuIFt2YWwgLyAyNTUgKiAxMDBdO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjb252ZXJzaW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29udmVyc2lvbnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzXCIpO1xudmFyIHJvdXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yb3V0ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanNcIik7XG5cbnZhciBjb252ZXJ0ID0ge307XG5cbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbihhcmdzKTtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHR2YXIgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyB3ZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yICh2YXIgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0Y29udmVydFtmcm9tTW9kZWxdID0ge307XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0ubGFiZWxzfSk7XG5cblx0dmFyIHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdHZhciByb3V0ZU1vZGVscyA9IE9iamVjdC5rZXlzKHJvdXRlcyk7XG5cblx0cm91dGVNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAodG9Nb2RlbCkge1xuXHRcdHZhciBmbiA9IHJvdXRlc1t0b01vZGVsXTtcblxuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG5cdH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjb252ZXJzaW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29udmVyc2lvbnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzXCIpO1xuXG4vKlxuXHR0aGlzIGZ1bmN0aW9uIHJvdXRlcyBhIG1vZGVsIHRvIGFsbCBvdGhlciBtb2RlbHMuXG5cblx0YWxsIGZ1bmN0aW9ucyB0aGF0IGFyZSByb3V0ZWQgaGF2ZSBhIHByb3BlcnR5IGAuY29udmVyc2lvbmAgYXR0YWNoZWRcblx0dG8gdGhlIHJldHVybmVkIHN5bnRoZXRpYyBmdW5jdGlvbi4gVGhpcyBwcm9wZXJ0eSBpcyBhbiBhcnJheVxuXHRvZiBzdHJpbmdzLCBlYWNoIHdpdGggdGhlIHN0ZXBzIGluIGJldHdlZW4gdGhlICdmcm9tJyBhbmQgJ3RvJ1xuXHRjb2xvciBtb2RlbHMgKGluY2x1c2l2ZSkuXG5cblx0Y29udmVyc2lvbnMgdGhhdCBhcmUgbm90IHBvc3NpYmxlIHNpbXBseSBhcmUgbm90IGluY2x1ZGVkLlxuKi9cblxuZnVuY3Rpb24gYnVpbGRHcmFwaCgpIHtcblx0dmFyIGdyYXBoID0ge307XG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcblx0dmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIE1JVCBsaWNlbnNlICovXG52YXIgY29sb3JOYW1lcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yLW5hbWUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanNcIik7XG52YXIgc3dpenpsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHNpbXBsZS1zd2l6emxlICovIFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanNcIik7XG5cbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcblxuLy8gY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcblx0aWYgKGNvbG9yTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0XHRyZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xuXHR9XG59XG5cbnZhciBjcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHR0bzoge30sXG5cdGdldDoge31cbn07XG5cbmNzLmdldCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIHByZWZpeCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0dmFyIHZhbDtcblx0dmFyIG1vZGVsO1xuXHRzd2l0Y2ggKHByZWZpeCkge1xuXHRcdGNhc2UgJ2hzbCc6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHNsKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdoc2wnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaHdiJzpcblx0XHRcdHZhbCA9IGNzLmdldC5od2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2h3Yic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFsID0gY3MuZ2V0LnJnYihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAncmdiJztcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0aWYgKCF2YWwpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7bW9kZWw6IG1vZGVsLCB2YWx1ZTogdmFsfTtcbn07XG5cbmNzLmdldC5yZ2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgYWJiciA9IC9eIyhbYS1mMC05XXszLDR9KSQvaTtcblx0dmFyIGhleCA9IC9eIyhbYS1mMC05XXs2fSkoW2EtZjAtOV17Mn0pPyQvaTtcblx0dmFyIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIga2V5d29yZCA9IC8oXFxEKykvO1xuXG5cdHZhciByZ2IgPSBbMCwgMCwgMCwgMV07XG5cdHZhciBtYXRjaDtcblx0dmFyIGk7XG5cdHZhciBoZXhBbHBoYTtcblxuXHRpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuXHRcdGhleEFscGhhID0gbWF0Y2hbMl07XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9zbGljZS12cy1zdWJzdHItdnMtc3Vic3RyaW5nLW1ldGhvZHMtbG9uZy1zdHJpbmcvMTlcblx0XHRcdHZhciBpMiA9IGkgKiAyO1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaTIsIGkyICsgMiksIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicikpIHtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXHRcdGhleEFscGhhID0gbWF0Y2hbM107XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSArIGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0sIDApO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdID09PSAndHJhbnNwYXJlbnQnKSB7XG5cdFx0XHRyZXR1cm4gWzAsIDAsIDAsIDBdO1xuXHRcdH1cblxuXHRcdHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuXG5cdFx0aWYgKCFyZ2IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJnYlszXSA9IDE7XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHJnYltpXSA9IGNsYW1wKHJnYltpXSwgMCwgMjU1KTtcblx0fVxuXHRyZ2JbM10gPSBjbGFtcChyZ2JbM10sIDAsIDEpO1xuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jcy5nZXQuaHNsID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/KD86XFxkKlxcLik/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKHBhcnNlRmxvYXQobWF0Y2hbMV0pICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgcyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBsID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXG5cdFx0cmV0dXJuIFtoLCBzLCBsLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MuZ2V0Lmh3YiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQqW1xcLl0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKChwYXJzZUZsb2F0KG1hdGNoWzFdKSAlIDM2MCkgKyAzNjApICUgMzYwO1xuXHRcdHZhciB3ID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGIgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cdFx0cmV0dXJuIFtoLCB3LCBiLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MudG8uaGV4ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gKFxuXHRcdCcjJyArXG5cdFx0aGV4RG91YmxlKHJnYmFbMF0pICtcblx0XHRoZXhEb3VibGUocmdiYVsxXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzJdKSArXG5cdFx0KHJnYmFbM10gPCAxXG5cdFx0XHQ/IChoZXhEb3VibGUoTWF0aC5yb3VuZChyZ2JhWzNdICogMjU1KSkpXG5cdFx0XHQ6ICcnKVxuXHQpO1xufTtcblxuY3MudG8ucmdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJyknXG5cdFx0OiAncmdiYSgnICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLnJnYi5wZXJjZW50ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgciA9IE1hdGgucm91bmQocmdiYVswXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBnID0gTWF0aC5yb3VuZChyZ2JhWzFdIC8gMjU1ICogMTAwKTtcblx0dmFyIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0gLyAyNTUgKiAxMDApO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclKSdcblx0XHQ6ICdyZ2JhKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8uaHNsID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHNsYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblx0cmV0dXJuIGhzbGEubGVuZ3RoIDwgNCB8fCBoc2xhWzNdID09PSAxXG5cdFx0PyAnaHNsKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSknXG5cdFx0OiAnaHNsYSgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUsICcgKyBoc2xhWzNdICsgJyknO1xufTtcblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmNzLnRvLmh3YiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGh3YmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIGEgPSAnJztcblx0aWYgKGh3YmEubGVuZ3RoID49IDQgJiYgaHdiYVszXSAhPT0gMSkge1xuXHRcdGEgPSAnLCAnICsgaHdiYVszXTtcblx0fVxuXG5cdHJldHVybiAnaHdiKCcgKyBod2JhWzBdICsgJywgJyArIGh3YmFbMV0gKyAnJSwgJyArIGh3YmFbMl0gKyAnJScgKyBhICsgJyknO1xufTtcblxuY3MudG8ua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufTtcblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG5cdHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gJzAnICsgc3RyIDogc3RyO1xufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGNvbG9yU3RyaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29sb3Itc3RyaW5nICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL2luZGV4LmpzXCIpO1xudmFyIGNvbnZlcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb2xvci1jb252ZXJ0ICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9pbmRleC5qc1wiKTtcblxudmFyIF9zbGljZSA9IFtdLnNsaWNlO1xuXG52YXIgc2tpcHBlZE1vZGVscyA9IFtcblx0Ly8gdG8gYmUgaG9uZXN0LCBJIGRvbid0IHJlYWxseSBmZWVsIGxpa2Uga2V5d29yZCBiZWxvbmdzIGluIGNvbG9yIGNvbnZlcnQsIGJ1dCBlaC5cblx0J2tleXdvcmQnLFxuXG5cdC8vIGdyYXkgY29uZmxpY3RzIHdpdGggc29tZSBtZXRob2QgbmFtZXMsIGFuZCBoYXMgaXRzIG93biBtZXRob2QgZGVmaW5lZC5cblx0J2dyYXknLFxuXG5cdC8vIHNob3VsZG4ndCByZWFsbHkgYmUgaW4gY29sb3ItY29udmVydCBlaXRoZXIuLi5cblx0J2hleCdcbl07XG5cbnZhciBoYXNoZWRNb2RlbEtleXMgPSB7fTtcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGhhc2hlZE1vZGVsS2V5c1tfc2xpY2UuY2FsbChjb252ZXJ0W21vZGVsXS5sYWJlbHMpLnNvcnQoKS5qb2luKCcnKV0gPSBtb2RlbDtcbn0pO1xuXG52YXIgbGltaXRlcnMgPSB7fTtcblxuZnVuY3Rpb24gQ29sb3Iob2JqLCBtb2RlbCkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmosIG1vZGVsKTtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiBtb2RlbCBpbiBza2lwcGVkTW9kZWxzKSB7XG5cdFx0bW9kZWwgPSBudWxsO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmICEobW9kZWwgaW4gY29udmVydCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW9kZWw6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHR2YXIgaTtcblx0dmFyIGNoYW5uZWxzO1xuXG5cdGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gWzAsIDAsIDBdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHRoaXMubW9kZWwgPSBvYmoubW9kZWw7XG5cdFx0dGhpcy5jb2xvciA9IG9iai5jb2xvci5zbGljZSgpO1xuXHRcdHRoaXMudmFscGhhID0gb2JqLnZhbHBoYTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHZhciByZXN1bHQgPSBjb2xvclN0cmluZy5nZXQob2JqKTtcblx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZzogJyArIG9iaik7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IHJlc3VsdC5tb2RlbDtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dGhpcy5jb2xvciA9IHJlc3VsdC52YWx1ZS5zbGljZSgwLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2YgcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyByZXN1bHQudmFsdWVbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmIChvYmoubGVuZ3RoKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG1vZGVsIHx8ICdyZ2InO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbmV3QXJyID0gX3NsaWNlLmNhbGwob2JqLCAwLCBjaGFubmVscyk7XG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShuZXdBcnIsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmpbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IG9ialtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG5cdFx0Ly8gdGhpcyBpcyBhbHdheXMgUkdCIC0gY2FuIGJlIGNvbnZlcnRlZCBsYXRlciBvbi5cblx0XHRvYmogJj0gMHhGRkZGRkY7XG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbXG5cdFx0XHQob2JqID4+IDE2KSAmIDB4RkYsXG5cdFx0XHQob2JqID4+IDgpICYgMHhGRixcblx0XHRcdG9iaiAmIDB4RkZcblx0XHRdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cdFx0aWYgKCdhbHBoYScgaW4gb2JqKSB7XG5cdFx0XHRrZXlzLnNwbGljZShrZXlzLmluZGV4T2YoJ2FscGhhJyksIDEpO1xuXHRcdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqLmFscGhhID09PSAnbnVtYmVyJyA/IG9iai5hbHBoYSA6IDA7XG5cdFx0fVxuXG5cdFx0dmFyIGhhc2hlZEtleXMgPSBrZXlzLnNvcnQoKS5qb2luKCcnKTtcblx0XHRpZiAoIShoYXNoZWRLZXlzIGluIGhhc2hlZE1vZGVsS2V5cykpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IGhhc2hlZE1vZGVsS2V5c1toYXNoZWRLZXlzXTtcblxuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblx0XHR2YXIgY29sb3IgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb2xvci5wdXNoKG9ialtsYWJlbHNbaV1dKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KGNvbG9yKTtcblx0fVxuXG5cdC8vIHBlcmZvcm0gbGltaXRhdGlvbnMgKGNsYW1waW5nLCBldGMuKVxuXHRpZiAobGltaXRlcnNbdGhpcy5tb2RlbF0pIHtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHZhciBsaW1pdCA9IGxpbWl0ZXJzW3RoaXMubW9kZWxdW2ldO1xuXHRcdFx0aWYgKGxpbWl0KSB7XG5cdFx0XHRcdHRoaXMuY29sb3JbaV0gPSBsaW1pdCh0aGlzLmNvbG9yW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aGlzLnZhbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMudmFscGhhKSk7XG5cblx0aWYgKE9iamVjdC5mcmVlemUpIHtcblx0XHRPYmplY3QuZnJlZXplKHRoaXMpO1xuXHR9XG59XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0dG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJpbmcoKTtcblx0fSxcblxuXHR0b0pTT046IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpc1t0aGlzLm1vZGVsXSgpO1xuXHR9LFxuXG5cdHN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5tb2RlbCBpbiBjb2xvclN0cmluZy50byA/IHRoaXMgOiB0aGlzLnJnYigpO1xuXHRcdHNlbGYgPSBzZWxmLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvW3NlbGYubW9kZWxdKGFyZ3MpO1xuXHR9LFxuXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMucmdiKCkucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8ucmdiLnBlcmNlbnQoYXJncyk7XG5cdH0sXG5cblx0YXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxwaGEgPT09IDEgPyB0aGlzLmNvbG9yLnNsaWNlKCkgOiB0aGlzLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdH0sXG5cblx0b2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHRyZXN1bHRbbGFiZWxzW2ldXSA9IHRoaXMuY29sb3JbaV07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXN1bHQuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXG5cdHVuaXRBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJnYlswXSAvPSAyNTU7XG5cdFx0cmdiWzFdIC89IDI1NTtcblx0XHRyZ2JbMl0gLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IucHVzaCh0aGlzLnZhbHBoYSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHR1bml0T2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkub2JqZWN0KCk7XG5cdFx0cmdiLnIgLz0gMjU1O1xuXHRcdHJnYi5nIC89IDI1NTtcblx0XHRyZ2IuYiAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0cm91bmQ6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHRwbGFjZXMgPSBNYXRoLm1heChwbGFjZXMgfHwgMCwgMCk7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLm1hcChyb3VuZFRvUGxhY2UocGxhY2VzKSkuY29uY2F0KHRoaXMudmFscGhhKSwgdGhpcy5tb2RlbCk7XG5cdH0sXG5cblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLmNvbmNhdChNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWwpKSksIHRoaXMubW9kZWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnZhbHBoYTtcblx0fSxcblxuXHQvLyByZ2Jcblx0cmVkOiBnZXRzZXQoJ3JnYicsIDAsIG1heGZuKDI1NSkpLFxuXHRncmVlbjogZ2V0c2V0KCdyZ2InLCAxLCBtYXhmbigyNTUpKSxcblx0Ymx1ZTogZ2V0c2V0KCdyZ2InLCAyLCBtYXhmbigyNTUpKSxcblxuXHRodWU6IGdldHNldChbJ2hzbCcsICdoc3YnLCAnaHNsJywgJ2h3YicsICdoY2cnXSwgMCwgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gKCh2YWwgJSAzNjApICsgMzYwKSAlIDM2MDsgfSksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYnJhY2Utc3R5bGVcblxuXHRzYXR1cmF0aW9ubDogZ2V0c2V0KCdoc2wnLCAxLCBtYXhmbigxMDApKSxcblx0bGlnaHRuZXNzOiBnZXRzZXQoJ2hzbCcsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHNhdHVyYXRpb252OiBnZXRzZXQoJ2hzdicsIDEsIG1heGZuKDEwMCkpLFxuXHR2YWx1ZTogZ2V0c2V0KCdoc3YnLCAyLCBtYXhmbigxMDApKSxcblxuXHRjaHJvbWE6IGdldHNldCgnaGNnJywgMSwgbWF4Zm4oMTAwKSksXG5cdGdyYXk6IGdldHNldCgnaGNnJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0d2hpdGU6IGdldHNldCgnaHdiJywgMSwgbWF4Zm4oMTAwKSksXG5cdHdibGFjazogZ2V0c2V0KCdod2InLCAyLCBtYXhmbigxMDApKSxcblxuXHRjeWFuOiBnZXRzZXQoJ2NteWsnLCAwLCBtYXhmbigxMDApKSxcblx0bWFnZW50YTogZ2V0c2V0KCdjbXlrJywgMSwgbWF4Zm4oMTAwKSksXG5cdHllbGxvdzogZ2V0c2V0KCdjbXlrJywgMiwgbWF4Zm4oMTAwKSksXG5cdGJsYWNrOiBnZXRzZXQoJ2NteWsnLCAzLCBtYXhmbigxMDApKSxcblxuXHR4OiBnZXRzZXQoJ3h5eicsIDAsIG1heGZuKDEwMCkpLFxuXHR5OiBnZXRzZXQoJ3h5eicsIDEsIG1heGZuKDEwMCkpLFxuXHR6OiBnZXRzZXQoJ3h5eicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGw6IGdldHNldCgnbGFiJywgMCwgbWF4Zm4oMTAwKSksXG5cdGE6IGdldHNldCgnbGFiJywgMSksXG5cdGI6IGdldHNldCgnbGFiJywgMiksXG5cblx0a2V5d29yZDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnZlcnRbdGhpcy5tb2RlbF0ua2V5d29yZCh0aGlzLmNvbG9yKTtcblx0fSxcblxuXHRoZXg6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5oZXgodGhpcy5yZ2IoKS5yb3VuZCgpLmNvbG9yKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZXR1cm4gKChyZ2JbMF0gJiAweEZGKSA8PCAxNikgfCAoKHJnYlsxXSAmIDB4RkYpIDw8IDgpIHwgKHJnYlsyXSAmIDB4RkYpO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcblx0fSxcblxuXHRjb250cmFzdDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWZcblx0XHR2YXIgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuXHRcdHZhciBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcblxuXHRcdGlmIChsdW0xID4gbHVtMikge1xuXHRcdFx0cmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpO1xuXHRcdH1cblxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGlzRGFyazogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFlJUSBlcXVhdGlvbiBmcm9tIGh0dHA6Ly8yNHdheXMub3JnLzIwMTAvY2FsY3VsYXRpbmctY29sb3ItY29udHJhc3Rcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0aXNMaWdodDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAhdGhpcy5pc0RhcmsoKTtcblx0fSxcblxuXHRuZWdhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiLmNvbG9yW2ldID0gMjU1IC0gcmdiLmNvbG9yW2ldO1xuXHRcdH1cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdGxpZ2h0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSArPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRhcmtlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdIC09IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSArPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRlc2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSAtPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHdoaXRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzFdICs9IGh3Yi5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzJdICs9IGh3Yi5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0Z3JheXNjYWxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0cmV0dXJuIENvbG9yLnJnYih2YWwsIHZhbCwgdmFsKTtcblx0fSxcblxuXHRmYWRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSAtICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0b3BhcXVlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgKyAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdHJvdGF0ZTogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHR2YXIgaHVlID0gaHNsLmNvbG9yWzBdO1xuXHRcdGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcblx0XHRodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuXHRcdGhzbC5jb2xvclswXSA9IGh1ZTtcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdC8vIHBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuXHRcdHZhciBjb2xvcjEgPSBtaXhpbkNvbG9yLnJnYigpO1xuXHRcdHZhciBjb2xvcjIgPSB0aGlzLnJnYigpO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gQ29sb3IucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpLFxuXHRcdFx0XHRjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9XG59O1xuXG4vLyBtb2RlbCBjb252ZXJzaW9uIG1ldGhvZHMgYW5kIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGlmIChza2lwcGVkTW9kZWxzLmluZGV4T2YobW9kZWwpICE9PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXG5cdC8vIGNvbnZlcnNpb24gbWV0aG9kc1xuXHRDb2xvci5wcm90b3R5cGVbbW9kZWxdID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzLm1vZGVsID09PSBtb2RlbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihhcmd1bWVudHMsIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3QWxwaGEgPSB0eXBlb2YgYXJndW1lbnRzW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBjaGFubmVscyA6IHRoaXMudmFscGhhO1xuXHRcdHJldHVybiBuZXcgQ29sb3IoYXNzZXJ0QXJyYXkoY29udmVydFt0aGlzLm1vZGVsXVttb2RlbF0ucmF3KHRoaXMuY29sb3IpKS5jb25jYXQobmV3QWxwaGEpLCBtb2RlbCk7XG5cdH07XG5cblx0Ly8gJ3N0YXRpYycgY29uc3RydWN0aW9uIG1ldGhvZHNcblx0Q29sb3JbbW9kZWxdID0gZnVuY3Rpb24gKGNvbG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbG9yID0gemVyb0FycmF5KF9zbGljZS5jYWxsKGFyZ3VtZW50cyksIGNoYW5uZWxzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihjb2xvciwgbW9kZWwpO1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIHJvdW5kVG8obnVtLCBwbGFjZXMpIHtcblx0cmV0dXJuIE51bWJlcihudW0udG9GaXhlZChwbGFjZXMpKTtcbn1cblxuZnVuY3Rpb24gcm91bmRUb1BsYWNlKHBsYWNlcykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG51bSkge1xuXHRcdHJldHVybiByb3VuZFRvKG51bSwgcGxhY2VzKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0c2V0KG1vZGVsLCBjaGFubmVsLCBtb2RpZmllcikge1xuXHRtb2RlbCA9IEFycmF5LmlzQXJyYXkobW9kZWwpID8gbW9kZWwgOiBbbW9kZWxdO1xuXG5cdG1vZGVsLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcblx0XHQobGltaXRlcnNbbV0gfHwgKGxpbWl0ZXJzW21dID0gW10pKVtjaGFubmVsXSA9IG1vZGlmaWVyO1xuXHR9KTtcblxuXHRtb2RlbCA9IG1vZGVsWzBdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0dmFyIHJlc3VsdDtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdFx0dmFsID0gbW9kaWZpZXIodmFsKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKTtcblx0XHRcdHJlc3VsdC5jb2xvcltjaGFubmVsXSA9IHZhbDtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKS5jb2xvcltjaGFubmVsXTtcblx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdHJlc3VsdCA9IG1vZGlmaWVyKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn1cblxuZnVuY3Rpb24gbWF4Zm4obWF4KSB7XG5cdHJldHVybiBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIHYpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QXJyYXkodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXTtcbn1cblxuZnVuY3Rpb24gemVyb0FycmF5KGFyciwgbGVuZ3RoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodHlwZW9mIGFycltpXSAhPT0gJ251bWJlcicpIHtcblx0XHRcdGFycltpXSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9pcy1hcnJheWlzaC9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9pcy1hcnJheWlzaC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJyYXlpc2gob2JqKSB7XG5cdGlmICghb2JqIHx8IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkob2JqKSB8fFxuXHRcdChvYmoubGVuZ3RoID49IDAgJiYgKG9iai5zcGxpY2UgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuXHRcdFx0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCAob2JqLmxlbmd0aCAtIDEpKSAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPT0gJ1N0cmluZycpKSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zd2l6emxlL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zd2l6emxlL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBpc0FycmF5aXNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgaXMtYXJyYXlpc2ggKi8gXCIuL25vZGVfbW9kdWxlcy9pcy1hcnJheWlzaC9pbmRleC5qc1wiKTtcblxudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBzd2l6emxlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzd2l6emxlKGFyZ3MpIHtcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciBhcmcgPSBhcmdzW2ldO1xuXG5cdFx0aWYgKGlzQXJyYXlpc2goYXJnKSkge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vamF2YXNjcmlwdC1hcnJheS1jb25jYXQtdnMtcHVzaC85OFxuXHRcdFx0cmVzdWx0cyA9IGNvbmNhdC5jYWxsKHJlc3VsdHMsIHNsaWNlLmNhbGwoYXJnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuc3dpenpsZS53cmFwID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZuKHN3aXp6bGUoYXJndW1lbnRzKSk7XG5cdH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBEeW5hbWljSGVhdExheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWFya2VyX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vbWFya2VyL01hcmtlcnNMYXllciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHNcIik7XG5cbmNsYXNzIER5bmFtaWNIZWF0TGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZHluYW1pY0RhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5keW5hbWljRGF0YUxpc3QgPSBkeW5hbWljRGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuYztcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgfVxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmF1dG8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGF1c2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiog5pKt5pS+5a6M5q+VICovXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA+PSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcbiAgICB9XG4gICAgcHJldigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcC0tO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID1cbiAgICAgICAgICAgICh0aGlzLmN1cnJlbnRTdGVwICsgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoKSAlXG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKys7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSB0aGlzLmN1cnJlbnRTdGVwICUgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIH1cbiAgICBnb3RvU3RlcChzdGVwKSB7XG4gICAgICAgIGlmIChzdGVwIDwgMCB8fCBzdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBnb3RvU3RlcCgke3N0ZXB9KTogc3RlcCBpcyBvdXQgb2YgaW5kZXggYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllci5zZXREYXRhKHRoaXMuZHluYW1pY0RhdGFMaXN0W3N0ZXBdKTtcbiAgICAgICAgdGhpcy5sYXllci5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRMYXllcigpO1xuICAgICAgICB0aGlzLmxheWVyLmRyYXcoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGluaXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG86IGZhbHNlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDEwMDAsXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRMYXllcigpIHtcbiAgICAgICAgY29uc3QgbWFya2Vyc0xheWVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJlbmRlclR5cGU6ICdoZWF0JyxcbiAgICAgICAgICAgIGhlYXRPcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGF5ZXIgPSBuZXcgX21hcmtlcl9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0odGhpcy5tYXAsIHRoaXMuZHluYW1pY0RhdGFMaXN0WzBdLCBtYXJrZXJzTGF5ZXJPcHRpb25zLCB0aGlzLmNoYW5uZWxGdW5jKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXI7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQsIE1hcmtlciwgTWFya2Vyc0xheWVyLCBNYXJrZXJzQnVmZmVyTGF5ZXIsIFBvbHlsaW5lLCBQb2x5bGluZXNMYXllciwgUG9seWxpbmVzQnVmZmVyTGF5ZXIsIFBvbHlnb24sIFBvbHlnb25zTGF5ZXIsIEdyaWRzTGF5ZXIsIER5bmFtaWNIZWF0TGF5ZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21hcmtlcl9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWFya2VyL01hcmtlciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNYXJrZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbWFya2VyX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWFya2VyX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tYXJrZXIvTWFya2Vyc0xheWVyICovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk1hcmtlcnNMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tYXJrZXJfTWFya2Vyc0J1ZmZlckxheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTWFya2Vyc0J1ZmZlckxheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX21hcmtlcl9NYXJrZXJzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlsaW5lX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlsaW5lL1BvbHlsaW5lICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5bGluZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5bGluZV9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWxpbmVfUG9seWxpbmVzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIgKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlsaW5lc0xheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlsaW5lX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5bGluZV9Qb2x5bGluZXNCdWZmZXJMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllciAqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0J1ZmZlckxheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUG9seWxpbmVzQnVmZmVyTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWxpbmVfUG9seWxpbmVzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5Z29uL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5Z29uXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlnb24vUG9seWdvbnNMYXllciAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlnb25zTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWdvbi9Hcmlkc0xheWVyICovIFwiLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiR3JpZHNMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIgKi8gXCIuL3NyYy9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJEeW5hbWljSGVhdExheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh7XG4gICAgTWFya2VyOiBfbWFya2VyX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSxcbiAgICBNYXJrZXJzTGF5ZXI6IF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLFxuICAgIE1hcmtlcnNCdWZmZXJMYXllcjogX21hcmtlcl9NYXJrZXJzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWxpbmU6IF9wb2x5bGluZV9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5bGluZXNMYXllcjogX3BvbHlsaW5lX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19bXCJkZWZhdWx0XCJdLFxuICAgIFBvbHlsaW5lc0J1ZmZlckxheWVyOiBfcG9seWxpbmVfUG9seWxpbmVzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWdvbjogX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5Z29uc0xheWVyOiBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19bXCJkZWZhdWx0XCJdLFxuICAgIEdyaWRzTGF5ZXI6IF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX1tcImRlZmF1bHRcIl0sXG4gICAgRHluYW1pY0hlYXRMYXllcjogX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fW1wiZGVmYXVsdFwiXSxcbn0pO1xuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWFya2VyL01hcmtlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21hcmtlci9NYXJrZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBNYXJrZXI7IH0pO1xuY2xhc3MgTWFya2VyIGV4dGVuZHMgTC5NYXJrZXIge1xuICAgIGNvbnN0cnVjdG9yKGxhdGxuZywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmcsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fX2RhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGE7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTWFya2Vyc0J1ZmZlckxheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01hcmtlcnNMYXllciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHNcIik7XG5cbmNsYXNzIE1hcmtlcnNCdWZmZXJMYXllciBleHRlbmRzIF9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ21hcmtlckJ1ZmZlcic7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRCdWZmZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgcmFkaXVzOiAxMDAwLFxuICAgICAgICAgICAgc3Ryb2tlOiB0cnVlLFxuICAgICAgICAgICAgd2VpZ2h0OiAxLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgeyBidWZmZXJPcHRpb25zOiBkZWZhdWx0QnVmZmVyT3B0aW9ucyB9LCBvcHRpb25zKTtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMuY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yO1xuICAgICAgICB0aGlzLmluaXRNYXJrZXJzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmJ1ZmZlckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hcmtlckxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpO1xuICAgICAgICB0aGlzLmJ1ZmZlckxheWVyID0gdGhpcy5jb25maWdCdWZmZXJMYXllcigpO1xuICAgICAgICB0aGlzLmxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5idWZmZXJMYXllcik7XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWFya2Vycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2LmV4dGVuZChjdXJyLmdldExhdExuZygpLnRvQm91bmRzKHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLnJhZGl1cykpO1xuICAgICAgICB9LCB0aGlzLm1hcmtlcnNbMF0uZ2V0TGF0TG5nKCkudG9Cb3VuZHModGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMucmFkaXVzKSk7XG4gICAgfVxuICAgIGNvbmZpZ0J1ZmZlckxheWVyKCkge1xuICAgICAgICBjb25zdCBncm91cExheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNpcmNsZUxheWVyID0gTC5jaXJjbGUobWFya2VyLmdldExhdExuZygpLCB0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJ1ZmZlclRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5idWZmZXJUb29sdGlwQXR0cl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwTGF5ZXIuYWRkTGF5ZXIoY2lyY2xlTGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyb3VwTGF5ZXI7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTWFya2Vyc0xheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL3V0aWxzL2luZGV4ICovIFwiLi9zcmMvdXRpbHMvaW5kZXgudHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NYXJrZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2VyLnRzXCIpO1xuXG5cbmNsYXNzIE1hcmtlcnNMYXllciB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJlbmRlclR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICByZW5kZXJQb2ludENvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICAgICAgICBpY29uVHlwZTogJ3VuaWNvZGUnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyMCwgMjBdLFxuICAgICAgICAgICAgaWNvbkNsYXNzOiAnaWNvbmZvbnQnLFxuICAgICAgICAgICAgaWNvbkNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgICAgICBpY29uQW5jaG9yOiBbMTAsIDIwXSxcbiAgICAgICAgICAgIHBvcHVwQXR0cjogeyBsYWJlbDogJ+WQjeensCcsIHZhbHVlOiAnbmFtZScgfSxcbiAgICAgICAgICAgIHRvb2x0aXBBdHRyOiAnbmFtZScsXG4gICAgICAgICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgICAgICAgaXNDbHVzdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGhlYXRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgICAgIG1pbk9wYWNpdHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkTWFya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlciA9IG51bGw7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLm1hcmtlckxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWF0TGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNsdXN0ZXJMYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuem9vbVN0YXJ0Q2IgPSB0aGlzLl96b29tU3RhcnRDYi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnpvb21FbmRDYiA9IHRoaXMuX3pvb21FbmRDYi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBkcmF3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pbml0TWFya2VycygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5sYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDkvJjlhYjliKTmlq0gaXNDbHVzdGVyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyICYmIHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwb2ludCc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnTWFya2VyTGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsdXN0ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0NsdXN0ZXJMYXllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnSGVhdExheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclR5cGV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGE7XG4gICAgfVxuICAgIHNldE9wdGlvbnMob3B0aW9ucywgcmVkcmF3ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAocmVkcmF3KSB7XG4gICAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCkpO1xuICAgIH1cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZXJzLm1hcCgobWFya2VyKSA9PiBbbWFya2VyLmdldExhdExuZygpLmxhdCwgbWFya2VyLmdldExhdExuZygpLmxuZ10pO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFwLm9mZignem9vbXN0YXJ0JywgdGhpcy56b29tU3RhcnRDYik7XG4gICAgICAgIHRoaXMubWFwLm9mZignem9vbWVuZCcsIHRoaXMuem9vbUVuZENiKTtcbiAgICB9XG4gICAgdG9nZ2xlVmlzaWJsZSh2aXNpYmxlKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pY29uQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgY2hhbmdlSWNvbihpY29uVW5pY29kZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGUgPSBpY29uVW5pY29kZTtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcGl0Y2goaWQpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgICAgICAgaWYgKG1hcmtlci5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfem9vbVN0YXJ0Q2IoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50JyAmJiAhdGhpcy5vcHRpb25zLmlzQ2x1c3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3pvb21FbmRDYigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbWFya2VyJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnICYmICF0aGlzLm9wdGlvbnMuaXNDbHVzdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5riy5p+T5Li65pWj54K55Zu+ICovXG4gICAgY29uZmlnTWFya2VyTGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtlckxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbnZhc0ljb25MYXllciA9IEwuY2FudmFzSWNvbkxheWVyKHt9KS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIC8vIOa3u+WKoOeCueWHu+S6i+S7tlxuICAgICAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25DbGlja0xpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDmt7vliqAgaG92ZXIg5LqL5Lu2XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkhvdmVyTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgICAgICAgLy8g5LmL5YmN5pyJIGhvdmVyIOeahOWFs+mXrSB0b29sdGlwXG4gICAgICAgICAgICBpZiAodGhpcy5ob3ZlcmVkTWFya2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbWFya2VyO1xuICAgICAgICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlci5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlt7Lnu4/orr7nva4gdG9vbHRpcCDnm7TmjqXlsZXnpLogdG9vbHRpcFxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5vcGVuVG9vbHRpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5ZCm5YiZ57uR5a6aIHRvb2x0aXAg5bm25bGV56S6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIuYmluZFRvb2x0aXAoJycgKyB0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRNYXJrZXJzKHRoaXMubWFya2Vycyk7XG4gICAgICAgIC8vIOino+WGs+WIneasoea4suafk+S4jeWHuuWbvuagh+mXrumimFxuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLm1hcC5nZXRDZW50ZXIoKSk7XG4gICAgICAgIHRoaXMubWFya2VyTGF5ZXIgPSBjYW52YXNJY29uTGF5ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlckxheWVyO1xuICAgIH1cbiAgICBnZXRUb29sVGlwQ29udGVudChkYXRhKSB7XG4gICAgICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXTtcbiAgICB9XG4gICAgaW5pdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0TWFya2VycygpIHtcbiAgICAgICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKCk7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdO1xuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0oW1xuICAgICAgICAgICAgICAgIGxheWVyLmdldExhdExuZygpLmxhdCxcbiAgICAgICAgICAgICAgICBsYXllci5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgICAgICBdLCB7XG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKGRhdGEpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICAgICAgICBtYXJrZXIuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLm1hcC5vbignem9vbXN0YXJ0JywgdGhpcy56b29tU3RhcnRDYik7XG4gICAgICAgIHRoaXMubWFwLm9uKCd6b29tZW5kJywgdGhpcy56b29tRW5kQ2IpO1xuICAgICAgICB0aGlzLm1hcC5vbignY29udGV4dG1lbnUnLCBjb25zb2xlLmxvZyk7XG4gICAgfVxuICAgIC8vIOWkhOeQhiBtYXJrZXIg54K55Ye75LqL5Lu2XG4gICAgbWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcikge1xuICAgICAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBtYXJrZXI7XG4gICAgICAgIC8vIOWIoOmZpOWJjeS4gOS4quaUvuWkp+Wbvuagh1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmVGcm9tKHRoaXMubWFwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnlJ/miJDlvZPliY3mlL7lpKflm77moIdcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlciA9IG5ldyBfTWFya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKG1hcmtlci5nZXRMYXRMbmcoKSwge1xuICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRMYXJnZXJNYXJrZXJJY29uKG1hcmtlci5nZXREYXRhKCkpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXJcbiAgICAgICAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpXG4gICAgICAgICAgICAub3BlblBvcHVwKCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgbWFya2VyLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWRNYXJrZXIuZ2V0TGF0TG5nKCkpO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1tYXJrZXInLCBtYXJrZXIpO1xuICAgIH1cbiAgICBjb25maWdDbHVzdGVyTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWxleekuuiBmuWQiOWbvuWxglxuICAgICAgICBpZiAodGhpcy5jbHVzdGVyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2x1c3RlckxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2x1c3RlckxheWVyID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoe1xuICAgICAgICAgICAgaWNvbkNyZWF0ZUZ1bmN0aW9uOiB0aGlzLmljb25DcmVhdGVGdW5jdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbHVzdGVyTGF5ZXIuYWRkTGF5ZXJzKHRoaXMubWFya2Vycy5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBfTWFya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKG0uZ2V0TGF0TG5nKCksIHtcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmdldE1hcmtlckljb24obS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYXJrZXIuc2V0RGF0YShtLmdldERhdGEoKSk7XG4gICAgICAgICAgICBtYXJrZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pO1xuICAgICAgICAgICAgbWFya2VyLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSk7XG4gICAgICAgICAgICBtYXJrZXIub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtYXJrZXI7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2x1c3RlckxheWVyO1xuICAgIH1cbiAgICAvKiog5riy5p+T5Li654Ot5Yqb5Zu+ICovXG4gICAgY29uZmlnSGVhdExheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5oZWF0TGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhdExheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhdExuZyA9IG1hcmtlci5nZXRMYXRMbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbkF0dHIgPSB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLmRpbWVuc2lvbkF0dHI7XG4gICAgICAgICAgICBsZXQgYWx0ID0gKGRpbWVuc2lvbkF0dHIgJiYgbWFya2VyLmdldERhdGEoKVtkaW1lbnNpb25BdHRyXSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhbHQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgYWx0ID0gdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLm1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmtlci5zZXRMYXRMbmcoTC5sYXRMbmcobGF0TG5nLmxhdCwgbGF0TG5nLmxuZywgYWx0KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhlYXRMYXllciA9IEwuaGVhdExheWVyKHRoaXMubWFya2Vycy5tYXAoKGl0KSA9PiBpdC5nZXRMYXRMbmcoKSksIFxuICAgICAgICAvLyBUT0RPOiDkvb/nlKggbWVyZ2VDb25maWcg566A5YyWXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucywgeyBtaW5PcGFjaXR5OiAxIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhdExheWVyO1xuICAgIH1cbiAgICBnZXRMYXJnZXJNYXJrZXJJY29uKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgdHJ1ZSk7XG4gICAgfVxuICAgIGdldE1hcmtlckljb24oZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWFya2VySWNvbihkYXRhLCBmYWxzZSk7XG4gICAgfVxuICAgIC8qKiDojrflj5blvZPliY0gbWFya2VyIOmcgOimgeWxleekuueahCBpY29uICovXG4gICAgX2dldE1hcmtlckljb24oZGF0YSwgaXNMYXJnZXIpIHtcbiAgICAgICAgY29uc3QgaWNvblNpemUgPSB0aGlzLm9wdGlvbnMuaWNvblNpemU7XG4gICAgICAgIGNvbnN0IGljb25BbmNob3IgPSB0aGlzLm9wdGlvbnMuaWNvbkFuY2hvcjtcbiAgICAgICAgY29uc3QgbGFyZ2VySWNvblNpemUgPSBbaWNvblNpemVbMF0gKiAxLjUsIGljb25TaXplWzFdICogMS41XTtcbiAgICAgICAgY29uc3QgbGFyZ2VySWNvbkFuY2hvciA9IFtpY29uQW5jaG9yWzBdICogMS41LCBpY29uQW5jaG9yWzFdICogMS41XTtcbiAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvcjtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzoge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBMLmljb24oe1xuICAgICAgICAgICAgICAgIC8vICAgaWNvblVybDogdGhpcy5vcHRpb25zLmljb25JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAvLyAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICAgICAgLy8gICBpY29uQW5jaG9yLFxuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdmb250X2NsYXNzJzpcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgICAgICAgICAgICAgICBodG1sOiB0aGlzLmdldEN1c3RvbUljb25IVE1MKGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGlzTGFyZ2VyID8gJ2xhcmdlLWRpdi1pY29uLW1hcmtlcicgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkFuY2hvcjogaXNMYXJnZXIgPyBsYXJnZXJJY29uQW5jaG9yIDogaWNvbkFuY2hvcixcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBpc0xhcmdlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbMCwgLWxhcmdlckljb25BbmNob3JbMV0gLyAyXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBbMCwgLWljb25BbmNob3JbMV0gLyAyXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclR5cGUg5LiN6IO95Li6ICR7dGhpcy5vcHRpb25zLmljb25UeXBlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEN1c3RvbUljb25IVE1MKGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NpbmdsZSc6IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke29wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55SoIHN2Z1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzeW1ib2wnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbi1zeW1ib2xcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMub3B0aW9ucy5pY29uU3ltYm9sfVwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDkvb/nlKggdW5pY29kZVxuICAgICAgICAgICAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHtvcHRpb25zLmljb25Db2xvcn07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3B0aW9ucy5pY29uVW5pY29kZX1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3NlZ21lbnRlZCc6IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKX07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqCBzdmdcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24tc3ltYm9sXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLm9wdGlvbnMuaWNvblN5bWJvbH1cIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55SoIHVuaWNvZGVcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKX07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3B0aW9ucy5pY29uVW5pY29kZX1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclBvaW50Q29sb3JUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGV9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5O1xuICAgICAgICBsZXQgbWluVmFsID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKTtcbiAgICAgICAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IG1pblZhbDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcDtcbiAgICB9XG4gICAgZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSkge1xuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW3BhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICBnZXRQb3B1cENvbnRlbnQoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWNvbkNyZWF0ZUZ1bmN0aW9uKGNsdXN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgICBodG1sOiBgXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJsaWdodGVuXCJdKSh0aGlzLm9wdGlvbnMuaWNvbkNvbG9yKX07XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLm9wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA5cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAke2NsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGAsXG4gICAgICAgICAgICBpY29uU2l6ZTogWzQwLCA0MF0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5Z29uL0dyaWRzTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlnb24vR3JpZHNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gR3JpZHNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUG9seWdvbiAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbi50c1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfUG9seWdvbnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9Qb2x5Z29uc0xheWVyICovIFwiLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzXCIpO1xuXG5cbmNsYXNzIEdyaWRzTGF5ZXIgZXh0ZW5kcyBfUG9seWdvbnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXSB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgc3VwZXIobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpO1xuICAgICAgICB0aGlzLnByb3BNYXhMZW5ndGggPSAtMTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0dyaWRMYXllcigpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgLy8gdG9vbHRpcCDmnInlj6/og73pnIDopoHnm7TmjqXlsZXnpLrvvIzpnIDopoHlnKggcG9seWdvbiDmt7vliqDliLDlnLDlm77kuIrkuYvlkI7miY3lj6/ku6XvvIzmiYDku6XpnIDopoHlu7bov5/orr7nva5cbiAgICAgICAgdGhpcy5jb25maWdUb29sdGlwKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0b2dnbGVUb29sdGlwKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBpZiAocG9seWdvbi5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgICAgICAgICBwb2x5Z29uLmdldFRvb2x0aXAoKS5zZXRPcGFjaXR5KHZpc2libGUgPyAxIDogMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0RXZlbnQoKSB7XG4gICAgICAgIHRoaXMubWFwLm9uKCd6b29tJywgdGhpcy56b29tSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgY29uZmlnVG9vbHRpcCgpIHtcbiAgICAgICAgdGhpcy5wcm9wTWF4TGVuZ3RoID0gdGhpcy5nZXRQcm9wTWF4TGVuZ3RoKCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgICAgIHBvbHlnb24uYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5Z29uLmdldERhdGEoKSksIHtcbiAgICAgICAgICAgICAgICAgICAgcGVybWFuZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uZmlnR3JpZExheWVyKCkge1xuICAgICAgICB0aGlzLnBvbHlnb25MYXllciA9IEwubGF5ZXJHcm91cCgpO1xuICAgICAgICB0aGlzLnBvbHlnb25zID0gdGhpcy5wb2x5Z29ucy5tYXAoKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvcjtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWdvbkNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKHBvbHlnb24uZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g6YeN5paw5bqU55SoIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IG5ld1BvbHlnb24gPSBuZXcgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgbmV3UG9seWdvbi5zZXREYXRhKHBvbHlnb24uZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIG5ld1BvbHlnb24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgICAgICAgIG5ld1BvbHlnb24uYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG5ld1BvbHlnb24uZ2V0RGF0YSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3UG9seWdvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIuYWRkTGF5ZXIocG9seWdvbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uTGF5ZXI7XG4gICAgfVxuICAgIHpvb21IYW5kbGVyKCkge1xuICAgICAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5wb2x5Z29uc1swXTtcbiAgICAgICAgaWYgKCFwb2x5Z29uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2dnbGVUb29sdGlwKHRoaXMuZ2V0UmVjdGFuZ2xlV2lkdGgocG9seWdvbikgPlxuICAgICAgICAgICAgdGhpcy5nZXRUb29sdGlwTWF4V2lkdGgodGhpcy5wcm9wTWF4TGVuZ3RoKSk7XG4gICAgfVxuICAgIGdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb24pIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm1hcC5sYXRMbmdUb0xheWVyUG9pbnQocG9seWdvbi5nZXRCb3VuZHMoKS5nZXROb3J0aEVhc3QoKSkueCAtXG4gICAgICAgICAgICB0aGlzLm1hcC5sYXRMbmdUb0xheWVyUG9pbnQocG9seWdvbi5nZXRCb3VuZHMoKS5nZXRTb3V0aFdlc3QoKSkueCk7XG4gICAgfVxuICAgIGdldFRvb2x0aXBNYXhXaWR0aCh0ZXh0TGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB0ZXh0TGVuZ3RoICogMTIgKyAxNDtcbiAgICB9XG4gICAgZ2V0UHJvcE1heExlbmd0aCgpIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHRoaXMub3B0aW9ucy50b29sdGlwQXR0cjtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbnNcbiAgICAgICAgICAgIC5tYXAoKHBvbHlnb24pID0+IGAke3BvbHlnb24uZ2V0RGF0YSgpW3Byb3BdfWAubGVuZ3RoKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHByZXYsIGN1cnIpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5Z29uL1BvbHlnb24udHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlnb247IH0pO1xuY2xhc3MgUG9seWdvbiBleHRlbmRzIEwuUG9seWdvbiB7XG4gICAgY29uc3RydWN0b3IobGF0bG5ncywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb25zTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUG9seWdvbnNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG5cblxuY2xhc3MgUG9seWdvbnNMYXllciB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgICBmaWxsQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIHdlaWdodDogMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC41LFxuICAgICAgICAgICAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICAgICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWdvbic7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBudWxsO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbiA9IG51bGw7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRQb2x5Z29ucygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlnb25MYXllcigpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCkpO1xuICAgIH1cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvbHlnb25zLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSwgdGhpcy5wb2x5Z29uc1swXS5nZXRCb3VuZHMoKSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGVWaXNpYmxlKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICBwaXRjaChpZCkge1xuICAgICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIGlmIChwb2x5Z29uLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdEV2ZW50KCkgeyB9XG4gICAgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YSkge1xuICAgICAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl07XG4gICAgfVxuICAgIGdldFBvcHVwQ29udGVudChkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZV19YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5O1xuICAgICAgICBsZXQgbWluVmFsID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKTtcbiAgICAgICAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IG1pblZhbDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcDtcbiAgICB9XG4gICAgZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl07XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1twYXJzZUludCgnJyArICh2YWwgLSB0aGlzLnNlZ21lbnRlZE1pbikgLyB0aGlzLnNlZ21lbnRlZFN0ZXAsIDEwKV07XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG4gICAgcG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBwb2x5Z29uO1xuICAgICAgICAvLyDliKDpmaTliY3kuIDkuKogZm9jdXNcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnlJ/miJDlvZPliY0gZm9jdXNcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24gPSBuZXcgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0ocG9seWdvbi5nZXRMYXRMbmdzKCksIHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWdvbi5nZXREYXRhKCkpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24uYWRkVG8odGhpcy5tYXApO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvblxuICAgICAgICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChwb2x5Z29uLmdldERhdGEoKSkpXG4gICAgICAgICAgICAub3BlblBvcHVwKCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwb2x5Z29uLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5nZXRDZW50ZXIoKSk7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlnb24nLCBwb2x5Z29uKTtcbiAgICB9XG4gICAgaW5pdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRQb2x5Z29ucygpIHtcbiAgICAgICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXTtcbiAgICAgICAgICAgIGNvbnN0IHBvbHlnb24gPSBuZXcgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0obGF5ZXIuZ2V0TGF0TG5ncygpKTtcbiAgICAgICAgICAgIHBvbHlnb24uc2V0RGF0YShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucG9seWdvbnMucHVzaChwb2x5Z29uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbmZpZ1BvbHlnb25MYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucyA9IHRoaXMucG9seWdvbnMubWFwKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWdvbi5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyDph43mlrDlupTnlKggb3B0aW9uc1xuICAgICAgICAgICAgY29uc3QgbmV3UG9seWdvbiA9IG5ldyBfUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXShwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgICAgIG5ld1BvbHlnb24uYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5Z29uLmdldERhdGEoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3UG9seWdvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3UG9seWdvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIuYWRkTGF5ZXIocG9seWdvbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uTGF5ZXI7XG4gICAgfVxuICAgIGdldENvbG9yKGRhdGEsIG1vZGUpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlnb25Db2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGFya2VuXCJdKShjb2xvcik7XG4gICAgICAgICAgICBjYXNlICdsaWdodGVuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wibGlnaHRlblwiXSkoY29sb3IpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUG9seWxpbmU7IH0pO1xuY2xhc3MgUG9seWxpbmUgZXh0ZW5kcyBMLlBvbHlsaW5lIHtcbiAgICBjb25zdHJ1Y3RvcihsYXRsbmdzLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGxhdGxuZ3MsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fX2RhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGE7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0J1ZmZlckxheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0J1ZmZlckxheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlsaW5lc0J1ZmZlckxheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfUG9seWxpbmVzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUG9seWxpbmVzTGF5ZXIgKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50c1wiKTtcblxuY2xhc3MgUG9seWxpbmVzQnVmZmVyTGF5ZXIgZXh0ZW5kcyBfUG9seWxpbmVzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICAgICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgICAgICAgY29ycmlkb3I6IDEwMCxcbiAgICAgICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHlwZSA9ICdwb2x5bGluZUJ1ZmZlcic7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuYztcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2x5bGluZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMTtcbiAgICAgICAgLy8gdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pbml0UG9seWxpbmVzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWxpbmVCdWZmZXJMYXllcigpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCkpO1xuICAgIH1cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvbHlsaW5lcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLCB0aGlzLnBvbHlsaW5lc1swXS5nZXRCb3VuZHMoKSk7XG4gICAgfVxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICBjb25maWdQb2x5bGluZUJ1ZmZlckxheWVyKCkge1xuICAgICAgICB0aGlzLnBvbHlsaW5lTGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcbiAgICAgICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgICAgICAgIHBvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLm9wdGlvbnMucmVuZGVyUG9seWxpbmVDb2xvclR5cGUgPT09ICdzaW5nbGUnXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHBvbHlsaW5lQnVmZmVyID0gTC5jb3JyaWRvcihwb2x5bGluZS5nZXRMYXRMbmdzKCkubWFwKChsYXRMbmcpID0+IEwubGF0TG5nKFtsYXRMbmcubGF0LCBsYXRMbmcubG5nXSkpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICAgICAgICBwb2x5bGluZUJ1ZmZlci5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KHBvbHlsaW5lLmdldERhdGEoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKHBvbHlsaW5lQnVmZmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lTGF5ZXI7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlsaW5lc0xheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfUG9seWxpbmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUG9seWxpbmUgKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZS50c1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL3V0aWxzL2luZGV4ICovIFwiLi9zcmMvdXRpbHMvaW5kZXgudHNcIik7XG5cblxuY2xhc3MgUG9seWxpbmVzTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWxpbmUnO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuYztcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2x5bGluZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMTtcbiAgICAgICAgdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUgPSBudWxsO1xuICAgIH1cbiAgICBkcmF3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRQb2x5bGluZXMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5sYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdQb2x5bGluZUxheWVyKCk7XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZml0Qm91bmRzKCkge1xuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5nZXRCb3VuZHMoKSk7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWxpbmVzLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksIHRoaXMucG9seWxpbmVzWzBdLmdldEJvdW5kcygpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuICAgIHBpdGNoKGlkKSB7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBpZiAocG9seWxpbmUuZ2V0RGF0YSgpLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRQb2x5bGluZXMoKSB7XG4gICAgICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgICAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpO1xuICAgICAgICB0aGlzLnBvbHlsaW5lcyA9IHRoaXMuZGF0YUxpc3QubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXTtcbiAgICAgICAgICAgIC8vIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgICAgIC8vICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSlcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGNvbnN0IHBvbHlsaW5lID0gbmV3IF9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShsYXllci5nZXRMYXRMbmdzKCkpO1xuICAgICAgICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgICAgICAgcG9seWxpbmUuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBwb2x5bGluZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSkge1xuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW3BhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICBwb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSkge1xuICAgICAgICB0aGlzLmZvY3VzZWRQb2x5bGluZSA9IHBvbHlsaW5lO1xuICAgICAgICAvLyDliKDpmaTliY3kuIDkuKogZm9jdXNcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOeUn+aIkOW9k+WJjSBmb2N1c1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUgPSBuZXcgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKHBvbHlsaW5lLmdldExhdExuZ3MoKSwge1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKSxcbiAgICAgICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5bGluZS5nZXREYXRhKCksICdub3JtYWwnKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZVxuICAgICAgICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgICAgICAgLm9wZW5Qb3B1cCgpO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwb2x5bGluZS5jbG9zZVRvb2x0aXAoKTtcbiAgICAgICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmdldENlbnRlcigpKTtcbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stcG9seWxpbmUnLCBwb2x5bGluZSk7XG4gICAgfVxuICAgIGdldFRvb2xUaXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdO1xuICAgIH1cbiAgICBnZXRQb3B1cENvbnRlbnQoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uZmlnUG9seWxpbmVMYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3I7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKHBvbHlsaW5lLmdldERhdGEoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BvbHlsaW5lID0gbmV3IF9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShwb2x5bGluZS5nZXRMYXRMbmdzKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgbmV3UG9seWxpbmUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdQb2x5bGluZS5zZXREYXRhKHBvbHlsaW5lLmdldERhdGEoKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9seWxpbmUuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5bGluZS5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihuZXdQb2x5bGluZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZUxheWVyO1xuICAgIH1cbiAgICBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5O1xuICAgICAgICBsZXQgbWluVmFsID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKTtcbiAgICAgICAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IG1pblZhbDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcDtcbiAgICB9XG4gICAgZ2V0Q29sb3IoZGF0YSwgbW9kZSkge1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3I7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWxpbmVDb2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRhcmtlblwiXSkoY29sb3IpO1xuICAgICAgICAgICAgY2FzZSAnbGlnaHRlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3V0aWxzL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQsIGxpZ2h0ZW4sIGRhcmtlbiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJsaWdodGVuXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gbGlnaHRlbjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGFya2VuXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZGFya2VuOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29sb3IgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qc1wiKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvbG9yX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuXG5mdW5jdGlvbiBsaWdodGVuKGhleENvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18oaGV4Q29sb3IpXG4gICAgICAgIC5saWdodGVuKDAuNSlcbiAgICAgICAgLmhleCgpO1xufVxuZnVuY3Rpb24gZGFya2VuKGhleENvbG9yKSB7XG4gICAgcmV0dXJuIGNvbG9yX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18oaGV4Q29sb3IpXG4gICAgICAgIC5kYXJrZW4oMC41KVxuICAgICAgICAuaGV4KCk7XG59XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHtcbiAgICBsaWdodGVuLFxuICAgIGRhcmtlbixcbn0pO1xuXG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMM2RsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3TDNkbFluQmhZMnN2WW05dmRITjBjbUZ3SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0WTI5dWRtVnlkQzlqYjI1MlpYSnphVzl1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUxXTnZiblpsY25RdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDI1dlpHVmZiVzlrZFd4bGN5OWpiMnh2Y2kxamIyNTJaWEowTDNKdmRYUmxMbXB6SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0Ym1GdFpTOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUxYTjBjbWx1Wnk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2Ym05a1pWOXRiMlIxYkdWekwyTnZiRzl5TFhOMGNtbHVaeTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0Ym1GdFpTOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5dWIyUmxYMjF2WkhWc1pYTXZhWE10WVhKeVlYbHBjMmd2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dmJHVmhabXhsZEUxaGNDOHVMMjV2WkdWZmJXOWtkV3hsY3k5emFXMXdiR1V0YzNkcGVucHNaUzlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZjM0pqTDJSNWJtRnRhV05JWldGMFRHRjVaWEl2UkhsdVlXMXBZMGhsWVhSTVlYbGxjaTUwY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2YzNKakwybHVaR1Y0TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZiV0Z5YTJWeUwwMWhjbXRsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmMzSmpMMjFoY210bGNpOU5ZWEpyWlhKelFuVm1abVZ5VEdGNVpYSXVkSE1pTENKM1pXSndZV05yT2k4dmJHVmhabXhsZEUxaGNDOHVMM055WXk5dFlYSnJaWEl2VFdGeWEyVnljMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXZHZiaTlIY21sa2MweGhlV1Z5TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZjRzlzZVdkdmJpOVFiMng1WjI5dUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXZHZiaTlRYjJ4NVoyOXVjMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXeHBibVV2VUc5c2VXeHBibVV1ZEhNaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDNOeVl5OXdiMng1YkdsdVpTOVFiMng1YkdsdVpYTkNkV1ptWlhKTVlYbGxjaTUwY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2YzNKakwzQnZiSGxzYVc1bEwxQnZiSGxzYVc1bGMweGhlV1Z5TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZkWFJwYkhNdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3p0QlEyeEdRVHRCUVVOQkxHdENRVUZyUWl4dFFrRkJUeXhEUVVGRExITkVRVUZaT3p0QlFVVjBRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNVVUZCVVN3MFFrRkJORUk3UVVGRGNFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3MlFrRkJOa0k3UVVGRGNFTXNWMEZCVnl4cFEwRkJhVU03UVVGRE5VTXNWVUZCVlN4blEwRkJaME03UVVGRE1VTXNWMEZCVnl4cFEwRkJhVU03UVVGRE5VTXNUMEZCVHl4eFEwRkJjVU03UVVGRE5VTXNVMEZCVXl3eVEwRkJNa003UVVGRGNFUXNVVUZCVVR0QlFVTlNPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNjVVJCUVhGRUxHZENRVUZuUWp0QlFVTnlSU3h0UkVGQmJVUXNZMEZCWXp0QlFVTnFSVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTEdkQ1FVRm5RaXhQUVVGUE8wRkJRM1pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeDFRa0ZCZFVJN08wRkJSWFpDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZENRVUZuUWl4UFFVRlBMRkZCUVZFN1FVRkRMMElzWjBKQlFXZENMRTlCUVU4c1VVRkJVVHRCUVVNdlFpeHBRa0ZCYVVJc1QwRkJUeXhQUVVGUE8wRkJReTlDTEdsQ1FVRnBRaXhQUVVGUExFOUJRVTg3UVVGREwwSXNaMEpCUVdkQ0xGRkJRVkVzVDBGQlR6dEJRVU12UWl4blFrRkJaMElzVVVGQlVTeFBRVUZQTzBGQlF5OUNPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSE5GUVVGelJUczdRVUZGZEVVN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNjMEpCUVhOQ08wRkJRM1JDTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEN0RFFVRXJReXhGUVVGRkxGVkJRVlVzUlVGQlJUdEJRVU0zUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR08wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzWlVGQlpTeGhRVUZoTEdGQlFXRTdRVUZEZWtNN1FVRkRRU3hsUVVGbExHRkJRV0VzWVVGQllUdEJRVU42UXp0QlFVTkJMR1ZCUVdVc1lVRkJZU3hoUVVGaE8wRkJRM3BETzBGQlEwRXNaVUZCWlN4aFFVRmhMR0ZCUVdFN1FVRkRla003UVVGRFFTeGxRVUZsTEdGQlFXRXNZVUZCWVR0QlFVTjZRenRCUVVOQkxHVkJRV1VzWVVGQllUdEJRVU0xUWpzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOdU1rSkJMR3RDUVVGclFpeHRRa0ZCVHl4RFFVRkRMR3RGUVVGbE8wRkJRM3BETEZsQlFWa3NiVUpCUVU4c1EwRkJReXh6UkVGQlV6czdRVUZGTjBJN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEVzYTBOQlFXdERPMEZCUTJ4RE8wRkJRMEU3UVVGRFFTeDFRMEZCZFVNc1UwRkJVenRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFc2QwUkJRWGRFTEhWRFFVRjFRenRCUVVNdlJpeHpSRUZCYzBRc2NVTkJRWEZET3p0QlFVVXpSanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJpeERRVUZET3p0QlFVVkVPenM3T3pzN096czdPenM3UVVNM1JVRXNhMEpCUVd0Q0xHMUNRVUZQTEVOQlFVTXNhMFZCUVdVN08wRkJSWHBETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4eFEwRkJjVU1zVTBGQlV6dEJRVU01UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhsQ1FVRjVRanM3UVVGRmVrSTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEhsRFFVRjVReXhUUVVGVE8wRkJRMnhFTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMSEZEUVVGeFF5eFRRVUZUTzBGQlF6bERPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096dEJReTlHV1RzN1FVRkZXanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUTNaS1FUdEJRVU5CTEdsQ1FVRnBRaXh0UWtGQlR5eERRVUZETEdkR1FVRlpPMEZCUTNKRExHTkJRV01zYlVKQlFVOHNRMEZCUXl3NFJFRkJaMEk3TzBGQlJYUkRPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNVMEZCVXp0QlFVTlVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMSGxDUVVGNVFpeEpRVUZKTzBGQlF6ZENMSGRDUVVGM1FpeEZRVUZGTEZkQlFWY3NSVUZCUlR0QlFVTjJRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMR0ZCUVdFc1QwRkJUenRCUVVOd1FqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRU3hoUVVGaExFOUJRVTg3UVVGRGNFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR0xHRkJRV0VzVDBGQlR6dEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRXNSVUZCUlR0QlFVTkdPMEZCUTBFN08wRkJSVUVzV1VGQldTeFBRVUZQTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEZWs5Wk96dEJRVVZhTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEzWktZVHM3UVVGRllpeHJRa0ZCYTBJc2JVSkJRVThzUTBGQlF5d3dSRUZCWXp0QlFVTjRReXhqUVVGakxHMUNRVUZQTEVOQlFVTXNORVJCUVdVN08wRkJSWEpET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPenRCUVVWRU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNZVUZCWVN4dFFrRkJiVUk3UVVGRGFFTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVdFc1kwRkJZenRCUVVNelFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2FVSkJRV2xDTEdOQlFXTTdRVUZETDBJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2NVVkJRWEZGTEd0RFFVRnJReXhGUVVGRk96dEJRVVY2Unp0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxHbENRVUZwUWl4blFrRkJaMEk3UVVGRGFrTTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzVDBGQlR6dEJRVU40UWp0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNaMEpCUVdkQ0xGbEJRVms3UVVGRE5VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN08wRkRPV1JCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRVbUU3TzBGQlJXSXNhVUpCUVdsQ0xHMUNRVUZQTEVOQlFVTXNkMFJCUVdFN08wRkJSWFJETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFTeHRRMEZCYlVNc1UwRkJVenRCUVVNMVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRek5DUVR0QlFVRkJPMEZCUVVFN1FVRkhLMEk3UVVGWGFFSXNUVUZCVFN4blFrRkJaMEk3U1VGVmJrTXNXVUZEUlN4SFFVRlZMRVZCUTFZc1pVRkJhVU1zUlVGRGFrTXNUMEZCWjBNc1JVRkRhRU1zVjBGQmQwSTdVVUZGZUVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITzFGQlEyUXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhsUVVGbE8xRkJRM1JETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjN1VVRkRPVUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RFFVRkRPMUZCUTNCQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1R0SlFVTnlRaXhEUVVGRE8wbEJRMDBzVDBGQlR6dFJRVU5hTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTenRSUVVOd1FpeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRU5CUVVNN1VVRkRjRUlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJReTlDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1NVRkRaQ3hEUVVGRE8wbEJRMDBzUzBGQlN6dFJRVU5XTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTenRSUVVOd1FpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVU3V1VGRGRFSXNUMEZCVFR0VFFVTlFPMUZCUTBRc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJUdFpRVU5rTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRuUWtGRGFFSXNUMEZCVFR0aFFVTlFPMWxCUTBRc1YwRkJWenRaUVVOWUxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdaMEpCUTNaRUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSVHR2UWtGRGRFSXNUMEZCVFR0cFFrRkRVRHRuUWtGRFJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMkZCUTJZN2FVSkJRVTA3WjBKQlEwd3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRGJFSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzJkQ1FVTXZRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzJGQlEySTdVVUZEU0N4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTTdTVUZETTBJc1EwRkJRenRKUVVOTkxFdEJRVXM3VVVGRFZpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrN1NVRkRja0lzUTBGQlF6dEpRVU5OTEVsQlFVazdVVUZEVkN4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRk8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4WFFVRlhPMWxCUTJRc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRE8yZENRVU5vUkN4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTA3VVVGRE4wSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzBsQlEycERMRU5CUVVNN1NVRkRUU3hKUVVGSk8xRkJRMVFzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eE5RVUZOTzFGQlEycEZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0SlFVTnFReXhEUVVGRE8wbEJRMDBzVVVGQlVTeERRVUZETEVsQlFWazdVVUZETVVJc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU51UkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExGbEJRVmtzU1VGQlNTd3dRa0ZCTUVJc1EwRkJRenRUUVVNMVJEdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVN1NVRkRia0lzUTBGQlF6dEpRVU5OTEVsQlFVa3NRMEZCUXl4UFFVRnBRenRSUVVNelF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVONlFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMUZCUTJoQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZPMUZCUTJwQ0xFOUJRVThzU1VGQlNUdEpRVU5pTEVOQlFVTTdTVUZEVHl4WFFVRlhMRU5CUVVNc1QwRkJhVU03VVVGRGJrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVU14UWp0WlFVTkZMRWxCUVVrc1JVRkJSU3hMUVVGTE8xbEJRMWdzU1VGQlNTeEZRVUZGTEV0QlFVczdXVUZEV0N4UlFVRlJMRVZCUVVVc1NVRkJTVHRUUVVObUxFVkJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZEV2l4UFFVRlBMRU5CUTFJN1NVRkRTQ3hEUVVGRE8wbEJRMDhzVTBGQlV6dFJRVU5tTEUxQlFVMHNiVUpCUVcxQ0xFZEJRWGRDTzFsQlF5OURMRlZCUVZVc1JVRkJSU3hOUVVGTk8xbEJRMnhDTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUenRUUVVNeFFqdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3cwUkVGQldTeERRVU16UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVOU0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTNaQ0xHMUNRVUZ0UWl4RlFVTnVRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVU5xUWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXM3U1VGRGJrSXNRMEZCUXp0RFFVTkdPenM3T3pzN096czdPenM3TzBGRGRFaEVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVzlETzBGQlExazdRVUZEV1R0QlFVTnNRanRCUVVOWk8wRkJRMWs3UVVGRE0wSTdRVUZEV1R0QlFVTk9PMEZCUTNGQ08wRkJSV3hGTEN0RVFVRmxPMGxCUTJJc09FUkJRVTA3U1VGRFRpd3dSVUZCV1R0SlFVTmFMSE5HUVVGclFqdEpRVU5zUWl4dlJVRkJVVHRKUVVOU0xHZEdRVUZqTzBsQlEyUXNORVpCUVc5Q08wbEJRM0JDTEdsRlFVRlBPMGxCUTFBc05rVkJRV0U3U1VGRFlpeDFSVUZCVlR0SlFVTldMRFJHUVVGblFqdERRVU5xUWp0QlFWbEJPenM3T3pzN096czdPenM3TzBGRGFFTkVPMEZCUVVFN1FVRkJaU3hOUVVGTkxFMUJRVThzVTBGQlVTeERRVUZETEVOQlFVTXNUVUZCVFR0SlFVY3hReXhaUVVGWkxFMUJRVEJDTEVWQlFVVXNUMEZCZVVJN1VVRkRMMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVU5OTEU5QlFVOHNRMEZCUXl4SlFVRnJRanRSUVVNdlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrN1NVRkRjRUlzUTBGQlF6dEpRVU5OTEU5QlFVODdVVUZEV2l4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTk8wbEJRM0JDTEVOQlFVTTdRMEZEUmpzN096czdPenM3T3pzN096dEJRMkpFTzBGQlFVRTdRVUZCUVR0QlFVRnJSVHRCUVV0dVJDeE5RVUZOTEd0Q1FVRnRRaXhUUVVGUkxIRkVRVUZaTzBsQlJ6RkVMRmxCUTBVc1IwRkJWU3hGUVVOV0xGRkJRWGRDTEVWQlEzaENMRTlCUVd0RExFVkJRMnhETEZkQlFYZENPMUZCUlhoQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSU3hYUVVGWExFTkJRVU03VVVGRE1VTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhqUVVGak8xRkJRekZDTEUxQlFVMHNiMEpCUVc5Q0xFZEJRVEJDTzFsQlEyeEVMRTFCUVUwc1JVRkJSU3hKUVVGSk8xbEJRMW9zVFVGQlRTeEZRVUZGTEVsQlFVazdXVUZEV2l4TlFVRk5MRVZCUVVVc1EwRkJRenRUUVVOV08xRkJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVNeFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVTmFMRVZCUVVVc1lVRkJZU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRVZCUTNaRExFOUJRVThzUTBGRFVqdEpRVU5JTEVOQlFVTTdTVUZGVFN4SlFVRkpMRU5CUVVNc1QwRkJiVU03VVVGRE4wTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRE8xRkJRMjVFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNN1VVRkRla1FzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0UlFVTnNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdTVUZEZEVJc1EwRkJRenRKUVVWTkxFMUJRVTA3VVVGRFdDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOcVFpeFBRVUZOTzFOQlExQTdVVUZEUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3V1VGRGNFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTjJRenRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTndRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xTkJRM1pETzFGQlEwUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVN1VVRkRNME1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVTdVVUZGTTBNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNWVUZCVlN4RlFVRkZPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGNrTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVVnlReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRemRDTEU5QlFVOHNTVUZCU1R0SlFVTmlMRU5CUVVNN1NVRkZUU3hUUVVGVE8xRkJRMlFzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJUdFRRVU0xUWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRGVFTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVOb1FpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVNM1JEdFJRVU5JTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVNM1JTeERRVUZETzBsQlJVOHNhVUpCUVdsQ08xRkJRM1pDTEUxQlFVMHNWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhWUVVGVkxFVkJRVVU3VVVGRGFrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNSVUZCUlR0WlFVTTVRaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVTXhRaXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlEyeENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeERRVU16UWp0WlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSVHRuUWtGRGJFTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1EwRkRja0lzUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRM1JFTzJGQlEwWTdhVUpCUVUwN1owSkJRMHdzVVVGQlVTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRk8yOUNRVU55UXl4TFFVRkxMRkZCUVZFN2QwSkJRMWdzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZEY2tJc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVU01UXp0M1FrRkRSQ3hOUVVGTE8yOUNRVU5RTEV0QlFVc3NVVUZCVVR0M1FrRkRXQ3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVU55UWl4RlFVRkZMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVU53UkR0dlFrRkRTRHQzUWtGRFJTeE5RVUZMTzJsQ1FVTlNPMkZCUTBZN1dVRkRSQ3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTnNReXhEUVVGRExFTkJRVU03VVVGRFJpeFBRVUZQTEZWQlFWVTdTVUZEYmtJc1EwRkJRenREUVVOR096czdPenM3T3pzN096czdPMEZEYkVkRU8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFYZERPMEZCUlZnN1FVRjVSR1FzVFVGQlRTeFpRVUZaTzBsQk9FSXZRaXhaUVVORkxFZEJRVlVzUlVGRFZpeFJRVUYzUWl4RlFVTjRRaXhQUVVFMFFpeEZRVU0xUWl4WFFVRjNRanRSUVVWNFFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhPMWxCUTNCQ0xGVkJRVlVzUlVGQlJTeFBRVUZQTzFsQlEyNUNMRzlDUVVGdlFpeEZRVUZGTEZGQlFWRTdXVUZET1VJc1VVRkJVU3hGUVVGRkxGTkJRVk03V1VGRGJrSXNVVUZCVVN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dFpRVU5zUWl4VFFVRlRMRVZCUVVVc1ZVRkJWVHRaUVVOeVFpeFRRVUZUTEVWQlFVVXNVMEZCVXp0WlFVTndRaXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUTNCQ0xGTkJRVk1zUlVGQlJTeEZRVUZGTEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJUdFpRVU42UXl4WFFVRlhMRVZCUVVVc1RVRkJUVHRaUVVOdVFpeGxRVUZsTEVWQlFVVXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkROVUlzVTBGQlV5eEZRVUZGTEV0QlFVczdXVUZEYUVJc1YwRkJWeXhGUVVGRk8yZENRVU5ZTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOT0xGVkJRVlVzUlVGQlJTeERRVUZETzJGQlEyUTdVMEZEUmp0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzVVVGQlVUdFJRVU53UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWM3VVVGRFpDeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFN1VVRkRlRUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnp0UlFVVTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVazdVVUZEYmtJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTzFGQlEycENMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNUdFJRVU42UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWs3VVVGRGVrSXNTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeEhRVUZITEVsQlFVazdVVUZEYUVNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTzFGQlEycENMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNUdFJRVU4yUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWs3VVVGRGNrSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSk8xRkJSWGhDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1VVRkJVVHRSUVVNMVFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNN1VVRkZkRUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZETDBNc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03U1VGRE4wTXNRMEZCUXp0SlFVTk5MRWxCUVVrc1EwRkJReXhQUVVFMlFqdFJRVU4yUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWs3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU03VVVGRGVrSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZPMUZCUTJwQ0xFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0SlFVTjBRaXhEUVVGRE8wbEJRMDBzVFVGQlRUdFJRVU5ZTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRMnBDTEU5QlFVMDdVMEZEVUR0UlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5rTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRk8xTkJRM0JDTzFGQlJVUXNhVUpCUVdsQ08xRkJRMnBDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRXRCUVVzc1QwRkJUeXhGUVVGRk8xbEJRMnBGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RlFVRkZPMU5CUTNaRE8yRkJRVTA3V1VGRFRDeFJRVUZSTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hGUVVGRk8yZENRVU12UWl4TFFVRkxMRTlCUVU4c1EwRkJReXhEUVVGRE8yOUNRVU5hTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZPMjlDUVVOeVF5eE5RVUZMTzJsQ1FVTk9PMmRDUVVORUxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTTdiMEpCUTJRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVU3YjBKQlEzUkRMRTFCUVVzN2FVSkJRMDQ3WjBKQlEwUXNTMEZCU3l4TlFVRk5MRU5CUVVNc1EwRkJRenR2UWtGRFdDeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVU3YjBKQlEyNURMRTFCUVVzN2FVSkJRMDQ3WjBKQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNN2IwSkJRMUFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4clFrRkJhMElzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRWRCUVVjc1EwRkJRenRwUWtGRE9VUTdZVUZEUmp0VFFVTkdPMUZCUTBRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRSUVVNM1FpeFBRVUZQTEVsQlFVazdTVUZEWWl4RFFVRkRPMGxCUTAwc1QwRkJUeXhEUVVGRExFbEJRVzlDTzFGQlEycERMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNUdEpRVU4wUWl4RFFVRkRPMGxCUTAwc1ZVRkJWU3hEUVVGRExFOUJRVFJDTEVWQlFVVXNUVUZCVFN4SFFVRkhMRXRCUVVzN1VVRkROVVFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzVFVGQlRTeEZRVUZGTzFsQlExWXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRUUVVOa08wbEJRMGdzUTBGQlF6dEpRVU5OTEZOQlFWTTdVVUZEWkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1NVRkRkRU1zUTBGQlF6dEpRVU5OTEZOQlFWTTdVVUZEWkN4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTFRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RlFVRkZPMU5CUXpWQ08xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkRja0lzUTBGQlF5eE5RVUZOTEVWQlFVVXNSVUZCUlN4RFFVTlVMRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZ4UWl4RFFVTjJSVHRKUVVOSUxFTkJRVU03U1VGRFRTeFBRVUZQTzFGQlExb3NTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8xbEJRMlFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFRRVU5xUXp0UlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RlFVRkZPMWxCUXpkQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXp0VFFVTm9SRHRSUVVORUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlF6TkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZEVFN4aFFVRmhMRU5CUVVNc1QwRkJaMEk3VVVGRGJrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUE8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8xbEJRMllzVDBGQlRUdFRRVU5RTzFGQlEwUXNTVUZCU1N4UFFVRlBMRVZCUVVVN1dVRkRXQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xTkJRemxDTzJGQlFVMDdXVUZEVEN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUTJwRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEZkQlFWY3NRMEZCUXl4TFFVRmhPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4SFFVRkhMRXRCUVVzN1VVRkRPVUlzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0SlFVTm1MRU5CUVVNN1NVRkRUU3hWUVVGVkxFTkJRVU1zVjBGQmJVSTdVVUZEYmtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnp0UlFVTjBReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBsQlEyWXNRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhGUVVGVk8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVTdXVUZET1VJc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkJSVHRuUWtGRE9VSXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkRMMElzVDBGQlRUdGhRVU5RTzFGQlEwZ3NRMEZCUXl4RFFVRkRPMGxCUTBvc1EwRkJRenRKUVVOVExGbEJRVms3VVVGRGNFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGRGFrSXNUMEZCVFR0VFFVTlFPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEZGQlFWRXNSVUZCUlR0WlFVTXhRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4TFFVRkxMRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZPMmRDUVVOc1JTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzJGQlEzWkRPMU5CUTBZN1lVRkJUVHRaUVVOTUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VTBGRGRrTTdTVUZEU0N4RFFVRkRPMGxCUTFNc1ZVRkJWVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOcVFpeFBRVUZOTzFOQlExQTdVVUZEUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhKUVVGSkxFdEJRVXNzVVVGQlVTeEZRVUZGTzFsQlF6RkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEV0QlFVc3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVTdaMEpCUTJ4RkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03WVVGRGNFTTdVMEZEUmp0aFFVRk5PMWxCUTB3c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRUUVVOd1F6dEpRVU5JTEVOQlFVTTdTVUZEUkN4aFFVRmhPMGxCUTBnc2FVSkJRV2xDTzFGQlEzcENMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU53UWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU14UWp0UlFVTkVMRTFCUVUwc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZETjBRc1UwRkJVenRSUVVOVUxHVkJRV1VzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU16UkN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUVUZCWjBJc1EwRkJRenRSUVVNelF5eERRVUZETEVOQlFVTTdVVUZEUml4alFVRmpPMUZCUTJRc1pVRkJaU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRek5FTEhkQ1FVRjNRanRaUVVONFFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVN1owSkJRM1JDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1dVRkJXU3hGUVVGRk8yRkJRMnhETzFsQlEwUXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhOUVVGblFqdFpRVVZ5UXl4SlFVRkpMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVTdaMEpCUTI1RExEaENRVUU0UWp0blFrRkRPVUlzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4WFFVRlhMRVZCUVVVN1lVRkRha003YVVKQlFVMDdaMEpCUTB3c2JVSkJRVzFDTzJkQ1FVTnVRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RlFVRkZPMjlDUVVNMVFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRmRCUVZjc1EwRkROVUlzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkROVVE3YVVKQlEwWTdZVUZEUmp0UlFVTklMRU5CUVVNc1EwRkJRenRSUVVOR0xHVkJRV1VzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVWNFF5eGxRVUZsTzFGQlEyWXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVWd1F5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMR1ZCUVdVN1VVRkRiRU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnp0SlFVTjZRaXhEUVVGRE8wbEJRMU1zYVVKQlFXbENMRU5CUVVNc1NVRkJhMEk3VVVGRE5VTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUXpWRExFTkJRVU03U1VGRFV5eFhRVUZYTEVOQlFVTXNUMEZCTkVJN1VVRkRhRVFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETzBsQlF6bEZMRU5CUVVNN1NVRkRVeXhYUVVGWE8xRkJRMjVDTEd0Q1FVRnJRanRSUVVOc1FpeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVU3VVVGRGVrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRk8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdXVUZETjBJc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUlhKRUxFMUJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NLME5CUVUwc1EwRkRka0k3WjBKQlEwY3NTMEZCYTBJc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEhRVUZITzJkQ1FVTnNReXhMUVVGclFpeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRWRCUVVjN1lVRkRjRU1zUlVGRFJEdG5Ra0ZEUlN4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEpRVUZKTEVOQlFVTTdZVUZETDBJc1EwRkRSanRaUVVWRUxHdENRVUZyUWp0WlFVTnNRaXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTndRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRNMElzUTBGQlF5eERRVUZETzBsQlEwb3NRMEZCUXp0SlFVTlRMRlZCUVZVN1VVRkRiRUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZETVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU03VVVGRGRFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zWVVGQllTeEZRVUZGTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNN1NVRkRla01zUTBGQlF6dEpRVU5FTEdsQ1FVRnBRanRKUVVOVUxHdENRVUZyUWl4RFFVRkRMRTFCUVdNN1VVRkRka01zU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4TlFVRk5PMUZCUXpOQ0xGbEJRVms3VVVGRFdpeEpRVUZKTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUlVGQlJUdFpRVU0zUWl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU03VTBGREwwTTdVVUZEUkN4WFFVRlhPMUZCUTFnc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4SFFVRkhMRWxCUVVrc0swTkJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVN1dVRkRla1FzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1UwRkRha1FzUTBGQlF6dFJRVU5HTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVWNlF5eEpRVUZKTEVOQlFVTXNiMEpCUVc5Q08yRkJRM1JDTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTJwRUxGTkJRVk1zUlVGQlJUdFJRVU5rTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVNNVF5eEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zVFVGQlRTeEZRVUZGTzFGQlEzQkRMRU5CUVVNc1EwRkJRenRSUVVOR0xFMUJRVTBzUTBGQlF5eFpRVUZaTEVWQlFVVTdVVUZGY2tJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU01UXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExHbENRVUZwUWl4RlFVRkZMRTFCUVUwc1EwRkJRenRKUVVNM1F5eERRVUZETzBsQlEwOHNhMEpCUVd0Q08xRkJRM2hDTEZOQlFWTTdVVUZEVkN4SlFVRkpMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVU3V1VGRGNrSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhOUVVGTkxFVkJRVVU3VTBGRE0wSTdVVUZEUkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUTBGQlF5eHJRa0ZCYTBJc1EwRkJRenRaUVVOMlF5eHJRa0ZCYTBJc1JVRkJSU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF6dFRRVU4yUkN4RFFVRkRPMUZCUTBZc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFRRVUZUTEVOQlEzcENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVN1dVRkRja0lzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N3clEwRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlR0blFrRkRka01zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJGQlEzUkRMRU5CUVVNN1dVRkRSaXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRaUVVNelFpeE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF6dFpRVU51UlN4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03V1VGRGVFUXNUVUZCVFN4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTzJkQ1FVTjBRaXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1RVRkJUU3hEUVVGRE8xbEJRMnBETEVOQlFVTXNRMEZCUXp0WlFVTkdMRTlCUVU4c1RVRkJUVHRSUVVObUxFTkJRVU1zUTBGQlF5eERRVU5JTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXVHRKUVVNeFFpeERRVUZETzBsQlJVUXNZVUZCWVR0SlFVTk1MR1ZCUVdVN1VVRkRja0lzU1VGQlNTeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMWxCUTJ4Q0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RlFVRkZPMU5CUTNoQ08xRkJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU01UWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEycERMRTFCUVUwc1lVRkJZU3hIUVVOcVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4aFFVRmhPMWxCUTNCRkxFbEJRVWtzUjBGQlJ5eEhRVU5NTEVOQlFVTXNZVUZCWVN4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0blFrRkRiRVFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSenRaUVVNNVFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGRE0wSXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVYzdZVUZEYmtNN1dVRkRSQ3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8xRkJRM3BFTEVOQlFVTXNRMEZCUXp0UlFVTkdMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZETVVJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVTjRReXd3UWtGQk1FSTdVVUZETVVJc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFVkJRVVVzUlVGQlJTeFZRVUZWTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkRMMFE3VVVGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRPMGxCUTNaQ0xFTkJRVU03U1VGRlR5eHRRa0ZCYlVJc1EwRkJReXhKUVVGclFqdFJRVU0xUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXp0SlFVTjRReXhEUVVGRE8wbEJSVThzWVVGQllTeERRVUZETEVsQlFXdENPMUZCUTNSRExFOUJRVThzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRE8wbEJRM3BETEVOQlFVTTdTVUZGUkN3MlFrRkJOa0k3U1VGRGNrSXNZMEZCWXl4RFFVTndRaXhKUVVGclFpeEZRVU5zUWl4UlFVRnBRanRSUVVWcVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkU3VVVGRGRFTXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTzFGQlF6RkRMRTFCUVUwc1kwRkJZeXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVY3pSRHRSUVVORUxFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlIycEZPMUZCUlVRc1RVRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRPMUZCUlhoRExGRkJRVkVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVN1dVRkROMElzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRXaXhyUWtGQmEwSTdaMEpCUTJ4Q0xIZERRVUYzUXp0blFrRkRlRU1zYjBSQlFXOUVPMmRDUVVOd1JDeG5Ra0ZCWjBJN1owSkJRMmhDTEV0QlFVczdZVUZEVGp0WlFVTkVMRXRCUVVzc1dVRkJXU3hEUVVGRE8xbEJRMnhDTEV0QlFVc3NVVUZCVVN4RFFVRkRPMWxCUTJRc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6dG5Ra0ZEWkN4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU03YjBKQlEyWXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRVZCUVVVN2QwSkJRMnBETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVR0M1FrRkRPVU1zVTBGQlV6dHhRa0ZEVml4RFFVRkRPMjlDUVVOR0xGTkJRVk1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMSFZDUVVGMVFpeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMjlDUVVOc1JDeFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRTdiMEpCUXpsRExGVkJRVlVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZPMjlDUVVOd1JDeGhRVUZoTEVWQlFVVXNVVUZCVVR0M1FrRkRja0lzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zZENRVU12UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU16UWl4WFFVRlhMRVZCUVVVc1VVRkJVVHQzUWtGRGJrSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNkQ1FVTXZRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJsQ1FVTTFRaXhEUVVGRE8yRkJRMGc3V1VGRFJDeFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRVQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEd0Q1FVRnJRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMkZCUXpORU8xTkJRMFk3U1VGRFNDeERRVUZETzBsQlEwOHNhVUpCUVdsQ0xFTkJRM1pDTEVsQlFXdENMRVZCUTJ4Q0xFOUJRVGhDTzFGQlJUbENMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVWQlFVVTdXVUZETjBJc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETzFsQlEyeEVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTlCUVU4c1EwRkJRenRUUVVOb1JEdFJRVU5FTEZGQlFWRXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXh2UWtGQmIwSXNSVUZCUlR0WlFVTjZReXhMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETzJkQ1FVTmlMRkZCUVZFc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVTdiMEpCUXpkQ0xGZEJRVmM3YjBKQlExZ3NTMEZCU3l4WlFVRlpMRU5CUVVNc1EwRkJRenQzUWtGRGFrSXNUMEZCVHpzd1FrRkRUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTTdPekpDUVVWeVFpeFBRVUZQTEVOQlFVTXNVMEZCVXpzclFrRkRZaXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXpzN08yRkJSM0pETzNGQ1FVTkdPMjlDUVVORUxGTkJRVk03YjBKQlExUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenQzUWtGRFlpeFBRVUZQT3p0dFEwRkZaMElzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZPenRoUVVVM1F6dHhRa0ZEUmp0dlFrRkRSQ3hoUVVGaE8yOUNRVU5pTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN2QwSkJRMlFzVDBGQlR6czdlVUpCUlUwc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUT3pzeVFrRkZjRUlzVDBGQlR5eERRVUZETEZOQlFWTTdLMEpCUTJJc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdPenRyUWtGSGFFTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWE96dGhRVVUzUWp0eFFrRkRSanRwUWtGRFJqdG5Ra0ZEUkN4TlFVRkxPMkZCUTA0N1dVRkRSQ3hMUVVGTExGZEJRVmNzUTBGQlF5eERRVUZETzJkQ1FVTm9RaXhSUVVGUkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZPMjlDUVVNM1FpeFhRVUZYTzI5Q1FVTllMRXRCUVVzc1dVRkJXU3hEUVVGRExFTkJRVU03ZDBKQlEycENMRTlCUVU4N08zbENRVVZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenM3TWtKQlJYQkNMRWxCUVVrc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4SlFVRkpMRU5CUVVNN0swSkJRemxDTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE96czdZVUZIY2tNN2NVSkJRMFk3YjBKQlEwUXNVMEZCVXp0dlFrRkRWQ3hMUVVGTExGRkJRVkVzUTBGQlF5eERRVUZETzNkQ1FVTmlMRTlCUVU4N08yMURRVVZuUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlU3TzJGQlJUZERPM0ZDUVVOR08yOUNRVU5FTEdGQlFXRTdiMEpCUTJJc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6dDNRa0ZEWkN4UFFVRlBPenQ1UWtGRlRTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNN096SkNRVVZ3UWl4SlFVRkpMRU5CUVVNc2RVSkJRWFZDTEVOQlFVTXNTVUZCU1N4RFFVRkRPeXRDUVVNNVFpeFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenM3TzJ0Q1FVZG9ReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWYzdPMkZCUlRkQ08zRkNRVU5HTzJsQ1FVTkdPMmRDUVVORUxFMUJRVXM3WVVGRFRqdFpRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMmRDUVVOUUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlEySXNORUpCUVRSQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNiMEpCUVc5Q0xFZEJRVWNzUTBGRGFrVTdZVUZEUmp0VFFVTkdPMGxCUTBnc1EwRkJRenRKUVVOUExHdENRVUZyUWp0UlFVTjRRaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJReXhOUVVGTk8xRkJRek5FTEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1VVRkJVVHRSUVVOMFFpeEpRVUZKTEUxQlFVMHNSMEZCUnl4UlFVRlJPMUZCUTNKQ0xFdEJRVXNzVFVGQlRTeEpRVUZKTEVsQlFVa3NTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRaUVVOb1F5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTTdXVUZETlVNc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJRenRaUVVNNVFpeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETzFOQlF5OUNPMUZCUTBRc1RVRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExHVkJRV1U3VVVGRGNFUXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhOUVVGTk8xRkJRekZDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTVHRKUVVNelFpeERRVUZETzBsQlEwOHNkVUpCUVhWQ0xFTkJRVU1zU1VGQmEwSTdVVUZEYUVRc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRE8xRkJRelZETEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVU40UXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVTnNSVHRSUVVORUxFOUJRVThzUzBGQlN6dEpRVU5rTEVOQlFVTTdTVUZEVHl4bFFVRmxMRU5CUVVNc1NVRkJhMEk3VVVGRGVFTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlF6TkNMRTlCUVU4c1JVRkJSVHRUUVVOV08xRkJRMFFzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhMUVVGTExGRkJRVkVzUlVGQlJUdFpRVU01UXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdVMEZEY0VVN1VVRkRSQ3hKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRXRCUVVzc1VVRkJVU3hGUVVGRk8xbEJRemxETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEV0QlEzQkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUTI1RExFVkJRVVU3VTBGRFNEdEpRVU5JTEVOQlFVTTdTVUZEVHl4clFrRkJhMElzUTBGQlF5eFBRVUY1UWp0UlFVTnNSQ3hQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZEWml4SlFVRkpMRVZCUVVVN096czdNRUpCU1dNc05FUkJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJRenM3T3pzN096czdPenMwUWtGVk4wSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVE96czdPenM3TzJOQlQzQkRMRTlCUVU4c1EwRkJReXhoUVVGaExFVkJRVVU3T3p0UFFVYzVRanRaUVVORUxGRkJRVkVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1UwRkRia0lzUTBGQlF6dEpRVU5LTEVOQlFVTTdRMEZEUmpzN096czdPenM3T3pzN096dEJRM1p0UWtRN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQkswSTdRVUZEY1VNN1FVRkhja1FzVFVGQlRTeFZRVUZYTEZOQlFWRXNjMFJCUVdFN1NVRkZia1FzV1VGRFJTeEhRVUZWTEVWQlExWXNVVUZCZDBJc1JVRkRlRUlzVDBGQk5FSXNSVUZETlVJc1YwRkJkMEk3VVVGRmVFSXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hSUVVGUkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZkQlFWY3NRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJRMDBzVFVGQlRUdFJRVU5ZTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRMnBDTEU5QlFVMDdVMEZEVUR0UlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5rTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRk8xTkJRM0JDTzFGQlEwUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzFGQlEyNURMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkROMElzY1VSQlFYRkVPMUZCUTNKRUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVTdVVUZEY0VJc1QwRkJUeXhKUVVGSk8wbEJRMklzUTBGQlF6dEpRVU5OTEdGQlFXRXNRMEZCUXl4UFFVRm5RanRSUVVOdVF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTzFsQlEyaERMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTzJkQ1FVTjRRaXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1lVRkRha1E3VVVGRFNDeERRVUZETEVOQlFVTTdTVUZEU2l4RFFVRkRPMGxCUTFNc1UwRkJVenRSUVVOcVFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGJFUXNRMEZCUXp0SlFVTlBMR0ZCUVdFN1VVRkRia0lzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVTdVVUZETlVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTTFRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRk8yZENRVU5vUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlR0dlFrRkROMFFzVTBGQlV5eEZRVUZGTEVsQlFVazdiMEpCUTJZc1UwRkJVeXhGUVVGRkxGRkJRVkU3YVVKQlEzQkNMRU5CUVVNN1dVRkRTaXhEUVVGRExFTkJRVU03VTBGRFNEdEpRVU5JTEVOQlFVTTdTVUZEVHl4bFFVRmxPMUZCUTNKQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSVHRSUVVOc1F5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkROVU1zU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTE8xbEJRemxDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXh6UWtGQmMwSXNTMEZCU3l4WFFVRlhMRVZCUVVVN1owSkJRM1pFTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yRkJRM3BFTzFsQlEwUXNUVUZCVFN4UFFVRlBMRWRCUVhOQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3WjBKQlEycEZMRXRCUVVzN1lVRkRUaXhEUVVGRE8xbEJRMFlzWlVGQlpUdFpRVU5tTEUxQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1owUkJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVVc1QwRkJUeXhEUVVGRE8xbEJRemRFTEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFsQlEzSkRMRlZCUVZVc1EwRkJReXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlR0blFrRkRNVUlzYjBOQlFXOURPMWxCUTNSRExFTkJRVU1zUTBGQlF6dFpRVU5HTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVU3WjBKQlF6RkNMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU5xUlR0WlFVTkVMRTlCUVU4c1ZVRkJWVHRSUVVOdVFpeERRVUZETEVOQlFVTTdVVUZEUml4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZPMWxCUTJoRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVOeVF5eERRVUZETEVOQlFVTTdVVUZEUml4UFFVRlBMRWxCUVVrc1EwRkJReXhaUVVGWk8wbEJRekZDTEVOQlFVTTdTVUZEVHl4WFFVRlhPMUZCUTJwQ0xFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMmhETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRXaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVTm9RaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1QwRkJUeXhEUVVGRE8xbEJRemRDTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUXpsRE8wbEJRMGdzUTBGQlF6dEpRVU5QTEdsQ1FVRnBRaXhEUVVGRExFOUJRV2RDTzFGQlEzaERMRTlCUVU4c1EwRkRUQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGFrVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUTJ4Rk8wbEJRMGdzUTBGQlF6dEpRVU5QTEd0Q1FVRnJRaXhEUVVGRExGVkJRV3RDTzFGQlF6TkRMRTlCUVU4c1ZVRkJWU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTzBsQlF6ZENMRU5CUVVNN1NVRkRUeXhuUWtGQlowSTdVVUZEZEVJc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhPMUZCUTNKRExFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRTdZVUZEYWtJc1IwRkJSeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJRenRoUVVOeVJDeE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRGNrSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTTdVVUZETjBJc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU5VTEVOQlFVTTdRMEZEUmpzN096czdPenM3T3pzN096dEJRM0JIUkR0QlFVRkJPMEZCUVdVc1RVRkJUU3hQUVVGUkxGTkJRVkVzUTBGQlF5eERRVUZETEU5QlFVODdTVUZITlVNc1dVRkRSU3hQUVVjMFFpeEZRVU0xUWl4UFFVRXlRanRSUVVVelFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJRenRKUVVONlFpeERRVUZETzBsQlEwMHNUMEZCVHl4RFFVRkRMRWxCUVd0Q08xRkJReTlDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTVHRKUVVOd1FpeERRVUZETzBsQlEwMHNUMEZCVHp0UlFVTmFMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTA3U1VGRGNFSXNRMEZCUXp0RFFVTkdPenM3T3pzN096czdPenM3TzBGRGNFSkVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRV2RFTzBGQlJXcENPMEZCYlVKb1FpeE5RVUZOTEdGQlFXRTdTVUZwUW1oRExGbEJRMFVzUjBGQlZTeEZRVU5XTEZGQlFYZENMRVZCUTNoQ0xFOUJRVFJDTEVWQlF6VkNMRmRCUVhkQ08xRkJSWGhDTEUxQlFVMHNZMEZCWXl4SFFVRjNRanRaUVVNeFF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVTdXVUZEZWtNc1YwRkJWeXhGUVVGRkxFMUJRVTA3V1VGRGJrSXNTMEZCU3l4RlFVRkZMRk5CUVZNN1dVRkRhRUlzU1VGQlNTeEZRVUZGTEVsQlFVazdXVUZEVml4VFFVRlRMRVZCUVVVc1UwRkJVenRaUVVOd1FpeE5RVUZOTEVWQlFVVXNRMEZCUXp0WlFVTlVMRTlCUVU4c1JVRkJSU3hEUVVGRE8xbEJRMVlzVjBGQlZ5eEZRVUZGTEVkQlFVYzdXVUZEYUVJc2MwSkJRWE5DTEVWQlFVVXNVVUZCVVR0WlFVTm9ReXhsUVVGbExFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTTdVMEZETjBJN1VVRkRSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEZOQlFWTTdVVUZEY2tJc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITzFGQlEyUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUk8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNZMEZCWXl4RlFVRkZMRTlCUVU4c1EwRkJRenRSUVVONlJDeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjN1VVRkZPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NSVUZCUlR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEZGQlFWRTdVVUZETlVJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETzFGQlEzUkNMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNUdFJRVU14UWl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVkQlFVY3NTVUZCU1R0SlFVTnVReXhEUVVGRE8wbEJRMDBzU1VGQlNTeERRVUZETEU5QlFUWkNPMUZCUTNaRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVTdVVUZEYmtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdFJRVU5vUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3U1VGRGRFSXNRMEZCUXp0SlFVTk5MRTFCUVUwN1VVRkRXQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTnFRaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0VFFVTndRanRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEZRVUZGTzFGQlEzUkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkROMElzVDBGQlR5eEpRVUZKTzBsQlEySXNRMEZCUXp0SlFVTk5MRk5CUVZNN1VVRkRaQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03U1VGRGRFTXNRMEZCUXp0SlFVTk5MRk5CUVZNN1VVRkRaQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNM1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRk8xTkJRelZDTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGRGVrSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEZRVU0zUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVTTNRanRKUVVOSUxFTkJRVU03U1VGRFRTeFBRVUZQTzFGQlExb3NTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8xbEJRMlFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFRRVU5xUXp0UlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RlFVRkZPMWxCUXpsQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNRMEZCUXp0VFFVTnFSRHRKUVVOSUxFTkJRVU03U1VGRFRTeGhRVUZoTEVOQlFVTXNUMEZCWjBJN1VVRkRia01zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMWxCUTJZc1QwRkJUVHRUUVVOUU8xRkJRMFFzU1VGQlNTeFBRVUZQTEVWQlFVVTdXVUZEV0N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUXpsQ08yRkJRVTA3V1VGRFRDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFOQlEycERPMGxCUTBnc1EwRkJRenRKUVVOTkxGZEJRVmNzUTBGQlF5eExRVUZoTzFGQlF6bENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEV0QlFVczdVVUZET1VJc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdEpRVU5tTEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1JVRkJWVHRSUVVOeVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTzFsQlEyaERMRWxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVN1owSkJReTlDTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFBRVUZQTEVOQlFVTTdaMEpCUTJwRExFOUJRVTA3WVVGRFVEdFJRVU5JTEVOQlFVTXNRMEZCUXp0SlFVTktMRU5CUVVNN1NVRkRVeXhUUVVGVExFdEJRVWtzUTBGQlF6dEpRVU5rTEdsQ1FVRnBRaXhEUVVGRExFbEJRV3RDTzFGQlF6VkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVNMVF5eERRVUZETzBsQlExTXNaVUZCWlN4RFFVRkRMRWxCUVd0Q08xRkJRekZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU16UWl4UFFVRlBMRVZCUVVVN1UwRkRWanRSUVVORUxFbEJRVWtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1MwRkJTeXhSUVVGUkxFVkJRVVU3V1VGRE9VTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eExRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eEZRVUZGTzFOQlEzQkZPMUZCUTBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVNNVF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eExRVU53UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVTnVReXhGUVVGRk8xTkJRMGc3U1VGRFNDeERRVUZETzBsQlExTXNhMEpCUVd0Q08xRkJRekZDTEUxQlFVMHNaVUZCWlN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMDdVVUZETTBRc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eFJRVUZSTzFGQlEzUkNMRWxCUVVrc1RVRkJUU3hIUVVGSExGRkJRVkU3VVVGRGNrSXNTMEZCU3l4TlFVRk5MRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlEyaERMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1EwRkJRenRaUVVNMVF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETzFsQlF6bENMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNN1UwRkRMMEk3VVVGRFJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NaVUZCWlR0UlFVTndSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEUxQlFVMDdVVUZETVVJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTzBsQlF6TkNMRU5CUVVNN1NVRkRVeXgzUWtGQmQwSXNRMEZCUXl4SlFVRnJRanRSUVVOdVJDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTTdVVUZETlVNc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4bFFVRmxMRU5CUTNoRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRMnhGTzFGQlEwUXNUMEZCVHl4TFFVRkxPMGxCUTJRc1EwRkJRenRKUVVOVExHMUNRVUZ0UWl4RFFVRkRMRTlCUVdkQ08xRkJRelZETEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1QwRkJUenRSUVVNM1FpeGpRVUZqTzFGQlEyUXNTVUZCU1N4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVTdXVUZET1VJc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRUUVVOd1F6dFJRVU5FTEdGQlFXRTdVVUZEWWl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVkQlFVY3NTVUZCU1N4blJFRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlR0WlFVTTNSQ3hMUVVGTExFVkJRVVVzVTBGQlV6dFpRVU5vUWl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1UwRkROVU1zUTBGQlF6dFJRVU5HTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVVeFF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ08yRkJRM1pDTEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTJ4RUxGTkJRVk1zUlVGQlJUdFJRVVZrTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRWRCUVVjc1JVRkJSVHRaUVVNdlF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTzFGQlEzSkRMRU5CUVVNc1EwRkJRenRSUVVOR0xFOUJRVThzUTBGQlF5eFpRVUZaTEVWQlFVVTdVVUZGZEVJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUTNSRUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzVDBGQlR5eERRVUZETzBsQlF5OURMRU5CUVVNN1NVRkRVeXhYUVVGWExFTkJRVU1zVDBGQk5FSTdVVUZEYUVRc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETzBsQlEzSkVMRU5CUVVNN1NVRkRVeXhaUVVGWk8xRkJRM0JDTEd0Q1FVRnJRanRSUVVOc1FpeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVU3VVVGRGVrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhGUVVGRk8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdXVUZETjBJc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NaMFJCUVU4c1EwRkJSU3hMUVVGdFFpeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMWxCUlRsRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVNM1FpeERRVUZETEVOQlFVTTdTVUZEU2l4RFFVRkRPMGxCUTA4c2EwSkJRV3RDTzFGQlEzaENMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlR0UlFVTnNReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZETlVNc1RVRkJUU3hQUVVGUExFZEJRWE5DTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUTJwRkxFdEJRVXNzUlVGQlJTeFRRVUZUTzJkQ1FVTm9RaXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WVVGRE5VTXNRMEZCUXp0WlFVTkdMR1ZCUVdVN1dVRkRaaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEdkRVFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXp0WlFVTTNSQ3hWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRaUVVOeVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRk8yZENRVU0xUWl4VlFVRlZMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnlSVHRaUVVORUxGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSVHRuUWtGRE1VSXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEU5QlFVOHNRMEZCUXp0WlFVTnVReXhEUVVGRExFTkJRVU03V1VGRFJpeFBRVUZQTEZWQlFWVTdVVUZEYmtJc1EwRkJReXhEUVVGRE8xRkJRMFlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdFpRVU5vUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEY2tNc1EwRkJReXhEUVVGRE8xRkJRMFlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1R0SlFVTXhRaXhEUVVGRE8wbEJRMDhzVVVGQlVTeERRVUZETEVsQlFXdENMRVZCUVVVc1NVRkJaMEk3VVVGRGJrUXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTzFGQlF6bENMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eHpRa0ZCYzBJc1MwRkJTeXhYUVVGWExFVkJRVVU3V1VGRGRrUXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4SlFVRkpMRU5CUVVNN1UwRkROVU03VVVGRFJDeFJRVUZSTEVsQlFVa3NSVUZCUlR0WlFVTmFMRXRCUVVzc1VVRkJVVHRuUWtGRFdDeFBRVUZQTERKRVFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRM1JDTEV0QlFVc3NVMEZCVXp0blFrRkRXaXhQUVVGUExEUkVRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUTNaQ08yZENRVU5GTEU5QlFVOHNTMEZCU3p0VFFVTm1PMGxCUTBnc1EwRkJRenREUVVOR096czdPenM3T3pzN096czdPMEZET1U5RU8wRkJRVUU3UVVGQlpTeE5RVUZOTEZGQlFWTXNVMEZCVVN4RFFVRkRMRU5CUVVNc1VVRkJVVHRKUVVjNVF5eFpRVUZaTEU5QlFXbERMRVZCUVVVc1QwRkJNa0k3VVVGRGVFVXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVTk5MRTlCUVU4c1EwRkJReXhKUVVGclFqdFJRVU12UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWs3U1VGRGNFSXNRMEZCUXp0SlFVTk5MRTlCUVU4N1VVRkRXaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTzBsQlEzQkNMRU5CUVVNN1EwRkRSanM3T3pzN096czdPenM3T3p0QlEyaENSRHRCUVVGQk8wRkJRVUU3UVVGQk5rTTdRVUZyUWpsQ0xFMUJRVTBzYjBKQlFYRkNMRk5CUVZFc2RVUkJRV003U1VGSE9VUXNXVUZEUlN4SFFVRlZMRVZCUTFZc1VVRkJkMElzUlVGRGVFSXNUMEZCYlVNc1JVRkRia01zVjBGQmQwSTdVVUZGZUVJc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeFJRVUZSTEVWQlFVVXNUMEZCVHl4RlFVRkZMRmRCUVZjc1EwRkJRenRSUVVNeFF5eE5RVUZOTEdOQlFXTXNSMEZCSzBJN1dVRkRha1FzZFVKQlFYVkNMRVZCUVVVc1VVRkJVVHRaUVVOcVF5eGxRVUZsTEVWQlFVVXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkROVUlzVVVGQlVTeEZRVUZGTEVkQlFVYzdXVUZEWWl4TFFVRkxMRVZCUVVVc1UwRkJVenRaUVVOb1FpeFBRVUZQTEVWQlFVVXNSMEZCUnp0VFFVTmlPMUZCUTBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eG5Ra0ZCWjBJN1VVRkROVUlzU1VGQlNTeERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhPMUZCUTJRc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTzFGQlEzaENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR6dFJRVU4wUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGZEJRVmM3VVVGRk9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSk8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSVHRSUVVOdVFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRkZCUVZFN1VVRkROVUlzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRPMUZCUTNSQ0xEaENRVUU0UWp0UlFVVTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxHTkJRV01zUlVGQlJTeFBRVUZQTEVOQlFVTTdTVUZETTBRc1EwRkJRenRKUVVOTkxFbEJRVWtzUTBGQlF5eFBRVUZ2UXp0UlFVTTVReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTTdVVUZEYmtRc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJUdFJRVU53UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3U1VGRGRFSXNRMEZCUXp0SlFVTk5MRTFCUVUwN1VVRkRXQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTnFRaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0VFFVTndRanRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMSGxDUVVGNVFpeEZRVUZGTzFGQlF6ZERMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkROMElzVDBGQlR5eEpRVUZKTzBsQlEySXNRMEZCUXp0SlFVTk5MRk5CUVZNN1VVRkRaQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03U1VGRGRFTXNRMEZCUXp0SlFVTk5MRk5CUVZNN1VVRkRaQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4SlFVRkpMRU5CUVVNc1JVRkJSVHRaUVVNNVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRk8xTkJRelZDTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGRE1VSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEZRVU0zUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVTTVRanRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTMEZCWVR0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxPMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdTVUZEWml4RFFVRkRPMGxCUTA4c2VVSkJRWGxDTzFGQlF5OUNMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlR0UlFVTnVReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRk8xbEJRMnhETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJUdG5Ra0ZEZUVJc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRkZCUVZFc1EwRkJRenRaUVVOeVF5eERRVUZETEVOQlFVTTdXVUZEUml4TlFVRk5MRTlCUVU4c1IwRkJLMElzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZEZGtRc1JVRkJSU3hGUVVOR0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlExbzdaMEpCUTBVc1MwRkJTeXhGUVVOSUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNkVUpCUVhWQ0xFdEJRVXNzVVVGQlVUdHZRa0ZETDBNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3p0dlFrRkRjRUlzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1lVRkRla1FzUTBGRFJqdFpRVVZFTEUxQlFVMHNZMEZCWXl4SFFVRkhMRU5CUVVNc1EwRkJReXhSUVVGUkxFTkJRemxDTEZGQlFWRXNRMEZCUXl4VlFVRlZMRVZCUVdsQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkRia1FzUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUTI1RExFVkJRMFFzVDBGQlR5eERRVU5TTzFsQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUlVGQlJUdG5Ra0ZETlVJc1kwRkJZeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRka1U3V1VGRFJDeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU03VVVGRE4wTXNRMEZCUXl4RFFVRkRPMUZCUTBZc1QwRkJUeXhKUVVGSkxFTkJRVU1zWVVGQllUdEpRVU16UWl4RFFVRkRPME5CUTBZN096czdPenM3T3pzN096czdRVU12UjBRN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQkswUTdRVUZEWmp0QlFXMUNha01zVFVGQlRTeGpRVUZqTzBsQlowSnFReXhaUVVORkxFZEJRVlVzUlVGRFZpeFJRVUYzUWl4RlFVTjRRaXhQUVVFMlFpeEZRVU0zUWl4WFFVRjNRanRSUVVWNFFpeE5RVUZOTEdOQlFXTXNSMEZCZVVJN1dVRkRNME1zUzBGQlN5eEZRVUZGTEZOQlFWTTdXVUZEYUVJc2RVSkJRWFZDTEVWQlFVVXNVVUZCVVR0WlFVTnFReXhsUVVGbExFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZETlVJc1UwRkJVeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRk8xbEJRM3BETEZkQlFWY3NSVUZCUlN4TlFVRk5PMU5CUTNCQ08xRkJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4VlFVRlZPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnp0UlFVTmtMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVUdFJRVU40UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMR05CUVdNc1JVRkJSU3hQUVVGUExFTkJRVU03VVVGRGVrUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhYUVVGWE8xRkJSVGxDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTVHRSUVVOdVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRVZCUVVVN1VVRkRia0lzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4UlFVRlJPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXp0UlFVTjBRaXhKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEVsQlFVazdVVUZETTBJc1NVRkJTU3hEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWxCUVVrN1NVRkRjRU1zUTBGQlF6dEpRVU5OTEVsQlFVa3NRMEZCUXl4UFFVRTRRanRSUVVONFF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNN1VVRkRia1FzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlR0UlFVTndRaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdTVUZEZEVJc1EwRkJRenRKUVVOTkxFMUJRVTA3VVVGRFdDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOcVFpeFBRVUZOTzFOQlExQTdVVUZEUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFpDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHRUUVVOd1FqdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZPMUZCUTNaRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRE4wSXNUMEZCVHl4SlFVRkpPMGxCUTJJc1EwRkJRenRKUVVOTkxGTkJRVk03VVVGRFpDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdTVUZEZEVNc1EwRkJRenRKUVVOTkxGTkJRVk03VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU01UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTzFOQlF6VkNPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZETVVJc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVTTNReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVNNVFqdEpRVU5JTEVOQlFVTTdTVUZEVFN4UFFVRlBPMUZCUTFvc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTnFRenRKUVVOSUxFTkJRVU03U1VGRFRTeGhRVUZoTEVOQlFVTXNUMEZCWjBJN1VVRkRia01zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMWxCUTJZc1QwRkJUVHRUUVVOUU8xRkJRMFFzU1VGQlNTeFBRVUZQTEVWQlFVVTdXVUZEV0N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUXpsQ08yRkJRVTA3V1VGRFRDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFOQlEycERPMGxCUTBnc1EwRkJRenRKUVVOTkxGZEJRVmNzUTBGQlF5eExRVUZoTzFGQlF6bENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEV0QlFVczdVVUZET1VJc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdEpRVU5tTEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1JVRkJWVHRSUVVOeVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTzFsQlEyeERMRWxCUVVrc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVN1owSkJRMmhETEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eFJRVUZSTEVOQlFVTTdaMEpCUTI1RExFOUJRVTA3WVVGRFVEdFJRVU5JTEVOQlFVTXNRMEZCUXp0SlFVTktMRU5CUVVNN1NVRkRVeXhoUVVGaE8xRkJRM0pDTEd0Q1FVRnJRanRSUVVOc1FpeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVU3VVVGRmVrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRk8xbEJRekZETEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UkN4cFEwRkJhVU03V1VGRGFrTXNPRVJCUVRoRU8xbEJRemxFTEdsRVFVRnBSRHRaUVVOcVJDeEpRVUZKTzFsQlEwb3NUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hwUkVGQlVTeERRVU14UWl4TFFVRnZRaXhEUVVGRExGVkJRVlVzUlVGQk9FSXNRMEZETDBRN1dVRkZSQ3hyUWtGQmEwSTdXVUZEYkVJc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTTdXVUZGZEVJc1QwRkJUeXhSUVVGUk8xRkJRMnBDTEVOQlFVTXNRMEZCUXp0SlFVTktMRU5CUVVNN1NVRkRVeXg1UWtGQmVVSXNRMEZCUXl4SlFVRnJRanRSUVVOd1JDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTTdVVUZETlVNc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4bFFVRmxMRU5CUTNoRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRMnhGTzFGQlEwUXNUMEZCVHl4TFFVRkxPMGxCUTJRc1EwRkJRenRKUVVOVExHOUNRVUZ2UWl4RFFVRkRMRkZCUVd0Q08xRkJReTlETEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1VVRkJVVHRSUVVNdlFpeGpRVUZqTzFGQlEyUXNTVUZCU1N4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVWQlFVVTdXVUZETDBJc1NVRkJTU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRUUVVOeVF6dFJRVU5FTEdGQlFXRTdVVUZEWWl4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVkQlFVY3NTVUZCU1N4cFJFRkJVU3hEUVVONFF5eFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRTRRaXhGUVVOcVJEdFpRVU5GTEV0QlFVc3NSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0WlFVTjRReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVVzVVVGQlVTeERRVUZETzFOQlEzWkVMRU5CUTBZN1VVRkRSQ3hKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZGTTBNc1NVRkJTU3hEUVVGRExITkNRVUZ6UWp0aFFVTjRRaXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU51UkN4VFFVRlRMRVZCUVVVN1VVRkZaQ3hKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeEhRVUZITEVWQlFVVTdXVUZEYUVRc1NVRkJTU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRSUVVOMFF5eERRVUZETEVOQlFVTTdVVUZGUml4UlFVRlJMRU5CUVVNc1dVRkJXU3hGUVVGRk8xRkJSWFpDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eHpRa0ZCYzBJc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU4yUkN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExHMUNRVUZ0UWl4RlFVRkZMRkZCUVZFc1EwRkJRenRKUVVOcVJDeERRVUZETzBsQlExTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQmEwSTdVVUZETlVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJRelZETEVOQlFVTTdTVUZEVXl4bFFVRmxMRU5CUVVNc1NVRkJhMEk3VVVGRE1VTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlF6TkNMRTlCUVU4c1JVRkJSVHRUUVVOV08xRkJRMFFzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhMUVVGTExGRkJRVkVzUlVGQlJUdFpRVU01UXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVWQlFVVTdVMEZEY0VVN1VVRkRSQ3hKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRXRCUVVzc1VVRkJVU3hGUVVGRk8xbEJRemxETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEV0QlEzQkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUTI1RExFVkJRVVU3VTBGRFNEdEpRVU5JTEVOQlFVTTdTVUZEVHl4dFFrRkJiVUk3VVVGRGVrSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTzFGQlEyNURMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVN1dVRkRiRU1zU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTE8xbEJRemxDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXgxUWtGQmRVSXNTMEZCU3l4WFFVRlhMRVZCUVVVN1owSkJRM2hFTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yRkJRek5FTzFsQlEwUXNUVUZCVFN4UFFVRlBMRWRCUVhOQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3WjBKQlEycEZMRXRCUVVzN1lVRkRUaXhEUVVGRE8xbEJRMFlzVFVGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4cFJFRkJVU3hEUVVNNVFpeFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRTRRaXhGUVVOcVJDeFBRVUZQTEVOQlExSTdXVUZEUkN4WFFVRlhMRU5CUVVNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVTdaMEpCUXpOQ0xFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhSUVVGUkxFTkJRVU03V1VGRGNrTXNRMEZCUXl4RFFVRkRPMWxCUTBZc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1dVRkRka01zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRE5VSXNWMEZCVnl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEZGtVN1dVRkRSQ3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRNVU1zUTBGQlF5eERRVUZETzFGQlEwWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1lVRkJZVHRKUVVNelFpeERRVUZETzBsQlEwOHNhMEpCUVd0Q08xRkJRM2hDTEUxQlFVMHNaVUZCWlN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMDdVVUZETTBRc1NVRkJTU3hOUVVGTkxFZEJRVWNzUTBGQlF5eFJRVUZSTzFGQlEzUkNMRWxCUVVrc1RVRkJUU3hIUVVGSExGRkJRVkU3VVVGRGNrSXNTMEZCU3l4TlFVRk5MRWxCUVVrc1NVRkJTU3hKUVVGSkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlEyaERMRTFCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1EwRkJRenRaUVVNMVF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eERRVUZETzFsQlF6bENMRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRU5CUVVNN1UwRkRMMEk3VVVGRFJDeE5RVUZOTEVsQlFVa3NSMEZCUnl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NaVUZCWlR0UlFVTndSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEUxQlFVMDdVVUZETVVJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTzBsQlF6TkNMRU5CUVVNN1NVRkRUeXhSUVVGUkxFTkJRVU1zU1VGQmEwSXNSVUZCUlN4SlFVRm5RanRSUVVOdVJDeEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXM3VVVGRE9VSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExIVkNRVUYxUWl4TFFVRkxMRmRCUVZjc1JVRkJSVHRaUVVONFJDeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMSGxDUVVGNVFpeERRVUZETEVsQlFVa3NRMEZCUXp0VFFVTTNRenRSUVVORUxGRkJRVkVzU1VGQlNTeEZRVUZGTzFsQlExb3NTMEZCU3l4UlFVRlJPMmRDUVVOWUxFOUJRVThzTWtSQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNN1dVRkRkRUlzUzBGQlN5eFRRVUZUTzJkQ1FVTmFMRTlCUVU4c05FUkJRVThzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZEZGtJN1owSkJRMFVzVDBGQlR5eExRVUZMTzFOQlEyWTdTVUZEU0N4RFFVRkRPME5CUTBZN096czdPenM3T3pzN096czdRVU51VUVRN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUU0UWp0QlFVVTVRaXhUUVVGVExFOUJRVThzUTBGQlF5eFJRVUZuUWp0SlFVTXZRaXhQUVVGUExHdERRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRPMU5CUTI1Q0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTTdVMEZEV2l4SFFVRkhMRVZCUVVVN1FVRkRWaXhEUVVGRE8wRkJRMFFzVTBGQlV5eE5RVUZOTEVOQlFVTXNVVUZCWjBJN1NVRkRPVUlzVDBGQlR5eHJRMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJRenRUUVVOdVFpeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPMU5CUTFnc1IwRkJSeXhGUVVGRk8wRkJRMVlzUTBGQlF6dEJRVU5qTzBsQlEySXNUMEZCVHp0SlFVTlFMRTFCUVUwN1EwRkRVRHRCUVVONVFpSXNJbVpwYkdVaU9pSnNaV0ZtYkdWMExXeGhlV1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9XMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aWJHVmhabXhsZEUxaGNGd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSnNaV0ZtYkdWMFRXRndYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVmU2tvZDJsdVpHOTNMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlBaUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdYQ0l1TDNOeVl5OXBibVJsZUM1MGMxd2lLVHRjYmlJc0lpOHFJRTFKVkNCc2FXTmxibk5sSUNvdlhHNTJZWElnWTNOelMyVjVkMjl5WkhNZ1BTQnlaWEYxYVhKbEtDZGpiMnh2Y2kxdVlXMWxKeWs3WEc1Y2JpOHZJRTVQVkVVNklHTnZiblpsY25OcGIyNXpJSE5vYjNWc1pDQnZibXg1SUhKbGRIVnliaUJ3Y21sdGFYUnBkbVVnZG1Gc2RXVnpJQ2hwTG1VdUlHRnljbUY1Y3l3Z2IzSmNiaTh2SUNBZ0lDQWdJSFpoYkhWbGN5QjBhR0YwSUdkcGRtVWdZMjl5Y21WamRDQmdkSGx3Wlc5bVlDQnlaWE4xYkhSektTNWNiaTh2SUNBZ0lDQWdJR1J2SUc1dmRDQjFjMlVnWW05NElIWmhiSFZsY3lCMGVYQmxjeUFvYVM1bExpQk9kVzFpWlhJb0tTd2dVM1J5YVc1bktDa3NJR1YwWXk0cFhHNWNiblpoY2lCeVpYWmxjbk5sUzJWNWQyOXlaSE1nUFNCN2ZUdGNibVp2Y2lBb2RtRnlJR3RsZVNCcGJpQmpjM05MWlhsM2IzSmtjeWtnZTF4dVhIUnBaaUFvWTNOelMyVjVkMjl5WkhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1WEhSY2RISmxkbVZ5YzJWTFpYbDNiM0prYzF0amMzTkxaWGwzYjNKa2MxdHJaWGxkWFNBOUlHdGxlVHRjYmx4MGZWeHVmVnh1WEc1MllYSWdZMjl1ZG1WeWRDQTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh1WEhSeVoySTZJSHRqYUdGdWJtVnNjem9nTXl3Z2JHRmlaV3h6T2lBbmNtZGlKMzBzWEc1Y2RHaHpiRG9nZTJOb1lXNXVaV3h6T2lBekxDQnNZV0psYkhNNklDZG9jMnduZlN4Y2JseDBhSE4yT2lCN1kyaGhibTVsYkhNNklETXNJR3hoWW1Wc2N6b2dKMmh6ZGlkOUxGeHVYSFJvZDJJNklIdGphR0Z1Ym1Wc2N6b2dNeXdnYkdGaVpXeHpPaUFuYUhkaUozMHNYRzVjZEdOdGVXczZJSHRqYUdGdWJtVnNjem9nTkN3Z2JHRmlaV3h6T2lBblkyMTVheWQ5TEZ4dVhIUjRlWG82SUh0amFHRnVibVZzY3pvZ015d2diR0ZpWld4ek9pQW5lSGw2SjMwc1hHNWNkR3hoWWpvZ2UyTm9ZVzV1Wld4ek9pQXpMQ0JzWVdKbGJITTZJQ2RzWVdJbmZTeGNibHgwYkdOb09pQjdZMmhoYm01bGJITTZJRE1zSUd4aFltVnNjem9nSjJ4amFDZDlMRnh1WEhSb1pYZzZJSHRqYUdGdWJtVnNjem9nTVN3Z2JHRmlaV3h6T2lCYkoyaGxlQ2RkZlN4Y2JseDBhMlY1ZDI5eVpEb2dlMk5vWVc1dVpXeHpPaUF4TENCc1lXSmxiSE02SUZzbmEyVjVkMjl5WkNkZGZTeGNibHgwWVc1emFURTJPaUI3WTJoaGJtNWxiSE02SURFc0lHeGhZbVZzY3pvZ1d5ZGhibk5wTVRZblhYMHNYRzVjZEdGdWMya3lOVFk2SUh0amFHRnVibVZzY3pvZ01Td2diR0ZpWld4ek9pQmJKMkZ1YzJreU5UWW5YWDBzWEc1Y2RHaGpaem9nZTJOb1lXNXVaV3h6T2lBekxDQnNZV0psYkhNNklGc25hQ2NzSUNkakp5d2dKMmNuWFgwc1hHNWNkR0Z3Y0d4bE9pQjdZMmhoYm01bGJITTZJRE1zSUd4aFltVnNjem9nV3lkeU1UWW5MQ0FuWnpFMkp5d2dKMkl4TmlkZGZTeGNibHgwWjNKaGVUb2dlMk5vWVc1dVpXeHpPaUF4TENCc1lXSmxiSE02SUZzblozSmhlU2RkZlZ4dWZUdGNibHh1THk4Z2FHbGtaU0F1WTJoaGJtNWxiSE1nWVc1a0lDNXNZV0psYkhNZ2NISnZjR1Z5ZEdsbGMxeHVabTl5SUNoMllYSWdiVzlrWld3Z2FXNGdZMjl1ZG1WeWRDa2dlMXh1WEhScFppQW9ZMjl1ZG1WeWRDNW9ZWE5QZDI1UWNtOXdaWEowZVNodGIyUmxiQ2twSUh0Y2JseDBYSFJwWmlBb0lTZ25ZMmhoYm01bGJITW5JR2x1SUdOdmJuWmxjblJiYlc5a1pXeGRLU2tnZTF4dVhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2R0YVhOemFXNW5JR05vWVc1dVpXeHpJSEJ5YjNCbGNuUjVPaUFuSUNzZ2JXOWtaV3dwTzF4dVhIUmNkSDFjYmx4dVhIUmNkR2xtSUNnaEtDZHNZV0psYkhNbklHbHVJR052Ym5abGNuUmJiVzlrWld4ZEtTa2dlMXh1WEhSY2RGeDBkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZHRhWE56YVc1bklHTm9ZVzV1Wld3Z2JHRmlaV3h6SUhCeWIzQmxjblI1T2lBbklDc2diVzlrWld3cE8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaGpiMjUyWlhKMFcyMXZaR1ZzWFM1c1lXSmxiSE11YkdWdVozUm9JQ0U5UFNCamIyNTJaWEowVzIxdlpHVnNYUzVqYUdGdWJtVnNjeWtnZTF4dVhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RqYUdGdWJtVnNJR0Z1WkNCc1lXSmxiQ0JqYjNWdWRITWdiV2x6YldGMFkyZzZJQ2NnS3lCdGIyUmxiQ2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBkbUZ5SUdOb1lXNXVaV3h6SUQwZ1kyOXVkbVZ5ZEZ0dGIyUmxiRjB1WTJoaGJtNWxiSE03WEc1Y2RGeDBkbUZ5SUd4aFltVnNjeUE5SUdOdmJuWmxjblJiYlc5a1pXeGRMbXhoWW1Wc2N6dGNibHgwWEhSa1pXeGxkR1VnWTI5dWRtVnlkRnR0YjJSbGJGMHVZMmhoYm01bGJITTdYRzVjZEZ4MFpHVnNaWFJsSUdOdmJuWmxjblJiYlc5a1pXeGRMbXhoWW1Wc2N6dGNibHgwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ZMjl1ZG1WeWRGdHRiMlJsYkYwc0lDZGphR0Z1Ym1Wc2N5Y3NJSHQyWVd4MVpUb2dZMmhoYm01bGJITjlLVHRjYmx4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWTI5dWRtVnlkRnR0YjJSbGJGMHNJQ2RzWVdKbGJITW5MQ0I3ZG1Gc2RXVTZJR3hoWW1Wc2MzMHBPMXh1WEhSOVhHNTlYRzVjYm1OdmJuWmxjblF1Y21kaUxtaHpiQ0E5SUdaMWJtTjBhVzl1SUNoeVoySXBJSHRjYmx4MGRtRnlJSElnUFNCeVoySmJNRjBnTHlBeU5UVTdYRzVjZEhaaGNpQm5JRDBnY21kaVd6RmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1lpQTlJSEpuWWxzeVhTQXZJREkxTlR0Y2JseDBkbUZ5SUcxcGJpQTlJRTFoZEdndWJXbHVLSElzSUdjc0lHSXBPMXh1WEhSMllYSWdiV0Y0SUQwZ1RXRjBhQzV0WVhnb2Npd2daeXdnWWlrN1hHNWNkSFpoY2lCa1pXeDBZU0E5SUcxaGVDQXRJRzFwYmp0Y2JseDBkbUZ5SUdnN1hHNWNkSFpoY2lCek8xeHVYSFIyWVhJZ2JEdGNibHh1WEhScFppQW9iV0Y0SUQwOVBTQnRhVzRwSUh0Y2JseDBYSFJvSUQwZ01EdGNibHgwZlNCbGJITmxJR2xtSUNoeUlEMDlQU0J0WVhncElIdGNibHgwWEhSb0lEMGdLR2NnTFNCaUtTQXZJR1JsYkhSaE8xeHVYSFI5SUdWc2MyVWdhV1lnS0djZ1BUMDlJRzFoZUNrZ2UxeHVYSFJjZEdnZ1BTQXlJQ3NnS0dJZ0xTQnlLU0F2SUdSbGJIUmhPMXh1WEhSOUlHVnNjMlVnYVdZZ0tHSWdQVDA5SUcxaGVDa2dlMXh1WEhSY2RHZ2dQU0EwSUNzZ0tISWdMU0JuS1NBdklHUmxiSFJoTzF4dVhIUjlYRzVjYmx4MGFDQTlJRTFoZEdndWJXbHVLR2dnS2lBMk1Dd2dNell3S1R0Y2JseHVYSFJwWmlBb2FDQThJREFwSUh0Y2JseDBYSFJvSUNzOUlETTJNRHRjYmx4MGZWeHVYRzVjZEd3Z1BTQW9iV2x1SUNzZ2JXRjRLU0F2SURJN1hHNWNibHgwYVdZZ0tHMWhlQ0E5UFQwZ2JXbHVLU0I3WEc1Y2RGeDBjeUE5SURBN1hHNWNkSDBnWld4elpTQnBaaUFvYkNBOFBTQXdMalVwSUh0Y2JseDBYSFJ6SUQwZ1pHVnNkR0VnTHlBb2JXRjRJQ3NnYldsdUtUdGNibHgwZlNCbGJITmxJSHRjYmx4MFhIUnpJRDBnWkdWc2RHRWdMeUFvTWlBdElHMWhlQ0F0SUcxcGJpazdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdXMmdzSUhNZ0tpQXhNREFzSUd3Z0tpQXhNREJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzV5WjJJdWFITjJJRDBnWm5WdVkzUnBiMjRnS0hKbllpa2dlMXh1WEhSMllYSWdjbVJwWmp0Y2JseDBkbUZ5SUdka2FXWTdYRzVjZEhaaGNpQmlaR2xtTzF4dVhIUjJZWElnYUR0Y2JseDBkbUZ5SUhNN1hHNWNibHgwZG1GeUlISWdQU0J5WjJKYk1GMGdMeUF5TlRVN1hHNWNkSFpoY2lCbklEMGdjbWRpV3pGZElDOGdNalUxTzF4dVhIUjJZWElnWWlBOUlISm5ZbHN5WFNBdklESTFOVHRjYmx4MGRtRnlJSFlnUFNCTllYUm9MbTFoZUNoeUxDQm5MQ0JpS1R0Y2JseDBkbUZ5SUdScFptWWdQU0IySUMwZ1RXRjBhQzV0YVc0b2Npd2daeXdnWWlrN1hHNWNkSFpoY2lCa2FXWm1ZeUE5SUdaMWJtTjBhVzl1SUNoaktTQjdYRzVjZEZ4MGNtVjBkWEp1SUNoMklDMGdZeWtnTHlBMklDOGdaR2xtWmlBcklERWdMeUF5TzF4dVhIUjlPMXh1WEc1Y2RHbG1JQ2hrYVdabUlEMDlQU0F3S1NCN1hHNWNkRngwYUNBOUlITWdQU0F3TzF4dVhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEhNZ1BTQmthV1ptSUM4Z2RqdGNibHgwWEhSeVpHbG1JRDBnWkdsbVptTW9jaWs3WEc1Y2RGeDBaMlJwWmlBOUlHUnBabVpqS0djcE8xeHVYSFJjZEdKa2FXWWdQU0JrYVdabVl5aGlLVHRjYmx4dVhIUmNkR2xtSUNoeUlEMDlQU0IyS1NCN1hHNWNkRngwWEhSb0lEMGdZbVJwWmlBdElHZGthV1k3WEc1Y2RGeDBmU0JsYkhObElHbG1JQ2huSUQwOVBTQjJLU0I3WEc1Y2RGeDBYSFJvSUQwZ0tERWdMeUF6S1NBcklISmthV1lnTFNCaVpHbG1PMXh1WEhSY2RIMGdaV3h6WlNCcFppQW9ZaUE5UFQwZ2Rpa2dlMXh1WEhSY2RGeDBhQ0E5SUNneUlDOGdNeWtnS3lCblpHbG1JQzBnY21ScFpqdGNibHgwWEhSOVhHNWNkRngwYVdZZ0tHZ2dQQ0F3S1NCN1hHNWNkRngwWEhSb0lDczlJREU3WEc1Y2RGeDBmU0JsYkhObElHbG1JQ2hvSUQ0Z01Ta2dlMXh1WEhSY2RGeDBhQ0F0UFNBeE8xeHVYSFJjZEgxY2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCYlhHNWNkRngwYUNBcUlETTJNQ3hjYmx4MFhIUnpJQ29nTVRBd0xGeHVYSFJjZEhZZ0tpQXhNREJjYmx4MFhUdGNibjA3WEc1Y2JtTnZiblpsY25RdWNtZGlMbWgzWWlBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBkbUZ5SUhJZ1BTQnlaMkpiTUYwN1hHNWNkSFpoY2lCbklEMGdjbWRpV3pGZE8xeHVYSFIyWVhJZ1lpQTlJSEpuWWxzeVhUdGNibHgwZG1GeUlHZ2dQU0JqYjI1MlpYSjBMbkpuWWk1b2Myd29jbWRpS1Zzd1hUdGNibHgwZG1GeUlIY2dQU0F4SUM4Z01qVTFJQ29nVFdGMGFDNXRhVzRvY2l3Z1RXRjBhQzV0YVc0b1p5d2dZaWtwTzF4dVhHNWNkR0lnUFNBeElDMGdNU0F2SURJMU5TQXFJRTFoZEdndWJXRjRLSElzSUUxaGRHZ3ViV0Y0S0djc0lHSXBLVHRjYmx4dVhIUnlaWFIxY200Z1cyZ3NJSGNnS2lBeE1EQXNJR0lnS2lBeE1EQmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNXlaMkl1WTIxNWF5QTlJR1oxYm1OMGFXOXVJQ2h5WjJJcElIdGNibHgwZG1GeUlISWdQU0J5WjJKYk1GMGdMeUF5TlRVN1hHNWNkSFpoY2lCbklEMGdjbWRpV3pGZElDOGdNalUxTzF4dVhIUjJZWElnWWlBOUlISm5ZbHN5WFNBdklESTFOVHRjYmx4MGRtRnlJR003WEc1Y2RIWmhjaUJ0TzF4dVhIUjJZWElnZVR0Y2JseDBkbUZ5SUdzN1hHNWNibHgwYXlBOUlFMWhkR2d1YldsdUtERWdMU0J5TENBeElDMGdaeXdnTVNBdElHSXBPMXh1WEhSaklEMGdLREVnTFNCeUlDMGdheWtnTHlBb01TQXRJR3NwSUh4OElEQTdYRzVjZEcwZ1BTQW9NU0F0SUdjZ0xTQnJLU0F2SUNneElDMGdheWtnZkh3Z01EdGNibHgwZVNBOUlDZ3hJQzBnWWlBdElHc3BJQzhnS0RFZ0xTQnJLU0I4ZkNBd08xeHVYRzVjZEhKbGRIVnliaUJiWXlBcUlERXdNQ3dnYlNBcUlERXdNQ3dnZVNBcUlERXdNQ3dnYXlBcUlERXdNRjA3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRk5sWlNCb2RIUndjem92TDJWdUxtMHVkMmxyYVhCbFpHbGhMbTl5Wnk5M2FXdHBMMFYxWTJ4cFpHVmhibDlrYVhOMFlXNWpaU05UY1hWaGNtVmtYMFYxWTJ4cFpHVmhibDlrYVhOMFlXNWpaVnh1SUNvZ0tpOWNibVoxYm1OMGFXOXVJR052YlhCaGNtRjBhWFpsUkdsemRHRnVZMlVvZUN3Z2VTa2dlMXh1WEhSeVpYUjFjbTRnS0Z4dVhIUmNkRTFoZEdndWNHOTNLSGhiTUYwZ0xTQjVXekJkTENBeUtTQXJYRzVjZEZ4MFRXRjBhQzV3YjNjb2VGc3hYU0F0SUhsYk1WMHNJRElwSUN0Y2JseDBYSFJOWVhSb0xuQnZkeWg0V3pKZElDMGdlVnN5WFN3Z01pbGNibHgwS1R0Y2JuMWNibHh1WTI5dWRtVnlkQzV5WjJJdWEyVjVkMjl5WkNBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBkbUZ5SUhKbGRtVnljMlZrSUQwZ2NtVjJaWEp6WlV0bGVYZHZjbVJ6VzNKbllsMDdYRzVjZEdsbUlDaHlaWFpsY25ObFpDa2dlMXh1WEhSY2RISmxkSFZ5YmlCeVpYWmxjbk5sWkR0Y2JseDBmVnh1WEc1Y2RIWmhjaUJqZFhKeVpXNTBRMnh2YzJWemRFUnBjM1JoYm1ObElEMGdTVzVtYVc1cGRIazdYRzVjZEhaaGNpQmpkWEp5Wlc1MFEyeHZjMlZ6ZEV0bGVYZHZjbVE3WEc1Y2JseDBabTl5SUNoMllYSWdhMlY1ZDI5eVpDQnBiaUJqYzNOTFpYbDNiM0prY3lrZ2UxeHVYSFJjZEdsbUlDaGpjM05MWlhsM2IzSmtjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGwzYjNKa0tTa2dlMXh1WEhSY2RGeDBkbUZ5SUhaaGJIVmxJRDBnWTNOelMyVjVkMjl5WkhOYmEyVjVkMjl5WkYwN1hHNWNibHgwWEhSY2RDOHZJRU52YlhCMWRHVWdZMjl0Y0dGeVlYUnBkbVVnWkdsemRHRnVZMlZjYmx4MFhIUmNkSFpoY2lCa2FYTjBZVzVqWlNBOUlHTnZiWEJoY21GMGFYWmxSR2x6ZEdGdVkyVW9jbWRpTENCMllXeDFaU2s3WEc1Y2JseDBYSFJjZEM4dklFTm9aV05ySUdsbUlHbDBjeUJzWlhOekxDQnBaaUJ6YnlCelpYUWdZWE1nWTJ4dmMyVnpkRnh1WEhSY2RGeDBhV1lnS0dScGMzUmhibU5sSUR3Z1kzVnljbVZ1ZEVOc2IzTmxjM1JFYVhOMFlXNWpaU2tnZTF4dVhIUmNkRngwWEhSamRYSnlaVzUwUTJ4dmMyVnpkRVJwYzNSaGJtTmxJRDBnWkdsemRHRnVZMlU3WEc1Y2RGeDBYSFJjZEdOMWNuSmxiblJEYkc5elpYTjBTMlY1ZDI5eVpDQTlJR3RsZVhkdmNtUTdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlHTjFjbkpsYm5SRGJHOXpaWE4wUzJWNWQyOXlaRHRjYm4wN1hHNWNibU52Ym5abGNuUXVhMlY1ZDI5eVpDNXlaMklnUFNCbWRXNWpkR2x2YmlBb2EyVjVkMjl5WkNrZ2UxeHVYSFJ5WlhSMWNtNGdZM056UzJWNWQyOXlaSE5iYTJWNWQyOXlaRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1NGVYb2dQU0JtZFc1amRHbHZiaUFvY21kaUtTQjdYRzVjZEhaaGNpQnlJRDBnY21kaVd6QmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1p5QTlJSEpuWWxzeFhTQXZJREkxTlR0Y2JseDBkbUZ5SUdJZ1BTQnlaMkpiTWwwZ0x5QXlOVFU3WEc1Y2JseDBMeThnWVhOemRXMWxJSE5TUjBKY2JseDBjaUE5SUhJZ1BpQXdMakEwTURRMUlEOGdUV0YwYUM1d2IzY29LQ2h5SUNzZ01DNHdOVFVwSUM4Z01TNHdOVFVwTENBeUxqUXBJRG9nS0hJZ0x5QXhNaTQ1TWlrN1hHNWNkR2NnUFNCbklENGdNQzR3TkRBME5TQS9JRTFoZEdndWNHOTNLQ2dvWnlBcklEQXVNRFUxS1NBdklERXVNRFUxS1N3Z01pNDBLU0E2SUNobklDOGdNVEl1T1RJcE8xeHVYSFJpSUQwZ1lpQStJREF1TURRd05EVWdQeUJOWVhSb0xuQnZkeWdvS0dJZ0t5QXdMakExTlNrZ0x5QXhMakExTlNrc0lESXVOQ2tnT2lBb1lpQXZJREV5TGpreUtUdGNibHh1WEhSMllYSWdlQ0E5SUNoeUlDb2dNQzQwTVRJMEtTQXJJQ2huSUNvZ01DNHpOVGMyS1NBcklDaGlJQ29nTUM0eE9EQTFLVHRjYmx4MGRtRnlJSGtnUFNBb2NpQXFJREF1TWpFeU5pa2dLeUFvWnlBcUlEQXVOekUxTWlrZ0t5QW9ZaUFxSURBdU1EY3lNaWs3WEc1Y2RIWmhjaUI2SUQwZ0tISWdLaUF3TGpBeE9UTXBJQ3NnS0djZ0tpQXdMakV4T1RJcElDc2dLR0lnS2lBd0xqazFNRFVwTzF4dVhHNWNkSEpsZEhWeWJpQmJlQ0FxSURFd01Dd2dlU0FxSURFd01Dd2dlaUFxSURFd01GMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExuSm5ZaTVzWVdJZ1BTQm1kVzVqZEdsdmJpQW9jbWRpS1NCN1hHNWNkSFpoY2lCNGVYb2dQU0JqYjI1MlpYSjBMbkpuWWk1NGVYb29jbWRpS1R0Y2JseDBkbUZ5SUhnZ1BTQjRlWHBiTUYwN1hHNWNkSFpoY2lCNUlEMGdlSGw2V3pGZE8xeHVYSFIyWVhJZ2VpQTlJSGg1ZWxzeVhUdGNibHgwZG1GeUlHdzdYRzVjZEhaaGNpQmhPMXh1WEhSMllYSWdZanRjYmx4dVhIUjRJQzg5SURrMUxqQTBOenRjYmx4MGVTQXZQU0F4TURBN1hHNWNkSG9nTHowZ01UQTRMamc0TXp0Y2JseHVYSFI0SUQwZ2VDQStJREF1TURBNE9EVTJJRDhnVFdGMGFDNXdiM2NvZUN3Z01TQXZJRE1wSURvZ0tEY3VOemczSUNvZ2VDa2dLeUFvTVRZZ0x5QXhNVFlwTzF4dVhIUjVJRDBnZVNBK0lEQXVNREE0T0RVMklEOGdUV0YwYUM1d2IzY29lU3dnTVNBdklETXBJRG9nS0RjdU56ZzNJQ29nZVNrZ0t5QW9NVFlnTHlBeE1UWXBPMXh1WEhSNklEMGdlaUErSURBdU1EQTRPRFUySUQ4Z1RXRjBhQzV3YjNjb2Vpd2dNU0F2SURNcElEb2dLRGN1TnpnM0lDb2dlaWtnS3lBb01UWWdMeUF4TVRZcE8xeHVYRzVjZEd3Z1BTQW9NVEUySUNvZ2VTa2dMU0F4Tmp0Y2JseDBZU0E5SURVd01DQXFJQ2g0SUMwZ2VTazdYRzVjZEdJZ1BTQXlNREFnS2lBb2VTQXRJSG9wTzF4dVhHNWNkSEpsZEhWeWJpQmJiQ3dnWVN3Z1lsMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExtaHpiQzV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9hSE5zS1NCN1hHNWNkSFpoY2lCb0lEMGdhSE5zV3pCZElDOGdNell3TzF4dVhIUjJZWElnY3lBOUlHaHpiRnN4WFNBdklERXdNRHRjYmx4MGRtRnlJR3dnUFNCb2MyeGJNbDBnTHlBeE1EQTdYRzVjZEhaaGNpQjBNVHRjYmx4MGRtRnlJSFF5TzF4dVhIUjJZWElnZERNN1hHNWNkSFpoY2lCeVoySTdYRzVjZEhaaGNpQjJZV3c3WEc1Y2JseDBhV1lnS0hNZ1BUMDlJREFwSUh0Y2JseDBYSFIyWVd3Z1BTQnNJQ29nTWpVMU8xeHVYSFJjZEhKbGRIVnliaUJiZG1Gc0xDQjJZV3dzSUhaaGJGMDdYRzVjZEgxY2JseHVYSFJwWmlBb2JDQThJREF1TlNrZ2UxeHVYSFJjZEhReUlEMGdiQ0FxSUNneElDc2djeWs3WEc1Y2RIMGdaV3h6WlNCN1hHNWNkRngwZERJZ1BTQnNJQ3NnY3lBdElHd2dLaUJ6TzF4dVhIUjlYRzVjYmx4MGRERWdQU0F5SUNvZ2JDQXRJSFF5TzF4dVhHNWNkSEpuWWlBOUlGc3dMQ0F3TENBd1hUdGNibHgwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENBek95QnBLeXNwSUh0Y2JseDBYSFIwTXlBOUlHZ2dLeUF4SUM4Z015QXFJQzBvYVNBdElERXBPMXh1WEhSY2RHbG1JQ2gwTXlBOElEQXBJSHRjYmx4MFhIUmNkSFF6S3lzN1hHNWNkRngwZlZ4dVhIUmNkR2xtSUNoME15QStJREVwSUh0Y2JseDBYSFJjZEhRekxTMDdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLRFlnS2lCME15QThJREVwSUh0Y2JseDBYSFJjZEhaaGJDQTlJSFF4SUNzZ0tIUXlJQzBnZERFcElDb2dOaUFxSUhRek8xeHVYSFJjZEgwZ1pXeHpaU0JwWmlBb01pQXFJSFF6SUR3Z01Ta2dlMXh1WEhSY2RGeDBkbUZzSUQwZ2RESTdYRzVjZEZ4MGZTQmxiSE5sSUdsbUlDZ3pJQ29nZERNZ1BDQXlLU0I3WEc1Y2RGeDBYSFIyWVd3Z1BTQjBNU0FySUNoME1pQXRJSFF4S1NBcUlDZ3lJQzhnTXlBdElIUXpLU0FxSURZN1hHNWNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkSFpoYkNBOUlIUXhPMXh1WEhSY2RIMWNibHh1WEhSY2RISm5ZbHRwWFNBOUlIWmhiQ0FxSURJMU5UdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQnlaMkk3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWh6YkM1b2MzWWdQU0JtZFc1amRHbHZiaUFvYUhOc0tTQjdYRzVjZEhaaGNpQm9JRDBnYUhOc1d6QmRPMXh1WEhSMllYSWdjeUE5SUdoemJGc3hYU0F2SURFd01EdGNibHgwZG1GeUlHd2dQU0JvYzJ4Yk1sMGdMeUF4TURBN1hHNWNkSFpoY2lCemJXbHVJRDBnY3p0Y2JseDBkbUZ5SUd4dGFXNGdQU0JOWVhSb0xtMWhlQ2hzTENBd0xqQXhLVHRjYmx4MGRtRnlJSE4yTzF4dVhIUjJZWElnZGp0Y2JseHVYSFJzSUNvOUlESTdYRzVjZEhNZ0tqMGdLR3dnUEQwZ01Ta2dQeUJzSURvZ01pQXRJR3c3WEc1Y2RITnRhVzRnS2owZ2JHMXBiaUE4UFNBeElEOGdiRzFwYmlBNklESWdMU0JzYldsdU8xeHVYSFIySUQwZ0tHd2dLeUJ6S1NBdklESTdYRzVjZEhOMklEMGdiQ0E5UFQwZ01DQS9JQ2d5SUNvZ2MyMXBiaWtnTHlBb2JHMXBiaUFySUhOdGFXNHBJRG9nS0RJZ0tpQnpLU0F2SUNoc0lDc2djeWs3WEc1Y2JseDBjbVYwZFhKdUlGdG9MQ0J6ZGlBcUlERXdNQ3dnZGlBcUlERXdNRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWh6ZGk1eVoySWdQU0JtZFc1amRHbHZiaUFvYUhOMktTQjdYRzVjZEhaaGNpQm9JRDBnYUhOMld6QmRJQzhnTmpBN1hHNWNkSFpoY2lCeklEMGdhSE4yV3pGZElDOGdNVEF3TzF4dVhIUjJZWElnZGlBOUlHaHpkbHN5WFNBdklERXdNRHRjYmx4MGRtRnlJR2hwSUQwZ1RXRjBhQzVtYkc5dmNpaG9LU0FsSURZN1hHNWNibHgwZG1GeUlHWWdQU0JvSUMwZ1RXRjBhQzVtYkc5dmNpaG9LVHRjYmx4MGRtRnlJSEFnUFNBeU5UVWdLaUIySUNvZ0tERWdMU0J6S1R0Y2JseDBkbUZ5SUhFZ1BTQXlOVFVnS2lCMklDb2dLREVnTFNBb2N5QXFJR1lwS1R0Y2JseDBkbUZ5SUhRZ1BTQXlOVFVnS2lCMklDb2dLREVnTFNBb2N5QXFJQ2d4SUMwZ1ppa3BLVHRjYmx4MGRpQXFQU0F5TlRVN1hHNWNibHgwYzNkcGRHTm9JQ2hvYVNrZ2UxeHVYSFJjZEdOaGMyVWdNRHBjYmx4MFhIUmNkSEpsZEhWeWJpQmJkaXdnZEN3Z2NGMDdYRzVjZEZ4MFkyRnpaU0F4T2x4dVhIUmNkRngwY21WMGRYSnVJRnR4TENCMkxDQndYVHRjYmx4MFhIUmpZWE5sSURJNlhHNWNkRngwWEhSeVpYUjFjbTRnVzNBc0lIWXNJSFJkTzF4dVhIUmNkR05oYzJVZ016cGNibHgwWEhSY2RISmxkSFZ5YmlCYmNDd2djU3dnZGwwN1hHNWNkRngwWTJGelpTQTBPbHh1WEhSY2RGeDBjbVYwZFhKdUlGdDBMQ0J3TENCMlhUdGNibHgwWEhSallYTmxJRFU2WEc1Y2RGeDBYSFJ5WlhSMWNtNGdXM1lzSUhBc0lIRmRPMXh1WEhSOVhHNTlPMXh1WEc1amIyNTJaWEowTG1oemRpNW9jMndnUFNCbWRXNWpkR2x2YmlBb2FITjJLU0I3WEc1Y2RIWmhjaUJvSUQwZ2FITjJXekJkTzF4dVhIUjJZWElnY3lBOUlHaHpkbHN4WFNBdklERXdNRHRjYmx4MGRtRnlJSFlnUFNCb2MzWmJNbDBnTHlBeE1EQTdYRzVjZEhaaGNpQjJiV2x1SUQwZ1RXRjBhQzV0WVhnb2Rpd2dNQzR3TVNrN1hHNWNkSFpoY2lCc2JXbHVPMXh1WEhSMllYSWdjMnc3WEc1Y2RIWmhjaUJzTzF4dVhHNWNkR3dnUFNBb01pQXRJSE1wSUNvZ2RqdGNibHgwYkcxcGJpQTlJQ2d5SUMwZ2N5a2dLaUIyYldsdU8xeHVYSFJ6YkNBOUlITWdLaUIyYldsdU8xeHVYSFJ6YkNBdlBTQW9iRzFwYmlBOFBTQXhLU0EvSUd4dGFXNGdPaUF5SUMwZ2JHMXBianRjYmx4MGMyd2dQU0J6YkNCOGZDQXdPMXh1WEhSc0lDODlJREk3WEc1Y2JseDBjbVYwZFhKdUlGdG9MQ0J6YkNBcUlERXdNQ3dnYkNBcUlERXdNRjA3WEc1OU8xeHVYRzR2THlCb2RIUndPaTh2WkdWMkxuY3pMbTl5Wnk5amMzTjNaeTlqYzNNdFkyOXNiM0l2STJoM1lpMTBieTF5WjJKY2JtTnZiblpsY25RdWFIZGlMbkpuWWlBOUlHWjFibU4wYVc5dUlDaG9kMklwSUh0Y2JseDBkbUZ5SUdnZ1BTQm9kMkpiTUYwZ0x5QXpOakE3WEc1Y2RIWmhjaUIzYUNBOUlHaDNZbHN4WFNBdklERXdNRHRjYmx4MGRtRnlJR0pzSUQwZ2FIZGlXekpkSUM4Z01UQXdPMXh1WEhSMllYSWdjbUYwYVc4Z1BTQjNhQ0FySUdKc08xeHVYSFIyWVhJZ2FUdGNibHgwZG1GeUlIWTdYRzVjZEhaaGNpQm1PMXh1WEhSMllYSWdianRjYmx4dVhIUXZMeUIzYUNBcklHSnNJR05oYm5RZ1ltVWdQaUF4WEc1Y2RHbG1JQ2h5WVhScGJ5QStJREVwSUh0Y2JseDBYSFIzYUNBdlBTQnlZWFJwYnp0Y2JseDBYSFJpYkNBdlBTQnlZWFJwYnp0Y2JseDBmVnh1WEc1Y2RHa2dQU0JOWVhSb0xtWnNiMjl5S0RZZ0tpQm9LVHRjYmx4MGRpQTlJREVnTFNCaWJEdGNibHgwWmlBOUlEWWdLaUJvSUMwZ2FUdGNibHh1WEhScFppQW9LR2tnSmlBd2VEQXhLU0FoUFQwZ01Da2dlMXh1WEhSY2RHWWdQU0F4SUMwZ1pqdGNibHgwZlZ4dVhHNWNkRzRnUFNCM2FDQXJJR1lnS2lBb2RpQXRJSGRvS1RzZ0x5OGdiR2x1WldGeUlHbHVkR1Z5Y0c5c1lYUnBiMjVjYmx4dVhIUjJZWElnY2p0Y2JseDBkbUZ5SUdjN1hHNWNkSFpoY2lCaU8xeHVYSFJ6ZDJsMFkyZ2dLR2twSUh0Y2JseDBYSFJrWldaaGRXeDBPbHh1WEhSY2RHTmhjMlVnTmpwY2JseDBYSFJqWVhObElEQTZJSElnUFNCMk95Qm5JRDBnYmpzZ1lpQTlJSGRvT3lCaWNtVmhhenRjYmx4MFhIUmpZWE5sSURFNklISWdQU0J1T3lCbklEMGdkanNnWWlBOUlIZG9PeUJpY21WaGF6dGNibHgwWEhSallYTmxJREk2SUhJZ1BTQjNhRHNnWnlBOUlIWTdJR0lnUFNCdU95QmljbVZoYXp0Y2JseDBYSFJqWVhObElETTZJSElnUFNCM2FEc2daeUE5SUc0N0lHSWdQU0IyT3lCaWNtVmhhenRjYmx4MFhIUmpZWE5sSURRNklISWdQU0J1T3lCbklEMGdkMmc3SUdJZ1BTQjJPeUJpY21WaGF6dGNibHgwWEhSallYTmxJRFU2SUhJZ1BTQjJPeUJuSUQwZ2QyZzdJR0lnUFNCdU95QmljbVZoYXp0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCYmNpQXFJREkxTlN3Z1p5QXFJREkxTlN3Z1lpQXFJREkxTlYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG1OdGVXc3VjbWRpSUQwZ1puVnVZM1JwYjI0Z0tHTnRlV3NwSUh0Y2JseDBkbUZ5SUdNZ1BTQmpiWGxyV3pCZElDOGdNVEF3TzF4dVhIUjJZWElnYlNBOUlHTnRlV3RiTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUI1SUQwZ1kyMTVhMXN5WFNBdklERXdNRHRjYmx4MGRtRnlJR3NnUFNCamJYbHJXek5kSUM4Z01UQXdPMXh1WEhSMllYSWdjanRjYmx4MGRtRnlJR2M3WEc1Y2RIWmhjaUJpTzF4dVhHNWNkSElnUFNBeElDMGdUV0YwYUM1dGFXNG9NU3dnWXlBcUlDZ3hJQzBnYXlrZ0t5QnJLVHRjYmx4MFp5QTlJREVnTFNCTllYUm9MbTFwYmlneExDQnRJQ29nS0RFZ0xTQnJLU0FySUdzcE8xeHVYSFJpSUQwZ01TQXRJRTFoZEdndWJXbHVLREVzSUhrZ0tpQW9NU0F0SUdzcElDc2dheWs3WEc1Y2JseDBjbVYwZFhKdUlGdHlJQ29nTWpVMUxDQm5JQ29nTWpVMUxDQmlJQ29nTWpVMVhUdGNibjA3WEc1Y2JtTnZiblpsY25RdWVIbDZMbkpuWWlBOUlHWjFibU4wYVc5dUlDaDRlWG9wSUh0Y2JseDBkbUZ5SUhnZ1BTQjRlWHBiTUYwZ0x5QXhNREE3WEc1Y2RIWmhjaUI1SUQwZ2VIbDZXekZkSUM4Z01UQXdPMXh1WEhSMllYSWdlaUE5SUhoNWVsc3lYU0F2SURFd01EdGNibHgwZG1GeUlISTdYRzVjZEhaaGNpQm5PMXh1WEhSMllYSWdZanRjYmx4dVhIUnlJRDBnS0hnZ0tpQXpMakkwTURZcElDc2dLSGtnS2lBdE1TNDFNemN5S1NBcklDaDZJQ29nTFRBdU5EazROaWs3WEc1Y2RHY2dQU0FvZUNBcUlDMHdMamsyT0RrcElDc2dLSGtnS2lBeExqZzNOVGdwSUNzZ0tIb2dLaUF3TGpBME1UVXBPMXh1WEhSaUlEMGdLSGdnS2lBd0xqQTFOVGNwSUNzZ0tIa2dLaUF0TUM0eU1EUXdLU0FySUNoNklDb2dNUzR3TlRjd0tUdGNibHh1WEhRdkx5QmhjM04xYldVZ2MxSkhRbHh1WEhSeUlEMGdjaUErSURBdU1EQXpNVE13T0Z4dVhIUmNkRDhnS0NneExqQTFOU0FxSUUxaGRHZ3VjRzkzS0hJc0lERXVNQ0F2SURJdU5Da3BJQzBnTUM0d05UVXBYRzVjZEZ4ME9pQnlJQ29nTVRJdU9USTdYRzVjYmx4MFp5QTlJR2NnUGlBd0xqQXdNekV6TURoY2JseDBYSFEvSUNnb01TNHdOVFVnS2lCTllYUm9MbkJ2ZHlobkxDQXhMakFnTHlBeUxqUXBLU0F0SURBdU1EVTFLVnh1WEhSY2REb2daeUFxSURFeUxqa3lPMXh1WEc1Y2RHSWdQU0JpSUQ0Z01DNHdNRE14TXpBNFhHNWNkRngwUHlBb0tERXVNRFUxSUNvZ1RXRjBhQzV3YjNjb1lpd2dNUzR3SUM4Z01pNDBLU2tnTFNBd0xqQTFOU2xjYmx4MFhIUTZJR0lnS2lBeE1pNDVNanRjYmx4dVhIUnlJRDBnVFdGMGFDNXRhVzRvVFdGMGFDNXRZWGdvTUN3Z2Npa3NJREVwTzF4dVhIUm5JRDBnVFdGMGFDNXRhVzRvVFdGMGFDNXRZWGdvTUN3Z1p5a3NJREVwTzF4dVhIUmlJRDBnVFdGMGFDNXRhVzRvVFdGMGFDNXRZWGdvTUN3Z1lpa3NJREVwTzF4dVhHNWNkSEpsZEhWeWJpQmJjaUFxSURJMU5Td2daeUFxSURJMU5Td2dZaUFxSURJMU5WMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExuaDVlaTVzWVdJZ1BTQm1kVzVqZEdsdmJpQW9lSGw2S1NCN1hHNWNkSFpoY2lCNElEMGdlSGw2V3pCZE8xeHVYSFIyWVhJZ2VTQTlJSGg1ZWxzeFhUdGNibHgwZG1GeUlIb2dQU0I0ZVhwYk1sMDdYRzVjZEhaaGNpQnNPMXh1WEhSMllYSWdZVHRjYmx4MGRtRnlJR0k3WEc1Y2JseDBlQ0F2UFNBNU5TNHdORGM3WEc1Y2RIa2dMejBnTVRBd08xeHVYSFI2SUM4OUlERXdPQzQ0T0RNN1hHNWNibHgwZUNBOUlIZ2dQaUF3TGpBd09EZzFOaUEvSUUxaGRHZ3VjRzkzS0hnc0lERWdMeUF6S1NBNklDZzNMamM0TnlBcUlIZ3BJQ3NnS0RFMklDOGdNVEUyS1R0Y2JseDBlU0E5SUhrZ1BpQXdMakF3T0RnMU5pQS9JRTFoZEdndWNHOTNLSGtzSURFZ0x5QXpLU0E2SUNnM0xqYzROeUFxSUhrcElDc2dLREUySUM4Z01URTJLVHRjYmx4MGVpQTlJSG9nUGlBd0xqQXdPRGcxTmlBL0lFMWhkR2d1Y0c5M0tIb3NJREVnTHlBektTQTZJQ2czTGpjNE55QXFJSG9wSUNzZ0tERTJJQzhnTVRFMktUdGNibHh1WEhSc0lEMGdLREV4TmlBcUlIa3BJQzBnTVRZN1hHNWNkR0VnUFNBMU1EQWdLaUFvZUNBdElIa3BPMXh1WEhSaUlEMGdNakF3SUNvZ0tIa2dMU0I2S1R0Y2JseHVYSFJ5WlhSMWNtNGdXMndzSUdFc0lHSmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNXNZV0l1ZUhsNklEMGdablZ1WTNScGIyNGdLR3hoWWlrZ2UxeHVYSFIyWVhJZ2JDQTlJR3hoWWxzd1hUdGNibHgwZG1GeUlHRWdQU0JzWVdKYk1WMDdYRzVjZEhaaGNpQmlJRDBnYkdGaVd6SmRPMXh1WEhSMllYSWdlRHRjYmx4MGRtRnlJSGs3WEc1Y2RIWmhjaUI2TzF4dVhHNWNkSGtnUFNBb2JDQXJJREUyS1NBdklERXhOanRjYmx4MGVDQTlJR0VnTHlBMU1EQWdLeUI1TzF4dVhIUjZJRDBnZVNBdElHSWdMeUF5TURBN1hHNWNibHgwZG1GeUlIa3lJRDBnVFdGMGFDNXdiM2NvZVN3Z015azdYRzVjZEhaaGNpQjRNaUE5SUUxaGRHZ3VjRzkzS0hnc0lETXBPMXh1WEhSMllYSWdlaklnUFNCTllYUm9MbkJ2ZHloNkxDQXpLVHRjYmx4MGVTQTlJSGt5SUQ0Z01DNHdNRGc0TlRZZ1B5QjVNaUE2SUNoNUlDMGdNVFlnTHlBeE1UWXBJQzhnTnk0M09EYzdYRzVjZEhnZ1BTQjRNaUErSURBdU1EQTRPRFUySUQ4Z2VESWdPaUFvZUNBdElERTJJQzhnTVRFMktTQXZJRGN1TnpnM08xeHVYSFI2SUQwZ2VqSWdQaUF3TGpBd09EZzFOaUEvSUhveUlEb2dLSG9nTFNBeE5pQXZJREV4TmlrZ0x5QTNMamM0Tnp0Y2JseHVYSFI0SUNvOUlEazFMakEwTnp0Y2JseDBlU0FxUFNBeE1EQTdYRzVjZEhvZ0tqMGdNVEE0TGpnNE16dGNibHh1WEhSeVpYUjFjbTRnVzNnc0lIa3NJSHBkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVzWVdJdWJHTm9JRDBnWm5WdVkzUnBiMjRnS0d4aFlpa2dlMXh1WEhSMllYSWdiQ0E5SUd4aFlsc3dYVHRjYmx4MGRtRnlJR0VnUFNCc1lXSmJNVjA3WEc1Y2RIWmhjaUJpSUQwZ2JHRmlXekpkTzF4dVhIUjJZWElnYUhJN1hHNWNkSFpoY2lCb08xeHVYSFIyWVhJZ1l6dGNibHh1WEhSb2NpQTlJRTFoZEdndVlYUmhiaklvWWl3Z1lTazdYRzVjZEdnZ1BTQm9jaUFxSURNMk1DQXZJRElnTHlCTllYUm9MbEJKTzF4dVhHNWNkR2xtSUNob0lEd2dNQ2tnZTF4dVhIUmNkR2dnS3owZ016WXdPMXh1WEhSOVhHNWNibHgwWXlBOUlFMWhkR2d1YzNGeWRDaGhJQ29nWVNBcklHSWdLaUJpS1R0Y2JseHVYSFJ5WlhSMWNtNGdXMndzSUdNc0lHaGRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNXNZMmd1YkdGaUlEMGdablZ1WTNScGIyNGdLR3hqYUNrZ2UxeHVYSFIyWVhJZ2JDQTlJR3hqYUZzd1hUdGNibHgwZG1GeUlHTWdQU0JzWTJoYk1WMDdYRzVjZEhaaGNpQm9JRDBnYkdOb1d6SmRPMXh1WEhSMllYSWdZVHRjYmx4MGRtRnlJR0k3WEc1Y2RIWmhjaUJvY2p0Y2JseHVYSFJvY2lBOUlHZ2dMeUF6TmpBZ0tpQXlJQ29nVFdGMGFDNVFTVHRjYmx4MFlTQTlJR01nS2lCTllYUm9MbU52Y3lob2NpazdYRzVjZEdJZ1BTQmpJQ29nVFdGMGFDNXphVzRvYUhJcE8xeHVYRzVjZEhKbGRIVnliaUJiYkN3Z1lTd2dZbDA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1aGJuTnBNVFlnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUjJZWElnY2lBOUlHRnlaM05iTUYwN1hHNWNkSFpoY2lCbklEMGdZWEpuYzFzeFhUdGNibHgwZG1GeUlHSWdQU0JoY21keld6SmRPMXh1WEhSMllYSWdkbUZzZFdVZ1BTQXhJR2x1SUdGeVozVnRaVzUwY3lBL0lHRnlaM1Z0Wlc1MGMxc3hYU0E2SUdOdmJuWmxjblF1Y21kaUxtaHpkaWhoY21kektWc3lYVHNnTHk4Z2FITjJJQzArSUdGdWMya3hOaUJ2Y0hScGJXbDZZWFJwYjI1Y2JseHVYSFIyWVd4MVpTQTlJRTFoZEdndWNtOTFibVFvZG1Gc2RXVWdMeUExTUNrN1hHNWNibHgwYVdZZ0tIWmhiSFZsSUQwOVBTQXdLU0I3WEc1Y2RGeDBjbVYwZFhKdUlETXdPMXh1WEhSOVhHNWNibHgwZG1GeUlHRnVjMmtnUFNBek1GeHVYSFJjZENzZ0tDaE5ZWFJvTG5KdmRXNWtLR0lnTHlBeU5UVXBJRHc4SURJcFhHNWNkRngwZkNBb1RXRjBhQzV5YjNWdVpDaG5JQzhnTWpVMUtTQThQQ0F4S1Z4dVhIUmNkSHdnVFdGMGFDNXliM1Z1WkNoeUlDOGdNalUxS1NrN1hHNWNibHgwYVdZZ0tIWmhiSFZsSUQwOVBTQXlLU0I3WEc1Y2RGeDBZVzV6YVNBclBTQTJNRHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJoYm5OcE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b2MzWXVZVzV6YVRFMklEMGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwTHk4Z2IzQjBhVzFwZW1GMGFXOXVJR2hsY21VN0lIZGxJR0ZzY21WaFpIa2dhMjV2ZHlCMGFHVWdkbUZzZFdVZ1lXNWtJR1J2YmlkMElHNWxaV1FnZEc4Z1oyVjBYRzVjZEM4dklHbDBJR052Ym5abGNuUmxaQ0JtYjNJZ2RYTXVYRzVjZEhKbGRIVnliaUJqYjI1MlpYSjBMbkpuWWk1aGJuTnBNVFlvWTI5dWRtVnlkQzVvYzNZdWNtZGlLR0Z5WjNNcExDQmhjbWR6V3pKZEtUdGNibjA3WEc1Y2JtTnZiblpsY25RdWNtZGlMbUZ1YzJreU5UWWdQU0JtZFc1amRHbHZiaUFvWVhKbmN5a2dlMXh1WEhSMllYSWdjaUE5SUdGeVozTmJNRjA3WEc1Y2RIWmhjaUJuSUQwZ1lYSm5jMXN4WFR0Y2JseDBkbUZ5SUdJZ1BTQmhjbWR6V3pKZE8xeHVYRzVjZEM4dklIZGxJSFZ6WlNCMGFHVWdaWGgwWlc1a1pXUWdaM0psZVhOallXeGxJSEJoYkdWMGRHVWdhR1Z5WlN3Z2QybDBhQ0IwYUdVZ1pYaGpaWEIwYVc5dUlHOW1YRzVjZEM4dklHSnNZV05ySUdGdVpDQjNhR2wwWlM0Z2JtOXliV0ZzSUhCaGJHVjBkR1VnYjI1c2VTQm9ZWE1nTkNCbmNtVjVjMk5oYkdVZ2MyaGhaR1Z6TGx4dVhIUnBaaUFvY2lBOVBUMGdaeUFtSmlCbklEMDlQU0JpS1NCN1hHNWNkRngwYVdZZ0tISWdQQ0E0S1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnTVRZN1hHNWNkRngwZlZ4dVhHNWNkRngwYVdZZ0tISWdQaUF5TkRncElIdGNibHgwWEhSY2RISmxkSFZ5YmlBeU16RTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUUxaGRHZ3VjbTkxYm1Rb0tDaHlJQzBnT0NrZ0x5QXlORGNwSUNvZ01qUXBJQ3NnTWpNeU8xeHVYSFI5WEc1Y2JseDBkbUZ5SUdGdWMya2dQU0F4Tmx4dVhIUmNkQ3NnS0RNMklDb2dUV0YwYUM1eWIzVnVaQ2h5SUM4Z01qVTFJQ29nTlNrcFhHNWNkRngwS3lBb05pQXFJRTFoZEdndWNtOTFibVFvWnlBdklESTFOU0FxSURVcEtWeHVYSFJjZENzZ1RXRjBhQzV5YjNWdVpDaGlJQzhnTWpVMUlDb2dOU2s3WEc1Y2JseDBjbVYwZFhKdUlHRnVjMms3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbUZ1YzJreE5pNXlaMklnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUjJZWElnWTI5c2IzSWdQU0JoY21keklDVWdNVEE3WEc1Y2JseDBMeThnYUdGdVpHeGxJR2R5WlhselkyRnNaVnh1WEhScFppQW9ZMjlzYjNJZ1BUMDlJREFnZkh3Z1kyOXNiM0lnUFQwOUlEY3BJSHRjYmx4MFhIUnBaaUFvWVhKbmN5QStJRFV3S1NCN1hHNWNkRngwWEhSamIyeHZjaUFyUFNBekxqVTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MFkyOXNiM0lnUFNCamIyeHZjaUF2SURFd0xqVWdLaUF5TlRVN1hHNWNibHgwWEhSeVpYUjFjbTRnVzJOdmJHOXlMQ0JqYjJ4dmNpd2dZMjlzYjNKZE8xeHVYSFI5WEc1Y2JseDBkbUZ5SUcxMWJIUWdQU0FvZm40b1lYSm5jeUErSURVd0tTQXJJREVwSUNvZ01DNDFPMXh1WEhSMllYSWdjaUE5SUNnb1kyOXNiM0lnSmlBeEtTQXFJRzExYkhRcElDb2dNalUxTzF4dVhIUjJZWElnWnlBOUlDZ29LR052Ykc5eUlENCtJREVwSUNZZ01Ta2dLaUJ0ZFd4MEtTQXFJREkxTlR0Y2JseDBkbUZ5SUdJZ1BTQW9LQ2hqYjJ4dmNpQStQaUF5S1NBbUlERXBJQ29nYlhWc2RDa2dLaUF5TlRVN1hHNWNibHgwY21WMGRYSnVJRnR5TENCbkxDQmlYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVZVzV6YVRJMU5pNXlaMklnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUXZMeUJvWVc1a2JHVWdaM0psZVhOallXeGxYRzVjZEdsbUlDaGhjbWR6SUQ0OUlESXpNaWtnZTF4dVhIUmNkSFpoY2lCaklEMGdLR0Z5WjNNZ0xTQXlNeklwSUNvZ01UQWdLeUE0TzF4dVhIUmNkSEpsZEhWeWJpQmJZeXdnWXl3Z1kxMDdYRzVjZEgxY2JseHVYSFJoY21keklDMDlJREUyTzF4dVhHNWNkSFpoY2lCeVpXMDdYRzVjZEhaaGNpQnlJRDBnVFdGMGFDNW1iRzl2Y2loaGNtZHpJQzhnTXpZcElDOGdOU0FxSURJMU5UdGNibHgwZG1GeUlHY2dQU0JOWVhSb0xtWnNiMjl5S0NoeVpXMGdQU0JoY21keklDVWdNellwSUM4Z05pa2dMeUExSUNvZ01qVTFPMXh1WEhSMllYSWdZaUE5SUNoeVpXMGdKU0EyS1NBdklEVWdLaUF5TlRVN1hHNWNibHgwY21WMGRYSnVJRnR5TENCbkxDQmlYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVjbWRpTG1obGVDQTlJR1oxYm1OMGFXOXVJQ2hoY21kektTQjdYRzVjZEhaaGNpQnBiblJsWjJWeUlEMGdLQ2hOWVhSb0xuSnZkVzVrS0dGeVozTmJNRjBwSUNZZ01IaEdSaWtnUER3Z01UWXBYRzVjZEZ4MEt5QW9LRTFoZEdndWNtOTFibVFvWVhKbmMxc3hYU2tnSmlBd2VFWkdLU0E4UENBNEtWeHVYSFJjZENzZ0tFMWhkR2d1Y205MWJtUW9ZWEpuYzFzeVhTa2dKaUF3ZUVaR0tUdGNibHh1WEhSMllYSWdjM1J5YVc1bklEMGdhVzUwWldkbGNpNTBiMU4wY21sdVp5Z3hOaWt1ZEc5VmNIQmxja05oYzJVb0tUdGNibHgwY21WMGRYSnVJQ2N3TURBd01EQW5Mbk4xWW5OMGNtbHVaeWh6ZEhKcGJtY3ViR1Z1WjNSb0tTQXJJSE4wY21sdVp6dGNibjA3WEc1Y2JtTnZiblpsY25RdWFHVjRMbkpuWWlBOUlHWjFibU4wYVc5dUlDaGhjbWR6S1NCN1hHNWNkSFpoY2lCdFlYUmphQ0E5SUdGeVozTXVkRzlUZEhKcGJtY29NVFlwTG0xaGRHTm9LQzliWVMxbU1DMDVYWHMyZlh4YllTMW1NQzA1WFhzemZTOXBLVHRjYmx4MGFXWWdLQ0Z0WVhSamFDa2dlMXh1WEhSY2RISmxkSFZ5YmlCYk1Dd2dNQ3dnTUYwN1hHNWNkSDFjYmx4dVhIUjJZWElnWTI5c2IzSlRkSEpwYm1jZ1BTQnRZWFJqYUZzd1hUdGNibHh1WEhScFppQW9iV0YwWTJoYk1GMHViR1Z1WjNSb0lEMDlQU0F6S1NCN1hHNWNkRngwWTI5c2IzSlRkSEpwYm1jZ1BTQmpiMnh2Y2xOMGNtbHVaeTV6Y0d4cGRDZ25KeWt1YldGd0tHWjFibU4wYVc5dUlDaGphR0Z5S1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWTJoaGNpQXJJR05vWVhJN1hHNWNkRngwZlNrdWFtOXBiaWduSnlrN1hHNWNkSDFjYmx4dVhIUjJZWElnYVc1MFpXZGxjaUE5SUhCaGNuTmxTVzUwS0dOdmJHOXlVM1J5YVc1bkxDQXhOaWs3WEc1Y2RIWmhjaUJ5SUQwZ0tHbHVkR1ZuWlhJZ1BqNGdNVFlwSUNZZ01IaEdSanRjYmx4MGRtRnlJR2NnUFNBb2FXNTBaV2RsY2lBK1BpQTRLU0FtSURCNFJrWTdYRzVjZEhaaGNpQmlJRDBnYVc1MFpXZGxjaUFtSURCNFJrWTdYRzVjYmx4MGNtVjBkWEp1SUZ0eUxDQm5MQ0JpWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1Y21kaUxtaGpaeUE5SUdaMWJtTjBhVzl1SUNoeVoySXBJSHRjYmx4MGRtRnlJSElnUFNCeVoySmJNRjBnTHlBeU5UVTdYRzVjZEhaaGNpQm5JRDBnY21kaVd6RmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1lpQTlJSEpuWWxzeVhTQXZJREkxTlR0Y2JseDBkbUZ5SUcxaGVDQTlJRTFoZEdndWJXRjRLRTFoZEdndWJXRjRLSElzSUdjcExDQmlLVHRjYmx4MGRtRnlJRzFwYmlBOUlFMWhkR2d1YldsdUtFMWhkR2d1YldsdUtISXNJR2NwTENCaUtUdGNibHgwZG1GeUlHTm9jbTl0WVNBOUlDaHRZWGdnTFNCdGFXNHBPMXh1WEhSMllYSWdaM0poZVhOallXeGxPMXh1WEhSMllYSWdhSFZsTzF4dVhHNWNkR2xtSUNoamFISnZiV0VnUENBeEtTQjdYRzVjZEZ4MFozSmhlWE5qWVd4bElEMGdiV2x1SUM4Z0tERWdMU0JqYUhKdmJXRXBPMXh1WEhSOUlHVnNjMlVnZTF4dVhIUmNkR2R5WVhselkyRnNaU0E5SURBN1hHNWNkSDFjYmx4dVhIUnBaaUFvWTJoeWIyMWhJRHc5SURBcElIdGNibHgwWEhSb2RXVWdQU0F3TzF4dVhIUjlJR1ZzYzJWY2JseDBhV1lnS0cxaGVDQTlQVDBnY2lrZ2UxeHVYSFJjZEdoMVpTQTlJQ2dvWnlBdElHSXBJQzhnWTJoeWIyMWhLU0FsSURZN1hHNWNkSDBnWld4elpWeHVYSFJwWmlBb2JXRjRJRDA5UFNCbktTQjdYRzVjZEZ4MGFIVmxJRDBnTWlBcklDaGlJQzBnY2lrZ0x5QmphSEp2YldFN1hHNWNkSDBnWld4elpTQjdYRzVjZEZ4MGFIVmxJRDBnTkNBcklDaHlJQzBnWnlrZ0x5QmphSEp2YldFZ0t5QTBPMXh1WEhSOVhHNWNibHgwYUhWbElDODlJRFk3WEc1Y2RHaDFaU0FsUFNBeE8xeHVYRzVjZEhKbGRIVnliaUJiYUhWbElDb2dNell3TENCamFISnZiV0VnS2lBeE1EQXNJR2R5WVhselkyRnNaU0FxSURFd01GMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExtaHpiQzVvWTJjZ1BTQm1kVzVqZEdsdmJpQW9hSE5zS1NCN1hHNWNkSFpoY2lCeklEMGdhSE5zV3pGZElDOGdNVEF3TzF4dVhIUjJZWElnYkNBOUlHaHpiRnN5WFNBdklERXdNRHRjYmx4MGRtRnlJR01nUFNBeE8xeHVYSFIyWVhJZ1ppQTlJREE3WEc1Y2JseDBhV1lnS0d3Z1BDQXdMalVwSUh0Y2JseDBYSFJqSUQwZ01pNHdJQ29nY3lBcUlHdzdYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBZeUE5SURJdU1DQXFJSE1nS2lBb01TNHdJQzBnYkNrN1hHNWNkSDFjYmx4dVhIUnBaaUFvWXlBOElERXVNQ2tnZTF4dVhIUmNkR1lnUFNBb2JDQXRJREF1TlNBcUlHTXBJQzhnS0RFdU1DQXRJR01wTzF4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUZ0b2MyeGJNRjBzSUdNZ0tpQXhNREFzSUdZZ0tpQXhNREJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVvYzNZdWFHTm5JRDBnWm5WdVkzUnBiMjRnS0doemRpa2dlMXh1WEhSMllYSWdjeUE5SUdoemRsc3hYU0F2SURFd01EdGNibHgwZG1GeUlIWWdQU0JvYzNaYk1sMGdMeUF4TURBN1hHNWNibHgwZG1GeUlHTWdQU0J6SUNvZ2RqdGNibHgwZG1GeUlHWWdQU0F3TzF4dVhHNWNkR2xtSUNoaklEd2dNUzR3S1NCN1hHNWNkRngwWmlBOUlDaDJJQzBnWXlrZ0x5QW9NU0F0SUdNcE8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlGdG9jM1piTUYwc0lHTWdLaUF4TURBc0lHWWdLaUF4TURCZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b1kyY3VjbWRpSUQwZ1puVnVZM1JwYjI0Z0tHaGpaeWtnZTF4dVhIUjJZWElnYUNBOUlHaGpaMXN3WFNBdklETTJNRHRjYmx4MGRtRnlJR01nUFNCb1kyZGJNVjBnTHlBeE1EQTdYRzVjZEhaaGNpQm5JRDBnYUdObld6SmRJQzhnTVRBd08xeHVYRzVjZEdsbUlDaGpJRDA5UFNBd0xqQXBJSHRjYmx4MFhIUnlaWFIxY200Z1cyY2dLaUF5TlRVc0lHY2dLaUF5TlRVc0lHY2dLaUF5TlRWZE8xeHVYSFI5WEc1Y2JseDBkbUZ5SUhCMWNtVWdQU0JiTUN3Z01Dd2dNRjA3WEc1Y2RIWmhjaUJvYVNBOUlDaG9JQ1VnTVNrZ0tpQTJPMXh1WEhSMllYSWdkaUE5SUdocElDVWdNVHRjYmx4MGRtRnlJSGNnUFNBeElDMGdkanRjYmx4MGRtRnlJRzFuSUQwZ01EdGNibHh1WEhSemQybDBZMmdnS0UxaGRHZ3VabXh2YjNJb2FHa3BLU0I3WEc1Y2RGeDBZMkZ6WlNBd09seHVYSFJjZEZ4MGNIVnlaVnN3WFNBOUlERTdJSEIxY21WYk1WMGdQU0IyT3lCd2RYSmxXekpkSUQwZ01Ec2dZbkpsWVdzN1hHNWNkRngwWTJGelpTQXhPbHh1WEhSY2RGeDBjSFZ5WlZzd1hTQTlJSGM3SUhCMWNtVmJNVjBnUFNBeE95QndkWEpsV3pKZElEMGdNRHNnWW5KbFlXczdYRzVjZEZ4MFkyRnpaU0F5T2x4dVhIUmNkRngwY0hWeVpWc3dYU0E5SURBN0lIQjFjbVZiTVYwZ1BTQXhPeUJ3ZFhKbFd6SmRJRDBnZGpzZ1luSmxZV3M3WEc1Y2RGeDBZMkZ6WlNBek9seHVYSFJjZEZ4MGNIVnlaVnN3WFNBOUlEQTdJSEIxY21WYk1WMGdQU0IzT3lCd2RYSmxXekpkSUQwZ01Uc2dZbkpsWVdzN1hHNWNkRngwWTJGelpTQTBPbHh1WEhSY2RGeDBjSFZ5WlZzd1hTQTlJSFk3SUhCMWNtVmJNVjBnUFNBd095QndkWEpsV3pKZElEMGdNVHNnWW5KbFlXczdYRzVjZEZ4MFpHVm1ZWFZzZERwY2JseDBYSFJjZEhCMWNtVmJNRjBnUFNBeE95QndkWEpsV3pGZElEMGdNRHNnY0hWeVpWc3lYU0E5SUhjN1hHNWNkSDFjYmx4dVhIUnRaeUE5SUNneExqQWdMU0JqS1NBcUlHYzdYRzVjYmx4MGNtVjBkWEp1SUZ0Y2JseDBYSFFvWXlBcUlIQjFjbVZiTUYwZ0t5QnRaeWtnS2lBeU5UVXNYRzVjZEZ4MEtHTWdLaUJ3ZFhKbFd6RmRJQ3NnYldjcElDb2dNalUxTEZ4dVhIUmNkQ2hqSUNvZ2NIVnlaVnN5WFNBcklHMW5LU0FxSURJMU5WeHVYSFJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVvWTJjdWFITjJJRDBnWm5WdVkzUnBiMjRnS0doalp5a2dlMXh1WEhSMllYSWdZeUE5SUdoaloxc3hYU0F2SURFd01EdGNibHgwZG1GeUlHY2dQU0JvWTJkYk1sMGdMeUF4TURBN1hHNWNibHgwZG1GeUlIWWdQU0JqSUNzZ1p5QXFJQ2d4TGpBZ0xTQmpLVHRjYmx4MGRtRnlJR1lnUFNBd08xeHVYRzVjZEdsbUlDaDJJRDRnTUM0d0tTQjdYRzVjZEZ4MFppQTlJR01nTHlCMk8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlGdG9ZMmRiTUYwc0lHWWdLaUF4TURBc0lIWWdLaUF4TURCZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b1kyY3VhSE5zSUQwZ1puVnVZM1JwYjI0Z0tHaGpaeWtnZTF4dVhIUjJZWElnWXlBOUlHaGpaMXN4WFNBdklERXdNRHRjYmx4MGRtRnlJR2NnUFNCb1kyZGJNbDBnTHlBeE1EQTdYRzVjYmx4MGRtRnlJR3dnUFNCbklDb2dLREV1TUNBdElHTXBJQ3NnTUM0MUlDb2dZenRjYmx4MGRtRnlJSE1nUFNBd08xeHVYRzVjZEdsbUlDaHNJRDRnTUM0d0lDWW1JR3dnUENBd0xqVXBJSHRjYmx4MFhIUnpJRDBnWXlBdklDZ3lJQ29nYkNrN1hHNWNkSDBnWld4elpWeHVYSFJwWmlBb2JDQStQU0F3TGpVZ0ppWWdiQ0E4SURFdU1Da2dlMXh1WEhSY2RITWdQU0JqSUM4Z0tESWdLaUFvTVNBdElHd3BLVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJiYUdObld6QmRMQ0J6SUNvZ01UQXdMQ0JzSUNvZ01UQXdYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVhR05uTG1oM1lpQTlJR1oxYm1OMGFXOXVJQ2hvWTJjcElIdGNibHgwZG1GeUlHTWdQU0JvWTJkYk1WMGdMeUF4TURBN1hHNWNkSFpoY2lCbklEMGdhR05uV3pKZElDOGdNVEF3TzF4dVhIUjJZWElnZGlBOUlHTWdLeUJuSUNvZ0tERXVNQ0F0SUdNcE8xeHVYSFJ5WlhSMWNtNGdXMmhqWjFzd1hTd2dLSFlnTFNCaktTQXFJREV3TUN3Z0tERWdMU0IyS1NBcUlERXdNRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWgzWWk1b1kyY2dQU0JtZFc1amRHbHZiaUFvYUhkaUtTQjdYRzVjZEhaaGNpQjNJRDBnYUhkaVd6RmRJQzhnTVRBd08xeHVYSFIyWVhJZ1lpQTlJR2gzWWxzeVhTQXZJREV3TUR0Y2JseDBkbUZ5SUhZZ1BTQXhJQzBnWWp0Y2JseDBkbUZ5SUdNZ1BTQjJJQzBnZHp0Y2JseDBkbUZ5SUdjZ1BTQXdPMXh1WEc1Y2RHbG1JQ2hqSUR3Z01Ta2dlMXh1WEhSY2RHY2dQU0FvZGlBdElHTXBJQzhnS0RFZ0xTQmpLVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJiYUhkaVd6QmRMQ0JqSUNvZ01UQXdMQ0JuSUNvZ01UQXdYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVZWEJ3YkdVdWNtZGlJRDBnWm5WdVkzUnBiMjRnS0dGd2NHeGxLU0I3WEc1Y2RISmxkSFZ5YmlCYktHRndjR3hsV3pCZElDOGdOalUxTXpVcElDb2dNalUxTENBb1lYQndiR1ZiTVYwZ0x5QTJOVFV6TlNrZ0tpQXlOVFVzSUNoaGNIQnNaVnN5WFNBdklEWTFOVE0xS1NBcUlESTFOVjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1aGNIQnNaU0E5SUdaMWJtTjBhVzl1SUNoeVoySXBJSHRjYmx4MGNtVjBkWEp1SUZzb2NtZGlXekJkSUM4Z01qVTFLU0FxSURZMU5UTTFMQ0FvY21kaVd6RmRJQzhnTWpVMUtTQXFJRFkxTlRNMUxDQW9jbWRpV3pKZElDOGdNalUxS1NBcUlEWTFOVE0xWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1WjNKaGVTNXlaMklnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUnlaWFIxY200Z1cyRnlaM05iTUYwZ0x5QXhNREFnS2lBeU5UVXNJR0Z5WjNOYk1GMGdMeUF4TURBZ0tpQXlOVFVzSUdGeVozTmJNRjBnTHlBeE1EQWdLaUF5TlRWZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1bmNtRjVMbWh6YkNBOUlHTnZiblpsY25RdVozSmhlUzVvYzNZZ1BTQm1kVzVqZEdsdmJpQW9ZWEpuY3lrZ2UxeHVYSFJ5WlhSMWNtNGdXekFzSURBc0lHRnlaM05iTUYxZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1bmNtRjVMbWgzWWlBOUlHWjFibU4wYVc5dUlDaG5jbUY1S1NCN1hHNWNkSEpsZEhWeWJpQmJNQ3dnTVRBd0xDQm5jbUY1V3pCZFhUdGNibjA3WEc1Y2JtTnZiblpsY25RdVozSmhlUzVqYlhscklEMGdablZ1WTNScGIyNGdLR2R5WVhrcElIdGNibHgwY21WMGRYSnVJRnN3TENBd0xDQXdMQ0JuY21GNVd6QmRYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVaM0poZVM1c1lXSWdQU0JtZFc1amRHbHZiaUFvWjNKaGVTa2dlMXh1WEhSeVpYUjFjbTRnVzJkeVlYbGJNRjBzSURBc0lEQmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW5jbUY1TG1obGVDQTlJR1oxYm1OMGFXOXVJQ2huY21GNUtTQjdYRzVjZEhaaGNpQjJZV3dnUFNCTllYUm9Mbkp2ZFc1a0tHZHlZWGxiTUYwZ0x5QXhNREFnS2lBeU5UVXBJQ1lnTUhoR1JqdGNibHgwZG1GeUlHbHVkR1ZuWlhJZ1BTQW9kbUZzSUR3OElERTJLU0FySUNoMllXd2dQRHdnT0NrZ0t5QjJZV3c3WEc1Y2JseDBkbUZ5SUhOMGNtbHVaeUE5SUdsdWRHVm5aWEl1ZEc5VGRISnBibWNvTVRZcExuUnZWWEJ3WlhKRFlYTmxLQ2s3WEc1Y2RISmxkSFZ5YmlBbk1EQXdNREF3Snk1emRXSnpkSEpwYm1jb2MzUnlhVzVuTG14bGJtZDBhQ2tnS3lCemRISnBibWM3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1bmNtRjVJRDBnWm5WdVkzUnBiMjRnS0hKbllpa2dlMXh1WEhSMllYSWdkbUZzSUQwZ0tISm5ZbHN3WFNBcklISm5ZbHN4WFNBcklISm5ZbHN5WFNrZ0x5QXpPMXh1WEhSeVpYUjFjbTRnVzNaaGJDQXZJREkxTlNBcUlERXdNRjA3WEc1OU8xeHVJaXdpZG1GeUlHTnZiblpsY25OcGIyNXpJRDBnY21WeGRXbHlaU2duTGk5amIyNTJaWEp6YVc5dWN5Y3BPMXh1ZG1GeUlISnZkWFJsSUQwZ2NtVnhkV2x5WlNnbkxpOXliM1YwWlNjcE8xeHVYRzUyWVhJZ1kyOXVkbVZ5ZENBOUlIdDlPMXh1WEc1MllYSWdiVzlrWld4eklEMGdUMkpxWldOMExtdGxlWE1vWTI5dWRtVnljMmx2Ym5NcE8xeHVYRzVtZFc1amRHbHZiaUIzY21Gd1VtRjNLR1p1S1NCN1hHNWNkSFpoY2lCM2NtRndjR1ZrUm00Z1BTQm1kVzVqZEdsdmJpQW9ZWEpuY3lrZ2UxeHVYSFJjZEdsbUlDaGhjbWR6SUQwOVBTQjFibVJsWm1sdVpXUWdmSHdnWVhKbmN5QTlQVDBnYm5Wc2JDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHRnlaM003WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeEtTQjdYRzVjZEZ4MFhIUmhjbWR6SUQwZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG5Oc2FXTmxMbU5oYkd3b1lYSm5kVzFsYm5SektUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnWm00b1lYSm5jeWs3WEc1Y2RIMDdYRzVjYmx4MEx5OGdjSEpsYzJWeWRtVWdMbU52Ym5abGNuTnBiMjRnY0hKdmNHVnlkSGtnYVdZZ2RHaGxjbVVnYVhNZ2IyNWxYRzVjZEdsbUlDZ25ZMjl1ZG1WeWMybHZiaWNnYVc0Z1ptNHBJSHRjYmx4MFhIUjNjbUZ3Y0dWa1JtNHVZMjl1ZG1WeWMybHZiaUE5SUdadUxtTnZiblpsY25OcGIyNDdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdkM0poY0hCbFpFWnVPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjNjbUZ3VW05MWJtUmxaQ2htYmlrZ2UxeHVYSFIyWVhJZ2QzSmhjSEJsWkVadUlEMGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwWEhScFppQW9ZWEpuY3lBOVBUMGdkVzVrWldacGJtVmtJSHg4SUdGeVozTWdQVDA5SUc1MWJHd3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQmhjbWR6TzF4dVhIUmNkSDFjYmx4dVhIUmNkR2xtSUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01Ta2dlMXh1WEhSY2RGeDBZWEpuY3lBOUlFRnljbUY1TG5CeWIzUnZkSGx3WlM1emJHbGpaUzVqWVd4c0tHRnlaM1Z0Wlc1MGN5azdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGRtRnlJSEpsYzNWc2RDQTlJR1p1S0dGeVozTXBPMXh1WEc1Y2RGeDBMeThnZDJVbmNtVWdZWE56ZFcxcGJtY2dkR2hsSUhKbGMzVnNkQ0JwY3lCaGJpQmhjbkpoZVNCb1pYSmxMbHh1WEhSY2RDOHZJSE5sWlNCdWIzUnBZMlVnYVc0Z1kyOXVkbVZ5YzJsdmJuTXVhbk03SUdSdmJpZDBJSFZ6WlNCaWIzZ2dkSGx3WlhOY2JseDBYSFF2THlCcGJpQmpiMjUyWlhKemFXOXVJR1oxYm1OMGFXOXVjeTVjYmx4MFhIUnBaaUFvZEhsd1pXOW1JSEpsYzNWc2RDQTlQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JseDBYSFJjZEdadmNpQW9kbUZ5SUd4bGJpQTlJSEpsYzNWc2RDNXNaVzVuZEdnc0lHa2dQU0F3T3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmx4MFhIUmNkRngwY21WemRXeDBXMmxkSUQwZ1RXRjBhQzV5YjNWdVpDaHlaWE4xYkhSYmFWMHBPMXh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHh1WEhSY2RISmxkSFZ5YmlCeVpYTjFiSFE3WEc1Y2RIMDdYRzVjYmx4MEx5OGdjSEpsYzJWeWRtVWdMbU52Ym5abGNuTnBiMjRnY0hKdmNHVnlkSGtnYVdZZ2RHaGxjbVVnYVhNZ2IyNWxYRzVjZEdsbUlDZ25ZMjl1ZG1WeWMybHZiaWNnYVc0Z1ptNHBJSHRjYmx4MFhIUjNjbUZ3Y0dWa1JtNHVZMjl1ZG1WeWMybHZiaUE5SUdadUxtTnZiblpsY25OcGIyNDdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdkM0poY0hCbFpFWnVPMXh1ZlZ4dVhHNXRiMlJsYkhNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb1puSnZiVTF2WkdWc0tTQjdYRzVjZEdOdmJuWmxjblJiWm5KdmJVMXZaR1ZzWFNBOUlIdDlPMXh1WEc1Y2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hqYjI1MlpYSjBXMlp5YjIxTmIyUmxiRjBzSUNkamFHRnVibVZzY3ljc0lIdDJZV3gxWlRvZ1kyOXVkbVZ5YzJsdmJuTmJabkp2YlUxdlpHVnNYUzVqYUdGdWJtVnNjMzBwTzF4dVhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWTI5dWRtVnlkRnRtY205dFRXOWtaV3hkTENBbmJHRmlaV3h6Snl3Z2UzWmhiSFZsT2lCamIyNTJaWEp6YVc5dWMxdG1jbTl0VFc5a1pXeGRMbXhoWW1Wc2MzMHBPMXh1WEc1Y2RIWmhjaUJ5YjNWMFpYTWdQU0J5YjNWMFpTaG1jbTl0VFc5a1pXd3BPMXh1WEhSMllYSWdjbTkxZEdWTmIyUmxiSE1nUFNCUFltcGxZM1F1YTJWNWN5aHliM1YwWlhNcE8xeHVYRzVjZEhKdmRYUmxUVzlrWld4ekxtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tIUnZUVzlrWld3cElIdGNibHgwWEhSMllYSWdabTRnUFNCeWIzVjBaWE5iZEc5TmIyUmxiRjA3WEc1Y2JseDBYSFJqYjI1MlpYSjBXMlp5YjIxTmIyUmxiRjFiZEc5TmIyUmxiRjBnUFNCM2NtRndVbTkxYm1SbFpDaG1iaWs3WEc1Y2RGeDBZMjl1ZG1WeWRGdG1jbTl0VFc5a1pXeGRXM1J2VFc5a1pXeGRMbkpoZHlBOUlIZHlZWEJTWVhjb1ptNHBPMXh1WEhSOUtUdGNibjBwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHTnZiblpsY25RN1hHNGlMQ0oyWVhJZ1kyOXVkbVZ5YzJsdmJuTWdQU0J5WlhGMWFYSmxLQ2N1TDJOdmJuWmxjbk5wYjI1ekp5azdYRzVjYmk4cVhHNWNkSFJvYVhNZ1puVnVZM1JwYjI0Z2NtOTFkR1Z6SUdFZ2JXOWtaV3dnZEc4Z1lXeHNJRzkwYUdWeUlHMXZaR1ZzY3k1Y2JseHVYSFJoYkd3Z1puVnVZM1JwYjI1eklIUm9ZWFFnWVhKbElISnZkWFJsWkNCb1lYWmxJR0VnY0hKdmNHVnlkSGtnWUM1amIyNTJaWEp6YVc5dVlDQmhkSFJoWTJobFpGeHVYSFIwYnlCMGFHVWdjbVYwZFhKdVpXUWdjM2x1ZEdobGRHbGpJR1oxYm1OMGFXOXVMaUJVYUdseklIQnliM0JsY25SNUlHbHpJR0Z1SUdGeWNtRjVYRzVjZEc5bUlITjBjbWx1WjNNc0lHVmhZMmdnZDJsMGFDQjBhR1VnYzNSbGNITWdhVzRnWW1WMGQyVmxiaUIwYUdVZ0oyWnliMjBuSUdGdVpDQW5kRzhuWEc1Y2RHTnZiRzl5SUcxdlpHVnNjeUFvYVc1amJIVnphWFpsS1M1Y2JseHVYSFJqYjI1MlpYSnphVzl1Y3lCMGFHRjBJR0Z5WlNCdWIzUWdjRzl6YzJsaWJHVWdjMmx0Y0d4NUlHRnlaU0J1YjNRZ2FXNWpiSFZrWldRdVhHNHFMMXh1WEc1bWRXNWpkR2x2YmlCaWRXbHNaRWR5WVhCb0tDa2dlMXh1WEhSMllYSWdaM0poY0dnZ1BTQjdmVHRjYmx4MEx5OGdhSFIwY0hNNkx5OXFjM0JsY21ZdVkyOXRMMjlpYW1WamRDMXJaWGx6TFhaekxXWnZjaTFwYmkxM2FYUm9MV05zYjNOMWNtVXZNMXh1WEhSMllYSWdiVzlrWld4eklEMGdUMkpxWldOMExtdGxlWE1vWTI5dWRtVnljMmx2Ym5NcE8xeHVYRzVjZEdadmNpQW9kbUZ5SUd4bGJpQTlJRzF2WkdWc2N5NXNaVzVuZEdnc0lHa2dQU0F3T3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmx4MFhIUm5jbUZ3YUZ0dGIyUmxiSE5iYVYxZElEMGdlMXh1WEhSY2RGeDBMeThnYUhSMGNEb3ZMMnB6Y0dWeVppNWpiMjB2TVMxMmN5MXBibVpwYm1sMGVWeHVYSFJjZEZ4MEx5OGdiV2xqY204dGIzQjBMQ0JpZFhRZ2RHaHBjeUJwY3lCemFXMXdiR1V1WEc1Y2RGeDBYSFJrYVhOMFlXNWpaVG9nTFRFc1hHNWNkRngwWEhSd1lYSmxiblE2SUc1MWJHeGNibHgwWEhSOU8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlHZHlZWEJvTzF4dWZWeHVYRzR2THlCb2RIUndjem92TDJWdUxuZHBhMmx3WldScFlTNXZjbWN2ZDJscmFTOUNjbVZoWkhSb0xXWnBjbk4wWDNObFlYSmphRnh1Wm5WdVkzUnBiMjRnWkdWeWFYWmxRa1pUS0daeWIyMU5iMlJsYkNrZ2UxeHVYSFIyWVhJZ1ozSmhjR2dnUFNCaWRXbHNaRWR5WVhCb0tDazdYRzVjZEhaaGNpQnhkV1YxWlNBOUlGdG1jbTl0VFc5a1pXeGRPeUF2THlCMWJuTm9hV1owSUMwK0lIRjFaWFZsSUMwK0lIQnZjRnh1WEc1Y2RHZHlZWEJvVzJaeWIyMU5iMlJsYkYwdVpHbHpkR0Z1WTJVZ1BTQXdPMXh1WEc1Y2RIZG9hV3hsSUNoeGRXVjFaUzVzWlc1bmRHZ3BJSHRjYmx4MFhIUjJZWElnWTNWeWNtVnVkQ0E5SUhGMVpYVmxMbkJ2Y0NncE8xeHVYSFJjZEhaaGNpQmhaR3BoWTJWdWRITWdQU0JQWW1wbFkzUXVhMlY1Y3loamIyNTJaWEp6YVc5dWMxdGpkWEp5Wlc1MFhTazdYRzVjYmx4MFhIUm1iM0lnS0haaGNpQnNaVzRnUFNCaFpHcGhZMlZ1ZEhNdWJHVnVaM1JvTENCcElEMGdNRHNnYVNBOElHeGxianNnYVNzcktTQjdYRzVjZEZ4MFhIUjJZWElnWVdScVlXTmxiblFnUFNCaFpHcGhZMlZ1ZEhOYmFWMDdYRzVjZEZ4MFhIUjJZWElnYm05a1pTQTlJR2R5WVhCb1cyRmthbUZqWlc1MFhUdGNibHh1WEhSY2RGeDBhV1lnS0c1dlpHVXVaR2x6ZEdGdVkyVWdQVDA5SUMweEtTQjdYRzVjZEZ4MFhIUmNkRzV2WkdVdVpHbHpkR0Z1WTJVZ1BTQm5jbUZ3YUZ0amRYSnlaVzUwWFM1a2FYTjBZVzVqWlNBcklERTdYRzVjZEZ4MFhIUmNkRzV2WkdVdWNHRnlaVzUwSUQwZ1kzVnljbVZ1ZER0Y2JseDBYSFJjZEZ4MGNYVmxkV1V1ZFc1emFHbG1kQ2hoWkdwaFkyVnVkQ2s3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOVhHNWNibHgwY21WMGRYSnVJR2R5WVhCb08xeHVmVnh1WEc1bWRXNWpkR2x2YmlCc2FXNXJLR1p5YjIwc0lIUnZLU0I3WEc1Y2RISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUmNkSEpsZEhWeWJpQjBieWhtY205dEtHRnlaM01wS1R0Y2JseDBmVHRjYm4xY2JseHVablZ1WTNScGIyNGdkM0poY0VOdmJuWmxjbk5wYjI0b2RHOU5iMlJsYkN3Z1ozSmhjR2dwSUh0Y2JseDBkbUZ5SUhCaGRHZ2dQU0JiWjNKaGNHaGJkRzlOYjJSbGJGMHVjR0Z5Wlc1MExDQjBiMDF2WkdWc1hUdGNibHgwZG1GeUlHWnVJRDBnWTI5dWRtVnljMmx2Ym5OYlozSmhjR2hiZEc5TmIyUmxiRjB1Y0dGeVpXNTBYVnQwYjAxdlpHVnNYVHRjYmx4dVhIUjJZWElnWTNWeUlEMGdaM0poY0doYmRHOU5iMlJsYkYwdWNHRnlaVzUwTzF4dVhIUjNhR2xzWlNBb1ozSmhjR2hiWTNWeVhTNXdZWEpsYm5RcElIdGNibHgwWEhSd1lYUm9MblZ1YzJocFpuUW9aM0poY0doYlkzVnlYUzV3WVhKbGJuUXBPMXh1WEhSY2RHWnVJRDBnYkdsdWF5aGpiMjUyWlhKemFXOXVjMXRuY21Gd2FGdGpkWEpkTG5CaGNtVnVkRjFiWTNWeVhTd2dabTRwTzF4dVhIUmNkR04xY2lBOUlHZHlZWEJvVzJOMWNsMHVjR0Z5Wlc1ME8xeHVYSFI5WEc1Y2JseDBabTR1WTI5dWRtVnljMmx2YmlBOUlIQmhkR2c3WEc1Y2RISmxkSFZ5YmlCbWJqdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlBb1puSnZiVTF2WkdWc0tTQjdYRzVjZEhaaGNpQm5jbUZ3YUNBOUlHUmxjbWwyWlVKR1V5aG1jbTl0VFc5a1pXd3BPMXh1WEhSMllYSWdZMjl1ZG1WeWMybHZiaUE5SUh0OU8xeHVYRzVjZEhaaGNpQnRiMlJsYkhNZ1BTQlBZbXBsWTNRdWEyVjVjeWhuY21Gd2FDazdYRzVjZEdadmNpQW9kbUZ5SUd4bGJpQTlJRzF2WkdWc2N5NXNaVzVuZEdnc0lHa2dQU0F3T3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmx4MFhIUjJZWElnZEc5TmIyUmxiQ0E5SUcxdlpHVnNjMXRwWFR0Y2JseDBYSFIyWVhJZ2JtOWtaU0E5SUdkeVlYQm9XM1J2VFc5a1pXeGRPMXh1WEc1Y2RGeDBhV1lnS0c1dlpHVXVjR0Z5Wlc1MElEMDlQU0J1ZFd4c0tTQjdYRzVjZEZ4MFhIUXZMeUJ1YnlCd2IzTnphV0pzWlNCamIyNTJaWEp6YVc5dUxDQnZjaUIwYUdseklHNXZaR1VnYVhNZ2RHaGxJSE52ZFhKalpTQnRiMlJsYkM1Y2JseDBYSFJjZEdOdmJuUnBiblZsTzF4dVhIUmNkSDFjYmx4dVhIUmNkR052Ym5abGNuTnBiMjViZEc5TmIyUmxiRjBnUFNCM2NtRndRMjl1ZG1WeWMybHZiaWgwYjAxdlpHVnNMQ0JuY21Gd2FDazdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdZMjl1ZG1WeWMybHZianRjYm4wN1hHNWNiaUlzSWlkMWMyVWdjM1J5YVdOMEoxeHlYRzVjY2x4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN1hISmNibHgwWENKaGJHbGpaV0pzZFdWY0lqb2dXekkwTUN3Z01qUTRMQ0F5TlRWZExGeHlYRzVjZEZ3aVlXNTBhWEYxWlhkb2FYUmxYQ0k2SUZzeU5UQXNJREl6TlN3Z01qRTFYU3hjY2x4dVhIUmNJbUZ4ZFdGY0lqb2dXekFzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW1GeGRXRnRZWEpwYm1WY0lqb2dXekV5Tnl3Z01qVTFMQ0F5TVRKZExGeHlYRzVjZEZ3aVlYcDFjbVZjSWpvZ1d6STBNQ3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpWW1WcFoyVmNJam9nV3pJME5Td2dNalExTENBeU1qQmRMRnh5WEc1Y2RGd2lZbWx6Y1hWbFhDSTZJRnN5TlRVc0lESXlPQ3dnTVRrMlhTeGNjbHh1WEhSY0ltSnNZV05yWENJNklGc3dMQ0F3TENBd1hTeGNjbHh1WEhSY0ltSnNZVzVqYUdWa1lXeHRiMjVrWENJNklGc3lOVFVzSURJek5Td2dNakExWFN4Y2NseHVYSFJjSW1Kc2RXVmNJam9nV3pBc0lEQXNJREkxTlYwc1hISmNibHgwWENKaWJIVmxkbWx2YkdWMFhDSTZJRnN4TXpnc0lEUXpMQ0F5TWpaZExGeHlYRzVjZEZ3aVluSnZkMjVjSWpvZ1d6RTJOU3dnTkRJc0lEUXlYU3hjY2x4dVhIUmNJbUoxY214NWQyOXZaRndpT2lCYk1qSXlMQ0F4T0RRc0lERXpOVjBzWEhKY2JseDBYQ0pqWVdSbGRHSnNkV1ZjSWpvZ1d6azFMQ0F4TlRnc0lERTJNRjBzWEhKY2JseDBYQ0pqYUdGeWRISmxkWE5sWENJNklGc3hNamNzSURJMU5Td2dNRjBzWEhKY2JseDBYQ0pqYUc5amIyeGhkR1ZjSWpvZ1d6SXhNQ3dnTVRBMUxDQXpNRjBzWEhKY2JseDBYQ0pqYjNKaGJGd2lPaUJiTWpVMUxDQXhNamNzSURnd1hTeGNjbHh1WEhSY0ltTnZjbTVtYkc5M1pYSmliSFZsWENJNklGc3hNREFzSURFME9Td2dNak0zWFN4Y2NseHVYSFJjSW1OdmNtNXphV3hyWENJNklGc3lOVFVzSURJME9Dd2dNakl3WFN4Y2NseHVYSFJjSW1OeWFXMXpiMjVjSWpvZ1d6SXlNQ3dnTWpBc0lEWXdYU3hjY2x4dVhIUmNJbU41WVc1Y0lqb2dXekFzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW1SaGNtdGliSFZsWENJNklGc3dMQ0F3TENBeE16bGRMRnh5WEc1Y2RGd2laR0Z5YTJONVlXNWNJam9nV3pBc0lERXpPU3dnTVRNNVhTeGNjbHh1WEhSY0ltUmhjbXRuYjJ4a1pXNXliMlJjSWpvZ1d6RTROQ3dnTVRNMExDQXhNVjBzWEhKY2JseDBYQ0prWVhKclozSmhlVndpT2lCYk1UWTVMQ0F4Tmprc0lERTJPVjBzWEhKY2JseDBYQ0prWVhKclozSmxaVzVjSWpvZ1d6QXNJREV3TUN3Z01GMHNYSEpjYmx4MFhDSmtZWEpyWjNKbGVWd2lPaUJiTVRZNUxDQXhOamtzSURFMk9WMHNYSEpjYmx4MFhDSmtZWEpyYTJoaGEybGNJam9nV3pFNE9Td2dNVGd6TENBeE1EZGRMRnh5WEc1Y2RGd2laR0Z5YTIxaFoyVnVkR0ZjSWpvZ1d6RXpPU3dnTUN3Z01UTTVYU3hjY2x4dVhIUmNJbVJoY210dmJHbDJaV2R5WldWdVhDSTZJRnM0TlN3Z01UQTNMQ0EwTjEwc1hISmNibHgwWENKa1lYSnJiM0poYm1kbFhDSTZJRnN5TlRVc0lERTBNQ3dnTUYwc1hISmNibHgwWENKa1lYSnJiM0pqYUdsa1hDSTZJRnN4TlRNc0lEVXdMQ0F5TURSZExGeHlYRzVjZEZ3aVpHRnlhM0psWkZ3aU9pQmJNVE01TENBd0xDQXdYU3hjY2x4dVhIUmNJbVJoY210ellXeHRiMjVjSWpvZ1d6SXpNeXdnTVRVd0xDQXhNakpkTEZ4eVhHNWNkRndpWkdGeWEzTmxZV2R5WldWdVhDSTZJRnN4TkRNc0lERTRPQ3dnTVRRelhTeGNjbHh1WEhSY0ltUmhjbXR6YkdGMFpXSnNkV1ZjSWpvZ1d6Y3lMQ0EyTVN3Z01UTTVYU3hjY2x4dVhIUmNJbVJoY210emJHRjBaV2R5WVhsY0lqb2dXelEzTENBM09Td2dOemxkTEZ4eVhHNWNkRndpWkdGeWEzTnNZWFJsWjNKbGVWd2lPaUJiTkRjc0lEYzVMQ0EzT1Ywc1hISmNibHgwWENKa1lYSnJkSFZ5Y1hWdmFYTmxYQ0k2SUZzd0xDQXlNRFlzSURJd09WMHNYSEpjYmx4MFhDSmtZWEpyZG1sdmJHVjBYQ0k2SUZzeE5EZ3NJREFzSURJeE1WMHNYSEpjYmx4MFhDSmtaV1Z3Y0dsdWExd2lPaUJiTWpVMUxDQXlNQ3dnTVRRM1hTeGNjbHh1WEhSY0ltUmxaWEJ6YTNsaWJIVmxYQ0k2SUZzd0xDQXhPVEVzSURJMU5WMHNYSEpjYmx4MFhDSmthVzFuY21GNVhDSTZJRnN4TURVc0lERXdOU3dnTVRBMVhTeGNjbHh1WEhSY0ltUnBiV2R5WlhsY0lqb2dXekV3TlN3Z01UQTFMQ0F4TURWZExGeHlYRzVjZEZ3aVpHOWtaMlZ5WW14MVpWd2lPaUJiTXpBc0lERTBOQ3dnTWpVMVhTeGNjbHh1WEhSY0ltWnBjbVZpY21samExd2lPaUJiTVRjNExDQXpOQ3dnTXpSZExGeHlYRzVjZEZ3aVpteHZjbUZzZDJocGRHVmNJam9nV3pJMU5Td2dNalV3TENBeU5EQmRMRnh5WEc1Y2RGd2labTl5WlhOMFozSmxaVzVjSWpvZ1d6TTBMQ0F4TXprc0lETTBYU3hjY2x4dVhIUmNJbVoxWTJoemFXRmNJam9nV3pJMU5Td2dNQ3dnTWpVMVhTeGNjbHh1WEhSY0ltZGhhVzV6WW05eWIxd2lPaUJiTWpJd0xDQXlNakFzSURJeU1GMHNYSEpjYmx4MFhDSm5hRzl6ZEhkb2FYUmxYQ0k2SUZzeU5EZ3NJREkwT0N3Z01qVTFYU3hjY2x4dVhIUmNJbWR2YkdSY0lqb2dXekkxTlN3Z01qRTFMQ0F3WFN4Y2NseHVYSFJjSW1kdmJHUmxibkp2WkZ3aU9pQmJNakU0TENBeE5qVXNJRE15WFN4Y2NseHVYSFJjSW1keVlYbGNJam9nV3pFeU9Dd2dNVEk0TENBeE1qaGRMRnh5WEc1Y2RGd2laM0psWlc1Y0lqb2dXekFzSURFeU9Dd2dNRjBzWEhKY2JseDBYQ0puY21WbGJubGxiR3h2ZDF3aU9pQmJNVGN6TENBeU5UVXNJRFEzWFN4Y2NseHVYSFJjSW1keVpYbGNJam9nV3pFeU9Dd2dNVEk0TENBeE1qaGRMRnh5WEc1Y2RGd2lhRzl1Wlhsa1pYZGNJam9nV3pJME1Dd2dNalUxTENBeU5EQmRMRnh5WEc1Y2RGd2lhRzkwY0dsdWExd2lPaUJiTWpVMUxDQXhNRFVzSURFNE1GMHNYSEpjYmx4MFhDSnBibVJwWVc1eVpXUmNJam9nV3pJd05Td2dPVElzSURreVhTeGNjbHh1WEhSY0ltbHVaR2xuYjF3aU9pQmJOelVzSURBc0lERXpNRjBzWEhKY2JseDBYQ0pwZG05eWVWd2lPaUJiTWpVMUxDQXlOVFVzSURJME1GMHNYSEpjYmx4MFhDSnJhR0ZyYVZ3aU9pQmJNalF3TENBeU16QXNJREUwTUYwc1hISmNibHgwWENKc1lYWmxibVJsY2x3aU9pQmJNak13TENBeU16QXNJREkxTUYwc1hISmNibHgwWENKc1lYWmxibVJsY21Kc2RYTm9YQ0k2SUZzeU5UVXNJREkwTUN3Z01qUTFYU3hjY2x4dVhIUmNJbXhoZDI1bmNtVmxibHdpT2lCYk1USTBMQ0F5TlRJc0lEQmRMRnh5WEc1Y2RGd2liR1Z0YjI1amFHbG1abTl1WENJNklGc3lOVFVzSURJMU1Dd2dNakExWFN4Y2NseHVYSFJjSW14cFoyaDBZbXgxWlZ3aU9pQmJNVGN6TENBeU1UWXNJREl6TUYwc1hISmNibHgwWENKc2FXZG9kR052Y21Gc1hDSTZJRnN5TkRBc0lERXlPQ3dnTVRJNFhTeGNjbHh1WEhSY0lteHBaMmgwWTNsaGJsd2lPaUJiTWpJMExDQXlOVFVzSURJMU5WMHNYSEpjYmx4MFhDSnNhV2RvZEdkdmJHUmxibkp2WkhsbGJHeHZkMXdpT2lCYk1qVXdMQ0F5TlRBc0lESXhNRjBzWEhKY2JseDBYQ0pzYVdkb2RHZHlZWGxjSWpvZ1d6SXhNU3dnTWpFeExDQXlNVEZkTEZ4eVhHNWNkRndpYkdsbmFIUm5jbVZsYmx3aU9pQmJNVFEwTENBeU16Z3NJREUwTkYwc1hISmNibHgwWENKc2FXZG9kR2R5WlhsY0lqb2dXekl4TVN3Z01qRXhMQ0F5TVRGZExGeHlYRzVjZEZ3aWJHbG5hSFJ3YVc1clhDSTZJRnN5TlRVc0lERTRNaXdnTVRrelhTeGNjbHh1WEhSY0lteHBaMmgwYzJGc2JXOXVYQ0k2SUZzeU5UVXNJREUyTUN3Z01USXlYU3hjY2x4dVhIUmNJbXhwWjJoMGMyVmhaM0psWlc1Y0lqb2dXek15TENBeE56Z3NJREUzTUYwc1hISmNibHgwWENKc2FXZG9kSE5yZVdKc2RXVmNJam9nV3pFek5Td2dNakEyTENBeU5UQmRMRnh5WEc1Y2RGd2liR2xuYUhSemJHRjBaV2R5WVhsY0lqb2dXekV4T1N3Z01UTTJMQ0F4TlROZExGeHlYRzVjZEZ3aWJHbG5hSFJ6YkdGMFpXZHlaWGxjSWpvZ1d6RXhPU3dnTVRNMkxDQXhOVE5kTEZ4eVhHNWNkRndpYkdsbmFIUnpkR1ZsYkdKc2RXVmNJam9nV3pFM05pd2dNVGsyTENBeU1qSmRMRnh5WEc1Y2RGd2liR2xuYUhSNVpXeHNiM2RjSWpvZ1d6STFOU3dnTWpVMUxDQXlNalJkTEZ4eVhHNWNkRndpYkdsdFpWd2lPaUJiTUN3Z01qVTFMQ0F3WFN4Y2NseHVYSFJjSW14cGJXVm5jbVZsYmx3aU9pQmJOVEFzSURJd05Td2dOVEJkTEZ4eVhHNWNkRndpYkdsdVpXNWNJam9nV3pJMU1Dd2dNalF3TENBeU16QmRMRnh5WEc1Y2RGd2liV0ZuWlc1MFlWd2lPaUJiTWpVMUxDQXdMQ0F5TlRWZExGeHlYRzVjZEZ3aWJXRnliMjl1WENJNklGc3hNamdzSURBc0lEQmRMRnh5WEc1Y2RGd2liV1ZrYVhWdFlYRjFZVzFoY21sdVpWd2lPaUJiTVRBeUxDQXlNRFVzSURFM01GMHNYSEpjYmx4MFhDSnRaV1JwZFcxaWJIVmxYQ0k2SUZzd0xDQXdMQ0F5TURWZExGeHlYRzVjZEZ3aWJXVmthWFZ0YjNKamFHbGtYQ0k2SUZzeE9EWXNJRGcxTENBeU1URmRMRnh5WEc1Y2RGd2liV1ZrYVhWdGNIVnljR3hsWENJNklGc3hORGNzSURFeE1pd2dNakU1WFN4Y2NseHVYSFJjSW0xbFpHbDFiWE5sWVdkeVpXVnVYQ0k2SUZzMk1Dd2dNVGM1TENBeE1UTmRMRnh5WEc1Y2RGd2liV1ZrYVhWdGMyeGhkR1ZpYkhWbFhDSTZJRnN4TWpNc0lERXdOQ3dnTWpNNFhTeGNjbHh1WEhSY0ltMWxaR2wxYlhOd2NtbHVaMmR5WldWdVhDSTZJRnN3TENBeU5UQXNJREUxTkYwc1hISmNibHgwWENKdFpXUnBkVzEwZFhKeGRXOXBjMlZjSWpvZ1d6Y3lMQ0F5TURrc0lESXdORjBzWEhKY2JseDBYQ0p0WldScGRXMTJhVzlzWlhSeVpXUmNJam9nV3pFNU9Td2dNakVzSURFek0xMHNYSEpjYmx4MFhDSnRhV1J1YVdkb2RHSnNkV1ZjSWpvZ1d6STFMQ0F5TlN3Z01URXlYU3hjY2x4dVhIUmNJbTFwYm5SamNtVmhiVndpT2lCYk1qUTFMQ0F5TlRVc0lESTFNRjBzWEhKY2JseDBYQ0p0YVhOMGVYSnZjMlZjSWpvZ1d6STFOU3dnTWpJNExDQXlNalZkTEZ4eVhHNWNkRndpYlc5alkyRnphVzVjSWpvZ1d6STFOU3dnTWpJNExDQXhPREZkTEZ4eVhHNWNkRndpYm1GMllXcHZkMmhwZEdWY0lqb2dXekkxTlN3Z01qSXlMQ0F4TnpOZExGeHlYRzVjZEZ3aWJtRjJlVndpT2lCYk1Dd2dNQ3dnTVRJNFhTeGNjbHh1WEhSY0ltOXNaR3hoWTJWY0lqb2dXekkxTXl3Z01qUTFMQ0F5TXpCZExGeHlYRzVjZEZ3aWIyeHBkbVZjSWpvZ1d6RXlPQ3dnTVRJNExDQXdYU3hjY2x4dVhIUmNJbTlzYVhabFpISmhZbHdpT2lCYk1UQTNMQ0F4TkRJc0lETTFYU3hjY2x4dVhIUmNJbTl5WVc1blpWd2lPaUJiTWpVMUxDQXhOalVzSURCZExGeHlYRzVjZEZ3aWIzSmhibWRsY21Wa1hDSTZJRnN5TlRVc0lEWTVMQ0F3WFN4Y2NseHVYSFJjSW05eVkyaHBaRndpT2lCYk1qRTRMQ0F4TVRJc0lESXhORjBzWEhKY2JseDBYQ0p3WVd4bFoyOXNaR1Z1Y205a1hDSTZJRnN5TXpnc0lESXpNaXdnTVRjd1hTeGNjbHh1WEhSY0luQmhiR1ZuY21WbGJsd2lPaUJiTVRVeUxDQXlOVEVzSURFMU1sMHNYSEpjYmx4MFhDSndZV3hsZEhWeWNYVnZhWE5sWENJNklGc3hOelVzSURJek9Dd2dNak00WFN4Y2NseHVYSFJjSW5CaGJHVjJhVzlzWlhSeVpXUmNJam9nV3pJeE9Td2dNVEV5TENBeE5EZGRMRnh5WEc1Y2RGd2ljR0Z3WVhsaGQyaHBjRndpT2lCYk1qVTFMQ0F5TXprc0lESXhNMTBzWEhKY2JseDBYQ0p3WldGamFIQjFabVpjSWpvZ1d6STFOU3dnTWpFNExDQXhPRFZkTEZ4eVhHNWNkRndpY0dWeWRWd2lPaUJiTWpBMUxDQXhNek1zSURZelhTeGNjbHh1WEhSY0luQnBibXRjSWpvZ1d6STFOU3dnTVRreUxDQXlNRE5kTEZ4eVhHNWNkRndpY0d4MWJWd2lPaUJiTWpJeExDQXhOakFzSURJeU1WMHNYSEpjYmx4MFhDSndiM2RrWlhKaWJIVmxYQ0k2SUZzeE56WXNJREl5TkN3Z01qTXdYU3hjY2x4dVhIUmNJbkIxY25Cc1pWd2lPaUJiTVRJNExDQXdMQ0F4TWpoZExGeHlYRzVjZEZ3aWNtVmlaV05qWVhCMWNuQnNaVndpT2lCYk1UQXlMQ0ExTVN3Z01UVXpYU3hjY2x4dVhIUmNJbkpsWkZ3aU9pQmJNalUxTENBd0xDQXdYU3hjY2x4dVhIUmNJbkp2YzNsaWNtOTNibHdpT2lCYk1UZzRMQ0F4TkRNc0lERTBNMTBzWEhKY2JseDBYQ0p5YjNsaGJHSnNkV1ZjSWpvZ1d6WTFMQ0F4TURVc0lESXlOVjBzWEhKY2JseDBYQ0p6WVdSa2JHVmljbTkzYmx3aU9pQmJNVE01TENBMk9Td2dNVGxkTEZ4eVhHNWNkRndpYzJGc2JXOXVYQ0k2SUZzeU5UQXNJREV5T0N3Z01URTBYU3hjY2x4dVhIUmNJbk5oYm1SNVluSnZkMjVjSWpvZ1d6STBOQ3dnTVRZMExDQTVObDBzWEhKY2JseDBYQ0p6WldGbmNtVmxibHdpT2lCYk5EWXNJREV6T1N3Z09EZGRMRnh5WEc1Y2RGd2ljMlZoYzJobGJHeGNJam9nV3pJMU5Td2dNalExTENBeU16aGRMRnh5WEc1Y2RGd2ljMmxsYm01aFhDSTZJRnN4TmpBc0lEZ3lMQ0EwTlYwc1hISmNibHgwWENKemFXeDJaWEpjSWpvZ1d6RTVNaXdnTVRreUxDQXhPVEpkTEZ4eVhHNWNkRndpYzJ0NVlteDFaVndpT2lCYk1UTTFMQ0F5TURZc0lESXpOVjBzWEhKY2JseDBYQ0p6YkdGMFpXSnNkV1ZjSWpvZ1d6RXdOaXdnT1RBc0lESXdOVjBzWEhKY2JseDBYQ0p6YkdGMFpXZHlZWGxjSWpvZ1d6RXhNaXdnTVRJNExDQXhORFJkTEZ4eVhHNWNkRndpYzJ4aGRHVm5jbVY1WENJNklGc3hNVElzSURFeU9Dd2dNVFEwWFN4Y2NseHVYSFJjSW5OdWIzZGNJam9nV3pJMU5Td2dNalV3TENBeU5UQmRMRnh5WEc1Y2RGd2ljM0J5YVc1blozSmxaVzVjSWpvZ1d6QXNJREkxTlN3Z01USTNYU3hjY2x4dVhIUmNJbk4wWldWc1lteDFaVndpT2lCYk56QXNJREV6TUN3Z01UZ3dYU3hjY2x4dVhIUmNJblJoYmx3aU9pQmJNakV3TENBeE9EQXNJREUwTUYwc1hISmNibHgwWENKMFpXRnNYQ0k2SUZzd0xDQXhNamdzSURFeU9GMHNYSEpjYmx4MFhDSjBhR2x6ZEd4bFhDSTZJRnN5TVRZc0lERTVNU3dnTWpFMlhTeGNjbHh1WEhSY0luUnZiV0YwYjF3aU9pQmJNalUxTENBNU9Td2dOekZkTEZ4eVhHNWNkRndpZEhWeWNYVnZhWE5sWENJNklGczJOQ3dnTWpJMExDQXlNRGhkTEZ4eVhHNWNkRndpZG1sdmJHVjBYQ0k2SUZzeU16Z3NJREV6TUN3Z01qTTRYU3hjY2x4dVhIUmNJbmRvWldGMFhDSTZJRnN5TkRVc0lESXlNaXdnTVRjNVhTeGNjbHh1WEhSY0luZG9hWFJsWENJNklGc3lOVFVzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW5kb2FYUmxjMjF2YTJWY0lqb2dXekkwTlN3Z01qUTFMQ0F5TkRWZExGeHlYRzVjZEZ3aWVXVnNiRzkzWENJNklGc3lOVFVzSURJMU5Td2dNRjBzWEhKY2JseDBYQ0o1Wld4c2IzZG5jbVZsYmx3aU9pQmJNVFUwTENBeU1EVXNJRFV3WFZ4eVhHNTlPMXh5WEc0aUxDSXZLaUJOU1ZRZ2JHbGpaVzV6WlNBcUwxeHVkbUZ5SUdOdmJHOXlUbUZ0WlhNZ1BTQnlaWEYxYVhKbEtDZGpiMnh2Y2kxdVlXMWxKeWs3WEc1MllYSWdjM2RwZW5wc1pTQTlJSEpsY1hWcGNtVW9KM05wYlhCc1pTMXpkMmw2ZW14bEp5azdYRzVjYm5aaGNpQnlaWFpsY25ObFRtRnRaWE1nUFNCN2ZUdGNibHh1THk4Z1kzSmxZWFJsSUdFZ2JHbHpkQ0J2WmlCeVpYWmxjbk5sSUdOdmJHOXlJRzVoYldWelhHNW1iM0lnS0haaGNpQnVZVzFsSUdsdUlHTnZiRzl5VG1GdFpYTXBJSHRjYmx4MGFXWWdLR052Ykc5eVRtRnRaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29ibUZ0WlNrcElIdGNibHgwWEhSeVpYWmxjbk5sVG1GdFpYTmJZMjlzYjNKT1lXMWxjMXR1WVcxbFhWMGdQU0J1WVcxbE8xeHVYSFI5WEc1OVhHNWNiblpoY2lCamN5QTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh1WEhSMGJ6b2dlMzBzWEc1Y2RHZGxkRG9nZTMxY2JuMDdYRzVjYm1OekxtZGxkQ0E5SUdaMWJtTjBhVzl1SUNoemRISnBibWNwSUh0Y2JseDBkbUZ5SUhCeVpXWnBlQ0E5SUhOMGNtbHVaeTV6ZFdKemRISnBibWNvTUN3Z015a3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JseDBkbUZ5SUhaaGJEdGNibHgwZG1GeUlHMXZaR1ZzTzF4dVhIUnpkMmwwWTJnZ0tIQnlaV1pwZUNrZ2UxeHVYSFJjZEdOaGMyVWdKMmh6YkNjNlhHNWNkRngwWEhSMllXd2dQU0JqY3k1blpYUXVhSE5zS0hOMGNtbHVaeWs3WEc1Y2RGeDBYSFJ0YjJSbGJDQTlJQ2RvYzJ3bk8xeHVYSFJjZEZ4MFluSmxZV3M3WEc1Y2RGeDBZMkZ6WlNBbmFIZGlKenBjYmx4MFhIUmNkSFpoYkNBOUlHTnpMbWRsZEM1b2QySW9jM1J5YVc1bktUdGNibHgwWEhSY2RHMXZaR1ZzSUQwZ0oyaDNZaWM3WEc1Y2RGeDBYSFJpY21WaGF6dGNibHgwWEhSa1pXWmhkV3gwT2x4dVhIUmNkRngwZG1Gc0lEMGdZM011WjJWMExuSm5ZaWh6ZEhKcGJtY3BPMXh1WEhSY2RGeDBiVzlrWld3Z1BTQW5jbWRpSnp0Y2JseDBYSFJjZEdKeVpXRnJPMXh1WEhSOVhHNWNibHgwYVdZZ0tDRjJZV3dwSUh0Y2JseDBYSFJ5WlhSMWNtNGdiblZzYkR0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCN2JXOWtaV3c2SUcxdlpHVnNMQ0IyWVd4MVpUb2dkbUZzZlR0Y2JuMDdYRzVjYm1OekxtZGxkQzV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9jM1J5YVc1bktTQjdYRzVjZEdsbUlDZ2hjM1J5YVc1bktTQjdYRzVjZEZ4MGNtVjBkWEp1SUc1MWJHdzdYRzVjZEgxY2JseHVYSFIyWVhJZ1lXSmljaUE5SUM5ZUl5aGJZUzFtTUMwNVhYc3pMRFI5S1NRdmFUdGNibHgwZG1GeUlHaGxlQ0E5SUM5ZUl5aGJZUzFtTUMwNVhYczJmU2tvVzJFdFpqQXRPVjE3TW4wcFB5UXZhVHRjYmx4MGRtRnlJSEpuWW1FZ1BTQXZYbkpuWW1FL1hGd29YRnh6S2loYkt5MWRQMXhjWkNzcFhGeHpLaXhjWEhNcUtGc3JMVjAvWEZ4a0t5bGNYSE1xTEZ4Y2N5b29XeXN0WFQ5Y1hHUXJLVnhjY3lvb1B6b3NYRnh6S2loYkt5MWRQMXRjWEdSY1hDNWRLeWxjWEhNcUtUOWNYQ2trTHp0Y2JseDBkbUZ5SUhCbGNpQTlJQzllY21kaVlUOWNYQ2hjWEhNcUtGc3JMVjAvVzF4Y1pGeGNMbDByS1Z4Y0pWeGNjeW9zWEZ4ektpaGJLeTFkUDF0Y1hHUmNYQzVkS3lsY1hDVmNYSE1xTEZ4Y2N5b29XeXN0WFQ5YlhGeGtYRnd1WFNzcFhGd2xYRnh6S2lnL09peGNYSE1xS0ZzckxWMC9XMXhjWkZ4Y0xsMHJLVnhjY3lvcFAxeGNLU1F2TzF4dVhIUjJZWElnYTJWNWQyOXlaQ0E5SUM4b1hGeEVLeWt2TzF4dVhHNWNkSFpoY2lCeVoySWdQU0JiTUN3Z01Dd2dNQ3dnTVYwN1hHNWNkSFpoY2lCdFlYUmphRHRjYmx4MGRtRnlJR2s3WEc1Y2RIWmhjaUJvWlhoQmJIQm9ZVHRjYmx4dVhIUnBaaUFvYldGMFkyZ2dQU0J6ZEhKcGJtY3ViV0YwWTJnb2FHVjRLU2tnZTF4dVhIUmNkR2hsZUVGc2NHaGhJRDBnYldGMFkyaGJNbDA3WEc1Y2RGeDBiV0YwWTJnZ1BTQnRZWFJqYUZzeFhUdGNibHh1WEhSY2RHWnZjaUFvYVNBOUlEQTdJR2tnUENBek95QnBLeXNwSUh0Y2JseDBYSFJjZEM4dklHaDBkSEJ6T2k4dmFuTndaWEptTG1OdmJTOXpiR2xqWlMxMmN5MXpkV0p6ZEhJdGRuTXRjM1ZpYzNSeWFXNW5MVzFsZEdodlpITXRiRzl1WnkxemRISnBibWN2TVRsY2JseDBYSFJjZEhaaGNpQnBNaUE5SUdrZ0tpQXlPMXh1WEhSY2RGeDBjbWRpVzJsZElEMGdjR0Z5YzJWSmJuUW9iV0YwWTJndWMyeHBZMlVvYVRJc0lHa3lJQ3NnTWlrc0lERTJLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnBaaUFvYUdWNFFXeHdhR0VwSUh0Y2JseDBYSFJjZEhKbllsc3pYU0E5SUUxaGRHZ3VjbTkxYm1Rb0tIQmhjbk5sU1c1MEtHaGxlRUZzY0doaExDQXhOaWtnTHlBeU5UVXBJQ29nTVRBd0tTQXZJREV3TUR0Y2JseDBYSFI5WEc1Y2RIMGdaV3h6WlNCcFppQW9iV0YwWTJnZ1BTQnpkSEpwYm1jdWJXRjBZMmdvWVdKaWNpa3BJSHRjYmx4MFhIUnRZWFJqYUNBOUlHMWhkR05vV3pGZE8xeHVYSFJjZEdobGVFRnNjR2hoSUQwZ2JXRjBZMmhiTTEwN1hHNWNibHgwWEhSbWIzSWdLR2tnUFNBd095QnBJRHdnTXpzZ2FTc3JLU0I3WEc1Y2RGeDBYSFJ5WjJKYmFWMGdQU0J3WVhKelpVbHVkQ2h0WVhSamFGdHBYU0FySUcxaGRHTm9XMmxkTENBeE5pazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLR2hsZUVGc2NHaGhLU0I3WEc1Y2RGeDBYSFJ5WjJKYk0xMGdQU0JOWVhSb0xuSnZkVzVrS0Nod1lYSnpaVWx1ZENob1pYaEJiSEJvWVNBcklHaGxlRUZzY0doaExDQXhOaWtnTHlBeU5UVXBJQ29nTVRBd0tTQXZJREV3TUR0Y2JseDBYSFI5WEc1Y2RIMGdaV3h6WlNCcFppQW9iV0YwWTJnZ1BTQnpkSEpwYm1jdWJXRjBZMmdvY21kaVlTa3BJSHRjYmx4MFhIUm1iM0lnS0drZ1BTQXdPeUJwSUR3Z016c2dhU3NyS1NCN1hHNWNkRngwWEhSeVoySmJhVjBnUFNCd1lYSnpaVWx1ZENodFlYUmphRnRwSUNzZ01WMHNJREFwTzF4dVhIUmNkSDFjYmx4dVhIUmNkR2xtSUNodFlYUmphRnMwWFNrZ2UxeHVYSFJjZEZ4MGNtZGlXek5kSUQwZ2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzMFhTazdYRzVjZEZ4MGZWeHVYSFI5SUdWc2MyVWdhV1lnS0cxaGRHTm9JRDBnYzNSeWFXNW5MbTFoZEdOb0tIQmxjaWtwSUh0Y2JseDBYSFJtYjNJZ0tHa2dQU0F3T3lCcElEd2dNenNnYVNzcktTQjdYRzVjZEZ4MFhIUnlaMkpiYVYwZ1BTQk5ZWFJvTG5KdmRXNWtLSEJoY25ObFJteHZZWFFvYldGMFkyaGJhU0FySURGZEtTQXFJREl1TlRVcE8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaHRZWFJqYUZzMFhTa2dlMXh1WEhSY2RGeDBjbWRpV3pOZElEMGdjR0Z5YzJWR2JHOWhkQ2h0WVhSamFGczBYU2s3WEc1Y2RGeDBmVnh1WEhSOUlHVnNjMlVnYVdZZ0tHMWhkR05vSUQwZ2MzUnlhVzVuTG0xaGRHTm9LR3RsZVhkdmNtUXBLU0I3WEc1Y2RGeDBhV1lnS0cxaGRHTm9XekZkSUQwOVBTQW5kSEpoYm5Od1lYSmxiblFuS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnV3pBc0lEQXNJREFzSURCZE8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbllpQTlJR052Ykc5eVRtRnRaWE5iYldGMFkyaGJNVjFkTzF4dVhHNWNkRngwYVdZZ0tDRnlaMklwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJ1ZFd4c08xeHVYSFJjZEgxY2JseHVYSFJjZEhKbllsc3pYU0E5SURFN1hHNWNibHgwWEhSeVpYUjFjbTRnY21kaU8xeHVYSFI5SUdWc2MyVWdlMXh1WEhSY2RISmxkSFZ5YmlCdWRXeHNPMXh1WEhSOVhHNWNibHgwWm05eUlDaHBJRDBnTURzZ2FTQThJRE03SUdrckt5a2dlMXh1WEhSY2RISm5ZbHRwWFNBOUlHTnNZVzF3S0hKbllsdHBYU3dnTUN3Z01qVTFLVHRjYmx4MGZWeHVYSFJ5WjJKYk0xMGdQU0JqYkdGdGNDaHlaMkpiTTEwc0lEQXNJREVwTzF4dVhHNWNkSEpsZEhWeWJpQnlaMkk3WEc1OU8xeHVYRzVqY3k1blpYUXVhSE5zSUQwZ1puVnVZM1JwYjI0Z0tITjBjbWx1WnlrZ2UxeHVYSFJwWmlBb0lYTjBjbWx1WnlrZ2UxeHVYSFJjZEhKbGRIVnliaUJ1ZFd4c08xeHVYSFI5WEc1Y2JseDBkbUZ5SUdoemJDQTlJQzllYUhOc1lUOWNYQ2hjWEhNcUtGc3JMVjAvS0Q4NlhGeGtLbHhjTGlrL1hGeGtLeWtvUHpwa1pXY3BQMXhjY3lvc1hGeHpLaWhiS3kxZFAxdGNYR1JjWEM1ZEt5a2xYRnh6S2l4Y1hITXFLRnNyTFYwL1cxeGNaRnhjTGwwcktTVmNYSE1xS0Q4NkxGeGNjeW9vV3lzdFhUOWJYRnhrWEZ3dVhTc3BYRnh6S2lrL1hGd3BKQzg3WEc1Y2RIWmhjaUJ0WVhSamFDQTlJSE4wY21sdVp5NXRZWFJqYUNob2Myd3BPMXh1WEc1Y2RHbG1JQ2h0WVhSamFDa2dlMXh1WEhSY2RIWmhjaUJoYkhCb1lTQTlJSEJoY25ObFJteHZZWFFvYldGMFkyaGJORjBwTzF4dVhIUmNkSFpoY2lCb0lEMGdLSEJoY25ObFJteHZZWFFvYldGMFkyaGJNVjBwSUNzZ016WXdLU0FsSURNMk1EdGNibHgwWEhSMllYSWdjeUE5SUdOc1lXMXdLSEJoY25ObFJteHZZWFFvYldGMFkyaGJNbDBwTENBd0xDQXhNREFwTzF4dVhIUmNkSFpoY2lCc0lEMGdZMnhoYlhBb2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzelhTa3NJREFzSURFd01DazdYRzVjZEZ4MGRtRnlJR0VnUFNCamJHRnRjQ2hwYzA1aFRpaGhiSEJvWVNrZ1B5QXhJRG9nWVd4d2FHRXNJREFzSURFcE8xeHVYRzVjZEZ4MGNtVjBkWEp1SUZ0b0xDQnpMQ0JzTENCaFhUdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQnVkV3hzTzF4dWZUdGNibHh1WTNNdVoyVjBMbWgzWWlBOUlHWjFibU4wYVc5dUlDaHpkSEpwYm1jcElIdGNibHgwYVdZZ0tDRnpkSEpwYm1jcElIdGNibHgwWEhSeVpYUjFjbTRnYm5Wc2JEdGNibHgwZlZ4dVhHNWNkSFpoY2lCb2QySWdQU0F2WG1oM1lseGNLRnhjY3lvb1d5c3RYVDljWEdRcVcxeGNMbDAvWEZ4a0t5a29QenBrWldjcFAxeGNjeW9zWEZ4ektpaGJLeTFkUDF0Y1hHUmNYQzVkS3lrbFhGeHpLaXhjWEhNcUtGc3JMVjAvVzF4Y1pGeGNMbDByS1NWY1hITXFLRDg2TEZ4Y2N5b29XeXN0WFQ5YlhGeGtYRnd1WFNzcFhGeHpLaWsvWEZ3cEpDODdYRzVjZEhaaGNpQnRZWFJqYUNBOUlITjBjbWx1Wnk1dFlYUmphQ2hvZDJJcE8xeHVYRzVjZEdsbUlDaHRZWFJqYUNrZ2UxeHVYSFJjZEhaaGNpQmhiSEJvWVNBOUlIQmhjbk5sUm14dllYUW9iV0YwWTJoYk5GMHBPMXh1WEhSY2RIWmhjaUJvSUQwZ0tDaHdZWEp6WlVac2IyRjBLRzFoZEdOb1d6RmRLU0FsSURNMk1Da2dLeUF6TmpBcElDVWdNell3TzF4dVhIUmNkSFpoY2lCM0lEMGdZMnhoYlhBb2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzeVhTa3NJREFzSURFd01DazdYRzVjZEZ4MGRtRnlJR0lnUFNCamJHRnRjQ2h3WVhKelpVWnNiMkYwS0cxaGRHTm9Xek5kS1N3Z01Dd2dNVEF3S1R0Y2JseDBYSFIyWVhJZ1lTQTlJR05zWVcxd0tHbHpUbUZPS0dGc2NHaGhLU0EvSURFZ09pQmhiSEJvWVN3Z01Dd2dNU2s3WEc1Y2RGeDBjbVYwZFhKdUlGdG9MQ0IzTENCaUxDQmhYVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJ1ZFd4c08xeHVmVHRjYmx4dVkzTXVkRzh1YUdWNElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUjJZWElnY21kaVlTQTlJSE4zYVhwNmJHVW9ZWEpuZFcxbGJuUnpLVHRjYmx4dVhIUnlaWFIxY200Z0tGeHVYSFJjZENjakp5QXJYRzVjZEZ4MGFHVjRSRzkxWW14bEtISm5ZbUZiTUYwcElDdGNibHgwWEhSb1pYaEViM1ZpYkdVb2NtZGlZVnN4WFNrZ0sxeHVYSFJjZEdobGVFUnZkV0pzWlNoeVoySmhXekpkS1NBclhHNWNkRngwS0hKblltRmJNMTBnUENBeFhHNWNkRngwWEhRL0lDaG9aWGhFYjNWaWJHVW9UV0YwYUM1eWIzVnVaQ2h5WjJKaFd6TmRJQ29nTWpVMUtTa3BYRzVjZEZ4MFhIUTZJQ2NuS1Z4dVhIUXBPMXh1ZlR0Y2JseHVZM011ZEc4dWNtZGlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFIyWVhJZ2NtZGlZU0E5SUhOM2FYcDZiR1VvWVhKbmRXMWxiblJ6S1R0Y2JseHVYSFJ5WlhSMWNtNGdjbWRpWVM1c1pXNW5kR2dnUENBMElIeDhJSEpuWW1GYk0xMGdQVDA5SURGY2JseDBYSFEvSUNkeVoySW9KeUFySUUxaGRHZ3VjbTkxYm1Rb2NtZGlZVnN3WFNrZ0t5QW5MQ0FuSUNzZ1RXRjBhQzV5YjNWdVpDaHlaMkpoV3pGZEtTQXJJQ2NzSUNjZ0t5Qk5ZWFJvTG5KdmRXNWtLSEpuWW1GYk1sMHBJQ3NnSnlrblhHNWNkRngwT2lBbmNtZGlZU2duSUNzZ1RXRjBhQzV5YjNWdVpDaHlaMkpoV3pCZEtTQXJJQ2NzSUNjZ0t5Qk5ZWFJvTG5KdmRXNWtLSEpuWW1GYk1WMHBJQ3NnSnl3Z0p5QXJJRTFoZEdndWNtOTFibVFvY21kaVlWc3lYU2tnS3lBbkxDQW5JQ3NnY21kaVlWc3pYU0FySUNjcEp6dGNibjA3WEc1Y2JtTnpMblJ2TG5KbllpNXdaWEpqWlc1MElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUjJZWElnY21kaVlTQTlJSE4zYVhwNmJHVW9ZWEpuZFcxbGJuUnpLVHRjYmx4dVhIUjJZWElnY2lBOUlFMWhkR2d1Y205MWJtUW9jbWRpWVZzd1hTQXZJREkxTlNBcUlERXdNQ2s3WEc1Y2RIWmhjaUJuSUQwZ1RXRjBhQzV5YjNWdVpDaHlaMkpoV3pGZElDOGdNalUxSUNvZ01UQXdLVHRjYmx4MGRtRnlJR0lnUFNCTllYUm9Mbkp2ZFc1a0tISm5ZbUZiTWwwZ0x5QXlOVFVnS2lBeE1EQXBPMXh1WEc1Y2RISmxkSFZ5YmlCeVoySmhMbXhsYm1kMGFDQThJRFFnZkh3Z2NtZGlZVnN6WFNBOVBUMGdNVnh1WEhSY2REOGdKM0puWWlnbklDc2djaUFySUNjbExDQW5JQ3NnWnlBcklDY2xMQ0FuSUNzZ1lpQXJJQ2NsS1NkY2JseDBYSFE2SUNkeVoySmhLQ2NnS3lCeUlDc2dKeVVzSUNjZ0t5Qm5JQ3NnSnlVc0lDY2dLeUJpSUNzZ0p5VXNJQ2NnS3lCeVoySmhXek5kSUNzZ0p5a25PMXh1ZlR0Y2JseHVZM011ZEc4dWFITnNJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFIyWVhJZ2FITnNZU0E5SUhOM2FYcDZiR1VvWVhKbmRXMWxiblJ6S1R0Y2JseDBjbVYwZFhKdUlHaHpiR0V1YkdWdVozUm9JRHdnTkNCOGZDQm9jMnhoV3pOZElEMDlQU0F4WEc1Y2RGeDBQeUFuYUhOc0tDY2dLeUJvYzJ4aFd6QmRJQ3NnSnl3Z0p5QXJJR2h6YkdGYk1WMGdLeUFuSlN3Z0p5QXJJR2h6YkdGYk1sMGdLeUFuSlNrblhHNWNkRngwT2lBbmFITnNZU2duSUNzZ2FITnNZVnN3WFNBcklDY3NJQ2NnS3lCb2MyeGhXekZkSUNzZ0p5VXNJQ2NnS3lCb2MyeGhXekpkSUNzZ0p5VXNJQ2NnS3lCb2MyeGhXek5kSUNzZ0p5a25PMXh1ZlR0Y2JseHVMeThnYUhkaUlHbHpJR0VnWW1sMElHUnBabVpsY21WdWRDQjBhR0Z1SUhKbllpaGhLU0FtSUdoemJDaGhLU0J6YVc1alpTQjBhR1Z5WlNCcGN5QnVieUJoYkhCb1lTQnpjR1ZqYVdacFl5QnplVzUwWVhoY2JpOHZJQ2hvZDJJZ2FHRjJaU0JoYkhCb1lTQnZjSFJwYjI1aGJDQW1JREVnYVhNZ1pHVm1ZWFZzZENCMllXeDFaU2xjYm1OekxuUnZMbWgzWWlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGRtRnlJR2gzWW1FZ1BTQnpkMmw2ZW14bEtHRnlaM1Z0Wlc1MGN5azdYRzVjYmx4MGRtRnlJR0VnUFNBbkp6dGNibHgwYVdZZ0tHaDNZbUV1YkdWdVozUm9JRDQ5SURRZ0ppWWdhSGRpWVZzelhTQWhQVDBnTVNrZ2UxeHVYSFJjZEdFZ1BTQW5MQ0FuSUNzZ2FIZGlZVnN6WFR0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlBbmFIZGlLQ2NnS3lCb2QySmhXekJkSUNzZ0p5d2dKeUFySUdoM1ltRmJNVjBnS3lBbkpTd2dKeUFySUdoM1ltRmJNbDBnS3lBbkpTY2dLeUJoSUNzZ0p5a25PMXh1ZlR0Y2JseHVZM011ZEc4dWEyVjVkMjl5WkNBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBjbVYwZFhKdUlISmxkbVZ5YzJWT1lXMWxjMXR5WjJJdWMyeHBZMlVvTUN3Z015bGRPMXh1ZlR0Y2JseHVMeThnYUdWc2NHVnljMXh1Wm5WdVkzUnBiMjRnWTJ4aGJYQW9iblZ0TENCdGFXNHNJRzFoZUNrZ2UxeHVYSFJ5WlhSMWNtNGdUV0YwYUM1dGFXNG9UV0YwYUM1dFlYZ29iV2x1TENCdWRXMHBMQ0J0WVhncE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCb1pYaEViM1ZpYkdVb2JuVnRLU0I3WEc1Y2RIWmhjaUJ6ZEhJZ1BTQnVkVzB1ZEc5VGRISnBibWNvTVRZcExuUnZWWEJ3WlhKRFlYTmxLQ2s3WEc1Y2RISmxkSFZ5YmlBb2MzUnlMbXhsYm1kMGFDQThJRElwSUQ4Z0p6QW5JQ3NnYzNSeUlEb2djM1J5TzF4dWZWeHVJaXdpSjNWelpTQnpkSEpwWTNRblhISmNibHh5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0Y2NseHVYSFJjSW1Gc2FXTmxZbXgxWlZ3aU9pQmJNalF3TENBeU5EZ3NJREkxTlYwc1hISmNibHgwWENKaGJuUnBjWFZsZDJocGRHVmNJam9nV3pJMU1Dd2dNak0xTENBeU1UVmRMRnh5WEc1Y2RGd2lZWEYxWVZ3aU9pQmJNQ3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpWVhGMVlXMWhjbWx1WlZ3aU9pQmJNVEkzTENBeU5UVXNJREl4TWwwc1hISmNibHgwWENKaGVuVnlaVndpT2lCYk1qUXdMQ0F5TlRVc0lESTFOVjBzWEhKY2JseDBYQ0ppWldsblpWd2lPaUJiTWpRMUxDQXlORFVzSURJeU1GMHNYSEpjYmx4MFhDSmlhWE54ZFdWY0lqb2dXekkxTlN3Z01qSTRMQ0F4T1RaZExGeHlYRzVjZEZ3aVlteGhZMnRjSWpvZ1d6QXNJREFzSURCZExGeHlYRzVjZEZ3aVlteGhibU5vWldSaGJHMXZibVJjSWpvZ1d6STFOU3dnTWpNMUxDQXlNRFZkTEZ4eVhHNWNkRndpWW14MVpWd2lPaUJiTUN3Z01Dd2dNalUxWFN4Y2NseHVYSFJjSW1Kc2RXVjJhVzlzWlhSY0lqb2dXekV6T0N3Z05ETXNJREl5Tmwwc1hISmNibHgwWENKaWNtOTNibHdpT2lCYk1UWTFMQ0EwTWl3Z05ESmRMRnh5WEc1Y2RGd2lZblZ5YkhsM2IyOWtYQ0k2SUZzeU1qSXNJREU0TkN3Z01UTTFYU3hjY2x4dVhIUmNJbU5oWkdWMFlteDFaVndpT2lCYk9UVXNJREUxT0N3Z01UWXdYU3hjY2x4dVhIUmNJbU5vWVhKMGNtVjFjMlZjSWpvZ1d6RXlOeXdnTWpVMUxDQXdYU3hjY2x4dVhIUmNJbU5vYjJOdmJHRjBaVndpT2lCYk1qRXdMQ0F4TURVc0lETXdYU3hjY2x4dVhIUmNJbU52Y21Gc1hDSTZJRnN5TlRVc0lERXlOeXdnT0RCZExGeHlYRzVjZEZ3aVkyOXlibVpzYjNkbGNtSnNkV1ZjSWpvZ1d6RXdNQ3dnTVRRNUxDQXlNemRkTEZ4eVhHNWNkRndpWTI5eWJuTnBiR3RjSWpvZ1d6STFOU3dnTWpRNExDQXlNakJkTEZ4eVhHNWNkRndpWTNKcGJYTnZibHdpT2lCYk1qSXdMQ0F5TUN3Z05qQmRMRnh5WEc1Y2RGd2lZM2xoYmx3aU9pQmJNQ3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpWkdGeWEySnNkV1ZjSWpvZ1d6QXNJREFzSURFek9WMHNYSEpjYmx4MFhDSmtZWEpyWTNsaGJsd2lPaUJiTUN3Z01UTTVMQ0F4TXpsZExGeHlYRzVjZEZ3aVpHRnlhMmR2YkdSbGJuSnZaRndpT2lCYk1UZzBMQ0F4TXpRc0lERXhYU3hjY2x4dVhIUmNJbVJoY210bmNtRjVYQ0k2SUZzeE5qa3NJREUyT1N3Z01UWTVYU3hjY2x4dVhIUmNJbVJoY210bmNtVmxibHdpT2lCYk1Dd2dNVEF3TENBd1hTeGNjbHh1WEhSY0ltUmhjbXRuY21WNVhDSTZJRnN4Tmprc0lERTJPU3dnTVRZNVhTeGNjbHh1WEhSY0ltUmhjbXRyYUdGcmFWd2lPaUJiTVRnNUxDQXhPRE1zSURFd04xMHNYSEpjYmx4MFhDSmtZWEpyYldGblpXNTBZVndpT2lCYk1UTTVMQ0F3TENBeE16bGRMRnh5WEc1Y2RGd2laR0Z5YTI5c2FYWmxaM0psWlc1Y0lqb2dXemcxTENBeE1EY3NJRFEzWFN4Y2NseHVYSFJjSW1SaGNtdHZjbUZ1WjJWY0lqb2dXekkxTlN3Z01UUXdMQ0F3WFN4Y2NseHVYSFJjSW1SaGNtdHZjbU5vYVdSY0lqb2dXekUxTXl3Z05UQXNJREl3TkYwc1hISmNibHgwWENKa1lYSnJjbVZrWENJNklGc3hNemtzSURBc0lEQmRMRnh5WEc1Y2RGd2laR0Z5YTNOaGJHMXZibHdpT2lCYk1qTXpMQ0F4TlRBc0lERXlNbDBzWEhKY2JseDBYQ0prWVhKcmMyVmhaM0psWlc1Y0lqb2dXekUwTXl3Z01UZzRMQ0F4TkROZExGeHlYRzVjZEZ3aVpHRnlhM05zWVhSbFlteDFaVndpT2lCYk56SXNJRFl4TENBeE16bGRMRnh5WEc1Y2RGd2laR0Z5YTNOc1lYUmxaM0poZVZ3aU9pQmJORGNzSURjNUxDQTNPVjBzWEhKY2JseDBYQ0prWVhKcmMyeGhkR1ZuY21WNVhDSTZJRnMwTnl3Z056a3NJRGM1WFN4Y2NseHVYSFJjSW1SaGNtdDBkWEp4ZFc5cGMyVmNJam9nV3pBc0lESXdOaXdnTWpBNVhTeGNjbHh1WEhSY0ltUmhjbXQyYVc5c1pYUmNJam9nV3pFME9Dd2dNQ3dnTWpFeFhTeGNjbHh1WEhSY0ltUmxaWEJ3YVc1clhDSTZJRnN5TlRVc0lESXdMQ0F4TkRkZExGeHlYRzVjZEZ3aVpHVmxjSE5yZVdKc2RXVmNJam9nV3pBc0lERTVNU3dnTWpVMVhTeGNjbHh1WEhSY0ltUnBiV2R5WVhsY0lqb2dXekV3TlN3Z01UQTFMQ0F4TURWZExGeHlYRzVjZEZ3aVpHbHRaM0psZVZ3aU9pQmJNVEExTENBeE1EVXNJREV3TlYwc1hISmNibHgwWENKa2IyUm5aWEppYkhWbFhDSTZJRnN6TUN3Z01UUTBMQ0F5TlRWZExGeHlYRzVjZEZ3aVptbHlaV0p5YVdOclhDSTZJRnN4Tnpnc0lETTBMQ0F6TkYwc1hISmNibHgwWENKbWJHOXlZV3gzYUdsMFpWd2lPaUJiTWpVMUxDQXlOVEFzSURJME1GMHNYSEpjYmx4MFhDSm1iM0psYzNSbmNtVmxibHdpT2lCYk16UXNJREV6T1N3Z016UmRMRnh5WEc1Y2RGd2lablZqYUhOcFlWd2lPaUJiTWpVMUxDQXdMQ0F5TlRWZExGeHlYRzVjZEZ3aVoyRnBibk5pYjNKdlhDSTZJRnN5TWpBc0lESXlNQ3dnTWpJd1hTeGNjbHh1WEhSY0ltZG9iM04wZDJocGRHVmNJam9nV3pJME9Dd2dNalE0TENBeU5UVmRMRnh5WEc1Y2RGd2laMjlzWkZ3aU9pQmJNalUxTENBeU1UVXNJREJkTEZ4eVhHNWNkRndpWjI5c1pHVnVjbTlrWENJNklGc3lNVGdzSURFMk5Td2dNekpkTEZ4eVhHNWNkRndpWjNKaGVWd2lPaUJiTVRJNExDQXhNamdzSURFeU9GMHNYSEpjYmx4MFhDSm5jbVZsYmx3aU9pQmJNQ3dnTVRJNExDQXdYU3hjY2x4dVhIUmNJbWR5WldWdWVXVnNiRzkzWENJNklGc3hOek1zSURJMU5Td2dORGRkTEZ4eVhHNWNkRndpWjNKbGVWd2lPaUJiTVRJNExDQXhNamdzSURFeU9GMHNYSEpjYmx4MFhDSm9iMjVsZVdSbGQxd2lPaUJiTWpRd0xDQXlOVFVzSURJME1GMHNYSEpjYmx4MFhDSm9iM1J3YVc1clhDSTZJRnN5TlRVc0lERXdOU3dnTVRnd1hTeGNjbHh1WEhSY0ltbHVaR2xoYm5KbFpGd2lPaUJiTWpBMUxDQTVNaXdnT1RKZExGeHlYRzVjZEZ3aWFXNWthV2R2WENJNklGczNOU3dnTUN3Z01UTXdYU3hjY2x4dVhIUmNJbWwyYjNKNVhDSTZJRnN5TlRVc0lESTFOU3dnTWpRd1hTeGNjbHh1WEhSY0ltdG9ZV3RwWENJNklGc3lOREFzSURJek1Dd2dNVFF3WFN4Y2NseHVYSFJjSW14aGRtVnVaR1Z5WENJNklGc3lNekFzSURJek1Dd2dNalV3WFN4Y2NseHVYSFJjSW14aGRtVnVaR1Z5WW14MWMyaGNJam9nV3pJMU5Td2dNalF3TENBeU5EVmRMRnh5WEc1Y2RGd2liR0YzYm1keVpXVnVYQ0k2SUZzeE1qUXNJREkxTWl3Z01GMHNYSEpjYmx4MFhDSnNaVzF2Ym1Ob2FXWm1iMjVjSWpvZ1d6STFOU3dnTWpVd0xDQXlNRFZkTEZ4eVhHNWNkRndpYkdsbmFIUmliSFZsWENJNklGc3hOek1zSURJeE5pd2dNak13WFN4Y2NseHVYSFJjSW14cFoyaDBZMjl5WVd4Y0lqb2dXekkwTUN3Z01USTRMQ0F4TWpoZExGeHlYRzVjZEZ3aWJHbG5hSFJqZVdGdVhDSTZJRnN5TWpRc0lESTFOU3dnTWpVMVhTeGNjbHh1WEhSY0lteHBaMmgwWjI5c1pHVnVjbTlrZVdWc2JHOTNYQ0k2SUZzeU5UQXNJREkxTUN3Z01qRXdYU3hjY2x4dVhIUmNJbXhwWjJoMFozSmhlVndpT2lCYk1qRXhMQ0F5TVRFc0lESXhNVjBzWEhKY2JseDBYQ0pzYVdkb2RHZHlaV1Z1WENJNklGc3hORFFzSURJek9Dd2dNVFEwWFN4Y2NseHVYSFJjSW14cFoyaDBaM0psZVZ3aU9pQmJNakV4TENBeU1URXNJREl4TVYwc1hISmNibHgwWENKc2FXZG9kSEJwYm10Y0lqb2dXekkxTlN3Z01UZ3lMQ0F4T1ROZExGeHlYRzVjZEZ3aWJHbG5hSFJ6WVd4dGIyNWNJam9nV3pJMU5Td2dNVFl3TENBeE1qSmRMRnh5WEc1Y2RGd2liR2xuYUhSelpXRm5jbVZsYmx3aU9pQmJNeklzSURFM09Dd2dNVGN3WFN4Y2NseHVYSFJjSW14cFoyaDBjMnQ1WW14MVpWd2lPaUJiTVRNMUxDQXlNRFlzSURJMU1GMHNYSEpjYmx4MFhDSnNhV2RvZEhOc1lYUmxaM0poZVZ3aU9pQmJNVEU1TENBeE16WXNJREUxTTEwc1hISmNibHgwWENKc2FXZG9kSE5zWVhSbFozSmxlVndpT2lCYk1URTVMQ0F4TXpZc0lERTFNMTBzWEhKY2JseDBYQ0pzYVdkb2RITjBaV1ZzWW14MVpWd2lPaUJiTVRjMkxDQXhPVFlzSURJeU1sMHNYSEpjYmx4MFhDSnNhV2RvZEhsbGJHeHZkMXdpT2lCYk1qVTFMQ0F5TlRVc0lESXlORjBzWEhKY2JseDBYQ0pzYVcxbFhDSTZJRnN3TENBeU5UVXNJREJkTEZ4eVhHNWNkRndpYkdsdFpXZHlaV1Z1WENJNklGczFNQ3dnTWpBMUxDQTFNRjBzWEhKY2JseDBYQ0pzYVc1bGJsd2lPaUJiTWpVd0xDQXlOREFzSURJek1GMHNYSEpjYmx4MFhDSnRZV2RsYm5SaFhDSTZJRnN5TlRVc0lEQXNJREkxTlYwc1hISmNibHgwWENKdFlYSnZiMjVjSWpvZ1d6RXlPQ3dnTUN3Z01GMHNYSEpjYmx4MFhDSnRaV1JwZFcxaGNYVmhiV0Z5YVc1bFhDSTZJRnN4TURJc0lESXdOU3dnTVRjd1hTeGNjbHh1WEhSY0ltMWxaR2wxYldKc2RXVmNJam9nV3pBc0lEQXNJREl3TlYwc1hISmNibHgwWENKdFpXUnBkVzF2Y21Ob2FXUmNJam9nV3pFNE5pd2dPRFVzSURJeE1WMHNYSEpjYmx4MFhDSnRaV1JwZFcxd2RYSndiR1ZjSWpvZ1d6RTBOeXdnTVRFeUxDQXlNVGxkTEZ4eVhHNWNkRndpYldWa2FYVnRjMlZoWjNKbFpXNWNJam9nV3pZd0xDQXhOemtzSURFeE0xMHNYSEpjYmx4MFhDSnRaV1JwZFcxemJHRjBaV0pzZFdWY0lqb2dXekV5TXl3Z01UQTBMQ0F5TXpoZExGeHlYRzVjZEZ3aWJXVmthWFZ0YzNCeWFXNW5aM0psWlc1Y0lqb2dXekFzSURJMU1Dd2dNVFUwWFN4Y2NseHVYSFJjSW0xbFpHbDFiWFIxY25GMWIybHpaVndpT2lCYk56SXNJREl3T1N3Z01qQTBYU3hjY2x4dVhIUmNJbTFsWkdsMWJYWnBiMnhsZEhKbFpGd2lPaUJiTVRrNUxDQXlNU3dnTVRNelhTeGNjbHh1WEhSY0ltMXBaRzVwWjJoMFlteDFaVndpT2lCYk1qVXNJREkxTENBeE1USmRMRnh5WEc1Y2RGd2liV2x1ZEdOeVpXRnRYQ0k2SUZzeU5EVXNJREkxTlN3Z01qVXdYU3hjY2x4dVhIUmNJbTFwYzNSNWNtOXpaVndpT2lCYk1qVTFMQ0F5TWpnc0lESXlOVjBzWEhKY2JseDBYQ0p0YjJOallYTnBibHdpT2lCYk1qVTFMQ0F5TWpnc0lERTRNVjBzWEhKY2JseDBYQ0p1WVhaaGFtOTNhR2wwWlZ3aU9pQmJNalUxTENBeU1qSXNJREUzTTEwc1hISmNibHgwWENKdVlYWjVYQ0k2SUZzd0xDQXdMQ0F4TWpoZExGeHlYRzVjZEZ3aWIyeGtiR0ZqWlZ3aU9pQmJNalV6TENBeU5EVXNJREl6TUYwc1hISmNibHgwWENKdmJHbDJaVndpT2lCYk1USTRMQ0F4TWpnc0lEQmRMRnh5WEc1Y2RGd2liMnhwZG1Wa2NtRmlYQ0k2SUZzeE1EY3NJREUwTWl3Z016VmRMRnh5WEc1Y2RGd2liM0poYm1kbFhDSTZJRnN5TlRVc0lERTJOU3dnTUYwc1hISmNibHgwWENKdmNtRnVaMlZ5WldSY0lqb2dXekkxTlN3Z05qa3NJREJkTEZ4eVhHNWNkRndpYjNKamFHbGtYQ0k2SUZzeU1UZ3NJREV4TWl3Z01qRTBYU3hjY2x4dVhIUmNJbkJoYkdWbmIyeGtaVzV5YjJSY0lqb2dXekl6T0N3Z01qTXlMQ0F4TnpCZExGeHlYRzVjZEZ3aWNHRnNaV2R5WldWdVhDSTZJRnN4TlRJc0lESTFNU3dnTVRVeVhTeGNjbHh1WEhSY0luQmhiR1YwZFhKeGRXOXBjMlZjSWpvZ1d6RTNOU3dnTWpNNExDQXlNemhkTEZ4eVhHNWNkRndpY0dGc1pYWnBiMnhsZEhKbFpGd2lPaUJiTWpFNUxDQXhNVElzSURFME4xMHNYSEpjYmx4MFhDSndZWEJoZVdGM2FHbHdYQ0k2SUZzeU5UVXNJREl6T1N3Z01qRXpYU3hjY2x4dVhIUmNJbkJsWVdOb2NIVm1abHdpT2lCYk1qVTFMQ0F5TVRnc0lERTROVjBzWEhKY2JseDBYQ0p3WlhKMVhDSTZJRnN5TURVc0lERXpNeXdnTmpOZExGeHlYRzVjZEZ3aWNHbHVhMXdpT2lCYk1qVTFMQ0F4T1RJc0lESXdNMTBzWEhKY2JseDBYQ0p3YkhWdFhDSTZJRnN5TWpFc0lERTJNQ3dnTWpJeFhTeGNjbHh1WEhSY0luQnZkMlJsY21Kc2RXVmNJam9nV3pFM05pd2dNakkwTENBeU16QmRMRnh5WEc1Y2RGd2ljSFZ5Y0d4bFhDSTZJRnN4TWpnc0lEQXNJREV5T0Ywc1hISmNibHgwWENKeVpXSmxZMk5oY0hWeWNHeGxYQ0k2SUZzeE1ESXNJRFV4TENBeE5UTmRMRnh5WEc1Y2RGd2ljbVZrWENJNklGc3lOVFVzSURBc0lEQmRMRnh5WEc1Y2RGd2ljbTl6ZVdKeWIzZHVYQ0k2SUZzeE9EZ3NJREUwTXl3Z01UUXpYU3hjY2x4dVhIUmNJbkp2ZVdGc1lteDFaVndpT2lCYk5qVXNJREV3TlN3Z01qSTFYU3hjY2x4dVhIUmNJbk5oWkdSc1pXSnliM2R1WENJNklGc3hNemtzSURZNUxDQXhPVjBzWEhKY2JseDBYQ0p6WVd4dGIyNWNJam9nV3pJMU1Dd2dNVEk0TENBeE1UUmRMRnh5WEc1Y2RGd2ljMkZ1WkhsaWNtOTNibHdpT2lCYk1qUTBMQ0F4TmpRc0lEazJYU3hjY2x4dVhIUmNJbk5sWVdkeVpXVnVYQ0k2SUZzME5pd2dNVE01TENBNE4xMHNYSEpjYmx4MFhDSnpaV0Z6YUdWc2JGd2lPaUJiTWpVMUxDQXlORFVzSURJek9GMHNYSEpjYmx4MFhDSnphV1Z1Ym1GY0lqb2dXekUyTUN3Z09ESXNJRFExWFN4Y2NseHVYSFJjSW5OcGJIWmxjbHdpT2lCYk1Ua3lMQ0F4T1RJc0lERTVNbDBzWEhKY2JseDBYQ0p6YTNsaWJIVmxYQ0k2SUZzeE16VXNJREl3Tml3Z01qTTFYU3hjY2x4dVhIUmNJbk5zWVhSbFlteDFaVndpT2lCYk1UQTJMQ0E1TUN3Z01qQTFYU3hjY2x4dVhIUmNJbk5zWVhSbFozSmhlVndpT2lCYk1URXlMQ0F4TWpnc0lERTBORjBzWEhKY2JseDBYQ0p6YkdGMFpXZHlaWGxjSWpvZ1d6RXhNaXdnTVRJNExDQXhORFJkTEZ4eVhHNWNkRndpYzI1dmQxd2lPaUJiTWpVMUxDQXlOVEFzSURJMU1GMHNYSEpjYmx4MFhDSnpjSEpwYm1kbmNtVmxibHdpT2lCYk1Dd2dNalUxTENBeE1qZGRMRnh5WEc1Y2RGd2ljM1JsWld4aWJIVmxYQ0k2SUZzM01Dd2dNVE13TENBeE9EQmRMRnh5WEc1Y2RGd2lkR0Z1WENJNklGc3lNVEFzSURFNE1Dd2dNVFF3WFN4Y2NseHVYSFJjSW5SbFlXeGNJam9nV3pBc0lERXlPQ3dnTVRJNFhTeGNjbHh1WEhSY0luUm9hWE4wYkdWY0lqb2dXekl4Tml3Z01Ua3hMQ0F5TVRaZExGeHlYRzVjZEZ3aWRHOXRZWFJ2WENJNklGc3lOVFVzSURrNUxDQTNNVjBzWEhKY2JseDBYQ0owZFhKeGRXOXBjMlZjSWpvZ1d6WTBMQ0F5TWpRc0lESXdPRjBzWEhKY2JseDBYQ0oyYVc5c1pYUmNJam9nV3pJek9Dd2dNVE13TENBeU16aGRMRnh5WEc1Y2RGd2lkMmhsWVhSY0lqb2dXekkwTlN3Z01qSXlMQ0F4TnpsZExGeHlYRzVjZEZ3aWQyaHBkR1ZjSWpvZ1d6STFOU3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpZDJocGRHVnpiVzlyWlZ3aU9pQmJNalExTENBeU5EVXNJREkwTlYwc1hISmNibHgwWENKNVpXeHNiM2RjSWpvZ1d6STFOU3dnTWpVMUxDQXdYU3hjY2x4dVhIUmNJbmxsYkd4dmQyZHlaV1Z1WENJNklGc3hOVFFzSURJd05Td2dOVEJkWEhKY2JuMDdYSEpjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJR052Ykc5eVUzUnlhVzVuSUQwZ2NtVnhkV2x5WlNnblkyOXNiM0l0YzNSeWFXNW5KeWs3WEc1MllYSWdZMjl1ZG1WeWRDQTlJSEpsY1hWcGNtVW9KMk52Ykc5eUxXTnZiblpsY25RbktUdGNibHh1ZG1GeUlGOXpiR2xqWlNBOUlGdGRMbk5zYVdObE8xeHVYRzUyWVhJZ2MydHBjSEJsWkUxdlpHVnNjeUE5SUZ0Y2JseDBMeThnZEc4Z1ltVWdhRzl1WlhOMExDQkpJR1J2YmlkMElISmxZV3hzZVNCbVpXVnNJR3hwYTJVZ2EyVjVkMjl5WkNCaVpXeHZibWR6SUdsdUlHTnZiRzl5SUdOdmJuWmxjblFzSUdKMWRDQmxhQzVjYmx4MEoydGxlWGR2Y21RbkxGeHVYRzVjZEM4dklHZHlZWGtnWTI5dVpteHBZM1J6SUhkcGRHZ2djMjl0WlNCdFpYUm9iMlFnYm1GdFpYTXNJR0Z1WkNCb1lYTWdhWFJ6SUc5M2JpQnRaWFJvYjJRZ1pHVm1hVzVsWkM1Y2JseDBKMmR5WVhrbkxGeHVYRzVjZEM4dklITm9iM1ZzWkc0bmRDQnlaV0ZzYkhrZ1ltVWdhVzRnWTI5c2IzSXRZMjl1ZG1WeWRDQmxhWFJvWlhJdUxpNWNibHgwSjJobGVDZGNibDA3WEc1Y2JuWmhjaUJvWVhOb1pXUk5iMlJsYkV0bGVYTWdQU0I3ZlR0Y2JrOWlhbVZqZEM1clpYbHpLR052Ym5abGNuUXBMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLRzF2WkdWc0tTQjdYRzVjZEdoaGMyaGxaRTF2WkdWc1MyVjVjMXRmYzJ4cFkyVXVZMkZzYkNoamIyNTJaWEowVzIxdlpHVnNYUzVzWVdKbGJITXBMbk52Y25Rb0tTNXFiMmx1S0NjbktWMGdQU0J0YjJSbGJEdGNibjBwTzF4dVhHNTJZWElnYkdsdGFYUmxjbk1nUFNCN2ZUdGNibHh1Wm5WdVkzUnBiMjRnUTI5c2IzSW9iMkpxTENCdGIyUmxiQ2tnZTF4dVhIUnBaaUFvSVNoMGFHbHpJR2x1YzNSaGJtTmxiMllnUTI5c2IzSXBLU0I3WEc1Y2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaHZZbW9zSUcxdlpHVnNLVHRjYmx4MGZWeHVYRzVjZEdsbUlDaHRiMlJsYkNBbUppQnRiMlJsYkNCcGJpQnphMmx3Y0dWa1RXOWtaV3h6S1NCN1hHNWNkRngwYlc5a1pXd2dQU0J1ZFd4c08xeHVYSFI5WEc1Y2JseDBhV1lnS0cxdlpHVnNJQ1ltSUNFb2JXOWtaV3dnYVc0Z1kyOXVkbVZ5ZENrcElIdGNibHgwWEhSMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjFWdWEyNXZkMjRnYlc5a1pXdzZJQ2NnS3lCdGIyUmxiQ2s3WEc1Y2RIMWNibHh1WEhSMllYSWdhVHRjYmx4MGRtRnlJR05vWVc1dVpXeHpPMXh1WEc1Y2RHbG1JQ2gwZVhCbGIyWWdiMkpxSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dVhIUmNkSFJvYVhNdWJXOWtaV3dnUFNBbmNtZGlKenRjYmx4MFhIUjBhR2x6TG1OdmJHOXlJRDBnV3pBc0lEQXNJREJkTzF4dVhIUmNkSFJvYVhNdWRtRnNjR2hoSUQwZ01UdGNibHgwZlNCbGJITmxJR2xtSUNodlltb2dhVzV6ZEdGdVkyVnZaaUJEYjJ4dmNpa2dlMXh1WEhSY2RIUm9hWE11Ylc5a1pXd2dQU0J2WW1vdWJXOWtaV3c3WEc1Y2RGeDBkR2hwY3k1amIyeHZjaUE5SUc5aWFpNWpiMnh2Y2k1emJHbGpaU2dwTzF4dVhIUmNkSFJvYVhNdWRtRnNjR2hoSUQwZ2IySnFMblpoYkhCb1lUdGNibHgwZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnYjJKcUlEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dVhIUmNkSFpoY2lCeVpYTjFiSFFnUFNCamIyeHZjbE4wY21sdVp5NW5aWFFvYjJKcUtUdGNibHgwWEhScFppQW9jbVZ6ZFd4MElEMDlQU0J1ZFd4c0tTQjdYRzVjZEZ4MFhIUjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oxVnVZV0pzWlNCMGJ5QndZWEp6WlNCamIyeHZjaUJtY205dElITjBjbWx1WnpvZ0p5QXJJRzlpYWlrN1hHNWNkRngwZlZ4dVhHNWNkRngwZEdocGN5NXRiMlJsYkNBOUlISmxjM1ZzZEM1dGIyUmxiRHRjYmx4MFhIUmphR0Z1Ym1Wc2N5QTlJR052Ym5abGNuUmJkR2hwY3k1dGIyUmxiRjB1WTJoaGJtNWxiSE03WEc1Y2RGeDBkR2hwY3k1amIyeHZjaUE5SUhKbGMzVnNkQzUyWVd4MVpTNXpiR2xqWlNnd0xDQmphR0Z1Ym1Wc2N5azdYRzVjZEZ4MGRHaHBjeTUyWVd4d2FHRWdQU0IwZVhCbGIyWWdjbVZ6ZFd4MExuWmhiSFZsVzJOb1lXNXVaV3h6WFNBOVBUMGdKMjUxYldKbGNpY2dQeUJ5WlhOMWJIUXVkbUZzZFdWYlkyaGhibTVsYkhOZElEb2dNVHRjYmx4MGZTQmxiSE5sSUdsbUlDaHZZbW91YkdWdVozUm9LU0I3WEc1Y2RGeDBkR2hwY3k1dGIyUmxiQ0E5SUcxdlpHVnNJSHg4SUNkeVoySW5PMXh1WEhSY2RHTm9ZVzV1Wld4eklEMGdZMjl1ZG1WeWRGdDBhR2x6TG0xdlpHVnNYUzVqYUdGdWJtVnNjenRjYmx4MFhIUjJZWElnYm1WM1FYSnlJRDBnWDNOc2FXTmxMbU5oYkd3b2IySnFMQ0F3TENCamFHRnVibVZzY3lrN1hHNWNkRngwZEdocGN5NWpiMnh2Y2lBOUlIcGxjbTlCY25KaGVTaHVaWGRCY25Jc0lHTm9ZVzV1Wld4ektUdGNibHgwWEhSMGFHbHpMblpoYkhCb1lTQTlJSFI1Y0dWdlppQnZZbXBiWTJoaGJtNWxiSE5kSUQwOVBTQW5iblZ0WW1WeUp5QS9JRzlpYWx0amFHRnVibVZzYzEwZ09pQXhPMXh1WEhSOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdWRXMWlaWEluS1NCN1hHNWNkRngwTHk4Z2RHaHBjeUJwY3lCaGJIZGhlWE1nVWtkQ0lDMGdZMkZ1SUdKbElHTnZiblpsY25SbFpDQnNZWFJsY2lCdmJpNWNibHgwWEhSdlltb2dKajBnTUhoR1JrWkdSa1k3WEc1Y2RGeDBkR2hwY3k1dGIyUmxiQ0E5SUNkeVoySW5PMXh1WEhSY2RIUm9hWE11WTI5c2IzSWdQU0JiWEc1Y2RGeDBYSFFvYjJKcUlENCtJREUyS1NBbUlEQjRSa1lzWEc1Y2RGeDBYSFFvYjJKcUlENCtJRGdwSUNZZ01IaEdSaXhjYmx4MFhIUmNkRzlpYWlBbUlEQjRSa1pjYmx4MFhIUmRPMXh1WEhSY2RIUm9hWE11ZG1Gc2NHaGhJRDBnTVR0Y2JseDBmU0JsYkhObElIdGNibHgwWEhSMGFHbHpMblpoYkhCb1lTQTlJREU3WEc1Y2JseDBYSFIyWVhJZ2EyVjVjeUE5SUU5aWFtVmpkQzVyWlhsektHOWlhaWs3WEc1Y2RGeDBhV1lnS0NkaGJIQm9ZU2NnYVc0Z2IySnFLU0I3WEc1Y2RGeDBYSFJyWlhsekxuTndiR2xqWlNoclpYbHpMbWx1WkdWNFQyWW9KMkZzY0doaEp5a3NJREVwTzF4dVhIUmNkRngwZEdocGN5NTJZV3h3YUdFZ1BTQjBlWEJsYjJZZ2IySnFMbUZzY0doaElEMDlQU0FuYm5WdFltVnlKeUEvSUc5aWFpNWhiSEJvWVNBNklEQTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGRtRnlJR2hoYzJobFpFdGxlWE1nUFNCclpYbHpMbk52Y25Rb0tTNXFiMmx1S0NjbktUdGNibHgwWEhScFppQW9JU2hvWVhOb1pXUkxaWGx6SUdsdUlHaGhjMmhsWkUxdlpHVnNTMlY1Y3lrcElIdGNibHgwWEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblZXNWhZbXhsSUhSdklIQmhjbk5sSUdOdmJHOXlJR1p5YjIwZ2IySnFaV04wT2lBbklDc2dTbE5QVGk1emRISnBibWRwWm5rb2IySnFLU2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBkR2hwY3k1dGIyUmxiQ0E5SUdoaGMyaGxaRTF2WkdWc1MyVjVjMXRvWVhOb1pXUkxaWGx6WFR0Y2JseHVYSFJjZEhaaGNpQnNZV0psYkhNZ1BTQmpiMjUyWlhKMFczUm9hWE11Ylc5a1pXeGRMbXhoWW1Wc2N6dGNibHgwWEhSMllYSWdZMjlzYjNJZ1BTQmJYVHRjYmx4MFhIUm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2JHRmlaV3h6TG14bGJtZDBhRHNnYVNzcktTQjdYRzVjZEZ4MFhIUmpiMnh2Y2k1d2RYTm9LRzlpYWx0c1lXSmxiSE5iYVYxZEtUdGNibHgwWEhSOVhHNWNibHgwWEhSMGFHbHpMbU52Ykc5eUlEMGdlbVZ5YjBGeWNtRjVLR052Ykc5eUtUdGNibHgwZlZ4dVhHNWNkQzh2SUhCbGNtWnZjbTBnYkdsdGFYUmhkR2x2Ym5NZ0tHTnNZVzF3YVc1bkxDQmxkR011S1Z4dVhIUnBaaUFvYkdsdGFYUmxjbk5iZEdocGN5NXRiMlJsYkYwcElIdGNibHgwWEhSamFHRnVibVZzY3lBOUlHTnZiblpsY25SYmRHaHBjeTV0YjJSbGJGMHVZMmhoYm01bGJITTdYRzVjZEZ4MFptOXlJQ2hwSUQwZ01Ec2dhU0E4SUdOb1lXNXVaV3h6T3lCcEt5c3BJSHRjYmx4MFhIUmNkSFpoY2lCc2FXMXBkQ0E5SUd4cGJXbDBaWEp6VzNSb2FYTXViVzlrWld4ZFcybGRPMXh1WEhSY2RGeDBhV1lnS0d4cGJXbDBLU0I3WEc1Y2RGeDBYSFJjZEhSb2FYTXVZMjlzYjNKYmFWMGdQU0JzYVcxcGRDaDBhR2x6TG1OdmJHOXlXMmxkS1R0Y2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMWNibHh1WEhSMGFHbHpMblpoYkhCb1lTQTlJRTFoZEdndWJXRjRLREFzSUUxaGRHZ3ViV2x1S0RFc0lIUm9hWE11ZG1Gc2NHaGhLU2s3WEc1Y2JseDBhV1lnS0U5aWFtVmpkQzVtY21WbGVtVXBJSHRjYmx4MFhIUlBZbXBsWTNRdVpuSmxaWHBsS0hSb2FYTXBPMXh1WEhSOVhHNTlYRzVjYmtOdmJHOXlMbkJ5YjNSdmRIbHdaU0E5SUh0Y2JseDBkRzlUZEhKcGJtYzZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFJ5WlhSMWNtNGdkR2hwY3k1emRISnBibWNvS1R0Y2JseDBmU3hjYmx4dVhIUjBiMHBUVDA0NklHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUnlaWFIxY200Z2RHaHBjMXQwYUdsekxtMXZaR1ZzWFNncE8xeHVYSFI5TEZ4dVhHNWNkSE4wY21sdVp6b2dablZ1WTNScGIyNGdLSEJzWVdObGN5a2dlMXh1WEhSY2RIWmhjaUJ6Wld4bUlEMGdkR2hwY3k1dGIyUmxiQ0JwYmlCamIyeHZjbE4wY21sdVp5NTBieUEvSUhSb2FYTWdPaUIwYUdsekxuSm5ZaWdwTzF4dVhIUmNkSE5sYkdZZ1BTQnpaV3htTG5KdmRXNWtLSFI1Y0dWdlppQndiR0ZqWlhNZ1BUMDlJQ2R1ZFcxaVpYSW5JRDhnY0d4aFkyVnpJRG9nTVNrN1hHNWNkRngwZG1GeUlHRnlaM01nUFNCelpXeG1MblpoYkhCb1lTQTlQVDBnTVNBL0lITmxiR1l1WTI5c2IzSWdPaUJ6Wld4bUxtTnZiRzl5TG1OdmJtTmhkQ2gwYUdsekxuWmhiSEJvWVNrN1hHNWNkRngwY21WMGRYSnVJR052Ykc5eVUzUnlhVzVuTG5SdlczTmxiR1l1Ylc5a1pXeGRLR0Z5WjNNcE8xeHVYSFI5TEZ4dVhHNWNkSEJsY21ObGJuUlRkSEpwYm1jNklHWjFibU4wYVc5dUlDaHdiR0ZqWlhNcElIdGNibHgwWEhSMllYSWdjMlZzWmlBOUlIUm9hWE11Y21kaUtDa3VjbTkxYm1Rb2RIbHdaVzltSUhCc1lXTmxjeUE5UFQwZ0oyNTFiV0psY2ljZ1B5QndiR0ZqWlhNZ09pQXhLVHRjYmx4MFhIUjJZWElnWVhKbmN5QTlJSE5sYkdZdWRtRnNjR2hoSUQwOVBTQXhJRDhnYzJWc1ppNWpiMnh2Y2lBNklITmxiR1l1WTI5c2IzSXVZMjl1WTJGMEtIUm9hWE11ZG1Gc2NHaGhLVHRjYmx4MFhIUnlaWFIxY200Z1kyOXNiM0pUZEhKcGJtY3VkRzh1Y21kaUxuQmxjbU5sYm5Rb1lYSm5jeWs3WEc1Y2RIMHNYRzVjYmx4MFlYSnlZWGs2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhSeVpYUjFjbTRnZEdocGN5NTJZV3h3YUdFZ1BUMDlJREVnUHlCMGFHbHpMbU52Ykc5eUxuTnNhV05sS0NrZ09pQjBhR2x6TG1OdmJHOXlMbU52Ym1OaGRDaDBhR2x6TG5aaGJIQm9ZU2s3WEc1Y2RIMHNYRzVjYmx4MGIySnFaV04wT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MGRtRnlJSEpsYzNWc2RDQTlJSHQ5TzF4dVhIUmNkSFpoY2lCamFHRnVibVZzY3lBOUlHTnZiblpsY25SYmRHaHBjeTV0YjJSbGJGMHVZMmhoYm01bGJITTdYRzVjZEZ4MGRtRnlJR3hoWW1Wc2N5QTlJR052Ym5abGNuUmJkR2hwY3k1dGIyUmxiRjB1YkdGaVpXeHpPMXh1WEc1Y2RGeDBabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JqYUdGdWJtVnNjenNnYVNzcktTQjdYRzVjZEZ4MFhIUnlaWE4xYkhSYmJHRmlaV3h6VzJsZFhTQTlJSFJvYVhNdVkyOXNiM0piYVYwN1hHNWNkRngwZlZ4dVhHNWNkRngwYVdZZ0tIUm9hWE11ZG1Gc2NHaGhJQ0U5UFNBeEtTQjdYRzVjZEZ4MFhIUnlaWE4xYkhRdVlXeHdhR0VnUFNCMGFHbHpMblpoYkhCb1lUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnY21WemRXeDBPMXh1WEhSOUxGeHVYRzVjZEhWdWFYUkJjbkpoZVRvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RIWmhjaUJ5WjJJZ1BTQjBhR2x6TG5KbllpZ3BMbU52Ykc5eU8xeHVYSFJjZEhKbllsc3dYU0F2UFNBeU5UVTdYRzVjZEZ4MGNtZGlXekZkSUM4OUlESTFOVHRjYmx4MFhIUnlaMkpiTWwwZ0x6MGdNalUxTzF4dVhHNWNkRngwYVdZZ0tIUm9hWE11ZG1Gc2NHaGhJQ0U5UFNBeEtTQjdYRzVjZEZ4MFhIUnlaMkl1Y0hWemFDaDBhR2x6TG5aaGJIQm9ZU2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlISm5ZanRjYmx4MGZTeGNibHh1WEhSMWJtbDBUMkpxWldOME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBkbUZ5SUhKbllpQTlJSFJvYVhNdWNtZGlLQ2t1YjJKcVpXTjBLQ2s3WEc1Y2RGeDBjbWRpTG5JZ0x6MGdNalUxTzF4dVhIUmNkSEpuWWk1bklDODlJREkxTlR0Y2JseDBYSFJ5WjJJdVlpQXZQU0F5TlRVN1hHNWNibHgwWEhScFppQW9kR2hwY3k1MllXeHdhR0VnSVQwOUlERXBJSHRjYmx4MFhIUmNkSEpuWWk1aGJIQm9ZU0E5SUhSb2FYTXVkbUZzY0doaE8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbGRIVnliaUJ5WjJJN1hHNWNkSDBzWEc1Y2JseDBjbTkxYm1RNklHWjFibU4wYVc5dUlDaHdiR0ZqWlhNcElIdGNibHgwWEhSd2JHRmpaWE1nUFNCTllYUm9MbTFoZUNod2JHRmpaWE1nZkh3Z01Dd2dNQ2s3WEc1Y2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaDBhR2x6TG1OdmJHOXlMbTFoY0NoeWIzVnVaRlJ2VUd4aFkyVW9jR3hoWTJWektTa3VZMjl1WTJGMEtIUm9hWE11ZG1Gc2NHaGhLU3dnZEdocGN5NXRiMlJsYkNrN1hHNWNkSDBzWEc1Y2JseDBZV3h3YUdFNklHWjFibU4wYVc5dUlDaDJZV3dwSUh0Y2JseDBYSFJwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUc1bGR5QkRiMnh2Y2loMGFHbHpMbU52Ykc5eUxtTnZibU5oZENoTllYUm9MbTFoZUNnd0xDQk5ZWFJvTG0xcGJpZ3hMQ0IyWVd3cEtTa3NJSFJvYVhNdWJXOWtaV3dwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQjBhR2x6TG5aaGJIQm9ZVHRjYmx4MGZTeGNibHh1WEhRdkx5QnlaMkpjYmx4MGNtVmtPaUJuWlhSelpYUW9KM0puWWljc0lEQXNJRzFoZUdadUtESTFOU2twTEZ4dVhIUm5jbVZsYmpvZ1oyVjBjMlYwS0NkeVoySW5MQ0F4TENCdFlYaG1iaWd5TlRVcEtTeGNibHgwWW14MVpUb2daMlYwYzJWMEtDZHlaMkluTENBeUxDQnRZWGhtYmlneU5UVXBLU3hjYmx4dVhIUm9kV1U2SUdkbGRITmxkQ2hiSjJoemJDY3NJQ2RvYzNZbkxDQW5hSE5zSnl3Z0oyaDNZaWNzSUNkb1kyY25YU3dnTUN3Z1puVnVZM1JwYjI0Z0tIWmhiQ2tnZXlCeVpYUjFjbTRnS0NoMllXd2dKU0F6TmpBcElDc2dNell3S1NBbElETTJNRHNnZlNrc0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXeHBibVVnWW5KaFkyVXRjM1I1YkdWY2JseHVYSFJ6WVhSMWNtRjBhVzl1YkRvZ1oyVjBjMlYwS0Nkb2Myd25MQ0F4TENCdFlYaG1iaWd4TURBcEtTeGNibHgwYkdsbmFIUnVaWE56T2lCblpYUnpaWFFvSjJoemJDY3NJRElzSUcxaGVHWnVLREV3TUNrcExGeHVYRzVjZEhOaGRIVnlZWFJwYjI1Mk9pQm5aWFJ6WlhRb0oyaHpkaWNzSURFc0lHMWhlR1p1S0RFd01Da3BMRnh1WEhSMllXeDFaVG9nWjJWMGMyVjBLQ2RvYzNZbkxDQXlMQ0J0WVhobWJpZ3hNREFwS1N4Y2JseHVYSFJqYUhKdmJXRTZJR2RsZEhObGRDZ25hR05uSnl3Z01Td2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RHZHlZWGs2SUdkbGRITmxkQ2duYUdObkp5d2dNaXdnYldGNFptNG9NVEF3S1Nrc1hHNWNibHgwZDJocGRHVTZJR2RsZEhObGRDZ25hSGRpSnl3Z01Td2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RIZGliR0ZqYXpvZ1oyVjBjMlYwS0Nkb2QySW5MQ0F5TENCdFlYaG1iaWd4TURBcEtTeGNibHh1WEhSamVXRnVPaUJuWlhSelpYUW9KMk50ZVdzbkxDQXdMQ0J0WVhobWJpZ3hNREFwS1N4Y2JseDBiV0ZuWlc1MFlUb2daMlYwYzJWMEtDZGpiWGxySnl3Z01Td2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RIbGxiR3h2ZHpvZ1oyVjBjMlYwS0NkamJYbHJKeXdnTWl3Z2JXRjRabTRvTVRBd0tTa3NYRzVjZEdKc1lXTnJPaUJuWlhSelpYUW9KMk50ZVdzbkxDQXpMQ0J0WVhobWJpZ3hNREFwS1N4Y2JseHVYSFI0T2lCblpYUnpaWFFvSjNoNWVpY3NJREFzSUcxaGVHWnVLREV3TUNrcExGeHVYSFI1T2lCblpYUnpaWFFvSjNoNWVpY3NJREVzSUcxaGVHWnVLREV3TUNrcExGeHVYSFI2T2lCblpYUnpaWFFvSjNoNWVpY3NJRElzSUcxaGVHWnVLREV3TUNrcExGeHVYRzVjZEd3NklHZGxkSE5sZENnbmJHRmlKeXdnTUN3Z2JXRjRabTRvTVRBd0tTa3NYRzVjZEdFNklHZGxkSE5sZENnbmJHRmlKeXdnTVNrc1hHNWNkR0k2SUdkbGRITmxkQ2duYkdGaUp5d2dNaWtzWEc1Y2JseDBhMlY1ZDI5eVpEb2dablZ1WTNScGIyNGdLSFpoYkNrZ2UxeHVYSFJjZEdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2JtVjNJRU52Ykc5eUtIWmhiQ2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlHTnZiblpsY25SYmRHaHBjeTV0YjJSbGJGMHVhMlY1ZDI5eVpDaDBhR2x6TG1OdmJHOXlLVHRjYmx4MGZTeGNibHh1WEhSb1pYZzZJR1oxYm1OMGFXOXVJQ2gyWVd3cElIdGNibHgwWEhScFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaDJZV3dwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQmpiMnh2Y2xOMGNtbHVaeTUwYnk1b1pYZ29kR2hwY3k1eVoySW9LUzV5YjNWdVpDZ3BMbU52Ykc5eUtUdGNibHgwZlN4Y2JseHVYSFJ5WjJKT2RXMWlaWEk2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhSMllYSWdjbWRpSUQwZ2RHaHBjeTV5WjJJb0tTNWpiMnh2Y2p0Y2JseDBYSFJ5WlhSMWNtNGdLQ2h5WjJKYk1GMGdKaUF3ZUVaR0tTQThQQ0F4TmlrZ2ZDQW9LSEpuWWxzeFhTQW1JREI0UmtZcElEdzhJRGdwSUh3Z0tISm5ZbHN5WFNBbUlEQjRSa1lwTzF4dVhIUjlMRnh1WEc1Y2RHeDFiV2x1YjNOcGRIazZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFF2THlCb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5VVVpOVhRMEZITWpBdkkzSmxiR0YwYVhabGJIVnRhVzVoYm1ObFpHVm1YRzVjZEZ4MGRtRnlJSEpuWWlBOUlIUm9hWE11Y21kaUtDa3VZMjlzYjNJN1hHNWNibHgwWEhSMllYSWdiSFZ0SUQwZ1cxMDdYRzVjZEZ4MFptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnlaMkl1YkdWdVozUm9PeUJwS3lzcElIdGNibHgwWEhSY2RIWmhjaUJqYUdGdUlEMGdjbWRpVzJsZElDOGdNalUxTzF4dVhIUmNkRngwYkhWdFcybGRJRDBnS0dOb1lXNGdQRDBnTUM0d016a3lPQ2tnUHlCamFHRnVJQzhnTVRJdU9USWdPaUJOWVhSb0xuQnZkeWdvS0dOb1lXNGdLeUF3TGpBMU5Ta2dMeUF4TGpBMU5Ta3NJREl1TkNrN1hHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJREF1TWpFeU5pQXFJR3gxYlZzd1hTQXJJREF1TnpFMU1pQXFJR3gxYlZzeFhTQXJJREF1TURjeU1pQXFJR3gxYlZzeVhUdGNibHgwZlN4Y2JseHVYSFJqYjI1MGNtRnpkRG9nWm5WdVkzUnBiMjRnS0dOdmJHOXlNaWtnZTF4dVhIUmNkQzh2SUdoMGRIQTZMeTkzZDNjdWR6TXViM0puTDFSU0wxZERRVWN5TUM4alkyOXVkSEpoYzNRdGNtRjBhVzlrWldaY2JseDBYSFIyWVhJZ2JIVnRNU0E5SUhSb2FYTXViSFZ0YVc1dmMybDBlU2dwTzF4dVhIUmNkSFpoY2lCc2RXMHlJRDBnWTI5c2IzSXlMbXgxYldsdWIzTnBkSGtvS1R0Y2JseHVYSFJjZEdsbUlDaHNkVzB4SUQ0Z2JIVnRNaWtnZTF4dVhIUmNkRngwY21WMGRYSnVJQ2hzZFcweElDc2dNQzR3TlNrZ0x5QW9iSFZ0TWlBcklEQXVNRFVwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQW9iSFZ0TWlBcklEQXVNRFVwSUM4Z0tHeDFiVEVnS3lBd0xqQTFLVHRjYmx4MGZTeGNibHh1WEhSc1pYWmxiRG9nWm5WdVkzUnBiMjRnS0dOdmJHOXlNaWtnZTF4dVhIUmNkSFpoY2lCamIyNTBjbUZ6ZEZKaGRHbHZJRDBnZEdocGN5NWpiMjUwY21GemRDaGpiMnh2Y2pJcE8xeHVYSFJjZEdsbUlDaGpiMjUwY21GemRGSmhkR2x2SUQ0OUlEY3VNU2tnZTF4dVhIUmNkRngwY21WMGRYSnVJQ2RCUVVFbk8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbGRIVnliaUFvWTI5dWRISmhjM1JTWVhScGJ5QStQU0EwTGpVcElEOGdKMEZCSnlBNklDY25PMXh1WEhSOUxGeHVYRzVjZEdselJHRnlhem9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJjZEM4dklGbEpVU0JsY1hWaGRHbHZiaUJtY205dElHaDBkSEE2THk4eU5IZGhlWE11YjNKbkx6SXdNVEF2WTJGc1kzVnNZWFJwYm1jdFkyOXNiM0l0WTI5dWRISmhjM1JjYmx4MFhIUjJZWElnY21kaUlEMGdkR2hwY3k1eVoySW9LUzVqYjJ4dmNqdGNibHgwWEhSMllYSWdlV2x4SUQwZ0tISm5ZbHN3WFNBcUlESTVPU0FySUhKbllsc3hYU0FxSURVNE55QXJJSEpuWWxzeVhTQXFJREV4TkNrZ0x5QXhNREF3TzF4dVhIUmNkSEpsZEhWeWJpQjVhWEVnUENBeE1qZzdYRzVjZEgwc1hHNWNibHgwYVhOTWFXZG9kRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJjZEhKbGRIVnliaUFoZEdocGN5NXBjMFJoY21zb0tUdGNibHgwZlN4Y2JseHVYSFJ1WldkaGRHVTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFIyWVhJZ2NtZGlJRDBnZEdocGN5NXlaMklvS1R0Y2JseDBYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SURNN0lHa3JLeWtnZTF4dVhIUmNkRngwY21kaUxtTnZiRzl5VzJsZElEMGdNalUxSUMwZ2NtZGlMbU52Ykc5eVcybGRPMXh1WEhSY2RIMWNibHgwWEhSeVpYUjFjbTRnY21kaU8xeHVYSFI5TEZ4dVhHNWNkR3hwWjJoMFpXNDZJR1oxYm1OMGFXOXVJQ2h5WVhScGJ5a2dlMXh1WEhSY2RIWmhjaUJvYzJ3Z1BTQjBhR2x6TG1oemJDZ3BPMXh1WEhSY2RHaHpiQzVqYjJ4dmNsc3lYU0FyUFNCb2Myd3VZMjlzYjNKYk1sMGdLaUJ5WVhScGJ6dGNibHgwWEhSeVpYUjFjbTRnYUhOc08xeHVYSFI5TEZ4dVhHNWNkR1JoY210bGJqb2dablZ1WTNScGIyNGdLSEpoZEdsdktTQjdYRzVjZEZ4MGRtRnlJR2h6YkNBOUlIUm9hWE11YUhOc0tDazdYRzVjZEZ4MGFITnNMbU52Ykc5eVd6SmRJQzA5SUdoemJDNWpiMnh2Y2xzeVhTQXFJSEpoZEdsdk8xeHVYSFJjZEhKbGRIVnliaUJvYzJ3N1hHNWNkSDBzWEc1Y2JseDBjMkYwZFhKaGRHVTZJR1oxYm1OMGFXOXVJQ2h5WVhScGJ5a2dlMXh1WEhSY2RIWmhjaUJvYzJ3Z1BTQjBhR2x6TG1oemJDZ3BPMXh1WEhSY2RHaHpiQzVqYjJ4dmNsc3hYU0FyUFNCb2Myd3VZMjlzYjNKYk1WMGdLaUJ5WVhScGJ6dGNibHgwWEhSeVpYUjFjbTRnYUhOc08xeHVYSFI5TEZ4dVhHNWNkR1JsYzJGMGRYSmhkR1U2SUdaMWJtTjBhVzl1SUNoeVlYUnBieWtnZTF4dVhIUmNkSFpoY2lCb2Myd2dQU0IwYUdsekxtaHpiQ2dwTzF4dVhIUmNkR2h6YkM1amIyeHZjbHN4WFNBdFBTQm9jMnd1WTI5c2IzSmJNVjBnS2lCeVlYUnBienRjYmx4MFhIUnlaWFIxY200Z2FITnNPMXh1WEhSOUxGeHVYRzVjZEhkb2FYUmxiam9nWm5WdVkzUnBiMjRnS0hKaGRHbHZLU0I3WEc1Y2RGeDBkbUZ5SUdoM1lpQTlJSFJvYVhNdWFIZGlLQ2s3WEc1Y2RGeDBhSGRpTG1OdmJHOXlXekZkSUNzOUlHaDNZaTVqYjJ4dmNsc3hYU0FxSUhKaGRHbHZPMXh1WEhSY2RISmxkSFZ5YmlCb2QySTdYRzVjZEgwc1hHNWNibHgwWW14aFkydGxiam9nWm5WdVkzUnBiMjRnS0hKaGRHbHZLU0I3WEc1Y2RGeDBkbUZ5SUdoM1lpQTlJSFJvYVhNdWFIZGlLQ2s3WEc1Y2RGeDBhSGRpTG1OdmJHOXlXekpkSUNzOUlHaDNZaTVqYjJ4dmNsc3lYU0FxSUhKaGRHbHZPMXh1WEhSY2RISmxkSFZ5YmlCb2QySTdYRzVjZEgwc1hHNWNibHgwWjNKaGVYTmpZV3hsT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MEx5OGdhSFIwY0RvdkwyVnVMbmRwYTJsd1pXUnBZUzV2Y21jdmQybHJhUzlIY21GNWMyTmhiR1VqUTI5dWRtVnlkR2x1WjE5amIyeHZjbDkwYjE5bmNtRjVjMk5oYkdWY2JseDBYSFIyWVhJZ2NtZGlJRDBnZEdocGN5NXlaMklvS1M1amIyeHZjanRjYmx4MFhIUjJZWElnZG1Gc0lEMGdjbWRpV3pCZElDb2dNQzR6SUNzZ2NtZGlXekZkSUNvZ01DNDFPU0FySUhKbllsc3lYU0FxSURBdU1URTdYRzVjZEZ4MGNtVjBkWEp1SUVOdmJHOXlMbkpuWWloMllXd3NJSFpoYkN3Z2RtRnNLVHRjYmx4MGZTeGNibHh1WEhSbVlXUmxPaUJtZFc1amRHbHZiaUFvY21GMGFXOHBJSHRjYmx4MFhIUnlaWFIxY200Z2RHaHBjeTVoYkhCb1lTaDBhR2x6TG5aaGJIQm9ZU0F0SUNoMGFHbHpMblpoYkhCb1lTQXFJSEpoZEdsdktTazdYRzVjZEgwc1hHNWNibHgwYjNCaGNYVmxjam9nWm5WdVkzUnBiMjRnS0hKaGRHbHZLU0I3WEc1Y2RGeDBjbVYwZFhKdUlIUm9hWE11WVd4d2FHRW9kR2hwY3k1MllXeHdhR0VnS3lBb2RHaHBjeTUyWVd4d2FHRWdLaUJ5WVhScGJ5a3BPMXh1WEhSOUxGeHVYRzVjZEhKdmRHRjBaVG9nWm5WdVkzUnBiMjRnS0dSbFozSmxaWE1wSUh0Y2JseDBYSFIyWVhJZ2FITnNJRDBnZEdocGN5NW9jMndvS1R0Y2JseDBYSFIyWVhJZ2FIVmxJRDBnYUhOc0xtTnZiRzl5V3pCZE8xeHVYSFJjZEdoMVpTQTlJQ2hvZFdVZ0t5QmtaV2R5WldWektTQWxJRE0yTUR0Y2JseDBYSFJvZFdVZ1BTQm9kV1VnUENBd0lEOGdNell3SUNzZ2FIVmxJRG9nYUhWbE8xeHVYSFJjZEdoemJDNWpiMnh2Y2xzd1hTQTlJR2gxWlR0Y2JseDBYSFJ5WlhSMWNtNGdhSE5zTzF4dVhIUjlMRnh1WEc1Y2RHMXBlRG9nWm5WdVkzUnBiMjRnS0cxcGVHbHVRMjlzYjNJc0lIZGxhV2RvZENrZ2UxeHVYSFJjZEM4dklIQnZjblJsWkNCbWNtOXRJSE5oYzNNZ2FXMXdiR1Z0Wlc1MFlYUnBiMjRnYVc0Z1ExeHVYSFJjZEM4dklHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXpZWE56TDJ4cFluTmhjM012WW14dllpOHdaVFppTkdFeU9EVXdNRGt5TXpVMllXRXpaV05sTURkak5tSXlORGxtTURJeU1XTmhZMlZrTDJaMWJtTjBhVzl1Y3k1amNIQWpUREl3T1Z4dVhIUmNkSFpoY2lCamIyeHZjakVnUFNCdGFYaHBia052Ykc5eUxuSm5ZaWdwTzF4dVhIUmNkSFpoY2lCamIyeHZjaklnUFNCMGFHbHpMbkpuWWlncE8xeHVYSFJjZEhaaGNpQndJRDBnZDJWcFoyaDBJRDA5UFNCMWJtUmxabWx1WldRZ1B5QXdMalVnT2lCM1pXbG5hSFE3WEc1Y2JseDBYSFIyWVhJZ2R5QTlJRElnS2lCd0lDMGdNVHRjYmx4MFhIUjJZWElnWVNBOUlHTnZiRzl5TVM1aGJIQm9ZU2dwSUMwZ1kyOXNiM0l5TG1Gc2NHaGhLQ2s3WEc1Y2JseDBYSFIyWVhJZ2R6RWdQU0FvS0NoM0lDb2dZU0E5UFQwZ0xURXBJRDhnZHlBNklDaDNJQ3NnWVNrZ0x5QW9NU0FySUhjZ0tpQmhLU2tnS3lBeEtTQXZJREl1TUR0Y2JseDBYSFIyWVhJZ2R6SWdQU0F4SUMwZ2R6RTdYRzVjYmx4MFhIUnlaWFIxY200Z1EyOXNiM0l1Y21kaUtGeHVYSFJjZEZ4MFhIUjNNU0FxSUdOdmJHOXlNUzV5WldRb0tTQXJJSGN5SUNvZ1kyOXNiM0l5TG5KbFpDZ3BMRnh1WEhSY2RGeDBYSFIzTVNBcUlHTnZiRzl5TVM1bmNtVmxiaWdwSUNzZ2R6SWdLaUJqYjJ4dmNqSXVaM0psWlc0b0tTeGNibHgwWEhSY2RGeDBkekVnS2lCamIyeHZjakV1WW14MVpTZ3BJQ3NnZHpJZ0tpQmpiMnh2Y2pJdVlteDFaU2dwTEZ4dVhIUmNkRngwWEhSamIyeHZjakV1WVd4d2FHRW9LU0FxSUhBZ0t5QmpiMnh2Y2pJdVlXeHdhR0VvS1NBcUlDZ3hJQzBnY0NrcE8xeHVYSFI5WEc1OU8xeHVYRzR2THlCdGIyUmxiQ0JqYjI1MlpYSnphVzl1SUcxbGRHaHZaSE1nWVc1a0lITjBZWFJwWXlCamIyNXpkSEoxWTNSdmNuTmNiazlpYW1WamRDNXJaWGx6S0dOdmJuWmxjblFwTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0cxdlpHVnNLU0I3WEc1Y2RHbG1JQ2h6YTJsd2NHVmtUVzlrWld4ekxtbHVaR1Y0VDJZb2JXOWtaV3dwSUNFOVBTQXRNU2tnZTF4dVhIUmNkSEpsZEhWeWJqdGNibHgwZlZ4dVhHNWNkSFpoY2lCamFHRnVibVZzY3lBOUlHTnZiblpsY25SYmJXOWtaV3hkTG1Ob1lXNXVaV3h6TzF4dVhHNWNkQzh2SUdOdmJuWmxjbk5wYjI0Z2JXVjBhRzlrYzF4dVhIUkRiMnh2Y2k1d2NtOTBiM1I1Y0dWYmJXOWtaV3hkSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RHbG1JQ2gwYUdsekxtMXZaR1ZzSUQwOVBTQnRiMlJsYkNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUc1bGR5QkRiMnh2Y2loMGFHbHpLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJRzVsZHlCRGIyeHZjaWhoY21kMWJXVnVkSE1zSUcxdlpHVnNLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUjJZWElnYm1WM1FXeHdhR0VnUFNCMGVYQmxiMllnWVhKbmRXMWxiblJ6VzJOb1lXNXVaV3h6WFNBOVBUMGdKMjUxYldKbGNpY2dQeUJqYUdGdWJtVnNjeUE2SUhSb2FYTXVkbUZzY0doaE8xeHVYSFJjZEhKbGRIVnliaUJ1WlhjZ1EyOXNiM0lvWVhOelpYSjBRWEp5WVhrb1kyOXVkbVZ5ZEZ0MGFHbHpMbTF2WkdWc1hWdHRiMlJsYkYwdWNtRjNLSFJvYVhNdVkyOXNiM0lwS1M1amIyNWpZWFFvYm1WM1FXeHdhR0VwTENCdGIyUmxiQ2s3WEc1Y2RIMDdYRzVjYmx4MEx5OGdKM04wWVhScFl5Y2dZMjl1YzNSeWRXTjBhVzl1SUcxbGRHaHZaSE5jYmx4MFEyOXNiM0piYlc5a1pXeGRJRDBnWm5WdVkzUnBiMjRnS0dOdmJHOXlLU0I3WEc1Y2RGeDBhV1lnS0hSNWNHVnZaaUJqYjJ4dmNpQTlQVDBnSjI1MWJXSmxjaWNwSUh0Y2JseDBYSFJjZEdOdmJHOXlJRDBnZW1WeWIwRnljbUY1S0Y5emJHbGpaUzVqWVd4c0tHRnlaM1Z0Wlc1MGN5a3NJR05vWVc1dVpXeHpLVHRjYmx4MFhIUjlYRzVjZEZ4MGNtVjBkWEp1SUc1bGR5QkRiMnh2Y2loamIyeHZjaXdnYlc5a1pXd3BPMXh1WEhSOU8xeHVmU2s3WEc1Y2JtWjFibU4wYVc5dUlISnZkVzVrVkc4b2JuVnRMQ0J3YkdGalpYTXBJSHRjYmx4MGNtVjBkWEp1SUU1MWJXSmxjaWh1ZFcwdWRHOUdhWGhsWkNod2JHRmpaWE1wS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnY205MWJtUlViMUJzWVdObEtIQnNZV05sY3lrZ2UxeHVYSFJ5WlhSMWNtNGdablZ1WTNScGIyNGdLRzUxYlNrZ2UxeHVYSFJjZEhKbGRIVnliaUJ5YjNWdVpGUnZLRzUxYlN3Z2NHeGhZMlZ6S1R0Y2JseDBmVHRjYm4xY2JseHVablZ1WTNScGIyNGdaMlYwYzJWMEtHMXZaR1ZzTENCamFHRnVibVZzTENCdGIyUnBabWxsY2lrZ2UxeHVYSFJ0YjJSbGJDQTlJRUZ5Y21GNUxtbHpRWEp5WVhrb2JXOWtaV3dwSUQ4Z2JXOWtaV3dnT2lCYmJXOWtaV3hkTzF4dVhHNWNkRzF2WkdWc0xtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHMHBJSHRjYmx4MFhIUW9iR2x0YVhSbGNuTmJiVjBnZkh3Z0tHeHBiV2wwWlhKelcyMWRJRDBnVzEwcEtWdGphR0Z1Ym1Wc1hTQTlJRzF2WkdsbWFXVnlPMXh1WEhSOUtUdGNibHh1WEhSdGIyUmxiQ0E5SUcxdlpHVnNXekJkTzF4dVhHNWNkSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9kbUZzS1NCN1hHNWNkRngwZG1GeUlISmxjM1ZzZER0Y2JseHVYSFJjZEdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0tTQjdYRzVjZEZ4MFhIUnBaaUFvYlc5a2FXWnBaWElwSUh0Y2JseDBYSFJjZEZ4MGRtRnNJRDBnYlc5a2FXWnBaWElvZG1Gc0tUdGNibHgwWEhSY2RIMWNibHh1WEhSY2RGeDBjbVZ6ZFd4MElEMGdkR2hwYzF0dGIyUmxiRjBvS1R0Y2JseDBYSFJjZEhKbGMzVnNkQzVqYjJ4dmNsdGphR0Z1Ym1Wc1hTQTlJSFpoYkR0Y2JseDBYSFJjZEhKbGRIVnliaUJ5WlhOMWJIUTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVnpkV3gwSUQwZ2RHaHBjMXR0YjJSbGJGMG9LUzVqYjJ4dmNsdGphR0Z1Ym1Wc1hUdGNibHgwWEhScFppQW9iVzlrYVdacFpYSXBJSHRjYmx4MFhIUmNkSEpsYzNWc2RDQTlJRzF2WkdsbWFXVnlLSEpsYzNWc2RDazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUhKbGMzVnNkRHRjYmx4MGZUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2JXRjRabTRvYldGNEtTQjdYRzVjZEhKbGRIVnliaUJtZFc1amRHbHZiaUFvZGlrZ2UxeHVYSFJjZEhKbGRIVnliaUJOWVhSb0xtMWhlQ2d3TENCTllYUm9MbTFwYmlodFlYZ3NJSFlwS1R0Y2JseDBmVHRjYm4xY2JseHVablZ1WTNScGIyNGdZWE56WlhKMFFYSnlZWGtvZG1Gc0tTQjdYRzVjZEhKbGRIVnliaUJCY25KaGVTNXBjMEZ5Y21GNUtIWmhiQ2tnUHlCMllXd2dPaUJiZG1Gc1hUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2VtVnliMEZ5Y21GNUtHRnljaXdnYkdWdVozUm9LU0I3WEc1Y2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diR1Z1WjNSb095QnBLeXNwSUh0Y2JseDBYSFJwWmlBb2RIbHdaVzltSUdGeWNsdHBYU0FoUFQwZ0oyNTFiV0psY2ljcElIdGNibHgwWEhSY2RHRnljbHRwWFNBOUlEQTdYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlHRnljanRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkRiMnh2Y2p0Y2JpSXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdhWE5CY25KaGVXbHphQ2h2WW1vcElIdGNibHgwYVdZZ0tDRnZZbW9nZkh3Z2RIbHdaVzltSUc5aWFpQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JseDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNWNkSDFjYmx4dVhIUnlaWFIxY200Z2IySnFJR2x1YzNSaGJtTmxiMllnUVhKeVlYa2dmSHdnUVhKeVlYa3VhWE5CY25KaGVTaHZZbW9wSUh4OFhHNWNkRngwS0c5aWFpNXNaVzVuZEdnZ1BqMGdNQ0FtSmlBb2IySnFMbk53YkdsalpTQnBibk4wWVc1alpXOW1JRVoxYm1OMGFXOXVJSHg4WEc1Y2RGeDBYSFFvVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVJHVnpZM0pwY0hSdmNpaHZZbW9zSUNodlltb3ViR1Z1WjNSb0lDMGdNU2twSUNZbUlHOWlhaTVqYjI1emRISjFZM1J2Y2k1dVlXMWxJQ0U5UFNBblUzUnlhVzVuSnlrcEtUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJwYzBGeWNtRjVhWE5vSUQwZ2NtVnhkV2x5WlNnbmFYTXRZWEp5WVhscGMyZ25LVHRjYmx4dWRtRnlJR052Ym1OaGRDQTlJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNWpiMjVqWVhRN1hHNTJZWElnYzJ4cFkyVWdQU0JCY25KaGVTNXdjbTkwYjNSNWNHVXVjMnhwWTJVN1hHNWNiblpoY2lCemQybDZlbXhsSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCemQybDZlbXhsS0dGeVozTXBJSHRjYmx4MGRtRnlJSEpsYzNWc2RITWdQU0JiWFR0Y2JseHVYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Dd2diR1Z1SUQwZ1lYSm5jeTVzWlc1bmRHZzdJR2tnUENCc1pXNDdJR2tyS3lrZ2UxeHVYSFJjZEhaaGNpQmhjbWNnUFNCaGNtZHpXMmxkTzF4dVhHNWNkRngwYVdZZ0tHbHpRWEp5WVhscGMyZ29ZWEpuS1NrZ2UxeHVYSFJjZEZ4MEx5OGdhSFIwY0RvdkwycHpjR1Z5Wmk1amIyMHZhbUYyWVhOamNtbHdkQzFoY25KaGVTMWpiMjVqWVhRdGRuTXRjSFZ6YUM4NU9GeHVYSFJjZEZ4MGNtVnpkV3gwY3lBOUlHTnZibU5oZEM1allXeHNLSEpsYzNWc2RITXNJSE5zYVdObExtTmhiR3dvWVhKbktTazdYRzVjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEhKbGMzVnNkSE11Y0hWemFDaGhjbWNwTzF4dVhIUmNkSDFjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJ5WlhOMWJIUnpPMXh1ZlR0Y2JseHVjM2RwZW5wc1pTNTNjbUZ3SUQwZ1puVnVZM1JwYjI0Z0tHWnVLU0I3WEc1Y2RISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MGNtVjBkWEp1SUdadUtITjNhWHA2YkdVb1lYSm5kVzFsYm5SektTazdYRzVjZEgwN1hHNTlPMXh1SWl3aWFXMXdiM0owSUhzZ1JHRjBZVXhwYzNSSmRHVnRMQ0JEYUdGdWJtVnNSblZ1WXlCOUlHWnliMjBnSnk0dUwyUmxabWx1YVhScGIyNXpKMXh1YVcxd2IzSjBJRTFoY210bGNuTk1ZWGxsY2l3Z2UxeHVJQ0JOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6TEZ4dUlDQk5ZWEpyWlhKelNHVmhkRXhoZVdWeVQzQjBhVzl1Y3l4Y2JuMGdabkp2YlNBbkxpNHZiV0Z5YTJWeUwwMWhjbXRsY25OTVlYbGxjaWRjYmx4dWFXNTBaWEptWVdObElFUjVibUZ0YVdOSVpXRjBUR0Y1WlhKUGNIUnBiMjV6SUdWNGRHVnVaSE1nVFdGeWEyVnljMGhsWVhSTVlYbGxjazl3ZEdsdmJuTWdlMXh1SUNBdktpb2c1cGl2NVpDbTViNnE1NDZ2NXBLdDVwUytJQ292WEc0Z0lHeHZiM0E2SUdKdmIyeGxZVzVjYmlBZ0x5b3FJT2FZcitXUXB1aUhxdVdLcU9hU3JlYVV2aUFxTDF4dUlDQmhkWFJ2T2lCaWIyOXNaV0Z1WEc0Z0lDOHFLaURwbDdUcG1wVG1sN2JwbDdRZ0tpOWNiaUFnYVc1MFpYSjJZV3c2SUc1MWJXSmxjbHh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJFZVc1aGJXbGpTR1ZoZEV4aGVXVnlJSHRjYmlBZ0x5b3FJT1c5aytXSmplYVNyZWFVdnVXSXNPZXNyT1dIb09hdHBTQXFMMXh1SUNCd2NtbDJZWFJsSUdOMWNuSmxiblJUZEdWd09pQnVkVzFpWlhKY2JseHVJQ0J3Y21sMllYUmxJRzFoY0RvZ1RDNU5ZWEJjYmlBZ2NISnBkbUYwWlNCa2VXNWhiV2xqUkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRXMTFjYmlBZ2NISnBkbUYwWlNCdmNIUnBiMjV6T2lCRWVXNWhiV2xqU0dWaGRFeGhlV1Z5VDNCMGFXOXVjMXh1SUNCd2NtbDJZWFJsSUdOb1lXNXVaV3hHZFc1ak9pQkRhR0Z1Ym1Wc1JuVnVZMXh1SUNCd2NtbDJZWFJsSUd4aGVXVnlPaUJOWVhKclpYSnpUR0Y1WlhKY2JpQWdjSEpwZG1GMFpTQnBjMUJoZFhObE9pQmliMjlzWldGdVhHNGdJR052Ym5OMGNuVmpkRzl5S0Z4dUlDQWdJRzFoY0RvZ1RDNU5ZWEFzWEc0Z0lDQWdaSGx1WVcxcFkwUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFZ0ZExGeHVJQ0FnSUc5d2RHbHZibk02SUVSNWJtRnRhV05JWldGMFRHRjVaWEpQY0hScGIyNXpMRnh1SUNBZ0lHTm9ZVzV1Wld4R2RXNWpPaUJEYUdGdWJtVnNSblZ1WTF4dUlDQXBJSHRjYmlBZ0lDQjBhR2x6TG0xaGNDQTlJRzFoY0Z4dUlDQWdJSFJvYVhNdVpIbHVZVzFwWTBSaGRHRk1hWE4wSUQwZ1pIbHVZVzFwWTBSaGRHRk1hWE4wWEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ2IzQjBhVzl1YzF4dUlDQWdJSFJvYVhNdVkyaGhibTVsYkVaMWJtTWdQU0JqYUdGdWJtVnNSblZ1WTF4dUlDQWdJSFJvYVhNdVkzVnljbVZ1ZEZOMFpYQWdQU0F3WEc0Z0lDQWdkR2hwY3k1cGMxQmhkWE5sSUQwZ2RISjFaVnh1SUNCOVhHNGdJSEIxWW14cFl5QnlaWE4wWVhKMEtDa2dlMXh1SUNBZ0lIUm9hWE11YVhOUVlYVnpaU0E5SUdaaGJITmxYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBVM1JsY0NBOUlEQmNiaUFnSUNCMGFHbHpMbWR2ZEc5VGRHVndLSFJvYVhNdVkzVnljbVZ1ZEZOMFpYQXBYRzRnSUNBZ2RHaHBjeTV6ZEdGeWRDZ3BYRzRnSUgxY2JpQWdjSFZpYkdsaklITjBZWEowS0NrZ2UxeHVJQ0FnSUhSb2FYTXVhWE5RWVhWelpTQTlJR1poYkhObFhHNGdJQ0FnYVdZZ0tDRjBhR2x6TG05d2RHbHZibk11WVhWMGJ5a2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVhWE5RWVhWelpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lDOHFLaURta3EzbWxMN2xyb3ptcjVVZ0tpOWNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtTjFjbkpsYm5SVGRHVndJRDQ5SUhSb2FYTXVaSGx1WVcxcFkwUmhkR0ZNYVhOMExteGxibWQwYUNBdElERXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG05d2RHbHZibk11Ykc5dmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjbVZ6ZEdGeWRDZ3BYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblJUZEdWd0t5dGNiaUFnSUNBZ0lDQWdkR2hwY3k1bmIzUnZVM1JsY0NoMGFHbHpMbU4xY25KbGJuUlRkR1Z3S1Z4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMEtDbGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxDQjBhR2x6TG05d2RHbHZibk11YVc1MFpYSjJZV3dwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSEJoZFhObEtDa2dlMXh1SUNBZ0lIUm9hWE11YVhOUVlYVnpaU0E5SUhSeWRXVmNiaUFnZlZ4dUlDQndkV0pzYVdNZ2NISmxkaWdwSUh0Y2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5SVGRHVndMUzFjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblJUZEdWd0lEMWNiaUFnSUNBZ0lDaDBhR2x6TG1OMWNuSmxiblJUZEdWd0lDc2dkR2hwY3k1a2VXNWhiV2xqUkdGMFlVeHBjM1F1YkdWdVozUm9LU0FsWEc0Z0lDQWdJQ0IwYUdsekxtUjVibUZ0YVdORVlYUmhUR2x6ZEM1c1pXNW5kR2hjYmlBZ0lDQjBhR2x6TG1kdmRHOVRkR1Z3S0hSb2FYTXVZM1Z5Y21WdWRGTjBaWEFwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJRzVsZUhRb0tTQjdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBVM1JsY0NzclhHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MFUzUmxjQ0E5SUhSb2FYTXVZM1Z5Y21WdWRGTjBaWEFnSlNCMGFHbHpMbVI1Ym1GdGFXTkVZWFJoVEdsemRDNXNaVzVuZEdoY2JpQWdJQ0IwYUdsekxtZHZkRzlUZEdWd0tIUm9hWE11WTNWeWNtVnVkRk4wWlhBcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdkdmRHOVRkR1Z3S0hOMFpYQTZJRzUxYldKbGNpa2dlMXh1SUNBZ0lHbG1JQ2h6ZEdWd0lEd2dNQ0I4ZkNCemRHVndJRDQ5SUhSb2FYTXVaSGx1WVcxcFkwUmhkR0ZNYVhOMExteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCbmIzUnZVM1JsY0Nna2UzTjBaWEI5S1RvZ2MzUmxjQ0JwY3lCdmRYUWdiMllnYVc1a1pYZ2dZQ2xjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTVzWVhsbGNpNXpaWFJFWVhSaEtIUm9hWE11WkhsdVlXMXBZMFJoZEdGTWFYTjBXM04wWlhCZEtWeHVJQ0FnSUhSb2FYTXViR0Y1WlhJdVpISmhkeWdwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJR1J5WVhjb2IzQjBhVzl1Y3o4NklFUjVibUZ0YVdOSVpXRjBUR0Y1WlhKUGNIUnBiMjV6S1NCN1hHNGdJQ0FnZEdocGN5NXBibWwwVDNCMGFXOXVjeWh2Y0hScGIyNXpLVnh1SUNBZ0lIUm9hWE11YVc1cGRFeGhlV1Z5S0NsY2JpQWdJQ0IwYUdsekxteGhlV1Z5TG1SeVlYY29LVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQnBibWwwVDNCMGFXOXVjeWh2Y0hScGIyNXpQem9nUkhsdVlXMXBZMGhsWVhSTVlYbGxjazl3ZEdsdmJuTXBJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk1nUFNCUFltcGxZM1F1WVhOemFXZHVLRnh1SUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0JzYjI5d09pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ1lYVjBiem9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJR2x1ZEdWeWRtRnNPaUF4TURBd0xGeHVJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lIUm9hWE11YjNCMGFXOXVjeXhjYmlBZ0lDQWdJRzl3ZEdsdmJuTmNiaUFnSUNBcFhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCcGJtbDBUR0Y1WlhJb0tTQjdYRzRnSUNBZ1kyOXVjM1FnYldGeWEyVnljMHhoZVdWeVQzQjBhVzl1Y3pvZ1RXRnlhMlZ5YzB4aGVXVnlUM0IwYVc5dWN5QTlJSHRjYmlBZ0lDQWdJSEpsYm1SbGNsUjVjR1U2SUNkb1pXRjBKeXhjYmlBZ0lDQWdJR2hsWVhSUGNIUnBiMjV6T2lCMGFHbHpMbTl3ZEdsdmJuTXNYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViR0Y1WlhJZ1BTQnVaWGNnVFdGeWEyVnljMHhoZVdWeUtGeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBc1hHNGdJQ0FnSUNCMGFHbHpMbVI1Ym1GdGFXTkVZWFJoVEdsemRGc3dYU3hjYmlBZ0lDQWdJRzFoY210bGNuTk1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdJQ0IwYUdsekxtTm9ZVzV1Wld4R2RXNWpYRzRnSUNBZ0tWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxteGhlV1Z5WEc0Z0lIMWNibjFjYmlJc0ltbHRjRzl5ZENCTllYSnJaWElnWm5KdmJTQW5MaTl0WVhKclpYSXZUV0Z5YTJWeUoxeHVhVzF3YjNKMElFMWhjbXRsY25OTVlYbGxjaUJtY205dElDY3VMMjFoY210bGNpOU5ZWEpyWlhKelRHRjVaWEluWEc1cGJYQnZjblFnVFdGeWEyVnljMEoxWm1abGNreGhlV1Z5SUdaeWIyMGdKeTR2YldGeWEyVnlMMDFoY210bGNuTkNkV1ptWlhKTVlYbGxjaWRjYm1sdGNHOXlkQ0JRYjJ4NWJHbHVaU0JtY205dElDY3VMM0J2Ykhsc2FXNWxMMUJ2Ykhsc2FXNWxKMXh1YVcxd2IzSjBJRkJ2Ykhsc2FXNWxjMHhoZVdWeUlHWnliMjBnSnk0dmNHOXNlV3hwYm1VdlVHOXNlV3hwYm1WelRHRjVaWEluWEc1cGJYQnZjblFnVUc5c2VXeHBibVZ6UW5WbVptVnlUR0Y1WlhJZ1puSnZiU0FuTGk5d2IyeDViR2x1WlM5UWIyeDViR2x1WlhOQ2RXWm1aWEpNWVhsbGNpZGNibWx0Y0c5eWRDQlFiMng1WjI5dUlHWnliMjBnSnk0dmNHOXNlV2R2Ymk5UWIyeDVaMjl1SjF4dWFXMXdiM0owSUZCdmJIbG5iMjV6VEdGNVpYSWdabkp2YlNBbkxpOXdiMng1WjI5dUwxQnZiSGxuYjI1elRHRjVaWEluWEc1cGJYQnZjblFnUjNKcFpITk1ZWGxsY2lCbWNtOXRJQ2N1TDNCdmJIbG5iMjR2UjNKcFpITk1ZWGxsY2lkY2JtbHRjRzl5ZENCRWVXNWhiV2xqU0dWaGRFeGhlV1Z5SUdaeWIyMGdKeTR2WkhsdVlXMXBZMGhsWVhSTVlYbGxjaTlFZVc1aGJXbGpTR1ZoZEV4aGVXVnlKMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lFMWhjbXRsY2l4Y2JpQWdUV0Z5YTJWeWMweGhlV1Z5TEZ4dUlDQk5ZWEpyWlhKelFuVm1abVZ5VEdGNVpYSXNYRzRnSUZCdmJIbHNhVzVsTEZ4dUlDQlFiMng1YkdsdVpYTk1ZWGxsY2l4Y2JpQWdVRzlzZVd4cGJtVnpRblZtWm1WeVRHRjVaWElzWEc0Z0lGQnZiSGxuYjI0c1hHNGdJRkJ2YkhsbmIyNXpUR0Y1WlhJc1hHNGdJRWR5YVdSelRHRjVaWElzWEc0Z0lFUjVibUZ0YVdOSVpXRjBUR0Y1WlhJc1hHNTlYRzVsZUhCdmNuUWdlMXh1SUNCTllYSnJaWElzWEc0Z0lFMWhjbXRsY25OTVlYbGxjaXhjYmlBZ1RXRnlhMlZ5YzBKMVptWmxja3hoZVdWeUxGeHVJQ0JRYjJ4NWJHbHVaU3hjYmlBZ1VHOXNlV3hwYm1WelRHRjVaWElzWEc0Z0lGQnZiSGxzYVc1bGMwSjFabVpsY2t4aGVXVnlMRnh1SUNCUWIyeDVaMjl1TEZ4dUlDQlFiMng1WjI5dWMweGhlV1Z5TEZ4dUlDQkhjbWxrYzB4aGVXVnlMRnh1SUNCRWVXNWhiV2xqU0dWaGRFeGhlV1Z5TEZ4dWZWeHVJaXdpYVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdElIMGdabkp2YlNBbkxpNHZaR1ZtYVc1cGRHbHZibk1uWEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRTFoY210bGNpQmxlSFJsYm1SeklFd3VUV0Z5YTJWeUlIdGNiaUFnTHk4Z2RITnNhVzUwT21ScGMyRmliR1V0Ym1WNGRDMXNhVzVsT25aaGNtbGhZbXhsTFc1aGJXVmNiaUFnY0hKcGRtRjBaU0JmWDJSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlZ4dUlDQmpiMjV6ZEhKMVkzUnZjaWhzWVhSc2JtYzZJRXd1VEdGMFRHNW5SWGh3Y21WemMybHZiaXdnYjNCMGFXOXVjejg2SUV3dVRXRnlhMlZ5VDNCMGFXOXVjeWtnZTF4dUlDQWdJSE4xY0dWeUtHeGhkR3h1Wnl3Z2IzQjBhVzl1Y3lsY2JpQWdmVnh1SUNCd2RXSnNhV01nYzJWMFJHRjBZU2hrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwSUh0Y2JpQWdJQ0IwYUdsekxsOWZaR0YwWVNBOUlHUmhkR0ZjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMlYwUkdGMFlTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWDJSaGRHRmNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdExDQkRhR0Z1Ym1Wc1JuVnVZeUI5SUdaeWIyMGdKeTR1TDJSbFptbHVhWFJwYjI1ekoxeHVhVzF3YjNKMElFMWhjbXRsY25OTVlYbGxjaXdnZXlCTllYSnJaWEp6VEdGNVpYSlBjSFJwYjI1eklIMGdabkp2YlNBbkxpOU5ZWEpyWlhKelRHRjVaWEluWEc1cGJuUmxjbVpoWTJVZ1RXRnlhMlZ5YzBKMVptWmxja3hoZVdWeVQzQjBhVzl1Y3lCbGVIUmxibVJ6SUUxaGNtdGxjbk5NWVhsbGNrOXdkR2x2Ym5NZ2UxeHVJQ0JpZFdabVpYSlViMjlzZEdsd1FYUjBjam9nYzNSeWFXNW5YRzRnSUdKMVptWmxjazl3ZEdsdmJuTTZJRXd1UTJseVkyeGxUV0Z5YTJWeVQzQjBhVzl1YzF4dWZWeHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVFdGeWEyVnljMEoxWm1abGNreGhlV1Z5SUdWNGRHVnVaSE1nVFdGeWEyVnljMHhoZVdWeUlIdGNiaUFnY0hWaWJHbGpJRzl3ZEdsdmJuTTZJRTFoY210bGNuTkNkV1ptWlhKTVlYbGxjazl3ZEdsdmJuTmNiaUFnY0hKcGRtRjBaU0JpZFdabVpYSk1ZWGxsY2pvZ1RDNU1ZWGxsY2tkeWIzVndYRzRnSUdOdmJuTjBjblZqZEc5eUtGeHVJQ0FnSUcxaGNEb2dUQzVOWVhBc1hHNGdJQ0FnWkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRMRnh1SUNBZ0lHOXdkR2x2Ym5NNklFMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNrOXdkR2x2Ym5Nc1hHNGdJQ0FnWTJoaGJtNWxiRVoxYm1NNklFTm9ZVzV1Wld4R2RXNWpYRzRnSUNrZ2UxeHVJQ0FnSUhOMWNHVnlLRzFoY0N3Z1pHRjBZVXhwYzNRc0lHOXdkR2x2Ym5Nc0lHTm9ZVzV1Wld4R2RXNWpLVnh1SUNBZ0lIUm9hWE11ZEhsd1pTQTlJQ2R0WVhKclpYSkNkV1ptWlhJblhHNGdJQ0FnWTI5dWMzUWdaR1ZtWVhWc2RFSjFabVpsY2s5d2RHbHZibk02SUV3dVEybHlZMnhsVFdGeWEyVnlUM0IwYVc5dWN5QTlJSHRjYmlBZ0lDQWdJSEpoWkdsMWN6b2dNVEF3TUN4Y2JpQWdJQ0FnSUhOMGNtOXJaVG9nZEhKMVpTeGNiaUFnSUNBZ0lIZGxhV2RvZERvZ01TeGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXZjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloY2JpQWdJQ0FnSUhSb2FYTXViM0IwYVc5dWN5eGNiaUFnSUNBZ0lIc2dZblZtWm1WeVQzQjBhVzl1Y3pvZ1pHVm1ZWFZzZEVKMVptWmxjazl3ZEdsdmJuTWdmU3hjYmlBZ0lDQWdJRzl3ZEdsdmJuTmNiaUFnSUNBcFhHNGdJSDFjYmx4dUlDQndkV0pzYVdNZ1pISmhkeWh2Y0hScGIyNXpQem9nVFdGeWEyVnljMEoxWm1abGNreGhlV1Z5VDNCMGFXOXVjeWtnZTF4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlFOWlhbVZqZEM1aGMzTnBaMjRvZEdocGN5NXZjSFJwYjI1ekxDQnZjSFJwYjI1ektWeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5NWlkV1ptWlhKUGNIUnBiMjV6TG1OdmJHOXlJRDBnZEdocGN5NXZjSFJwYjI1ekxtbGpiMjVEYjJ4dmNseHVJQ0FnSUhSb2FYTXVhVzVwZEUxaGNtdGxjbk1vS1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbFpISmhkeWdwWEc0Z0lIMWNibHh1SUNCd2RXSnNhV01nY21Wa2NtRjNLQ2tnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTUyYVhOcFlteGxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUm9hWE11YldGeWEyVnlUR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdWJXRnlhMlZ5VEdGNVpYSXBYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBhR2x6TG1KMVptWmxja3hoZVdWeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG0xaGNDNXlaVzF2ZG1WTVlYbGxjaWgwYUdsekxtSjFabVpsY2t4aGVXVnlLVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbTFoY210bGNreGhlV1Z5SUQwZ2RHaHBjeTVqYjI1bWFXZE5ZWEpyWlhKTVlYbGxjaWdwWEc0Z0lDQWdkR2hwY3k1aWRXWm1aWEpNWVhsbGNpQTlJSFJvYVhNdVkyOXVabWxuUW5WbVptVnlUR0Y1WlhJb0tWeHVYRzRnSUNBZ2RHaHBjeTVzWVhsbGNpQTlJRXd1YkdGNVpYSkhjbTkxY0NncFhHNGdJQ0FnZEdocGN5NXNZWGxsY2k1aFpHUk1ZWGxsY2loMGFHbHpMbTFoY210bGNreGhlV1Z5S1Z4dUlDQWdJSFJvYVhNdWJHRjVaWEl1WVdSa1RHRjVaWElvZEdocGN5NWlkV1ptWlhKTVlYbGxjaWxjYmx4dUlDQWdJSFJvYVhNdWJXRndMbUZrWkV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE5jYmlBZ2ZWeHVYRzRnSUhCMVlteHBZeUJuWlhSQ2IzVnVaSE1vS1RvZ1RDNU1ZWFJNYm1kQ2IzVnVaSE5GZUhCeVpYTnphVzl1SUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTV0WVhKclpYSnpMbXhsYm1kMGFDQThQU0F3S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXRZWEF1WjJWMFFtOTFibVJ6S0NsY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11YldGeWEyVnljeTV5WldSMVkyVW9LSEJ5WlhZc0lHTjFjbklwSUQwK0lIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCd2NtVjJMbVY0ZEdWdVpDaGNiaUFnSUNBZ0lDQWdZM1Z5Y2k1blpYUk1ZWFJNYm1jb0tTNTBiMEp2ZFc1a2N5aDBhR2x6TG05d2RHbHZibk11WW5WbVptVnlUM0IwYVc5dWN5NXlZV1JwZFhNcFhHNGdJQ0FnSUNBcFhHNGdJQ0FnZlN3Z2RHaHBjeTV0WVhKclpYSnpXekJkTG1kbGRFeGhkRXh1WnlncExuUnZRbTkxYm1SektIUm9hWE11YjNCMGFXOXVjeTVpZFdabVpYSlBjSFJwYjI1ekxuSmhaR2wxY3lrcFhHNGdJSDFjYmx4dUlDQndjbWwyWVhSbElHTnZibVpwWjBKMVptWmxja3hoZVdWeUtDa2dlMXh1SUNBZ0lHTnZibk4wSUdkeWIzVndUR0Y1WlhJZ1BTQk1MbXhoZVdWeVIzSnZkWEFvS1Z4dUlDQWdJSFJvYVhNdWJXRnlhMlZ5Y3k1bWIzSkZZV05vS0NodFlYSnJaWElwSUQwK0lIdGNiaUFnSUNBZ0lHTnZibk4wSUdOcGNtTnNaVXhoZVdWeUlEMGdUQzVqYVhKamJHVW9YRzRnSUNBZ0lDQWdJRzFoY210bGNpNW5aWFJNWVhSTWJtY29LU3hjYmlBZ0lDQWdJQ0FnZEdocGN5NXZjSFJwYjI1ekxtSjFabVpsY2s5d2RHbHZibk5jYmlBZ0lDQWdJQ2xjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVZblZtWm1WeVZHOXZiSFJwY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnWTJseVkyeGxUR0Y1WlhJdVltbHVaRlJ2YjJ4MGFYQW9YRzRnSUNBZ0lDQWdJQ0FnSnljZ0t5QnRZWEpyWlhJdVoyVjBSR0YwWVNncFczUm9hWE11YjNCMGFXOXVjeTVpZFdabVpYSlViMjlzZEdsd1FYUjBjbDFjYmlBZ0lDQWdJQ0FnS1Z4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnYzNkcGRHTm9JQ2gwZVhCbGIyWWdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJR05oYzJVZ0ozTjBjbWx1WnljNlhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYVhKamJHVk1ZWGxsY2k1aWFXNWtWRzl2YkhScGNDaGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0p5Y2dLeUJ0WVhKclpYSXVaMlYwUkdGMFlTZ3BXM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhKZFhHNGdJQ0FnSUNBZ0lDQWdJQ0FwWEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNBZ0lHTmhjMlVnSjI5aWFtVmpkQ2M2WEc0Z0lDQWdJQ0FnSUNBZ0lDQmphWEpqYkdWTVlYbGxjaTVpYVc1a1ZHOXZiSFJwY0NoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSnljZ0t5QnRZWEpyWlhJdVoyVjBSR0YwWVNncFczUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEl1ZG1Gc2RXVmRYRzRnSUNBZ0lDQWdJQ0FnSUNBcFhHNGdJQ0FnSUNBZ0lDQWdaR1ZtWVhWc2REcGNiaUFnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2R5YjNWd1RHRjVaWEl1WVdSa1RHRjVaWElvWTJseVkyeGxUR0Y1WlhJcFhHNGdJQ0FnZlNsY2JpQWdJQ0J5WlhSMWNtNGdaM0p2ZFhCTVlYbGxjbHh1SUNCOVhHNTlYRzRpTENKcGJYQnZjblFnZXlCc2FXZG9kR1Z1SUgwZ1puSnZiU0FuTGk0dmRYUnBiSE12YVc1a1pYZ25YRzVwYlhCdmNuUWdleUJFWVhSaFRHbHpkRWwwWlcwc0lFTm9ZVzV1Wld4R2RXNWpJSDBnWm5KdmJTQW5MaTR2WkdWbWFXNXBkR2x2Ym5NblhHNXBiWEJ2Y25RZ1RXRnlhMlZ5SUdaeWIyMGdKeTR2VFdGeWEyVnlKMXh1WEc0dktpb2c1cml5NXArVDVxQzM1YnlQSU9hVm8rZUN1WHpuZzYzbGlwdmxtNzRnS2k5Y2JuUjVjR1VnVFdGeWEyVnljMHhoZVdWeVVtVnVaR1Z5Vkhsd1pTQTlJQ2R3YjJsdWRDY2dmQ0FuYUdWaGRDY2dmQ0FuWTJ4MWMzUmxjaWRjYmx4dUx5b3FJT2E0c3VhZmsrbWluT2lKc3VhZ3QrVzhqeURsalpYb2liSjg1WWlHNXE2MUlDb3ZYRzUwZVhCbElFMWhjbXRsY25OTVlYbGxjbEpsYm1SbGNsQnZhVzUwUTI5c2IzSlVlWEJsSUQwZ0ozTnBibWRzWlNjZ2ZDQW5jMlZuYldWdWRHVmtKMXh1WEc0dktpb2c1cFdqNTRLNTVadSs1cUNINTdHNzVaNkxJR2xqYjI1bWIyNTBmSE4yWjN4cGJXRm5aU0FxTDF4dWRIbHdaU0JOWVhKclpYSnpUR0Y1WlhKSlkyOXVWSGx3WlNBOUlDZG1iMjUwWDJOc1lYTnpKeUI4SUNkMWJtbGpiMlJsSnlCOElDZHplVzFpYjJ3bklId2dKMmx0WVdkbEoxeHVYRzVwYm5SbGNtWmhZMlVnU1dOdmJsSmxibVJsY2taMWJtTlBjSFJwYjI0Z2UxeHVJQ0JwWTI5dVUybDZaVG9nVzI1MWJXSmxjaXdnYm5WdFltVnlYVnh1SUNCcFkyOXVRMjlzYjNJNklITjBjbWx1WjF4dWZWeHVkSGx3WlNCSlkyOXVVbVZ1WkdWeVJuVnVZeUE5SUNoY2JpQWdaR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRMRnh1SUNCd1lYSmhiWE02SUVsamIyNVNaVzVrWlhKR2RXNWpUM0IwYVc5dVhHNHBJRDArSUhOMGNtbHVaMXh1WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUUxaGNtdGxjbk5NWVhsbGNrOXdkR2x2Ym5NZ2UxeHVJQ0J5Wlc1a1pYSlVlWEJsT2lCTllYSnJaWEp6VEdGNVpYSlNaVzVrWlhKVWVYQmxYRzRnSUhKbGJtUmxjbEJ2YVc1MFEyOXNiM0pVZVhCbFB6b2dUV0Z5YTJWeWMweGhlV1Z5VW1WdVpHVnlVRzlwYm5SRGIyeHZjbFI1Y0dWY2JpQWdhV052YmxSNWNHVS9PaUJOWVhKclpYSnpUR0Y1WlhKSlkyOXVWSGx3WlZ4dVhHNGdJR2xqYjI1SmJXRm5aVlZ5YkQ4NklITjBjbWx1WjF4dUlDQnBZMjl1VTJsNlpUODZJRnR1ZFcxaVpYSXNJRzUxYldKbGNsMWNiaUFnYVdOdmJrTnNZWE56UHpvZ2MzUnlhVzVuWEc0Z0lHbGpiMjVWYm1samIyUmxQem9nYzNSeWFXNW5YRzRnSUdsamIyNVRlVzFpYjJ3L09pQnpkSEpwYm1kY2JpQWdhV052YmtOdmJHOXlQem9nYzNSeWFXNW5YRzRnSUdsamIyNUJibU5vYjNJL09pQmJiblZ0WW1WeUxDQnVkVzFpWlhKZFhHNGdJR2xqYjI1U1pXNWtaWEpsY2o4NklFbGpiMjVTWlc1a1pYSkdkVzVqWEc1Y2JpQWdMeThnNXBpdjVaQ202SUdhNVpDSTc3eU01THlZNVlXSTU3cW42YXVZNUxxT0lISmxibVJsY2xSNWNHVWdQVDBnY0c5cGJuUmNiaUFnYVhORGJIVnpkR1Z5UHpvZ1ltOXZiR1ZoYmx4dVhHNGdJQzhxS2lCd2IzQjFjQ0Rsc1pYbnBMcmxyWmZtcnJVZ0tpOWNiaUFnY0c5d2RYQkJkSFJ5UHpvZ2MzUnlhVzVuSUh3Z2V5QnNZV0psYkRvZ2MzUnlhVzVuT3lCMllXeDFaVG9nWVc1NUlIMWNiaUFnTHlvcUlIUnZiMngwYVhBZzViR1Y1NlM2NWEyWDVxNjFJQ292WEc0Z0lIUnZiMngwYVhCQmRIUnlQem9nYzNSeWFXNW5YRzVjYmlBZ2IzQmhZMmwwZVQ4NklHNTFiV0psY2x4dVhHNGdJQzhxS2lEbGlJYm1yclhtdUxMbW41UG51NS9vcnFIbHJaZm1yclVnS2k5Y2JpQWdjMlZuYldWdWRHVmtRWFIwY2o4NklITjBjbWx1WjF4dUlDQnpaV2R0Wlc1MFpXUkRiMnh2Y25NL09pQnpkSEpwYm1kYlhWeHVYRzRnSUdobFlYUlBjSFJwYjI1elB6b2dUV0Z5YTJWeWMwaGxZWFJNWVhsbGNrOXdkR2x2Ym5OY2JpQWdZMngxYzNSbGNrOXdkR2x2Ym5NL09pQk1MazFoY210bGNuTkRiSFZ6ZEdWeVQzQjBhVzl1YzF4dWZWeHVYRzR2S2lvZzZMMnM1WXlXNUxpNjU0T3Q1WXFiNVp1KzU1cUVJRzl3ZEdsdmJuTWdLaTljYm1WNGNHOXlkQ0JwYm5SbGNtWmhZMlVnVFdGeWEyVnljMGhsWVhSTVlYbGxjazl3ZEdsdmJuTWdaWGgwWlc1a2N5Qk1Ma2hsWVhSTVlYbGxjazl3ZEdsdmJuTWdlMXh1SUNCa2FXMWxibk5wYjI1QmRIUnlQem9nYzNSeWFXNW5YRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRTFoY210bGNuTk1ZWGxsY2lCN1hHNGdJSEIxWW14cFl5QnRZWEE2SUV3dVRXRndYRzRnSUhCMVlteHBZeUJrWVhSaFRHbHpkRG9nUkdGMFlVeHBjM1JKZEdWdFcxMWNiaUFnY0hWaWJHbGpJRzl3ZEdsdmJuTTZJRTFoY210bGNuTk1ZWGxsY2s5d2RHbHZibk5jYmlBZ2NIVmliR2xqSUdOb1lXNXVaV3hHZFc1ak9pQkRhR0Z1Ym1Wc1JuVnVZMXh1WEc0Z0lIQjFZbXhwWXlCMGVYQmxPaUJ6ZEhKcGJtZGNibHh1SUNCd2NtOTBaV04wWldRZ2JXRnlhMlZ5Y3pvZ1RXRnlhMlZ5VzExY2JseHVJQ0J3Y205MFpXTjBaV1FnWm05amRYTmxaRTFoY210bGNqb2dUV0Z5YTJWeVhHNGdJSEJ5YjNSbFkzUmxaQ0JvYjNabGNtVmtUV0Z5YTJWeU9pQk5ZWEpyWlhKY2JpQWdMeW9xSU9tY2dPaW1nZVd4bGVla3V1ZWFoT2FVdnVXa3ArZWFoT1didnVhZ2h5QXFMMXh1SUNCd2NtOTBaV04wWldRZ1ptOWpkWE5sWkVScGMzQnNZWGxOWVhKclpYSTZJRTFoY210bGNseHVJQ0J3Y205MFpXTjBaV1FnYldGeWEyVnlUR0Y1WlhJNklFd3VRMkZ1ZG1GelNXTnZia3hoZVdWeVhHNWNiaUFnY0hKdmRHVmpkR1ZrSUhacGMybGliR1U2SUdKdmIyeGxZVzVjYmlBZ2NISnZkR1ZqZEdWa0lHeGhlV1Z5T2x4dUlDQWdJSHdnVEM1RFlXNTJZWE5KWTI5dVRHRjVaWEpjYmlBZ0lDQjhJRXd1U0dWaGRFeGhlV1Z5WEc0Z0lDQWdmQ0JNTGsxaGNtdGxjbk5EYkhWemRHVnlYRzRnSUNBZ2ZDQk1Ma3hoZVdWeVIzSnZkWEJjYmlBZ2NISnZkR1ZqZEdWa0lIcHZiMjFUZEdGeWRFTmlPaUFvS1NBOVBpQjJiMmxrWEc0Z0lIQnliM1JsWTNSbFpDQjZiMjl0Ulc1a1EySTZJQ2dwSUQwK0lIWnZhV1JjYmlBZ2NISnBkbUYwWlNCb1pXRjBUR0Y1WlhJNklFd3VTR1ZoZEV4aGVXVnlYRzRnSUhCeWFYWmhkR1VnWTJ4MWMzUmxja3hoZVdWeU9pQk1MazFoY210bGNuTkRiSFZ6ZEdWeVhHNWNiaUFnY0hKcGRtRjBaU0J6WldkdFpXNTBaV1JOYVc0NklHNTFiV0psY2x4dUlDQndjbWwyWVhSbElITmxaMjFsYm5SbFpGTjBaWEE2SUc1MWJXSmxjbHh1SUNCd2NtbDJZWFJsSUdSbFptRjFiSFJQY0hScGIyNXpPaUJOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6WEc0Z0lHTnZibk4wY25WamRHOXlLRnh1SUNBZ0lHMWhjRG9nVEM1TllYQXNYRzRnSUNBZ1pHRjBZVXhwYzNRNklFUmhkR0ZNYVhOMFNYUmxiVnRkTEZ4dUlDQWdJRzl3ZEdsdmJuTTZJRTFoY210bGNuTk1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJSFJvYVhNdVpHVm1ZWFZzZEU5d2RHbHZibk1nUFNCN1hHNGdJQ0FnSUNCeVpXNWtaWEpVZVhCbE9pQW5jRzlwYm5RbkxGeHVJQ0FnSUNBZ2NtVnVaR1Z5VUc5cGJuUkRiMnh2Y2xSNWNHVTZJQ2R6YVc1bmJHVW5MRnh1SUNBZ0lDQWdhV052YmxSNWNHVTZJQ2QxYm1samIyUmxKeXhjYmlBZ0lDQWdJR2xqYjI1VGFYcGxPaUJiTWpBc0lESXdYU3hjYmlBZ0lDQWdJR2xqYjI1RGJHRnpjem9nSjJsamIyNW1iMjUwSnl4Y2JpQWdJQ0FnSUdsamIyNURiMnh2Y2pvZ0p5TXpNemc0UmtZbkxGeHVJQ0FnSUNBZ2FXTnZia0Z1WTJodmNqb2dXekV3TENBeU1GMHNYRzRnSUNBZ0lDQndiM0IxY0VGMGRISTZJSHNnYkdGaVpXdzZJQ2Zsa0kzbnA3QW5MQ0IyWVd4MVpUb2dKMjVoYldVbklIMHNYRzRnSUNBZ0lDQjBiMjlzZEdsd1FYUjBjam9nSjI1aGJXVW5MRnh1SUNBZ0lDQWdjMlZuYldWdWRHVmtRMjlzYjNKek9pQmJKeU16TXpnNFJrWW5YU3hjYmlBZ0lDQWdJR2x6UTJ4MWMzUmxjam9nWm1Gc2MyVXNYRzRnSUNBZ0lDQm9aV0YwVDNCMGFXOXVjem9nZTF4dUlDQWdJQ0FnSUNCdFlYZzZJREVzWEc0Z0lDQWdJQ0FnSUcxcGJrOXdZV05wZEhrNklERXNYRzRnSUNBZ0lDQjlMRnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMblI1Y0dVZ1BTQW5iV0Z5YTJWeUoxeHVJQ0FnSUhSb2FYTXViV0Z3SUQwZ2JXRndYRzRnSUNBZ2RHaHBjeTVrWVhSaFRHbHpkQ0E5SUdSaGRHRk1hWE4wWEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ2IzQjBhVzl1YzF4dUlDQWdJSFJvYVhNdVkyaGhibTVsYkVaMWJtTWdQU0JqYUdGdWJtVnNSblZ1WTF4dVhHNGdJQ0FnZEdocGN5NTJhWE5wWW14bElEMGdkSEoxWlZ4dUlDQWdJSFJvYVhNdWJHRjVaWElnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtUV0Z5YTJWeUlEMGdiblZzYkZ4dUlDQWdJSFJvYVhNdWFHOTJaWEpsWkUxaGNtdGxjaUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVRXRnlhMlZ5SUQwZ2JuVnNiRnh1SUNBZ0lIUm9hWE11YldGeWEyVnljeUE5SUZ0ZFhHNGdJQ0FnZEdocGN5NXRZWEpyWlhKTVlYbGxjaUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbWhsWVhSTVlYbGxjaUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbU5zZFhOMFpYSk1ZWGxsY2lBOUlHNTFiR3hjYmx4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQWdQU0F4WEc1Y2JpQWdJQ0IwYUdsekxucHZiMjFUZEdGeWRFTmlJRDBnZEdocGN5NWZlbTl2YlZOMFlYSjBRMkl1WW1sdVpDaDBhR2x6S1Z4dUlDQWdJSFJvYVhNdWVtOXZiVVZ1WkVOaUlEMGdkR2hwY3k1ZmVtOXZiVVZ1WkVOaUxtSnBibVFvZEdocGN5bGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1pISmhkeWh2Y0hScGIyNXpQem9nVFdGeWEyVnljMHhoZVdWeVQzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVkbWx6YVdKc1pTQTlJSFJ5ZFdWY2JpQWdJQ0IwYUdsekxtbHVhWFJQY0hScGIyNXpLRzl3ZEdsdmJuTXBYRzRnSUNBZ2RHaHBjeTVwYm1sMFRXRnlhMlZ5Y3lncFhHNGdJQ0FnZEdocGN5NXBibWwwUlhabGJuUnpLQ2xjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNGdJSEIxWW14cFl5QnlaV1J5WVhjb0tTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxuWnBjMmxpYkdVcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZEdocGN5NXNZWGxsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVzWVhsbGNpNXlaVzF2ZG1Vb0tWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklPUzhtT1dGaU9XSXBPYVdyU0JwYzBOc2RYTjBaWEpjYmlBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxtbHpRMngxYzNSbGNpQW1KaUIwYUdsekxtOXdkR2x2Ym5NdWNtVnVaR1Z5Vkhsd1pTQTlQVDBnSjNCdmFXNTBKeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXNZWGxsY2lBOUlIUm9hWE11WTI5dVptbG5RMngxYzNSbGNreGhlV1Z5S0NsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjM2RwZEdOb0lDaDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlWSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQmpZWE5sSUNkd2IybHVkQ2M2SUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG14aGVXVnlJRDBnZEdocGN5NWpiMjVtYVdkTllYSnJaWEpNWVhsbGNpZ3BYRzRnSUNBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JqWVhObElDZGpiSFZ6ZEdWeUp6b2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXViR0Y1WlhJZ1BTQjBhR2x6TG1OdmJtWnBaME5zZFhOMFpYSk1ZWGxsY2lncFhHNGdJQ0FnSUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmpZWE5sSUNkb1pXRjBKem9nZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YkdGNVpYSWdQU0IwYUdsekxtTnZibVpwWjBobFlYUk1ZWGxsY2lncFhHNGdJQ0FnSUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmtaV1poZFd4ME9pQjdYRzRnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLR0J5Wlc1a1pYSlVlWEJsSU9TNGplYVVyK2FNZ1Z3aUpIdDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlWSGx3WlgxY0ltQXBYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCeVpYUjFjbTRnZEdocGMxeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCelpYUkVZWFJoS0dSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlZ0ZEtTQjdYRzRnSUNBZ2RHaHBjeTVrWVhSaFRHbHpkQ0E5SUdSaGRHRmNiaUFnZlZ4dUlDQndkV0pzYVdNZ2MyVjBUM0IwYVc5dWN5aHZjSFJwYjI1ek9pQk5ZWEpyWlhKelRHRjVaWEpQY0hScGIyNXpMQ0J5WldSeVlYY2dQU0JtWVd4elpTa2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9kR2hwY3k1dmNIUnBiMjV6TENCdmNIUnBiMjV6S1Z4dUlDQWdJR2xtSUNoeVpXUnlZWGNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjbVZrY21GM0tDbGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NIVmliR2xqSUdacGRFSnZkVzVrY3lncElIdGNiaUFnSUNCMGFHbHpMbTFoY0M1bWFYUkNiM1Z1WkhNb2RHaHBjeTVuWlhSQ2IzVnVaSE1vS1NsY2JpQWdmVnh1SUNCd2RXSnNhV01nWjJWMFFtOTFibVJ6S0NrNklFd3VUR0YwVEc1blFtOTFibVJ6Ulhod2NtVnpjMmx2YmlCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YldGeWEyVnljeTVzWlc1bmRHZ2dQRDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXViV0Z3TG1kbGRFSnZkVzVrY3lncFhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG0xaGNtdGxjbk11YldGd0tGeHVJQ0FnSUNBZ0tHMWhjbXRsY2lrZ1BUNWNiaUFnSUNBZ0lDQWdXMjFoY210bGNpNW5aWFJNWVhSTWJtY29LUzVzWVhRc0lHMWhjbXRsY2k1blpYUk1ZWFJNYm1jb0tTNXNibWRkSUdGeklGdHVkVzFpWlhJc0lHNTFiV0psY2wxY2JpQWdJQ0FwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJR1JsYzNSeWIza29LU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXViR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VFdGeWEyVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVRXRnlhMlZ5S1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG0xaGNDNXZabVlvSjNwdmIyMXpkR0Z5ZENjc0lIUm9hWE11ZW05dmJWTjBZWEowUTJJcFhHNGdJQ0FnZEdocGN5NXRZWEF1YjJabUtDZDZiMjl0Wlc1a0p5d2dkR2hwY3k1NmIyOXRSVzVrUTJJcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhSdloyZHNaVlpwYzJsaWJHVW9kbWx6YVdKc1pUb2dZbTl2YkdWaGJpa2dlMXh1SUNBZ0lIUm9hWE11ZG1semFXSnNaU0E5SUhacGMybGliR1ZjYmlBZ0lDQnBaaUFvSVhSb2FYTXViR0Y1WlhJcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1WVdSa1RHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVjbVZ0YjNabFRHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY0hWaWJHbGpJR05vWVc1blpVTnZiRzl5S0dOdmJHOXlPaUJ6ZEhKcGJtY3BJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk11YVdOdmJrTnZiRzl5SUQwZ1kyOXNiM0pjYmlBZ0lDQjBhR2x6TG5KbFpISmhkeWdwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJR05vWVc1blpVbGpiMjRvYVdOdmJsVnVhV052WkdVNklITjBjbWx1WnlrZ2UxeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5NXBZMjl1Vlc1cFkyOWtaU0E5SUdsamIyNVZibWxqYjJSbFhHNGdJQ0FnZEdocGN5NXlaV1J5WVhjb0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCd2FYUmphQ2hwWkRvZ2MzUnlhVzVuS1NCN1hHNGdJQ0FnZEdocGN5NXRZWEpyWlhKekxtWnZja1ZoWTJnb0tHMWhjbXRsY2lrZ1BUNGdlMXh1SUNBZ0lDQWdhV1lnS0cxaGNtdGxjaTVuWlhSRVlYUmhLQ2t1YVdRZ1BUMDlJR2xrS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YldGeWEyVnlRMnhwWTJ0SVlXNWtiR1Z5S0cxaGNtdGxjaWxjYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndjbTkwWldOMFpXUWdYM3B2YjIxVGRHRnlkRU5pS0NrZ2UxeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1MmFYTnBZbXhsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFJvYVhNdWRIbHdaU0E5UFQwZ0oyMWhjbXRsY2ljcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWNtVnVaR1Z5Vkhsd1pTQTlQVDBnSjNCdmFXNTBKeUFtSmlBaGRHaHBjeTV2Y0hScGIyNXpMbWx6UTJ4MWMzUmxjaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFoY0M1eVpXMXZkbVZNWVhsbGNpaDBhR2x6TG0xaGNtdGxja3hoZVdWeUtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbTFoY210bGNreGhlV1Z5S1Z4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWDNwdmIyMUZibVJEWWlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxuUjVjR1VnUFQwOUlDZHRZWEpyWlhJbktTQjdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2xSNWNHVWdQVDA5SUNkd2IybHVkQ2NnSmlZZ0lYUm9hWE11YjNCMGFXOXVjeTVwYzBOc2RYTjBaWElwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTV0WVhKclpYSk1ZWGxsY2lsY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVZV1JrVEdGNVpYSW9kR2hwY3k1dFlYSnJaWEpNWVhsbGNpbGNiaUFnSUNCOVhHNGdJSDFjYmlBZ0x5b3FJT2E0c3VhZmsrUzR1dWFWbytlQ3VlV2J2aUFxTDF4dUlDQndjbTkwWldOMFpXUWdZMjl1Wm1sblRXRnlhMlZ5VEdGNVpYSW9LU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXViV0Z5YTJWeVRHRjVaWElwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViV0Z5YTJWeVRHRjVaWEl1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlYRzRnSUNBZ1kyOXVjM1FnWTJGdWRtRnpTV052Ymt4aGVXVnlJRDBnVEM1allXNTJZWE5KWTI5dVRHRjVaWElvZTMwcExtRmtaRlJ2S0hSb2FYTXViV0Z3S1Z4dUlDQWdJQzh2SU9hM3UrV0tvT2VDdWVXSHUrUzZpK1M3dGx4dUlDQWdJR05oYm5aaGMwbGpiMjVNWVhsbGNpNWhaR1JQYmtOc2FXTnJUR2x6ZEdWdVpYSW9LRjhzSUZ0N0lHUmhkR0U2SUcxaGNtdGxjaUI5WFNrZ1BUNGdlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYSnJaWEpEYkdsamEwaGhibVJzWlhJb2JXRnlhMlZ5SUdGeklFMWhjbXRsY2lsY2JpQWdJQ0I5S1Z4dUlDQWdJQzh2SU9hM3UrV0tvQ0JvYjNabGNpRGt1b3ZrdTdaY2JpQWdJQ0JqWVc1MllYTkpZMjl1VEdGNVpYSXVZV1JrVDI1SWIzWmxja3hwYzNSbGJtVnlLQ2hmTENCYmV5QmtZWFJoT2lCdFlYSnJaWElnZlYwcElEMCtJSHRjYmlBZ0lDQWdJQzh2SU9TNWkrV0pqZWFjaVNCb2IzWmxjaURubW9UbGhiUHBsNjBnZEc5dmJIUnBjRnh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVhRzkyWlhKbFpFMWhjbXRsY2lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1odmRtVnlaV1JOWVhKclpYSXVZMnh2YzJWVWIyOXNkR2x3S0NsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhSb2FYTXVhRzkyWlhKbFpFMWhjbXRsY2lBOUlHMWhjbXRsY2lCaGN5Qk5ZWEpyWlhKY2JseHVJQ0FnSUNBZ2FXWWdLSFJvYVhNdWFHOTJaWEpsWkUxaGNtdGxjaTVuWlhSVWIyOXNkR2x3S0NrcElIdGNiaUFnSUNBZ0lDQWdMeThnNWFhQzVwNmM1YmV5NTd1UDZLNis1NzJ1SUhSdmIyeDBhWEFnNTV1MDVvNmw1YkdWNTZTNklIUnZiMngwYVhCY2JpQWdJQ0FnSUNBZ2RHaHBjeTVvYjNabGNtVmtUV0Z5YTJWeUxtOXdaVzVVYjI5c2RHbHdLQ2xjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQzh2SU9XUXB1V0ltZWU3a2VXdW1pQjBiMjlzZEdsd0lPVzV0dVd4bGVla3VseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxuUnZiMngwYVhCQmRIUnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVvYjNabGNtVmtUV0Z5YTJWeUxtSnBibVJVYjI5c2RHbHdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0p5Y2dLeUIwYUdsekxtaHZkbVZ5WldSTllYSnJaWEl1WjJWMFJHRjBZU2dwVzNSb2FYTXViM0IwYVc5dWN5NTBiMjlzZEdsd1FYUjBjbDFjYmlBZ0lDQWdJQ0FnSUNBcFhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOUtWeHVJQ0FnSUdOaGJuWmhjMGxqYjI1TVlYbGxjaTVoWkdSTllYSnJaWEp6S0hSb2FYTXViV0Z5YTJWeWN5bGNibHh1SUNBZ0lDOHZJT2lubytXR3MrV0luZWFzb2VhNHN1YWZrK1M0amVXSHV1V2J2dWFnaCttWHJ1bWltRnh1SUNBZ0lIUm9hWE11YldGd0xuQmhibFJ2S0hSb2FYTXViV0Z3TG1kbGRFTmxiblJsY2lncEtWeHVYRzRnSUNBZ2RHaHBjeTV0WVhKclpYSk1ZWGxsY2lBOUlHTmhiblpoYzBsamIyNU1ZWGxsY2x4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG0xaGNtdGxja3hoZVdWeVhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lHZGxkRlJ2YjJ4VWFYQkRiMjUwWlc1MEtHUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJTa2dlMXh1SUNBZ0lISmxkSFZ5YmlBbkp5QXJJR1JoZEdGYmRHaHBjeTV2Y0hScGIyNXpMblJ2YjJ4MGFYQkJkSFJ5WFZ4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCcGJtbDBUM0IwYVc5dWN5aHZjSFJwYjI1ek9pQk5ZWEpyWlhKelRHRjVaWEpQY0hScGIyNXpLU0I3WEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z2RHaHBjeTVrWldaaGRXeDBUM0IwYVc5dWN5d2dkR2hwY3k1dmNIUnBiMjV6TENCdmNIUnBiMjV6S1Z4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCcGJtbDBUV0Z5YTJWeWN5Z3BJSHRjYmlBZ0lDQXZMeURudkpQbHJaZ2djMlZuYldWdWRDRG5tN2psaGJQbWxiRG1qYTVjYmlBZ0lDQjBhR2x6TG1OaFkyaGxVMlZuYldWdWRGQmhjbUZ0Y3lncFhHNGdJQ0FnZEdocGN5NXRZWEpyWlhKeklEMGdXMTFjYmlBZ0lDQjBhR2x6TG1SaGRHRk1hWE4wTG1admNrVmhZMmdvS0dSaGRHRXBJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR3hoZVdWeUlEMGdUQzVuWlc5S1UwOU9LR1JoZEdFdVoyVnZiV1YwY25rcExtZGxkRXhoZVdWeWN5Z3BXekJkWEc1Y2JpQWdJQ0FnSUdOdmJuTjBJRzFoY210bGNpQTlJRzVsZHlCTllYSnJaWElvWEc0Z0lDQWdJQ0FnSUZ0Y2JpQWdJQ0FnSUNBZ0lDQW9iR0Y1WlhJZ1lYTWdUQzVOWVhKclpYSXBMbWRsZEV4aGRFeHVaeWdwTG14aGRDeGNiaUFnSUNBZ0lDQWdJQ0FvYkdGNVpYSWdZWE1nVEM1TllYSnJaWElwTG1kbGRFeGhkRXh1WnlncExteHVaeXhjYmlBZ0lDQWdJQ0FnWFN4Y2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xqYjI0NklIUm9hWE11WjJWMFRXRnlhMlZ5U1dOdmJpaGtZWFJoS1N4Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0tWeHVYRzRnSUNBZ0lDQXZMeURsc0libm03amxoYlBsZ0x6bnU1SGxycHJsaUxBZ2JXRnlhMlZ5NUxpS1hHNGdJQ0FnSUNCdFlYSnJaWEl1YzJWMFJHRjBZU2hrWVhSaEtWeHVJQ0FnSUNBZ2RHaHBjeTV0WVhKclpYSnpMbkIxYzJnb2JXRnlhMlZ5S1Z4dUlDQWdJSDBwWEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdsdWFYUkZkbVZ1ZEhNb0tTQjdYRzRnSUNBZ2RHaHBjeTV0WVhBdWIyNG9KM3B2YjIxemRHRnlkQ2NzSUhSb2FYTXVlbTl2YlZOMFlYSjBRMklwWEc0Z0lDQWdkR2hwY3k1dFlYQXViMjRvSjNwdmIyMWxibVFuTENCMGFHbHpMbnB2YjIxRmJtUkRZaWxjYmlBZ0lDQjBhR2x6TG0xaGNDNXZiaWduWTI5dWRHVjRkRzFsYm5VbkxDQmpiMjV6YjJ4bExteHZaeWxjYmlBZ2ZWeHVJQ0F2THlEbHBJVG5rSVlnYldGeWEyVnlJT2VDdWVXSHUrUzZpK1M3dGx4dUlDQndjbWwyWVhSbElHMWhjbXRsY2tOc2FXTnJTR0Z1Wkd4bGNpaHRZWEpyWlhJNklFMWhjbXRsY2lrZ2UxeHVJQ0FnSUhSb2FYTXVabTlqZFhObFpFMWhjbXRsY2lBOUlHMWhjbXRsY2x4dUlDQWdJQzh2SU9XSW9PbVpwT1dKamVTNGdPUzRxdWFVdnVXa3ArV2J2dWFnaDF4dUlDQWdJR2xtSUNoMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVRXRnlhMlZ5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVRXRnlhMlZ5TG5KbGJXOTJaVVp5YjIwb2RHaHBjeTV0WVhBcFhHNGdJQ0FnZlZ4dUlDQWdJQzh2SU9lVW4rYUlrT1c5aytXSmplYVV2dVdrcCtXYnZ1YWdoMXh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbE5ZWEpyWlhJZ1BTQnVaWGNnVFdGeWEyVnlLRzFoY210bGNpNW5aWFJNWVhSTWJtY29LU3dnZTF4dUlDQWdJQ0FnYVdOdmJqb2dkR2hwY3k1blpYUk1ZWEpuWlhKTllYSnJaWEpKWTI5dUtHMWhjbXRsY2k1blpYUkVZWFJoS0NrcExGeHVJQ0FnSUgwcFhHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVUxaGNtdGxjaTVoWkdSVWJ5aDBhR2x6TG0xaGNDbGNibHh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbE5ZWEpyWlhKY2JpQWdJQ0FnSUM1aWFXNWtVRzl3ZFhBb2RHaHBjeTVuWlhSUWIzQjFjRU52Ym5SbGJuUW9iV0Z5YTJWeUxtZGxkRVJoZEdFb0tTa3BYRzRnSUNBZ0lDQXViM0JsYmxCdmNIVndLQ2xjYmlBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVUV0Z5YTJWeUxtOXVLQ2R3YjNCMWNHTnNiM05sSnl3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVUxaGNtdGxjaTV5WlcxdmRtVW9LVnh1SUNBZ0lIMHBYRzRnSUNBZ2JXRnlhMlZ5TG1Oc2IzTmxWRzl2YkhScGNDZ3BYRzVjYmlBZ0lDQjBhR2x6TG0xaGNDNXdZVzVVYnloMGFHbHpMbVp2WTNWelpXUk5ZWEpyWlhJdVoyVjBUR0YwVEc1bktDa3BYRzRnSUNBZ2RHaHBjeTVqYUdGdWJtVnNSblZ1WXlnbmIyNHRZMnhwWTJzdGJXRnlhMlZ5Snl3Z2JXRnlhMlZ5S1Z4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTI5dVptbG5RMngxYzNSbGNreGhlV1Z5S0NrZ2UxeHVJQ0FnSUM4dklPV3hsZWVrdXVpQm11V1FpT1didnVXeGdseHVJQ0FnSUdsbUlDaDBhR2x6TG1Oc2RYTjBaWEpNWVhsbGNpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1amJIVnpkR1Z5VEdGNVpYSXVjbVZ0YjNabEtDbGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NWpiSFZ6ZEdWeVRHRjVaWElnUFNCTUxtMWhjbXRsY2tOc2RYTjBaWEpIY205MWNDaDdYRzRnSUNBZ0lDQnBZMjl1UTNKbFlYUmxSblZ1WTNScGIyNDZJSFJvYVhNdWFXTnZia055WldGMFpVWjFibU4wYVc5dUxtSnBibVFvZEdocGN5a3NYRzRnSUNBZ2ZTbGNiaUFnSUNCMGFHbHpMbU5zZFhOMFpYSk1ZWGxsY2k1aFpHUk1ZWGxsY25Nb1hHNGdJQ0FnSUNCMGFHbHpMbTFoY210bGNuTXViV0Z3S0NodEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzFoY210bGNpQTlJRzVsZHlCTllYSnJaWElvYlM1blpYUk1ZWFJNYm1jb0tTd2dlMXh1SUNBZ0lDQWdJQ0FnSUdsamIyNDZJSFJvYVhNdVoyVjBUV0Z5YTJWeVNXTnZiaWh0TG1kbGRFUmhkR0VvS1Nrc1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJRzFoY210bGNpNXpaWFJFWVhSaEtHMHVaMlYwUkdGMFlTZ3BLVnh1SUNBZ0lDQWdJQ0J0WVhKclpYSXVZbWx1WkZSdmIyeDBhWEFvSnljZ0t5QnRZWEpyWlhJdVoyVjBSR0YwWVNncFczUm9hWE11YjNCMGFXOXVjeTUwYjI5c2RHbHdRWFIwY2wwcFhHNGdJQ0FnSUNBZ0lHMWhjbXRsY2k1aWFXNWtVRzl3ZFhBb2RHaHBjeTVuWlhSUWIzQjFjRU52Ym5SbGJuUW9iV0Z5YTJWeUxtZGxkRVJoZEdFb0tTa3BYRzRnSUNBZ0lDQWdJRzFoY210bGNpNXZiaWduWTJ4cFkyc25MQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NXRZWEpyWlhKRGJHbGphMGhoYm1Sc1pYSW9iV0Z5YTJWeUtWeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiV0Z5YTJWeVhHNGdJQ0FnSUNCOUtWeHVJQ0FnSUNsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amJIVnpkR1Z5VEdGNVpYSmNiaUFnZlZ4dVhHNGdJQzhxS2lEbXVMTG1uNVBrdUxybmc2M2xpcHZsbTc0Z0tpOWNiaUFnY0hKcGRtRjBaU0JqYjI1bWFXZElaV0YwVEdGNVpYSW9LU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXVhR1ZoZEV4aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtaGxZWFJNWVhsbGNpNXlaVzF2ZG1Vb0tWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxtMWhjbXRsY25NdVptOXlSV0ZqYUNnb2JXRnlhMlZ5S1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCc1lYUk1ibWNnUFNCdFlYSnJaWEl1WjJWMFRHRjBURzVuS0NsY2JpQWdJQ0FnSUdOdmJuTjBJR1JwYldWdWMybHZia0YwZEhJZ1BWeHVJQ0FnSUNBZ0lDQjBhR2x6TG05d2RHbHZibk11YUdWaGRFOXdkR2x2Ym5NZ0ppWWdkR2hwY3k1dmNIUnBiMjV6TG1obFlYUlBjSFJwYjI1ekxtUnBiV1Z1YzJsdmJrRjBkSEpjYmlBZ0lDQWdJR3hsZENCaGJIUWdQVnh1SUNBZ0lDQWdJQ0FvWkdsdFpXNXphVzl1UVhSMGNpQW1KaUJ0WVhKclpYSXVaMlYwUkdGMFlTZ3BXMlJwYldWdWMybHZia0YwZEhKZEtTQjhmRnh1SUNBZ0lDQWdJQ0IwYUdsekxtOXdkR2x2Ym5NdWFHVmhkRTl3ZEdsdmJuTXViV0Y0WEc0Z0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdGc2RDQWhQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0FnSUNBZ1lXeDBJRDBnZEdocGN5NXZjSFJwYjI1ekxtaGxZWFJQY0hScGIyNXpMbTFoZUZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYldGeWEyVnlMbk5sZEV4aGRFeHVaeWhNTG14aGRFeHVaeWhzWVhSTWJtY3ViR0YwTENCc1lYUk1ibWN1Ykc1bkxDQmhiSFFwS1Z4dUlDQWdJSDBwWEc0Z0lDQWdkR2hwY3k1b1pXRjBUR0Y1WlhJZ1BTQk1MbWhsWVhSTVlYbGxjaWhjYmlBZ0lDQWdJSFJvYVhNdWJXRnlhMlZ5Y3k1dFlYQW9LR2wwS1NBOVBpQnBkQzVuWlhSTVlYUk1ibWNvS1Nrc1hHNGdJQ0FnSUNBdkx5QlVUMFJQT2lEa3ZiL25sS2dnYldWeVoyVkRiMjVtYVdjZzU2NkE1WXlXWEc0Z0lDQWdJQ0JQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0IwYUdsekxtOXdkR2x2Ym5NdWFHVmhkRTl3ZEdsdmJuTXNJSHNnYldsdVQzQmhZMmwwZVRvZ01TQjlLVnh1SUNBZ0lDbGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NW9aV0YwVEdGNVpYSmNiaUFnZlZ4dVhHNGdJSEJ5YVhaaGRHVWdaMlYwVEdGeVoyVnlUV0Z5YTJWeVNXTnZiaWhrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZloyVjBUV0Z5YTJWeVNXTnZiaWhrWVhSaExDQjBjblZsS1Z4dUlDQjlYRzVjYmlBZ2NISnBkbUYwWlNCblpYUk5ZWEpyWlhKSlkyOXVLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5blpYUk5ZWEpyWlhKSlkyOXVLR1JoZEdFc0lHWmhiSE5sS1Z4dUlDQjlYRzVjYmlBZ0x5b3FJT2lPdCtXUGx1VzlrK1dKalNCdFlYSnJaWElnNlp5QTZLYUI1YkdWNTZTNjU1cUVJR2xqYjI0Z0tpOWNiaUFnY0hKcGRtRjBaU0JmWjJWMFRXRnlhMlZ5U1dOdmJpaGNiaUFnSUNCa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwc1hHNGdJQ0FnYVhOTVlYSm5aWEk2SUdKdmIyeGxZVzVjYmlBZ0tUb2dUQzVKWTI5dUlId2dUQzVFYVhaSlkyOXVJSHRjYmlBZ0lDQmpiMjV6ZENCcFkyOXVVMmw2WlNBOUlIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVUybDZaVnh1SUNBZ0lHTnZibk4wSUdsamIyNUJibU5vYjNJZ1BTQjBhR2x6TG05d2RHbHZibk11YVdOdmJrRnVZMmh2Y2x4dUlDQWdJR052Ym5OMElHeGhjbWRsY2tsamIyNVRhWHBsSUQwZ1cybGpiMjVUYVhwbFd6QmRJQ29nTVM0MUxDQnBZMjl1VTJsNlpWc3hYU0FxSURFdU5WMGdZWE1nVzF4dUlDQWdJQ0FnYm5WdFltVnlMRnh1SUNBZ0lDQWdiblZ0WW1WeVhHNGdJQ0FnWFZ4dUlDQWdJR052Ym5OMElHeGhjbWRsY2tsamIyNUJibU5vYjNJZ1BTQmJhV052YmtGdVkyaHZjbHN3WFNBcUlERXVOU3dnYVdOdmJrRnVZMmh2Y2xzeFhTQXFJREV1TlYwZ1lYTWdXMXh1SUNBZ0lDQWdiblZ0WW1WeUxGeHVJQ0FnSUNBZ2JuVnRZbVZ5WEc0Z0lDQWdYVnh1WEc0Z0lDQWdZMjl1YzNRZ2FXTnZia052Ykc5eUlEMGdkR2hwY3k1dmNIUnBiMjV6TG1samIyNURiMnh2Y2x4dVhHNGdJQ0FnYzNkcGRHTm9JQ2gwYUdsekxtOXdkR2x2Ym5NdWFXTnZibFI1Y0dVcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJsdFlXZGxKem9nZTF4dUlDQWdJQ0FnSUNBdkx5QnlaWFIxY200Z1RDNXBZMjl1S0h0Y2JpQWdJQ0FnSUNBZ0x5OGdJQ0JwWTI5dVZYSnNPaUIwYUdsekxtOXdkR2x2Ym5NdWFXTnZia2x0WVdkbFZYSnNMRnh1SUNBZ0lDQWdJQ0F2THlBZ0lHbGpiMjVUYVhwbE9pQnBjMHhoY21kbGNpQS9JR3hoY21kbGNrbGpiMjVUYVhwbElEb2dhV052YmxOcGVtVXNYRzRnSUNBZ0lDQWdJQzh2SUNBZ2FXTnZia0Z1WTJodmNpeGNiaUFnSUNBZ0lDQWdMeThnZlNsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdOaGMyVWdKMlp2Ym5SZlkyeGhjM01uT2x4dUlDQWdJQ0FnWTJGelpTQW5jM2x0WW05c0p6cGNiaUFnSUNBZ0lHTmhjMlVnSjNWdWFXTnZaR1VuT2lCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCTUxtUnBka2xqYjI0b2UxeHVJQ0FnSUNBZ0lDQWdJR2gwYld3NklIUm9hWE11WjJWMFEzVnpkRzl0U1dOdmJraFVUVXdvWkdGMFlTd2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXTnZibE5wZW1VNklHbHpUR0Z5WjJWeUlEOGdiR0Z5WjJWeVNXTnZibE5wZW1VZ09pQnBZMjl1VTJsNlpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdsamIyNURiMnh2Y2l4Y2JpQWdJQ0FnSUNBZ0lDQjlLU3hjYmlBZ0lDQWdJQ0FnSUNCamJHRnpjMDVoYldVNklHbHpUR0Z5WjJWeUlEOGdKMnhoY21kbExXUnBkaTFwWTI5dUxXMWhjbXRsY2ljZ09pQW5KeXhjYmlBZ0lDQWdJQ0FnSUNCcFkyOXVVMmw2WlRvZ2FYTk1ZWEpuWlhJZ1B5QnNZWEpuWlhKSlkyOXVVMmw2WlNBNklHbGpiMjVUYVhwbExGeHVJQ0FnSUNBZ0lDQWdJR2xqYjI1QmJtTm9iM0k2SUdselRHRnlaMlZ5SUQ4Z2JHRnlaMlZ5U1dOdmJrRnVZMmh2Y2lBNklHbGpiMjVCYm1Ob2IzSXNYRzRnSUNBZ0lDQWdJQ0FnZEc5dmJIUnBjRUZ1WTJodmNqb2dhWE5NWVhKblpYSmNiaUFnSUNBZ0lDQWdJQ0FnSUQ4Z1d6QXNJQzFzWVhKblpYSkpZMjl1UVc1amFHOXlXekZkSUM4Z01sMWNiaUFnSUNBZ0lDQWdJQ0FnSURvZ1d6QXNJQzFwWTI5dVFXNWphRzl5V3pGZElDOGdNbDBzWEc0Z0lDQWdJQ0FnSUNBZ2NHOXdkWEJCYm1Ob2IzSTZJR2x6VEdGeVoyVnlYRzRnSUNBZ0lDQWdJQ0FnSUNBL0lGc3dMQ0F0YkdGeVoyVnlTV052YmtGdVkyaHZjbHN4WFNBdklESmRYRzRnSUNBZ0lDQWdJQ0FnSUNBNklGc3dMQ0F0YVdOdmJrRnVZMmh2Y2xzeFhTQXZJREpkTEZ4dUlDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1pHVm1ZWFZzZERvZ2UxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1lISmxibVJsY2xSNWNHVWc1TGlONklPOTVMaTZJQ1I3ZEdocGN5NXZjSFJwYjI1ekxtbGpiMjVVZVhCbGZXQXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1oyVjBRM1Z6ZEc5dFNXTnZia2hVVFV3b1hHNGdJQ0FnWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0TEZ4dUlDQWdJRzl3ZEdsdmJuTS9PaUJKWTI5dVVtVnVaR1Z5Um5WdVkwOXdkR2x2Ymx4dUlDQXBPaUJ6ZEhKcGJtY2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWFXTnZibEpsYm1SbGNtVnlLU0I3WEc0Z0lDQWdJQ0J2Y0hScGIyNXpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDdmU3dnZEdocGN5NXZjSFJwYjI1ekxDQnZjSFJwYjI1ektWeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXViM0IwYVc5dWN5NXBZMjl1VW1WdVpHVnlaWElvWkdGMFlTd2diM0IwYVc5dWN5bGNiaUFnSUNCOVhHNGdJQ0FnYzNkcGRHTm9JQ2gwYUdsekxtOXdkR2x2Ym5NdWNtVnVaR1Z5VUc5cGJuUkRiMnh2Y2xSNWNHVXBJSHRjYmlBZ0lDQWdJR05oYzJVZ0ozTnBibWRzWlNjNklIdGNiaUFnSUNBZ0lDQWdjM2RwZEdOb0lDaDBhR2x6TG05d2RHbHZibk11YVdOdmJsUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMeURrdmIvbmxLZ2dZMnhoYzNOY2JpQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkbWIyNTBYMk5zWVhOekp6b2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdrZ1kyeGhjM005WENJa2UzUm9hWE11YjNCMGFXOXVjeTVwWTI5dVEyeGhjM045WENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRIbHNaVDFjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0k2SUNSN2IzQjBhVzl1Y3k1cFkyOXVRMjlzYjNKOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUFrZTI5d2RHbHZibk11YVdOdmJsTnBlbVZiTUYxOWNIZzdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2UGx4dUlDQWdJQ0FnSUNBZ0lDQWdZRnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQXZMeURrdmIvbmxLZ2djM1puWEc0Z0lDQWdJQ0FnSUNBZ1kyRnpaU0FuYzNsdFltOXNKem9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BITjJaeUJqYkdGemN6MWNJbWxqYjI0dGMzbHRZbTlzWENJZ1lYSnBZUzFvYVdSa1pXNDlYQ0owY25WbFhDSStYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSFZ6WlNCNGJHbHVhenBvY21WbVBWd2lKSHQwYUdsekxtOXdkR2x2Ym5NdWFXTnZibE41YldKdmJIMWNJaUF2UGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4TDNOMlp6NWNiaUFnSUNBZ0lDQWdJQ0FnSUdCY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnTHk4ZzVMMi81NVNvSUhWdWFXTnZaR1ZjYmlBZ0lDQWdJQ0FnSUNCallYTmxJQ2QxYm1samIyUmxKem9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1BHbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiR0Z6Y3oxY0lpUjdkR2hwY3k1dmNIUnBiMjV6TG1samIyNURiR0Z6YzMxY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsUFZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ0pIdHZjSFJwYjI1ekxtbGpiMjVEYjJ4dmNuMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SUNSN2IzQjBhVzl1Y3k1cFkyOXVVMmw2WlZzd1hYMXdlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBa2UzUm9hWE11YjNCMGFXOXVjeTVwWTI5dVZXNXBZMjlrWlgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5cFBseHVJQ0FnSUNBZ0lDQWdJQ0FnWUZ4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1kyRnpaU0FuYzJWbmJXVnVkR1ZrSnpvZ2UxeHVJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVZIbHdaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJT1M5ditlVXFDQmpiR0Z6YzF4dUlDQWdJQ0FnSUNBZ0lHTmhjMlVnSjJadmJuUmZZMnhoYzNNbk9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0E4YVZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc1lYTnpQVndpSkh0MGFHbHpMbTl3ZEdsdmJuTXVhV052YmtOc1lYTnpmVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVTlYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJHOXlPaUFrZTNSb2FYTXVaMlYwVTJWbmJXVnVkR1ZrVFdGeWEyVnlRMjlzYjNJb1pHRjBZU2w5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQWtlMjl3ZEdsdmJuTXVhV052YmxOcGVtVmJNRjE5Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1lGeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBdkx5RGt2Yi9ubEtnZ2MzWm5YRzRnSUNBZ0lDQWdJQ0FnWTJGelpTQW5jM2x0WW05c0p6b2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEhOMlp5QmpiR0Z6Y3oxY0ltbGpiMjR0YzNsdFltOXNYQ0lnWVhKcFlTMW9hV1JrWlc0OVhDSjBjblZsWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BIVnpaU0I0YkdsdWF6cG9jbVZtUFZ3aUpIdDBhR2x6TG05d2RHbHZibk11YVdOdmJsTjViV0p2YkgxY0lpQXZQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThMM04yWno1Y2JpQWdJQ0FnSUNBZ0lDQWdJR0JjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdMeThnNUwyLzU1U29JSFZ1YVdOdlpHVmNiaUFnSUNBZ0lDQWdJQ0JqWVhObElDZDFibWxqYjJSbEp6b2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamJHRnpjejFjSWlSN2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1RGJHRnpjMzFjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxQVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSkh0MGFHbHpMbWRsZEZObFoyMWxiblJsWkUxaGNtdGxja052Ykc5eUtHUmhkR0VwZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZiblF0YzJsNlpUb2dKSHR2Y0hScGIyNXpMbWxqYjI1VGFYcGxXekJkZlhCNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ1I3ZEdocGN5NXZjSFJwYjI1ekxtbGpiMjVWYm1samIyUmxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMmsrWEc0Z0lDQWdJQ0FnSUNBZ0lDQmdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JrWldaaGRXeDBPaUI3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjYmlBZ0lDQWdJQ0FnSUNCZ2NtVnVaR1Z5VUc5cGJuUkRiMnh2Y2xSNWNHVWc1TGlONXBTdjVveUJYQ0lrZTNSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIybHVkRU52Ykc5eVZIbHdaWDFjSW1CY2JpQWdJQ0FnSUNBZ0tWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdOaFkyaGxVMlZuYldWdWRGQmhjbUZ0Y3lncElIdGNiaUFnSUNCamIyNXpkQ0J6WldkdFpXNTBaV1JNWlc1bmRHZ2dQU0IwYUdsekxtOXdkR2x2Ym5NdWMyVm5iV1Z1ZEdWa1EyOXNiM0p6TG14bGJtZDBhRnh1SUNBZ0lHeGxkQ0J0WVhoV1lXd2dQU0F0U1c1bWFXNXBkSGxjYmlBZ0lDQnNaWFFnYldsdVZtRnNJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQm1iM0lnS0dOdmJuTjBJR1JoZEdFZ2IyWWdkR2hwY3k1a1lYUmhUR2x6ZENrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZG1Gc0lEMGdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjMlZuYldWdWRHVmtRWFIwY2wxY2JpQWdJQ0FnSUcxaGVGWmhiQ0E5SUUxaGRHZ3ViV0Y0S0cxaGVGWmhiQ3dnZG1Gc0tWeHVJQ0FnSUNBZ2JXbHVWbUZzSUQwZ1RXRjBhQzV0YVc0b2JXbHVWbUZzTENCMllXd3BYRzRnSUNBZ2ZWeHVJQ0FnSUdOdmJuTjBJSE4wWlhBZ1BTQW9iV0Y0Vm1Gc0lDMGdiV2x1Vm1Gc0lDc2dNU2tnTHlCelpXZHRaVzUwWldSTVpXNW5kR2hjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkUxcGJpQTlJRzFwYmxaaGJGeHVJQ0FnSUhSb2FYTXVjMlZuYldWdWRHVmtVM1JsY0NBOUlITjBaWEJjYmlBZ2ZWeHVJQ0J3Y21sMllYUmxJR2RsZEZObFoyMWxiblJsWkUxaGNtdGxja052Ykc5eUtHUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJTazZJSE4wY21sdVp5QjdYRzRnSUNBZ1kyOXVjM1FnZG1Gc0lEMGdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjMlZuYldWdWRHVmtRWFIwY2wxY2JpQWdJQ0JqYjI1emRDQmpiMnh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JEYjJ4dmNuTmJYRzRnSUNBZ0lDQndZWEp6WlVsdWRDZ25KeUFySUNoMllXd2dMU0IwYUdsekxuTmxaMjFsYm5SbFpFMXBiaWtnTHlCMGFHbHpMbk5sWjIxbGJuUmxaRk4wWlhBc0lERXdLVnh1SUNBZ0lGMWNiaUFnSUNCeVpYUjFjbTRnWTI5c2IzSmNiaUFnZlZ4dUlDQndjbWwyWVhSbElHZGxkRkJ2Y0hWd1EyOXVkR1Z1ZENoa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwcElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlBbkoxeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RIbHdaVzltSUhSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWUNSN2RHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjbjA2SUNSN1pHRjBZVnQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeVhYMWdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjaUE5UFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCZ0pIdDBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5TG14aFltVnNmVG9nSkh0Y2JpQWdJQ0FnSUNBZ1pHRjBZVnQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUxuWmhiSFZsWFZ4dUlDQWdJQ0FnZldCY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY0hKcGRtRjBaU0JwWTI5dVEzSmxZWFJsUm5WdVkzUnBiMjRvWTJ4MWMzUmxjam9nVEM1TllYSnJaWEp6UTJ4MWMzUmxjaWtnZTF4dUlDQWdJSEpsZEhWeWJpQk1MbVJwZGtsamIyNG9lMXh1SUNBZ0lDQWdhSFJ0YkRvZ1lGeHVJQ0FnSUNBZ0lDQThaR2wyWEc0Z0lDQWdJQ0FnSUNBZ2MzUjViR1U5WENKY2JpQWdJQ0FnSUNBZ0lDQWdJR0p2Y21SbGNpMXlZV1JwZFhNNklEVXdKVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSmhZMnRuY205MWJtUTZJQ1I3YkdsbmFIUmxiaWgwYUdsekxtOXdkR2x2Ym5NdWFXTnZia052Ykc5eUtYMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCM2FXUjBhRG9nTlRCd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUdobGFXZG9kRG9nTlRCd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUc5d1lXTnBkSGs2SURBdU9EdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aVBseHVJQ0FnSUNBZ0lDQWdJRHhrYVhaY2JpQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bFBWd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIUmxlSFF0WVd4cFoyNDZJR05sYm5SbGNqdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2JHbHVaUzFvWldsbmFIUTZJRE13Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJRFV3SlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkRvZ0pIdDBhR2x6TG05d2RHbHZibk11YVdOdmJrTnZiRzl5ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZJRE15Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdobGFXZG9kRG9nTXpKd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2JXRnlaMmx1T2lBNWNIZzdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiRzl5T2lCM2FHbDBaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUF4TkhCNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FrZTJOc2RYTjBaWEl1WjJWMFEyaHBiR1JEYjNWdWRDZ3BmVnh1SUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lHQXNYRzRnSUNBZ0lDQnBZMjl1VTJsNlpUb2dXelF3TENBME1GMHNYRzRnSUNBZ2ZTbGNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJRkJ2YkhsbmIyNGdabkp2YlNBbkxpOVFiMng1WjI5dUoxeHVhVzF3YjNKMElGQnZiSGxuYjI1elRHRjVaWElzSUhzZ1VHOXNlV2R2Ymt4aGVXVnlUM0IwYVc5dWN5QjlJR1p5YjIwZ0p5NHZVRzlzZVdkdmJuTk1ZWGxsY2lkY2JtbHRjRzl5ZENCN0lFUmhkR0ZNYVhOMFNYUmxiU3dnUTJoaGJtNWxiRVoxYm1NZ2ZTQm1jbTl0SUNjdUxpOWtaV1pwYm1sMGFXOXVjeWRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdSM0pwWkhOTVlYbGxjaUJsZUhSbGJtUnpJRkJ2YkhsbmIyNXpUR0Y1WlhJZ2UxeHVJQ0J3Y21sMllYUmxJSEJ5YjNCTllYaE1aVzVuZEdnNklHNTFiV0psY2x4dUlDQmpiMjV6ZEhKMVkzUnZjaWhjYmlBZ0lDQnRZWEE2SUV3dVRXRndMRnh1SUNBZ0lHUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFN4Y2JpQWdJQ0J2Y0hScGIyNXpPaUJRYjJ4NVoyOXVUR0Y1WlhKUGNIUnBiMjV6TEZ4dUlDQWdJR05vWVc1dVpXeEdkVzVqT2lCRGFHRnVibVZzUm5WdVkxeHVJQ0FwSUh0Y2JpQWdJQ0J6ZFhCbGNpaHRZWEFzSUdSaGRHRk1hWE4wTENCdmNIUnBiMjV6TENCamFHRnVibVZzUm5WdVl5bGNiaUFnSUNCMGFHbHpMbkJ5YjNCTllYaE1aVzVuZEdnZ1BTQXRNVnh1SUNCOVhHNGdJSEIxWW14cFl5QnlaV1J5WVhjb0tTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxuWnBjMmxpYkdVcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZEdocGN5NXNZWGxsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVzWVhsbGNpNXlaVzF2ZG1Vb0tWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxteGhlV1Z5SUQwZ2RHaHBjeTVqYjI1bWFXZEhjbWxrVEdGNVpYSW9LVnh1SUNBZ0lIUm9hWE11YldGd0xtRmtaRXhoZVdWeUtIUm9hWE11YkdGNVpYSXBYRzRnSUNBZ0x5OGdkRzl2YkhScGNDRG1uSW5sajYvb2c3M3BuSURvcG9Ibm03VG1qcVhsc1pYbnBMcnZ2SXpwbklEb3BvSGxuS2dnY0c5c2VXZHZiaURtdDd2bGlxRGxpTERsbkxEbG03N2t1SXJrdVl2bGtJN21pWTNsajYva3U2WHZ2SXptaVlEa3U2WHBuSURvcG9IbHU3Ym92NS9vcnI3bnZhNWNiaUFnSUNCMGFHbHpMbU52Ym1acFoxUnZiMngwYVhBb0tWeHVJQ0FnSUhKbGRIVnliaUIwYUdselhHNGdJSDFjYmlBZ2NIVmliR2xqSUhSdloyZHNaVlJ2YjJ4MGFYQW9kbWx6YVdKc1pUb2dZbTl2YkdWaGJpa2dlMXh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ2FXWWdLSEJ2YkhsbmIyNHVaMlYwVkc5dmJIUnBjQ2dwS1NCN1hHNGdJQ0FnSUNBZ0lIQnZiSGxuYjI0dVoyVjBWRzl2YkhScGNDZ3BMbk5sZEU5d1lXTnBkSGtvZG1semFXSnNaU0EvSURFZ09pQXdLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBYRzRnSUgxY2JpQWdjSEp2ZEdWamRHVmtJR2x1YVhSRmRtVnVkQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtMWhjQzV2YmlnbmVtOXZiU2NzSUhSb2FYTXVlbTl2YlVoaGJtUnNaWEl1WW1sdVpDaDBhR2x6S1NsY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdOdmJtWnBaMVJ2YjJ4MGFYQW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2NtOXdUV0Y0VEdWdVozUm9JRDBnZEdocGN5NW5aWFJRY205d1RXRjRUR1Z1WjNSb0tDbGNiaUFnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5SdmIyeDBhWEJCZEhSeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG5CdmJIbG5iMjV6TG1admNrVmhZMmdvS0hCdmJIbG5iMjRwSUQwK0lIdGNiaUFnSUNBZ0lDQWdjRzlzZVdkdmJpNWlhVzVrVkc5dmJIUnBjQ2gwYUdsekxtZGxkRlJ2YjJ4VWFYQkRiMjUwWlc1MEtIQnZiSGxuYjI0dVoyVjBSR0YwWVNncEtTd2dlMXh1SUNBZ0lDQWdJQ0FnSUhCbGNtMWhibVZ1ZERvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNCa2FYSmxZM1JwYjI0NklDZGpaVzUwWlhJbkxGeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdmU2xjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQmpiMjVtYVdkSGNtbGtUR0Y1WlhJb0tTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVUR0Y1WlhJZ1BTQk1MbXhoZVdWeVIzSnZkWEFvS1Z4dUlDQWdJSFJvYVhNdWNHOXNlV2R2Ym5NZ1BTQjBhR2x6TG5CdmJIbG5iMjV6TG0xaGNDZ29jRzlzZVdkdmJpa2dQVDRnZTF4dUlDQWdJQ0FnYkdWMElHTnZiRzl5SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbU52Ykc5eVhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5KbGJtUmxjbEJ2YkhsbmIyNURiMnh2Y2xSNWNHVWdQVDA5SUNkelpXZHRaVzUwWldRbktTQjdYRzRnSUNBZ0lDQWdJR052Ykc5eUlEMGdkR2hwY3k1blpYUlRaV2R0Wlc1MFpXUlFiMng1WjI5dVEyOXNiM0lvY0c5c2VXZHZiaTVuWlhSRVlYUmhLQ2twWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JqYjI1emRDQnZjSFJwYjI1ek9pQk1MbEJ2Ykhsc2FXNWxUM0IwYVc5dWN5QTlJRTlpYW1WamRDNWhjM05wWjI0b2UzMHNJSFJvYVhNdWIzQjBhVzl1Y3l3Z2UxeHVJQ0FnSUNBZ0lDQmpiMnh2Y2l4Y2JpQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBdkx5RHBoNDNtbHJEbHVwVG5sS2dnYjNCMGFXOXVjMXh1SUNBZ0lDQWdZMjl1YzNRZ2JtVjNVRzlzZVdkdmJpQTlJRzVsZHlCUWIyeDVaMjl1S0hCdmJIbG5iMjR1WjJWMFRHRjBURzVuY3lncExDQnZjSFJwYjI1ektWeHVJQ0FnSUNBZ2JtVjNVRzlzZVdkdmJpNXpaWFJFWVhSaEtIQnZiSGxuYjI0dVoyVjBSR0YwWVNncEtWeHVJQ0FnSUNBZ2JtVjNVRzlzZVdkdmJpNXZiaWduWTJ4cFkyc25MQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQzh2SUhSb2FYTXVjRzlzZVdkdmJrTnNhV05yU0dGdVpHeGxjaWh3YjJ4NVoyOXVLVnh1SUNBZ0lDQWdmU2xjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlLU0I3WEc0Z0lDQWdJQ0FnSUc1bGQxQnZiSGxuYjI0dVltbHVaRkJ2Y0hWd0tIUm9hWE11WjJWMFVHOXdkWEJEYjI1MFpXNTBLRzVsZDFCdmJIbG5iMjR1WjJWMFJHRjBZU2dwS1NsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhKbGRIVnliaUJ1WlhkUWIyeDVaMjl1WEc0Z0lDQWdmU2xjYmlBZ0lDQjBhR2x6TG5CdmJIbG5iMjV6TG1admNrVmhZMmdvS0hCdmJIbG5iMjRwSUQwK0lIdGNiaUFnSUNBZ0lIUm9hWE11Y0c5c2VXZHZia3hoZVdWeUxtRmtaRXhoZVdWeUtIQnZiSGxuYjI0cFhHNGdJQ0FnZlNsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1d2IyeDVaMjl1VEdGNVpYSmNiaUFnZlZ4dUlDQndjbWwyWVhSbElIcHZiMjFJWVc1a2JHVnlLQ2tnZTF4dUlDQWdJR052Ym5OMElIQnZiSGxuYjI0Z1BTQjBhR2x6TG5CdmJIbG5iMjV6V3pCZFhHNGdJQ0FnYVdZZ0tDRndiMng1WjI5dUtTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1MGIyZG5iR1ZVYjI5c2RHbHdLRnh1SUNBZ0lDQWdkR2hwY3k1blpYUlNaV04wWVc1bmJHVlhhV1IwYUNod2IyeDVaMjl1S1NBK1hHNGdJQ0FnSUNBZ0lIUm9hWE11WjJWMFZHOXZiSFJwY0UxaGVGZHBaSFJvS0hSb2FYTXVjSEp2Y0UxaGVFeGxibWQwYUNsY2JpQWdJQ0FwWEc0Z0lIMWNiaUFnY0hKcGRtRjBaU0JuWlhSU1pXTjBZVzVuYkdWWGFXUjBhQ2h3YjJ4NVoyOXVPaUJRYjJ4NVoyOXVLU0I3WEc0Z0lDQWdjbVYwZFhKdUlDaGNiaUFnSUNBZ0lIUm9hWE11YldGd0xteGhkRXh1WjFSdlRHRjVaWEpRYjJsdWRDaHdiMng1WjI5dUxtZGxkRUp2ZFc1a2N5Z3BMbWRsZEU1dmNuUm9SV0Z6ZENncEtTNTRJQzFjYmlBZ0lDQWdJSFJvYVhNdWJXRndMbXhoZEV4dVoxUnZUR0Y1WlhKUWIybHVkQ2h3YjJ4NVoyOXVMbWRsZEVKdmRXNWtjeWdwTG1kbGRGTnZkWFJvVjJWemRDZ3BLUzU0WEc0Z0lDQWdLVnh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdaMlYwVkc5dmJIUnBjRTFoZUZkcFpIUm9LSFJsZUhSTVpXNW5kR2c2SUc1MWJXSmxjaWtnZTF4dUlDQWdJSEpsZEhWeWJpQjBaWGgwVEdWdVozUm9JQ29nTVRJZ0t5QXhORnh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdaMlYwVUhKdmNFMWhlRXhsYm1kMGFDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtOXdJRDBnZEdocGN5NXZjSFJwYjI1ekxuUnZiMngwYVhCQmRIUnlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjRzlzZVdkdmJuTmNiaUFnSUNBZ0lDNXRZWEFvS0hCdmJIbG5iMjRwSUQwK0lHQWtlM0J2YkhsbmIyNHVaMlYwUkdGMFlTZ3BXM0J5YjNCZGZXQXViR1Z1WjNSb0tWeHVJQ0FnSUNBZ0xuSmxaSFZqWlNnb2NISmxkaXdnWTNWeWNpa2dQVDRnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnVFdGMGFDNXRZWGdvY0hKbGRpd2dZM1Z5Y2lsY2JpQWdJQ0FnSUgwc0lEQXBYRzRnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0I3SUVSaGRHRk1hWE4wU1hSbGJTQjlJR1p5YjIwZ0p5NHVMMlJsWm1sdWFYUnBiMjV6SjF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYjJ4NVoyOXVJR1Y0ZEdWdVpITWdUQzVRYjJ4NVoyOXVJSHRjYmlBZ0x5OGdkSE5zYVc1ME9tUnBjMkZpYkdVdGJtVjRkQzFzYVc1bE9uWmhjbWxoWW14bExXNWhiV1ZjYmlBZ2NISnBkbUYwWlNCZlgyUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJWeHVJQ0JqYjI1emRISjFZM1J2Y2loY2JpQWdJQ0JzWVhSc2JtZHpPbHh1SUNBZ0lDQWdmQ0JNTGt4aGRFeHVaMFY0Y0hKbGMzTnBiMjViWFZ4dUlDQWdJQ0FnZkNCTUxreGhkRXh1WjBWNGNISmxjM05wYjI1YlhWdGRYRzRnSUNBZ0lDQjhJRXd1VEdGMFRHNW5SWGh3Y21WemMybHZibHRkVzExYlhTeGNiaUFnSUNCdmNIUnBiMjV6UHpvZ1RDNVFiMng1YkdsdVpVOXdkR2x2Ym5OY2JpQWdLU0I3WEc0Z0lDQWdjM1Z3WlhJb2JHRjBiRzVuY3l3Z2IzQjBhVzl1Y3lsY2JpQWdmVnh1SUNCd2RXSnNhV01nYzJWMFJHRjBZU2hrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwSUh0Y2JpQWdJQ0IwYUdsekxsOWZaR0YwWVNBOUlHUmhkR0ZjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMlYwUkdGMFlTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWDJSaGRHRmNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJSHNnYkdsbmFIUmxiaXdnWkdGeWEyVnVJSDBnWm5KdmJTQW5MaTR2ZFhScGJITXZhVzVrWlhnblhHNXBiWEJ2Y25RZ2V5QkVZWFJoVEdsemRFbDBaVzBzSUVOb1lXNXVaV3hHZFc1aklIMGdabkp2YlNBbkxpNHZaR1ZtYVc1cGRHbHZibk1uWEc1cGJYQnZjblFnVUc5c2VXZHZiaUJtY205dElDY3VMMUJ2YkhsbmIyNG5YRzVjYmk4cUtpRG11TExtbjVQcG9wem9pYkxtb0xmbHZJOGc1WTJWNklteWZPV0lodWF1dFNBcUwxeHVkSGx3WlNCUWIyeDVaMjl1VEdGNVpYSlNaVzVrWlhKRGIyeHZjbFI1Y0dVZ1BTQW5jMmx1WjJ4bEp5QjhJQ2R6WldkdFpXNTBaV1FuWEc1MGVYQmxJRU52Ykc5eVRXOWtaU0E5SUNka1lYSnJaVzRuSUh3Z0oyeHBaMmgwWlc0bklId2dKMjV2Y20xaGJDZGNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdVRzlzZVdkdmJreGhlV1Z5VDNCMGFXOXVjeUJsZUhSbGJtUnpJRXd1VUc5c2VXeHBibVZQY0hScGIyNXpJSHRjYmlBZ2NtVnVaR1Z5VUc5c2VXZHZia052Ykc5eVZIbHdaVG9nVUc5c2VXZHZia3hoZVdWeVVtVnVaR1Z5UTI5c2IzSlVlWEJsWEc1Y2JpQWdMeW9xSUhCdmNIVndJT1d4bGVla3V1V3RsK2F1dFNBcUwxeHVJQ0J3YjNCMWNFRjBkSEkvT2lCemRISnBibWNnZkNCN0lHeGhZbVZzT2lCemRISnBibWM3SUhaaGJIVmxPaUJoYm5rZ2ZWeHVJQ0F2S2lvZ2RHOXZiSFJwY0NEbHNaWG5wTHJsclpmbXJyVWdLaTljYmlBZ2RHOXZiSFJwY0VGMGRISS9PaUJ6ZEhKcGJtZGNibHh1SUNCdmNHRmphWFI1UHpvZ2JuVnRZbVZ5WEc1Y2JpQWdMeW9xSU9XSWh1YXV0ZWE0c3VhZmsrZTduK2l1b2VXdGwrYXV0U0FxTDF4dUlDQnpaV2R0Wlc1MFpXUkJkSFJ5UHpvZ2MzUnlhVzVuWEc0Z0lITmxaMjFsYm5SbFpFTnZiRzl5Y3o4NklITjBjbWx1WjF0ZFhHNTlYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWIyeDVaMjl1YzB4aGVXVnlJSHRjYmlBZ2NIVmliR2xqSUhSNWNHVTZJSE4wY21sdVoxeHVYRzRnSUhCeWIzUmxZM1JsWkNCMmFYTnBZbXhsT2lCaWIyOXNaV0Z1WEc0Z0lIQnliM1JsWTNSbFpDQnNZWGxsY2pvZ1RDNU1ZWGxsY2tkeWIzVndYRzVjYmlBZ2NISnZkR1ZqZEdWa0lHMWhjRG9nVEM1TllYQmNiaUFnY0hKdmRHVmpkR1ZrSUdSaGRHRk1hWE4wT2lCRVlYUmhUR2x6ZEVsMFpXMWJYVnh1SUNCd2NtOTBaV04wWldRZ2IzQjBhVzl1Y3pvZ1VHOXNlV2R2Ymt4aGVXVnlUM0IwYVc5dWMxeHVJQ0J3Y205MFpXTjBaV1FnWTJoaGJtNWxiRVoxYm1NNklFTm9ZVzV1Wld4R2RXNWpYRzRnSUhCeWIzUmxZM1JsWkNCelpXZHRaVzUwWldSTmFXNDZJRzUxYldKbGNseHVJQ0J3Y205MFpXTjBaV1FnYzJWbmJXVnVkR1ZrVTNSbGNEb2diblZ0WW1WeVhHNGdJSEJ5YjNSbFkzUmxaQ0J3YjJ4NVoyOXVjem9nVUc5c2VXZHZibHRkWEc0Z0lIQnliM1JsWTNSbFpDQm1iMk4xYzJWa1VHOXNlV2R2YmpvZ1VHOXNlV2R2Ymx4dUlDQndjbTkwWldOMFpXUWdabTlqZFhObFpFUnBjM0JzWVhsUWIyeDVaMjl1T2lCUWIyeDVaMjl1WEc0Z0lIQnliM1JsWTNSbFpDQndiMng1WjI5dVRHRjVaWEk2SUV3dVRHRjVaWEpIY205MWNGeHVYRzRnSUdOdmJuTjBjblZqZEc5eUtGeHVJQ0FnSUcxaGNEb2dUQzVOWVhBc1hHNGdJQ0FnWkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRMRnh1SUNBZ0lHOXdkR2x2Ym5NNklGQnZiSGxuYjI1TVlYbGxjazl3ZEdsdmJuTXNYRzRnSUNBZ1kyaGhibTVsYkVaMWJtTTZJRU5vWVc1dVpXeEdkVzVqWEc0Z0lDa2dlMXh1SUNBZ0lHTnZibk4wSUdSbFptRjFiSFJQY0hScGIyNXpPaUJRYjJ4NVoyOXVUR0Y1WlhKUGNIUnBiMjV6SUQwZ2UxeHVJQ0FnSUNBZ2NHOXdkWEJCZEhSeU9pQjdJR3hoWW1Wc09pQW41WkNONTZld0p5d2dkbUZzZFdVNklDZHVZVzFsSnlCOUxGeHVJQ0FnSUNBZ2RHOXZiSFJwY0VGMGRISTZJQ2R1WVcxbEp5eGNiaUFnSUNBZ0lHTnZiRzl5T2lBbkl6TXpPRGhHUmljc1hHNGdJQ0FnSUNCbWFXeHNPaUIwY25WbExGeHVJQ0FnSUNBZ1ptbHNiRU52Ykc5eU9pQW5Jek16T0RoR1JpY3NYRzRnSUNBZ0lDQjNaV2xuYUhRNklERXNYRzRnSUNBZ0lDQnZjR0ZqYVhSNU9pQXhMRnh1SUNBZ0lDQWdabWxzYkU5d1lXTnBkSGs2SURBdU5TeGNiaUFnSUNBZ0lISmxibVJsY2xCdmJIbG5iMjVEYjJ4dmNsUjVjR1U2SUNkemFXNW5iR1VuTEZ4dUlDQWdJQ0FnYzJWbmJXVnVkR1ZrUTI5c2IzSnpPaUJiSnlNek16ZzRSa1luWFN4Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1MGVYQmxJRDBnSjNCdmJIbG5iMjRuWEc0Z0lDQWdkR2hwY3k1dFlYQWdQU0J0WVhCY2JpQWdJQ0IwYUdsekxtUmhkR0ZNYVhOMElEMGdaR0YwWVV4cGMzUmNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTWdQU0JQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0JrWldaaGRXeDBUM0IwYVc5dWN5d2diM0IwYVc5dWN5bGNiaUFnSUNCMGFHbHpMbU5vWVc1dVpXeEdkVzVqSUQwZ1kyaGhibTVsYkVaMWJtTmNibHh1SUNBZ0lIUm9hWE11ZG1semFXSnNaU0E5SUhSeWRXVmNiaUFnSUNCMGFHbHpMbkJ2YkhsbmIyNXpJRDBnVzExY2JpQWdJQ0IwYUdsekxuTmxaMjFsYm5SbFpFMXBiaUE5SUVsdVptbHVhWFI1WEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSVGRHVndJRDBnTVZ4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkZCdmJIbG5iMjRnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0Z1BTQnVkV3hzWEc0Z0lIMWNiaUFnY0hWaWJHbGpJR1J5WVhjb2IzQjBhVzl1Y3o4NklGQnZiSGxuYjI1TVlYbGxjazl3ZEdsdmJuTXBJSHRjYmlBZ0lDQjBhR2x6TG1sdWFYUlBjSFJwYjI1ektHOXdkR2x2Ym5NcFhHNGdJQ0FnZEdocGN5NXBibWwwVUc5c2VXZHZibk1vS1Z4dUlDQWdJSFJvYVhNdWFXNXBkRVYyWlc1MEtDbGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXlaV1J5WVhjb0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCeVpXUnlZWGNvS1NCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6TG5acGMybGliR1VwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kR2hwY3k1c1lYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXNZWGxsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG14aGVXVnlJRDBnZEdocGN5NWpiMjVtYVdkUWIyeDVaMjl1VEdGNVpYSW9LVnh1SUNBZ0lIUm9hWE11YldGd0xtRmtaRXhoZVdWeUtIUm9hWE11YkdGNVpYSXBYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTmNiaUFnZlZ4dUlDQndkV0pzYVdNZ1ptbDBRbTkxYm1SektDa2dlMXh1SUNBZ0lIUm9hWE11YldGd0xtWnBkRUp2ZFc1a2N5aDBhR2x6TG1kbGRFSnZkVzVrY3lncEtWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCblpYUkNiM1Z1WkhNb0tUb2dUQzVNWVhSTWJtZENiM1Z1WkhORmVIQnlaWE56YVc5dUlIdGNiaUFnSUNCcFppQW9kR2hwY3k1d2IyeDVaMjl1Y3k1c1pXNW5kR2dnUEQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YldGd0xtZGxkRUp2ZFc1a2N5Z3BYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuQnZiSGxuYjI1ekxuSmxaSFZqWlNoY2JpQWdJQ0FnSUNod2NtVjJMQ0JqZFhKeUtTQTlQaUJ3Y21WMkxtVjRkR1Z1WkNoamRYSnlMbWRsZEVKdmRXNWtjeWdwS1N4Y2JpQWdJQ0FnSUhSb2FYTXVjRzlzZVdkdmJuTmJNRjB1WjJWMFFtOTFibVJ6S0NsY2JpQWdJQ0FwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJR1JsYzNSeWIza29LU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXViR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXZHZiaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1Y21WdGIzWmxUR0Y1WlhJb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0cFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhCMVlteHBZeUIwYjJkbmJHVldhWE5wWW14bEtIWnBjMmxpYkdVNklHSnZiMnhsWVc0cElIdGNiaUFnSUNCMGFHbHpMblpwYzJsaWJHVWdQU0IyYVhOcFlteGxYRzRnSUNBZ2FXWWdLQ0YwYUdsekxteGhlV1Z5S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFpwYzJsaWJHVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXRndMbUZrWkV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEIxWW14cFl5QmphR0Z1WjJWRGIyeHZjaWhqYjJ4dmNqb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpMbVpwYkd4RGIyeHZjaUE5SUdOdmJHOXlYRzRnSUNBZ2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNGdJSEIxWW14cFl5QndhWFJqYUNocFpEb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjeTVtYjNKRllXTm9LQ2h3YjJ4NVoyOXVLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9jRzlzZVdkdmJpNW5aWFJFWVhSaEtDa3VhV1FnUFQwOUlHbGtLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjRzlzZVdkdmJrTnNhV05yU0dGdVpHeGxjaWh3YjJ4NVoyOXVLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNBZ0lIMWNiaUFnSUNCOUtWeHVJQ0I5WEc0Z0lIQnliM1JsWTNSbFpDQnBibWwwUlhabGJuUW9LU0I3ZlZ4dUlDQndjbTkwWldOMFpXUWdaMlYwVkc5dmJGUnBjRU52Ym5SbGJuUW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLU0I3WEc0Z0lDQWdjbVYwZFhKdUlDY25JQ3NnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjRUYwZEhKZFhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lHZGxkRkJ2Y0hWd1EyOXVkR1Z1ZENoa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwcElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlBbkoxeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RIbHdaVzltSUhSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWUNSN2RHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjbjA2SUNSN1pHRjBZVnQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeVhYMWdYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjaUE5UFQwZ0oyOWlhbVZqZENjcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCZ0pIdDBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5TG14aFltVnNmVG9nSkh0Y2JpQWdJQ0FnSUNBZ1pHRjBZVnQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUxuWmhiSFZsWFZ4dUlDQWdJQ0FnZldCY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdOaFkyaGxVMlZuYldWdWRGQmhjbUZ0Y3lncElIdGNiaUFnSUNCamIyNXpkQ0J6WldkdFpXNTBaV1JNWlc1bmRHZ2dQU0IwYUdsekxtOXdkR2x2Ym5NdWMyVm5iV1Z1ZEdWa1EyOXNiM0p6TG14bGJtZDBhRnh1SUNBZ0lHeGxkQ0J0WVhoV1lXd2dQU0F0U1c1bWFXNXBkSGxjYmlBZ0lDQnNaWFFnYldsdVZtRnNJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQm1iM0lnS0dOdmJuTjBJR1JoZEdFZ2IyWWdkR2hwY3k1a1lYUmhUR2x6ZENrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZG1Gc0lEMGdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjMlZuYldWdWRHVmtRWFIwY2wxY2JpQWdJQ0FnSUcxaGVGWmhiQ0E5SUUxaGRHZ3ViV0Y0S0cxaGVGWmhiQ3dnZG1Gc0tWeHVJQ0FnSUNBZ2JXbHVWbUZzSUQwZ1RXRjBhQzV0YVc0b2JXbHVWbUZzTENCMllXd3BYRzRnSUNBZ2ZWeHVJQ0FnSUdOdmJuTjBJSE4wWlhBZ1BTQW9iV0Y0Vm1Gc0lDMGdiV2x1Vm1Gc0lDc2dNU2tnTHlCelpXZHRaVzUwWldSTVpXNW5kR2hjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkUxcGJpQTlJRzFwYmxaaGJGeHVJQ0FnSUhSb2FYTXVjMlZuYldWdWRHVmtVM1JsY0NBOUlITjBaWEJjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWjJWMFUyVm5iV1Z1ZEdWa1VHOXNlV2R2YmtOdmJHOXlLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2s2SUhOMGNtbHVaeUI3WEc0Z0lDQWdZMjl1YzNRZ2RtRnNJRDBnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11YzJWbmJXVnVkR1ZrUVhSMGNsMWNiaUFnSUNCamIyNXpkQ0JqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSRGIyeHZjbk5iWEc0Z0lDQWdJQ0J3WVhKelpVbHVkQ2duSnlBcklDaDJZV3dnTFNCMGFHbHpMbk5sWjIxbGJuUmxaRTFwYmlrZ0x5QjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQXNJREV3S1Z4dUlDQWdJRjFjYmlBZ0lDQnlaWFIxY200Z1kyOXNiM0pjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnY0c5c2VXZHZia05zYVdOclNHRnVaR3hsY2lod2IyeDVaMjl1T2lCUWIyeDVaMjl1S1NCN1hHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1VHOXNlV2R2YmlBOUlIQnZiSGxuYjI1Y2JpQWdJQ0F2THlEbGlLRHBtYVRsaVkza3VJRGt1S29nWm05amRYTmNiaUFnSUNCcFppQW9kR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2YkhsbmIyNHBJSHRjYmlBZ0lDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVMbkpsYlc5MlpTZ3BYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklPZVVuK2FJa09XOWsrV0pqU0JtYjJOMWMxeHVJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsUWIyeDVaMjl1SUQwZ2JtVjNJRkJ2YkhsbmIyNG9jRzlzZVdkdmJpNW5aWFJNWVhSTWJtZHpLQ2tzSUh0Y2JpQWdJQ0FnSUdOdmJHOXlPaUFuSXpNek9EaEdSaWNzWEc0Z0lDQWdJQ0JtYVd4c1EyOXNiM0k2SUhSb2FYTXVaMlYwUTI5c2IzSW9jRzlzZVdkdmJpNW5aWFJFWVhSaEtDa3BMRnh1SUNBZ0lIMHBYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0dVlXUmtWRzhvZEdocGN5NXRZWEFwWEc1Y2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXZHZibHh1SUNBZ0lDQWdMbUpwYm1SUWIzQjFjQ2gwYUdsekxtZGxkRkJ2Y0hWd1EyOXVkR1Z1ZENod2IyeDVaMjl1TG1kbGRFUmhkR0VvS1NrcFhHNGdJQ0FnSUNBdWIzQmxibEJ2Y0hWd0tDbGNibHh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1WjI5dUxtOXVLQ2R3YjNCMWNHTnNiM05sSnl3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbG5iMjR1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlLVnh1SUNBZ0lIQnZiSGxuYjI0dVkyeHZjMlZVYjI5c2RHbHdLQ2xjYmx4dUlDQWdJSFJvYVhNdWJXRndMbkJoYmxSdktIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1WjI5dUxtZGxkRU5sYm5SbGNpZ3BLVnh1SUNBZ0lIUm9hWE11WTJoaGJtNWxiRVoxYm1Nb0oyOXVMV05zYVdOckxYQnZiSGxuYjI0bkxDQndiMng1WjI5dUtWeHVJQ0I5WEc0Z0lIQnliM1JsWTNSbFpDQnBibWwwVDNCMGFXOXVjeWh2Y0hScGIyNXpPaUJRYjJ4NVoyOXVUR0Y1WlhKUGNIUnBiMjV6S1NCN1hHNGdJQ0FnZEdocGN5NXZjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloMGFHbHpMbTl3ZEdsdmJuTXNJRzl3ZEdsdmJuTXBYRzRnSUgxY2JpQWdjSEp2ZEdWamRHVmtJR2x1YVhSUWIyeDVaMjl1Y3lncElIdGNiaUFnSUNBdkx5RG52SlBsclpnZ2MyVm5iV1Z1ZENEbm03amxoYlBtbGJEbWphNWNiaUFnSUNCMGFHbHpMbU5oWTJobFUyVm5iV1Z1ZEZCaGNtRnRjeWdwWEc0Z0lDQWdkR2hwY3k1d2IyeDVaMjl1Y3lBOUlGdGRYRzRnSUNBZ2RHaHBjeTVrWVhSaFRHbHpkQzVtYjNKRllXTm9LQ2hrWVhSaEtTQTlQaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQnNZWGxsY2lBOUlFd3VaMlZ2U2xOUFRpaGtZWFJoTG1kbGIyMWxkSEo1S1M1blpYUk1ZWGxsY25Nb0tWc3dYVnh1SUNBZ0lDQWdZMjl1YzNRZ2NHOXNlV2R2YmlBOUlHNWxkeUJRYjJ4NVoyOXVLQ2hzWVhsbGNpQmhjeUJNTGxCdmJIbG5iMjRwTG1kbGRFeGhkRXh1WjNNb0tTbGNibHh1SUNBZ0lDQWdjRzlzZVdkdmJpNXpaWFJFWVhSaEtHUmhkR0VwWEc0Z0lDQWdJQ0IwYUdsekxuQnZiSGxuYjI1ekxuQjFjMmdvY0c5c2VXZHZiaWxjYmlBZ0lDQjlLVnh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdZMjl1Wm1sblVHOXNlV2R2Ymt4aGVXVnlLQ2tnZTF4dUlDQWdJSFJvYVhNdWNHOXNlV2R2Ymt4aGVXVnlJRDBnVEM1c1lYbGxja2R5YjNWd0tDbGNiaUFnSUNCMGFHbHpMbkJ2YkhsbmIyNXpJRDBnZEdocGN5NXdiMng1WjI5dWN5NXRZWEFvS0hCdmJIbG5iMjRwSUQwK0lIdGNiaUFnSUNBZ0lHTnZibk4wSUc5d2RHbHZibk02SUV3dVVHOXNlV3hwYm1WUGNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z2RHaHBjeTV2Y0hScGIyNXpMQ0I3WEc0Z0lDQWdJQ0FnSUdOdmJHOXlPaUFuSXpNek9EaEdSaWNzWEc0Z0lDQWdJQ0FnSUdacGJHeERiMnh2Y2pvZ2RHaHBjeTVuWlhSRGIyeHZjaWh3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2tzWEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnTHk4ZzZZZU41cGF3NWJxVTU1U29JRzl3ZEdsdmJuTmNiaUFnSUNBZ0lHTnZibk4wSUc1bGQxQnZiSGxuYjI0Z1BTQnVaWGNnVUc5c2VXZHZiaWh3YjJ4NVoyOXVMbWRsZEV4aGRFeHVaM01vS1N3Z2IzQjBhVzl1Y3lsY2JpQWdJQ0FnSUc1bGQxQnZiSGxuYjI0dWMyVjBSR0YwWVNod2IyeDVaMjl1TG1kbGRFUmhkR0VvS1NsY2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjRUYwZEhJcElIdGNiaUFnSUNBZ0lDQWdibVYzVUc5c2VXZHZiaTVpYVc1a1ZHOXZiSFJwY0NoMGFHbHpMbWRsZEZSdmIyeFVhWEJEYjI1MFpXNTBLRzVsZDFCdmJIbG5iMjR1WjJWMFJHRjBZU2dwS1NsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUc1bGQxQnZiSGxuYjI0dWIyNG9KMk5zYVdOckp5d2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CdmJIbG5iMjVEYkdsamEwaGhibVJzWlhJb2NHOXNlV2R2YmlsY2JpQWdJQ0FnSUgwcFhHNGdJQ0FnSUNCeVpYUjFjbTRnYm1WM1VHOXNlV2R2Ymx4dUlDQWdJSDBwWEc0Z0lDQWdkR2hwY3k1d2IyeDVaMjl1Y3k1bWIzSkZZV05vS0Nod2IyeDVaMjl1S1NBOVBpQjdYRzRnSUNBZ0lDQjBhR2x6TG5CdmJIbG5iMjVNWVhsbGNpNWhaR1JNWVhsbGNpaHdiMng1WjI5dUtWeHVJQ0FnSUgwcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNHOXNlV2R2Ymt4aGVXVnlYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJEYjJ4dmNpaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHNJRzF2WkdVL09pQkRiMnh2Y2sxdlpHVXBJSHRjYmlBZ0lDQnNaWFFnWTI5c2IzSWdQU0IwYUdsekxtOXdkR2x2Ym5NdVkyOXNiM0pjYmlBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2xCdmJIbG5iMjVEYjJ4dmNsUjVjR1VnUFQwOUlDZHpaV2R0Wlc1MFpXUW5LU0I3WEc0Z0lDQWdJQ0JqYjJ4dmNpQTlJSFJvYVhNdVoyVjBVMlZuYldWdWRHVmtVRzlzZVdkdmJrTnZiRzl5S0dSaGRHRXBYRzRnSUNBZ2ZWeHVJQ0FnSUhOM2FYUmphQ0FvYlc5a1pTa2dlMXh1SUNBZ0lDQWdZMkZ6WlNBblpHRnlhMlZ1SnpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSaGNtdGxiaWhqYjJ4dmNpbGNiaUFnSUNBZ0lHTmhjMlVnSjJ4cFoyaDBaVzRuT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYkdsbmFIUmxiaWhqYjJ4dmNpbGNiaUFnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyeHZjbHh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdElIMGdabkp2YlNBbkxpNHZaR1ZtYVc1cGRHbHZibk1uWEc1Y2JtVjRjRzl5ZENCMGVYQmxJRkJ2Ykhsc2FXNWxUR0YwVEc1blJYaHdjbVZ6YzJsdmJpQTlYRzRnSUh3Z1RDNU1ZWFJNYm1kRmVIQnlaWE56YVc5dVcxMWNiaUFnZkNCTUxreGhkRXh1WjBWNGNISmxjM05wYjI1YlhWdGRYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWIyeDViR2x1WlNCbGVIUmxibVJ6SUV3dVVHOXNlV3hwYm1VZ2UxeHVJQ0F2THlCMGMyeHBiblE2WkdsellXSnNaUzF1WlhoMExXeHBibVU2ZG1GeWFXRmliR1V0Ym1GdFpWeHVJQ0J3Y21sMllYUmxJRjlmWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0WEc0Z0lHTnZibk4wY25WamRHOXlLR3hoZEd4dVozTTZJRkJ2Ykhsc2FXNWxUR0YwVEc1blJYaHdjbVZ6YzJsdmJpd2diM0IwYVc5dWN6ODZJRXd1VUc5c2VXeHBibVZQY0hScGIyNXpLU0I3WEc0Z0lDQWdjM1Z3WlhJb2JHRjBiRzVuY3l3Z2IzQjBhVzl1Y3lsY2JpQWdmVnh1SUNCd2RXSnNhV01nYzJWMFJHRjBZU2hrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwSUh0Y2JpQWdJQ0IwYUdsekxsOWZaR0YwWVNBOUlHUmhkR0ZjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMlYwUkdGMFlTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWDJSaGRHRmNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdExDQkRhR0Z1Ym1Wc1JuVnVZeUI5SUdaeWIyMGdKeTR1TDJSbFptbHVhWFJwYjI1ekoxeHVhVzF3YjNKMElGQnZiSGxzYVc1bGMweGhlV1Z5SUdaeWIyMGdKeTR2VUc5c2VXeHBibVZ6VEdGNVpYSW5YRzVjYmk4cUtpRG11TExtbjVQcG9wem9pYkxtb0xmbHZJOGc1WTJWNklteWZPV0lodWF1dFNBcUwxeHVkSGx3WlNCUWIyeDViR2x1WlV4aGVXVnlVbVZ1WkdWeVEyOXNiM0pVZVhCbElEMGdKM05wYm1kc1pTY2dmQ0FuYzJWbmJXVnVkR1ZrSjF4dWFXNTBaWEptWVdObElGQnZiSGxzYVc1bFFuVm1abVZ5VEdGNVpYSlBjSFJwYjI1eklHVjRkR1Z1WkhNZ1RDNURiM0p5YVdSdmNrOXdkR2x2Ym5NZ2UxeHVJQ0J5Wlc1a1pYSlFiMng1YkdsdVpVTnZiRzl5Vkhsd1pUb2dVRzlzZVd4cGJtVk1ZWGxsY2xKbGJtUmxja052Ykc5eVZIbHdaVnh1WEc0Z0lDOHFLaUJ3YjNCMWNDRGxzWlhucExybHJaZm1yclVnS2k5Y2JpQWdjRzl3ZFhCQmRIUnlQem9nYzNSeWFXNW5YRzRnSUM4cUtpQjBiMjlzZEdsd0lPV3hsZWVrdXVXdGwrYXV0U0FxTDF4dUlDQjBiMjlzZEdsd1FYUjBjajg2SUhOMGNtbHVaMXh1WEc0Z0lHOXdZV05wZEhrL09pQnVkVzFpWlhKY2JseHVJQ0F2S2lvZzVZaUc1cTYxNXJpeTVwK1Q1N3VmNks2aDVhMlg1cTYxSUNvdlhHNGdJSE5sWjIxbGJuUmxaRUYwZEhJL09pQnpkSEpwYm1kY2JpQWdjMlZuYldWdWRHVmtRMjlzYjNKelB6b2djM1J5YVc1blcxMWNibjFjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnZiSGxzYVc1bGMwSjFabVpsY2t4aGVXVnlJR1Y0ZEdWdVpITWdVRzlzZVd4cGJtVnpUR0Y1WlhJZ2UxeHVJQ0J3ZFdKc2FXTWdkSGx3WlRvZ2MzUnlhVzVuWEc0Z0lIQnliM1JsWTNSbFpDQnZjSFJwYjI1ek9pQlFiMng1YkdsdVpVSjFabVpsY2t4aGVXVnlUM0IwYVc5dWMxeHVJQ0JqYjI1emRISjFZM1J2Y2loY2JpQWdJQ0J0WVhBNklFd3VUV0Z3TEZ4dUlDQWdJR1JoZEdGTWFYTjBPaUJFWVhSaFRHbHpkRWwwWlcxYlhTeGNiaUFnSUNCdmNIUnBiMjV6T2lCUWIyeDViR2x1WlVKMVptWmxja3hoZVdWeVQzQjBhVzl1Y3l4Y2JpQWdJQ0JqYUdGdWJtVnNSblZ1WXpvZ1EyaGhibTVsYkVaMWJtTmNiaUFnS1NCN1hHNGdJQ0FnYzNWd1pYSW9iV0Z3TENCa1lYUmhUR2x6ZEN3Z2IzQjBhVzl1Y3l3Z1kyaGhibTVsYkVaMWJtTXBYRzRnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRTl3ZEdsdmJuTTZJRkJ2Ykhsc2FXNWxRblZtWm1WeVRHRjVaWEpQY0hScGIyNXpJRDBnZTF4dUlDQWdJQ0FnY21WdVpHVnlVRzlzZVd4cGJtVkRiMnh2Y2xSNWNHVTZJQ2R6YVc1bmJHVW5MRnh1SUNBZ0lDQWdjMlZuYldWdWRHVmtRMjlzYjNKek9pQmJKeU16TXpnNFJrWW5YU3hjYmlBZ0lDQWdJR052Y25KcFpHOXlPaUF4TURBc1hHNGdJQ0FnSUNCamIyeHZjam9nSnlNek16ZzRSa1luTEZ4dUlDQWdJQ0FnYjNCaFkybDBlVG9nTUM0MUxGeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxuUjVjR1VnUFNBbmNHOXNlV3hwYm1WQ2RXWm1aWEluWEc0Z0lDQWdkR2hwY3k1dFlYQWdQU0J0WVhCY2JpQWdJQ0IwYUdsekxtUmhkR0ZNYVhOMElEMGdaR0YwWVV4cGMzUmNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTWdQU0J2Y0hScGIyNXpYRzRnSUNBZ2RHaHBjeTVqYUdGdWJtVnNSblZ1WXlBOUlHTm9ZVzV1Wld4R2RXNWpYRzVjYmlBZ0lDQjBhR2x6TG5acGMybGliR1VnUFNCMGNuVmxYRzRnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaWE1nUFNCYlhWeHVJQ0FnSUhSb2FYTXVjMlZuYldWdWRHVmtUV2x1SUQwZ1NXNW1hVzVwZEhsY2JpQWdJQ0IwYUdsekxuTmxaMjFsYm5SbFpGTjBaWEFnUFNBeFhHNGdJQ0FnTHk4Z2RHaHBjeTVtYjJOMWMyVmtVRzlzZVd4cGJtVWdQU0J1ZFd4c1hHNWNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTWdQU0JQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0JrWldaaGRXeDBUM0IwYVc5dWN5d2diM0IwYVc5dWN5bGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1pISmhkeWh2Y0hScGIyNXpQem9nVUc5c2VXeHBibVZDZFdabVpYSk1ZWGxsY2s5d2RHbHZibk1wSUh0Y2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0hSb2FYTXViM0IwYVc5dWN5d2diM0IwYVc5dWN5bGNiaUFnSUNCMGFHbHpMbWx1YVhSUWIyeDViR2x1WlhNb0tWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxaSEpoZHlncFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhKbFpISmhkeWdwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11ZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGhlV1Z5TG5KbGJXOTJaU2dwWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11YkdGNVpYSWdQU0IwYUdsekxtTnZibVpwWjFCdmJIbHNhVzVsUW5WbVptVnlUR0Y1WlhJb0tWeHVJQ0FnSUhSb2FYTXViV0Z3TG1Ga1pFeGhlV1Z5S0hSb2FYTXViR0Y1WlhJcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhOY2JpQWdmVnh1SUNCd2RXSnNhV01nWm1sMFFtOTFibVJ6S0NrZ2UxeHVJQ0FnSUhSb2FYTXViV0Z3TG1acGRFSnZkVzVrY3loMGFHbHpMbWRsZEVKdmRXNWtjeWdwS1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJuWlhSQ2IzVnVaSE1vS1RvZ1RDNU1ZWFJNYm1kQ2IzVnVaSE5GZUhCeVpYTnphVzl1SUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTV3YjJ4NWJHbHVaWE11YkdWdVozUm9JRHc5SURBcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTFoY0M1blpYUkNiM1Z1WkhNb0tWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1d2IyeDViR2x1WlhNdWNtVmtkV05sS0Z4dUlDQWdJQ0FnS0hCeVpYWXNJR04xY25JcElEMCtJSEJ5WlhZdVpYaDBaVzVrS0dOMWNuSXVaMlYwUW05MWJtUnpLQ2twTEZ4dUlDQWdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTmJNRjB1WjJWMFFtOTFibVJ6S0NsY2JpQWdJQ0FwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJR05vWVc1blpVTnZiRzl5S0dOdmJHOXlPaUJ6ZEhKcGJtY3BJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk11WTI5c2IzSWdQU0JqYjJ4dmNseHVJQ0FnSUhSb2FYTXVjbVZrY21GM0tDbGNiaUFnZlZ4dUlDQndjbWwyWVhSbElHTnZibVpwWjFCdmJIbHNhVzVsUW5WbVptVnlUR0Y1WlhJb0tTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaVXhoZVdWeUlEMGdUQzVzWVhsbGNrZHliM1Z3S0NsY2JpQWdJQ0IwYUdsekxuQnZiSGxzYVc1bGN5NW1iM0pGWVdOb0tDaHdiMng1YkdsdVpTa2dQVDRnZTF4dUlDQWdJQ0FnY0c5c2VXeHBibVV1YjI0b0oyTnNhV05ySnl3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2Ykhsc2FXNWxRMnhwWTJ0SVlXNWtiR1Z5S0hCdmJIbHNhVzVsS1Z4dUlDQWdJQ0FnZlNsY2JpQWdJQ0FnSUdOdmJuTjBJRzl3ZEdsdmJuTTZJRkJ2Ykhsc2FXNWxRblZtWm1WeVRHRjVaWEpQY0hScGIyNXpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaGNiaUFnSUNBZ0lDQWdlMzBzWEc0Z0lDQWdJQ0FnSUhSb2FYTXViM0IwYVc5dWN5eGNiaUFnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUdOdmJHOXlPbHh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV2Y0hScGIyNXpMbkpsYm1SbGNsQnZiSGxzYVc1bFEyOXNiM0pVZVhCbElEMDlQU0FuYzJsdVoyeGxKMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQS9JSFJvYVhNdWIzQjBhVzl1Y3k1amIyeHZjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQTZJSFJvYVhNdVoyVjBVMlZuYldWdWRHVmtVRzlzZVd4cGJtVkRiMnh2Y2lod2IyeDViR2x1WlM1blpYUkVZWFJoS0NrcExGeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQXBYRzVjYmlBZ0lDQWdJR052Ym5OMElIQnZiSGxzYVc1bFFuVm1abVZ5SUQwZ1RDNWpiM0p5YVdSdmNpaGNiaUFnSUNBZ0lDQWdLSEJ2Ykhsc2FXNWxMbWRsZEV4aGRFeHVaM01vS1NCaGN5Qk1Ma3hoZEV4dVoxdGRLUzV0WVhBb0tHeGhkRXh1WnlrZ1BUNWNiaUFnSUNBZ0lDQWdJQ0JNTG14aGRFeHVaeWhiYkdGMFRHNW5MbXhoZEN3Z2JHRjBURzVuTG14dVoxMHBYRzRnSUNBZ0lDQWdJQ2tzWEc0Z0lDQWdJQ0FnSUc5d2RHbHZibk5jYmlBZ0lDQWdJQ2xjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVkRzl2YkhScGNFRjBkSElwSUh0Y2JpQWdJQ0FnSUNBZ2NHOXNlV3hwYm1WQ2RXWm1aWEl1WW1sdVpGUnZiMngwYVhBb2RHaHBjeTVuWlhSVWIyOXNWR2x3UTI5dWRHVnVkQ2h3YjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnZEdocGN5NXdiMng1YkdsdVpVeGhlV1Z5TG1Ga1pFeGhlV1Z5S0hCdmJIbHNhVzVsUW5WbVptVnlLVnh1SUNBZ0lIMHBYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjRzlzZVd4cGJtVk1ZWGxsY2x4dUlDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ2V5QkVZWFJoVEdsemRFbDBaVzBzSUVOb1lXNXVaV3hHZFc1aklIMGdabkp2YlNBbkxpNHZaR1ZtYVc1cGRHbHZibk1uWEc1cGJYQnZjblFnVUc5c2VXeHBibVVzSUhzZ1VHOXNlV3hwYm1WTVlYUk1ibWRGZUhCeVpYTnphVzl1SUgwZ1puSnZiU0FuTGk5UWIyeDViR2x1WlNkY2JtbHRjRzl5ZENCN0lHUmhjbXRsYml3Z2JHbG5hSFJsYmlCOUlHWnliMjBnSnk0dUwzVjBhV3h6TDJsdVpHVjRKMXh1WEc0dktpb2c1cml5NXArVDZhS2M2SW15NXFDMzVieVBJT1dObGVpSnNuemxpSWJtcnJVZ0tpOWNiblI1Y0dVZ1VHOXNlV3hwYm1WTVlYbGxjbEpsYm1SbGNrTnZiRzl5Vkhsd1pTQTlJQ2R6YVc1bmJHVW5JSHdnSjNObFoyMWxiblJsWkNkY2JuUjVjR1VnUTI5c2IzSk5iMlJsSUQwZ0oyUmhjbXRsYmljZ2ZDQW5iR2xuYUhSbGJpY2dmQ0FuYm05eWJXRnNKMXh1YVc1MFpYSm1ZV05sSUZCdmJIbHNhVzVsVEdGNVpYSlBjSFJwYjI1eklHVjRkR1Z1WkhNZ1RDNVFiMng1YkdsdVpVOXdkR2x2Ym5NZ2UxeHVJQ0J5Wlc1a1pYSlFiMng1YkdsdVpVTnZiRzl5Vkhsd1pUb2dVRzlzZVd4cGJtVk1ZWGxsY2xKbGJtUmxja052Ykc5eVZIbHdaVnh1WEc0Z0lDOHFLaUJ3YjNCMWNDRGxzWlhucExybHJaZm1yclVnS2k5Y2JpQWdjRzl3ZFhCQmRIUnlQem9nYzNSeWFXNW5JSHdnZXlCc1lXSmxiRG9nYzNSeWFXNW5PeUIyWVd4MVpUb2dZVzU1SUgxY2JpQWdMeW9xSUhSdmIyeDBhWEFnNWJHVjU2UzY1YTJYNXE2MUlDb3ZYRzRnSUhSdmIyeDBhWEJCZEhSeVB6b2djM1J5YVc1blhHNWNiaUFnYjNCaFkybDBlVDg2SUc1MWJXSmxjbHh1WEc0Z0lDOHFLaURsaUlibXJyWG11TExtbjVQbnU1L29ycUhsclpmbXJyVWdLaTljYmlBZ2MyVm5iV1Z1ZEdWa1FYUjBjajg2SUhOMGNtbHVaMXh1SUNCelpXZHRaVzUwWldSRGIyeHZjbk0vT2lCemRISnBibWRiWFZ4dWZWeHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUc5c2VXeHBibVZ6VEdGNVpYSWdlMXh1SUNCd2RXSnNhV01nZEhsd1pUb2djM1J5YVc1blhHNWNiaUFnY0hKdmRHVmpkR1ZrSUhacGMybGliR1U2SUdKdmIyeGxZVzVjYmlBZ2NISnZkR1ZqZEdWa0lHeGhlV1Z5T2lCTUxreGhlV1Z5UjNKdmRYQmNibHh1SUNCd2NtOTBaV04wWldRZ2JXRndPaUJNTGsxaGNGeHVJQ0J3Y205MFpXTjBaV1FnWkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRYRzRnSUhCeWIzUmxZM1JsWkNCdmNIUnBiMjV6T2lCUWIyeDViR2x1WlV4aGVXVnlUM0IwYVc5dWMxeHVJQ0J3Y205MFpXTjBaV1FnWTJoaGJtNWxiRVoxYm1NNklFTm9ZVzV1Wld4R2RXNWpYRzRnSUhCeWIzUmxZM1JsWkNCd2IyeDViR2x1WlhNNklGQnZiSGxzYVc1bFcxMWNiaUFnY0hKdmRHVmpkR1ZrSUhObFoyMWxiblJsWkUxcGJqb2diblZ0WW1WeVhHNGdJSEJ5YjNSbFkzUmxaQ0J6WldkdFpXNTBaV1JUZEdWd09pQnVkVzFpWlhKY2JpQWdjSEp2ZEdWamRHVmtJR1p2WTNWelpXUlFiMng1YkdsdVpUb2dVRzlzZVd4cGJtVmNiaUFnY0hKdmRHVmpkR1ZrSUdadlkzVnpaV1JFYVhOd2JHRjVVRzlzZVd4cGJtVTZJRkJ2Ykhsc2FXNWxYRzRnSUhCeWIzUmxZM1JsWkNCd2IyeDViR2x1WlV4aGVXVnlPaUJNTGt4aGVXVnlSM0p2ZFhCY2JpQWdZMjl1YzNSeWRXTjBiM0lvWEc0Z0lDQWdiV0Z3T2lCTUxrMWhjQ3hjYmlBZ0lDQmtZWFJoVEdsemREb2dSR0YwWVV4cGMzUkpkR1Z0VzEwc1hHNGdJQ0FnYjNCMGFXOXVjem9nVUc5c2VXeHBibVZNWVhsbGNrOXdkR2x2Ym5Nc1hHNGdJQ0FnWTJoaGJtNWxiRVoxYm1NNklFTm9ZVzV1Wld4R2RXNWpYRzRnSUNrZ2UxeHVJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUlBjSFJwYjI1ek9pQlFiMng1YkdsdVpVeGhlV1Z5VDNCMGFXOXVjeUE5SUh0Y2JpQWdJQ0FnSUdOdmJHOXlPaUFuSXpNek9EaEdSaWNzWEc0Z0lDQWdJQ0J5Wlc1a1pYSlFiMng1YkdsdVpVTnZiRzl5Vkhsd1pUb2dKM05wYm1kc1pTY3NYRzRnSUNBZ0lDQnpaV2R0Wlc1MFpXUkRiMnh2Y25NNklGc25Jek16T0RoR1JpZGRMRnh1SUNBZ0lDQWdjRzl3ZFhCQmRIUnlPaUI3SUd4aFltVnNPaUFuNVpDTjU2ZXdKeXdnZG1Gc2RXVTZJQ2R1WVcxbEp5QjlMRnh1SUNBZ0lDQWdkRzl2YkhScGNFRjBkSEk2SUNkdVlXMWxKeXhjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTUwZVhCbElEMGdKM0J2Ykhsc2FXNWxKMXh1SUNBZ0lIUm9hWE11YldGd0lEMGdiV0Z3WEc0Z0lDQWdkR2hwY3k1a1lYUmhUR2x6ZENBOUlHUmhkR0ZNYVhOMFhHNGdJQ0FnZEdocGN5NXZjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2daR1ZtWVhWc2RFOXdkR2x2Ym5Nc0lHOXdkR2x2Ym5NcFhHNGdJQ0FnZEdocGN5NWphR0Z1Ym1Wc1JuVnVZeUE5SUdOb1lXNXVaV3hHZFc1alhHNWNiaUFnSUNCMGFHbHpMblpwYzJsaWJHVWdQU0IwY25WbFhHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTWdQU0JiWFZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQWdQU0F4WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrVUc5c2VXeHBibVVnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxzYVc1bElEMGdiblZzYkZ4dUlDQjlYRzRnSUhCMVlteHBZeUJrY21GM0tHOXdkR2x2Ym5NL09pQlFiMng1YkdsdVpVeGhlV1Z5VDNCMGFXOXVjeWtnZTF4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlFOWlhbVZqZEM1aGMzTnBaMjRvZEdocGN5NXZjSFJwYjI1ekxDQnZjSFJwYjI1ektWeHVJQ0FnSUhSb2FYTXVhVzVwZEZCdmJIbHNhVzVsY3lncFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVmtjbUYzS0NsY2JpQWdmVnh1SUNCd2RXSnNhV01nY21Wa2NtRjNLQ2tnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTUyYVhOcFlteGxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUm9hWE11YkdGNVpYSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJHRjVaWEl1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTVzWVhsbGNpQTlJSFJvYVhNdVkyOXVabWxuVUc5c2VXeHBibVZNWVhsbGNpZ3BYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCeVpYUjFjbTRnZEdocGMxeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCbWFYUkNiM1Z1WkhNb0tTQjdYRzRnSUNBZ2RHaHBjeTV0WVhBdVptbDBRbTkxYm1SektIUm9hWE11WjJWMFFtOTFibVJ6S0NrcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdkbGRFSnZkVzVrY3lncE9pQk1Ma3hoZEV4dVowSnZkVzVrYzBWNGNISmxjM05wYjI0Z2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG5CdmJIbHNhVzVsY3k1c1pXNW5kR2dnUEQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YldGd0xtZGxkRUp2ZFc1a2N5Z3BYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuQnZiSGxzYVc1bGN5NXlaV1IxWTJVb1hHNGdJQ0FnSUNBb2NISmxkaXdnWTNWeWNpa2dQVDRnY0hKbGRpNWxlSFJsYm1Rb1kzVnljaTVuWlhSQ2IzVnVaSE1vS1Nrc1hHNGdJQ0FnSUNCMGFHbHpMbkJ2Ykhsc2FXNWxjMXN3WFM1blpYUkNiM1Z1WkhNb0tWeHVJQ0FnSUNsY2JpQWdmVnh1SUNCd2RXSnNhV01nWkdWemRISnZlU2dwSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVzWVhsbGNpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVjbVZ0YjNabFRHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY0hWaWJHbGpJSFJ2WjJkc1pWWnBjMmxpYkdVb2RtbHphV0pzWlRvZ1ltOXZiR1ZoYmlrZ2UxeHVJQ0FnSUhSb2FYTXVkbWx6YVdKc1pTQTlJSFpwYzJsaWJHVmNiaUFnSUNCcFppQW9JWFJvYVhNdWJHRjVaWElwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVZV1JrVEdGNVpYSW9kR2hwY3k1c1lYbGxjaWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWNtVnRiM1psVEdGNVpYSW9kR2hwY3k1c1lYbGxjaWxjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjSFZpYkdsaklHTm9ZVzVuWlVOdmJHOXlLR052Ykc5eU9pQnpkSEpwYm1jcElIdGNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTXVabWxzYkVOdmJHOXlJRDBnWTI5c2IzSmNiaUFnSUNCMGFHbHpMbkpsWkhKaGR5Z3BYRzRnSUgxY2JpQWdjSFZpYkdsaklIQnBkR05vS0dsa09pQnpkSEpwYm1jcElIdGNiaUFnSUNCMGFHbHpMbkJ2Ykhsc2FXNWxjeTVtYjNKRllXTm9LQ2h3YjJ4NWJHbHVaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ2FXWWdLSEJ2Ykhsc2FXNWxMbWRsZEVSaGRHRW9LUzVwWkNBOVBUMGdhV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaVU5zYVdOclNHRnVaR3hsY2lod2IyeDViR2x1WlNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU2xjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnYVc1cGRGQnZiSGxzYVc1bGN5Z3BJSHRjYmlBZ0lDQXZMeURudkpQbHJaZ2djMlZuYldWdWRDRG5tN2psaGJQbWxiRG1qYTVjYmlBZ0lDQjBhR2x6TG1OaFkyaGxVMlZuYldWdWRGQmhjbUZ0Y3lncFhHNWNiaUFnSUNCMGFHbHpMbkJ2Ykhsc2FXNWxjeUE5SUhSb2FYTXVaR0YwWVV4cGMzUXViV0Z3S0Noa1lYUmhLU0E5UGlCN1hHNGdJQ0FnSUNCamIyNXpkQ0JzWVhsbGNpQTlJRXd1WjJWdlNsTlBUaWhrWVhSaExtZGxiMjFsZEhKNUtTNW5aWFJNWVhsbGNuTW9LVnN3WFZ4dUlDQWdJQ0FnTHk4Z2JHVjBJR052Ykc5eUlEMGdkR2hwY3k1dmNIUnBiMjV6TG1OdmJHOXlYRzRnSUNBZ0lDQXZMeUJwWmlBb2RHaHBjeTV2Y0hScGIyNXpMbkpsYm1SbGNsQnZiSGxzYVc1bFEyOXNiM0pVZVhCbElEMDlQU0FuYzJWbmJXVnVkR1ZrSnlrZ2UxeHVJQ0FnSUNBZ0x5OGdJQ0JqYjJ4dmNpQTlJSFJvYVhNdVoyVjBVMlZuYldWdWRHVmtVRzlzZVd4cGJtVkRiMnh2Y2loa1lYUmhLVnh1SUNBZ0lDQWdMeThnZlZ4dUlDQWdJQ0FnWTI5dWMzUWdjRzlzZVd4cGJtVWdQU0J1WlhjZ1VHOXNlV3hwYm1Vb1hHNGdJQ0FnSUNBZ0lDaHNZWGxsY2lCaGN5Qk1MbEJ2Ykhsc2FXNWxLUzVuWlhSTVlYUk1ibWR6S0NrZ1lYTWdVRzlzZVd4cGJtVk1ZWFJNYm1kRmVIQnlaWE56YVc5dVhHNGdJQ0FnSUNBcFhHNWNiaUFnSUNBZ0lDOHZJT1d3aHVlYnVPV0ZzK1dBdk9lN2tlV3VtdVdJc0NCdFlYSnJaWExrdUlwY2JpQWdJQ0FnSUhCdmJIbHNhVzVsTG5ObGRFUmhkR0VvWkdGMFlTbGNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIQnZiSGxzYVc1bFhHNGdJQ0FnZlNsY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1oyVjBVMlZuYldWdWRHVmtVRzlzZVd4cGJtVkRiMnh2Y2loa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwcE9pQnpkSEpwYm1jZ2UxeHVJQ0FnSUdOdmJuTjBJSFpoYkNBOUlHUmhkR0ZiZEdocGN5NXZjSFJwYjI1ekxuTmxaMjFsYm5SbFpFRjBkSEpkWEc0Z0lDQWdZMjl1YzNRZ1kyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVjMlZuYldWdWRHVmtRMjlzYjNKelcxeHVJQ0FnSUNBZ2NHRnljMlZKYm5Rb0p5Y2dLeUFvZG1Gc0lDMGdkR2hwY3k1elpXZHRaVzUwWldSTmFXNHBJQzhnZEdocGN5NXpaV2R0Wlc1MFpXUlRkR1Z3TENBeE1DbGNiaUFnSUNCZFhHNGdJQ0FnY21WMGRYSnVJR052Ykc5eVhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lIQnZiSGxzYVc1bFEyeHBZMnRJWVc1a2JHVnlLSEJ2Ykhsc2FXNWxPaUJRYjJ4NWJHbHVaU2tnZTF4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkZCdmJIbHNhVzVsSUQwZ2NHOXNlV3hwYm1WY2JpQWdJQ0F2THlEbGlLRHBtYVRsaVkza3VJRGt1S29nWm05amRYTmNiaUFnSUNCcFppQW9kR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2Ykhsc2FXNWxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXeHBibVV1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlYRzRnSUNBZ0x5OGc1NVNmNW9pUTViMlQ1WW1OSUdadlkzVnpYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxzYVc1bElEMGdibVYzSUZCdmJIbHNhVzVsS0Z4dUlDQWdJQ0FnY0c5c2VXeHBibVV1WjJWMFRHRjBURzVuY3lncElHRnpJRkJ2Ykhsc2FXNWxUR0YwVEc1blJYaHdjbVZ6YzJsdmJpeGNiaUFnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJNklIUm9hWE11WjJWMFEyOXNiM0lvY0c5c2VXeHBibVV1WjJWMFJHRjBZU2dwS1N4Y2JpQWdJQ0FnSUNBZ1ptbHNiRU52Ykc5eU9pQjBhR2x6TG1kbGRFTnZiRzl5S0hCdmJIbHNhVzVsTG1kbGRFUmhkR0VvS1N3Z0oyNXZjbTFoYkNjcExGeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNsY2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXeHBibVV1WVdSa1ZHOG9kR2hwY3k1dFlYQXBYRzVjYmlBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVVRzlzZVd4cGJtVmNiaUFnSUNBZ0lDNWlhVzVrVUc5d2RYQW9kR2hwY3k1blpYUlFiM0IxY0VOdmJuUmxiblFvY0c5c2VXeHBibVV1WjJWMFJHRjBZU2dwS1NsY2JpQWdJQ0FnSUM1dmNHVnVVRzl3ZFhBb0tWeHVYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxzYVc1bExtOXVLQ2R3YjNCMWNHTnNiM05sSnl3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsTG5KbGJXOTJaU2dwWEc0Z0lDQWdmU2xjYmx4dUlDQWdJSEJ2Ykhsc2FXNWxMbU5zYjNObFZHOXZiSFJwY0NncFhHNWNiaUFnSUNCMGFHbHpMbTFoY0M1d1lXNVVieWgwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXeHBibVV1WjJWMFEyVnVkR1Z5S0NrcFhHNGdJQ0FnZEdocGN5NWphR0Z1Ym1Wc1JuVnVZeWduYjI0dFkyeHBZMnN0Y0c5c2VXeHBibVVuTENCd2IyeDViR2x1WlNsY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1oyVjBWRzl2YkZScGNFTnZiblJsYm5Rb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUNjbklDc2daR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVkRzl2YkhScGNFRjBkSEpkWEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdkbGRGQnZjSFZ3UTI5dWRHVnVkQ2hrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUFuSjF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSFJvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJZ1BUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZQ1I3ZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNuMDZJQ1I3WkdGMFlWdDBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5WFgxZ1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGVYQmxiMllnZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpQTlQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJnSkh0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlMbXhoWW1Wc2ZUb2dKSHRjYmlBZ0lDQWdJQ0FnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5TG5aaGJIVmxYVnh1SUNBZ0lDQWdmV0JjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQmpiMjVtYVdkUWIyeDViR2x1WlV4aGVXVnlLQ2tnZTF4dUlDQWdJSFJvYVhNdWNHOXNlV3hwYm1WTVlYbGxjaUE5SUV3dWJHRjVaWEpIY205MWNDZ3BYRzRnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaWE11Wm05eVJXRmphQ2dvY0c5c2VXeHBibVVwSUQwK0lIdGNiaUFnSUNBZ0lHeGxkQ0JqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1amIyeHZjbHh1SUNBZ0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlNBOVBUMGdKM05sWjIxbGJuUmxaQ2NwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0lnUFNCMGFHbHpMbWRsZEZObFoyMWxiblJsWkZCdmJIbHNhVzVsUTI5c2IzSW9jRzlzZVd4cGJtVXVaMlYwUkdGMFlTZ3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdZMjl1YzNRZ2IzQjBhVzl1Y3pvZ1RDNVFiMng1YkdsdVpVOXdkR2x2Ym5NZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQjBhR2x6TG05d2RHbHZibk1zSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0lzWEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnWTI5dWMzUWdibVYzVUc5c2VXeHBibVVnUFNCdVpYY2dVRzlzZVd4cGJtVW9YRzRnSUNBZ0lDQWdJSEJ2Ykhsc2FXNWxMbWRsZEV4aGRFeHVaM01vS1NCaGN5QlFiMng1YkdsdVpVeGhkRXh1WjBWNGNISmxjM05wYjI0c1hHNGdJQ0FnSUNBZ0lHOXdkR2x2Ym5OY2JpQWdJQ0FnSUNsY2JpQWdJQ0FnSUc1bGQxQnZiSGxzYVc1bExtOXVLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlVOc2FXTnJTR0Z1Wkd4bGNpaHdiMng1YkdsdVpTbGNiaUFnSUNBZ0lIMHBYRzRnSUNBZ0lDQnVaWGRRYjJ4NWJHbHVaUzV6WlhSRVlYUmhLSEJ2Ykhsc2FXNWxMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVkRzl2YkhScGNFRjBkSElwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNVRzlzZVd4cGJtVXVZbWx1WkZSdmIyeDBhWEFvZEdocGN5NW5aWFJVYjI5c1ZHbHdRMjl1ZEdWdWRDaHVaWGRRYjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnZEdocGN5NXdiMng1YkdsdVpVeGhlV1Z5TG1Ga1pFeGhlV1Z5S0c1bGQxQnZiSGxzYVc1bEtWeHVJQ0FnSUgwcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNHOXNlV3hwYm1WTVlYbGxjbHh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdZMkZqYUdWVFpXZHRaVzUwVUdGeVlXMXpLQ2tnZTF4dUlDQWdJR052Ym5OMElITmxaMjFsYm5SbFpFeGxibWQwYUNBOUlIUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JEYjJ4dmNuTXViR1Z1WjNSb1hHNGdJQ0FnYkdWMElHMWhlRlpoYkNBOUlDMUpibVpwYm1sMGVWeHVJQ0FnSUd4bGRDQnRhVzVXWVd3Z1BTQkpibVpwYm1sMGVWeHVJQ0FnSUdadmNpQW9ZMjl1YzNRZ1pHRjBZU0J2WmlCMGFHbHpMbVJoZEdGTWFYTjBLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQjJZV3dnUFNCa1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSQmRIUnlYVnh1SUNBZ0lDQWdiV0Y0Vm1Gc0lEMGdUV0YwYUM1dFlYZ29iV0Y0Vm1Gc0xDQjJZV3dwWEc0Z0lDQWdJQ0J0YVc1V1lXd2dQU0JOWVhSb0xtMXBiaWh0YVc1V1lXd3NJSFpoYkNsY2JpQWdJQ0I5WEc0Z0lDQWdZMjl1YzNRZ2MzUmxjQ0E5SUNodFlYaFdZV3dnTFNCdGFXNVdZV3dnS3lBeEtTQXZJSE5sWjIxbGJuUmxaRXhsYm1kMGFGeHVJQ0FnSUhSb2FYTXVjMlZuYldWdWRHVmtUV2x1SUQwZ2JXbHVWbUZzWEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSVGRHVndJRDBnYzNSbGNGeHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1oyVjBRMjlzYjNJb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdExDQnRiMlJsUHpvZ1EyOXNiM0pOYjJSbEtTQjdYRzRnSUNBZ2JHVjBJR052Ykc5eUlEMGdkR2hwY3k1dmNIUnBiMjV6TG1OdmJHOXlYRzRnSUNBZ2FXWWdLSFJvYVhNdWIzQjBhVzl1Y3k1eVpXNWtaWEpRYjJ4NWJHbHVaVU52Ykc5eVZIbHdaU0E5UFQwZ0ozTmxaMjFsYm5SbFpDY3BJSHRjYmlBZ0lDQWdJR052Ykc5eUlEMGdkR2hwY3k1blpYUlRaV2R0Wlc1MFpXUlFiMng1YkdsdVpVTnZiRzl5S0dSaGRHRXBYRzRnSUNBZ2ZWeHVJQ0FnSUhOM2FYUmphQ0FvYlc5a1pTa2dlMXh1SUNBZ0lDQWdZMkZ6WlNBblpHRnlhMlZ1SnpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSaGNtdGxiaWhqYjJ4dmNpbGNiaUFnSUNBZ0lHTmhjMlVnSjJ4cFoyaDBaVzRuT2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYkdsbmFIUmxiaWhqYjJ4dmNpbGNiaUFnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyeHZjbHh1SUNBZ0lIMWNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJQ29nWVhNZ1EyOXNiM0lnWm5KdmJTQW5ZMjlzYjNJblhHNWNibVoxYm1OMGFXOXVJR3hwWjJoMFpXNG9hR1Y0UTI5c2IzSTZJSE4wY21sdVp5a2dlMXh1SUNCeVpYUjFjbTRnUTI5c2IzSW9hR1Y0UTI5c2IzSXBYRzRnSUNBZ0xteHBaMmgwWlc0b01DNDFLVnh1SUNBZ0lDNW9aWGdvS1Z4dWZWeHVablZ1WTNScGIyNGdaR0Z5YTJWdUtHaGxlRU52Ykc5eU9pQnpkSEpwYm1jcElIdGNiaUFnY21WMGRYSnVJRU52Ykc5eUtHaGxlRU52Ykc5eUtWeHVJQ0FnSUM1a1lYSnJaVzRvTUM0MUtWeHVJQ0FnSUM1b1pYZ29LVnh1ZlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQnNhV2RvZEdWdUxGeHVJQ0JrWVhKclpXNHNYRzU5WEc1bGVIQnZjblFnZXlCc2FXZG9kR1Z1TENCa1lYSnJaVzRnZlZ4dUlsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0iLCIvLyBAdHMtaWdub3JlXG5pbXBvcnQgbGVhZmxldE1hcCBmcm9tICcuLi8uLi8uLi9sZWFmbGV0LWxheWVyJ1xuXG4vLyBAdHMtaWdub3JlXG5jb25zdCBMID0gd2luZG93LkxcblxudmFyIHBvc2l0aW9uID0gbmV3IEwuTGF0TG5nKDM5LjkwNzc4LCAxMTYuNDAxMjE2KVxudmFyIG1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KHBvc2l0aW9uLCAxMylcblxuTC50aWxlTGF5ZXJcbiAgLmNoaW5hUHJvdmlkZXIoJ0dhb0RlLk5vcm1hbC5NYXAnLCB7IG1heFpvb206IDE4LCBtaW5ab29tOiAzIH0pXG4gIC5hZGRUbyhtYXApXG5cbnZhciBkYXRhTGlzdCA9IFtcbiAge1xuICAgIGdlb21ldHJ5OiB7XG4gICAgICB0eXBlOiAnUG9seWdvbicsXG4gICAgICBjb29yZGluYXRlczogW1xuICAgICAgICBbXG4gICAgICAgICAgWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbiAgICAgICAgICBbMTE2LjM5MTIxNiwgMzkuOTA3NzhdLFxuICAgICAgICAgIFsxMTYuMzkxMjE2LCAzOS45MTc3OF0sXG4gICAgICAgICAgWzExNi40MDEyMTYsIDM5LjkxNzc4XSxcbiAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICBwcmljZTogMSxcbiAgfSxcbl1cblxudmFyIGxheWVyID0gbmV3IGxlYWZsZXRNYXAuR3JpZHNMYXllcihcbiAgbWFwLFxuICBkYXRhTGlzdCxcbiAgeyB0b29sdGlwQXR0cjogJ3ByaWNlJywgcG9wdXBBdHRyOiB7IGxhYmVsOiAncCcsIHZhbHVlOiAncHJpY2UnIH0gfSxcbiAgY29uc29sZS5sb2dcbilcbmxheWVyLnRvZ2dsZVRvb2x0aXAodHJ1ZSlcbmxheWVyLmRyYXcoKVxuXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDEsXG4vLyAgICAgbmFtZTogJzUnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICBjb29yZGluYXRlczogWzExNi4zOTEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICB9LFxuLy8gICAgIHByaWNlOiAxLFxuLy8gICAgIG5hbWU6ICcyJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMSxcbi8vICAgICBuYW1lOiAnMScsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTE3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDEsXG4vLyAgICAgbmFtZTogJzInXG4vLyAgIH0sXG4vLyBdXG5cbi8vIHZhciBsYXllciA9IG5ldyBsZWFmbGV0TWFwLk1hcmtlcnNMYXllcihcbi8vICAgbWFwLFxuLy8gICBkYXRhTGlzdCxcbi8vICAgeyByZW5kZXJUeXBlOiAnY2x1c3RlcicsIGljb25Vbmljb2RlOiAnJiN4ZTY1NTsnLCBwb3B1cEF0dHI6ICduYW1lJywgdG9vbHRpcEF0dHI6ICduYW1lJyB9LFxuLy8gICBjb25zb2xlLmxvZ1xuLy8gKVxuLy8gbGF5ZXIuZHJhdygpXG5cbi8vIHZhciBkYXRhTGlzdCA9IFtcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMSxcbi8vICAgfSxcbi8vIF1cblxuLy8gdmFyIGxheWVyID0gbmV3IGxlYWZsZXRNYXAuTWFrZXJzTGF5ZXIobWFwLCBkYXRhTGlzdCwge30sIGNvbnNvbGUubG9nKVxuLy8gbGF5ZXIuZHJhdygpXG5cbi8vIHZhciBkYXRhTGlzdCA9IFtcbi8vICAgW1xuLy8gICAgIHtcbi8vICAgICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgICAgfSxcbi8vICAgICAgIHByaWNlOiAxLFxuLy8gICAgIH0sXG4vLyAgIF0sXG4vLyAgIFtcbi8vICAgICB7XG4vLyAgICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgICBjb29yZGluYXRlczogWzExNi4zOTEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBwcmljZTogMSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gICBbXG4vLyAgICAge1xuLy8gICAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgcHJpY2U6IDEsXG4vLyAgICAgfSxcbi8vICAgXSxcbi8vICAgW1xuLy8gICAgIHtcbi8vICAgICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTE3NzhdLFxuLy8gICAgICAgfSxcbi8vICAgICAgIHByaWNlOiAxLFxuLy8gICAgIH0sXG4vLyAgIF0sXG4vLyBdXG4vLyBjb25zdCBsYXllciA9IG5ldyBsZWFmbGV0TWFwLkR5bmFtaWNIZWF0TGF5ZXIoXG4vLyAgIG1hcCxcbi8vICAgZGF0YUxpc3QsXG4vLyAgIHsgbG9vcDogdHJ1ZSwgYXV0bzogdHJ1ZSB9LFxuLy8gICBjb25zb2xlLmxvZ1xuLy8gKVxuLy8gICAuZHJhdygpXG4vLyAgIC5zdGFydCgpXG5cbi8vIEwubWFya2VyKFszMi4wMzA0LCAxMTguNzk2OF0sIHtcbi8vICAgaWNvbjogTC5kaXZJY29uKHtcbi8vICAgICBodG1sOiAnPGkgY2xhc3M9XCJpY29uZm9udFwiIHN0eWxlPVwiZm9udC1zaXplOiA0MHB4O1wiPiYjeGU2NTU7PC9pPicsXG4vLyAgICAgaWNvblNpemU6IFs0MCwgNDBdLFxuLy8gICAgIGNsYXNzTmFtZTogJ3Rlc3QnLFxuLy8gICB9KSxcbi8vIH0pLmFkZFRvKG1hcClcbi8vIEwubWFya2VyKFszMi4wMzA0LCAxMTguNzk2OF0pLmFkZFRvKG1hcClcbi8vIHZhciBkYXRhTGlzdCA9IFtcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMixcbi8vICAgfSxcbi8vIF1cblxuLy8gY29uc3QgbGF5ZXIgPSBuZXcgbGVhZmxldE1hcC5NYXJrZXJzTGF5ZXIoXG4vLyAgIG1hcCxcbi8vICAgZGF0YUxpc3QsXG4vLyAgIHtcbi8vICAgICBpY29uVW5pY29kZTogJyYjeGU2NTU7Jyxcbi8vICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4vLyAgICAgaWNvbkFuY2hvcjogWzEwLCAyMF0sXG4vLyAgICAgcG9wdXBBdHRyOiAncHJpY2UnLFxuLy8gICAgIHRvb2x0aXBBdHRyOiAncHJpY2UnLFxuLy8gICB9LFxuLy8gICBmdW5jdGlvbihldmVudE5hbWUpIHtcbi8vICAgICBjb25zb2xlLmxvZyhldmVudE5hbWUpXG4vLyAgIH1cbi8vIClcblxuLy8gbGF5ZXIuZHJhdygpXG5cbi8vIC8vIEwubWFya2VyKEwubGF0TG5nKDM5LjkwNzc4LCAxMTYuNDAxMjE2KSlcbi8vIC8vICAgLmFkZFRvKG1hcClcbi8vIC8vICAgLmJpbmRUb29sdGlwKCdhZGYnKVxuXG4vLyBMLm1hcmtlcihMLmxhdExuZygzOS45MDc3OCwgMTE2LjQwMTIxNiksIHtcbi8vICAgb3BhY2l0eTogMC4yLFxuLy8gICBpY29uOiBMLmRpdkljb24oe1xuLy8gICAgIGljb25BbmNob3I6IFsxMCwgMjBdLFxuLy8gICAgIGljb25TaXplOiBbMjAsIDIwXSxcbi8vICAgICBodG1sOiBgXG4vLyAgICAgPGlcbi8vICAgICAgIGNsYXNzPVwiaWNvbmZvbnRcIlxuLy8gICAgICAgc3R5bGU9XCJcbi8vICAgICAgICAgY29sb3I6IHJlZDtcbi8vICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgICAgXCJcbi8vICAgICAgID5cbi8vICAgICAgICYjeGU2NTU7XG4vLyAgICAgPC9pPlxuLy8gICBgLFxuLy8gICB9KSxcbi8vIH0pLmFkZFRvKG1hcClcbi8vIHdpbmRvdy5sYXllciA9IGxheWVyXG4iXSwic291cmNlUm9vdCI6IiJ9