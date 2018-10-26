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
            this.focusedDisplayMarker.remove();
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
    markerClickHandler(marker, fitBounds) {
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
        ]), 
        // TODO: 使用 mergeConfig 简化
        Object.assign({}, { minOpacity: 0.5 }, this.options.heatOptions));
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
          position: relative;
          width: 50px;
          height: 50px;
        "
        >
        <div
          style="
            border-radius: 50%;
            background: ${Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["lighten"])(this.options.iconColor)};
            width: 50px;
            height: 50px;
            opacity: 0.7;
            position: absolute;
            top: 0;
            left: 0;
            ">
          <div
            style="
              border-radius: 50%;
              background: ${this.options.iconColor};
              width: 32px;
              height: 32px;
              margin: 9px;
            ">
          </div>
        </div>
        <div
          style="
            text-align: center;
            line-height: 30px;
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
        this.map.fitBounds(this.getBounds(), { padding: [20, 20] });
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
            this.focusedDisplayPolygon.remove();
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
        if (fitBounds) {
            this.map.fitBounds(polygon.getBounds());
        }
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
        this.map.fitBounds(this.getBounds(), { padding: [20, 20] });
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
            this.focusedDisplayPolyline.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvbWFya2VyL01hcmtlci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHNEQUFZOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGdGQUFZO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixJQUFJO0FBQzdCLHdCQUF3QixFQUFFLFdBQVcsRUFBRTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDek9ZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQywwREFBYztBQUN4QyxjQUFjLG1CQUFPLENBQUMsNERBQWU7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDOWRBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUmE7O0FBRWIsaUJBQWlCLG1CQUFPLENBQUMsd0RBQWE7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQ0FBbUMsU0FBUztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFHK0I7QUFXaEIsTUFBTSxnQkFBZ0I7SUFVbkMsWUFDRSxHQUFVLEVBQ1YsZUFBaUMsRUFDakMsT0FBZ0MsRUFDaEMsV0FBd0I7UUFFeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO1FBQ2QsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlO1FBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtJQUNyQixDQUFDO0lBQ00sT0FBTztRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEVBQUU7SUFDZCxDQUFDO0lBQ00sS0FBSztRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDdEIsT0FBTTtTQUNQO1FBQ0QsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsT0FBTTthQUNQO1lBQ0QsV0FBVztZQUNYLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtvQkFDdEIsT0FBTTtpQkFDUDtnQkFDRCxJQUFJLENBQUMsT0FBTyxFQUFFO2FBQ2Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFO2FBQ2I7UUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUNNLEtBQUs7UUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk7SUFDckIsQ0FBQztJQUNNLElBQUk7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxXQUFXO1lBQ2QsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2dCQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU07UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFDTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBQ00sUUFBUSxDQUFDLElBQVk7UUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRTtZQUNuRCxNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSwwQkFBMEIsQ0FBQztTQUM1RDtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7SUFDbkIsQ0FBQztJQUNNLElBQUksQ0FBQyxPQUFpQztRQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ2pCLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFDTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7SUFDeEIsQ0FBQztJQUNPLFdBQVcsQ0FBQyxPQUFpQztRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzFCO1lBQ0UsSUFBSSxFQUFFLEtBQUs7WUFDWCxJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxJQUFJO1NBQ2YsRUFDRCxJQUFJLENBQUMsT0FBTyxFQUNaLE9BQU8sQ0FDUjtJQUNILENBQUM7SUFDTyxTQUFTO1FBQ2YsTUFBTSxtQkFBbUIsR0FBd0I7WUFDL0MsVUFBVSxFQUFFLE1BQU07WUFDbEIsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLDREQUFZLENBQzNCLElBQUksQ0FBQyxHQUFHLEVBQ1IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFDdkIsbUJBQW1CLEVBQ25CLElBQUksQ0FBQyxXQUFXLENBQ2pCO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNuQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7QUN6SEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0M7QUFDWTtBQUNZO0FBQ2xCO0FBQ1k7QUFDWTtBQUMzQjtBQUNZO0FBQ047QUFDcUI7QUFFbEUsK0RBQWU7SUFDYiw4REFBTTtJQUNOLDBFQUFZO0lBQ1osc0ZBQWtCO0lBQ2xCLG9FQUFRO0lBQ1IsZ0ZBQWM7SUFDZCw0RkFBb0I7SUFDcEIsaUVBQU87SUFDUCw2RUFBYTtJQUNiLHVFQUFVO0lBQ1YsNEZBQWdCO0NBQ2pCO0FBWUE7Ozs7Ozs7Ozs7Ozs7QUNoQ0Q7QUFBQTtBQUFlLE1BQU0sTUFBTyxTQUFRLENBQUMsQ0FBQyxNQUFNO0lBRzFDLFlBQVksTUFBMEIsRUFBRSxPQUF5QjtRQUMvRCxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ00sT0FBTyxDQUFDLElBQWtCO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtJQUNwQixDQUFDO0lBQ00sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU07SUFDcEIsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUFBO0FBQWtFO0FBS25ELE1BQU0sa0JBQW1CLFNBQVEscURBQVk7SUFHMUQsWUFDRSxHQUFVLEVBQ1YsUUFBd0IsRUFDeEIsT0FBa0MsRUFDbEMsV0FBd0I7UUFFeEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWM7UUFDMUIsTUFBTSxvQkFBb0IsR0FBMEI7WUFDbEQsTUFBTSxFQUFFLElBQUk7WUFDWixNQUFNLEVBQUUsSUFBSTtZQUNaLE1BQU0sRUFBRSxDQUFDO1NBQ1Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQzFCLElBQUksQ0FBQyxPQUFPLEVBQ1osRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsRUFDdkMsT0FBTyxDQUNSO0lBQ0gsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFtQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztRQUN6RCxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRTtJQUN0QixDQUFDO0lBRU0sTUFBTTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU07U0FDUDtRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDdkM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUUzQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUU7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBRXJDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVNLFNBQVM7UUFDZCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQzdEO1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsTUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRTtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzlCLE1BQU0sV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQzFCLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQzNCO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFO2dCQUNsQyxXQUFXLENBQUMsV0FBVyxDQUNyQixFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FDdEQ7YUFDRjtpQkFBTTtnQkFDTCxRQUFRLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7b0JBQ3JDLEtBQUssUUFBUTt3QkFDWCxXQUFXLENBQUMsV0FBVyxDQUNyQixFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQzlDO3dCQUNELE1BQUs7b0JBQ1AsS0FBSyxRQUFRO3dCQUNYLFdBQVcsQ0FBQyxXQUFXLENBQ3JCLEVBQUUsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQ3BEO29CQUNIO3dCQUNFLE1BQUs7aUJBQ1I7YUFDRjtZQUNELFVBQVUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ2xDLENBQUMsQ0FBQztRQUNGLE9BQU8sVUFBVTtJQUNuQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7QUNsR0Q7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFFWDtBQXlEZCxNQUFNLFlBQVk7SUE4Qi9CLFlBQ0UsR0FBVSxFQUNWLFFBQXdCLEVBQ3hCLE9BQTRCLEVBQzVCLFdBQXdCO1FBRXhCLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsVUFBVSxFQUFFLE9BQU87WUFDbkIsb0JBQW9CLEVBQUUsUUFBUTtZQUM5QixRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2xCLFNBQVMsRUFBRSxVQUFVO1lBQ3JCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDcEIsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ3pDLFdBQVcsRUFBRSxNQUFNO1lBQ25CLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUM1QixTQUFTLEVBQUUsS0FBSztZQUNoQixXQUFXLEVBQUU7Z0JBQ1gsR0FBRyxFQUFFLENBQUM7Z0JBQ04sVUFBVSxFQUFFLEdBQUc7YUFDaEI7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUTtRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVztRQUU5QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSTtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUk7UUFDekIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUk7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSTtRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUk7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJO1FBRXhCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUM7UUFFdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDN0MsQ0FBQztJQUNNLElBQUksQ0FBQyxPQUE2QjtRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUk7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRTtJQUN0QixDQUFDO0lBQ00sTUFBTTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU07U0FDUDtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1NBQ3BCO1FBRUQsaUJBQWlCO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssT0FBTyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1NBQ3ZDO2FBQU07WUFDTCxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUMvQixLQUFLLE9BQU8sQ0FBQyxDQUFDO29CQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO29CQUNyQyxNQUFLO2lCQUNOO2dCQUNELEtBQUssU0FBUyxDQUFDLENBQUM7b0JBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQ3RDLE1BQUs7aUJBQ047Z0JBQ0QsS0FBSyxNQUFNLENBQUMsQ0FBQztvQkFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ25DLE1BQUs7aUJBQ047Z0JBQ0QsT0FBTyxDQUFDLENBQUM7b0JBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQztpQkFDOUQ7YUFDRjtTQUNGO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixPQUFPLElBQUk7SUFDYixDQUFDO0lBQ00sT0FBTyxDQUFDLElBQW9CO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTtJQUN0QixDQUFDO0lBQ00sVUFBVSxDQUFDLE9BQTRCLEVBQUUsTUFBTSxHQUFHLEtBQUs7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO1FBQ25ELElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUNkO0lBQ0gsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUNyQixDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ1QsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQXFCLENBQ3ZFO0lBQ0gsQ0FBQztJQUNNLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQUNNLGFBQWEsQ0FBQyxPQUFnQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFNO1NBQ1A7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7SUFDTSxXQUFXLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDZixDQUFDO0lBQ00sVUFBVSxDQUFDLFdBQW1CO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtJQUNmLENBQUM7SUFDTSxLQUFLLENBQUMsRUFBVTtRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzlCLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO2dCQUNyQyxPQUFNO2FBQ1A7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ1MsWUFBWTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFNO1NBQ1A7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQUssT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDdkM7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN2QztJQUNILENBQUM7SUFDUyxVQUFVO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU07U0FDUDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtnQkFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNwQztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUNELGFBQWE7SUFDSCxpQkFBaUI7UUFDekIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1NBQzFCO1FBQ0QsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM3RCxTQUFTO1FBQ1QsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFnQixDQUFDO1FBQzNDLENBQUMsQ0FBQztRQUNGLGNBQWM7UUFDZCxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0Qsd0JBQXdCO1lBQ3hCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUU7YUFDbEM7WUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQWdCO1lBRXJDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDbkMsOEJBQThCO2dCQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTthQUNqQztpQkFBTTtnQkFDTCxtQkFBbUI7Z0JBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUM1QixFQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUM1RDtpQkFDRjthQUNGO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRXhDLGVBQWU7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXBDLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZTtRQUNsQyxPQUFPLElBQUksQ0FBQyxXQUFXO0lBQ3pCLENBQUM7SUFDUyxpQkFBaUIsQ0FBQyxJQUFrQjtRQUM1QyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDNUMsQ0FBQztJQUNTLFdBQVcsQ0FBQyxPQUE0QjtRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDOUUsQ0FBQztJQUNTLFdBQVc7UUFDbkIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUU7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUM3QixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFckQsTUFBTSxNQUFNLEdBQUcsSUFBSSwrQ0FBTSxDQUN2QjtnQkFDRyxLQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUc7Z0JBQ2xDLEtBQWtCLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRzthQUNwQyxFQUNEO2dCQUNFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzthQUMvQixDQUNGO1lBRUQsa0JBQWtCO1lBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ1MsVUFBVTtRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsaUJBQWlCO0lBQ1Qsa0JBQWtCLENBQUMsTUFBYyxFQUFFLFNBQW1CO1FBQzVELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTTtRQUMzQixZQUFZO1FBQ1osSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1NBQy9DO1FBQ0QsV0FBVztRQUNYLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLCtDQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3pELElBQUksRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2pELENBQUM7UUFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFekMsSUFBSSxDQUFDLG9CQUFvQjthQUN0QixTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUNqRCxTQUFTLEVBQUU7UUFDZCxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7WUFDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRTtRQUNwQyxDQUFDLENBQUM7UUFDRixNQUFNLENBQUMsWUFBWSxFQUFFO1FBRXJCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUMsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUNPLGtCQUFrQjtRQUN4QixTQUFTO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUM7WUFDdkMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDdkQsQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3JCLE1BQU0sTUFBTSxHQUFHLElBQUksK0NBQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN0QyxDQUFDO1lBQ0YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztZQUNqQyxDQUFDLENBQUM7WUFDRixPQUFPLE1BQU07UUFDZixDQUFDLENBQUMsQ0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVk7SUFDMUIsQ0FBQztJQUVELGFBQWE7SUFDTCxlQUFlO1FBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtTQUN4QjtRQUNELE1BQU0sSUFBSSxHQUFhLEVBQUU7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUM5QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ2pDLE1BQU0sYUFBYSxHQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhO1lBQ3BFLElBQUksR0FBRyxHQUNMLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRztZQUM5QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUc7YUFDbkM7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNkLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHO1lBQ2xCLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDWixDQUFDO1FBQ0YsMEJBQTBCO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQ2pFO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUztJQUN2QixDQUFDO0lBRU8sbUJBQW1CLENBQUMsSUFBa0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUVPLGFBQWEsQ0FBQyxJQUFrQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztJQUN6QyxDQUFDO0lBRUQsNkJBQTZCO0lBQ3JCLGNBQWMsQ0FDcEIsSUFBa0IsRUFDbEIsUUFBaUI7UUFFakIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO1FBQ3RDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTtRQUMxQyxNQUFNLGNBQWMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FHM0Q7UUFDRCxNQUFNLGdCQUFnQixHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUdqRTtRQUVELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztRQUV4QyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQzdCLEtBQUssT0FBTyxDQUFDLENBQUM7Z0JBQ1osa0JBQWtCO2dCQUNsQix3Q0FBd0M7Z0JBQ3hDLG9EQUFvRDtnQkFDcEQsZ0JBQWdCO2dCQUNoQixLQUFLO2FBQ047WUFDRCxLQUFLLFlBQVksQ0FBQztZQUNsQixLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssU0FBUyxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO29CQUNmLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFO3dCQUNqQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFFBQVE7d0JBQzlDLFNBQVM7cUJBQ1YsQ0FBQztvQkFDRixTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbEQsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxRQUFRO29CQUM5QyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsVUFBVTtvQkFDcEQsYUFBYSxFQUFFLFFBQVE7d0JBQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsV0FBVyxFQUFFLFFBQVE7d0JBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDNUIsQ0FBQzthQUNIO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMzRDtTQUNGO0lBQ0gsQ0FBQztJQUNPLGlCQUFpQixDQUN2QixJQUFrQixFQUNsQixPQUE4QjtRQUU5QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzdCLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztZQUNsRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7U0FDaEQ7UUFDRCxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUU7WUFDekMsS0FBSyxRQUFRLENBQUMsQ0FBQztnQkFDYixRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO29CQUM3QixXQUFXO29CQUNYLEtBQUssWUFBWSxDQUFDLENBQUM7d0JBQ2pCLE9BQU87MEJBQ08sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzsyQkFFckIsT0FBTyxDQUFDLFNBQVM7K0JBQ2IsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OzthQUdyQztxQkFDRjtvQkFDRCxTQUFTO29CQUNULEtBQUssUUFBUSxDQUFDLENBQUM7d0JBQ2IsT0FBTzs7bUNBRWdCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVTs7YUFFN0M7cUJBQ0Y7b0JBQ0QsYUFBYTtvQkFDYixLQUFLLFNBQVMsQ0FBQyxDQUFDO3dCQUNkLE9BQU87O3lCQUVNLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUzs7MkJBRXBCLE9BQU8sQ0FBQyxTQUFTOytCQUNiLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7a0JBR2hDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVzs7YUFFN0I7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsTUFBSzthQUNOO1lBQ0QsS0FBSyxXQUFXLENBQUMsQ0FBQztnQkFDaEIsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtvQkFDN0IsV0FBVztvQkFDWCxLQUFLLFlBQVksQ0FBQyxDQUFDO3dCQUNqQixPQUFPOzt5QkFFTSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7OzJCQUVwQixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDOytCQUM5QixPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O2FBR3JDO3FCQUNGO29CQUNELFNBQVM7b0JBQ1QsS0FBSyxRQUFRLENBQUMsQ0FBQzt3QkFDYixPQUFPOzttQ0FFZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVOzthQUU3QztxQkFDRjtvQkFDRCxhQUFhO29CQUNiLEtBQUssU0FBUyxDQUFDLENBQUM7d0JBQ2QsT0FBTzs7eUJBRU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzsyQkFFcEIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQzsrQkFDOUIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7OztrQkFHaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXOzthQUU3QjtxQkFDRjtpQkFDRjtnQkFDRCxNQUFLO2FBQ047WUFDRCxPQUFPLENBQUMsQ0FBQztnQkFDUCxNQUFNLElBQUksS0FBSyxDQUNiLDRCQUE0QixJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixHQUFHLENBQ2pFO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFDTyxrQkFBa0I7UUFDeEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTTtRQUMzRCxJQUFJLE1BQU0sR0FBRyxDQUFDLFFBQVE7UUFDdEIsSUFBSSxNQUFNLEdBQUcsUUFBUTtRQUNyQixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7WUFDOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUMvQjtRQUNELE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxlQUFlO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTTtRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUk7SUFDM0IsQ0FBQztJQUNPLHVCQUF1QixDQUFDLElBQWtCO1FBQ2hELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FDeEMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FDbEU7UUFDRCxPQUFPLEtBQUs7SUFDZCxDQUFDO0lBQ08sZUFBZSxDQUFDLElBQWtCO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUMzQixPQUFPLEVBQUU7U0FDVjtRQUNELElBQUksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsS0FBSyxRQUFRLEVBQUU7WUFDOUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1NBQ3BFO1FBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUM5QyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxLQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUNuQyxFQUFFO1NBQ0g7SUFDSCxDQUFDO0lBQ08sa0JBQWtCLENBQUMsT0FBeUI7UUFDbEQsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ2YsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7MEJBWWMsNERBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7NEJBVzdCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQnRDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7OztPQUc1QjtZQUNELFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDbkIsQ0FBQztJQUNKLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7OztBQ3ZvQkQ7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDcUM7QUFHckQsTUFBTSxVQUFXLFNBQVEsc0RBQWE7SUFFbkQsWUFDRSxHQUFVLEVBQ1YsUUFBd0IsRUFDeEIsT0FBNEIsRUFDNUIsV0FBd0I7UUFFeEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ00sTUFBTTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU07U0FDUDtRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IscURBQXFEO1FBQ3JELElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDcEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNQLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFDTSxhQUFhLENBQUMsT0FBZ0I7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRTtnQkFDeEIsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNTLFNBQVM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1FBQzVDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7b0JBQzdELFNBQVMsRUFBRSxJQUFJO29CQUNmLFNBQVMsRUFBRSxRQUFRO2lCQUNwQixDQUFDO1lBQ0osQ0FBQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBQ08sZUFBZTtRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUU7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztZQUM5QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEtBQUssV0FBVyxFQUFFO2dCQUN2RCxLQUFLLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN6RDtZQUNELE1BQU0sT0FBTyxHQUFzQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqRSxLQUFLO2FBQ04sQ0FBQztZQUNGLGVBQWU7WUFDZixNQUFNLFVBQVUsR0FBRyxJQUFJLGdEQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sQ0FBQztZQUM3RCxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQyxVQUFVLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQzFCLG9DQUFvQztZQUN0QyxDQUFDLENBQUM7WUFDRixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO2dCQUMxQixVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDakU7WUFDRCxPQUFPLFVBQVU7UUFDbkIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsWUFBWTtJQUMxQixDQUFDO0lBQ08sV0FBVztRQUNqQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTTtTQUNQO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUM5QztJQUNILENBQUM7SUFDTyxpQkFBaUIsQ0FBQyxPQUFnQjtRQUN4QyxPQUFPLENBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNsRTtJQUNILENBQUM7SUFDTyxrQkFBa0IsQ0FBQyxVQUFrQjtRQUMzQyxPQUFPLFVBQVUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUM3QixDQUFDO0lBQ08sZ0JBQWdCO1FBQ3RCLE1BQU0sSUFBSSxHQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssUUFBUTtZQUN4QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1lBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDakIsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUNyRCxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7UUFDN0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7OztBQzFHRDtBQUFBO0FBQWUsTUFBTSxPQUFRLFNBQVEsQ0FBQyxDQUFDLE9BQU87SUFHNUMsWUFDRSxPQUc0QixFQUM1QixPQUEyQjtRQUUzQixLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ00sT0FBTyxDQUFDLElBQWtCO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSTtJQUNwQixDQUFDO0lBQ00sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU07SUFDcEIsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7O0FDcEJEO0FBQUE7QUFBQTtBQUFBO0FBQWdEO0FBRWpCO0FBbUJoQixNQUFNLGFBQWE7SUFpQmhDLFlBQ0UsR0FBVSxFQUNWLFFBQXdCLEVBQ3hCLE9BQTRCLEVBQzVCLFdBQXdCO1FBRXhCLE1BQU0sY0FBYyxHQUF3QjtZQUMxQyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDekMsV0FBVyxFQUFFLE1BQU07WUFDbkIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsSUFBSSxFQUFFLElBQUk7WUFDVixTQUFTLEVBQUUsU0FBUztZQUNwQixNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU8sRUFBRSxDQUFDO1lBQ1YsV0FBVyxFQUFFLEdBQUc7WUFDaEIsc0JBQXNCLEVBQUUsUUFBUTtZQUNoQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLE9BQU8sQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFFOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRTtRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVE7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSTtRQUMxQixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSTtJQUNuQyxDQUFDO0lBQ00sSUFBSSxDQUFDLE9BQTZCO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDdEIsQ0FBQztJQUNNLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFNO1NBQ1A7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUN6QixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQzdCO0lBQ0gsQ0FBQztJQUNNLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUNNLGFBQWEsQ0FBQyxPQUFnQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFNO1NBQ1A7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7SUFDTSxXQUFXLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDZixDQUFDO0lBQ00sS0FBSyxDQUFDLEVBQVU7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQztnQkFDdkMsT0FBTTthQUNQO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNTLFNBQVMsS0FBSSxDQUFDO0lBQ2QsaUJBQWlCLENBQUMsSUFBa0I7UUFDNUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzVDLENBQUM7SUFDUyxlQUFlLENBQUMsSUFBa0I7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQzNCLE9BQU8sRUFBRTtTQUNWO1FBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUM5QyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7U0FDcEU7UUFDRCxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQzlDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQ25DLEVBQUU7U0FDSDtJQUNILENBQUM7SUFDUyxrQkFBa0I7UUFDMUIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTTtRQUMzRCxJQUFJLE1BQU0sR0FBRyxDQUFDLFFBQVE7UUFDdEIsSUFBSSxNQUFNLEdBQUcsUUFBUTtRQUNyQixLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQzVDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7WUFDOUIsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztTQUMvQjtRQUNELE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxlQUFlO1FBQ3BELElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTTtRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUk7SUFDM0IsQ0FBQztJQUNTLHdCQUF3QixDQUFDLElBQWtCO1FBQ25ELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FDeEMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FDbEU7UUFDRCxPQUFPLEtBQUs7SUFDZCxDQUFDO0lBQ1MsbUJBQW1CLENBQUMsT0FBZ0IsRUFBRSxTQUFtQjtRQUNqRSxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU87UUFDN0IsY0FBYztRQUNkLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUU7U0FDcEM7UUFDRCxhQUFhO1FBQ2IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksZ0RBQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDN0QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzVDLENBQUM7UUFDRixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFMUMsSUFBSSxDQUFDLHFCQUFxQjthQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUNsRCxTQUFTLEVBQUU7UUFFZCxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7WUFDL0MsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRTtRQUNyQyxDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsWUFBWSxFQUFFO1FBRXRCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN0RCxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN4QztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDO0lBQy9DLENBQUM7SUFDUyxXQUFXLENBQUMsT0FBNEI7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ3JELENBQUM7SUFDUyxZQUFZO1FBQ3BCLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsa0JBQWtCLEVBQUU7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDN0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sT0FBTyxHQUFHLElBQUksZ0RBQU8sQ0FBRSxLQUFtQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRTlELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ08sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRTtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDNUMsTUFBTSxPQUFPLEdBQXNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pFLEtBQUssRUFBRSxTQUFTO2dCQUNoQixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDNUMsQ0FBQztZQUNGLGVBQWU7WUFDZixNQUFNLFVBQVUsR0FBRyxJQUFJLGdEQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sQ0FBQztZQUM3RCxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUM1QixVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUNyRTtZQUNELFVBQVUsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztZQUNuQyxDQUFDLENBQUM7WUFDRixPQUFPLFVBQVU7UUFDbkIsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsWUFBWTtJQUMxQixDQUFDO0lBQ08sUUFBUSxDQUFDLElBQWtCLEVBQUUsSUFBZ0I7UUFDbkQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1FBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsS0FBSyxXQUFXLEVBQUU7WUFDdkQsS0FBSyxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7U0FDNUM7UUFDRCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssUUFBUTtnQkFDWCxPQUFPLDJEQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RCLEtBQUssU0FBUztnQkFDWixPQUFPLDREQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3ZCO2dCQUNFLE9BQU8sS0FBSztTQUNmO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7O0FDbFBEO0FBQUE7QUFBZSxNQUFNLFFBQVMsU0FBUSxDQUFDLENBQUMsUUFBUTtJQUc5QyxZQUFZLE9BQWlDLEVBQUUsT0FBMkI7UUFDeEUsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUNNLE9BQU8sQ0FBQyxJQUFrQjtRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUk7SUFDcEIsQ0FBQztJQUNNLE9BQU87UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNO0lBQ3BCLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUE7QUFBNkM7QUFrQjlCLE1BQU0sb0JBQXFCLFNBQVEsdURBQWM7SUFHOUQsWUFDRSxHQUFVLEVBQ1YsUUFBd0IsRUFDeEIsT0FBbUMsRUFDbkMsV0FBd0I7UUFFeEIsS0FBSyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQztRQUMxQyxNQUFNLGNBQWMsR0FBK0I7WUFDakQsdUJBQXVCLEVBQUUsUUFBUTtZQUNqQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDNUIsUUFBUSxFQUFFLEdBQUc7WUFDYixLQUFLLEVBQUUsU0FBUztZQUNoQixPQUFPLEVBQUUsR0FBRztTQUNiO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0I7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFFOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRTtRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVE7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDO1FBQ3RCLDhCQUE4QjtRQUU5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUM7SUFDM0QsQ0FBQztJQUNNLElBQUksQ0FBQyxPQUFvQztRQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDdEIsQ0FBQztJQUNNLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFNO1NBQ1A7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixFQUFFO1FBQzdDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FDMUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUM5QjtJQUNILENBQUM7SUFDTSxXQUFXLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQzFCLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDZixDQUFDO0lBQ08seUJBQXlCO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRTtRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2xDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztZQUNyQyxDQUFDLENBQUM7WUFDRixNQUFNLE9BQU8sR0FBK0IsTUFBTSxDQUFDLE1BQU0sQ0FDdkQsRUFBRSxFQUNGLElBQUksQ0FBQyxPQUFPLEVBQ1o7Z0JBQ0UsS0FBSyxFQUNILElBQUksQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEtBQUssUUFBUTtvQkFDL0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztvQkFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDekQsQ0FDRjtZQUVELE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQzlCLFFBQVEsQ0FBQyxVQUFVLEVBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDbkQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ25DLEVBQ0QsT0FBTyxDQUNSO1lBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDNUIsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDdkU7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsYUFBYTtJQUMzQixDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7QUMvR0Q7QUFBQTtBQUFBO0FBQUE7QUFBK0Q7QUFDZjtBQW1CakMsTUFBTSxjQUFjO0lBZ0JqQyxZQUNFLEdBQVUsRUFDVixRQUF3QixFQUN4QixPQUE2QixFQUM3QixXQUF3QjtRQUV4QixNQUFNLGNBQWMsR0FBeUI7WUFDM0MsS0FBSyxFQUFFLFNBQVM7WUFDaEIsdUJBQXVCLEVBQUUsUUFBUTtZQUNqQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDNUIsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ3pDLFdBQVcsRUFBRSxNQUFNO1NBQ3BCO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXO1FBRTlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSTtRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUU7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUk7UUFDM0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUk7SUFDcEMsQ0FBQztJQUNNLElBQUksQ0FBQyxPQUE4QjtRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFDbkQsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDdEIsQ0FBQztJQUNNLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFNO1NBQ1A7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtTQUNwQjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUNNLFNBQVM7UUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBQ00sU0FBUztRQUNkLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUMxQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQzlCO0lBQ0gsQ0FBQztJQUNNLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUNNLGFBQWEsQ0FBQyxPQUFnQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFNO1NBQ1A7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7SUFDTSxXQUFXLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLO1FBQzlCLElBQUksQ0FBQyxNQUFNLEVBQUU7SUFDZixDQUFDO0lBQ00sS0FBSyxDQUFDLEVBQVU7UUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNsQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztnQkFDekMsT0FBTTthQUNQO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNTLGFBQWE7UUFDckIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtRQUV6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JELGlDQUFpQztZQUNqQyw4REFBOEQ7WUFDOUQsaURBQWlEO1lBQ2pELElBQUk7WUFDSixNQUFNLFFBQVEsR0FBRyxJQUFJLGlEQUFRLENBQzFCLEtBQW9CLENBQUMsVUFBVSxFQUE4QixDQUMvRDtZQUVELGtCQUFrQjtZQUNsQixRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUV0QixPQUFPLFFBQVE7UUFDakIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNTLHlCQUF5QixDQUFDLElBQWtCO1FBQ3BELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FDeEMsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FDbEU7UUFDRCxPQUFPLEtBQUs7SUFDZCxDQUFDO0lBQ1Msb0JBQW9CLENBQUMsUUFBa0IsRUFBRSxTQUFtQjtRQUNwRSxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVE7UUFDL0IsY0FBYztRQUNkLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7U0FDckM7UUFDRCxhQUFhO1FBQ2IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksaURBQVEsQ0FDeEMsUUFBUSxDQUFDLFVBQVUsRUFBOEIsRUFDakQ7WUFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLFFBQVEsQ0FBQztTQUN2RCxDQUNGO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRTNDLElBQUksQ0FBQyxzQkFBc0I7YUFDeEIsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDbkQsU0FBUyxFQUFFO1FBRWQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO1lBQ2hELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7UUFDdEMsQ0FBQyxDQUFDO1FBRUYsUUFBUSxDQUFDLFlBQVksRUFBRTtRQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkQsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDekM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLFFBQVEsQ0FBQztJQUNqRCxDQUFDO0lBQ1MsaUJBQWlCLENBQUMsSUFBa0I7UUFDNUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzVDLENBQUM7SUFDUyxlQUFlLENBQUMsSUFBa0I7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQzNCLE9BQU8sRUFBRTtTQUNWO1FBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBRTtZQUM5QyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7U0FDcEU7UUFDRCxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO1lBQzlDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQ25DLEVBQUU7U0FDSDtJQUNILENBQUM7SUFDTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQzlCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsS0FBSyxXQUFXLEVBQUU7Z0JBQ3hELEtBQUssR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzNEO1lBQ0QsTUFBTSxPQUFPLEdBQXNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pFLEtBQUs7YUFDTixDQUFDO1lBQ0YsTUFBTSxXQUFXLEdBQUcsSUFBSSxpREFBUSxDQUM5QixRQUFRLENBQUMsVUFBVSxFQUE4QixFQUNqRCxPQUFPLENBQ1I7WUFDRCxXQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7WUFDckMsQ0FBQyxDQUFDO1lBQ0YsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDNUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDdkU7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDMUMsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsYUFBYTtJQUMzQixDQUFDO0lBQ08sa0JBQWtCO1FBQ3hCLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU07UUFDM0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxRQUFRO1FBQ3RCLElBQUksTUFBTSxHQUFHLFFBQVE7UUFDckIsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUM1QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1lBQzlCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUM7U0FDL0I7UUFDRCxNQUFNLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsZUFBZTtRQUNwRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU07UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJO0lBQzNCLENBQUM7SUFDTyxRQUFRLENBQUMsSUFBa0IsRUFBRSxJQUFnQjtRQUNuRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixLQUFLLFdBQVcsRUFBRTtZQUN4RCxLQUFLLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQztTQUM3QztRQUNELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxRQUFRO2dCQUNYLE9BQU8sMkRBQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sNERBQU8sQ0FBQyxLQUFLLENBQUM7WUFDdkI7Z0JBQ0UsT0FBTyxLQUFLO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7QUN2UEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUU5QixTQUFTLE9BQU8sQ0FBQyxRQUFnQjtJQUMvQixPQUFPLGtDQUFLLENBQUMsUUFBUSxDQUFDO1NBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDWixHQUFHLEVBQUU7QUFDVixDQUFDO0FBQ0QsU0FBUyxNQUFNLENBQUMsUUFBZ0I7SUFDOUIsT0FBTyxrQ0FBSyxDQUFDLFFBQVEsQ0FBQztTQUNuQixNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsR0FBRyxFQUFFO0FBQ1YsQ0FBQztBQUNjO0lBQ2IsT0FBTztJQUNQLE1BQU07Q0FDUDtBQUN5QiIsImZpbGUiOiJsZWFmbGV0LWxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmRpZjtcblx0dmFyIGdkaWY7XG5cdHZhciBiZGlmO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG4vKipcbiAqIFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICogKi9cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHRyZXR1cm4gKFxuXHRcdE1hdGgucG93KHhbMF0gLSB5WzBdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzJdIC0geVsyXSwgMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yICh2YXIga2V5d29yZCBpbiBjc3NLZXl3b3Jkcykge1xuXHRcdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXl3b3JkKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGNvbnZlcnQuZ3JheS5oc3YgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHZhciB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0dmFyIGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xudmFyIHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG52YXIgc3dpenpsZSA9IHJlcXVpcmUoJ3NpbXBsZS1zd2l6emxlJyk7XG5cbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcblxuLy8gY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcblx0aWYgKGNvbG9yTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0XHRyZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xuXHR9XG59XG5cbnZhciBjcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHR0bzoge30sXG5cdGdldDoge31cbn07XG5cbmNzLmdldCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIHByZWZpeCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0dmFyIHZhbDtcblx0dmFyIG1vZGVsO1xuXHRzd2l0Y2ggKHByZWZpeCkge1xuXHRcdGNhc2UgJ2hzbCc6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHNsKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdoc2wnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaHdiJzpcblx0XHRcdHZhbCA9IGNzLmdldC5od2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2h3Yic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFsID0gY3MuZ2V0LnJnYihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAncmdiJztcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0aWYgKCF2YWwpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7bW9kZWw6IG1vZGVsLCB2YWx1ZTogdmFsfTtcbn07XG5cbmNzLmdldC5yZ2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgYWJiciA9IC9eIyhbYS1mMC05XXszLDR9KSQvaTtcblx0dmFyIGhleCA9IC9eIyhbYS1mMC05XXs2fSkoW2EtZjAtOV17Mn0pPyQvaTtcblx0dmFyIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIga2V5d29yZCA9IC8oXFxEKykvO1xuXG5cdHZhciByZ2IgPSBbMCwgMCwgMCwgMV07XG5cdHZhciBtYXRjaDtcblx0dmFyIGk7XG5cdHZhciBoZXhBbHBoYTtcblxuXHRpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuXHRcdGhleEFscGhhID0gbWF0Y2hbMl07XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9zbGljZS12cy1zdWJzdHItdnMtc3Vic3RyaW5nLW1ldGhvZHMtbG9uZy1zdHJpbmcvMTlcblx0XHRcdHZhciBpMiA9IGkgKiAyO1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaTIsIGkyICsgMiksIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicikpIHtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXHRcdGhleEFscGhhID0gbWF0Y2hbM107XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSArIGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0sIDApO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdID09PSAndHJhbnNwYXJlbnQnKSB7XG5cdFx0XHRyZXR1cm4gWzAsIDAsIDAsIDBdO1xuXHRcdH1cblxuXHRcdHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuXG5cdFx0aWYgKCFyZ2IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJnYlszXSA9IDE7XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHJnYltpXSA9IGNsYW1wKHJnYltpXSwgMCwgMjU1KTtcblx0fVxuXHRyZ2JbM10gPSBjbGFtcChyZ2JbM10sIDAsIDEpO1xuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jcy5nZXQuaHNsID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/KD86XFxkKlxcLik/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKHBhcnNlRmxvYXQobWF0Y2hbMV0pICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgcyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBsID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXG5cdFx0cmV0dXJuIFtoLCBzLCBsLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MuZ2V0Lmh3YiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQqW1xcLl0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKChwYXJzZUZsb2F0KG1hdGNoWzFdKSAlIDM2MCkgKyAzNjApICUgMzYwO1xuXHRcdHZhciB3ID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGIgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cdFx0cmV0dXJuIFtoLCB3LCBiLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MudG8uaGV4ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gKFxuXHRcdCcjJyArXG5cdFx0aGV4RG91YmxlKHJnYmFbMF0pICtcblx0XHRoZXhEb3VibGUocmdiYVsxXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzJdKSArXG5cdFx0KHJnYmFbM10gPCAxXG5cdFx0XHQ/IChoZXhEb3VibGUoTWF0aC5yb3VuZChyZ2JhWzNdICogMjU1KSkpXG5cdFx0XHQ6ICcnKVxuXHQpO1xufTtcblxuY3MudG8ucmdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJyknXG5cdFx0OiAncmdiYSgnICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLnJnYi5wZXJjZW50ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgciA9IE1hdGgucm91bmQocmdiYVswXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBnID0gTWF0aC5yb3VuZChyZ2JhWzFdIC8gMjU1ICogMTAwKTtcblx0dmFyIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0gLyAyNTUgKiAxMDApO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclKSdcblx0XHQ6ICdyZ2JhKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8uaHNsID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHNsYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblx0cmV0dXJuIGhzbGEubGVuZ3RoIDwgNCB8fCBoc2xhWzNdID09PSAxXG5cdFx0PyAnaHNsKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSknXG5cdFx0OiAnaHNsYSgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUsICcgKyBoc2xhWzNdICsgJyknO1xufTtcblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmNzLnRvLmh3YiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGh3YmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIGEgPSAnJztcblx0aWYgKGh3YmEubGVuZ3RoID49IDQgJiYgaHdiYVszXSAhPT0gMSkge1xuXHRcdGEgPSAnLCAnICsgaHdiYVszXTtcblx0fVxuXG5cdHJldHVybiAnaHdiKCcgKyBod2JhWzBdICsgJywgJyArIGh3YmFbMV0gKyAnJSwgJyArIGh3YmFbMl0gKyAnJScgKyBhICsgJyknO1xufTtcblxuY3MudG8ua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufTtcblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG5cdHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gJzAnICsgc3RyIDogc3RyO1xufVxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbG9yU3RyaW5nID0gcmVxdWlyZSgnY29sb3Itc3RyaW5nJyk7XG52YXIgY29udmVydCA9IHJlcXVpcmUoJ2NvbG9yLWNvbnZlcnQnKTtcblxudmFyIF9zbGljZSA9IFtdLnNsaWNlO1xuXG52YXIgc2tpcHBlZE1vZGVscyA9IFtcblx0Ly8gdG8gYmUgaG9uZXN0LCBJIGRvbid0IHJlYWxseSBmZWVsIGxpa2Uga2V5d29yZCBiZWxvbmdzIGluIGNvbG9yIGNvbnZlcnQsIGJ1dCBlaC5cblx0J2tleXdvcmQnLFxuXG5cdC8vIGdyYXkgY29uZmxpY3RzIHdpdGggc29tZSBtZXRob2QgbmFtZXMsIGFuZCBoYXMgaXRzIG93biBtZXRob2QgZGVmaW5lZC5cblx0J2dyYXknLFxuXG5cdC8vIHNob3VsZG4ndCByZWFsbHkgYmUgaW4gY29sb3ItY29udmVydCBlaXRoZXIuLi5cblx0J2hleCdcbl07XG5cbnZhciBoYXNoZWRNb2RlbEtleXMgPSB7fTtcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGhhc2hlZE1vZGVsS2V5c1tfc2xpY2UuY2FsbChjb252ZXJ0W21vZGVsXS5sYWJlbHMpLnNvcnQoKS5qb2luKCcnKV0gPSBtb2RlbDtcbn0pO1xuXG52YXIgbGltaXRlcnMgPSB7fTtcblxuZnVuY3Rpb24gQ29sb3Iob2JqLCBtb2RlbCkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmosIG1vZGVsKTtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiBtb2RlbCBpbiBza2lwcGVkTW9kZWxzKSB7XG5cdFx0bW9kZWwgPSBudWxsO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmICEobW9kZWwgaW4gY29udmVydCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW9kZWw6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHR2YXIgaTtcblx0dmFyIGNoYW5uZWxzO1xuXG5cdGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gWzAsIDAsIDBdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHRoaXMubW9kZWwgPSBvYmoubW9kZWw7XG5cdFx0dGhpcy5jb2xvciA9IG9iai5jb2xvci5zbGljZSgpO1xuXHRcdHRoaXMudmFscGhhID0gb2JqLnZhbHBoYTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHZhciByZXN1bHQgPSBjb2xvclN0cmluZy5nZXQob2JqKTtcblx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZzogJyArIG9iaik7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IHJlc3VsdC5tb2RlbDtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dGhpcy5jb2xvciA9IHJlc3VsdC52YWx1ZS5zbGljZSgwLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2YgcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyByZXN1bHQudmFsdWVbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmIChvYmoubGVuZ3RoKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG1vZGVsIHx8ICdyZ2InO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbmV3QXJyID0gX3NsaWNlLmNhbGwob2JqLCAwLCBjaGFubmVscyk7XG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShuZXdBcnIsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmpbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IG9ialtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG5cdFx0Ly8gdGhpcyBpcyBhbHdheXMgUkdCIC0gY2FuIGJlIGNvbnZlcnRlZCBsYXRlciBvbi5cblx0XHRvYmogJj0gMHhGRkZGRkY7XG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbXG5cdFx0XHQob2JqID4+IDE2KSAmIDB4RkYsXG5cdFx0XHQob2JqID4+IDgpICYgMHhGRixcblx0XHRcdG9iaiAmIDB4RkZcblx0XHRdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cdFx0aWYgKCdhbHBoYScgaW4gb2JqKSB7XG5cdFx0XHRrZXlzLnNwbGljZShrZXlzLmluZGV4T2YoJ2FscGhhJyksIDEpO1xuXHRcdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqLmFscGhhID09PSAnbnVtYmVyJyA/IG9iai5hbHBoYSA6IDA7XG5cdFx0fVxuXG5cdFx0dmFyIGhhc2hlZEtleXMgPSBrZXlzLnNvcnQoKS5qb2luKCcnKTtcblx0XHRpZiAoIShoYXNoZWRLZXlzIGluIGhhc2hlZE1vZGVsS2V5cykpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IGhhc2hlZE1vZGVsS2V5c1toYXNoZWRLZXlzXTtcblxuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblx0XHR2YXIgY29sb3IgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb2xvci5wdXNoKG9ialtsYWJlbHNbaV1dKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KGNvbG9yKTtcblx0fVxuXG5cdC8vIHBlcmZvcm0gbGltaXRhdGlvbnMgKGNsYW1waW5nLCBldGMuKVxuXHRpZiAobGltaXRlcnNbdGhpcy5tb2RlbF0pIHtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHZhciBsaW1pdCA9IGxpbWl0ZXJzW3RoaXMubW9kZWxdW2ldO1xuXHRcdFx0aWYgKGxpbWl0KSB7XG5cdFx0XHRcdHRoaXMuY29sb3JbaV0gPSBsaW1pdCh0aGlzLmNvbG9yW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aGlzLnZhbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMudmFscGhhKSk7XG5cblx0aWYgKE9iamVjdC5mcmVlemUpIHtcblx0XHRPYmplY3QuZnJlZXplKHRoaXMpO1xuXHR9XG59XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0dG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJpbmcoKTtcblx0fSxcblxuXHR0b0pTT046IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpc1t0aGlzLm1vZGVsXSgpO1xuXHR9LFxuXG5cdHN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5tb2RlbCBpbiBjb2xvclN0cmluZy50byA/IHRoaXMgOiB0aGlzLnJnYigpO1xuXHRcdHNlbGYgPSBzZWxmLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvW3NlbGYubW9kZWxdKGFyZ3MpO1xuXHR9LFxuXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMucmdiKCkucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8ucmdiLnBlcmNlbnQoYXJncyk7XG5cdH0sXG5cblx0YXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxwaGEgPT09IDEgPyB0aGlzLmNvbG9yLnNsaWNlKCkgOiB0aGlzLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdH0sXG5cblx0b2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHRyZXN1bHRbbGFiZWxzW2ldXSA9IHRoaXMuY29sb3JbaV07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXN1bHQuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXG5cdHVuaXRBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJnYlswXSAvPSAyNTU7XG5cdFx0cmdiWzFdIC89IDI1NTtcblx0XHRyZ2JbMl0gLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IucHVzaCh0aGlzLnZhbHBoYSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHR1bml0T2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkub2JqZWN0KCk7XG5cdFx0cmdiLnIgLz0gMjU1O1xuXHRcdHJnYi5nIC89IDI1NTtcblx0XHRyZ2IuYiAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0cm91bmQ6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHRwbGFjZXMgPSBNYXRoLm1heChwbGFjZXMgfHwgMCwgMCk7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLm1hcChyb3VuZFRvUGxhY2UocGxhY2VzKSkuY29uY2F0KHRoaXMudmFscGhhKSwgdGhpcy5tb2RlbCk7XG5cdH0sXG5cblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLmNvbmNhdChNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWwpKSksIHRoaXMubW9kZWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnZhbHBoYTtcblx0fSxcblxuXHQvLyByZ2Jcblx0cmVkOiBnZXRzZXQoJ3JnYicsIDAsIG1heGZuKDI1NSkpLFxuXHRncmVlbjogZ2V0c2V0KCdyZ2InLCAxLCBtYXhmbigyNTUpKSxcblx0Ymx1ZTogZ2V0c2V0KCdyZ2InLCAyLCBtYXhmbigyNTUpKSxcblxuXHRodWU6IGdldHNldChbJ2hzbCcsICdoc3YnLCAnaHNsJywgJ2h3YicsICdoY2cnXSwgMCwgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gKCh2YWwgJSAzNjApICsgMzYwKSAlIDM2MDsgfSksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYnJhY2Utc3R5bGVcblxuXHRzYXR1cmF0aW9ubDogZ2V0c2V0KCdoc2wnLCAxLCBtYXhmbigxMDApKSxcblx0bGlnaHRuZXNzOiBnZXRzZXQoJ2hzbCcsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHNhdHVyYXRpb252OiBnZXRzZXQoJ2hzdicsIDEsIG1heGZuKDEwMCkpLFxuXHR2YWx1ZTogZ2V0c2V0KCdoc3YnLCAyLCBtYXhmbigxMDApKSxcblxuXHRjaHJvbWE6IGdldHNldCgnaGNnJywgMSwgbWF4Zm4oMTAwKSksXG5cdGdyYXk6IGdldHNldCgnaGNnJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0d2hpdGU6IGdldHNldCgnaHdiJywgMSwgbWF4Zm4oMTAwKSksXG5cdHdibGFjazogZ2V0c2V0KCdod2InLCAyLCBtYXhmbigxMDApKSxcblxuXHRjeWFuOiBnZXRzZXQoJ2NteWsnLCAwLCBtYXhmbigxMDApKSxcblx0bWFnZW50YTogZ2V0c2V0KCdjbXlrJywgMSwgbWF4Zm4oMTAwKSksXG5cdHllbGxvdzogZ2V0c2V0KCdjbXlrJywgMiwgbWF4Zm4oMTAwKSksXG5cdGJsYWNrOiBnZXRzZXQoJ2NteWsnLCAzLCBtYXhmbigxMDApKSxcblxuXHR4OiBnZXRzZXQoJ3h5eicsIDAsIG1heGZuKDEwMCkpLFxuXHR5OiBnZXRzZXQoJ3h5eicsIDEsIG1heGZuKDEwMCkpLFxuXHR6OiBnZXRzZXQoJ3h5eicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGw6IGdldHNldCgnbGFiJywgMCwgbWF4Zm4oMTAwKSksXG5cdGE6IGdldHNldCgnbGFiJywgMSksXG5cdGI6IGdldHNldCgnbGFiJywgMiksXG5cblx0a2V5d29yZDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnZlcnRbdGhpcy5tb2RlbF0ua2V5d29yZCh0aGlzLmNvbG9yKTtcblx0fSxcblxuXHRoZXg6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5oZXgodGhpcy5yZ2IoKS5yb3VuZCgpLmNvbG9yKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZXR1cm4gKChyZ2JbMF0gJiAweEZGKSA8PCAxNikgfCAoKHJnYlsxXSAmIDB4RkYpIDw8IDgpIHwgKHJnYlsyXSAmIDB4RkYpO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcblx0fSxcblxuXHRjb250cmFzdDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWZcblx0XHR2YXIgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuXHRcdHZhciBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcblxuXHRcdGlmIChsdW0xID4gbHVtMikge1xuXHRcdFx0cmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpO1xuXHRcdH1cblxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGlzRGFyazogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFlJUSBlcXVhdGlvbiBmcm9tIGh0dHA6Ly8yNHdheXMub3JnLzIwMTAvY2FsY3VsYXRpbmctY29sb3ItY29udHJhc3Rcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0aXNMaWdodDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAhdGhpcy5pc0RhcmsoKTtcblx0fSxcblxuXHRuZWdhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiLmNvbG9yW2ldID0gMjU1IC0gcmdiLmNvbG9yW2ldO1xuXHRcdH1cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdGxpZ2h0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSArPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRhcmtlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdIC09IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSArPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRlc2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSAtPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHdoaXRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzFdICs9IGh3Yi5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzJdICs9IGh3Yi5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0Z3JheXNjYWxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0cmV0dXJuIENvbG9yLnJnYih2YWwsIHZhbCwgdmFsKTtcblx0fSxcblxuXHRmYWRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSAtICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0b3BhcXVlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgKyAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdHJvdGF0ZTogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHR2YXIgaHVlID0gaHNsLmNvbG9yWzBdO1xuXHRcdGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcblx0XHRodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuXHRcdGhzbC5jb2xvclswXSA9IGh1ZTtcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdC8vIHBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuXHRcdHZhciBjb2xvcjEgPSBtaXhpbkNvbG9yLnJnYigpO1xuXHRcdHZhciBjb2xvcjIgPSB0aGlzLnJnYigpO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gQ29sb3IucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpLFxuXHRcdFx0XHRjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9XG59O1xuXG4vLyBtb2RlbCBjb252ZXJzaW9uIG1ldGhvZHMgYW5kIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGlmIChza2lwcGVkTW9kZWxzLmluZGV4T2YobW9kZWwpICE9PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXG5cdC8vIGNvbnZlcnNpb24gbWV0aG9kc1xuXHRDb2xvci5wcm90b3R5cGVbbW9kZWxdID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzLm1vZGVsID09PSBtb2RlbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihhcmd1bWVudHMsIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3QWxwaGEgPSB0eXBlb2YgYXJndW1lbnRzW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBjaGFubmVscyA6IHRoaXMudmFscGhhO1xuXHRcdHJldHVybiBuZXcgQ29sb3IoYXNzZXJ0QXJyYXkoY29udmVydFt0aGlzLm1vZGVsXVttb2RlbF0ucmF3KHRoaXMuY29sb3IpKS5jb25jYXQobmV3QWxwaGEpLCBtb2RlbCk7XG5cdH07XG5cblx0Ly8gJ3N0YXRpYycgY29uc3RydWN0aW9uIG1ldGhvZHNcblx0Q29sb3JbbW9kZWxdID0gZnVuY3Rpb24gKGNvbG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbG9yID0gemVyb0FycmF5KF9zbGljZS5jYWxsKGFyZ3VtZW50cyksIGNoYW5uZWxzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihjb2xvciwgbW9kZWwpO1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIHJvdW5kVG8obnVtLCBwbGFjZXMpIHtcblx0cmV0dXJuIE51bWJlcihudW0udG9GaXhlZChwbGFjZXMpKTtcbn1cblxuZnVuY3Rpb24gcm91bmRUb1BsYWNlKHBsYWNlcykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG51bSkge1xuXHRcdHJldHVybiByb3VuZFRvKG51bSwgcGxhY2VzKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0c2V0KG1vZGVsLCBjaGFubmVsLCBtb2RpZmllcikge1xuXHRtb2RlbCA9IEFycmF5LmlzQXJyYXkobW9kZWwpID8gbW9kZWwgOiBbbW9kZWxdO1xuXG5cdG1vZGVsLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcblx0XHQobGltaXRlcnNbbV0gfHwgKGxpbWl0ZXJzW21dID0gW10pKVtjaGFubmVsXSA9IG1vZGlmaWVyO1xuXHR9KTtcblxuXHRtb2RlbCA9IG1vZGVsWzBdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0dmFyIHJlc3VsdDtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdFx0dmFsID0gbW9kaWZpZXIodmFsKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKTtcblx0XHRcdHJlc3VsdC5jb2xvcltjaGFubmVsXSA9IHZhbDtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKS5jb2xvcltjaGFubmVsXTtcblx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdHJlc3VsdCA9IG1vZGlmaWVyKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn1cblxuZnVuY3Rpb24gbWF4Zm4obWF4KSB7XG5cdHJldHVybiBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIHYpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QXJyYXkodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXTtcbn1cblxuZnVuY3Rpb24gemVyb0FycmF5KGFyciwgbGVuZ3RoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodHlwZW9mIGFycltpXSAhPT0gJ251bWJlcicpIHtcblx0XHRcdGFycltpXSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcnJheWlzaChvYmopIHtcblx0aWYgKCFvYmogfHwgdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShvYmopIHx8XG5cdFx0KG9iai5sZW5ndGggPj0gMCAmJiAob2JqLnNwbGljZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG5cdFx0XHQoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIChvYmoubGVuZ3RoIC0gMSkpICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3RyaW5nJykpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5aXNoID0gcmVxdWlyZSgnaXMtYXJyYXlpc2gnKTtcblxudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBzd2l6emxlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzd2l6emxlKGFyZ3MpIHtcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciBhcmcgPSBhcmdzW2ldO1xuXG5cdFx0aWYgKGlzQXJyYXlpc2goYXJnKSkge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vamF2YXNjcmlwdC1hcnJheS1jb25jYXQtdnMtcHVzaC85OFxuXHRcdFx0cmVzdWx0cyA9IGNvbmNhdC5jYWxsKHJlc3VsdHMsIHNsaWNlLmNhbGwoYXJnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuc3dpenpsZS53cmFwID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZuKHN3aXp6bGUoYXJndW1lbnRzKSk7XG5cdH07XG59O1xuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IE1hcmtlcnNMYXllciwge1xuICBNYXJrZXJzTGF5ZXJPcHRpb25zLFxuICBNYXJrZXJzSGVhdExheWVyT3B0aW9ucyxcbn0gZnJvbSAnLi4vbWFya2VyL01hcmtlcnNMYXllcidcblxuaW50ZXJmYWNlIER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zIGV4dGVuZHMgTWFya2Vyc0hlYXRMYXllck9wdGlvbnMge1xuICAvKiog5piv5ZCm5b6q546v5pKt5pS+ICovXG4gIGxvb3A6IGJvb2xlYW5cbiAgLyoqIOaYr+WQpuiHquWKqOaSreaUviAqL1xuICBhdXRvOiBib29sZWFuXG4gIC8qKiDpl7TpmpTml7bpl7QgKi9cbiAgaW50ZXJ2YWw6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljSGVhdExheWVyIHtcbiAgLyoqIOW9k+WJjeaSreaUvuWIsOesrOWHoOatpSAqL1xuICBwcml2YXRlIGN1cnJlbnRTdGVwOiBudW1iZXJcblxuICBwcml2YXRlIG1hcDogTC5NYXBcbiAgcHJpdmF0ZSBkeW5hbWljRGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdW11cbiAgcHJpdmF0ZSBvcHRpb25zOiBEeW5hbWljSGVhdExheWVyT3B0aW9uc1xuICBwcml2YXRlIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICBwcml2YXRlIGxheWVyOiBNYXJrZXJzTGF5ZXJcbiAgcHJpdmF0ZSBpc1BhdXNlOiBib29sZWFuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZHluYW1pY0RhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVtdLFxuICAgIG9wdGlvbnM6IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZHluYW1pY0RhdGFMaXN0ID0gZHluYW1pY0RhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwXG4gICAgdGhpcy5pc1BhdXNlID0gdHJ1ZVxuICB9XG4gIHB1YmxpYyByZXN0YXJ0KCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IDBcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gICAgdGhpcy5zdGFydCgpXG4gIH1cbiAgcHVibGljIHN0YXJ0KCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYXV0bykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNQYXVzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8qKiDmkq3mlL7lrozmr5UgKi9cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdGFydCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKytcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKVxuICAgICAgICB0aGlzLnN0YXJ0KClcbiAgICAgIH1cbiAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpXG4gIH1cbiAgcHVibGljIHBhdXNlKCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IHRydWVcbiAgfVxuICBwdWJsaWMgcHJldigpIHtcbiAgICB0aGlzLmN1cnJlbnRTdGVwLS1cbiAgICB0aGlzLmN1cnJlbnRTdGVwID1cbiAgICAgICh0aGlzLmN1cnJlbnRTdGVwICsgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoKSAlXG4gICAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGhcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gIH1cbiAgcHVibGljIG5leHQoKSB7XG4gICAgdGhpcy5jdXJyZW50U3RlcCsrXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IHRoaXMuY3VycmVudFN0ZXAgJSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGhcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gIH1cbiAgcHVibGljIGdvdG9TdGVwKHN0ZXA6IG51bWJlcikge1xuICAgIGlmIChzdGVwIDwgMCB8fCBzdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBnb3RvU3RlcCgke3N0ZXB9KTogc3RlcCBpcyBvdXQgb2YgaW5kZXggYClcbiAgICB9XG4gICAgdGhpcy5sYXllci5zZXREYXRhKHRoaXMuZHluYW1pY0RhdGFMaXN0W3N0ZXBdKVxuICAgIHRoaXMubGF5ZXIuZHJhdygpXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKVxuICAgIHRoaXMuaW5pdExheWVyKClcbiAgICB0aGlzLmxheWVyLmRyYXcoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIGZpdEJvdW5kcygpIHtcbiAgICB0aGlzLmxheWVyLmZpdEJvdW5kcygpXG4gIH1cbiAgcHJpdmF0ZSBpbml0T3B0aW9ucyhvcHRpb25zPzogRHluYW1pY0hlYXRMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgYXV0bzogZmFsc2UsXG4gICAgICAgIGludGVydmFsOiAxMDAwLFxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIG9wdGlvbnNcbiAgICApXG4gIH1cbiAgcHJpdmF0ZSBpbml0TGF5ZXIoKSB7XG4gICAgY29uc3QgbWFya2Vyc0xheWVyT3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucyA9IHtcbiAgICAgIHJlbmRlclR5cGU6ICdoZWF0JyxcbiAgICAgIGhlYXRPcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSBuZXcgTWFya2Vyc0xheWVyKFxuICAgICAgdGhpcy5tYXAsXG4gICAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdFswXSxcbiAgICAgIG1hcmtlcnNMYXllck9wdGlvbnMsXG4gICAgICB0aGlzLmNoYW5uZWxGdW5jXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmxheWVyXG4gIH1cbn1cbiIsImltcG9ydCBNYXJrZXIgZnJvbSAnLi9tYXJrZXIvTWFya2VyJ1xuaW1wb3J0IE1hcmtlcnNMYXllciBmcm9tICcuL21hcmtlci9NYXJrZXJzTGF5ZXInXG5pbXBvcnQgTWFya2Vyc0J1ZmZlckxheWVyIGZyb20gJy4vbWFya2VyL01hcmtlcnNCdWZmZXJMYXllcidcbmltcG9ydCBQb2x5bGluZSBmcm9tICcuL3BvbHlsaW5lL1BvbHlsaW5lJ1xuaW1wb3J0IFBvbHlsaW5lc0xheWVyIGZyb20gJy4vcG9seWxpbmUvUG9seWxpbmVzTGF5ZXInXG5pbXBvcnQgUG9seWxpbmVzQnVmZmVyTGF5ZXIgZnJvbSAnLi9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllcidcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vcG9seWdvbi9Qb2x5Z29uJ1xuaW1wb3J0IFBvbHlnb25zTGF5ZXIgZnJvbSAnLi9wb2x5Z29uL1BvbHlnb25zTGF5ZXInXG5pbXBvcnQgR3JpZHNMYXllciBmcm9tICcuL3BvbHlnb24vR3JpZHNMYXllcidcbmltcG9ydCBEeW5hbWljSGVhdExheWVyIGZyb20gJy4vZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIE1hcmtlcixcbiAgTWFya2Vyc0xheWVyLFxuICBNYXJrZXJzQnVmZmVyTGF5ZXIsXG4gIFBvbHlsaW5lLFxuICBQb2x5bGluZXNMYXllcixcbiAgUG9seWxpbmVzQnVmZmVyTGF5ZXIsXG4gIFBvbHlnb24sXG4gIFBvbHlnb25zTGF5ZXIsXG4gIEdyaWRzTGF5ZXIsXG4gIER5bmFtaWNIZWF0TGF5ZXIsXG59XG5leHBvcnQge1xuICBNYXJrZXIsXG4gIE1hcmtlcnNMYXllcixcbiAgTWFya2Vyc0J1ZmZlckxheWVyLFxuICBQb2x5bGluZSxcbiAgUG9seWxpbmVzTGF5ZXIsXG4gIFBvbHlsaW5lc0J1ZmZlckxheWVyLFxuICBQb2x5Z29uLFxuICBQb2x5Z29uc0xheWVyLFxuICBHcmlkc0xheWVyLFxuICBEeW5hbWljSGVhdExheWVyLFxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlciBleHRlbmRzIEwuTWFya2VyIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfX2RhdGE6IERhdGFMaXN0SXRlbVxuICBjb25zdHJ1Y3RvcihsYXRsbmc6IEwuTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IEwuTWFya2VyT3B0aW9ucykge1xuICAgIHN1cGVyKGxhdGxuZywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IE1hcmtlcnNMYXllciwgeyBNYXJrZXJzTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi9NYXJrZXJzTGF5ZXInXG5pbnRlcmZhY2UgTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9ucyBleHRlbmRzIE1hcmtlcnNMYXllck9wdGlvbnMge1xuICBidWZmZXJUb29sdGlwQXR0cjogc3RyaW5nXG4gIGJ1ZmZlck9wdGlvbnM6IEwuQ2lyY2xlTWFya2VyT3B0aW9uc1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Vyc0J1ZmZlckxheWVyIGV4dGVuZHMgTWFya2Vyc0xheWVyIHtcbiAgcHVibGljIG9wdGlvbnM6IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnNcbiAgcHJpdmF0ZSBidWZmZXJMYXllcjogTC5MYXllckdyb3VwXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIHRoaXMudHlwZSA9ICdtYXJrZXJCdWZmZXInXG4gICAgY29uc3QgZGVmYXVsdEJ1ZmZlck9wdGlvbnM6IEwuQ2lyY2xlTWFya2VyT3B0aW9ucyA9IHtcbiAgICAgIHJhZGl1czogMTAwMCxcbiAgICAgIHN0cm9rZTogdHJ1ZSxcbiAgICAgIHdlaWdodDogMSxcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHsgYnVmZmVyT3B0aW9uczogZGVmYXVsdEJ1ZmZlck9wdGlvbnMgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApXG4gIH1cblxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLmNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvclxuICAgIHRoaXMuaW5pdE1hcmtlcnMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cblxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLmJ1ZmZlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmJ1ZmZlckxheWVyKVxuICAgIH1cbiAgICB0aGlzLm1hcmtlckxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpXG4gICAgdGhpcy5idWZmZXJMYXllciA9IHRoaXMuY29uZmlnQnVmZmVyTGF5ZXIoKVxuXG4gICAgdGhpcy5sYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5sYXllci5hZGRMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5idWZmZXJMYXllcilcblxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFya2Vycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgIHJldHVybiBwcmV2LmV4dGVuZChcbiAgICAgICAgY3Vyci5nZXRMYXRMbmcoKS50b0JvdW5kcyh0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5yYWRpdXMpXG4gICAgICApXG4gICAgfSwgdGhpcy5tYXJrZXJzWzBdLmdldExhdExuZygpLnRvQm91bmRzKHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLnJhZGl1cykpXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0J1ZmZlckxheWVyKCkge1xuICAgIGNvbnN0IGdyb3VwTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGNvbnN0IGNpcmNsZUxheWVyID0gTC5jaXJjbGUoXG4gICAgICAgIG1hcmtlci5nZXRMYXRMbmcoKSxcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnNcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnVmZmVyVG9vbHRpcEF0dHIpIHtcbiAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5idWZmZXJUb29sdGlwQXR0cl1cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICAgICAgICApXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdyb3VwTGF5ZXIuYWRkTGF5ZXIoY2lyY2xlTGF5ZXIpXG4gICAgfSlcbiAgICByZXR1cm4gZ3JvdXBMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBsaWdodGVuIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXG5pbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgTWFya2VyIGZyb20gJy4vTWFya2VyJ1xuXG4vKiog5riy5p+T5qC35byPIOaVo+eCuXzng63lipvlm74gKi9cbnR5cGUgTWFya2Vyc0xheWVyUmVuZGVyVHlwZSA9ICdwb2ludCcgfCAnaGVhdCcgfCAnY2x1c3RlcidcblxuLyoqIOa4suafk+minOiJsuagt+W8jyDljZXoibJ85YiG5q61ICovXG50eXBlIE1hcmtlcnNMYXllclJlbmRlclBvaW50Q29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuXG4vKiog5pWj54K55Zu+5qCH57G75Z6LIGljb25mb250fHN2Z3xpbWFnZSAqL1xudHlwZSBNYXJrZXJzTGF5ZXJJY29uVHlwZSA9ICdmb250X2NsYXNzJyB8ICd1bmljb2RlJyB8ICdzeW1ib2wnIHwgJ2ltYWdlJ1xuXG5pbnRlcmZhY2UgSWNvblJlbmRlckZ1bmNPcHRpb24ge1xuICBpY29uU2l6ZTogW251bWJlciwgbnVtYmVyXVxuICBpY29uQ29sb3I6IHN0cmluZ1xufVxudHlwZSBJY29uUmVuZGVyRnVuYyA9IChcbiAgZGF0YTogRGF0YUxpc3RJdGVtLFxuICBwYXJhbXM6IEljb25SZW5kZXJGdW5jT3B0aW9uXG4pID0+IHN0cmluZ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlcnNMYXllck9wdGlvbnMge1xuICByZW5kZXJUeXBlOiBNYXJrZXJzTGF5ZXJSZW5kZXJUeXBlXG4gIHJlbmRlclBvaW50Q29sb3JUeXBlPzogTWFya2Vyc0xheWVyUmVuZGVyUG9pbnRDb2xvclR5cGVcbiAgaWNvblR5cGU/OiBNYXJrZXJzTGF5ZXJJY29uVHlwZVxuXG4gIGljb25JbWFnZVVybD86IHN0cmluZ1xuICBpY29uU2l6ZT86IFtudW1iZXIsIG51bWJlcl1cbiAgaWNvbkNsYXNzPzogc3RyaW5nXG4gIGljb25Vbmljb2RlPzogc3RyaW5nXG4gIGljb25TeW1ib2w/OiBzdHJpbmdcbiAgaWNvbkNvbG9yPzogc3RyaW5nXG4gIGljb25BbmNob3I/OiBbbnVtYmVyLCBudW1iZXJdXG4gIGljb25SZW5kZXJlcj86IEljb25SZW5kZXJGdW5jXG5cbiAgLy8g5piv5ZCm6IGa5ZCI77yM5LyY5YWI57qn6auY5LqOIHJlbmRlclR5cGUgPT0gcG9pbnRcbiAgaXNDbHVzdGVyPzogYm9vbGVhblxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxuXG4gIGhlYXRPcHRpb25zPzogTWFya2Vyc0hlYXRMYXllck9wdGlvbnNcbiAgY2x1c3Rlck9wdGlvbnM/OiBMLk1hcmtlcnNDbHVzdGVyT3B0aW9uc1xufVxuXG4vKiog6L2s5YyW5Li654Ot5Yqb5Zu+55qEIG9wdGlvbnMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2Vyc0hlYXRMYXllck9wdGlvbnMgZXh0ZW5kcyBMLkhlYXRMYXllck9wdGlvbnMge1xuICBkaW1lbnNpb25BdHRyPzogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlcnNMYXllciB7XG4gIHB1YmxpYyBtYXA6IEwuTWFwXG4gIHB1YmxpYyBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW11cbiAgcHVibGljIG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnNcbiAgcHVibGljIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuXG4gIHB1YmxpYyB0eXBlOiBzdHJpbmdcblxuICBwcm90ZWN0ZWQgbWFya2VyczogTWFya2VyW11cblxuICBwcm90ZWN0ZWQgZm9jdXNlZE1hcmtlcjogTWFya2VyXG4gIHByb3RlY3RlZCBob3ZlcmVkTWFya2VyOiBNYXJrZXJcbiAgLyoqIOmcgOimgeWxleekuueahOaUvuWkp+eahOWbvuaghyAqL1xuICBwcm90ZWN0ZWQgZm9jdXNlZERpc3BsYXlNYXJrZXI6IE1hcmtlclxuICBwcm90ZWN0ZWQgbWFya2VyTGF5ZXI6IEwuQ2FudmFzSWNvbkxheWVyXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOlxuICAgIHwgTC5DYW52YXNJY29uTGF5ZXJcbiAgICB8IEwuSGVhdExheWVyXG4gICAgfCBMLk1hcmtlcnNDbHVzdGVyXG4gICAgfCBMLkxheWVyR3JvdXBcbiAgcHJvdGVjdGVkIHpvb21TdGFydENiOiAoKSA9PiB2b2lkXG4gIHByb3RlY3RlZCB6b29tRW5kQ2I6ICgpID0+IHZvaWRcbiAgcHJpdmF0ZSBoZWF0TGF5ZXI6IEwuSGVhdExheWVyXG4gIHByaXZhdGUgY2x1c3RlckxheWVyOiBMLk1hcmtlcnNDbHVzdGVyXG5cbiAgcHJpdmF0ZSBzZWdtZW50ZWRNaW46IG51bWJlclxuICBwcml2YXRlIHNlZ21lbnRlZFN0ZXA6IG51bWJlclxuICBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICByZW5kZXJUeXBlOiAncG9pbnQnLFxuICAgICAgcmVuZGVyUG9pbnRDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgaWNvblR5cGU6ICd1bmljb2RlJyxcbiAgICAgIGljb25TaXplOiBbMjAsIDIwXSxcbiAgICAgIGljb25DbGFzczogJ2ljb25mb250JyxcbiAgICAgIGljb25Db2xvcjogJyMzMzg4RkYnLFxuICAgICAgaWNvbkFuY2hvcjogWzEwLCAyMF0sXG4gICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIGlzQ2x1c3RlcjogZmFsc2UsXG4gICAgICBoZWF0T3B0aW9uczoge1xuICAgICAgICBtYXg6IDEsXG4gICAgICAgIG1pbk9wYWNpdHk6IDAuNSxcbiAgICAgIH0sXG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdtYXJrZXInXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5sYXllciA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBudWxsXG4gICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbnVsbFxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIgPSBudWxsXG4gICAgdGhpcy5tYXJrZXJzID0gW11cbiAgICB0aGlzLm1hcmtlckxheWVyID0gbnVsbFxuICAgIHRoaXMuaGVhdExheWVyID0gbnVsbFxuICAgIHRoaXMuY2x1c3RlckxheWVyID0gbnVsbFxuXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBJbmZpbml0eVxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDFcblxuICAgIHRoaXMuem9vbVN0YXJ0Q2IgPSB0aGlzLl96b29tU3RhcnRDYi5iaW5kKHRoaXMpXG4gICAgdGhpcy56b29tRW5kQ2IgPSB0aGlzLl96b29tRW5kQ2IuYmluZCh0aGlzKVxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBNYXJrZXJzTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRNYXJrZXJzKClcbiAgICB0aGlzLmluaXRFdmVudHMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgLy8g5LyY5YWI5Yik5patIGlzQ2x1c3RlclxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyICYmIHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnKSB7XG4gICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ01hcmtlckxheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2NsdXN0ZXInOiB7XG4gICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQ2x1c3RlckxheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2hlYXQnOiB7XG4gICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnSGVhdExheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclR5cGUg5LiN5pSv5oyBXCIke3RoaXMub3B0aW9ucy5yZW5kZXJUeXBlfVwiYClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIHNldERhdGEoZGF0YTogRGF0YUxpc3RJdGVtW10pIHtcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YVxuICB9XG4gIHB1YmxpYyBzZXRPcHRpb25zKG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMsIHJlZHJhdyA9IGZhbHNlKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgaWYgKHJlZHJhdykge1xuICAgICAgdGhpcy5yZWRyYXcoKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pXG4gIH1cbiAgcHVibGljIGdldEJvdW5kcygpOiBMLkxhdExuZ0JvdW5kc0V4cHJlc3Npb24ge1xuICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXJrZXJzLm1hcChcbiAgICAgIChtYXJrZXIpID0+XG4gICAgICAgIFttYXJrZXIuZ2V0TGF0TG5nKCkubGF0LCBtYXJrZXIuZ2V0TGF0TG5nKCkubG5nXSBhcyBbbnVtYmVyLCBudW1iZXJdXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcilcbiAgICB9XG4gICAgdGhpcy5tYXAub2ZmKCd6b29tc3RhcnQnLCB0aGlzLnpvb21TdGFydENiKVxuICAgIHRoaXMubWFwLm9mZignem9vbWVuZCcsIHRoaXMuem9vbUVuZENiKVxuICB9XG4gIHB1YmxpYyB0b2dnbGVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlXG4gICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlKClcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25zLmljb25Db2xvciA9IGNvbG9yXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VJY29uKGljb25Vbmljb2RlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGUgPSBpY29uVW5pY29kZVxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcGl0Y2goaWQ6IHN0cmluZykge1xuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGlmIChtYXJrZXIuZ2V0RGF0YSgpLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIsIHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIF96b29tU3RhcnRDYigpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUgPT09ICdwb2ludCcgJiYgIXRoaXMub3B0aW9ucy5pc0NsdXN0ZXIpIHtcbiAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF96b29tRW5kQ2IoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSAnbWFya2VyJykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnICYmICF0aGlzLm9wdGlvbnMuaXNDbHVzdGVyKSB7XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgfVxuICB9XG4gIC8qKiDmuLLmn5PkuLrmlaPngrnlm74gKi9cbiAgcHJvdGVjdGVkIGNvbmZpZ01hcmtlckxheWVyKCkge1xuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcmtlckxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIGNvbnN0IGNhbnZhc0ljb25MYXllciA9IEwuY2FudmFzSWNvbkxheWVyKHt9KS5hZGRUbyh0aGlzLm1hcClcbiAgICAvLyDmt7vliqDngrnlh7vkuovku7ZcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25DbGlja0xpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciBhcyBNYXJrZXIpXG4gICAgfSlcbiAgICAvLyDmt7vliqAgaG92ZXIg5LqL5Lu2XG4gICAgY2FudmFzSWNvbkxheWVyLmFkZE9uSG92ZXJMaXN0ZW5lcigoXywgW3sgZGF0YTogbWFya2VyIH1dKSA9PiB7XG4gICAgICAvLyDkuYvliY3mnIkgaG92ZXIg55qE5YWz6ZetIHRvb2x0aXBcbiAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIpIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmNsb3NlVG9vbHRpcCgpXG4gICAgICB9XG4gICAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBtYXJrZXIgYXMgTWFya2VyXG5cbiAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0VG9vbHRpcCgpKSB7XG4gICAgICAgIC8vIOWmguaenOW3sue7j+iuvue9riB0b29sdGlwIOebtOaOpeWxleekuiB0b29sdGlwXG4gICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5vcGVuVG9vbHRpcCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlkKbliJnnu5HlrpogdG9vbHRpcCDlubblsZXnpLpcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICcnICsgdGhpcy5ob3ZlcmVkTWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkTWFya2Vycyh0aGlzLm1hcmtlcnMpXG5cbiAgICAvLyDop6PlhrPliJ3mrKHmuLLmn5PkuI3lh7rlm77moIfpl67pophcbiAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLm1hcC5nZXRDZW50ZXIoKSlcblxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBjYW52YXNJY29uTGF5ZXJcbiAgICByZXR1cm4gdGhpcy5tYXJrZXJMYXllclxuICB9XG4gIHByb3RlY3RlZCBnZXRUb29sVGlwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgfVxuICBwcm90ZWN0ZWQgaW5pdE9wdGlvbnMob3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdE1hcmtlcnMoKSB7XG4gICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuICAgIHRoaXMubWFya2VycyA9IFtdXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuXG4gICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKFxuICAgICAgICBbXG4gICAgICAgICAgKGxheWVyIGFzIEwuTWFya2VyKS5nZXRMYXRMbmcoKS5sYXQsXG4gICAgICAgICAgKGxheWVyIGFzIEwuTWFya2VyKS5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgIF0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiB0aGlzLmdldE1hcmtlckljb24oZGF0YSksXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgbWFya2VyLnNldERhdGEoZGF0YSlcbiAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcilcbiAgICB9KVxuICB9XG4gIHByb3RlY3RlZCBpbml0RXZlbnRzKCkge1xuICAgIHRoaXMubWFwLm9uKCd6b29tc3RhcnQnLCB0aGlzLnpvb21TdGFydENiKVxuICAgIHRoaXMubWFwLm9uKCd6b29tZW5kJywgdGhpcy56b29tRW5kQ2IpXG4gICAgdGhpcy5tYXAub24oJ2NvbnRleHRtZW51JywgY29uc29sZS5sb2cpXG4gIH1cbiAgLy8g5aSE55CGIG1hcmtlciDngrnlh7vkuovku7ZcbiAgcHJpdmF0ZSBtYXJrZXJDbGlja0hhbmRsZXIobWFya2VyOiBNYXJrZXIsIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBtYXJrZXJcbiAgICAvLyDliKDpmaTliY3kuIDkuKrmlL7lpKflm77moIdcbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmVGcm9tKHRoaXMubWFwKVxuICAgIH1cbiAgICAvLyDnlJ/miJDlvZPliY3mlL7lpKflm77moIdcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbmV3IE1hcmtlcihtYXJrZXIuZ2V0TGF0TG5nKCksIHtcbiAgICAgIGljb246IHRoaXMuZ2V0TGFyZ2VyTWFya2VySWNvbihtYXJrZXIuZ2V0RGF0YSgpKSxcbiAgICB9KVxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIuYWRkVG8odGhpcy5tYXApXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgLm9wZW5Qb3B1cCgpXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlKClcbiAgICB9KVxuICAgIG1hcmtlci5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkTWFya2VyLmdldExhdExuZygpKVxuICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhtYXJrZXIuZ2V0TGF0TG5nKCkudG9Cb3VuZHMoMTApKVxuICAgIH1cbiAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1tYXJrZXInLCBtYXJrZXIpXG4gIH1cbiAgcHJpdmF0ZSBjb25maWdDbHVzdGVyTGF5ZXIoKSB7XG4gICAgLy8g5bGV56S66IGa5ZCI5Zu+5bGCXG4gICAgaWYgKHRoaXMuY2x1c3RlckxheWVyKSB7XG4gICAgICB0aGlzLmNsdXN0ZXJMYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKHtcbiAgICAgIGljb25DcmVhdGVGdW5jdGlvbjogdGhpcy5pY29uQ3JlYXRlRnVuY3Rpb24uYmluZCh0aGlzKSxcbiAgICB9KVxuICAgIHRoaXMuY2x1c3RlckxheWVyLmFkZExheWVycyhcbiAgICAgIHRoaXMubWFya2Vycy5tYXAoKG0pID0+IHtcbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihtLmdldExhdExuZygpLCB7XG4gICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKG0uZ2V0RGF0YSgpKSxcbiAgICAgICAgfSlcbiAgICAgICAgbWFya2VyLnNldERhdGEobS5nZXREYXRhKCkpXG4gICAgICAgIG1hcmtlci5iaW5kVG9vbHRpcCgnJyArIG1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXSlcbiAgICAgICAgbWFya2VyLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSlcbiAgICAgICAgbWFya2VyLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBtYXJrZXJcbiAgICAgIH0pXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmNsdXN0ZXJMYXllclxuICB9XG5cbiAgLyoqIOa4suafk+S4uueDreWKm+WbviAqL1xuICBwcml2YXRlIGNvbmZpZ0hlYXRMYXllcigpIHtcbiAgICBpZiAodGhpcy5oZWF0TGF5ZXIpIHtcbiAgICAgIHRoaXMuaGVhdExheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIGNvbnN0IGFsdHM6IG51bWJlcltdID0gW11cbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBsYXRMbmcgPSBtYXJrZXIuZ2V0TGF0TG5nKClcbiAgICAgIGNvbnN0IGRpbWVuc2lvbkF0dHIgPVxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLmRpbWVuc2lvbkF0dHJcbiAgICAgIGxldCBhbHQgPVxuICAgICAgICAoZGltZW5zaW9uQXR0ciAmJiBtYXJrZXIuZ2V0RGF0YSgpW2RpbWVuc2lvbkF0dHJdKSB8fFxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4XG4gICAgICBpZiAodHlwZW9mIGFsdCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgYWx0ID0gdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLm1heFxuICAgICAgfVxuICAgICAgYWx0cy5wdXNoKGFsdClcbiAgICAgIG1hcmtlci5zZXRMYXRMbmcoTC5sYXRMbmcobGF0TG5nLmxhdCwgbGF0TG5nLmxuZywgYWx0KSlcbiAgICB9KVxuICAgIHRoaXMuaGVhdExheWVyID0gTC5oZWF0TGF5ZXIoXG4gICAgICB0aGlzLm1hcmtlcnMubWFwKChpdCwgaW5kZXgpID0+IFtcbiAgICAgICAgaXQuZ2V0TGF0TG5nKCkubGF0LFxuICAgICAgICBpdC5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgIGFsdHNbaW5kZXhdLFxuICAgICAgXSksXG4gICAgICAvLyBUT0RPOiDkvb/nlKggbWVyZ2VDb25maWcg566A5YyWXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB7IG1pbk9wYWNpdHk6IDAuNSB9LCB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMpXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmhlYXRMYXllclxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYXJnZXJNYXJrZXJJY29uKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIHRydWUpXG4gIH1cblxuICBwcml2YXRlIGdldE1hcmtlckljb24oZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgZmFsc2UpXG4gIH1cblxuICAvKiog6I635Y+W5b2T5YmNIG1hcmtlciDpnIDopoHlsZXnpLrnmoQgaWNvbiAqL1xuICBwcml2YXRlIF9nZXRNYXJrZXJJY29uKFxuICAgIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgICBpc0xhcmdlcjogYm9vbGVhblxuICApOiBMLkljb24gfCBMLkRpdkljb24ge1xuICAgIGNvbnN0IGljb25TaXplID0gdGhpcy5vcHRpb25zLmljb25TaXplXG4gICAgY29uc3QgaWNvbkFuY2hvciA9IHRoaXMub3B0aW9ucy5pY29uQW5jaG9yXG4gICAgY29uc3QgbGFyZ2VySWNvblNpemUgPSBbaWNvblNpemVbMF0gKiAxLjUsIGljb25TaXplWzFdICogMS41XSBhcyBbXG4gICAgICBudW1iZXIsXG4gICAgICBudW1iZXJcbiAgICBdXG4gICAgY29uc3QgbGFyZ2VySWNvbkFuY2hvciA9IFtpY29uQW5jaG9yWzBdICogMS41LCBpY29uQW5jaG9yWzFdICogMS41XSBhcyBbXG4gICAgICBudW1iZXIsXG4gICAgICBudW1iZXJcbiAgICBdXG5cbiAgICBjb25zdCBpY29uQ29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yXG5cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgY2FzZSAnaW1hZ2UnOiB7XG4gICAgICAgIC8vIHJldHVybiBMLmljb24oe1xuICAgICAgICAvLyAgIGljb25Vcmw6IHRoaXMub3B0aW9ucy5pY29uSW1hZ2VVcmwsXG4gICAgICAgIC8vICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgLy8gICBpY29uQW5jaG9yLFxuICAgICAgICAvLyB9KVxuICAgICAgfVxuICAgICAgY2FzZSAnZm9udF9jbGFzcyc6XG4gICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgaHRtbDogdGhpcy5nZXRDdXN0b21JY29uSFRNTChkYXRhLCB7XG4gICAgICAgICAgICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXJnZXIgPyAnbGFyZ2UtZGl2LWljb24tbWFya2VyJyA6ICcnLFxuICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgaWNvbkFuY2hvcjogaXNMYXJnZXIgPyBsYXJnZXJJY29uQW5jaG9yIDogaWNvbkFuY2hvcixcbiAgICAgICAgICB0b29sdGlwQW5jaG9yOiBpc0xhcmdlclxuICAgICAgICAgICAgPyBbMCwgLWxhcmdlckljb25BbmNob3JbMV0gLyAyXVxuICAgICAgICAgICAgOiBbMCwgLWljb25BbmNob3JbMV0gLyAyXSxcbiAgICAgICAgICBwb3B1cEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyVHlwZSDkuI3og73kuLogJHt0aGlzLm9wdGlvbnMuaWNvblR5cGV9YClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBnZXRDdXN0b21JY29uSFRNTChcbiAgICBkYXRhOiBEYXRhTGlzdEl0ZW0sXG4gICAgb3B0aW9ucz86IEljb25SZW5kZXJGdW5jT3B0aW9uXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmljb25SZW5kZXJlcihkYXRhLCBvcHRpb25zKVxuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJQb2ludENvbG9yVHlwZSkge1xuICAgICAgY2FzZSAnc2luZ2xlJzoge1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgICAgIC8vIOS9v+eUqCBjbGFzc1xuICAgICAgICAgIGNhc2UgJ2ZvbnRfY2xhc3MnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHtvcHRpb25zLmljb25Db2xvcn07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS9v+eUqCBzdmdcbiAgICAgICAgICBjYXNlICdzeW1ib2wnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbi1zeW1ib2xcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMub3B0aW9ucy5pY29uU3ltYm9sfVwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkvb/nlKggdW5pY29kZVxuICAgICAgICAgIGNhc2UgJ3VuaWNvZGUnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke29wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5vcHRpb25zLmljb25Vbmljb2RlfVxuICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdzZWdtZW50ZWQnOiB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICAgICAgLy8g5L2/55SoIGNsYXNzXG4gICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKX07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS9v+eUqCBzdmdcbiAgICAgICAgICBjYXNlICdzeW1ib2wnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbi1zeW1ib2xcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMub3B0aW9ucy5pY29uU3ltYm9sfVwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkvb/nlKggdW5pY29kZVxuICAgICAgICAgIGNhc2UgJ3VuaWNvZGUnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSl9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGV9XG4gICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGByZW5kZXJQb2ludENvbG9yVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlfVwiYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByaXZhdGUgZ2V0UG9wdXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWBcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke1xuICAgICAgICBkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICB9YFxuICAgIH1cbiAgfVxuICBwcml2YXRlIGljb25DcmVhdGVGdW5jdGlvbihjbHVzdGVyOiBMLk1hcmtlcnNDbHVzdGVyKSB7XG4gICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICBodG1sOiBgXG4gICAgICAgPGRpdlxuICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVuKHRoaXMub3B0aW9ucy5pY29uQ29sb3IpfTtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLm9wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA5cHg7XG4gICAgICAgICAgICBcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgIGxlZnQ6IDlweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICR7Y2x1c3Rlci5nZXRDaGlsZENvdW50KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgIGljb25TaXplOiBbNDAsIDQwXSxcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgUG9seWdvbiBmcm9tICcuL1BvbHlnb24nXG5pbXBvcnQgUG9seWdvbnNMYXllciwgeyBQb2x5Z29uTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi9Qb2x5Z29uc0xheWVyJ1xuaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkc0xheWVyIGV4dGVuZHMgUG9seWdvbnNMYXllciB7XG4gIHByaXZhdGUgcHJvcE1heExlbmd0aDogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIHRoaXMucHJvcE1heExlbmd0aCA9IC0xXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0dyaWRMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICAvLyB0b29sdGlwIOacieWPr+iDvemcgOimgeebtOaOpeWxleekuu+8jOmcgOimgeWcqCBwb2x5Z29uIOa3u+WKoOWIsOWcsOWbvuS4iuS5i+WQjuaJjeWPr+S7pe+8jOaJgOS7pemcgOimgeW7tui/n+iuvue9rlxuICAgIHRoaXMuY29uZmlnVG9vbHRpcCgpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnpvb21IYW5kbGVyKClcbiAgICB9LCAyMDApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgdG9nZ2xlVG9vbHRpcCh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICBpZiAocG9seWdvbi5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgcG9seWdvbi5nZXRUb29sdGlwKCkuc2V0T3BhY2l0eSh2aXNpYmxlID8gMSA6IDApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdEV2ZW50KCkge1xuICAgIHRoaXMubWFwLm9uKCd6b29tJywgdGhpcy56b29tSGFuZGxlci5iaW5kKHRoaXMpKVxuICB9XG4gIHByaXZhdGUgY29uZmlnVG9vbHRpcCgpIHtcbiAgICB0aGlzLnByb3BNYXhMZW5ndGggPSB0aGlzLmdldFByb3BNYXhMZW5ndGgoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICBwb2x5Z29uLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQocG9seWdvbi5nZXREYXRhKCkpLCB7XG4gICAgICAgICAgcGVybWFuZW50OiB0cnVlLFxuICAgICAgICAgIGRpcmVjdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGNvbmZpZ0dyaWRMYXllcigpIHtcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5Z29ucyA9IHRoaXMucG9seWdvbnMubWFwKChwb2x5Z29uKSA9PiB7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWdvbkNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihwb2x5Z29uLmdldERhdGEoKSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnM6IEwuUG9seWxpbmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yLFxuICAgICAgfSlcbiAgICAgIC8vIOmHjeaWsOW6lOeUqCBvcHRpb25zXG4gICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IFBvbHlnb24ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpXG4gICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpXG4gICAgICBuZXdQb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWdvbi5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1BvbHlnb25cbiAgICB9KVxuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIuYWRkTGF5ZXIocG9seWdvbilcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllclxuICB9XG4gIHByaXZhdGUgem9vbUhhbmRsZXIoKSB7XG4gICAgY29uc3QgcG9seWdvbiA9IHRoaXMucG9seWdvbnNbMF1cbiAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb24pID5cbiAgICAgICAgdGhpcy5nZXRUb29sdGlwTWF4V2lkdGgodGhpcy5wcm9wTWF4TGVuZ3RoKVxuICAgIClcbiAgfVxuICBwcml2YXRlIGdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb246IFBvbHlnb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCkpLnggLVxuICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpLnhcbiAgICApXG4gIH1cbiAgcHJpdmF0ZSBnZXRUb29sdGlwTWF4V2lkdGgodGV4dExlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRleHRMZW5ndGggKiAxMiArIDE0XG4gIH1cbiAgcHJpdmF0ZSBnZXRQcm9wTWF4TGVuZ3RoKCkge1xuICAgIGNvbnN0IHByb3AgPVxuICAgICAgdHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnBvcHVwQXR0clxuICAgICAgICA6IHRoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVcbiAgICByZXR1cm4gdGhpcy5wb2x5Z29uc1xuICAgICAgLm1hcCgocG9seWdvbikgPT4gYCR7cG9seWdvbi5nZXREYXRhKClbcHJvcF19YC5sZW5ndGgpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChwcmV2LCBjdXJyKVxuICAgICAgfSwgMClcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBMLlBvbHlnb24ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxhdGxuZ3M6XG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdXG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdW11cbiAgICAgIHwgTC5MYXRMbmdFeHByZXNzaW9uW11bXVtdLFxuICAgIG9wdGlvbnM/OiBMLlBvbHlsaW5lT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKVxuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHRoaXMuX19kYXRhID0gZGF0YVxuICB9XG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YVxuICB9XG59XG4iLCJpbXBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfSBmcm9tICcuLi91dGlscy9pbmRleCdcbmltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vUG9seWdvbidcblxuLyoqIOa4suafk+minOiJsuagt+W8jyDljZXoibJ85YiG5q61ICovXG50eXBlIFBvbHlnb25MYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbnR5cGUgQ29sb3JNb2RlID0gJ2RhcmtlbicgfCAnbGlnaHRlbicgfCAnbm9ybWFsJ1xuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5Z29uQ29sb3JUeXBlOiBQb2x5Z29uTGF5ZXJSZW5kZXJDb2xvclR5cGVcblxuICAvKiogcG9wdXAg5bGV56S65a2X5q61ICovXG4gIHBvcHVwQXR0cj86IHN0cmluZyB8IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IGFueSB9XG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb25zTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOiBMLkxheWVyR3JvdXBcblxuICBwcm90ZWN0ZWQgbWFwOiBMLk1hcFxuICBwcm90ZWN0ZWQgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zXG4gIHByb3RlY3RlZCBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgcHJvdGVjdGVkIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJvdGVjdGVkIHBvbHlnb25zOiBQb2x5Z29uW11cbiAgcHJvdGVjdGVkIGZvY3VzZWRQb2x5Z29uOiBQb2x5Z29uXG4gIHByb3RlY3RlZCBmb2N1c2VkRGlzcGxheVBvbHlnb246IFBvbHlnb25cbiAgcHJvdGVjdGVkIHBvbHlnb25MYXllcjogTC5MYXllckdyb3VwXG5cbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMgPSB7XG4gICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIGZpbGw6IHRydWUsXG4gICAgICBmaWxsQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIHdlaWdodDogMSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBmaWxsT3BhY2l0eTogMC41LFxuICAgICAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncG9seWdvbidcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMucG9seWdvbnMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5mb2N1c2VkUG9seWdvbiA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbiA9IG51bGxcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWdvbkxheWVyT3B0aW9ucykge1xuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5Z29ucygpXG4gICAgdGhpcy5pbml0RXZlbnQoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlnb25MYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWdvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5Z29ucy5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksXG4gICAgICB0aGlzLnBvbHlnb25zWzBdLmdldEJvdW5kcygpXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgdG9nZ2xlVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZVxuICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKVxuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsbENvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHBpdGNoKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgIGlmIChwb2x5Z29uLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24sIHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRFdmVudCgpIHt9XG4gIHByb3RlY3RlZCBnZXRUb29sVGlwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgfVxuICBwcm90ZWN0ZWQgZ2V0UG9wdXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWBcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke1xuICAgICAgICBkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICB9YFxuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByb3RlY3RlZCBnZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByb3RlY3RlZCBwb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb246IFBvbHlnb24sIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRQb2x5Z29uID0gcG9seWdvblxuICAgIC8vIOWIoOmZpOWJjeS4gOS4qiBmb2N1c1xuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKClcbiAgICB9XG4gICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwge1xuICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgfSlcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5hZGRUbyh0aGlzLm1hcClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgIC5vcGVuUG9wdXAoKVxuXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKVxuICAgIH0pXG4gICAgcG9seWdvbi5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24uZ2V0Q2VudGVyKCkpXG4gICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHBvbHlnb24uZ2V0Qm91bmRzKCkpXG4gICAgfVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlnb24nLCBwb2x5Z29uKVxuICB9XG4gIHByb3RlY3RlZCBpbml0T3B0aW9ucyhvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRQb2x5Z29ucygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5wb2x5Z29ucyA9IFtdXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuICAgICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKChsYXllciBhcyBMLlBvbHlnb24pLmdldExhdExuZ3MoKSlcblxuICAgICAgcG9seWdvbi5zZXREYXRhKGRhdGEpXG4gICAgICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbilcbiAgICB9KVxuICB9XG4gIHByaXZhdGUgY29uZmlnUG9seWdvbkxheWVyKCkge1xuICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlnb25zID0gdGhpcy5wb2x5Z29ucy5tYXAoKHBvbHlnb24pID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IEwuUG9seWxpbmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgICB9KVxuICAgICAgLy8g6YeN5paw5bqU55SoIG9wdGlvbnNcbiAgICAgIGNvbnN0IG5ld1BvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucylcbiAgICAgIG5ld1BvbHlnb24uc2V0RGF0YShwb2x5Z29uLmdldERhdGEoKSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG5ld1BvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgIH1cbiAgICAgIG5ld1BvbHlnb24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbilcbiAgICAgIH0pXG4gICAgICByZXR1cm4gbmV3UG9seWdvblxuICAgIH0pXG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWdvbkxheWVyXG4gIH1cbiAgcHJpdmF0ZSBnZXRDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0sIG1vZGU/OiBDb2xvck1vZGUpIHtcbiAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlnb25Db2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKGRhdGEpXG4gICAgfVxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgcmV0dXJuIGRhcmtlbihjb2xvcilcbiAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICByZXR1cm4gbGlnaHRlbihjb2xvcilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb2xvclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCB0eXBlIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiA9XG4gIHwgTC5MYXRMbmdFeHByZXNzaW9uW11cbiAgfCBMLkxhdExuZ0V4cHJlc3Npb25bXVtdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZSBleHRlbmRzIEwuUG9seWxpbmUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKGxhdGxuZ3M6IFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IEwuUG9seWxpbmVPcHRpb25zKSB7XG4gICAgc3VwZXIobGF0bG5ncywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlsaW5lc0xheWVyIGZyb20gJy4vUG9seWxpbmVzTGF5ZXInXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBQb2x5bGluZUxheWVyUmVuZGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuaW50ZXJmYWNlIFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Db3JyaWRvck9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nXG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlsaW5lc0J1ZmZlckxheWVyIGV4dGVuZHMgUG9seWxpbmVzTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9uc1xuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgc3VwZXIobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zID0ge1xuICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIGNvcnJpZG9yOiAxMDAsXG4gICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgb3BhY2l0eTogMC41LFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncG9seWxpbmVCdWZmZXInXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgLy8gdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5bGluZXMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKVxuICB9XG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKFxuICAgICAgKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLFxuICAgICAgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKClcbiAgICApXG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwcml2YXRlIGNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKSB7XG4gICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgcG9seWxpbmUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lKVxuICAgICAgfSlcbiAgICAgIGNvbnN0IG9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGNvbnN0IHBvbHlsaW5lQnVmZmVyID0gTC5jb3JyaWRvcihcbiAgICAgICAgKHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBMLkxhdExuZ1tdKS5tYXAoKGxhdExuZykgPT5cbiAgICAgICAgICBMLmxhdExuZyhbbGF0TG5nLmxhdCwgbGF0TG5nLmxuZ10pXG4gICAgICAgICksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgcG9seWxpbmVCdWZmZXIuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKHBvbHlsaW5lQnVmZmVyKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgUG9seWxpbmUsIHsgUG9seWxpbmVMYXRMbmdFeHByZXNzaW9uIH0gZnJvbSAnLi9Qb2x5bGluZSdcbmltcG9ydCB7IGRhcmtlbiwgbGlnaHRlbiB9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbnR5cGUgQ29sb3JNb2RlID0gJ2RhcmtlbicgfCAnbGlnaHRlbicgfCAnbm9ybWFsJ1xuaW50ZXJmYWNlIFBvbHlsaW5lTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWxpbmVzTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOiBMLkxheWVyR3JvdXBcblxuICBwcm90ZWN0ZWQgbWFwOiBMLk1hcFxuICBwcm90ZWN0ZWQgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9uc1xuICBwcm90ZWN0ZWQgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gIHByb3RlY3RlZCBwb2x5bGluZXM6IFBvbHlsaW5lW11cbiAgcHJvdGVjdGVkIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJvdGVjdGVkIGZvY3VzZWRQb2x5bGluZTogUG9seWxpbmVcbiAgcHJvdGVjdGVkIGZvY3VzZWREaXNwbGF5UG9seWxpbmU6IFBvbHlsaW5lXG4gIHByb3RlY3RlZCBwb2x5bGluZUxheWVyOiBMLkxheWVyR3JvdXBcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9ucyA9IHtcbiAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3BvbHlsaW5lJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbnVsbFxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBQb2x5bGluZUxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWxpbmVMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVzLnJlZHVjZShcbiAgICAgIChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSxcbiAgICAgIHRoaXMucG9seWxpbmVzWzBdLmdldEJvdW5kcygpXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgdG9nZ2xlVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZVxuICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKClcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25zLmZpbGxDb2xvciA9IGNvbG9yXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIGlmIChwb2x5bGluZS5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUsIHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRQb2x5bGluZXMoKSB7XG4gICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuXG4gICAgdGhpcy5wb2x5bGluZXMgPSB0aGlzLmRhdGFMaXN0Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF1cbiAgICAgIC8vIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgLy8gaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIC8vICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSlcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IHBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKFxuICAgICAgICAobGF5ZXIgYXMgTC5Qb2x5bGluZSkuZ2V0TGF0TG5ncygpIGFzIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvblxuICAgICAgKVxuXG4gICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICBwb2x5bGluZS5zZXREYXRhKGRhdGEpXG5cbiAgICAgIHJldHVybiBwb2x5bGluZVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByb3RlY3RlZCBwb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZTogUG9seWxpbmUsIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRQb2x5bGluZSA9IHBvbHlsaW5lXG4gICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSkge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpXG4gICAgfVxuICAgIC8vIOeUn+aIkOW9k+WJjSBmb2N1c1xuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSA9IG5ldyBQb2x5bGluZShcbiAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5bGluZS5nZXREYXRhKCksICdub3JtYWwnKSxcbiAgICAgIH1cbiAgICApXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmFkZFRvKHRoaXMubWFwKVxuXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlsaW5lLmdldERhdGEoKSkpXG4gICAgICAub3BlblBvcHVwKClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICBwb2x5bGluZS5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmdldENlbnRlcigpKVxuICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5bGluZS5nZXRCb3VuZHMoKSlcbiAgICB9XG4gICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stcG9seWxpbmUnLCBwb2x5bGluZSlcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gIH1cbiAgcHJvdGVjdGVkIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtcbiAgICAgICAgZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgfWBcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjb25maWdQb2x5bGluZUxheWVyKCkge1xuICAgIHRoaXMucG9seWxpbmVMYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKVxuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgY29sb3IsXG4gICAgICB9KVxuICAgICAgY29uc3QgbmV3UG9seWxpbmUgPSBuZXcgUG9seWxpbmUoXG4gICAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIG5ld1BvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSlcbiAgICAgIH0pXG4gICAgICBuZXdQb2x5bGluZS5zZXREYXRhKHBvbHlsaW5lLmdldERhdGEoKSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWxpbmUuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKG5ld1BvbHlsaW5lKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0Q29sb3IoZGF0YTogRGF0YUxpc3RJdGVtLCBtb2RlPzogQ29sb3JNb2RlKSB7XG4gICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKGRhdGEpXG4gICAgfVxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgcmV0dXJuIGRhcmtlbihjb2xvcilcbiAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICByZXR1cm4gbGlnaHRlbihjb2xvcilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb2xvclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgQ29sb3IgZnJvbSAnY29sb3InXG5cbmZ1bmN0aW9uIGxpZ2h0ZW4oaGV4Q29sb3I6IHN0cmluZykge1xuICByZXR1cm4gQ29sb3IoaGV4Q29sb3IpXG4gICAgLmxpZ2h0ZW4oMC41KVxuICAgIC5oZXgoKVxufVxuZnVuY3Rpb24gZGFya2VuKGhleENvbG9yOiBzdHJpbmcpIHtcbiAgcmV0dXJuIENvbG9yKGhleENvbG9yKVxuICAgIC5kYXJrZW4oMC41KVxuICAgIC5oZXgoKVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICBsaWdodGVuLFxuICBkYXJrZW4sXG59XG5leHBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==

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

var dataList = [
  {
    geometry: {
      type: 'Point',
      coordinates: [116.401216, 39.90778],
    },
    price: 0.1,
    name: '5',
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [116.391216, 39.90778],
    },
    price: 0.1,
    name: '2',
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [116.391216, 39.91778],
    },
    price: 0.1,
    name: '1',
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [116.401216, 39.91778],
    },
    price: 100,
    name: '2',
  },
]

var layer = new _leaflet_layer__WEBPACK_IMPORTED_MODULE_0___default.a.MarkersLayer(
  map,
  dataList,
  {
    renderType: 'heat',
    heatOptions: {
      dimensionAttr: 'price',
      radius: 30,
      minOpacity: 0.7,
      blur: 60,
      // max: 1,
    },
  },
  console.log
)
layer.draw()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sZWFmbGV0LWxheWVyLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUsyQjtBQUNqQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYTtBQUM1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RCx1Q0FBdUM7QUFDL0Ysc0RBQXNELHFDQUFxQzs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLElBQUk7QUFDN0Isd0JBQXdCLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVB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SSxtQ0FBbUM7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlHQUFpRyxtQkFBbUIsRUFBRTtBQUN0SDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlD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QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVzdC9zcmMvYXBwLmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBNSVQgbGljZW5zZSAqL1xudmFyIGNzc0tleXdvcmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29sb3ItbmFtZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanNcIik7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmRpZjtcblx0dmFyIGdkaWY7XG5cdHZhciBiZGlmO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG4vKipcbiAqIFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICogKi9cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHRyZXR1cm4gKFxuXHRcdE1hdGgucG93KHhbMF0gLSB5WzBdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzJdIC0geVsyXSwgMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yICh2YXIga2V5d29yZCBpbiBjc3NLZXl3b3Jkcykge1xuXHRcdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXl3b3JkKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGNvbnZlcnQuZ3JheS5oc3YgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHZhciB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0dmFyIGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNvbnZlcnNpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb252ZXJzaW9ucyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanNcIik7XG52YXIgcm91dGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JvdXRlICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qc1wiKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNvbnZlcnNpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb252ZXJzaW9ucyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanNcIik7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb2xvck5hbWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29sb3ItbmFtZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qc1wiKTtcbnZhciBzd2l6emxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgc2ltcGxlLXN3aXp6bGUgKi8gXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qc1wiKTtcblxudmFyIHJldmVyc2VOYW1lcyA9IHt9O1xuXG4vLyBjcmVhdGUgYSBsaXN0IG9mIHJldmVyc2UgY29sb3IgbmFtZXNcbmZvciAodmFyIG5hbWUgaW4gY29sb3JOYW1lcykge1xuXHRpZiAoY29sb3JOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdHJldmVyc2VOYW1lc1tjb2xvck5hbWVzW25hbWVdXSA9IG5hbWU7XG5cdH1cbn1cblxudmFyIGNzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHRvOiB7fSxcblx0Z2V0OiB7fVxufTtcblxuY3MuZ2V0ID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHR2YXIgcHJlZml4ID0gc3RyaW5nLnN1YnN0cmluZygwLCAzKS50b0xvd2VyQ2FzZSgpO1xuXHR2YXIgdmFsO1xuXHR2YXIgbW9kZWw7XG5cdHN3aXRjaCAocHJlZml4KSB7XG5cdFx0Y2FzZSAnaHNsJzpcblx0XHRcdHZhbCA9IGNzLmdldC5oc2woc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2hzbCc7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdod2InOlxuXHRcdFx0dmFsID0gY3MuZ2V0Lmh3YihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAnaHdiJztcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2YWwgPSBjcy5nZXQucmdiKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdyZ2InO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRpZiAoIXZhbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHttb2RlbDogbW9kZWwsIHZhbHVlOiB2YWx9O1xufTtcblxuY3MuZ2V0LnJnYiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBhYmJyID0gL14jKFthLWYwLTldezMsNH0pJC9pO1xuXHR2YXIgaGV4ID0gL14jKFthLWYwLTldezZ9KShbYS1mMC05XXsyfSk/JC9pO1xuXHR2YXIgcmdiYSA9IC9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgcGVyID0gL15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBrZXl3b3JkID0gLyhcXEQrKS87XG5cblx0dmFyIHJnYiA9IFswLCAwLCAwLCAxXTtcblx0dmFyIG1hdGNoO1xuXHR2YXIgaTtcblx0dmFyIGhleEFscGhhO1xuXG5cdGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChoZXgpKSB7XG5cdFx0aGV4QWxwaGEgPSBtYXRjaFsyXTtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL3NsaWNlLXZzLXN1YnN0ci12cy1zdWJzdHJpbmctbWV0aG9kcy1sb25nLXN0cmluZy8xOVxuXHRcdFx0dmFyIGkyID0gaSAqIDI7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaC5zbGljZShpMiwgaTIgKyAyKSwgMTYpO1xuXHRcdH1cblxuXHRcdGlmIChoZXhBbHBoYSkge1xuXHRcdFx0cmdiWzNdID0gTWF0aC5yb3VuZCgocGFyc2VJbnQoaGV4QWxwaGEsIDE2KSAvIDI1NSkgKiAxMDApIC8gMTAwO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKSkge1xuXHRcdG1hdGNoID0gbWF0Y2hbMV07XG5cdFx0aGV4QWxwaGEgPSBtYXRjaFszXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2ldICsgbWF0Y2hbaV0sIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhICsgaGV4QWxwaGEsIDE2KSAvIDI1NSkgKiAxMDApIC8gMTAwO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSwgMCk7XG5cdFx0fVxuXG5cdFx0aWYgKG1hdGNoWzRdKSB7XG5cdFx0XHRyZ2JbM10gPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocGVyKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChtYXRjaFtpICsgMV0pICogMi41NSk7XG5cdFx0fVxuXG5cdFx0aWYgKG1hdGNoWzRdKSB7XG5cdFx0XHRyZ2JbM10gPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goa2V5d29yZCkpIHtcblx0XHRpZiAobWF0Y2hbMV0gPT09ICd0cmFuc3BhcmVudCcpIHtcblx0XHRcdHJldHVybiBbMCwgMCwgMCwgMF07XG5cdFx0fVxuXG5cdFx0cmdiID0gY29sb3JOYW1lc1ttYXRjaFsxXV07XG5cblx0XHRpZiAoIXJnYikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmdiWzNdID0gMTtcblxuXHRcdHJldHVybiByZ2I7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0cmdiW2ldID0gY2xhbXAocmdiW2ldLCAwLCAyNTUpO1xuXHR9XG5cdHJnYlszXSA9IGNsYW1wKHJnYlszXSwgMCwgMSk7XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNzLmdldC5oc2wgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgaHNsID0gL15oc2xhP1xcKFxccyooWystXT8oPzpcXGQqXFwuKT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGhzbCk7XG5cblx0aWYgKG1hdGNoKSB7XG5cdFx0dmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0dmFyIGggPSAocGFyc2VGbG9hdChtYXRjaFsxXSkgKyAzNjApICUgMzYwO1xuXHRcdHZhciBzID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGwgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cblx0XHRyZXR1cm4gW2gsIHMsIGwsIGFdO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jcy5nZXQuaHdiID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGh3YiA9IC9eaHdiXFwoXFxzKihbKy1dP1xcZCpbXFwuXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG5cblx0aWYgKG1hdGNoKSB7XG5cdFx0dmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0dmFyIGggPSAoKHBhcnNlRmxvYXQobWF0Y2hbMV0pICUgMzYwKSArIDM2MCkgJSAzNjA7XG5cdFx0dmFyIHcgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKTtcblx0XHR2YXIgYiA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApO1xuXHRcdHZhciBhID0gY2xhbXAoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcblx0XHRyZXR1cm4gW2gsIHcsIGIsIGFdO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jcy50by5oZXggPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHJldHVybiAoXG5cdFx0JyMnICtcblx0XHRoZXhEb3VibGUocmdiYVswXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzFdKSArXG5cdFx0aGV4RG91YmxlKHJnYmFbMl0pICtcblx0XHQocmdiYVszXSA8IDFcblx0XHRcdD8gKGhleERvdWJsZShNYXRoLnJvdW5kKHJnYmFbM10gKiAyNTUpKSlcblx0XHRcdDogJycpXG5cdCk7XG59O1xuXG5jcy50by5yZ2IgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnKSdcblx0XHQ6ICdyZ2JhKCcgKyBNYXRoLnJvdW5kKHJnYmFbMF0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsxXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzJdKSArICcsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8ucmdiLnBlcmNlbnQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdIC8gMjU1ICogMTAwKTtcblx0dmFyIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0gLyAyNTUgKiAxMDApO1xuXHR2YXIgYiA9IE1hdGgucm91bmQocmdiYVsyXSAvIDI1NSAqIDEwMCk7XG5cblx0cmV0dXJuIHJnYmEubGVuZ3RoIDwgNCB8fCByZ2JhWzNdID09PSAxXG5cdFx0PyAncmdiKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUpJ1xuXHRcdDogJ3JnYmEoJyArIHIgKyAnJSwgJyArIGcgKyAnJSwgJyArIGIgKyAnJSwgJyArIHJnYmFbM10gKyAnKSc7XG59O1xuXG5jcy50by5oc2wgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBoc2xhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXHRyZXR1cm4gaHNsYS5sZW5ndGggPCA0IHx8IGhzbGFbM10gPT09IDFcblx0XHQ/ICdoc2woJyArIGhzbGFbMF0gKyAnLCAnICsgaHNsYVsxXSArICclLCAnICsgaHNsYVsyXSArICclKSdcblx0XHQ6ICdoc2xhKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSwgJyArIGhzbGFbM10gKyAnKSc7XG59O1xuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuY3MudG8uaHdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgYSA9ICcnO1xuXHRpZiAoaHdiYS5sZW5ndGggPj0gNCAmJiBod2JhWzNdICE9PSAxKSB7XG5cdFx0YSA9ICcsICcgKyBod2JhWzNdO1xuXHR9XG5cblx0cmV0dXJuICdod2IoJyArIGh3YmFbMF0gKyAnLCAnICsgaHdiYVsxXSArICclLCAnICsgaHdiYVsyXSArICclJyArIGEgKyAnKSc7XG59O1xuXG5jcy50by5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gcmV2ZXJzZU5hbWVzW3JnYi5zbGljZSgwLCAzKV07XG59O1xuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBjbGFtcChudW0sIG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIG51bSksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGhleERvdWJsZShudW0pIHtcblx0dmFyIHN0ciA9IG51bS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuIChzdHIubGVuZ3RoIDwgMikgPyAnMCcgKyBzdHIgOiBzdHI7XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgY29sb3JTdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb2xvci1zdHJpbmcgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvaW5kZXguanNcIik7XG52YXIgY29udmVydCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yLWNvbnZlcnQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzXCIpO1xuXG52YXIgX3NsaWNlID0gW10uc2xpY2U7XG5cbnZhciBza2lwcGVkTW9kZWxzID0gW1xuXHQvLyB0byBiZSBob25lc3QsIEkgZG9uJ3QgcmVhbGx5IGZlZWwgbGlrZSBrZXl3b3JkIGJlbG9uZ3MgaW4gY29sb3IgY29udmVydCwgYnV0IGVoLlxuXHQna2V5d29yZCcsXG5cblx0Ly8gZ3JheSBjb25mbGljdHMgd2l0aCBzb21lIG1ldGhvZCBuYW1lcywgYW5kIGhhcyBpdHMgb3duIG1ldGhvZCBkZWZpbmVkLlxuXHQnZ3JheScsXG5cblx0Ly8gc2hvdWxkbid0IHJlYWxseSBiZSBpbiBjb2xvci1jb252ZXJ0IGVpdGhlci4uLlxuXHQnaGV4J1xuXTtcblxudmFyIGhhc2hlZE1vZGVsS2V5cyA9IHt9O1xuT2JqZWN0LmtleXMoY29udmVydCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcblx0aGFzaGVkTW9kZWxLZXlzW19zbGljZS5jYWxsKGNvbnZlcnRbbW9kZWxdLmxhYmVscykuc29ydCgpLmpvaW4oJycpXSA9IG1vZGVsO1xufSk7XG5cbnZhciBsaW1pdGVycyA9IHt9O1xuXG5mdW5jdGlvbiBDb2xvcihvYmosIG1vZGVsKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb2xvcikpIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKG9iaiwgbW9kZWwpO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmIG1vZGVsIGluIHNraXBwZWRNb2RlbHMpIHtcblx0XHRtb2RlbCA9IG51bGw7XG5cdH1cblxuXHRpZiAobW9kZWwgJiYgIShtb2RlbCBpbiBjb252ZXJ0KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlbDogJyArIG1vZGVsKTtcblx0fVxuXG5cdHZhciBpO1xuXHR2YXIgY2hhbm5lbHM7XG5cblx0aWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbMCwgMCwgMF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG9iai5tb2RlbDtcblx0XHR0aGlzLmNvbG9yID0gb2JqLmNvbG9yLnNsaWNlKCk7XG5cdFx0dGhpcy52YWxwaGEgPSBvYmoudmFscGhhO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGNvbG9yU3RyaW5nLmdldChvYmopO1xuXHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nOiAnICsgb2JqKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gcmVzdWx0Lm1vZGVsO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR0aGlzLmNvbG9yID0gcmVzdWx0LnZhbHVlLnNsaWNlKDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiByZXN1bHQudmFsdWVbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IHJlc3VsdC52YWx1ZVtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKG9iai5sZW5ndGgpIHtcblx0XHR0aGlzLm1vZGVsID0gbW9kZWwgfHwgJ3JnYic7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBuZXdBcnIgPSBfc2xpY2UuY2FsbChvYmosIDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KG5ld0FyciwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9ialtjaGFubmVsc10gPT09ICdudW1iZXInID8gb2JqW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHtcblx0XHQvLyB0aGlzIGlzIGFsd2F5cyBSR0IgLSBjYW4gYmUgY29udmVydGVkIGxhdGVyIG9uLlxuXHRcdG9iaiAmPSAweEZGRkZGRjtcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFtcblx0XHRcdChvYmogPj4gMTYpICYgMHhGRixcblx0XHRcdChvYmogPj4gOCkgJiAweEZGLFxuXHRcdFx0b2JqICYgMHhGRlxuXHRcdF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMudmFscGhhID0gMTtcblxuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblx0XHRpZiAoJ2FscGhhJyBpbiBvYmopIHtcblx0XHRcdGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZignYWxwaGEnKSwgMSk7XG5cdFx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmouYWxwaGEgPT09ICdudW1iZXInID8gb2JqLmFscGhhIDogMDtcblx0XHR9XG5cblx0XHR2YXIgaGFzaGVkS2V5cyA9IGtleXMuc29ydCgpLmpvaW4oJycpO1xuXHRcdGlmICghKGhhc2hlZEtleXMgaW4gaGFzaGVkTW9kZWxLZXlzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gaGFzaGVkTW9kZWxLZXlzW2hhc2hlZEtleXNdO1xuXG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXHRcdHZhciBjb2xvciA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbG9yLnB1c2gob2JqW2xhYmVsc1tpXV0pO1xuXHRcdH1cblxuXHRcdHRoaXMuY29sb3IgPSB6ZXJvQXJyYXkoY29sb3IpO1xuXHR9XG5cblx0Ly8gcGVyZm9ybSBsaW1pdGF0aW9ucyAoY2xhbXBpbmcsIGV0Yy4pXG5cdGlmIChsaW1pdGVyc1t0aGlzLm1vZGVsXSkge1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0dmFyIGxpbWl0ID0gbGltaXRlcnNbdGhpcy5tb2RlbF1baV07XG5cdFx0XHRpZiAobGltaXQpIHtcblx0XHRcdFx0dGhpcy5jb2xvcltpXSA9IGxpbWl0KHRoaXMuY29sb3JbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRoaXMudmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdGhpcy52YWxwaGEpKTtcblxuXHRpZiAoT2JqZWN0LmZyZWV6ZSkge1xuXHRcdE9iamVjdC5mcmVlemUodGhpcyk7XG5cdH1cbn1cblxuQ29sb3IucHJvdG90eXBlID0ge1xuXHR0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnN0cmluZygpO1xuXHR9LFxuXG5cdHRvSlNPTjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzW3RoaXMubW9kZWxdKCk7XG5cdH0sXG5cblx0c3RyaW5nOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLm1vZGVsIGluIGNvbG9yU3RyaW5nLnRvID8gdGhpcyA6IHRoaXMucmdiKCk7XG5cdFx0c2VsZiA9IHNlbGYucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG9bc2VsZi5tb2RlbF0oYXJncyk7XG5cdH0sXG5cblx0cGVyY2VudFN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5yZ2IoKS5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdHZhciBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogc2VsZi5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5yZ2IucGVyY2VudChhcmdzKTtcblx0fSxcblxuXHRhcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHBoYSA9PT0gMSA/IHRoaXMuY29sb3Iuc2xpY2UoKSA6IHRoaXMuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0fSxcblxuXHRvYmplY3Q6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbGFiZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5sYWJlbHM7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHJlc3VsdFtsYWJlbHNbaV1dID0gdGhpcy5jb2xvcltpXTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJlc3VsdC5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cblx0dW5pdEFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmdiWzBdIC89IDI1NTtcblx0XHRyZ2JbMV0gLz0gMjU1O1xuXHRcdHJnYlsyXSAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5wdXNoKHRoaXMudmFscGhhKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHVuaXRPYmplY3Q6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5vYmplY3QoKTtcblx0XHRyZ2IuciAvPSAyNTU7XG5cdFx0cmdiLmcgLz0gMjU1O1xuXHRcdHJnYi5iIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRyb3VuZDogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHBsYWNlcyA9IE1hdGgubWF4KHBsYWNlcyB8fCAwLCAwKTtcblx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuY29sb3IubWFwKHJvdW5kVG9QbGFjZShwbGFjZXMpKS5jb25jYXQodGhpcy52YWxwaGEpLCB0aGlzLm1vZGVsKTtcblx0fSxcblxuXHRhbHBoYTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuY29sb3IuY29uY2F0KE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbCkpKSwgdGhpcy5tb2RlbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudmFscGhhO1xuXHR9LFxuXG5cdC8vIHJnYlxuXHRyZWQ6IGdldHNldCgncmdiJywgMCwgbWF4Zm4oMjU1KSksXG5cdGdyZWVuOiBnZXRzZXQoJ3JnYicsIDEsIG1heGZuKDI1NSkpLFxuXHRibHVlOiBnZXRzZXQoJ3JnYicsIDIsIG1heGZuKDI1NSkpLFxuXG5cdGh1ZTogZ2V0c2V0KFsnaHNsJywgJ2hzdicsICdoc2wnLCAnaHdiJywgJ2hjZyddLCAwLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiAoKHZhbCAlIDM2MCkgKyAzNjApICUgMzYwOyB9KSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBicmFjZS1zdHlsZVxuXG5cdHNhdHVyYXRpb25sOiBnZXRzZXQoJ2hzbCcsIDEsIG1heGZuKDEwMCkpLFxuXHRsaWdodG5lc3M6IGdldHNldCgnaHNsJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0c2F0dXJhdGlvbnY6IGdldHNldCgnaHN2JywgMSwgbWF4Zm4oMTAwKSksXG5cdHZhbHVlOiBnZXRzZXQoJ2hzdicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGNocm9tYTogZ2V0c2V0KCdoY2cnLCAxLCBtYXhmbigxMDApKSxcblx0Z3JheTogZ2V0c2V0KCdoY2cnLCAyLCBtYXhmbigxMDApKSxcblxuXHR3aGl0ZTogZ2V0c2V0KCdod2InLCAxLCBtYXhmbigxMDApKSxcblx0d2JsYWNrOiBnZXRzZXQoJ2h3YicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGN5YW46IGdldHNldCgnY215aycsIDAsIG1heGZuKDEwMCkpLFxuXHRtYWdlbnRhOiBnZXRzZXQoJ2NteWsnLCAxLCBtYXhmbigxMDApKSxcblx0eWVsbG93OiBnZXRzZXQoJ2NteWsnLCAyLCBtYXhmbigxMDApKSxcblx0YmxhY2s6IGdldHNldCgnY215aycsIDMsIG1heGZuKDEwMCkpLFxuXG5cdHg6IGdldHNldCgneHl6JywgMCwgbWF4Zm4oMTAwKSksXG5cdHk6IGdldHNldCgneHl6JywgMSwgbWF4Zm4oMTAwKSksXG5cdHo6IGdldHNldCgneHl6JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0bDogZ2V0c2V0KCdsYWInLCAwLCBtYXhmbigxMDApKSxcblx0YTogZ2V0c2V0KCdsYWInLCAxKSxcblx0YjogZ2V0c2V0KCdsYWInLCAyKSxcblxuXHRrZXl3b3JkOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udmVydFt0aGlzLm1vZGVsXS5rZXl3b3JkKHRoaXMuY29sb3IpO1xuXHR9LFxuXG5cdGhleDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLmhleCh0aGlzLnJnYigpLnJvdW5kKCkuY29sb3IpO1xuXHR9LFxuXG5cdHJnYk51bWJlcjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJldHVybiAoKHJnYlswXSAmIDB4RkYpIDw8IDE2KSB8ICgocmdiWzFdICYgMHhGRikgPDwgOCkgfCAocmdiWzJdICYgMHhGRik7XG5cdH0sXG5cblx0bHVtaW5vc2l0eTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblxuXHRcdHZhciBsdW0gPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoYW4gPSByZ2JbaV0gLyAyNTU7XG5cdFx0XHRsdW1baV0gPSAoY2hhbiA8PSAwLjAzOTI4KSA/IGNoYW4gLyAxMi45MiA6IE1hdGgucG93KCgoY2hhbiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMC4yMTI2ICogbHVtWzBdICsgMC43MTUyICogbHVtWzFdICsgMC4wNzIyICogbHVtWzJdO1xuXHR9LFxuXG5cdGNvbnRyYXN0OiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZlxuXHRcdHZhciBsdW0xID0gdGhpcy5sdW1pbm9zaXR5KCk7XG5cdFx0dmFyIGx1bTIgPSBjb2xvcjIubHVtaW5vc2l0eSgpO1xuXG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChsdW0yICsgMC4wNSkgLyAobHVtMSArIDAuMDUpO1xuXHR9LFxuXG5cdGxldmVsOiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0dmFyIGNvbnRyYXN0UmF0aW8gPSB0aGlzLmNvbnRyYXN0KGNvbG9yMik7XG5cdFx0aWYgKGNvbnRyYXN0UmF0aW8gPj0gNy4xKSB7XG5cdFx0XHRyZXR1cm4gJ0FBQSc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChjb250cmFzdFJhdGlvID49IDQuNSkgPyAnQUEnIDogJyc7XG5cdH0sXG5cblx0aXNEYXJrOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gWUlRIGVxdWF0aW9uIGZyb20gaHR0cDovLzI0d2F5cy5vcmcvMjAxMC9jYWxjdWxhdGluZy1jb2xvci1jb250cmFzdFxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHZhciB5aXEgPSAocmdiWzBdICogMjk5ICsgcmdiWzFdICogNTg3ICsgcmdiWzJdICogMTE0KSAvIDEwMDA7XG5cdFx0cmV0dXJuIHlpcSA8IDEyODtcblx0fSxcblxuXHRpc0xpZ2h0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmlzRGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2IuY29sb3JbaV0gPSAyNTUgLSByZ2IuY29sb3JbaV07XG5cdFx0fVxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0bGlnaHRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdICs9IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gLT0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdICs9IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGVzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdIC09IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMV0gKz0gaHdiLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRibGFja2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMl0gKz0gaHdiLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRncmF5c2NhbGU6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYXlzY2FsZSNDb252ZXJ0aW5nX2NvbG9yX3RvX2dyYXlzY2FsZVxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHZhciB2YWwgPSByZ2JbMF0gKiAwLjMgKyByZ2JbMV0gKiAwLjU5ICsgcmdiWzJdICogMC4xMTtcblx0XHRyZXR1cm4gQ29sb3IucmdiKHZhbCwgdmFsLCB2YWwpO1xuXHR9LFxuXG5cdGZhZGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhIC0gKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRvcGFxdWVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSArICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0cm90YXRlOiBmdW5jdGlvbiAoZGVncmVlcykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdHZhciBodWUgPSBoc2wuY29sb3JbMF07XG5cdFx0aHVlID0gKGh1ZSArIGRlZ3JlZXMpICUgMzYwO1xuXHRcdGh1ZSA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG5cdFx0aHNsLmNvbG9yWzBdID0gaHVlO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0bWl4OiBmdW5jdGlvbiAobWl4aW5Db2xvciwgd2VpZ2h0KSB7XG5cdFx0Ly8gcG9ydGVkIGZyb20gc2FzcyBpbXBsZW1lbnRhdGlvbiBpbiBDXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9ibG9iLzBlNmI0YTI4NTAwOTIzNTZhYTNlY2UwN2M2YjI0OWYwMjIxY2FjZWQvZnVuY3Rpb25zLmNwcCNMMjA5XG5cdFx0dmFyIGNvbG9yMSA9IG1peGluQ29sb3IucmdiKCk7XG5cdFx0dmFyIGNvbG9yMiA9IHRoaXMucmdiKCk7XG5cdFx0dmFyIHAgPSB3ZWlnaHQgPT09IHVuZGVmaW5lZCA/IDAuNSA6IHdlaWdodDtcblxuXHRcdHZhciB3ID0gMiAqIHAgLSAxO1xuXHRcdHZhciBhID0gY29sb3IxLmFscGhhKCkgLSBjb2xvcjIuYWxwaGEoKTtcblxuXHRcdHZhciB3MSA9ICgoKHcgKiBhID09PSAtMSkgPyB3IDogKHcgKyBhKSAvICgxICsgdyAqIGEpKSArIDEpIC8gMi4wO1xuXHRcdHZhciB3MiA9IDEgLSB3MTtcblxuXHRcdHJldHVybiBDb2xvci5yZ2IoXG5cdFx0XHRcdHcxICogY29sb3IxLnJlZCgpICsgdzIgKiBjb2xvcjIucmVkKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmdyZWVuKCkgKyB3MiAqIGNvbG9yMi5ncmVlbigpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ibHVlKCkgKyB3MiAqIGNvbG9yMi5ibHVlKCksXG5cdFx0XHRcdGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH1cbn07XG5cbi8vIG1vZGVsIGNvbnZlcnNpb24gbWV0aG9kcyBhbmQgc3RhdGljIGNvbnN0cnVjdG9yc1xuT2JqZWN0LmtleXMoY29udmVydCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcblx0aWYgKHNraXBwZWRNb2RlbHMuaW5kZXhPZihtb2RlbCkgIT09IC0xKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cblx0Ly8gY29udmVyc2lvbiBtZXRob2RzXG5cdENvbG9yLnByb3RvdHlwZVttb2RlbF0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMubW9kZWwgPT09IG1vZGVsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKGFyZ3VtZW50cywgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBuZXdBbHBoYSA9IHR5cGVvZiBhcmd1bWVudHNbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IGNoYW5uZWxzIDogdGhpcy52YWxwaGE7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihhc3NlcnRBcnJheShjb252ZXJ0W3RoaXMubW9kZWxdW21vZGVsXS5yYXcodGhpcy5jb2xvcikpLmNvbmNhdChuZXdBbHBoYSksIG1vZGVsKTtcblx0fTtcblxuXHQvLyAnc3RhdGljJyBjb25zdHJ1Y3Rpb24gbWV0aG9kc1xuXHRDb2xvclttb2RlbF0gPSBmdW5jdGlvbiAoY29sb3IpIHtcblx0XHRpZiAodHlwZW9mIGNvbG9yID09PSAnbnVtYmVyJykge1xuXHRcdFx0Y29sb3IgPSB6ZXJvQXJyYXkoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSwgY2hhbm5lbHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IENvbG9yKGNvbG9yLCBtb2RlbCk7XG5cdH07XG59KTtcblxuZnVuY3Rpb24gcm91bmRUbyhudW0sIHBsYWNlcykge1xuXHRyZXR1cm4gTnVtYmVyKG51bS50b0ZpeGVkKHBsYWNlcykpO1xufVxuXG5mdW5jdGlvbiByb3VuZFRvUGxhY2UocGxhY2VzKSB7XG5cdHJldHVybiBmdW5jdGlvbiAobnVtKSB7XG5cdFx0cmV0dXJuIHJvdW5kVG8obnVtLCBwbGFjZXMpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBnZXRzZXQobW9kZWwsIGNoYW5uZWwsIG1vZGlmaWVyKSB7XG5cdG1vZGVsID0gQXJyYXkuaXNBcnJheShtb2RlbCkgPyBtb2RlbCA6IFttb2RlbF07XG5cblx0bW9kZWwuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuXHRcdChsaW1pdGVyc1ttXSB8fCAobGltaXRlcnNbbV0gPSBbXSkpW2NoYW5uZWxdID0gbW9kaWZpZXI7XG5cdH0pO1xuXG5cdG1vZGVsID0gbW9kZWxbMF07XG5cblx0cmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcblx0XHR2YXIgcmVzdWx0O1xuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdGlmIChtb2RpZmllcikge1xuXHRcdFx0XHR2YWwgPSBtb2RpZmllcih2YWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHQgPSB0aGlzW21vZGVsXSgpO1xuXHRcdFx0cmVzdWx0LmNvbG9yW2NoYW5uZWxdID0gdmFsO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRyZXN1bHQgPSB0aGlzW21vZGVsXSgpLmNvbG9yW2NoYW5uZWxdO1xuXHRcdGlmIChtb2RpZmllcikge1xuXHRcdFx0cmVzdWx0ID0gbW9kaWZpZXIocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xufVxuXG5mdW5jdGlvbiBtYXhmbihtYXgpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICh2KSB7XG5cdFx0cmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKG1heCwgdikpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBhc3NlcnRBcnJheSh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdO1xufVxuXG5mdW5jdGlvbiB6ZXJvQXJyYXkoYXJyLCBsZW5ndGgpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdGlmICh0eXBlb2YgYXJyW2ldICE9PSAnbnVtYmVyJykge1xuXHRcdFx0YXJyW2ldID0gMDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWFycmF5aXNoL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2lzLWFycmF5aXNoL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcnJheWlzaChvYmopIHtcblx0aWYgKCFvYmogfHwgdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShvYmopIHx8XG5cdFx0KG9iai5sZW5ndGggPj0gMCAmJiAob2JqLnNwbGljZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG5cdFx0XHQoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIChvYmoubGVuZ3RoIC0gMSkpICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3RyaW5nJykpKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGlzQXJyYXlpc2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBpcy1hcnJheWlzaCAqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWFycmF5aXNoL2luZGV4LmpzXCIpO1xuXG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIHN3aXp6bGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN3aXp6bGUoYXJncykge1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIGFyZyA9IGFyZ3NbaV07XG5cblx0XHRpZiAoaXNBcnJheWlzaChhcmcpKSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS9qYXZhc2NyaXB0LWFycmF5LWNvbmNhdC12cy1wdXNoLzk4XG5cdFx0XHRyZXN1bHRzID0gY29uY2F0LmNhbGwocmVzdWx0cywgc2xpY2UuY2FsbChhcmcpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0cy5wdXNoKGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5zd2l6emxlLndyYXAgPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZm4oc3dpenpsZShhcmd1bWVudHMpKTtcblx0fTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIER5bmFtaWNIZWF0TGF5ZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9tYXJrZXIvTWFya2Vyc0xheWVyICovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50c1wiKTtcblxuY2xhc3MgRHluYW1pY0hlYXRMYXllciB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkeW5hbWljRGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdCA9IGR5bmFtaWNEYXRhTGlzdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgICAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYXV0bykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNQYXVzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKiDmkq3mlL7lrozmr5UgKi9cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKys7XG4gICAgICAgICAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5pbnRlcnZhbCk7XG4gICAgfVxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xuICAgIH1cbiAgICBwcmV2KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwLS07XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPVxuICAgICAgICAgICAgKHRoaXMuY3VycmVudFN0ZXAgKyB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGgpICVcbiAgICAgICAgICAgICAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGg7XG4gICAgICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgfVxuICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXArKztcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHRoaXMuY3VycmVudFN0ZXAgJSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGg7XG4gICAgICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgfVxuICAgIGdvdG9TdGVwKHN0ZXApIHtcbiAgICAgICAgaWYgKHN0ZXAgPCAwIHx8IHN0ZXAgPj0gdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGdvdG9TdGVwKCR7c3RlcH0pOiBzdGVwIGlzIG91dCBvZiBpbmRleCBgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyLnNldERhdGEodGhpcy5keW5hbWljRGF0YUxpc3Rbc3RlcF0pO1xuICAgICAgICB0aGlzLmxheWVyLmRyYXcoKTtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdExheWVyKCk7XG4gICAgICAgIHRoaXMubGF5ZXIuZHJhdygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZml0Qm91bmRzKCkge1xuICAgICAgICB0aGlzLmxheWVyLmZpdEJvdW5kcygpO1xuICAgIH1cbiAgICBpbml0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICBhdXRvOiBmYWxzZSxcbiAgICAgICAgICAgIGludGVydmFsOiAxMDAwLFxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0TGF5ZXIoKSB7XG4gICAgICAgIGNvbnN0IG1hcmtlcnNMYXllck9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZW5kZXJUeXBlOiAnaGVhdCcsXG4gICAgICAgICAgICBoZWF0T3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxheWVyID0gbmV3IF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKHRoaXMubWFwLCB0aGlzLmR5bmFtaWNEYXRhTGlzdFswXSwgbWFya2Vyc0xheWVyT3B0aW9ucywgdGhpcy5jaGFubmVsRnVuYyk7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0LCBNYXJrZXIsIE1hcmtlcnNMYXllciwgTWFya2Vyc0J1ZmZlckxheWVyLCBQb2x5bGluZSwgUG9seWxpbmVzTGF5ZXIsIFBvbHlsaW5lc0J1ZmZlckxheWVyLCBQb2x5Z29uLCBQb2x5Z29uc0xheWVyLCBHcmlkc0xheWVyLCBEeW5hbWljSGVhdExheWVyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tYXJrZXJfTWFya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21hcmtlci9NYXJrZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2VyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTWFya2VyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX21hcmtlcl9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21hcmtlcl9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWFya2VyL01hcmtlcnNMYXllciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNYXJrZXJzTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbWFya2VyX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWFya2VyX01hcmtlcnNCdWZmZXJMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyICovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNCdWZmZXJMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk1hcmtlcnNCdWZmZXJMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9tYXJrZXJfTWFya2Vyc0J1ZmZlckxheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5bGluZV9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5bGluZS9Qb2x5bGluZSAqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUG9seWxpbmVcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWxpbmVfUG9seWxpbmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlsaW5lX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5bGluZXNMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5bGluZV9Qb2x5bGluZXNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWxpbmVfUG9seWxpbmVzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWxpbmUvUG9seWxpbmVzQnVmZmVyTGF5ZXIgKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlsaW5lc0J1ZmZlckxheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlsaW5lX1BvbHlsaW5lc0J1ZmZlckxheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5Z29uX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWdvbi9Qb2x5Z29uICovIFwiLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUG9seWdvblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5Z29uX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlnb25fUG9seWdvbnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfN19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5Z29uL1BvbHlnb25zTGF5ZXIgKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb25zTGF5ZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5Z29uc0xheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlnb25fUG9seWdvbnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfN19fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWdvbl9Hcmlkc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlnb24vR3JpZHNMYXllciAqLyBcIi4vc3JjL3BvbHlnb24vR3JpZHNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkdyaWRzTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWdvbl9Hcmlkc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9keW5hbWljSGVhdExheWVyX0R5bmFtaWNIZWF0TGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyICovIFwiLi9zcmMvZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiRHluYW1pY0hlYXRMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9keW5hbWljSGVhdExheWVyX0R5bmFtaWNIZWF0TGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzlfX1tcImRlZmF1bHRcIl07IH0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoe1xuICAgIE1hcmtlcjogX21hcmtlcl9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0sXG4gICAgTWFya2Vyc0xheWVyOiBfbWFya2VyX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiZGVmYXVsdFwiXSxcbiAgICBNYXJrZXJzQnVmZmVyTGF5ZXI6IF9tYXJrZXJfTWFya2Vyc0J1ZmZlckxheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJkZWZhdWx0XCJdLFxuICAgIFBvbHlsaW5lOiBfcG9seWxpbmVfUG9seWxpbmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWxpbmVzTGF5ZXI6IF9wb2x5bGluZV9Qb2x5bGluZXNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5bGluZXNCdWZmZXJMYXllcjogX3BvbHlsaW5lX1BvbHlsaW5lc0J1ZmZlckxheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19bXCJkZWZhdWx0XCJdLFxuICAgIFBvbHlnb246IF9wb2x5Z29uX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWdvbnNMYXllcjogX3BvbHlnb25fUG9seWdvbnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfN19fW1wiZGVmYXVsdFwiXSxcbiAgICBHcmlkc0xheWVyOiBfcG9seWdvbl9Hcmlkc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X19bXCJkZWZhdWx0XCJdLFxuICAgIER5bmFtaWNIZWF0TGF5ZXI6IF9keW5hbWljSGVhdExheWVyX0R5bmFtaWNIZWF0TGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzlfX1tcImRlZmF1bHRcIl0sXG59KTtcblxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21hcmtlci9NYXJrZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYXJrZXIvTWFya2VyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTWFya2VyOyB9KTtcbmNsYXNzIE1hcmtlciBleHRlbmRzIEwuTWFya2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsYXRsbmcsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIobGF0bG5nLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbWFya2VyL01hcmtlcnNCdWZmZXJMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIE1hcmtlcnNCdWZmZXJMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NYXJrZXJzTGF5ZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzXCIpO1xuXG5jbGFzcyBNYXJrZXJzQnVmZmVyTGF5ZXIgZXh0ZW5kcyBfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYyk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdtYXJrZXJCdWZmZXInO1xuICAgICAgICBjb25zdCBkZWZhdWx0QnVmZmVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJhZGl1czogMTAwMCxcbiAgICAgICAgICAgIHN0cm9rZTogdHJ1ZSxcbiAgICAgICAgICAgIHdlaWdodDogMSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHsgYnVmZmVyT3B0aW9uczogZGVmYXVsdEJ1ZmZlck9wdGlvbnMgfSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLmNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvcjtcbiAgICAgICAgdGhpcy5pbml0TWFya2VycygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5idWZmZXJMYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5idWZmZXJMYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXJrZXJMYXllciA9IHRoaXMuY29uZmlnTWFya2VyTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5idWZmZXJMYXllciA9IHRoaXMuY29uZmlnQnVmZmVyTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5sYXllciA9IEwubGF5ZXJHcm91cCgpO1xuICAgICAgICB0aGlzLmxheWVyLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICB0aGlzLmxheWVyLmFkZExheWVyKHRoaXMuYnVmZmVyTGF5ZXIpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlcnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldi5leHRlbmQoY3Vyci5nZXRMYXRMbmcoKS50b0JvdW5kcyh0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5yYWRpdXMpKTtcbiAgICAgICAgfSwgdGhpcy5tYXJrZXJzWzBdLmdldExhdExuZygpLnRvQm91bmRzKHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLnJhZGl1cykpO1xuICAgIH1cbiAgICBjb25maWdCdWZmZXJMYXllcigpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBMYXllciA9IEwubGF5ZXJHcm91cCgpO1xuICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaXJjbGVMYXllciA9IEwuY2lyY2xlKG1hcmtlci5nZXRMYXRMbmcoKSwgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5idWZmZXJUb29sdGlwQXR0cikge1xuICAgICAgICAgICAgICAgIGNpcmNsZUxheWVyLmJpbmRUb29sdGlwKCcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMuYnVmZmVyVG9vbHRpcEF0dHJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZUxheWVyLmJpbmRUb29sdGlwKCcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZUxheWVyLmJpbmRUb29sdGlwKCcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cExheWVyLmFkZExheWVyKGNpcmNsZUxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm91cExheWVyO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIE1hcmtlcnNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTWFya2VyICovIFwiLi9zcmMvbWFya2VyL01hcmtlci50c1wiKTtcblxuXG5jbGFzcyBNYXJrZXJzTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICByZW5kZXJUeXBlOiAncG9pbnQnLFxuICAgICAgICAgICAgcmVuZGVyUG9pbnRDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgICAgICAgaWNvblR5cGU6ICd1bmljb2RlJyxcbiAgICAgICAgICAgIGljb25TaXplOiBbMjAsIDIwXSxcbiAgICAgICAgICAgIGljb25DbGFzczogJ2ljb25mb250JyxcbiAgICAgICAgICAgIGljb25Db2xvcjogJyMzMzg4RkYnLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzEwLCAyMF0sXG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgICAgICAgIGlzQ2x1c3RlcjogZmFsc2UsXG4gICAgICAgICAgICBoZWF0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIG1heDogMSxcbiAgICAgICAgICAgICAgICBtaW5PcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkTWFya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlciA9IG51bGw7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLm1hcmtlckxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWF0TGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNsdXN0ZXJMYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuem9vbVN0YXJ0Q2IgPSB0aGlzLl96b29tU3RhcnRDYi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnpvb21FbmRDYiA9IHRoaXMuX3pvb21FbmRDYi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBkcmF3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pbml0TWFya2VycygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5sYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDkvJjlhYjliKTmlq0gaXNDbHVzdGVyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyICYmIHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwb2ludCc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnTWFya2VyTGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsdXN0ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0NsdXN0ZXJMYXllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnSGVhdExheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclR5cGV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGE7XG4gICAgfVxuICAgIHNldE9wdGlvbnMob3B0aW9ucywgcmVkcmF3ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAocmVkcmF3KSB7XG4gICAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSk7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlcnMubWFwKChtYXJrZXIpID0+IFttYXJrZXIuZ2V0TGF0TG5nKCkubGF0LCBtYXJrZXIuZ2V0TGF0TG5nKCkubG5nXSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXAub2ZmKCd6b29tc3RhcnQnLCB0aGlzLnpvb21TdGFydENiKTtcbiAgICAgICAgdGhpcy5tYXAub2ZmKCd6b29tZW5kJywgdGhpcy56b29tRW5kQ2IpO1xuICAgIH1cbiAgICB0b2dnbGVWaXNpYmxlKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pY29uQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgY2hhbmdlSWNvbihpY29uVW5pY29kZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGUgPSBpY29uVW5pY29kZTtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcGl0Y2goaWQpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgICAgICAgaWYgKG1hcmtlci5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfem9vbVN0YXJ0Q2IoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50JyAmJiAhdGhpcy5vcHRpb25zLmlzQ2x1c3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3pvb21FbmRDYigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbWFya2VyJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnICYmICF0aGlzLm9wdGlvbnMuaXNDbHVzdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5riy5p+T5Li65pWj54K55Zu+ICovXG4gICAgY29uZmlnTWFya2VyTGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtlckxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbnZhc0ljb25MYXllciA9IEwuY2FudmFzSWNvbkxheWVyKHt9KS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIC8vIOa3u+WKoOeCueWHu+S6i+S7tlxuICAgICAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25DbGlja0xpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDmt7vliqAgaG92ZXIg5LqL5Lu2XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkhvdmVyTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgICAgICAgLy8g5LmL5YmN5pyJIGhvdmVyIOeahOWFs+mXrSB0b29sdGlwXG4gICAgICAgICAgICBpZiAodGhpcy5ob3ZlcmVkTWFya2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbWFya2VyO1xuICAgICAgICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlci5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlt7Lnu4/orr7nva4gdG9vbHRpcCDnm7TmjqXlsZXnpLogdG9vbHRpcFxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5vcGVuVG9vbHRpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5ZCm5YiZ57uR5a6aIHRvb2x0aXAg5bm25bGV56S6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIuYmluZFRvb2x0aXAoJycgKyB0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRNYXJrZXJzKHRoaXMubWFya2Vycyk7XG4gICAgICAgIC8vIOino+WGs+WIneasoea4suafk+S4jeWHuuWbvuagh+mXrumimFxuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLm1hcC5nZXRDZW50ZXIoKSk7XG4gICAgICAgIHRoaXMubWFya2VyTGF5ZXIgPSBjYW52YXNJY29uTGF5ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlckxheWVyO1xuICAgIH1cbiAgICBnZXRUb29sVGlwQ29udGVudChkYXRhKSB7XG4gICAgICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXTtcbiAgICB9XG4gICAgaW5pdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0TWFya2VycygpIHtcbiAgICAgICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKCk7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdO1xuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0oW1xuICAgICAgICAgICAgICAgIGxheWVyLmdldExhdExuZygpLmxhdCxcbiAgICAgICAgICAgICAgICBsYXllci5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgICAgICBdLCB7XG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKGRhdGEpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICAgICAgICBtYXJrZXIuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLm1hcC5vbignem9vbXN0YXJ0JywgdGhpcy56b29tU3RhcnRDYik7XG4gICAgICAgIHRoaXMubWFwLm9uKCd6b29tZW5kJywgdGhpcy56b29tRW5kQ2IpO1xuICAgICAgICB0aGlzLm1hcC5vbignY29udGV4dG1lbnUnLCBjb25zb2xlLmxvZyk7XG4gICAgfVxuICAgIC8vIOWkhOeQhiBtYXJrZXIg54K55Ye75LqL5Lu2XG4gICAgbWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciwgZml0Qm91bmRzKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZE1hcmtlciA9IG1hcmtlcjtcbiAgICAgICAgLy8g5Yig6Zmk5YmN5LiA5Liq5pS+5aSn5Zu+5qCHXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZUZyb20odGhpcy5tYXApO1xuICAgICAgICB9XG4gICAgICAgIC8vIOeUn+aIkOW9k+WJjeaUvuWkp+Wbvuagh1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbmV3IF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0obWFya2VyLmdldExhdExuZygpLCB7XG4gICAgICAgICAgICBpY29uOiB0aGlzLmdldExhcmdlck1hcmtlckljb24obWFya2VyLmdldERhdGEoKSksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlclxuICAgICAgICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSlcbiAgICAgICAgICAgIC5vcGVuUG9wdXAoKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtYXJrZXIuY2xvc2VUb29sdGlwKCk7XG4gICAgICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZE1hcmtlci5nZXRMYXRMbmcoKSk7XG4gICAgICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhtYXJrZXIuZ2V0TGF0TG5nKCkudG9Cb3VuZHMoMTApKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1tYXJrZXInLCBtYXJrZXIpO1xuICAgIH1cbiAgICBjb25maWdDbHVzdGVyTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWxleekuuiBmuWQiOWbvuWxglxuICAgICAgICBpZiAodGhpcy5jbHVzdGVyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2x1c3RlckxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2x1c3RlckxheWVyID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoe1xuICAgICAgICAgICAgaWNvbkNyZWF0ZUZ1bmN0aW9uOiB0aGlzLmljb25DcmVhdGVGdW5jdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbHVzdGVyTGF5ZXIuYWRkTGF5ZXJzKHRoaXMubWFya2Vycy5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBfTWFya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKG0uZ2V0TGF0TG5nKCksIHtcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmdldE1hcmtlckljb24obS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYXJrZXIuc2V0RGF0YShtLmdldERhdGEoKSk7XG4gICAgICAgICAgICBtYXJrZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pO1xuICAgICAgICAgICAgbWFya2VyLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSk7XG4gICAgICAgICAgICBtYXJrZXIub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtYXJrZXI7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2x1c3RlckxheWVyO1xuICAgIH1cbiAgICAvKiog5riy5p+T5Li654Ot5Yqb5Zu+ICovXG4gICAgY29uZmlnSGVhdExheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5oZWF0TGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhdExheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGF0TG5nID0gbWFya2VyLmdldExhdExuZygpO1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9uQXR0ciA9IHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMuZGltZW5zaW9uQXR0cjtcbiAgICAgICAgICAgIGxldCBhbHQgPSAoZGltZW5zaW9uQXR0ciAmJiBtYXJrZXIuZ2V0RGF0YSgpW2RpbWVuc2lvbkF0dHJdKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucy5tYXg7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFsdCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBhbHQgPSB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWx0cy5wdXNoKGFsdCk7XG4gICAgICAgICAgICBtYXJrZXIuc2V0TGF0TG5nKEwubGF0TG5nKGxhdExuZy5sYXQsIGxhdExuZy5sbmcsIGFsdCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oZWF0TGF5ZXIgPSBMLmhlYXRMYXllcih0aGlzLm1hcmtlcnMubWFwKChpdCwgaW5kZXgpID0+IFtcbiAgICAgICAgICAgIGl0LmdldExhdExuZygpLmxhdCxcbiAgICAgICAgICAgIGl0LmdldExhdExuZygpLmxuZyxcbiAgICAgICAgICAgIGFsdHNbaW5kZXhdLFxuICAgICAgICBdKSwgXG4gICAgICAgIC8vIFRPRE86IOS9v+eUqCBtZXJnZUNvbmZpZyDnroDljJZcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgeyBtaW5PcGFjaXR5OiAwLjUgfSwgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYXRMYXllcjtcbiAgICB9XG4gICAgZ2V0TGFyZ2VyTWFya2VySWNvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIHRydWUpO1xuICAgIH1cbiAgICBnZXRNYXJrZXJJY29uKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgZmFsc2UpO1xuICAgIH1cbiAgICAvKiog6I635Y+W5b2T5YmNIG1hcmtlciDpnIDopoHlsZXnpLrnmoQgaWNvbiAqL1xuICAgIF9nZXRNYXJrZXJJY29uKGRhdGEsIGlzTGFyZ2VyKSB7XG4gICAgICAgIGNvbnN0IGljb25TaXplID0gdGhpcy5vcHRpb25zLmljb25TaXplO1xuICAgICAgICBjb25zdCBpY29uQW5jaG9yID0gdGhpcy5vcHRpb25zLmljb25BbmNob3I7XG4gICAgICAgIGNvbnN0IGxhcmdlckljb25TaXplID0gW2ljb25TaXplWzBdICogMS41LCBpY29uU2l6ZVsxXSAqIDEuNV07XG4gICAgICAgIGNvbnN0IGxhcmdlckljb25BbmNob3IgPSBbaWNvbkFuY2hvclswXSAqIDEuNSwgaWNvbkFuY2hvclsxXSAqIDEuNV07XG4gICAgICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3I7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdpbWFnZSc6IHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gTC5pY29uKHtcbiAgICAgICAgICAgICAgICAvLyAgIGljb25Vcmw6IHRoaXMub3B0aW9ucy5pY29uSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgLy8gICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAgICAgICAgIC8vICAgaWNvbkFuY2hvcixcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6XG4gICAgICAgICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbDogdGhpcy5nZXRDdXN0b21JY29uSFRNTChkYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBpc0xhcmdlciA/ICdsYXJnZS1kaXYtaWNvbi1tYXJrZXInIDogJycsXG4gICAgICAgICAgICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICAgICAgICAgIGljb25BbmNob3I6IGlzTGFyZ2VyID8gbGFyZ2VySWNvbkFuY2hvciA6IGljb25BbmNob3IsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXBBbmNob3I6IGlzTGFyZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFswLCAtbGFyZ2VySWNvbkFuY2hvclsxXSAvIDJdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFswLCAtaWNvbkFuY2hvclsxXSAvIDJdLFxuICAgICAgICAgICAgICAgICAgICBwb3B1cEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJUeXBlIOS4jeiDveS4uiAke3RoaXMub3B0aW9ucy5pY29uVHlwZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDdXN0b21JY29uSFRNTChkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzaW5nbGUnOiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55SoIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZvbnRfY2xhc3MnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHtvcHRpb25zLmljb25Db2xvcn07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqCBzdmdcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24tc3ltYm9sXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLm9wdGlvbnMuaWNvblN5bWJvbH1cIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55SoIHVuaWNvZGVcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7b3B0aW9ucy5pY29uQ29sb3J9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGV9XG4gICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdzZWdtZW50ZWQnOiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55SoIGNsYXNzXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZvbnRfY2xhc3MnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSl9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDkvb/nlKggc3ZnXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uLXN5bWJvbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7dGhpcy5vcHRpb25zLmljb25TeW1ib2x9XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqCB1bmljb2RlXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3VuaWNvZGUnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSl9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGV9XG4gICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJQb2ludENvbG9yVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgICAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aDtcbiAgICAgICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eTtcbiAgICAgICAgbGV0IG1pblZhbCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl07XG4gICAgICAgICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbCk7XG4gICAgICAgICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXA7XG4gICAgfVxuICAgIGdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl07XG4gICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1twYXJzZUludCgnJyArICh2YWwgLSB0aGlzLnNlZ21lbnRlZE1pbikgLyB0aGlzLnNlZ21lbnRlZFN0ZXAsIDEwKV07XG4gICAgICAgIHJldHVybiBjb2xvcjtcbiAgICB9XG4gICAgZ2V0UG9wdXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHJ9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0cl19YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0ci5sYWJlbH06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGljb25DcmVhdGVGdW5jdGlvbihjbHVzdGVyKSB7XG4gICAgICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgICAgICAgaHRtbDogYFxuICAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7T2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wibGlnaHRlblwiXSkodGhpcy5vcHRpb25zLmljb25Db2xvcil9O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMub3B0aW9ucy5pY29uQ29sb3J9O1xuICAgICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDlweDtcbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgbGVmdDogOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgJHtjbHVzdGVyLmdldENoaWxkQ291bnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgICAgICAgICAgaWNvblNpemU6IFs0MCwgNDBdLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5Z29uL0dyaWRzTGF5ZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEdyaWRzTGF5ZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUG9seWdvbnNMYXllciAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50c1wiKTtcblxuXG5jbGFzcyBHcmlkc0xheWVyIGV4dGVuZHMgX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0ge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKTtcbiAgICAgICAgdGhpcy5wcm9wTWF4TGVuZ3RoID0gLTE7XG4gICAgfVxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5sYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdHcmlkTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIC8vIHRvb2x0aXAg5pyJ5Y+v6IO96ZyA6KaB55u05o6l5bGV56S677yM6ZyA6KaB5ZyoIHBvbHlnb24g5re75Yqg5Yiw5Zyw5Zu+5LiK5LmL5ZCO5omN5Y+v5Lul77yM5omA5Lul6ZyA6KaB5bu26L+f6K6+572uXG4gICAgICAgIHRoaXMuY29uZmlnVG9vbHRpcCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9vbUhhbmRsZXIoKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvZ2dsZVRvb2x0aXAodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIGlmIChwb2x5Z29uLmdldFRvb2x0aXAoKSkge1xuICAgICAgICAgICAgICAgIHBvbHlnb24uZ2V0VG9vbHRpcCgpLnNldE9wYWNpdHkodmlzaWJsZSA/IDEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5tYXAub24oJ3pvb20nLCB0aGlzLnpvb21IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjb25maWdUb29sdGlwKCkge1xuICAgICAgICB0aGlzLnByb3BNYXhMZW5ndGggPSB0aGlzLmdldFByb3BNYXhMZW5ndGgoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSwge1xuICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25maWdHcmlkTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSB0aGlzLnBvbHlnb25zLm1hcCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IocG9seWdvbi5nZXREYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyDph43mlrDlupTnlKggb3B0aW9uc1xuICAgICAgICAgICAgY29uc3QgbmV3UG9seWdvbiA9IG5ldyBfUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpO1xuICAgICAgICAgICAgbmV3UG9seWdvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9seWdvbi5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdQb2x5Z29uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllcjtcbiAgICB9XG4gICAgem9vbUhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLnBvbHlnb25zWzBdO1xuICAgICAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodGhpcy5nZXRSZWN0YW5nbGVXaWR0aChwb2x5Z29uKSA+XG4gICAgICAgICAgICB0aGlzLmdldFRvb2x0aXBNYXhXaWR0aCh0aGlzLnByb3BNYXhMZW5ndGgpKTtcbiAgICB9XG4gICAgZ2V0UmVjdGFuZ2xlV2lkdGgocG9seWdvbikge1xuICAgICAgICByZXR1cm4gKHRoaXMubWFwLmxhdExuZ1RvTGF5ZXJQb2ludChwb2x5Z29uLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpKS54IC1cbiAgICAgICAgICAgIHRoaXMubWFwLmxhdExuZ1RvTGF5ZXJQb2ludChwb2x5Z29uLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpKS54KTtcbiAgICB9XG4gICAgZ2V0VG9vbHRpcE1heFdpZHRoKHRleHRMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRleHRMZW5ndGggKiAxMiArIDE0O1xuICAgIH1cbiAgICBnZXRQcm9wTWF4TGVuZ3RoKCkge1xuICAgICAgICBjb25zdCBwcm9wID0gdHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5wb3B1cEF0dHJcbiAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbnNcbiAgICAgICAgICAgIC5tYXAoKHBvbHlnb24pID0+IGAke3BvbHlnb24uZ2V0RGF0YSgpW3Byb3BdfWAubGVuZ3RoKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHByZXYsIGN1cnIpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5Z29uL1BvbHlnb24udHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlnb247IH0pO1xuY2xhc3MgUG9seWdvbiBleHRlbmRzIEwuUG9seWdvbiB7XG4gICAgY29uc3RydWN0b3IobGF0bG5ncywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb25zTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUG9seWdvbnNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG5cblxuY2xhc3MgUG9seWdvbnNMYXllciB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgICBmaWxsQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIHdlaWdodDogMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC41LFxuICAgICAgICAgICAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICAgICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWdvbic7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBudWxsO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbiA9IG51bGw7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRQb2x5Z29ucygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlnb25MYXllcigpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSk7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9seWdvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29ucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLCB0aGlzLnBvbHlnb25zWzBdLmdldEJvdW5kcygpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcGl0Y2goaWQpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBpZiAocG9seWdvbi5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24sIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRFdmVudCgpIHsgfVxuICAgIGdldFRvb2xUaXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdO1xuICAgIH1cbiAgICBnZXRQb3B1cENvbnRlbnQoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgICAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aDtcbiAgICAgICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eTtcbiAgICAgICAgbGV0IG1pblZhbCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl07XG4gICAgICAgICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbCk7XG4gICAgICAgICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXA7XG4gICAgfVxuICAgIGdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMCldO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIHBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbiwgZml0Qm91bmRzKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBwb2x5Z29uO1xuICAgICAgICAvLyDliKDpmaTliY3kuIDkuKogZm9jdXNcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnlJ/miJDlvZPliY0gZm9jdXNcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24gPSBuZXcgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0ocG9seWdvbi5nZXRMYXRMbmdzKCksIHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWdvbi5nZXREYXRhKCkpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24uYWRkVG8odGhpcy5tYXApO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvblxuICAgICAgICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChwb2x5Z29uLmdldERhdGEoKSkpXG4gICAgICAgICAgICAub3BlblBvcHVwKCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwb2x5Z29uLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5nZXRDZW50ZXIoKSk7XG4gICAgICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5Z29uLmdldEJvdW5kcygpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1wb2x5Z29uJywgcG9seWdvbik7XG4gICAgfVxuICAgIGluaXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0UG9seWdvbnMoKSB7XG4gICAgICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgICAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpO1xuICAgICAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF07XG4gICAgICAgICAgICBjb25zdCBwb2x5Z29uID0gbmV3IF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKGxheWVyLmdldExhdExuZ3MoKSk7XG4gICAgICAgICAgICBwb2x5Z29uLnNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25maWdQb2x5Z29uTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSB0aGlzLnBvbHlnb25zLm1hcCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlnb24uZ2V0RGF0YSgpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g6YeN5paw5bqU55SoIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IG5ld1BvbHlnb24gPSBuZXcgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgbmV3UG9seWdvbi5zZXREYXRhKHBvbHlnb24uZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb2x5Z29uLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1BvbHlnb24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1BvbHlnb247XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9seWdvbkxheWVyLmFkZExheWVyKHBvbHlnb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkxheWVyO1xuICAgIH1cbiAgICBnZXRDb2xvcihkYXRhLCBtb2RlKSB7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvcjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRhcmtlblwiXSkoY29sb3IpO1xuICAgICAgICAgICAgY2FzZSAnbGlnaHRlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlsaW5lOyB9KTtcbmNsYXNzIFBvbHlsaW5lIGV4dGVuZHMgTC5Qb2x5bGluZSB7XG4gICAgY29uc3RydWN0b3IobGF0bG5ncywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5bGluZXNCdWZmZXJMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlsaW5lc0xheWVyICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIudHNcIik7XG5cbmNsYXNzIFBvbHlsaW5lc0J1ZmZlckxheWVyIGV4dGVuZHMgX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYyk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgICAgICAgIGNvcnJpZG9yOiAxMDAsXG4gICAgICAgICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWxpbmVCdWZmZXInO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKTtcbiAgICB9XG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSwgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKCkpO1xuICAgIH1cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgY29uZmlnUG9seWxpbmVCdWZmZXJMYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBwb2x5bGluZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBwb2x5bGluZUJ1ZmZlciA9IEwuY29ycmlkb3IocG9seWxpbmUuZ2V0TGF0TG5ncygpLm1hcCgobGF0TG5nKSA9PiBMLmxhdExuZyhbbGF0TG5nLmxhdCwgbGF0TG5nLmxuZ10pKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgcG9seWxpbmVCdWZmZXIuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihwb2x5bGluZUJ1ZmZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZUxheWVyO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5bGluZXNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlsaW5lICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuXG5cbmNsYXNzIFBvbHlsaW5lc0xheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgICAgICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICAgICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3BvbHlsaW5lJztcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbnVsbDtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pbml0UG9seWxpbmVzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWxpbmVMYXllcigpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSk7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWxpbmVzLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksIHRoaXMucG9seWxpbmVzWzBdLmdldEJvdW5kcygpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuICAgIHBpdGNoKGlkKSB7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBpZiAocG9seWxpbmUuZ2V0RGF0YSgpLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRQb2x5bGluZXMoKSB7XG4gICAgICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgICAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpO1xuICAgICAgICB0aGlzLnBvbHlsaW5lcyA9IHRoaXMuZGF0YUxpc3QubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXTtcbiAgICAgICAgICAgIC8vIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgICAgIC8vICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSlcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGNvbnN0IHBvbHlsaW5lID0gbmV3IF9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShsYXllci5nZXRMYXRMbmdzKCkpO1xuICAgICAgICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgICAgICAgcG9seWxpbmUuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBwb2x5bGluZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSkge1xuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW3BhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICBwb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSwgZml0Qm91bmRzKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gcG9seWxpbmU7XG4gICAgICAgIC8vIOWIoOmZpOWJjeS4gOS4qiBmb2N1c1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSA9IG5ldyBfUG9seWxpbmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ocG9seWxpbmUuZ2V0TGF0TG5ncygpLCB7XG4gICAgICAgICAgICBjb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgZmlsbENvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSwgJ25vcm1hbCcpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lXG4gICAgICAgICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlsaW5lLmdldERhdGEoKSkpXG4gICAgICAgICAgICAub3BlblBvcHVwKCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBvbHlsaW5lLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUuZ2V0Q2VudGVyKCkpO1xuICAgICAgICBpZiAoZml0Qm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMocG9seWxpbmUuZ2V0Qm91bmRzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlsaW5lJywgcG9seWxpbmUpO1xuICAgIH1cbiAgICBnZXRUb29sVGlwQ29udGVudChkYXRhKSB7XG4gICAgICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXTtcbiAgICB9XG4gICAgZ2V0UG9wdXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHJ9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0cl19YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0ci5sYWJlbH06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbmZpZ1BvbHlsaW5lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucG9seWxpbmVMYXllciA9IEwubGF5ZXJHcm91cCgpO1xuICAgICAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBuZXdQb2x5bGluZSA9IG5ldyBfUG9seWxpbmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ocG9seWxpbmUuZ2V0TGF0TG5ncygpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIG5ld1BvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3UG9seWxpbmUuc2V0RGF0YShwb2x5bGluZS5nZXREYXRhKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgICAgIG5ld1BvbHlsaW5lLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQobmV3UG9seWxpbmUuZ2V0RGF0YSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvbHlsaW5lTGF5ZXIuYWRkTGF5ZXIobmV3UG9seWxpbmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllcjtcbiAgICB9XG4gICAgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgICAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aDtcbiAgICAgICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eTtcbiAgICAgICAgbGV0IG1pblZhbCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl07XG4gICAgICAgICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbCk7XG4gICAgICAgICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXA7XG4gICAgfVxuICAgIGdldENvbG9yKGRhdGEsIG1vZGUpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdkYXJrZW4nOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkYXJrZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJsaWdodGVuXCJdKShjb2xvcik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy91dGlscy9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy91dGlscy9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0LCBsaWdodGVuLCBkYXJrZW4gKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwibGlnaHRlblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGxpZ2h0ZW47IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRhcmtlblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGRhcmtlbjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29sb3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29sb3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxuZnVuY3Rpb24gbGlnaHRlbihoZXhDb2xvcikge1xuICAgIHJldHVybiBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKGhleENvbG9yKVxuICAgICAgICAubGlnaHRlbigwLjUpXG4gICAgICAgIC5oZXgoKTtcbn1cbmZ1bmN0aW9uIGRhcmtlbihoZXhDb2xvcikge1xuICAgIHJldHVybiBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKGhleENvbG9yKVxuICAgICAgICAuZGFya2VuKDAuNSlcbiAgICAgICAgLmhleCgpO1xufVxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh7XG4gICAgbGlnaHRlbixcbiAgICBkYXJrZW4sXG59KTtcblxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3TDNkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0wzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjlzYjNJdFkyOXVkbVZ5ZEM5amIyNTJaWEp6YVc5dWN5NXFjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmJHOXlMV052Ym5abGNuUXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2YkdWaFpteGxkRTFoY0M4dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjJ4dmNpMWpiMjUyWlhKMEwzSnZkWFJsTG1weklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjlzYjNJdGJtRnRaUzlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmJHOXlMWE4wY21sdVp5OXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUxYTjBjbWx1Wnk5dWIyUmxYMjF2WkhWc1pYTXZZMjlzYjNJdGJtRnRaUzlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmJHOXlMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXViMlJsWDIxdlpIVnNaWE12YVhNdFlYSnlZWGxwYzJndmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDI1dlpHVmZiVzlrZFd4bGN5OXphVzF3YkdVdGMzZHBlbnBzWlM5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2YzNKakwyUjVibUZ0YVdOSVpXRjBUR0Y1WlhJdlJIbHVZVzFwWTBobFlYUk1ZWGxsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmMzSmpMMmx1WkdWNExuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12YldGeWEyVnlMMDFoY210bGNpNTBjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZjM0pqTDIxaGNtdGxjaTlOWVhKclpYSnpRblZtWm1WeVRHRjVaWEl1ZEhNaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDNOeVl5OXRZWEpyWlhJdlRXRnlhMlZ5YzB4aGVXVnlMblJ6SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl6Y21NdmNHOXNlV2R2Ymk5SGNtbGtjMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXZHZiaTlRYjJ4NVoyOXVMblJ6SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl6Y21NdmNHOXNlV2R2Ymk5UWIyeDVaMjl1YzB4aGVXVnlMblJ6SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl6Y21NdmNHOXNlV3hwYm1VdlVHOXNlV3hwYm1VdWRITWlMQ0ozWldKd1lXTnJPaTh2YkdWaFpteGxkRTFoY0M4dUwzTnlZeTl3YjJ4NWJHbHVaUzlRYjJ4NWJHbHVaWE5DZFdabVpYSk1ZWGxsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmMzSmpMM0J2Ykhsc2FXNWxMMUJ2Ykhsc2FXNWxjMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12ZFhScGJITXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdEVRVUV3UXl4blEwRkJaME03UVVGRE1VVTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SVUZCZDBRc2EwSkJRV3RDTzBGQlF6RkZPMEZCUTBFc2VVUkJRV2xFTEdOQlFXTTdRVUZETDBRN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsRVFVRjVReXhwUTBGQmFVTTdRVUZETVVVc2QwaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8wRkJRM0pKTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN096czdPenM3T3pzN096dEJRMnhHUVR0QlFVTkJMR3RDUVVGclFpeHRRa0ZCVHl4RFFVRkRMSE5FUVVGWk96dEJRVVYwUXp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVVVGQlVTdzBRa0ZCTkVJN1FVRkRjRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5dzJRa0ZCTmtJN1FVRkRjRU1zVjBGQlZ5eHBRMEZCYVVNN1FVRkROVU1zVlVGQlZTeG5RMEZCWjBNN1FVRkRNVU1zVjBGQlZ5eHBRMEZCYVVNN1FVRkROVU1zVDBGQlR5eHhRMEZCY1VNN1FVRkROVU1zVTBGQlV5d3lRMEZCTWtNN1FVRkRjRVFzVVVGQlVUdEJRVU5TT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzY1VSQlFYRkVMR2RDUVVGblFqdEJRVU55UlN4dFJFRkJiVVFzWTBGQll6dEJRVU5xUlR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQkxHZENRVUZuUWl4UFFVRlBPMEZCUTNaQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3gxUWtGQmRVSTdPMEZCUlhaQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RDUVVGblFpeFBRVUZQTEZGQlFWRTdRVUZETDBJc1owSkJRV2RDTEU5QlFVOHNVVUZCVVR0QlFVTXZRaXhwUWtGQmFVSXNUMEZCVHl4UFFVRlBPMEZCUXk5Q0xHbENRVUZwUWl4UFFVRlBMRTlCUVU4N1FVRkRMMElzWjBKQlFXZENMRkZCUVZFc1QwRkJUenRCUVVNdlFpeG5Ra0ZCWjBJc1VVRkJVU3hQUVVGUE8wRkJReTlDT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhORlFVRnpSVHM3UVVGRmRFVTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzYzBKQlFYTkNPMEZCUTNSQ08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxDdERRVUVyUXl4RlFVRkZMRlZCUVZVc1JVRkJSVHRCUVVNM1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1pVRkJaU3hoUVVGaExHRkJRV0U3UVVGRGVrTTdRVUZEUVN4bFFVRmxMR0ZCUVdFc1lVRkJZVHRCUVVONlF6dEJRVU5CTEdWQlFXVXNZVUZCWVN4aFFVRmhPMEZCUTNwRE8wRkJRMEVzWlVGQlpTeGhRVUZoTEdGQlFXRTdRVUZEZWtNN1FVRkRRU3hsUVVGbExHRkJRV0VzWVVGQllUdEJRVU42UXp0QlFVTkJMR1ZCUVdVc1lVRkJZVHRCUVVNMVFqczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTnVNa0pCTEd0Q1FVRnJRaXh0UWtGQlR5eERRVUZETEd0RlFVRmxPMEZCUTNwRExGbEJRVmtzYlVKQlFVOHNRMEZCUXl4elJFRkJVenM3UVVGRk4wSTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFc2EwTkJRV3RETzBGQlEyeERPMEZCUTBFN1FVRkRRU3gxUTBGQmRVTXNVMEZCVXp0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNkMFJCUVhkRUxIVkRRVUYxUXp0QlFVTXZSaXh6UkVGQmMwUXNjVU5CUVhGRE96dEJRVVV6Ump0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSaXhEUVVGRE96dEJRVVZFT3pzN096czdPenM3T3pzN1FVTTNSVUVzYTBKQlFXdENMRzFDUVVGUExFTkJRVU1zYTBWQlFXVTdPMEZCUlhwRE8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHhRMEZCY1VNc1UwRkJVenRCUVVNNVF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIbENRVUY1UWpzN1FVRkZla0k3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxIbERRVUY1UXl4VFFVRlRPMEZCUTJ4RU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEhGRFFVRnhReXhUUVVGVE8wRkJRemxETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN096czdPenRCUXk5R1dUczdRVUZGV2p0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3p0QlEzWktRVHRCUVVOQkxHbENRVUZwUWl4dFFrRkJUeXhEUVVGRExHZEdRVUZaTzBGQlEzSkRMR05CUVdNc2JVSkJRVThzUTBGQlF5dzRSRUZCWjBJN08wRkJSWFJET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzVTBGQlV6dEJRVU5VT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEhsQ1FVRjVRaXhKUVVGSk8wRkJRemRDTEhkQ1FVRjNRaXhGUVVGRkxGZEJRVmNzUlVGQlJUdEJRVU4yUXp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEdGQlFXRXNUMEZCVHp0QlFVTndRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUczdRVUZGUVN4aFFVRmhMRTlCUVU4N1FVRkRjRUk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdMR0ZCUVdFc1QwRkJUenRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUdEJRVU5HTzBGQlEwRTdPMEZCUlVFc1dVRkJXU3hQUVVGUE8wRkJRMjVDTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGVrOVpPenRCUVVWYU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRM1pLWVRzN1FVRkZZaXhyUWtGQmEwSXNiVUpCUVU4c1EwRkJReXd3UkVGQll6dEJRVU40UXl4alFVRmpMRzFDUVVGUExFTkJRVU1zTkVSQlFXVTdPMEZCUlhKRE96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZET3p0QlFVVkVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzWVVGQllTeHRRa0ZCYlVJN1FVRkRhRU03UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFXRXNZMEZCWXp0QlFVTXpRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNhVUpCUVdsQ0xHTkJRV003UVVGREwwSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNjVVZCUVhGRkxHdERRVUZyUXl4RlFVRkZPenRCUVVWNlJ6dEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR2xDUVVGcFFpeG5Ra0ZCWjBJN1FVRkRha003UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFTeHBRa0ZCYVVJc1QwRkJUenRCUVVONFFqdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzWjBKQlFXZENMRmxCUVZrN1FVRkROVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdPenM3T3pzN096czdPMEZET1dSQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEVW1FN08wRkJSV0lzYVVKQlFXbENMRzFDUVVGUExFTkJRVU1zZDBSQlFXRTdPMEZCUlhSRE8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRU3h0UTBGQmJVTXNVMEZCVXp0QlFVTTFRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUXpOQ1FUdEJRVUZCTzBGQlFVRTdRVUZISzBJN1FVRlhhRUlzVFVGQlRTeG5Ra0ZCWjBJN1NVRlZia01zV1VGRFJTeEhRVUZWTEVWQlExWXNaVUZCYVVNc1JVRkRha01zVDBGQlowTXNSVUZEYUVNc1YwRkJkMEk3VVVGRmVFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSE8xRkJRMlFzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4bFFVRmxPMUZCUTNSRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHp0UlFVTjBRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZkQlFWYzdVVUZET1VJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETzFGQlEzQkNMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNUdEpRVU55UWl4RFFVRkRPMGxCUTAwc1QwRkJUenRSUVVOYUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3p0UlFVTndRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTTdVVUZEY0VJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdTVUZEWkN4RFFVRkRPMGxCUTAwc1MwRkJTenRSUVVOV0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3p0UlFVTndRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkRkRUlzVDBGQlRUdFRRVU5RTzFGQlEwUXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSVHRaUVVOa0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0blFrRkRhRUlzVDBGQlRUdGhRVU5RTzFsQlEwUXNWMEZCVnp0WlFVTllMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEzWkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlR0dlFrRkRkRUlzVDBGQlRUdHBRa0ZEVUR0blFrRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzJGQlEyWTdhVUpCUVUwN1owSkJRMHdzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkRiRUlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8yZENRVU12UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8yRkJRMkk3VVVGRFNDeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRE0wSXNRMEZCUXp0SlFVTk5MRXRCUVVzN1VVRkRWaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVazdTVUZEY2tJc1EwRkJRenRKUVVOTkxFbEJRVWs3VVVGRFZDeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eFhRVUZYTzFsQlEyUXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRPMmRDUVVOb1JDeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwN1VVRkROMElzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZEVFN4SlFVRkpPMUZCUTFRc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhOUVVGTk8xRkJRMnBGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUTAwc1VVRkJVU3hEUVVGRExFbEJRVms3VVVGRE1VSXNTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVOdVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRmxCUVZrc1NVRkJTU3d3UWtGQk1FSXNRMEZCUXp0VFFVTTFSRHRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVTdTVUZEYmtJc1EwRkJRenRKUVVOTkxFbEJRVWtzUTBGQlF5eFBRVUZwUXp0UlFVTXpReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFGQlEyaENMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTzFGQlEycENMRTlCUVU4c1NVRkJTVHRKUVVOaUxFTkJRVU03U1VGRFRTeFRRVUZUTzFGQlEyUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhUUVVGVExFVkJRVVU3U1VGRGVFSXNRMEZCUXp0SlFVTlBMRmRCUVZjc1EwRkJReXhQUVVGcFF6dFJRVU51UkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlF6RkNPMWxCUTBVc1NVRkJTU3hGUVVGRkxFdEJRVXM3V1VGRFdDeEpRVUZKTEVWQlFVVXNTMEZCU3p0WlFVTllMRkZCUVZFc1JVRkJSU3hKUVVGSk8xTkJRMllzUlVGRFJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVTmFMRTlCUVU4c1EwRkRVanRKUVVOSUxFTkJRVU03U1VGRFR5eFRRVUZUTzFGQlEyWXNUVUZCVFN4dFFrRkJiVUlzUjBGQmQwSTdXVUZETDBNc1ZVRkJWU3hGUVVGRkxFMUJRVTA3V1VGRGJFSXNWMEZCVnl4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUE8xTkJRekZDTzFGQlEwUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxEUkVRVUZaTEVOQlF6TkNMRWxCUVVrc1EwRkJReXhIUVVGSExFVkJRMUlzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkRka0lzYlVKQlFXMUNMRVZCUTI1Q0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlEycENPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN6dEpRVU51UWl4RFFVRkRPME5CUTBZN096czdPenM3T3pzN096czdRVU42U0VRN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQmIwTTdRVUZEV1R0QlFVTlpPMEZCUTJ4Q08wRkJRMWs3UVVGRFdUdEJRVU16UWp0QlFVTlpPMEZCUTA0N1FVRkRjVUk3UVVGRmJFVXNLMFJCUVdVN1NVRkRZaXc0UkVGQlRUdEpRVU5PTERCRlFVRlpPMGxCUTFvc2MwWkJRV3RDTzBsQlEyeENMRzlGUVVGUk8wbEJRMUlzWjBaQlFXTTdTVUZEWkN3MFJrRkJiMEk3U1VGRGNFSXNhVVZCUVU4N1NVRkRVQ3cyUlVGQllUdEpRVU5pTEhWRlFVRlZPMGxCUTFZc05FWkJRV2RDTzBOQlEycENPMEZCV1VFN096czdPenM3T3pzN096czdRVU5vUTBRN1FVRkJRVHRCUVVGbExFMUJRVTBzVFVGQlR5eFRRVUZSTEVOQlFVTXNRMEZCUXl4TlFVRk5PMGxCUnpGRExGbEJRVmtzVFVGQk1FSXNSVUZCUlN4UFFVRjVRanRSUVVNdlJDeExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJRenRKUVVONFFpeERRVUZETzBsQlEwMHNUMEZCVHl4RFFVRkRMRWxCUVd0Q08xRkJReTlDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTVHRKUVVOd1FpeERRVUZETzBsQlEwMHNUMEZCVHp0UlFVTmFMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTA3U1VGRGNFSXNRMEZCUXp0RFFVTkdPenM3T3pzN096czdPenM3TzBGRFlrUTdRVUZCUVR0QlFVRkJPMEZCUVd0Rk8wRkJTMjVFTEUxQlFVMHNhMEpCUVcxQ0xGTkJRVkVzY1VSQlFWazdTVUZITVVRc1dVRkRSU3hIUVVGVkxFVkJRMVlzVVVGQmQwSXNSVUZEZUVJc1QwRkJhME1zUlVGRGJFTXNWMEZCZDBJN1VVRkZlRUlzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4UlFVRlJMRVZCUVVVc1QwRkJUeXhGUVVGRkxGZEJRVmNzUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hIUVVGSExHTkJRV003VVVGRE1VSXNUVUZCVFN4dlFrRkJiMElzUjBGQk1FSTdXVUZEYkVRc1RVRkJUU3hGUVVGRkxFbEJRVWs3V1VGRFdpeE5RVUZOTEVWQlFVVXNTVUZCU1R0WlFVTmFMRTFCUVUwc1JVRkJSU3hEUVVGRE8xTkJRMVk3VVVGRFJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRekZDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUTFvc1JVRkJSU3hoUVVGaExFVkJRVVVzYjBKQlFXOUNMRVZCUVVVc1JVRkRka01zVDBGQlR5eERRVU5TTzBsQlEwZ3NRMEZCUXp0SlFVVk5MRWxCUVVrc1EwRkJReXhQUVVGdFF6dFJRVU0zUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU03VVVGRGJrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenRSUVVONlJDeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMUZCUTJ4Q0xFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0SlFVTjBRaXhEUVVGRE8wbEJSVTBzVFVGQlRUdFJRVU5ZTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRMnBDTEU5QlFVMDdVMEZEVUR0UlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU53UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMU5CUTNaRE8xRkJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMWxCUTNCQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VTBGRGRrTTdVVUZEUkN4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSVHRSUVVNelF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNSVUZCUlR0UlFVVXpReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4VlFVRlZMRVZCUVVVN1VVRkRNMElzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU55UXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUlhKRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRE4wSXNUMEZCVHl4SlFVRkpPMGxCUTJJc1EwRkJRenRKUVVWTkxGTkJRVk03VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU0xUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTzFOQlF6VkNPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJUdFpRVU40UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRMmhDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4aFFVRmhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRemRFTzFGQlEwZ3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRemRGTEVOQlFVTTdTVUZGVHl4cFFrRkJhVUk3VVVGRGRrSXNUVUZCVFN4VlFVRlZMRWRCUVVjc1EwRkJReXhEUVVGRExGVkJRVlVzUlVGQlJUdFJRVU5xUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUXpsQ0xFMUJRVTBzVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUXpGQ0xFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNSVUZEYkVJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlF6TkNPMWxCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdsQ1FVRnBRaXhGUVVGRk8yZENRVU5zUXl4WFFVRlhMRU5CUVVNc1YwRkJWeXhEUVVOeVFpeEZRVUZGTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUTBGRGRFUTdZVUZEUmp0cFFrRkJUVHRuUWtGRFRDeFJRVUZSTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVU3YjBKQlEzSkRMRXRCUVVzc1VVRkJVVHQzUWtGRFdDeFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVTnlRaXhGUVVGRkxFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlF6bERPM2RDUVVORUxFMUJRVXM3YjBKQlExQXNTMEZCU3l4UlFVRlJPM2RDUVVOWUxGZEJRVmNzUTBGQlF5eFhRVUZYTEVOQlEzSkNMRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlEzQkVPMjlDUVVOSU8zZENRVU5GTEUxQlFVczdhVUpCUTFJN1lVRkRSanRaUVVORUxGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUTJ4RExFTkJRVU1zUTBGQlF6dFJRVU5HTEU5QlFVOHNWVUZCVlR0SlFVTnVRaXhEUVVGRE8wTkJRMFk3T3pzN096czdPenM3T3pzN1FVTnNSMFE3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCZDBNN1FVRkZXRHRCUVhsRVpDeE5RVUZOTEZsQlFWazdTVUU0UWk5Q0xGbEJRMFVzUjBGQlZTeEZRVU5XTEZGQlFYZENMRVZCUTNoQ0xFOUJRVFJDTEVWQlF6VkNMRmRCUVhkQ08xRkJSWGhDTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjN1dVRkRjRUlzVlVGQlZTeEZRVUZGTEU5QlFVODdXVUZEYmtJc2IwSkJRVzlDTEVWQlFVVXNVVUZCVVR0WlFVTTVRaXhSUVVGUkxFVkJRVVVzVTBGQlV6dFpRVU51UWl4UlFVRlJMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzFsQlEyeENMRk5CUVZNc1JVRkJSU3hWUVVGVk8xbEJRM0pDTEZOQlFWTXNSVUZCUlN4VFFVRlRPMWxCUTNCQ0xGVkJRVlVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNN1dVRkRjRUlzVTBGQlV5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeEZRVUZGTzFsQlEzcERMRmRCUVZjc1JVRkJSU3hOUVVGTk8xbEJRMjVDTEdWQlFXVXNSVUZCUlN4RFFVRkRMRk5CUVZNc1EwRkJRenRaUVVNMVFpeFRRVUZUTEVWQlFVVXNTMEZCU3p0WlFVTm9RaXhYUVVGWExFVkJRVVU3WjBKQlExZ3NSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRMDRzVlVGQlZTeEZRVUZGTEVkQlFVYzdZVUZEYUVJN1UwRkRSanRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NVVUZCVVR0UlFVTndRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVYzdVVUZEWkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkU3VVVGRGVFSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUE8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1YwRkJWenRSUVVVNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrN1VVRkRia0lzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1R0UlFVTjZRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVsQlFVazdVVUZEZWtJc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4SFFVRkhMRWxCUVVrN1VVRkRhRU1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1R0UlFVTjJRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVazdVVUZEY2tJc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTzFGQlJYaENMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzVVVGQlVUdFJRVU0xUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU03VVVGRmRFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRMME1zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdTVUZETjBNc1EwRkJRenRKUVVOTkxFbEJRVWtzUTBGQlF5eFBRVUUyUWp0UlFVTjJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVazdVVUZEYmtJc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xRkJRMnBDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRKUVVOMFFpeERRVUZETzBsQlEwMHNUVUZCVFR0UlFVTllMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEycENMRTlCUVUwN1UwRkRVRHRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTmtMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTzFOQlEzQkNPMUZCUlVRc2FVSkJRV2xDTzFGQlEycENMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFdEJRVXNzVDBGQlR5eEZRVUZGTzFsQlEycEZMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhGUVVGRk8xTkJRM1pETzJGQlFVMDdXVUZEVEN4UlFVRlJMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTzJkQ1FVTXZRaXhMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzI5Q1FVTmFMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRk8yOUNRVU55UXl4TlFVRkxPMmxDUVVOT08yZENRVU5FTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN2IwSkJRMlFzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVTdiMEpCUTNSRExFMUJRVXM3YVVKQlEwNDdaMEpCUTBRc1MwRkJTeXhOUVVGTkxFTkJRVU1zUTBGQlF6dHZRa0ZEV0N4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVTdiMEpCUTI1RExFMUJRVXM3YVVKQlEwNDdaMEpCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03YjBKQlExQXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhyUWtGQmEwSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFZEJRVWNzUTBGQlF6dHBRa0ZET1VRN1lVRkRSanRUUVVOR08xRkJRMFFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU0zUWl4UFFVRlBMRWxCUVVrN1NVRkRZaXhEUVVGRE8wbEJRMDBzVDBGQlR5eERRVUZETEVsQlFXOUNPMUZCUTJwRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1R0SlFVTjBRaXhEUVVGRE8wbEJRMDBzVlVGQlZTeERRVUZETEU5QlFUUkNMRVZCUVVVc1RVRkJUU3hIUVVGSExFdEJRVXM3VVVGRE5VUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRE8xRkJRMjVFTEVsQlFVa3NUVUZCVFN4RlFVRkZPMWxCUTFZc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU5rTzBsQlEwZ3NRMEZCUXp0SlFVTk5MRk5CUVZNN1VVRkRaQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU0zUkN4RFFVRkRPMGxCUTAwc1UwRkJVenRSUVVOa0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRelZDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVU3VTBGRE5VSTdVVUZEUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVU55UWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFTkJRMVFzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVhGQ0xFTkJRM1pGTzBsQlEwZ3NRMEZCUXp0SlFVTk5MRTlCUVU4N1VVRkRXaXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEWkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUTJwRE8xRkJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVU3V1VGRE4wSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRE8xTkJRMmhFTzFGQlEwUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRNME1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTTdTVUZEZWtNc1EwRkJRenRKUVVOTkxHRkJRV0VzUTBGQlF5eFBRVUZuUWp0UlFVTnVReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVODdVVUZEZEVJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEWml4UFFVRk5PMU5CUTFBN1VVRkRSQ3hKUVVGSkxFOUJRVThzUlVGQlJUdFpRVU5ZTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZET1VJN1lVRkJUVHRaUVVOTUxFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhOUVVGTkxFVkJRVVU3V1VGRGJFTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTnFRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTMEZCWVR0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdTVUZEWml4RFFVRkRPMGxCUTAwc1ZVRkJWU3hEUVVGRExGZEJRVzFDTzFGQlEyNURMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eEhRVUZITEZkQlFWYzdVVUZEZEVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdEpRVU5tTEVOQlFVTTdTVUZEVFN4TFFVRkxMRU5CUVVNc1JVRkJWVHRSUVVOeVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzFsQlF6bENMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RlFVRkZMRVZCUVVVN1owSkJRemxDTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RFFVRkRPMmRDUVVOeVF5eFBRVUZOTzJGQlExQTdVVUZEU0N4RFFVRkRMRU5CUVVNN1NVRkRTaXhEUVVGRE8wbEJRMU1zV1VGQldUdFJRVU53UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5xUWl4UFFVRk5PMU5CUTFBN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpGQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRXRCUVVzc1QwRkJUeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVN1owSkJRMnhGTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdZVUZEZGtNN1UwRkRSanRoUVVGTk8xbEJRMHdzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFRRVU4yUXp0SlFVTklMRU5CUVVNN1NVRkRVeXhWUVVGVk8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRMnBDTEU5QlFVMDdVMEZEVUR0UlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZETVVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNTMEZCU3l4UFFVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlR0blFrRkRiRVVzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dGhRVU53UXp0VFFVTkdPMkZCUVUwN1dVRkRUQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8xTkJRM0JETzBsQlEwZ3NRMEZCUXp0SlFVTkVMR0ZCUVdFN1NVRkRTQ3hwUWtGQmFVSTdVVUZEZWtJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzFsQlEzQkNMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVFVGQlRTeEZRVUZGTzFOQlF6RkNPMUZCUTBRc1RVRkJUU3hsUVVGbExFZEJRVWNzUTBGQlF5eERRVUZETEdWQlFXVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVTTNSQ3hUUVVGVE8xRkJRMVFzWlVGQlpTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4SlFVRkpMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlF6TkVMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4TlFVRm5RaXhEUVVGRE8xRkJRek5ETEVOQlFVTXNRMEZCUXp0UlFVTkdMR05CUVdNN1VVRkRaQ3hsUVVGbExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRE0wUXNkMEpCUVhkQ08xbEJRM2hDTEVsQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSVHRuUWtGRGRFSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhaUVVGWkxFVkJRVVU3WVVGRGJFTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFMUJRV2RDTzFsQlJYSkRMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlR0blFrRkRia01zT0VKQlFUaENPMmRDUVVNNVFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRmRCUVZjc1JVRkJSVHRoUVVOcVF6dHBRa0ZCVFR0blFrRkRUQ3h0UWtGQmJVSTdaMEpCUTI1Q0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVN2IwSkJRelZDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1YwRkJWeXhEUVVNMVFpeEZRVUZGTEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVNMVJEdHBRa0ZEUmp0aFFVTkdPMUZCUTBnc1EwRkJReXhEUVVGRE8xRkJRMFlzWlVGQlpTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE8xRkJSWGhETEdWQlFXVTdVVUZEWml4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8xRkJSWEJETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1pVRkJaVHRSUVVOc1F5eFBRVUZQTEVsQlFVa3NRMEZCUXl4WFFVRlhPMGxCUTNwQ0xFTkJRVU03U1VGRFV5eHBRa0ZCYVVJc1EwRkJReXhKUVVGclFqdFJRVU0xUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkROVU1zUTBGQlF6dEpRVU5UTEZkQlFWY3NRMEZCUXl4UFFVRTBRanRSUVVOb1JDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTTdTVUZET1VVc1EwRkJRenRKUVVOVExGZEJRVmM3VVVGRGJrSXNhMEpCUVd0Q08xRkJRMnhDTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUlVGQlJUdFJRVU42UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFVkJRVVU3VVVGRGFrSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlR0WlFVTTNRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkZja1FzVFVGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N3clEwRkJUU3hEUVVOMlFqdG5Ra0ZEUnl4TFFVRnJRaXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVkQlFVYzdaMEpCUTJ4RExFdEJRV3RDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1IwRkJSenRoUVVOd1F5eEZRVU5FTzJkQ1FVTkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXp0aFFVTXZRaXhEUVVOR08xbEJSVVFzYTBKQlFXdENPMWxCUTJ4Q0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUTNCQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenRSUVVNelFpeERRVUZETEVOQlFVTTdTVUZEU2l4RFFVRkRPMGxCUTFNc1ZVRkJWVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF6dFJRVU4wUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eGhRVUZoTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJRenRKUVVONlF5eERRVUZETzBsQlEwUXNhVUpCUVdsQ08wbEJRMVFzYTBKQlFXdENMRU5CUVVNc1RVRkJZeXhGUVVGRkxGTkJRVzFDTzFGQlF6VkVMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzVFVGQlRUdFJRVU16UWl4WlFVRlpPMUZCUTFvc1NVRkJTU3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRVZCUVVVN1dVRkROMElzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMU5CUXk5RE8xRkJRMFFzVjBGQlZ6dFJRVU5ZTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUjBGQlJ5eEpRVUZKTEN0RFFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTzFsQlEzcEVMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzFOQlEycEVMRU5CUVVNN1VVRkRSaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZGZWtNc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWp0aFFVTjBRaXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU5xUkN4VFFVRlRMRVZCUVVVN1VVRkRaQ3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeEhRVUZITEVWQlFVVTdXVUZET1VNc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRSUVVOd1F5eERRVUZETEVOQlFVTTdVVUZEUml4TlFVRk5MRU5CUVVNc1dVRkJXU3hGUVVGRk8xRkJSWEpDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1VVRkRPVU1zU1VGQlNTeFRRVUZUTEVWQlFVVTdXVUZEWWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzFOQlEzQkVPMUZCUTBRc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hOUVVGTkxFTkJRVU03U1VGRE4wTXNRMEZCUXp0SlFVTlBMR3RDUVVGclFqdFJRVU40UWl4VFFVRlRPMUZCUTFRc1NVRkJTU3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTzFsQlEzSkNMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zVFVGQlRTeEZRVUZGTzFOQlF6TkNPMUZCUTBRc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU03V1VGRGRrTXNhMEpCUVd0Q0xFVkJRVVVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTTdVMEZEZGtRc1EwRkJRenRSUVVOR0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNVMEZCVXl4RFFVTjZRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRk8xbEJRM0pDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc0swTkJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVN1owSkJRM1pETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0aFFVTjBReXhEUVVGRE8xbEJRMFlzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03V1VGRE0wSXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdXVUZEYmtVc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzFsQlEzaEVMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlR0blFrRkRkRUlzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFMUJRVTBzUTBGQlF6dFpRVU5xUXl4RFFVRkRMRU5CUVVNN1dVRkRSaXhQUVVGUExFMUJRVTA3VVVGRFppeERRVUZETEVOQlFVTXNRMEZEU0R0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVms3U1VGRE1VSXNRMEZCUXp0SlFVVkVMR0ZCUVdFN1NVRkRUQ3hsUVVGbE8xRkJRM0pDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRaUVVOc1FpeEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1JVRkJSVHRUUVVONFFqdFJRVU5FTEUxQlFVMHNTVUZCU1N4SFFVRmhMRVZCUVVVN1VVRkRla0lzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU01UWl4TlFVRk5MRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFsQlEycERMRTFCUVUwc1lVRkJZU3hIUVVOcVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4aFFVRmhPMWxCUTNCRkxFbEJRVWtzUjBGQlJ5eEhRVU5NTEVOQlFVTXNZVUZCWVN4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUXp0blFrRkRiRVFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSenRaUVVNNVFpeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGRE0wSXNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVYzdZVUZEYmtNN1dVRkRSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0WlFVTmtMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRla1FzUTBGQlF5eERRVUZETzFGQlEwWXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVU14UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRE8xbEJRemxDTEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhIUVVGSE8xbEJRMnhDTEVWQlFVVXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhIUVVGSE8xbEJRMnhDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRXaXhEUVVGRE8xRkJRMFlzTUVKQlFUQkNPMUZCUXpGQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRMnBGTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVenRKUVVOMlFpeERRVUZETzBsQlJVOHNiVUpCUVcxQ0xFTkJRVU1zU1VGQmEwSTdVVUZETlVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNN1NVRkRlRU1zUTBGQlF6dEpRVVZQTEdGQlFXRXNRMEZCUXl4SlFVRnJRanRSUVVOMFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF6dEpRVU42UXl4RFFVRkRPMGxCUlVRc05rSkJRVFpDTzBsQlEzSkNMR05CUVdNc1EwRkRjRUlzU1VGQmEwSXNSVUZEYkVJc1VVRkJhVUk3VVVGRmFrSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTzFGQlEzUkRMRTFCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlR0UlFVTXhReXhOUVVGTkxHTkJRV01zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkhNMFE3VVVGRFJDeE5RVUZOTEdkQ1FVRm5RaXhIUVVGSExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVZHFSVHRSUVVWRUxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenRSUVVWNFF5eFJRVUZSTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRemRDTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRMW9zYTBKQlFXdENPMmRDUVVOc1FpeDNRMEZCZDBNN1owSkJRM2hETEc5RVFVRnZSRHRuUWtGRGNFUXNaMEpCUVdkQ08yZENRVU5vUWl4TFFVRkxPMkZCUTA0N1dVRkRSQ3hMUVVGTExGbEJRVmtzUTBGQlF6dFpRVU5zUWl4TFFVRkxMRkZCUVZFc1EwRkJRenRaUVVOa0xFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTTdaMEpCUTJRc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETzI5Q1FVTm1MRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1NVRkJTU3hGUVVGRk8zZENRVU5xUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRMRkZCUVZFN2QwSkJRemxETEZOQlFWTTdjVUpCUTFZc1EwRkJRenR2UWtGRFJpeFRRVUZUTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHR2UWtGRGJFUXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4UlFVRlJPMjlDUVVNNVF5eFZRVUZWTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1ZVRkJWVHR2UWtGRGNFUXNZVUZCWVN4RlFVRkZMRkZCUVZFN2QwSkJRM0pDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDNRa0ZETDBJc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHZRa0ZETTBJc1YwRkJWeXhGUVVGRkxGRkJRVkU3ZDBKQlEyNUNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRMMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0cFFrRkROVUlzUTBGQlF6dGhRVU5JTzFsQlEwUXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRMUFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4clFrRkJhMElzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRoUVVNelJEdFRRVU5HTzBsQlEwZ3NRMEZCUXp0SlFVTlBMR2xDUVVGcFFpeERRVU4yUWl4SlFVRnJRaXhGUVVOc1FpeFBRVUU0UWp0UlFVVTVRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZPMWxCUXpkQ0xFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXp0WlFVTnNSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFTkJRVU03VTBGRGFFUTdVVUZEUkN4UlFVRlJMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zYjBKQlFXOUNMRVZCUVVVN1dVRkRla01zUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRZaXhSUVVGUkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZPMjlDUVVNM1FpeFhRVUZYTzI5Q1FVTllMRXRCUVVzc1dVRkJXU3hEUVVGRExFTkJRVU03ZDBKQlEycENMRTlCUVU4N01FSkJRMDhzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRPenN5UWtGRmNrSXNUMEZCVHl4RFFVRkRMRk5CUVZNN0swSkJRMklzVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN096dGhRVWR5UXp0eFFrRkRSanR2UWtGRFJDeFRRVUZUTzI5Q1FVTlVMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU03ZDBKQlEySXNUMEZCVHpzN2JVTkJSV2RDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWVHM3WVVGRk4wTTdjVUpCUTBZN2IwSkJRMFFzWVVGQllUdHZRa0ZEWWl4TFFVRkxMRk5CUVZNc1EwRkJReXhEUVVGRE8zZENRVU5rTEU5QlFVODdPM2xDUVVWTkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXpzN01rSkJSWEJDTEU5QlFVOHNRMEZCUXl4VFFVRlRPeXRDUVVOaUxFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPenM3YTBKQlIyaERMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ6czdZVUZGTjBJN2NVSkJRMFk3YVVKQlEwWTdaMEpCUTBRc1RVRkJTenRoUVVOT08xbEJRMFFzUzBGQlN5eFhRVUZYTEVOQlFVTXNRMEZCUXp0blFrRkRhRUlzVVVGQlVTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSVHR2UWtGRE4wSXNWMEZCVnp0dlFrRkRXQ3hMUVVGTExGbEJRVmtzUTBGQlF5eERRVUZETzNkQ1FVTnFRaXhQUVVGUE96dDVRa0ZGVFN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk03T3pKQ1FVVndRaXhKUVVGSkxFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1NVRkJTU3hEUVVGRE95dENRVU01UWl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6czdPMkZCUjNKRE8zRkNRVU5HTzI5Q1FVTkVMRk5CUVZNN2IwSkJRMVFzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0M1FrRkRZaXhQUVVGUE96dHRRMEZGWjBJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWT3p0aFFVVTNRenR4UWtGRFJqdHZRa0ZEUkN4aFFVRmhPMjlDUVVOaUxFdEJRVXNzVTBGQlV5eERRVUZETEVOQlFVTTdkMEpCUTJRc1QwRkJUenM3ZVVKQlJVMHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVE96c3lRa0ZGY0VJc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVRkRMRWxCUVVrc1EwRkJRenNyUWtGRE9VSXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03T3p0clFrRkhhRU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhPenRoUVVVM1FqdHhRa0ZEUmp0cFFrRkRSanRuUWtGRFJDeE5RVUZMTzJGQlEwNDdXVUZEUkN4UFFVRlBMRU5CUVVNc1EwRkJRenRuUWtGRFVDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVTmlMRFJDUVVFMFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRzlDUVVGdlFpeEhRVUZITEVOQlEycEZPMkZCUTBZN1UwRkRSanRKUVVOSUxFTkJRVU03U1VGRFR5eHJRa0ZCYTBJN1VVRkRlRUlzVFVGQlRTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRVU1zVFVGQlRUdFJRVU16UkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExGRkJRVkU3VVVGRGRFSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1VVRkJVVHRSUVVOeVFpeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRPMWxCUXpWRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU03V1VGRE9VSXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXp0VFFVTXZRanRSUVVORUxFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eGxRVUZsTzFGQlEzQkVMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzVFVGQlRUdFJRVU14UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWs3U1VGRE0wSXNRMEZCUXp0SlFVTlBMSFZDUVVGMVFpeERRVUZETEVsQlFXdENPMUZCUTJoRUxFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF6dFJRVU0xUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZEZUVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkRiRVU3VVVGRFJDeFBRVUZQTEV0QlFVczdTVUZEWkN4RFFVRkRPMGxCUTA4c1pVRkJaU3hEUVVGRExFbEJRV3RDTzFGQlEzaERMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlR0WlFVTXpRaXhQUVVGUExFVkJRVVU3VTBGRFZqdFJRVU5FTEVsQlFVa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZET1VNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMU5CUTNCRk8xRkJRMFFzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhMUVVGTExGRkJRVkVzUlVGQlJUdFpRVU01UXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4TFFVTndReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVOdVF5eEZRVUZGTzFOQlEwZzdTVUZEU0N4RFFVRkRPMGxCUTA4c2EwSkJRV3RDTEVOQlFVTXNUMEZCZVVJN1VVRkRiRVFzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMWxCUTJZc1NVRkJTU3hGUVVGRk96czdPenM3T3pzN096czdNRUpCV1dNc05FUkJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJRenM3T3pzN096czdPenM3TkVKQlZ6ZENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV6czdPenM3T3pzN096czdPenM3T3pzN096czdXVUZ2UW5SRExFOUJRVThzUTBGQlF5eGhRVUZoTEVWQlFVVTdPenRQUVVjMVFqdFpRVU5FTEZGQlFWRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFTkJRVU03VTBGRGJrSXNRMEZCUXp0SlFVTktMRU5CUVVNN1EwRkRSanM3T3pzN096czdPenM3T3p0QlEzWnZRa1E3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCSzBJN1FVRkRjVU03UVVGSGNrUXNUVUZCVFN4VlFVRlhMRk5CUVZFc2MwUkJRV0U3U1VGRmJrUXNXVUZEUlN4SFFVRlZMRVZCUTFZc1VVRkJkMElzUlVGRGVFSXNUMEZCTkVJc1JVRkROVUlzVjBGQmQwSTdVVUZGZUVJc1MwRkJTeXhEUVVGRExFZEJRVWNzUlVGQlJTeFJRVUZSTEVWQlFVVXNUMEZCVHl4RlFVRkZMRmRCUVZjc1EwRkJRenRSUVVNeFF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVONlFpeERRVUZETzBsQlEwMHNUVUZCVFR0UlFVTllMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEycENMRTlCUVUwN1UwRkRVRHRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTmtMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTzFOQlEzQkNPMUZCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZPMUZCUTI1RExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRE4wSXNjVVJCUVhGRU8xRkJRM0pFTEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVN1VVRkRjRUlzVlVGQlZTeERRVUZETEVkQlFVY3NSVUZCUlR0WlFVTmtMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3VVVGRGNFSXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJRenRSUVVOUUxFOUJRVThzU1VGQlNUdEpRVU5pTEVOQlFVTTdTVUZEVFN4aFFVRmhMRU5CUVVNc1QwRkJaMEk3VVVGRGJrTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUlR0WlFVTm9ReXhKUVVGSkxFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlR0blFrRkRlRUlzVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yRkJRMnBFTzFGQlEwZ3NRMEZCUXl4RFFVRkRPMGxCUTBvc1EwRkJRenRKUVVOVExGTkJRVk03VVVGRGFrSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEyeEVMRU5CUVVNN1NVRkRUeXhoUVVGaE8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RlFVRkZPMUZCUXpWRExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVN1dVRkROVUlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdG5Ra0ZEYUVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVN2IwSkJRemRFTEZOQlFWTXNSVUZCUlN4SlFVRkpPMjlDUVVObUxGTkJRVk1zUlVGQlJTeFJRVUZSTzJsQ1FVTndRaXhEUVVGRE8xbEJRMG9zUTBGQlF5eERRVUZETzFOQlEwZzdTVUZEU0N4RFFVRkRPMGxCUTA4c1pVRkJaVHRSUVVOeVFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJReXhWUVVGVkxFVkJRVVU3VVVGRGJFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRk8xbEJRelZETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN6dFpRVU01UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zYzBKQlFYTkNMRXRCUVVzc1YwRkJWeXhGUVVGRk8yZENRVU4yUkN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExIZENRVUYzUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU42UkR0WlFVTkVMRTFCUVUwc1QwRkJUeXhIUVVGelFpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzJkQ1FVTnFSU3hMUVVGTE8yRkJRMDRzUTBGQlF6dFpRVU5HTEdWQlFXVTdXVUZEWml4TlFVRk5MRlZCUVZVc1IwRkJSeXhKUVVGSkxHZEVRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hGUVVGRkxFOUJRVThzUTBGQlF6dFpRVU0zUkN4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0WlFVTnlReXhWUVVGVkxFTkJRVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVN1owSkJRekZDTEc5RFFVRnZRenRaUVVOMFF5eERRVUZETEVOQlFVTTdXVUZEUml4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTzJkQ1FVTXhRaXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEYWtVN1dVRkRSQ3hQUVVGUExGVkJRVlU3VVVGRGJrSXNRMEZCUXl4RFFVRkRPMUZCUTBZc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJSVHRaUVVOb1F5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03VVVGRGNrTXNRMEZCUXl4RFFVRkRPMUZCUTBZc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldUdEpRVU14UWl4RFFVRkRPMGxCUTA4c1YwRkJWenRSUVVOcVFpeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5vUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8xbEJRMW9zVDBGQlRUdFRRVU5RTzFGQlEwUXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkRhRUlzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFOUJRVThzUTBGQlF6dFpRVU0zUWl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVNNVF6dEpRVU5JTEVOQlFVTTdTVUZEVHl4cFFrRkJhVUlzUTBGQlF5eFBRVUZuUWp0UlFVTjRReXhQUVVGUExFTkJRMHdzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEycEZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVOc1JUdEpRVU5JTEVOQlFVTTdTVUZEVHl4clFrRkJhMElzUTBGQlF5eFZRVUZyUWp0UlFVTXpReXhQUVVGUExGVkJRVlVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlR0SlFVTTNRaXhEUVVGRE8wbEJRMDhzWjBKQlFXZENPMUZCUTNSQ0xFMUJRVTBzU1VGQlNTeEhRVU5TTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzVVVGQlVUdFpRVU40UXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTzFsQlEzaENMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxPMUZCUTJ4RExFOUJRVThzU1VGQlNTeERRVUZETEZGQlFWRTdZVUZEYWtJc1IwRkJSeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJRenRoUVVOeVJDeE5RVUZOTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRGNrSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTTdVVUZETjBJc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU5VTEVOQlFVTTdRMEZEUmpzN096czdPenM3T3pzN096dEJRekZIUkR0QlFVRkJPMEZCUVdVc1RVRkJUU3hQUVVGUkxGTkJRVkVzUTBGQlF5eERRVUZETEU5QlFVODdTVUZITlVNc1dVRkRSU3hQUVVjMFFpeEZRVU0xUWl4UFFVRXlRanRSUVVVelFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJRenRKUVVONlFpeERRVUZETzBsQlEwMHNUMEZCVHl4RFFVRkRMRWxCUVd0Q08xRkJReTlDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1NVRkJTVHRKUVVOd1FpeERRVUZETzBsQlEwMHNUMEZCVHp0UlFVTmFMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTA3U1VGRGNFSXNRMEZCUXp0RFFVTkdPenM3T3pzN096czdPenM3TzBGRGNFSkVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRV2RFTzBGQlJXcENPMEZCYlVKb1FpeE5RVUZOTEdGQlFXRTdTVUZwUW1oRExGbEJRMFVzUjBGQlZTeEZRVU5XTEZGQlFYZENMRVZCUTNoQ0xFOUJRVFJDTEVWQlF6VkNMRmRCUVhkQ08xRkJSWGhDTEUxQlFVMHNZMEZCWXl4SFFVRjNRanRaUVVNeFF5eFRRVUZUTEVWQlFVVXNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVTdXVUZEZWtNc1YwRkJWeXhGUVVGRkxFMUJRVTA3V1VGRGJrSXNTMEZCU3l4RlFVRkZMRk5CUVZNN1dVRkRhRUlzU1VGQlNTeEZRVUZGTEVsQlFVazdXVUZEVml4VFFVRlRMRVZCUVVVc1UwRkJVenRaUVVOd1FpeE5RVUZOTEVWQlFVVXNRMEZCUXp0WlFVTlVMRTlCUVU4c1JVRkJSU3hEUVVGRE8xbEJRMVlzVjBGQlZ5eEZRVUZGTEVkQlFVYzdXVUZEYUVJc2MwSkJRWE5DTEVWQlFVVXNVVUZCVVR0WlFVTm9ReXhsUVVGbExFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTTdVMEZETjBJN1VVRkRSQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEZOQlFWTTdVVUZEY2tJc1NVRkJTU3hEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZITzFGQlEyUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUk8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNZMEZCWXl4RlFVRkZMRTlCUVU4c1EwRkJRenRSUVVONlJDeEpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjN1VVRkZPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NSVUZCUlR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEZGQlFWRTdVVUZETlVJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETzFGQlEzUkNMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNUdFJRVU14UWl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVkQlFVY3NTVUZCU1R0SlFVTnVReXhEUVVGRE8wbEJRMDBzU1VGQlNTeERRVUZETEU5QlFUWkNPMUZCUTNaRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRPMUZCUTNwQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVTdVVUZEYmtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdFJRVU5vUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3U1VGRGRFSXNRMEZCUXp0SlFVTk5MRTFCUVUwN1VVRkRXQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTnFRaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0VFFVTndRanRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEZRVUZGTzFGQlEzUkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1VVRkROMElzVDBGQlR5eEpRVUZKTzBsQlEySXNRMEZCUXp0SlFVTk5MRk5CUVZNN1VVRkRaQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF6dEpRVU0zUkN4RFFVRkRPMGxCUTAwc1UwRkJVenRSUVVOa0xFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRemRDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVU3VTBGRE5VSTdVVUZEUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVU42UWl4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVWQlF6ZERMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUXpkQ08wbEJRMGdzUTBGQlF6dEpRVU5OTEU5QlFVODdVVUZEV2l4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFpDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFOQlEycERPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRVZCUVVVN1dVRkRPVUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRPMU5CUTJwRU8wbEJRMGdzUTBGQlF6dEpRVU5OTEdGQlFXRXNRMEZCUXl4UFFVRm5RanRSUVVOdVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4N1VVRkRkRUlzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTllMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRPVUk3WVVGQlRUdFpRVU5NTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYmtNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRUUVVOcVF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1MwRkJZVHRSUVVNNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1NVRkRaaXhEUVVGRE8wbEJRMDBzUzBGQlN5eERRVUZETEVWQlFWVTdVVUZEY2tJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJSVHRaUVVOb1F5eEpRVUZKTEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTzJkQ1FVTXZRaXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF6dG5Ra0ZEZGtNc1QwRkJUVHRoUVVOUU8xRkJRMGdzUTBGQlF5eERRVUZETzBsQlEwb3NRMEZCUXp0SlFVTlRMRk5CUVZNc1MwRkJTU3hEUVVGRE8wbEJRMlFzYVVKQlFXbENMRU5CUVVNc1NVRkJhMEk3VVVGRE5VTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUXpWRExFTkJRVU03U1VGRFV5eGxRVUZsTEVOQlFVTXNTVUZCYTBJN1VVRkRNVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRek5DTEU5QlFVOHNSVUZCUlR0VFFVTldPMUZCUTBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVNNVF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3VTBGRGNFVTdVVUZEUkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpsRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFdEJRM0JETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlEyNURMRVZCUVVVN1UwRkRTRHRKUVVOSUxFTkJRVU03U1VGRFV5eHJRa0ZCYTBJN1VVRkRNVUlzVFVGQlRTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRVU1zVFVGQlRUdFJRVU16UkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExGRkJRVkU3VVVGRGRFSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1VVRkJVVHRSUVVOeVFpeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRPMWxCUXpWRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU03V1VGRE9VSXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXp0VFFVTXZRanRSUVVORUxFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eGxRVUZsTzFGQlEzQkVMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzVFVGQlRUdFJRVU14UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWs3U1VGRE0wSXNRMEZCUXp0SlFVTlRMSGRDUVVGM1FpeERRVUZETEVsQlFXdENPMUZCUTI1RUxFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF6dFJRVU0xUXl4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZEZUVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkRiRVU3VVVGRFJDeFBRVUZQTEV0QlFVczdTVUZEWkN4RFFVRkRPMGxCUTFNc2JVSkJRVzFDTEVOQlFVTXNUMEZCWjBJc1JVRkJSU3hUUVVGdFFqdFJRVU5xUlN4SlFVRkpMRU5CUVVNc1kwRkJZeXhIUVVGSExFOUJRVTg3VVVGRE4wSXNZMEZCWXp0UlFVTmtMRWxCUVVrc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RlFVRkZPMWxCUXpsQ0xFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhOUVVGTkxFVkJRVVU3VTBGRGNFTTdVVUZEUkN4aFFVRmhPMUZCUTJJc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4SFFVRkhMRWxCUVVrc1owUkJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVVN1dVRkROMFFzUzBGQlN5eEZRVUZGTEZOQlFWTTdXVUZEYUVJc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xTkJRelZETEVOQlFVTTdVVUZEUml4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU03VVVGRk1VTXNTVUZCU1N4RFFVRkRMSEZDUVVGeFFqdGhRVU4yUWl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOc1JDeFRRVUZUTEVWQlFVVTdVVUZGWkN4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVU3V1VGREwwTXNTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeERRVUZETEUxQlFVMHNSVUZCUlR0UlFVTnlReXhEUVVGRExFTkJRVU03VVVGRFJpeFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZPMUZCUlhSQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVOMFJDeEpRVUZKTEZOQlFWTXNSVUZCUlR0WlFVTmlMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRUUVVONFF6dFJRVU5FTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNUMEZCVHl4RFFVRkRPMGxCUXk5RExFTkJRVU03U1VGRFV5eFhRVUZYTEVOQlFVTXNUMEZCTkVJN1VVRkRhRVFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRPMGxCUTNKRUxFTkJRVU03U1VGRFV5eFpRVUZaTzFGQlEzQkNMR3RDUVVGclFqdFJRVU5zUWl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVTdVVUZEZWtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEZRVUZGTzFGQlEyeENMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVN1dVRkROMElzVFVGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8xbEJRM0pFTEUxQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc1owUkJRVThzUTBGQlJTeExRVUZ0UWl4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8xbEJSVGxFTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF6dFJRVU0zUWl4RFFVRkRMRU5CUVVNN1NVRkRTaXhEUVVGRE8wbEJRMDhzYTBKQlFXdENPMUZCUTNoQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSVHRSUVVOc1F5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkROVU1zVFVGQlRTeFBRVUZQTEVkQlFYTkNMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1owSkJRMnBGTEV0QlFVc3NSVUZCUlN4VFFVRlRPMmRDUVVOb1FpeFRRVUZUTEVWQlFVVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdZVUZETlVNc1EwRkJRenRaUVVOR0xHVkJRV1U3V1VGRFppeE5RVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMR2RFUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlN4RlFVRkZMRTlCUVU4c1EwRkJRenRaUVVNM1JDeFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFpRVU55UXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eEZRVUZGTzJkQ1FVTTFRaXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOeVJUdFpRVU5FTEZWQlFWVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJUdG5Ra0ZETVVJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRTlCUVU4c1EwRkJRenRaUVVOdVF5eERRVUZETEVOQlFVTTdXVUZEUml4UFFVRlBMRlZCUVZVN1VVRkRia0lzUTBGQlF5eERRVUZETzFGQlEwWXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUlR0WlFVTm9ReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNN1VVRkRja01zUTBGQlF5eERRVUZETzFGQlEwWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXVHRKUVVNeFFpeERRVUZETzBsQlEwOHNVVUZCVVN4RFFVRkRMRWxCUVd0Q0xFVkJRVVVzU1VGQlowSTdVVUZEYmtRc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxPMUZCUXpsQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4elFrRkJjMElzUzBGQlN5eFhRVUZYTEVWQlFVVTdXVUZEZGtRc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eDNRa0ZCZDBJc1EwRkJReXhKUVVGSkxFTkJRVU03VTBGRE5VTTdVVUZEUkN4UlFVRlJMRWxCUVVrc1JVRkJSVHRaUVVOYUxFdEJRVXNzVVVGQlVUdG5Ra0ZEV0N4UFFVRlBMREpFUVVGTkxFTkJRVU1zUzBGQlN5eERRVUZETzFsQlEzUkNMRXRCUVVzc1UwRkJVenRuUWtGRFdpeFBRVUZQTERSRVFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRM1pDTzJkQ1FVTkZMRTlCUVU4c1MwRkJTenRUUVVObU8wbEJRMGdzUTBGQlF6dERRVU5HT3pzN096czdPenM3T3pzN08wRkRiRkJFTzBGQlFVRTdRVUZCWlN4TlFVRk5MRkZCUVZNc1UwRkJVU3hEUVVGRExFTkJRVU1zVVVGQlVUdEpRVWM1UXl4WlFVRlpMRTlCUVdsRExFVkJRVVVzVDBGQk1rSTdVVUZEZUVVc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVOTkxFOUJRVThzUTBGQlF5eEpRVUZyUWp0UlFVTXZRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVazdTVUZEY0VJc1EwRkJRenRKUVVOTkxFOUJRVTg3VVVGRFdpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5PMGxCUTNCQ0xFTkJRVU03UTBGRFJqczdPenM3T3pzN096czdPenRCUTJoQ1JEdEJRVUZCTzBGQlFVRTdRVUZCTmtNN1FVRnJRamxDTEUxQlFVMHNiMEpCUVhGQ0xGTkJRVkVzZFVSQlFXTTdTVUZIT1VRc1dVRkRSU3hIUVVGVkxFVkJRMVlzVVVGQmQwSXNSVUZEZUVJc1QwRkJiVU1zUlVGRGJrTXNWMEZCZDBJN1VVRkZlRUlzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4UlFVRlJMRVZCUVVVc1QwRkJUeXhGUVVGRkxGZEJRVmNzUTBGQlF6dFJRVU14UXl4TlFVRk5MR05CUVdNc1IwRkJLMEk3V1VGRGFrUXNkVUpCUVhWQ0xFVkJRVVVzVVVGQlVUdFpRVU5xUXl4bFFVRmxMRVZCUVVVc1EwRkJReXhUUVVGVExFTkJRVU03V1VGRE5VSXNVVUZCVVN4RlFVRkZMRWRCUVVjN1dVRkRZaXhMUVVGTExFVkJRVVVzVTBGQlV6dFpRVU5vUWl4UFFVRlBMRVZCUVVVc1IwRkJSenRUUVVOaU8xRkJRMFFzU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4blFrRkJaMEk3VVVGRE5VSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSE8xRkJRMlFzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJPMUZCUTNoQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHp0UlFVTjBRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZkQlFWYzdVVUZGT1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTzFGQlEyNUNMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUlVGQlJUdFJRVU51UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExGRkJRVkU3VVVGRE5VSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhEUVVGRE8xRkJRM1JDTERoQ1FVRTRRanRSUVVVNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEdOQlFXTXNSVUZCUlN4UFFVRlBMRU5CUVVNN1NVRkRNMFFzUTBGQlF6dEpRVU5OTEVsQlFVa3NRMEZCUXl4UFFVRnZRenRSUVVNNVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNN1VVRkRia1FzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlR0UlFVTndRaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdTVUZEZEVJc1EwRkJRenRKUVVOTkxFMUJRVTA3VVVGRFdDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOcVFpeFBRVUZOTzFOQlExQTdVVUZEUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFpDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHRUUVVOd1FqdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExIbENRVUY1UWl4RlFVRkZPMUZCUXpkRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VVVGRE4wSXNUMEZCVHl4SlFVRkpPMGxCUTJJc1EwRkJRenRKUVVOTkxGTkJRVk03VVVGRFpDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdTVUZEZEVNc1EwRkJRenRKUVVOTkxGTkJRVk03VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU01UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTzFOQlF6VkNPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZETVVJc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVTTNReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVNNVFqdEpRVU5JTEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1MwRkJZVHRSUVVNNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1NVRkRaaXhEUVVGRE8wbEJRMDhzZVVKQlFYbENPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSVHRSUVVOdVF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTzFsQlEyeERMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlR0blFrRkRlRUlzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExGRkJRVkVzUTBGQlF6dFpRVU55UXl4RFFVRkRMRU5CUVVNN1dVRkRSaXhOUVVGTkxFOUJRVThzUjBGQkswSXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkRka1FzUlVGQlJTeEZRVU5HTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUTFvN1owSkJRMFVzUzBGQlN5eEZRVU5JTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2RVSkJRWFZDTEV0QlFVc3NVVUZCVVR0dlFrRkRMME1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTenR2UWtGRGNFSXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WVVGRGVrUXNRMEZEUmp0WlFVVkVMRTFCUVUwc1kwRkJZeXhIUVVGSExFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlF6bENMRkZCUVZFc1EwRkJReXhWUVVGVkxFVkJRV2xDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGRGJrUXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRMjVETEVWQlEwUXNUMEZCVHl4RFFVTlNPMWxCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkROVUlzWTBGQll5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRGRrVTdXVUZEUkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTTdVVUZETjBNc1EwRkJReXhEUVVGRE8xRkJRMFlzVDBGQlR5eEpRVUZKTEVOQlFVTXNZVUZCWVR0SlFVTXpRaXhEUVVGRE8wTkJRMFk3T3pzN096czdPenM3T3pzN1FVTXZSMFE3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCSzBRN1FVRkRaanRCUVcxQ2FrTXNUVUZCVFN4alFVRmpPMGxCWjBKcVF5eFpRVU5GTEVkQlFWVXNSVUZEVml4UlFVRjNRaXhGUVVONFFpeFBRVUUyUWl4RlFVTTNRaXhYUVVGM1FqdFJRVVY0UWl4TlFVRk5MR05CUVdNc1IwRkJlVUk3V1VGRE0wTXNTMEZCU3l4RlFVRkZMRk5CUVZNN1dVRkRhRUlzZFVKQlFYVkNMRVZCUVVVc1VVRkJVVHRaUVVOcVF5eGxRVUZsTEVWQlFVVXNRMEZCUXl4VFFVRlRMRU5CUVVNN1dVRkROVUlzVTBGQlV5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzVFVGQlRTeEZRVUZGTzFsQlEzcERMRmRCUVZjc1JVRkJSU3hOUVVGTk8xTkJRM0JDTzFGQlEwUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhWUVVGVk8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSenRSUVVOa0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVR0UlFVTjRRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxHTkJRV01zUlVGQlJTeFBRVUZQTEVOQlFVTTdVVUZEZWtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTzFGQlJUbENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNUdFJRVU51UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFVkJRVVU3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhSUVVGUk8xRkJRelZDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1EwRkJRenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRWxCUVVrN1VVRkRNMElzU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhIUVVGSExFbEJRVWs3U1VGRGNFTXNRMEZCUXp0SlFVTk5MRWxCUVVrc1EwRkJReXhQUVVFNFFqdFJRVU40UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU03VVVGRGJrUXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSVHRSUVVOd1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1NVRkRkRUlzUTBGQlF6dEpRVU5OTEUxQlFVMDdVVUZEV0N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5xUWl4UFFVRk5PMU5CUTFBN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEWkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU53UWp0UlFVTkVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhGUVVGRk8xRkJRM1pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZETjBJc1QwRkJUeXhKUVVGSk8wbEJRMklzUTBGQlF6dEpRVU5OTEZOQlFWTTdVVUZEWkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNM1JDeERRVUZETzBsQlEwMHNVMEZCVXp0UlFVTmtMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpsQ0xFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVN1UwRkROVUk3VVVGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVNeFFpeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRemRETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlF6bENPMGxCUTBnc1EwRkJRenRKUVVOTkxFOUJRVTg3VVVGRFdpeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xTkJRMnBETzBsQlEwZ3NRMEZCUXp0SlFVTk5MR0ZCUVdFc1EwRkJReXhQUVVGblFqdFJRVU51UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVTg3VVVGRGRFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFppeFBRVUZOTzFOQlExQTdVVUZEUkN4SlFVRkpMRTlCUVU4c1JVRkJSVHRaUVVOWUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VTBGRE9VSTdZVUZCVFR0WlFVTk1MRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRjRU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFRRVU5xUXp0SlFVTklMRU5CUVVNN1NVRkRUU3hYUVVGWExFTkJRVU1zUzBGQllUdFJRVU01UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUjBGQlJ5eExRVUZMTzFGQlF6bENMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3U1VGRFppeERRVUZETzBsQlEwMHNTMEZCU3l4RFFVRkRMRVZCUVZVN1VVRkRja0lzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJUdFpRVU5zUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZPMmRDUVVOb1F5eEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NRMEZCUXp0blFrRkRla01zVDBGQlRUdGhRVU5RTzFGQlEwZ3NRMEZCUXl4RFFVRkRPMGxCUTBvc1EwRkJRenRKUVVOVExHRkJRV0U3VVVGRGNrSXNhMEpCUVd0Q08xRkJRMnhDTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUlVGQlJUdFJRVVY2UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRE1VTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkVMR2xEUVVGcFF6dFpRVU5xUXl3NFJFRkJPRVE3V1VGRE9VUXNhVVJCUVdsRU8xbEJRMnBFTEVsQlFVazdXVUZEU2l4TlFVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxHbEVRVUZSTEVOQlF6RkNMRXRCUVc5Q0xFTkJRVU1zVlVGQlZTeEZRVUU0UWl4RFFVTXZSRHRaUVVWRUxHdENRVUZyUWp0WlFVTnNRaXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0WlFVVjBRaXhQUVVGUExGRkJRVkU3VVVGRGFrSXNRMEZCUXl4RFFVRkRPMGxCUTBvc1EwRkJRenRKUVVOVExIbENRVUY1UWl4RFFVRkRMRWxCUVd0Q08xRkJRM0JFTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTTFReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkRlRU1zVVVGQlVTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGRGJFVTdVVUZEUkN4UFFVRlBMRXRCUVVzN1NVRkRaQ3hEUVVGRE8wbEJRMU1zYjBKQlFXOUNMRU5CUVVNc1VVRkJhMElzUlVGQlJTeFRRVUZ0UWp0UlFVTndSU3hKUVVGSkxFTkJRVU1zWlVGQlpTeEhRVUZITEZGQlFWRTdVVUZETDBJc1kwRkJZenRSUVVOa0xFbEJRVWtzU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhGUVVGRk8xbEJReTlDTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdVMEZEY2tNN1VVRkRSQ3hoUVVGaE8xRkJRMklzU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhIUVVGSExFbEJRVWtzYVVSQlFWRXNRMEZEZUVNc1VVRkJVU3hEUVVGRExGVkJRVlVzUlVGQk9FSXNSVUZEYWtRN1dVRkRSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03V1VGRGVFTXNVMEZCVXl4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RlFVRkZMRkZCUVZFc1EwRkJRenRUUVVOMlJDeERRVU5HTzFGQlEwUXNTVUZCU1N4RFFVRkRMSE5DUVVGelFpeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8xRkJSVE5ETEVsQlFVa3NRMEZCUXl4elFrRkJjMEk3WVVGRGVFSXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRia1FzVTBGQlV5eEZRVUZGTzFGQlJXUXNTVUZCU1N4RFFVRkRMSE5DUVVGelFpeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1IwRkJSeXhGUVVGRk8xbEJRMmhFTEVsQlFVa3NRMEZCUXl4elFrRkJjMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdVVUZEZEVNc1EwRkJReXhEUVVGRE8xRkJSVVlzVVVGQlVTeERRVUZETEZsQlFWa3NSVUZCUlR0UlFVVjJRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1VVRkRka1FzU1VGQlNTeFRRVUZUTEVWQlFVVTdXVUZEWWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1UwRkRla003VVVGRFJDeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTEZGQlFWRXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJRMU1zYVVKQlFXbENMRU5CUVVNc1NVRkJhMEk3VVVGRE5VTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRPMGxCUXpWRExFTkJRVU03U1VGRFV5eGxRVUZsTEVOQlFVTXNTVUZCYTBJN1VVRkRNVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRek5DTEU5QlFVOHNSVUZCUlR0VFFVTldPMUZCUTBRc1NVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRkZCUVZFc1JVRkJSVHRaUVVNNVF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3VTBGRGNFVTdVVUZEUkN4SlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpsRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFdEJRM0JETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlEyNURMRVZCUVVVN1UwRkRTRHRKUVVOSUxFTkJRVU03U1VGRFR5eHRRa0ZCYlVJN1VVRkRla0lzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1ZVRkJWU3hGUVVGRk8xRkJRMjVETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVTdXVUZEYkVNc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxPMWxCUXpsQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4MVFrRkJkVUlzUzBGQlN5eFhRVUZYTEVWQlFVVTdaMEpCUTNoRUxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMkZCUXpORU8xbEJRMFFzVFVGQlRTeFBRVUZQTEVkQlFYTkNMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1owSkJRMnBGTEV0QlFVczdZVUZEVGl4RFFVRkRPMWxCUTBZc1RVRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeHBSRUZCVVN4RFFVTTVRaXhSUVVGUkxFTkJRVU1zVlVGQlZTeEZRVUU0UWl4RlFVTnFSQ3hQUVVGUExFTkJRMUk3V1VGRFJDeFhRVUZYTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVU3WjBKQlF6TkNMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkRja01zUTBGQlF5eERRVUZETzFsQlEwWXNWMEZCVnl4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdXVUZEZGtNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkROVUlzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRGRrVTdXVUZEUkN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTTdVVUZETVVNc1EwRkJReXhEUVVGRE8xRkJRMFlzVDBGQlR5eEpRVUZKTEVOQlFVTXNZVUZCWVR0SlFVTXpRaXhEUVVGRE8wbEJRMDhzYTBKQlFXdENPMUZCUTNoQ0xFMUJRVTBzWlVGQlpTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTA3VVVGRE0wUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhSUVVGUk8xRkJRM1JDTEVsQlFVa3NUVUZCVFN4SFFVRkhMRkZCUVZFN1VVRkRja0lzUzBGQlN5eE5RVUZOTEVsQlFVa3NTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8xbEJRMmhETEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXp0WlFVTTFReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRE8xbEJRemxDTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTTdVMEZETDBJN1VVRkRSQ3hOUVVGTkxFbEJRVWtzUjBGQlJ5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzWlVGQlpUdFJRVU53UkN4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFMUJRVTA3VVVGRE1VSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1IwRkJSeXhKUVVGSk8wbEJRek5DTEVOQlFVTTdTVUZEVHl4UlFVRlJMRU5CUVVNc1NVRkJhMElzUlVGQlJTeEpRVUZuUWp0UlFVTnVSQ3hKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzN1VVRkRPVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMSFZDUVVGMVFpeExRVUZMTEZkQlFWY3NSVUZCUlR0WlFVTjRSQ3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEhsQ1FVRjVRaXhEUVVGRExFbEJRVWtzUTBGQlF6dFRRVU0zUXp0UlFVTkVMRkZCUVZFc1NVRkJTU3hGUVVGRk8xbEJRMW9zUzBGQlN5eFJRVUZSTzJkQ1FVTllMRTlCUVU4c01rUkJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdXVUZEZEVJc1MwRkJTeXhUUVVGVE8yZENRVU5hTEU5QlFVOHNORVJCUVU4c1EwRkJReXhMUVVGTExFTkJRVU03V1VGRGRrSTdaMEpCUTBVc1QwRkJUeXhMUVVGTE8xTkJRMlk3U1VGRFNDeERRVUZETzBOQlEwWTdPenM3T3pzN096czdPenM3UVVOMlVFUTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVFNFFqdEJRVVU1UWl4VFFVRlRMRTlCUVU4c1EwRkJReXhSUVVGblFqdEpRVU12UWl4UFFVRlBMR3REUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETzFOQlEyNUNMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU03VTBGRFdpeEhRVUZITEVWQlFVVTdRVUZEVml4RFFVRkRPMEZCUTBRc1UwRkJVeXhOUVVGTkxFTkJRVU1zVVVGQlowSTdTVUZET1VJc1QwRkJUeXhyUTBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXp0VFFVTnVRaXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETzFOQlExZ3NSMEZCUnl4RlFVRkZPMEZCUTFZc1EwRkJRenRCUVVOak8wbEJRMklzVDBGQlR6dEpRVU5RTEUxQlFVMDdRMEZEVUR0QlFVTjVRaUlzSW1acGJHVWlPaUpzWldGbWJHVjBMV3hoZVdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpS0daMWJtTjBhVzl1SUhkbFluQmhZMnRWYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVLSEp2YjNRc0lHWmhZM1J2Y25rcElIdGNibHgwYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1ptRmpkRzl5ZVNncE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmtaV1pwYm1VZ1BUMDlJQ2RtZFc1amRHbHZiaWNnSmlZZ1pHVm1hVzVsTG1GdFpDbGNibHgwWEhSa1pXWnBibVVvVzEwc0lHWmhZM1J2Y25rcE8xeHVYSFJsYkhObElHbG1LSFI1Y0dWdlppQmxlSEJ2Y25SeklEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUmxlSEJ2Y25Selcxd2liR1ZoWm14bGRFMWhjRndpWFNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0pzWldGbWJHVjBUV0Z3WENKZElEMGdabUZqZEc5eWVTZ3BPMXh1ZlNrb2QybHVaRzkzTENCbWRXNWpkR2x2YmlncElIdGNibkpsZEhWeWJpQWlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIc2daVzUxYldWeVlXSnNaVG9nZEhKMVpTd2daMlYwT2lCblpYUjBaWElnZlNrN1hHNGdYSFJjZEgxY2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JmWDJWelRXOWtkV3hsSUc5dUlHVjRjRzl5ZEhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1Y2lBOUlHWjFibU4wYVc5dUtHVjRjRzl5ZEhNcElIdGNiaUJjZEZ4MGFXWW9kSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ1UzbHRZbTlzTG5SdlUzUnlhVzVuVkdGbktTQjdYRzRnWEhSY2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnl3Z2V5QjJZV3gxWlRvZ0owMXZaSFZzWlNjZ2ZTazdYRzRnWEhSY2RIMWNiaUJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJQ2RmWDJWelRXOWtkV3hsSnl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdOeVpXRjBaU0JoSUdaaGEyVWdibUZ0WlhOd1lXTmxJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURFNklIWmhiSFZsSUdseklHRWdiVzlrZFd4bElHbGtMQ0J5WlhGMWFYSmxJR2wwWEc0Z1hIUXZMeUJ0YjJSbElDWWdNam9nYldWeVoyVWdZV3hzSUhCeWIzQmxjblJwWlhNZ2IyWWdkbUZzZFdVZ2FXNTBieUIwYUdVZ2JuTmNiaUJjZEM4dklHMXZaR1VnSmlBME9pQnlaWFIxY200Z2RtRnNkV1VnZDJobGJpQmhiSEpsWVdSNUlHNXpJRzlpYW1WamRGeHVJRngwTHk4Z2JXOWtaU0FtSURoOE1Ub2dZbVZvWVhabElHeHBhMlVnY21WeGRXbHlaVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NTBJRDBnWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzF2WkdVcElIdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlERXBJSFpoYkhWbElEMGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWgyWVd4MVpTazdYRzRnWEhSY2RHbG1LRzF2WkdVZ0ppQTRLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEdsbUtDaHRiMlJsSUNZZ05Da2dKaVlnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCMllXeDFaU0FtSmlCMllXeDFaUzVmWDJWelRXOWtkV3hsS1NCeVpYUjFjbTRnZG1Gc2RXVTdYRzRnWEhSY2RIWmhjaUJ1Y3lBOUlFOWlhbVZqZEM1amNtVmhkR1VvYm5Wc2JDazdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaWh1Y3lrN1hHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaHVjeXdnSjJSbFptRjFiSFFuTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lIWmhiSFZsT2lCMllXeDFaU0I5S1R0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURJZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUNFOUlDZHpkSEpwYm1jbktTQm1iM0lvZG1GeUlHdGxlU0JwYmlCMllXeDFaU2tnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHNXpMQ0JyWlhrc0lHWjFibU4wYVc5dUtHdGxlU2tnZXlCeVpYUjFjbTRnZG1Gc2RXVmJhMlY1WFRzZ2ZTNWlhVzVrS0c1MWJHd3NJR3RsZVNrcE8xeHVJRngwWEhSeVpYUjFjbTRnYm5NN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCblpYUkVaV1poZFd4MFJYaHdiM0owSUdaMWJtTjBhVzl1SUdadmNpQmpiMjF3WVhScFltbHNhWFI1SUhkcGRHZ2dibTl1TFdoaGNtMXZibmtnYlc5a2RXeGxjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXVJRDBnWm5WdVkzUnBiMjRvYlc5a2RXeGxLU0I3WEc0Z1hIUmNkSFpoY2lCblpYUjBaWElnUFNCdGIyUjFiR1VnSmlZZ2JXOWtkV3hsTGw5ZlpYTk5iMlIxYkdVZ1AxeHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRVJsWm1GMWJIUW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVmJKMlJsWm1GMWJIUW5YVHNnZlNBNlhHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBUVzlrZFd4bFJYaHdiM0owY3lncElIc2djbVYwZFhKdUlHMXZaSFZzWlRzZ2ZUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtLR2RsZEhSbGNpd2dKMkVuTENCblpYUjBaWElwTzF4dUlGeDBYSFJ5WlhSMWNtNGdaMlYwZEdWeU8xeHVJRngwZlR0Y2JseHVJRngwTHk4Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c1hHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04Z1BTQm1kVzVqZEdsdmJpaHZZbXBsWTNRc0lIQnliM0JsY25SNUtTQjdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TG1OaGJHd29iMkpxWldOMExDQndjbTl3WlhKMGVTazdJSDA3WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnWENJdUwzTnlZeTlwYm1SbGVDNTBjMXdpS1R0Y2JpSXNJaThxSUUxSlZDQnNhV05sYm5ObElDb3ZYRzUyWVhJZ1kzTnpTMlY1ZDI5eVpITWdQU0J5WlhGMWFYSmxLQ2RqYjJ4dmNpMXVZVzFsSnlrN1hHNWNiaTh2SUU1UFZFVTZJR052Ym5abGNuTnBiMjV6SUhOb2IzVnNaQ0J2Ym14NUlISmxkSFZ5YmlCd2NtbHRhWFJwZG1VZ2RtRnNkV1Z6SUNocExtVXVJR0Z5Y21GNWN5d2diM0pjYmk4dklDQWdJQ0FnSUhaaGJIVmxjeUIwYUdGMElHZHBkbVVnWTI5eWNtVmpkQ0JnZEhsd1pXOW1ZQ0J5WlhOMWJIUnpLUzVjYmk4dklDQWdJQ0FnSUdSdklHNXZkQ0IxYzJVZ1ltOTRJSFpoYkhWbGN5QjBlWEJsY3lBb2FTNWxMaUJPZFcxaVpYSW9LU3dnVTNSeWFXNW5LQ2tzSUdWMFl5NHBYRzVjYm5aaGNpQnlaWFpsY25ObFMyVjVkMjl5WkhNZ1BTQjdmVHRjYm1admNpQW9kbUZ5SUd0bGVTQnBiaUJqYzNOTFpYbDNiM0prY3lrZ2UxeHVYSFJwWmlBb1kzTnpTMlY1ZDI5eVpITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dVhIUmNkSEpsZG1WeWMyVkxaWGwzYjNKa2MxdGpjM05MWlhsM2IzSmtjMXRyWlhsZFhTQTlJR3RsZVR0Y2JseDBmVnh1ZlZ4dVhHNTJZWElnWTI5dWRtVnlkQ0E5SUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnZTF4dVhIUnlaMkk2SUh0amFHRnVibVZzY3pvZ015d2diR0ZpWld4ek9pQW5jbWRpSjMwc1hHNWNkR2h6YkRvZ2UyTm9ZVzV1Wld4ek9pQXpMQ0JzWVdKbGJITTZJQ2RvYzJ3bmZTeGNibHgwYUhOMk9pQjdZMmhoYm01bGJITTZJRE1zSUd4aFltVnNjem9nSjJoemRpZDlMRnh1WEhSb2QySTZJSHRqYUdGdWJtVnNjem9nTXl3Z2JHRmlaV3h6T2lBbmFIZGlKMzBzWEc1Y2RHTnRlV3M2SUh0amFHRnVibVZzY3pvZ05Dd2diR0ZpWld4ek9pQW5ZMjE1YXlkOUxGeHVYSFI0ZVhvNklIdGphR0Z1Ym1Wc2N6b2dNeXdnYkdGaVpXeHpPaUFuZUhsNkozMHNYRzVjZEd4aFlqb2dlMk5vWVc1dVpXeHpPaUF6TENCc1lXSmxiSE02SUNkc1lXSW5mU3hjYmx4MGJHTm9PaUI3WTJoaGJtNWxiSE02SURNc0lHeGhZbVZzY3pvZ0oyeGphQ2Q5TEZ4dVhIUm9aWGc2SUh0amFHRnVibVZzY3pvZ01Td2diR0ZpWld4ek9pQmJKMmhsZUNkZGZTeGNibHgwYTJWNWQyOXlaRG9nZTJOb1lXNXVaV3h6T2lBeExDQnNZV0psYkhNNklGc25hMlY1ZDI5eVpDZGRmU3hjYmx4MFlXNXphVEUyT2lCN1kyaGhibTVsYkhNNklERXNJR3hoWW1Wc2N6b2dXeWRoYm5OcE1UWW5YWDBzWEc1Y2RHRnVjMmt5TlRZNklIdGphR0Z1Ym1Wc2N6b2dNU3dnYkdGaVpXeHpPaUJiSjJGdWMya3lOVFluWFgwc1hHNWNkR2hqWnpvZ2UyTm9ZVzV1Wld4ek9pQXpMQ0JzWVdKbGJITTZJRnNuYUNjc0lDZGpKeXdnSjJjblhYMHNYRzVjZEdGd2NHeGxPaUI3WTJoaGJtNWxiSE02SURNc0lHeGhZbVZzY3pvZ1d5ZHlNVFluTENBblp6RTJKeXdnSjJJeE5pZGRmU3hjYmx4MFozSmhlVG9nZTJOb1lXNXVaV3h6T2lBeExDQnNZV0psYkhNNklGc25aM0poZVNkZGZWeHVmVHRjYmx4dUx5OGdhR2xrWlNBdVkyaGhibTVsYkhNZ1lXNWtJQzVzWVdKbGJITWdjSEp2Y0dWeWRHbGxjMXh1Wm05eUlDaDJZWElnYlc5a1pXd2dhVzRnWTI5dWRtVnlkQ2tnZTF4dVhIUnBaaUFvWTI5dWRtVnlkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHRiMlJsYkNrcElIdGNibHgwWEhScFppQW9JU2duWTJoaGJtNWxiSE1uSUdsdUlHTnZiblpsY25SYmJXOWtaV3hkS1NrZ2UxeHVYSFJjZEZ4MGRHaHliM2NnYm1WM0lFVnljbTl5S0NkdGFYTnphVzVuSUdOb1lXNXVaV3h6SUhCeWIzQmxjblI1T2lBbklDc2diVzlrWld3cE8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDZ2hLQ2RzWVdKbGJITW5JR2x1SUdOdmJuWmxjblJiYlc5a1pXeGRLU2tnZTF4dVhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2R0YVhOemFXNW5JR05vWVc1dVpXd2diR0ZpWld4eklIQnliM0JsY25SNU9pQW5JQ3NnYlc5a1pXd3BPMXh1WEhSY2RIMWNibHh1WEhSY2RHbG1JQ2hqYjI1MlpYSjBXMjF2WkdWc1hTNXNZV0psYkhNdWJHVnVaM1JvSUNFOVBTQmpiMjUyWlhKMFcyMXZaR1ZzWFM1amFHRnVibVZzY3lrZ2UxeHVYSFJjZEZ4MGRHaHliM2NnYm1WM0lFVnljbTl5S0NkamFHRnVibVZzSUdGdVpDQnNZV0psYkNCamIzVnVkSE1nYldsemJXRjBZMmc2SUNjZ0t5QnRiMlJsYkNrN1hHNWNkRngwZlZ4dVhHNWNkRngwZG1GeUlHTm9ZVzV1Wld4eklEMGdZMjl1ZG1WeWRGdHRiMlJsYkYwdVkyaGhibTVsYkhNN1hHNWNkRngwZG1GeUlHeGhZbVZzY3lBOUlHTnZiblpsY25SYmJXOWtaV3hkTG14aFltVnNjenRjYmx4MFhIUmtaV3hsZEdVZ1kyOXVkbVZ5ZEZ0dGIyUmxiRjB1WTJoaGJtNWxiSE03WEc1Y2RGeDBaR1ZzWlhSbElHTnZiblpsY25SYmJXOWtaV3hkTG14aFltVnNjenRjYmx4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWTI5dWRtVnlkRnR0YjJSbGJGMHNJQ2RqYUdGdWJtVnNjeWNzSUh0MllXeDFaVG9nWTJoaGJtNWxiSE45S1R0Y2JseDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1kyOXVkbVZ5ZEZ0dGIyUmxiRjBzSUNkc1lXSmxiSE1uTENCN2RtRnNkV1U2SUd4aFltVnNjMzBwTzF4dVhIUjlYRzU5WEc1Y2JtTnZiblpsY25RdWNtZGlMbWh6YkNBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBkbUZ5SUhJZ1BTQnlaMkpiTUYwZ0x5QXlOVFU3WEc1Y2RIWmhjaUJuSUQwZ2NtZGlXekZkSUM4Z01qVTFPMXh1WEhSMllYSWdZaUE5SUhKbllsc3lYU0F2SURJMU5UdGNibHgwZG1GeUlHMXBiaUE5SUUxaGRHZ3ViV2x1S0hJc0lHY3NJR0lwTzF4dVhIUjJZWElnYldGNElEMGdUV0YwYUM1dFlYZ29jaXdnWnl3Z1lpazdYRzVjZEhaaGNpQmtaV3gwWVNBOUlHMWhlQ0F0SUcxcGJqdGNibHgwZG1GeUlHZzdYRzVjZEhaaGNpQnpPMXh1WEhSMllYSWdiRHRjYmx4dVhIUnBaaUFvYldGNElEMDlQU0J0YVc0cElIdGNibHgwWEhSb0lEMGdNRHRjYmx4MGZTQmxiSE5sSUdsbUlDaHlJRDA5UFNCdFlYZ3BJSHRjYmx4MFhIUm9JRDBnS0djZ0xTQmlLU0F2SUdSbGJIUmhPMXh1WEhSOUlHVnNjMlVnYVdZZ0tHY2dQVDA5SUcxaGVDa2dlMXh1WEhSY2RHZ2dQU0F5SUNzZ0tHSWdMU0J5S1NBdklHUmxiSFJoTzF4dVhIUjlJR1ZzYzJVZ2FXWWdLR0lnUFQwOUlHMWhlQ2tnZTF4dVhIUmNkR2dnUFNBMElDc2dLSElnTFNCbktTQXZJR1JsYkhSaE8xeHVYSFI5WEc1Y2JseDBhQ0E5SUUxaGRHZ3ViV2x1S0dnZ0tpQTJNQ3dnTXpZd0tUdGNibHh1WEhScFppQW9hQ0E4SURBcElIdGNibHgwWEhSb0lDczlJRE0yTUR0Y2JseDBmVnh1WEc1Y2RHd2dQU0FvYldsdUlDc2diV0Y0S1NBdklESTdYRzVjYmx4MGFXWWdLRzFoZUNBOVBUMGdiV2x1S1NCN1hHNWNkRngwY3lBOUlEQTdYRzVjZEgwZ1pXeHpaU0JwWmlBb2JDQThQU0F3TGpVcElIdGNibHgwWEhSeklEMGdaR1ZzZEdFZ0x5QW9iV0Y0SUNzZ2JXbHVLVHRjYmx4MGZTQmxiSE5sSUh0Y2JseDBYSFJ6SUQwZ1pHVnNkR0VnTHlBb01pQXRJRzFoZUNBdElHMXBiaWs3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnVzJnc0lITWdLaUF4TURBc0lHd2dLaUF4TURCZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1eVoySXVhSE4ySUQwZ1puVnVZM1JwYjI0Z0tISm5ZaWtnZTF4dVhIUjJZWElnY21ScFpqdGNibHgwZG1GeUlHZGthV1k3WEc1Y2RIWmhjaUJpWkdsbU8xeHVYSFIyWVhJZ2FEdGNibHgwZG1GeUlITTdYRzVjYmx4MGRtRnlJSElnUFNCeVoySmJNRjBnTHlBeU5UVTdYRzVjZEhaaGNpQm5JRDBnY21kaVd6RmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1lpQTlJSEpuWWxzeVhTQXZJREkxTlR0Y2JseDBkbUZ5SUhZZ1BTQk5ZWFJvTG0xaGVDaHlMQ0JuTENCaUtUdGNibHgwZG1GeUlHUnBabVlnUFNCMklDMGdUV0YwYUM1dGFXNG9jaXdnWnl3Z1lpazdYRzVjZEhaaGNpQmthV1ptWXlBOUlHWjFibU4wYVc5dUlDaGpLU0I3WEc1Y2RGeDBjbVYwZFhKdUlDaDJJQzBnWXlrZ0x5QTJJQzhnWkdsbVppQXJJREVnTHlBeU8xeHVYSFI5TzF4dVhHNWNkR2xtSUNoa2FXWm1JRDA5UFNBd0tTQjdYRzVjZEZ4MGFDQTlJSE1nUFNBd08xeHVYSFI5SUdWc2MyVWdlMXh1WEhSY2RITWdQU0JrYVdabUlDOGdkanRjYmx4MFhIUnlaR2xtSUQwZ1pHbG1abU1vY2lrN1hHNWNkRngwWjJScFppQTlJR1JwWm1aaktHY3BPMXh1WEhSY2RHSmthV1lnUFNCa2FXWm1ZeWhpS1R0Y2JseHVYSFJjZEdsbUlDaHlJRDA5UFNCMktTQjdYRzVjZEZ4MFhIUm9JRDBnWW1ScFppQXRJR2RrYVdZN1hHNWNkRngwZlNCbGJITmxJR2xtSUNobklEMDlQU0IyS1NCN1hHNWNkRngwWEhSb0lEMGdLREVnTHlBektTQXJJSEprYVdZZ0xTQmlaR2xtTzF4dVhIUmNkSDBnWld4elpTQnBaaUFvWWlBOVBUMGdkaWtnZTF4dVhIUmNkRngwYUNBOUlDZ3lJQzhnTXlrZ0t5Qm5aR2xtSUMwZ2NtUnBaanRjYmx4MFhIUjlYRzVjZEZ4MGFXWWdLR2dnUENBd0tTQjdYRzVjZEZ4MFhIUm9JQ3M5SURFN1hHNWNkRngwZlNCbGJITmxJR2xtSUNob0lENGdNU2tnZTF4dVhIUmNkRngwYUNBdFBTQXhPMXh1WEhSY2RIMWNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQmJYRzVjZEZ4MGFDQXFJRE0yTUN4Y2JseDBYSFJ6SUNvZ01UQXdMRnh1WEhSY2RIWWdLaUF4TURCY2JseDBYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVjbWRpTG1oM1lpQTlJR1oxYm1OMGFXOXVJQ2h5WjJJcElIdGNibHgwZG1GeUlISWdQU0J5WjJKYk1GMDdYRzVjZEhaaGNpQm5JRDBnY21kaVd6RmRPMXh1WEhSMllYSWdZaUE5SUhKbllsc3lYVHRjYmx4MGRtRnlJR2dnUFNCamIyNTJaWEowTG5KbllpNW9jMndvY21kaUtWc3dYVHRjYmx4MGRtRnlJSGNnUFNBeElDOGdNalUxSUNvZ1RXRjBhQzV0YVc0b2Npd2dUV0YwYUM1dGFXNG9aeXdnWWlrcE8xeHVYRzVjZEdJZ1BTQXhJQzBnTVNBdklESTFOU0FxSUUxaGRHZ3ViV0Y0S0hJc0lFMWhkR2d1YldGNEtHY3NJR0lwS1R0Y2JseHVYSFJ5WlhSMWNtNGdXMmdzSUhjZ0tpQXhNREFzSUdJZ0tpQXhNREJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzV5WjJJdVkyMTVheUE5SUdaMWJtTjBhVzl1SUNoeVoySXBJSHRjYmx4MGRtRnlJSElnUFNCeVoySmJNRjBnTHlBeU5UVTdYRzVjZEhaaGNpQm5JRDBnY21kaVd6RmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1lpQTlJSEpuWWxzeVhTQXZJREkxTlR0Y2JseDBkbUZ5SUdNN1hHNWNkSFpoY2lCdE8xeHVYSFIyWVhJZ2VUdGNibHgwZG1GeUlHczdYRzVjYmx4MGF5QTlJRTFoZEdndWJXbHVLREVnTFNCeUxDQXhJQzBnWnl3Z01TQXRJR0lwTzF4dVhIUmpJRDBnS0RFZ0xTQnlJQzBnYXlrZ0x5QW9NU0F0SUdzcElIeDhJREE3WEc1Y2RHMGdQU0FvTVNBdElHY2dMU0JyS1NBdklDZ3hJQzBnYXlrZ2ZId2dNRHRjYmx4MGVTQTlJQ2d4SUMwZ1lpQXRJR3NwSUM4Z0tERWdMU0JyS1NCOGZDQXdPMXh1WEc1Y2RISmxkSFZ5YmlCYll5QXFJREV3TUN3Z2JTQXFJREV3TUN3Z2VTQXFJREV3TUN3Z2F5QXFJREV3TUYwN1hHNTlPMXh1WEc0dktpcGNiaUFxSUZObFpTQm9kSFJ3Y3pvdkwyVnVMbTB1ZDJscmFYQmxaR2xoTG05eVp5OTNhV3RwTDBWMVkyeHBaR1ZoYmw5a2FYTjBZVzVqWlNOVGNYVmhjbVZrWDBWMVkyeHBaR1ZoYmw5a2FYTjBZVzVqWlZ4dUlDb2dLaTljYm1aMWJtTjBhVzl1SUdOdmJYQmhjbUYwYVhabFJHbHpkR0Z1WTJVb2VDd2dlU2tnZTF4dVhIUnlaWFIxY200Z0tGeHVYSFJjZEUxaGRHZ3VjRzkzS0hoYk1GMGdMU0I1V3pCZExDQXlLU0FyWEc1Y2RGeDBUV0YwYUM1d2IzY29lRnN4WFNBdElIbGJNVjBzSURJcElDdGNibHgwWEhSTllYUm9MbkJ2ZHloNFd6SmRJQzBnZVZzeVhTd2dNaWxjYmx4MEtUdGNibjFjYmx4dVkyOXVkbVZ5ZEM1eVoySXVhMlY1ZDI5eVpDQTlJR1oxYm1OMGFXOXVJQ2h5WjJJcElIdGNibHgwZG1GeUlISmxkbVZ5YzJWa0lEMGdjbVYyWlhKelpVdGxlWGR2Y21SelczSm5ZbDA3WEc1Y2RHbG1JQ2h5WlhabGNuTmxaQ2tnZTF4dVhIUmNkSEpsZEhWeWJpQnlaWFpsY25ObFpEdGNibHgwZlZ4dVhHNWNkSFpoY2lCamRYSnlaVzUwUTJ4dmMyVnpkRVJwYzNSaGJtTmxJRDBnU1c1bWFXNXBkSGs3WEc1Y2RIWmhjaUJqZFhKeVpXNTBRMnh2YzJWemRFdGxlWGR2Y21RN1hHNWNibHgwWm05eUlDaDJZWElnYTJWNWQyOXlaQ0JwYmlCamMzTkxaWGwzYjNKa2N5a2dlMXh1WEhSY2RHbG1JQ2hqYzNOTFpYbDNiM0prY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhsM2IzSmtLU2tnZTF4dVhIUmNkRngwZG1GeUlIWmhiSFZsSUQwZ1kzTnpTMlY1ZDI5eVpITmJhMlY1ZDI5eVpGMDdYRzVjYmx4MFhIUmNkQzh2SUVOdmJYQjFkR1VnWTI5dGNHRnlZWFJwZG1VZ1pHbHpkR0Z1WTJWY2JseDBYSFJjZEhaaGNpQmthWE4wWVc1alpTQTlJR052YlhCaGNtRjBhWFpsUkdsemRHRnVZMlVvY21kaUxDQjJZV3gxWlNrN1hHNWNibHgwWEhSY2RDOHZJRU5vWldOcklHbG1JR2wwY3lCc1pYTnpMQ0JwWmlCemJ5QnpaWFFnWVhNZ1kyeHZjMlZ6ZEZ4dVhIUmNkRngwYVdZZ0tHUnBjM1JoYm1ObElEd2dZM1Z5Y21WdWRFTnNiM05sYzNSRWFYTjBZVzVqWlNrZ2UxeHVYSFJjZEZ4MFhIUmpkWEp5Wlc1MFEyeHZjMlZ6ZEVScGMzUmhibU5sSUQwZ1pHbHpkR0Z1WTJVN1hHNWNkRngwWEhSY2RHTjFjbkpsYm5SRGJHOXpaWE4wUzJWNWQyOXlaQ0E5SUd0bGVYZHZjbVE3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOVhHNWNibHgwY21WMGRYSnVJR04xY25KbGJuUkRiRzl6WlhOMFMyVjVkMjl5WkR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1YTJWNWQyOXlaQzV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9hMlY1ZDI5eVpDa2dlMXh1WEhSeVpYUjFjbTRnWTNOelMyVjVkMjl5WkhOYmEyVjVkMjl5WkYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG5KbllpNTRlWG9nUFNCbWRXNWpkR2x2YmlBb2NtZGlLU0I3WEc1Y2RIWmhjaUJ5SUQwZ2NtZGlXekJkSUM4Z01qVTFPMXh1WEhSMllYSWdaeUE5SUhKbllsc3hYU0F2SURJMU5UdGNibHgwZG1GeUlHSWdQU0J5WjJKYk1sMGdMeUF5TlRVN1hHNWNibHgwTHk4Z1lYTnpkVzFsSUhOU1IwSmNibHgwY2lBOUlISWdQaUF3TGpBME1EUTFJRDhnVFdGMGFDNXdiM2NvS0NoeUlDc2dNQzR3TlRVcElDOGdNUzR3TlRVcExDQXlMalFwSURvZ0tISWdMeUF4TWk0NU1pazdYRzVjZEdjZ1BTQm5JRDRnTUM0d05EQTBOU0EvSUUxaGRHZ3VjRzkzS0Nnb1p5QXJJREF1TURVMUtTQXZJREV1TURVMUtTd2dNaTQwS1NBNklDaG5JQzhnTVRJdU9USXBPMXh1WEhSaUlEMGdZaUErSURBdU1EUXdORFVnUHlCTllYUm9MbkJ2ZHlnb0tHSWdLeUF3TGpBMU5Ta2dMeUF4TGpBMU5Ta3NJREl1TkNrZ09pQW9ZaUF2SURFeUxqa3lLVHRjYmx4dVhIUjJZWElnZUNBOUlDaHlJQ29nTUM0ME1USTBLU0FySUNobklDb2dNQzR6TlRjMktTQXJJQ2hpSUNvZ01DNHhPREExS1R0Y2JseDBkbUZ5SUhrZ1BTQW9jaUFxSURBdU1qRXlOaWtnS3lBb1p5QXFJREF1TnpFMU1pa2dLeUFvWWlBcUlEQXVNRGN5TWlrN1hHNWNkSFpoY2lCNklEMGdLSElnS2lBd0xqQXhPVE1wSUNzZ0tHY2dLaUF3TGpFeE9USXBJQ3NnS0dJZ0tpQXdMamsxTURVcE8xeHVYRzVjZEhKbGRIVnliaUJiZUNBcUlERXdNQ3dnZVNBcUlERXdNQ3dnZWlBcUlERXdNRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1c1lXSWdQU0JtZFc1amRHbHZiaUFvY21kaUtTQjdYRzVjZEhaaGNpQjRlWG9nUFNCamIyNTJaWEowTG5KbllpNTRlWG9vY21kaUtUdGNibHgwZG1GeUlIZ2dQU0I0ZVhwYk1GMDdYRzVjZEhaaGNpQjVJRDBnZUhsNld6RmRPMXh1WEhSMllYSWdlaUE5SUhoNWVsc3lYVHRjYmx4MGRtRnlJR3c3WEc1Y2RIWmhjaUJoTzF4dVhIUjJZWElnWWp0Y2JseHVYSFI0SUM4OUlEazFMakEwTnp0Y2JseDBlU0F2UFNBeE1EQTdYRzVjZEhvZ0x6MGdNVEE0TGpnNE16dGNibHh1WEhSNElEMGdlQ0ErSURBdU1EQTRPRFUySUQ4Z1RXRjBhQzV3YjNjb2VDd2dNU0F2SURNcElEb2dLRGN1TnpnM0lDb2dlQ2tnS3lBb01UWWdMeUF4TVRZcE8xeHVYSFI1SUQwZ2VTQStJREF1TURBNE9EVTJJRDhnVFdGMGFDNXdiM2NvZVN3Z01TQXZJRE1wSURvZ0tEY3VOemczSUNvZ2VTa2dLeUFvTVRZZ0x5QXhNVFlwTzF4dVhIUjZJRDBnZWlBK0lEQXVNREE0T0RVMklEOGdUV0YwYUM1d2IzY29laXdnTVNBdklETXBJRG9nS0RjdU56ZzNJQ29nZWlrZ0t5QW9NVFlnTHlBeE1UWXBPMXh1WEc1Y2RHd2dQU0FvTVRFMklDb2dlU2tnTFNBeE5qdGNibHgwWVNBOUlEVXdNQ0FxSUNoNElDMGdlU2s3WEc1Y2RHSWdQU0F5TURBZ0tpQW9lU0F0SUhvcE8xeHVYRzVjZEhKbGRIVnliaUJiYkN3Z1lTd2dZbDA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWh6YkM1eVoySWdQU0JtZFc1amRHbHZiaUFvYUhOc0tTQjdYRzVjZEhaaGNpQm9JRDBnYUhOc1d6QmRJQzhnTXpZd08xeHVYSFIyWVhJZ2N5QTlJR2h6YkZzeFhTQXZJREV3TUR0Y2JseDBkbUZ5SUd3Z1BTQm9jMnhiTWwwZ0x5QXhNREE3WEc1Y2RIWmhjaUIwTVR0Y2JseDBkbUZ5SUhReU8xeHVYSFIyWVhJZ2RETTdYRzVjZEhaaGNpQnlaMkk3WEc1Y2RIWmhjaUIyWVd3N1hHNWNibHgwYVdZZ0tITWdQVDA5SURBcElIdGNibHgwWEhSMllXd2dQU0JzSUNvZ01qVTFPMXh1WEhSY2RISmxkSFZ5YmlCYmRtRnNMQ0IyWVd3c0lIWmhiRjA3WEc1Y2RIMWNibHh1WEhScFppQW9iQ0E4SURBdU5Ta2dlMXh1WEhSY2RIUXlJRDBnYkNBcUlDZ3hJQ3NnY3lrN1hHNWNkSDBnWld4elpTQjdYRzVjZEZ4MGRESWdQU0JzSUNzZ2N5QXRJR3dnS2lCek8xeHVYSFI5WEc1Y2JseDBkREVnUFNBeUlDb2diQ0F0SUhReU8xeHVYRzVjZEhKbllpQTlJRnN3TENBd0xDQXdYVHRjYmx4MFptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQXpPeUJwS3lzcElIdGNibHgwWEhSME15QTlJR2dnS3lBeElDOGdNeUFxSUMwb2FTQXRJREVwTzF4dVhIUmNkR2xtSUNoME15QThJREFwSUh0Y2JseDBYSFJjZEhRekt5czdYRzVjZEZ4MGZWeHVYSFJjZEdsbUlDaDBNeUErSURFcElIdGNibHgwWEhSY2RIUXpMUzA3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0RZZ0tpQjBNeUE4SURFcElIdGNibHgwWEhSY2RIWmhiQ0E5SUhReElDc2dLSFF5SUMwZ2RERXBJQ29nTmlBcUlIUXpPMXh1WEhSY2RIMGdaV3h6WlNCcFppQW9NaUFxSUhReklEd2dNU2tnZTF4dVhIUmNkRngwZG1Gc0lEMGdkREk3WEc1Y2RGeDBmU0JsYkhObElHbG1JQ2d6SUNvZ2RETWdQQ0F5S1NCN1hHNWNkRngwWEhSMllXd2dQU0IwTVNBcklDaDBNaUF0SUhReEtTQXFJQ2d5SUM4Z015QXRJSFF6S1NBcUlEWTdYRzVjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEhaaGJDQTlJSFF4TzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpuWWx0cFhTQTlJSFpoYkNBcUlESTFOVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJ5WjJJN1hHNTlPMXh1WEc1amIyNTJaWEowTG1oemJDNW9jM1lnUFNCbWRXNWpkR2x2YmlBb2FITnNLU0I3WEc1Y2RIWmhjaUJvSUQwZ2FITnNXekJkTzF4dVhIUjJZWElnY3lBOUlHaHpiRnN4WFNBdklERXdNRHRjYmx4MGRtRnlJR3dnUFNCb2MyeGJNbDBnTHlBeE1EQTdYRzVjZEhaaGNpQnpiV2x1SUQwZ2N6dGNibHgwZG1GeUlHeHRhVzRnUFNCTllYUm9MbTFoZUNoc0xDQXdMakF4S1R0Y2JseDBkbUZ5SUhOMk8xeHVYSFIyWVhJZ2RqdGNibHh1WEhSc0lDbzlJREk3WEc1Y2RITWdLajBnS0d3Z1BEMGdNU2tnUHlCc0lEb2dNaUF0SUd3N1hHNWNkSE50YVc0Z0tqMGdiRzFwYmlBOFBTQXhJRDhnYkcxcGJpQTZJRElnTFNCc2JXbHVPMXh1WEhSMklEMGdLR3dnS3lCektTQXZJREk3WEc1Y2RITjJJRDBnYkNBOVBUMGdNQ0EvSUNneUlDb2djMjFwYmlrZ0x5QW9iRzFwYmlBcklITnRhVzRwSURvZ0tESWdLaUJ6S1NBdklDaHNJQ3NnY3lrN1hHNWNibHgwY21WMGRYSnVJRnRvTENCemRpQXFJREV3TUN3Z2RpQXFJREV3TUYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG1oemRpNXlaMklnUFNCbWRXNWpkR2x2YmlBb2FITjJLU0I3WEc1Y2RIWmhjaUJvSUQwZ2FITjJXekJkSUM4Z05qQTdYRzVjZEhaaGNpQnpJRDBnYUhOMld6RmRJQzhnTVRBd08xeHVYSFIyWVhJZ2RpQTlJR2h6ZGxzeVhTQXZJREV3TUR0Y2JseDBkbUZ5SUdocElEMGdUV0YwYUM1bWJHOXZjaWhvS1NBbElEWTdYRzVjYmx4MGRtRnlJR1lnUFNCb0lDMGdUV0YwYUM1bWJHOXZjaWhvS1R0Y2JseDBkbUZ5SUhBZ1BTQXlOVFVnS2lCMklDb2dLREVnTFNCektUdGNibHgwZG1GeUlIRWdQU0F5TlRVZ0tpQjJJQ29nS0RFZ0xTQW9jeUFxSUdZcEtUdGNibHgwZG1GeUlIUWdQU0F5TlRVZ0tpQjJJQ29nS0RFZ0xTQW9jeUFxSUNneElDMGdaaWtwS1R0Y2JseDBkaUFxUFNBeU5UVTdYRzVjYmx4MGMzZHBkR05vSUNob2FTa2dlMXh1WEhSY2RHTmhjMlVnTURwY2JseDBYSFJjZEhKbGRIVnliaUJiZGl3Z2RDd2djRjA3WEc1Y2RGeDBZMkZ6WlNBeE9seHVYSFJjZEZ4MGNtVjBkWEp1SUZ0eExDQjJMQ0J3WFR0Y2JseDBYSFJqWVhObElESTZYRzVjZEZ4MFhIUnlaWFIxY200Z1czQXNJSFlzSUhSZE8xeHVYSFJjZEdOaGMyVWdNenBjYmx4MFhIUmNkSEpsZEhWeWJpQmJjQ3dnY1N3Z2RsMDdYRzVjZEZ4MFkyRnpaU0EwT2x4dVhIUmNkRngwY21WMGRYSnVJRnQwTENCd0xDQjJYVHRjYmx4MFhIUmpZWE5sSURVNlhHNWNkRngwWEhSeVpYUjFjbTRnVzNZc0lIQXNJSEZkTzF4dVhIUjlYRzU5TzF4dVhHNWpiMjUyWlhKMExtaHpkaTVvYzJ3Z1BTQm1kVzVqZEdsdmJpQW9hSE4yS1NCN1hHNWNkSFpoY2lCb0lEMGdhSE4yV3pCZE8xeHVYSFIyWVhJZ2N5QTlJR2h6ZGxzeFhTQXZJREV3TUR0Y2JseDBkbUZ5SUhZZ1BTQm9jM1piTWwwZ0x5QXhNREE3WEc1Y2RIWmhjaUIyYldsdUlEMGdUV0YwYUM1dFlYZ29kaXdnTUM0d01TazdYRzVjZEhaaGNpQnNiV2x1TzF4dVhIUjJZWElnYzJ3N1hHNWNkSFpoY2lCc08xeHVYRzVjZEd3Z1BTQW9NaUF0SUhNcElDb2dkanRjYmx4MGJHMXBiaUE5SUNneUlDMGdjeWtnS2lCMmJXbHVPMXh1WEhSemJDQTlJSE1nS2lCMmJXbHVPMXh1WEhSemJDQXZQU0FvYkcxcGJpQThQU0F4S1NBL0lHeHRhVzRnT2lBeUlDMGdiRzFwYmp0Y2JseDBjMndnUFNCemJDQjhmQ0F3TzF4dVhIUnNJQzg5SURJN1hHNWNibHgwY21WMGRYSnVJRnRvTENCemJDQXFJREV3TUN3Z2JDQXFJREV3TUYwN1hHNTlPMXh1WEc0dkx5Qm9kSFJ3T2k4dlpHVjJMbmN6TG05eVp5OWpjM04zWnk5amMzTXRZMjlzYjNJdkkyaDNZaTEwYnkxeVoySmNibU52Ym5abGNuUXVhSGRpTG5KbllpQTlJR1oxYm1OMGFXOXVJQ2hvZDJJcElIdGNibHgwZG1GeUlHZ2dQU0JvZDJKYk1GMGdMeUF6TmpBN1hHNWNkSFpoY2lCM2FDQTlJR2gzWWxzeFhTQXZJREV3TUR0Y2JseDBkbUZ5SUdKc0lEMGdhSGRpV3pKZElDOGdNVEF3TzF4dVhIUjJZWElnY21GMGFXOGdQU0IzYUNBcklHSnNPMXh1WEhSMllYSWdhVHRjYmx4MGRtRnlJSFk3WEc1Y2RIWmhjaUJtTzF4dVhIUjJZWElnYmp0Y2JseHVYSFF2THlCM2FDQXJJR0pzSUdOaGJuUWdZbVVnUGlBeFhHNWNkR2xtSUNoeVlYUnBieUErSURFcElIdGNibHgwWEhSM2FDQXZQU0J5WVhScGJ6dGNibHgwWEhSaWJDQXZQU0J5WVhScGJ6dGNibHgwZlZ4dVhHNWNkR2tnUFNCTllYUm9MbVpzYjI5eUtEWWdLaUJvS1R0Y2JseDBkaUE5SURFZ0xTQmliRHRjYmx4MFppQTlJRFlnS2lCb0lDMGdhVHRjYmx4dVhIUnBaaUFvS0drZ0ppQXdlREF4S1NBaFBUMGdNQ2tnZTF4dVhIUmNkR1lnUFNBeElDMGdaanRjYmx4MGZWeHVYRzVjZEc0Z1BTQjNhQ0FySUdZZ0tpQW9kaUF0SUhkb0tUc2dMeThnYkdsdVpXRnlJR2x1ZEdWeWNHOXNZWFJwYjI1Y2JseHVYSFIyWVhJZ2NqdGNibHgwZG1GeUlHYzdYRzVjZEhaaGNpQmlPMXh1WEhSemQybDBZMmdnS0drcElIdGNibHgwWEhSa1pXWmhkV3gwT2x4dVhIUmNkR05oYzJVZ05qcGNibHgwWEhSallYTmxJREE2SUhJZ1BTQjJPeUJuSUQwZ2Jqc2dZaUE5SUhkb095QmljbVZoYXp0Y2JseDBYSFJqWVhObElERTZJSElnUFNCdU95Qm5JRDBnZGpzZ1lpQTlJSGRvT3lCaWNtVmhhenRjYmx4MFhIUmpZWE5sSURJNklISWdQU0IzYURzZ1p5QTlJSFk3SUdJZ1BTQnVPeUJpY21WaGF6dGNibHgwWEhSallYTmxJRE02SUhJZ1BTQjNhRHNnWnlBOUlHNDdJR0lnUFNCMk95QmljbVZoYXp0Y2JseDBYSFJqWVhObElEUTZJSElnUFNCdU95Qm5JRDBnZDJnN0lHSWdQU0IyT3lCaWNtVmhhenRjYmx4MFhIUmpZWE5sSURVNklISWdQU0IyT3lCbklEMGdkMmc3SUdJZ1BTQnVPeUJpY21WaGF6dGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQmJjaUFxSURJMU5Td2daeUFxSURJMU5Td2dZaUFxSURJMU5WMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExtTnRlV3N1Y21kaUlEMGdablZ1WTNScGIyNGdLR050ZVdzcElIdGNibHgwZG1GeUlHTWdQU0JqYlhscld6QmRJQzhnTVRBd08xeHVYSFIyWVhJZ2JTQTlJR050ZVd0Yk1WMGdMeUF4TURBN1hHNWNkSFpoY2lCNUlEMGdZMjE1YTFzeVhTQXZJREV3TUR0Y2JseDBkbUZ5SUdzZ1BTQmpiWGxyV3pOZElDOGdNVEF3TzF4dVhIUjJZWElnY2p0Y2JseDBkbUZ5SUdjN1hHNWNkSFpoY2lCaU8xeHVYRzVjZEhJZ1BTQXhJQzBnVFdGMGFDNXRhVzRvTVN3Z1l5QXFJQ2d4SUMwZ2F5a2dLeUJyS1R0Y2JseDBaeUE5SURFZ0xTQk5ZWFJvTG0xcGJpZ3hMQ0J0SUNvZ0tERWdMU0JyS1NBcklHc3BPMXh1WEhSaUlEMGdNU0F0SUUxaGRHZ3ViV2x1S0RFc0lIa2dLaUFvTVNBdElHc3BJQ3NnYXlrN1hHNWNibHgwY21WMGRYSnVJRnR5SUNvZ01qVTFMQ0JuSUNvZ01qVTFMQ0JpSUNvZ01qVTFYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVlSGw2TG5KbllpQTlJR1oxYm1OMGFXOXVJQ2g0ZVhvcElIdGNibHgwZG1GeUlIZ2dQU0I0ZVhwYk1GMGdMeUF4TURBN1hHNWNkSFpoY2lCNUlEMGdlSGw2V3pGZElDOGdNVEF3TzF4dVhIUjJZWElnZWlBOUlIaDVlbHN5WFNBdklERXdNRHRjYmx4MGRtRnlJSEk3WEc1Y2RIWmhjaUJuTzF4dVhIUjJZWElnWWp0Y2JseHVYSFJ5SUQwZ0tIZ2dLaUF6TGpJME1EWXBJQ3NnS0hrZ0tpQXRNUzQxTXpjeUtTQXJJQ2g2SUNvZ0xUQXVORGs0TmlrN1hHNWNkR2NnUFNBb2VDQXFJQzB3TGprMk9Ea3BJQ3NnS0hrZ0tpQXhMamczTlRncElDc2dLSG9nS2lBd0xqQTBNVFVwTzF4dVhIUmlJRDBnS0hnZ0tpQXdMakExTlRjcElDc2dLSGtnS2lBdE1DNHlNRFF3S1NBcklDaDZJQ29nTVM0d05UY3dLVHRjYmx4dVhIUXZMeUJoYzNOMWJXVWdjMUpIUWx4dVhIUnlJRDBnY2lBK0lEQXVNREF6TVRNd09GeHVYSFJjZEQ4Z0tDZ3hMakExTlNBcUlFMWhkR2d1Y0c5M0tISXNJREV1TUNBdklESXVOQ2twSUMwZ01DNHdOVFVwWEc1Y2RGeDBPaUJ5SUNvZ01USXVPVEk3WEc1Y2JseDBaeUE5SUdjZ1BpQXdMakF3TXpFek1EaGNibHgwWEhRL0lDZ29NUzR3TlRVZ0tpQk5ZWFJvTG5CdmR5aG5MQ0F4TGpBZ0x5QXlMalFwS1NBdElEQXVNRFUxS1Z4dVhIUmNkRG9nWnlBcUlERXlMamt5TzF4dVhHNWNkR0lnUFNCaUlENGdNQzR3TURNeE16QTRYRzVjZEZ4MFB5QW9LREV1TURVMUlDb2dUV0YwYUM1d2IzY29ZaXdnTVM0d0lDOGdNaTQwS1NrZ0xTQXdMakExTlNsY2JseDBYSFE2SUdJZ0tpQXhNaTQ1TWp0Y2JseHVYSFJ5SUQwZ1RXRjBhQzV0YVc0b1RXRjBhQzV0WVhnb01Dd2djaWtzSURFcE8xeHVYSFJuSUQwZ1RXRjBhQzV0YVc0b1RXRjBhQzV0WVhnb01Dd2daeWtzSURFcE8xeHVYSFJpSUQwZ1RXRjBhQzV0YVc0b1RXRjBhQzV0WVhnb01Dd2dZaWtzSURFcE8xeHVYRzVjZEhKbGRIVnliaUJiY2lBcUlESTFOU3dnWnlBcUlESTFOU3dnWWlBcUlESTFOVjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbmg1ZWk1c1lXSWdQU0JtZFc1amRHbHZiaUFvZUhsNktTQjdYRzVjZEhaaGNpQjRJRDBnZUhsNld6QmRPMXh1WEhSMllYSWdlU0E5SUhoNWVsc3hYVHRjYmx4MGRtRnlJSG9nUFNCNGVYcGJNbDA3WEc1Y2RIWmhjaUJzTzF4dVhIUjJZWElnWVR0Y2JseDBkbUZ5SUdJN1hHNWNibHgwZUNBdlBTQTVOUzR3TkRjN1hHNWNkSGtnTHowZ01UQXdPMXh1WEhSNklDODlJREV3T0M0NE9ETTdYRzVjYmx4MGVDQTlJSGdnUGlBd0xqQXdPRGcxTmlBL0lFMWhkR2d1Y0c5M0tIZ3NJREVnTHlBektTQTZJQ2czTGpjNE55QXFJSGdwSUNzZ0tERTJJQzhnTVRFMktUdGNibHgwZVNBOUlIa2dQaUF3TGpBd09EZzFOaUEvSUUxaGRHZ3VjRzkzS0hrc0lERWdMeUF6S1NBNklDZzNMamM0TnlBcUlIa3BJQ3NnS0RFMklDOGdNVEUyS1R0Y2JseDBlaUE5SUhvZ1BpQXdMakF3T0RnMU5pQS9JRTFoZEdndWNHOTNLSG9zSURFZ0x5QXpLU0E2SUNnM0xqYzROeUFxSUhvcElDc2dLREUySUM4Z01URTJLVHRjYmx4dVhIUnNJRDBnS0RFeE5pQXFJSGtwSUMwZ01UWTdYRzVjZEdFZ1BTQTFNREFnS2lBb2VDQXRJSGtwTzF4dVhIUmlJRDBnTWpBd0lDb2dLSGtnTFNCNktUdGNibHh1WEhSeVpYUjFjbTRnVzJ3c0lHRXNJR0pkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVzWVdJdWVIbDZJRDBnWm5WdVkzUnBiMjRnS0d4aFlpa2dlMXh1WEhSMllYSWdiQ0E5SUd4aFlsc3dYVHRjYmx4MGRtRnlJR0VnUFNCc1lXSmJNVjA3WEc1Y2RIWmhjaUJpSUQwZ2JHRmlXekpkTzF4dVhIUjJZWElnZUR0Y2JseDBkbUZ5SUhrN1hHNWNkSFpoY2lCNk8xeHVYRzVjZEhrZ1BTQW9iQ0FySURFMktTQXZJREV4Tmp0Y2JseDBlQ0E5SUdFZ0x5QTFNREFnS3lCNU8xeHVYSFI2SUQwZ2VTQXRJR0lnTHlBeU1EQTdYRzVjYmx4MGRtRnlJSGt5SUQwZ1RXRjBhQzV3YjNjb2VTd2dNeWs3WEc1Y2RIWmhjaUI0TWlBOUlFMWhkR2d1Y0c5M0tIZ3NJRE1wTzF4dVhIUjJZWElnZWpJZ1BTQk5ZWFJvTG5CdmR5aDZMQ0F6S1R0Y2JseDBlU0E5SUhreUlENGdNQzR3TURnNE5UWWdQeUI1TWlBNklDaDVJQzBnTVRZZ0x5QXhNVFlwSUM4Z055NDNPRGM3WEc1Y2RIZ2dQU0I0TWlBK0lEQXVNREE0T0RVMklEOGdlRElnT2lBb2VDQXRJREUySUM4Z01URTJLU0F2SURjdU56ZzNPMXh1WEhSNklEMGdlaklnUGlBd0xqQXdPRGcxTmlBL0lIb3lJRG9nS0hvZ0xTQXhOaUF2SURFeE5pa2dMeUEzTGpjNE56dGNibHh1WEhSNElDbzlJRGsxTGpBME56dGNibHgwZVNBcVBTQXhNREE3WEc1Y2RIb2dLajBnTVRBNExqZzRNenRjYmx4dVhIUnlaWFIxY200Z1czZ3NJSGtzSUhwZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1c1lXSXViR05vSUQwZ1puVnVZM1JwYjI0Z0tHeGhZaWtnZTF4dVhIUjJZWElnYkNBOUlHeGhZbHN3WFR0Y2JseDBkbUZ5SUdFZ1BTQnNZV0piTVYwN1hHNWNkSFpoY2lCaUlEMGdiR0ZpV3pKZE8xeHVYSFIyWVhJZ2FISTdYRzVjZEhaaGNpQm9PMXh1WEhSMllYSWdZenRjYmx4dVhIUm9jaUE5SUUxaGRHZ3VZWFJoYmpJb1lpd2dZU2s3WEc1Y2RHZ2dQU0JvY2lBcUlETTJNQ0F2SURJZ0x5Qk5ZWFJvTGxCSk8xeHVYRzVjZEdsbUlDaG9JRHdnTUNrZ2UxeHVYSFJjZEdnZ0t6MGdNell3TzF4dVhIUjlYRzVjYmx4MFl5QTlJRTFoZEdndWMzRnlkQ2hoSUNvZ1lTQXJJR0lnS2lCaUtUdGNibHh1WEhSeVpYUjFjbTRnVzJ3c0lHTXNJR2hkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVzWTJndWJHRmlJRDBnWm5WdVkzUnBiMjRnS0d4amFDa2dlMXh1WEhSMllYSWdiQ0E5SUd4amFGc3dYVHRjYmx4MGRtRnlJR01nUFNCc1kyaGJNVjA3WEc1Y2RIWmhjaUJvSUQwZ2JHTm9XekpkTzF4dVhIUjJZWElnWVR0Y2JseDBkbUZ5SUdJN1hHNWNkSFpoY2lCb2NqdGNibHh1WEhSb2NpQTlJR2dnTHlBek5qQWdLaUF5SUNvZ1RXRjBhQzVRU1R0Y2JseDBZU0E5SUdNZ0tpQk5ZWFJvTG1OdmN5aG9jaWs3WEc1Y2RHSWdQU0JqSUNvZ1RXRjBhQzV6YVc0b2FISXBPMXh1WEc1Y2RISmxkSFZ5YmlCYmJDd2dZU3dnWWwwN1hHNTlPMXh1WEc1amIyNTJaWEowTG5KbllpNWhibk5wTVRZZ1BTQm1kVzVqZEdsdmJpQW9ZWEpuY3lrZ2UxeHVYSFIyWVhJZ2NpQTlJR0Z5WjNOYk1GMDdYRzVjZEhaaGNpQm5JRDBnWVhKbmMxc3hYVHRjYmx4MGRtRnlJR0lnUFNCaGNtZHpXekpkTzF4dVhIUjJZWElnZG1Gc2RXVWdQU0F4SUdsdUlHRnlaM1Z0Wlc1MGN5QS9JR0Z5WjNWdFpXNTBjMXN4WFNBNklHTnZiblpsY25RdWNtZGlMbWh6ZGloaGNtZHpLVnN5WFRzZ0x5OGdhSE4ySUMwK0lHRnVjMmt4TmlCdmNIUnBiV2w2WVhScGIyNWNibHh1WEhSMllXeDFaU0E5SUUxaGRHZ3VjbTkxYm1Rb2RtRnNkV1VnTHlBMU1DazdYRzVjYmx4MGFXWWdLSFpoYkhWbElEMDlQU0F3S1NCN1hHNWNkRngwY21WMGRYSnVJRE13TzF4dVhIUjlYRzVjYmx4MGRtRnlJR0Z1YzJrZ1BTQXpNRnh1WEhSY2RDc2dLQ2hOWVhSb0xuSnZkVzVrS0dJZ0x5QXlOVFVwSUR3OElESXBYRzVjZEZ4MGZDQW9UV0YwYUM1eWIzVnVaQ2huSUM4Z01qVTFLU0E4UENBeEtWeHVYSFJjZEh3Z1RXRjBhQzV5YjNWdVpDaHlJQzhnTWpVMUtTazdYRzVjYmx4MGFXWWdLSFpoYkhWbElEMDlQU0F5S1NCN1hHNWNkRngwWVc1emFTQXJQU0EyTUR0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCaGJuTnBPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW9jM1l1WVc1emFURTJJRDBnWm5WdVkzUnBiMjRnS0dGeVozTXBJSHRjYmx4MEx5OGdiM0IwYVcxcGVtRjBhVzl1SUdobGNtVTdJSGRsSUdGc2NtVmhaSGtnYTI1dmR5QjBhR1VnZG1Gc2RXVWdZVzVrSUdSdmJpZDBJRzVsWldRZ2RHOGdaMlYwWEc1Y2RDOHZJR2wwSUdOdmJuWmxjblJsWkNCbWIzSWdkWE11WEc1Y2RISmxkSFZ5YmlCamIyNTJaWEowTG5KbllpNWhibk5wTVRZb1kyOXVkbVZ5ZEM1b2MzWXVjbWRpS0dGeVozTXBMQ0JoY21keld6SmRLVHRjYm4wN1hHNWNibU52Ym5abGNuUXVjbWRpTG1GdWMya3lOVFlnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUjJZWElnY2lBOUlHRnlaM05iTUYwN1hHNWNkSFpoY2lCbklEMGdZWEpuYzFzeFhUdGNibHgwZG1GeUlHSWdQU0JoY21keld6SmRPMXh1WEc1Y2RDOHZJSGRsSUhWelpTQjBhR1VnWlhoMFpXNWtaV1FnWjNKbGVYTmpZV3hsSUhCaGJHVjBkR1VnYUdWeVpTd2dkMmwwYUNCMGFHVWdaWGhqWlhCMGFXOXVJRzltWEc1Y2RDOHZJR0pzWVdOcklHRnVaQ0IzYUdsMFpTNGdibTl5YldGc0lIQmhiR1YwZEdVZ2IyNXNlU0JvWVhNZ05DQm5jbVY1YzJOaGJHVWdjMmhoWkdWekxseHVYSFJwWmlBb2NpQTlQVDBnWnlBbUppQm5JRDA5UFNCaUtTQjdYRzVjZEZ4MGFXWWdLSElnUENBNEtTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z01UWTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLSElnUGlBeU5EZ3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQXlNekU3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlFMWhkR2d1Y205MWJtUW9LQ2h5SUMwZ09Da2dMeUF5TkRjcElDb2dNalFwSUNzZ01qTXlPMXh1WEhSOVhHNWNibHgwZG1GeUlHRnVjMmtnUFNBeE5seHVYSFJjZENzZ0tETTJJQ29nVFdGMGFDNXliM1Z1WkNoeUlDOGdNalUxSUNvZ05Ta3BYRzVjZEZ4MEt5QW9OaUFxSUUxaGRHZ3VjbTkxYm1Rb1p5QXZJREkxTlNBcUlEVXBLVnh1WEhSY2RDc2dUV0YwYUM1eWIzVnVaQ2hpSUM4Z01qVTFJQ29nTlNrN1hHNWNibHgwY21WMGRYSnVJR0Z1YzJrN1hHNTlPMXh1WEc1amIyNTJaWEowTG1GdWMya3hOaTV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9ZWEpuY3lrZ2UxeHVYSFIyWVhJZ1kyOXNiM0lnUFNCaGNtZHpJQ1VnTVRBN1hHNWNibHgwTHk4Z2FHRnVaR3hsSUdkeVpYbHpZMkZzWlZ4dVhIUnBaaUFvWTI5c2IzSWdQVDA5SURBZ2ZId2dZMjlzYjNJZ1BUMDlJRGNwSUh0Y2JseDBYSFJwWmlBb1lYSm5jeUErSURVd0tTQjdYRzVjZEZ4MFhIUmpiMnh2Y2lBclBTQXpMalU3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBZMjlzYjNJZ1BTQmpiMnh2Y2lBdklERXdMalVnS2lBeU5UVTdYRzVjYmx4MFhIUnlaWFIxY200Z1cyTnZiRzl5TENCamIyeHZjaXdnWTI5c2IzSmRPMXh1WEhSOVhHNWNibHgwZG1GeUlHMTFiSFFnUFNBb2ZuNG9ZWEpuY3lBK0lEVXdLU0FySURFcElDb2dNQzQxTzF4dVhIUjJZWElnY2lBOUlDZ29ZMjlzYjNJZ0ppQXhLU0FxSUcxMWJIUXBJQ29nTWpVMU8xeHVYSFIyWVhJZ1p5QTlJQ2dvS0dOdmJHOXlJRDQrSURFcElDWWdNU2tnS2lCdGRXeDBLU0FxSURJMU5UdGNibHgwZG1GeUlHSWdQU0FvS0NoamIyeHZjaUErUGlBeUtTQW1JREVwSUNvZ2JYVnNkQ2tnS2lBeU5UVTdYRzVjYmx4MGNtVjBkWEp1SUZ0eUxDQm5MQ0JpWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1WVc1emFUSTFOaTV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9ZWEpuY3lrZ2UxeHVYSFF2THlCb1lXNWtiR1VnWjNKbGVYTmpZV3hsWEc1Y2RHbG1JQ2hoY21keklENDlJREl6TWlrZ2UxeHVYSFJjZEhaaGNpQmpJRDBnS0dGeVozTWdMU0F5TXpJcElDb2dNVEFnS3lBNE8xeHVYSFJjZEhKbGRIVnliaUJiWXl3Z1l5d2dZMTA3WEc1Y2RIMWNibHh1WEhSaGNtZHpJQzA5SURFMk8xeHVYRzVjZEhaaGNpQnlaVzA3WEc1Y2RIWmhjaUJ5SUQwZ1RXRjBhQzVtYkc5dmNpaGhjbWR6SUM4Z016WXBJQzhnTlNBcUlESTFOVHRjYmx4MGRtRnlJR2NnUFNCTllYUm9MbVpzYjI5eUtDaHlaVzBnUFNCaGNtZHpJQ1VnTXpZcElDOGdOaWtnTHlBMUlDb2dNalUxTzF4dVhIUjJZWElnWWlBOUlDaHlaVzBnSlNBMktTQXZJRFVnS2lBeU5UVTdYRzVjYmx4MGNtVjBkWEp1SUZ0eUxDQm5MQ0JpWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1Y21kaUxtaGxlQ0E5SUdaMWJtTjBhVzl1SUNoaGNtZHpLU0I3WEc1Y2RIWmhjaUJwYm5SbFoyVnlJRDBnS0NoTllYUm9Mbkp2ZFc1a0tHRnlaM05iTUYwcElDWWdNSGhHUmlrZ1BEd2dNVFlwWEc1Y2RGeDBLeUFvS0UxaGRHZ3VjbTkxYm1Rb1lYSm5jMXN4WFNrZ0ppQXdlRVpHS1NBOFBDQTRLVnh1WEhSY2RDc2dLRTFoZEdndWNtOTFibVFvWVhKbmMxc3lYU2tnSmlBd2VFWkdLVHRjYmx4dVhIUjJZWElnYzNSeWFXNW5JRDBnYVc1MFpXZGxjaTUwYjFOMGNtbHVaeWd4TmlrdWRHOVZjSEJsY2tOaGMyVW9LVHRjYmx4MGNtVjBkWEp1SUNjd01EQXdNREFuTG5OMVluTjBjbWx1WnloemRISnBibWN1YkdWdVozUm9LU0FySUhOMGNtbHVaenRjYm4wN1hHNWNibU52Ym5abGNuUXVhR1Y0TG5KbllpQTlJR1oxYm1OMGFXOXVJQ2hoY21kektTQjdYRzVjZEhaaGNpQnRZWFJqYUNBOUlHRnlaM011ZEc5VGRISnBibWNvTVRZcExtMWhkR05vS0M5YllTMW1NQzA1WFhzMmZYeGJZUzFtTUMwNVhYc3pmUzlwS1R0Y2JseDBhV1lnS0NGdFlYUmphQ2tnZTF4dVhIUmNkSEpsZEhWeWJpQmJNQ3dnTUN3Z01GMDdYRzVjZEgxY2JseHVYSFIyWVhJZ1kyOXNiM0pUZEhKcGJtY2dQU0J0WVhSamFGc3dYVHRjYmx4dVhIUnBaaUFvYldGMFkyaGJNRjB1YkdWdVozUm9JRDA5UFNBektTQjdYRzVjZEZ4MFkyOXNiM0pUZEhKcGJtY2dQU0JqYjJ4dmNsTjBjbWx1Wnk1emNHeHBkQ2duSnlrdWJXRndLR1oxYm1OMGFXOXVJQ2hqYUdGeUtTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z1kyaGhjaUFySUdOb1lYSTdYRzVjZEZ4MGZTa3VhbTlwYmlnbkp5azdYRzVjZEgxY2JseHVYSFIyWVhJZ2FXNTBaV2RsY2lBOUlIQmhjbk5sU1c1MEtHTnZiRzl5VTNSeWFXNW5MQ0F4TmlrN1hHNWNkSFpoY2lCeUlEMGdLR2x1ZEdWblpYSWdQajRnTVRZcElDWWdNSGhHUmp0Y2JseDBkbUZ5SUdjZ1BTQW9hVzUwWldkbGNpQStQaUE0S1NBbUlEQjRSa1k3WEc1Y2RIWmhjaUJpSUQwZ2FXNTBaV2RsY2lBbUlEQjRSa1k3WEc1Y2JseDBjbVYwZFhKdUlGdHlMQ0JuTENCaVhUdGNibjA3WEc1Y2JtTnZiblpsY25RdWNtZGlMbWhqWnlBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBkbUZ5SUhJZ1BTQnlaMkpiTUYwZ0x5QXlOVFU3WEc1Y2RIWmhjaUJuSUQwZ2NtZGlXekZkSUM4Z01qVTFPMXh1WEhSMllYSWdZaUE5SUhKbllsc3lYU0F2SURJMU5UdGNibHgwZG1GeUlHMWhlQ0E5SUUxaGRHZ3ViV0Y0S0UxaGRHZ3ViV0Y0S0hJc0lHY3BMQ0JpS1R0Y2JseDBkbUZ5SUcxcGJpQTlJRTFoZEdndWJXbHVLRTFoZEdndWJXbHVLSElzSUdjcExDQmlLVHRjYmx4MGRtRnlJR05vY205dFlTQTlJQ2h0WVhnZ0xTQnRhVzRwTzF4dVhIUjJZWElnWjNKaGVYTmpZV3hsTzF4dVhIUjJZWElnYUhWbE8xeHVYRzVjZEdsbUlDaGphSEp2YldFZ1BDQXhLU0I3WEc1Y2RGeDBaM0poZVhOallXeGxJRDBnYldsdUlDOGdLREVnTFNCamFISnZiV0VwTzF4dVhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEdkeVlYbHpZMkZzWlNBOUlEQTdYRzVjZEgxY2JseHVYSFJwWmlBb1kyaHliMjFoSUR3OUlEQXBJSHRjYmx4MFhIUm9kV1VnUFNBd08xeHVYSFI5SUdWc2MyVmNibHgwYVdZZ0tHMWhlQ0E5UFQwZ2Npa2dlMXh1WEhSY2RHaDFaU0E5SUNnb1p5QXRJR0lwSUM4Z1kyaHliMjFoS1NBbElEWTdYRzVjZEgwZ1pXeHpaVnh1WEhScFppQW9iV0Y0SUQwOVBTQm5LU0I3WEc1Y2RGeDBhSFZsSUQwZ01pQXJJQ2hpSUMwZ2Npa2dMeUJqYUhKdmJXRTdYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBhSFZsSUQwZ05DQXJJQ2h5SUMwZ1p5a2dMeUJqYUhKdmJXRWdLeUEwTzF4dVhIUjlYRzVjYmx4MGFIVmxJQzg5SURZN1hHNWNkR2gxWlNBbFBTQXhPMXh1WEc1Y2RISmxkSFZ5YmlCYmFIVmxJQ29nTXpZd0xDQmphSEp2YldFZ0tpQXhNREFzSUdkeVlYbHpZMkZzWlNBcUlERXdNRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWh6YkM1b1kyY2dQU0JtZFc1amRHbHZiaUFvYUhOc0tTQjdYRzVjZEhaaGNpQnpJRDBnYUhOc1d6RmRJQzhnTVRBd08xeHVYSFIyWVhJZ2JDQTlJR2h6YkZzeVhTQXZJREV3TUR0Y2JseDBkbUZ5SUdNZ1BTQXhPMXh1WEhSMllYSWdaaUE5SURBN1hHNWNibHgwYVdZZ0tHd2dQQ0F3TGpVcElIdGNibHgwWEhSaklEMGdNaTR3SUNvZ2N5QXFJR3c3WEc1Y2RIMGdaV3h6WlNCN1hHNWNkRngwWXlBOUlESXVNQ0FxSUhNZ0tpQW9NUzR3SUMwZ2JDazdYRzVjZEgxY2JseHVYSFJwWmlBb1l5QThJREV1TUNrZ2UxeHVYSFJjZEdZZ1BTQW9iQ0F0SURBdU5TQXFJR01wSUM4Z0tERXVNQ0F0SUdNcE8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlGdG9jMnhiTUYwc0lHTWdLaUF4TURBc0lHWWdLaUF4TURCZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b2MzWXVhR05uSUQwZ1puVnVZM1JwYjI0Z0tHaHpkaWtnZTF4dVhIUjJZWElnY3lBOUlHaHpkbHN4WFNBdklERXdNRHRjYmx4MGRtRnlJSFlnUFNCb2MzWmJNbDBnTHlBeE1EQTdYRzVjYmx4MGRtRnlJR01nUFNCeklDb2dkanRjYmx4MGRtRnlJR1lnUFNBd08xeHVYRzVjZEdsbUlDaGpJRHdnTVM0d0tTQjdYRzVjZEZ4MFppQTlJQ2gySUMwZ1l5a2dMeUFvTVNBdElHTXBPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJRnRvYzNaYk1GMHNJR01nS2lBeE1EQXNJR1lnS2lBeE1EQmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW9ZMmN1Y21kaUlEMGdablZ1WTNScGIyNGdLR2hqWnlrZ2UxeHVYSFIyWVhJZ2FDQTlJR2hqWjFzd1hTQXZJRE0yTUR0Y2JseDBkbUZ5SUdNZ1BTQm9ZMmRiTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUJuSUQwZ2FHTm5XekpkSUM4Z01UQXdPMXh1WEc1Y2RHbG1JQ2hqSUQwOVBTQXdMakFwSUh0Y2JseDBYSFJ5WlhSMWNtNGdXMmNnS2lBeU5UVXNJR2NnS2lBeU5UVXNJR2NnS2lBeU5UVmRPMXh1WEhSOVhHNWNibHgwZG1GeUlIQjFjbVVnUFNCYk1Dd2dNQ3dnTUYwN1hHNWNkSFpoY2lCb2FTQTlJQ2hvSUNVZ01Ta2dLaUEyTzF4dVhIUjJZWElnZGlBOUlHaHBJQ1VnTVR0Y2JseDBkbUZ5SUhjZ1BTQXhJQzBnZGp0Y2JseDBkbUZ5SUcxbklEMGdNRHRjYmx4dVhIUnpkMmwwWTJnZ0tFMWhkR2d1Wm14dmIzSW9hR2twS1NCN1hHNWNkRngwWTJGelpTQXdPbHh1WEhSY2RGeDBjSFZ5WlZzd1hTQTlJREU3SUhCMWNtVmJNVjBnUFNCMk95QndkWEpsV3pKZElEMGdNRHNnWW5KbFlXczdYRzVjZEZ4MFkyRnpaU0F4T2x4dVhIUmNkRngwY0hWeVpWc3dYU0E5SUhjN0lIQjFjbVZiTVYwZ1BTQXhPeUJ3ZFhKbFd6SmRJRDBnTURzZ1luSmxZV3M3WEc1Y2RGeDBZMkZ6WlNBeU9seHVYSFJjZEZ4MGNIVnlaVnN3WFNBOUlEQTdJSEIxY21WYk1WMGdQU0F4T3lCd2RYSmxXekpkSUQwZ2Rqc2dZbkpsWVdzN1hHNWNkRngwWTJGelpTQXpPbHh1WEhSY2RGeDBjSFZ5WlZzd1hTQTlJREE3SUhCMWNtVmJNVjBnUFNCM095QndkWEpsV3pKZElEMGdNVHNnWW5KbFlXczdYRzVjZEZ4MFkyRnpaU0EwT2x4dVhIUmNkRngwY0hWeVpWc3dYU0E5SUhZN0lIQjFjbVZiTVYwZ1BTQXdPeUJ3ZFhKbFd6SmRJRDBnTVRzZ1luSmxZV3M3WEc1Y2RGeDBaR1ZtWVhWc2REcGNibHgwWEhSY2RIQjFjbVZiTUYwZ1BTQXhPeUJ3ZFhKbFd6RmRJRDBnTURzZ2NIVnlaVnN5WFNBOUlIYzdYRzVjZEgxY2JseHVYSFJ0WnlBOUlDZ3hMakFnTFNCaktTQXFJR2M3WEc1Y2JseDBjbVYwZFhKdUlGdGNibHgwWEhRb1l5QXFJSEIxY21WYk1GMGdLeUJ0WnlrZ0tpQXlOVFVzWEc1Y2RGeDBLR01nS2lCd2RYSmxXekZkSUNzZ2JXY3BJQ29nTWpVMUxGeHVYSFJjZENoaklDb2djSFZ5WlZzeVhTQXJJRzFuS1NBcUlESTFOVnh1WEhSZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b1kyY3VhSE4ySUQwZ1puVnVZM1JwYjI0Z0tHaGpaeWtnZTF4dVhIUjJZWElnWXlBOUlHaGpaMXN4WFNBdklERXdNRHRjYmx4MGRtRnlJR2NnUFNCb1kyZGJNbDBnTHlBeE1EQTdYRzVjYmx4MGRtRnlJSFlnUFNCaklDc2daeUFxSUNneExqQWdMU0JqS1R0Y2JseDBkbUZ5SUdZZ1BTQXdPMXh1WEc1Y2RHbG1JQ2gySUQ0Z01DNHdLU0I3WEc1Y2RGeDBaaUE5SUdNZ0x5QjJPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJRnRvWTJkYk1GMHNJR1lnS2lBeE1EQXNJSFlnS2lBeE1EQmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW9ZMmN1YUhOc0lEMGdablZ1WTNScGIyNGdLR2hqWnlrZ2UxeHVYSFIyWVhJZ1l5QTlJR2hqWjFzeFhTQXZJREV3TUR0Y2JseDBkbUZ5SUdjZ1BTQm9ZMmRiTWwwZ0x5QXhNREE3WEc1Y2JseDBkbUZ5SUd3Z1BTQm5JQ29nS0RFdU1DQXRJR01wSUNzZ01DNDFJQ29nWXp0Y2JseDBkbUZ5SUhNZ1BTQXdPMXh1WEc1Y2RHbG1JQ2hzSUQ0Z01DNHdJQ1ltSUd3Z1BDQXdMalVwSUh0Y2JseDBYSFJ6SUQwZ1l5QXZJQ2d5SUNvZ2JDazdYRzVjZEgwZ1pXeHpaVnh1WEhScFppQW9iQ0ErUFNBd0xqVWdKaVlnYkNBOElERXVNQ2tnZTF4dVhIUmNkSE1nUFNCaklDOGdLRElnS2lBb01TQXRJR3dwS1R0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCYmFHTm5XekJkTENCeklDb2dNVEF3TENCc0lDb2dNVEF3WFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1YUdObkxtaDNZaUE5SUdaMWJtTjBhVzl1SUNob1kyY3BJSHRjYmx4MGRtRnlJR01nUFNCb1kyZGJNVjBnTHlBeE1EQTdYRzVjZEhaaGNpQm5JRDBnYUdObld6SmRJQzhnTVRBd08xeHVYSFIyWVhJZ2RpQTlJR01nS3lCbklDb2dLREV1TUNBdElHTXBPMXh1WEhSeVpYUjFjbTRnVzJoaloxc3dYU3dnS0hZZ0xTQmpLU0FxSURFd01Dd2dLREVnTFNCMktTQXFJREV3TUYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG1oM1lpNW9ZMmNnUFNCbWRXNWpkR2x2YmlBb2FIZGlLU0I3WEc1Y2RIWmhjaUIzSUQwZ2FIZGlXekZkSUM4Z01UQXdPMXh1WEhSMllYSWdZaUE5SUdoM1lsc3lYU0F2SURFd01EdGNibHgwZG1GeUlIWWdQU0F4SUMwZ1lqdGNibHgwZG1GeUlHTWdQU0IySUMwZ2R6dGNibHgwZG1GeUlHY2dQU0F3TzF4dVhHNWNkR2xtSUNoaklEd2dNU2tnZTF4dVhIUmNkR2NnUFNBb2RpQXRJR01wSUM4Z0tERWdMU0JqS1R0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCYmFIZGlXekJkTENCaklDb2dNVEF3TENCbklDb2dNVEF3WFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1WVhCd2JHVXVjbWRpSUQwZ1puVnVZM1JwYjI0Z0tHRndjR3hsS1NCN1hHNWNkSEpsZEhWeWJpQmJLR0Z3Y0d4bFd6QmRJQzhnTmpVMU16VXBJQ29nTWpVMUxDQW9ZWEJ3YkdWYk1WMGdMeUEyTlRVek5Ta2dLaUF5TlRVc0lDaGhjSEJzWlZzeVhTQXZJRFkxTlRNMUtTQXFJREkxTlYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG5KbllpNWhjSEJzWlNBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBjbVYwZFhKdUlGc29jbWRpV3pCZElDOGdNalUxS1NBcUlEWTFOVE0xTENBb2NtZGlXekZkSUM4Z01qVTFLU0FxSURZMU5UTTFMQ0FvY21kaVd6SmRJQzhnTWpVMUtTQXFJRFkxTlRNMVhUdGNibjA3WEc1Y2JtTnZiblpsY25RdVozSmhlUzV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9ZWEpuY3lrZ2UxeHVYSFJ5WlhSMWNtNGdXMkZ5WjNOYk1GMGdMeUF4TURBZ0tpQXlOVFVzSUdGeVozTmJNRjBnTHlBeE1EQWdLaUF5TlRVc0lHRnlaM05iTUYwZ0x5QXhNREFnS2lBeU5UVmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW5jbUY1TG1oemJDQTlJR052Ym5abGNuUXVaM0poZVM1b2MzWWdQU0JtZFc1amRHbHZiaUFvWVhKbmN5a2dlMXh1WEhSeVpYUjFjbTRnV3pBc0lEQXNJR0Z5WjNOYk1GMWRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW5jbUY1TG1oM1lpQTlJR1oxYm1OMGFXOXVJQ2huY21GNUtTQjdYRzVjZEhKbGRIVnliaUJiTUN3Z01UQXdMQ0JuY21GNVd6QmRYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVaM0poZVM1amJYbHJJRDBnWm5WdVkzUnBiMjRnS0dkeVlYa3BJSHRjYmx4MGNtVjBkWEp1SUZzd0xDQXdMQ0F3TENCbmNtRjVXekJkWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1WjNKaGVTNXNZV0lnUFNCbWRXNWpkR2x2YmlBb1ozSmhlU2tnZTF4dVhIUnlaWFIxY200Z1cyZHlZWGxiTUYwc0lEQXNJREJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVuY21GNUxtaGxlQ0E5SUdaMWJtTjBhVzl1SUNobmNtRjVLU0I3WEc1Y2RIWmhjaUIyWVd3Z1BTQk5ZWFJvTG5KdmRXNWtLR2R5WVhsYk1GMGdMeUF4TURBZ0tpQXlOVFVwSUNZZ01IaEdSanRjYmx4MGRtRnlJR2x1ZEdWblpYSWdQU0FvZG1Gc0lEdzhJREUyS1NBcklDaDJZV3dnUER3Z09Da2dLeUIyWVd3N1hHNWNibHgwZG1GeUlITjBjbWx1WnlBOUlHbHVkR1ZuWlhJdWRHOVRkSEpwYm1jb01UWXBMblJ2VlhCd1pYSkRZWE5sS0NrN1hHNWNkSEpsZEhWeWJpQW5NREF3TURBd0p5NXpkV0p6ZEhKcGJtY29jM1J5YVc1bkxteGxibWQwYUNrZ0t5QnpkSEpwYm1jN1hHNTlPMXh1WEc1amIyNTJaWEowTG5KbllpNW5jbUY1SUQwZ1puVnVZM1JwYjI0Z0tISm5ZaWtnZTF4dVhIUjJZWElnZG1Gc0lEMGdLSEpuWWxzd1hTQXJJSEpuWWxzeFhTQXJJSEpuWWxzeVhTa2dMeUF6TzF4dVhIUnlaWFIxY200Z1czWmhiQ0F2SURJMU5TQXFJREV3TUYwN1hHNTlPMXh1SWl3aWRtRnlJR052Ym5abGNuTnBiMjV6SUQwZ2NtVnhkV2x5WlNnbkxpOWpiMjUyWlhKemFXOXVjeWNwTzF4dWRtRnlJSEp2ZFhSbElEMGdjbVZ4ZFdseVpTZ25MaTl5YjNWMFpTY3BPMXh1WEc1MllYSWdZMjl1ZG1WeWRDQTlJSHQ5TzF4dVhHNTJZWElnYlc5a1pXeHpJRDBnVDJKcVpXTjBMbXRsZVhNb1kyOXVkbVZ5YzJsdmJuTXBPMXh1WEc1bWRXNWpkR2x2YmlCM2NtRndVbUYzS0dadUtTQjdYRzVjZEhaaGNpQjNjbUZ3Y0dWa1JtNGdQU0JtZFc1amRHbHZiaUFvWVhKbmN5a2dlMXh1WEhSY2RHbG1JQ2hoY21keklEMDlQU0IxYm1SbFptbHVaV1FnZkh3Z1lYSm5jeUE5UFQwZ2JuVnNiQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJR0Z5WjNNN1hHNWNkRngwZlZ4dVhHNWNkRngwYVdZZ0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ1BpQXhLU0I3WEc1Y2RGeDBYSFJoY21keklEMGdRWEp5WVhrdWNISnZkRzkwZVhCbExuTnNhV05sTG1OaGJHd29ZWEpuZFcxbGJuUnpLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnlaWFIxY200Z1ptNG9ZWEpuY3lrN1hHNWNkSDA3WEc1Y2JseDBMeThnY0hKbGMyVnlkbVVnTG1OdmJuWmxjbk5wYjI0Z2NISnZjR1Z5ZEhrZ2FXWWdkR2hsY21VZ2FYTWdiMjVsWEc1Y2RHbG1JQ2duWTI5dWRtVnljMmx2YmljZ2FXNGdabTRwSUh0Y2JseDBYSFIzY21Gd2NHVmtSbTR1WTI5dWRtVnljMmx2YmlBOUlHWnVMbU52Ym5abGNuTnBiMjQ3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnZDNKaGNIQmxaRVp1TzF4dWZWeHVYRzVtZFc1amRHbHZiaUIzY21Gd1VtOTFibVJsWkNobWJpa2dlMXh1WEhSMllYSWdkM0poY0hCbFpFWnVJRDBnWm5WdVkzUnBiMjRnS0dGeVozTXBJSHRjYmx4MFhIUnBaaUFvWVhKbmN5QTlQVDBnZFc1a1pXWnBibVZrSUh4OElHRnlaM01nUFQwOUlHNTFiR3dwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJoY21kek8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNU2tnZTF4dVhIUmNkRngwWVhKbmN5QTlJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXpiR2xqWlM1allXeHNLR0Z5WjNWdFpXNTBjeWs3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBkbUZ5SUhKbGMzVnNkQ0E5SUdadUtHRnlaM01wTzF4dVhHNWNkRngwTHk4Z2QyVW5jbVVnWVhOemRXMXBibWNnZEdobElISmxjM1ZzZENCcGN5QmhiaUJoY25KaGVTQm9aWEpsTGx4dVhIUmNkQzh2SUhObFpTQnViM1JwWTJVZ2FXNGdZMjl1ZG1WeWMybHZibk11YW5NN0lHUnZiaWQwSUhWelpTQmliM2dnZEhsd1pYTmNibHgwWEhRdkx5QnBiaUJqYjI1MlpYSnphVzl1SUdaMWJtTjBhVzl1Y3k1Y2JseDBYSFJwWmlBb2RIbHdaVzltSUhKbGMzVnNkQ0E5UFQwZ0oyOWlhbVZqZENjcElIdGNibHgwWEhSY2RHWnZjaUFvZG1GeUlHeGxiaUE5SUhKbGMzVnNkQzVzWlc1bmRHZ3NJR2tnUFNBd095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JseDBYSFJjZEZ4MGNtVnpkV3gwVzJsZElEMGdUV0YwYUM1eWIzVnVaQ2h5WlhOMWJIUmJhVjBwTzF4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQnlaWE4xYkhRN1hHNWNkSDA3WEc1Y2JseDBMeThnY0hKbGMyVnlkbVVnTG1OdmJuWmxjbk5wYjI0Z2NISnZjR1Z5ZEhrZ2FXWWdkR2hsY21VZ2FYTWdiMjVsWEc1Y2RHbG1JQ2duWTI5dWRtVnljMmx2YmljZ2FXNGdabTRwSUh0Y2JseDBYSFIzY21Gd2NHVmtSbTR1WTI5dWRtVnljMmx2YmlBOUlHWnVMbU52Ym5abGNuTnBiMjQ3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnZDNKaGNIQmxaRVp1TzF4dWZWeHVYRzV0YjJSbGJITXVabTl5UldGamFDaG1kVzVqZEdsdmJpQW9abkp2YlUxdlpHVnNLU0I3WEc1Y2RHTnZiblpsY25SYlpuSnZiVTF2WkdWc1hTQTlJSHQ5TzF4dVhHNWNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoamIyNTJaWEowVzJaeWIyMU5iMlJsYkYwc0lDZGphR0Z1Ym1Wc2N5Y3NJSHQyWVd4MVpUb2dZMjl1ZG1WeWMybHZibk5iWm5KdmJVMXZaR1ZzWFM1amFHRnVibVZzYzMwcE8xeHVYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1kyOXVkbVZ5ZEZ0bWNtOXRUVzlrWld4ZExDQW5iR0ZpWld4ekp5d2dlM1poYkhWbE9pQmpiMjUyWlhKemFXOXVjMXRtY205dFRXOWtaV3hkTG14aFltVnNjMzBwTzF4dVhHNWNkSFpoY2lCeWIzVjBaWE1nUFNCeWIzVjBaU2htY205dFRXOWtaV3dwTzF4dVhIUjJZWElnY205MWRHVk5iMlJsYkhNZ1BTQlBZbXBsWTNRdWEyVjVjeWh5YjNWMFpYTXBPMXh1WEc1Y2RISnZkWFJsVFc5a1pXeHpMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLSFJ2VFc5a1pXd3BJSHRjYmx4MFhIUjJZWElnWm00Z1BTQnliM1YwWlhOYmRHOU5iMlJsYkYwN1hHNWNibHgwWEhSamIyNTJaWEowVzJaeWIyMU5iMlJsYkYxYmRHOU5iMlJsYkYwZ1BTQjNjbUZ3VW05MWJtUmxaQ2htYmlrN1hHNWNkRngwWTI5dWRtVnlkRnRtY205dFRXOWtaV3hkVzNSdlRXOWtaV3hkTG5KaGR5QTlJSGR5WVhCU1lYY29abTRwTzF4dVhIUjlLVHRjYm4wcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR052Ym5abGNuUTdYRzRpTENKMllYSWdZMjl1ZG1WeWMybHZibk1nUFNCeVpYRjFhWEpsS0NjdUwyTnZiblpsY25OcGIyNXpKeWs3WEc1Y2JpOHFYRzVjZEhSb2FYTWdablZ1WTNScGIyNGdjbTkxZEdWeklHRWdiVzlrWld3Z2RHOGdZV3hzSUc5MGFHVnlJRzF2WkdWc2N5NWNibHh1WEhSaGJHd2dablZ1WTNScGIyNXpJSFJvWVhRZ1lYSmxJSEp2ZFhSbFpDQm9ZWFpsSUdFZ2NISnZjR1Z5ZEhrZ1lDNWpiMjUyWlhKemFXOXVZQ0JoZEhSaFkyaGxaRnh1WEhSMGJ5QjBhR1VnY21WMGRYSnVaV1FnYzNsdWRHaGxkR2xqSUdaMWJtTjBhVzl1TGlCVWFHbHpJSEJ5YjNCbGNuUjVJR2x6SUdGdUlHRnljbUY1WEc1Y2RHOW1JSE4wY21sdVozTXNJR1ZoWTJnZ2QybDBhQ0IwYUdVZ2MzUmxjSE1nYVc0Z1ltVjBkMlZsYmlCMGFHVWdKMlp5YjIwbklHRnVaQ0FuZEc4blhHNWNkR052Ykc5eUlHMXZaR1ZzY3lBb2FXNWpiSFZ6YVhabEtTNWNibHh1WEhSamIyNTJaWEp6YVc5dWN5QjBhR0YwSUdGeVpTQnViM1FnY0c5emMybGliR1VnYzJsdGNHeDVJR0Z5WlNCdWIzUWdhVzVqYkhWa1pXUXVYRzRxTDF4dVhHNW1kVzVqZEdsdmJpQmlkV2xzWkVkeVlYQm9LQ2tnZTF4dVhIUjJZWElnWjNKaGNHZ2dQU0I3ZlR0Y2JseDBMeThnYUhSMGNITTZMeTlxYzNCbGNtWXVZMjl0TDI5aWFtVmpkQzFyWlhsekxYWnpMV1p2Y2kxcGJpMTNhWFJvTFdOc2IzTjFjbVV2TTF4dVhIUjJZWElnYlc5a1pXeHpJRDBnVDJKcVpXTjBMbXRsZVhNb1kyOXVkbVZ5YzJsdmJuTXBPMXh1WEc1Y2RHWnZjaUFvZG1GeUlHeGxiaUE5SUcxdlpHVnNjeTVzWlc1bmRHZ3NJR2tnUFNBd095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JseDBYSFJuY21Gd2FGdHRiMlJsYkhOYmFWMWRJRDBnZTF4dVhIUmNkRngwTHk4Z2FIUjBjRG92TDJwemNHVnlaaTVqYjIwdk1TMTJjeTFwYm1acGJtbDBlVnh1WEhSY2RGeDBMeThnYldsamNtOHRiM0IwTENCaWRYUWdkR2hwY3lCcGN5QnphVzF3YkdVdVhHNWNkRngwWEhSa2FYTjBZVzVqWlRvZ0xURXNYRzVjZEZ4MFhIUndZWEpsYm5RNklHNTFiR3hjYmx4MFhIUjlPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJR2R5WVhCb08xeHVmVnh1WEc0dkx5Qm9kSFJ3Y3pvdkwyVnVMbmRwYTJsd1pXUnBZUzV2Y21jdmQybHJhUzlDY21WaFpIUm9MV1pwY25OMFgzTmxZWEpqYUZ4dVpuVnVZM1JwYjI0Z1pHVnlhWFpsUWtaVEtHWnliMjFOYjJSbGJDa2dlMXh1WEhSMllYSWdaM0poY0dnZ1BTQmlkV2xzWkVkeVlYQm9LQ2s3WEc1Y2RIWmhjaUJ4ZFdWMVpTQTlJRnRtY205dFRXOWtaV3hkT3lBdkx5QjFibk5vYVdaMElDMCtJSEYxWlhWbElDMCtJSEJ2Y0Z4dVhHNWNkR2R5WVhCb1cyWnliMjFOYjJSbGJGMHVaR2x6ZEdGdVkyVWdQU0F3TzF4dVhHNWNkSGRvYVd4bElDaHhkV1YxWlM1c1pXNW5kR2dwSUh0Y2JseDBYSFIyWVhJZ1kzVnljbVZ1ZENBOUlIRjFaWFZsTG5CdmNDZ3BPMXh1WEhSY2RIWmhjaUJoWkdwaFkyVnVkSE1nUFNCUFltcGxZM1F1YTJWNWN5aGpiMjUyWlhKemFXOXVjMXRqZFhKeVpXNTBYU2s3WEc1Y2JseDBYSFJtYjNJZ0tIWmhjaUJzWlc0Z1BTQmhaR3BoWTJWdWRITXViR1Z1WjNSb0xDQnBJRDBnTURzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3WEc1Y2RGeDBYSFIyWVhJZ1lXUnFZV05sYm5RZ1BTQmhaR3BoWTJWdWRITmJhVjA3WEc1Y2RGeDBYSFIyWVhJZ2JtOWtaU0E5SUdkeVlYQm9XMkZrYW1GalpXNTBYVHRjYmx4dVhIUmNkRngwYVdZZ0tHNXZaR1V1WkdsemRHRnVZMlVnUFQwOUlDMHhLU0I3WEc1Y2RGeDBYSFJjZEc1dlpHVXVaR2x6ZEdGdVkyVWdQU0JuY21Gd2FGdGpkWEp5Wlc1MFhTNWthWE4wWVc1alpTQXJJREU3WEc1Y2RGeDBYSFJjZEc1dlpHVXVjR0Z5Wlc1MElEMGdZM1Z5Y21WdWREdGNibHgwWEhSY2RGeDBjWFZsZFdVdWRXNXphR2xtZENoaFpHcGhZMlZ1ZENrN1hHNWNkRngwWEhSOVhHNWNkRngwZlZ4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUdkeVlYQm9PMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnNhVzVyS0daeWIyMHNJSFJ2S1NCN1hHNWNkSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9ZWEpuY3lrZ2UxeHVYSFJjZEhKbGRIVnliaUIwYnlobWNtOXRLR0Z5WjNNcEtUdGNibHgwZlR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnZDNKaGNFTnZiblpsY25OcGIyNG9kRzlOYjJSbGJDd2daM0poY0dncElIdGNibHgwZG1GeUlIQmhkR2dnUFNCYlozSmhjR2hiZEc5TmIyUmxiRjB1Y0dGeVpXNTBMQ0IwYjAxdlpHVnNYVHRjYmx4MGRtRnlJR1p1SUQwZ1kyOXVkbVZ5YzJsdmJuTmJaM0poY0doYmRHOU5iMlJsYkYwdWNHRnlaVzUwWFZ0MGIwMXZaR1ZzWFR0Y2JseHVYSFIyWVhJZ1kzVnlJRDBnWjNKaGNHaGJkRzlOYjJSbGJGMHVjR0Z5Wlc1ME8xeHVYSFIzYUdsc1pTQW9aM0poY0doYlkzVnlYUzV3WVhKbGJuUXBJSHRjYmx4MFhIUndZWFJvTG5WdWMyaHBablFvWjNKaGNHaGJZM1Z5WFM1d1lYSmxiblFwTzF4dVhIUmNkR1p1SUQwZ2JHbHVheWhqYjI1MlpYSnphVzl1YzF0bmNtRndhRnRqZFhKZExuQmhjbVZ1ZEYxYlkzVnlYU3dnWm00cE8xeHVYSFJjZEdOMWNpQTlJR2R5WVhCb1cyTjFjbDB1Y0dGeVpXNTBPMXh1WEhSOVhHNWNibHgwWm00dVkyOXVkbVZ5YzJsdmJpQTlJSEJoZEdnN1hHNWNkSEpsZEhWeWJpQm1ianRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQW9abkp2YlUxdlpHVnNLU0I3WEc1Y2RIWmhjaUJuY21Gd2FDQTlJR1JsY21sMlpVSkdVeWhtY205dFRXOWtaV3dwTzF4dVhIUjJZWElnWTI5dWRtVnljMmx2YmlBOUlIdDlPMXh1WEc1Y2RIWmhjaUJ0YjJSbGJITWdQU0JQWW1wbFkzUXVhMlY1Y3lobmNtRndhQ2s3WEc1Y2RHWnZjaUFvZG1GeUlHeGxiaUE5SUcxdlpHVnNjeTVzWlc1bmRHZ3NJR2tnUFNBd095QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JseDBYSFIyWVhJZ2RHOU5iMlJsYkNBOUlHMXZaR1ZzYzF0cFhUdGNibHgwWEhSMllYSWdibTlrWlNBOUlHZHlZWEJvVzNSdlRXOWtaV3hkTzF4dVhHNWNkRngwYVdZZ0tHNXZaR1V1Y0dGeVpXNTBJRDA5UFNCdWRXeHNLU0I3WEc1Y2RGeDBYSFF2THlCdWJ5QndiM056YVdKc1pTQmpiMjUyWlhKemFXOXVMQ0J2Y2lCMGFHbHpJRzV2WkdVZ2FYTWdkR2hsSUhOdmRYSmpaU0J0YjJSbGJDNWNibHgwWEhSY2RHTnZiblJwYm5WbE8xeHVYSFJjZEgxY2JseHVYSFJjZEdOdmJuWmxjbk5wYjI1YmRHOU5iMlJsYkYwZ1BTQjNjbUZ3UTI5dWRtVnljMmx2YmloMGIwMXZaR1ZzTENCbmNtRndhQ2s3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnWTI5dWRtVnljMmx2Ymp0Y2JuMDdYRzVjYmlJc0lpZDFjMlVnYzNSeWFXTjBKMXh5WEc1Y2NseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdYSEpjYmx4MFhDSmhiR2xqWldKc2RXVmNJam9nV3pJME1Dd2dNalE0TENBeU5UVmRMRnh5WEc1Y2RGd2lZVzUwYVhGMVpYZG9hWFJsWENJNklGc3lOVEFzSURJek5Td2dNakUxWFN4Y2NseHVYSFJjSW1GeGRXRmNJam9nV3pBc0lESTFOU3dnTWpVMVhTeGNjbHh1WEhSY0ltRnhkV0Z0WVhKcGJtVmNJam9nV3pFeU55d2dNalUxTENBeU1USmRMRnh5WEc1Y2RGd2lZWHAxY21WY0lqb2dXekkwTUN3Z01qVTFMQ0F5TlRWZExGeHlYRzVjZEZ3aVltVnBaMlZjSWpvZ1d6STBOU3dnTWpRMUxDQXlNakJkTEZ4eVhHNWNkRndpWW1semNYVmxYQ0k2SUZzeU5UVXNJREl5T0N3Z01UazJYU3hjY2x4dVhIUmNJbUpzWVdOclhDSTZJRnN3TENBd0xDQXdYU3hjY2x4dVhIUmNJbUpzWVc1amFHVmtZV3h0YjI1a1hDSTZJRnN5TlRVc0lESXpOU3dnTWpBMVhTeGNjbHh1WEhSY0ltSnNkV1ZjSWpvZ1d6QXNJREFzSURJMU5WMHNYSEpjYmx4MFhDSmliSFZsZG1sdmJHVjBYQ0k2SUZzeE16Z3NJRFF6TENBeU1qWmRMRnh5WEc1Y2RGd2lZbkp2ZDI1Y0lqb2dXekUyTlN3Z05ESXNJRFF5WFN4Y2NseHVYSFJjSW1KMWNteDVkMjl2WkZ3aU9pQmJNakl5TENBeE9EUXNJREV6TlYwc1hISmNibHgwWENKallXUmxkR0pzZFdWY0lqb2dXemsxTENBeE5UZ3NJREUyTUYwc1hISmNibHgwWENKamFHRnlkSEpsZFhObFhDSTZJRnN4TWpjc0lESTFOU3dnTUYwc1hISmNibHgwWENKamFHOWpiMnhoZEdWY0lqb2dXekl4TUN3Z01UQTFMQ0F6TUYwc1hISmNibHgwWENKamIzSmhiRndpT2lCYk1qVTFMQ0F4TWpjc0lEZ3dYU3hjY2x4dVhIUmNJbU52Y201bWJHOTNaWEppYkhWbFhDSTZJRnN4TURBc0lERTBPU3dnTWpNM1hTeGNjbHh1WEhSY0ltTnZjbTV6YVd4clhDSTZJRnN5TlRVc0lESTBPQ3dnTWpJd1hTeGNjbHh1WEhSY0ltTnlhVzF6YjI1Y0lqb2dXekl5TUN3Z01qQXNJRFl3WFN4Y2NseHVYSFJjSW1ONVlXNWNJam9nV3pBc0lESTFOU3dnTWpVMVhTeGNjbHh1WEhSY0ltUmhjbXRpYkhWbFhDSTZJRnN3TENBd0xDQXhNemxkTEZ4eVhHNWNkRndpWkdGeWEyTjVZVzVjSWpvZ1d6QXNJREV6T1N3Z01UTTVYU3hjY2x4dVhIUmNJbVJoY210bmIyeGtaVzV5YjJSY0lqb2dXekU0TkN3Z01UTTBMQ0F4TVYwc1hISmNibHgwWENKa1lYSnJaM0poZVZ3aU9pQmJNVFk1TENBeE5qa3NJREUyT1Ywc1hISmNibHgwWENKa1lYSnJaM0psWlc1Y0lqb2dXekFzSURFd01Dd2dNRjBzWEhKY2JseDBYQ0prWVhKclozSmxlVndpT2lCYk1UWTVMQ0F4Tmprc0lERTJPVjBzWEhKY2JseDBYQ0prWVhKcmEyaGhhMmxjSWpvZ1d6RTRPU3dnTVRnekxDQXhNRGRkTEZ4eVhHNWNkRndpWkdGeWEyMWhaMlZ1ZEdGY0lqb2dXekV6T1N3Z01Dd2dNVE01WFN4Y2NseHVYSFJjSW1SaGNtdHZiR2wyWldkeVpXVnVYQ0k2SUZzNE5Td2dNVEEzTENBME4xMHNYSEpjYmx4MFhDSmtZWEpyYjNKaGJtZGxYQ0k2SUZzeU5UVXNJREUwTUN3Z01GMHNYSEpjYmx4MFhDSmtZWEpyYjNKamFHbGtYQ0k2SUZzeE5UTXNJRFV3TENBeU1EUmRMRnh5WEc1Y2RGd2laR0Z5YTNKbFpGd2lPaUJiTVRNNUxDQXdMQ0F3WFN4Y2NseHVYSFJjSW1SaGNtdHpZV3h0YjI1Y0lqb2dXekl6TXl3Z01UVXdMQ0F4TWpKZExGeHlYRzVjZEZ3aVpHRnlhM05sWVdkeVpXVnVYQ0k2SUZzeE5ETXNJREU0T0N3Z01UUXpYU3hjY2x4dVhIUmNJbVJoY210emJHRjBaV0pzZFdWY0lqb2dXemN5TENBMk1Td2dNVE01WFN4Y2NseHVYSFJjSW1SaGNtdHpiR0YwWldkeVlYbGNJam9nV3pRM0xDQTNPU3dnTnpsZExGeHlYRzVjZEZ3aVpHRnlhM05zWVhSbFozSmxlVndpT2lCYk5EY3NJRGM1TENBM09WMHNYSEpjYmx4MFhDSmtZWEpyZEhWeWNYVnZhWE5sWENJNklGc3dMQ0F5TURZc0lESXdPVjBzWEhKY2JseDBYQ0prWVhKcmRtbHZiR1YwWENJNklGc3hORGdzSURBc0lESXhNVjBzWEhKY2JseDBYQ0prWldWd2NHbHVhMXdpT2lCYk1qVTFMQ0F5TUN3Z01UUTNYU3hjY2x4dVhIUmNJbVJsWlhCemEzbGliSFZsWENJNklGc3dMQ0F4T1RFc0lESTFOVjBzWEhKY2JseDBYQ0prYVcxbmNtRjVYQ0k2SUZzeE1EVXNJREV3TlN3Z01UQTFYU3hjY2x4dVhIUmNJbVJwYldkeVpYbGNJam9nV3pFd05Td2dNVEExTENBeE1EVmRMRnh5WEc1Y2RGd2laRzlrWjJWeVlteDFaVndpT2lCYk16QXNJREUwTkN3Z01qVTFYU3hjY2x4dVhIUmNJbVpwY21WaWNtbGphMXdpT2lCYk1UYzRMQ0F6TkN3Z016UmRMRnh5WEc1Y2RGd2labXh2Y21Gc2QyaHBkR1ZjSWpvZ1d6STFOU3dnTWpVd0xDQXlOREJkTEZ4eVhHNWNkRndpWm05eVpYTjBaM0psWlc1Y0lqb2dXek0wTENBeE16a3NJRE0wWFN4Y2NseHVYSFJjSW1aMVkyaHphV0ZjSWpvZ1d6STFOU3dnTUN3Z01qVTFYU3hjY2x4dVhIUmNJbWRoYVc1elltOXliMXdpT2lCYk1qSXdMQ0F5TWpBc0lESXlNRjBzWEhKY2JseDBYQ0puYUc5emRIZG9hWFJsWENJNklGc3lORGdzSURJME9Dd2dNalUxWFN4Y2NseHVYSFJjSW1kdmJHUmNJam9nV3pJMU5Td2dNakUxTENBd1hTeGNjbHh1WEhSY0ltZHZiR1JsYm5KdlpGd2lPaUJiTWpFNExDQXhOalVzSURNeVhTeGNjbHh1WEhSY0ltZHlZWGxjSWpvZ1d6RXlPQ3dnTVRJNExDQXhNamhkTEZ4eVhHNWNkRndpWjNKbFpXNWNJam9nV3pBc0lERXlPQ3dnTUYwc1hISmNibHgwWENKbmNtVmxibmxsYkd4dmQxd2lPaUJiTVRjekxDQXlOVFVzSURRM1hTeGNjbHh1WEhSY0ltZHlaWGxjSWpvZ1d6RXlPQ3dnTVRJNExDQXhNamhkTEZ4eVhHNWNkRndpYUc5dVpYbGtaWGRjSWpvZ1d6STBNQ3dnTWpVMUxDQXlOREJkTEZ4eVhHNWNkRndpYUc5MGNHbHVhMXdpT2lCYk1qVTFMQ0F4TURVc0lERTRNRjBzWEhKY2JseDBYQ0pwYm1ScFlXNXlaV1JjSWpvZ1d6SXdOU3dnT1RJc0lEa3lYU3hjY2x4dVhIUmNJbWx1WkdsbmIxd2lPaUJiTnpVc0lEQXNJREV6TUYwc1hISmNibHgwWENKcGRtOXllVndpT2lCYk1qVTFMQ0F5TlRVc0lESTBNRjBzWEhKY2JseDBYQ0pyYUdGcmFWd2lPaUJiTWpRd0xDQXlNekFzSURFME1GMHNYSEpjYmx4MFhDSnNZWFpsYm1SbGNsd2lPaUJiTWpNd0xDQXlNekFzSURJMU1GMHNYSEpjYmx4MFhDSnNZWFpsYm1SbGNtSnNkWE5vWENJNklGc3lOVFVzSURJME1Dd2dNalExWFN4Y2NseHVYSFJjSW14aGQyNW5jbVZsYmx3aU9pQmJNVEkwTENBeU5USXNJREJkTEZ4eVhHNWNkRndpYkdWdGIyNWphR2xtWm05dVhDSTZJRnN5TlRVc0lESTFNQ3dnTWpBMVhTeGNjbHh1WEhSY0lteHBaMmgwWW14MVpWd2lPaUJiTVRjekxDQXlNVFlzSURJek1GMHNYSEpjYmx4MFhDSnNhV2RvZEdOdmNtRnNYQ0k2SUZzeU5EQXNJREV5T0N3Z01USTRYU3hjY2x4dVhIUmNJbXhwWjJoMFkzbGhibHdpT2lCYk1qSTBMQ0F5TlRVc0lESTFOVjBzWEhKY2JseDBYQ0pzYVdkb2RHZHZiR1JsYm5KdlpIbGxiR3h2ZDF3aU9pQmJNalV3TENBeU5UQXNJREl4TUYwc1hISmNibHgwWENKc2FXZG9kR2R5WVhsY0lqb2dXekl4TVN3Z01qRXhMQ0F5TVRGZExGeHlYRzVjZEZ3aWJHbG5hSFJuY21WbGJsd2lPaUJiTVRRMExDQXlNemdzSURFME5GMHNYSEpjYmx4MFhDSnNhV2RvZEdkeVpYbGNJam9nV3pJeE1Td2dNakV4TENBeU1URmRMRnh5WEc1Y2RGd2liR2xuYUhSd2FXNXJYQ0k2SUZzeU5UVXNJREU0TWl3Z01Ua3pYU3hjY2x4dVhIUmNJbXhwWjJoMGMyRnNiVzl1WENJNklGc3lOVFVzSURFMk1Dd2dNVEl5WFN4Y2NseHVYSFJjSW14cFoyaDBjMlZoWjNKbFpXNWNJam9nV3pNeUxDQXhOemdzSURFM01GMHNYSEpjYmx4MFhDSnNhV2RvZEhOcmVXSnNkV1ZjSWpvZ1d6RXpOU3dnTWpBMkxDQXlOVEJkTEZ4eVhHNWNkRndpYkdsbmFIUnpiR0YwWldkeVlYbGNJam9nV3pFeE9Td2dNVE0yTENBeE5UTmRMRnh5WEc1Y2RGd2liR2xuYUhSemJHRjBaV2R5WlhsY0lqb2dXekV4T1N3Z01UTTJMQ0F4TlROZExGeHlYRzVjZEZ3aWJHbG5hSFJ6ZEdWbGJHSnNkV1ZjSWpvZ1d6RTNOaXdnTVRrMkxDQXlNakpkTEZ4eVhHNWNkRndpYkdsbmFIUjVaV3hzYjNkY0lqb2dXekkxTlN3Z01qVTFMQ0F5TWpSZExGeHlYRzVjZEZ3aWJHbHRaVndpT2lCYk1Dd2dNalUxTENBd1hTeGNjbHh1WEhSY0lteHBiV1ZuY21WbGJsd2lPaUJiTlRBc0lESXdOU3dnTlRCZExGeHlYRzVjZEZ3aWJHbHVaVzVjSWpvZ1d6STFNQ3dnTWpRd0xDQXlNekJkTEZ4eVhHNWNkRndpYldGblpXNTBZVndpT2lCYk1qVTFMQ0F3TENBeU5UVmRMRnh5WEc1Y2RGd2liV0Z5YjI5dVhDSTZJRnN4TWpnc0lEQXNJREJkTEZ4eVhHNWNkRndpYldWa2FYVnRZWEYxWVcxaGNtbHVaVndpT2lCYk1UQXlMQ0F5TURVc0lERTNNRjBzWEhKY2JseDBYQ0p0WldScGRXMWliSFZsWENJNklGc3dMQ0F3TENBeU1EVmRMRnh5WEc1Y2RGd2liV1ZrYVhWdGIzSmphR2xrWENJNklGc3hPRFlzSURnMUxDQXlNVEZkTEZ4eVhHNWNkRndpYldWa2FYVnRjSFZ5Y0d4bFhDSTZJRnN4TkRjc0lERXhNaXdnTWpFNVhTeGNjbHh1WEhSY0ltMWxaR2wxYlhObFlXZHlaV1Z1WENJNklGczJNQ3dnTVRjNUxDQXhNVE5kTEZ4eVhHNWNkRndpYldWa2FYVnRjMnhoZEdWaWJIVmxYQ0k2SUZzeE1qTXNJREV3TkN3Z01qTTRYU3hjY2x4dVhIUmNJbTFsWkdsMWJYTndjbWx1WjJkeVpXVnVYQ0k2SUZzd0xDQXlOVEFzSURFMU5GMHNYSEpjYmx4MFhDSnRaV1JwZFcxMGRYSnhkVzlwYzJWY0lqb2dXemN5TENBeU1Ea3NJREl3TkYwc1hISmNibHgwWENKdFpXUnBkVzEyYVc5c1pYUnlaV1JjSWpvZ1d6RTVPU3dnTWpFc0lERXpNMTBzWEhKY2JseDBYQ0p0YVdSdWFXZG9kR0pzZFdWY0lqb2dXekkxTENBeU5Td2dNVEV5WFN4Y2NseHVYSFJjSW0xcGJuUmpjbVZoYlZ3aU9pQmJNalExTENBeU5UVXNJREkxTUYwc1hISmNibHgwWENKdGFYTjBlWEp2YzJWY0lqb2dXekkxTlN3Z01qSTRMQ0F5TWpWZExGeHlYRzVjZEZ3aWJXOWpZMkZ6YVc1Y0lqb2dXekkxTlN3Z01qSTRMQ0F4T0RGZExGeHlYRzVjZEZ3aWJtRjJZV3B2ZDJocGRHVmNJam9nV3pJMU5Td2dNakl5TENBeE56TmRMRnh5WEc1Y2RGd2libUYyZVZ3aU9pQmJNQ3dnTUN3Z01USTRYU3hjY2x4dVhIUmNJbTlzWkd4aFkyVmNJam9nV3pJMU15d2dNalExTENBeU16QmRMRnh5WEc1Y2RGd2liMnhwZG1WY0lqb2dXekV5T0N3Z01USTRMQ0F3WFN4Y2NseHVYSFJjSW05c2FYWmxaSEpoWWx3aU9pQmJNVEEzTENBeE5ESXNJRE0xWFN4Y2NseHVYSFJjSW05eVlXNW5aVndpT2lCYk1qVTFMQ0F4TmpVc0lEQmRMRnh5WEc1Y2RGd2liM0poYm1kbGNtVmtYQ0k2SUZzeU5UVXNJRFk1TENBd1hTeGNjbHh1WEhSY0ltOXlZMmhwWkZ3aU9pQmJNakU0TENBeE1USXNJREl4TkYwc1hISmNibHgwWENKd1lXeGxaMjlzWkdWdWNtOWtYQ0k2SUZzeU16Z3NJREl6TWl3Z01UY3dYU3hjY2x4dVhIUmNJbkJoYkdWbmNtVmxibHdpT2lCYk1UVXlMQ0F5TlRFc0lERTFNbDBzWEhKY2JseDBYQ0p3WVd4bGRIVnljWFZ2YVhObFhDSTZJRnN4TnpVc0lESXpPQ3dnTWpNNFhTeGNjbHh1WEhSY0luQmhiR1YyYVc5c1pYUnlaV1JjSWpvZ1d6SXhPU3dnTVRFeUxDQXhORGRkTEZ4eVhHNWNkRndpY0dGd1lYbGhkMmhwY0Z3aU9pQmJNalUxTENBeU16a3NJREl4TTEwc1hISmNibHgwWENKd1pXRmphSEIxWm1aY0lqb2dXekkxTlN3Z01qRTRMQ0F4T0RWZExGeHlYRzVjZEZ3aWNHVnlkVndpT2lCYk1qQTFMQ0F4TXpNc0lEWXpYU3hjY2x4dVhIUmNJbkJwYm10Y0lqb2dXekkxTlN3Z01Ua3lMQ0F5TUROZExGeHlYRzVjZEZ3aWNHeDFiVndpT2lCYk1qSXhMQ0F4TmpBc0lESXlNVjBzWEhKY2JseDBYQ0p3YjNka1pYSmliSFZsWENJNklGc3hOellzSURJeU5Dd2dNak13WFN4Y2NseHVYSFJjSW5CMWNuQnNaVndpT2lCYk1USTRMQ0F3TENBeE1qaGRMRnh5WEc1Y2RGd2ljbVZpWldOallYQjFjbkJzWlZ3aU9pQmJNVEF5TENBMU1Td2dNVFV6WFN4Y2NseHVYSFJjSW5KbFpGd2lPaUJiTWpVMUxDQXdMQ0F3WFN4Y2NseHVYSFJjSW5KdmMzbGljbTkzYmx3aU9pQmJNVGc0TENBeE5ETXNJREUwTTEwc1hISmNibHgwWENKeWIzbGhiR0pzZFdWY0lqb2dXelkxTENBeE1EVXNJREl5TlYwc1hISmNibHgwWENKellXUmtiR1ZpY205M2Jsd2lPaUJiTVRNNUxDQTJPU3dnTVRsZExGeHlYRzVjZEZ3aWMyRnNiVzl1WENJNklGc3lOVEFzSURFeU9Dd2dNVEUwWFN4Y2NseHVYSFJjSW5OaGJtUjVZbkp2ZDI1Y0lqb2dXekkwTkN3Z01UWTBMQ0E1Tmwwc1hISmNibHgwWENKelpXRm5jbVZsYmx3aU9pQmJORFlzSURFek9Td2dPRGRkTEZ4eVhHNWNkRndpYzJWaGMyaGxiR3hjSWpvZ1d6STFOU3dnTWpRMUxDQXlNemhkTEZ4eVhHNWNkRndpYzJsbGJtNWhYQ0k2SUZzeE5qQXNJRGd5TENBME5WMHNYSEpjYmx4MFhDSnphV3gyWlhKY0lqb2dXekU1TWl3Z01Ua3lMQ0F4T1RKZExGeHlYRzVjZEZ3aWMydDVZbXgxWlZ3aU9pQmJNVE0xTENBeU1EWXNJREl6TlYwc1hISmNibHgwWENKemJHRjBaV0pzZFdWY0lqb2dXekV3Tml3Z09UQXNJREl3TlYwc1hISmNibHgwWENKemJHRjBaV2R5WVhsY0lqb2dXekV4TWl3Z01USTRMQ0F4TkRSZExGeHlYRzVjZEZ3aWMyeGhkR1ZuY21WNVhDSTZJRnN4TVRJc0lERXlPQ3dnTVRRMFhTeGNjbHh1WEhSY0luTnViM2RjSWpvZ1d6STFOU3dnTWpVd0xDQXlOVEJkTEZ4eVhHNWNkRndpYzNCeWFXNW5aM0psWlc1Y0lqb2dXekFzSURJMU5Td2dNVEkzWFN4Y2NseHVYSFJjSW5OMFpXVnNZbXgxWlZ3aU9pQmJOekFzSURFek1Dd2dNVGd3WFN4Y2NseHVYSFJjSW5SaGJsd2lPaUJiTWpFd0xDQXhPREFzSURFME1GMHNYSEpjYmx4MFhDSjBaV0ZzWENJNklGc3dMQ0F4TWpnc0lERXlPRjBzWEhKY2JseDBYQ0owYUdsemRHeGxYQ0k2SUZzeU1UWXNJREU1TVN3Z01qRTJYU3hjY2x4dVhIUmNJblJ2YldGMGIxd2lPaUJiTWpVMUxDQTVPU3dnTnpGZExGeHlYRzVjZEZ3aWRIVnljWFZ2YVhObFhDSTZJRnMyTkN3Z01qSTBMQ0F5TURoZExGeHlYRzVjZEZ3aWRtbHZiR1YwWENJNklGc3lNemdzSURFek1Dd2dNak00WFN4Y2NseHVYSFJjSW5kb1pXRjBYQ0k2SUZzeU5EVXNJREl5TWl3Z01UYzVYU3hjY2x4dVhIUmNJbmRvYVhSbFhDSTZJRnN5TlRVc0lESTFOU3dnTWpVMVhTeGNjbHh1WEhSY0luZG9hWFJsYzIxdmEyVmNJam9nV3pJME5Td2dNalExTENBeU5EVmRMRnh5WEc1Y2RGd2llV1ZzYkc5M1hDSTZJRnN5TlRVc0lESTFOU3dnTUYwc1hISmNibHgwWENKNVpXeHNiM2RuY21WbGJsd2lPaUJiTVRVMExDQXlNRFVzSURVd1hWeHlYRzU5TzF4eVhHNGlMQ0l2S2lCTlNWUWdiR2xqWlc1elpTQXFMMXh1ZG1GeUlHTnZiRzl5VG1GdFpYTWdQU0J5WlhGMWFYSmxLQ2RqYjJ4dmNpMXVZVzFsSnlrN1hHNTJZWElnYzNkcGVucHNaU0E5SUhKbGNYVnBjbVVvSjNOcGJYQnNaUzF6ZDJsNmVteGxKeWs3WEc1Y2JuWmhjaUJ5WlhabGNuTmxUbUZ0WlhNZ1BTQjdmVHRjYmx4dUx5OGdZM0psWVhSbElHRWdiR2x6ZENCdlppQnlaWFpsY25ObElHTnZiRzl5SUc1aGJXVnpYRzVtYjNJZ0tIWmhjaUJ1WVcxbElHbHVJR052Ykc5eVRtRnRaWE1wSUh0Y2JseDBhV1lnS0dOdmJHOXlUbUZ0WlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYm1GdFpTa3BJSHRjYmx4MFhIUnlaWFpsY25ObFRtRnRaWE5iWTI5c2IzSk9ZVzFsYzF0dVlXMWxYVjBnUFNCdVlXMWxPMXh1WEhSOVhHNTlYRzVjYm5aaGNpQmpjeUE5SUcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnZTF4dVhIUjBiem9nZTMwc1hHNWNkR2RsZERvZ2UzMWNibjA3WEc1Y2JtTnpMbWRsZENBOUlHWjFibU4wYVc5dUlDaHpkSEpwYm1jcElIdGNibHgwZG1GeUlIQnlaV1pwZUNBOUlITjBjbWx1Wnk1emRXSnpkSEpwYm1jb01Dd2dNeWt1ZEc5TWIzZGxja05oYzJVb0tUdGNibHgwZG1GeUlIWmhiRHRjYmx4MGRtRnlJRzF2WkdWc08xeHVYSFJ6ZDJsMFkyZ2dLSEJ5WldacGVDa2dlMXh1WEhSY2RHTmhjMlVnSjJoemJDYzZYRzVjZEZ4MFhIUjJZV3dnUFNCamN5NW5aWFF1YUhOc0tITjBjbWx1WnlrN1hHNWNkRngwWEhSdGIyUmxiQ0E5SUNkb2Myd25PMXh1WEhSY2RGeDBZbkpsWVdzN1hHNWNkRngwWTJGelpTQW5hSGRpSnpwY2JseDBYSFJjZEhaaGJDQTlJR056TG1kbGRDNW9kMklvYzNSeWFXNW5LVHRjYmx4MFhIUmNkRzF2WkdWc0lEMGdKMmgzWWljN1hHNWNkRngwWEhSaWNtVmhhenRjYmx4MFhIUmtaV1poZFd4ME9seHVYSFJjZEZ4MGRtRnNJRDBnWTNNdVoyVjBMbkpuWWloemRISnBibWNwTzF4dVhIUmNkRngwYlc5a1pXd2dQU0FuY21kaUp6dGNibHgwWEhSY2RHSnlaV0ZyTzF4dVhIUjlYRzVjYmx4MGFXWWdLQ0YyWVd3cElIdGNibHgwWEhSeVpYUjFjbTRnYm5Wc2JEdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQjdiVzlrWld3NklHMXZaR1ZzTENCMllXeDFaVG9nZG1Gc2ZUdGNibjA3WEc1Y2JtTnpMbWRsZEM1eVoySWdQU0JtZFc1amRHbHZiaUFvYzNSeWFXNW5LU0I3WEc1Y2RHbG1JQ2doYzNSeWFXNW5LU0I3WEc1Y2RGeDBjbVYwZFhKdUlHNTFiR3c3WEc1Y2RIMWNibHh1WEhSMllYSWdZV0ppY2lBOUlDOWVJeWhiWVMxbU1DMDVYWHN6TERSOUtTUXZhVHRjYmx4MGRtRnlJR2hsZUNBOUlDOWVJeWhiWVMxbU1DMDVYWHMyZlNrb1cyRXRaakF0T1YxN01uMHBQeVF2YVR0Y2JseDBkbUZ5SUhKblltRWdQU0F2WG5KblltRS9YRndvWEZ4ektpaGJLeTFkUDF4Y1pDc3BYRnh6S2l4Y1hITXFLRnNyTFYwL1hGeGtLeWxjWEhNcUxGeGNjeW9vV3lzdFhUOWNYR1FyS1Z4Y2N5b29Qem9zWEZ4ektpaGJLeTFkUDF0Y1hHUmNYQzVkS3lsY1hITXFLVDljWENra0x6dGNibHgwZG1GeUlIQmxjaUE5SUM5ZWNtZGlZVDljWENoY1hITXFLRnNyTFYwL1cxeGNaRnhjTGwwcktWeGNKVnhjY3lvc1hGeHpLaWhiS3kxZFAxdGNYR1JjWEM1ZEt5bGNYQ1ZjWEhNcUxGeGNjeW9vV3lzdFhUOWJYRnhrWEZ3dVhTc3BYRndsWEZ4ektpZy9PaXhjWEhNcUtGc3JMVjAvVzF4Y1pGeGNMbDByS1Z4Y2N5b3BQMXhjS1NRdk8xeHVYSFIyWVhJZ2EyVjVkMjl5WkNBOUlDOG9YRnhFS3lrdk8xeHVYRzVjZEhaaGNpQnlaMklnUFNCYk1Dd2dNQ3dnTUN3Z01WMDdYRzVjZEhaaGNpQnRZWFJqYUR0Y2JseDBkbUZ5SUdrN1hHNWNkSFpoY2lCb1pYaEJiSEJvWVR0Y2JseHVYSFJwWmlBb2JXRjBZMmdnUFNCemRISnBibWN1YldGMFkyZ29hR1Y0S1NrZ2UxeHVYSFJjZEdobGVFRnNjR2hoSUQwZ2JXRjBZMmhiTWwwN1hHNWNkRngwYldGMFkyZ2dQU0J0WVhSamFGc3hYVHRjYmx4dVhIUmNkR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQXpPeUJwS3lzcElIdGNibHgwWEhSY2RDOHZJR2gwZEhCek9pOHZhbk53WlhKbUxtTnZiUzl6YkdsalpTMTJjeTF6ZFdKemRISXRkbk10YzNWaWMzUnlhVzVuTFcxbGRHaHZaSE10Ykc5dVp5MXpkSEpwYm1jdk1UbGNibHgwWEhSY2RIWmhjaUJwTWlBOUlHa2dLaUF5TzF4dVhIUmNkRngwY21kaVcybGRJRDBnY0dGeWMyVkpiblFvYldGMFkyZ3VjMnhwWTJVb2FUSXNJR2t5SUNzZ01pa3NJREUyS1R0Y2JseDBYSFI5WEc1Y2JseDBYSFJwWmlBb2FHVjRRV3h3YUdFcElIdGNibHgwWEhSY2RISm5ZbHN6WFNBOUlFMWhkR2d1Y205MWJtUW9LSEJoY25ObFNXNTBLR2hsZUVGc2NHaGhMQ0F4TmlrZ0x5QXlOVFVwSUNvZ01UQXdLU0F2SURFd01EdGNibHgwWEhSOVhHNWNkSDBnWld4elpTQnBaaUFvYldGMFkyZ2dQU0J6ZEhKcGJtY3ViV0YwWTJnb1lXSmljaWtwSUh0Y2JseDBYSFJ0WVhSamFDQTlJRzFoZEdOb1d6RmRPMXh1WEhSY2RHaGxlRUZzY0doaElEMGdiV0YwWTJoYk0xMDdYRzVjYmx4MFhIUm1iM0lnS0drZ1BTQXdPeUJwSUR3Z016c2dhU3NyS1NCN1hHNWNkRngwWEhSeVoySmJhVjBnUFNCd1lYSnpaVWx1ZENodFlYUmphRnRwWFNBcklHMWhkR05vVzJsZExDQXhOaWs3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0dobGVFRnNjR2hoS1NCN1hHNWNkRngwWEhSeVoySmJNMTBnUFNCTllYUm9Mbkp2ZFc1a0tDaHdZWEp6WlVsdWRDaG9aWGhCYkhCb1lTQXJJR2hsZUVGc2NHaGhMQ0F4TmlrZ0x5QXlOVFVwSUNvZ01UQXdLU0F2SURFd01EdGNibHgwWEhSOVhHNWNkSDBnWld4elpTQnBaaUFvYldGMFkyZ2dQU0J6ZEhKcGJtY3ViV0YwWTJnb2NtZGlZU2twSUh0Y2JseDBYSFJtYjNJZ0tHa2dQU0F3T3lCcElEd2dNenNnYVNzcktTQjdYRzVjZEZ4MFhIUnlaMkpiYVYwZ1BTQndZWEp6WlVsdWRDaHRZWFJqYUZ0cElDc2dNVjBzSURBcE8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaHRZWFJqYUZzMFhTa2dlMXh1WEhSY2RGeDBjbWRpV3pOZElEMGdjR0Z5YzJWR2JHOWhkQ2h0WVhSamFGczBYU2s3WEc1Y2RGeDBmVnh1WEhSOUlHVnNjMlVnYVdZZ0tHMWhkR05vSUQwZ2MzUnlhVzVuTG0xaGRHTm9LSEJsY2lrcElIdGNibHgwWEhSbWIzSWdLR2tnUFNBd095QnBJRHdnTXpzZ2FTc3JLU0I3WEc1Y2RGeDBYSFJ5WjJKYmFWMGdQU0JOWVhSb0xuSnZkVzVrS0hCaGNuTmxSbXh2WVhRb2JXRjBZMmhiYVNBcklERmRLU0FxSURJdU5UVXBPMXh1WEhSY2RIMWNibHh1WEhSY2RHbG1JQ2h0WVhSamFGczBYU2tnZTF4dVhIUmNkRngwY21kaVd6TmRJRDBnY0dGeWMyVkdiRzloZENodFlYUmphRnMwWFNrN1hHNWNkRngwZlZ4dVhIUjlJR1ZzYzJVZ2FXWWdLRzFoZEdOb0lEMGdjM1J5YVc1bkxtMWhkR05vS0d0bGVYZHZjbVFwS1NCN1hHNWNkRngwYVdZZ0tHMWhkR05vV3pGZElEMDlQU0FuZEhKaGJuTndZWEpsYm5RbktTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z1d6QXNJREFzSURBc0lEQmRPMXh1WEhSY2RIMWNibHh1WEhSY2RISm5ZaUE5SUdOdmJHOXlUbUZ0WlhOYmJXRjBZMmhiTVYxZE8xeHVYRzVjZEZ4MGFXWWdLQ0Z5WjJJcElIdGNibHgwWEhSY2RISmxkSFZ5YmlCdWRXeHNPMXh1WEhSY2RIMWNibHh1WEhSY2RISm5ZbHN6WFNBOUlERTdYRzVjYmx4MFhIUnlaWFIxY200Z2NtZGlPMXh1WEhSOUlHVnNjMlVnZTF4dVhIUmNkSEpsZEhWeWJpQnVkV3hzTzF4dVhIUjlYRzVjYmx4MFptOXlJQ2hwSUQwZ01Ec2dhU0E4SURNN0lHa3JLeWtnZTF4dVhIUmNkSEpuWWx0cFhTQTlJR05zWVcxd0tISm5ZbHRwWFN3Z01Dd2dNalUxS1R0Y2JseDBmVnh1WEhSeVoySmJNMTBnUFNCamJHRnRjQ2h5WjJKYk0xMHNJREFzSURFcE8xeHVYRzVjZEhKbGRIVnliaUJ5WjJJN1hHNTlPMXh1WEc1amN5NW5aWFF1YUhOc0lEMGdablZ1WTNScGIyNGdLSE4wY21sdVp5a2dlMXh1WEhScFppQW9JWE4wY21sdVp5a2dlMXh1WEhSY2RISmxkSFZ5YmlCdWRXeHNPMXh1WEhSOVhHNWNibHgwZG1GeUlHaHpiQ0E5SUM5ZWFITnNZVDljWENoY1hITXFLRnNyTFYwL0tEODZYRnhrS2x4Y0xpay9YRnhrS3lrb1B6cGtaV2NwUDF4Y2N5b3NYRnh6S2loYkt5MWRQMXRjWEdSY1hDNWRLeWtsWEZ4ektpeGNYSE1xS0ZzckxWMC9XMXhjWkZ4Y0xsMHJLU1ZjWEhNcUtEODZMRnhjY3lvb1d5c3RYVDliWEZ4a1hGd3VYU3NwWEZ4ektpay9YRndwSkM4N1hHNWNkSFpoY2lCdFlYUmphQ0E5SUhOMGNtbHVaeTV0WVhSamFDaG9jMndwTzF4dVhHNWNkR2xtSUNodFlYUmphQ2tnZTF4dVhIUmNkSFpoY2lCaGJIQm9ZU0E5SUhCaGNuTmxSbXh2WVhRb2JXRjBZMmhiTkYwcE8xeHVYSFJjZEhaaGNpQm9JRDBnS0hCaGNuTmxSbXh2WVhRb2JXRjBZMmhiTVYwcElDc2dNell3S1NBbElETTJNRHRjYmx4MFhIUjJZWElnY3lBOUlHTnNZVzF3S0hCaGNuTmxSbXh2WVhRb2JXRjBZMmhiTWwwcExDQXdMQ0F4TURBcE8xeHVYSFJjZEhaaGNpQnNJRDBnWTJ4aGJYQW9jR0Z5YzJWR2JHOWhkQ2h0WVhSamFGc3pYU2tzSURBc0lERXdNQ2s3WEc1Y2RGeDBkbUZ5SUdFZ1BTQmpiR0Z0Y0NocGMwNWhUaWhoYkhCb1lTa2dQeUF4SURvZ1lXeHdhR0VzSURBc0lERXBPMXh1WEc1Y2RGeDBjbVYwZFhKdUlGdG9MQ0J6TENCc0xDQmhYVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJ1ZFd4c08xeHVmVHRjYmx4dVkzTXVaMlYwTG1oM1lpQTlJR1oxYm1OMGFXOXVJQ2h6ZEhKcGJtY3BJSHRjYmx4MGFXWWdLQ0Z6ZEhKcGJtY3BJSHRjYmx4MFhIUnlaWFIxY200Z2JuVnNiRHRjYmx4MGZWeHVYRzVjZEhaaGNpQm9kMklnUFNBdlhtaDNZbHhjS0Z4Y2N5b29XeXN0WFQ5Y1hHUXFXMXhjTGwwL1hGeGtLeWtvUHpwa1pXY3BQMXhjY3lvc1hGeHpLaWhiS3kxZFAxdGNYR1JjWEM1ZEt5a2xYRnh6S2l4Y1hITXFLRnNyTFYwL1cxeGNaRnhjTGwwcktTVmNYSE1xS0Q4NkxGeGNjeW9vV3lzdFhUOWJYRnhrWEZ3dVhTc3BYRnh6S2lrL1hGd3BKQzg3WEc1Y2RIWmhjaUJ0WVhSamFDQTlJSE4wY21sdVp5NXRZWFJqYUNob2QySXBPMXh1WEc1Y2RHbG1JQ2h0WVhSamFDa2dlMXh1WEhSY2RIWmhjaUJoYkhCb1lTQTlJSEJoY25ObFJteHZZWFFvYldGMFkyaGJORjBwTzF4dVhIUmNkSFpoY2lCb0lEMGdLQ2h3WVhKelpVWnNiMkYwS0cxaGRHTm9XekZkS1NBbElETTJNQ2tnS3lBek5qQXBJQ1VnTXpZd08xeHVYSFJjZEhaaGNpQjNJRDBnWTJ4aGJYQW9jR0Z5YzJWR2JHOWhkQ2h0WVhSamFGc3lYU2tzSURBc0lERXdNQ2s3WEc1Y2RGeDBkbUZ5SUdJZ1BTQmpiR0Z0Y0Nod1lYSnpaVVpzYjJGMEtHMWhkR05vV3pOZEtTd2dNQ3dnTVRBd0tUdGNibHgwWEhSMllYSWdZU0E5SUdOc1lXMXdLR2x6VG1GT0tHRnNjR2hoS1NBL0lERWdPaUJoYkhCb1lTd2dNQ3dnTVNrN1hHNWNkRngwY21WMGRYSnVJRnRvTENCM0xDQmlMQ0JoWFR0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCdWRXeHNPMXh1ZlR0Y2JseHVZM011ZEc4dWFHVjRJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFIyWVhJZ2NtZGlZU0E5SUhOM2FYcDZiR1VvWVhKbmRXMWxiblJ6S1R0Y2JseHVYSFJ5WlhSMWNtNGdLRnh1WEhSY2RDY2pKeUFyWEc1Y2RGeDBhR1Y0Ukc5MVlteGxLSEpuWW1GYk1GMHBJQ3RjYmx4MFhIUm9aWGhFYjNWaWJHVW9jbWRpWVZzeFhTa2dLMXh1WEhSY2RHaGxlRVJ2ZFdKc1pTaHlaMkpoV3pKZEtTQXJYRzVjZEZ4MEtISm5ZbUZiTTEwZ1BDQXhYRzVjZEZ4MFhIUS9JQ2hvWlhoRWIzVmliR1VvVFdGMGFDNXliM1Z1WkNoeVoySmhXek5kSUNvZ01qVTFLU2twWEc1Y2RGeDBYSFE2SUNjbktWeHVYSFFwTzF4dWZUdGNibHh1WTNNdWRHOHVjbWRpSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSMllYSWdjbWRpWVNBOUlITjNhWHA2YkdVb1lYSm5kVzFsYm5SektUdGNibHh1WEhSeVpYUjFjbTRnY21kaVlTNXNaVzVuZEdnZ1BDQTBJSHg4SUhKblltRmJNMTBnUFQwOUlERmNibHgwWEhRL0lDZHlaMklvSnlBcklFMWhkR2d1Y205MWJtUW9jbWRpWVZzd1hTa2dLeUFuTENBbklDc2dUV0YwYUM1eWIzVnVaQ2h5WjJKaFd6RmRLU0FySUNjc0lDY2dLeUJOWVhSb0xuSnZkVzVrS0hKblltRmJNbDBwSUNzZ0p5a25YRzVjZEZ4ME9pQW5jbWRpWVNnbklDc2dUV0YwYUM1eWIzVnVaQ2h5WjJKaFd6QmRLU0FySUNjc0lDY2dLeUJOWVhSb0xuSnZkVzVrS0hKblltRmJNVjBwSUNzZ0p5d2dKeUFySUUxaGRHZ3VjbTkxYm1Rb2NtZGlZVnN5WFNrZ0t5QW5MQ0FuSUNzZ2NtZGlZVnN6WFNBcklDY3BKenRjYm4wN1hHNWNibU56TG5SdkxuSm5ZaTV3WlhKalpXNTBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFIyWVhJZ2NtZGlZU0E5SUhOM2FYcDZiR1VvWVhKbmRXMWxiblJ6S1R0Y2JseHVYSFIyWVhJZ2NpQTlJRTFoZEdndWNtOTFibVFvY21kaVlWc3dYU0F2SURJMU5TQXFJREV3TUNrN1hHNWNkSFpoY2lCbklEMGdUV0YwYUM1eWIzVnVaQ2h5WjJKaFd6RmRJQzhnTWpVMUlDb2dNVEF3S1R0Y2JseDBkbUZ5SUdJZ1BTQk5ZWFJvTG5KdmRXNWtLSEpuWW1GYk1sMGdMeUF5TlRVZ0tpQXhNREFwTzF4dVhHNWNkSEpsZEhWeWJpQnlaMkpoTG14bGJtZDBhQ0E4SURRZ2ZId2djbWRpWVZzelhTQTlQVDBnTVZ4dVhIUmNkRDhnSjNKbllpZ25JQ3NnY2lBcklDY2xMQ0FuSUNzZ1p5QXJJQ2NsTENBbklDc2dZaUFySUNjbEtTZGNibHgwWEhRNklDZHlaMkpoS0NjZ0t5QnlJQ3NnSnlVc0lDY2dLeUJuSUNzZ0p5VXNJQ2NnS3lCaUlDc2dKeVVzSUNjZ0t5QnlaMkpoV3pOZElDc2dKeWtuTzF4dWZUdGNibHh1WTNNdWRHOHVhSE5zSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSMllYSWdhSE5zWVNBOUlITjNhWHA2YkdVb1lYSm5kVzFsYm5SektUdGNibHgwY21WMGRYSnVJR2h6YkdFdWJHVnVaM1JvSUR3Z05DQjhmQ0JvYzJ4aFd6TmRJRDA5UFNBeFhHNWNkRngwUHlBbmFITnNLQ2NnS3lCb2MyeGhXekJkSUNzZ0p5d2dKeUFySUdoemJHRmJNVjBnS3lBbkpTd2dKeUFySUdoemJHRmJNbDBnS3lBbkpTa25YRzVjZEZ4ME9pQW5hSE5zWVNnbklDc2dhSE5zWVZzd1hTQXJJQ2NzSUNjZ0t5Qm9jMnhoV3pGZElDc2dKeVVzSUNjZ0t5Qm9jMnhoV3pKZElDc2dKeVVzSUNjZ0t5Qm9jMnhoV3pOZElDc2dKeWtuTzF4dWZUdGNibHh1THk4Z2FIZGlJR2x6SUdFZ1ltbDBJR1JwWm1abGNtVnVkQ0IwYUdGdUlISm5ZaWhoS1NBbUlHaHpiQ2hoS1NCemFXNWpaU0IwYUdWeVpTQnBjeUJ1YnlCaGJIQm9ZU0J6Y0dWamFXWnBZeUJ6ZVc1MFlYaGNiaTh2SUNob2QySWdhR0YyWlNCaGJIQm9ZU0J2Y0hScGIyNWhiQ0FtSURFZ2FYTWdaR1ZtWVhWc2RDQjJZV3gxWlNsY2JtTnpMblJ2TG1oM1lpQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBkbUZ5SUdoM1ltRWdQU0J6ZDJsNmVteGxLR0Z5WjNWdFpXNTBjeWs3WEc1Y2JseDBkbUZ5SUdFZ1BTQW5KenRjYmx4MGFXWWdLR2gzWW1FdWJHVnVaM1JvSUQ0OUlEUWdKaVlnYUhkaVlWc3pYU0FoUFQwZ01Ta2dlMXh1WEhSY2RHRWdQU0FuTENBbklDc2dhSGRpWVZzelhUdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQW5hSGRpS0NjZ0t5Qm9kMkpoV3pCZElDc2dKeXdnSnlBcklHaDNZbUZiTVYwZ0t5QW5KU3dnSnlBcklHaDNZbUZiTWwwZ0t5QW5KU2NnS3lCaElDc2dKeWtuTzF4dWZUdGNibHh1WTNNdWRHOHVhMlY1ZDI5eVpDQTlJR1oxYm1OMGFXOXVJQ2h5WjJJcElIdGNibHgwY21WMGRYSnVJSEpsZG1WeWMyVk9ZVzFsYzF0eVoySXVjMnhwWTJVb01Dd2dNeWxkTzF4dWZUdGNibHh1THk4Z2FHVnNjR1Z5YzF4dVpuVnVZM1JwYjI0Z1kyeGhiWEFvYm5WdExDQnRhVzRzSUcxaGVDa2dlMXh1WEhSeVpYUjFjbTRnVFdGMGFDNXRhVzRvVFdGMGFDNXRZWGdvYldsdUxDQnVkVzBwTENCdFlYZ3BPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm9aWGhFYjNWaWJHVW9iblZ0S1NCN1hHNWNkSFpoY2lCemRISWdQU0J1ZFcwdWRHOVRkSEpwYm1jb01UWXBMblJ2VlhCd1pYSkRZWE5sS0NrN1hHNWNkSEpsZEhWeWJpQW9jM1J5TG14bGJtZDBhQ0E4SURJcElEOGdKekFuSUNzZ2MzUnlJRG9nYzNSeU8xeHVmVnh1SWl3aUozVnpaU0J6ZEhKcFkzUW5YSEpjYmx4eVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlIdGNjbHh1WEhSY0ltRnNhV05sWW14MVpWd2lPaUJiTWpRd0xDQXlORGdzSURJMU5WMHNYSEpjYmx4MFhDSmhiblJwY1hWbGQyaHBkR1ZjSWpvZ1d6STFNQ3dnTWpNMUxDQXlNVFZkTEZ4eVhHNWNkRndpWVhGMVlWd2lPaUJiTUN3Z01qVTFMQ0F5TlRWZExGeHlYRzVjZEZ3aVlYRjFZVzFoY21sdVpWd2lPaUJiTVRJM0xDQXlOVFVzSURJeE1sMHNYSEpjYmx4MFhDSmhlblZ5WlZ3aU9pQmJNalF3TENBeU5UVXNJREkxTlYwc1hISmNibHgwWENKaVpXbG5aVndpT2lCYk1qUTFMQ0F5TkRVc0lESXlNRjBzWEhKY2JseDBYQ0ppYVhOeGRXVmNJam9nV3pJMU5Td2dNakk0TENBeE9UWmRMRnh5WEc1Y2RGd2lZbXhoWTJ0Y0lqb2dXekFzSURBc0lEQmRMRnh5WEc1Y2RGd2lZbXhoYm1Ob1pXUmhiRzF2Ym1SY0lqb2dXekkxTlN3Z01qTTFMQ0F5TURWZExGeHlYRzVjZEZ3aVlteDFaVndpT2lCYk1Dd2dNQ3dnTWpVMVhTeGNjbHh1WEhSY0ltSnNkV1YyYVc5c1pYUmNJam9nV3pFek9Dd2dORE1zSURJeU5sMHNYSEpjYmx4MFhDSmljbTkzYmx3aU9pQmJNVFkxTENBME1pd2dOREpkTEZ4eVhHNWNkRndpWW5WeWJIbDNiMjlrWENJNklGc3lNaklzSURFNE5Dd2dNVE0xWFN4Y2NseHVYSFJjSW1OaFpHVjBZbXgxWlZ3aU9pQmJPVFVzSURFMU9Dd2dNVFl3WFN4Y2NseHVYSFJjSW1Ob1lYSjBjbVYxYzJWY0lqb2dXekV5Tnl3Z01qVTFMQ0F3WFN4Y2NseHVYSFJjSW1Ob2IyTnZiR0YwWlZ3aU9pQmJNakV3TENBeE1EVXNJRE13WFN4Y2NseHVYSFJjSW1OdmNtRnNYQ0k2SUZzeU5UVXNJREV5Tnl3Z09EQmRMRnh5WEc1Y2RGd2lZMjl5Ym1ac2IzZGxjbUpzZFdWY0lqb2dXekV3TUN3Z01UUTVMQ0F5TXpkZExGeHlYRzVjZEZ3aVkyOXlibk5wYkd0Y0lqb2dXekkxTlN3Z01qUTRMQ0F5TWpCZExGeHlYRzVjZEZ3aVkzSnBiWE52Ymx3aU9pQmJNakl3TENBeU1Dd2dOakJkTEZ4eVhHNWNkRndpWTNsaGJsd2lPaUJiTUN3Z01qVTFMQ0F5TlRWZExGeHlYRzVjZEZ3aVpHRnlhMkpzZFdWY0lqb2dXekFzSURBc0lERXpPVjBzWEhKY2JseDBYQ0prWVhKclkzbGhibHdpT2lCYk1Dd2dNVE01TENBeE16bGRMRnh5WEc1Y2RGd2laR0Z5YTJkdmJHUmxibkp2WkZ3aU9pQmJNVGcwTENBeE16UXNJREV4WFN4Y2NseHVYSFJjSW1SaGNtdG5jbUY1WENJNklGc3hOamtzSURFMk9Td2dNVFk1WFN4Y2NseHVYSFJjSW1SaGNtdG5jbVZsYmx3aU9pQmJNQ3dnTVRBd0xDQXdYU3hjY2x4dVhIUmNJbVJoY210bmNtVjVYQ0k2SUZzeE5qa3NJREUyT1N3Z01UWTVYU3hjY2x4dVhIUmNJbVJoY210cmFHRnJhVndpT2lCYk1UZzVMQ0F4T0RNc0lERXdOMTBzWEhKY2JseDBYQ0prWVhKcmJXRm5aVzUwWVZ3aU9pQmJNVE01TENBd0xDQXhNemxkTEZ4eVhHNWNkRndpWkdGeWEyOXNhWFpsWjNKbFpXNWNJam9nV3pnMUxDQXhNRGNzSURRM1hTeGNjbHh1WEhSY0ltUmhjbXR2Y21GdVoyVmNJam9nV3pJMU5Td2dNVFF3TENBd1hTeGNjbHh1WEhSY0ltUmhjbXR2Y21Ob2FXUmNJam9nV3pFMU15d2dOVEFzSURJd05GMHNYSEpjYmx4MFhDSmtZWEpyY21Wa1hDSTZJRnN4TXprc0lEQXNJREJkTEZ4eVhHNWNkRndpWkdGeWEzTmhiRzF2Ymx3aU9pQmJNak16TENBeE5UQXNJREV5TWwwc1hISmNibHgwWENKa1lYSnJjMlZoWjNKbFpXNWNJam9nV3pFME15d2dNVGc0TENBeE5ETmRMRnh5WEc1Y2RGd2laR0Z5YTNOc1lYUmxZbXgxWlZ3aU9pQmJOeklzSURZeExDQXhNemxkTEZ4eVhHNWNkRndpWkdGeWEzTnNZWFJsWjNKaGVWd2lPaUJiTkRjc0lEYzVMQ0EzT1Ywc1hISmNibHgwWENKa1lYSnJjMnhoZEdWbmNtVjVYQ0k2SUZzME55d2dOemtzSURjNVhTeGNjbHh1WEhSY0ltUmhjbXQwZFhKeGRXOXBjMlZjSWpvZ1d6QXNJREl3Tml3Z01qQTVYU3hjY2x4dVhIUmNJbVJoY210MmFXOXNaWFJjSWpvZ1d6RTBPQ3dnTUN3Z01qRXhYU3hjY2x4dVhIUmNJbVJsWlhCd2FXNXJYQ0k2SUZzeU5UVXNJREl3TENBeE5EZGRMRnh5WEc1Y2RGd2laR1ZsY0hOcmVXSnNkV1ZjSWpvZ1d6QXNJREU1TVN3Z01qVTFYU3hjY2x4dVhIUmNJbVJwYldkeVlYbGNJam9nV3pFd05Td2dNVEExTENBeE1EVmRMRnh5WEc1Y2RGd2laR2x0WjNKbGVWd2lPaUJiTVRBMUxDQXhNRFVzSURFd05WMHNYSEpjYmx4MFhDSmtiMlJuWlhKaWJIVmxYQ0k2SUZzek1Dd2dNVFEwTENBeU5UVmRMRnh5WEc1Y2RGd2labWx5WldKeWFXTnJYQ0k2SUZzeE56Z3NJRE0wTENBek5GMHNYSEpjYmx4MFhDSm1iRzl5WVd4M2FHbDBaVndpT2lCYk1qVTFMQ0F5TlRBc0lESTBNRjBzWEhKY2JseDBYQ0ptYjNKbGMzUm5jbVZsYmx3aU9pQmJNelFzSURFek9Td2dNelJkTEZ4eVhHNWNkRndpWm5WamFITnBZVndpT2lCYk1qVTFMQ0F3TENBeU5UVmRMRnh5WEc1Y2RGd2laMkZwYm5OaWIzSnZYQ0k2SUZzeU1qQXNJREl5TUN3Z01qSXdYU3hjY2x4dVhIUmNJbWRvYjNOMGQyaHBkR1ZjSWpvZ1d6STBPQ3dnTWpRNExDQXlOVFZkTEZ4eVhHNWNkRndpWjI5c1pGd2lPaUJiTWpVMUxDQXlNVFVzSURCZExGeHlYRzVjZEZ3aVoyOXNaR1Z1Y205a1hDSTZJRnN5TVRnc0lERTJOU3dnTXpKZExGeHlYRzVjZEZ3aVozSmhlVndpT2lCYk1USTRMQ0F4TWpnc0lERXlPRjBzWEhKY2JseDBYQ0puY21WbGJsd2lPaUJiTUN3Z01USTRMQ0F3WFN4Y2NseHVYSFJjSW1keVpXVnVlV1ZzYkc5M1hDSTZJRnN4TnpNc0lESTFOU3dnTkRkZExGeHlYRzVjZEZ3aVozSmxlVndpT2lCYk1USTRMQ0F4TWpnc0lERXlPRjBzWEhKY2JseDBYQ0pvYjI1bGVXUmxkMXdpT2lCYk1qUXdMQ0F5TlRVc0lESTBNRjBzWEhKY2JseDBYQ0pvYjNSd2FXNXJYQ0k2SUZzeU5UVXNJREV3TlN3Z01UZ3dYU3hjY2x4dVhIUmNJbWx1WkdsaGJuSmxaRndpT2lCYk1qQTFMQ0E1TWl3Z09USmRMRnh5WEc1Y2RGd2lhVzVrYVdkdlhDSTZJRnMzTlN3Z01Dd2dNVE13WFN4Y2NseHVYSFJjSW1sMmIzSjVYQ0k2SUZzeU5UVXNJREkxTlN3Z01qUXdYU3hjY2x4dVhIUmNJbXRvWVd0cFhDSTZJRnN5TkRBc0lESXpNQ3dnTVRRd1hTeGNjbHh1WEhSY0lteGhkbVZ1WkdWeVhDSTZJRnN5TXpBc0lESXpNQ3dnTWpVd1hTeGNjbHh1WEhSY0lteGhkbVZ1WkdWeVlteDFjMmhjSWpvZ1d6STFOU3dnTWpRd0xDQXlORFZkTEZ4eVhHNWNkRndpYkdGM2JtZHlaV1Z1WENJNklGc3hNalFzSURJMU1pd2dNRjBzWEhKY2JseDBYQ0pzWlcxdmJtTm9hV1ptYjI1Y0lqb2dXekkxTlN3Z01qVXdMQ0F5TURWZExGeHlYRzVjZEZ3aWJHbG5hSFJpYkhWbFhDSTZJRnN4TnpNc0lESXhOaXdnTWpNd1hTeGNjbHh1WEhSY0lteHBaMmgwWTI5eVlXeGNJam9nV3pJME1Dd2dNVEk0TENBeE1qaGRMRnh5WEc1Y2RGd2liR2xuYUhSamVXRnVYQ0k2SUZzeU1qUXNJREkxTlN3Z01qVTFYU3hjY2x4dVhIUmNJbXhwWjJoMFoyOXNaR1Z1Y205a2VXVnNiRzkzWENJNklGc3lOVEFzSURJMU1Dd2dNakV3WFN4Y2NseHVYSFJjSW14cFoyaDBaM0poZVZ3aU9pQmJNakV4TENBeU1URXNJREl4TVYwc1hISmNibHgwWENKc2FXZG9kR2R5WldWdVhDSTZJRnN4TkRRc0lESXpPQ3dnTVRRMFhTeGNjbHh1WEhSY0lteHBaMmgwWjNKbGVWd2lPaUJiTWpFeExDQXlNVEVzSURJeE1WMHNYSEpjYmx4MFhDSnNhV2RvZEhCcGJtdGNJam9nV3pJMU5Td2dNVGd5TENBeE9UTmRMRnh5WEc1Y2RGd2liR2xuYUhSellXeHRiMjVjSWpvZ1d6STFOU3dnTVRZd0xDQXhNakpkTEZ4eVhHNWNkRndpYkdsbmFIUnpaV0ZuY21WbGJsd2lPaUJiTXpJc0lERTNPQ3dnTVRjd1hTeGNjbHh1WEhSY0lteHBaMmgwYzJ0NVlteDFaVndpT2lCYk1UTTFMQ0F5TURZc0lESTFNRjBzWEhKY2JseDBYQ0pzYVdkb2RITnNZWFJsWjNKaGVWd2lPaUJiTVRFNUxDQXhNellzSURFMU0xMHNYSEpjYmx4MFhDSnNhV2RvZEhOc1lYUmxaM0psZVZ3aU9pQmJNVEU1TENBeE16WXNJREUxTTEwc1hISmNibHgwWENKc2FXZG9kSE4wWldWc1lteDFaVndpT2lCYk1UYzJMQ0F4T1RZc0lESXlNbDBzWEhKY2JseDBYQ0pzYVdkb2RIbGxiR3h2ZDF3aU9pQmJNalUxTENBeU5UVXNJREl5TkYwc1hISmNibHgwWENKc2FXMWxYQ0k2SUZzd0xDQXlOVFVzSURCZExGeHlYRzVjZEZ3aWJHbHRaV2R5WldWdVhDSTZJRnMxTUN3Z01qQTFMQ0ExTUYwc1hISmNibHgwWENKc2FXNWxibHdpT2lCYk1qVXdMQ0F5TkRBc0lESXpNRjBzWEhKY2JseDBYQ0p0WVdkbGJuUmhYQ0k2SUZzeU5UVXNJREFzSURJMU5WMHNYSEpjYmx4MFhDSnRZWEp2YjI1Y0lqb2dXekV5T0N3Z01Dd2dNRjBzWEhKY2JseDBYQ0p0WldScGRXMWhjWFZoYldGeWFXNWxYQ0k2SUZzeE1ESXNJREl3TlN3Z01UY3dYU3hjY2x4dVhIUmNJbTFsWkdsMWJXSnNkV1ZjSWpvZ1d6QXNJREFzSURJd05WMHNYSEpjYmx4MFhDSnRaV1JwZFcxdmNtTm9hV1JjSWpvZ1d6RTROaXdnT0RVc0lESXhNVjBzWEhKY2JseDBYQ0p0WldScGRXMXdkWEp3YkdWY0lqb2dXekUwTnl3Z01URXlMQ0F5TVRsZExGeHlYRzVjZEZ3aWJXVmthWFZ0YzJWaFozSmxaVzVjSWpvZ1d6WXdMQ0F4Tnprc0lERXhNMTBzWEhKY2JseDBYQ0p0WldScGRXMXpiR0YwWldKc2RXVmNJam9nV3pFeU15d2dNVEEwTENBeU16aGRMRnh5WEc1Y2RGd2liV1ZrYVhWdGMzQnlhVzVuWjNKbFpXNWNJam9nV3pBc0lESTFNQ3dnTVRVMFhTeGNjbHh1WEhSY0ltMWxaR2wxYlhSMWNuRjFiMmx6WlZ3aU9pQmJOeklzSURJd09Td2dNakEwWFN4Y2NseHVYSFJjSW0xbFpHbDFiWFpwYjJ4bGRISmxaRndpT2lCYk1UazVMQ0F5TVN3Z01UTXpYU3hjY2x4dVhIUmNJbTFwWkc1cFoyaDBZbXgxWlZ3aU9pQmJNalVzSURJMUxDQXhNVEpkTEZ4eVhHNWNkRndpYldsdWRHTnlaV0Z0WENJNklGc3lORFVzSURJMU5Td2dNalV3WFN4Y2NseHVYSFJjSW0xcGMzUjVjbTl6WlZ3aU9pQmJNalUxTENBeU1qZ3NJREl5TlYwc1hISmNibHgwWENKdGIyTmpZWE5wYmx3aU9pQmJNalUxTENBeU1qZ3NJREU0TVYwc1hISmNibHgwWENKdVlYWmhhbTkzYUdsMFpWd2lPaUJiTWpVMUxDQXlNaklzSURFM00xMHNYSEpjYmx4MFhDSnVZWFo1WENJNklGc3dMQ0F3TENBeE1qaGRMRnh5WEc1Y2RGd2liMnhrYkdGalpWd2lPaUJiTWpVekxDQXlORFVzSURJek1GMHNYSEpjYmx4MFhDSnZiR2wyWlZ3aU9pQmJNVEk0TENBeE1qZ3NJREJkTEZ4eVhHNWNkRndpYjJ4cGRtVmtjbUZpWENJNklGc3hNRGNzSURFME1pd2dNelZkTEZ4eVhHNWNkRndpYjNKaGJtZGxYQ0k2SUZzeU5UVXNJREUyTlN3Z01GMHNYSEpjYmx4MFhDSnZjbUZ1WjJWeVpXUmNJam9nV3pJMU5Td2dOamtzSURCZExGeHlYRzVjZEZ3aWIzSmphR2xrWENJNklGc3lNVGdzSURFeE1pd2dNakUwWFN4Y2NseHVYSFJjSW5CaGJHVm5iMnhrWlc1eWIyUmNJam9nV3pJek9Dd2dNak15TENBeE56QmRMRnh5WEc1Y2RGd2ljR0ZzWldkeVpXVnVYQ0k2SUZzeE5USXNJREkxTVN3Z01UVXlYU3hjY2x4dVhIUmNJbkJoYkdWMGRYSnhkVzlwYzJWY0lqb2dXekUzTlN3Z01qTTRMQ0F5TXpoZExGeHlYRzVjZEZ3aWNHRnNaWFpwYjJ4bGRISmxaRndpT2lCYk1qRTVMQ0F4TVRJc0lERTBOMTBzWEhKY2JseDBYQ0p3WVhCaGVXRjNhR2x3WENJNklGc3lOVFVzSURJek9Td2dNakV6WFN4Y2NseHVYSFJjSW5CbFlXTm9jSFZtWmx3aU9pQmJNalUxTENBeU1UZ3NJREU0TlYwc1hISmNibHgwWENKd1pYSjFYQ0k2SUZzeU1EVXNJREV6TXl3Z05qTmRMRnh5WEc1Y2RGd2ljR2x1YTF3aU9pQmJNalUxTENBeE9USXNJREl3TTEwc1hISmNibHgwWENKd2JIVnRYQ0k2SUZzeU1qRXNJREUyTUN3Z01qSXhYU3hjY2x4dVhIUmNJbkJ2ZDJSbGNtSnNkV1ZjSWpvZ1d6RTNOaXdnTWpJMExDQXlNekJkTEZ4eVhHNWNkRndpY0hWeWNHeGxYQ0k2SUZzeE1qZ3NJREFzSURFeU9GMHNYSEpjYmx4MFhDSnlaV0psWTJOaGNIVnljR3hsWENJNklGc3hNRElzSURVeExDQXhOVE5kTEZ4eVhHNWNkRndpY21Wa1hDSTZJRnN5TlRVc0lEQXNJREJkTEZ4eVhHNWNkRndpY205emVXSnliM2R1WENJNklGc3hPRGdzSURFME15d2dNVFF6WFN4Y2NseHVYSFJjSW5KdmVXRnNZbXgxWlZ3aU9pQmJOalVzSURFd05Td2dNakkxWFN4Y2NseHVYSFJjSW5OaFpHUnNaV0p5YjNkdVhDSTZJRnN4TXprc0lEWTVMQ0F4T1Ywc1hISmNibHgwWENKellXeHRiMjVjSWpvZ1d6STFNQ3dnTVRJNExDQXhNVFJkTEZ4eVhHNWNkRndpYzJGdVpIbGljbTkzYmx3aU9pQmJNalEwTENBeE5qUXNJRGsyWFN4Y2NseHVYSFJjSW5ObFlXZHlaV1Z1WENJNklGczBOaXdnTVRNNUxDQTROMTBzWEhKY2JseDBYQ0p6WldGemFHVnNiRndpT2lCYk1qVTFMQ0F5TkRVc0lESXpPRjBzWEhKY2JseDBYQ0p6YVdWdWJtRmNJam9nV3pFMk1Dd2dPRElzSURRMVhTeGNjbHh1WEhSY0luTnBiSFpsY2x3aU9pQmJNVGt5TENBeE9USXNJREU1TWwwc1hISmNibHgwWENKemEzbGliSFZsWENJNklGc3hNelVzSURJd05pd2dNak0xWFN4Y2NseHVYSFJjSW5Oc1lYUmxZbXgxWlZ3aU9pQmJNVEEyTENBNU1Dd2dNakExWFN4Y2NseHVYSFJjSW5Oc1lYUmxaM0poZVZ3aU9pQmJNVEV5TENBeE1qZ3NJREUwTkYwc1hISmNibHgwWENKemJHRjBaV2R5WlhsY0lqb2dXekV4TWl3Z01USTRMQ0F4TkRSZExGeHlYRzVjZEZ3aWMyNXZkMXdpT2lCYk1qVTFMQ0F5TlRBc0lESTFNRjBzWEhKY2JseDBYQ0p6Y0hKcGJtZG5jbVZsYmx3aU9pQmJNQ3dnTWpVMUxDQXhNamRkTEZ4eVhHNWNkRndpYzNSbFpXeGliSFZsWENJNklGczNNQ3dnTVRNd0xDQXhPREJkTEZ4eVhHNWNkRndpZEdGdVhDSTZJRnN5TVRBc0lERTRNQ3dnTVRRd1hTeGNjbHh1WEhSY0luUmxZV3hjSWpvZ1d6QXNJREV5T0N3Z01USTRYU3hjY2x4dVhIUmNJblJvYVhOMGJHVmNJam9nV3pJeE5pd2dNVGt4TENBeU1UWmRMRnh5WEc1Y2RGd2lkRzl0WVhSdlhDSTZJRnN5TlRVc0lEazVMQ0EzTVYwc1hISmNibHgwWENKMGRYSnhkVzlwYzJWY0lqb2dXelkwTENBeU1qUXNJREl3T0Ywc1hISmNibHgwWENKMmFXOXNaWFJjSWpvZ1d6SXpPQ3dnTVRNd0xDQXlNemhkTEZ4eVhHNWNkRndpZDJobFlYUmNJam9nV3pJME5Td2dNakl5TENBeE56bGRMRnh5WEc1Y2RGd2lkMmhwZEdWY0lqb2dXekkxTlN3Z01qVTFMQ0F5TlRWZExGeHlYRzVjZEZ3aWQyaHBkR1Z6Ylc5clpWd2lPaUJiTWpRMUxDQXlORFVzSURJME5WMHNYSEpjYmx4MFhDSjVaV3hzYjNkY0lqb2dXekkxTlN3Z01qVTFMQ0F3WFN4Y2NseHVYSFJjSW5sbGJHeHZkMmR5WldWdVhDSTZJRnN4TlRRc0lESXdOU3dnTlRCZFhISmNibjA3WEhKY2JpSXNJaWQxYzJVZ2MzUnlhV04wSnp0Y2JseHVkbUZ5SUdOdmJHOXlVM1J5YVc1bklEMGdjbVZ4ZFdseVpTZ25ZMjlzYjNJdGMzUnlhVzVuSnlrN1hHNTJZWElnWTI5dWRtVnlkQ0E5SUhKbGNYVnBjbVVvSjJOdmJHOXlMV052Ym5abGNuUW5LVHRjYmx4dWRtRnlJRjl6YkdsalpTQTlJRnRkTG5Oc2FXTmxPMXh1WEc1MllYSWdjMnRwY0hCbFpFMXZaR1ZzY3lBOUlGdGNibHgwTHk4Z2RHOGdZbVVnYUc5dVpYTjBMQ0JKSUdSdmJpZDBJSEpsWVd4c2VTQm1aV1ZzSUd4cGEyVWdhMlY1ZDI5eVpDQmlaV3h2Ym1keklHbHVJR052Ykc5eUlHTnZiblpsY25Rc0lHSjFkQ0JsYUM1Y2JseDBKMnRsZVhkdmNtUW5MRnh1WEc1Y2RDOHZJR2R5WVhrZ1kyOXVabXhwWTNSeklIZHBkR2dnYzI5dFpTQnRaWFJvYjJRZ2JtRnRaWE1zSUdGdVpDQm9ZWE1nYVhSeklHOTNiaUJ0WlhSb2IyUWdaR1ZtYVc1bFpDNWNibHgwSjJkeVlYa25MRnh1WEc1Y2RDOHZJSE5vYjNWc1pHNG5kQ0J5WldGc2JIa2dZbVVnYVc0Z1kyOXNiM0l0WTI5dWRtVnlkQ0JsYVhSb1pYSXVMaTVjYmx4MEoyaGxlQ2RjYmwwN1hHNWNiblpoY2lCb1lYTm9aV1JOYjJSbGJFdGxlWE1nUFNCN2ZUdGNiazlpYW1WamRDNXJaWGx6S0dOdmJuWmxjblFwTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0cxdlpHVnNLU0I3WEc1Y2RHaGhjMmhsWkUxdlpHVnNTMlY1YzF0ZmMyeHBZMlV1WTJGc2JDaGpiMjUyWlhKMFcyMXZaR1ZzWFM1c1lXSmxiSE1wTG5OdmNuUW9LUzVxYjJsdUtDY25LVjBnUFNCdGIyUmxiRHRjYm4wcE8xeHVYRzUyWVhJZ2JHbHRhWFJsY25NZ1BTQjdmVHRjYmx4dVpuVnVZM1JwYjI0Z1EyOXNiM0lvYjJKcUxDQnRiMlJsYkNrZ2UxeHVYSFJwWmlBb0lTaDBhR2x6SUdsdWMzUmhibU5sYjJZZ1EyOXNiM0lwS1NCN1hHNWNkRngwY21WMGRYSnVJRzVsZHlCRGIyeHZjaWh2WW1vc0lHMXZaR1ZzS1R0Y2JseDBmVnh1WEc1Y2RHbG1JQ2h0YjJSbGJDQW1KaUJ0YjJSbGJDQnBiaUJ6YTJsd2NHVmtUVzlrWld4ektTQjdYRzVjZEZ4MGJXOWtaV3dnUFNCdWRXeHNPMXh1WEhSOVhHNWNibHgwYVdZZ0tHMXZaR1ZzSUNZbUlDRW9iVzlrWld3Z2FXNGdZMjl1ZG1WeWRDa3BJSHRjYmx4MFhIUjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oxVnVhMjV2ZDI0Z2JXOWtaV3c2SUNjZ0t5QnRiMlJsYkNrN1hHNWNkSDFjYmx4dVhIUjJZWElnYVR0Y2JseDBkbUZ5SUdOb1lXNXVaV3h6TzF4dVhHNWNkR2xtSUNoMGVYQmxiMllnYjJKcUlEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVYSFJjZEhSb2FYTXViVzlrWld3Z1BTQW5jbWRpSnp0Y2JseDBYSFIwYUdsekxtTnZiRzl5SUQwZ1d6QXNJREFzSURCZE8xeHVYSFJjZEhSb2FYTXVkbUZzY0doaElEMGdNVHRjYmx4MGZTQmxiSE5sSUdsbUlDaHZZbW9nYVc1emRHRnVZMlZ2WmlCRGIyeHZjaWtnZTF4dVhIUmNkSFJvYVhNdWJXOWtaV3dnUFNCdlltb3ViVzlrWld3N1hHNWNkRngwZEdocGN5NWpiMnh2Y2lBOUlHOWlhaTVqYjJ4dmNpNXpiR2xqWlNncE8xeHVYSFJjZEhSb2FYTXVkbUZzY0doaElEMGdiMkpxTG5aaGJIQm9ZVHRjYmx4MGZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2IySnFJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVYSFJjZEhaaGNpQnlaWE4xYkhRZ1BTQmpiMnh2Y2xOMGNtbHVaeTVuWlhRb2IySnFLVHRjYmx4MFhIUnBaaUFvY21WemRXeDBJRDA5UFNCdWRXeHNLU0I3WEc1Y2RGeDBYSFIwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMVZ1WVdKc1pTQjBieUJ3WVhKelpTQmpiMnh2Y2lCbWNtOXRJSE4wY21sdVp6b2dKeUFySUc5aWFpazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGRHaHBjeTV0YjJSbGJDQTlJSEpsYzNWc2RDNXRiMlJsYkR0Y2JseDBYSFJqYUdGdWJtVnNjeUE5SUdOdmJuWmxjblJiZEdocGN5NXRiMlJsYkYwdVkyaGhibTVsYkhNN1hHNWNkRngwZEdocGN5NWpiMnh2Y2lBOUlISmxjM1ZzZEM1MllXeDFaUzV6YkdsalpTZ3dMQ0JqYUdGdWJtVnNjeWs3WEc1Y2RGeDBkR2hwY3k1MllXeHdhR0VnUFNCMGVYQmxiMllnY21WemRXeDBMblpoYkhWbFcyTm9ZVzV1Wld4elhTQTlQVDBnSjI1MWJXSmxjaWNnUHlCeVpYTjFiSFF1ZG1Gc2RXVmJZMmhoYm01bGJITmRJRG9nTVR0Y2JseDBmU0JsYkhObElHbG1JQ2h2WW1vdWJHVnVaM1JvS1NCN1hHNWNkRngwZEdocGN5NXRiMlJsYkNBOUlHMXZaR1ZzSUh4OElDZHlaMkluTzF4dVhIUmNkR05vWVc1dVpXeHpJRDBnWTI5dWRtVnlkRnQwYUdsekxtMXZaR1ZzWFM1amFHRnVibVZzY3p0Y2JseDBYSFIyWVhJZ2JtVjNRWEp5SUQwZ1gzTnNhV05sTG1OaGJHd29iMkpxTENBd0xDQmphR0Z1Ym1Wc2N5azdYRzVjZEZ4MGRHaHBjeTVqYjJ4dmNpQTlJSHBsY205QmNuSmhlU2h1WlhkQmNuSXNJR05vWVc1dVpXeHpLVHRjYmx4MFhIUjBhR2x6TG5aaGJIQm9ZU0E5SUhSNWNHVnZaaUJ2WW1wYlkyaGhibTVsYkhOZElEMDlQU0FuYm5WdFltVnlKeUEvSUc5aWFsdGphR0Z1Ym1Wc2MxMGdPaUF4TzF4dVhIUjlJR1ZzYzJVZ2FXWWdLSFI1Y0dWdlppQnZZbW9nUFQwOUlDZHVkVzFpWlhJbktTQjdYRzVjZEZ4MEx5OGdkR2hwY3lCcGN5QmhiSGRoZVhNZ1VrZENJQzBnWTJGdUlHSmxJR052Ym5abGNuUmxaQ0JzWVhSbGNpQnZiaTVjYmx4MFhIUnZZbW9nSmowZ01IaEdSa1pHUmtZN1hHNWNkRngwZEdocGN5NXRiMlJsYkNBOUlDZHlaMkluTzF4dVhIUmNkSFJvYVhNdVkyOXNiM0lnUFNCYlhHNWNkRngwWEhRb2IySnFJRDQrSURFMktTQW1JREI0UmtZc1hHNWNkRngwWEhRb2IySnFJRDQrSURncElDWWdNSGhHUml4Y2JseDBYSFJjZEc5aWFpQW1JREI0UmtaY2JseDBYSFJkTzF4dVhIUmNkSFJvYVhNdWRtRnNjR2hoSUQwZ01UdGNibHgwZlNCbGJITmxJSHRjYmx4MFhIUjBhR2x6TG5aaGJIQm9ZU0E5SURFN1hHNWNibHgwWEhSMllYSWdhMlY1Y3lBOUlFOWlhbVZqZEM1clpYbHpLRzlpYWlrN1hHNWNkRngwYVdZZ0tDZGhiSEJvWVNjZ2FXNGdiMkpxS1NCN1hHNWNkRngwWEhSclpYbHpMbk53YkdsalpTaHJaWGx6TG1sdVpHVjRUMllvSjJGc2NHaGhKeWtzSURFcE8xeHVYSFJjZEZ4MGRHaHBjeTUyWVd4d2FHRWdQU0IwZVhCbGIyWWdiMkpxTG1Gc2NHaGhJRDA5UFNBbmJuVnRZbVZ5SnlBL0lHOWlhaTVoYkhCb1lTQTZJREE3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBkbUZ5SUdoaGMyaGxaRXRsZVhNZ1BTQnJaWGx6TG5OdmNuUW9LUzVxYjJsdUtDY25LVHRjYmx4MFhIUnBaaUFvSVNob1lYTm9aV1JMWlhseklHbHVJR2hoYzJobFpFMXZaR1ZzUzJWNWN5a3BJSHRjYmx4MFhIUmNkSFJvY205M0lHNWxkeUJGY25KdmNpZ25WVzVoWW14bElIUnZJSEJoY25ObElHTnZiRzl5SUdaeWIyMGdiMkpxWldOME9pQW5JQ3NnU2xOUFRpNXpkSEpwYm1kcFpua29iMkpxS1NrN1hHNWNkRngwZlZ4dVhHNWNkRngwZEdocGN5NXRiMlJsYkNBOUlHaGhjMmhsWkUxdlpHVnNTMlY1YzF0b1lYTm9aV1JMWlhselhUdGNibHh1WEhSY2RIWmhjaUJzWVdKbGJITWdQU0JqYjI1MlpYSjBXM1JvYVhNdWJXOWtaV3hkTG14aFltVnNjenRjYmx4MFhIUjJZWElnWTI5c2IzSWdQU0JiWFR0Y2JseDBYSFJtYjNJZ0tHa2dQU0F3T3lCcElEd2diR0ZpWld4ekxteGxibWQwYURzZ2FTc3JLU0I3WEc1Y2RGeDBYSFJqYjJ4dmNpNXdkWE5vS0c5aWFsdHNZV0psYkhOYmFWMWRLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUjBhR2x6TG1OdmJHOXlJRDBnZW1WeWIwRnljbUY1S0dOdmJHOXlLVHRjYmx4MGZWeHVYRzVjZEM4dklIQmxjbVp2Y20wZ2JHbHRhWFJoZEdsdmJuTWdLR05zWVcxd2FXNW5MQ0JsZEdNdUtWeHVYSFJwWmlBb2JHbHRhWFJsY25OYmRHaHBjeTV0YjJSbGJGMHBJSHRjYmx4MFhIUmphR0Z1Ym1Wc2N5QTlJR052Ym5abGNuUmJkR2hwY3k1dGIyUmxiRjB1WTJoaGJtNWxiSE03WEc1Y2RGeDBabTl5SUNocElEMGdNRHNnYVNBOElHTm9ZVzV1Wld4ek95QnBLeXNwSUh0Y2JseDBYSFJjZEhaaGNpQnNhVzFwZENBOUlHeHBiV2wwWlhKelczUm9hWE11Ylc5a1pXeGRXMmxkTzF4dVhIUmNkRngwYVdZZ0tHeHBiV2wwS1NCN1hHNWNkRngwWEhSY2RIUm9hWE11WTI5c2IzSmJhVjBnUFNCc2FXMXBkQ2gwYUdsekxtTnZiRzl5VzJsZEtUdGNibHgwWEhSY2RIMWNibHgwWEhSOVhHNWNkSDFjYmx4dVhIUjBhR2x6TG5aaGJIQm9ZU0E5SUUxaGRHZ3ViV0Y0S0RBc0lFMWhkR2d1YldsdUtERXNJSFJvYVhNdWRtRnNjR2hoS1NrN1hHNWNibHgwYVdZZ0tFOWlhbVZqZEM1bWNtVmxlbVVwSUh0Y2JseDBYSFJQWW1wbFkzUXVabkpsWlhwbEtIUm9hWE1wTzF4dVhIUjlYRzU5WEc1Y2JrTnZiRzl5TG5CeWIzUnZkSGx3WlNBOUlIdGNibHgwZEc5VGRISnBibWM2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhSeVpYUjFjbTRnZEdocGN5NXpkSEpwYm1jb0tUdGNibHgwZlN4Y2JseHVYSFIwYjBwVFQwNDZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFJ5WlhSMWNtNGdkR2hwYzF0MGFHbHpMbTF2WkdWc1hTZ3BPMXh1WEhSOUxGeHVYRzVjZEhOMGNtbHVaem9nWm5WdVkzUnBiMjRnS0hCc1lXTmxjeWtnZTF4dVhIUmNkSFpoY2lCelpXeG1JRDBnZEdocGN5NXRiMlJsYkNCcGJpQmpiMnh2Y2xOMGNtbHVaeTUwYnlBL0lIUm9hWE1nT2lCMGFHbHpMbkpuWWlncE8xeHVYSFJjZEhObGJHWWdQU0J6Wld4bUxuSnZkVzVrS0hSNWNHVnZaaUJ3YkdGalpYTWdQVDA5SUNkdWRXMWlaWEluSUQ4Z2NHeGhZMlZ6SURvZ01TazdYRzVjZEZ4MGRtRnlJR0Z5WjNNZ1BTQnpaV3htTG5aaGJIQm9ZU0E5UFQwZ01TQS9JSE5sYkdZdVkyOXNiM0lnT2lCelpXeG1MbU52Ykc5eUxtTnZibU5oZENoMGFHbHpMblpoYkhCb1lTazdYRzVjZEZ4MGNtVjBkWEp1SUdOdmJHOXlVM1J5YVc1bkxuUnZXM05sYkdZdWJXOWtaV3hkS0dGeVozTXBPMXh1WEhSOUxGeHVYRzVjZEhCbGNtTmxiblJUZEhKcGJtYzZJR1oxYm1OMGFXOXVJQ2h3YkdGalpYTXBJSHRjYmx4MFhIUjJZWElnYzJWc1ppQTlJSFJvYVhNdWNtZGlLQ2t1Y205MWJtUW9kSGx3Wlc5bUlIQnNZV05sY3lBOVBUMGdKMjUxYldKbGNpY2dQeUJ3YkdGalpYTWdPaUF4S1R0Y2JseDBYSFIyWVhJZ1lYSm5jeUE5SUhObGJHWXVkbUZzY0doaElEMDlQU0F4SUQ4Z2MyVnNaaTVqYjJ4dmNpQTZJSE5sYkdZdVkyOXNiM0l1WTI5dVkyRjBLSFJvYVhNdWRtRnNjR2hoS1R0Y2JseDBYSFJ5WlhSMWNtNGdZMjlzYjNKVGRISnBibWN1ZEc4dWNtZGlMbkJsY21ObGJuUW9ZWEpuY3lrN1hHNWNkSDBzWEc1Y2JseDBZWEp5WVhrNklHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUnlaWFIxY200Z2RHaHBjeTUyWVd4d2FHRWdQVDA5SURFZ1B5QjBhR2x6TG1OdmJHOXlMbk5zYVdObEtDa2dPaUIwYUdsekxtTnZiRzl5TG1OdmJtTmhkQ2gwYUdsekxuWmhiSEJvWVNrN1hHNWNkSDBzWEc1Y2JseDBiMkpxWldOME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBkbUZ5SUhKbGMzVnNkQ0E5SUh0OU8xeHVYSFJjZEhaaGNpQmphR0Z1Ym1Wc2N5QTlJR052Ym5abGNuUmJkR2hwY3k1dGIyUmxiRjB1WTJoaGJtNWxiSE03WEc1Y2RGeDBkbUZ5SUd4aFltVnNjeUE5SUdOdmJuWmxjblJiZEdocGN5NXRiMlJsYkYwdWJHRmlaV3h6TzF4dVhHNWNkRngwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCamFHRnVibVZzY3pzZ2FTc3JLU0I3WEc1Y2RGeDBYSFJ5WlhOMWJIUmJiR0ZpWld4elcybGRYU0E5SUhSb2FYTXVZMjlzYjNKYmFWMDdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLSFJvYVhNdWRtRnNjR2hoSUNFOVBTQXhLU0I3WEc1Y2RGeDBYSFJ5WlhOMWJIUXVZV3h3YUdFZ1BTQjBhR2x6TG5aaGJIQm9ZVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnlaWFIxY200Z2NtVnpkV3gwTzF4dVhIUjlMRnh1WEc1Y2RIVnVhWFJCY25KaGVUb2dablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkSFpoY2lCeVoySWdQU0IwYUdsekxuSm5ZaWdwTG1OdmJHOXlPMXh1WEhSY2RISm5ZbHN3WFNBdlBTQXlOVFU3WEc1Y2RGeDBjbWRpV3pGZElDODlJREkxTlR0Y2JseDBYSFJ5WjJKYk1sMGdMejBnTWpVMU8xeHVYRzVjZEZ4MGFXWWdLSFJvYVhNdWRtRnNjR2hoSUNFOVBTQXhLU0I3WEc1Y2RGeDBYSFJ5WjJJdWNIVnphQ2gwYUdsekxuWmhiSEJvWVNrN1hHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJSEpuWWp0Y2JseDBmU3hjYmx4dVhIUjFibWwwVDJKcVpXTjBPaUJtZFc1amRHbHZiaUFvS1NCN1hHNWNkRngwZG1GeUlISm5ZaUE5SUhSb2FYTXVjbWRpS0NrdWIySnFaV04wS0NrN1hHNWNkRngwY21kaUxuSWdMejBnTWpVMU8xeHVYSFJjZEhKbllpNW5JQzg5SURJMU5UdGNibHgwWEhSeVoySXVZaUF2UFNBeU5UVTdYRzVjYmx4MFhIUnBaaUFvZEdocGN5NTJZV3h3YUdFZ0lUMDlJREVwSUh0Y2JseDBYSFJjZEhKbllpNWhiSEJvWVNBOUlIUm9hWE11ZG1Gc2NHaGhPMXh1WEhSY2RIMWNibHh1WEhSY2RISmxkSFZ5YmlCeVoySTdYRzVjZEgwc1hHNWNibHgwY205MWJtUTZJR1oxYm1OMGFXOXVJQ2h3YkdGalpYTXBJSHRjYmx4MFhIUndiR0ZqWlhNZ1BTQk5ZWFJvTG0xaGVDaHdiR0ZqWlhNZ2ZId2dNQ3dnTUNrN1hHNWNkRngwY21WMGRYSnVJRzVsZHlCRGIyeHZjaWgwYUdsekxtTnZiRzl5TG0xaGNDaHliM1Z1WkZSdlVHeGhZMlVvY0d4aFkyVnpLU2t1WTI5dVkyRjBLSFJvYVhNdWRtRnNjR2hoS1N3Z2RHaHBjeTV0YjJSbGJDazdYRzVjZEgwc1hHNWNibHgwWVd4d2FHRTZJR1oxYm1OMGFXOXVJQ2gyWVd3cElIdGNibHgwWEhScFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaDBhR2x6TG1OdmJHOXlMbU52Ym1OaGRDaE5ZWFJvTG0xaGVDZ3dMQ0JOWVhSb0xtMXBiaWd4TENCMllXd3BLU2tzSUhSb2FYTXViVzlrWld3cE8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbGRIVnliaUIwYUdsekxuWmhiSEJvWVR0Y2JseDBmU3hjYmx4dVhIUXZMeUJ5WjJKY2JseDBjbVZrT2lCblpYUnpaWFFvSjNKbllpY3NJREFzSUcxaGVHWnVLREkxTlNrcExGeHVYSFJuY21WbGJqb2daMlYwYzJWMEtDZHlaMkluTENBeExDQnRZWGhtYmlneU5UVXBLU3hjYmx4MFlteDFaVG9nWjJWMGMyVjBLQ2R5WjJJbkxDQXlMQ0J0WVhobWJpZ3lOVFVwS1N4Y2JseHVYSFJvZFdVNklHZGxkSE5sZENoYkoyaHpiQ2NzSUNkb2MzWW5MQ0FuYUhOc0p5d2dKMmgzWWljc0lDZG9ZMmNuWFN3Z01Dd2dablZ1WTNScGIyNGdLSFpoYkNrZ2V5QnlaWFIxY200Z0tDaDJZV3dnSlNBek5qQXBJQ3NnTXpZd0tTQWxJRE0yTURzZ2ZTa3NJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMV3hwYm1VZ1luSmhZMlV0YzNSNWJHVmNibHh1WEhSellYUjFjbUYwYVc5dWJEb2daMlYwYzJWMEtDZG9jMnduTENBeExDQnRZWGhtYmlneE1EQXBLU3hjYmx4MGJHbG5hSFJ1WlhOek9pQm5aWFJ6WlhRb0oyaHpiQ2NzSURJc0lHMWhlR1p1S0RFd01Da3BMRnh1WEc1Y2RITmhkSFZ5WVhScGIyNTJPaUJuWlhSelpYUW9KMmh6ZGljc0lERXNJRzFoZUdadUtERXdNQ2twTEZ4dVhIUjJZV3gxWlRvZ1oyVjBjMlYwS0Nkb2MzWW5MQ0F5TENCdFlYaG1iaWd4TURBcEtTeGNibHh1WEhSamFISnZiV0U2SUdkbGRITmxkQ2duYUdObkp5d2dNU3dnYldGNFptNG9NVEF3S1Nrc1hHNWNkR2R5WVhrNklHZGxkSE5sZENnbmFHTm5KeXdnTWl3Z2JXRjRabTRvTVRBd0tTa3NYRzVjYmx4MGQyaHBkR1U2SUdkbGRITmxkQ2duYUhkaUp5d2dNU3dnYldGNFptNG9NVEF3S1Nrc1hHNWNkSGRpYkdGamF6b2daMlYwYzJWMEtDZG9kMkluTENBeUxDQnRZWGhtYmlneE1EQXBLU3hjYmx4dVhIUmplV0Z1T2lCblpYUnpaWFFvSjJOdGVXc25MQ0F3TENCdFlYaG1iaWd4TURBcEtTeGNibHgwYldGblpXNTBZVG9nWjJWMGMyVjBLQ2RqYlhsckp5d2dNU3dnYldGNFptNG9NVEF3S1Nrc1hHNWNkSGxsYkd4dmR6b2daMlYwYzJWMEtDZGpiWGxySnl3Z01pd2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RHSnNZV05yT2lCblpYUnpaWFFvSjJOdGVXc25MQ0F6TENCdFlYaG1iaWd4TURBcEtTeGNibHh1WEhSNE9pQm5aWFJ6WlhRb0ozaDVlaWNzSURBc0lHMWhlR1p1S0RFd01Da3BMRnh1WEhSNU9pQm5aWFJ6WlhRb0ozaDVlaWNzSURFc0lHMWhlR1p1S0RFd01Da3BMRnh1WEhSNk9pQm5aWFJ6WlhRb0ozaDVlaWNzSURJc0lHMWhlR1p1S0RFd01Da3BMRnh1WEc1Y2RHdzZJR2RsZEhObGRDZ25iR0ZpSnl3Z01Dd2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RHRTZJR2RsZEhObGRDZ25iR0ZpSnl3Z01Ta3NYRzVjZEdJNklHZGxkSE5sZENnbmJHRmlKeXdnTWlrc1hHNWNibHgwYTJWNWQyOXlaRG9nWm5WdVkzUnBiMjRnS0haaGJDa2dlMXh1WEhSY2RHbG1JQ2hoY21kMWJXVnVkSE11YkdWdVozUm9LU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdibVYzSUVOdmJHOXlLSFpoYkNrN1hHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJR052Ym5abGNuUmJkR2hwY3k1dGIyUmxiRjB1YTJWNWQyOXlaQ2gwYUdsekxtTnZiRzl5S1R0Y2JseDBmU3hjYmx4dVhIUm9aWGc2SUdaMWJtTjBhVzl1SUNoMllXd3BJSHRjYmx4MFhIUnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJRzVsZHlCRGIyeHZjaWgyWVd3cE8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbGRIVnliaUJqYjJ4dmNsTjBjbWx1Wnk1MGJ5NW9aWGdvZEdocGN5NXlaMklvS1M1eWIzVnVaQ2dwTG1OdmJHOXlLVHRjYmx4MGZTeGNibHh1WEhSeVoySk9kVzFpWlhJNklHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUjJZWElnY21kaUlEMGdkR2hwY3k1eVoySW9LUzVqYjJ4dmNqdGNibHgwWEhSeVpYUjFjbTRnS0NoeVoySmJNRjBnSmlBd2VFWkdLU0E4UENBeE5pa2dmQ0FvS0hKbllsc3hYU0FtSURCNFJrWXBJRHc4SURncElId2dLSEpuWWxzeVhTQW1JREI0UmtZcE8xeHVYSFI5TEZ4dVhHNWNkR3gxYldsdWIzTnBkSGs2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhRdkx5Qm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OVVVaTlYUTBGSE1qQXZJM0psYkdGMGFYWmxiSFZ0YVc1aGJtTmxaR1ZtWEc1Y2RGeDBkbUZ5SUhKbllpQTlJSFJvYVhNdWNtZGlLQ2t1WTI5c2IzSTdYRzVjYmx4MFhIUjJZWElnYkhWdElEMGdXMTA3WEc1Y2RGeDBabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0J5WjJJdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmx4MFhIUmNkSFpoY2lCamFHRnVJRDBnY21kaVcybGRJQzhnTWpVMU8xeHVYSFJjZEZ4MGJIVnRXMmxkSUQwZ0tHTm9ZVzRnUEQwZ01DNHdNemt5T0NrZ1B5QmphR0Z1SUM4Z01USXVPVElnT2lCTllYUm9MbkJ2ZHlnb0tHTm9ZVzRnS3lBd0xqQTFOU2tnTHlBeExqQTFOU2tzSURJdU5DazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SURBdU1qRXlOaUFxSUd4MWJWc3dYU0FySURBdU56RTFNaUFxSUd4MWJWc3hYU0FySURBdU1EY3lNaUFxSUd4MWJWc3lYVHRjYmx4MGZTeGNibHh1WEhSamIyNTBjbUZ6ZERvZ1puVnVZM1JwYjI0Z0tHTnZiRzl5TWlrZ2UxeHVYSFJjZEM4dklHaDBkSEE2THk5M2QzY3Vkek11YjNKbkwxUlNMMWREUVVjeU1DOGpZMjl1ZEhKaGMzUXRjbUYwYVc5a1pXWmNibHgwWEhSMllYSWdiSFZ0TVNBOUlIUm9hWE11YkhWdGFXNXZjMmwwZVNncE8xeHVYSFJjZEhaaGNpQnNkVzB5SUQwZ1kyOXNiM0l5TG14MWJXbHViM05wZEhrb0tUdGNibHh1WEhSY2RHbG1JQ2hzZFcweElENGdiSFZ0TWlrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUNoc2RXMHhJQ3NnTUM0d05Ta2dMeUFvYkhWdE1pQXJJREF1TURVcE8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbGRIVnliaUFvYkhWdE1pQXJJREF1TURVcElDOGdLR3gxYlRFZ0t5QXdMakExS1R0Y2JseDBmU3hjYmx4dVhIUnNaWFpsYkRvZ1puVnVZM1JwYjI0Z0tHTnZiRzl5TWlrZ2UxeHVYSFJjZEhaaGNpQmpiMjUwY21GemRGSmhkR2x2SUQwZ2RHaHBjeTVqYjI1MGNtRnpkQ2hqYjJ4dmNqSXBPMXh1WEhSY2RHbG1JQ2hqYjI1MGNtRnpkRkpoZEdsdklENDlJRGN1TVNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUNkQlFVRW5PMXh1WEhSY2RIMWNibHh1WEhSY2RISmxkSFZ5YmlBb1kyOXVkSEpoYzNSU1lYUnBieUErUFNBMExqVXBJRDhnSjBGQkp5QTZJQ2NuTzF4dVhIUjlMRnh1WEc1Y2RHbHpSR0Z5YXpvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RDOHZJRmxKVVNCbGNYVmhkR2x2YmlCbWNtOXRJR2gwZEhBNkx5OHlOSGRoZVhNdWIzSm5Mekl3TVRBdlkyRnNZM1ZzWVhScGJtY3RZMjlzYjNJdFkyOXVkSEpoYzNSY2JseDBYSFIyWVhJZ2NtZGlJRDBnZEdocGN5NXlaMklvS1M1amIyeHZjanRjYmx4MFhIUjJZWElnZVdseElEMGdLSEpuWWxzd1hTQXFJREk1T1NBcklISm5ZbHN4WFNBcUlEVTROeUFySUhKbllsc3lYU0FxSURFeE5Da2dMeUF4TURBd08xeHVYSFJjZEhKbGRIVnliaUI1YVhFZ1BDQXhNamc3WEc1Y2RIMHNYRzVjYmx4MGFYTk1hV2RvZERvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RISmxkSFZ5YmlBaGRHaHBjeTVwYzBSaGNtc29LVHRjYmx4MGZTeGNibHh1WEhSdVpXZGhkR1U2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhSMllYSWdjbWRpSUQwZ2RHaHBjeTV5WjJJb0tUdGNibHgwWEhSbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElETTdJR2tyS3lrZ2UxeHVYSFJjZEZ4MGNtZGlMbU52Ykc5eVcybGRJRDBnTWpVMUlDMGdjbWRpTG1OdmJHOXlXMmxkTzF4dVhIUmNkSDFjYmx4MFhIUnlaWFIxY200Z2NtZGlPMXh1WEhSOUxGeHVYRzVjZEd4cFoyaDBaVzQ2SUdaMWJtTjBhVzl1SUNoeVlYUnBieWtnZTF4dVhIUmNkSFpoY2lCb2Myd2dQU0IwYUdsekxtaHpiQ2dwTzF4dVhIUmNkR2h6YkM1amIyeHZjbHN5WFNBclBTQm9jMnd1WTI5c2IzSmJNbDBnS2lCeVlYUnBienRjYmx4MFhIUnlaWFIxY200Z2FITnNPMXh1WEhSOUxGeHVYRzVjZEdSaGNtdGxiam9nWm5WdVkzUnBiMjRnS0hKaGRHbHZLU0I3WEc1Y2RGeDBkbUZ5SUdoemJDQTlJSFJvYVhNdWFITnNLQ2s3WEc1Y2RGeDBhSE5zTG1OdmJHOXlXekpkSUMwOUlHaHpiQzVqYjJ4dmNsc3lYU0FxSUhKaGRHbHZPMXh1WEhSY2RISmxkSFZ5YmlCb2MydzdYRzVjZEgwc1hHNWNibHgwYzJGMGRYSmhkR1U2SUdaMWJtTjBhVzl1SUNoeVlYUnBieWtnZTF4dVhIUmNkSFpoY2lCb2Myd2dQU0IwYUdsekxtaHpiQ2dwTzF4dVhIUmNkR2h6YkM1amIyeHZjbHN4WFNBclBTQm9jMnd1WTI5c2IzSmJNVjBnS2lCeVlYUnBienRjYmx4MFhIUnlaWFIxY200Z2FITnNPMXh1WEhSOUxGeHVYRzVjZEdSbGMyRjBkWEpoZEdVNklHWjFibU4wYVc5dUlDaHlZWFJwYnlrZ2UxeHVYSFJjZEhaaGNpQm9jMndnUFNCMGFHbHpMbWh6YkNncE8xeHVYSFJjZEdoemJDNWpiMnh2Y2xzeFhTQXRQU0JvYzJ3dVkyOXNiM0piTVYwZ0tpQnlZWFJwYnp0Y2JseDBYSFJ5WlhSMWNtNGdhSE5zTzF4dVhIUjlMRnh1WEc1Y2RIZG9hWFJsYmpvZ1puVnVZM1JwYjI0Z0tISmhkR2x2S1NCN1hHNWNkRngwZG1GeUlHaDNZaUE5SUhSb2FYTXVhSGRpS0NrN1hHNWNkRngwYUhkaUxtTnZiRzl5V3pGZElDczlJR2gzWWk1amIyeHZjbHN4WFNBcUlISmhkR2x2TzF4dVhIUmNkSEpsZEhWeWJpQm9kMkk3WEc1Y2RIMHNYRzVjYmx4MFlteGhZMnRsYmpvZ1puVnVZM1JwYjI0Z0tISmhkR2x2S1NCN1hHNWNkRngwZG1GeUlHaDNZaUE5SUhSb2FYTXVhSGRpS0NrN1hHNWNkRngwYUhkaUxtTnZiRzl5V3pKZElDczlJR2gzWWk1amIyeHZjbHN5WFNBcUlISmhkR2x2TzF4dVhIUmNkSEpsZEhWeWJpQm9kMkk3WEc1Y2RIMHNYRzVjYmx4MFozSmhlWE5qWVd4bE9pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBMeThnYUhSMGNEb3ZMMlZ1TG5kcGEybHdaV1JwWVM1dmNtY3ZkMmxyYVM5SGNtRjVjMk5oYkdValEyOXVkbVZ5ZEdsdVoxOWpiMnh2Y2w5MGIxOW5jbUY1YzJOaGJHVmNibHgwWEhSMllYSWdjbWRpSUQwZ2RHaHBjeTV5WjJJb0tTNWpiMnh2Y2p0Y2JseDBYSFIyWVhJZ2RtRnNJRDBnY21kaVd6QmRJQ29nTUM0eklDc2djbWRpV3pGZElDb2dNQzQxT1NBcklISm5ZbHN5WFNBcUlEQXVNVEU3WEc1Y2RGeDBjbVYwZFhKdUlFTnZiRzl5TG5KbllpaDJZV3dzSUhaaGJDd2dkbUZzS1R0Y2JseDBmU3hjYmx4dVhIUm1ZV1JsT2lCbWRXNWpkR2x2YmlBb2NtRjBhVzhwSUh0Y2JseDBYSFJ5WlhSMWNtNGdkR2hwY3k1aGJIQm9ZU2gwYUdsekxuWmhiSEJvWVNBdElDaDBhR2x6TG5aaGJIQm9ZU0FxSUhKaGRHbHZLU2s3WEc1Y2RIMHNYRzVjYmx4MGIzQmhjWFZsY2pvZ1puVnVZM1JwYjI0Z0tISmhkR2x2S1NCN1hHNWNkRngwY21WMGRYSnVJSFJvYVhNdVlXeHdhR0VvZEdocGN5NTJZV3h3YUdFZ0t5QW9kR2hwY3k1MllXeHdhR0VnS2lCeVlYUnBieWtwTzF4dVhIUjlMRnh1WEc1Y2RISnZkR0YwWlRvZ1puVnVZM1JwYjI0Z0tHUmxaM0psWlhNcElIdGNibHgwWEhSMllYSWdhSE5zSUQwZ2RHaHBjeTVvYzJ3b0tUdGNibHgwWEhSMllYSWdhSFZsSUQwZ2FITnNMbU52Ykc5eVd6QmRPMXh1WEhSY2RHaDFaU0E5SUNob2RXVWdLeUJrWldkeVpXVnpLU0FsSURNMk1EdGNibHgwWEhSb2RXVWdQU0JvZFdVZ1BDQXdJRDhnTXpZd0lDc2dhSFZsSURvZ2FIVmxPMXh1WEhSY2RHaHpiQzVqYjJ4dmNsc3dYU0E5SUdoMVpUdGNibHgwWEhSeVpYUjFjbTRnYUhOc08xeHVYSFI5TEZ4dVhHNWNkRzFwZURvZ1puVnVZM1JwYjI0Z0tHMXBlR2x1UTI5c2IzSXNJSGRsYVdkb2RDa2dlMXh1WEhSY2RDOHZJSEJ2Y25SbFpDQm1jbTl0SUhOaGMzTWdhVzF3YkdWdFpXNTBZWFJwYjI0Z2FXNGdRMXh1WEhSY2RDOHZJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzl6WVhOekwyeHBZbk5oYzNNdllteHZZaTh3WlRaaU5HRXlPRFV3TURreU16VTJZV0V6WldObE1EZGpObUl5TkRsbU1ESXlNV05oWTJWa0wyWjFibU4wYVc5dWN5NWpjSEFqVERJd09WeHVYSFJjZEhaaGNpQmpiMnh2Y2pFZ1BTQnRhWGhwYmtOdmJHOXlMbkpuWWlncE8xeHVYSFJjZEhaaGNpQmpiMnh2Y2pJZ1BTQjBhR2x6TG5KbllpZ3BPMXh1WEhSY2RIWmhjaUJ3SUQwZ2QyVnBaMmgwSUQwOVBTQjFibVJsWm1sdVpXUWdQeUF3TGpVZ09pQjNaV2xuYUhRN1hHNWNibHgwWEhSMllYSWdkeUE5SURJZ0tpQndJQzBnTVR0Y2JseDBYSFIyWVhJZ1lTQTlJR052Ykc5eU1TNWhiSEJvWVNncElDMGdZMjlzYjNJeUxtRnNjR2hoS0NrN1hHNWNibHgwWEhSMllYSWdkekVnUFNBb0tDaDNJQ29nWVNBOVBUMGdMVEVwSUQ4Z2R5QTZJQ2gzSUNzZ1lTa2dMeUFvTVNBcklIY2dLaUJoS1NrZ0t5QXhLU0F2SURJdU1EdGNibHgwWEhSMllYSWdkeklnUFNBeElDMGdkekU3WEc1Y2JseDBYSFJ5WlhSMWNtNGdRMjlzYjNJdWNtZGlLRnh1WEhSY2RGeDBYSFIzTVNBcUlHTnZiRzl5TVM1eVpXUW9LU0FySUhjeUlDb2dZMjlzYjNJeUxuSmxaQ2dwTEZ4dVhIUmNkRngwWEhSM01TQXFJR052Ykc5eU1TNW5jbVZsYmlncElDc2dkeklnS2lCamIyeHZjakl1WjNKbFpXNG9LU3hjYmx4MFhIUmNkRngwZHpFZ0tpQmpiMnh2Y2pFdVlteDFaU2dwSUNzZ2R6SWdLaUJqYjJ4dmNqSXVZbXgxWlNncExGeHVYSFJjZEZ4MFhIUmpiMnh2Y2pFdVlXeHdhR0VvS1NBcUlIQWdLeUJqYjJ4dmNqSXVZV3h3YUdFb0tTQXFJQ2d4SUMwZ2NDa3BPMXh1WEhSOVhHNTlPMXh1WEc0dkx5QnRiMlJsYkNCamIyNTJaWEp6YVc5dUlHMWxkR2h2WkhNZ1lXNWtJSE4wWVhScFl5QmpiMjV6ZEhKMVkzUnZjbk5jYms5aWFtVmpkQzVyWlhsektHTnZiblpsY25RcExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHMXZaR1ZzS1NCN1hHNWNkR2xtSUNoemEybHdjR1ZrVFc5a1pXeHpMbWx1WkdWNFQyWW9iVzlrWld3cElDRTlQU0F0TVNrZ2UxeHVYSFJjZEhKbGRIVnlianRjYmx4MGZWeHVYRzVjZEhaaGNpQmphR0Z1Ym1Wc2N5QTlJR052Ym5abGNuUmJiVzlrWld4ZExtTm9ZVzV1Wld4ek8xeHVYRzVjZEM4dklHTnZiblpsY25OcGIyNGdiV1YwYUc5a2MxeHVYSFJEYjJ4dmNpNXdjbTkwYjNSNWNHVmJiVzlrWld4ZElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkR2xtSUNoMGFHbHpMbTF2WkdWc0lEMDlQU0J0YjJSbGJDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaDBhR2x6S1R0Y2JseDBYSFI5WEc1Y2JseDBYSFJwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUc1bGR5QkRiMnh2Y2loaGNtZDFiV1Z1ZEhNc0lHMXZaR1ZzS1R0Y2JseDBYSFI5WEc1Y2JseDBYSFIyWVhJZ2JtVjNRV3h3YUdFZ1BTQjBlWEJsYjJZZ1lYSm5kVzFsYm5SelcyTm9ZVzV1Wld4elhTQTlQVDBnSjI1MWJXSmxjaWNnUHlCamFHRnVibVZzY3lBNklIUm9hWE11ZG1Gc2NHaGhPMXh1WEhSY2RISmxkSFZ5YmlCdVpYY2dRMjlzYjNJb1lYTnpaWEowUVhKeVlYa29ZMjl1ZG1WeWRGdDBhR2x6TG0xdlpHVnNYVnR0YjJSbGJGMHVjbUYzS0hSb2FYTXVZMjlzYjNJcEtTNWpiMjVqWVhRb2JtVjNRV3h3YUdFcExDQnRiMlJsYkNrN1hHNWNkSDA3WEc1Y2JseDBMeThnSjNOMFlYUnBZeWNnWTI5dWMzUnlkV04wYVc5dUlHMWxkR2h2WkhOY2JseDBRMjlzYjNKYmJXOWtaV3hkSUQwZ1puVnVZM1JwYjI0Z0tHTnZiRzl5S1NCN1hHNWNkRngwYVdZZ0tIUjVjR1Z2WmlCamIyeHZjaUE5UFQwZ0oyNTFiV0psY2ljcElIdGNibHgwWEhSY2RHTnZiRzl5SUQwZ2VtVnliMEZ5Y21GNUtGOXpiR2xqWlM1allXeHNLR0Z5WjNWdFpXNTBjeWtzSUdOb1lXNXVaV3h6S1R0Y2JseDBYSFI5WEc1Y2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaGpiMnh2Y2l3Z2JXOWtaV3dwTzF4dVhIUjlPMXh1ZlNrN1hHNWNibVoxYm1OMGFXOXVJSEp2ZFc1a1ZHOG9iblZ0TENCd2JHRmpaWE1wSUh0Y2JseDBjbVYwZFhKdUlFNTFiV0psY2lodWRXMHVkRzlHYVhobFpDaHdiR0ZqWlhNcEtUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2NtOTFibVJVYjFCc1lXTmxLSEJzWVdObGN5a2dlMXh1WEhSeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0c1MWJTa2dlMXh1WEhSY2RISmxkSFZ5YmlCeWIzVnVaRlJ2S0c1MWJTd2djR3hoWTJWektUdGNibHgwZlR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWjJWMGMyVjBLRzF2WkdWc0xDQmphR0Z1Ym1Wc0xDQnRiMlJwWm1sbGNpa2dlMXh1WEhSdGIyUmxiQ0E5SUVGeWNtRjVMbWx6UVhKeVlYa29iVzlrWld3cElEOGdiVzlrWld3Z09pQmJiVzlrWld4ZE8xeHVYRzVjZEcxdlpHVnNMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLRzBwSUh0Y2JseDBYSFFvYkdsdGFYUmxjbk5iYlYwZ2ZId2dLR3hwYldsMFpYSnpXMjFkSUQwZ1cxMHBLVnRqYUdGdWJtVnNYU0E5SUcxdlpHbG1hV1Z5TzF4dVhIUjlLVHRjYmx4dVhIUnRiMlJsYkNBOUlHMXZaR1ZzV3pCZE8xeHVYRzVjZEhKbGRIVnliaUJtZFc1amRHbHZiaUFvZG1Gc0tTQjdYRzVjZEZ4MGRtRnlJSEpsYzNWc2REdGNibHh1WEhSY2RHbG1JQ2hoY21kMWJXVnVkSE11YkdWdVozUm9LU0I3WEc1Y2RGeDBYSFJwWmlBb2JXOWthV1pwWlhJcElIdGNibHgwWEhSY2RGeDBkbUZzSUQwZ2JXOWthV1pwWlhJb2RtRnNLVHRjYmx4MFhIUmNkSDFjYmx4dVhIUmNkRngwY21WemRXeDBJRDBnZEdocGMxdHRiMlJsYkYwb0tUdGNibHgwWEhSY2RISmxjM1ZzZEM1amIyeHZjbHRqYUdGdWJtVnNYU0E5SUhaaGJEdGNibHgwWEhSY2RISmxkSFZ5YmlCeVpYTjFiSFE3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVZ6ZFd4MElEMGdkR2hwYzF0dGIyUmxiRjBvS1M1amIyeHZjbHRqYUdGdWJtVnNYVHRjYmx4MFhIUnBaaUFvYlc5a2FXWnBaWElwSUh0Y2JseDBYSFJjZEhKbGMzVnNkQ0E5SUcxdlpHbG1hV1Z5S0hKbGMzVnNkQ2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlISmxjM1ZzZER0Y2JseDBmVHRjYm4xY2JseHVablZ1WTNScGIyNGdiV0Y0Wm00b2JXRjRLU0I3WEc1Y2RISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb2Rpa2dlMXh1WEhSY2RISmxkSFZ5YmlCTllYUm9MbTFoZUNnd0xDQk5ZWFJvTG0xcGJpaHRZWGdzSUhZcEtUdGNibHgwZlR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWVhOelpYSjBRWEp5WVhrb2RtRnNLU0I3WEc1Y2RISmxkSFZ5YmlCQmNuSmhlUzVwYzBGeWNtRjVLSFpoYkNrZ1B5QjJZV3dnT2lCYmRtRnNYVHRjYm4xY2JseHVablZ1WTNScGIyNGdlbVZ5YjBGeWNtRjVLR0Z5Y2l3Z2JHVnVaM1JvS1NCN1hHNWNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdWdVozUm9PeUJwS3lzcElIdGNibHgwWEhScFppQW9kSGx3Wlc5bUlHRnljbHRwWFNBaFBUMGdKMjUxYldKbGNpY3BJSHRjYmx4MFhIUmNkR0Z5Y2x0cFhTQTlJREE3WEc1Y2RGeDBmVnh1WEhSOVhHNWNibHgwY21WMGRYSnVJR0Z5Y2p0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JEYjJ4dmNqdGNiaUlzSW0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm5WdVkzUnBiMjRnYVhOQmNuSmhlV2x6YUNodlltb3BJSHRjYmx4MGFXWWdLQ0Z2WW1vZ2ZId2dkSGx3Wlc5bUlHOWlhaUE5UFQwZ0ozTjBjbWx1WnljcElIdGNibHgwWEhSeVpYUjFjbTRnWm1Gc2MyVTdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdiMkpxSUdsdWMzUmhibU5sYjJZZ1FYSnlZWGtnZkh3Z1FYSnlZWGt1YVhOQmNuSmhlU2h2WW1vcElIeDhYRzVjZEZ4MEtHOWlhaTVzWlc1bmRHZ2dQajBnTUNBbUppQW9iMkpxTG5Od2JHbGpaU0JwYm5OMFlXNWpaVzltSUVaMWJtTjBhVzl1SUh4OFhHNWNkRngwWEhRb1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVSR1Z6WTNKcGNIUnZjaWh2WW1vc0lDaHZZbW91YkdWdVozUm9JQzBnTVNrcElDWW1JRzlpYWk1amIyNXpkSEoxWTNSdmNpNXVZVzFsSUNFOVBTQW5VM1J5YVc1bkp5a3BLVHRjYm4wN1hHNGlMQ0luZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCcGMwRnljbUY1YVhOb0lEMGdjbVZ4ZFdseVpTZ25hWE10WVhKeVlYbHBjMmduS1R0Y2JseHVkbUZ5SUdOdmJtTmhkQ0E5SUVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVqYjI1allYUTdYRzUyWVhJZ2MyeHBZMlVnUFNCQmNuSmhlUzV3Y205MGIzUjVjR1V1YzJ4cFkyVTdYRzVjYm5aaGNpQnpkMmw2ZW14bElEMGdiVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQm1kVzVqZEdsdmJpQnpkMmw2ZW14bEtHRnlaM01wSUh0Y2JseDBkbUZ5SUhKbGMzVnNkSE1nUFNCYlhUdGNibHh1WEhSbWIzSWdLSFpoY2lCcElEMGdNQ3dnYkdWdUlEMGdZWEpuY3k1c1pXNW5kR2c3SUdrZ1BDQnNaVzQ3SUdrckt5a2dlMXh1WEhSY2RIWmhjaUJoY21jZ1BTQmhjbWR6VzJsZE8xeHVYRzVjZEZ4MGFXWWdLR2x6UVhKeVlYbHBjMmdvWVhKbktTa2dlMXh1WEhSY2RGeDBMeThnYUhSMGNEb3ZMMnB6Y0dWeVppNWpiMjB2YW1GMllYTmpjbWx3ZEMxaGNuSmhlUzFqYjI1allYUXRkbk10Y0hWemFDODVPRnh1WEhSY2RGeDBjbVZ6ZFd4MGN5QTlJR052Ym1OaGRDNWpZV3hzS0hKbGMzVnNkSE1zSUhOc2FXTmxMbU5oYkd3b1lYSm5LU2s3WEc1Y2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RISmxjM1ZzZEhNdWNIVnphQ2hoY21jcE8xeHVYSFJjZEgxY2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCeVpYTjFiSFJ6TzF4dWZUdGNibHh1YzNkcGVucHNaUzUzY21Gd0lEMGdablZ1WTNScGIyNGdLR1p1S1NCN1hHNWNkSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBjbVYwZFhKdUlHWnVLSE4zYVhwNmJHVW9ZWEpuZFcxbGJuUnpLU2s3WEc1Y2RIMDdYRzU5TzF4dUlpd2lhVzF3YjNKMElIc2dSR0YwWVV4cGMzUkpkR1Z0TENCRGFHRnVibVZzUm5WdVl5QjlJR1p5YjIwZ0p5NHVMMlJsWm1sdWFYUnBiMjV6SjF4dWFXMXdiM0owSUUxaGNtdGxjbk5NWVhsbGNpd2dlMXh1SUNCTllYSnJaWEp6VEdGNVpYSlBjSFJwYjI1ekxGeHVJQ0JOWVhKclpYSnpTR1ZoZEV4aGVXVnlUM0IwYVc5dWN5eGNibjBnWm5KdmJTQW5MaTR2YldGeWEyVnlMMDFoY210bGNuTk1ZWGxsY2lkY2JseHVhVzUwWlhKbVlXTmxJRVI1Ym1GdGFXTklaV0YwVEdGNVpYSlBjSFJwYjI1eklHVjRkR1Z1WkhNZ1RXRnlhMlZ5YzBobFlYUk1ZWGxsY2s5d2RHbHZibk1nZTF4dUlDQXZLaW9nNXBpdjVaQ201YjZxNTQ2djVwS3Q1cFMrSUNvdlhHNGdJR3h2YjNBNklHSnZiMnhsWVc1Y2JpQWdMeW9xSU9hWXIrV1FwdWlIcXVXS3FPYVNyZWFVdmlBcUwxeHVJQ0JoZFhSdk9pQmliMjlzWldGdVhHNGdJQzhxS2lEcGw3VHBtcFRtbDdicGw3UWdLaTljYmlBZ2FXNTBaWEoyWVd3NklHNTFiV0psY2x4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCRWVXNWhiV2xqU0dWaGRFeGhlV1Z5SUh0Y2JpQWdMeW9xSU9XOWsrV0pqZWFTcmVhVXZ1V0lzT2Vzck9XSG9PYXRwU0FxTDF4dUlDQndjbWwyWVhSbElHTjFjbkpsYm5SVGRHVndPaUJ1ZFcxaVpYSmNibHh1SUNCd2NtbDJZWFJsSUcxaGNEb2dUQzVOWVhCY2JpQWdjSEpwZG1GMFpTQmtlVzVoYldsalJHRjBZVXhwYzNRNklFUmhkR0ZNYVhOMFNYUmxiVnRkVzExY2JpQWdjSEpwZG1GMFpTQnZjSFJwYjI1ek9pQkVlVzVoYldsalNHVmhkRXhoZVdWeVQzQjBhVzl1YzF4dUlDQndjbWwyWVhSbElHTm9ZVzV1Wld4R2RXNWpPaUJEYUdGdWJtVnNSblZ1WTF4dUlDQndjbWwyWVhSbElHeGhlV1Z5T2lCTllYSnJaWEp6VEdGNVpYSmNiaUFnY0hKcGRtRjBaU0JwYzFCaGRYTmxPaUJpYjI5c1pXRnVYRzRnSUdOdmJuTjBjblZqZEc5eUtGeHVJQ0FnSUcxaGNEb2dUQzVOWVhBc1hHNGdJQ0FnWkhsdVlXMXBZMFJoZEdGTWFYTjBPaUJFWVhSaFRHbHpkRWwwWlcxYlhWdGRMRnh1SUNBZ0lHOXdkR2x2Ym5NNklFUjVibUZ0YVdOSVpXRjBUR0Y1WlhKUGNIUnBiMjV6TEZ4dUlDQWdJR05vWVc1dVpXeEdkVzVqT2lCRGFHRnVibVZzUm5WdVkxeHVJQ0FwSUh0Y2JpQWdJQ0IwYUdsekxtMWhjQ0E5SUcxaGNGeHVJQ0FnSUhSb2FYTXVaSGx1WVcxcFkwUmhkR0ZNYVhOMElEMGdaSGx1WVcxcFkwUmhkR0ZNYVhOMFhHNGdJQ0FnZEdocGN5NXZjSFJwYjI1eklEMGdiM0IwYVc5dWMxeHVJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1nUFNCamFHRnVibVZzUm5WdVkxeHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRGTjBaWEFnUFNBd1hHNGdJQ0FnZEdocGN5NXBjMUJoZFhObElEMGdkSEoxWlZ4dUlDQjlYRzRnSUhCMVlteHBZeUJ5WlhOMFlYSjBLQ2tnZTF4dUlDQWdJSFJvYVhNdWFYTlFZWFZ6WlNBOUlHWmhiSE5sWEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwVTNSbGNDQTlJREJjYmlBZ0lDQjBhR2x6TG1kdmRHOVRkR1Z3S0hSb2FYTXVZM1Z5Y21WdWRGTjBaWEFwWEc0Z0lDQWdkR2hwY3k1emRHRnlkQ2dwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSE4wWVhKMEtDa2dlMXh1SUNBZ0lIUm9hWE11YVhOUVlYVnpaU0E5SUdaaGJITmxYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtOXdkR2x2Ym5NdVlYVjBieWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVJQ0FnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnZTF4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11YVhOUVlYVnpaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJQzhxS2lEbWtxM21sTDdscm96bXI1VWdLaTljYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbU4xY25KbGJuUlRkR1Z3SUQ0OUlIUm9hWE11WkhsdVlXMXBZMFJoZEdGTWFYTjBMbXhsYm1kMGFDQXRJREVwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxtOXdkR2x2Ym5NdWJHOXZjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIUm9hWE11Y21WemRHRnlkQ2dwWEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTjFjbkpsYm5SVGRHVndLeXRjYmlBZ0lDQWdJQ0FnZEdocGN5NW5iM1J2VTNSbGNDaDBhR2x6TG1OMWNuSmxiblJUZEdWd0tWeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBLQ2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMQ0IwYUdsekxtOXdkR2x2Ym5NdWFXNTBaWEoyWVd3cFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhCaGRYTmxLQ2tnZTF4dUlDQWdJSFJvYVhNdWFYTlFZWFZ6WlNBOUlIUnlkV1ZjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjSEpsZGlncElIdGNiaUFnSUNCMGFHbHpMbU4xY25KbGJuUlRkR1Z3TFMxY2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5SVGRHVndJRDFjYmlBZ0lDQWdJQ2gwYUdsekxtTjFjbkpsYm5SVGRHVndJQ3NnZEdocGN5NWtlVzVoYldsalJHRjBZVXhwYzNRdWJHVnVaM1JvS1NBbFhHNGdJQ0FnSUNCMGFHbHpMbVI1Ym1GdGFXTkVZWFJoVEdsemRDNXNaVzVuZEdoY2JpQWdJQ0IwYUdsekxtZHZkRzlUZEdWd0tIUm9hWE11WTNWeWNtVnVkRk4wWlhBcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUc1bGVIUW9LU0I3WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwVTNSbGNDc3JYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBVM1JsY0NBOUlIUm9hWE11WTNWeWNtVnVkRk4wWlhBZ0pTQjBhR2x6TG1SNWJtRnRhV05FWVhSaFRHbHpkQzVzWlc1bmRHaGNiaUFnSUNCMGFHbHpMbWR2ZEc5VGRHVndLSFJvYVhNdVkzVnljbVZ1ZEZOMFpYQXBYRzRnSUgxY2JpQWdjSFZpYkdsaklHZHZkRzlUZEdWd0tITjBaWEE2SUc1MWJXSmxjaWtnZTF4dUlDQWdJR2xtSUNoemRHVndJRHdnTUNCOGZDQnpkR1Z3SUQ0OUlIUm9hWE11WkhsdVlXMXBZMFJoZEdGTWFYTjBMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtHQm5iM1J2VTNSbGNDZ2tlM04wWlhCOUtUb2djM1JsY0NCcGN5QnZkWFFnYjJZZ2FXNWtaWGdnWUNsY2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1c1lYbGxjaTV6WlhSRVlYUmhLSFJvYVhNdVpIbHVZVzFwWTBSaGRHRk1hWE4wVzNOMFpYQmRLVnh1SUNBZ0lIUm9hWE11YkdGNVpYSXVaSEpoZHlncFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdSeVlYY29iM0IwYVc5dWN6ODZJRVI1Ym1GdGFXTklaV0YwVEdGNVpYSlBjSFJwYjI1ektTQjdYRzRnSUNBZ2RHaHBjeTVwYm1sMFQzQjBhVzl1Y3lodmNIUnBiMjV6S1Z4dUlDQWdJSFJvYVhNdWFXNXBkRXhoZVdWeUtDbGNiaUFnSUNCMGFHbHpMbXhoZVdWeUxtUnlZWGNvS1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6WEc0Z0lIMWNiaUFnY0hWaWJHbGpJR1pwZEVKdmRXNWtjeWdwSUh0Y2JpQWdJQ0IwYUdsekxteGhlV1Z5TG1acGRFSnZkVzVrY3lncFhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCcGJtbDBUM0IwYVc5dWN5aHZjSFJwYjI1elB6b2dSSGx1WVcxcFkwaGxZWFJNWVhsbGNrOXdkR2x2Ym5NcElIdGNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTWdQU0JQWW1wbFkzUXVZWE56YVdkdUtGeHVJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQnNiMjl3T2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnWVhWMGJ6b2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lHbHVkR1Z5ZG1Gc09pQXhNREF3TEZ4dUlDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUhSb2FYTXViM0IwYVc5dWN5eGNiaUFnSUNBZ0lHOXdkR2x2Ym5OY2JpQWdJQ0FwWEc0Z0lIMWNiaUFnY0hKcGRtRjBaU0JwYm1sMFRHRjVaWElvS1NCN1hHNGdJQ0FnWTI5dWMzUWdiV0Z5YTJWeWMweGhlV1Z5VDNCMGFXOXVjem9nVFdGeWEyVnljMHhoZVdWeVQzQjBhVzl1Y3lBOUlIdGNiaUFnSUNBZ0lISmxibVJsY2xSNWNHVTZJQ2RvWldGMEp5eGNiaUFnSUNBZ0lHaGxZWFJQY0hScGIyNXpPaUIwYUdsekxtOXdkR2x2Ym5Nc1hHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWJHRjVaWElnUFNCdVpYY2dUV0Z5YTJWeWMweGhlV1Z5S0Z4dUlDQWdJQ0FnZEdocGN5NXRZWEFzWEc0Z0lDQWdJQ0IwYUdsekxtUjVibUZ0YVdORVlYUmhUR2x6ZEZzd1hTeGNiaUFnSUNBZ0lHMWhjbXRsY25OTVlYbGxjazl3ZEdsdmJuTXNYRzRnSUNBZ0lDQjBhR2x6TG1Ob1lXNXVaV3hHZFc1alhHNGdJQ0FnS1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG14aGVXVnlYRzRnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0JOWVhKclpYSWdabkp2YlNBbkxpOXRZWEpyWlhJdlRXRnlhMlZ5SjF4dWFXMXdiM0owSUUxaGNtdGxjbk5NWVhsbGNpQm1jbTl0SUNjdUwyMWhjbXRsY2k5TllYSnJaWEp6VEdGNVpYSW5YRzVwYlhCdmNuUWdUV0Z5YTJWeWMwSjFabVpsY2t4aGVXVnlJR1p5YjIwZ0p5NHZiV0Z5YTJWeUwwMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNpZGNibWx0Y0c5eWRDQlFiMng1YkdsdVpTQm1jbTl0SUNjdUwzQnZiSGxzYVc1bEwxQnZiSGxzYVc1bEoxeHVhVzF3YjNKMElGQnZiSGxzYVc1bGMweGhlV1Z5SUdaeWIyMGdKeTR2Y0c5c2VXeHBibVV2VUc5c2VXeHBibVZ6VEdGNVpYSW5YRzVwYlhCdmNuUWdVRzlzZVd4cGJtVnpRblZtWm1WeVRHRjVaWElnWm5KdmJTQW5MaTl3YjJ4NWJHbHVaUzlRYjJ4NWJHbHVaWE5DZFdabVpYSk1ZWGxsY2lkY2JtbHRjRzl5ZENCUWIyeDVaMjl1SUdaeWIyMGdKeTR2Y0c5c2VXZHZiaTlRYjJ4NVoyOXVKMXh1YVcxd2IzSjBJRkJ2YkhsbmIyNXpUR0Y1WlhJZ1puSnZiU0FuTGk5d2IyeDVaMjl1TDFCdmJIbG5iMjV6VEdGNVpYSW5YRzVwYlhCdmNuUWdSM0pwWkhOTVlYbGxjaUJtY205dElDY3VMM0J2YkhsbmIyNHZSM0pwWkhOTVlYbGxjaWRjYm1sdGNHOXlkQ0JFZVc1aGJXbGpTR1ZoZEV4aGVXVnlJR1p5YjIwZ0p5NHZaSGx1WVcxcFkwaGxZWFJNWVhsbGNpOUVlVzVoYldsalNHVmhkRXhoZVdWeUoxeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUUxaGNtdGxjaXhjYmlBZ1RXRnlhMlZ5YzB4aGVXVnlMRnh1SUNCTllYSnJaWEp6UW5WbVptVnlUR0Y1WlhJc1hHNGdJRkJ2Ykhsc2FXNWxMRnh1SUNCUWIyeDViR2x1WlhOTVlYbGxjaXhjYmlBZ1VHOXNlV3hwYm1WelFuVm1abVZ5VEdGNVpYSXNYRzRnSUZCdmJIbG5iMjRzWEc0Z0lGQnZiSGxuYjI1elRHRjVaWElzWEc0Z0lFZHlhV1J6VEdGNVpYSXNYRzRnSUVSNWJtRnRhV05JWldGMFRHRjVaWElzWEc1OVhHNWxlSEJ2Y25RZ2UxeHVJQ0JOWVhKclpYSXNYRzRnSUUxaGNtdGxjbk5NWVhsbGNpeGNiaUFnVFdGeWEyVnljMEoxWm1abGNreGhlV1Z5TEZ4dUlDQlFiMng1YkdsdVpTeGNiaUFnVUc5c2VXeHBibVZ6VEdGNVpYSXNYRzRnSUZCdmJIbHNhVzVsYzBKMVptWmxja3hoZVdWeUxGeHVJQ0JRYjJ4NVoyOXVMRnh1SUNCUWIyeDVaMjl1YzB4aGVXVnlMRnh1SUNCSGNtbGtjMHhoZVdWeUxGeHVJQ0JFZVc1aGJXbGpTR1ZoZEV4aGVXVnlMRnh1ZlZ4dUlpd2lhVzF3YjNKMElIc2dSR0YwWVV4cGMzUkpkR1Z0SUgwZ1puSnZiU0FuTGk0dlpHVm1hVzVwZEdsdmJuTW5YRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFMWhjbXRsY2lCbGVIUmxibVJ6SUV3dVRXRnlhMlZ5SUh0Y2JpQWdMeThnZEhOc2FXNTBPbVJwYzJGaWJHVXRibVY0ZEMxc2FXNWxPblpoY21saFlteGxMVzVoYldWY2JpQWdjSEpwZG1GMFpTQmZYMlJoZEdFNklFUmhkR0ZNYVhOMFNYUmxiVnh1SUNCamIyNXpkSEoxWTNSdmNpaHNZWFJzYm1jNklFd3VUR0YwVEc1blJYaHdjbVZ6YzJsdmJpd2diM0IwYVc5dWN6ODZJRXd1VFdGeWEyVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lITjFjR1Z5S0d4aGRHeHVaeXdnYjNCMGFXOXVjeWxjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjMlYwUkdGMFlTaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQjBhR2x6TGw5ZlpHRjBZU0E5SUdSaGRHRmNiaUFnZlZ4dUlDQndkV0pzYVdNZ1oyVjBSR0YwWVNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZYMlJoZEdGY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElIc2dSR0YwWVV4cGMzUkpkR1Z0TENCRGFHRnVibVZzUm5WdVl5QjlJR1p5YjIwZ0p5NHVMMlJsWm1sdWFYUnBiMjV6SjF4dWFXMXdiM0owSUUxaGNtdGxjbk5NWVhsbGNpd2dleUJOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6SUgwZ1puSnZiU0FuTGk5TllYSnJaWEp6VEdGNVpYSW5YRzVwYm5SbGNtWmhZMlVnVFdGeWEyVnljMEoxWm1abGNreGhlV1Z5VDNCMGFXOXVjeUJsZUhSbGJtUnpJRTFoY210bGNuTk1ZWGxsY2s5d2RHbHZibk1nZTF4dUlDQmlkV1ptWlhKVWIyOXNkR2x3UVhSMGNqb2djM1J5YVc1blhHNGdJR0oxWm1abGNrOXdkR2x2Ym5NNklFd3VRMmx5WTJ4bFRXRnlhMlZ5VDNCMGFXOXVjMXh1ZlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdUV0Z5YTJWeWMwSjFabVpsY2t4aGVXVnlJR1Y0ZEdWdVpITWdUV0Z5YTJWeWMweGhlV1Z5SUh0Y2JpQWdjSFZpYkdsaklHOXdkR2x2Ym5NNklFMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNrOXdkR2x2Ym5OY2JpQWdjSEpwZG1GMFpTQmlkV1ptWlhKTVlYbGxjam9nVEM1TVlYbGxja2R5YjNWd1hHNGdJR052Ym5OMGNuVmpkRzl5S0Z4dUlDQWdJRzFoY0RvZ1RDNU5ZWEFzWEc0Z0lDQWdaR0YwWVV4cGMzUTZJRVJoZEdGTWFYTjBTWFJsYlZ0ZExGeHVJQ0FnSUc5d2RHbHZibk02SUUxaGNtdGxjbk5DZFdabVpYSk1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJSE4xY0dWeUtHMWhjQ3dnWkdGMFlVeHBjM1FzSUc5d2RHbHZibk1zSUdOb1lXNXVaV3hHZFc1aktWeHVJQ0FnSUhSb2FYTXVkSGx3WlNBOUlDZHRZWEpyWlhKQ2RXWm1aWEluWEc0Z0lDQWdZMjl1YzNRZ1pHVm1ZWFZzZEVKMVptWmxjazl3ZEdsdmJuTTZJRXd1UTJseVkyeGxUV0Z5YTJWeVQzQjBhVzl1Y3lBOUlIdGNiaUFnSUNBZ0lISmhaR2wxY3pvZ01UQXdNQ3hjYmlBZ0lDQWdJSE4wY205clpUb2dkSEoxWlN4Y2JpQWdJQ0FnSUhkbGFXZG9kRG9nTVN4Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWhjYmlBZ0lDQWdJSFJvYVhNdWIzQjBhVzl1Y3l4Y2JpQWdJQ0FnSUhzZ1luVm1abVZ5VDNCMGFXOXVjem9nWkdWbVlYVnNkRUoxWm1abGNrOXdkR2x2Ym5NZ2ZTeGNiaUFnSUNBZ0lHOXdkR2x2Ym5OY2JpQWdJQ0FwWEc0Z0lIMWNibHh1SUNCd2RXSnNhV01nWkhKaGR5aHZjSFJwYjI1elB6b2dUV0Z5YTJWeWMwSjFabVpsY2t4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9kR2hwY3k1dmNIUnBiMjV6TENCdmNIUnBiMjV6S1Z4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3k1aWRXWm1aWEpQY0hScGIyNXpMbU52Ykc5eUlEMGdkR2hwY3k1dmNIUnBiMjV6TG1samIyNURiMnh2Y2x4dUlDQWdJSFJvYVhNdWFXNXBkRTFoY210bGNuTW9LVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsWkhKaGR5Z3BYRzRnSUgxY2JseHVJQ0J3ZFdKc2FXTWdjbVZrY21GM0tDa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NTJhWE5wWW14bEtTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSb2FYTXViV0Z5YTJWeVRHRjVaWElwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViV0Z3TG5KbGJXOTJaVXhoZVdWeUtIUm9hWE11YldGeWEyVnlUR0Y1WlhJcFhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGFHbHpMbUoxWm1abGNreGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1eVpXMXZkbVZNWVhsbGNpaDBhR2x6TG1KMVptWmxja3hoZVdWeUtWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxtMWhjbXRsY2t4aGVXVnlJRDBnZEdocGN5NWpiMjVtYVdkTllYSnJaWEpNWVhsbGNpZ3BYRzRnSUNBZ2RHaHBjeTVpZFdabVpYSk1ZWGxsY2lBOUlIUm9hWE11WTI5dVptbG5RblZtWm1WeVRHRjVaWElvS1Z4dVhHNGdJQ0FnZEdocGN5NXNZWGxsY2lBOUlFd3ViR0Y1WlhKSGNtOTFjQ2dwWEc0Z0lDQWdkR2hwY3k1c1lYbGxjaTVoWkdSTVlYbGxjaWgwYUdsekxtMWhjbXRsY2t4aGVXVnlLVnh1SUNBZ0lIUm9hWE11YkdGNVpYSXVZV1JrVEdGNVpYSW9kR2hwY3k1aWRXWm1aWEpNWVhsbGNpbGNibHh1SUNBZ0lIUm9hWE11YldGd0xtRmtaRXhoZVdWeUtIUm9hWE11YkdGNVpYSXBYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTmNiaUFnZlZ4dVhHNGdJSEIxWW14cFl5Qm5aWFJDYjNWdVpITW9LVG9nVEM1TVlYUk1ibWRDYjNWdVpITkZlSEJ5WlhOemFXOXVJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXRZWEpyWlhKekxteGxibWQwYUNBOFBTQXdLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dFlYQXVaMlYwUW05MWJtUnpLQ2xjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXViV0Z5YTJWeWN5NXlaV1IxWTJVb0tIQnlaWFlzSUdOMWNuSXBJRDArSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ3Y21WMkxtVjRkR1Z1WkNoY2JpQWdJQ0FnSUNBZ1kzVnljaTVuWlhSTVlYUk1ibWNvS1M1MGIwSnZkVzVrY3loMGFHbHpMbTl3ZEdsdmJuTXVZblZtWm1WeVQzQjBhVzl1Y3k1eVlXUnBkWE1wWEc0Z0lDQWdJQ0FwWEc0Z0lDQWdmU3dnZEdocGN5NXRZWEpyWlhKeld6QmRMbWRsZEV4aGRFeHVaeWdwTG5SdlFtOTFibVJ6S0hSb2FYTXViM0IwYVc5dWN5NWlkV1ptWlhKUGNIUnBiMjV6TG5KaFpHbDFjeWtwWEc0Z0lIMWNibHh1SUNCd2NtbDJZWFJsSUdOdmJtWnBaMEoxWm1abGNreGhlV1Z5S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJR2R5YjNWd1RHRjVaWElnUFNCTUxteGhlV1Z5UjNKdmRYQW9LVnh1SUNBZ0lIUm9hWE11YldGeWEyVnljeTVtYjNKRllXTm9LQ2h0WVhKclpYSXBJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR05wY21Oc1pVeGhlV1Z5SUQwZ1RDNWphWEpqYkdVb1hHNGdJQ0FnSUNBZ0lHMWhjbXRsY2k1blpYUk1ZWFJNYm1jb0tTeGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmNIUnBiMjV6TG1KMVptWmxjazl3ZEdsdmJuTmNiaUFnSUNBZ0lDbGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdVluVm1abVZ5Vkc5dmJIUnBjRUYwZEhJcElIdGNiaUFnSUNBZ0lDQWdZMmx5WTJ4bFRHRjVaWEl1WW1sdVpGUnZiMngwYVhBb1hHNGdJQ0FnSUNBZ0lDQWdKeWNnS3lCdFlYSnJaWEl1WjJWMFJHRjBZU2dwVzNSb2FYTXViM0IwYVc5dWN5NWlkV1ptWlhKVWIyOXNkR2x3UVhSMGNsMWNiaUFnSUNBZ0lDQWdLVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjM2RwZEdOb0lDaDBlWEJsYjJZZ2RHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lHTmhjMlVnSjNOMGNtbHVaeWM2WEc0Z0lDQWdJQ0FnSUNBZ0lDQmphWEpqYkdWTVlYbGxjaTVpYVc1a1ZHOXZiSFJwY0NoY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSnljZ0t5QnRZWEpyWlhJdVoyVjBSR0YwWVNncFczUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEpkWEc0Z0lDQWdJQ0FnSUNBZ0lDQXBYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdJQ0FnSUdOaGMyVWdKMjlpYW1WamRDYzZYRzRnSUNBZ0lDQWdJQ0FnSUNCamFYSmpiR1ZNWVhsbGNpNWlhVzVrVkc5dmJIUnBjQ2hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdKeWNnS3lCdFlYSnJaWEl1WjJWMFJHRjBZU2dwVzNSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXVkbUZzZFdWZFhHNGdJQ0FnSUNBZ0lDQWdJQ0FwWEc0Z0lDQWdJQ0FnSUNBZ1pHVm1ZWFZzZERwY2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHZHliM1Z3VEdGNVpYSXVZV1JrVEdGNVpYSW9ZMmx5WTJ4bFRHRjVaWElwWEc0Z0lDQWdmU2xjYmlBZ0lDQnlaWFIxY200Z1ozSnZkWEJNWVhsbGNseHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdleUJzYVdkb2RHVnVJSDBnWm5KdmJTQW5MaTR2ZFhScGJITXZhVzVrWlhnblhHNXBiWEJ2Y25RZ2V5QkVZWFJoVEdsemRFbDBaVzBzSUVOb1lXNXVaV3hHZFc1aklIMGdabkp2YlNBbkxpNHZaR1ZtYVc1cGRHbHZibk1uWEc1cGJYQnZjblFnVFdGeWEyVnlJR1p5YjIwZ0p5NHZUV0Z5YTJWeUoxeHVYRzR2S2lvZzVyaXk1cCtUNXFDMzVieVBJT2FWbytlQ3VYem5nNjNsaXB2bG03NGdLaTljYm5SNWNHVWdUV0Z5YTJWeWMweGhlV1Z5VW1WdVpHVnlWSGx3WlNBOUlDZHdiMmx1ZENjZ2ZDQW5hR1ZoZENjZ2ZDQW5ZMngxYzNSbGNpZGNibHh1THlvcUlPYTRzdWFmayttaW5PaUpzdWFndCtXOGp5RGxqWlhvaWJKODVZaUc1cTYxSUNvdlhHNTBlWEJsSUUxaGNtdGxjbk5NWVhsbGNsSmxibVJsY2xCdmFXNTBRMjlzYjNKVWVYQmxJRDBnSjNOcGJtZHNaU2NnZkNBbmMyVm5iV1Z1ZEdWa0oxeHVYRzR2S2lvZzVwV2o1NEs1NVp1KzVxQ0g1N0c3NVo2TElHbGpiMjVtYjI1MGZITjJaM3hwYldGblpTQXFMMXh1ZEhsd1pTQk5ZWEpyWlhKelRHRjVaWEpKWTI5dVZIbHdaU0E5SUNkbWIyNTBYMk5zWVhOekp5QjhJQ2QxYm1samIyUmxKeUI4SUNkemVXMWliMnduSUh3Z0oybHRZV2RsSjF4dVhHNXBiblJsY21aaFkyVWdTV052YmxKbGJtUmxja1oxYm1OUGNIUnBiMjRnZTF4dUlDQnBZMjl1VTJsNlpUb2dXMjUxYldKbGNpd2diblZ0WW1WeVhWeHVJQ0JwWTI5dVEyOXNiM0k2SUhOMGNtbHVaMXh1ZlZ4dWRIbHdaU0JKWTI5dVVtVnVaR1Z5Um5WdVl5QTlJQ2hjYmlBZ1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdExGeHVJQ0J3WVhKaGJYTTZJRWxqYjI1U1pXNWtaWEpHZFc1alQzQjBhVzl1WEc0cElEMCtJSE4wY21sdVoxeHVYRzVsZUhCdmNuUWdhVzUwWlhKbVlXTmxJRTFoY210bGNuTk1ZWGxsY2s5d2RHbHZibk1nZTF4dUlDQnlaVzVrWlhKVWVYQmxPaUJOWVhKclpYSnpUR0Y1WlhKU1pXNWtaWEpVZVhCbFhHNGdJSEpsYm1SbGNsQnZhVzUwUTI5c2IzSlVlWEJsUHpvZ1RXRnlhMlZ5YzB4aGVXVnlVbVZ1WkdWeVVHOXBiblJEYjJ4dmNsUjVjR1ZjYmlBZ2FXTnZibFI1Y0dVL09pQk5ZWEpyWlhKelRHRjVaWEpKWTI5dVZIbHdaVnh1WEc0Z0lHbGpiMjVKYldGblpWVnliRDg2SUhOMGNtbHVaMXh1SUNCcFkyOXVVMmw2WlQ4NklGdHVkVzFpWlhJc0lHNTFiV0psY2wxY2JpQWdhV052YmtOc1lYTnpQem9nYzNSeWFXNW5YRzRnSUdsamIyNVZibWxqYjJSbFB6b2djM1J5YVc1blhHNGdJR2xqYjI1VGVXMWliMncvT2lCemRISnBibWRjYmlBZ2FXTnZia052Ykc5eVB6b2djM1J5YVc1blhHNGdJR2xqYjI1QmJtTm9iM0kvT2lCYmJuVnRZbVZ5TENCdWRXMWlaWEpkWEc0Z0lHbGpiMjVTWlc1a1pYSmxjajg2SUVsamIyNVNaVzVrWlhKR2RXNWpYRzVjYmlBZ0x5OGc1cGl2NVpDbTZJR2E1WkNJNzd5TTVMeVk1WVdJNTdxbjZhdVk1THFPSUhKbGJtUmxjbFI1Y0dVZ1BUMGdjRzlwYm5SY2JpQWdhWE5EYkhWemRHVnlQem9nWW05dmJHVmhibHh1WEc0Z0lDOHFLaUJ3YjNCMWNDRGxzWlhucExybHJaZm1yclVnS2k5Y2JpQWdjRzl3ZFhCQmRIUnlQem9nYzNSeWFXNW5JSHdnZXlCc1lXSmxiRG9nYzNSeWFXNW5PeUIyWVd4MVpUb2dZVzU1SUgxY2JpQWdMeW9xSUhSdmIyeDBhWEFnNWJHVjU2UzY1YTJYNXE2MUlDb3ZYRzRnSUhSdmIyeDBhWEJCZEhSeVB6b2djM1J5YVc1blhHNWNiaUFnYjNCaFkybDBlVDg2SUc1MWJXSmxjbHh1WEc0Z0lDOHFLaURsaUlibXJyWG11TExtbjVQbnU1L29ycUhsclpmbXJyVWdLaTljYmlBZ2MyVm5iV1Z1ZEdWa1FYUjBjajg2SUhOMGNtbHVaMXh1SUNCelpXZHRaVzUwWldSRGIyeHZjbk0vT2lCemRISnBibWRiWFZ4dVhHNGdJR2hsWVhSUGNIUnBiMjV6UHpvZ1RXRnlhMlZ5YzBobFlYUk1ZWGxsY2s5d2RHbHZibk5jYmlBZ1kyeDFjM1JsY2s5d2RHbHZibk0vT2lCTUxrMWhjbXRsY25ORGJIVnpkR1Z5VDNCMGFXOXVjMXh1ZlZ4dVhHNHZLaW9nNkwyczVZeVc1TGk2NTRPdDVZcWI1WnUrNTVxRUlHOXdkR2x2Ym5NZ0tpOWNibVY0Y0c5eWRDQnBiblJsY21aaFkyVWdUV0Z5YTJWeWMwaGxZWFJNWVhsbGNrOXdkR2x2Ym5NZ1pYaDBaVzVrY3lCTUxraGxZWFJNWVhsbGNrOXdkR2x2Ym5NZ2UxeHVJQ0JrYVcxbGJuTnBiMjVCZEhSeVB6b2djM1J5YVc1blhHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFMWhjbXRsY25OTVlYbGxjaUI3WEc0Z0lIQjFZbXhwWXlCdFlYQTZJRXd1VFdGd1hHNGdJSEIxWW14cFl5QmtZWFJoVEdsemREb2dSR0YwWVV4cGMzUkpkR1Z0VzExY2JpQWdjSFZpYkdsaklHOXdkR2x2Ym5NNklFMWhjbXRsY25OTVlYbGxjazl3ZEdsdmJuTmNiaUFnY0hWaWJHbGpJR05vWVc1dVpXeEdkVzVqT2lCRGFHRnVibVZzUm5WdVkxeHVYRzRnSUhCMVlteHBZeUIwZVhCbE9pQnpkSEpwYm1kY2JseHVJQ0J3Y205MFpXTjBaV1FnYldGeWEyVnljem9nVFdGeWEyVnlXMTFjYmx4dUlDQndjbTkwWldOMFpXUWdabTlqZFhObFpFMWhjbXRsY2pvZ1RXRnlhMlZ5WEc0Z0lIQnliM1JsWTNSbFpDQm9iM1psY21Wa1RXRnlhMlZ5T2lCTllYSnJaWEpjYmlBZ0x5b3FJT21jZ09pbWdlV3hsZWVrdXVlYWhPYVV2dVdrcCtlYWhPV2J2dWFnaHlBcUwxeHVJQ0J3Y205MFpXTjBaV1FnWm05amRYTmxaRVJwYzNCc1lYbE5ZWEpyWlhJNklFMWhjbXRsY2x4dUlDQndjbTkwWldOMFpXUWdiV0Z5YTJWeVRHRjVaWEk2SUV3dVEyRnVkbUZ6U1dOdmJreGhlV1Z5WEc1Y2JpQWdjSEp2ZEdWamRHVmtJSFpwYzJsaWJHVTZJR0p2YjJ4bFlXNWNiaUFnY0hKdmRHVmpkR1ZrSUd4aGVXVnlPbHh1SUNBZ0lId2dUQzVEWVc1MllYTkpZMjl1VEdGNVpYSmNiaUFnSUNCOElFd3VTR1ZoZEV4aGVXVnlYRzRnSUNBZ2ZDQk1MazFoY210bGNuTkRiSFZ6ZEdWeVhHNGdJQ0FnZkNCTUxreGhlV1Z5UjNKdmRYQmNiaUFnY0hKdmRHVmpkR1ZrSUhwdmIyMVRkR0Z5ZEVOaU9pQW9LU0E5UGlCMmIybGtYRzRnSUhCeWIzUmxZM1JsWkNCNmIyOXRSVzVrUTJJNklDZ3BJRDArSUhadmFXUmNiaUFnY0hKcGRtRjBaU0JvWldGMFRHRjVaWEk2SUV3dVNHVmhkRXhoZVdWeVhHNGdJSEJ5YVhaaGRHVWdZMngxYzNSbGNreGhlV1Z5T2lCTUxrMWhjbXRsY25ORGJIVnpkR1Z5WEc1Y2JpQWdjSEpwZG1GMFpTQnpaV2R0Wlc1MFpXUk5hVzQ2SUc1MWJXSmxjbHh1SUNCd2NtbDJZWFJsSUhObFoyMWxiblJsWkZOMFpYQTZJRzUxYldKbGNseHVJQ0J3Y21sMllYUmxJR1JsWm1GMWJIUlBjSFJwYjI1ek9pQk5ZWEpyWlhKelRHRjVaWEpQY0hScGIyNXpYRzRnSUdOdmJuTjBjblZqZEc5eUtGeHVJQ0FnSUcxaGNEb2dUQzVOWVhBc1hHNGdJQ0FnWkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRMRnh1SUNBZ0lHOXdkR2x2Ym5NNklFMWhjbXRsY25OTVlYbGxjazl3ZEdsdmJuTXNYRzRnSUNBZ1kyaGhibTVsYkVaMWJtTTZJRU5vWVc1dVpXeEdkVzVqWEc0Z0lDa2dlMXh1SUNBZ0lIUm9hWE11WkdWbVlYVnNkRTl3ZEdsdmJuTWdQU0I3WEc0Z0lDQWdJQ0J5Wlc1a1pYSlVlWEJsT2lBbmNHOXBiblFuTEZ4dUlDQWdJQ0FnY21WdVpHVnlVRzlwYm5SRGIyeHZjbFI1Y0dVNklDZHphVzVuYkdVbkxGeHVJQ0FnSUNBZ2FXTnZibFI1Y0dVNklDZDFibWxqYjJSbEp5eGNiaUFnSUNBZ0lHbGpiMjVUYVhwbE9pQmJNakFzSURJd1hTeGNiaUFnSUNBZ0lHbGpiMjVEYkdGemN6b2dKMmxqYjI1bWIyNTBKeXhjYmlBZ0lDQWdJR2xqYjI1RGIyeHZjam9nSnlNek16ZzRSa1luTEZ4dUlDQWdJQ0FnYVdOdmJrRnVZMmh2Y2pvZ1d6RXdMQ0F5TUYwc1hHNGdJQ0FnSUNCd2IzQjFjRUYwZEhJNklIc2diR0ZpWld3NklDZmxrSTNucDdBbkxDQjJZV3gxWlRvZ0oyNWhiV1VuSUgwc1hHNGdJQ0FnSUNCMGIyOXNkR2x3UVhSMGNqb2dKMjVoYldVbkxGeHVJQ0FnSUNBZ2MyVm5iV1Z1ZEdWa1EyOXNiM0p6T2lCYkp5TXpNemc0UmtZblhTeGNiaUFnSUNBZ0lHbHpRMngxYzNSbGNqb2dabUZzYzJVc1hHNGdJQ0FnSUNCb1pXRjBUM0IwYVc5dWN6b2dlMXh1SUNBZ0lDQWdJQ0J0WVhnNklERXNYRzRnSUNBZ0lDQWdJRzFwYms5d1lXTnBkSGs2SURBdU5TeGNiaUFnSUNBZ0lIMHNYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVkSGx3WlNBOUlDZHRZWEpyWlhJblhHNGdJQ0FnZEdocGN5NXRZWEFnUFNCdFlYQmNiaUFnSUNCMGFHbHpMbVJoZEdGTWFYTjBJRDBnWkdGMFlVeHBjM1JjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk1nUFNCdmNIUnBiMjV6WEc0Z0lDQWdkR2hwY3k1amFHRnVibVZzUm5WdVl5QTlJR05vWVc1dVpXeEdkVzVqWEc1Y2JpQWdJQ0IwYUdsekxuWnBjMmxpYkdVZ1BTQjBjblZsWEc0Z0lDQWdkR2hwY3k1c1lYbGxjaUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUk5ZWEpyWlhJZ1BTQnVkV3hzWEc0Z0lDQWdkR2hwY3k1b2IzWmxjbVZrVFdGeWEyVnlJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsTllYSnJaWElnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTV0WVhKclpYSnpJRDBnVzExY2JpQWdJQ0IwYUdsekxtMWhjbXRsY2t4aGVXVnlJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVhR1ZoZEV4aGVXVnlJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVZMngxYzNSbGNreGhlV1Z5SUQwZ2JuVnNiRnh1WEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSTmFXNGdQU0JKYm1acGJtbDBlVnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVTNSbGNDQTlJREZjYmx4dUlDQWdJSFJvYVhNdWVtOXZiVk4wWVhKMFEySWdQU0IwYUdsekxsOTZiMjl0VTNSaGNuUkRZaTVpYVc1a0tIUm9hWE1wWEc0Z0lDQWdkR2hwY3k1NmIyOXRSVzVrUTJJZ1BTQjBhR2x6TGw5NmIyOXRSVzVrUTJJdVltbHVaQ2gwYUdsektWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa2NtRjNLRzl3ZEdsdmJuTS9PaUJOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6S1NCN1hHNGdJQ0FnZEdocGN5NTJhWE5wWW14bElEMGdkSEoxWlZ4dUlDQWdJSFJvYVhNdWFXNXBkRTl3ZEdsdmJuTW9iM0IwYVc5dWN5bGNiaUFnSUNCMGFHbHpMbWx1YVhSTllYSnJaWEp6S0NsY2JpQWdJQ0IwYUdsekxtbHVhWFJGZG1WdWRITW9LVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkpsWkhKaGR5Z3BYRzRnSUgxY2JpQWdjSFZpYkdsaklISmxaSEpoZHlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxteGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhoZVdWeUxuSmxiVzkyWlNncFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4ZzVMeVk1WVdJNVlpazVwYXRJR2x6UTJ4MWMzUmxjbHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWFYTkRiSFZ6ZEdWeUlDWW1JSFJvYVhNdWIzQjBhVzl1Y3k1eVpXNWtaWEpVZVhCbElEMDlQU0FuY0c5cGJuUW5LU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGhlV1Z5SUQwZ2RHaHBjeTVqYjI1bWFXZERiSFZ6ZEdWeVRHRjVaWElvS1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnpkMmwwWTJnZ0tIUm9hWE11YjNCMGFXOXVjeTV5Wlc1a1pYSlVlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhjMlVnSjNCdmFXNTBKem9nZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11YkdGNVpYSWdQU0IwYUdsekxtTnZibVpwWjAxaGNtdGxja3hoZVdWeUtDbGNiaUFnSUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR05oYzJVZ0oyTnNkWE4wWlhJbk9pQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NXNZWGxsY2lBOUlIUm9hWE11WTI5dVptbG5RMngxYzNSbGNreGhlV1Z5S0NsY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHTmhjMlVnSjJobFlYUW5PaUI3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVzWVhsbGNpQTlJSFJvYVhNdVkyOXVabWxuU0dWaGRFeGhlV1Z5S0NsY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHUmxabUYxYkhRNklIdGNiaUFnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9ZSEpsYm1SbGNsUjVjR1VnNUxpTjVwU3Y1b3lCWENJa2UzUm9hWE11YjNCMGFXOXVjeTV5Wlc1a1pYSlVlWEJsZlZ3aVlDbGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbTFoY0M1aFpHUk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUhKbGRIVnliaUIwYUdselhHNGdJSDFjYmlBZ2NIVmliR2xqSUhObGRFUmhkR0VvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0VzEwcElIdGNiaUFnSUNCMGFHbHpMbVJoZEdGTWFYTjBJRDBnWkdGMFlWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCelpYUlBjSFJwYjI1ektHOXdkR2x2Ym5NNklFMWhjbXRsY25OTVlYbGxjazl3ZEdsdmJuTXNJSEpsWkhKaGR5QTlJR1poYkhObEtTQjdYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDBhR2x6TG05d2RHbHZibk1zSUc5d2RHbHZibk1wWEc0Z0lDQWdhV1lnS0hKbFpISmhkeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXlaV1J5WVhjb0tWeHVJQ0FnSUgxY2JpQWdmVnh1SUNCd2RXSnNhV01nWm1sMFFtOTFibVJ6S0NrZ2UxeHVJQ0FnSUhSb2FYTXViV0Z3TG1acGRFSnZkVzVrY3loMGFHbHpMbWRsZEVKdmRXNWtjeWdwTENCN0lIQmhaR1JwYm1jNklGc3lNQ3dnTWpCZElIMHBYRzRnSUgxY2JpQWdjSFZpYkdsaklHZGxkRUp2ZFc1a2N5Z3BPaUJNTGt4aGRFeHVaMEp2ZFc1a2MwVjRjSEpsYzNOcGIyNGdlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtMWhjbXRsY25NdWJHVnVaM1JvSUR3OUlEQXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG0xaGNDNW5aWFJDYjNWdVpITW9LVnh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXRZWEpyWlhKekxtMWhjQ2hjYmlBZ0lDQWdJQ2h0WVhKclpYSXBJRDArWEc0Z0lDQWdJQ0FnSUZ0dFlYSnJaWEl1WjJWMFRHRjBURzVuS0NrdWJHRjBMQ0J0WVhKclpYSXVaMlYwVEdGMFRHNW5LQ2t1Ykc1blhTQmhjeUJiYm5WdFltVnlMQ0J1ZFcxaVpYSmRYRzRnSUNBZ0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa1pYTjBjbTk1S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWNtVnRiM1psVEdGNVpYSW9kR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVTFoY210bGNpbGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXRZWEF1YjJabUtDZDZiMjl0YzNSaGNuUW5MQ0IwYUdsekxucHZiMjFUZEdGeWRFTmlLVnh1SUNBZ0lIUm9hWE11YldGd0xtOW1aaWduZW05dmJXVnVaQ2NzSUhSb2FYTXVlbTl2YlVWdVpFTmlLVnh1SUNCOVhHNGdJSEIxWW14cFl5QjBiMmRuYkdWV2FYTnBZbXhsS0hacGMybGliR1U2SUdKdmIyeGxZVzRwSUh0Y2JpQWdJQ0IwYUdsekxuWnBjMmxpYkdVZ1BTQjJhWE5wWW14bFhHNGdJQ0FnYVdZZ0tDRjBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIWnBjMmxpYkdVcElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xtRmtaRXhoZVdWeUtIUm9hWE11YkdGNVpYSXBYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsTllYSnJaWEl1Y21WdGIzWmxLQ2xjYmlBZ0lDQWdJSFJvYVhNdWJXRndMbkpsYlc5MlpVeGhlV1Z5S0hSb2FYTXViR0Y1WlhJcFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhCMVlteHBZeUJqYUdGdVoyVkRiMnh2Y2loamIyeHZjam9nYzNSeWFXNW5LU0I3WEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6TG1samIyNURiMnh2Y2lBOUlHTnZiRzl5WEc0Z0lDQWdkR2hwY3k1eVpXUnlZWGNvS1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJqYUdGdVoyVkpZMjl1S0dsamIyNVZibWxqYjJSbE9pQnpkSEpwYm1jcElIdGNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTXVhV052YmxWdWFXTnZaR1VnUFNCcFkyOXVWVzVwWTI5a1pWeHVJQ0FnSUhSb2FYTXVjbVZrY21GM0tDbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ2NHbDBZMmdvYVdRNklITjBjbWx1WnlrZ2UxeHVJQ0FnSUhSb2FYTXViV0Z5YTJWeWN5NW1iM0pGWVdOb0tDaHRZWEpyWlhJcElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNodFlYSnJaWEl1WjJWMFJHRjBZU2dwTG1sa0lEMDlQU0JwWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG0xaGNtdGxja05zYVdOclNHRnVaR3hsY2lodFlYSnJaWElzSUhSeWRXVXBYRzRnSUNBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcFhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lGOTZiMjl0VTNSaGNuUkRZaWdwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11ZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBhR2x6TG5SNWNHVWdQVDA5SUNkdFlYSnJaWEluS1NCN1hHNGdJQ0FnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5KbGJtUmxjbFI1Y0dVZ1BUMDlJQ2R3YjJsdWRDY2dKaVlnSVhSb2FYTXViM0IwYVc5dWN5NXBjME5zZFhOMFpYSXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRZWEF1Y21WdGIzWmxUR0Y1WlhJb2RHaHBjeTV0WVhKclpYSk1ZWGxsY2lsY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVjbVZ0YjNabFRHRjVaWElvZEdocGN5NXRZWEpyWlhKTVlYbGxjaWxjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjSEp2ZEdWamRHVmtJRjk2YjI5dFJXNWtRMklvS1NCN1hHNGdJQ0FnYVdZZ0tDRjBhR2x6TG5acGMybGliR1VwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kR2hwY3k1MGVYQmxJRDA5UFNBbmJXRnlhMlZ5SnlrZ2UxeHVJQ0FnSUNBZ2FXWWdLSFJvYVhNdWIzQjBhVzl1Y3k1eVpXNWtaWEpVZVhCbElEMDlQU0FuY0c5cGJuUW5JQ1ltSUNGMGFHbHpMbTl3ZEdsdmJuTXVhWE5EYkhWemRHVnlLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViV0Z3TG1Ga1pFeGhlV1Z5S0hSb2FYTXViV0Z5YTJWeVRHRjVaWElwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xtRmtaRXhoZVdWeUtIUm9hWE11YldGeWEyVnlUR0Y1WlhJcFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUM4cUtpRG11TExtbjVQa3VMcm1sYVBuZ3JubG03NGdLaTljYmlBZ2NISnZkR1ZqZEdWa0lHTnZibVpwWjAxaGNtdGxja3hoZVdWeUtDa2dlMXh1SUNBZ0lHbG1JQ2gwYUdsekxtMWhjbXRsY2t4aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjbXRsY2t4aGVXVnlMbkpsYlc5MlpTZ3BYRzRnSUNBZ2ZWeHVJQ0FnSUdOdmJuTjBJR05oYm5aaGMwbGpiMjVNWVhsbGNpQTlJRXd1WTJGdWRtRnpTV052Ymt4aGVXVnlLSHQ5S1M1aFpHUlVieWgwYUdsekxtMWhjQ2xjYmlBZ0lDQXZMeURtdDd2bGlxRG5ncm5saDd2a3Vvdmt1N1pjYmlBZ0lDQmpZVzUyWVhOSlkyOXVUR0Y1WlhJdVlXUmtUMjVEYkdsamEweHBjM1JsYm1WeUtDaGZMQ0JiZXlCa1lYUmhPaUJ0WVhKclpYSWdmVjBwSUQwK0lIdGNiaUFnSUNBZ0lIUm9hWE11YldGeWEyVnlRMnhwWTJ0SVlXNWtiR1Z5S0cxaGNtdGxjaUJoY3lCTllYSnJaWElwWEc0Z0lDQWdmU2xjYmlBZ0lDQXZMeURtdDd2bGlxQWdhRzkyWlhJZzVMcUw1THUyWEc0Z0lDQWdZMkZ1ZG1GelNXTnZia3hoZVdWeUxtRmtaRTl1U0c5MlpYSk1hWE4wWlc1bGNpZ29YeXdnVzNzZ1pHRjBZVG9nYldGeWEyVnlJSDFkS1NBOVBpQjdYRzRnSUNBZ0lDQXZMeURrdVl2bGlZM21uSWtnYUc5MlpYSWc1NXFFNVlXejZaZXRJSFJ2YjJ4MGFYQmNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtaHZkbVZ5WldSTllYSnJaWElwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvYjNabGNtVmtUV0Z5YTJWeUxtTnNiM05sVkc5dmJIUnBjQ2dwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0IwYUdsekxtaHZkbVZ5WldSTllYSnJaWElnUFNCdFlYSnJaWElnWVhNZ1RXRnlhMlZ5WEc1Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG1odmRtVnlaV1JOWVhKclpYSXVaMlYwVkc5dmJIUnBjQ2dwS1NCN1hHNGdJQ0FnSUNBZ0lDOHZJT1dtZ3VhZW5PVzNzdWU3aitpdXZ1ZTlyaUIwYjI5c2RHbHdJT2VidE9hT3BlV3hsZWVrdWlCMGIyOXNkR2x3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhRzkyWlhKbFpFMWhjbXRsY2k1dmNHVnVWRzl2YkhScGNDZ3BYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQXZMeURsa0tibGlKbm51NUhscnBvZ2RHOXZiSFJwY0NEbHViYmxzWlhucExwY2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWIzQjBhVzl1Y3k1MGIyOXNkR2x3UVhSMGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVhRzkyWlhKbFpFMWhjbXRsY2k1aWFXNWtWRzl2YkhScGNDaGNiaUFnSUNBZ0lDQWdJQ0FnSUNjbklDc2dkR2hwY3k1b2IzWmxjbVZrVFdGeWEyVnlMbWRsZEVSaGRHRW9LVnQwYUdsekxtOXdkR2x2Ym5NdWRHOXZiSFJwY0VGMGRISmRYRzRnSUNBZ0lDQWdJQ0FnS1Z4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNsY2JpQWdJQ0JqWVc1MllYTkpZMjl1VEdGNVpYSXVZV1JrVFdGeWEyVnljeWgwYUdsekxtMWhjbXRsY25NcFhHNWNiaUFnSUNBdkx5RG9wNlBsaHJQbGlKM21yS0htdUxMbW41UGt1STNsaDdybG03N21vSWZwbDY3cG9waGNiaUFnSUNCMGFHbHpMbTFoY0M1d1lXNVVieWgwYUdsekxtMWhjQzVuWlhSRFpXNTBaWElvS1NsY2JseHVJQ0FnSUhSb2FYTXViV0Z5YTJWeVRHRjVaWElnUFNCallXNTJZWE5KWTI5dVRHRjVaWEpjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV0WVhKclpYSk1ZWGxsY2x4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCblpYUlViMjlzVkdsd1EyOXVkR1Z1ZENoa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwcElIdGNiaUFnSUNCeVpYUjFjbTRnSnljZ0t5QmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NTBiMjlzZEdsd1FYUjBjbDFjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnYVc1cGRFOXdkR2x2Ym5Nb2IzQjBhVzl1Y3pvZ1RXRnlhMlZ5YzB4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUhSb2FYTXVaR1ZtWVhWc2RFOXdkR2x2Ym5Nc0lIUm9hWE11YjNCMGFXOXVjeXdnYjNCMGFXOXVjeWxjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnYVc1cGRFMWhjbXRsY25Nb0tTQjdYRzRnSUNBZ0x5OGc1N3lUNWEyWUlITmxaMjFsYm5RZzU1dTQ1WVd6NXBXdzVvMnVYRzRnSUNBZ2RHaHBjeTVqWVdOb1pWTmxaMjFsYm5SUVlYSmhiWE1vS1Z4dUlDQWdJSFJvYVhNdWJXRnlhMlZ5Y3lBOUlGdGRYRzRnSUNBZ2RHaHBjeTVrWVhSaFRHbHpkQzVtYjNKRllXTm9LQ2hrWVhSaEtTQTlQaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQnNZWGxsY2lBOUlFd3VaMlZ2U2xOUFRpaGtZWFJoTG1kbGIyMWxkSEo1S1M1blpYUk1ZWGxsY25Nb0tWc3dYVnh1WEc0Z0lDQWdJQ0JqYjI1emRDQnRZWEpyWlhJZ1BTQnVaWGNnVFdGeWEyVnlLRnh1SUNBZ0lDQWdJQ0JiWEc0Z0lDQWdJQ0FnSUNBZ0tHeGhlV1Z5SUdGeklFd3VUV0Z5YTJWeUtTNW5aWFJNWVhSTWJtY29LUzVzWVhRc1hHNGdJQ0FnSUNBZ0lDQWdLR3hoZVdWeUlHRnpJRXd1VFdGeWEyVnlLUzVuWlhSTVlYUk1ibWNvS1M1c2JtY3NYRzRnSUNBZ0lDQWdJRjBzWEc0Z0lDQWdJQ0FnSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBZMjl1T2lCMGFHbHpMbWRsZEUxaGNtdGxja2xqYjI0b1pHRjBZU2tzWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNsY2JseHVJQ0FnSUNBZ0x5OGc1YkNHNTV1NDVZV3o1WUM4NTd1UjVhNmE1WWl3SUcxaGNtdGxjdVM0aWx4dUlDQWdJQ0FnYldGeWEyVnlMbk5sZEVSaGRHRW9aR0YwWVNsY2JpQWdJQ0FnSUhSb2FYTXViV0Z5YTJWeWN5NXdkWE5vS0cxaGNtdGxjaWxjYmlBZ0lDQjlLVnh1SUNCOVhHNGdJSEJ5YjNSbFkzUmxaQ0JwYm1sMFJYWmxiblJ6S0NrZ2UxeHVJQ0FnSUhSb2FYTXViV0Z3TG05dUtDZDZiMjl0YzNSaGNuUW5MQ0IwYUdsekxucHZiMjFUZEdGeWRFTmlLVnh1SUNBZ0lIUm9hWE11YldGd0xtOXVLQ2Q2YjI5dFpXNWtKeXdnZEdocGN5NTZiMjl0Ulc1a1EySXBYRzRnSUNBZ2RHaHBjeTV0WVhBdWIyNG9KMk52Ym5SbGVIUnRaVzUxSnl3Z1kyOXVjMjlzWlM1c2IyY3BYRzRnSUgxY2JpQWdMeThnNWFTRTU1Q0dJRzFoY210bGNpRG5ncm5saDd2a3Vvdmt1N1pjYmlBZ2NISnBkbUYwWlNCdFlYSnJaWEpEYkdsamEwaGhibVJzWlhJb2JXRnlhMlZ5T2lCTllYSnJaWElzSUdacGRFSnZkVzVrY3o4NklHSnZiMnhsWVc0cElIdGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUk5ZWEpyWlhJZ1BTQnRZWEpyWlhKY2JpQWdJQ0F2THlEbGlLRHBtYVRsaVkza3VJRGt1S3JtbEw3bHBLZmxtNzdtb0lkY2JpQWdJQ0JwWmlBb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2k1eVpXMXZkbVZHY205dEtIUm9hWE11YldGd0tWeHVJQ0FnSUgxY2JpQWdJQ0F2THlEbmxKL21pSkRsdlpQbGlZM21sTDdscEtmbG03N21vSWRjYmlBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVUV0Z5YTJWeUlEMGdibVYzSUUxaGNtdGxjaWh0WVhKclpYSXVaMlYwVEdGMFRHNW5LQ2tzSUh0Y2JpQWdJQ0FnSUdsamIyNDZJSFJvYVhNdVoyVjBUR0Z5WjJWeVRXRnlhMlZ5U1dOdmJpaHRZWEpyWlhJdVoyVjBSR0YwWVNncEtTeGNiaUFnSUNCOUtWeHVJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsTllYSnJaWEl1WVdSa1ZHOG9kR2hwY3k1dFlYQXBYRzVjYmlBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVUV0Z5YTJWeVhHNGdJQ0FnSUNBdVltbHVaRkJ2Y0hWd0tIUm9hWE11WjJWMFVHOXdkWEJEYjI1MFpXNTBLRzFoY210bGNpNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdMbTl3Wlc1UWIzQjFjQ2dwWEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVTFoY210bGNpNXZiaWduY0c5d2RYQmpiRzl6WlNjc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsTllYSnJaWEl1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlLVnh1SUNBZ0lHMWhjbXRsY2k1amJHOXpaVlJ2YjJ4MGFYQW9LVnh1WEc0Z0lDQWdkR2hwY3k1dFlYQXVjR0Z1Vkc4b2RHaHBjeTVtYjJOMWMyVmtUV0Z5YTJWeUxtZGxkRXhoZEV4dVp5Z3BLVnh1SUNBZ0lHbG1JQ2htYVhSQ2IzVnVaSE1wSUh0Y2JpQWdJQ0FnSUhSb2FYTXViV0Z3TG1acGRFSnZkVzVrY3lodFlYSnJaWEl1WjJWMFRHRjBURzVuS0NrdWRHOUNiM1Z1WkhNb01UQXBLVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbU5vWVc1dVpXeEdkVzVqS0NkdmJpMWpiR2xqYXkxdFlYSnJaWEluTENCdFlYSnJaWElwWEc0Z0lIMWNiaUFnY0hKcGRtRjBaU0JqYjI1bWFXZERiSFZ6ZEdWeVRHRjVaWElvS1NCN1hHNGdJQ0FnTHk4ZzViR1Y1NlM2NklHYTVaQ0k1WnUrNWJHQ1hHNGdJQ0FnYVdZZ0tIUm9hWE11WTJ4MWMzUmxja3hoZVdWeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1Oc2RYTjBaWEpNWVhsbGNpNXlaVzF2ZG1Vb0tWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxtTnNkWE4wWlhKTVlYbGxjaUE5SUV3dWJXRnlhMlZ5UTJ4MWMzUmxja2R5YjNWd0tIdGNiaUFnSUNBZ0lHbGpiMjVEY21WaGRHVkdkVzVqZEdsdmJqb2dkR2hwY3k1cFkyOXVRM0psWVhSbFJuVnVZM1JwYjI0dVltbHVaQ2gwYUdsektTeGNiaUFnSUNCOUtWeHVJQ0FnSUhSb2FYTXVZMngxYzNSbGNreGhlV1Z5TG1Ga1pFeGhlV1Z5Y3loY2JpQWdJQ0FnSUhSb2FYTXViV0Z5YTJWeWN5NXRZWEFvS0cwcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdiV0Z5YTJWeUlEMGdibVYzSUUxaGNtdGxjaWh0TG1kbGRFeGhkRXh1WnlncExDQjdYRzRnSUNBZ0lDQWdJQ0FnYVdOdmJqb2dkR2hwY3k1blpYUk5ZWEpyWlhKSlkyOXVLRzB1WjJWMFJHRjBZU2dwS1N4Y2JpQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdiV0Z5YTJWeUxuTmxkRVJoZEdFb2JTNW5aWFJFWVhSaEtDa3BYRzRnSUNBZ0lDQWdJRzFoY210bGNpNWlhVzVrVkc5dmJIUnBjQ2duSnlBcklHMWhjbXRsY2k1blpYUkVZWFJoS0NsYmRHaHBjeTV2Y0hScGIyNXpMblJ2YjJ4MGFYQkJkSFJ5WFNsY2JpQWdJQ0FnSUNBZ2JXRnlhMlZ5TG1KcGJtUlFiM0IxY0NoMGFHbHpMbWRsZEZCdmNIVndRMjl1ZEdWdWRDaHRZWEpyWlhJdVoyVjBSR0YwWVNncEtTbGNiaUFnSUNBZ0lDQWdiV0Z5YTJWeUxtOXVLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxtMWhjbXRsY2tOc2FXTnJTR0Z1Wkd4bGNpaHRZWEpyWlhJcFhHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnRZWEpyWlhKY2JpQWdJQ0FnSUgwcFhHNGdJQ0FnS1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1Oc2RYTjBaWEpNWVhsbGNseHVJQ0I5WEc1Y2JpQWdMeW9xSU9hNHN1YWZrK1M0dXVlRHJlV0ttK1didmlBcUwxeHVJQ0J3Y21sMllYUmxJR052Ym1acFowaGxZWFJNWVhsbGNpZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NW9aV0YwVEdGNVpYSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWFHVmhkRXhoZVdWeUxuSmxiVzkyWlNncFhHNGdJQ0FnZlZ4dUlDQWdJR052Ym5OMElHRnNkSE02SUc1MWJXSmxjbHRkSUQwZ1cxMWNiaUFnSUNCMGFHbHpMbTFoY210bGNuTXVabTl5UldGamFDZ29iV0Z5YTJWeUtTQTlQaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQnNZWFJNYm1jZ1BTQnRZWEpyWlhJdVoyVjBUR0YwVEc1bktDbGNiaUFnSUNBZ0lHTnZibk4wSUdScGJXVnVjMmx2YmtGMGRISWdQVnh1SUNBZ0lDQWdJQ0IwYUdsekxtOXdkR2x2Ym5NdWFHVmhkRTl3ZEdsdmJuTWdKaVlnZEdocGN5NXZjSFJwYjI1ekxtaGxZWFJQY0hScGIyNXpMbVJwYldWdWMybHZia0YwZEhKY2JpQWdJQ0FnSUd4bGRDQmhiSFFnUFZ4dUlDQWdJQ0FnSUNBb1pHbHRaVzV6YVc5dVFYUjBjaUFtSmlCdFlYSnJaWEl1WjJWMFJHRjBZU2dwVzJScGJXVnVjMmx2YmtGMGRISmRLU0I4ZkZ4dUlDQWdJQ0FnSUNCMGFHbHpMbTl3ZEdsdmJuTXVhR1ZoZEU5d2RHbHZibk11YldGNFhHNGdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlHRnNkQ0FoUFQwZ0oyNTFiV0psY2ljcElIdGNiaUFnSUNBZ0lDQWdZV3gwSUQwZ2RHaHBjeTV2Y0hScGIyNXpMbWhsWVhSUGNIUnBiMjV6TG0xaGVGeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1lXeDBjeTV3ZFhOb0tHRnNkQ2xjYmlBZ0lDQWdJRzFoY210bGNpNXpaWFJNWVhSTWJtY29UQzVzWVhSTWJtY29iR0YwVEc1bkxteGhkQ3dnYkdGMFRHNW5MbXh1Wnl3Z1lXeDBLU2xjYmlBZ0lDQjlLVnh1SUNBZ0lIUm9hWE11YUdWaGRFeGhlV1Z5SUQwZ1RDNW9aV0YwVEdGNVpYSW9YRzRnSUNBZ0lDQjBhR2x6TG0xaGNtdGxjbk11YldGd0tDaHBkQ3dnYVc1a1pYZ3BJRDArSUZ0Y2JpQWdJQ0FnSUNBZ2FYUXVaMlYwVEdGMFRHNW5LQ2t1YkdGMExGeHVJQ0FnSUNBZ0lDQnBkQzVuWlhSTVlYUk1ibWNvS1M1c2JtY3NYRzRnSUNBZ0lDQWdJR0ZzZEhOYmFXNWtaWGhkTEZ4dUlDQWdJQ0FnWFNrc1hHNGdJQ0FnSUNBdkx5QlVUMFJQT2lEa3ZiL25sS2dnYldWeVoyVkRiMjVtYVdjZzU2NkE1WXlXWEc0Z0lDQWdJQ0JQWW1wbFkzUXVZWE56YVdkdUtIdDlMQ0I3SUcxcGJrOXdZV05wZEhrNklEQXVOU0I5TENCMGFHbHpMbTl3ZEdsdmJuTXVhR1ZoZEU5d2RHbHZibk1wWEc0Z0lDQWdLVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWhsWVhSTVlYbGxjbHh1SUNCOVhHNWNiaUFnY0hKcGRtRjBaU0JuWlhSTVlYSm5aWEpOWVhKclpYSkpZMjl1S0dSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxsOW5aWFJOWVhKclpYSkpZMjl1S0dSaGRHRXNJSFJ5ZFdVcFhHNGdJSDFjYmx4dUlDQndjbWwyWVhSbElHZGxkRTFoY210bGNrbGpiMjRvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyZGxkRTFoY210bGNrbGpiMjRvWkdGMFlTd2dabUZzYzJVcFhHNGdJSDFjYmx4dUlDQXZLaW9nNkk2MzVZK1c1YjJUNVltTklHMWhjbXRsY2lEcG5JRG9wb0hsc1pYbnBMcm5tb1FnYVdOdmJpQXFMMXh1SUNCd2NtbDJZWFJsSUY5blpYUk5ZWEpyWlhKSlkyOXVLRnh1SUNBZ0lHUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJTeGNiaUFnSUNCcGMweGhjbWRsY2pvZ1ltOXZiR1ZoYmx4dUlDQXBPaUJNTGtsamIyNGdmQ0JNTGtScGRrbGpiMjRnZTF4dUlDQWdJR052Ym5OMElHbGpiMjVUYVhwbElEMGdkR2hwY3k1dmNIUnBiMjV6TG1samIyNVRhWHBsWEc0Z0lDQWdZMjl1YzNRZ2FXTnZia0Z1WTJodmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1cFkyOXVRVzVqYUc5eVhHNGdJQ0FnWTI5dWMzUWdiR0Z5WjJWeVNXTnZibE5wZW1VZ1BTQmJhV052YmxOcGVtVmJNRjBnS2lBeExqVXNJR2xqYjI1VGFYcGxXekZkSUNvZ01TNDFYU0JoY3lCYlhHNGdJQ0FnSUNCdWRXMWlaWElzWEc0Z0lDQWdJQ0J1ZFcxaVpYSmNiaUFnSUNCZFhHNGdJQ0FnWTI5dWMzUWdiR0Z5WjJWeVNXTnZia0Z1WTJodmNpQTlJRnRwWTI5dVFXNWphRzl5V3pCZElDb2dNUzQxTENCcFkyOXVRVzVqYUc5eVd6RmRJQ29nTVM0MVhTQmhjeUJiWEc0Z0lDQWdJQ0J1ZFcxaVpYSXNYRzRnSUNBZ0lDQnVkVzFpWlhKY2JpQWdJQ0JkWEc1Y2JpQWdJQ0JqYjI1emRDQnBZMjl1UTI5c2IzSWdQU0IwYUdsekxtOXdkR2x2Ym5NdWFXTnZia052Ykc5eVhHNWNiaUFnSUNCemQybDBZMmdnS0hSb2FYTXViM0IwYVc5dWN5NXBZMjl1Vkhsd1pTa2dlMXh1SUNBZ0lDQWdZMkZ6WlNBbmFXMWhaMlVuT2lCN1hHNGdJQ0FnSUNBZ0lDOHZJSEpsZEhWeWJpQk1MbWxqYjI0b2UxeHVJQ0FnSUNBZ0lDQXZMeUFnSUdsamIyNVZjbXc2SUhSb2FYTXViM0IwYVc5dWN5NXBZMjl1U1cxaFoyVlZjbXdzWEc0Z0lDQWdJQ0FnSUM4dklDQWdhV052YmxOcGVtVTZJR2x6VEdGeVoyVnlJRDhnYkdGeVoyVnlTV052YmxOcGVtVWdPaUJwWTI5dVUybDZaU3hjYmlBZ0lDQWdJQ0FnTHk4Z0lDQnBZMjl1UVc1amFHOXlMRnh1SUNBZ0lDQWdJQ0F2THlCOUtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1kyRnpaU0FuWm05dWRGOWpiR0Z6Y3ljNlhHNGdJQ0FnSUNCallYTmxJQ2R6ZVcxaWIyd25PbHh1SUNBZ0lDQWdZMkZ6WlNBbmRXNXBZMjlrWlNjNklIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFd3VaR2wyU1dOdmJpaDdYRzRnSUNBZ0lDQWdJQ0FnYUhSdGJEb2dkR2hwY3k1blpYUkRkWE4wYjIxSlkyOXVTRlJOVENoa1lYUmhMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBZMjl1VTJsNlpUb2dhWE5NWVhKblpYSWdQeUJzWVhKblpYSkpZMjl1VTJsNlpTQTZJR2xqYjI1VGFYcGxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXTnZia052Ykc5eUxGeHVJQ0FnSUNBZ0lDQWdJSDBwTEZ4dUlDQWdJQ0FnSUNBZ0lHTnNZWE56VG1GdFpUb2dhWE5NWVhKblpYSWdQeUFuYkdGeVoyVXRaR2wyTFdsamIyNHRiV0Z5YTJWeUp5QTZJQ2NuTEZ4dUlDQWdJQ0FnSUNBZ0lHbGpiMjVUYVhwbE9pQnBjMHhoY21kbGNpQS9JR3hoY21kbGNrbGpiMjVUYVhwbElEb2dhV052YmxOcGVtVXNYRzRnSUNBZ0lDQWdJQ0FnYVdOdmJrRnVZMmh2Y2pvZ2FYTk1ZWEpuWlhJZ1B5QnNZWEpuWlhKSlkyOXVRVzVqYUc5eUlEb2dhV052YmtGdVkyaHZjaXhjYmlBZ0lDQWdJQ0FnSUNCMGIyOXNkR2x3UVc1amFHOXlPaUJwYzB4aGNtZGxjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1B5QmJNQ3dnTFd4aGNtZGxja2xqYjI1QmJtTm9iM0piTVYwZ0x5QXlYVnh1SUNBZ0lDQWdJQ0FnSUNBZ09pQmJNQ3dnTFdsamIyNUJibU5vYjNKYk1WMGdMeUF5WFN4Y2JpQWdJQ0FnSUNBZ0lDQndiM0IxY0VGdVkyaHZjam9nYVhOTVlYSm5aWEpjYmlBZ0lDQWdJQ0FnSUNBZ0lEOGdXekFzSUMxc1lYSm5aWEpKWTI5dVFXNWphRzl5V3pGZElDOGdNbDFjYmlBZ0lDQWdJQ0FnSUNBZ0lEb2dXekFzSUMxcFkyOXVRVzVqYUc5eVd6RmRJQzhnTWwwc1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQmtaV1poZFd4ME9pQjdYRzRnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaGdjbVZ1WkdWeVZIbHdaU0RrdUkzb2c3M2t1TG9nSkh0MGFHbHpMbTl3ZEdsdmJuTXVhV052YmxSNWNHVjlZQ2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJEZFhOMGIyMUpZMjl1U0ZSTlRDaGNiaUFnSUNCa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwc1hHNGdJQ0FnYjNCMGFXOXVjejg2SUVsamIyNVNaVzVrWlhKR2RXNWpUM0IwYVc5dVhHNGdJQ2s2SUhOMGNtbHVaeUI3WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXBZMjl1VW1WdVpHVnlaWElwSUh0Y2JpQWdJQ0FnSUc5d2RHbHZibk1nUFNCUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCMGFHbHpMbTl3ZEdsdmJuTXNJRzl3ZEdsdmJuTXBYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1U1pXNWtaWEpsY2loa1lYUmhMQ0J2Y0hScGIyNXpLVnh1SUNBZ0lIMWNiaUFnSUNCemQybDBZMmdnS0hSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIybHVkRU52Ykc5eVZIbHdaU2tnZTF4dUlDQWdJQ0FnWTJGelpTQW5jMmx1WjJ4bEp6b2dlMXh1SUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLSFJvYVhNdWIzQjBhVzl1Y3k1cFkyOXVWSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SU9TOXYrZVVxQ0JqYkdGemMxeHVJQ0FnSUNBZ0lDQWdJR05oYzJVZ0oyWnZiblJmWTJ4aGMzTW5PaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFTQmpiR0Z6Y3oxY0lpUjdkR2hwY3k1dmNIUnBiMjV6TG1samIyNURiR0Z6YzMxY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsUFZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ0pIdHZjSFJwYjI1ekxtbGpiMjVEYjJ4dmNuMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SUNSN2IzQjBhVzl1Y3k1cFkyOXVVMmw2WlZzd1hYMXdlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0JnWEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQzh2SU9TOXYrZVVxQ0J6ZG1kY2JpQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkemVXMWliMnduT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThjM1puSUdOc1lYTnpQVndpYVdOdmJpMXplVzFpYjJ4Y0lpQmhjbWxoTFdocFpHUmxiajFjSW5SeWRXVmNJajVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4ZFhObElIaHNhVzVyT21oeVpXWTlYQ0lrZTNSb2FYTXViM0IwYVc5dWN5NXBZMjl1VTNsdFltOXNmVndpSUM4K1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmMzWm5QbHh1SUNBZ0lDQWdJQ0FnSUNBZ1lGeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBdkx5RGt2Yi9ubEtnZ2RXNXBZMjlrWlZ4dUlDQWdJQ0FnSUNBZ0lHTmhjMlVnSjNWdWFXTnZaR1VuT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQThhVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zWVhOelBWd2lKSHQwYUdsekxtOXdkR2x2Ym5NdWFXTnZia05zWVhOemZWd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVOVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ykc5eU9pQWtlMjl3ZEdsdmJuTXVhV052YmtOdmJHOXlmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmJuUXRjMmw2WlRvZ0pIdHZjSFJwYjI1ekxtbGpiMjVUYVhwbFd6QmRmWEI0TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDUjdkR2hwY3k1dmNIUnBiMjV6TG1samIyNVZibWxqYjJSbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyaytYRzRnSUNBZ0lDQWdJQ0FnSUNCZ1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQmpZWE5sSUNkelpXZHRaVzUwWldRbk9pQjdYRzRnSUNBZ0lDQWdJSE4zYVhSamFDQW9kR2hwY3k1dmNIUnBiMjV6TG1samIyNVVlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdMeThnNUwyLzU1U29JR05zWVhOelhHNGdJQ0FnSUNBZ0lDQWdZMkZ6WlNBblptOXVkRjlqYkdGemN5YzZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM005WENJa2UzUm9hWE11YjNCMGFXOXVjeTVwWTI5dVEyeGhjM045WENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRIbHNaVDFjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0k2SUNSN2RHaHBjeTVuWlhSVFpXZHRaVzUwWldSTllYSnJaWEpEYjJ4dmNpaGtZWFJoS1gwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJQ1I3YjNCMGFXOXVjeTVwWTI5dVUybDZaVnN3WFgxd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQmdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDOHZJT1M5ditlVXFDQnpkbWRjYmlBZ0lDQWdJQ0FnSUNCallYTmxJQ2R6ZVcxaWIyd25PaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGMzWm5JR05zWVhOelBWd2lhV052YmkxemVXMWliMnhjSWlCaGNtbGhMV2hwWkdSbGJqMWNJblJ5ZFdWY0lqNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThkWE5sSUhoc2FXNXJPbWh5WldZOVhDSWtlM1JvYVhNdWIzQjBhVzl1Y3k1cFkyOXVVM2x0WW05c2ZWd2lJQzgrWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YzNablBseHVJQ0FnSUNBZ0lDQWdJQ0FnWUZ4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0F2THlEa3ZiL25sS2dnZFc1cFkyOWtaVnh1SUNBZ0lDQWdJQ0FnSUdOaGMyVWdKM1Z1YVdOdlpHVW5PaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBOGFWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnNZWE56UFZ3aUpIdDBhR2x6TG05d2RHbHZibk11YVdOdmJrTnNZWE56ZlZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U5WENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiRzl5T2lBa2UzUm9hWE11WjJWMFUyVm5iV1Z1ZEdWa1RXRnlhMlZ5UTI5c2IzSW9aR0YwWVNsOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl1ZEMxemFYcGxPaUFrZTI5d2RHbHZibk11YVdOdmJsTnBlbVZiTUYxOWNIZzdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYQ0pjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0ErWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSkh0MGFHbHpMbTl3ZEdsdmJuTXVhV052YmxWdWFXTnZaR1Y5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRHd2YVQ1Y2JpQWdJQ0FnSUNBZ0lDQWdJR0JjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdSbFptRjFiSFE2SUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Z4dUlDQWdJQ0FnSUNBZ0lHQnlaVzVrWlhKUWIybHVkRU52Ykc5eVZIbHdaU0RrdUkzbWxLL21qSUZjSWlSN2RHaHBjeTV2Y0hScGIyNXpMbkpsYm1SbGNsQnZhVzUwUTI5c2IzSlVlWEJsZlZ3aVlGeHVJQ0FnSUNBZ0lDQXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1kyRmphR1ZUWldkdFpXNTBVR0Z5WVcxektDa2dlMXh1SUNBZ0lHTnZibk4wSUhObFoyMWxiblJsWkV4bGJtZDBhQ0E5SUhSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkRiMnh2Y25NdWJHVnVaM1JvWEc0Z0lDQWdiR1YwSUcxaGVGWmhiQ0E5SUMxSmJtWnBibWwwZVZ4dUlDQWdJR3hsZENCdGFXNVdZV3dnUFNCSmJtWnBibWwwZVZ4dUlDQWdJR1p2Y2lBb1kyOXVjM1FnWkdGMFlTQnZaaUIwYUdsekxtUmhkR0ZNYVhOMEtTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCMllXd2dQU0JrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JCZEhSeVhWeHVJQ0FnSUNBZ2JXRjRWbUZzSUQwZ1RXRjBhQzV0WVhnb2JXRjRWbUZzTENCMllXd3BYRzRnSUNBZ0lDQnRhVzVXWVd3Z1BTQk5ZWFJvTG0xcGJpaHRhVzVXWVd3c0lIWmhiQ2xjYmlBZ0lDQjlYRzRnSUNBZ1kyOXVjM1FnYzNSbGNDQTlJQ2h0WVhoV1lXd2dMU0J0YVc1V1lXd2dLeUF4S1NBdklITmxaMjFsYm5SbFpFeGxibWQwYUZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnYldsdVZtRnNYRzRnSUNBZ2RHaHBjeTV6WldkdFpXNTBaV1JUZEdWd0lEMGdjM1JsY0Z4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWjJWMFUyVm5iV1Z1ZEdWa1RXRnlhMlZ5UTI5c2IzSW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQmpiMjV6ZENCMllXd2dQU0JrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JCZEhSeVhWeHVJQ0FnSUdOdmJuTjBJR052Ykc5eUlEMGdkR2hwY3k1dmNIUnBiMjV6TG5ObFoyMWxiblJsWkVOdmJHOXljMXRjYmlBZ0lDQWdJSEJoY25ObFNXNTBLQ2NuSUNzZ0tIWmhiQ0F0SUhSb2FYTXVjMlZuYldWdWRHVmtUV2x1S1NBdklIUm9hWE11YzJWbmJXVnVkR1ZrVTNSbGNDd2dNVEFwWEc0Z0lDQWdYVnh1SUNBZ0lISmxkSFZ5YmlCamIyeHZjbHh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdaMlYwVUc5d2RYQkRiMjUwWlc1MEtHUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJTa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlDY25YRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjaUE5UFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCZ0pIdDBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5ZlRvZ0pIdGtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISmRmV0JjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQjBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5SUQwOVBTQW5iMkpxWldOMEp5a2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHQWtlM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJdWJHRmlaV3g5T2lBa2UxeHVJQ0FnSUNBZ0lDQmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXVkbUZzZFdWZFhHNGdJQ0FnSUNCOVlGeHVJQ0FnSUgxY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdsamIyNURjbVZoZEdWR2RXNWpkR2x2YmloamJIVnpkR1Z5T2lCTUxrMWhjbXRsY25ORGJIVnpkR1Z5S1NCN1hHNGdJQ0FnY21WMGRYSnVJRXd1WkdsMlNXTnZiaWg3WEc0Z0lDQWdJQ0JvZEcxc09pQmdYRzRnSUNBZ0lDQWdQR1JwZGx4dUlDQWdJQ0FnSUNCemRIbHNaVDFjSWx4dUlDQWdJQ0FnSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURVd0pUdGNiaUFnSUNBZ0lDQWdJQ0J3YjNOcGRHbHZiam9nY21Wc1lYUnBkbVU3WEc0Z0lDQWdJQ0FnSUNBZ2QybGtkR2c2SURVd2NIZzdYRzRnSUNBZ0lDQWdJQ0FnYUdWcFoyaDBPaUExTUhCNE8xeHVJQ0FnSUNBZ0lDQmNJbHh1SUNBZ0lDQWdJQ0ErWEc0Z0lDQWdJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lDQWdJQ0J6ZEhsc1pUMWNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTlRBbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWW1GamEyZHliM1Z1WkRvZ0pIdHNhV2RvZEdWdUtIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVEyOXNiM0lwZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSGRwWkhSb09pQTFNSEI0TzF4dUlDQWdJQ0FnSUNBZ0lDQWdhR1ZwWjJoME9pQTFNSEI0TzF4dUlDQWdJQ0FnSUNBZ0lDQWdiM0JoWTJsMGVUb2dNQzQzTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjRzl6YVhScGIyNDZJR0ZpYzI5c2RYUmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHOXdPaUF3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1ZtZERvZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aVBseHVJQ0FnSUNBZ0lDQWdJRHhrYVhaY2JpQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bFBWd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHSnZjbVJsY2kxeVlXUnBkWE02SURVd0pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1ltRmphMmR5YjNWdVpEb2dKSHQwYUdsekxtOXdkR2x2Ym5NdWFXTnZia052Ykc5eWZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2QybGtkR2c2SURNeWNIZzdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGxhV2RvZERvZ016SndlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdiV0Z5WjJsdU9pQTVjSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJajVjYmlBZ0lDQWdJQ0FnSUNBOEwyUnBkajVjYmlBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJRHhrYVhaY2JpQWdJQ0FnSUNBZ0lDQnpkSGxzWlQxY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdWNGRDMWhiR2xuYmpvZ1kyVnVkR1Z5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR2x1WlMxb1pXbG5hSFE2SURNd2NIZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2IzTnBkR2x2YmpvZ1lXSnpiMngxZEdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYjNBNklEbHdlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxablE2SURsd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUhkcFpIUm9PaUF6TW5CNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYUdWcFoyaDBPaUF6TW5CNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSTZJSGRvYVhSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2lBeE5IQjRPMXh1SUNBZ0lDQWdJQ0FnSUZ3aVhHNGdJQ0FnSUNBZ0lDQWdQbHh1SUNBZ0lDQWdJQ0FnSUNSN1kyeDFjM1JsY2k1blpYUkRhR2xzWkVOdmRXNTBLQ2w5WEc0Z0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNBZ1lDeGNiaUFnSUNBZ0lHbGpiMjVUYVhwbE9pQmJOREFzSURRd1hTeGNiaUFnSUNCOUtWeHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdVRzlzZVdkdmJpQm1jbTl0SUNjdUwxQnZiSGxuYjI0blhHNXBiWEJ2Y25RZ1VHOXNlV2R2Ym5OTVlYbGxjaXdnZXlCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1eklIMGdabkp2YlNBbkxpOVFiMng1WjI5dWMweGhlV1Z5SjF4dWFXMXdiM0owSUhzZ1JHRjBZVXhwYzNSSmRHVnRMQ0JEYUdGdWJtVnNSblZ1WXlCOUlHWnliMjBnSnk0dUwyUmxabWx1YVhScGIyNXpKMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkhjbWxrYzB4aGVXVnlJR1Y0ZEdWdVpITWdVRzlzZVdkdmJuTk1ZWGxsY2lCN1hHNGdJSEJ5YVhaaGRHVWdjSEp2Y0UxaGVFeGxibWQwYURvZ2JuVnRZbVZ5WEc0Z0lHTnZibk4wY25WamRHOXlLRnh1SUNBZ0lHMWhjRG9nVEM1TllYQXNYRzRnSUNBZ1pHRjBZVXhwYzNRNklFUmhkR0ZNYVhOMFNYUmxiVnRkTEZ4dUlDQWdJRzl3ZEdsdmJuTTZJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJSE4xY0dWeUtHMWhjQ3dnWkdGMFlVeHBjM1FzSUc5d2RHbHZibk1zSUdOb1lXNXVaV3hHZFc1aktWeHVJQ0FnSUhSb2FYTXVjSEp2Y0UxaGVFeGxibWQwYUNBOUlDMHhYRzRnSUgxY2JpQWdjSFZpYkdsaklISmxaSEpoZHlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxteGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhoZVdWeUxuSmxiVzkyWlNncFhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWJHRjVaWElnUFNCMGFHbHpMbU52Ym1acFowZHlhV1JNWVhsbGNpZ3BYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNBdkx5QjBiMjlzZEdsd0lPYWNpZVdQcitpRHZlbWNnT2ltZ2VlYnRPYU9wZVd4bGVla3V1KzhqT21jZ09pbWdlV2NxQ0J3YjJ4NVoyOXVJT2EzdStXS29PV0lzT1djc09XYnZ1UzRpdVM1aStXUWp1YUpqZVdQcitTN3BlKzhqT2FKZ09TN3BlbWNnT2ltZ2VXN3R1aS9uK2l1dnVlOXJseHVJQ0FnSUhSb2FYTXVZMjl1Wm1sblZHOXZiSFJwY0NncFhHNGdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEc0Z0lDQWdJQ0IwYUdsekxucHZiMjFJWVc1a2JHVnlLQ2xjYmlBZ0lDQjlMQ0F5TURBcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhOY2JpQWdmVnh1SUNCd2RXSnNhV01nZEc5bloyeGxWRzl2YkhScGNDaDJhWE5wWW14bE9pQmliMjlzWldGdUtTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjeTVtYjNKRllXTm9LQ2h3YjJ4NVoyOXVLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9jRzlzZVdkdmJpNW5aWFJVYjI5c2RHbHdLQ2twSUh0Y2JpQWdJQ0FnSUNBZ2NHOXNlV2R2Ymk1blpYUlViMjlzZEdsd0tDa3VjMlYwVDNCaFkybDBlU2gyYVhOcFlteGxJRDhnTVNBNklEQXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndjbTkwWldOMFpXUWdhVzVwZEVWMlpXNTBLQ2tnZTF4dUlDQWdJSFJvYVhNdWJXRndMbTl1S0NkNmIyOXRKeXdnZEdocGN5NTZiMjl0U0dGdVpHeGxjaTVpYVc1a0tIUm9hWE1wS1Z4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTI5dVptbG5WRzl2YkhScGNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQk5ZWGhNWlc1bmRHZ2dQU0IwYUdsekxtZGxkRkJ5YjNCTllYaE1aVzVuZEdnb0tWeHVJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjRUYwZEhJcElIdGNiaUFnSUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQndiMng1WjI5dUxtSnBibVJVYjI5c2RHbHdLSFJvYVhNdVoyVjBWRzl2YkZScGNFTnZiblJsYm5Rb2NHOXNlV2R2Ymk1blpYUkVZWFJoS0NrcExDQjdYRzRnSUNBZ0lDQWdJQ0FnY0dWeWJXRnVaVzUwT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUdScGNtVmpkR2x2YmpvZ0oyTmxiblJsY2ljc1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndjbWwyWVhSbElHTnZibVpwWjBkeWFXUk1ZWGxsY2lncElIdGNiaUFnSUNCMGFHbHpMbkJ2YkhsbmIyNU1ZWGxsY2lBOUlFd3ViR0Y1WlhKSGNtOTFjQ2dwWEc0Z0lDQWdkR2hwY3k1d2IyeDVaMjl1Y3lBOUlIUm9hWE11Y0c5c2VXZHZibk11YldGd0tDaHdiMng1WjI5dUtTQTlQaUI3WEc0Z0lDQWdJQ0JzWlhRZ1kyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZMjlzYjNKY2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlVRzlzZVdkdmJrTnZiRzl5Vkhsd1pTQTlQVDBnSjNObFoyMWxiblJsWkNjcElIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJZ1BTQjBhR2x6TG1kbGRGTmxaMjFsYm5SbFpGQnZiSGxuYjI1RGIyeHZjaWh3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR052Ym5OMElHOXdkR2x2Ym5NNklFd3VVRzlzZVd4cGJtVlBjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2dkR2hwY3k1dmNIUnBiMjV6TENCN1hHNGdJQ0FnSUNBZ0lHTnZiRzl5TEZ4dUlDQWdJQ0FnZlNsY2JpQWdJQ0FnSUM4dklPbUhqZWFXc09XNmxPZVVxQ0J2Y0hScGIyNXpYRzRnSUNBZ0lDQmpiMjV6ZENCdVpYZFFiMng1WjI5dUlEMGdibVYzSUZCdmJIbG5iMjRvY0c5c2VXZHZiaTVuWlhSTVlYUk1ibWR6S0Nrc0lHOXdkR2x2Ym5NcFhHNGdJQ0FnSUNCdVpYZFFiMng1WjI5dUxuTmxkRVJoZEdFb2NHOXNlV2R2Ymk1blpYUkVZWFJoS0NrcFhHNGdJQ0FnSUNCdVpYZFFiMng1WjI5dUxtOXVLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdMeThnZEdocGN5NXdiMng1WjI5dVEyeHBZMnRJWVc1a2JHVnlLSEJ2YkhsbmIyNHBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1VHOXNlV2R2Ymk1aWFXNWtVRzl3ZFhBb2RHaHBjeTVuWlhSUWIzQjFjRU52Ym5SbGJuUW9ibVYzVUc5c2VXZHZiaTVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WMGRYSnVJRzVsZDFCdmJIbG5iMjVjYmlBZ0lDQjlLVnh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVUR0Y1WlhJdVlXUmtUR0Y1WlhJb2NHOXNlV2R2YmlsY2JpQWdJQ0I5S1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5CdmJIbG5iMjVNWVhsbGNseHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ2VtOXZiVWhoYm1Sc1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2NHOXNlV2R2YmlBOUlIUm9hWE11Y0c5c2VXZHZibk5iTUYxY2JpQWdJQ0JwWmlBb0lYQnZiSGxuYjI0cElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5SdloyZHNaVlJ2YjJ4MGFYQW9YRzRnSUNBZ0lDQjBhR2x6TG1kbGRGSmxZM1JoYm1kc1pWZHBaSFJvS0hCdmJIbG5iMjRwSUQ1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWlhSVWIyOXNkR2x3VFdGNFYybGtkR2dvZEdocGN5NXdjbTl3VFdGNFRHVnVaM1JvS1Z4dUlDQWdJQ2xjYmlBZ2ZWeHVJQ0J3Y21sMllYUmxJR2RsZEZKbFkzUmhibWRzWlZkcFpIUm9LSEJ2YkhsbmIyNDZJRkJ2YkhsbmIyNHBJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWJHRjBURzVuVkc5TVlYbGxjbEJ2YVc1MEtIQnZiSGxuYjI0dVoyVjBRbTkxYm1SektDa3VaMlYwVG05eWRHaEZZWE4wS0NrcExuZ2dMVnh1SUNBZ0lDQWdkR2hwY3k1dFlYQXViR0YwVEc1blZHOU1ZWGxsY2xCdmFXNTBLSEJ2YkhsbmIyNHVaMlYwUW05MWJtUnpLQ2t1WjJWMFUyOTFkR2hYWlhOMEtDa3BMbmhjYmlBZ0lDQXBYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJVYjI5c2RHbHdUV0Y0VjJsa2RHZ29kR1Y0ZEV4bGJtZDBhRG9nYm5WdFltVnlLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUmxlSFJNWlc1bmRHZ2dLaUF4TWlBcklERTBYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJRY205d1RXRjRUR1Z1WjNSb0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhCeWIzQWdQVnh1SUNBZ0lDQWdkSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElnUFQwOUlDZHpkSEpwYm1jblhHNGdJQ0FnSUNBZ0lEOGdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2x4dUlDQWdJQ0FnSUNBNklIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEl1ZG1Gc2RXVmNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdiMng1WjI5dWMxeHVJQ0FnSUNBZ0xtMWhjQ2dvY0c5c2VXZHZiaWtnUFQ0Z1lDUjdjRzlzZVdkdmJpNW5aWFJFWVhSaEtDbGJjSEp2Y0YxOVlDNXNaVzVuZEdncFhHNGdJQ0FnSUNBdWNtVmtkV05sS0Nod2NtVjJMQ0JqZFhKeUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJOWVhSb0xtMWhlQ2h3Y21WMkxDQmpkWEp5S1Z4dUlDQWdJQ0FnZlN3Z01DbGNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdElIMGdabkp2YlNBbkxpNHZaR1ZtYVc1cGRHbHZibk1uWEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ2YkhsbmIyNGdaWGgwWlc1a2N5Qk1MbEJ2YkhsbmIyNGdlMXh1SUNBdkx5QjBjMnhwYm5RNlpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VNmRtRnlhV0ZpYkdVdGJtRnRaVnh1SUNCd2NtbDJZWFJsSUY5ZlpHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdFhHNGdJR052Ym5OMGNuVmpkRzl5S0Z4dUlDQWdJR3hoZEd4dVozTTZYRzRnSUNBZ0lDQjhJRXd1VEdGMFRHNW5SWGh3Y21WemMybHZibHRkWEc0Z0lDQWdJQ0I4SUV3dVRHRjBURzVuUlhod2NtVnpjMmx2Ymx0ZFcxMWNiaUFnSUNBZ0lId2dUQzVNWVhSTWJtZEZlSEJ5WlhOemFXOXVXMTFiWFZ0ZExGeHVJQ0FnSUc5d2RHbHZibk0vT2lCTUxsQnZiSGxzYVc1bFQzQjBhVzl1YzF4dUlDQXBJSHRjYmlBZ0lDQnpkWEJsY2loc1lYUnNibWR6TENCdmNIUnBiMjV6S1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ6WlhSRVlYUmhLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2tnZTF4dUlDQWdJSFJvYVhNdVgxOWtZWFJoSUQwZ1pHRjBZVnh1SUNCOVhHNGdJSEIxWW14cFl5Qm5aWFJFWVhSaEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlmWkdGMFlWeHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdleUJzYVdkb2RHVnVMQ0JrWVhKclpXNGdmU0JtY205dElDY3VMaTkxZEdsc2N5OXBibVJsZUNkY2JtbHRjRzl5ZENCN0lFUmhkR0ZNYVhOMFNYUmxiU3dnUTJoaGJtNWxiRVoxYm1NZ2ZTQm1jbTl0SUNjdUxpOWtaV1pwYm1sMGFXOXVjeWRjYm1sdGNHOXlkQ0JRYjJ4NVoyOXVJR1p5YjIwZ0p5NHZVRzlzZVdkdmJpZGNibHh1THlvcUlPYTRzdWFmayttaW5PaUpzdWFndCtXOGp5RGxqWlhvaWJKODVZaUc1cTYxSUNvdlhHNTBlWEJsSUZCdmJIbG5iMjVNWVhsbGNsSmxibVJsY2tOdmJHOXlWSGx3WlNBOUlDZHphVzVuYkdVbklId2dKM05sWjIxbGJuUmxaQ2RjYm5SNWNHVWdRMjlzYjNKTmIyUmxJRDBnSjJSaGNtdGxiaWNnZkNBbmJHbG5hSFJsYmljZ2ZDQW5ibTl5YldGc0oxeHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQlFiMng1WjI5dVRHRjVaWEpQY0hScGIyNXpJR1Y0ZEdWdVpITWdUQzVRYjJ4NWJHbHVaVTl3ZEdsdmJuTWdlMXh1SUNCeVpXNWtaWEpRYjJ4NVoyOXVRMjlzYjNKVWVYQmxPaUJRYjJ4NVoyOXVUR0Y1WlhKU1pXNWtaWEpEYjJ4dmNsUjVjR1ZjYmx4dUlDQXZLaW9nY0c5d2RYQWc1YkdWNTZTNjVhMlg1cTYxSUNvdlhHNGdJSEJ2Y0hWd1FYUjBjajg2SUhOMGNtbHVaeUI4SUhzZ2JHRmlaV3c2SUhOMGNtbHVaenNnZG1Gc2RXVTZJR0Z1ZVNCOVhHNGdJQzhxS2lCMGIyOXNkR2x3SU9XeGxlZWt1dVd0bCthdXRTQXFMMXh1SUNCMGIyOXNkR2x3UVhSMGNqODZJSE4wY21sdVoxeHVYRzRnSUc5d1lXTnBkSGsvT2lCdWRXMWlaWEpjYmx4dUlDQXZLaW9nNVlpRzVxNjE1cml5NXArVDU3dWY2SzZoNWEyWDVxNjFJQ292WEc0Z0lITmxaMjFsYm5SbFpFRjBkSEkvT2lCemRISnBibWRjYmlBZ2MyVm5iV1Z1ZEdWa1EyOXNiM0p6UHpvZ2MzUnlhVzVuVzExY2JuMWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmJIbG5iMjV6VEdGNVpYSWdlMXh1SUNCd2RXSnNhV01nZEhsd1pUb2djM1J5YVc1blhHNWNiaUFnY0hKdmRHVmpkR1ZrSUhacGMybGliR1U2SUdKdmIyeGxZVzVjYmlBZ2NISnZkR1ZqZEdWa0lHeGhlV1Z5T2lCTUxreGhlV1Z5UjNKdmRYQmNibHh1SUNCd2NtOTBaV04wWldRZ2JXRndPaUJNTGsxaGNGeHVJQ0J3Y205MFpXTjBaV1FnWkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRYRzRnSUhCeWIzUmxZM1JsWkNCdmNIUnBiMjV6T2lCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1elhHNGdJSEJ5YjNSbFkzUmxaQ0JqYUdGdWJtVnNSblZ1WXpvZ1EyaGhibTVsYkVaMWJtTmNiaUFnY0hKdmRHVmpkR1ZrSUhObFoyMWxiblJsWkUxcGJqb2diblZ0WW1WeVhHNGdJSEJ5YjNSbFkzUmxaQ0J6WldkdFpXNTBaV1JUZEdWd09pQnVkVzFpWlhKY2JpQWdjSEp2ZEdWamRHVmtJSEJ2YkhsbmIyNXpPaUJRYjJ4NVoyOXVXMTFjYmlBZ2NISnZkR1ZqZEdWa0lHWnZZM1Z6WldSUWIyeDVaMjl1T2lCUWIyeDVaMjl1WEc0Z0lIQnliM1JsWTNSbFpDQm1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbG5iMjQ2SUZCdmJIbG5iMjVjYmlBZ2NISnZkR1ZqZEdWa0lIQnZiSGxuYjI1TVlYbGxjam9nVEM1TVlYbGxja2R5YjNWd1hHNWNiaUFnWTI5dWMzUnlkV04wYjNJb1hHNGdJQ0FnYldGd09pQk1MazFoY0N4Y2JpQWdJQ0JrWVhSaFRHbHpkRG9nUkdGMFlVeHBjM1JKZEdWdFcxMHNYRzRnSUNBZ2IzQjBhVzl1Y3pvZ1VHOXNlV2R2Ymt4aGVXVnlUM0IwYVc5dWN5eGNiaUFnSUNCamFHRnVibVZzUm5WdVl6b2dRMmhoYm01bGJFWjFibU5jYmlBZ0tTQjdYRzRnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRTl3ZEdsdmJuTTZJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk1nUFNCN1hHNGdJQ0FnSUNCd2IzQjFjRUYwZEhJNklIc2diR0ZpWld3NklDZmxrSTNucDdBbkxDQjJZV3gxWlRvZ0oyNWhiV1VuSUgwc1hHNGdJQ0FnSUNCMGIyOXNkR2x3UVhSMGNqb2dKMjVoYldVbkxGeHVJQ0FnSUNBZ1kyOXNiM0k2SUNjak16TTRPRVpHSnl4Y2JpQWdJQ0FnSUdacGJHdzZJSFJ5ZFdVc1hHNGdJQ0FnSUNCbWFXeHNRMjlzYjNJNklDY2pNek00T0VaR0p5eGNiaUFnSUNBZ0lIZGxhV2RvZERvZ01TeGNiaUFnSUNBZ0lHOXdZV05wZEhrNklERXNYRzRnSUNBZ0lDQm1hV3hzVDNCaFkybDBlVG9nTUM0MUxGeHVJQ0FnSUNBZ2NtVnVaR1Z5VUc5c2VXZHZia052Ykc5eVZIbHdaVG9nSjNOcGJtZHNaU2NzWEc0Z0lDQWdJQ0J6WldkdFpXNTBaV1JEYjJ4dmNuTTZJRnNuSXpNek9EaEdSaWRkTEZ4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5SNWNHVWdQU0FuY0c5c2VXZHZiaWRjYmlBZ0lDQjBhR2x6TG0xaGNDQTlJRzFoY0Z4dUlDQWdJSFJvYVhNdVpHRjBZVXhwYzNRZ1BTQmtZWFJoVEdsemRGeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5QTlJRTlpYW1WamRDNWhjM05wWjI0b2UzMHNJR1JsWm1GMWJIUlBjSFJwYjI1ekxDQnZjSFJwYjI1ektWeHVJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1nUFNCamFHRnVibVZzUm5WdVkxeHVYRzRnSUNBZ2RHaHBjeTUyYVhOcFlteGxJRDBnZEhKMVpWeHVJQ0FnSUhSb2FYTXVjRzlzZVdkdmJuTWdQU0JiWFZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQWdQU0F4WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrVUc5c2VXZHZiaUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV2R2YmlBOUlHNTFiR3hjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaSEpoZHlodmNIUnBiMjV6UHpvZ1VHOXNlV2R2Ymt4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YVc1cGRFOXdkR2x2Ym5Nb2IzQjBhVzl1Y3lsY2JpQWdJQ0IwYUdsekxtbHVhWFJRYjJ4NVoyOXVjeWdwWEc0Z0lDQWdkR2hwY3k1cGJtbDBSWFpsYm5Rb0tWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxaSEpoZHlncFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhKbFpISmhkeWdwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11ZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGhlV1Z5TG5KbGJXOTJaU2dwWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11YkdGNVpYSWdQU0IwYUdsekxtTnZibVpwWjFCdmJIbG5iMjVNWVhsbGNpZ3BYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCeVpYUjFjbTRnZEdocGMxeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCbWFYUkNiM1Z1WkhNb0tTQjdYRzRnSUNBZ2RHaHBjeTV0WVhBdVptbDBRbTkxYm1SektIUm9hWE11WjJWMFFtOTFibVJ6S0Nrc0lIc2djR0ZrWkdsdVp6b2dXekl3TENBeU1GMGdmU2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMlYwUW05MWJtUnpLQ2s2SUV3dVRHRjBURzVuUW05MWJtUnpSWGh3Y21WemMybHZiaUI3WEc0Z0lDQWdhV1lnS0hSb2FYTXVjRzlzZVdkdmJuTXViR1Z1WjNSb0lEdzlJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtMWhjQzVuWlhSQ2IzVnVaSE1vS1Z4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3YjJ4NVoyOXVjeTV5WldSMVkyVW9YRzRnSUNBZ0lDQW9jSEpsZGl3Z1kzVnljaWtnUFQ0Z2NISmxkaTVsZUhSbGJtUW9ZM1Z5Y2k1blpYUkNiM1Z1WkhNb0tTa3NYRzRnSUNBZ0lDQjBhR2x6TG5CdmJIbG5iMjV6V3pCZExtZGxkRUp2ZFc1a2N5Z3BYRzRnSUNBZ0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa1pYTjBjbTk1S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0cElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVLVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndkV0pzYVdNZ2RHOW5aMnhsVm1semFXSnNaU2gyYVhOcFlteGxPaUJpYjI5c1pXRnVLU0I3WEc0Z0lDQWdkR2hwY3k1MmFYTnBZbXhsSUQwZ2RtbHphV0pzWlZ4dUlDQWdJR2xtSUNnaGRHaHBjeTVzWVhsbGNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMmFYTnBZbXhsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1aFpHUk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXZHZiaTV5WlcxdmRtVW9LVnh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVjbVZ0YjNabFRHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY0hWaWJHbGpJR05vWVc1blpVTnZiRzl5S0dOdmJHOXlPaUJ6ZEhKcGJtY3BJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk11Wm1sc2JFTnZiRzl5SUQwZ1kyOXNiM0pjYmlBZ0lDQjBhR2x6TG5KbFpISmhkeWdwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSEJwZEdOb0tHbGtPaUJ6ZEhKcGJtY3BJSHRjYmlBZ0lDQjBhR2x6TG5CdmJIbG5iMjV6TG1admNrVmhZMmdvS0hCdmJIbG5iMjRwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2h3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LUzVwWkNBOVBUMGdhV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVRMnhwWTJ0SVlXNWtiR1Z5S0hCdmJIbG5iMjRzSUhSeWRXVXBYRzRnSUNBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcFhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lHbHVhWFJGZG1WdWRDZ3BJSHQ5WEc0Z0lIQnliM1JsWTNSbFpDQm5aWFJVYjI5c1ZHbHdRMjl1ZEdWdWRDaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQnlaWFIxY200Z0p5Y2dLeUJrWVhSaFczUm9hWE11YjNCMGFXOXVjeTUwYjI5c2RHbHdRWFIwY2wxY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1oyVjBVRzl3ZFhCRGIyNTBaVzUwS0dSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlNrZ2UxeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUNjblhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGVYQmxiMllnZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJnSkh0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlmVG9nSkh0a1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhKZGZXQmNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCMGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlJRDA5UFNBbmIySnFaV04wSnlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdBa2UzUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEl1YkdGaVpXeDlPaUFrZTF4dUlDQWdJQ0FnSUNCa1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJdWRtRnNkV1ZkWEc0Z0lDQWdJQ0I5WUZ4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWTJGamFHVlRaV2R0Wlc1MFVHRnlZVzF6S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSE5sWjIxbGJuUmxaRXhsYm1kMGFDQTlJSFJvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSRGIyeHZjbk11YkdWdVozUm9YRzRnSUNBZ2JHVjBJRzFoZUZaaGJDQTlJQzFKYm1acGJtbDBlVnh1SUNBZ0lHeGxkQ0J0YVc1V1lXd2dQU0JKYm1acGJtbDBlVnh1SUNBZ0lHWnZjaUFvWTI5dWMzUWdaR0YwWVNCdlppQjBhR2x6TG1SaGRHRk1hWE4wS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0IyWVd3Z1BTQmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkJkSFJ5WFZ4dUlDQWdJQ0FnYldGNFZtRnNJRDBnVFdGMGFDNXRZWGdvYldGNFZtRnNMQ0IyWVd3cFhHNGdJQ0FnSUNCdGFXNVdZV3dnUFNCTllYUm9MbTFwYmlodGFXNVdZV3dzSUhaaGJDbGNiaUFnSUNCOVhHNGdJQ0FnWTI5dWMzUWdjM1JsY0NBOUlDaHRZWGhXWVd3Z0xTQnRhVzVXWVd3Z0t5QXhLU0F2SUhObFoyMWxiblJsWkV4bGJtZDBhRnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVFdsdUlEMGdiV2x1Vm1Gc1hHNGdJQ0FnZEdocGN5NXpaV2R0Wlc1MFpXUlRkR1Z3SUQwZ2MzUmxjRnh1SUNCOVhHNGdJSEJ5YjNSbFkzUmxaQ0JuWlhSVFpXZHRaVzUwWldSUWIyeDVaMjl1UTI5c2IzSW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQmpiMjV6ZENCMllXd2dQU0JrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JCZEhSeVhWeHVJQ0FnSUdOdmJuTjBJR052Ykc5eUlEMGdkR2hwY3k1dmNIUnBiMjV6TG5ObFoyMWxiblJsWkVOdmJHOXljMXRjYmlBZ0lDQWdJSEJoY25ObFNXNTBLQ2NuSUNzZ0tIWmhiQ0F0SUhSb2FYTXVjMlZuYldWdWRHVmtUV2x1S1NBdklIUm9hWE11YzJWbmJXVnVkR1ZrVTNSbGNDd2dNVEFwWEc0Z0lDQWdYVnh1SUNBZ0lISmxkSFZ5YmlCamIyeHZjbHh1SUNCOVhHNGdJSEJ5YjNSbFkzUmxaQ0J3YjJ4NVoyOXVRMnhwWTJ0SVlXNWtiR1Z5S0hCdmJIbG5iMjQ2SUZCdmJIbG5iMjRzSUdacGRFSnZkVzVrY3o4NklHSnZiMnhsWVc0cElIdGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUlFiMng1WjI5dUlEMGdjRzlzZVdkdmJseHVJQ0FnSUM4dklPV0lvT21acE9XSmplUzRnT1M0cWlCbWIyTjFjMXh1SUNBZ0lHbG1JQ2gwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXZHZiaWtnZTF4dUlDQWdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbG5iMjR1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlYRzRnSUNBZ0x5OGc1NVNmNW9pUTViMlQ1WW1OSUdadlkzVnpYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0Z1BTQnVaWGNnVUc5c2VXZHZiaWh3YjJ4NVoyOXVMbWRsZEV4aGRFeHVaM01vS1N3Z2UxeHVJQ0FnSUNBZ1kyOXNiM0k2SUNjak16TTRPRVpHSnl4Y2JpQWdJQ0FnSUdacGJHeERiMnh2Y2pvZ2RHaHBjeTVuWlhSRGIyeHZjaWh3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2tzWEc0Z0lDQWdmU2xjYmlBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVVRzlzZVdkdmJpNWhaR1JVYnloMGFHbHpMbTFoY0NsY2JseHVJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsUWIyeDVaMjl1WEc0Z0lDQWdJQ0F1WW1sdVpGQnZjSFZ3S0hSb2FYTXVaMlYwVUc5d2RYQkRiMjUwWlc1MEtIQnZiSGxuYjI0dVoyVjBSR0YwWVNncEtTbGNiaUFnSUNBZ0lDNXZjR1Z1VUc5d2RYQW9LVnh1WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2YkhsbmIyNHViMjRvSjNCdmNIVndZMnh2YzJVbkxDQW9LU0E5UGlCN1hHNGdJQ0FnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV2R2Ymk1eVpXMXZkbVVvS1Z4dUlDQWdJSDBwWEc0Z0lDQWdjRzlzZVdkdmJpNWpiRzl6WlZSdmIyeDBhWEFvS1Z4dVhHNGdJQ0FnZEdocGN5NXRZWEF1Y0dGdVZHOG9kR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2YkhsbmIyNHVaMlYwUTJWdWRHVnlLQ2twWEc0Z0lDQWdhV1lnS0dacGRFSnZkVzVrY3lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdVptbDBRbTkxYm1SektIQnZiSGxuYjI0dVoyVjBRbTkxYm1SektDa3BYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1vSjI5dUxXTnNhV05yTFhCdmJIbG5iMjRuTENCd2IyeDVaMjl1S1Z4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCcGJtbDBUM0IwYVc5dWN5aHZjSFJwYjI1ek9pQlFiMng1WjI5dVRHRjVaWEpQY0hScGIyNXpLU0I3WEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWgwYUdsekxtOXdkR2x2Ym5Nc0lHOXdkR2x2Ym5NcFhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lHbHVhWFJRYjJ4NVoyOXVjeWdwSUh0Y2JpQWdJQ0F2THlEbnZKUGxyWmdnYzJWbmJXVnVkQ0RubTdqbGhiUG1sYkRtamE1Y2JpQWdJQ0IwYUdsekxtTmhZMmhsVTJWbmJXVnVkRkJoY21GdGN5Z3BYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjeUE5SUZ0ZFhHNGdJQ0FnZEdocGN5NWtZWFJoVEdsemRDNW1iM0pGWVdOb0tDaGtZWFJoS1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCc1lYbGxjaUE5SUV3dVoyVnZTbE5QVGloa1lYUmhMbWRsYjIxbGRISjVLUzVuWlhSTVlYbGxjbk1vS1Zzd1hWeHVJQ0FnSUNBZ1kyOXVjM1FnY0c5c2VXZHZiaUE5SUc1bGR5QlFiMng1WjI5dUtDaHNZWGxsY2lCaGN5Qk1MbEJ2YkhsbmIyNHBMbWRsZEV4aGRFeHVaM01vS1NsY2JseHVJQ0FnSUNBZ2NHOXNlV2R2Ymk1elpYUkVZWFJoS0dSaGRHRXBYRzRnSUNBZ0lDQjBhR2x6TG5CdmJIbG5iMjV6TG5CMWMyZ29jRzlzZVdkdmJpbGNiaUFnSUNCOUtWeHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1kyOXVabWxuVUc5c2VXZHZia3hoZVdWeUtDa2dlMXh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZia3hoZVdWeUlEMGdUQzVzWVhsbGNrZHliM1Z3S0NsY2JpQWdJQ0IwYUdsekxuQnZiSGxuYjI1eklEMGdkR2hwY3k1d2IyeDVaMjl1Y3k1dFlYQW9LSEJ2YkhsbmIyNHBJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRzl3ZEdsdmJuTTZJRXd1VUc5c2VXeHBibVZQY0hScGIyNXpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDdmU3dnZEdocGN5NXZjSFJwYjI1ekxDQjdYRzRnSUNBZ0lDQWdJR052Ykc5eU9pQW5Jek16T0RoR1JpY3NYRzRnSUNBZ0lDQWdJR1pwYkd4RGIyeHZjam9nZEdocGN5NW5aWFJEYjJ4dmNpaHdiMng1WjI5dUxtZGxkRVJoZEdFb0tTa3NYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdMeThnNlllTjVwYXc1YnFVNTVTb0lHOXdkR2x2Ym5OY2JpQWdJQ0FnSUdOdmJuTjBJRzVsZDFCdmJIbG5iMjRnUFNCdVpYY2dVRzlzZVdkdmJpaHdiMng1WjI5dUxtZGxkRXhoZEV4dVozTW9LU3dnYjNCMGFXOXVjeWxjYmlBZ0lDQWdJRzVsZDFCdmJIbG5iMjR1YzJWMFJHRjBZU2h3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVkRzl2YkhScGNFRjBkSElwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNVRzlzZVdkdmJpNWlhVzVrVkc5dmJIUnBjQ2gwYUdsekxtZGxkRlJ2YjJ4VWFYQkRiMjUwWlc1MEtHNWxkMUJ2YkhsbmIyNHVaMlYwUkdGMFlTZ3BLU2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJRzVsZDFCdmJIbG5iMjR1YjI0b0oyTnNhV05ySnl3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2YkhsbmIyNURiR2xqYTBoaGJtUnNaWElvY0c5c2VXZHZiaWxjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0J5WlhSMWNtNGdibVYzVUc5c2VXZHZibHh1SUNBZ0lIMHBYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjeTVtYjNKRllXTm9LQ2h3YjJ4NVoyOXVLU0E5UGlCN1hHNGdJQ0FnSUNCMGFHbHpMbkJ2YkhsbmIyNU1ZWGxsY2k1aFpHUk1ZWGxsY2lod2IyeDVaMjl1S1Z4dUlDQWdJSDBwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y0c5c2VXZHZia3hoZVdWeVhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCblpYUkRiMnh2Y2loa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwc0lHMXZaR1UvT2lCRGIyeHZjazF2WkdVcElIdGNiaUFnSUNCc1pYUWdZMjlzYjNJZ1BTQjBhR2x6TG05d2RHbHZibk11WTI5c2IzSmNiaUFnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5KbGJtUmxjbEJ2YkhsbmIyNURiMnh2Y2xSNWNHVWdQVDA5SUNkelpXZHRaVzUwWldRbktTQjdYRzRnSUNBZ0lDQmpiMnh2Y2lBOUlIUm9hWE11WjJWMFUyVm5iV1Z1ZEdWa1VHOXNlV2R2YmtOdmJHOXlLR1JoZEdFcFhHNGdJQ0FnZlZ4dUlDQWdJSE4zYVhSamFDQW9iVzlrWlNrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0FuWkdGeWEyVnVKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JoY210bGJpaGpiMnh2Y2lsY2JpQWdJQ0FnSUdOaGMyVWdKMnhwWjJoMFpXNG5PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiR2xuYUhSbGJpaGpiMnh2Y2lsY2JpQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNseHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElIc2dSR0YwWVV4cGMzUkpkR1Z0SUgwZ1puSnZiU0FuTGk0dlpHVm1hVzVwZEdsdmJuTW5YRzVjYm1WNGNHOXlkQ0IwZVhCbElGQnZiSGxzYVc1bFRHRjBURzVuUlhod2NtVnpjMmx2YmlBOVhHNGdJSHdnVEM1TVlYUk1ibWRGZUhCeVpYTnphVzl1VzExY2JpQWdmQ0JNTGt4aGRFeHVaMFY0Y0hKbGMzTnBiMjViWFZ0ZFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYjJ4NWJHbHVaU0JsZUhSbGJtUnpJRXd1VUc5c2VXeHBibVVnZTF4dUlDQXZMeUIwYzJ4cGJuUTZaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVTZkbUZ5YVdGaWJHVXRibUZ0WlZ4dUlDQndjbWwyWVhSbElGOWZaR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRYRzRnSUdOdmJuTjBjblZqZEc5eUtHeGhkR3h1WjNNNklGQnZiSGxzYVc1bFRHRjBURzVuUlhod2NtVnpjMmx2Yml3Z2IzQjBhVzl1Y3o4NklFd3VVRzlzZVd4cGJtVlBjSFJwYjI1ektTQjdYRzRnSUNBZ2MzVndaWElvYkdGMGJHNW5jeXdnYjNCMGFXOXVjeWxjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjMlYwUkdGMFlTaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQjBhR2x6TGw5ZlpHRjBZU0E5SUdSaGRHRmNiaUFnZlZ4dUlDQndkV0pzYVdNZ1oyVjBSR0YwWVNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZYMlJoZEdGY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElIc2dSR0YwWVV4cGMzUkpkR1Z0TENCRGFHRnVibVZzUm5WdVl5QjlJR1p5YjIwZ0p5NHVMMlJsWm1sdWFYUnBiMjV6SjF4dWFXMXdiM0owSUZCdmJIbHNhVzVsYzB4aGVXVnlJR1p5YjIwZ0p5NHZVRzlzZVd4cGJtVnpUR0Y1WlhJblhHNWNiaThxS2lEbXVMTG1uNVBwb3B6b2liTG1vTGZsdkk4ZzVZMlY2SW15Zk9XSWh1YXV0U0FxTDF4dWRIbHdaU0JRYjJ4NWJHbHVaVXhoZVdWeVVtVnVaR1Z5UTI5c2IzSlVlWEJsSUQwZ0ozTnBibWRzWlNjZ2ZDQW5jMlZuYldWdWRHVmtKMXh1YVc1MFpYSm1ZV05sSUZCdmJIbHNhVzVsUW5WbVptVnlUR0Y1WlhKUGNIUnBiMjV6SUdWNGRHVnVaSE1nVEM1RGIzSnlhV1J2Y2s5d2RHbHZibk1nZTF4dUlDQnlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlRvZ1VHOXNlV3hwYm1WTVlYbGxjbEpsYm1SbGNrTnZiRzl5Vkhsd1pWeHVYRzRnSUM4cUtpQndiM0IxY0NEbHNaWG5wTHJsclpmbXJyVWdLaTljYmlBZ2NHOXdkWEJCZEhSeVB6b2djM1J5YVc1blhHNGdJQzhxS2lCMGIyOXNkR2x3SU9XeGxlZWt1dVd0bCthdXRTQXFMMXh1SUNCMGIyOXNkR2x3UVhSMGNqODZJSE4wY21sdVoxeHVYRzRnSUc5d1lXTnBkSGsvT2lCdWRXMWlaWEpjYmx4dUlDQXZLaW9nNVlpRzVxNjE1cml5NXArVDU3dWY2SzZoNWEyWDVxNjFJQ292WEc0Z0lITmxaMjFsYm5SbFpFRjBkSEkvT2lCemRISnBibWRjYmlBZ2MyVm5iV1Z1ZEdWa1EyOXNiM0p6UHpvZ2MzUnlhVzVuVzExY2JuMWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmJIbHNhVzVsYzBKMVptWmxja3hoZVdWeUlHVjRkR1Z1WkhNZ1VHOXNlV3hwYm1WelRHRjVaWElnZTF4dUlDQndkV0pzYVdNZ2RIbHdaVG9nYzNSeWFXNW5YRzRnSUhCeWIzUmxZM1JsWkNCdmNIUnBiMjV6T2lCUWIyeDViR2x1WlVKMVptWmxja3hoZVdWeVQzQjBhVzl1YzF4dUlDQmpiMjV6ZEhKMVkzUnZjaWhjYmlBZ0lDQnRZWEE2SUV3dVRXRndMRnh1SUNBZ0lHUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFN4Y2JpQWdJQ0J2Y0hScGIyNXpPaUJRYjJ4NWJHbHVaVUoxWm1abGNreGhlV1Z5VDNCMGFXOXVjeXhjYmlBZ0lDQmphR0Z1Ym1Wc1JuVnVZem9nUTJoaGJtNWxiRVoxYm1OY2JpQWdLU0I3WEc0Z0lDQWdjM1Z3WlhJb2JXRndMQ0JrWVhSaFRHbHpkQ3dnYjNCMGFXOXVjeXdnWTJoaGJtNWxiRVoxYm1NcFhHNGdJQ0FnWTI5dWMzUWdaR1ZtWVhWc2RFOXdkR2x2Ym5NNklGQnZiSGxzYVc1bFFuVm1abVZ5VEdGNVpYSlBjSFJwYjI1eklEMGdlMXh1SUNBZ0lDQWdjbVZ1WkdWeVVHOXNlV3hwYm1WRGIyeHZjbFI1Y0dVNklDZHphVzVuYkdVbkxGeHVJQ0FnSUNBZ2MyVm5iV1Z1ZEdWa1EyOXNiM0p6T2lCYkp5TXpNemc0UmtZblhTeGNiaUFnSUNBZ0lHTnZjbkpwWkc5eU9pQXhNREFzWEc0Z0lDQWdJQ0JqYjJ4dmNqb2dKeU16TXpnNFJrWW5MRnh1SUNBZ0lDQWdiM0JoWTJsMGVUb2dNQzQxTEZ4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5SNWNHVWdQU0FuY0c5c2VXeHBibVZDZFdabVpYSW5YRzRnSUNBZ2RHaHBjeTV0WVhBZ1BTQnRZWEJjYmlBZ0lDQjBhR2x6TG1SaGRHRk1hWE4wSUQwZ1pHRjBZVXhwYzNSY2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1elhHNGdJQ0FnZEdocGN5NWphR0Z1Ym1Wc1JuVnVZeUE5SUdOb1lXNXVaV3hHZFc1alhHNWNiaUFnSUNCMGFHbHpMblpwYzJsaWJHVWdQU0IwY25WbFhHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTWdQU0JiWFZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQWdQU0F4WEc0Z0lDQWdMeThnZEdocGN5NW1iMk4xYzJWa1VHOXNlV3hwYm1VZ1BTQnVkV3hzWEc1Y2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQmtaV1poZFd4MFQzQjBhVzl1Y3l3Z2IzQjBhVzl1Y3lsY2JpQWdmVnh1SUNCd2RXSnNhV01nWkhKaGR5aHZjSFJwYjI1elB6b2dVRzlzZVd4cGJtVkNkV1ptWlhKTVlYbGxjazl3ZEdsdmJuTXBJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk1nUFNCUFltcGxZM1F1WVhOemFXZHVLSFJvYVhNdWIzQjBhVzl1Y3l3Z2IzQjBhVzl1Y3lsY2JpQWdJQ0IwYUdsekxtbHVhWFJRYjJ4NWJHbHVaWE1vS1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbFpISmhkeWdwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSEpsWkhKaGR5Z3BJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXVkbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGFHbHpMbXhoZVdWeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG14aGVXVnlMbkpsYlc5MlpTZ3BYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViR0Y1WlhJZ1BTQjBhR2x6TG1OdmJtWnBaMUJ2Ykhsc2FXNWxRblZtWm1WeVRHRjVaWElvS1Z4dUlDQWdJSFJvYVhNdWJXRndMbUZrWkV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE5jYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdabWwwUW05MWJtUnpLQ2tnZTF4dUlDQWdJSFJvYVhNdWJXRndMbVpwZEVKdmRXNWtjeWgwYUdsekxtZGxkRUp2ZFc1a2N5Z3BLVnh1SUNCOVhHNGdJSEIxWW14cFl5Qm5aWFJDYjNWdVpITW9LVG9nVEM1TVlYUk1ibWRDYjNWdVpITkZlSEJ5WlhOemFXOXVJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXdiMng1YkdsdVpYTXViR1Z1WjNSb0lEdzlJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtMWhjQzVuWlhSQ2IzVnVaSE1vS1Z4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3YjJ4NWJHbHVaWE11Y21Wa2RXTmxLRnh1SUNBZ0lDQWdLSEJ5WlhZc0lHTjFjbklwSUQwK0lIQnlaWFl1WlhoMFpXNWtLR04xY25JdVoyVjBRbTkxYm1SektDa3BMRnh1SUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlhOYk1GMHVaMlYwUW05MWJtUnpLQ2xjYmlBZ0lDQXBYRzRnSUgxY2JpQWdjSFZpYkdsaklHTm9ZVzVuWlVOdmJHOXlLR052Ykc5eU9pQnpkSEpwYm1jcElIdGNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTXVZMjlzYjNJZ1BTQmpiMnh2Y2x4dUlDQWdJSFJvYVhNdWNtVmtjbUYzS0NsY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdOdmJtWnBaMUJ2Ykhsc2FXNWxRblZtWm1WeVRHRjVaWElvS1NCN1hHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpVeGhlV1Z5SUQwZ1RDNXNZWGxsY2tkeWIzVndLQ2xjYmlBZ0lDQjBhR2x6TG5CdmJIbHNhVzVsY3k1bWIzSkZZV05vS0Nod2IyeDViR2x1WlNrZ1BUNGdlMXh1SUNBZ0lDQWdjRzlzZVd4cGJtVXViMjRvSjJOc2FXTnJKeXdnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZiSGxzYVc1bFEyeHBZMnRJWVc1a2JHVnlLSEJ2Ykhsc2FXNWxLVnh1SUNBZ0lDQWdmU2xjYmlBZ0lDQWdJR052Ym5OMElHOXdkR2x2Ym5NNklGQnZiSGxzYVc1bFFuVm1abVZ5VEdGNVpYSlBjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloY2JpQWdJQ0FnSUNBZ2UzMHNYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzQjBhVzl1Y3l4Y2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJR052Ykc5eU9seHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2xCdmJIbHNhVzVsUTI5c2IzSlVlWEJsSUQwOVBTQW5jMmx1WjJ4bEoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBL0lIUm9hWE11YjNCMGFXOXVjeTVqYjJ4dmNseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBNklIUm9hWE11WjJWMFUyVm5iV1Z1ZEdWa1VHOXNlV3hwYm1WRGIyeHZjaWh3YjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2twTEZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBcFhHNWNiaUFnSUNBZ0lHTnZibk4wSUhCdmJIbHNhVzVsUW5WbVptVnlJRDBnVEM1amIzSnlhV1J2Y2loY2JpQWdJQ0FnSUNBZ0tIQnZiSGxzYVc1bExtZGxkRXhoZEV4dVozTW9LU0JoY3lCTUxreGhkRXh1WjF0ZEtTNXRZWEFvS0d4aGRFeHVaeWtnUFQ1Y2JpQWdJQ0FnSUNBZ0lDQk1MbXhoZEV4dVp5aGJiR0YwVEc1bkxteGhkQ3dnYkdGMFRHNW5MbXh1WjEwcFhHNGdJQ0FnSUNBZ0lDa3NYRzRnSUNBZ0lDQWdJRzl3ZEdsdmJuTmNiaUFnSUNBZ0lDbGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWRHOXZiSFJwY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnY0c5c2VXeHBibVZDZFdabVpYSXVZbWx1WkZSdmIyeDBhWEFvZEdocGN5NW5aWFJVYjI5c1ZHbHdRMjl1ZEdWdWRDaHdiMng1YkdsdVpTNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlV4aGVXVnlMbUZrWkV4aGVXVnlLSEJ2Ykhsc2FXNWxRblZtWm1WeUtWeHVJQ0FnSUgwcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNHOXNlV3hwYm1WTVlYbGxjbHh1SUNCOVhHNTlYRzRpTENKcGJYQnZjblFnZXlCRVlYUmhUR2x6ZEVsMFpXMHNJRU5vWVc1dVpXeEdkVzVqSUgwZ1puSnZiU0FuTGk0dlpHVm1hVzVwZEdsdmJuTW5YRzVwYlhCdmNuUWdVRzlzZVd4cGJtVXNJSHNnVUc5c2VXeHBibVZNWVhSTWJtZEZlSEJ5WlhOemFXOXVJSDBnWm5KdmJTQW5MaTlRYjJ4NWJHbHVaU2RjYm1sdGNHOXlkQ0I3SUdSaGNtdGxiaXdnYkdsbmFIUmxiaUI5SUdaeWIyMGdKeTR1TDNWMGFXeHpMMmx1WkdWNEoxeHVYRzR2S2lvZzVyaXk1cCtUNmFLYzZJbXk1cUMzNWJ5UElPV05sZWlKc256bGlJYm1yclVnS2k5Y2JuUjVjR1VnVUc5c2VXeHBibVZNWVhsbGNsSmxibVJsY2tOdmJHOXlWSGx3WlNBOUlDZHphVzVuYkdVbklId2dKM05sWjIxbGJuUmxaQ2RjYm5SNWNHVWdRMjlzYjNKTmIyUmxJRDBnSjJSaGNtdGxiaWNnZkNBbmJHbG5hSFJsYmljZ2ZDQW5ibTl5YldGc0oxeHVhVzUwWlhKbVlXTmxJRkJ2Ykhsc2FXNWxUR0Y1WlhKUGNIUnBiMjV6SUdWNGRHVnVaSE1nVEM1UWIyeDViR2x1WlU5d2RHbHZibk1nZTF4dUlDQnlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlRvZ1VHOXNlV3hwYm1WTVlYbGxjbEpsYm1SbGNrTnZiRzl5Vkhsd1pWeHVYRzRnSUM4cUtpQndiM0IxY0NEbHNaWG5wTHJsclpmbXJyVWdLaTljYmlBZ2NHOXdkWEJCZEhSeVB6b2djM1J5YVc1bklId2dleUJzWVdKbGJEb2djM1J5YVc1bk95QjJZV3gxWlRvZ1lXNTVJSDFjYmlBZ0x5b3FJSFJ2YjJ4MGFYQWc1YkdWNTZTNjVhMlg1cTYxSUNvdlhHNGdJSFJ2YjJ4MGFYQkJkSFJ5UHpvZ2MzUnlhVzVuWEc1Y2JpQWdiM0JoWTJsMGVUODZJRzUxYldKbGNseHVYRzRnSUM4cUtpRGxpSWJtcnJYbXVMTG1uNVBudTUvb3JxSGxyWmZtcnJVZ0tpOWNiaUFnYzJWbmJXVnVkR1ZrUVhSMGNqODZJSE4wY21sdVoxeHVJQ0J6WldkdFpXNTBaV1JEYjJ4dmNuTS9PaUJ6ZEhKcGJtZGJYVnh1ZlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVRzlzZVd4cGJtVnpUR0Y1WlhJZ2UxeHVJQ0J3ZFdKc2FXTWdkSGx3WlRvZ2MzUnlhVzVuWEc1Y2JpQWdjSEp2ZEdWamRHVmtJSFpwYzJsaWJHVTZJR0p2YjJ4bFlXNWNiaUFnY0hKdmRHVmpkR1ZrSUd4aGVXVnlPaUJNTGt4aGVXVnlSM0p2ZFhCY2JseHVJQ0J3Y205MFpXTjBaV1FnYldGd09pQk1MazFoY0Z4dUlDQndjbTkwWldOMFpXUWdaR0YwWVV4cGMzUTZJRVJoZEdGTWFYTjBTWFJsYlZ0ZFhHNGdJSEJ5YjNSbFkzUmxaQ0J2Y0hScGIyNXpPaUJRYjJ4NWJHbHVaVXhoZVdWeVQzQjBhVzl1YzF4dUlDQndjbTkwWldOMFpXUWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJSEJ5YjNSbFkzUmxaQ0J3YjJ4NWJHbHVaWE02SUZCdmJIbHNhVzVsVzExY2JpQWdjSEp2ZEdWamRHVmtJSE5sWjIxbGJuUmxaRTFwYmpvZ2JuVnRZbVZ5WEc0Z0lIQnliM1JsWTNSbFpDQnpaV2R0Wlc1MFpXUlRkR1Z3T2lCdWRXMWlaWEpjYmlBZ2NISnZkR1ZqZEdWa0lHWnZZM1Z6WldSUWIyeDViR2x1WlRvZ1VHOXNlV3hwYm1WY2JpQWdjSEp2ZEdWamRHVmtJR1p2WTNWelpXUkVhWE53YkdGNVVHOXNlV3hwYm1VNklGQnZiSGxzYVc1bFhHNGdJSEJ5YjNSbFkzUmxaQ0J3YjJ4NWJHbHVaVXhoZVdWeU9pQk1Ma3hoZVdWeVIzSnZkWEJjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9YRzRnSUNBZ2JXRndPaUJNTGsxaGNDeGNiaUFnSUNCa1lYUmhUR2x6ZERvZ1JHRjBZVXhwYzNSSmRHVnRXMTBzWEc0Z0lDQWdiM0IwYVc5dWN6b2dVRzlzZVd4cGJtVk1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJR052Ym5OMElHUmxabUYxYkhSUGNIUnBiMjV6T2lCUWIyeDViR2x1WlV4aGVXVnlUM0IwYVc5dWN5QTlJSHRjYmlBZ0lDQWdJR052Ykc5eU9pQW5Jek16T0RoR1JpY3NYRzRnSUNBZ0lDQnlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlRvZ0ozTnBibWRzWlNjc1hHNGdJQ0FnSUNCelpXZHRaVzUwWldSRGIyeHZjbk02SUZzbkl6TXpPRGhHUmlkZExGeHVJQ0FnSUNBZ2NHOXdkWEJCZEhSeU9pQjdJR3hoWW1Wc09pQW41WkNONTZld0p5d2dkbUZzZFdVNklDZHVZVzFsSnlCOUxGeHVJQ0FnSUNBZ2RHOXZiSFJwY0VGMGRISTZJQ2R1WVcxbEp5eGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NTBlWEJsSUQwZ0ozQnZiSGxzYVc1bEoxeHVJQ0FnSUhSb2FYTXViV0Z3SUQwZ2JXRndYRzRnSUNBZ2RHaHBjeTVrWVhSaFRHbHpkQ0E5SUdSaGRHRk1hWE4wWEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1pHVm1ZWFZzZEU5d2RHbHZibk1zSUc5d2RHbHZibk1wWEc0Z0lDQWdkR2hwY3k1amFHRnVibVZzUm5WdVl5QTlJR05vWVc1dVpXeEdkVzVqWEc1Y2JpQWdJQ0IwYUdsekxuWnBjMmxpYkdVZ1BTQjBjblZsWEc0Z0lDQWdkR2hwY3k1d2IyeDViR2x1WlhNZ1BTQmJYVnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVFdsdUlEMGdTVzVtYVc1cGRIbGNiaUFnSUNCMGFHbHpMbk5sWjIxbGJuUmxaRk4wWlhBZ1BTQXhYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtVRzlzZVd4cGJtVWdQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsSUQwZ2JuVnNiRnh1SUNCOVhHNGdJSEIxWW14cFl5QmtjbUYzS0c5d2RHbHZibk0vT2lCUWIyeDViR2x1WlV4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9kR2hwY3k1dmNIUnBiMjV6TENCdmNIUnBiMjV6S1Z4dUlDQWdJSFJvYVhNdWFXNXBkRkJ2Ykhsc2FXNWxjeWdwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y21Wa2NtRjNLQ2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjbVZrY21GM0tDa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NTJhWE5wWW14bEtTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSb2FYTXViR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YkdGNVpYSXVjbVZ0YjNabEtDbGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXNZWGxsY2lBOUlIUm9hWE11WTI5dVptbG5VRzlzZVd4cGJtVk1ZWGxsY2lncFhHNGdJQ0FnZEdocGN5NXRZWEF1WVdSa1RHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwYzF4dUlDQjlYRzRnSUhCMVlteHBZeUJtYVhSQ2IzVnVaSE1vS1NCN1hHNGdJQ0FnZEdocGN5NXRZWEF1Wm1sMFFtOTFibVJ6S0hSb2FYTXVaMlYwUW05MWJtUnpLQ2tzSUhzZ2NHRmtaR2x1WnpvZ1d6SXdMQ0F5TUYwZ2ZTbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1oyVjBRbTkxYm1SektDazZJRXd1VEdGMFRHNW5RbTkxYm1SelJYaHdjbVZ6YzJsdmJpQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdWNHOXNlV3hwYm1WekxteGxibWQwYUNBOFBTQXdLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dFlYQXVaMlYwUW05MWJtUnpLQ2xjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjRzlzZVd4cGJtVnpMbkpsWkhWalpTaGNiaUFnSUNBZ0lDaHdjbVYyTENCamRYSnlLU0E5UGlCd2NtVjJMbVY0ZEdWdVpDaGpkWEp5TG1kbGRFSnZkVzVrY3lncEtTeGNiaUFnSUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZ6V3pCZExtZGxkRUp2ZFc1a2N5Z3BYRzRnSUNBZ0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa1pYTjBjbTk1S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgxY2JpQWdmVnh1SUNCd2RXSnNhV01nZEc5bloyeGxWbWx6YVdKc1pTaDJhWE5wWW14bE9pQmliMjlzWldGdUtTQjdYRzRnSUNBZ2RHaHBjeTUyYVhOcFlteGxJRDBnZG1semFXSnNaVnh1SUNBZ0lHbG1JQ2doZEdocGN5NXNZWGxsY2lrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gyYVhOcFlteGxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzVoWkdSTVlYbGxjaWgwYUdsekxteGhlV1Z5S1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVVRzlzZVd4cGJtVXVjbVZ0YjNabEtDbGNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEIxWW14cFl5QmphR0Z1WjJWRGIyeHZjaWhqYjJ4dmNqb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpMbVpwYkd4RGIyeHZjaUE5SUdOdmJHOXlYRzRnSUNBZ2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNGdJSEIxWW14cFl5QndhWFJqYUNocFpEb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaWE11Wm05eVJXRmphQ2dvY0c5c2VXeHBibVVwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2h3YjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2t1YVdRZ1BUMDlJR2xrS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZEYkdsamEwaGhibVJzWlhJb2NHOXNlV3hwYm1Vc0lIUnlkV1VwWEc0Z0lDQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBYRzRnSUgxY2JpQWdjSEp2ZEdWamRHVmtJR2x1YVhSUWIyeDViR2x1WlhNb0tTQjdYRzRnSUNBZ0x5OGc1N3lUNWEyWUlITmxaMjFsYm5RZzU1dTQ1WVd6NXBXdzVvMnVYRzRnSUNBZ2RHaHBjeTVqWVdOb1pWTmxaMjFsYm5SUVlYSmhiWE1vS1Z4dVhHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTWdQU0IwYUdsekxtUmhkR0ZNYVhOMExtMWhjQ2dvWkdGMFlTa2dQVDRnZTF4dUlDQWdJQ0FnWTI5dWMzUWdiR0Y1WlhJZ1BTQk1MbWRsYjBwVFQwNG9aR0YwWVM1blpXOXRaWFJ5ZVNrdVoyVjBUR0Y1WlhKektDbGJNRjFjYmlBZ0lDQWdJQzh2SUd4bGRDQmpiMnh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTVqYjJ4dmNseHVJQ0FnSUNBZ0x5OGdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlNBOVBUMGdKM05sWjIxbGJuUmxaQ2NwSUh0Y2JpQWdJQ0FnSUM4dklDQWdZMjlzYjNJZ1BTQjBhR2x6TG1kbGRGTmxaMjFsYm5SbFpGQnZiSGxzYVc1bFEyOXNiM0lvWkdGMFlTbGNiaUFnSUNBZ0lDOHZJSDFjYmlBZ0lDQWdJR052Ym5OMElIQnZiSGxzYVc1bElEMGdibVYzSUZCdmJIbHNhVzVsS0Z4dUlDQWdJQ0FnSUNBb2JHRjVaWElnWVhNZ1RDNVFiMng1YkdsdVpTa3VaMlYwVEdGMFRHNW5jeWdwSUdGeklGQnZiSGxzYVc1bFRHRjBURzVuUlhod2NtVnpjMmx2Ymx4dUlDQWdJQ0FnS1Z4dVhHNGdJQ0FnSUNBdkx5RGxzSWJubTdqbGhiUGxnTHpudTVIbHJwcmxpTEFnYldGeWEyVnk1TGlLWEc0Z0lDQWdJQ0J3YjJ4NWJHbHVaUzV6WlhSRVlYUmhLR1JoZEdFcFhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCd2IyeDViR2x1WlZ4dUlDQWdJSDBwWEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdkbGRGTmxaMjFsYm5SbFpGQnZiSGxzYVc1bFEyOXNiM0lvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1RvZ2MzUnlhVzVuSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3dnUFNCa1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSQmRIUnlYVnh1SUNBZ0lHTnZibk4wSUdOdmJHOXlJRDBnZEdocGN5NXZjSFJwYjI1ekxuTmxaMjFsYm5SbFpFTnZiRzl5YzF0Y2JpQWdJQ0FnSUhCaGNuTmxTVzUwS0NjbklDc2dLSFpoYkNBdElIUm9hWE11YzJWbmJXVnVkR1ZrVFdsdUtTQXZJSFJvYVhNdWMyVm5iV1Z1ZEdWa1UzUmxjQ3dnTVRBcFhHNGdJQ0FnWFZ4dUlDQWdJSEpsZEhWeWJpQmpiMnh2Y2x4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCd2IyeDViR2x1WlVOc2FXTnJTR0Z1Wkd4bGNpaHdiMng1YkdsdVpUb2dVRzlzZVd4cGJtVXNJR1pwZEVKdmRXNWtjejg2SUdKdmIyeGxZVzRwSUh0Y2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSUWIyeDViR2x1WlNBOUlIQnZiSGxzYVc1bFhHNGdJQ0FnTHk4ZzVZaWc2Wm1rNVltTjVMaUE1TGlxSUdadlkzVnpYRzRnSUNBZ2FXWWdLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NWJHbHVaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsTG5KbGJXOTJaU2dwWEc0Z0lDQWdmVnh1SUNBZ0lDOHZJT2VVbithSWtPVzlrK1dKalNCbWIyTjFjMXh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1YkdsdVpTQTlJRzVsZHlCUWIyeDViR2x1WlNoY2JpQWdJQ0FnSUhCdmJIbHNhVzVsTG1kbGRFeGhkRXh1WjNNb0tTQmhjeUJRYjJ4NWJHbHVaVXhoZEV4dVowVjRjSEpsYzNOcGIyNHNYRzRnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJR052Ykc5eU9pQjBhR2x6TG1kbGRFTnZiRzl5S0hCdmJIbHNhVzVsTG1kbGRFUmhkR0VvS1Nrc1hHNGdJQ0FnSUNBZ0lHWnBiR3hEYjJ4dmNqb2dkR2hwY3k1blpYUkRiMnh2Y2lod2IyeDViR2x1WlM1blpYUkVZWFJoS0Nrc0lDZHViM0p0WVd3bktTeGNiaUFnSUNBZ0lIMWNiaUFnSUNBcFhHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsTG1Ga1pGUnZLSFJvYVhNdWJXRndLVnh1WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2Ykhsc2FXNWxYRzRnSUNBZ0lDQXVZbWx1WkZCdmNIVndLSFJvYVhNdVoyVjBVRzl3ZFhCRGIyNTBaVzUwS0hCdmJIbHNhVzVsTG1kbGRFUmhkR0VvS1NrcFhHNGdJQ0FnSUNBdWIzQmxibEJ2Y0hWd0tDbGNibHh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1YkdsdVpTNXZiaWduY0c5d2RYQmpiRzl6WlNjc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsUWIyeDViR2x1WlM1eVpXMXZkbVVvS1Z4dUlDQWdJSDBwWEc1Y2JpQWdJQ0J3YjJ4NWJHbHVaUzVqYkc5elpWUnZiMngwYVhBb0tWeHVYRzRnSUNBZ2RHaHBjeTV0WVhBdWNHRnVWRzhvZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsTG1kbGRFTmxiblJsY2lncEtWeHVJQ0FnSUdsbUlDaG1hWFJDYjNWdVpITXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXRndMbVpwZEVKdmRXNWtjeWh3YjJ4NWJHbHVaUzVuWlhSQ2IzVnVaSE1vS1NsY2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1amFHRnVibVZzUm5WdVl5Z25iMjR0WTJ4cFkyc3RjRzlzZVd4cGJtVW5MQ0J3YjJ4NWJHbHVaU2xjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWjJWMFZHOXZiRlJwY0VOdmJuUmxiblFvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2NuSUNzZ1pHRjBZVnQwYUdsekxtOXdkR2x2Ym5NdWRHOXZiSFJwY0VGMGRISmRYRzRnSUgxY2JpQWdjSEp2ZEdWamRHVmtJR2RsZEZCdmNIVndRMjl1ZEdWdWRDaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW5KMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1lDUjdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY24wNklDUjdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlYWDFnWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lBOVBUMGdKMjlpYW1WamRDY3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmdKSHQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUxteGhZbVZzZlRvZ0pIdGNiaUFnSUNBZ0lDQWdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlMblpoYkhWbFhWeHVJQ0FnSUNBZ2ZXQmNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCamIyNW1hV2RRYjJ4NWJHbHVaVXhoZVdWeUtDa2dlMXh1SUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZNWVhsbGNpQTlJRXd1YkdGNVpYSkhjbTkxY0NncFhHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTXVabTl5UldGamFDZ29jRzlzZVd4cGJtVXBJRDArSUh0Y2JpQWdJQ0FnSUd4bGRDQmpiMnh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTVqYjJ4dmNseHVJQ0FnSUNBZ2FXWWdLSFJvYVhNdWIzQjBhVzl1Y3k1eVpXNWtaWEpRYjJ4NWJHbHVaVU52Ykc5eVZIbHdaU0E5UFQwZ0ozTmxaMjFsYm5SbFpDY3BJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSWdQU0IwYUdsekxtZGxkRk5sWjIxbGJuUmxaRkJ2Ykhsc2FXNWxRMjlzYjNJb2NHOXNlV3hwYm1VdVoyVjBSR0YwWVNncEtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1kyOXVjM1FnYjNCMGFXOXVjem9nVEM1UWIyeDViR2x1WlU5d2RHbHZibk1nUFNCUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCMGFHbHpMbTl3ZEdsdmJuTXNJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSXNYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdZMjl1YzNRZ2JtVjNVRzlzZVd4cGJtVWdQU0J1WlhjZ1VHOXNlV3hwYm1Vb1hHNGdJQ0FnSUNBZ0lIQnZiSGxzYVc1bExtZGxkRXhoZEV4dVozTW9LU0JoY3lCUWIyeDViR2x1WlV4aGRFeHVaMFY0Y0hKbGMzTnBiMjRzWEc0Z0lDQWdJQ0FnSUc5d2RHbHZibk5jYmlBZ0lDQWdJQ2xjYmlBZ0lDQWdJRzVsZDFCdmJIbHNhVzVsTG05dUtDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaVU5zYVdOclNHRnVaR3hsY2lod2IyeDViR2x1WlNsY2JpQWdJQ0FnSUgwcFhHNGdJQ0FnSUNCdVpYZFFiMng1YkdsdVpTNXpaWFJFWVhSaEtIQnZiSGxzYVc1bExtZGxkRVJoZEdFb0tTbGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWRHOXZiSFJwY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1VHOXNlV3hwYm1VdVltbHVaRlJ2YjJ4MGFYQW9kR2hwY3k1blpYUlViMjlzVkdsd1EyOXVkR1Z1ZENodVpYZFFiMng1YkdsdVpTNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlV4aGVXVnlMbUZrWkV4aGVXVnlLRzVsZDFCdmJIbHNhVzVsS1Z4dUlDQWdJSDBwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y0c5c2VXeHBibVZNWVhsbGNseHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1kyRmphR1ZUWldkdFpXNTBVR0Z5WVcxektDa2dlMXh1SUNBZ0lHTnZibk4wSUhObFoyMWxiblJsWkV4bGJtZDBhQ0E5SUhSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkRiMnh2Y25NdWJHVnVaM1JvWEc0Z0lDQWdiR1YwSUcxaGVGWmhiQ0E5SUMxSmJtWnBibWwwZVZ4dUlDQWdJR3hsZENCdGFXNVdZV3dnUFNCSmJtWnBibWwwZVZ4dUlDQWdJR1p2Y2lBb1kyOXVjM1FnWkdGMFlTQnZaaUIwYUdsekxtUmhkR0ZNYVhOMEtTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCMllXd2dQU0JrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JCZEhSeVhWeHVJQ0FnSUNBZ2JXRjRWbUZzSUQwZ1RXRjBhQzV0WVhnb2JXRjRWbUZzTENCMllXd3BYRzRnSUNBZ0lDQnRhVzVXWVd3Z1BTQk5ZWFJvTG0xcGJpaHRhVzVXWVd3c0lIWmhiQ2xjYmlBZ0lDQjlYRzRnSUNBZ1kyOXVjM1FnYzNSbGNDQTlJQ2h0WVhoV1lXd2dMU0J0YVc1V1lXd2dLeUF4S1NBdklITmxaMjFsYm5SbFpFeGxibWQwYUZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnYldsdVZtRnNYRzRnSUNBZ2RHaHBjeTV6WldkdFpXNTBaV1JUZEdWd0lEMGdjM1JsY0Z4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWjJWMFEyOXNiM0lvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0TENCdGIyUmxQem9nUTI5c2IzSk5iMlJsS1NCN1hHNGdJQ0FnYkdWMElHTnZiRzl5SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbU52Ykc5eVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjNCMGFXOXVjeTV5Wlc1a1pYSlFiMng1YkdsdVpVTnZiRzl5Vkhsd1pTQTlQVDBnSjNObFoyMWxiblJsWkNjcElIdGNiaUFnSUNBZ0lHTnZiRzl5SUQwZ2RHaHBjeTVuWlhSVFpXZHRaVzUwWldSUWIyeDViR2x1WlVOdmJHOXlLR1JoZEdFcFhHNGdJQ0FnZlZ4dUlDQWdJSE4zYVhSamFDQW9iVzlrWlNrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0FuWkdGeWEyVnVKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JoY210bGJpaGpiMnh2Y2lsY2JpQWdJQ0FnSUdOaGMyVWdKMnhwWjJoMFpXNG5PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiR2xuYUhSbGJpaGpiMnh2Y2lsY2JpQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNseHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElDb2dZWE1nUTI5c2IzSWdabkp2YlNBblkyOXNiM0luWEc1Y2JtWjFibU4wYVc5dUlHeHBaMmgwWlc0b2FHVjRRMjlzYjNJNklITjBjbWx1WnlrZ2UxeHVJQ0J5WlhSMWNtNGdRMjlzYjNJb2FHVjRRMjlzYjNJcFhHNGdJQ0FnTG14cFoyaDBaVzRvTUM0MUtWeHVJQ0FnSUM1b1pYZ29LVnh1ZlZ4dVpuVnVZM1JwYjI0Z1pHRnlhMlZ1S0dobGVFTnZiRzl5T2lCemRISnBibWNwSUh0Y2JpQWdjbVYwZFhKdUlFTnZiRzl5S0dobGVFTnZiRzl5S1Z4dUlDQWdJQzVrWVhKclpXNG9NQzQxS1Z4dUlDQWdJQzVvWlhnb0tWeHVmVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNCc2FXZG9kR1Z1TEZ4dUlDQmtZWEpyWlc0c1hHNTlYRzVsZUhCdmNuUWdleUJzYVdkb2RHVnVMQ0JrWVhKclpXNGdmVnh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBsZWFmbGV0TWFwIGZyb20gJy4uLy4uLy4uL2xlYWZsZXQtbGF5ZXInXG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IEwgPSB3aW5kb3cuTFxuXG52YXIgcG9zaXRpb24gPSBuZXcgTC5MYXRMbmcoMzkuOTA3NzgsIDExNi40MDEyMTYpXG52YXIgbWFwID0gTC5tYXAoJ21hcCcpLnNldFZpZXcocG9zaXRpb24sIDEzKVxuXG5MLnRpbGVMYXllclxuICAuY2hpbmFQcm92aWRlcignR2FvRGUuTm9ybWFsLk1hcCcsIHsgbWF4Wm9vbTogMTgsIG1pblpvb206IDMgfSlcbiAgLmFkZFRvKG1hcClcblxuLy8gdmFyIGRhdGFMaXN0ID0gW1xuLy8gICB7XG4vLyAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgIHR5cGU6ICdQb2x5Z29uJyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbXG4vLyAgICAgICAgIFtcbi8vICAgICAgICAgICBbMTE2LjQwMTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgICAgICAgIFsxMTYuMzkxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgICAgICAgWzExNi4zOTEyMTYsIDM5LjkxNzc4XSxcbi8vICAgICAgICAgICBbMTE2LjQwMTIxNiwgMzkuOTE3NzhdLFxuLy8gICAgICAgICBdLFxuLy8gICAgICAgXSxcbi8vICAgICB9LFxuLy8gICAgIHByaWNlOiAxMDkwOTA5MDkwOTAsXG4vLyAgIH0sXG4vLyBdXG5cbi8vIHZhciBsYXllciA9IG5ldyBsZWFmbGV0TWFwLkdyaWRzTGF5ZXIoXG4vLyAgIG1hcCxcbi8vICAgZGF0YUxpc3QsXG4vLyAgIHsgdG9vbHRpcEF0dHI6ICdwcmljZScsIHBvcHVwQXR0cjogeyBsYWJlbDogJ3AnLCB2YWx1ZTogJ3ByaWNlJyB9IH0sXG4vLyAgIGNvbnNvbGUubG9nXG4vLyApXG4vLyBsYXllci50b2dnbGVUb29sdGlwKHRydWUpXG4vLyBsYXllci5kcmF3KClcblxudmFyIGRhdGFMaXN0ID0gW1xuICB7XG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbiAgICB9LFxuICAgIHByaWNlOiAwLjEsXG4gICAgbmFtZTogJzUnLFxuICB9LFxuICB7XG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICBjb29yZGluYXRlczogWzExNi4zOTEyMTYsIDM5LjkwNzc4XSxcbiAgICB9LFxuICAgIHByaWNlOiAwLjEsXG4gICAgbmFtZTogJzInLFxuICB9LFxuICB7XG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICBjb29yZGluYXRlczogWzExNi4zOTEyMTYsIDM5LjkxNzc4XSxcbiAgICB9LFxuICAgIHByaWNlOiAwLjEsXG4gICAgbmFtZTogJzEnLFxuICB9LFxuICB7XG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkxNzc4XSxcbiAgICB9LFxuICAgIHByaWNlOiAxMDAsXG4gICAgbmFtZTogJzInLFxuICB9LFxuXVxuXG52YXIgbGF5ZXIgPSBuZXcgbGVhZmxldE1hcC5NYXJrZXJzTGF5ZXIoXG4gIG1hcCxcbiAgZGF0YUxpc3QsXG4gIHtcbiAgICByZW5kZXJUeXBlOiAnaGVhdCcsXG4gICAgaGVhdE9wdGlvbnM6IHtcbiAgICAgIGRpbWVuc2lvbkF0dHI6ICdwcmljZScsXG4gICAgICByYWRpdXM6IDMwLFxuICAgICAgbWluT3BhY2l0eTogMC43LFxuICAgICAgYmx1cjogNjAsXG4gICAgICAvLyBtYXg6IDEsXG4gICAgfSxcbiAgfSxcbiAgY29uc29sZS5sb2dcbilcbmxheWVyLmRyYXcoKVxuXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDEsXG4vLyAgIH0sXG4vLyBdXG5cbi8vIHZhciBsYXllciA9IG5ldyBsZWFmbGV0TWFwLk1ha2Vyc0xheWVyKG1hcCwgZGF0YUxpc3QsIHt9LCBjb25zb2xlLmxvZylcbi8vIGxheWVyLmRyYXcoKVxuXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIFtcbi8vICAgICB7XG4vLyAgICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBwcmljZTogMSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gICBbXG4vLyAgICAge1xuLy8gICAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgcHJpY2U6IDEsXG4vLyAgICAgfSxcbi8vICAgXSxcbi8vICAgW1xuLy8gICAgIHtcbi8vICAgICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM5MTIxNiwgMzkuOTE3NzhdLFxuLy8gICAgICAgfSxcbi8vICAgICAgIHByaWNlOiAxLFxuLy8gICAgIH0sXG4vLyAgIF0sXG4vLyAgIFtcbi8vICAgICB7XG4vLyAgICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkxNzc4XSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBwcmljZTogMSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gXVxuLy8gY29uc3QgbGF5ZXIgPSBuZXcgbGVhZmxldE1hcC5EeW5hbWljSGVhdExheWVyKFxuLy8gICBtYXAsXG4vLyAgIGRhdGFMaXN0LFxuLy8gICB7IGxvb3A6IHRydWUsIGF1dG86IHRydWUgfSxcbi8vICAgY29uc29sZS5sb2dcbi8vIClcbi8vICAgLmRyYXcoKVxuLy8gICAuc3RhcnQoKVxuXG4vLyBMLm1hcmtlcihbMzIuMDMwNCwgMTE4Ljc5NjhdLCB7XG4vLyAgIGljb246IEwuZGl2SWNvbih7XG4vLyAgICAgaHRtbDogJzxpIGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDBweDtcIj4mI3hlNjU1OzwvaT4nLFxuLy8gICAgIGljb25TaXplOiBbNDAsIDQwXSxcbi8vICAgICBjbGFzc05hbWU6ICd0ZXN0Jyxcbi8vICAgfSksXG4vLyB9KS5hZGRUbyhtYXApXG4vLyBMLm1hcmtlcihbMzIuMDMwNCwgMTE4Ljc5NjhdKS5hZGRUbyhtYXApXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDIsXG4vLyAgIH0sXG4vLyBdXG5cbi8vIGNvbnN0IGxheWVyID0gbmV3IGxlYWZsZXRNYXAuTWFya2Vyc0xheWVyKFxuLy8gICBtYXAsXG4vLyAgIGRhdGFMaXN0LFxuLy8gICB7XG4vLyAgICAgaWNvblVuaWNvZGU6ICcmI3hlNjU1OycsXG4vLyAgICAgaWNvblNpemU6IFsyMCwgMjBdLFxuLy8gICAgIGljb25BbmNob3I6IFsxMCwgMjBdLFxuLy8gICAgIHBvcHVwQXR0cjogJ3ByaWNlJyxcbi8vICAgICB0b29sdGlwQXR0cjogJ3ByaWNlJyxcbi8vICAgfSxcbi8vICAgZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4vLyAgICAgY29uc29sZS5sb2coZXZlbnROYW1lKVxuLy8gICB9XG4vLyApXG5cbi8vIGxheWVyLmRyYXcoKVxuXG4vLyAvLyBMLm1hcmtlcihMLmxhdExuZygzOS45MDc3OCwgMTE2LjQwMTIxNikpXG4vLyAvLyAgIC5hZGRUbyhtYXApXG4vLyAvLyAgIC5iaW5kVG9vbHRpcCgnYWRmJylcblxuLy8gTC5tYXJrZXIoTC5sYXRMbmcoMzkuOTA3NzgsIDExNi40MDEyMTYpLCB7XG4vLyAgIG9wYWNpdHk6IDAuMixcbi8vICAgaWNvbjogTC5kaXZJY29uKHtcbi8vICAgICBpY29uQW5jaG9yOiBbMTAsIDIwXSxcbi8vICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4vLyAgICAgaHRtbDogYFxuLy8gICAgIDxpXG4vLyAgICAgICBjbGFzcz1cImljb25mb250XCJcbi8vICAgICAgIHN0eWxlPVwiXG4vLyAgICAgICAgIGNvbG9yOiByZWQ7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIFwiXG4vLyAgICAgICA+XG4vLyAgICAgICAmI3hlNjU1O1xuLy8gICAgIDwvaT5cbi8vICAgYCxcbi8vICAgfSksXG4vLyB9KS5hZGRUbyhtYXApXG4vLyB3aW5kb3cubGF5ZXIgPSBsYXllclxuIl0sInNvdXJjZVJvb3QiOiIifQ==