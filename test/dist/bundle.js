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
        const DEFAULT_COLOR = '#3388FF';
        this.defaultOptions = {
            renderType: 'point',
            renderPointColorType: 'single',
            iconType: 'unicode',
            iconSize: [20, 20],
            iconClass: 'iconfont',
            iconColor: DEFAULT_COLOR,
            iconAnchor: [10, 20],
            popup: true,
            tooltip: true,
            popupAttr: { label: '名称', value: 'name' },
            tooltipAttr: 'name',
            segmentedColors: [DEFAULT_COLOR],
            classifiedColors: [DEFAULT_COLOR],
            isCluster: false,
            renderClusterColorType: 'smart',
            bubbleStrokeWidth: 1,
            bubbleColors: [DEFAULT_COLOR],
            bubbleStrokeOpacity: 0.2,
            bubbleFillOpacity: 0.5,
            bubbleSizes: [10],
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
        this.bubbleLayer = null;
        this.segmentedMin = Infinity;
        this.segmentedStep = 1;
        this.bubbledSizeMin = Infinity;
        this.bubbledSizeStep = 1;
        this.classifiedColorMap = {};
        this.bubbledColorMap = {};
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
                case 'bubble': {
                    this.layer = this.configBubbleLayer();
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
    getClassifiedColorRefs() {
        return this.classifiedColorRefs;
    }
    getBubbledColorRefs() {
        return this.bubbledColorRefs;
    }
    _zoomStartCb() {
        if (!this.visible) {
            return;
        }
        if (this.type === 'marker') {
            switch (this.options.renderType) {
                case 'point': {
                    if (this.options.isCluster) {
                        return;
                    }
                    if (this.markerLayer) {
                        this.map.removeLayer(this.markerLayer);
                    }
                    break;
                }
                case 'bubble': {
                    if (this.bubbleLayer) {
                        this.map.removeLayer(this.bubbleLayer);
                    }
                    break;
                }
                default: {
                    return;
                }
            }
        }
        else if (this.type === 'markerBuffer') {
            this.map.removeLayer(this.markerLayer);
        }
        else {
            return;
        }
    }
    _zoomEndCb() {
        if (!this.visible) {
            return;
        }
        if (this.type === 'marker') {
            switch (this.options.renderType) {
                case 'point': {
                    if (this.options.isCluster) {
                        return;
                    }
                    if (this.markerLayer) {
                        this.map.addLayer(this.markerLayer);
                    }
                    break;
                }
                case 'bubble': {
                    if (this.bubbleLayer) {
                        this.map.addLayer(this.bubbleLayer);
                    }
                    break;
                }
                default: {
                    return;
                }
            }
        }
        else if (this.type === 'markerBuffer') {
            this.map.addLayer(this.markerLayer);
        }
        else {
            return;
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
        this.cacheBubbleParams();
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
    /** 渲染为气泡图 */
    configBubbleLayer() {
        if (this.bubbleLayer) {
            this.bubbleLayer.remove();
        }
        this.bubbleLayer = L.layerGroup();
        this.markers.forEach((marker) => {
            const radius = this.getBubbledMarkerSize(marker.getData());
            const fillColor = this.getBubbledMarkerColor(marker.getData());
            const color = this.options.bubbleStrokeColor || Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["lighten"])(fillColor);
            const weight = this.options.bubbleStrokeWidth;
            const opacity = this.options.bubbleStrokeOpacity;
            const fillOpacity = this.options.bubbleFillOpacity;
            const bubble = L.circleMarker(marker.getLatLng(), {
                radius,
                color,
                fillColor,
                weight,
                opacity,
                fillOpacity,
            });
            if (this.options.popup) {
                bubble.bindPopup(this.getPopupContent(marker.getData()));
            }
            if (this.options.tooltip) {
                bubble.bindTooltip(this.getToolTipContent(marker.getData()));
            }
            this.bubbleLayer.addLayer(bubble);
        });
        return this.bubbleLayer;
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
        this.classifiedColorRefs = [];
        values.forEach(([attr, nums], index) => {
            let color = 'black';
            if (index < this.options.classifiedColors.length) {
                color = this.options.classifiedColors[index];
            }
            this.classifiedColorMap[attr] = color;
            this.classifiedColorRefs.push({
                attr,
                color,
                nums,
            });
        });
    }
    cacheBubbleParams() {
        if (!this.options.bubbleSizeAttr) {
            return;
        }
        const bubbledSizesLength = this.options.bubbleSizes.length;
        let maxSizeVal = -Infinity;
        let minSizeVal = Infinity;
        for (const data of this.dataList) {
            const sizeVal = data[this.options.bubbleSizeAttr];
            maxSizeVal = Math.max(maxSizeVal, sizeVal);
            minSizeVal = Math.min(minSizeVal, sizeVal);
        }
        const sizeStep = (maxSizeVal - minSizeVal + 1) / bubbledSizesLength;
        this.bubbledSizeMin = minSizeVal;
        this.bubbledSizeStep = sizeStep;
        if (!this.options.bubbleColorAttr) {
            return;
        }
        const tmp = {};
        const prop = this.options.bubbleColorAttr;
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
        this.bubbledColorRefs = [];
        values.forEach(([attr, nums], index) => {
            let color = 'black';
            if (index < this.options.bubbleColors.length) {
                color = this.options.bubbleColors[index];
            }
            this.bubbledColorMap[attr] = color;
            this.bubbledColorRefs.push({
                attr,
                color,
                nums,
            });
        });
    }
    getClassifyMarkerColor(data) {
        return this.classifiedColorMap[data[this.options.classifiedAttr]];
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
    getBubbledMarkerSize(data) {
        const val = data[this.options.bubbleSizeAttr];
        const size = this.options.bubbleSizes[parseInt('' + (val - this.bubbledSizeMin) / this.bubbledSizeStep, 10)];
        return size;
    }
    getBubbledMarkerColor(data) {
        return this.bubbledColorMap[data[this.options.bubbleColorAttr]];
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
            classifiedColors: [DEFAULT_COLOR],
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
        this.classifyColorMap = {};
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
    getClassifyColorRefs() {
        return this.classifyColorRefs;
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
    getClassifyPolygonColor(data) {
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
        this.cacheClassifyParams();
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
            const options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["optionsMerge"])({}, this.options, {
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
        if (this.options.renderPolygonColorType === 'classified') {
            color = this.getClassifyPolygonColor(data);
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
            classifiedColors: ['#3388FF'],
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
        this.classifyColorMap = {};
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
    getClassifyColorRefs() {
        return this.classifyColorRefs;
    }
    initOptions(options) {
        this.options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["optionsMerge"])(this.defaultOptions, this.options, options);
    }
    initPolylines() {
        // 缓存 segment 相关数据
        this.cacheSegmentParams();
        this.cacheClassifyParams();
        this.polylines = this.dataList.map((data) => {
            const layer = L.geoJSON(data.geometry).getLayers()[0];
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
            const options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["optionsMerge"])({}, this.options, {
                color: this.getColor(polyline.getData()),
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
    getClassifyPolylineColor(data) {
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
    getColor(data, mode) {
        let color = this.options.color;
        if (this.options.renderPolylineColorType === 'segmented') {
            color = this.getSegmentedPolylineColor(data);
        }
        if (this.options.renderPolylineColorType === 'classified') {
            color = this.getClassifyPolylineColor(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvbWFya2VyL01hcmtlci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHNEQUFZOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGdGQUFZO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixJQUFJO0FBQzdCLHdCQUF3QixFQUFFLFdBQVcsRUFBRTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDek9ZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQywwREFBYztBQUN4QyxjQUFjLG1CQUFPLENBQUMsNERBQWU7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUMsQ0FBQyxHQUFHLENBQUM7U0FDOUI7S0FDRjtJQUNELE9BQU8sWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUVjO0lBQ2IsT0FBTztJQUNQLE1BQU07SUFDTixZQUFZO0NBQ2I7QUFDdUMiLCJmaWxlIjoibGVhZmxldC1sYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxlYWZsZXRNYXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNzc0tleXdvcmRzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKHZhciBrZXkgaW4gY3NzS2V5d29yZHMpIHtcblx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XV0gPSBrZXk7XG5cdH1cbn1cblxudmFyIGNvbnZlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3JnYid9LFxuXHRoc2w6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHNsJ30sXG5cdGhzdjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc3YnfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2h3Yid9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDQsIGxhYmVsczogJ2NteWsnfSxcblx0eHl6OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3h5eid9LFxuXHRsYWI6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGFiJ30sXG5cdGxjaDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsY2gnfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydoZXgnXX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2tleXdvcmQnXX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTE2J119LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMjU2J119LFxuXHRoY2c6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ2gnLCAnYycsICdnJ119LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsncjE2JywgJ2cxNicsICdiMTYnXX0sXG5cdGdyYXk6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2dyYXknXX1cbn07XG5cbi8vIGhpZGUgLmNoYW5uZWxzIGFuZCAubGFiZWxzIHByb3BlcnRpZXNcbmZvciAodmFyIG1vZGVsIGluIGNvbnZlcnQpIHtcblx0aWYgKGNvbnZlcnQuaGFzT3duUHJvcGVydHkobW9kZWwpKSB7XG5cdFx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoISgnbGFiZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVsIGxhYmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoY29udmVydFttb2RlbF0ubGFiZWxzLmxlbmd0aCAhPT0gY29udmVydFttb2RlbF0uY2hhbm5lbHMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2hhbm5lbCBhbmQgbGFiZWwgY291bnRzIG1pc21hdGNoOiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBsYWJlbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJkaWY7XG5cdHZhciBnZGlmO1xuXHR2YXIgYmRpZjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciB2ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkaWZmID0gdiAtIE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgZGlmZmMgPSBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAodiAtIGMpIC8gNiAvIGRpZmYgKyAxIC8gMjtcblx0fTtcblxuXHRpZiAoZGlmZiA9PT0gMCkge1xuXHRcdGggPSBzID0gMDtcblx0fSBlbHNlIHtcblx0XHRzID0gZGlmZiAvIHY7XG5cdFx0cmRpZiA9IGRpZmZjKHIpO1xuXHRcdGdkaWYgPSBkaWZmYyhnKTtcblx0XHRiZGlmID0gZGlmZmMoYik7XG5cblx0XHRpZiAociA9PT0gdikge1xuXHRcdFx0aCA9IGJkaWYgLSBnZGlmO1xuXHRcdH0gZWxzZSBpZiAoZyA9PT0gdikge1xuXHRcdFx0aCA9ICgxIC8gMykgKyByZGlmIC0gYmRpZjtcblx0XHR9IGVsc2UgaWYgKGIgPT09IHYpIHtcblx0XHRcdGggPSAoMiAvIDMpICsgZ2RpZiAtIHJkaWY7XG5cdFx0fVxuXHRcdGlmIChoIDwgMCkge1xuXHRcdFx0aCArPSAxO1xuXHRcdH0gZWxzZSBpZiAoaCA+IDEpIHtcblx0XHRcdGggLT0gMTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGggKiAzNjAsXG5cdFx0cyAqIDEwMCxcblx0XHR2ICogMTAwXG5cdF07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2VcbiAqICovXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0cmV0dXJuIChcblx0XHRNYXRoLnBvdyh4WzBdIC0geVswXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMV0gLSB5WzFdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsyXSAtIHlbMl0sIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHR2YXIgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHR2YXIgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAodmFyIGtleXdvcmQgaW4gY3NzS2V5d29yZHMpIHtcblx0XHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5d29yZCkpIHtcblx0XHRcdHZhciB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn18W2EtZjAtOV17M30vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGNvbG9yU3RyaW5nID0gbWF0Y2hbMF07XG5cblx0aWYgKG1hdGNoWzBdLmxlbmd0aCA9PT0gMykge1xuXHRcdGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoY2hhcikge1xuXHRcdFx0cmV0dXJuIGNoYXIgKyBjaGFyO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuXG5jb252ZXJ0LmdyYXkucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFthcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc2wgPSBjb252ZXJ0LmdyYXkuaHN2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFswLCAwLCBhcmdzWzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5od2IgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDEwMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuY215ayA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMCwgMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkubGFiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFtncmF5WzBdLCAwLCAwXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oZXggPSBmdW5jdGlvbiAoZ3JheSkge1xuXHR2YXIgdmFsID0gTWF0aC5yb3VuZChncmF5WzBdIC8gMTAwICogMjU1KSAmIDB4RkY7XG5cdHZhciBpbnRlZ2VyID0gKHZhbCA8PCAxNikgKyAodmFsIDw8IDgpICsgdmFsO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5yZ2IuZ3JheSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHZhbCA9IChyZ2JbMF0gKyByZ2JbMV0gKyByZ2JbMl0pIC8gMztcblx0cmV0dXJuIFt2YWwgLyAyNTUgKiAxMDBdO1xufTtcbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbnZhciByb3V0ZSA9IHJlcXVpcmUoJy4vcm91dGUnKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuXG4vKlxuXHR0aGlzIGZ1bmN0aW9uIHJvdXRlcyBhIG1vZGVsIHRvIGFsbCBvdGhlciBtb2RlbHMuXG5cblx0YWxsIGZ1bmN0aW9ucyB0aGF0IGFyZSByb3V0ZWQgaGF2ZSBhIHByb3BlcnR5IGAuY29udmVyc2lvbmAgYXR0YWNoZWRcblx0dG8gdGhlIHJldHVybmVkIHN5bnRoZXRpYyBmdW5jdGlvbi4gVGhpcyBwcm9wZXJ0eSBpcyBhbiBhcnJheVxuXHRvZiBzdHJpbmdzLCBlYWNoIHdpdGggdGhlIHN0ZXBzIGluIGJldHdlZW4gdGhlICdmcm9tJyBhbmQgJ3RvJ1xuXHRjb2xvciBtb2RlbHMgKGluY2x1c2l2ZSkuXG5cblx0Y29udmVyc2lvbnMgdGhhdCBhcmUgbm90IHBvc3NpYmxlIHNpbXBseSBhcmUgbm90IGluY2x1ZGVkLlxuKi9cblxuZnVuY3Rpb24gYnVpbGRHcmFwaCgpIHtcblx0dmFyIGdyYXBoID0ge307XG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcblx0dmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcclxuXHRcImFudGlxdWV3aGl0ZVwiOiBbMjUwLCAyMzUsIDIxNV0sXHJcblx0XCJhcXVhXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcclxuXHRcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcclxuXHRcImJlaWdlXCI6IFsyNDUsIDI0NSwgMjIwXSxcclxuXHRcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXHJcblx0XCJibGFja1wiOiBbMCwgMCwgMF0sXHJcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LCAyMzUsIDIwNV0sXHJcblx0XCJibHVlXCI6IFswLCAwLCAyNTVdLFxyXG5cdFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcclxuXHRcImJyb3duXCI6IFsxNjUsIDQyLCA0Ml0sXHJcblx0XCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxyXG5cdFwiY2FkZXRibHVlXCI6IFs5NSwgMTU4LCAxNjBdLFxyXG5cdFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxyXG5cdFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxyXG5cdFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXHJcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLCAxNDksIDIzN10sXHJcblx0XCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXHJcblx0XCJjcmltc29uXCI6IFsyMjAsIDIwLCA2MF0sXHJcblx0XCJjeWFuXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcclxuXHRcImRhcmtjeWFuXCI6IFswLCAxMzksIDEzOV0sXHJcblx0XCJkYXJrZ29sZGVucm9kXCI6IFsxODQsIDEzNCwgMTFdLFxyXG5cdFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxyXG5cdFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcclxuXHRcImRhcmttYWdlbnRhXCI6IFsxMzksIDAsIDEzOV0sXHJcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbODUsIDEwNywgNDddLFxyXG5cdFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxyXG5cdFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcclxuXHRcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXHJcblx0XCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcclxuXHRcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXHJcblx0XCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXHJcblx0XCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmtzbGF0ZWdyZXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbMCwgMjA2LCAyMDldLFxyXG5cdFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxyXG5cdFwiZGVlcHBpbmtcIjogWzI1NSwgMjAsIDE0N10sXHJcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbMCwgMTkxLCAyNTVdLFxyXG5cdFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRvZGdlcmJsdWVcIjogWzMwLCAxNDQsIDI1NV0sXHJcblx0XCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcclxuXHRcImZsb3JhbHdoaXRlXCI6IFsyNTUsIDI1MCwgMjQwXSxcclxuXHRcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXHJcblx0XCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJnYWluc2Jvcm9cIjogWzIyMCwgMjIwLCAyMjBdLFxyXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LCAyNDgsIDI1NV0sXHJcblx0XCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXHJcblx0XCJnb2xkZW5yb2RcIjogWzIxOCwgMTY1LCAzMl0sXHJcblx0XCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxyXG5cdFwiZ3JlZW55ZWxsb3dcIjogWzE3MywgMjU1LCA0N10sXHJcblx0XCJncmV5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcclxuXHRcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxyXG5cdFwiaW5kaWFucmVkXCI6IFsyMDUsIDkyLCA5Ml0sXHJcblx0XCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxyXG5cdFwiaXZvcnlcIjogWzI1NSwgMjU1LCAyNDBdLFxyXG5cdFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxyXG5cdFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxyXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXHJcblx0XCJsYXduZ3JlZW5cIjogWzEyNCwgMjUyLCAwXSxcclxuXHRcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXHJcblx0XCJsaWdodGJsdWVcIjogWzE3MywgMjE2LCAyMzBdLFxyXG5cdFwibGlnaHRjb3JhbFwiOiBbMjQwLCAxMjgsIDEyOF0sXHJcblx0XCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxyXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxyXG5cdFwibGlnaHRncmF5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxyXG5cdFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXHJcblx0XCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXHJcblx0XCJsaWdodHNlYWdyZWVuXCI6IFszMiwgMTc4LCAxNzBdLFxyXG5cdFwibGlnaHRza3libHVlXCI6IFsxMzUsIDIwNiwgMjUwXSxcclxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsIDE5NiwgMjIyXSxcclxuXHRcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcclxuXHRcImxpbWVcIjogWzAsIDI1NSwgMF0sXHJcblx0XCJsaW1lZ3JlZW5cIjogWzUwLCAyMDUsIDUwXSxcclxuXHRcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcclxuXHRcIm1hZ2VudGFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcIm1hcm9vblwiOiBbMTI4LCAwLCAwXSxcclxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxyXG5cdFwibWVkaXVtYmx1ZVwiOiBbMCwgMCwgMjA1XSxcclxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcclxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXHJcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbNjAsIDE3OSwgMTEzXSxcclxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLCAxMDQsIDIzOF0sXHJcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxyXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFs3MiwgMjA5LCAyMDRdLFxyXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksIDIxLCAxMzNdLFxyXG5cdFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXHJcblx0XCJtaW50Y3JlYW1cIjogWzI0NSwgMjU1LCAyNTBdLFxyXG5cdFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcclxuXHRcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcclxuXHRcIm5hdmFqb3doaXRlXCI6IFsyNTUsIDIyMiwgMTczXSxcclxuXHRcIm5hdnlcIjogWzAsIDAsIDEyOF0sXHJcblx0XCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcclxuXHRcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXHJcblx0XCJvbGl2ZWRyYWJcIjogWzEwNywgMTQyLCAzNV0sXHJcblx0XCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcclxuXHRcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXHJcblx0XCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxyXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXHJcblx0XCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxyXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXHJcblx0XCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcclxuXHRcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxyXG5cdFwicGVhY2hwdWZmXCI6IFsyNTUsIDIxOCwgMTg1XSxcclxuXHRcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXHJcblx0XCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcclxuXHRcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxyXG5cdFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXHJcblx0XCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcclxuXHRcInJlYmVjY2FwdXJwbGVcIjogWzEwMiwgNTEsIDE1M10sXHJcblx0XCJyZWRcIjogWzI1NSwgMCwgMF0sXHJcblx0XCJyb3N5YnJvd25cIjogWzE4OCwgMTQzLCAxNDNdLFxyXG5cdFwicm95YWxibHVlXCI6IFs2NSwgMTA1LCAyMjVdLFxyXG5cdFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcclxuXHRcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXHJcblx0XCJzYW5keWJyb3duXCI6IFsyNDQsIDE2NCwgOTZdLFxyXG5cdFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcclxuXHRcInNlYXNoZWxsXCI6IFsyNTUsIDI0NSwgMjM4XSxcclxuXHRcInNpZW5uYVwiOiBbMTYwLCA4MiwgNDVdLFxyXG5cdFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcclxuXHRcInNreWJsdWVcIjogWzEzNSwgMjA2LCAyMzVdLFxyXG5cdFwic2xhdGVibHVlXCI6IFsxMDYsIDkwLCAyMDVdLFxyXG5cdFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNsYXRlZ3JleVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbm93XCI6IFsyNTUsIDI1MCwgMjUwXSxcclxuXHRcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXHJcblx0XCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXHJcblx0XCJ0YW5cIjogWzIxMCwgMTgwLCAxNDBdLFxyXG5cdFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxyXG5cdFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXHJcblx0XCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcclxuXHRcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcclxuXHRcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXHJcblx0XCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXHJcblx0XCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXHJcblx0XCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcclxuXHRcInllbGxvd1wiOiBbMjU1LCAyNTUsIDBdLFxyXG5cdFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cclxufTtcclxuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb2xvck5hbWVzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xudmFyIHN3aXp6bGUgPSByZXF1aXJlKCdzaW1wbGUtc3dpenpsZScpO1xuXG52YXIgcmV2ZXJzZU5hbWVzID0ge307XG5cbi8vIGNyZWF0ZSBhIGxpc3Qgb2YgcmV2ZXJzZSBjb2xvciBuYW1lc1xuZm9yICh2YXIgbmFtZSBpbiBjb2xvck5hbWVzKSB7XG5cdGlmIChjb2xvck5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0cmV2ZXJzZU5hbWVzW2NvbG9yTmFtZXNbbmFtZV1dID0gbmFtZTtcblx0fVxufVxuXG52YXIgY3MgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0dG86IHt9LFxuXHRnZXQ6IHt9XG59O1xuXG5jcy5nZXQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdHZhciBwcmVmaXggPSBzdHJpbmcuc3Vic3RyaW5nKDAsIDMpLnRvTG93ZXJDYXNlKCk7XG5cdHZhciB2YWw7XG5cdHZhciBtb2RlbDtcblx0c3dpdGNoIChwcmVmaXgpIHtcblx0XHRjYXNlICdoc2wnOlxuXHRcdFx0dmFsID0gY3MuZ2V0LmhzbChzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAnaHNsJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2h3Yic6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHdiKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdod2InO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhbCA9IGNzLmdldC5yZ2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ3JnYic7XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdGlmICghdmFsKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4ge21vZGVsOiBtb2RlbCwgdmFsdWU6IHZhbH07XG59O1xuXG5jcy5nZXQucmdiID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGFiYnIgPSAvXiMoW2EtZjAtOV17Myw0fSkkL2k7XG5cdHZhciBoZXggPSAvXiMoW2EtZjAtOV17Nn0pKFthLWYwLTldezJ9KT8kL2k7XG5cdHZhciByZ2JhID0gL15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBwZXIgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIGtleXdvcmQgPSAvKFxcRCspLztcblxuXHR2YXIgcmdiID0gWzAsIDAsIDAsIDFdO1xuXHR2YXIgbWF0Y2g7XG5cdHZhciBpO1xuXHR2YXIgaGV4QWxwaGE7XG5cblx0aWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGhleCkpIHtcblx0XHRoZXhBbHBoYSA9IG1hdGNoWzJdO1xuXHRcdG1hdGNoID0gbWF0Y2hbMV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHQvLyBodHRwczovL2pzcGVyZi5jb20vc2xpY2UtdnMtc3Vic3RyLXZzLXN1YnN0cmluZy1tZXRob2RzLWxvbmctc3RyaW5nLzE5XG5cdFx0XHR2YXIgaTIgPSBpICogMjtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkyLCBpMiArIDIpLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSwgMTYpIC8gMjU1KSAqIDEwMCkgLyAxMDA7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGFiYnIpKSB7XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblx0XHRoZXhBbHBoYSA9IG1hdGNoWzNdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaV0gKyBtYXRjaFtpXSwgMTYpO1xuXHRcdH1cblxuXHRcdGlmIChoZXhBbHBoYSkge1xuXHRcdFx0cmdiWzNdID0gTWF0aC5yb3VuZCgocGFyc2VJbnQoaGV4QWxwaGEgKyBoZXhBbHBoYSwgMTYpIC8gMjU1KSAqIDEwMCkgLyAxMDA7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHJnYmEpKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaSArIDFdLCAwKTtcblx0XHR9XG5cblx0XHRpZiAobWF0Y2hbNF0pIHtcblx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcblx0XHR9XG5cblx0XHRpZiAobWF0Y2hbNF0pIHtcblx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChrZXl3b3JkKSkge1xuXHRcdGlmIChtYXRjaFsxXSA9PT0gJ3RyYW5zcGFyZW50Jykge1xuXHRcdFx0cmV0dXJuIFswLCAwLCAwLCAwXTtcblx0XHR9XG5cblx0XHRyZ2IgPSBjb2xvck5hbWVzW21hdGNoWzFdXTtcblxuXHRcdGlmICghcmdiKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZ2JbM10gPSAxO1xuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRyZ2JbaV0gPSBjbGFtcChyZ2JbaV0sIDAsIDI1NSk7XG5cdH1cblx0cmdiWzNdID0gY2xhbXAocmdiWzNdLCAwLCAxKTtcblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY3MuZ2V0LmhzbCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dPyg/OlxcZCpcXC4pP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcblxuXHRpZiAobWF0Y2gpIHtcblx0XHR2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR2YXIgaCA9IChwYXJzZUZsb2F0KG1hdGNoWzFdKSArIDM2MCkgJSAzNjA7XG5cdFx0dmFyIHMgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKTtcblx0XHR2YXIgbCA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApO1xuXHRcdHZhciBhID0gY2xhbXAoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcblxuXHRcdHJldHVybiBbaCwgcywgbCwgYV07XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNzLmdldC5od2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgaHdiID0gL15od2JcXChcXHMqKFsrLV0/XFxkKltcXC5dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHdiKTtcblxuXHRpZiAobWF0Y2gpIHtcblx0XHR2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR2YXIgaCA9ICgocGFyc2VGbG9hdChtYXRjaFsxXSkgJSAzNjApICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgdyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBiID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXHRcdHJldHVybiBbaCwgdywgYiwgYV07XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNzLnRvLmhleCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0cmV0dXJuIChcblx0XHQnIycgK1xuXHRcdGhleERvdWJsZShyZ2JhWzBdKSArXG5cdFx0aGV4RG91YmxlKHJnYmFbMV0pICtcblx0XHRoZXhEb3VibGUocmdiYVsyXSkgK1xuXHRcdChyZ2JhWzNdIDwgMVxuXHRcdFx0PyAoaGV4RG91YmxlKE1hdGgucm91bmQocmdiYVszXSAqIDI1NSkpKVxuXHRcdFx0OiAnJylcblx0KTtcbn07XG5cbmNzLnRvLnJnYiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0cmV0dXJuIHJnYmEubGVuZ3RoIDwgNCB8fCByZ2JhWzNdID09PSAxXG5cdFx0PyAncmdiKCcgKyBNYXRoLnJvdW5kKHJnYmFbMF0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsxXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzJdKSArICcpJ1xuXHRcdDogJ3JnYmEoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJywgJyArIHJnYmFbM10gKyAnKSc7XG59O1xuXG5jcy50by5yZ2IucGVyY2VudCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0gLyAyNTUgKiAxMDApO1xuXHR2YXIgZyA9IE1hdGgucm91bmQocmdiYVsxXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBiID0gTWF0aC5yb3VuZChyZ2JhWzJdIC8gMjU1ICogMTAwKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIHIgKyAnJSwgJyArIGcgKyAnJSwgJyArIGIgKyAnJSknXG5cdFx0OiAncmdiYSgnICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLmhzbCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGhzbGEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cdHJldHVybiBoc2xhLmxlbmd0aCA8IDQgfHwgaHNsYVszXSA9PT0gMVxuXHRcdD8gJ2hzbCgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUpJ1xuXHRcdDogJ2hzbGEoJyArIGhzbGFbMF0gKyAnLCAnICsgaHNsYVsxXSArICclLCAnICsgaHNsYVsyXSArICclLCAnICsgaHNsYVszXSArICcpJztcbn07XG5cbi8vIGh3YiBpcyBhIGJpdCBkaWZmZXJlbnQgdGhhbiByZ2IoYSkgJiBoc2woYSkgc2luY2UgdGhlcmUgaXMgbm8gYWxwaGEgc3BlY2lmaWMgc3ludGF4XG4vLyAoaHdiIGhhdmUgYWxwaGEgb3B0aW9uYWwgJiAxIGlzIGRlZmF1bHQgdmFsdWUpXG5jcy50by5od2IgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBod2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHZhciBhID0gJyc7XG5cdGlmIChod2JhLmxlbmd0aCA+PSA0ICYmIGh3YmFbM10gIT09IDEpIHtcblx0XHRhID0gJywgJyArIGh3YmFbM107XG5cdH1cblxuXHRyZXR1cm4gJ2h3YignICsgaHdiYVswXSArICcsICcgKyBod2JhWzFdICsgJyUsICcgKyBod2JhWzJdICsgJyUnICsgYSArICcpJztcbn07XG5cbmNzLnRvLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiByZXZlcnNlTmFtZXNbcmdiLnNsaWNlKDAsIDMpXTtcbn07XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIGNsYW1wKG51bSwgbWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaGV4RG91YmxlKG51bSkge1xuXHR2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gKHN0ci5sZW5ndGggPCAyKSA/ICcwJyArIHN0ciA6IHN0cjtcbn1cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb2xvclN0cmluZyA9IHJlcXVpcmUoJ2NvbG9yLXN0cmluZycpO1xudmFyIGNvbnZlcnQgPSByZXF1aXJlKCdjb2xvci1jb252ZXJ0Jyk7XG5cbnZhciBfc2xpY2UgPSBbXS5zbGljZTtcblxudmFyIHNraXBwZWRNb2RlbHMgPSBbXG5cdC8vIHRvIGJlIGhvbmVzdCwgSSBkb24ndCByZWFsbHkgZmVlbCBsaWtlIGtleXdvcmQgYmVsb25ncyBpbiBjb2xvciBjb252ZXJ0LCBidXQgZWguXG5cdCdrZXl3b3JkJyxcblxuXHQvLyBncmF5IGNvbmZsaWN0cyB3aXRoIHNvbWUgbWV0aG9kIG5hbWVzLCBhbmQgaGFzIGl0cyBvd24gbWV0aG9kIGRlZmluZWQuXG5cdCdncmF5JyxcblxuXHQvLyBzaG91bGRuJ3QgcmVhbGx5IGJlIGluIGNvbG9yLWNvbnZlcnQgZWl0aGVyLi4uXG5cdCdoZXgnXG5dO1xuXG52YXIgaGFzaGVkTW9kZWxLZXlzID0ge307XG5PYmplY3Qua2V5cyhjb252ZXJ0KS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuXHRoYXNoZWRNb2RlbEtleXNbX3NsaWNlLmNhbGwoY29udmVydFttb2RlbF0ubGFiZWxzKS5zb3J0KCkuam9pbignJyldID0gbW9kZWw7XG59KTtcblxudmFyIGxpbWl0ZXJzID0ge307XG5cbmZ1bmN0aW9uIENvbG9yKG9iaiwgbW9kZWwpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbG9yKSkge1xuXHRcdHJldHVybiBuZXcgQ29sb3Iob2JqLCBtb2RlbCk7XG5cdH1cblxuXHRpZiAobW9kZWwgJiYgbW9kZWwgaW4gc2tpcHBlZE1vZGVscykge1xuXHRcdG1vZGVsID0gbnVsbDtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiAhKG1vZGVsIGluIGNvbnZlcnQpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG1vZGVsOiAnICsgbW9kZWwpO1xuXHR9XG5cblx0dmFyIGk7XG5cdHZhciBjaGFubmVscztcblxuXHRpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFswLCAwLCAwXTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHR0aGlzLm1vZGVsID0gb2JqLm1vZGVsO1xuXHRcdHRoaXMuY29sb3IgPSBvYmouY29sb3Iuc2xpY2UoKTtcblx0XHR0aGlzLnZhbHBoYSA9IG9iai52YWxwaGE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHR2YXIgcmVzdWx0ID0gY29sb3JTdHJpbmcuZ2V0KG9iaik7XG5cdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBzdHJpbmc6ICcgKyBvYmopO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kZWwgPSByZXN1bHQubW9kZWw7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHRoaXMuY29sb3IgPSByZXN1bHQudmFsdWUuc2xpY2UoMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIHJlc3VsdC52YWx1ZVtjaGFubmVsc10gPT09ICdudW1iZXInID8gcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAob2JqLmxlbmd0aCkge1xuXHRcdHRoaXMubW9kZWwgPSBtb2RlbCB8fCAncmdiJztcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIG5ld0FyciA9IF9zbGljZS5jYWxsKG9iaiwgMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMuY29sb3IgPSB6ZXJvQXJyYXkobmV3QXJyLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBvYmpbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuXHRcdC8vIHRoaXMgaXMgYWx3YXlzIFJHQiAtIGNhbiBiZSBjb252ZXJ0ZWQgbGF0ZXIgb24uXG5cdFx0b2JqICY9IDB4RkZGRkZGO1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gW1xuXHRcdFx0KG9iaiA+PiAxNikgJiAweEZGLFxuXHRcdFx0KG9iaiA+PiA4KSAmIDB4RkYsXG5cdFx0XHRvYmogJiAweEZGXG5cdFx0XTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXHRcdGlmICgnYWxwaGEnIGluIG9iaikge1xuXHRcdFx0a2V5cy5zcGxpY2Uoa2V5cy5pbmRleE9mKCdhbHBoYScpLCAxKTtcblx0XHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9iai5hbHBoYSA9PT0gJ251bWJlcicgPyBvYmouYWxwaGEgOiAwO1xuXHRcdH1cblxuXHRcdHZhciBoYXNoZWRLZXlzID0ga2V5cy5zb3J0KCkuam9pbignJyk7XG5cdFx0aWYgKCEoaGFzaGVkS2V5cyBpbiBoYXNoZWRNb2RlbEtleXMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kZWwgPSBoYXNoZWRNb2RlbEtleXNbaGFzaGVkS2V5c107XG5cblx0XHR2YXIgbGFiZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5sYWJlbHM7XG5cdFx0dmFyIGNvbG9yID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29sb3IucHVzaChvYmpbbGFiZWxzW2ldXSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShjb2xvcik7XG5cdH1cblxuXHQvLyBwZXJmb3JtIGxpbWl0YXRpb25zIChjbGFtcGluZywgZXRjLilcblx0aWYgKGxpbWl0ZXJzW3RoaXMubW9kZWxdKSB7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHR2YXIgbGltaXQgPSBsaW1pdGVyc1t0aGlzLm1vZGVsXVtpXTtcblx0XHRcdGlmIChsaW1pdCkge1xuXHRcdFx0XHR0aGlzLmNvbG9yW2ldID0gbGltaXQodGhpcy5jb2xvcltpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhpcy52YWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0aGlzLnZhbHBoYSkpO1xuXG5cdGlmIChPYmplY3QuZnJlZXplKSB7XG5cdFx0T2JqZWN0LmZyZWV6ZSh0aGlzKTtcblx0fVxufVxuXG5Db2xvci5wcm90b3R5cGUgPSB7XG5cdHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyaW5nKCk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXNbdGhpcy5tb2RlbF0oKTtcblx0fSxcblxuXHRzdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMubW9kZWwgaW4gY29sb3JTdHJpbmcudG8gPyB0aGlzIDogdGhpcy5yZ2IoKTtcblx0XHRzZWxmID0gc2VsZi5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdHZhciBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogc2VsZi5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50b1tzZWxmLm1vZGVsXShhcmdzKTtcblx0fSxcblxuXHRwZXJjZW50U3RyaW5nOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLnJnYigpLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLnJnYi5wZXJjZW50KGFyZ3MpO1xuXHR9LFxuXG5cdGFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFscGhhID09PSAxID8gdGhpcy5jb2xvci5zbGljZSgpIDogdGhpcy5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHR9LFxuXG5cdG9iamVjdDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0cmVzdWx0W2xhYmVsc1tpXV0gPSB0aGlzLmNvbG9yW2ldO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmVzdWx0LmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblxuXHR1bml0QXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZ2JbMF0gLz0gMjU1O1xuXHRcdHJnYlsxXSAvPSAyNTU7XG5cdFx0cmdiWzJdIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLnB1c2godGhpcy52YWxwaGEpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0dW5pdE9iamVjdDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLm9iamVjdCgpO1xuXHRcdHJnYi5yIC89IDI1NTtcblx0XHRyZ2IuZyAvPSAyNTU7XG5cdFx0cmdiLmIgLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHJvdW5kOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0cGxhY2VzID0gTWF0aC5tYXgocGxhY2VzIHx8IDAsIDApO1xuXHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5jb2xvci5tYXAocm91bmRUb1BsYWNlKHBsYWNlcykpLmNvbmNhdCh0aGlzLnZhbHBoYSksIHRoaXMubW9kZWwpO1xuXHR9LFxuXG5cdGFscGhhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5jb2xvci5jb25jYXQoTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsKSkpLCB0aGlzLm1vZGVsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52YWxwaGE7XG5cdH0sXG5cblx0Ly8gcmdiXG5cdHJlZDogZ2V0c2V0KCdyZ2InLCAwLCBtYXhmbigyNTUpKSxcblx0Z3JlZW46IGdldHNldCgncmdiJywgMSwgbWF4Zm4oMjU1KSksXG5cdGJsdWU6IGdldHNldCgncmdiJywgMiwgbWF4Zm4oMjU1KSksXG5cblx0aHVlOiBnZXRzZXQoWydoc2wnLCAnaHN2JywgJ2hzbCcsICdod2InLCAnaGNnJ10sIDAsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuICgodmFsICUgMzYwKSArIDM2MCkgJSAzNjA7IH0pLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJyYWNlLXN0eWxlXG5cblx0c2F0dXJhdGlvbmw6IGdldHNldCgnaHNsJywgMSwgbWF4Zm4oMTAwKSksXG5cdGxpZ2h0bmVzczogZ2V0c2V0KCdoc2wnLCAyLCBtYXhmbigxMDApKSxcblxuXHRzYXR1cmF0aW9udjogZ2V0c2V0KCdoc3YnLCAxLCBtYXhmbigxMDApKSxcblx0dmFsdWU6IGdldHNldCgnaHN2JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y2hyb21hOiBnZXRzZXQoJ2hjZycsIDEsIG1heGZuKDEwMCkpLFxuXHRncmF5OiBnZXRzZXQoJ2hjZycsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHdoaXRlOiBnZXRzZXQoJ2h3YicsIDEsIG1heGZuKDEwMCkpLFxuXHR3YmxhY2s6IGdldHNldCgnaHdiJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y3lhbjogZ2V0c2V0KCdjbXlrJywgMCwgbWF4Zm4oMTAwKSksXG5cdG1hZ2VudGE6IGdldHNldCgnY215aycsIDEsIG1heGZuKDEwMCkpLFxuXHR5ZWxsb3c6IGdldHNldCgnY215aycsIDIsIG1heGZuKDEwMCkpLFxuXHRibGFjazogZ2V0c2V0KCdjbXlrJywgMywgbWF4Zm4oMTAwKSksXG5cblx0eDogZ2V0c2V0KCd4eXonLCAwLCBtYXhmbigxMDApKSxcblx0eTogZ2V0c2V0KCd4eXonLCAxLCBtYXhmbigxMDApKSxcblx0ejogZ2V0c2V0KCd4eXonLCAyLCBtYXhmbigxMDApKSxcblxuXHRsOiBnZXRzZXQoJ2xhYicsIDAsIG1heGZuKDEwMCkpLFxuXHRhOiBnZXRzZXQoJ2xhYicsIDEpLFxuXHRiOiBnZXRzZXQoJ2xhYicsIDIpLFxuXG5cdGtleXdvcmQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb252ZXJ0W3RoaXMubW9kZWxdLmtleXdvcmQodGhpcy5jb2xvcik7XG5cdH0sXG5cblx0aGV4OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8uaGV4KHRoaXMucmdiKCkucm91bmQoKS5jb2xvcik7XG5cdH0sXG5cblx0cmdiTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmV0dXJuICgocmdiWzBdICYgMHhGRikgPDwgMTYpIHwgKChyZ2JbMV0gJiAweEZGKSA8PCA4KSB8IChyZ2JbMl0gJiAweEZGKTtcblx0fSxcblxuXHRsdW1pbm9zaXR5OiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXG5cdFx0dmFyIGx1bSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hhbiA9IHJnYltpXSAvIDI1NTtcblx0XHRcdGx1bVtpXSA9IChjaGFuIDw9IDAuMDM5MjgpID8gY2hhbiAvIDEyLjkyIDogTWF0aC5wb3coKChjaGFuICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cblx0XHRpZiAobHVtMSA+IGx1bTIpIHtcblx0XHRcdHJldHVybiAobHVtMSArIDAuMDUpIC8gKGx1bTIgKyAwLjA1KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKGx1bTIgKyAwLjA1KSAvIChsdW0xICsgMC4wNSk7XG5cdH0sXG5cblx0bGV2ZWw6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHR2YXIgY29udHJhc3RSYXRpbyA9IHRoaXMuY29udHJhc3QoY29sb3IyKTtcblx0XHRpZiAoY29udHJhc3RSYXRpbyA+PSA3LjEpIHtcblx0XHRcdHJldHVybiAnQUFBJztcblx0XHR9XG5cblx0XHRyZXR1cm4gKGNvbnRyYXN0UmF0aW8gPj0gNC41KSA/ICdBQScgOiAnJztcblx0fSxcblxuXHRpc0Rhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0dmFyIHlpcSA9IChyZ2JbMF0gKiAyOTkgKyByZ2JbMV0gKiA1ODcgKyByZ2JbMl0gKiAxMTQpIC8gMTAwMDtcblx0XHRyZXR1cm4geWlxIDwgMTI4O1xuXHR9LFxuXG5cdGlzTGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuaXNEYXJrKCk7XG5cdH0sXG5cblx0bmVnYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYi5jb2xvcltpXSA9IDI1NSAtIHJnYi5jb2xvcltpXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gKz0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRkYXJrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSAtPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMV0gKz0gaHNsLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMV0gLT0gaHNsLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHR3aGl0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBod2IgPSB0aGlzLmh3YigpO1xuXHRcdGh3Yi5jb2xvclsxXSArPSBod2IuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHdiO1xuXHR9LFxuXG5cdGJsYWNrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBod2IgPSB0aGlzLmh3YigpO1xuXHRcdGh3Yi5jb2xvclsyXSArPSBod2IuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHdiO1xuXHR9LFxuXG5cdGdyYXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JheXNjYWxlI0NvbnZlcnRpbmdfY29sb3JfdG9fZ3JheXNjYWxlXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0dmFyIHZhbCA9IHJnYlswXSAqIDAuMyArIHJnYlsxXSAqIDAuNTkgKyByZ2JbMl0gKiAwLjExO1xuXHRcdHJldHVybiBDb2xvci5yZ2IodmFsLCB2YWwsIHZhbCk7XG5cdH0sXG5cblx0ZmFkZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgLSAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhICsgKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0dmFyIGh1ZSA9IGhzbC5jb2xvclswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHRoc2wuY29sb3JbMF0gPSBodWU7XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRtaXg6IGZ1bmN0aW9uIChtaXhpbkNvbG9yLCB3ZWlnaHQpIHtcblx0XHQvLyBwb3J0ZWQgZnJvbSBzYXNzIGltcGxlbWVudGF0aW9uIGluIENcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0XHR2YXIgY29sb3IxID0gbWl4aW5Db2xvci5yZ2IoKTtcblx0XHR2YXIgY29sb3IyID0gdGhpcy5yZ2IoKTtcblx0XHR2YXIgcCA9IHdlaWdodCA9PT0gdW5kZWZpbmVkID8gMC41IDogd2VpZ2h0O1xuXG5cdFx0dmFyIHcgPSAyICogcCAtIDE7XG5cdFx0dmFyIGEgPSBjb2xvcjEuYWxwaGEoKSAtIGNvbG9yMi5hbHBoYSgpO1xuXG5cdFx0dmFyIHcxID0gKCgodyAqIGEgPT09IC0xKSA/IHcgOiAodyArIGEpIC8gKDEgKyB3ICogYSkpICsgMSkgLyAyLjA7XG5cdFx0dmFyIHcyID0gMSAtIHcxO1xuXG5cdFx0cmV0dXJuIENvbG9yLnJnYihcblx0XHRcdFx0dzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKSxcblx0XHRcdFx0Y29sb3IxLmFscGhhKCkgKiBwICsgY29sb3IyLmFscGhhKCkgKiAoMSAtIHApKTtcblx0fVxufTtcblxuLy8gbW9kZWwgY29udmVyc2lvbiBtZXRob2RzIGFuZCBzdGF0aWMgY29uc3RydWN0b3JzXG5PYmplY3Qua2V5cyhjb252ZXJ0KS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuXHRpZiAoc2tpcHBlZE1vZGVscy5pbmRleE9mKG1vZGVsKSAhPT0gLTEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblxuXHQvLyBjb252ZXJzaW9uIG1ldGhvZHNcblx0Q29sb3IucHJvdG90eXBlW21vZGVsXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy5tb2RlbCA9PT0gbW9kZWwpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoYXJndW1lbnRzLCBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0FscGhhID0gdHlwZW9mIGFyZ3VtZW50c1tjaGFubmVsc10gPT09ICdudW1iZXInID8gY2hhbm5lbHMgOiB0aGlzLnZhbHBoYTtcblx0XHRyZXR1cm4gbmV3IENvbG9yKGFzc2VydEFycmF5KGNvbnZlcnRbdGhpcy5tb2RlbF1bbW9kZWxdLnJhdyh0aGlzLmNvbG9yKSkuY29uY2F0KG5ld0FscGhhKSwgbW9kZWwpO1xuXHR9O1xuXG5cdC8vICdzdGF0aWMnIGNvbnN0cnVjdGlvbiBtZXRob2RzXG5cdENvbG9yW21vZGVsXSA9IGZ1bmN0aW9uIChjb2xvcikge1xuXHRcdGlmICh0eXBlb2YgY29sb3IgPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb2xvciA9IHplcm9BcnJheShfc2xpY2UuY2FsbChhcmd1bWVudHMpLCBjaGFubmVscyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQ29sb3IoY29sb3IsIG1vZGVsKTtcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiByb3VuZFRvKG51bSwgcGxhY2VzKSB7XG5cdHJldHVybiBOdW1iZXIobnVtLnRvRml4ZWQocGxhY2VzKSk7XG59XG5cbmZ1bmN0aW9uIHJvdW5kVG9QbGFjZShwbGFjZXMpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChudW0pIHtcblx0XHRyZXR1cm4gcm91bmRUbyhudW0sIHBsYWNlcyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGdldHNldChtb2RlbCwgY2hhbm5lbCwgbW9kaWZpZXIpIHtcblx0bW9kZWwgPSBBcnJheS5pc0FycmF5KG1vZGVsKSA/IG1vZGVsIDogW21vZGVsXTtcblxuXHRtb2RlbC5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG5cdFx0KGxpbWl0ZXJzW21dIHx8IChsaW1pdGVyc1ttXSA9IFtdKSlbY2hhbm5lbF0gPSBtb2RpZmllcjtcblx0fSk7XG5cblx0bW9kZWwgPSBtb2RlbFswXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuXHRcdHZhciByZXN1bHQ7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0aWYgKG1vZGlmaWVyKSB7XG5cdFx0XHRcdHZhbCA9IG1vZGlmaWVyKHZhbCk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdCA9IHRoaXNbbW9kZWxdKCk7XG5cdFx0XHRyZXN1bHQuY29sb3JbY2hhbm5lbF0gPSB2YWw7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdHJlc3VsdCA9IHRoaXNbbW9kZWxdKCkuY29sb3JbY2hhbm5lbF07XG5cdFx0aWYgKG1vZGlmaWVyKSB7XG5cdFx0XHRyZXN1bHQgPSBtb2RpZmllcihyZXN1bHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59XG5cbmZ1bmN0aW9uIG1heGZuKG1heCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKHYpIHtcblx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4LCB2KSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFzc2VydEFycmF5KHZhbCkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF07XG59XG5cbmZ1bmN0aW9uIHplcm9BcnJheShhcnIsIGxlbmd0aCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHR5cGVvZiBhcnJbaV0gIT09ICdudW1iZXInKSB7XG5cdFx0XHRhcnJbaV0gPSAwO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJyYXlpc2gob2JqKSB7XG5cdGlmICghb2JqIHx8IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkob2JqKSB8fFxuXHRcdChvYmoubGVuZ3RoID49IDAgJiYgKG9iai5zcGxpY2UgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuXHRcdFx0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCAob2JqLmxlbmd0aCAtIDEpKSAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPT0gJ1N0cmluZycpKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheWlzaCA9IHJlcXVpcmUoJ2lzLWFycmF5aXNoJyk7XG5cbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgc3dpenpsZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3dpenpsZShhcmdzKSB7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgYXJnID0gYXJnc1tpXTtcblxuXHRcdGlmIChpc0FycmF5aXNoKGFyZykpIHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tL2phdmFzY3JpcHQtYXJyYXktY29uY2F0LXZzLXB1c2gvOThcblx0XHRcdHJlc3VsdHMgPSBjb25jYXQuY2FsbChyZXN1bHRzLCBzbGljZS5jYWxsKGFyZykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goYXJnKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbnN3aXp6bGUud3JhcCA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmbihzd2l6emxlKGFyZ3VtZW50cykpO1xuXHR9O1xufTtcbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBNYXJrZXJzTGF5ZXIsIHtcbiAgTWFya2Vyc0xheWVyT3B0aW9ucyxcbiAgTWFya2Vyc0hlYXRMYXllck9wdGlvbnMsXG59IGZyb20gJy4uL21hcmtlci9NYXJrZXJzTGF5ZXInXG5cbmludGVyZmFjZSBEeW5hbWljSGVhdExheWVyT3B0aW9ucyBleHRlbmRzIE1hcmtlcnNIZWF0TGF5ZXJPcHRpb25zIHtcbiAgLyoqIOaYr+WQpuW+queOr+aSreaUviAqL1xuICBsb29wOiBib29sZWFuXG4gIC8qKiDmmK/lkKboh6rliqjmkq3mlL4gKi9cbiAgYXV0bzogYm9vbGVhblxuICAvKiog6Ze06ZqU5pe26Ze0ICovXG4gIGludGVydmFsOiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY0hlYXRMYXllciB7XG4gIC8qKiDlvZPliY3mkq3mlL7liLDnrKzlh6DmraUgKi9cbiAgcHJpdmF0ZSBjdXJyZW50U3RlcDogbnVtYmVyXG5cbiAgcHJpdmF0ZSBtYXA6IEwuTWFwXG4gIHByaXZhdGUgZHluYW1pY0RhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVtdXG4gIHByaXZhdGUgb3B0aW9uczogRHluYW1pY0hlYXRMYXllck9wdGlvbnNcbiAgcHJpdmF0ZSBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgcHJpdmF0ZSBsYXllcjogTWFya2Vyc0xheWVyXG4gIHByaXZhdGUgaXNQYXVzZTogYm9vbGVhblxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGR5bmFtaWNEYXRhTGlzdDogRGF0YUxpc3RJdGVtW11bXSxcbiAgICBvcHRpb25zOiBEeW5hbWljSGVhdExheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGR5bmFtaWNEYXRhTGlzdCkgfHwgZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhTGlzdCDlv4XpobvmmK/pnZ7nqbrmlbDnu4RgKVxuICAgIH1cbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZHluYW1pY0RhdGFMaXN0ID0gZHluYW1pY0RhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwXG4gICAgdGhpcy5pc1BhdXNlID0gdHJ1ZVxuICB9XG4gIHB1YmxpYyByZXN0YXJ0KCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IDBcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gICAgdGhpcy5zdGFydCgpXG4gIH1cbiAgcHVibGljIHN0YXJ0KCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYXV0bykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNQYXVzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8qKiDmkq3mlL7lrozmr5UgKi9cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdGFydCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKytcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKVxuICAgICAgICB0aGlzLnN0YXJ0KClcbiAgICAgIH1cbiAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpXG4gIH1cbiAgcHVibGljIHBhdXNlKCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IHRydWVcbiAgfVxuICBwdWJsaWMgcHJldigpIHtcbiAgICB0aGlzLmN1cnJlbnRTdGVwLS1cbiAgICB0aGlzLmN1cnJlbnRTdGVwID1cbiAgICAgICh0aGlzLmN1cnJlbnRTdGVwICsgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoKSAlXG4gICAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGhcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gIH1cbiAgcHVibGljIG5leHQoKSB7XG4gICAgdGhpcy5jdXJyZW50U3RlcCsrXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IHRoaXMuY3VycmVudFN0ZXAgJSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGhcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gIH1cbiAgcHVibGljIGdvdG9TdGVwKHN0ZXA6IG51bWJlcikge1xuICAgIGlmIChzdGVwIDwgMCB8fCBzdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBnb3RvU3RlcCgke3N0ZXB9KTogc3RlcCBpcyBvdXQgb2YgaW5kZXggYClcbiAgICB9XG4gICAgdGhpcy5sYXllci5zZXREYXRhKHRoaXMuZHluYW1pY0RhdGFMaXN0W3N0ZXBdKVxuICAgIHRoaXMubGF5ZXIuZHJhdygpXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKVxuICAgIHRoaXMuaW5pdExheWVyKClcbiAgICB0aGlzLmxheWVyLmRyYXcoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIGZpdEJvdW5kcygpIHtcbiAgICB0aGlzLmxheWVyLmZpdEJvdW5kcygpXG4gIH1cbiAgcHJpdmF0ZSBpbml0T3B0aW9ucyhvcHRpb25zPzogRHluYW1pY0hlYXRMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgYXV0bzogZmFsc2UsXG4gICAgICAgIGludGVydmFsOiAxMDAwLFxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIG9wdGlvbnNcbiAgICApXG4gIH1cbiAgcHJpdmF0ZSBpbml0TGF5ZXIoKSB7XG4gICAgY29uc3QgbWFya2Vyc0xheWVyT3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucyA9IHtcbiAgICAgIHJlbmRlclR5cGU6ICdoZWF0JyxcbiAgICAgIGhlYXRPcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSBuZXcgTWFya2Vyc0xheWVyKFxuICAgICAgdGhpcy5tYXAsXG4gICAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdFswXSxcbiAgICAgIG1hcmtlcnNMYXllck9wdGlvbnMsXG4gICAgICB0aGlzLmNoYW5uZWxGdW5jXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmxheWVyXG4gIH1cbn1cbiIsImltcG9ydCBNYXJrZXIgZnJvbSAnLi9tYXJrZXIvTWFya2VyJ1xuaW1wb3J0IE1hcmtlcnNMYXllciBmcm9tICcuL21hcmtlci9NYXJrZXJzTGF5ZXInXG5pbXBvcnQgTWFya2Vyc0J1ZmZlckxheWVyIGZyb20gJy4vbWFya2VyL01hcmtlcnNCdWZmZXJMYXllcidcbmltcG9ydCBQb2x5bGluZSBmcm9tICcuL3BvbHlsaW5lL1BvbHlsaW5lJ1xuaW1wb3J0IFBvbHlsaW5lc0xheWVyIGZyb20gJy4vcG9seWxpbmUvUG9seWxpbmVzTGF5ZXInXG5pbXBvcnQgUG9seWxpbmVzQnVmZmVyTGF5ZXIgZnJvbSAnLi9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllcidcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vcG9seWdvbi9Qb2x5Z29uJ1xuaW1wb3J0IFBvbHlnb25zTGF5ZXIgZnJvbSAnLi9wb2x5Z29uL1BvbHlnb25zTGF5ZXInXG5pbXBvcnQgR3JpZHNMYXllciBmcm9tICcuL3BvbHlnb24vR3JpZHNMYXllcidcbmltcG9ydCBEeW5hbWljSGVhdExheWVyIGZyb20gJy4vZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIE1hcmtlcixcbiAgTWFya2Vyc0xheWVyLFxuICBNYXJrZXJzQnVmZmVyTGF5ZXIsXG4gIFBvbHlsaW5lLFxuICBQb2x5bGluZXNMYXllcixcbiAgUG9seWxpbmVzQnVmZmVyTGF5ZXIsXG4gIFBvbHlnb24sXG4gIFBvbHlnb25zTGF5ZXIsXG4gIEdyaWRzTGF5ZXIsXG4gIER5bmFtaWNIZWF0TGF5ZXIsXG59XG5leHBvcnQge1xuICBNYXJrZXIsXG4gIE1hcmtlcnNMYXllcixcbiAgTWFya2Vyc0J1ZmZlckxheWVyLFxuICBQb2x5bGluZSxcbiAgUG9seWxpbmVzTGF5ZXIsXG4gIFBvbHlsaW5lc0J1ZmZlckxheWVyLFxuICBQb2x5Z29uLFxuICBQb2x5Z29uc0xheWVyLFxuICBHcmlkc0xheWVyLFxuICBEeW5hbWljSGVhdExheWVyLFxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlciBleHRlbmRzIEwuTWFya2VyIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfX2RhdGE6IERhdGFMaXN0SXRlbVxuICBjb25zdHJ1Y3RvcihsYXRsbmc6IEwuTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IEwuTWFya2VyT3B0aW9ucykge1xuICAgIHN1cGVyKGxhdGxuZywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IE1hcmtlcnNMYXllciwgeyBNYXJrZXJzTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi9NYXJrZXJzTGF5ZXInXG5pbnRlcmZhY2UgTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9ucyBleHRlbmRzIE1hcmtlcnNMYXllck9wdGlvbnMge1xuICBidWZmZXJUb29sdGlwQXR0cjogc3RyaW5nXG4gIGJ1ZmZlck9wdGlvbnM6IEwuQ2lyY2xlTWFya2VyT3B0aW9uc1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Vyc0J1ZmZlckxheWVyIGV4dGVuZHMgTWFya2Vyc0xheWVyIHtcbiAgcHVibGljIG9wdGlvbnM6IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnNcbiAgcHJpdmF0ZSBidWZmZXJMYXllcjogTC5MYXllckdyb3VwXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIHRoaXMudHlwZSA9ICdtYXJrZXJCdWZmZXInXG4gICAgY29uc3QgZGVmYXVsdEJ1ZmZlck9wdGlvbnM6IEwuQ2lyY2xlTWFya2VyT3B0aW9ucyA9IHtcbiAgICAgIHJhZGl1czogMTAwMCxcbiAgICAgIHN0cm9rZTogdHJ1ZSxcbiAgICAgIHdlaWdodDogMSxcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHsgYnVmZmVyT3B0aW9uczogZGVmYXVsdEJ1ZmZlck9wdGlvbnMgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApXG4gIH1cblxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLmNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvclxuICAgIHRoaXMuaW5pdE1hcmtlcnMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cblxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLmJ1ZmZlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmJ1ZmZlckxheWVyKVxuICAgIH1cbiAgICB0aGlzLm1hcmtlckxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpXG4gICAgdGhpcy5idWZmZXJMYXllciA9IHRoaXMuY29uZmlnQnVmZmVyTGF5ZXIoKVxuXG4gICAgdGhpcy5sYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5sYXllci5hZGRMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5idWZmZXJMYXllcilcblxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFya2Vycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgIHJldHVybiBwcmV2LmV4dGVuZChcbiAgICAgICAgY3Vyci5nZXRMYXRMbmcoKS50b0JvdW5kcyh0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5yYWRpdXMpXG4gICAgICApXG4gICAgfSwgdGhpcy5tYXJrZXJzWzBdLmdldExhdExuZygpLnRvQm91bmRzKHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLnJhZGl1cykpXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0J1ZmZlckxheWVyKCkge1xuICAgIGNvbnN0IGdyb3VwTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGNvbnN0IGNpcmNsZUxheWVyID0gTC5jaXJjbGUoXG4gICAgICAgIG1hcmtlci5nZXRMYXRMbmcoKSxcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnNcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnVmZmVyVG9vbHRpcEF0dHIpIHtcbiAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5idWZmZXJUb29sdGlwQXR0cl1cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICAgICAgICApXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdyb3VwTGF5ZXIuYWRkTGF5ZXIoY2lyY2xlTGF5ZXIpXG4gICAgfSlcbiAgICByZXR1cm4gZ3JvdXBMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBsaWdodGVuLCBvcHRpb25zTWVyZ2UgfSBmcm9tICcuLi91dGlscy9pbmRleCdcbmltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBNYXJrZXIgZnJvbSAnLi9NYXJrZXInXG5cbi8qKiDmuLLmn5PmoLflvI8g5pWj54K5fOeDreWKm+WbviAqL1xudHlwZSBNYXJrZXJzTGF5ZXJSZW5kZXJUeXBlID0gJ3BvaW50JyB8ICdoZWF0JyB8ICdjbHVzdGVyJyB8ICdidWJibGUnXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautXzliIbnsbsgKi9cbnR5cGUgTWFya2Vyc0xheWVyUmVuZGVyUG9pbnRDb2xvclR5cGUgPSAnc2luZ2xlJyB8ICdzZWdtZW50ZWQnIHwgJ2NsYXNzaWZpZWQnXG5cbi8qKiDmlaPngrnlm77moIfnsbvlnosgaWNvbmZvbnR8c3ZnfGltYWdlICovXG50eXBlIE1hcmtlcnNMYXllckljb25UeXBlID0gJ2ZvbnRfY2xhc3MnIHwgJ3VuaWNvZGUnIHwgJ3N5bWJvbCcgfCAnaW1hZ2UnXG5cbnR5cGUgTWFya2Vyc0xheWVyUmVuZGVyQ2x1c3RlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NtYXJ0J1xuXG5pbnRlcmZhY2UgSWNvblJlbmRlckZ1bmNPcHRpb24ge1xuICBpY29uU2l6ZTogW251bWJlciwgbnVtYmVyXVxuICBpY29uQ29sb3I6IHN0cmluZ1xufVxudHlwZSBJY29uUmVuZGVyRnVuYyA9IChcbiAgZGF0YTogRGF0YUxpc3RJdGVtLFxuICBwYXJhbXM6IEljb25SZW5kZXJGdW5jT3B0aW9uXG4pID0+IHN0cmluZ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlcnNMYXllck9wdGlvbnMge1xuICByZW5kZXJUeXBlOiBNYXJrZXJzTGF5ZXJSZW5kZXJUeXBlXG4gIHJlbmRlclBvaW50Q29sb3JUeXBlPzogTWFya2Vyc0xheWVyUmVuZGVyUG9pbnRDb2xvclR5cGVcbiAgaWNvblR5cGU/OiBNYXJrZXJzTGF5ZXJJY29uVHlwZVxuXG4gIGljb25JbWFnZVVybD86IHN0cmluZ1xuICBpY29uU2l6ZT86IFtudW1iZXIsIG51bWJlcl1cbiAgaWNvbkNsYXNzPzogc3RyaW5nXG4gIGljb25Vbmljb2RlPzogc3RyaW5nXG4gIGljb25TeW1ib2w/OiBzdHJpbmdcbiAgaWNvbkNvbG9yPzogc3RyaW5nXG4gIGljb25BbmNob3I/OiBbbnVtYmVyLCBudW1iZXJdXG4gIGljb25SZW5kZXJlcj86IEljb25SZW5kZXJGdW5jXG5cbiAgYnViYmxlQ29sb3JBdHRyPzogc3RyaW5nXG4gIGJ1YmJsZVNpemVBdHRyPzogc3RyaW5nXG4gIGJ1YmJsZVN0cm9rZVdpZHRoPzogbnVtYmVyXG4gIGJ1YmJsZVN0cm9rZUNvbG9yPzogc3RyaW5nXG4gIGJ1YmJsZUNvbG9ycz86IHN0cmluZ1tdXG4gIGJ1YmJsZVNpemVzPzogbnVtYmVyW11cbiAgYnViYmxlU3Ryb2tlT3BhY2l0eT86IG51bWJlclxuICBidWJibGVGaWxsT3BhY2l0eT86IG51bWJlclxuXG4gIC8vIOaYr+WQpuiBmuWQiO+8jOS8mOWFiOe6p+mrmOS6jiByZW5kZXJUeXBlID09IHBvaW50XG4gIGlzQ2x1c3Rlcj86IGJvb2xlYW5cbiAgcmVuZGVyQ2x1c3RlckNvbG9yVHlwZT86IE1hcmtlcnNMYXllclJlbmRlckNsdXN0ZXJDb2xvclR5cGVcblxuICAvKiog5piv5ZCm5bGV56S6IHBvcHVwICovXG4gIHBvcHVwPzogYm9vbGVhblxuICAvKiog5piv5ZCm5bGV56S6IHRvb2x0aXAgKi9cbiAgdG9vbHRpcD86IGJvb2xlYW5cbiAgLyoqIHBvcHVwIOWxleekuuWtl+autSAqL1xuICBwb3B1cEF0dHI/OiBzdHJpbmcgfCB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBhbnkgfVxuICAvKiogdG9vbHRpcCDlsZXnpLrlrZfmrrUgKi9cbiAgdG9vbHRpcEF0dHI/OiBzdHJpbmdcblxuICBvcGFjaXR5PzogbnVtYmVyXG5cbiAgLyoqIOWIhuautea4suafk+e7n+iuoeWtl+autSAqL1xuICBzZWdtZW50ZWRBdHRyPzogc3RyaW5nXG4gIHNlZ21lbnRlZENvbG9ycz86IHN0cmluZ1tdXG5cbiAgLyoqIOWIhuexu+Wei+a4suafk+e7n+iuoeWtl+autSAqL1xuICBjbGFzc2lmaWVkQXR0cj86IHN0cmluZ1xuICBjbGFzc2lmaWVkQ29sb3JzPzogc3RyaW5nW11cblxuICBoZWF0T3B0aW9ucz86IE1hcmtlcnNIZWF0TGF5ZXJPcHRpb25zXG4gIGNsdXN0ZXJPcHRpb25zPzogTC5NYXJrZXJzQ2x1c3Rlck9wdGlvbnNcbn1cblxuLyoqIOi9rOWMluS4uueDreWKm+WbvueahCBvcHRpb25zICovXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlcnNIZWF0TGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5IZWF0TGF5ZXJPcHRpb25zIHtcbiAgZGltZW5zaW9uQXR0cj86IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZXJzTGF5ZXIge1xuICBwdWJsaWMgbWFwOiBMLk1hcFxuICBwdWJsaWMgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHB1YmxpYyBvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zXG4gIHB1YmxpYyBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcblxuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIG1hcmtlcnM6IE1hcmtlcltdXG5cbiAgcHJvdGVjdGVkIGZvY3VzZWRNYXJrZXI6IE1hcmtlclxuICBwcm90ZWN0ZWQgaG92ZXJlZE1hcmtlcjogTWFya2VyXG4gIC8qKiDpnIDopoHlsZXnpLrnmoTmlL7lpKfnmoTlm77moIcgKi9cbiAgcHJvdGVjdGVkIGZvY3VzZWREaXNwbGF5TWFya2VyOiBNYXJrZXJcbiAgcHJvdGVjdGVkIG1hcmtlckxheWVyOiBMLkNhbnZhc0ljb25MYXllclxuXG4gIHByb3RlY3RlZCB2aXNpYmxlOiBib29sZWFuXG4gIHByb3RlY3RlZCBsYXllcjpcbiAgICB8IEwuQ2FudmFzSWNvbkxheWVyXG4gICAgfCBMLkhlYXRMYXllclxuICAgIHwgTC5NYXJrZXJzQ2x1c3RlclxuICAgIHwgTC5MYXllckdyb3VwXG4gIHByaXZhdGUgaGVhdExheWVyOiBMLkhlYXRMYXllclxuICBwcml2YXRlIGNsdXN0ZXJMYXllcjogTC5NYXJrZXJzQ2x1c3RlclxuICBwcml2YXRlIGJ1YmJsZUxheWVyOiBMLkxheWVyR3JvdXBcblxuICBwcml2YXRlIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByaXZhdGUgc2VnbWVudGVkU3RlcDogbnVtYmVyXG4gIHByaXZhdGUgYnViYmxlZFNpemVNaW46IG51bWJlclxuICBwcml2YXRlIGJ1YmJsZWRTaXplU3RlcDogbnVtYmVyXG4gIHByaXZhdGUgYnViYmxlZENvbG9yTWFwOiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfVxuICBwcml2YXRlIGJ1YmJsZWRDb2xvclJlZnM6IEFycmF5PHtcbiAgICBhdHRyOiBzdHJpbmdcbiAgICBjb2xvcjogc3RyaW5nXG4gICAgbnVtczogbnVtYmVyXG4gIH0+XG4gIC8qKiDorrDlvZXmn5DkuKogcHJvcCDlr7nlupTnmoTmuLLmn5PpopzoibIgKi9cbiAgcHJpdmF0ZSBjbGFzc2lmaWVkQ29sb3JNYXA6IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9XG4gIC8qKiDliIbnsbvmuLLmn5PpopzoibLlj4Lnhaco5o+Q5L6b57uZ6LCD55So6ICF5L2/55SoKSAqL1xuICBwcml2YXRlIGNsYXNzaWZpZWRDb2xvclJlZnM6IEFycmF5PHtcbiAgICBhdHRyOiBzdHJpbmdcbiAgICBjb2xvcjogc3RyaW5nXG4gICAgbnVtczogbnVtYmVyXG4gIH0+XG4gIHByaXZhdGUgZGVmYXVsdE9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnNcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGFMaXN0KSB8fCBkYXRhTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZGF0YUxpc3Qg5b+F6aG75piv6Z2e56m65pWw57uEYClcbiAgICB9XG4gICAgY29uc3QgREVGQVVMVF9DT0xPUiA9ICcjMzM4OEZGJ1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICByZW5kZXJUeXBlOiAncG9pbnQnLFxuICAgICAgcmVuZGVyUG9pbnRDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgaWNvblR5cGU6ICd1bmljb2RlJyxcbiAgICAgIGljb25TaXplOiBbMjAsIDIwXSxcbiAgICAgIGljb25DbGFzczogJ2ljb25mb250JyxcbiAgICAgIGljb25Db2xvcjogREVGQVVMVF9DT0xPUixcbiAgICAgIGljb25BbmNob3I6IFsxMCwgMjBdLFxuICAgICAgcG9wdXA6IHRydWUsXG4gICAgICB0b29sdGlwOiB0cnVlLFxuICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICAgIHNlZ21lbnRlZENvbG9yczogW0RFRkFVTFRfQ09MT1JdLFxuICAgICAgY2xhc3NpZmllZENvbG9yczogW0RFRkFVTFRfQ09MT1JdLFxuICAgICAgaXNDbHVzdGVyOiBmYWxzZSxcbiAgICAgIHJlbmRlckNsdXN0ZXJDb2xvclR5cGU6ICdzbWFydCcsXG4gICAgICBidWJibGVTdHJva2VXaWR0aDogMSxcbiAgICAgIGJ1YmJsZUNvbG9yczogW0RFRkFVTFRfQ09MT1JdLFxuICAgICAgYnViYmxlU3Ryb2tlT3BhY2l0eTogMC4yLFxuICAgICAgYnViYmxlRmlsbE9wYWNpdHk6IDAuNSxcbiAgICAgIGJ1YmJsZVNpemVzOiBbMTBdLFxuICAgICAgaGVhdE9wdGlvbnM6IHtcbiAgICAgICAgbWF4OiAxLFxuICAgICAgICBtaW5PcGFjaXR5OiAwLjUsXG4gICAgICB9LFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAnbWFya2VyJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMubGF5ZXIgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkTWFya2VyID0gbnVsbFxuICAgIHRoaXMuaG92ZXJlZE1hcmtlciA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbnVsbFxuICAgIHRoaXMubWFya2VycyA9IFtdXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IG51bGxcbiAgICB0aGlzLmhlYXRMYXllciA9IG51bGxcbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IG51bGxcbiAgICB0aGlzLmJ1YmJsZUxheWVyID0gbnVsbFxuXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBJbmZpbml0eVxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDFcbiAgICB0aGlzLmJ1YmJsZWRTaXplTWluID0gSW5maW5pdHlcbiAgICB0aGlzLmJ1YmJsZWRTaXplU3RlcCA9IDFcbiAgICB0aGlzLmNsYXNzaWZpZWRDb2xvck1hcCA9IHt9XG4gICAgdGhpcy5idWJibGVkQ29sb3JNYXAgPSB7fVxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBNYXJrZXJzTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRNYXJrZXJzKClcbiAgICB0aGlzLmluaXRFdmVudHMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgLy8g5LyY5YWI5Yik5patIGlzQ2x1c3RlclxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyICYmIHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnKSB7XG4gICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ01hcmtlckxheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2NsdXN0ZXInOiB7XG4gICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQ2x1c3RlckxheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2hlYXQnOiB7XG4gICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnSGVhdExheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2J1YmJsZSc6IHtcbiAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdCdWJibGVMYXllcigpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyVHlwZX1cImApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbVtdKSB7XG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFcbiAgfVxuICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zLCByZWRyYXcgPSBmYWxzZSkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIGlmIChyZWRyYXcpIHtcbiAgICAgIHRoaXMucmVkcmF3KClcbiAgICB9XG4gIH1cbiAgLyoqIOiOt+WPluW9k+WJjSBvcHRpb25zICovXG4gIHB1YmxpYyBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pXG4gIH1cbiAgcHVibGljIGdldEJvdW5kcygpOiBMLkxhdExuZ0JvdW5kc0V4cHJlc3Npb24ge1xuICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXJrZXJzLm1hcChcbiAgICAgIChtYXJrZXIpID0+XG4gICAgICAgIFttYXJrZXIuZ2V0TGF0TG5nKCkubGF0LCBtYXJrZXIuZ2V0TGF0TG5nKCkubG5nXSBhcyBbbnVtYmVyLCBudW1iZXJdXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcilcbiAgICB9XG4gICAgdGhpcy5tYXAub2ZmKCd6b29tc3RhcnQnLCB0aGlzLl96b29tU3RhcnRDYiwgdGhpcylcbiAgICB0aGlzLm1hcC5vZmYoJ3pvb21lbmQnLCB0aGlzLl96b29tRW5kQ2IsIHRoaXMpXG4gIH1cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmUoKVxuICAgICAgfVxuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIGNoYW5nZUljb24oaWNvblVuaWNvZGU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5pY29uVW5pY29kZSA9IGljb25Vbmljb2RlXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgaWYgKG1hcmtlci5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciwgdHJ1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwdWJsaWMgZ2V0Q2xhc3NpZmllZENvbG9yUmVmcygpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc2lmaWVkQ29sb3JSZWZzXG4gIH1cbiAgcHVibGljIGdldEJ1YmJsZWRDb2xvclJlZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnViYmxlZENvbG9yUmVmc1xuICB9XG4gIHByb3RlY3RlZCBfem9vbVN0YXJ0Q2IoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSAnbWFya2VyJykge1xuICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSkge1xuICAgICAgICBjYXNlICdwb2ludCc6IHtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzQ2x1c3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2J1YmJsZSc6IHtcbiAgICAgICAgICBpZiAodGhpcy5idWJibGVMYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5idWJibGVMYXllcilcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlckJ1ZmZlcicpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX3pvb21FbmRDYigpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnYnViYmxlJzoge1xuICAgICAgICAgIGlmICh0aGlzLmJ1YmJsZUxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmJ1YmJsZUxheWVyKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbWFya2VyQnVmZmVyJykge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIC8qKiDmuLLmn5PkuLrmlaPngrnlm74gKi9cbiAgcHJvdGVjdGVkIGNvbmZpZ01hcmtlckxheWVyKCkge1xuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcmtlckxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIGNvbnN0IGNhbnZhc0ljb25MYXllciA9IEwuY2FudmFzSWNvbkxheWVyKHt9KS5hZGRUbyh0aGlzLm1hcClcbiAgICAvLyDmt7vliqDngrnlh7vkuovku7ZcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25DbGlja0xpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciBhcyBNYXJrZXIpXG4gICAgfSlcbiAgICAvLyDmt7vliqDlj7PplK7kuovku7ZcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25Db250ZXh0bWVudUxpc3RlbmVyKChldmVudCwgW3sgZGF0YTogbWFya2VyIH1dKSA9PiB7XG4gICAgICB0aGlzLmNoYW5uZWxGdW5jKCdjb250ZXh0bWVudScsIHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIG1hcmtlcixcbiAgICAgIH0pXG4gICAgfSlcbiAgICAvLyDmt7vliqAgaG92ZXIg5LqL5Lu2XG4gICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwKSB7XG4gICAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25Ib3Zlckxpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgICAgLy8g5LmL5YmN5pyJIGhvdmVyIOeahOWFs+mXrSB0b29sdGlwXG4gICAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIpIHtcbiAgICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIuY2xvc2VUb29sdGlwKClcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBtYXJrZXIgYXMgTWFya2VyXG5cbiAgICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlci5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgICAvLyDlpoLmnpzlt7Lnu4/orr7nva4gdG9vbHRpcCDnm7TmjqXlsZXnpLogdG9vbHRpcFxuICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5vcGVuVG9vbHRpcCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g5ZCm5YiZ57uR5a6aIHRvb2x0aXAg5bm25bGV56S6XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmJpbmRUb29sdGlwKFxuICAgICAgICAgICAgICAnJyArIHRoaXMuaG92ZXJlZE1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgY2FudmFzSWNvbkxheWVyLmFkZE1hcmtlcnModGhpcy5tYXJrZXJzKVxuXG4gICAgLy8g6Kej5Yaz5Yid5qyh5riy5p+T5LiN5Ye65Zu+5qCH6Zeu6aKYXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5tYXAuZ2V0Q2VudGVyKCkpXG5cbiAgICB0aGlzLm1hcmtlckxheWVyID0gY2FudmFzSWNvbkxheWVyXG4gICAgcmV0dXJuIHRoaXMubWFya2VyTGF5ZXJcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRPcHRpb25zKG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zTWVyZ2UoXG4gICAgICB0aGlzLmRlZmF1bHRPcHRpb25zLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgb3B0aW9uc1xuICAgICkgYXMgTWFya2Vyc0xheWVyT3B0aW9uc1xuICB9XG4gIHByb3RlY3RlZCBpbml0TWFya2VycygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5jYWNoZUNsYXNzaWZ5UGFyYW1zKClcbiAgICB0aGlzLmNhY2hlQnViYmxlUGFyYW1zKClcbiAgICB0aGlzLm1hcmtlcnMgPSBbXVxuICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF0gYXMgTC5NYXJrZXJcblxuICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihcbiAgICAgICAgW2xheWVyLmdldExhdExuZygpLmxhdCwgbGF5ZXIuZ2V0TGF0TG5nKCkubG5nXSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IHRoaXMuZ2V0TWFya2VySWNvbihkYXRhKSxcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICBtYXJrZXIuc2V0RGF0YShkYXRhKVxuICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRFdmVudHMoKSB7XG4gICAgdGhpcy5tYXAub24oJ3pvb21zdGFydCcsIHRoaXMuX3pvb21TdGFydENiLCB0aGlzKVxuICAgIHRoaXMubWFwLm9uKCd6b29tZW5kJywgdGhpcy5fem9vbUVuZENiLCB0aGlzKVxuICB9XG4gIC8vIOWkhOeQhiBtYXJrZXIg54K55Ye75LqL5Lu2XG4gIHByaXZhdGUgbWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcjogTWFya2VyLCBmaXRCb3VuZHM/OiBib29sZWFuKSB7XG4gICAgdGhpcy5mb2N1c2VkTWFya2VyID0gbWFya2VyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCkge1xuICAgICAgLy8g5Yig6Zmk5YmN5LiA5Liq5pS+5aSn5Zu+5qCHXG4gICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZUZyb20odGhpcy5tYXApXG4gICAgICB9XG4gICAgICAvLyDnlJ/miJDlvZPliY3mlL7lpKflm77moIdcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIgPSBuZXcgTWFya2VyKG1hcmtlci5nZXRMYXRMbmcoKSwge1xuICAgICAgICBpY29uOiB0aGlzLmdldExhcmdlck1hcmtlckljb24obWFya2VyLmdldERhdGEoKSksXG4gICAgICB9KVxuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5hZGRUbyh0aGlzLm1hcClcbiAgICAgIC8vIOa3u+WKoOaUvuWkp+Wbvuagh+eahCBwb3B1cFxuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlclxuICAgICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgICAub3BlblBvcHVwKClcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlKClcbiAgICAgIH0pXG4gICAgfVxuICAgIG1hcmtlci5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkTWFya2VyLmdldExhdExuZygpKVxuICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhtYXJrZXIuZ2V0TGF0TG5nKCkudG9Cb3VuZHMoMTApKVxuICAgIH1cbiAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1tYXJrZXInLCBtYXJrZXIpXG4gIH1cbiAgcHJpdmF0ZSBjb25maWdDbHVzdGVyTGF5ZXIoKSB7XG4gICAgLy8g5bGV56S66IGa5ZCI5Zu+5bGCXG4gICAgaWYgKHRoaXMuY2x1c3RlckxheWVyKSB7XG4gICAgICB0aGlzLmNsdXN0ZXJMYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKHtcbiAgICAgIGljb25DcmVhdGVGdW5jdGlvbjogdGhpcy5pY29uQ3JlYXRlRnVuY3Rpb24uYmluZCh0aGlzKSxcbiAgICB9KVxuICAgIHRoaXMuY2x1c3RlckxheWVyLmFkZExheWVycyhcbiAgICAgIHRoaXMubWFya2Vycy5tYXAoKG0pID0+IHtcbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihtLmdldExhdExuZygpLCB7XG4gICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKG0uZ2V0RGF0YSgpKSxcbiAgICAgICAgfSlcbiAgICAgICAgbWFya2VyLnNldERhdGEobS5nZXREYXRhKCkpXG4gICAgICAgIG1hcmtlci5iaW5kVG9vbHRpcCgnJyArIG1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXSlcbiAgICAgICAgbWFya2VyLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSlcbiAgICAgICAgbWFya2VyLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBtYXJrZXJcbiAgICAgIH0pXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmNsdXN0ZXJMYXllclxuICB9XG5cbiAgLyoqIOa4suafk+S4uueDreWKm+WbviAqL1xuICBwcml2YXRlIGNvbmZpZ0hlYXRMYXllcigpIHtcbiAgICBpZiAodGhpcy5oZWF0TGF5ZXIpIHtcbiAgICAgIHRoaXMuaGVhdExheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIGNvbnN0IGFsdHM6IG51bWJlcltdID0gW11cbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBsYXRMbmcgPSBtYXJrZXIuZ2V0TGF0TG5nKClcbiAgICAgIGNvbnN0IGRpbWVuc2lvbkF0dHIgPVxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLmRpbWVuc2lvbkF0dHJcbiAgICAgIGxldCBhbHQgPVxuICAgICAgICAoZGltZW5zaW9uQXR0ciAmJiBtYXJrZXIuZ2V0RGF0YSgpW2RpbWVuc2lvbkF0dHJdKSB8fFxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4XG4gICAgICBpZiAodHlwZW9mIGFsdCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgYWx0ID0gdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLm1heFxuICAgICAgfVxuICAgICAgYWx0cy5wdXNoKGFsdClcbiAgICAgIG1hcmtlci5zZXRMYXRMbmcoTC5sYXRMbmcobGF0TG5nLmxhdCwgbGF0TG5nLmxuZywgYWx0KSlcbiAgICB9KVxuICAgIHRoaXMuaGVhdExheWVyID0gTC5oZWF0TGF5ZXIoXG4gICAgICB0aGlzLm1hcmtlcnMubWFwKChpdCwgaW5kZXgpID0+IFtcbiAgICAgICAgaXQuZ2V0TGF0TG5nKCkubGF0LFxuICAgICAgICBpdC5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgIGFsdHNbaW5kZXhdLFxuICAgICAgXSksXG4gICAgICBvcHRpb25zTWVyZ2UoeyBtaW5PcGFjaXR5OiAwLjUgfSwgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zKVxuICAgIClcbiAgICByZXR1cm4gdGhpcy5oZWF0TGF5ZXJcbiAgfVxuXG4gIC8qKiDmuLLmn5PkuLrmsJTms6Hlm74gKi9cbiAgcHJpdmF0ZSBjb25maWdCdWJibGVMYXllcigpIHtcbiAgICBpZiAodGhpcy5idWJibGVMYXllcikge1xuICAgICAgdGhpcy5idWJibGVMYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmJ1YmJsZUxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCByYWRpdXMgPSB0aGlzLmdldEJ1YmJsZWRNYXJrZXJTaXplKG1hcmtlci5nZXREYXRhKCkpXG4gICAgICBjb25zdCBmaWxsQ29sb3IgPSB0aGlzLmdldEJ1YmJsZWRNYXJrZXJDb2xvcihtYXJrZXIuZ2V0RGF0YSgpKVxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuYnViYmxlU3Ryb2tlQ29sb3IgfHwgbGlnaHRlbihmaWxsQ29sb3IpXG4gICAgICBjb25zdCB3ZWlnaHQgPSB0aGlzLm9wdGlvbnMuYnViYmxlU3Ryb2tlV2lkdGhcbiAgICAgIGNvbnN0IG9wYWNpdHkgPSB0aGlzLm9wdGlvbnMuYnViYmxlU3Ryb2tlT3BhY2l0eVxuICAgICAgY29uc3QgZmlsbE9wYWNpdHkgPSB0aGlzLm9wdGlvbnMuYnViYmxlRmlsbE9wYWNpdHlcbiAgICAgIGNvbnN0IGJ1YmJsZSA9IEwuY2lyY2xlTWFya2VyKG1hcmtlci5nZXRMYXRMbmcoKSwge1xuICAgICAgICByYWRpdXMsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBmaWxsQ29sb3IsXG4gICAgICAgIHdlaWdodCxcbiAgICAgICAgb3BhY2l0eSxcbiAgICAgICAgZmlsbE9wYWNpdHksXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCkge1xuICAgICAgICBidWJibGUuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwKSB7XG4gICAgICAgIGJ1YmJsZS5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5idWJibGVMYXllci5hZGRMYXllcihidWJibGUpXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5idWJibGVMYXllclxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYXJnZXJNYXJrZXJJY29uKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIHRydWUpXG4gIH1cblxuICBwcml2YXRlIGdldE1hcmtlckljb24oZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgZmFsc2UpXG4gIH1cblxuICAvKiog6I635Y+W5b2T5YmNIG1hcmtlciDpnIDopoHlsZXnpLrnmoQgaWNvbiAqL1xuICBwcml2YXRlIF9nZXRNYXJrZXJJY29uKFxuICAgIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgICBpc0xhcmdlcjogYm9vbGVhblxuICApOiBMLkljb24gfCBMLkRpdkljb24ge1xuICAgIGNvbnN0IGljb25TaXplID0gdGhpcy5vcHRpb25zLmljb25TaXplXG4gICAgY29uc3QgaWNvbkFuY2hvciA9IHRoaXMub3B0aW9ucy5pY29uQW5jaG9yXG4gICAgY29uc3QgbGFyZ2VySWNvblNpemUgPSBbaWNvblNpemVbMF0gKiAxLjUsIGljb25TaXplWzFdICogMS41XSBhcyBbXG4gICAgICBudW1iZXIsXG4gICAgICBudW1iZXJcbiAgICBdXG4gICAgY29uc3QgbGFyZ2VySWNvbkFuY2hvciA9IFtpY29uQW5jaG9yWzBdICogMS41LCBpY29uQW5jaG9yWzFdICogMS41XSBhcyBbXG4gICAgICBudW1iZXIsXG4gICAgICBudW1iZXJcbiAgICBdXG5cbiAgICBjb25zdCBpY29uQ29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yXG5cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgY2FzZSAnaW1hZ2UnOiB7XG4gICAgICAgIC8vIHJldHVybiBMLmljb24oe1xuICAgICAgICAvLyAgIGljb25Vcmw6IHRoaXMub3B0aW9ucy5pY29uSW1hZ2VVcmwsXG4gICAgICAgIC8vICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgLy8gICBpY29uQW5jaG9yLFxuICAgICAgICAvLyB9KVxuICAgICAgfVxuICAgICAgY2FzZSAnZm9udF9jbGFzcyc6XG4gICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgaHRtbDogdGhpcy5nZXRDdXN0b21JY29uSFRNTChkYXRhLCB7XG4gICAgICAgICAgICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXJnZXIgPyAnbGFyZ2UtZGl2LWljb24tbWFya2VyJyA6ICcnLFxuICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgaWNvbkFuY2hvcjogaXNMYXJnZXIgPyBsYXJnZXJJY29uQW5jaG9yIDogaWNvbkFuY2hvcixcbiAgICAgICAgICB0b29sdGlwQW5jaG9yOiBpc0xhcmdlclxuICAgICAgICAgICAgPyBbMCwgLWxhcmdlckljb25BbmNob3JbMV0gLyAyXVxuICAgICAgICAgICAgOiBbMCwgLWljb25BbmNob3JbMV0gLyAyXSxcbiAgICAgICAgICBwb3B1cEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyVHlwZSDkuI3og73kuLogJHt0aGlzLm9wdGlvbnMuaWNvblR5cGV9YClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBnZXRDdXN0b21JY29uSFRNTChcbiAgICBkYXRhOiBEYXRhTGlzdEl0ZW0sXG4gICAgb3B0aW9ucz86IEljb25SZW5kZXJGdW5jT3B0aW9uXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmljb25SZW5kZXJlcihkYXRhLCBvcHRpb25zKVxuICAgIH1cbiAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yXG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGUpIHtcbiAgICAgIGNhc2UgJ3NpbmdsZSc6IHtcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdjbGFzc2lmaWVkJzoge1xuICAgICAgICBjb2xvciA9IHRoaXMuZ2V0Q2xhc3NpZnlNYXJrZXJDb2xvcihkYXRhKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSAnc2VnbWVudGVkJzoge1xuICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGByZW5kZXJQb2ludENvbG9yVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlfVwiYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgIGNhc2UgJ2ZvbnRfY2xhc3MnOiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgPGkgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgYFxuICAgICAgfVxuICAgICAgLy8g5L2/55SoIHN2Z1xuICAgICAgY2FzZSAnc3ltYm9sJzoge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uLXN5bWJvbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLm9wdGlvbnMuaWNvblN5bWJvbH1cIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICBgXG4gICAgICB9XG4gICAgICAvLyDkvb/nlKggdW5pY29kZVxuICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICA8aVxuICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGV9XG4gICAgICAgICAgPC9pPlxuICAgICAgICBgXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgY2FjaGVDbGFzc2lmeVBhcmFtcygpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQXR0cikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG1wOiB7IFtwcm9wOiBzdHJpbmddOiBbc3RyaW5nLCBudW1iZXJdIH0gPSB7fVxuICAgIGNvbnN0IHByb3AgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHJcbiAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhW3Byb3BdIGluIHRtcCkge1xuICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgdG1wW2RhdGFbcHJvcF1dWzFdICsgMV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCAxXVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0bXApXG4gICAgdmFsdWVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgIHRoaXMuY2xhc3NpZmllZENvbG9yUmVmcyA9IFtdXG4gICAgdmFsdWVzLmZvckVhY2goKFthdHRyLCBudW1zXSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjb2xvciA9ICdibGFjaydcbiAgICAgIGlmIChpbmRleCA8IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzLmxlbmd0aCkge1xuICAgICAgICBjb2xvciA9IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzW2luZGV4XVxuICAgICAgfVxuICAgICAgdGhpcy5jbGFzc2lmaWVkQ29sb3JNYXBbYXR0cl0gPSBjb2xvclxuICAgICAgdGhpcy5jbGFzc2lmaWVkQ29sb3JSZWZzLnB1c2goe1xuICAgICAgICBhdHRyLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgbnVtcyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBwcml2YXRlIGNhY2hlQnViYmxlUGFyYW1zKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmJ1YmJsZVNpemVBdHRyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgYnViYmxlZFNpemVzTGVuZ3RoID0gdGhpcy5vcHRpb25zLmJ1YmJsZVNpemVzLmxlbmd0aFxuICAgIGxldCBtYXhTaXplVmFsID0gLUluZmluaXR5XG4gICAgbGV0IG1pblNpemVWYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCBzaXplVmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuYnViYmxlU2l6ZUF0dHJdXG4gICAgICBtYXhTaXplVmFsID0gTWF0aC5tYXgobWF4U2l6ZVZhbCwgc2l6ZVZhbClcbiAgICAgIG1pblNpemVWYWwgPSBNYXRoLm1pbihtaW5TaXplVmFsLCBzaXplVmFsKVxuICAgIH1cbiAgICBjb25zdCBzaXplU3RlcCA9IChtYXhTaXplVmFsIC0gbWluU2l6ZVZhbCArIDEpIC8gYnViYmxlZFNpemVzTGVuZ3RoXG4gICAgdGhpcy5idWJibGVkU2l6ZU1pbiA9IG1pblNpemVWYWxcbiAgICB0aGlzLmJ1YmJsZWRTaXplU3RlcCA9IHNpemVTdGVwXG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5idWJibGVDb2xvckF0dHIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRtcDogeyBbcHJvcDogc3RyaW5nXTogW3N0cmluZywgbnVtYmVyXSB9ID0ge31cbiAgICBjb25zdCBwcm9wID0gdGhpcy5vcHRpb25zLmJ1YmJsZUNvbG9yQXR0clxuICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGFbcHJvcF0gaW4gdG1wKSB7XG4gICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCB0bXBbZGF0YVtwcm9wXV1bMV0gKyAxXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wW2RhdGFbcHJvcF1dID0gW2RhdGFbcHJvcF0sIDFdXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHRtcClcbiAgICB2YWx1ZXMuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pXG4gICAgdGhpcy5idWJibGVkQ29sb3JSZWZzID0gW11cbiAgICB2YWx1ZXMuZm9yRWFjaCgoW2F0dHIsIG51bXNdLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGNvbG9yID0gJ2JsYWNrJ1xuICAgICAgaWYgKGluZGV4IDwgdGhpcy5vcHRpb25zLmJ1YmJsZUNvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuYnViYmxlQ29sb3JzW2luZGV4XVxuICAgICAgfVxuICAgICAgdGhpcy5idWJibGVkQ29sb3JNYXBbYXR0cl0gPSBjb2xvclxuICAgICAgdGhpcy5idWJibGVkQ29sb3JSZWZzLnB1c2goe1xuICAgICAgICBhdHRyLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgbnVtcyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBwcml2YXRlIGdldENsYXNzaWZ5TWFya2VyQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc2lmaWVkQ29sb3JNYXBbZGF0YVt0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHJdXVxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByaXZhdGUgZ2V0QnViYmxlZE1hcmtlclNpemUoZGF0YTogRGF0YUxpc3RJdGVtKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5idWJibGVTaXplQXR0cl1cbiAgICBjb25zdCBzaXplID0gdGhpcy5vcHRpb25zLmJ1YmJsZVNpemVzW1xuICAgICAgcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5idWJibGVkU2l6ZU1pbikgLyB0aGlzLmJ1YmJsZWRTaXplU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBzaXplXG4gIH1cbiAgcHJpdmF0ZSBnZXRCdWJibGVkTWFya2VyQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5idWJibGVkQ29sb3JNYXBbZGF0YVt0aGlzLm9wdGlvbnMuYnViYmxlQ29sb3JBdHRyXV1cbiAgfVxuICBwcml2YXRlIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtcbiAgICAgICAgZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgfWBcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBpY29uQ3JlYXRlRnVuY3Rpb24oY2x1c3RlcjogTC5NYXJrZXJzQ2x1c3Rlcikge1xuICAgIGNvbnN0IGNvbG9ycyA9IFsnIzc1NzQ3MicsICcjNTA5M0UyJywgJyNDQjc5ODcnLCAnI0ZDNzYzQiddXG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5kYXRhTGlzdC5sZW5ndGhcbiAgICBjb25zdCBzdGVwID0gbGVuZ3RoIC8gY29sb3JzLmxlbmd0aFxuICAgIGNvbnN0IHNjYWxlU3RlcCA9ICgxIC0gMC43NSkgLyBjb2xvcnMubGVuZ3RoXG4gICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvclxuICAgIGxldCBzY2FsZSA9IDFcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlckNsdXN0ZXJDb2xvclR5cGUgPT09ICdzbWFydCcpIHtcbiAgICAgIGNvbG9yID0gY29sb3JzW01hdGguZmxvb3IoKGNsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpIC0gMSkgLyBzdGVwKV1cbiAgICAgIHNjYWxlID1cbiAgICAgICAgKE1hdGguZmxvb3IoKGNsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpIC0gMSkgLyBzdGVwKSArIDEpICogc2NhbGVTdGVwICtcbiAgICAgICAgMC43NVxuICAgIH1cbiAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgIGh0bWw6IGBcbiAgICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKCR7c2NhbGV9LCAke3NjYWxlfSwgMSlcbiAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbihjb2xvcil9O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3J9O1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBtYXJnaW46IDlweDtcbiAgICAgICAgICBcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgIGxlZnQ6IDlweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICR7Y2x1c3Rlci5nZXRDaGlsZENvdW50KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgIGljb25TaXplOiBbNDAsIDQwXSxcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgUG9seWdvbiBmcm9tICcuL1BvbHlnb24nXG5pbXBvcnQgUG9seWdvbnNMYXllciwgeyBQb2x5Z29uTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi9Qb2x5Z29uc0xheWVyJ1xuaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkc0xheWVyIGV4dGVuZHMgUG9seWdvbnNMYXllciB7XG4gIHByaXZhdGUgcHJvcE1heExlbmd0aDogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIHRoaXMucHJvcE1heExlbmd0aCA9IC0xXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0dyaWRMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICAvLyB0b29sdGlwIOacieWPr+iDvemcgOimgeebtOaOpeWxleekuu+8jOmcgOimgeWcqCBwb2x5Z29uIOa3u+WKoOWIsOWcsOWbvuS4iuS5i+WQjuaJjeWPr+S7pe+8jOaJgOS7pemcgOimgeW7tui/n+iuvue9rlxuICAgIHRoaXMuY29uZmlnVG9vbHRpcCgpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnpvb21IYW5kbGVyKClcbiAgICB9LCAyMDApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgdG9nZ2xlVG9vbHRpcCh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICBpZiAocG9seWdvbi5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgcG9seWdvbi5nZXRUb29sdGlwKCkuc2V0T3BhY2l0eSh2aXNpYmxlID8gMSA6IDApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdEV2ZW50KCkge1xuICAgIHRoaXMubWFwLm9uKCd6b29tJywgdGhpcy56b29tSGFuZGxlci5iaW5kKHRoaXMpKVxuICB9XG4gIHByaXZhdGUgY29uZmlnVG9vbHRpcCgpIHtcbiAgICB0aGlzLnByb3BNYXhMZW5ndGggPSB0aGlzLmdldFByb3BNYXhMZW5ndGgoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICBwb2x5Z29uLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQocG9seWdvbi5nZXREYXRhKCkpLCB7XG4gICAgICAgICAgcGVybWFuZW50OiB0cnVlLFxuICAgICAgICAgIGRpcmVjdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGNvbmZpZ0dyaWRMYXllcigpIHtcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5Z29ucyA9IHRoaXMucG9seWdvbnMubWFwKChwb2x5Z29uKSA9PiB7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWdvbkNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihwb2x5Z29uLmdldERhdGEoKSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnM6IEwuUG9seWxpbmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yLFxuICAgICAgfSlcbiAgICAgIC8vIOmHjeaWsOW6lOeUqCBvcHRpb25zXG4gICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IFBvbHlnb24ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpXG4gICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpXG4gICAgICBuZXdQb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWdvbi5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1BvbHlnb25cbiAgICB9KVxuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIuYWRkTGF5ZXIocG9seWdvbilcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllclxuICB9XG4gIHByaXZhdGUgem9vbUhhbmRsZXIoKSB7XG4gICAgY29uc3QgcG9seWdvbiA9IHRoaXMucG9seWdvbnNbMF1cbiAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb24pID5cbiAgICAgICAgdGhpcy5nZXRUb29sdGlwTWF4V2lkdGgodGhpcy5wcm9wTWF4TGVuZ3RoKVxuICAgIClcbiAgfVxuICBwcml2YXRlIGdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb246IFBvbHlnb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCkpLnggLVxuICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpLnhcbiAgICApXG4gIH1cbiAgcHJpdmF0ZSBnZXRUb29sdGlwTWF4V2lkdGgodGV4dExlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRleHRMZW5ndGggKiAxMiArIDE0XG4gIH1cbiAgcHJpdmF0ZSBnZXRQcm9wTWF4TGVuZ3RoKCkge1xuICAgIGNvbnN0IHByb3AgPVxuICAgICAgdHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnBvcHVwQXR0clxuICAgICAgICA6IHRoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVcbiAgICByZXR1cm4gdGhpcy5wb2x5Z29uc1xuICAgICAgLm1hcCgocG9seWdvbikgPT4gYCR7cG9seWdvbi5nZXREYXRhKClbcHJvcF19YC5sZW5ndGgpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChwcmV2LCBjdXJyKVxuICAgICAgfSwgMClcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBMLlBvbHlnb24ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxhdGxuZ3M6XG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdXG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdW11cbiAgICAgIHwgTC5MYXRMbmdFeHByZXNzaW9uW11bXVtdLFxuICAgIG9wdGlvbnM/OiBMLlBvbHlsaW5lT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKVxuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHRoaXMuX19kYXRhID0gZGF0YVxuICB9XG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YVxuICB9XG59XG4iLCJpbXBvcnQgeyBsaWdodGVuLCBkYXJrZW4sIG9wdGlvbnNNZXJnZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi9Qb2x5Z29uJ1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWdvbkxheWVyUmVuZGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJyB8ICdjbGFzc2lmaWVkJ1xudHlwZSBDb2xvck1vZGUgPSAnZGFya2VuJyB8ICdsaWdodGVuJyB8ICdub3JtYWwnXG5cbmNvbnN0IERFRkFVTFRfQ09MT1IgPSAnIzcyQUZERidcbmV4cG9ydCBpbnRlcmZhY2UgUG9seWdvbkxheWVyT3B0aW9ucyBleHRlbmRzIEwuUG9seWxpbmVPcHRpb25zIHtcbiAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogUG9seWdvbkxheWVyUmVuZGVyQ29sb3JUeXBlXG5cbiAgLyoqIHBvcHVwIOWxleekuuWtl+autSAqL1xuICBwb3B1cEF0dHI/OiBzdHJpbmcgfCB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBhbnkgfVxuICAvKiogdG9vbHRpcCDlsZXnpLrlrZfmrrUgKi9cbiAgdG9vbHRpcEF0dHI/OiBzdHJpbmdcblxuICBvcGFjaXR5PzogbnVtYmVyXG5cbiAgLyoqIOWIhuautea4suafk+e7n+iuoeWtl+autSAqL1xuICBzZWdtZW50ZWRBdHRyPzogc3RyaW5nXG4gIHNlZ21lbnRlZENvbG9ycz86IHN0cmluZ1tdXG5cbiAgLyoqIOWIhuexu+Wei+a4suafk+e7n+iuoeWtl+autSAqL1xuICBjbGFzc2lmaWVkQXR0cj86IHN0cmluZ1xuICBjbGFzc2lmaWVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb25zTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOiBMLkxheWVyR3JvdXBcblxuICBwcm90ZWN0ZWQgbWFwOiBMLk1hcFxuICBwcm90ZWN0ZWQgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zXG4gIHByb3RlY3RlZCBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgcHJvdGVjdGVkIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJvdGVjdGVkIHBvbHlnb25zOiBQb2x5Z29uW11cbiAgcHJvdGVjdGVkIGZvY3VzZWRQb2x5Z29uOiBQb2x5Z29uXG4gIHByb3RlY3RlZCBmb2N1c2VkRGlzcGxheVBvbHlnb246IFBvbHlnb25cbiAgcHJvdGVjdGVkIHBvbHlnb25MYXllcjogTC5MYXllckdyb3VwXG5cbiAgLyoqIOiusOW9leafkOS4qiBwcm9wIOWvueW6lOeahOa4suafk+minOiJsiAqL1xuICBwcml2YXRlIGNsYXNzaWZ5Q29sb3JNYXA6IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9XG4gIC8qKiDliIbnsbvmuLLmn5PpopzoibLlj4Lnhaco5o+Q5L6b57uZ6LCD55So6ICF5L2/55SoKSAqL1xuICBwcml2YXRlIGNsYXNzaWZ5Q29sb3JSZWZzOiBBcnJheTx7XG4gICAgYXR0cjogc3RyaW5nXG4gICAgY29sb3I6IHN0cmluZ1xuICAgIG51bXM6IG51bWJlclxuICB9PlxuICBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhTGlzdCkgfHwgZGF0YUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGRhdGFMaXN0IOW/hemhu+aYr+mdnuepuuaVsOe7hGApXG4gICAgfVxuXG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIHBvcHVwQXR0cjogeyBsYWJlbDogJ+WQjeensCcsIHZhbHVlOiAnbmFtZScgfSxcbiAgICAgIHRvb2x0aXBBdHRyOiAnbmFtZScsXG4gICAgICBjb2xvcjogREVGQVVMVF9DT0xPUixcbiAgICAgIGZpbGw6IHRydWUsXG4gICAgICBmaWxsQ29sb3I6IERFRkFVTFRfQ09MT1IsXG4gICAgICB3ZWlnaHQ6IDEsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZmlsbE9wYWNpdHk6IDAuNCxcbiAgICAgIHJlbmRlclBvbHlnb25Db2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbREVGQVVMVF9DT0xPUl0sXG4gICAgICBjbGFzc2lmaWVkQ29sb3JzOiBbREVGQVVMVF9DT0xPUl0sXG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdwb2x5Z29uJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc01lcmdlKFxuICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIG9wdGlvbnNcbiAgICApIGFzIFBvbHlnb25MYXllck9wdGlvbnNcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcblxuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLnBvbHlnb25zID0gW11cbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMVxuICAgIHRoaXMuY2xhc3NpZnlDb2xvck1hcCA9IHt9XG4gICAgdGhpcy5mb2N1c2VkUG9seWdvbiA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbiA9IG51bGxcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWdvbkxheWVyT3B0aW9ucykge1xuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5Z29ucygpXG4gICAgdGhpcy5pbml0RXZlbnQoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlnb25MYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWdvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5Z29ucy5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksXG4gICAgICBMLmxhdExuZ0JvdW5kcyhcbiAgICAgICAgdGhpcy5wb2x5Z29uc1swXS5nZXRCb3VuZHMoKS5nZXROb3J0aEVhc3QoKSxcbiAgICAgICAgdGhpcy5wb2x5Z29uc1swXS5nZXRCb3VuZHMoKS5nZXRTb3V0aFdlc3QoKVxuICAgICAgKVxuICAgIClcbiAgfVxuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbilcbiAgICB9XG4gIH1cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLnJlbW92ZSgpXG4gICAgICB9XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5maWxsQ29sb3IgPSBjb2xvclxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcGl0Y2goaWQ6IHN0cmluZykge1xuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgaWYgKHBvbHlnb24uZ2V0RGF0YSgpLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbiwgdHJ1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwdWJsaWMgZ2V0Q2xhc3NpZnlDb2xvclJlZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NpZnlDb2xvclJlZnNcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcbiAgcHJvdGVjdGVkIGluaXRFdmVudCgpIHt9XG4gIHByb3RlY3RlZCBnZXRUb29sVGlwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgfVxuICBwcm90ZWN0ZWQgZ2V0UG9wdXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWBcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke1xuICAgICAgICBkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICB9YFxuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgY2FjaGVDbGFzc2lmeVBhcmFtcygpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQXR0cikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG1wOiB7IFtwcm9wOiBzdHJpbmddOiBbc3RyaW5nLCBudW1iZXJdIH0gPSB7fVxuICAgIGNvbnN0IHByb3AgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHJcbiAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhW3Byb3BdIGluIHRtcCkge1xuICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgdG1wW2RhdGFbcHJvcF1dWzFdICsgMV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCAxXVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0bXApXG4gICAgdmFsdWVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgIHRoaXMuY2xhc3NpZnlDb2xvclJlZnMgPSBbXVxuICAgIHZhbHVlcy5mb3JFYWNoKChbYXR0ciwgbnVtc10sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY29sb3IgPSAnYmxhY2snXG4gICAgICBpZiAoaW5kZXggPCB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9yc1tpbmRleF1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2xhc3NpZnlDb2xvck1hcFthdHRyXSA9IGNvbG9yXG4gICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JSZWZzLnB1c2goe1xuICAgICAgICBhdHRyLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgbnVtcyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0Q2xhc3NpZnlQb2x5Z29uQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2RhdGFbdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyXV1cbiAgfVxuICBwcm90ZWN0ZWQgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByb3RlY3RlZCBnZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByb3RlY3RlZCBwb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb246IFBvbHlnb24sIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRQb2x5Z29uID0gcG9seWdvblxuICAgIC8vIOWIoOmZpOWJjeS4gOS4qiBmb2N1c1xuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKClcbiAgICB9XG4gICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwge1xuICAgICAgY29sb3I6IERFRkFVTFRfQ09MT1IsXG4gICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWdvbi5nZXREYXRhKCkpLFxuICAgIH0pXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24uYWRkVG8odGhpcy5tYXApXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvblxuICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChwb2x5Z29uLmdldERhdGEoKSkpXG4gICAgICAub3BlblBvcHVwKClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKClcbiAgICB9KVxuICAgIHBvbHlnb24uY2xvc2VUb29sdGlwKClcblxuICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLmdldENlbnRlcigpKVxuICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5Z29uLmdldEJvdW5kcygpKVxuICAgIH1cbiAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1wb2x5Z29uJywgcG9seWdvbilcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdE9wdGlvbnMob3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNNZXJnZShcbiAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICBvcHRpb25zXG4gICAgKSBhcyBQb2x5Z29uTGF5ZXJPcHRpb25zXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRQb2x5Z29ucygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5jYWNoZUNsYXNzaWZ5UGFyYW1zKClcbiAgICB0aGlzLnBvbHlnb25zID0gW11cbiAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdXG4gICAgICBjb25zdCBwb2x5Z29uID0gbmV3IFBvbHlnb24oKGxheWVyIGFzIEwuUG9seWdvbikuZ2V0TGF0TG5ncygpKVxuXG4gICAgICBwb2x5Z29uLnNldERhdGEoZGF0YSlcbiAgICAgIHRoaXMucG9seWdvbnMucHVzaChwb2x5Z29uKVxuICAgIH0pXG4gIH1cbiAgcHJpdmF0ZSBjb25maWdQb2x5Z29uTGF5ZXIoKSB7XG4gICAgdGhpcy5wb2x5Z29uTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMucG9seWdvbnMgPSB0aGlzLnBvbHlnb25zLm1hcCgocG9seWdvbikgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBvcHRpb25zTWVyZ2Uoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICBjb2xvcjogREVGQVVMVF9DT0xPUixcbiAgICAgICAgZmlsbENvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlnb24uZ2V0RGF0YSgpKSxcbiAgICAgIH0pXG4gICAgICAvLyDph43mlrDlupTnlKggb3B0aW9uc1xuICAgICAgY29uc3QgbmV3UG9seWdvbiA9IG5ldyBQb2x5Z29uKHBvbHlnb24uZ2V0TGF0TG5ncygpLCBvcHRpb25zKVxuICAgICAgbmV3UG9seWdvbi5zZXREYXRhKHBvbHlnb24uZ2V0RGF0YSgpKVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICBuZXdQb2x5Z29uLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgbmV3UG9seWdvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uKVxuICAgICAgfSlcbiAgICAgIHJldHVybiBuZXdQb2x5Z29uXG4gICAgfSlcbiAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgIHRoaXMucG9seWdvbkxheWVyLmFkZExheWVyKHBvbHlnb24pXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5wb2x5Z29uTGF5ZXJcbiAgfVxuICBwcml2YXRlIGdldENvbG9yKGRhdGE6IERhdGFMaXN0SXRlbSwgbW9kZT86IENvbG9yTW9kZSkge1xuICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWdvbkNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YSlcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnY2xhc3NpZmllZCcpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5nZXRDbGFzc2lmeVBvbHlnb25Db2xvcihkYXRhKVxuICAgIH1cbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgIHJldHVybiBkYXJrZW4oY29sb3IpXG4gICAgICBjYXNlICdsaWdodGVuJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0ZW4oY29sb3IpXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gY29sb3JcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgdHlwZSBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24gPVxuICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdXG4gIHwgTC5MYXRMbmdFeHByZXNzaW9uW11bXVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWxpbmUgZXh0ZW5kcyBMLlBvbHlsaW5lIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfX2RhdGE6IERhdGFMaXN0SXRlbVxuICBjb25zdHJ1Y3RvcihsYXRsbmdzOiBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sIG9wdGlvbnM/OiBMLlBvbHlsaW5lT3B0aW9ucykge1xuICAgIHN1cGVyKGxhdGxuZ3MsIG9wdGlvbnMpXG4gIH1cbiAgcHVibGljIHNldERhdGEoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgdGhpcy5fX2RhdGEgPSBkYXRhXG4gIH1cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kYXRhXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBQb2x5bGluZXNMYXllciBmcm9tICcuL1BvbHlsaW5lc0xheWVyJ1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbmludGVyZmFjZSBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyBleHRlbmRzIEwuQ29ycmlkb3JPcHRpb25zIHtcbiAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6IFBvbHlsaW5lTGF5ZXJSZW5kZXJDb2xvclR5cGVcblxuICAvKiogcG9wdXAg5bGV56S65a2X5q61ICovXG4gIHBvcHVwQXR0cj86IHN0cmluZ1xuICAvKiogdG9vbHRpcCDlsZXnpLrlrZfmrrUgKi9cbiAgdG9vbHRpcEF0dHI/OiBzdHJpbmdcblxuICBvcGFjaXR5PzogbnVtYmVyXG5cbiAgLyoqIOWIhuautea4suafk+e7n+iuoeWtl+autSAqL1xuICBzZWdtZW50ZWRBdHRyPzogc3RyaW5nXG4gIHNlZ21lbnRlZENvbG9ycz86IHN0cmluZ1tdXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZXNCdWZmZXJMYXllciBleHRlbmRzIFBvbHlsaW5lc0xheWVyIHtcbiAgcHVibGljIHR5cGU6IHN0cmluZ1xuICBwcm90ZWN0ZWQgb3B0aW9uczogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnNcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyA9IHtcbiAgICAgIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICBjb3JyaWRvcjogMTAwLFxuICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3BvbHlsaW5lQnVmZmVyJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMucG9seWxpbmVzID0gW11cbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMVxuICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbFxuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgdGhpcy5pbml0UG9seWxpbmVzKClcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyByZWRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5sYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdQb2x5bGluZUJ1ZmZlckxheWVyKClcbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIGZpdEJvdW5kcygpIHtcbiAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5nZXRCb3VuZHMoKSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVzLnJlZHVjZShcbiAgICAgIChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSxcbiAgICAgIHRoaXMucG9seWxpbmVzWzBdLmdldEJvdW5kcygpXG4gICAgKVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25zLmNvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHJpdmF0ZSBjb25maWdQb2x5bGluZUJ1ZmZlckxheWVyKCkge1xuICAgIHRoaXMucG9seWxpbmVMYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIHBvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSlcbiAgICAgIH0pXG4gICAgICBjb25zdCBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NpbmdsZSdcbiAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICAgICAgICAgICAgOiB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKSxcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBjb25zdCBwb2x5bGluZUJ1ZmZlciA9IEwuY29ycmlkb3IoXG4gICAgICAgIChwb2x5bGluZS5nZXRMYXRMbmdzKCkgYXMgTC5MYXRMbmdbXSkubWFwKChsYXRMbmcpID0+XG4gICAgICAgICAgTC5sYXRMbmcoW2xhdExuZy5sYXQsIGxhdExuZy5sbmddKVxuICAgICAgICApLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgIHBvbHlsaW5lQnVmZmVyLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQocG9seWxpbmUuZ2V0RGF0YSgpKSlcbiAgICAgIH1cbiAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihwb2x5bGluZUJ1ZmZlcilcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlsaW5lTGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlsaW5lLCB7IFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiB9IGZyb20gJy4vUG9seWxpbmUnXG5pbXBvcnQgeyBkYXJrZW4sIGxpZ2h0ZW4sIG9wdGlvbnNNZXJnZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCcgfCAnY2xhc3NpZmllZCdcbnR5cGUgQ29sb3JNb2RlID0gJ2RhcmtlbicgfCAnbGlnaHRlbicgfCAnbm9ybWFsJ1xuaW50ZXJmYWNlIFBvbHlsaW5lTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxuXG4gIC8qKiDliIbnsbvlnovmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgY2xhc3NpZmllZEF0dHI/OiBzdHJpbmdcbiAgY2xhc3NpZmllZENvbG9ycz86IHN0cmluZ1tdXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZXNMYXllciB7XG4gIHB1YmxpYyB0eXBlOiBzdHJpbmdcblxuICBwcm90ZWN0ZWQgdmlzaWJsZTogYm9vbGVhblxuICBwcm90ZWN0ZWQgbGF5ZXI6IEwuTGF5ZXJHcm91cFxuXG4gIHByb3RlY3RlZCBtYXA6IEwuTWFwXG4gIHByb3RlY3RlZCBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW11cbiAgcHJvdGVjdGVkIG9wdGlvbnM6IFBvbHlsaW5lTGF5ZXJPcHRpb25zXG4gIHByb3RlY3RlZCBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgcHJvdGVjdGVkIHBvbHlsaW5lczogUG9seWxpbmVbXVxuICBwcm90ZWN0ZWQgc2VnbWVudGVkTWluOiBudW1iZXJcbiAgcHJvdGVjdGVkIHNlZ21lbnRlZFN0ZXA6IG51bWJlclxuICBwcm90ZWN0ZWQgZm9jdXNlZFBvbHlsaW5lOiBQb2x5bGluZVxuICBwcm90ZWN0ZWQgZm9jdXNlZERpc3BsYXlQb2x5bGluZTogUG9seWxpbmVcbiAgcHJvdGVjdGVkIHBvbHlsaW5lTGF5ZXI6IEwuTGF5ZXJHcm91cFxuICAvKiog6K6w5b2V5p+Q5LiqIHByb3Ag5a+55bqU55qE5riy5p+T6aKc6ImyICovXG4gIHByaXZhdGUgY2xhc3NpZnlDb2xvck1hcDogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH1cbiAgLyoqIOWIhuexu+a4suafk+minOiJsuWPgueFpyjmj5Dkvpvnu5nosIPnlKjogIXkvb/nlKgpICovXG4gIHByaXZhdGUgY2xhc3NpZnlDb2xvclJlZnM6IEFycmF5PHtcbiAgICBhdHRyOiBzdHJpbmdcbiAgICBjb2xvcjogc3RyaW5nXG4gICAgbnVtczogbnVtYmVyXG4gIH0+XG4gIHByaXZhdGUgZGVmYXVsdE9wdGlvbnM6IFBvbHlsaW5lTGF5ZXJPcHRpb25zXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IFBvbHlsaW5lTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YUxpc3QpIHx8IGRhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhTGlzdCDlv4XpobvmmK/pnZ7nqbrmlbDnu4RgKVxuICAgIH1cbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgY2xhc3NpZmllZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdwb2x5bGluZSdcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNNZXJnZShcbiAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBvcHRpb25zXG4gICAgKSBhcyBQb2x5bGluZUxheWVyT3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMucG9seWxpbmVzID0gW11cbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMVxuICAgIHRoaXMuY2xhc3NpZnlDb2xvck1hcCA9IHt9XG4gICAgdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbnVsbFxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBQb2x5bGluZUxheWVyT3B0aW9ucykge1xuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5bGluZXMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pXG4gIH1cbiAgcHVibGljIGdldEJvdW5kcygpOiBMLkxhdExuZ0JvdW5kc0V4cHJlc3Npb24ge1xuICAgIGlmICh0aGlzLnBvbHlsaW5lcy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvbHlsaW5lcy5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksXG4gICAgICBMLmxhdExuZ0JvdW5kcyhcbiAgICAgICAgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCksXG4gICAgICAgIHRoaXMucG9seWxpbmVzWzBdLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpXG4gICAgICApXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgdG9nZ2xlVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZVxuICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKVxuICAgICAgfVxuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsbENvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHBpdGNoKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgaWYgKHBvbHlsaW5lLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSwgdHJ1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwdWJsaWMgZ2V0Q2xhc3NpZnlDb2xvclJlZnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NpZnlDb2xvclJlZnNcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdE9wdGlvbnMob3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zTWVyZ2UoXG4gICAgICB0aGlzLmRlZmF1bHRPcHRpb25zLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgb3B0aW9uc1xuICAgICkgYXMgUG9seWxpbmVMYXllck9wdGlvbnNcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdFBvbHlsaW5lcygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5jYWNoZUNsYXNzaWZ5UGFyYW1zKClcblxuICAgIHRoaXMucG9seWxpbmVzID0gdGhpcy5kYXRhTGlzdC5tYXAoKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdXG4gICAgICBjb25zdCBwb2x5bGluZSA9IG5ldyBQb2x5bGluZShcbiAgICAgICAgKGxheWVyIGFzIEwuUG9seWxpbmUpLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb25cbiAgICAgIClcbiAgICAgIC8vIOWwhuebuOWFs+WAvOe7keWumuWIsCBtYXJrZXLkuIpcbiAgICAgIHBvbHlsaW5lLnNldERhdGEoZGF0YSlcblxuICAgICAgcmV0dXJuIHBvbHlsaW5lXG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW1xuICAgICAgcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMClcbiAgICBdXG4gICAgcmV0dXJuIGNvbG9yXG4gIH1cbiAgcHJvdGVjdGVkIHBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lOiBQb2x5bGluZSwgZml0Qm91bmRzPzogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gcG9seWxpbmVcbiAgICAvLyDliKDpmaTliY3kuIDkuKogZm9jdXNcbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lKSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKClcbiAgICB9XG4gICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKFxuICAgICAgcG9seWxpbmUuZ2V0TGF0TG5ncygpIGFzIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbixcbiAgICAgIHtcbiAgICAgICAgY29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKSxcbiAgICAgICAgZmlsbENvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSwgJ25vcm1hbCcpLFxuICAgICAgfVxuICAgIClcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUuYWRkVG8odGhpcy5tYXApXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmVcbiAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQocG9seWxpbmUuZ2V0RGF0YSgpKSlcbiAgICAgIC5vcGVuUG9wdXAoKVxuXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpXG4gICAgfSlcblxuICAgIHBvbHlsaW5lLmNsb3NlVG9vbHRpcCgpXG5cbiAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUuZ2V0Q2VudGVyKCkpXG4gICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHBvbHlsaW5lLmdldEJvdW5kcygpKVxuICAgIH1cbiAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1wb2x5bGluZScsIHBvbHlsaW5lKVxuICB9XG4gIHByb3RlY3RlZCBnZXRUb29sVGlwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgfVxuICBwcm90ZWN0ZWQgZ2V0UG9wdXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWBcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke1xuICAgICAgICBkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICB9YFxuICAgIH1cbiAgfVxuICBwcml2YXRlIGNvbmZpZ1BvbHlsaW5lTGF5ZXIoKSB7XG4gICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBvcHRpb25zTWVyZ2Uoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICBjb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgfSlcbiAgICAgIGNvbnN0IG5ld1BvbHlsaW5lID0gbmV3IFBvbHlsaW5lKFxuICAgICAgICBwb2x5bGluZS5nZXRMYXRMbmdzKCkgYXMgUG9seWxpbmVMYXRMbmdFeHByZXNzaW9uLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG4gICAgICBuZXdQb2x5bGluZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUpXG4gICAgICB9KVxuICAgICAgbmV3UG9seWxpbmUuc2V0RGF0YShwb2x5bGluZS5nZXREYXRhKCkpXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgIG5ld1BvbHlsaW5lLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQobmV3UG9seWxpbmUuZ2V0RGF0YSgpKSlcbiAgICAgIH1cbiAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihuZXdQb2x5bGluZSlcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlsaW5lTGF5ZXJcbiAgfVxuICBwcml2YXRlIGNhY2hlQ2xhc3NpZnlQYXJhbXMoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRtcDogeyBbcHJvcDogc3RyaW5nXTogW3N0cmluZywgbnVtYmVyXSB9ID0ge31cbiAgICBjb25zdCBwcm9wID0gdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YVtwcm9wXSBpbiB0bXApIHtcbiAgICAgICAgdG1wW2RhdGFbcHJvcF1dID0gW2RhdGFbcHJvcF0sIHRtcFtkYXRhW3Byb3BdXVsxXSArIDFdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgMV1cbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXModG1wKVxuICAgIHZhbHVlcy5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlcbiAgICB0aGlzLmNsYXNzaWZ5Q29sb3JSZWZzID0gW11cbiAgICB2YWx1ZXMuZm9yRWFjaCgoW2F0dHIsIG51bXNdLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGNvbG9yID0gJ2JsYWNrJ1xuICAgICAgaWYgKGluZGV4IDwgdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRDb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbG9yID0gdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRDb2xvcnNbaW5kZXhdXG4gICAgICB9XG4gICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JNYXBbYXR0cl0gPSBjb2xvclxuICAgICAgdGhpcy5jbGFzc2lmeUNvbG9yUmVmcy5wdXNoKHtcbiAgICAgICAgYXR0cixcbiAgICAgICAgY29sb3IsXG4gICAgICAgIG51bXMsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgcHJpdmF0ZSBnZXRDbGFzc2lmeVBvbHlsaW5lQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2RhdGFbdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyXV1cbiAgfVxuICBwcml2YXRlIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aFxuICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHlcbiAgICBsZXQgbWluVmFsID0gSW5maW5pdHlcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKVxuICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpXG4gICAgfVxuICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGhcbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IG1pblZhbFxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXBcbiAgfVxuICBwcml2YXRlIGdldENvbG9yKGRhdGE6IERhdGFMaXN0SXRlbSwgbW9kZT86IENvbG9yTW9kZSkge1xuICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWxpbmVDb2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhKVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnY2xhc3NpZmllZCcpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5nZXRDbGFzc2lmeVBvbHlsaW5lQ29sb3IoZGF0YSlcbiAgICB9XG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlICdkYXJrZW4nOlxuICAgICAgICByZXR1cm4gZGFya2VuKGNvbG9yKVxuICAgICAgY2FzZSAnbGlnaHRlbic6XG4gICAgICAgIHJldHVybiBsaWdodGVuKGNvbG9yKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGNvbG9yXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBDb2xvciBmcm9tICdjb2xvcidcblxuZnVuY3Rpb24gbGlnaHRlbihoZXhDb2xvcjogc3RyaW5nKSB7XG4gIHJldHVybiBDb2xvcihoZXhDb2xvcilcbiAgICAubGlnaHRlbigwLjUpXG4gICAgLmhleCgpXG59XG5mdW5jdGlvbiBkYXJrZW4oaGV4Q29sb3I6IHN0cmluZykge1xuICByZXR1cm4gQ29sb3IoaGV4Q29sb3IpXG4gICAgLmRhcmtlbigwLjUpXG4gICAgLmhleCgpXG59XG5cbmZ1bmN0aW9uIG9wdGlvbnNNZXJnZSguLi50YXJnZXRzOiBhbnlbXSk6IG9iamVjdCB7XG4gIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7fVxuICB9XG4gIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiB0YXJnZXRzWzBdXG4gIH1cbiAgY29uc3QgbWVyZ2VkID0gdGFyZ2V0c1swXVxuICBmb3IgKGNvbnN0IGtleSBpbiB0YXJnZXRzWzFdKSB7XG4gICAgaWYgKGtleSBpbiBtZXJnZWQpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobWVyZ2VkW2tleV0pID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICBtZXJnZWRba2V5XSA9IG9wdGlvbnNNZXJnZShtZXJnZWRba2V5XSwgdGFyZ2V0c1sxXVtrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVyZ2VkW2tleV0gPSB0YXJnZXRzWzFdW2tleV1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWVyZ2VkW2tleV0gPSB0YXJnZXRzWzFdW2tleV1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNNZXJnZShtZXJnZWQsIC4uLnRhcmdldHMuc2xpY2UoMikpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlnaHRlbixcbiAgZGFya2VuLFxuICBvcHRpb25zTWVyZ2UsXG59XG5leHBvcnQgeyBsaWdodGVuLCBkYXJrZW4sIG9wdGlvbnNNZXJnZSB9XG4iXSwic291cmNlUm9vdCI6IiJ9

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
    price: 5,
    class: 'b'
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [116.381216, 39.90778],
    },
    price: 10,
    class: 'b'
  },
]

var layer = new _leaflet_layer__WEBPACK_IMPORTED_MODULE_0___default.a.MarkersLayer(
  map,
  dataList,
  {
    renderType: 'bubble',
    // iconUnicode: '&#xe655;',
    // tooltip: false,
    popup: false,
    tooltipAttr: 'price',
    popupAttr: {label: '价格', value: 'price'},
    bubbleColorAttr: 'class',
    bubbleSizeAttr: 'price',
    bubbleColors: ['red', 'green', 'blue'],
    bubbleSizes: [10, 20, 30],
    bubbleStrokeWidth: 10,
    // bubbleStrokeColor: 'black',

  },
  function(eventName) {
    // const w = 100
    // const h = 200
    // const { x, y } = event.containerPoint
    // calcOffset(x, y, w, h)
  }
)
layer.draw()
console.log(layer.getBubbledColorRefs())

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sZWFmbGV0LWxheWVyLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUsyQjtBQUNqQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYTtBQUM1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RCx1Q0FBdUM7QUFDL0Ysc0RBQXNELHFDQUFxQzs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLElBQUk7QUFDN0Isd0JBQXdCLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCx3QkFBd0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxvQkFBb0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsaURBQWlELGVBQWU7QUFDaEU7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwyREFBMkQsZUFBZTtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxxREFBcUQsZUFBZTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNU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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUJBQXVCLElBQUksNkJBQTZCO0FBQzlFO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCLElBQUksbUNBQW1DO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0c7QUFDaEc7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUdBQWlHLGdCQUFnQixFQUFFO0FBQ25ILGdHQUFnRyxlQUFlLEVBQUU7QUFDakgsc0dBQXNHLHFCQUFxQixFQUFFO0FBQzdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQsT0FBTzs7QUFFUCxVQUFVO0FBQ1YsQ0FBQztBQUNELDJDQUEyQyxjQUFjLCtuc087Ozs7Ozs7Ozs7OztBQ3RnSXpEO0FBQUE7QUFBQTtBQUFBO0FBQytDOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsbUJBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQywwQkFBMEI7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sbUNBQW1DLDZCQUE2QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxnQkFBZ0IscURBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDRCQUE0QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5QkFBeUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RCxVQUFVO0FBQ25FO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVzdC9zcmMvYXBwLmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBNSVQgbGljZW5zZSAqL1xudmFyIGNzc0tleXdvcmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29sb3ItbmFtZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanNcIik7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmRpZjtcblx0dmFyIGdkaWY7XG5cdHZhciBiZGlmO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG4vKipcbiAqIFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICogKi9cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHRyZXR1cm4gKFxuXHRcdE1hdGgucG93KHhbMF0gLSB5WzBdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzJdIC0geVsyXSwgMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yICh2YXIga2V5d29yZCBpbiBjc3NLZXl3b3Jkcykge1xuXHRcdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXl3b3JkKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGNvbnZlcnQuZ3JheS5oc3YgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHZhciB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0dmFyIGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNvbnZlcnNpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb252ZXJzaW9ucyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanNcIik7XG52YXIgcm91dGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JvdXRlICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qc1wiKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNvbnZlcnNpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb252ZXJzaW9ucyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanNcIik7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb2xvck5hbWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29sb3ItbmFtZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qc1wiKTtcbnZhciBzd2l6emxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgc2ltcGxlLXN3aXp6bGUgKi8gXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qc1wiKTtcblxudmFyIHJldmVyc2VOYW1lcyA9IHt9O1xuXG4vLyBjcmVhdGUgYSBsaXN0IG9mIHJldmVyc2UgY29sb3IgbmFtZXNcbmZvciAodmFyIG5hbWUgaW4gY29sb3JOYW1lcykge1xuXHRpZiAoY29sb3JOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdHJldmVyc2VOYW1lc1tjb2xvck5hbWVzW25hbWVdXSA9IG5hbWU7XG5cdH1cbn1cblxudmFyIGNzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHRvOiB7fSxcblx0Z2V0OiB7fVxufTtcblxuY3MuZ2V0ID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHR2YXIgcHJlZml4ID0gc3RyaW5nLnN1YnN0cmluZygwLCAzKS50b0xvd2VyQ2FzZSgpO1xuXHR2YXIgdmFsO1xuXHR2YXIgbW9kZWw7XG5cdHN3aXRjaCAocHJlZml4KSB7XG5cdFx0Y2FzZSAnaHNsJzpcblx0XHRcdHZhbCA9IGNzLmdldC5oc2woc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2hzbCc7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdod2InOlxuXHRcdFx0dmFsID0gY3MuZ2V0Lmh3YihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAnaHdiJztcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2YWwgPSBjcy5nZXQucmdiKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdyZ2InO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRpZiAoIXZhbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHttb2RlbDogbW9kZWwsIHZhbHVlOiB2YWx9O1xufTtcblxuY3MuZ2V0LnJnYiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBhYmJyID0gL14jKFthLWYwLTldezMsNH0pJC9pO1xuXHR2YXIgaGV4ID0gL14jKFthLWYwLTldezZ9KShbYS1mMC05XXsyfSk/JC9pO1xuXHR2YXIgcmdiYSA9IC9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgcGVyID0gL15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBrZXl3b3JkID0gLyhcXEQrKS87XG5cblx0dmFyIHJnYiA9IFswLCAwLCAwLCAxXTtcblx0dmFyIG1hdGNoO1xuXHR2YXIgaTtcblx0dmFyIGhleEFscGhhO1xuXG5cdGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChoZXgpKSB7XG5cdFx0aGV4QWxwaGEgPSBtYXRjaFsyXTtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL3NsaWNlLXZzLXN1YnN0ci12cy1zdWJzdHJpbmctbWV0aG9kcy1sb25nLXN0cmluZy8xOVxuXHRcdFx0dmFyIGkyID0gaSAqIDI7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaC5zbGljZShpMiwgaTIgKyAyKSwgMTYpO1xuXHRcdH1cblxuXHRcdGlmIChoZXhBbHBoYSkge1xuXHRcdFx0cmdiWzNdID0gTWF0aC5yb3VuZCgocGFyc2VJbnQoaGV4QWxwaGEsIDE2KSAvIDI1NSkgKiAxMDApIC8gMTAwO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKSkge1xuXHRcdG1hdGNoID0gbWF0Y2hbMV07XG5cdFx0aGV4QWxwaGEgPSBtYXRjaFszXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2ldICsgbWF0Y2hbaV0sIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhICsgaGV4QWxwaGEsIDE2KSAvIDI1NSkgKiAxMDApIC8gMTAwO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSwgMCk7XG5cdFx0fVxuXG5cdFx0aWYgKG1hdGNoWzRdKSB7XG5cdFx0XHRyZ2JbM10gPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocGVyKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChtYXRjaFtpICsgMV0pICogMi41NSk7XG5cdFx0fVxuXG5cdFx0aWYgKG1hdGNoWzRdKSB7XG5cdFx0XHRyZ2JbM10gPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goa2V5d29yZCkpIHtcblx0XHRpZiAobWF0Y2hbMV0gPT09ICd0cmFuc3BhcmVudCcpIHtcblx0XHRcdHJldHVybiBbMCwgMCwgMCwgMF07XG5cdFx0fVxuXG5cdFx0cmdiID0gY29sb3JOYW1lc1ttYXRjaFsxXV07XG5cblx0XHRpZiAoIXJnYikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmdiWzNdID0gMTtcblxuXHRcdHJldHVybiByZ2I7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0cmdiW2ldID0gY2xhbXAocmdiW2ldLCAwLCAyNTUpO1xuXHR9XG5cdHJnYlszXSA9IGNsYW1wKHJnYlszXSwgMCwgMSk7XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNzLmdldC5oc2wgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgaHNsID0gL15oc2xhP1xcKFxccyooWystXT8oPzpcXGQqXFwuKT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGhzbCk7XG5cblx0aWYgKG1hdGNoKSB7XG5cdFx0dmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0dmFyIGggPSAocGFyc2VGbG9hdChtYXRjaFsxXSkgKyAzNjApICUgMzYwO1xuXHRcdHZhciBzID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGwgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cblx0XHRyZXR1cm4gW2gsIHMsIGwsIGFdO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jcy5nZXQuaHdiID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGh3YiA9IC9eaHdiXFwoXFxzKihbKy1dP1xcZCpbXFwuXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG5cblx0aWYgKG1hdGNoKSB7XG5cdFx0dmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0dmFyIGggPSAoKHBhcnNlRmxvYXQobWF0Y2hbMV0pICUgMzYwKSArIDM2MCkgJSAzNjA7XG5cdFx0dmFyIHcgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKTtcblx0XHR2YXIgYiA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApO1xuXHRcdHZhciBhID0gY2xhbXAoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcblx0XHRyZXR1cm4gW2gsIHcsIGIsIGFdO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jcy50by5oZXggPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHJldHVybiAoXG5cdFx0JyMnICtcblx0XHRoZXhEb3VibGUocmdiYVswXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzFdKSArXG5cdFx0aGV4RG91YmxlKHJnYmFbMl0pICtcblx0XHQocmdiYVszXSA8IDFcblx0XHRcdD8gKGhleERvdWJsZShNYXRoLnJvdW5kKHJnYmFbM10gKiAyNTUpKSlcblx0XHRcdDogJycpXG5cdCk7XG59O1xuXG5jcy50by5yZ2IgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnKSdcblx0XHQ6ICdyZ2JhKCcgKyBNYXRoLnJvdW5kKHJnYmFbMF0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsxXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzJdKSArICcsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8ucmdiLnBlcmNlbnQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdIC8gMjU1ICogMTAwKTtcblx0dmFyIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0gLyAyNTUgKiAxMDApO1xuXHR2YXIgYiA9IE1hdGgucm91bmQocmdiYVsyXSAvIDI1NSAqIDEwMCk7XG5cblx0cmV0dXJuIHJnYmEubGVuZ3RoIDwgNCB8fCByZ2JhWzNdID09PSAxXG5cdFx0PyAncmdiKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUpJ1xuXHRcdDogJ3JnYmEoJyArIHIgKyAnJSwgJyArIGcgKyAnJSwgJyArIGIgKyAnJSwgJyArIHJnYmFbM10gKyAnKSc7XG59O1xuXG5jcy50by5oc2wgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBoc2xhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXHRyZXR1cm4gaHNsYS5sZW5ndGggPCA0IHx8IGhzbGFbM10gPT09IDFcblx0XHQ/ICdoc2woJyArIGhzbGFbMF0gKyAnLCAnICsgaHNsYVsxXSArICclLCAnICsgaHNsYVsyXSArICclKSdcblx0XHQ6ICdoc2xhKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSwgJyArIGhzbGFbM10gKyAnKSc7XG59O1xuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuY3MudG8uaHdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgYSA9ICcnO1xuXHRpZiAoaHdiYS5sZW5ndGggPj0gNCAmJiBod2JhWzNdICE9PSAxKSB7XG5cdFx0YSA9ICcsICcgKyBod2JhWzNdO1xuXHR9XG5cblx0cmV0dXJuICdod2IoJyArIGh3YmFbMF0gKyAnLCAnICsgaHdiYVsxXSArICclLCAnICsgaHdiYVsyXSArICclJyArIGEgKyAnKSc7XG59O1xuXG5jcy50by5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gcmV2ZXJzZU5hbWVzW3JnYi5zbGljZSgwLCAzKV07XG59O1xuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBjbGFtcChudW0sIG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIG51bSksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGhleERvdWJsZShudW0pIHtcblx0dmFyIHN0ciA9IG51bS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuIChzdHIubGVuZ3RoIDwgMikgPyAnMCcgKyBzdHIgOiBzdHI7XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgY29sb3JTdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb2xvci1zdHJpbmcgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvaW5kZXguanNcIik7XG52YXIgY29udmVydCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yLWNvbnZlcnQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzXCIpO1xuXG52YXIgX3NsaWNlID0gW10uc2xpY2U7XG5cbnZhciBza2lwcGVkTW9kZWxzID0gW1xuXHQvLyB0byBiZSBob25lc3QsIEkgZG9uJ3QgcmVhbGx5IGZlZWwgbGlrZSBrZXl3b3JkIGJlbG9uZ3MgaW4gY29sb3IgY29udmVydCwgYnV0IGVoLlxuXHQna2V5d29yZCcsXG5cblx0Ly8gZ3JheSBjb25mbGljdHMgd2l0aCBzb21lIG1ldGhvZCBuYW1lcywgYW5kIGhhcyBpdHMgb3duIG1ldGhvZCBkZWZpbmVkLlxuXHQnZ3JheScsXG5cblx0Ly8gc2hvdWxkbid0IHJlYWxseSBiZSBpbiBjb2xvci1jb252ZXJ0IGVpdGhlci4uLlxuXHQnaGV4J1xuXTtcblxudmFyIGhhc2hlZE1vZGVsS2V5cyA9IHt9O1xuT2JqZWN0LmtleXMoY29udmVydCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcblx0aGFzaGVkTW9kZWxLZXlzW19zbGljZS5jYWxsKGNvbnZlcnRbbW9kZWxdLmxhYmVscykuc29ydCgpLmpvaW4oJycpXSA9IG1vZGVsO1xufSk7XG5cbnZhciBsaW1pdGVycyA9IHt9O1xuXG5mdW5jdGlvbiBDb2xvcihvYmosIG1vZGVsKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb2xvcikpIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKG9iaiwgbW9kZWwpO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmIG1vZGVsIGluIHNraXBwZWRNb2RlbHMpIHtcblx0XHRtb2RlbCA9IG51bGw7XG5cdH1cblxuXHRpZiAobW9kZWwgJiYgIShtb2RlbCBpbiBjb252ZXJ0KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlbDogJyArIG1vZGVsKTtcblx0fVxuXG5cdHZhciBpO1xuXHR2YXIgY2hhbm5lbHM7XG5cblx0aWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbMCwgMCwgMF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG9iai5tb2RlbDtcblx0XHR0aGlzLmNvbG9yID0gb2JqLmNvbG9yLnNsaWNlKCk7XG5cdFx0dGhpcy52YWxwaGEgPSBvYmoudmFscGhhO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGNvbG9yU3RyaW5nLmdldChvYmopO1xuXHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nOiAnICsgb2JqKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gcmVzdWx0Lm1vZGVsO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR0aGlzLmNvbG9yID0gcmVzdWx0LnZhbHVlLnNsaWNlKDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiByZXN1bHQudmFsdWVbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IHJlc3VsdC52YWx1ZVtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKG9iai5sZW5ndGgpIHtcblx0XHR0aGlzLm1vZGVsID0gbW9kZWwgfHwgJ3JnYic7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBuZXdBcnIgPSBfc2xpY2UuY2FsbChvYmosIDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KG5ld0FyciwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9ialtjaGFubmVsc10gPT09ICdudW1iZXInID8gb2JqW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHtcblx0XHQvLyB0aGlzIGlzIGFsd2F5cyBSR0IgLSBjYW4gYmUgY29udmVydGVkIGxhdGVyIG9uLlxuXHRcdG9iaiAmPSAweEZGRkZGRjtcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFtcblx0XHRcdChvYmogPj4gMTYpICYgMHhGRixcblx0XHRcdChvYmogPj4gOCkgJiAweEZGLFxuXHRcdFx0b2JqICYgMHhGRlxuXHRcdF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMudmFscGhhID0gMTtcblxuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblx0XHRpZiAoJ2FscGhhJyBpbiBvYmopIHtcblx0XHRcdGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZignYWxwaGEnKSwgMSk7XG5cdFx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmouYWxwaGEgPT09ICdudW1iZXInID8gb2JqLmFscGhhIDogMDtcblx0XHR9XG5cblx0XHR2YXIgaGFzaGVkS2V5cyA9IGtleXMuc29ydCgpLmpvaW4oJycpO1xuXHRcdGlmICghKGhhc2hlZEtleXMgaW4gaGFzaGVkTW9kZWxLZXlzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gaGFzaGVkTW9kZWxLZXlzW2hhc2hlZEtleXNdO1xuXG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXHRcdHZhciBjb2xvciA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbG9yLnB1c2gob2JqW2xhYmVsc1tpXV0pO1xuXHRcdH1cblxuXHRcdHRoaXMuY29sb3IgPSB6ZXJvQXJyYXkoY29sb3IpO1xuXHR9XG5cblx0Ly8gcGVyZm9ybSBsaW1pdGF0aW9ucyAoY2xhbXBpbmcsIGV0Yy4pXG5cdGlmIChsaW1pdGVyc1t0aGlzLm1vZGVsXSkge1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0dmFyIGxpbWl0ID0gbGltaXRlcnNbdGhpcy5tb2RlbF1baV07XG5cdFx0XHRpZiAobGltaXQpIHtcblx0XHRcdFx0dGhpcy5jb2xvcltpXSA9IGxpbWl0KHRoaXMuY29sb3JbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRoaXMudmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdGhpcy52YWxwaGEpKTtcblxuXHRpZiAoT2JqZWN0LmZyZWV6ZSkge1xuXHRcdE9iamVjdC5mcmVlemUodGhpcyk7XG5cdH1cbn1cblxuQ29sb3IucHJvdG90eXBlID0ge1xuXHR0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnN0cmluZygpO1xuXHR9LFxuXG5cdHRvSlNPTjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzW3RoaXMubW9kZWxdKCk7XG5cdH0sXG5cblx0c3RyaW5nOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLm1vZGVsIGluIGNvbG9yU3RyaW5nLnRvID8gdGhpcyA6IHRoaXMucmdiKCk7XG5cdFx0c2VsZiA9IHNlbGYucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG9bc2VsZi5tb2RlbF0oYXJncyk7XG5cdH0sXG5cblx0cGVyY2VudFN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5yZ2IoKS5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdHZhciBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogc2VsZi5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5yZ2IucGVyY2VudChhcmdzKTtcblx0fSxcblxuXHRhcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHBoYSA9PT0gMSA/IHRoaXMuY29sb3Iuc2xpY2UoKSA6IHRoaXMuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0fSxcblxuXHRvYmplY3Q6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbGFiZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5sYWJlbHM7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHJlc3VsdFtsYWJlbHNbaV1dID0gdGhpcy5jb2xvcltpXTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJlc3VsdC5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cblx0dW5pdEFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmdiWzBdIC89IDI1NTtcblx0XHRyZ2JbMV0gLz0gMjU1O1xuXHRcdHJnYlsyXSAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5wdXNoKHRoaXMudmFscGhhKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHVuaXRPYmplY3Q6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5vYmplY3QoKTtcblx0XHRyZ2IuciAvPSAyNTU7XG5cdFx0cmdiLmcgLz0gMjU1O1xuXHRcdHJnYi5iIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRyb3VuZDogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHBsYWNlcyA9IE1hdGgubWF4KHBsYWNlcyB8fCAwLCAwKTtcblx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuY29sb3IubWFwKHJvdW5kVG9QbGFjZShwbGFjZXMpKS5jb25jYXQodGhpcy52YWxwaGEpLCB0aGlzLm1vZGVsKTtcblx0fSxcblxuXHRhbHBoYTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuY29sb3IuY29uY2F0KE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbCkpKSwgdGhpcy5tb2RlbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudmFscGhhO1xuXHR9LFxuXG5cdC8vIHJnYlxuXHRyZWQ6IGdldHNldCgncmdiJywgMCwgbWF4Zm4oMjU1KSksXG5cdGdyZWVuOiBnZXRzZXQoJ3JnYicsIDEsIG1heGZuKDI1NSkpLFxuXHRibHVlOiBnZXRzZXQoJ3JnYicsIDIsIG1heGZuKDI1NSkpLFxuXG5cdGh1ZTogZ2V0c2V0KFsnaHNsJywgJ2hzdicsICdoc2wnLCAnaHdiJywgJ2hjZyddLCAwLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiAoKHZhbCAlIDM2MCkgKyAzNjApICUgMzYwOyB9KSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBicmFjZS1zdHlsZVxuXG5cdHNhdHVyYXRpb25sOiBnZXRzZXQoJ2hzbCcsIDEsIG1heGZuKDEwMCkpLFxuXHRsaWdodG5lc3M6IGdldHNldCgnaHNsJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0c2F0dXJhdGlvbnY6IGdldHNldCgnaHN2JywgMSwgbWF4Zm4oMTAwKSksXG5cdHZhbHVlOiBnZXRzZXQoJ2hzdicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGNocm9tYTogZ2V0c2V0KCdoY2cnLCAxLCBtYXhmbigxMDApKSxcblx0Z3JheTogZ2V0c2V0KCdoY2cnLCAyLCBtYXhmbigxMDApKSxcblxuXHR3aGl0ZTogZ2V0c2V0KCdod2InLCAxLCBtYXhmbigxMDApKSxcblx0d2JsYWNrOiBnZXRzZXQoJ2h3YicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGN5YW46IGdldHNldCgnY215aycsIDAsIG1heGZuKDEwMCkpLFxuXHRtYWdlbnRhOiBnZXRzZXQoJ2NteWsnLCAxLCBtYXhmbigxMDApKSxcblx0eWVsbG93OiBnZXRzZXQoJ2NteWsnLCAyLCBtYXhmbigxMDApKSxcblx0YmxhY2s6IGdldHNldCgnY215aycsIDMsIG1heGZuKDEwMCkpLFxuXG5cdHg6IGdldHNldCgneHl6JywgMCwgbWF4Zm4oMTAwKSksXG5cdHk6IGdldHNldCgneHl6JywgMSwgbWF4Zm4oMTAwKSksXG5cdHo6IGdldHNldCgneHl6JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0bDogZ2V0c2V0KCdsYWInLCAwLCBtYXhmbigxMDApKSxcblx0YTogZ2V0c2V0KCdsYWInLCAxKSxcblx0YjogZ2V0c2V0KCdsYWInLCAyKSxcblxuXHRrZXl3b3JkOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udmVydFt0aGlzLm1vZGVsXS5rZXl3b3JkKHRoaXMuY29sb3IpO1xuXHR9LFxuXG5cdGhleDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLmhleCh0aGlzLnJnYigpLnJvdW5kKCkuY29sb3IpO1xuXHR9LFxuXG5cdHJnYk51bWJlcjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJldHVybiAoKHJnYlswXSAmIDB4RkYpIDw8IDE2KSB8ICgocmdiWzFdICYgMHhGRikgPDwgOCkgfCAocmdiWzJdICYgMHhGRik7XG5cdH0sXG5cblx0bHVtaW5vc2l0eTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblxuXHRcdHZhciBsdW0gPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoYW4gPSByZ2JbaV0gLyAyNTU7XG5cdFx0XHRsdW1baV0gPSAoY2hhbiA8PSAwLjAzOTI4KSA/IGNoYW4gLyAxMi45MiA6IE1hdGgucG93KCgoY2hhbiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMC4yMTI2ICogbHVtWzBdICsgMC43MTUyICogbHVtWzFdICsgMC4wNzIyICogbHVtWzJdO1xuXHR9LFxuXG5cdGNvbnRyYXN0OiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZlxuXHRcdHZhciBsdW0xID0gdGhpcy5sdW1pbm9zaXR5KCk7XG5cdFx0dmFyIGx1bTIgPSBjb2xvcjIubHVtaW5vc2l0eSgpO1xuXG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChsdW0yICsgMC4wNSkgLyAobHVtMSArIDAuMDUpO1xuXHR9LFxuXG5cdGxldmVsOiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0dmFyIGNvbnRyYXN0UmF0aW8gPSB0aGlzLmNvbnRyYXN0KGNvbG9yMik7XG5cdFx0aWYgKGNvbnRyYXN0UmF0aW8gPj0gNy4xKSB7XG5cdFx0XHRyZXR1cm4gJ0FBQSc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChjb250cmFzdFJhdGlvID49IDQuNSkgPyAnQUEnIDogJyc7XG5cdH0sXG5cblx0aXNEYXJrOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gWUlRIGVxdWF0aW9uIGZyb20gaHR0cDovLzI0d2F5cy5vcmcvMjAxMC9jYWxjdWxhdGluZy1jb2xvci1jb250cmFzdFxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHZhciB5aXEgPSAocmdiWzBdICogMjk5ICsgcmdiWzFdICogNTg3ICsgcmdiWzJdICogMTE0KSAvIDEwMDA7XG5cdFx0cmV0dXJuIHlpcSA8IDEyODtcblx0fSxcblxuXHRpc0xpZ2h0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmlzRGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2IuY29sb3JbaV0gPSAyNTUgLSByZ2IuY29sb3JbaV07XG5cdFx0fVxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0bGlnaHRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdICs9IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gLT0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdICs9IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGVzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdIC09IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMV0gKz0gaHdiLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRibGFja2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMl0gKz0gaHdiLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRncmF5c2NhbGU6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYXlzY2FsZSNDb252ZXJ0aW5nX2NvbG9yX3RvX2dyYXlzY2FsZVxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHZhciB2YWwgPSByZ2JbMF0gKiAwLjMgKyByZ2JbMV0gKiAwLjU5ICsgcmdiWzJdICogMC4xMTtcblx0XHRyZXR1cm4gQ29sb3IucmdiKHZhbCwgdmFsLCB2YWwpO1xuXHR9LFxuXG5cdGZhZGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhIC0gKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRvcGFxdWVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSArICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0cm90YXRlOiBmdW5jdGlvbiAoZGVncmVlcykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdHZhciBodWUgPSBoc2wuY29sb3JbMF07XG5cdFx0aHVlID0gKGh1ZSArIGRlZ3JlZXMpICUgMzYwO1xuXHRcdGh1ZSA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG5cdFx0aHNsLmNvbG9yWzBdID0gaHVlO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0bWl4OiBmdW5jdGlvbiAobWl4aW5Db2xvciwgd2VpZ2h0KSB7XG5cdFx0Ly8gcG9ydGVkIGZyb20gc2FzcyBpbXBsZW1lbnRhdGlvbiBpbiBDXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9ibG9iLzBlNmI0YTI4NTAwOTIzNTZhYTNlY2UwN2M2YjI0OWYwMjIxY2FjZWQvZnVuY3Rpb25zLmNwcCNMMjA5XG5cdFx0dmFyIGNvbG9yMSA9IG1peGluQ29sb3IucmdiKCk7XG5cdFx0dmFyIGNvbG9yMiA9IHRoaXMucmdiKCk7XG5cdFx0dmFyIHAgPSB3ZWlnaHQgPT09IHVuZGVmaW5lZCA/IDAuNSA6IHdlaWdodDtcblxuXHRcdHZhciB3ID0gMiAqIHAgLSAxO1xuXHRcdHZhciBhID0gY29sb3IxLmFscGhhKCkgLSBjb2xvcjIuYWxwaGEoKTtcblxuXHRcdHZhciB3MSA9ICgoKHcgKiBhID09PSAtMSkgPyB3IDogKHcgKyBhKSAvICgxICsgdyAqIGEpKSArIDEpIC8gMi4wO1xuXHRcdHZhciB3MiA9IDEgLSB3MTtcblxuXHRcdHJldHVybiBDb2xvci5yZ2IoXG5cdFx0XHRcdHcxICogY29sb3IxLnJlZCgpICsgdzIgKiBjb2xvcjIucmVkKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmdyZWVuKCkgKyB3MiAqIGNvbG9yMi5ncmVlbigpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ibHVlKCkgKyB3MiAqIGNvbG9yMi5ibHVlKCksXG5cdFx0XHRcdGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH1cbn07XG5cbi8vIG1vZGVsIGNvbnZlcnNpb24gbWV0aG9kcyBhbmQgc3RhdGljIGNvbnN0cnVjdG9yc1xuT2JqZWN0LmtleXMoY29udmVydCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcblx0aWYgKHNraXBwZWRNb2RlbHMuaW5kZXhPZihtb2RlbCkgIT09IC0xKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cblx0Ly8gY29udmVyc2lvbiBtZXRob2RzXG5cdENvbG9yLnByb3RvdHlwZVttb2RlbF0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMubW9kZWwgPT09IG1vZGVsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKGFyZ3VtZW50cywgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBuZXdBbHBoYSA9IHR5cGVvZiBhcmd1bWVudHNbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IGNoYW5uZWxzIDogdGhpcy52YWxwaGE7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihhc3NlcnRBcnJheShjb252ZXJ0W3RoaXMubW9kZWxdW21vZGVsXS5yYXcodGhpcy5jb2xvcikpLmNvbmNhdChuZXdBbHBoYSksIG1vZGVsKTtcblx0fTtcblxuXHQvLyAnc3RhdGljJyBjb25zdHJ1Y3Rpb24gbWV0aG9kc1xuXHRDb2xvclttb2RlbF0gPSBmdW5jdGlvbiAoY29sb3IpIHtcblx0XHRpZiAodHlwZW9mIGNvbG9yID09PSAnbnVtYmVyJykge1xuXHRcdFx0Y29sb3IgPSB6ZXJvQXJyYXkoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSwgY2hhbm5lbHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IENvbG9yKGNvbG9yLCBtb2RlbCk7XG5cdH07XG59KTtcblxuZnVuY3Rpb24gcm91bmRUbyhudW0sIHBsYWNlcykge1xuXHRyZXR1cm4gTnVtYmVyKG51bS50b0ZpeGVkKHBsYWNlcykpO1xufVxuXG5mdW5jdGlvbiByb3VuZFRvUGxhY2UocGxhY2VzKSB7XG5cdHJldHVybiBmdW5jdGlvbiAobnVtKSB7XG5cdFx0cmV0dXJuIHJvdW5kVG8obnVtLCBwbGFjZXMpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBnZXRzZXQobW9kZWwsIGNoYW5uZWwsIG1vZGlmaWVyKSB7XG5cdG1vZGVsID0gQXJyYXkuaXNBcnJheShtb2RlbCkgPyBtb2RlbCA6IFttb2RlbF07XG5cblx0bW9kZWwuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuXHRcdChsaW1pdGVyc1ttXSB8fCAobGltaXRlcnNbbV0gPSBbXSkpW2NoYW5uZWxdID0gbW9kaWZpZXI7XG5cdH0pO1xuXG5cdG1vZGVsID0gbW9kZWxbMF07XG5cblx0cmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcblx0XHR2YXIgcmVzdWx0O1xuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdGlmIChtb2RpZmllcikge1xuXHRcdFx0XHR2YWwgPSBtb2RpZmllcih2YWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHQgPSB0aGlzW21vZGVsXSgpO1xuXHRcdFx0cmVzdWx0LmNvbG9yW2NoYW5uZWxdID0gdmFsO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRyZXN1bHQgPSB0aGlzW21vZGVsXSgpLmNvbG9yW2NoYW5uZWxdO1xuXHRcdGlmIChtb2RpZmllcikge1xuXHRcdFx0cmVzdWx0ID0gbW9kaWZpZXIocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xufVxuXG5mdW5jdGlvbiBtYXhmbihtYXgpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICh2KSB7XG5cdFx0cmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKG1heCwgdikpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBhc3NlcnRBcnJheSh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdO1xufVxuXG5mdW5jdGlvbiB6ZXJvQXJyYXkoYXJyLCBsZW5ndGgpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdGlmICh0eXBlb2YgYXJyW2ldICE9PSAnbnVtYmVyJykge1xuXHRcdFx0YXJyW2ldID0gMDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWFycmF5aXNoL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2lzLWFycmF5aXNoL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcnJheWlzaChvYmopIHtcblx0aWYgKCFvYmogfHwgdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShvYmopIHx8XG5cdFx0KG9iai5sZW5ndGggPj0gMCAmJiAob2JqLnNwbGljZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG5cdFx0XHQoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIChvYmoubGVuZ3RoIC0gMSkpICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3RyaW5nJykpKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGlzQXJyYXlpc2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBpcy1hcnJheWlzaCAqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWFycmF5aXNoL2luZGV4LmpzXCIpO1xuXG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIHN3aXp6bGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN3aXp6bGUoYXJncykge1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIGFyZyA9IGFyZ3NbaV07XG5cblx0XHRpZiAoaXNBcnJheWlzaChhcmcpKSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS9qYXZhc2NyaXB0LWFycmF5LWNvbmNhdC12cy1wdXNoLzk4XG5cdFx0XHRyZXN1bHRzID0gY29uY2F0LmNhbGwocmVzdWx0cywgc2xpY2UuY2FsbChhcmcpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0cy5wdXNoKGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5zd2l6emxlLndyYXAgPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZm4oc3dpenpsZShhcmd1bWVudHMpKTtcblx0fTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIER5bmFtaWNIZWF0TGF5ZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9tYXJrZXIvTWFya2Vyc0xheWVyICovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50c1wiKTtcblxuY2xhc3MgRHluYW1pY0hlYXRMYXllciB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkeW5hbWljRGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkeW5hbWljRGF0YUxpc3QpIHx8IGR5bmFtaWNEYXRhTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZGF0YUxpc3Qg5b+F6aG75piv6Z2e56m65pWw57uEYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuZHluYW1pY0RhdGFMaXN0ID0gZHluYW1pY0RhdGFMaXN0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xuICAgIH1cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gICAgICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hdXRvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1BhdXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIOaSreaUvuWujOavlSAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAgPj0gdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXArKztcbiAgICAgICAgICAgICAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLmludGVydmFsKTtcbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgfVxuICAgIHByZXYoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAtLTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9XG4gICAgICAgICAgICAodGhpcy5jdXJyZW50U3RlcCArIHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkgJVxuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICB9XG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gdGhpcy5jdXJyZW50U3RlcCAlIHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICB9XG4gICAgZ290b1N0ZXAoc3RlcCkge1xuICAgICAgICBpZiAoc3RlcCA8IDAgfHwgc3RlcCA+PSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZ290b1N0ZXAoJHtzdGVwfSk6IHN0ZXAgaXMgb3V0IG9mIGluZGV4IGApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIuc2V0RGF0YSh0aGlzLmR5bmFtaWNEYXRhTGlzdFtzdGVwXSk7XG4gICAgICAgIHRoaXMubGF5ZXIuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pbml0TGF5ZXIoKTtcbiAgICAgICAgdGhpcy5sYXllci5kcmF3KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubGF5ZXIuZml0Qm91bmRzKCk7XG4gICAgfVxuICAgIGluaXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG86IGZhbHNlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDEwMDAsXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRMYXllcigpIHtcbiAgICAgICAgY29uc3QgbWFya2Vyc0xheWVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJlbmRlclR5cGU6ICdoZWF0JyxcbiAgICAgICAgICAgIGhlYXRPcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGF5ZXIgPSBuZXcgX21hcmtlcl9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0odGhpcy5tYXAsIHRoaXMuZHluYW1pY0RhdGFMaXN0WzBdLCBtYXJrZXJzTGF5ZXJPcHRpb25zLCB0aGlzLmNoYW5uZWxGdW5jKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXI7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQsIE1hcmtlciwgTWFya2Vyc0xheWVyLCBNYXJrZXJzQnVmZmVyTGF5ZXIsIFBvbHlsaW5lLCBQb2x5bGluZXNMYXllciwgUG9seWxpbmVzQnVmZmVyTGF5ZXIsIFBvbHlnb24sIFBvbHlnb25zTGF5ZXIsIEdyaWRzTGF5ZXIsIER5bmFtaWNIZWF0TGF5ZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21hcmtlcl9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWFya2VyL01hcmtlciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNYXJrZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbWFya2VyX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWFya2VyX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tYXJrZXIvTWFya2Vyc0xheWVyICovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk1hcmtlcnNMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tYXJrZXJfTWFya2Vyc0J1ZmZlckxheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTWFya2Vyc0J1ZmZlckxheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX21hcmtlcl9NYXJrZXJzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlsaW5lX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlsaW5lL1BvbHlsaW5lICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5bGluZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5bGluZV9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWxpbmVfUG9seWxpbmVzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIgKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlsaW5lc0xheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlsaW5lX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5bGluZV9Qb2x5bGluZXNCdWZmZXJMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllciAqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0J1ZmZlckxheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUG9seWxpbmVzQnVmZmVyTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWxpbmVfUG9seWxpbmVzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5Z29uL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5Z29uXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlnb24vUG9seWdvbnNMYXllciAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlnb25zTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWdvbi9Hcmlkc0xheWVyICovIFwiLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiR3JpZHNMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIgKi8gXCIuL3NyYy9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJEeW5hbWljSGVhdExheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh7XG4gICAgTWFya2VyOiBfbWFya2VyX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSxcbiAgICBNYXJrZXJzTGF5ZXI6IF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLFxuICAgIE1hcmtlcnNCdWZmZXJMYXllcjogX21hcmtlcl9NYXJrZXJzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWxpbmU6IF9wb2x5bGluZV9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5bGluZXNMYXllcjogX3BvbHlsaW5lX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19bXCJkZWZhdWx0XCJdLFxuICAgIFBvbHlsaW5lc0J1ZmZlckxheWVyOiBfcG9seWxpbmVfUG9seWxpbmVzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWdvbjogX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5Z29uc0xheWVyOiBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19bXCJkZWZhdWx0XCJdLFxuICAgIEdyaWRzTGF5ZXI6IF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX1tcImRlZmF1bHRcIl0sXG4gICAgRHluYW1pY0hlYXRMYXllcjogX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fW1wiZGVmYXVsdFwiXSxcbn0pO1xuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWFya2VyL01hcmtlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21hcmtlci9NYXJrZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBNYXJrZXI7IH0pO1xuY2xhc3MgTWFya2VyIGV4dGVuZHMgTC5NYXJrZXIge1xuICAgIGNvbnN0cnVjdG9yKGxhdGxuZywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmcsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fX2RhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGE7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTWFya2Vyc0J1ZmZlckxheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01hcmtlcnNMYXllciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHNcIik7XG5cbmNsYXNzIE1hcmtlcnNCdWZmZXJMYXllciBleHRlbmRzIF9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ21hcmtlckJ1ZmZlcic7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRCdWZmZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgcmFkaXVzOiAxMDAwLFxuICAgICAgICAgICAgc3Ryb2tlOiB0cnVlLFxuICAgICAgICAgICAgd2VpZ2h0OiAxLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgeyBidWZmZXJPcHRpb25zOiBkZWZhdWx0QnVmZmVyT3B0aW9ucyB9LCBvcHRpb25zKTtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMuY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yO1xuICAgICAgICB0aGlzLmluaXRNYXJrZXJzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmJ1ZmZlckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hcmtlckxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpO1xuICAgICAgICB0aGlzLmJ1ZmZlckxheWVyID0gdGhpcy5jb25maWdCdWZmZXJMYXllcigpO1xuICAgICAgICB0aGlzLmxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5idWZmZXJMYXllcik7XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWFya2Vycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2LmV4dGVuZChjdXJyLmdldExhdExuZygpLnRvQm91bmRzKHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLnJhZGl1cykpO1xuICAgICAgICB9LCB0aGlzLm1hcmtlcnNbMF0uZ2V0TGF0TG5nKCkudG9Cb3VuZHModGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMucmFkaXVzKSk7XG4gICAgfVxuICAgIGNvbmZpZ0J1ZmZlckxheWVyKCkge1xuICAgICAgICBjb25zdCBncm91cExheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNpcmNsZUxheWVyID0gTC5jaXJjbGUobWFya2VyLmdldExhdExuZygpLCB0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJ1ZmZlclRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5idWZmZXJUb29sdGlwQXR0cl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwTGF5ZXIuYWRkTGF5ZXIoY2lyY2xlTGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyb3VwTGF5ZXI7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTWFya2Vyc0xheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL3V0aWxzL2luZGV4ICovIFwiLi9zcmMvdXRpbHMvaW5kZXgudHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NYXJrZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2VyLnRzXCIpO1xuXG5cbmNsYXNzIE1hcmtlcnNMYXllciB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGFMaXN0KSB8fCBkYXRhTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZGF0YUxpc3Qg5b+F6aG75piv6Z2e56m65pWw57uEYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgREVGQVVMVF9DT0xPUiA9ICcjMzM4OEZGJztcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJlbmRlclR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICByZW5kZXJQb2ludENvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICAgICAgICBpY29uVHlwZTogJ3VuaWNvZGUnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyMCwgMjBdLFxuICAgICAgICAgICAgaWNvbkNsYXNzOiAnaWNvbmZvbnQnLFxuICAgICAgICAgICAgaWNvbkNvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzEwLCAyMF0sXG4gICAgICAgICAgICBwb3B1cDogdHJ1ZSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICAgICAgc2VnbWVudGVkQ29sb3JzOiBbREVGQVVMVF9DT0xPUl0sXG4gICAgICAgICAgICBjbGFzc2lmaWVkQ29sb3JzOiBbREVGQVVMVF9DT0xPUl0sXG4gICAgICAgICAgICBpc0NsdXN0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgcmVuZGVyQ2x1c3RlckNvbG9yVHlwZTogJ3NtYXJ0JyxcbiAgICAgICAgICAgIGJ1YmJsZVN0cm9rZVdpZHRoOiAxLFxuICAgICAgICAgICAgYnViYmxlQ29sb3JzOiBbREVGQVVMVF9DT0xPUl0sXG4gICAgICAgICAgICBidWJibGVTdHJva2VPcGFjaXR5OiAwLjIsXG4gICAgICAgICAgICBidWJibGVGaWxsT3BhY2l0eTogMC41LFxuICAgICAgICAgICAgYnViYmxlU2l6ZXM6IFsxMF0sXG4gICAgICAgICAgICBoZWF0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG1heDogMSxcbiAgICAgICAgICAgICAgICBtaW5PcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkTWFya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlciA9IG51bGw7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLm1hcmtlckxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWF0TGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNsdXN0ZXJMYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuYnViYmxlTGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxO1xuICAgICAgICB0aGlzLmJ1YmJsZWRTaXplTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuYnViYmxlZFNpemVTdGVwID0gMTtcbiAgICAgICAgdGhpcy5jbGFzc2lmaWVkQ29sb3JNYXAgPSB7fTtcbiAgICAgICAgdGhpcy5idWJibGVkQ29sb3JNYXAgPSB7fTtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdE1hcmtlcnMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5LyY5YWI5Yik5patIGlzQ2x1c3RlclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzQ2x1c3RlciAmJiB0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50Jykge1xuICAgICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQ2x1c3RlckxheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncG9pbnQnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ01hcmtlckxheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdjbHVzdGVyJzoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2hlYXQnOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0hlYXRMYXllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnYnViYmxlJzoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdCdWJibGVMYXllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclR5cGUg5LiN5pSv5oyBXCIke3RoaXMub3B0aW9ucy5yZW5kZXJUeXBlfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhO1xuICAgIH1cbiAgICBzZXRPcHRpb25zKG9wdGlvbnMsIHJlZHJhdyA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKHJlZHJhdykge1xuICAgICAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog6I635Y+W5b2T5YmNIG9wdGlvbnMgKi9cbiAgICBnZXRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pO1xuICAgIH1cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZXJzLm1hcCgobWFya2VyKSA9PiBbbWFya2VyLmdldExhdExuZygpLmxhdCwgbWFya2VyLmdldExhdExuZygpLmxuZ10pO1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFwLm9mZignem9vbXN0YXJ0JywgdGhpcy5fem9vbVN0YXJ0Q2IsIHRoaXMpO1xuICAgICAgICB0aGlzLm1hcC5vZmYoJ3pvb21lbmQnLCB0aGlzLl96b29tRW5kQ2IsIHRoaXMpO1xuICAgIH1cbiAgICB0b2dnbGVWaXNpYmxlKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmljb25Db2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICBjaGFuZ2VJY29uKGljb25Vbmljb2RlKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pY29uVW5pY29kZSA9IGljb25Vbmljb2RlO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICBwaXRjaChpZCkge1xuICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAobWFya2VyLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENsYXNzaWZpZWRDb2xvclJlZnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzaWZpZWRDb2xvclJlZnM7XG4gICAgfVxuICAgIGdldEJ1YmJsZWRDb2xvclJlZnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1YmJsZWRDb2xvclJlZnM7XG4gICAgfVxuICAgIF96b29tU3RhcnRDYigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbWFya2VyJykge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzQ2x1c3Rlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnYnViYmxlJzoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5idWJibGVMYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5idWJibGVMYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXJCdWZmZXInKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfem9vbUVuZENiKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncG9pbnQnOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdidWJibGUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJ1YmJsZUxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmJ1YmJsZUxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlckJ1ZmZlcicpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDmuLLmn5PkuLrmlaPngrnlm74gKi9cbiAgICBjb25maWdNYXJrZXJMYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFya2VyTGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzSWNvbkxheWVyID0gTC5jYW52YXNJY29uTGF5ZXIoe30pLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgICAgLy8g5re75Yqg54K55Ye75LqL5Lu2XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkNsaWNrTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOa3u+WKoOWPs+mUruS6i+S7tlxuICAgICAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25Db250ZXh0bWVudUxpc3RlbmVyKChldmVudCwgW3sgZGF0YTogbWFya2VyIH1dKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxGdW5jKCdjb250ZXh0bWVudScsIHtcbiAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICBtYXJrZXIsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOa3u+WKoCBob3ZlciDkuovku7ZcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwKSB7XG4gICAgICAgICAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25Ib3Zlckxpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgICAgICAgICAgICAvLyDkuYvliY3mnIkgaG92ZXIg55qE5YWz6ZetIHRvb2x0aXBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ob3ZlcmVkTWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5jbG9zZVRvb2x0aXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbWFya2VyO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0VG9vbHRpcCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOW3sue7j+iuvue9riB0b29sdGlwIOebtOaOpeWxleekuiB0b29sdGlwXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5vcGVuVG9vbHRpcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5ZCm5YiZ57uR5a6aIHRvb2x0aXAg5bm25bGV56S6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5iaW5kVG9vbHRpcCgnJyArIHRoaXMuaG92ZXJlZE1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYW52YXNJY29uTGF5ZXIuYWRkTWFya2Vycyh0aGlzLm1hcmtlcnMpO1xuICAgICAgICAvLyDop6PlhrPliJ3mrKHmuLLmn5PkuI3lh7rlm77moIfpl67pophcbiAgICAgICAgdGhpcy5tYXAucGFuVG8odGhpcy5tYXAuZ2V0Q2VudGVyKCkpO1xuICAgICAgICB0aGlzLm1hcmtlckxheWVyID0gY2FudmFzSWNvbkxheWVyO1xuICAgICAgICByZXR1cm4gdGhpcy5tYXJrZXJMYXllcjtcbiAgICB9XG4gICAgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YSkge1xuICAgICAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl07XG4gICAgfVxuICAgIGluaXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wib3B0aW9uc01lcmdlXCJdKSh0aGlzLmRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0TWFya2VycygpIHtcbiAgICAgICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKCk7XG4gICAgICAgIHRoaXMuY2FjaGVDbGFzc2lmeVBhcmFtcygpO1xuICAgICAgICB0aGlzLmNhY2hlQnViYmxlUGFyYW1zKCk7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdO1xuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0oW2xheWVyLmdldExhdExuZygpLmxhdCwgbGF5ZXIuZ2V0TGF0TG5nKCkubG5nXSwge1xuICAgICAgICAgICAgICAgIGljb246IHRoaXMuZ2V0TWFya2VySWNvbihkYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgICAgICAgbWFya2VyLnNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5tYXAub24oJ3pvb21zdGFydCcsIHRoaXMuX3pvb21TdGFydENiLCB0aGlzKTtcbiAgICAgICAgdGhpcy5tYXAub24oJ3pvb21lbmQnLCB0aGlzLl96b29tRW5kQ2IsIHRoaXMpO1xuICAgIH1cbiAgICAvLyDlpITnkIYgbWFya2VyIOeCueWHu+S6i+S7tlxuICAgIG1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIsIGZpdEJvdW5kcykge1xuICAgICAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBtYXJrZXI7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXApIHtcbiAgICAgICAgICAgIC8vIOWIoOmZpOWJjeS4gOS4quaUvuWkp+Wbvuagh1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZUZyb20odGhpcy5tYXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g55Sf5oiQ5b2T5YmN5pS+5aSn5Zu+5qCHXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbmV3IF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0obWFya2VyLmdldExhdExuZygpLCB7XG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRMYXJnZXJNYXJrZXJJY29uKG1hcmtlci5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgICAgICAgIC8vIOa3u+WKoOaUvuWkp+Wbvuagh+eahCBwb3B1cFxuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlclxuICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpXG4gICAgICAgICAgICAgICAgLm9wZW5Qb3B1cCgpO1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbWFya2VyLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWRNYXJrZXIuZ2V0TGF0TG5nKCkpO1xuICAgICAgICBpZiAoZml0Qm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMobWFya2VyLmdldExhdExuZygpLnRvQm91bmRzKDEwKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stbWFya2VyJywgbWFya2VyKTtcbiAgICB9XG4gICAgY29uZmlnQ2x1c3RlckxheWVyKCkge1xuICAgICAgICAvLyDlsZXnpLrogZrlkIjlm77lsYJcbiAgICAgICAgaWYgKHRoaXMuY2x1c3RlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmNsdXN0ZXJMYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsdXN0ZXJMYXllciA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKHtcbiAgICAgICAgICAgIGljb25DcmVhdGVGdW5jdGlvbjogdGhpcy5pY29uQ3JlYXRlRnVuY3Rpb24uYmluZCh0aGlzKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2x1c3RlckxheWVyLmFkZExheWVycyh0aGlzLm1hcmtlcnMubWFwKChtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXShtLmdldExhdExuZygpLCB7XG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKG0uZ2V0RGF0YSgpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWFya2VyLnNldERhdGEobS5nZXREYXRhKCkpO1xuICAgICAgICAgICAgbWFya2VyLmJpbmRUb29sdGlwKCcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdKTtcbiAgICAgICAgICAgIG1hcmtlci5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpO1xuICAgICAgICAgICAgbWFya2VyLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWFya2VyO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNsdXN0ZXJMYXllcjtcbiAgICB9XG4gICAgLyoqIOa4suafk+S4uueDreWKm+WbviAqL1xuICAgIGNvbmZpZ0hlYXRMYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhdExheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmhlYXRMYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhbHRzID0gW107XG4gICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhdExuZyA9IG1hcmtlci5nZXRMYXRMbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbkF0dHIgPSB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLmRpbWVuc2lvbkF0dHI7XG4gICAgICAgICAgICBsZXQgYWx0ID0gKGRpbWVuc2lvbkF0dHIgJiYgbWFya2VyLmdldERhdGEoKVtkaW1lbnNpb25BdHRyXSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhbHQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgYWx0ID0gdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLm1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsdHMucHVzaChhbHQpO1xuICAgICAgICAgICAgbWFya2VyLnNldExhdExuZyhMLmxhdExuZyhsYXRMbmcubGF0LCBsYXRMbmcubG5nLCBhbHQpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGVhdExheWVyID0gTC5oZWF0TGF5ZXIodGhpcy5tYXJrZXJzLm1hcCgoaXQsIGluZGV4KSA9PiBbXG4gICAgICAgICAgICBpdC5nZXRMYXRMbmcoKS5sYXQsXG4gICAgICAgICAgICBpdC5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgICAgICBhbHRzW2luZGV4XSxcbiAgICAgICAgXSksIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIm9wdGlvbnNNZXJnZVwiXSkoeyBtaW5PcGFjaXR5OiAwLjUgfSwgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXRMYXllcjtcbiAgICB9XG4gICAgLyoqIOa4suafk+S4uuawlOazoeWbviAqL1xuICAgIGNvbmZpZ0J1YmJsZUxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5idWJibGVMYXllcikge1xuICAgICAgICAgICAgdGhpcy5idWJibGVMYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJ1YmJsZUxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IHRoaXMuZ2V0QnViYmxlZE1hcmtlclNpemUobWFya2VyLmdldERhdGEoKSk7XG4gICAgICAgICAgICBjb25zdCBmaWxsQ29sb3IgPSB0aGlzLmdldEJ1YmJsZWRNYXJrZXJDb2xvcihtYXJrZXIuZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLmJ1YmJsZVN0cm9rZUNvbG9yIHx8IE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImxpZ2h0ZW5cIl0pKGZpbGxDb2xvcik7XG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSB0aGlzLm9wdGlvbnMuYnViYmxlU3Ryb2tlV2lkdGg7XG4gICAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gdGhpcy5vcHRpb25zLmJ1YmJsZVN0cm9rZU9wYWNpdHk7XG4gICAgICAgICAgICBjb25zdCBmaWxsT3BhY2l0eSA9IHRoaXMub3B0aW9ucy5idWJibGVGaWxsT3BhY2l0eTtcbiAgICAgICAgICAgIGNvbnN0IGJ1YmJsZSA9IEwuY2lyY2xlTWFya2VyKG1hcmtlci5nZXRMYXRMbmcoKSwge1xuICAgICAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IsXG4gICAgICAgICAgICAgICAgd2VpZ2h0LFxuICAgICAgICAgICAgICAgIG9wYWNpdHksXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXApIHtcbiAgICAgICAgICAgICAgICBidWJibGUuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIGJ1YmJsZS5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYnViYmxlTGF5ZXIuYWRkTGF5ZXIoYnViYmxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1YmJsZUxheWVyO1xuICAgIH1cbiAgICBnZXRMYXJnZXJNYXJrZXJJY29uKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgdHJ1ZSk7XG4gICAgfVxuICAgIGdldE1hcmtlckljb24oZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWFya2VySWNvbihkYXRhLCBmYWxzZSk7XG4gICAgfVxuICAgIC8qKiDojrflj5blvZPliY0gbWFya2VyIOmcgOimgeWxleekuueahCBpY29uICovXG4gICAgX2dldE1hcmtlckljb24oZGF0YSwgaXNMYXJnZXIpIHtcbiAgICAgICAgY29uc3QgaWNvblNpemUgPSB0aGlzLm9wdGlvbnMuaWNvblNpemU7XG4gICAgICAgIGNvbnN0IGljb25BbmNob3IgPSB0aGlzLm9wdGlvbnMuaWNvbkFuY2hvcjtcbiAgICAgICAgY29uc3QgbGFyZ2VySWNvblNpemUgPSBbaWNvblNpemVbMF0gKiAxLjUsIGljb25TaXplWzFdICogMS41XTtcbiAgICAgICAgY29uc3QgbGFyZ2VySWNvbkFuY2hvciA9IFtpY29uQW5jaG9yWzBdICogMS41LCBpY29uQW5jaG9yWzFdICogMS41XTtcbiAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvcjtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzoge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBMLmljb24oe1xuICAgICAgICAgICAgICAgIC8vICAgaWNvblVybDogdGhpcy5vcHRpb25zLmljb25JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAvLyAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICAgICAgLy8gICBpY29uQW5jaG9yLFxuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdmb250X2NsYXNzJzpcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgICAgICAgICAgICAgICBodG1sOiB0aGlzLmdldEN1c3RvbUljb25IVE1MKGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGlzTGFyZ2VyID8gJ2xhcmdlLWRpdi1pY29uLW1hcmtlcicgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkFuY2hvcjogaXNMYXJnZXIgPyBsYXJnZXJJY29uQW5jaG9yIDogaWNvbkFuY2hvcixcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBpc0xhcmdlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbMCwgLWxhcmdlckljb25BbmNob3JbMV0gLyAyXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBbMCwgLWljb25BbmNob3JbMV0gLyAyXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclR5cGUg5LiN6IO95Li6ICR7dGhpcy5vcHRpb25zLmljb25UeXBlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEN1c3RvbUljb25IVE1MKGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvcjtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NpbmdsZSc6IHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdjbGFzc2lmaWVkJzoge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRDbGFzc2lmeU1hcmtlckNvbG9yKGRhdGEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnc2VnbWVudGVkJzoge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclBvaW50Q29sb3JUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGV9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgICAgICAgLy8g5L2/55SoIGNsYXNzXG4gICAgICAgICAgICBjYXNlICdmb250X2NsYXNzJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgPGkgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOS9v+eUqCBzdmdcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uLXN5bWJvbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLm9wdGlvbnMuaWNvblN5bWJvbH1cIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICBgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5L2/55SoIHVuaWNvZGVcbiAgICAgICAgICAgIGNhc2UgJ3VuaWNvZGUnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICA8aVxuICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGV9XG4gICAgICAgICAgPC9pPlxuICAgICAgICBgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhY2hlQ2xhc3NpZnlQYXJhbXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG1wID0ge307XG4gICAgICAgIGNvbnN0IHByb3AgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHI7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGFbcHJvcF0gaW4gdG1wKSB7XG4gICAgICAgICAgICAgICAgdG1wW2RhdGFbcHJvcF1dID0gW2RhdGFbcHJvcF0sIHRtcFtkYXRhW3Byb3BdXVsxXSArIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG1wW2RhdGFbcHJvcF1dID0gW2RhdGFbcHJvcF0sIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0bXApO1xuICAgICAgICB2YWx1ZXMuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pO1xuICAgICAgICB0aGlzLmNsYXNzaWZpZWRDb2xvclJlZnMgPSBbXTtcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKFthdHRyLCBudW1zXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xhc3NpZmllZENvbG9yTWFwW2F0dHJdID0gY29sb3I7XG4gICAgICAgICAgICB0aGlzLmNsYXNzaWZpZWRDb2xvclJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBudW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjYWNoZUJ1YmJsZVBhcmFtcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYnViYmxlU2l6ZUF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWJibGVkU2l6ZXNMZW5ndGggPSB0aGlzLm9wdGlvbnMuYnViYmxlU2l6ZXMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4U2l6ZVZhbCA9IC1JbmZpbml0eTtcbiAgICAgICAgbGV0IG1pblNpemVWYWwgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpemVWYWwgPSBkYXRhW3RoaXMub3B0aW9ucy5idWJibGVTaXplQXR0cl07XG4gICAgICAgICAgICBtYXhTaXplVmFsID0gTWF0aC5tYXgobWF4U2l6ZVZhbCwgc2l6ZVZhbCk7XG4gICAgICAgICAgICBtaW5TaXplVmFsID0gTWF0aC5taW4obWluU2l6ZVZhbCwgc2l6ZVZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2l6ZVN0ZXAgPSAobWF4U2l6ZVZhbCAtIG1pblNpemVWYWwgKyAxKSAvIGJ1YmJsZWRTaXplc0xlbmd0aDtcbiAgICAgICAgdGhpcy5idWJibGVkU2l6ZU1pbiA9IG1pblNpemVWYWw7XG4gICAgICAgIHRoaXMuYnViYmxlZFNpemVTdGVwID0gc2l6ZVN0ZXA7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmJ1YmJsZUNvbG9yQXR0cikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRtcCA9IHt9O1xuICAgICAgICBjb25zdCBwcm9wID0gdGhpcy5vcHRpb25zLmJ1YmJsZUNvbG9yQXR0cjtcbiAgICAgICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YVtwcm9wXSBpbiB0bXApIHtcbiAgICAgICAgICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgdG1wW2RhdGFbcHJvcF1dWzFdICsgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHRtcCk7XG4gICAgICAgIHZhbHVlcy5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gICAgICAgIHRoaXMuYnViYmxlZENvbG9yUmVmcyA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoW2F0dHIsIG51bXNdLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMub3B0aW9ucy5idWJibGVDb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuYnViYmxlQ29sb3JzW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYnViYmxlZENvbG9yTWFwW2F0dHJdID0gY29sb3I7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZWRDb2xvclJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBudW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDbGFzc2lmeU1hcmtlckNvbG9yKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NpZmllZENvbG9yTWFwW2RhdGFbdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyXV07XG4gICAgfVxuICAgIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICAgICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpO1xuICAgICAgICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwO1xuICAgIH1cbiAgICBnZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMCldO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIGdldEJ1YmJsZWRNYXJrZXJTaXplKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuYnViYmxlU2l6ZUF0dHJdO1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5vcHRpb25zLmJ1YmJsZVNpemVzW3BhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuYnViYmxlZFNpemVNaW4pIC8gdGhpcy5idWJibGVkU2l6ZVN0ZXAsIDEwKV07XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cbiAgICBnZXRCdWJibGVkTWFya2VyQ29sb3IoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWJibGVkQ29sb3JNYXBbZGF0YVt0aGlzLm9wdGlvbnMuYnViYmxlQ29sb3JBdHRyXV07XG4gICAgfVxuICAgIGdldFBvcHVwQ29udGVudChkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZV19YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpY29uQ3JlYXRlRnVuY3Rpb24oY2x1c3Rlcikge1xuICAgICAgICBjb25zdCBjb2xvcnMgPSBbJyM3NTc0NzInLCAnIzUwOTNFMicsICcjQ0I3OTg3JywgJyNGQzc2M0InXTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5kYXRhTGlzdC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBsZW5ndGggLyBjb2xvcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBzY2FsZVN0ZXAgPSAoMSAtIDAuNzUpIC8gY29sb3JzLmxlbmd0aDtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvcjtcbiAgICAgICAgbGV0IHNjYWxlID0gMTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJDbHVzdGVyQ29sb3JUeXBlID09PSAnc21hcnQnKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKChjbHVzdGVyLmdldENoaWxkQ291bnQoKSAtIDEpIC8gc3RlcCldO1xuICAgICAgICAgICAgc2NhbGUgPVxuICAgICAgICAgICAgICAgIChNYXRoLmZsb29yKChjbHVzdGVyLmdldENoaWxkQ291bnQoKSAtIDEpIC8gc3RlcCkgKyAxKSAqIHNjYWxlU3RlcCArXG4gICAgICAgICAgICAgICAgICAgIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgICBodG1sOiBgXG4gICAgICAgPGRpdlxuICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgke3NjYWxlfSwgJHtzY2FsZX0sIDEpXG4gICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke09iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKX07XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcn07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIG1hcmdpbjogOXB4O1xuICAgICAgICAgIFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgbGVmdDogOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgJHtjbHVzdGVyLmdldENoaWxkQ291bnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgICAgICAgICAgaWNvblNpemU6IFs0MCwgNDBdLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5Z29uL0dyaWRzTGF5ZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEdyaWRzTGF5ZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUG9seWdvbnNMYXllciAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50c1wiKTtcblxuXG5jbGFzcyBHcmlkc0xheWVyIGV4dGVuZHMgX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0ge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKTtcbiAgICAgICAgdGhpcy5wcm9wTWF4TGVuZ3RoID0gLTE7XG4gICAgfVxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5sYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdHcmlkTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIC8vIHRvb2x0aXAg5pyJ5Y+v6IO96ZyA6KaB55u05o6l5bGV56S677yM6ZyA6KaB5ZyoIHBvbHlnb24g5re75Yqg5Yiw5Zyw5Zu+5LiK5LmL5ZCO5omN5Y+v5Lul77yM5omA5Lul6ZyA6KaB5bu26L+f6K6+572uXG4gICAgICAgIHRoaXMuY29uZmlnVG9vbHRpcCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9vbUhhbmRsZXIoKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvZ2dsZVRvb2x0aXAodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIGlmIChwb2x5Z29uLmdldFRvb2x0aXAoKSkge1xuICAgICAgICAgICAgICAgIHBvbHlnb24uZ2V0VG9vbHRpcCgpLnNldE9wYWNpdHkodmlzaWJsZSA/IDEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5tYXAub24oJ3pvb20nLCB0aGlzLnpvb21IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjb25maWdUb29sdGlwKCkge1xuICAgICAgICB0aGlzLnByb3BNYXhMZW5ndGggPSB0aGlzLmdldFByb3BNYXhMZW5ndGgoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSwge1xuICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25maWdHcmlkTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSB0aGlzLnBvbHlnb25zLm1hcCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IocG9seWdvbi5nZXREYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyDph43mlrDlupTnlKggb3B0aW9uc1xuICAgICAgICAgICAgY29uc3QgbmV3UG9seWdvbiA9IG5ldyBfUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpO1xuICAgICAgICAgICAgbmV3UG9seWdvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9seWdvbi5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdQb2x5Z29uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllcjtcbiAgICB9XG4gICAgem9vbUhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLnBvbHlnb25zWzBdO1xuICAgICAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodGhpcy5nZXRSZWN0YW5nbGVXaWR0aChwb2x5Z29uKSA+XG4gICAgICAgICAgICB0aGlzLmdldFRvb2x0aXBNYXhXaWR0aCh0aGlzLnByb3BNYXhMZW5ndGgpKTtcbiAgICB9XG4gICAgZ2V0UmVjdGFuZ2xlV2lkdGgocG9seWdvbikge1xuICAgICAgICByZXR1cm4gKHRoaXMubWFwLmxhdExuZ1RvTGF5ZXJQb2ludChwb2x5Z29uLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpKS54IC1cbiAgICAgICAgICAgIHRoaXMubWFwLmxhdExuZ1RvTGF5ZXJQb2ludChwb2x5Z29uLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpKS54KTtcbiAgICB9XG4gICAgZ2V0VG9vbHRpcE1heFdpZHRoKHRleHRMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRleHRMZW5ndGggKiAxMiArIDE0O1xuICAgIH1cbiAgICBnZXRQcm9wTWF4TGVuZ3RoKCkge1xuICAgICAgICBjb25zdCBwcm9wID0gdHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5wb3B1cEF0dHJcbiAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbnNcbiAgICAgICAgICAgIC5tYXAoKHBvbHlnb24pID0+IGAke3BvbHlnb24uZ2V0RGF0YSgpW3Byb3BdfWAubGVuZ3RoKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHByZXYsIGN1cnIpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5Z29uL1BvbHlnb24udHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlnb247IH0pO1xuY2xhc3MgUG9seWdvbiBleHRlbmRzIEwuUG9seWdvbiB7XG4gICAgY29uc3RydWN0b3IobGF0bG5ncywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb25zTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUG9seWdvbnNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG5cblxuY29uc3QgREVGQVVMVF9DT0xPUiA9ICcjNzJBRkRGJztcbmNsYXNzIFBvbHlnb25zTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhTGlzdCkgfHwgZGF0YUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGRhdGFMaXN0IOW/hemhu+aYr+mdnuepuuaVsOe7hGApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICAgICAgY29sb3I6IERFRkFVTFRfQ09MT1IsXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgZmlsbENvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgICAgICAgd2VpZ2h0OiAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjQsXG4gICAgICAgICAgICByZW5kZXJQb2x5Z29uQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgIHNlZ21lbnRlZENvbG9yczogW0RFRkFVTFRfQ09MT1JdLFxuICAgICAgICAgICAgY2xhc3NpZmllZENvbG9yczogW0RFRkFVTFRfQ09MT1JdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWdvbic7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIm9wdGlvbnNNZXJnZVwiXSkodGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuYztcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucyA9IFtdO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxO1xuICAgICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JNYXAgPSB7fTtcbiAgICAgICAgdGhpcy5mb2N1c2VkUG9seWdvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uID0gbnVsbDtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFBvbHlnb25zKCk7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWdvbkxheWVyKCk7XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZml0Qm91bmRzKCkge1xuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5nZXRCb3VuZHMoKSwgeyBwYWRkaW5nOiBbMjAsIDIwXSB9KTtcbiAgICB9XG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb2x5Z29ucy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25zLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksIEwubGF0TG5nQm91bmRzKHRoaXMucG9seWdvbnNbMF0uZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCksIHRoaXMucG9seWdvbnNbMF0uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcGl0Y2goaWQpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBpZiAocG9seWdvbi5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24sIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENsYXNzaWZ5Q29sb3JSZWZzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yUmVmcztcbiAgICB9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gICAgaW5pdEV2ZW50KCkgeyB9XG4gICAgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YSkge1xuICAgICAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl07XG4gICAgfVxuICAgIGdldFBvcHVwQ29udGVudChkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZV19YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZUNsYXNzaWZ5UGFyYW1zKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQXR0cikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRtcCA9IHt9O1xuICAgICAgICBjb25zdCBwcm9wID0gdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyO1xuICAgICAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhW3Byb3BdIGluIHRtcCkge1xuICAgICAgICAgICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCB0bXBbZGF0YVtwcm9wXV1bMV0gKyAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXModG1wKTtcbiAgICAgICAgdmFsdWVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcbiAgICAgICAgdGhpcy5jbGFzc2lmeUNvbG9yUmVmcyA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoW2F0dHIsIG51bXNdLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRDb2xvcnNbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2F0dHJdID0gY29sb3I7XG4gICAgICAgICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JSZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgbnVtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2xhc3NpZnlQb2x5Z29uQ29sb3IoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2RhdGFbdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyXV07XG4gICAgfVxuICAgIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICAgICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpO1xuICAgICAgICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwO1xuICAgIH1cbiAgICBnZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YSkge1xuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW3BhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICBwb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24sIGZpdEJvdW5kcykge1xuICAgICAgICB0aGlzLmZvY3VzZWRQb2x5Z29uID0gcG9seWdvbjtcbiAgICAgICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uID0gbmV3IF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKHBvbHlnb24uZ2V0TGF0TG5ncygpLCB7XG4gICAgICAgICAgICBjb2xvcjogREVGQVVMVF9DT0xPUixcbiAgICAgICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uXG4gICAgICAgICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgICAgICAgIC5vcGVuUG9wdXAoKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBvbHlnb24uY2xvc2VUb29sdGlwKCk7XG4gICAgICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLmdldENlbnRlcigpKTtcbiAgICAgICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHBvbHlnb24uZ2V0Qm91bmRzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlnb24nLCBwb2x5Z29uKTtcbiAgICB9XG4gICAgaW5pdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJvcHRpb25zTWVyZ2VcIl0pKHRoaXMuZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRQb2x5Z29ucygpIHtcbiAgICAgICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKCk7XG4gICAgICAgIHRoaXMuY2FjaGVDbGFzc2lmeVBhcmFtcygpO1xuICAgICAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF07XG4gICAgICAgICAgICBjb25zdCBwb2x5Z29uID0gbmV3IF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKGxheWVyLmdldExhdExuZ3MoKSk7XG4gICAgICAgICAgICBwb2x5Z29uLnNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25maWdQb2x5Z29uTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSB0aGlzLnBvbHlnb25zLm1hcCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIm9wdGlvbnNNZXJnZVwiXSkoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIOmHjeaWsOW6lOeUqCBvcHRpb25zXG4gICAgICAgICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKHBvbHlnb24uZ2V0TGF0TG5ncygpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIG5ld1BvbHlnb24uc2V0RGF0YShwb2x5Z29uLmdldERhdGEoKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG5ld1BvbHlnb24uZ2V0RGF0YSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdQb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBuZXdQb2x5Z29uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllcjtcbiAgICB9XG4gICAgZ2V0Q29sb3IoZGF0YSwgbW9kZSkge1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3I7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWdvbkNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnY2xhc3NpZmllZCcpIHtcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRDbGFzc2lmeVBvbHlnb25Db2xvcihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRhcmtlblwiXSkoY29sb3IpO1xuICAgICAgICAgICAgY2FzZSAnbGlnaHRlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlsaW5lOyB9KTtcbmNsYXNzIFBvbHlsaW5lIGV4dGVuZHMgTC5Qb2x5bGluZSB7XG4gICAgY29uc3RydWN0b3IobGF0bG5ncywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5bGluZXNCdWZmZXJMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlsaW5lc0xheWVyICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIudHNcIik7XG5cbmNsYXNzIFBvbHlsaW5lc0J1ZmZlckxheWVyIGV4dGVuZHMgX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYyk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgICAgICAgIGNvcnJpZG9yOiAxMDAsXG4gICAgICAgICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWxpbmVCdWZmZXInO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKTtcbiAgICB9XG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSwgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKCkpO1xuICAgIH1cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgY29uZmlnUG9seWxpbmVCdWZmZXJMYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBwb2x5bGluZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBwb2x5bGluZUJ1ZmZlciA9IEwuY29ycmlkb3IocG9seWxpbmUuZ2V0TGF0TG5ncygpLm1hcCgobGF0TG5nKSA9PiBMLmxhdExuZyhbbGF0TG5nLmxhdCwgbGF0TG5nLmxuZ10pKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgcG9seWxpbmVCdWZmZXIuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihwb2x5bGluZUJ1ZmZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZUxheWVyO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5bGluZXNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlsaW5lICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuXG5cbmNsYXNzIFBvbHlsaW5lc0xheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YUxpc3QpIHx8IGRhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhTGlzdCDlv4XpobvmmK/pnZ7nqbrmlbDnu4RgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICAgICAgY2xhc3NpZmllZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHlwZSA9ICdwb2x5bGluZSc7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIm9wdGlvbnNNZXJnZVwiXSkodGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuYztcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2x5bGluZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMTtcbiAgICAgICAgdGhpcy5jbGFzc2lmeUNvbG9yTWFwID0ge307XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbnVsbDtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pO1xuICAgIH1cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvbHlsaW5lcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLCBMLmxhdExuZ0JvdW5kcyh0aGlzLnBvbHlsaW5lc1swXS5nZXRCb3VuZHMoKS5nZXROb3J0aEVhc3QoKSwgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICBwaXRjaChpZCkge1xuICAgICAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBvbHlsaW5lLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDbGFzc2lmeUNvbG9yUmVmcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NpZnlDb2xvclJlZnM7XG4gICAgfVxuICAgIGluaXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wib3B0aW9uc01lcmdlXCJdKSh0aGlzLmRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0UG9seWxpbmVzKCkge1xuICAgICAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICAgICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKTtcbiAgICAgICAgdGhpcy5jYWNoZUNsYXNzaWZ5UGFyYW1zKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gdGhpcy5kYXRhTGlzdC5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdO1xuICAgICAgICAgICAgY29uc3QgcG9seWxpbmUgPSBuZXcgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKGxheWVyLmdldExhdExuZ3MoKSk7XG4gICAgICAgICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICAgICAgICBwb2x5bGluZS5zZXREYXRhKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHBvbHlsaW5lO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMCldO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIHBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lLCBmaXRCb3VuZHMpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBwb2x5bGluZTtcbiAgICAgICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnlJ/miJDlvZPliY0gZm9jdXNcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbmV3IF9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShwb2x5bGluZS5nZXRMYXRMbmdzKCksIHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICAgICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWxpbmUuZ2V0RGF0YSgpLCAnbm9ybWFsJyksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUuYWRkVG8odGhpcy5tYXApO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmVcbiAgICAgICAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQocG9seWxpbmUuZ2V0RGF0YSgpKSlcbiAgICAgICAgICAgIC5vcGVuUG9wdXAoKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcG9seWxpbmUuY2xvc2VUb29sdGlwKCk7XG4gICAgICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5nZXRDZW50ZXIoKSk7XG4gICAgICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5bGluZS5nZXRCb3VuZHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stcG9seWxpbmUnLCBwb2x5bGluZSk7XG4gICAgfVxuICAgIGdldFRvb2xUaXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdO1xuICAgIH1cbiAgICBnZXRQb3B1cENvbnRlbnQoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uZmlnUG9seWxpbmVMYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wib3B0aW9uc01lcmdlXCJdKSh7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgbmV3UG9seWxpbmUgPSBuZXcgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKHBvbHlsaW5lLmdldExhdExuZ3MoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdQb2x5bGluZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld1BvbHlsaW5lLnNldERhdGEocG9seWxpbmUuZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb2x5bGluZS5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG5ld1BvbHlsaW5lLmdldERhdGEoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKG5ld1BvbHlsaW5lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lTGF5ZXI7XG4gICAgfVxuICAgIGNhY2hlQ2xhc3NpZnlQYXJhbXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG1wID0ge307XG4gICAgICAgIGNvbnN0IHByb3AgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHI7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGFbcHJvcF0gaW4gdG1wKSB7XG4gICAgICAgICAgICAgICAgdG1wW2RhdGFbcHJvcF1dID0gW2RhdGFbcHJvcF0sIHRtcFtkYXRhW3Byb3BdXVsxXSArIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG1wW2RhdGFbcHJvcF1dID0gW2RhdGFbcHJvcF0sIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0bXApO1xuICAgICAgICB2YWx1ZXMuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pO1xuICAgICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JSZWZzID0gW107XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKChbYXR0ciwgbnVtc10sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRDb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9yc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JNYXBbYXR0cl0gPSBjb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NpZnlDb2xvclJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBudW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDbGFzc2lmeVBvbHlsaW5lQ29sb3IoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2RhdGFbdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyXV07XG4gICAgfVxuICAgIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICAgICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpO1xuICAgICAgICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwO1xuICAgIH1cbiAgICBnZXRDb2xvcihkYXRhLCBtb2RlKSB7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvcjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWxpbmVDb2xvclR5cGUgPT09ICdjbGFzc2lmaWVkJykge1xuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmdldENsYXNzaWZ5UG9seWxpbmVDb2xvcihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRhcmtlblwiXSkoY29sb3IpO1xuICAgICAgICAgICAgY2FzZSAnbGlnaHRlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3V0aWxzL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQsIGxpZ2h0ZW4sIGRhcmtlbiwgb3B0aW9uc01lcmdlICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImxpZ2h0ZW5cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBsaWdodGVuOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkYXJrZW5cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkYXJrZW47IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIm9wdGlvbnNNZXJnZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIG9wdGlvbnNNZXJnZTsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29sb3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29sb3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxuZnVuY3Rpb24gbGlnaHRlbihoZXhDb2xvcikge1xuICAgIHJldHVybiBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKGhleENvbG9yKVxuICAgICAgICAubGlnaHRlbigwLjUpXG4gICAgICAgIC5oZXgoKTtcbn1cbmZ1bmN0aW9uIGRhcmtlbihoZXhDb2xvcikge1xuICAgIHJldHVybiBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKGhleENvbG9yKVxuICAgICAgICAuZGFya2VuKDAuNSlcbiAgICAgICAgLmhleCgpO1xufVxuZnVuY3Rpb24gb3B0aW9uc01lcmdlKC4uLnRhcmdldHMpIHtcbiAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldHNbMF07XG4gICAgfVxuICAgIGNvbnN0IG1lcmdlZCA9IHRhcmdldHNbMF07XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0c1sxXSkge1xuICAgICAgICBpZiAoa2V5IGluIG1lcmdlZCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtZXJnZWRba2V5XSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2tleV0gPSBvcHRpb25zTWVyZ2UobWVyZ2VkW2tleV0sIHRhcmdldHNbMV1ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRba2V5XSA9IHRhcmdldHNbMV1ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lcmdlZFtrZXldID0gdGFyZ2V0c1sxXVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zTWVyZ2UobWVyZ2VkLCAuLi50YXJnZXRzLnNsaWNlKDIpKTtcbn1cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoe1xuICAgIGxpZ2h0ZW4sXG4gICAgZGFya2VuLFxuICAgIG9wdGlvbnNNZXJnZSxcbn0pO1xuXG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMM2RsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3TDNkbFluQmhZMnN2WW05dmRITjBjbUZ3SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0WTI5dWRtVnlkQzlqYjI1MlpYSnphVzl1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUxXTnZiblpsY25RdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDI1dlpHVmZiVzlrZFd4bGN5OWpiMnh2Y2kxamIyNTJaWEowTDNKdmRYUmxMbXB6SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0Ym1GdFpTOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUxYTjBjbWx1Wnk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2Ym05a1pWOXRiMlIxYkdWekwyTnZiRzl5TFhOMGNtbHVaeTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0Ym1GdFpTOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5dWIyUmxYMjF2WkhWc1pYTXZhWE10WVhKeVlYbHBjMmd2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dmJHVmhabXhsZEUxaGNDOHVMMjV2WkdWZmJXOWtkV3hsY3k5emFXMXdiR1V0YzNkcGVucHNaUzlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZjM0pqTDJSNWJtRnRhV05JWldGMFRHRjVaWEl2UkhsdVlXMXBZMGhsWVhSTVlYbGxjaTUwY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2YzNKakwybHVaR1Y0TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZiV0Z5YTJWeUwwMWhjbXRsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmMzSmpMMjFoY210bGNpOU5ZWEpyWlhKelFuVm1abVZ5VEdGNVpYSXVkSE1pTENKM1pXSndZV05yT2k4dmJHVmhabXhsZEUxaGNDOHVMM055WXk5dFlYSnJaWEl2VFdGeWEyVnljMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXZHZiaTlIY21sa2MweGhlV1Z5TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZjRzlzZVdkdmJpOVFiMng1WjI5dUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXZHZiaTlRYjJ4NVoyOXVjMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXeHBibVV2VUc5c2VXeHBibVV1ZEhNaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDNOeVl5OXdiMng1YkdsdVpTOVFiMng1YkdsdVpYTkNkV1ptWlhKTVlYbGxjaTUwY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2YzNKakwzQnZiSGxzYVc1bEwxQnZiSGxzYVc1bGMweGhlV1Z5TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZkWFJwYkhNdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3p0QlEyeEdRVHRCUVVOQkxHdENRVUZyUWl4dFFrRkJUeXhEUVVGRExITkVRVUZaT3p0QlFVVjBRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNVVUZCVVN3MFFrRkJORUk3UVVGRGNFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3MlFrRkJOa0k3UVVGRGNFTXNWMEZCVnl4cFEwRkJhVU03UVVGRE5VTXNWVUZCVlN4blEwRkJaME03UVVGRE1VTXNWMEZCVnl4cFEwRkJhVU03UVVGRE5VTXNUMEZCVHl4eFEwRkJjVU03UVVGRE5VTXNVMEZCVXl3eVEwRkJNa003UVVGRGNFUXNVVUZCVVR0QlFVTlNPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNjVVJCUVhGRUxHZENRVUZuUWp0QlFVTnlSU3h0UkVGQmJVUXNZMEZCWXp0QlFVTnFSVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTEdkQ1FVRm5RaXhQUVVGUE8wRkJRM1pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeDFRa0ZCZFVJN08wRkJSWFpDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZENRVUZuUWl4UFFVRlBMRkZCUVZFN1FVRkRMMElzWjBKQlFXZENMRTlCUVU4c1VVRkJVVHRCUVVNdlFpeHBRa0ZCYVVJc1QwRkJUeXhQUVVGUE8wRkJReTlDTEdsQ1FVRnBRaXhQUVVGUExFOUJRVTg3UVVGREwwSXNaMEpCUVdkQ0xGRkJRVkVzVDBGQlR6dEJRVU12UWl4blFrRkJaMElzVVVGQlVTeFBRVUZQTzBGQlF5OUNPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSE5GUVVGelJUczdRVUZGZEVVN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNjMEpCUVhOQ08wRkJRM1JDTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEN0RFFVRXJReXhGUVVGRkxGVkJRVlVzUlVGQlJUdEJRVU0zUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR08wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzWlVGQlpTeGhRVUZoTEdGQlFXRTdRVUZEZWtNN1FVRkRRU3hsUVVGbExHRkJRV0VzWVVGQllUdEJRVU42UXp0QlFVTkJMR1ZCUVdVc1lVRkJZU3hoUVVGaE8wRkJRM3BETzBGQlEwRXNaVUZCWlN4aFFVRmhMR0ZCUVdFN1FVRkRla003UVVGRFFTeGxRVUZsTEdGQlFXRXNZVUZCWVR0QlFVTjZRenRCUVVOQkxHVkJRV1VzWVVGQllUdEJRVU0xUWpzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOdU1rSkJMR3RDUVVGclFpeHRRa0ZCVHl4RFFVRkRMR3RGUVVGbE8wRkJRM3BETEZsQlFWa3NiVUpCUVU4c1EwRkJReXh6UkVGQlV6czdRVUZGTjBJN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEVzYTBOQlFXdERPMEZCUTJ4RE8wRkJRMEU3UVVGRFFTeDFRMEZCZFVNc1UwRkJVenRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFc2QwUkJRWGRFTEhWRFFVRjFRenRCUVVNdlJpeHpSRUZCYzBRc2NVTkJRWEZET3p0QlFVVXpSanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJpeERRVUZET3p0QlFVVkVPenM3T3pzN096czdPenM3UVVNM1JVRXNhMEpCUVd0Q0xHMUNRVUZQTEVOQlFVTXNhMFZCUVdVN08wRkJSWHBETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4eFEwRkJjVU1zVTBGQlV6dEJRVU01UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhsQ1FVRjVRanM3UVVGRmVrSTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEhsRFFVRjVReXhUUVVGVE8wRkJRMnhFTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMSEZEUVVGeFF5eFRRVUZUTzBGQlF6bERPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096dEJReTlHV1RzN1FVRkZXanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUTNaS1FUdEJRVU5CTEdsQ1FVRnBRaXh0UWtGQlR5eERRVUZETEdkR1FVRlpPMEZCUTNKRExHTkJRV01zYlVKQlFVOHNRMEZCUXl3NFJFRkJaMEk3TzBGQlJYUkRPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNVMEZCVXp0QlFVTlVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMSGxDUVVGNVFpeEpRVUZKTzBGQlF6ZENMSGRDUVVGM1FpeEZRVUZGTEZkQlFWY3NSVUZCUlR0QlFVTjJRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMR0ZCUVdFc1QwRkJUenRCUVVOd1FqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRU3hoUVVGaExFOUJRVTg3UVVGRGNFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR0xHRkJRV0VzVDBGQlR6dEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRXNSVUZCUlR0QlFVTkdPMEZCUTBFN08wRkJSVUVzV1VGQldTeFBRVUZQTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEZWs5Wk96dEJRVVZhTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEzWktZVHM3UVVGRllpeHJRa0ZCYTBJc2JVSkJRVThzUTBGQlF5d3dSRUZCWXp0QlFVTjRReXhqUVVGakxHMUNRVUZQTEVOQlFVTXNORVJCUVdVN08wRkJSWEpET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPenRCUVVWRU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNZVUZCWVN4dFFrRkJiVUk3UVVGRGFFTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVdFc1kwRkJZenRCUVVNelFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2FVSkJRV2xDTEdOQlFXTTdRVUZETDBJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2NVVkJRWEZGTEd0RFFVRnJReXhGUVVGRk96dEJRVVY2Unp0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxHbENRVUZwUWl4blFrRkJaMEk3UVVGRGFrTTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzVDBGQlR6dEJRVU40UWp0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNaMEpCUVdkQ0xGbEJRVms3UVVGRE5VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN08wRkRPV1JCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRVbUU3TzBGQlJXSXNhVUpCUVdsQ0xHMUNRVUZQTEVOQlFVTXNkMFJCUVdFN08wRkJSWFJETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFTeHRRMEZCYlVNc1UwRkJVenRCUVVNMVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRek5DUVR0QlFVRkJPMEZCUVVFN1FVRkhLMEk3UVVGWGFFSXNUVUZCVFN4blFrRkJaMEk3U1VGVmJrTXNXVUZEUlN4SFFVRlZMRVZCUTFZc1pVRkJhVU1zUlVGRGFrTXNUMEZCWjBNc1JVRkRhRU1zVjBGQmQwSTdVVUZGZUVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1pVRkJaU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEYmtVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJRenRUUVVOd1F6dFJRVU5FTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSenRSUVVOa0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NaVUZCWlR0UlFVTjBReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVODdVVUZEZEVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTzFGQlF6bENMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWs3U1VGRGNrSXNRMEZCUXp0SlFVTk5MRTlCUVU4N1VVRkRXaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVczdVVUZEY0VJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETzFGQlEzQkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTXZRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzBsQlEyUXNRMEZCUXp0SlFVTk5MRXRCUVVzN1VVRkRWaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVczdVVUZEY0VJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUTNSQ0xFOUJRVTA3VTBGRFVEdFJRVU5FTEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUTJoQ0xFOUJRVTA3WVVGRFVEdFpRVU5FTEZkQlFWYzdXVUZEV0N4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU4yUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVTdiMEpCUTNSQ0xFOUJRVTA3YVVKQlExQTdaMEpCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdGhRVU5tTzJsQ1FVRk5PMmRDUVVOTUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdaMEpCUTJ4Q0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRuUWtGREwwSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRoUVVOaU8xRkJRMGdzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRE8wbEJRek5DTEVOQlFVTTdTVUZEVFN4TFFVRkxPMUZCUTFZc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTzBsQlEzSkNMRU5CUVVNN1NVRkRUU3hKUVVGSk8xRkJRMVFzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zVjBGQlZ6dFpRVU5rTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkRhRVFzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5PMUZCUXpkQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVOcVF5eERRVUZETzBsQlEwMHNTVUZCU1R0UlFVTlVMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3VVVGRGJFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1RVRkJUVHRSUVVOcVJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVTk5MRkZCUVZFc1EwRkJReXhKUVVGWk8xRkJRekZDTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRia1FzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4WlFVRlpMRWxCUVVrc01FSkJRVEJDTEVOQlFVTTdVMEZETlVRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6bERMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTzBsQlEyNUNMRU5CUVVNN1NVRkRUU3hKUVVGSkxFTkJRVU1zVDBGQmFVTTdVVUZETTBNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdFJRVU5vUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJUdFJRVU5xUWl4UFFVRlBMRWxCUVVrN1NVRkRZaXhEUVVGRE8wbEJRMDBzVTBGQlV6dFJRVU5rTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhGUVVGRk8wbEJRM2hDTEVOQlFVTTdTVUZEVHl4WFFVRlhMRU5CUVVNc1QwRkJhVU03VVVGRGJrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVU14UWp0WlFVTkZMRWxCUVVrc1JVRkJSU3hMUVVGTE8xbEJRMWdzU1VGQlNTeEZRVUZGTEV0QlFVczdXVUZEV0N4UlFVRlJMRVZCUVVVc1NVRkJTVHRUUVVObUxFVkJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZEV2l4UFFVRlBMRU5CUTFJN1NVRkRTQ3hEUVVGRE8wbEJRMDhzVTBGQlV6dFJRVU5tTEUxQlFVMHNiVUpCUVcxQ0xFZEJRWGRDTzFsQlF5OURMRlZCUVZVc1JVRkJSU3hOUVVGTk8xbEJRMnhDTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUenRUUVVNeFFqdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3cwUkVGQldTeERRVU16UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVOU0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTNaQ0xHMUNRVUZ0UWl4RlFVTnVRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVU5xUWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXM3U1VGRGJrSXNRMEZCUXp0RFFVTkdPenM3T3pzN096czdPenM3TzBGRE5VaEVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVzlETzBGQlExazdRVUZEV1R0QlFVTnNRanRCUVVOWk8wRkJRMWs3UVVGRE0wSTdRVUZEV1R0QlFVTk9PMEZCUTNGQ08wRkJSV3hGTEN0RVFVRmxPMGxCUTJJc09FUkJRVTA3U1VGRFRpd3dSVUZCV1R0SlFVTmFMSE5HUVVGclFqdEpRVU5zUWl4dlJVRkJVVHRKUVVOU0xHZEdRVUZqTzBsQlEyUXNORVpCUVc5Q08wbEJRM0JDTEdsRlFVRlBPMGxCUTFBc05rVkJRV0U3U1VGRFlpeDFSVUZCVlR0SlFVTldMRFJHUVVGblFqdERRVU5xUWp0QlFWbEJPenM3T3pzN096czdPenM3TzBGRGFFTkVPMEZCUVVFN1FVRkJaU3hOUVVGTkxFMUJRVThzVTBGQlVTeERRVUZETEVOQlFVTXNUVUZCVFR0SlFVY3hReXhaUVVGWkxFMUJRVEJDTEVWQlFVVXNUMEZCZVVJN1VVRkRMMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVU5OTEU5QlFVOHNRMEZCUXl4SlFVRnJRanRSUVVNdlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrN1NVRkRjRUlzUTBGQlF6dEpRVU5OTEU5QlFVODdVVUZEV2l4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTk8wbEJRM0JDTEVOQlFVTTdRMEZEUmpzN096czdPenM3T3pzN096dEJRMkpFTzBGQlFVRTdRVUZCUVR0QlFVRnJSVHRCUVV0dVJDeE5RVUZOTEd0Q1FVRnRRaXhUUVVGUkxIRkVRVUZaTzBsQlJ6RkVMRmxCUTBVc1IwRkJWU3hGUVVOV0xGRkJRWGRDTEVWQlEzaENMRTlCUVd0RExFVkJRMnhETEZkQlFYZENPMUZCUlhoQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSU3hYUVVGWExFTkJRVU03VVVGRE1VTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhqUVVGak8xRkJRekZDTEUxQlFVMHNiMEpCUVc5Q0xFZEJRVEJDTzFsQlEyeEVMRTFCUVUwc1JVRkJSU3hKUVVGSk8xbEJRMW9zVFVGQlRTeEZRVUZGTEVsQlFVazdXVUZEV2l4TlFVRk5MRVZCUVVVc1EwRkJRenRUUVVOV08xRkJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVNeFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVTmFMRVZCUVVVc1lVRkJZU3hGUVVGRkxHOUNRVUZ2UWl4RlFVRkZMRVZCUTNaRExFOUJRVThzUTBGRFVqdEpRVU5JTEVOQlFVTTdTVUZGVFN4SlFVRkpMRU5CUVVNc1QwRkJiVU03VVVGRE4wTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRE8xRkJRMjVFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNN1VVRkRla1FzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0UlFVTnNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdTVUZEZEVJc1EwRkJRenRKUVVWTkxFMUJRVTA3VVVGRFdDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOcVFpeFBRVUZOTzFOQlExQTdVVUZEUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3V1VGRGNFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTjJRenRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0WlFVTndRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xTkJRM1pETzFGQlEwUXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVN1VVRkRNME1zU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVTdVVUZGTTBNc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNWVUZCVlN4RlFVRkZPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRGNrTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVVnlReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRemRDTEU5QlFVOHNTVUZCU1R0SlFVTmlMRU5CUVVNN1NVRkZUU3hUUVVGVE8xRkJRMlFzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE5VSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJUdFRRVU0xUWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRGVFTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVOb1FpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVNM1JEdFJRVU5JTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRKUVVNM1JTeERRVUZETzBsQlJVOHNhVUpCUVdsQ08xRkJRM1pDTEUxQlFVMHNWVUZCVlN4SFFVRkhMRU5CUVVNc1EwRkJReXhWUVVGVkxFVkJRVVU3VVVGRGFrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNSVUZCUlR0WlFVTTVRaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVTXhRaXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlEyeENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeERRVU16UWp0WlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSVHRuUWtGRGJFTXNWMEZCVnl4RFFVRkRMRmRCUVZjc1EwRkRja0lzUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdsQ1FVRnBRaXhEUVVGRExFTkJRM1JFTzJGQlEwWTdhVUpCUVUwN1owSkJRMHdzVVVGQlVTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRk8yOUNRVU55UXl4TFFVRkxMRkZCUVZFN2QwSkJRMWdzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZEY2tJc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVU01UXp0M1FrRkRSQ3hOUVVGTE8yOUNRVU5RTEV0QlFVc3NVVUZCVVR0M1FrRkRXQ3hYUVVGWExFTkJRVU1zVjBGQlZ5eERRVU55UWl4RlFVRkZMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVU53UkR0dlFrRkRTRHQzUWtGRFJTeE5RVUZMTzJsQ1FVTlNPMkZCUTBZN1dVRkRSQ3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTnNReXhEUVVGRExFTkJRVU03VVVGRFJpeFBRVUZQTEZWQlFWVTdTVUZEYmtJc1EwRkJRenREUVVOR096czdPenM3T3pzN096czdPMEZEYkVkRU8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFYTkVPMEZCUlhwQ08wRkJOa1ZrTEUxQlFVMHNXVUZCV1R0SlFUWkRMMElzV1VGRFJTeEhRVUZWTEVWQlExWXNVVUZCZDBJc1JVRkRlRUlzVDBGQk5FSXNSVUZETlVJc1YwRkJkMEk3VVVGRmVFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNrUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0VFFVTndRenRSUVVORUxFMUJRVTBzWVVGQllTeEhRVUZITEZOQlFWTTdVVUZETDBJc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ6dFpRVU53UWl4VlFVRlZMRVZCUVVVc1QwRkJUenRaUVVOdVFpeHZRa0ZCYjBJc1JVRkJSU3hSUVVGUk8xbEJRemxDTEZGQlFWRXNSVUZCUlN4VFFVRlRPMWxCUTI1Q0xGRkJRVkVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRiRUlzVTBGQlV5eEZRVUZGTEZWQlFWVTdXVUZEY2tJc1UwRkJVeXhGUVVGRkxHRkJRV0U3V1VGRGVFSXNWVUZCVlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dFpRVU53UWl4TFFVRkxMRVZCUVVVc1NVRkJTVHRaUVVOWUxFOUJRVThzUlVGQlJTeEpRVUZKTzFsQlEySXNVMEZCVXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RlFVRkZPMWxCUTNwRExGZEJRVmNzUlVGQlJTeE5RVUZOTzFsQlEyNUNMR1ZCUVdVc1JVRkJSU3hEUVVGRExHRkJRV0VzUTBGQlF6dFpRVU5vUXl4blFrRkJaMElzUlVGQlJTeERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTnFReXhUUVVGVExFVkJRVVVzUzBGQlN6dFpRVU5vUWl4elFrRkJjMElzUlVGQlJTeFBRVUZQTzFsQlF5OUNMR2xDUVVGcFFpeEZRVUZGTEVOQlFVTTdXVUZEY0VJc1dVRkJXU3hGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETzFsQlF6ZENMRzFDUVVGdFFpeEZRVUZGTEVkQlFVYzdXVUZEZUVJc2FVSkJRV2xDTEVWQlFVVXNSMEZCUnp0WlFVTjBRaXhYUVVGWExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdXVUZEYWtJc1YwRkJWeXhGUVVGRk8yZENRVU5ZTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVOT0xGVkJRVlVzUlVGQlJTeEhRVUZITzJGQlEyaENPMU5CUTBZN1VVRkRSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEZGQlFWRTdVVUZEY0VJc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITzFGQlEyUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUk8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjN1VVRkZPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1R0UlFVTnFRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVsQlFVazdVVUZEZWtJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eEpRVUZKTzFGQlEzcENMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNSMEZCUnl4SlFVRkpPMUZCUTJoRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlR0UlFVTnFRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVazdVVUZEZGtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzU1VGQlNUdFJRVU40UWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWs3VVVGRmRrSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhSUVVGUk8xRkJRelZDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1EwRkJRenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRkZCUVZFN1VVRkRPVUlzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4RFFVRkRPMUZCUTNoQ0xFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1IwRkJSeXhGUVVGRk8xRkJRelZDTEVsQlFVa3NRMEZCUXl4bFFVRmxMRWRCUVVjc1JVRkJSVHRKUVVNelFpeERRVUZETzBsQlEwMHNTVUZCU1N4RFFVRkRMRTlCUVRaQ08xRkJRM1pETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTVHRSUVVOdVFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVONlFpeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVTdVVUZEYWtJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBsQlEzUkNMRU5CUVVNN1NVRkRUU3hOUVVGTk8xRkJRMWdzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRha0lzVDBGQlRUdFRRVU5RTzFGQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8xbEJRMlFzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1UwRkRjRUk3VVVGRlJDeHBRa0ZCYVVJN1VVRkRha0lzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNTMEZCU3l4UFFVRlBMRVZCUVVVN1dVRkRha1VzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVTdVMEZEZGtNN1lVRkJUVHRaUVVOTUxGRkJRVkVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVN1owSkJReTlDTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN2IwSkJRMW9zU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVTdiMEpCUTNKRExFMUJRVXM3YVVKQlEwNDdaMEpCUTBRc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6dHZRa0ZEWkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSVHR2UWtGRGRFTXNUVUZCU3p0cFFrRkRUanRuUWtGRFJDeExRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRPMjlDUVVOWUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSVHR2UWtGRGJrTXNUVUZCU3p0cFFrRkRUanRuUWtGRFJDeExRVUZMTEZGQlFWRXNRMEZCUXl4RFFVRkRPMjlDUVVOaUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTzI5Q1FVTnlReXhOUVVGTE8ybENRVU5PTzJkQ1FVTkVMRTlCUVU4c1EwRkJReXhEUVVGRE8yOUNRVU5RTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hIUVVGSExFTkJRVU03YVVKQlF6bEVPMkZCUTBZN1UwRkRSanRSUVVORUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRE4wSXNUMEZCVHl4SlFVRkpPMGxCUTJJc1EwRkJRenRKUVVOTkxFOUJRVThzUTBGQlF5eEpRVUZ2UWp0UlFVTnFReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVazdTVUZEZEVJc1EwRkJRenRKUVVOTkxGVkJRVlVzUTBGQlF5eFBRVUUwUWl4RlFVRkZMRTFCUVUwc1IwRkJSeXhMUVVGTE8xRkJRelZFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJRenRSUVVOdVJDeEpRVUZKTEUxQlFVMHNSVUZCUlR0WlFVTldMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3VTBGRFpEdEpRVU5JTEVOQlFVTTdTVUZEUkN4dFFrRkJiVUk3U1VGRFdpeFZRVUZWTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUenRKUVVOeVFpeERRVUZETzBsQlEwMHNVMEZCVXp0UlFVTmtMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRemRFTEVOQlFVTTdTVUZEVFN4VFFVRlRPMUZCUTJRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkROVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSVHRUUVVNMVFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRM0pDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkRWQ3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCY1VJc1EwRkRka1U3U1VGRFNDeERRVUZETzBsQlEwMHNUMEZCVHp0UlFVTmFMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5rTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZEYWtNN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSVHRaUVVNM1FpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNN1UwRkRhRVE3VVVGRFJDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlN4SlFVRkpMRU5CUVVNN1VVRkRiRVFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVWQlFVVXNTVUZCU1N4RFFVRkRPMGxCUTJoRUxFTkJRVU03U1VGRFRTeGhRVUZoTEVOQlFVTXNUMEZCWjBJN1VVRkRia01zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMWxCUTJZc1QwRkJUVHRUUVVOUU8xRkJRMFFzU1VGQlNTeFBRVUZQTEVWQlFVVTdXVUZEV0N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUXpsQ08yRkJRVTA3V1VGRFRDeEpRVUZKTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUlVGQlJUdG5Ra0ZETjBJc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRoUVVOdVF6dFpRVU5FTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZEYWtNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEV0QlFXRTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3p0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBsQlEyWXNRMEZCUXp0SlFVTk5MRlZCUVZVc1EwRkJReXhYUVVGdFFqdFJRVU51UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTzFGQlEzUkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3U1VGRFppeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRVZCUVZVN1VVRkRja0lzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU01UWl4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZPMmRDUVVNNVFpeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXp0blFrRkRja01zVDBGQlRUdGhRVU5RTzFGQlEwZ3NRMEZCUXl4RFFVRkRPMGxCUTBvc1EwRkJRenRKUVVOTkxITkNRVUZ6UWp0UlFVTXpRaXhQUVVGUExFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJN1NVRkRha01zUTBGQlF6dEpRVU5OTEcxQ1FVRnRRanRSUVVONFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4blFrRkJaMEk3U1VGRE9VSXNRMEZCUXp0SlFVTlRMRmxCUVZrN1VVRkRjRUlzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRha0lzVDBGQlRUdFRRVU5RTzFGQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hMUVVGTExGRkJRVkVzUlVGQlJUdFpRVU14UWl4UlFVRlJMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTzJkQ1FVTXZRaXhMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzI5Q1FVTmFMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVTdkMEpCUXpGQ0xFOUJRVTA3Y1VKQlExQTdiMEpCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzNkQ1FVTndRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8zRkNRVU4yUXp0dlFrRkRSQ3hOUVVGTE8ybENRVU5PTzJkQ1FVTkVMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU03YjBKQlEySXNTVUZCU1N4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRk8zZENRVU53UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPM0ZDUVVOMlF6dHZRa0ZEUkN4TlFVRkxPMmxDUVVOT08yZENRVU5FTEU5QlFVOHNRMEZCUXl4RFFVRkRPMjlDUVVOUUxFOUJRVTA3YVVKQlExQTdZVUZEUmp0VFFVTkdPMkZCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeExRVUZMTEdOQlFXTXNSVUZCUlR0WlFVTjJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xTkJRM1pETzJGQlFVMDdXVUZEVEN4UFFVRk5PMU5CUTFBN1NVRkRTQ3hEUVVGRE8wbEJRMU1zVlVGQlZUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5xUWl4UFFVRk5PMU5CUTFBN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpGQ0xGRkJRVkVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVN1owSkJReTlDTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN2IwSkJRMW9zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSVHQzUWtGRE1VSXNUMEZCVFR0eFFrRkRVRHR2UWtGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN2QwSkJRM0JDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdjVUpCUTNCRE8yOUNRVU5FTEUxQlFVczdhVUpCUTA0N1owSkJRMFFzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0dlFrRkRZaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdkMEpCUTNCQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03Y1VKQlEzQkRPMjlDUVVORUxFMUJRVXM3YVVKQlEwNDdaMEpCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03YjBKQlExQXNUMEZCVFR0cFFrRkRVRHRoUVVOR08xTkJRMFk3WVVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc1kwRkJZeXhGUVVGRk8xbEJRM1pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdVMEZEY0VNN1lVRkJUVHRaUVVOTUxFOUJRVTA3VTBGRFVEdEpRVU5JTEVOQlFVTTdTVUZEUkN4aFFVRmhPMGxCUTBnc2FVSkJRV2xDTzFGQlEzcENMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU53UWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU14UWp0UlFVTkVMRTFCUVUwc1pVRkJaU3hIUVVGSExFTkJRVU1zUTBGQlF5eGxRVUZsTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZETjBRc1UwRkJVenRSUVVOVUxHVkJRV1VzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRTFCUVUwc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdFpRVU16UkN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUVUZCWjBJc1EwRkJRenRSUVVNelF5eERRVUZETEVOQlFVTTdVVUZEUml4VFFVRlRPMUZCUTFRc1pVRkJaU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM0pGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1lVRkJZU3hGUVVGRk8yZENRVU01UWl4TFFVRkxPMmRDUVVOTUxFMUJRVTA3WVVGRFVDeERRVUZETzFGQlEwb3NRMEZCUXl4RFFVRkRPMUZCUTBZc1kwRkJZenRSUVVOa0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRlRUlzWlVGQlpTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzJkQ1FVTXpSQ3gzUWtGQmQwSTdaMEpCUTNoQ0xFbEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlR0dlFrRkRkRUlzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4WlFVRlpMRVZCUVVVN2FVSkJRMnhETzJkQ1FVTkVMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzVFVGQlowSTdaMEpCUlhKRExFbEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSVHR2UWtGRGJrTXNPRUpCUVRoQ08yOUNRVU01UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGZEJRVmNzUlVGQlJUdHBRa0ZEYWtNN2NVSkJRVTA3YjBKQlEwd3NiVUpCUVcxQ08yOUNRVU51UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eEZRVUZGTzNkQ1FVTTFRaXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEZkQlFWY3NRMEZETlVJc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZETlVRN2NVSkJRMFk3YVVKQlEwWTdXVUZEU0N4RFFVRkRMRU5CUVVNN1UwRkRTRHRSUVVORUxHVkJRV1VzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVWNFF5eGxRVUZsTzFGQlEyWXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVWd1F5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMR1ZCUVdVN1VVRkRiRU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnp0SlFVTjZRaXhEUVVGRE8wbEJRMU1zYVVKQlFXbENMRU5CUVVNc1NVRkJhMEk3VVVGRE5VTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUXpWRExFTkJRVU03U1VGRFV5eFhRVUZYTEVOQlFVTXNUMEZCTkVJN1VVRkRhRVFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4cFJVRkJXU3hEUVVONlFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVTnVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVU5hTEU5QlFVOHNRMEZEWlR0SlFVTXhRaXhEUVVGRE8wbEJRMU1zVjBGQlZ6dFJRVU51UWl4clFrRkJhMEk3VVVGRGJFSXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEZRVUZGTzFGQlEzcENMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSVUZCUlR0UlFVTXhRaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVN1VVRkRlRUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRE4wSXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZoTzFsQlJXcEZMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzSzBOQlFVMHNRMEZEZGtJc1EwRkJReXhMUVVGTExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZET1VNN1owSkJRMFVzU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hEUVVGRE8yRkJReTlDTEVOQlEwWTdXVUZGUkN4clFrRkJhMEk3V1VGRGJFSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU03V1VGRGNFSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzFGQlF6TkNMRU5CUVVNc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGRFV5eFZRVUZWTzFGQlEyeENMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFbEJRVWtzUTBGQlF6dFJRVU5xUkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFVTkVMR2xDUVVGcFFqdEpRVU5VTEd0Q1FVRnJRaXhEUVVGRExFMUJRV01zUlVGQlJTeFRRVUZ0UWp0UlFVTTFSQ3hKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEUxQlFVMDdVVUZETTBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTjBRaXhaUVVGWk8xbEJRMW9zU1VGQlNTeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVU3WjBKQlF6ZENMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dGhRVU12UXp0WlFVTkVMRmRCUVZjN1dVRkRXQ3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRWRCUVVjc1NVRkJTU3dyUTBGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSVHRuUWtGRGVrUXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WVVGRGFrUXNRMEZCUXp0WlFVTkdMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF6dFpRVU42UXl4blFrRkJaMEk3V1VGRGFFSXNTVUZCU1N4RFFVRkRMRzlDUVVGdlFqdHBRa0ZEZEVJc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03YVVKQlEycEVMRk5CUVZNc1JVRkJSVHRaUVVOa0xFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NSVUZCUlR0blFrRkRPVU1zU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFMUJRVTBzUlVGQlJUdFpRVU53UXl4RFFVRkRMRU5CUVVNN1UwRkRTRHRSUVVORUxFMUJRVTBzUTBGQlF5eFpRVUZaTEVWQlFVVTdVVUZGY2tJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF6dFJRVU01UXl4SlFVRkpMRk5CUVZNc1JVRkJSVHRaUVVOaUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRjRVE3VVVGRFJDeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTEUxQlFVMHNRMEZCUXp0SlFVTTNReXhEUVVGRE8wbEJRMDhzYTBKQlFXdENPMUZCUTNoQ0xGTkJRVk03VVVGRFZDeEpRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVN1dVRkRja0lzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1UwRkRNMEk3VVVGRFJDeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0WlFVTjJReXhyUWtGQmEwSXNSVUZCUlN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJRenRUUVVOMlJDeERRVUZETzFGQlEwWXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhUUVVGVExFTkJRM3BDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEY2tJc1RVRkJUU3hOUVVGTkxFZEJRVWNzU1VGQlNTd3JRMEZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJUdG5Ra0ZEZGtNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yRkJRM1JETEVOQlFVTTdXVUZEUml4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0WlFVTXpRaXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJRenRaUVVOdVJTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1dVRkRlRVFzVFVGQlRTeERRVUZETEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRk8yZENRVU4wUWl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUVUZCVFN4RFFVRkRPMWxCUTJwRExFTkJRVU1zUTBGQlF6dFpRVU5HTEU5QlFVOHNUVUZCVFR0UlFVTm1MRU5CUVVNc1EwRkJReXhEUVVOSU8xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1R0SlFVTXhRaXhEUVVGRE8wbEJSVVFzWVVGQllUdEpRVU5NTEdWQlFXVTdVVUZEY2tJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEyeENMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeEZRVUZGTzFOQlEzaENPMUZCUTBRc1RVRkJUU3hKUVVGSkxFZEJRV0VzUlVGQlJUdFJRVU42UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUXpsQ0xFMUJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVN1dVRkRha01zVFVGQlRTeGhRVUZoTEVkQlEycENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExHRkJRV0U3V1VGRGNFVXNTVUZCU1N4SFFVRkhMRWRCUTB3c1EwRkJReXhoUVVGaExFbEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8yZENRVU5zUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITzFsQlF6bENMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUZGTzJkQ1FVTXpRaXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSenRoUVVOdVF6dFpRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8xbEJRMlFzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU42UkN4RFFVRkRMRU5CUVVNN1VVRkRSaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUXpGQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTTdXVUZET1VJc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVkQlFVYzdXVUZEYkVJc1JVRkJSU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVkQlFVYzdXVUZEYkVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFRRVU5hTEVOQlFVTXNSVUZEUml4cFJVRkJXU3hEUVVGRExFVkJRVVVzVlVGQlZTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlF6VkVPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV6dEpRVU4yUWl4RFFVRkRPMGxCUlVRc1lVRkJZVHRKUVVOTUxHbENRVUZwUWp0UlFVTjJRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdXVUZEY0VJc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eE5RVUZOTEVWQlFVVTdVMEZETVVJN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXl4VlFVRlZMRVZCUVVVN1VVRkRha01zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU01UWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFsQlF6RkVMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdXVUZET1VRc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4cFFrRkJhVUlzU1VGQlNTdzBSRUZCVHl4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVOc1JTeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHbENRVUZwUWp0WlFVTTNReXhOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRzFDUVVGdFFqdFpRVU5vUkN4TlFVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdsQ1FVRnBRanRaUVVOc1JDeE5RVUZOTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZCUlR0blFrRkRhRVFzVFVGQlRUdG5Ra0ZEVGl4TFFVRkxPMmRDUVVOTUxGTkJRVk03WjBKQlExUXNUVUZCVFR0blFrRkRUaXhQUVVGUE8yZENRVU5RTEZkQlFWYzdZVUZEV2l4RFFVRkRPMWxCUTBZc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlR0blFrRkRkRUlzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTNwRU8xbEJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSVHRuUWtGRGVFSXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZETjBRN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRia01zUTBGQlF5eERRVUZETzFGQlEwWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1YwRkJWenRKUVVONlFpeERRVUZETzBsQlJVOHNiVUpCUVcxQ0xFTkJRVU1zU1VGQmEwSTdVVUZETlVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dEpRVVZQTEdGQlFXRXNRMEZCUXl4SlFVRnJRanRSUVVOMFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF6dEpRVU42UXl4RFFVRkRPMGxCUlVRc05rSkJRVFpDTzBsQlEzSkNMR05CUVdNc1EwRkRjRUlzU1VGQmEwSXNSVUZEYkVJc1VVRkJhVUk3VVVGRmFrSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTzFGQlEzUkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlR0UlFVTXhReXhOUVVGTkxHTkJRV01zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkhNMFE3VVVGRFJDeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVZHFSVHRSUVVWRUxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenRSUVVWNFF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRemRDTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRMW9zYTBKQlFXdENPMmRDUVVOc1FpeDNRMEZCZDBNN1owSkJRM2hETEc5RVFVRnZSRHRuUWtGRGNFUXNaMEpCUVdkQ08yZENRVU5vUWl4TFFVRkxPMkZCUTA0N1dVRkRSQ3hMUVVGTExGbEJRVmtzUTBGQlF6dFpRVU5zUWl4TFFVRkxMRkZCUVZFc1EwRkJRenRaUVVOa0xFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTTdaMEpCUTJRc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETzI5Q1FVTm1MRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hGUVVGRk8zZENRVU5xUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFN2QwSkJRemxETEZOQlFWTTdjVUpCUTFZc1EwRkJRenR2UWtGRFJpeFRRVUZUTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRGJFUXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJPMjlDUVVNNVF5eFZRVUZWTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWVHR2UWtGRGNFUXNZVUZCWVN4RlFVRkZMRkZCUVZFN2QwSkJRM0pDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDNRa0ZETDBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHZRa0ZETTBJc1YwRkJWeXhGUVVGRkxGRkJRVkU3ZDBKQlEyNUNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRMMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0cFFrRkROVUlzUTBGQlF6dGhRVU5JTzFsQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRMUFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4clFrRkJhMElzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRoUVVNelJEdFRRVU5HTzBsQlEwZ3NRMEZCUXp0SlFVTlBMR2xDUVVGcFFpeERRVU4yUWl4SlFVRnJRaXhGUVVOc1FpeFBRVUU0UWp0UlFVVTVRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZPMWxCUXpkQ0xFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXp0WlFVTnNSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFTkJRVU03VTBGRGFFUTdVVUZEUkN4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTTdVVUZEYkVNc1VVRkJVU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEc5Q1FVRnZRaXhGUVVGRk8xbEJRM3BETEV0QlFVc3NVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRMklzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenRuUWtGRE9VSXNUVUZCU3p0aFFVTk9PMWxCUTBRc1MwRkJTeXhaUVVGWkxFTkJRVU1zUTBGQlF6dG5Ra0ZEYWtJc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHpRa0ZCYzBJc1EwRkJReXhKUVVGSkxFTkJRVU03WjBKQlEzcERMRTFCUVVzN1lVRkRUanRaUVVORUxFdEJRVXNzVjBGQlZ5eERRVUZETEVOQlFVTTdaMEpCUTJoQ0xFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVTXhReXhOUVVGTE8yRkJRMDQ3V1VGRFJDeFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRVQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVU5pTERSQ1FVRTBRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEc5Q1FVRnZRaXhIUVVGSExFTkJRMnBGTzJGQlEwWTdVMEZEUmp0UlFVTkVMRkZCUVZFc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVTdXVUZETjBJc1YwRkJWenRaUVVOWUxFdEJRVXNzV1VGQldTeERRVUZETEVOQlFVTTdaMEpCUTJwQ0xFOUJRVTg3YzBKQlEwOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVE96dDFRa0ZGY2tJc1MwRkJTenN5UWtGRFJDeFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenM3TzFOQlIzSkRPMkZCUTBZN1dVRkRSQ3hUUVVGVE8xbEJRMVFzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRZaXhQUVVGUE96c3JRa0ZGWjBJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWT3p0VFFVVTNRenRoUVVOR08xbEJRMFFzWVVGQllUdFpRVU5pTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN1owSkJRMlFzVDBGQlR6czdjVUpCUlUwc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUT3p0MVFrRkZjRUlzUzBGQlN6c3lRa0ZEUkN4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6czdPMk5CUjJoRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnpzN1UwRkZOMEk3WVVGRFJqdFRRVU5HTzBsQlEwZ3NRMEZCUXp0SlFVTlBMRzFDUVVGdFFqdFJRVU42UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGpRVUZqTEVWQlFVVTdXVUZEYUVNc1QwRkJUVHRUUVVOUU8xRkJSVVFzVFVGQlRTeEhRVUZITEVkQlFYbERMRVZCUVVVN1VVRkRjRVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGak8xRkJRM2hETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdXVUZETjBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZPMmRDUVVOeVFpeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU4yUkR0cFFrRkJUVHRuUWtGRFRDeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRMnhETzFGQlEwZ3NRMEZCUXl4RFFVRkRPMUZCUTBZc1RVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRha01zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRVZCUVVVN1VVRkROMElzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZPMWxCUTNKRExFbEJRVWtzUzBGQlN5eEhRVUZITEU5QlFVODdXVUZEYmtJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdaMEpCUTJoRUxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2RDUVVGblFpeERRVUZETEV0QlFVc3NRMEZCUXp0aFFVTTNRenRaUVVORUxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eExRVUZMTzFsQlEzSkRMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJRelZDTEVsQlFVazdaMEpCUTBvc1MwRkJTenRuUWtGRFRDeEpRVUZKTzJGQlEwd3NRMEZCUXp0UlFVTktMRU5CUVVNc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGRFR5eHBRa0ZCYVVJN1VVRkRka0lzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRk8xbEJRMmhETEU5QlFVMDdVMEZEVUR0UlFVTkVMRTFCUVUwc2EwSkJRV3RDTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRUdFJRVU14UkN4SlFVRkpMRlZCUVZVc1IwRkJSeXhEUVVGRExGRkJRVkU3VVVGRE1VSXNTVUZCU1N4VlFVRlZMRWRCUVVjc1VVRkJVVHRSUVVONlFpeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RFFVRkRPMWxCUTJwRUxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1JVRkJSU3hQUVVGUExFTkJRVU03V1VGRE1VTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVlVGQlZTeEZRVUZGTEU5QlFVOHNRMEZCUXp0VFFVTXpRenRSUVVORUxFMUJRVTBzVVVGQlVTeEhRVUZITEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eHJRa0ZCYTBJN1VVRkRia1VzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4VlFVRlZPMUZCUTJoRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NVVUZCVVR0UlFVVXZRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4bFFVRmxMRVZCUVVVN1dVRkRha01zVDBGQlRUdFRRVU5RTzFGQlJVUXNUVUZCVFN4SFFVRkhMRWRCUVhsRExFVkJRVVU3VVVGRGNFUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTzFGQlEzcERMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVN1dVRkROMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhGUVVGRk8yZENRVU55UWl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTjJSRHRwUWtGQlRUdG5Ra0ZEVEN4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEyeERPMUZCUTBnc1EwRkJReXhEUVVGRE8xRkJRMFlzVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU03VVVGRGFrTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhIUVVGSExFVkJRVVU3VVVGRE1VSXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRk8xbEJRM0pETEVsQlFVa3NTMEZCU3l4SFFVRkhMRTlCUVU4N1dVRkRia0lzU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEZRVUZGTzJkQ1FVTTFReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1MwRkJTeXhEUVVGRE8yRkJRM3BETzFsQlEwUXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eExRVUZMTzFsQlEyeERMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJRM3BDTEVsQlFVazdaMEpCUTBvc1MwRkJTenRuUWtGRFRDeEpRVUZKTzJGQlEwd3NRMEZCUXp0UlFVTktMRU5CUVVNc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGRFR5eHpRa0ZCYzBJc1EwRkJReXhKUVVGclFqdFJRVU12UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0SlFVTnVSU3hEUVVGRE8wbEJRMDhzYTBKQlFXdENPMUZCUTNoQ0xFMUJRVTBzWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTA3VVVGRE0wUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhSUVVGUk8xRkJRM1JDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRkZCUVZFN1VVRkRja0lzUzBGQlN5eE5RVUZOTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRMmhETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTTFReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRE8xbEJRemxDTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTTdVMEZETDBJN1VVRkRSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzWlVGQlpUdFJRVU53UkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFMUJRVTA3VVVGRE1VSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhKUVVGSk8wbEJRek5DTEVOQlFVTTdTVUZEVHl4MVFrRkJkVUlzUTBGQlF5eEpRVUZyUWp0UlFVTm9SQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU03VVVGRE5VTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlEzaERMRkZCUVZFc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUTJ4Rk8xRkJRMFFzVDBGQlR5eExRVUZMTzBsQlEyUXNRMEZCUXp0SlFVTlBMRzlDUVVGdlFpeERRVUZETEVsQlFXdENPMUZCUXpkRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF6dFJRVU0zUXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZEYmtNc1VVRkJVU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkRkRVU3VVVGRFJDeFBRVUZQTEVsQlFVazdTVUZEWWl4RFFVRkRPMGxCUTA4c2NVSkJRWEZDTEVOQlFVTXNTVUZCYTBJN1VVRkRPVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMGxCUTJwRkxFTkJRVU03U1VGRFR5eGxRVUZsTEVOQlFVTXNTVUZCYTBJN1VVRkRlRU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRek5DTEU5QlFVOHNSVUZCUlR0VFFVTldPMUZCUTBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVNNVF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3VTBGRGNFVTdVVUZEUkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpsRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFdEJRM0JETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlEyNURMRVZCUVVVN1UwRkRTRHRKUVVOSUxFTkJRVU03U1VGRFR5eHJRa0ZCYTBJc1EwRkJReXhQUVVGNVFqdFJRVU5zUkN4TlFVRk5MRTFCUVUwc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeFRRVUZUTEVWQlFVVXNVMEZCVXl4RlFVRkZMRk5CUVZNc1EwRkJRenRSUVVNelJDeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTA3VVVGRGJrTXNUVUZCVFN4SlFVRkpMRWRCUVVjc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTzFGQlEyNURMRTFCUVUwc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTk8xRkJRelZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV6dFJRVU5zUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRE8xRkJRMklzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMSE5DUVVGelFpeExRVUZMTEU5QlFVOHNSVUZCUlR0WlFVTnVSQ3hMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03V1VGRGFFVXNTMEZCU3p0blFrRkRTQ3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVTBGQlV6dHZRa0ZEYkVVc1NVRkJTVHRUUVVOUU8xRkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMWxCUTJZc1NVRkJTU3hGUVVGRk96czdPenM3T3l0Q1FVOXRRaXhMUVVGTExFdEJRVXNzUzBGQlN6czdPenM3T3pCQ1FVMXdRaXcwUkVGQlR5eERRVUZETEV0QlFVc3NRMEZCUXpzN096czdPenM3T3pzN096QkNRVmxrTEV0QlFVczdPenM3T3pzN096czdPenM3T3pzN096czdPMWxCYjBKdVFpeFBRVUZQTEVOQlFVTXNZVUZCWVN4RlFVRkZPenM3VDBGSE5VSTdXVUZEUkN4UlFVRlJMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzFOQlEyNUNMRU5CUVVNN1NVRkRTaXhEUVVGRE8wTkJRMFk3T3pzN096czdPenM3T3pzN1FVTndNa0pFTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVN0Q08wRkJRM0ZETzBGQlIzSkVMRTFCUVUwc1ZVRkJWeXhUUVVGUkxITkVRVUZoTzBsQlJXNUVMRmxCUTBVc1IwRkJWU3hGUVVOV0xGRkJRWGRDTEVWQlEzaENMRTlCUVRSQ0xFVkJRelZDTEZkQlFYZENPMUZCUlhoQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNVVUZCVVN4RlFVRkZMRTlCUVU4c1JVRkJSU3hYUVVGWExFTkJRVU03VVVGRE1VTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVTk5MRTFCUVUwN1VVRkRXQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTnFRaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0VFFVTndRanRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSVHRSUVVOdVF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlF6ZENMSEZFUVVGeFJEdFJRVU55UkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8xRkJRM0JDTEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzFGQlEzQkNMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU03VVVGRFVDeFBRVUZQTEVsQlFVazdTVUZEWWl4RFFVRkRPMGxCUTAwc1lVRkJZU3hEUVVGRExFOUJRV2RDTzFGQlEyNURMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRhRU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVVN1owSkJRM2hDTEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU5xUkR0UlFVTklMRU5CUVVNc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGRFV5eFRRVUZUTzFGQlEycENMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnNSQ3hEUVVGRE8wbEJRMDhzWVVGQllUdFJRVU51UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSVHRSUVVNMVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRk8xbEJRelZDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdaMEpCUTJoRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVGRk8yOUNRVU0zUkN4VFFVRlRMRVZCUVVVc1NVRkJTVHR2UWtGRFppeFRRVUZUTEVWQlFVVXNVVUZCVVR0cFFrRkRjRUlzUTBGQlF6dFpRVU5LTEVOQlFVTXNRMEZCUXp0VFFVTklPMGxCUTBnc1EwRkJRenRKUVVOUExHVkJRV1U3VVVGRGNrSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTzFGQlEyeERMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdFpRVU0xUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVczdXVUZET1VJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEhOQ1FVRnpRaXhMUVVGTExGZEJRVmNzUlVGQlJUdG5Ra0ZEZGtRc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdZVUZEZWtRN1dVRkRSQ3hOUVVGTkxFOUJRVThzUjBGQmMwSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0blFrRkRha1VzUzBGQlN6dGhRVU5PTEVOQlFVTTdXVUZEUml4bFFVRmxPMWxCUTJZc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeG5SRUZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVOQlFVTTdXVUZETjBRc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1dVRkRja01zVlVGQlZTeERRVUZETEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRk8yZENRVU14UWl4dlEwRkJiME03V1VGRGRFTXNRMEZCUXl4RFFVRkRPMWxCUTBZc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlR0blFrRkRNVUlzVlVGQlZTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTJwRk8xbEJRMFFzVDBGQlR5eFZRVUZWTzFGQlEyNUNMRU5CUVVNc1EwRkJRenRSUVVOR0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRGFFTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETzFGQlEzSkRMRU5CUVVNc1EwRkJRenRSUVVOR0xFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWazdTVUZETVVJc1EwRkJRenRKUVVOUExGZEJRVmM3VVVGRGFrSXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYUVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5hTEU5QlFVMDdVMEZEVUR0UlFVTkVMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRMmhDTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZETjBJc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGRE9VTTdTVUZEU0N4RFFVRkRPMGxCUTA4c2FVSkJRV2xDTEVOQlFVTXNUMEZCWjBJN1VVRkRlRU1zVDBGQlR5eERRVU5NTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnFSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEd0Q1FVRnJRaXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGRGJFVTdTVUZEU0N4RFFVRkRPMGxCUTA4c2EwSkJRV3RDTEVOQlFVTXNWVUZCYTBJN1VVRkRNME1zVDBGQlR5eFZRVUZWTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVN1NVRkROMElzUTBGQlF6dEpRVU5QTEdkQ1FVRm5RanRSUVVOMFFpeE5RVUZOTEVsQlFVa3NSMEZEVWl4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eExRVUZMTEZGQlFWRTdXVUZEZUVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXp0WlFVTjRRaXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTenRSUVVOc1F5eFBRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJPMkZCUTJwQ0xFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU03WVVGRGNrUXNUVUZCVFN4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTzFsQlEzSkNMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRPMUZCUXpkQ0xFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEVkN4RFFVRkRPME5CUTBZN096czdPenM3T3pzN096czdRVU14UjBRN1FVRkJRVHRCUVVGbExFMUJRVTBzVDBGQlVTeFRRVUZSTEVOQlFVTXNRMEZCUXl4UFFVRlBPMGxCUnpWRExGbEJRMFVzVDBGSE5FSXNSVUZETlVJc1QwRkJNa0k3VVVGRk0wSXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU03U1VGRGVrSXNRMEZCUXp0SlFVTk5MRTlCUVU4c1EwRkJReXhKUVVGclFqdFJRVU12UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFbEJRVWs3U1VGRGNFSXNRMEZCUXp0SlFVTk5MRTlCUVU4N1VVRkRXaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTzBsQlEzQkNMRU5CUVVNN1EwRkRSanM3T3pzN096czdPenM3T3p0QlEzQkNSRHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUU0UkR0QlFVVXZRanRCUVUwdlFpeE5RVUZOTEdGQlFXRXNSMEZCUnl4VFFVRlRPMEZCYlVKb1FpeE5RVUZOTEdGQlFXRTdTVUV3UW1oRExGbEJRMFVzUjBGQlZTeEZRVU5XTEZGQlFYZENMRVZCUTNoQ0xFOUJRVFJDTEVWQlF6VkNMRmRCUVhkQ08xRkJSWGhDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEZGQlFWRXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRM0pFTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTTdVMEZEY0VNN1VVRkZSQ3hKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITzFsQlEzQkNMRk5CUVZNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSVHRaUVVONlF5eFhRVUZYTEVWQlFVVXNUVUZCVFR0WlFVTnVRaXhMUVVGTExFVkJRVVVzWVVGQllUdFpRVU53UWl4SlFVRkpMRVZCUVVVc1NVRkJTVHRaUVVOV0xGTkJRVk1zUlVGQlJTeGhRVUZoTzFsQlEzaENMRTFCUVUwc1JVRkJSU3hEUVVGRE8xbEJRMVFzVDBGQlR5eEZRVUZGTEVOQlFVTTdXVUZEVml4WFFVRlhMRVZCUVVVc1IwRkJSenRaUVVOb1FpeHpRa0ZCYzBJc1JVRkJSU3hSUVVGUk8xbEJRMmhETEdWQlFXVXNSVUZCUlN4RFFVRkRMR0ZCUVdFc1EwRkJRenRaUVVOb1F5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRExHRkJRV0VzUTBGQlF6dFRRVU5zUXp0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzVTBGQlV6dFJRVU55UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWM3VVVGRFpDeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFN1VVRkRlRUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4cFJVRkJXU3hEUVVONlFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4RlFVTnVRaXhQUVVGUExFTkJRMlU3VVVGRGVFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhYUVVGWE8xRkJSVGxDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTVHRSUVVOdVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRVZCUVVVN1VVRkRiRUlzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4UlFVRlJPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXp0UlFVTjBRaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1JVRkJSVHRSUVVNeFFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrN1VVRkRNVUlzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhIUVVGSExFbEJRVWs3U1VGRGJrTXNRMEZCUXp0SlFVTk5MRWxCUVVrc1EwRkJReXhQUVVFMlFqdFJRVU4yUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF6dFJRVU42UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRk8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVN1VVRkRhRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMGxCUTNSQ0xFTkJRVU03U1VGRFRTeE5RVUZOTzFGQlExZ3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGRGFrSXNUMEZCVFR0VFFVTlFPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3VTBGRGNFSTdVVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSVHRSUVVOMFF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlF6ZENMRTlCUVU4c1NVRkJTVHRKUVVOaUxFTkJRVU03U1VGRFRTeFRRVUZUTzFGQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkROMFFzUTBGQlF6dEpRVU5OTEZOQlFWTTdVVUZEWkN4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RlFVRkZPMU5CUXpWQ08xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkRla0lzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhGUVVNM1F5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVTmFMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFVkJRek5ETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUXpWRExFTkJRMFk3U1VGRFNDeERRVUZETzBsQlEwMHNUMEZCVHp0UlFVTmFMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5rTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZEYWtNN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSVHRaUVVNNVFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNN1UwRkRha1E3U1VGRFNDeERRVUZETzBsQlEwMHNZVUZCWVN4RFFVRkRMRTlCUVdkQ08xRkJRMjVETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1QwRkJUenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRaUVVObUxFOUJRVTA3VTBGRFVEdFJRVU5FTEVsQlFVa3NUMEZCVHl4RlFVRkZPMWxCUTFnc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRUUVVNNVFqdGhRVUZOTzFsQlEwd3NTVUZCU1N4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVTdaMEpCUXpsQ0xFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhOUVVGTkxFVkJRVVU3WVVGRGNFTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUTJwRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEZkQlFWY3NRMEZCUXl4TFFVRmhPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4SFFVRkhMRXRCUVVzN1VVRkRPVUlzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0SlFVTm1MRU5CUVVNN1NVRkRUU3hMUVVGTExFTkJRVU1zUlVGQlZUdFJRVU55UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZPMWxCUTJoRExFbEJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVU3WjBKQlF5OUNMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRE8yZENRVU4yUXl4UFFVRk5PMkZCUTFBN1VVRkRTQ3hEUVVGRExFTkJRVU03U1VGRFNpeERRVUZETzBsQlEwMHNiMEpCUVc5Q08xRkJRM3BDTEU5QlFVOHNTVUZCU1N4RFFVRkRMR2xDUVVGcFFqdEpRVU12UWl4RFFVRkRPMGxCUTBRc2IwTkJRVzlETzBsQlF6RkNMRk5CUVZNc1MwRkJTU3hEUVVGRE8wbEJRMlFzYVVKQlFXbENMRU5CUVVNc1NVRkJhMEk3VVVGRE5VTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUXpWRExFTkJRVU03U1VGRFV5eGxRVUZsTEVOQlFVTXNTVUZCYTBJN1VVRkRNVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRek5DTEU5QlFVOHNSVUZCUlR0VFFVTldPMUZCUTBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVNNVF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3VTBGRGNFVTdVVUZEUkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpsRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFdEJRM0JETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlEyNURMRVZCUVVVN1UwRkRTRHRKUVVOSUxFTkJRVU03U1VGRFV5eHRRa0ZCYlVJN1VVRkRNMElzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRk8xbEJRMmhETEU5QlFVMDdVMEZEVUR0UlFVVkVMRTFCUVUwc1IwRkJSeXhIUVVGNVF5eEZRVUZGTzFGQlEzQkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXp0UlFVTjRReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRk8xbEJRemRDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJUdG5Ra0ZEY2tJc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRka1E3YVVKQlFVMDdaMEpCUTB3c1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnNRenRSUVVOSUxFTkJRVU1zUTBGQlF6dFJRVU5HTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETzFGQlEycERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eEZRVUZGTzFGQlF6TkNMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJUdFpRVU55UXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhQUVVGUE8xbEJRMjVDTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU5vUkN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU03WVVGRE4wTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1MwRkJTenRaUVVOdVF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVTXhRaXhKUVVGSk8yZENRVU5LTEV0QlFVczdaMEpCUTB3c1NVRkJTVHRoUVVOTUxFTkJRVU03VVVGRFNpeERRVUZETEVOQlFVTTdTVUZEU2l4RFFVRkRPMGxCUTFNc2RVSkJRWFZDTEVOQlFVTXNTVUZCYTBJN1VVRkRiRVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03U1VGRGFrVXNRMEZCUXp0SlFVTlRMR3RDUVVGclFqdFJRVU14UWl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5PMUZCUXpORUxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNVVUZCVVR0UlFVTjBRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eFJRVUZSTzFGQlEzSkNMRXRCUVVzc1RVRkJUU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU03V1VGRE5VTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXp0WlFVTTVRaXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRE8xTkJReTlDTzFGQlEwUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMR1ZCUVdVN1VVRkRjRVFzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4TlFVRk5PMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1R0SlFVTXpRaXhEUVVGRE8wbEJRMU1zZDBKQlFYZENMRU5CUVVNc1NVRkJhMEk3VVVGRGJrUXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRPMUZCUXpWRExFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVONFF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVU5zUlR0UlFVTkVMRTlCUVU4c1MwRkJTenRKUVVOa0xFTkJRVU03U1VGRFV5eHRRa0ZCYlVJc1EwRkJReXhQUVVGblFpeEZRVUZGTEZOQlFXMUNPMUZCUTJwRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NUMEZCVHp0UlFVTTNRaXhqUVVGak8xRkJRMlFzU1VGQlNTeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVU3V1VGRE9VSXNTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeERRVUZETEUxQlFVMHNSVUZCUlR0VFFVTndRenRSUVVORUxHRkJRV0U3VVVGRFlpeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFZEJRVWNzU1VGQlNTeG5SRUZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJUdFpRVU0zUkN4TFFVRkxMRVZCUVVVc1lVRkJZVHRaUVVOd1FpeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdVMEZETlVNc1EwRkJRenRSUVVOR0xFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVVXhReXhKUVVGSkxFTkJRVU1zY1VKQlFYRkNPMkZCUTNaQ0xGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEyeEVMRk5CUVZNc1JVRkJSVHRSUVVWa0xFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTXZReXhKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1RVRkJUU3hGUVVGRk8xRkJRM0pETEVOQlFVTXNRMEZCUXp0UlFVTkdMRTlCUVU4c1EwRkJReXhaUVVGWkxFVkJRVVU3VVVGRmRFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFGQlEzUkVMRWxCUVVrc1UwRkJVeXhGUVVGRk8xbEJRMklzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFOQlEzaERPMUZCUTBRc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hQUVVGUExFTkJRVU03U1VGREwwTXNRMEZCUXp0SlFVTlRMRmRCUVZjc1EwRkJReXhQUVVFMFFqdFJRVU5vUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbEZRVUZaTEVOQlEzcENMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRMjVDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUTFvc1QwRkJUeXhEUVVObE8wbEJRekZDTEVOQlFVTTdTVUZEVXl4WlFVRlpPMUZCUTNCQ0xHdENRVUZyUWp0UlFVTnNRaXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVN1VVRkRla0lzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhGUVVGRk8xRkJRekZDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1JVRkJSVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTzFsQlF6ZENMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEdkRVFVRlBMRU5CUVVVc1MwRkJiVUlzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0WlFVVTVSQ3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTnlRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1VVRkROMElzUTBGQlF5eERRVUZETzBsQlEwb3NRMEZCUXp0SlFVTlBMR3RDUVVGclFqdFJRVU40UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUTBGQlF5eFZRVUZWTEVWQlFVVTdVVUZEYkVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTzFsQlF6VkRMRTFCUVUwc1QwRkJUeXhIUVVGelFpeHBSVUZCV1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzJkQ1FVTm9SU3hMUVVGTExFVkJRVVVzWVVGQllUdG5Ra0ZEY0VJc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yRkJRelZETEVOQlFVTTdXVUZEUml4bFFVRmxPMWxCUTJZc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeG5SRUZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVOQlFVTTdXVUZETjBRc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1dVRkRja01zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRE5VSXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEY2tVN1dVRkRSQ3hWUVVGVkxFTkJRVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVN1owSkJRekZDTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZEYmtNc1EwRkJReXhEUVVGRE8xbEJRMFlzVDBGQlR5eFZRVUZWTzFGQlEyNUNMRU5CUVVNc1EwRkJRenRSUVVOR0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRGFFTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETzFGQlEzSkRMRU5CUVVNc1EwRkJRenRSUVVOR0xFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWazdTVUZETVVJc1EwRkJRenRKUVVOUExGRkJRVkVzUTBGQlF5eEpRVUZyUWl4RlFVRkZMRWxCUVdkQ08xRkJRMjVFTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN6dFJRVU01UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zYzBKQlFYTkNMRXRCUVVzc1YwRkJWeXhGUVVGRk8xbEJRM1pFTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNTVUZCU1N4RFFVRkRPMU5CUXpWRE8xRkJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMSE5DUVVGelFpeExRVUZMTEZsQlFWa3NSVUZCUlR0WlFVTjRSQ3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFbEJRVWtzUTBGQlF6dFRRVU16UXp0UlFVTkVMRkZCUVZFc1NVRkJTU3hGUVVGRk8xbEJRMW9zUzBGQlN5eFJRVUZSTzJkQ1FVTllMRTlCUVU4c01rUkJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZEZEVJc1MwRkJTeXhUUVVGVE8yZENRVU5hTEU5QlFVOHNORVJCUVU4c1EwRkJReXhMUVVGTExFTkJRVU03V1VGRGRrSTdaMEpCUTBVc1QwRkJUeXhMUVVGTE8xTkJRMlk3U1VGRFNDeERRVUZETzBOQlEwWTdPenM3T3pzN096czdPenM3UVVNMVZFUTdRVUZCUVR0QlFVRmxMRTFCUVUwc1VVRkJVeXhUUVVGUkxFTkJRVU1zUTBGQlF5eFJRVUZSTzBsQlJ6bERMRmxCUVZrc1QwRkJhVU1zUlVGQlJTeFBRVUV5UWp0UlFVTjRSU3hMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXp0SlFVTjZRaXhEUVVGRE8wbEJRMDBzVDBGQlR5eERRVUZETEVsQlFXdENPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1R0SlFVTndRaXhEUVVGRE8wbEJRMDBzVDBGQlR6dFJRVU5hTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwN1NVRkRjRUlzUTBGQlF6dERRVU5HT3pzN096czdPenM3T3pzN08wRkRhRUpFTzBGQlFVRTdRVUZCUVR0QlFVRTJRenRCUVd0Q09VSXNUVUZCVFN4dlFrRkJjVUlzVTBGQlVTeDFSRUZCWXp0SlFVYzVSQ3haUVVORkxFZEJRVlVzUlVGRFZpeFJRVUYzUWl4RlFVTjRRaXhQUVVGdFF5eEZRVU51UXl4WFFVRjNRanRSUVVWNFFpeExRVUZMTEVOQlFVTXNSMEZCUnl4RlFVRkZMRkZCUVZFc1JVRkJSU3hQUVVGUExFVkJRVVVzVjBGQlZ5eERRVUZETzFGQlF6RkRMRTFCUVUwc1kwRkJZeXhIUVVFclFqdFpRVU5xUkN4MVFrRkJkVUlzUlVGQlJTeFJRVUZSTzFsQlEycERMR1ZCUVdVc1JVRkJSU3hEUVVGRExGTkJRVk1zUTBGQlF6dFpRVU0xUWl4UlFVRlJMRVZCUVVVc1IwRkJSenRaUVVOaUxFdEJRVXNzUlVGQlJTeFRRVUZUTzFsQlEyaENMRTlCUVU4c1JVRkJSU3hIUVVGSE8xTkJRMkk3VVVGRFJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4SFFVRkhMR2RDUVVGblFqdFJRVU0xUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWM3VVVGRFpDeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRkZCUVZFN1VVRkRlRUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NWMEZCVnp0UlFVVTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVazdVVUZEYmtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEZRVUZGTzFGQlEyNUNMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzVVVGQlVUdFJRVU0xUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU03VVVGRGRFSXNPRUpCUVRoQ08xRkJSVGxDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNZMEZCWXl4RlFVRkZMRTlCUVU4c1EwRkJRenRKUVVNelJDeERRVUZETzBsQlEwMHNTVUZCU1N4RFFVRkRMRTlCUVc5RE8xRkJRemxETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJRenRSUVVOdVJDeEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZPMUZCUTNCQ0xFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0SlFVTjBRaXhEUVVGRE8wbEJRMDBzVFVGQlRUdFJRVU5ZTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRMnBDTEU5QlFVMDdVMEZEVUR0UlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdFpRVU5rTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRk8xTkJRM0JDTzFGQlEwUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zZVVKQlFYbENMRVZCUVVVN1VVRkROME1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU0zUWl4UFFVRlBMRWxCUVVrN1NVRkRZaXhEUVVGRE8wbEJRMDBzVTBGQlV6dFJRVU5rTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0SlFVTjBReXhEUVVGRE8wbEJRMDBzVTBGQlV6dFJRVU5rTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6bENMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVTdVMEZETlVJN1VVRkRSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVTXhRaXhEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRVZCUXpkRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRemxDTzBsQlEwZ3NRMEZCUXp0SlFVTk5MRmRCUVZjc1EwRkJReXhMUVVGaE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhIUVVGSExFdEJRVXM3VVVGRE1VSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRKUVVObUxFTkJRVU03U1VGRFR5eDVRa0ZCZVVJN1VVRkRMMElzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xRkJRMjVETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVTdXVUZEYkVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZPMmRDUVVONFFpeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zVVVGQlVTeERRVUZETzFsQlEzSkRMRU5CUVVNc1EwRkJRenRaUVVOR0xFMUJRVTBzVDBGQlR5eEhRVUVyUWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVOMlJDeEZRVUZGTEVWQlEwWXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkRXanRuUWtGRFJTeExRVUZMTEVWQlEwZ3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXgxUWtGQmRVSXNTMEZCU3l4UlFVRlJPMjlDUVVNdlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTE8yOUNRVU53UWl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExIbENRVUY1UWl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU42UkN4RFFVTkdPMWxCUlVRc1RVRkJUU3hqUVVGakxFZEJRVWNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZET1VJc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeERRVU51UkN4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGRGJrTXNSVUZEUkN4UFFVRlBMRU5CUTFJN1dVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RlFVRkZPMmRDUVVNMVFpeGpRVUZqTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU4yUlR0WlFVTkVMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXp0UlFVTTNReXhEUVVGRExFTkJRVU03VVVGRFJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4aFFVRmhPMGxCUXpOQ0xFTkJRVU03UTBGRFJqczdPenM3T3pzN096czdPenRCUXk5SFJEdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRXJSRHRCUVVORU8wRkJkVUl2UXl4TlFVRk5MR05CUVdNN1NVRjVRbXBETEZsQlEwVXNSMEZCVlN4RlFVTldMRkZCUVhkQ0xFVkJRM2hDTEU5QlFUWkNMRVZCUXpkQ0xGZEJRWGRDTzFGQlJYaENMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzSkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1UwRkRjRU03VVVGRFJDeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhPMWxCUTNCQ0xFdEJRVXNzUlVGQlJTeFRRVUZUTzFsQlEyaENMSFZDUVVGMVFpeEZRVUZGTEZGQlFWRTdXVUZEYWtNc1pVRkJaU3hGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlF6VkNMRk5CUVZNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSVHRaUVVONlF5eFhRVUZYTEVWQlFVVXNUVUZCVFR0WlFVTnVRaXhuUWtGQlowSXNSVUZCUlN4RFFVRkRMRk5CUVZNc1EwRkJRenRUUVVNNVFqdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1ZVRkJWVHRSUVVOMFFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjN1VVRkRaQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRTdVVUZEZUVJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eHBSVUZCV1N4RFFVTjZRaXhKUVVGSkxFTkJRVU1zWTBGQll5eEZRVU51UWl4UFFVRlBMRU5CUTJkQ08xRkJRM3BDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1YwRkJWenRSUVVVNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrN1VVRkRia0lzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4RlFVRkZPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NVVUZCVVR0UlFVTTFRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTTdVVUZEZEVJc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SFFVRkhMRVZCUVVVN1VVRkRNVUlzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4SlFVRkpPMUZCUXpOQ0xFbEJRVWtzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhKUVVGSk8wbEJRM0JETEVOQlFVTTdTVUZEVFN4SlFVRkpMRU5CUVVNc1QwRkJPRUk3VVVGRGVFTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU03VVVGRGVrSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSVHRSUVVOd1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1NVRkRkRUlzUTBGQlF6dEpRVU5OTEUxQlFVMDdVVUZEV0N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5xUWl4UFFVRk5PMU5CUTFBN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEWkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU53UWp0UlFVTkVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhGUVVGRk8xRkJRM1pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZETjBJc1QwRkJUeXhKUVVGSk8wbEJRMklzUTBGQlF6dEpRVU5OTEZOQlFWTTdVVUZEWkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNM1JDeERRVUZETzBsQlEwMHNVMEZCVXp0UlFVTmtMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpsQ0xFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVN1UwRkROVUk3VVVGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVNeFFpeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRemRETEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUTFvc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUlVGRE5VTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkROME1zUTBGRFJqdEpRVU5JTEVOQlFVTTdTVUZEVFN4UFFVRlBPMUZCUTFvc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTnFRenRKUVVOSUxFTkJRVU03U1VGRFRTeGhRVUZoTEVOQlFVTXNUMEZCWjBJN1VVRkRia01zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMWxCUTJZc1QwRkJUVHRUUVVOUU8xRkJRMFFzU1VGQlNTeFBRVUZQTEVWQlFVVTdXVUZEV0N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUXpsQ08yRkJRVTA3V1VGRFRDeEpRVUZKTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUlVGQlJUdG5Ra0ZETDBJc1NVRkJTU3hEUVVGRExITkNRVUZ6UWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRoUVVOeVF6dFpRVU5FTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZEYWtNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEV0QlFXRTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3p0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBsQlEyWXNRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhGUVVGVk8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVTdXVUZEYkVNc1NVRkJTU3hSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkJSVHRuUWtGRGFFTXNTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNN1owSkJRM3BETEU5QlFVMDdZVUZEVUR0UlFVTklMRU5CUVVNc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGRFRTeHZRa0ZCYjBJN1VVRkRla0lzVDBGQlR5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ08wbEJReTlDTEVOQlFVTTdTVUZEVXl4WFFVRlhMRU5CUVVNc1QwRkJOa0k3VVVGRGFrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhwUlVGQldTeERRVU42UWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhGUVVOdVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVTmFMRTlCUVU4c1EwRkRaMEk3U1VGRE0wSXNRMEZCUXp0SlFVTlRMR0ZCUVdFN1VVRkRja0lzYTBKQlFXdENPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSVHRSUVVONlFpeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVU3VVVGRk1VSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRk8xbEJRekZETEUxQlFVMHNTMEZCU3l4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU55UkN4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxHbEVRVUZSTEVOQlF6RkNMRXRCUVc5Q0xFTkJRVU1zVlVGQlZTeEZRVUU0UWl4RFFVTXZSRHRaUVVORUxHdENRVUZyUWp0WlFVTnNRaXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0WlFVVjBRaXhQUVVGUExGRkJRVkU3VVVGRGFrSXNRMEZCUXl4RFFVRkRPMGxCUTBvc1EwRkJRenRKUVVOVExIbENRVUY1UWl4RFFVRkRMRWxCUVd0Q08xRkJRM0JFTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTTFReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkRlRU1zVVVGQlVTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGRGJFVTdVVUZEUkN4UFFVRlBMRXRCUVVzN1NVRkRaQ3hEUVVGRE8wbEJRMU1zYjBKQlFXOUNMRU5CUVVNc1VVRkJhMElzUlVGQlJTeFRRVUZ0UWp0UlFVTndSU3hKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEZGQlFWRTdVVUZETDBJc1kwRkJZenRSUVVOa0xFbEJRVWtzU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhGUVVGRk8xbEJReTlDTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdVMEZEY2tNN1VVRkRSQ3hoUVVGaE8xRkJRMklzU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhIUVVGSExFbEJRVWtzYVVSQlFWRXNRMEZEZUVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQk9FSXNSVUZEYWtRN1dVRkRSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03V1VGRGVFTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJRenRUUVVOMlJDeERRVU5HTzFGQlEwUXNTVUZCU1N4RFFVRkRMSE5DUVVGelFpeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJSVE5ETEVsQlFVa3NRMEZCUXl4elFrRkJjMEk3WVVGRGVFSXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRia1FzVTBGQlV5eEZRVUZGTzFGQlJXUXNTVUZCU1N4RFFVRkRMSE5DUVVGelFpeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1IwRkJSeXhGUVVGRk8xbEJRMmhFTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdVVUZEZEVNc1EwRkJReXhEUVVGRE8xRkJSVVlzVVVGQlVTeERRVUZETEZsQlFWa3NSVUZCUlR0UlFVVjJRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1VVRkRka1FzU1VGQlNTeFRRVUZUTEVWQlFVVTdXVUZEWWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1UwRkRla003VVVGRFJDeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTEZGQlFWRXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJRMU1zYVVKQlFXbENMRU5CUVVNc1NVRkJhMEk3VVVGRE5VTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUXpWRExFTkJRVU03U1VGRFV5eGxRVUZsTEVOQlFVTXNTVUZCYTBJN1VVRkRNVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRek5DTEU5QlFVOHNSVUZCUlR0VFFVTldPMUZCUTBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVNNVF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3VTBGRGNFVTdVVUZEUkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpsRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFdEJRM0JETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlEyNURMRVZCUVVVN1UwRkRTRHRKUVVOSUxFTkJRVU03U1VGRFR5eHRRa0ZCYlVJN1VVRkRla0lzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xRkJRMjVETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVTdXVUZEYkVNc1RVRkJUU3hQUVVGUExFZEJRWE5DTEdsRlFVRlpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUTJoRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU42UXl4RFFVRkRPMWxCUTBZc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeHBSRUZCVVN4RFFVTTVRaXhSUVVGUkxFTkJRVU1zVlVGQlZTeEZRVUU0UWl4RlFVTnFSQ3hQUVVGUExFTkJRMUk3V1VGRFJDeFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVU3WjBKQlF6TkNMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkRja01zUTBGQlF5eERRVUZETzFsQlEwWXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdXVUZEZGtNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkROVUlzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRGRrVTdXVUZEUkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZETVVNc1EwRkJReXhEUVVGRE8xRkJRMFlzVDBGQlR5eEpRVUZKTEVOQlFVTXNZVUZCWVR0SlFVTXpRaXhEUVVGRE8wbEJRMDhzYlVKQlFXMUNPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1JVRkJSVHRaUVVOb1F5eFBRVUZOTzFOQlExQTdVVUZGUkN4TlFVRk5MRWRCUVVjc1IwRkJlVU1zUlVGQlJUdFJRVU53UkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTTdVVUZEZUVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRaUVVNM1FpeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExFVkJRVVU3WjBKQlEzSkNMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTNaRU8ybENRVUZOTzJkQ1FVTk1MRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEYkVNN1VVRkRTQ3hEUVVGRExFTkJRVU03VVVGRFJpeE5RVUZOTEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF6dFJRVU5xUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOc1F5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFZEJRVWNzUlVGQlJUdFJRVU16UWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRGNrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1QwRkJUenRaUVVOdVFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRGFFUXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1MwRkJTeXhEUVVGRE8yRkJRemRETzFsQlEwUXNTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzN1dVRkRia01zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFbEJRVWtzUTBGQlF6dG5Ra0ZETVVJc1NVRkJTVHRuUWtGRFNpeExRVUZMTzJkQ1FVTk1MRWxCUVVrN1lVRkRUQ3hEUVVGRE8xRkJRMG9zUTBGQlF5eERRVUZETzBsQlEwb3NRMEZCUXp0SlFVTlBMSGRDUVVGM1FpeERRVUZETEVsQlFXdENPMUZCUTJwRUxFOUJRVThzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhEUVVGRE8wbEJRMnBGTEVOQlFVTTdTVUZEVHl4clFrRkJhMEk3VVVGRGVFSXNUVUZCVFN4bFFVRmxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTXNUVUZCVFR0UlFVTXpSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEZGQlFWRTdVVUZEZEVJc1NVRkJTU3hOUVVGTkxFZEJRVWNzVVVGQlVUdFJRVU55UWl4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRE8xbEJRelZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTTdXVUZET1VJc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJRenRUUVVNdlFqdFJRVU5FTEUxQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4bFFVRmxPMUZCUTNCRUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NUVUZCVFR0UlFVTXhRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVsQlFVazdTVUZETTBJc1EwRkJRenRKUVVOUExGRkJRVkVzUTBGQlF5eEpRVUZyUWl4RlFVRkZMRWxCUVdkQ08xRkJRMjVFTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN6dFJRVU01UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zZFVKQlFYVkNMRXRCUVVzc1YwRkJWeXhGUVVGRk8xbEJRM2hFTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2VVSkJRWGxDTEVOQlFVTXNTVUZCU1N4RFFVRkRPMU5CUXpkRE8xRkJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMSFZDUVVGMVFpeExRVUZMTEZsQlFWa3NSVUZCUlR0WlFVTjZSQ3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhEUVVGRExFbEJRVWtzUTBGQlF6dFRRVU0xUXp0UlFVTkVMRkZCUVZFc1NVRkJTU3hGUVVGRk8xbEJRMW9zUzBGQlN5eFJRVUZSTzJkQ1FVTllMRTlCUVU4c01rUkJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZEZEVJc1MwRkJTeXhUUVVGVE8yZENRVU5hTEU5QlFVOHNORVJCUVU4c1EwRkJReXhMUVVGTExFTkJRVU03V1VGRGRrSTdaMEpCUTBVc1QwRkJUeXhMUVVGTE8xTkJRMlk3U1VGRFNDeERRVUZETzBOQlEwWTdPenM3T3pzN096czdPenM3UVVOMlZFUTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVGhDTzBGQlJUbENMRk5CUVZNc1QwRkJUeXhEUVVGRExGRkJRV2RDTzBsQlF5OUNMRTlCUVU4c2EwTkJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdVMEZEYmtJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF6dFRRVU5hTEVkQlFVY3NSVUZCUlR0QlFVTldMRU5CUVVNN1FVRkRSQ3hUUVVGVExFMUJRVTBzUTBGQlF5eFJRVUZuUWp0SlFVTTVRaXhQUVVGUExHdERRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRPMU5CUTI1Q0xFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdVMEZEV0N4SFFVRkhMRVZCUVVVN1FVRkRWaXhEUVVGRE8wRkJSVVFzVTBGQlV5eFpRVUZaTEVOQlFVTXNSMEZCUnl4UFFVRmpPMGxCUTNKRExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1VVRkRlRUlzVDBGQlR5eEZRVUZGTzB0QlExWTdTVUZEUkN4SlFVRkpMRTlCUVU4c1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFGQlEzaENMRTlCUVU4c1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dExRVU5zUWp0SlFVTkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEZWtJc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVN1VVRkROVUlzU1VGQlNTeEhRVUZITEVsQlFVa3NUVUZCVFN4RlFVRkZPMWxCUTJwQ0xFbEJRVWtzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4TFFVRkxMR2xDUVVGcFFpeEZRVUZGTzJkQ1FVTnlSU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03WVVGRGVrUTdhVUpCUVUwN1owSkJRMHdzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTTdZVUZET1VJN1UwRkRSanRoUVVGTk8xbEJRMHdzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTTdVMEZET1VJN1MwRkRSanRKUVVORUxFOUJRVThzV1VGQldTeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYkVRc1EwRkJRenRCUVVWak8wbEJRMklzVDBGQlR6dEpRVU5RTEUxQlFVMDdTVUZEVGl4WlFVRlpPME5CUTJJN1FVRkRkVU1pTENKbWFXeGxJam9pYkdWaFpteGxkQzFzWVhsbGNpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJbXhsWVdac1pYUk5ZWEJjSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzVjZEdWc2MyVmNibHgwWEhSeWIyOTBXMXdpYkdWaFpteGxkRTFoY0Z3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIZHBibVJ2ZHl3Z1puVnVZM1JwYjI0b0tTQjdYRzV5WlhSMWNtNGdJaXdpSUZ4MEx5OGdWR2hsSUcxdlpIVnNaU0JqWVdOb1pWeHVJRngwZG1GeUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhNZ1BTQjdmVHRjYmx4dUlGeDBMeThnVkdobElISmxjWFZwY21VZ1puVnVZM1JwYjI1Y2JpQmNkR1oxYm1OMGFXOXVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvYlc5a2RXeGxTV1FwSUh0Y2JseHVJRngwWEhRdkx5QkRhR1ZqYXlCcFppQnRiMlIxYkdVZ2FYTWdhVzRnWTJGamFHVmNiaUJjZEZ4MGFXWW9hVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHBJSHRjYmlCY2RGeDBYSFJ5WlhSMWNtNGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVaWGh3YjNKMGN6dGNiaUJjZEZ4MGZWeHVJRngwWEhRdkx5QkRjbVZoZEdVZ1lTQnVaWGNnYlc5a2RXeGxJQ2hoYm1RZ2NIVjBJR2wwSUdsdWRHOGdkR2hsSUdOaFkyaGxLVnh1SUZ4MFhIUjJZWElnYlc5a2RXeGxJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjMXR0YjJSMWJHVkpaRjBnUFNCN1hHNGdYSFJjZEZ4MGFUb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBaWGh3YjNKMGN6b2dlMzFjYmlCY2RGeDBmVHRjYmx4dUlGeDBYSFF2THlCRmVHVmpkWFJsSUhSb1pTQnRiMlIxYkdVZ1puVnVZM1JwYjI1Y2JpQmNkRngwYlc5a2RXeGxjMXR0YjJSMWJHVkpaRjB1WTJGc2JDaHRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTENCdGIyUjFiR1V1Wlhod2IzSjBjeXdnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHlrN1hHNWNiaUJjZEZ4MEx5OGdSbXhoWnlCMGFHVWdiVzlrZFd4bElHRnpJR3h2WVdSbFpGeHVJRngwWEhSdGIyUjFiR1V1YkNBOUlIUnlkV1U3WEc1Y2JpQmNkRngwTHk4Z1VtVjBkWEp1SUhSb1pTQmxlSEJ2Y25SeklHOW1JSFJvWlNCdGIyUjFiR1ZjYmlCY2RGeDBjbVYwZFhKdUlHMXZaSFZzWlM1bGVIQnZjblJ6TzF4dUlGeDBmVnh1WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsY3lCdlltcGxZM1FnS0Y5ZmQyVmljR0ZqYTE5dGIyUjFiR1Z6WDE4cFhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG0wZ1BTQnRiMlIxYkdWek8xeHVYRzRnWEhRdkx5QmxlSEJ2YzJVZ2RHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVqSUQwZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pHVm1hVzVsSUdkbGRIUmxjaUJtZFc1amRHbHZiaUJtYjNJZ2FHRnliVzl1ZVNCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbVFnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6TENCdVlXMWxMQ0JuWlhSMFpYSXBJSHRjYmlCY2RGeDBhV1lvSVY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJ5aGxlSEJ2Y25SekxDQnVZVzFsS1NrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0J1WVcxbExDQjdJR1Z1ZFcxbGNtRmliR1U2SUhSeWRXVXNJR2RsZERvZ1oyVjBkR1Z5SUgwcE8xeHVJRngwWEhSOVhHNGdYSFI5TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWDE5bGMwMXZaSFZzWlNCdmJpQmxlSEJ2Y25SelhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5JZ1BTQm1kVzVqZEdsdmJpaGxlSEJ2Y25SektTQjdYRzRnWEhSY2RHbG1LSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlGTjViV0p2YkM1MGIxTjBjbWx1WjFSaFp5a2dlMXh1SUZ4MFhIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjc0lIc2dkbUZzZFdVNklDZE5iMlIxYkdVbklIMHBPMXh1SUZ4MFhIUjlYRzRnWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0FuWDE5bGMwMXZaSFZzWlNjc0lIc2dkbUZzZFdVNklIUnlkV1VnZlNrN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCamNtVmhkR1VnWVNCbVlXdGxJRzVoYldWemNHRmpaU0J2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBeE9pQjJZV3gxWlNCcGN5QmhJRzF2WkhWc1pTQnBaQ3dnY21WeGRXbHlaU0JwZEZ4dUlGeDBMeThnYlc5a1pTQW1JREk2SUcxbGNtZGxJR0ZzYkNCd2NtOXdaWEowYVdWeklHOW1JSFpoYkhWbElHbHVkRzhnZEdobElHNXpYRzRnWEhRdkx5QnRiMlJsSUNZZ05Eb2djbVYwZFhKdUlIWmhiSFZsSUhkb1pXNGdZV3h5WldGa2VTQnVjeUJ2WW1wbFkzUmNiaUJjZEM4dklHMXZaR1VnSmlBNGZERTZJR0psYUdGMlpTQnNhV3RsSUhKbGNYVnBjbVZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxMQ0J0YjJSbEtTQjdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQXhLU0IyWVd4MVpTQTlJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvZG1Gc2RXVXBPMXh1SUZ4MFhIUnBaaWh0YjJSbElDWWdPQ2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhScFppZ29iVzlrWlNBbUlEUXBJQ1ltSUhSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RtRnNkV1VnSmlZZ2RtRnNkV1V1WDE5bGMwMXZaSFZzWlNrZ2NtVjBkWEp1SUhaaGJIVmxPMXh1SUZ4MFhIUjJZWElnYm5NZ1BTQlBZbXBsWTNRdVkzSmxZWFJsS0c1MWJHd3BPMXh1SUZ4MFhIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklvYm5NcE8xeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ibk1zSUNka1pXWmhkV3gwSnl3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQjJZV3gxWlRvZ2RtRnNkV1VnZlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeUlDWW1JSFI1Y0dWdlppQjJZV3gxWlNBaFBTQW5jM1J5YVc1bkp5a2dabTl5S0haaGNpQnJaWGtnYVc0Z2RtRnNkV1VwSUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaHVjeXdnYTJWNUxDQm1kVzVqZEdsdmJpaHJaWGtwSUhzZ2NtVjBkWEp1SUhaaGJIVmxXMnRsZVYwN0lIMHVZbWx1WkNodWRXeHNMQ0JyWlhrcEtUdGNiaUJjZEZ4MGNtVjBkWEp1SUc1ek8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1WEc0Z1hIUXZMeUJNYjJGa0lHVnVkSEo1SUcxdlpIVnNaU0JoYm1RZ2NtVjBkWEp1SUdWNGNHOXlkSE5jYmlCY2RISmxkSFZ5YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjeUE5SUZ3aUxpOXpjbU12YVc1a1pYZ3VkSE5jSWlrN1hHNGlMQ0l2S2lCTlNWUWdiR2xqWlc1elpTQXFMMXh1ZG1GeUlHTnpjMHRsZVhkdmNtUnpJRDBnY21WeGRXbHlaU2duWTI5c2IzSXRibUZ0WlNjcE8xeHVYRzR2THlCT1QxUkZPaUJqYjI1MlpYSnphVzl1Y3lCemFHOTFiR1FnYjI1c2VTQnlaWFIxY200Z2NISnBiV2wwYVhabElIWmhiSFZsY3lBb2FTNWxMaUJoY25KaGVYTXNJRzl5WEc0dkx5QWdJQ0FnSUNCMllXeDFaWE1nZEdoaGRDQm5hWFpsSUdOdmNuSmxZM1FnWUhSNWNHVnZabUFnY21WemRXeDBjeWt1WEc0dkx5QWdJQ0FnSUNCa2J5QnViM1FnZFhObElHSnZlQ0IyWVd4MVpYTWdkSGx3WlhNZ0tHa3VaUzRnVG5WdFltVnlLQ2tzSUZOMGNtbHVaeWdwTENCbGRHTXVLVnh1WEc1MllYSWdjbVYyWlhKelpVdGxlWGR2Y21SeklEMGdlMzA3WEc1bWIzSWdLSFpoY2lCclpYa2dhVzRnWTNOelMyVjVkMjl5WkhNcElIdGNibHgwYVdZZ0tHTnpjMHRsZVhkdmNtUnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JseDBYSFJ5WlhabGNuTmxTMlY1ZDI5eVpITmJZM056UzJWNWQyOXlaSE5iYTJWNVhWMGdQU0JyWlhrN1hHNWNkSDFjYm4xY2JseHVkbUZ5SUdOdmJuWmxjblFnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0Y2JseDBjbWRpT2lCN1kyaGhibTVsYkhNNklETXNJR3hoWW1Wc2N6b2dKM0puWWlkOUxGeHVYSFJvYzJ3NklIdGphR0Z1Ym1Wc2N6b2dNeXdnYkdGaVpXeHpPaUFuYUhOc0ozMHNYRzVjZEdoemRqb2dlMk5vWVc1dVpXeHpPaUF6TENCc1lXSmxiSE02SUNkb2MzWW5mU3hjYmx4MGFIZGlPaUI3WTJoaGJtNWxiSE02SURNc0lHeGhZbVZzY3pvZ0oyaDNZaWQ5TEZ4dVhIUmpiWGxyT2lCN1kyaGhibTVsYkhNNklEUXNJR3hoWW1Wc2N6b2dKMk50ZVdzbmZTeGNibHgwZUhsNk9pQjdZMmhoYm01bGJITTZJRE1zSUd4aFltVnNjem9nSjNoNWVpZDlMRnh1WEhSc1lXSTZJSHRqYUdGdWJtVnNjem9nTXl3Z2JHRmlaV3h6T2lBbmJHRmlKMzBzWEc1Y2RHeGphRG9nZTJOb1lXNXVaV3h6T2lBekxDQnNZV0psYkhNNklDZHNZMmduZlN4Y2JseDBhR1Y0T2lCN1kyaGhibTVsYkhNNklERXNJR3hoWW1Wc2N6b2dXeWRvWlhnblhYMHNYRzVjZEd0bGVYZHZjbVE2SUh0amFHRnVibVZzY3pvZ01Td2diR0ZpWld4ek9pQmJKMnRsZVhkdmNtUW5YWDBzWEc1Y2RHRnVjMmt4TmpvZ2UyTm9ZVzV1Wld4ek9pQXhMQ0JzWVdKbGJITTZJRnNuWVc1emFURTJKMTE5TEZ4dVhIUmhibk5wTWpVMk9pQjdZMmhoYm01bGJITTZJREVzSUd4aFltVnNjem9nV3lkaGJuTnBNalUySjExOUxGeHVYSFJvWTJjNklIdGphR0Z1Ym1Wc2N6b2dNeXdnYkdGaVpXeHpPaUJiSjJnbkxDQW5ZeWNzSUNkbkoxMTlMRnh1WEhSaGNIQnNaVG9nZTJOb1lXNXVaV3h6T2lBekxDQnNZV0psYkhNNklGc25jakUySnl3Z0oyY3hOaWNzSUNkaU1UWW5YWDBzWEc1Y2RHZHlZWGs2SUh0amFHRnVibVZzY3pvZ01Td2diR0ZpWld4ek9pQmJKMmR5WVhrblhYMWNibjA3WEc1Y2JpOHZJR2hwWkdVZ0xtTm9ZVzV1Wld4eklHRnVaQ0F1YkdGaVpXeHpJSEJ5YjNCbGNuUnBaWE5jYm1admNpQW9kbUZ5SUcxdlpHVnNJR2x1SUdOdmJuWmxjblFwSUh0Y2JseDBhV1lnS0dOdmJuWmxjblF1YUdGelQzZHVVSEp2Y0dWeWRIa29iVzlrWld3cEtTQjdYRzVjZEZ4MGFXWWdLQ0VvSjJOb1lXNXVaV3h6SnlCcGJpQmpiMjUyWlhKMFcyMXZaR1ZzWFNrcElIdGNibHgwWEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnbmJXbHpjMmx1WnlCamFHRnVibVZzY3lCd2NtOXdaWEowZVRvZ0p5QXJJRzF2WkdWc0tUdGNibHgwWEhSOVhHNWNibHgwWEhScFppQW9JU2duYkdGaVpXeHpKeUJwYmlCamIyNTJaWEowVzIxdlpHVnNYU2twSUh0Y2JseDBYSFJjZEhSb2NtOTNJRzVsZHlCRmNuSnZjaWduYldsemMybHVaeUJqYUdGdWJtVnNJR3hoWW1Wc2N5QndjbTl3WlhKMGVUb2dKeUFySUcxdlpHVnNLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnBaaUFvWTI5dWRtVnlkRnR0YjJSbGJGMHViR0ZpWld4ekxteGxibWQwYUNBaFBUMGdZMjl1ZG1WeWRGdHRiMlJsYkYwdVkyaGhibTVsYkhNcElIdGNibHgwWEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblkyaGhibTVsYkNCaGJtUWdiR0ZpWld3Z1kyOTFiblJ6SUcxcGMyMWhkR05vT2lBbklDc2diVzlrWld3cE8xeHVYSFJjZEgxY2JseHVYSFJjZEhaaGNpQmphR0Z1Ym1Wc2N5QTlJR052Ym5abGNuUmJiVzlrWld4ZExtTm9ZVzV1Wld4ek8xeHVYSFJjZEhaaGNpQnNZV0psYkhNZ1BTQmpiMjUyWlhKMFcyMXZaR1ZzWFM1c1lXSmxiSE03WEc1Y2RGeDBaR1ZzWlhSbElHTnZiblpsY25SYmJXOWtaV3hkTG1Ob1lXNXVaV3h6TzF4dVhIUmNkR1JsYkdWMFpTQmpiMjUyWlhKMFcyMXZaR1ZzWFM1c1lXSmxiSE03WEc1Y2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dOdmJuWmxjblJiYlc5a1pXeGRMQ0FuWTJoaGJtNWxiSE1uTENCN2RtRnNkV1U2SUdOb1lXNXVaV3h6ZlNrN1hHNWNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHTnZiblpsY25SYmJXOWtaV3hkTENBbmJHRmlaV3h6Snl3Z2UzWmhiSFZsT2lCc1lXSmxiSE45S1R0Y2JseDBmVnh1ZlZ4dVhHNWpiMjUyWlhKMExuSm5ZaTVvYzJ3Z1BTQm1kVzVqZEdsdmJpQW9jbWRpS1NCN1hHNWNkSFpoY2lCeUlEMGdjbWRpV3pCZElDOGdNalUxTzF4dVhIUjJZWElnWnlBOUlISm5ZbHN4WFNBdklESTFOVHRjYmx4MGRtRnlJR0lnUFNCeVoySmJNbDBnTHlBeU5UVTdYRzVjZEhaaGNpQnRhVzRnUFNCTllYUm9MbTFwYmloeUxDQm5MQ0JpS1R0Y2JseDBkbUZ5SUcxaGVDQTlJRTFoZEdndWJXRjRLSElzSUdjc0lHSXBPMXh1WEhSMllYSWdaR1ZzZEdFZ1BTQnRZWGdnTFNCdGFXNDdYRzVjZEhaaGNpQm9PMXh1WEhSMllYSWdjenRjYmx4MGRtRnlJR3c3WEc1Y2JseDBhV1lnS0cxaGVDQTlQVDBnYldsdUtTQjdYRzVjZEZ4MGFDQTlJREE3WEc1Y2RIMGdaV3h6WlNCcFppQW9jaUE5UFQwZ2JXRjRLU0I3WEc1Y2RGeDBhQ0E5SUNobklDMGdZaWtnTHlCa1pXeDBZVHRjYmx4MGZTQmxiSE5sSUdsbUlDaG5JRDA5UFNCdFlYZ3BJSHRjYmx4MFhIUm9JRDBnTWlBcklDaGlJQzBnY2lrZ0x5QmtaV3gwWVR0Y2JseDBmU0JsYkhObElHbG1JQ2hpSUQwOVBTQnRZWGdwSUh0Y2JseDBYSFJvSUQwZ05DQXJJQ2h5SUMwZ1p5a2dMeUJrWld4MFlUdGNibHgwZlZ4dVhHNWNkR2dnUFNCTllYUm9MbTFwYmlob0lDb2dOakFzSURNMk1DazdYRzVjYmx4MGFXWWdLR2dnUENBd0tTQjdYRzVjZEZ4MGFDQXJQU0F6TmpBN1hHNWNkSDFjYmx4dVhIUnNJRDBnS0cxcGJpQXJJRzFoZUNrZ0x5QXlPMXh1WEc1Y2RHbG1JQ2h0WVhnZ1BUMDlJRzFwYmlrZ2UxeHVYSFJjZEhNZ1BTQXdPMXh1WEhSOUlHVnNjMlVnYVdZZ0tHd2dQRDBnTUM0MUtTQjdYRzVjZEZ4MGN5QTlJR1JsYkhSaElDOGdLRzFoZUNBcklHMXBiaWs3WEc1Y2RIMGdaV3h6WlNCN1hHNWNkRngwY3lBOUlHUmxiSFJoSUM4Z0tESWdMU0J0WVhnZ0xTQnRhVzRwTzF4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUZ0b0xDQnpJQ29nTVRBd0xDQnNJQ29nTVRBd1hUdGNibjA3WEc1Y2JtTnZiblpsY25RdWNtZGlMbWh6ZGlBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBkbUZ5SUhKa2FXWTdYRzVjZEhaaGNpQm5aR2xtTzF4dVhIUjJZWElnWW1ScFpqdGNibHgwZG1GeUlHZzdYRzVjZEhaaGNpQnpPMXh1WEc1Y2RIWmhjaUJ5SUQwZ2NtZGlXekJkSUM4Z01qVTFPMXh1WEhSMllYSWdaeUE5SUhKbllsc3hYU0F2SURJMU5UdGNibHgwZG1GeUlHSWdQU0J5WjJKYk1sMGdMeUF5TlRVN1hHNWNkSFpoY2lCMklEMGdUV0YwYUM1dFlYZ29jaXdnWnl3Z1lpazdYRzVjZEhaaGNpQmthV1ptSUQwZ2RpQXRJRTFoZEdndWJXbHVLSElzSUdjc0lHSXBPMXh1WEhSMllYSWdaR2xtWm1NZ1BTQm1kVzVqZEdsdmJpQW9ZeWtnZTF4dVhIUmNkSEpsZEhWeWJpQW9kaUF0SUdNcElDOGdOaUF2SUdScFptWWdLeUF4SUM4Z01qdGNibHgwZlR0Y2JseHVYSFJwWmlBb1pHbG1aaUE5UFQwZ01Da2dlMXh1WEhSY2RHZ2dQU0J6SUQwZ01EdGNibHgwZlNCbGJITmxJSHRjYmx4MFhIUnpJRDBnWkdsbVppQXZJSFk3WEc1Y2RGeDBjbVJwWmlBOUlHUnBabVpqS0hJcE8xeHVYSFJjZEdka2FXWWdQU0JrYVdabVl5aG5LVHRjYmx4MFhIUmlaR2xtSUQwZ1pHbG1abU1vWWlrN1hHNWNibHgwWEhScFppQW9jaUE5UFQwZ2Rpa2dlMXh1WEhSY2RGeDBhQ0E5SUdKa2FXWWdMU0JuWkdsbU8xeHVYSFJjZEgwZ1pXeHpaU0JwWmlBb1p5QTlQVDBnZGlrZ2UxeHVYSFJjZEZ4MGFDQTlJQ2d4SUM4Z015a2dLeUJ5WkdsbUlDMGdZbVJwWmp0Y2JseDBYSFI5SUdWc2MyVWdhV1lnS0dJZ1BUMDlJSFlwSUh0Y2JseDBYSFJjZEdnZ1BTQW9NaUF2SURNcElDc2daMlJwWmlBdElISmthV1k3WEc1Y2RGeDBmVnh1WEhSY2RHbG1JQ2hvSUR3Z01Da2dlMXh1WEhSY2RGeDBhQ0FyUFNBeE8xeHVYSFJjZEgwZ1pXeHpaU0JwWmlBb2FDQStJREVwSUh0Y2JseDBYSFJjZEdnZ0xUMGdNVHRjYmx4MFhIUjlYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdXMXh1WEhSY2RHZ2dLaUF6TmpBc1hHNWNkRngwY3lBcUlERXdNQ3hjYmx4MFhIUjJJQ29nTVRBd1hHNWNkRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1b2QySWdQU0JtZFc1amRHbHZiaUFvY21kaUtTQjdYRzVjZEhaaGNpQnlJRDBnY21kaVd6QmRPMXh1WEhSMllYSWdaeUE5SUhKbllsc3hYVHRjYmx4MGRtRnlJR0lnUFNCeVoySmJNbDA3WEc1Y2RIWmhjaUJvSUQwZ1kyOXVkbVZ5ZEM1eVoySXVhSE5zS0hKbllpbGJNRjA3WEc1Y2RIWmhjaUIzSUQwZ01TQXZJREkxTlNBcUlFMWhkR2d1YldsdUtISXNJRTFoZEdndWJXbHVLR2NzSUdJcEtUdGNibHh1WEhSaUlEMGdNU0F0SURFZ0x5QXlOVFVnS2lCTllYUm9MbTFoZUNoeUxDQk5ZWFJvTG0xaGVDaG5MQ0JpS1NrN1hHNWNibHgwY21WMGRYSnVJRnRvTENCM0lDb2dNVEF3TENCaUlDb2dNVEF3WFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1Y21kaUxtTnRlV3NnUFNCbWRXNWpkR2x2YmlBb2NtZGlLU0I3WEc1Y2RIWmhjaUJ5SUQwZ2NtZGlXekJkSUM4Z01qVTFPMXh1WEhSMllYSWdaeUE5SUhKbllsc3hYU0F2SURJMU5UdGNibHgwZG1GeUlHSWdQU0J5WjJKYk1sMGdMeUF5TlRVN1hHNWNkSFpoY2lCak8xeHVYSFIyWVhJZ2JUdGNibHgwZG1GeUlIazdYRzVjZEhaaGNpQnJPMXh1WEc1Y2RHc2dQU0JOWVhSb0xtMXBiaWd4SUMwZ2Npd2dNU0F0SUdjc0lERWdMU0JpS1R0Y2JseDBZeUE5SUNneElDMGdjaUF0SUdzcElDOGdLREVnTFNCcktTQjhmQ0F3TzF4dVhIUnRJRDBnS0RFZ0xTQm5JQzBnYXlrZ0x5QW9NU0F0SUdzcElIeDhJREE3WEc1Y2RIa2dQU0FvTVNBdElHSWdMU0JyS1NBdklDZ3hJQzBnYXlrZ2ZId2dNRHRjYmx4dVhIUnlaWFIxY200Z1cyTWdLaUF4TURBc0lHMGdLaUF4TURBc0lIa2dLaUF4TURBc0lHc2dLaUF4TURCZE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCVFpXVWdhSFIwY0hNNkx5OWxiaTV0TG5kcGEybHdaV1JwWVM1dmNtY3ZkMmxyYVM5RmRXTnNhV1JsWVc1ZlpHbHpkR0Z1WTJValUzRjFZWEpsWkY5RmRXTnNhV1JsWVc1ZlpHbHpkR0Z1WTJWY2JpQXFJQ292WEc1bWRXNWpkR2x2YmlCamIyMXdZWEpoZEdsMlpVUnBjM1JoYm1ObEtIZ3NJSGtwSUh0Y2JseDBjbVYwZFhKdUlDaGNibHgwWEhSTllYUm9MbkJ2ZHloNFd6QmRJQzBnZVZzd1hTd2dNaWtnSzF4dVhIUmNkRTFoZEdndWNHOTNLSGhiTVYwZ0xTQjVXekZkTENBeUtTQXJYRzVjZEZ4MFRXRjBhQzV3YjNjb2VGc3lYU0F0SUhsYk1sMHNJRElwWEc1Y2RDazdYRzU5WEc1Y2JtTnZiblpsY25RdWNtZGlMbXRsZVhkdmNtUWdQU0JtZFc1amRHbHZiaUFvY21kaUtTQjdYRzVjZEhaaGNpQnlaWFpsY25ObFpDQTlJSEpsZG1WeWMyVkxaWGwzYjNKa2MxdHlaMkpkTzF4dVhIUnBaaUFvY21WMlpYSnpaV1FwSUh0Y2JseDBYSFJ5WlhSMWNtNGdjbVYyWlhKelpXUTdYRzVjZEgxY2JseHVYSFIyWVhJZ1kzVnljbVZ1ZEVOc2IzTmxjM1JFYVhOMFlXNWpaU0E5SUVsdVptbHVhWFI1TzF4dVhIUjJZWElnWTNWeWNtVnVkRU5zYjNObGMzUkxaWGwzYjNKa08xeHVYRzVjZEdadmNpQW9kbUZ5SUd0bGVYZHZjbVFnYVc0Z1kzTnpTMlY1ZDI5eVpITXBJSHRjYmx4MFhIUnBaaUFvWTNOelMyVjVkMjl5WkhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNWQyOXlaQ2twSUh0Y2JseDBYSFJjZEhaaGNpQjJZV3gxWlNBOUlHTnpjMHRsZVhkdmNtUnpXMnRsZVhkdmNtUmRPMXh1WEc1Y2RGeDBYSFF2THlCRGIyMXdkWFJsSUdOdmJYQmhjbUYwYVhabElHUnBjM1JoYm1ObFhHNWNkRngwWEhSMllYSWdaR2x6ZEdGdVkyVWdQU0JqYjIxd1lYSmhkR2wyWlVScGMzUmhibU5sS0hKbllpd2dkbUZzZFdVcE8xeHVYRzVjZEZ4MFhIUXZMeUJEYUdWamF5QnBaaUJwZEhNZ2JHVnpjeXdnYVdZZ2MyOGdjMlYwSUdGeklHTnNiM05sYzNSY2JseDBYSFJjZEdsbUlDaGthWE4wWVc1alpTQThJR04xY25KbGJuUkRiRzl6WlhOMFJHbHpkR0Z1WTJVcElIdGNibHgwWEhSY2RGeDBZM1Z5Y21WdWRFTnNiM05sYzNSRWFYTjBZVzVqWlNBOUlHUnBjM1JoYm1ObE8xeHVYSFJjZEZ4MFhIUmpkWEp5Wlc1MFEyeHZjMlZ6ZEV0bGVYZHZjbVFnUFNCclpYbDNiM0prTzF4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJqZFhKeVpXNTBRMnh2YzJWemRFdGxlWGR2Y21RN1hHNTlPMXh1WEc1amIyNTJaWEowTG10bGVYZHZjbVF1Y21kaUlEMGdablZ1WTNScGIyNGdLR3RsZVhkdmNtUXBJSHRjYmx4MGNtVjBkWEp1SUdOemMwdGxlWGR2Y21SelcydGxlWGR2Y21SZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1eVoySXVlSGw2SUQwZ1puVnVZM1JwYjI0Z0tISm5ZaWtnZTF4dVhIUjJZWElnY2lBOUlISm5ZbHN3WFNBdklESTFOVHRjYmx4MGRtRnlJR2NnUFNCeVoySmJNVjBnTHlBeU5UVTdYRzVjZEhaaGNpQmlJRDBnY21kaVd6SmRJQzhnTWpVMU8xeHVYRzVjZEM4dklHRnpjM1Z0WlNCelVrZENYRzVjZEhJZ1BTQnlJRDRnTUM0d05EQTBOU0EvSUUxaGRHZ3VjRzkzS0Nnb2NpQXJJREF1TURVMUtTQXZJREV1TURVMUtTd2dNaTQwS1NBNklDaHlJQzhnTVRJdU9USXBPMXh1WEhSbklEMGdaeUErSURBdU1EUXdORFVnUHlCTllYUm9MbkJ2ZHlnb0tHY2dLeUF3TGpBMU5Ta2dMeUF4TGpBMU5Ta3NJREl1TkNrZ09pQW9aeUF2SURFeUxqa3lLVHRjYmx4MFlpQTlJR0lnUGlBd0xqQTBNRFExSUQ4Z1RXRjBhQzV3YjNjb0tDaGlJQ3NnTUM0d05UVXBJQzhnTVM0d05UVXBMQ0F5TGpRcElEb2dLR0lnTHlBeE1pNDVNaWs3WEc1Y2JseDBkbUZ5SUhnZ1BTQW9jaUFxSURBdU5ERXlOQ2tnS3lBb1p5QXFJREF1TXpVM05pa2dLeUFvWWlBcUlEQXVNVGd3TlNrN1hHNWNkSFpoY2lCNUlEMGdLSElnS2lBd0xqSXhNallwSUNzZ0tHY2dLaUF3TGpjeE5USXBJQ3NnS0dJZ0tpQXdMakEzTWpJcE8xeHVYSFIyWVhJZ2VpQTlJQ2h5SUNvZ01DNHdNVGt6S1NBcklDaG5JQ29nTUM0eE1Ua3lLU0FySUNoaUlDb2dNQzQ1TlRBMUtUdGNibHh1WEhSeVpYUjFjbTRnVzNnZ0tpQXhNREFzSUhrZ0tpQXhNREFzSUhvZ0tpQXhNREJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzV5WjJJdWJHRmlJRDBnWm5WdVkzUnBiMjRnS0hKbllpa2dlMXh1WEhSMllYSWdlSGw2SUQwZ1kyOXVkbVZ5ZEM1eVoySXVlSGw2S0hKbllpazdYRzVjZEhaaGNpQjRJRDBnZUhsNld6QmRPMXh1WEhSMllYSWdlU0E5SUhoNWVsc3hYVHRjYmx4MGRtRnlJSG9nUFNCNGVYcGJNbDA3WEc1Y2RIWmhjaUJzTzF4dVhIUjJZWElnWVR0Y2JseDBkbUZ5SUdJN1hHNWNibHgwZUNBdlBTQTVOUzR3TkRjN1hHNWNkSGtnTHowZ01UQXdPMXh1WEhSNklDODlJREV3T0M0NE9ETTdYRzVjYmx4MGVDQTlJSGdnUGlBd0xqQXdPRGcxTmlBL0lFMWhkR2d1Y0c5M0tIZ3NJREVnTHlBektTQTZJQ2czTGpjNE55QXFJSGdwSUNzZ0tERTJJQzhnTVRFMktUdGNibHgwZVNBOUlIa2dQaUF3TGpBd09EZzFOaUEvSUUxaGRHZ3VjRzkzS0hrc0lERWdMeUF6S1NBNklDZzNMamM0TnlBcUlIa3BJQ3NnS0RFMklDOGdNVEUyS1R0Y2JseDBlaUE5SUhvZ1BpQXdMakF3T0RnMU5pQS9JRTFoZEdndWNHOTNLSG9zSURFZ0x5QXpLU0E2SUNnM0xqYzROeUFxSUhvcElDc2dLREUySUM4Z01URTJLVHRjYmx4dVhIUnNJRDBnS0RFeE5pQXFJSGtwSUMwZ01UWTdYRzVjZEdFZ1BTQTFNREFnS2lBb2VDQXRJSGtwTzF4dVhIUmlJRDBnTWpBd0lDb2dLSGtnTFNCNktUdGNibHh1WEhSeVpYUjFjbTRnVzJ3c0lHRXNJR0pkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVvYzJ3dWNtZGlJRDBnWm5WdVkzUnBiMjRnS0doemJDa2dlMXh1WEhSMllYSWdhQ0E5SUdoemJGc3dYU0F2SURNMk1EdGNibHgwZG1GeUlITWdQU0JvYzJ4Yk1WMGdMeUF4TURBN1hHNWNkSFpoY2lCc0lEMGdhSE5zV3pKZElDOGdNVEF3TzF4dVhIUjJZWElnZERFN1hHNWNkSFpoY2lCME1qdGNibHgwZG1GeUlIUXpPMXh1WEhSMllYSWdjbWRpTzF4dVhIUjJZWElnZG1Gc08xeHVYRzVjZEdsbUlDaHpJRDA5UFNBd0tTQjdYRzVjZEZ4MGRtRnNJRDBnYkNBcUlESTFOVHRjYmx4MFhIUnlaWFIxY200Z1czWmhiQ3dnZG1Gc0xDQjJZV3hkTzF4dVhIUjlYRzVjYmx4MGFXWWdLR3dnUENBd0xqVXBJSHRjYmx4MFhIUjBNaUE5SUd3Z0tpQW9NU0FySUhNcE8xeHVYSFI5SUdWc2MyVWdlMXh1WEhSY2RIUXlJRDBnYkNBcklITWdMU0JzSUNvZ2N6dGNibHgwZlZ4dVhHNWNkSFF4SUQwZ01pQXFJR3dnTFNCME1qdGNibHh1WEhSeVoySWdQU0JiTUN3Z01Dd2dNRjA3WEc1Y2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dNenNnYVNzcktTQjdYRzVjZEZ4MGRETWdQU0JvSUNzZ01TQXZJRE1nS2lBdEtHa2dMU0F4S1R0Y2JseDBYSFJwWmlBb2RETWdQQ0F3S1NCN1hHNWNkRngwWEhSME15c3JPMXh1WEhSY2RIMWNibHgwWEhScFppQW9kRE1nUGlBeEtTQjdYRzVjZEZ4MFhIUjBNeTB0TzF4dVhIUmNkSDFjYmx4dVhIUmNkR2xtSUNnMklDb2dkRE1nUENBeEtTQjdYRzVjZEZ4MFhIUjJZV3dnUFNCME1TQXJJQ2gwTWlBdElIUXhLU0FxSURZZ0tpQjBNenRjYmx4MFhIUjlJR1ZzYzJVZ2FXWWdLRElnS2lCME15QThJREVwSUh0Y2JseDBYSFJjZEhaaGJDQTlJSFF5TzF4dVhIUmNkSDBnWld4elpTQnBaaUFvTXlBcUlIUXpJRHdnTWlrZ2UxeHVYSFJjZEZ4MGRtRnNJRDBnZERFZ0t5QW9kRElnTFNCME1Ta2dLaUFvTWlBdklETWdMU0IwTXlrZ0tpQTJPMXh1WEhSY2RIMGdaV3h6WlNCN1hHNWNkRngwWEhSMllXd2dQU0IwTVR0Y2JseDBYSFI5WEc1Y2JseDBYSFJ5WjJKYmFWMGdQU0IyWVd3Z0tpQXlOVFU3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnY21kaU8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b2Myd3VhSE4ySUQwZ1puVnVZM1JwYjI0Z0tHaHpiQ2tnZTF4dVhIUjJZWElnYUNBOUlHaHpiRnN3WFR0Y2JseDBkbUZ5SUhNZ1BTQm9jMnhiTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUJzSUQwZ2FITnNXekpkSUM4Z01UQXdPMXh1WEhSMllYSWdjMjFwYmlBOUlITTdYRzVjZEhaaGNpQnNiV2x1SUQwZ1RXRjBhQzV0WVhnb2JDd2dNQzR3TVNrN1hHNWNkSFpoY2lCemRqdGNibHgwZG1GeUlIWTdYRzVjYmx4MGJDQXFQU0F5TzF4dVhIUnpJQ285SUNoc0lEdzlJREVwSUQ4Z2JDQTZJRElnTFNCc08xeHVYSFJ6YldsdUlDbzlJR3h0YVc0Z1BEMGdNU0EvSUd4dGFXNGdPaUF5SUMwZ2JHMXBianRjYmx4MGRpQTlJQ2hzSUNzZ2N5a2dMeUF5TzF4dVhIUnpkaUE5SUd3Z1BUMDlJREFnUHlBb01pQXFJSE50YVc0cElDOGdLR3h0YVc0Z0t5QnpiV2x1S1NBNklDZ3lJQ29nY3lrZ0x5QW9iQ0FySUhNcE8xeHVYRzVjZEhKbGRIVnliaUJiYUN3Z2MzWWdLaUF4TURBc0lIWWdLaUF4TURCZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b2MzWXVjbWRpSUQwZ1puVnVZM1JwYjI0Z0tHaHpkaWtnZTF4dVhIUjJZWElnYUNBOUlHaHpkbHN3WFNBdklEWXdPMXh1WEhSMllYSWdjeUE5SUdoemRsc3hYU0F2SURFd01EdGNibHgwZG1GeUlIWWdQU0JvYzNaYk1sMGdMeUF4TURBN1hHNWNkSFpoY2lCb2FTQTlJRTFoZEdndVpteHZiM0lvYUNrZ0pTQTJPMXh1WEc1Y2RIWmhjaUJtSUQwZ2FDQXRJRTFoZEdndVpteHZiM0lvYUNrN1hHNWNkSFpoY2lCd0lEMGdNalUxSUNvZ2RpQXFJQ2d4SUMwZ2N5azdYRzVjZEhaaGNpQnhJRDBnTWpVMUlDb2dkaUFxSUNneElDMGdLSE1nS2lCbUtTazdYRzVjZEhaaGNpQjBJRDBnTWpVMUlDb2dkaUFxSUNneElDMGdLSE1nS2lBb01TQXRJR1lwS1NrN1hHNWNkSFlnS2owZ01qVTFPMXh1WEc1Y2RITjNhWFJqYUNBb2FHa3BJSHRjYmx4MFhIUmpZWE5sSURBNlhHNWNkRngwWEhSeVpYUjFjbTRnVzNZc0lIUXNJSEJkTzF4dVhIUmNkR05oYzJVZ01UcGNibHgwWEhSY2RISmxkSFZ5YmlCYmNTd2dkaXdnY0YwN1hHNWNkRngwWTJGelpTQXlPbHh1WEhSY2RGeDBjbVYwZFhKdUlGdHdMQ0IyTENCMFhUdGNibHgwWEhSallYTmxJRE02WEc1Y2RGeDBYSFJ5WlhSMWNtNGdXM0FzSUhFc0lIWmRPMXh1WEhSY2RHTmhjMlVnTkRwY2JseDBYSFJjZEhKbGRIVnliaUJiZEN3Z2NDd2dkbDA3WEc1Y2RGeDBZMkZ6WlNBMU9seHVYSFJjZEZ4MGNtVjBkWEp1SUZ0MkxDQndMQ0J4WFR0Y2JseDBmVnh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW9jM1l1YUhOc0lEMGdablZ1WTNScGIyNGdLR2h6ZGlrZ2UxeHVYSFIyWVhJZ2FDQTlJR2h6ZGxzd1hUdGNibHgwZG1GeUlITWdQU0JvYzNaYk1WMGdMeUF4TURBN1hHNWNkSFpoY2lCMklEMGdhSE4yV3pKZElDOGdNVEF3TzF4dVhIUjJZWElnZG0xcGJpQTlJRTFoZEdndWJXRjRLSFlzSURBdU1ERXBPMXh1WEhSMllYSWdiRzFwYmp0Y2JseDBkbUZ5SUhOc08xeHVYSFIyWVhJZ2JEdGNibHh1WEhSc0lEMGdLRElnTFNCektTQXFJSFk3WEc1Y2RHeHRhVzRnUFNBb01pQXRJSE1wSUNvZ2RtMXBianRjYmx4MGMyd2dQU0J6SUNvZ2RtMXBianRjYmx4MGMyd2dMejBnS0d4dGFXNGdQRDBnTVNrZ1B5QnNiV2x1SURvZ01pQXRJR3h0YVc0N1hHNWNkSE5zSUQwZ2Myd2dmSHdnTUR0Y2JseDBiQ0F2UFNBeU8xeHVYRzVjZEhKbGRIVnliaUJiYUN3Z2Myd2dLaUF4TURBc0lHd2dLaUF4TURCZE8xeHVmVHRjYmx4dUx5OGdhSFIwY0RvdkwyUmxkaTUzTXk1dmNtY3ZZM056ZDJjdlkzTnpMV052Ykc5eUx5Tm9kMkl0ZEc4dGNtZGlYRzVqYjI1MlpYSjBMbWgzWWk1eVoySWdQU0JtZFc1amRHbHZiaUFvYUhkaUtTQjdYRzVjZEhaaGNpQm9JRDBnYUhkaVd6QmRJQzhnTXpZd08xeHVYSFIyWVhJZ2QyZ2dQU0JvZDJKYk1WMGdMeUF4TURBN1hHNWNkSFpoY2lCaWJDQTlJR2gzWWxzeVhTQXZJREV3TUR0Y2JseDBkbUZ5SUhKaGRHbHZJRDBnZDJnZ0t5QmliRHRjYmx4MGRtRnlJR2s3WEc1Y2RIWmhjaUIyTzF4dVhIUjJZWElnWmp0Y2JseDBkbUZ5SUc0N1hHNWNibHgwTHk4Z2QyZ2dLeUJpYkNCallXNTBJR0psSUQ0Z01WeHVYSFJwWmlBb2NtRjBhVzhnUGlBeEtTQjdYRzVjZEZ4MGQyZ2dMejBnY21GMGFXODdYRzVjZEZ4MFltd2dMejBnY21GMGFXODdYRzVjZEgxY2JseHVYSFJwSUQwZ1RXRjBhQzVtYkc5dmNpZzJJQ29nYUNrN1hHNWNkSFlnUFNBeElDMGdZbXc3WEc1Y2RHWWdQU0EySUNvZ2FDQXRJR2s3WEc1Y2JseDBhV1lnS0NocElDWWdNSGd3TVNrZ0lUMDlJREFwSUh0Y2JseDBYSFJtSUQwZ01TQXRJR1k3WEc1Y2RIMWNibHh1WEhSdUlEMGdkMmdnS3lCbUlDb2dLSFlnTFNCM2FDazdJQzh2SUd4cGJtVmhjaUJwYm5SbGNuQnZiR0YwYVc5dVhHNWNibHgwZG1GeUlISTdYRzVjZEhaaGNpQm5PMXh1WEhSMllYSWdZanRjYmx4MGMzZHBkR05vSUNocEtTQjdYRzVjZEZ4MFpHVm1ZWFZzZERwY2JseDBYSFJqWVhObElEWTZYRzVjZEZ4MFkyRnpaU0F3T2lCeUlEMGdkanNnWnlBOUlHNDdJR0lnUFNCM2FEc2dZbkpsWVdzN1hHNWNkRngwWTJGelpTQXhPaUJ5SUQwZ2Jqc2daeUE5SUhZN0lHSWdQU0IzYURzZ1luSmxZV3M3WEc1Y2RGeDBZMkZ6WlNBeU9pQnlJRDBnZDJnN0lHY2dQU0IyT3lCaUlEMGdianNnWW5KbFlXczdYRzVjZEZ4MFkyRnpaU0F6T2lCeUlEMGdkMmc3SUdjZ1BTQnVPeUJpSUQwZ2Rqc2dZbkpsWVdzN1hHNWNkRngwWTJGelpTQTBPaUJ5SUQwZ2Jqc2daeUE5SUhkb095QmlJRDBnZGpzZ1luSmxZV3M3WEc1Y2RGeDBZMkZ6WlNBMU9pQnlJRDBnZGpzZ1p5QTlJSGRvT3lCaUlEMGdianNnWW5KbFlXczdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdXM0lnS2lBeU5UVXNJR2NnS2lBeU5UVXNJR0lnS2lBeU5UVmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNWpiWGxyTG5KbllpQTlJR1oxYm1OMGFXOXVJQ2hqYlhscktTQjdYRzVjZEhaaGNpQmpJRDBnWTIxNWExc3dYU0F2SURFd01EdGNibHgwZG1GeUlHMGdQU0JqYlhscld6RmRJQzhnTVRBd08xeHVYSFIyWVhJZ2VTQTlJR050ZVd0Yk1sMGdMeUF4TURBN1hHNWNkSFpoY2lCcklEMGdZMjE1YTFzelhTQXZJREV3TUR0Y2JseDBkbUZ5SUhJN1hHNWNkSFpoY2lCbk8xeHVYSFIyWVhJZ1lqdGNibHh1WEhSeUlEMGdNU0F0SUUxaGRHZ3ViV2x1S0RFc0lHTWdLaUFvTVNBdElHc3BJQ3NnYXlrN1hHNWNkR2NnUFNBeElDMGdUV0YwYUM1dGFXNG9NU3dnYlNBcUlDZ3hJQzBnYXlrZ0t5QnJLVHRjYmx4MFlpQTlJREVnTFNCTllYUm9MbTFwYmlneExDQjVJQ29nS0RFZ0xTQnJLU0FySUdzcE8xeHVYRzVjZEhKbGRIVnliaUJiY2lBcUlESTFOU3dnWnlBcUlESTFOU3dnWWlBcUlESTFOVjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbmg1ZWk1eVoySWdQU0JtZFc1amRHbHZiaUFvZUhsNktTQjdYRzVjZEhaaGNpQjRJRDBnZUhsNld6QmRJQzhnTVRBd08xeHVYSFIyWVhJZ2VTQTlJSGg1ZWxzeFhTQXZJREV3TUR0Y2JseDBkbUZ5SUhvZ1BTQjRlWHBiTWwwZ0x5QXhNREE3WEc1Y2RIWmhjaUJ5TzF4dVhIUjJZWElnWnp0Y2JseDBkbUZ5SUdJN1hHNWNibHgwY2lBOUlDaDRJQ29nTXk0eU5EQTJLU0FySUNoNUlDb2dMVEV1TlRNM01pa2dLeUFvZWlBcUlDMHdMalE1T0RZcE8xeHVYSFJuSUQwZ0tIZ2dLaUF0TUM0NU5qZzVLU0FySUNoNUlDb2dNUzQ0TnpVNEtTQXJJQ2g2SUNvZ01DNHdOREUxS1R0Y2JseDBZaUE5SUNoNElDb2dNQzR3TlRVM0tTQXJJQ2g1SUNvZ0xUQXVNakEwTUNrZ0t5QW9laUFxSURFdU1EVTNNQ2s3WEc1Y2JseDBMeThnWVhOemRXMWxJSE5TUjBKY2JseDBjaUE5SUhJZ1BpQXdMakF3TXpFek1EaGNibHgwWEhRL0lDZ29NUzR3TlRVZ0tpQk5ZWFJvTG5CdmR5aHlMQ0F4TGpBZ0x5QXlMalFwS1NBdElEQXVNRFUxS1Z4dVhIUmNkRG9nY2lBcUlERXlMamt5TzF4dVhHNWNkR2NnUFNCbklENGdNQzR3TURNeE16QTRYRzVjZEZ4MFB5QW9LREV1TURVMUlDb2dUV0YwYUM1d2IzY29aeXdnTVM0d0lDOGdNaTQwS1NrZ0xTQXdMakExTlNsY2JseDBYSFE2SUdjZ0tpQXhNaTQ1TWp0Y2JseHVYSFJpSUQwZ1lpQStJREF1TURBek1UTXdPRnh1WEhSY2REOGdLQ2d4TGpBMU5TQXFJRTFoZEdndWNHOTNLR0lzSURFdU1DQXZJREl1TkNrcElDMGdNQzR3TlRVcFhHNWNkRngwT2lCaUlDb2dNVEl1T1RJN1hHNWNibHgwY2lBOUlFMWhkR2d1YldsdUtFMWhkR2d1YldGNEtEQXNJSElwTENBeEtUdGNibHgwWnlBOUlFMWhkR2d1YldsdUtFMWhkR2d1YldGNEtEQXNJR2NwTENBeEtUdGNibHgwWWlBOUlFMWhkR2d1YldsdUtFMWhkR2d1YldGNEtEQXNJR0lwTENBeEtUdGNibHh1WEhSeVpYUjFjbTRnVzNJZ0tpQXlOVFVzSUdjZ0tpQXlOVFVzSUdJZ0tpQXlOVFZkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzU0ZVhvdWJHRmlJRDBnWm5WdVkzUnBiMjRnS0hoNWVpa2dlMXh1WEhSMllYSWdlQ0E5SUhoNWVsc3dYVHRjYmx4MGRtRnlJSGtnUFNCNGVYcGJNVjA3WEc1Y2RIWmhjaUI2SUQwZ2VIbDZXekpkTzF4dVhIUjJZWElnYkR0Y2JseDBkbUZ5SUdFN1hHNWNkSFpoY2lCaU8xeHVYRzVjZEhnZ0x6MGdPVFV1TURRM08xeHVYSFI1SUM4OUlERXdNRHRjYmx4MGVpQXZQU0F4TURndU9EZ3pPMXh1WEc1Y2RIZ2dQU0I0SUQ0Z01DNHdNRGc0TlRZZ1B5Qk5ZWFJvTG5CdmR5aDRMQ0F4SUM4Z015a2dPaUFvTnk0M09EY2dLaUI0S1NBcklDZ3hOaUF2SURFeE5pazdYRzVjZEhrZ1BTQjVJRDRnTUM0d01EZzROVFlnUHlCTllYUm9MbkJ2ZHloNUxDQXhJQzhnTXlrZ09pQW9OeTQzT0RjZ0tpQjVLU0FySUNneE5pQXZJREV4TmlrN1hHNWNkSG9nUFNCNklENGdNQzR3TURnNE5UWWdQeUJOWVhSb0xuQnZkeWg2TENBeElDOGdNeWtnT2lBb055NDNPRGNnS2lCNktTQXJJQ2d4TmlBdklERXhOaWs3WEc1Y2JseDBiQ0E5SUNneE1UWWdLaUI1S1NBdElERTJPMXh1WEhSaElEMGdOVEF3SUNvZ0tIZ2dMU0I1S1R0Y2JseDBZaUE5SURJd01DQXFJQ2g1SUMwZ2VpazdYRzVjYmx4MGNtVjBkWEp1SUZ0c0xDQmhMQ0JpWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1YkdGaUxuaDVlaUE5SUdaMWJtTjBhVzl1SUNoc1lXSXBJSHRjYmx4MGRtRnlJR3dnUFNCc1lXSmJNRjA3WEc1Y2RIWmhjaUJoSUQwZ2JHRmlXekZkTzF4dVhIUjJZWElnWWlBOUlHeGhZbHN5WFR0Y2JseDBkbUZ5SUhnN1hHNWNkSFpoY2lCNU8xeHVYSFIyWVhJZ2VqdGNibHh1WEhSNUlEMGdLR3dnS3lBeE5pa2dMeUF4TVRZN1hHNWNkSGdnUFNCaElDOGdOVEF3SUNzZ2VUdGNibHgwZWlBOUlIa2dMU0JpSUM4Z01qQXdPMXh1WEc1Y2RIWmhjaUI1TWlBOUlFMWhkR2d1Y0c5M0tIa3NJRE1wTzF4dVhIUjJZWElnZURJZ1BTQk5ZWFJvTG5CdmR5aDRMQ0F6S1R0Y2JseDBkbUZ5SUhveUlEMGdUV0YwYUM1d2IzY29laXdnTXlrN1hHNWNkSGtnUFNCNU1pQStJREF1TURBNE9EVTJJRDhnZVRJZ09pQW9lU0F0SURFMklDOGdNVEUyS1NBdklEY3VOemczTzF4dVhIUjRJRDBnZURJZ1BpQXdMakF3T0RnMU5pQS9JSGd5SURvZ0tIZ2dMU0F4TmlBdklERXhOaWtnTHlBM0xqYzROenRjYmx4MGVpQTlJSG95SUQ0Z01DNHdNRGc0TlRZZ1B5QjZNaUE2SUNoNklDMGdNVFlnTHlBeE1UWXBJQzhnTnk0M09EYzdYRzVjYmx4MGVDQXFQU0E1TlM0d05EYzdYRzVjZEhrZ0tqMGdNVEF3TzF4dVhIUjZJQ285SURFd09DNDRPRE03WEc1Y2JseDBjbVYwZFhKdUlGdDRMQ0I1TENCNlhUdGNibjA3WEc1Y2JtTnZiblpsY25RdWJHRmlMbXhqYUNBOUlHWjFibU4wYVc5dUlDaHNZV0lwSUh0Y2JseDBkbUZ5SUd3Z1BTQnNZV0piTUYwN1hHNWNkSFpoY2lCaElEMGdiR0ZpV3pGZE8xeHVYSFIyWVhJZ1lpQTlJR3hoWWxzeVhUdGNibHgwZG1GeUlHaHlPMXh1WEhSMllYSWdhRHRjYmx4MGRtRnlJR003WEc1Y2JseDBhSElnUFNCTllYUm9MbUYwWVc0eUtHSXNJR0VwTzF4dVhIUm9JRDBnYUhJZ0tpQXpOakFnTHlBeUlDOGdUV0YwYUM1UVNUdGNibHh1WEhScFppQW9hQ0E4SURBcElIdGNibHgwWEhSb0lDczlJRE0yTUR0Y2JseDBmVnh1WEc1Y2RHTWdQU0JOWVhSb0xuTnhjblFvWVNBcUlHRWdLeUJpSUNvZ1lpazdYRzVjYmx4MGNtVjBkWEp1SUZ0c0xDQmpMQ0JvWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1YkdOb0xteGhZaUE5SUdaMWJtTjBhVzl1SUNoc1kyZ3BJSHRjYmx4MGRtRnlJR3dnUFNCc1kyaGJNRjA3WEc1Y2RIWmhjaUJqSUQwZ2JHTm9XekZkTzF4dVhIUjJZWElnYUNBOUlHeGphRnN5WFR0Y2JseDBkbUZ5SUdFN1hHNWNkSFpoY2lCaU8xeHVYSFIyWVhJZ2FISTdYRzVjYmx4MGFISWdQU0JvSUM4Z016WXdJQ29nTWlBcUlFMWhkR2d1VUVrN1hHNWNkR0VnUFNCaklDb2dUV0YwYUM1amIzTW9hSElwTzF4dVhIUmlJRDBnWXlBcUlFMWhkR2d1YzJsdUtHaHlLVHRjYmx4dVhIUnlaWFIxY200Z1cyd3NJR0VzSUdKZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1eVoySXVZVzV6YVRFMklEMGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwZG1GeUlISWdQU0JoY21keld6QmRPMXh1WEhSMllYSWdaeUE5SUdGeVozTmJNVjA3WEc1Y2RIWmhjaUJpSUQwZ1lYSm5jMXN5WFR0Y2JseDBkbUZ5SUhaaGJIVmxJRDBnTVNCcGJpQmhjbWQxYldWdWRITWdQeUJoY21kMWJXVnVkSE5iTVYwZ09pQmpiMjUyWlhKMExuSm5ZaTVvYzNZb1lYSm5jeWxiTWwwN0lDOHZJR2h6ZGlBdFBpQmhibk5wTVRZZ2IzQjBhVzFwZW1GMGFXOXVYRzVjYmx4MGRtRnNkV1VnUFNCTllYUm9Mbkp2ZFc1a0tIWmhiSFZsSUM4Z05UQXBPMXh1WEc1Y2RHbG1JQ2gyWVd4MVpTQTlQVDBnTUNrZ2UxeHVYSFJjZEhKbGRIVnliaUF6TUR0Y2JseDBmVnh1WEc1Y2RIWmhjaUJoYm5OcElEMGdNekJjYmx4MFhIUXJJQ2dvVFdGMGFDNXliM1Z1WkNoaUlDOGdNalUxS1NBOFBDQXlLVnh1WEhSY2RId2dLRTFoZEdndWNtOTFibVFvWnlBdklESTFOU2tnUER3Z01TbGNibHgwWEhSOElFMWhkR2d1Y205MWJtUW9jaUF2SURJMU5Ta3BPMXh1WEc1Y2RHbG1JQ2gyWVd4MVpTQTlQVDBnTWlrZ2UxeHVYSFJjZEdGdWMya2dLejBnTmpBN1hHNWNkSDFjYmx4dVhIUnlaWFIxY200Z1lXNXphVHRjYm4wN1hHNWNibU52Ym5abGNuUXVhSE4yTG1GdWMya3hOaUE5SUdaMWJtTjBhVzl1SUNoaGNtZHpLU0I3WEc1Y2RDOHZJRzl3ZEdsdGFYcGhkR2x2YmlCb1pYSmxPeUIzWlNCaGJISmxZV1I1SUd0dWIzY2dkR2hsSUhaaGJIVmxJR0Z1WkNCa2IyNG5kQ0J1WldWa0lIUnZJR2RsZEZ4dVhIUXZMeUJwZENCamIyNTJaWEowWldRZ1ptOXlJSFZ6TGx4dVhIUnlaWFIxY200Z1kyOXVkbVZ5ZEM1eVoySXVZVzV6YVRFMktHTnZiblpsY25RdWFITjJMbkpuWWloaGNtZHpLU3dnWVhKbmMxc3lYU2s3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1aGJuTnBNalUySUQwZ1puVnVZM1JwYjI0Z0tHRnlaM01wSUh0Y2JseDBkbUZ5SUhJZ1BTQmhjbWR6V3pCZE8xeHVYSFIyWVhJZ1p5QTlJR0Z5WjNOYk1WMDdYRzVjZEhaaGNpQmlJRDBnWVhKbmMxc3lYVHRjYmx4dVhIUXZMeUIzWlNCMWMyVWdkR2hsSUdWNGRHVnVaR1ZrSUdkeVpYbHpZMkZzWlNCd1lXeGxkSFJsSUdobGNtVXNJSGRwZEdnZ2RHaGxJR1Y0WTJWd2RHbHZiaUJ2Wmx4dVhIUXZMeUJpYkdGamF5QmhibVFnZDJocGRHVXVJRzV2Y20xaGJDQndZV3hsZEhSbElHOXViSGtnYUdGeklEUWdaM0psZVhOallXeGxJSE5vWVdSbGN5NWNibHgwYVdZZ0tISWdQVDA5SUdjZ0ppWWdaeUE5UFQwZ1lpa2dlMXh1WEhSY2RHbG1JQ2h5SUR3Z09Da2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlERTJPMXh1WEhSY2RIMWNibHh1WEhSY2RHbG1JQ2h5SUQ0Z01qUTRLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdNak14TzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQk5ZWFJvTG5KdmRXNWtLQ2dvY2lBdElEZ3BJQzhnTWpRM0tTQXFJREkwS1NBcklESXpNanRjYmx4MGZWeHVYRzVjZEhaaGNpQmhibk5wSUQwZ01UWmNibHgwWEhRcklDZ3pOaUFxSUUxaGRHZ3VjbTkxYm1Rb2NpQXZJREkxTlNBcUlEVXBLVnh1WEhSY2RDc2dLRFlnS2lCTllYUm9Mbkp2ZFc1a0tHY2dMeUF5TlRVZ0tpQTFLU2xjYmx4MFhIUXJJRTFoZEdndWNtOTFibVFvWWlBdklESTFOU0FxSURVcE8xeHVYRzVjZEhKbGRIVnliaUJoYm5OcE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1aGJuTnBNVFl1Y21kaUlEMGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwZG1GeUlHTnZiRzl5SUQwZ1lYSm5jeUFsSURFd08xeHVYRzVjZEM4dklHaGhibVJzWlNCbmNtVjVjMk5oYkdWY2JseDBhV1lnS0dOdmJHOXlJRDA5UFNBd0lIeDhJR052Ykc5eUlEMDlQU0EzS1NCN1hHNWNkRngwYVdZZ0tHRnlaM01nUGlBMU1Da2dlMXh1WEhSY2RGeDBZMjlzYjNJZ0t6MGdNeTQxTzF4dVhIUmNkSDFjYmx4dVhIUmNkR052Ykc5eUlEMGdZMjlzYjNJZ0x5QXhNQzQxSUNvZ01qVTFPMXh1WEc1Y2RGeDBjbVYwZFhKdUlGdGpiMnh2Y2l3Z1kyOXNiM0lzSUdOdmJHOXlYVHRjYmx4MGZWeHVYRzVjZEhaaGNpQnRkV3gwSUQwZ0tINStLR0Z5WjNNZ1BpQTFNQ2tnS3lBeEtTQXFJREF1TlR0Y2JseDBkbUZ5SUhJZ1BTQW9LR052Ykc5eUlDWWdNU2tnS2lCdGRXeDBLU0FxSURJMU5UdGNibHgwZG1GeUlHY2dQU0FvS0NoamIyeHZjaUErUGlBeEtTQW1JREVwSUNvZ2JYVnNkQ2tnS2lBeU5UVTdYRzVjZEhaaGNpQmlJRDBnS0Nnb1kyOXNiM0lnUGo0Z01pa2dKaUF4S1NBcUlHMTFiSFFwSUNvZ01qVTFPMXh1WEc1Y2RISmxkSFZ5YmlCYmNpd2daeXdnWWwwN1hHNTlPMXh1WEc1amIyNTJaWEowTG1GdWMya3lOVFl1Y21kaUlEMGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwTHk4Z2FHRnVaR3hsSUdkeVpYbHpZMkZzWlZ4dVhIUnBaaUFvWVhKbmN5QStQU0F5TXpJcElIdGNibHgwWEhSMllYSWdZeUE5SUNoaGNtZHpJQzBnTWpNeUtTQXFJREV3SUNzZ09EdGNibHgwWEhSeVpYUjFjbTRnVzJNc0lHTXNJR05kTzF4dVhIUjlYRzVjYmx4MFlYSm5jeUF0UFNBeE5qdGNibHh1WEhSMllYSWdjbVZ0TzF4dVhIUjJZWElnY2lBOUlFMWhkR2d1Wm14dmIzSW9ZWEpuY3lBdklETTJLU0F2SURVZ0tpQXlOVFU3WEc1Y2RIWmhjaUJuSUQwZ1RXRjBhQzVtYkc5dmNpZ29jbVZ0SUQwZ1lYSm5jeUFsSURNMktTQXZJRFlwSUM4Z05TQXFJREkxTlR0Y2JseDBkbUZ5SUdJZ1BTQW9jbVZ0SUNVZ05pa2dMeUExSUNvZ01qVTFPMXh1WEc1Y2RISmxkSFZ5YmlCYmNpd2daeXdnWWwwN1hHNTlPMXh1WEc1amIyNTJaWEowTG5KbllpNW9aWGdnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUjJZWElnYVc1MFpXZGxjaUE5SUNnb1RXRjBhQzV5YjNWdVpDaGhjbWR6V3pCZEtTQW1JREI0UmtZcElEdzhJREUyS1Z4dVhIUmNkQ3NnS0NoTllYUm9Mbkp2ZFc1a0tHRnlaM05iTVYwcElDWWdNSGhHUmlrZ1BEd2dPQ2xjYmx4MFhIUXJJQ2hOWVhSb0xuSnZkVzVrS0dGeVozTmJNbDBwSUNZZ01IaEdSaWs3WEc1Y2JseDBkbUZ5SUhOMGNtbHVaeUE5SUdsdWRHVm5aWEl1ZEc5VGRISnBibWNvTVRZcExuUnZWWEJ3WlhKRFlYTmxLQ2s3WEc1Y2RISmxkSFZ5YmlBbk1EQXdNREF3Snk1emRXSnpkSEpwYm1jb2MzUnlhVzVuTG14bGJtZDBhQ2tnS3lCemRISnBibWM3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWhsZUM1eVoySWdQU0JtZFc1amRHbHZiaUFvWVhKbmN5a2dlMXh1WEhSMllYSWdiV0YwWTJnZ1BTQmhjbWR6TG5SdlUzUnlhVzVuS0RFMktTNXRZWFJqYUNndlcyRXRaakF0T1YxN05uMThXMkV0WmpBdE9WMTdNMzB2YVNrN1hHNWNkR2xtSUNnaGJXRjBZMmdwSUh0Y2JseDBYSFJ5WlhSMWNtNGdXekFzSURBc0lEQmRPMXh1WEhSOVhHNWNibHgwZG1GeUlHTnZiRzl5VTNSeWFXNW5JRDBnYldGMFkyaGJNRjA3WEc1Y2JseDBhV1lnS0cxaGRHTm9XekJkTG14bGJtZDBhQ0E5UFQwZ015a2dlMXh1WEhSY2RHTnZiRzl5VTNSeWFXNW5JRDBnWTI5c2IzSlRkSEpwYm1jdWMzQnNhWFFvSnljcExtMWhjQ2htZFc1amRHbHZiaUFvWTJoaGNpa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHTm9ZWElnS3lCamFHRnlPMXh1WEhSY2RIMHBMbXB2YVc0b0p5Y3BPMXh1WEhSOVhHNWNibHgwZG1GeUlHbHVkR1ZuWlhJZ1BTQndZWEp6WlVsdWRDaGpiMnh2Y2xOMGNtbHVaeXdnTVRZcE8xeHVYSFIyWVhJZ2NpQTlJQ2hwYm5SbFoyVnlJRDQrSURFMktTQW1JREI0UmtZN1hHNWNkSFpoY2lCbklEMGdLR2x1ZEdWblpYSWdQajRnT0NrZ0ppQXdlRVpHTzF4dVhIUjJZWElnWWlBOUlHbHVkR1ZuWlhJZ0ppQXdlRVpHTzF4dVhHNWNkSEpsZEhWeWJpQmJjaXdnWnl3Z1lsMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExuSm5ZaTVvWTJjZ1BTQm1kVzVqZEdsdmJpQW9jbWRpS1NCN1hHNWNkSFpoY2lCeUlEMGdjbWRpV3pCZElDOGdNalUxTzF4dVhIUjJZWElnWnlBOUlISm5ZbHN4WFNBdklESTFOVHRjYmx4MGRtRnlJR0lnUFNCeVoySmJNbDBnTHlBeU5UVTdYRzVjZEhaaGNpQnRZWGdnUFNCTllYUm9MbTFoZUNoTllYUm9MbTFoZUNoeUxDQm5LU3dnWWlrN1hHNWNkSFpoY2lCdGFXNGdQU0JOWVhSb0xtMXBiaWhOWVhSb0xtMXBiaWh5TENCbktTd2dZaWs3WEc1Y2RIWmhjaUJqYUhKdmJXRWdQU0FvYldGNElDMGdiV2x1S1R0Y2JseDBkbUZ5SUdkeVlYbHpZMkZzWlR0Y2JseDBkbUZ5SUdoMVpUdGNibHh1WEhScFppQW9ZMmh5YjIxaElEd2dNU2tnZTF4dVhIUmNkR2R5WVhselkyRnNaU0E5SUcxcGJpQXZJQ2d4SUMwZ1kyaHliMjFoS1R0Y2JseDBmU0JsYkhObElIdGNibHgwWEhSbmNtRjVjMk5oYkdVZ1BTQXdPMXh1WEhSOVhHNWNibHgwYVdZZ0tHTm9jbTl0WVNBOFBTQXdLU0I3WEc1Y2RGeDBhSFZsSUQwZ01EdGNibHgwZlNCbGJITmxYRzVjZEdsbUlDaHRZWGdnUFQwOUlISXBJSHRjYmx4MFhIUm9kV1VnUFNBb0tHY2dMU0JpS1NBdklHTm9jbTl0WVNrZ0pTQTJPMXh1WEhSOUlHVnNjMlZjYmx4MGFXWWdLRzFoZUNBOVBUMGdaeWtnZTF4dVhIUmNkR2gxWlNBOUlESWdLeUFvWWlBdElISXBJQzhnWTJoeWIyMWhPMXh1WEhSOUlHVnNjMlVnZTF4dVhIUmNkR2gxWlNBOUlEUWdLeUFvY2lBdElHY3BJQzhnWTJoeWIyMWhJQ3NnTkR0Y2JseDBmVnh1WEc1Y2RHaDFaU0F2UFNBMk8xeHVYSFJvZFdVZ0pUMGdNVHRjYmx4dVhIUnlaWFIxY200Z1cyaDFaU0FxSURNMk1Dd2dZMmh5YjIxaElDb2dNVEF3TENCbmNtRjVjMk5oYkdVZ0tpQXhNREJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVvYzJ3dWFHTm5JRDBnWm5WdVkzUnBiMjRnS0doemJDa2dlMXh1WEhSMllYSWdjeUE5SUdoemJGc3hYU0F2SURFd01EdGNibHgwZG1GeUlHd2dQU0JvYzJ4Yk1sMGdMeUF4TURBN1hHNWNkSFpoY2lCaklEMGdNVHRjYmx4MGRtRnlJR1lnUFNBd08xeHVYRzVjZEdsbUlDaHNJRHdnTUM0MUtTQjdYRzVjZEZ4MFl5QTlJREl1TUNBcUlITWdLaUJzTzF4dVhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEdNZ1BTQXlMakFnS2lCeklDb2dLREV1TUNBdElHd3BPMXh1WEhSOVhHNWNibHgwYVdZZ0tHTWdQQ0F4TGpBcElIdGNibHgwWEhSbUlEMGdLR3dnTFNBd0xqVWdLaUJqS1NBdklDZ3hMakFnTFNCaktUdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQmJhSE5zV3pCZExDQmpJQ29nTVRBd0xDQm1JQ29nTVRBd1hUdGNibjA3WEc1Y2JtTnZiblpsY25RdWFITjJMbWhqWnlBOUlHWjFibU4wYVc5dUlDaG9jM1lwSUh0Y2JseDBkbUZ5SUhNZ1BTQm9jM1piTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUIySUQwZ2FITjJXekpkSUM4Z01UQXdPMXh1WEc1Y2RIWmhjaUJqSUQwZ2N5QXFJSFk3WEc1Y2RIWmhjaUJtSUQwZ01EdGNibHh1WEhScFppQW9ZeUE4SURFdU1Da2dlMXh1WEhSY2RHWWdQU0FvZGlBdElHTXBJQzhnS0RFZ0xTQmpLVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJiYUhOMld6QmRMQ0JqSUNvZ01UQXdMQ0JtSUNvZ01UQXdYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVhR05uTG5KbllpQTlJR1oxYm1OMGFXOXVJQ2hvWTJjcElIdGNibHgwZG1GeUlHZ2dQU0JvWTJkYk1GMGdMeUF6TmpBN1hHNWNkSFpoY2lCaklEMGdhR05uV3pGZElDOGdNVEF3TzF4dVhIUjJZWElnWnlBOUlHaGpaMXN5WFNBdklERXdNRHRjYmx4dVhIUnBaaUFvWXlBOVBUMGdNQzR3S1NCN1hHNWNkRngwY21WMGRYSnVJRnRuSUNvZ01qVTFMQ0JuSUNvZ01qVTFMQ0JuSUNvZ01qVTFYVHRjYmx4MGZWeHVYRzVjZEhaaGNpQndkWEpsSUQwZ1d6QXNJREFzSURCZE8xeHVYSFIyWVhJZ2FHa2dQU0FvYUNBbElERXBJQ29nTmp0Y2JseDBkbUZ5SUhZZ1BTQm9hU0FsSURFN1hHNWNkSFpoY2lCM0lEMGdNU0F0SUhZN1hHNWNkSFpoY2lCdFp5QTlJREE3WEc1Y2JseDBjM2RwZEdOb0lDaE5ZWFJvTG1ac2IyOXlLR2hwS1NrZ2UxeHVYSFJjZEdOaGMyVWdNRHBjYmx4MFhIUmNkSEIxY21WYk1GMGdQU0F4T3lCd2RYSmxXekZkSUQwZ2Rqc2djSFZ5WlZzeVhTQTlJREE3SUdKeVpXRnJPMXh1WEhSY2RHTmhjMlVnTVRwY2JseDBYSFJjZEhCMWNtVmJNRjBnUFNCM095QndkWEpsV3pGZElEMGdNVHNnY0hWeVpWc3lYU0E5SURBN0lHSnlaV0ZyTzF4dVhIUmNkR05oYzJVZ01qcGNibHgwWEhSY2RIQjFjbVZiTUYwZ1BTQXdPeUJ3ZFhKbFd6RmRJRDBnTVRzZ2NIVnlaVnN5WFNBOUlIWTdJR0p5WldGck8xeHVYSFJjZEdOaGMyVWdNenBjYmx4MFhIUmNkSEIxY21WYk1GMGdQU0F3T3lCd2RYSmxXekZkSUQwZ2R6c2djSFZ5WlZzeVhTQTlJREU3SUdKeVpXRnJPMXh1WEhSY2RHTmhjMlVnTkRwY2JseDBYSFJjZEhCMWNtVmJNRjBnUFNCMk95QndkWEpsV3pGZElEMGdNRHNnY0hWeVpWc3lYU0E5SURFN0lHSnlaV0ZyTzF4dVhIUmNkR1JsWm1GMWJIUTZYRzVjZEZ4MFhIUndkWEpsV3pCZElEMGdNVHNnY0hWeVpWc3hYU0E5SURBN0lIQjFjbVZiTWwwZ1BTQjNPMXh1WEhSOVhHNWNibHgwYldjZ1BTQW9NUzR3SUMwZ1l5a2dLaUJuTzF4dVhHNWNkSEpsZEhWeWJpQmJYRzVjZEZ4MEtHTWdLaUJ3ZFhKbFd6QmRJQ3NnYldjcElDb2dNalUxTEZ4dVhIUmNkQ2hqSUNvZ2NIVnlaVnN4WFNBcklHMW5LU0FxSURJMU5TeGNibHgwWEhRb1l5QXFJSEIxY21WYk1sMGdLeUJ0WnlrZ0tpQXlOVFZjYmx4MFhUdGNibjA3WEc1Y2JtTnZiblpsY25RdWFHTm5MbWh6ZGlBOUlHWjFibU4wYVc5dUlDaG9ZMmNwSUh0Y2JseDBkbUZ5SUdNZ1BTQm9ZMmRiTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUJuSUQwZ2FHTm5XekpkSUM4Z01UQXdPMXh1WEc1Y2RIWmhjaUIySUQwZ1l5QXJJR2NnS2lBb01TNHdJQzBnWXlrN1hHNWNkSFpoY2lCbUlEMGdNRHRjYmx4dVhIUnBaaUFvZGlBK0lEQXVNQ2tnZTF4dVhIUmNkR1lnUFNCaklDOGdkanRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJiYUdObld6QmRMQ0JtSUNvZ01UQXdMQ0IySUNvZ01UQXdYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVhR05uTG1oemJDQTlJR1oxYm1OMGFXOXVJQ2hvWTJjcElIdGNibHgwZG1GeUlHTWdQU0JvWTJkYk1WMGdMeUF4TURBN1hHNWNkSFpoY2lCbklEMGdhR05uV3pKZElDOGdNVEF3TzF4dVhHNWNkSFpoY2lCc0lEMGdaeUFxSUNneExqQWdMU0JqS1NBcklEQXVOU0FxSUdNN1hHNWNkSFpoY2lCeklEMGdNRHRjYmx4dVhIUnBaaUFvYkNBK0lEQXVNQ0FtSmlCc0lEd2dNQzQxS1NCN1hHNWNkRngwY3lBOUlHTWdMeUFvTWlBcUlHd3BPMXh1WEhSOUlHVnNjMlZjYmx4MGFXWWdLR3dnUGowZ01DNDFJQ1ltSUd3Z1BDQXhMakFwSUh0Y2JseDBYSFJ6SUQwZ1l5QXZJQ2d5SUNvZ0tERWdMU0JzS1NrN1hHNWNkSDFjYmx4dVhIUnlaWFIxY200Z1cyaGpaMXN3WFN3Z2N5QXFJREV3TUN3Z2JDQXFJREV3TUYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG1oalp5NW9kMklnUFNCbWRXNWpkR2x2YmlBb2FHTm5LU0I3WEc1Y2RIWmhjaUJqSUQwZ2FHTm5XekZkSUM4Z01UQXdPMXh1WEhSMllYSWdaeUE5SUdoaloxc3lYU0F2SURFd01EdGNibHgwZG1GeUlIWWdQU0JqSUNzZ1p5QXFJQ2d4TGpBZ0xTQmpLVHRjYmx4MGNtVjBkWEp1SUZ0b1kyZGJNRjBzSUNoMklDMGdZeWtnS2lBeE1EQXNJQ2d4SUMwZ2Rpa2dLaUF4TURCZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b2QySXVhR05uSUQwZ1puVnVZM1JwYjI0Z0tHaDNZaWtnZTF4dVhIUjJZWElnZHlBOUlHaDNZbHN4WFNBdklERXdNRHRjYmx4MGRtRnlJR0lnUFNCb2QySmJNbDBnTHlBeE1EQTdYRzVjZEhaaGNpQjJJRDBnTVNBdElHSTdYRzVjZEhaaGNpQmpJRDBnZGlBdElIYzdYRzVjZEhaaGNpQm5JRDBnTUR0Y2JseHVYSFJwWmlBb1l5QThJREVwSUh0Y2JseDBYSFJuSUQwZ0tIWWdMU0JqS1NBdklDZ3hJQzBnWXlrN1hHNWNkSDFjYmx4dVhIUnlaWFIxY200Z1cyaDNZbHN3WFN3Z1l5QXFJREV3TUN3Z1p5QXFJREV3TUYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG1Gd2NHeGxMbkpuWWlBOUlHWjFibU4wYVc5dUlDaGhjSEJzWlNrZ2UxeHVYSFJ5WlhSMWNtNGdXeWhoY0hCc1pWc3dYU0F2SURZMU5UTTFLU0FxSURJMU5Td2dLR0Z3Y0d4bFd6RmRJQzhnTmpVMU16VXBJQ29nTWpVMUxDQW9ZWEJ3YkdWYk1sMGdMeUEyTlRVek5Ta2dLaUF5TlRWZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1eVoySXVZWEJ3YkdVZ1BTQm1kVzVqZEdsdmJpQW9jbWRpS1NCN1hHNWNkSEpsZEhWeWJpQmJLSEpuWWxzd1hTQXZJREkxTlNrZ0tpQTJOVFV6TlN3Z0tISm5ZbHN4WFNBdklESTFOU2tnS2lBMk5UVXpOU3dnS0hKbllsc3lYU0F2SURJMU5Ta2dLaUEyTlRVek5WMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExtZHlZWGt1Y21kaUlEMGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwY21WMGRYSnVJRnRoY21keld6QmRJQzhnTVRBd0lDb2dNalUxTENCaGNtZHpXekJkSUM4Z01UQXdJQ29nTWpVMUxDQmhjbWR6V3pCZElDOGdNVEF3SUNvZ01qVTFYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVaM0poZVM1b2Myd2dQU0JqYjI1MlpYSjBMbWR5WVhrdWFITjJJRDBnWm5WdVkzUnBiMjRnS0dGeVozTXBJSHRjYmx4MGNtVjBkWEp1SUZzd0xDQXdMQ0JoY21keld6QmRYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVaM0poZVM1b2QySWdQU0JtZFc1amRHbHZiaUFvWjNKaGVTa2dlMXh1WEhSeVpYUjFjbTRnV3pBc0lERXdNQ3dnWjNKaGVWc3dYVjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWR5WVhrdVkyMTVheUE5SUdaMWJtTjBhVzl1SUNobmNtRjVLU0I3WEc1Y2RISmxkSFZ5YmlCYk1Dd2dNQ3dnTUN3Z1ozSmhlVnN3WFYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG1keVlYa3ViR0ZpSUQwZ1puVnVZM1JwYjI0Z0tHZHlZWGtwSUh0Y2JseDBjbVYwZFhKdUlGdG5jbUY1V3pCZExDQXdMQ0F3WFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1WjNKaGVTNW9aWGdnUFNCbWRXNWpkR2x2YmlBb1ozSmhlU2tnZTF4dVhIUjJZWElnZG1Gc0lEMGdUV0YwYUM1eWIzVnVaQ2huY21GNVd6QmRJQzhnTVRBd0lDb2dNalUxS1NBbUlEQjRSa1k3WEc1Y2RIWmhjaUJwYm5SbFoyVnlJRDBnS0haaGJDQThQQ0F4TmlrZ0t5QW9kbUZzSUR3OElEZ3BJQ3NnZG1Gc08xeHVYRzVjZEhaaGNpQnpkSEpwYm1jZ1BTQnBiblJsWjJWeUxuUnZVM1J5YVc1bktERTJLUzUwYjFWd2NHVnlRMkZ6WlNncE8xeHVYSFJ5WlhSMWNtNGdKekF3TURBd01DY3VjM1ZpYzNSeWFXNW5LSE4wY21sdVp5NXNaVzVuZEdncElDc2djM1J5YVc1bk8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1eVoySXVaM0poZVNBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBkbUZ5SUhaaGJDQTlJQ2h5WjJKYk1GMGdLeUJ5WjJKYk1WMGdLeUJ5WjJKYk1sMHBJQzhnTXp0Y2JseDBjbVYwZFhKdUlGdDJZV3dnTHlBeU5UVWdLaUF4TURCZE8xeHVmVHRjYmlJc0luWmhjaUJqYjI1MlpYSnphVzl1Y3lBOUlISmxjWFZwY21Vb0p5NHZZMjl1ZG1WeWMybHZibk1uS1R0Y2JuWmhjaUJ5YjNWMFpTQTlJSEpsY1hWcGNtVW9KeTR2Y205MWRHVW5LVHRjYmx4dWRtRnlJR052Ym5abGNuUWdQU0I3ZlR0Y2JseHVkbUZ5SUcxdlpHVnNjeUE5SUU5aWFtVmpkQzVyWlhsektHTnZiblpsY25OcGIyNXpLVHRjYmx4dVpuVnVZM1JwYjI0Z2QzSmhjRkpoZHlobWJpa2dlMXh1WEhSMllYSWdkM0poY0hCbFpFWnVJRDBnWm5WdVkzUnBiMjRnS0dGeVozTXBJSHRjYmx4MFhIUnBaaUFvWVhKbmN5QTlQVDBnZFc1a1pXWnBibVZrSUh4OElHRnlaM01nUFQwOUlHNTFiR3dwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJoY21kek8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNU2tnZTF4dVhIUmNkRngwWVhKbmN5QTlJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXpiR2xqWlM1allXeHNLR0Z5WjNWdFpXNTBjeWs3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlHWnVLR0Z5WjNNcE8xeHVYSFI5TzF4dVhHNWNkQzh2SUhCeVpYTmxjblpsSUM1amIyNTJaWEp6YVc5dUlIQnliM0JsY25SNUlHbG1JSFJvWlhKbElHbHpJRzl1WlZ4dVhIUnBaaUFvSjJOdmJuWmxjbk5wYjI0bklHbHVJR1p1S1NCN1hHNWNkRngwZDNKaGNIQmxaRVp1TG1OdmJuWmxjbk5wYjI0Z1BTQm1iaTVqYjI1MlpYSnphVzl1TzF4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUhkeVlYQndaV1JHYmp0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnZDNKaGNGSnZkVzVrWldRb1ptNHBJSHRjYmx4MGRtRnlJSGR5WVhCd1pXUkdiaUE5SUdaMWJtTjBhVzl1SUNoaGNtZHpLU0I3WEc1Y2RGeDBhV1lnS0dGeVozTWdQVDA5SUhWdVpHVm1hVzVsWkNCOGZDQmhjbWR6SUQwOVBTQnVkV3hzS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWVhKbmN6dGNibHgwWEhSOVhHNWNibHgwWEhScFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDQStJREVwSUh0Y2JseDBYSFJjZEdGeVozTWdQU0JCY25KaGVTNXdjbTkwYjNSNWNHVXVjMnhwWTJVdVkyRnNiQ2hoY21kMWJXVnVkSE1wTzF4dVhIUmNkSDFjYmx4dVhIUmNkSFpoY2lCeVpYTjFiSFFnUFNCbWJpaGhjbWR6S1R0Y2JseHVYSFJjZEM4dklIZGxKM0psSUdGemMzVnRhVzVuSUhSb1pTQnlaWE4xYkhRZ2FYTWdZVzRnWVhKeVlYa2dhR1Z5WlM1Y2JseDBYSFF2THlCelpXVWdibTkwYVdObElHbHVJR052Ym5abGNuTnBiMjV6TG1wek95QmtiMjRuZENCMWMyVWdZbTk0SUhSNWNHVnpYRzVjZEZ4MEx5OGdhVzRnWTI5dWRtVnljMmx2YmlCbWRXNWpkR2x2Ym5NdVhHNWNkRngwYVdZZ0tIUjVjR1Z2WmlCeVpYTjFiSFFnUFQwOUlDZHZZbXBsWTNRbktTQjdYRzVjZEZ4MFhIUm1iM0lnS0haaGNpQnNaVzRnUFNCeVpYTjFiSFF1YkdWdVozUm9MQ0JwSUQwZ01Ec2dhU0E4SUd4bGJqc2dhU3NyS1NCN1hHNWNkRngwWEhSY2RISmxjM1ZzZEZ0cFhTQTlJRTFoZEdndWNtOTFibVFvY21WemRXeDBXMmxkS1R0Y2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2JseDBYSFJ5WlhSMWNtNGdjbVZ6ZFd4ME8xeHVYSFI5TzF4dVhHNWNkQzh2SUhCeVpYTmxjblpsSUM1amIyNTJaWEp6YVc5dUlIQnliM0JsY25SNUlHbG1JSFJvWlhKbElHbHpJRzl1WlZ4dVhIUnBaaUFvSjJOdmJuWmxjbk5wYjI0bklHbHVJR1p1S1NCN1hHNWNkRngwZDNKaGNIQmxaRVp1TG1OdmJuWmxjbk5wYjI0Z1BTQm1iaTVqYjI1MlpYSnphVzl1TzF4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUhkeVlYQndaV1JHYmp0Y2JuMWNibHh1Ylc5a1pXeHpMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLR1p5YjIxTmIyUmxiQ2tnZTF4dVhIUmpiMjUyWlhKMFcyWnliMjFOYjJSbGJGMGdQU0I3ZlR0Y2JseHVYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1kyOXVkbVZ5ZEZ0bWNtOXRUVzlrWld4ZExDQW5ZMmhoYm01bGJITW5MQ0I3ZG1Gc2RXVTZJR052Ym5abGNuTnBiMjV6VzJaeWIyMU5iMlJsYkYwdVkyaGhibTVsYkhOOUtUdGNibHgwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHTnZiblpsY25SYlpuSnZiVTF2WkdWc1hTd2dKMnhoWW1Wc2N5Y3NJSHQyWVd4MVpUb2dZMjl1ZG1WeWMybHZibk5iWm5KdmJVMXZaR1ZzWFM1c1lXSmxiSE45S1R0Y2JseHVYSFIyWVhJZ2NtOTFkR1Z6SUQwZ2NtOTFkR1VvWm5KdmJVMXZaR1ZzS1R0Y2JseDBkbUZ5SUhKdmRYUmxUVzlrWld4eklEMGdUMkpxWldOMExtdGxlWE1vY205MWRHVnpLVHRjYmx4dVhIUnliM1YwWlUxdlpHVnNjeTVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2gwYjAxdlpHVnNLU0I3WEc1Y2RGeDBkbUZ5SUdadUlEMGdjbTkxZEdWelczUnZUVzlrWld4ZE8xeHVYRzVjZEZ4MFkyOXVkbVZ5ZEZ0bWNtOXRUVzlrWld4ZFczUnZUVzlrWld4ZElEMGdkM0poY0ZKdmRXNWtaV1FvWm00cE8xeHVYSFJjZEdOdmJuWmxjblJiWm5KdmJVMXZaR1ZzWFZ0MGIwMXZaR1ZzWFM1eVlYY2dQU0IzY21Gd1VtRjNLR1p1S1R0Y2JseDBmU2s3WEc1OUtUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JqYjI1MlpYSjBPMXh1SWl3aWRtRnlJR052Ym5abGNuTnBiMjV6SUQwZ2NtVnhkV2x5WlNnbkxpOWpiMjUyWlhKemFXOXVjeWNwTzF4dVhHNHZLbHh1WEhSMGFHbHpJR1oxYm1OMGFXOXVJSEp2ZFhSbGN5QmhJRzF2WkdWc0lIUnZJR0ZzYkNCdmRHaGxjaUJ0YjJSbGJITXVYRzVjYmx4MFlXeHNJR1oxYm1OMGFXOXVjeUIwYUdGMElHRnlaU0J5YjNWMFpXUWdhR0YyWlNCaElIQnliM0JsY25SNUlHQXVZMjl1ZG1WeWMybHZibUFnWVhSMFlXTm9aV1JjYmx4MGRHOGdkR2hsSUhKbGRIVnlibVZrSUhONWJuUm9aWFJwWXlCbWRXNWpkR2x2Ymk0Z1ZHaHBjeUJ3Y205d1pYSjBlU0JwY3lCaGJpQmhjbkpoZVZ4dVhIUnZaaUJ6ZEhKcGJtZHpMQ0JsWVdOb0lIZHBkR2dnZEdobElITjBaWEJ6SUdsdUlHSmxkSGRsWlc0Z2RHaGxJQ2RtY205dEp5QmhibVFnSjNSdkoxeHVYSFJqYjJ4dmNpQnRiMlJsYkhNZ0tHbHVZMngxYzJsMlpTa3VYRzVjYmx4MFkyOXVkbVZ5YzJsdmJuTWdkR2hoZENCaGNtVWdibTkwSUhCdmMzTnBZbXhsSUhOcGJYQnNlU0JoY21VZ2JtOTBJR2x1WTJ4MVpHVmtMbHh1S2k5Y2JseHVablZ1WTNScGIyNGdZblZwYkdSSGNtRndhQ2dwSUh0Y2JseDBkbUZ5SUdkeVlYQm9JRDBnZTMwN1hHNWNkQzh2SUdoMGRIQnpPaTh2YW5Od1pYSm1MbU52YlM5dlltcGxZM1F0YTJWNWN5MTJjeTFtYjNJdGFXNHRkMmwwYUMxamJHOXpkWEpsTHpOY2JseDBkbUZ5SUcxdlpHVnNjeUE5SUU5aWFtVmpkQzVyWlhsektHTnZiblpsY25OcGIyNXpLVHRjYmx4dVhIUm1iM0lnS0haaGNpQnNaVzRnUFNCdGIyUmxiSE11YkdWdVozUm9MQ0JwSUQwZ01Ec2dhU0E4SUd4bGJqc2dhU3NyS1NCN1hHNWNkRngwWjNKaGNHaGJiVzlrWld4elcybGRYU0E5SUh0Y2JseDBYSFJjZEM4dklHaDBkSEE2THk5cWMzQmxjbVl1WTI5dEx6RXRkbk10YVc1bWFXNXBkSGxjYmx4MFhIUmNkQzh2SUcxcFkzSnZMVzl3ZEN3Z1luVjBJSFJvYVhNZ2FYTWdjMmx0Y0d4bExseHVYSFJjZEZ4MFpHbHpkR0Z1WTJVNklDMHhMRnh1WEhSY2RGeDBjR0Z5Wlc1ME9pQnVkV3hzWEc1Y2RGeDBmVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJuY21Gd2FEdGNibjFjYmx4dUx5OGdhSFIwY0hNNkx5OWxiaTUzYVd0cGNHVmthV0V1YjNKbkwzZHBhMmt2UW5KbFlXUjBhQzFtYVhKemRGOXpaV0Z5WTJoY2JtWjFibU4wYVc5dUlHUmxjbWwyWlVKR1V5aG1jbTl0VFc5a1pXd3BJSHRjYmx4MGRtRnlJR2R5WVhCb0lEMGdZblZwYkdSSGNtRndhQ2dwTzF4dVhIUjJZWElnY1hWbGRXVWdQU0JiWm5KdmJVMXZaR1ZzWFRzZ0x5OGdkVzV6YUdsbWRDQXRQaUJ4ZFdWMVpTQXRQaUJ3YjNCY2JseHVYSFJuY21Gd2FGdG1jbTl0VFc5a1pXeGRMbVJwYzNSaGJtTmxJRDBnTUR0Y2JseHVYSFIzYUdsc1pTQW9jWFZsZFdVdWJHVnVaM1JvS1NCN1hHNWNkRngwZG1GeUlHTjFjbkpsYm5RZ1BTQnhkV1YxWlM1d2IzQW9LVHRjYmx4MFhIUjJZWElnWVdScVlXTmxiblJ6SUQwZ1QySnFaV04wTG10bGVYTW9ZMjl1ZG1WeWMybHZibk5iWTNWeWNtVnVkRjBwTzF4dVhHNWNkRngwWm05eUlDaDJZWElnYkdWdUlEMGdZV1JxWVdObGJuUnpMbXhsYm1kMGFDd2dhU0E5SURBN0lHa2dQQ0JzWlc0N0lHa3JLeWtnZTF4dVhIUmNkRngwZG1GeUlHRmthbUZqWlc1MElEMGdZV1JxWVdObGJuUnpXMmxkTzF4dVhIUmNkRngwZG1GeUlHNXZaR1VnUFNCbmNtRndhRnRoWkdwaFkyVnVkRjA3WEc1Y2JseDBYSFJjZEdsbUlDaHViMlJsTG1ScGMzUmhibU5sSUQwOVBTQXRNU2tnZTF4dVhIUmNkRngwWEhSdWIyUmxMbVJwYzNSaGJtTmxJRDBnWjNKaGNHaGJZM1Z5Y21WdWRGMHVaR2x6ZEdGdVkyVWdLeUF4TzF4dVhIUmNkRngwWEhSdWIyUmxMbkJoY21WdWRDQTlJR04xY25KbGJuUTdYRzVjZEZ4MFhIUmNkSEYxWlhWbExuVnVjMmhwWm5Rb1lXUnFZV05sYm5RcE8xeHVYSFJjZEZ4MGZWeHVYSFJjZEgxY2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCbmNtRndhRHRjYm4xY2JseHVablZ1WTNScGIyNGdiR2x1YXlobWNtOXRMQ0IwYnlrZ2UxeHVYSFJ5WlhSMWNtNGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwWEhSeVpYUjFjbTRnZEc4b1puSnZiU2hoY21kektTazdYRzVjZEgwN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUhkeVlYQkRiMjUyWlhKemFXOXVLSFJ2VFc5a1pXd3NJR2R5WVhCb0tTQjdYRzVjZEhaaGNpQndZWFJvSUQwZ1cyZHlZWEJvVzNSdlRXOWtaV3hkTG5CaGNtVnVkQ3dnZEc5TmIyUmxiRjA3WEc1Y2RIWmhjaUJtYmlBOUlHTnZiblpsY25OcGIyNXpXMmR5WVhCb1czUnZUVzlrWld4ZExuQmhjbVZ1ZEYxYmRHOU5iMlJsYkYwN1hHNWNibHgwZG1GeUlHTjFjaUE5SUdkeVlYQm9XM1J2VFc5a1pXeGRMbkJoY21WdWREdGNibHgwZDJocGJHVWdLR2R5WVhCb1cyTjFjbDB1Y0dGeVpXNTBLU0I3WEc1Y2RGeDBjR0YwYUM1MWJuTm9hV1owS0dkeVlYQm9XMk4xY2wwdWNHRnlaVzUwS1R0Y2JseDBYSFJtYmlBOUlHeHBibXNvWTI5dWRtVnljMmx2Ym5OYlozSmhjR2hiWTNWeVhTNXdZWEpsYm5SZFcyTjFjbDBzSUdadUtUdGNibHgwWEhSamRYSWdQU0JuY21Gd2FGdGpkWEpkTG5CaGNtVnVkRHRjYmx4MGZWeHVYRzVjZEdadUxtTnZiblpsY25OcGIyNGdQU0J3WVhSb08xeHVYSFJ5WlhSMWNtNGdabTQ3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdLR1p5YjIxTmIyUmxiQ2tnZTF4dVhIUjJZWElnWjNKaGNHZ2dQU0JrWlhKcGRtVkNSbE1vWm5KdmJVMXZaR1ZzS1R0Y2JseDBkbUZ5SUdOdmJuWmxjbk5wYjI0Z1BTQjdmVHRjYmx4dVhIUjJZWElnYlc5a1pXeHpJRDBnVDJKcVpXTjBMbXRsZVhNb1ozSmhjR2dwTzF4dVhIUm1iM0lnS0haaGNpQnNaVzRnUFNCdGIyUmxiSE11YkdWdVozUm9MQ0JwSUQwZ01Ec2dhU0E4SUd4bGJqc2dhU3NyS1NCN1hHNWNkRngwZG1GeUlIUnZUVzlrWld3Z1BTQnRiMlJsYkhOYmFWMDdYRzVjZEZ4MGRtRnlJRzV2WkdVZ1BTQm5jbUZ3YUZ0MGIwMXZaR1ZzWFR0Y2JseHVYSFJjZEdsbUlDaHViMlJsTG5CaGNtVnVkQ0E5UFQwZ2JuVnNiQ2tnZTF4dVhIUmNkRngwTHk4Z2JtOGdjRzl6YzJsaWJHVWdZMjl1ZG1WeWMybHZiaXdnYjNJZ2RHaHBjeUJ1YjJSbElHbHpJSFJvWlNCemIzVnlZMlVnYlc5a1pXd3VYRzVjZEZ4MFhIUmpiMjUwYVc1MVpUdGNibHgwWEhSOVhHNWNibHgwWEhSamIyNTJaWEp6YVc5dVczUnZUVzlrWld4ZElEMGdkM0poY0VOdmJuWmxjbk5wYjI0b2RHOU5iMlJsYkN3Z1ozSmhjR2dwTzF4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUdOdmJuWmxjbk5wYjI0N1hHNTlPMXh1WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2RjY2x4dVhISmNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh5WEc1Y2RGd2lZV3hwWTJWaWJIVmxYQ0k2SUZzeU5EQXNJREkwT0N3Z01qVTFYU3hjY2x4dVhIUmNJbUZ1ZEdseGRXVjNhR2wwWlZ3aU9pQmJNalV3TENBeU16VXNJREl4TlYwc1hISmNibHgwWENKaGNYVmhYQ0k2SUZzd0xDQXlOVFVzSURJMU5WMHNYSEpjYmx4MFhDSmhjWFZoYldGeWFXNWxYQ0k2SUZzeE1qY3NJREkxTlN3Z01qRXlYU3hjY2x4dVhIUmNJbUY2ZFhKbFhDSTZJRnN5TkRBc0lESTFOU3dnTWpVMVhTeGNjbHh1WEhSY0ltSmxhV2RsWENJNklGc3lORFVzSURJME5Td2dNakl3WFN4Y2NseHVYSFJjSW1KcGMzRjFaVndpT2lCYk1qVTFMQ0F5TWpnc0lERTVObDBzWEhKY2JseDBYQ0ppYkdGamExd2lPaUJiTUN3Z01Dd2dNRjBzWEhKY2JseDBYQ0ppYkdGdVkyaGxaR0ZzYlc5dVpGd2lPaUJiTWpVMUxDQXlNelVzSURJd05WMHNYSEpjYmx4MFhDSmliSFZsWENJNklGc3dMQ0F3TENBeU5UVmRMRnh5WEc1Y2RGd2lZbXgxWlhacGIyeGxkRndpT2lCYk1UTTRMQ0EwTXl3Z01qSTJYU3hjY2x4dVhIUmNJbUp5YjNkdVhDSTZJRnN4TmpVc0lEUXlMQ0EwTWwwc1hISmNibHgwWENKaWRYSnNlWGR2YjJSY0lqb2dXekl5TWl3Z01UZzBMQ0F4TXpWZExGeHlYRzVjZEZ3aVkyRmtaWFJpYkhWbFhDSTZJRnM1TlN3Z01UVTRMQ0F4TmpCZExGeHlYRzVjZEZ3aVkyaGhjblJ5WlhWelpWd2lPaUJiTVRJM0xDQXlOVFVzSURCZExGeHlYRzVjZEZ3aVkyaHZZMjlzWVhSbFhDSTZJRnN5TVRBc0lERXdOU3dnTXpCZExGeHlYRzVjZEZ3aVkyOXlZV3hjSWpvZ1d6STFOU3dnTVRJM0xDQTRNRjBzWEhKY2JseDBYQ0pqYjNKdVpteHZkMlZ5WW14MVpWd2lPaUJiTVRBd0xDQXhORGtzSURJek4xMHNYSEpjYmx4MFhDSmpiM0p1YzJsc2Exd2lPaUJiTWpVMUxDQXlORGdzSURJeU1GMHNYSEpjYmx4MFhDSmpjbWx0YzI5dVhDSTZJRnN5TWpBc0lESXdMQ0EyTUYwc1hISmNibHgwWENKamVXRnVYQ0k2SUZzd0xDQXlOVFVzSURJMU5WMHNYSEpjYmx4MFhDSmtZWEpyWW14MVpWd2lPaUJiTUN3Z01Dd2dNVE01WFN4Y2NseHVYSFJjSW1SaGNtdGplV0Z1WENJNklGc3dMQ0F4TXprc0lERXpPVjBzWEhKY2JseDBYQ0prWVhKcloyOXNaR1Z1Y205a1hDSTZJRnN4T0RRc0lERXpOQ3dnTVRGZExGeHlYRzVjZEZ3aVpHRnlhMmR5WVhsY0lqb2dXekUyT1N3Z01UWTVMQ0F4TmpsZExGeHlYRzVjZEZ3aVpHRnlhMmR5WldWdVhDSTZJRnN3TENBeE1EQXNJREJkTEZ4eVhHNWNkRndpWkdGeWEyZHlaWGxjSWpvZ1d6RTJPU3dnTVRZNUxDQXhOamxkTEZ4eVhHNWNkRndpWkdGeWEydG9ZV3RwWENJNklGc3hPRGtzSURFNE15d2dNVEEzWFN4Y2NseHVYSFJjSW1SaGNtdHRZV2RsYm5SaFhDSTZJRnN4TXprc0lEQXNJREV6T1Ywc1hISmNibHgwWENKa1lYSnJiMnhwZG1WbmNtVmxibHdpT2lCYk9EVXNJREV3Tnl3Z05EZGRMRnh5WEc1Y2RGd2laR0Z5YTI5eVlXNW5aVndpT2lCYk1qVTFMQ0F4TkRBc0lEQmRMRnh5WEc1Y2RGd2laR0Z5YTI5eVkyaHBaRndpT2lCYk1UVXpMQ0ExTUN3Z01qQTBYU3hjY2x4dVhIUmNJbVJoY210eVpXUmNJam9nV3pFek9Td2dNQ3dnTUYwc1hISmNibHgwWENKa1lYSnJjMkZzYlc5dVhDSTZJRnN5TXpNc0lERTFNQ3dnTVRJeVhTeGNjbHh1WEhSY0ltUmhjbXR6WldGbmNtVmxibHdpT2lCYk1UUXpMQ0F4T0Rnc0lERTBNMTBzWEhKY2JseDBYQ0prWVhKcmMyeGhkR1ZpYkhWbFhDSTZJRnMzTWl3Z05qRXNJREV6T1Ywc1hISmNibHgwWENKa1lYSnJjMnhoZEdWbmNtRjVYQ0k2SUZzME55d2dOemtzSURjNVhTeGNjbHh1WEhSY0ltUmhjbXR6YkdGMFpXZHlaWGxjSWpvZ1d6UTNMQ0EzT1N3Z056bGRMRnh5WEc1Y2RGd2laR0Z5YTNSMWNuRjFiMmx6WlZ3aU9pQmJNQ3dnTWpBMkxDQXlNRGxkTEZ4eVhHNWNkRndpWkdGeWEzWnBiMnhsZEZ3aU9pQmJNVFE0TENBd0xDQXlNVEZkTEZ4eVhHNWNkRndpWkdWbGNIQnBibXRjSWpvZ1d6STFOU3dnTWpBc0lERTBOMTBzWEhKY2JseDBYQ0prWldWd2MydDVZbXgxWlZ3aU9pQmJNQ3dnTVRreExDQXlOVFZkTEZ4eVhHNWNkRndpWkdsdFozSmhlVndpT2lCYk1UQTFMQ0F4TURVc0lERXdOVjBzWEhKY2JseDBYQ0prYVcxbmNtVjVYQ0k2SUZzeE1EVXNJREV3TlN3Z01UQTFYU3hjY2x4dVhIUmNJbVJ2WkdkbGNtSnNkV1ZjSWpvZ1d6TXdMQ0F4TkRRc0lESTFOVjBzWEhKY2JseDBYQ0ptYVhKbFluSnBZMnRjSWpvZ1d6RTNPQ3dnTXpRc0lETTBYU3hjY2x4dVhIUmNJbVpzYjNKaGJIZG9hWFJsWENJNklGc3lOVFVzSURJMU1Dd2dNalF3WFN4Y2NseHVYSFJjSW1admNtVnpkR2R5WldWdVhDSTZJRnN6TkN3Z01UTTVMQ0F6TkYwc1hISmNibHgwWENKbWRXTm9jMmxoWENJNklGc3lOVFVzSURBc0lESTFOVjBzWEhKY2JseDBYQ0puWVdsdWMySnZjbTljSWpvZ1d6SXlNQ3dnTWpJd0xDQXlNakJkTEZ4eVhHNWNkRndpWjJodmMzUjNhR2wwWlZ3aU9pQmJNalE0TENBeU5EZ3NJREkxTlYwc1hISmNibHgwWENKbmIyeGtYQ0k2SUZzeU5UVXNJREl4TlN3Z01GMHNYSEpjYmx4MFhDSm5iMnhrWlc1eWIyUmNJam9nV3pJeE9Dd2dNVFkxTENBek1sMHNYSEpjYmx4MFhDSm5jbUY1WENJNklGc3hNamdzSURFeU9Dd2dNVEk0WFN4Y2NseHVYSFJjSW1keVpXVnVYQ0k2SUZzd0xDQXhNamdzSURCZExGeHlYRzVjZEZ3aVozSmxaVzU1Wld4c2IzZGNJam9nV3pFM015d2dNalUxTENBME4xMHNYSEpjYmx4MFhDSm5jbVY1WENJNklGc3hNamdzSURFeU9Dd2dNVEk0WFN4Y2NseHVYSFJjSW1odmJtVjVaR1YzWENJNklGc3lOREFzSURJMU5Td2dNalF3WFN4Y2NseHVYSFJjSW1odmRIQnBibXRjSWpvZ1d6STFOU3dnTVRBMUxDQXhPREJkTEZ4eVhHNWNkRndpYVc1a2FXRnVjbVZrWENJNklGc3lNRFVzSURreUxDQTVNbDBzWEhKY2JseDBYQ0pwYm1ScFoyOWNJam9nV3pjMUxDQXdMQ0F4TXpCZExGeHlYRzVjZEZ3aWFYWnZjbmxjSWpvZ1d6STFOU3dnTWpVMUxDQXlOREJkTEZ4eVhHNWNkRndpYTJoaGEybGNJam9nV3pJME1Dd2dNak13TENBeE5EQmRMRnh5WEc1Y2RGd2liR0YyWlc1a1pYSmNJam9nV3pJek1Dd2dNak13TENBeU5UQmRMRnh5WEc1Y2RGd2liR0YyWlc1a1pYSmliSFZ6YUZ3aU9pQmJNalUxTENBeU5EQXNJREkwTlYwc1hISmNibHgwWENKc1lYZHVaM0psWlc1Y0lqb2dXekV5TkN3Z01qVXlMQ0F3WFN4Y2NseHVYSFJjSW14bGJXOXVZMmhwWm1admJsd2lPaUJiTWpVMUxDQXlOVEFzSURJd05WMHNYSEpjYmx4MFhDSnNhV2RvZEdKc2RXVmNJam9nV3pFM015d2dNakUyTENBeU16QmRMRnh5WEc1Y2RGd2liR2xuYUhSamIzSmhiRndpT2lCYk1qUXdMQ0F4TWpnc0lERXlPRjBzWEhKY2JseDBYQ0pzYVdkb2RHTjVZVzVjSWpvZ1d6SXlOQ3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpYkdsbmFIUm5iMnhrWlc1eWIyUjVaV3hzYjNkY0lqb2dXekkxTUN3Z01qVXdMQ0F5TVRCZExGeHlYRzVjZEZ3aWJHbG5hSFJuY21GNVhDSTZJRnN5TVRFc0lESXhNU3dnTWpFeFhTeGNjbHh1WEhSY0lteHBaMmgwWjNKbFpXNWNJam9nV3pFME5Dd2dNak00TENBeE5EUmRMRnh5WEc1Y2RGd2liR2xuYUhSbmNtVjVYQ0k2SUZzeU1URXNJREl4TVN3Z01qRXhYU3hjY2x4dVhIUmNJbXhwWjJoMGNHbHVhMXdpT2lCYk1qVTFMQ0F4T0RJc0lERTVNMTBzWEhKY2JseDBYQ0pzYVdkb2RITmhiRzF2Ymx3aU9pQmJNalUxTENBeE5qQXNJREV5TWwwc1hISmNibHgwWENKc2FXZG9kSE5sWVdkeVpXVnVYQ0k2SUZzek1pd2dNVGM0TENBeE56QmRMRnh5WEc1Y2RGd2liR2xuYUhSemEzbGliSFZsWENJNklGc3hNelVzSURJd05pd2dNalV3WFN4Y2NseHVYSFJjSW14cFoyaDBjMnhoZEdWbmNtRjVYQ0k2SUZzeE1Ua3NJREV6Tml3Z01UVXpYU3hjY2x4dVhIUmNJbXhwWjJoMGMyeGhkR1ZuY21WNVhDSTZJRnN4TVRrc0lERXpOaXdnTVRVelhTeGNjbHh1WEhSY0lteHBaMmgwYzNSbFpXeGliSFZsWENJNklGc3hOellzSURFNU5pd2dNakl5WFN4Y2NseHVYSFJjSW14cFoyaDBlV1ZzYkc5M1hDSTZJRnN5TlRVc0lESTFOU3dnTWpJMFhTeGNjbHh1WEhSY0lteHBiV1ZjSWpvZ1d6QXNJREkxTlN3Z01GMHNYSEpjYmx4MFhDSnNhVzFsWjNKbFpXNWNJam9nV3pVd0xDQXlNRFVzSURVd1hTeGNjbHh1WEhSY0lteHBibVZ1WENJNklGc3lOVEFzSURJME1Dd2dNak13WFN4Y2NseHVYSFJjSW0xaFoyVnVkR0ZjSWpvZ1d6STFOU3dnTUN3Z01qVTFYU3hjY2x4dVhIUmNJbTFoY205dmJsd2lPaUJiTVRJNExDQXdMQ0F3WFN4Y2NseHVYSFJjSW0xbFpHbDFiV0Z4ZFdGdFlYSnBibVZjSWpvZ1d6RXdNaXdnTWpBMUxDQXhOekJkTEZ4eVhHNWNkRndpYldWa2FYVnRZbXgxWlZ3aU9pQmJNQ3dnTUN3Z01qQTFYU3hjY2x4dVhIUmNJbTFsWkdsMWJXOXlZMmhwWkZ3aU9pQmJNVGcyTENBNE5Td2dNakV4WFN4Y2NseHVYSFJjSW0xbFpHbDFiWEIxY25Cc1pWd2lPaUJiTVRRM0xDQXhNVElzSURJeE9WMHNYSEpjYmx4MFhDSnRaV1JwZFcxelpXRm5jbVZsYmx3aU9pQmJOakFzSURFM09Td2dNVEV6WFN4Y2NseHVYSFJjSW0xbFpHbDFiWE5zWVhSbFlteDFaVndpT2lCYk1USXpMQ0F4TURRc0lESXpPRjBzWEhKY2JseDBYQ0p0WldScGRXMXpjSEpwYm1kbmNtVmxibHdpT2lCYk1Dd2dNalV3TENBeE5UUmRMRnh5WEc1Y2RGd2liV1ZrYVhWdGRIVnljWFZ2YVhObFhDSTZJRnMzTWl3Z01qQTVMQ0F5TURSZExGeHlYRzVjZEZ3aWJXVmthWFZ0ZG1sdmJHVjBjbVZrWENJNklGc3hPVGtzSURJeExDQXhNek5kTEZ4eVhHNWNkRndpYldsa2JtbG5hSFJpYkhWbFhDSTZJRnN5TlN3Z01qVXNJREV4TWwwc1hISmNibHgwWENKdGFXNTBZM0psWVcxY0lqb2dXekkwTlN3Z01qVTFMQ0F5TlRCZExGeHlYRzVjZEZ3aWJXbHpkSGx5YjNObFhDSTZJRnN5TlRVc0lESXlPQ3dnTWpJMVhTeGNjbHh1WEhSY0ltMXZZMk5oYzJsdVhDSTZJRnN5TlRVc0lESXlPQ3dnTVRneFhTeGNjbHh1WEhSY0ltNWhkbUZxYjNkb2FYUmxYQ0k2SUZzeU5UVXNJREl5TWl3Z01UY3pYU3hjY2x4dVhIUmNJbTVoZG5sY0lqb2dXekFzSURBc0lERXlPRjBzWEhKY2JseDBYQ0p2YkdSc1lXTmxYQ0k2SUZzeU5UTXNJREkwTlN3Z01qTXdYU3hjY2x4dVhIUmNJbTlzYVhabFhDSTZJRnN4TWpnc0lERXlPQ3dnTUYwc1hISmNibHgwWENKdmJHbDJaV1J5WVdKY0lqb2dXekV3Tnl3Z01UUXlMQ0F6TlYwc1hISmNibHgwWENKdmNtRnVaMlZjSWpvZ1d6STFOU3dnTVRZMUxDQXdYU3hjY2x4dVhIUmNJbTl5WVc1blpYSmxaRndpT2lCYk1qVTFMQ0EyT1N3Z01GMHNYSEpjYmx4MFhDSnZjbU5vYVdSY0lqb2dXekl4T0N3Z01URXlMQ0F5TVRSZExGeHlYRzVjZEZ3aWNHRnNaV2R2YkdSbGJuSnZaRndpT2lCYk1qTTRMQ0F5TXpJc0lERTNNRjBzWEhKY2JseDBYQ0p3WVd4bFozSmxaVzVjSWpvZ1d6RTFNaXdnTWpVeExDQXhOVEpkTEZ4eVhHNWNkRndpY0dGc1pYUjFjbkYxYjJselpWd2lPaUJiTVRjMUxDQXlNemdzSURJek9GMHNYSEpjYmx4MFhDSndZV3hsZG1sdmJHVjBjbVZrWENJNklGc3lNVGtzSURFeE1pd2dNVFEzWFN4Y2NseHVYSFJjSW5CaGNHRjVZWGRvYVhCY0lqb2dXekkxTlN3Z01qTTVMQ0F5TVROZExGeHlYRzVjZEZ3aWNHVmhZMmh3ZFdabVhDSTZJRnN5TlRVc0lESXhPQ3dnTVRnMVhTeGNjbHh1WEhSY0luQmxjblZjSWpvZ1d6SXdOU3dnTVRNekxDQTJNMTBzWEhKY2JseDBYQ0p3YVc1clhDSTZJRnN5TlRVc0lERTVNaXdnTWpBelhTeGNjbHh1WEhSY0luQnNkVzFjSWpvZ1d6SXlNU3dnTVRZd0xDQXlNakZkTEZ4eVhHNWNkRndpY0c5M1pHVnlZbXgxWlZ3aU9pQmJNVGMyTENBeU1qUXNJREl6TUYwc1hISmNibHgwWENKd2RYSndiR1ZjSWpvZ1d6RXlPQ3dnTUN3Z01USTRYU3hjY2x4dVhIUmNJbkpsWW1WalkyRndkWEp3YkdWY0lqb2dXekV3TWl3Z05URXNJREUxTTEwc1hISmNibHgwWENKeVpXUmNJam9nV3pJMU5Td2dNQ3dnTUYwc1hISmNibHgwWENKeWIzTjVZbkp2ZDI1Y0lqb2dXekU0T0N3Z01UUXpMQ0F4TkROZExGeHlYRzVjZEZ3aWNtOTVZV3hpYkhWbFhDSTZJRnMyTlN3Z01UQTFMQ0F5TWpWZExGeHlYRzVjZEZ3aWMyRmtaR3hsWW5KdmQyNWNJam9nV3pFek9Td2dOamtzSURFNVhTeGNjbHh1WEhSY0luTmhiRzF2Ymx3aU9pQmJNalV3TENBeE1qZ3NJREV4TkYwc1hISmNibHgwWENKellXNWtlV0p5YjNkdVhDSTZJRnN5TkRRc0lERTJOQ3dnT1RaZExGeHlYRzVjZEZ3aWMyVmhaM0psWlc1Y0lqb2dXelEyTENBeE16a3NJRGczWFN4Y2NseHVYSFJjSW5ObFlYTm9aV3hzWENJNklGc3lOVFVzSURJME5Td2dNak00WFN4Y2NseHVYSFJjSW5OcFpXNXVZVndpT2lCYk1UWXdMQ0E0TWl3Z05EVmRMRnh5WEc1Y2RGd2ljMmxzZG1WeVhDSTZJRnN4T1RJc0lERTVNaXdnTVRreVhTeGNjbHh1WEhSY0luTnJlV0pzZFdWY0lqb2dXekV6TlN3Z01qQTJMQ0F5TXpWZExGeHlYRzVjZEZ3aWMyeGhkR1ZpYkhWbFhDSTZJRnN4TURZc0lEa3dMQ0F5TURWZExGeHlYRzVjZEZ3aWMyeGhkR1ZuY21GNVhDSTZJRnN4TVRJc0lERXlPQ3dnTVRRMFhTeGNjbHh1WEhSY0luTnNZWFJsWjNKbGVWd2lPaUJiTVRFeUxDQXhNamdzSURFME5GMHNYSEpjYmx4MFhDSnpibTkzWENJNklGc3lOVFVzSURJMU1Dd2dNalV3WFN4Y2NseHVYSFJjSW5Od2NtbHVaMmR5WldWdVhDSTZJRnN3TENBeU5UVXNJREV5TjEwc1hISmNibHgwWENKemRHVmxiR0pzZFdWY0lqb2dXemN3TENBeE16QXNJREU0TUYwc1hISmNibHgwWENKMFlXNWNJam9nV3pJeE1Dd2dNVGd3TENBeE5EQmRMRnh5WEc1Y2RGd2lkR1ZoYkZ3aU9pQmJNQ3dnTVRJNExDQXhNamhkTEZ4eVhHNWNkRndpZEdocGMzUnNaVndpT2lCYk1qRTJMQ0F4T1RFc0lESXhObDBzWEhKY2JseDBYQ0owYjIxaGRHOWNJam9nV3pJMU5Td2dPVGtzSURjeFhTeGNjbHh1WEhSY0luUjFjbkYxYjJselpWd2lPaUJiTmpRc0lESXlOQ3dnTWpBNFhTeGNjbHh1WEhSY0luWnBiMnhsZEZ3aU9pQmJNak00TENBeE16QXNJREl6T0Ywc1hISmNibHgwWENKM2FHVmhkRndpT2lCYk1qUTFMQ0F5TWpJc0lERTNPVjBzWEhKY2JseDBYQ0ozYUdsMFpWd2lPaUJiTWpVMUxDQXlOVFVzSURJMU5WMHNYSEpjYmx4MFhDSjNhR2wwWlhOdGIydGxYQ0k2SUZzeU5EVXNJREkwTlN3Z01qUTFYU3hjY2x4dVhIUmNJbmxsYkd4dmQxd2lPaUJiTWpVMUxDQXlOVFVzSURCZExGeHlYRzVjZEZ3aWVXVnNiRzkzWjNKbFpXNWNJam9nV3pFMU5Dd2dNakExTENBMU1GMWNjbHh1ZlR0Y2NseHVJaXdpTHlvZ1RVbFVJR3hwWTJWdWMyVWdLaTljYm5aaGNpQmpiMnh2Y2s1aGJXVnpJRDBnY21WeGRXbHlaU2duWTI5c2IzSXRibUZ0WlNjcE8xeHVkbUZ5SUhOM2FYcDZiR1VnUFNCeVpYRjFhWEpsS0NkemFXMXdiR1V0YzNkcGVucHNaU2NwTzF4dVhHNTJZWElnY21WMlpYSnpaVTVoYldWeklEMGdlMzA3WEc1Y2JpOHZJR055WldGMFpTQmhJR3hwYzNRZ2IyWWdjbVYyWlhKelpTQmpiMnh2Y2lCdVlXMWxjMXh1Wm05eUlDaDJZWElnYm1GdFpTQnBiaUJqYjJ4dmNrNWhiV1Z6S1NCN1hHNWNkR2xtSUNoamIyeHZjazVoYldWekxtaGhjMDkzYmxCeWIzQmxjblI1S0c1aGJXVXBLU0I3WEc1Y2RGeDBjbVYyWlhKelpVNWhiV1Z6VzJOdmJHOXlUbUZ0WlhOYmJtRnRaVjFkSUQwZ2JtRnRaVHRjYmx4MGZWeHVmVnh1WEc1MllYSWdZM01nUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0Y2JseDBkRzg2SUh0OUxGeHVYSFJuWlhRNklIdDlYRzU5TzF4dVhHNWpjeTVuWlhRZ1BTQm1kVzVqZEdsdmJpQW9jM1J5YVc1bktTQjdYRzVjZEhaaGNpQndjbVZtYVhnZ1BTQnpkSEpwYm1jdWMzVmljM1J5YVc1bktEQXNJRE1wTG5SdlRHOTNaWEpEWVhObEtDazdYRzVjZEhaaGNpQjJZV3c3WEc1Y2RIWmhjaUJ0YjJSbGJEdGNibHgwYzNkcGRHTm9JQ2h3Y21WbWFYZ3BJSHRjYmx4MFhIUmpZWE5sSUNkb2Myd25PbHh1WEhSY2RGeDBkbUZzSUQwZ1kzTXVaMlYwTG1oemJDaHpkSEpwYm1jcE8xeHVYSFJjZEZ4MGJXOWtaV3dnUFNBbmFITnNKenRjYmx4MFhIUmNkR0p5WldGck8xeHVYSFJjZEdOaGMyVWdKMmgzWWljNlhHNWNkRngwWEhSMllXd2dQU0JqY3k1blpYUXVhSGRpS0hOMGNtbHVaeWs3WEc1Y2RGeDBYSFJ0YjJSbGJDQTlJQ2RvZDJJbk8xeHVYSFJjZEZ4MFluSmxZV3M3WEc1Y2RGeDBaR1ZtWVhWc2REcGNibHgwWEhSY2RIWmhiQ0E5SUdOekxtZGxkQzV5WjJJb2MzUnlhVzVuS1R0Y2JseDBYSFJjZEcxdlpHVnNJRDBnSjNKbllpYzdYRzVjZEZ4MFhIUmljbVZoYXp0Y2JseDBmVnh1WEc1Y2RHbG1JQ2doZG1Gc0tTQjdYRzVjZEZ4MGNtVjBkWEp1SUc1MWJHdzdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdlMjF2WkdWc09pQnRiMlJsYkN3Z2RtRnNkV1U2SUhaaGJIMDdYRzU5TzF4dVhHNWpjeTVuWlhRdWNtZGlJRDBnWm5WdVkzUnBiMjRnS0hOMGNtbHVaeWtnZTF4dVhIUnBaaUFvSVhOMGNtbHVaeWtnZTF4dVhIUmNkSEpsZEhWeWJpQnVkV3hzTzF4dVhIUjlYRzVjYmx4MGRtRnlJR0ZpWW5JZ1BTQXZYaU1vVzJFdFpqQXRPVjE3TXl3MGZTa2tMMms3WEc1Y2RIWmhjaUJvWlhnZ1BTQXZYaU1vVzJFdFpqQXRPVjE3Tm4wcEtGdGhMV1l3TFRsZGV6SjlLVDhrTDJrN1hHNWNkSFpoY2lCeVoySmhJRDBnTDE1eVoySmhQMXhjS0Z4Y2N5b29XeXN0WFQ5Y1hHUXJLVnhjY3lvc1hGeHpLaWhiS3kxZFAxeGNaQ3NwWEZ4ektpeGNYSE1xS0ZzckxWMC9YRnhrS3lsY1hITXFLRDg2TEZ4Y2N5b29XeXN0WFQ5YlhGeGtYRnd1WFNzcFhGeHpLaWsvWEZ3cEpDODdYRzVjZEhaaGNpQndaWElnUFNBdlhuSm5ZbUUvWEZ3b1hGeHpLaWhiS3kxZFAxdGNYR1JjWEM1ZEt5bGNYQ1ZjWEhNcUxGeGNjeW9vV3lzdFhUOWJYRnhrWEZ3dVhTc3BYRndsWEZ4ektpeGNYSE1xS0ZzckxWMC9XMXhjWkZ4Y0xsMHJLVnhjSlZ4Y2N5b29Qem9zWEZ4ektpaGJLeTFkUDF0Y1hHUmNYQzVkS3lsY1hITXFLVDljWENra0x6dGNibHgwZG1GeUlHdGxlWGR2Y21RZ1BTQXZLRnhjUkNzcEx6dGNibHh1WEhSMllYSWdjbWRpSUQwZ1d6QXNJREFzSURBc0lERmRPMXh1WEhSMllYSWdiV0YwWTJnN1hHNWNkSFpoY2lCcE8xeHVYSFIyWVhJZ2FHVjRRV3h3YUdFN1hHNWNibHgwYVdZZ0tHMWhkR05vSUQwZ2MzUnlhVzVuTG0xaGRHTm9LR2hsZUNrcElIdGNibHgwWEhSb1pYaEJiSEJvWVNBOUlHMWhkR05vV3pKZE8xeHVYSFJjZEcxaGRHTm9JRDBnYldGMFkyaGJNVjA3WEc1Y2JseDBYSFJtYjNJZ0tHa2dQU0F3T3lCcElEd2dNenNnYVNzcktTQjdYRzVjZEZ4MFhIUXZMeUJvZEhSd2N6b3ZMMnB6Y0dWeVppNWpiMjB2YzJ4cFkyVXRkbk10YzNWaWMzUnlMWFp6TFhOMVluTjBjbWx1WnkxdFpYUm9iMlJ6TFd4dmJtY3RjM1J5YVc1bkx6RTVYRzVjZEZ4MFhIUjJZWElnYVRJZ1BTQnBJQ29nTWp0Y2JseDBYSFJjZEhKbllsdHBYU0E5SUhCaGNuTmxTVzUwS0cxaGRHTm9Mbk5zYVdObEtHa3lMQ0JwTWlBcklESXBMQ0F4TmlrN1hHNWNkRngwZlZ4dVhHNWNkRngwYVdZZ0tHaGxlRUZzY0doaEtTQjdYRzVjZEZ4MFhIUnlaMkpiTTEwZ1BTQk5ZWFJvTG5KdmRXNWtLQ2h3WVhKelpVbHVkQ2hvWlhoQmJIQm9ZU3dnTVRZcElDOGdNalUxS1NBcUlERXdNQ2tnTHlBeE1EQTdYRzVjZEZ4MGZWeHVYSFI5SUdWc2MyVWdhV1lnS0cxaGRHTm9JRDBnYzNSeWFXNW5MbTFoZEdOb0tHRmlZbklwS1NCN1hHNWNkRngwYldGMFkyZ2dQU0J0WVhSamFGc3hYVHRjYmx4MFhIUm9aWGhCYkhCb1lTQTlJRzFoZEdOb1d6TmRPMXh1WEc1Y2RGeDBabTl5SUNocElEMGdNRHNnYVNBOElETTdJR2tyS3lrZ2UxeHVYSFJjZEZ4MGNtZGlXMmxkSUQwZ2NHRnljMlZKYm5Rb2JXRjBZMmhiYVYwZ0t5QnRZWFJqYUZ0cFhTd2dNVFlwTzF4dVhIUmNkSDFjYmx4dVhIUmNkR2xtSUNob1pYaEJiSEJvWVNrZ2UxeHVYSFJjZEZ4MGNtZGlXek5kSUQwZ1RXRjBhQzV5YjNWdVpDZ29jR0Z5YzJWSmJuUW9hR1Y0UVd4d2FHRWdLeUJvWlhoQmJIQm9ZU3dnTVRZcElDOGdNalUxS1NBcUlERXdNQ2tnTHlBeE1EQTdYRzVjZEZ4MGZWeHVYSFI5SUdWc2MyVWdhV1lnS0cxaGRHTm9JRDBnYzNSeWFXNW5MbTFoZEdOb0tISm5ZbUVwS1NCN1hHNWNkRngwWm05eUlDaHBJRDBnTURzZ2FTQThJRE03SUdrckt5a2dlMXh1WEhSY2RGeDBjbWRpVzJsZElEMGdjR0Z5YzJWSmJuUW9iV0YwWTJoYmFTQXJJREZkTENBd0tUdGNibHgwWEhSOVhHNWNibHgwWEhScFppQW9iV0YwWTJoYk5GMHBJSHRjYmx4MFhIUmNkSEpuWWxzelhTQTlJSEJoY25ObFJteHZZWFFvYldGMFkyaGJORjBwTzF4dVhIUmNkSDFjYmx4MGZTQmxiSE5sSUdsbUlDaHRZWFJqYUNBOUlITjBjbWx1Wnk1dFlYUmphQ2h3WlhJcEtTQjdYRzVjZEZ4MFptOXlJQ2hwSUQwZ01Ec2dhU0E4SURNN0lHa3JLeWtnZTF4dVhIUmNkRngwY21kaVcybGRJRDBnVFdGMGFDNXliM1Z1WkNod1lYSnpaVVpzYjJGMEtHMWhkR05vVzJrZ0t5QXhYU2tnS2lBeUxqVTFLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnBaaUFvYldGMFkyaGJORjBwSUh0Y2JseDBYSFJjZEhKbllsc3pYU0E5SUhCaGNuTmxSbXh2WVhRb2JXRjBZMmhiTkYwcE8xeHVYSFJjZEgxY2JseDBmU0JsYkhObElHbG1JQ2h0WVhSamFDQTlJSE4wY21sdVp5NXRZWFJqYUNoclpYbDNiM0prS1NrZ2UxeHVYSFJjZEdsbUlDaHRZWFJqYUZzeFhTQTlQVDBnSjNSeVlXNXpjR0Z5Wlc1MEp5a2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlGc3dMQ0F3TENBd0xDQXdYVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnlaMklnUFNCamIyeHZjazVoYldWelcyMWhkR05vV3pGZFhUdGNibHh1WEhSY2RHbG1JQ2doY21kaUtTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2JuVnNiRHRjYmx4MFhIUjlYRzVjYmx4MFhIUnlaMkpiTTEwZ1BTQXhPMXh1WEc1Y2RGeDBjbVYwZFhKdUlISm5ZanRjYmx4MGZTQmxiSE5sSUh0Y2JseDBYSFJ5WlhSMWNtNGdiblZzYkR0Y2JseDBmVnh1WEc1Y2RHWnZjaUFvYVNBOUlEQTdJR2tnUENBek95QnBLeXNwSUh0Y2JseDBYSFJ5WjJKYmFWMGdQU0JqYkdGdGNDaHlaMkpiYVYwc0lEQXNJREkxTlNrN1hHNWNkSDFjYmx4MGNtZGlXek5kSUQwZ1kyeGhiWEFvY21kaVd6TmRMQ0F3TENBeEtUdGNibHh1WEhSeVpYUjFjbTRnY21kaU8xeHVmVHRjYmx4dVkzTXVaMlYwTG1oemJDQTlJR1oxYm1OMGFXOXVJQ2h6ZEhKcGJtY3BJSHRjYmx4MGFXWWdLQ0Z6ZEhKcGJtY3BJSHRjYmx4MFhIUnlaWFIxY200Z2JuVnNiRHRjYmx4MGZWeHVYRzVjZEhaaGNpQm9jMndnUFNBdlhtaHpiR0UvWEZ3b1hGeHpLaWhiS3kxZFB5Zy9PbHhjWkNwY1hDNHBQMXhjWkNzcEtEODZaR1ZuS1Q5Y1hITXFMRnhjY3lvb1d5c3RYVDliWEZ4a1hGd3VYU3NwSlZ4Y2N5b3NYRnh6S2loYkt5MWRQMXRjWEdSY1hDNWRLeWtsWEZ4ektpZy9PaXhjWEhNcUtGc3JMVjAvVzF4Y1pGeGNMbDByS1Z4Y2N5b3BQMXhjS1NRdk8xeHVYSFIyWVhJZ2JXRjBZMmdnUFNCemRISnBibWN1YldGMFkyZ29hSE5zS1R0Y2JseHVYSFJwWmlBb2JXRjBZMmdwSUh0Y2JseDBYSFIyWVhJZ1lXeHdhR0VnUFNCd1lYSnpaVVpzYjJGMEtHMWhkR05vV3pSZEtUdGNibHgwWEhSMllYSWdhQ0E5SUNod1lYSnpaVVpzYjJGMEtHMWhkR05vV3pGZEtTQXJJRE0yTUNrZ0pTQXpOakE3WEc1Y2RGeDBkbUZ5SUhNZ1BTQmpiR0Z0Y0Nod1lYSnpaVVpzYjJGMEtHMWhkR05vV3pKZEtTd2dNQ3dnTVRBd0tUdGNibHgwWEhSMllYSWdiQ0E5SUdOc1lXMXdLSEJoY25ObFJteHZZWFFvYldGMFkyaGJNMTBwTENBd0xDQXhNREFwTzF4dVhIUmNkSFpoY2lCaElEMGdZMnhoYlhBb2FYTk9ZVTRvWVd4d2FHRXBJRDhnTVNBNklHRnNjR2hoTENBd0xDQXhLVHRjYmx4dVhIUmNkSEpsZEhWeWJpQmJhQ3dnY3l3Z2JDd2dZVjA3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnYm5Wc2JEdGNibjA3WEc1Y2JtTnpMbWRsZEM1b2QySWdQU0JtZFc1amRHbHZiaUFvYzNSeWFXNW5LU0I3WEc1Y2RHbG1JQ2doYzNSeWFXNW5LU0I3WEc1Y2RGeDBjbVYwZFhKdUlHNTFiR3c3WEc1Y2RIMWNibHh1WEhSMllYSWdhSGRpSUQwZ0wxNW9kMkpjWENoY1hITXFLRnNyTFYwL1hGeGtLbHRjWEM1ZFAxeGNaQ3NwS0Q4NlpHVm5LVDljWEhNcUxGeGNjeW9vV3lzdFhUOWJYRnhrWEZ3dVhTc3BKVnhjY3lvc1hGeHpLaWhiS3kxZFAxdGNYR1JjWEM1ZEt5a2xYRnh6S2lnL09peGNYSE1xS0ZzckxWMC9XMXhjWkZ4Y0xsMHJLVnhjY3lvcFAxeGNLU1F2TzF4dVhIUjJZWElnYldGMFkyZ2dQU0J6ZEhKcGJtY3ViV0YwWTJnb2FIZGlLVHRjYmx4dVhIUnBaaUFvYldGMFkyZ3BJSHRjYmx4MFhIUjJZWElnWVd4d2FHRWdQU0J3WVhKelpVWnNiMkYwS0cxaGRHTm9XelJkS1R0Y2JseDBYSFIyWVhJZ2FDQTlJQ2dvY0dGeWMyVkdiRzloZENodFlYUmphRnN4WFNrZ0pTQXpOakFwSUNzZ016WXdLU0FsSURNMk1EdGNibHgwWEhSMllYSWdkeUE5SUdOc1lXMXdLSEJoY25ObFJteHZZWFFvYldGMFkyaGJNbDBwTENBd0xDQXhNREFwTzF4dVhIUmNkSFpoY2lCaUlEMGdZMnhoYlhBb2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzelhTa3NJREFzSURFd01DazdYRzVjZEZ4MGRtRnlJR0VnUFNCamJHRnRjQ2hwYzA1aFRpaGhiSEJvWVNrZ1B5QXhJRG9nWVd4d2FHRXNJREFzSURFcE8xeHVYSFJjZEhKbGRIVnliaUJiYUN3Z2R5d2dZaXdnWVYwN1hHNWNkSDFjYmx4dVhIUnlaWFIxY200Z2JuVnNiRHRjYm4wN1hHNWNibU56TG5SdkxtaGxlQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNibHgwZG1GeUlISm5ZbUVnUFNCemQybDZlbXhsS0dGeVozVnRaVzUwY3lrN1hHNWNibHgwY21WMGRYSnVJQ2hjYmx4MFhIUW5JeWNnSzF4dVhIUmNkR2hsZUVSdmRXSnNaU2h5WjJKaFd6QmRLU0FyWEc1Y2RGeDBhR1Y0Ukc5MVlteGxLSEpuWW1GYk1WMHBJQ3RjYmx4MFhIUm9aWGhFYjNWaWJHVW9jbWRpWVZzeVhTa2dLMXh1WEhSY2RDaHlaMkpoV3pOZElEd2dNVnh1WEhSY2RGeDBQeUFvYUdWNFJHOTFZbXhsS0UxaGRHZ3VjbTkxYm1Rb2NtZGlZVnN6WFNBcUlESTFOU2twS1Z4dVhIUmNkRngwT2lBbkp5bGNibHgwS1R0Y2JuMDdYRzVjYm1OekxuUnZMbkpuWWlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGRtRnlJSEpuWW1FZ1BTQnpkMmw2ZW14bEtHRnlaM1Z0Wlc1MGN5azdYRzVjYmx4MGNtVjBkWEp1SUhKblltRXViR1Z1WjNSb0lEd2dOQ0I4ZkNCeVoySmhXek5kSUQwOVBTQXhYRzVjZEZ4MFB5QW5jbWRpS0NjZ0t5Qk5ZWFJvTG5KdmRXNWtLSEpuWW1GYk1GMHBJQ3NnSnl3Z0p5QXJJRTFoZEdndWNtOTFibVFvY21kaVlWc3hYU2tnS3lBbkxDQW5JQ3NnVFdGMGFDNXliM1Z1WkNoeVoySmhXekpkS1NBcklDY3BKMXh1WEhSY2REb2dKM0puWW1Fb0p5QXJJRTFoZEdndWNtOTFibVFvY21kaVlWc3dYU2tnS3lBbkxDQW5JQ3NnVFdGMGFDNXliM1Z1WkNoeVoySmhXekZkS1NBcklDY3NJQ2NnS3lCTllYUm9Mbkp2ZFc1a0tISm5ZbUZiTWwwcElDc2dKeXdnSnlBcklISm5ZbUZiTTEwZ0t5QW5LU2M3WEc1OU8xeHVYRzVqY3k1MGJ5NXlaMkl1Y0dWeVkyVnVkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNibHgwZG1GeUlISm5ZbUVnUFNCemQybDZlbXhsS0dGeVozVnRaVzUwY3lrN1hHNWNibHgwZG1GeUlISWdQU0JOWVhSb0xuSnZkVzVrS0hKblltRmJNRjBnTHlBeU5UVWdLaUF4TURBcE8xeHVYSFIyWVhJZ1p5QTlJRTFoZEdndWNtOTFibVFvY21kaVlWc3hYU0F2SURJMU5TQXFJREV3TUNrN1hHNWNkSFpoY2lCaUlEMGdUV0YwYUM1eWIzVnVaQ2h5WjJKaFd6SmRJQzhnTWpVMUlDb2dNVEF3S1R0Y2JseHVYSFJ5WlhSMWNtNGdjbWRpWVM1c1pXNW5kR2dnUENBMElIeDhJSEpuWW1GYk0xMGdQVDA5SURGY2JseDBYSFEvSUNkeVoySW9KeUFySUhJZ0t5QW5KU3dnSnlBcklHY2dLeUFuSlN3Z0p5QXJJR0lnS3lBbkpTa25YRzVjZEZ4ME9pQW5jbWRpWVNnbklDc2djaUFySUNjbExDQW5JQ3NnWnlBcklDY2xMQ0FuSUNzZ1lpQXJJQ2NsTENBbklDc2djbWRpWVZzelhTQXJJQ2NwSnp0Y2JuMDdYRzVjYm1OekxuUnZMbWh6YkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGRtRnlJR2h6YkdFZ1BTQnpkMmw2ZW14bEtHRnlaM1Z0Wlc1MGN5azdYRzVjZEhKbGRIVnliaUJvYzJ4aExteGxibWQwYUNBOElEUWdmSHdnYUhOc1lWc3pYU0E5UFQwZ01WeHVYSFJjZEQ4Z0oyaHpiQ2duSUNzZ2FITnNZVnN3WFNBcklDY3NJQ2NnS3lCb2MyeGhXekZkSUNzZ0p5VXNJQ2NnS3lCb2MyeGhXekpkSUNzZ0p5VXBKMXh1WEhSY2REb2dKMmh6YkdFb0p5QXJJR2h6YkdGYk1GMGdLeUFuTENBbklDc2dhSE5zWVZzeFhTQXJJQ2NsTENBbklDc2dhSE5zWVZzeVhTQXJJQ2NsTENBbklDc2dhSE5zWVZzelhTQXJJQ2NwSnp0Y2JuMDdYRzVjYmk4dklHaDNZaUJwY3lCaElHSnBkQ0JrYVdabVpYSmxiblFnZEdoaGJpQnlaMklvWVNrZ0ppQm9jMndvWVNrZ2MybHVZMlVnZEdobGNtVWdhWE1nYm04Z1lXeHdhR0VnYzNCbFkybG1hV01nYzNsdWRHRjRYRzR2THlBb2FIZGlJR2hoZG1VZ1lXeHdhR0VnYjNCMGFXOXVZV3dnSmlBeElHbHpJR1JsWm1GMWJIUWdkbUZzZFdVcFhHNWpjeTUwYnk1b2QySWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNWNkSFpoY2lCb2QySmhJRDBnYzNkcGVucHNaU2hoY21kMWJXVnVkSE1wTzF4dVhHNWNkSFpoY2lCaElEMGdKeWM3WEc1Y2RHbG1JQ2hvZDJKaExteGxibWQwYUNBK1BTQTBJQ1ltSUdoM1ltRmJNMTBnSVQwOUlERXBJSHRjYmx4MFhIUmhJRDBnSnl3Z0p5QXJJR2gzWW1GYk0xMDdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdKMmgzWWlnbklDc2dhSGRpWVZzd1hTQXJJQ2NzSUNjZ0t5Qm9kMkpoV3pGZElDc2dKeVVzSUNjZ0t5Qm9kMkpoV3pKZElDc2dKeVVuSUNzZ1lTQXJJQ2NwSnp0Y2JuMDdYRzVjYm1OekxuUnZMbXRsZVhkdmNtUWdQU0JtZFc1amRHbHZiaUFvY21kaUtTQjdYRzVjZEhKbGRIVnliaUJ5WlhabGNuTmxUbUZ0WlhOYmNtZGlMbk5zYVdObEtEQXNJRE1wWFR0Y2JuMDdYRzVjYmk4dklHaGxiSEJsY25OY2JtWjFibU4wYVc5dUlHTnNZVzF3S0c1MWJTd2diV2x1TENCdFlYZ3BJSHRjYmx4MGNtVjBkWEp1SUUxaGRHZ3ViV2x1S0UxaGRHZ3ViV0Y0S0cxcGJpd2diblZ0S1N3Z2JXRjRLVHRjYm4xY2JseHVablZ1WTNScGIyNGdhR1Y0Ukc5MVlteGxLRzUxYlNrZ2UxeHVYSFIyWVhJZ2MzUnlJRDBnYm5WdExuUnZVM1J5YVc1bktERTJLUzUwYjFWd2NHVnlRMkZ6WlNncE8xeHVYSFJ5WlhSMWNtNGdLSE4wY2k1c1pXNW5kR2dnUENBeUtTQS9JQ2N3SnlBcklITjBjaUE2SUhOMGNqdGNibjFjYmlJc0lpZDFjMlVnYzNSeWFXTjBKMXh5WEc1Y2NseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdYSEpjYmx4MFhDSmhiR2xqWldKc2RXVmNJam9nV3pJME1Dd2dNalE0TENBeU5UVmRMRnh5WEc1Y2RGd2lZVzUwYVhGMVpYZG9hWFJsWENJNklGc3lOVEFzSURJek5Td2dNakUxWFN4Y2NseHVYSFJjSW1GeGRXRmNJam9nV3pBc0lESTFOU3dnTWpVMVhTeGNjbHh1WEhSY0ltRnhkV0Z0WVhKcGJtVmNJam9nV3pFeU55d2dNalUxTENBeU1USmRMRnh5WEc1Y2RGd2lZWHAxY21WY0lqb2dXekkwTUN3Z01qVTFMQ0F5TlRWZExGeHlYRzVjZEZ3aVltVnBaMlZjSWpvZ1d6STBOU3dnTWpRMUxDQXlNakJkTEZ4eVhHNWNkRndpWW1semNYVmxYQ0k2SUZzeU5UVXNJREl5T0N3Z01UazJYU3hjY2x4dVhIUmNJbUpzWVdOclhDSTZJRnN3TENBd0xDQXdYU3hjY2x4dVhIUmNJbUpzWVc1amFHVmtZV3h0YjI1a1hDSTZJRnN5TlRVc0lESXpOU3dnTWpBMVhTeGNjbHh1WEhSY0ltSnNkV1ZjSWpvZ1d6QXNJREFzSURJMU5WMHNYSEpjYmx4MFhDSmliSFZsZG1sdmJHVjBYQ0k2SUZzeE16Z3NJRFF6TENBeU1qWmRMRnh5WEc1Y2RGd2lZbkp2ZDI1Y0lqb2dXekUyTlN3Z05ESXNJRFF5WFN4Y2NseHVYSFJjSW1KMWNteDVkMjl2WkZ3aU9pQmJNakl5TENBeE9EUXNJREV6TlYwc1hISmNibHgwWENKallXUmxkR0pzZFdWY0lqb2dXemsxTENBeE5UZ3NJREUyTUYwc1hISmNibHgwWENKamFHRnlkSEpsZFhObFhDSTZJRnN4TWpjc0lESTFOU3dnTUYwc1hISmNibHgwWENKamFHOWpiMnhoZEdWY0lqb2dXekl4TUN3Z01UQTFMQ0F6TUYwc1hISmNibHgwWENKamIzSmhiRndpT2lCYk1qVTFMQ0F4TWpjc0lEZ3dYU3hjY2x4dVhIUmNJbU52Y201bWJHOTNaWEppYkhWbFhDSTZJRnN4TURBc0lERTBPU3dnTWpNM1hTeGNjbHh1WEhSY0ltTnZjbTV6YVd4clhDSTZJRnN5TlRVc0lESTBPQ3dnTWpJd1hTeGNjbHh1WEhSY0ltTnlhVzF6YjI1Y0lqb2dXekl5TUN3Z01qQXNJRFl3WFN4Y2NseHVYSFJjSW1ONVlXNWNJam9nV3pBc0lESTFOU3dnTWpVMVhTeGNjbHh1WEhSY0ltUmhjbXRpYkhWbFhDSTZJRnN3TENBd0xDQXhNemxkTEZ4eVhHNWNkRndpWkdGeWEyTjVZVzVjSWpvZ1d6QXNJREV6T1N3Z01UTTVYU3hjY2x4dVhIUmNJbVJoY210bmIyeGtaVzV5YjJSY0lqb2dXekU0TkN3Z01UTTBMQ0F4TVYwc1hISmNibHgwWENKa1lYSnJaM0poZVZ3aU9pQmJNVFk1TENBeE5qa3NJREUyT1Ywc1hISmNibHgwWENKa1lYSnJaM0psWlc1Y0lqb2dXekFzSURFd01Dd2dNRjBzWEhKY2JseDBYQ0prWVhKclozSmxlVndpT2lCYk1UWTVMQ0F4Tmprc0lERTJPVjBzWEhKY2JseDBYQ0prWVhKcmEyaGhhMmxjSWpvZ1d6RTRPU3dnTVRnekxDQXhNRGRkTEZ4eVhHNWNkRndpWkdGeWEyMWhaMlZ1ZEdGY0lqb2dXekV6T1N3Z01Dd2dNVE01WFN4Y2NseHVYSFJjSW1SaGNtdHZiR2wyWldkeVpXVnVYQ0k2SUZzNE5Td2dNVEEzTENBME4xMHNYSEpjYmx4MFhDSmtZWEpyYjNKaGJtZGxYQ0k2SUZzeU5UVXNJREUwTUN3Z01GMHNYSEpjYmx4MFhDSmtZWEpyYjNKamFHbGtYQ0k2SUZzeE5UTXNJRFV3TENBeU1EUmRMRnh5WEc1Y2RGd2laR0Z5YTNKbFpGd2lPaUJiTVRNNUxDQXdMQ0F3WFN4Y2NseHVYSFJjSW1SaGNtdHpZV3h0YjI1Y0lqb2dXekl6TXl3Z01UVXdMQ0F4TWpKZExGeHlYRzVjZEZ3aVpHRnlhM05sWVdkeVpXVnVYQ0k2SUZzeE5ETXNJREU0T0N3Z01UUXpYU3hjY2x4dVhIUmNJbVJoY210emJHRjBaV0pzZFdWY0lqb2dXemN5TENBMk1Td2dNVE01WFN4Y2NseHVYSFJjSW1SaGNtdHpiR0YwWldkeVlYbGNJam9nV3pRM0xDQTNPU3dnTnpsZExGeHlYRzVjZEZ3aVpHRnlhM05zWVhSbFozSmxlVndpT2lCYk5EY3NJRGM1TENBM09WMHNYSEpjYmx4MFhDSmtZWEpyZEhWeWNYVnZhWE5sWENJNklGc3dMQ0F5TURZc0lESXdPVjBzWEhKY2JseDBYQ0prWVhKcmRtbHZiR1YwWENJNklGc3hORGdzSURBc0lESXhNVjBzWEhKY2JseDBYQ0prWldWd2NHbHVhMXdpT2lCYk1qVTFMQ0F5TUN3Z01UUTNYU3hjY2x4dVhIUmNJbVJsWlhCemEzbGliSFZsWENJNklGc3dMQ0F4T1RFc0lESTFOVjBzWEhKY2JseDBYQ0prYVcxbmNtRjVYQ0k2SUZzeE1EVXNJREV3TlN3Z01UQTFYU3hjY2x4dVhIUmNJbVJwYldkeVpYbGNJam9nV3pFd05Td2dNVEExTENBeE1EVmRMRnh5WEc1Y2RGd2laRzlrWjJWeVlteDFaVndpT2lCYk16QXNJREUwTkN3Z01qVTFYU3hjY2x4dVhIUmNJbVpwY21WaWNtbGphMXdpT2lCYk1UYzRMQ0F6TkN3Z016UmRMRnh5WEc1Y2RGd2labXh2Y21Gc2QyaHBkR1ZjSWpvZ1d6STFOU3dnTWpVd0xDQXlOREJkTEZ4eVhHNWNkRndpWm05eVpYTjBaM0psWlc1Y0lqb2dXek0wTENBeE16a3NJRE0wWFN4Y2NseHVYSFJjSW1aMVkyaHphV0ZjSWpvZ1d6STFOU3dnTUN3Z01qVTFYU3hjY2x4dVhIUmNJbWRoYVc1elltOXliMXdpT2lCYk1qSXdMQ0F5TWpBc0lESXlNRjBzWEhKY2JseDBYQ0puYUc5emRIZG9hWFJsWENJNklGc3lORGdzSURJME9Dd2dNalUxWFN4Y2NseHVYSFJjSW1kdmJHUmNJam9nV3pJMU5Td2dNakUxTENBd1hTeGNjbHh1WEhSY0ltZHZiR1JsYm5KdlpGd2lPaUJiTWpFNExDQXhOalVzSURNeVhTeGNjbHh1WEhSY0ltZHlZWGxjSWpvZ1d6RXlPQ3dnTVRJNExDQXhNamhkTEZ4eVhHNWNkRndpWjNKbFpXNWNJam9nV3pBc0lERXlPQ3dnTUYwc1hISmNibHgwWENKbmNtVmxibmxsYkd4dmQxd2lPaUJiTVRjekxDQXlOVFVzSURRM1hTeGNjbHh1WEhSY0ltZHlaWGxjSWpvZ1d6RXlPQ3dnTVRJNExDQXhNamhkTEZ4eVhHNWNkRndpYUc5dVpYbGtaWGRjSWpvZ1d6STBNQ3dnTWpVMUxDQXlOREJkTEZ4eVhHNWNkRndpYUc5MGNHbHVhMXdpT2lCYk1qVTFMQ0F4TURVc0lERTRNRjBzWEhKY2JseDBYQ0pwYm1ScFlXNXlaV1JjSWpvZ1d6SXdOU3dnT1RJc0lEa3lYU3hjY2x4dVhIUmNJbWx1WkdsbmIxd2lPaUJiTnpVc0lEQXNJREV6TUYwc1hISmNibHgwWENKcGRtOXllVndpT2lCYk1qVTFMQ0F5TlRVc0lESTBNRjBzWEhKY2JseDBYQ0pyYUdGcmFWd2lPaUJiTWpRd0xDQXlNekFzSURFME1GMHNYSEpjYmx4MFhDSnNZWFpsYm1SbGNsd2lPaUJiTWpNd0xDQXlNekFzSURJMU1GMHNYSEpjYmx4MFhDSnNZWFpsYm1SbGNtSnNkWE5vWENJNklGc3lOVFVzSURJME1Dd2dNalExWFN4Y2NseHVYSFJjSW14aGQyNW5jbVZsYmx3aU9pQmJNVEkwTENBeU5USXNJREJkTEZ4eVhHNWNkRndpYkdWdGIyNWphR2xtWm05dVhDSTZJRnN5TlRVc0lESTFNQ3dnTWpBMVhTeGNjbHh1WEhSY0lteHBaMmgwWW14MVpWd2lPaUJiTVRjekxDQXlNVFlzSURJek1GMHNYSEpjYmx4MFhDSnNhV2RvZEdOdmNtRnNYQ0k2SUZzeU5EQXNJREV5T0N3Z01USTRYU3hjY2x4dVhIUmNJbXhwWjJoMFkzbGhibHdpT2lCYk1qSTBMQ0F5TlRVc0lESTFOVjBzWEhKY2JseDBYQ0pzYVdkb2RHZHZiR1JsYm5KdlpIbGxiR3h2ZDF3aU9pQmJNalV3TENBeU5UQXNJREl4TUYwc1hISmNibHgwWENKc2FXZG9kR2R5WVhsY0lqb2dXekl4TVN3Z01qRXhMQ0F5TVRGZExGeHlYRzVjZEZ3aWJHbG5hSFJuY21WbGJsd2lPaUJiTVRRMExDQXlNemdzSURFME5GMHNYSEpjYmx4MFhDSnNhV2RvZEdkeVpYbGNJam9nV3pJeE1Td2dNakV4TENBeU1URmRMRnh5WEc1Y2RGd2liR2xuYUhSd2FXNXJYQ0k2SUZzeU5UVXNJREU0TWl3Z01Ua3pYU3hjY2x4dVhIUmNJbXhwWjJoMGMyRnNiVzl1WENJNklGc3lOVFVzSURFMk1Dd2dNVEl5WFN4Y2NseHVYSFJjSW14cFoyaDBjMlZoWjNKbFpXNWNJam9nV3pNeUxDQXhOemdzSURFM01GMHNYSEpjYmx4MFhDSnNhV2RvZEhOcmVXSnNkV1ZjSWpvZ1d6RXpOU3dnTWpBMkxDQXlOVEJkTEZ4eVhHNWNkRndpYkdsbmFIUnpiR0YwWldkeVlYbGNJam9nV3pFeE9Td2dNVE0yTENBeE5UTmRMRnh5WEc1Y2RGd2liR2xuYUhSemJHRjBaV2R5WlhsY0lqb2dXekV4T1N3Z01UTTJMQ0F4TlROZExGeHlYRzVjZEZ3aWJHbG5hSFJ6ZEdWbGJHSnNkV1ZjSWpvZ1d6RTNOaXdnTVRrMkxDQXlNakpkTEZ4eVhHNWNkRndpYkdsbmFIUjVaV3hzYjNkY0lqb2dXekkxTlN3Z01qVTFMQ0F5TWpSZExGeHlYRzVjZEZ3aWJHbHRaVndpT2lCYk1Dd2dNalUxTENBd1hTeGNjbHh1WEhSY0lteHBiV1ZuY21WbGJsd2lPaUJiTlRBc0lESXdOU3dnTlRCZExGeHlYRzVjZEZ3aWJHbHVaVzVjSWpvZ1d6STFNQ3dnTWpRd0xDQXlNekJkTEZ4eVhHNWNkRndpYldGblpXNTBZVndpT2lCYk1qVTFMQ0F3TENBeU5UVmRMRnh5WEc1Y2RGd2liV0Z5YjI5dVhDSTZJRnN4TWpnc0lEQXNJREJkTEZ4eVhHNWNkRndpYldWa2FYVnRZWEYxWVcxaGNtbHVaVndpT2lCYk1UQXlMQ0F5TURVc0lERTNNRjBzWEhKY2JseDBYQ0p0WldScGRXMWliSFZsWENJNklGc3dMQ0F3TENBeU1EVmRMRnh5WEc1Y2RGd2liV1ZrYVhWdGIzSmphR2xrWENJNklGc3hPRFlzSURnMUxDQXlNVEZkTEZ4eVhHNWNkRndpYldWa2FYVnRjSFZ5Y0d4bFhDSTZJRnN4TkRjc0lERXhNaXdnTWpFNVhTeGNjbHh1WEhSY0ltMWxaR2wxYlhObFlXZHlaV1Z1WENJNklGczJNQ3dnTVRjNUxDQXhNVE5kTEZ4eVhHNWNkRndpYldWa2FYVnRjMnhoZEdWaWJIVmxYQ0k2SUZzeE1qTXNJREV3TkN3Z01qTTRYU3hjY2x4dVhIUmNJbTFsWkdsMWJYTndjbWx1WjJkeVpXVnVYQ0k2SUZzd0xDQXlOVEFzSURFMU5GMHNYSEpjYmx4MFhDSnRaV1JwZFcxMGRYSnhkVzlwYzJWY0lqb2dXemN5TENBeU1Ea3NJREl3TkYwc1hISmNibHgwWENKdFpXUnBkVzEyYVc5c1pYUnlaV1JjSWpvZ1d6RTVPU3dnTWpFc0lERXpNMTBzWEhKY2JseDBYQ0p0YVdSdWFXZG9kR0pzZFdWY0lqb2dXekkxTENBeU5Td2dNVEV5WFN4Y2NseHVYSFJjSW0xcGJuUmpjbVZoYlZ3aU9pQmJNalExTENBeU5UVXNJREkxTUYwc1hISmNibHgwWENKdGFYTjBlWEp2YzJWY0lqb2dXekkxTlN3Z01qSTRMQ0F5TWpWZExGeHlYRzVjZEZ3aWJXOWpZMkZ6YVc1Y0lqb2dXekkxTlN3Z01qSTRMQ0F4T0RGZExGeHlYRzVjZEZ3aWJtRjJZV3B2ZDJocGRHVmNJam9nV3pJMU5Td2dNakl5TENBeE56TmRMRnh5WEc1Y2RGd2libUYyZVZ3aU9pQmJNQ3dnTUN3Z01USTRYU3hjY2x4dVhIUmNJbTlzWkd4aFkyVmNJam9nV3pJMU15d2dNalExTENBeU16QmRMRnh5WEc1Y2RGd2liMnhwZG1WY0lqb2dXekV5T0N3Z01USTRMQ0F3WFN4Y2NseHVYSFJjSW05c2FYWmxaSEpoWWx3aU9pQmJNVEEzTENBeE5ESXNJRE0xWFN4Y2NseHVYSFJjSW05eVlXNW5aVndpT2lCYk1qVTFMQ0F4TmpVc0lEQmRMRnh5WEc1Y2RGd2liM0poYm1kbGNtVmtYQ0k2SUZzeU5UVXNJRFk1TENBd1hTeGNjbHh1WEhSY0ltOXlZMmhwWkZ3aU9pQmJNakU0TENBeE1USXNJREl4TkYwc1hISmNibHgwWENKd1lXeGxaMjlzWkdWdWNtOWtYQ0k2SUZzeU16Z3NJREl6TWl3Z01UY3dYU3hjY2x4dVhIUmNJbkJoYkdWbmNtVmxibHdpT2lCYk1UVXlMQ0F5TlRFc0lERTFNbDBzWEhKY2JseDBYQ0p3WVd4bGRIVnljWFZ2YVhObFhDSTZJRnN4TnpVc0lESXpPQ3dnTWpNNFhTeGNjbHh1WEhSY0luQmhiR1YyYVc5c1pYUnlaV1JjSWpvZ1d6SXhPU3dnTVRFeUxDQXhORGRkTEZ4eVhHNWNkRndpY0dGd1lYbGhkMmhwY0Z3aU9pQmJNalUxTENBeU16a3NJREl4TTEwc1hISmNibHgwWENKd1pXRmphSEIxWm1aY0lqb2dXekkxTlN3Z01qRTRMQ0F4T0RWZExGeHlYRzVjZEZ3aWNHVnlkVndpT2lCYk1qQTFMQ0F4TXpNc0lEWXpYU3hjY2x4dVhIUmNJbkJwYm10Y0lqb2dXekkxTlN3Z01Ua3lMQ0F5TUROZExGeHlYRzVjZEZ3aWNHeDFiVndpT2lCYk1qSXhMQ0F4TmpBc0lESXlNVjBzWEhKY2JseDBYQ0p3YjNka1pYSmliSFZsWENJNklGc3hOellzSURJeU5Dd2dNak13WFN4Y2NseHVYSFJjSW5CMWNuQnNaVndpT2lCYk1USTRMQ0F3TENBeE1qaGRMRnh5WEc1Y2RGd2ljbVZpWldOallYQjFjbkJzWlZ3aU9pQmJNVEF5TENBMU1Td2dNVFV6WFN4Y2NseHVYSFJjSW5KbFpGd2lPaUJiTWpVMUxDQXdMQ0F3WFN4Y2NseHVYSFJjSW5KdmMzbGljbTkzYmx3aU9pQmJNVGc0TENBeE5ETXNJREUwTTEwc1hISmNibHgwWENKeWIzbGhiR0pzZFdWY0lqb2dXelkxTENBeE1EVXNJREl5TlYwc1hISmNibHgwWENKellXUmtiR1ZpY205M2Jsd2lPaUJiTVRNNUxDQTJPU3dnTVRsZExGeHlYRzVjZEZ3aWMyRnNiVzl1WENJNklGc3lOVEFzSURFeU9Dd2dNVEUwWFN4Y2NseHVYSFJjSW5OaGJtUjVZbkp2ZDI1Y0lqb2dXekkwTkN3Z01UWTBMQ0E1Tmwwc1hISmNibHgwWENKelpXRm5jbVZsYmx3aU9pQmJORFlzSURFek9Td2dPRGRkTEZ4eVhHNWNkRndpYzJWaGMyaGxiR3hjSWpvZ1d6STFOU3dnTWpRMUxDQXlNemhkTEZ4eVhHNWNkRndpYzJsbGJtNWhYQ0k2SUZzeE5qQXNJRGd5TENBME5WMHNYSEpjYmx4MFhDSnphV3gyWlhKY0lqb2dXekU1TWl3Z01Ua3lMQ0F4T1RKZExGeHlYRzVjZEZ3aWMydDVZbXgxWlZ3aU9pQmJNVE0xTENBeU1EWXNJREl6TlYwc1hISmNibHgwWENKemJHRjBaV0pzZFdWY0lqb2dXekV3Tml3Z09UQXNJREl3TlYwc1hISmNibHgwWENKemJHRjBaV2R5WVhsY0lqb2dXekV4TWl3Z01USTRMQ0F4TkRSZExGeHlYRzVjZEZ3aWMyeGhkR1ZuY21WNVhDSTZJRnN4TVRJc0lERXlPQ3dnTVRRMFhTeGNjbHh1WEhSY0luTnViM2RjSWpvZ1d6STFOU3dnTWpVd0xDQXlOVEJkTEZ4eVhHNWNkRndpYzNCeWFXNW5aM0psWlc1Y0lqb2dXekFzSURJMU5Td2dNVEkzWFN4Y2NseHVYSFJjSW5OMFpXVnNZbXgxWlZ3aU9pQmJOekFzSURFek1Dd2dNVGd3WFN4Y2NseHVYSFJjSW5SaGJsd2lPaUJiTWpFd0xDQXhPREFzSURFME1GMHNYSEpjYmx4MFhDSjBaV0ZzWENJNklGc3dMQ0F4TWpnc0lERXlPRjBzWEhKY2JseDBYQ0owYUdsemRHeGxYQ0k2SUZzeU1UWXNJREU1TVN3Z01qRTJYU3hjY2x4dVhIUmNJblJ2YldGMGIxd2lPaUJiTWpVMUxDQTVPU3dnTnpGZExGeHlYRzVjZEZ3aWRIVnljWFZ2YVhObFhDSTZJRnMyTkN3Z01qSTBMQ0F5TURoZExGeHlYRzVjZEZ3aWRtbHZiR1YwWENJNklGc3lNemdzSURFek1Dd2dNak00WFN4Y2NseHVYSFJjSW5kb1pXRjBYQ0k2SUZzeU5EVXNJREl5TWl3Z01UYzVYU3hjY2x4dVhIUmNJbmRvYVhSbFhDSTZJRnN5TlRVc0lESTFOU3dnTWpVMVhTeGNjbHh1WEhSY0luZG9hWFJsYzIxdmEyVmNJam9nV3pJME5Td2dNalExTENBeU5EVmRMRnh5WEc1Y2RGd2llV1ZzYkc5M1hDSTZJRnN5TlRVc0lESTFOU3dnTUYwc1hISmNibHgwWENKNVpXeHNiM2RuY21WbGJsd2lPaUJiTVRVMExDQXlNRFVzSURVd1hWeHlYRzU5TzF4eVhHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCamIyeHZjbE4wY21sdVp5QTlJSEpsY1hWcGNtVW9KMk52Ykc5eUxYTjBjbWx1WnljcE8xeHVkbUZ5SUdOdmJuWmxjblFnUFNCeVpYRjFhWEpsS0NkamIyeHZjaTFqYjI1MlpYSjBKeWs3WEc1Y2JuWmhjaUJmYzJ4cFkyVWdQU0JiWFM1emJHbGpaVHRjYmx4dWRtRnlJSE5yYVhCd1pXUk5iMlJsYkhNZ1BTQmJYRzVjZEM4dklIUnZJR0psSUdodmJtVnpkQ3dnU1NCa2IyNG5kQ0J5WldGc2JIa2dabVZsYkNCc2FXdGxJR3RsZVhkdmNtUWdZbVZzYjI1bmN5QnBiaUJqYjJ4dmNpQmpiMjUyWlhKMExDQmlkWFFnWldndVhHNWNkQ2RyWlhsM2IzSmtKeXhjYmx4dVhIUXZMeUJuY21GNUlHTnZibVpzYVdOMGN5QjNhWFJvSUhOdmJXVWdiV1YwYUc5a0lHNWhiV1Z6TENCaGJtUWdhR0Z6SUdsMGN5QnZkMjRnYldWMGFHOWtJR1JsWm1sdVpXUXVYRzVjZENkbmNtRjVKeXhjYmx4dVhIUXZMeUJ6YUc5MWJHUnVKM1FnY21WaGJHeDVJR0psSUdsdUlHTnZiRzl5TFdOdmJuWmxjblFnWldsMGFHVnlMaTR1WEc1Y2RDZG9aWGduWEc1ZE8xeHVYRzUyWVhJZ2FHRnphR1ZrVFc5a1pXeExaWGx6SUQwZ2UzMDdYRzVQWW1wbFkzUXVhMlY1Y3loamIyNTJaWEowS1M1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNodGIyUmxiQ2tnZTF4dVhIUm9ZWE5vWldSTmIyUmxiRXRsZVhOYlgzTnNhV05sTG1OaGJHd29ZMjl1ZG1WeWRGdHRiMlJsYkYwdWJHRmlaV3h6S1M1emIzSjBLQ2t1YW05cGJpZ25KeWxkSUQwZ2JXOWtaV3c3WEc1OUtUdGNibHh1ZG1GeUlHeHBiV2wwWlhKeklEMGdlMzA3WEc1Y2JtWjFibU4wYVc5dUlFTnZiRzl5S0c5aWFpd2diVzlrWld3cElIdGNibHgwYVdZZ0tDRW9kR2hwY3lCcGJuTjBZVzVqWlc5bUlFTnZiRzl5S1NrZ2UxeHVYSFJjZEhKbGRIVnliaUJ1WlhjZ1EyOXNiM0lvYjJKcUxDQnRiMlJsYkNrN1hHNWNkSDFjYmx4dVhIUnBaaUFvYlc5a1pXd2dKaVlnYlc5a1pXd2dhVzRnYzJ0cGNIQmxaRTF2WkdWc2N5a2dlMXh1WEhSY2RHMXZaR1ZzSUQwZ2JuVnNiRHRjYmx4MGZWeHVYRzVjZEdsbUlDaHRiMlJsYkNBbUppQWhLRzF2WkdWc0lHbHVJR052Ym5abGNuUXBLU0I3WEc1Y2RGeDBkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZFZibXR1YjNkdUlHMXZaR1ZzT2lBbklDc2diVzlrWld3cE8xeHVYSFI5WEc1Y2JseDBkbUZ5SUdrN1hHNWNkSFpoY2lCamFHRnVibVZzY3p0Y2JseHVYSFJwWmlBb2RIbHdaVzltSUc5aWFpQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNibHgwWEhSMGFHbHpMbTF2WkdWc0lEMGdKM0puWWljN1hHNWNkRngwZEdocGN5NWpiMnh2Y2lBOUlGc3dMQ0F3TENBd1hUdGNibHgwWEhSMGFHbHpMblpoYkhCb1lTQTlJREU3WEc1Y2RIMGdaV3h6WlNCcFppQW9iMkpxSUdsdWMzUmhibU5sYjJZZ1EyOXNiM0lwSUh0Y2JseDBYSFIwYUdsekxtMXZaR1ZzSUQwZ2IySnFMbTF2WkdWc08xeHVYSFJjZEhSb2FYTXVZMjlzYjNJZ1BTQnZZbW91WTI5c2IzSXVjMnhwWTJVb0tUdGNibHgwWEhSMGFHbHpMblpoYkhCb1lTQTlJRzlpYWk1MllXeHdhR0U3WEc1Y2RIMGdaV3h6WlNCcFppQW9kSGx3Wlc5bUlHOWlhaUE5UFQwZ0ozTjBjbWx1WnljcElIdGNibHgwWEhSMllYSWdjbVZ6ZFd4MElEMGdZMjlzYjNKVGRISnBibWN1WjJWMEtHOWlhaWs3WEc1Y2RGeDBhV1lnS0hKbGMzVnNkQ0E5UFQwZ2JuVnNiQ2tnZTF4dVhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RWYm1GaWJHVWdkRzhnY0dGeWMyVWdZMjlzYjNJZ1puSnZiU0J6ZEhKcGJtYzZJQ2NnS3lCdlltb3BPMXh1WEhSY2RIMWNibHh1WEhSY2RIUm9hWE11Ylc5a1pXd2dQU0J5WlhOMWJIUXViVzlrWld3N1hHNWNkRngwWTJoaGJtNWxiSE1nUFNCamIyNTJaWEowVzNSb2FYTXViVzlrWld4ZExtTm9ZVzV1Wld4ek8xeHVYSFJjZEhSb2FYTXVZMjlzYjNJZ1BTQnlaWE4xYkhRdWRtRnNkV1V1YzJ4cFkyVW9NQ3dnWTJoaGJtNWxiSE1wTzF4dVhIUmNkSFJvYVhNdWRtRnNjR2hoSUQwZ2RIbHdaVzltSUhKbGMzVnNkQzUyWVd4MVpWdGphR0Z1Ym1Wc2MxMGdQVDA5SUNkdWRXMWlaWEluSUQ4Z2NtVnpkV3gwTG5aaGJIVmxXMk5vWVc1dVpXeHpYU0E2SURFN1hHNWNkSDBnWld4elpTQnBaaUFvYjJKcUxteGxibWQwYUNrZ2UxeHVYSFJjZEhSb2FYTXViVzlrWld3Z1BTQnRiMlJsYkNCOGZDQW5jbWRpSnp0Y2JseDBYSFJqYUdGdWJtVnNjeUE5SUdOdmJuWmxjblJiZEdocGN5NXRiMlJsYkYwdVkyaGhibTVsYkhNN1hHNWNkRngwZG1GeUlHNWxkMEZ5Y2lBOUlGOXpiR2xqWlM1allXeHNLRzlpYWl3Z01Dd2dZMmhoYm01bGJITXBPMXh1WEhSY2RIUm9hWE11WTI5c2IzSWdQU0I2WlhKdlFYSnlZWGtvYm1WM1FYSnlMQ0JqYUdGdWJtVnNjeWs3WEc1Y2RGeDBkR2hwY3k1MllXeHdhR0VnUFNCMGVYQmxiMllnYjJKcVcyTm9ZVzV1Wld4elhTQTlQVDBnSjI1MWJXSmxjaWNnUHlCdlltcGJZMmhoYm01bGJITmRJRG9nTVR0Y2JseDBmU0JsYkhObElHbG1JQ2gwZVhCbGIyWWdiMkpxSUQwOVBTQW5iblZ0WW1WeUp5a2dlMXh1WEhSY2RDOHZJSFJvYVhNZ2FYTWdZV3gzWVhseklGSkhRaUF0SUdOaGJpQmlaU0JqYjI1MlpYSjBaV1FnYkdGMFpYSWdiMjR1WEc1Y2RGeDBiMkpxSUNZOUlEQjRSa1pHUmtaR08xeHVYSFJjZEhSb2FYTXViVzlrWld3Z1BTQW5jbWRpSnp0Y2JseDBYSFIwYUdsekxtTnZiRzl5SUQwZ1cxeHVYSFJjZEZ4MEtHOWlhaUErUGlBeE5pa2dKaUF3ZUVaR0xGeHVYSFJjZEZ4MEtHOWlhaUErUGlBNEtTQW1JREI0UmtZc1hHNWNkRngwWEhSdlltb2dKaUF3ZUVaR1hHNWNkRngwWFR0Y2JseDBYSFIwYUdsekxuWmhiSEJvWVNBOUlERTdYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBkR2hwY3k1MllXeHdhR0VnUFNBeE8xeHVYRzVjZEZ4MGRtRnlJR3RsZVhNZ1BTQlBZbXBsWTNRdWEyVjVjeWh2WW1vcE8xeHVYSFJjZEdsbUlDZ25ZV3h3YUdFbklHbHVJRzlpYWlrZ2UxeHVYSFJjZEZ4MGEyVjVjeTV6Y0d4cFkyVW9hMlY1Y3k1cGJtUmxlRTltS0NkaGJIQm9ZU2NwTENBeEtUdGNibHgwWEhSY2RIUm9hWE11ZG1Gc2NHaGhJRDBnZEhsd1pXOW1JRzlpYWk1aGJIQm9ZU0E5UFQwZ0oyNTFiV0psY2ljZ1B5QnZZbW91WVd4d2FHRWdPaUF3TzF4dVhIUmNkSDFjYmx4dVhIUmNkSFpoY2lCb1lYTm9aV1JMWlhseklEMGdhMlY1Y3k1emIzSjBLQ2t1YW05cGJpZ25KeWs3WEc1Y2RGeDBhV1lnS0NFb2FHRnphR1ZrUzJWNWN5QnBiaUJvWVhOb1pXUk5iMlJsYkV0bGVYTXBLU0I3WEc1Y2RGeDBYSFIwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMVZ1WVdKc1pTQjBieUJ3WVhKelpTQmpiMnh2Y2lCbWNtOXRJRzlpYW1WamREb2dKeUFySUVwVFQwNHVjM1J5YVc1bmFXWjVLRzlpYWlrcE8xeHVYSFJjZEgxY2JseHVYSFJjZEhSb2FYTXViVzlrWld3Z1BTQm9ZWE5vWldSTmIyUmxiRXRsZVhOYmFHRnphR1ZrUzJWNWMxMDdYRzVjYmx4MFhIUjJZWElnYkdGaVpXeHpJRDBnWTI5dWRtVnlkRnQwYUdsekxtMXZaR1ZzWFM1c1lXSmxiSE03WEc1Y2RGeDBkbUZ5SUdOdmJHOXlJRDBnVzEwN1hHNWNkRngwWm05eUlDaHBJRDBnTURzZ2FTQThJR3hoWW1Wc2N5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dVhIUmNkRngwWTI5c2IzSXVjSFZ6YUNodlltcGJiR0ZpWld4elcybGRYU2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBkR2hwY3k1amIyeHZjaUE5SUhwbGNtOUJjbkpoZVNoamIyeHZjaWs3WEc1Y2RIMWNibHh1WEhRdkx5QndaWEptYjNKdElHeHBiV2wwWVhScGIyNXpJQ2hqYkdGdGNHbHVaeXdnWlhSakxpbGNibHgwYVdZZ0tHeHBiV2wwWlhKelczUm9hWE11Ylc5a1pXeGRLU0I3WEc1Y2RGeDBZMmhoYm01bGJITWdQU0JqYjI1MlpYSjBXM1JvYVhNdWJXOWtaV3hkTG1Ob1lXNXVaV3h6TzF4dVhIUmNkR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQmphR0Z1Ym1Wc2N6c2dhU3NyS1NCN1hHNWNkRngwWEhSMllYSWdiR2x0YVhRZ1BTQnNhVzFwZEdWeWMxdDBhR2x6TG0xdlpHVnNYVnRwWFR0Y2JseDBYSFJjZEdsbUlDaHNhVzFwZENrZ2UxeHVYSFJjZEZ4MFhIUjBhR2x6TG1OdmJHOXlXMmxkSUQwZ2JHbHRhWFFvZEdocGN5NWpiMnh2Y2x0cFhTazdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBkR2hwY3k1MllXeHdhR0VnUFNCTllYUm9MbTFoZUNnd0xDQk5ZWFJvTG0xcGJpZ3hMQ0IwYUdsekxuWmhiSEJvWVNrcE8xeHVYRzVjZEdsbUlDaFBZbXBsWTNRdVpuSmxaWHBsS1NCN1hHNWNkRngwVDJKcVpXTjBMbVp5WldWNlpTaDBhR2x6S1R0Y2JseDBmVnh1ZlZ4dVhHNURiMnh2Y2k1d2NtOTBiM1I1Y0dVZ1BTQjdYRzVjZEhSdlUzUnlhVzVuT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MGNtVjBkWEp1SUhSb2FYTXVjM1J5YVc1bktDazdYRzVjZEgwc1hHNWNibHgwZEc5S1UwOU9PaUJtZFc1amRHbHZiaUFvS1NCN1hHNWNkRngwY21WMGRYSnVJSFJvYVhOYmRHaHBjeTV0YjJSbGJGMG9LVHRjYmx4MGZTeGNibHh1WEhSemRISnBibWM2SUdaMWJtTjBhVzl1SUNod2JHRmpaWE1wSUh0Y2JseDBYSFIyWVhJZ2MyVnNaaUE5SUhSb2FYTXViVzlrWld3Z2FXNGdZMjlzYjNKVGRISnBibWN1ZEc4Z1B5QjBhR2x6SURvZ2RHaHBjeTV5WjJJb0tUdGNibHgwWEhSelpXeG1JRDBnYzJWc1ppNXliM1Z1WkNoMGVYQmxiMllnY0d4aFkyVnpJRDA5UFNBbmJuVnRZbVZ5SnlBL0lIQnNZV05sY3lBNklERXBPMXh1WEhSY2RIWmhjaUJoY21keklEMGdjMlZzWmk1MllXeHdhR0VnUFQwOUlERWdQeUJ6Wld4bUxtTnZiRzl5SURvZ2MyVnNaaTVqYjJ4dmNpNWpiMjVqWVhRb2RHaHBjeTUyWVd4d2FHRXBPMXh1WEhSY2RISmxkSFZ5YmlCamIyeHZjbE4wY21sdVp5NTBiMXR6Wld4bUxtMXZaR1ZzWFNoaGNtZHpLVHRjYmx4MGZTeGNibHh1WEhSd1pYSmpaVzUwVTNSeWFXNW5PaUJtZFc1amRHbHZiaUFvY0d4aFkyVnpLU0I3WEc1Y2RGeDBkbUZ5SUhObGJHWWdQU0IwYUdsekxuSm5ZaWdwTG5KdmRXNWtLSFI1Y0dWdlppQndiR0ZqWlhNZ1BUMDlJQ2R1ZFcxaVpYSW5JRDhnY0d4aFkyVnpJRG9nTVNrN1hHNWNkRngwZG1GeUlHRnlaM01nUFNCelpXeG1MblpoYkhCb1lTQTlQVDBnTVNBL0lITmxiR1l1WTI5c2IzSWdPaUJ6Wld4bUxtTnZiRzl5TG1OdmJtTmhkQ2gwYUdsekxuWmhiSEJvWVNrN1hHNWNkRngwY21WMGRYSnVJR052Ykc5eVUzUnlhVzVuTG5SdkxuSm5ZaTV3WlhKalpXNTBLR0Z5WjNNcE8xeHVYSFI5TEZ4dVhHNWNkR0Z5Y21GNU9pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBjbVYwZFhKdUlIUm9hWE11ZG1Gc2NHaGhJRDA5UFNBeElEOGdkR2hwY3k1amIyeHZjaTV6YkdsalpTZ3BJRG9nZEdocGN5NWpiMnh2Y2k1amIyNWpZWFFvZEdocGN5NTJZV3h3YUdFcE8xeHVYSFI5TEZ4dVhHNWNkRzlpYW1WamREb2dablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkSFpoY2lCeVpYTjFiSFFnUFNCN2ZUdGNibHgwWEhSMllYSWdZMmhoYm01bGJITWdQU0JqYjI1MlpYSjBXM1JvYVhNdWJXOWtaV3hkTG1Ob1lXNXVaV3h6TzF4dVhIUmNkSFpoY2lCc1lXSmxiSE1nUFNCamIyNTJaWEowVzNSb2FYTXViVzlrWld4ZExteGhZbVZzY3p0Y2JseHVYSFJjZEdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z1kyaGhibTVsYkhNN0lHa3JLeWtnZTF4dVhIUmNkRngwY21WemRXeDBXMnhoWW1Wc2MxdHBYVjBnUFNCMGFHbHpMbU52Ykc5eVcybGRPMXh1WEhSY2RIMWNibHh1WEhSY2RHbG1JQ2gwYUdsekxuWmhiSEJvWVNBaFBUMGdNU2tnZTF4dVhIUmNkRngwY21WemRXeDBMbUZzY0doaElEMGdkR2hwY3k1MllXeHdhR0U3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlISmxjM1ZzZER0Y2JseDBmU3hjYmx4dVhIUjFibWwwUVhKeVlYazZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFIyWVhJZ2NtZGlJRDBnZEdocGN5NXlaMklvS1M1amIyeHZjanRjYmx4MFhIUnlaMkpiTUYwZ0x6MGdNalUxTzF4dVhIUmNkSEpuWWxzeFhTQXZQU0F5TlRVN1hHNWNkRngwY21kaVd6SmRJQzg5SURJMU5UdGNibHh1WEhSY2RHbG1JQ2gwYUdsekxuWmhiSEJvWVNBaFBUMGdNU2tnZTF4dVhIUmNkRngwY21kaUxuQjFjMmdvZEdocGN5NTJZV3h3YUdFcE8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbGRIVnliaUJ5WjJJN1hHNWNkSDBzWEc1Y2JseDBkVzVwZEU5aWFtVmpkRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJjZEhaaGNpQnlaMklnUFNCMGFHbHpMbkpuWWlncExtOWlhbVZqZENncE8xeHVYSFJjZEhKbllpNXlJQzg5SURJMU5UdGNibHgwWEhSeVoySXVaeUF2UFNBeU5UVTdYRzVjZEZ4MGNtZGlMbUlnTHowZ01qVTFPMXh1WEc1Y2RGeDBhV1lnS0hSb2FYTXVkbUZzY0doaElDRTlQU0F4S1NCN1hHNWNkRngwWEhSeVoySXVZV3h3YUdFZ1BTQjBhR2x6TG5aaGJIQm9ZVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnlaWFIxY200Z2NtZGlPMXh1WEhSOUxGeHVYRzVjZEhKdmRXNWtPaUJtZFc1amRHbHZiaUFvY0d4aFkyVnpLU0I3WEc1Y2RGeDBjR3hoWTJWeklEMGdUV0YwYUM1dFlYZ29jR3hoWTJWeklIeDhJREFzSURBcE8xeHVYSFJjZEhKbGRIVnliaUJ1WlhjZ1EyOXNiM0lvZEdocGN5NWpiMnh2Y2k1dFlYQW9jbTkxYm1SVWIxQnNZV05sS0hCc1lXTmxjeWtwTG1OdmJtTmhkQ2gwYUdsekxuWmhiSEJvWVNrc0lIUm9hWE11Ylc5a1pXd3BPMXh1WEhSOUxGeHVYRzVjZEdGc2NHaGhPaUJtZFc1amRHbHZiaUFvZG1Gc0tTQjdYRzVjZEZ4MGFXWWdLR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQnVaWGNnUTI5c2IzSW9kR2hwY3k1amIyeHZjaTVqYjI1allYUW9UV0YwYUM1dFlYZ29NQ3dnVFdGMGFDNXRhVzRvTVN3Z2RtRnNLU2twTENCMGFHbHpMbTF2WkdWc0tUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnZEdocGN5NTJZV3h3YUdFN1hHNWNkSDBzWEc1Y2JseDBMeThnY21kaVhHNWNkSEpsWkRvZ1oyVjBjMlYwS0NkeVoySW5MQ0F3TENCdFlYaG1iaWd5TlRVcEtTeGNibHgwWjNKbFpXNDZJR2RsZEhObGRDZ25jbWRpSnl3Z01Td2diV0Y0Wm00b01qVTFLU2tzWEc1Y2RHSnNkV1U2SUdkbGRITmxkQ2duY21kaUp5d2dNaXdnYldGNFptNG9NalUxS1Nrc1hHNWNibHgwYUhWbE9pQm5aWFJ6WlhRb1d5ZG9jMnduTENBbmFITjJKeXdnSjJoemJDY3NJQ2RvZDJJbkxDQW5hR05uSjEwc0lEQXNJR1oxYm1OMGFXOXVJQ2gyWVd3cElIc2djbVYwZFhKdUlDZ29kbUZzSUNVZ016WXdLU0FySURNMk1Da2dKU0F6TmpBN0lIMHBMQ0F2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHSnlZV05sTFhOMGVXeGxYRzVjYmx4MGMyRjBkWEpoZEdsdmJtdzZJR2RsZEhObGRDZ25hSE5zSnl3Z01Td2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RHeHBaMmgwYm1WemN6b2daMlYwYzJWMEtDZG9jMnduTENBeUxDQnRZWGhtYmlneE1EQXBLU3hjYmx4dVhIUnpZWFIxY21GMGFXOXVkam9nWjJWMGMyVjBLQ2RvYzNZbkxDQXhMQ0J0WVhobWJpZ3hNREFwS1N4Y2JseDBkbUZzZFdVNklHZGxkSE5sZENnbmFITjJKeXdnTWl3Z2JXRjRabTRvTVRBd0tTa3NYRzVjYmx4MFkyaHliMjFoT2lCblpYUnpaWFFvSjJoalp5Y3NJREVzSUcxaGVHWnVLREV3TUNrcExGeHVYSFJuY21GNU9pQm5aWFJ6WlhRb0oyaGpaeWNzSURJc0lHMWhlR1p1S0RFd01Da3BMRnh1WEc1Y2RIZG9hWFJsT2lCblpYUnpaWFFvSjJoM1lpY3NJREVzSUcxaGVHWnVLREV3TUNrcExGeHVYSFIzWW14aFkyczZJR2RsZEhObGRDZ25hSGRpSnl3Z01pd2diV0Y0Wm00b01UQXdLU2tzWEc1Y2JseDBZM2xoYmpvZ1oyVjBjMlYwS0NkamJYbHJKeXdnTUN3Z2JXRjRabTRvTVRBd0tTa3NYRzVjZEcxaFoyVnVkR0U2SUdkbGRITmxkQ2duWTIxNWF5Y3NJREVzSUcxaGVHWnVLREV3TUNrcExGeHVYSFI1Wld4c2IzYzZJR2RsZEhObGRDZ25ZMjE1YXljc0lESXNJRzFoZUdadUtERXdNQ2twTEZ4dVhIUmliR0ZqYXpvZ1oyVjBjMlYwS0NkamJYbHJKeXdnTXl3Z2JXRjRabTRvTVRBd0tTa3NYRzVjYmx4MGVEb2daMlYwYzJWMEtDZDRlWG9uTENBd0xDQnRZWGhtYmlneE1EQXBLU3hjYmx4MGVUb2daMlYwYzJWMEtDZDRlWG9uTENBeExDQnRZWGhtYmlneE1EQXBLU3hjYmx4MGVqb2daMlYwYzJWMEtDZDRlWG9uTENBeUxDQnRZWGhtYmlneE1EQXBLU3hjYmx4dVhIUnNPaUJuWlhSelpYUW9KMnhoWWljc0lEQXNJRzFoZUdadUtERXdNQ2twTEZ4dVhIUmhPaUJuWlhSelpYUW9KMnhoWWljc0lERXBMRnh1WEhSaU9pQm5aWFJ6WlhRb0oyeGhZaWNzSURJcExGeHVYRzVjZEd0bGVYZHZjbVE2SUdaMWJtTjBhVzl1SUNoMllXd3BJSHRjYmx4MFhIUnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJRzVsZHlCRGIyeHZjaWgyWVd3cE8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbGRIVnliaUJqYjI1MlpYSjBXM1JvYVhNdWJXOWtaV3hkTG10bGVYZHZjbVFvZEdocGN5NWpiMnh2Y2lrN1hHNWNkSDBzWEc1Y2JseDBhR1Y0T2lCbWRXNWpkR2x2YmlBb2RtRnNLU0I3WEc1Y2RGeDBhV1lnS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJ1WlhjZ1EyOXNiM0lvZG1Gc0tUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnWTI5c2IzSlRkSEpwYm1jdWRHOHVhR1Y0S0hSb2FYTXVjbWRpS0NrdWNtOTFibVFvS1M1amIyeHZjaWs3WEc1Y2RIMHNYRzVjYmx4MGNtZGlUblZ0WW1WeU9pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBkbUZ5SUhKbllpQTlJSFJvYVhNdWNtZGlLQ2t1WTI5c2IzSTdYRzVjZEZ4MGNtVjBkWEp1SUNnb2NtZGlXekJkSUNZZ01IaEdSaWtnUER3Z01UWXBJSHdnS0NoeVoySmJNVjBnSmlBd2VFWkdLU0E4UENBNEtTQjhJQ2h5WjJKYk1sMGdKaUF3ZUVaR0tUdGNibHgwZlN4Y2JseHVYSFJzZFcxcGJtOXphWFI1T2lCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MEx5OGdhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZWRkl2VjBOQlJ6SXdMeU55Wld4aGRHbDJaV3gxYldsdVlXNWpaV1JsWmx4dVhIUmNkSFpoY2lCeVoySWdQU0IwYUdsekxuSm5ZaWdwTG1OdmJHOXlPMXh1WEc1Y2RGeDBkbUZ5SUd4MWJTQTlJRnRkTzF4dVhIUmNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnY21kaUxteGxibWQwYURzZ2FTc3JLU0I3WEc1Y2RGeDBYSFIyWVhJZ1kyaGhiaUE5SUhKbllsdHBYU0F2SURJMU5UdGNibHgwWEhSY2RHeDFiVnRwWFNBOUlDaGphR0Z1SUR3OUlEQXVNRE01TWpncElEOGdZMmhoYmlBdklERXlMamt5SURvZ1RXRjBhQzV3YjNjb0tDaGphR0Z1SUNzZ01DNHdOVFVwSUM4Z01TNHdOVFVwTENBeUxqUXBPMXh1WEhSY2RIMWNibHh1WEhSY2RISmxkSFZ5YmlBd0xqSXhNallnS2lCc2RXMWJNRjBnS3lBd0xqY3hOVElnS2lCc2RXMWJNVjBnS3lBd0xqQTNNaklnS2lCc2RXMWJNbDA3WEc1Y2RIMHNYRzVjYmx4MFkyOXVkSEpoYzNRNklHWjFibU4wYVc5dUlDaGpiMnh2Y2pJcElIdGNibHgwWEhRdkx5Qm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OVVVaTlYUTBGSE1qQXZJMk52Ym5SeVlYTjBMWEpoZEdsdlpHVm1YRzVjZEZ4MGRtRnlJR3gxYlRFZ1BTQjBhR2x6TG14MWJXbHViM05wZEhrb0tUdGNibHgwWEhSMllYSWdiSFZ0TWlBOUlHTnZiRzl5TWk1c2RXMXBibTl6YVhSNUtDazdYRzVjYmx4MFhIUnBaaUFvYkhWdE1TQStJR3gxYlRJcElIdGNibHgwWEhSY2RISmxkSFZ5YmlBb2JIVnRNU0FySURBdU1EVXBJQzhnS0d4MWJUSWdLeUF3TGpBMUtUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnS0d4MWJUSWdLeUF3TGpBMUtTQXZJQ2hzZFcweElDc2dNQzR3TlNrN1hHNWNkSDBzWEc1Y2JseDBiR1YyWld3NklHWjFibU4wYVc5dUlDaGpiMnh2Y2pJcElIdGNibHgwWEhSMllYSWdZMjl1ZEhKaGMzUlNZWFJwYnlBOUlIUm9hWE11WTI5dWRISmhjM1FvWTI5c2IzSXlLVHRjYmx4MFhIUnBaaUFvWTI5dWRISmhjM1JTWVhScGJ5QStQU0EzTGpFcElIdGNibHgwWEhSY2RISmxkSFZ5YmlBblFVRkJKenRjYmx4MFhIUjlYRzVjYmx4MFhIUnlaWFIxY200Z0tHTnZiblJ5WVhOMFVtRjBhVzhnUGowZ05DNDFLU0EvSUNkQlFTY2dPaUFuSnp0Y2JseDBmU3hjYmx4dVhIUnBjMFJoY21zNklHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUXZMeUJaU1ZFZ1pYRjFZWFJwYjI0Z1puSnZiU0JvZEhSd09pOHZNalIzWVhsekxtOXlaeTh5TURFd0wyTmhiR04xYkdGMGFXNW5MV052Ykc5eUxXTnZiblJ5WVhOMFhHNWNkRngwZG1GeUlISm5ZaUE5SUhSb2FYTXVjbWRpS0NrdVkyOXNiM0k3WEc1Y2RGeDBkbUZ5SUhscGNTQTlJQ2h5WjJKYk1GMGdLaUF5T1RrZ0t5QnlaMkpiTVYwZ0tpQTFPRGNnS3lCeVoySmJNbDBnS2lBeE1UUXBJQzhnTVRBd01EdGNibHgwWEhSeVpYUjFjbTRnZVdseElEd2dNVEk0TzF4dVhIUjlMRnh1WEc1Y2RHbHpUR2xuYUhRNklHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUnlaWFIxY200Z0lYUm9hWE11YVhORVlYSnJLQ2s3WEc1Y2RIMHNYRzVjYmx4MGJtVm5ZWFJsT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MGRtRnlJSEpuWWlBOUlIUm9hWE11Y21kaUtDazdYRzVjZEZ4MFptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQXpPeUJwS3lzcElIdGNibHgwWEhSY2RISm5ZaTVqYjJ4dmNsdHBYU0E5SURJMU5TQXRJSEpuWWk1amIyeHZjbHRwWFR0Y2JseDBYSFI5WEc1Y2RGeDBjbVYwZFhKdUlISm5ZanRjYmx4MGZTeGNibHh1WEhSc2FXZG9kR1Z1T2lCbWRXNWpkR2x2YmlBb2NtRjBhVzhwSUh0Y2JseDBYSFIyWVhJZ2FITnNJRDBnZEdocGN5NW9jMndvS1R0Y2JseDBYSFJvYzJ3dVkyOXNiM0piTWwwZ0t6MGdhSE5zTG1OdmJHOXlXekpkSUNvZ2NtRjBhVzg3WEc1Y2RGeDBjbVYwZFhKdUlHaHpiRHRjYmx4MGZTeGNibHh1WEhSa1lYSnJaVzQ2SUdaMWJtTjBhVzl1SUNoeVlYUnBieWtnZTF4dVhIUmNkSFpoY2lCb2Myd2dQU0IwYUdsekxtaHpiQ2dwTzF4dVhIUmNkR2h6YkM1amIyeHZjbHN5WFNBdFBTQm9jMnd1WTI5c2IzSmJNbDBnS2lCeVlYUnBienRjYmx4MFhIUnlaWFIxY200Z2FITnNPMXh1WEhSOUxGeHVYRzVjZEhOaGRIVnlZWFJsT2lCbWRXNWpkR2x2YmlBb2NtRjBhVzhwSUh0Y2JseDBYSFIyWVhJZ2FITnNJRDBnZEdocGN5NW9jMndvS1R0Y2JseDBYSFJvYzJ3dVkyOXNiM0piTVYwZ0t6MGdhSE5zTG1OdmJHOXlXekZkSUNvZ2NtRjBhVzg3WEc1Y2RGeDBjbVYwZFhKdUlHaHpiRHRjYmx4MGZTeGNibHh1WEhSa1pYTmhkSFZ5WVhSbE9pQm1kVzVqZEdsdmJpQW9jbUYwYVc4cElIdGNibHgwWEhSMllYSWdhSE5zSUQwZ2RHaHBjeTVvYzJ3b0tUdGNibHgwWEhSb2Myd3VZMjlzYjNKYk1WMGdMVDBnYUhOc0xtTnZiRzl5V3pGZElDb2djbUYwYVc4N1hHNWNkRngwY21WMGRYSnVJR2h6YkR0Y2JseDBmU3hjYmx4dVhIUjNhR2wwWlc0NklHWjFibU4wYVc5dUlDaHlZWFJwYnlrZ2UxeHVYSFJjZEhaaGNpQm9kMklnUFNCMGFHbHpMbWgzWWlncE8xeHVYSFJjZEdoM1lpNWpiMnh2Y2xzeFhTQXJQU0JvZDJJdVkyOXNiM0piTVYwZ0tpQnlZWFJwYnp0Y2JseDBYSFJ5WlhSMWNtNGdhSGRpTzF4dVhIUjlMRnh1WEc1Y2RHSnNZV05yWlc0NklHWjFibU4wYVc5dUlDaHlZWFJwYnlrZ2UxeHVYSFJjZEhaaGNpQm9kMklnUFNCMGFHbHpMbWgzWWlncE8xeHVYSFJjZEdoM1lpNWpiMnh2Y2xzeVhTQXJQU0JvZDJJdVkyOXNiM0piTWwwZ0tpQnlZWFJwYnp0Y2JseDBYSFJ5WlhSMWNtNGdhSGRpTzF4dVhIUjlMRnh1WEc1Y2RHZHlZWGx6WTJGc1pUb2dablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkQzh2SUdoMGRIQTZMeTlsYmk1M2FXdHBjR1ZrYVdFdWIzSm5MM2RwYTJrdlIzSmhlWE5qWVd4bEkwTnZiblpsY25ScGJtZGZZMjlzYjNKZmRHOWZaM0poZVhOallXeGxYRzVjZEZ4MGRtRnlJSEpuWWlBOUlIUm9hWE11Y21kaUtDa3VZMjlzYjNJN1hHNWNkRngwZG1GeUlIWmhiQ0E5SUhKbllsc3dYU0FxSURBdU15QXJJSEpuWWxzeFhTQXFJREF1TlRrZ0t5QnlaMkpiTWwwZ0tpQXdMakV4TzF4dVhIUmNkSEpsZEhWeWJpQkRiMnh2Y2k1eVoySW9kbUZzTENCMllXd3NJSFpoYkNrN1hHNWNkSDBzWEc1Y2JseDBabUZrWlRvZ1puVnVZM1JwYjI0Z0tISmhkR2x2S1NCN1hHNWNkRngwY21WMGRYSnVJSFJvYVhNdVlXeHdhR0VvZEdocGN5NTJZV3h3YUdFZ0xTQW9kR2hwY3k1MllXeHdhR0VnS2lCeVlYUnBieWtwTzF4dVhIUjlMRnh1WEc1Y2RHOXdZWEYxWlhJNklHWjFibU4wYVc5dUlDaHlZWFJwYnlrZ2UxeHVYSFJjZEhKbGRIVnliaUIwYUdsekxtRnNjR2hoS0hSb2FYTXVkbUZzY0doaElDc2dLSFJvYVhNdWRtRnNjR2hoSUNvZ2NtRjBhVzhwS1R0Y2JseDBmU3hjYmx4dVhIUnliM1JoZEdVNklHWjFibU4wYVc5dUlDaGtaV2R5WldWektTQjdYRzVjZEZ4MGRtRnlJR2h6YkNBOUlIUm9hWE11YUhOc0tDazdYRzVjZEZ4MGRtRnlJR2gxWlNBOUlHaHpiQzVqYjJ4dmNsc3dYVHRjYmx4MFhIUm9kV1VnUFNBb2FIVmxJQ3NnWkdWbmNtVmxjeWtnSlNBek5qQTdYRzVjZEZ4MGFIVmxJRDBnYUhWbElEd2dNQ0EvSURNMk1DQXJJR2gxWlNBNklHaDFaVHRjYmx4MFhIUm9jMnd1WTI5c2IzSmJNRjBnUFNCb2RXVTdYRzVjZEZ4MGNtVjBkWEp1SUdoemJEdGNibHgwZlN4Y2JseHVYSFJ0YVhnNklHWjFibU4wYVc5dUlDaHRhWGhwYmtOdmJHOXlMQ0IzWldsbmFIUXBJSHRjYmx4MFhIUXZMeUJ3YjNKMFpXUWdabkp2YlNCellYTnpJR2x0Y0d4bGJXVnVkR0YwYVc5dUlHbHVJRU5jYmx4MFhIUXZMeUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2YzJGemN5OXNhV0p6WVhOekwySnNiMkl2TUdVMllqUmhNamcxTURBNU1qTTFObUZoTTJWalpUQTNZelppTWpRNVpqQXlNakZqWVdObFpDOW1kVzVqZEdsdmJuTXVZM0J3STB3eU1EbGNibHgwWEhSMllYSWdZMjlzYjNJeElEMGdiV2w0YVc1RGIyeHZjaTV5WjJJb0tUdGNibHgwWEhSMllYSWdZMjlzYjNJeUlEMGdkR2hwY3k1eVoySW9LVHRjYmx4MFhIUjJZWElnY0NBOUlIZGxhV2RvZENBOVBUMGdkVzVrWldacGJtVmtJRDhnTUM0MUlEb2dkMlZwWjJoME8xeHVYRzVjZEZ4MGRtRnlJSGNnUFNBeUlDb2djQ0F0SURFN1hHNWNkRngwZG1GeUlHRWdQU0JqYjJ4dmNqRXVZV3h3YUdFb0tTQXRJR052Ykc5eU1pNWhiSEJvWVNncE8xeHVYRzVjZEZ4MGRtRnlJSGN4SUQwZ0tDZ29keUFxSUdFZ1BUMDlJQzB4S1NBL0lIY2dPaUFvZHlBcklHRXBJQzhnS0RFZ0t5QjNJQ29nWVNrcElDc2dNU2tnTHlBeUxqQTdYRzVjZEZ4MGRtRnlJSGN5SUQwZ01TQXRJSGN4TzF4dVhHNWNkRngwY21WMGRYSnVJRU52Ykc5eUxuSm5ZaWhjYmx4MFhIUmNkRngwZHpFZ0tpQmpiMnh2Y2pFdWNtVmtLQ2tnS3lCM01pQXFJR052Ykc5eU1pNXlaV1FvS1N4Y2JseDBYSFJjZEZ4MGR6RWdLaUJqYjJ4dmNqRXVaM0psWlc0b0tTQXJJSGN5SUNvZ1kyOXNiM0l5TG1keVpXVnVLQ2tzWEc1Y2RGeDBYSFJjZEhjeElDb2dZMjlzYjNJeExtSnNkV1VvS1NBcklIY3lJQ29nWTI5c2IzSXlMbUpzZFdVb0tTeGNibHgwWEhSY2RGeDBZMjlzYjNJeExtRnNjR2hoS0NrZ0tpQndJQ3NnWTI5c2IzSXlMbUZzY0doaEtDa2dLaUFvTVNBdElIQXBLVHRjYmx4MGZWeHVmVHRjYmx4dUx5OGdiVzlrWld3Z1kyOXVkbVZ5YzJsdmJpQnRaWFJvYjJSeklHRnVaQ0J6ZEdGMGFXTWdZMjl1YzNSeWRXTjBiM0p6WEc1UFltcGxZM1F1YTJWNWN5aGpiMjUyWlhKMEtTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaHRiMlJsYkNrZ2UxeHVYSFJwWmlBb2MydHBjSEJsWkUxdlpHVnNjeTVwYm1SbGVFOW1LRzF2WkdWc0tTQWhQVDBnTFRFcElIdGNibHgwWEhSeVpYUjFjbTQ3WEc1Y2RIMWNibHh1WEhSMllYSWdZMmhoYm01bGJITWdQU0JqYjI1MlpYSjBXMjF2WkdWc1hTNWphR0Z1Ym1Wc2N6dGNibHh1WEhRdkx5QmpiMjUyWlhKemFXOXVJRzFsZEdodlpITmNibHgwUTI5c2IzSXVjSEp2ZEc5MGVYQmxXMjF2WkdWc1hTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFJwWmlBb2RHaHBjeTV0YjJSbGJDQTlQVDBnYlc5a1pXd3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQnVaWGNnUTI5c2IzSW9kR2hwY3lrN1hHNWNkRngwZlZ4dVhHNWNkRngwYVdZZ0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdncElIdGNibHgwWEhSY2RISmxkSFZ5YmlCdVpYY2dRMjlzYjNJb1lYSm5kVzFsYm5SekxDQnRiMlJsYkNrN1hHNWNkRngwZlZ4dVhHNWNkRngwZG1GeUlHNWxkMEZzY0doaElEMGdkSGx3Wlc5bUlHRnlaM1Z0Wlc1MGMxdGphR0Z1Ym1Wc2MxMGdQVDA5SUNkdWRXMWlaWEluSUQ4Z1kyaGhibTVsYkhNZ09pQjBhR2x6TG5aaGJIQm9ZVHRjYmx4MFhIUnlaWFIxY200Z2JtVjNJRU52Ykc5eUtHRnpjMlZ5ZEVGeWNtRjVLR052Ym5abGNuUmJkR2hwY3k1dGIyUmxiRjFiYlc5a1pXeGRMbkpoZHloMGFHbHpMbU52Ykc5eUtTa3VZMjl1WTJGMEtHNWxkMEZzY0doaEtTd2diVzlrWld3cE8xeHVYSFI5TzF4dVhHNWNkQzh2SUNkemRHRjBhV01uSUdOdmJuTjBjblZqZEdsdmJpQnRaWFJvYjJSelhHNWNkRU52Ykc5eVcyMXZaR1ZzWFNBOUlHWjFibU4wYVc5dUlDaGpiMnh2Y2lrZ2UxeHVYSFJjZEdsbUlDaDBlWEJsYjJZZ1kyOXNiM0lnUFQwOUlDZHVkVzFpWlhJbktTQjdYRzVjZEZ4MFhIUmpiMnh2Y2lBOUlIcGxjbTlCY25KaGVTaGZjMnhwWTJVdVkyRnNiQ2hoY21kMWJXVnVkSE1wTENCamFHRnVibVZzY3lrN1hHNWNkRngwZlZ4dVhIUmNkSEpsZEhWeWJpQnVaWGNnUTI5c2IzSW9ZMjlzYjNJc0lHMXZaR1ZzS1R0Y2JseDBmVHRjYm4wcE8xeHVYRzVtZFc1amRHbHZiaUJ5YjNWdVpGUnZLRzUxYlN3Z2NHeGhZMlZ6S1NCN1hHNWNkSEpsZEhWeWJpQk9kVzFpWlhJb2JuVnRMblJ2Um1sNFpXUW9jR3hoWTJWektTazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlISnZkVzVrVkc5UWJHRmpaU2h3YkdGalpYTXBJSHRjYmx4MGNtVjBkWEp1SUdaMWJtTjBhVzl1SUNodWRXMHBJSHRjYmx4MFhIUnlaWFIxY200Z2NtOTFibVJVYnlodWRXMHNJSEJzWVdObGN5azdYRzVjZEgwN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdkbGRITmxkQ2h0YjJSbGJDd2dZMmhoYm01bGJDd2diVzlrYVdacFpYSXBJSHRjYmx4MGJXOWtaV3dnUFNCQmNuSmhlUzVwYzBGeWNtRjVLRzF2WkdWc0tTQS9JRzF2WkdWc0lEb2dXMjF2WkdWc1hUdGNibHh1WEhSdGIyUmxiQzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h0S1NCN1hHNWNkRngwS0d4cGJXbDBaWEp6VzIxZElIeDhJQ2hzYVcxcGRHVnljMXR0WFNBOUlGdGRLU2xiWTJoaGJtNWxiRjBnUFNCdGIyUnBabWxsY2p0Y2JseDBmU2s3WEc1Y2JseDBiVzlrWld3Z1BTQnRiMlJsYkZzd1hUdGNibHh1WEhSeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0haaGJDa2dlMXh1WEhSY2RIWmhjaUJ5WlhOMWJIUTdYRzVjYmx4MFhIUnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ2tnZTF4dVhIUmNkRngwYVdZZ0tHMXZaR2xtYVdWeUtTQjdYRzVjZEZ4MFhIUmNkSFpoYkNBOUlHMXZaR2xtYVdWeUtIWmhiQ2s3WEc1Y2RGeDBYSFI5WEc1Y2JseDBYSFJjZEhKbGMzVnNkQ0E5SUhSb2FYTmJiVzlrWld4ZEtDazdYRzVjZEZ4MFhIUnlaWE4xYkhRdVkyOXNiM0piWTJoaGJtNWxiRjBnUFNCMllXdzdYRzVjZEZ4MFhIUnlaWFIxY200Z2NtVnpkV3gwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsYzNWc2RDQTlJSFJvYVhOYmJXOWtaV3hkS0NrdVkyOXNiM0piWTJoaGJtNWxiRjA3WEc1Y2RGeDBhV1lnS0cxdlpHbG1hV1Z5S1NCN1hHNWNkRngwWEhSeVpYTjFiSFFnUFNCdGIyUnBabWxsY2loeVpYTjFiSFFwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQnlaWE4xYkhRN1hHNWNkSDA3WEc1OVhHNWNibVoxYm1OMGFXOXVJRzFoZUdadUtHMWhlQ2tnZTF4dVhIUnlaWFIxY200Z1puVnVZM1JwYjI0Z0tIWXBJSHRjYmx4MFhIUnlaWFIxY200Z1RXRjBhQzV0WVhnb01Dd2dUV0YwYUM1dGFXNG9iV0Y0TENCMktTazdYRzVjZEgwN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdGemMyVnlkRUZ5Y21GNUtIWmhiQ2tnZTF4dVhIUnlaWFIxY200Z1FYSnlZWGt1YVhOQmNuSmhlU2gyWVd3cElEOGdkbUZzSURvZ1czWmhiRjA3WEc1OVhHNWNibVoxYm1OMGFXOXVJSHBsY205QmNuSmhlU2hoY25Jc0lHeGxibWQwYUNrZ2UxeHVYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUd4bGJtZDBhRHNnYVNzcktTQjdYRzVjZEZ4MGFXWWdLSFI1Y0dWdlppQmhjbkpiYVYwZ0lUMDlJQ2R1ZFcxaVpYSW5LU0I3WEc1Y2RGeDBYSFJoY25KYmFWMGdQU0F3TzF4dVhIUmNkSDFjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJoY25JN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnUTI5c2IzSTdYRzRpTENKdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1SUdselFYSnlZWGxwYzJnb2IySnFLU0I3WEc1Y2RHbG1JQ2doYjJKcUlIeDhJSFI1Y0dWdlppQnZZbW9nUFQwOUlDZHpkSEpwYm1jbktTQjdYRzVjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJRzlpYWlCcGJuTjBZVzVqWlc5bUlFRnljbUY1SUh4OElFRnljbUY1TG1selFYSnlZWGtvYjJKcUtTQjhmRnh1WEhSY2RDaHZZbW91YkdWdVozUm9JRDQ5SURBZ0ppWWdLRzlpYWk1emNHeHBZMlVnYVc1emRHRnVZMlZ2WmlCR2RXNWpkR2x2YmlCOGZGeHVYSFJjZEZ4MEtFOWlhbVZqZEM1blpYUlBkMjVRY205d1pYSjBlVVJsYzJOeWFYQjBiM0lvYjJKcUxDQW9iMkpxTG14bGJtZDBhQ0F0SURFcEtTQW1KaUJ2WW1vdVkyOXVjM1J5ZFdOMGIzSXVibUZ0WlNBaFBUMGdKMU4wY21sdVp5Y3BLU2s3WEc1OU8xeHVJaXdpSjNWelpTQnpkSEpwWTNRbk8xeHVYRzUyWVhJZ2FYTkJjbkpoZVdsemFDQTlJSEpsY1hWcGNtVW9KMmx6TFdGeWNtRjVhWE5vSnlrN1hHNWNiblpoY2lCamIyNWpZWFFnUFNCQmNuSmhlUzV3Y205MGIzUjVjR1V1WTI5dVkyRjBPMXh1ZG1GeUlITnNhV05sSUQwZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG5Oc2FXTmxPMXh1WEc1MllYSWdjM2RwZW5wc1pTQTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdjM2RwZW5wc1pTaGhjbWR6S1NCN1hHNWNkSFpoY2lCeVpYTjFiSFJ6SUQwZ1cxMDdYRzVjYmx4MFptOXlJQ2gyWVhJZ2FTQTlJREFzSUd4bGJpQTlJR0Z5WjNNdWJHVnVaM1JvT3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmx4MFhIUjJZWElnWVhKbklEMGdZWEpuYzF0cFhUdGNibHh1WEhSY2RHbG1JQ2hwYzBGeWNtRjVhWE5vS0dGeVp5a3BJSHRjYmx4MFhIUmNkQzh2SUdoMGRIQTZMeTlxYzNCbGNtWXVZMjl0TDJwaGRtRnpZM0pwY0hRdFlYSnlZWGt0WTI5dVkyRjBMWFp6TFhCMWMyZ3ZPVGhjYmx4MFhIUmNkSEpsYzNWc2RITWdQU0JqYjI1allYUXVZMkZzYkNoeVpYTjFiSFJ6TENCemJHbGpaUzVqWVd4c0tHRnlaeWtwTzF4dVhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUnlaWE4xYkhSekxuQjFjMmdvWVhKbktUdGNibHgwWEhSOVhHNWNkSDFjYmx4dVhIUnlaWFIxY200Z2NtVnpkV3gwY3p0Y2JuMDdYRzVjYm5OM2FYcDZiR1V1ZDNKaGNDQTlJR1oxYm1OMGFXOXVJQ2htYmlrZ2UxeHVYSFJ5WlhSMWNtNGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkSEpsZEhWeWJpQm1iaWh6ZDJsNmVteGxLR0Z5WjNWdFpXNTBjeWtwTzF4dVhIUjlPMXh1ZlR0Y2JpSXNJbWx0Y0c5eWRDQjdJRVJoZEdGTWFYTjBTWFJsYlN3Z1EyaGhibTVsYkVaMWJtTWdmU0JtY205dElDY3VMaTlrWldacGJtbDBhVzl1Y3lkY2JtbHRjRzl5ZENCTllYSnJaWEp6VEdGNVpYSXNJSHRjYmlBZ1RXRnlhMlZ5YzB4aGVXVnlUM0IwYVc5dWN5eGNiaUFnVFdGeWEyVnljMGhsWVhSTVlYbGxjazl3ZEdsdmJuTXNYRzU5SUdaeWIyMGdKeTR1TDIxaGNtdGxjaTlOWVhKclpYSnpUR0Y1WlhJblhHNWNibWx1ZEdWeVptRmpaU0JFZVc1aGJXbGpTR1ZoZEV4aGVXVnlUM0IwYVc5dWN5QmxlSFJsYm1SeklFMWhjbXRsY25OSVpXRjBUR0Y1WlhKUGNIUnBiMjV6SUh0Y2JpQWdMeW9xSU9hWXIrV1FwdVcrcXVlT3IrYVNyZWFVdmlBcUwxeHVJQ0JzYjI5d09pQmliMjlzWldGdVhHNGdJQzhxS2lEbW1LL2xrS2JvaDZybGlxam1rcTNtbEw0Z0tpOWNiaUFnWVhWMGJ6b2dZbTl2YkdWaGJseHVJQ0F2S2lvZzZaZTA2WnFVNXBlMjZaZTBJQ292WEc0Z0lHbHVkR1Z5ZG1Gc09pQnVkVzFpWlhKY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1JIbHVZVzFwWTBobFlYUk1ZWGxsY2lCN1hHNGdJQzhxS2lEbHZaUGxpWTNta3EzbWxMN2xpTERuckt6bGg2RG1yYVVnS2k5Y2JpQWdjSEpwZG1GMFpTQmpkWEp5Wlc1MFUzUmxjRG9nYm5WdFltVnlYRzVjYmlBZ2NISnBkbUYwWlNCdFlYQTZJRXd1VFdGd1hHNGdJSEJ5YVhaaGRHVWdaSGx1WVcxcFkwUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFZ0ZFhHNGdJSEJ5YVhaaGRHVWdiM0IwYVc5dWN6b2dSSGx1WVcxcFkwaGxZWFJNWVhsbGNrOXdkR2x2Ym5OY2JpQWdjSEpwZG1GMFpTQmphR0Z1Ym1Wc1JuVnVZem9nUTJoaGJtNWxiRVoxYm1OY2JpQWdjSEpwZG1GMFpTQnNZWGxsY2pvZ1RXRnlhMlZ5YzB4aGVXVnlYRzRnSUhCeWFYWmhkR1VnYVhOUVlYVnpaVG9nWW05dmJHVmhibHh1SUNCamIyNXpkSEoxWTNSdmNpaGNiaUFnSUNCdFlYQTZJRXd1VFdGd0xGeHVJQ0FnSUdSNWJtRnRhV05FWVhSaFRHbHpkRG9nUkdGMFlVeHBjM1JKZEdWdFcxMWJYU3hjYmlBZ0lDQnZjSFJwYjI1ek9pQkVlVzVoYldsalNHVmhkRXhoZVdWeVQzQjBhVzl1Y3l4Y2JpQWdJQ0JqYUdGdWJtVnNSblZ1WXpvZ1EyaGhibTVsYkVaMWJtTmNiaUFnS1NCN1hHNGdJQ0FnYVdZZ0tDRkJjbkpoZVM1cGMwRnljbUY1S0dSNWJtRnRhV05FWVhSaFRHbHpkQ2tnZkh3Z1pIbHVZVzFwWTBSaGRHRk1hWE4wTG14bGJtZDBhQ0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtHQmtZWFJoVEdsemRDRGx2NFhwb2J2bW1LL3BuWjducWJybWxiRG51NFJnS1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG0xaGNDQTlJRzFoY0Z4dUlDQWdJSFJvYVhNdVpIbHVZVzFwWTBSaGRHRk1hWE4wSUQwZ1pIbHVZVzFwWTBSaGRHRk1hWE4wWEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ2IzQjBhVzl1YzF4dUlDQWdJSFJvYVhNdVkyaGhibTVsYkVaMWJtTWdQU0JqYUdGdWJtVnNSblZ1WTF4dUlDQWdJSFJvYVhNdVkzVnljbVZ1ZEZOMFpYQWdQU0F3WEc0Z0lDQWdkR2hwY3k1cGMxQmhkWE5sSUQwZ2RISjFaVnh1SUNCOVhHNGdJSEIxWW14cFl5QnlaWE4wWVhKMEtDa2dlMXh1SUNBZ0lIUm9hWE11YVhOUVlYVnpaU0E5SUdaaGJITmxYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBVM1JsY0NBOUlEQmNiaUFnSUNCMGFHbHpMbWR2ZEc5VGRHVndLSFJvYVhNdVkzVnljbVZ1ZEZOMFpYQXBYRzRnSUNBZ2RHaHBjeTV6ZEdGeWRDZ3BYRzRnSUgxY2JpQWdjSFZpYkdsaklITjBZWEowS0NrZ2UxeHVJQ0FnSUhSb2FYTXVhWE5RWVhWelpTQTlJR1poYkhObFhHNGdJQ0FnYVdZZ0tDRjBhR2x6TG05d2RHbHZibk11WVhWMGJ5a2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdlMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVhWE5RWVhWelpTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lDOHFLaURta3EzbWxMN2xyb3ptcjVVZ0tpOWNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtTjFjbkpsYm5SVGRHVndJRDQ5SUhSb2FYTXVaSGx1WVcxcFkwUmhkR0ZNYVhOMExteGxibWQwYUNBdElERXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG05d2RHbHZibk11Ykc5dmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjbVZ6ZEdGeWRDZ3BYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OMWNuSmxiblJUZEdWd0t5dGNiaUFnSUNBZ0lDQWdkR2hwY3k1bmIzUnZVM1JsY0NoMGFHbHpMbU4xY25KbGJuUlRkR1Z3S1Z4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMEtDbGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUxDQjBhR2x6TG05d2RHbHZibk11YVc1MFpYSjJZV3dwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSEJoZFhObEtDa2dlMXh1SUNBZ0lIUm9hWE11YVhOUVlYVnpaU0E5SUhSeWRXVmNiaUFnZlZ4dUlDQndkV0pzYVdNZ2NISmxkaWdwSUh0Y2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5SVGRHVndMUzFjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblJUZEdWd0lEMWNiaUFnSUNBZ0lDaDBhR2x6TG1OMWNuSmxiblJUZEdWd0lDc2dkR2hwY3k1a2VXNWhiV2xqUkdGMFlVeHBjM1F1YkdWdVozUm9LU0FsWEc0Z0lDQWdJQ0IwYUdsekxtUjVibUZ0YVdORVlYUmhUR2x6ZEM1c1pXNW5kR2hjYmlBZ0lDQjBhR2x6TG1kdmRHOVRkR1Z3S0hSb2FYTXVZM1Z5Y21WdWRGTjBaWEFwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJRzVsZUhRb0tTQjdYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBVM1JsY0NzclhHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MFUzUmxjQ0E5SUhSb2FYTXVZM1Z5Y21WdWRGTjBaWEFnSlNCMGFHbHpMbVI1Ym1GdGFXTkVZWFJoVEdsemRDNXNaVzVuZEdoY2JpQWdJQ0IwYUdsekxtZHZkRzlUZEdWd0tIUm9hWE11WTNWeWNtVnVkRk4wWlhBcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdkdmRHOVRkR1Z3S0hOMFpYQTZJRzUxYldKbGNpa2dlMXh1SUNBZ0lHbG1JQ2h6ZEdWd0lEd2dNQ0I4ZkNCemRHVndJRDQ5SUhSb2FYTXVaSGx1WVcxcFkwUmhkR0ZNYVhOMExteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCbmIzUnZVM1JsY0Nna2UzTjBaWEI5S1RvZ2MzUmxjQ0JwY3lCdmRYUWdiMllnYVc1a1pYZ2dZQ2xjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTVzWVhsbGNpNXpaWFJFWVhSaEtIUm9hWE11WkhsdVlXMXBZMFJoZEdGTWFYTjBXM04wWlhCZEtWeHVJQ0FnSUhSb2FYTXViR0Y1WlhJdVpISmhkeWdwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJR1J5WVhjb2IzQjBhVzl1Y3o4NklFUjVibUZ0YVdOSVpXRjBUR0Y1WlhKUGNIUnBiMjV6S1NCN1hHNGdJQ0FnZEdocGN5NXBibWwwVDNCMGFXOXVjeWh2Y0hScGIyNXpLVnh1SUNBZ0lIUm9hWE11YVc1cGRFeGhlV1Z5S0NsY2JpQWdJQ0IwYUdsekxteGhlV1Z5TG1SeVlYY29LVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpYRzRnSUgxY2JpQWdjSFZpYkdsaklHWnBkRUp2ZFc1a2N5Z3BJSHRjYmlBZ0lDQjBhR2x6TG14aGVXVnlMbVpwZEVKdmRXNWtjeWdwWEc0Z0lIMWNiaUFnY0hKcGRtRjBaU0JwYm1sMFQzQjBhVzl1Y3lodmNIUnBiMjV6UHpvZ1JIbHVZVzFwWTBobFlYUk1ZWGxsY2s5d2RHbHZibk1wSUh0Y2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0Z4dUlDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNCc2IyOXdPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdZWFYwYnpvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUdsdWRHVnlkbUZzT2lBeE1EQXdMRnh1SUNBZ0lDQWdmU3hjYmlBZ0lDQWdJSFJvYVhNdWIzQjBhVzl1Y3l4Y2JpQWdJQ0FnSUc5d2RHbHZibk5jYmlBZ0lDQXBYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQnBibWwwVEdGNVpYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2JXRnlhMlZ5YzB4aGVXVnlUM0IwYVc5dWN6b2dUV0Z5YTJWeWMweGhlV1Z5VDNCMGFXOXVjeUE5SUh0Y2JpQWdJQ0FnSUhKbGJtUmxjbFI1Y0dVNklDZG9aV0YwSnl4Y2JpQWdJQ0FnSUdobFlYUlBjSFJwYjI1ek9pQjBhR2x6TG05d2RHbHZibk1zWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11YkdGNVpYSWdQU0J1WlhjZ1RXRnlhMlZ5YzB4aGVXVnlLRnh1SUNBZ0lDQWdkR2hwY3k1dFlYQXNYRzRnSUNBZ0lDQjBhR2x6TG1SNWJtRnRhV05FWVhSaFRHbHpkRnN3WFN4Y2JpQWdJQ0FnSUcxaGNtdGxjbk5NWVhsbGNrOXdkR2x2Ym5Nc1hHNGdJQ0FnSUNCMGFHbHpMbU5vWVc1dVpXeEdkVzVqWEc0Z0lDQWdLVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbXhoZVdWeVhHNGdJSDFjYm4xY2JpSXNJbWx0Y0c5eWRDQk5ZWEpyWlhJZ1puSnZiU0FuTGk5dFlYSnJaWEl2VFdGeWEyVnlKMXh1YVcxd2IzSjBJRTFoY210bGNuTk1ZWGxsY2lCbWNtOXRJQ2N1TDIxaGNtdGxjaTlOWVhKclpYSnpUR0Y1WlhJblhHNXBiWEJ2Y25RZ1RXRnlhMlZ5YzBKMVptWmxja3hoZVdWeUlHWnliMjBnSnk0dmJXRnlhMlZ5TDAxaGNtdGxjbk5DZFdabVpYSk1ZWGxsY2lkY2JtbHRjRzl5ZENCUWIyeDViR2x1WlNCbWNtOXRJQ2N1TDNCdmJIbHNhVzVsTDFCdmJIbHNhVzVsSjF4dWFXMXdiM0owSUZCdmJIbHNhVzVsYzB4aGVXVnlJR1p5YjIwZ0p5NHZjRzlzZVd4cGJtVXZVRzlzZVd4cGJtVnpUR0Y1WlhJblhHNXBiWEJ2Y25RZ1VHOXNlV3hwYm1WelFuVm1abVZ5VEdGNVpYSWdabkp2YlNBbkxpOXdiMng1YkdsdVpTOVFiMng1YkdsdVpYTkNkV1ptWlhKTVlYbGxjaWRjYm1sdGNHOXlkQ0JRYjJ4NVoyOXVJR1p5YjIwZ0p5NHZjRzlzZVdkdmJpOVFiMng1WjI5dUoxeHVhVzF3YjNKMElGQnZiSGxuYjI1elRHRjVaWElnWm5KdmJTQW5MaTl3YjJ4NVoyOXVMMUJ2YkhsbmIyNXpUR0Y1WlhJblhHNXBiWEJ2Y25RZ1IzSnBaSE5NWVhsbGNpQm1jbTl0SUNjdUwzQnZiSGxuYjI0dlIzSnBaSE5NWVhsbGNpZGNibWx0Y0c5eWRDQkVlVzVoYldsalNHVmhkRXhoZVdWeUlHWnliMjBnSnk0dlpIbHVZVzFwWTBobFlYUk1ZWGxsY2k5RWVXNWhiV2xqU0dWaGRFeGhlV1Z5SjF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJRTFoY210bGNpeGNiaUFnVFdGeWEyVnljMHhoZVdWeUxGeHVJQ0JOWVhKclpYSnpRblZtWm1WeVRHRjVaWElzWEc0Z0lGQnZiSGxzYVc1bExGeHVJQ0JRYjJ4NWJHbHVaWE5NWVhsbGNpeGNiaUFnVUc5c2VXeHBibVZ6UW5WbVptVnlUR0Y1WlhJc1hHNGdJRkJ2YkhsbmIyNHNYRzRnSUZCdmJIbG5iMjV6VEdGNVpYSXNYRzRnSUVkeWFXUnpUR0Y1WlhJc1hHNGdJRVI1Ym1GdGFXTklaV0YwVEdGNVpYSXNYRzU5WEc1bGVIQnZjblFnZTF4dUlDQk5ZWEpyWlhJc1hHNGdJRTFoY210bGNuTk1ZWGxsY2l4Y2JpQWdUV0Z5YTJWeWMwSjFabVpsY2t4aGVXVnlMRnh1SUNCUWIyeDViR2x1WlN4Y2JpQWdVRzlzZVd4cGJtVnpUR0Y1WlhJc1hHNGdJRkJ2Ykhsc2FXNWxjMEoxWm1abGNreGhlV1Z5TEZ4dUlDQlFiMng1WjI5dUxGeHVJQ0JRYjJ4NVoyOXVjMHhoZVdWeUxGeHVJQ0JIY21sa2MweGhlV1Z5TEZ4dUlDQkVlVzVoYldsalNHVmhkRXhoZVdWeUxGeHVmVnh1SWl3aWFXMXdiM0owSUhzZ1JHRjBZVXhwYzNSSmRHVnRJSDBnWm5KdmJTQW5MaTR2WkdWbWFXNXBkR2x2Ym5NblhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUUxaGNtdGxjaUJsZUhSbGJtUnpJRXd1VFdGeWEyVnlJSHRjYmlBZ0x5OGdkSE5zYVc1ME9tUnBjMkZpYkdVdGJtVjRkQzFzYVc1bE9uWmhjbWxoWW14bExXNWhiV1ZjYmlBZ2NISnBkbUYwWlNCZlgyUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJWeHVJQ0JqYjI1emRISjFZM1J2Y2loc1lYUnNibWM2SUV3dVRHRjBURzVuUlhod2NtVnpjMmx2Yml3Z2IzQjBhVzl1Y3o4NklFd3VUV0Z5YTJWeVQzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlLR3hoZEd4dVp5d2diM0IwYVc5dWN5bGNiaUFnZlZ4dUlDQndkV0pzYVdNZ2MyVjBSR0YwWVNoa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwcElIdGNiaUFnSUNCMGFHbHpMbDlmWkdGMFlTQTlJR1JoZEdGY2JpQWdmVnh1SUNCd2RXSnNhV01nWjJWMFJHRjBZU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZlgyUmhkR0ZjYmlBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUhzZ1JHRjBZVXhwYzNSSmRHVnRMQ0JEYUdGdWJtVnNSblZ1WXlCOUlHWnliMjBnSnk0dUwyUmxabWx1YVhScGIyNXpKMXh1YVcxd2IzSjBJRTFoY210bGNuTk1ZWGxsY2l3Z2V5Qk5ZWEpyWlhKelRHRjVaWEpQY0hScGIyNXpJSDBnWm5KdmJTQW5MaTlOWVhKclpYSnpUR0Y1WlhJblhHNXBiblJsY21aaFkyVWdUV0Z5YTJWeWMwSjFabVpsY2t4aGVXVnlUM0IwYVc5dWN5QmxlSFJsYm1SeklFMWhjbXRsY25OTVlYbGxjazl3ZEdsdmJuTWdlMXh1SUNCaWRXWm1aWEpVYjI5c2RHbHdRWFIwY2pvZ2MzUnlhVzVuWEc0Z0lHSjFabVpsY2s5d2RHbHZibk02SUV3dVEybHlZMnhsVFdGeWEyVnlUM0IwYVc5dWMxeHVmVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1RXRnlhMlZ5YzBKMVptWmxja3hoZVdWeUlHVjRkR1Z1WkhNZ1RXRnlhMlZ5YzB4aGVXVnlJSHRjYmlBZ2NIVmliR2xqSUc5d2RHbHZibk02SUUxaGNtdGxjbk5DZFdabVpYSk1ZWGxsY2s5d2RHbHZibk5jYmlBZ2NISnBkbUYwWlNCaWRXWm1aWEpNWVhsbGNqb2dUQzVNWVhsbGNrZHliM1Z3WEc0Z0lHTnZibk4wY25WamRHOXlLRnh1SUNBZ0lHMWhjRG9nVEM1TllYQXNYRzRnSUNBZ1pHRjBZVXhwYzNRNklFUmhkR0ZNYVhOMFNYUmxiVnRkTEZ4dUlDQWdJRzl3ZEdsdmJuTTZJRTFoY210bGNuTkNkV1ptWlhKTVlYbGxjazl3ZEdsdmJuTXNYRzRnSUNBZ1kyaGhibTVsYkVaMWJtTTZJRU5vWVc1dVpXeEdkVzVqWEc0Z0lDa2dlMXh1SUNBZ0lITjFjR1Z5S0cxaGNDd2daR0YwWVV4cGMzUXNJRzl3ZEdsdmJuTXNJR05vWVc1dVpXeEdkVzVqS1Z4dUlDQWdJSFJvYVhNdWRIbHdaU0E5SUNkdFlYSnJaWEpDZFdabVpYSW5YRzRnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRUoxWm1abGNrOXdkR2x2Ym5NNklFd3VRMmx5WTJ4bFRXRnlhMlZ5VDNCMGFXOXVjeUE5SUh0Y2JpQWdJQ0FnSUhKaFpHbDFjem9nTVRBd01DeGNiaUFnSUNBZ0lITjBjbTlyWlRvZ2RISjFaU3hjYmlBZ0lDQWdJSGRsYVdkb2REb2dNU3hjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaGNiaUFnSUNBZ0lIUm9hWE11YjNCMGFXOXVjeXhjYmlBZ0lDQWdJSHNnWW5WbVptVnlUM0IwYVc5dWN6b2daR1ZtWVhWc2RFSjFabVpsY2s5d2RHbHZibk1nZlN4Y2JpQWdJQ0FnSUc5d2RHbHZibk5jYmlBZ0lDQXBYRzRnSUgxY2JseHVJQ0J3ZFdKc2FXTWdaSEpoZHlodmNIUnBiMjV6UHpvZ1RXRnlhMlZ5YzBKMVptWmxja3hoZVdWeVQzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5QTlJRTlpYW1WamRDNWhjM05wWjI0b2RHaHBjeTV2Y0hScGIyNXpMQ0J2Y0hScGIyNXpLVnh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeTVpZFdabVpYSlBjSFJwYjI1ekxtTnZiRzl5SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1RGIyeHZjbHh1SUNBZ0lIUm9hWE11YVc1cGRFMWhjbXRsY25Nb0tWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxaSEpoZHlncFhHNGdJSDFjYmx4dUlDQndkV0pzYVdNZ2NtVmtjbUYzS0NrZ2UxeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1MmFYTnBZbXhsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFJvYVhNdWJXRnlhMlZ5VEdGNVpYSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXRndMbkpsYlc5MlpVeGhlV1Z5S0hSb2FYTXViV0Z5YTJWeVRHRjVaWElwWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxtSjFabVpsY2t4aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbUoxWm1abGNreGhlV1Z5S1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG0xaGNtdGxja3hoZVdWeUlEMGdkR2hwY3k1amIyNW1hV2ROWVhKclpYSk1ZWGxsY2lncFhHNGdJQ0FnZEdocGN5NWlkV1ptWlhKTVlYbGxjaUE5SUhSb2FYTXVZMjl1Wm1sblFuVm1abVZ5VEdGNVpYSW9LVnh1WEc0Z0lDQWdkR2hwY3k1c1lYbGxjaUE5SUV3dWJHRjVaWEpIY205MWNDZ3BYRzRnSUNBZ2RHaHBjeTVzWVhsbGNpNWhaR1JNWVhsbGNpaDBhR2x6TG0xaGNtdGxja3hoZVdWeUtWeHVJQ0FnSUhSb2FYTXViR0Y1WlhJdVlXUmtUR0Y1WlhJb2RHaHBjeTVpZFdabVpYSk1ZWGxsY2lsY2JseHVJQ0FnSUhSb2FYTXViV0Z3TG1Ga1pFeGhlV1Z5S0hSb2FYTXViR0Y1WlhJcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhOY2JpQWdmVnh1WEc0Z0lIQjFZbXhwWXlCblpYUkNiM1Z1WkhNb0tUb2dUQzVNWVhSTWJtZENiM1Z1WkhORmVIQnlaWE56YVc5dUlIdGNiaUFnSUNCcFppQW9kR2hwY3k1dFlYSnJaWEp6TG14bGJtZDBhQ0E4UFNBd0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV0WVhBdVoyVjBRbTkxYm1SektDbGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWJXRnlhMlZ5Y3k1eVpXUjFZMlVvS0hCeVpYWXNJR04xY25JcElEMCtJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQndjbVYyTG1WNGRHVnVaQ2hjYmlBZ0lDQWdJQ0FnWTNWeWNpNW5aWFJNWVhSTWJtY29LUzUwYjBKdmRXNWtjeWgwYUdsekxtOXdkR2x2Ym5NdVluVm1abVZ5VDNCMGFXOXVjeTV5WVdScGRYTXBYRzRnSUNBZ0lDQXBYRzRnSUNBZ2ZTd2dkR2hwY3k1dFlYSnJaWEp6V3pCZExtZGxkRXhoZEV4dVp5Z3BMblJ2UW05MWJtUnpLSFJvYVhNdWIzQjBhVzl1Y3k1aWRXWm1aWEpQY0hScGIyNXpMbkpoWkdsMWN5a3BYRzRnSUgxY2JseHVJQ0J3Y21sMllYUmxJR052Ym1acFowSjFabVpsY2t4aGVXVnlLQ2tnZTF4dUlDQWdJR052Ym5OMElHZHliM1Z3VEdGNVpYSWdQU0JNTG14aGVXVnlSM0p2ZFhBb0tWeHVJQ0FnSUhSb2FYTXViV0Z5YTJWeWN5NW1iM0pGWVdOb0tDaHRZWEpyWlhJcElEMCtJSHRjYmlBZ0lDQWdJR052Ym5OMElHTnBjbU5zWlV4aGVXVnlJRDBnVEM1amFYSmpiR1VvWEc0Z0lDQWdJQ0FnSUcxaGNtdGxjaTVuWlhSTVlYUk1ibWNvS1N4Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2Y0hScGIyNXpMbUoxWm1abGNrOXdkR2x2Ym5OY2JpQWdJQ0FnSUNsY2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11WW5WbVptVnlWRzl2YkhScGNFRjBkSElwSUh0Y2JpQWdJQ0FnSUNBZ1kybHlZMnhsVEdGNVpYSXVZbWx1WkZSdmIyeDBhWEFvWEc0Z0lDQWdJQ0FnSUNBZ0p5Y2dLeUJ0WVhKclpYSXVaMlYwUkdGMFlTZ3BXM1JvYVhNdWIzQjBhVzl1Y3k1aWRXWm1aWEpVYjI5c2RHbHdRWFIwY2wxY2JpQWdJQ0FnSUNBZ0tWeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2MzZHBkR05vSUNoMGVYQmxiMllnZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUdOaGMyVWdKM04wY21sdVp5YzZYRzRnSUNBZ0lDQWdJQ0FnSUNCamFYSmpiR1ZNWVhsbGNpNWlhVzVrVkc5dmJIUnBjQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdKeWNnS3lCdFlYSnJaWEl1WjJWMFJHRjBZU2dwVzNSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISmRYRzRnSUNBZ0lDQWdJQ0FnSUNBcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ0lDQWdJR05oYzJVZ0oyOWlhbVZqZENjNlhHNGdJQ0FnSUNBZ0lDQWdJQ0JqYVhKamJHVk1ZWGxsY2k1aWFXNWtWRzl2YkhScGNDaGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0p5Y2dLeUJ0WVhKclpYSXVaMlYwUkdGMFlTZ3BXM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJdWRtRnNkV1ZkWEc0Z0lDQWdJQ0FnSUNBZ0lDQXBYRzRnSUNBZ0lDQWdJQ0FnWkdWbVlYVnNkRHBjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdkeWIzVndUR0Y1WlhJdVlXUmtUR0Y1WlhJb1kybHlZMnhsVEdGNVpYSXBYRzRnSUNBZ2ZTbGNiaUFnSUNCeVpYUjFjbTRnWjNKdmRYQk1ZWGxsY2x4dUlDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ2V5QnNhV2RvZEdWdUxDQnZjSFJwYjI1elRXVnlaMlVnZlNCbWNtOXRJQ2N1TGk5MWRHbHNjeTlwYm1SbGVDZGNibWx0Y0c5eWRDQjdJRVJoZEdGTWFYTjBTWFJsYlN3Z1EyaGhibTVsYkVaMWJtTWdmU0JtY205dElDY3VMaTlrWldacGJtbDBhVzl1Y3lkY2JtbHRjRzl5ZENCTllYSnJaWElnWm5KdmJTQW5MaTlOWVhKclpYSW5YRzVjYmk4cUtpRG11TExtbjVQbW9MZmx2SThnNXBXajU0SzVmT2VEcmVXS20rV2J2aUFxTDF4dWRIbHdaU0JOWVhKclpYSnpUR0Y1WlhKU1pXNWtaWEpVZVhCbElEMGdKM0J2YVc1MEp5QjhJQ2RvWldGMEp5QjhJQ2RqYkhWemRHVnlKeUI4SUNkaWRXSmliR1VuWEc1Y2JpOHFLaURtdUxMbW41UHBvcHpvaWJMbW9MZmx2SThnNVkyVjZJbXlmT1dJaHVhdXRYemxpSWJuc2JzZ0tpOWNiblI1Y0dVZ1RXRnlhMlZ5YzB4aGVXVnlVbVZ1WkdWeVVHOXBiblJEYjJ4dmNsUjVjR1VnUFNBbmMybHVaMnhsSnlCOElDZHpaV2R0Wlc1MFpXUW5JSHdnSjJOc1lYTnphV1pwWldRblhHNWNiaThxS2lEbWxhUG5ncm5sbTc3bW9JZm5zYnZsbm9zZ2FXTnZibVp2Ym5SOGMzWm5mR2x0WVdkbElDb3ZYRzUwZVhCbElFMWhjbXRsY25OTVlYbGxja2xqYjI1VWVYQmxJRDBnSjJadmJuUmZZMnhoYzNNbklId2dKM1Z1YVdOdlpHVW5JSHdnSjNONWJXSnZiQ2NnZkNBbmFXMWhaMlVuWEc1Y2JuUjVjR1VnVFdGeWEyVnljMHhoZVdWeVVtVnVaR1Z5UTJ4MWMzUmxja052Ykc5eVZIbHdaU0E5SUNkemFXNW5iR1VuSUh3Z0ozTnRZWEowSjF4dVhHNXBiblJsY21aaFkyVWdTV052YmxKbGJtUmxja1oxYm1OUGNIUnBiMjRnZTF4dUlDQnBZMjl1VTJsNlpUb2dXMjUxYldKbGNpd2diblZ0WW1WeVhWeHVJQ0JwWTI5dVEyOXNiM0k2SUhOMGNtbHVaMXh1ZlZ4dWRIbHdaU0JKWTI5dVVtVnVaR1Z5Um5WdVl5QTlJQ2hjYmlBZ1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdExGeHVJQ0J3WVhKaGJYTTZJRWxqYjI1U1pXNWtaWEpHZFc1alQzQjBhVzl1WEc0cElEMCtJSE4wY21sdVoxeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRTFoY210bGNuTk1ZWGxsY2s5d2RHbHZibk1nZTF4dUlDQnlaVzVrWlhKVWVYQmxPaUJOWVhKclpYSnpUR0Y1WlhKU1pXNWtaWEpVZVhCbFhHNGdJSEpsYm1SbGNsQnZhVzUwUTI5c2IzSlVlWEJsUHpvZ1RXRnlhMlZ5YzB4aGVXVnlVbVZ1WkdWeVVHOXBiblJEYjJ4dmNsUjVjR1ZjYmlBZ2FXTnZibFI1Y0dVL09pQk5ZWEpyWlhKelRHRjVaWEpKWTI5dVZIbHdaVnh1WEc0Z0lHbGpiMjVKYldGblpWVnliRDg2SUhOMGNtbHVaMXh1SUNCcFkyOXVVMmw2WlQ4NklGdHVkVzFpWlhJc0lHNTFiV0psY2wxY2JpQWdhV052YmtOc1lYTnpQem9nYzNSeWFXNW5YRzRnSUdsamIyNVZibWxqYjJSbFB6b2djM1J5YVc1blhHNGdJR2xqYjI1VGVXMWliMncvT2lCemRISnBibWRjYmlBZ2FXTnZia052Ykc5eVB6b2djM1J5YVc1blhHNGdJR2xqYjI1QmJtTm9iM0kvT2lCYmJuVnRZbVZ5TENCdWRXMWlaWEpkWEc0Z0lHbGpiMjVTWlc1a1pYSmxjajg2SUVsamIyNVNaVzVrWlhKR2RXNWpYRzVjYmlBZ1luVmlZbXhsUTI5c2IzSkJkSFJ5UHpvZ2MzUnlhVzVuWEc0Z0lHSjFZbUpzWlZOcGVtVkJkSFJ5UHpvZ2MzUnlhVzVuWEc0Z0lHSjFZbUpzWlZOMGNtOXJaVmRwWkhSb1B6b2diblZ0WW1WeVhHNGdJR0oxWW1Kc1pWTjBjbTlyWlVOdmJHOXlQem9nYzNSeWFXNW5YRzRnSUdKMVltSnNaVU52Ykc5eWN6ODZJSE4wY21sdVoxdGRYRzRnSUdKMVltSnNaVk5wZW1WelB6b2diblZ0WW1WeVcxMWNiaUFnWW5WaVlteGxVM1J5YjJ0bFQzQmhZMmwwZVQ4NklHNTFiV0psY2x4dUlDQmlkV0ppYkdWR2FXeHNUM0JoWTJsMGVUODZJRzUxYldKbGNseHVYRzRnSUM4dklPYVlyK1dRcHVpQm11V1FpTys4ak9TOG1PV0ZpT2U2cCttcm1PUzZqaUJ5Wlc1a1pYSlVlWEJsSUQwOUlIQnZhVzUwWEc0Z0lHbHpRMngxYzNSbGNqODZJR0p2YjJ4bFlXNWNiaUFnY21WdVpHVnlRMngxYzNSbGNrTnZiRzl5Vkhsd1pUODZJRTFoY210bGNuTk1ZWGxsY2xKbGJtUmxja05zZFhOMFpYSkRiMnh2Y2xSNWNHVmNibHh1SUNBdktpb2c1cGl2NVpDbTViR1Y1NlM2SUhCdmNIVndJQ292WEc0Z0lIQnZjSFZ3UHpvZ1ltOXZiR1ZoYmx4dUlDQXZLaW9nNXBpdjVaQ201YkdWNTZTNklIUnZiMngwYVhBZ0tpOWNiaUFnZEc5dmJIUnBjRDg2SUdKdmIyeGxZVzVjYmlBZ0x5b3FJSEJ2Y0hWd0lPV3hsZWVrdXVXdGwrYXV0U0FxTDF4dUlDQndiM0IxY0VGMGRISS9PaUJ6ZEhKcGJtY2dmQ0I3SUd4aFltVnNPaUJ6ZEhKcGJtYzdJSFpoYkhWbE9pQmhibmtnZlZ4dUlDQXZLaW9nZEc5dmJIUnBjQ0Rsc1pYbnBMcmxyWmZtcnJVZ0tpOWNiaUFnZEc5dmJIUnBjRUYwZEhJL09pQnpkSEpwYm1kY2JseHVJQ0J2Y0dGamFYUjVQem9nYm5WdFltVnlYRzVjYmlBZ0x5b3FJT1dJaHVhdXRlYTRzdWFmaytlN24raXVvZVd0bCthdXRTQXFMMXh1SUNCelpXZHRaVzUwWldSQmRIUnlQem9nYzNSeWFXNW5YRzRnSUhObFoyMWxiblJsWkVOdmJHOXljejg2SUhOMGNtbHVaMXRkWEc1Y2JpQWdMeW9xSU9XSWh1ZXh1K1dlaSthNHN1YWZrK2U3bitpdW9lV3RsK2F1dFNBcUwxeHVJQ0JqYkdGemMybG1hV1ZrUVhSMGNqODZJSE4wY21sdVoxeHVJQ0JqYkdGemMybG1hV1ZrUTI5c2IzSnpQem9nYzNSeWFXNW5XMTFjYmx4dUlDQm9aV0YwVDNCMGFXOXVjejg2SUUxaGNtdGxjbk5JWldGMFRHRjVaWEpQY0hScGIyNXpYRzRnSUdOc2RYTjBaWEpQY0hScGIyNXpQem9nVEM1TllYSnJaWEp6UTJ4MWMzUmxjazl3ZEdsdmJuTmNibjFjYmx4dUx5b3FJT2k5ck9XTWx1UzR1dWVEcmVXS20rV2J2dWVhaENCdmNIUnBiMjV6SUNvdlhHNWxlSEJ2Y25RZ2FXNTBaWEptWVdObElFMWhjbXRsY25OSVpXRjBUR0Y1WlhKUGNIUnBiMjV6SUdWNGRHVnVaSE1nVEM1SVpXRjBUR0Y1WlhKUGNIUnBiMjV6SUh0Y2JpQWdaR2x0Wlc1emFXOXVRWFIwY2o4NklITjBjbWx1WjF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCTllYSnJaWEp6VEdGNVpYSWdlMXh1SUNCd2RXSnNhV01nYldGd09pQk1MazFoY0Z4dUlDQndkV0pzYVdNZ1pHRjBZVXhwYzNRNklFUmhkR0ZNYVhOMFNYUmxiVnRkWEc0Z0lIQjFZbXhwWXlCdmNIUnBiMjV6T2lCTllYSnJaWEp6VEdGNVpYSlBjSFJwYjI1elhHNGdJSEIxWW14cFl5QmphR0Z1Ym1Wc1JuVnVZem9nUTJoaGJtNWxiRVoxYm1OY2JseHVJQ0J3ZFdKc2FXTWdkSGx3WlRvZ2MzUnlhVzVuWEc1Y2JpQWdjSEp2ZEdWamRHVmtJRzFoY210bGNuTTZJRTFoY210bGNsdGRYRzVjYmlBZ2NISnZkR1ZqZEdWa0lHWnZZM1Z6WldSTllYSnJaWEk2SUUxaGNtdGxjbHh1SUNCd2NtOTBaV04wWldRZ2FHOTJaWEpsWkUxaGNtdGxjam9nVFdGeWEyVnlYRzRnSUM4cUtpRHBuSURvcG9IbHNaWG5wTHJubW9UbWxMN2xwS2ZubW9UbG03N21vSWNnS2k5Y2JpQWdjSEp2ZEdWamRHVmtJR1p2WTNWelpXUkVhWE53YkdGNVRXRnlhMlZ5T2lCTllYSnJaWEpjYmlBZ2NISnZkR1ZqZEdWa0lHMWhjbXRsY2t4aGVXVnlPaUJNTGtOaGJuWmhjMGxqYjI1TVlYbGxjbHh1WEc0Z0lIQnliM1JsWTNSbFpDQjJhWE5wWW14bE9pQmliMjlzWldGdVhHNGdJSEJ5YjNSbFkzUmxaQ0JzWVhsbGNqcGNiaUFnSUNCOElFd3VRMkZ1ZG1GelNXTnZia3hoZVdWeVhHNGdJQ0FnZkNCTUxraGxZWFJNWVhsbGNseHVJQ0FnSUh3Z1RDNU5ZWEpyWlhKelEyeDFjM1JsY2x4dUlDQWdJSHdnVEM1TVlYbGxja2R5YjNWd1hHNGdJSEJ5YVhaaGRHVWdhR1ZoZEV4aGVXVnlPaUJNTGtobFlYUk1ZWGxsY2x4dUlDQndjbWwyWVhSbElHTnNkWE4wWlhKTVlYbGxjam9nVEM1TllYSnJaWEp6UTJ4MWMzUmxjbHh1SUNCd2NtbDJZWFJsSUdKMVltSnNaVXhoZVdWeU9pQk1Ma3hoZVdWeVIzSnZkWEJjYmx4dUlDQndjbWwyWVhSbElITmxaMjFsYm5SbFpFMXBiam9nYm5WdFltVnlYRzRnSUhCeWFYWmhkR1VnYzJWbmJXVnVkR1ZrVTNSbGNEb2diblZ0WW1WeVhHNGdJSEJ5YVhaaGRHVWdZblZpWW14bFpGTnBlbVZOYVc0NklHNTFiV0psY2x4dUlDQndjbWwyWVhSbElHSjFZbUpzWldSVGFYcGxVM1JsY0RvZ2JuVnRZbVZ5WEc0Z0lIQnlhWFpoZEdVZ1luVmlZbXhsWkVOdmJHOXlUV0Z3T2lCN0lGdHdjbTl3T2lCemRISnBibWRkT2lCemRISnBibWNnZlZ4dUlDQndjbWwyWVhSbElHSjFZbUpzWldSRGIyeHZjbEpsWm5NNklFRnljbUY1UEh0Y2JpQWdJQ0JoZEhSeU9pQnpkSEpwYm1kY2JpQWdJQ0JqYjJ4dmNqb2djM1J5YVc1blhHNGdJQ0FnYm5WdGN6b2diblZ0WW1WeVhHNGdJSDArWEc0Z0lDOHFLaURvcnJEbHZaWG1uNURrdUtvZ2NISnZjQ0RscjdubHVwVG5tb1RtdUxMbW41UHBvcHpvaWJJZ0tpOWNiaUFnY0hKcGRtRjBaU0JqYkdGemMybG1hV1ZrUTI5c2IzSk5ZWEE2SUhzZ1czQnliM0E2SUhOMGNtbHVaMTA2SUhOMGNtbHVaeUI5WEc0Z0lDOHFLaURsaUlibnNidm11TExtbjVQcG9wem9pYkxsajRMbmhhY281bytRNUw2YjU3dVo2TENENTVTbzZJQ0Y1TDIvNTVTb0tTQXFMMXh1SUNCd2NtbDJZWFJsSUdOc1lYTnphV1pwWldSRGIyeHZjbEpsWm5NNklFRnljbUY1UEh0Y2JpQWdJQ0JoZEhSeU9pQnpkSEpwYm1kY2JpQWdJQ0JqYjJ4dmNqb2djM1J5YVc1blhHNGdJQ0FnYm5WdGN6b2diblZ0WW1WeVhHNGdJSDArWEc0Z0lIQnlhWFpoZEdVZ1pHVm1ZWFZzZEU5d2RHbHZibk02SUUxaGNtdGxjbk5NWVhsbGNrOXdkR2x2Ym5OY2JpQWdZMjl1YzNSeWRXTjBiM0lvWEc0Z0lDQWdiV0Z3T2lCTUxrMWhjQ3hjYmlBZ0lDQmtZWFJoVEdsemREb2dSR0YwWVV4cGMzUkpkR1Z0VzEwc1hHNGdJQ0FnYjNCMGFXOXVjem9nVFdGeWEyVnljMHhoZVdWeVQzQjBhVzl1Y3l4Y2JpQWdJQ0JqYUdGdWJtVnNSblZ1WXpvZ1EyaGhibTVsYkVaMWJtTmNiaUFnS1NCN1hHNGdJQ0FnYVdZZ0tDRkJjbkpoZVM1cGMwRnljbUY1S0dSaGRHRk1hWE4wS1NCOGZDQmtZWFJoVEdsemRDNXNaVzVuZEdnZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhnWkdGMFlVeHBjM1FnNWIrRjZhRzc1cGl2NloyZTU2bTY1cFd3NTd1RVlDbGNiaUFnSUNCOVhHNGdJQ0FnWTI5dWMzUWdSRVZHUVZWTVZGOURUMHhQVWlBOUlDY2pNek00T0VaR0oxeHVJQ0FnSUhSb2FYTXVaR1ZtWVhWc2RFOXdkR2x2Ym5NZ1BTQjdYRzRnSUNBZ0lDQnlaVzVrWlhKVWVYQmxPaUFuY0c5cGJuUW5MRnh1SUNBZ0lDQWdjbVZ1WkdWeVVHOXBiblJEYjJ4dmNsUjVjR1U2SUNkemFXNW5iR1VuTEZ4dUlDQWdJQ0FnYVdOdmJsUjVjR1U2SUNkMWJtbGpiMlJsSnl4Y2JpQWdJQ0FnSUdsamIyNVRhWHBsT2lCYk1qQXNJREl3WFN4Y2JpQWdJQ0FnSUdsamIyNURiR0Z6Y3pvZ0oybGpiMjVtYjI1MEp5eGNiaUFnSUNBZ0lHbGpiMjVEYjJ4dmNqb2dSRVZHUVZWTVZGOURUMHhQVWl4Y2JpQWdJQ0FnSUdsamIyNUJibU5vYjNJNklGc3hNQ3dnTWpCZExGeHVJQ0FnSUNBZ2NHOXdkWEE2SUhSeWRXVXNYRzRnSUNBZ0lDQjBiMjlzZEdsd09pQjBjblZsTEZ4dUlDQWdJQ0FnY0c5d2RYQkJkSFJ5T2lCN0lHeGhZbVZzT2lBbjVaQ041NmV3Snl3Z2RtRnNkV1U2SUNkdVlXMWxKeUI5TEZ4dUlDQWdJQ0FnZEc5dmJIUnBjRUYwZEhJNklDZHVZVzFsSnl4Y2JpQWdJQ0FnSUhObFoyMWxiblJsWkVOdmJHOXljem9nVzBSRlJrRlZURlJmUTA5TVQxSmRMRnh1SUNBZ0lDQWdZMnhoYzNOcFptbGxaRU52Ykc5eWN6b2dXMFJGUmtGVlRGUmZRMDlNVDFKZExGeHVJQ0FnSUNBZ2FYTkRiSFZ6ZEdWeU9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUhKbGJtUmxja05zZFhOMFpYSkRiMnh2Y2xSNWNHVTZJQ2R6YldGeWRDY3NYRzRnSUNBZ0lDQmlkV0ppYkdWVGRISnZhMlZYYVdSMGFEb2dNU3hjYmlBZ0lDQWdJR0oxWW1Kc1pVTnZiRzl5Y3pvZ1cwUkZSa0ZWVEZSZlEwOU1UMUpkTEZ4dUlDQWdJQ0FnWW5WaVlteGxVM1J5YjJ0bFQzQmhZMmwwZVRvZ01DNHlMRnh1SUNBZ0lDQWdZblZpWW14bFJtbHNiRTl3WVdOcGRIazZJREF1TlN4Y2JpQWdJQ0FnSUdKMVltSnNaVk5wZW1Wek9pQmJNVEJkTEZ4dUlDQWdJQ0FnYUdWaGRFOXdkR2x2Ym5NNklIdGNiaUFnSUNBZ0lDQWdiV0Y0T2lBeExGeHVJQ0FnSUNBZ0lDQnRhVzVQY0dGamFYUjVPaUF3TGpVc1hHNGdJQ0FnSUNCOUxGeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxuUjVjR1VnUFNBbmJXRnlhMlZ5SjF4dUlDQWdJSFJvYVhNdWJXRndJRDBnYldGd1hHNGdJQ0FnZEdocGN5NWtZWFJoVEdsemRDQTlJR1JoZEdGTWFYTjBYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpJRDBnYjNCMGFXOXVjMXh1SUNBZ0lIUm9hWE11WTJoaGJtNWxiRVoxYm1NZ1BTQmphR0Z1Ym1Wc1JuVnVZMXh1WEc0Z0lDQWdkR2hwY3k1MmFYTnBZbXhsSUQwZ2RISjFaVnh1SUNBZ0lIUm9hWE11YkdGNVpYSWdQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1RXRnlhMlZ5SUQwZ2JuVnNiRnh1SUNBZ0lIUm9hWE11YUc5MlpYSmxaRTFoY210bGNpQTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VFdGeWEyVnlJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXViV0Z5YTJWeWN5QTlJRnRkWEc0Z0lDQWdkR2hwY3k1dFlYSnJaWEpNWVhsbGNpQTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxtaGxZWFJNWVhsbGNpQTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxtTnNkWE4wWlhKTVlYbGxjaUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbUoxWW1Kc1pVeGhlV1Z5SUQwZ2JuVnNiRnh1WEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSTmFXNGdQU0JKYm1acGJtbDBlVnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVTNSbGNDQTlJREZjYmlBZ0lDQjBhR2x6TG1KMVltSnNaV1JUYVhwbFRXbHVJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQjBhR2x6TG1KMVltSnNaV1JUYVhwbFUzUmxjQ0E5SURGY2JpQWdJQ0IwYUdsekxtTnNZWE56YVdacFpXUkRiMnh2Y2sxaGNDQTlJSHQ5WEc0Z0lDQWdkR2hwY3k1aWRXSmliR1ZrUTI5c2IzSk5ZWEFnUFNCN2ZWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa2NtRjNLRzl3ZEdsdmJuTS9PaUJOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6S1NCN1hHNGdJQ0FnZEdocGN5NTJhWE5wWW14bElEMGdkSEoxWlZ4dUlDQWdJSFJvYVhNdWFXNXBkRTl3ZEdsdmJuTW9iM0IwYVc5dWN5bGNiaUFnSUNCMGFHbHpMbWx1YVhSTllYSnJaWEp6S0NsY2JpQWdJQ0IwYUdsekxtbHVhWFJGZG1WdWRITW9LVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsWkhKaGR5Z3BYRzRnSUgxY2JpQWdjSFZpYkdsaklISmxaSEpoZHlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxteGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhoZVdWeUxuSmxiVzkyWlNncFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4ZzVMeVk1WVdJNVlpazVwYXRJR2x6UTJ4MWMzUmxjbHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWFYTkRiSFZ6ZEdWeUlDWW1JSFJvYVhNdWIzQjBhVzl1Y3k1eVpXNWtaWEpVZVhCbElEMDlQU0FuY0c5cGJuUW5LU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGhlV1Z5SUQwZ2RHaHBjeTVqYjI1bWFXZERiSFZ6ZEdWeVRHRjVaWElvS1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnpkMmwwWTJnZ0tIUm9hWE11YjNCMGFXOXVjeTV5Wlc1a1pYSlVlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhjMlVnSjNCdmFXNTBKem9nZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YkdGNVpYSWdQU0IwYUdsekxtTnZibVpwWjAxaGNtdGxja3hoZVdWeUtDbGNiaUFnSUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR05oYzJVZ0oyTnNkWE4wWlhJbk9pQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NXNZWGxsY2lBOUlIUm9hWE11WTI5dVptbG5RMngxYzNSbGNreGhlV1Z5S0NsY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHTmhjMlVnSjJobFlYUW5PaUI3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVzWVhsbGNpQTlJSFJvYVhNdVkyOXVabWxuU0dWaGRFeGhlV1Z5S0NsY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHTmhjMlVnSjJKMVltSnNaU2M2SUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG14aGVXVnlJRDBnZEdocGN5NWpiMjVtYVdkQ2RXSmliR1ZNWVhsbGNpZ3BYRzRnSUNBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JrWldaaGRXeDBPaUI3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCeVpXNWtaWEpVZVhCbElPUzRqZWFVcithTWdWd2lKSHQwYUdsekxtOXdkR2x2Ym5NdWNtVnVaR1Z5Vkhsd1pYMWNJbUFwWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1dFlYQXVZV1JrVEdGNVpYSW9kR2hwY3k1c1lYbGxjaWxjYmlBZ0lDQnlaWFIxY200Z2RHaHBjMXh1SUNCOVhHNGdJSEIxWW14cFl5QnpaWFJFWVhSaEtHUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJWdGRLU0I3WEc0Z0lDQWdkR2hwY3k1a1lYUmhUR2x6ZENBOUlHUmhkR0ZjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjMlYwVDNCMGFXOXVjeWh2Y0hScGIyNXpPaUJOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6TENCeVpXUnlZWGNnUFNCbVlXeHpaU2tnZTF4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlFOWlhbVZqZEM1aGMzTnBaMjRvZEdocGN5NXZjSFJwYjI1ekxDQnZjSFJwYjI1ektWeHVJQ0FnSUdsbUlDaHlaV1J5WVhjcElIdGNiaUFnSUNBZ0lIUm9hWE11Y21Wa2NtRjNLQ2xjYmlBZ0lDQjlYRzRnSUgxY2JpQWdMeW9xSU9pT3QrV1BsdVc5aytXSmpTQnZjSFJwYjI1eklDb3ZYRzRnSUhCMVlteHBZeUJuWlhSUGNIUnBiMjV6S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtOXdkR2x2Ym5OY2JpQWdmVnh1SUNCd2RXSnNhV01nWm1sMFFtOTFibVJ6S0NrZ2UxeHVJQ0FnSUhSb2FYTXViV0Z3TG1acGRFSnZkVzVrY3loMGFHbHpMbWRsZEVKdmRXNWtjeWdwTENCN0lIQmhaR1JwYm1jNklGc3lNQ3dnTWpCZElIMHBYRzRnSUgxY2JpQWdjSFZpYkdsaklHZGxkRUp2ZFc1a2N5Z3BPaUJNTGt4aGRFeHVaMEp2ZFc1a2MwVjRjSEpsYzNOcGIyNGdlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtMWhjbXRsY25NdWJHVnVaM1JvSUR3OUlEQXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG0xaGNDNW5aWFJDYjNWdVpITW9LVnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXRZWEpyWlhKekxtMWhjQ2hjYmlBZ0lDQWdJQ2h0WVhKclpYSXBJRDArWEc0Z0lDQWdJQ0FnSUZ0dFlYSnJaWEl1WjJWMFRHRjBURzVuS0NrdWJHRjBMQ0J0WVhKclpYSXVaMlYwVEdGMFRHNW5LQ2t1Ykc1blhTQmhjeUJiYm5WdFltVnlMQ0J1ZFcxaVpYSmRYRzRnSUNBZ0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa1pYTjBjbTk1S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWNtVnRiM1psVEdGNVpYSW9kR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVTFoY210bGNpbGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXRZWEF1YjJabUtDZDZiMjl0YzNSaGNuUW5MQ0IwYUdsekxsOTZiMjl0VTNSaGNuUkRZaXdnZEdocGN5bGNiaUFnSUNCMGFHbHpMbTFoY0M1dlptWW9KM3B2YjIxbGJtUW5MQ0IwYUdsekxsOTZiMjl0Ulc1a1EySXNJSFJvYVhNcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhSdloyZHNaVlpwYzJsaWJHVW9kbWx6YVdKc1pUb2dZbTl2YkdWaGJpa2dlMXh1SUNBZ0lIUm9hWE11ZG1semFXSnNaU0E5SUhacGMybGliR1ZjYmlBZ0lDQnBaaUFvSVhSb2FYTXViR0Y1WlhJcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1WVdSa1RHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsTllYSnJaWElwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnZEdocGN5NXRZWEF1Y21WdGIzWmxUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NIVmliR2xqSUdOb1lXNW5aVU52Ykc5eUtHTnZiRzl5T2lCemRISnBibWNwSUh0Y2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NdWFXTnZia052Ykc5eUlEMGdZMjlzYjNKY2JpQWdJQ0IwYUdsekxuSmxaSEpoZHlncFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdOb1lXNW5aVWxqYjI0b2FXTnZibFZ1YVdOdlpHVTZJSE4wY21sdVp5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVZXNXBZMjlrWlNBOUlHbGpiMjVWYm1samIyUmxYRzRnSUNBZ2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNGdJSEIxWW14cFl5QndhWFJqYUNocFpEb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV0WVhKclpYSnpMbVp2Y2tWaFkyZ29LRzFoY210bGNpa2dQVDRnZTF4dUlDQWdJQ0FnYVdZZ0tHMWhjbXRsY2k1blpYUkVZWFJoS0NrdWFXUWdQVDA5SUdsa0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXRnlhMlZ5UTJ4cFkydElZVzVrYkdWeUtHMWhjbXRsY2l3Z2RISjFaU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1oyVjBRMnhoYzNOcFptbGxaRU52Ykc5eVVtVm1jeWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amJHRnpjMmxtYVdWa1EyOXNiM0pTWldaelhHNGdJSDFjYmlBZ2NIVmliR2xqSUdkbGRFSjFZbUpzWldSRGIyeHZjbEpsWm5Nb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZblZpWW14bFpFTnZiRzl5VW1WbWMxeHVJQ0I5WEc0Z0lIQnliM1JsWTNSbFpDQmZlbTl2YlZOMFlYSjBRMklvS1NCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6TG5acGMybGliR1VwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kR2hwY3k1MGVYQmxJRDA5UFNBbmJXRnlhMlZ5SnlrZ2UxeHVJQ0FnSUNBZ2MzZHBkR05vSUNoMGFHbHpMbTl3ZEdsdmJuTXVjbVZ1WkdWeVZIbHdaU2tnZTF4dUlDQWdJQ0FnSUNCallYTmxJQ2R3YjJsdWRDYzZJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG1selEyeDFjM1JsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtMWhjbXRsY2t4aGVXVnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG0xaGNDNXlaVzF2ZG1WTVlYbGxjaWgwYUdsekxtMWhjbXRsY2t4aGVXVnlLVnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHTmhjMlVnSjJKMVltSnNaU2M2SUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWlkV0ppYkdWTVlYbGxjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dFlYQXVjbVZ0YjNabFRHRjVaWElvZEdocGN5NWlkV0ppYkdWTVlYbGxjaWxjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmtaV1poZFd4ME9pQjdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFJvYVhNdWRIbHdaU0E5UFQwZ0oyMWhjbXRsY2tKMVptWmxjaWNwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViV0Z3TG5KbGJXOTJaVXhoZVdWeUtIUm9hWE11YldGeWEyVnlUR0Y1WlhJcFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUgxY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1gzcHZiMjFGYm1SRFlpZ3BJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXVkbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGFHbHpMblI1Y0dVZ1BUMDlJQ2R0WVhKclpYSW5LU0I3WEc0Z0lDQWdJQ0J6ZDJsMFkyZ2dLSFJvYVhNdWIzQjBhVzl1Y3k1eVpXNWtaWEpVZVhCbEtTQjdYRzRnSUNBZ0lDQWdJR05oYzJVZ0ozQnZhVzUwSnpvZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVhWE5EYkhWemRHVnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YldGeWEyVnlUR0Y1WlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViV0Z3TG1Ga1pFeGhlV1Z5S0hSb2FYTXViV0Z5YTJWeVRHRjVaWElwWEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZMkZ6WlNBblluVmlZbXhsSnpvZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbUoxWW1Kc1pVeGhlV1Z5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtMWhjQzVoWkdSTVlYbGxjaWgwYUdsekxtSjFZbUpzWlV4aGVXVnlLVnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHUmxabUYxYkhRNklIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kR2hwY3k1MGVYQmxJRDA5UFNBbmJXRnlhMlZ5UW5WbVptVnlKeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1WVdSa1RHRjVaWElvZEdocGN5NXRZWEpyWlhKTVlYbGxjaWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNCOVhHNGdJQzhxS2lEbXVMTG1uNVBrdUxybWxhUG5ncm5sbTc0Z0tpOWNiaUFnY0hKdmRHVmpkR1ZrSUdOdmJtWnBaMDFoY210bGNreGhlV1Z5S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG0xaGNtdGxja3hoZVdWeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG0xaGNtdGxja3hoZVdWeUxuSmxiVzkyWlNncFhHNGdJQ0FnZlZ4dUlDQWdJR052Ym5OMElHTmhiblpoYzBsamIyNU1ZWGxsY2lBOUlFd3VZMkZ1ZG1GelNXTnZia3hoZVdWeUtIdDlLUzVoWkdSVWJ5aDBhR2x6TG0xaGNDbGNiaUFnSUNBdkx5RG10N3ZsaXFEbmdybmxoN3ZrdW92a3U3WmNiaUFnSUNCallXNTJZWE5KWTI5dVRHRjVaWEl1WVdSa1QyNURiR2xqYTB4cGMzUmxibVZ5S0NoZkxDQmJleUJrWVhSaE9pQnRZWEpyWlhJZ2ZWMHBJRDArSUh0Y2JpQWdJQ0FnSUhSb2FYTXViV0Z5YTJWeVEyeHBZMnRJWVc1a2JHVnlLRzFoY210bGNpQmhjeUJOWVhKclpYSXBYRzRnSUNBZ2ZTbGNiaUFnSUNBdkx5RG10N3ZsaXFEbGo3UHBsSzdrdW92a3U3WmNiaUFnSUNCallXNTJZWE5KWTI5dVRHRjVaWEl1WVdSa1QyNURiMjUwWlhoMGJXVnVkVXhwYzNSbGJtVnlLQ2hsZG1WdWRDd2dXM3NnWkdGMFlUb2diV0Z5YTJWeUlIMWRLU0E5UGlCN1hHNGdJQ0FnSUNCMGFHbHpMbU5vWVc1dVpXeEdkVzVqS0NkamIyNTBaWGgwYldWdWRTY3NJSHRjYmlBZ0lDQWdJQ0FnWlhabGJuUXNYRzRnSUNBZ0lDQWdJRzFoY210bGNpeGNiaUFnSUNBZ0lIMHBYRzRnSUNBZ2ZTbGNiaUFnSUNBdkx5RG10N3ZsaXFBZ2FHOTJaWElnNUxxTDVMdTJYRzRnSUNBZ2FXWWdLSFJvYVhNdWIzQjBhVzl1Y3k1MGIyOXNkR2x3S1NCN1hHNGdJQ0FnSUNCallXNTJZWE5KWTI5dVRHRjVaWEl1WVdSa1QyNUliM1psY2t4cGMzUmxibVZ5S0NoZkxDQmJleUJrWVhSaE9pQnRZWEpyWlhJZ2ZWMHBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0x5OGc1TG1MNVltTjVweUpJR2h2ZG1WeUlPZWFoT1dGcyttWHJTQjBiMjlzZEdsd1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtaHZkbVZ5WldSTllYSnJaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG1odmRtVnlaV1JOWVhKclpYSXVZMnh2YzJWVWIyOXNkR2x3S0NsY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjBhR2x6TG1odmRtVnlaV1JOWVhKclpYSWdQU0J0WVhKclpYSWdZWE1nVFdGeWEyVnlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YUc5MlpYSmxaRTFoY210bGNpNW5aWFJVYjI5c2RHbHdLQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMeURscG9MbW5wemx0N0xudTQvb3JyN252YTRnZEc5dmJIUnBjQ0RubTdUbWpxWGxzWlhucExvZ2RHOXZiSFJwY0Z4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YUc5MlpYSmxaRTFoY210bGNpNXZjR1Z1Vkc5dmJIUnBjQ2dwWEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OGc1WkNtNVlpWjU3dVI1YTZhSUhSdmIyeDBhWEFnNWJtMjViR1Y1NlM2WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWIzQjBhVzl1Y3k1MGIyOXNkR2x3UVhSMGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVvYjNabGNtVmtUV0Z5YTJWeUxtSnBibVJVYjI5c2RHbHdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQW5KeUFySUhSb2FYTXVhRzkyWlhKbFpFMWhjbXRsY2k1blpYUkVZWFJoS0NsYmRHaHBjeTV2Y0hScGIyNXpMblJ2YjJ4MGFYQkJkSFJ5WFZ4dUlDQWdJQ0FnSUNBZ0lDQWdLVnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZTbGNiaUFnSUNCOVhHNGdJQ0FnWTJGdWRtRnpTV052Ymt4aGVXVnlMbUZrWkUxaGNtdGxjbk1vZEdocGN5NXRZWEpyWlhKektWeHVYRzRnSUNBZ0x5OGc2S2VqNVlhejVZaWQ1cXloNXJpeTVwK1Q1TGlONVllNjVadSs1cUNINlpldTZhS1lYRzRnSUNBZ2RHaHBjeTV0WVhBdWNHRnVWRzhvZEdocGN5NXRZWEF1WjJWMFEyVnVkR1Z5S0NrcFhHNWNiaUFnSUNCMGFHbHpMbTFoY210bGNreGhlV1Z5SUQwZ1kyRnVkbUZ6U1dOdmJreGhlV1Z5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11YldGeWEyVnlUR0Y1WlhKY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1oyVjBWRzl2YkZScGNFTnZiblJsYm5Rb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUNjbklDc2daR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVkRzl2YkhScGNFRjBkSEpkWEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdsdWFYUlBjSFJwYjI1ektHOXdkR2x2Ym5NNklFMWhjbXRsY25OTVlYbGxjazl3ZEdsdmJuTXBJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk1nUFNCdmNIUnBiMjV6VFdWeVoyVW9YRzRnSUNBZ0lDQjBhR2x6TG1SbFptRjFiSFJQY0hScGIyNXpMRnh1SUNBZ0lDQWdkR2hwY3k1dmNIUnBiMjV6TEZ4dUlDQWdJQ0FnYjNCMGFXOXVjMXh1SUNBZ0lDa2dZWE1nVFdGeWEyVnljMHhoZVdWeVQzQjBhVzl1YzF4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCcGJtbDBUV0Z5YTJWeWN5Z3BJSHRjYmlBZ0lDQXZMeURudkpQbHJaZ2djMlZuYldWdWRDRG5tN2psaGJQbWxiRG1qYTVjYmlBZ0lDQjBhR2x6TG1OaFkyaGxVMlZuYldWdWRGQmhjbUZ0Y3lncFhHNGdJQ0FnZEdocGN5NWpZV05vWlVOc1lYTnphV1o1VUdGeVlXMXpLQ2xjYmlBZ0lDQjBhR2x6TG1OaFkyaGxRblZpWW14bFVHRnlZVzF6S0NsY2JpQWdJQ0IwYUdsekxtMWhjbXRsY25NZ1BTQmJYVnh1SUNBZ0lIUm9hWE11WkdGMFlVeHBjM1F1Wm05eVJXRmphQ2dvWkdGMFlTa2dQVDRnZTF4dUlDQWdJQ0FnWTI5dWMzUWdiR0Y1WlhJZ1BTQk1MbWRsYjBwVFQwNG9aR0YwWVM1blpXOXRaWFJ5ZVNrdVoyVjBUR0Y1WlhKektDbGJNRjBnWVhNZ1RDNU5ZWEpyWlhKY2JseHVJQ0FnSUNBZ1kyOXVjM1FnYldGeWEyVnlJRDBnYm1WM0lFMWhjbXRsY2loY2JpQWdJQ0FnSUNBZ1cyeGhlV1Z5TG1kbGRFeGhkRXh1WnlncExteGhkQ3dnYkdGNVpYSXVaMlYwVEdGMFRHNW5LQ2t1Ykc1blhTeGNiaUFnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUdsamIyNDZJSFJvYVhNdVoyVjBUV0Z5YTJWeVNXTnZiaWhrWVhSaEtTeGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdLVnh1WEc0Z0lDQWdJQ0F2THlEbHNJYm5tN2psaGJQbGdMem51NUhscnBybGlMQWdiV0Z5YTJWeTVMaUtYRzRnSUNBZ0lDQnRZWEpyWlhJdWMyVjBSR0YwWVNoa1lYUmhLVnh1SUNBZ0lDQWdkR2hwY3k1dFlYSnJaWEp6TG5CMWMyZ29iV0Z5YTJWeUtWeHVJQ0FnSUgwcFhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lHbHVhWFJGZG1WdWRITW9LU0I3WEc0Z0lDQWdkR2hwY3k1dFlYQXViMjRvSjNwdmIyMXpkR0Z5ZENjc0lIUm9hWE11WDNwdmIyMVRkR0Z5ZEVOaUxDQjBhR2x6S1Z4dUlDQWdJSFJvYVhNdWJXRndMbTl1S0NkNmIyOXRaVzVrSnl3Z2RHaHBjeTVmZW05dmJVVnVaRU5pTENCMGFHbHpLVnh1SUNCOVhHNGdJQzh2SU9Xa2hPZVFoaUJ0WVhKclpYSWc1NEs1NVllNzVMcUw1THUyWEc0Z0lIQnlhWFpoZEdVZ2JXRnlhMlZ5UTJ4cFkydElZVzVrYkdWeUtHMWhjbXRsY2pvZ1RXRnlhMlZ5TENCbWFYUkNiM1Z1WkhNL09pQmliMjlzWldGdUtTQjdYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtUV0Z5YTJWeUlEMGdiV0Z5YTJWeVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNDa2dlMXh1SUNBZ0lDQWdMeThnNVlpZzZabWs1WW1ONUxpQTVMaXE1cFMrNWFTbjVadSs1cUNIWEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVUV0Z5YTJWeUxuSmxiVzkyWlVaeWIyMG9kR2hwY3k1dFlYQXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQXZMeURubEovbWlKRGx2WlBsaVkzbWxMN2xwS2ZsbTc3bW9JZGNiaUFnSUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbE5ZWEpyWlhJZ1BTQnVaWGNnVFdGeWEyVnlLRzFoY210bGNpNW5aWFJNWVhSTWJtY29LU3dnZTF4dUlDQWdJQ0FnSUNCcFkyOXVPaUIwYUdsekxtZGxkRXhoY21kbGNrMWhjbXRsY2tsamIyNG9iV0Z5YTJWeUxtZGxkRVJoZEdFb0tTa3NYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVTFoY210bGNpNWhaR1JVYnloMGFHbHpMbTFoY0NsY2JpQWdJQ0FnSUM4dklPYTN1K1dLb09hVXZ1V2twK1didnVhZ2grZWFoQ0J3YjNCMWNGeHVJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2x4dUlDQWdJQ0FnSUNBdVltbHVaRkJ2Y0hWd0tIUm9hWE11WjJWMFVHOXdkWEJEYjI1MFpXNTBLRzFoY210bGNpNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdJQ0F1YjNCbGJsQnZjSFZ3S0NsY2JpQWdJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsTllYSnJaWEl1YjI0b0ozQnZjSFZ3WTJ4dmMyVW5MQ0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxOWVhKclpYSXVjbVZ0YjNabEtDbGNiaUFnSUNBZ0lIMHBYRzRnSUNBZ2ZWeHVJQ0FnSUcxaGNtdGxjaTVqYkc5elpWUnZiMngwYVhBb0tWeHVYRzRnSUNBZ2RHaHBjeTV0WVhBdWNHRnVWRzhvZEdocGN5NW1iMk4xYzJWa1RXRnlhMlZ5TG1kbGRFeGhkRXh1WnlncEtWeHVJQ0FnSUdsbUlDaG1hWFJDYjNWdVpITXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXRndMbVpwZEVKdmRXNWtjeWh0WVhKclpYSXVaMlYwVEdGMFRHNW5LQ2t1ZEc5Q2IzVnVaSE1vTVRBcEtWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxtTm9ZVzV1Wld4R2RXNWpLQ2R2YmkxamJHbGpheTF0WVhKclpYSW5MQ0J0WVhKclpYSXBYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQmpiMjVtYVdkRGJIVnpkR1Z5VEdGNVpYSW9LU0I3WEc0Z0lDQWdMeThnNWJHVjU2UzY2SUdhNVpDSTVadSs1YkdDWEc0Z0lDQWdhV1lnS0hSb2FYTXVZMngxYzNSbGNreGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU5zZFhOMFpYSk1ZWGxsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG1Oc2RYTjBaWEpNWVhsbGNpQTlJRXd1YldGeWEyVnlRMngxYzNSbGNrZHliM1Z3S0h0Y2JpQWdJQ0FnSUdsamIyNURjbVZoZEdWR2RXNWpkR2x2YmpvZ2RHaHBjeTVwWTI5dVEzSmxZWFJsUm5WdVkzUnBiMjR1WW1sdVpDaDBhR2x6S1N4Y2JpQWdJQ0I5S1Z4dUlDQWdJSFJvYVhNdVkyeDFjM1JsY2t4aGVXVnlMbUZrWkV4aGVXVnljeWhjYmlBZ0lDQWdJSFJvYVhNdWJXRnlhMlZ5Y3k1dFlYQW9LRzBwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JXRnlhMlZ5SUQwZ2JtVjNJRTFoY210bGNpaHRMbWRsZEV4aGRFeHVaeWdwTENCN1hHNGdJQ0FnSUNBZ0lDQWdhV052YmpvZ2RHaHBjeTVuWlhSTllYSnJaWEpKWTI5dUtHMHVaMlYwUkdGMFlTZ3BLU3hjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ2JXRnlhMlZ5TG5ObGRFUmhkR0VvYlM1blpYUkVZWFJoS0NrcFhHNGdJQ0FnSUNBZ0lHMWhjbXRsY2k1aWFXNWtWRzl2YkhScGNDZ25KeUFySUcxaGNtdGxjaTVuWlhSRVlYUmhLQ2xiZEdocGN5NXZjSFJwYjI1ekxuUnZiMngwYVhCQmRIUnlYU2xjYmlBZ0lDQWdJQ0FnYldGeWEyVnlMbUpwYm1SUWIzQjFjQ2gwYUdsekxtZGxkRkJ2Y0hWd1EyOXVkR1Z1ZENodFlYSnJaWEl1WjJWMFJHRjBZU2dwS1NsY2JpQWdJQ0FnSUNBZ2JXRnlhMlZ5TG05dUtDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG0xaGNtdGxja05zYVdOclNHRnVaR3hsY2lodFlYSnJaWElwWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdFlYSnJaWEpjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdLVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU5zZFhOMFpYSk1ZWGxsY2x4dUlDQjlYRzVjYmlBZ0x5b3FJT2E0c3VhZmsrUzR1dWVEcmVXS20rV2J2aUFxTDF4dUlDQndjbWwyWVhSbElHTnZibVpwWjBobFlYUk1ZWGxsY2lncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1b1pXRjBUR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YUdWaGRFeGhlV1Z5TG5KbGJXOTJaU2dwWEc0Z0lDQWdmVnh1SUNBZ0lHTnZibk4wSUdGc2RITTZJRzUxYldKbGNsdGRJRDBnVzExY2JpQWdJQ0IwYUdsekxtMWhjbXRsY25NdVptOXlSV0ZqYUNnb2JXRnlhMlZ5S1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCc1lYUk1ibWNnUFNCdFlYSnJaWEl1WjJWMFRHRjBURzVuS0NsY2JpQWdJQ0FnSUdOdmJuTjBJR1JwYldWdWMybHZia0YwZEhJZ1BWeHVJQ0FnSUNBZ0lDQjBhR2x6TG05d2RHbHZibk11YUdWaGRFOXdkR2x2Ym5NZ0ppWWdkR2hwY3k1dmNIUnBiMjV6TG1obFlYUlBjSFJwYjI1ekxtUnBiV1Z1YzJsdmJrRjBkSEpjYmlBZ0lDQWdJR3hsZENCaGJIUWdQVnh1SUNBZ0lDQWdJQ0FvWkdsdFpXNXphVzl1UVhSMGNpQW1KaUJ0WVhKclpYSXVaMlYwUkdGMFlTZ3BXMlJwYldWdWMybHZia0YwZEhKZEtTQjhmRnh1SUNBZ0lDQWdJQ0IwYUdsekxtOXdkR2x2Ym5NdWFHVmhkRTl3ZEdsdmJuTXViV0Y0WEc0Z0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdGc2RDQWhQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0FnSUNBZ1lXeDBJRDBnZEdocGN5NXZjSFJwYjI1ekxtaGxZWFJQY0hScGIyNXpMbTFoZUZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWVd4MGN5NXdkWE5vS0dGc2RDbGNiaUFnSUNBZ0lHMWhjbXRsY2k1elpYUk1ZWFJNYm1jb1RDNXNZWFJNYm1jb2JHRjBURzVuTG14aGRDd2diR0YwVEc1bkxteHVaeXdnWVd4MEtTbGNiaUFnSUNCOUtWeHVJQ0FnSUhSb2FYTXVhR1ZoZEV4aGVXVnlJRDBnVEM1b1pXRjBUR0Y1WlhJb1hHNGdJQ0FnSUNCMGFHbHpMbTFoY210bGNuTXViV0Z3S0NocGRDd2dhVzVrWlhncElEMCtJRnRjYmlBZ0lDQWdJQ0FnYVhRdVoyVjBUR0YwVEc1bktDa3ViR0YwTEZ4dUlDQWdJQ0FnSUNCcGRDNW5aWFJNWVhSTWJtY29LUzVzYm1jc1hHNGdJQ0FnSUNBZ0lHRnNkSE5iYVc1a1pYaGRMRnh1SUNBZ0lDQWdYU2tzWEc0Z0lDQWdJQ0J2Y0hScGIyNXpUV1Z5WjJVb2V5QnRhVzVQY0dGamFYUjVPaUF3TGpVZ2ZTd2dkR2hwY3k1dmNIUnBiMjV6TG1obFlYUlBjSFJwYjI1ektWeHVJQ0FnSUNsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1b1pXRjBUR0Y1WlhKY2JpQWdmVnh1WEc0Z0lDOHFLaURtdUxMbW41UGt1THJtc0pUbXM2SGxtNzRnS2k5Y2JpQWdjSEpwZG1GMFpTQmpiMjVtYVdkQ2RXSmliR1ZNWVhsbGNpZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NWlkV0ppYkdWTVlYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NWlkV0ppYkdWTVlYbGxjaTV5WlcxdmRtVW9LVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbUoxWW1Kc1pVeGhlV1Z5SUQwZ1RDNXNZWGxsY2tkeWIzVndLQ2xjYmlBZ0lDQjBhR2x6TG0xaGNtdGxjbk11Wm05eVJXRmphQ2dvYldGeWEyVnlLU0E5UGlCN1hHNGdJQ0FnSUNCamIyNXpkQ0J5WVdScGRYTWdQU0IwYUdsekxtZGxkRUoxWW1Kc1pXUk5ZWEpyWlhKVGFYcGxLRzFoY210bGNpNW5aWFJFWVhSaEtDa3BYRzRnSUNBZ0lDQmpiMjV6ZENCbWFXeHNRMjlzYjNJZ1BTQjBhR2x6TG1kbGRFSjFZbUpzWldSTllYSnJaWEpEYjJ4dmNpaHRZWEpyWlhJdVoyVjBSR0YwWVNncEtWeHVJQ0FnSUNBZ1kyOXVjM1FnWTI5c2IzSWdQU0IwYUdsekxtOXdkR2x2Ym5NdVluVmlZbXhsVTNSeWIydGxRMjlzYjNJZ2ZId2diR2xuYUhSbGJpaG1hV3hzUTI5c2IzSXBYRzRnSUNBZ0lDQmpiMjV6ZENCM1pXbG5hSFFnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZblZpWW14bFUzUnliMnRsVjJsa2RHaGNiaUFnSUNBZ0lHTnZibk4wSUc5d1lXTnBkSGtnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZblZpWW14bFUzUnliMnRsVDNCaFkybDBlVnh1SUNBZ0lDQWdZMjl1YzNRZ1ptbHNiRTl3WVdOcGRIa2dQU0IwYUdsekxtOXdkR2x2Ym5NdVluVmlZbXhsUm1sc2JFOXdZV05wZEhsY2JpQWdJQ0FnSUdOdmJuTjBJR0oxWW1Kc1pTQTlJRXd1WTJseVkyeGxUV0Z5YTJWeUtHMWhjbXRsY2k1blpYUk1ZWFJNYm1jb0tTd2dlMXh1SUNBZ0lDQWdJQ0J5WVdScGRYTXNYRzRnSUNBZ0lDQWdJR052Ykc5eUxGeHVJQ0FnSUNBZ0lDQm1hV3hzUTI5c2IzSXNYRzRnSUNBZ0lDQWdJSGRsYVdkb2RDeGNiaUFnSUNBZ0lDQWdiM0JoWTJsMGVTeGNiaUFnSUNBZ0lDQWdabWxzYkU5d1lXTnBkSGtzWEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNDa2dlMXh1SUNBZ0lDQWdJQ0JpZFdKaWJHVXVZbWx1WkZCdmNIVndLSFJvYVhNdVoyVjBVRzl3ZFhCRGIyNTBaVzUwS0cxaGNtdGxjaTVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11YjNCMGFXOXVjeTUwYjI5c2RHbHdLU0I3WEc0Z0lDQWdJQ0FnSUdKMVltSnNaUzVpYVc1a1ZHOXZiSFJwY0NoMGFHbHpMbWRsZEZSdmIyeFVhWEJEYjI1MFpXNTBLRzFoY210bGNpNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1aWRXSmliR1ZNWVhsbGNpNWhaR1JNWVhsbGNpaGlkV0ppYkdVcFhHNGdJQ0FnZlNsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1aWRXSmliR1ZNWVhsbGNseHVJQ0I5WEc1Y2JpQWdjSEpwZG1GMFpTQm5aWFJNWVhKblpYSk5ZWEpyWlhKSlkyOXVLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TGw5blpYUk5ZWEpyWlhKSlkyOXVLR1JoZEdFc0lIUnlkV1VwWEc0Z0lIMWNibHh1SUNCd2NtbDJZWFJsSUdkbGRFMWhjbXRsY2tsamIyNG9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDJkbGRFMWhjbXRsY2tsamIyNG9aR0YwWVN3Z1ptRnNjMlVwWEc0Z0lIMWNibHh1SUNBdktpb2c2STYzNVkrVzViMlQ1WW1OSUcxaGNtdGxjaURwbklEb3BvSGxzWlhucExybm1vUWdhV052YmlBcUwxeHVJQ0J3Y21sMllYUmxJRjluWlhSTllYSnJaWEpKWTI5dUtGeHVJQ0FnSUdSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlN4Y2JpQWdJQ0JwYzB4aGNtZGxjam9nWW05dmJHVmhibHh1SUNBcE9pQk1Ma2xqYjI0Z2ZDQk1Ma1JwZGtsamIyNGdlMXh1SUNBZ0lHTnZibk4wSUdsamIyNVRhWHBsSUQwZ2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1VGFYcGxYRzRnSUNBZ1kyOXVjM1FnYVdOdmJrRnVZMmh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVFXNWphRzl5WEc0Z0lDQWdZMjl1YzNRZ2JHRnlaMlZ5U1dOdmJsTnBlbVVnUFNCYmFXTnZibE5wZW1WYk1GMGdLaUF4TGpVc0lHbGpiMjVUYVhwbFd6RmRJQ29nTVM0MVhTQmhjeUJiWEc0Z0lDQWdJQ0J1ZFcxaVpYSXNYRzRnSUNBZ0lDQnVkVzFpWlhKY2JpQWdJQ0JkWEc0Z0lDQWdZMjl1YzNRZ2JHRnlaMlZ5U1dOdmJrRnVZMmh2Y2lBOUlGdHBZMjl1UVc1amFHOXlXekJkSUNvZ01TNDFMQ0JwWTI5dVFXNWphRzl5V3pGZElDb2dNUzQxWFNCaGN5QmJYRzRnSUNBZ0lDQnVkVzFpWlhJc1hHNGdJQ0FnSUNCdWRXMWlaWEpjYmlBZ0lDQmRYRzVjYmlBZ0lDQmpiMjV6ZENCcFkyOXVRMjlzYjNJZ1BTQjBhR2x6TG05d2RHbHZibk11YVdOdmJrTnZiRzl5WEc1Y2JpQWdJQ0J6ZDJsMFkyZ2dLSFJvYVhNdWIzQjBhVzl1Y3k1cFkyOXVWSGx3WlNrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0FuYVcxaFoyVW5PaUI3WEc0Z0lDQWdJQ0FnSUM4dklISmxkSFZ5YmlCTUxtbGpiMjRvZTF4dUlDQWdJQ0FnSUNBdkx5QWdJR2xqYjI1VmNtdzZJSFJvYVhNdWIzQjBhVzl1Y3k1cFkyOXVTVzFoWjJWVmNtd3NYRzRnSUNBZ0lDQWdJQzh2SUNBZ2FXTnZibE5wZW1VNklHbHpUR0Z5WjJWeUlEOGdiR0Z5WjJWeVNXTnZibE5wZW1VZ09pQnBZMjl1VTJsNlpTeGNiaUFnSUNBZ0lDQWdMeThnSUNCcFkyOXVRVzVqYUc5eUxGeHVJQ0FnSUNBZ0lDQXZMeUI5S1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWTJGelpTQW5abTl1ZEY5amJHRnpjeWM2WEc0Z0lDQWdJQ0JqWVhObElDZHplVzFpYjJ3bk9seHVJQ0FnSUNBZ1kyRnpaU0FuZFc1cFkyOWtaU2M2SUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUV3dVpHbDJTV052YmloN1hHNGdJQ0FnSUNBZ0lDQWdhSFJ0YkRvZ2RHaHBjeTVuWlhSRGRYTjBiMjFKWTI5dVNGUk5UQ2hrWVhSaExDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFkyOXVVMmw2WlRvZ2FYTk1ZWEpuWlhJZ1B5QnNZWEpuWlhKSlkyOXVVMmw2WlNBNklHbGpiMjVUYVhwbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdOdmJrTnZiRzl5TEZ4dUlDQWdJQ0FnSUNBZ0lIMHBMRnh1SUNBZ0lDQWdJQ0FnSUdOc1lYTnpUbUZ0WlRvZ2FYTk1ZWEpuWlhJZ1B5QW5iR0Z5WjJVdFpHbDJMV2xqYjI0dGJXRnlhMlZ5SnlBNklDY25MRnh1SUNBZ0lDQWdJQ0FnSUdsamIyNVRhWHBsT2lCcGMweGhjbWRsY2lBL0lHeGhjbWRsY2tsamIyNVRhWHBsSURvZ2FXTnZibE5wZW1Vc1hHNGdJQ0FnSUNBZ0lDQWdhV052YmtGdVkyaHZjam9nYVhOTVlYSm5aWElnUHlCc1lYSm5aWEpKWTI5dVFXNWphRzl5SURvZ2FXTnZia0Z1WTJodmNpeGNiaUFnSUNBZ0lDQWdJQ0IwYjI5c2RHbHdRVzVqYUc5eU9pQnBjMHhoY21kbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnUHlCYk1Dd2dMV3hoY21kbGNrbGpiMjVCYm1Ob2IzSmJNVjBnTHlBeVhWeHVJQ0FnSUNBZ0lDQWdJQ0FnT2lCYk1Dd2dMV2xqYjI1QmJtTm9iM0piTVYwZ0x5QXlYU3hjYmlBZ0lDQWdJQ0FnSUNCd2IzQjFjRUZ1WTJodmNqb2dhWE5NWVhKblpYSmNiaUFnSUNBZ0lDQWdJQ0FnSUQ4Z1d6QXNJQzFzWVhKblpYSkpZMjl1UVc1amFHOXlXekZkSUM4Z01sMWNiaUFnSUNBZ0lDQWdJQ0FnSURvZ1d6QXNJQzFwWTI5dVFXNWphRzl5V3pGZElDOGdNbDBzWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCa1pXWmhkV3gwT2lCN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ2NtVnVaR1Z5Vkhsd1pTRGt1STNvZzcza3VMb2dKSHQwYUdsekxtOXdkR2x2Ym5NdWFXTnZibFI1Y0dWOVlDbGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCblpYUkRkWE4wYjIxSlkyOXVTRlJOVENoY2JpQWdJQ0JrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBzWEc0Z0lDQWdiM0IwYVc5dWN6ODZJRWxqYjI1U1pXNWtaWEpHZFc1alQzQjBhVzl1WEc0Z0lDazZJSE4wY21sdVp5QjdYRzRnSUNBZ2FXWWdLSFJvYVhNdWIzQjBhVzl1Y3k1cFkyOXVVbVZ1WkdWeVpYSXBJSHRjYmlBZ0lDQWdJRzl3ZEdsdmJuTWdQU0JQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0IwYUdsekxtOXdkR2x2Ym5Nc0lHOXdkR2x2Ym5NcFhHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXZjSFJwYjI1ekxtbGpiMjVTWlc1a1pYSmxjaWhrWVhSaExDQnZjSFJwYjI1ektWeHVJQ0FnSUgxY2JpQWdJQ0JzWlhRZ1kyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVhV052YmtOdmJHOXlYRzRnSUNBZ2MzZHBkR05vSUNoMGFHbHpMbTl3ZEdsdmJuTXVjbVZ1WkdWeVVHOXBiblJEYjJ4dmNsUjVjR1VwSUh0Y2JpQWdJQ0FnSUdOaGMyVWdKM05wYm1kc1pTYzZJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSWdQU0IwYUdsekxtOXdkR2x2Ym5NdWFXTnZia052Ykc5eVhHNGdJQ0FnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JqWVhObElDZGpiR0Z6YzJsbWFXVmtKem9nZTF4dUlDQWdJQ0FnSUNCamIyeHZjaUE5SUhSb2FYTXVaMlYwUTJ4aGMzTnBabmxOWVhKclpYSkRiMnh2Y2loa1lYUmhLVnh1SUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1kyRnpaU0FuYzJWbmJXVnVkR1ZrSnpvZ2UxeHVJQ0FnSUNBZ0lDQmpiMnh2Y2lBOUlIUm9hWE11WjJWMFUyVm5iV1Z1ZEdWa1RXRnlhMlZ5UTI5c2IzSW9aR0YwWVNsY2JpQWdJQ0FnSUNBZ1luSmxZV3RjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR1JsWm1GMWJIUTZJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLRnh1SUNBZ0lDQWdJQ0FnSUdCeVpXNWtaWEpRYjJsdWRFTnZiRzl5Vkhsd1pTRGt1STNtbEsvbWpJRmNJaVI3ZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2xCdmFXNTBRMjlzYjNKVWVYQmxmVndpWUZ4dUlDQWdJQ0FnSUNBcFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJSE4zYVhSamFDQW9kR2hwY3k1dmNIUnBiMjV6TG1samIyNVVlWEJsS1NCN1hHNGdJQ0FnSUNBdkx5RGt2Yi9ubEtnZ1kyeGhjM05jYmlBZ0lDQWdJR05oYzJVZ0oyWnZiblJmWTJ4aGMzTW5PaUI3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJnWEc0Z0lDQWdJQ0FnSUNBZ1BHa2dZMnhoYzNNOVhDSWtlM1JvYVhNdWIzQjBhVzl1Y3k1cFkyOXVRMnhoYzNOOVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxQVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eU9pQWtlMk52Ykc5eWZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQWtlMjl3ZEdsdmJuTXVhV052YmxOcGVtVmJNRjE5Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdMejVjYmlBZ0lDQWdJQ0FnWUZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnTHk4ZzVMMi81NVNvSUhOMloxeHVJQ0FnSUNBZ1kyRnpaU0FuYzNsdFltOXNKem9nZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWUZ4dUlDQWdJQ0FnSUNBZ0lEeHpkbWNnWTJ4aGMzTTlYQ0pwWTI5dUxYTjViV0p2YkZ3aUlHRnlhV0V0YUdsa1pHVnVQVndpZEhKMVpWd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ1BIVnpaU0I0YkdsdWF6cG9jbVZtUFZ3aUpIdDBhR2x6TG05d2RHbHZibk11YVdOdmJsTjViV0p2YkgxY0lpQXZQbHh1SUNBZ0lDQWdJQ0FnSUR3dmMzWm5QbHh1SUNBZ0lDQWdJQ0JnWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0F2THlEa3ZiL25sS2dnZFc1cFkyOWtaVnh1SUNBZ0lDQWdZMkZ6WlNBbmRXNXBZMjlrWlNjNklIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHQmNiaUFnSUNBZ0lDQWdJQ0E4YVZ4dUlDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNNOVhDSWtlM1JvYVhNdWIzQjBhVzl1Y3k1cFkyOXVRMnhoYzNOOVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxQVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eU9pQWtlMk52Ykc5eWZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXVkQzF6YVhwbE9pQWtlMjl3ZEdsdmJuTXVhV052YmxOcGVtVmJNRjE5Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0pIdDBhR2x6TG05d2RHbHZibk11YVdOdmJsVnVhV052WkdWOVhHNGdJQ0FnSUNBZ0lDQWdQQzlwUGx4dUlDQWdJQ0FnSUNCZ1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTJGamFHVkRiR0Z6YzJsbWVWQmhjbUZ0Y3lncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWIzQjBhVzl1Y3k1amJHRnpjMmxtYVdWa1FYUjBjaWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kyOXVjM1FnZEcxd09pQjdJRnR3Y205d09pQnpkSEpwYm1kZE9pQmJjM1J5YVc1bkxDQnVkVzFpWlhKZElIMGdQU0I3ZlZ4dUlDQWdJR052Ym5OMElIQnliM0FnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZMnhoYzNOcFptbGxaRUYwZEhKY2JpQWdJQ0IwYUdsekxtUmhkR0ZNYVhOMExtWnZja1ZoWTJnb0tHUmhkR0VwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2hrWVhSaFczQnliM0JkSUdsdUlIUnRjQ2tnZTF4dUlDQWdJQ0FnSUNCMGJYQmJaR0YwWVZ0d2NtOXdYVjBnUFNCYlpHRjBZVnR3Y205d1hTd2dkRzF3VzJSaGRHRmJjSEp2Y0YxZFd6RmRJQ3NnTVYxY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhSdGNGdGtZWFJoVzNCeWIzQmRYU0E5SUZ0a1lYUmhXM0J5YjNCZExDQXhYVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBYRzRnSUNBZ1kyOXVjM1FnZG1Gc2RXVnpJRDBnVDJKcVpXTjBMblpoYkhWbGN5aDBiWEFwWEc0Z0lDQWdkbUZzZFdWekxuTnZjblFvS0dFc0lHSXBJRDArSUdKYk1WMGdMU0JoV3pGZEtWeHVJQ0FnSUhSb2FYTXVZMnhoYzNOcFptbGxaRU52Ykc5eVVtVm1jeUE5SUZ0ZFhHNGdJQ0FnZG1Gc2RXVnpMbVp2Y2tWaFkyZ29LRnRoZEhSeUxDQnVkVzF6WFN3Z2FXNWtaWGdwSUQwK0lIdGNiaUFnSUNBZ0lHeGxkQ0JqYjJ4dmNpQTlJQ2RpYkdGamF5ZGNiaUFnSUNBZ0lHbG1JQ2hwYm1SbGVDQThJSFJvYVhNdWIzQjBhVzl1Y3k1amJHRnpjMmxtYVdWa1EyOXNiM0p6TG14bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNCamIyeHZjaUE5SUhSb2FYTXViM0IwYVc5dWN5NWpiR0Z6YzJsbWFXVmtRMjlzYjNKelcybHVaR1Y0WFZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnZEdocGN5NWpiR0Z6YzJsbWFXVmtRMjlzYjNKTllYQmJZWFIwY2wwZ1BTQmpiMnh2Y2x4dUlDQWdJQ0FnZEdocGN5NWpiR0Z6YzJsbWFXVmtRMjlzYjNKU1pXWnpMbkIxYzJnb2UxeHVJQ0FnSUNBZ0lDQmhkSFJ5TEZ4dUlDQWdJQ0FnSUNCamIyeHZjaXhjYmlBZ0lDQWdJQ0FnYm5WdGN5eGNiaUFnSUNBZ0lIMHBYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndjbWwyWVhSbElHTmhZMmhsUW5WaVlteGxVR0Z5WVcxektDa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NXZjSFJwYjI1ekxtSjFZbUpzWlZOcGVtVkJkSFJ5S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQjlYRzRnSUNBZ1kyOXVjM1FnWW5WaVlteGxaRk5wZW1WelRHVnVaM1JvSUQwZ2RHaHBjeTV2Y0hScGIyNXpMbUoxWW1Kc1pWTnBlbVZ6TG14bGJtZDBhRnh1SUNBZ0lHeGxkQ0J0WVhoVGFYcGxWbUZzSUQwZ0xVbHVabWx1YVhSNVhHNGdJQ0FnYkdWMElHMXBibE5wZW1WV1lXd2dQU0JKYm1acGJtbDBlVnh1SUNBZ0lHWnZjaUFvWTI5dWMzUWdaR0YwWVNCdlppQjBhR2x6TG1SaGRHRk1hWE4wS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0J6YVhwbFZtRnNJRDBnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11WW5WaVlteGxVMmw2WlVGMGRISmRYRzRnSUNBZ0lDQnRZWGhUYVhwbFZtRnNJRDBnVFdGMGFDNXRZWGdvYldGNFUybDZaVlpoYkN3Z2MybDZaVlpoYkNsY2JpQWdJQ0FnSUcxcGJsTnBlbVZXWVd3Z1BTQk5ZWFJvTG0xcGJpaHRhVzVUYVhwbFZtRnNMQ0J6YVhwbFZtRnNLVnh1SUNBZ0lIMWNiaUFnSUNCamIyNXpkQ0J6YVhwbFUzUmxjQ0E5SUNodFlYaFRhWHBsVm1Gc0lDMGdiV2x1VTJsNlpWWmhiQ0FySURFcElDOGdZblZpWW14bFpGTnBlbVZ6VEdWdVozUm9YRzRnSUNBZ2RHaHBjeTVpZFdKaWJHVmtVMmw2WlUxcGJpQTlJRzFwYmxOcGVtVldZV3hjYmlBZ0lDQjBhR2x6TG1KMVltSnNaV1JUYVhwbFUzUmxjQ0E5SUhOcGVtVlRkR1Z3WEc1Y2JpQWdJQ0JwWmlBb0lYUm9hWE11YjNCMGFXOXVjeTVpZFdKaWJHVkRiMnh2Y2tGMGRISXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUgxY2JseHVJQ0FnSUdOdmJuTjBJSFJ0Y0RvZ2V5QmJjSEp2Y0RvZ2MzUnlhVzVuWFRvZ1czTjBjbWx1Wnl3Z2JuVnRZbVZ5WFNCOUlEMGdlMzFjYmlBZ0lDQmpiMjV6ZENCd2NtOXdJRDBnZEdocGN5NXZjSFJwYjI1ekxtSjFZbUpzWlVOdmJHOXlRWFIwY2x4dUlDQWdJSFJvYVhNdVpHRjBZVXhwYzNRdVptOXlSV0ZqYUNnb1pHRjBZU2tnUFQ0Z2UxeHVJQ0FnSUNBZ2FXWWdLR1JoZEdGYmNISnZjRjBnYVc0Z2RHMXdLU0I3WEc0Z0lDQWdJQ0FnSUhSdGNGdGtZWFJoVzNCeWIzQmRYU0E5SUZ0a1lYUmhXM0J5YjNCZExDQjBiWEJiWkdGMFlWdHdjbTl3WFYxYk1WMGdLeUF4WFZ4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZEcxd1cyUmhkR0ZiY0hKdmNGMWRJRDBnVzJSaGRHRmJjSEp2Y0Ywc0lERmRYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpYTWdQU0JQWW1wbFkzUXVkbUZzZFdWektIUnRjQ2xjYmlBZ0lDQjJZV3gxWlhNdWMyOXlkQ2dvWVN3Z1lpa2dQVDRnWWxzeFhTQXRJR0ZiTVYwcFhHNGdJQ0FnZEdocGN5NWlkV0ppYkdWa1EyOXNiM0pTWldaeklEMGdXMTFjYmlBZ0lDQjJZV3gxWlhNdVptOXlSV0ZqYUNnb1cyRjBkSElzSUc1MWJYTmRMQ0JwYm1SbGVDa2dQVDRnZTF4dUlDQWdJQ0FnYkdWMElHTnZiRzl5SUQwZ0oySnNZV05ySjF4dUlDQWdJQ0FnYVdZZ0tHbHVaR1Y0SUR3Z2RHaHBjeTV2Y0hScGIyNXpMbUoxWW1Kc1pVTnZiRzl5Y3k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZblZpWW14bFEyOXNiM0p6VzJsdVpHVjRYVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1aWRXSmliR1ZrUTI5c2IzSk5ZWEJiWVhSMGNsMGdQU0JqYjJ4dmNseHVJQ0FnSUNBZ2RHaHBjeTVpZFdKaWJHVmtRMjlzYjNKU1pXWnpMbkIxYzJnb2UxeHVJQ0FnSUNBZ0lDQmhkSFJ5TEZ4dUlDQWdJQ0FnSUNCamIyeHZjaXhjYmlBZ0lDQWdJQ0FnYm5WdGN5eGNiaUFnSUNBZ0lIMHBYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndjbWwyWVhSbElHZGxkRU5zWVhOemFXWjVUV0Z5YTJWeVEyOXNiM0lvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1RvZ2MzUnlhVzVuSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amJHRnpjMmxtYVdWa1EyOXNiM0pOWVhCYlpHRjBZVnQwYUdsekxtOXdkR2x2Ym5NdVkyeGhjM05wWm1sbFpFRjBkSEpkWFZ4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTJGamFHVlRaV2R0Wlc1MFVHRnlZVzF6S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSE5sWjIxbGJuUmxaRXhsYm1kMGFDQTlJSFJvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSRGIyeHZjbk11YkdWdVozUm9YRzRnSUNBZ2JHVjBJRzFoZUZaaGJDQTlJQzFKYm1acGJtbDBlVnh1SUNBZ0lHeGxkQ0J0YVc1V1lXd2dQU0JKYm1acGJtbDBlVnh1SUNBZ0lHWnZjaUFvWTI5dWMzUWdaR0YwWVNCdlppQjBhR2x6TG1SaGRHRk1hWE4wS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0IyWVd3Z1BTQmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkJkSFJ5WFZ4dUlDQWdJQ0FnYldGNFZtRnNJRDBnVFdGMGFDNXRZWGdvYldGNFZtRnNMQ0IyWVd3cFhHNGdJQ0FnSUNCdGFXNVdZV3dnUFNCTllYUm9MbTFwYmlodGFXNVdZV3dzSUhaaGJDbGNiaUFnSUNCOVhHNGdJQ0FnWTI5dWMzUWdjM1JsY0NBOUlDaHRZWGhXWVd3Z0xTQnRhVzVXWVd3Z0t5QXhLU0F2SUhObFoyMWxiblJsWkV4bGJtZDBhRnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVFdsdUlEMGdiV2x1Vm1Gc1hHNGdJQ0FnZEdocGN5NXpaV2R0Wlc1MFpXUlRkR1Z3SUQwZ2MzUmxjRnh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdaMlYwVTJWbmJXVnVkR1ZrVFdGeWEyVnlRMjlzYjNJb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtUb2djM1J5YVc1bklIdGNiaUFnSUNCamIyNXpkQ0IyWVd3Z1BTQmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkJkSFJ5WFZ4dUlDQWdJR052Ym5OMElHTnZiRzl5SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbk5sWjIxbGJuUmxaRU52Ykc5eWMxdGNiaUFnSUNBZ0lIQmhjbk5sU1c1MEtDY25JQ3NnS0haaGJDQXRJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVLU0F2SUhSb2FYTXVjMlZuYldWdWRHVmtVM1JsY0N3Z01UQXBYRzRnSUNBZ1hWeHVJQ0FnSUhKbGRIVnliaUJqYjJ4dmNseHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1oyVjBRblZpWW14bFpFMWhjbXRsY2xOcGVtVW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLVG9nYm5WdFltVnlJSHRjYmlBZ0lDQmpiMjV6ZENCMllXd2dQU0JrWVhSaFczUm9hWE11YjNCMGFXOXVjeTVpZFdKaWJHVlRhWHBsUVhSMGNsMWNiaUFnSUNCamIyNXpkQ0J6YVhwbElEMGdkR2hwY3k1dmNIUnBiMjV6TG1KMVltSnNaVk5wZW1WelcxeHVJQ0FnSUNBZ2NHRnljMlZKYm5Rb0p5Y2dLeUFvZG1Gc0lDMGdkR2hwY3k1aWRXSmliR1ZrVTJsNlpVMXBiaWtnTHlCMGFHbHpMbUoxWW1Kc1pXUlRhWHBsVTNSbGNDd2dNVEFwWEc0Z0lDQWdYVnh1SUNBZ0lISmxkSFZ5YmlCemFYcGxYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJDZFdKaWJHVmtUV0Z5YTJWeVEyOXNiM0lvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1RvZ2MzUnlhVzVuSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1aWRXSmliR1ZrUTI5c2IzSk5ZWEJiWkdGMFlWdDBhR2x6TG05d2RHbHZibk11WW5WaVlteGxRMjlzYjNKQmRIUnlYVjFjYmlBZ2ZWeHVJQ0J3Y21sMllYUmxJR2RsZEZCdmNIVndRMjl1ZEdWdWRDaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW5KMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1lDUjdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY24wNklDUjdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlYWDFnWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lBOVBUMGdKMjlpYW1WamRDY3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmdKSHQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUxteGhZbVZzZlRvZ0pIdGNiaUFnSUNBZ0lDQWdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlMblpoYkhWbFhWeHVJQ0FnSUNBZ2ZXQmNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCcFkyOXVRM0psWVhSbFJuVnVZM1JwYjI0b1kyeDFjM1JsY2pvZ1RDNU5ZWEpyWlhKelEyeDFjM1JsY2lrZ2UxeHVJQ0FnSUdOdmJuTjBJR052Ykc5eWN5QTlJRnNuSXpjMU56UTNNaWNzSUNjak5UQTVNMFV5Snl3Z0p5TkRRamM1T0RjbkxDQW5JMFpETnpZelFpZGRYRzRnSUNBZ1kyOXVjM1FnYkdWdVozUm9JRDBnZEdocGN5NWtZWFJoVEdsemRDNXNaVzVuZEdoY2JpQWdJQ0JqYjI1emRDQnpkR1Z3SUQwZ2JHVnVaM1JvSUM4Z1kyOXNiM0p6TG14bGJtZDBhRnh1SUNBZ0lHTnZibk4wSUhOallXeGxVM1JsY0NBOUlDZ3hJQzBnTUM0M05Ta2dMeUJqYjJ4dmNuTXViR1Z1WjNSb1hHNGdJQ0FnYkdWMElHTnZiRzl5SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1RGIyeHZjbHh1SUNBZ0lHeGxkQ0J6WTJGc1pTQTlJREZjYmlBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2tOc2RYTjBaWEpEYjJ4dmNsUjVjR1VnUFQwOUlDZHpiV0Z5ZENjcElIdGNiaUFnSUNBZ0lHTnZiRzl5SUQwZ1kyOXNiM0p6VzAxaGRHZ3VabXh2YjNJb0tHTnNkWE4wWlhJdVoyVjBRMmhwYkdSRGIzVnVkQ2dwSUMwZ01Ta2dMeUJ6ZEdWd0tWMWNiaUFnSUNBZ0lITmpZV3hsSUQxY2JpQWdJQ0FnSUNBZ0tFMWhkR2d1Wm14dmIzSW9LR05zZFhOMFpYSXVaMlYwUTJocGJHUkRiM1Z1ZENncElDMGdNU2tnTHlCemRHVndLU0FySURFcElDb2djMk5oYkdWVGRHVndJQ3RjYmlBZ0lDQWdJQ0FnTUM0M05WeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdUQzVrYVhaSlkyOXVLSHRjYmlBZ0lDQWdJR2gwYld3NklHQmNiaUFnSUNBZ0lDQThaR2wyWEc0Z0lDQWdJQ0FnSUhOMGVXeGxQVndpWEc0Z0lDQWdJQ0FnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTlRBbE8xeHVJQ0FnSUNBZ0lDQWdJSEJ2YzJsMGFXOXVPaUJ5Wld4aGRHbDJaVHRjYmlBZ0lDQWdJQ0FnSUNCM2FXUjBhRG9nTlRCd2VEdGNiaUFnSUNBZ0lDQWdJQ0JvWldsbmFIUTZJRFV3Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdkSEpoYm5ObWIzSnRPaUJ6WTJGc1pUTmtLQ1I3YzJOaGJHVjlMQ0FrZTNOallXeGxmU3dnTVNsY2JpQWdJQ0FnSUNBZ1hDSmNiaUFnSUNBZ0lDQWdQbHh1SUNBZ0lDQWdJQ0E4WkdsMlhHNGdJQ0FnSUNBZ0lDQWdjM1I1YkdVOVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUdKdmNtUmxjaTF5WVdScGRYTTZJRFV3SlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0poWTJ0bmNtOTFibVE2SUNSN2JHbG5hSFJsYmloamIyeHZjaWw5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdkMmxrZEdnNklEVXdjSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm9aV2xuYUhRNklEVXdjSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZjR0ZqYVhSNU9pQXdMamM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGIzQTZJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaV1owT2lBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJK1hHNGdJQ0FnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ0FnSUNBOFpHbDJYRzRnSUNBZ0lDQWdJQ0FnYzNSNWJHVTlYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURVd0pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKaFkydG5jbTkxYm1RNklDUjdZMjlzYjNKOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYjNCaFkybDBlVG9nTUM0NE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZJRE15Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JvWldsbmFIUTZJRE15Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhKbmFXNDZJRGx3ZUR0Y2JpQWdJQ0FnSUNBZ0lDQmNJajVjYmlBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJRHhrYVhaY2JpQWdJQ0FnSUNBZ0lDQnpkSGxzWlQxY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR2x1WlMxb1pXbG5hSFE2SURNeWNIZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2IzTnBkR2x2YmpvZ1lXSnpiMngxZEdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjNBNklEbHdlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxablE2SURsd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUhkcFpIUm9PaUF6TW5CNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYUdWcFoyaDBPaUF6TW5CNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSTZJSGRvYVhSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2lBeE5IQjRPMXh1SUNBZ0lDQWdJQ0FnSUZ3aVhHNGdJQ0FnSUNBZ0lDQWdQbHh1SUNBZ0lDQWdJQ0FnSUNSN1kyeDFjM1JsY2k1blpYUkRhR2xzWkVOdmRXNTBLQ2w5WEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ1lDeGNiaUFnSUNBZ0lHbGpiMjVUYVhwbE9pQmJOREFzSURRd1hTeGNiaUFnSUNCOUtWeHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdVRzlzZVdkdmJpQm1jbTl0SUNjdUwxQnZiSGxuYjI0blhHNXBiWEJ2Y25RZ1VHOXNlV2R2Ym5OTVlYbGxjaXdnZXlCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1eklIMGdabkp2YlNBbkxpOVFiMng1WjI5dWMweGhlV1Z5SjF4dWFXMXdiM0owSUhzZ1JHRjBZVXhwYzNSSmRHVnRMQ0JEYUdGdWJtVnNSblZ1WXlCOUlHWnliMjBnSnk0dUwyUmxabWx1YVhScGIyNXpKMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkhjbWxrYzB4aGVXVnlJR1Y0ZEdWdVpITWdVRzlzZVdkdmJuTk1ZWGxsY2lCN1hHNGdJSEJ5YVhaaGRHVWdjSEp2Y0UxaGVFeGxibWQwYURvZ2JuVnRZbVZ5WEc0Z0lHTnZibk4wY25WamRHOXlLRnh1SUNBZ0lHMWhjRG9nVEM1TllYQXNYRzRnSUNBZ1pHRjBZVXhwYzNRNklFUmhkR0ZNYVhOMFNYUmxiVnRkTEZ4dUlDQWdJRzl3ZEdsdmJuTTZJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJSE4xY0dWeUtHMWhjQ3dnWkdGMFlVeHBjM1FzSUc5d2RHbHZibk1zSUdOb1lXNXVaV3hHZFc1aktWeHVJQ0FnSUhSb2FYTXVjSEp2Y0UxaGVFeGxibWQwYUNBOUlDMHhYRzRnSUgxY2JpQWdjSFZpYkdsaklISmxaSEpoZHlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxteGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhoZVdWeUxuSmxiVzkyWlNncFhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWJHRjVaWElnUFNCMGFHbHpMbU52Ym1acFowZHlhV1JNWVhsbGNpZ3BYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNBdkx5QjBiMjlzZEdsd0lPYWNpZVdQcitpRHZlbWNnT2ltZ2VlYnRPYU9wZVd4bGVla3V1KzhqT21jZ09pbWdlV2NxQ0J3YjJ4NVoyOXVJT2EzdStXS29PV0lzT1djc09XYnZ1UzRpdVM1aStXUWp1YUpqZVdQcitTN3BlKzhqT2FKZ09TN3BlbWNnT2ltZ2VXN3R1aS9uK2l1dnVlOXJseHVJQ0FnSUhSb2FYTXVZMjl1Wm1sblZHOXZiSFJwY0NncFhHNGdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEc0Z0lDQWdJQ0IwYUdsekxucHZiMjFJWVc1a2JHVnlLQ2xjYmlBZ0lDQjlMQ0F5TURBcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhOY2JpQWdmVnh1SUNCd2RXSnNhV01nZEc5bloyeGxWRzl2YkhScGNDaDJhWE5wWW14bE9pQmliMjlzWldGdUtTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjeTVtYjNKRllXTm9LQ2h3YjJ4NVoyOXVLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9jRzlzZVdkdmJpNW5aWFJVYjI5c2RHbHdLQ2twSUh0Y2JpQWdJQ0FnSUNBZ2NHOXNlV2R2Ymk1blpYUlViMjlzZEdsd0tDa3VjMlYwVDNCaFkybDBlU2gyYVhOcFlteGxJRDhnTVNBNklEQXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndjbTkwWldOMFpXUWdhVzVwZEVWMlpXNTBLQ2tnZTF4dUlDQWdJSFJvYVhNdWJXRndMbTl1S0NkNmIyOXRKeXdnZEdocGN5NTZiMjl0U0dGdVpHeGxjaTVpYVc1a0tIUm9hWE1wS1Z4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTI5dVptbG5WRzl2YkhScGNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQk5ZWGhNWlc1bmRHZ2dQU0IwYUdsekxtZGxkRkJ5YjNCTllYaE1aVzVuZEdnb0tWeHVJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjRUYwZEhJcElIdGNiaUFnSUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQndiMng1WjI5dUxtSnBibVJVYjI5c2RHbHdLSFJvYVhNdVoyVjBWRzl2YkZScGNFTnZiblJsYm5Rb2NHOXNlV2R2Ymk1blpYUkVZWFJoS0NrcExDQjdYRzRnSUNBZ0lDQWdJQ0FnY0dWeWJXRnVaVzUwT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUdScGNtVmpkR2x2YmpvZ0oyTmxiblJsY2ljc1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndjbWwyWVhSbElHTnZibVpwWjBkeWFXUk1ZWGxsY2lncElIdGNiaUFnSUNCMGFHbHpMbkJ2YkhsbmIyNU1ZWGxsY2lBOUlFd3ViR0Y1WlhKSGNtOTFjQ2dwWEc0Z0lDQWdkR2hwY3k1d2IyeDVaMjl1Y3lBOUlIUm9hWE11Y0c5c2VXZHZibk11YldGd0tDaHdiMng1WjI5dUtTQTlQaUI3WEc0Z0lDQWdJQ0JzWlhRZ1kyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZMjlzYjNKY2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlVRzlzZVdkdmJrTnZiRzl5Vkhsd1pTQTlQVDBnSjNObFoyMWxiblJsWkNjcElIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJZ1BTQjBhR2x6TG1kbGRGTmxaMjFsYm5SbFpGQnZiSGxuYjI1RGIyeHZjaWh3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR052Ym5OMElHOXdkR2x2Ym5NNklFd3VVRzlzZVd4cGJtVlBjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2dkR2hwY3k1dmNIUnBiMjV6TENCN1hHNGdJQ0FnSUNBZ0lHTnZiRzl5TEZ4dUlDQWdJQ0FnZlNsY2JpQWdJQ0FnSUM4dklPbUhqZWFXc09XNmxPZVVxQ0J2Y0hScGIyNXpYRzRnSUNBZ0lDQmpiMjV6ZENCdVpYZFFiMng1WjI5dUlEMGdibVYzSUZCdmJIbG5iMjRvY0c5c2VXZHZiaTVuWlhSTVlYUk1ibWR6S0Nrc0lHOXdkR2x2Ym5NcFhHNGdJQ0FnSUNCdVpYZFFiMng1WjI5dUxuTmxkRVJoZEdFb2NHOXNlV2R2Ymk1blpYUkVZWFJoS0NrcFhHNGdJQ0FnSUNCdVpYZFFiMng1WjI5dUxtOXVLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdMeThnZEdocGN5NXdiMng1WjI5dVEyeHBZMnRJWVc1a2JHVnlLSEJ2YkhsbmIyNHBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1VHOXNlV2R2Ymk1aWFXNWtVRzl3ZFhBb2RHaHBjeTVuWlhSUWIzQjFjRU52Ym5SbGJuUW9ibVYzVUc5c2VXZHZiaTVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WMGRYSnVJRzVsZDFCdmJIbG5iMjVjYmlBZ0lDQjlLVnh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVUR0Y1WlhJdVlXUmtUR0Y1WlhJb2NHOXNlV2R2YmlsY2JpQWdJQ0I5S1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5CdmJIbG5iMjVNWVhsbGNseHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ2VtOXZiVWhoYm1Sc1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2NHOXNlV2R2YmlBOUlIUm9hWE11Y0c5c2VXZHZibk5iTUYxY2JpQWdJQ0JwWmlBb0lYQnZiSGxuYjI0cElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5SdloyZHNaVlJ2YjJ4MGFYQW9YRzRnSUNBZ0lDQjBhR2x6TG1kbGRGSmxZM1JoYm1kc1pWZHBaSFJvS0hCdmJIbG5iMjRwSUQ1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWlhSVWIyOXNkR2x3VFdGNFYybGtkR2dvZEdocGN5NXdjbTl3VFdGNFRHVnVaM1JvS1Z4dUlDQWdJQ2xjYmlBZ2ZWeHVJQ0J3Y21sMllYUmxJR2RsZEZKbFkzUmhibWRzWlZkcFpIUm9LSEJ2YkhsbmIyNDZJRkJ2YkhsbmIyNHBJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWJHRjBURzVuVkc5TVlYbGxjbEJ2YVc1MEtIQnZiSGxuYjI0dVoyVjBRbTkxYm1SektDa3VaMlYwVG05eWRHaEZZWE4wS0NrcExuZ2dMVnh1SUNBZ0lDQWdkR2hwY3k1dFlYQXViR0YwVEc1blZHOU1ZWGxsY2xCdmFXNTBLSEJ2YkhsbmIyNHVaMlYwUW05MWJtUnpLQ2t1WjJWMFUyOTFkR2hYWlhOMEtDa3BMbmhjYmlBZ0lDQXBYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJVYjI5c2RHbHdUV0Y0VjJsa2RHZ29kR1Y0ZEV4bGJtZDBhRG9nYm5WdFltVnlLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUmxlSFJNWlc1bmRHZ2dLaUF4TWlBcklERTBYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJRY205d1RXRjRUR1Z1WjNSb0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhCeWIzQWdQVnh1SUNBZ0lDQWdkSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElnUFQwOUlDZHpkSEpwYm1jblhHNGdJQ0FnSUNBZ0lEOGdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2x4dUlDQWdJQ0FnSUNBNklIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEl1ZG1Gc2RXVmNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdiMng1WjI5dWMxeHVJQ0FnSUNBZ0xtMWhjQ2dvY0c5c2VXZHZiaWtnUFQ0Z1lDUjdjRzlzZVdkdmJpNW5aWFJFWVhSaEtDbGJjSEp2Y0YxOVlDNXNaVzVuZEdncFhHNGdJQ0FnSUNBdWNtVmtkV05sS0Nod2NtVjJMQ0JqZFhKeUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJOWVhSb0xtMWhlQ2h3Y21WMkxDQmpkWEp5S1Z4dUlDQWdJQ0FnZlN3Z01DbGNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdElIMGdabkp2YlNBbkxpNHZaR1ZtYVc1cGRHbHZibk1uWEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ2YkhsbmIyNGdaWGgwWlc1a2N5Qk1MbEJ2YkhsbmIyNGdlMXh1SUNBdkx5QjBjMnhwYm5RNlpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VNmRtRnlhV0ZpYkdVdGJtRnRaVnh1SUNCd2NtbDJZWFJsSUY5ZlpHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdFhHNGdJR052Ym5OMGNuVmpkRzl5S0Z4dUlDQWdJR3hoZEd4dVozTTZYRzRnSUNBZ0lDQjhJRXd1VEdGMFRHNW5SWGh3Y21WemMybHZibHRkWEc0Z0lDQWdJQ0I4SUV3dVRHRjBURzVuUlhod2NtVnpjMmx2Ymx0ZFcxMWNiaUFnSUNBZ0lId2dUQzVNWVhSTWJtZEZlSEJ5WlhOemFXOXVXMTFiWFZ0ZExGeHVJQ0FnSUc5d2RHbHZibk0vT2lCTUxsQnZiSGxzYVc1bFQzQjBhVzl1YzF4dUlDQXBJSHRjYmlBZ0lDQnpkWEJsY2loc1lYUnNibWR6TENCdmNIUnBiMjV6S1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ6WlhSRVlYUmhLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2tnZTF4dUlDQWdJSFJvYVhNdVgxOWtZWFJoSUQwZ1pHRjBZVnh1SUNCOVhHNGdJSEIxWW14cFl5Qm5aWFJFWVhSaEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlmWkdGMFlWeHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdleUJzYVdkb2RHVnVMQ0JrWVhKclpXNHNJRzl3ZEdsdmJuTk5aWEpuWlNCOUlHWnliMjBnSnk0dUwzVjBhV3h6TDJsdVpHVjRKMXh1YVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdExDQkRhR0Z1Ym1Wc1JuVnVZeUI5SUdaeWIyMGdKeTR1TDJSbFptbHVhWFJwYjI1ekoxeHVhVzF3YjNKMElGQnZiSGxuYjI0Z1puSnZiU0FuTGk5UWIyeDVaMjl1SjF4dVhHNHZLaW9nNXJpeTVwK1Q2YUtjNklteTVxQzM1YnlQSU9XTmxlaUpzbnpsaUlibXJyVWdLaTljYm5SNWNHVWdVRzlzZVdkdmJreGhlV1Z5VW1WdVpHVnlRMjlzYjNKVWVYQmxJRDBnSjNOcGJtZHNaU2NnZkNBbmMyVm5iV1Z1ZEdWa0p5QjhJQ2RqYkdGemMybG1hV1ZrSjF4dWRIbHdaU0JEYjJ4dmNrMXZaR1VnUFNBblpHRnlhMlZ1SnlCOElDZHNhV2RvZEdWdUp5QjhJQ2R1YjNKdFlXd25YRzVjYm1OdmJuTjBJRVJGUmtGVlRGUmZRMDlNVDFJZ1BTQW5JemN5UVVaRVJpZGNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdVRzlzZVdkdmJreGhlV1Z5VDNCMGFXOXVjeUJsZUhSbGJtUnpJRXd1VUc5c2VXeHBibVZQY0hScGIyNXpJSHRjYmlBZ2NtVnVaR1Z5VUc5c2VXZHZia052Ykc5eVZIbHdaVG9nVUc5c2VXZHZia3hoZVdWeVVtVnVaR1Z5UTI5c2IzSlVlWEJsWEc1Y2JpQWdMeW9xSUhCdmNIVndJT1d4bGVla3V1V3RsK2F1dFNBcUwxeHVJQ0J3YjNCMWNFRjBkSEkvT2lCemRISnBibWNnZkNCN0lHeGhZbVZzT2lCemRISnBibWM3SUhaaGJIVmxPaUJoYm5rZ2ZWeHVJQ0F2S2lvZ2RHOXZiSFJwY0NEbHNaWG5wTHJsclpmbXJyVWdLaTljYmlBZ2RHOXZiSFJwY0VGMGRISS9PaUJ6ZEhKcGJtZGNibHh1SUNCdmNHRmphWFI1UHpvZ2JuVnRZbVZ5WEc1Y2JpQWdMeW9xSU9XSWh1YXV0ZWE0c3VhZmsrZTduK2l1b2VXdGwrYXV0U0FxTDF4dUlDQnpaV2R0Wlc1MFpXUkJkSFJ5UHpvZ2MzUnlhVzVuWEc0Z0lITmxaMjFsYm5SbFpFTnZiRzl5Y3o4NklITjBjbWx1WjF0ZFhHNWNiaUFnTHlvcUlPV0lodWV4dStXZWkrYTRzdWFmaytlN24raXVvZVd0bCthdXRTQXFMMXh1SUNCamJHRnpjMmxtYVdWa1FYUjBjajg2SUhOMGNtbHVaMXh1SUNCamJHRnpjMmxtYVdWa1EyOXNiM0p6UHpvZ2MzUnlhVzVuVzExY2JuMWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmJIbG5iMjV6VEdGNVpYSWdlMXh1SUNCd2RXSnNhV01nZEhsd1pUb2djM1J5YVc1blhHNWNiaUFnY0hKdmRHVmpkR1ZrSUhacGMybGliR1U2SUdKdmIyeGxZVzVjYmlBZ2NISnZkR1ZqZEdWa0lHeGhlV1Z5T2lCTUxreGhlV1Z5UjNKdmRYQmNibHh1SUNCd2NtOTBaV04wWldRZ2JXRndPaUJNTGsxaGNGeHVJQ0J3Y205MFpXTjBaV1FnWkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRYRzRnSUhCeWIzUmxZM1JsWkNCdmNIUnBiMjV6T2lCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1elhHNGdJSEJ5YjNSbFkzUmxaQ0JqYUdGdWJtVnNSblZ1WXpvZ1EyaGhibTVsYkVaMWJtTmNiaUFnY0hKdmRHVmpkR1ZrSUhObFoyMWxiblJsWkUxcGJqb2diblZ0WW1WeVhHNGdJSEJ5YjNSbFkzUmxaQ0J6WldkdFpXNTBaV1JUZEdWd09pQnVkVzFpWlhKY2JpQWdjSEp2ZEdWamRHVmtJSEJ2YkhsbmIyNXpPaUJRYjJ4NVoyOXVXMTFjYmlBZ2NISnZkR1ZqZEdWa0lHWnZZM1Z6WldSUWIyeDVaMjl1T2lCUWIyeDVaMjl1WEc0Z0lIQnliM1JsWTNSbFpDQm1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbG5iMjQ2SUZCdmJIbG5iMjVjYmlBZ2NISnZkR1ZqZEdWa0lIQnZiSGxuYjI1TVlYbGxjam9nVEM1TVlYbGxja2R5YjNWd1hHNWNiaUFnTHlvcUlPaXVzT1c5bGVhZmtPUzRxaUJ3Y205d0lPV3Z1ZVc2bE9lYWhPYTRzdWFmayttaW5PaUpzaUFxTDF4dUlDQndjbWwyWVhSbElHTnNZWE56YVdaNVEyOXNiM0pOWVhBNklIc2dXM0J5YjNBNklITjBjbWx1WjEwNklITjBjbWx1WnlCOVhHNGdJQzhxS2lEbGlJYm5zYnZtdUxMbW41UHBvcHpvaWJMbGo0TG5oYWNvNW8rUTVMNmI1N3VaNkxDRDU1U282SUNGNUwyLzU1U29LU0FxTDF4dUlDQndjbWwyWVhSbElHTnNZWE56YVdaNVEyOXNiM0pTWldaek9pQkJjbkpoZVR4N1hHNGdJQ0FnWVhSMGNqb2djM1J5YVc1blhHNGdJQ0FnWTI5c2IzSTZJSE4wY21sdVoxeHVJQ0FnSUc1MWJYTTZJRzUxYldKbGNseHVJQ0I5UGx4dUlDQndjbWwyWVhSbElHUmxabUYxYkhSUGNIUnBiMjV6T2lCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1elhHNGdJR052Ym5OMGNuVmpkRzl5S0Z4dUlDQWdJRzFoY0RvZ1RDNU5ZWEFzWEc0Z0lDQWdaR0YwWVV4cGMzUTZJRVJoZEdGTWFYTjBTWFJsYlZ0ZExGeHVJQ0FnSUc5d2RHbHZibk02SUZCdmJIbG5iMjVNWVhsbGNrOXdkR2x2Ym5Nc1hHNGdJQ0FnWTJoaGJtNWxiRVoxYm1NNklFTm9ZVzV1Wld4R2RXNWpYRzRnSUNrZ2UxeHVJQ0FnSUdsbUlDZ2hRWEp5WVhrdWFYTkJjbkpoZVNoa1lYUmhUR2x6ZENrZ2ZId2daR0YwWVV4cGMzUXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWUdSaGRHRk1hWE4wSU9XL2hlbWh1K2FZcittZG51ZXB1dWFWc09lN2hHQXBYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHaHBjeTVrWldaaGRXeDBUM0IwYVc5dWN5QTlJSHRjYmlBZ0lDQWdJSEJ2Y0hWd1FYUjBjam9nZXlCc1lXSmxiRG9nSitXUWplZW5zQ2NzSUhaaGJIVmxPaUFuYm1GdFpTY2dmU3hjYmlBZ0lDQWdJSFJ2YjJ4MGFYQkJkSFJ5T2lBbmJtRnRaU2NzWEc0Z0lDQWdJQ0JqYjJ4dmNqb2dSRVZHUVZWTVZGOURUMHhQVWl4Y2JpQWdJQ0FnSUdacGJHdzZJSFJ5ZFdVc1hHNGdJQ0FnSUNCbWFXeHNRMjlzYjNJNklFUkZSa0ZWVEZSZlEwOU1UMUlzWEc0Z0lDQWdJQ0IzWldsbmFIUTZJREVzWEc0Z0lDQWdJQ0J2Y0dGamFYUjVPaUF4TEZ4dUlDQWdJQ0FnWm1sc2JFOXdZV05wZEhrNklEQXVOQ3hjYmlBZ0lDQWdJSEpsYm1SbGNsQnZiSGxuYjI1RGIyeHZjbFI1Y0dVNklDZHphVzVuYkdVbkxGeHVJQ0FnSUNBZ2MyVm5iV1Z1ZEdWa1EyOXNiM0p6T2lCYlJFVkdRVlZNVkY5RFQweFBVbDBzWEc0Z0lDQWdJQ0JqYkdGemMybG1hV1ZrUTI5c2IzSnpPaUJiUkVWR1FWVk1WRjlEVDB4UFVsMHNYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVkSGx3WlNBOUlDZHdiMng1WjI5dUoxeHVJQ0FnSUhSb2FYTXViV0Z3SUQwZ2JXRndYRzRnSUNBZ2RHaHBjeTVrWVhSaFRHbHpkQ0E5SUdSaGRHRk1hWE4wWEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ2IzQjBhVzl1YzAxbGNtZGxLRnh1SUNBZ0lDQWdkR2hwY3k1a1pXWmhkV3gwVDNCMGFXOXVjeXhjYmlBZ0lDQWdJRzl3ZEdsdmJuTmNiaUFnSUNBcElHRnpJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk5jYmlBZ0lDQjBhR2x6TG1Ob1lXNXVaV3hHZFc1aklEMGdZMmhoYm01bGJFWjFibU5jYmx4dUlDQWdJSFJvYVhNdWRtbHphV0pzWlNBOUlIUnlkV1ZjYmlBZ0lDQjBhR2x6TG5CdmJIbG5iMjV6SUQwZ1cxMWNiaUFnSUNCMGFHbHpMbk5sWjIxbGJuUmxaRTFwYmlBOUlFbHVabWx1YVhSNVhHNGdJQ0FnZEdocGN5NXpaV2R0Wlc1MFpXUlRkR1Z3SUQwZ01WeHVJQ0FnSUhSb2FYTXVZMnhoYzNOcFpubERiMnh2Y2sxaGNDQTlJSHQ5WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrVUc5c2VXZHZiaUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV2R2YmlBOUlHNTFiR3hjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaSEpoZHlodmNIUnBiMjV6UHpvZ1VHOXNlV2R2Ymt4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YVc1cGRFOXdkR2x2Ym5Nb2IzQjBhVzl1Y3lsY2JpQWdJQ0IwYUdsekxtbHVhWFJRYjJ4NVoyOXVjeWdwWEc0Z0lDQWdkR2hwY3k1cGJtbDBSWFpsYm5Rb0tWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxaSEpoZHlncFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhKbFpISmhkeWdwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11ZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGhlV1Z5TG5KbGJXOTJaU2dwWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11YkdGNVpYSWdQU0IwYUdsekxtTnZibVpwWjFCdmJIbG5iMjVNWVhsbGNpZ3BYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCeVpYUjFjbTRnZEdocGMxeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCbWFYUkNiM1Z1WkhNb0tTQjdYRzRnSUNBZ2RHaHBjeTV0WVhBdVptbDBRbTkxYm1SektIUm9hWE11WjJWMFFtOTFibVJ6S0Nrc0lIc2djR0ZrWkdsdVp6b2dXekl3TENBeU1GMGdmU2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMlYwUW05MWJtUnpLQ2s2SUV3dVRHRjBURzVuUW05MWJtUnpSWGh3Y21WemMybHZiaUI3WEc0Z0lDQWdhV1lnS0hSb2FYTXVjRzlzZVdkdmJuTXViR1Z1WjNSb0lEdzlJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtMWhjQzVuWlhSQ2IzVnVaSE1vS1Z4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3YjJ4NVoyOXVjeTV5WldSMVkyVW9YRzRnSUNBZ0lDQW9jSEpsZGl3Z1kzVnljaWtnUFQ0Z2NISmxkaTVsZUhSbGJtUW9ZM1Z5Y2k1blpYUkNiM1Z1WkhNb0tTa3NYRzRnSUNBZ0lDQk1MbXhoZEV4dVowSnZkVzVrY3loY2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjMXN3WFM1blpYUkNiM1Z1WkhNb0tTNW5aWFJPYjNKMGFFVmhjM1FvS1N4Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjMXN3WFM1blpYUkNiM1Z1WkhNb0tTNW5aWFJUYjNWMGFGZGxjM1FvS1Z4dUlDQWdJQ0FnS1Z4dUlDQWdJQ2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaR1Z6ZEhKdmVTZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXNZWGxsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWNtVnRiM1psVEdGNVpYSW9kR2hwY3k1c1lYbGxjaWxjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV2R2YmlsY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY0hWaWJHbGpJSFJ2WjJkc1pWWnBjMmxpYkdVb2RtbHphV0pzWlRvZ1ltOXZiR1ZoYmlrZ2UxeHVJQ0FnSUhSb2FYTXVkbWx6YVdKc1pTQTlJSFpwYzJsaWJHVmNiaUFnSUNCcFppQW9JWFJvYVhNdWJHRjVaWElwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVZV1JrVEdGNVpYSW9kR2hwY3k1c1lYbGxjaWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2FXWWdLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsUWIyeDVaMjl1TG5KbGJXOTJaU2dwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgxY2JpQWdmVnh1SUNCd2RXSnNhV01nWTJoaGJtZGxRMjlzYjNJb1kyOXNiM0k2SUhOMGNtbHVaeWtnZTF4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3k1bWFXeHNRMjlzYjNJZ1BTQmpiMnh2Y2x4dUlDQWdJSFJvYVhNdWNtVmtjbUYzS0NsY2JpQWdmVnh1SUNCd2RXSnNhV01nY0dsMFkyZ29hV1E2SUhOMGNtbHVaeWtnZTF4dUlDQWdJSFJvYVhNdWNHOXNlV2R2Ym5NdVptOXlSV0ZqYUNnb2NHOXNlV2R2YmlrZ1BUNGdlMXh1SUNBZ0lDQWdhV1lnS0hCdmJIbG5iMjR1WjJWMFJHRjBZU2dwTG1sa0lEMDlQU0JwWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CdmJIbG5iMjVEYkdsamEwaGhibVJzWlhJb2NHOXNlV2R2Yml3Z2RISjFaU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1oyVjBRMnhoYzNOcFpubERiMnh2Y2xKbFpuTW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WTJ4aGMzTnBabmxEYjJ4dmNsSmxabk5jYmlBZ2ZWeHVJQ0F2THlCMGMyeHBiblE2WkdsellXSnNaUzF1WlhoMExXeHBibVU2Ym04dFpXMXdkSGxjYmlBZ2NISnZkR1ZqZEdWa0lHbHVhWFJGZG1WdWRDZ3BJSHQ5WEc0Z0lIQnliM1JsWTNSbFpDQm5aWFJVYjI5c1ZHbHdRMjl1ZEdWdWRDaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQnlaWFIxY200Z0p5Y2dLeUJrWVhSaFczUm9hWE11YjNCMGFXOXVjeTUwYjI5c2RHbHdRWFIwY2wxY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1oyVjBVRzl3ZFhCRGIyNTBaVzUwS0dSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlNrZ2UxeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUNjblhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGVYQmxiMllnZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJnSkh0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlmVG9nSkh0a1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhKZGZXQmNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCMGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlJRDA5UFNBbmIySnFaV04wSnlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdBa2UzUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEl1YkdGaVpXeDlPaUFrZTF4dUlDQWdJQ0FnSUNCa1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJdWRtRnNkV1ZkWEc0Z0lDQWdJQ0I5WUZ4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWTJGamFHVkRiR0Z6YzJsbWVWQmhjbUZ0Y3lncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWIzQjBhVzl1Y3k1amJHRnpjMmxtYVdWa1FYUjBjaWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1kyOXVjM1FnZEcxd09pQjdJRnR3Y205d09pQnpkSEpwYm1kZE9pQmJjM1J5YVc1bkxDQnVkVzFpWlhKZElIMGdQU0I3ZlZ4dUlDQWdJR052Ym5OMElIQnliM0FnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZMnhoYzNOcFptbGxaRUYwZEhKY2JpQWdJQ0IwYUdsekxtUmhkR0ZNYVhOMExtWnZja1ZoWTJnb0tHUmhkR0VwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2hrWVhSaFczQnliM0JkSUdsdUlIUnRjQ2tnZTF4dUlDQWdJQ0FnSUNCMGJYQmJaR0YwWVZ0d2NtOXdYVjBnUFNCYlpHRjBZVnR3Y205d1hTd2dkRzF3VzJSaGRHRmJjSEp2Y0YxZFd6RmRJQ3NnTVYxY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhSdGNGdGtZWFJoVzNCeWIzQmRYU0E5SUZ0a1lYUmhXM0J5YjNCZExDQXhYVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBYRzRnSUNBZ1kyOXVjM1FnZG1Gc2RXVnpJRDBnVDJKcVpXTjBMblpoYkhWbGN5aDBiWEFwWEc0Z0lDQWdkbUZzZFdWekxuTnZjblFvS0dFc0lHSXBJRDArSUdKYk1WMGdMU0JoV3pGZEtWeHVJQ0FnSUhSb2FYTXVZMnhoYzNOcFpubERiMnh2Y2xKbFpuTWdQU0JiWFZ4dUlDQWdJSFpoYkhWbGN5NW1iM0pGWVdOb0tDaGJZWFIwY2l3Z2JuVnRjMTBzSUdsdVpHVjRLU0E5UGlCN1hHNGdJQ0FnSUNCc1pYUWdZMjlzYjNJZ1BTQW5ZbXhoWTJzblhHNGdJQ0FnSUNCcFppQW9hVzVrWlhnZ1BDQjBhR2x6TG05d2RHbHZibk11WTJ4aGMzTnBabWxsWkVOdmJHOXljeTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSWdQU0IwYUdsekxtOXdkR2x2Ym5NdVkyeGhjM05wWm1sbFpFTnZiRzl5YzF0cGJtUmxlRjFjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSFJvYVhNdVkyeGhjM05wWm5sRGIyeHZjazFoY0Z0aGRIUnlYU0E5SUdOdmJHOXlYRzRnSUNBZ0lDQjBhR2x6TG1Oc1lYTnphV1o1UTI5c2IzSlNaV1p6TG5CMWMyZ29lMXh1SUNBZ0lDQWdJQ0JoZEhSeUxGeHVJQ0FnSUNBZ0lDQmpiMnh2Y2l4Y2JpQWdJQ0FnSUNBZ2JuVnRjeXhjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdmU2xjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWjJWMFEyeGhjM05wWm5sUWIyeDVaMjl1UTI5c2IzSW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqYkdGemMybG1lVU52Ykc5eVRXRndXMlJoZEdGYmRHaHBjeTV2Y0hScGIyNXpMbU5zWVhOemFXWnBaV1JCZEhSeVhWMWNiaUFnZlZ4dUlDQndjbTkwWldOMFpXUWdZMkZqYUdWVFpXZHRaVzUwVUdGeVlXMXpLQ2tnZTF4dUlDQWdJR052Ym5OMElITmxaMjFsYm5SbFpFeGxibWQwYUNBOUlIUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JEYjJ4dmNuTXViR1Z1WjNSb1hHNGdJQ0FnYkdWMElHMWhlRlpoYkNBOUlDMUpibVpwYm1sMGVWeHVJQ0FnSUd4bGRDQnRhVzVXWVd3Z1BTQkpibVpwYm1sMGVWeHVJQ0FnSUdadmNpQW9ZMjl1YzNRZ1pHRjBZU0J2WmlCMGFHbHpMbVJoZEdGTWFYTjBLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQjJZV3dnUFNCa1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSQmRIUnlYVnh1SUNBZ0lDQWdiV0Y0Vm1Gc0lEMGdUV0YwYUM1dFlYZ29iV0Y0Vm1Gc0xDQjJZV3dwWEc0Z0lDQWdJQ0J0YVc1V1lXd2dQU0JOWVhSb0xtMXBiaWh0YVc1V1lXd3NJSFpoYkNsY2JpQWdJQ0I5WEc0Z0lDQWdZMjl1YzNRZ2MzUmxjQ0E5SUNodFlYaFdZV3dnTFNCdGFXNVdZV3dnS3lBeEtTQXZJSE5sWjIxbGJuUmxaRXhsYm1kMGFGeHVJQ0FnSUhSb2FYTXVjMlZuYldWdWRHVmtUV2x1SUQwZ2JXbHVWbUZzWEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSVGRHVndJRDBnYzNSbGNGeHVJQ0I5WEc0Z0lIQnliM1JsWTNSbFpDQm5aWFJUWldkdFpXNTBaV1JRYjJ4NVoyOXVRMjlzYjNJb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtUb2djM1J5YVc1bklIdGNiaUFnSUNCamIyNXpkQ0IyWVd3Z1BTQmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkJkSFJ5WFZ4dUlDQWdJR052Ym5OMElHTnZiRzl5SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbk5sWjIxbGJuUmxaRU52Ykc5eWMxdGNiaUFnSUNBZ0lIQmhjbk5sU1c1MEtDY25JQ3NnS0haaGJDQXRJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVLU0F2SUhSb2FYTXVjMlZuYldWdWRHVmtVM1JsY0N3Z01UQXBYRzRnSUNBZ1hWeHVJQ0FnSUhKbGRIVnliaUJqYjJ4dmNseHVJQ0I5WEc0Z0lIQnliM1JsWTNSbFpDQndiMng1WjI5dVEyeHBZMnRJWVc1a2JHVnlLSEJ2YkhsbmIyNDZJRkJ2YkhsbmIyNHNJR1pwZEVKdmRXNWtjejg2SUdKdmIyeGxZVzRwSUh0Y2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSUWIyeDVaMjl1SUQwZ2NHOXNlV2R2Ymx4dUlDQWdJQzh2SU9XSW9PbVpwT1dKamVTNGdPUzRxaUJtYjJOMWMxeHVJQ0FnSUdsbUlDaDBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVVRzlzZVdkdmJpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2YkhsbmIyNHVjbVZ0YjNabEtDbGNiaUFnSUNCOVhHNGdJQ0FnTHk4ZzU1U2Y1b2lRNWIyVDVZbU5JR1p2WTNWelhHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbG5iMjRnUFNCdVpYY2dVRzlzZVdkdmJpaHdiMng1WjI5dUxtZGxkRXhoZEV4dVozTW9LU3dnZTF4dUlDQWdJQ0FnWTI5c2IzSTZJRVJGUmtGVlRGUmZRMDlNVDFJc1hHNGdJQ0FnSUNCbWFXeHNRMjlzYjNJNklIUm9hWE11WjJWMFEyOXNiM0lvY0c5c2VXZHZiaTVuWlhSRVlYUmhLQ2twTEZ4dUlDQWdJSDBwWEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2YkhsbmIyNHVZV1JrVkc4b2RHaHBjeTV0WVhBcFhHNWNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV2R2Ymx4dUlDQWdJQ0FnTG1KcGJtUlFiM0IxY0NoMGFHbHpMbWRsZEZCdmNIVndRMjl1ZEdWdWRDaHdiMng1WjI5dUxtZGxkRVJoZEdFb0tTa3BYRzRnSUNBZ0lDQXViM0JsYmxCdmNIVndLQ2xjYmx4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVMbTl1S0Nkd2IzQjFjR05zYjNObEp5d2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0dWNtVnRiM1psS0NsY2JpQWdJQ0I5S1Z4dUlDQWdJSEJ2YkhsbmIyNHVZMnh2YzJWVWIyOXNkR2x3S0NsY2JseHVJQ0FnSUhSb2FYTXViV0Z3TG5CaGJsUnZLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVMbWRsZEVObGJuUmxjaWdwS1Z4dUlDQWdJR2xtSUNobWFYUkNiM1Z1WkhNcElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xtWnBkRUp2ZFc1a2N5aHdiMng1WjI5dUxtZGxkRUp2ZFc1a2N5Z3BLVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbU5vWVc1dVpXeEdkVzVqS0NkdmJpMWpiR2xqYXkxd2IyeDVaMjl1Snl3Z2NHOXNlV2R2YmlsY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ2FXNXBkRTl3ZEdsdmJuTW9iM0IwYVc5dWN6b2dVRzlzZVdkdmJreGhlV1Z5VDNCMGFXOXVjeWtnZTF4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5OTlpYSm5aU2hjYmlBZ0lDQWdJSFJvYVhNdVpHVm1ZWFZzZEU5d2RHbHZibk1zWEc0Z0lDQWdJQ0IwYUdsekxtOXdkR2x2Ym5Nc1hHNGdJQ0FnSUNCdmNIUnBiMjV6WEc0Z0lDQWdLU0JoY3lCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1elhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lHbHVhWFJRYjJ4NVoyOXVjeWdwSUh0Y2JpQWdJQ0F2THlEbnZKUGxyWmdnYzJWbmJXVnVkQ0RubTdqbGhiUG1sYkRtamE1Y2JpQWdJQ0IwYUdsekxtTmhZMmhsVTJWbmJXVnVkRkJoY21GdGN5Z3BYRzRnSUNBZ2RHaHBjeTVqWVdOb1pVTnNZWE56YVdaNVVHRnlZVzF6S0NsY2JpQWdJQ0IwYUdsekxuQnZiSGxuYjI1eklEMGdXMTFjYmlBZ0lDQjBhR2x6TG1SaGRHRk1hWE4wTG1admNrVmhZMmdvS0dSaGRHRXBJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR3hoZVdWeUlEMGdUQzVuWlc5S1UwOU9LR1JoZEdFdVoyVnZiV1YwY25rcExtZGxkRXhoZVdWeWN5Z3BXekJkWEc0Z0lDQWdJQ0JqYjI1emRDQndiMng1WjI5dUlEMGdibVYzSUZCdmJIbG5iMjRvS0d4aGVXVnlJR0Z6SUV3dVVHOXNlV2R2YmlrdVoyVjBUR0YwVEc1bmN5Z3BLVnh1WEc0Z0lDQWdJQ0J3YjJ4NVoyOXVMbk5sZEVSaGRHRW9aR0YwWVNsY2JpQWdJQ0FnSUhSb2FYTXVjRzlzZVdkdmJuTXVjSFZ6YUNod2IyeDVaMjl1S1Z4dUlDQWdJSDBwWEc0Z0lIMWNiaUFnY0hKcGRtRjBaU0JqYjI1bWFXZFFiMng1WjI5dVRHRjVaWElvS1NCN1hHNGdJQ0FnZEdocGN5NXdiMng1WjI5dVRHRjVaWElnUFNCTUxteGhlV1Z5UjNKdmRYQW9LVnh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZibk1nUFNCMGFHbHpMbkJ2YkhsbmIyNXpMbTFoY0Nnb2NHOXNlV2R2YmlrZ1BUNGdlMXh1SUNBZ0lDQWdZMjl1YzNRZ2IzQjBhVzl1Y3pvZ1RDNVFiMng1YkdsdVpVOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1elRXVnlaMlVvZTMwc0lIUm9hWE11YjNCMGFXOXVjeXdnZTF4dUlDQWdJQ0FnSUNCamIyeHZjam9nUkVWR1FWVk1WRjlEVDB4UFVpeGNiaUFnSUNBZ0lDQWdabWxzYkVOdmJHOXlPaUIwYUdsekxtZGxkRU52Ykc5eUtIQnZiSGxuYjI0dVoyVjBSR0YwWVNncEtTeGNiaUFnSUNBZ0lIMHBYRzRnSUNBZ0lDQXZMeURwaDQzbWxyRGx1cFRubEtnZ2IzQjBhVzl1YzF4dUlDQWdJQ0FnWTI5dWMzUWdibVYzVUc5c2VXZHZiaUE5SUc1bGR5QlFiMng1WjI5dUtIQnZiSGxuYjI0dVoyVjBUR0YwVEc1bmN5Z3BMQ0J2Y0hScGIyNXpLVnh1SUNBZ0lDQWdibVYzVUc5c2VXZHZiaTV6WlhSRVlYUmhLSEJ2YkhsbmIyNHVaMlYwUkdGMFlTZ3BLVnh1SUNBZ0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NTBiMjlzZEdsd1FYUjBjaWtnZTF4dUlDQWdJQ0FnSUNCdVpYZFFiMng1WjI5dUxtSnBibVJVYjI5c2RHbHdLSFJvYVhNdVoyVjBWRzl2YkZScGNFTnZiblJsYm5Rb2JtVjNVRzlzZVdkdmJpNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdibVYzVUc5c2VXZHZiaTV2YmlnblkyeHBZMnNuTENBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjRzlzZVdkdmJrTnNhV05yU0dGdVpHeGxjaWh3YjJ4NVoyOXVLVnh1SUNBZ0lDQWdmU2xjYmlBZ0lDQWdJSEpsZEhWeWJpQnVaWGRRYjJ4NVoyOXVYRzRnSUNBZ2ZTbGNiaUFnSUNCMGFHbHpMbkJ2YkhsbmIyNXpMbVp2Y2tWaFkyZ29LSEJ2YkhsbmIyNHBJRDArSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjRzlzZVdkdmJreGhlV1Z5TG1Ga1pFeGhlV1Z5S0hCdmJIbG5iMjRwWEc0Z0lDQWdmU2xjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3YjJ4NVoyOXVUR0Y1WlhKY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdkbGRFTnZiRzl5S0dSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlN3Z2JXOWtaVDg2SUVOdmJHOXlUVzlrWlNrZ2UxeHVJQ0FnSUd4bGRDQmpiMnh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTVqYjJ4dmNseHVJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlVRzlzZVdkdmJrTnZiRzl5Vkhsd1pTQTlQVDBnSjNObFoyMWxiblJsWkNjcElIdGNiaUFnSUNBZ0lHTnZiRzl5SUQwZ2RHaHBjeTVuWlhSVFpXZHRaVzUwWldSUWIyeDVaMjl1UTI5c2IzSW9aR0YwWVNsY2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIyeDVaMjl1UTI5c2IzSlVlWEJsSUQwOVBTQW5ZMnhoYzNOcFptbGxaQ2NwSUh0Y2JpQWdJQ0FnSUdOdmJHOXlJRDBnZEdocGN5NW5aWFJEYkdGemMybG1lVkJ2YkhsbmIyNURiMnh2Y2loa1lYUmhLVnh1SUNBZ0lIMWNiaUFnSUNCemQybDBZMmdnS0cxdlpHVXBJSHRjYmlBZ0lDQWdJR05oYzJVZ0oyUmhjbXRsYmljNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCa1lYSnJaVzRvWTI5c2IzSXBYRzRnSUNBZ0lDQmpZWE5sSUNkc2FXZG9kR1Z1SnpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUd4cFoyaDBaVzRvWTI5c2IzSXBYRzRnSUNBZ0lDQmtaV1poZFd4ME9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXNiM0pjYmlBZ0lDQjlYRzRnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0I3SUVSaGRHRk1hWE4wU1hSbGJTQjlJR1p5YjIwZ0p5NHVMMlJsWm1sdWFYUnBiMjV6SjF4dVhHNWxlSEJ2Y25RZ2RIbHdaU0JRYjJ4NWJHbHVaVXhoZEV4dVowVjRjSEpsYzNOcGIyNGdQVnh1SUNCOElFd3VUR0YwVEc1blJYaHdjbVZ6YzJsdmJsdGRYRzRnSUh3Z1RDNU1ZWFJNYm1kRmVIQnlaWE56YVc5dVcxMWJYVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHOXNlV3hwYm1VZ1pYaDBaVzVrY3lCTUxsQnZiSGxzYVc1bElIdGNiaUFnTHk4Z2RITnNhVzUwT21ScGMyRmliR1V0Ym1WNGRDMXNhVzVsT25aaGNtbGhZbXhsTFc1aGJXVmNiaUFnY0hKcGRtRjBaU0JmWDJSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlZ4dUlDQmpiMjV6ZEhKMVkzUnZjaWhzWVhSc2JtZHpPaUJRYjJ4NWJHbHVaVXhoZEV4dVowVjRjSEpsYzNOcGIyNHNJRzl3ZEdsdmJuTS9PaUJNTGxCdmJIbHNhVzVsVDNCMGFXOXVjeWtnZTF4dUlDQWdJSE4xY0dWeUtHeGhkR3h1WjNNc0lHOXdkR2x2Ym5NcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhObGRFUmhkR0VvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1NCN1hHNGdJQ0FnZEdocGN5NWZYMlJoZEdFZ1BTQmtZWFJoWEc0Z0lIMWNiaUFnY0hWaWJHbGpJR2RsZEVSaGRHRW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDE5a1lYUmhYRzRnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0I3SUVSaGRHRk1hWE4wU1hSbGJTd2dRMmhoYm01bGJFWjFibU1nZlNCbWNtOXRJQ2N1TGk5a1pXWnBibWwwYVc5dWN5ZGNibWx0Y0c5eWRDQlFiMng1YkdsdVpYTk1ZWGxsY2lCbWNtOXRJQ2N1TDFCdmJIbHNhVzVsYzB4aGVXVnlKMXh1WEc0dktpb2c1cml5NXArVDZhS2M2SW15NXFDMzVieVBJT1dObGVpSnNuemxpSWJtcnJVZ0tpOWNiblI1Y0dVZ1VHOXNlV3hwYm1WTVlYbGxjbEpsYm1SbGNrTnZiRzl5Vkhsd1pTQTlJQ2R6YVc1bmJHVW5JSHdnSjNObFoyMWxiblJsWkNkY2JtbHVkR1Z5Wm1GalpTQlFiMng1YkdsdVpVSjFabVpsY2t4aGVXVnlUM0IwYVc5dWN5QmxlSFJsYm1SeklFd3VRMjl5Y21sa2IzSlBjSFJwYjI1eklIdGNiaUFnY21WdVpHVnlVRzlzZVd4cGJtVkRiMnh2Y2xSNWNHVTZJRkJ2Ykhsc2FXNWxUR0Y1WlhKU1pXNWtaWEpEYjJ4dmNsUjVjR1ZjYmx4dUlDQXZLaW9nY0c5d2RYQWc1YkdWNTZTNjVhMlg1cTYxSUNvdlhHNGdJSEJ2Y0hWd1FYUjBjajg2SUhOMGNtbHVaMXh1SUNBdktpb2dkRzl2YkhScGNDRGxzWlhucExybHJaZm1yclVnS2k5Y2JpQWdkRzl2YkhScGNFRjBkSEkvT2lCemRISnBibWRjYmx4dUlDQnZjR0ZqYVhSNVB6b2diblZ0WW1WeVhHNWNiaUFnTHlvcUlPV0lodWF1dGVhNHN1YWZrK2U3bitpdW9lV3RsK2F1dFNBcUwxeHVJQ0J6WldkdFpXNTBaV1JCZEhSeVB6b2djM1J5YVc1blhHNGdJSE5sWjIxbGJuUmxaRU52Ykc5eWN6ODZJSE4wY21sdVoxdGRYRzU5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFiMng1YkdsdVpYTkNkV1ptWlhKTVlYbGxjaUJsZUhSbGJtUnpJRkJ2Ykhsc2FXNWxjMHhoZVdWeUlIdGNiaUFnY0hWaWJHbGpJSFI1Y0dVNklITjBjbWx1WjF4dUlDQndjbTkwWldOMFpXUWdiM0IwYVc5dWN6b2dVRzlzZVd4cGJtVkNkV1ptWlhKTVlYbGxjazl3ZEdsdmJuTmNiaUFnWTI5dWMzUnlkV04wYjNJb1hHNGdJQ0FnYldGd09pQk1MazFoY0N4Y2JpQWdJQ0JrWVhSaFRHbHpkRG9nUkdGMFlVeHBjM1JKZEdWdFcxMHNYRzRnSUNBZ2IzQjBhVzl1Y3pvZ1VHOXNlV3hwYm1WQ2RXWm1aWEpNWVhsbGNrOXdkR2x2Ym5Nc1hHNGdJQ0FnWTJoaGJtNWxiRVoxYm1NNklFTm9ZVzV1Wld4R2RXNWpYRzRnSUNrZ2UxeHVJQ0FnSUhOMWNHVnlLRzFoY0N3Z1pHRjBZVXhwYzNRc0lHOXdkR2x2Ym5Nc0lHTm9ZVzV1Wld4R2RXNWpLVnh1SUNBZ0lHTnZibk4wSUdSbFptRjFiSFJQY0hScGIyNXpPaUJRYjJ4NWJHbHVaVUoxWm1abGNreGhlV1Z5VDNCMGFXOXVjeUE5SUh0Y2JpQWdJQ0FnSUhKbGJtUmxjbEJ2Ykhsc2FXNWxRMjlzYjNKVWVYQmxPaUFuYzJsdVoyeGxKeXhjYmlBZ0lDQWdJSE5sWjIxbGJuUmxaRU52Ykc5eWN6b2dXeWNqTXpNNE9FWkdKMTBzWEc0Z0lDQWdJQ0JqYjNKeWFXUnZjam9nTVRBd0xGeHVJQ0FnSUNBZ1kyOXNiM0k2SUNjak16TTRPRVpHSnl4Y2JpQWdJQ0FnSUc5d1lXTnBkSGs2SURBdU5TeGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NTBlWEJsSUQwZ0ozQnZiSGxzYVc1bFFuVm1abVZ5SjF4dUlDQWdJSFJvYVhNdWJXRndJRDBnYldGd1hHNGdJQ0FnZEdocGN5NWtZWFJoVEdsemRDQTlJR1JoZEdGTWFYTjBYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpJRDBnYjNCMGFXOXVjMXh1SUNBZ0lIUm9hWE11WTJoaGJtNWxiRVoxYm1NZ1BTQmphR0Z1Ym1Wc1JuVnVZMXh1WEc0Z0lDQWdkR2hwY3k1MmFYTnBZbXhsSUQwZ2RISjFaVnh1SUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZ6SUQwZ1cxMWNiaUFnSUNCMGFHbHpMbk5sWjIxbGJuUmxaRTFwYmlBOUlFbHVabWx1YVhSNVhHNGdJQ0FnZEdocGN5NXpaV2R0Wlc1MFpXUlRkR1Z3SUQwZ01WeHVJQ0FnSUM4dklIUm9hWE11Wm05amRYTmxaRkJ2Ykhsc2FXNWxJRDBnYm5Wc2JGeHVYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDdmU3dnWkdWbVlYVnNkRTl3ZEdsdmJuTXNJRzl3ZEdsdmJuTXBYRzRnSUgxY2JpQWdjSFZpYkdsaklHUnlZWGNvYjNCMGFXOXVjejg2SUZCdmJIbHNhVzVsUW5WbVptVnlUR0Y1WlhKUGNIUnBiMjV6S1NCN1hHNGdJQ0FnZEdocGN5NXZjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloMGFHbHpMbTl3ZEdsdmJuTXNJRzl3ZEdsdmJuTXBYRzRnSUNBZ2RHaHBjeTVwYm1sMFVHOXNlV3hwYm1WektDbGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXlaV1J5WVhjb0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCeVpXUnlZWGNvS1NCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6TG5acGMybGliR1VwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kR2hwY3k1c1lYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXNZWGxsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG14aGVXVnlJRDBnZEdocGN5NWpiMjVtYVdkUWIyeDViR2x1WlVKMVptWmxja3hoZVdWeUtDbGNiaUFnSUNCMGFHbHpMbTFoY0M1aFpHUk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUhKbGRIVnliaUIwYUdselhHNGdJSDFjYmlBZ2NIVmliR2xqSUdacGRFSnZkVzVrY3lncElIdGNiaUFnSUNCMGFHbHpMbTFoY0M1bWFYUkNiM1Z1WkhNb2RHaHBjeTVuWlhSQ2IzVnVaSE1vS1NsY2JpQWdmVnh1SUNCd2RXSnNhV01nWjJWMFFtOTFibVJ6S0NrNklFd3VUR0YwVEc1blFtOTFibVJ6Ulhod2NtVnpjMmx2YmlCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11Y0c5c2VXeHBibVZ6TG14bGJtZDBhQ0E4UFNBd0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV0WVhBdVoyVjBRbTkxYm1SektDbGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNHOXNlV3hwYm1WekxuSmxaSFZqWlNoY2JpQWdJQ0FnSUNod2NtVjJMQ0JqZFhKeUtTQTlQaUJ3Y21WMkxtVjRkR1Z1WkNoamRYSnlMbWRsZEVKdmRXNWtjeWdwS1N4Y2JpQWdJQ0FnSUhSb2FYTXVjRzlzZVd4cGJtVnpXekJkTG1kbGRFSnZkVzVrY3lncFhHNGdJQ0FnS1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJqYUdGdVoyVkRiMnh2Y2loamIyeHZjam9nYzNSeWFXNW5LU0I3WEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6TG1OdmJHOXlJRDBnWTI5c2IzSmNiaUFnSUNCMGFHbHpMbkpsWkhKaGR5Z3BYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQmpiMjVtYVdkUWIyeDViR2x1WlVKMVptWmxja3hoZVdWeUtDa2dlMXh1SUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZNWVhsbGNpQTlJRXd1YkdGNVpYSkhjbTkxY0NncFhHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTXVabTl5UldGamFDZ29jRzlzZVd4cGJtVXBJRDArSUh0Y2JpQWdJQ0FnSUhCdmJIbHNhVzVsTG05dUtDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaVU5zYVdOclNHRnVaR3hsY2lod2IyeDViR2x1WlNsY2JpQWdJQ0FnSUgwcFhHNGdJQ0FnSUNCamIyNXpkQ0J2Y0hScGIyNXpPaUJRYjJ4NWJHbHVaVUoxWm1abGNreGhlV1Z5VDNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9YRzRnSUNBZ0lDQWdJSHQ5TEZ4dUlDQWdJQ0FnSUNCMGFHbHpMbTl3ZEdsdmJuTXNYRzRnSUNBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyeHZjanBjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjNCMGFXOXVjeTV5Wlc1a1pYSlFiMng1YkdsdVpVTnZiRzl5Vkhsd1pTQTlQVDBnSjNOcGJtZHNaU2RjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQeUIwYUdsekxtOXdkR2x2Ym5NdVkyOXNiM0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdPaUIwYUdsekxtZGxkRk5sWjIxbGJuUmxaRkJ2Ykhsc2FXNWxRMjlzYjNJb2NHOXNlV3hwYm1VdVoyVjBSR0YwWVNncEtTeGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdLVnh1WEc0Z0lDQWdJQ0JqYjI1emRDQndiMng1YkdsdVpVSjFabVpsY2lBOUlFd3VZMjl5Y21sa2IzSW9YRzRnSUNBZ0lDQWdJQ2h3YjJ4NWJHbHVaUzVuWlhSTVlYUk1ibWR6S0NrZ1lYTWdUQzVNWVhSTWJtZGJYU2t1YldGd0tDaHNZWFJNYm1jcElEMCtYRzRnSUNBZ0lDQWdJQ0FnVEM1c1lYUk1ibWNvVzJ4aGRFeHVaeTVzWVhRc0lHeGhkRXh1Wnk1c2JtZGRLVnh1SUNBZ0lDQWdJQ0FwTEZ4dUlDQWdJQ0FnSUNCdmNIUnBiMjV6WEc0Z0lDQWdJQ0FwWEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTV2Y0hScGIyNXpMblJ2YjJ4MGFYQkJkSFJ5S1NCN1hHNGdJQ0FnSUNBZ0lIQnZiSGxzYVc1bFFuVm1abVZ5TG1KcGJtUlViMjlzZEdsd0tIUm9hWE11WjJWMFZHOXZiRlJwY0VOdmJuUmxiblFvY0c5c2VXeHBibVV1WjJWMFJHRjBZU2dwS1NsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhSb2FYTXVjRzlzZVd4cGJtVk1ZWGxsY2k1aFpHUk1ZWGxsY2lod2IyeDViR2x1WlVKMVptWmxjaWxjYmlBZ0lDQjlLVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkJ2Ykhsc2FXNWxUR0Y1WlhKY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElIc2dSR0YwWVV4cGMzUkpkR1Z0TENCRGFHRnVibVZzUm5WdVl5QjlJR1p5YjIwZ0p5NHVMMlJsWm1sdWFYUnBiMjV6SjF4dWFXMXdiM0owSUZCdmJIbHNhVzVsTENCN0lGQnZiSGxzYVc1bFRHRjBURzVuUlhod2NtVnpjMmx2YmlCOUlHWnliMjBnSnk0dlVHOXNlV3hwYm1VblhHNXBiWEJ2Y25RZ2V5QmtZWEpyWlc0c0lHeHBaMmgwWlc0c0lHOXdkR2x2Ym5OTlpYSm5aU0I5SUdaeWIyMGdKeTR1TDNWMGFXeHpMMmx1WkdWNEoxeHVYRzR2S2lvZzVyaXk1cCtUNmFLYzZJbXk1cUMzNWJ5UElPV05sZWlKc256bGlJYm1yclVnS2k5Y2JuUjVjR1VnVUc5c2VXeHBibVZNWVhsbGNsSmxibVJsY2tOdmJHOXlWSGx3WlNBOUlDZHphVzVuYkdVbklId2dKM05sWjIxbGJuUmxaQ2NnZkNBblkyeGhjM05wWm1sbFpDZGNiblI1Y0dVZ1EyOXNiM0pOYjJSbElEMGdKMlJoY210bGJpY2dmQ0FuYkdsbmFIUmxiaWNnZkNBbmJtOXliV0ZzSjF4dWFXNTBaWEptWVdObElGQnZiSGxzYVc1bFRHRjVaWEpQY0hScGIyNXpJR1Y0ZEdWdVpITWdUQzVRYjJ4NWJHbHVaVTl3ZEdsdmJuTWdlMXh1SUNCeVpXNWtaWEpRYjJ4NWJHbHVaVU52Ykc5eVZIbHdaVG9nVUc5c2VXeHBibVZNWVhsbGNsSmxibVJsY2tOdmJHOXlWSGx3WlZ4dVhHNGdJQzhxS2lCd2IzQjFjQ0Rsc1pYbnBMcmxyWmZtcnJVZ0tpOWNiaUFnY0c5d2RYQkJkSFJ5UHpvZ2MzUnlhVzVuSUh3Z2V5QnNZV0psYkRvZ2MzUnlhVzVuT3lCMllXeDFaVG9nWVc1NUlIMWNiaUFnTHlvcUlIUnZiMngwYVhBZzViR1Y1NlM2NWEyWDVxNjFJQ292WEc0Z0lIUnZiMngwYVhCQmRIUnlQem9nYzNSeWFXNW5YRzVjYmlBZ2IzQmhZMmwwZVQ4NklHNTFiV0psY2x4dVhHNGdJQzhxS2lEbGlJYm1yclhtdUxMbW41UG51NS9vcnFIbHJaZm1yclVnS2k5Y2JpQWdjMlZuYldWdWRHVmtRWFIwY2o4NklITjBjbWx1WjF4dUlDQnpaV2R0Wlc1MFpXUkRiMnh2Y25NL09pQnpkSEpwYm1kYlhWeHVYRzRnSUM4cUtpRGxpSWJuc2J2bG5vdm11TExtbjVQbnU1L29ycUhsclpmbXJyVWdLaTljYmlBZ1kyeGhjM05wWm1sbFpFRjBkSEkvT2lCemRISnBibWRjYmlBZ1kyeGhjM05wWm1sbFpFTnZiRzl5Y3o4NklITjBjbWx1WjF0ZFhHNTlYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWIyeDViR2x1WlhOTVlYbGxjaUI3WEc0Z0lIQjFZbXhwWXlCMGVYQmxPaUJ6ZEhKcGJtZGNibHh1SUNCd2NtOTBaV04wWldRZ2RtbHphV0pzWlRvZ1ltOXZiR1ZoYmx4dUlDQndjbTkwWldOMFpXUWdiR0Y1WlhJNklFd3VUR0Y1WlhKSGNtOTFjRnh1WEc0Z0lIQnliM1JsWTNSbFpDQnRZWEE2SUV3dVRXRndYRzRnSUhCeWIzUmxZM1JsWkNCa1lYUmhUR2x6ZERvZ1JHRjBZVXhwYzNSSmRHVnRXMTFjYmlBZ2NISnZkR1ZqZEdWa0lHOXdkR2x2Ym5NNklGQnZiSGxzYVc1bFRHRjVaWEpQY0hScGIyNXpYRzRnSUhCeWIzUmxZM1JsWkNCamFHRnVibVZzUm5WdVl6b2dRMmhoYm01bGJFWjFibU5jYmlBZ2NISnZkR1ZqZEdWa0lIQnZiSGxzYVc1bGN6b2dVRzlzZVd4cGJtVmJYVnh1SUNCd2NtOTBaV04wWldRZ2MyVm5iV1Z1ZEdWa1RXbHVPaUJ1ZFcxaVpYSmNiaUFnY0hKdmRHVmpkR1ZrSUhObFoyMWxiblJsWkZOMFpYQTZJRzUxYldKbGNseHVJQ0J3Y205MFpXTjBaV1FnWm05amRYTmxaRkJ2Ykhsc2FXNWxPaUJRYjJ4NWJHbHVaVnh1SUNCd2NtOTBaV04wWldRZ1ptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NWJHbHVaVG9nVUc5c2VXeHBibVZjYmlBZ2NISnZkR1ZqZEdWa0lIQnZiSGxzYVc1bFRHRjVaWEk2SUV3dVRHRjVaWEpIY205MWNGeHVJQ0F2S2lvZzZLNnc1YjJWNXArUTVMaXFJSEJ5YjNBZzVhKzU1YnFVNTVxRTVyaXk1cCtUNmFLYzZJbXlJQ292WEc0Z0lIQnlhWFpoZEdVZ1kyeGhjM05wWm5sRGIyeHZjazFoY0RvZ2V5QmJjSEp2Y0RvZ2MzUnlhVzVuWFRvZ2MzUnlhVzVuSUgxY2JpQWdMeW9xSU9XSWh1ZXh1K2E0c3VhZmsrbWluT2lKc3VXUGd1ZUZweWptajVEa3Zwdm51NW5vc0lQbmxLam9nSVhrdmIvbmxLZ3BJQ292WEc0Z0lIQnlhWFpoZEdVZ1kyeGhjM05wWm5sRGIyeHZjbEpsWm5NNklFRnljbUY1UEh0Y2JpQWdJQ0JoZEhSeU9pQnpkSEpwYm1kY2JpQWdJQ0JqYjJ4dmNqb2djM1J5YVc1blhHNGdJQ0FnYm5WdGN6b2diblZ0WW1WeVhHNGdJSDArWEc0Z0lIQnlhWFpoZEdVZ1pHVm1ZWFZzZEU5d2RHbHZibk02SUZCdmJIbHNhVzVsVEdGNVpYSlBjSFJwYjI1elhHNGdJR052Ym5OMGNuVmpkRzl5S0Z4dUlDQWdJRzFoY0RvZ1RDNU5ZWEFzWEc0Z0lDQWdaR0YwWVV4cGMzUTZJRVJoZEdGTWFYTjBTWFJsYlZ0ZExGeHVJQ0FnSUc5d2RHbHZibk02SUZCdmJIbHNhVzVsVEdGNVpYSlBjSFJwYjI1ekxGeHVJQ0FnSUdOb1lXNXVaV3hHZFc1ak9pQkRhR0Z1Ym1Wc1JuVnVZMXh1SUNBcElIdGNiaUFnSUNCcFppQW9JVUZ5Y21GNUxtbHpRWEp5WVhrb1pHRjBZVXhwYzNRcElIeDhJR1JoZEdGTWFYTjBMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCa1lYUmhUR2x6ZENEbHY0WHBvYnZtbUsvcG5aN25xYnJtbGJEbnU0UmdLVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbVJsWm1GMWJIUlBjSFJwYjI1eklEMGdlMXh1SUNBZ0lDQWdZMjlzYjNJNklDY2pNek00T0VaR0p5eGNiaUFnSUNBZ0lISmxibVJsY2xCdmJIbHNhVzVsUTI5c2IzSlVlWEJsT2lBbmMybHVaMnhsSnl4Y2JpQWdJQ0FnSUhObFoyMWxiblJsWkVOdmJHOXljem9nV3ljak16TTRPRVpHSjEwc1hHNGdJQ0FnSUNCd2IzQjFjRUYwZEhJNklIc2diR0ZpWld3NklDZmxrSTNucDdBbkxDQjJZV3gxWlRvZ0oyNWhiV1VuSUgwc1hHNGdJQ0FnSUNCMGIyOXNkR2x3UVhSMGNqb2dKMjVoYldVbkxGeHVJQ0FnSUNBZ1kyeGhjM05wWm1sbFpFTnZiRzl5Y3pvZ1d5Y2pNek00T0VaR0oxMHNYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVkSGx3WlNBOUlDZHdiMng1YkdsdVpTZGNiaUFnSUNCMGFHbHpMbTFoY0NBOUlHMWhjRnh1SUNBZ0lIUm9hWE11WkdGMFlVeHBjM1FnUFNCa1lYUmhUR2x6ZEZ4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5OTlpYSm5aU2hjYmlBZ0lDQWdJSFJvYVhNdVpHVm1ZWFZzZEU5d2RHbHZibk1zWEc0Z0lDQWdJQ0J2Y0hScGIyNXpYRzRnSUNBZ0tTQmhjeUJRYjJ4NWJHbHVaVXhoZVdWeVQzQjBhVzl1YzF4dUlDQWdJSFJvYVhNdVkyaGhibTVsYkVaMWJtTWdQU0JqYUdGdWJtVnNSblZ1WTF4dVhHNGdJQ0FnZEdocGN5NTJhWE5wWW14bElEMGdkSEoxWlZ4dUlDQWdJSFJvYVhNdWNHOXNlV3hwYm1WeklEMGdXMTFjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkUxcGJpQTlJRWx1Wm1sdWFYUjVYRzRnSUNBZ2RHaHBjeTV6WldkdFpXNTBaV1JUZEdWd0lEMGdNVnh1SUNBZ0lIUm9hWE11WTJ4aGMzTnBabmxEYjJ4dmNrMWhjQ0E5SUh0OVhHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1VHOXNlV3hwYm1VZ1BTQnVkV3hzWEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2Ykhsc2FXNWxJRDBnYm5Wc2JGeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa2NtRjNLRzl3ZEdsdmJuTS9PaUJRYjJ4NWJHbHVaVXhoZVdWeVQzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVhVzVwZEU5d2RHbHZibk1vYjNCMGFXOXVjeWxjYmlBZ0lDQjBhR2x6TG1sdWFYUlFiMng1YkdsdVpYTW9LVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsWkhKaGR5Z3BYRzRnSUgxY2JpQWdjSFZpYkdsaklISmxaSEpoZHlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxteGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhoZVdWeUxuSmxiVzkyWlNncFhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWJHRjVaWElnUFNCMGFHbHpMbU52Ym1acFoxQnZiSGxzYVc1bFRHRjVaWElvS1Z4dUlDQWdJSFJvYVhNdWJXRndMbUZrWkV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE5jYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdabWwwUW05MWJtUnpLQ2tnZTF4dUlDQWdJSFJvYVhNdWJXRndMbVpwZEVKdmRXNWtjeWgwYUdsekxtZGxkRUp2ZFc1a2N5Z3BMQ0I3SUhCaFpHUnBibWM2SUZzeU1Dd2dNakJkSUgwcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdkbGRFSnZkVzVrY3lncE9pQk1Ma3hoZEV4dVowSnZkVzVrYzBWNGNISmxjM05wYjI0Z2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG5CdmJIbHNhVzVsY3k1c1pXNW5kR2dnUEQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YldGd0xtZGxkRUp2ZFc1a2N5Z3BYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuQnZiSGxzYVc1bGN5NXlaV1IxWTJVb1hHNGdJQ0FnSUNBb2NISmxkaXdnWTNWeWNpa2dQVDRnY0hKbGRpNWxlSFJsYm1Rb1kzVnljaTVuWlhSQ2IzVnVaSE1vS1Nrc1hHNGdJQ0FnSUNCTUxteGhkRXh1WjBKdmRXNWtjeWhjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTmJNRjB1WjJWMFFtOTFibVJ6S0NrdVoyVjBUbTl5ZEdoRllYTjBLQ2tzWEc0Z0lDQWdJQ0FnSUhSb2FYTXVjRzlzZVd4cGJtVnpXekJkTG1kbGRFSnZkVzVrY3lncExtZGxkRk52ZFhSb1YyVnpkQ2dwWEc0Z0lDQWdJQ0FwWEc0Z0lDQWdLVnh1SUNCOVhHNGdJSEIxWW14cFl5QmtaWE4wY205NUtDa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxteGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1eVpXMXZkbVZNWVhsbGNpaDBhR2x6TG14aGVXVnlLVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndkV0pzYVdNZ2RHOW5aMnhsVm1semFXSnNaU2gyYVhOcFlteGxPaUJpYjI5c1pXRnVLU0I3WEc0Z0lDQWdkR2hwY3k1MmFYTnBZbXhsSUQwZ2RtbHphV0pzWlZ4dUlDQWdJR2xtSUNnaGRHaHBjeTVzWVhsbGNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMmFYTnBZbXhsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1aFpHUk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxzYVc1bEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NWJHbHVaUzV5WlcxdmRtVW9LVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVjbVZ0YjNabFRHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY0hWaWJHbGpJR05vWVc1blpVTnZiRzl5S0dOdmJHOXlPaUJ6ZEhKcGJtY3BJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk11Wm1sc2JFTnZiRzl5SUQwZ1kyOXNiM0pjYmlBZ0lDQjBhR2x6TG5KbFpISmhkeWdwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSEJwZEdOb0tHbGtPaUJ6ZEhKcGJtY3BJSHRjYmlBZ0lDQjBhR2x6TG5CdmJIbHNhVzVsY3k1bWIzSkZZV05vS0Nod2IyeDViR2x1WlNrZ1BUNGdlMXh1SUNBZ0lDQWdhV1lnS0hCdmJIbHNhVzVsTG1kbGRFUmhkR0VvS1M1cFpDQTlQVDBnYVdRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlVOc2FXTnJTR0Z1Wkd4bGNpaHdiMng1YkdsdVpTd2dkSEoxWlNsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMlYwUTJ4aGMzTnBabmxEYjJ4dmNsSmxabk1vS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVkyeGhjM05wWm5sRGIyeHZjbEpsWm5OY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ2FXNXBkRTl3ZEdsdmJuTW9iM0IwYVc5dWN6b2dVRzlzZVd4cGJtVk1ZWGxsY2s5d2RHbHZibk1wSUh0Y2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1elRXVnlaMlVvWEc0Z0lDQWdJQ0IwYUdsekxtUmxabUYxYkhSUGNIUnBiMjV6TEZ4dUlDQWdJQ0FnZEdocGN5NXZjSFJwYjI1ekxGeHVJQ0FnSUNBZ2IzQjBhVzl1YzF4dUlDQWdJQ2tnWVhNZ1VHOXNlV3hwYm1WTVlYbGxjazl3ZEdsdmJuTmNiaUFnZlZ4dUlDQndjbTkwWldOMFpXUWdhVzVwZEZCdmJIbHNhVzVsY3lncElIdGNiaUFnSUNBdkx5RG52SlBsclpnZ2MyVm5iV1Z1ZENEbm03amxoYlBtbGJEbWphNWNiaUFnSUNCMGFHbHpMbU5oWTJobFUyVm5iV1Z1ZEZCaGNtRnRjeWdwWEc0Z0lDQWdkR2hwY3k1allXTm9aVU5zWVhOemFXWjVVR0Z5WVcxektDbGNibHh1SUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZ6SUQwZ2RHaHBjeTVrWVhSaFRHbHpkQzV0WVhBb0tHUmhkR0VwSUQwK0lIdGNiaUFnSUNBZ0lHTnZibk4wSUd4aGVXVnlJRDBnVEM1blpXOUtVMDlPS0dSaGRHRXVaMlZ2YldWMGNua3BMbWRsZEV4aGVXVnljeWdwV3pCZFhHNGdJQ0FnSUNCamIyNXpkQ0J3YjJ4NWJHbHVaU0E5SUc1bGR5QlFiMng1YkdsdVpTaGNiaUFnSUNBZ0lDQWdLR3hoZVdWeUlHRnpJRXd1VUc5c2VXeHBibVVwTG1kbGRFeGhkRXh1WjNNb0tTQmhjeUJRYjJ4NWJHbHVaVXhoZEV4dVowVjRjSEpsYzNOcGIyNWNiaUFnSUNBZ0lDbGNiaUFnSUNBZ0lDOHZJT1d3aHVlYnVPV0ZzK1dBdk9lN2tlV3VtdVdJc0NCdFlYSnJaWExrdUlwY2JpQWdJQ0FnSUhCdmJIbHNhVzVsTG5ObGRFUmhkR0VvWkdGMFlTbGNibHh1SUNBZ0lDQWdjbVYwZFhKdUlIQnZiSGxzYVc1bFhHNGdJQ0FnZlNsY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1oyVjBVMlZuYldWdWRHVmtVRzlzZVd4cGJtVkRiMnh2Y2loa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwcE9pQnpkSEpwYm1jZ2UxeHVJQ0FnSUdOdmJuTjBJSFpoYkNBOUlHUmhkR0ZiZEdocGN5NXZjSFJwYjI1ekxuTmxaMjFsYm5SbFpFRjBkSEpkWEc0Z0lDQWdZMjl1YzNRZ1kyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVjMlZuYldWdWRHVmtRMjlzYjNKelcxeHVJQ0FnSUNBZ2NHRnljMlZKYm5Rb0p5Y2dLeUFvZG1Gc0lDMGdkR2hwY3k1elpXZHRaVzUwWldSTmFXNHBJQzhnZEdocGN5NXpaV2R0Wlc1MFpXUlRkR1Z3TENBeE1DbGNiaUFnSUNCZFhHNGdJQ0FnY21WMGRYSnVJR052Ykc5eVhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lIQnZiSGxzYVc1bFEyeHBZMnRJWVc1a2JHVnlLSEJ2Ykhsc2FXNWxPaUJRYjJ4NWJHbHVaU3dnWm1sMFFtOTFibVJ6UHpvZ1ltOXZiR1ZoYmlrZ2UxeHVJQ0FnSUhSb2FYTXVabTlqZFhObFpGQnZiSGxzYVc1bElEMGdjRzlzZVd4cGJtVmNiaUFnSUNBdkx5RGxpS0RwbWFUbGlZM2t1SURrdUtvZ1ptOWpkWE5jYmlBZ0lDQnBaaUFvZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV3hwYm1VdWNtVnRiM1psS0NsY2JpQWdJQ0I5WEc0Z0lDQWdMeThnNTVTZjVvaVE1YjJUNVltTklHWnZZM1Z6WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2Ykhsc2FXNWxJRDBnYm1WM0lGQnZiSGxzYVc1bEtGeHVJQ0FnSUNBZ2NHOXNlV3hwYm1VdVoyVjBUR0YwVEc1bmN5Z3BJR0Z6SUZCdmJIbHNhVzVsVEdGMFRHNW5SWGh3Y21WemMybHZiaXhjYmlBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSTZJSFJvYVhNdVoyVjBRMjlzYjNJb2NHOXNlV3hwYm1VdVoyVjBSR0YwWVNncEtTeGNiaUFnSUNBZ0lDQWdabWxzYkVOdmJHOXlPaUIwYUdsekxtZGxkRU52Ykc5eUtIQnZiSGxzYVc1bExtZGxkRVJoZEdFb0tTd2dKMjV2Y20xaGJDY3BMRnh1SUNBZ0lDQWdmVnh1SUNBZ0lDbGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV3hwYm1VdVlXUmtWRzhvZEdocGN5NXRZWEFwWEc1Y2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXeHBibVZjYmlBZ0lDQWdJQzVpYVc1a1VHOXdkWEFvZEdocGN5NW5aWFJRYjNCMWNFTnZiblJsYm5Rb2NHOXNlV3hwYm1VdVoyVjBSR0YwWVNncEtTbGNiaUFnSUNBZ0lDNXZjR1Z1VUc5d2RYQW9LVnh1WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2Ykhsc2FXNWxMbTl1S0Nkd2IzQjFjR05zYjNObEp5d2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxzYVc1bExuSmxiVzkyWlNncFhHNGdJQ0FnZlNsY2JseHVJQ0FnSUhCdmJIbHNhVzVsTG1Oc2IzTmxWRzl2YkhScGNDZ3BYRzVjYmlBZ0lDQjBhR2x6TG0xaGNDNXdZVzVVYnloMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV3hwYm1VdVoyVjBRMlZ1ZEdWeUtDa3BYRzRnSUNBZ2FXWWdLR1pwZEVKdmRXNWtjeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1Wm1sMFFtOTFibVJ6S0hCdmJIbHNhVzVsTG1kbGRFSnZkVzVrY3lncEtWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxtTm9ZVzV1Wld4R2RXNWpLQ2R2YmkxamJHbGpheTF3YjJ4NWJHbHVaU2NzSUhCdmJIbHNhVzVsS1Z4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCblpYUlViMjlzVkdsd1EyOXVkR1Z1ZENoa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwcElIdGNiaUFnSUNCeVpYUjFjbTRnSnljZ0t5QmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NTBiMjlzZEdsd1FYUjBjbDFjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWjJWMFVHOXdkWEJEYjI1MFpXNTBLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2tnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjaWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVJQ2NuWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lBOVBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmdKSHQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeWZUb2dKSHRrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEpkZldCY2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUIwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUlEMDlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR0FrZTNSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXViR0ZpWld4OU9pQWtlMXh1SUNBZ0lDQWdJQ0JrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEl1ZG1Gc2RXVmRYRzRnSUNBZ0lDQjlZRnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndjbWwyWVhSbElHTnZibVpwWjFCdmJIbHNhVzVsVEdGNVpYSW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2IyeDViR2x1WlV4aGVXVnlJRDBnVEM1c1lYbGxja2R5YjNWd0tDbGNiaUFnSUNCMGFHbHpMbkJ2Ykhsc2FXNWxjeTVtYjNKRllXTm9LQ2h3YjJ4NWJHbHVaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ1kyOXVjM1FnYjNCMGFXOXVjem9nVEM1UWIyeDViR2x1WlU5d2RHbHZibk1nUFNCdmNIUnBiMjV6VFdWeVoyVW9lMzBzSUhSb2FYTXViM0IwYVc5dWN5d2dlMXh1SUNBZ0lDQWdJQ0JqYjJ4dmNqb2dkR2hwY3k1blpYUkRiMnh2Y2lod2IyeDViR2x1WlM1blpYUkVZWFJoS0NrcExGeHVJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lHTnZibk4wSUc1bGQxQnZiSGxzYVc1bElEMGdibVYzSUZCdmJIbHNhVzVsS0Z4dUlDQWdJQ0FnSUNCd2IyeDViR2x1WlM1blpYUk1ZWFJNYm1kektDa2dZWE1nVUc5c2VXeHBibVZNWVhSTWJtZEZlSEJ5WlhOemFXOXVMRnh1SUNBZ0lDQWdJQ0J2Y0hScGIyNXpYRzRnSUNBZ0lDQXBYRzRnSUNBZ0lDQnVaWGRRYjJ4NWJHbHVaUzV2YmlnblkyeHBZMnNuTENBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjRzlzZVd4cGJtVkRiR2xqYTBoaGJtUnNaWElvY0c5c2VXeHBibVVwWEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnYm1WM1VHOXNlV3hwYm1VdWMyVjBSR0YwWVNod2IyeDViR2x1WlM1blpYUkVZWFJoS0NrcFhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5SdmIyeDBhWEJCZEhSeUtTQjdYRzRnSUNBZ0lDQWdJRzVsZDFCdmJIbHNhVzVsTG1KcGJtUlViMjlzZEdsd0tIUm9hWE11WjJWMFZHOXZiRlJwY0VOdmJuUmxiblFvYm1WM1VHOXNlV3hwYm1VdVoyVjBSR0YwWVNncEtTbGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZNWVhsbGNpNWhaR1JNWVhsbGNpaHVaWGRRYjJ4NWJHbHVaU2xjYmlBZ0lDQjlLVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkJ2Ykhsc2FXNWxUR0Y1WlhKY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdOaFkyaGxRMnhoYzNOcFpubFFZWEpoYlhNb0tTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtOXdkR2x2Ym5NdVkyeGhjM05wWm1sbFpFRjBkSElwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNibHh1SUNBZ0lHTnZibk4wSUhSdGNEb2dleUJiY0hKdmNEb2djM1J5YVc1blhUb2dXM04wY21sdVp5d2diblZ0WW1WeVhTQjlJRDBnZTMxY2JpQWdJQ0JqYjI1emRDQndjbTl3SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbU5zWVhOemFXWnBaV1JCZEhSeVhHNGdJQ0FnZEdocGN5NWtZWFJoVEdsemRDNW1iM0pGWVdOb0tDaGtZWFJoS1NBOVBpQjdYRzRnSUNBZ0lDQnBaaUFvWkdGMFlWdHdjbTl3WFNCcGJpQjBiWEFwSUh0Y2JpQWdJQ0FnSUNBZ2RHMXdXMlJoZEdGYmNISnZjRjFkSUQwZ1cyUmhkR0ZiY0hKdmNGMHNJSFJ0Y0Z0a1lYUmhXM0J5YjNCZFhWc3hYU0FySURGZFhHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCMGJYQmJaR0YwWVZ0d2NtOXdYVjBnUFNCYlpHRjBZVnR3Y205d1hTd2dNVjFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVnh1SUNBZ0lHTnZibk4wSUhaaGJIVmxjeUE5SUU5aWFtVmpkQzUyWVd4MVpYTW9kRzF3S1Z4dUlDQWdJSFpoYkhWbGN5NXpiM0owS0NoaExDQmlLU0E5UGlCaVd6RmRJQzBnWVZzeFhTbGNiaUFnSUNCMGFHbHpMbU5zWVhOemFXWjVRMjlzYjNKU1pXWnpJRDBnVzExY2JpQWdJQ0IyWVd4MVpYTXVabTl5UldGamFDZ29XMkYwZEhJc0lHNTFiWE5kTENCcGJtUmxlQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ2JHVjBJR052Ykc5eUlEMGdKMkpzWVdOckoxeHVJQ0FnSUNBZ2FXWWdLR2x1WkdWNElEd2dkR2hwY3k1dmNIUnBiMjV6TG1Oc1lYTnphV1pwWldSRGIyeHZjbk11YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUdOdmJHOXlJRDBnZEdocGN5NXZjSFJwYjI1ekxtTnNZWE56YVdacFpXUkRiMnh2Y25OYmFXNWtaWGhkWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0IwYUdsekxtTnNZWE56YVdaNVEyOXNiM0pOWVhCYllYUjBjbDBnUFNCamIyeHZjbHh1SUNBZ0lDQWdkR2hwY3k1amJHRnpjMmxtZVVOdmJHOXlVbVZtY3k1d2RYTm9LSHRjYmlBZ0lDQWdJQ0FnWVhSMGNpeGNiaUFnSUNBZ0lDQWdZMjlzYjNJc1hHNGdJQ0FnSUNBZ0lHNTFiWE1zWEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJSDBwWEc0Z0lIMWNiaUFnY0hKcGRtRjBaU0JuWlhSRGJHRnpjMmxtZVZCdmJIbHNhVzVsUTI5c2IzSW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqYkdGemMybG1lVU52Ykc5eVRXRndXMlJoZEdGYmRHaHBjeTV2Y0hScGIyNXpMbU5zWVhOemFXWnBaV1JCZEhSeVhWMWNiaUFnZlZ4dUlDQndjbWwyWVhSbElHTmhZMmhsVTJWbmJXVnVkRkJoY21GdGN5Z3BJSHRjYmlBZ0lDQmpiMjV6ZENCelpXZHRaVzUwWldSTVpXNW5kR2dnUFNCMGFHbHpMbTl3ZEdsdmJuTXVjMlZuYldWdWRHVmtRMjlzYjNKekxteGxibWQwYUZ4dUlDQWdJR3hsZENCdFlYaFdZV3dnUFNBdFNXNW1hVzVwZEhsY2JpQWdJQ0JzWlhRZ2JXbHVWbUZzSUQwZ1NXNW1hVzVwZEhsY2JpQWdJQ0JtYjNJZ0tHTnZibk4wSUdSaGRHRWdiMllnZEdocGN5NWtZWFJoVEdsemRDa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2RtRnNJRDBnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11YzJWbmJXVnVkR1ZrUVhSMGNsMWNiaUFnSUNBZ0lHMWhlRlpoYkNBOUlFMWhkR2d1YldGNEtHMWhlRlpoYkN3Z2RtRnNLVnh1SUNBZ0lDQWdiV2x1Vm1Gc0lEMGdUV0YwYUM1dGFXNG9iV2x1Vm1Gc0xDQjJZV3dwWEc0Z0lDQWdmVnh1SUNBZ0lHTnZibk4wSUhOMFpYQWdQU0FvYldGNFZtRnNJQzBnYldsdVZtRnNJQ3NnTVNrZ0x5QnpaV2R0Wlc1MFpXUk1aVzVuZEdoY2JpQWdJQ0IwYUdsekxuTmxaMjFsYm5SbFpFMXBiaUE5SUcxcGJsWmhiRnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVTNSbGNDQTlJSE4wWlhCY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdkbGRFTnZiRzl5S0dSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlN3Z2JXOWtaVDg2SUVOdmJHOXlUVzlrWlNrZ2UxeHVJQ0FnSUd4bGRDQmpiMnh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTVqYjJ4dmNseHVJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlVRzlzZVd4cGJtVkRiMnh2Y2xSNWNHVWdQVDA5SUNkelpXZHRaVzUwWldRbktTQjdYRzRnSUNBZ0lDQmpiMnh2Y2lBOUlIUm9hWE11WjJWMFUyVm5iV1Z1ZEdWa1VHOXNlV3hwYm1WRGIyeHZjaWhrWVhSaEtWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTV2Y0hScGIyNXpMbkpsYm1SbGNsQnZiSGxzYVc1bFEyOXNiM0pVZVhCbElEMDlQU0FuWTJ4aGMzTnBabWxsWkNjcElIdGNiaUFnSUNBZ0lHTnZiRzl5SUQwZ2RHaHBjeTVuWlhSRGJHRnpjMmxtZVZCdmJIbHNhVzVsUTI5c2IzSW9aR0YwWVNsY2JpQWdJQ0I5WEc0Z0lDQWdjM2RwZEdOb0lDaHRiMlJsS1NCN1hHNGdJQ0FnSUNCallYTmxJQ2RrWVhKclpXNG5PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdaR0Z5YTJWdUtHTnZiRzl5S1Z4dUlDQWdJQ0FnWTJGelpTQW5iR2xuYUhSbGJpYzZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnNhV2RvZEdWdUtHTnZiRzl5S1Z4dUlDQWdJQ0FnWkdWbVlYVnNkRHBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ykc5eVhHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ0tpQmhjeUJEYjJ4dmNpQm1jbTl0SUNkamIyeHZjaWRjYmx4dVpuVnVZM1JwYjI0Z2JHbG5hSFJsYmlob1pYaERiMnh2Y2pvZ2MzUnlhVzVuS1NCN1hHNGdJSEpsZEhWeWJpQkRiMnh2Y2lob1pYaERiMnh2Y2lsY2JpQWdJQ0F1YkdsbmFIUmxiaWd3TGpVcFhHNGdJQ0FnTG1obGVDZ3BYRzU5WEc1bWRXNWpkR2x2YmlCa1lYSnJaVzRvYUdWNFEyOXNiM0k2SUhOMGNtbHVaeWtnZTF4dUlDQnlaWFIxY200Z1EyOXNiM0lvYUdWNFEyOXNiM0lwWEc0Z0lDQWdMbVJoY210bGJpZ3dMalVwWEc0Z0lDQWdMbWhsZUNncFhHNTlYRzVjYm1aMWJtTjBhVzl1SUc5d2RHbHZibk5OWlhKblpTZ3VMaTUwWVhKblpYUnpPaUJoYm5sYlhTazZJRzlpYW1WamRDQjdYRzRnSUdsbUlDaDBZWEpuWlhSekxteGxibWQwYUNBOVBUMGdNQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjdmVnh1SUNCOVhHNGdJR2xtSUNoMFlYSm5aWFJ6TG14bGJtZDBhQ0E5UFQwZ01Ta2dlMXh1SUNBZ0lISmxkSFZ5YmlCMFlYSm5aWFJ6V3pCZFhHNGdJSDFjYmlBZ1kyOXVjM1FnYldWeVoyVmtJRDBnZEdGeVoyVjBjMXN3WFZ4dUlDQm1iM0lnS0dOdmJuTjBJR3RsZVNCcGJpQjBZWEpuWlhSeld6RmRLU0I3WEc0Z0lDQWdhV1lnS0d0bGVTQnBiaUJ0WlhKblpXUXBJSHRjYmlBZ0lDQWdJR2xtSUNoUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTG1OaGJHd29iV1Z5WjJWa1cydGxlVjBwSUQwOVBTQW5XMjlpYW1WamRDQlBZbXBsWTNSZEp5a2dlMXh1SUNBZ0lDQWdJQ0J0WlhKblpXUmJhMlY1WFNBOUlHOXdkR2x2Ym5OTlpYSm5aU2h0WlhKblpXUmJhMlY1WFN3Z2RHRnlaMlYwYzFzeFhWdHJaWGxkS1Z4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnYldWeVoyVmtXMnRsZVYwZ1BTQjBZWEpuWlhSeld6RmRXMnRsZVYxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdiV1Z5WjJWa1cydGxlVjBnUFNCMFlYSm5aWFJ6V3pGZFcydGxlVjFjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjbVYwZFhKdUlHOXdkR2x2Ym5OTlpYSm5aU2h0WlhKblpXUXNJQzR1TG5SaGNtZGxkSE11YzJ4cFkyVW9NaWtwWEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnYkdsbmFIUmxiaXhjYmlBZ1pHRnlhMlZ1TEZ4dUlDQnZjSFJwYjI1elRXVnlaMlVzWEc1OVhHNWxlSEJ2Y25RZ2V5QnNhV2RvZEdWdUxDQmtZWEpyWlc0c0lHOXdkR2x2Ym5OTlpYSm5aU0I5WEc0aVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOSIsIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBsZWFmbGV0TWFwIGZyb20gJy4uLy4uLy4uL2xlYWZsZXQtbGF5ZXInXG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IEwgPSB3aW5kb3cuTFxuXG5mdW5jdGlvbiBpc1BvaW50SW5WaWV3cG9ydCh4LCB5KSB7XG4gIHJldHVybiAoXG4gICAgeCA+PSAwICYmXG4gICAgeSA+PSAwICYmXG4gICAgeCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSAmJlxuICAgIHkgPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICApXG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudEluVmlld3BvcnQoZWwpIHtcbiAgdmFyIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICByZXR1cm4gKFxuICAgIHJlY3QudG9wID49IDAgJiZcbiAgICByZWN0LmxlZnQgPj0gMCAmJlxuICAgIHJlY3QuYm90dG9tIDw9XG4gICAgICAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxuICApXG59XG5cbmZ1bmN0aW9uIGNhbGNPZmZzZXQoeCwgeSwgdywgaCkge1xuICBjb25zdCBCT1RUT01fUklHSFQgPSAwXG4gIGNvbnN0IEJPVFRPTV9MRUZUID0gMVxuICBjb25zdCBUT1BfUklHSFQgPSAyXG4gIGNvbnN0IFRPUF9MRUZUID0gM1xuICBjb25zdCBib3VuZHMgPSBbXG4gICAgW3ggKyB3LCB5ICsgaF0sXG4gICAgW3ggLSB3LCB5ICsgaF0sXG4gICAgW3ggKyB3LCB5IC0gaF0sXG4gICAgW3ggLSB3LCB5IC0gaF0sXG4gIF1cblxuICBsZXQgaSA9IDBcbiAgZm9yICg7IGkgPCBib3VuZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaXNQb2ludEluVmlld3BvcnQoLi4uYm91bmRzW2ldKSkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgc3dpdGNoIChpKSB7XG4gICAgY2FzZSBCT1RUT01fUklHSFQ6XG4gICAgICByZXR1cm4gW3gsIHldXG4gICAgY2FzZSBCT1RUT01fTEVGVDpcbiAgICAgIHJldHVybiBbeCAtIHcsIHldXG4gICAgY2FzZSBUT1BfUklHSFQ6XG4gICAgICByZXR1cm4gW3gsIHkgLSBoXVxuICAgIGNhc2UgVE9QX0xFRlQ6XG4gICAgICByZXR1cm4gW3ggLSB3LCB5IC0gaF1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFt4LCB5XVxuICB9XG59XG5cbnZhciBwb3NpdGlvbiA9IG5ldyBMLkxhdExuZygzOS45MDc3OCwgMTE2LjQwMTIxNilcbnZhciBtYXAgPSBMLm1hcCgnbWFwJykuc2V0Vmlldyhwb3NpdGlvbiwgMTMpXG5cbkwudGlsZUxheWVyXG4gIC5jaGluYVByb3ZpZGVyKCdHYW9EZS5Ob3JtYWwuTWFwJywgeyBtYXhab29tOiAxOCwgbWluWm9vbTogMyB9KVxuICAuYWRkVG8obWFwKVxuXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvbHlnb24nLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFtcbi8vICAgICAgICAgW1xuLy8gICAgICAgICAgIFsxMTYuNDAxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgICAgICAgWzExNi4zOTEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICAgICAgICBbMTE2LjM5MTIxNiwgMzkuOTE3NzhdLFxuLy8gICAgICAgICAgIFsxMTYuNDAxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgICAgIF0sXG4vLyAgICAgICBdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDEwOTA5MDkwOTA5MCxcbi8vICAgfSxcbi8vIF1cblxuLy8gdmFyIGxheWVyID0gbmV3IGxlYWZsZXRNYXAuR3JpZHNMYXllcihcbi8vICAgbWFwLFxuLy8gICBkYXRhTGlzdCxcbi8vICAgeyB0b29sdGlwQXR0cjogJ3ByaWNlJywgcG9wdXBBdHRyOiB7IGxhYmVsOiAncCcsIHZhbHVlOiAncHJpY2UnIH0gfSxcbi8vICAgY29uc29sZS5sb2dcbi8vIClcbi8vIGxheWVyLnRvZ2dsZVRvb2x0aXAodHJ1ZSlcbi8vIGxheWVyLmRyYXcoKVxuXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDAuMSxcbi8vICAgICBuYW1lOiAnNScsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM5MTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDAuMSxcbi8vICAgICBuYW1lOiAnMicsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM5MTIxNiwgMzkuOTE3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDAuMSxcbi8vICAgICBuYW1lOiAnMScsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTE3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDEwMCxcbi8vICAgICBuYW1lOiAnMicsXG4vLyAgIH0sXG4vLyBdXG5cbi8vIHZhciBsYXllciA9IG5ldyBsZWFmbGV0TWFwLk1hcmtlcnNMYXllcihcbi8vICAgbWFwLFxuLy8gICBkYXRhTGlzdCxcbi8vICAge1xuLy8gICAgIHJlbmRlclR5cGU6ICdoZWF0Jyxcbi8vICAgICBoZWF0T3B0aW9uczoge1xuLy8gICAgICAgZGltZW5zaW9uQXR0cjogJ3ByaWNlJyxcbi8vICAgICAgIHJhZGl1czogMzAsXG4vLyAgICAgICBtaW5PcGFjaXR5OiAwLjcsXG4vLyAgICAgICBibHVyOiA2MCxcbi8vICAgICAgIC8vIG1heDogMSxcbi8vICAgICB9LFxuLy8gICB9LFxuLy8gICBjb25zb2xlLmxvZ1xuLy8gKVxuLy8gbGF5ZXIuZHJhdygpXG5cbnZhciBkYXRhTGlzdCA9IFtcbiAge1xuICAgIGdlb21ldHJ5OiB7XG4gICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MDc3OF0sXG4gICAgfSxcbiAgICBwcmljZTogMSxcbiAgICBjbGFzczogJ2EnXG4gIH0sXG4gIHtcbiAgICBnZW9tZXRyeToge1xuICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM5MTIxNiwgMzkuOTA3NzhdLFxuICAgIH0sXG4gICAgcHJpY2U6IDUsXG4gICAgY2xhc3M6ICdiJ1xuICB9LFxuICB7XG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICBjb29yZGluYXRlczogWzExNi4zODEyMTYsIDM5LjkwNzc4XSxcbiAgICB9LFxuICAgIHByaWNlOiAxMCxcbiAgICBjbGFzczogJ2InXG4gIH0sXG5dXG5cbnZhciBsYXllciA9IG5ldyBsZWFmbGV0TWFwLk1hcmtlcnNMYXllcihcbiAgbWFwLFxuICBkYXRhTGlzdCxcbiAge1xuICAgIHJlbmRlclR5cGU6ICdidWJibGUnLFxuICAgIC8vIGljb25Vbmljb2RlOiAnJiN4ZTY1NTsnLFxuICAgIC8vIHRvb2x0aXA6IGZhbHNlLFxuICAgIHBvcHVwOiBmYWxzZSxcbiAgICB0b29sdGlwQXR0cjogJ3ByaWNlJyxcbiAgICBwb3B1cEF0dHI6IHtsYWJlbDogJ+S7t+agvCcsIHZhbHVlOiAncHJpY2UnfSxcbiAgICBidWJibGVDb2xvckF0dHI6ICdjbGFzcycsXG4gICAgYnViYmxlU2l6ZUF0dHI6ICdwcmljZScsXG4gICAgYnViYmxlQ29sb3JzOiBbJ3JlZCcsICdncmVlbicsICdibHVlJ10sXG4gICAgYnViYmxlU2l6ZXM6IFsxMCwgMjAsIDMwXSxcbiAgICBidWJibGVTdHJva2VXaWR0aDogMTAsXG4gICAgLy8gYnViYmxlU3Ryb2tlQ29sb3I6ICdibGFjaycsXG5cbiAgfSxcbiAgZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4gICAgLy8gY29uc3QgdyA9IDEwMFxuICAgIC8vIGNvbnN0IGggPSAyMDBcbiAgICAvLyBjb25zdCB7IHgsIHkgfSA9IGV2ZW50LmNvbnRhaW5lclBvaW50XG4gICAgLy8gY2FsY09mZnNldCh4LCB5LCB3LCBoKVxuICB9XG4pXG5sYXllci5kcmF3KClcbmNvbnNvbGUubG9nKGxheWVyLmdldEJ1YmJsZWRDb2xvclJlZnMoKSlcblxuLy8gdmFyIGRhdGFMaXN0ID0gW1xuLy8gICBbXG4vLyAgICAge1xuLy8gICAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgcHJpY2U6IDEsXG4vLyAgICAgfSxcbi8vICAgXSxcbi8vICAgW1xuLy8gICAgIHtcbi8vICAgICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM5MTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgICAgfSxcbi8vICAgICAgIHByaWNlOiAxLFxuLy8gICAgIH0sXG4vLyAgIF0sXG4vLyAgIFtcbi8vICAgICB7XG4vLyAgICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgICBjb29yZGluYXRlczogWzExNi4zOTEyMTYsIDM5LjkxNzc4XSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBwcmljZTogMSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gICBbXG4vLyAgICAge1xuLy8gICAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgcHJpY2U6IDEsXG4vLyAgICAgfSxcbi8vICAgXSxcbi8vIF1cbi8vIGNvbnN0IGxheWVyID0gbmV3IGxlYWZsZXRNYXAuRHluYW1pY0hlYXRMYXllcihcbi8vICAgbWFwLFxuLy8gICBkYXRhTGlzdCxcbi8vICAgeyBsb29wOiB0cnVlLCBhdXRvOiB0cnVlIH0sXG4vLyAgIGNvbnNvbGUubG9nXG4vLyApXG4vLyAgIC5kcmF3KClcbi8vICAgLnN0YXJ0KClcblxuLy8gTC5tYXJrZXIoWzMyLjAzMDQsIDExOC43OTY4XSwge1xuLy8gICBpY29uOiBMLmRpdkljb24oe1xuLy8gICAgIGh0bWw6ICc8aSBjbGFzcz1cImljb25mb250XCIgc3R5bGU9XCJmb250LXNpemU6IDQwcHg7XCI+JiN4ZTY1NTs8L2k+Jyxcbi8vICAgICBpY29uU2l6ZTogWzQwLCA0MF0sXG4vLyAgICAgY2xhc3NOYW1lOiAndGVzdCcsXG4vLyAgIH0pLFxuLy8gfSkuYWRkVG8obWFwKVxuLy8gTC5tYXJrZXIoWzMyLjAzMDQsIDExOC43OTY4XSkuYWRkVG8obWFwKVxuLy8gdmFyIGRhdGFMaXN0ID0gW1xuLy8gICB7XG4vLyAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICB9LFxuLy8gICAgIHByaWNlOiAyLFxuLy8gICB9LFxuLy8gXVxuXG4vLyBjb25zdCBsYXllciA9IG5ldyBsZWFmbGV0TWFwLk1hcmtlcnNMYXllcihcbi8vICAgbWFwLFxuLy8gICBkYXRhTGlzdCxcbi8vICAge1xuLy8gICAgIGljb25Vbmljb2RlOiAnJiN4ZTY1NTsnLFxuLy8gICAgIGljb25TaXplOiBbMjAsIDIwXSxcbi8vICAgICBpY29uQW5jaG9yOiBbMTAsIDIwXSxcbi8vICAgICBwb3B1cEF0dHI6ICdwcmljZScsXG4vLyAgICAgdG9vbHRpcEF0dHI6ICdwcmljZScsXG4vLyAgIH0sXG4vLyAgIGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSlcbi8vICAgfVxuLy8gKVxuXG4vLyBsYXllci5kcmF3KClcblxuLy8gLy8gTC5tYXJrZXIoTC5sYXRMbmcoMzkuOTA3NzgsIDExNi40MDEyMTYpKVxuLy8gLy8gICAuYWRkVG8obWFwKVxuLy8gLy8gICAuYmluZFRvb2x0aXAoJ2FkZicpXG5cbi8vIEwubWFya2VyKEwubGF0TG5nKDM5LjkwNzc4LCAxMTYuNDAxMjE2KSwge1xuLy8gICBvcGFjaXR5OiAwLjIsXG4vLyAgIGljb246IEwuZGl2SWNvbih7XG4vLyAgICAgaWNvbkFuY2hvcjogWzEwLCAyMF0sXG4vLyAgICAgaWNvblNpemU6IFsyMCwgMjBdLFxuLy8gICAgIGh0bWw6IGBcbi8vICAgICA8aVxuLy8gICAgICAgY2xhc3M9XCJpY29uZm9udFwiXG4vLyAgICAgICBzdHlsZT1cIlxuLy8gICAgICAgICBjb2xvcjogcmVkO1xuLy8gICAgICAgICBmb250LXNpemU6IDIwcHg7XG4vLyAgICAgICBcIlxuLy8gICAgICAgPlxuLy8gICAgICAgJiN4ZTY1NTtcbi8vICAgICA8L2k+XG4vLyAgIGAsXG4vLyAgIH0pLFxuLy8gfSkuYWRkVG8obWFwKVxuLy8gd2luZG93LmxheWVyID0gbGF5ZXJcbiJdLCJzb3VyY2VSb290IjoiIn0=