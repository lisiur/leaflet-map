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
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");


class MarkersBufferLayer extends _MarkersLayer__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(map, dataList, options, channelFunc) {
        super(map, dataList, options, channelFunc);
        this.type = 'markerBuffer';
        const defaultBufferOptions = {
            radius: 1000,
            stroke: true,
            weight: 1,
        };
        this.options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["optionsMerge"])(this.options, { bufferOptions: defaultBufferOptions }, JSON.parse(JSON.stringify(options)));
    }
    draw(options) {
        this.options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["optionsMerge"])(this.options, options);
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


const DEFAULT_COLOR = '#3388FF';
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
        this.initOptions(options);
        this.initEvents();
    }
    draw(options) {
        this.visible = true;
        this.initOptions(options);
        this.initMarkers();
        this.initEvents();
        return this.redraw();
    }
    /** 绘制图层 */
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
    /** 设置 data */
    setData(data) {
        this.dataList = data;
    }
    /** 设置配置参数 */
    setOptions(options, redraw = false) {
        this.options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["optionsMerge"])(this.options, options);
        if (redraw) {
            this.redraw();
        }
    }
    /** 获取当前 options */
    getOptions() {
        return this.options;
    }
    /** 缩放至包含所有边界 */
    fitBounds() {
        this.map.fitBounds(this.getBounds(), { padding: [20, 20] });
    }
    /** 获取边界 */
    getBounds() {
        if (this.markers.length <= 0) {
            return this.map.getBounds();
        }
        return this.markers.map((marker) => [marker.getLatLng().lat, marker.getLatLng().lng]);
    }
    /** 销毁图层 */
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
    /** 是否显示 */
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
    /** 更换颜色 */
    changeColor(color) {
        this.options.iconColor = color;
        this.redraw();
    }
    /** 更换 icon */
    changeIcon(iconUnicode) {
        this.options.iconUnicode = iconUnicode;
        this.redraw();
    }
    /** 聚焦某个 marker */
    pitch(id) {
        this.markers.forEach((marker) => {
            if (marker.getData().id === id) {
                this.markerClickHandler(marker, true);
                return;
            }
        });
    }
    /** 获取分类颜色说明 */
    getClassifiedColorRefs() {
        return this.classifiedColorRefs;
    }
    /** 获取气泡颜色图例说明 */
    getBubbledColorRefs() {
        return this.bubbledColorRefs;
    }
    /** 获取气泡大小图例说明 */
    getBubbledSizeRefs() {
        const sizeNums = this.options.bubbleSizes.length;
        for (let i = 0; i < sizeNums; i++) {
            const rangeStart = this.bubbledSizeMin + i * this.bubbledSizeStep;
            const rangeEnd = rangeStart + this.bubbledSizeStep;
            this.bubbledSizeRefs.push({
                range: [rangeStart, rangeEnd],
                size: this.options.bubbleSizes[i],
            });
        }
        return this.bubbledSizeRefs;
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
    /** 配置散点图 */
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
                target: marker,
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
    /** 获取 tooltip 内容 */
    getToolTipContent(data) {
        return '' + data[this.options.tooltipAttr];
    }
    /** 初始化配置参数 */
    initOptions(options) {
        this.options = Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["optionsMerge"])(this.defaultOptions, this.options, options);
    }
    /** 初始化 Marker */
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
    /** 初始化事件 */
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
    /** 配置聚合图层 */
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
    /** 获取图标放大后 icon */
    getLargerMarkerIcon(data) {
        return this._getMarkerIcon(data, true);
    }
    /** 获取图标 icon */
    getMarkerIcon(data) {
        return this._getMarkerIcon(data, false);
    }
    /** 获取当前 marker 需要展示的 icon
     * @param data
     * @param {boolean} isLarger 是否放大
     */
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
    /** 获取icon html */
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
    /** 缓存分类相关参数 */
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
        let otherNums = 0;
        values.forEach(([attr, nums], index) => {
            let color = DEFAULT_COLOR;
            if (index < this.options.classifiedColors.length) {
                color = this.options.classifiedColors[index];
            }
            this.classifiedColorMap[attr] = color;
            if (index < this.options.classifiedColors.length) {
                this.classifiedColorRefs.push({
                    attr,
                    color,
                    nums,
                });
            }
            else {
                otherNums += nums;
            }
        });
        if (otherNums > 0) {
            this.classifiedColorRefs.push({
                attr: '其它',
                color: DEFAULT_COLOR,
                nums: otherNums,
            });
        }
    }
    /** 缓存气泡相关参数 */
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
            let color = DEFAULT_COLOR;
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
    /** 获取分类颜色 */
    getClassifyMarkerColor(data) {
        return this.classifiedColorMap[data[this.options.classifiedAttr]];
    }
    /** 缓存分段相关参数 */
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
    /** 获取分段颜色 */
    getSegmentedMarkerColor(data) {
        const val = data[this.options.segmentedAttr];
        const color = this.options.segmentedColors[parseInt('' + (val - this.segmentedMin) / this.segmentedStep, 10)];
        return color;
    }
    /** 获取气泡大小 */
    getBubbledMarkerSize(data) {
        const val = data[this.options.bubbleSizeAttr];
        const size = this.options.bubbleSizes[parseInt('' + (val - this.bubbledSizeMin) / this.bubbledSizeStep, 10)];
        return size;
    }
    /** 获取气泡颜色 */
    getBubbledMarkerColor(data) {
        return this.bubbledColorMap[data[this.options.bubbleColorAttr]];
    }
    /** 获取 popup 内容 */
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
    /** 创建 cluster icon */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvbWFya2VyL01hcmtlci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHNEQUFZOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGdGQUFZO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixJQUFJO0FBQzdCLHdCQUF3QixFQUFFLFdBQVcsRUFBRTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDek9ZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQywwREFBYztBQUN4QyxjQUFjLG1CQUFPLENBQUMsNERBQWU7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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Z0JBQ3JFLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUM5QjtTQUNGO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUM5QjtLQUNGO0lBQ0QsT0FBTyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRWM7SUFDYixPQUFPO0lBQ1AsTUFBTTtJQUNOLFlBQVk7Q0FDYjtBQUN1QyIsImZpbGUiOiJsZWFmbGV0LWxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmRpZjtcblx0dmFyIGdkaWY7XG5cdHZhciBiZGlmO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG4vKipcbiAqIFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICogKi9cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHRyZXR1cm4gKFxuXHRcdE1hdGgucG93KHhbMF0gLSB5WzBdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzJdIC0geVsyXSwgMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yICh2YXIga2V5d29yZCBpbiBjc3NLZXl3b3Jkcykge1xuXHRcdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXl3b3JkKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGNvbnZlcnQuZ3JheS5oc3YgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHZhciB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0dmFyIGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xudmFyIHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG52YXIgc3dpenpsZSA9IHJlcXVpcmUoJ3NpbXBsZS1zd2l6emxlJyk7XG5cbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcblxuLy8gY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcblx0aWYgKGNvbG9yTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0XHRyZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xuXHR9XG59XG5cbnZhciBjcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHR0bzoge30sXG5cdGdldDoge31cbn07XG5cbmNzLmdldCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIHByZWZpeCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0dmFyIHZhbDtcblx0dmFyIG1vZGVsO1xuXHRzd2l0Y2ggKHByZWZpeCkge1xuXHRcdGNhc2UgJ2hzbCc6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHNsKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdoc2wnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaHdiJzpcblx0XHRcdHZhbCA9IGNzLmdldC5od2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2h3Yic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFsID0gY3MuZ2V0LnJnYihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAncmdiJztcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0aWYgKCF2YWwpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7bW9kZWw6IG1vZGVsLCB2YWx1ZTogdmFsfTtcbn07XG5cbmNzLmdldC5yZ2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgYWJiciA9IC9eIyhbYS1mMC05XXszLDR9KSQvaTtcblx0dmFyIGhleCA9IC9eIyhbYS1mMC05XXs2fSkoW2EtZjAtOV17Mn0pPyQvaTtcblx0dmFyIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIga2V5d29yZCA9IC8oXFxEKykvO1xuXG5cdHZhciByZ2IgPSBbMCwgMCwgMCwgMV07XG5cdHZhciBtYXRjaDtcblx0dmFyIGk7XG5cdHZhciBoZXhBbHBoYTtcblxuXHRpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuXHRcdGhleEFscGhhID0gbWF0Y2hbMl07XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9zbGljZS12cy1zdWJzdHItdnMtc3Vic3RyaW5nLW1ldGhvZHMtbG9uZy1zdHJpbmcvMTlcblx0XHRcdHZhciBpMiA9IGkgKiAyO1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaTIsIGkyICsgMiksIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicikpIHtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXHRcdGhleEFscGhhID0gbWF0Y2hbM107XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSArIGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0sIDApO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdID09PSAndHJhbnNwYXJlbnQnKSB7XG5cdFx0XHRyZXR1cm4gWzAsIDAsIDAsIDBdO1xuXHRcdH1cblxuXHRcdHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuXG5cdFx0aWYgKCFyZ2IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJnYlszXSA9IDE7XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHJnYltpXSA9IGNsYW1wKHJnYltpXSwgMCwgMjU1KTtcblx0fVxuXHRyZ2JbM10gPSBjbGFtcChyZ2JbM10sIDAsIDEpO1xuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jcy5nZXQuaHNsID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/KD86XFxkKlxcLik/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKHBhcnNlRmxvYXQobWF0Y2hbMV0pICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgcyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBsID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXG5cdFx0cmV0dXJuIFtoLCBzLCBsLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MuZ2V0Lmh3YiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQqW1xcLl0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKChwYXJzZUZsb2F0KG1hdGNoWzFdKSAlIDM2MCkgKyAzNjApICUgMzYwO1xuXHRcdHZhciB3ID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGIgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cdFx0cmV0dXJuIFtoLCB3LCBiLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MudG8uaGV4ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gKFxuXHRcdCcjJyArXG5cdFx0aGV4RG91YmxlKHJnYmFbMF0pICtcblx0XHRoZXhEb3VibGUocmdiYVsxXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzJdKSArXG5cdFx0KHJnYmFbM10gPCAxXG5cdFx0XHQ/IChoZXhEb3VibGUoTWF0aC5yb3VuZChyZ2JhWzNdICogMjU1KSkpXG5cdFx0XHQ6ICcnKVxuXHQpO1xufTtcblxuY3MudG8ucmdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJyknXG5cdFx0OiAncmdiYSgnICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLnJnYi5wZXJjZW50ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgciA9IE1hdGgucm91bmQocmdiYVswXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBnID0gTWF0aC5yb3VuZChyZ2JhWzFdIC8gMjU1ICogMTAwKTtcblx0dmFyIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0gLyAyNTUgKiAxMDApO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclKSdcblx0XHQ6ICdyZ2JhKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8uaHNsID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHNsYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblx0cmV0dXJuIGhzbGEubGVuZ3RoIDwgNCB8fCBoc2xhWzNdID09PSAxXG5cdFx0PyAnaHNsKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSknXG5cdFx0OiAnaHNsYSgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUsICcgKyBoc2xhWzNdICsgJyknO1xufTtcblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmNzLnRvLmh3YiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGh3YmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIGEgPSAnJztcblx0aWYgKGh3YmEubGVuZ3RoID49IDQgJiYgaHdiYVszXSAhPT0gMSkge1xuXHRcdGEgPSAnLCAnICsgaHdiYVszXTtcblx0fVxuXG5cdHJldHVybiAnaHdiKCcgKyBod2JhWzBdICsgJywgJyArIGh3YmFbMV0gKyAnJSwgJyArIGh3YmFbMl0gKyAnJScgKyBhICsgJyknO1xufTtcblxuY3MudG8ua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufTtcblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG5cdHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gJzAnICsgc3RyIDogc3RyO1xufVxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbG9yU3RyaW5nID0gcmVxdWlyZSgnY29sb3Itc3RyaW5nJyk7XG52YXIgY29udmVydCA9IHJlcXVpcmUoJ2NvbG9yLWNvbnZlcnQnKTtcblxudmFyIF9zbGljZSA9IFtdLnNsaWNlO1xuXG52YXIgc2tpcHBlZE1vZGVscyA9IFtcblx0Ly8gdG8gYmUgaG9uZXN0LCBJIGRvbid0IHJlYWxseSBmZWVsIGxpa2Uga2V5d29yZCBiZWxvbmdzIGluIGNvbG9yIGNvbnZlcnQsIGJ1dCBlaC5cblx0J2tleXdvcmQnLFxuXG5cdC8vIGdyYXkgY29uZmxpY3RzIHdpdGggc29tZSBtZXRob2QgbmFtZXMsIGFuZCBoYXMgaXRzIG93biBtZXRob2QgZGVmaW5lZC5cblx0J2dyYXknLFxuXG5cdC8vIHNob3VsZG4ndCByZWFsbHkgYmUgaW4gY29sb3ItY29udmVydCBlaXRoZXIuLi5cblx0J2hleCdcbl07XG5cbnZhciBoYXNoZWRNb2RlbEtleXMgPSB7fTtcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGhhc2hlZE1vZGVsS2V5c1tfc2xpY2UuY2FsbChjb252ZXJ0W21vZGVsXS5sYWJlbHMpLnNvcnQoKS5qb2luKCcnKV0gPSBtb2RlbDtcbn0pO1xuXG52YXIgbGltaXRlcnMgPSB7fTtcblxuZnVuY3Rpb24gQ29sb3Iob2JqLCBtb2RlbCkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmosIG1vZGVsKTtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiBtb2RlbCBpbiBza2lwcGVkTW9kZWxzKSB7XG5cdFx0bW9kZWwgPSBudWxsO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmICEobW9kZWwgaW4gY29udmVydCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW9kZWw6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHR2YXIgaTtcblx0dmFyIGNoYW5uZWxzO1xuXG5cdGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gWzAsIDAsIDBdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHRoaXMubW9kZWwgPSBvYmoubW9kZWw7XG5cdFx0dGhpcy5jb2xvciA9IG9iai5jb2xvci5zbGljZSgpO1xuXHRcdHRoaXMudmFscGhhID0gb2JqLnZhbHBoYTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHZhciByZXN1bHQgPSBjb2xvclN0cmluZy5nZXQob2JqKTtcblx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZzogJyArIG9iaik7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IHJlc3VsdC5tb2RlbDtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dGhpcy5jb2xvciA9IHJlc3VsdC52YWx1ZS5zbGljZSgwLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2YgcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyByZXN1bHQudmFsdWVbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmIChvYmoubGVuZ3RoKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG1vZGVsIHx8ICdyZ2InO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbmV3QXJyID0gX3NsaWNlLmNhbGwob2JqLCAwLCBjaGFubmVscyk7XG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShuZXdBcnIsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmpbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IG9ialtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG5cdFx0Ly8gdGhpcyBpcyBhbHdheXMgUkdCIC0gY2FuIGJlIGNvbnZlcnRlZCBsYXRlciBvbi5cblx0XHRvYmogJj0gMHhGRkZGRkY7XG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbXG5cdFx0XHQob2JqID4+IDE2KSAmIDB4RkYsXG5cdFx0XHQob2JqID4+IDgpICYgMHhGRixcblx0XHRcdG9iaiAmIDB4RkZcblx0XHRdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cdFx0aWYgKCdhbHBoYScgaW4gb2JqKSB7XG5cdFx0XHRrZXlzLnNwbGljZShrZXlzLmluZGV4T2YoJ2FscGhhJyksIDEpO1xuXHRcdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqLmFscGhhID09PSAnbnVtYmVyJyA/IG9iai5hbHBoYSA6IDA7XG5cdFx0fVxuXG5cdFx0dmFyIGhhc2hlZEtleXMgPSBrZXlzLnNvcnQoKS5qb2luKCcnKTtcblx0XHRpZiAoIShoYXNoZWRLZXlzIGluIGhhc2hlZE1vZGVsS2V5cykpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IGhhc2hlZE1vZGVsS2V5c1toYXNoZWRLZXlzXTtcblxuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblx0XHR2YXIgY29sb3IgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb2xvci5wdXNoKG9ialtsYWJlbHNbaV1dKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KGNvbG9yKTtcblx0fVxuXG5cdC8vIHBlcmZvcm0gbGltaXRhdGlvbnMgKGNsYW1waW5nLCBldGMuKVxuXHRpZiAobGltaXRlcnNbdGhpcy5tb2RlbF0pIHtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHZhciBsaW1pdCA9IGxpbWl0ZXJzW3RoaXMubW9kZWxdW2ldO1xuXHRcdFx0aWYgKGxpbWl0KSB7XG5cdFx0XHRcdHRoaXMuY29sb3JbaV0gPSBsaW1pdCh0aGlzLmNvbG9yW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aGlzLnZhbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMudmFscGhhKSk7XG5cblx0aWYgKE9iamVjdC5mcmVlemUpIHtcblx0XHRPYmplY3QuZnJlZXplKHRoaXMpO1xuXHR9XG59XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0dG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJpbmcoKTtcblx0fSxcblxuXHR0b0pTT046IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpc1t0aGlzLm1vZGVsXSgpO1xuXHR9LFxuXG5cdHN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5tb2RlbCBpbiBjb2xvclN0cmluZy50byA/IHRoaXMgOiB0aGlzLnJnYigpO1xuXHRcdHNlbGYgPSBzZWxmLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvW3NlbGYubW9kZWxdKGFyZ3MpO1xuXHR9LFxuXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMucmdiKCkucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8ucmdiLnBlcmNlbnQoYXJncyk7XG5cdH0sXG5cblx0YXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxwaGEgPT09IDEgPyB0aGlzLmNvbG9yLnNsaWNlKCkgOiB0aGlzLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdH0sXG5cblx0b2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHRyZXN1bHRbbGFiZWxzW2ldXSA9IHRoaXMuY29sb3JbaV07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXN1bHQuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXG5cdHVuaXRBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJnYlswXSAvPSAyNTU7XG5cdFx0cmdiWzFdIC89IDI1NTtcblx0XHRyZ2JbMl0gLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IucHVzaCh0aGlzLnZhbHBoYSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHR1bml0T2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkub2JqZWN0KCk7XG5cdFx0cmdiLnIgLz0gMjU1O1xuXHRcdHJnYi5nIC89IDI1NTtcblx0XHRyZ2IuYiAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0cm91bmQ6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHRwbGFjZXMgPSBNYXRoLm1heChwbGFjZXMgfHwgMCwgMCk7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLm1hcChyb3VuZFRvUGxhY2UocGxhY2VzKSkuY29uY2F0KHRoaXMudmFscGhhKSwgdGhpcy5tb2RlbCk7XG5cdH0sXG5cblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLmNvbmNhdChNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWwpKSksIHRoaXMubW9kZWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnZhbHBoYTtcblx0fSxcblxuXHQvLyByZ2Jcblx0cmVkOiBnZXRzZXQoJ3JnYicsIDAsIG1heGZuKDI1NSkpLFxuXHRncmVlbjogZ2V0c2V0KCdyZ2InLCAxLCBtYXhmbigyNTUpKSxcblx0Ymx1ZTogZ2V0c2V0KCdyZ2InLCAyLCBtYXhmbigyNTUpKSxcblxuXHRodWU6IGdldHNldChbJ2hzbCcsICdoc3YnLCAnaHNsJywgJ2h3YicsICdoY2cnXSwgMCwgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gKCh2YWwgJSAzNjApICsgMzYwKSAlIDM2MDsgfSksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYnJhY2Utc3R5bGVcblxuXHRzYXR1cmF0aW9ubDogZ2V0c2V0KCdoc2wnLCAxLCBtYXhmbigxMDApKSxcblx0bGlnaHRuZXNzOiBnZXRzZXQoJ2hzbCcsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHNhdHVyYXRpb252OiBnZXRzZXQoJ2hzdicsIDEsIG1heGZuKDEwMCkpLFxuXHR2YWx1ZTogZ2V0c2V0KCdoc3YnLCAyLCBtYXhmbigxMDApKSxcblxuXHRjaHJvbWE6IGdldHNldCgnaGNnJywgMSwgbWF4Zm4oMTAwKSksXG5cdGdyYXk6IGdldHNldCgnaGNnJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0d2hpdGU6IGdldHNldCgnaHdiJywgMSwgbWF4Zm4oMTAwKSksXG5cdHdibGFjazogZ2V0c2V0KCdod2InLCAyLCBtYXhmbigxMDApKSxcblxuXHRjeWFuOiBnZXRzZXQoJ2NteWsnLCAwLCBtYXhmbigxMDApKSxcblx0bWFnZW50YTogZ2V0c2V0KCdjbXlrJywgMSwgbWF4Zm4oMTAwKSksXG5cdHllbGxvdzogZ2V0c2V0KCdjbXlrJywgMiwgbWF4Zm4oMTAwKSksXG5cdGJsYWNrOiBnZXRzZXQoJ2NteWsnLCAzLCBtYXhmbigxMDApKSxcblxuXHR4OiBnZXRzZXQoJ3h5eicsIDAsIG1heGZuKDEwMCkpLFxuXHR5OiBnZXRzZXQoJ3h5eicsIDEsIG1heGZuKDEwMCkpLFxuXHR6OiBnZXRzZXQoJ3h5eicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGw6IGdldHNldCgnbGFiJywgMCwgbWF4Zm4oMTAwKSksXG5cdGE6IGdldHNldCgnbGFiJywgMSksXG5cdGI6IGdldHNldCgnbGFiJywgMiksXG5cblx0a2V5d29yZDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnZlcnRbdGhpcy5tb2RlbF0ua2V5d29yZCh0aGlzLmNvbG9yKTtcblx0fSxcblxuXHRoZXg6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5oZXgodGhpcy5yZ2IoKS5yb3VuZCgpLmNvbG9yKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZXR1cm4gKChyZ2JbMF0gJiAweEZGKSA8PCAxNikgfCAoKHJnYlsxXSAmIDB4RkYpIDw8IDgpIHwgKHJnYlsyXSAmIDB4RkYpO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcblx0fSxcblxuXHRjb250cmFzdDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWZcblx0XHR2YXIgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuXHRcdHZhciBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcblxuXHRcdGlmIChsdW0xID4gbHVtMikge1xuXHRcdFx0cmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpO1xuXHRcdH1cblxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGlzRGFyazogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFlJUSBlcXVhdGlvbiBmcm9tIGh0dHA6Ly8yNHdheXMub3JnLzIwMTAvY2FsY3VsYXRpbmctY29sb3ItY29udHJhc3Rcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0aXNMaWdodDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAhdGhpcy5pc0RhcmsoKTtcblx0fSxcblxuXHRuZWdhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiLmNvbG9yW2ldID0gMjU1IC0gcmdiLmNvbG9yW2ldO1xuXHRcdH1cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdGxpZ2h0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSArPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRhcmtlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdIC09IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSArPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRlc2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSAtPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHdoaXRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzFdICs9IGh3Yi5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzJdICs9IGh3Yi5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0Z3JheXNjYWxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0cmV0dXJuIENvbG9yLnJnYih2YWwsIHZhbCwgdmFsKTtcblx0fSxcblxuXHRmYWRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSAtICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0b3BhcXVlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgKyAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdHJvdGF0ZTogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHR2YXIgaHVlID0gaHNsLmNvbG9yWzBdO1xuXHRcdGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcblx0XHRodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuXHRcdGhzbC5jb2xvclswXSA9IGh1ZTtcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdC8vIHBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuXHRcdHZhciBjb2xvcjEgPSBtaXhpbkNvbG9yLnJnYigpO1xuXHRcdHZhciBjb2xvcjIgPSB0aGlzLnJnYigpO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gQ29sb3IucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpLFxuXHRcdFx0XHRjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9XG59O1xuXG4vLyBtb2RlbCBjb252ZXJzaW9uIG1ldGhvZHMgYW5kIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGlmIChza2lwcGVkTW9kZWxzLmluZGV4T2YobW9kZWwpICE9PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXG5cdC8vIGNvbnZlcnNpb24gbWV0aG9kc1xuXHRDb2xvci5wcm90b3R5cGVbbW9kZWxdID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzLm1vZGVsID09PSBtb2RlbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihhcmd1bWVudHMsIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3QWxwaGEgPSB0eXBlb2YgYXJndW1lbnRzW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBjaGFubmVscyA6IHRoaXMudmFscGhhO1xuXHRcdHJldHVybiBuZXcgQ29sb3IoYXNzZXJ0QXJyYXkoY29udmVydFt0aGlzLm1vZGVsXVttb2RlbF0ucmF3KHRoaXMuY29sb3IpKS5jb25jYXQobmV3QWxwaGEpLCBtb2RlbCk7XG5cdH07XG5cblx0Ly8gJ3N0YXRpYycgY29uc3RydWN0aW9uIG1ldGhvZHNcblx0Q29sb3JbbW9kZWxdID0gZnVuY3Rpb24gKGNvbG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbG9yID0gemVyb0FycmF5KF9zbGljZS5jYWxsKGFyZ3VtZW50cyksIGNoYW5uZWxzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihjb2xvciwgbW9kZWwpO1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIHJvdW5kVG8obnVtLCBwbGFjZXMpIHtcblx0cmV0dXJuIE51bWJlcihudW0udG9GaXhlZChwbGFjZXMpKTtcbn1cblxuZnVuY3Rpb24gcm91bmRUb1BsYWNlKHBsYWNlcykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG51bSkge1xuXHRcdHJldHVybiByb3VuZFRvKG51bSwgcGxhY2VzKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0c2V0KG1vZGVsLCBjaGFubmVsLCBtb2RpZmllcikge1xuXHRtb2RlbCA9IEFycmF5LmlzQXJyYXkobW9kZWwpID8gbW9kZWwgOiBbbW9kZWxdO1xuXG5cdG1vZGVsLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcblx0XHQobGltaXRlcnNbbV0gfHwgKGxpbWl0ZXJzW21dID0gW10pKVtjaGFubmVsXSA9IG1vZGlmaWVyO1xuXHR9KTtcblxuXHRtb2RlbCA9IG1vZGVsWzBdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0dmFyIHJlc3VsdDtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdFx0dmFsID0gbW9kaWZpZXIodmFsKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKTtcblx0XHRcdHJlc3VsdC5jb2xvcltjaGFubmVsXSA9IHZhbDtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKS5jb2xvcltjaGFubmVsXTtcblx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdHJlc3VsdCA9IG1vZGlmaWVyKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn1cblxuZnVuY3Rpb24gbWF4Zm4obWF4KSB7XG5cdHJldHVybiBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIHYpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QXJyYXkodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXTtcbn1cblxuZnVuY3Rpb24gemVyb0FycmF5KGFyciwgbGVuZ3RoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodHlwZW9mIGFycltpXSAhPT0gJ251bWJlcicpIHtcblx0XHRcdGFycltpXSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcnJheWlzaChvYmopIHtcblx0aWYgKCFvYmogfHwgdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShvYmopIHx8XG5cdFx0KG9iai5sZW5ndGggPj0gMCAmJiAob2JqLnNwbGljZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG5cdFx0XHQoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIChvYmoubGVuZ3RoIC0gMSkpICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3RyaW5nJykpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5aXNoID0gcmVxdWlyZSgnaXMtYXJyYXlpc2gnKTtcblxudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBzd2l6emxlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzd2l6emxlKGFyZ3MpIHtcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciBhcmcgPSBhcmdzW2ldO1xuXG5cdFx0aWYgKGlzQXJyYXlpc2goYXJnKSkge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vamF2YXNjcmlwdC1hcnJheS1jb25jYXQtdnMtcHVzaC85OFxuXHRcdFx0cmVzdWx0cyA9IGNvbmNhdC5jYWxsKHJlc3VsdHMsIHNsaWNlLmNhbGwoYXJnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuc3dpenpsZS53cmFwID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZuKHN3aXp6bGUoYXJndW1lbnRzKSk7XG5cdH07XG59O1xuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IE1hcmtlcnNMYXllciwge1xuICBNYXJrZXJzTGF5ZXJPcHRpb25zLFxuICBNYXJrZXJzSGVhdExheWVyT3B0aW9ucyxcbn0gZnJvbSAnLi4vbWFya2VyL01hcmtlcnNMYXllcidcblxuaW50ZXJmYWNlIER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zIGV4dGVuZHMgTWFya2Vyc0hlYXRMYXllck9wdGlvbnMge1xuICAvKiog5piv5ZCm5b6q546v5pKt5pS+ICovXG4gIGxvb3A6IGJvb2xlYW5cbiAgLyoqIOaYr+WQpuiHquWKqOaSreaUviAqL1xuICBhdXRvOiBib29sZWFuXG4gIC8qKiDpl7TpmpTml7bpl7QgKi9cbiAgaW50ZXJ2YWw6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljSGVhdExheWVyIHtcbiAgLyoqIOW9k+WJjeaSreaUvuWIsOesrOWHoOatpSAqL1xuICBwcml2YXRlIGN1cnJlbnRTdGVwOiBudW1iZXJcblxuICBwcml2YXRlIG1hcDogTC5NYXBcbiAgcHJpdmF0ZSBkeW5hbWljRGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdW11cbiAgcHJpdmF0ZSBvcHRpb25zOiBEeW5hbWljSGVhdExheWVyT3B0aW9uc1xuICBwcml2YXRlIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICBwcml2YXRlIGxheWVyOiBNYXJrZXJzTGF5ZXJcbiAgcHJpdmF0ZSBpc1BhdXNlOiBib29sZWFuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZHluYW1pY0RhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVtdLFxuICAgIG9wdGlvbnM6IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZHluYW1pY0RhdGFMaXN0KSB8fCBkeW5hbWljRGF0YUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGRhdGFMaXN0IOW/hemhu+aYr+mdnuepuuaVsOe7hGApXG4gICAgfVxuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5keW5hbWljRGF0YUxpc3QgPSBkeW5hbWljRGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IDBcbiAgICB0aGlzLmlzUGF1c2UgPSB0cnVlXG4gIH1cbiAgcHVibGljIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5pc1BhdXNlID0gZmFsc2VcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gMFxuICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcClcbiAgICB0aGlzLnN0YXJ0KClcbiAgfVxuICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgdGhpcy5pc1BhdXNlID0gZmFsc2VcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5hdXRvKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1BhdXNlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLyoqIOaSreaUvuWujOavlSAqL1xuICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAgPj0gdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5sb29wKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN0YXJ0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXArK1xuICAgICAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gICAgICAgIHRoaXMuc3RhcnQoKVxuICAgICAgfVxuICAgIH0sIHRoaXMub3B0aW9ucy5pbnRlcnZhbClcbiAgfVxuICBwdWJsaWMgcGF1c2UoKSB7XG4gICAgdGhpcy5pc1BhdXNlID0gdHJ1ZVxuICB9XG4gIHB1YmxpYyBwcmV2KCkge1xuICAgIHRoaXMuY3VycmVudFN0ZXAtLVxuICAgIHRoaXMuY3VycmVudFN0ZXAgPVxuICAgICAgKHRoaXMuY3VycmVudFN0ZXAgKyB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGgpICVcbiAgICAgIHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aFxuICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcClcbiAgfVxuICBwdWJsaWMgbmV4dCgpIHtcbiAgICB0aGlzLmN1cnJlbnRTdGVwKytcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gdGhpcy5jdXJyZW50U3RlcCAlIHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aFxuICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcClcbiAgfVxuICBwdWJsaWMgZ290b1N0ZXAoc3RlcDogbnVtYmVyKSB7XG4gICAgaWYgKHN0ZXAgPCAwIHx8IHN0ZXAgPj0gdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGdvdG9TdGVwKCR7c3RlcH0pOiBzdGVwIGlzIG91dCBvZiBpbmRleCBgKVxuICAgIH1cbiAgICB0aGlzLmxheWVyLnNldERhdGEodGhpcy5keW5hbWljRGF0YUxpc3Rbc3RlcF0pXG4gICAgdGhpcy5sYXllci5kcmF3KClcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogRHluYW1pY0hlYXRMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdGhpcy5pbml0TGF5ZXIoKVxuICAgIHRoaXMubGF5ZXIuZHJhdygpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubGF5ZXIuZml0Qm91bmRzKClcbiAgfVxuICBwcml2YXRlIGluaXRPcHRpb25zKG9wdGlvbnM/OiBEeW5hbWljSGVhdExheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBhdXRvOiBmYWxzZSxcbiAgICAgICAgaW50ZXJ2YWw6IDEwMDAsXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgICAgb3B0aW9uc1xuICAgIClcbiAgfVxuICBwcml2YXRlIGluaXRMYXllcigpIHtcbiAgICBjb25zdCBtYXJrZXJzTGF5ZXJPcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zID0ge1xuICAgICAgcmVuZGVyVHlwZTogJ2hlYXQnLFxuICAgICAgaGVhdE9wdGlvbnM6IHRoaXMub3B0aW9ucyxcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IG5ldyBNYXJrZXJzTGF5ZXIoXG4gICAgICB0aGlzLm1hcCxcbiAgICAgIHRoaXMuZHluYW1pY0RhdGFMaXN0WzBdLFxuICAgICAgbWFya2Vyc0xheWVyT3B0aW9ucyxcbiAgICAgIHRoaXMuY2hhbm5lbEZ1bmNcbiAgICApXG4gICAgcmV0dXJuIHRoaXMubGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IE1hcmtlciBmcm9tICcuL21hcmtlci9NYXJrZXInXG5pbXBvcnQgTWFya2Vyc0xheWVyIGZyb20gJy4vbWFya2VyL01hcmtlcnNMYXllcidcbmltcG9ydCBNYXJrZXJzQnVmZmVyTGF5ZXIgZnJvbSAnLi9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyJ1xuaW1wb3J0IFBvbHlsaW5lIGZyb20gJy4vcG9seWxpbmUvUG9seWxpbmUnXG5pbXBvcnQgUG9seWxpbmVzTGF5ZXIgZnJvbSAnLi9wb2x5bGluZS9Qb2x5bGluZXNMYXllcidcbmltcG9ydCBQb2x5bGluZXNCdWZmZXJMYXllciBmcm9tICcuL3BvbHlsaW5lL1BvbHlsaW5lc0J1ZmZlckxheWVyJ1xuaW1wb3J0IFBvbHlnb24gZnJvbSAnLi9wb2x5Z29uL1BvbHlnb24nXG5pbXBvcnQgUG9seWdvbnNMYXllciBmcm9tICcuL3BvbHlnb24vUG9seWdvbnNMYXllcidcbmltcG9ydCBHcmlkc0xheWVyIGZyb20gJy4vcG9seWdvbi9Hcmlkc0xheWVyJ1xuaW1wb3J0IER5bmFtaWNIZWF0TGF5ZXIgZnJvbSAnLi9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXInXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTWFya2VyLFxuICBNYXJrZXJzTGF5ZXIsXG4gIE1hcmtlcnNCdWZmZXJMYXllcixcbiAgUG9seWxpbmUsXG4gIFBvbHlsaW5lc0xheWVyLFxuICBQb2x5bGluZXNCdWZmZXJMYXllcixcbiAgUG9seWdvbixcbiAgUG9seWdvbnNMYXllcixcbiAgR3JpZHNMYXllcixcbiAgRHluYW1pY0hlYXRMYXllcixcbn1cbmV4cG9ydCB7XG4gIE1hcmtlcixcbiAgTWFya2Vyc0xheWVyLFxuICBNYXJrZXJzQnVmZmVyTGF5ZXIsXG4gIFBvbHlsaW5lLFxuICBQb2x5bGluZXNMYXllcixcbiAgUG9seWxpbmVzQnVmZmVyTGF5ZXIsXG4gIFBvbHlnb24sXG4gIFBvbHlnb25zTGF5ZXIsXG4gIEdyaWRzTGF5ZXIsXG4gIER5bmFtaWNIZWF0TGF5ZXIsXG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0gfSBmcm9tICcuLi9kZWZpbml0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2VyIGV4dGVuZHMgTC5NYXJrZXIge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKGxhdGxuZzogTC5MYXRMbmdFeHByZXNzaW9uLCBvcHRpb25zPzogTC5NYXJrZXJPcHRpb25zKSB7XG4gICAgc3VwZXIobGF0bG5nLCBvcHRpb25zKVxuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHRoaXMuX19kYXRhID0gZGF0YVxuICB9XG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YVxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgTWFya2Vyc0xheWVyLCB7IE1hcmtlcnNMYXllck9wdGlvbnMgfSBmcm9tICcuL01hcmtlcnNMYXllcidcbmltcG9ydCB7IG9wdGlvbnNNZXJnZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuaW50ZXJmYWNlIE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMgZXh0ZW5kcyBNYXJrZXJzTGF5ZXJPcHRpb25zIHtcbiAgYnVmZmVyVG9vbHRpcEF0dHI6IHN0cmluZ1xuICBidWZmZXJPcHRpb25zOiBMLkNpcmNsZU1hcmtlck9wdGlvbnNcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlcnNCdWZmZXJMYXllciBleHRlbmRzIE1hcmtlcnNMYXllciB7XG4gIHB1YmxpYyBvcHRpb25zOiBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zXG4gIHByaXZhdGUgYnVmZmVyTGF5ZXI6IEwuTGF5ZXJHcm91cFxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYylcbiAgICB0aGlzLnR5cGUgPSAnbWFya2VyQnVmZmVyJ1xuICAgIGNvbnN0IGRlZmF1bHRCdWZmZXJPcHRpb25zOiBMLkNpcmNsZU1hcmtlck9wdGlvbnMgPSB7XG4gICAgICByYWRpdXM6IDEwMDAsXG4gICAgICBzdHJva2U6IHRydWUsXG4gICAgICB3ZWlnaHQ6IDEsXG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNNZXJnZShcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHsgYnVmZmVyT3B0aW9uczogZGVmYXVsdEJ1ZmZlck9wdGlvbnMgfSxcbiAgICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucykpXG4gICAgKSBhcyBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zXG4gIH1cblxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNNZXJnZShcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIG9wdGlvbnNcbiAgICApIGFzIE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5jb2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3JcbiAgICB0aGlzLmluaXRNYXJrZXJzKClcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG5cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5idWZmZXJMYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5idWZmZXJMYXllcilcbiAgICB9XG4gICAgdGhpcy5tYXJrZXJMYXllciA9IHRoaXMuY29uZmlnTWFya2VyTGF5ZXIoKVxuICAgIHRoaXMuYnVmZmVyTGF5ZXIgPSB0aGlzLmNvbmZpZ0J1ZmZlckxheWVyKClcblxuICAgIHRoaXMubGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB0aGlzLmxheWVyLmFkZExheWVyKHRoaXMuYnVmZmVyTGF5ZXIpXG5cbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcmtlcnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICByZXR1cm4gcHJldi5leHRlbmQoXG4gICAgICAgIGN1cnIuZ2V0TGF0TG5nKCkudG9Cb3VuZHModGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMucmFkaXVzKVxuICAgICAgKVxuICAgIH0sIHRoaXMubWFya2Vyc1swXS5nZXRMYXRMbmcoKS50b0JvdW5kcyh0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5yYWRpdXMpKVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWdCdWZmZXJMYXllcigpIHtcbiAgICBjb25zdCBncm91cExheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBjaXJjbGVMYXllciA9IEwuY2lyY2xlKFxuICAgICAgICBtYXJrZXIuZ2V0TGF0TG5nKCksXG4gICAgICAgIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zXG4gICAgICApXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJ1ZmZlclRvb2x0aXBBdHRyKSB7XG4gICAgICAgIGNpcmNsZUxheWVyLmJpbmRUb29sdGlwKFxuICAgICAgICAgICcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMuYnVmZmVyVG9vbHRpcEF0dHJdXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgICAgICcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgICAgICcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBncm91cExheWVyLmFkZExheWVyKGNpcmNsZUxheWVyKVxuICAgIH0pXG4gICAgcmV0dXJuIGdyb3VwTGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgbGlnaHRlbiwgb3B0aW9uc01lcmdlIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXG5pbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgTWFya2VyIGZyb20gJy4vTWFya2VyJ1xuXG4vKiog5riy5p+T5qC35byPIOaVo+eCuXzng63lipvlm74gKi9cbnR5cGUgTWFya2Vyc0xheWVyUmVuZGVyVHlwZSA9ICdwb2ludCcgfCAnaGVhdCcgfCAnY2x1c3RlcicgfCAnYnViYmxlJ1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrV85YiG57G7ICovXG50eXBlIE1hcmtlcnNMYXllclJlbmRlclBvaW50Q29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJyB8ICdjbGFzc2lmaWVkJ1xuXG4vKiog5pWj54K55Zu+5qCH57G75Z6LIGljb25mb250fHN2Z3xpbWFnZSAqL1xudHlwZSBNYXJrZXJzTGF5ZXJJY29uVHlwZSA9ICdmb250X2NsYXNzJyB8ICd1bmljb2RlJyB8ICdzeW1ib2wnIHwgJ2ltYWdlJ1xuXG50eXBlIE1hcmtlcnNMYXllclJlbmRlckNsdXN0ZXJDb2xvclR5cGUgPSAnc2luZ2xlJyB8ICdzbWFydCdcblxuaW50ZXJmYWNlIEljb25SZW5kZXJGdW5jT3B0aW9uIHtcbiAgaWNvblNpemU6IFtudW1iZXIsIG51bWJlcl1cbiAgaWNvbkNvbG9yOiBzdHJpbmdcbn1cbnR5cGUgSWNvblJlbmRlckZ1bmMgPSAoXG4gIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgcGFyYW1zOiBJY29uUmVuZGVyRnVuY09wdGlvblxuKSA9PiBzdHJpbmdcblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJzTGF5ZXJPcHRpb25zIHtcbiAgcmVuZGVyVHlwZTogTWFya2Vyc0xheWVyUmVuZGVyVHlwZVxuICByZW5kZXJQb2ludENvbG9yVHlwZT86IE1hcmtlcnNMYXllclJlbmRlclBvaW50Q29sb3JUeXBlXG4gIGljb25UeXBlPzogTWFya2Vyc0xheWVySWNvblR5cGVcblxuICBpY29uSW1hZ2VVcmw/OiBzdHJpbmdcbiAgaWNvblNpemU/OiBbbnVtYmVyLCBudW1iZXJdXG4gIGljb25DbGFzcz86IHN0cmluZ1xuICBpY29uVW5pY29kZT86IHN0cmluZ1xuICBpY29uU3ltYm9sPzogc3RyaW5nXG4gIGljb25Db2xvcj86IHN0cmluZ1xuICBpY29uQW5jaG9yPzogW251bWJlciwgbnVtYmVyXVxuICBpY29uUmVuZGVyZXI/OiBJY29uUmVuZGVyRnVuY1xuXG4gIGJ1YmJsZUNvbG9yQXR0cj86IHN0cmluZ1xuICBidWJibGVTaXplQXR0cj86IHN0cmluZ1xuICBidWJibGVTdHJva2VXaWR0aD86IG51bWJlclxuICBidWJibGVTdHJva2VDb2xvcj86IHN0cmluZ1xuICBidWJibGVDb2xvcnM/OiBzdHJpbmdbXVxuICBidWJibGVTaXplcz86IG51bWJlcltdXG4gIGJ1YmJsZVN0cm9rZU9wYWNpdHk/OiBudW1iZXJcbiAgYnViYmxlRmlsbE9wYWNpdHk/OiBudW1iZXJcblxuICAvLyDmmK/lkKbogZrlkIjvvIzkvJjlhYjnuqfpq5jkuo4gcmVuZGVyVHlwZSA9PSBwb2ludFxuICBpc0NsdXN0ZXI/OiBib29sZWFuXG4gIHJlbmRlckNsdXN0ZXJDb2xvclR5cGU/OiBNYXJrZXJzTGF5ZXJSZW5kZXJDbHVzdGVyQ29sb3JUeXBlXG5cbiAgLyoqIOaYr+WQpuWxleekuiBwb3B1cCAqL1xuICBwb3B1cD86IGJvb2xlYW5cbiAgLyoqIOaYr+WQpuWxleekuiB0b29sdGlwICovXG4gIHRvb2x0aXA/OiBib29sZWFuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxuXG4gIC8qKiDliIbnsbvlnovmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgY2xhc3NpZmllZEF0dHI/OiBzdHJpbmdcbiAgY2xhc3NpZmllZENvbG9ycz86IHN0cmluZ1tdXG5cbiAgaGVhdE9wdGlvbnM/OiBNYXJrZXJzSGVhdExheWVyT3B0aW9uc1xuICBjbHVzdGVyT3B0aW9ucz86IEwuTWFya2Vyc0NsdXN0ZXJPcHRpb25zXG59XG5cbi8qKiDovazljJbkuLrng63lipvlm77nmoQgb3B0aW9ucyAqL1xuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJzSGVhdExheWVyT3B0aW9ucyBleHRlbmRzIEwuSGVhdExheWVyT3B0aW9ucyB7XG4gIGRpbWVuc2lvbkF0dHI/OiBzdHJpbmdcbn1cblxuY29uc3QgREVGQVVMVF9DT0xPUiA9ICcjMzM4OEZGJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Vyc0xheWVyIHtcbiAgcHVibGljIG1hcDogTC5NYXBcbiAgcHVibGljIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVxuICBwdWJsaWMgb3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9uc1xuICBwdWJsaWMgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG5cbiAgcHVibGljIHR5cGU6IHN0cmluZ1xuXG4gIHByb3RlY3RlZCBtYXJrZXJzOiBNYXJrZXJbXVxuXG4gIHByb3RlY3RlZCBmb2N1c2VkTWFya2VyOiBNYXJrZXJcbiAgcHJvdGVjdGVkIGhvdmVyZWRNYXJrZXI6IE1hcmtlclxuICAvKiog6ZyA6KaB5bGV56S655qE5pS+5aSn55qE5Zu+5qCHICovXG4gIHByb3RlY3RlZCBmb2N1c2VkRGlzcGxheU1hcmtlcjogTWFya2VyXG4gIHByb3RlY3RlZCBtYXJrZXJMYXllcjogTC5DYW52YXNJY29uTGF5ZXJcblxuICBwcm90ZWN0ZWQgdmlzaWJsZTogYm9vbGVhblxuICBwcm90ZWN0ZWQgbGF5ZXI6XG4gICAgfCBMLkNhbnZhc0ljb25MYXllclxuICAgIHwgTC5IZWF0TGF5ZXJcbiAgICB8IEwuTWFya2Vyc0NsdXN0ZXJcbiAgICB8IEwuTGF5ZXJHcm91cFxuICBwcm90ZWN0ZWQgZGVmYXVsdE9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnNcbiAgcHJpdmF0ZSBoZWF0TGF5ZXI6IEwuSGVhdExheWVyXG4gIHByaXZhdGUgY2x1c3RlckxheWVyOiBMLk1hcmtlcnNDbHVzdGVyXG4gIHByaXZhdGUgYnViYmxlTGF5ZXI6IEwuTGF5ZXJHcm91cFxuXG4gIHByaXZhdGUgc2VnbWVudGVkTWluOiBudW1iZXJcbiAgcHJpdmF0ZSBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJpdmF0ZSBidWJibGVkU2l6ZU1pbjogbnVtYmVyXG4gIHByaXZhdGUgYnViYmxlZFNpemVTdGVwOiBudW1iZXJcbiAgcHJpdmF0ZSBidWJibGVkQ29sb3JNYXA6IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9XG4gIHByaXZhdGUgYnViYmxlZENvbG9yUmVmczogQXJyYXk8e1xuICAgIGF0dHI6IHN0cmluZ1xuICAgIGNvbG9yOiBzdHJpbmdcbiAgICBudW1zOiBudW1iZXJcbiAgfT5cbiAgcHJpdmF0ZSBidWJibGVkU2l6ZVJlZnM6IEFycmF5PHtcbiAgICBzaXplOiBudW1iZXJcbiAgICByYW5nZTogW251bWJlciwgbnVtYmVyXVxuICB9PlxuICAvKiog6K6w5b2V5p+Q5LiqIHByb3Ag5a+55bqU55qE5riy5p+T6aKc6ImyICovXG4gIHByaXZhdGUgY2xhc3NpZmllZENvbG9yTWFwOiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfVxuICAvKiog5YiG57G75riy5p+T6aKc6Imy5Y+C54WnKOaPkOS+m+e7meiwg+eUqOiAheS9v+eUqCkgKi9cbiAgcHJpdmF0ZSBjbGFzc2lmaWVkQ29sb3JSZWZzOiBBcnJheTx7XG4gICAgYXR0cjogc3RyaW5nXG4gICAgY29sb3I6IHN0cmluZ1xuICAgIG51bXM6IG51bWJlclxuICB9PlxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YUxpc3QpIHx8IGRhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhTGlzdCDlv4XpobvmmK/pnZ7nqbrmlbDnu4RgKVxuICAgIH1cbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcmVuZGVyVHlwZTogJ3BvaW50JyxcbiAgICAgIHJlbmRlclBvaW50Q29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgIGljb25UeXBlOiAndW5pY29kZScsXG4gICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4gICAgICBpY29uQ2xhc3M6ICdpY29uZm9udCcsXG4gICAgICBpY29uQ29sb3I6IERFRkFVTFRfQ09MT1IsXG4gICAgICBpY29uQW5jaG9yOiBbMTAsIDIwXSxcbiAgICAgIHBvcHVwOiB0cnVlLFxuICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgIHBvcHVwQXR0cjogeyBsYWJlbDogJ+WQjeensCcsIHZhbHVlOiAnbmFtZScgfSxcbiAgICAgIHRvb2x0aXBBdHRyOiAnbmFtZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFtERUZBVUxUX0NPTE9SXSxcbiAgICAgIGNsYXNzaWZpZWRDb2xvcnM6IFtERUZBVUxUX0NPTE9SXSxcbiAgICAgIGlzQ2x1c3RlcjogZmFsc2UsXG4gICAgICByZW5kZXJDbHVzdGVyQ29sb3JUeXBlOiAnc21hcnQnLFxuICAgICAgYnViYmxlU3Ryb2tlV2lkdGg6IDEsXG4gICAgICBidWJibGVDb2xvcnM6IFtERUZBVUxUX0NPTE9SXSxcbiAgICAgIGJ1YmJsZVN0cm9rZU9wYWNpdHk6IDAuMixcbiAgICAgIGJ1YmJsZUZpbGxPcGFjaXR5OiAwLjUsXG4gICAgICBidWJibGVTaXplczogWzEwXSxcbiAgICAgIGhlYXRPcHRpb25zOiB7XG4gICAgICAgIG1heDogMSxcbiAgICAgICAgbWluT3BhY2l0eTogMC41LFxuICAgICAgfSxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ21hcmtlcidcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcblxuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLmxheWVyID0gbnVsbFxuICAgIHRoaXMuZm9jdXNlZE1hcmtlciA9IG51bGxcbiAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlciA9IG51bGxcbiAgICB0aGlzLm1hcmtlcnMgPSBbXVxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBudWxsXG4gICAgdGhpcy5oZWF0TGF5ZXIgPSBudWxsXG4gICAgdGhpcy5jbHVzdGVyTGF5ZXIgPSBudWxsXG4gICAgdGhpcy5idWJibGVMYXllciA9IG51bGxcblxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5idWJibGVkU2l6ZU1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5idWJibGVkU2l6ZVN0ZXAgPSAxXG4gICAgdGhpcy5jbGFzc2lmaWVkQ29sb3JNYXAgPSB7fVxuICAgIHRoaXMuYnViYmxlZENvbG9yTWFwID0ge31cbiAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdGhpcy5pbml0RXZlbnRzKClcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogTWFya2Vyc0xheWVyT3B0aW9ucykge1xuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpXG4gICAgdGhpcy5pbml0TWFya2VycygpXG4gICAgdGhpcy5pbml0RXZlbnRzKClcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG4gIC8qKiDnu5jliLblm77lsYIgKi9cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgLy8g5LyY5YWI5Yik5patIGlzQ2x1c3RlclxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyICYmIHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnKSB7XG4gICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ01hcmtlckxheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2NsdXN0ZXInOiB7XG4gICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQ2x1c3RlckxheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2hlYXQnOiB7XG4gICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnSGVhdExheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2J1YmJsZSc6IHtcbiAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdCdWJibGVMYXllcigpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyVHlwZX1cImApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIC8qKiDorr7nva4gZGF0YSAqL1xuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW1bXSkge1xuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhXG4gIH1cbiAgLyoqIOiuvue9rumFjee9ruWPguaVsCAqL1xuICBwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zLCByZWRyYXcgPSBmYWxzZSkge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNNZXJnZSh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpIGFzIE1hcmtlcnNMYXllck9wdGlvbnNcbiAgICBpZiAocmVkcmF3KSB7XG4gICAgICB0aGlzLnJlZHJhdygpXG4gICAgfVxuICB9XG4gIC8qKiDojrflj5blvZPliY0gb3B0aW9ucyAqL1xuICBwdWJsaWMgZ2V0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zXG4gIH1cbiAgLyoqIOe8qeaUvuiHs+WMheWQq+aJgOaciei+ueeVjCAqL1xuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pXG4gIH1cbiAgLyoqIOiOt+WPlui+ueeVjCAqL1xuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcmtlcnMubWFwKFxuICAgICAgKG1hcmtlcikgPT5cbiAgICAgICAgW21hcmtlci5nZXRMYXRMbmcoKS5sYXQsIG1hcmtlci5nZXRMYXRMbmcoKS5sbmddIGFzIFtudW1iZXIsIG51bWJlcl1cbiAgICApXG4gIH1cbiAgLyoqIOmUgOavgeWbvuWxgiAqL1xuICBwdWJsaWMgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpXG4gICAgfVxuICAgIHRoaXMubWFwLm9mZignem9vbXN0YXJ0JywgdGhpcy5fem9vbVN0YXJ0Q2IsIHRoaXMpXG4gICAgdGhpcy5tYXAub2ZmKCd6b29tZW5kJywgdGhpcy5fem9vbUVuZENiLCB0aGlzKVxuICB9XG4gIC8qKiDmmK/lkKbmmL7npLogKi9cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmUoKVxuICAgICAgfVxuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgLyoqIOabtOaNouminOiJsiAqL1xuICBwdWJsaWMgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5pY29uQ29sb3IgPSBjb2xvclxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICAvKiog5pu05o2iIGljb24gKi9cbiAgcHVibGljIGNoYW5nZUljb24oaWNvblVuaWNvZGU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5pY29uVW5pY29kZSA9IGljb25Vbmljb2RlXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIC8qKiDogZrnhKbmn5DkuKogbWFya2VyICovXG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgaWYgKG1hcmtlci5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciwgdHJ1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICAvKiog6I635Y+W5YiG57G76aKc6Imy6K+05piOICovXG4gIHB1YmxpYyBnZXRDbGFzc2lmaWVkQ29sb3JSZWZzKCkge1xuICAgIHJldHVybiB0aGlzLmNsYXNzaWZpZWRDb2xvclJlZnNcbiAgfVxuICAvKiog6I635Y+W5rCU5rOh6aKc6Imy5Zu+5L6L6K+05piOICovXG4gIHB1YmxpYyBnZXRCdWJibGVkQ29sb3JSZWZzKCkge1xuICAgIHJldHVybiB0aGlzLmJ1YmJsZWRDb2xvclJlZnNcbiAgfVxuICAvKiog6I635Y+W5rCU5rOh5aSn5bCP5Zu+5L6L6K+05piOICovXG4gIHB1YmxpYyBnZXRCdWJibGVkU2l6ZVJlZnMoKSB7XG4gICAgY29uc3Qgc2l6ZU51bXMgPSB0aGlzLm9wdGlvbnMuYnViYmxlU2l6ZXMubGVuZ3RoXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplTnVtczsgaSsrKSB7XG4gICAgICBjb25zdCByYW5nZVN0YXJ0ID0gdGhpcy5idWJibGVkU2l6ZU1pbiArIGkgKiB0aGlzLmJ1YmJsZWRTaXplU3RlcFxuICAgICAgY29uc3QgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgdGhpcy5idWJibGVkU2l6ZVN0ZXBcbiAgICAgIHRoaXMuYnViYmxlZFNpemVSZWZzLnB1c2goe1xuICAgICAgICByYW5nZTogW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSxcbiAgICAgICAgc2l6ZTogdGhpcy5vcHRpb25zLmJ1YmJsZVNpemVzW2ldLFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYnViYmxlZFNpemVSZWZzXG4gIH1cbiAgcHJvdGVjdGVkIF96b29tU3RhcnRDYigpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnYnViYmxlJzoge1xuICAgICAgICAgIGlmICh0aGlzLmJ1YmJsZUxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmJ1YmJsZUxheWVyKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09PSAnbWFya2VyQnVmZmVyJykge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBfem9vbUVuZENiKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlcicpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUpIHtcbiAgICAgICAgY2FzZSAncG9pbnQnOiB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc0NsdXN0ZXIpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5tYXJrZXJMYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdidWJibGUnOiB7XG4gICAgICAgICAgaWYgKHRoaXMuYnViYmxlTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMuYnViYmxlTGF5ZXIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXJCdWZmZXInKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbiAgLyoqIOmFjee9ruaVo+eCueWbviAqL1xuICBwcm90ZWN0ZWQgY29uZmlnTWFya2VyTGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgY29uc3QgY2FudmFzSWNvbkxheWVyID0gTC5jYW52YXNJY29uTGF5ZXIoe30pLmFkZFRvKHRoaXMubWFwKVxuICAgIC8vIOa3u+WKoOeCueWHu+S6i+S7tlxuICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkNsaWNrTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyIGFzIE1hcmtlcilcbiAgICB9KVxuICAgIC8vIOa3u+WKoOWPs+mUruS6i+S7tlxuICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkNvbnRleHRtZW51TGlzdGVuZXIoKGV2ZW50LCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ2NvbnRleHRtZW51Jywge1xuICAgICAgICBldmVudCxcbiAgICAgICAgdGFyZ2V0OiBtYXJrZXIsXG4gICAgICB9KVxuICAgIH0pXG4gICAgLy8g5re75YqgIGhvdmVyIOS6i+S7tlxuICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcCkge1xuICAgICAgY2FudmFzSWNvbkxheWVyLmFkZE9uSG92ZXJMaXN0ZW5lcigoXywgW3sgZGF0YTogbWFya2VyIH1dKSA9PiB7XG4gICAgICAgIC8vIOS5i+WJjeaciSBob3ZlciDnmoTlhbPpl60gdG9vbHRpcFxuICAgICAgICBpZiAodGhpcy5ob3ZlcmVkTWFya2VyKSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmNsb3NlVG9vbHRpcCgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbWFya2VyIGFzIE1hcmtlclxuXG4gICAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0VG9vbHRpcCgpKSB7XG4gICAgICAgICAgLy8g5aaC5p6c5bey57uP6K6+572uIHRvb2x0aXAg55u05o6l5bGV56S6IHRvb2x0aXBcbiAgICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIub3BlblRvb2x0aXAoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIOWQpuWImee7keWumiB0b29sdGlwIOW5tuWxleekulxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICAgJycgKyB0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIGNhbnZhc0ljb25MYXllci5hZGRNYXJrZXJzKHRoaXMubWFya2VycylcblxuICAgIC8vIOino+WGs+WIneasoea4suafk+S4jeWHuuWbvuagh+mXrumimFxuICAgIHRoaXMubWFwLnBhblRvKHRoaXMubWFwLmdldENlbnRlcigpKVxuXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IGNhbnZhc0ljb25MYXllclxuICAgIHJldHVybiB0aGlzLm1hcmtlckxheWVyXG4gIH1cbiAgLyoqIOiOt+WPliB0b29sdGlwIOWGheWuuSAqL1xuICBwcm90ZWN0ZWQgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gIH1cbiAgLyoqIOWIneWni+WMlumFjee9ruWPguaVsCAqL1xuICBwcm90ZWN0ZWQgaW5pdE9wdGlvbnMob3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNNZXJnZShcbiAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICBvcHRpb25zXG4gICAgKSBhcyBNYXJrZXJzTGF5ZXJPcHRpb25zXG4gIH1cbiAgLyoqIOWIneWni+WMliBNYXJrZXIgKi9cbiAgcHJvdGVjdGVkIGluaXRNYXJrZXJzKCkge1xuICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKClcbiAgICB0aGlzLmNhY2hlQ2xhc3NpZnlQYXJhbXMoKVxuICAgIHRoaXMuY2FjaGVCdWJibGVQYXJhbXMoKVxuICAgIHRoaXMubWFya2VycyA9IFtdXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXSBhcyBMLk1hcmtlclxuXG4gICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKFxuICAgICAgICBbbGF5ZXIuZ2V0TGF0TG5nKCkubGF0LCBsYXllci5nZXRMYXRMbmcoKS5sbmddLFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKGRhdGEpLFxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIC8vIOWwhuebuOWFs+WAvOe7keWumuWIsCBtYXJrZXLkuIpcbiAgICAgIG1hcmtlci5zZXREYXRhKGRhdGEpXG4gICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpXG4gICAgfSlcbiAgfVxuICAvKiog5Yid5aeL5YyW5LqL5Lu2ICovXG4gIHByb3RlY3RlZCBpbml0RXZlbnRzKCkge1xuICAgIHRoaXMubWFwLm9uKCd6b29tc3RhcnQnLCB0aGlzLl96b29tU3RhcnRDYiwgdGhpcylcbiAgICB0aGlzLm1hcC5vbignem9vbWVuZCcsIHRoaXMuX3pvb21FbmRDYiwgdGhpcylcbiAgfVxuICAvLyDlpITnkIYgbWFya2VyIOeCueWHu+S6i+S7tlxuICBwcml2YXRlIG1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXI6IE1hcmtlciwgZml0Qm91bmRzPzogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNlZE1hcmtlciA9IG1hcmtlclxuICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXApIHtcbiAgICAgIC8vIOWIoOmZpOWJjeS4gOS4quaUvuWkp+Wbvuagh1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmVGcm9tKHRoaXMubWFwKVxuICAgICAgfVxuICAgICAgLy8g55Sf5oiQ5b2T5YmN5pS+5aSn5Zu+5qCHXG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbmV3IE1hcmtlcihtYXJrZXIuZ2V0TGF0TG5nKCksIHtcbiAgICAgICAgaWNvbjogdGhpcy5nZXRMYXJnZXJNYXJrZXJJY29uKG1hcmtlci5nZXREYXRhKCkpLFxuICAgICAgfSlcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIuYWRkVG8odGhpcy5tYXApXG4gICAgICAvLyDmt7vliqDmlL7lpKflm77moIfnmoQgcG9wdXBcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXJcbiAgICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSlcbiAgICAgICAgLm9wZW5Qb3B1cCgpXG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZSgpXG4gICAgICB9KVxuICAgIH1cbiAgICBtYXJrZXIuY2xvc2VUb29sdGlwKClcblxuICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZE1hcmtlci5nZXRMYXRMbmcoKSlcbiAgICBpZiAoZml0Qm91bmRzKSB7XG4gICAgICB0aGlzLm1hcC5maXRCb3VuZHMobWFya2VyLmdldExhdExuZygpLnRvQm91bmRzKDEwKSlcbiAgICB9XG4gICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stbWFya2VyJywgbWFya2VyKVxuICB9XG4gIC8qKiDphY3nva7ogZrlkIjlm77lsYIgKi9cbiAgcHJpdmF0ZSBjb25maWdDbHVzdGVyTGF5ZXIoKSB7XG4gICAgLy8g5bGV56S66IGa5ZCI5Zu+5bGCXG4gICAgaWYgKHRoaXMuY2x1c3RlckxheWVyKSB7XG4gICAgICB0aGlzLmNsdXN0ZXJMYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKHtcbiAgICAgIGljb25DcmVhdGVGdW5jdGlvbjogdGhpcy5pY29uQ3JlYXRlRnVuY3Rpb24uYmluZCh0aGlzKSxcbiAgICB9KVxuICAgIHRoaXMuY2x1c3RlckxheWVyLmFkZExheWVycyhcbiAgICAgIHRoaXMubWFya2Vycy5tYXAoKG0pID0+IHtcbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihtLmdldExhdExuZygpLCB7XG4gICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKG0uZ2V0RGF0YSgpKSxcbiAgICAgICAgfSlcbiAgICAgICAgbWFya2VyLnNldERhdGEobS5nZXREYXRhKCkpXG4gICAgICAgIG1hcmtlci5iaW5kVG9vbHRpcCgnJyArIG1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXSlcbiAgICAgICAgbWFya2VyLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSlcbiAgICAgICAgbWFya2VyLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBtYXJrZXJcbiAgICAgIH0pXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmNsdXN0ZXJMYXllclxuICB9XG5cbiAgLyoqIOa4suafk+S4uueDreWKm+WbviAqL1xuICBwcml2YXRlIGNvbmZpZ0hlYXRMYXllcigpIHtcbiAgICBpZiAodGhpcy5oZWF0TGF5ZXIpIHtcbiAgICAgIHRoaXMuaGVhdExheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIGNvbnN0IGFsdHM6IG51bWJlcltdID0gW11cbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBsYXRMbmcgPSBtYXJrZXIuZ2V0TGF0TG5nKClcbiAgICAgIGNvbnN0IGRpbWVuc2lvbkF0dHIgPVxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLmRpbWVuc2lvbkF0dHJcbiAgICAgIGxldCBhbHQgPVxuICAgICAgICAoZGltZW5zaW9uQXR0ciAmJiBtYXJrZXIuZ2V0RGF0YSgpW2RpbWVuc2lvbkF0dHJdKSB8fFxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4XG4gICAgICBpZiAodHlwZW9mIGFsdCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgYWx0ID0gdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLm1heFxuICAgICAgfVxuICAgICAgYWx0cy5wdXNoKGFsdClcbiAgICAgIG1hcmtlci5zZXRMYXRMbmcoTC5sYXRMbmcobGF0TG5nLmxhdCwgbGF0TG5nLmxuZywgYWx0KSlcbiAgICB9KVxuICAgIHRoaXMuaGVhdExheWVyID0gTC5oZWF0TGF5ZXIoXG4gICAgICB0aGlzLm1hcmtlcnMubWFwKChpdCwgaW5kZXgpID0+IFtcbiAgICAgICAgaXQuZ2V0TGF0TG5nKCkubGF0LFxuICAgICAgICBpdC5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgIGFsdHNbaW5kZXhdLFxuICAgICAgXSksXG4gICAgICBvcHRpb25zTWVyZ2UoeyBtaW5PcGFjaXR5OiAwLjUgfSwgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zKVxuICAgIClcbiAgICByZXR1cm4gdGhpcy5oZWF0TGF5ZXJcbiAgfVxuXG4gIC8qKiDmuLLmn5PkuLrmsJTms6Hlm74gKi9cbiAgcHJpdmF0ZSBjb25maWdCdWJibGVMYXllcigpIHtcbiAgICBpZiAodGhpcy5idWJibGVMYXllcikge1xuICAgICAgdGhpcy5idWJibGVMYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmJ1YmJsZUxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCByYWRpdXMgPSB0aGlzLmdldEJ1YmJsZWRNYXJrZXJTaXplKG1hcmtlci5nZXREYXRhKCkpXG4gICAgICBjb25zdCBmaWxsQ29sb3IgPSB0aGlzLmdldEJ1YmJsZWRNYXJrZXJDb2xvcihtYXJrZXIuZ2V0RGF0YSgpKVxuICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuYnViYmxlU3Ryb2tlQ29sb3IgfHwgbGlnaHRlbihmaWxsQ29sb3IpXG4gICAgICBjb25zdCB3ZWlnaHQgPSB0aGlzLm9wdGlvbnMuYnViYmxlU3Ryb2tlV2lkdGhcbiAgICAgIGNvbnN0IG9wYWNpdHkgPSB0aGlzLm9wdGlvbnMuYnViYmxlU3Ryb2tlT3BhY2l0eVxuICAgICAgY29uc3QgZmlsbE9wYWNpdHkgPSB0aGlzLm9wdGlvbnMuYnViYmxlRmlsbE9wYWNpdHlcbiAgICAgIGNvbnN0IGJ1YmJsZSA9IEwuY2lyY2xlTWFya2VyKG1hcmtlci5nZXRMYXRMbmcoKSwge1xuICAgICAgICByYWRpdXMsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBmaWxsQ29sb3IsXG4gICAgICAgIHdlaWdodCxcbiAgICAgICAgb3BhY2l0eSxcbiAgICAgICAgZmlsbE9wYWNpdHksXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCkge1xuICAgICAgICBidWJibGUuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwKSB7XG4gICAgICAgIGJ1YmJsZS5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5idWJibGVMYXllci5hZGRMYXllcihidWJibGUpXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5idWJibGVMYXllclxuICB9XG5cbiAgLyoqIOiOt+WPluWbvuagh+aUvuWkp+WQjiBpY29uICovXG4gIHByaXZhdGUgZ2V0TGFyZ2VyTWFya2VySWNvbihkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWFya2VySWNvbihkYXRhLCB0cnVlKVxuICB9XG5cbiAgLyoqIOiOt+WPluWbvuaghyBpY29uICovXG4gIHByaXZhdGUgZ2V0TWFya2VySWNvbihkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWFya2VySWNvbihkYXRhLCBmYWxzZSlcbiAgfVxuXG4gIC8qKiDojrflj5blvZPliY0gbWFya2VyIOmcgOimgeWxleekuueahCBpY29uXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMYXJnZXIg5piv5ZCm5pS+5aSnXG4gICAqL1xuICBwcml2YXRlIF9nZXRNYXJrZXJJY29uKFxuICAgIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgICBpc0xhcmdlcjogYm9vbGVhblxuICApOiBMLkljb24gfCBMLkRpdkljb24ge1xuICAgIGNvbnN0IGljb25TaXplID0gdGhpcy5vcHRpb25zLmljb25TaXplXG4gICAgY29uc3QgaWNvbkFuY2hvciA9IHRoaXMub3B0aW9ucy5pY29uQW5jaG9yXG4gICAgY29uc3QgbGFyZ2VySWNvblNpemUgPSBbaWNvblNpemVbMF0gKiAxLjUsIGljb25TaXplWzFdICogMS41XSBhcyBbXG4gICAgICBudW1iZXIsXG4gICAgICBudW1iZXJcbiAgICBdXG4gICAgY29uc3QgbGFyZ2VySWNvbkFuY2hvciA9IFtpY29uQW5jaG9yWzBdICogMS41LCBpY29uQW5jaG9yWzFdICogMS41XSBhcyBbXG4gICAgICBudW1iZXIsXG4gICAgICBudW1iZXJcbiAgICBdXG5cbiAgICBjb25zdCBpY29uQ29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yXG5cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgY2FzZSAnaW1hZ2UnOiB7XG4gICAgICAgIC8vIHJldHVybiBMLmljb24oe1xuICAgICAgICAvLyAgIGljb25Vcmw6IHRoaXMub3B0aW9ucy5pY29uSW1hZ2VVcmwsXG4gICAgICAgIC8vICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgLy8gICBpY29uQW5jaG9yLFxuICAgICAgICAvLyB9KVxuICAgICAgfVxuICAgICAgY2FzZSAnZm9udF9jbGFzcyc6XG4gICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgaHRtbDogdGhpcy5nZXRDdXN0b21JY29uSFRNTChkYXRhLCB7XG4gICAgICAgICAgICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXJnZXIgPyAnbGFyZ2UtZGl2LWljb24tbWFya2VyJyA6ICcnLFxuICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgaWNvbkFuY2hvcjogaXNMYXJnZXIgPyBsYXJnZXJJY29uQW5jaG9yIDogaWNvbkFuY2hvcixcbiAgICAgICAgICB0b29sdGlwQW5jaG9yOiBpc0xhcmdlclxuICAgICAgICAgICAgPyBbMCwgLWxhcmdlckljb25BbmNob3JbMV0gLyAyXVxuICAgICAgICAgICAgOiBbMCwgLWljb25BbmNob3JbMV0gLyAyXSxcbiAgICAgICAgICBwb3B1cEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyVHlwZSDkuI3og73kuLogJHt0aGlzLm9wdGlvbnMuaWNvblR5cGV9YClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqIOiOt+WPlmljb24gaHRtbCAqL1xuICBwcml2YXRlIGdldEN1c3RvbUljb25IVE1MKFxuICAgIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgICBvcHRpb25zPzogSWNvblJlbmRlckZ1bmNPcHRpb25cbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmljb25SZW5kZXJlcikge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKGRhdGEsIG9wdGlvbnMpXG4gICAgfVxuICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3JcbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJQb2ludENvbG9yVHlwZSkge1xuICAgICAgY2FzZSAnc2luZ2xlJzoge1xuICAgICAgICBjb2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3JcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ2NsYXNzaWZpZWQnOiB7XG4gICAgICAgIGNvbG9yID0gdGhpcy5nZXRDbGFzc2lmeU1hcmtlckNvbG9yKGRhdGEpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdzZWdtZW50ZWQnOiB7XG4gICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYHJlbmRlclBvaW50Q29sb3JUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGV9XCJgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgIC8vIOS9v+eUqCBjbGFzc1xuICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICA8aSBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICBgXG4gICAgICB9XG4gICAgICAvLyDkvb/nlKggc3ZnXG4gICAgICBjYXNlICdzeW1ib2wnOiB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24tc3ltYm9sXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMub3B0aW9ucy5pY29uU3ltYm9sfVwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICAgIC8vIOS9v+eUqCB1bmljb2RlXG4gICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIDxpXG4gICAgICAgICAgICBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMub3B0aW9ucy5pY29uVW5pY29kZX1cbiAgICAgICAgICA8L2k+XG4gICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqIOe8k+WtmOWIhuexu+ebuOWFs+WPguaVsCAqL1xuICBwcml2YXRlIGNhY2hlQ2xhc3NpZnlQYXJhbXMoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRtcDogeyBbcHJvcDogc3RyaW5nXTogW3N0cmluZywgbnVtYmVyXSB9ID0ge31cbiAgICBjb25zdCBwcm9wID0gdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YVtwcm9wXSBpbiB0bXApIHtcbiAgICAgICAgdG1wW2RhdGFbcHJvcF1dID0gW2RhdGFbcHJvcF0sIHRtcFtkYXRhW3Byb3BdXVsxXSArIDFdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgMV1cbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXModG1wKVxuICAgIHZhbHVlcy5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlcbiAgICB0aGlzLmNsYXNzaWZpZWRDb2xvclJlZnMgPSBbXVxuICAgIGxldCBvdGhlck51bXMgPSAwXG4gICAgdmFsdWVzLmZvckVhY2goKFthdHRyLCBudW1zXSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjb2xvciA9IERFRkFVTFRfQ09MT1JcbiAgICAgIGlmIChpbmRleCA8IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzLmxlbmd0aCkge1xuICAgICAgICBjb2xvciA9IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzW2luZGV4XVxuICAgICAgfVxuICAgICAgdGhpcy5jbGFzc2lmaWVkQ29sb3JNYXBbYXR0cl0gPSBjb2xvclxuXG4gICAgICBpZiAoaW5kZXggPCB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jbGFzc2lmaWVkQ29sb3JSZWZzLnB1c2goe1xuICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgY29sb3IsXG4gICAgICAgICAgbnVtcyxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG90aGVyTnVtcyArPSBudW1zXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAob3RoZXJOdW1zID4gMCkge1xuICAgICAgdGhpcy5jbGFzc2lmaWVkQ29sb3JSZWZzLnB1c2goe1xuICAgICAgICBhdHRyOiAn5YW25a6DJyxcbiAgICAgICAgY29sb3I6IERFRkFVTFRfQ09MT1IsXG4gICAgICAgIG51bXM6IG90aGVyTnVtcyxcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIC8qKiDnvJPlrZjmsJTms6Hnm7jlhbPlj4LmlbAgKi9cbiAgcHJpdmF0ZSBjYWNoZUJ1YmJsZVBhcmFtcygpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5idWJibGVTaXplQXR0cikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGJ1YmJsZWRTaXplc0xlbmd0aCA9IHRoaXMub3B0aW9ucy5idWJibGVTaXplcy5sZW5ndGhcbiAgICBsZXQgbWF4U2l6ZVZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5TaXplVmFsID0gSW5maW5pdHlcbiAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgY29uc3Qgc2l6ZVZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLmJ1YmJsZVNpemVBdHRyXVxuICAgICAgbWF4U2l6ZVZhbCA9IE1hdGgubWF4KG1heFNpemVWYWwsIHNpemVWYWwpXG4gICAgICBtaW5TaXplVmFsID0gTWF0aC5taW4obWluU2l6ZVZhbCwgc2l6ZVZhbClcbiAgICB9XG4gICAgY29uc3Qgc2l6ZVN0ZXAgPSAobWF4U2l6ZVZhbCAtIG1pblNpemVWYWwgKyAxKSAvIGJ1YmJsZWRTaXplc0xlbmd0aFxuICAgIHRoaXMuYnViYmxlZFNpemVNaW4gPSBtaW5TaXplVmFsXG4gICAgdGhpcy5idWJibGVkU2l6ZVN0ZXAgPSBzaXplU3RlcFxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYnViYmxlQ29sb3JBdHRyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0bXA6IHsgW3Byb3A6IHN0cmluZ106IFtzdHJpbmcsIG51bWJlcl0gfSA9IHt9XG4gICAgY29uc3QgcHJvcCA9IHRoaXMub3B0aW9ucy5idWJibGVDb2xvckF0dHJcbiAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhW3Byb3BdIGluIHRtcCkge1xuICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgdG1wW2RhdGFbcHJvcF1dWzFdICsgMV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCAxXVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0bXApXG4gICAgdmFsdWVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgIHRoaXMuYnViYmxlZENvbG9yUmVmcyA9IFtdXG4gICAgdmFsdWVzLmZvckVhY2goKFthdHRyLCBudW1zXSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjb2xvciA9IERFRkFVTFRfQ09MT1JcbiAgICAgIGlmIChpbmRleCA8IHRoaXMub3B0aW9ucy5idWJibGVDb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbG9yID0gdGhpcy5vcHRpb25zLmJ1YmJsZUNvbG9yc1tpbmRleF1cbiAgICAgIH1cbiAgICAgIHRoaXMuYnViYmxlZENvbG9yTWFwW2F0dHJdID0gY29sb3JcbiAgICAgIHRoaXMuYnViYmxlZENvbG9yUmVmcy5wdXNoKHtcbiAgICAgICAgYXR0cixcbiAgICAgICAgY29sb3IsXG4gICAgICAgIG51bXMsXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgLyoqIOiOt+WPluWIhuexu+minOiJsiAqL1xuICBwcml2YXRlIGdldENsYXNzaWZ5TWFya2VyQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc2lmaWVkQ29sb3JNYXBbZGF0YVt0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHJdXVxuICB9XG4gIC8qKiDnvJPlrZjliIbmrrXnm7jlhbPlj4LmlbAgKi9cbiAgcHJpdmF0ZSBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGhcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5XG4gICAgbGV0IG1pblZhbCA9IEluZmluaXR5XG4gICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbClcbiAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKVxuICAgIH1cbiAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWxcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwXG4gIH1cbiAgLyoqIOiOt+WPluWIhuauteminOiJsiAqL1xuICBwcml2YXRlIGdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGE6IERhdGFMaXN0SXRlbSk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbXG4gICAgICBwYXJzZUludCgnJyArICh2YWwgLSB0aGlzLnNlZ21lbnRlZE1pbikgLyB0aGlzLnNlZ21lbnRlZFN0ZXAsIDEwKVxuICAgIF1cbiAgICByZXR1cm4gY29sb3JcbiAgfVxuICAvKiog6I635Y+W5rCU5rOh5aSn5bCPICovXG4gIHByaXZhdGUgZ2V0QnViYmxlZE1hcmtlclNpemUoZGF0YTogRGF0YUxpc3RJdGVtKTogbnVtYmVyIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5idWJibGVTaXplQXR0cl1cbiAgICBjb25zdCBzaXplID0gdGhpcy5vcHRpb25zLmJ1YmJsZVNpemVzW1xuICAgICAgcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5idWJibGVkU2l6ZU1pbikgLyB0aGlzLmJ1YmJsZWRTaXplU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBzaXplXG4gIH1cbiAgLyoqIOiOt+WPluawlOazoeminOiJsiAqL1xuICBwcml2YXRlIGdldEJ1YmJsZWRNYXJrZXJDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmJ1YmJsZWRDb2xvck1hcFtkYXRhW3RoaXMub3B0aW9ucy5idWJibGVDb2xvckF0dHJdXVxuICB9XG4gIC8qKiDojrflj5YgcG9wdXAg5YaF5a65ICovXG4gIHByaXZhdGUgZ2V0UG9wdXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWBcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke1xuICAgICAgICBkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICB9YFxuICAgIH1cbiAgfVxuICAvKiog5Yib5bu6IGNsdXN0ZXIgaWNvbiAqL1xuICBwcml2YXRlIGljb25DcmVhdGVGdW5jdGlvbihjbHVzdGVyOiBMLk1hcmtlcnNDbHVzdGVyKSB7XG4gICAgY29uc3QgY29sb3JzID0gWycjNzU3NDcyJywgJyM1MDkzRTInLCAnI0NCNzk4NycsICcjRkM3NjNCJ11cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmRhdGFMaXN0Lmxlbmd0aFxuICAgIGNvbnN0IHN0ZXAgPSBsZW5ndGggLyBjb2xvcnMubGVuZ3RoXG4gICAgY29uc3Qgc2NhbGVTdGVwID0gKDEgLSAwLjc1KSAvIGNvbG9ycy5sZW5ndGhcbiAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yXG4gICAgbGV0IHNjYWxlID0gMVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyQ2x1c3RlckNvbG9yVHlwZSA9PT0gJ3NtYXJ0Jykge1xuICAgICAgY29sb3IgPSBjb2xvcnNbTWF0aC5mbG9vcigoY2x1c3Rlci5nZXRDaGlsZENvdW50KCkgLSAxKSAvIHN0ZXApXVxuICAgICAgc2NhbGUgPVxuICAgICAgICAoTWF0aC5mbG9vcigoY2x1c3Rlci5nZXRDaGlsZENvdW50KCkgLSAxKSAvIHN0ZXApICsgMSkgKiBzY2FsZVN0ZXAgK1xuICAgICAgICAwLjc1XG4gICAgfVxuICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgaHRtbDogYFxuICAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoJHtzY2FsZX0sICR7c2NhbGV9LCAxKVxuICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVuKGNvbG9yKX07XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcn07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIG1hcmdpbjogOXB4O1xuICAgICAgICAgIFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgbGVmdDogOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgJHtjbHVzdGVyLmdldENoaWxkQ291bnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgICAgaWNvblNpemU6IFs0MCwgNDBdLFxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCBQb2x5Z29uIGZyb20gJy4vUG9seWdvbidcbmltcG9ydCBQb2x5Z29uc0xheWVyLCB7IFBvbHlnb25MYXllck9wdGlvbnMgfSBmcm9tICcuL1BvbHlnb25zTGF5ZXInXG5pbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWRzTGF5ZXIgZXh0ZW5kcyBQb2x5Z29uc0xheWVyIHtcbiAgcHJpdmF0ZSBwcm9wTWF4TGVuZ3RoOiBudW1iZXJcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgc3VwZXIobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpXG4gICAgdGhpcy5wcm9wTWF4TGVuZ3RoID0gLTFcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnR3JpZExheWVyKClcbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIC8vIHRvb2x0aXAg5pyJ5Y+v6IO96ZyA6KaB55u05o6l5bGV56S677yM6ZyA6KaB5ZyoIHBvbHlnb24g5re75Yqg5Yiw5Zyw5Zu+5LiK5LmL5ZCO5omN5Y+v5Lul77yM5omA5Lul6ZyA6KaB5bu26L+f6K6+572uXG4gICAgdGhpcy5jb25maWdUb29sdGlwKClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuem9vbUhhbmRsZXIoKVxuICAgIH0sIDIwMClcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyB0b2dnbGVUb29sdGlwKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgIGlmIChwb2x5Z29uLmdldFRvb2x0aXAoKSkge1xuICAgICAgICBwb2x5Z29uLmdldFRvb2x0aXAoKS5zZXRPcGFjaXR5KHZpc2libGUgPyAxIDogMClcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHByb3RlY3RlZCBpbml0RXZlbnQoKSB7XG4gICAgdGhpcy5tYXAub24oJ3pvb20nLCB0aGlzLnpvb21IYW5kbGVyLmJpbmQodGhpcykpXG4gIH1cbiAgcHJpdmF0ZSBjb25maWdUb29sdGlwKCkge1xuICAgIHRoaXMucHJvcE1heExlbmd0aCA9IHRoaXMuZ2V0UHJvcE1heExlbmd0aCgpXG4gICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgIHBvbHlnb24uYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5Z29uLmdldERhdGEoKSksIHtcbiAgICAgICAgICBwZXJtYW5lbnQ6IHRydWUsXG4gICAgICAgICAgZGlyZWN0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHByaXZhdGUgY29uZmlnR3JpZExheWVyKCkge1xuICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlnb25zID0gdGhpcy5wb2x5Z29ucy5tYXAoKHBvbHlnb24pID0+IHtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKHBvbHlnb24uZ2V0RGF0YSgpKVxuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgY29sb3IsXG4gICAgICB9KVxuICAgICAgLy8g6YeN5paw5bqU55SoIG9wdGlvbnNcbiAgICAgIGNvbnN0IG5ld1BvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucylcbiAgICAgIG5ld1BvbHlnb24uc2V0RGF0YShwb2x5Z29uLmdldERhdGEoKSlcbiAgICAgIG5ld1BvbHlnb24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbilcbiAgICAgIH0pXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICBuZXdQb2x5Z29uLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChuZXdQb2x5Z29uLmdldERhdGEoKSkpXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3UG9seWdvblxuICAgIH0pXG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWdvbkxheWVyXG4gIH1cbiAgcHJpdmF0ZSB6b29tSGFuZGxlcigpIHtcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5wb2x5Z29uc1swXVxuICAgIGlmICghcG9seWdvbikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMudG9nZ2xlVG9vbHRpcChcbiAgICAgIHRoaXMuZ2V0UmVjdGFuZ2xlV2lkdGgocG9seWdvbikgPlxuICAgICAgICB0aGlzLmdldFRvb2x0aXBNYXhXaWR0aCh0aGlzLnByb3BNYXhMZW5ndGgpXG4gICAgKVxuICB9XG4gIHByaXZhdGUgZ2V0UmVjdGFuZ2xlV2lkdGgocG9seWdvbjogUG9seWdvbikge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm1hcC5sYXRMbmdUb0xheWVyUG9pbnQocG9seWdvbi5nZXRCb3VuZHMoKS5nZXROb3J0aEVhc3QoKSkueCAtXG4gICAgICB0aGlzLm1hcC5sYXRMbmdUb0xheWVyUG9pbnQocG9seWdvbi5nZXRCb3VuZHMoKS5nZXRTb3V0aFdlc3QoKSkueFxuICAgIClcbiAgfVxuICBwcml2YXRlIGdldFRvb2x0aXBNYXhXaWR0aCh0ZXh0TGVuZ3RoOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGV4dExlbmd0aCAqIDEyICsgMTRcbiAgfVxuICBwcml2YXRlIGdldFByb3BNYXhMZW5ndGgoKSB7XG4gICAgY29uc3QgcHJvcCA9XG4gICAgICB0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB0aGlzLm9wdGlvbnMucG9wdXBBdHRyXG4gICAgICAgIDogdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25zXG4gICAgICAubWFwKChwb2x5Z29uKSA9PiBgJHtwb2x5Z29uLmdldERhdGEoKVtwcm9wXX1gLmxlbmd0aClcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KHByZXYsIGN1cnIpXG4gICAgICB9LCAwKVxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0gfSBmcm9tICcuLi9kZWZpbml0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEwuUG9seWdvbiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX19kYXRhOiBEYXRhTGlzdEl0ZW1cbiAgY29uc3RydWN0b3IoXG4gICAgbGF0bG5nczpcbiAgICAgIHwgTC5MYXRMbmdFeHByZXNzaW9uW11cbiAgICAgIHwgTC5MYXRMbmdFeHByZXNzaW9uW11bXVxuICAgICAgfCBMLkxhdExuZ0V4cHJlc3Npb25bXVtdW10sXG4gICAgb3B0aW9ucz86IEwuUG9seWxpbmVPcHRpb25zXG4gICkge1xuICAgIHN1cGVyKGxhdGxuZ3MsIG9wdGlvbnMpXG4gIH1cbiAgcHVibGljIHNldERhdGEoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgdGhpcy5fX2RhdGEgPSBkYXRhXG4gIH1cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kYXRhXG4gIH1cbn1cbiIsImltcG9ydCB7IGxpZ2h0ZW4sIGRhcmtlbiwgb3B0aW9uc01lcmdlIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXG5pbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgUG9seWdvbiBmcm9tICcuL1BvbHlnb24nXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBQb2x5Z29uTGF5ZXJSZW5kZXJDb2xvclR5cGUgPSAnc2luZ2xlJyB8ICdzZWdtZW50ZWQnIHwgJ2NsYXNzaWZpZWQnXG50eXBlIENvbG9yTW9kZSA9ICdkYXJrZW4nIHwgJ2xpZ2h0ZW4nIHwgJ25vcm1hbCdcblxuY29uc3QgREVGQVVMVF9DT0xPUiA9ICcjNzJBRkRGJ1xuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5Z29uQ29sb3JUeXBlOiBQb2x5Z29uTGF5ZXJSZW5kZXJDb2xvclR5cGVcblxuICAvKiogcG9wdXAg5bGV56S65a2X5q61ICovXG4gIHBvcHVwQXR0cj86IHN0cmluZyB8IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IGFueSB9XG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cblxuICAvKiog5YiG57G75Z6L5riy5p+T57uf6K6h5a2X5q61ICovXG4gIGNsYXNzaWZpZWRBdHRyPzogc3RyaW5nXG4gIGNsYXNzaWZpZWRDb2xvcnM/OiBzdHJpbmdbXVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbnNMYXllciB7XG4gIHB1YmxpYyB0eXBlOiBzdHJpbmdcblxuICBwcm90ZWN0ZWQgdmlzaWJsZTogYm9vbGVhblxuICBwcm90ZWN0ZWQgbGF5ZXI6IEwuTGF5ZXJHcm91cFxuXG4gIHByb3RlY3RlZCBtYXA6IEwuTWFwXG4gIHByb3RlY3RlZCBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW11cbiAgcHJvdGVjdGVkIG9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnNcbiAgcHJvdGVjdGVkIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICBwcm90ZWN0ZWQgc2VnbWVudGVkTWluOiBudW1iZXJcbiAgcHJvdGVjdGVkIHNlZ21lbnRlZFN0ZXA6IG51bWJlclxuICBwcm90ZWN0ZWQgcG9seWdvbnM6IFBvbHlnb25bXVxuICBwcm90ZWN0ZWQgZm9jdXNlZFBvbHlnb246IFBvbHlnb25cbiAgcHJvdGVjdGVkIGZvY3VzZWREaXNwbGF5UG9seWdvbjogUG9seWdvblxuICBwcm90ZWN0ZWQgcG9seWdvbkxheWVyOiBMLkxheWVyR3JvdXBcblxuICAvKiog6K6w5b2V5p+Q5LiqIHByb3Ag5a+55bqU55qE5riy5p+T6aKc6ImyICovXG4gIHByaXZhdGUgY2xhc3NpZnlDb2xvck1hcDogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIH1cbiAgLyoqIOWIhuexu+a4suafk+minOiJsuWPgueFpyjmj5Dkvpvnu5nosIPnlKjogIXkvb/nlKgpICovXG4gIHByaXZhdGUgY2xhc3NpZnlDb2xvclJlZnM6IEFycmF5PHtcbiAgICBhdHRyOiBzdHJpbmdcbiAgICBjb2xvcjogc3RyaW5nXG4gICAgbnVtczogbnVtYmVyXG4gIH0+XG4gIHByaXZhdGUgZGVmYXVsdE9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnNcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGFMaXN0KSB8fCBkYXRhTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZGF0YUxpc3Qg5b+F6aG75piv6Z2e56m65pWw57uEYClcbiAgICB9XG5cbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICAgIGNvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgIGZpbGxDb2xvcjogREVGQVVMVF9DT0xPUixcbiAgICAgIHdlaWdodDogMSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBmaWxsT3BhY2l0eTogMC40LFxuICAgICAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFtERUZBVUxUX0NPTE9SXSxcbiAgICAgIGNsYXNzaWZpZWRDb2xvcnM6IFtERUZBVUxUX0NPTE9SXSxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3BvbHlnb24nXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zTWVyZ2UoXG4gICAgICB0aGlzLmRlZmF1bHRPcHRpb25zLFxuICAgICAgb3B0aW9uc1xuICAgICkgYXMgUG9seWdvbkxheWVyT3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMucG9seWdvbnMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5jbGFzc2lmeUNvbG9yTWFwID0ge31cbiAgICB0aGlzLmZvY3VzZWRQb2x5Z29uID0gbnVsbFxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uID0gbnVsbFxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBQb2x5Z29uTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKVxuICAgIHRoaXMuaW5pdFBvbHlnb25zKClcbiAgICB0aGlzLmluaXRFdmVudCgpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWdvbkxheWVyKClcbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIGZpdEJvdW5kcygpIHtcbiAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5nZXRCb3VuZHMoKSwgeyBwYWRkaW5nOiBbMjAsIDIwXSB9KVxuICB9XG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5wb2x5Z29ucy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25zLnJlZHVjZShcbiAgICAgIChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSxcbiAgICAgIEwubGF0TG5nQm91bmRzKFxuICAgICAgICB0aGlzLnBvbHlnb25zWzBdLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpLFxuICAgICAgICB0aGlzLnBvbHlnb25zWzBdLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpXG4gICAgICApXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgdG9nZ2xlVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZVxuICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKClcbiAgICAgIH1cbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25zLmZpbGxDb2xvciA9IGNvbG9yXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICBpZiAocG9seWdvbi5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMucG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uLCB0cnVlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHB1YmxpYyBnZXRDbGFzc2lmeUNvbG9yUmVmcygpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yUmVmc1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eVxuICBwcm90ZWN0ZWQgaW5pdEV2ZW50KCkge31cbiAgcHJvdGVjdGVkIGdldFRvb2xUaXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXVxuICB9XG4gIHByb3RlY3RlZCBnZXRQb3B1cENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHJ9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0cl19YFxuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0ci5sYWJlbH06ICR7XG4gICAgICAgIGRhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZV1cbiAgICAgIH1gXG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBjYWNoZUNsYXNzaWZ5UGFyYW1zKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0bXA6IHsgW3Byb3A6IHN0cmluZ106IFtzdHJpbmcsIG51bWJlcl0gfSA9IHt9XG4gICAgY29uc3QgcHJvcCA9IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQXR0clxuICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGFbcHJvcF0gaW4gdG1wKSB7XG4gICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCB0bXBbZGF0YVtwcm9wXV1bMV0gKyAxXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wW2RhdGFbcHJvcF1dID0gW2RhdGFbcHJvcF0sIDFdXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHRtcClcbiAgICB2YWx1ZXMuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pXG4gICAgdGhpcy5jbGFzc2lmeUNvbG9yUmVmcyA9IFtdXG4gICAgdmFsdWVzLmZvckVhY2goKFthdHRyLCBudW1zXSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjb2xvciA9ICdibGFjaydcbiAgICAgIGlmIChpbmRleCA8IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzLmxlbmd0aCkge1xuICAgICAgICBjb2xvciA9IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzW2luZGV4XVxuICAgICAgfVxuICAgICAgdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2F0dHJdID0gY29sb3JcbiAgICAgIHRoaXMuY2xhc3NpZnlDb2xvclJlZnMucHVzaCh7XG4gICAgICAgIGF0dHIsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBudW1zLFxuICAgICAgfSlcbiAgICB9KVxuICB9XG4gIHByb3RlY3RlZCBnZXRDbGFzc2lmeVBvbHlnb25Db2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsYXNzaWZ5Q29sb3JNYXBbZGF0YVt0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHJdXVxuICB9XG4gIHByb3RlY3RlZCBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGhcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5XG4gICAgbGV0IG1pblZhbCA9IEluZmluaXR5XG4gICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbClcbiAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKVxuICAgIH1cbiAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWxcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwXG4gIH1cbiAgcHJvdGVjdGVkIGdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW1xuICAgICAgcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMClcbiAgICBdXG4gICAgcmV0dXJuIGNvbG9yXG4gIH1cbiAgcHJvdGVjdGVkIHBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbjogUG9seWdvbiwgZml0Qm91bmRzPzogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBwb2x5Z29uXG4gICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKVxuICAgIH1cbiAgICAvLyDnlJ/miJDlvZPliY0gZm9jdXNcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbiA9IG5ldyBQb2x5Z29uKHBvbHlnb24uZ2V0TGF0TG5ncygpLCB7XG4gICAgICBjb2xvcjogREVGQVVMVF9DT0xPUixcbiAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgfSlcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5hZGRUbyh0aGlzLm1hcClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgIC5vcGVuUG9wdXAoKVxuXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKVxuICAgIH0pXG4gICAgcG9seWdvbi5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24uZ2V0Q2VudGVyKCkpXG4gICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHBvbHlnb24uZ2V0Qm91bmRzKCkpXG4gICAgfVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlnb24nLCBwb2x5Z29uKVxuICB9XG4gIHByb3RlY3RlZCBpbml0T3B0aW9ucyhvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc01lcmdlKFxuICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIG9wdGlvbnNcbiAgICApIGFzIFBvbHlnb25MYXllck9wdGlvbnNcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdFBvbHlnb25zKCkge1xuICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKClcbiAgICB0aGlzLmNhY2hlQ2xhc3NpZnlQYXJhbXMoKVxuICAgIHRoaXMucG9seWdvbnMgPSBbXVxuICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF1cbiAgICAgIGNvbnN0IHBvbHlnb24gPSBuZXcgUG9seWdvbigobGF5ZXIgYXMgTC5Qb2x5Z29uKS5nZXRMYXRMbmdzKCkpXG5cbiAgICAgIHBvbHlnb24uc2V0RGF0YShkYXRhKVxuICAgICAgdGhpcy5wb2x5Z29ucy5wdXNoKHBvbHlnb24pXG4gICAgfSlcbiAgfVxuICBwcml2YXRlIGNvbmZpZ1BvbHlnb25MYXllcigpIHtcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5Z29ucyA9IHRoaXMucG9seWdvbnMubWFwKChwb2x5Z29uKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBMLlBvbHlsaW5lT3B0aW9ucyA9IG9wdGlvbnNNZXJnZSh7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWdvbi5nZXREYXRhKCkpLFxuICAgICAgfSlcbiAgICAgIC8vIOmHjeaWsOW6lOeUqCBvcHRpb25zXG4gICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IFBvbHlnb24ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpXG4gICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgIG5ld1BvbHlnb24uYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5Z29uLmdldERhdGEoKSkpXG4gICAgICB9XG4gICAgICBuZXdQb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICB9KVxuICAgICAgcmV0dXJuIG5ld1BvbHlnb25cbiAgICB9KVxuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIuYWRkTGF5ZXIocG9seWdvbilcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllclxuICB9XG4gIHByaXZhdGUgZ2V0Q29sb3IoZGF0YTogRGF0YUxpc3RJdGVtLCBtb2RlPzogQ29sb3JNb2RlKSB7XG4gICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihkYXRhKVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlnb25Db2xvclR5cGUgPT09ICdjbGFzc2lmaWVkJykge1xuICAgICAgY29sb3IgPSB0aGlzLmdldENsYXNzaWZ5UG9seWdvbkNvbG9yKGRhdGEpXG4gICAgfVxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgcmV0dXJuIGRhcmtlbihjb2xvcilcbiAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICByZXR1cm4gbGlnaHRlbihjb2xvcilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb2xvclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCB0eXBlIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiA9XG4gIHwgTC5MYXRMbmdFeHByZXNzaW9uW11cbiAgfCBMLkxhdExuZ0V4cHJlc3Npb25bXVtdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZSBleHRlbmRzIEwuUG9seWxpbmUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKGxhdGxuZ3M6IFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IEwuUG9seWxpbmVPcHRpb25zKSB7XG4gICAgc3VwZXIobGF0bG5ncywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlsaW5lc0xheWVyIGZyb20gJy4vUG9seWxpbmVzTGF5ZXInXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBQb2x5bGluZUxheWVyUmVuZGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuaW50ZXJmYWNlIFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Db3JyaWRvck9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nXG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlsaW5lc0J1ZmZlckxheWVyIGV4dGVuZHMgUG9seWxpbmVzTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9uc1xuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgc3VwZXIobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zID0ge1xuICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIGNvcnJpZG9yOiAxMDAsXG4gICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgb3BhY2l0eTogMC41LFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncG9seWxpbmVCdWZmZXInXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgLy8gdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5bGluZXMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKVxuICB9XG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKFxuICAgICAgKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLFxuICAgICAgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKClcbiAgICApXG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwcml2YXRlIGNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKSB7XG4gICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgcG9seWxpbmUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lKVxuICAgICAgfSlcbiAgICAgIGNvbnN0IG9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGNvbnN0IHBvbHlsaW5lQnVmZmVyID0gTC5jb3JyaWRvcihcbiAgICAgICAgKHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBMLkxhdExuZ1tdKS5tYXAoKGxhdExuZykgPT5cbiAgICAgICAgICBMLmxhdExuZyhbbGF0TG5nLmxhdCwgbGF0TG5nLmxuZ10pXG4gICAgICAgICksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgcG9seWxpbmVCdWZmZXIuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKHBvbHlsaW5lQnVmZmVyKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgUG9seWxpbmUsIHsgUG9seWxpbmVMYXRMbmdFeHByZXNzaW9uIH0gZnJvbSAnLi9Qb2x5bGluZSdcbmltcG9ydCB7IGRhcmtlbiwgbGlnaHRlbiwgb3B0aW9uc01lcmdlIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBQb2x5bGluZUxheWVyUmVuZGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJyB8ICdjbGFzc2lmaWVkJ1xudHlwZSBDb2xvck1vZGUgPSAnZGFya2VuJyB8ICdsaWdodGVuJyB8ICdub3JtYWwnXG5pbnRlcmZhY2UgUG9seWxpbmVMYXllck9wdGlvbnMgZXh0ZW5kcyBMLlBvbHlsaW5lT3B0aW9ucyB7XG4gIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiBQb2x5bGluZUxheWVyUmVuZGVyQ29sb3JUeXBlXG5cbiAgLyoqIHBvcHVwIOWxleekuuWtl+autSAqL1xuICBwb3B1cEF0dHI/OiBzdHJpbmcgfCB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBhbnkgfVxuICAvKiogdG9vbHRpcCDlsZXnpLrlrZfmrrUgKi9cbiAgdG9vbHRpcEF0dHI/OiBzdHJpbmdcblxuICBvcGFjaXR5PzogbnVtYmVyXG5cbiAgLyoqIOWIhuautea4suafk+e7n+iuoeWtl+autSAqL1xuICBzZWdtZW50ZWRBdHRyPzogc3RyaW5nXG4gIHNlZ21lbnRlZENvbG9ycz86IHN0cmluZ1tdXG5cbiAgLyoqIOWIhuexu+Wei+a4suafk+e7n+iuoeWtl+autSAqL1xuICBjbGFzc2lmaWVkQXR0cj86IHN0cmluZ1xuICBjbGFzc2lmaWVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlsaW5lc0xheWVyIHtcbiAgcHVibGljIHR5cGU6IHN0cmluZ1xuXG4gIHByb3RlY3RlZCB2aXNpYmxlOiBib29sZWFuXG4gIHByb3RlY3RlZCBsYXllcjogTC5MYXllckdyb3VwXG5cbiAgcHJvdGVjdGVkIG1hcDogTC5NYXBcbiAgcHJvdGVjdGVkIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVxuICBwcm90ZWN0ZWQgb3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnNcbiAgcHJvdGVjdGVkIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICBwcm90ZWN0ZWQgcG9seWxpbmVzOiBQb2x5bGluZVtdXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRNaW46IG51bWJlclxuICBwcm90ZWN0ZWQgc2VnbWVudGVkU3RlcDogbnVtYmVyXG4gIHByb3RlY3RlZCBmb2N1c2VkUG9seWxpbmU6IFBvbHlsaW5lXG4gIHByb3RlY3RlZCBmb2N1c2VkRGlzcGxheVBvbHlsaW5lOiBQb2x5bGluZVxuICBwcm90ZWN0ZWQgcG9seWxpbmVMYXllcjogTC5MYXllckdyb3VwXG4gIC8qKiDorrDlvZXmn5DkuKogcHJvcCDlr7nlupTnmoTmuLLmn5PpopzoibIgKi9cbiAgcHJpdmF0ZSBjbGFzc2lmeUNvbG9yTWFwOiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfVxuICAvKiog5YiG57G75riy5p+T6aKc6Imy5Y+C54WnKOaPkOS+m+e7meiwg+eUqOiAheS9v+eUqCkgKi9cbiAgcHJpdmF0ZSBjbGFzc2lmeUNvbG9yUmVmczogQXJyYXk8e1xuICAgIGF0dHI6IHN0cmluZ1xuICAgIGNvbG9yOiBzdHJpbmdcbiAgICBudW1zOiBudW1iZXJcbiAgfT5cbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnNcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhTGlzdCkgfHwgZGF0YUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYGRhdGFMaXN0IOW/hemhu+aYr+mdnuepuuaVsOe7hGApXG4gICAgfVxuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIHBvcHVwQXR0cjogeyBsYWJlbDogJ+WQjeensCcsIHZhbHVlOiAnbmFtZScgfSxcbiAgICAgIHRvb2x0aXBBdHRyOiAnbmFtZScsXG4gICAgICBjbGFzc2lmaWVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3BvbHlsaW5lJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc01lcmdlKFxuICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIG9wdGlvbnNcbiAgICApIGFzIFBvbHlsaW5lTGF5ZXJPcHRpb25zXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5jbGFzc2lmeUNvbG9yTWFwID0ge31cbiAgICB0aGlzLmZvY3VzZWRQb2x5bGluZSA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUgPSBudWxsXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IFBvbHlsaW5lTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKVxuICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWxpbmVMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVzLnJlZHVjZShcbiAgICAgIChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSxcbiAgICAgIEwubGF0TG5nQm91bmRzKFxuICAgICAgICB0aGlzLnBvbHlsaW5lc1swXS5nZXRCb3VuZHMoKS5nZXROb3J0aEVhc3QoKSxcbiAgICAgICAgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KClcbiAgICAgIClcbiAgICApXG4gIH1cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICB9XG4gIHB1YmxpYyB0b2dnbGVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlXG4gICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpXG4gICAgICB9XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5maWxsQ29sb3IgPSBjb2xvclxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcGl0Y2goaWQ6IHN0cmluZykge1xuICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICBpZiAocG9seWxpbmUuZ2V0RGF0YSgpLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lLCB0cnVlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHB1YmxpYyBnZXRDbGFzc2lmeUNvbG9yUmVmcygpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yUmVmc1xuICB9XG4gIHByb3RlY3RlZCBpbml0T3B0aW9ucyhvcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNNZXJnZShcbiAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICBvcHRpb25zXG4gICAgKSBhcyBQb2x5bGluZUxheWVyT3B0aW9uc1xuICB9XG4gIHByb3RlY3RlZCBpbml0UG9seWxpbmVzKCkge1xuICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKClcbiAgICB0aGlzLmNhY2hlQ2xhc3NpZnlQYXJhbXMoKVxuXG4gICAgdGhpcy5wb2x5bGluZXMgPSB0aGlzLmRhdGFMaXN0Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF1cbiAgICAgIGNvbnN0IHBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKFxuICAgICAgICAobGF5ZXIgYXMgTC5Qb2x5bGluZSkuZ2V0TGF0TG5ncygpIGFzIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvblxuICAgICAgKVxuICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgcG9seWxpbmUuc2V0RGF0YShkYXRhKVxuXG4gICAgICByZXR1cm4gcG9seWxpbmVcbiAgICB9KVxuICB9XG4gIHByb3RlY3RlZCBnZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKGRhdGE6IERhdGFMaXN0SXRlbSk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl1cbiAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbXG4gICAgICBwYXJzZUludCgnJyArICh2YWwgLSB0aGlzLnNlZ21lbnRlZE1pbikgLyB0aGlzLnNlZ21lbnRlZFN0ZXAsIDEwKVxuICAgIF1cbiAgICByZXR1cm4gY29sb3JcbiAgfVxuICBwcm90ZWN0ZWQgcG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmU6IFBvbHlsaW5lLCBmaXRCb3VuZHM/OiBib29sZWFuKSB7XG4gICAgdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBwb2x5bGluZVxuICAgIC8vIOWIoOmZpOWJjeS4gOS4qiBmb2N1c1xuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUpIHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKVxuICAgIH1cbiAgICAvLyDnlJ/miJDlvZPliY0gZm9jdXNcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUgPSBuZXcgUG9seWxpbmUoXG4gICAgICBwb2x5bGluZS5nZXRMYXRMbmdzKCkgYXMgUG9seWxpbmVMYXRMbmdFeHByZXNzaW9uLFxuICAgICAge1xuICAgICAgICBjb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWxpbmUuZ2V0RGF0YSgpLCAnbm9ybWFsJyksXG4gICAgICB9XG4gICAgKVxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5hZGRUbyh0aGlzLm1hcClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZVxuICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgLm9wZW5Qb3B1cCgpXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgcG9seWxpbmUuY2xvc2VUb29sdGlwKClcblxuICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5nZXRDZW50ZXIoKSlcbiAgICBpZiAoZml0Qm91bmRzKSB7XG4gICAgICB0aGlzLm1hcC5maXRCb3VuZHMocG9seWxpbmUuZ2V0Qm91bmRzKCkpXG4gICAgfVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlsaW5lJywgcG9seWxpbmUpXG4gIH1cbiAgcHJvdGVjdGVkIGdldFRvb2xUaXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXVxuICB9XG4gIHByb3RlY3RlZCBnZXRQb3B1cENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHJ9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0cl19YFxuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0ci5sYWJlbH06ICR7XG4gICAgICAgIGRhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZV1cbiAgICAgIH1gXG4gICAgfVxuICB9XG4gIHByaXZhdGUgY29uZmlnUG9seWxpbmVMYXllcigpIHtcbiAgICB0aGlzLnBvbHlsaW5lTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICBjb25zdCBvcHRpb25zOiBMLlBvbHlsaW5lT3B0aW9ucyA9IG9wdGlvbnNNZXJnZSh7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICB9KVxuICAgICAgY29uc3QgbmV3UG9seWxpbmUgPSBuZXcgUG9seWxpbmUoXG4gICAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIG5ld1BvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSlcbiAgICAgIH0pXG4gICAgICBuZXdQb2x5bGluZS5zZXREYXRhKHBvbHlsaW5lLmdldERhdGEoKSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWxpbmUuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKG5ld1BvbHlsaW5lKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG4gIHByaXZhdGUgY2FjaGVDbGFzc2lmeVBhcmFtcygpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQXR0cikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG1wOiB7IFtwcm9wOiBzdHJpbmddOiBbc3RyaW5nLCBudW1iZXJdIH0gPSB7fVxuICAgIGNvbnN0IHByb3AgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHJcbiAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhW3Byb3BdIGluIHRtcCkge1xuICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgdG1wW2RhdGFbcHJvcF1dWzFdICsgMV1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCAxXVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0bXApXG4gICAgdmFsdWVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVxuICAgIHRoaXMuY2xhc3NpZnlDb2xvclJlZnMgPSBbXVxuICAgIHZhbHVlcy5mb3JFYWNoKChbYXR0ciwgbnVtc10sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY29sb3IgPSAnYmxhY2snXG4gICAgICBpZiAoaW5kZXggPCB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9yc1tpbmRleF1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2xhc3NpZnlDb2xvck1hcFthdHRyXSA9IGNvbG9yXG4gICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JSZWZzLnB1c2goe1xuICAgICAgICBhdHRyLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgbnVtcyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBwcml2YXRlIGdldENsYXNzaWZ5UG9seWxpbmVDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNsYXNzaWZ5Q29sb3JNYXBbZGF0YVt0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHJdXVxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0Q29sb3IoZGF0YTogRGF0YUxpc3RJdGVtLCBtb2RlPzogQ29sb3JNb2RlKSB7XG4gICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKGRhdGEpXG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWxpbmVDb2xvclR5cGUgPT09ICdjbGFzc2lmaWVkJykge1xuICAgICAgY29sb3IgPSB0aGlzLmdldENsYXNzaWZ5UG9seWxpbmVDb2xvcihkYXRhKVxuICAgIH1cbiAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgIHJldHVybiBkYXJrZW4oY29sb3IpXG4gICAgICBjYXNlICdsaWdodGVuJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0ZW4oY29sb3IpXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gY29sb3JcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIENvbG9yIGZyb20gJ2NvbG9yJ1xuXG5mdW5jdGlvbiBsaWdodGVuKGhleENvbG9yOiBzdHJpbmcpIHtcbiAgcmV0dXJuIENvbG9yKGhleENvbG9yKVxuICAgIC5saWdodGVuKDAuNSlcbiAgICAuaGV4KClcbn1cbmZ1bmN0aW9uIGRhcmtlbihoZXhDb2xvcjogc3RyaW5nKSB7XG4gIHJldHVybiBDb2xvcihoZXhDb2xvcilcbiAgICAuZGFya2VuKDAuNSlcbiAgICAuaGV4KClcbn1cblxuZnVuY3Rpb24gb3B0aW9uc01lcmdlKC4uLnRhcmdldHM6IGFueVtdKTogb2JqZWN0IHtcbiAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHRhcmdldHNbMF1cbiAgfVxuICBjb25zdCBtZXJnZWQgPSB0YXJnZXRzWzBdXG4gIGZvciAoY29uc3Qga2V5IGluIHRhcmdldHNbMV0pIHtcbiAgICBpZiAoa2V5IGluIG1lcmdlZCkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtZXJnZWRba2V5XSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgIG1lcmdlZFtrZXldID0gb3B0aW9uc01lcmdlKG1lcmdlZFtrZXldLCB0YXJnZXRzWzFdW2tleV0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXJnZWRba2V5XSA9IHRhcmdldHNbMV1ba2V5XVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXJnZWRba2V5XSA9IHRhcmdldHNbMV1ba2V5XVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3B0aW9uc01lcmdlKG1lcmdlZCwgLi4udGFyZ2V0cy5zbGljZSgyKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBsaWdodGVuLFxuICBkYXJrZW4sXG4gIG9wdGlvbnNNZXJnZSxcbn1cbmV4cG9ydCB7IGxpZ2h0ZW4sIGRhcmtlbiwgb3B0aW9uc01lcmdlIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=

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

var position = new L.LatLng(30.90778, 120.401216)
// var position = new L.LatLng(39.90778, 116.401216)
var map = L.map('map', {
  // crs: L.CRS.EPSG4326
  crs: L.CRS.EPSG3857,
}).setView(position, 13)

L.tileLayer
  .chinaProvider('GaoDe.Normal.Map', { maxZoom: 18, minZoom: 3 })
  .addTo(map)

const a = L.tileLayer
  .wms(
    'http://192.168.1.54:8090/geoserver/navigator_workspace/wms',
    {
      layers: "navigator_workspace:r_shanghaibaihuowanggehua_zsw2",
      transparent: true,
      format: 'image/png',
      crs: L.CRS.EPSG4326
    },
  )
a.addTo(map)
a.on('load', e => {
  console.log('load', e)
})
a.on('click', e => {
  console.log(e)
})

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
    class: 'a',
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [116.391216, 39.90778],
    },
    price: 5,
    class: 'b',
  },
  {
    geometry: {
      type: 'Point',
      coordinates: [120.381216, 30.90778],
    },
    price: 10,
    class: 'b',
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
    popupAttr: { label: '价格', value: 'price' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sZWFmbGV0LWxheWVyLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUsyQjtBQUNqQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYTtBQUM1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RCx1Q0FBdUM7QUFDL0Ysc0RBQXNELHFDQUFxQzs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLElBQUk7QUFDN0Isd0JBQXdCLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCx3QkFBd0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxvQkFBb0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUIsSUFBSSw2QkFBNkI7QUFDOUU7QUFDQTtBQUNBLHNCQUFzQiw2QkFBNkIsSUFBSSxtQ0FBbUM7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHO0FBQ2hHO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG1CQUFtQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esc0NBQXNDLDBCQUEwQjtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG1DQUFtQyw2QkFBNkIsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsZ0JBQWdCLHFEQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4QkFBOEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSx5QkFBeUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RCxVQUFVO0FBQ25FO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sSUFBSTtBQUNKIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vdGVzdC9zcmMvYXBwLmpzXCIpO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovICh7XG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBNSVQgbGljZW5zZSAqL1xudmFyIGNzc0tleXdvcmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29sb3ItbmFtZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanNcIik7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmRpZjtcblx0dmFyIGdkaWY7XG5cdHZhciBiZGlmO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG4vKipcbiAqIFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICogKi9cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHRyZXR1cm4gKFxuXHRcdE1hdGgucG93KHhbMF0gLSB5WzBdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzJdIC0geVsyXSwgMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yICh2YXIga2V5d29yZCBpbiBjc3NLZXl3b3Jkcykge1xuXHRcdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXl3b3JkKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGNvbnZlcnQuZ3JheS5oc3YgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHZhciB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0dmFyIGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNvbnZlcnNpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb252ZXJzaW9ucyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanNcIik7XG52YXIgcm91dGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3JvdXRlICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qc1wiKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNvbnZlcnNpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jb252ZXJzaW9ucyAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanNcIik7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb2xvck5hbWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29sb3ItbmFtZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qc1wiKTtcbnZhciBzd2l6emxlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgc2ltcGxlLXN3aXp6bGUgKi8gXCIuL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qc1wiKTtcblxudmFyIHJldmVyc2VOYW1lcyA9IHt9O1xuXG4vLyBjcmVhdGUgYSBsaXN0IG9mIHJldmVyc2UgY29sb3IgbmFtZXNcbmZvciAodmFyIG5hbWUgaW4gY29sb3JOYW1lcykge1xuXHRpZiAoY29sb3JOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuXHRcdHJldmVyc2VOYW1lc1tjb2xvck5hbWVzW25hbWVdXSA9IG5hbWU7XG5cdH1cbn1cblxudmFyIGNzID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cdHRvOiB7fSxcblx0Z2V0OiB7fVxufTtcblxuY3MuZ2V0ID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHR2YXIgcHJlZml4ID0gc3RyaW5nLnN1YnN0cmluZygwLCAzKS50b0xvd2VyQ2FzZSgpO1xuXHR2YXIgdmFsO1xuXHR2YXIgbW9kZWw7XG5cdHN3aXRjaCAocHJlZml4KSB7XG5cdFx0Y2FzZSAnaHNsJzpcblx0XHRcdHZhbCA9IGNzLmdldC5oc2woc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2hzbCc7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdod2InOlxuXHRcdFx0dmFsID0gY3MuZ2V0Lmh3YihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAnaHdiJztcblx0XHRcdGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHR2YWwgPSBjcy5nZXQucmdiKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdyZ2InO1xuXHRcdFx0YnJlYWs7XG5cdH1cblxuXHRpZiAoIXZhbCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIHttb2RlbDogbW9kZWwsIHZhbHVlOiB2YWx9O1xufTtcblxuY3MuZ2V0LnJnYiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBhYmJyID0gL14jKFthLWYwLTldezMsNH0pJC9pO1xuXHR2YXIgaGV4ID0gL14jKFthLWYwLTldezZ9KShbYS1mMC05XXsyfSk/JC9pO1xuXHR2YXIgcmdiYSA9IC9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgcGVyID0gL15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBrZXl3b3JkID0gLyhcXEQrKS87XG5cblx0dmFyIHJnYiA9IFswLCAwLCAwLCAxXTtcblx0dmFyIG1hdGNoO1xuXHR2YXIgaTtcblx0dmFyIGhleEFscGhhO1xuXG5cdGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChoZXgpKSB7XG5cdFx0aGV4QWxwaGEgPSBtYXRjaFsyXTtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL3NsaWNlLXZzLXN1YnN0ci12cy1zdWJzdHJpbmctbWV0aG9kcy1sb25nLXN0cmluZy8xOVxuXHRcdFx0dmFyIGkyID0gaSAqIDI7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaC5zbGljZShpMiwgaTIgKyAyKSwgMTYpO1xuXHRcdH1cblxuXHRcdGlmIChoZXhBbHBoYSkge1xuXHRcdFx0cmdiWzNdID0gTWF0aC5yb3VuZCgocGFyc2VJbnQoaGV4QWxwaGEsIDE2KSAvIDI1NSkgKiAxMDApIC8gMTAwO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChhYmJyKSkge1xuXHRcdG1hdGNoID0gbWF0Y2hbMV07XG5cdFx0aGV4QWxwaGEgPSBtYXRjaFszXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2ldICsgbWF0Y2hbaV0sIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhICsgaGV4QWxwaGEsIDE2KSAvIDI1NSkgKiAxMDApIC8gMTAwO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChyZ2JhKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoW2kgKyAxXSwgMCk7XG5cdFx0fVxuXG5cdFx0aWYgKG1hdGNoWzRdKSB7XG5cdFx0XHRyZ2JbM10gPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocGVyKSkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYltpXSA9IE1hdGgucm91bmQocGFyc2VGbG9hdChtYXRjaFtpICsgMV0pICogMi41NSk7XG5cdFx0fVxuXG5cdFx0aWYgKG1hdGNoWzRdKSB7XG5cdFx0XHRyZ2JbM10gPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goa2V5d29yZCkpIHtcblx0XHRpZiAobWF0Y2hbMV0gPT09ICd0cmFuc3BhcmVudCcpIHtcblx0XHRcdHJldHVybiBbMCwgMCwgMCwgMF07XG5cdFx0fVxuXG5cdFx0cmdiID0gY29sb3JOYW1lc1ttYXRjaFsxXV07XG5cblx0XHRpZiAoIXJnYikge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmdiWzNdID0gMTtcblxuXHRcdHJldHVybiByZ2I7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0cmdiW2ldID0gY2xhbXAocmdiW2ldLCAwLCAyNTUpO1xuXHR9XG5cdHJnYlszXSA9IGNsYW1wKHJnYlszXSwgMCwgMSk7XG5cblx0cmV0dXJuIHJnYjtcbn07XG5cbmNzLmdldC5oc2wgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgaHNsID0gL15oc2xhP1xcKFxccyooWystXT8oPzpcXGQqXFwuKT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGhzbCk7XG5cblx0aWYgKG1hdGNoKSB7XG5cdFx0dmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0dmFyIGggPSAocGFyc2VGbG9hdChtYXRjaFsxXSkgKyAzNjApICUgMzYwO1xuXHRcdHZhciBzID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGwgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cblx0XHRyZXR1cm4gW2gsIHMsIGwsIGFdO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jcy5nZXQuaHdiID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGh3YiA9IC9eaHdiXFwoXFxzKihbKy1dP1xcZCpbXFwuXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIG1hdGNoID0gc3RyaW5nLm1hdGNoKGh3Yik7XG5cblx0aWYgKG1hdGNoKSB7XG5cdFx0dmFyIGFscGhhID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0dmFyIGggPSAoKHBhcnNlRmxvYXQobWF0Y2hbMV0pICUgMzYwKSArIDM2MCkgJSAzNjA7XG5cdFx0dmFyIHcgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKTtcblx0XHR2YXIgYiA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApO1xuXHRcdHZhciBhID0gY2xhbXAoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcblx0XHRyZXR1cm4gW2gsIHcsIGIsIGFdO1xuXHR9XG5cblx0cmV0dXJuIG51bGw7XG59O1xuXG5jcy50by5oZXggPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHJldHVybiAoXG5cdFx0JyMnICtcblx0XHRoZXhEb3VibGUocmdiYVswXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzFdKSArXG5cdFx0aGV4RG91YmxlKHJnYmFbMl0pICtcblx0XHQocmdiYVszXSA8IDFcblx0XHRcdD8gKGhleERvdWJsZShNYXRoLnJvdW5kKHJnYmFbM10gKiAyNTUpKSlcblx0XHRcdDogJycpXG5cdCk7XG59O1xuXG5jcy50by5yZ2IgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnKSdcblx0XHQ6ICdyZ2JhKCcgKyBNYXRoLnJvdW5kKHJnYmFbMF0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsxXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzJdKSArICcsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8ucmdiLnBlcmNlbnQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciByZ2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHZhciByID0gTWF0aC5yb3VuZChyZ2JhWzBdIC8gMjU1ICogMTAwKTtcblx0dmFyIGcgPSBNYXRoLnJvdW5kKHJnYmFbMV0gLyAyNTUgKiAxMDApO1xuXHR2YXIgYiA9IE1hdGgucm91bmQocmdiYVsyXSAvIDI1NSAqIDEwMCk7XG5cblx0cmV0dXJuIHJnYmEubGVuZ3RoIDwgNCB8fCByZ2JhWzNdID09PSAxXG5cdFx0PyAncmdiKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUpJ1xuXHRcdDogJ3JnYmEoJyArIHIgKyAnJSwgJyArIGcgKyAnJSwgJyArIGIgKyAnJSwgJyArIHJnYmFbM10gKyAnKSc7XG59O1xuXG5jcy50by5oc2wgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBoc2xhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXHRyZXR1cm4gaHNsYS5sZW5ndGggPCA0IHx8IGhzbGFbM10gPT09IDFcblx0XHQ/ICdoc2woJyArIGhzbGFbMF0gKyAnLCAnICsgaHNsYVsxXSArICclLCAnICsgaHNsYVsyXSArICclKSdcblx0XHQ6ICdoc2xhKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSwgJyArIGhzbGFbM10gKyAnKSc7XG59O1xuXG4vLyBod2IgaXMgYSBiaXQgZGlmZmVyZW50IHRoYW4gcmdiKGEpICYgaHNsKGEpIHNpbmNlIHRoZXJlIGlzIG5vIGFscGhhIHNwZWNpZmljIHN5bnRheFxuLy8gKGh3YiBoYXZlIGFscGhhIG9wdGlvbmFsICYgMSBpcyBkZWZhdWx0IHZhbHVlKVxuY3MudG8uaHdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgYSA9ICcnO1xuXHRpZiAoaHdiYS5sZW5ndGggPj0gNCAmJiBod2JhWzNdICE9PSAxKSB7XG5cdFx0YSA9ICcsICcgKyBod2JhWzNdO1xuXHR9XG5cblx0cmV0dXJuICdod2IoJyArIGh3YmFbMF0gKyAnLCAnICsgaHdiYVsxXSArICclLCAnICsgaHdiYVsyXSArICclJyArIGEgKyAnKSc7XG59O1xuXG5jcy50by5rZXl3b3JkID0gZnVuY3Rpb24gKHJnYikge1xuXHRyZXR1cm4gcmV2ZXJzZU5hbWVzW3JnYi5zbGljZSgwLCAzKV07XG59O1xuXG4vLyBoZWxwZXJzXG5mdW5jdGlvbiBjbGFtcChudW0sIG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heChtaW4sIG51bSksIG1heCk7XG59XG5cbmZ1bmN0aW9uIGhleERvdWJsZShudW0pIHtcblx0dmFyIHN0ciA9IG51bS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuIChzdHIubGVuZ3RoIDwgMikgPyAnMCcgKyBzdHIgOiBzdHI7XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgY29sb3JTdHJpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb2xvci1zdHJpbmcgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvaW5kZXguanNcIik7XG52YXIgY29udmVydCA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yLWNvbnZlcnQgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzXCIpO1xuXG52YXIgX3NsaWNlID0gW10uc2xpY2U7XG5cbnZhciBza2lwcGVkTW9kZWxzID0gW1xuXHQvLyB0byBiZSBob25lc3QsIEkgZG9uJ3QgcmVhbGx5IGZlZWwgbGlrZSBrZXl3b3JkIGJlbG9uZ3MgaW4gY29sb3IgY29udmVydCwgYnV0IGVoLlxuXHQna2V5d29yZCcsXG5cblx0Ly8gZ3JheSBjb25mbGljdHMgd2l0aCBzb21lIG1ldGhvZCBuYW1lcywgYW5kIGhhcyBpdHMgb3duIG1ldGhvZCBkZWZpbmVkLlxuXHQnZ3JheScsXG5cblx0Ly8gc2hvdWxkbid0IHJlYWxseSBiZSBpbiBjb2xvci1jb252ZXJ0IGVpdGhlci4uLlxuXHQnaGV4J1xuXTtcblxudmFyIGhhc2hlZE1vZGVsS2V5cyA9IHt9O1xuT2JqZWN0LmtleXMoY29udmVydCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcblx0aGFzaGVkTW9kZWxLZXlzW19zbGljZS5jYWxsKGNvbnZlcnRbbW9kZWxdLmxhYmVscykuc29ydCgpLmpvaW4oJycpXSA9IG1vZGVsO1xufSk7XG5cbnZhciBsaW1pdGVycyA9IHt9O1xuXG5mdW5jdGlvbiBDb2xvcihvYmosIG1vZGVsKSB7XG5cdGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb2xvcikpIHtcblx0XHRyZXR1cm4gbmV3IENvbG9yKG9iaiwgbW9kZWwpO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmIG1vZGVsIGluIHNraXBwZWRNb2RlbHMpIHtcblx0XHRtb2RlbCA9IG51bGw7XG5cdH1cblxuXHRpZiAobW9kZWwgJiYgIShtb2RlbCBpbiBjb252ZXJ0KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignVW5rbm93biBtb2RlbDogJyArIG1vZGVsKTtcblx0fVxuXG5cdHZhciBpO1xuXHR2YXIgY2hhbm5lbHM7XG5cblx0aWYgKHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbMCwgMCwgMF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2UgaWYgKG9iaiBpbnN0YW5jZW9mIENvbG9yKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG9iai5tb2RlbDtcblx0XHR0aGlzLmNvbG9yID0gb2JqLmNvbG9yLnNsaWNlKCk7XG5cdFx0dGhpcy52YWxwaGEgPSBvYmoudmFscGhhO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0dmFyIHJlc3VsdCA9IGNvbG9yU3RyaW5nLmdldChvYmopO1xuXHRcdGlmIChyZXN1bHQgPT09IG51bGwpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nOiAnICsgb2JqKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gcmVzdWx0Lm1vZGVsO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR0aGlzLmNvbG9yID0gcmVzdWx0LnZhbHVlLnNsaWNlKDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiByZXN1bHQudmFsdWVbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IHJlc3VsdC52YWx1ZVtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKG9iai5sZW5ndGgpIHtcblx0XHR0aGlzLm1vZGVsID0gbW9kZWwgfHwgJ3JnYic7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBuZXdBcnIgPSBfc2xpY2UuY2FsbChvYmosIDAsIGNoYW5uZWxzKTtcblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KG5ld0FyciwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9ialtjaGFubmVsc10gPT09ICdudW1iZXInID8gb2JqW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicpIHtcblx0XHQvLyB0aGlzIGlzIGFsd2F5cyBSR0IgLSBjYW4gYmUgY29udmVydGVkIGxhdGVyIG9uLlxuXHRcdG9iaiAmPSAweEZGRkZGRjtcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFtcblx0XHRcdChvYmogPj4gMTYpICYgMHhGRixcblx0XHRcdChvYmogPj4gOCkgJiAweEZGLFxuXHRcdFx0b2JqICYgMHhGRlxuXHRcdF07XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMudmFscGhhID0gMTtcblxuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcblx0XHRpZiAoJ2FscGhhJyBpbiBvYmopIHtcblx0XHRcdGtleXMuc3BsaWNlKGtleXMuaW5kZXhPZignYWxwaGEnKSwgMSk7XG5cdFx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmouYWxwaGEgPT09ICdudW1iZXInID8gb2JqLmFscGhhIDogMDtcblx0XHR9XG5cblx0XHR2YXIgaGFzaGVkS2V5cyA9IGtleXMuc29ydCgpLmpvaW4oJycpO1xuXHRcdGlmICghKGhhc2hlZEtleXMgaW4gaGFzaGVkTW9kZWxLZXlzKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShvYmopKTtcblx0XHR9XG5cblx0XHR0aGlzLm1vZGVsID0gaGFzaGVkTW9kZWxLZXlzW2hhc2hlZEtleXNdO1xuXG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXHRcdHZhciBjb2xvciA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbG9yLnB1c2gob2JqW2xhYmVsc1tpXV0pO1xuXHRcdH1cblxuXHRcdHRoaXMuY29sb3IgPSB6ZXJvQXJyYXkoY29sb3IpO1xuXHR9XG5cblx0Ly8gcGVyZm9ybSBsaW1pdGF0aW9ucyAoY2xhbXBpbmcsIGV0Yy4pXG5cdGlmIChsaW1pdGVyc1t0aGlzLm1vZGVsXSkge1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHRmb3IgKGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0dmFyIGxpbWl0ID0gbGltaXRlcnNbdGhpcy5tb2RlbF1baV07XG5cdFx0XHRpZiAobGltaXQpIHtcblx0XHRcdFx0dGhpcy5jb2xvcltpXSA9IGxpbWl0KHRoaXMuY29sb3JbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHRoaXMudmFscGhhID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdGhpcy52YWxwaGEpKTtcblxuXHRpZiAoT2JqZWN0LmZyZWV6ZSkge1xuXHRcdE9iamVjdC5mcmVlemUodGhpcyk7XG5cdH1cbn1cblxuQ29sb3IucHJvdG90eXBlID0ge1xuXHR0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnN0cmluZygpO1xuXHR9LFxuXG5cdHRvSlNPTjogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzW3RoaXMubW9kZWxdKCk7XG5cdH0sXG5cblx0c3RyaW5nOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLm1vZGVsIGluIGNvbG9yU3RyaW5nLnRvID8gdGhpcyA6IHRoaXMucmdiKCk7XG5cdFx0c2VsZiA9IHNlbGYucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG9bc2VsZi5tb2RlbF0oYXJncyk7XG5cdH0sXG5cblx0cGVyY2VudFN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5yZ2IoKS5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdHZhciBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogc2VsZi5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5yZ2IucGVyY2VudChhcmdzKTtcblx0fSxcblxuXHRhcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnZhbHBoYSA9PT0gMSA/IHRoaXMuY29sb3Iuc2xpY2UoKSA6IHRoaXMuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0fSxcblxuXHRvYmplY3Q6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmVzdWx0ID0ge307XG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbGFiZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5sYWJlbHM7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHJlc3VsdFtsYWJlbHNbaV1dID0gdGhpcy5jb2xvcltpXTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJlc3VsdC5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sXG5cblx0dW5pdEFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmdiWzBdIC89IDI1NTtcblx0XHRyZ2JbMV0gLz0gMjU1O1xuXHRcdHJnYlsyXSAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5wdXNoKHRoaXMudmFscGhhKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHVuaXRPYmplY3Q6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5vYmplY3QoKTtcblx0XHRyZ2IuciAvPSAyNTU7XG5cdFx0cmdiLmcgLz0gMjU1O1xuXHRcdHJnYi5iIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRyb3VuZDogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHBsYWNlcyA9IE1hdGgubWF4KHBsYWNlcyB8fCAwLCAwKTtcblx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuY29sb3IubWFwKHJvdW5kVG9QbGFjZShwbGFjZXMpKS5jb25jYXQodGhpcy52YWxwaGEpLCB0aGlzLm1vZGVsKTtcblx0fSxcblxuXHRhbHBoYTogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMuY29sb3IuY29uY2F0KE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbCkpKSwgdGhpcy5tb2RlbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMudmFscGhhO1xuXHR9LFxuXG5cdC8vIHJnYlxuXHRyZWQ6IGdldHNldCgncmdiJywgMCwgbWF4Zm4oMjU1KSksXG5cdGdyZWVuOiBnZXRzZXQoJ3JnYicsIDEsIG1heGZuKDI1NSkpLFxuXHRibHVlOiBnZXRzZXQoJ3JnYicsIDIsIG1heGZuKDI1NSkpLFxuXG5cdGh1ZTogZ2V0c2V0KFsnaHNsJywgJ2hzdicsICdoc2wnLCAnaHdiJywgJ2hjZyddLCAwLCBmdW5jdGlvbiAodmFsKSB7IHJldHVybiAoKHZhbCAlIDM2MCkgKyAzNjApICUgMzYwOyB9KSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBicmFjZS1zdHlsZVxuXG5cdHNhdHVyYXRpb25sOiBnZXRzZXQoJ2hzbCcsIDEsIG1heGZuKDEwMCkpLFxuXHRsaWdodG5lc3M6IGdldHNldCgnaHNsJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0c2F0dXJhdGlvbnY6IGdldHNldCgnaHN2JywgMSwgbWF4Zm4oMTAwKSksXG5cdHZhbHVlOiBnZXRzZXQoJ2hzdicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGNocm9tYTogZ2V0c2V0KCdoY2cnLCAxLCBtYXhmbigxMDApKSxcblx0Z3JheTogZ2V0c2V0KCdoY2cnLCAyLCBtYXhmbigxMDApKSxcblxuXHR3aGl0ZTogZ2V0c2V0KCdod2InLCAxLCBtYXhmbigxMDApKSxcblx0d2JsYWNrOiBnZXRzZXQoJ2h3YicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGN5YW46IGdldHNldCgnY215aycsIDAsIG1heGZuKDEwMCkpLFxuXHRtYWdlbnRhOiBnZXRzZXQoJ2NteWsnLCAxLCBtYXhmbigxMDApKSxcblx0eWVsbG93OiBnZXRzZXQoJ2NteWsnLCAyLCBtYXhmbigxMDApKSxcblx0YmxhY2s6IGdldHNldCgnY215aycsIDMsIG1heGZuKDEwMCkpLFxuXG5cdHg6IGdldHNldCgneHl6JywgMCwgbWF4Zm4oMTAwKSksXG5cdHk6IGdldHNldCgneHl6JywgMSwgbWF4Zm4oMTAwKSksXG5cdHo6IGdldHNldCgneHl6JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0bDogZ2V0c2V0KCdsYWInLCAwLCBtYXhmbigxMDApKSxcblx0YTogZ2V0c2V0KCdsYWInLCAxKSxcblx0YjogZ2V0c2V0KCdsYWInLCAyKSxcblxuXHRrZXl3b3JkOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29udmVydFt0aGlzLm1vZGVsXS5rZXl3b3JkKHRoaXMuY29sb3IpO1xuXHR9LFxuXG5cdGhleDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLmhleCh0aGlzLnJnYigpLnJvdW5kKCkuY29sb3IpO1xuXHR9LFxuXG5cdHJnYk51bWJlcjogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJldHVybiAoKHJnYlswXSAmIDB4RkYpIDw8IDE2KSB8ICgocmdiWzFdICYgMHhGRikgPDwgOCkgfCAocmdiWzJdICYgMHhGRik7XG5cdH0sXG5cblx0bHVtaW5vc2l0eTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblxuXHRcdHZhciBsdW0gPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHJnYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGNoYW4gPSByZ2JbaV0gLyAyNTU7XG5cdFx0XHRsdW1baV0gPSAoY2hhbiA8PSAwLjAzOTI4KSA/IGNoYW4gLyAxMi45MiA6IE1hdGgucG93KCgoY2hhbiArIDAuMDU1KSAvIDEuMDU1KSwgMi40KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMC4yMTI2ICogbHVtWzBdICsgMC43MTUyICogbHVtWzFdICsgMC4wNzIyICogbHVtWzJdO1xuXHR9LFxuXG5cdGNvbnRyYXN0OiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZlxuXHRcdHZhciBsdW0xID0gdGhpcy5sdW1pbm9zaXR5KCk7XG5cdFx0dmFyIGx1bTIgPSBjb2xvcjIubHVtaW5vc2l0eSgpO1xuXG5cdFx0aWYgKGx1bTEgPiBsdW0yKSB7XG5cdFx0XHRyZXR1cm4gKGx1bTEgKyAwLjA1KSAvIChsdW0yICsgMC4wNSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChsdW0yICsgMC4wNSkgLyAobHVtMSArIDAuMDUpO1xuXHR9LFxuXG5cdGxldmVsOiBmdW5jdGlvbiAoY29sb3IyKSB7XG5cdFx0dmFyIGNvbnRyYXN0UmF0aW8gPSB0aGlzLmNvbnRyYXN0KGNvbG9yMik7XG5cdFx0aWYgKGNvbnRyYXN0UmF0aW8gPj0gNy4xKSB7XG5cdFx0XHRyZXR1cm4gJ0FBQSc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChjb250cmFzdFJhdGlvID49IDQuNSkgPyAnQUEnIDogJyc7XG5cdH0sXG5cblx0aXNEYXJrOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gWUlRIGVxdWF0aW9uIGZyb20gaHR0cDovLzI0d2F5cy5vcmcvMjAxMC9jYWxjdWxhdGluZy1jb2xvci1jb250cmFzdFxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHZhciB5aXEgPSAocmdiWzBdICogMjk5ICsgcmdiWzFdICogNTg3ICsgcmdiWzJdICogMTE0KSAvIDEwMDA7XG5cdFx0cmV0dXJuIHlpcSA8IDEyODtcblx0fSxcblxuXHRpc0xpZ2h0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICF0aGlzLmlzRGFyaygpO1xuXHR9LFxuXG5cdG5lZ2F0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2IuY29sb3JbaV0gPSAyNTUgLSByZ2IuY29sb3JbaV07XG5cdFx0fVxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0bGlnaHRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdICs9IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGFya2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gLT0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdICs9IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0ZGVzYXR1cmF0ZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzFdIC09IGhzbC5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0d2hpdGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMV0gKz0gaHdiLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRibGFja2VuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHdiID0gdGhpcy5od2IoKTtcblx0XHRod2IuY29sb3JbMl0gKz0gaHdiLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGh3Yjtcblx0fSxcblxuXHRncmF5c2NhbGU6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dyYXlzY2FsZSNDb252ZXJ0aW5nX2NvbG9yX3RvX2dyYXlzY2FsZVxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHZhciB2YWwgPSByZ2JbMF0gKiAwLjMgKyByZ2JbMV0gKiAwLjU5ICsgcmdiWzJdICogMC4xMTtcblx0XHRyZXR1cm4gQ29sb3IucmdiKHZhbCwgdmFsLCB2YWwpO1xuXHR9LFxuXG5cdGZhZGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhIC0gKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRvcGFxdWVyOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSArICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0cm90YXRlOiBmdW5jdGlvbiAoZGVncmVlcykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdHZhciBodWUgPSBoc2wuY29sb3JbMF07XG5cdFx0aHVlID0gKGh1ZSArIGRlZ3JlZXMpICUgMzYwO1xuXHRcdGh1ZSA9IGh1ZSA8IDAgPyAzNjAgKyBodWUgOiBodWU7XG5cdFx0aHNsLmNvbG9yWzBdID0gaHVlO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0bWl4OiBmdW5jdGlvbiAobWl4aW5Db2xvciwgd2VpZ2h0KSB7XG5cdFx0Ly8gcG9ydGVkIGZyb20gc2FzcyBpbXBsZW1lbnRhdGlvbiBpbiBDXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3Nhc3MvbGlic2Fzcy9ibG9iLzBlNmI0YTI4NTAwOTIzNTZhYTNlY2UwN2M2YjI0OWYwMjIxY2FjZWQvZnVuY3Rpb25zLmNwcCNMMjA5XG5cdFx0dmFyIGNvbG9yMSA9IG1peGluQ29sb3IucmdiKCk7XG5cdFx0dmFyIGNvbG9yMiA9IHRoaXMucmdiKCk7XG5cdFx0dmFyIHAgPSB3ZWlnaHQgPT09IHVuZGVmaW5lZCA/IDAuNSA6IHdlaWdodDtcblxuXHRcdHZhciB3ID0gMiAqIHAgLSAxO1xuXHRcdHZhciBhID0gY29sb3IxLmFscGhhKCkgLSBjb2xvcjIuYWxwaGEoKTtcblxuXHRcdHZhciB3MSA9ICgoKHcgKiBhID09PSAtMSkgPyB3IDogKHcgKyBhKSAvICgxICsgdyAqIGEpKSArIDEpIC8gMi4wO1xuXHRcdHZhciB3MiA9IDEgLSB3MTtcblxuXHRcdHJldHVybiBDb2xvci5yZ2IoXG5cdFx0XHRcdHcxICogY29sb3IxLnJlZCgpICsgdzIgKiBjb2xvcjIucmVkKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmdyZWVuKCkgKyB3MiAqIGNvbG9yMi5ncmVlbigpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ibHVlKCkgKyB3MiAqIGNvbG9yMi5ibHVlKCksXG5cdFx0XHRcdGNvbG9yMS5hbHBoYSgpICogcCArIGNvbG9yMi5hbHBoYSgpICogKDEgLSBwKSk7XG5cdH1cbn07XG5cbi8vIG1vZGVsIGNvbnZlcnNpb24gbWV0aG9kcyBhbmQgc3RhdGljIGNvbnN0cnVjdG9yc1xuT2JqZWN0LmtleXMoY29udmVydCkuZm9yRWFjaChmdW5jdGlvbiAobW9kZWwpIHtcblx0aWYgKHNraXBwZWRNb2RlbHMuaW5kZXhPZihtb2RlbCkgIT09IC0xKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cblx0Ly8gY29udmVyc2lvbiBtZXRob2RzXG5cdENvbG9yLnByb3RvdHlwZVttb2RlbF0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMubW9kZWwgPT09IG1vZGVsKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHRoaXMpO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKGFyZ3VtZW50cywgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBuZXdBbHBoYSA9IHR5cGVvZiBhcmd1bWVudHNbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IGNoYW5uZWxzIDogdGhpcy52YWxwaGE7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihhc3NlcnRBcnJheShjb252ZXJ0W3RoaXMubW9kZWxdW21vZGVsXS5yYXcodGhpcy5jb2xvcikpLmNvbmNhdChuZXdBbHBoYSksIG1vZGVsKTtcblx0fTtcblxuXHQvLyAnc3RhdGljJyBjb25zdHJ1Y3Rpb24gbWV0aG9kc1xuXHRDb2xvclttb2RlbF0gPSBmdW5jdGlvbiAoY29sb3IpIHtcblx0XHRpZiAodHlwZW9mIGNvbG9yID09PSAnbnVtYmVyJykge1xuXHRcdFx0Y29sb3IgPSB6ZXJvQXJyYXkoX3NsaWNlLmNhbGwoYXJndW1lbnRzKSwgY2hhbm5lbHMpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IENvbG9yKGNvbG9yLCBtb2RlbCk7XG5cdH07XG59KTtcblxuZnVuY3Rpb24gcm91bmRUbyhudW0sIHBsYWNlcykge1xuXHRyZXR1cm4gTnVtYmVyKG51bS50b0ZpeGVkKHBsYWNlcykpO1xufVxuXG5mdW5jdGlvbiByb3VuZFRvUGxhY2UocGxhY2VzKSB7XG5cdHJldHVybiBmdW5jdGlvbiAobnVtKSB7XG5cdFx0cmV0dXJuIHJvdW5kVG8obnVtLCBwbGFjZXMpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBnZXRzZXQobW9kZWwsIGNoYW5uZWwsIG1vZGlmaWVyKSB7XG5cdG1vZGVsID0gQXJyYXkuaXNBcnJheShtb2RlbCkgPyBtb2RlbCA6IFttb2RlbF07XG5cblx0bW9kZWwuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuXHRcdChsaW1pdGVyc1ttXSB8fCAobGltaXRlcnNbbV0gPSBbXSkpW2NoYW5uZWxdID0gbW9kaWZpZXI7XG5cdH0pO1xuXG5cdG1vZGVsID0gbW9kZWxbMF07XG5cblx0cmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcblx0XHR2YXIgcmVzdWx0O1xuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdGlmIChtb2RpZmllcikge1xuXHRcdFx0XHR2YWwgPSBtb2RpZmllcih2YWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXN1bHQgPSB0aGlzW21vZGVsXSgpO1xuXHRcdFx0cmVzdWx0LmNvbG9yW2NoYW5uZWxdID0gdmFsO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cblx0XHRyZXN1bHQgPSB0aGlzW21vZGVsXSgpLmNvbG9yW2NoYW5uZWxdO1xuXHRcdGlmIChtb2RpZmllcikge1xuXHRcdFx0cmVzdWx0ID0gbW9kaWZpZXIocmVzdWx0KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xufVxuXG5mdW5jdGlvbiBtYXhmbihtYXgpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICh2KSB7XG5cdFx0cmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKG1heCwgdikpO1xuXHR9O1xufVxuXG5mdW5jdGlvbiBhc3NlcnRBcnJheSh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IHZhbCA6IFt2YWxdO1xufVxuXG5mdW5jdGlvbiB6ZXJvQXJyYXkoYXJyLCBsZW5ndGgpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdGlmICh0eXBlb2YgYXJyW2ldICE9PSAnbnVtYmVyJykge1xuXHRcdFx0YXJyW2ldID0gMDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG9yO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWFycmF5aXNoL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2lzLWFycmF5aXNoL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcnJheWlzaChvYmopIHtcblx0aWYgKCFvYmogfHwgdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShvYmopIHx8XG5cdFx0KG9iai5sZW5ndGggPj0gMCAmJiAob2JqLnNwbGljZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG5cdFx0XHQoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIChvYmoubGVuZ3RoIC0gMSkpICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3RyaW5nJykpKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGlzQXJyYXlpc2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBpcy1hcnJheWlzaCAqLyBcIi4vbm9kZV9tb2R1bGVzL2lzLWFycmF5aXNoL2luZGV4LmpzXCIpO1xuXG52YXIgY29uY2F0ID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdDtcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIHN3aXp6bGUgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHN3aXp6bGUoYXJncykge1xuXHR2YXIgcmVzdWx0cyA9IFtdO1xuXG5cdGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIGFyZyA9IGFyZ3NbaV07XG5cblx0XHRpZiAoaXNBcnJheWlzaChhcmcpKSB7XG5cdFx0XHQvLyBodHRwOi8vanNwZXJmLmNvbS9qYXZhc2NyaXB0LWFycmF5LWNvbmNhdC12cy1wdXNoLzk4XG5cdFx0XHRyZXN1bHRzID0gY29uY2F0LmNhbGwocmVzdWx0cywgc2xpY2UuY2FsbChhcmcpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0cy5wdXNoKGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG5zd2l6emxlLndyYXAgPSBmdW5jdGlvbiAoZm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZm4oc3dpenpsZShhcmd1bWVudHMpKTtcblx0fTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIER5bmFtaWNIZWF0TGF5ZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi9tYXJrZXIvTWFya2Vyc0xheWVyICovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50c1wiKTtcblxuY2xhc3MgRHluYW1pY0hlYXRMYXllciB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkeW5hbWljRGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkeW5hbWljRGF0YUxpc3QpIHx8IGR5bmFtaWNEYXRhTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZGF0YUxpc3Qg5b+F6aG75piv6Z2e56m65pWw57uEYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuZHluYW1pY0RhdGFMaXN0ID0gZHluYW1pY0RhdGFMaXN0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSB0cnVlO1xuICAgIH1cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gICAgICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5hdXRvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1BhdXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqIOaSreaUvuWujOavlSAqL1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAgPj0gdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXArKztcbiAgICAgICAgICAgICAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLmludGVydmFsKTtcbiAgICB9XG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgfVxuICAgIHByZXYoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAtLTtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9XG4gICAgICAgICAgICAodGhpcy5jdXJyZW50U3RlcCArIHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkgJVxuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICB9XG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gdGhpcy5jdXJyZW50U3RlcCAlIHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aDtcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICB9XG4gICAgZ290b1N0ZXAoc3RlcCkge1xuICAgICAgICBpZiAoc3RlcCA8IDAgfHwgc3RlcCA+PSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZ290b1N0ZXAoJHtzdGVwfSk6IHN0ZXAgaXMgb3V0IG9mIGluZGV4IGApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIuc2V0RGF0YSh0aGlzLmR5bmFtaWNEYXRhTGlzdFtzdGVwXSk7XG4gICAgICAgIHRoaXMubGF5ZXIuZHJhdygpO1xuICAgIH1cbiAgICBkcmF3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pbml0TGF5ZXIoKTtcbiAgICAgICAgdGhpcy5sYXllci5kcmF3KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubGF5ZXIuZml0Qm91bmRzKCk7XG4gICAgfVxuICAgIGluaXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG86IGZhbHNlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDEwMDAsXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRMYXllcigpIHtcbiAgICAgICAgY29uc3QgbWFya2Vyc0xheWVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJlbmRlclR5cGU6ICdoZWF0JyxcbiAgICAgICAgICAgIGhlYXRPcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGF5ZXIgPSBuZXcgX21hcmtlcl9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0odGhpcy5tYXAsIHRoaXMuZHluYW1pY0RhdGFMaXN0WzBdLCBtYXJrZXJzTGF5ZXJPcHRpb25zLCB0aGlzLmNoYW5uZWxGdW5jKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXI7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQsIE1hcmtlciwgTWFya2Vyc0xheWVyLCBNYXJrZXJzQnVmZmVyTGF5ZXIsIFBvbHlsaW5lLCBQb2x5bGluZXNMYXllciwgUG9seWxpbmVzQnVmZmVyTGF5ZXIsIFBvbHlnb24sIFBvbHlnb25zTGF5ZXIsIEdyaWRzTGF5ZXIsIER5bmFtaWNIZWF0TGF5ZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21hcmtlcl9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWFya2VyL01hcmtlciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNYXJrZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbWFya2VyX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWFya2VyX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tYXJrZXIvTWFya2Vyc0xheWVyICovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk1hcmtlcnNMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tYXJrZXJfTWFya2Vyc0J1ZmZlckxheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTWFya2Vyc0J1ZmZlckxheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX21hcmtlcl9NYXJrZXJzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlsaW5lX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlsaW5lL1BvbHlsaW5lICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5bGluZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5bGluZV9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWxpbmVfUG9seWxpbmVzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIgKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlsaW5lc0xheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlsaW5lX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5bGluZV9Qb2x5bGluZXNCdWZmZXJMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllciAqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0J1ZmZlckxheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUG9seWxpbmVzQnVmZmVyTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWxpbmVfUG9seWxpbmVzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5Z29uL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5Z29uXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlnb24vUG9seWdvbnNMYXllciAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlnb25zTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWdvbi9Hcmlkc0xheWVyICovIFwiLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiR3JpZHNMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIgKi8gXCIuL3NyYy9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJEeW5hbWljSGVhdExheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh7XG4gICAgTWFya2VyOiBfbWFya2VyX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSxcbiAgICBNYXJrZXJzTGF5ZXI6IF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLFxuICAgIE1hcmtlcnNCdWZmZXJMYXllcjogX21hcmtlcl9NYXJrZXJzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWxpbmU6IF9wb2x5bGluZV9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5bGluZXNMYXllcjogX3BvbHlsaW5lX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19bXCJkZWZhdWx0XCJdLFxuICAgIFBvbHlsaW5lc0J1ZmZlckxheWVyOiBfcG9seWxpbmVfUG9seWxpbmVzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWdvbjogX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5Z29uc0xheWVyOiBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19bXCJkZWZhdWx0XCJdLFxuICAgIEdyaWRzTGF5ZXI6IF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX1tcImRlZmF1bHRcIl0sXG4gICAgRHluYW1pY0hlYXRMYXllcjogX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fW1wiZGVmYXVsdFwiXSxcbn0pO1xuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWFya2VyL01hcmtlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21hcmtlci9NYXJrZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBNYXJrZXI7IH0pO1xuY2xhc3MgTWFya2VyIGV4dGVuZHMgTC5NYXJrZXIge1xuICAgIGNvbnN0cnVjdG9yKGxhdGxuZywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmcsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fX2RhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGE7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTWFya2Vyc0J1ZmZlckxheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01hcmtlcnNMYXllciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuXG5cbmNsYXNzIE1hcmtlcnNCdWZmZXJMYXllciBleHRlbmRzIF9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ21hcmtlckJ1ZmZlcic7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRCdWZmZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgcmFkaXVzOiAxMDAwLFxuICAgICAgICAgICAgc3Ryb2tlOiB0cnVlLFxuICAgICAgICAgICAgd2VpZ2h0OiAxLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJvcHRpb25zTWVyZ2VcIl0pKHRoaXMub3B0aW9ucywgeyBidWZmZXJPcHRpb25zOiBkZWZhdWx0QnVmZmVyT3B0aW9ucyB9LCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKSk7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJvcHRpb25zTWVyZ2VcIl0pKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLmNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvcjtcbiAgICAgICAgdGhpcy5pbml0TWFya2VycygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5idWZmZXJMYXllcikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5idWZmZXJMYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXJrZXJMYXllciA9IHRoaXMuY29uZmlnTWFya2VyTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5idWZmZXJMYXllciA9IHRoaXMuY29uZmlnQnVmZmVyTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5sYXllciA9IEwubGF5ZXJHcm91cCgpO1xuICAgICAgICB0aGlzLmxheWVyLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICB0aGlzLmxheWVyLmFkZExheWVyKHRoaXMuYnVmZmVyTGF5ZXIpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlcnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldi5leHRlbmQoY3Vyci5nZXRMYXRMbmcoKS50b0JvdW5kcyh0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5yYWRpdXMpKTtcbiAgICAgICAgfSwgdGhpcy5tYXJrZXJzWzBdLmdldExhdExuZygpLnRvQm91bmRzKHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLnJhZGl1cykpO1xuICAgIH1cbiAgICBjb25maWdCdWZmZXJMYXllcigpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBMYXllciA9IEwubGF5ZXJHcm91cCgpO1xuICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaXJjbGVMYXllciA9IEwuY2lyY2xlKG1hcmtlci5nZXRMYXRMbmcoKSwgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5idWZmZXJUb29sdGlwQXR0cikge1xuICAgICAgICAgICAgICAgIGNpcmNsZUxheWVyLmJpbmRUb29sdGlwKCcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMuYnVmZmVyVG9vbHRpcEF0dHJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZUxheWVyLmJpbmRUb29sdGlwKCcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpcmNsZUxheWVyLmJpbmRUb29sdGlwKCcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncm91cExheWVyLmFkZExheWVyKGNpcmNsZUxheWVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm91cExheWVyO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIE1hcmtlcnNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTWFya2VyICovIFwiLi9zcmMvbWFya2VyL01hcmtlci50c1wiKTtcblxuXG5jb25zdCBERUZBVUxUX0NPTE9SID0gJyMzMzg4RkYnO1xuY2xhc3MgTWFya2Vyc0xheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YUxpc3QpIHx8IGRhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhTGlzdCDlv4XpobvmmK/pnZ7nqbrmlbDnu4RgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgcmVuZGVyVHlwZTogJ3BvaW50JyxcbiAgICAgICAgICAgIHJlbmRlclBvaW50Q29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgIGljb25UeXBlOiAndW5pY29kZScsXG4gICAgICAgICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4gICAgICAgICAgICBpY29uQ2xhc3M6ICdpY29uZm9udCcsXG4gICAgICAgICAgICBpY29uQ29sb3I6IERFRkFVTFRfQ09MT1IsXG4gICAgICAgICAgICBpY29uQW5jaG9yOiBbMTAsIDIwXSxcbiAgICAgICAgICAgIHBvcHVwOiB0cnVlLFxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcbiAgICAgICAgICAgIHBvcHVwQXR0cjogeyBsYWJlbDogJ+WQjeensCcsIHZhbHVlOiAnbmFtZScgfSxcbiAgICAgICAgICAgIHRvb2x0aXBBdHRyOiAnbmFtZScsXG4gICAgICAgICAgICBzZWdtZW50ZWRDb2xvcnM6IFtERUZBVUxUX0NPTE9SXSxcbiAgICAgICAgICAgIGNsYXNzaWZpZWRDb2xvcnM6IFtERUZBVUxUX0NPTE9SXSxcbiAgICAgICAgICAgIGlzQ2x1c3RlcjogZmFsc2UsXG4gICAgICAgICAgICByZW5kZXJDbHVzdGVyQ29sb3JUeXBlOiAnc21hcnQnLFxuICAgICAgICAgICAgYnViYmxlU3Ryb2tlV2lkdGg6IDEsXG4gICAgICAgICAgICBidWJibGVDb2xvcnM6IFtERUZBVUxUX0NPTE9SXSxcbiAgICAgICAgICAgIGJ1YmJsZVN0cm9rZU9wYWNpdHk6IDAuMixcbiAgICAgICAgICAgIGJ1YmJsZUZpbGxPcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICBidWJibGVTaXplczogWzEwXSxcbiAgICAgICAgICAgIGhlYXRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgICAgIG1pbk9wYWNpdHk6IDAuNSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHlwZSA9ICdtYXJrZXInO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgICAgIHRoaXMubWFya2VyTGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmhlYXRMYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuY2x1c3RlckxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWJibGVMYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuYnViYmxlZFNpemVNaW4gPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5idWJibGVkU2l6ZVN0ZXAgPSAxO1xuICAgICAgICB0aGlzLmNsYXNzaWZpZWRDb2xvck1hcCA9IHt9O1xuICAgICAgICB0aGlzLmJ1YmJsZWRDb2xvck1hcCA9IHt9O1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdE1hcmtlcnMoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICAvKiog57uY5Yi25Zu+5bGCICovXG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOS8mOWFiOWIpOaWrSBpc0NsdXN0ZXJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pc0NsdXN0ZXIgJiYgdGhpcy5vcHRpb25zLnJlbmRlclR5cGUgPT09ICdwb2ludCcpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0NsdXN0ZXJMYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnY2x1c3Rlcic6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQ2x1c3RlckxheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdoZWF0Jzoge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdIZWF0TGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2J1YmJsZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQnViYmxlTGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyVHlwZX1cImApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiDorr7nva4gZGF0YSAqL1xuICAgIHNldERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YTtcbiAgICB9XG4gICAgLyoqIOiuvue9rumFjee9ruWPguaVsCAqL1xuICAgIHNldE9wdGlvbnMob3B0aW9ucywgcmVkcmF3ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wib3B0aW9uc01lcmdlXCJdKSh0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAocmVkcmF3KSB7XG4gICAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDojrflj5blvZPliY0gb3B0aW9ucyAqL1xuICAgIGdldE9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XG4gICAgfVxuICAgIC8qKiDnvKnmlL7oh7PljIXlkKvmiYDmnInovrnnlYwgKi9cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pO1xuICAgIH1cbiAgICAvKiog6I635Y+W6L6555WMICovXG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWFya2Vycy5tYXAoKG1hcmtlcikgPT4gW21hcmtlci5nZXRMYXRMbmcoKS5sYXQsIG1hcmtlci5nZXRMYXRMbmcoKS5sbmddKTtcbiAgICB9XG4gICAgLyoqIOmUgOavgeWbvuWxgiAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXAub2ZmKCd6b29tc3RhcnQnLCB0aGlzLl96b29tU3RhcnRDYiwgdGhpcyk7XG4gICAgICAgIHRoaXMubWFwLm9mZignem9vbWVuZCcsIHRoaXMuX3pvb21FbmRDYiwgdGhpcyk7XG4gICAgfVxuICAgIC8qKiDmmK/lkKbmmL7npLogKi9cbiAgICB0b2dnbGVWaXNpYmxlKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOabtOaNouminOiJsiAqL1xuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pY29uQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgLyoqIOabtOaNoiBpY29uICovXG4gICAgY2hhbmdlSWNvbihpY29uVW5pY29kZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGUgPSBpY29uVW5pY29kZTtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgLyoqIOiBmueEpuafkOS4qiBtYXJrZXIgKi9cbiAgICBwaXRjaChpZCkge1xuICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICAgICAgICBpZiAobWFya2VyLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiDojrflj5bliIbnsbvpopzoibLor7TmmI4gKi9cbiAgICBnZXRDbGFzc2lmaWVkQ29sb3JSZWZzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc2lmaWVkQ29sb3JSZWZzO1xuICAgIH1cbiAgICAvKiog6I635Y+W5rCU5rOh6aKc6Imy5Zu+5L6L6K+05piOICovXG4gICAgZ2V0QnViYmxlZENvbG9yUmVmcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnViYmxlZENvbG9yUmVmcztcbiAgICB9XG4gICAgLyoqIOiOt+WPluawlOazoeWkp+Wwj+WbvuS+i+ivtOaYjiAqL1xuICAgIGdldEJ1YmJsZWRTaXplUmVmcygpIHtcbiAgICAgICAgY29uc3Qgc2l6ZU51bXMgPSB0aGlzLm9wdGlvbnMuYnViYmxlU2l6ZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemVOdW1zOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlU3RhcnQgPSB0aGlzLmJ1YmJsZWRTaXplTWluICsgaSAqIHRoaXMuYnViYmxlZFNpemVTdGVwO1xuICAgICAgICAgICAgY29uc3QgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgdGhpcy5idWJibGVkU2l6ZVN0ZXA7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZWRTaXplUmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICByYW5nZTogW3JhbmdlU3RhcnQsIHJhbmdlRW5kXSxcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLm9wdGlvbnMuYnViYmxlU2l6ZXNbaV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5idWJibGVkU2l6ZVJlZnM7XG4gICAgfVxuICAgIF96b29tU3RhcnRDYigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbWFya2VyJykge1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlzQ2x1c3Rlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnYnViYmxlJzoge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5idWJibGVMYXllcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5idWJibGVMYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXJCdWZmZXInKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfem9vbUVuZENiKCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncG9pbnQnOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdidWJibGUnOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJ1YmJsZUxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmJ1YmJsZUxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlckJ1ZmZlcicpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDphY3nva7mlaPngrnlm74gKi9cbiAgICBjb25maWdNYXJrZXJMYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFya2VyTGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FudmFzSWNvbkxheWVyID0gTC5jYW52YXNJY29uTGF5ZXIoe30pLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgICAgLy8g5re75Yqg54K55Ye75LqL5Lu2XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkNsaWNrTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOa3u+WKoOWPs+mUruS6i+S7tlxuICAgICAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25Db250ZXh0bWVudUxpc3RlbmVyKChldmVudCwgW3sgZGF0YTogbWFya2VyIH1dKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxGdW5jKCdjb250ZXh0bWVudScsIHtcbiAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IG1hcmtlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5re75YqgIGhvdmVyIOS6i+S7tlxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXApIHtcbiAgICAgICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkhvdmVyTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOS5i+WJjeaciSBob3ZlciDnmoTlhbPpl60gdG9vbHRpcFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBtYXJrZXI7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlci5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5bey57uP6K6+572uIHRvb2x0aXAg55u05o6l5bGV56S6IHRvb2x0aXBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLm9wZW5Ub29sdGlwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDlkKbliJnnu5HlrpogdG9vbHRpcCDlubblsZXnpLpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmJpbmRUb29sdGlwKCcnICsgdGhpcy5ob3ZlcmVkTWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRNYXJrZXJzKHRoaXMubWFya2Vycyk7XG4gICAgICAgIC8vIOino+WGs+WIneasoea4suafk+S4jeWHuuWbvuagh+mXrumimFxuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLm1hcC5nZXRDZW50ZXIoKSk7XG4gICAgICAgIHRoaXMubWFya2VyTGF5ZXIgPSBjYW52YXNJY29uTGF5ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlckxheWVyO1xuICAgIH1cbiAgICAvKiog6I635Y+WIHRvb2x0aXAg5YaF5a65ICovXG4gICAgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YSkge1xuICAgICAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl07XG4gICAgfVxuICAgIC8qKiDliJ3lp4vljJbphY3nva7lj4LmlbAgKi9cbiAgICBpbml0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIm9wdGlvbnNNZXJnZVwiXSkodGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqIOWIneWni+WMliBNYXJrZXIgKi9cbiAgICBpbml0TWFya2VycygpIHtcbiAgICAgICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKCk7XG4gICAgICAgIHRoaXMuY2FjaGVDbGFzc2lmeVBhcmFtcygpO1xuICAgICAgICB0aGlzLmNhY2hlQnViYmxlUGFyYW1zKCk7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdO1xuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0oW2xheWVyLmdldExhdExuZygpLmxhdCwgbGF5ZXIuZ2V0TGF0TG5nKCkubG5nXSwge1xuICAgICAgICAgICAgICAgIGljb246IHRoaXMuZ2V0TWFya2VySWNvbihkYXRhKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgICAgICAgbWFya2VyLnNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqIOWIneWni+WMluS6i+S7tiAqL1xuICAgIGluaXRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubWFwLm9uKCd6b29tc3RhcnQnLCB0aGlzLl96b29tU3RhcnRDYiwgdGhpcyk7XG4gICAgICAgIHRoaXMubWFwLm9uKCd6b29tZW5kJywgdGhpcy5fem9vbUVuZENiLCB0aGlzKTtcbiAgICB9XG4gICAgLy8g5aSE55CGIG1hcmtlciDngrnlh7vkuovku7ZcbiAgICBtYXJrZXJDbGlja0hhbmRsZXIobWFya2VyLCBmaXRCb3VuZHMpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkTWFya2VyID0gbWFya2VyO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwKSB7XG4gICAgICAgICAgICAvLyDliKDpmaTliY3kuIDkuKrmlL7lpKflm77moIdcbiAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmVGcm9tKHRoaXMubWFwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOeUn+aIkOW9k+WJjeaUvuWkp+Wbvuagh1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlciA9IG5ldyBfTWFya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKG1hcmtlci5nZXRMYXRMbmcoKSwge1xuICAgICAgICAgICAgICAgIGljb246IHRoaXMuZ2V0TGFyZ2VyTWFya2VySWNvbihtYXJrZXIuZ2V0RGF0YSgpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgICAgICAvLyDmt7vliqDmlL7lpKflm77moIfnmoQgcG9wdXBcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXJcbiAgICAgICAgICAgICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgICAgICAgICAgIC5vcGVuUG9wdXAoKTtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIG1hcmtlci5jbG9zZVRvb2x0aXAoKTtcbiAgICAgICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkTWFya2VyLmdldExhdExuZygpKTtcbiAgICAgICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKG1hcmtlci5nZXRMYXRMbmcoKS50b0JvdW5kcygxMCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLW1hcmtlcicsIG1hcmtlcik7XG4gICAgfVxuICAgIC8qKiDphY3nva7ogZrlkIjlm77lsYIgKi9cbiAgICBjb25maWdDbHVzdGVyTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWxleekuuiBmuWQiOWbvuWxglxuICAgICAgICBpZiAodGhpcy5jbHVzdGVyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2x1c3RlckxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2x1c3RlckxheWVyID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoe1xuICAgICAgICAgICAgaWNvbkNyZWF0ZUZ1bmN0aW9uOiB0aGlzLmljb25DcmVhdGVGdW5jdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbHVzdGVyTGF5ZXIuYWRkTGF5ZXJzKHRoaXMubWFya2Vycy5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBfTWFya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKG0uZ2V0TGF0TG5nKCksIHtcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmdldE1hcmtlckljb24obS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYXJrZXIuc2V0RGF0YShtLmdldERhdGEoKSk7XG4gICAgICAgICAgICBtYXJrZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pO1xuICAgICAgICAgICAgbWFya2VyLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSk7XG4gICAgICAgICAgICBtYXJrZXIub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtYXJrZXI7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2x1c3RlckxheWVyO1xuICAgIH1cbiAgICAvKiog5riy5p+T5Li654Ot5Yqb5Zu+ICovXG4gICAgY29uZmlnSGVhdExheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5oZWF0TGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhdExheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsdHMgPSBbXTtcbiAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGF0TG5nID0gbWFya2VyLmdldExhdExuZygpO1xuICAgICAgICAgICAgY29uc3QgZGltZW5zaW9uQXR0ciA9IHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMuZGltZW5zaW9uQXR0cjtcbiAgICAgICAgICAgIGxldCBhbHQgPSAoZGltZW5zaW9uQXR0ciAmJiBtYXJrZXIuZ2V0RGF0YSgpW2RpbWVuc2lvbkF0dHJdKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucy5tYXg7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFsdCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBhbHQgPSB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWx0cy5wdXNoKGFsdCk7XG4gICAgICAgICAgICBtYXJrZXIuc2V0TGF0TG5nKEwubGF0TG5nKGxhdExuZy5sYXQsIGxhdExuZy5sbmcsIGFsdCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oZWF0TGF5ZXIgPSBMLmhlYXRMYXllcih0aGlzLm1hcmtlcnMubWFwKChpdCwgaW5kZXgpID0+IFtcbiAgICAgICAgICAgIGl0LmdldExhdExuZygpLmxhdCxcbiAgICAgICAgICAgIGl0LmdldExhdExuZygpLmxuZyxcbiAgICAgICAgICAgIGFsdHNbaW5kZXhdLFxuICAgICAgICBdKSwgT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wib3B0aW9uc01lcmdlXCJdKSh7IG1pbk9wYWNpdHk6IDAuNSB9LCB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhdExheWVyO1xuICAgIH1cbiAgICAvKiog5riy5p+T5Li65rCU5rOh5Zu+ICovXG4gICAgY29uZmlnQnViYmxlTGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1YmJsZUxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZUxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnViYmxlTGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcbiAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gdGhpcy5nZXRCdWJibGVkTWFya2VyU2l6ZShtYXJrZXIuZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGxDb2xvciA9IHRoaXMuZ2V0QnViYmxlZE1hcmtlckNvbG9yKG1hcmtlci5nZXREYXRhKCkpO1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuYnViYmxlU3Ryb2tlQ29sb3IgfHwgT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wibGlnaHRlblwiXSkoZmlsbENvbG9yKTtcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9IHRoaXMub3B0aW9ucy5idWJibGVTdHJva2VXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSB0aGlzLm9wdGlvbnMuYnViYmxlU3Ryb2tlT3BhY2l0eTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGxPcGFjaXR5ID0gdGhpcy5vcHRpb25zLmJ1YmJsZUZpbGxPcGFjaXR5O1xuICAgICAgICAgICAgY29uc3QgYnViYmxlID0gTC5jaXJjbGVNYXJrZXIobWFya2VyLmdldExhdExuZygpLCB7XG4gICAgICAgICAgICAgICAgcmFkaXVzLFxuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcixcbiAgICAgICAgICAgICAgICB3ZWlnaHQsXG4gICAgICAgICAgICAgICAgb3BhY2l0eSxcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCkge1xuICAgICAgICAgICAgICAgIGJ1YmJsZS5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwKSB7XG4gICAgICAgICAgICAgICAgYnViYmxlLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5idWJibGVMYXllci5hZGRMYXllcihidWJibGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnViYmxlTGF5ZXI7XG4gICAgfVxuICAgIC8qKiDojrflj5blm77moIfmlL7lpKflkI4gaWNvbiAqL1xuICAgIGdldExhcmdlck1hcmtlckljb24oZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWFya2VySWNvbihkYXRhLCB0cnVlKTtcbiAgICB9XG4gICAgLyoqIOiOt+WPluWbvuaghyBpY29uICovXG4gICAgZ2V0TWFya2VySWNvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIGZhbHNlKTtcbiAgICB9XG4gICAgLyoqIOiOt+WPluW9k+WJjSBtYXJrZXIg6ZyA6KaB5bGV56S655qEIGljb25cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNMYXJnZXIg5piv5ZCm5pS+5aSnXG4gICAgICovXG4gICAgX2dldE1hcmtlckljb24oZGF0YSwgaXNMYXJnZXIpIHtcbiAgICAgICAgY29uc3QgaWNvblNpemUgPSB0aGlzLm9wdGlvbnMuaWNvblNpemU7XG4gICAgICAgIGNvbnN0IGljb25BbmNob3IgPSB0aGlzLm9wdGlvbnMuaWNvbkFuY2hvcjtcbiAgICAgICAgY29uc3QgbGFyZ2VySWNvblNpemUgPSBbaWNvblNpemVbMF0gKiAxLjUsIGljb25TaXplWzFdICogMS41XTtcbiAgICAgICAgY29uc3QgbGFyZ2VySWNvbkFuY2hvciA9IFtpY29uQW5jaG9yWzBdICogMS41LCBpY29uQW5jaG9yWzFdICogMS41XTtcbiAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvcjtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzoge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBMLmljb24oe1xuICAgICAgICAgICAgICAgIC8vICAgaWNvblVybDogdGhpcy5vcHRpb25zLmljb25JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAvLyAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICAgICAgLy8gICBpY29uQW5jaG9yLFxuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdmb250X2NsYXNzJzpcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgICAgICAgICAgICAgICBodG1sOiB0aGlzLmdldEN1c3RvbUljb25IVE1MKGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGlzTGFyZ2VyID8gJ2xhcmdlLWRpdi1pY29uLW1hcmtlcicgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkFuY2hvcjogaXNMYXJnZXIgPyBsYXJnZXJJY29uQW5jaG9yIDogaWNvbkFuY2hvcixcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBpc0xhcmdlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbMCwgLWxhcmdlckljb25BbmNob3JbMV0gLyAyXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBbMCwgLWljb25BbmNob3JbMV0gLyAyXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclR5cGUg5LiN6IO95Li6ICR7dGhpcy5vcHRpb25zLmljb25UeXBlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDojrflj5ZpY29uIGh0bWwgKi9cbiAgICBnZXRDdXN0b21JY29uSFRNTChkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3I7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlKSB7XG4gICAgICAgICAgICBjYXNlICdzaW5nbGUnOiB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnY2xhc3NpZmllZCc6IHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuZ2V0Q2xhc3NpZnlNYXJrZXJDb2xvcihkYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3NlZ21lbnRlZCc6IHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJQb2ludENvbG9yVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAgIC8vIOS9v+eUqCBjbGFzc1xuICAgICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgIDxpIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIGA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDkvb/nlKggc3ZnXG4gICAgICAgICAgICBjYXNlICdzeW1ib2wnOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbi1zeW1ib2xcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7dGhpcy5vcHRpb25zLmljb25TeW1ib2x9XCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOS9v+eUqCB1bmljb2RlXG4gICAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgPGlcbiAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5vcHRpb25zLmljb25Vbmljb2RlfVxuICAgICAgICAgIDwvaT5cbiAgICAgICAgYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog57yT5a2Y5YiG57G755u45YWz5Y+C5pWwICovXG4gICAgY2FjaGVDbGFzc2lmeVBhcmFtcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0bXAgPSB7fTtcbiAgICAgICAgY29uc3QgcHJvcCA9IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQXR0cjtcbiAgICAgICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YVtwcm9wXSBpbiB0bXApIHtcbiAgICAgICAgICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgdG1wW2RhdGFbcHJvcF1dWzFdICsgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHRtcCk7XG4gICAgICAgIHZhbHVlcy5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gICAgICAgIHRoaXMuY2xhc3NpZmllZENvbG9yUmVmcyA9IFtdO1xuICAgICAgICBsZXQgb3RoZXJOdW1zID0gMDtcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKFthdHRyLCBudW1zXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBjb2xvciA9IERFRkFVTFRfQ09MT1I7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xhc3NpZmllZENvbG9yTWFwW2F0dHJdID0gY29sb3I7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzaWZpZWRDb2xvclJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBudW1zLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3RoZXJOdW1zICs9IG51bXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3RoZXJOdW1zID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc2lmaWVkQ29sb3JSZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgIGF0dHI6ICflhbblroMnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgICAgICAgICAgIG51bXM6IG90aGVyTnVtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDnvJPlrZjmsJTms6Hnm7jlhbPlj4LmlbAgKi9cbiAgICBjYWNoZUJ1YmJsZVBhcmFtcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuYnViYmxlU2l6ZUF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBidWJibGVkU2l6ZXNMZW5ndGggPSB0aGlzLm9wdGlvbnMuYnViYmxlU2l6ZXMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4U2l6ZVZhbCA9IC1JbmZpbml0eTtcbiAgICAgICAgbGV0IG1pblNpemVWYWwgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpemVWYWwgPSBkYXRhW3RoaXMub3B0aW9ucy5idWJibGVTaXplQXR0cl07XG4gICAgICAgICAgICBtYXhTaXplVmFsID0gTWF0aC5tYXgobWF4U2l6ZVZhbCwgc2l6ZVZhbCk7XG4gICAgICAgICAgICBtaW5TaXplVmFsID0gTWF0aC5taW4obWluU2l6ZVZhbCwgc2l6ZVZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2l6ZVN0ZXAgPSAobWF4U2l6ZVZhbCAtIG1pblNpemVWYWwgKyAxKSAvIGJ1YmJsZWRTaXplc0xlbmd0aDtcbiAgICAgICAgdGhpcy5idWJibGVkU2l6ZU1pbiA9IG1pblNpemVWYWw7XG4gICAgICAgIHRoaXMuYnViYmxlZFNpemVTdGVwID0gc2l6ZVN0ZXA7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmJ1YmJsZUNvbG9yQXR0cikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRtcCA9IHt9O1xuICAgICAgICBjb25zdCBwcm9wID0gdGhpcy5vcHRpb25zLmJ1YmJsZUNvbG9yQXR0cjtcbiAgICAgICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YVtwcm9wXSBpbiB0bXApIHtcbiAgICAgICAgICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgdG1wW2RhdGFbcHJvcF1dWzFdICsgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0bXBbZGF0YVtwcm9wXV0gPSBbZGF0YVtwcm9wXSwgMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKHRtcCk7XG4gICAgICAgIHZhbHVlcy5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSk7XG4gICAgICAgIHRoaXMuYnViYmxlZENvbG9yUmVmcyA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoW2F0dHIsIG51bXNdLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gREVGQVVMVF9DT0xPUjtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMub3B0aW9ucy5idWJibGVDb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuYnViYmxlQ29sb3JzW2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYnViYmxlZENvbG9yTWFwW2F0dHJdID0gY29sb3I7XG4gICAgICAgICAgICB0aGlzLmJ1YmJsZWRDb2xvclJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBudW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKiog6I635Y+W5YiG57G76aKc6ImyICovXG4gICAgZ2V0Q2xhc3NpZnlNYXJrZXJDb2xvcihkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzaWZpZWRDb2xvck1hcFtkYXRhW3RoaXMub3B0aW9ucy5jbGFzc2lmaWVkQXR0cl1dO1xuICAgIH1cbiAgICAvKiog57yT5a2Y5YiG5q6155u45YWz5Y+C5pWwICovXG4gICAgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgICAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aDtcbiAgICAgICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eTtcbiAgICAgICAgbGV0IG1pblZhbCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl07XG4gICAgICAgICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbCk7XG4gICAgICAgICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXA7XG4gICAgfVxuICAgIC8qKiDojrflj5bliIbmrrXpopzoibIgKi9cbiAgICBnZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMCldO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIC8qKiDojrflj5bmsJTms6HlpKflsI8gKi9cbiAgICBnZXRCdWJibGVkTWFya2VyU2l6ZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLmJ1YmJsZVNpemVBdHRyXTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMub3B0aW9ucy5idWJibGVTaXplc1twYXJzZUludCgnJyArICh2YWwgLSB0aGlzLmJ1YmJsZWRTaXplTWluKSAvIHRoaXMuYnViYmxlZFNpemVTdGVwLCAxMCldO1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG4gICAgLyoqIOiOt+WPluawlOazoeminOiJsiAqL1xuICAgIGdldEJ1YmJsZWRNYXJrZXJDb2xvcihkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1YmJsZWRDb2xvck1hcFtkYXRhW3RoaXMub3B0aW9ucy5idWJibGVDb2xvckF0dHJdXTtcbiAgICB9XG4gICAgLyoqIOiOt+WPliBwb3B1cCDlhoXlrrkgKi9cbiAgICBnZXRQb3B1cENvbnRlbnQoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWIm+W7uiBjbHVzdGVyIGljb24gKi9cbiAgICBpY29uQ3JlYXRlRnVuY3Rpb24oY2x1c3Rlcikge1xuICAgICAgICBjb25zdCBjb2xvcnMgPSBbJyM3NTc0NzInLCAnIzUwOTNFMicsICcjQ0I3OTg3JywgJyNGQzc2M0InXTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5kYXRhTGlzdC5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBsZW5ndGggLyBjb2xvcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBzY2FsZVN0ZXAgPSAoMSAtIDAuNzUpIC8gY29sb3JzLmxlbmd0aDtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvcjtcbiAgICAgICAgbGV0IHNjYWxlID0gMTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJDbHVzdGVyQ29sb3JUeXBlID09PSAnc21hcnQnKSB7XG4gICAgICAgICAgICBjb2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKChjbHVzdGVyLmdldENoaWxkQ291bnQoKSAtIDEpIC8gc3RlcCldO1xuICAgICAgICAgICAgc2NhbGUgPVxuICAgICAgICAgICAgICAgIChNYXRoLmZsb29yKChjbHVzdGVyLmdldENoaWxkQ291bnQoKSAtIDEpIC8gc3RlcCkgKyAxKSAqIHNjYWxlU3RlcCArXG4gICAgICAgICAgICAgICAgICAgIDAuNzU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgICBodG1sOiBgXG4gICAgICAgPGRpdlxuICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgke3NjYWxlfSwgJHtzY2FsZX0sIDEpXG4gICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke09iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKX07XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtjb2xvcn07XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIG1hcmdpbjogOXB4O1xuICAgICAgICAgIFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgbGVmdDogOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgJHtjbHVzdGVyLmdldENoaWxkQ291bnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICBgLFxuICAgICAgICAgICAgaWNvblNpemU6IFs0MCwgNDBdLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5Z29uL0dyaWRzTGF5ZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEdyaWRzTGF5ZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUG9seWdvbnNMYXllciAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50c1wiKTtcblxuXG5jbGFzcyBHcmlkc0xheWVyIGV4dGVuZHMgX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0ge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKTtcbiAgICAgICAgdGhpcy5wcm9wTWF4TGVuZ3RoID0gLTE7XG4gICAgfVxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5sYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdHcmlkTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIC8vIHRvb2x0aXAg5pyJ5Y+v6IO96ZyA6KaB55u05o6l5bGV56S677yM6ZyA6KaB5ZyoIHBvbHlnb24g5re75Yqg5Yiw5Zyw5Zu+5LiK5LmL5ZCO5omN5Y+v5Lul77yM5omA5Lul6ZyA6KaB5bu26L+f6K6+572uXG4gICAgICAgIHRoaXMuY29uZmlnVG9vbHRpcCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9vbUhhbmRsZXIoKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvZ2dsZVRvb2x0aXAodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIGlmIChwb2x5Z29uLmdldFRvb2x0aXAoKSkge1xuICAgICAgICAgICAgICAgIHBvbHlnb24uZ2V0VG9vbHRpcCgpLnNldE9wYWNpdHkodmlzaWJsZSA/IDEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5tYXAub24oJ3pvb20nLCB0aGlzLnpvb21IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjb25maWdUb29sdGlwKCkge1xuICAgICAgICB0aGlzLnByb3BNYXhMZW5ndGggPSB0aGlzLmdldFByb3BNYXhMZW5ndGgoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSwge1xuICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25maWdHcmlkTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSB0aGlzLnBvbHlnb25zLm1hcCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IocG9seWdvbi5nZXREYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyDph43mlrDlupTnlKggb3B0aW9uc1xuICAgICAgICAgICAgY29uc3QgbmV3UG9seWdvbiA9IG5ldyBfUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpO1xuICAgICAgICAgICAgbmV3UG9seWdvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9seWdvbi5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdQb2x5Z29uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllcjtcbiAgICB9XG4gICAgem9vbUhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLnBvbHlnb25zWzBdO1xuICAgICAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodGhpcy5nZXRSZWN0YW5nbGVXaWR0aChwb2x5Z29uKSA+XG4gICAgICAgICAgICB0aGlzLmdldFRvb2x0aXBNYXhXaWR0aCh0aGlzLnByb3BNYXhMZW5ndGgpKTtcbiAgICB9XG4gICAgZ2V0UmVjdGFuZ2xlV2lkdGgocG9seWdvbikge1xuICAgICAgICByZXR1cm4gKHRoaXMubWFwLmxhdExuZ1RvTGF5ZXJQb2ludChwb2x5Z29uLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpKS54IC1cbiAgICAgICAgICAgIHRoaXMubWFwLmxhdExuZ1RvTGF5ZXJQb2ludChwb2x5Z29uLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpKS54KTtcbiAgICB9XG4gICAgZ2V0VG9vbHRpcE1heFdpZHRoKHRleHRMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRleHRMZW5ndGggKiAxMiArIDE0O1xuICAgIH1cbiAgICBnZXRQcm9wTWF4TGVuZ3RoKCkge1xuICAgICAgICBjb25zdCBwcm9wID0gdHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5wb3B1cEF0dHJcbiAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbnNcbiAgICAgICAgICAgIC5tYXAoKHBvbHlnb24pID0+IGAke3BvbHlnb24uZ2V0RGF0YSgpW3Byb3BdfWAubGVuZ3RoKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHByZXYsIGN1cnIpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5Z29uL1BvbHlnb24udHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlnb247IH0pO1xuY2xhc3MgUG9seWdvbiBleHRlbmRzIEwuUG9seWdvbiB7XG4gICAgY29uc3RydWN0b3IobGF0bG5ncywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb25zTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUG9seWdvbnNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG5cblxuY29uc3QgREVGQVVMVF9DT0xPUiA9ICcjNzJBRkRGJztcbmNsYXNzIFBvbHlnb25zTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhTGlzdCkgfHwgZGF0YUxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGRhdGFMaXN0IOW/hemhu+aYr+mdnuepuuaVsOe7hGApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICAgICAgY29sb3I6IERFRkFVTFRfQ09MT1IsXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgZmlsbENvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgICAgICAgd2VpZ2h0OiAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjQsXG4gICAgICAgICAgICByZW5kZXJQb2x5Z29uQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgIHNlZ21lbnRlZENvbG9yczogW0RFRkFVTFRfQ09MT1JdLFxuICAgICAgICAgICAgY2xhc3NpZmllZENvbG9yczogW0RFRkFVTFRfQ09MT1JdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWdvbic7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIm9wdGlvbnNNZXJnZVwiXSkodGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuYztcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucyA9IFtdO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5O1xuICAgICAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxO1xuICAgICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JNYXAgPSB7fTtcbiAgICAgICAgdGhpcy5mb2N1c2VkUG9seWdvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uID0gbnVsbDtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFBvbHlnb25zKCk7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWdvbkxheWVyKCk7XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZml0Qm91bmRzKCkge1xuICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHModGhpcy5nZXRCb3VuZHMoKSwgeyBwYWRkaW5nOiBbMjAsIDIwXSB9KTtcbiAgICB9XG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb2x5Z29ucy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25zLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksIEwubGF0TG5nQm91bmRzKHRoaXMucG9seWdvbnNbMF0uZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCksIHRoaXMucG9seWdvbnNbMF0uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcGl0Y2goaWQpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBpZiAocG9seWdvbi5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24sIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENsYXNzaWZ5Q29sb3JSZWZzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yUmVmcztcbiAgICB9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gICAgaW5pdEV2ZW50KCkgeyB9XG4gICAgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YSkge1xuICAgICAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl07XG4gICAgfVxuICAgIGdldFBvcHVwQ29udGVudChkYXRhKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZV19YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZUNsYXNzaWZ5UGFyYW1zKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQXR0cikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRtcCA9IHt9O1xuICAgICAgICBjb25zdCBwcm9wID0gdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyO1xuICAgICAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhW3Byb3BdIGluIHRtcCkge1xuICAgICAgICAgICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCB0bXBbZGF0YVtwcm9wXV1bMV0gKyAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcFtkYXRhW3Byb3BdXSA9IFtkYXRhW3Byb3BdLCAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXModG1wKTtcbiAgICAgICAgdmFsdWVzLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKTtcbiAgICAgICAgdGhpcy5jbGFzc2lmeUNvbG9yUmVmcyA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoW2F0dHIsIG51bXNdLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMub3B0aW9ucy5jbGFzc2lmaWVkQ29sb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRDb2xvcnNbaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2F0dHJdID0gY29sb3I7XG4gICAgICAgICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JSZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgIGF0dHIsXG4gICAgICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICAgICAgbnVtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0Q2xhc3NpZnlQb2x5Z29uQ29sb3IoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2RhdGFbdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyXV07XG4gICAgfVxuICAgIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICAgICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpO1xuICAgICAgICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwO1xuICAgIH1cbiAgICBnZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YSkge1xuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW3BhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICBwb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24sIGZpdEJvdW5kcykge1xuICAgICAgICB0aGlzLmZvY3VzZWRQb2x5Z29uID0gcG9seWdvbjtcbiAgICAgICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uID0gbmV3IF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKHBvbHlnb24uZ2V0TGF0TG5ncygpLCB7XG4gICAgICAgICAgICBjb2xvcjogREVGQVVMVF9DT0xPUixcbiAgICAgICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uXG4gICAgICAgICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgICAgICAgIC5vcGVuUG9wdXAoKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBvbHlnb24uY2xvc2VUb29sdGlwKCk7XG4gICAgICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLmdldENlbnRlcigpKTtcbiAgICAgICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHBvbHlnb24uZ2V0Qm91bmRzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlnb24nLCBwb2x5Z29uKTtcbiAgICB9XG4gICAgaW5pdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJvcHRpb25zTWVyZ2VcIl0pKHRoaXMuZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRQb2x5Z29ucygpIHtcbiAgICAgICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKCk7XG4gICAgICAgIHRoaXMuY2FjaGVDbGFzc2lmeVBhcmFtcygpO1xuICAgICAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF07XG4gICAgICAgICAgICBjb25zdCBwb2x5Z29uID0gbmV3IF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKGxheWVyLmdldExhdExuZ3MoKSk7XG4gICAgICAgICAgICBwb2x5Z29uLnNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25maWdQb2x5Z29uTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSB0aGlzLnBvbHlnb25zLm1hcCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIm9wdGlvbnNNZXJnZVwiXSkoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBERUZBVUxUX0NPTE9SLFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIOmHjeaWsOW6lOeUqCBvcHRpb25zXG4gICAgICAgICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKHBvbHlnb24uZ2V0TGF0TG5ncygpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIG5ld1BvbHlnb24uc2V0RGF0YShwb2x5Z29uLmdldERhdGEoKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG5ld1BvbHlnb24uZ2V0RGF0YSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdQb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBuZXdQb2x5Z29uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllcjtcbiAgICB9XG4gICAgZ2V0Q29sb3IoZGF0YSwgbW9kZSkge1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3I7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWdvbkNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnY2xhc3NpZmllZCcpIHtcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRDbGFzc2lmeVBvbHlnb25Db2xvcihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRhcmtlblwiXSkoY29sb3IpO1xuICAgICAgICAgICAgY2FzZSAnbGlnaHRlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlsaW5lOyB9KTtcbmNsYXNzIFBvbHlsaW5lIGV4dGVuZHMgTC5Qb2x5bGluZSB7XG4gICAgY29uc3RydWN0b3IobGF0bG5ncywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5bGluZXNCdWZmZXJMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlsaW5lc0xheWVyICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIudHNcIik7XG5cbmNsYXNzIFBvbHlsaW5lc0J1ZmZlckxheWVyIGV4dGVuZHMgX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYyk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgICAgICAgIGNvcnJpZG9yOiAxMDAsXG4gICAgICAgICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWxpbmVCdWZmZXInO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKTtcbiAgICB9XG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSwgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKCkpO1xuICAgIH1cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgY29uZmlnUG9seWxpbmVCdWZmZXJMYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBwb2x5bGluZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBwb2x5bGluZUJ1ZmZlciA9IEwuY29ycmlkb3IocG9seWxpbmUuZ2V0TGF0TG5ncygpLm1hcCgobGF0TG5nKSA9PiBMLmxhdExuZyhbbGF0TG5nLmxhdCwgbGF0TG5nLmxuZ10pKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgcG9seWxpbmVCdWZmZXIuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihwb2x5bGluZUJ1ZmZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZUxheWVyO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5bGluZXNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlsaW5lICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuXG5cbmNsYXNzIFBvbHlsaW5lc0xheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YUxpc3QpIHx8IGRhdGFMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBkYXRhTGlzdCDlv4XpobvmmK/pnZ7nqbrmlbDnu4RgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIHJlbmRlclBvbHlsaW5lQ29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICAgICAgY2xhc3NpZmllZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHlwZSA9ICdwb2x5bGluZSc7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIm9wdGlvbnNNZXJnZVwiXSkodGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuYztcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wb2x5bGluZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBJbmZpbml0eTtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMTtcbiAgICAgICAgdGhpcy5jbGFzc2lmeUNvbG9yTWFwID0ge307XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbnVsbDtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pO1xuICAgIH1cbiAgICBnZXRCb3VuZHMoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvbHlsaW5lcy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLCBMLmxhdExuZ0JvdW5kcyh0aGlzLnBvbHlsaW5lc1swXS5nZXRCb3VuZHMoKS5nZXROb3J0aEVhc3QoKSwgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlQ29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICBwaXRjaChpZCkge1xuICAgICAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHBvbHlsaW5lLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDbGFzc2lmeUNvbG9yUmVmcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NpZnlDb2xvclJlZnM7XG4gICAgfVxuICAgIGluaXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wib3B0aW9uc01lcmdlXCJdKSh0aGlzLmRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0UG9seWxpbmVzKCkge1xuICAgICAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICAgICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKTtcbiAgICAgICAgdGhpcy5jYWNoZUNsYXNzaWZ5UGFyYW1zKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gdGhpcy5kYXRhTGlzdC5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdO1xuICAgICAgICAgICAgY29uc3QgcG9seWxpbmUgPSBuZXcgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKGxheWVyLmdldExhdExuZ3MoKSk7XG4gICAgICAgICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICAgICAgICBwb2x5bGluZS5zZXREYXRhKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHBvbHlsaW5lO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMCldO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIHBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lLCBmaXRCb3VuZHMpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBwb2x5bGluZTtcbiAgICAgICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnlJ/miJDlvZPliY0gZm9jdXNcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbmV3IF9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShwb2x5bGluZS5nZXRMYXRMbmdzKCksIHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICAgICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWxpbmUuZ2V0RGF0YSgpLCAnbm9ybWFsJyksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUuYWRkVG8odGhpcy5tYXApO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmVcbiAgICAgICAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQocG9seWxpbmUuZ2V0RGF0YSgpKSlcbiAgICAgICAgICAgIC5vcGVuUG9wdXAoKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcG9seWxpbmUuY2xvc2VUb29sdGlwKCk7XG4gICAgICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5nZXRDZW50ZXIoKSk7XG4gICAgICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5bGluZS5nZXRCb3VuZHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stcG9seWxpbmUnLCBwb2x5bGluZSk7XG4gICAgfVxuICAgIGdldFRvb2xUaXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdO1xuICAgIH1cbiAgICBnZXRQb3B1cENvbnRlbnQoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uZmlnUG9seWxpbmVMYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0KF91dGlsc19pbmRleF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wib3B0aW9uc01lcmdlXCJdKSh7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgbmV3UG9seWxpbmUgPSBuZXcgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdKHBvbHlsaW5lLmdldExhdExuZ3MoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdQb2x5bGluZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld1BvbHlsaW5lLnNldERhdGEocG9seWxpbmUuZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb2x5bGluZS5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG5ld1BvbHlsaW5lLmdldERhdGEoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKG5ld1BvbHlsaW5lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlsaW5lTGF5ZXI7XG4gICAgfVxuICAgIGNhY2hlQ2xhc3NpZnlQYXJhbXMoKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG1wID0ge307XG4gICAgICAgIGNvbnN0IHByb3AgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZEF0dHI7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGFbcHJvcF0gaW4gdG1wKSB7XG4gICAgICAgICAgICAgICAgdG1wW2RhdGFbcHJvcF1dID0gW2RhdGFbcHJvcF0sIHRtcFtkYXRhW3Byb3BdXVsxXSArIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG1wW2RhdGFbcHJvcF1dID0gW2RhdGFbcHJvcF0sIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyh0bXApO1xuICAgICAgICB2YWx1ZXMuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pO1xuICAgICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JSZWZzID0gW107XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKChbYXR0ciwgbnVtc10sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRDb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLm9wdGlvbnMuY2xhc3NpZmllZENvbG9yc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsYXNzaWZ5Q29sb3JNYXBbYXR0cl0gPSBjb2xvcjtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NpZnlDb2xvclJlZnMucHVzaCh7XG4gICAgICAgICAgICAgICAgYXR0cixcbiAgICAgICAgICAgICAgICBjb2xvcixcbiAgICAgICAgICAgICAgICBudW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRDbGFzc2lmeVBvbHlsaW5lQ29sb3IoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc2lmeUNvbG9yTWFwW2RhdGFbdGhpcy5vcHRpb25zLmNsYXNzaWZpZWRBdHRyXV07XG4gICAgfVxuICAgIGNhY2hlU2VnbWVudFBhcmFtcygpIHtcbiAgICAgICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGg7XG4gICAgICAgIGxldCBtYXhWYWwgPSAtSW5maW5pdHk7XG4gICAgICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eTtcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpO1xuICAgICAgICAgICAgbWluVmFsID0gTWF0aC5taW4obWluVmFsLCB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAobWF4VmFsIC0gbWluVmFsICsgMSkgLyBzZWdtZW50ZWRMZW5ndGg7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwO1xuICAgIH1cbiAgICBnZXRDb2xvcihkYXRhLCBtb2RlKSB7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvcjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWxpbmVDb2xvclR5cGUgPT09ICdjbGFzc2lmaWVkJykge1xuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmdldENsYXNzaWZ5UG9seWxpbmVDb2xvcihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRhcmtlblwiXSkoY29sb3IpO1xuICAgICAgICAgICAgY2FzZSAnbGlnaHRlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3V0aWxzL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQsIGxpZ2h0ZW4sIGRhcmtlbiwgb3B0aW9uc01lcmdlICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImxpZ2h0ZW5cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBsaWdodGVuOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkYXJrZW5cIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkYXJrZW47IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIm9wdGlvbnNNZXJnZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIG9wdGlvbnNNZXJnZTsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29sb3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29sb3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxuZnVuY3Rpb24gbGlnaHRlbihoZXhDb2xvcikge1xuICAgIHJldHVybiBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKGhleENvbG9yKVxuICAgICAgICAubGlnaHRlbigwLjUpXG4gICAgICAgIC5oZXgoKTtcbn1cbmZ1bmN0aW9uIGRhcmtlbihoZXhDb2xvcikge1xuICAgIHJldHVybiBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKGhleENvbG9yKVxuICAgICAgICAuZGFya2VuKDAuNSlcbiAgICAgICAgLmhleCgpO1xufVxuZnVuY3Rpb24gb3B0aW9uc01lcmdlKC4uLnRhcmdldHMpIHtcbiAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldHNbMF07XG4gICAgfVxuICAgIGNvbnN0IG1lcmdlZCA9IHRhcmdldHNbMF07XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0c1sxXSkge1xuICAgICAgICBpZiAoa2V5IGluIG1lcmdlZCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtZXJnZWRba2V5XSkgPT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2tleV0gPSBvcHRpb25zTWVyZ2UobWVyZ2VkW2tleV0sIHRhcmdldHNbMV1ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRba2V5XSA9IHRhcmdldHNbMV1ba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lcmdlZFtrZXldID0gdGFyZ2V0c1sxXVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zTWVyZ2UobWVyZ2VkLCAuLi50YXJnZXRzLnNsaWNlKDIpKTtcbn1cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoe1xuICAgIGxpZ2h0ZW4sXG4gICAgZGFya2VuLFxuICAgIG9wdGlvbnNNZXJnZSxcbn0pO1xuXG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMM2RsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpSXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3TDNkbFluQmhZMnN2WW05dmRITjBjbUZ3SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0WTI5dWRtVnlkQzlqYjI1MlpYSnphVzl1Y3k1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUxXTnZiblpsY25RdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDI1dlpHVmZiVzlrZFd4bGN5OWpiMnh2Y2kxamIyNTJaWEowTDNKdmRYUmxMbXB6SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0Ym1GdFpTOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUxYTjBjbWx1Wnk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2Ym05a1pWOXRiMlIxYkdWekwyTnZiRzl5TFhOMGNtbHVaeTl1YjJSbFgyMXZaSFZzWlhNdlkyOXNiM0l0Ym1GdFpTOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUwybHVaR1Y0TG1weklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5dWIyUmxYMjF2WkhWc1pYTXZhWE10WVhKeVlYbHBjMmd2YVc1a1pYZ3Vhbk1pTENKM1pXSndZV05yT2k4dmJHVmhabXhsZEUxaGNDOHVMMjV2WkdWZmJXOWtkV3hsY3k5emFXMXdiR1V0YzNkcGVucHNaUzlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZjM0pqTDJSNWJtRnRhV05JWldGMFRHRjVaWEl2UkhsdVlXMXBZMGhsWVhSTVlYbGxjaTUwY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2YzNKakwybHVaR1Y0TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZiV0Z5YTJWeUwwMWhjbXRsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmMzSmpMMjFoY210bGNpOU5ZWEpyWlhKelFuVm1abVZ5VEdGNVpYSXVkSE1pTENKM1pXSndZV05yT2k4dmJHVmhabXhsZEUxaGNDOHVMM055WXk5dFlYSnJaWEl2VFdGeWEyVnljMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXZHZiaTlIY21sa2MweGhlV1Z5TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZjRzlzZVdkdmJpOVFiMng1WjI5dUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXZHZiaTlRYjJ4NVoyOXVjMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXeHBibVV2VUc5c2VXeHBibVV1ZEhNaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDNOeVl5OXdiMng1YkdsdVpTOVFiMng1YkdsdVpYTkNkV1ptWlhKTVlYbGxjaTUwY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2YzNKakwzQnZiSGxzYVc1bEwxQnZiSGxzYVc1bGMweGhlV1Z5TG5Seklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5emNtTXZkWFJwYkhNdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEd0RVFVRXdReXhuUTBGQlowTTdRVUZETVVVN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJkMFFzYTBKQlFXdENPMEZCUXpGRk8wRkJRMEVzZVVSQlFXbEVMR05CUVdNN1FVRkRMMFE3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2xFUVVGNVF5eHBRMEZCYVVNN1FVRkRNVVVzZDBoQlFXZElMRzFDUVVGdFFpeEZRVUZGTzBGQlEzSkpPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiVU5CUVRKQ0xEQkNRVUV3UWl4RlFVRkZPMEZCUTNaRUxIbERRVUZwUXl4bFFVRmxPMEZCUTJoRU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRGhFUVVGelJDd3JSRUZCSzBRN08wRkJSWEpJTzBGQlEwRTdPenRCUVVkQk8wRkJRMEU3T3pzN096czdPenM3T3p0QlEyeEdRVHRCUVVOQkxHdENRVUZyUWl4dFFrRkJUeXhEUVVGRExITkVRVUZaT3p0QlFVVjBRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNVVUZCVVN3MFFrRkJORUk3UVVGRGNFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3eVFrRkJNa0k3UVVGRGJFTXNUMEZCVHl3MlFrRkJOa0k3UVVGRGNFTXNWMEZCVnl4cFEwRkJhVU03UVVGRE5VTXNWVUZCVlN4blEwRkJaME03UVVGRE1VTXNWMEZCVnl4cFEwRkJhVU03UVVGRE5VTXNUMEZCVHl4eFEwRkJjVU03UVVGRE5VTXNVMEZCVXl3eVEwRkJNa003UVVGRGNFUXNVVUZCVVR0QlFVTlNPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNjVVJCUVhGRUxHZENRVUZuUWp0QlFVTnlSU3h0UkVGQmJVUXNZMEZCWXp0QlFVTnFSVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTEdkQ1FVRm5RaXhQUVVGUE8wRkJRM1pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeDFRa0ZCZFVJN08wRkJSWFpDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHZENRVUZuUWl4UFFVRlBMRkZCUVZFN1FVRkRMMElzWjBKQlFXZENMRTlCUVU4c1VVRkJVVHRCUVVNdlFpeHBRa0ZCYVVJc1QwRkJUeXhQUVVGUE8wRkJReTlDTEdsQ1FVRnBRaXhQUVVGUExFOUJRVTg3UVVGREwwSXNaMEpCUVdkQ0xGRkJRVkVzVDBGQlR6dEJRVU12UWl4blFrRkJaMElzVVVGQlVTeFBRVUZQTzBGQlF5OUNPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSE5GUVVGelJUczdRVUZGZEVVN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNjMEpCUVhOQ08wRkJRM1JDTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEN0RFFVRXJReXhGUVVGRkxGVkJRVlVzUlVGQlJUdEJRVU0zUkR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR08wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzWlVGQlpTeGhRVUZoTEdGQlFXRTdRVUZEZWtNN1FVRkRRU3hsUVVGbExHRkJRV0VzWVVGQllUdEJRVU42UXp0QlFVTkJMR1ZCUVdVc1lVRkJZU3hoUVVGaE8wRkJRM3BETzBGQlEwRXNaVUZCWlN4aFFVRmhMR0ZCUVdFN1FVRkRla003UVVGRFFTeGxRVUZsTEdGQlFXRXNZVUZCWVR0QlFVTjZRenRCUVVOQkxHVkJRV1VzWVVGQllUdEJRVU0xUWpzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3UVVOdU1rSkJMR3RDUVVGclFpeHRRa0ZCVHl4RFFVRkRMR3RGUVVGbE8wRkJRM3BETEZsQlFWa3NiVUpCUVU4c1EwRkJReXh6UkVGQlV6czdRVUZGTjBJN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEVzYTBOQlFXdERPMEZCUTJ4RE8wRkJRMEU3UVVGRFFTeDFRMEZCZFVNc1UwRkJVenRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFc2QwUkJRWGRFTEhWRFFVRjFRenRCUVVNdlJpeHpSRUZCYzBRc2NVTkJRWEZET3p0QlFVVXpSanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJpeERRVUZET3p0QlFVVkVPenM3T3pzN096czdPenM3UVVNM1JVRXNhMEpCUVd0Q0xHMUNRVUZQTEVOQlFVTXNhMFZCUVdVN08wRkJSWHBETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4eFEwRkJjVU1zVTBGQlV6dEJRVU01UXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhsQ1FVRjVRanM3UVVGRmVrSTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEhsRFFVRjVReXhUUVVGVE8wRkJRMnhFTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMSEZEUVVGeFF5eFRRVUZUTzBGQlF6bERPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3pzN096czdPenM3T3pzN096dEJReTlHV1RzN1FVRkZXanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3T3pzN096czdPenRCUTNaS1FUdEJRVU5CTEdsQ1FVRnBRaXh0UWtGQlR5eERRVUZETEdkR1FVRlpPMEZCUTNKRExHTkJRV01zYlVKQlFVOHNRMEZCUXl3NFJFRkJaMEk3TzBGQlJYUkRPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFOUJRVTg3UVVGRFVEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNVMEZCVXp0QlFVTlVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMSGxDUVVGNVFpeEpRVUZKTzBGQlF6ZENMSGRDUVVGM1FpeEZRVUZGTEZkQlFWY3NSVUZCUlR0QlFVTjJRenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJMR0ZCUVdFc1QwRkJUenRCUVVOd1FqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRU3hoUVVGaExFOUJRVTg3UVVGRGNFSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWXNZVUZCWVN4UFFVRlBPMEZCUTNCQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR0xHRkJRV0VzVDBGQlR6dEJRVU53UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRXNSVUZCUlR0QlFVTkdPMEZCUTBFN08wRkJSVUVzV1VGQldTeFBRVUZQTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEZWs5Wk96dEJRVVZhTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3T3pzN096czdPenM3T3p0QlEzWktZVHM3UVVGRllpeHJRa0ZCYTBJc2JVSkJRVThzUTBGQlF5d3dSRUZCWXp0QlFVTjRReXhqUVVGakxHMUNRVUZQTEVOQlFVTXNORVJCUVdVN08wRkJSWEpET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPenRCUVVWRU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNZVUZCWVN4dFFrRkJiVUk3UVVGRGFFTTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMR0ZCUVdFc1kwRkJZenRCUVVNelFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2FVSkJRV2xDTEdOQlFXTTdRVUZETDBJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2NVVkJRWEZGTEd0RFFVRnJReXhGUVVGRk96dEJRVVY2Unp0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxHbENRVUZwUWl4blFrRkJaMEk3UVVGRGFrTTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4cFFrRkJhVUlzVDBGQlR6dEJRVU40UWp0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenM3UVVGRlJEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNaMEpCUVdkQ0xGbEJRVms3UVVGRE5VSTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVRzN096czdPenM3T3pzN08wRkRPV1JCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRVbUU3TzBGQlJXSXNhVUpCUVdsQ0xHMUNRVUZQTEVOQlFVTXNkMFJCUVdFN08wRkJSWFJETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFTeHRRMEZCYlVNc1UwRkJVenRCUVVNMVF6czdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRek5DUVR0QlFVRkJPMEZCUVVFN1FVRkhLMEk3UVVGWGFFSXNUVUZCVFN4blFrRkJaMEk3U1VGVmJrTXNXVUZEUlN4SFFVRlZMRVZCUTFZc1pVRkJhVU1zUlVGRGFrTXNUMEZCWjBNc1JVRkRhRU1zVjBGQmQwSTdVVUZGZUVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1pVRkJaU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEYmtVc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJRenRUUVVOd1F6dFJRVU5FTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSenRSUVVOa0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NaVUZCWlR0UlFVTjBReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVODdVVUZEZEVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTzFGQlF6bENMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzUTBGQlF6dFJRVU53UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWs3U1VGRGNrSXNRMEZCUXp0SlFVTk5MRTlCUVU4N1VVRkRXaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVczdVVUZEY0VJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETzFGQlEzQkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTXZRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzBsQlEyUXNRMEZCUXp0SlFVTk5MRXRCUVVzN1VVRkRWaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVczdVVUZEY0VJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZPMWxCUTNSQ0xFOUJRVTA3VTBGRFVEdFJRVU5FTEZWQlFWVXNRMEZCUXl4SFFVRkhMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUTJoQ0xFOUJRVTA3WVVGRFVEdFpRVU5FTEZkQlFWYzdXVUZEV0N4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFbEJRVWtzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk8yZENRVU4yUkN4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVWQlFVVTdiMEpCUTNSQ0xFOUJRVTA3YVVKQlExQTdaMEpCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdGhRVU5tTzJsQ1FVRk5PMmRDUVVOTUxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdaMEpCUTJ4Q0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRuUWtGREwwSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRoUVVOaU8xRkJRMGdzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRE8wbEJRek5DTEVOQlFVTTdTVUZEVFN4TFFVRkxPMUZCUTFZc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTzBsQlEzSkNMRU5CUVVNN1NVRkRUU3hKUVVGSk8xRkJRMVFzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zVjBGQlZ6dFpRVU5rTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEUxQlFVMHNRMEZCUXp0blFrRkRhRVFzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5PMUZCUXpkQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRKUVVOcVF5eERRVUZETzBsQlEwMHNTVUZCU1R0UlFVTlVMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3VVVGRGJFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1RVRkJUVHRSUVVOcVJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03U1VGRGFrTXNRMEZCUXp0SlFVTk5MRkZCUVZFc1EwRkJReXhKUVVGWk8xRkJRekZDTEVsQlFVa3NTVUZCU1N4SFFVRkhMRU5CUVVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5MRVZCUVVVN1dVRkRia1FzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4WlFVRlpMRWxCUVVrc01FSkJRVEJDTEVOQlFVTTdVMEZETlVRN1VVRkRSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFGQlF6bERMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTzBsQlEyNUNMRU5CUVVNN1NVRkRUU3hKUVVGSkxFTkJRVU1zVDBGQmFVTTdVVUZETTBNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEZWtJc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdFJRVU5vUWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJUdFJRVU5xUWl4UFFVRlBMRWxCUVVrN1NVRkRZaXhEUVVGRE8wbEJRMDBzVTBGQlV6dFJRVU5rTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1UwRkJVeXhGUVVGRk8wbEJRM2hDTEVOQlFVTTdTVUZEVHl4WFFVRlhMRU5CUVVNc1QwRkJhVU03VVVGRGJrUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVU14UWp0WlFVTkZMRWxCUVVrc1JVRkJSU3hMUVVGTE8xbEJRMWdzU1VGQlNTeEZRVUZGTEV0QlFVczdXVUZEV0N4UlFVRlJMRVZCUVVVc1NVRkJTVHRUUVVObUxFVkJRMFFzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZEV2l4UFFVRlBMRU5CUTFJN1NVRkRTQ3hEUVVGRE8wbEJRMDhzVTBGQlV6dFJRVU5tTEUxQlFVMHNiVUpCUVcxQ0xFZEJRWGRDTzFsQlF5OURMRlZCUVZVc1JVRkJSU3hOUVVGTk8xbEJRMnhDTEZkQlFWY3NSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUenRUUVVNeFFqdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3cwUkVGQldTeERRVU16UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhGUVVOU0xFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUTNaQ0xHMUNRVUZ0UWl4RlFVTnVRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVU5xUWp0UlFVTkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXM3U1VGRGJrSXNRMEZCUXp0RFFVTkdPenM3T3pzN096czdPenM3TzBGRE5VaEVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVzlETzBGQlExazdRVUZEV1R0QlFVTnNRanRCUVVOWk8wRkJRMWs3UVVGRE0wSTdRVUZEV1R0QlFVTk9PMEZCUTNGQ08wRkJSV3hGTEN0RVFVRmxPMGxCUTJJc09FUkJRVTA3U1VGRFRpd3dSVUZCV1R0SlFVTmFMSE5HUVVGclFqdEpRVU5zUWl4dlJVRkJVVHRKUVVOU0xHZEdRVUZqTzBsQlEyUXNORVpCUVc5Q08wbEJRM0JDTEdsRlFVRlBPMGxCUTFBc05rVkJRV0U3U1VGRFlpeDFSVUZCVlR0SlFVTldMRFJHUVVGblFqdERRVU5xUWp0QlFWbEJPenM3T3pzN096czdPenM3TzBGRGFFTkVPMEZCUVVFN1FVRkJaU3hOUVVGTkxFMUJRVThzVTBGQlVTeERRVUZETEVOQlFVTXNUVUZCVFR0SlFVY3hReXhaUVVGWkxFMUJRVEJDTEVWQlFVVXNUMEZCZVVJN1VVRkRMMFFzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlN4UFFVRlBMRU5CUVVNN1NVRkRlRUlzUTBGQlF6dEpRVU5OTEU5QlFVOHNRMEZCUXl4SlFVRnJRanRSUVVNdlFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrN1NVRkRjRUlzUTBGQlF6dEpRVU5OTEU5QlFVODdVVUZEV2l4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTk8wbEJRM0JDTEVOQlFVTTdRMEZEUmpzN096czdPenM3T3pzN096dEJRMkpFTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVd0Rk8wRkJRM0pDTzBGQlN6bENMRTFCUVUwc2EwSkJRVzFDTEZOQlFWRXNjVVJCUVZrN1NVRkhNVVFzV1VGRFJTeEhRVUZWTEVWQlExWXNVVUZCZDBJc1JVRkRlRUlzVDBGQmEwTXNSVUZEYkVNc1YwRkJkMEk3VVVGRmVFSXNTMEZCU3l4RFFVRkRMRWRCUVVjc1JVRkJSU3hSUVVGUkxFVkJRVVVzVDBGQlR5eEZRVUZGTEZkQlFWY3NRMEZCUXp0UlFVTXhReXhKUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEdOQlFXTTdVVUZETVVJc1RVRkJUU3h2UWtGQmIwSXNSMEZCTUVJN1dVRkRiRVFzVFVGQlRTeEZRVUZGTEVsQlFVazdXVUZEV2l4TlFVRk5MRVZCUVVVc1NVRkJTVHRaUVVOYUxFMUJRVTBzUlVGQlJTeERRVUZETzFOQlExWTdVVUZEUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbEZRVUZaTEVOQlEzcENMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRMW9zUlVGQlJTeGhRVUZoTEVWQlFVVXNiMEpCUVc5Q0xFVkJRVVVzUlVGRGRrTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUTFBN1NVRkRhRU1zUTBGQlF6dEpRVVZOTEVsQlFVa3NRMEZCUXl4UFFVRnRRenRSUVVNM1F5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xGUVVGWkxFTkJRM3BDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUTFvc1QwRkJUeXhEUVVOeFFqdFJRVU01UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVE8xRkJRM3BFTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1VVRkRiRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMGxCUTNSQ0xFTkJRVU03U1VGRlRTeE5RVUZOTzFGQlExZ3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGRGFrSXNUMEZCVFR0VFFVTlFPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzFsQlEzQkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1UwRkRka003VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1dVRkRjRUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFRRVU4yUXp0UlFVTkVMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRk8xRkJRek5ETEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZPMUZCUlRORExFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NRMEZCUXl4RFFVRkRMRlZCUVZVc1JVRkJSVHRSUVVNelFpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFGQlEzSkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkZja01zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF6dFJRVU0zUWl4UFFVRlBMRWxCUVVrN1NVRkRZaXhEUVVGRE8wbEJSVTBzVTBGQlV6dFJRVU5rTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6VkNMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVTdVMEZETlVJN1VVRkRSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTzFsQlEzaERMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGRGFFSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGRE4wUTdVVUZEU0N4RFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4aFFVRmhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03U1VGRE4wVXNRMEZCUXp0SlFVVlBMR2xDUVVGcFFqdFJRVU4yUWl4TlFVRk5MRlZCUVZVc1IwRkJSeXhEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTzFGQlEycERMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVN1dVRkRPVUlzVFVGQlRTeFhRVUZYTEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkRNVUlzVFVGQlRTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVTnNRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZETTBJN1dVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVU3WjBKQlEyeERMRmRCUVZjc1EwRkJReXhYUVVGWExFTkJRM0pDTEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eERRVU4wUkR0aFFVTkdPMmxDUVVGTk8yZENRVU5NTEZGQlFWRXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJUdHZRa0ZEY2tNc1MwRkJTeXhSUVVGUk8zZENRVU5ZTEZkQlFWY3NRMEZCUXl4WFFVRlhMRU5CUTNKQ0xFVkJRVVVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZET1VNN2QwSkJRMFFzVFVGQlN6dHZRa0ZEVUN4TFFVRkxMRkZCUVZFN2QwSkJRMWdzVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZEY2tJc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZEY0VRN2IwSkJRMGc3ZDBKQlEwVXNUVUZCU3p0cFFrRkRVanRoUVVOR08xbEJRMFFzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRiRU1zUTBGQlF5eERRVUZETzFGQlEwWXNUMEZCVHl4VlFVRlZPMGxCUTI1Q0xFTkJRVU03UTBGRFJqczdPenM3T3pzN096czdPenRCUTNSSFJEdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRnpSRHRCUVVWNlFqdEJRVFpGTjBJc1RVRkJUU3hoUVVGaExFZEJRVWNzVTBGQlV6dEJRVU5vUWl4TlFVRk5MRmxCUVZrN1NVRnBSQzlDTEZsQlEwVXNSMEZCVlN4RlFVTldMRkZCUVhkQ0xFVkJRM2hDTEU5QlFUUkNMRVZCUXpWQ0xGZEJRWGRDTzFGQlJYaENMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlEzSkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYTBKQlFXdENMRU5CUVVNN1UwRkRjRU03VVVGRFJDeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhPMWxCUTNCQ0xGVkJRVlVzUlVGQlJTeFBRVUZQTzFsQlEyNUNMRzlDUVVGdlFpeEZRVUZGTEZGQlFWRTdXVUZET1VJc1VVRkJVU3hGUVVGRkxGTkJRVk03V1VGRGJrSXNVVUZCVVN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dFpRVU5zUWl4VFFVRlRMRVZCUVVVc1ZVRkJWVHRaUVVOeVFpeFRRVUZUTEVWQlFVVXNZVUZCWVR0WlFVTjRRaXhWUVVGVkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMWxCUTNCQ0xFdEJRVXNzUlVGQlJTeEpRVUZKTzFsQlExZ3NUMEZCVHl4RlFVRkZMRWxCUVVrN1dVRkRZaXhUUVVGVExFVkJRVVVzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RlFVRkZMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVU3V1VGRGVrTXNWMEZCVnl4RlFVRkZMRTFCUVUwN1dVRkRia0lzWlVGQlpTeEZRVUZGTEVOQlFVTXNZVUZCWVN4RFFVRkRPMWxCUTJoRExHZENRVUZuUWl4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRE8xbEJRMnBETEZOQlFWTXNSVUZCUlN4TFFVRkxPMWxCUTJoQ0xITkNRVUZ6UWl4RlFVRkZMRTlCUVU4N1dVRkRMMElzYVVKQlFXbENMRVZCUVVVc1EwRkJRenRaUVVOd1FpeFpRVUZaTEVWQlFVVXNRMEZCUXl4aFFVRmhMRU5CUVVNN1dVRkROMElzYlVKQlFXMUNMRVZCUVVVc1IwRkJSenRaUVVONFFpeHBRa0ZCYVVJc1JVRkJSU3hIUVVGSE8xbEJRM1JDTEZkQlFWY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRaUVVOcVFpeFhRVUZYTEVWQlFVVTdaMEpCUTFnc1IwRkJSeXhGUVVGRkxFTkJRVU03WjBKQlEwNHNWVUZCVlN4RlFVRkZMRWRCUVVjN1lVRkRhRUk3VTBGRFJqdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1VVRkJVVHRSUVVOd1FpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjN1VVRkRaQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRTdVVUZEZUVJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTzFGQlEzUkNMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ6dFJRVVU1UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWs3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSk8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTVHRSUVVONlFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWxCUVVrN1VVRkRla0lzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhIUVVGSExFbEJRVWs3VVVGRGFFTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRk8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTVHRSUVVOMlFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrN1VVRkRja0lzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpPMUZCUTNoQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1R0UlFVVjJRaXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEZGQlFWRTdVVUZETlVJc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETzFGQlEzUkNMRWxCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzVVVGQlVUdFJRVU01UWl4SlFVRkpMRU5CUVVNc1pVRkJaU3hIUVVGSExFTkJRVU03VVVGRGVFSXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEhRVUZITEVWQlFVVTdVVUZETlVJc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eEZRVUZGTzFGQlEzcENMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhWUVVGVkxFVkJRVVU3U1VGRGJrSXNRMEZCUXp0SlFVTk5MRWxCUVVrc1EwRkJReXhQUVVFMlFqdFJRVU4yUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWs3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhQUVVGUExFTkJRVU03VVVGRGVrSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZPMUZCUTJwQ0xFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0SlFVTjBRaXhEUVVGRE8wbEJRMFFzVjBGQlZ6dEpRVU5LTEUxQlFVMDdVVUZEV0N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5xUWl4UFFVRk5PMU5CUTFBN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEWkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU53UWp0UlFVVkVMR2xDUVVGcFFqdFJRVU5xUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hMUVVGTExFOUJRVThzUlVGQlJUdFpRVU5xUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSVHRUUVVOMlF6dGhRVUZOTzFsQlEwd3NVVUZCVVN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJUdG5Ra0ZETDBJc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF6dHZRa0ZEV2l4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSVHR2UWtGRGNrTXNUVUZCU3p0cFFrRkRUanRuUWtGRFJDeExRVUZMTEZOQlFWTXNRMEZCUXl4RFFVRkRPMjlDUVVOa0xFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEZRVUZGTzI5Q1FVTjBReXhOUVVGTE8ybENRVU5PTzJkQ1FVTkVMRXRCUVVzc1RVRkJUU3hEUVVGRExFTkJRVU03YjBKQlExZ3NTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTzI5Q1FVTnVReXhOUVVGTE8ybENRVU5PTzJkQ1FVTkVMRXRCUVVzc1VVRkJVU3hEUVVGRExFTkJRVU03YjBKQlEySXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRVZCUVVVN2IwSkJRM0pETEUxQlFVczdhVUpCUTA0N1owSkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTTdiMEpCUTFBc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVkQlFVY3NRMEZCUXp0cFFrRkRPVVE3WVVGRFJqdFRRVU5HTzFGQlEwUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTTNRaXhQUVVGUExFbEJRVWs3U1VGRFlpeERRVUZETzBsQlEwUXNZMEZCWXp0SlFVTlFMRTlCUVU4c1EwRkJReXhKUVVGdlFqdFJRVU5xUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWs3U1VGRGRFSXNRMEZCUXp0SlFVTkVMR0ZCUVdFN1NVRkRUaXhWUVVGVkxFTkJRVU1zVDBGQk5FSXNSVUZCUlN4TlFVRk5MRWRCUVVjc1MwRkJTenRSUVVNMVJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xGUVVGWkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVhkQ08xRkJRM3BGTEVsQlFVa3NUVUZCVFN4RlFVRkZPMWxCUTFZc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU5rTzBsQlEwZ3NRMEZCUXp0SlFVTkVMRzFDUVVGdFFqdEpRVU5hTEZWQlFWVTdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUE8wbEJRM0pDTEVOQlFVTTdTVUZEUkN4blFrRkJaMEk3U1VGRFZDeFRRVUZUTzFGQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkROMFFzUTBGQlF6dEpRVU5FTEZkQlFWYzdTVUZEU2l4VFFVRlRPMUZCUTJRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkROVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSVHRUUVVNMVFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRM0pDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkRWQ3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCY1VJc1EwRkRka1U3U1VGRFNDeERRVUZETzBsQlEwUXNWMEZCVnp0SlFVTktMRTlCUVU4N1VVRkRXaXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEWkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUTJwRE8xRkJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVU3V1VGRE4wSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRE8xTkJRMmhFTzFGQlEwUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1NVRkJTU3hEUVVGRE8xRkJRMnhFTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJRenRKUVVOb1JDeERRVUZETzBsQlEwUXNWMEZCVnp0SlFVTktMR0ZCUVdFc1EwRkJReXhQUVVGblFqdFJRVU51UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVTg3VVVGRGRFSXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFppeFBRVUZOTzFOQlExQTdVVUZEUkN4SlFVRkpMRTlCUVU4c1JVRkJSVHRaUVVOWUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU03VTBGRE9VSTdZVUZCVFR0WlFVTk1MRWxCUVVrc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RlFVRkZPMmRDUVVNM1FpeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zVFVGQlRTeEZRVUZGTzJGQlEyNURPMWxCUTBRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRUUVVOcVF6dEpRVU5JTEVOQlFVTTdTVUZEUkN4WFFVRlhPMGxCUTBvc1YwRkJWeXhEUVVGRExFdEJRV0U3VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFZEJRVWNzUzBGQlN6dFJRVU01UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8wbEJRMllzUTBGQlF6dEpRVU5FTEdOQlFXTTdTVUZEVUN4VlFVRlZMRU5CUVVNc1YwRkJiVUk3VVVGRGJrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ6dFJRVU4wUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8wbEJRMllzUTBGQlF6dEpRVU5FTEd0Q1FVRnJRanRKUVVOWUxFdEJRVXNzUTBGQlF5eEZRVUZWTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVN1dVRkRPVUlzU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJUdG5Ra0ZET1VJc1NVRkJTU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU03WjBKQlEzSkRMRTlCUVUwN1lVRkRVRHRSUVVOSUxFTkJRVU1zUTBGQlF6dEpRVU5LTEVOQlFVTTdTVUZEUkN4bFFVRmxPMGxCUTFJc2MwSkJRWE5DTzFGQlF6TkNMRTlCUVU4c1NVRkJTU3hEUVVGRExHMUNRVUZ0UWp0SlFVTnFReXhEUVVGRE8wbEJRMFFzYVVKQlFXbENPMGxCUTFZc2JVSkJRVzFDTzFGQlEzaENMRTlCUVU4c1NVRkJTU3hEUVVGRExHZENRVUZuUWp0SlFVTTVRaXhEUVVGRE8wbEJRMFFzYVVKQlFXbENPMGxCUTFZc2EwSkJRV3RDTzFGQlEzWkNMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRTFCUVUwN1VVRkRhRVFzUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExGRkJRVkVzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0WlFVTnFReXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zWlVGQlpUdFpRVU5xUlN4TlFVRk5MRkZCUVZFc1IwRkJSeXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVTdXVUZEYkVRc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eEpRVUZKTEVOQlFVTTdaMEpCUTNoQ0xFdEJRVXNzUlVGQlJTeERRVUZETEZWQlFWVXNSVUZCUlN4UlFVRlJMRU5CUVVNN1owSkJRemRDTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYkVNc1EwRkJRenRUUVVOSU8xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNaVUZCWlR0SlFVTTNRaXhEUVVGRE8wbEJRMU1zV1VGQldUdFJRVU53UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5xUWl4UFFVRk5PMU5CUTFBN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eEpRVUZKTEV0QlFVc3NVVUZCVVN4RlFVRkZPMWxCUXpGQ0xGRkJRVkVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVN1owSkJReTlDTEV0QlFVc3NUMEZCVHl4RFFVRkRMRU5CUVVNN2IwSkJRMW9zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSVHQzUWtGRE1VSXNUMEZCVFR0eFFrRkRVRHR2UWtGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN2QwSkJRM0JDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdjVUpCUTNaRE8yOUNRVU5FTEUxQlFVczdhVUpCUTA0N1owSkJRMFFzUzBGQlN5eFJRVUZSTEVOQlFVTXNRMEZCUXp0dlFrRkRZaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdkMEpCUTNCQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03Y1VKQlEzWkRPMjlDUVVORUxFMUJRVXM3YVVKQlEwNDdaMEpCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03YjBKQlExQXNUMEZCVFR0cFFrRkRVRHRoUVVOR08xTkJRMFk3WVVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc1kwRkJZeXhGUVVGRk8xbEJRM1pETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTTdVMEZEZGtNN1lVRkJUVHRaUVVOTUxFOUJRVTA3VTBGRFVEdEpRVU5JTEVOQlFVTTdTVUZEVXl4VlFVRlZPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUTJwQ0xFOUJRVTA3VTBGRFVEdFJRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1MwRkJTeXhSUVVGUkxFVkJRVVU3V1VGRE1VSXNVVUZCVVN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJUdG5Ra0ZETDBJc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF6dHZRa0ZEV2l4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTzNkQ1FVTXhRaXhQUVVGTk8zRkNRVU5RTzI5Q1FVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdDNRa0ZEY0VJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenR4UWtGRGNFTTdiMEpCUTBRc1RVRkJTenRwUWtGRFRqdG5Ra0ZEUkN4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRE8yOUNRVU5pTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHQzUWtGRGNFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0eFFrRkRjRU03YjBKQlEwUXNUVUZCU3p0cFFrRkRUanRuUWtGRFJDeFBRVUZQTEVOQlFVTXNRMEZCUXp0dlFrRkRVQ3hQUVVGTk8ybENRVU5RTzJGQlEwWTdVMEZEUmp0aFFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExFbEJRVWtzUzBGQlN5eGpRVUZqTEVWQlFVVTdXVUZEZGtNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRUUVVOd1F6dGhRVUZOTzFsQlEwd3NUMEZCVFR0VFFVTlFPMGxCUTBnc1EwRkJRenRKUVVORUxGbEJRVms3U1VGRFJpeHBRa0ZCYVVJN1VVRkRla0lzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMWxCUTNCQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZPMU5CUXpGQ08xRkJRMFFzVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZCUXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVNM1JDeFRRVUZUTzFGQlExUXNaVUZCWlN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpORUxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhOUVVGblFpeERRVUZETzFGQlF6TkRMRU5CUVVNc1EwRkJRenRSUVVOR0xGTkJRVk03VVVGRFZDeGxRVUZsTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZEY2tVc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eGhRVUZoTEVWQlFVVTdaMEpCUXpsQ0xFdEJRVXM3WjBKQlEwd3NUVUZCVFN4RlFVRkZMRTFCUVUwN1lVRkRaaXhEUVVGRE8xRkJRMG9zUTBGQlF5eERRVUZETzFGQlEwWXNZMEZCWXp0UlFVTmtMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZEZUVJc1pVRkJaU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8yZENRVU16UkN4M1FrRkJkMEk3WjBKQlEzaENMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJUdHZRa0ZEZEVJc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFpRVUZaTEVWQlFVVTdhVUpCUTJ4RE8yZENRVU5FTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1RVRkJaMEk3WjBKQlJYSkRMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlR0dlFrRkRia01zT0VKQlFUaENPMjlDUVVNNVFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRmRCUVZjc1JVRkJSVHRwUWtGRGFrTTdjVUpCUVUwN2IwSkJRMHdzYlVKQlFXMUNPMjlDUVVOdVFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRk8zZENRVU0xUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGZEJRVmNzUTBGRE5VSXNSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zUTBGRE5VUTdjVUpCUTBZN2FVSkJRMFk3V1VGRFNDeERRVUZETEVOQlFVTTdVMEZEU0R0UlFVTkVMR1ZCUVdVc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXp0UlFVVjRReXhsUVVGbE8xRkJRMllzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0UlFVVndReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEdWQlFXVTdVVUZEYkVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zVjBGQlZ6dEpRVU42UWl4RFFVRkRPMGxCUTBRc2IwSkJRVzlDTzBsQlExWXNhVUpCUVdsQ0xFTkJRVU1zU1VGQmEwSTdVVUZETlVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJRelZETEVOQlFVTTdTVUZEUkN4alFVRmpPMGxCUTBvc1YwRkJWeXhEUVVGRExFOUJRVFJDTzFGQlEyaEVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzYVVWQlFWa3NRMEZEZWtJc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGRGJrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkRXaXhQUVVGUExFTkJRMlU3U1VGRE1VSXNRMEZCUXp0SlFVTkVMR2xDUVVGcFFqdEpRVU5RTEZkQlFWYzdVVUZEYmtJc2EwSkJRV3RDTzFGQlEyeENMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSVUZCUlR0UlFVTjZRaXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVN1VVRkRNVUlzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRk8xRkJRM2hDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRSUVVOcVFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTzFsQlF6ZENMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCWVR0WlFVVnFSU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEN0RFFVRk5MRU5CUTNaQ0xFTkJRVU1zUzBGQlN5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1JVRkJSU3hMUVVGTExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUXpsRE8yZENRVU5GTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUTBGQlF6dGhRVU12UWl4RFFVTkdPMWxCUlVRc2EwSkJRV3RDTzFsQlEyeENMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETzFsQlEzQkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0UlFVTXpRaXhEUVVGRExFTkJRVU03U1VGRFNpeERRVUZETzBsQlEwUXNXVUZCV1R0SlFVTkdMRlZCUVZVN1VVRkRiRUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1YwRkJWeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNTVUZCU1N4RFFVRkRPMUZCUTJwRUxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRk5CUVZNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXp0SlFVTXZReXhEUVVGRE8wbEJRMFFzYVVKQlFXbENPMGxCUTFRc2EwSkJRV3RDTEVOQlFVTXNUVUZCWXl4RlFVRkZMRk5CUVcxQ08xRkJRelZFTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1RVRkJUVHRSUVVNelFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRk8xbEJRM1JDTEZsQlFWazdXVUZEV2l4SlFVRkpMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNSVUZCUlR0blFrRkROMElzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMkZCUXk5RE8xbEJRMFFzVjBGQlZ6dFpRVU5ZTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUjBGQlJ5eEpRVUZKTEN0RFFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTzJkQ1FVTjZSQ3hKUVVGSkxFVkJRVVVzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0aFFVTnFSQ3hEUVVGRE8xbEJRMFlzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMWxCUTNwRExHZENRVUZuUWp0WlFVTm9RaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNPMmxDUVVOMFFpeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0cFFrRkRha1FzVTBGQlV5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1IwRkJSeXhGUVVGRk8yZENRVU01UXl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNUVUZCVFN4RlFVRkZPMWxCUTNCRExFTkJRVU1zUTBGQlF6dFRRVU5JTzFGQlEwUXNUVUZCVFN4RFFVRkRMRmxCUVZrc1JVRkJSVHRSUVVWeVFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMUZCUXpsRExFbEJRVWtzVTBGQlV5eEZRVUZGTzFsQlEySXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU53UkR0UlFVTkVMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zYVVKQlFXbENMRVZCUVVVc1RVRkJUU3hEUVVGRE8wbEJRemRETEVOQlFVTTdTVUZEUkN4aFFVRmhPMGxCUTB3c2EwSkJRV3RDTzFGQlEzaENMRk5CUVZNN1VVRkRWQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVTdXVUZEY2tJc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eE5RVUZOTEVWQlFVVTdVMEZETTBJN1VVRkRSQ3hKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEVOQlFVTXNRMEZCUXl4clFrRkJhMElzUTBGQlF6dFpRVU4yUXl4clFrRkJhMElzUlVGQlJTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXp0VFFVTjJSQ3hEUVVGRE8xRkJRMFlzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4VFFVRlRMRU5CUTNwQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVU3V1VGRGNrSXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3dyUTBGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSVHRuUWtGRGRrTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMkZCUTNSRExFTkJRVU03V1VGRFJpeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFpRVU16UWl4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0WlFVTnVSU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZUVRc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZPMmRDUVVOMFFpeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVFVGQlRTeERRVUZETzFsQlEycERMRU5CUVVNc1EwRkJRenRaUVVOR0xFOUJRVThzVFVGQlRUdFJRVU5tTEVOQlFVTXNRMEZCUXl4RFFVTklPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldUdEpRVU14UWl4RFFVRkRPMGxCUlVRc1lVRkJZVHRKUVVOTUxHVkJRV1U3VVVGRGNrSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8xbEJRMnhDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hGUVVGRk8xTkJRM2hDTzFGQlEwUXNUVUZCVFN4SlFVRkpMRWRCUVdFc1JVRkJSVHRSUVVONlFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTzFsQlF6bENMRTFCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eFRRVUZUTEVWQlFVVTdXVUZEYWtNc1RVRkJUU3hoUVVGaExFZEJRMnBDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMR0ZCUVdFN1dVRkRjRVVzU1VGQlNTeEhRVUZITEVkQlEwd3NRMEZCUXl4aFFVRmhMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMmRDUVVOc1JDeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSE8xbEJRemxDTEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hGUVVGRk8yZENRVU16UWl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnp0aFFVTnVRenRaUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMWxCUTJRc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVONlJDeERRVUZETEVOQlFVTTdVVUZEUml4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF5eFRRVUZUTEVOQlF6RkNMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU03V1VGRE9VSXNSVUZCUlN4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFZEJRVWM3V1VGRGJFSXNSVUZCUlN4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFZEJRVWM3V1VGRGJFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRUUVVOYUxFTkJRVU1zUlVGRFJpeHBSVUZCV1N4RFFVRkRMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFZEJRVWNzUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRelZFTzFGQlEwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVenRKUVVOMlFpeERRVUZETzBsQlJVUXNZVUZCWVR0SlFVTk1MR2xDUVVGcFFqdFJRVU4yUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVU3V1VGRGNFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhOUVVGTkxFVkJRVVU3VTBGRE1VSTdVVUZEUkN4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF5eFZRVUZWTEVWQlFVVTdVVUZEYWtNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSVHRaUVVNNVFpeE5RVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xbEJRekZFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03V1VGRE9VUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eHBRa0ZCYVVJc1NVRkJTU3cwUkVGQlR5eERRVUZETEZOQlFWTXNRMEZCUXp0WlFVTnNSU3hOUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR2xDUVVGcFFqdFpRVU0zUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEcxQ1FVRnRRanRaUVVOb1JDeE5RVUZOTEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHbENRVUZwUWp0WlFVTnNSQ3hOUVVGTkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFVkJRVVVzUlVGQlJUdG5Ra0ZEYUVRc1RVRkJUVHRuUWtGRFRpeExRVUZMTzJkQ1FVTk1MRk5CUVZNN1owSkJRMVFzVFVGQlRUdG5Ra0ZEVGl4UFFVRlBPMmRDUVVOUUxGZEJRVmM3WVVGRFdpeERRVUZETzFsQlEwWXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJUdG5Ra0ZEZEVJc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzcEVPMWxCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlR0blFrRkRlRUlzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03WVVGRE4wUTdXVUZEUkN4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZEYmtNc1EwRkJReXhEUVVGRE8xRkJRMFlzVDBGQlR5eEpRVUZKTEVOQlFVTXNWMEZCVnp0SlFVTjZRaXhEUVVGRE8wbEJSVVFzYlVKQlFXMUNPMGxCUTFnc2JVSkJRVzFDTEVOQlFVTXNTVUZCYTBJN1VVRkROVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU03U1VGRGVFTXNRMEZCUXp0SlFVVkVMR2RDUVVGblFqdEpRVU5TTEdGQlFXRXNRMEZCUXl4SlFVRnJRanRSUVVOMFF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF6dEpRVU42UXl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwc3NZMEZCWXl4RFFVTndRaXhKUVVGclFpeEZRVU5zUWl4UlFVRnBRanRSUVVWcVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkU3VVVGRGRFTXNUVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTzFGQlF6RkRMRTFCUVUwc1kwRkJZeXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVY3pSRHRSUVVORUxFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlIycEZPMUZCUlVRc1RVRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRPMUZCUlhoRExGRkJRVkVzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVN1dVRkROMElzUzBGQlN5eFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRXaXhyUWtGQmEwSTdaMEpCUTJ4Q0xIZERRVUYzUXp0blFrRkRlRU1zYjBSQlFXOUVPMmRDUVVOd1JDeG5Ra0ZCWjBJN1owSkJRMmhDTEV0QlFVczdZVUZEVGp0WlFVTkVMRXRCUVVzc1dVRkJXU3hEUVVGRE8xbEJRMnhDTEV0QlFVc3NVVUZCVVN4RFFVRkRPMWxCUTJRc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6dG5Ra0ZEWkN4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU03YjBKQlEyWXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRVZCUVVVN2QwSkJRMnBETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExHTkJRV01zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVR0M1FrRkRPVU1zVTBGQlV6dHhRa0ZEVml4RFFVRkRPMjlDUVVOR0xGTkJRVk1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMSFZDUVVGMVFpeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZPMjlDUVVOc1JDeFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETEZGQlFWRTdiMEpCUXpsRExGVkJRVlVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXl4VlFVRlZPMjlDUVVOd1JDeGhRVUZoTEVWQlFVVXNVVUZCVVR0M1FrRkRja0lzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zZENRVU12UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU16UWl4WFFVRlhMRVZCUVVVc1VVRkJVVHQzUWtGRGJrSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNkQ1FVTXZRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJsQ1FVTTFRaXhEUVVGRE8yRkJRMGc3V1VGRFJDeFBRVUZQTEVOQlFVTXNRMEZCUXp0blFrRkRVQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEd0Q1FVRnJRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRPMkZCUXpORU8xTkJRMFk3U1VGRFNDeERRVUZETzBsQlEwUXNhMEpCUVd0Q08wbEJRMVlzYVVKQlFXbENMRU5CUTNaQ0xFbEJRV3RDTEVWQlEyeENMRTlCUVRoQ08xRkJSVGxDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFVkJRVVU3V1VGRE4wSXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRE8xbEJRMnhFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhaUVVGWkxFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXp0VFFVTm9SRHRSUVVORUxFbEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenRSUVVOc1F5eFJRVUZSTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVTdXVUZEZWtNc1MwRkJTeXhSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZEWWl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTzJkQ1FVTTVRaXhOUVVGTE8yRkJRMDQ3V1VGRFJDeExRVUZMTEZsQlFWa3NRMEZCUXl4RFFVRkRPMmRDUVVOcVFpeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMSE5DUVVGelFpeERRVUZETEVsQlFVa3NRMEZCUXp0blFrRkRla01zVFVGQlN6dGhRVU5PTzFsQlEwUXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJRenRuUWtGRGFFSXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXgxUWtGQmRVSXNRMEZCUXl4SlFVRkpMRU5CUVVNN1owSkJRekZETEUxQlFVczdZVUZEVGp0WlFVTkVMRTlCUVU4c1EwRkJReXhEUVVGRE8yZENRVU5RTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUTJJc05FSkJRVFJDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2IwSkJRVzlDTEVkQlFVY3NRMEZEYWtVN1lVRkRSanRUUVVOR08xRkJRMFFzVVVGQlVTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSVHRaUVVNM1FpeFhRVUZYTzFsQlExZ3NTMEZCU3l4WlFVRlpMRU5CUVVNc1EwRkJRenRuUWtGRGFrSXNUMEZCVHp0elFrRkRUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTTdPM1ZDUVVWeVFpeExRVUZMT3pKQ1FVTkVMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZET3pzN1UwRkhja003WVVGRFJqdFpRVU5FTEZOQlFWTTdXVUZEVkN4TFFVRkxMRkZCUVZFc1EwRkJReXhEUVVGRE8yZENRVU5pTEU5QlFVODdPeXRDUVVWblFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVN08xTkJSVGRETzJGQlEwWTdXVUZEUkN4aFFVRmhPMWxCUTJJc1MwRkJTeXhUUVVGVExFTkJRVU1zUTBGQlF6dG5Ra0ZEWkN4UFFVRlBPenR4UWtGRlRTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNN08zVkNRVVZ3UWl4TFFVRkxPekpDUVVORUxFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPenM3WTBGSGFFTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWE96dFRRVVUzUWp0aFFVTkdPMU5CUTBZN1NVRkRTQ3hEUVVGRE8wbEJRMFFzWlVGQlpUdEpRVU5RTEcxQ1FVRnRRanRSUVVONlFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFVkJRVVU3V1VGRGFFTXNUMEZCVFR0VFFVTlFPMUZCUlVRc1RVRkJUU3hIUVVGSExFZEJRWGxETEVWQlFVVTdVVUZEY0VRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpPMUZCUTNoRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRE4wSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTzJkQ1FVTnlRaXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOMlJEdHBRa0ZCVFR0blFrRkRUQ3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTJ4RE8xRkJRMGdzUTBGQlF5eERRVUZETzFGQlEwWXNUVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEYWtNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVWQlFVVTdVVUZETjBJc1NVRkJTU3hUUVVGVExFZEJRVWNzUTBGQlF6dFJRVU5xUWl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVU3V1VGRGNrTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1lVRkJZVHRaUVVONlFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRuUWtGRGFFUXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1MwRkJTeXhEUVVGRE8yRkJRemRETzFsQlEwUXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzN1dVRkZja01zU1VGQlNTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhuUWtGQlowSXNRMEZCUXl4TlFVRk5MRVZCUVVVN1owSkJRMmhFTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eEpRVUZKTEVOQlFVTTdiMEpCUXpWQ0xFbEJRVWs3YjBKQlEwb3NTMEZCU3p0dlFrRkRUQ3hKUVVGSk8ybENRVU5NTEVOQlFVTTdZVUZEU0R0cFFrRkJUVHRuUWtGRFRDeFRRVUZUTEVsQlFVa3NTVUZCU1R0aFFVTnNRanRSUVVOSUxFTkJRVU1zUTBGQlF6dFJRVU5HTEVsQlFVa3NVMEZCVXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRaUVVOcVFpeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVTTFRaXhKUVVGSkxFVkJRVVVzU1VGQlNUdG5Ra0ZEVml4TFFVRkxMRVZCUVVVc1lVRkJZVHRuUWtGRGNFSXNTVUZCU1N4RlFVRkZMRk5CUVZNN1lVRkRhRUlzUTBGQlF6dFRRVU5JTzBsQlEwZ3NRMEZCUXp0SlFVTkVMR1ZCUVdVN1NVRkRVQ3hwUWtGQmFVSTdVVUZEZGtJc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXl4RlFVRkZPMWxCUTJoRExFOUJRVTA3VTBGRFVEdFJRVU5FTEUxQlFVMHNhMEpCUVd0Q0xFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1RVRkJUVHRSUVVNeFJDeEpRVUZKTEZWQlFWVXNSMEZCUnl4RFFVRkRMRkZCUVZFN1VVRkRNVUlzU1VGQlNTeFZRVUZWTEVkQlFVY3NVVUZCVVR0UlFVTjZRaXhMUVVGTExFMUJRVTBzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1dVRkRhRU1zVFVGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETzFsQlEycEVMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNSVUZCUlN4UFFVRlBMRU5CUVVNN1dVRkRNVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFOUJRVThzUTBGQlF6dFRRVU16UXp0UlFVTkVMRTFCUVUwc1VVRkJVU3hIUVVGSExFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFWVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhyUWtGQmEwSTdVVUZEYmtVc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eFZRVUZWTzFGQlEyaERMRWxCUVVrc1EwRkJReXhsUVVGbExFZEJRVWNzVVVGQlVUdFJRVVV2UWl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVWQlFVVTdXVUZEYWtNc1QwRkJUVHRUUVVOUU8xRkJSVVFzVFVGQlRTeEhRVUZITEVkQlFYbERMRVZCUVVVN1VVRkRjRVFzVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhsUVVGbE8xRkJRM3BETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdXVUZETjBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4RlFVRkZPMmRDUVVOeVFpeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU4yUkR0cFFrRkJUVHRuUWtGRFRDeEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRMnhETzFGQlEwZ3NRMEZCUXl4RFFVRkRPMUZCUTBZc1RVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkRha01zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVNc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4SFFVRkhMRVZCUVVVN1VVRkRNVUlzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZPMWxCUTNKRExFbEJRVWtzUzBGQlN5eEhRVUZITEdGQlFXRTdXVUZEZWtJc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WlFVRlpMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU0xUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFpRVUZaTEVOQlFVTXNTMEZCU3l4RFFVRkRPMkZCUTNwRE8xbEJRMFFzU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhMUVVGTE8xbEJRMnhETEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTTdaMEpCUTNwQ0xFbEJRVWs3WjBKQlEwb3NTMEZCU3p0blFrRkRUQ3hKUVVGSk8yRkJRMHdzUTBGQlF6dFJRVU5LTEVOQlFVTXNRMEZCUXp0SlFVTktMRU5CUVVNN1NVRkRSQ3hoUVVGaE8wbEJRMHdzYzBKQlFYTkNMRU5CUVVNc1NVRkJhMEk3VVVGREwwTXNUMEZCVHl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWTBGQll5eERRVUZETEVOQlFVTTdTVUZEYmtVc1EwRkJRenRKUVVORUxHVkJRV1U3U1VGRFVDeHJRa0ZCYTBJN1VVRkRlRUlzVFVGQlRTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRVU1zVFVGQlRUdFJRVU16UkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExGRkJRVkU3VVVGRGRFSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1VVRkJVVHRSUVVOeVFpeExRVUZMTEUxQlFVMHNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVU3V1VGRGFFTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRPMWxCUXpWRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU03V1VGRE9VSXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXp0VFFVTXZRanRSUVVORUxFMUJRVTBzU1VGQlNTeEhRVUZITEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eGxRVUZsTzFGQlEzQkVMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzVFVGQlRUdFJRVU14UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWs3U1VGRE0wSXNRMEZCUXp0SlFVTkVMR0ZCUVdFN1NVRkRUQ3gxUWtGQmRVSXNRMEZCUXl4SlFVRnJRanRSUVVOb1JDeE5RVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVOQlFVTTdVVUZETlVNc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4bFFVRmxMRU5CUTNoRExGRkJRVkVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRMnhGTzFGQlEwUXNUMEZCVHl4TFFVRkxPMGxCUTJRc1EwRkJRenRKUVVORUxHRkJRV0U3U1VGRFRDeHZRa0ZCYjBJc1EwRkJReXhKUVVGclFqdFJRVU0zUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNN1VVRkROME1zVFVGQlRTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRMjVETEZGQlFWRXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlEzUkZPMUZCUTBRc1QwRkJUeXhKUVVGSk8wbEJRMklzUTBGQlF6dEpRVU5FTEdGQlFXRTdTVUZEVEN4eFFrRkJjVUlzUTBGQlF5eEpRVUZyUWp0UlFVTTVReXhQUVVGUExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdTVUZEYWtVc1EwRkJRenRKUVVORUxHdENRVUZyUWp0SlFVTldMR1ZCUVdVc1EwRkJReXhKUVVGclFqdFJRVU40UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVTdXVUZETTBJc1QwRkJUeXhGUVVGRk8xTkJRMVk3VVVGRFJDeEpRVUZKTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFdEJRVXNzVVVGQlVTeEZRVUZGTzFsQlF6bERMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNTMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0VFFVTndSVHRSUVVORUxFbEJRVWtzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1MwRkJTeXhSUVVGUkxFVkJRVVU3V1VGRE9VTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NTMEZEY0VNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkRia01zUlVGQlJUdFRRVU5JTzBsQlEwZ3NRMEZCUXp0SlFVTkVMSE5DUVVGelFqdEpRVU5rTEd0Q1FVRnJRaXhEUVVGRExFOUJRWGxDTzFGQlEyeEVMRTFCUVUwc1RVRkJUU3hIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEZOQlFWTXNSVUZCUlN4VFFVRlRMRVZCUVVVc1UwRkJVeXhEUVVGRE8xRkJRek5FTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRUdFJRVU51UXl4TlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMDdVVUZEYmtNc1RVRkJUU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTA3VVVGRE5VTXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTzFGQlEyeERMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU03VVVGRFlpeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2MwSkJRWE5DTEV0QlFVc3NUMEZCVHl4RlFVRkZPMWxCUTI1RUxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eGhRVUZoTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zUTBGQlF6dFpRVU5vUlN4TFFVRkxPMmRDUVVOSUxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFRRVUZUTzI5Q1FVTnNSU3hKUVVGSk8xTkJRMUE3VVVGRFJDeFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN1dVRkRaaXhKUVVGSkxFVkJRVVU3T3pzN096czdLMEpCVDIxQ0xFdEJRVXNzUzBGQlN5eExRVUZMT3pzN096czdNRUpCVFhCQ0xEUkVRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRPenM3T3pzN096czdPenM3TUVKQldXUXNTMEZCU3pzN096czdPenM3T3pzN096czdPenM3T3pzN1dVRnZRbTVDTEU5QlFVOHNRMEZCUXl4aFFVRmhMRVZCUVVVN096dFBRVWMxUWp0WlFVTkVMRkZCUVZFc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdVMEZEYmtJc1EwRkJRenRKUVVOS0xFTkJRVU03UTBGRFJqczdPenM3T3pzN096czdPenRCUTNBMlFrUTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJLMEk3UVVGRGNVTTdRVUZIY2tRc1RVRkJUU3hWUVVGWExGTkJRVkVzYzBSQlFXRTdTVUZGYmtRc1dVRkRSU3hIUVVGVkxFVkJRMVlzVVVGQmQwSXNSVUZEZUVJc1QwRkJORUlzUlVGRE5VSXNWMEZCZDBJN1VVRkZlRUlzUzBGQlN5eERRVUZETEVkQlFVY3NSVUZCUlN4UlFVRlJMRVZCUVVVc1QwRkJUeXhGUVVGRkxGZEJRVmNzUTBGQlF6dFJRVU14UXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUTAwc1RVRkJUVHRSUVVOWUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUTJwQ0xFOUJRVTA3VTBGRFVEdFJRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRaUVVOa0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZPMU5CUTNCQ08xRkJRMFFzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRk8xRkJRMjVETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZETjBJc2NVUkJRWEZFTzFGQlEzSkVMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVU3VVVGRGNFSXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSVHRaUVVOa0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVTdVVUZEY0VJc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF6dFJRVU5RTEU5QlFVOHNTVUZCU1R0SlFVTmlMRU5CUVVNN1NVRkRUU3hoUVVGaExFTkJRVU1zVDBGQlowSTdVVUZEYmtNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1JVRkJSVHRaUVVOb1F5eEpRVUZKTEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSVHRuUWtGRGVFSXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEycEVPMUZCUTBnc1EwRkJReXhEUVVGRE8wbEJRMG9zUTBGQlF6dEpRVU5UTEZOQlFWTTdVVUZEYWtJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTJ4RUxFTkJRVU03U1VGRFR5eGhRVUZoTzFGQlEyNUNMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhGUVVGRk8xRkJRelZETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFVkJRVVU3V1VGRE5VSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUlR0blFrRkRhRU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFVkJRVVU3YjBKQlF6ZEVMRk5CUVZNc1JVRkJSU3hKUVVGSk8yOUNRVU5tTEZOQlFWTXNSVUZCUlN4UlFVRlJPMmxDUVVOd1FpeERRVUZETzFsQlEwb3NRMEZCUXl4RFFVRkRPMU5CUTBnN1NVRkRTQ3hEUVVGRE8wbEJRMDhzWlVGQlpUdFJRVU55UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUTBGQlF5eFZRVUZWTEVWQlFVVTdVVUZEYkVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTzFsQlF6VkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3p0WlFVTTVRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNjMEpCUVhOQ0xFdEJRVXNzVjBGQlZ5eEZRVUZGTzJkQ1FVTjJSQ3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEhkQ1FVRjNRaXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0aFFVTjZSRHRaUVVORUxFMUJRVTBzVDBGQlR5eEhRVUZ6UWl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMmRDUVVOcVJTeExRVUZMTzJGQlEwNHNRMEZCUXp0WlFVTkdMR1ZCUVdVN1dVRkRaaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEdkRVFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXp0WlFVTTNSQ3hWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRaUVVOeVF5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVU3WjBKQlF6RkNMRzlEUVVGdlF6dFpRVU4wUXl4RFFVRkRMRU5CUVVNN1dVRkRSaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZPMmRDUVVNeFFpeFZRVUZWTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1lVRkRha1U3V1VGRFJDeFBRVUZQTEZWQlFWVTdVVUZEYmtJc1EwRkJReXhEUVVGRE8xRkJRMFlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdFpRVU5vUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEY2tNc1EwRkJReXhEUVVGRE8xRkJRMFlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1R0SlFVTXhRaXhEUVVGRE8wbEJRMDhzVjBGQlZ6dFJRVU5xUWl4TlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm9ReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlExb3NUMEZCVFR0VFFVTlFPMUZCUTBRc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGRGFFSXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEU5QlFVOHNRMEZCUXp0WlFVTTNRaXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVU01UXp0SlFVTklMRU5CUVVNN1NVRkRUeXhwUWtGQmFVSXNRMEZCUXl4UFFVRm5RanRSUVVONFF5eFBRVUZQTEVOQlEwd3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJwRkxFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVU5zUlR0SlFVTklMRU5CUVVNN1NVRkRUeXhyUWtGQmEwSXNRMEZCUXl4VlFVRnJRanRSUVVNelF5eFBRVUZQTEZWQlFWVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSVHRKUVVNM1FpeERRVUZETzBsQlEwOHNaMEpCUVdkQ08xRkJRM1JDTEUxQlFVMHNTVUZCU1N4SFFVTlNMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEV0QlFVc3NVVUZCVVR0WlFVTjRReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRPMWxCUTNoQ0xFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTE8xRkJRMnhETEU5QlFVOHNTVUZCU1N4RFFVRkRMRkZCUVZFN1lVRkRha0lzUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF6dGhRVU55UkN4TlFVRk5MRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVTdXVUZEY2tJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNN1VVRkROMElzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTlVMRU5CUVVNN1EwRkRSanM3T3pzN096czdPenM3T3p0QlF6RkhSRHRCUVVGQk8wRkJRV1VzVFVGQlRTeFBRVUZSTEZOQlFWRXNRMEZCUXl4RFFVRkRMRTlCUVU4N1NVRkhOVU1zV1VGRFJTeFBRVWMwUWl4RlFVTTFRaXhQUVVFeVFqdFJRVVV6UWl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF6dEpRVU42UWl4RFFVRkRPMGxCUTAwc1QwRkJUeXhEUVVGRExFbEJRV3RDTzFGQlF5OUNMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNUdEpRVU53UWl4RFFVRkRPMGxCUTAwc1QwRkJUenRSUVVOYUxFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMDdTVUZEY0VJc1EwRkJRenREUVVOR096czdPenM3T3pzN096czdPMEZEY0VKRU8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFUaEVPMEZCUlM5Q08wRkJUUzlDTEUxQlFVMHNZVUZCWVN4SFFVRkhMRk5CUVZNN1FVRnRRbWhDTEUxQlFVMHNZVUZCWVR0SlFUQkNhRU1zV1VGRFJTeEhRVUZWTEVWQlExWXNVVUZCZDBJc1JVRkRlRUlzVDBGQk5FSXNSVUZETlVJc1YwRkJkMEk3VVVGRmVFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFVkJRVVU3V1VGRGNrUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhyUWtGQmEwSXNRMEZCUXp0VFFVTndRenRSUVVWRUxFbEJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVYzdXVUZEY0VJc1UwRkJVeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRk8xbEJRM3BETEZkQlFWY3NSVUZCUlN4TlFVRk5PMWxCUTI1Q0xFdEJRVXNzUlVGQlJTeGhRVUZoTzFsQlEzQkNMRWxCUVVrc1JVRkJSU3hKUVVGSk8xbEJRMVlzVTBGQlV5eEZRVUZGTEdGQlFXRTdXVUZEZUVJc1RVRkJUU3hGUVVGRkxFTkJRVU03V1VGRFZDeFBRVUZQTEVWQlFVVXNRMEZCUXp0WlFVTldMRmRCUVZjc1JVRkJSU3hIUVVGSE8xbEJRMmhDTEhOQ1FVRnpRaXhGUVVGRkxGRkJRVkU3V1VGRGFFTXNaVUZCWlN4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRE8xbEJRMmhETEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU1zWVVGQllTeERRVUZETzFOQlEyeERPMUZCUTBRc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eFRRVUZUTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ6dFJRVU5rTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVVHRSUVVONFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMR2xGUVVGWkxFTkJRM3BDTEVsQlFVa3NRMEZCUXl4alFVRmpMRVZCUTI1Q0xFOUJRVThzUTBGRFpUdFJRVU40UWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExGZEJRVmM3VVVGRk9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSk8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1JVRkJSVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRkZCUVZFN1VVRkROVUlzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhGUVVGRk8xRkJRekZDTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTVHRSUVVNeFFpeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFZEJRVWNzU1VGQlNUdEpRVU51UXl4RFFVRkRPMGxCUTAwc1NVRkJTU3hEUVVGRExFOUJRVFpDTzFGQlEzWkRMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETzFGQlEzcENMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVU3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRSUVVOb1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1NVRkRkRUlzUTBGQlF6dEpRVU5OTEUxQlFVMDdVVUZEV0N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdFpRVU5xUWl4UFFVRk5PMU5CUTFBN1VVRkRSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEWkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU53UWp0UlFVTkVMRWxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhGUVVGRk8xRkJRM1JETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVVUZETjBJc1QwRkJUeXhKUVVGSk8wbEJRMklzUTBGQlF6dEpRVU5OTEZOQlFWTTdVVUZEWkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJRenRKUVVNM1JDeERRVUZETzBsQlEwMHNVMEZCVXp0UlFVTmtMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpkQ0xFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVN1UwRkROVUk3VVVGRFJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVONlFpeERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExFVkJRemRETEVOQlFVTXNRMEZCUXl4WlFVRlpMRU5CUTFvc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUlVGRE0wTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkROVU1zUTBGRFJqdEpRVU5JTEVOQlFVTTdTVUZEVFN4UFFVRlBPMUZCUTFvc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTnFRenRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRk8xbEJRemxDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJRenRUUVVOcVJEdEpRVU5JTEVOQlFVTTdTVUZEVFN4aFFVRmhMRU5CUVVNc1QwRkJaMEk3VVVGRGJrTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUE8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8xbEJRMllzVDBGQlRUdFRRVU5RTzFGQlEwUXNTVUZCU1N4UFFVRlBMRVZCUVVVN1dVRkRXQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xTkJRemxDTzJGQlFVMDdXVUZEVEN4SlFVRkpMRWxCUVVrc1EwRkJReXh4UWtGQmNVSXNSVUZCUlR0blFrRkRPVUlzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFMUJRVTBzUlVGQlJUdGhRVU53UXp0WlFVTkVMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRha003U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRXRCUVdFN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMGxCUTJZc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eEZRVUZWTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1dVRkRhRU1zU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJUdG5Ra0ZETDBJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU03WjBKQlEzWkRMRTlCUVUwN1lVRkRVRHRSUVVOSUxFTkJRVU1zUTBGQlF6dEpRVU5LTEVOQlFVTTdTVUZEVFN4dlFrRkJiMEk3VVVGRGVrSXNUMEZCVHl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTzBsQlF5OUNMRU5CUVVNN1NVRkRSQ3h2UTBGQmIwTTdTVUZETVVJc1UwRkJVeXhMUVVGSkxFTkJRVU03U1VGRFpDeHBRa0ZCYVVJc1EwRkJReXhKUVVGclFqdFJRVU0xUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkROVU1zUTBGQlF6dEpRVU5UTEdWQlFXVXNRMEZCUXl4SlFVRnJRanRSUVVNeFF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVU3V1VGRE0wSXNUMEZCVHl4RlFVRkZPMU5CUTFZN1VVRkRSQ3hKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRXRCUVVzc1VVRkJVU3hGUVVGRk8xbEJRemxETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdFRRVU53UlR0UlFVTkVMRWxCUVVrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1dVRkRPVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUzBGRGNFTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZEYmtNc1JVRkJSVHRUUVVOSU8wbEJRMGdzUTBGQlF6dEpRVU5UTEcxQ1FVRnRRanRSUVVNelFpeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFVkJRVVU3V1VGRGFFTXNUMEZCVFR0VFFVTlFPMUZCUlVRc1RVRkJUU3hIUVVGSExFZEJRWGxETEVWQlFVVTdVVUZEY0VRc1RVRkJUU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpPMUZCUTNoRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRE4wSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEZRVUZGTzJkQ1FVTnlRaXhIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOMlJEdHBRa0ZCVFR0blFrRkRUQ3hIUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTJ4RE8xRkJRMGdzUTBGQlF5eERRVUZETzFGQlEwWXNUVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdVVUZEYWtNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEhRVUZITEVWQlFVVTdVVUZETTBJc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTzFsQlEzSkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFOUJRVTg3V1VGRGJrSXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFVkJRVVU3WjBKQlEyaEVMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFdEJRVXNzUTBGQlF6dGhRVU0zUXp0WlFVTkVMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhMUVVGTE8xbEJRMjVETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZKTEVOQlFVTTdaMEpCUXpGQ0xFbEJRVWs3WjBKQlEwb3NTMEZCU3p0blFrRkRUQ3hKUVVGSk8yRkJRMHdzUTBGQlF6dFJRVU5LTEVOQlFVTXNRMEZCUXp0SlFVTktMRU5CUVVNN1NVRkRVeXgxUWtGQmRVSXNRMEZCUXl4SlFVRnJRanRSUVVOc1JDeFBRVUZQTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF6dEpRVU5xUlN4RFFVRkRPMGxCUTFNc2EwSkJRV3RDTzFGQlF6RkNMRTFCUVUwc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwN1VVRkRNMFFzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4UlFVRlJPMUZCUTNSQ0xFbEJRVWtzVFVGQlRTeEhRVUZITEZGQlFWRTdVVUZEY2tJc1MwRkJTeXhOUVVGTkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWxCUTJoRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF6dFpRVU0xUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRPMWxCUXpsQ0xFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGREwwSTdVVUZEUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1pVRkJaVHRSUVVOd1JDeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRTFCUVUwN1VVRkRNVUlzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpPMGxCUXpOQ0xFTkJRVU03U1VGRFV5eDNRa0ZCZDBJc1EwRkJReXhKUVVGclFqdFJRVU51UkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4aFFVRmhMRU5CUVVNN1VVRkROVU1zVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRM2hETEZGQlFWRXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlEyeEZPMUZCUTBRc1QwRkJUeXhMUVVGTE8wbEJRMlFzUTBGQlF6dEpRVU5UTEcxQ1FVRnRRaXhEUVVGRExFOUJRV2RDTEVWQlFVVXNVMEZCYlVJN1VVRkRha1VzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4UFFVRlBPMUZCUXpkQ0xHTkJRV003VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUlVGQlJUdFpRVU01UWl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNUVUZCVFN4RlFVRkZPMU5CUTNCRE8xRkJRMFFzWVVGQllUdFJRVU5pTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUjBGQlJ5eEpRVUZKTEdkRVFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTzFsQlF6ZEVMRXRCUVVzc1JVRkJSU3hoUVVGaE8xbEJRM0JDTEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0VFFVTTFReXhEUVVGRE8xRkJRMFlzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUlRGRExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJN1lVRkRka0lzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEYkVRc1UwRkJVeXhGUVVGRk8xRkJSV1FzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNSMEZCUnl4RlFVRkZPMWxCUXk5RExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhOUVVGTkxFVkJRVVU3VVVGRGNrTXNRMEZCUXl4RFFVRkRPMUZCUTBZc1QwRkJUeXhEUVVGRExGbEJRVmtzUlVGQlJUdFJRVVYwUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZEZEVRc1NVRkJTU3hUUVVGVExFVkJRVVU3V1VGRFlpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVMEZEZUVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFOUJRVThzUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCUTFNc1YwRkJWeXhEUVVGRExFOUJRVFJDTzFGQlEyaEVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzYVVWQlFWa3NRMEZEZWtJc1NVRkJTU3hEUVVGRExHTkJRV01zUlVGRGJrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkRXaXhQUVVGUExFTkJRMlU3U1VGRE1VSXNRMEZCUXp0SlFVTlRMRmxCUVZrN1VVRkRjRUlzYTBKQlFXdENPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSVHRSUVVONlFpeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVU3VVVGRE1VSXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhGUVVGRk8xRkJRMnhDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVWQlFVVTdXVUZETjBJc1RVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTNKRUxFMUJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NaMFJCUVU4c1EwRkJSU3hMUVVGdFFpeERRVUZETEZWQlFWVXNSVUZCUlN4RFFVRkRPMWxCUlRsRUxFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUTNKQ0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRenRSUVVNM1FpeERRVUZETEVOQlFVTTdTVUZEU2l4RFFVRkRPMGxCUTA4c2EwSkJRV3RDTzFGQlEzaENMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlR0UlFVTnNReXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZETlVNc1RVRkJUU3hQUVVGUExFZEJRWE5DTEdsRlFVRlpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdaMEpCUTJoRkxFdEJRVXNzUlVGQlJTeGhRVUZoTzJkQ1FVTndRaXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03WVVGRE5VTXNRMEZCUXp0WlFVTkdMR1ZCUVdVN1dVRkRaaXhOUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEdkRVFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXp0WlFVTTNSQ3hWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRaUVVOeVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRk8yZENRVU0xUWl4VlFVRlZMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnlSVHRaUVVORUxGVkJRVlVzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSVHRuUWtGRE1VSXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEU5QlFVOHNRMEZCUXp0WlFVTnVReXhEUVVGRExFTkJRVU03V1VGRFJpeFBRVUZQTEZWQlFWVTdVVUZEYmtJc1EwRkJReXhEUVVGRE8xRkJRMFlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJUdFpRVU5vUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTTdVVUZEY2tNc1EwRkJReXhEUVVGRE8xRkJRMFlzVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1R0SlFVTXhRaXhEUVVGRE8wbEJRMDhzVVVGQlVTeERRVUZETEVsQlFXdENMRVZCUVVVc1NVRkJaMEk3VVVGRGJrUXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTzFGQlF6bENMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eHpRa0ZCYzBJc1MwRkJTeXhYUVVGWExFVkJRVVU3V1VGRGRrUXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXgzUWtGQmQwSXNRMEZCUXl4SlFVRkpMRU5CUVVNN1UwRkROVU03VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2MwSkJRWE5DTEV0QlFVc3NXVUZCV1N4RlFVRkZPMWxCUTNoRUxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zU1VGQlNTeERRVUZETzFOQlF6TkRPMUZCUTBRc1VVRkJVU3hKUVVGSkxFVkJRVVU3V1VGRFdpeExRVUZMTEZGQlFWRTdaMEpCUTFnc1QwRkJUeXd5UkVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0WlFVTjBRaXhMUVVGTExGTkJRVk03WjBKQlExb3NUMEZCVHl3MFJFRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF6dFpRVU4yUWp0blFrRkRSU3hQUVVGUExFdEJRVXM3VTBGRFpqdEpRVU5JTEVOQlFVTTdRMEZEUmpzN096czdPenM3T3pzN096dEJRelZVUkR0QlFVRkJPMEZCUVdVc1RVRkJUU3hSUVVGVExGTkJRVkVzUTBGQlF5eERRVUZETEZGQlFWRTdTVUZIT1VNc1dVRkJXU3hQUVVGcFF5eEZRVUZGTEU5QlFUSkNPMUZCUTNoRkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRPMGxCUTNwQ0xFTkJRVU03U1VGRFRTeFBRVUZQTEVOQlFVTXNTVUZCYTBJN1VVRkRMMElzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SlFVRkpPMGxCUTNCQ0xFTkJRVU03U1VGRFRTeFBRVUZQTzFGQlExb3NUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUVHRKUVVOd1FpeERRVUZETzBOQlEwWTdPenM3T3pzN096czdPenM3UVVOb1FrUTdRVUZCUVR0QlFVRkJPMEZCUVRaRE8wRkJhMEk1UWl4TlFVRk5MRzlDUVVGeFFpeFRRVUZSTEhWRVFVRmpPMGxCUnpsRUxGbEJRMFVzUjBGQlZTeEZRVU5XTEZGQlFYZENMRVZCUTNoQ0xFOUJRVzFETEVWQlEyNURMRmRCUVhkQ08xRkJSWGhDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1VVRkJVU3hGUVVGRkxFOUJRVThzUlVGQlJTeFhRVUZYTEVOQlFVTTdVVUZETVVNc1RVRkJUU3hqUVVGakxFZEJRU3RDTzFsQlEycEVMSFZDUVVGMVFpeEZRVUZGTEZGQlFWRTdXVUZEYWtNc1pVRkJaU3hGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlF6VkNMRkZCUVZFc1JVRkJSU3hIUVVGSE8xbEJRMklzUzBGQlN5eEZRVUZGTEZOQlFWTTdXVUZEYUVJc1QwRkJUeXhGUVVGRkxFZEJRVWM3VTBGRFlqdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1owSkJRV2RDTzFGQlF6VkNMRWxCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ6dFJRVU5rTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVVHRSUVVONFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4N1VVRkRkRUlzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4WFFVRlhPMUZCUlRsQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1R0UlFVTnVRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVWQlFVVTdVVUZEYmtJc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eFJRVUZSTzFGQlF6VkNMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF6dFJRVU4wUWl3NFFrRkJPRUk3VVVGRk9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4alFVRmpMRVZCUVVVc1QwRkJUeXhEUVVGRE8wbEJRek5FTEVOQlFVTTdTVUZEVFN4SlFVRkpMRU5CUVVNc1QwRkJiME03VVVGRE9VTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRE8xRkJRMjVFTEVsQlFVa3NRMEZCUXl4aFFVRmhMRVZCUVVVN1VVRkRjRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMGxCUTNSQ0xFTkJRVU03U1VGRFRTeE5RVUZOTzFGQlExZ3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGRGFrSXNUMEZCVFR0VFFVTlFPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3VTBGRGNFSTdVVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eDVRa0ZCZVVJc1JVRkJSVHRSUVVNM1F5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlF6ZENMRTlCUVU4c1NVRkJTVHRKUVVOaUxFTkJRVU03U1VGRFRTeFRRVUZUTzFGQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMGxCUTNSRExFTkJRVU03U1VGRFRTeFRRVUZUTzFGQlEyUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzU1VGQlNTeERRVUZETEVWQlFVVTdXVUZET1VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNSVUZCUlR0VFFVTTFRanRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUXpGQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNc1JVRkROME1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGRE9VSTdTVUZEU0N4RFFVRkRPMGxCUTAwc1YwRkJWeXhEUVVGRExFdEJRV0U3VVVGRE9VSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN6dFJRVU14UWl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8wbEJRMllzUTBGQlF6dEpRVU5QTEhsQ1FVRjVRanRSUVVNdlFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJReXhWUVVGVkxFVkJRVVU3VVVGRGJrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlR0WlFVTnNReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVN1owSkJRM2hDTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eFJRVUZSTEVOQlFVTTdXVUZEY2tNc1EwRkJReXhEUVVGRE8xbEJRMFlzVFVGQlRTeFBRVUZQTEVkQlFTdENMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRM1pFTEVWQlFVVXNSVUZEUml4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVOYU8yZENRVU5GTEV0QlFVc3NSVUZEU0N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExIVkNRVUYxUWl4TFFVRkxMRkZCUVZFN2IwSkJReTlETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXM3YjBKQlEzQkNMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zZVVKQlFYbENMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJGQlEzcEVMRU5CUTBZN1dVRkZSQ3hOUVVGTkxHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVTTVRaXhSUVVGUkxFTkJRVU1zVlVGQlZTeEZRVUZwUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlEyNUVMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVU51UXl4RlFVTkVMRTlCUVU4c1EwRkRVanRaUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVN1owSkJRelZDTEdOQlFXTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEzWkZPMWxCUTBRc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRPMUZCUXpkRExFTkJRVU1zUTBGQlF6dFJRVU5HTEU5QlFVOHNTVUZCU1N4RFFVRkRMR0ZCUVdFN1NVRkRNMElzUTBGQlF6dERRVU5HT3pzN096czdPenM3T3pzN08wRkRMMGRFTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVN0RU8wRkJRMFE3UVVGMVFpOURMRTFCUVUwc1kwRkJZenRKUVhsQ2FrTXNXVUZEUlN4SFFVRlZMRVZCUTFZc1VVRkJkMElzUlVGRGVFSXNUMEZCTmtJc1JVRkROMElzVjBGQmQwSTdVVUZGZUVJc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1VVRkJVU3hEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdXVUZEY2tRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJRenRUUVVOd1F6dFJRVU5FTEVsQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjN1dVRkRjRUlzUzBGQlN5eEZRVUZGTEZOQlFWTTdXVUZEYUVJc2RVSkJRWFZDTEVWQlFVVXNVVUZCVVR0WlFVTnFReXhsUVVGbExFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZETlVJc1UwRkJVeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRk8xbEJRM3BETEZkQlFWY3NSVUZCUlN4TlFVRk5PMWxCUTI1Q0xHZENRVUZuUWl4RlFVRkZMRU5CUVVNc1UwRkJVeXhEUVVGRE8xTkJRemxDTzFGQlEwUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhWUVVGVk8xRkJRM1JDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSenRSUVVOa0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVR0UlFVTjRRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsRlFVRlpMRU5CUTNwQ0xFbEJRVWtzUTBGQlF5eGpRVUZqTEVWQlEyNUNMRTlCUVU4c1EwRkRaMEk3VVVGRGVrSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhYUVVGWE8xRkJSVGxDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTVHRSUVVOdVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRVZCUVVVN1VVRkRia0lzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4UlFVRlJPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXp0UlFVTjBRaXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1JVRkJSVHRSUVVNeFFpeEpRVUZKTEVOQlFVTXNaVUZCWlN4SFFVRkhMRWxCUVVrN1VVRkRNMElzU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhIUVVGSExFbEJRVWs3U1VGRGNFTXNRMEZCUXp0SlFVTk5MRWxCUVVrc1EwRkJReXhQUVVFNFFqdFJRVU40UXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF6dFJRVU42UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8xRkJRM0JDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRKUVVOMFFpeERRVUZETzBsQlEwMHNUVUZCVFR0UlFVTllMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEycENMRTlCUVUwN1UwRkRVRHRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NSVUZCUlR0WlFVTmtMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTzFOQlEzQkNPMUZCUTBRc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVU3VVVGRGRrTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTTNRaXhQUVVGUExFbEJRVWs3U1VGRFlpeERRVUZETzBsQlEwMHNVMEZCVXp0UlFVTmtMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRE8wbEJRemRFTEVOQlFVTTdTVUZEVFN4VFFVRlRPMUZCUTJRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSVHRUUVVNMVFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRekZDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGRE4wTXNRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkRXaXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRExGbEJRVmtzUlVGQlJTeEZRVU0xUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVNM1F5eERRVU5HTzBsQlEwZ3NRMEZCUXp0SlFVTk5MRTlCUVU4N1VVRkRXaXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdXVUZEWkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUTJwRE8wbEJRMGdzUTBGQlF6dEpRVU5OTEdGQlFXRXNRMEZCUXl4UFFVRm5RanRSUVVOdVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4N1VVRkRkRUlzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTllMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRPVUk3WVVGQlRUdFpRVU5NTEVsQlFVa3NTVUZCU1N4RFFVRkRMSE5DUVVGelFpeEZRVUZGTzJkQ1FVTXZRaXhKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1RVRkJUU3hGUVVGRk8yRkJRM0pETzFsQlEwUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTnFRenRKUVVOSUxFTkJRVU03U1VGRFRTeFhRVUZYTEVOQlFVTXNTMEZCWVR0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxPMUZCUXpsQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdTVUZEWml4RFFVRkRPMGxCUTAwc1MwRkJTeXhEUVVGRExFVkJRVlU3VVVGRGNrSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlR0WlFVTnNReXhKUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRk8yZENRVU5vUXl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1EwRkJRenRuUWtGRGVrTXNUMEZCVFR0aFFVTlFPMUZCUTBnc1EwRkJReXhEUVVGRE8wbEJRMG9zUTBGQlF6dEpRVU5OTEc5Q1FVRnZRanRSUVVONlFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUk3U1VGREwwSXNRMEZCUXp0SlFVTlRMRmRCUVZjc1EwRkJReXhQUVVFMlFqdFJRVU5xUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExHbEZRVUZaTEVOQlEzcENMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRMjVDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUTFvc1QwRkJUeXhEUVVOblFqdEpRVU16UWl4RFFVRkRPMGxCUTFNc1lVRkJZVHRSUVVOeVFpeHJRa0ZCYTBJN1VVRkRiRUlzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhGUVVGRk8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUlVGQlJUdFJRVVV4UWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFVkJRVVU3V1VGRE1VTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzSkVMRTFCUVUwc1VVRkJVU3hIUVVGSExFbEJRVWtzYVVSQlFWRXNRMEZETVVJc1MwRkJiMElzUTBGQlF5eFZRVUZWTEVWQlFUaENMRU5CUXk5RU8xbEJRMFFzYTBKQlFXdENPMWxCUTJ4Q0xGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRPMWxCUlhSQ0xFOUJRVThzVVVGQlVUdFJRVU5xUWl4RFFVRkRMRU5CUVVNN1NVRkRTaXhEUVVGRE8wbEJRMU1zZVVKQlFYbENMRU5CUVVNc1NVRkJhMEk3VVVGRGNFUXNUVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRPMUZCUXpWRExFMUJRVTBzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVONFF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVU5zUlR0UlFVTkVMRTlCUVU4c1MwRkJTenRKUVVOa0xFTkJRVU03U1VGRFV5eHZRa0ZCYjBJc1EwRkJReXhSUVVGclFpeEZRVUZGTEZOQlFXMUNPMUZCUTNCRkxFbEJRVWtzUTBGQlF5eGxRVUZsTEVkQlFVY3NVVUZCVVR0UlFVTXZRaXhqUVVGak8xRkJRMlFzU1VGQlNTeEpRVUZKTEVOQlFVTXNjMEpCUVhOQ0xFVkJRVVU3V1VGREwwSXNTVUZCU1N4RFFVRkRMSE5DUVVGelFpeERRVUZETEUxQlFVMHNSVUZCUlR0VFFVTnlRenRSUVVORUxHRkJRV0U3VVVGRFlpeEpRVUZKTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzU1VGQlNTeHBSRUZCVVN4RFFVTjRReXhSUVVGUkxFTkJRVU1zVlVGQlZTeEZRVUU0UWl4RlFVTnFSRHRaUVVORkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dFpRVU40UXl4VFFVRlRMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVc1VVRkJVU3hEUVVGRE8xTkJRM1pFTEVOQlEwWTdVVUZEUkN4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU03VVVGRk0wTXNTVUZCU1N4RFFVRkRMSE5DUVVGelFqdGhRVU40UWl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1EwRkJRenRoUVVOdVJDeFRRVUZUTEVWQlFVVTdVVUZGWkN4SlFVRkpMRU5CUVVNc2MwSkJRWE5DTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1JVRkJSU3hIUVVGSExFVkJRVVU3V1VGRGFFUXNTVUZCU1N4RFFVRkRMSE5DUVVGelFpeERRVUZETEUxQlFVMHNSVUZCUlR0UlFVTjBReXhEUVVGRExFTkJRVU03VVVGRlJpeFJRVUZSTEVOQlFVTXNXVUZCV1N4RlFVRkZPMUZCUlhaQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRSUVVOMlJDeEpRVUZKTEZOQlFWTXNSVUZCUlR0WlFVTmlMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJRenRUUVVONlF6dFJRVU5FTEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNVVUZCVVN4RFFVRkRPMGxCUTJwRUxFTkJRVU03U1VGRFV5eHBRa0ZCYVVJc1EwRkJReXhKUVVGclFqdFJRVU0xUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNN1NVRkROVU1zUTBGQlF6dEpRVU5UTEdWQlFXVXNRMEZCUXl4SlFVRnJRanRSUVVNeFF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVU3V1VGRE0wSXNUMEZCVHl4RlFVRkZPMU5CUTFZN1VVRkRSQ3hKUVVGSkxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRXRCUVVzc1VVRkJVU3hGUVVGRk8xbEJRemxETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUzBGQlN5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdFRRVU53UlR0UlFVTkVMRWxCUVVrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1dVRkRPVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUzBGRGNFTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZEYmtNc1JVRkJSVHRUUVVOSU8wbEJRMGdzUTBGQlF6dEpRVU5QTEcxQ1FVRnRRanRSUVVONlFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJReXhWUVVGVkxFVkJRVVU3VVVGRGJrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlR0WlFVTnNReXhOUVVGTkxFOUJRVThzUjBGQmMwSXNhVVZCUVZrc1EwRkJReXhGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0blFrRkRhRVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzJGQlEzcERMRU5CUVVNN1dVRkRSaXhOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEdsRVFVRlJMRU5CUXpsQ0xGRkJRVkVzUTBGQlF5eFZRVUZWTEVWQlFUaENMRVZCUTJwRUxFOUJRVThzUTBGRFVqdFpRVU5FTEZkQlFWY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlJUdG5Ra0ZETTBJc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRkZCUVZFc1EwRkJRenRaUVVOeVF5eERRVUZETEVOQlFVTTdXVUZEUml4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0WlFVTjJReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RlFVRkZPMmRDUVVNMVFpeFhRVUZYTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU1zUTBGQlF6dGhRVU4yUlR0WlFVTkVMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXp0UlFVTXhReXhEUVVGRExFTkJRVU03VVVGRFJpeFBRVUZQTEVsQlFVa3NRMEZCUXl4aFFVRmhPMGxCUXpOQ0xFTkJRVU03U1VGRFR5eHRRa0ZCYlVJN1VVRkRla0lzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhGUVVGRk8xbEJRMmhETEU5QlFVMDdVMEZEVUR0UlFVVkVMRTFCUVUwc1IwRkJSeXhIUVVGNVF5eEZRVUZGTzFGQlEzQkVMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZMEZCWXp0UlFVTjRReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRk8xbEJRemRDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzUlVGQlJUdG5Ra0ZEY2tJc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRka1E3YVVKQlFVMDdaMEpCUTB3c1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnNRenRSUVVOSUxFTkJRVU1zUTBGQlF6dFJRVU5HTEUxQlFVMHNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETzFGQlEycERMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUjBGQlJ5eEZRVUZGTzFGQlF6TkNMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJUdFpRVU55UXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhQUVVGUE8xbEJRMjVDTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hGUVVGRk8yZENRVU5vUkN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU03WVVGRE4wTTdXVUZEUkN4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1MwRkJTenRaUVVOdVF5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeERRVUZETzJkQ1FVTXhRaXhKUVVGSk8yZENRVU5LTEV0QlFVczdaMEpCUTB3c1NVRkJTVHRoUVVOTUxFTkJRVU03VVVGRFNpeERRVUZETEVOQlFVTTdTVUZEU2l4RFFVRkRPMGxCUTA4c2QwSkJRWGRDTEVOQlFVTXNTVUZCYTBJN1VVRkRha1FzVDBGQlR5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1kwRkJZeXhEUVVGRExFTkJRVU03U1VGRGFrVXNRMEZCUXp0SlFVTlBMR3RDUVVGclFqdFJRVU40UWl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5PMUZCUXpORUxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNVVUZCVVR0UlFVTjBRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eFJRVUZSTzFGQlEzSkNMRXRCUVVzc1RVRkJUU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU03V1VGRE5VTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXp0WlFVTTVRaXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRE8xTkJReTlDTzFGQlEwUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMR1ZCUVdVN1VVRkRjRVFzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4TlFVRk5PMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1R0SlFVTXpRaXhEUVVGRE8wbEJRMDhzVVVGQlVTeERRVUZETEVsQlFXdENMRVZCUVVVc1NVRkJaMEk3VVVGRGJrUXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTzFGQlF6bENMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eDFRa0ZCZFVJc1MwRkJTeXhYUVVGWExFVkJRVVU3V1VGRGVFUXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4SlFVRkpMRU5CUVVNN1UwRkROME03VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc2RVSkJRWFZDTEV0QlFVc3NXVUZCV1N4RlFVRkZPMWxCUTNwRUxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNkMEpCUVhkQ0xFTkJRVU1zU1VGQlNTeERRVUZETzFOQlF6VkRPMUZCUTBRc1VVRkJVU3hKUVVGSkxFVkJRVVU3V1VGRFdpeExRVUZMTEZGQlFWRTdaMEpCUTFnc1QwRkJUeXd5UkVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0WlFVTjBRaXhMUVVGTExGTkJRVk03WjBKQlExb3NUMEZCVHl3MFJFRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF6dFpRVU4yUWp0blFrRkRSU3hQUVVGUExFdEJRVXM3VTBGRFpqdEpRVU5JTEVOQlFVTTdRMEZEUmpzN096czdPenM3T3pzN096dEJRM1pVUkR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQk9FSTdRVUZGT1VJc1UwRkJVeXhQUVVGUExFTkJRVU1zVVVGQlowSTdTVUZETDBJc1QwRkJUeXhyUTBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXp0VFFVTnVRaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETzFOQlExb3NSMEZCUnl4RlFVRkZPMEZCUTFZc1EwRkJRenRCUVVORUxGTkJRVk1zVFVGQlRTeERRVUZETEZGQlFXZENPMGxCUXpsQ0xFOUJRVThzYTBOQlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNN1UwRkRia0lzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXp0VFFVTllMRWRCUVVjc1JVRkJSVHRCUVVOV0xFTkJRVU03UVVGRlJDeFRRVUZUTEZsQlFWa3NRMEZCUXl4SFFVRkhMRTlCUVdNN1NVRkRja01zU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVONFFpeFBRVUZQTEVWQlFVVTdTMEZEVmp0SlFVTkVMRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUzBGQlN5eERRVUZETEVWQlFVVTdVVUZEZUVJc1QwRkJUeXhQUVVGUExFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEyeENPMGxCUTBRc1RVRkJUU3hOUVVGTkxFZEJRVWNzVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjZRaXhMUVVGTExFMUJRVTBzUjBGQlJ5eEpRVUZKTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSVHRSUVVNMVFpeEpRVUZKTEVkQlFVY3NTVUZCU1N4TlFVRk5MRVZCUVVVN1dVRkRha0lzU1VGQlNTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRXRCUVVzc2FVSkJRV2xDTEVWQlFVVTdaMEpCUTNKRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dGhRVU42UkR0cFFrRkJUVHRuUWtGRFRDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0aFFVTTVRanRUUVVOR08yRkJRVTA3V1VGRFRDeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXp0VFFVTTVRanRMUVVOR08wbEJRMFFzVDBGQlR5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnNSQ3hEUVVGRE8wRkJSV003U1VGRFlpeFBRVUZQTzBsQlExQXNUVUZCVFR0SlFVTk9MRmxCUVZrN1EwRkRZanRCUVVOMVF5SXNJbVpwYkdVaU9pSnNaV0ZtYkdWMExXeGhlV1Z5TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lLR1oxYm1OMGFXOXVJSGRsWW5CaFkydFZibWwyWlhKellXeE5iMlIxYkdWRVpXWnBibWwwYVc5dUtISnZiM1FzSUdaaFkzUnZjbmtwSUh0Y2JseDBhV1lvZEhsd1pXOW1JR1Y0Y0c5eWRITWdQVDA5SUNkdlltcGxZM1FuSUNZbUlIUjVjR1Z2WmlCdGIyUjFiR1VnUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEcxdlpIVnNaUzVsZUhCdmNuUnpJRDBnWm1GamRHOXllU2dwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCa1pXWnBibVVnUFQwOUlDZG1kVzVqZEdsdmJpY2dKaVlnWkdWbWFXNWxMbUZ0WkNsY2JseDBYSFJrWldacGJtVW9XMTBzSUdaaFkzUnZjbmtwTzF4dVhIUmxiSE5sSUdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSbGVIQnZjblJ6VzF3aWJHVmhabXhsZEUxaGNGd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSnNaV0ZtYkdWMFRXRndYQ0pkSUQwZ1ptRmpkRzl5ZVNncE8xeHVmU2tvZDJsdVpHOTNMQ0JtZFc1amRHbHZiaWdwSUh0Y2JuSmxkSFZ5YmlBaUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z1oyVjBPaUJuWlhSMFpYSWdmU2s3WEc0Z1hIUmNkSDFjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR1JsWm1sdVpTQmZYMlZ6VFc5a2RXeGxJRzl1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVjaUE5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1wSUh0Y2JpQmNkRngwYVdZb2RIbHdaVzltSUZONWJXSnZiQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRk41YldKdmJDNTBiMU4wY21sdVoxUmhaeXdnZXlCMllXeDFaVG9nSjAxdlpIVnNaU2NnZlNrN1hHNGdYSFJjZEgxY2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lDZGZYMlZ6VFc5a2RXeGxKeXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJR055WldGMFpTQmhJR1poYTJVZ2JtRnRaWE53WVdObElHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JREU2SUhaaGJIVmxJR2x6SUdFZ2JXOWtkV3hsSUdsa0xDQnlaWEYxYVhKbElHbDBYRzRnWEhRdkx5QnRiMlJsSUNZZ01qb2diV1Z5WjJVZ1lXeHNJSEJ5YjNCbGNuUnBaWE1nYjJZZ2RtRnNkV1VnYVc1MGJ5QjBhR1VnYm5OY2JpQmNkQzh2SUcxdlpHVWdKaUEwT2lCeVpYUjFjbTRnZG1Gc2RXVWdkMmhsYmlCaGJISmxZV1I1SUc1eklHOWlhbVZqZEZ4dUlGeDBMeThnYlc5a1pTQW1JRGg4TVRvZ1ltVm9ZWFpsSUd4cGEyVWdjbVZ4ZFdseVpWeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1MElEMGdablZ1WTNScGIyNG9kbUZzZFdVc0lHMXZaR1VwSUh0Y2JpQmNkRngwYVdZb2JXOWtaU0FtSURFcElIWmhiSFZsSUQwZ1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aDJZV3gxWlNrN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBNEtTQnlaWFIxY200Z2RtRnNkV1U3WEc0Z1hIUmNkR2xtS0NodGIyUmxJQ1lnTkNrZ0ppWWdkSGx3Wlc5bUlIWmhiSFZsSUQwOVBTQW5iMkpxWldOMEp5QW1KaUIyWVd4MVpTQW1KaUIyWVd4MVpTNWZYMlZ6VFc5a2RXeGxLU0J5WlhSMWNtNGdkbUZzZFdVN1hHNGdYSFJjZEhaaGNpQnVjeUE5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNpaHVjeWs3WEc0Z1hIUmNkRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNodWN5d2dKMlJsWm1GMWJIUW5MQ0I3SUdWdWRXMWxjbUZpYkdVNklIUnlkV1VzSUhaaGJIVmxPaUIyWVd4MVpTQjlLVHRjYmlCY2RGeDBhV1lvYlc5a1pTQW1JRElnSmlZZ2RIbHdaVzltSUhaaGJIVmxJQ0U5SUNkemRISnBibWNuS1NCbWIzSW9kbUZ5SUd0bGVTQnBiaUIyWVd4MVpTa2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTVrS0c1ekxDQnJaWGtzSUdaMWJtTjBhVzl1S0d0bGVTa2dleUJ5WlhSMWNtNGdkbUZzZFdWYmEyVjVYVHNnZlM1aWFXNWtLRzUxYkd3c0lHdGxlU2twTzF4dUlGeDBYSFJ5WlhSMWNtNGdibk03WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJuWlhSRVpXWmhkV3gwUlhod2IzSjBJR1oxYm1OMGFXOXVJR1p2Y2lCamIyMXdZWFJwWW1sc2FYUjVJSGRwZEdnZ2JtOXVMV2hoY20xdmJua2diVzlrZFd4bGMxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dUlEMGdablZ1WTNScGIyNG9iVzlrZFd4bEtTQjdYRzRnWEhSY2RIWmhjaUJuWlhSMFpYSWdQU0J0YjJSMWJHVWdKaVlnYlc5a2RXeGxMbDlmWlhOTmIyUjFiR1VnUDF4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFUmxabUYxYkhRb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdWYkoyUmxabUYxYkhRblhUc2dmU0E2WEc0Z1hIUmNkRngwWm5WdVkzUnBiMjRnWjJWMFRXOWtkV3hsUlhod2IzSjBjeWdwSUhzZ2NtVjBkWEp1SUcxdlpIVnNaVHNnZlR0Y2JpQmNkRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1a0tHZGxkSFJsY2l3Z0oyRW5MQ0JuWlhSMFpYSXBPMXh1SUZ4MFhIUnlaWFIxY200Z1oyVjBkR1Z5TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbThnUFNCbWRXNWpkR2x2YmlodlltcGxZM1FzSUhCeWIzQmxjblI1S1NCN0lISmxkSFZ5YmlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd3b2IySnFaV04wTENCd2NtOXdaWEowZVNrN0lIMDdYRzVjYmlCY2RDOHZJRjlmZDJWaWNHRmphMTl3ZFdKc2FXTmZjR0YwYUY5ZlhHNGdYSFJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG5BZ1BTQmNJbHdpTzF4dVhHNWNiaUJjZEM4dklFeHZZV1FnWlc1MGNua2diVzlrZFd4bElHRnVaQ0J5WlhSMWNtNGdaWGh3YjNKMGMxeHVJRngwY21WMGRYSnVJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThvWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1eklEMGdYQ0l1TDNOeVl5OXBibVJsZUM1MGMxd2lLVHRjYmlJc0lpOHFJRTFKVkNCc2FXTmxibk5sSUNvdlhHNTJZWElnWTNOelMyVjVkMjl5WkhNZ1BTQnlaWEYxYVhKbEtDZGpiMnh2Y2kxdVlXMWxKeWs3WEc1Y2JpOHZJRTVQVkVVNklHTnZiblpsY25OcGIyNXpJSE5vYjNWc1pDQnZibXg1SUhKbGRIVnliaUJ3Y21sdGFYUnBkbVVnZG1Gc2RXVnpJQ2hwTG1VdUlHRnljbUY1Y3l3Z2IzSmNiaTh2SUNBZ0lDQWdJSFpoYkhWbGN5QjBhR0YwSUdkcGRtVWdZMjl5Y21WamRDQmdkSGx3Wlc5bVlDQnlaWE4xYkhSektTNWNiaTh2SUNBZ0lDQWdJR1J2SUc1dmRDQjFjMlVnWW05NElIWmhiSFZsY3lCMGVYQmxjeUFvYVM1bExpQk9kVzFpWlhJb0tTd2dVM1J5YVc1bktDa3NJR1YwWXk0cFhHNWNiblpoY2lCeVpYWmxjbk5sUzJWNWQyOXlaSE1nUFNCN2ZUdGNibVp2Y2lBb2RtRnlJR3RsZVNCcGJpQmpjM05MWlhsM2IzSmtjeWtnZTF4dVhIUnBaaUFvWTNOelMyVjVkMjl5WkhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1WEhSY2RISmxkbVZ5YzJWTFpYbDNiM0prYzF0amMzTkxaWGwzYjNKa2MxdHJaWGxkWFNBOUlHdGxlVHRjYmx4MGZWeHVmVnh1WEc1MllYSWdZMjl1ZG1WeWRDQTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh1WEhSeVoySTZJSHRqYUdGdWJtVnNjem9nTXl3Z2JHRmlaV3h6T2lBbmNtZGlKMzBzWEc1Y2RHaHpiRG9nZTJOb1lXNXVaV3h6T2lBekxDQnNZV0psYkhNNklDZG9jMnduZlN4Y2JseDBhSE4yT2lCN1kyaGhibTVsYkhNNklETXNJR3hoWW1Wc2N6b2dKMmh6ZGlkOUxGeHVYSFJvZDJJNklIdGphR0Z1Ym1Wc2N6b2dNeXdnYkdGaVpXeHpPaUFuYUhkaUozMHNYRzVjZEdOdGVXczZJSHRqYUdGdWJtVnNjem9nTkN3Z2JHRmlaV3h6T2lBblkyMTVheWQ5TEZ4dVhIUjRlWG82SUh0amFHRnVibVZzY3pvZ015d2diR0ZpWld4ek9pQW5lSGw2SjMwc1hHNWNkR3hoWWpvZ2UyTm9ZVzV1Wld4ek9pQXpMQ0JzWVdKbGJITTZJQ2RzWVdJbmZTeGNibHgwYkdOb09pQjdZMmhoYm01bGJITTZJRE1zSUd4aFltVnNjem9nSjJ4amFDZDlMRnh1WEhSb1pYZzZJSHRqYUdGdWJtVnNjem9nTVN3Z2JHRmlaV3h6T2lCYkoyaGxlQ2RkZlN4Y2JseDBhMlY1ZDI5eVpEb2dlMk5vWVc1dVpXeHpPaUF4TENCc1lXSmxiSE02SUZzbmEyVjVkMjl5WkNkZGZTeGNibHgwWVc1emFURTJPaUI3WTJoaGJtNWxiSE02SURFc0lHeGhZbVZzY3pvZ1d5ZGhibk5wTVRZblhYMHNYRzVjZEdGdWMya3lOVFk2SUh0amFHRnVibVZzY3pvZ01Td2diR0ZpWld4ek9pQmJKMkZ1YzJreU5UWW5YWDBzWEc1Y2RHaGpaem9nZTJOb1lXNXVaV3h6T2lBekxDQnNZV0psYkhNNklGc25hQ2NzSUNkakp5d2dKMmNuWFgwc1hHNWNkR0Z3Y0d4bE9pQjdZMmhoYm01bGJITTZJRE1zSUd4aFltVnNjem9nV3lkeU1UWW5MQ0FuWnpFMkp5d2dKMkl4TmlkZGZTeGNibHgwWjNKaGVUb2dlMk5vWVc1dVpXeHpPaUF4TENCc1lXSmxiSE02SUZzblozSmhlU2RkZlZ4dWZUdGNibHh1THk4Z2FHbGtaU0F1WTJoaGJtNWxiSE1nWVc1a0lDNXNZV0psYkhNZ2NISnZjR1Z5ZEdsbGMxeHVabTl5SUNoMllYSWdiVzlrWld3Z2FXNGdZMjl1ZG1WeWRDa2dlMXh1WEhScFppQW9ZMjl1ZG1WeWRDNW9ZWE5QZDI1UWNtOXdaWEowZVNodGIyUmxiQ2twSUh0Y2JseDBYSFJwWmlBb0lTZ25ZMmhoYm01bGJITW5JR2x1SUdOdmJuWmxjblJiYlc5a1pXeGRLU2tnZTF4dVhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2R0YVhOemFXNW5JR05vWVc1dVpXeHpJSEJ5YjNCbGNuUjVPaUFuSUNzZ2JXOWtaV3dwTzF4dVhIUmNkSDFjYmx4dVhIUmNkR2xtSUNnaEtDZHNZV0psYkhNbklHbHVJR052Ym5abGNuUmJiVzlrWld4ZEtTa2dlMXh1WEhSY2RGeDBkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZHRhWE56YVc1bklHTm9ZVzV1Wld3Z2JHRmlaV3h6SUhCeWIzQmxjblI1T2lBbklDc2diVzlrWld3cE8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaGpiMjUyWlhKMFcyMXZaR1ZzWFM1c1lXSmxiSE11YkdWdVozUm9JQ0U5UFNCamIyNTJaWEowVzIxdlpHVnNYUzVqYUdGdWJtVnNjeWtnZTF4dVhIUmNkRngwZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RqYUdGdWJtVnNJR0Z1WkNCc1lXSmxiQ0JqYjNWdWRITWdiV2x6YldGMFkyZzZJQ2NnS3lCdGIyUmxiQ2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBkbUZ5SUdOb1lXNXVaV3h6SUQwZ1kyOXVkbVZ5ZEZ0dGIyUmxiRjB1WTJoaGJtNWxiSE03WEc1Y2RGeDBkbUZ5SUd4aFltVnNjeUE5SUdOdmJuWmxjblJiYlc5a1pXeGRMbXhoWW1Wc2N6dGNibHgwWEhSa1pXeGxkR1VnWTI5dWRtVnlkRnR0YjJSbGJGMHVZMmhoYm01bGJITTdYRzVjZEZ4MFpHVnNaWFJsSUdOdmJuWmxjblJiYlc5a1pXeGRMbXhoWW1Wc2N6dGNibHgwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29ZMjl1ZG1WeWRGdHRiMlJsYkYwc0lDZGphR0Z1Ym1Wc2N5Y3NJSHQyWVd4MVpUb2dZMmhoYm01bGJITjlLVHRjYmx4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWTI5dWRtVnlkRnR0YjJSbGJGMHNJQ2RzWVdKbGJITW5MQ0I3ZG1Gc2RXVTZJR3hoWW1Wc2MzMHBPMXh1WEhSOVhHNTlYRzVjYm1OdmJuWmxjblF1Y21kaUxtaHpiQ0E5SUdaMWJtTjBhVzl1SUNoeVoySXBJSHRjYmx4MGRtRnlJSElnUFNCeVoySmJNRjBnTHlBeU5UVTdYRzVjZEhaaGNpQm5JRDBnY21kaVd6RmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1lpQTlJSEpuWWxzeVhTQXZJREkxTlR0Y2JseDBkbUZ5SUcxcGJpQTlJRTFoZEdndWJXbHVLSElzSUdjc0lHSXBPMXh1WEhSMllYSWdiV0Y0SUQwZ1RXRjBhQzV0WVhnb2Npd2daeXdnWWlrN1hHNWNkSFpoY2lCa1pXeDBZU0E5SUcxaGVDQXRJRzFwYmp0Y2JseDBkbUZ5SUdnN1hHNWNkSFpoY2lCek8xeHVYSFIyWVhJZ2JEdGNibHh1WEhScFppQW9iV0Y0SUQwOVBTQnRhVzRwSUh0Y2JseDBYSFJvSUQwZ01EdGNibHgwZlNCbGJITmxJR2xtSUNoeUlEMDlQU0J0WVhncElIdGNibHgwWEhSb0lEMGdLR2NnTFNCaUtTQXZJR1JsYkhSaE8xeHVYSFI5SUdWc2MyVWdhV1lnS0djZ1BUMDlJRzFoZUNrZ2UxeHVYSFJjZEdnZ1BTQXlJQ3NnS0dJZ0xTQnlLU0F2SUdSbGJIUmhPMXh1WEhSOUlHVnNjMlVnYVdZZ0tHSWdQVDA5SUcxaGVDa2dlMXh1WEhSY2RHZ2dQU0EwSUNzZ0tISWdMU0JuS1NBdklHUmxiSFJoTzF4dVhIUjlYRzVjYmx4MGFDQTlJRTFoZEdndWJXbHVLR2dnS2lBMk1Dd2dNell3S1R0Y2JseHVYSFJwWmlBb2FDQThJREFwSUh0Y2JseDBYSFJvSUNzOUlETTJNRHRjYmx4MGZWeHVYRzVjZEd3Z1BTQW9iV2x1SUNzZ2JXRjRLU0F2SURJN1hHNWNibHgwYVdZZ0tHMWhlQ0E5UFQwZ2JXbHVLU0I3WEc1Y2RGeDBjeUE5SURBN1hHNWNkSDBnWld4elpTQnBaaUFvYkNBOFBTQXdMalVwSUh0Y2JseDBYSFJ6SUQwZ1pHVnNkR0VnTHlBb2JXRjRJQ3NnYldsdUtUdGNibHgwZlNCbGJITmxJSHRjYmx4MFhIUnpJRDBnWkdWc2RHRWdMeUFvTWlBdElHMWhlQ0F0SUcxcGJpazdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdXMmdzSUhNZ0tpQXhNREFzSUd3Z0tpQXhNREJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzV5WjJJdWFITjJJRDBnWm5WdVkzUnBiMjRnS0hKbllpa2dlMXh1WEhSMllYSWdjbVJwWmp0Y2JseDBkbUZ5SUdka2FXWTdYRzVjZEhaaGNpQmlaR2xtTzF4dVhIUjJZWElnYUR0Y2JseDBkbUZ5SUhNN1hHNWNibHgwZG1GeUlISWdQU0J5WjJKYk1GMGdMeUF5TlRVN1hHNWNkSFpoY2lCbklEMGdjbWRpV3pGZElDOGdNalUxTzF4dVhIUjJZWElnWWlBOUlISm5ZbHN5WFNBdklESTFOVHRjYmx4MGRtRnlJSFlnUFNCTllYUm9MbTFoZUNoeUxDQm5MQ0JpS1R0Y2JseDBkbUZ5SUdScFptWWdQU0IySUMwZ1RXRjBhQzV0YVc0b2Npd2daeXdnWWlrN1hHNWNkSFpoY2lCa2FXWm1ZeUE5SUdaMWJtTjBhVzl1SUNoaktTQjdYRzVjZEZ4MGNtVjBkWEp1SUNoMklDMGdZeWtnTHlBMklDOGdaR2xtWmlBcklERWdMeUF5TzF4dVhIUjlPMXh1WEc1Y2RHbG1JQ2hrYVdabUlEMDlQU0F3S1NCN1hHNWNkRngwYUNBOUlITWdQU0F3TzF4dVhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEhNZ1BTQmthV1ptSUM4Z2RqdGNibHgwWEhSeVpHbG1JRDBnWkdsbVptTW9jaWs3WEc1Y2RGeDBaMlJwWmlBOUlHUnBabVpqS0djcE8xeHVYSFJjZEdKa2FXWWdQU0JrYVdabVl5aGlLVHRjYmx4dVhIUmNkR2xtSUNoeUlEMDlQU0IyS1NCN1hHNWNkRngwWEhSb0lEMGdZbVJwWmlBdElHZGthV1k3WEc1Y2RGeDBmU0JsYkhObElHbG1JQ2huSUQwOVBTQjJLU0I3WEc1Y2RGeDBYSFJvSUQwZ0tERWdMeUF6S1NBcklISmthV1lnTFNCaVpHbG1PMXh1WEhSY2RIMGdaV3h6WlNCcFppQW9ZaUE5UFQwZ2Rpa2dlMXh1WEhSY2RGeDBhQ0E5SUNneUlDOGdNeWtnS3lCblpHbG1JQzBnY21ScFpqdGNibHgwWEhSOVhHNWNkRngwYVdZZ0tHZ2dQQ0F3S1NCN1hHNWNkRngwWEhSb0lDczlJREU3WEc1Y2RGeDBmU0JsYkhObElHbG1JQ2hvSUQ0Z01Ta2dlMXh1WEhSY2RGeDBhQ0F0UFNBeE8xeHVYSFJjZEgxY2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCYlhHNWNkRngwYUNBcUlETTJNQ3hjYmx4MFhIUnpJQ29nTVRBd0xGeHVYSFJjZEhZZ0tpQXhNREJjYmx4MFhUdGNibjA3WEc1Y2JtTnZiblpsY25RdWNtZGlMbWgzWWlBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBkbUZ5SUhJZ1BTQnlaMkpiTUYwN1hHNWNkSFpoY2lCbklEMGdjbWRpV3pGZE8xeHVYSFIyWVhJZ1lpQTlJSEpuWWxzeVhUdGNibHgwZG1GeUlHZ2dQU0JqYjI1MlpYSjBMbkpuWWk1b2Myd29jbWRpS1Zzd1hUdGNibHgwZG1GeUlIY2dQU0F4SUM4Z01qVTFJQ29nVFdGMGFDNXRhVzRvY2l3Z1RXRjBhQzV0YVc0b1p5d2dZaWtwTzF4dVhHNWNkR0lnUFNBeElDMGdNU0F2SURJMU5TQXFJRTFoZEdndWJXRjRLSElzSUUxaGRHZ3ViV0Y0S0djc0lHSXBLVHRjYmx4dVhIUnlaWFIxY200Z1cyZ3NJSGNnS2lBeE1EQXNJR0lnS2lBeE1EQmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNXlaMkl1WTIxNWF5QTlJR1oxYm1OMGFXOXVJQ2h5WjJJcElIdGNibHgwZG1GeUlISWdQU0J5WjJKYk1GMGdMeUF5TlRVN1hHNWNkSFpoY2lCbklEMGdjbWRpV3pGZElDOGdNalUxTzF4dVhIUjJZWElnWWlBOUlISm5ZbHN5WFNBdklESTFOVHRjYmx4MGRtRnlJR003WEc1Y2RIWmhjaUJ0TzF4dVhIUjJZWElnZVR0Y2JseDBkbUZ5SUdzN1hHNWNibHgwYXlBOUlFMWhkR2d1YldsdUtERWdMU0J5TENBeElDMGdaeXdnTVNBdElHSXBPMXh1WEhSaklEMGdLREVnTFNCeUlDMGdheWtnTHlBb01TQXRJR3NwSUh4OElEQTdYRzVjZEcwZ1BTQW9NU0F0SUdjZ0xTQnJLU0F2SUNneElDMGdheWtnZkh3Z01EdGNibHgwZVNBOUlDZ3hJQzBnWWlBdElHc3BJQzhnS0RFZ0xTQnJLU0I4ZkNBd08xeHVYRzVjZEhKbGRIVnliaUJiWXlBcUlERXdNQ3dnYlNBcUlERXdNQ3dnZVNBcUlERXdNQ3dnYXlBcUlERXdNRjA3WEc1OU8xeHVYRzR2S2lwY2JpQXFJRk5sWlNCb2RIUndjem92TDJWdUxtMHVkMmxyYVhCbFpHbGhMbTl5Wnk5M2FXdHBMMFYxWTJ4cFpHVmhibDlrYVhOMFlXNWpaU05UY1hWaGNtVmtYMFYxWTJ4cFpHVmhibDlrYVhOMFlXNWpaVnh1SUNvZ0tpOWNibVoxYm1OMGFXOXVJR052YlhCaGNtRjBhWFpsUkdsemRHRnVZMlVvZUN3Z2VTa2dlMXh1WEhSeVpYUjFjbTRnS0Z4dVhIUmNkRTFoZEdndWNHOTNLSGhiTUYwZ0xTQjVXekJkTENBeUtTQXJYRzVjZEZ4MFRXRjBhQzV3YjNjb2VGc3hYU0F0SUhsYk1WMHNJRElwSUN0Y2JseDBYSFJOWVhSb0xuQnZkeWg0V3pKZElDMGdlVnN5WFN3Z01pbGNibHgwS1R0Y2JuMWNibHh1WTI5dWRtVnlkQzV5WjJJdWEyVjVkMjl5WkNBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBkbUZ5SUhKbGRtVnljMlZrSUQwZ2NtVjJaWEp6WlV0bGVYZHZjbVJ6VzNKbllsMDdYRzVjZEdsbUlDaHlaWFpsY25ObFpDa2dlMXh1WEhSY2RISmxkSFZ5YmlCeVpYWmxjbk5sWkR0Y2JseDBmVnh1WEc1Y2RIWmhjaUJqZFhKeVpXNTBRMnh2YzJWemRFUnBjM1JoYm1ObElEMGdTVzVtYVc1cGRIazdYRzVjZEhaaGNpQmpkWEp5Wlc1MFEyeHZjMlZ6ZEV0bGVYZHZjbVE3WEc1Y2JseDBabTl5SUNoMllYSWdhMlY1ZDI5eVpDQnBiaUJqYzNOTFpYbDNiM0prY3lrZ2UxeHVYSFJjZEdsbUlDaGpjM05MWlhsM2IzSmtjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGwzYjNKa0tTa2dlMXh1WEhSY2RGeDBkbUZ5SUhaaGJIVmxJRDBnWTNOelMyVjVkMjl5WkhOYmEyVjVkMjl5WkYwN1hHNWNibHgwWEhSY2RDOHZJRU52YlhCMWRHVWdZMjl0Y0dGeVlYUnBkbVVnWkdsemRHRnVZMlZjYmx4MFhIUmNkSFpoY2lCa2FYTjBZVzVqWlNBOUlHTnZiWEJoY21GMGFYWmxSR2x6ZEdGdVkyVW9jbWRpTENCMllXeDFaU2s3WEc1Y2JseDBYSFJjZEM4dklFTm9aV05ySUdsbUlHbDBjeUJzWlhOekxDQnBaaUJ6YnlCelpYUWdZWE1nWTJ4dmMyVnpkRnh1WEhSY2RGeDBhV1lnS0dScGMzUmhibU5sSUR3Z1kzVnljbVZ1ZEVOc2IzTmxjM1JFYVhOMFlXNWpaU2tnZTF4dVhIUmNkRngwWEhSamRYSnlaVzUwUTJ4dmMyVnpkRVJwYzNSaGJtTmxJRDBnWkdsemRHRnVZMlU3WEc1Y2RGeDBYSFJjZEdOMWNuSmxiblJEYkc5elpYTjBTMlY1ZDI5eVpDQTlJR3RsZVhkdmNtUTdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlHTjFjbkpsYm5SRGJHOXpaWE4wUzJWNWQyOXlaRHRjYm4wN1hHNWNibU52Ym5abGNuUXVhMlY1ZDI5eVpDNXlaMklnUFNCbWRXNWpkR2x2YmlBb2EyVjVkMjl5WkNrZ2UxeHVYSFJ5WlhSMWNtNGdZM056UzJWNWQyOXlaSE5iYTJWNWQyOXlaRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1NGVYb2dQU0JtZFc1amRHbHZiaUFvY21kaUtTQjdYRzVjZEhaaGNpQnlJRDBnY21kaVd6QmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1p5QTlJSEpuWWxzeFhTQXZJREkxTlR0Y2JseDBkbUZ5SUdJZ1BTQnlaMkpiTWwwZ0x5QXlOVFU3WEc1Y2JseDBMeThnWVhOemRXMWxJSE5TUjBKY2JseDBjaUE5SUhJZ1BpQXdMakEwTURRMUlEOGdUV0YwYUM1d2IzY29LQ2h5SUNzZ01DNHdOVFVwSUM4Z01TNHdOVFVwTENBeUxqUXBJRG9nS0hJZ0x5QXhNaTQ1TWlrN1hHNWNkR2NnUFNCbklENGdNQzR3TkRBME5TQS9JRTFoZEdndWNHOTNLQ2dvWnlBcklEQXVNRFUxS1NBdklERXVNRFUxS1N3Z01pNDBLU0E2SUNobklDOGdNVEl1T1RJcE8xeHVYSFJpSUQwZ1lpQStJREF1TURRd05EVWdQeUJOWVhSb0xuQnZkeWdvS0dJZ0t5QXdMakExTlNrZ0x5QXhMakExTlNrc0lESXVOQ2tnT2lBb1lpQXZJREV5TGpreUtUdGNibHh1WEhSMllYSWdlQ0E5SUNoeUlDb2dNQzQwTVRJMEtTQXJJQ2huSUNvZ01DNHpOVGMyS1NBcklDaGlJQ29nTUM0eE9EQTFLVHRjYmx4MGRtRnlJSGtnUFNBb2NpQXFJREF1TWpFeU5pa2dLeUFvWnlBcUlEQXVOekUxTWlrZ0t5QW9ZaUFxSURBdU1EY3lNaWs3WEc1Y2RIWmhjaUI2SUQwZ0tISWdLaUF3TGpBeE9UTXBJQ3NnS0djZ0tpQXdMakV4T1RJcElDc2dLR0lnS2lBd0xqazFNRFVwTzF4dVhHNWNkSEpsZEhWeWJpQmJlQ0FxSURFd01Dd2dlU0FxSURFd01Dd2dlaUFxSURFd01GMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExuSm5ZaTVzWVdJZ1BTQm1kVzVqZEdsdmJpQW9jbWRpS1NCN1hHNWNkSFpoY2lCNGVYb2dQU0JqYjI1MlpYSjBMbkpuWWk1NGVYb29jbWRpS1R0Y2JseDBkbUZ5SUhnZ1BTQjRlWHBiTUYwN1hHNWNkSFpoY2lCNUlEMGdlSGw2V3pGZE8xeHVYSFIyWVhJZ2VpQTlJSGg1ZWxzeVhUdGNibHgwZG1GeUlHdzdYRzVjZEhaaGNpQmhPMXh1WEhSMllYSWdZanRjYmx4dVhIUjRJQzg5SURrMUxqQTBOenRjYmx4MGVTQXZQU0F4TURBN1hHNWNkSG9nTHowZ01UQTRMamc0TXp0Y2JseHVYSFI0SUQwZ2VDQStJREF1TURBNE9EVTJJRDhnVFdGMGFDNXdiM2NvZUN3Z01TQXZJRE1wSURvZ0tEY3VOemczSUNvZ2VDa2dLeUFvTVRZZ0x5QXhNVFlwTzF4dVhIUjVJRDBnZVNBK0lEQXVNREE0T0RVMklEOGdUV0YwYUM1d2IzY29lU3dnTVNBdklETXBJRG9nS0RjdU56ZzNJQ29nZVNrZ0t5QW9NVFlnTHlBeE1UWXBPMXh1WEhSNklEMGdlaUErSURBdU1EQTRPRFUySUQ4Z1RXRjBhQzV3YjNjb2Vpd2dNU0F2SURNcElEb2dLRGN1TnpnM0lDb2dlaWtnS3lBb01UWWdMeUF4TVRZcE8xeHVYRzVjZEd3Z1BTQW9NVEUySUNvZ2VTa2dMU0F4Tmp0Y2JseDBZU0E5SURVd01DQXFJQ2g0SUMwZ2VTazdYRzVjZEdJZ1BTQXlNREFnS2lBb2VTQXRJSG9wTzF4dVhHNWNkSEpsZEhWeWJpQmJiQ3dnWVN3Z1lsMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExtaHpiQzV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9hSE5zS1NCN1hHNWNkSFpoY2lCb0lEMGdhSE5zV3pCZElDOGdNell3TzF4dVhIUjJZWElnY3lBOUlHaHpiRnN4WFNBdklERXdNRHRjYmx4MGRtRnlJR3dnUFNCb2MyeGJNbDBnTHlBeE1EQTdYRzVjZEhaaGNpQjBNVHRjYmx4MGRtRnlJSFF5TzF4dVhIUjJZWElnZERNN1hHNWNkSFpoY2lCeVoySTdYRzVjZEhaaGNpQjJZV3c3WEc1Y2JseDBhV1lnS0hNZ1BUMDlJREFwSUh0Y2JseDBYSFIyWVd3Z1BTQnNJQ29nTWpVMU8xeHVYSFJjZEhKbGRIVnliaUJiZG1Gc0xDQjJZV3dzSUhaaGJGMDdYRzVjZEgxY2JseHVYSFJwWmlBb2JDQThJREF1TlNrZ2UxeHVYSFJjZEhReUlEMGdiQ0FxSUNneElDc2djeWs3WEc1Y2RIMGdaV3h6WlNCN1hHNWNkRngwZERJZ1BTQnNJQ3NnY3lBdElHd2dLaUJ6TzF4dVhIUjlYRzVjYmx4MGRERWdQU0F5SUNvZ2JDQXRJSFF5TzF4dVhHNWNkSEpuWWlBOUlGc3dMQ0F3TENBd1hUdGNibHgwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENBek95QnBLeXNwSUh0Y2JseDBYSFIwTXlBOUlHZ2dLeUF4SUM4Z015QXFJQzBvYVNBdElERXBPMXh1WEhSY2RHbG1JQ2gwTXlBOElEQXBJSHRjYmx4MFhIUmNkSFF6S3lzN1hHNWNkRngwZlZ4dVhIUmNkR2xtSUNoME15QStJREVwSUh0Y2JseDBYSFJjZEhRekxTMDdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLRFlnS2lCME15QThJREVwSUh0Y2JseDBYSFJjZEhaaGJDQTlJSFF4SUNzZ0tIUXlJQzBnZERFcElDb2dOaUFxSUhRek8xeHVYSFJjZEgwZ1pXeHpaU0JwWmlBb01pQXFJSFF6SUR3Z01Ta2dlMXh1WEhSY2RGeDBkbUZzSUQwZ2RESTdYRzVjZEZ4MGZTQmxiSE5sSUdsbUlDZ3pJQ29nZERNZ1BDQXlLU0I3WEc1Y2RGeDBYSFIyWVd3Z1BTQjBNU0FySUNoME1pQXRJSFF4S1NBcUlDZ3lJQzhnTXlBdElIUXpLU0FxSURZN1hHNWNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkSFpoYkNBOUlIUXhPMXh1WEhSY2RIMWNibHh1WEhSY2RISm5ZbHRwWFNBOUlIWmhiQ0FxSURJMU5UdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQnlaMkk3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWh6YkM1b2MzWWdQU0JtZFc1amRHbHZiaUFvYUhOc0tTQjdYRzVjZEhaaGNpQm9JRDBnYUhOc1d6QmRPMXh1WEhSMllYSWdjeUE5SUdoemJGc3hYU0F2SURFd01EdGNibHgwZG1GeUlHd2dQU0JvYzJ4Yk1sMGdMeUF4TURBN1hHNWNkSFpoY2lCemJXbHVJRDBnY3p0Y2JseDBkbUZ5SUd4dGFXNGdQU0JOWVhSb0xtMWhlQ2hzTENBd0xqQXhLVHRjYmx4MGRtRnlJSE4yTzF4dVhIUjJZWElnZGp0Y2JseHVYSFJzSUNvOUlESTdYRzVjZEhNZ0tqMGdLR3dnUEQwZ01Ta2dQeUJzSURvZ01pQXRJR3c3WEc1Y2RITnRhVzRnS2owZ2JHMXBiaUE4UFNBeElEOGdiRzFwYmlBNklESWdMU0JzYldsdU8xeHVYSFIySUQwZ0tHd2dLeUJ6S1NBdklESTdYRzVjZEhOMklEMGdiQ0E5UFQwZ01DQS9JQ2d5SUNvZ2MyMXBiaWtnTHlBb2JHMXBiaUFySUhOdGFXNHBJRG9nS0RJZ0tpQnpLU0F2SUNoc0lDc2djeWs3WEc1Y2JseDBjbVYwZFhKdUlGdG9MQ0J6ZGlBcUlERXdNQ3dnZGlBcUlERXdNRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWh6ZGk1eVoySWdQU0JtZFc1amRHbHZiaUFvYUhOMktTQjdYRzVjZEhaaGNpQm9JRDBnYUhOMld6QmRJQzhnTmpBN1hHNWNkSFpoY2lCeklEMGdhSE4yV3pGZElDOGdNVEF3TzF4dVhIUjJZWElnZGlBOUlHaHpkbHN5WFNBdklERXdNRHRjYmx4MGRtRnlJR2hwSUQwZ1RXRjBhQzVtYkc5dmNpaG9LU0FsSURZN1hHNWNibHgwZG1GeUlHWWdQU0JvSUMwZ1RXRjBhQzVtYkc5dmNpaG9LVHRjYmx4MGRtRnlJSEFnUFNBeU5UVWdLaUIySUNvZ0tERWdMU0J6S1R0Y2JseDBkbUZ5SUhFZ1BTQXlOVFVnS2lCMklDb2dLREVnTFNBb2N5QXFJR1lwS1R0Y2JseDBkbUZ5SUhRZ1BTQXlOVFVnS2lCMklDb2dLREVnTFNBb2N5QXFJQ2d4SUMwZ1ppa3BLVHRjYmx4MGRpQXFQU0F5TlRVN1hHNWNibHgwYzNkcGRHTm9JQ2hvYVNrZ2UxeHVYSFJjZEdOaGMyVWdNRHBjYmx4MFhIUmNkSEpsZEhWeWJpQmJkaXdnZEN3Z2NGMDdYRzVjZEZ4MFkyRnpaU0F4T2x4dVhIUmNkRngwY21WMGRYSnVJRnR4TENCMkxDQndYVHRjYmx4MFhIUmpZWE5sSURJNlhHNWNkRngwWEhSeVpYUjFjbTRnVzNBc0lIWXNJSFJkTzF4dVhIUmNkR05oYzJVZ016cGNibHgwWEhSY2RISmxkSFZ5YmlCYmNDd2djU3dnZGwwN1hHNWNkRngwWTJGelpTQTBPbHh1WEhSY2RGeDBjbVYwZFhKdUlGdDBMQ0J3TENCMlhUdGNibHgwWEhSallYTmxJRFU2WEc1Y2RGeDBYSFJ5WlhSMWNtNGdXM1lzSUhBc0lIRmRPMXh1WEhSOVhHNTlPMXh1WEc1amIyNTJaWEowTG1oemRpNW9jMndnUFNCbWRXNWpkR2x2YmlBb2FITjJLU0I3WEc1Y2RIWmhjaUJvSUQwZ2FITjJXekJkTzF4dVhIUjJZWElnY3lBOUlHaHpkbHN4WFNBdklERXdNRHRjYmx4MGRtRnlJSFlnUFNCb2MzWmJNbDBnTHlBeE1EQTdYRzVjZEhaaGNpQjJiV2x1SUQwZ1RXRjBhQzV0WVhnb2Rpd2dNQzR3TVNrN1hHNWNkSFpoY2lCc2JXbHVPMXh1WEhSMllYSWdjMnc3WEc1Y2RIWmhjaUJzTzF4dVhHNWNkR3dnUFNBb01pQXRJSE1wSUNvZ2RqdGNibHgwYkcxcGJpQTlJQ2d5SUMwZ2N5a2dLaUIyYldsdU8xeHVYSFJ6YkNBOUlITWdLaUIyYldsdU8xeHVYSFJ6YkNBdlBTQW9iRzFwYmlBOFBTQXhLU0EvSUd4dGFXNGdPaUF5SUMwZ2JHMXBianRjYmx4MGMyd2dQU0J6YkNCOGZDQXdPMXh1WEhSc0lDODlJREk3WEc1Y2JseDBjbVYwZFhKdUlGdG9MQ0J6YkNBcUlERXdNQ3dnYkNBcUlERXdNRjA3WEc1OU8xeHVYRzR2THlCb2RIUndPaTh2WkdWMkxuY3pMbTl5Wnk5amMzTjNaeTlqYzNNdFkyOXNiM0l2STJoM1lpMTBieTF5WjJKY2JtTnZiblpsY25RdWFIZGlMbkpuWWlBOUlHWjFibU4wYVc5dUlDaG9kMklwSUh0Y2JseDBkbUZ5SUdnZ1BTQm9kMkpiTUYwZ0x5QXpOakE3WEc1Y2RIWmhjaUIzYUNBOUlHaDNZbHN4WFNBdklERXdNRHRjYmx4MGRtRnlJR0pzSUQwZ2FIZGlXekpkSUM4Z01UQXdPMXh1WEhSMllYSWdjbUYwYVc4Z1BTQjNhQ0FySUdKc08xeHVYSFIyWVhJZ2FUdGNibHgwZG1GeUlIWTdYRzVjZEhaaGNpQm1PMXh1WEhSMllYSWdianRjYmx4dVhIUXZMeUIzYUNBcklHSnNJR05oYm5RZ1ltVWdQaUF4WEc1Y2RHbG1JQ2h5WVhScGJ5QStJREVwSUh0Y2JseDBYSFIzYUNBdlBTQnlZWFJwYnp0Y2JseDBYSFJpYkNBdlBTQnlZWFJwYnp0Y2JseDBmVnh1WEc1Y2RHa2dQU0JOWVhSb0xtWnNiMjl5S0RZZ0tpQm9LVHRjYmx4MGRpQTlJREVnTFNCaWJEdGNibHgwWmlBOUlEWWdLaUJvSUMwZ2FUdGNibHh1WEhScFppQW9LR2tnSmlBd2VEQXhLU0FoUFQwZ01Da2dlMXh1WEhSY2RHWWdQU0F4SUMwZ1pqdGNibHgwZlZ4dVhHNWNkRzRnUFNCM2FDQXJJR1lnS2lBb2RpQXRJSGRvS1RzZ0x5OGdiR2x1WldGeUlHbHVkR1Z5Y0c5c1lYUnBiMjVjYmx4dVhIUjJZWElnY2p0Y2JseDBkbUZ5SUdjN1hHNWNkSFpoY2lCaU8xeHVYSFJ6ZDJsMFkyZ2dLR2twSUh0Y2JseDBYSFJrWldaaGRXeDBPbHh1WEhSY2RHTmhjMlVnTmpwY2JseDBYSFJqWVhObElEQTZJSElnUFNCMk95Qm5JRDBnYmpzZ1lpQTlJSGRvT3lCaWNtVmhhenRjYmx4MFhIUmpZWE5sSURFNklISWdQU0J1T3lCbklEMGdkanNnWWlBOUlIZG9PeUJpY21WaGF6dGNibHgwWEhSallYTmxJREk2SUhJZ1BTQjNhRHNnWnlBOUlIWTdJR0lnUFNCdU95QmljbVZoYXp0Y2JseDBYSFJqWVhObElETTZJSElnUFNCM2FEc2daeUE5SUc0N0lHSWdQU0IyT3lCaWNtVmhhenRjYmx4MFhIUmpZWE5sSURRNklISWdQU0J1T3lCbklEMGdkMmc3SUdJZ1BTQjJPeUJpY21WaGF6dGNibHgwWEhSallYTmxJRFU2SUhJZ1BTQjJPeUJuSUQwZ2QyZzdJR0lnUFNCdU95QmljbVZoYXp0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCYmNpQXFJREkxTlN3Z1p5QXFJREkxTlN3Z1lpQXFJREkxTlYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG1OdGVXc3VjbWRpSUQwZ1puVnVZM1JwYjI0Z0tHTnRlV3NwSUh0Y2JseDBkbUZ5SUdNZ1BTQmpiWGxyV3pCZElDOGdNVEF3TzF4dVhIUjJZWElnYlNBOUlHTnRlV3RiTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUI1SUQwZ1kyMTVhMXN5WFNBdklERXdNRHRjYmx4MGRtRnlJR3NnUFNCamJYbHJXek5kSUM4Z01UQXdPMXh1WEhSMllYSWdjanRjYmx4MGRtRnlJR2M3WEc1Y2RIWmhjaUJpTzF4dVhHNWNkSElnUFNBeElDMGdUV0YwYUM1dGFXNG9NU3dnWXlBcUlDZ3hJQzBnYXlrZ0t5QnJLVHRjYmx4MFp5QTlJREVnTFNCTllYUm9MbTFwYmlneExDQnRJQ29nS0RFZ0xTQnJLU0FySUdzcE8xeHVYSFJpSUQwZ01TQXRJRTFoZEdndWJXbHVLREVzSUhrZ0tpQW9NU0F0SUdzcElDc2dheWs3WEc1Y2JseDBjbVYwZFhKdUlGdHlJQ29nTWpVMUxDQm5JQ29nTWpVMUxDQmlJQ29nTWpVMVhUdGNibjA3WEc1Y2JtTnZiblpsY25RdWVIbDZMbkpuWWlBOUlHWjFibU4wYVc5dUlDaDRlWG9wSUh0Y2JseDBkbUZ5SUhnZ1BTQjRlWHBiTUYwZ0x5QXhNREE3WEc1Y2RIWmhjaUI1SUQwZ2VIbDZXekZkSUM4Z01UQXdPMXh1WEhSMllYSWdlaUE5SUhoNWVsc3lYU0F2SURFd01EdGNibHgwZG1GeUlISTdYRzVjZEhaaGNpQm5PMXh1WEhSMllYSWdZanRjYmx4dVhIUnlJRDBnS0hnZ0tpQXpMakkwTURZcElDc2dLSGtnS2lBdE1TNDFNemN5S1NBcklDaDZJQ29nTFRBdU5EazROaWs3WEc1Y2RHY2dQU0FvZUNBcUlDMHdMamsyT0RrcElDc2dLSGtnS2lBeExqZzNOVGdwSUNzZ0tIb2dLaUF3TGpBME1UVXBPMXh1WEhSaUlEMGdLSGdnS2lBd0xqQTFOVGNwSUNzZ0tIa2dLaUF0TUM0eU1EUXdLU0FySUNoNklDb2dNUzR3TlRjd0tUdGNibHh1WEhRdkx5QmhjM04xYldVZ2MxSkhRbHh1WEhSeUlEMGdjaUErSURBdU1EQXpNVE13T0Z4dVhIUmNkRDhnS0NneExqQTFOU0FxSUUxaGRHZ3VjRzkzS0hJc0lERXVNQ0F2SURJdU5Da3BJQzBnTUM0d05UVXBYRzVjZEZ4ME9pQnlJQ29nTVRJdU9USTdYRzVjYmx4MFp5QTlJR2NnUGlBd0xqQXdNekV6TURoY2JseDBYSFEvSUNnb01TNHdOVFVnS2lCTllYUm9MbkJ2ZHlobkxDQXhMakFnTHlBeUxqUXBLU0F0SURBdU1EVTFLVnh1WEhSY2REb2daeUFxSURFeUxqa3lPMXh1WEc1Y2RHSWdQU0JpSUQ0Z01DNHdNRE14TXpBNFhHNWNkRngwUHlBb0tERXVNRFUxSUNvZ1RXRjBhQzV3YjNjb1lpd2dNUzR3SUM4Z01pNDBLU2tnTFNBd0xqQTFOU2xjYmx4MFhIUTZJR0lnS2lBeE1pNDVNanRjYmx4dVhIUnlJRDBnVFdGMGFDNXRhVzRvVFdGMGFDNXRZWGdvTUN3Z2Npa3NJREVwTzF4dVhIUm5JRDBnVFdGMGFDNXRhVzRvVFdGMGFDNXRZWGdvTUN3Z1p5a3NJREVwTzF4dVhIUmlJRDBnVFdGMGFDNXRhVzRvVFdGMGFDNXRZWGdvTUN3Z1lpa3NJREVwTzF4dVhHNWNkSEpsZEhWeWJpQmJjaUFxSURJMU5Td2daeUFxSURJMU5Td2dZaUFxSURJMU5WMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExuaDVlaTVzWVdJZ1BTQm1kVzVqZEdsdmJpQW9lSGw2S1NCN1hHNWNkSFpoY2lCNElEMGdlSGw2V3pCZE8xeHVYSFIyWVhJZ2VTQTlJSGg1ZWxzeFhUdGNibHgwZG1GeUlIb2dQU0I0ZVhwYk1sMDdYRzVjZEhaaGNpQnNPMXh1WEhSMllYSWdZVHRjYmx4MGRtRnlJR0k3WEc1Y2JseDBlQ0F2UFNBNU5TNHdORGM3WEc1Y2RIa2dMejBnTVRBd08xeHVYSFI2SUM4OUlERXdPQzQ0T0RNN1hHNWNibHgwZUNBOUlIZ2dQaUF3TGpBd09EZzFOaUEvSUUxaGRHZ3VjRzkzS0hnc0lERWdMeUF6S1NBNklDZzNMamM0TnlBcUlIZ3BJQ3NnS0RFMklDOGdNVEUyS1R0Y2JseDBlU0E5SUhrZ1BpQXdMakF3T0RnMU5pQS9JRTFoZEdndWNHOTNLSGtzSURFZ0x5QXpLU0E2SUNnM0xqYzROeUFxSUhrcElDc2dLREUySUM4Z01URTJLVHRjYmx4MGVpQTlJSG9nUGlBd0xqQXdPRGcxTmlBL0lFMWhkR2d1Y0c5M0tIb3NJREVnTHlBektTQTZJQ2czTGpjNE55QXFJSG9wSUNzZ0tERTJJQzhnTVRFMktUdGNibHh1WEhSc0lEMGdLREV4TmlBcUlIa3BJQzBnTVRZN1hHNWNkR0VnUFNBMU1EQWdLaUFvZUNBdElIa3BPMXh1WEhSaUlEMGdNakF3SUNvZ0tIa2dMU0I2S1R0Y2JseHVYSFJ5WlhSMWNtNGdXMndzSUdFc0lHSmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNXNZV0l1ZUhsNklEMGdablZ1WTNScGIyNGdLR3hoWWlrZ2UxeHVYSFIyWVhJZ2JDQTlJR3hoWWxzd1hUdGNibHgwZG1GeUlHRWdQU0JzWVdKYk1WMDdYRzVjZEhaaGNpQmlJRDBnYkdGaVd6SmRPMXh1WEhSMllYSWdlRHRjYmx4MGRtRnlJSGs3WEc1Y2RIWmhjaUI2TzF4dVhHNWNkSGtnUFNBb2JDQXJJREUyS1NBdklERXhOanRjYmx4MGVDQTlJR0VnTHlBMU1EQWdLeUI1TzF4dVhIUjZJRDBnZVNBdElHSWdMeUF5TURBN1hHNWNibHgwZG1GeUlIa3lJRDBnVFdGMGFDNXdiM2NvZVN3Z015azdYRzVjZEhaaGNpQjRNaUE5SUUxaGRHZ3VjRzkzS0hnc0lETXBPMXh1WEhSMllYSWdlaklnUFNCTllYUm9MbkJ2ZHloNkxDQXpLVHRjYmx4MGVTQTlJSGt5SUQ0Z01DNHdNRGc0TlRZZ1B5QjVNaUE2SUNoNUlDMGdNVFlnTHlBeE1UWXBJQzhnTnk0M09EYzdYRzVjZEhnZ1BTQjRNaUErSURBdU1EQTRPRFUySUQ4Z2VESWdPaUFvZUNBdElERTJJQzhnTVRFMktTQXZJRGN1TnpnM08xeHVYSFI2SUQwZ2VqSWdQaUF3TGpBd09EZzFOaUEvSUhveUlEb2dLSG9nTFNBeE5pQXZJREV4TmlrZ0x5QTNMamM0Tnp0Y2JseHVYSFI0SUNvOUlEazFMakEwTnp0Y2JseDBlU0FxUFNBeE1EQTdYRzVjZEhvZ0tqMGdNVEE0TGpnNE16dGNibHh1WEhSeVpYUjFjbTRnVzNnc0lIa3NJSHBkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVzWVdJdWJHTm9JRDBnWm5WdVkzUnBiMjRnS0d4aFlpa2dlMXh1WEhSMllYSWdiQ0E5SUd4aFlsc3dYVHRjYmx4MGRtRnlJR0VnUFNCc1lXSmJNVjA3WEc1Y2RIWmhjaUJpSUQwZ2JHRmlXekpkTzF4dVhIUjJZWElnYUhJN1hHNWNkSFpoY2lCb08xeHVYSFIyWVhJZ1l6dGNibHh1WEhSb2NpQTlJRTFoZEdndVlYUmhiaklvWWl3Z1lTazdYRzVjZEdnZ1BTQm9jaUFxSURNMk1DQXZJRElnTHlCTllYUm9MbEJKTzF4dVhHNWNkR2xtSUNob0lEd2dNQ2tnZTF4dVhIUmNkR2dnS3owZ016WXdPMXh1WEhSOVhHNWNibHgwWXlBOUlFMWhkR2d1YzNGeWRDaGhJQ29nWVNBcklHSWdLaUJpS1R0Y2JseHVYSFJ5WlhSMWNtNGdXMndzSUdNc0lHaGRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNXNZMmd1YkdGaUlEMGdablZ1WTNScGIyNGdLR3hqYUNrZ2UxeHVYSFIyWVhJZ2JDQTlJR3hqYUZzd1hUdGNibHgwZG1GeUlHTWdQU0JzWTJoYk1WMDdYRzVjZEhaaGNpQm9JRDBnYkdOb1d6SmRPMXh1WEhSMllYSWdZVHRjYmx4MGRtRnlJR0k3WEc1Y2RIWmhjaUJvY2p0Y2JseHVYSFJvY2lBOUlHZ2dMeUF6TmpBZ0tpQXlJQ29nVFdGMGFDNVFTVHRjYmx4MFlTQTlJR01nS2lCTllYUm9MbU52Y3lob2NpazdYRzVjZEdJZ1BTQmpJQ29nVFdGMGFDNXphVzRvYUhJcE8xeHVYRzVjZEhKbGRIVnliaUJiYkN3Z1lTd2dZbDA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1aGJuTnBNVFlnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUjJZWElnY2lBOUlHRnlaM05iTUYwN1hHNWNkSFpoY2lCbklEMGdZWEpuYzFzeFhUdGNibHgwZG1GeUlHSWdQU0JoY21keld6SmRPMXh1WEhSMllYSWdkbUZzZFdVZ1BTQXhJR2x1SUdGeVozVnRaVzUwY3lBL0lHRnlaM1Z0Wlc1MGMxc3hYU0E2SUdOdmJuWmxjblF1Y21kaUxtaHpkaWhoY21kektWc3lYVHNnTHk4Z2FITjJJQzArSUdGdWMya3hOaUJ2Y0hScGJXbDZZWFJwYjI1Y2JseHVYSFIyWVd4MVpTQTlJRTFoZEdndWNtOTFibVFvZG1Gc2RXVWdMeUExTUNrN1hHNWNibHgwYVdZZ0tIWmhiSFZsSUQwOVBTQXdLU0I3WEc1Y2RGeDBjbVYwZFhKdUlETXdPMXh1WEhSOVhHNWNibHgwZG1GeUlHRnVjMmtnUFNBek1GeHVYSFJjZENzZ0tDaE5ZWFJvTG5KdmRXNWtLR0lnTHlBeU5UVXBJRHc4SURJcFhHNWNkRngwZkNBb1RXRjBhQzV5YjNWdVpDaG5JQzhnTWpVMUtTQThQQ0F4S1Z4dVhIUmNkSHdnVFdGMGFDNXliM1Z1WkNoeUlDOGdNalUxS1NrN1hHNWNibHgwYVdZZ0tIWmhiSFZsSUQwOVBTQXlLU0I3WEc1Y2RGeDBZVzV6YVNBclBTQTJNRHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJoYm5OcE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b2MzWXVZVzV6YVRFMklEMGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwTHk4Z2IzQjBhVzFwZW1GMGFXOXVJR2hsY21VN0lIZGxJR0ZzY21WaFpIa2dhMjV2ZHlCMGFHVWdkbUZzZFdVZ1lXNWtJR1J2YmlkMElHNWxaV1FnZEc4Z1oyVjBYRzVjZEM4dklHbDBJR052Ym5abGNuUmxaQ0JtYjNJZ2RYTXVYRzVjZEhKbGRIVnliaUJqYjI1MlpYSjBMbkpuWWk1aGJuTnBNVFlvWTI5dWRtVnlkQzVvYzNZdWNtZGlLR0Z5WjNNcExDQmhjbWR6V3pKZEtUdGNibjA3WEc1Y2JtTnZiblpsY25RdWNtZGlMbUZ1YzJreU5UWWdQU0JtZFc1amRHbHZiaUFvWVhKbmN5a2dlMXh1WEhSMllYSWdjaUE5SUdGeVozTmJNRjA3WEc1Y2RIWmhjaUJuSUQwZ1lYSm5jMXN4WFR0Y2JseDBkbUZ5SUdJZ1BTQmhjbWR6V3pKZE8xeHVYRzVjZEM4dklIZGxJSFZ6WlNCMGFHVWdaWGgwWlc1a1pXUWdaM0psZVhOallXeGxJSEJoYkdWMGRHVWdhR1Z5WlN3Z2QybDBhQ0IwYUdVZ1pYaGpaWEIwYVc5dUlHOW1YRzVjZEM4dklHSnNZV05ySUdGdVpDQjNhR2wwWlM0Z2JtOXliV0ZzSUhCaGJHVjBkR1VnYjI1c2VTQm9ZWE1nTkNCbmNtVjVjMk5oYkdVZ2MyaGhaR1Z6TGx4dVhIUnBaaUFvY2lBOVBUMGdaeUFtSmlCbklEMDlQU0JpS1NCN1hHNWNkRngwYVdZZ0tISWdQQ0E0S1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnTVRZN1hHNWNkRngwZlZ4dVhHNWNkRngwYVdZZ0tISWdQaUF5TkRncElIdGNibHgwWEhSY2RISmxkSFZ5YmlBeU16RTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUUxaGRHZ3VjbTkxYm1Rb0tDaHlJQzBnT0NrZ0x5QXlORGNwSUNvZ01qUXBJQ3NnTWpNeU8xeHVYSFI5WEc1Y2JseDBkbUZ5SUdGdWMya2dQU0F4Tmx4dVhIUmNkQ3NnS0RNMklDb2dUV0YwYUM1eWIzVnVaQ2h5SUM4Z01qVTFJQ29nTlNrcFhHNWNkRngwS3lBb05pQXFJRTFoZEdndWNtOTFibVFvWnlBdklESTFOU0FxSURVcEtWeHVYSFJjZENzZ1RXRjBhQzV5YjNWdVpDaGlJQzhnTWpVMUlDb2dOU2s3WEc1Y2JseDBjbVYwZFhKdUlHRnVjMms3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbUZ1YzJreE5pNXlaMklnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUjJZWElnWTI5c2IzSWdQU0JoY21keklDVWdNVEE3WEc1Y2JseDBMeThnYUdGdVpHeGxJR2R5WlhselkyRnNaVnh1WEhScFppQW9ZMjlzYjNJZ1BUMDlJREFnZkh3Z1kyOXNiM0lnUFQwOUlEY3BJSHRjYmx4MFhIUnBaaUFvWVhKbmN5QStJRFV3S1NCN1hHNWNkRngwWEhSamIyeHZjaUFyUFNBekxqVTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MFkyOXNiM0lnUFNCamIyeHZjaUF2SURFd0xqVWdLaUF5TlRVN1hHNWNibHgwWEhSeVpYUjFjbTRnVzJOdmJHOXlMQ0JqYjJ4dmNpd2dZMjlzYjNKZE8xeHVYSFI5WEc1Y2JseDBkbUZ5SUcxMWJIUWdQU0FvZm40b1lYSm5jeUErSURVd0tTQXJJREVwSUNvZ01DNDFPMXh1WEhSMllYSWdjaUE5SUNnb1kyOXNiM0lnSmlBeEtTQXFJRzExYkhRcElDb2dNalUxTzF4dVhIUjJZWElnWnlBOUlDZ29LR052Ykc5eUlENCtJREVwSUNZZ01Ta2dLaUJ0ZFd4MEtTQXFJREkxTlR0Y2JseDBkbUZ5SUdJZ1BTQW9LQ2hqYjJ4dmNpQStQaUF5S1NBbUlERXBJQ29nYlhWc2RDa2dLaUF5TlRVN1hHNWNibHgwY21WMGRYSnVJRnR5TENCbkxDQmlYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVZVzV6YVRJMU5pNXlaMklnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUXZMeUJvWVc1a2JHVWdaM0psZVhOallXeGxYRzVjZEdsbUlDaGhjbWR6SUQ0OUlESXpNaWtnZTF4dVhIUmNkSFpoY2lCaklEMGdLR0Z5WjNNZ0xTQXlNeklwSUNvZ01UQWdLeUE0TzF4dVhIUmNkSEpsZEhWeWJpQmJZeXdnWXl3Z1kxMDdYRzVjZEgxY2JseHVYSFJoY21keklDMDlJREUyTzF4dVhHNWNkSFpoY2lCeVpXMDdYRzVjZEhaaGNpQnlJRDBnVFdGMGFDNW1iRzl2Y2loaGNtZHpJQzhnTXpZcElDOGdOU0FxSURJMU5UdGNibHgwZG1GeUlHY2dQU0JOWVhSb0xtWnNiMjl5S0NoeVpXMGdQU0JoY21keklDVWdNellwSUM4Z05pa2dMeUExSUNvZ01qVTFPMXh1WEhSMllYSWdZaUE5SUNoeVpXMGdKU0EyS1NBdklEVWdLaUF5TlRVN1hHNWNibHgwY21WMGRYSnVJRnR5TENCbkxDQmlYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVjbWRpTG1obGVDQTlJR1oxYm1OMGFXOXVJQ2hoY21kektTQjdYRzVjZEhaaGNpQnBiblJsWjJWeUlEMGdLQ2hOWVhSb0xuSnZkVzVrS0dGeVozTmJNRjBwSUNZZ01IaEdSaWtnUER3Z01UWXBYRzVjZEZ4MEt5QW9LRTFoZEdndWNtOTFibVFvWVhKbmMxc3hYU2tnSmlBd2VFWkdLU0E4UENBNEtWeHVYSFJjZENzZ0tFMWhkR2d1Y205MWJtUW9ZWEpuYzFzeVhTa2dKaUF3ZUVaR0tUdGNibHh1WEhSMllYSWdjM1J5YVc1bklEMGdhVzUwWldkbGNpNTBiMU4wY21sdVp5Z3hOaWt1ZEc5VmNIQmxja05oYzJVb0tUdGNibHgwY21WMGRYSnVJQ2N3TURBd01EQW5Mbk4xWW5OMGNtbHVaeWh6ZEhKcGJtY3ViR1Z1WjNSb0tTQXJJSE4wY21sdVp6dGNibjA3WEc1Y2JtTnZiblpsY25RdWFHVjRMbkpuWWlBOUlHWjFibU4wYVc5dUlDaGhjbWR6S1NCN1hHNWNkSFpoY2lCdFlYUmphQ0E5SUdGeVozTXVkRzlUZEhKcGJtY29NVFlwTG0xaGRHTm9LQzliWVMxbU1DMDVYWHMyZlh4YllTMW1NQzA1WFhzemZTOXBLVHRjYmx4MGFXWWdLQ0Z0WVhSamFDa2dlMXh1WEhSY2RISmxkSFZ5YmlCYk1Dd2dNQ3dnTUYwN1hHNWNkSDFjYmx4dVhIUjJZWElnWTI5c2IzSlRkSEpwYm1jZ1BTQnRZWFJqYUZzd1hUdGNibHh1WEhScFppQW9iV0YwWTJoYk1GMHViR1Z1WjNSb0lEMDlQU0F6S1NCN1hHNWNkRngwWTI5c2IzSlRkSEpwYm1jZ1BTQmpiMnh2Y2xOMGNtbHVaeTV6Y0d4cGRDZ25KeWt1YldGd0tHWjFibU4wYVc5dUlDaGphR0Z5S1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWTJoaGNpQXJJR05vWVhJN1hHNWNkRngwZlNrdWFtOXBiaWduSnlrN1hHNWNkSDFjYmx4dVhIUjJZWElnYVc1MFpXZGxjaUE5SUhCaGNuTmxTVzUwS0dOdmJHOXlVM1J5YVc1bkxDQXhOaWs3WEc1Y2RIWmhjaUJ5SUQwZ0tHbHVkR1ZuWlhJZ1BqNGdNVFlwSUNZZ01IaEdSanRjYmx4MGRtRnlJR2NnUFNBb2FXNTBaV2RsY2lBK1BpQTRLU0FtSURCNFJrWTdYRzVjZEhaaGNpQmlJRDBnYVc1MFpXZGxjaUFtSURCNFJrWTdYRzVjYmx4MGNtVjBkWEp1SUZ0eUxDQm5MQ0JpWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1Y21kaUxtaGpaeUE5SUdaMWJtTjBhVzl1SUNoeVoySXBJSHRjYmx4MGRtRnlJSElnUFNCeVoySmJNRjBnTHlBeU5UVTdYRzVjZEhaaGNpQm5JRDBnY21kaVd6RmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1lpQTlJSEpuWWxzeVhTQXZJREkxTlR0Y2JseDBkbUZ5SUcxaGVDQTlJRTFoZEdndWJXRjRLRTFoZEdndWJXRjRLSElzSUdjcExDQmlLVHRjYmx4MGRtRnlJRzFwYmlBOUlFMWhkR2d1YldsdUtFMWhkR2d1YldsdUtISXNJR2NwTENCaUtUdGNibHgwZG1GeUlHTm9jbTl0WVNBOUlDaHRZWGdnTFNCdGFXNHBPMXh1WEhSMllYSWdaM0poZVhOallXeGxPMXh1WEhSMllYSWdhSFZsTzF4dVhHNWNkR2xtSUNoamFISnZiV0VnUENBeEtTQjdYRzVjZEZ4MFozSmhlWE5qWVd4bElEMGdiV2x1SUM4Z0tERWdMU0JqYUhKdmJXRXBPMXh1WEhSOUlHVnNjMlVnZTF4dVhIUmNkR2R5WVhselkyRnNaU0E5SURBN1hHNWNkSDFjYmx4dVhIUnBaaUFvWTJoeWIyMWhJRHc5SURBcElIdGNibHgwWEhSb2RXVWdQU0F3TzF4dVhIUjlJR1ZzYzJWY2JseDBhV1lnS0cxaGVDQTlQVDBnY2lrZ2UxeHVYSFJjZEdoMVpTQTlJQ2dvWnlBdElHSXBJQzhnWTJoeWIyMWhLU0FsSURZN1hHNWNkSDBnWld4elpWeHVYSFJwWmlBb2JXRjRJRDA5UFNCbktTQjdYRzVjZEZ4MGFIVmxJRDBnTWlBcklDaGlJQzBnY2lrZ0x5QmphSEp2YldFN1hHNWNkSDBnWld4elpTQjdYRzVjZEZ4MGFIVmxJRDBnTkNBcklDaHlJQzBnWnlrZ0x5QmphSEp2YldFZ0t5QTBPMXh1WEhSOVhHNWNibHgwYUhWbElDODlJRFk3WEc1Y2RHaDFaU0FsUFNBeE8xeHVYRzVjZEhKbGRIVnliaUJiYUhWbElDb2dNell3TENCamFISnZiV0VnS2lBeE1EQXNJR2R5WVhselkyRnNaU0FxSURFd01GMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExtaHpiQzVvWTJjZ1BTQm1kVzVqZEdsdmJpQW9hSE5zS1NCN1hHNWNkSFpoY2lCeklEMGdhSE5zV3pGZElDOGdNVEF3TzF4dVhIUjJZWElnYkNBOUlHaHpiRnN5WFNBdklERXdNRHRjYmx4MGRtRnlJR01nUFNBeE8xeHVYSFIyWVhJZ1ppQTlJREE3WEc1Y2JseDBhV1lnS0d3Z1BDQXdMalVwSUh0Y2JseDBYSFJqSUQwZ01pNHdJQ29nY3lBcUlHdzdYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBZeUE5SURJdU1DQXFJSE1nS2lBb01TNHdJQzBnYkNrN1hHNWNkSDFjYmx4dVhIUnBaaUFvWXlBOElERXVNQ2tnZTF4dVhIUmNkR1lnUFNBb2JDQXRJREF1TlNBcUlHTXBJQzhnS0RFdU1DQXRJR01wTzF4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUZ0b2MyeGJNRjBzSUdNZ0tpQXhNREFzSUdZZ0tpQXhNREJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVvYzNZdWFHTm5JRDBnWm5WdVkzUnBiMjRnS0doemRpa2dlMXh1WEhSMllYSWdjeUE5SUdoemRsc3hYU0F2SURFd01EdGNibHgwZG1GeUlIWWdQU0JvYzNaYk1sMGdMeUF4TURBN1hHNWNibHgwZG1GeUlHTWdQU0J6SUNvZ2RqdGNibHgwZG1GeUlHWWdQU0F3TzF4dVhHNWNkR2xtSUNoaklEd2dNUzR3S1NCN1hHNWNkRngwWmlBOUlDaDJJQzBnWXlrZ0x5QW9NU0F0SUdNcE8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlGdG9jM1piTUYwc0lHTWdLaUF4TURBc0lHWWdLaUF4TURCZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b1kyY3VjbWRpSUQwZ1puVnVZM1JwYjI0Z0tHaGpaeWtnZTF4dVhIUjJZWElnYUNBOUlHaGpaMXN3WFNBdklETTJNRHRjYmx4MGRtRnlJR01nUFNCb1kyZGJNVjBnTHlBeE1EQTdYRzVjZEhaaGNpQm5JRDBnYUdObld6SmRJQzhnTVRBd08xeHVYRzVjZEdsbUlDaGpJRDA5UFNBd0xqQXBJSHRjYmx4MFhIUnlaWFIxY200Z1cyY2dLaUF5TlRVc0lHY2dLaUF5TlRVc0lHY2dLaUF5TlRWZE8xeHVYSFI5WEc1Y2JseDBkbUZ5SUhCMWNtVWdQU0JiTUN3Z01Dd2dNRjA3WEc1Y2RIWmhjaUJvYVNBOUlDaG9JQ1VnTVNrZ0tpQTJPMXh1WEhSMllYSWdkaUE5SUdocElDVWdNVHRjYmx4MGRtRnlJSGNnUFNBeElDMGdkanRjYmx4MGRtRnlJRzFuSUQwZ01EdGNibHh1WEhSemQybDBZMmdnS0UxaGRHZ3VabXh2YjNJb2FHa3BLU0I3WEc1Y2RGeDBZMkZ6WlNBd09seHVYSFJjZEZ4MGNIVnlaVnN3WFNBOUlERTdJSEIxY21WYk1WMGdQU0IyT3lCd2RYSmxXekpkSUQwZ01Ec2dZbkpsWVdzN1hHNWNkRngwWTJGelpTQXhPbHh1WEhSY2RGeDBjSFZ5WlZzd1hTQTlJSGM3SUhCMWNtVmJNVjBnUFNBeE95QndkWEpsV3pKZElEMGdNRHNnWW5KbFlXczdYRzVjZEZ4MFkyRnpaU0F5T2x4dVhIUmNkRngwY0hWeVpWc3dYU0E5SURBN0lIQjFjbVZiTVYwZ1BTQXhPeUJ3ZFhKbFd6SmRJRDBnZGpzZ1luSmxZV3M3WEc1Y2RGeDBZMkZ6WlNBek9seHVYSFJjZEZ4MGNIVnlaVnN3WFNBOUlEQTdJSEIxY21WYk1WMGdQU0IzT3lCd2RYSmxXekpkSUQwZ01Uc2dZbkpsWVdzN1hHNWNkRngwWTJGelpTQTBPbHh1WEhSY2RGeDBjSFZ5WlZzd1hTQTlJSFk3SUhCMWNtVmJNVjBnUFNBd095QndkWEpsV3pKZElEMGdNVHNnWW5KbFlXczdYRzVjZEZ4MFpHVm1ZWFZzZERwY2JseDBYSFJjZEhCMWNtVmJNRjBnUFNBeE95QndkWEpsV3pGZElEMGdNRHNnY0hWeVpWc3lYU0E5SUhjN1hHNWNkSDFjYmx4dVhIUnRaeUE5SUNneExqQWdMU0JqS1NBcUlHYzdYRzVjYmx4MGNtVjBkWEp1SUZ0Y2JseDBYSFFvWXlBcUlIQjFjbVZiTUYwZ0t5QnRaeWtnS2lBeU5UVXNYRzVjZEZ4MEtHTWdLaUJ3ZFhKbFd6RmRJQ3NnYldjcElDb2dNalUxTEZ4dVhIUmNkQ2hqSUNvZ2NIVnlaVnN5WFNBcklHMW5LU0FxSURJMU5WeHVYSFJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVvWTJjdWFITjJJRDBnWm5WdVkzUnBiMjRnS0doalp5a2dlMXh1WEhSMllYSWdZeUE5SUdoaloxc3hYU0F2SURFd01EdGNibHgwZG1GeUlHY2dQU0JvWTJkYk1sMGdMeUF4TURBN1hHNWNibHgwZG1GeUlIWWdQU0JqSUNzZ1p5QXFJQ2d4TGpBZ0xTQmpLVHRjYmx4MGRtRnlJR1lnUFNBd08xeHVYRzVjZEdsbUlDaDJJRDRnTUM0d0tTQjdYRzVjZEZ4MFppQTlJR01nTHlCMk8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlGdG9ZMmRiTUYwc0lHWWdLaUF4TURBc0lIWWdLaUF4TURCZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b1kyY3VhSE5zSUQwZ1puVnVZM1JwYjI0Z0tHaGpaeWtnZTF4dVhIUjJZWElnWXlBOUlHaGpaMXN4WFNBdklERXdNRHRjYmx4MGRtRnlJR2NnUFNCb1kyZGJNbDBnTHlBeE1EQTdYRzVjYmx4MGRtRnlJR3dnUFNCbklDb2dLREV1TUNBdElHTXBJQ3NnTUM0MUlDb2dZenRjYmx4MGRtRnlJSE1nUFNBd08xeHVYRzVjZEdsbUlDaHNJRDRnTUM0d0lDWW1JR3dnUENBd0xqVXBJSHRjYmx4MFhIUnpJRDBnWXlBdklDZ3lJQ29nYkNrN1hHNWNkSDBnWld4elpWeHVYSFJwWmlBb2JDQStQU0F3TGpVZ0ppWWdiQ0E4SURFdU1Da2dlMXh1WEhSY2RITWdQU0JqSUM4Z0tESWdLaUFvTVNBdElHd3BLVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJiYUdObld6QmRMQ0J6SUNvZ01UQXdMQ0JzSUNvZ01UQXdYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVhR05uTG1oM1lpQTlJR1oxYm1OMGFXOXVJQ2hvWTJjcElIdGNibHgwZG1GeUlHTWdQU0JvWTJkYk1WMGdMeUF4TURBN1hHNWNkSFpoY2lCbklEMGdhR05uV3pKZElDOGdNVEF3TzF4dVhIUjJZWElnZGlBOUlHTWdLeUJuSUNvZ0tERXVNQ0F0SUdNcE8xeHVYSFJ5WlhSMWNtNGdXMmhqWjFzd1hTd2dLSFlnTFNCaktTQXFJREV3TUN3Z0tERWdMU0IyS1NBcUlERXdNRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWgzWWk1b1kyY2dQU0JtZFc1amRHbHZiaUFvYUhkaUtTQjdYRzVjZEhaaGNpQjNJRDBnYUhkaVd6RmRJQzhnTVRBd08xeHVYSFIyWVhJZ1lpQTlJR2gzWWxzeVhTQXZJREV3TUR0Y2JseDBkbUZ5SUhZZ1BTQXhJQzBnWWp0Y2JseDBkbUZ5SUdNZ1BTQjJJQzBnZHp0Y2JseDBkbUZ5SUdjZ1BTQXdPMXh1WEc1Y2RHbG1JQ2hqSUR3Z01Ta2dlMXh1WEhSY2RHY2dQU0FvZGlBdElHTXBJQzhnS0RFZ0xTQmpLVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJiYUhkaVd6QmRMQ0JqSUNvZ01UQXdMQ0JuSUNvZ01UQXdYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVZWEJ3YkdVdWNtZGlJRDBnWm5WdVkzUnBiMjRnS0dGd2NHeGxLU0I3WEc1Y2RISmxkSFZ5YmlCYktHRndjR3hsV3pCZElDOGdOalUxTXpVcElDb2dNalUxTENBb1lYQndiR1ZiTVYwZ0x5QTJOVFV6TlNrZ0tpQXlOVFVzSUNoaGNIQnNaVnN5WFNBdklEWTFOVE0xS1NBcUlESTFOVjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1aGNIQnNaU0E5SUdaMWJtTjBhVzl1SUNoeVoySXBJSHRjYmx4MGNtVjBkWEp1SUZzb2NtZGlXekJkSUM4Z01qVTFLU0FxSURZMU5UTTFMQ0FvY21kaVd6RmRJQzhnTWpVMUtTQXFJRFkxTlRNMUxDQW9jbWRpV3pKZElDOGdNalUxS1NBcUlEWTFOVE0xWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1WjNKaGVTNXlaMklnUFNCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUnlaWFIxY200Z1cyRnlaM05iTUYwZ0x5QXhNREFnS2lBeU5UVXNJR0Z5WjNOYk1GMGdMeUF4TURBZ0tpQXlOVFVzSUdGeVozTmJNRjBnTHlBeE1EQWdLaUF5TlRWZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1bmNtRjVMbWh6YkNBOUlHTnZiblpsY25RdVozSmhlUzVvYzNZZ1BTQm1kVzVqZEdsdmJpQW9ZWEpuY3lrZ2UxeHVYSFJ5WlhSMWNtNGdXekFzSURBc0lHRnlaM05iTUYxZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1bmNtRjVMbWgzWWlBOUlHWjFibU4wYVc5dUlDaG5jbUY1S1NCN1hHNWNkSEpsZEhWeWJpQmJNQ3dnTVRBd0xDQm5jbUY1V3pCZFhUdGNibjA3WEc1Y2JtTnZiblpsY25RdVozSmhlUzVqYlhscklEMGdablZ1WTNScGIyNGdLR2R5WVhrcElIdGNibHgwY21WMGRYSnVJRnN3TENBd0xDQXdMQ0JuY21GNVd6QmRYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVaM0poZVM1c1lXSWdQU0JtZFc1amRHbHZiaUFvWjNKaGVTa2dlMXh1WEhSeVpYUjFjbTRnVzJkeVlYbGJNRjBzSURBc0lEQmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW5jbUY1TG1obGVDQTlJR1oxYm1OMGFXOXVJQ2huY21GNUtTQjdYRzVjZEhaaGNpQjJZV3dnUFNCTllYUm9Mbkp2ZFc1a0tHZHlZWGxiTUYwZ0x5QXhNREFnS2lBeU5UVXBJQ1lnTUhoR1JqdGNibHgwZG1GeUlHbHVkR1ZuWlhJZ1BTQW9kbUZzSUR3OElERTJLU0FySUNoMllXd2dQRHdnT0NrZ0t5QjJZV3c3WEc1Y2JseDBkbUZ5SUhOMGNtbHVaeUE5SUdsdWRHVm5aWEl1ZEc5VGRISnBibWNvTVRZcExuUnZWWEJ3WlhKRFlYTmxLQ2s3WEc1Y2RISmxkSFZ5YmlBbk1EQXdNREF3Snk1emRXSnpkSEpwYm1jb2MzUnlhVzVuTG14bGJtZDBhQ2tnS3lCemRISnBibWM3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1bmNtRjVJRDBnWm5WdVkzUnBiMjRnS0hKbllpa2dlMXh1WEhSMllYSWdkbUZzSUQwZ0tISm5ZbHN3WFNBcklISm5ZbHN4WFNBcklISm5ZbHN5WFNrZ0x5QXpPMXh1WEhSeVpYUjFjbTRnVzNaaGJDQXZJREkxTlNBcUlERXdNRjA3WEc1OU8xeHVJaXdpZG1GeUlHTnZiblpsY25OcGIyNXpJRDBnY21WeGRXbHlaU2duTGk5amIyNTJaWEp6YVc5dWN5Y3BPMXh1ZG1GeUlISnZkWFJsSUQwZ2NtVnhkV2x5WlNnbkxpOXliM1YwWlNjcE8xeHVYRzUyWVhJZ1kyOXVkbVZ5ZENBOUlIdDlPMXh1WEc1MllYSWdiVzlrWld4eklEMGdUMkpxWldOMExtdGxlWE1vWTI5dWRtVnljMmx2Ym5NcE8xeHVYRzVtZFc1amRHbHZiaUIzY21Gd1VtRjNLR1p1S1NCN1hHNWNkSFpoY2lCM2NtRndjR1ZrUm00Z1BTQm1kVzVqZEdsdmJpQW9ZWEpuY3lrZ2UxeHVYSFJjZEdsbUlDaGhjbWR6SUQwOVBTQjFibVJsWm1sdVpXUWdmSHdnWVhKbmN5QTlQVDBnYm5Wc2JDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHRnlaM003WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dnUGlBeEtTQjdYRzVjZEZ4MFhIUmhjbWR6SUQwZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG5Oc2FXTmxMbU5oYkd3b1lYSm5kVzFsYm5SektUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnWm00b1lYSm5jeWs3WEc1Y2RIMDdYRzVjYmx4MEx5OGdjSEpsYzJWeWRtVWdMbU52Ym5abGNuTnBiMjRnY0hKdmNHVnlkSGtnYVdZZ2RHaGxjbVVnYVhNZ2IyNWxYRzVjZEdsbUlDZ25ZMjl1ZG1WeWMybHZiaWNnYVc0Z1ptNHBJSHRjYmx4MFhIUjNjbUZ3Y0dWa1JtNHVZMjl1ZG1WeWMybHZiaUE5SUdadUxtTnZiblpsY25OcGIyNDdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdkM0poY0hCbFpFWnVPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjNjbUZ3VW05MWJtUmxaQ2htYmlrZ2UxeHVYSFIyWVhJZ2QzSmhjSEJsWkVadUlEMGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwWEhScFppQW9ZWEpuY3lBOVBUMGdkVzVrWldacGJtVmtJSHg4SUdGeVozTWdQVDA5SUc1MWJHd3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQmhjbWR6TzF4dVhIUmNkSDFjYmx4dVhIUmNkR2xtSUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01Ta2dlMXh1WEhSY2RGeDBZWEpuY3lBOUlFRnljbUY1TG5CeWIzUnZkSGx3WlM1emJHbGpaUzVqWVd4c0tHRnlaM1Z0Wlc1MGN5azdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGRtRnlJSEpsYzNWc2RDQTlJR1p1S0dGeVozTXBPMXh1WEc1Y2RGeDBMeThnZDJVbmNtVWdZWE56ZFcxcGJtY2dkR2hsSUhKbGMzVnNkQ0JwY3lCaGJpQmhjbkpoZVNCb1pYSmxMbHh1WEhSY2RDOHZJSE5sWlNCdWIzUnBZMlVnYVc0Z1kyOXVkbVZ5YzJsdmJuTXVhbk03SUdSdmJpZDBJSFZ6WlNCaWIzZ2dkSGx3WlhOY2JseDBYSFF2THlCcGJpQmpiMjUyWlhKemFXOXVJR1oxYm1OMGFXOXVjeTVjYmx4MFhIUnBaaUFvZEhsd1pXOW1JSEpsYzNWc2RDQTlQVDBnSjI5aWFtVmpkQ2NwSUh0Y2JseDBYSFJjZEdadmNpQW9kbUZ5SUd4bGJpQTlJSEpsYzNWc2RDNXNaVzVuZEdnc0lHa2dQU0F3T3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmx4MFhIUmNkRngwY21WemRXeDBXMmxkSUQwZ1RXRjBhQzV5YjNWdVpDaHlaWE4xYkhSYmFWMHBPMXh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHh1WEhSY2RISmxkSFZ5YmlCeVpYTjFiSFE3WEc1Y2RIMDdYRzVjYmx4MEx5OGdjSEpsYzJWeWRtVWdMbU52Ym5abGNuTnBiMjRnY0hKdmNHVnlkSGtnYVdZZ2RHaGxjbVVnYVhNZ2IyNWxYRzVjZEdsbUlDZ25ZMjl1ZG1WeWMybHZiaWNnYVc0Z1ptNHBJSHRjYmx4MFhIUjNjbUZ3Y0dWa1JtNHVZMjl1ZG1WeWMybHZiaUE5SUdadUxtTnZiblpsY25OcGIyNDdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdkM0poY0hCbFpFWnVPMXh1ZlZ4dVhHNXRiMlJsYkhNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb1puSnZiVTF2WkdWc0tTQjdYRzVjZEdOdmJuWmxjblJiWm5KdmJVMXZaR1ZzWFNBOUlIdDlPMXh1WEc1Y2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hqYjI1MlpYSjBXMlp5YjIxTmIyUmxiRjBzSUNkamFHRnVibVZzY3ljc0lIdDJZV3gxWlRvZ1kyOXVkbVZ5YzJsdmJuTmJabkp2YlUxdlpHVnNYUzVqYUdGdWJtVnNjMzBwTzF4dVhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWTI5dWRtVnlkRnRtY205dFRXOWtaV3hkTENBbmJHRmlaV3h6Snl3Z2UzWmhiSFZsT2lCamIyNTJaWEp6YVc5dWMxdG1jbTl0VFc5a1pXeGRMbXhoWW1Wc2MzMHBPMXh1WEc1Y2RIWmhjaUJ5YjNWMFpYTWdQU0J5YjNWMFpTaG1jbTl0VFc5a1pXd3BPMXh1WEhSMllYSWdjbTkxZEdWTmIyUmxiSE1nUFNCUFltcGxZM1F1YTJWNWN5aHliM1YwWlhNcE8xeHVYRzVjZEhKdmRYUmxUVzlrWld4ekxtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tIUnZUVzlrWld3cElIdGNibHgwWEhSMllYSWdabTRnUFNCeWIzVjBaWE5iZEc5TmIyUmxiRjA3WEc1Y2JseDBYSFJqYjI1MlpYSjBXMlp5YjIxTmIyUmxiRjFiZEc5TmIyUmxiRjBnUFNCM2NtRndVbTkxYm1SbFpDaG1iaWs3WEc1Y2RGeDBZMjl1ZG1WeWRGdG1jbTl0VFc5a1pXeGRXM1J2VFc5a1pXeGRMbkpoZHlBOUlIZHlZWEJTWVhjb1ptNHBPMXh1WEhSOUtUdGNibjBwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlHTnZiblpsY25RN1hHNGlMQ0oyWVhJZ1kyOXVkbVZ5YzJsdmJuTWdQU0J5WlhGMWFYSmxLQ2N1TDJOdmJuWmxjbk5wYjI1ekp5azdYRzVjYmk4cVhHNWNkSFJvYVhNZ1puVnVZM1JwYjI0Z2NtOTFkR1Z6SUdFZ2JXOWtaV3dnZEc4Z1lXeHNJRzkwYUdWeUlHMXZaR1ZzY3k1Y2JseHVYSFJoYkd3Z1puVnVZM1JwYjI1eklIUm9ZWFFnWVhKbElISnZkWFJsWkNCb1lYWmxJR0VnY0hKdmNHVnlkSGtnWUM1amIyNTJaWEp6YVc5dVlDQmhkSFJoWTJobFpGeHVYSFIwYnlCMGFHVWdjbVYwZFhKdVpXUWdjM2x1ZEdobGRHbGpJR1oxYm1OMGFXOXVMaUJVYUdseklIQnliM0JsY25SNUlHbHpJR0Z1SUdGeWNtRjVYRzVjZEc5bUlITjBjbWx1WjNNc0lHVmhZMmdnZDJsMGFDQjBhR1VnYzNSbGNITWdhVzRnWW1WMGQyVmxiaUIwYUdVZ0oyWnliMjBuSUdGdVpDQW5kRzhuWEc1Y2RHTnZiRzl5SUcxdlpHVnNjeUFvYVc1amJIVnphWFpsS1M1Y2JseHVYSFJqYjI1MlpYSnphVzl1Y3lCMGFHRjBJR0Z5WlNCdWIzUWdjRzl6YzJsaWJHVWdjMmx0Y0d4NUlHRnlaU0J1YjNRZ2FXNWpiSFZrWldRdVhHNHFMMXh1WEc1bWRXNWpkR2x2YmlCaWRXbHNaRWR5WVhCb0tDa2dlMXh1WEhSMllYSWdaM0poY0dnZ1BTQjdmVHRjYmx4MEx5OGdhSFIwY0hNNkx5OXFjM0JsY21ZdVkyOXRMMjlpYW1WamRDMXJaWGx6TFhaekxXWnZjaTFwYmkxM2FYUm9MV05zYjNOMWNtVXZNMXh1WEhSMllYSWdiVzlrWld4eklEMGdUMkpxWldOMExtdGxlWE1vWTI5dWRtVnljMmx2Ym5NcE8xeHVYRzVjZEdadmNpQW9kbUZ5SUd4bGJpQTlJRzF2WkdWc2N5NXNaVzVuZEdnc0lHa2dQU0F3T3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmx4MFhIUm5jbUZ3YUZ0dGIyUmxiSE5iYVYxZElEMGdlMXh1WEhSY2RGeDBMeThnYUhSMGNEb3ZMMnB6Y0dWeVppNWpiMjB2TVMxMmN5MXBibVpwYm1sMGVWeHVYSFJjZEZ4MEx5OGdiV2xqY204dGIzQjBMQ0JpZFhRZ2RHaHBjeUJwY3lCemFXMXdiR1V1WEc1Y2RGeDBYSFJrYVhOMFlXNWpaVG9nTFRFc1hHNWNkRngwWEhSd1lYSmxiblE2SUc1MWJHeGNibHgwWEhSOU8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlHZHlZWEJvTzF4dWZWeHVYRzR2THlCb2RIUndjem92TDJWdUxuZHBhMmx3WldScFlTNXZjbWN2ZDJscmFTOUNjbVZoWkhSb0xXWnBjbk4wWDNObFlYSmphRnh1Wm5WdVkzUnBiMjRnWkdWeWFYWmxRa1pUS0daeWIyMU5iMlJsYkNrZ2UxeHVYSFIyWVhJZ1ozSmhjR2dnUFNCaWRXbHNaRWR5WVhCb0tDazdYRzVjZEhaaGNpQnhkV1YxWlNBOUlGdG1jbTl0VFc5a1pXeGRPeUF2THlCMWJuTm9hV1owSUMwK0lIRjFaWFZsSUMwK0lIQnZjRnh1WEc1Y2RHZHlZWEJvVzJaeWIyMU5iMlJsYkYwdVpHbHpkR0Z1WTJVZ1BTQXdPMXh1WEc1Y2RIZG9hV3hsSUNoeGRXVjFaUzVzWlc1bmRHZ3BJSHRjYmx4MFhIUjJZWElnWTNWeWNtVnVkQ0E5SUhGMVpYVmxMbkJ2Y0NncE8xeHVYSFJjZEhaaGNpQmhaR3BoWTJWdWRITWdQU0JQWW1wbFkzUXVhMlY1Y3loamIyNTJaWEp6YVc5dWMxdGpkWEp5Wlc1MFhTazdYRzVjYmx4MFhIUm1iM0lnS0haaGNpQnNaVzRnUFNCaFpHcGhZMlZ1ZEhNdWJHVnVaM1JvTENCcElEMGdNRHNnYVNBOElHeGxianNnYVNzcktTQjdYRzVjZEZ4MFhIUjJZWElnWVdScVlXTmxiblFnUFNCaFpHcGhZMlZ1ZEhOYmFWMDdYRzVjZEZ4MFhIUjJZWElnYm05a1pTQTlJR2R5WVhCb1cyRmthbUZqWlc1MFhUdGNibHh1WEhSY2RGeDBhV1lnS0c1dlpHVXVaR2x6ZEdGdVkyVWdQVDA5SUMweEtTQjdYRzVjZEZ4MFhIUmNkRzV2WkdVdVpHbHpkR0Z1WTJVZ1BTQm5jbUZ3YUZ0amRYSnlaVzUwWFM1a2FYTjBZVzVqWlNBcklERTdYRzVjZEZ4MFhIUmNkRzV2WkdVdWNHRnlaVzUwSUQwZ1kzVnljbVZ1ZER0Y2JseDBYSFJjZEZ4MGNYVmxkV1V1ZFc1emFHbG1kQ2hoWkdwaFkyVnVkQ2s3WEc1Y2RGeDBYSFI5WEc1Y2RGeDBmVnh1WEhSOVhHNWNibHgwY21WMGRYSnVJR2R5WVhCb08xeHVmVnh1WEc1bWRXNWpkR2x2YmlCc2FXNXJLR1p5YjIwc0lIUnZLU0I3WEc1Y2RISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb1lYSm5jeWtnZTF4dVhIUmNkSEpsZEhWeWJpQjBieWhtY205dEtHRnlaM01wS1R0Y2JseDBmVHRjYm4xY2JseHVablZ1WTNScGIyNGdkM0poY0VOdmJuWmxjbk5wYjI0b2RHOU5iMlJsYkN3Z1ozSmhjR2dwSUh0Y2JseDBkbUZ5SUhCaGRHZ2dQU0JiWjNKaGNHaGJkRzlOYjJSbGJGMHVjR0Z5Wlc1MExDQjBiMDF2WkdWc1hUdGNibHgwZG1GeUlHWnVJRDBnWTI5dWRtVnljMmx2Ym5OYlozSmhjR2hiZEc5TmIyUmxiRjB1Y0dGeVpXNTBYVnQwYjAxdlpHVnNYVHRjYmx4dVhIUjJZWElnWTNWeUlEMGdaM0poY0doYmRHOU5iMlJsYkYwdWNHRnlaVzUwTzF4dVhIUjNhR2xzWlNBb1ozSmhjR2hiWTNWeVhTNXdZWEpsYm5RcElIdGNibHgwWEhSd1lYUm9MblZ1YzJocFpuUW9aM0poY0doYlkzVnlYUzV3WVhKbGJuUXBPMXh1WEhSY2RHWnVJRDBnYkdsdWF5aGpiMjUyWlhKemFXOXVjMXRuY21Gd2FGdGpkWEpkTG5CaGNtVnVkRjFiWTNWeVhTd2dabTRwTzF4dVhIUmNkR04xY2lBOUlHZHlZWEJvVzJOMWNsMHVjR0Z5Wlc1ME8xeHVYSFI5WEc1Y2JseDBabTR1WTI5dWRtVnljMmx2YmlBOUlIQmhkR2c3WEc1Y2RISmxkSFZ5YmlCbWJqdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlBb1puSnZiVTF2WkdWc0tTQjdYRzVjZEhaaGNpQm5jbUZ3YUNBOUlHUmxjbWwyWlVKR1V5aG1jbTl0VFc5a1pXd3BPMXh1WEhSMllYSWdZMjl1ZG1WeWMybHZiaUE5SUh0OU8xeHVYRzVjZEhaaGNpQnRiMlJsYkhNZ1BTQlBZbXBsWTNRdWEyVjVjeWhuY21Gd2FDazdYRzVjZEdadmNpQW9kbUZ5SUd4bGJpQTlJRzF2WkdWc2N5NXNaVzVuZEdnc0lHa2dQU0F3T3lCcElEd2diR1Z1T3lCcEt5c3BJSHRjYmx4MFhIUjJZWElnZEc5TmIyUmxiQ0E5SUcxdlpHVnNjMXRwWFR0Y2JseDBYSFIyWVhJZ2JtOWtaU0E5SUdkeVlYQm9XM1J2VFc5a1pXeGRPMXh1WEc1Y2RGeDBhV1lnS0c1dlpHVXVjR0Z5Wlc1MElEMDlQU0J1ZFd4c0tTQjdYRzVjZEZ4MFhIUXZMeUJ1YnlCd2IzTnphV0pzWlNCamIyNTJaWEp6YVc5dUxDQnZjaUIwYUdseklHNXZaR1VnYVhNZ2RHaGxJSE52ZFhKalpTQnRiMlJsYkM1Y2JseDBYSFJjZEdOdmJuUnBiblZsTzF4dVhIUmNkSDFjYmx4dVhIUmNkR052Ym5abGNuTnBiMjViZEc5TmIyUmxiRjBnUFNCM2NtRndRMjl1ZG1WeWMybHZiaWgwYjAxdlpHVnNMQ0JuY21Gd2FDazdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdZMjl1ZG1WeWMybHZianRjYm4wN1hHNWNiaUlzSWlkMWMyVWdjM1J5YVdOMEoxeHlYRzVjY2x4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN1hISmNibHgwWENKaGJHbGpaV0pzZFdWY0lqb2dXekkwTUN3Z01qUTRMQ0F5TlRWZExGeHlYRzVjZEZ3aVlXNTBhWEYxWlhkb2FYUmxYQ0k2SUZzeU5UQXNJREl6TlN3Z01qRTFYU3hjY2x4dVhIUmNJbUZ4ZFdGY0lqb2dXekFzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW1GeGRXRnRZWEpwYm1WY0lqb2dXekV5Tnl3Z01qVTFMQ0F5TVRKZExGeHlYRzVjZEZ3aVlYcDFjbVZjSWpvZ1d6STBNQ3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpWW1WcFoyVmNJam9nV3pJME5Td2dNalExTENBeU1qQmRMRnh5WEc1Y2RGd2lZbWx6Y1hWbFhDSTZJRnN5TlRVc0lESXlPQ3dnTVRrMlhTeGNjbHh1WEhSY0ltSnNZV05yWENJNklGc3dMQ0F3TENBd1hTeGNjbHh1WEhSY0ltSnNZVzVqYUdWa1lXeHRiMjVrWENJNklGc3lOVFVzSURJek5Td2dNakExWFN4Y2NseHVYSFJjSW1Kc2RXVmNJam9nV3pBc0lEQXNJREkxTlYwc1hISmNibHgwWENKaWJIVmxkbWx2YkdWMFhDSTZJRnN4TXpnc0lEUXpMQ0F5TWpaZExGeHlYRzVjZEZ3aVluSnZkMjVjSWpvZ1d6RTJOU3dnTkRJc0lEUXlYU3hjY2x4dVhIUmNJbUoxY214NWQyOXZaRndpT2lCYk1qSXlMQ0F4T0RRc0lERXpOVjBzWEhKY2JseDBYQ0pqWVdSbGRHSnNkV1ZjSWpvZ1d6azFMQ0F4TlRnc0lERTJNRjBzWEhKY2JseDBYQ0pqYUdGeWRISmxkWE5sWENJNklGc3hNamNzSURJMU5Td2dNRjBzWEhKY2JseDBYQ0pqYUc5amIyeGhkR1ZjSWpvZ1d6SXhNQ3dnTVRBMUxDQXpNRjBzWEhKY2JseDBYQ0pqYjNKaGJGd2lPaUJiTWpVMUxDQXhNamNzSURnd1hTeGNjbHh1WEhSY0ltTnZjbTVtYkc5M1pYSmliSFZsWENJNklGc3hNREFzSURFME9Td2dNak0zWFN4Y2NseHVYSFJjSW1OdmNtNXphV3hyWENJNklGc3lOVFVzSURJME9Dd2dNakl3WFN4Y2NseHVYSFJjSW1OeWFXMXpiMjVjSWpvZ1d6SXlNQ3dnTWpBc0lEWXdYU3hjY2x4dVhIUmNJbU41WVc1Y0lqb2dXekFzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW1SaGNtdGliSFZsWENJNklGc3dMQ0F3TENBeE16bGRMRnh5WEc1Y2RGd2laR0Z5YTJONVlXNWNJam9nV3pBc0lERXpPU3dnTVRNNVhTeGNjbHh1WEhSY0ltUmhjbXRuYjJ4a1pXNXliMlJjSWpvZ1d6RTROQ3dnTVRNMExDQXhNVjBzWEhKY2JseDBYQ0prWVhKclozSmhlVndpT2lCYk1UWTVMQ0F4Tmprc0lERTJPVjBzWEhKY2JseDBYQ0prWVhKclozSmxaVzVjSWpvZ1d6QXNJREV3TUN3Z01GMHNYSEpjYmx4MFhDSmtZWEpyWjNKbGVWd2lPaUJiTVRZNUxDQXhOamtzSURFMk9WMHNYSEpjYmx4MFhDSmtZWEpyYTJoaGEybGNJam9nV3pFNE9Td2dNVGd6TENBeE1EZGRMRnh5WEc1Y2RGd2laR0Z5YTIxaFoyVnVkR0ZjSWpvZ1d6RXpPU3dnTUN3Z01UTTVYU3hjY2x4dVhIUmNJbVJoY210dmJHbDJaV2R5WldWdVhDSTZJRnM0TlN3Z01UQTNMQ0EwTjEwc1hISmNibHgwWENKa1lYSnJiM0poYm1kbFhDSTZJRnN5TlRVc0lERTBNQ3dnTUYwc1hISmNibHgwWENKa1lYSnJiM0pqYUdsa1hDSTZJRnN4TlRNc0lEVXdMQ0F5TURSZExGeHlYRzVjZEZ3aVpHRnlhM0psWkZ3aU9pQmJNVE01TENBd0xDQXdYU3hjY2x4dVhIUmNJbVJoY210ellXeHRiMjVjSWpvZ1d6SXpNeXdnTVRVd0xDQXhNakpkTEZ4eVhHNWNkRndpWkdGeWEzTmxZV2R5WldWdVhDSTZJRnN4TkRNc0lERTRPQ3dnTVRRelhTeGNjbHh1WEhSY0ltUmhjbXR6YkdGMFpXSnNkV1ZjSWpvZ1d6Y3lMQ0EyTVN3Z01UTTVYU3hjY2x4dVhIUmNJbVJoY210emJHRjBaV2R5WVhsY0lqb2dXelEzTENBM09Td2dOemxkTEZ4eVhHNWNkRndpWkdGeWEzTnNZWFJsWjNKbGVWd2lPaUJiTkRjc0lEYzVMQ0EzT1Ywc1hISmNibHgwWENKa1lYSnJkSFZ5Y1hWdmFYTmxYQ0k2SUZzd0xDQXlNRFlzSURJd09WMHNYSEpjYmx4MFhDSmtZWEpyZG1sdmJHVjBYQ0k2SUZzeE5EZ3NJREFzSURJeE1WMHNYSEpjYmx4MFhDSmtaV1Z3Y0dsdWExd2lPaUJiTWpVMUxDQXlNQ3dnTVRRM1hTeGNjbHh1WEhSY0ltUmxaWEJ6YTNsaWJIVmxYQ0k2SUZzd0xDQXhPVEVzSURJMU5WMHNYSEpjYmx4MFhDSmthVzFuY21GNVhDSTZJRnN4TURVc0lERXdOU3dnTVRBMVhTeGNjbHh1WEhSY0ltUnBiV2R5WlhsY0lqb2dXekV3TlN3Z01UQTFMQ0F4TURWZExGeHlYRzVjZEZ3aVpHOWtaMlZ5WW14MVpWd2lPaUJiTXpBc0lERTBOQ3dnTWpVMVhTeGNjbHh1WEhSY0ltWnBjbVZpY21samExd2lPaUJiTVRjNExDQXpOQ3dnTXpSZExGeHlYRzVjZEZ3aVpteHZjbUZzZDJocGRHVmNJam9nV3pJMU5Td2dNalV3TENBeU5EQmRMRnh5WEc1Y2RGd2labTl5WlhOMFozSmxaVzVjSWpvZ1d6TTBMQ0F4TXprc0lETTBYU3hjY2x4dVhIUmNJbVoxWTJoemFXRmNJam9nV3pJMU5Td2dNQ3dnTWpVMVhTeGNjbHh1WEhSY0ltZGhhVzV6WW05eWIxd2lPaUJiTWpJd0xDQXlNakFzSURJeU1GMHNYSEpjYmx4MFhDSm5hRzl6ZEhkb2FYUmxYQ0k2SUZzeU5EZ3NJREkwT0N3Z01qVTFYU3hjY2x4dVhIUmNJbWR2YkdSY0lqb2dXekkxTlN3Z01qRTFMQ0F3WFN4Y2NseHVYSFJjSW1kdmJHUmxibkp2WkZ3aU9pQmJNakU0TENBeE5qVXNJRE15WFN4Y2NseHVYSFJjSW1keVlYbGNJam9nV3pFeU9Dd2dNVEk0TENBeE1qaGRMRnh5WEc1Y2RGd2laM0psWlc1Y0lqb2dXekFzSURFeU9Dd2dNRjBzWEhKY2JseDBYQ0puY21WbGJubGxiR3h2ZDF3aU9pQmJNVGN6TENBeU5UVXNJRFEzWFN4Y2NseHVYSFJjSW1keVpYbGNJam9nV3pFeU9Dd2dNVEk0TENBeE1qaGRMRnh5WEc1Y2RGd2lhRzl1Wlhsa1pYZGNJam9nV3pJME1Dd2dNalUxTENBeU5EQmRMRnh5WEc1Y2RGd2lhRzkwY0dsdWExd2lPaUJiTWpVMUxDQXhNRFVzSURFNE1GMHNYSEpjYmx4MFhDSnBibVJwWVc1eVpXUmNJam9nV3pJd05Td2dPVElzSURreVhTeGNjbHh1WEhSY0ltbHVaR2xuYjF3aU9pQmJOelVzSURBc0lERXpNRjBzWEhKY2JseDBYQ0pwZG05eWVWd2lPaUJiTWpVMUxDQXlOVFVzSURJME1GMHNYSEpjYmx4MFhDSnJhR0ZyYVZ3aU9pQmJNalF3TENBeU16QXNJREUwTUYwc1hISmNibHgwWENKc1lYWmxibVJsY2x3aU9pQmJNak13TENBeU16QXNJREkxTUYwc1hISmNibHgwWENKc1lYWmxibVJsY21Kc2RYTm9YQ0k2SUZzeU5UVXNJREkwTUN3Z01qUTFYU3hjY2x4dVhIUmNJbXhoZDI1bmNtVmxibHdpT2lCYk1USTBMQ0F5TlRJc0lEQmRMRnh5WEc1Y2RGd2liR1Z0YjI1amFHbG1abTl1WENJNklGc3lOVFVzSURJMU1Dd2dNakExWFN4Y2NseHVYSFJjSW14cFoyaDBZbXgxWlZ3aU9pQmJNVGN6TENBeU1UWXNJREl6TUYwc1hISmNibHgwWENKc2FXZG9kR052Y21Gc1hDSTZJRnN5TkRBc0lERXlPQ3dnTVRJNFhTeGNjbHh1WEhSY0lteHBaMmgwWTNsaGJsd2lPaUJiTWpJMExDQXlOVFVzSURJMU5WMHNYSEpjYmx4MFhDSnNhV2RvZEdkdmJHUmxibkp2WkhsbGJHeHZkMXdpT2lCYk1qVXdMQ0F5TlRBc0lESXhNRjBzWEhKY2JseDBYQ0pzYVdkb2RHZHlZWGxjSWpvZ1d6SXhNU3dnTWpFeExDQXlNVEZkTEZ4eVhHNWNkRndpYkdsbmFIUm5jbVZsYmx3aU9pQmJNVFEwTENBeU16Z3NJREUwTkYwc1hISmNibHgwWENKc2FXZG9kR2R5WlhsY0lqb2dXekl4TVN3Z01qRXhMQ0F5TVRGZExGeHlYRzVjZEZ3aWJHbG5hSFJ3YVc1clhDSTZJRnN5TlRVc0lERTRNaXdnTVRrelhTeGNjbHh1WEhSY0lteHBaMmgwYzJGc2JXOXVYQ0k2SUZzeU5UVXNJREUyTUN3Z01USXlYU3hjY2x4dVhIUmNJbXhwWjJoMGMyVmhaM0psWlc1Y0lqb2dXek15TENBeE56Z3NJREUzTUYwc1hISmNibHgwWENKc2FXZG9kSE5yZVdKc2RXVmNJam9nV3pFek5Td2dNakEyTENBeU5UQmRMRnh5WEc1Y2RGd2liR2xuYUhSemJHRjBaV2R5WVhsY0lqb2dXekV4T1N3Z01UTTJMQ0F4TlROZExGeHlYRzVjZEZ3aWJHbG5hSFJ6YkdGMFpXZHlaWGxjSWpvZ1d6RXhPU3dnTVRNMkxDQXhOVE5kTEZ4eVhHNWNkRndpYkdsbmFIUnpkR1ZsYkdKc2RXVmNJam9nV3pFM05pd2dNVGsyTENBeU1qSmRMRnh5WEc1Y2RGd2liR2xuYUhSNVpXeHNiM2RjSWpvZ1d6STFOU3dnTWpVMUxDQXlNalJkTEZ4eVhHNWNkRndpYkdsdFpWd2lPaUJiTUN3Z01qVTFMQ0F3WFN4Y2NseHVYSFJjSW14cGJXVm5jbVZsYmx3aU9pQmJOVEFzSURJd05Td2dOVEJkTEZ4eVhHNWNkRndpYkdsdVpXNWNJam9nV3pJMU1Dd2dNalF3TENBeU16QmRMRnh5WEc1Y2RGd2liV0ZuWlc1MFlWd2lPaUJiTWpVMUxDQXdMQ0F5TlRWZExGeHlYRzVjZEZ3aWJXRnliMjl1WENJNklGc3hNamdzSURBc0lEQmRMRnh5WEc1Y2RGd2liV1ZrYVhWdFlYRjFZVzFoY21sdVpWd2lPaUJiTVRBeUxDQXlNRFVzSURFM01GMHNYSEpjYmx4MFhDSnRaV1JwZFcxaWJIVmxYQ0k2SUZzd0xDQXdMQ0F5TURWZExGeHlYRzVjZEZ3aWJXVmthWFZ0YjNKamFHbGtYQ0k2SUZzeE9EWXNJRGcxTENBeU1URmRMRnh5WEc1Y2RGd2liV1ZrYVhWdGNIVnljR3hsWENJNklGc3hORGNzSURFeE1pd2dNakU1WFN4Y2NseHVYSFJjSW0xbFpHbDFiWE5sWVdkeVpXVnVYQ0k2SUZzMk1Dd2dNVGM1TENBeE1UTmRMRnh5WEc1Y2RGd2liV1ZrYVhWdGMyeGhkR1ZpYkhWbFhDSTZJRnN4TWpNc0lERXdOQ3dnTWpNNFhTeGNjbHh1WEhSY0ltMWxaR2wxYlhOd2NtbHVaMmR5WldWdVhDSTZJRnN3TENBeU5UQXNJREUxTkYwc1hISmNibHgwWENKdFpXUnBkVzEwZFhKeGRXOXBjMlZjSWpvZ1d6Y3lMQ0F5TURrc0lESXdORjBzWEhKY2JseDBYQ0p0WldScGRXMTJhVzlzWlhSeVpXUmNJam9nV3pFNU9Td2dNakVzSURFek0xMHNYSEpjYmx4MFhDSnRhV1J1YVdkb2RHSnNkV1ZjSWpvZ1d6STFMQ0F5TlN3Z01URXlYU3hjY2x4dVhIUmNJbTFwYm5SamNtVmhiVndpT2lCYk1qUTFMQ0F5TlRVc0lESTFNRjBzWEhKY2JseDBYQ0p0YVhOMGVYSnZjMlZjSWpvZ1d6STFOU3dnTWpJNExDQXlNalZkTEZ4eVhHNWNkRndpYlc5alkyRnphVzVjSWpvZ1d6STFOU3dnTWpJNExDQXhPREZkTEZ4eVhHNWNkRndpYm1GMllXcHZkMmhwZEdWY0lqb2dXekkxTlN3Z01qSXlMQ0F4TnpOZExGeHlYRzVjZEZ3aWJtRjJlVndpT2lCYk1Dd2dNQ3dnTVRJNFhTeGNjbHh1WEhSY0ltOXNaR3hoWTJWY0lqb2dXekkxTXl3Z01qUTFMQ0F5TXpCZExGeHlYRzVjZEZ3aWIyeHBkbVZjSWpvZ1d6RXlPQ3dnTVRJNExDQXdYU3hjY2x4dVhIUmNJbTlzYVhabFpISmhZbHdpT2lCYk1UQTNMQ0F4TkRJc0lETTFYU3hjY2x4dVhIUmNJbTl5WVc1blpWd2lPaUJiTWpVMUxDQXhOalVzSURCZExGeHlYRzVjZEZ3aWIzSmhibWRsY21Wa1hDSTZJRnN5TlRVc0lEWTVMQ0F3WFN4Y2NseHVYSFJjSW05eVkyaHBaRndpT2lCYk1qRTRMQ0F4TVRJc0lESXhORjBzWEhKY2JseDBYQ0p3WVd4bFoyOXNaR1Z1Y205a1hDSTZJRnN5TXpnc0lESXpNaXdnTVRjd1hTeGNjbHh1WEhSY0luQmhiR1ZuY21WbGJsd2lPaUJiTVRVeUxDQXlOVEVzSURFMU1sMHNYSEpjYmx4MFhDSndZV3hsZEhWeWNYVnZhWE5sWENJNklGc3hOelVzSURJek9Dd2dNak00WFN4Y2NseHVYSFJjSW5CaGJHVjJhVzlzWlhSeVpXUmNJam9nV3pJeE9Td2dNVEV5TENBeE5EZGRMRnh5WEc1Y2RGd2ljR0Z3WVhsaGQyaHBjRndpT2lCYk1qVTFMQ0F5TXprc0lESXhNMTBzWEhKY2JseDBYQ0p3WldGamFIQjFabVpjSWpvZ1d6STFOU3dnTWpFNExDQXhPRFZkTEZ4eVhHNWNkRndpY0dWeWRWd2lPaUJiTWpBMUxDQXhNek1zSURZelhTeGNjbHh1WEhSY0luQnBibXRjSWpvZ1d6STFOU3dnTVRreUxDQXlNRE5kTEZ4eVhHNWNkRndpY0d4MWJWd2lPaUJiTWpJeExDQXhOakFzSURJeU1WMHNYSEpjYmx4MFhDSndiM2RrWlhKaWJIVmxYQ0k2SUZzeE56WXNJREl5TkN3Z01qTXdYU3hjY2x4dVhIUmNJbkIxY25Cc1pWd2lPaUJiTVRJNExDQXdMQ0F4TWpoZExGeHlYRzVjZEZ3aWNtVmlaV05qWVhCMWNuQnNaVndpT2lCYk1UQXlMQ0ExTVN3Z01UVXpYU3hjY2x4dVhIUmNJbkpsWkZ3aU9pQmJNalUxTENBd0xDQXdYU3hjY2x4dVhIUmNJbkp2YzNsaWNtOTNibHdpT2lCYk1UZzRMQ0F4TkRNc0lERTBNMTBzWEhKY2JseDBYQ0p5YjNsaGJHSnNkV1ZjSWpvZ1d6WTFMQ0F4TURVc0lESXlOVjBzWEhKY2JseDBYQ0p6WVdSa2JHVmljbTkzYmx3aU9pQmJNVE01TENBMk9Td2dNVGxkTEZ4eVhHNWNkRndpYzJGc2JXOXVYQ0k2SUZzeU5UQXNJREV5T0N3Z01URTBYU3hjY2x4dVhIUmNJbk5oYm1SNVluSnZkMjVjSWpvZ1d6STBOQ3dnTVRZMExDQTVObDBzWEhKY2JseDBYQ0p6WldGbmNtVmxibHdpT2lCYk5EWXNJREV6T1N3Z09EZGRMRnh5WEc1Y2RGd2ljMlZoYzJobGJHeGNJam9nV3pJMU5Td2dNalExTENBeU16aGRMRnh5WEc1Y2RGd2ljMmxsYm01aFhDSTZJRnN4TmpBc0lEZ3lMQ0EwTlYwc1hISmNibHgwWENKemFXeDJaWEpjSWpvZ1d6RTVNaXdnTVRreUxDQXhPVEpkTEZ4eVhHNWNkRndpYzJ0NVlteDFaVndpT2lCYk1UTTFMQ0F5TURZc0lESXpOVjBzWEhKY2JseDBYQ0p6YkdGMFpXSnNkV1ZjSWpvZ1d6RXdOaXdnT1RBc0lESXdOVjBzWEhKY2JseDBYQ0p6YkdGMFpXZHlZWGxjSWpvZ1d6RXhNaXdnTVRJNExDQXhORFJkTEZ4eVhHNWNkRndpYzJ4aGRHVm5jbVY1WENJNklGc3hNVElzSURFeU9Dd2dNVFEwWFN4Y2NseHVYSFJjSW5OdWIzZGNJam9nV3pJMU5Td2dNalV3TENBeU5UQmRMRnh5WEc1Y2RGd2ljM0J5YVc1blozSmxaVzVjSWpvZ1d6QXNJREkxTlN3Z01USTNYU3hjY2x4dVhIUmNJbk4wWldWc1lteDFaVndpT2lCYk56QXNJREV6TUN3Z01UZ3dYU3hjY2x4dVhIUmNJblJoYmx3aU9pQmJNakV3TENBeE9EQXNJREUwTUYwc1hISmNibHgwWENKMFpXRnNYQ0k2SUZzd0xDQXhNamdzSURFeU9GMHNYSEpjYmx4MFhDSjBhR2x6ZEd4bFhDSTZJRnN5TVRZc0lERTVNU3dnTWpFMlhTeGNjbHh1WEhSY0luUnZiV0YwYjF3aU9pQmJNalUxTENBNU9Td2dOekZkTEZ4eVhHNWNkRndpZEhWeWNYVnZhWE5sWENJNklGczJOQ3dnTWpJMExDQXlNRGhkTEZ4eVhHNWNkRndpZG1sdmJHVjBYQ0k2SUZzeU16Z3NJREV6TUN3Z01qTTRYU3hjY2x4dVhIUmNJbmRvWldGMFhDSTZJRnN5TkRVc0lESXlNaXdnTVRjNVhTeGNjbHh1WEhSY0luZG9hWFJsWENJNklGc3lOVFVzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW5kb2FYUmxjMjF2YTJWY0lqb2dXekkwTlN3Z01qUTFMQ0F5TkRWZExGeHlYRzVjZEZ3aWVXVnNiRzkzWENJNklGc3lOVFVzSURJMU5Td2dNRjBzWEhKY2JseDBYQ0o1Wld4c2IzZG5jbVZsYmx3aU9pQmJNVFUwTENBeU1EVXNJRFV3WFZ4eVhHNTlPMXh5WEc0aUxDSXZLaUJOU1ZRZ2JHbGpaVzV6WlNBcUwxeHVkbUZ5SUdOdmJHOXlUbUZ0WlhNZ1BTQnlaWEYxYVhKbEtDZGpiMnh2Y2kxdVlXMWxKeWs3WEc1MllYSWdjM2RwZW5wc1pTQTlJSEpsY1hWcGNtVW9KM05wYlhCc1pTMXpkMmw2ZW14bEp5azdYRzVjYm5aaGNpQnlaWFpsY25ObFRtRnRaWE1nUFNCN2ZUdGNibHh1THk4Z1kzSmxZWFJsSUdFZ2JHbHpkQ0J2WmlCeVpYWmxjbk5sSUdOdmJHOXlJRzVoYldWelhHNW1iM0lnS0haaGNpQnVZVzFsSUdsdUlHTnZiRzl5VG1GdFpYTXBJSHRjYmx4MGFXWWdLR052Ykc5eVRtRnRaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29ibUZ0WlNrcElIdGNibHgwWEhSeVpYWmxjbk5sVG1GdFpYTmJZMjlzYjNKT1lXMWxjMXR1WVcxbFhWMGdQU0J1WVcxbE8xeHVYSFI5WEc1OVhHNWNiblpoY2lCamN5QTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMXh1WEhSMGJ6b2dlMzBzWEc1Y2RHZGxkRG9nZTMxY2JuMDdYRzVjYm1OekxtZGxkQ0E5SUdaMWJtTjBhVzl1SUNoemRISnBibWNwSUh0Y2JseDBkbUZ5SUhCeVpXWnBlQ0E5SUhOMGNtbHVaeTV6ZFdKemRISnBibWNvTUN3Z015a3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JseDBkbUZ5SUhaaGJEdGNibHgwZG1GeUlHMXZaR1ZzTzF4dVhIUnpkMmwwWTJnZ0tIQnlaV1pwZUNrZ2UxeHVYSFJjZEdOaGMyVWdKMmh6YkNjNlhHNWNkRngwWEhSMllXd2dQU0JqY3k1blpYUXVhSE5zS0hOMGNtbHVaeWs3WEc1Y2RGeDBYSFJ0YjJSbGJDQTlJQ2RvYzJ3bk8xeHVYSFJjZEZ4MFluSmxZV3M3WEc1Y2RGeDBZMkZ6WlNBbmFIZGlKenBjYmx4MFhIUmNkSFpoYkNBOUlHTnpMbWRsZEM1b2QySW9jM1J5YVc1bktUdGNibHgwWEhSY2RHMXZaR1ZzSUQwZ0oyaDNZaWM3WEc1Y2RGeDBYSFJpY21WaGF6dGNibHgwWEhSa1pXWmhkV3gwT2x4dVhIUmNkRngwZG1Gc0lEMGdZM011WjJWMExuSm5ZaWh6ZEhKcGJtY3BPMXh1WEhSY2RGeDBiVzlrWld3Z1BTQW5jbWRpSnp0Y2JseDBYSFJjZEdKeVpXRnJPMXh1WEhSOVhHNWNibHgwYVdZZ0tDRjJZV3dwSUh0Y2JseDBYSFJ5WlhSMWNtNGdiblZzYkR0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCN2JXOWtaV3c2SUcxdlpHVnNMQ0IyWVd4MVpUb2dkbUZzZlR0Y2JuMDdYRzVjYm1OekxtZGxkQzV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9jM1J5YVc1bktTQjdYRzVjZEdsbUlDZ2hjM1J5YVc1bktTQjdYRzVjZEZ4MGNtVjBkWEp1SUc1MWJHdzdYRzVjZEgxY2JseHVYSFIyWVhJZ1lXSmljaUE5SUM5ZUl5aGJZUzFtTUMwNVhYc3pMRFI5S1NRdmFUdGNibHgwZG1GeUlHaGxlQ0E5SUM5ZUl5aGJZUzFtTUMwNVhYczJmU2tvVzJFdFpqQXRPVjE3TW4wcFB5UXZhVHRjYmx4MGRtRnlJSEpuWW1FZ1BTQXZYbkpuWW1FL1hGd29YRnh6S2loYkt5MWRQMXhjWkNzcFhGeHpLaXhjWEhNcUtGc3JMVjAvWEZ4a0t5bGNYSE1xTEZ4Y2N5b29XeXN0WFQ5Y1hHUXJLVnhjY3lvb1B6b3NYRnh6S2loYkt5MWRQMXRjWEdSY1hDNWRLeWxjWEhNcUtUOWNYQ2trTHp0Y2JseDBkbUZ5SUhCbGNpQTlJQzllY21kaVlUOWNYQ2hjWEhNcUtGc3JMVjAvVzF4Y1pGeGNMbDByS1Z4Y0pWeGNjeW9zWEZ4ektpaGJLeTFkUDF0Y1hHUmNYQzVkS3lsY1hDVmNYSE1xTEZ4Y2N5b29XeXN0WFQ5YlhGeGtYRnd1WFNzcFhGd2xYRnh6S2lnL09peGNYSE1xS0ZzckxWMC9XMXhjWkZ4Y0xsMHJLVnhjY3lvcFAxeGNLU1F2TzF4dVhIUjJZWElnYTJWNWQyOXlaQ0E5SUM4b1hGeEVLeWt2TzF4dVhHNWNkSFpoY2lCeVoySWdQU0JiTUN3Z01Dd2dNQ3dnTVYwN1hHNWNkSFpoY2lCdFlYUmphRHRjYmx4MGRtRnlJR2s3WEc1Y2RIWmhjaUJvWlhoQmJIQm9ZVHRjYmx4dVhIUnBaaUFvYldGMFkyZ2dQU0J6ZEhKcGJtY3ViV0YwWTJnb2FHVjRLU2tnZTF4dVhIUmNkR2hsZUVGc2NHaGhJRDBnYldGMFkyaGJNbDA3WEc1Y2RGeDBiV0YwWTJnZ1BTQnRZWFJqYUZzeFhUdGNibHh1WEhSY2RHWnZjaUFvYVNBOUlEQTdJR2tnUENBek95QnBLeXNwSUh0Y2JseDBYSFJjZEM4dklHaDBkSEJ6T2k4dmFuTndaWEptTG1OdmJTOXpiR2xqWlMxMmN5MXpkV0p6ZEhJdGRuTXRjM1ZpYzNSeWFXNW5MVzFsZEdodlpITXRiRzl1WnkxemRISnBibWN2TVRsY2JseDBYSFJjZEhaaGNpQnBNaUE5SUdrZ0tpQXlPMXh1WEhSY2RGeDBjbWRpVzJsZElEMGdjR0Z5YzJWSmJuUW9iV0YwWTJndWMyeHBZMlVvYVRJc0lHa3lJQ3NnTWlrc0lERTJLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnBaaUFvYUdWNFFXeHdhR0VwSUh0Y2JseDBYSFJjZEhKbllsc3pYU0E5SUUxaGRHZ3VjbTkxYm1Rb0tIQmhjbk5sU1c1MEtHaGxlRUZzY0doaExDQXhOaWtnTHlBeU5UVXBJQ29nTVRBd0tTQXZJREV3TUR0Y2JseDBYSFI5WEc1Y2RIMGdaV3h6WlNCcFppQW9iV0YwWTJnZ1BTQnpkSEpwYm1jdWJXRjBZMmdvWVdKaWNpa3BJSHRjYmx4MFhIUnRZWFJqYUNBOUlHMWhkR05vV3pGZE8xeHVYSFJjZEdobGVFRnNjR2hoSUQwZ2JXRjBZMmhiTTEwN1hHNWNibHgwWEhSbWIzSWdLR2tnUFNBd095QnBJRHdnTXpzZ2FTc3JLU0I3WEc1Y2RGeDBYSFJ5WjJKYmFWMGdQU0J3WVhKelpVbHVkQ2h0WVhSamFGdHBYU0FySUcxaGRHTm9XMmxkTENBeE5pazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGFXWWdLR2hsZUVGc2NHaGhLU0I3WEc1Y2RGeDBYSFJ5WjJKYk0xMGdQU0JOWVhSb0xuSnZkVzVrS0Nod1lYSnpaVWx1ZENob1pYaEJiSEJvWVNBcklHaGxlRUZzY0doaExDQXhOaWtnTHlBeU5UVXBJQ29nTVRBd0tTQXZJREV3TUR0Y2JseDBYSFI5WEc1Y2RIMGdaV3h6WlNCcFppQW9iV0YwWTJnZ1BTQnpkSEpwYm1jdWJXRjBZMmdvY21kaVlTa3BJSHRjYmx4MFhIUm1iM0lnS0drZ1BTQXdPeUJwSUR3Z016c2dhU3NyS1NCN1hHNWNkRngwWEhSeVoySmJhVjBnUFNCd1lYSnpaVWx1ZENodFlYUmphRnRwSUNzZ01WMHNJREFwTzF4dVhIUmNkSDFjYmx4dVhIUmNkR2xtSUNodFlYUmphRnMwWFNrZ2UxeHVYSFJjZEZ4MGNtZGlXek5kSUQwZ2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzMFhTazdYRzVjZEZ4MGZWeHVYSFI5SUdWc2MyVWdhV1lnS0cxaGRHTm9JRDBnYzNSeWFXNW5MbTFoZEdOb0tIQmxjaWtwSUh0Y2JseDBYSFJtYjNJZ0tHa2dQU0F3T3lCcElEd2dNenNnYVNzcktTQjdYRzVjZEZ4MFhIUnlaMkpiYVYwZ1BTQk5ZWFJvTG5KdmRXNWtLSEJoY25ObFJteHZZWFFvYldGMFkyaGJhU0FySURGZEtTQXFJREl1TlRVcE8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaHRZWFJqYUZzMFhTa2dlMXh1WEhSY2RGeDBjbWRpV3pOZElEMGdjR0Z5YzJWR2JHOWhkQ2h0WVhSamFGczBYU2s3WEc1Y2RGeDBmVnh1WEhSOUlHVnNjMlVnYVdZZ0tHMWhkR05vSUQwZ2MzUnlhVzVuTG0xaGRHTm9LR3RsZVhkdmNtUXBLU0I3WEc1Y2RGeDBhV1lnS0cxaGRHTm9XekZkSUQwOVBTQW5kSEpoYm5Od1lYSmxiblFuS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnV3pBc0lEQXNJREFzSURCZE8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbllpQTlJR052Ykc5eVRtRnRaWE5iYldGMFkyaGJNVjFkTzF4dVhHNWNkRngwYVdZZ0tDRnlaMklwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJ1ZFd4c08xeHVYSFJjZEgxY2JseHVYSFJjZEhKbllsc3pYU0E5SURFN1hHNWNibHgwWEhSeVpYUjFjbTRnY21kaU8xeHVYSFI5SUdWc2MyVWdlMXh1WEhSY2RISmxkSFZ5YmlCdWRXeHNPMXh1WEhSOVhHNWNibHgwWm05eUlDaHBJRDBnTURzZ2FTQThJRE03SUdrckt5a2dlMXh1WEhSY2RISm5ZbHRwWFNBOUlHTnNZVzF3S0hKbllsdHBYU3dnTUN3Z01qVTFLVHRjYmx4MGZWeHVYSFJ5WjJKYk0xMGdQU0JqYkdGdGNDaHlaMkpiTTEwc0lEQXNJREVwTzF4dVhHNWNkSEpsZEhWeWJpQnlaMkk3WEc1OU8xeHVYRzVqY3k1blpYUXVhSE5zSUQwZ1puVnVZM1JwYjI0Z0tITjBjbWx1WnlrZ2UxeHVYSFJwWmlBb0lYTjBjbWx1WnlrZ2UxeHVYSFJjZEhKbGRIVnliaUJ1ZFd4c08xeHVYSFI5WEc1Y2JseDBkbUZ5SUdoemJDQTlJQzllYUhOc1lUOWNYQ2hjWEhNcUtGc3JMVjAvS0Q4NlhGeGtLbHhjTGlrL1hGeGtLeWtvUHpwa1pXY3BQMXhjY3lvc1hGeHpLaWhiS3kxZFAxdGNYR1JjWEM1ZEt5a2xYRnh6S2l4Y1hITXFLRnNyTFYwL1cxeGNaRnhjTGwwcktTVmNYSE1xS0Q4NkxGeGNjeW9vV3lzdFhUOWJYRnhrWEZ3dVhTc3BYRnh6S2lrL1hGd3BKQzg3WEc1Y2RIWmhjaUJ0WVhSamFDQTlJSE4wY21sdVp5NXRZWFJqYUNob2Myd3BPMXh1WEc1Y2RHbG1JQ2h0WVhSamFDa2dlMXh1WEhSY2RIWmhjaUJoYkhCb1lTQTlJSEJoY25ObFJteHZZWFFvYldGMFkyaGJORjBwTzF4dVhIUmNkSFpoY2lCb0lEMGdLSEJoY25ObFJteHZZWFFvYldGMFkyaGJNVjBwSUNzZ016WXdLU0FsSURNMk1EdGNibHgwWEhSMllYSWdjeUE5SUdOc1lXMXdLSEJoY25ObFJteHZZWFFvYldGMFkyaGJNbDBwTENBd0xDQXhNREFwTzF4dVhIUmNkSFpoY2lCc0lEMGdZMnhoYlhBb2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzelhTa3NJREFzSURFd01DazdYRzVjZEZ4MGRtRnlJR0VnUFNCamJHRnRjQ2hwYzA1aFRpaGhiSEJvWVNrZ1B5QXhJRG9nWVd4d2FHRXNJREFzSURFcE8xeHVYRzVjZEZ4MGNtVjBkWEp1SUZ0b0xDQnpMQ0JzTENCaFhUdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQnVkV3hzTzF4dWZUdGNibHh1WTNNdVoyVjBMbWgzWWlBOUlHWjFibU4wYVc5dUlDaHpkSEpwYm1jcElIdGNibHgwYVdZZ0tDRnpkSEpwYm1jcElIdGNibHgwWEhSeVpYUjFjbTRnYm5Wc2JEdGNibHgwZlZ4dVhHNWNkSFpoY2lCb2QySWdQU0F2WG1oM1lseGNLRnhjY3lvb1d5c3RYVDljWEdRcVcxeGNMbDAvWEZ4a0t5a29QenBrWldjcFAxeGNjeW9zWEZ4ektpaGJLeTFkUDF0Y1hHUmNYQzVkS3lrbFhGeHpLaXhjWEhNcUtGc3JMVjAvVzF4Y1pGeGNMbDByS1NWY1hITXFLRDg2TEZ4Y2N5b29XeXN0WFQ5YlhGeGtYRnd1WFNzcFhGeHpLaWsvWEZ3cEpDODdYRzVjZEhaaGNpQnRZWFJqYUNBOUlITjBjbWx1Wnk1dFlYUmphQ2hvZDJJcE8xeHVYRzVjZEdsbUlDaHRZWFJqYUNrZ2UxeHVYSFJjZEhaaGNpQmhiSEJvWVNBOUlIQmhjbk5sUm14dllYUW9iV0YwWTJoYk5GMHBPMXh1WEhSY2RIWmhjaUJvSUQwZ0tDaHdZWEp6WlVac2IyRjBLRzFoZEdOb1d6RmRLU0FsSURNMk1Da2dLeUF6TmpBcElDVWdNell3TzF4dVhIUmNkSFpoY2lCM0lEMGdZMnhoYlhBb2NHRnljMlZHYkc5aGRDaHRZWFJqYUZzeVhTa3NJREFzSURFd01DazdYRzVjZEZ4MGRtRnlJR0lnUFNCamJHRnRjQ2h3WVhKelpVWnNiMkYwS0cxaGRHTm9Xek5kS1N3Z01Dd2dNVEF3S1R0Y2JseDBYSFIyWVhJZ1lTQTlJR05zWVcxd0tHbHpUbUZPS0dGc2NHaGhLU0EvSURFZ09pQmhiSEJvWVN3Z01Dd2dNU2s3WEc1Y2RGeDBjbVYwZFhKdUlGdG9MQ0IzTENCaUxDQmhYVHRjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJ1ZFd4c08xeHVmVHRjYmx4dVkzTXVkRzh1YUdWNElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUjJZWElnY21kaVlTQTlJSE4zYVhwNmJHVW9ZWEpuZFcxbGJuUnpLVHRjYmx4dVhIUnlaWFIxY200Z0tGeHVYSFJjZENjakp5QXJYRzVjZEZ4MGFHVjRSRzkxWW14bEtISm5ZbUZiTUYwcElDdGNibHgwWEhSb1pYaEViM1ZpYkdVb2NtZGlZVnN4WFNrZ0sxeHVYSFJjZEdobGVFUnZkV0pzWlNoeVoySmhXekpkS1NBclhHNWNkRngwS0hKblltRmJNMTBnUENBeFhHNWNkRngwWEhRL0lDaG9aWGhFYjNWaWJHVW9UV0YwYUM1eWIzVnVaQ2h5WjJKaFd6TmRJQ29nTWpVMUtTa3BYRzVjZEZ4MFhIUTZJQ2NuS1Z4dVhIUXBPMXh1ZlR0Y2JseHVZM011ZEc4dWNtZGlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFIyWVhJZ2NtZGlZU0E5SUhOM2FYcDZiR1VvWVhKbmRXMWxiblJ6S1R0Y2JseHVYSFJ5WlhSMWNtNGdjbWRpWVM1c1pXNW5kR2dnUENBMElIeDhJSEpuWW1GYk0xMGdQVDA5SURGY2JseDBYSFEvSUNkeVoySW9KeUFySUUxaGRHZ3VjbTkxYm1Rb2NtZGlZVnN3WFNrZ0t5QW5MQ0FuSUNzZ1RXRjBhQzV5YjNWdVpDaHlaMkpoV3pGZEtTQXJJQ2NzSUNjZ0t5Qk5ZWFJvTG5KdmRXNWtLSEpuWW1GYk1sMHBJQ3NnSnlrblhHNWNkRngwT2lBbmNtZGlZU2duSUNzZ1RXRjBhQzV5YjNWdVpDaHlaMkpoV3pCZEtTQXJJQ2NzSUNjZ0t5Qk5ZWFJvTG5KdmRXNWtLSEpuWW1GYk1WMHBJQ3NnSnl3Z0p5QXJJRTFoZEdndWNtOTFibVFvY21kaVlWc3lYU2tnS3lBbkxDQW5JQ3NnY21kaVlWc3pYU0FySUNjcEp6dGNibjA3WEc1Y2JtTnpMblJ2TG5KbllpNXdaWEpqWlc1MElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dVhIUjJZWElnY21kaVlTQTlJSE4zYVhwNmJHVW9ZWEpuZFcxbGJuUnpLVHRjYmx4dVhIUjJZWElnY2lBOUlFMWhkR2d1Y205MWJtUW9jbWRpWVZzd1hTQXZJREkxTlNBcUlERXdNQ2s3WEc1Y2RIWmhjaUJuSUQwZ1RXRjBhQzV5YjNWdVpDaHlaMkpoV3pGZElDOGdNalUxSUNvZ01UQXdLVHRjYmx4MGRtRnlJR0lnUFNCTllYUm9Mbkp2ZFc1a0tISm5ZbUZiTWwwZ0x5QXlOVFVnS2lBeE1EQXBPMXh1WEc1Y2RISmxkSFZ5YmlCeVoySmhMbXhsYm1kMGFDQThJRFFnZkh3Z2NtZGlZVnN6WFNBOVBUMGdNVnh1WEhSY2REOGdKM0puWWlnbklDc2djaUFySUNjbExDQW5JQ3NnWnlBcklDY2xMQ0FuSUNzZ1lpQXJJQ2NsS1NkY2JseDBYSFE2SUNkeVoySmhLQ2NnS3lCeUlDc2dKeVVzSUNjZ0t5Qm5JQ3NnSnlVc0lDY2dLeUJpSUNzZ0p5VXNJQ2NnS3lCeVoySmhXek5kSUNzZ0p5a25PMXh1ZlR0Y2JseHVZM011ZEc4dWFITnNJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFIyWVhJZ2FITnNZU0E5SUhOM2FYcDZiR1VvWVhKbmRXMWxiblJ6S1R0Y2JseDBjbVYwZFhKdUlHaHpiR0V1YkdWdVozUm9JRHdnTkNCOGZDQm9jMnhoV3pOZElEMDlQU0F4WEc1Y2RGeDBQeUFuYUhOc0tDY2dLeUJvYzJ4aFd6QmRJQ3NnSnl3Z0p5QXJJR2h6YkdGYk1WMGdLeUFuSlN3Z0p5QXJJR2h6YkdGYk1sMGdLeUFuSlNrblhHNWNkRngwT2lBbmFITnNZU2duSUNzZ2FITnNZVnN3WFNBcklDY3NJQ2NnS3lCb2MyeGhXekZkSUNzZ0p5VXNJQ2NnS3lCb2MyeGhXekpkSUNzZ0p5VXNJQ2NnS3lCb2MyeGhXek5kSUNzZ0p5a25PMXh1ZlR0Y2JseHVMeThnYUhkaUlHbHpJR0VnWW1sMElHUnBabVpsY21WdWRDQjBhR0Z1SUhKbllpaGhLU0FtSUdoemJDaGhLU0J6YVc1alpTQjBhR1Z5WlNCcGN5QnVieUJoYkhCb1lTQnpjR1ZqYVdacFl5QnplVzUwWVhoY2JpOHZJQ2hvZDJJZ2FHRjJaU0JoYkhCb1lTQnZjSFJwYjI1aGJDQW1JREVnYVhNZ1pHVm1ZWFZzZENCMllXeDFaU2xjYm1OekxuUnZMbWgzWWlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MGRtRnlJR2gzWW1FZ1BTQnpkMmw2ZW14bEtHRnlaM1Z0Wlc1MGN5azdYRzVjYmx4MGRtRnlJR0VnUFNBbkp6dGNibHgwYVdZZ0tHaDNZbUV1YkdWdVozUm9JRDQ5SURRZ0ppWWdhSGRpWVZzelhTQWhQVDBnTVNrZ2UxeHVYSFJjZEdFZ1BTQW5MQ0FuSUNzZ2FIZGlZVnN6WFR0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlBbmFIZGlLQ2NnS3lCb2QySmhXekJkSUNzZ0p5d2dKeUFySUdoM1ltRmJNVjBnS3lBbkpTd2dKeUFySUdoM1ltRmJNbDBnS3lBbkpTY2dLeUJoSUNzZ0p5a25PMXh1ZlR0Y2JseHVZM011ZEc4dWEyVjVkMjl5WkNBOUlHWjFibU4wYVc5dUlDaHlaMklwSUh0Y2JseDBjbVYwZFhKdUlISmxkbVZ5YzJWT1lXMWxjMXR5WjJJdWMyeHBZMlVvTUN3Z015bGRPMXh1ZlR0Y2JseHVMeThnYUdWc2NHVnljMXh1Wm5WdVkzUnBiMjRnWTJ4aGJYQW9iblZ0TENCdGFXNHNJRzFoZUNrZ2UxeHVYSFJ5WlhSMWNtNGdUV0YwYUM1dGFXNG9UV0YwYUM1dFlYZ29iV2x1TENCdWRXMHBMQ0J0WVhncE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCb1pYaEViM1ZpYkdVb2JuVnRLU0I3WEc1Y2RIWmhjaUJ6ZEhJZ1BTQnVkVzB1ZEc5VGRISnBibWNvTVRZcExuUnZWWEJ3WlhKRFlYTmxLQ2s3WEc1Y2RISmxkSFZ5YmlBb2MzUnlMbXhsYm1kMGFDQThJRElwSUQ4Z0p6QW5JQ3NnYzNSeUlEb2djM1J5TzF4dWZWeHVJaXdpSjNWelpTQnpkSEpwWTNRblhISmNibHh5WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0Y2NseHVYSFJjSW1Gc2FXTmxZbXgxWlZ3aU9pQmJNalF3TENBeU5EZ3NJREkxTlYwc1hISmNibHgwWENKaGJuUnBjWFZsZDJocGRHVmNJam9nV3pJMU1Dd2dNak0xTENBeU1UVmRMRnh5WEc1Y2RGd2lZWEYxWVZ3aU9pQmJNQ3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpWVhGMVlXMWhjbWx1WlZ3aU9pQmJNVEkzTENBeU5UVXNJREl4TWwwc1hISmNibHgwWENKaGVuVnlaVndpT2lCYk1qUXdMQ0F5TlRVc0lESTFOVjBzWEhKY2JseDBYQ0ppWldsblpWd2lPaUJiTWpRMUxDQXlORFVzSURJeU1GMHNYSEpjYmx4MFhDSmlhWE54ZFdWY0lqb2dXekkxTlN3Z01qSTRMQ0F4T1RaZExGeHlYRzVjZEZ3aVlteGhZMnRjSWpvZ1d6QXNJREFzSURCZExGeHlYRzVjZEZ3aVlteGhibU5vWldSaGJHMXZibVJjSWpvZ1d6STFOU3dnTWpNMUxDQXlNRFZkTEZ4eVhHNWNkRndpWW14MVpWd2lPaUJiTUN3Z01Dd2dNalUxWFN4Y2NseHVYSFJjSW1Kc2RXVjJhVzlzWlhSY0lqb2dXekV6T0N3Z05ETXNJREl5Tmwwc1hISmNibHgwWENKaWNtOTNibHdpT2lCYk1UWTFMQ0EwTWl3Z05ESmRMRnh5WEc1Y2RGd2lZblZ5YkhsM2IyOWtYQ0k2SUZzeU1qSXNJREU0TkN3Z01UTTFYU3hjY2x4dVhIUmNJbU5oWkdWMFlteDFaVndpT2lCYk9UVXNJREUxT0N3Z01UWXdYU3hjY2x4dVhIUmNJbU5vWVhKMGNtVjFjMlZjSWpvZ1d6RXlOeXdnTWpVMUxDQXdYU3hjY2x4dVhIUmNJbU5vYjJOdmJHRjBaVndpT2lCYk1qRXdMQ0F4TURVc0lETXdYU3hjY2x4dVhIUmNJbU52Y21Gc1hDSTZJRnN5TlRVc0lERXlOeXdnT0RCZExGeHlYRzVjZEZ3aVkyOXlibVpzYjNkbGNtSnNkV1ZjSWpvZ1d6RXdNQ3dnTVRRNUxDQXlNemRkTEZ4eVhHNWNkRndpWTI5eWJuTnBiR3RjSWpvZ1d6STFOU3dnTWpRNExDQXlNakJkTEZ4eVhHNWNkRndpWTNKcGJYTnZibHdpT2lCYk1qSXdMQ0F5TUN3Z05qQmRMRnh5WEc1Y2RGd2lZM2xoYmx3aU9pQmJNQ3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpWkdGeWEySnNkV1ZjSWpvZ1d6QXNJREFzSURFek9WMHNYSEpjYmx4MFhDSmtZWEpyWTNsaGJsd2lPaUJiTUN3Z01UTTVMQ0F4TXpsZExGeHlYRzVjZEZ3aVpHRnlhMmR2YkdSbGJuSnZaRndpT2lCYk1UZzBMQ0F4TXpRc0lERXhYU3hjY2x4dVhIUmNJbVJoY210bmNtRjVYQ0k2SUZzeE5qa3NJREUyT1N3Z01UWTVYU3hjY2x4dVhIUmNJbVJoY210bmNtVmxibHdpT2lCYk1Dd2dNVEF3TENBd1hTeGNjbHh1WEhSY0ltUmhjbXRuY21WNVhDSTZJRnN4Tmprc0lERTJPU3dnTVRZNVhTeGNjbHh1WEhSY0ltUmhjbXRyYUdGcmFWd2lPaUJiTVRnNUxDQXhPRE1zSURFd04xMHNYSEpjYmx4MFhDSmtZWEpyYldGblpXNTBZVndpT2lCYk1UTTVMQ0F3TENBeE16bGRMRnh5WEc1Y2RGd2laR0Z5YTI5c2FYWmxaM0psWlc1Y0lqb2dXemcxTENBeE1EY3NJRFEzWFN4Y2NseHVYSFJjSW1SaGNtdHZjbUZ1WjJWY0lqb2dXekkxTlN3Z01UUXdMQ0F3WFN4Y2NseHVYSFJjSW1SaGNtdHZjbU5vYVdSY0lqb2dXekUxTXl3Z05UQXNJREl3TkYwc1hISmNibHgwWENKa1lYSnJjbVZrWENJNklGc3hNemtzSURBc0lEQmRMRnh5WEc1Y2RGd2laR0Z5YTNOaGJHMXZibHdpT2lCYk1qTXpMQ0F4TlRBc0lERXlNbDBzWEhKY2JseDBYQ0prWVhKcmMyVmhaM0psWlc1Y0lqb2dXekUwTXl3Z01UZzRMQ0F4TkROZExGeHlYRzVjZEZ3aVpHRnlhM05zWVhSbFlteDFaVndpT2lCYk56SXNJRFl4TENBeE16bGRMRnh5WEc1Y2RGd2laR0Z5YTNOc1lYUmxaM0poZVZ3aU9pQmJORGNzSURjNUxDQTNPVjBzWEhKY2JseDBYQ0prWVhKcmMyeGhkR1ZuY21WNVhDSTZJRnMwTnl3Z056a3NJRGM1WFN4Y2NseHVYSFJjSW1SaGNtdDBkWEp4ZFc5cGMyVmNJam9nV3pBc0lESXdOaXdnTWpBNVhTeGNjbHh1WEhSY0ltUmhjbXQyYVc5c1pYUmNJam9nV3pFME9Dd2dNQ3dnTWpFeFhTeGNjbHh1WEhSY0ltUmxaWEJ3YVc1clhDSTZJRnN5TlRVc0lESXdMQ0F4TkRkZExGeHlYRzVjZEZ3aVpHVmxjSE5yZVdKc2RXVmNJam9nV3pBc0lERTVNU3dnTWpVMVhTeGNjbHh1WEhSY0ltUnBiV2R5WVhsY0lqb2dXekV3TlN3Z01UQTFMQ0F4TURWZExGeHlYRzVjZEZ3aVpHbHRaM0psZVZ3aU9pQmJNVEExTENBeE1EVXNJREV3TlYwc1hISmNibHgwWENKa2IyUm5aWEppYkhWbFhDSTZJRnN6TUN3Z01UUTBMQ0F5TlRWZExGeHlYRzVjZEZ3aVptbHlaV0p5YVdOclhDSTZJRnN4Tnpnc0lETTBMQ0F6TkYwc1hISmNibHgwWENKbWJHOXlZV3gzYUdsMFpWd2lPaUJiTWpVMUxDQXlOVEFzSURJME1GMHNYSEpjYmx4MFhDSm1iM0psYzNSbmNtVmxibHdpT2lCYk16UXNJREV6T1N3Z016UmRMRnh5WEc1Y2RGd2lablZqYUhOcFlWd2lPaUJiTWpVMUxDQXdMQ0F5TlRWZExGeHlYRzVjZEZ3aVoyRnBibk5pYjNKdlhDSTZJRnN5TWpBc0lESXlNQ3dnTWpJd1hTeGNjbHh1WEhSY0ltZG9iM04wZDJocGRHVmNJam9nV3pJME9Dd2dNalE0TENBeU5UVmRMRnh5WEc1Y2RGd2laMjlzWkZ3aU9pQmJNalUxTENBeU1UVXNJREJkTEZ4eVhHNWNkRndpWjI5c1pHVnVjbTlrWENJNklGc3lNVGdzSURFMk5Td2dNekpkTEZ4eVhHNWNkRndpWjNKaGVWd2lPaUJiTVRJNExDQXhNamdzSURFeU9GMHNYSEpjYmx4MFhDSm5jbVZsYmx3aU9pQmJNQ3dnTVRJNExDQXdYU3hjY2x4dVhIUmNJbWR5WldWdWVXVnNiRzkzWENJNklGc3hOek1zSURJMU5Td2dORGRkTEZ4eVhHNWNkRndpWjNKbGVWd2lPaUJiTVRJNExDQXhNamdzSURFeU9GMHNYSEpjYmx4MFhDSm9iMjVsZVdSbGQxd2lPaUJiTWpRd0xDQXlOVFVzSURJME1GMHNYSEpjYmx4MFhDSm9iM1J3YVc1clhDSTZJRnN5TlRVc0lERXdOU3dnTVRnd1hTeGNjbHh1WEhSY0ltbHVaR2xoYm5KbFpGd2lPaUJiTWpBMUxDQTVNaXdnT1RKZExGeHlYRzVjZEZ3aWFXNWthV2R2WENJNklGczNOU3dnTUN3Z01UTXdYU3hjY2x4dVhIUmNJbWwyYjNKNVhDSTZJRnN5TlRVc0lESTFOU3dnTWpRd1hTeGNjbHh1WEhSY0ltdG9ZV3RwWENJNklGc3lOREFzSURJek1Dd2dNVFF3WFN4Y2NseHVYSFJjSW14aGRtVnVaR1Z5WENJNklGc3lNekFzSURJek1Dd2dNalV3WFN4Y2NseHVYSFJjSW14aGRtVnVaR1Z5WW14MWMyaGNJam9nV3pJMU5Td2dNalF3TENBeU5EVmRMRnh5WEc1Y2RGd2liR0YzYm1keVpXVnVYQ0k2SUZzeE1qUXNJREkxTWl3Z01GMHNYSEpjYmx4MFhDSnNaVzF2Ym1Ob2FXWm1iMjVjSWpvZ1d6STFOU3dnTWpVd0xDQXlNRFZkTEZ4eVhHNWNkRndpYkdsbmFIUmliSFZsWENJNklGc3hOek1zSURJeE5pd2dNak13WFN4Y2NseHVYSFJjSW14cFoyaDBZMjl5WVd4Y0lqb2dXekkwTUN3Z01USTRMQ0F4TWpoZExGeHlYRzVjZEZ3aWJHbG5hSFJqZVdGdVhDSTZJRnN5TWpRc0lESTFOU3dnTWpVMVhTeGNjbHh1WEhSY0lteHBaMmgwWjI5c1pHVnVjbTlrZVdWc2JHOTNYQ0k2SUZzeU5UQXNJREkxTUN3Z01qRXdYU3hjY2x4dVhIUmNJbXhwWjJoMFozSmhlVndpT2lCYk1qRXhMQ0F5TVRFc0lESXhNVjBzWEhKY2JseDBYQ0pzYVdkb2RHZHlaV1Z1WENJNklGc3hORFFzSURJek9Dd2dNVFEwWFN4Y2NseHVYSFJjSW14cFoyaDBaM0psZVZ3aU9pQmJNakV4TENBeU1URXNJREl4TVYwc1hISmNibHgwWENKc2FXZG9kSEJwYm10Y0lqb2dXekkxTlN3Z01UZ3lMQ0F4T1ROZExGeHlYRzVjZEZ3aWJHbG5hSFJ6WVd4dGIyNWNJam9nV3pJMU5Td2dNVFl3TENBeE1qSmRMRnh5WEc1Y2RGd2liR2xuYUhSelpXRm5jbVZsYmx3aU9pQmJNeklzSURFM09Dd2dNVGN3WFN4Y2NseHVYSFJjSW14cFoyaDBjMnQ1WW14MVpWd2lPaUJiTVRNMUxDQXlNRFlzSURJMU1GMHNYSEpjYmx4MFhDSnNhV2RvZEhOc1lYUmxaM0poZVZ3aU9pQmJNVEU1TENBeE16WXNJREUxTTEwc1hISmNibHgwWENKc2FXZG9kSE5zWVhSbFozSmxlVndpT2lCYk1URTVMQ0F4TXpZc0lERTFNMTBzWEhKY2JseDBYQ0pzYVdkb2RITjBaV1ZzWW14MVpWd2lPaUJiTVRjMkxDQXhPVFlzSURJeU1sMHNYSEpjYmx4MFhDSnNhV2RvZEhsbGJHeHZkMXdpT2lCYk1qVTFMQ0F5TlRVc0lESXlORjBzWEhKY2JseDBYQ0pzYVcxbFhDSTZJRnN3TENBeU5UVXNJREJkTEZ4eVhHNWNkRndpYkdsdFpXZHlaV1Z1WENJNklGczFNQ3dnTWpBMUxDQTFNRjBzWEhKY2JseDBYQ0pzYVc1bGJsd2lPaUJiTWpVd0xDQXlOREFzSURJek1GMHNYSEpjYmx4MFhDSnRZV2RsYm5SaFhDSTZJRnN5TlRVc0lEQXNJREkxTlYwc1hISmNibHgwWENKdFlYSnZiMjVjSWpvZ1d6RXlPQ3dnTUN3Z01GMHNYSEpjYmx4MFhDSnRaV1JwZFcxaGNYVmhiV0Z5YVc1bFhDSTZJRnN4TURJc0lESXdOU3dnTVRjd1hTeGNjbHh1WEhSY0ltMWxaR2wxYldKc2RXVmNJam9nV3pBc0lEQXNJREl3TlYwc1hISmNibHgwWENKdFpXUnBkVzF2Y21Ob2FXUmNJam9nV3pFNE5pd2dPRFVzSURJeE1WMHNYSEpjYmx4MFhDSnRaV1JwZFcxd2RYSndiR1ZjSWpvZ1d6RTBOeXdnTVRFeUxDQXlNVGxkTEZ4eVhHNWNkRndpYldWa2FYVnRjMlZoWjNKbFpXNWNJam9nV3pZd0xDQXhOemtzSURFeE0xMHNYSEpjYmx4MFhDSnRaV1JwZFcxemJHRjBaV0pzZFdWY0lqb2dXekV5TXl3Z01UQTBMQ0F5TXpoZExGeHlYRzVjZEZ3aWJXVmthWFZ0YzNCeWFXNW5aM0psWlc1Y0lqb2dXekFzSURJMU1Dd2dNVFUwWFN4Y2NseHVYSFJjSW0xbFpHbDFiWFIxY25GMWIybHpaVndpT2lCYk56SXNJREl3T1N3Z01qQTBYU3hjY2x4dVhIUmNJbTFsWkdsMWJYWnBiMnhsZEhKbFpGd2lPaUJiTVRrNUxDQXlNU3dnTVRNelhTeGNjbHh1WEhSY0ltMXBaRzVwWjJoMFlteDFaVndpT2lCYk1qVXNJREkxTENBeE1USmRMRnh5WEc1Y2RGd2liV2x1ZEdOeVpXRnRYQ0k2SUZzeU5EVXNJREkxTlN3Z01qVXdYU3hjY2x4dVhIUmNJbTFwYzNSNWNtOXpaVndpT2lCYk1qVTFMQ0F5TWpnc0lESXlOVjBzWEhKY2JseDBYQ0p0YjJOallYTnBibHdpT2lCYk1qVTFMQ0F5TWpnc0lERTRNVjBzWEhKY2JseDBYQ0p1WVhaaGFtOTNhR2wwWlZ3aU9pQmJNalUxTENBeU1qSXNJREUzTTEwc1hISmNibHgwWENKdVlYWjVYQ0k2SUZzd0xDQXdMQ0F4TWpoZExGeHlYRzVjZEZ3aWIyeGtiR0ZqWlZ3aU9pQmJNalV6TENBeU5EVXNJREl6TUYwc1hISmNibHgwWENKdmJHbDJaVndpT2lCYk1USTRMQ0F4TWpnc0lEQmRMRnh5WEc1Y2RGd2liMnhwZG1Wa2NtRmlYQ0k2SUZzeE1EY3NJREUwTWl3Z016VmRMRnh5WEc1Y2RGd2liM0poYm1kbFhDSTZJRnN5TlRVc0lERTJOU3dnTUYwc1hISmNibHgwWENKdmNtRnVaMlZ5WldSY0lqb2dXekkxTlN3Z05qa3NJREJkTEZ4eVhHNWNkRndpYjNKamFHbGtYQ0k2SUZzeU1UZ3NJREV4TWl3Z01qRTBYU3hjY2x4dVhIUmNJbkJoYkdWbmIyeGtaVzV5YjJSY0lqb2dXekl6T0N3Z01qTXlMQ0F4TnpCZExGeHlYRzVjZEZ3aWNHRnNaV2R5WldWdVhDSTZJRnN4TlRJc0lESTFNU3dnTVRVeVhTeGNjbHh1WEhSY0luQmhiR1YwZFhKeGRXOXBjMlZjSWpvZ1d6RTNOU3dnTWpNNExDQXlNemhkTEZ4eVhHNWNkRndpY0dGc1pYWnBiMnhsZEhKbFpGd2lPaUJiTWpFNUxDQXhNVElzSURFME4xMHNYSEpjYmx4MFhDSndZWEJoZVdGM2FHbHdYQ0k2SUZzeU5UVXNJREl6T1N3Z01qRXpYU3hjY2x4dVhIUmNJbkJsWVdOb2NIVm1abHdpT2lCYk1qVTFMQ0F5TVRnc0lERTROVjBzWEhKY2JseDBYQ0p3WlhKMVhDSTZJRnN5TURVc0lERXpNeXdnTmpOZExGeHlYRzVjZEZ3aWNHbHVhMXdpT2lCYk1qVTFMQ0F4T1RJc0lESXdNMTBzWEhKY2JseDBYQ0p3YkhWdFhDSTZJRnN5TWpFc0lERTJNQ3dnTWpJeFhTeGNjbHh1WEhSY0luQnZkMlJsY21Kc2RXVmNJam9nV3pFM05pd2dNakkwTENBeU16QmRMRnh5WEc1Y2RGd2ljSFZ5Y0d4bFhDSTZJRnN4TWpnc0lEQXNJREV5T0Ywc1hISmNibHgwWENKeVpXSmxZMk5oY0hWeWNHeGxYQ0k2SUZzeE1ESXNJRFV4TENBeE5UTmRMRnh5WEc1Y2RGd2ljbVZrWENJNklGc3lOVFVzSURBc0lEQmRMRnh5WEc1Y2RGd2ljbTl6ZVdKeWIzZHVYQ0k2SUZzeE9EZ3NJREUwTXl3Z01UUXpYU3hjY2x4dVhIUmNJbkp2ZVdGc1lteDFaVndpT2lCYk5qVXNJREV3TlN3Z01qSTFYU3hjY2x4dVhIUmNJbk5oWkdSc1pXSnliM2R1WENJNklGc3hNemtzSURZNUxDQXhPVjBzWEhKY2JseDBYQ0p6WVd4dGIyNWNJam9nV3pJMU1Dd2dNVEk0TENBeE1UUmRMRnh5WEc1Y2RGd2ljMkZ1WkhsaWNtOTNibHdpT2lCYk1qUTBMQ0F4TmpRc0lEazJYU3hjY2x4dVhIUmNJbk5sWVdkeVpXVnVYQ0k2SUZzME5pd2dNVE01TENBNE4xMHNYSEpjYmx4MFhDSnpaV0Z6YUdWc2JGd2lPaUJiTWpVMUxDQXlORFVzSURJek9GMHNYSEpjYmx4MFhDSnphV1Z1Ym1GY0lqb2dXekUyTUN3Z09ESXNJRFExWFN4Y2NseHVYSFJjSW5OcGJIWmxjbHdpT2lCYk1Ua3lMQ0F4T1RJc0lERTVNbDBzWEhKY2JseDBYQ0p6YTNsaWJIVmxYQ0k2SUZzeE16VXNJREl3Tml3Z01qTTFYU3hjY2x4dVhIUmNJbk5zWVhSbFlteDFaVndpT2lCYk1UQTJMQ0E1TUN3Z01qQTFYU3hjY2x4dVhIUmNJbk5zWVhSbFozSmhlVndpT2lCYk1URXlMQ0F4TWpnc0lERTBORjBzWEhKY2JseDBYQ0p6YkdGMFpXZHlaWGxjSWpvZ1d6RXhNaXdnTVRJNExDQXhORFJkTEZ4eVhHNWNkRndpYzI1dmQxd2lPaUJiTWpVMUxDQXlOVEFzSURJMU1GMHNYSEpjYmx4MFhDSnpjSEpwYm1kbmNtVmxibHdpT2lCYk1Dd2dNalUxTENBeE1qZGRMRnh5WEc1Y2RGd2ljM1JsWld4aWJIVmxYQ0k2SUZzM01Dd2dNVE13TENBeE9EQmRMRnh5WEc1Y2RGd2lkR0Z1WENJNklGc3lNVEFzSURFNE1Dd2dNVFF3WFN4Y2NseHVYSFJjSW5SbFlXeGNJam9nV3pBc0lERXlPQ3dnTVRJNFhTeGNjbHh1WEhSY0luUm9hWE4wYkdWY0lqb2dXekl4Tml3Z01Ua3hMQ0F5TVRaZExGeHlYRzVjZEZ3aWRHOXRZWFJ2WENJNklGc3lOVFVzSURrNUxDQTNNVjBzWEhKY2JseDBYQ0owZFhKeGRXOXBjMlZjSWpvZ1d6WTBMQ0F5TWpRc0lESXdPRjBzWEhKY2JseDBYQ0oyYVc5c1pYUmNJam9nV3pJek9Dd2dNVE13TENBeU16aGRMRnh5WEc1Y2RGd2lkMmhsWVhSY0lqb2dXekkwTlN3Z01qSXlMQ0F4TnpsZExGeHlYRzVjZEZ3aWQyaHBkR1ZjSWpvZ1d6STFOU3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpZDJocGRHVnpiVzlyWlZ3aU9pQmJNalExTENBeU5EVXNJREkwTlYwc1hISmNibHgwWENKNVpXeHNiM2RjSWpvZ1d6STFOU3dnTWpVMUxDQXdYU3hjY2x4dVhIUmNJbmxsYkd4dmQyZHlaV1Z1WENJNklGc3hOVFFzSURJd05Td2dOVEJkWEhKY2JuMDdYSEpjYmlJc0lpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWRtRnlJR052Ykc5eVUzUnlhVzVuSUQwZ2NtVnhkV2x5WlNnblkyOXNiM0l0YzNSeWFXNW5KeWs3WEc1MllYSWdZMjl1ZG1WeWRDQTlJSEpsY1hWcGNtVW9KMk52Ykc5eUxXTnZiblpsY25RbktUdGNibHh1ZG1GeUlGOXpiR2xqWlNBOUlGdGRMbk5zYVdObE8xeHVYRzUyWVhJZ2MydHBjSEJsWkUxdlpHVnNjeUE5SUZ0Y2JseDBMeThnZEc4Z1ltVWdhRzl1WlhOMExDQkpJR1J2YmlkMElISmxZV3hzZVNCbVpXVnNJR3hwYTJVZ2EyVjVkMjl5WkNCaVpXeHZibWR6SUdsdUlHTnZiRzl5SUdOdmJuWmxjblFzSUdKMWRDQmxhQzVjYmx4MEoydGxlWGR2Y21RbkxGeHVYRzVjZEM4dklHZHlZWGtnWTI5dVpteHBZM1J6SUhkcGRHZ2djMjl0WlNCdFpYUm9iMlFnYm1GdFpYTXNJR0Z1WkNCb1lYTWdhWFJ6SUc5M2JpQnRaWFJvYjJRZ1pHVm1hVzVsWkM1Y2JseDBKMmR5WVhrbkxGeHVYRzVjZEM4dklITm9iM1ZzWkc0bmRDQnlaV0ZzYkhrZ1ltVWdhVzRnWTI5c2IzSXRZMjl1ZG1WeWRDQmxhWFJvWlhJdUxpNWNibHgwSjJobGVDZGNibDA3WEc1Y2JuWmhjaUJvWVhOb1pXUk5iMlJsYkV0bGVYTWdQU0I3ZlR0Y2JrOWlhbVZqZEM1clpYbHpLR052Ym5abGNuUXBMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLRzF2WkdWc0tTQjdYRzVjZEdoaGMyaGxaRTF2WkdWc1MyVjVjMXRmYzJ4cFkyVXVZMkZzYkNoamIyNTJaWEowVzIxdlpHVnNYUzVzWVdKbGJITXBMbk52Y25Rb0tTNXFiMmx1S0NjbktWMGdQU0J0YjJSbGJEdGNibjBwTzF4dVhHNTJZWElnYkdsdGFYUmxjbk1nUFNCN2ZUdGNibHh1Wm5WdVkzUnBiMjRnUTI5c2IzSW9iMkpxTENCdGIyUmxiQ2tnZTF4dVhIUnBaaUFvSVNoMGFHbHpJR2x1YzNSaGJtTmxiMllnUTI5c2IzSXBLU0I3WEc1Y2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaHZZbW9zSUcxdlpHVnNLVHRjYmx4MGZWeHVYRzVjZEdsbUlDaHRiMlJsYkNBbUppQnRiMlJsYkNCcGJpQnphMmx3Y0dWa1RXOWtaV3h6S1NCN1hHNWNkRngwYlc5a1pXd2dQU0J1ZFd4c08xeHVYSFI5WEc1Y2JseDBhV1lnS0cxdlpHVnNJQ1ltSUNFb2JXOWtaV3dnYVc0Z1kyOXVkbVZ5ZENrcElIdGNibHgwWEhSMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjFWdWEyNXZkMjRnYlc5a1pXdzZJQ2NnS3lCdGIyUmxiQ2s3WEc1Y2RIMWNibHh1WEhSMllYSWdhVHRjYmx4MGRtRnlJR05vWVc1dVpXeHpPMXh1WEc1Y2RHbG1JQ2gwZVhCbGIyWWdiMkpxSUQwOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dVhIUmNkSFJvYVhNdWJXOWtaV3dnUFNBbmNtZGlKenRjYmx4MFhIUjBhR2x6TG1OdmJHOXlJRDBnV3pBc0lEQXNJREJkTzF4dVhIUmNkSFJvYVhNdWRtRnNjR2hoSUQwZ01UdGNibHgwZlNCbGJITmxJR2xtSUNodlltb2dhVzV6ZEdGdVkyVnZaaUJEYjJ4dmNpa2dlMXh1WEhSY2RIUm9hWE11Ylc5a1pXd2dQU0J2WW1vdWJXOWtaV3c3WEc1Y2RGeDBkR2hwY3k1amIyeHZjaUE5SUc5aWFpNWpiMnh2Y2k1emJHbGpaU2dwTzF4dVhIUmNkSFJvYVhNdWRtRnNjR2hoSUQwZ2IySnFMblpoYkhCb1lUdGNibHgwZlNCbGJITmxJR2xtSUNoMGVYQmxiMllnYjJKcUlEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dVhIUmNkSFpoY2lCeVpYTjFiSFFnUFNCamIyeHZjbE4wY21sdVp5NW5aWFFvYjJKcUtUdGNibHgwWEhScFppQW9jbVZ6ZFd4MElEMDlQU0J1ZFd4c0tTQjdYRzVjZEZ4MFhIUjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oxVnVZV0pzWlNCMGJ5QndZWEp6WlNCamIyeHZjaUJtY205dElITjBjbWx1WnpvZ0p5QXJJRzlpYWlrN1hHNWNkRngwZlZ4dVhHNWNkRngwZEdocGN5NXRiMlJsYkNBOUlISmxjM1ZzZEM1dGIyUmxiRHRjYmx4MFhIUmphR0Z1Ym1Wc2N5QTlJR052Ym5abGNuUmJkR2hwY3k1dGIyUmxiRjB1WTJoaGJtNWxiSE03WEc1Y2RGeDBkR2hwY3k1amIyeHZjaUE5SUhKbGMzVnNkQzUyWVd4MVpTNXpiR2xqWlNnd0xDQmphR0Z1Ym1Wc2N5azdYRzVjZEZ4MGRHaHBjeTUyWVd4d2FHRWdQU0IwZVhCbGIyWWdjbVZ6ZFd4MExuWmhiSFZsVzJOb1lXNXVaV3h6WFNBOVBUMGdKMjUxYldKbGNpY2dQeUJ5WlhOMWJIUXVkbUZzZFdWYlkyaGhibTVsYkhOZElEb2dNVHRjYmx4MGZTQmxiSE5sSUdsbUlDaHZZbW91YkdWdVozUm9LU0I3WEc1Y2RGeDBkR2hwY3k1dGIyUmxiQ0E5SUcxdlpHVnNJSHg4SUNkeVoySW5PMXh1WEhSY2RHTm9ZVzV1Wld4eklEMGdZMjl1ZG1WeWRGdDBhR2x6TG0xdlpHVnNYUzVqYUdGdWJtVnNjenRjYmx4MFhIUjJZWElnYm1WM1FYSnlJRDBnWDNOc2FXTmxMbU5oYkd3b2IySnFMQ0F3TENCamFHRnVibVZzY3lrN1hHNWNkRngwZEdocGN5NWpiMnh2Y2lBOUlIcGxjbTlCY25KaGVTaHVaWGRCY25Jc0lHTm9ZVzV1Wld4ektUdGNibHgwWEhSMGFHbHpMblpoYkhCb1lTQTlJSFI1Y0dWdlppQnZZbXBiWTJoaGJtNWxiSE5kSUQwOVBTQW5iblZ0WW1WeUp5QS9JRzlpYWx0amFHRnVibVZzYzEwZ09pQXhPMXh1WEhSOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdWRXMWlaWEluS1NCN1hHNWNkRngwTHk4Z2RHaHBjeUJwY3lCaGJIZGhlWE1nVWtkQ0lDMGdZMkZ1SUdKbElHTnZiblpsY25SbFpDQnNZWFJsY2lCdmJpNWNibHgwWEhSdlltb2dKajBnTUhoR1JrWkdSa1k3WEc1Y2RGeDBkR2hwY3k1dGIyUmxiQ0E5SUNkeVoySW5PMXh1WEhSY2RIUm9hWE11WTI5c2IzSWdQU0JiWEc1Y2RGeDBYSFFvYjJKcUlENCtJREUyS1NBbUlEQjRSa1lzWEc1Y2RGeDBYSFFvYjJKcUlENCtJRGdwSUNZZ01IaEdSaXhjYmx4MFhIUmNkRzlpYWlBbUlEQjRSa1pjYmx4MFhIUmRPMXh1WEhSY2RIUm9hWE11ZG1Gc2NHaGhJRDBnTVR0Y2JseDBmU0JsYkhObElIdGNibHgwWEhSMGFHbHpMblpoYkhCb1lTQTlJREU3WEc1Y2JseDBYSFIyWVhJZ2EyVjVjeUE5SUU5aWFtVmpkQzVyWlhsektHOWlhaWs3WEc1Y2RGeDBhV1lnS0NkaGJIQm9ZU2NnYVc0Z2IySnFLU0I3WEc1Y2RGeDBYSFJyWlhsekxuTndiR2xqWlNoclpYbHpMbWx1WkdWNFQyWW9KMkZzY0doaEp5a3NJREVwTzF4dVhIUmNkRngwZEdocGN5NTJZV3h3YUdFZ1BTQjBlWEJsYjJZZ2IySnFMbUZzY0doaElEMDlQU0FuYm5WdFltVnlKeUEvSUc5aWFpNWhiSEJvWVNBNklEQTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGRtRnlJR2hoYzJobFpFdGxlWE1nUFNCclpYbHpMbk52Y25Rb0tTNXFiMmx1S0NjbktUdGNibHgwWEhScFppQW9JU2hvWVhOb1pXUkxaWGx6SUdsdUlHaGhjMmhsWkUxdlpHVnNTMlY1Y3lrcElIdGNibHgwWEhSY2RIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblZXNWhZbXhsSUhSdklIQmhjbk5sSUdOdmJHOXlJR1p5YjIwZ2IySnFaV04wT2lBbklDc2dTbE5QVGk1emRISnBibWRwWm5rb2IySnFLU2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBkR2hwY3k1dGIyUmxiQ0E5SUdoaGMyaGxaRTF2WkdWc1MyVjVjMXRvWVhOb1pXUkxaWGx6WFR0Y2JseHVYSFJjZEhaaGNpQnNZV0psYkhNZ1BTQmpiMjUyWlhKMFczUm9hWE11Ylc5a1pXeGRMbXhoWW1Wc2N6dGNibHgwWEhSMllYSWdZMjlzYjNJZ1BTQmJYVHRjYmx4MFhIUm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2JHRmlaV3h6TG14bGJtZDBhRHNnYVNzcktTQjdYRzVjZEZ4MFhIUmpiMnh2Y2k1d2RYTm9LRzlpYWx0c1lXSmxiSE5iYVYxZEtUdGNibHgwWEhSOVhHNWNibHgwWEhSMGFHbHpMbU52Ykc5eUlEMGdlbVZ5YjBGeWNtRjVLR052Ykc5eUtUdGNibHgwZlZ4dVhHNWNkQzh2SUhCbGNtWnZjbTBnYkdsdGFYUmhkR2x2Ym5NZ0tHTnNZVzF3YVc1bkxDQmxkR011S1Z4dVhIUnBaaUFvYkdsdGFYUmxjbk5iZEdocGN5NXRiMlJsYkYwcElIdGNibHgwWEhSamFHRnVibVZzY3lBOUlHTnZiblpsY25SYmRHaHBjeTV0YjJSbGJGMHVZMmhoYm01bGJITTdYRzVjZEZ4MFptOXlJQ2hwSUQwZ01Ec2dhU0E4SUdOb1lXNXVaV3h6T3lCcEt5c3BJSHRjYmx4MFhIUmNkSFpoY2lCc2FXMXBkQ0E5SUd4cGJXbDBaWEp6VzNSb2FYTXViVzlrWld4ZFcybGRPMXh1WEhSY2RGeDBhV1lnS0d4cGJXbDBLU0I3WEc1Y2RGeDBYSFJjZEhSb2FYTXVZMjlzYjNKYmFWMGdQU0JzYVcxcGRDaDBhR2x6TG1OdmJHOXlXMmxkS1R0Y2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2RIMWNibHh1WEhSMGFHbHpMblpoYkhCb1lTQTlJRTFoZEdndWJXRjRLREFzSUUxaGRHZ3ViV2x1S0RFc0lIUm9hWE11ZG1Gc2NHaGhLU2s3WEc1Y2JseDBhV1lnS0U5aWFtVmpkQzVtY21WbGVtVXBJSHRjYmx4MFhIUlBZbXBsWTNRdVpuSmxaWHBsS0hSb2FYTXBPMXh1WEhSOVhHNTlYRzVjYmtOdmJHOXlMbkJ5YjNSdmRIbHdaU0E5SUh0Y2JseDBkRzlUZEhKcGJtYzZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFJ5WlhSMWNtNGdkR2hwY3k1emRISnBibWNvS1R0Y2JseDBmU3hjYmx4dVhIUjBiMHBUVDA0NklHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUnlaWFIxY200Z2RHaHBjMXQwYUdsekxtMXZaR1ZzWFNncE8xeHVYSFI5TEZ4dVhHNWNkSE4wY21sdVp6b2dablZ1WTNScGIyNGdLSEJzWVdObGN5a2dlMXh1WEhSY2RIWmhjaUJ6Wld4bUlEMGdkR2hwY3k1dGIyUmxiQ0JwYmlCamIyeHZjbE4wY21sdVp5NTBieUEvSUhSb2FYTWdPaUIwYUdsekxuSm5ZaWdwTzF4dVhIUmNkSE5sYkdZZ1BTQnpaV3htTG5KdmRXNWtLSFI1Y0dWdlppQndiR0ZqWlhNZ1BUMDlJQ2R1ZFcxaVpYSW5JRDhnY0d4aFkyVnpJRG9nTVNrN1hHNWNkRngwZG1GeUlHRnlaM01nUFNCelpXeG1MblpoYkhCb1lTQTlQVDBnTVNBL0lITmxiR1l1WTI5c2IzSWdPaUJ6Wld4bUxtTnZiRzl5TG1OdmJtTmhkQ2gwYUdsekxuWmhiSEJvWVNrN1hHNWNkRngwY21WMGRYSnVJR052Ykc5eVUzUnlhVzVuTG5SdlczTmxiR1l1Ylc5a1pXeGRLR0Z5WjNNcE8xeHVYSFI5TEZ4dVhHNWNkSEJsY21ObGJuUlRkSEpwYm1jNklHWjFibU4wYVc5dUlDaHdiR0ZqWlhNcElIdGNibHgwWEhSMllYSWdjMlZzWmlBOUlIUm9hWE11Y21kaUtDa3VjbTkxYm1Rb2RIbHdaVzltSUhCc1lXTmxjeUE5UFQwZ0oyNTFiV0psY2ljZ1B5QndiR0ZqWlhNZ09pQXhLVHRjYmx4MFhIUjJZWElnWVhKbmN5QTlJSE5sYkdZdWRtRnNjR2hoSUQwOVBTQXhJRDhnYzJWc1ppNWpiMnh2Y2lBNklITmxiR1l1WTI5c2IzSXVZMjl1WTJGMEtIUm9hWE11ZG1Gc2NHaGhLVHRjYmx4MFhIUnlaWFIxY200Z1kyOXNiM0pUZEhKcGJtY3VkRzh1Y21kaUxuQmxjbU5sYm5Rb1lYSm5jeWs3WEc1Y2RIMHNYRzVjYmx4MFlYSnlZWGs2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhSeVpYUjFjbTRnZEdocGN5NTJZV3h3YUdFZ1BUMDlJREVnUHlCMGFHbHpMbU52Ykc5eUxuTnNhV05sS0NrZ09pQjBhR2x6TG1OdmJHOXlMbU52Ym1OaGRDaDBhR2x6TG5aaGJIQm9ZU2s3WEc1Y2RIMHNYRzVjYmx4MGIySnFaV04wT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MGRtRnlJSEpsYzNWc2RDQTlJSHQ5TzF4dVhIUmNkSFpoY2lCamFHRnVibVZzY3lBOUlHTnZiblpsY25SYmRHaHBjeTV0YjJSbGJGMHVZMmhoYm01bGJITTdYRzVjZEZ4MGRtRnlJR3hoWW1Wc2N5QTlJR052Ym5abGNuUmJkR2hwY3k1dGIyUmxiRjB1YkdGaVpXeHpPMXh1WEc1Y2RGeDBabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JqYUdGdWJtVnNjenNnYVNzcktTQjdYRzVjZEZ4MFhIUnlaWE4xYkhSYmJHRmlaV3h6VzJsZFhTQTlJSFJvYVhNdVkyOXNiM0piYVYwN1hHNWNkRngwZlZ4dVhHNWNkRngwYVdZZ0tIUm9hWE11ZG1Gc2NHaGhJQ0U5UFNBeEtTQjdYRzVjZEZ4MFhIUnlaWE4xYkhRdVlXeHdhR0VnUFNCMGFHbHpMblpoYkhCb1lUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnY21WemRXeDBPMXh1WEhSOUxGeHVYRzVjZEhWdWFYUkJjbkpoZVRvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RIWmhjaUJ5WjJJZ1BTQjBhR2x6TG5KbllpZ3BMbU52Ykc5eU8xeHVYSFJjZEhKbllsc3dYU0F2UFNBeU5UVTdYRzVjZEZ4MGNtZGlXekZkSUM4OUlESTFOVHRjYmx4MFhIUnlaMkpiTWwwZ0x6MGdNalUxTzF4dVhHNWNkRngwYVdZZ0tIUm9hWE11ZG1Gc2NHaGhJQ0U5UFNBeEtTQjdYRzVjZEZ4MFhIUnlaMkl1Y0hWemFDaDBhR2x6TG5aaGJIQm9ZU2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlISm5ZanRjYmx4MGZTeGNibHh1WEhSMWJtbDBUMkpxWldOME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBkbUZ5SUhKbllpQTlJSFJvYVhNdWNtZGlLQ2t1YjJKcVpXTjBLQ2s3WEc1Y2RGeDBjbWRpTG5JZ0x6MGdNalUxTzF4dVhIUmNkSEpuWWk1bklDODlJREkxTlR0Y2JseDBYSFJ5WjJJdVlpQXZQU0F5TlRVN1hHNWNibHgwWEhScFppQW9kR2hwY3k1MllXeHdhR0VnSVQwOUlERXBJSHRjYmx4MFhIUmNkSEpuWWk1aGJIQm9ZU0E5SUhSb2FYTXVkbUZzY0doaE8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbGRIVnliaUJ5WjJJN1hHNWNkSDBzWEc1Y2JseDBjbTkxYm1RNklHWjFibU4wYVc5dUlDaHdiR0ZqWlhNcElIdGNibHgwWEhSd2JHRmpaWE1nUFNCTllYUm9MbTFoZUNod2JHRmpaWE1nZkh3Z01Dd2dNQ2s3WEc1Y2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaDBhR2x6TG1OdmJHOXlMbTFoY0NoeWIzVnVaRlJ2VUd4aFkyVW9jR3hoWTJWektTa3VZMjl1WTJGMEtIUm9hWE11ZG1Gc2NHaGhLU3dnZEdocGN5NXRiMlJsYkNrN1hHNWNkSDBzWEc1Y2JseDBZV3h3YUdFNklHWjFibU4wYVc5dUlDaDJZV3dwSUh0Y2JseDBYSFJwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUc1bGR5QkRiMnh2Y2loMGFHbHpMbU52Ykc5eUxtTnZibU5oZENoTllYUm9MbTFoZUNnd0xDQk5ZWFJvTG0xcGJpZ3hMQ0IyWVd3cEtTa3NJSFJvYVhNdWJXOWtaV3dwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQjBhR2x6TG5aaGJIQm9ZVHRjYmx4MGZTeGNibHh1WEhRdkx5QnlaMkpjYmx4MGNtVmtPaUJuWlhSelpYUW9KM0puWWljc0lEQXNJRzFoZUdadUtESTFOU2twTEZ4dVhIUm5jbVZsYmpvZ1oyVjBjMlYwS0NkeVoySW5MQ0F4TENCdFlYaG1iaWd5TlRVcEtTeGNibHgwWW14MVpUb2daMlYwYzJWMEtDZHlaMkluTENBeUxDQnRZWGhtYmlneU5UVXBLU3hjYmx4dVhIUm9kV1U2SUdkbGRITmxkQ2hiSjJoemJDY3NJQ2RvYzNZbkxDQW5hSE5zSnl3Z0oyaDNZaWNzSUNkb1kyY25YU3dnTUN3Z1puVnVZM1JwYjI0Z0tIWmhiQ2tnZXlCeVpYUjFjbTRnS0NoMllXd2dKU0F6TmpBcElDc2dNell3S1NBbElETTJNRHNnZlNrc0lDOHZJR1Z6YkdsdWRDMWthWE5oWW14bExXeHBibVVnWW5KaFkyVXRjM1I1YkdWY2JseHVYSFJ6WVhSMWNtRjBhVzl1YkRvZ1oyVjBjMlYwS0Nkb2Myd25MQ0F4TENCdFlYaG1iaWd4TURBcEtTeGNibHgwYkdsbmFIUnVaWE56T2lCblpYUnpaWFFvSjJoemJDY3NJRElzSUcxaGVHWnVLREV3TUNrcExGeHVYRzVjZEhOaGRIVnlZWFJwYjI1Mk9pQm5aWFJ6WlhRb0oyaHpkaWNzSURFc0lHMWhlR1p1S0RFd01Da3BMRnh1WEhSMllXeDFaVG9nWjJWMGMyVjBLQ2RvYzNZbkxDQXlMQ0J0WVhobWJpZ3hNREFwS1N4Y2JseHVYSFJqYUhKdmJXRTZJR2RsZEhObGRDZ25hR05uSnl3Z01Td2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RHZHlZWGs2SUdkbGRITmxkQ2duYUdObkp5d2dNaXdnYldGNFptNG9NVEF3S1Nrc1hHNWNibHgwZDJocGRHVTZJR2RsZEhObGRDZ25hSGRpSnl3Z01Td2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RIZGliR0ZqYXpvZ1oyVjBjMlYwS0Nkb2QySW5MQ0F5TENCdFlYaG1iaWd4TURBcEtTeGNibHh1WEhSamVXRnVPaUJuWlhSelpYUW9KMk50ZVdzbkxDQXdMQ0J0WVhobWJpZ3hNREFwS1N4Y2JseDBiV0ZuWlc1MFlUb2daMlYwYzJWMEtDZGpiWGxySnl3Z01Td2diV0Y0Wm00b01UQXdLU2tzWEc1Y2RIbGxiR3h2ZHpvZ1oyVjBjMlYwS0NkamJYbHJKeXdnTWl3Z2JXRjRabTRvTVRBd0tTa3NYRzVjZEdKc1lXTnJPaUJuWlhSelpYUW9KMk50ZVdzbkxDQXpMQ0J0WVhobWJpZ3hNREFwS1N4Y2JseHVYSFI0T2lCblpYUnpaWFFvSjNoNWVpY3NJREFzSUcxaGVHWnVLREV3TUNrcExGeHVYSFI1T2lCblpYUnpaWFFvSjNoNWVpY3NJREVzSUcxaGVHWnVLREV3TUNrcExGeHVYSFI2T2lCblpYUnpaWFFvSjNoNWVpY3NJRElzSUcxaGVHWnVLREV3TUNrcExGeHVYRzVjZEd3NklHZGxkSE5sZENnbmJHRmlKeXdnTUN3Z2JXRjRabTRvTVRBd0tTa3NYRzVjZEdFNklHZGxkSE5sZENnbmJHRmlKeXdnTVNrc1hHNWNkR0k2SUdkbGRITmxkQ2duYkdGaUp5d2dNaWtzWEc1Y2JseDBhMlY1ZDI5eVpEb2dablZ1WTNScGIyNGdLSFpoYkNrZ2UxeHVYSFJjZEdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2JtVjNJRU52Ykc5eUtIWmhiQ2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBjbVYwZFhKdUlHTnZiblpsY25SYmRHaHBjeTV0YjJSbGJGMHVhMlY1ZDI5eVpDaDBhR2x6TG1OdmJHOXlLVHRjYmx4MGZTeGNibHh1WEhSb1pYZzZJR1oxYm1OMGFXOXVJQ2gyWVd3cElIdGNibHgwWEhScFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaDJZV3dwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQmpiMnh2Y2xOMGNtbHVaeTUwYnk1b1pYZ29kR2hwY3k1eVoySW9LUzV5YjNWdVpDZ3BMbU52Ykc5eUtUdGNibHgwZlN4Y2JseHVYSFJ5WjJKT2RXMWlaWEk2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhSMllYSWdjbWRpSUQwZ2RHaHBjeTV5WjJJb0tTNWpiMnh2Y2p0Y2JseDBYSFJ5WlhSMWNtNGdLQ2h5WjJKYk1GMGdKaUF3ZUVaR0tTQThQQ0F4TmlrZ2ZDQW9LSEpuWWxzeFhTQW1JREI0UmtZcElEdzhJRGdwSUh3Z0tISm5ZbHN5WFNBbUlEQjRSa1lwTzF4dVhIUjlMRnh1WEc1Y2RHeDFiV2x1YjNOcGRIazZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFF2THlCb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5VVVpOVhRMEZITWpBdkkzSmxiR0YwYVhabGJIVnRhVzVoYm1ObFpHVm1YRzVjZEZ4MGRtRnlJSEpuWWlBOUlIUm9hWE11Y21kaUtDa3VZMjlzYjNJN1hHNWNibHgwWEhSMllYSWdiSFZ0SUQwZ1cxMDdYRzVjZEZ4MFptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQnlaMkl1YkdWdVozUm9PeUJwS3lzcElIdGNibHgwWEhSY2RIWmhjaUJqYUdGdUlEMGdjbWRpVzJsZElDOGdNalUxTzF4dVhIUmNkRngwYkhWdFcybGRJRDBnS0dOb1lXNGdQRDBnTUM0d016a3lPQ2tnUHlCamFHRnVJQzhnTVRJdU9USWdPaUJOWVhSb0xuQnZkeWdvS0dOb1lXNGdLeUF3TGpBMU5Ta2dMeUF4TGpBMU5Ta3NJREl1TkNrN1hHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJREF1TWpFeU5pQXFJR3gxYlZzd1hTQXJJREF1TnpFMU1pQXFJR3gxYlZzeFhTQXJJREF1TURjeU1pQXFJR3gxYlZzeVhUdGNibHgwZlN4Y2JseHVYSFJqYjI1MGNtRnpkRG9nWm5WdVkzUnBiMjRnS0dOdmJHOXlNaWtnZTF4dVhIUmNkQzh2SUdoMGRIQTZMeTkzZDNjdWR6TXViM0puTDFSU0wxZERRVWN5TUM4alkyOXVkSEpoYzNRdGNtRjBhVzlrWldaY2JseDBYSFIyWVhJZ2JIVnRNU0E5SUhSb2FYTXViSFZ0YVc1dmMybDBlU2dwTzF4dVhIUmNkSFpoY2lCc2RXMHlJRDBnWTI5c2IzSXlMbXgxYldsdWIzTnBkSGtvS1R0Y2JseHVYSFJjZEdsbUlDaHNkVzB4SUQ0Z2JIVnRNaWtnZTF4dVhIUmNkRngwY21WMGRYSnVJQ2hzZFcweElDc2dNQzR3TlNrZ0x5QW9iSFZ0TWlBcklEQXVNRFVwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQW9iSFZ0TWlBcklEQXVNRFVwSUM4Z0tHeDFiVEVnS3lBd0xqQTFLVHRjYmx4MGZTeGNibHh1WEhSc1pYWmxiRG9nWm5WdVkzUnBiMjRnS0dOdmJHOXlNaWtnZTF4dVhIUmNkSFpoY2lCamIyNTBjbUZ6ZEZKaGRHbHZJRDBnZEdocGN5NWpiMjUwY21GemRDaGpiMnh2Y2pJcE8xeHVYSFJjZEdsbUlDaGpiMjUwY21GemRGSmhkR2x2SUQ0OUlEY3VNU2tnZTF4dVhIUmNkRngwY21WMGRYSnVJQ2RCUVVFbk8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbGRIVnliaUFvWTI5dWRISmhjM1JTWVhScGJ5QStQU0EwTGpVcElEOGdKMEZCSnlBNklDY25PMXh1WEhSOUxGeHVYRzVjZEdselJHRnlhem9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJjZEM4dklGbEpVU0JsY1hWaGRHbHZiaUJtY205dElHaDBkSEE2THk4eU5IZGhlWE11YjNKbkx6SXdNVEF2WTJGc1kzVnNZWFJwYm1jdFkyOXNiM0l0WTI5dWRISmhjM1JjYmx4MFhIUjJZWElnY21kaUlEMGdkR2hwY3k1eVoySW9LUzVqYjJ4dmNqdGNibHgwWEhSMllYSWdlV2x4SUQwZ0tISm5ZbHN3WFNBcUlESTVPU0FySUhKbllsc3hYU0FxSURVNE55QXJJSEpuWWxzeVhTQXFJREV4TkNrZ0x5QXhNREF3TzF4dVhIUmNkSEpsZEhWeWJpQjVhWEVnUENBeE1qZzdYRzVjZEgwc1hHNWNibHgwYVhOTWFXZG9kRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFJjZEhKbGRIVnliaUFoZEdocGN5NXBjMFJoY21zb0tUdGNibHgwZlN4Y2JseHVYSFJ1WldkaGRHVTZJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFIyWVhJZ2NtZGlJRDBnZEdocGN5NXlaMklvS1R0Y2JseDBYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SURNN0lHa3JLeWtnZTF4dVhIUmNkRngwY21kaUxtTnZiRzl5VzJsZElEMGdNalUxSUMwZ2NtZGlMbU52Ykc5eVcybGRPMXh1WEhSY2RIMWNibHgwWEhSeVpYUjFjbTRnY21kaU8xeHVYSFI5TEZ4dVhHNWNkR3hwWjJoMFpXNDZJR1oxYm1OMGFXOXVJQ2h5WVhScGJ5a2dlMXh1WEhSY2RIWmhjaUJvYzJ3Z1BTQjBhR2x6TG1oemJDZ3BPMXh1WEhSY2RHaHpiQzVqYjJ4dmNsc3lYU0FyUFNCb2Myd3VZMjlzYjNKYk1sMGdLaUJ5WVhScGJ6dGNibHgwWEhSeVpYUjFjbTRnYUhOc08xeHVYSFI5TEZ4dVhHNWNkR1JoY210bGJqb2dablZ1WTNScGIyNGdLSEpoZEdsdktTQjdYRzVjZEZ4MGRtRnlJR2h6YkNBOUlIUm9hWE11YUhOc0tDazdYRzVjZEZ4MGFITnNMbU52Ykc5eVd6SmRJQzA5SUdoemJDNWpiMnh2Y2xzeVhTQXFJSEpoZEdsdk8xeHVYSFJjZEhKbGRIVnliaUJvYzJ3N1hHNWNkSDBzWEc1Y2JseDBjMkYwZFhKaGRHVTZJR1oxYm1OMGFXOXVJQ2h5WVhScGJ5a2dlMXh1WEhSY2RIWmhjaUJvYzJ3Z1BTQjBhR2x6TG1oemJDZ3BPMXh1WEhSY2RHaHpiQzVqYjJ4dmNsc3hYU0FyUFNCb2Myd3VZMjlzYjNKYk1WMGdLaUJ5WVhScGJ6dGNibHgwWEhSeVpYUjFjbTRnYUhOc08xeHVYSFI5TEZ4dVhHNWNkR1JsYzJGMGRYSmhkR1U2SUdaMWJtTjBhVzl1SUNoeVlYUnBieWtnZTF4dVhIUmNkSFpoY2lCb2Myd2dQU0IwYUdsekxtaHpiQ2dwTzF4dVhIUmNkR2h6YkM1amIyeHZjbHN4WFNBdFBTQm9jMnd1WTI5c2IzSmJNVjBnS2lCeVlYUnBienRjYmx4MFhIUnlaWFIxY200Z2FITnNPMXh1WEhSOUxGeHVYRzVjZEhkb2FYUmxiam9nWm5WdVkzUnBiMjRnS0hKaGRHbHZLU0I3WEc1Y2RGeDBkbUZ5SUdoM1lpQTlJSFJvYVhNdWFIZGlLQ2s3WEc1Y2RGeDBhSGRpTG1OdmJHOXlXekZkSUNzOUlHaDNZaTVqYjJ4dmNsc3hYU0FxSUhKaGRHbHZPMXh1WEhSY2RISmxkSFZ5YmlCb2QySTdYRzVjZEgwc1hHNWNibHgwWW14aFkydGxiam9nWm5WdVkzUnBiMjRnS0hKaGRHbHZLU0I3WEc1Y2RGeDBkbUZ5SUdoM1lpQTlJSFJvYVhNdWFIZGlLQ2s3WEc1Y2RGeDBhSGRpTG1OdmJHOXlXekpkSUNzOUlHaDNZaTVqYjJ4dmNsc3lYU0FxSUhKaGRHbHZPMXh1WEhSY2RISmxkSFZ5YmlCb2QySTdYRzVjZEgwc1hHNWNibHgwWjNKaGVYTmpZV3hsT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MEx5OGdhSFIwY0RvdkwyVnVMbmRwYTJsd1pXUnBZUzV2Y21jdmQybHJhUzlIY21GNWMyTmhiR1VqUTI5dWRtVnlkR2x1WjE5amIyeHZjbDkwYjE5bmNtRjVjMk5oYkdWY2JseDBYSFIyWVhJZ2NtZGlJRDBnZEdocGN5NXlaMklvS1M1amIyeHZjanRjYmx4MFhIUjJZWElnZG1Gc0lEMGdjbWRpV3pCZElDb2dNQzR6SUNzZ2NtZGlXekZkSUNvZ01DNDFPU0FySUhKbllsc3lYU0FxSURBdU1URTdYRzVjZEZ4MGNtVjBkWEp1SUVOdmJHOXlMbkpuWWloMllXd3NJSFpoYkN3Z2RtRnNLVHRjYmx4MGZTeGNibHh1WEhSbVlXUmxPaUJtZFc1amRHbHZiaUFvY21GMGFXOHBJSHRjYmx4MFhIUnlaWFIxY200Z2RHaHBjeTVoYkhCb1lTaDBhR2x6TG5aaGJIQm9ZU0F0SUNoMGFHbHpMblpoYkhCb1lTQXFJSEpoZEdsdktTazdYRzVjZEgwc1hHNWNibHgwYjNCaGNYVmxjam9nWm5WdVkzUnBiMjRnS0hKaGRHbHZLU0I3WEc1Y2RGeDBjbVYwZFhKdUlIUm9hWE11WVd4d2FHRW9kR2hwY3k1MllXeHdhR0VnS3lBb2RHaHBjeTUyWVd4d2FHRWdLaUJ5WVhScGJ5a3BPMXh1WEhSOUxGeHVYRzVjZEhKdmRHRjBaVG9nWm5WdVkzUnBiMjRnS0dSbFozSmxaWE1wSUh0Y2JseDBYSFIyWVhJZ2FITnNJRDBnZEdocGN5NW9jMndvS1R0Y2JseDBYSFIyWVhJZ2FIVmxJRDBnYUhOc0xtTnZiRzl5V3pCZE8xeHVYSFJjZEdoMVpTQTlJQ2hvZFdVZ0t5QmtaV2R5WldWektTQWxJRE0yTUR0Y2JseDBYSFJvZFdVZ1BTQm9kV1VnUENBd0lEOGdNell3SUNzZ2FIVmxJRG9nYUhWbE8xeHVYSFJjZEdoemJDNWpiMnh2Y2xzd1hTQTlJR2gxWlR0Y2JseDBYSFJ5WlhSMWNtNGdhSE5zTzF4dVhIUjlMRnh1WEc1Y2RHMXBlRG9nWm5WdVkzUnBiMjRnS0cxcGVHbHVRMjlzYjNJc0lIZGxhV2RvZENrZ2UxeHVYSFJjZEM4dklIQnZjblJsWkNCbWNtOXRJSE5oYzNNZ2FXMXdiR1Z0Wlc1MFlYUnBiMjRnYVc0Z1ExeHVYSFJjZEM4dklHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOXpZWE56TDJ4cFluTmhjM012WW14dllpOHdaVFppTkdFeU9EVXdNRGt5TXpVMllXRXpaV05sTURkak5tSXlORGxtTURJeU1XTmhZMlZrTDJaMWJtTjBhVzl1Y3k1amNIQWpUREl3T1Z4dVhIUmNkSFpoY2lCamIyeHZjakVnUFNCdGFYaHBia052Ykc5eUxuSm5ZaWdwTzF4dVhIUmNkSFpoY2lCamIyeHZjaklnUFNCMGFHbHpMbkpuWWlncE8xeHVYSFJjZEhaaGNpQndJRDBnZDJWcFoyaDBJRDA5UFNCMWJtUmxabWx1WldRZ1B5QXdMalVnT2lCM1pXbG5hSFE3WEc1Y2JseDBYSFIyWVhJZ2R5QTlJRElnS2lCd0lDMGdNVHRjYmx4MFhIUjJZWElnWVNBOUlHTnZiRzl5TVM1aGJIQm9ZU2dwSUMwZ1kyOXNiM0l5TG1Gc2NHaGhLQ2s3WEc1Y2JseDBYSFIyWVhJZ2R6RWdQU0FvS0NoM0lDb2dZU0E5UFQwZ0xURXBJRDhnZHlBNklDaDNJQ3NnWVNrZ0x5QW9NU0FySUhjZ0tpQmhLU2tnS3lBeEtTQXZJREl1TUR0Y2JseDBYSFIyWVhJZ2R6SWdQU0F4SUMwZ2R6RTdYRzVjYmx4MFhIUnlaWFIxY200Z1EyOXNiM0l1Y21kaUtGeHVYSFJjZEZ4MFhIUjNNU0FxSUdOdmJHOXlNUzV5WldRb0tTQXJJSGN5SUNvZ1kyOXNiM0l5TG5KbFpDZ3BMRnh1WEhSY2RGeDBYSFIzTVNBcUlHTnZiRzl5TVM1bmNtVmxiaWdwSUNzZ2R6SWdLaUJqYjJ4dmNqSXVaM0psWlc0b0tTeGNibHgwWEhSY2RGeDBkekVnS2lCamIyeHZjakV1WW14MVpTZ3BJQ3NnZHpJZ0tpQmpiMnh2Y2pJdVlteDFaU2dwTEZ4dVhIUmNkRngwWEhSamIyeHZjakV1WVd4d2FHRW9LU0FxSUhBZ0t5QmpiMnh2Y2pJdVlXeHdhR0VvS1NBcUlDZ3hJQzBnY0NrcE8xeHVYSFI5WEc1OU8xeHVYRzR2THlCdGIyUmxiQ0JqYjI1MlpYSnphVzl1SUcxbGRHaHZaSE1nWVc1a0lITjBZWFJwWXlCamIyNXpkSEoxWTNSdmNuTmNiazlpYW1WamRDNXJaWGx6S0dOdmJuWmxjblFwTG1admNrVmhZMmdvWm5WdVkzUnBiMjRnS0cxdlpHVnNLU0I3WEc1Y2RHbG1JQ2h6YTJsd2NHVmtUVzlrWld4ekxtbHVaR1Y0VDJZb2JXOWtaV3dwSUNFOVBTQXRNU2tnZTF4dVhIUmNkSEpsZEhWeWJqdGNibHgwZlZ4dVhHNWNkSFpoY2lCamFHRnVibVZzY3lBOUlHTnZiblpsY25SYmJXOWtaV3hkTG1Ob1lXNXVaV3h6TzF4dVhHNWNkQzh2SUdOdmJuWmxjbk5wYjI0Z2JXVjBhRzlrYzF4dVhIUkRiMnh2Y2k1d2NtOTBiM1I1Y0dWYmJXOWtaV3hkSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RHbG1JQ2gwYUdsekxtMXZaR1ZzSUQwOVBTQnRiMlJsYkNrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUc1bGR5QkRiMnh2Y2loMGFHbHpLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ2tnZTF4dVhIUmNkRngwY21WMGRYSnVJRzVsZHlCRGIyeHZjaWhoY21kMWJXVnVkSE1zSUcxdlpHVnNLVHRjYmx4MFhIUjlYRzVjYmx4MFhIUjJZWElnYm1WM1FXeHdhR0VnUFNCMGVYQmxiMllnWVhKbmRXMWxiblJ6VzJOb1lXNXVaV3h6WFNBOVBUMGdKMjUxYldKbGNpY2dQeUJqYUdGdWJtVnNjeUE2SUhSb2FYTXVkbUZzY0doaE8xeHVYSFJjZEhKbGRIVnliaUJ1WlhjZ1EyOXNiM0lvWVhOelpYSjBRWEp5WVhrb1kyOXVkbVZ5ZEZ0MGFHbHpMbTF2WkdWc1hWdHRiMlJsYkYwdWNtRjNLSFJvYVhNdVkyOXNiM0lwS1M1amIyNWpZWFFvYm1WM1FXeHdhR0VwTENCdGIyUmxiQ2s3WEc1Y2RIMDdYRzVjYmx4MEx5OGdKM04wWVhScFl5Y2dZMjl1YzNSeWRXTjBhVzl1SUcxbGRHaHZaSE5jYmx4MFEyOXNiM0piYlc5a1pXeGRJRDBnWm5WdVkzUnBiMjRnS0dOdmJHOXlLU0I3WEc1Y2RGeDBhV1lnS0hSNWNHVnZaaUJqYjJ4dmNpQTlQVDBnSjI1MWJXSmxjaWNwSUh0Y2JseDBYSFJjZEdOdmJHOXlJRDBnZW1WeWIwRnljbUY1S0Y5emJHbGpaUzVqWVd4c0tHRnlaM1Z0Wlc1MGN5a3NJR05vWVc1dVpXeHpLVHRjYmx4MFhIUjlYRzVjZEZ4MGNtVjBkWEp1SUc1bGR5QkRiMnh2Y2loamIyeHZjaXdnYlc5a1pXd3BPMXh1WEhSOU8xeHVmU2s3WEc1Y2JtWjFibU4wYVc5dUlISnZkVzVrVkc4b2JuVnRMQ0J3YkdGalpYTXBJSHRjYmx4MGNtVjBkWEp1SUU1MWJXSmxjaWh1ZFcwdWRHOUdhWGhsWkNod2JHRmpaWE1wS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnY205MWJtUlViMUJzWVdObEtIQnNZV05sY3lrZ2UxeHVYSFJ5WlhSMWNtNGdablZ1WTNScGIyNGdLRzUxYlNrZ2UxeHVYSFJjZEhKbGRIVnliaUJ5YjNWdVpGUnZLRzUxYlN3Z2NHeGhZMlZ6S1R0Y2JseDBmVHRjYm4xY2JseHVablZ1WTNScGIyNGdaMlYwYzJWMEtHMXZaR1ZzTENCamFHRnVibVZzTENCdGIyUnBabWxsY2lrZ2UxeHVYSFJ0YjJSbGJDQTlJRUZ5Y21GNUxtbHpRWEp5WVhrb2JXOWtaV3dwSUQ4Z2JXOWtaV3dnT2lCYmJXOWtaV3hkTzF4dVhHNWNkRzF2WkdWc0xtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHMHBJSHRjYmx4MFhIUW9iR2x0YVhSbGNuTmJiVjBnZkh3Z0tHeHBiV2wwWlhKelcyMWRJRDBnVzEwcEtWdGphR0Z1Ym1Wc1hTQTlJRzF2WkdsbWFXVnlPMXh1WEhSOUtUdGNibHh1WEhSdGIyUmxiQ0E5SUcxdlpHVnNXekJkTzF4dVhHNWNkSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9kbUZzS1NCN1hHNWNkRngwZG1GeUlISmxjM1ZzZER0Y2JseHVYSFJjZEdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0tTQjdYRzVjZEZ4MFhIUnBaaUFvYlc5a2FXWnBaWElwSUh0Y2JseDBYSFJjZEZ4MGRtRnNJRDBnYlc5a2FXWnBaWElvZG1Gc0tUdGNibHgwWEhSY2RIMWNibHh1WEhSY2RGeDBjbVZ6ZFd4MElEMGdkR2hwYzF0dGIyUmxiRjBvS1R0Y2JseDBYSFJjZEhKbGMzVnNkQzVqYjJ4dmNsdGphR0Z1Ym1Wc1hTQTlJSFpoYkR0Y2JseDBYSFJjZEhKbGRIVnliaUJ5WlhOMWJIUTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVnpkV3gwSUQwZ2RHaHBjMXR0YjJSbGJGMG9LUzVqYjJ4dmNsdGphR0Z1Ym1Wc1hUdGNibHgwWEhScFppQW9iVzlrYVdacFpYSXBJSHRjYmx4MFhIUmNkSEpsYzNWc2RDQTlJRzF2WkdsbWFXVnlLSEpsYzNWc2RDazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUhKbGMzVnNkRHRjYmx4MGZUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2JXRjRabTRvYldGNEtTQjdYRzVjZEhKbGRIVnliaUJtZFc1amRHbHZiaUFvZGlrZ2UxeHVYSFJjZEhKbGRIVnliaUJOWVhSb0xtMWhlQ2d3TENCTllYUm9MbTFwYmlodFlYZ3NJSFlwS1R0Y2JseDBmVHRjYm4xY2JseHVablZ1WTNScGIyNGdZWE56WlhKMFFYSnlZWGtvZG1Gc0tTQjdYRzVjZEhKbGRIVnliaUJCY25KaGVTNXBjMEZ5Y21GNUtIWmhiQ2tnUHlCMllXd2dPaUJiZG1Gc1hUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2VtVnliMEZ5Y21GNUtHRnljaXdnYkdWdVozUm9LU0I3WEc1Y2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2diR1Z1WjNSb095QnBLeXNwSUh0Y2JseDBYSFJwWmlBb2RIbHdaVzltSUdGeWNsdHBYU0FoUFQwZ0oyNTFiV0psY2ljcElIdGNibHgwWEhSY2RHRnljbHRwWFNBOUlEQTdYRzVjZEZ4MGZWeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlHRnljanRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQkRiMnh2Y2p0Y2JpSXNJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNGdhWE5CY25KaGVXbHphQ2h2WW1vcElIdGNibHgwYVdZZ0tDRnZZbW9nZkh3Z2RIbHdaVzltSUc5aWFpQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JseDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNWNkSDFjYmx4dVhIUnlaWFIxY200Z2IySnFJR2x1YzNSaGJtTmxiMllnUVhKeVlYa2dmSHdnUVhKeVlYa3VhWE5CY25KaGVTaHZZbW9wSUh4OFhHNWNkRngwS0c5aWFpNXNaVzVuZEdnZ1BqMGdNQ0FtSmlBb2IySnFMbk53YkdsalpTQnBibk4wWVc1alpXOW1JRVoxYm1OMGFXOXVJSHg4WEc1Y2RGeDBYSFFvVDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVJHVnpZM0pwY0hSdmNpaHZZbW9zSUNodlltb3ViR1Z1WjNSb0lDMGdNU2twSUNZbUlHOWlhaTVqYjI1emRISjFZM1J2Y2k1dVlXMWxJQ0U5UFNBblUzUnlhVzVuSnlrcEtUdGNibjA3WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJwYzBGeWNtRjVhWE5vSUQwZ2NtVnhkV2x5WlNnbmFYTXRZWEp5WVhscGMyZ25LVHRjYmx4dWRtRnlJR052Ym1OaGRDQTlJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNWpiMjVqWVhRN1hHNTJZWElnYzJ4cFkyVWdQU0JCY25KaGVTNXdjbTkwYjNSNWNHVXVjMnhwWTJVN1hHNWNiblpoY2lCemQybDZlbXhsSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbWRXNWpkR2x2YmlCemQybDZlbXhsS0dGeVozTXBJSHRjYmx4MGRtRnlJSEpsYzNWc2RITWdQU0JiWFR0Y2JseHVYSFJtYjNJZ0tIWmhjaUJwSUQwZ01Dd2diR1Z1SUQwZ1lYSm5jeTVzWlc1bmRHZzdJR2tnUENCc1pXNDdJR2tyS3lrZ2UxeHVYSFJjZEhaaGNpQmhjbWNnUFNCaGNtZHpXMmxkTzF4dVhHNWNkRngwYVdZZ0tHbHpRWEp5WVhscGMyZ29ZWEpuS1NrZ2UxeHVYSFJjZEZ4MEx5OGdhSFIwY0RvdkwycHpjR1Z5Wmk1amIyMHZhbUYyWVhOamNtbHdkQzFoY25KaGVTMWpiMjVqWVhRdGRuTXRjSFZ6YUM4NU9GeHVYSFJjZEZ4MGNtVnpkV3gwY3lBOUlHTnZibU5oZEM1allXeHNLSEpsYzNWc2RITXNJSE5zYVdObExtTmhiR3dvWVhKbktTazdYRzVjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEhKbGMzVnNkSE11Y0hWemFDaGhjbWNwTzF4dVhIUmNkSDFjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJ5WlhOMWJIUnpPMXh1ZlR0Y2JseHVjM2RwZW5wc1pTNTNjbUZ3SUQwZ1puVnVZM1JwYjI0Z0tHWnVLU0I3WEc1Y2RISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MGNtVjBkWEp1SUdadUtITjNhWHA2YkdVb1lYSm5kVzFsYm5SektTazdYRzVjZEgwN1hHNTlPMXh1SWl3aWFXMXdiM0owSUhzZ1JHRjBZVXhwYzNSSmRHVnRMQ0JEYUdGdWJtVnNSblZ1WXlCOUlHWnliMjBnSnk0dUwyUmxabWx1YVhScGIyNXpKMXh1YVcxd2IzSjBJRTFoY210bGNuTk1ZWGxsY2l3Z2UxeHVJQ0JOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6TEZ4dUlDQk5ZWEpyWlhKelNHVmhkRXhoZVdWeVQzQjBhVzl1Y3l4Y2JuMGdabkp2YlNBbkxpNHZiV0Z5YTJWeUwwMWhjbXRsY25OTVlYbGxjaWRjYmx4dWFXNTBaWEptWVdObElFUjVibUZ0YVdOSVpXRjBUR0Y1WlhKUGNIUnBiMjV6SUdWNGRHVnVaSE1nVFdGeWEyVnljMGhsWVhSTVlYbGxjazl3ZEdsdmJuTWdlMXh1SUNBdktpb2c1cGl2NVpDbTViNnE1NDZ2NXBLdDVwUytJQ292WEc0Z0lHeHZiM0E2SUdKdmIyeGxZVzVjYmlBZ0x5b3FJT2FZcitXUXB1aUhxdVdLcU9hU3JlYVV2aUFxTDF4dUlDQmhkWFJ2T2lCaWIyOXNaV0Z1WEc0Z0lDOHFLaURwbDdUcG1wVG1sN2JwbDdRZ0tpOWNiaUFnYVc1MFpYSjJZV3c2SUc1MWJXSmxjbHh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJFZVc1aGJXbGpTR1ZoZEV4aGVXVnlJSHRjYmlBZ0x5b3FJT1c5aytXSmplYVNyZWFVdnVXSXNPZXNyT1dIb09hdHBTQXFMMXh1SUNCd2NtbDJZWFJsSUdOMWNuSmxiblJUZEdWd09pQnVkVzFpWlhKY2JseHVJQ0J3Y21sMllYUmxJRzFoY0RvZ1RDNU5ZWEJjYmlBZ2NISnBkbUYwWlNCa2VXNWhiV2xqUkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRXMTFjYmlBZ2NISnBkbUYwWlNCdmNIUnBiMjV6T2lCRWVXNWhiV2xqU0dWaGRFeGhlV1Z5VDNCMGFXOXVjMXh1SUNCd2NtbDJZWFJsSUdOb1lXNXVaV3hHZFc1ak9pQkRhR0Z1Ym1Wc1JuVnVZMXh1SUNCd2NtbDJZWFJsSUd4aGVXVnlPaUJOWVhKclpYSnpUR0Y1WlhKY2JpQWdjSEpwZG1GMFpTQnBjMUJoZFhObE9pQmliMjlzWldGdVhHNGdJR052Ym5OMGNuVmpkRzl5S0Z4dUlDQWdJRzFoY0RvZ1RDNU5ZWEFzWEc0Z0lDQWdaSGx1WVcxcFkwUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFZ0ZExGeHVJQ0FnSUc5d2RHbHZibk02SUVSNWJtRnRhV05JWldGMFRHRjVaWEpQY0hScGIyNXpMRnh1SUNBZ0lHTm9ZVzV1Wld4R2RXNWpPaUJEYUdGdWJtVnNSblZ1WTF4dUlDQXBJSHRjYmlBZ0lDQnBaaUFvSVVGeWNtRjVMbWx6UVhKeVlYa29aSGx1WVcxcFkwUmhkR0ZNYVhOMEtTQjhmQ0JrZVc1aGJXbGpSR0YwWVV4cGMzUXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWUdSaGRHRk1hWE4wSU9XL2hlbWh1K2FZcittZG51ZXB1dWFWc09lN2hHQXBYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViV0Z3SUQwZ2JXRndYRzRnSUNBZ2RHaHBjeTVrZVc1aGJXbGpSR0YwWVV4cGMzUWdQU0JrZVc1aGJXbGpSR0YwWVV4cGMzUmNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTWdQU0J2Y0hScGIyNXpYRzRnSUNBZ2RHaHBjeTVqYUdGdWJtVnNSblZ1WXlBOUlHTm9ZVzV1Wld4R2RXNWpYRzRnSUNBZ2RHaHBjeTVqZFhKeVpXNTBVM1JsY0NBOUlEQmNiaUFnSUNCMGFHbHpMbWx6VUdGMWMyVWdQU0IwY25WbFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhKbGMzUmhjblFvS1NCN1hHNGdJQ0FnZEdocGN5NXBjMUJoZFhObElEMGdabUZzYzJWY2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5SVGRHVndJRDBnTUZ4dUlDQWdJSFJvYVhNdVoyOTBiMU4wWlhBb2RHaHBjeTVqZFhKeVpXNTBVM1JsY0NsY2JpQWdJQ0IwYUdsekxuTjBZWEowS0NsY2JpQWdmVnh1SUNCd2RXSnNhV01nYzNSaGNuUW9LU0I3WEc0Z0lDQWdkR2hwY3k1cGMxQmhkWE5sSUQwZ1ptRnNjMlZjYmlBZ0lDQnBaaUFvSVhSb2FYTXViM0IwYVc5dWN5NWhkWFJ2S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQjlYRzRnSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9kR2hwY3k1cGMxQmhkWE5sS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnTHlvcUlPYVNyZWFVdnVXdWpPYXZsU0FxTDF4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11WTNWeWNtVnVkRk4wWlhBZ1BqMGdkR2hwY3k1a2VXNWhiV2xqUkdGMFlVeHBjM1F1YkdWdVozUm9JQzBnTVNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvSVhSb2FYTXViM0IwYVc5dWN5NXNiMjl3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1eVpYTjBZWEowS0NsY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRGTjBaWEFySzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWR2ZEc5VGRHVndLSFJvYVhNdVkzVnljbVZ1ZEZOMFpYQXBYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblFvS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzSUhSb2FYTXViM0IwYVc5dWN5NXBiblJsY25aaGJDbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ2NHRjFjMlVvS1NCN1hHNGdJQ0FnZEdocGN5NXBjMUJoZFhObElEMGdkSEoxWlZ4dUlDQjlYRzRnSUhCMVlteHBZeUJ3Y21WMktDa2dlMXh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkRk4wWlhBdExWeHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRGTjBaWEFnUFZ4dUlDQWdJQ0FnS0hSb2FYTXVZM1Z5Y21WdWRGTjBaWEFnS3lCMGFHbHpMbVI1Ym1GdGFXTkVZWFJoVEdsemRDNXNaVzVuZEdncElDVmNiaUFnSUNBZ0lIUm9hWE11WkhsdVlXMXBZMFJoZEdGTWFYTjBMbXhsYm1kMGFGeHVJQ0FnSUhSb2FYTXVaMjkwYjFOMFpYQW9kR2hwY3k1amRYSnlaVzUwVTNSbGNDbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ2JtVjRkQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5SVGRHVndLeXRjYmlBZ0lDQjBhR2x6TG1OMWNuSmxiblJUZEdWd0lEMGdkR2hwY3k1amRYSnlaVzUwVTNSbGNDQWxJSFJvYVhNdVpIbHVZVzFwWTBSaGRHRk1hWE4wTG14bGJtZDBhRnh1SUNBZ0lIUm9hWE11WjI5MGIxTjBaWEFvZEdocGN5NWpkWEp5Wlc1MFUzUmxjQ2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMjkwYjFOMFpYQW9jM1JsY0RvZ2JuVnRZbVZ5S1NCN1hHNGdJQ0FnYVdZZ0tITjBaWEFnUENBd0lIeDhJSE4wWlhBZ1BqMGdkR2hwY3k1a2VXNWhiV2xqUkdGMFlVeHBjM1F1YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9ZR2R2ZEc5VGRHVndLQ1I3YzNSbGNIMHBPaUJ6ZEdWd0lHbHpJRzkxZENCdlppQnBibVJsZUNCZ0tWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxteGhlV1Z5TG5ObGRFUmhkR0VvZEdocGN5NWtlVzVoYldsalJHRjBZVXhwYzNSYmMzUmxjRjBwWEc0Z0lDQWdkR2hwY3k1c1lYbGxjaTVrY21GM0tDbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1pISmhkeWh2Y0hScGIyNXpQem9nUkhsdVlXMXBZMGhsWVhSTVlYbGxjazl3ZEdsdmJuTXBJSHRjYmlBZ0lDQjBhR2x6TG1sdWFYUlBjSFJwYjI1ektHOXdkR2x2Ym5NcFhHNGdJQ0FnZEdocGN5NXBibWwwVEdGNVpYSW9LVnh1SUNBZ0lIUm9hWE11YkdGNVpYSXVaSEpoZHlncFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhOY2JpQWdmVnh1SUNCd2RXSnNhV01nWm1sMFFtOTFibVJ6S0NrZ2UxeHVJQ0FnSUhSb2FYTXViR0Y1WlhJdVptbDBRbTkxYm1SektDbGNiaUFnZlZ4dUlDQndjbWwyWVhSbElHbHVhWFJQY0hScGIyNXpLRzl3ZEdsdmJuTS9PaUJFZVc1aGJXbGpTR1ZoZEV4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9YRzRnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJR3h2YjNBNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNCaGRYUnZPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdhVzUwWlhKMllXdzZJREV3TURBc1hHNGdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ2RHaHBjeTV2Y0hScGIyNXpMRnh1SUNBZ0lDQWdiM0IwYVc5dWMxeHVJQ0FnSUNsY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdsdWFYUk1ZWGxsY2lncElIdGNiaUFnSUNCamIyNXpkQ0J0WVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6T2lCTllYSnJaWEp6VEdGNVpYSlBjSFJwYjI1eklEMGdlMXh1SUNBZ0lDQWdjbVZ1WkdWeVZIbHdaVG9nSjJobFlYUW5MRnh1SUNBZ0lDQWdhR1ZoZEU5d2RHbHZibk02SUhSb2FYTXViM0IwYVc5dWN5eGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXNZWGxsY2lBOUlHNWxkeUJOWVhKclpYSnpUR0Y1WlhJb1hHNGdJQ0FnSUNCMGFHbHpMbTFoY0N4Y2JpQWdJQ0FnSUhSb2FYTXVaSGx1WVcxcFkwUmhkR0ZNYVhOMFd6QmRMRnh1SUNBZ0lDQWdiV0Z5YTJWeWMweGhlV1Z5VDNCMGFXOXVjeXhjYmlBZ0lDQWdJSFJvYVhNdVkyaGhibTVsYkVaMWJtTmNiaUFnSUNBcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWJHRjVaWEpjYmlBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUUxaGNtdGxjaUJtY205dElDY3VMMjFoY210bGNpOU5ZWEpyWlhJblhHNXBiWEJ2Y25RZ1RXRnlhMlZ5YzB4aGVXVnlJR1p5YjIwZ0p5NHZiV0Z5YTJWeUwwMWhjbXRsY25OTVlYbGxjaWRjYm1sdGNHOXlkQ0JOWVhKclpYSnpRblZtWm1WeVRHRjVaWElnWm5KdmJTQW5MaTl0WVhKclpYSXZUV0Z5YTJWeWMwSjFabVpsY2t4aGVXVnlKMXh1YVcxd2IzSjBJRkJ2Ykhsc2FXNWxJR1p5YjIwZ0p5NHZjRzlzZVd4cGJtVXZVRzlzZVd4cGJtVW5YRzVwYlhCdmNuUWdVRzlzZVd4cGJtVnpUR0Y1WlhJZ1puSnZiU0FuTGk5d2IyeDViR2x1WlM5UWIyeDViR2x1WlhOTVlYbGxjaWRjYm1sdGNHOXlkQ0JRYjJ4NWJHbHVaWE5DZFdabVpYSk1ZWGxsY2lCbWNtOXRJQ2N1TDNCdmJIbHNhVzVsTDFCdmJIbHNhVzVsYzBKMVptWmxja3hoZVdWeUoxeHVhVzF3YjNKMElGQnZiSGxuYjI0Z1puSnZiU0FuTGk5d2IyeDVaMjl1TDFCdmJIbG5iMjRuWEc1cGJYQnZjblFnVUc5c2VXZHZibk5NWVhsbGNpQm1jbTl0SUNjdUwzQnZiSGxuYjI0dlVHOXNlV2R2Ym5OTVlYbGxjaWRjYm1sdGNHOXlkQ0JIY21sa2MweGhlV1Z5SUdaeWIyMGdKeTR2Y0c5c2VXZHZiaTlIY21sa2MweGhlV1Z5SjF4dWFXMXdiM0owSUVSNWJtRnRhV05JWldGMFRHRjVaWElnWm5KdmJTQW5MaTlrZVc1aGJXbGpTR1ZoZEV4aGVXVnlMMFI1Ym1GdGFXTklaV0YwVEdGNVpYSW5YRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ1RXRnlhMlZ5TEZ4dUlDQk5ZWEpyWlhKelRHRjVaWElzWEc0Z0lFMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNpeGNiaUFnVUc5c2VXeHBibVVzWEc0Z0lGQnZiSGxzYVc1bGMweGhlV1Z5TEZ4dUlDQlFiMng1YkdsdVpYTkNkV1ptWlhKTVlYbGxjaXhjYmlBZ1VHOXNlV2R2Yml4Y2JpQWdVRzlzZVdkdmJuTk1ZWGxsY2l4Y2JpQWdSM0pwWkhOTVlYbGxjaXhjYmlBZ1JIbHVZVzFwWTBobFlYUk1ZWGxsY2l4Y2JuMWNibVY0Y0c5eWRDQjdYRzRnSUUxaGNtdGxjaXhjYmlBZ1RXRnlhMlZ5YzB4aGVXVnlMRnh1SUNCTllYSnJaWEp6UW5WbVptVnlUR0Y1WlhJc1hHNGdJRkJ2Ykhsc2FXNWxMRnh1SUNCUWIyeDViR2x1WlhOTVlYbGxjaXhjYmlBZ1VHOXNlV3hwYm1WelFuVm1abVZ5VEdGNVpYSXNYRzRnSUZCdmJIbG5iMjRzWEc0Z0lGQnZiSGxuYjI1elRHRjVaWElzWEc0Z0lFZHlhV1J6VEdGNVpYSXNYRzRnSUVSNWJtRnRhV05JWldGMFRHRjVaWElzWEc1OVhHNGlMQ0pwYlhCdmNuUWdleUJFWVhSaFRHbHpkRWwwWlcwZ2ZTQm1jbTl0SUNjdUxpOWtaV1pwYm1sMGFXOXVjeWRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdUV0Z5YTJWeUlHVjRkR1Z1WkhNZ1RDNU5ZWEpyWlhJZ2UxeHVJQ0F2THlCMGMyeHBiblE2WkdsellXSnNaUzF1WlhoMExXeHBibVU2ZG1GeWFXRmliR1V0Ym1GdFpWeHVJQ0J3Y21sMllYUmxJRjlmWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0WEc0Z0lHTnZibk4wY25WamRHOXlLR3hoZEd4dVp6b2dUQzVNWVhSTWJtZEZlSEJ5WlhOemFXOXVMQ0J2Y0hScGIyNXpQem9nVEM1TllYSnJaWEpQY0hScGIyNXpLU0I3WEc0Z0lDQWdjM1Z3WlhJb2JHRjBiRzVuTENCdmNIUnBiMjV6S1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ6WlhSRVlYUmhLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2tnZTF4dUlDQWdJSFJvYVhNdVgxOWtZWFJoSUQwZ1pHRjBZVnh1SUNCOVhHNGdJSEIxWW14cFl5Qm5aWFJFWVhSaEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlmWkdGMFlWeHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdleUJFWVhSaFRHbHpkRWwwWlcwc0lFTm9ZVzV1Wld4R2RXNWpJSDBnWm5KdmJTQW5MaTR2WkdWbWFXNXBkR2x2Ym5NblhHNXBiWEJ2Y25RZ1RXRnlhMlZ5YzB4aGVXVnlMQ0I3SUUxaGNtdGxjbk5NWVhsbGNrOXdkR2x2Ym5NZ2ZTQm1jbTl0SUNjdUwwMWhjbXRsY25OTVlYbGxjaWRjYm1sdGNHOXlkQ0I3SUc5d2RHbHZibk5OWlhKblpTQjlJR1p5YjIwZ0p5NHVMM1YwYVd4ekwybHVaR1Y0SjF4dWFXNTBaWEptWVdObElFMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNrOXdkR2x2Ym5NZ1pYaDBaVzVrY3lCTllYSnJaWEp6VEdGNVpYSlBjSFJwYjI1eklIdGNiaUFnWW5WbVptVnlWRzl2YkhScGNFRjBkSEk2SUhOMGNtbHVaMXh1SUNCaWRXWm1aWEpQY0hScGIyNXpPaUJNTGtOcGNtTnNaVTFoY210bGNrOXdkR2x2Ym5OY2JuMWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUUxaGNtdGxjbk5DZFdabVpYSk1ZWGxsY2lCbGVIUmxibVJ6SUUxaGNtdGxjbk5NWVhsbGNpQjdYRzRnSUhCMVlteHBZeUJ2Y0hScGIyNXpPaUJOWVhKclpYSnpRblZtWm1WeVRHRjVaWEpQY0hScGIyNXpYRzRnSUhCeWFYWmhkR1VnWW5WbVptVnlUR0Y1WlhJNklFd3VUR0Y1WlhKSGNtOTFjRnh1SUNCamIyNXpkSEoxWTNSdmNpaGNiaUFnSUNCdFlYQTZJRXd1VFdGd0xGeHVJQ0FnSUdSaGRHRk1hWE4wT2lCRVlYUmhUR2x6ZEVsMFpXMWJYU3hjYmlBZ0lDQnZjSFJwYjI1ek9pQk5ZWEpyWlhKelFuVm1abVZ5VEdGNVpYSlBjSFJwYjI1ekxGeHVJQ0FnSUdOb1lXNXVaV3hHZFc1ak9pQkRhR0Z1Ym1Wc1JuVnVZMXh1SUNBcElIdGNiaUFnSUNCemRYQmxjaWh0WVhBc0lHUmhkR0ZNYVhOMExDQnZjSFJwYjI1ekxDQmphR0Z1Ym1Wc1JuVnVZeWxjYmlBZ0lDQjBhR2x6TG5SNWNHVWdQU0FuYldGeWEyVnlRblZtWm1WeUoxeHVJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUkNkV1ptWlhKUGNIUnBiMjV6T2lCTUxrTnBjbU5zWlUxaGNtdGxjazl3ZEdsdmJuTWdQU0I3WEc0Z0lDQWdJQ0J5WVdScGRYTTZJREV3TURBc1hHNGdJQ0FnSUNCemRISnZhMlU2SUhSeWRXVXNYRzRnSUNBZ0lDQjNaV2xuYUhRNklERXNYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTk5aWEpuWlNoY2JpQWdJQ0FnSUhSb2FYTXViM0IwYVc5dWN5eGNiaUFnSUNBZ0lIc2dZblZtWm1WeVQzQjBhVzl1Y3pvZ1pHVm1ZWFZzZEVKMVptWmxjazl3ZEdsdmJuTWdmU3hjYmlBZ0lDQWdJRXBUVDA0dWNHRnljMlVvU2xOUFRpNXpkSEpwYm1kcFpua29iM0IwYVc5dWN5a3BYRzRnSUNBZ0tTQmhjeUJOWVhKclpYSnpRblZtWm1WeVRHRjVaWEpQY0hScGIyNXpYRzRnSUgxY2JseHVJQ0J3ZFdKc2FXTWdaSEpoZHlodmNIUnBiMjV6UHpvZ1RXRnlhMlZ5YzBKMVptWmxja3hoZVdWeVQzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTk5aWEpuWlNoY2JpQWdJQ0FnSUhSb2FYTXViM0IwYVc5dWN5eGNiaUFnSUNBZ0lHOXdkR2x2Ym5OY2JpQWdJQ0FwSUdGeklFMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNrOXdkR2x2Ym5OY2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NdVluVm1abVZ5VDNCMGFXOXVjeTVqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1cFkyOXVRMjlzYjNKY2JpQWdJQ0IwYUdsekxtbHVhWFJOWVhKclpYSnpLQ2xjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNWNiaUFnY0hWaWJHbGpJSEpsWkhKaGR5Z3BJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXVkbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGFHbHpMbTFoY210bGNreGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1eVpXMXZkbVZNWVhsbGNpaDBhR2x6TG0xaGNtdGxja3hoZVdWeUtWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTVpZFdabVpYSk1ZWGxsY2lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWNtVnRiM1psVEdGNVpYSW9kR2hwY3k1aWRXWm1aWEpNWVhsbGNpbGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXRZWEpyWlhKTVlYbGxjaUE5SUhSb2FYTXVZMjl1Wm1sblRXRnlhMlZ5VEdGNVpYSW9LVnh1SUNBZ0lIUm9hWE11WW5WbVptVnlUR0Y1WlhJZ1BTQjBhR2x6TG1OdmJtWnBaMEoxWm1abGNreGhlV1Z5S0NsY2JseHVJQ0FnSUhSb2FYTXViR0Y1WlhJZ1BTQk1MbXhoZVdWeVIzSnZkWEFvS1Z4dUlDQWdJSFJvYVhNdWJHRjVaWEl1WVdSa1RHRjVaWElvZEdocGN5NXRZWEpyWlhKTVlYbGxjaWxjYmlBZ0lDQjBhR2x6TG14aGVXVnlMbUZrWkV4aGVXVnlLSFJvYVhNdVluVm1abVZ5VEdGNVpYSXBYRzVjYmlBZ0lDQjBhR2x6TG0xaGNDNWhaR1JNWVhsbGNpaDBhR2x6TG14aGVXVnlLVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpYRzRnSUgxY2JseHVJQ0J3ZFdKc2FXTWdaMlYwUW05MWJtUnpLQ2s2SUV3dVRHRjBURzVuUW05MWJtUnpSWGh3Y21WemMybHZiaUI3WEc0Z0lDQWdhV1lnS0hSb2FYTXViV0Z5YTJWeWN5NXNaVzVuZEdnZ1BEMGdNQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJXRndMbWRsZEVKdmRXNWtjeWdwWEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTFoY210bGNuTXVjbVZrZFdObEtDaHdjbVYyTENCamRYSnlLU0E5UGlCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnY0hKbGRpNWxlSFJsYm1Rb1hHNGdJQ0FnSUNBZ0lHTjFjbkl1WjJWMFRHRjBURzVuS0NrdWRHOUNiM1Z1WkhNb2RHaHBjeTV2Y0hScGIyNXpMbUoxWm1abGNrOXdkR2x2Ym5NdWNtRmthWFZ6S1Z4dUlDQWdJQ0FnS1Z4dUlDQWdJSDBzSUhSb2FYTXViV0Z5YTJWeWMxc3dYUzVuWlhSTVlYUk1ibWNvS1M1MGIwSnZkVzVrY3loMGFHbHpMbTl3ZEdsdmJuTXVZblZtWm1WeVQzQjBhVzl1Y3k1eVlXUnBkWE1wS1Z4dUlDQjlYRzVjYmlBZ2NISnBkbUYwWlNCamIyNW1hV2RDZFdabVpYSk1ZWGxsY2lncElIdGNiaUFnSUNCamIyNXpkQ0JuY205MWNFeGhlV1Z5SUQwZ1RDNXNZWGxsY2tkeWIzVndLQ2xjYmlBZ0lDQjBhR2x6TG0xaGNtdGxjbk11Wm05eVJXRmphQ2dvYldGeWEyVnlLU0E5UGlCN1hHNGdJQ0FnSUNCamIyNXpkQ0JqYVhKamJHVk1ZWGxsY2lBOUlFd3VZMmx5WTJ4bEtGeHVJQ0FnSUNBZ0lDQnRZWEpyWlhJdVoyVjBUR0YwVEc1bktDa3NYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzQjBhVzl1Y3k1aWRXWm1aWEpQY0hScGIyNXpYRzRnSUNBZ0lDQXBYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxtSjFabVpsY2xSdmIyeDBhWEJCZEhSeUtTQjdYRzRnSUNBZ0lDQWdJR05wY21Oc1pVeGhlV1Z5TG1KcGJtUlViMjlzZEdsd0tGeHVJQ0FnSUNBZ0lDQWdJQ2NuSUNzZ2JXRnlhMlZ5TG1kbGRFUmhkR0VvS1Z0MGFHbHpMbTl3ZEdsdmJuTXVZblZtWm1WeVZHOXZiSFJwY0VGMGRISmRYRzRnSUNBZ0lDQWdJQ2xjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSE4zYVhSamFDQW9kSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkemRISnBibWNuT2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMmx5WTJ4bFRHRjVaWEl1WW1sdVpGUnZiMngwYVhBb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNjbklDc2diV0Z5YTJWeUxtZGxkRVJoZEdFb0tWdDBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5WFZ4dUlDQWdJQ0FnSUNBZ0lDQWdLVnh1SUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3RjYmlBZ0lDQWdJQ0FnSUNCallYTmxJQ2R2WW1wbFkzUW5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kybHlZMnhsVEdGNVpYSXVZbWx1WkZSdmIyeDBhWEFvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ2NuSUNzZ2JXRnlhMlZ5TG1kbGRFUmhkR0VvS1Z0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlMblpoYkhWbFhWeHVJQ0FnSUNBZ0lDQWdJQ0FnS1Z4dUlDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQm5jbTkxY0V4aGVXVnlMbUZrWkV4aGVXVnlLR05wY21Oc1pVeGhlV1Z5S1Z4dUlDQWdJSDBwWEc0Z0lDQWdjbVYwZFhKdUlHZHliM1Z3VEdGNVpYSmNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJSHNnYkdsbmFIUmxiaXdnYjNCMGFXOXVjMDFsY21kbElIMGdabkp2YlNBbkxpNHZkWFJwYkhNdmFXNWtaWGduWEc1cGJYQnZjblFnZXlCRVlYUmhUR2x6ZEVsMFpXMHNJRU5vWVc1dVpXeEdkVzVqSUgwZ1puSnZiU0FuTGk0dlpHVm1hVzVwZEdsdmJuTW5YRzVwYlhCdmNuUWdUV0Z5YTJWeUlHWnliMjBnSnk0dlRXRnlhMlZ5SjF4dVhHNHZLaW9nNXJpeTVwK1Q1cUMzNWJ5UElPYVZvK2VDdVh6bmc2M2xpcHZsbTc0Z0tpOWNiblI1Y0dVZ1RXRnlhMlZ5YzB4aGVXVnlVbVZ1WkdWeVZIbHdaU0E5SUNkd2IybHVkQ2NnZkNBbmFHVmhkQ2NnZkNBblkyeDFjM1JsY2ljZ2ZDQW5ZblZpWW14bEoxeHVYRzR2S2lvZzVyaXk1cCtUNmFLYzZJbXk1cUMzNWJ5UElPV05sZWlKc256bGlJYm1yclY4NVlpRzU3RzdJQ292WEc1MGVYQmxJRTFoY210bGNuTk1ZWGxsY2xKbGJtUmxjbEJ2YVc1MFEyOXNiM0pVZVhCbElEMGdKM05wYm1kc1pTY2dmQ0FuYzJWbmJXVnVkR1ZrSnlCOElDZGpiR0Z6YzJsbWFXVmtKMXh1WEc0dktpb2c1cFdqNTRLNTVadSs1cUNINTdHNzVaNkxJR2xqYjI1bWIyNTBmSE4yWjN4cGJXRm5aU0FxTDF4dWRIbHdaU0JOWVhKclpYSnpUR0Y1WlhKSlkyOXVWSGx3WlNBOUlDZG1iMjUwWDJOc1lYTnpKeUI4SUNkMWJtbGpiMlJsSnlCOElDZHplVzFpYjJ3bklId2dKMmx0WVdkbEoxeHVYRzUwZVhCbElFMWhjbXRsY25OTVlYbGxjbEpsYm1SbGNrTnNkWE4wWlhKRGIyeHZjbFI1Y0dVZ1BTQW5jMmx1WjJ4bEp5QjhJQ2R6YldGeWRDZGNibHh1YVc1MFpYSm1ZV05sSUVsamIyNVNaVzVrWlhKR2RXNWpUM0IwYVc5dUlIdGNiaUFnYVdOdmJsTnBlbVU2SUZ0dWRXMWlaWElzSUc1MWJXSmxjbDFjYmlBZ2FXTnZia052Ykc5eU9pQnpkSEpwYm1kY2JuMWNiblI1Y0dVZ1NXTnZibEpsYm1SbGNrWjFibU1nUFNBb1hHNGdJR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU3hjYmlBZ2NHRnlZVzF6T2lCSlkyOXVVbVZ1WkdWeVJuVnVZMDl3ZEdsdmJseHVLU0E5UGlCemRISnBibWRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCTllYSnJaWEp6VEdGNVpYSlBjSFJwYjI1eklIdGNiaUFnY21WdVpHVnlWSGx3WlRvZ1RXRnlhMlZ5YzB4aGVXVnlVbVZ1WkdWeVZIbHdaVnh1SUNCeVpXNWtaWEpRYjJsdWRFTnZiRzl5Vkhsd1pUODZJRTFoY210bGNuTk1ZWGxsY2xKbGJtUmxjbEJ2YVc1MFEyOXNiM0pVZVhCbFhHNGdJR2xqYjI1VWVYQmxQem9nVFdGeWEyVnljMHhoZVdWeVNXTnZibFI1Y0dWY2JseHVJQ0JwWTI5dVNXMWhaMlZWY213L09pQnpkSEpwYm1kY2JpQWdhV052YmxOcGVtVS9PaUJiYm5WdFltVnlMQ0J1ZFcxaVpYSmRYRzRnSUdsamIyNURiR0Z6Y3o4NklITjBjbWx1WjF4dUlDQnBZMjl1Vlc1cFkyOWtaVDg2SUhOMGNtbHVaMXh1SUNCcFkyOXVVM2x0WW05c1B6b2djM1J5YVc1blhHNGdJR2xqYjI1RGIyeHZjajg2SUhOMGNtbHVaMXh1SUNCcFkyOXVRVzVqYUc5eVB6b2dXMjUxYldKbGNpd2diblZ0WW1WeVhWeHVJQ0JwWTI5dVVtVnVaR1Z5WlhJL09pQkpZMjl1VW1WdVpHVnlSblZ1WTF4dVhHNGdJR0oxWW1Kc1pVTnZiRzl5UVhSMGNqODZJSE4wY21sdVoxeHVJQ0JpZFdKaWJHVlRhWHBsUVhSMGNqODZJSE4wY21sdVoxeHVJQ0JpZFdKaWJHVlRkSEp2YTJWWGFXUjBhRDg2SUc1MWJXSmxjbHh1SUNCaWRXSmliR1ZUZEhKdmEyVkRiMnh2Y2o4NklITjBjbWx1WjF4dUlDQmlkV0ppYkdWRGIyeHZjbk0vT2lCemRISnBibWRiWFZ4dUlDQmlkV0ppYkdWVGFYcGxjejg2SUc1MWJXSmxjbHRkWEc0Z0lHSjFZbUpzWlZOMGNtOXJaVTl3WVdOcGRIay9PaUJ1ZFcxaVpYSmNiaUFnWW5WaVlteGxSbWxzYkU5d1lXTnBkSGsvT2lCdWRXMWlaWEpjYmx4dUlDQXZMeURtbUsvbGtLYm9nWnJsa0lqdnZJemt2SmpsaFlqbnVxZnBxNWprdW80Z2NtVnVaR1Z5Vkhsd1pTQTlQU0J3YjJsdWRGeHVJQ0JwYzBOc2RYTjBaWEkvT2lCaWIyOXNaV0Z1WEc0Z0lISmxibVJsY2tOc2RYTjBaWEpEYjJ4dmNsUjVjR1UvT2lCTllYSnJaWEp6VEdGNVpYSlNaVzVrWlhKRGJIVnpkR1Z5UTI5c2IzSlVlWEJsWEc1Y2JpQWdMeW9xSU9hWXIrV1FwdVd4bGVla3VpQndiM0IxY0NBcUwxeHVJQ0J3YjNCMWNEODZJR0p2YjJ4bFlXNWNiaUFnTHlvcUlPYVlyK1dRcHVXeGxlZWt1aUIwYjI5c2RHbHdJQ292WEc0Z0lIUnZiMngwYVhBL09pQmliMjlzWldGdVhHNGdJQzhxS2lCd2IzQjFjQ0Rsc1pYbnBMcmxyWmZtcnJVZ0tpOWNiaUFnY0c5d2RYQkJkSFJ5UHpvZ2MzUnlhVzVuSUh3Z2V5QnNZV0psYkRvZ2MzUnlhVzVuT3lCMllXeDFaVG9nWVc1NUlIMWNiaUFnTHlvcUlIUnZiMngwYVhBZzViR1Y1NlM2NWEyWDVxNjFJQ292WEc0Z0lIUnZiMngwYVhCQmRIUnlQem9nYzNSeWFXNW5YRzVjYmlBZ2IzQmhZMmwwZVQ4NklHNTFiV0psY2x4dVhHNGdJQzhxS2lEbGlJYm1yclhtdUxMbW41UG51NS9vcnFIbHJaZm1yclVnS2k5Y2JpQWdjMlZuYldWdWRHVmtRWFIwY2o4NklITjBjbWx1WjF4dUlDQnpaV2R0Wlc1MFpXUkRiMnh2Y25NL09pQnpkSEpwYm1kYlhWeHVYRzRnSUM4cUtpRGxpSWJuc2J2bG5vdm11TExtbjVQbnU1L29ycUhsclpmbXJyVWdLaTljYmlBZ1kyeGhjM05wWm1sbFpFRjBkSEkvT2lCemRISnBibWRjYmlBZ1kyeGhjM05wWm1sbFpFTnZiRzl5Y3o4NklITjBjbWx1WjF0ZFhHNWNiaUFnYUdWaGRFOXdkR2x2Ym5NL09pQk5ZWEpyWlhKelNHVmhkRXhoZVdWeVQzQjBhVzl1YzF4dUlDQmpiSFZ6ZEdWeVQzQjBhVzl1Y3o4NklFd3VUV0Z5YTJWeWMwTnNkWE4wWlhKUGNIUnBiMjV6WEc1OVhHNWNiaThxS2lEb3ZhemxqSmJrdUxybmc2M2xpcHZsbTc3bm1vUWdiM0IwYVc5dWN5QXFMMXh1Wlhod2IzSjBJR2x1ZEdWeVptRmpaU0JOWVhKclpYSnpTR1ZoZEV4aGVXVnlUM0IwYVc5dWN5QmxlSFJsYm1SeklFd3VTR1ZoZEV4aGVXVnlUM0IwYVc5dWN5QjdYRzRnSUdScGJXVnVjMmx2YmtGMGRISS9PaUJ6ZEhKcGJtZGNibjFjYmx4dVkyOXVjM1FnUkVWR1FWVk1WRjlEVDB4UFVpQTlJQ2NqTXpNNE9FWkdKMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1RXRnlhMlZ5YzB4aGVXVnlJSHRjYmlBZ2NIVmliR2xqSUcxaGNEb2dUQzVOWVhCY2JpQWdjSFZpYkdsaklHUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFZ4dUlDQndkV0pzYVdNZ2IzQjBhVzl1Y3pvZ1RXRnlhMlZ5YzB4aGVXVnlUM0IwYVc5dWMxeHVJQ0J3ZFdKc2FXTWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNWNiaUFnY0hWaWJHbGpJSFI1Y0dVNklITjBjbWx1WjF4dVhHNGdJSEJ5YjNSbFkzUmxaQ0J0WVhKclpYSnpPaUJOWVhKclpYSmJYVnh1WEc0Z0lIQnliM1JsWTNSbFpDQm1iMk4xYzJWa1RXRnlhMlZ5T2lCTllYSnJaWEpjYmlBZ2NISnZkR1ZqZEdWa0lHaHZkbVZ5WldSTllYSnJaWEk2SUUxaGNtdGxjbHh1SUNBdktpb2c2WnlBNkthQjViR1Y1NlM2NTVxRTVwUys1YVNuNTVxRTVadSs1cUNISUNvdlhHNGdJSEJ5YjNSbFkzUmxaQ0JtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2pvZ1RXRnlhMlZ5WEc0Z0lIQnliM1JsWTNSbFpDQnRZWEpyWlhKTVlYbGxjam9nVEM1RFlXNTJZWE5KWTI5dVRHRjVaWEpjYmx4dUlDQndjbTkwWldOMFpXUWdkbWx6YVdKc1pUb2dZbTl2YkdWaGJseHVJQ0J3Y205MFpXTjBaV1FnYkdGNVpYSTZYRzRnSUNBZ2ZDQk1Ma05oYm5aaGMwbGpiMjVNWVhsbGNseHVJQ0FnSUh3Z1RDNUlaV0YwVEdGNVpYSmNiaUFnSUNCOElFd3VUV0Z5YTJWeWMwTnNkWE4wWlhKY2JpQWdJQ0I4SUV3dVRHRjVaWEpIY205MWNGeHVJQ0J3Y205MFpXTjBaV1FnWkdWbVlYVnNkRTl3ZEdsdmJuTTZJRTFoY210bGNuTk1ZWGxsY2s5d2RHbHZibk5jYmlBZ2NISnBkbUYwWlNCb1pXRjBUR0Y1WlhJNklFd3VTR1ZoZEV4aGVXVnlYRzRnSUhCeWFYWmhkR1VnWTJ4MWMzUmxja3hoZVdWeU9pQk1MazFoY210bGNuTkRiSFZ6ZEdWeVhHNGdJSEJ5YVhaaGRHVWdZblZpWW14bFRHRjVaWEk2SUV3dVRHRjVaWEpIY205MWNGeHVYRzRnSUhCeWFYWmhkR1VnYzJWbmJXVnVkR1ZrVFdsdU9pQnVkVzFpWlhKY2JpQWdjSEpwZG1GMFpTQnpaV2R0Wlc1MFpXUlRkR1Z3T2lCdWRXMWlaWEpjYmlBZ2NISnBkbUYwWlNCaWRXSmliR1ZrVTJsNlpVMXBiam9nYm5WdFltVnlYRzRnSUhCeWFYWmhkR1VnWW5WaVlteGxaRk5wZW1WVGRHVndPaUJ1ZFcxaVpYSmNiaUFnY0hKcGRtRjBaU0JpZFdKaWJHVmtRMjlzYjNKTllYQTZJSHNnVzNCeWIzQTZJSE4wY21sdVoxMDZJSE4wY21sdVp5QjlYRzRnSUhCeWFYWmhkR1VnWW5WaVlteGxaRU52Ykc5eVVtVm1jem9nUVhKeVlYazhlMXh1SUNBZ0lHRjBkSEk2SUhOMGNtbHVaMXh1SUNBZ0lHTnZiRzl5T2lCemRISnBibWRjYmlBZ0lDQnVkVzF6T2lCdWRXMWlaWEpjYmlBZ2ZUNWNiaUFnY0hKcGRtRjBaU0JpZFdKaWJHVmtVMmw2WlZKbFpuTTZJRUZ5Y21GNVBIdGNiaUFnSUNCemFYcGxPaUJ1ZFcxaVpYSmNiaUFnSUNCeVlXNW5aVG9nVzI1MWJXSmxjaXdnYm5WdFltVnlYVnh1SUNCOVBseHVJQ0F2S2lvZzZLNnc1YjJWNXArUTVMaXFJSEJ5YjNBZzVhKzU1YnFVNTVxRTVyaXk1cCtUNmFLYzZJbXlJQ292WEc0Z0lIQnlhWFpoZEdVZ1kyeGhjM05wWm1sbFpFTnZiRzl5VFdGd09pQjdJRnR3Y205d09pQnpkSEpwYm1kZE9pQnpkSEpwYm1jZ2ZWeHVJQ0F2S2lvZzVZaUc1N0c3NXJpeTVwK1Q2YUtjNklteTVZK0M1NFduS09hUGtPUyttK2U3bWVpd2crZVVxT2lBaGVTOXYrZVVxQ2tnS2k5Y2JpQWdjSEpwZG1GMFpTQmpiR0Z6YzJsbWFXVmtRMjlzYjNKU1pXWnpPaUJCY25KaGVUeDdYRzRnSUNBZ1lYUjBjam9nYzNSeWFXNW5YRzRnSUNBZ1kyOXNiM0k2SUhOMGNtbHVaMXh1SUNBZ0lHNTFiWE02SUc1MWJXSmxjbHh1SUNCOVBseHVJQ0JqYjI1emRISjFZM1J2Y2loY2JpQWdJQ0J0WVhBNklFd3VUV0Z3TEZ4dUlDQWdJR1JoZEdGTWFYTjBPaUJFWVhSaFRHbHpkRWwwWlcxYlhTeGNiaUFnSUNCdmNIUnBiMjV6T2lCTllYSnJaWEp6VEdGNVpYSlBjSFJwYjI1ekxGeHVJQ0FnSUdOb1lXNXVaV3hHZFc1ak9pQkRhR0Z1Ym1Wc1JuVnVZMXh1SUNBcElIdGNiaUFnSUNCcFppQW9JVUZ5Y21GNUxtbHpRWEp5WVhrb1pHRjBZVXhwYzNRcElIeDhJR1JoZEdGTWFYTjBMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCa1lYUmhUR2x6ZENEbHY0WHBvYnZtbUsvcG5aN25xYnJtbGJEbnU0UmdLVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbVJsWm1GMWJIUlBjSFJwYjI1eklEMGdlMXh1SUNBZ0lDQWdjbVZ1WkdWeVZIbHdaVG9nSjNCdmFXNTBKeXhjYmlBZ0lDQWdJSEpsYm1SbGNsQnZhVzUwUTI5c2IzSlVlWEJsT2lBbmMybHVaMnhsSnl4Y2JpQWdJQ0FnSUdsamIyNVVlWEJsT2lBbmRXNXBZMjlrWlNjc1hHNGdJQ0FnSUNCcFkyOXVVMmw2WlRvZ1d6SXdMQ0F5TUYwc1hHNGdJQ0FnSUNCcFkyOXVRMnhoYzNNNklDZHBZMjl1Wm05dWRDY3NYRzRnSUNBZ0lDQnBZMjl1UTI5c2IzSTZJRVJGUmtGVlRGUmZRMDlNVDFJc1hHNGdJQ0FnSUNCcFkyOXVRVzVqYUc5eU9pQmJNVEFzSURJd1hTeGNiaUFnSUNBZ0lIQnZjSFZ3T2lCMGNuVmxMRnh1SUNBZ0lDQWdkRzl2YkhScGNEb2dkSEoxWlN4Y2JpQWdJQ0FnSUhCdmNIVndRWFIwY2pvZ2V5QnNZV0psYkRvZ0orV1FqZWVuc0Njc0lIWmhiSFZsT2lBbmJtRnRaU2NnZlN4Y2JpQWdJQ0FnSUhSdmIyeDBhWEJCZEhSeU9pQW5ibUZ0WlNjc1hHNGdJQ0FnSUNCelpXZHRaVzUwWldSRGIyeHZjbk02SUZ0RVJVWkJWVXhVWDBOUFRFOVNYU3hjYmlBZ0lDQWdJR05zWVhOemFXWnBaV1JEYjJ4dmNuTTZJRnRFUlVaQlZVeFVYME5QVEU5U1hTeGNiaUFnSUNBZ0lHbHpRMngxYzNSbGNqb2dabUZzYzJVc1hHNGdJQ0FnSUNCeVpXNWtaWEpEYkhWemRHVnlRMjlzYjNKVWVYQmxPaUFuYzIxaGNuUW5MRnh1SUNBZ0lDQWdZblZpWW14bFUzUnliMnRsVjJsa2RHZzZJREVzWEc0Z0lDQWdJQ0JpZFdKaWJHVkRiMnh2Y25NNklGdEVSVVpCVlV4VVgwTlBURTlTWFN4Y2JpQWdJQ0FnSUdKMVltSnNaVk4wY205clpVOXdZV05wZEhrNklEQXVNaXhjYmlBZ0lDQWdJR0oxWW1Kc1pVWnBiR3hQY0dGamFYUjVPaUF3TGpVc1hHNGdJQ0FnSUNCaWRXSmliR1ZUYVhwbGN6b2dXekV3WFN4Y2JpQWdJQ0FnSUdobFlYUlBjSFJwYjI1ek9pQjdYRzRnSUNBZ0lDQWdJRzFoZURvZ01TeGNiaUFnSUNBZ0lDQWdiV2x1VDNCaFkybDBlVG9nTUM0MUxGeHVJQ0FnSUNBZ2ZTeGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NTBlWEJsSUQwZ0oyMWhjbXRsY2lkY2JpQWdJQ0IwYUdsekxtMWhjQ0E5SUcxaGNGeHVJQ0FnSUhSb2FYTXVaR0YwWVV4cGMzUWdQU0JrWVhSaFRHbHpkRnh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUc5d2RHbHZibk5jYmlBZ0lDQjBhR2x6TG1Ob1lXNXVaV3hHZFc1aklEMGdZMmhoYm01bGJFWjFibU5jYmx4dUlDQWdJSFJvYVhNdWRtbHphV0pzWlNBOUlIUnlkV1ZjYmlBZ0lDQjBhR2x6TG14aGVXVnlJRDBnYm5Wc2JGeHVJQ0FnSUhSb2FYTXVabTlqZFhObFpFMWhjbXRsY2lBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG1odmRtVnlaV1JOWVhKclpYSWdQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVUxaGNtdGxjaUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbTFoY210bGNuTWdQU0JiWFZ4dUlDQWdJSFJvYVhNdWJXRnlhMlZ5VEdGNVpYSWdQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NW9aV0YwVEdGNVpYSWdQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NWpiSFZ6ZEdWeVRHRjVaWElnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTVpZFdKaWJHVk1ZWGxsY2lBOUlHNTFiR3hjYmx4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQWdQU0F4WEc0Z0lDQWdkR2hwY3k1aWRXSmliR1ZrVTJsNlpVMXBiaUE5SUVsdVptbHVhWFI1WEc0Z0lDQWdkR2hwY3k1aWRXSmliR1ZrVTJsNlpWTjBaWEFnUFNBeFhHNGdJQ0FnZEdocGN5NWpiR0Z6YzJsbWFXVmtRMjlzYjNKTllYQWdQU0I3ZlZ4dUlDQWdJSFJvYVhNdVluVmlZbXhsWkVOdmJHOXlUV0Z3SUQwZ2UzMWNiaUFnSUNCMGFHbHpMbWx1YVhSUGNIUnBiMjV6S0c5d2RHbHZibk1wWEc0Z0lDQWdkR2hwY3k1cGJtbDBSWFpsYm5SektDbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1pISmhkeWh2Y0hScGIyNXpQem9nVFdGeWEyVnljMHhoZVdWeVQzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVkbWx6YVdKc1pTQTlJSFJ5ZFdWY2JpQWdJQ0IwYUdsekxtbHVhWFJQY0hScGIyNXpLRzl3ZEdsdmJuTXBYRzRnSUNBZ2RHaHBjeTVwYm1sMFRXRnlhMlZ5Y3lncFhHNGdJQ0FnZEdocGN5NXBibWwwUlhabGJuUnpLQ2xjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNGdJQzhxS2lEbnU1amxpTGJsbTc3bHNZSWdLaTljYmlBZ2NIVmliR2xqSUhKbFpISmhkeWdwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11ZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGhlV1Z5TG5KbGJXOTJaU2dwWEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnNUx5WTVZV0k1WWlrNXBhdElHbHpRMngxYzNSbGNseHVJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11YVhORGJIVnpkR1Z5SUNZbUlIUm9hWE11YjNCMGFXOXVjeTV5Wlc1a1pYSlVlWEJsSUQwOVBTQW5jRzlwYm5RbktTQjdYRzRnSUNBZ0lDQjBhR2x6TG14aGVXVnlJRDBnZEdocGN5NWpiMjVtYVdkRGJIVnpkR1Z5VEdGNVpYSW9LVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCemQybDBZMmdnS0hSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKVWVYQmxLU0I3WEc0Z0lDQWdJQ0FnSUdOaGMyVWdKM0J2YVc1MEp6b2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXViR0Y1WlhJZ1BTQjBhR2x6TG1OdmJtWnBaMDFoY210bGNreGhlV1Z5S0NsY2JpQWdJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHTmhjMlVnSjJOc2RYTjBaWEluT2lCN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1c1lYbGxjaUE5SUhSb2FYTXVZMjl1Wm1sblEyeDFjM1JsY2t4aGVXVnlLQ2xjYmlBZ0lDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdOaGMyVWdKMmhsWVhRbk9pQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NXNZWGxsY2lBOUlIUm9hWE11WTI5dVptbG5TR1ZoZEV4aGVXVnlLQ2xjYmlBZ0lDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUdOaGMyVWdKMkoxWW1Kc1pTYzZJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbXhoZVdWeUlEMGdkR2hwY3k1amIyNW1hV2RDZFdKaWJHVk1ZWGxsY2lncFhHNGdJQ0FnSUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmtaV1poZFd4ME9pQjdYRzRnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLR0J5Wlc1a1pYSlVlWEJsSU9TNGplYVVyK2FNZ1Z3aUpIdDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlWSGx3WlgxY0ltQXBYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCeVpYUjFjbTRnZEdocGMxeHVJQ0I5WEc0Z0lDOHFLaURvcnI3bnZhNGdaR0YwWVNBcUwxeHVJQ0J3ZFdKc2FXTWdjMlYwUkdGMFlTaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMWJYU2tnZTF4dUlDQWdJSFJvYVhNdVpHRjBZVXhwYzNRZ1BTQmtZWFJoWEc0Z0lIMWNiaUFnTHlvcUlPaXV2dWU5cnVtRmplZTlydVdQZ3VhVnNDQXFMMXh1SUNCd2RXSnNhV01nYzJWMFQzQjBhVzl1Y3lodmNIUnBiMjV6T2lCTllYSnJaWEp6VEdGNVpYSlBjSFJwYjI1ekxDQnlaV1J5WVhjZ1BTQm1ZV3h6WlNrZ2UxeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTk5aWEpuWlNoMGFHbHpMbTl3ZEdsdmJuTXNJRzl3ZEdsdmJuTXBJR0Z6SUUxaGNtdGxjbk5NWVhsbGNrOXdkR2x2Ym5OY2JpQWdJQ0JwWmlBb2NtVmtjbUYzS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkpsWkhKaGR5Z3BYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lDOHFLaURvanJmbGo1Ymx2WlBsaVkwZ2IzQjBhVzl1Y3lBcUwxeHVJQ0J3ZFdKc2FXTWdaMlYwVDNCMGFXOXVjeWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dmNIUnBiMjV6WEc0Z0lIMWNiaUFnTHlvcUlPZThxZWFVdnVpSHMrV01oZVdRcSthSmdPYWNpZWkrdWVlVmpDQXFMMXh1SUNCd2RXSnNhV01nWm1sMFFtOTFibVJ6S0NrZ2UxeHVJQ0FnSUhSb2FYTXViV0Z3TG1acGRFSnZkVzVrY3loMGFHbHpMbWRsZEVKdmRXNWtjeWdwTENCN0lIQmhaR1JwYm1jNklGc3lNQ3dnTWpCZElIMHBYRzRnSUgxY2JpQWdMeW9xSU9pT3QrV1BsdWkrdWVlVmpDQXFMMXh1SUNCd2RXSnNhV01nWjJWMFFtOTFibVJ6S0NrNklFd3VUR0YwVEc1blFtOTFibVJ6Ulhod2NtVnpjMmx2YmlCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YldGeWEyVnljeTVzWlc1bmRHZ2dQRDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXViV0Z3TG1kbGRFSnZkVzVrY3lncFhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG0xaGNtdGxjbk11YldGd0tGeHVJQ0FnSUNBZ0tHMWhjbXRsY2lrZ1BUNWNiaUFnSUNBZ0lDQWdXMjFoY210bGNpNW5aWFJNWVhSTWJtY29LUzVzWVhRc0lHMWhjbXRsY2k1blpYUk1ZWFJNYm1jb0tTNXNibWRkSUdGeklGdHVkVzFpWlhJc0lHNTFiV0psY2wxY2JpQWdJQ0FwWEc0Z0lIMWNiaUFnTHlvcUlPbVVnT2F2Z2VXYnZ1V3hnaUFxTDF4dUlDQndkV0pzYVdNZ1pHVnpkSEp2ZVNncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1c1lYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1Y21WdGIzWmxUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbE5ZWEpyWlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxOWVhKclpYSXBYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViV0Z3TG05bVppZ25lbTl2YlhOMFlYSjBKeXdnZEdocGN5NWZlbTl2YlZOMFlYSjBRMklzSUhSb2FYTXBYRzRnSUNBZ2RHaHBjeTV0WVhBdWIyWm1LQ2Q2YjI5dFpXNWtKeXdnZEdocGN5NWZlbTl2YlVWdVpFTmlMQ0IwYUdsektWeHVJQ0I5WEc0Z0lDOHFLaURtbUsvbGtLYm1tTDducExvZ0tpOWNiaUFnY0hWaWJHbGpJSFJ2WjJkc1pWWnBjMmxpYkdVb2RtbHphV0pzWlRvZ1ltOXZiR1ZoYmlrZ2UxeHVJQ0FnSUhSb2FYTXVkbWx6YVdKc1pTQTlJSFpwYzJsaWJHVmNiaUFnSUNCcFppQW9JWFJvYVhNdWJHRjVaWElwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVZV1JrVEdGNVpYSW9kR2hwY3k1c1lYbGxjaWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2FXWWdLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxOWVhKclpYSXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVUxaGNtdGxjaTV5WlcxdmRtVW9LVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVjbVZ0YjNabFRHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnTHlvcUlPYWJ0T2FOb3VtaW5PaUpzaUFxTDF4dUlDQndkV0pzYVdNZ1kyaGhibWRsUTI5c2IzSW9ZMjlzYjNJNklITjBjbWx1WnlrZ2UxeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5NXBZMjl1UTI5c2IzSWdQU0JqYjJ4dmNseHVJQ0FnSUhSb2FYTXVjbVZrY21GM0tDbGNiaUFnZlZ4dUlDQXZLaW9nNXB1MDVvMmlJR2xqYjI0Z0tpOWNiaUFnY0hWaWJHbGpJR05vWVc1blpVbGpiMjRvYVdOdmJsVnVhV052WkdVNklITjBjbWx1WnlrZ2UxeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5NXBZMjl1Vlc1cFkyOWtaU0E5SUdsamIyNVZibWxqYjJSbFhHNGdJQ0FnZEdocGN5NXlaV1J5WVhjb0tWeHVJQ0I5WEc0Z0lDOHFLaURvZ1pybmhLYm1uNURrdUtvZ2JXRnlhMlZ5SUNvdlhHNGdJSEIxWW14cFl5QndhWFJqYUNocFpEb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV0WVhKclpYSnpMbVp2Y2tWaFkyZ29LRzFoY210bGNpa2dQVDRnZTF4dUlDQWdJQ0FnYVdZZ0tHMWhjbXRsY2k1blpYUkVZWFJoS0NrdWFXUWdQVDA5SUdsa0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXRnlhMlZ5UTJ4cFkydElZVzVrYkdWeUtHMWhjbXRsY2l3Z2RISjFaU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQXZLaW9nNkk2MzVZK1c1WWlHNTdHNzZhS2M2SW15NksrMDVwaU9JQ292WEc0Z0lIQjFZbXhwWXlCblpYUkRiR0Z6YzJsbWFXVmtRMjlzYjNKU1pXWnpLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1Oc1lYTnphV1pwWldSRGIyeHZjbEpsWm5OY2JpQWdmVnh1SUNBdktpb2c2STYzNVkrVzVyQ1U1ck9oNmFLYzZJbXk1WnUrNUw2TDZLKzA1cGlPSUNvdlhHNGdJSEIxWW14cFl5Qm5aWFJDZFdKaWJHVmtRMjlzYjNKU1pXWnpLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1KMVltSnNaV1JEYjJ4dmNsSmxabk5jYmlBZ2ZWeHVJQ0F2S2lvZzZJNjM1WStXNXJDVTVyT2g1YVNuNWJDUDVadSs1TDZMNksrMDVwaU9JQ292WEc0Z0lIQjFZbXhwWXlCblpYUkNkV0ppYkdWa1UybDZaVkpsWm5Nb0tTQjdYRzRnSUNBZ1kyOXVjM1FnYzJsNlpVNTFiWE1nUFNCMGFHbHpMbTl3ZEdsdmJuTXVZblZpWW14bFUybDZaWE11YkdWdVozUm9YRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnphWHBsVG5WdGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0J5WVc1blpWTjBZWEowSUQwZ2RHaHBjeTVpZFdKaWJHVmtVMmw2WlUxcGJpQXJJR2tnS2lCMGFHbHpMbUoxWW1Kc1pXUlRhWHBsVTNSbGNGeHVJQ0FnSUNBZ1kyOXVjM1FnY21GdVoyVkZibVFnUFNCeVlXNW5aVk4wWVhKMElDc2dkR2hwY3k1aWRXSmliR1ZrVTJsNlpWTjBaWEJjYmlBZ0lDQWdJSFJvYVhNdVluVmlZbXhsWkZOcGVtVlNaV1p6TG5CMWMyZ29lMXh1SUNBZ0lDQWdJQ0J5WVc1blpUb2dXM0poYm1kbFUzUmhjblFzSUhKaGJtZGxSVzVrWFN4Y2JpQWdJQ0FnSUNBZ2MybDZaVG9nZEdocGN5NXZjSFJwYjI1ekxtSjFZbUpzWlZOcGVtVnpXMmxkTEZ4dUlDQWdJQ0FnZlNsY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WW5WaVlteGxaRk5wZW1WU1pXWnpYRzRnSUgxY2JpQWdjSEp2ZEdWamRHVmtJRjk2YjI5dFUzUmhjblJEWWlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxuUjVjR1VnUFQwOUlDZHRZWEpyWlhJbktTQjdYRzRnSUNBZ0lDQnpkMmwwWTJnZ0tIUm9hWE11YjNCMGFXOXVjeTV5Wlc1a1pYSlVlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhjMlVnSjNCdmFXNTBKem9nZTF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWFYTkRiSFZ6ZEdWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXViV0Z5YTJWeVRHRjVaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWJXRndMbkpsYlc5MlpVeGhlV1Z5S0hSb2FYTXViV0Z5YTJWeVRHRjVaWElwWEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZMkZ6WlNBblluVmlZbXhsSnpvZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbUoxWW1Kc1pVeGhlV1Z5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbUoxWW1Kc1pVeGhlV1Z5S1Z4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1JsWm1GMWJIUTZJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBnWld4elpTQnBaaUFvZEdocGN5NTBlWEJsSUQwOVBTQW5iV0Z5YTJWeVFuVm1abVZ5SnlrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWNtVnRiM1psVEdGNVpYSW9kR2hwY3k1dFlYSnJaWEpNWVhsbGNpbGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lIQnliM1JsWTNSbFpDQmZlbTl2YlVWdVpFTmlLQ2tnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTUyYVhOcFlteGxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUm9hWE11ZEhsd1pTQTlQVDBnSjIxaGNtdGxjaWNwSUh0Y2JpQWdJQ0FnSUhOM2FYUmphQ0FvZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2xSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnWTJGelpTQW5jRzlwYm5Rbk9pQjdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YjNCMGFXOXVjeTVwYzBOc2RYTjBaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1dFlYSnJaWEpNWVhsbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTV0WVhKclpYSk1ZWGxsY2lsY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JqWVhObElDZGlkV0ppYkdVbk9pQjdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WW5WaVlteGxUR0Y1WlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViV0Z3TG1Ga1pFeGhlV1Z5S0hSb2FYTXVZblZpWW14bFRHRjVaWElwWEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaR1ZtWVhWc2REb2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2gwYUdsekxuUjVjR1VnUFQwOUlDZHRZWEpyWlhKQ2RXWm1aWEluS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1aFpHUk1ZWGxsY2loMGFHbHpMbTFoY210bGNreGhlV1Z5S1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lIMWNiaUFnTHlvcUlPbUZqZWU5cnVhVm8rZUN1ZVdidmlBcUwxeHVJQ0J3Y205MFpXTjBaV1FnWTI5dVptbG5UV0Z5YTJWeVRHRjVaWElvS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YldGeWEyVnlUR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YldGeWEyVnlUR0Y1WlhJdWNtVnRiM1psS0NsY2JpQWdJQ0I5WEc0Z0lDQWdZMjl1YzNRZ1kyRnVkbUZ6U1dOdmJreGhlV1Z5SUQwZ1RDNWpZVzUyWVhOSlkyOXVUR0Y1WlhJb2UzMHBMbUZrWkZSdktIUm9hWE11YldGd0tWeHVJQ0FnSUM4dklPYTN1K1dLb09lQ3VlV0h1K1M2aStTN3RseHVJQ0FnSUdOaGJuWmhjMGxqYjI1TVlYbGxjaTVoWkdSUGJrTnNhV05yVEdsemRHVnVaWElvS0Y4c0lGdDdJR1JoZEdFNklHMWhjbXRsY2lCOVhTa2dQVDRnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEpyWlhKRGJHbGphMGhoYm1Sc1pYSW9iV0Z5YTJWeUlHRnpJRTFoY210bGNpbGNiaUFnSUNCOUtWeHVJQ0FnSUM4dklPYTN1K1dLb09XUHMrbVVydVM2aStTN3RseHVJQ0FnSUdOaGJuWmhjMGxqYjI1TVlYbGxjaTVoWkdSUGJrTnZiblJsZUhSdFpXNTFUR2x6ZEdWdVpYSW9LR1YyWlc1MExDQmJleUJrWVhSaE9pQnRZWEpyWlhJZ2ZWMHBJRDArSUh0Y2JpQWdJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1vSjJOdmJuUmxlSFJ0Wlc1MUp5d2dlMXh1SUNBZ0lDQWdJQ0JsZG1WdWRDeGNiaUFnSUNBZ0lDQWdkR0Z5WjJWME9pQnRZWEpyWlhJc1hHNGdJQ0FnSUNCOUtWeHVJQ0FnSUgwcFhHNGdJQ0FnTHk4ZzVyZTc1WXFnSUdodmRtVnlJT1M2aStTN3RseHVJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjQ2tnZTF4dUlDQWdJQ0FnWTJGdWRtRnpTV052Ymt4aGVXVnlMbUZrWkU5dVNHOTJaWEpNYVhOMFpXNWxjaWdvWHl3Z1czc2daR0YwWVRvZ2JXRnlhMlZ5SUgxZEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUM4dklPUzVpK1dKamVhY2lTQm9iM1psY2lEbm1vVGxoYlBwbDYwZ2RHOXZiSFJwY0Z4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1b2IzWmxjbVZrVFdGeWEyVnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVvYjNabGNtVmtUV0Z5YTJWeUxtTnNiM05sVkc5dmJIUnBjQ2dwWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2RHaHBjeTVvYjNabGNtVmtUV0Z5YTJWeUlEMGdiV0Z5YTJWeUlHRnpJRTFoY210bGNseHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWh2ZG1WeVpXUk5ZWEpyWlhJdVoyVjBWRzl2YkhScGNDZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OGc1YWFDNXA2YzViZXk1N3VQNks2KzU3MnVJSFJ2YjJ4MGFYQWc1NXUwNW82bDViR1Y1NlM2SUhSdmIyeDBhWEJjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbWh2ZG1WeVpXUk5ZWEpyWlhJdWIzQmxibFJ2YjJ4MGFYQW9LVnh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUM4dklPV1FwdVdJbWVlN2tlV3VtaUIwYjI5c2RHbHdJT1c1dHVXeGxlZWt1bHh1SUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjRUYwZEhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhRzkyWlhKbFpFMWhjbXRsY2k1aWFXNWtWRzl2YkhScGNDaGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0p5Y2dLeUIwYUdsekxtaHZkbVZ5WldSTllYSnJaWEl1WjJWMFJHRjBZU2dwVzNSb2FYTXViM0IwYVc5dWN5NTBiMjlzZEdsd1FYUjBjbDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDbGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgwcFhHNGdJQ0FnZlZ4dUlDQWdJR05oYm5aaGMwbGpiMjVNWVhsbGNpNWhaR1JOWVhKclpYSnpLSFJvYVhNdWJXRnlhMlZ5Y3lsY2JseHVJQ0FnSUM4dklPaW5vK1dHcytXSW5lYXNvZWE0c3VhZmsrUzRqZVdIdXVXYnZ1YWdoK21YcnVtaW1GeHVJQ0FnSUhSb2FYTXViV0Z3TG5CaGJsUnZLSFJvYVhNdWJXRndMbWRsZEVObGJuUmxjaWdwS1Z4dVhHNGdJQ0FnZEdocGN5NXRZWEpyWlhKTVlYbGxjaUE5SUdOaGJuWmhjMGxqYjI1TVlYbGxjbHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTFoY210bGNreGhlV1Z5WEc0Z0lIMWNiaUFnTHlvcUlPaU90K1dQbGlCMGIyOXNkR2x3SU9XR2hlV3V1U0FxTDF4dUlDQndjbTkwWldOMFpXUWdaMlYwVkc5dmJGUnBjRU52Ym5SbGJuUW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLU0I3WEc0Z0lDQWdjbVYwZFhKdUlDY25JQ3NnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjRUYwZEhKZFhHNGdJSDFjYmlBZ0x5b3FJT1dJbmVXbmkrV01sdW1GamVlOXJ1V1BndWFWc0NBcUwxeHVJQ0J3Y205MFpXTjBaV1FnYVc1cGRFOXdkR2x2Ym5Nb2IzQjBhVzl1Y3pvZ1RXRnlhMlZ5YzB4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUc5d2RHbHZibk5OWlhKblpTaGNiaUFnSUNBZ0lIUm9hWE11WkdWbVlYVnNkRTl3ZEdsdmJuTXNYRzRnSUNBZ0lDQjBhR2x6TG05d2RHbHZibk1zWEc0Z0lDQWdJQ0J2Y0hScGIyNXpYRzRnSUNBZ0tTQmhjeUJOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6WEc0Z0lIMWNiaUFnTHlvcUlPV0luZVduaStXTWxpQk5ZWEpyWlhJZ0tpOWNiaUFnY0hKdmRHVmpkR1ZrSUdsdWFYUk5ZWEpyWlhKektDa2dlMXh1SUNBZ0lDOHZJT2U4aytXdG1DQnpaV2R0Wlc1MElPZWJ1T1dGcythVnNPYU5ybHh1SUNBZ0lIUm9hWE11WTJGamFHVlRaV2R0Wlc1MFVHRnlZVzF6S0NsY2JpQWdJQ0IwYUdsekxtTmhZMmhsUTJ4aGMzTnBabmxRWVhKaGJYTW9LVnh1SUNBZ0lIUm9hWE11WTJGamFHVkNkV0ppYkdWUVlYSmhiWE1vS1Z4dUlDQWdJSFJvYVhNdWJXRnlhMlZ5Y3lBOUlGdGRYRzRnSUNBZ2RHaHBjeTVrWVhSaFRHbHpkQzVtYjNKRllXTm9LQ2hrWVhSaEtTQTlQaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQnNZWGxsY2lBOUlFd3VaMlZ2U2xOUFRpaGtZWFJoTG1kbGIyMWxkSEo1S1M1blpYUk1ZWGxsY25Nb0tWc3dYU0JoY3lCTUxrMWhjbXRsY2x4dVhHNGdJQ0FnSUNCamIyNXpkQ0J0WVhKclpYSWdQU0J1WlhjZ1RXRnlhMlZ5S0Z4dUlDQWdJQ0FnSUNCYmJHRjVaWEl1WjJWMFRHRjBURzVuS0NrdWJHRjBMQ0JzWVhsbGNpNW5aWFJNWVhSTWJtY29LUzVzYm1kZExGeHVJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnYVdOdmJqb2dkR2hwY3k1blpYUk5ZWEpyWlhKSlkyOXVLR1JoZEdFcExGeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQXBYRzVjYmlBZ0lDQWdJQzh2SU9Xd2h1ZWJ1T1dGcytXQXZPZTdrZVd1bXVXSXNDQnRZWEpyWlhMa3VJcGNiaUFnSUNBZ0lHMWhjbXRsY2k1elpYUkVZWFJoS0dSaGRHRXBYRzRnSUNBZ0lDQjBhR2x6TG0xaGNtdGxjbk11Y0hWemFDaHRZWEpyWlhJcFhHNGdJQ0FnZlNsY2JpQWdmVnh1SUNBdktpb2c1WWlkNWFlTDVZeVc1THFMNUx1MklDb3ZYRzRnSUhCeWIzUmxZM1JsWkNCcGJtbDBSWFpsYm5SektDa2dlMXh1SUNBZ0lIUm9hWE11YldGd0xtOXVLQ2Q2YjI5dGMzUmhjblFuTENCMGFHbHpMbDk2YjI5dFUzUmhjblJEWWl3Z2RHaHBjeWxjYmlBZ0lDQjBhR2x6TG0xaGNDNXZiaWduZW05dmJXVnVaQ2NzSUhSb2FYTXVYM3B2YjIxRmJtUkRZaXdnZEdocGN5bGNiaUFnZlZ4dUlDQXZMeURscElUbmtJWWdiV0Z5YTJWeUlPZUN1ZVdIdStTNmkrUzd0bHh1SUNCd2NtbDJZWFJsSUcxaGNtdGxja05zYVdOclNHRnVaR3hsY2lodFlYSnJaWEk2SUUxaGNtdGxjaXdnWm1sMFFtOTFibVJ6UHpvZ1ltOXZiR1ZoYmlrZ2UxeHVJQ0FnSUhSb2FYTXVabTlqZFhObFpFMWhjbXRsY2lBOUlHMWhjbXRsY2x4dUlDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhBcElIdGNiaUFnSUNBZ0lDOHZJT1dJb09tWnBPV0pqZVM0Z09TNHF1YVV2dVdrcCtXYnZ1YWdoMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsTllYSnJaWElwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2k1eVpXMXZkbVZHY205dEtIUm9hWE11YldGd0tWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0x5OGc1NVNmNW9pUTViMlQ1WW1ONXBTKzVhU241WnUrNXFDSFhHNGdJQ0FnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVRXRnlhMlZ5SUQwZ2JtVjNJRTFoY210bGNpaHRZWEpyWlhJdVoyVjBUR0YwVEc1bktDa3NJSHRjYmlBZ0lDQWdJQ0FnYVdOdmJqb2dkR2hwY3k1blpYUk1ZWEpuWlhKTllYSnJaWEpKWTI5dUtHMWhjbXRsY2k1blpYUkVZWFJoS0NrcExGeHVJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbE5ZWEpyWlhJdVlXUmtWRzhvZEdocGN5NXRZWEFwWEc0Z0lDQWdJQ0F2THlEbXQ3dmxpcURtbEw3bHBLZmxtNzdtb0lmbm1vUWdjRzl3ZFhCY2JpQWdJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsTllYSnJaWEpjYmlBZ0lDQWdJQ0FnTG1KcGJtUlFiM0IxY0NoMGFHbHpMbWRsZEZCdmNIVndRMjl1ZEdWdWRDaHRZWEpyWlhJdVoyVjBSR0YwWVNncEtTbGNiaUFnSUNBZ0lDQWdMbTl3Wlc1UWIzQjFjQ2dwWEc0Z0lDQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VFdGeWEyVnlMbTl1S0Nkd2IzQjFjR05zYjNObEp5d2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVUV0Z5YTJWeUxuSmxiVzkyWlNncFhHNGdJQ0FnSUNCOUtWeHVJQ0FnSUgxY2JpQWdJQ0J0WVhKclpYSXVZMnh2YzJWVWIyOXNkR2x3S0NsY2JseHVJQ0FnSUhSb2FYTXViV0Z3TG5CaGJsUnZLSFJvYVhNdVptOWpkWE5sWkUxaGNtdGxjaTVuWlhSTVlYUk1ibWNvS1NsY2JpQWdJQ0JwWmlBb1ptbDBRbTkxYm1SektTQjdYRzRnSUNBZ0lDQjBhR2x6TG0xaGNDNW1hWFJDYjNWdVpITW9iV0Z5YTJWeUxtZGxkRXhoZEV4dVp5Z3BMblJ2UW05MWJtUnpLREV3S1NsY2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1amFHRnVibVZzUm5WdVl5Z25iMjR0WTJ4cFkyc3RiV0Z5YTJWeUp5d2diV0Z5YTJWeUtWeHVJQ0I5WEc0Z0lDOHFLaURwaFkzbnZhN29nWnJsa0lqbG03N2xzWUlnS2k5Y2JpQWdjSEpwZG1GMFpTQmpiMjVtYVdkRGJIVnpkR1Z5VEdGNVpYSW9LU0I3WEc0Z0lDQWdMeThnNWJHVjU2UzY2SUdhNVpDSTVadSs1YkdDWEc0Z0lDQWdhV1lnS0hSb2FYTXVZMngxYzNSbGNreGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbU5zZFhOMFpYSk1ZWGxsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG1Oc2RYTjBaWEpNWVhsbGNpQTlJRXd1YldGeWEyVnlRMngxYzNSbGNrZHliM1Z3S0h0Y2JpQWdJQ0FnSUdsamIyNURjbVZoZEdWR2RXNWpkR2x2YmpvZ2RHaHBjeTVwWTI5dVEzSmxZWFJsUm5WdVkzUnBiMjR1WW1sdVpDaDBhR2x6S1N4Y2JpQWdJQ0I5S1Z4dUlDQWdJSFJvYVhNdVkyeDFjM1JsY2t4aGVXVnlMbUZrWkV4aGVXVnljeWhjYmlBZ0lDQWdJSFJvYVhNdWJXRnlhMlZ5Y3k1dFlYQW9LRzBwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JXRnlhMlZ5SUQwZ2JtVjNJRTFoY210bGNpaHRMbWRsZEV4aGRFeHVaeWdwTENCN1hHNGdJQ0FnSUNBZ0lDQWdhV052YmpvZ2RHaHBjeTVuWlhSTllYSnJaWEpKWTI5dUtHMHVaMlYwUkdGMFlTZ3BLU3hjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUNBZ2JXRnlhMlZ5TG5ObGRFUmhkR0VvYlM1blpYUkVZWFJoS0NrcFhHNGdJQ0FnSUNBZ0lHMWhjbXRsY2k1aWFXNWtWRzl2YkhScGNDZ25KeUFySUcxaGNtdGxjaTVuWlhSRVlYUmhLQ2xiZEdocGN5NXZjSFJwYjI1ekxuUnZiMngwYVhCQmRIUnlYU2xjYmlBZ0lDQWdJQ0FnYldGeWEyVnlMbUpwYm1SUWIzQjFjQ2gwYUdsekxtZGxkRkJ2Y0hWd1EyOXVkR1Z1ZENodFlYSnJaWEl1WjJWMFJHRjBZU2dwS1NsY2JpQWdJQ0FnSUNBZ2JXRnlhMlZ5TG05dUtDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG0xaGNtdGxja05zYVdOclNHRnVaR3hsY2lodFlYSnJaWElwWEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdFlYSnJaWEpjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdLVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU5zZFhOMFpYSk1ZWGxsY2x4dUlDQjlYRzVjYmlBZ0x5b3FJT2E0c3VhZmsrUzR1dWVEcmVXS20rV2J2aUFxTDF4dUlDQndjbWwyWVhSbElHTnZibVpwWjBobFlYUk1ZWGxsY2lncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1b1pXRjBUR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YUdWaGRFeGhlV1Z5TG5KbGJXOTJaU2dwWEc0Z0lDQWdmVnh1SUNBZ0lHTnZibk4wSUdGc2RITTZJRzUxYldKbGNsdGRJRDBnVzExY2JpQWdJQ0IwYUdsekxtMWhjbXRsY25NdVptOXlSV0ZqYUNnb2JXRnlhMlZ5S1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCc1lYUk1ibWNnUFNCdFlYSnJaWEl1WjJWMFRHRjBURzVuS0NsY2JpQWdJQ0FnSUdOdmJuTjBJR1JwYldWdWMybHZia0YwZEhJZ1BWeHVJQ0FnSUNBZ0lDQjBhR2x6TG05d2RHbHZibk11YUdWaGRFOXdkR2x2Ym5NZ0ppWWdkR2hwY3k1dmNIUnBiMjV6TG1obFlYUlBjSFJwYjI1ekxtUnBiV1Z1YzJsdmJrRjBkSEpjYmlBZ0lDQWdJR3hsZENCaGJIUWdQVnh1SUNBZ0lDQWdJQ0FvWkdsdFpXNXphVzl1UVhSMGNpQW1KaUJ0WVhKclpYSXVaMlYwUkdGMFlTZ3BXMlJwYldWdWMybHZia0YwZEhKZEtTQjhmRnh1SUNBZ0lDQWdJQ0IwYUdsekxtOXdkR2x2Ym5NdWFHVmhkRTl3ZEdsdmJuTXViV0Y0WEc0Z0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdGc2RDQWhQVDBnSjI1MWJXSmxjaWNwSUh0Y2JpQWdJQ0FnSUNBZ1lXeDBJRDBnZEdocGN5NXZjSFJwYjI1ekxtaGxZWFJQY0hScGIyNXpMbTFoZUZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWVd4MGN5NXdkWE5vS0dGc2RDbGNiaUFnSUNBZ0lHMWhjbXRsY2k1elpYUk1ZWFJNYm1jb1RDNXNZWFJNYm1jb2JHRjBURzVuTG14aGRDd2diR0YwVEc1bkxteHVaeXdnWVd4MEtTbGNiaUFnSUNCOUtWeHVJQ0FnSUhSb2FYTXVhR1ZoZEV4aGVXVnlJRDBnVEM1b1pXRjBUR0Y1WlhJb1hHNGdJQ0FnSUNCMGFHbHpMbTFoY210bGNuTXViV0Z3S0NocGRDd2dhVzVrWlhncElEMCtJRnRjYmlBZ0lDQWdJQ0FnYVhRdVoyVjBUR0YwVEc1bktDa3ViR0YwTEZ4dUlDQWdJQ0FnSUNCcGRDNW5aWFJNWVhSTWJtY29LUzVzYm1jc1hHNGdJQ0FnSUNBZ0lHRnNkSE5iYVc1a1pYaGRMRnh1SUNBZ0lDQWdYU2tzWEc0Z0lDQWdJQ0J2Y0hScGIyNXpUV1Z5WjJVb2V5QnRhVzVQY0dGamFYUjVPaUF3TGpVZ2ZTd2dkR2hwY3k1dmNIUnBiMjV6TG1obFlYUlBjSFJwYjI1ektWeHVJQ0FnSUNsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1b1pXRjBUR0Y1WlhKY2JpQWdmVnh1WEc0Z0lDOHFLaURtdUxMbW41UGt1THJtc0pUbXM2SGxtNzRnS2k5Y2JpQWdjSEpwZG1GMFpTQmpiMjVtYVdkQ2RXSmliR1ZNWVhsbGNpZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NWlkV0ppYkdWTVlYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NWlkV0ppYkdWTVlYbGxjaTV5WlcxdmRtVW9LVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbUoxWW1Kc1pVeGhlV1Z5SUQwZ1RDNXNZWGxsY2tkeWIzVndLQ2xjYmlBZ0lDQjBhR2x6TG0xaGNtdGxjbk11Wm05eVJXRmphQ2dvYldGeWEyVnlLU0E5UGlCN1hHNGdJQ0FnSUNCamIyNXpkQ0J5WVdScGRYTWdQU0IwYUdsekxtZGxkRUoxWW1Kc1pXUk5ZWEpyWlhKVGFYcGxLRzFoY210bGNpNW5aWFJFWVhSaEtDa3BYRzRnSUNBZ0lDQmpiMjV6ZENCbWFXeHNRMjlzYjNJZ1BTQjBhR2x6TG1kbGRFSjFZbUpzWldSTllYSnJaWEpEYjJ4dmNpaHRZWEpyWlhJdVoyVjBSR0YwWVNncEtWeHVJQ0FnSUNBZ1kyOXVjM1FnWTI5c2IzSWdQU0IwYUdsekxtOXdkR2x2Ym5NdVluVmlZbXhsVTNSeWIydGxRMjlzYjNJZ2ZId2diR2xuYUhSbGJpaG1hV3hzUTI5c2IzSXBYRzRnSUNBZ0lDQmpiMjV6ZENCM1pXbG5hSFFnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZblZpWW14bFUzUnliMnRsVjJsa2RHaGNiaUFnSUNBZ0lHTnZibk4wSUc5d1lXTnBkSGtnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZblZpWW14bFUzUnliMnRsVDNCaFkybDBlVnh1SUNBZ0lDQWdZMjl1YzNRZ1ptbHNiRTl3WVdOcGRIa2dQU0IwYUdsekxtOXdkR2x2Ym5NdVluVmlZbXhsUm1sc2JFOXdZV05wZEhsY2JpQWdJQ0FnSUdOdmJuTjBJR0oxWW1Kc1pTQTlJRXd1WTJseVkyeGxUV0Z5YTJWeUtHMWhjbXRsY2k1blpYUk1ZWFJNYm1jb0tTd2dlMXh1SUNBZ0lDQWdJQ0J5WVdScGRYTXNYRzRnSUNBZ0lDQWdJR052Ykc5eUxGeHVJQ0FnSUNBZ0lDQm1hV3hzUTI5c2IzSXNYRzRnSUNBZ0lDQWdJSGRsYVdkb2RDeGNiaUFnSUNBZ0lDQWdiM0JoWTJsMGVTeGNiaUFnSUNBZ0lDQWdabWxzYkU5d1lXTnBkSGtzWEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNDa2dlMXh1SUNBZ0lDQWdJQ0JpZFdKaWJHVXVZbWx1WkZCdmNIVndLSFJvYVhNdVoyVjBVRzl3ZFhCRGIyNTBaVzUwS0cxaGNtdGxjaTVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11YjNCMGFXOXVjeTUwYjI5c2RHbHdLU0I3WEc0Z0lDQWdJQ0FnSUdKMVltSnNaUzVpYVc1a1ZHOXZiSFJwY0NoMGFHbHpMbWRsZEZSdmIyeFVhWEJEYjI1MFpXNTBLRzFoY210bGNpNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1aWRXSmliR1ZNWVhsbGNpNWhaR1JNWVhsbGNpaGlkV0ppYkdVcFhHNGdJQ0FnZlNsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1aWRXSmliR1ZNWVhsbGNseHVJQ0I5WEc1Y2JpQWdMeW9xSU9pT3QrV1BsdVdidnVhZ2grYVV2dVdrcCtXUWppQnBZMjl1SUNvdlhHNGdJSEJ5YVhaaGRHVWdaMlYwVEdGeVoyVnlUV0Z5YTJWeVNXTnZiaWhrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZloyVjBUV0Z5YTJWeVNXTnZiaWhrWVhSaExDQjBjblZsS1Z4dUlDQjlYRzVjYmlBZ0x5b3FJT2lPdCtXUGx1V2J2dWFnaHlCcFkyOXVJQ292WEc0Z0lIQnlhWFpoZEdVZ1oyVjBUV0Z5YTJWeVNXTnZiaWhrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZloyVjBUV0Z5YTJWeVNXTnZiaWhrWVhSaExDQm1ZV3h6WlNsY2JpQWdmVnh1WEc0Z0lDOHFLaURvanJmbGo1Ymx2WlBsaVkwZ2JXRnlhMlZ5SU9tY2dPaW1nZVd4bGVla3V1ZWFoQ0JwWTI5dVhHNGdJQ0FxSUVCd1lYSmhiU0JrWVhSaFhHNGdJQ0FxSUVCd1lYSmhiU0I3WW05dmJHVmhibjBnYVhOTVlYSm5aWElnNXBpdjVaQ201cFMrNWFTblhHNGdJQ0FxTDF4dUlDQndjbWwyWVhSbElGOW5aWFJOWVhKclpYSkpZMjl1S0Z4dUlDQWdJR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU3hjYmlBZ0lDQnBjMHhoY21kbGNqb2dZbTl2YkdWaGJseHVJQ0FwT2lCTUxrbGpiMjRnZkNCTUxrUnBka2xqYjI0Z2UxeHVJQ0FnSUdOdmJuTjBJR2xqYjI1VGFYcGxJRDBnZEdocGN5NXZjSFJwYjI1ekxtbGpiMjVUYVhwbFhHNGdJQ0FnWTI5dWMzUWdhV052YmtGdVkyaHZjaUE5SUhSb2FYTXViM0IwYVc5dWN5NXBZMjl1UVc1amFHOXlYRzRnSUNBZ1kyOXVjM1FnYkdGeVoyVnlTV052YmxOcGVtVWdQU0JiYVdOdmJsTnBlbVZiTUYwZ0tpQXhMalVzSUdsamIyNVRhWHBsV3pGZElDb2dNUzQxWFNCaGN5QmJYRzRnSUNBZ0lDQnVkVzFpWlhJc1hHNGdJQ0FnSUNCdWRXMWlaWEpjYmlBZ0lDQmRYRzRnSUNBZ1kyOXVjM1FnYkdGeVoyVnlTV052YmtGdVkyaHZjaUE5SUZ0cFkyOXVRVzVqYUc5eVd6QmRJQ29nTVM0MUxDQnBZMjl1UVc1amFHOXlXekZkSUNvZ01TNDFYU0JoY3lCYlhHNGdJQ0FnSUNCdWRXMWlaWElzWEc0Z0lDQWdJQ0J1ZFcxaVpYSmNiaUFnSUNCZFhHNWNiaUFnSUNCamIyNXpkQ0JwWTI5dVEyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVhV052YmtOdmJHOXlYRzVjYmlBZ0lDQnpkMmwwWTJnZ0tIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVZIbHdaU2tnZTF4dUlDQWdJQ0FnWTJGelpTQW5hVzFoWjJVbk9pQjdYRzRnSUNBZ0lDQWdJQzh2SUhKbGRIVnliaUJNTG1samIyNG9lMXh1SUNBZ0lDQWdJQ0F2THlBZ0lHbGpiMjVWY213NklIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVNXMWhaMlZWY213c1hHNGdJQ0FnSUNBZ0lDOHZJQ0FnYVdOdmJsTnBlbVU2SUdselRHRnlaMlZ5SUQ4Z2JHRnlaMlZ5U1dOdmJsTnBlbVVnT2lCcFkyOXVVMmw2WlN4Y2JpQWdJQ0FnSUNBZ0x5OGdJQ0JwWTI5dVFXNWphRzl5TEZ4dUlDQWdJQ0FnSUNBdkx5QjlLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdZMkZ6WlNBblptOXVkRjlqYkdGemN5YzZYRzRnSUNBZ0lDQmpZWE5sSUNkemVXMWliMnduT2x4dUlDQWdJQ0FnWTJGelpTQW5kVzVwWTI5a1pTYzZJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRXd1WkdsMlNXTnZiaWg3WEc0Z0lDQWdJQ0FnSUNBZ2FIUnRiRG9nZEdocGN5NW5aWFJEZFhOMGIyMUpZMjl1U0ZSTlRDaGtZWFJoTENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWTI5dVUybDZaVG9nYVhOTVlYSm5aWElnUHlCc1lYSm5aWEpKWTI5dVUybDZaU0E2SUdsamIyNVRhWHBsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV052YmtOdmJHOXlMRnh1SUNBZ0lDQWdJQ0FnSUgwcExGeHVJQ0FnSUNBZ0lDQWdJR05zWVhOelRtRnRaVG9nYVhOTVlYSm5aWElnUHlBbmJHRnlaMlV0WkdsMkxXbGpiMjR0YldGeWEyVnlKeUE2SUNjbkxGeHVJQ0FnSUNBZ0lDQWdJR2xqYjI1VGFYcGxPaUJwYzB4aGNtZGxjaUEvSUd4aGNtZGxja2xqYjI1VGFYcGxJRG9nYVdOdmJsTnBlbVVzWEc0Z0lDQWdJQ0FnSUNBZ2FXTnZia0Z1WTJodmNqb2dhWE5NWVhKblpYSWdQeUJzWVhKblpYSkpZMjl1UVc1amFHOXlJRG9nYVdOdmJrRnVZMmh2Y2l4Y2JpQWdJQ0FnSUNBZ0lDQjBiMjlzZEdsd1FXNWphRzl5T2lCcGMweGhjbWRsY2x4dUlDQWdJQ0FnSUNBZ0lDQWdQeUJiTUN3Z0xXeGhjbWRsY2tsamIyNUJibU5vYjNKYk1WMGdMeUF5WFZ4dUlDQWdJQ0FnSUNBZ0lDQWdPaUJiTUN3Z0xXbGpiMjVCYm1Ob2IzSmJNVjBnTHlBeVhTeGNiaUFnSUNBZ0lDQWdJQ0J3YjNCMWNFRnVZMmh2Y2pvZ2FYTk1ZWEpuWlhKY2JpQWdJQ0FnSUNBZ0lDQWdJRDhnV3pBc0lDMXNZWEpuWlhKSlkyOXVRVzVqYUc5eVd6RmRJQzhnTWwxY2JpQWdJQ0FnSUNBZ0lDQWdJRG9nV3pBc0lDMXBZMjl1UVc1amFHOXlXekZkSUM4Z01sMHNYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JrWldaaGRXeDBPaUI3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhnY21WdVpHVnlWSGx3WlNEa3VJM29nNzNrdUxvZ0pIdDBhR2x6TG05d2RHbHZibk11YVdOdmJsUjVjR1Y5WUNsY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnTHlvcUlPaU90K1dQbG1samIyNGdhSFJ0YkNBcUwxeHVJQ0J3Y21sMllYUmxJR2RsZEVOMWMzUnZiVWxqYjI1SVZFMU1LRnh1SUNBZ0lHUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJTeGNiaUFnSUNCdmNIUnBiMjV6UHpvZ1NXTnZibEpsYm1SbGNrWjFibU5QY0hScGIyNWNiaUFnS1RvZ2MzUnlhVzVuSUh0Y2JpQWdJQ0JwWmlBb2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1U1pXNWtaWEpsY2lrZ2UxeHVJQ0FnSUNBZ2IzQjBhVzl1Y3lBOUlFOWlhbVZqZEM1aGMzTnBaMjRvZTMwc0lIUm9hWE11YjNCMGFXOXVjeXdnYjNCMGFXOXVjeWxjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG05d2RHbHZibk11YVdOdmJsSmxibVJsY21WeUtHUmhkR0VzSUc5d2RHbHZibk1wWEc0Z0lDQWdmVnh1SUNBZ0lHeGxkQ0JqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1cFkyOXVRMjlzYjNKY2JpQWdJQ0J6ZDJsMFkyZ2dLSFJvYVhNdWIzQjBhVzl1Y3k1eVpXNWtaWEpRYjJsdWRFTnZiRzl5Vkhsd1pTa2dlMXh1SUNBZ0lDQWdZMkZ6WlNBbmMybHVaMnhsSnpvZ2UxeHVJQ0FnSUNBZ0lDQmpiMnh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVEyOXNiM0pjYmlBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHTmhjMlVnSjJOc1lYTnphV1pwWldRbk9pQjdYRzRnSUNBZ0lDQWdJR052Ykc5eUlEMGdkR2hwY3k1blpYUkRiR0Z6YzJsbWVVMWhjbXRsY2tOdmJHOXlLR1JoZEdFcFhHNGdJQ0FnSUNBZ0lHSnlaV0ZyWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JqWVhObElDZHpaV2R0Wlc1MFpXUW5PaUI3WEc0Z0lDQWdJQ0FnSUdOdmJHOXlJRDBnZEdocGN5NW5aWFJUWldkdFpXNTBaV1JOWVhKclpYSkRiMnh2Y2loa1lYUmhLVnh1SUNBZ0lDQWdJQ0JpY21WaGExeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1pHVm1ZWFZzZERvZ2UxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hHNGdJQ0FnSUNBZ0lDQWdZSEpsYm1SbGNsQnZhVzUwUTI5c2IzSlVlWEJsSU9TNGplYVVyK2FNZ1Z3aUpIdDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlVRzlwYm5SRGIyeHZjbFI1Y0dWOVhDSmdYRzRnSUNBZ0lDQWdJQ2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2MzZHBkR05vSUNoMGFHbHpMbTl3ZEdsdmJuTXVhV052YmxSNWNHVXBJSHRjYmlBZ0lDQWdJQzh2SU9TOXYrZVVxQ0JqYkdGemMxeHVJQ0FnSUNBZ1kyRnpaU0FuWm05dWRGOWpiR0Z6Y3ljNklIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHQmNiaUFnSUNBZ0lDQWdJQ0E4YVNCamJHRnpjejFjSWlSN2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1RGJHRnpjMzFjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVOVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0k2SUNSN1kyOXNiM0o5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SUNSN2IzQjBhVzl1Y3k1cFkyOXVVMmw2WlZzd1hYMXdlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBdlBseHVJQ0FnSUNBZ0lDQmdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQXZMeURrdmIvbmxLZ2djM1puWEc0Z0lDQWdJQ0JqWVhObElDZHplVzFpYjJ3bk9pQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmdYRzRnSUNBZ0lDQWdJQ0FnUEhOMlp5QmpiR0Z6Y3oxY0ltbGpiMjR0YzNsdFltOXNYQ0lnWVhKcFlTMW9hV1JrWlc0OVhDSjBjblZsWENJK1hHNGdJQ0FnSUNBZ0lDQWdJQ0E4ZFhObElIaHNhVzVyT21oeVpXWTlYQ0lrZTNSb2FYTXViM0IwYVc5dWN5NXBZMjl1VTNsdFltOXNmVndpSUM4K1hHNGdJQ0FnSUNBZ0lDQWdQQzl6ZG1jK1hHNGdJQ0FnSUNBZ0lHQmNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lDOHZJT1M5ditlVXFDQjFibWxqYjJSbFhHNGdJQ0FnSUNCallYTmxJQ2QxYm1samIyUmxKem9nZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWUZ4dUlDQWdJQ0FnSUNBZ0lEeHBYRzRnSUNBZ0lDQWdJQ0FnSUNCamJHRnpjejFjSWlSN2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1RGJHRnpjMzFjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVOVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0k2SUNSN1kyOXNiM0o5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SUNSN2IzQjBhVzl1Y3k1cFkyOXVVMmw2WlZzd1hYMXdlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FrZTNSb2FYTXViM0IwYVc5dWN5NXBZMjl1Vlc1cFkyOWtaWDFjYmlBZ0lDQWdJQ0FnSUNBOEwyaytYRzRnSUNBZ0lDQWdJR0JjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JpQWdMeW9xSU9lOGsrV3RtT1dJaHVleHUrZWJ1T1dGcytXUGd1YVZzQ0FxTDF4dUlDQndjbWwyWVhSbElHTmhZMmhsUTJ4aGMzTnBabmxRWVhKaGJYTW9LU0I3WEc0Z0lDQWdhV1lnS0NGMGFHbHpMbTl3ZEdsdmJuTXVZMnhoYzNOcFptbGxaRUYwZEhJcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5OMElIUnRjRG9nZXlCYmNISnZjRG9nYzNSeWFXNW5YVG9nVzNOMGNtbHVaeXdnYm5WdFltVnlYU0I5SUQwZ2UzMWNiaUFnSUNCamIyNXpkQ0J3Y205d0lEMGdkR2hwY3k1dmNIUnBiMjV6TG1Oc1lYTnphV1pwWldSQmRIUnlYRzRnSUNBZ2RHaHBjeTVrWVhSaFRHbHpkQzVtYjNKRllXTm9LQ2hrWVhSaEtTQTlQaUI3WEc0Z0lDQWdJQ0JwWmlBb1pHRjBZVnR3Y205d1hTQnBiaUIwYlhBcElIdGNiaUFnSUNBZ0lDQWdkRzF3VzJSaGRHRmJjSEp2Y0YxZElEMGdXMlJoZEdGYmNISnZjRjBzSUhSdGNGdGtZWFJoVzNCeWIzQmRYVnN4WFNBcklERmRYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjBiWEJiWkdGMFlWdHdjbTl3WFYwZ1BTQmJaR0YwWVZ0d2NtOXdYU3dnTVYxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5S1Z4dUlDQWdJR052Ym5OMElIWmhiSFZsY3lBOUlFOWlhbVZqZEM1MllXeDFaWE1vZEcxd0tWeHVJQ0FnSUhaaGJIVmxjeTV6YjNKMEtDaGhMQ0JpS1NBOVBpQmlXekZkSUMwZ1lWc3hYU2xjYmlBZ0lDQjBhR2x6TG1Oc1lYTnphV1pwWldSRGIyeHZjbEpsWm5NZ1BTQmJYVnh1SUNBZ0lHeGxkQ0J2ZEdobGNrNTFiWE1nUFNBd1hHNGdJQ0FnZG1Gc2RXVnpMbVp2Y2tWaFkyZ29LRnRoZEhSeUxDQnVkVzF6WFN3Z2FXNWtaWGdwSUQwK0lIdGNiaUFnSUNBZ0lHeGxkQ0JqYjJ4dmNpQTlJRVJGUmtGVlRGUmZRMDlNVDFKY2JpQWdJQ0FnSUdsbUlDaHBibVJsZUNBOElIUm9hWE11YjNCMGFXOXVjeTVqYkdGemMybG1hV1ZrUTI5c2IzSnpMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0JqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1amJHRnpjMmxtYVdWa1EyOXNiM0p6VzJsdVpHVjRYVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1amJHRnpjMmxtYVdWa1EyOXNiM0pOWVhCYllYUjBjbDBnUFNCamIyeHZjbHh1WEc0Z0lDQWdJQ0JwWmlBb2FXNWtaWGdnUENCMGFHbHpMbTl3ZEdsdmJuTXVZMnhoYzNOcFptbGxaRU52Ykc5eWN5NXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amJHRnpjMmxtYVdWa1EyOXNiM0pTWldaekxuQjFjMmdvZTF4dUlDQWdJQ0FnSUNBZ0lHRjBkSElzWEc0Z0lDQWdJQ0FnSUNBZ1kyOXNiM0lzWEc0Z0lDQWdJQ0FnSUNBZ2JuVnRjeXhjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUc5MGFHVnlUblZ0Y3lBclBTQnVkVzF6WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU2xjYmlBZ0lDQnBaaUFvYjNSb1pYSk9kVzF6SUQ0Z01Da2dlMXh1SUNBZ0lDQWdkR2hwY3k1amJHRnpjMmxtYVdWa1EyOXNiM0pTWldaekxuQjFjMmdvZTF4dUlDQWdJQ0FnSUNCaGRIUnlPaUFuNVlXMjVhNkRKeXhjYmlBZ0lDQWdJQ0FnWTI5c2IzSTZJRVJGUmtGVlRGUmZRMDlNVDFJc1hHNGdJQ0FnSUNBZ0lHNTFiWE02SUc5MGFHVnlUblZ0Y3l4Y2JpQWdJQ0FnSUgwcFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUM4cUtpRG52SlBsclpqbXNKVG1zNkhubTdqbGhiUGxqNExtbGJBZ0tpOWNiaUFnY0hKcGRtRjBaU0JqWVdOb1pVSjFZbUpzWlZCaGNtRnRjeWdwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11YjNCMGFXOXVjeTVpZFdKaWJHVlRhWHBsUVhSMGNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR052Ym5OMElHSjFZbUpzWldSVGFYcGxjMHhsYm1kMGFDQTlJSFJvYVhNdWIzQjBhVzl1Y3k1aWRXSmliR1ZUYVhwbGN5NXNaVzVuZEdoY2JpQWdJQ0JzWlhRZ2JXRjRVMmw2WlZaaGJDQTlJQzFKYm1acGJtbDBlVnh1SUNBZ0lHeGxkQ0J0YVc1VGFYcGxWbUZzSUQwZ1NXNW1hVzVwZEhsY2JpQWdJQ0JtYjNJZ0tHTnZibk4wSUdSaGRHRWdiMllnZEdocGN5NWtZWFJoVEdsemRDa2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2MybDZaVlpoYkNBOUlHUmhkR0ZiZEdocGN5NXZjSFJwYjI1ekxtSjFZbUpzWlZOcGVtVkJkSFJ5WFZ4dUlDQWdJQ0FnYldGNFUybDZaVlpoYkNBOUlFMWhkR2d1YldGNEtHMWhlRk5wZW1WV1lXd3NJSE5wZW1WV1lXd3BYRzRnSUNBZ0lDQnRhVzVUYVhwbFZtRnNJRDBnVFdGMGFDNXRhVzRvYldsdVUybDZaVlpoYkN3Z2MybDZaVlpoYkNsY2JpQWdJQ0I5WEc0Z0lDQWdZMjl1YzNRZ2MybDZaVk4wWlhBZ1BTQW9iV0Y0VTJsNlpWWmhiQ0F0SUcxcGJsTnBlbVZXWVd3Z0t5QXhLU0F2SUdKMVltSnNaV1JUYVhwbGMweGxibWQwYUZ4dUlDQWdJSFJvYVhNdVluVmlZbXhsWkZOcGVtVk5hVzRnUFNCdGFXNVRhWHBsVm1Gc1hHNGdJQ0FnZEdocGN5NWlkV0ppYkdWa1UybDZaVk4wWlhBZ1BTQnphWHBsVTNSbGNGeHVYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtOXdkR2x2Ym5NdVluVmlZbXhsUTI5c2IzSkJkSFJ5S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpiMjV6ZENCMGJYQTZJSHNnVzNCeWIzQTZJSE4wY21sdVoxMDZJRnR6ZEhKcGJtY3NJRzUxYldKbGNsMGdmU0E5SUh0OVhHNGdJQ0FnWTI5dWMzUWdjSEp2Y0NBOUlIUm9hWE11YjNCMGFXOXVjeTVpZFdKaWJHVkRiMnh2Y2tGMGRISmNiaUFnSUNCMGFHbHpMbVJoZEdGTWFYTjBMbVp2Y2tWaFkyZ29LR1JoZEdFcElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNoa1lYUmhXM0J5YjNCZElHbHVJSFJ0Y0NrZ2UxeHVJQ0FnSUNBZ0lDQjBiWEJiWkdGMFlWdHdjbTl3WFYwZ1BTQmJaR0YwWVZ0d2NtOXdYU3dnZEcxd1cyUmhkR0ZiY0hKdmNGMWRXekZkSUNzZ01WMWNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lIUnRjRnRrWVhSaFczQnliM0JkWFNBOUlGdGtZWFJoVzNCeWIzQmRMQ0F4WFZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBwWEc0Z0lDQWdZMjl1YzNRZ2RtRnNkV1Z6SUQwZ1QySnFaV04wTG5aaGJIVmxjeWgwYlhBcFhHNGdJQ0FnZG1Gc2RXVnpMbk52Y25Rb0tHRXNJR0lwSUQwK0lHSmJNVjBnTFNCaFd6RmRLVnh1SUNBZ0lIUm9hWE11WW5WaVlteGxaRU52Ykc5eVVtVm1jeUE5SUZ0ZFhHNGdJQ0FnZG1Gc2RXVnpMbVp2Y2tWaFkyZ29LRnRoZEhSeUxDQnVkVzF6WFN3Z2FXNWtaWGdwSUQwK0lIdGNiaUFnSUNBZ0lHeGxkQ0JqYjJ4dmNpQTlJRVJGUmtGVlRGUmZRMDlNVDFKY2JpQWdJQ0FnSUdsbUlDaHBibVJsZUNBOElIUm9hWE11YjNCMGFXOXVjeTVpZFdKaWJHVkRiMnh2Y25NdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNBZ0lHTnZiRzl5SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbUoxWW1Kc1pVTnZiRzl5YzF0cGJtUmxlRjFjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJSFJvYVhNdVluVmlZbXhsWkVOdmJHOXlUV0Z3VzJGMGRISmRJRDBnWTI5c2IzSmNiaUFnSUNBZ0lIUm9hWE11WW5WaVlteGxaRU52Ykc5eVVtVm1jeTV3ZFhOb0tIdGNiaUFnSUNBZ0lDQWdZWFIwY2l4Y2JpQWdJQ0FnSUNBZ1kyOXNiM0lzWEc0Z0lDQWdJQ0FnSUc1MWJYTXNYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lIMHBYRzRnSUgxY2JpQWdMeW9xSU9pT3QrV1BsdVdJaHVleHUrbWluT2lKc2lBcUwxeHVJQ0J3Y21sMllYUmxJR2RsZEVOc1lYTnphV1o1VFdGeWEyVnlRMjlzYjNJb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtUb2djM1J5YVc1bklIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWpiR0Z6YzJsbWFXVmtRMjlzYjNKTllYQmJaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVZMnhoYzNOcFptbGxaRUYwZEhKZFhWeHVJQ0I5WEc0Z0lDOHFLaURudkpQbHJaamxpSWJtcnJYbm03amxoYlBsajRMbWxiQWdLaTljYmlBZ2NISnBkbUYwWlNCallXTm9aVk5sWjIxbGJuUlFZWEpoYlhNb0tTQjdYRzRnSUNBZ1kyOXVjM1FnYzJWbmJXVnVkR1ZrVEdWdVozUm9JRDBnZEdocGN5NXZjSFJwYjI1ekxuTmxaMjFsYm5SbFpFTnZiRzl5Y3k1c1pXNW5kR2hjYmlBZ0lDQnNaWFFnYldGNFZtRnNJRDBnTFVsdVptbHVhWFI1WEc0Z0lDQWdiR1YwSUcxcGJsWmhiQ0E5SUVsdVptbHVhWFI1WEc0Z0lDQWdabTl5SUNoamIyNXpkQ0JrWVhSaElHOW1JSFJvYVhNdVpHRjBZVXhwYzNRcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJDQTlJR1JoZEdGYmRHaHBjeTV2Y0hScGIyNXpMbk5sWjIxbGJuUmxaRUYwZEhKZFhHNGdJQ0FnSUNCdFlYaFdZV3dnUFNCTllYUm9MbTFoZUNodFlYaFdZV3dzSUhaaGJDbGNiaUFnSUNBZ0lHMXBibFpoYkNBOUlFMWhkR2d1YldsdUtHMXBibFpoYkN3Z2RtRnNLVnh1SUNBZ0lIMWNiaUFnSUNCamIyNXpkQ0J6ZEdWd0lEMGdLRzFoZUZaaGJDQXRJRzFwYmxaaGJDQXJJREVwSUM4Z2MyVm5iV1Z1ZEdWa1RHVnVaM1JvWEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSTmFXNGdQU0J0YVc1V1lXeGNiaUFnSUNCMGFHbHpMbk5sWjIxbGJuUmxaRk4wWlhBZ1BTQnpkR1Z3WEc0Z0lIMWNiaUFnTHlvcUlPaU90K1dQbHVXSWh1YXV0ZW1pbk9pSnNpQXFMMXh1SUNCd2NtbDJZWFJsSUdkbGRGTmxaMjFsYm5SbFpFMWhjbXRsY2tOdmJHOXlLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2s2SUhOMGNtbHVaeUI3WEc0Z0lDQWdZMjl1YzNRZ2RtRnNJRDBnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11YzJWbmJXVnVkR1ZrUVhSMGNsMWNiaUFnSUNCamIyNXpkQ0JqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSRGIyeHZjbk5iWEc0Z0lDQWdJQ0J3WVhKelpVbHVkQ2duSnlBcklDaDJZV3dnTFNCMGFHbHpMbk5sWjIxbGJuUmxaRTFwYmlrZ0x5QjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQXNJREV3S1Z4dUlDQWdJRjFjYmlBZ0lDQnlaWFIxY200Z1kyOXNiM0pjYmlBZ2ZWeHVJQ0F2S2lvZzZJNjM1WStXNXJDVTVyT2g1YVNuNWJDUElDb3ZYRzRnSUhCeWFYWmhkR1VnWjJWMFFuVmlZbXhsWkUxaGNtdGxjbE5wZW1Vb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtUb2diblZ0WW1WeUlIdGNiaUFnSUNCamIyNXpkQ0IyWVd3Z1BTQmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NWlkV0ppYkdWVGFYcGxRWFIwY2wxY2JpQWdJQ0JqYjI1emRDQnphWHBsSUQwZ2RHaHBjeTV2Y0hScGIyNXpMbUoxWW1Kc1pWTnBlbVZ6VzF4dUlDQWdJQ0FnY0dGeWMyVkpiblFvSnljZ0t5QW9kbUZzSUMwZ2RHaHBjeTVpZFdKaWJHVmtVMmw2WlUxcGJpa2dMeUIwYUdsekxtSjFZbUpzWldSVGFYcGxVM1JsY0N3Z01UQXBYRzRnSUNBZ1hWeHVJQ0FnSUhKbGRIVnliaUJ6YVhwbFhHNGdJSDFjYmlBZ0x5b3FJT2lPdCtXUGx1YXdsT2F6b2VtaW5PaUpzaUFxTDF4dUlDQndjbWwyWVhSbElHZGxkRUoxWW1Kc1pXUk5ZWEpyWlhKRGIyeHZjaWhrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwT2lCemRISnBibWNnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1KMVltSnNaV1JEYjJ4dmNrMWhjRnRrWVhSaFczUm9hWE11YjNCMGFXOXVjeTVpZFdKaWJHVkRiMnh2Y2tGMGRISmRYVnh1SUNCOVhHNGdJQzhxS2lEb2pyZmxqNVlnY0c5d2RYQWc1WWFGNWE2NUlDb3ZYRzRnSUhCeWFYWmhkR1VnWjJWMFVHOXdkWEJEYjI1MFpXNTBLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2tnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjaWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVJQ2NuWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lBOVBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmdKSHQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeWZUb2dKSHRrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEpkZldCY2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUIwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUlEMDlQU0FuYjJKcVpXTjBKeWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR0FrZTNSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXViR0ZpWld4OU9pQWtlMXh1SUNBZ0lDQWdJQ0JrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEl1ZG1Gc2RXVmRYRzRnSUNBZ0lDQjlZRnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQXZLaW9nNVlpYjVidTZJR05zZFhOMFpYSWdhV052YmlBcUwxeHVJQ0J3Y21sMllYUmxJR2xqYjI1RGNtVmhkR1ZHZFc1amRHbHZiaWhqYkhWemRHVnlPaUJNTGsxaGNtdGxjbk5EYkhWemRHVnlLU0I3WEc0Z0lDQWdZMjl1YzNRZ1kyOXNiM0p6SUQwZ1d5Y2pOelUzTkRjeUp5d2dKeU0xTURrelJUSW5MQ0FuSTBOQ056azROeWNzSUNjalJrTTNOak5DSjExY2JpQWdJQ0JqYjI1emRDQnNaVzVuZEdnZ1BTQjBhR2x6TG1SaGRHRk1hWE4wTG14bGJtZDBhRnh1SUNBZ0lHTnZibk4wSUhOMFpYQWdQU0JzWlc1bmRHZ2dMeUJqYjJ4dmNuTXViR1Z1WjNSb1hHNGdJQ0FnWTI5dWMzUWdjMk5oYkdWVGRHVndJRDBnS0RFZ0xTQXdMamMxS1NBdklHTnZiRzl5Y3k1c1pXNW5kR2hjYmlBZ0lDQnNaWFFnWTI5c2IzSWdQU0IwYUdsekxtOXdkR2x2Ym5NdWFXTnZia052Ykc5eVhHNGdJQ0FnYkdWMElITmpZV3hsSUQwZ01WeHVJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlRMngxYzNSbGNrTnZiRzl5Vkhsd1pTQTlQVDBnSjNOdFlYSjBKeWtnZTF4dUlDQWdJQ0FnWTI5c2IzSWdQU0JqYjJ4dmNuTmJUV0YwYUM1bWJHOXZjaWdvWTJ4MWMzUmxjaTVuWlhSRGFHbHNaRU52ZFc1MEtDa2dMU0F4S1NBdklITjBaWEFwWFZ4dUlDQWdJQ0FnYzJOaGJHVWdQVnh1SUNBZ0lDQWdJQ0FvVFdGMGFDNW1iRzl2Y2lnb1kyeDFjM1JsY2k1blpYUkRhR2xzWkVOdmRXNTBLQ2tnTFNBeEtTQXZJSE4wWlhBcElDc2dNU2tnS2lCelkyRnNaVk4wWlhBZ0sxeHVJQ0FnSUNBZ0lDQXdMamMxWEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCTUxtUnBka2xqYjI0b2UxeHVJQ0FnSUNBZ2FIUnRiRG9nWUZ4dUlDQWdJQ0FnSUR4a2FYWmNiaUFnSUNBZ0lDQWdjM1I1YkdVOVhDSmNiaUFnSUNBZ0lDQWdJQ0JpYjNKa1pYSXRjbUZrYVhWek9pQTFNQ1U3WEc0Z0lDQWdJQ0FnSUNBZ2NHOXphWFJwYjI0NklISmxiR0YwYVhabE8xeHVJQ0FnSUNBZ0lDQWdJSGRwWkhSb09pQTFNSEI0TzF4dUlDQWdJQ0FnSUNBZ0lHaGxhV2RvZERvZ05UQndlRHRjYmlBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20wNklITmpZV3hsTTJRb0pIdHpZMkZzWlgwc0lDUjdjMk5oYkdWOUxDQXhLVnh1SUNBZ0lDQWdJQ0JjSWx4dUlDQWdJQ0FnSUNBK1hHNGdJQ0FnSUNBZ0lEeGthWFpjYmlBZ0lDQWdJQ0FnSUNCemRIbHNaVDFjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdZbTl5WkdWeUxYSmhaR2wxY3pvZ05UQWxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ltRmphMmR5YjNWdVpEb2dKSHRzYVdkb2RHVnVLR052Ykc5eUtYMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCM2FXUjBhRG9nTlRCd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUdobGFXZG9kRG9nTlRCd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUc5d1lXTnBkSGs2SURBdU56dGNiaUFnSUNBZ0lDQWdJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2Y0RvZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bFpuUTZJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJajVjYmlBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdJRHhrYVhaY2JpQWdJQ0FnSUNBZ0lDQnpkSGxzWlQxY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnWW05eVpHVnlMWEpoWkdsMWN6b2dOVEFsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZbUZqYTJkeWIzVnVaRG9nSkh0amIyeHZjbjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZjR0ZqYVhSNU9pQXdMamc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjNhV1IwYURvZ016SndlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHaGxhV2RvZERvZ016SndlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhjbWRwYmpvZ09YQjRPMXh1SUNBZ0lDQWdJQ0FnSUZ3aVBseHVJQ0FnSUNBZ0lDQThMMlJwZGo1Y2JpQWdJQ0FnSUNBZ1BHUnBkbHh1SUNBZ0lDQWdJQ0FnSUhOMGVXeGxQVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBaWGgwTFdGc2FXZHVPaUJqWlc1MFpYSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCc2FXNWxMV2hsYVdkb2REb2dNekp3ZUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ2YzJsMGFXOXVPaUJoWW5OdmJIVjBaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnZjRG9nT1hCNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWbWREb2dPWEI0TzF4dUlDQWdJQ0FnSUNBZ0lDQWdkMmxrZEdnNklETXljSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm9aV2xuYUhRNklETXljSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ2QyaHBkR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJREUwY0hnN1hHNGdJQ0FnSUNBZ0lDQWdYQ0pjYmlBZ0lDQWdJQ0FnSUNBK1hHNGdJQ0FnSUNBZ0lDQWdKSHRqYkhWemRHVnlMbWRsZEVOb2FXeGtRMjkxYm5Rb0tYMWNiaUFnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnSUNBZ1BDOWthWFkrWEc0Z0lDQWdJQ0JnTEZ4dUlDQWdJQ0FnYVdOdmJsTnBlbVU2SUZzME1Dd2dOREJkTEZ4dUlDQWdJSDBwWEc0Z0lIMWNibjFjYmlJc0ltbHRjRzl5ZENCUWIyeDVaMjl1SUdaeWIyMGdKeTR2VUc5c2VXZHZiaWRjYm1sdGNHOXlkQ0JRYjJ4NVoyOXVjMHhoZVdWeUxDQjdJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk1nZlNCbWNtOXRJQ2N1TDFCdmJIbG5iMjV6VEdGNVpYSW5YRzVwYlhCdmNuUWdleUJFWVhSaFRHbHpkRWwwWlcwc0lFTm9ZVzV1Wld4R2RXNWpJSDBnWm5KdmJTQW5MaTR2WkdWbWFXNXBkR2x2Ym5NblhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVkeWFXUnpUR0Y1WlhJZ1pYaDBaVzVrY3lCUWIyeDVaMjl1YzB4aGVXVnlJSHRjYmlBZ2NISnBkbUYwWlNCd2NtOXdUV0Y0VEdWdVozUm9PaUJ1ZFcxaVpYSmNiaUFnWTI5dWMzUnlkV04wYjNJb1hHNGdJQ0FnYldGd09pQk1MazFoY0N4Y2JpQWdJQ0JrWVhSaFRHbHpkRG9nUkdGMFlVeHBjM1JKZEdWdFcxMHNYRzRnSUNBZ2IzQjBhVzl1Y3pvZ1VHOXNlV2R2Ymt4aGVXVnlUM0IwYVc5dWN5eGNiaUFnSUNCamFHRnVibVZzUm5WdVl6b2dRMmhoYm01bGJFWjFibU5jYmlBZ0tTQjdYRzRnSUNBZ2MzVndaWElvYldGd0xDQmtZWFJoVEdsemRDd2diM0IwYVc5dWN5d2dZMmhoYm01bGJFWjFibU1wWEc0Z0lDQWdkR2hwY3k1d2NtOXdUV0Y0VEdWdVozUm9JRDBnTFRGY2JpQWdmVnh1SUNCd2RXSnNhV01nY21Wa2NtRjNLQ2tnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTUyYVhOcFlteGxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUm9hWE11YkdGNVpYSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJHRjVaWEl1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTVzWVhsbGNpQTlJSFJvYVhNdVkyOXVabWxuUjNKcFpFeGhlV1Z5S0NsY2JpQWdJQ0IwYUdsekxtMWhjQzVoWkdSTVlYbGxjaWgwYUdsekxteGhlV1Z5S1Z4dUlDQWdJQzh2SUhSdmIyeDBhWEFnNXB5SjVZK3Y2SU85Nlp5QTZLYUI1NXUwNW82bDViR1Y1NlM2Nzd5TTZaeUE2S2FCNVp5b0lIQnZiSGxuYjI0ZzVyZTc1WXFnNVlpdzVaeXc1WnUrNUxpSzVMbUw1WkNPNW9tTjVZK3Y1THVsNzd5TTVvbUE1THVsNlp5QTZLYUI1YnUyNkwrZjZLNis1NzJ1WEc0Z0lDQWdkR2hwY3k1amIyNW1hV2RVYjI5c2RHbHdLQ2xjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLQ2dwSUQwK0lIdGNiaUFnSUNBZ0lIUm9hWE11ZW05dmJVaGhibVJzWlhJb0tWeHVJQ0FnSUgwc0lESXdNQ2xjYmlBZ0lDQnlaWFIxY200Z2RHaHBjMXh1SUNCOVhHNGdJSEIxWW14cFl5QjBiMmRuYkdWVWIyOXNkR2x3S0hacGMybGliR1U2SUdKdmIyeGxZVzRwSUh0Y2JpQWdJQ0IwYUdsekxuQnZiSGxuYjI1ekxtWnZja1ZoWTJnb0tIQnZiSGxuYjI0cElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNod2IyeDVaMjl1TG1kbGRGUnZiMngwYVhBb0tTa2dlMXh1SUNBZ0lDQWdJQ0J3YjJ4NVoyOXVMbWRsZEZSdmIyeDBhWEFvS1M1elpYUlBjR0ZqYVhSNUtIWnBjMmxpYkdVZ1B5QXhJRG9nTUNsY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5S1Z4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCcGJtbDBSWFpsYm5Rb0tTQjdYRzRnSUNBZ2RHaHBjeTV0WVhBdWIyNG9KM3B2YjIwbkxDQjBhR2x6TG5wdmIyMUlZVzVrYkdWeUxtSnBibVFvZEdocGN5a3BYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQmpiMjVtYVdkVWIyOXNkR2x3S0NrZ2UxeHVJQ0FnSUhSb2FYTXVjSEp2Y0UxaGVFeGxibWQwYUNBOUlIUm9hWE11WjJWMFVISnZjRTFoZUV4bGJtZDBhQ2dwWEc0Z0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NTBiMjlzZEdsd1FYUjBjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NXdiMng1WjI5dWN5NW1iM0pGWVdOb0tDaHdiMng1WjI5dUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhCdmJIbG5iMjR1WW1sdVpGUnZiMngwYVhBb2RHaHBjeTVuWlhSVWIyOXNWR2x3UTI5dWRHVnVkQ2h3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2tzSUh0Y2JpQWdJQ0FnSUNBZ0lDQndaWEp0WVc1bGJuUTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lDQWdaR2x5WldOMGFXOXVPaUFuWTJWdWRHVnlKeXhjYmlBZ0lDQWdJQ0FnZlNsY2JpQWdJQ0FnSUgwcFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTI5dVptbG5SM0pwWkV4aGVXVnlLQ2tnZTF4dUlDQWdJSFJvYVhNdWNHOXNlV2R2Ymt4aGVXVnlJRDBnVEM1c1lYbGxja2R5YjNWd0tDbGNiaUFnSUNCMGFHbHpMbkJ2YkhsbmIyNXpJRDBnZEdocGN5NXdiMng1WjI5dWN5NXRZWEFvS0hCdmJIbG5iMjRwSUQwK0lIdGNiaUFnSUNBZ0lHeGxkQ0JqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1amIyeHZjbHh1SUNBZ0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIyeDVaMjl1UTI5c2IzSlVlWEJsSUQwOVBTQW5jMlZuYldWdWRHVmtKeWtnZTF4dUlDQWdJQ0FnSUNCamIyeHZjaUE5SUhSb2FYTXVaMlYwVTJWbmJXVnVkR1ZrVUc5c2VXZHZia052Ykc5eUtIQnZiSGxuYjI0dVoyVjBSR0YwWVNncEtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1kyOXVjM1FnYjNCMGFXOXVjem9nVEM1UWIyeDViR2x1WlU5d2RHbHZibk1nUFNCUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCMGFHbHpMbTl3ZEdsdmJuTXNJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSXNYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdMeThnNlllTjVwYXc1YnFVNTVTb0lHOXdkR2x2Ym5OY2JpQWdJQ0FnSUdOdmJuTjBJRzVsZDFCdmJIbG5iMjRnUFNCdVpYY2dVRzlzZVdkdmJpaHdiMng1WjI5dUxtZGxkRXhoZEV4dVozTW9LU3dnYjNCMGFXOXVjeWxjYmlBZ0lDQWdJRzVsZDFCdmJIbG5iMjR1YzJWMFJHRjBZU2h3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJRzVsZDFCdmJIbG5iMjR1YjI0b0oyTnNhV05ySnl3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBdkx5QjBhR2x6TG5CdmJIbG5iMjVEYkdsamEwaGhibVJzWlhJb2NHOXNlV2R2YmlsY2JpQWdJQ0FnSUgwcFhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lrZ2UxeHVJQ0FnSUNBZ0lDQnVaWGRRYjJ4NVoyOXVMbUpwYm1SUWIzQjFjQ2gwYUdsekxtZGxkRkJ2Y0hWd1EyOXVkR1Z1ZENodVpYZFFiMng1WjI5dUxtZGxkRVJoZEdFb0tTa3BYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z2JtVjNVRzlzZVdkdmJseHVJQ0FnSUgwcFhHNGdJQ0FnZEdocGN5NXdiMng1WjI5dWN5NW1iM0pGWVdOb0tDaHdiMng1WjI5dUtTQTlQaUI3WEc0Z0lDQWdJQ0IwYUdsekxuQnZiSGxuYjI1TVlYbGxjaTVoWkdSTVlYbGxjaWh3YjJ4NVoyOXVLVnh1SUNBZ0lIMHBYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjRzlzZVdkdmJreGhlV1Z5WEc0Z0lIMWNiaUFnY0hKcGRtRjBaU0I2YjI5dFNHRnVaR3hsY2lncElIdGNiaUFnSUNCamIyNXpkQ0J3YjJ4NVoyOXVJRDBnZEdocGN5NXdiMng1WjI5dWMxc3dYVnh1SUNBZ0lHbG1JQ2doY0c5c2VXZHZiaWtnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVkRzluWjJ4bFZHOXZiSFJwY0NoY2JpQWdJQ0FnSUhSb2FYTXVaMlYwVW1WamRHRnVaMnhsVjJsa2RHZ29jRzlzZVdkdmJpa2dQbHh1SUNBZ0lDQWdJQ0IwYUdsekxtZGxkRlJ2YjJ4MGFYQk5ZWGhYYVdSMGFDaDBhR2x6TG5CeWIzQk5ZWGhNWlc1bmRHZ3BYRzRnSUNBZ0tWeHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1oyVjBVbVZqZEdGdVoyeGxWMmxrZEdnb2NHOXNlV2R2YmpvZ1VHOXNlV2R2YmlrZ2UxeHVJQ0FnSUhKbGRIVnliaUFvWEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzVzWVhSTWJtZFViMHhoZVdWeVVHOXBiblFvY0c5c2VXZHZiaTVuWlhSQ2IzVnVaSE1vS1M1blpYUk9iM0owYUVWaGMzUW9LU2t1ZUNBdFhHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1c1lYUk1ibWRVYjB4aGVXVnlVRzlwYm5Rb2NHOXNlV2R2Ymk1blpYUkNiM1Z1WkhNb0tTNW5aWFJUYjNWMGFGZGxjM1FvS1NrdWVGeHVJQ0FnSUNsY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdkbGRGUnZiMngwYVhCTllYaFhhV1IwYUNoMFpYaDBUR1Z1WjNSb09pQnVkVzFpWlhJcElIdGNiaUFnSUNCeVpYUjFjbTRnZEdWNGRFeGxibWQwYUNBcUlERXlJQ3NnTVRSY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdkbGRGQnliM0JOWVhoTVpXNW5kR2dvS1NCN1hHNGdJQ0FnWTI5dWMzUWdjSEp2Y0NBOVhHNGdJQ0FnSUNCMGVYQmxiMllnZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpQTlQVDBnSjNOMGNtbHVaeWRjYmlBZ0lDQWdJQ0FnUHlCMGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlYRzRnSUNBZ0lDQWdJRG9nZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpNTJZV3gxWlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5CdmJIbG5iMjV6WEc0Z0lDQWdJQ0F1YldGd0tDaHdiMng1WjI5dUtTQTlQaUJnSkh0d2IyeDVaMjl1TG1kbGRFUmhkR0VvS1Z0d2NtOXdYWDFnTG14bGJtZDBhQ2xjYmlBZ0lDQWdJQzV5WldSMVkyVW9LSEJ5WlhZc0lHTjFjbklwSUQwK0lIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFMWhkR2d1YldGNEtIQnlaWFlzSUdOMWNuSXBYRzRnSUNBZ0lDQjlMQ0F3S1Z4dUlDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ2V5QkVZWFJoVEdsemRFbDBaVzBnZlNCbWNtOXRJQ2N1TGk5a1pXWnBibWwwYVc5dWN5ZGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHOXNlV2R2YmlCbGVIUmxibVJ6SUV3dVVHOXNlV2R2YmlCN1hHNGdJQzh2SUhSemJHbHVkRHBrYVhOaFlteGxMVzVsZUhRdGJHbHVaVHAyWVhKcFlXSnNaUzF1WVcxbFhHNGdJSEJ5YVhaaGRHVWdYMTlrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzFjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9YRzRnSUNBZ2JHRjBiRzVuY3pwY2JpQWdJQ0FnSUh3Z1RDNU1ZWFJNYm1kRmVIQnlaWE56YVc5dVcxMWNiaUFnSUNBZ0lId2dUQzVNWVhSTWJtZEZlSEJ5WlhOemFXOXVXMTFiWFZ4dUlDQWdJQ0FnZkNCTUxreGhkRXh1WjBWNGNISmxjM05wYjI1YlhWdGRXMTBzWEc0Z0lDQWdiM0IwYVc5dWN6ODZJRXd1VUc5c2VXeHBibVZQY0hScGIyNXpYRzRnSUNrZ2UxeHVJQ0FnSUhOMWNHVnlLR3hoZEd4dVozTXNJRzl3ZEdsdmJuTXBYRzRnSUgxY2JpQWdjSFZpYkdsaklITmxkRVJoZEdFb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtTQjdYRzRnSUNBZ2RHaHBjeTVmWDJSaGRHRWdQU0JrWVhSaFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdkbGRFUmhkR0VvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgxOWtZWFJoWEc0Z0lIMWNibjFjYmlJc0ltbHRjRzl5ZENCN0lHeHBaMmgwWlc0c0lHUmhjbXRsYml3Z2IzQjBhVzl1YzAxbGNtZGxJSDBnWm5KdmJTQW5MaTR2ZFhScGJITXZhVzVrWlhnblhHNXBiWEJ2Y25RZ2V5QkVZWFJoVEdsemRFbDBaVzBzSUVOb1lXNXVaV3hHZFc1aklIMGdabkp2YlNBbkxpNHZaR1ZtYVc1cGRHbHZibk1uWEc1cGJYQnZjblFnVUc5c2VXZHZiaUJtY205dElDY3VMMUJ2YkhsbmIyNG5YRzVjYmk4cUtpRG11TExtbjVQcG9wem9pYkxtb0xmbHZJOGc1WTJWNklteWZPV0lodWF1dFNBcUwxeHVkSGx3WlNCUWIyeDVaMjl1VEdGNVpYSlNaVzVrWlhKRGIyeHZjbFI1Y0dVZ1BTQW5jMmx1WjJ4bEp5QjhJQ2R6WldkdFpXNTBaV1FuSUh3Z0oyTnNZWE56YVdacFpXUW5YRzUwZVhCbElFTnZiRzl5VFc5a1pTQTlJQ2RrWVhKclpXNG5JSHdnSjJ4cFoyaDBaVzRuSUh3Z0oyNXZjbTFoYkNkY2JseHVZMjl1YzNRZ1JFVkdRVlZNVkY5RFQweFBVaUE5SUNjak56SkJSa1JHSjF4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1eklHVjRkR1Z1WkhNZ1RDNVFiMng1YkdsdVpVOXdkR2x2Ym5NZ2UxeHVJQ0J5Wlc1a1pYSlFiMng1WjI5dVEyOXNiM0pVZVhCbE9pQlFiMng1WjI5dVRHRjVaWEpTWlc1a1pYSkRiMnh2Y2xSNWNHVmNibHh1SUNBdktpb2djRzl3ZFhBZzViR1Y1NlM2NWEyWDVxNjFJQ292WEc0Z0lIQnZjSFZ3UVhSMGNqODZJSE4wY21sdVp5QjhJSHNnYkdGaVpXdzZJSE4wY21sdVp6c2dkbUZzZFdVNklHRnVlU0I5WEc0Z0lDOHFLaUIwYjI5c2RHbHdJT1d4bGVla3V1V3RsK2F1dFNBcUwxeHVJQ0IwYjI5c2RHbHdRWFIwY2o4NklITjBjbWx1WjF4dVhHNGdJRzl3WVdOcGRIay9PaUJ1ZFcxaVpYSmNibHh1SUNBdktpb2c1WWlHNXE2MTVyaXk1cCtUNTd1ZjZLNmg1YTJYNXE2MUlDb3ZYRzRnSUhObFoyMWxiblJsWkVGMGRISS9PaUJ6ZEhKcGJtZGNiaUFnYzJWbmJXVnVkR1ZrUTI5c2IzSnpQem9nYzNSeWFXNW5XMTFjYmx4dUlDQXZLaW9nNVlpRzU3Rzc1WjZMNXJpeTVwK1Q1N3VmNks2aDVhMlg1cTYxSUNvdlhHNGdJR05zWVhOemFXWnBaV1JCZEhSeVB6b2djM1J5YVc1blhHNGdJR05zWVhOemFXWnBaV1JEYjJ4dmNuTS9PaUJ6ZEhKcGJtZGJYVnh1ZlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVRzlzZVdkdmJuTk1ZWGxsY2lCN1hHNGdJSEIxWW14cFl5QjBlWEJsT2lCemRISnBibWRjYmx4dUlDQndjbTkwWldOMFpXUWdkbWx6YVdKc1pUb2dZbTl2YkdWaGJseHVJQ0J3Y205MFpXTjBaV1FnYkdGNVpYSTZJRXd1VEdGNVpYSkhjbTkxY0Z4dVhHNGdJSEJ5YjNSbFkzUmxaQ0J0WVhBNklFd3VUV0Z3WEc0Z0lIQnliM1JsWTNSbFpDQmtZWFJoVEdsemREb2dSR0YwWVV4cGMzUkpkR1Z0VzExY2JpQWdjSEp2ZEdWamRHVmtJRzl3ZEdsdmJuTTZJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk5jYmlBZ2NISnZkR1ZqZEdWa0lHTm9ZVzV1Wld4R2RXNWpPaUJEYUdGdWJtVnNSblZ1WTF4dUlDQndjbTkwWldOMFpXUWdjMlZuYldWdWRHVmtUV2x1T2lCdWRXMWlaWEpjYmlBZ2NISnZkR1ZqZEdWa0lITmxaMjFsYm5SbFpGTjBaWEE2SUc1MWJXSmxjbHh1SUNCd2NtOTBaV04wWldRZ2NHOXNlV2R2Ym5NNklGQnZiSGxuYjI1YlhWeHVJQ0J3Y205MFpXTjBaV1FnWm05amRYTmxaRkJ2YkhsbmIyNDZJRkJ2YkhsbmIyNWNiaUFnY0hKdmRHVmpkR1ZrSUdadlkzVnpaV1JFYVhOd2JHRjVVRzlzZVdkdmJqb2dVRzlzZVdkdmJseHVJQ0J3Y205MFpXTjBaV1FnY0c5c2VXZHZia3hoZVdWeU9pQk1Ma3hoZVdWeVIzSnZkWEJjYmx4dUlDQXZLaW9nNks2dzViMlY1cCtRNUxpcUlIQnliM0FnNWErNTVicVU1NXFFNXJpeTVwK1Q2YUtjNklteUlDb3ZYRzRnSUhCeWFYWmhkR1VnWTJ4aGMzTnBabmxEYjJ4dmNrMWhjRG9nZXlCYmNISnZjRG9nYzNSeWFXNW5YVG9nYzNSeWFXNW5JSDFjYmlBZ0x5b3FJT1dJaHVleHUrYTRzdWFmayttaW5PaUpzdVdQZ3VlRnB5am1qNURrdnB2bnU1bm9zSVBubEtqb2dJWGt2Yi9ubEtncElDb3ZYRzRnSUhCeWFYWmhkR1VnWTJ4aGMzTnBabmxEYjJ4dmNsSmxabk02SUVGeWNtRjVQSHRjYmlBZ0lDQmhkSFJ5T2lCemRISnBibWRjYmlBZ0lDQmpiMnh2Y2pvZ2MzUnlhVzVuWEc0Z0lDQWdiblZ0Y3pvZ2JuVnRZbVZ5WEc0Z0lIMCtYRzRnSUhCeWFYWmhkR1VnWkdWbVlYVnNkRTl3ZEdsdmJuTTZJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk5jYmlBZ1kyOXVjM1J5ZFdOMGIzSW9YRzRnSUNBZ2JXRndPaUJNTGsxaGNDeGNiaUFnSUNCa1lYUmhUR2x6ZERvZ1JHRjBZVXhwYzNSSmRHVnRXMTBzWEc0Z0lDQWdiM0IwYVc5dWN6b2dVRzlzZVdkdmJreGhlV1Z5VDNCMGFXOXVjeXhjYmlBZ0lDQmphR0Z1Ym1Wc1JuVnVZem9nUTJoaGJtNWxiRVoxYm1OY2JpQWdLU0I3WEc0Z0lDQWdhV1lnS0NGQmNuSmhlUzVwYzBGeWNtRjVLR1JoZEdGTWFYTjBLU0I4ZkNCa1lYUmhUR2x6ZEM1c1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaGdaR0YwWVV4cGMzUWc1YitGNmFHNzVwaXY2WjJlNTZtNjVwV3c1N3VFWUNsY2JpQWdJQ0I5WEc1Y2JpQWdJQ0IwYUdsekxtUmxabUYxYkhSUGNIUnBiMjV6SUQwZ2UxeHVJQ0FnSUNBZ2NHOXdkWEJCZEhSeU9pQjdJR3hoWW1Wc09pQW41WkNONTZld0p5d2dkbUZzZFdVNklDZHVZVzFsSnlCOUxGeHVJQ0FnSUNBZ2RHOXZiSFJwY0VGMGRISTZJQ2R1WVcxbEp5eGNiaUFnSUNBZ0lHTnZiRzl5T2lCRVJVWkJWVXhVWDBOUFRFOVNMRnh1SUNBZ0lDQWdabWxzYkRvZ2RISjFaU3hjYmlBZ0lDQWdJR1pwYkd4RGIyeHZjam9nUkVWR1FWVk1WRjlEVDB4UFVpeGNiaUFnSUNBZ0lIZGxhV2RvZERvZ01TeGNiaUFnSUNBZ0lHOXdZV05wZEhrNklERXNYRzRnSUNBZ0lDQm1hV3hzVDNCaFkybDBlVG9nTUM0MExGeHVJQ0FnSUNBZ2NtVnVaR1Z5VUc5c2VXZHZia052Ykc5eVZIbHdaVG9nSjNOcGJtZHNaU2NzWEc0Z0lDQWdJQ0J6WldkdFpXNTBaV1JEYjJ4dmNuTTZJRnRFUlVaQlZVeFVYME5QVEU5U1hTeGNiaUFnSUNBZ0lHTnNZWE56YVdacFpXUkRiMnh2Y25NNklGdEVSVVpCVlV4VVgwTlBURTlTWFN4Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1MGVYQmxJRDBnSjNCdmJIbG5iMjRuWEc0Z0lDQWdkR2hwY3k1dFlYQWdQU0J0WVhCY2JpQWdJQ0IwYUdsekxtUmhkR0ZNYVhOMElEMGdaR0YwWVV4cGMzUmNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTWdQU0J2Y0hScGIyNXpUV1Z5WjJVb1hHNGdJQ0FnSUNCMGFHbHpMbVJsWm1GMWJIUlBjSFJwYjI1ekxGeHVJQ0FnSUNBZ2IzQjBhVzl1YzF4dUlDQWdJQ2tnWVhNZ1VHOXNlV2R2Ymt4aGVXVnlUM0IwYVc5dWMxeHVJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1nUFNCamFHRnVibVZzUm5WdVkxeHVYRzRnSUNBZ2RHaHBjeTUyYVhOcFlteGxJRDBnZEhKMVpWeHVJQ0FnSUhSb2FYTXVjRzlzZVdkdmJuTWdQU0JiWFZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQWdQU0F4WEc0Z0lDQWdkR2hwY3k1amJHRnpjMmxtZVVOdmJHOXlUV0Z3SUQwZ2UzMWNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUlFiMng1WjI5dUlEMGdiblZzYkZ4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVJRDBnYm5Wc2JGeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa2NtRjNLRzl3ZEdsdmJuTS9PaUJRYjJ4NVoyOXVUR0Y1WlhKUGNIUnBiMjV6S1NCN1hHNGdJQ0FnZEdocGN5NXBibWwwVDNCMGFXOXVjeWh2Y0hScGIyNXpLVnh1SUNBZ0lIUm9hWE11YVc1cGRGQnZiSGxuYjI1ektDbGNiaUFnSUNCMGFHbHpMbWx1YVhSRmRtVnVkQ2dwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y21Wa2NtRjNLQ2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjbVZrY21GM0tDa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NTJhWE5wWW14bEtTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSb2FYTXViR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YkdGNVpYSXVjbVZ0YjNabEtDbGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXNZWGxsY2lBOUlIUm9hWE11WTI5dVptbG5VRzlzZVdkdmJreGhlV1Z5S0NsY2JpQWdJQ0IwYUdsekxtMWhjQzVoWkdSTVlYbGxjaWgwYUdsekxteGhlV1Z5S1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6WEc0Z0lIMWNiaUFnY0hWaWJHbGpJR1pwZEVKdmRXNWtjeWdwSUh0Y2JpQWdJQ0IwYUdsekxtMWhjQzVtYVhSQ2IzVnVaSE1vZEdocGN5NW5aWFJDYjNWdVpITW9LU3dnZXlCd1lXUmthVzVuT2lCYk1qQXNJREl3WFNCOUtWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCblpYUkNiM1Z1WkhNb0tUb2dUQzVNWVhSTWJtZENiM1Z1WkhORmVIQnlaWE56YVc5dUlIdGNiaUFnSUNCcFppQW9kR2hwY3k1d2IyeDVaMjl1Y3k1c1pXNW5kR2dnUEQwZ01Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YldGd0xtZGxkRUp2ZFc1a2N5Z3BYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuQnZiSGxuYjI1ekxuSmxaSFZqWlNoY2JpQWdJQ0FnSUNod2NtVjJMQ0JqZFhKeUtTQTlQaUJ3Y21WMkxtVjRkR1Z1WkNoamRYSnlMbWRsZEVKdmRXNWtjeWdwS1N4Y2JpQWdJQ0FnSUV3dWJHRjBURzVuUW05MWJtUnpLRnh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZiSGxuYjI1eld6QmRMbWRsZEVKdmRXNWtjeWdwTG1kbGRFNXZjblJvUldGemRDZ3BMRnh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZiSGxuYjI1eld6QmRMbWRsZEVKdmRXNWtjeWdwTG1kbGRGTnZkWFJvVjJWemRDZ3BYRzRnSUNBZ0lDQXBYRzRnSUNBZ0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa1pYTjBjbTk1S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0cElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVLVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndkV0pzYVdNZ2RHOW5aMnhsVm1semFXSnNaU2gyYVhOcFlteGxPaUJpYjI5c1pXRnVLU0I3WEc0Z0lDQWdkR2hwY3k1MmFYTnBZbXhsSUQwZ2RtbHphV0pzWlZ4dUlDQWdJR2xtSUNnaGRHaHBjeTVzWVhsbGNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMmFYTnBZbXhsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1aFpHUk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0cElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2YkhsbmIyNHVjbVZ0YjNabEtDbGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEIxWW14cFl5QmphR0Z1WjJWRGIyeHZjaWhqYjJ4dmNqb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpMbVpwYkd4RGIyeHZjaUE5SUdOdmJHOXlYRzRnSUNBZ2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNGdJSEIxWW14cFl5QndhWFJqYUNocFpEb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjeTVtYjNKRllXTm9LQ2h3YjJ4NVoyOXVLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9jRzlzZVdkdmJpNW5aWFJFWVhSaEtDa3VhV1FnUFQwOUlHbGtLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjRzlzZVdkdmJrTnNhV05yU0dGdVpHeGxjaWh3YjJ4NVoyOXVMQ0IwY25WbEtWeHVJQ0FnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5S1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJuWlhSRGJHRnpjMmxtZVVOdmJHOXlVbVZtY3lncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWpiR0Z6YzJsbWVVTnZiRzl5VW1WbWMxeHVJQ0I5WEc0Z0lDOHZJSFJ6YkdsdWREcGthWE5oWW14bExXNWxlSFF0YkdsdVpUcHVieTFsYlhCMGVWeHVJQ0J3Y205MFpXTjBaV1FnYVc1cGRFVjJaVzUwS0NrZ2UzMWNiaUFnY0hKdmRHVmpkR1ZrSUdkbGRGUnZiMnhVYVhCRGIyNTBaVzUwS0dSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUFuSnlBcklHUmhkR0ZiZEdocGN5NXZjSFJwYjI1ekxuUnZiMngwYVhCQmRIUnlYVnh1SUNCOVhHNGdJSEJ5YjNSbFkzUmxaQ0JuWlhSUWIzQjFjRU52Ym5SbGJuUW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLU0I3WEc0Z0lDQWdhV1lnS0NGMGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdKeWRjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQjBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5SUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHQWtlM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhKOU9pQWtlMlJoZEdGYmRHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjbDE5WUZ4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSFJvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJZ1BUMDlJQ2R2WW1wbFkzUW5LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdZQ1I3ZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpNXNZV0psYkgwNklDUjdYRzRnSUNBZ0lDQWdJR1JoZEdGYmRHaHBjeTV2Y0hScGIyNXpMbkJ2Y0hWd1FYUjBjaTUyWVd4MVpWMWNiaUFnSUNBZ0lIMWdYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lIQnliM1JsWTNSbFpDQmpZV05vWlVOc1lYTnphV1o1VUdGeVlXMXpLQ2tnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTV2Y0hScGIyNXpMbU5zWVhOemFXWnBaV1JCZEhSeUtTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JqYjI1emRDQjBiWEE2SUhzZ1czQnliM0E2SUhOMGNtbHVaMTA2SUZ0emRISnBibWNzSUc1MWJXSmxjbDBnZlNBOUlIdDlYRzRnSUNBZ1kyOXVjM1FnY0hKdmNDQTlJSFJvYVhNdWIzQjBhVzl1Y3k1amJHRnpjMmxtYVdWa1FYUjBjbHh1SUNBZ0lIUm9hWE11WkdGMFlVeHBjM1F1Wm05eVJXRmphQ2dvWkdGMFlTa2dQVDRnZTF4dUlDQWdJQ0FnYVdZZ0tHUmhkR0ZiY0hKdmNGMGdhVzRnZEcxd0tTQjdYRzRnSUNBZ0lDQWdJSFJ0Y0Z0a1lYUmhXM0J5YjNCZFhTQTlJRnRrWVhSaFczQnliM0JkTENCMGJYQmJaR0YwWVZ0d2NtOXdYVjFiTVYwZ0t5QXhYVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkRzF3VzJSaGRHRmJjSEp2Y0YxZElEMGdXMlJoZEdGYmNISnZjRjBzSURGZFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNsY2JpQWdJQ0JqYjI1emRDQjJZV3gxWlhNZ1BTQlBZbXBsWTNRdWRtRnNkV1Z6S0hSdGNDbGNiaUFnSUNCMllXeDFaWE11YzI5eWRDZ29ZU3dnWWlrZ1BUNGdZbHN4WFNBdElHRmJNVjBwWEc0Z0lDQWdkR2hwY3k1amJHRnpjMmxtZVVOdmJHOXlVbVZtY3lBOUlGdGRYRzRnSUNBZ2RtRnNkV1Z6TG1admNrVmhZMmdvS0Z0aGRIUnlMQ0J1ZFcxelhTd2dhVzVrWlhncElEMCtJSHRjYmlBZ0lDQWdJR3hsZENCamIyeHZjaUE5SUNkaWJHRmpheWRjYmlBZ0lDQWdJR2xtSUNocGJtUmxlQ0E4SUhSb2FYTXViM0IwYVc5dWN5NWpiR0Z6YzJsbWFXVmtRMjlzYjNKekxteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMnh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTVqYkdGemMybG1hV1ZrUTI5c2IzSnpXMmx1WkdWNFhWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2RHaHBjeTVqYkdGemMybG1lVU52Ykc5eVRXRndXMkYwZEhKZElEMGdZMjlzYjNKY2JpQWdJQ0FnSUhSb2FYTXVZMnhoYzNOcFpubERiMnh2Y2xKbFpuTXVjSFZ6YUNoN1hHNGdJQ0FnSUNBZ0lHRjBkSElzWEc0Z0lDQWdJQ0FnSUdOdmJHOXlMRnh1SUNBZ0lDQWdJQ0J1ZFcxekxGeHVJQ0FnSUNBZ2ZTbGNiaUFnSUNCOUtWeHVJQ0I5WEc0Z0lIQnliM1JsWTNSbFpDQm5aWFJEYkdGemMybG1lVkJ2YkhsbmIyNURiMnh2Y2loa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwcE9pQnpkSEpwYm1jZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtTnNZWE56YVdaNVEyOXNiM0pOWVhCYlpHRjBZVnQwYUdsekxtOXdkR2x2Ym5NdVkyeGhjM05wWm1sbFpFRjBkSEpkWFZ4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCallXTm9aVk5sWjIxbGJuUlFZWEpoYlhNb0tTQjdYRzRnSUNBZ1kyOXVjM1FnYzJWbmJXVnVkR1ZrVEdWdVozUm9JRDBnZEdocGN5NXZjSFJwYjI1ekxuTmxaMjFsYm5SbFpFTnZiRzl5Y3k1c1pXNW5kR2hjYmlBZ0lDQnNaWFFnYldGNFZtRnNJRDBnTFVsdVptbHVhWFI1WEc0Z0lDQWdiR1YwSUcxcGJsWmhiQ0E5SUVsdVptbHVhWFI1WEc0Z0lDQWdabTl5SUNoamIyNXpkQ0JrWVhSaElHOW1JSFJvYVhNdVpHRjBZVXhwYzNRcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJDQTlJR1JoZEdGYmRHaHBjeTV2Y0hScGIyNXpMbk5sWjIxbGJuUmxaRUYwZEhKZFhHNGdJQ0FnSUNCdFlYaFdZV3dnUFNCTllYUm9MbTFoZUNodFlYaFdZV3dzSUhaaGJDbGNiaUFnSUNBZ0lHMXBibFpoYkNBOUlFMWhkR2d1YldsdUtHMXBibFpoYkN3Z2RtRnNLVnh1SUNBZ0lIMWNiaUFnSUNCamIyNXpkQ0J6ZEdWd0lEMGdLRzFoZUZaaGJDQXRJRzFwYmxaaGJDQXJJREVwSUM4Z2MyVm5iV1Z1ZEdWa1RHVnVaM1JvWEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSTmFXNGdQU0J0YVc1V1lXeGNiaUFnSUNCMGFHbHpMbk5sWjIxbGJuUmxaRk4wWlhBZ1BTQnpkR1Z3WEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdkbGRGTmxaMjFsYm5SbFpGQnZiSGxuYjI1RGIyeHZjaWhrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwT2lCemRISnBibWNnZTF4dUlDQWdJR052Ym5OMElIWmhiQ0E5SUdSaGRHRmJkR2hwY3k1dmNIUnBiMjV6TG5ObFoyMWxiblJsWkVGMGRISmRYRzRnSUNBZ1kyOXVjM1FnWTI5c2IzSWdQU0IwYUdsekxtOXdkR2x2Ym5NdWMyVm5iV1Z1ZEdWa1EyOXNiM0p6VzF4dUlDQWdJQ0FnY0dGeWMyVkpiblFvSnljZ0t5QW9kbUZzSUMwZ2RHaHBjeTV6WldkdFpXNTBaV1JOYVc0cElDOGdkR2hwY3k1elpXZHRaVzUwWldSVGRHVndMQ0F4TUNsY2JpQWdJQ0JkWEc0Z0lDQWdjbVYwZFhKdUlHTnZiRzl5WEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUhCdmJIbG5iMjVEYkdsamEwaGhibVJzWlhJb2NHOXNlV2R2YmpvZ1VHOXNlV2R2Yml3Z1ptbDBRbTkxYm1SelB6b2dZbTl2YkdWaGJpa2dlMXh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRkJ2YkhsbmIyNGdQU0J3YjJ4NVoyOXVYRzRnSUNBZ0x5OGc1WWlnNlptazVZbU41TGlBNUxpcUlHWnZZM1Z6WEc0Z0lDQWdhV1lnS0hSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsUWIyeDVaMjl1S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV2R2Ymk1eVpXMXZkbVVvS1Z4dUlDQWdJSDFjYmlBZ0lDQXZMeURubEovbWlKRGx2WlBsaVkwZ1ptOWpkWE5jYmlBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVVRzlzZVdkdmJpQTlJRzVsZHlCUWIyeDVaMjl1S0hCdmJIbG5iMjR1WjJWMFRHRjBURzVuY3lncExDQjdYRzRnSUNBZ0lDQmpiMnh2Y2pvZ1JFVkdRVlZNVkY5RFQweFBVaXhjYmlBZ0lDQWdJR1pwYkd4RGIyeHZjam9nZEdocGN5NW5aWFJEYjJ4dmNpaHdiMng1WjI5dUxtZGxkRVJoZEdFb0tTa3NYRzRnSUNBZ2ZTbGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV2R2Ymk1aFpHUlVieWgwYUdsekxtMWhjQ2xjYmx4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVYRzRnSUNBZ0lDQXVZbWx1WkZCdmNIVndLSFJvYVhNdVoyVjBVRzl3ZFhCRGIyNTBaVzUwS0hCdmJIbG5iMjR1WjJWMFJHRjBZU2dwS1NsY2JpQWdJQ0FnSUM1dmNHVnVVRzl3ZFhBb0tWeHVYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0dWIyNG9KM0J2Y0hWd1kyeHZjMlVuTENBb0tTQTlQaUI3WEc0Z0lDQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXZHZiaTV5WlcxdmRtVW9LVnh1SUNBZ0lIMHBYRzRnSUNBZ2NHOXNlV2R2Ymk1amJHOXpaVlJ2YjJ4MGFYQW9LVnh1WEc0Z0lDQWdkR2hwY3k1dFlYQXVjR0Z1Vkc4b2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0dVoyVjBRMlZ1ZEdWeUtDa3BYRzRnSUNBZ2FXWWdLR1pwZEVKdmRXNWtjeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXRZWEF1Wm1sMFFtOTFibVJ6S0hCdmJIbG5iMjR1WjJWMFFtOTFibVJ6S0NrcFhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdVkyaGhibTVsYkVaMWJtTW9KMjl1TFdOc2FXTnJMWEJ2YkhsbmIyNG5MQ0J3YjJ4NVoyOXVLVnh1SUNCOVhHNGdJSEJ5YjNSbFkzUmxaQ0JwYm1sMFQzQjBhVzl1Y3lodmNIUnBiMjV6T2lCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1ektTQjdYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpJRDBnYjNCMGFXOXVjMDFsY21kbEtGeHVJQ0FnSUNBZ2RHaHBjeTVrWldaaGRXeDBUM0IwYVc5dWN5eGNiaUFnSUNBZ0lIUm9hWE11YjNCMGFXOXVjeXhjYmlBZ0lDQWdJRzl3ZEdsdmJuTmNiaUFnSUNBcElHRnpJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk5jYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnYVc1cGRGQnZiSGxuYjI1ektDa2dlMXh1SUNBZ0lDOHZJT2U4aytXdG1DQnpaV2R0Wlc1MElPZWJ1T1dGcythVnNPYU5ybHh1SUNBZ0lIUm9hWE11WTJGamFHVlRaV2R0Wlc1MFVHRnlZVzF6S0NsY2JpQWdJQ0IwYUdsekxtTmhZMmhsUTJ4aGMzTnBabmxRWVhKaGJYTW9LVnh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZibk1nUFNCYlhWeHVJQ0FnSUhSb2FYTXVaR0YwWVV4cGMzUXVabTl5UldGamFDZ29aR0YwWVNrZ1BUNGdlMXh1SUNBZ0lDQWdZMjl1YzNRZ2JHRjVaWElnUFNCTUxtZGxiMHBUVDA0b1pHRjBZUzVuWlc5dFpYUnllU2t1WjJWMFRHRjVaWEp6S0NsYk1GMWNiaUFnSUNBZ0lHTnZibk4wSUhCdmJIbG5iMjRnUFNCdVpYY2dVRzlzZVdkdmJpZ29iR0Y1WlhJZ1lYTWdUQzVRYjJ4NVoyOXVLUzVuWlhSTVlYUk1ibWR6S0NrcFhHNWNiaUFnSUNBZ0lIQnZiSGxuYjI0dWMyVjBSR0YwWVNoa1lYUmhLVnh1SUNBZ0lDQWdkR2hwY3k1d2IyeDVaMjl1Y3k1d2RYTm9LSEJ2YkhsbmIyNHBYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndjbWwyWVhSbElHTnZibVpwWjFCdmJIbG5iMjVNWVhsbGNpZ3BJSHRjYmlBZ0lDQjBhR2x6TG5CdmJIbG5iMjVNWVhsbGNpQTlJRXd1YkdGNVpYSkhjbTkxY0NncFhHNGdJQ0FnZEdocGN5NXdiMng1WjI5dWN5QTlJSFJvYVhNdWNHOXNlV2R2Ym5NdWJXRndLQ2h3YjJ4NVoyOXVLU0E5UGlCN1hHNGdJQ0FnSUNCamIyNXpkQ0J2Y0hScGIyNXpPaUJNTGxCdmJIbHNhVzVsVDNCMGFXOXVjeUE5SUc5d2RHbHZibk5OWlhKblpTaDdmU3dnZEdocGN5NXZjSFJwYjI1ekxDQjdYRzRnSUNBZ0lDQWdJR052Ykc5eU9pQkVSVVpCVlV4VVgwTlBURTlTTEZ4dUlDQWdJQ0FnSUNCbWFXeHNRMjlzYjNJNklIUm9hWE11WjJWMFEyOXNiM0lvY0c5c2VXZHZiaTVuWlhSRVlYUmhLQ2twTEZ4dUlDQWdJQ0FnZlNsY2JpQWdJQ0FnSUM4dklPbUhqZWFXc09XNmxPZVVxQ0J2Y0hScGIyNXpYRzRnSUNBZ0lDQmpiMjV6ZENCdVpYZFFiMng1WjI5dUlEMGdibVYzSUZCdmJIbG5iMjRvY0c5c2VXZHZiaTVuWlhSTVlYUk1ibWR6S0Nrc0lHOXdkR2x2Ym5NcFhHNGdJQ0FnSUNCdVpYZFFiMng1WjI5dUxuTmxkRVJoZEdFb2NHOXNlV2R2Ymk1blpYUkVZWFJoS0NrcFhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5SdmIyeDBhWEJCZEhSeUtTQjdYRzRnSUNBZ0lDQWdJRzVsZDFCdmJIbG5iMjR1WW1sdVpGUnZiMngwYVhBb2RHaHBjeTVuWlhSVWIyOXNWR2x3UTI5dWRHVnVkQ2h1WlhkUWIyeDVaMjl1TG1kbGRFUmhkR0VvS1NrcFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCdVpYZFFiMng1WjI5dUxtOXVLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IyeDVaMjl1UTJ4cFkydElZVzVrYkdWeUtIQnZiSGxuYjI0cFhHNGdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ2NtVjBkWEp1SUc1bGQxQnZiSGxuYjI1Y2JpQWdJQ0I5S1Z4dUlDQWdJSFJvYVhNdWNHOXNlV2R2Ym5NdVptOXlSV0ZqYUNnb2NHOXNlV2R2YmlrZ1BUNGdlMXh1SUNBZ0lDQWdkR2hwY3k1d2IyeDVaMjl1VEdGNVpYSXVZV1JrVEdGNVpYSW9jRzlzZVdkdmJpbGNiaUFnSUNCOUtWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuQnZiSGxuYjI1TVlYbGxjbHh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdaMlYwUTI5c2IzSW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRMQ0J0YjJSbFB6b2dRMjlzYjNKTmIyUmxLU0I3WEc0Z0lDQWdiR1YwSUdOdmJHOXlJRDBnZEdocGN5NXZjSFJwYjI1ekxtTnZiRzl5WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIyeDVaMjl1UTI5c2IzSlVlWEJsSUQwOVBTQW5jMlZuYldWdWRHVmtKeWtnZTF4dUlDQWdJQ0FnWTI5c2IzSWdQU0IwYUdsekxtZGxkRk5sWjIxbGJuUmxaRkJ2YkhsbmIyNURiMnh2Y2loa1lYUmhLVnh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5KbGJtUmxjbEJ2YkhsbmIyNURiMnh2Y2xSNWNHVWdQVDA5SUNkamJHRnpjMmxtYVdWa0p5a2dlMXh1SUNBZ0lDQWdZMjlzYjNJZ1BTQjBhR2x6TG1kbGRFTnNZWE56YVdaNVVHOXNlV2R2YmtOdmJHOXlLR1JoZEdFcFhHNGdJQ0FnZlZ4dUlDQWdJSE4zYVhSamFDQW9iVzlrWlNrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0FuWkdGeWEyVnVKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JoY210bGJpaGpiMnh2Y2lsY2JpQWdJQ0FnSUdOaGMyVWdKMnhwWjJoMFpXNG5PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiR2xuYUhSbGJpaGpiMnh2Y2lsY2JpQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNseHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElIc2dSR0YwWVV4cGMzUkpkR1Z0SUgwZ1puSnZiU0FuTGk0dlpHVm1hVzVwZEdsdmJuTW5YRzVjYm1WNGNHOXlkQ0IwZVhCbElGQnZiSGxzYVc1bFRHRjBURzVuUlhod2NtVnpjMmx2YmlBOVhHNGdJSHdnVEM1TVlYUk1ibWRGZUhCeVpYTnphVzl1VzExY2JpQWdmQ0JNTGt4aGRFeHVaMFY0Y0hKbGMzTnBiMjViWFZ0ZFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYjJ4NWJHbHVaU0JsZUhSbGJtUnpJRXd1VUc5c2VXeHBibVVnZTF4dUlDQXZMeUIwYzJ4cGJuUTZaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVTZkbUZ5YVdGaWJHVXRibUZ0WlZ4dUlDQndjbWwyWVhSbElGOWZaR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRYRzRnSUdOdmJuTjBjblZqZEc5eUtHeGhkR3h1WjNNNklGQnZiSGxzYVc1bFRHRjBURzVuUlhod2NtVnpjMmx2Yml3Z2IzQjBhVzl1Y3o4NklFd3VVRzlzZVd4cGJtVlBjSFJwYjI1ektTQjdYRzRnSUNBZ2MzVndaWElvYkdGMGJHNW5jeXdnYjNCMGFXOXVjeWxjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjMlYwUkdGMFlTaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQjBhR2x6TGw5ZlpHRjBZU0E5SUdSaGRHRmNiaUFnZlZ4dUlDQndkV0pzYVdNZ1oyVjBSR0YwWVNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZYMlJoZEdGY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElIc2dSR0YwWVV4cGMzUkpkR1Z0TENCRGFHRnVibVZzUm5WdVl5QjlJR1p5YjIwZ0p5NHVMMlJsWm1sdWFYUnBiMjV6SjF4dWFXMXdiM0owSUZCdmJIbHNhVzVsYzB4aGVXVnlJR1p5YjIwZ0p5NHZVRzlzZVd4cGJtVnpUR0Y1WlhJblhHNWNiaThxS2lEbXVMTG1uNVBwb3B6b2liTG1vTGZsdkk4ZzVZMlY2SW15Zk9XSWh1YXV0U0FxTDF4dWRIbHdaU0JRYjJ4NWJHbHVaVXhoZVdWeVVtVnVaR1Z5UTI5c2IzSlVlWEJsSUQwZ0ozTnBibWRzWlNjZ2ZDQW5jMlZuYldWdWRHVmtKMXh1YVc1MFpYSm1ZV05sSUZCdmJIbHNhVzVsUW5WbVptVnlUR0Y1WlhKUGNIUnBiMjV6SUdWNGRHVnVaSE1nVEM1RGIzSnlhV1J2Y2s5d2RHbHZibk1nZTF4dUlDQnlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlRvZ1VHOXNlV3hwYm1WTVlYbGxjbEpsYm1SbGNrTnZiRzl5Vkhsd1pWeHVYRzRnSUM4cUtpQndiM0IxY0NEbHNaWG5wTHJsclpmbXJyVWdLaTljYmlBZ2NHOXdkWEJCZEhSeVB6b2djM1J5YVc1blhHNGdJQzhxS2lCMGIyOXNkR2x3SU9XeGxlZWt1dVd0bCthdXRTQXFMMXh1SUNCMGIyOXNkR2x3UVhSMGNqODZJSE4wY21sdVoxeHVYRzRnSUc5d1lXTnBkSGsvT2lCdWRXMWlaWEpjYmx4dUlDQXZLaW9nNVlpRzVxNjE1cml5NXArVDU3dWY2SzZoNWEyWDVxNjFJQ292WEc0Z0lITmxaMjFsYm5SbFpFRjBkSEkvT2lCemRISnBibWRjYmlBZ2MyVm5iV1Z1ZEdWa1EyOXNiM0p6UHpvZ2MzUnlhVzVuVzExY2JuMWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmJIbHNhVzVsYzBKMVptWmxja3hoZVdWeUlHVjRkR1Z1WkhNZ1VHOXNlV3hwYm1WelRHRjVaWElnZTF4dUlDQndkV0pzYVdNZ2RIbHdaVG9nYzNSeWFXNW5YRzRnSUhCeWIzUmxZM1JsWkNCdmNIUnBiMjV6T2lCUWIyeDViR2x1WlVKMVptWmxja3hoZVdWeVQzQjBhVzl1YzF4dUlDQmpiMjV6ZEhKMVkzUnZjaWhjYmlBZ0lDQnRZWEE2SUV3dVRXRndMRnh1SUNBZ0lHUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFN4Y2JpQWdJQ0J2Y0hScGIyNXpPaUJRYjJ4NWJHbHVaVUoxWm1abGNreGhlV1Z5VDNCMGFXOXVjeXhjYmlBZ0lDQmphR0Z1Ym1Wc1JuVnVZem9nUTJoaGJtNWxiRVoxYm1OY2JpQWdLU0I3WEc0Z0lDQWdjM1Z3WlhJb2JXRndMQ0JrWVhSaFRHbHpkQ3dnYjNCMGFXOXVjeXdnWTJoaGJtNWxiRVoxYm1NcFhHNGdJQ0FnWTI5dWMzUWdaR1ZtWVhWc2RFOXdkR2x2Ym5NNklGQnZiSGxzYVc1bFFuVm1abVZ5VEdGNVpYSlBjSFJwYjI1eklEMGdlMXh1SUNBZ0lDQWdjbVZ1WkdWeVVHOXNlV3hwYm1WRGIyeHZjbFI1Y0dVNklDZHphVzVuYkdVbkxGeHVJQ0FnSUNBZ2MyVm5iV1Z1ZEdWa1EyOXNiM0p6T2lCYkp5TXpNemc0UmtZblhTeGNiaUFnSUNBZ0lHTnZjbkpwWkc5eU9pQXhNREFzWEc0Z0lDQWdJQ0JqYjJ4dmNqb2dKeU16TXpnNFJrWW5MRnh1SUNBZ0lDQWdiM0JoWTJsMGVUb2dNQzQxTEZ4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5SNWNHVWdQU0FuY0c5c2VXeHBibVZDZFdabVpYSW5YRzRnSUNBZ2RHaHBjeTV0WVhBZ1BTQnRZWEJjYmlBZ0lDQjBhR2x6TG1SaGRHRk1hWE4wSUQwZ1pHRjBZVXhwYzNSY2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1elhHNGdJQ0FnZEdocGN5NWphR0Z1Ym1Wc1JuVnVZeUE5SUdOb1lXNXVaV3hHZFc1alhHNWNiaUFnSUNCMGFHbHpMblpwYzJsaWJHVWdQU0IwY25WbFhHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTWdQU0JiWFZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQWdQU0F4WEc0Z0lDQWdMeThnZEdocGN5NW1iMk4xYzJWa1VHOXNlV3hwYm1VZ1BTQnVkV3hzWEc1Y2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQmtaV1poZFd4MFQzQjBhVzl1Y3l3Z2IzQjBhVzl1Y3lsY2JpQWdmVnh1SUNCd2RXSnNhV01nWkhKaGR5aHZjSFJwYjI1elB6b2dVRzlzZVd4cGJtVkNkV1ptWlhKTVlYbGxjazl3ZEdsdmJuTXBJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk1nUFNCUFltcGxZM1F1WVhOemFXZHVLSFJvYVhNdWIzQjBhVzl1Y3l3Z2IzQjBhVzl1Y3lsY2JpQWdJQ0IwYUdsekxtbHVhWFJRYjJ4NWJHbHVaWE1vS1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbFpISmhkeWdwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSEpsWkhKaGR5Z3BJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXVkbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGFHbHpMbXhoZVdWeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG14aGVXVnlMbkpsYlc5MlpTZ3BYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViR0Y1WlhJZ1BTQjBhR2x6TG1OdmJtWnBaMUJ2Ykhsc2FXNWxRblZtWm1WeVRHRjVaWElvS1Z4dUlDQWdJSFJvYVhNdWJXRndMbUZrWkV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE5jYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdabWwwUW05MWJtUnpLQ2tnZTF4dUlDQWdJSFJvYVhNdWJXRndMbVpwZEVKdmRXNWtjeWgwYUdsekxtZGxkRUp2ZFc1a2N5Z3BLVnh1SUNCOVhHNGdJSEIxWW14cFl5Qm5aWFJDYjNWdVpITW9LVG9nVEM1TVlYUk1ibWRDYjNWdVpITkZlSEJ5WlhOemFXOXVJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXdiMng1YkdsdVpYTXViR1Z1WjNSb0lEdzlJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtMWhjQzVuWlhSQ2IzVnVaSE1vS1Z4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3YjJ4NWJHbHVaWE11Y21Wa2RXTmxLRnh1SUNBZ0lDQWdLSEJ5WlhZc0lHTjFjbklwSUQwK0lIQnlaWFl1WlhoMFpXNWtLR04xY25JdVoyVjBRbTkxYm1SektDa3BMRnh1SUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlhOYk1GMHVaMlYwUW05MWJtUnpLQ2xjYmlBZ0lDQXBYRzRnSUgxY2JpQWdjSFZpYkdsaklHTm9ZVzVuWlVOdmJHOXlLR052Ykc5eU9pQnpkSEpwYm1jcElIdGNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTXVZMjlzYjNJZ1BTQmpiMnh2Y2x4dUlDQWdJSFJvYVhNdWNtVmtjbUYzS0NsY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdOdmJtWnBaMUJ2Ykhsc2FXNWxRblZtWm1WeVRHRjVaWElvS1NCN1hHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpVeGhlV1Z5SUQwZ1RDNXNZWGxsY2tkeWIzVndLQ2xjYmlBZ0lDQjBhR2x6TG5CdmJIbHNhVzVsY3k1bWIzSkZZV05vS0Nod2IyeDViR2x1WlNrZ1BUNGdlMXh1SUNBZ0lDQWdjRzlzZVd4cGJtVXViMjRvSjJOc2FXTnJKeXdnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZiSGxzYVc1bFEyeHBZMnRJWVc1a2JHVnlLSEJ2Ykhsc2FXNWxLVnh1SUNBZ0lDQWdmU2xjYmlBZ0lDQWdJR052Ym5OMElHOXdkR2x2Ym5NNklGQnZiSGxzYVc1bFFuVm1abVZ5VEdGNVpYSlBjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloY2JpQWdJQ0FnSUNBZ2UzMHNYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzQjBhVzl1Y3l4Y2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJR052Ykc5eU9seHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2xCdmJIbHNhVzVsUTI5c2IzSlVlWEJsSUQwOVBTQW5jMmx1WjJ4bEoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBL0lIUm9hWE11YjNCMGFXOXVjeTVqYjJ4dmNseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBNklIUm9hWE11WjJWMFUyVm5iV1Z1ZEdWa1VHOXNlV3hwYm1WRGIyeHZjaWh3YjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2twTEZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBcFhHNWNiaUFnSUNBZ0lHTnZibk4wSUhCdmJIbHNhVzVsUW5WbVptVnlJRDBnVEM1amIzSnlhV1J2Y2loY2JpQWdJQ0FnSUNBZ0tIQnZiSGxzYVc1bExtZGxkRXhoZEV4dVozTW9LU0JoY3lCTUxreGhkRXh1WjF0ZEtTNXRZWEFvS0d4aGRFeHVaeWtnUFQ1Y2JpQWdJQ0FnSUNBZ0lDQk1MbXhoZEV4dVp5aGJiR0YwVEc1bkxteGhkQ3dnYkdGMFRHNW5MbXh1WjEwcFhHNGdJQ0FnSUNBZ0lDa3NYRzRnSUNBZ0lDQWdJRzl3ZEdsdmJuTmNiaUFnSUNBZ0lDbGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWRHOXZiSFJwY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnY0c5c2VXeHBibVZDZFdabVpYSXVZbWx1WkZSdmIyeDBhWEFvZEdocGN5NW5aWFJVYjI5c1ZHbHdRMjl1ZEdWdWRDaHdiMng1YkdsdVpTNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlV4aGVXVnlMbUZrWkV4aGVXVnlLSEJ2Ykhsc2FXNWxRblZtWm1WeUtWeHVJQ0FnSUgwcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNHOXNlV3hwYm1WTVlYbGxjbHh1SUNCOVhHNTlYRzRpTENKcGJYQnZjblFnZXlCRVlYUmhUR2x6ZEVsMFpXMHNJRU5vWVc1dVpXeEdkVzVqSUgwZ1puSnZiU0FuTGk0dlpHVm1hVzVwZEdsdmJuTW5YRzVwYlhCdmNuUWdVRzlzZVd4cGJtVXNJSHNnVUc5c2VXeHBibVZNWVhSTWJtZEZlSEJ5WlhOemFXOXVJSDBnWm5KdmJTQW5MaTlRYjJ4NWJHbHVaU2RjYm1sdGNHOXlkQ0I3SUdSaGNtdGxiaXdnYkdsbmFIUmxiaXdnYjNCMGFXOXVjMDFsY21kbElIMGdabkp2YlNBbkxpNHZkWFJwYkhNdmFXNWtaWGduWEc1Y2JpOHFLaURtdUxMbW41UHBvcHpvaWJMbW9MZmx2SThnNVkyVjZJbXlmT1dJaHVhdXRTQXFMMXh1ZEhsd1pTQlFiMng1YkdsdVpVeGhlV1Z5VW1WdVpHVnlRMjlzYjNKVWVYQmxJRDBnSjNOcGJtZHNaU2NnZkNBbmMyVm5iV1Z1ZEdWa0p5QjhJQ2RqYkdGemMybG1hV1ZrSjF4dWRIbHdaU0JEYjJ4dmNrMXZaR1VnUFNBblpHRnlhMlZ1SnlCOElDZHNhV2RvZEdWdUp5QjhJQ2R1YjNKdFlXd25YRzVwYm5SbGNtWmhZMlVnVUc5c2VXeHBibVZNWVhsbGNrOXdkR2x2Ym5NZ1pYaDBaVzVrY3lCTUxsQnZiSGxzYVc1bFQzQjBhVzl1Y3lCN1hHNGdJSEpsYm1SbGNsQnZiSGxzYVc1bFEyOXNiM0pVZVhCbE9pQlFiMng1YkdsdVpVeGhlV1Z5VW1WdVpHVnlRMjlzYjNKVWVYQmxYRzVjYmlBZ0x5b3FJSEJ2Y0hWd0lPV3hsZWVrdXVXdGwrYXV0U0FxTDF4dUlDQndiM0IxY0VGMGRISS9PaUJ6ZEhKcGJtY2dmQ0I3SUd4aFltVnNPaUJ6ZEhKcGJtYzdJSFpoYkhWbE9pQmhibmtnZlZ4dUlDQXZLaW9nZEc5dmJIUnBjQ0Rsc1pYbnBMcmxyWmZtcnJVZ0tpOWNiaUFnZEc5dmJIUnBjRUYwZEhJL09pQnpkSEpwYm1kY2JseHVJQ0J2Y0dGamFYUjVQem9nYm5WdFltVnlYRzVjYmlBZ0x5b3FJT1dJaHVhdXRlYTRzdWFmaytlN24raXVvZVd0bCthdXRTQXFMMXh1SUNCelpXZHRaVzUwWldSQmRIUnlQem9nYzNSeWFXNW5YRzRnSUhObFoyMWxiblJsWkVOdmJHOXljejg2SUhOMGNtbHVaMXRkWEc1Y2JpQWdMeW9xSU9XSWh1ZXh1K1dlaSthNHN1YWZrK2U3bitpdW9lV3RsK2F1dFNBcUwxeHVJQ0JqYkdGemMybG1hV1ZrUVhSMGNqODZJSE4wY21sdVoxeHVJQ0JqYkdGemMybG1hV1ZrUTI5c2IzSnpQem9nYzNSeWFXNW5XMTFjYm4xY2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ2Ykhsc2FXNWxjMHhoZVdWeUlIdGNiaUFnY0hWaWJHbGpJSFI1Y0dVNklITjBjbWx1WjF4dVhHNGdJSEJ5YjNSbFkzUmxaQ0IyYVhOcFlteGxPaUJpYjI5c1pXRnVYRzRnSUhCeWIzUmxZM1JsWkNCc1lYbGxjam9nVEM1TVlYbGxja2R5YjNWd1hHNWNiaUFnY0hKdmRHVmpkR1ZrSUcxaGNEb2dUQzVOWVhCY2JpQWdjSEp2ZEdWamRHVmtJR1JoZEdGTWFYTjBPaUJFWVhSaFRHbHpkRWwwWlcxYlhWeHVJQ0J3Y205MFpXTjBaV1FnYjNCMGFXOXVjem9nVUc5c2VXeHBibVZNWVhsbGNrOXdkR2x2Ym5OY2JpQWdjSEp2ZEdWamRHVmtJR05vWVc1dVpXeEdkVzVqT2lCRGFHRnVibVZzUm5WdVkxeHVJQ0J3Y205MFpXTjBaV1FnY0c5c2VXeHBibVZ6T2lCUWIyeDViR2x1WlZ0ZFhHNGdJSEJ5YjNSbFkzUmxaQ0J6WldkdFpXNTBaV1JOYVc0NklHNTFiV0psY2x4dUlDQndjbTkwWldOMFpXUWdjMlZuYldWdWRHVmtVM1JsY0RvZ2JuVnRZbVZ5WEc0Z0lIQnliM1JsWTNSbFpDQm1iMk4xYzJWa1VHOXNlV3hwYm1VNklGQnZiSGxzYVc1bFhHNGdJSEJ5YjNSbFkzUmxaQ0JtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxzYVc1bE9pQlFiMng1YkdsdVpWeHVJQ0J3Y205MFpXTjBaV1FnY0c5c2VXeHBibVZNWVhsbGNqb2dUQzVNWVhsbGNrZHliM1Z3WEc0Z0lDOHFLaURvcnJEbHZaWG1uNURrdUtvZ2NISnZjQ0RscjdubHVwVG5tb1RtdUxMbW41UHBvcHpvaWJJZ0tpOWNiaUFnY0hKcGRtRjBaU0JqYkdGemMybG1lVU52Ykc5eVRXRndPaUI3SUZ0d2NtOXdPaUJ6ZEhKcGJtZGRPaUJ6ZEhKcGJtY2dmVnh1SUNBdktpb2c1WWlHNTdHNzVyaXk1cCtUNmFLYzZJbXk1WStDNTRXbktPYVBrT1MrbStlN21laXdnK2VVcU9pQWhlUzl2K2VVcUNrZ0tpOWNiaUFnY0hKcGRtRjBaU0JqYkdGemMybG1lVU52Ykc5eVVtVm1jem9nUVhKeVlYazhlMXh1SUNBZ0lHRjBkSEk2SUhOMGNtbHVaMXh1SUNBZ0lHTnZiRzl5T2lCemRISnBibWRjYmlBZ0lDQnVkVzF6T2lCdWRXMWlaWEpjYmlBZ2ZUNWNiaUFnY0hKcGRtRjBaU0JrWldaaGRXeDBUM0IwYVc5dWN6b2dVRzlzZVd4cGJtVk1ZWGxsY2s5d2RHbHZibk5jYmlBZ1kyOXVjM1J5ZFdOMGIzSW9YRzRnSUNBZ2JXRndPaUJNTGsxaGNDeGNiaUFnSUNCa1lYUmhUR2x6ZERvZ1JHRjBZVXhwYzNSSmRHVnRXMTBzWEc0Z0lDQWdiM0IwYVc5dWN6b2dVRzlzZVd4cGJtVk1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJR2xtSUNnaFFYSnlZWGt1YVhOQmNuSmhlU2hrWVhSaFRHbHpkQ2tnZkh3Z1pHRjBZVXhwYzNRdWJHVnVaM1JvSUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9ZR1JoZEdGTWFYTjBJT1cvaGVtaHUrYVlyK21kbnVlcHV1YVZzT2U3aEdBcFhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdVpHVm1ZWFZzZEU5d2RHbHZibk1nUFNCN1hHNGdJQ0FnSUNCamIyeHZjam9nSnlNek16ZzRSa1luTEZ4dUlDQWdJQ0FnY21WdVpHVnlVRzlzZVd4cGJtVkRiMnh2Y2xSNWNHVTZJQ2R6YVc1bmJHVW5MRnh1SUNBZ0lDQWdjMlZuYldWdWRHVmtRMjlzYjNKek9pQmJKeU16TXpnNFJrWW5YU3hjYmlBZ0lDQWdJSEJ2Y0hWd1FYUjBjam9nZXlCc1lXSmxiRG9nSitXUWplZW5zQ2NzSUhaaGJIVmxPaUFuYm1GdFpTY2dmU3hjYmlBZ0lDQWdJSFJ2YjJ4MGFYQkJkSFJ5T2lBbmJtRnRaU2NzWEc0Z0lDQWdJQ0JqYkdGemMybG1hV1ZrUTI5c2IzSnpPaUJiSnlNek16ZzRSa1luWFN4Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1MGVYQmxJRDBnSjNCdmJIbHNhVzVsSjF4dUlDQWdJSFJvYVhNdWJXRndJRDBnYldGd1hHNGdJQ0FnZEdocGN5NWtZWFJoVEdsemRDQTlJR1JoZEdGTWFYTjBYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpJRDBnYjNCMGFXOXVjMDFsY21kbEtGeHVJQ0FnSUNBZ2RHaHBjeTVrWldaaGRXeDBUM0IwYVc5dWN5eGNiaUFnSUNBZ0lHOXdkR2x2Ym5OY2JpQWdJQ0FwSUdGeklGQnZiSGxzYVc1bFRHRjVaWEpQY0hScGIyNXpYRzRnSUNBZ2RHaHBjeTVqYUdGdWJtVnNSblZ1WXlBOUlHTm9ZVzV1Wld4R2RXNWpYRzVjYmlBZ0lDQjBhR2x6TG5acGMybGliR1VnUFNCMGNuVmxYRzRnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaWE1nUFNCYlhWeHVJQ0FnSUhSb2FYTXVjMlZuYldWdWRHVmtUV2x1SUQwZ1NXNW1hVzVwZEhsY2JpQWdJQ0IwYUdsekxuTmxaMjFsYm5SbFpGTjBaWEFnUFNBeFhHNGdJQ0FnZEdocGN5NWpiR0Z6YzJsbWVVTnZiRzl5VFdGd0lEMGdlMzFjYmlBZ0lDQjBhR2x6TG1adlkzVnpaV1JRYjJ4NWJHbHVaU0E5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV3hwYm1VZ1BTQnVkV3hzWEc0Z0lIMWNiaUFnY0hWaWJHbGpJR1J5WVhjb2IzQjBhVzl1Y3o4NklGQnZiSGxzYVc1bFRHRjVaWEpQY0hScGIyNXpLU0I3WEc0Z0lDQWdkR2hwY3k1cGJtbDBUM0IwYVc5dWN5aHZjSFJwYjI1ektWeHVJQ0FnSUhSb2FYTXVhVzVwZEZCdmJIbHNhVzVsY3lncFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNtVmtjbUYzS0NsY2JpQWdmVnh1SUNCd2RXSnNhV01nY21Wa2NtRjNLQ2tnZTF4dUlDQWdJR2xtSUNnaGRHaHBjeTUyYVhOcFlteGxLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUm9hWE11YkdGNVpYSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJHRjVaWEl1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTVzWVhsbGNpQTlJSFJvYVhNdVkyOXVabWxuVUc5c2VXeHBibVZNWVhsbGNpZ3BYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCeVpYUjFjbTRnZEdocGMxeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCbWFYUkNiM1Z1WkhNb0tTQjdYRzRnSUNBZ2RHaHBjeTV0WVhBdVptbDBRbTkxYm1SektIUm9hWE11WjJWMFFtOTFibVJ6S0Nrc0lIc2djR0ZrWkdsdVp6b2dXekl3TENBeU1GMGdmU2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMlYwUW05MWJtUnpLQ2s2SUV3dVRHRjBURzVuUW05MWJtUnpSWGh3Y21WemMybHZiaUI3WEc0Z0lDQWdhV1lnS0hSb2FYTXVjRzlzZVd4cGJtVnpMbXhsYm1kMGFDQThQU0F3S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NXRZWEF1WjJWMFFtOTFibVJ6S0NsY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y0c5c2VXeHBibVZ6TG5KbFpIVmpaU2hjYmlBZ0lDQWdJQ2h3Y21WMkxDQmpkWEp5S1NBOVBpQndjbVYyTG1WNGRHVnVaQ2hqZFhKeUxtZGxkRUp2ZFc1a2N5Z3BLU3hjYmlBZ0lDQWdJRXd1YkdGMFRHNW5RbTkxYm1SektGeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CdmJIbHNhVzVsYzFzd1hTNW5aWFJDYjNWdVpITW9LUzVuWlhST2IzSjBhRVZoYzNRb0tTeGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlhOYk1GMHVaMlYwUW05MWJtUnpLQ2t1WjJWMFUyOTFkR2hYWlhOMEtDbGNiaUFnSUNBZ0lDbGNiaUFnSUNBcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdSbGMzUnliM2tvS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YkdGNVpYSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXRndMbkpsYlc5MlpVeGhlV1Z5S0hSb2FYTXViR0Y1WlhJcFhHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhCMVlteHBZeUIwYjJkbmJHVldhWE5wWW14bEtIWnBjMmxpYkdVNklHSnZiMnhsWVc0cElIdGNiaUFnSUNCMGFHbHpMblpwYzJsaWJHVWdQU0IyYVhOcFlteGxYRzRnSUNBZ2FXWWdLQ0YwYUdsekxteGhlV1Z5S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFpwYzJsaWJHVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXRndMbUZrWkV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXeHBibVVwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxzYVc1bExuSmxiVzkyWlNncFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1eVpXMXZkbVZNWVhsbGNpaDBhR2x6TG14aGVXVnlLVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndkV0pzYVdNZ1kyaGhibWRsUTI5c2IzSW9ZMjlzYjNJNklITjBjbWx1WnlrZ2UxeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5NW1hV3hzUTI5c2IzSWdQU0JqYjJ4dmNseHVJQ0FnSUhSb2FYTXVjbVZrY21GM0tDbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ2NHbDBZMmdvYVdRNklITjBjbWx1WnlrZ2UxeHVJQ0FnSUhSb2FYTXVjRzlzZVd4cGJtVnpMbVp2Y2tWaFkyZ29LSEJ2Ykhsc2FXNWxLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9jRzlzZVd4cGJtVXVaMlYwUkdGMFlTZ3BMbWxrSUQwOVBTQnBaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2Ykhsc2FXNWxRMnhwWTJ0SVlXNWtiR1Z5S0hCdmJIbHNhVzVsTENCMGNuVmxLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNWNiaUFnSUNBZ0lIMWNiaUFnSUNCOUtWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCblpYUkRiR0Z6YzJsbWVVTnZiRzl5VW1WbWN5Z3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVqYkdGemMybG1lVU52Ykc5eVVtVm1jMXh1SUNCOVhHNGdJSEJ5YjNSbFkzUmxaQ0JwYm1sMFQzQjBhVzl1Y3lodmNIUnBiMjV6T2lCUWIyeDViR2x1WlV4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUc5d2RHbHZibk5OWlhKblpTaGNiaUFnSUNBZ0lIUm9hWE11WkdWbVlYVnNkRTl3ZEdsdmJuTXNYRzRnSUNBZ0lDQjBhR2x6TG05d2RHbHZibk1zWEc0Z0lDQWdJQ0J2Y0hScGIyNXpYRzRnSUNBZ0tTQmhjeUJRYjJ4NWJHbHVaVXhoZVdWeVQzQjBhVzl1YzF4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCcGJtbDBVRzlzZVd4cGJtVnpLQ2tnZTF4dUlDQWdJQzh2SU9lOGsrV3RtQ0J6WldkdFpXNTBJT2VidU9XRnMrYVZzT2FOcmx4dUlDQWdJSFJvYVhNdVkyRmphR1ZUWldkdFpXNTBVR0Z5WVcxektDbGNiaUFnSUNCMGFHbHpMbU5oWTJobFEyeGhjM05wWm5sUVlYSmhiWE1vS1Z4dVhHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTWdQU0IwYUdsekxtUmhkR0ZNYVhOMExtMWhjQ2dvWkdGMFlTa2dQVDRnZTF4dUlDQWdJQ0FnWTI5dWMzUWdiR0Y1WlhJZ1BTQk1MbWRsYjBwVFQwNG9aR0YwWVM1blpXOXRaWFJ5ZVNrdVoyVjBUR0Y1WlhKektDbGJNRjFjYmlBZ0lDQWdJR052Ym5OMElIQnZiSGxzYVc1bElEMGdibVYzSUZCdmJIbHNhVzVsS0Z4dUlDQWdJQ0FnSUNBb2JHRjVaWElnWVhNZ1RDNVFiMng1YkdsdVpTa3VaMlYwVEdGMFRHNW5jeWdwSUdGeklGQnZiSGxzYVc1bFRHRjBURzVuUlhod2NtVnpjMmx2Ymx4dUlDQWdJQ0FnS1Z4dUlDQWdJQ0FnTHk4ZzViQ0c1NXU0NVlXejVZQzg1N3VSNWE2YTVZaXdJRzFoY210bGN1UzRpbHh1SUNBZ0lDQWdjRzlzZVd4cGJtVXVjMlYwUkdGMFlTaGtZWFJoS1Z4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnY0c5c2VXeHBibVZjYmlBZ0lDQjlLVnh1SUNCOVhHNGdJSEJ5YjNSbFkzUmxaQ0JuWlhSVFpXZHRaVzUwWldSUWIyeDViR2x1WlVOdmJHOXlLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2s2SUhOMGNtbHVaeUI3WEc0Z0lDQWdZMjl1YzNRZ2RtRnNJRDBnWkdGMFlWdDBhR2x6TG05d2RHbHZibk11YzJWbmJXVnVkR1ZrUVhSMGNsMWNiaUFnSUNCamIyNXpkQ0JqYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSRGIyeHZjbk5iWEc0Z0lDQWdJQ0J3WVhKelpVbHVkQ2duSnlBcklDaDJZV3dnTFNCMGFHbHpMbk5sWjIxbGJuUmxaRTFwYmlrZ0x5QjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQXNJREV3S1Z4dUlDQWdJRjFjYmlBZ0lDQnlaWFIxY200Z1kyOXNiM0pjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnY0c5c2VXeHBibVZEYkdsamEwaGhibVJzWlhJb2NHOXNlV3hwYm1VNklGQnZiSGxzYVc1bExDQm1hWFJDYjNWdVpITS9PaUJpYjI5c1pXRnVLU0I3WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrVUc5c2VXeHBibVVnUFNCd2IyeDViR2x1WlZ4dUlDQWdJQzh2SU9XSW9PbVpwT1dKamVTNGdPUzRxaUJtYjJOMWMxeHVJQ0FnSUdsbUlDaDBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVVRzlzZVd4cGJtVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NWJHbHVaUzV5WlcxdmRtVW9LVnh1SUNBZ0lIMWNiaUFnSUNBdkx5RG5sSi9taUpEbHZaUGxpWTBnWm05amRYTmNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV3hwYm1VZ1BTQnVaWGNnVUc5c2VXeHBibVVvWEc0Z0lDQWdJQ0J3YjJ4NWJHbHVaUzVuWlhSTVlYUk1ibWR6S0NrZ1lYTWdVRzlzZVd4cGJtVk1ZWFJNYm1kRmVIQnlaWE56YVc5dUxGeHVJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQmpiMnh2Y2pvZ2RHaHBjeTVuWlhSRGIyeHZjaWh3YjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2twTEZ4dUlDQWdJQ0FnSUNCbWFXeHNRMjlzYjNJNklIUm9hWE11WjJWMFEyOXNiM0lvY0c5c2VXeHBibVV1WjJWMFJHRjBZU2dwTENBbmJtOXliV0ZzSnlrc1hHNGdJQ0FnSUNCOVhHNGdJQ0FnS1Z4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NWJHbHVaUzVoWkdSVWJ5aDBhR2x6TG0xaGNDbGNibHh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1YkdsdVpWeHVJQ0FnSUNBZ0xtSnBibVJRYjNCMWNDaDBhR2x6TG1kbGRGQnZjSFZ3UTI5dWRHVnVkQ2h3YjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnTG05d1pXNVFiM0IxY0NncFhHNWNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV3hwYm1VdWIyNG9KM0J2Y0hWd1kyeHZjMlVuTENBb0tTQTlQaUI3WEc0Z0lDQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXeHBibVV1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlLVnh1WEc0Z0lDQWdjRzlzZVd4cGJtVXVZMnh2YzJWVWIyOXNkR2x3S0NsY2JseHVJQ0FnSUhSb2FYTXViV0Z3TG5CaGJsUnZLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NWJHbHVaUzVuWlhSRFpXNTBaWElvS1NsY2JpQWdJQ0JwWmlBb1ptbDBRbTkxYm1SektTQjdYRzRnSUNBZ0lDQjBhR2x6TG0xaGNDNW1hWFJDYjNWdVpITW9jRzlzZVd4cGJtVXVaMlYwUW05MWJtUnpLQ2twWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11WTJoaGJtNWxiRVoxYm1Nb0oyOXVMV05zYVdOckxYQnZiSGxzYVc1bEp5d2djRzlzZVd4cGJtVXBYRzRnSUgxY2JpQWdjSEp2ZEdWamRHVmtJR2RsZEZSdmIyeFVhWEJEYjI1MFpXNTBLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2tnZTF4dUlDQWdJSEpsZEhWeWJpQW5KeUFySUdSaGRHRmJkR2hwY3k1dmNIUnBiMjV6TG5SdmIyeDBhWEJCZEhSeVhWeHVJQ0I5WEc0Z0lIQnliM1JsWTNSbFpDQm5aWFJRYjNCMWNFTnZiblJsYm5Rb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z0p5ZGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCMGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdBa2UzUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEo5T2lBa2UyUmhkR0ZiZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNsMTlZRnh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElnUFQwOUlDZHZZbXBsWTNRbktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1lDUjdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2k1c1lXSmxiSDA2SUNSN1hHNGdJQ0FnSUNBZ0lHUmhkR0ZiZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpNTJZV3gxWlYxY2JpQWdJQ0FnSUgxZ1hHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTI5dVptbG5VRzlzZVd4cGJtVk1ZWGxsY2lncElIdGNiaUFnSUNCMGFHbHpMbkJ2Ykhsc2FXNWxUR0Y1WlhJZ1BTQk1MbXhoZVdWeVIzSnZkWEFvS1Z4dUlDQWdJSFJvYVhNdWNHOXNlV3hwYm1WekxtWnZja1ZoWTJnb0tIQnZiSGxzYVc1bEtTQTlQaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQnZjSFJwYjI1ek9pQk1MbEJ2Ykhsc2FXNWxUM0IwYVc5dWN5QTlJRzl3ZEdsdmJuTk5aWEpuWlNoN2ZTd2dkR2hwY3k1dmNIUnBiMjV6TENCN1hHNGdJQ0FnSUNBZ0lHTnZiRzl5T2lCMGFHbHpMbWRsZEVOdmJHOXlLSEJ2Ykhsc2FXNWxMbWRsZEVSaGRHRW9LU2tzWEc0Z0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnWTI5dWMzUWdibVYzVUc5c2VXeHBibVVnUFNCdVpYY2dVRzlzZVd4cGJtVW9YRzRnSUNBZ0lDQWdJSEJ2Ykhsc2FXNWxMbWRsZEV4aGRFeHVaM01vS1NCaGN5QlFiMng1YkdsdVpVeGhkRXh1WjBWNGNISmxjM05wYjI0c1hHNGdJQ0FnSUNBZ0lHOXdkR2x2Ym5OY2JpQWdJQ0FnSUNsY2JpQWdJQ0FnSUc1bGQxQnZiSGxzYVc1bExtOXVLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlVOc2FXTnJTR0Z1Wkd4bGNpaHdiMng1YkdsdVpTbGNiaUFnSUNBZ0lIMHBYRzRnSUNBZ0lDQnVaWGRRYjJ4NWJHbHVaUzV6WlhSRVlYUmhLSEJ2Ykhsc2FXNWxMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVkRzl2YkhScGNFRjBkSElwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNVRzlzZVd4cGJtVXVZbWx1WkZSdmIyeDBhWEFvZEdocGN5NW5aWFJVYjI5c1ZHbHdRMjl1ZEdWdWRDaHVaWGRRYjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnZEdocGN5NXdiMng1YkdsdVpVeGhlV1Z5TG1Ga1pFeGhlV1Z5S0c1bGQxQnZiSGxzYVc1bEtWeHVJQ0FnSUgwcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNHOXNlV3hwYm1WTVlYbGxjbHh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdZMkZqYUdWRGJHRnpjMmxtZVZCaGNtRnRjeWdwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11YjNCMGFXOXVjeTVqYkdGemMybG1hV1ZrUVhSMGNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTI5dWMzUWdkRzF3T2lCN0lGdHdjbTl3T2lCemRISnBibWRkT2lCYmMzUnlhVzVuTENCdWRXMWlaWEpkSUgwZ1BTQjdmVnh1SUNBZ0lHTnZibk4wSUhCeWIzQWdQU0IwYUdsekxtOXdkR2x2Ym5NdVkyeGhjM05wWm1sbFpFRjBkSEpjYmlBZ0lDQjBhR2x6TG1SaGRHRk1hWE4wTG1admNrVmhZMmdvS0dSaGRHRXBJRDArSUh0Y2JpQWdJQ0FnSUdsbUlDaGtZWFJoVzNCeWIzQmRJR2x1SUhSdGNDa2dlMXh1SUNBZ0lDQWdJQ0IwYlhCYlpHRjBZVnR3Y205d1hWMGdQU0JiWkdGMFlWdHdjbTl3WFN3Z2RHMXdXMlJoZEdGYmNISnZjRjFkV3pGZElDc2dNVjFjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSFJ0Y0Z0a1lYUmhXM0J5YjNCZFhTQTlJRnRrWVhSaFczQnliM0JkTENBeFhWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcFhHNGdJQ0FnWTI5dWMzUWdkbUZzZFdWeklEMGdUMkpxWldOMExuWmhiSFZsY3loMGJYQXBYRzRnSUNBZ2RtRnNkV1Z6TG5OdmNuUW9LR0VzSUdJcElEMCtJR0piTVYwZ0xTQmhXekZkS1Z4dUlDQWdJSFJvYVhNdVkyeGhjM05wWm5sRGIyeHZjbEpsWm5NZ1BTQmJYVnh1SUNBZ0lIWmhiSFZsY3k1bWIzSkZZV05vS0NoYllYUjBjaXdnYm5WdGMxMHNJR2x1WkdWNEtTQTlQaUI3WEc0Z0lDQWdJQ0JzWlhRZ1kyOXNiM0lnUFNBbllteGhZMnNuWEc0Z0lDQWdJQ0JwWmlBb2FXNWtaWGdnUENCMGFHbHpMbTl3ZEdsdmJuTXVZMnhoYzNOcFptbGxaRU52Ykc5eWN5NXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJZ1BTQjBhR2x6TG05d2RHbHZibk11WTJ4aGMzTnBabWxsWkVOdmJHOXljMXRwYm1SbGVGMWNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lIUm9hWE11WTJ4aGMzTnBabmxEYjJ4dmNrMWhjRnRoZEhSeVhTQTlJR052Ykc5eVhHNGdJQ0FnSUNCMGFHbHpMbU5zWVhOemFXWjVRMjlzYjNKU1pXWnpMbkIxYzJnb2UxeHVJQ0FnSUNBZ0lDQmhkSFJ5TEZ4dUlDQWdJQ0FnSUNCamIyeHZjaXhjYmlBZ0lDQWdJQ0FnYm5WdGN5eGNiaUFnSUNBZ0lIMHBYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndjbWwyWVhSbElHZGxkRU5zWVhOemFXWjVVRzlzZVd4cGJtVkRiMnh2Y2loa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwcE9pQnpkSEpwYm1jZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtTnNZWE56YVdaNVEyOXNiM0pOWVhCYlpHRjBZVnQwYUdsekxtOXdkR2x2Ym5NdVkyeGhjM05wWm1sbFpFRjBkSEpkWFZ4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTJGamFHVlRaV2R0Wlc1MFVHRnlZVzF6S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSE5sWjIxbGJuUmxaRXhsYm1kMGFDQTlJSFJvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSRGIyeHZjbk11YkdWdVozUm9YRzRnSUNBZ2JHVjBJRzFoZUZaaGJDQTlJQzFKYm1acGJtbDBlVnh1SUNBZ0lHeGxkQ0J0YVc1V1lXd2dQU0JKYm1acGJtbDBlVnh1SUNBZ0lHWnZjaUFvWTI5dWMzUWdaR0YwWVNCdlppQjBhR2x6TG1SaGRHRk1hWE4wS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0IyWVd3Z1BTQmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkJkSFJ5WFZ4dUlDQWdJQ0FnYldGNFZtRnNJRDBnVFdGMGFDNXRZWGdvYldGNFZtRnNMQ0IyWVd3cFhHNGdJQ0FnSUNCdGFXNVdZV3dnUFNCTllYUm9MbTFwYmlodGFXNVdZV3dzSUhaaGJDbGNiaUFnSUNCOVhHNGdJQ0FnWTI5dWMzUWdjM1JsY0NBOUlDaHRZWGhXWVd3Z0xTQnRhVzVXWVd3Z0t5QXhLU0F2SUhObFoyMWxiblJsWkV4bGJtZDBhRnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVFdsdUlEMGdiV2x1Vm1Gc1hHNGdJQ0FnZEdocGN5NXpaV2R0Wlc1MFpXUlRkR1Z3SUQwZ2MzUmxjRnh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdaMlYwUTI5c2IzSW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRMQ0J0YjJSbFB6b2dRMjlzYjNKTmIyUmxLU0I3WEc0Z0lDQWdiR1YwSUdOdmJHOXlJRDBnZEdocGN5NXZjSFJwYjI1ekxtTnZiRzl5WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlNBOVBUMGdKM05sWjIxbGJuUmxaQ2NwSUh0Y2JpQWdJQ0FnSUdOdmJHOXlJRDBnZEdocGN5NW5aWFJUWldkdFpXNTBaV1JRYjJ4NWJHbHVaVU52Ykc5eUtHUmhkR0VwWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWNtVnVaR1Z5VUc5c2VXeHBibVZEYjJ4dmNsUjVjR1VnUFQwOUlDZGpiR0Z6YzJsbWFXVmtKeWtnZTF4dUlDQWdJQ0FnWTI5c2IzSWdQU0IwYUdsekxtZGxkRU5zWVhOemFXWjVVRzlzZVd4cGJtVkRiMnh2Y2loa1lYUmhLVnh1SUNBZ0lIMWNiaUFnSUNCemQybDBZMmdnS0cxdlpHVXBJSHRjYmlBZ0lDQWdJR05oYzJVZ0oyUmhjbXRsYmljNlhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCa1lYSnJaVzRvWTI5c2IzSXBYRzRnSUNBZ0lDQmpZWE5sSUNkc2FXZG9kR1Z1SnpwY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUd4cFoyaDBaVzRvWTI5c2IzSXBYRzRnSUNBZ0lDQmtaV1poZFd4ME9seHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXNiM0pjYmlBZ0lDQjlYRzRnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0FxSUdGeklFTnZiRzl5SUdaeWIyMGdKMk52Ykc5eUoxeHVYRzVtZFc1amRHbHZiaUJzYVdkb2RHVnVLR2hsZUVOdmJHOXlPaUJ6ZEhKcGJtY3BJSHRjYmlBZ2NtVjBkWEp1SUVOdmJHOXlLR2hsZUVOdmJHOXlLVnh1SUNBZ0lDNXNhV2RvZEdWdUtEQXVOU2xjYmlBZ0lDQXVhR1Y0S0NsY2JuMWNibVoxYm1OMGFXOXVJR1JoY210bGJpaG9aWGhEYjJ4dmNqb2djM1J5YVc1bktTQjdYRzRnSUhKbGRIVnliaUJEYjJ4dmNpaG9aWGhEYjJ4dmNpbGNiaUFnSUNBdVpHRnlhMlZ1S0RBdU5TbGNiaUFnSUNBdWFHVjRLQ2xjYm4xY2JseHVablZ1WTNScGIyNGdiM0IwYVc5dWMwMWxjbWRsS0M0dUxuUmhjbWRsZEhNNklHRnVlVnRkS1RvZ2IySnFaV04wSUh0Y2JpQWdhV1lnS0hSaGNtZGxkSE11YkdWdVozUm9JRDA5UFNBd0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUh0OVhHNGdJSDFjYmlBZ2FXWWdLSFJoY21kbGRITXViR1Z1WjNSb0lEMDlQU0F4S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJoY21kbGRITmJNRjFjYmlBZ2ZWeHVJQ0JqYjI1emRDQnRaWEpuWldRZ1BTQjBZWEpuWlhSeld6QmRYRzRnSUdadmNpQW9ZMjl1YzNRZ2EyVjVJR2x1SUhSaGNtZGxkSE5iTVYwcElIdGNiaUFnSUNCcFppQW9hMlY1SUdsdUlHMWxjbWRsWkNrZ2UxeHVJQ0FnSUNBZ2FXWWdLRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY3VZMkZzYkNodFpYSm5aV1JiYTJWNVhTa2dQVDA5SUNkYmIySnFaV04wSUU5aWFtVmpkRjBuS1NCN1hHNGdJQ0FnSUNBZ0lHMWxjbWRsWkZ0clpYbGRJRDBnYjNCMGFXOXVjMDFsY21kbEtHMWxjbWRsWkZ0clpYbGRMQ0IwWVhKblpYUnpXekZkVzJ0bGVWMHBYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQnRaWEpuWldSYmEyVjVYU0E5SUhSaGNtZGxkSE5iTVYxYmEyVjVYVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCdFpYSm5aV1JiYTJWNVhTQTlJSFJoY21kbGRITmJNVjFiYTJWNVhWeHVJQ0FnSUgxY2JpQWdmVnh1SUNCeVpYUjFjbTRnYjNCMGFXOXVjMDFsY21kbEtHMWxjbWRsWkN3Z0xpNHVkR0Z5WjJWMGN5NXpiR2xqWlNneUtTbGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQnNhV2RvZEdWdUxGeHVJQ0JrWVhKclpXNHNYRzRnSUc5d2RHbHZibk5OWlhKblpTeGNibjFjYm1WNGNHOXlkQ0I3SUd4cFoyaDBaVzRzSUdSaGNtdGxiaXdnYjNCMGFXOXVjMDFsY21kbElIMWNiaUpkTENKemIzVnlZMlZTYjI5MElqb2lJbjA9IiwiLy8gQHRzLWlnbm9yZVxuaW1wb3J0IGxlYWZsZXRNYXAgZnJvbSAnLi4vLi4vLi4vbGVhZmxldC1sYXllcidcblxuLy8gQHRzLWlnbm9yZVxuY29uc3QgTCA9IHdpbmRvdy5MXG5cbmZ1bmN0aW9uIGlzUG9pbnRJblZpZXdwb3J0KHgsIHkpIHtcbiAgcmV0dXJuIChcbiAgICB4ID49IDAgJiZcbiAgICB5ID49IDAgJiZcbiAgICB4IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICYmXG4gICAgeSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gIClcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50SW5WaWV3cG9ydChlbCkge1xuICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gIHJldHVybiAoXG4gICAgcmVjdC50b3AgPj0gMCAmJlxuICAgIHJlY3QubGVmdCA+PSAwICYmXG4gICAgcmVjdC5ib3R0b20gPD1cbiAgICAgICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXG4gIClcbn1cblxuZnVuY3Rpb24gY2FsY09mZnNldCh4LCB5LCB3LCBoKSB7XG4gIGNvbnN0IEJPVFRPTV9SSUdIVCA9IDBcbiAgY29uc3QgQk9UVE9NX0xFRlQgPSAxXG4gIGNvbnN0IFRPUF9SSUdIVCA9IDJcbiAgY29uc3QgVE9QX0xFRlQgPSAzXG4gIGNvbnN0IGJvdW5kcyA9IFtcbiAgICBbeCArIHcsIHkgKyBoXSxcbiAgICBbeCAtIHcsIHkgKyBoXSxcbiAgICBbeCArIHcsIHkgLSBoXSxcbiAgICBbeCAtIHcsIHkgLSBoXSxcbiAgXVxuXG4gIGxldCBpID0gMFxuICBmb3IgKDsgaSA8IGJvdW5kcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChpc1BvaW50SW5WaWV3cG9ydCguLi5ib3VuZHNbaV0pKSB7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICBzd2l0Y2ggKGkpIHtcbiAgICBjYXNlIEJPVFRPTV9SSUdIVDpcbiAgICAgIHJldHVybiBbeCwgeV1cbiAgICBjYXNlIEJPVFRPTV9MRUZUOlxuICAgICAgcmV0dXJuIFt4IC0gdywgeV1cbiAgICBjYXNlIFRPUF9SSUdIVDpcbiAgICAgIHJldHVybiBbeCwgeSAtIGhdXG4gICAgY2FzZSBUT1BfTEVGVDpcbiAgICAgIHJldHVybiBbeCAtIHcsIHkgLSBoXVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gW3gsIHldXG4gIH1cbn1cblxudmFyIHBvc2l0aW9uID0gbmV3IEwuTGF0TG5nKDMwLjkwNzc4LCAxMjAuNDAxMjE2KVxuLy8gdmFyIHBvc2l0aW9uID0gbmV3IEwuTGF0TG5nKDM5LjkwNzc4LCAxMTYuNDAxMjE2KVxudmFyIG1hcCA9IEwubWFwKCdtYXAnLCB7XG4gIC8vIGNyczogTC5DUlMuRVBTRzQzMjZcbiAgY3JzOiBMLkNSUy5FUFNHMzg1Nyxcbn0pLnNldFZpZXcocG9zaXRpb24sIDEzKVxuXG5MLnRpbGVMYXllclxuICAuY2hpbmFQcm92aWRlcignR2FvRGUuTm9ybWFsLk1hcCcsIHsgbWF4Wm9vbTogMTgsIG1pblpvb206IDMgfSlcbiAgLmFkZFRvKG1hcClcblxuY29uc3QgYSA9IEwudGlsZUxheWVyXG4gIC53bXMoXG4gICAgJ2h0dHA6Ly8xOTIuMTY4LjEuNTQ6ODA5MC9nZW9zZXJ2ZXIvbmF2aWdhdG9yX3dvcmtzcGFjZS93bXMnLFxuICAgIHtcbiAgICAgIGxheWVyczogXCJuYXZpZ2F0b3Jfd29ya3NwYWNlOnJfc2hhbmdoYWliYWlodW93YW5nZ2VodWFfenN3MlwiLFxuICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXG4gICAgICBmb3JtYXQ6ICdpbWFnZS9wbmcnLFxuICAgICAgY3JzOiBMLkNSUy5FUFNHNDMyNlxuICAgIH0sXG4gIClcbmEuYWRkVG8obWFwKVxuYS5vbignbG9hZCcsIGUgPT4ge1xuICBjb25zb2xlLmxvZygnbG9hZCcsIGUpXG59KVxuYS5vbignY2xpY2snLCBlID0+IHtcbiAgY29uc29sZS5sb2coZSlcbn0pXG5cbi8vIHZhciBkYXRhTGlzdCA9IFtcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9seWdvbicsXG4vLyAgICAgICBjb29yZGluYXRlczogW1xuLy8gICAgICAgICBbXG4vLyAgICAgICAgICAgWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICAgICAgICBbMTE2LjM5MTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgICAgICAgIFsxMTYuMzkxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgICAgICAgWzExNi40MDEyMTYsIDM5LjkxNzc4XSxcbi8vICAgICAgICAgXSxcbi8vICAgICAgIF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMTA5MDkwOTA5MDkwLFxuLy8gICB9LFxuLy8gXVxuXG4vLyB2YXIgbGF5ZXIgPSBuZXcgbGVhZmxldE1hcC5Hcmlkc0xheWVyKFxuLy8gICBtYXAsXG4vLyAgIGRhdGFMaXN0LFxuLy8gICB7IHRvb2x0aXBBdHRyOiAncHJpY2UnLCBwb3B1cEF0dHI6IHsgbGFiZWw6ICdwJywgdmFsdWU6ICdwcmljZScgfSB9LFxuLy8gICBjb25zb2xlLmxvZ1xuLy8gKVxuLy8gbGF5ZXIudG9nZ2xlVG9vbHRpcCh0cnVlKVxuLy8gbGF5ZXIuZHJhdygpXG5cbi8vIHZhciBkYXRhTGlzdCA9IFtcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMC4xLFxuLy8gICAgIG5hbWU6ICc1Jyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMC4xLFxuLy8gICAgIG5hbWU6ICcyJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMC4xLFxuLy8gICAgIG5hbWU6ICcxJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuNDAxMjE2LCAzOS45MTc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMTAwLFxuLy8gICAgIG5hbWU6ICcyJyxcbi8vICAgfSxcbi8vIF1cblxuLy8gdmFyIGxheWVyID0gbmV3IGxlYWZsZXRNYXAuTWFya2Vyc0xheWVyKFxuLy8gICBtYXAsXG4vLyAgIGRhdGFMaXN0LFxuLy8gICB7XG4vLyAgICAgcmVuZGVyVHlwZTogJ2hlYXQnLFxuLy8gICAgIGhlYXRPcHRpb25zOiB7XG4vLyAgICAgICBkaW1lbnNpb25BdHRyOiAncHJpY2UnLFxuLy8gICAgICAgcmFkaXVzOiAzMCxcbi8vICAgICAgIG1pbk9wYWNpdHk6IDAuNyxcbi8vICAgICAgIGJsdXI6IDYwLFxuLy8gICAgICAgLy8gbWF4OiAxLFxuLy8gICAgIH0sXG4vLyAgIH0sXG4vLyAgIGNvbnNvbGUubG9nXG4vLyApXG4vLyBsYXllci5kcmF3KClcblxudmFyIGRhdGFMaXN0ID0gW1xuICB7XG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHR5cGU6ICdQb2ludCcsXG4gICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbiAgICB9LFxuICAgIHByaWNlOiAxLFxuICAgIGNsYXNzOiAnYScsXG4gIH0sXG4gIHtcbiAgICBnZW9tZXRyeToge1xuICAgICAgdHlwZTogJ1BvaW50JyxcbiAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM5MTIxNiwgMzkuOTA3NzhdLFxuICAgIH0sXG4gICAgcHJpY2U6IDUsXG4gICAgY2xhc3M6ICdiJyxcbiAgfSxcbiAge1xuICAgIGdlb21ldHJ5OiB7XG4gICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgY29vcmRpbmF0ZXM6IFsxMjAuMzgxMjE2LCAzMC45MDc3OF0sXG4gICAgfSxcbiAgICBwcmljZTogMTAsXG4gICAgY2xhc3M6ICdiJyxcbiAgfSxcbl1cblxudmFyIGxheWVyID0gbmV3IGxlYWZsZXRNYXAuTWFya2Vyc0xheWVyKFxuICBtYXAsXG4gIGRhdGFMaXN0LFxuICB7XG4gICAgcmVuZGVyVHlwZTogJ2J1YmJsZScsXG4gICAgLy8gaWNvblVuaWNvZGU6ICcmI3hlNjU1OycsXG4gICAgLy8gdG9vbHRpcDogZmFsc2UsXG4gICAgcG9wdXA6IGZhbHNlLFxuICAgIHRvb2x0aXBBdHRyOiAncHJpY2UnLFxuICAgIHBvcHVwQXR0cjogeyBsYWJlbDogJ+S7t+agvCcsIHZhbHVlOiAncHJpY2UnIH0sXG4gICAgYnViYmxlQ29sb3JBdHRyOiAnY2xhc3MnLFxuICAgIGJ1YmJsZVNpemVBdHRyOiAncHJpY2UnLFxuICAgIGJ1YmJsZUNvbG9yczogWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddLFxuICAgIGJ1YmJsZVNpemVzOiBbMTAsIDIwLCAzMF0sXG4gICAgYnViYmxlU3Ryb2tlV2lkdGg6IDEwLFxuICAgIC8vIGJ1YmJsZVN0cm9rZUNvbG9yOiAnYmxhY2snLFxuICB9LFxuICBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAvLyBjb25zdCB3ID0gMTAwXG4gICAgLy8gY29uc3QgaCA9IDIwMFxuICAgIC8vIGNvbnN0IHsgeCwgeSB9ID0gZXZlbnQuY29udGFpbmVyUG9pbnRcbiAgICAvLyBjYWxjT2Zmc2V0KHgsIHksIHcsIGgpXG4gIH1cbilcbmxheWVyLmRyYXcoKVxuY29uc29sZS5sb2cobGF5ZXIuZ2V0QnViYmxlZENvbG9yUmVmcygpKVxuXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIFtcbi8vICAgICB7XG4vLyAgICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBwcmljZTogMSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gICBbXG4vLyAgICAge1xuLy8gICAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgcHJpY2U6IDEsXG4vLyAgICAgfSxcbi8vICAgXSxcbi8vICAgW1xuLy8gICAgIHtcbi8vICAgICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM5MTIxNiwgMzkuOTE3NzhdLFxuLy8gICAgICAgfSxcbi8vICAgICAgIHByaWNlOiAxLFxuLy8gICAgIH0sXG4vLyAgIF0sXG4vLyAgIFtcbi8vICAgICB7XG4vLyAgICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkxNzc4XSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBwcmljZTogMSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gXVxuLy8gY29uc3QgbGF5ZXIgPSBuZXcgbGVhZmxldE1hcC5EeW5hbWljSGVhdExheWVyKFxuLy8gICBtYXAsXG4vLyAgIGRhdGFMaXN0LFxuLy8gICB7IGxvb3A6IHRydWUsIGF1dG86IHRydWUgfSxcbi8vICAgY29uc29sZS5sb2dcbi8vIClcbi8vICAgLmRyYXcoKVxuLy8gICAuc3RhcnQoKVxuXG4vLyBMLm1hcmtlcihbMzIuMDMwNCwgMTE4Ljc5NjhdLCB7XG4vLyAgIGljb246IEwuZGl2SWNvbih7XG4vLyAgICAgaHRtbDogJzxpIGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDBweDtcIj4mI3hlNjU1OzwvaT4nLFxuLy8gICAgIGljb25TaXplOiBbNDAsIDQwXSxcbi8vICAgICBjbGFzc05hbWU6ICd0ZXN0Jyxcbi8vICAgfSksXG4vLyB9KS5hZGRUbyhtYXApXG4vLyBMLm1hcmtlcihbMzIuMDMwNCwgMTE4Ljc5NjhdKS5hZGRUbyhtYXApXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDIsXG4vLyAgIH0sXG4vLyBdXG5cbi8vIGNvbnN0IGxheWVyID0gbmV3IGxlYWZsZXRNYXAuTWFya2Vyc0xheWVyKFxuLy8gICBtYXAsXG4vLyAgIGRhdGFMaXN0LFxuLy8gICB7XG4vLyAgICAgaWNvblVuaWNvZGU6ICcmI3hlNjU1OycsXG4vLyAgICAgaWNvblNpemU6IFsyMCwgMjBdLFxuLy8gICAgIGljb25BbmNob3I6IFsxMCwgMjBdLFxuLy8gICAgIHBvcHVwQXR0cjogJ3ByaWNlJyxcbi8vICAgICB0b29sdGlwQXR0cjogJ3ByaWNlJyxcbi8vICAgfSxcbi8vICAgZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4vLyAgICAgY29uc29sZS5sb2coZXZlbnROYW1lKVxuLy8gICB9XG4vLyApXG5cbi8vIGxheWVyLmRyYXcoKVxuXG4vLyAvLyBMLm1hcmtlcihMLmxhdExuZygzOS45MDc3OCwgMTE2LjQwMTIxNikpXG4vLyAvLyAgIC5hZGRUbyhtYXApXG4vLyAvLyAgIC5iaW5kVG9vbHRpcCgnYWRmJylcblxuLy8gTC5tYXJrZXIoTC5sYXRMbmcoMzkuOTA3NzgsIDExNi40MDEyMTYpLCB7XG4vLyAgIG9wYWNpdHk6IDAuMixcbi8vICAgaWNvbjogTC5kaXZJY29uKHtcbi8vICAgICBpY29uQW5jaG9yOiBbMTAsIDIwXSxcbi8vICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4vLyAgICAgaHRtbDogYFxuLy8gICAgIDxpXG4vLyAgICAgICBjbGFzcz1cImljb25mb250XCJcbi8vICAgICAgIHN0eWxlPVwiXG4vLyAgICAgICAgIGNvbG9yOiByZWQ7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIFwiXG4vLyAgICAgICA+XG4vLyAgICAgICAmI3hlNjU1O1xuLy8gICAgIDwvaT5cbi8vICAgYCxcbi8vICAgfSksXG4vLyB9KS5hZGRUbyhtYXApXG4vLyB3aW5kb3cubGF5ZXIgPSBsYXllclxuIl0sInNvdXJjZVJvb3QiOiIifQ==