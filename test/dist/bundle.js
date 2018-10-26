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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvbWFya2VyL01hcmtlci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHNEQUFZOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGdGQUFZO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixJQUFJO0FBQzdCLHdCQUF3QixFQUFFLFdBQVcsRUFBRTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDek9ZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQywwREFBYztBQUN4QyxjQUFjLG1CQUFPLENBQUMsNERBQWU7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUFDO1lBQ3RCLEtBQUssU0FBUztnQkFDWixPQUFPLDREQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3ZCO2dCQUNFLE9BQU8sS0FBSztTQUNmO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7O0FDdlBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFFOUIsU0FBUyxPQUFPLENBQUMsUUFBZ0I7SUFDL0IsT0FBTyxrQ0FBSyxDQUFDLFFBQVEsQ0FBQztTQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ1osR0FBRyxFQUFFO0FBQ1YsQ0FBQztBQUNELFNBQVMsTUFBTSxDQUFDLFFBQWdCO0lBQzlCLE9BQU8sa0NBQUssQ0FBQyxRQUFRLENBQUM7U0FDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQztTQUNYLEdBQUcsRUFBRTtBQUNWLENBQUM7QUFDYztJQUNiLE9BQU87SUFDUCxNQUFNO0NBQ1A7QUFDeUIiLCJmaWxlIjoibGVhZmxldC1sYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxlYWZsZXRNYXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNzc0tleXdvcmRzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKHZhciBrZXkgaW4gY3NzS2V5d29yZHMpIHtcblx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XV0gPSBrZXk7XG5cdH1cbn1cblxudmFyIGNvbnZlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3JnYid9LFxuXHRoc2w6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHNsJ30sXG5cdGhzdjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc3YnfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2h3Yid9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDQsIGxhYmVsczogJ2NteWsnfSxcblx0eHl6OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3h5eid9LFxuXHRsYWI6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGFiJ30sXG5cdGxjaDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsY2gnfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydoZXgnXX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2tleXdvcmQnXX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTE2J119LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMjU2J119LFxuXHRoY2c6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ2gnLCAnYycsICdnJ119LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsncjE2JywgJ2cxNicsICdiMTYnXX0sXG5cdGdyYXk6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2dyYXknXX1cbn07XG5cbi8vIGhpZGUgLmNoYW5uZWxzIGFuZCAubGFiZWxzIHByb3BlcnRpZXNcbmZvciAodmFyIG1vZGVsIGluIGNvbnZlcnQpIHtcblx0aWYgKGNvbnZlcnQuaGFzT3duUHJvcGVydHkobW9kZWwpKSB7XG5cdFx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoISgnbGFiZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVsIGxhYmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoY29udmVydFttb2RlbF0ubGFiZWxzLmxlbmd0aCAhPT0gY29udmVydFttb2RlbF0uY2hhbm5lbHMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2hhbm5lbCBhbmQgbGFiZWwgY291bnRzIG1pc21hdGNoOiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBsYWJlbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJkaWY7XG5cdHZhciBnZGlmO1xuXHR2YXIgYmRpZjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciB2ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkaWZmID0gdiAtIE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgZGlmZmMgPSBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAodiAtIGMpIC8gNiAvIGRpZmYgKyAxIC8gMjtcblx0fTtcblxuXHRpZiAoZGlmZiA9PT0gMCkge1xuXHRcdGggPSBzID0gMDtcblx0fSBlbHNlIHtcblx0XHRzID0gZGlmZiAvIHY7XG5cdFx0cmRpZiA9IGRpZmZjKHIpO1xuXHRcdGdkaWYgPSBkaWZmYyhnKTtcblx0XHRiZGlmID0gZGlmZmMoYik7XG5cblx0XHRpZiAociA9PT0gdikge1xuXHRcdFx0aCA9IGJkaWYgLSBnZGlmO1xuXHRcdH0gZWxzZSBpZiAoZyA9PT0gdikge1xuXHRcdFx0aCA9ICgxIC8gMykgKyByZGlmIC0gYmRpZjtcblx0XHR9IGVsc2UgaWYgKGIgPT09IHYpIHtcblx0XHRcdGggPSAoMiAvIDMpICsgZ2RpZiAtIHJkaWY7XG5cdFx0fVxuXHRcdGlmIChoIDwgMCkge1xuXHRcdFx0aCArPSAxO1xuXHRcdH0gZWxzZSBpZiAoaCA+IDEpIHtcblx0XHRcdGggLT0gMTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGggKiAzNjAsXG5cdFx0cyAqIDEwMCxcblx0XHR2ICogMTAwXG5cdF07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2VcbiAqICovXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0cmV0dXJuIChcblx0XHRNYXRoLnBvdyh4WzBdIC0geVswXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMV0gLSB5WzFdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsyXSAtIHlbMl0sIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHR2YXIgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHR2YXIgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAodmFyIGtleXdvcmQgaW4gY3NzS2V5d29yZHMpIHtcblx0XHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5d29yZCkpIHtcblx0XHRcdHZhciB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn18W2EtZjAtOV17M30vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGNvbG9yU3RyaW5nID0gbWF0Y2hbMF07XG5cblx0aWYgKG1hdGNoWzBdLmxlbmd0aCA9PT0gMykge1xuXHRcdGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoY2hhcikge1xuXHRcdFx0cmV0dXJuIGNoYXIgKyBjaGFyO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuXG5jb252ZXJ0LmdyYXkucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFthcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc2wgPSBjb252ZXJ0LmdyYXkuaHN2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFswLCAwLCBhcmdzWzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5od2IgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDEwMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuY215ayA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMCwgMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkubGFiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFtncmF5WzBdLCAwLCAwXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oZXggPSBmdW5jdGlvbiAoZ3JheSkge1xuXHR2YXIgdmFsID0gTWF0aC5yb3VuZChncmF5WzBdIC8gMTAwICogMjU1KSAmIDB4RkY7XG5cdHZhciBpbnRlZ2VyID0gKHZhbCA8PCAxNikgKyAodmFsIDw8IDgpICsgdmFsO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5yZ2IuZ3JheSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHZhbCA9IChyZ2JbMF0gKyByZ2JbMV0gKyByZ2JbMl0pIC8gMztcblx0cmV0dXJuIFt2YWwgLyAyNTUgKiAxMDBdO1xufTtcbiIsInZhciBjb252ZXJzaW9ucyA9IHJlcXVpcmUoJy4vY29udmVyc2lvbnMnKTtcbnZhciByb3V0ZSA9IHJlcXVpcmUoJy4vcm91dGUnKTtcblxudmFyIGNvbnZlcnQgPSB7fTtcblxudmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuZnVuY3Rpb24gd3JhcFJhdyhmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZuKGFyZ3MpO1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxuZnVuY3Rpb24gd3JhcFJvdW5kZWQoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHZhciByZXN1bHQgPSBmbihhcmdzKTtcblxuXHRcdC8vIHdlJ3JlIGFzc3VtaW5nIHRoZSByZXN1bHQgaXMgYW4gYXJyYXkgaGVyZS5cblx0XHQvLyBzZWUgbm90aWNlIGluIGNvbnZlcnNpb25zLmpzOyBkb24ndCB1c2UgYm94IHR5cGVzXG5cdFx0Ly8gaW4gY29udmVyc2lvbiBmdW5jdGlvbnMuXG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRmb3IgKHZhciBsZW4gPSByZXN1bHQubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdHJlc3VsdFtpXSA9IE1hdGgucm91bmQocmVzdWx0W2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8vIHByZXNlcnZlIC5jb252ZXJzaW9uIHByb3BlcnR5IGlmIHRoZXJlIGlzIG9uZVxuXHRpZiAoJ2NvbnZlcnNpb24nIGluIGZuKSB7XG5cdFx0d3JhcHBlZEZuLmNvbnZlcnNpb24gPSBmbi5jb252ZXJzaW9uO1xuXHR9XG5cblx0cmV0dXJuIHdyYXBwZWRGbjtcbn1cblxubW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHRjb252ZXJ0W2Zyb21Nb2RlbF0gPSB7fTtcblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0uY2hhbm5lbHN9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2xhYmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5sYWJlbHN9KTtcblxuXHR2YXIgcm91dGVzID0gcm91dGUoZnJvbU1vZGVsKTtcblx0dmFyIHJvdXRlTW9kZWxzID0gT2JqZWN0LmtleXMocm91dGVzKTtcblxuXHRyb3V0ZU1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uICh0b01vZGVsKSB7XG5cdFx0dmFyIGZuID0gcm91dGVzW3RvTW9kZWxdO1xuXG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdID0gd3JhcFJvdW5kZWQoZm4pO1xuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXS5yYXcgPSB3cmFwUmF3KGZuKTtcblx0fSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xuXG4vKlxuXHR0aGlzIGZ1bmN0aW9uIHJvdXRlcyBhIG1vZGVsIHRvIGFsbCBvdGhlciBtb2RlbHMuXG5cblx0YWxsIGZ1bmN0aW9ucyB0aGF0IGFyZSByb3V0ZWQgaGF2ZSBhIHByb3BlcnR5IGAuY29udmVyc2lvbmAgYXR0YWNoZWRcblx0dG8gdGhlIHJldHVybmVkIHN5bnRoZXRpYyBmdW5jdGlvbi4gVGhpcyBwcm9wZXJ0eSBpcyBhbiBhcnJheVxuXHRvZiBzdHJpbmdzLCBlYWNoIHdpdGggdGhlIHN0ZXBzIGluIGJldHdlZW4gdGhlICdmcm9tJyBhbmQgJ3RvJ1xuXHRjb2xvciBtb2RlbHMgKGluY2x1c2l2ZSkuXG5cblx0Y29udmVyc2lvbnMgdGhhdCBhcmUgbm90IHBvc3NpYmxlIHNpbXBseSBhcmUgbm90IGluY2x1ZGVkLlxuKi9cblxuZnVuY3Rpb24gYnVpbGRHcmFwaCgpIHtcblx0dmFyIGdyYXBoID0ge307XG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcblx0dmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG4iLCIndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdFwiYWxpY2VibHVlXCI6IFsyNDAsIDI0OCwgMjU1XSxcclxuXHRcImFudGlxdWV3aGl0ZVwiOiBbMjUwLCAyMzUsIDIxNV0sXHJcblx0XCJhcXVhXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJhcXVhbWFyaW5lXCI6IFsxMjcsIDI1NSwgMjEyXSxcclxuXHRcImF6dXJlXCI6IFsyNDAsIDI1NSwgMjU1XSxcclxuXHRcImJlaWdlXCI6IFsyNDUsIDI0NSwgMjIwXSxcclxuXHRcImJpc3F1ZVwiOiBbMjU1LCAyMjgsIDE5Nl0sXHJcblx0XCJibGFja1wiOiBbMCwgMCwgMF0sXHJcblx0XCJibGFuY2hlZGFsbW9uZFwiOiBbMjU1LCAyMzUsIDIwNV0sXHJcblx0XCJibHVlXCI6IFswLCAwLCAyNTVdLFxyXG5cdFwiYmx1ZXZpb2xldFwiOiBbMTM4LCA0MywgMjI2XSxcclxuXHRcImJyb3duXCI6IFsxNjUsIDQyLCA0Ml0sXHJcblx0XCJidXJseXdvb2RcIjogWzIyMiwgMTg0LCAxMzVdLFxyXG5cdFwiY2FkZXRibHVlXCI6IFs5NSwgMTU4LCAxNjBdLFxyXG5cdFwiY2hhcnRyZXVzZVwiOiBbMTI3LCAyNTUsIDBdLFxyXG5cdFwiY2hvY29sYXRlXCI6IFsyMTAsIDEwNSwgMzBdLFxyXG5cdFwiY29yYWxcIjogWzI1NSwgMTI3LCA4MF0sXHJcblx0XCJjb3JuZmxvd2VyYmx1ZVwiOiBbMTAwLCAxNDksIDIzN10sXHJcblx0XCJjb3Juc2lsa1wiOiBbMjU1LCAyNDgsIDIyMF0sXHJcblx0XCJjcmltc29uXCI6IFsyMjAsIDIwLCA2MF0sXHJcblx0XCJjeWFuXCI6IFswLCAyNTUsIDI1NV0sXHJcblx0XCJkYXJrYmx1ZVwiOiBbMCwgMCwgMTM5XSxcclxuXHRcImRhcmtjeWFuXCI6IFswLCAxMzksIDEzOV0sXHJcblx0XCJkYXJrZ29sZGVucm9kXCI6IFsxODQsIDEzNCwgMTFdLFxyXG5cdFwiZGFya2dyYXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2dyZWVuXCI6IFswLCAxMDAsIDBdLFxyXG5cdFwiZGFya2dyZXlcIjogWzE2OSwgMTY5LCAxNjldLFxyXG5cdFwiZGFya2toYWtpXCI6IFsxODksIDE4MywgMTA3XSxcclxuXHRcImRhcmttYWdlbnRhXCI6IFsxMzksIDAsIDEzOV0sXHJcblx0XCJkYXJrb2xpdmVncmVlblwiOiBbODUsIDEwNywgNDddLFxyXG5cdFwiZGFya29yYW5nZVwiOiBbMjU1LCAxNDAsIDBdLFxyXG5cdFwiZGFya29yY2hpZFwiOiBbMTUzLCA1MCwgMjA0XSxcclxuXHRcImRhcmtyZWRcIjogWzEzOSwgMCwgMF0sXHJcblx0XCJkYXJrc2FsbW9uXCI6IFsyMzMsIDE1MCwgMTIyXSxcclxuXHRcImRhcmtzZWFncmVlblwiOiBbMTQzLCAxODgsIDE0M10sXHJcblx0XCJkYXJrc2xhdGVibHVlXCI6IFs3MiwgNjEsIDEzOV0sXHJcblx0XCJkYXJrc2xhdGVncmF5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmtzbGF0ZWdyZXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3R1cnF1b2lzZVwiOiBbMCwgMjA2LCAyMDldLFxyXG5cdFwiZGFya3Zpb2xldFwiOiBbMTQ4LCAwLCAyMTFdLFxyXG5cdFwiZGVlcHBpbmtcIjogWzI1NSwgMjAsIDE0N10sXHJcblx0XCJkZWVwc2t5Ymx1ZVwiOiBbMCwgMTkxLCAyNTVdLFxyXG5cdFwiZGltZ3JheVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkaW1ncmV5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRvZGdlcmJsdWVcIjogWzMwLCAxNDQsIDI1NV0sXHJcblx0XCJmaXJlYnJpY2tcIjogWzE3OCwgMzQsIDM0XSxcclxuXHRcImZsb3JhbHdoaXRlXCI6IFsyNTUsIDI1MCwgMjQwXSxcclxuXHRcImZvcmVzdGdyZWVuXCI6IFszNCwgMTM5LCAzNF0sXHJcblx0XCJmdWNoc2lhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJnYWluc2Jvcm9cIjogWzIyMCwgMjIwLCAyMjBdLFxyXG5cdFwiZ2hvc3R3aGl0ZVwiOiBbMjQ4LCAyNDgsIDI1NV0sXHJcblx0XCJnb2xkXCI6IFsyNTUsIDIxNSwgMF0sXHJcblx0XCJnb2xkZW5yb2RcIjogWzIxOCwgMTY1LCAzMl0sXHJcblx0XCJncmF5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImdyZWVuXCI6IFswLCAxMjgsIDBdLFxyXG5cdFwiZ3JlZW55ZWxsb3dcIjogWzE3MywgMjU1LCA0N10sXHJcblx0XCJncmV5XCI6IFsxMjgsIDEyOCwgMTI4XSxcclxuXHRcImhvbmV5ZGV3XCI6IFsyNDAsIDI1NSwgMjQwXSxcclxuXHRcImhvdHBpbmtcIjogWzI1NSwgMTA1LCAxODBdLFxyXG5cdFwiaW5kaWFucmVkXCI6IFsyMDUsIDkyLCA5Ml0sXHJcblx0XCJpbmRpZ29cIjogWzc1LCAwLCAxMzBdLFxyXG5cdFwiaXZvcnlcIjogWzI1NSwgMjU1LCAyNDBdLFxyXG5cdFwia2hha2lcIjogWzI0MCwgMjMwLCAxNDBdLFxyXG5cdFwibGF2ZW5kZXJcIjogWzIzMCwgMjMwLCAyNTBdLFxyXG5cdFwibGF2ZW5kZXJibHVzaFwiOiBbMjU1LCAyNDAsIDI0NV0sXHJcblx0XCJsYXduZ3JlZW5cIjogWzEyNCwgMjUyLCAwXSxcclxuXHRcImxlbW9uY2hpZmZvblwiOiBbMjU1LCAyNTAsIDIwNV0sXHJcblx0XCJsaWdodGJsdWVcIjogWzE3MywgMjE2LCAyMzBdLFxyXG5cdFwibGlnaHRjb3JhbFwiOiBbMjQwLCAxMjgsIDEyOF0sXHJcblx0XCJsaWdodGN5YW5cIjogWzIyNCwgMjU1LCAyNTVdLFxyXG5cdFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIjogWzI1MCwgMjUwLCAyMTBdLFxyXG5cdFwibGlnaHRncmF5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0Z3JlZW5cIjogWzE0NCwgMjM4LCAxNDRdLFxyXG5cdFwibGlnaHRncmV5XCI6IFsyMTEsIDIxMSwgMjExXSxcclxuXHRcImxpZ2h0cGlua1wiOiBbMjU1LCAxODIsIDE5M10sXHJcblx0XCJsaWdodHNhbG1vblwiOiBbMjU1LCAxNjAsIDEyMl0sXHJcblx0XCJsaWdodHNlYWdyZWVuXCI6IFszMiwgMTc4LCAxNzBdLFxyXG5cdFwibGlnaHRza3libHVlXCI6IFsxMzUsIDIwNiwgMjUwXSxcclxuXHRcImxpZ2h0c2xhdGVncmF5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c2xhdGVncmV5XCI6IFsxMTksIDEzNiwgMTUzXSxcclxuXHRcImxpZ2h0c3RlZWxibHVlXCI6IFsxNzYsIDE5NiwgMjIyXSxcclxuXHRcImxpZ2h0eWVsbG93XCI6IFsyNTUsIDI1NSwgMjI0XSxcclxuXHRcImxpbWVcIjogWzAsIDI1NSwgMF0sXHJcblx0XCJsaW1lZ3JlZW5cIjogWzUwLCAyMDUsIDUwXSxcclxuXHRcImxpbmVuXCI6IFsyNTAsIDI0MCwgMjMwXSxcclxuXHRcIm1hZ2VudGFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcIm1hcm9vblwiOiBbMTI4LCAwLCAwXSxcclxuXHRcIm1lZGl1bWFxdWFtYXJpbmVcIjogWzEwMiwgMjA1LCAxNzBdLFxyXG5cdFwibWVkaXVtYmx1ZVwiOiBbMCwgMCwgMjA1XSxcclxuXHRcIm1lZGl1bW9yY2hpZFwiOiBbMTg2LCA4NSwgMjExXSxcclxuXHRcIm1lZGl1bXB1cnBsZVwiOiBbMTQ3LCAxMTIsIDIxOV0sXHJcblx0XCJtZWRpdW1zZWFncmVlblwiOiBbNjAsIDE3OSwgMTEzXSxcclxuXHRcIm1lZGl1bXNsYXRlYmx1ZVwiOiBbMTIzLCAxMDQsIDIzOF0sXHJcblx0XCJtZWRpdW1zcHJpbmdncmVlblwiOiBbMCwgMjUwLCAxNTRdLFxyXG5cdFwibWVkaXVtdHVycXVvaXNlXCI6IFs3MiwgMjA5LCAyMDRdLFxyXG5cdFwibWVkaXVtdmlvbGV0cmVkXCI6IFsxOTksIDIxLCAxMzNdLFxyXG5cdFwibWlkbmlnaHRibHVlXCI6IFsyNSwgMjUsIDExMl0sXHJcblx0XCJtaW50Y3JlYW1cIjogWzI0NSwgMjU1LCAyNTBdLFxyXG5cdFwibWlzdHlyb3NlXCI6IFsyNTUsIDIyOCwgMjI1XSxcclxuXHRcIm1vY2Nhc2luXCI6IFsyNTUsIDIyOCwgMTgxXSxcclxuXHRcIm5hdmFqb3doaXRlXCI6IFsyNTUsIDIyMiwgMTczXSxcclxuXHRcIm5hdnlcIjogWzAsIDAsIDEyOF0sXHJcblx0XCJvbGRsYWNlXCI6IFsyNTMsIDI0NSwgMjMwXSxcclxuXHRcIm9saXZlXCI6IFsxMjgsIDEyOCwgMF0sXHJcblx0XCJvbGl2ZWRyYWJcIjogWzEwNywgMTQyLCAzNV0sXHJcblx0XCJvcmFuZ2VcIjogWzI1NSwgMTY1LCAwXSxcclxuXHRcIm9yYW5nZXJlZFwiOiBbMjU1LCA2OSwgMF0sXHJcblx0XCJvcmNoaWRcIjogWzIxOCwgMTEyLCAyMTRdLFxyXG5cdFwicGFsZWdvbGRlbnJvZFwiOiBbMjM4LCAyMzIsIDE3MF0sXHJcblx0XCJwYWxlZ3JlZW5cIjogWzE1MiwgMjUxLCAxNTJdLFxyXG5cdFwicGFsZXR1cnF1b2lzZVwiOiBbMTc1LCAyMzgsIDIzOF0sXHJcblx0XCJwYWxldmlvbGV0cmVkXCI6IFsyMTksIDExMiwgMTQ3XSxcclxuXHRcInBhcGF5YXdoaXBcIjogWzI1NSwgMjM5LCAyMTNdLFxyXG5cdFwicGVhY2hwdWZmXCI6IFsyNTUsIDIxOCwgMTg1XSxcclxuXHRcInBlcnVcIjogWzIwNSwgMTMzLCA2M10sXHJcblx0XCJwaW5rXCI6IFsyNTUsIDE5MiwgMjAzXSxcclxuXHRcInBsdW1cIjogWzIyMSwgMTYwLCAyMjFdLFxyXG5cdFwicG93ZGVyYmx1ZVwiOiBbMTc2LCAyMjQsIDIzMF0sXHJcblx0XCJwdXJwbGVcIjogWzEyOCwgMCwgMTI4XSxcclxuXHRcInJlYmVjY2FwdXJwbGVcIjogWzEwMiwgNTEsIDE1M10sXHJcblx0XCJyZWRcIjogWzI1NSwgMCwgMF0sXHJcblx0XCJyb3N5YnJvd25cIjogWzE4OCwgMTQzLCAxNDNdLFxyXG5cdFwicm95YWxibHVlXCI6IFs2NSwgMTA1LCAyMjVdLFxyXG5cdFwic2FkZGxlYnJvd25cIjogWzEzOSwgNjksIDE5XSxcclxuXHRcInNhbG1vblwiOiBbMjUwLCAxMjgsIDExNF0sXHJcblx0XCJzYW5keWJyb3duXCI6IFsyNDQsIDE2NCwgOTZdLFxyXG5cdFwic2VhZ3JlZW5cIjogWzQ2LCAxMzksIDg3XSxcclxuXHRcInNlYXNoZWxsXCI6IFsyNTUsIDI0NSwgMjM4XSxcclxuXHRcInNpZW5uYVwiOiBbMTYwLCA4MiwgNDVdLFxyXG5cdFwic2lsdmVyXCI6IFsxOTIsIDE5MiwgMTkyXSxcclxuXHRcInNreWJsdWVcIjogWzEzNSwgMjA2LCAyMzVdLFxyXG5cdFwic2xhdGVibHVlXCI6IFsxMDYsIDkwLCAyMDVdLFxyXG5cdFwic2xhdGVncmF5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNsYXRlZ3JleVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbm93XCI6IFsyNTUsIDI1MCwgMjUwXSxcclxuXHRcInNwcmluZ2dyZWVuXCI6IFswLCAyNTUsIDEyN10sXHJcblx0XCJzdGVlbGJsdWVcIjogWzcwLCAxMzAsIDE4MF0sXHJcblx0XCJ0YW5cIjogWzIxMCwgMTgwLCAxNDBdLFxyXG5cdFwidGVhbFwiOiBbMCwgMTI4LCAxMjhdLFxyXG5cdFwidGhpc3RsZVwiOiBbMjE2LCAxOTEsIDIxNl0sXHJcblx0XCJ0b21hdG9cIjogWzI1NSwgOTksIDcxXSxcclxuXHRcInR1cnF1b2lzZVwiOiBbNjQsIDIyNCwgMjA4XSxcclxuXHRcInZpb2xldFwiOiBbMjM4LCAxMzAsIDIzOF0sXHJcblx0XCJ3aGVhdFwiOiBbMjQ1LCAyMjIsIDE3OV0sXHJcblx0XCJ3aGl0ZVwiOiBbMjU1LCAyNTUsIDI1NV0sXHJcblx0XCJ3aGl0ZXNtb2tlXCI6IFsyNDUsIDI0NSwgMjQ1XSxcclxuXHRcInllbGxvd1wiOiBbMjU1LCAyNTUsIDBdLFxyXG5cdFwieWVsbG93Z3JlZW5cIjogWzE1NCwgMjA1LCA1MF1cclxufTtcclxuIiwiLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjb2xvck5hbWVzID0gcmVxdWlyZSgnY29sb3ItbmFtZScpO1xudmFyIHN3aXp6bGUgPSByZXF1aXJlKCdzaW1wbGUtc3dpenpsZScpO1xuXG52YXIgcmV2ZXJzZU5hbWVzID0ge307XG5cbi8vIGNyZWF0ZSBhIGxpc3Qgb2YgcmV2ZXJzZSBjb2xvciBuYW1lc1xuZm9yICh2YXIgbmFtZSBpbiBjb2xvck5hbWVzKSB7XG5cdGlmIChjb2xvck5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG5cdFx0cmV2ZXJzZU5hbWVzW2NvbG9yTmFtZXNbbmFtZV1dID0gbmFtZTtcblx0fVxufVxuXG52YXIgY3MgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0dG86IHt9LFxuXHRnZXQ6IHt9XG59O1xuXG5jcy5nZXQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdHZhciBwcmVmaXggPSBzdHJpbmcuc3Vic3RyaW5nKDAsIDMpLnRvTG93ZXJDYXNlKCk7XG5cdHZhciB2YWw7XG5cdHZhciBtb2RlbDtcblx0c3dpdGNoIChwcmVmaXgpIHtcblx0XHRjYXNlICdoc2wnOlxuXHRcdFx0dmFsID0gY3MuZ2V0LmhzbChzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAnaHNsJztcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2h3Yic6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHdiKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdod2InO1xuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhbCA9IGNzLmdldC5yZ2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ3JnYic7XG5cdFx0XHRicmVhaztcblx0fVxuXG5cdGlmICghdmFsKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4ge21vZGVsOiBtb2RlbCwgdmFsdWU6IHZhbH07XG59O1xuXG5jcy5nZXQucmdiID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGFiYnIgPSAvXiMoW2EtZjAtOV17Myw0fSkkL2k7XG5cdHZhciBoZXggPSAvXiMoW2EtZjAtOV17Nn0pKFthLWYwLTldezJ9KT8kL2k7XG5cdHZhciByZ2JhID0gL15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBwZXIgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIGtleXdvcmQgPSAvKFxcRCspLztcblxuXHR2YXIgcmdiID0gWzAsIDAsIDAsIDFdO1xuXHR2YXIgbWF0Y2g7XG5cdHZhciBpO1xuXHR2YXIgaGV4QWxwaGE7XG5cblx0aWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGhleCkpIHtcblx0XHRoZXhBbHBoYSA9IG1hdGNoWzJdO1xuXHRcdG1hdGNoID0gbWF0Y2hbMV07XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHQvLyBodHRwczovL2pzcGVyZi5jb20vc2xpY2UtdnMtc3Vic3RyLXZzLXN1YnN0cmluZy1tZXRob2RzLWxvbmctc3RyaW5nLzE5XG5cdFx0XHR2YXIgaTIgPSBpICogMjtcblx0XHRcdHJnYltpXSA9IHBhcnNlSW50KG1hdGNoLnNsaWNlKGkyLCBpMiArIDIpLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSwgMTYpIC8gMjU1KSAqIDEwMCkgLyAxMDA7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGFiYnIpKSB7XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblx0XHRoZXhBbHBoYSA9IG1hdGNoWzNdO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaV0gKyBtYXRjaFtpXSwgMTYpO1xuXHRcdH1cblxuXHRcdGlmIChoZXhBbHBoYSkge1xuXHRcdFx0cmdiWzNdID0gTWF0aC5yb3VuZCgocGFyc2VJbnQoaGV4QWxwaGEgKyBoZXhBbHBoYSwgMTYpIC8gMjU1KSAqIDEwMCkgLyAxMDA7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHJnYmEpKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2hbaSArIDFdLCAwKTtcblx0XHR9XG5cblx0XHRpZiAobWF0Y2hbNF0pIHtcblx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChwZXIpKSB7XG5cdFx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiW2ldID0gTWF0aC5yb3VuZChwYXJzZUZsb2F0KG1hdGNoW2kgKyAxXSkgKiAyLjU1KTtcblx0XHR9XG5cblx0XHRpZiAobWF0Y2hbNF0pIHtcblx0XHRcdHJnYlszXSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdH1cblx0fSBlbHNlIGlmIChtYXRjaCA9IHN0cmluZy5tYXRjaChrZXl3b3JkKSkge1xuXHRcdGlmIChtYXRjaFsxXSA9PT0gJ3RyYW5zcGFyZW50Jykge1xuXHRcdFx0cmV0dXJuIFswLCAwLCAwLCAwXTtcblx0XHR9XG5cblx0XHRyZ2IgPSBjb2xvck5hbWVzW21hdGNoWzFdXTtcblxuXHRcdGlmICghcmdiKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZ2JbM10gPSAxO1xuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRyZ2JbaV0gPSBjbGFtcChyZ2JbaV0sIDAsIDI1NSk7XG5cdH1cblx0cmdiWzNdID0gY2xhbXAocmdiWzNdLCAwLCAxKTtcblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY3MuZ2V0LmhzbCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBoc2wgPSAvXmhzbGE/XFwoXFxzKihbKy1dPyg/OlxcZCpcXC4pP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHNsKTtcblxuXHRpZiAobWF0Y2gpIHtcblx0XHR2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR2YXIgaCA9IChwYXJzZUZsb2F0KG1hdGNoWzFdKSArIDM2MCkgJSAzNjA7XG5cdFx0dmFyIHMgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzJdKSwgMCwgMTAwKTtcblx0XHR2YXIgbCA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbM10pLCAwLCAxMDApO1xuXHRcdHZhciBhID0gY2xhbXAoaXNOYU4oYWxwaGEpID8gMSA6IGFscGhhLCAwLCAxKTtcblxuXHRcdHJldHVybiBbaCwgcywgbCwgYV07XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNzLmdldC5od2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgaHdiID0gL15od2JcXChcXHMqKFsrLV0/XFxkKltcXC5dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goaHdiKTtcblxuXHRpZiAobWF0Y2gpIHtcblx0XHR2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KG1hdGNoWzRdKTtcblx0XHR2YXIgaCA9ICgocGFyc2VGbG9hdChtYXRjaFsxXSkgJSAzNjApICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgdyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBiID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXHRcdHJldHVybiBbaCwgdywgYiwgYV07XG5cdH1cblxuXHRyZXR1cm4gbnVsbDtcbn07XG5cbmNzLnRvLmhleCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0cmV0dXJuIChcblx0XHQnIycgK1xuXHRcdGhleERvdWJsZShyZ2JhWzBdKSArXG5cdFx0aGV4RG91YmxlKHJnYmFbMV0pICtcblx0XHRoZXhEb3VibGUocmdiYVsyXSkgK1xuXHRcdChyZ2JhWzNdIDwgMVxuXHRcdFx0PyAoaGV4RG91YmxlKE1hdGgucm91bmQocmdiYVszXSAqIDI1NSkpKVxuXHRcdFx0OiAnJylcblx0KTtcbn07XG5cbmNzLnRvLnJnYiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0cmV0dXJuIHJnYmEubGVuZ3RoIDwgNCB8fCByZ2JhWzNdID09PSAxXG5cdFx0PyAncmdiKCcgKyBNYXRoLnJvdW5kKHJnYmFbMF0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsxXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzJdKSArICcpJ1xuXHRcdDogJ3JnYmEoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJywgJyArIHJnYmFbM10gKyAnKSc7XG59O1xuXG5jcy50by5yZ2IucGVyY2VudCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHJnYmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIHIgPSBNYXRoLnJvdW5kKHJnYmFbMF0gLyAyNTUgKiAxMDApO1xuXHR2YXIgZyA9IE1hdGgucm91bmQocmdiYVsxXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBiID0gTWF0aC5yb3VuZChyZ2JhWzJdIC8gMjU1ICogMTAwKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIHIgKyAnJSwgJyArIGcgKyAnJSwgJyArIGIgKyAnJSknXG5cdFx0OiAncmdiYSgnICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLmhzbCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGhzbGEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cdHJldHVybiBoc2xhLmxlbmd0aCA8IDQgfHwgaHNsYVszXSA9PT0gMVxuXHRcdD8gJ2hzbCgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUpJ1xuXHRcdDogJ2hzbGEoJyArIGhzbGFbMF0gKyAnLCAnICsgaHNsYVsxXSArICclLCAnICsgaHNsYVsyXSArICclLCAnICsgaHNsYVszXSArICcpJztcbn07XG5cbi8vIGh3YiBpcyBhIGJpdCBkaWZmZXJlbnQgdGhhbiByZ2IoYSkgJiBoc2woYSkgc2luY2UgdGhlcmUgaXMgbm8gYWxwaGEgc3BlY2lmaWMgc3ludGF4XG4vLyAoaHdiIGhhdmUgYWxwaGEgb3B0aW9uYWwgJiAxIGlzIGRlZmF1bHQgdmFsdWUpXG5jcy50by5od2IgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBod2JhID0gc3dpenpsZShhcmd1bWVudHMpO1xuXG5cdHZhciBhID0gJyc7XG5cdGlmIChod2JhLmxlbmd0aCA+PSA0ICYmIGh3YmFbM10gIT09IDEpIHtcblx0XHRhID0gJywgJyArIGh3YmFbM107XG5cdH1cblxuXHRyZXR1cm4gJ2h3YignICsgaHdiYVswXSArICcsICcgKyBod2JhWzFdICsgJyUsICcgKyBod2JhWzJdICsgJyUnICsgYSArICcpJztcbn07XG5cbmNzLnRvLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiByZXZlcnNlTmFtZXNbcmdiLnNsaWNlKDAsIDMpXTtcbn07XG5cbi8vIGhlbHBlcnNcbmZ1bmN0aW9uIGNsYW1wKG51bSwgbWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG1pbiwgbnVtKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gaGV4RG91YmxlKG51bSkge1xuXHR2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gKHN0ci5sZW5ndGggPCAyKSA/ICcwJyArIHN0ciA6IHN0cjtcbn1cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjb2xvclN0cmluZyA9IHJlcXVpcmUoJ2NvbG9yLXN0cmluZycpO1xudmFyIGNvbnZlcnQgPSByZXF1aXJlKCdjb2xvci1jb252ZXJ0Jyk7XG5cbnZhciBfc2xpY2UgPSBbXS5zbGljZTtcblxudmFyIHNraXBwZWRNb2RlbHMgPSBbXG5cdC8vIHRvIGJlIGhvbmVzdCwgSSBkb24ndCByZWFsbHkgZmVlbCBsaWtlIGtleXdvcmQgYmVsb25ncyBpbiBjb2xvciBjb252ZXJ0LCBidXQgZWguXG5cdCdrZXl3b3JkJyxcblxuXHQvLyBncmF5IGNvbmZsaWN0cyB3aXRoIHNvbWUgbWV0aG9kIG5hbWVzLCBhbmQgaGFzIGl0cyBvd24gbWV0aG9kIGRlZmluZWQuXG5cdCdncmF5JyxcblxuXHQvLyBzaG91bGRuJ3QgcmVhbGx5IGJlIGluIGNvbG9yLWNvbnZlcnQgZWl0aGVyLi4uXG5cdCdoZXgnXG5dO1xuXG52YXIgaGFzaGVkTW9kZWxLZXlzID0ge307XG5PYmplY3Qua2V5cyhjb252ZXJ0KS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuXHRoYXNoZWRNb2RlbEtleXNbX3NsaWNlLmNhbGwoY29udmVydFttb2RlbF0ubGFiZWxzKS5zb3J0KCkuam9pbignJyldID0gbW9kZWw7XG59KTtcblxudmFyIGxpbWl0ZXJzID0ge307XG5cbmZ1bmN0aW9uIENvbG9yKG9iaiwgbW9kZWwpIHtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbG9yKSkge1xuXHRcdHJldHVybiBuZXcgQ29sb3Iob2JqLCBtb2RlbCk7XG5cdH1cblxuXHRpZiAobW9kZWwgJiYgbW9kZWwgaW4gc2tpcHBlZE1vZGVscykge1xuXHRcdG1vZGVsID0gbnVsbDtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiAhKG1vZGVsIGluIGNvbnZlcnQpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG1vZGVsOiAnICsgbW9kZWwpO1xuXHR9XG5cblx0dmFyIGk7XG5cdHZhciBjaGFubmVscztcblxuXHRpZiAodHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aGlzLm1vZGVsID0gJ3JnYic7XG5cdFx0dGhpcy5jb2xvciA9IFswLCAwLCAwXTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgQ29sb3IpIHtcblx0XHR0aGlzLm1vZGVsID0gb2JqLm1vZGVsO1xuXHRcdHRoaXMuY29sb3IgPSBvYmouY29sb3Iuc2xpY2UoKTtcblx0XHR0aGlzLnZhbHBoYSA9IG9iai52YWxwaGE7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHR2YXIgcmVzdWx0ID0gY29sb3JTdHJpbmcuZ2V0KG9iaik7XG5cdFx0aWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBzdHJpbmc6ICcgKyBvYmopO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kZWwgPSByZXN1bHQubW9kZWw7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHRoaXMuY29sb3IgPSByZXN1bHQudmFsdWUuc2xpY2UoMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMudmFscGhhID0gdHlwZW9mIHJlc3VsdC52YWx1ZVtjaGFubmVsc10gPT09ICdudW1iZXInID8gcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA6IDE7XG5cdH0gZWxzZSBpZiAob2JqLmxlbmd0aCkge1xuXHRcdHRoaXMubW9kZWwgPSBtb2RlbCB8fCAncmdiJztcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIG5ld0FyciA9IF9zbGljZS5jYWxsKG9iaiwgMCwgY2hhbm5lbHMpO1xuXHRcdHRoaXMuY29sb3IgPSB6ZXJvQXJyYXkobmV3QXJyLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBvYmpbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnbnVtYmVyJykge1xuXHRcdC8vIHRoaXMgaXMgYWx3YXlzIFJHQiAtIGNhbiBiZSBjb252ZXJ0ZWQgbGF0ZXIgb24uXG5cdFx0b2JqICY9IDB4RkZGRkZGO1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gW1xuXHRcdFx0KG9iaiA+PiAxNikgJiAweEZGLFxuXHRcdFx0KG9iaiA+PiA4KSAmIDB4RkYsXG5cdFx0XHRvYmogJiAweEZGXG5cdFx0XTtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy52YWxwaGEgPSAxO1xuXG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuXHRcdGlmICgnYWxwaGEnIGluIG9iaikge1xuXHRcdFx0a2V5cy5zcGxpY2Uoa2V5cy5pbmRleE9mKCdhbHBoYScpLCAxKTtcblx0XHRcdHRoaXMudmFscGhhID0gdHlwZW9mIG9iai5hbHBoYSA9PT0gJ251bWJlcicgPyBvYmouYWxwaGEgOiAwO1xuXHRcdH1cblxuXHRcdHZhciBoYXNoZWRLZXlzID0ga2V5cy5zb3J0KCkuam9pbignJyk7XG5cdFx0aWYgKCEoaGFzaGVkS2V5cyBpbiBoYXNoZWRNb2RlbEtleXMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHRcdH1cblxuXHRcdHRoaXMubW9kZWwgPSBoYXNoZWRNb2RlbEtleXNbaGFzaGVkS2V5c107XG5cblx0XHR2YXIgbGFiZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5sYWJlbHM7XG5cdFx0dmFyIGNvbG9yID0gW107XG5cdFx0Zm9yIChpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29sb3IucHVzaChvYmpbbGFiZWxzW2ldXSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShjb2xvcik7XG5cdH1cblxuXHQvLyBwZXJmb3JtIGxpbWl0YXRpb25zIChjbGFtcGluZywgZXRjLilcblx0aWYgKGxpbWl0ZXJzW3RoaXMubW9kZWxdKSB7XG5cdFx0Y2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHR2YXIgbGltaXQgPSBsaW1pdGVyc1t0aGlzLm1vZGVsXVtpXTtcblx0XHRcdGlmIChsaW1pdCkge1xuXHRcdFx0XHR0aGlzLmNvbG9yW2ldID0gbGltaXQodGhpcy5jb2xvcltpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0dGhpcy52YWxwaGEgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0aGlzLnZhbHBoYSkpO1xuXG5cdGlmIChPYmplY3QuZnJlZXplKSB7XG5cdFx0T2JqZWN0LmZyZWV6ZSh0aGlzKTtcblx0fVxufVxuXG5Db2xvci5wcm90b3R5cGUgPSB7XG5cdHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RyaW5nKCk7XG5cdH0sXG5cblx0dG9KU09OOiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXNbdGhpcy5tb2RlbF0oKTtcblx0fSxcblxuXHRzdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMubW9kZWwgaW4gY29sb3JTdHJpbmcudG8gPyB0aGlzIDogdGhpcy5yZ2IoKTtcblx0XHRzZWxmID0gc2VsZi5yb3VuZCh0eXBlb2YgcGxhY2VzID09PSAnbnVtYmVyJyA/IHBsYWNlcyA6IDEpO1xuXHRcdHZhciBhcmdzID0gc2VsZi52YWxwaGEgPT09IDEgPyBzZWxmLmNvbG9yIDogc2VsZi5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHRcdHJldHVybiBjb2xvclN0cmluZy50b1tzZWxmLm1vZGVsXShhcmdzKTtcblx0fSxcblxuXHRwZXJjZW50U3RyaW5nOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLnJnYigpLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvLnJnYi5wZXJjZW50KGFyZ3MpO1xuXHR9LFxuXG5cdGFycmF5OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMudmFscGhhID09PSAxID8gdGhpcy5jb2xvci5zbGljZSgpIDogdGhpcy5jb2xvci5jb25jYXQodGhpcy52YWxwaGEpO1xuXHR9LFxuXG5cdG9iamVjdDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbm5lbHM7IGkrKykge1xuXHRcdFx0cmVzdWx0W2xhYmVsc1tpXV0gPSB0aGlzLmNvbG9yW2ldO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmVzdWx0LmFscGhhID0gdGhpcy52YWxwaGE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSxcblxuXHR1bml0QXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZ2JbMF0gLz0gMjU1O1xuXHRcdHJnYlsxXSAvPSAyNTU7XG5cdFx0cmdiWzJdIC89IDI1NTtcblxuXHRcdGlmICh0aGlzLnZhbHBoYSAhPT0gMSkge1xuXHRcdFx0cmdiLnB1c2godGhpcy52YWxwaGEpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0dW5pdE9iamVjdDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLm9iamVjdCgpO1xuXHRcdHJnYi5yIC89IDI1NTtcblx0XHRyZ2IuZyAvPSAyNTU7XG5cdFx0cmdiLmIgLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdHJvdW5kOiBmdW5jdGlvbiAocGxhY2VzKSB7XG5cdFx0cGxhY2VzID0gTWF0aC5tYXgocGxhY2VzIHx8IDAsIDApO1xuXHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5jb2xvci5tYXAocm91bmRUb1BsYWNlKHBsYWNlcykpLmNvbmNhdCh0aGlzLnZhbHBoYSksIHRoaXMubW9kZWwpO1xuXHR9LFxuXG5cdGFscGhhOiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodGhpcy5jb2xvci5jb25jYXQoTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsKSkpLCB0aGlzLm1vZGVsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy52YWxwaGE7XG5cdH0sXG5cblx0Ly8gcmdiXG5cdHJlZDogZ2V0c2V0KCdyZ2InLCAwLCBtYXhmbigyNTUpKSxcblx0Z3JlZW46IGdldHNldCgncmdiJywgMSwgbWF4Zm4oMjU1KSksXG5cdGJsdWU6IGdldHNldCgncmdiJywgMiwgbWF4Zm4oMjU1KSksXG5cblx0aHVlOiBnZXRzZXQoWydoc2wnLCAnaHN2JywgJ2hzbCcsICdod2InLCAnaGNnJ10sIDAsIGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuICgodmFsICUgMzYwKSArIDM2MCkgJSAzNjA7IH0pLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGJyYWNlLXN0eWxlXG5cblx0c2F0dXJhdGlvbmw6IGdldHNldCgnaHNsJywgMSwgbWF4Zm4oMTAwKSksXG5cdGxpZ2h0bmVzczogZ2V0c2V0KCdoc2wnLCAyLCBtYXhmbigxMDApKSxcblxuXHRzYXR1cmF0aW9udjogZ2V0c2V0KCdoc3YnLCAxLCBtYXhmbigxMDApKSxcblx0dmFsdWU6IGdldHNldCgnaHN2JywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y2hyb21hOiBnZXRzZXQoJ2hjZycsIDEsIG1heGZuKDEwMCkpLFxuXHRncmF5OiBnZXRzZXQoJ2hjZycsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHdoaXRlOiBnZXRzZXQoJ2h3YicsIDEsIG1heGZuKDEwMCkpLFxuXHR3YmxhY2s6IGdldHNldCgnaHdiJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0Y3lhbjogZ2V0c2V0KCdjbXlrJywgMCwgbWF4Zm4oMTAwKSksXG5cdG1hZ2VudGE6IGdldHNldCgnY215aycsIDEsIG1heGZuKDEwMCkpLFxuXHR5ZWxsb3c6IGdldHNldCgnY215aycsIDIsIG1heGZuKDEwMCkpLFxuXHRibGFjazogZ2V0c2V0KCdjbXlrJywgMywgbWF4Zm4oMTAwKSksXG5cblx0eDogZ2V0c2V0KCd4eXonLCAwLCBtYXhmbigxMDApKSxcblx0eTogZ2V0c2V0KCd4eXonLCAxLCBtYXhmbigxMDApKSxcblx0ejogZ2V0c2V0KCd4eXonLCAyLCBtYXhmbigxMDApKSxcblxuXHRsOiBnZXRzZXQoJ2xhYicsIDAsIG1heGZuKDEwMCkpLFxuXHRhOiBnZXRzZXQoJ2xhYicsIDEpLFxuXHRiOiBnZXRzZXQoJ2xhYicsIDIpLFxuXG5cdGtleXdvcmQ6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb252ZXJ0W3RoaXMubW9kZWxdLmtleXdvcmQodGhpcy5jb2xvcik7XG5cdH0sXG5cblx0aGV4OiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodmFsKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8uaGV4KHRoaXMucmdiKCkucm91bmQoKS5jb2xvcik7XG5cdH0sXG5cblx0cmdiTnVtYmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0cmV0dXJuICgocmdiWzBdICYgMHhGRikgPDwgMTYpIHwgKChyZ2JbMV0gJiAweEZGKSA8PCA4KSB8IChyZ2JbMl0gJiAweEZGKTtcblx0fSxcblxuXHRsdW1pbm9zaXR5OiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXG5cdFx0dmFyIGx1bSA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcmdiLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgY2hhbiA9IHJnYltpXSAvIDI1NTtcblx0XHRcdGx1bVtpXSA9IChjaGFuIDw9IDAuMDM5MjgpID8gY2hhbiAvIDEyLjkyIDogTWF0aC5wb3coKChjaGFuICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAwLjIxMjYgKiBsdW1bMF0gKyAwLjcxNTIgKiBsdW1bMV0gKyAwLjA3MjIgKiBsdW1bMl07XG5cdH0sXG5cblx0Y29udHJhc3Q6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmXG5cdFx0dmFyIGx1bTEgPSB0aGlzLmx1bWlub3NpdHkoKTtcblx0XHR2YXIgbHVtMiA9IGNvbG9yMi5sdW1pbm9zaXR5KCk7XG5cblx0XHRpZiAobHVtMSA+IGx1bTIpIHtcblx0XHRcdHJldHVybiAobHVtMSArIDAuMDUpIC8gKGx1bTIgKyAwLjA1KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKGx1bTIgKyAwLjA1KSAvIChsdW0xICsgMC4wNSk7XG5cdH0sXG5cblx0bGV2ZWw6IGZ1bmN0aW9uIChjb2xvcjIpIHtcblx0XHR2YXIgY29udHJhc3RSYXRpbyA9IHRoaXMuY29udHJhc3QoY29sb3IyKTtcblx0XHRpZiAoY29udHJhc3RSYXRpbyA+PSA3LjEpIHtcblx0XHRcdHJldHVybiAnQUFBJztcblx0XHR9XG5cblx0XHRyZXR1cm4gKGNvbnRyYXN0UmF0aW8gPj0gNC41KSA/ICdBQScgOiAnJztcblx0fSxcblxuXHRpc0Rhcms6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBZSVEgZXF1YXRpb24gZnJvbSBodHRwOi8vMjR3YXlzLm9yZy8yMDEwL2NhbGN1bGF0aW5nLWNvbG9yLWNvbnRyYXN0XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0dmFyIHlpcSA9IChyZ2JbMF0gKiAyOTkgKyByZ2JbMV0gKiA1ODcgKyByZ2JbMl0gKiAxMTQpIC8gMTAwMDtcblx0XHRyZXR1cm4geWlxIDwgMTI4O1xuXHR9LFxuXG5cdGlzTGlnaHQ6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gIXRoaXMuaXNEYXJrKCk7XG5cdH0sXG5cblx0bmVnYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdHJnYi5jb2xvcltpXSA9IDI1NSAtIHJnYi5jb2xvcltpXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHRsaWdodGVuOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMl0gKz0gaHNsLmNvbG9yWzJdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRkYXJrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSAtPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMV0gKz0gaHNsLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRkZXNhdHVyYXRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHRoc2wuY29sb3JbMV0gLT0gaHNsLmNvbG9yWzFdICogcmF0aW87XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHR3aGl0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBod2IgPSB0aGlzLmh3YigpO1xuXHRcdGh3Yi5jb2xvclsxXSArPSBod2IuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHdiO1xuXHR9LFxuXG5cdGJsYWNrZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBod2IgPSB0aGlzLmh3YigpO1xuXHRcdGh3Yi5jb2xvclsyXSArPSBod2IuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHdiO1xuXHR9LFxuXG5cdGdyYXlzY2FsZTogZnVuY3Rpb24gKCkge1xuXHRcdC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3JheXNjYWxlI0NvbnZlcnRpbmdfY29sb3JfdG9fZ3JheXNjYWxlXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cdFx0dmFyIHZhbCA9IHJnYlswXSAqIDAuMyArIHJnYlsxXSAqIDAuNTkgKyByZ2JbMl0gKiAwLjExO1xuXHRcdHJldHVybiBDb2xvci5yZ2IodmFsLCB2YWwsIHZhbCk7XG5cdH0sXG5cblx0ZmFkZTogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgLSAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdG9wYXF1ZXI6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHJldHVybiB0aGlzLmFscGhhKHRoaXMudmFscGhhICsgKHRoaXMudmFscGhhICogcmF0aW8pKTtcblx0fSxcblxuXHRyb3RhdGU6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0dmFyIGh1ZSA9IGhzbC5jb2xvclswXTtcblx0XHRodWUgPSAoaHVlICsgZGVncmVlcykgJSAzNjA7XG5cdFx0aHVlID0gaHVlIDwgMCA/IDM2MCArIGh1ZSA6IGh1ZTtcblx0XHRoc2wuY29sb3JbMF0gPSBodWU7XG5cdFx0cmV0dXJuIGhzbDtcblx0fSxcblxuXHRtaXg6IGZ1bmN0aW9uIChtaXhpbkNvbG9yLCB3ZWlnaHQpIHtcblx0XHQvLyBwb3J0ZWQgZnJvbSBzYXNzIGltcGxlbWVudGF0aW9uIGluIENcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2Fzcy9saWJzYXNzL2Jsb2IvMGU2YjRhMjg1MDA5MjM1NmFhM2VjZTA3YzZiMjQ5ZjAyMjFjYWNlZC9mdW5jdGlvbnMuY3BwI0wyMDlcblx0XHR2YXIgY29sb3IxID0gbWl4aW5Db2xvci5yZ2IoKTtcblx0XHR2YXIgY29sb3IyID0gdGhpcy5yZ2IoKTtcblx0XHR2YXIgcCA9IHdlaWdodCA9PT0gdW5kZWZpbmVkID8gMC41IDogd2VpZ2h0O1xuXG5cdFx0dmFyIHcgPSAyICogcCAtIDE7XG5cdFx0dmFyIGEgPSBjb2xvcjEuYWxwaGEoKSAtIGNvbG9yMi5hbHBoYSgpO1xuXG5cdFx0dmFyIHcxID0gKCgodyAqIGEgPT09IC0xKSA/IHcgOiAodyArIGEpIC8gKDEgKyB3ICogYSkpICsgMSkgLyAyLjA7XG5cdFx0dmFyIHcyID0gMSAtIHcxO1xuXG5cdFx0cmV0dXJuIENvbG9yLnJnYihcblx0XHRcdFx0dzEgKiBjb2xvcjEucmVkKCkgKyB3MiAqIGNvbG9yMi5yZWQoKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuZ3JlZW4oKSArIHcyICogY29sb3IyLmdyZWVuKCksXG5cdFx0XHRcdHcxICogY29sb3IxLmJsdWUoKSArIHcyICogY29sb3IyLmJsdWUoKSxcblx0XHRcdFx0Y29sb3IxLmFscGhhKCkgKiBwICsgY29sb3IyLmFscGhhKCkgKiAoMSAtIHApKTtcblx0fVxufTtcblxuLy8gbW9kZWwgY29udmVyc2lvbiBtZXRob2RzIGFuZCBzdGF0aWMgY29uc3RydWN0b3JzXG5PYmplY3Qua2V5cyhjb252ZXJ0KS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuXHRpZiAoc2tpcHBlZE1vZGVscy5pbmRleE9mKG1vZGVsKSAhPT0gLTEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2YXIgY2hhbm5lbHMgPSBjb252ZXJ0W21vZGVsXS5jaGFubmVscztcblxuXHQvLyBjb252ZXJzaW9uIG1ldGhvZHNcblx0Q29sb3IucHJvdG90eXBlW21vZGVsXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodGhpcy5tb2RlbCA9PT0gbW9kZWwpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IodGhpcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBuZXcgQ29sb3IoYXJndW1lbnRzLCBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIG5ld0FscGhhID0gdHlwZW9mIGFyZ3VtZW50c1tjaGFubmVsc10gPT09ICdudW1iZXInID8gY2hhbm5lbHMgOiB0aGlzLnZhbHBoYTtcblx0XHRyZXR1cm4gbmV3IENvbG9yKGFzc2VydEFycmF5KGNvbnZlcnRbdGhpcy5tb2RlbF1bbW9kZWxdLnJhdyh0aGlzLmNvbG9yKSkuY29uY2F0KG5ld0FscGhhKSwgbW9kZWwpO1xuXHR9O1xuXG5cdC8vICdzdGF0aWMnIGNvbnN0cnVjdGlvbiBtZXRob2RzXG5cdENvbG9yW21vZGVsXSA9IGZ1bmN0aW9uIChjb2xvcikge1xuXHRcdGlmICh0eXBlb2YgY29sb3IgPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb2xvciA9IHplcm9BcnJheShfc2xpY2UuY2FsbChhcmd1bWVudHMpLCBjaGFubmVscyk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQ29sb3IoY29sb3IsIG1vZGVsKTtcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiByb3VuZFRvKG51bSwgcGxhY2VzKSB7XG5cdHJldHVybiBOdW1iZXIobnVtLnRvRml4ZWQocGxhY2VzKSk7XG59XG5cbmZ1bmN0aW9uIHJvdW5kVG9QbGFjZShwbGFjZXMpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChudW0pIHtcblx0XHRyZXR1cm4gcm91bmRUbyhudW0sIHBsYWNlcyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGdldHNldChtb2RlbCwgY2hhbm5lbCwgbW9kaWZpZXIpIHtcblx0bW9kZWwgPSBBcnJheS5pc0FycmF5KG1vZGVsKSA/IG1vZGVsIDogW21vZGVsXTtcblxuXHRtb2RlbC5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG5cdFx0KGxpbWl0ZXJzW21dIHx8IChsaW1pdGVyc1ttXSA9IFtdKSlbY2hhbm5lbF0gPSBtb2RpZmllcjtcblx0fSk7XG5cblx0bW9kZWwgPSBtb2RlbFswXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuXHRcdHZhciByZXN1bHQ7XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0aWYgKG1vZGlmaWVyKSB7XG5cdFx0XHRcdHZhbCA9IG1vZGlmaWVyKHZhbCk7XG5cdFx0XHR9XG5cblx0XHRcdHJlc3VsdCA9IHRoaXNbbW9kZWxdKCk7XG5cdFx0XHRyZXN1bHQuY29sb3JbY2hhbm5lbF0gPSB2YWw7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblxuXHRcdHJlc3VsdCA9IHRoaXNbbW9kZWxdKCkuY29sb3JbY2hhbm5lbF07XG5cdFx0aWYgKG1vZGlmaWVyKSB7XG5cdFx0XHRyZXN1bHQgPSBtb2RpZmllcihyZXN1bHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59XG5cbmZ1bmN0aW9uIG1heGZuKG1heCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKHYpIHtcblx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4obWF4LCB2KSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFzc2VydEFycmF5KHZhbCkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gdmFsIDogW3ZhbF07XG59XG5cbmZ1bmN0aW9uIHplcm9BcnJheShhcnIsIGxlbmd0aCkge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHR5cGVvZiBhcnJbaV0gIT09ICdudW1iZXInKSB7XG5cdFx0XHRhcnJbaV0gPSAwO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3I7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJyYXlpc2gob2JqKSB7XG5cdGlmICghb2JqIHx8IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkob2JqKSB8fFxuXHRcdChvYmoubGVuZ3RoID49IDAgJiYgKG9iai5zcGxpY2UgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuXHRcdFx0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCAob2JqLmxlbmd0aCAtIDEpKSAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPT0gJ1N0cmluZycpKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheWlzaCA9IHJlcXVpcmUoJ2lzLWFycmF5aXNoJyk7XG5cbnZhciBjb25jYXQgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG52YXIgc3dpenpsZSA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3dpenpsZShhcmdzKSB7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgYXJnID0gYXJnc1tpXTtcblxuXHRcdGlmIChpc0FycmF5aXNoKGFyZykpIHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tL2phdmFzY3JpcHQtYXJyYXktY29uY2F0LXZzLXB1c2gvOThcblx0XHRcdHJlc3VsdHMgPSBjb25jYXQuY2FsbChyZXN1bHRzLCBzbGljZS5jYWxsKGFyZykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHRzLnB1c2goYXJnKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbnN3aXp6bGUud3JhcCA9IGZ1bmN0aW9uIChmbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmbihzd2l6emxlKGFyZ3VtZW50cykpO1xuXHR9O1xufTtcbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBNYXJrZXJzTGF5ZXIsIHtcbiAgTWFya2Vyc0xheWVyT3B0aW9ucyxcbiAgTWFya2Vyc0hlYXRMYXllck9wdGlvbnMsXG59IGZyb20gJy4uL21hcmtlci9NYXJrZXJzTGF5ZXInXG5cbmludGVyZmFjZSBEeW5hbWljSGVhdExheWVyT3B0aW9ucyBleHRlbmRzIE1hcmtlcnNIZWF0TGF5ZXJPcHRpb25zIHtcbiAgLyoqIOaYr+WQpuW+queOr+aSreaUviAqL1xuICBsb29wOiBib29sZWFuXG4gIC8qKiDmmK/lkKboh6rliqjmkq3mlL4gKi9cbiAgYXV0bzogYm9vbGVhblxuICAvKiog6Ze06ZqU5pe26Ze0ICovXG4gIGludGVydmFsOiBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY0hlYXRMYXllciB7XG4gIC8qKiDlvZPliY3mkq3mlL7liLDnrKzlh6DmraUgKi9cbiAgcHJpdmF0ZSBjdXJyZW50U3RlcDogbnVtYmVyXG5cbiAgcHJpdmF0ZSBtYXA6IEwuTWFwXG4gIHByaXZhdGUgZHluYW1pY0RhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVtdXG4gIHByaXZhdGUgb3B0aW9uczogRHluYW1pY0hlYXRMYXllck9wdGlvbnNcbiAgcHJpdmF0ZSBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgcHJpdmF0ZSBsYXllcjogTWFya2Vyc0xheWVyXG4gIHByaXZhdGUgaXNQYXVzZTogYm9vbGVhblxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGR5bmFtaWNEYXRhTGlzdDogRGF0YUxpc3RJdGVtW11bXSxcbiAgICBvcHRpb25zOiBEeW5hbWljSGVhdExheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdCA9IGR5bmFtaWNEYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gMFxuICAgIHRoaXMuaXNQYXVzZSA9IHRydWVcbiAgfVxuICBwdWJsaWMgcmVzdGFydCgpIHtcbiAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZVxuICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwXG4gICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKVxuICAgIHRoaXMuc3RhcnQoKVxuICB9XG4gIHB1YmxpYyBzdGFydCgpIHtcbiAgICB0aGlzLmlzUGF1c2UgPSBmYWxzZVxuICAgIGlmICghdGhpcy5vcHRpb25zLmF1dG8pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzUGF1c2UpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvKiog5pKt5pS+5a6M5q+VICovXG4gICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA+PSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvb3ApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc3RhcnQoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrXG4gICAgICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcClcbiAgICAgICAgdGhpcy5zdGFydCgpXG4gICAgICB9XG4gICAgfSwgdGhpcy5vcHRpb25zLmludGVydmFsKVxuICB9XG4gIHB1YmxpYyBwYXVzZSgpIHtcbiAgICB0aGlzLmlzUGF1c2UgPSB0cnVlXG4gIH1cbiAgcHVibGljIHByZXYoKSB7XG4gICAgdGhpcy5jdXJyZW50U3RlcC0tXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9XG4gICAgICAodGhpcy5jdXJyZW50U3RlcCArIHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkgJVxuICAgICAgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoXG4gICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKVxuICB9XG4gIHB1YmxpYyBuZXh0KCkge1xuICAgIHRoaXMuY3VycmVudFN0ZXArK1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSB0aGlzLmN1cnJlbnRTdGVwICUgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoXG4gICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKVxuICB9XG4gIHB1YmxpYyBnb3RvU3RlcChzdGVwOiBudW1iZXIpIHtcbiAgICBpZiAoc3RlcCA8IDAgfHwgc3RlcCA+PSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgZ290b1N0ZXAoJHtzdGVwfSk6IHN0ZXAgaXMgb3V0IG9mIGluZGV4IGApXG4gICAgfVxuICAgIHRoaXMubGF5ZXIuc2V0RGF0YSh0aGlzLmR5bmFtaWNEYXRhTGlzdFtzdGVwXSlcbiAgICB0aGlzLmxheWVyLmRyYXcoKVxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBEeW5hbWljSGVhdExheWVyT3B0aW9ucykge1xuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRMYXllcigpXG4gICAgdGhpcy5sYXllci5kcmF3KClcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHByaXZhdGUgaW5pdE9wdGlvbnMob3B0aW9ucz86IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIGF1dG86IGZhbHNlLFxuICAgICAgICBpbnRlcnZhbDogMTAwMCxcbiAgICAgIH0sXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICBvcHRpb25zXG4gICAgKVxuICB9XG4gIHByaXZhdGUgaW5pdExheWVyKCkge1xuICAgIGNvbnN0IG1hcmtlcnNMYXllck9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMgPSB7XG4gICAgICByZW5kZXJUeXBlOiAnaGVhdCcsXG4gICAgICBoZWF0T3B0aW9uczogdGhpcy5vcHRpb25zLFxuICAgIH1cbiAgICB0aGlzLmxheWVyID0gbmV3IE1hcmtlcnNMYXllcihcbiAgICAgIHRoaXMubWFwLFxuICAgICAgdGhpcy5keW5hbWljRGF0YUxpc3RbMF0sXG4gICAgICBtYXJrZXJzTGF5ZXJPcHRpb25zLFxuICAgICAgdGhpcy5jaGFubmVsRnVuY1xuICAgIClcbiAgICByZXR1cm4gdGhpcy5sYXllclxuICB9XG59XG4iLCJpbXBvcnQgTWFya2VyIGZyb20gJy4vbWFya2VyL01hcmtlcidcbmltcG9ydCBNYXJrZXJzTGF5ZXIgZnJvbSAnLi9tYXJrZXIvTWFya2Vyc0xheWVyJ1xuaW1wb3J0IE1hcmtlcnNCdWZmZXJMYXllciBmcm9tICcuL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXInXG5pbXBvcnQgUG9seWxpbmUgZnJvbSAnLi9wb2x5bGluZS9Qb2x5bGluZSdcbmltcG9ydCBQb2x5bGluZXNMYXllciBmcm9tICcuL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyJ1xuaW1wb3J0IFBvbHlsaW5lc0J1ZmZlckxheWVyIGZyb20gJy4vcG9seWxpbmUvUG9seWxpbmVzQnVmZmVyTGF5ZXInXG5pbXBvcnQgUG9seWdvbiBmcm9tICcuL3BvbHlnb24vUG9seWdvbidcbmltcG9ydCBQb2x5Z29uc0xheWVyIGZyb20gJy4vcG9seWdvbi9Qb2x5Z29uc0xheWVyJ1xuaW1wb3J0IEdyaWRzTGF5ZXIgZnJvbSAnLi9wb2x5Z29uL0dyaWRzTGF5ZXInXG5pbXBvcnQgRHluYW1pY0hlYXRMYXllciBmcm9tICcuL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBNYXJrZXIsXG4gIE1hcmtlcnNMYXllcixcbiAgTWFya2Vyc0J1ZmZlckxheWVyLFxuICBQb2x5bGluZSxcbiAgUG9seWxpbmVzTGF5ZXIsXG4gIFBvbHlsaW5lc0J1ZmZlckxheWVyLFxuICBQb2x5Z29uLFxuICBQb2x5Z29uc0xheWVyLFxuICBHcmlkc0xheWVyLFxuICBEeW5hbWljSGVhdExheWVyLFxufVxuZXhwb3J0IHtcbiAgTWFya2VyLFxuICBNYXJrZXJzTGF5ZXIsXG4gIE1hcmtlcnNCdWZmZXJMYXllcixcbiAgUG9seWxpbmUsXG4gIFBvbHlsaW5lc0xheWVyLFxuICBQb2x5bGluZXNCdWZmZXJMYXllcixcbiAgUG9seWdvbixcbiAgUG9seWdvbnNMYXllcixcbiAgR3JpZHNMYXllcixcbiAgRHluYW1pY0hlYXRMYXllcixcbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBMLk1hcmtlciB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX19kYXRhOiBEYXRhTGlzdEl0ZW1cbiAgY29uc3RydWN0b3IobGF0bG5nOiBMLkxhdExuZ0V4cHJlc3Npb24sIG9wdGlvbnM/OiBMLk1hcmtlck9wdGlvbnMpIHtcbiAgICBzdXBlcihsYXRsbmcsIG9wdGlvbnMpXG4gIH1cbiAgcHVibGljIHNldERhdGEoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgdGhpcy5fX2RhdGEgPSBkYXRhXG4gIH1cbiAgcHVibGljIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19kYXRhXG4gIH1cbn1cbiIsImltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBNYXJrZXJzTGF5ZXIsIHsgTWFya2Vyc0xheWVyT3B0aW9ucyB9IGZyb20gJy4vTWFya2Vyc0xheWVyJ1xuaW50ZXJmYWNlIE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMgZXh0ZW5kcyBNYXJrZXJzTGF5ZXJPcHRpb25zIHtcbiAgYnVmZmVyVG9vbHRpcEF0dHI6IHN0cmluZ1xuICBidWZmZXJPcHRpb25zOiBMLkNpcmNsZU1hcmtlck9wdGlvbnNcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlcnNCdWZmZXJMYXllciBleHRlbmRzIE1hcmtlcnNMYXllciB7XG4gIHB1YmxpYyBvcHRpb25zOiBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zXG4gIHByaXZhdGUgYnVmZmVyTGF5ZXI6IEwuTGF5ZXJHcm91cFxuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBNYXJrZXJzQnVmZmVyTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYylcbiAgICB0aGlzLnR5cGUgPSAnbWFya2VyQnVmZmVyJ1xuICAgIGNvbnN0IGRlZmF1bHRCdWZmZXJPcHRpb25zOiBMLkNpcmNsZU1hcmtlck9wdGlvbnMgPSB7XG4gICAgICByYWRpdXM6IDEwMDAsXG4gICAgICBzdHJva2U6IHRydWUsXG4gICAgICB3ZWlnaHQ6IDEsXG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICB7IGJ1ZmZlck9wdGlvbnM6IGRlZmF1bHRCdWZmZXJPcHRpb25zIH0sXG4gICAgICBvcHRpb25zXG4gICAgKVxuICB9XG5cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5jb2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3JcbiAgICB0aGlzLmluaXRNYXJrZXJzKClcbiAgICByZXR1cm4gdGhpcy5yZWRyYXcoKVxuICB9XG5cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5idWZmZXJMYXllcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5idWZmZXJMYXllcilcbiAgICB9XG4gICAgdGhpcy5tYXJrZXJMYXllciA9IHRoaXMuY29uZmlnTWFya2VyTGF5ZXIoKVxuICAgIHRoaXMuYnVmZmVyTGF5ZXIgPSB0aGlzLmNvbmZpZ0J1ZmZlckxheWVyKClcblxuICAgIHRoaXMubGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB0aGlzLmxheWVyLmFkZExheWVyKHRoaXMuYnVmZmVyTGF5ZXIpXG5cbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcmtlcnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICByZXR1cm4gcHJldi5leHRlbmQoXG4gICAgICAgIGN1cnIuZ2V0TGF0TG5nKCkudG9Cb3VuZHModGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMucmFkaXVzKVxuICAgICAgKVxuICAgIH0sIHRoaXMubWFya2Vyc1swXS5nZXRMYXRMbmcoKS50b0JvdW5kcyh0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5yYWRpdXMpKVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWdCdWZmZXJMYXllcigpIHtcbiAgICBjb25zdCBncm91cExheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBjaXJjbGVMYXllciA9IEwuY2lyY2xlKFxuICAgICAgICBtYXJrZXIuZ2V0TGF0TG5nKCksXG4gICAgICAgIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zXG4gICAgICApXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJ1ZmZlclRvb2x0aXBBdHRyKSB7XG4gICAgICAgIGNpcmNsZUxheWVyLmJpbmRUb29sdGlwKFxuICAgICAgICAgICcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMuYnVmZmVyVG9vbHRpcEF0dHJdXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgICAgICcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgICAgICcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBncm91cExheWVyLmFkZExheWVyKGNpcmNsZUxheWVyKVxuICAgIH0pXG4gICAgcmV0dXJuIGdyb3VwTGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgbGlnaHRlbiB9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IE1hcmtlciBmcm9tICcuL01hcmtlcidcblxuLyoqIOa4suafk+agt+W8jyDmlaPngrl854Ot5Yqb5Zu+ICovXG50eXBlIE1hcmtlcnNMYXllclJlbmRlclR5cGUgPSAncG9pbnQnIHwgJ2hlYXQnIHwgJ2NsdXN0ZXInXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBNYXJrZXJzTGF5ZXJSZW5kZXJQb2ludENvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcblxuLyoqIOaVo+eCueWbvuagh+exu+WeiyBpY29uZm9udHxzdmd8aW1hZ2UgKi9cbnR5cGUgTWFya2Vyc0xheWVySWNvblR5cGUgPSAnZm9udF9jbGFzcycgfCAndW5pY29kZScgfCAnc3ltYm9sJyB8ICdpbWFnZSdcblxuaW50ZXJmYWNlIEljb25SZW5kZXJGdW5jT3B0aW9uIHtcbiAgaWNvblNpemU6IFtudW1iZXIsIG51bWJlcl1cbiAgaWNvbkNvbG9yOiBzdHJpbmdcbn1cbnR5cGUgSWNvblJlbmRlckZ1bmMgPSAoXG4gIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgcGFyYW1zOiBJY29uUmVuZGVyRnVuY09wdGlvblxuKSA9PiBzdHJpbmdcblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJzTGF5ZXJPcHRpb25zIHtcbiAgcmVuZGVyVHlwZTogTWFya2Vyc0xheWVyUmVuZGVyVHlwZVxuICByZW5kZXJQb2ludENvbG9yVHlwZT86IE1hcmtlcnNMYXllclJlbmRlclBvaW50Q29sb3JUeXBlXG4gIGljb25UeXBlPzogTWFya2Vyc0xheWVySWNvblR5cGVcblxuICBpY29uSW1hZ2VVcmw/OiBzdHJpbmdcbiAgaWNvblNpemU/OiBbbnVtYmVyLCBudW1iZXJdXG4gIGljb25DbGFzcz86IHN0cmluZ1xuICBpY29uVW5pY29kZT86IHN0cmluZ1xuICBpY29uU3ltYm9sPzogc3RyaW5nXG4gIGljb25Db2xvcj86IHN0cmluZ1xuICBpY29uQW5jaG9yPzogW251bWJlciwgbnVtYmVyXVxuICBpY29uUmVuZGVyZXI/OiBJY29uUmVuZGVyRnVuY1xuXG4gIC8vIOaYr+WQpuiBmuWQiO+8jOS8mOWFiOe6p+mrmOS6jiByZW5kZXJUeXBlID09IHBvaW50XG4gIGlzQ2x1c3Rlcj86IGJvb2xlYW5cblxuICAvKiogcG9wdXAg5bGV56S65a2X5q61ICovXG4gIHBvcHVwQXR0cj86IHN0cmluZyB8IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IGFueSB9XG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cblxuICBoZWF0T3B0aW9ucz86IE1hcmtlcnNIZWF0TGF5ZXJPcHRpb25zXG4gIGNsdXN0ZXJPcHRpb25zPzogTC5NYXJrZXJzQ2x1c3Rlck9wdGlvbnNcbn1cblxuLyoqIOi9rOWMluS4uueDreWKm+WbvueahCBvcHRpb25zICovXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlcnNIZWF0TGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5IZWF0TGF5ZXJPcHRpb25zIHtcbiAgZGltZW5zaW9uQXR0cj86IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrZXJzTGF5ZXIge1xuICBwdWJsaWMgbWFwOiBMLk1hcFxuICBwdWJsaWMgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHB1YmxpYyBvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zXG4gIHB1YmxpYyBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcblxuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIG1hcmtlcnM6IE1hcmtlcltdXG5cbiAgcHJvdGVjdGVkIGZvY3VzZWRNYXJrZXI6IE1hcmtlclxuICBwcm90ZWN0ZWQgaG92ZXJlZE1hcmtlcjogTWFya2VyXG4gIC8qKiDpnIDopoHlsZXnpLrnmoTmlL7lpKfnmoTlm77moIcgKi9cbiAgcHJvdGVjdGVkIGZvY3VzZWREaXNwbGF5TWFya2VyOiBNYXJrZXJcbiAgcHJvdGVjdGVkIG1hcmtlckxheWVyOiBMLkNhbnZhc0ljb25MYXllclxuXG4gIHByb3RlY3RlZCB2aXNpYmxlOiBib29sZWFuXG4gIHByb3RlY3RlZCBsYXllcjpcbiAgICB8IEwuQ2FudmFzSWNvbkxheWVyXG4gICAgfCBMLkhlYXRMYXllclxuICAgIHwgTC5NYXJrZXJzQ2x1c3RlclxuICAgIHwgTC5MYXllckdyb3VwXG4gIHByb3RlY3RlZCB6b29tU3RhcnRDYjogKCkgPT4gdm9pZFxuICBwcm90ZWN0ZWQgem9vbUVuZENiOiAoKSA9PiB2b2lkXG4gIHByaXZhdGUgaGVhdExheWVyOiBMLkhlYXRMYXllclxuICBwcml2YXRlIGNsdXN0ZXJMYXllcjogTC5NYXJrZXJzQ2x1c3RlclxuXG4gIHByaXZhdGUgc2VnbWVudGVkTWluOiBudW1iZXJcbiAgcHJpdmF0ZSBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9uc1xuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgcmVuZGVyVHlwZTogJ3BvaW50JyxcbiAgICAgIHJlbmRlclBvaW50Q29sb3JUeXBlOiAnc2luZ2xlJyxcbiAgICAgIGljb25UeXBlOiAndW5pY29kZScsXG4gICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4gICAgICBpY29uQ2xhc3M6ICdpY29uZm9udCcsXG4gICAgICBpY29uQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIGljb25BbmNob3I6IFsxMCwgMjBdLFxuICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICAgIHNlZ21lbnRlZENvbG9yczogWycjMzM4OEZGJ10sXG4gICAgICBpc0NsdXN0ZXI6IGZhbHNlLFxuICAgICAgaGVhdE9wdGlvbnM6IHtcbiAgICAgICAgbWF4OiAxLFxuICAgICAgICBtaW5PcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ21hcmtlcidcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmNcblxuICAgIHRoaXMudmlzaWJsZSA9IHRydWVcbiAgICB0aGlzLmxheWVyID0gbnVsbFxuICAgIHRoaXMuZm9jdXNlZE1hcmtlciA9IG51bGxcbiAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlciA9IG51bGxcbiAgICB0aGlzLm1hcmtlcnMgPSBbXVxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBudWxsXG4gICAgdGhpcy5oZWF0TGF5ZXIgPSBudWxsXG4gICAgdGhpcy5jbHVzdGVyTGF5ZXIgPSBudWxsXG5cbiAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IEluZmluaXR5XG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gMVxuXG4gICAgdGhpcy56b29tU3RhcnRDYiA9IHRoaXMuX3pvb21TdGFydENiLmJpbmQodGhpcylcbiAgICB0aGlzLnpvb21FbmRDYiA9IHRoaXMuX3pvb21FbmRDYi5iaW5kKHRoaXMpXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IE1hcmtlcnNMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKVxuICAgIHRoaXMuaW5pdE1hcmtlcnMoKVxuICAgIHRoaXMuaW5pdEV2ZW50cygpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG5cbiAgICAvLyDkvJjlhYjliKTmlq0gaXNDbHVzdGVyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc0NsdXN0ZXIgJiYgdGhpcy5vcHRpb25zLnJlbmRlclR5cGUgPT09ICdwb2ludCcpIHtcbiAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0NsdXN0ZXJMYXllcigpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUpIHtcbiAgICAgICAgY2FzZSAncG9pbnQnOiB7XG4gICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnTWFya2VyTGF5ZXIoKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnY2x1c3Rlcic6IHtcbiAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY2FzZSAnaGVhdCc6IHtcbiAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdIZWF0TGF5ZXIoKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclR5cGV9XCJgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW1bXSkge1xuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhXG4gIH1cbiAgcHVibGljIHNldE9wdGlvbnMob3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucywgcmVkcmF3ID0gZmFsc2UpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICBpZiAocmVkcmF3KSB7XG4gICAgICB0aGlzLnJlZHJhdygpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpXG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1hcmtlcnMubWFwKFxuICAgICAgKG1hcmtlcikgPT5cbiAgICAgICAgW21hcmtlci5nZXRMYXRMbmcoKS5sYXQsIG1hcmtlci5nZXRMYXRMbmcoKS5sbmddIGFzIFtudW1iZXIsIG51bWJlcl1cbiAgICApXG4gIH1cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyKVxuICAgIH1cbiAgICB0aGlzLm1hcC5vZmYoJ3pvb21zdGFydCcsIHRoaXMuem9vbVN0YXJ0Q2IpXG4gICAgdGhpcy5tYXAub2ZmKCd6b29tZW5kJywgdGhpcy56b29tRW5kQ2IpXG4gIH1cbiAgcHVibGljIHRvZ2dsZVZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGVcbiAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmUoKVxuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIGNoYW5nZUljb24oaWNvblVuaWNvZGU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9ucy5pY29uVW5pY29kZSA9IGljb25Vbmljb2RlXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgaWYgKG1hcmtlci5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciwgdHJ1ZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgX3pvb21TdGFydENiKCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlcicpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50JyAmJiAhdGhpcy5vcHRpb25zLmlzQ2x1c3Rlcikge1xuICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX3pvb21FbmRDYigpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUgPT09ICdwb2ludCcgJiYgIXRoaXMub3B0aW9ucy5pc0NsdXN0ZXIpIHtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9XG4gIH1cbiAgLyoqIOa4suafk+S4uuaVo+eCueWbviAqL1xuICBwcm90ZWN0ZWQgY29uZmlnTWFya2VyTGF5ZXIoKSB7XG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFya2VyTGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgY29uc3QgY2FudmFzSWNvbkxheWVyID0gTC5jYW52YXNJY29uTGF5ZXIoe30pLmFkZFRvKHRoaXMubWFwKVxuICAgIC8vIOa3u+WKoOeCueWHu+S6i+S7tlxuICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkNsaWNrTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyIGFzIE1hcmtlcilcbiAgICB9KVxuICAgIC8vIOa3u+WKoCBob3ZlciDkuovku7ZcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25Ib3Zlckxpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgIC8vIOS5i+WJjeaciSBob3ZlciDnmoTlhbPpl60gdG9vbHRpcFxuICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlcikge1xuICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIuY2xvc2VUb29sdGlwKClcbiAgICAgIH1cbiAgICAgIHRoaXMuaG92ZXJlZE1hcmtlciA9IG1hcmtlciBhcyBNYXJrZXJcblxuICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlci5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgLy8g5aaC5p6c5bey57uP6K6+572uIHRvb2x0aXAg55u05o6l5bGV56S6IHRvb2x0aXBcbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLm9wZW5Ub29sdGlwKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIOWQpuWImee7keWumiB0b29sdGlwIOW5tuWxleekulxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmJpbmRUb29sdGlwKFxuICAgICAgICAgICAgJycgKyB0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIGNhbnZhc0ljb25MYXllci5hZGRNYXJrZXJzKHRoaXMubWFya2VycylcblxuICAgIC8vIOino+WGs+WIneasoea4suafk+S4jeWHuuWbvuagh+mXrumimFxuICAgIHRoaXMubWFwLnBhblRvKHRoaXMubWFwLmdldENlbnRlcigpKVxuXG4gICAgdGhpcy5tYXJrZXJMYXllciA9IGNhbnZhc0ljb25MYXllclxuICAgIHJldHVybiB0aGlzLm1hcmtlckxheWVyXG4gIH1cbiAgcHJvdGVjdGVkIGdldFRvb2xUaXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXVxuICB9XG4gIHByb3RlY3RlZCBpbml0T3B0aW9ucyhvcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgdGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICB9XG4gIHByb3RlY3RlZCBpbml0TWFya2VycygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5tYXJrZXJzID0gW11cbiAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdXG5cbiAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBNYXJrZXIoXG4gICAgICAgIFtcbiAgICAgICAgICAobGF5ZXIgYXMgTC5NYXJrZXIpLmdldExhdExuZygpLmxhdCxcbiAgICAgICAgICAobGF5ZXIgYXMgTC5NYXJrZXIpLmdldExhdExuZygpLmxuZyxcbiAgICAgICAgXSxcbiAgICAgICAge1xuICAgICAgICAgIGljb246IHRoaXMuZ2V0TWFya2VySWNvbihkYXRhKSxcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICBtYXJrZXIuc2V0RGF0YShkYXRhKVxuICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRFdmVudHMoKSB7XG4gICAgdGhpcy5tYXAub24oJ3pvb21zdGFydCcsIHRoaXMuem9vbVN0YXJ0Q2IpXG4gICAgdGhpcy5tYXAub24oJ3pvb21lbmQnLCB0aGlzLnpvb21FbmRDYilcbiAgICB0aGlzLm1hcC5vbignY29udGV4dG1lbnUnLCBjb25zb2xlLmxvZylcbiAgfVxuICAvLyDlpITnkIYgbWFya2VyIOeCueWHu+S6i+S7tlxuICBwcml2YXRlIG1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXI6IE1hcmtlciwgZml0Qm91bmRzPzogYm9vbGVhbikge1xuICAgIHRoaXMuZm9jdXNlZE1hcmtlciA9IG1hcmtlclxuICAgIC8vIOWIoOmZpOWJjeS4gOS4quaUvuWkp+Wbvuagh1xuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyKSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZUZyb20odGhpcy5tYXApXG4gICAgfVxuICAgIC8vIOeUn+aIkOW9k+WJjeaUvuWkp+Wbvuagh1xuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIgPSBuZXcgTWFya2VyKG1hcmtlci5nZXRMYXRMbmcoKSwge1xuICAgICAgaWNvbjogdGhpcy5nZXRMYXJnZXJNYXJrZXJJY29uKG1hcmtlci5nZXREYXRhKCkpLFxuICAgIH0pXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5hZGRUbyh0aGlzLm1hcClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXJcbiAgICAgIC5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobWFya2VyLmdldERhdGEoKSkpXG4gICAgICAub3BlblBvcHVwKClcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmUoKVxuICAgIH0pXG4gICAgbWFya2VyLmNsb3NlVG9vbHRpcCgpXG5cbiAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWRNYXJrZXIuZ2V0TGF0TG5nKCkpXG4gICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKG1hcmtlci5nZXRMYXRMbmcoKS50b0JvdW5kcygxMCkpXG4gICAgfVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLW1hcmtlcicsIG1hcmtlcilcbiAgfVxuICBwcml2YXRlIGNvbmZpZ0NsdXN0ZXJMYXllcigpIHtcbiAgICAvLyDlsZXnpLrogZrlkIjlm77lsYJcbiAgICBpZiAodGhpcy5jbHVzdGVyTGF5ZXIpIHtcbiAgICAgIHRoaXMuY2x1c3RlckxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMuY2x1c3RlckxheWVyID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoe1xuICAgICAgaWNvbkNyZWF0ZUZ1bmN0aW9uOiB0aGlzLmljb25DcmVhdGVGdW5jdGlvbi5iaW5kKHRoaXMpLFxuICAgIH0pXG4gICAgdGhpcy5jbHVzdGVyTGF5ZXIuYWRkTGF5ZXJzKFxuICAgICAgdGhpcy5tYXJrZXJzLm1hcCgobSkgPT4ge1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKG0uZ2V0TGF0TG5nKCksIHtcbiAgICAgICAgICBpY29uOiB0aGlzLmdldE1hcmtlckljb24obS5nZXREYXRhKCkpLFxuICAgICAgICB9KVxuICAgICAgICBtYXJrZXIuc2V0RGF0YShtLmdldERhdGEoKSlcbiAgICAgICAgbWFya2VyLmJpbmRUb29sdGlwKCcnICsgbWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdKVxuICAgICAgICBtYXJrZXIuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgICBtYXJrZXIub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcilcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG1hcmtlclxuICAgICAgfSlcbiAgICApXG4gICAgcmV0dXJuIHRoaXMuY2x1c3RlckxheWVyXG4gIH1cblxuICAvKiog5riy5p+T5Li654Ot5Yqb5Zu+ICovXG4gIHByaXZhdGUgY29uZmlnSGVhdExheWVyKCkge1xuICAgIGlmICh0aGlzLmhlYXRMYXllcikge1xuICAgICAgdGhpcy5oZWF0TGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgY29uc3QgbGF0TG5nID0gbWFya2VyLmdldExhdExuZygpXG4gICAgICBjb25zdCBkaW1lbnNpb25BdHRyID1cbiAgICAgICAgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zICYmIHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucy5kaW1lbnNpb25BdHRyXG4gICAgICBsZXQgYWx0ID1cbiAgICAgICAgKGRpbWVuc2lvbkF0dHIgJiYgbWFya2VyLmdldERhdGEoKVtkaW1lbnNpb25BdHRyXSkgfHxcbiAgICAgICAgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLm1heFxuICAgICAgaWYgKHR5cGVvZiBhbHQgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGFsdCA9IHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucy5tYXhcbiAgICAgIH1cbiAgICAgIG1hcmtlci5zZXRMYXRMbmcoTC5sYXRMbmcobGF0TG5nLmxhdCwgbGF0TG5nLmxuZywgYWx0KSlcbiAgICB9KVxuICAgIHRoaXMuaGVhdExheWVyID0gTC5oZWF0TGF5ZXIoXG4gICAgICB0aGlzLm1hcmtlcnMubWFwKChpdCkgPT4gaXQuZ2V0TGF0TG5nKCkpLFxuICAgICAgLy8gVE9ETzog5L2/55SoIG1lcmdlQ29uZmlnIOeugOWMllxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLCB7IG1pbk9wYWNpdHk6IDEgfSlcbiAgICApXG4gICAgcmV0dXJuIHRoaXMuaGVhdExheWVyXG4gIH1cblxuICBwcml2YXRlIGdldExhcmdlck1hcmtlckljb24oZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgdHJ1ZSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWFya2VySWNvbihkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0TWFya2VySWNvbihkYXRhLCBmYWxzZSlcbiAgfVxuXG4gIC8qKiDojrflj5blvZPliY0gbWFya2VyIOmcgOimgeWxleekuueahCBpY29uICovXG4gIHByaXZhdGUgX2dldE1hcmtlckljb24oXG4gICAgZGF0YTogRGF0YUxpc3RJdGVtLFxuICAgIGlzTGFyZ2VyOiBib29sZWFuXG4gICk6IEwuSWNvbiB8IEwuRGl2SWNvbiB7XG4gICAgY29uc3QgaWNvblNpemUgPSB0aGlzLm9wdGlvbnMuaWNvblNpemVcbiAgICBjb25zdCBpY29uQW5jaG9yID0gdGhpcy5vcHRpb25zLmljb25BbmNob3JcbiAgICBjb25zdCBsYXJnZXJJY29uU2l6ZSA9IFtpY29uU2l6ZVswXSAqIDEuNSwgaWNvblNpemVbMV0gKiAxLjVdIGFzIFtcbiAgICAgIG51bWJlcixcbiAgICAgIG51bWJlclxuICAgIF1cbiAgICBjb25zdCBsYXJnZXJJY29uQW5jaG9yID0gW2ljb25BbmNob3JbMF0gKiAxLjUsIGljb25BbmNob3JbMV0gKiAxLjVdIGFzIFtcbiAgICAgIG51bWJlcixcbiAgICAgIG51bWJlclxuICAgIF1cblxuICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMub3B0aW9ucy5pY29uQ29sb3JcblxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICBjYXNlICdpbWFnZSc6IHtcbiAgICAgICAgLy8gcmV0dXJuIEwuaWNvbih7XG4gICAgICAgIC8vICAgaWNvblVybDogdGhpcy5vcHRpb25zLmljb25JbWFnZVVybCxcbiAgICAgICAgLy8gICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAvLyAgIGljb25BbmNob3IsXG4gICAgICAgIC8vIH0pXG4gICAgICB9XG4gICAgICBjYXNlICdmb250X2NsYXNzJzpcbiAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgICAgICBodG1sOiB0aGlzLmdldEN1c3RvbUljb25IVE1MKGRhdGEsIHtcbiAgICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICBpY29uQ29sb3IsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2xhc3NOYW1lOiBpc0xhcmdlciA/ICdsYXJnZS1kaXYtaWNvbi1tYXJrZXInIDogJycsXG4gICAgICAgICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgICBpY29uQW5jaG9yOiBpc0xhcmdlciA/IGxhcmdlckljb25BbmNob3IgOiBpY29uQW5jaG9yLFxuICAgICAgICAgIHRvb2x0aXBBbmNob3I6IGlzTGFyZ2VyXG4gICAgICAgICAgICA/IFswLCAtbGFyZ2VySWNvbkFuY2hvclsxXSAvIDJdXG4gICAgICAgICAgICA6IFswLCAtaWNvbkFuY2hvclsxXSAvIDJdLFxuICAgICAgICAgIHBvcHVwQW5jaG9yOiBpc0xhcmdlclxuICAgICAgICAgICAgPyBbMCwgLWxhcmdlckljb25BbmNob3JbMV0gLyAyXVxuICAgICAgICAgICAgOiBbMCwgLWljb25BbmNob3JbMV0gLyAyXSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZW5kZXJUeXBlIOS4jeiDveS4uiAke3RoaXMub3B0aW9ucy5pY29uVHlwZX1gKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGdldEN1c3RvbUljb25IVE1MKFxuICAgIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgICBvcHRpb25zPzogSWNvblJlbmRlckZ1bmNPcHRpb25cbiAgKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmljb25SZW5kZXJlcikge1xuICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvblJlbmRlcmVyKGRhdGEsIG9wdGlvbnMpXG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlKSB7XG4gICAgICBjYXNlICdzaW5nbGUnOiB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICAgICAgLy8g5L2/55SoIGNsYXNzXG4gICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke29wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L2/55SoIHN2Z1xuICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uLXN5bWJvbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7dGhpcy5vcHRpb25zLmljb25TeW1ib2x9XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS9v+eUqCB1bmljb2RlXG4gICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7b3B0aW9ucy5pY29uQ29sb3J9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGV9XG4gICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3NlZ21lbnRlZCc6IHtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgICAgICBjYXNlICdmb250X2NsYXNzJzoge1xuICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGlzLmdldFNlZ21lbnRlZE1hcmtlckNvbG9yKGRhdGEpfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8g5L2/55SoIHN2Z1xuICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uLXN5bWJvbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiR7dGhpcy5vcHRpb25zLmljb25TeW1ib2x9XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS9v+eUqCB1bmljb2RlXG4gICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKX07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3B0aW9ucy5pY29uVW5pY29kZX1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYHJlbmRlclBvaW50Q29sb3JUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGV9XCJgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgY29uc3Qgc2VnbWVudGVkTGVuZ3RoID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9ycy5sZW5ndGhcbiAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5XG4gICAgbGV0IG1pblZhbCA9IEluZmluaXR5XG4gICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuZGF0YUxpc3QpIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbClcbiAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKVxuICAgIH1cbiAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWxcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSBzdGVwXG4gIH1cbiAgcHJpdmF0ZSBnZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0pOiBzdHJpbmcge1xuICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW1xuICAgICAgcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMClcbiAgICBdXG4gICAgcmV0dXJuIGNvbG9yXG4gIH1cbiAgcHJpdmF0ZSBnZXRQb3B1cENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHJ9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0cl19YFxuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0ci5sYWJlbH06ICR7XG4gICAgICAgIGRhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZV1cbiAgICAgIH1gXG4gICAgfVxuICB9XG4gIHByaXZhdGUgaWNvbkNyZWF0ZUZ1bmN0aW9uKGNsdXN0ZXI6IEwuTWFya2Vyc0NsdXN0ZXIpIHtcbiAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgIGh0bWw6IGBcbiAgICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4odGhpcy5vcHRpb25zLmljb25Db2xvcil9O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMub3B0aW9ucy5pY29uQ29sb3J9O1xuICAgICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDlweDtcbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgICAgbGVmdDogOXB4O1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgJHtjbHVzdGVyLmdldENoaWxkQ291bnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgYCxcbiAgICAgIGljb25TaXplOiBbNDAsIDQwXSxcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgUG9seWdvbiBmcm9tICcuL1BvbHlnb24nXG5pbXBvcnQgUG9seWdvbnNMYXllciwgeyBQb2x5Z29uTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi9Qb2x5Z29uc0xheWVyJ1xuaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkc0xheWVyIGV4dGVuZHMgUG9seWdvbnNMYXllciB7XG4gIHByaXZhdGUgcHJvcE1heExlbmd0aDogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIHRoaXMucHJvcE1heExlbmd0aCA9IC0xXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0dyaWRMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICAvLyB0b29sdGlwIOacieWPr+iDvemcgOimgeebtOaOpeWxleekuu+8jOmcgOimgeWcqCBwb2x5Z29uIOa3u+WKoOWIsOWcsOWbvuS4iuS5i+WQjuaJjeWPr+S7pe+8jOaJgOS7pemcgOimgeW7tui/n+iuvue9rlxuICAgIHRoaXMuY29uZmlnVG9vbHRpcCgpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnpvb21IYW5kbGVyKClcbiAgICB9LCAyMDApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgdG9nZ2xlVG9vbHRpcCh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICBpZiAocG9seWdvbi5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgcG9seWdvbi5nZXRUb29sdGlwKCkuc2V0T3BhY2l0eSh2aXNpYmxlID8gMSA6IDApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdEV2ZW50KCkge1xuICAgIHRoaXMubWFwLm9uKCd6b29tJywgdGhpcy56b29tSGFuZGxlci5iaW5kKHRoaXMpKVxuICB9XG4gIHByaXZhdGUgY29uZmlnVG9vbHRpcCgpIHtcbiAgICB0aGlzLnByb3BNYXhMZW5ndGggPSB0aGlzLmdldFByb3BNYXhMZW5ndGgoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICBwb2x5Z29uLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQocG9seWdvbi5nZXREYXRhKCkpLCB7XG4gICAgICAgICAgcGVybWFuZW50OiB0cnVlLFxuICAgICAgICAgIGRpcmVjdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGNvbmZpZ0dyaWRMYXllcigpIHtcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5Z29ucyA9IHRoaXMucG9seWdvbnMubWFwKChwb2x5Z29uKSA9PiB7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWdvbkNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihwb2x5Z29uLmdldERhdGEoKSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnM6IEwuUG9seWxpbmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yLFxuICAgICAgfSlcbiAgICAgIC8vIOmHjeaWsOW6lOeUqCBvcHRpb25zXG4gICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IFBvbHlnb24ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpXG4gICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpXG4gICAgICBuZXdQb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWdvbi5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1BvbHlnb25cbiAgICB9KVxuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIuYWRkTGF5ZXIocG9seWdvbilcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllclxuICB9XG4gIHByaXZhdGUgem9vbUhhbmRsZXIoKSB7XG4gICAgY29uc3QgcG9seWdvbiA9IHRoaXMucG9seWdvbnNbMF1cbiAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb24pID5cbiAgICAgICAgdGhpcy5nZXRUb29sdGlwTWF4V2lkdGgodGhpcy5wcm9wTWF4TGVuZ3RoKVxuICAgIClcbiAgfVxuICBwcml2YXRlIGdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb246IFBvbHlnb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCkpLnggLVxuICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpLnhcbiAgICApXG4gIH1cbiAgcHJpdmF0ZSBnZXRUb29sdGlwTWF4V2lkdGgodGV4dExlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRleHRMZW5ndGggKiAxMiArIDE0XG4gIH1cbiAgcHJpdmF0ZSBnZXRQcm9wTWF4TGVuZ3RoKCkge1xuICAgIGNvbnN0IHByb3AgPVxuICAgICAgdHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnBvcHVwQXR0clxuICAgICAgICA6IHRoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVcbiAgICByZXR1cm4gdGhpcy5wb2x5Z29uc1xuICAgICAgLm1hcCgocG9seWdvbikgPT4gYCR7cG9seWdvbi5nZXREYXRhKClbcHJvcF19YC5sZW5ndGgpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChwcmV2LCBjdXJyKVxuICAgICAgfSwgMClcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBMLlBvbHlnb24ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxhdGxuZ3M6XG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdXG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdW11cbiAgICAgIHwgTC5MYXRMbmdFeHByZXNzaW9uW11bXVtdLFxuICAgIG9wdGlvbnM/OiBMLlBvbHlsaW5lT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKVxuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHRoaXMuX19kYXRhID0gZGF0YVxuICB9XG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YVxuICB9XG59XG4iLCJpbXBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfSBmcm9tICcuLi91dGlscy9pbmRleCdcbmltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vUG9seWdvbidcblxuLyoqIOa4suafk+minOiJsuagt+W8jyDljZXoibJ85YiG5q61ICovXG50eXBlIFBvbHlnb25MYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbnR5cGUgQ29sb3JNb2RlID0gJ2RhcmtlbicgfCAnbGlnaHRlbicgfCAnbm9ybWFsJ1xuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5Z29uQ29sb3JUeXBlOiBQb2x5Z29uTGF5ZXJSZW5kZXJDb2xvclR5cGVcblxuICAvKiogcG9wdXAg5bGV56S65a2X5q61ICovXG4gIHBvcHVwQXR0cj86IHN0cmluZyB8IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IGFueSB9XG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb25zTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOiBMLkxheWVyR3JvdXBcblxuICBwcm90ZWN0ZWQgbWFwOiBMLk1hcFxuICBwcm90ZWN0ZWQgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zXG4gIHByb3RlY3RlZCBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgcHJvdGVjdGVkIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJvdGVjdGVkIHBvbHlnb25zOiBQb2x5Z29uW11cbiAgcHJvdGVjdGVkIGZvY3VzZWRQb2x5Z29uOiBQb2x5Z29uXG4gIHByb3RlY3RlZCBmb2N1c2VkRGlzcGxheVBvbHlnb246IFBvbHlnb25cbiAgcHJvdGVjdGVkIHBvbHlnb25MYXllcjogTC5MYXllckdyb3VwXG5cbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMgPSB7XG4gICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIGZpbGw6IHRydWUsXG4gICAgICBmaWxsQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIHdlaWdodDogMSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBmaWxsT3BhY2l0eTogMC41LFxuICAgICAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncG9seWdvbidcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMucG9seWdvbnMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5mb2N1c2VkUG9seWdvbiA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbiA9IG51bGxcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWdvbkxheWVyT3B0aW9ucykge1xuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5Z29ucygpXG4gICAgdGhpcy5pbml0RXZlbnQoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlnb25MYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWdvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5Z29ucy5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksXG4gICAgICB0aGlzLnBvbHlnb25zWzBdLmdldEJvdW5kcygpXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgdG9nZ2xlVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZVxuICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKVxuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsbENvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHBpdGNoKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgIGlmIChwb2x5Z29uLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24sIHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRFdmVudCgpIHt9XG4gIHByb3RlY3RlZCBnZXRUb29sVGlwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgfVxuICBwcm90ZWN0ZWQgZ2V0UG9wdXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWBcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke1xuICAgICAgICBkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICB9YFxuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByb3RlY3RlZCBnZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByb3RlY3RlZCBwb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb246IFBvbHlnb24sIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRQb2x5Z29uID0gcG9seWdvblxuICAgIC8vIOWIoOmZpOWJjeS4gOS4qiBmb2N1c1xuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKClcbiAgICB9XG4gICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwge1xuICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgfSlcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5hZGRUbyh0aGlzLm1hcClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgIC5vcGVuUG9wdXAoKVxuXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKVxuICAgIH0pXG4gICAgcG9seWdvbi5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24uZ2V0Q2VudGVyKCkpXG4gICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHBvbHlnb24uZ2V0Qm91bmRzKCkpXG4gICAgfVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlnb24nLCBwb2x5Z29uKVxuICB9XG4gIHByb3RlY3RlZCBpbml0T3B0aW9ucyhvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRQb2x5Z29ucygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5wb2x5Z29ucyA9IFtdXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuICAgICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKChsYXllciBhcyBMLlBvbHlnb24pLmdldExhdExuZ3MoKSlcblxuICAgICAgcG9seWdvbi5zZXREYXRhKGRhdGEpXG4gICAgICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbilcbiAgICB9KVxuICB9XG4gIHByaXZhdGUgY29uZmlnUG9seWdvbkxheWVyKCkge1xuICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlnb25zID0gdGhpcy5wb2x5Z29ucy5tYXAoKHBvbHlnb24pID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IEwuUG9seWxpbmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgICB9KVxuICAgICAgLy8g6YeN5paw5bqU55SoIG9wdGlvbnNcbiAgICAgIGNvbnN0IG5ld1BvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucylcbiAgICAgIG5ld1BvbHlnb24uc2V0RGF0YShwb2x5Z29uLmdldERhdGEoKSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG5ld1BvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgIH1cbiAgICAgIG5ld1BvbHlnb24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbilcbiAgICAgIH0pXG4gICAgICByZXR1cm4gbmV3UG9seWdvblxuICAgIH0pXG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWdvbkxheWVyXG4gIH1cbiAgcHJpdmF0ZSBnZXRDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0sIG1vZGU/OiBDb2xvck1vZGUpIHtcbiAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlnb25Db2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKGRhdGEpXG4gICAgfVxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgcmV0dXJuIGRhcmtlbihjb2xvcilcbiAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICByZXR1cm4gbGlnaHRlbihjb2xvcilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb2xvclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCB0eXBlIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiA9XG4gIHwgTC5MYXRMbmdFeHByZXNzaW9uW11cbiAgfCBMLkxhdExuZ0V4cHJlc3Npb25bXVtdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZSBleHRlbmRzIEwuUG9seWxpbmUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKGxhdGxuZ3M6IFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IEwuUG9seWxpbmVPcHRpb25zKSB7XG4gICAgc3VwZXIobGF0bG5ncywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlsaW5lc0xheWVyIGZyb20gJy4vUG9seWxpbmVzTGF5ZXInXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBQb2x5bGluZUxheWVyUmVuZGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuaW50ZXJmYWNlIFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Db3JyaWRvck9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nXG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlsaW5lc0J1ZmZlckxheWVyIGV4dGVuZHMgUG9seWxpbmVzTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9uc1xuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgc3VwZXIobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zID0ge1xuICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIGNvcnJpZG9yOiAxMDAsXG4gICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgb3BhY2l0eTogMC41LFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncG9seWxpbmVCdWZmZXInXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgLy8gdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5bGluZXMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKVxuICB9XG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKFxuICAgICAgKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLFxuICAgICAgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKClcbiAgICApXG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwcml2YXRlIGNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKSB7XG4gICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgcG9seWxpbmUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lKVxuICAgICAgfSlcbiAgICAgIGNvbnN0IG9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGNvbnN0IHBvbHlsaW5lQnVmZmVyID0gTC5jb3JyaWRvcihcbiAgICAgICAgKHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBMLkxhdExuZ1tdKS5tYXAoKGxhdExuZykgPT5cbiAgICAgICAgICBMLmxhdExuZyhbbGF0TG5nLmxhdCwgbGF0TG5nLmxuZ10pXG4gICAgICAgICksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgcG9seWxpbmVCdWZmZXIuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKHBvbHlsaW5lQnVmZmVyKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgUG9seWxpbmUsIHsgUG9seWxpbmVMYXRMbmdFeHByZXNzaW9uIH0gZnJvbSAnLi9Qb2x5bGluZSdcbmltcG9ydCB7IGRhcmtlbiwgbGlnaHRlbiB9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbnR5cGUgQ29sb3JNb2RlID0gJ2RhcmtlbicgfCAnbGlnaHRlbicgfCAnbm9ybWFsJ1xuaW50ZXJmYWNlIFBvbHlsaW5lTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWxpbmVzTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOiBMLkxheWVyR3JvdXBcblxuICBwcm90ZWN0ZWQgbWFwOiBMLk1hcFxuICBwcm90ZWN0ZWQgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9uc1xuICBwcm90ZWN0ZWQgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gIHByb3RlY3RlZCBwb2x5bGluZXM6IFBvbHlsaW5lW11cbiAgcHJvdGVjdGVkIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJvdGVjdGVkIGZvY3VzZWRQb2x5bGluZTogUG9seWxpbmVcbiAgcHJvdGVjdGVkIGZvY3VzZWREaXNwbGF5UG9seWxpbmU6IFBvbHlsaW5lXG4gIHByb3RlY3RlZCBwb2x5bGluZUxheWVyOiBMLkxheWVyR3JvdXBcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9ucyA9IHtcbiAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3BvbHlsaW5lJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbnVsbFxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBQb2x5bGluZUxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWxpbmVMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVzLnJlZHVjZShcbiAgICAgIChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSxcbiAgICAgIHRoaXMucG9seWxpbmVzWzBdLmdldEJvdW5kcygpXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgdG9nZ2xlVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZVxuICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKClcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25zLmZpbGxDb2xvciA9IGNvbG9yXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIGlmIChwb2x5bGluZS5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUsIHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRQb2x5bGluZXMoKSB7XG4gICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuXG4gICAgdGhpcy5wb2x5bGluZXMgPSB0aGlzLmRhdGFMaXN0Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF1cbiAgICAgIC8vIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgLy8gaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIC8vICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSlcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IHBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKFxuICAgICAgICAobGF5ZXIgYXMgTC5Qb2x5bGluZSkuZ2V0TGF0TG5ncygpIGFzIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvblxuICAgICAgKVxuXG4gICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICBwb2x5bGluZS5zZXREYXRhKGRhdGEpXG5cbiAgICAgIHJldHVybiBwb2x5bGluZVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByb3RlY3RlZCBwb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZTogUG9seWxpbmUsIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRQb2x5bGluZSA9IHBvbHlsaW5lXG4gICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSkge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpXG4gICAgfVxuICAgIC8vIOeUn+aIkOW9k+WJjSBmb2N1c1xuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSA9IG5ldyBQb2x5bGluZShcbiAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5bGluZS5nZXREYXRhKCksICdub3JtYWwnKSxcbiAgICAgIH1cbiAgICApXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmFkZFRvKHRoaXMubWFwKVxuXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlsaW5lLmdldERhdGEoKSkpXG4gICAgICAub3BlblBvcHVwKClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICBwb2x5bGluZS5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmdldENlbnRlcigpKVxuICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5bGluZS5nZXRCb3VuZHMoKSlcbiAgICB9XG4gICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stcG9seWxpbmUnLCBwb2x5bGluZSlcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gIH1cbiAgcHJvdGVjdGVkIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtcbiAgICAgICAgZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgfWBcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjb25maWdQb2x5bGluZUxheWVyKCkge1xuICAgIHRoaXMucG9seWxpbmVMYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKVxuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgY29sb3IsXG4gICAgICB9KVxuICAgICAgY29uc3QgbmV3UG9seWxpbmUgPSBuZXcgUG9seWxpbmUoXG4gICAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIG5ld1BvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSlcbiAgICAgIH0pXG4gICAgICBuZXdQb2x5bGluZS5zZXREYXRhKHBvbHlsaW5lLmdldERhdGEoKSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWxpbmUuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKG5ld1BvbHlsaW5lKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0Q29sb3IoZGF0YTogRGF0YUxpc3RJdGVtLCBtb2RlPzogQ29sb3JNb2RlKSB7XG4gICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKGRhdGEpXG4gICAgfVxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgcmV0dXJuIGRhcmtlbihjb2xvcilcbiAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICByZXR1cm4gbGlnaHRlbihjb2xvcilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb2xvclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgQ29sb3IgZnJvbSAnY29sb3InXG5cbmZ1bmN0aW9uIGxpZ2h0ZW4oaGV4Q29sb3I6IHN0cmluZykge1xuICByZXR1cm4gQ29sb3IoaGV4Q29sb3IpXG4gICAgLmxpZ2h0ZW4oMC41KVxuICAgIC5oZXgoKVxufVxuZnVuY3Rpb24gZGFya2VuKGhleENvbG9yOiBzdHJpbmcpIHtcbiAgcmV0dXJuIENvbG9yKGhleENvbG9yKVxuICAgIC5kYXJrZW4oMC41KVxuICAgIC5oZXgoKVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICBsaWdodGVuLFxuICBkYXJrZW4sXG59XG5leHBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==

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
    price: 109090909090,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9sZWFmbGV0LWxheWVyLmpzIiwid2VicGFjazovLy8uL3Rlc3Qvc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUsyQjtBQUNqQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYSxhQUFhO0FBQ3pDO0FBQ0EsZUFBZSxhQUFhLGFBQWE7QUFDekM7QUFDQSxlQUFlLGFBQWEsYUFBYTtBQUN6QztBQUNBLGVBQWUsYUFBYTtBQUM1Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdEQUF3RCx1Q0FBdUM7QUFDL0Ysc0RBQXNELHFDQUFxQzs7QUFFM0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLElBQUk7QUFDN0Isd0JBQXdCLEVBQUUsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4Q0FBOEMsMkNBQTJDO0FBQy9GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsTUFBTTtBQUNOOztBQUVBLDJEQUEyRDtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seUJBQXlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsVUFBVTtBQUNuRTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3Rlc3Qvc3JjL2FwcC5qc1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImxlYWZsZXRNYXBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoe1xuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvY29udmVyc2lvbnMuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogTUlUIGxpY2Vuc2UgKi9cbnZhciBjc3NLZXl3b3JkcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yLW5hbWUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzXCIpO1xuXG4vLyBOT1RFOiBjb252ZXJzaW9ucyBzaG91bGQgb25seSByZXR1cm4gcHJpbWl0aXZlIHZhbHVlcyAoaS5lLiBhcnJheXMsIG9yXG4vLyAgICAgICB2YWx1ZXMgdGhhdCBnaXZlIGNvcnJlY3QgYHR5cGVvZmAgcmVzdWx0cykuXG4vLyAgICAgICBkbyBub3QgdXNlIGJveCB2YWx1ZXMgdHlwZXMgKGkuZS4gTnVtYmVyKCksIFN0cmluZygpLCBldGMuKVxuXG52YXIgcmV2ZXJzZUtleXdvcmRzID0ge307XG5mb3IgKHZhciBrZXkgaW4gY3NzS2V5d29yZHMpIHtcblx0aWYgKGNzc0tleXdvcmRzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRyZXZlcnNlS2V5d29yZHNbY3NzS2V5d29yZHNba2V5XV0gPSBrZXk7XG5cdH1cbn1cblxudmFyIGNvbnZlcnQgPSBtb2R1bGUuZXhwb3J0cyA9IHtcblx0cmdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3JnYid9LFxuXHRoc2w6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHNsJ30sXG5cdGhzdjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc3YnfSxcblx0aHdiOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2h3Yid9LFxuXHRjbXlrOiB7Y2hhbm5lbHM6IDQsIGxhYmVsczogJ2NteWsnfSxcblx0eHl6OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ3h5eid9LFxuXHRsYWI6IHtjaGFubmVsczogMywgbGFiZWxzOiAnbGFiJ30sXG5cdGxjaDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsY2gnfSxcblx0aGV4OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydoZXgnXX0sXG5cdGtleXdvcmQ6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2tleXdvcmQnXX0sXG5cdGFuc2kxNjoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnYW5zaTE2J119LFxuXHRhbnNpMjU2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMjU2J119LFxuXHRoY2c6IHtjaGFubmVsczogMywgbGFiZWxzOiBbJ2gnLCAnYycsICdnJ119LFxuXHRhcHBsZToge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsncjE2JywgJ2cxNicsICdiMTYnXX0sXG5cdGdyYXk6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2dyYXknXX1cbn07XG5cbi8vIGhpZGUgLmNoYW5uZWxzIGFuZCAubGFiZWxzIHByb3BlcnRpZXNcbmZvciAodmFyIG1vZGVsIGluIGNvbnZlcnQpIHtcblx0aWYgKGNvbnZlcnQuaGFzT3duUHJvcGVydHkobW9kZWwpKSB7XG5cdFx0aWYgKCEoJ2NoYW5uZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoISgnbGFiZWxzJyBpbiBjb252ZXJ0W21vZGVsXSkpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjaGFubmVsIGxhYmVscyBwcm9wZXJ0eTogJyArIG1vZGVsKTtcblx0XHR9XG5cblx0XHRpZiAoY29udmVydFttb2RlbF0ubGFiZWxzLmxlbmd0aCAhPT0gY29udmVydFttb2RlbF0uY2hhbm5lbHMpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2hhbm5lbCBhbmQgbGFiZWwgY291bnRzIG1pc21hdGNoOiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXHRcdGRlbGV0ZSBjb252ZXJ0W21vZGVsXS5sYWJlbHM7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnY2hhbm5lbHMnLCB7dmFsdWU6IGNoYW5uZWxzfSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbbW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBsYWJlbHN9KTtcblx0fVxufVxuXG5jb252ZXJ0LnJnYi5oc2wgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuXHR2YXIgZGVsdGEgPSBtYXggLSBtaW47XG5cdHZhciBoO1xuXHR2YXIgcztcblx0dmFyIGw7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0aCA9IDA7XG5cdH0gZWxzZSBpZiAociA9PT0gbWF4KSB7XG5cdFx0aCA9IChnIC0gYikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChnID09PSBtYXgpIHtcblx0XHRoID0gMiArIChiIC0gcikgLyBkZWx0YTtcblx0fSBlbHNlIGlmIChiID09PSBtYXgpIHtcblx0XHRoID0gNCArIChyIC0gZykgLyBkZWx0YTtcblx0fVxuXG5cdGggPSBNYXRoLm1pbihoICogNjAsIDM2MCk7XG5cblx0aWYgKGggPCAwKSB7XG5cdFx0aCArPSAzNjA7XG5cdH1cblxuXHRsID0gKG1pbiArIG1heCkgLyAyO1xuXG5cdGlmIChtYXggPT09IG1pbikge1xuXHRcdHMgPSAwO1xuXHR9IGVsc2UgaWYgKGwgPD0gMC41KSB7XG5cdFx0cyA9IGRlbHRhIC8gKG1heCArIG1pbik7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pO1xuXHR9XG5cblx0cmV0dXJuIFtoLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmhzdiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJkaWY7XG5cdHZhciBnZGlmO1xuXHR2YXIgYmRpZjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciB2ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkaWZmID0gdiAtIE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgZGlmZmMgPSBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAodiAtIGMpIC8gNiAvIGRpZmYgKyAxIC8gMjtcblx0fTtcblxuXHRpZiAoZGlmZiA9PT0gMCkge1xuXHRcdGggPSBzID0gMDtcblx0fSBlbHNlIHtcblx0XHRzID0gZGlmZiAvIHY7XG5cdFx0cmRpZiA9IGRpZmZjKHIpO1xuXHRcdGdkaWYgPSBkaWZmYyhnKTtcblx0XHRiZGlmID0gZGlmZmMoYik7XG5cblx0XHRpZiAociA9PT0gdikge1xuXHRcdFx0aCA9IGJkaWYgLSBnZGlmO1xuXHRcdH0gZWxzZSBpZiAoZyA9PT0gdikge1xuXHRcdFx0aCA9ICgxIC8gMykgKyByZGlmIC0gYmRpZjtcblx0XHR9IGVsc2UgaWYgKGIgPT09IHYpIHtcblx0XHRcdGggPSAoMiAvIDMpICsgZ2RpZiAtIHJkaWY7XG5cdFx0fVxuXHRcdGlmIChoIDwgMCkge1xuXHRcdFx0aCArPSAxO1xuXHRcdH0gZWxzZSBpZiAoaCA+IDEpIHtcblx0XHRcdGggLT0gMTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdGggKiAzNjAsXG5cdFx0cyAqIDEwMCxcblx0XHR2ICogMTAwXG5cdF07XG59O1xuXG5jb252ZXJ0LnJnYi5od2IgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdO1xuXHR2YXIgZyA9IHJnYlsxXTtcblx0dmFyIGIgPSByZ2JbMl07XG5cdHZhciBoID0gY29udmVydC5yZ2IuaHNsKHJnYilbMF07XG5cdHZhciB3ID0gMSAvIDI1NSAqIE1hdGgubWluKHIsIE1hdGgubWluKGcsIGIpKTtcblxuXHRiID0gMSAtIDEgLyAyNTUgKiBNYXRoLm1heChyLCBNYXRoLm1heChnLCBiKSk7XG5cblx0cmV0dXJuIFtoLCB3ICogMTAwLCBiICogMTAwXTtcbn07XG5cbmNvbnZlcnQucmdiLmNteWsgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBjO1xuXHR2YXIgbTtcblx0dmFyIHk7XG5cdHZhciBrO1xuXG5cdGsgPSBNYXRoLm1pbigxIC0gciwgMSAtIGcsIDEgLSBiKTtcblx0YyA9ICgxIC0gciAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXHRtID0gKDEgLSBnIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdHkgPSAoMSAtIGIgLSBrKSAvICgxIC0gaykgfHwgMDtcblxuXHRyZXR1cm4gW2MgKiAxMDAsIG0gKiAxMDAsIHkgKiAxMDAsIGsgKiAxMDBdO1xufTtcblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9lbi5tLndpa2lwZWRpYS5vcmcvd2lraS9FdWNsaWRlYW5fZGlzdGFuY2UjU3F1YXJlZF9FdWNsaWRlYW5fZGlzdGFuY2VcbiAqICovXG5mdW5jdGlvbiBjb21wYXJhdGl2ZURpc3RhbmNlKHgsIHkpIHtcblx0cmV0dXJuIChcblx0XHRNYXRoLnBvdyh4WzBdIC0geVswXSwgMikgK1xuXHRcdE1hdGgucG93KHhbMV0gLSB5WzFdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsyXSAtIHlbMl0sIDIpXG5cdCk7XG59XG5cbmNvbnZlcnQucmdiLmtleXdvcmQgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByZXZlcnNlZCA9IHJldmVyc2VLZXl3b3Jkc1tyZ2JdO1xuXHRpZiAocmV2ZXJzZWQpIHtcblx0XHRyZXR1cm4gcmV2ZXJzZWQ7XG5cdH1cblxuXHR2YXIgY3VycmVudENsb3Nlc3REaXN0YW5jZSA9IEluZmluaXR5O1xuXHR2YXIgY3VycmVudENsb3Nlc3RLZXl3b3JkO1xuXG5cdGZvciAodmFyIGtleXdvcmQgaW4gY3NzS2V5d29yZHMpIHtcblx0XHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5d29yZCkpIHtcblx0XHRcdHZhciB2YWx1ZSA9IGNzc0tleXdvcmRzW2tleXdvcmRdO1xuXG5cdFx0XHQvLyBDb21wdXRlIGNvbXBhcmF0aXZlIGRpc3RhbmNlXG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBjb21wYXJhdGl2ZURpc3RhbmNlKHJnYiwgdmFsdWUpO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBpdHMgbGVzcywgaWYgc28gc2V0IGFzIGNsb3Nlc3Rcblx0XHRcdGlmIChkaXN0YW5jZSA8IGN1cnJlbnRDbG9zZXN0RGlzdGFuY2UpIHtcblx0XHRcdFx0Y3VycmVudENsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdEtleXdvcmQgPSBrZXl3b3JkO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG59O1xuXG5jb252ZXJ0LmtleXdvcmQucmdiID0gZnVuY3Rpb24gKGtleXdvcmQpIHtcblx0cmV0dXJuIGNzc0tleXdvcmRzW2tleXdvcmRdO1xufTtcblxuY29udmVydC5yZ2IueHl6ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgciA9IHJnYlswXSAvIDI1NTtcblx0dmFyIGcgPSByZ2JbMV0gLyAyNTU7XG5cdHZhciBiID0gcmdiWzJdIC8gMjU1O1xuXG5cdC8vIGFzc3VtZSBzUkdCXG5cdHIgPSByID4gMC4wNDA0NSA/IE1hdGgucG93KCgociArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChyIC8gMTIuOTIpO1xuXHRnID0gZyA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGcgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoZyAvIDEyLjkyKTtcblx0YiA9IGIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChiICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKGIgLyAxMi45Mik7XG5cblx0dmFyIHggPSAociAqIDAuNDEyNCkgKyAoZyAqIDAuMzU3NikgKyAoYiAqIDAuMTgwNSk7XG5cdHZhciB5ID0gKHIgKiAwLjIxMjYpICsgKGcgKiAwLjcxNTIpICsgKGIgKiAwLjA3MjIpO1xuXHR2YXIgeiA9IChyICogMC4wMTkzKSArIChnICogMC4xMTkyKSArIChiICogMC45NTA1KTtcblxuXHRyZXR1cm4gW3ggKiAxMDAsIHkgKiAxMDAsIHogKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IubGFiID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgeHl6ID0gY29udmVydC5yZ2IueHl6KHJnYik7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5oc2wucmdiID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXSAvIDM2MDtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgdDE7XG5cdHZhciB0Mjtcblx0dmFyIHQzO1xuXHR2YXIgcmdiO1xuXHR2YXIgdmFsO1xuXG5cdGlmIChzID09PSAwKSB7XG5cdFx0dmFsID0gbCAqIDI1NTtcblx0XHRyZXR1cm4gW3ZhbCwgdmFsLCB2YWxdO1xuXHR9XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHR0MiA9IGwgKiAoMSArIHMpO1xuXHR9IGVsc2Uge1xuXHRcdHQyID0gbCArIHMgLSBsICogcztcblx0fVxuXG5cdHQxID0gMiAqIGwgLSB0MjtcblxuXHRyZ2IgPSBbMCwgMCwgMF07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0dDMgPSBoICsgMSAvIDMgKiAtKGkgLSAxKTtcblx0XHRpZiAodDMgPCAwKSB7XG5cdFx0XHR0MysrO1xuXHRcdH1cblx0XHRpZiAodDMgPiAxKSB7XG5cdFx0XHR0My0tO1xuXHRcdH1cblxuXHRcdGlmICg2ICogdDMgPCAxKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqIDYgKiB0Mztcblx0XHR9IGVsc2UgaWYgKDIgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQyO1xuXHRcdH0gZWxzZSBpZiAoMyAqIHQzIDwgMikge1xuXHRcdFx0dmFsID0gdDEgKyAodDIgLSB0MSkgKiAoMiAvIDMgLSB0MykgKiA2O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWwgPSB0MTtcblx0XHR9XG5cblx0XHRyZ2JbaV0gPSB2YWwgKiAyNTU7XG5cdH1cblxuXHRyZXR1cm4gcmdiO1xufTtcblxuY29udmVydC5oc2wuaHN2ID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgaCA9IGhzbFswXTtcblx0dmFyIHMgPSBoc2xbMV0gLyAxMDA7XG5cdHZhciBsID0gaHNsWzJdIC8gMTAwO1xuXHR2YXIgc21pbiA9IHM7XG5cdHZhciBsbWluID0gTWF0aC5tYXgobCwgMC4wMSk7XG5cdHZhciBzdjtcblx0dmFyIHY7XG5cblx0bCAqPSAyO1xuXHRzICo9IChsIDw9IDEpID8gbCA6IDIgLSBsO1xuXHRzbWluICo9IGxtaW4gPD0gMSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0diA9IChsICsgcykgLyAyO1xuXHRzdiA9IGwgPT09IDAgPyAoMiAqIHNtaW4pIC8gKGxtaW4gKyBzbWluKSA6ICgyICogcykgLyAobCArIHMpO1xuXG5cdHJldHVybiBbaCwgc3YgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YucmdiID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXSAvIDYwO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciBoaSA9IE1hdGguZmxvb3IoaCkgJSA2O1xuXG5cdHZhciBmID0gaCAtIE1hdGguZmxvb3IoaCk7XG5cdHZhciBwID0gMjU1ICogdiAqICgxIC0gcyk7XG5cdHZhciBxID0gMjU1ICogdiAqICgxIC0gKHMgKiBmKSk7XG5cdHZhciB0ID0gMjU1ICogdiAqICgxIC0gKHMgKiAoMSAtIGYpKSk7XG5cdHYgKj0gMjU1O1xuXG5cdHN3aXRjaCAoaGkpIHtcblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gW3YsIHQsIHBdO1xuXHRcdGNhc2UgMTpcblx0XHRcdHJldHVybiBbcSwgdiwgcF07XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIFtwLCB2LCB0XTtcblx0XHRjYXNlIDM6XG5cdFx0XHRyZXR1cm4gW3AsIHEsIHZdO1xuXHRcdGNhc2UgNDpcblx0XHRcdHJldHVybiBbdCwgcCwgdl07XG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIFt2LCBwLCBxXTtcblx0fVxufTtcblxuY29udmVydC5oc3YuaHNsID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgaCA9IGhzdlswXTtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXHR2YXIgdm1pbiA9IE1hdGgubWF4KHYsIDAuMDEpO1xuXHR2YXIgbG1pbjtcblx0dmFyIHNsO1xuXHR2YXIgbDtcblxuXHRsID0gKDIgLSBzKSAqIHY7XG5cdGxtaW4gPSAoMiAtIHMpICogdm1pbjtcblx0c2wgPSBzICogdm1pbjtcblx0c2wgLz0gKGxtaW4gPD0gMSkgPyBsbWluIDogMiAtIGxtaW47XG5cdHNsID0gc2wgfHwgMDtcblx0bCAvPSAyO1xuXG5cdHJldHVybiBbaCwgc2wgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuLy8gaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3NzLWNvbG9yLyNod2ItdG8tcmdiXG5jb252ZXJ0Lmh3Yi5yZ2IgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciBoID0gaHdiWzBdIC8gMzYwO1xuXHR2YXIgd2ggPSBod2JbMV0gLyAxMDA7XG5cdHZhciBibCA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHJhdGlvID0gd2ggKyBibDtcblx0dmFyIGk7XG5cdHZhciB2O1xuXHR2YXIgZjtcblx0dmFyIG47XG5cblx0Ly8gd2ggKyBibCBjYW50IGJlID4gMVxuXHRpZiAocmF0aW8gPiAxKSB7XG5cdFx0d2ggLz0gcmF0aW87XG5cdFx0YmwgLz0gcmF0aW87XG5cdH1cblxuXHRpID0gTWF0aC5mbG9vcig2ICogaCk7XG5cdHYgPSAxIC0gYmw7XG5cdGYgPSA2ICogaCAtIGk7XG5cblx0aWYgKChpICYgMHgwMSkgIT09IDApIHtcblx0XHRmID0gMSAtIGY7XG5cdH1cblxuXHRuID0gd2ggKyBmICogKHYgLSB3aCk7IC8vIGxpbmVhciBpbnRlcnBvbGF0aW9uXG5cblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblx0c3dpdGNoIChpKSB7XG5cdFx0ZGVmYXVsdDpcblx0XHRjYXNlIDY6XG5cdFx0Y2FzZSAwOiByID0gdjsgZyA9IG47IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAxOiByID0gbjsgZyA9IHY7IGIgPSB3aDsgYnJlYWs7XG5cdFx0Y2FzZSAyOiByID0gd2g7IGcgPSB2OyBiID0gbjsgYnJlYWs7XG5cdFx0Y2FzZSAzOiByID0gd2g7IGcgPSBuOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA0OiByID0gbjsgZyA9IHdoOyBiID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSA1OiByID0gdjsgZyA9IHdoOyBiID0gbjsgYnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC5jbXlrLnJnYiA9IGZ1bmN0aW9uIChjbXlrKSB7XG5cdHZhciBjID0gY215a1swXSAvIDEwMDtcblx0dmFyIG0gPSBjbXlrWzFdIC8gMTAwO1xuXHR2YXIgeSA9IGNteWtbMl0gLyAxMDA7XG5cdHZhciBrID0gY215a1szXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gMSAtIE1hdGgubWluKDEsIGMgKiAoMSAtIGspICsgayk7XG5cdGcgPSAxIC0gTWF0aC5taW4oMSwgbSAqICgxIC0gaykgKyBrKTtcblx0YiA9IDEgLSBNYXRoLm1pbigxLCB5ICogKDEgLSBrKSArIGspO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5yZ2IgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdIC8gMTAwO1xuXHR2YXIgeSA9IHh5elsxXSAvIDEwMDtcblx0dmFyIHogPSB4eXpbMl0gLyAxMDA7XG5cdHZhciByO1xuXHR2YXIgZztcblx0dmFyIGI7XG5cblx0ciA9ICh4ICogMy4yNDA2KSArICh5ICogLTEuNTM3MikgKyAoeiAqIC0wLjQ5ODYpO1xuXHRnID0gKHggKiAtMC45Njg5KSArICh5ICogMS44NzU4KSArICh6ICogMC4wNDE1KTtcblx0YiA9ICh4ICogMC4wNTU3KSArICh5ICogLTAuMjA0MCkgKyAoeiAqIDEuMDU3MCk7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhyLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogciAqIDEyLjkyO1xuXG5cdGcgPSBnID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coZywgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGcgKiAxMi45MjtcblxuXHRiID0gYiA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KGIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiBiICogMTIuOTI7XG5cblx0ciA9IE1hdGgubWluKE1hdGgubWF4KDAsIHIpLCAxKTtcblx0ZyA9IE1hdGgubWluKE1hdGgubWF4KDAsIGcpLCAxKTtcblx0YiA9IE1hdGgubWluKE1hdGgubWF4KDAsIGIpLCAxKTtcblxuXHRyZXR1cm4gW3IgKiAyNTUsIGcgKiAyNTUsIGIgKiAyNTVdO1xufTtcblxuY29udmVydC54eXoubGFiID0gZnVuY3Rpb24gKHh5eikge1xuXHR2YXIgeCA9IHh5elswXTtcblx0dmFyIHkgPSB4eXpbMV07XG5cdHZhciB6ID0geHl6WzJdO1xuXHR2YXIgbDtcblx0dmFyIGE7XG5cdHZhciBiO1xuXG5cdHggLz0gOTUuMDQ3O1xuXHR5IC89IDEwMDtcblx0eiAvPSAxMDguODgzO1xuXG5cdHggPSB4ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh4LCAxIC8gMykgOiAoNy43ODcgKiB4KSArICgxNiAvIDExNik7XG5cdHkgPSB5ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh5LCAxIC8gMykgOiAoNy43ODcgKiB5KSArICgxNiAvIDExNik7XG5cdHogPSB6ID4gMC4wMDg4NTYgPyBNYXRoLnBvdyh6LCAxIC8gMykgOiAoNy43ODcgKiB6KSArICgxNiAvIDExNik7XG5cblx0bCA9ICgxMTYgKiB5KSAtIDE2O1xuXHRhID0gNTAwICogKHggLSB5KTtcblx0YiA9IDIwMCAqICh5IC0geik7XG5cblx0cmV0dXJuIFtsLCBhLCBiXTtcbn07XG5cbmNvbnZlcnQubGFiLnh5eiA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIHg7XG5cdHZhciB5O1xuXHR2YXIgejtcblxuXHR5ID0gKGwgKyAxNikgLyAxMTY7XG5cdHggPSBhIC8gNTAwICsgeTtcblx0eiA9IHkgLSBiIC8gMjAwO1xuXG5cdHZhciB5MiA9IE1hdGgucG93KHksIDMpO1xuXHR2YXIgeDIgPSBNYXRoLnBvdyh4LCAzKTtcblx0dmFyIHoyID0gTWF0aC5wb3coeiwgMyk7XG5cdHkgPSB5MiA+IDAuMDA4ODU2ID8geTIgOiAoeSAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR4ID0geDIgPiAwLjAwODg1NiA/IHgyIDogKHggLSAxNiAvIDExNikgLyA3Ljc4Nztcblx0eiA9IHoyID4gMC4wMDg4NTYgPyB6MiA6ICh6IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cblx0eCAqPSA5NS4wNDc7XG5cdHkgKj0gMTAwO1xuXHR6ICo9IDEwOC44ODM7XG5cblx0cmV0dXJuIFt4LCB5LCB6XTtcbn07XG5cbmNvbnZlcnQubGFiLmxjaCA9IGZ1bmN0aW9uIChsYWIpIHtcblx0dmFyIGwgPSBsYWJbMF07XG5cdHZhciBhID0gbGFiWzFdO1xuXHR2YXIgYiA9IGxhYlsyXTtcblx0dmFyIGhyO1xuXHR2YXIgaDtcblx0dmFyIGM7XG5cblx0aHIgPSBNYXRoLmF0YW4yKGIsIGEpO1xuXHRoID0gaHIgKiAzNjAgLyAyIC8gTWF0aC5QSTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGMgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG5cblx0cmV0dXJuIFtsLCBjLCBoXTtcbn07XG5cbmNvbnZlcnQubGNoLmxhYiA9IGZ1bmN0aW9uIChsY2gpIHtcblx0dmFyIGwgPSBsY2hbMF07XG5cdHZhciBjID0gbGNoWzFdO1xuXHR2YXIgaCA9IGxjaFsyXTtcblx0dmFyIGE7XG5cdHZhciBiO1xuXHR2YXIgaHI7XG5cblx0aHIgPSBoIC8gMzYwICogMiAqIE1hdGguUEk7XG5cdGEgPSBjICogTWF0aC5jb3MoaHIpO1xuXHRiID0gYyAqIE1hdGguc2luKGhyKTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5yZ2IuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblx0dmFyIHZhbHVlID0gMSBpbiBhcmd1bWVudHMgPyBhcmd1bWVudHNbMV0gOiBjb252ZXJ0LnJnYi5oc3YoYXJncylbMl07IC8vIGhzdiAtPiBhbnNpMTYgb3B0aW1pemF0aW9uXG5cblx0dmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlIC8gNTApO1xuXG5cdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdHJldHVybiAzMDtcblx0fVxuXG5cdHZhciBhbnNpID0gMzBcblx0XHQrICgoTWF0aC5yb3VuZChiIC8gMjU1KSA8PCAyKVxuXHRcdHwgKE1hdGgucm91bmQoZyAvIDI1NSkgPDwgMSlcblx0XHR8IE1hdGgucm91bmQociAvIDI1NSkpO1xuXG5cdGlmICh2YWx1ZSA9PT0gMikge1xuXHRcdGFuc2kgKz0gNjA7XG5cdH1cblxuXHRyZXR1cm4gYW5zaTtcbn07XG5cbmNvbnZlcnQuaHN2LmFuc2kxNiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdC8vIG9wdGltaXphdGlvbiBoZXJlOyB3ZSBhbHJlYWR5IGtub3cgdGhlIHZhbHVlIGFuZCBkb24ndCBuZWVkIHRvIGdldFxuXHQvLyBpdCBjb252ZXJ0ZWQgZm9yIHVzLlxuXHRyZXR1cm4gY29udmVydC5yZ2IuYW5zaTE2KGNvbnZlcnQuaHN2LnJnYihhcmdzKSwgYXJnc1syXSk7XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMjU2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIHIgPSBhcmdzWzBdO1xuXHR2YXIgZyA9IGFyZ3NbMV07XG5cdHZhciBiID0gYXJnc1syXTtcblxuXHQvLyB3ZSB1c2UgdGhlIGV4dGVuZGVkIGdyZXlzY2FsZSBwYWxldHRlIGhlcmUsIHdpdGggdGhlIGV4Y2VwdGlvbiBvZlxuXHQvLyBibGFjayBhbmQgd2hpdGUuIG5vcm1hbCBwYWxldHRlIG9ubHkgaGFzIDQgZ3JleXNjYWxlIHNoYWRlcy5cblx0aWYgKHIgPT09IGcgJiYgZyA9PT0gYikge1xuXHRcdGlmIChyIDwgOCkge1xuXHRcdFx0cmV0dXJuIDE2O1xuXHRcdH1cblxuXHRcdGlmIChyID4gMjQ4KSB7XG5cdFx0XHRyZXR1cm4gMjMxO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLnJvdW5kKCgociAtIDgpIC8gMjQ3KSAqIDI0KSArIDIzMjtcblx0fVxuXG5cdHZhciBhbnNpID0gMTZcblx0XHQrICgzNiAqIE1hdGgucm91bmQociAvIDI1NSAqIDUpKVxuXHRcdCsgKDYgKiBNYXRoLnJvdW5kKGcgLyAyNTUgKiA1KSlcblx0XHQrIE1hdGgucm91bmQoYiAvIDI1NSAqIDUpO1xuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5hbnNpMTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0dmFyIGNvbG9yID0gYXJncyAlIDEwO1xuXG5cdC8vIGhhbmRsZSBncmV5c2NhbGVcblx0aWYgKGNvbG9yID09PSAwIHx8IGNvbG9yID09PSA3KSB7XG5cdFx0aWYgKGFyZ3MgPiA1MCkge1xuXHRcdFx0Y29sb3IgKz0gMy41O1xuXHRcdH1cblxuXHRcdGNvbG9yID0gY29sb3IgLyAxMC41ICogMjU1O1xuXG5cdFx0cmV0dXJuIFtjb2xvciwgY29sb3IsIGNvbG9yXTtcblx0fVxuXG5cdHZhciBtdWx0ID0gKH5+KGFyZ3MgPiA1MCkgKyAxKSAqIDAuNTtcblx0dmFyIHIgPSAoKGNvbG9yICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGcgPSAoKChjb2xvciA+PiAxKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cdHZhciBiID0gKCgoY29sb3IgPj4gMikgJiAxKSAqIG11bHQpICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LmFuc2kyNTYucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoYXJncyA+PSAyMzIpIHtcblx0XHR2YXIgYyA9IChhcmdzIC0gMjMyKSAqIDEwICsgODtcblx0XHRyZXR1cm4gW2MsIGMsIGNdO1xuXHR9XG5cblx0YXJncyAtPSAxNjtcblxuXHR2YXIgcmVtO1xuXHR2YXIgciA9IE1hdGguZmxvb3IoYXJncyAvIDM2KSAvIDUgKiAyNTU7XG5cdHZhciBnID0gTWF0aC5mbG9vcigocmVtID0gYXJncyAlIDM2KSAvIDYpIC8gNSAqIDI1NTtcblx0dmFyIGIgPSAocmVtICUgNikgLyA1ICogMjU1O1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oZXggPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgaW50ZWdlciA9ICgoTWF0aC5yb3VuZChhcmdzWzBdKSAmIDB4RkYpIDw8IDE2KVxuXHRcdCsgKChNYXRoLnJvdW5kKGFyZ3NbMV0pICYgMHhGRikgPDwgOClcblx0XHQrIChNYXRoLnJvdW5kKGFyZ3NbMl0pICYgMHhGRik7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LmhleC5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgbWF0Y2ggPSBhcmdzLnRvU3RyaW5nKDE2KS5tYXRjaCgvW2EtZjAtOV17Nn18W2EtZjAtOV17M30vaSk7XG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gWzAsIDAsIDBdO1xuXHR9XG5cblx0dmFyIGNvbG9yU3RyaW5nID0gbWF0Y2hbMF07XG5cblx0aWYgKG1hdGNoWzBdLmxlbmd0aCA9PT0gMykge1xuXHRcdGNvbG9yU3RyaW5nID0gY29sb3JTdHJpbmcuc3BsaXQoJycpLm1hcChmdW5jdGlvbiAoY2hhcikge1xuXHRcdFx0cmV0dXJuIGNoYXIgKyBjaGFyO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0dmFyIGludGVnZXIgPSBwYXJzZUludChjb2xvclN0cmluZywgMTYpO1xuXHR2YXIgciA9IChpbnRlZ2VyID4+IDE2KSAmIDB4RkY7XG5cdHZhciBnID0gKGludGVnZXIgPj4gOCkgJiAweEZGO1xuXHR2YXIgYiA9IGludGVnZXIgJiAweEZGO1xuXG5cdHJldHVybiBbciwgZywgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5oY2cgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cdHZhciBtYXggPSBNYXRoLm1heChNYXRoLm1heChyLCBnKSwgYik7XG5cdHZhciBtaW4gPSBNYXRoLm1pbihNYXRoLm1pbihyLCBnKSwgYik7XG5cdHZhciBjaHJvbWEgPSAobWF4IC0gbWluKTtcblx0dmFyIGdyYXlzY2FsZTtcblx0dmFyIGh1ZTtcblxuXHRpZiAoY2hyb21hIDwgMSkge1xuXHRcdGdyYXlzY2FsZSA9IG1pbiAvICgxIC0gY2hyb21hKTtcblx0fSBlbHNlIHtcblx0XHRncmF5c2NhbGUgPSAwO1xuXHR9XG5cblx0aWYgKGNocm9tYSA8PSAwKSB7XG5cdFx0aHVlID0gMDtcblx0fSBlbHNlXG5cdGlmIChtYXggPT09IHIpIHtcblx0XHRodWUgPSAoKGcgLSBiKSAvIGNocm9tYSkgJSA2O1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gZykge1xuXHRcdGh1ZSA9IDIgKyAoYiAtIHIpIC8gY2hyb21hO1xuXHR9IGVsc2Uge1xuXHRcdGh1ZSA9IDQgKyAociAtIGcpIC8gY2hyb21hICsgNDtcblx0fVxuXG5cdGh1ZSAvPSA2O1xuXHRodWUgJT0gMTtcblxuXHRyZXR1cm4gW2h1ZSAqIDM2MCwgY2hyb21hICogMTAwLCBncmF5c2NhbGUgKiAxMDBdO1xufTtcblxuY29udmVydC5oc2wuaGNnID0gZnVuY3Rpb24gKGhzbCkge1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBjID0gMTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChsIDwgMC41KSB7XG5cdFx0YyA9IDIuMCAqIHMgKiBsO1xuXHR9IGVsc2Uge1xuXHRcdGMgPSAyLjAgKiBzICogKDEuMCAtIGwpO1xuXHR9XG5cblx0aWYgKGMgPCAxLjApIHtcblx0XHRmID0gKGwgLSAwLjUgKiBjKSAvICgxLjAgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHNsWzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaHN2LmhjZyA9IGZ1bmN0aW9uIChoc3YpIHtcblx0dmFyIHMgPSBoc3ZbMV0gLyAxMDA7XG5cdHZhciB2ID0gaHN2WzJdIC8gMTAwO1xuXG5cdHZhciBjID0gcyAqIHY7XG5cdHZhciBmID0gMDtcblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHN2WzBdLCBjICogMTAwLCBmICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLnJnYiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGggPSBoY2dbMF0gLyAzNjA7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblxuXHRpZiAoYyA9PT0gMC4wKSB7XG5cdFx0cmV0dXJuIFtnICogMjU1LCBnICogMjU1LCBnICogMjU1XTtcblx0fVxuXG5cdHZhciBwdXJlID0gWzAsIDAsIDBdO1xuXHR2YXIgaGkgPSAoaCAlIDEpICogNjtcblx0dmFyIHYgPSBoaSAlIDE7XG5cdHZhciB3ID0gMSAtIHY7XG5cdHZhciBtZyA9IDA7XG5cblx0c3dpdGNoIChNYXRoLmZsb29yKGhpKSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gdjsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMTpcblx0XHRcdHB1cmVbMF0gPSB3OyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IDA7IGJyZWFrO1xuXHRcdGNhc2UgMjpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gMTsgcHVyZVsyXSA9IHY7IGJyZWFrO1xuXHRcdGNhc2UgMzpcblx0XHRcdHB1cmVbMF0gPSAwOyBwdXJlWzFdID0gdzsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGNhc2UgNDpcblx0XHRcdHB1cmVbMF0gPSB2OyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IDE7IGJyZWFrO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRwdXJlWzBdID0gMTsgcHVyZVsxXSA9IDA7IHB1cmVbMl0gPSB3O1xuXHR9XG5cblx0bWcgPSAoMS4wIC0gYykgKiBnO1xuXG5cdHJldHVybiBbXG5cdFx0KGMgKiBwdXJlWzBdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsxXSArIG1nKSAqIDI1NSxcblx0XHQoYyAqIHB1cmVbMl0gKyBtZykgKiAyNTVcblx0XTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzdiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciB2ID0gYyArIGcgKiAoMS4wIC0gYyk7XG5cdHZhciBmID0gMDtcblxuXHRpZiAodiA+IDAuMCkge1xuXHRcdGYgPSBjIC8gdjtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBmICogMTAwLCB2ICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmhzbCA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdHZhciBsID0gZyAqICgxLjAgLSBjKSArIDAuNSAqIGM7XG5cdHZhciBzID0gMDtcblxuXHRpZiAobCA+IDAuMCAmJiBsIDwgMC41KSB7XG5cdFx0cyA9IGMgLyAoMiAqIGwpO1xuXHR9IGVsc2Vcblx0aWYgKGwgPj0gMC41ICYmIGwgPCAxLjApIHtcblx0XHRzID0gYyAvICgyICogKDEgLSBsKSk7XG5cdH1cblxuXHRyZXR1cm4gW2hjZ1swXSwgcyAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhjZy5od2IgPSBmdW5jdGlvbiAoaGNnKSB7XG5cdHZhciBjID0gaGNnWzFdIC8gMTAwO1xuXHR2YXIgZyA9IGhjZ1syXSAvIDEwMDtcblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0cmV0dXJuIFtoY2dbMF0sICh2IC0gYykgKiAxMDAsICgxIC0gdikgKiAxMDBdO1xufTtcblxuY29udmVydC5od2IuaGNnID0gZnVuY3Rpb24gKGh3Yikge1xuXHR2YXIgdyA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGIgPSBod2JbMl0gLyAxMDA7XG5cdHZhciB2ID0gMSAtIGI7XG5cdHZhciBjID0gdiAtIHc7XG5cdHZhciBnID0gMDtcblxuXHRpZiAoYyA8IDEpIHtcblx0XHRnID0gKHYgLSBjKSAvICgxIC0gYyk7XG5cdH1cblxuXHRyZXR1cm4gW2h3YlswXSwgYyAqIDEwMCwgZyAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmFwcGxlLnJnYiA9IGZ1bmN0aW9uIChhcHBsZSkge1xuXHRyZXR1cm4gWyhhcHBsZVswXSAvIDY1NTM1KSAqIDI1NSwgKGFwcGxlWzFdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMl0gLyA2NTUzNSkgKiAyNTVdO1xufTtcblxuY29udmVydC5yZ2IuYXBwbGUgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHJldHVybiBbKHJnYlswXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsxXSAvIDI1NSkgKiA2NTUzNSwgKHJnYlsyXSAvIDI1NSkgKiA2NTUzNV07XG59O1xuXG5jb252ZXJ0LmdyYXkucmdiID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFthcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1LCBhcmdzWzBdIC8gMTAwICogMjU1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oc2wgPSBjb252ZXJ0LmdyYXkuaHN2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0cmV0dXJuIFswLCAwLCBhcmdzWzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5od2IgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gWzAsIDEwMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkuY215ayA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMCwgMCwgZ3JheVswXV07XG59O1xuXG5jb252ZXJ0LmdyYXkubGFiID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFtncmF5WzBdLCAwLCAwXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5oZXggPSBmdW5jdGlvbiAoZ3JheSkge1xuXHR2YXIgdmFsID0gTWF0aC5yb3VuZChncmF5WzBdIC8gMTAwICogMjU1KSAmIDB4RkY7XG5cdHZhciBpbnRlZ2VyID0gKHZhbCA8PCAxNikgKyAodmFsIDw8IDgpICsgdmFsO1xuXG5cdHZhciBzdHJpbmcgPSBpbnRlZ2VyLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHRyZXR1cm4gJzAwMDAwMCcuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xufTtcblxuY29udmVydC5yZ2IuZ3JheSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHZhbCA9IChyZ2JbMF0gKyByZ2JbMV0gKyByZ2JbMl0pIC8gMztcblx0cmV0dXJuIFt2YWwgLyAyNTUgKiAxMDBdO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjb252ZXJzaW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29udmVyc2lvbnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzXCIpO1xudmFyIHJvdXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9yb3V0ZSAqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvcm91dGUuanNcIik7XG5cbnZhciBjb252ZXJ0ID0ge307XG5cbnZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9ucyk7XG5cbmZ1bmN0aW9uIHdyYXBSYXcoZm4pIHtcblx0dmFyIHdyYXBwZWRGbiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgPT09IHVuZGVmaW5lZCB8fCBhcmdzID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gYXJncztcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmbihhcmdzKTtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbmZ1bmN0aW9uIHdyYXBSb3VuZGVkKGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHR2YXIgcmVzdWx0ID0gZm4oYXJncyk7XG5cblx0XHQvLyB3ZSdyZSBhc3N1bWluZyB0aGUgcmVzdWx0IGlzIGFuIGFycmF5IGhlcmUuXG5cdFx0Ly8gc2VlIG5vdGljZSBpbiBjb252ZXJzaW9ucy5qczsgZG9uJ3QgdXNlIGJveCB0eXBlc1xuXHRcdC8vIGluIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxuXHRcdGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuXHRcdFx0Zm9yICh2YXIgbGVuID0gcmVzdWx0Lmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBNYXRoLnJvdW5kKHJlc3VsdFtpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvLyBwcmVzZXJ2ZSAuY29udmVyc2lvbiBwcm9wZXJ0eSBpZiB0aGVyZSBpcyBvbmVcblx0aWYgKCdjb252ZXJzaW9uJyBpbiBmbikge1xuXHRcdHdyYXBwZWRGbi5jb252ZXJzaW9uID0gZm4uY29udmVyc2lvbjtcblx0fVxuXG5cdHJldHVybiB3cmFwcGVkRm47XG59XG5cbm1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChmcm9tTW9kZWwpIHtcblx0Y29udmVydFtmcm9tTW9kZWxdID0ge307XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnZlcnRbZnJvbU1vZGVsXSwgJ2NoYW5uZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmNoYW5uZWxzfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGNvbnZlcnNpb25zW2Zyb21Nb2RlbF0ubGFiZWxzfSk7XG5cblx0dmFyIHJvdXRlcyA9IHJvdXRlKGZyb21Nb2RlbCk7XG5cdHZhciByb3V0ZU1vZGVscyA9IE9iamVjdC5rZXlzKHJvdXRlcyk7XG5cblx0cm91dGVNb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAodG9Nb2RlbCkge1xuXHRcdHZhciBmbiA9IHJvdXRlc1t0b01vZGVsXTtcblxuXHRcdGNvbnZlcnRbZnJvbU1vZGVsXVt0b01vZGVsXSA9IHdyYXBSb3VuZGVkKGZuKTtcblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0ucmF3ID0gd3JhcFJhdyhmbik7XG5cdH0pO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9yb3V0ZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjb252ZXJzaW9ucyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY29udmVyc2lvbnMgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L2NvbnZlcnNpb25zLmpzXCIpO1xuXG4vKlxuXHR0aGlzIGZ1bmN0aW9uIHJvdXRlcyBhIG1vZGVsIHRvIGFsbCBvdGhlciBtb2RlbHMuXG5cblx0YWxsIGZ1bmN0aW9ucyB0aGF0IGFyZSByb3V0ZWQgaGF2ZSBhIHByb3BlcnR5IGAuY29udmVyc2lvbmAgYXR0YWNoZWRcblx0dG8gdGhlIHJldHVybmVkIHN5bnRoZXRpYyBmdW5jdGlvbi4gVGhpcyBwcm9wZXJ0eSBpcyBhbiBhcnJheVxuXHRvZiBzdHJpbmdzLCBlYWNoIHdpdGggdGhlIHN0ZXBzIGluIGJldHdlZW4gdGhlICdmcm9tJyBhbmQgJ3RvJ1xuXHRjb2xvciBtb2RlbHMgKGluY2x1c2l2ZSkuXG5cblx0Y29udmVyc2lvbnMgdGhhdCBhcmUgbm90IHBvc3NpYmxlIHNpbXBseSBhcmUgbm90IGluY2x1ZGVkLlxuKi9cblxuZnVuY3Rpb24gYnVpbGRHcmFwaCgpIHtcblx0dmFyIGdyYXBoID0ge307XG5cdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9vYmplY3Qta2V5cy12cy1mb3ItaW4td2l0aC1jbG9zdXJlLzNcblx0dmFyIG1vZGVscyA9IE9iamVjdC5rZXlzKGNvbnZlcnNpb25zKTtcblxuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0Z3JhcGhbbW9kZWxzW2ldXSA9IHtcblx0XHRcdC8vIGh0dHA6Ly9qc3BlcmYuY29tLzEtdnMtaW5maW5pdHlcblx0XHRcdC8vIG1pY3JvLW9wdCwgYnV0IHRoaXMgaXMgc2ltcGxlLlxuXHRcdFx0ZGlzdGFuY2U6IC0xLFxuXHRcdFx0cGFyZW50OiBudWxsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQnJlYWR0aC1maXJzdF9zZWFyY2hcbmZ1bmN0aW9uIGRlcml2ZUJGUyhmcm9tTW9kZWwpIHtcblx0dmFyIGdyYXBoID0gYnVpbGRHcmFwaCgpO1xuXHR2YXIgcXVldWUgPSBbZnJvbU1vZGVsXTsgLy8gdW5zaGlmdCAtPiBxdWV1ZSAtPiBwb3BcblxuXHRncmFwaFtmcm9tTW9kZWxdLmRpc3RhbmNlID0gMDtcblxuXHR3aGlsZSAocXVldWUubGVuZ3RoKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSBxdWV1ZS5wb3AoKTtcblx0XHR2YXIgYWRqYWNlbnRzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnNbY3VycmVudF0pO1xuXG5cdFx0Zm9yICh2YXIgbGVuID0gYWRqYWNlbnRzLmxlbmd0aCwgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dmFyIGFkamFjZW50ID0gYWRqYWNlbnRzW2ldO1xuXHRcdFx0dmFyIG5vZGUgPSBncmFwaFthZGphY2VudF07XG5cblx0XHRcdGlmIChub2RlLmRpc3RhbmNlID09PSAtMSkge1xuXHRcdFx0XHRub2RlLmRpc3RhbmNlID0gZ3JhcGhbY3VycmVudF0uZGlzdGFuY2UgKyAxO1xuXHRcdFx0XHRub2RlLnBhcmVudCA9IGN1cnJlbnQ7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoYWRqYWNlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBncmFwaDtcbn1cblxuZnVuY3Rpb24gbGluayhmcm9tLCB0bykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRyZXR1cm4gdG8oZnJvbShhcmdzKSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHdyYXBDb252ZXJzaW9uKHRvTW9kZWwsIGdyYXBoKSB7XG5cdHZhciBwYXRoID0gW2dyYXBoW3RvTW9kZWxdLnBhcmVudCwgdG9Nb2RlbF07XG5cdHZhciBmbiA9IGNvbnZlcnNpb25zW2dyYXBoW3RvTW9kZWxdLnBhcmVudF1bdG9Nb2RlbF07XG5cblx0dmFyIGN1ciA9IGdyYXBoW3RvTW9kZWxdLnBhcmVudDtcblx0d2hpbGUgKGdyYXBoW2N1cl0ucGFyZW50KSB7XG5cdFx0cGF0aC51bnNoaWZ0KGdyYXBoW2N1cl0ucGFyZW50KTtcblx0XHRmbiA9IGxpbmsoY29udmVyc2lvbnNbZ3JhcGhbY3VyXS5wYXJlbnRdW2N1cl0sIGZuKTtcblx0XHRjdXIgPSBncmFwaFtjdXJdLnBhcmVudDtcblx0fVxuXG5cdGZuLmNvbnZlcnNpb24gPSBwYXRoO1xuXHRyZXR1cm4gZm47XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBkZXJpdmVCRlMoZnJvbU1vZGVsKTtcblx0dmFyIGNvbnZlcnNpb24gPSB7fTtcblxuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoZ3JhcGgpO1xuXHRmb3IgKHZhciBsZW4gPSBtb2RlbHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0dmFyIHRvTW9kZWwgPSBtb2RlbHNbaV07XG5cdFx0dmFyIG5vZGUgPSBncmFwaFt0b01vZGVsXTtcblxuXHRcdGlmIChub2RlLnBhcmVudCA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gbm8gcG9zc2libGUgY29udmVyc2lvbiwgb3IgdGhpcyBub2RlIGlzIHRoZSBzb3VyY2UgbW9kZWwuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb252ZXJzaW9uW3RvTW9kZWxdID0gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpO1xuXHR9XG5cblx0cmV0dXJuIGNvbnZlcnNpb247XG59O1xuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qIE1JVCBsaWNlbnNlICovXG52YXIgY29sb3JOYW1lcyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yLW5hbWUgKi8gXCIuL25vZGVfbW9kdWxlcy9jb2xvci1zdHJpbmcvbm9kZV9tb2R1bGVzL2NvbG9yLW5hbWUvaW5kZXguanNcIik7XG52YXIgc3dpenpsZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHNpbXBsZS1zd2l6emxlICovIFwiLi9ub2RlX21vZHVsZXMvc2ltcGxlLXN3aXp6bGUvaW5kZXguanNcIik7XG5cbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcblxuLy8gY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcblx0aWYgKGNvbG9yTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0XHRyZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xuXHR9XG59XG5cbnZhciBjcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHR0bzoge30sXG5cdGdldDoge31cbn07XG5cbmNzLmdldCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIHByZWZpeCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0dmFyIHZhbDtcblx0dmFyIG1vZGVsO1xuXHRzd2l0Y2ggKHByZWZpeCkge1xuXHRcdGNhc2UgJ2hzbCc6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHNsKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdoc2wnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaHdiJzpcblx0XHRcdHZhbCA9IGNzLmdldC5od2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2h3Yic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFsID0gY3MuZ2V0LnJnYihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAncmdiJztcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0aWYgKCF2YWwpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7bW9kZWw6IG1vZGVsLCB2YWx1ZTogdmFsfTtcbn07XG5cbmNzLmdldC5yZ2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgYWJiciA9IC9eIyhbYS1mMC05XXszLDR9KSQvaTtcblx0dmFyIGhleCA9IC9eIyhbYS1mMC05XXs2fSkoW2EtZjAtOV17Mn0pPyQvaTtcblx0dmFyIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIga2V5d29yZCA9IC8oXFxEKykvO1xuXG5cdHZhciByZ2IgPSBbMCwgMCwgMCwgMV07XG5cdHZhciBtYXRjaDtcblx0dmFyIGk7XG5cdHZhciBoZXhBbHBoYTtcblxuXHRpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuXHRcdGhleEFscGhhID0gbWF0Y2hbMl07XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9zbGljZS12cy1zdWJzdHItdnMtc3Vic3RyaW5nLW1ldGhvZHMtbG9uZy1zdHJpbmcvMTlcblx0XHRcdHZhciBpMiA9IGkgKiAyO1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaTIsIGkyICsgMiksIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicikpIHtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXHRcdGhleEFscGhhID0gbWF0Y2hbM107XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSArIGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0sIDApO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdID09PSAndHJhbnNwYXJlbnQnKSB7XG5cdFx0XHRyZXR1cm4gWzAsIDAsIDAsIDBdO1xuXHRcdH1cblxuXHRcdHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuXG5cdFx0aWYgKCFyZ2IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJnYlszXSA9IDE7XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHJnYltpXSA9IGNsYW1wKHJnYltpXSwgMCwgMjU1KTtcblx0fVxuXHRyZ2JbM10gPSBjbGFtcChyZ2JbM10sIDAsIDEpO1xuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jcy5nZXQuaHNsID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/KD86XFxkKlxcLik/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKHBhcnNlRmxvYXQobWF0Y2hbMV0pICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgcyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBsID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXG5cdFx0cmV0dXJuIFtoLCBzLCBsLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MuZ2V0Lmh3YiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQqW1xcLl0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKChwYXJzZUZsb2F0KG1hdGNoWzFdKSAlIDM2MCkgKyAzNjApICUgMzYwO1xuXHRcdHZhciB3ID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGIgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cdFx0cmV0dXJuIFtoLCB3LCBiLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MudG8uaGV4ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gKFxuXHRcdCcjJyArXG5cdFx0aGV4RG91YmxlKHJnYmFbMF0pICtcblx0XHRoZXhEb3VibGUocmdiYVsxXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzJdKSArXG5cdFx0KHJnYmFbM10gPCAxXG5cdFx0XHQ/IChoZXhEb3VibGUoTWF0aC5yb3VuZChyZ2JhWzNdICogMjU1KSkpXG5cdFx0XHQ6ICcnKVxuXHQpO1xufTtcblxuY3MudG8ucmdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJyknXG5cdFx0OiAncmdiYSgnICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLnJnYi5wZXJjZW50ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgciA9IE1hdGgucm91bmQocmdiYVswXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBnID0gTWF0aC5yb3VuZChyZ2JhWzFdIC8gMjU1ICogMTAwKTtcblx0dmFyIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0gLyAyNTUgKiAxMDApO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclKSdcblx0XHQ6ICdyZ2JhKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8uaHNsID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHNsYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblx0cmV0dXJuIGhzbGEubGVuZ3RoIDwgNCB8fCBoc2xhWzNdID09PSAxXG5cdFx0PyAnaHNsKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSknXG5cdFx0OiAnaHNsYSgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUsICcgKyBoc2xhWzNdICsgJyknO1xufTtcblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmNzLnRvLmh3YiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGh3YmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIGEgPSAnJztcblx0aWYgKGh3YmEubGVuZ3RoID49IDQgJiYgaHdiYVszXSAhPT0gMSkge1xuXHRcdGEgPSAnLCAnICsgaHdiYVszXTtcblx0fVxuXG5cdHJldHVybiAnaHdiKCcgKyBod2JhWzBdICsgJywgJyArIGh3YmFbMV0gKyAnJSwgJyArIGh3YmFbMl0gKyAnJScgKyBhICsgJyknO1xufTtcblxuY3MudG8ua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufTtcblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG5cdHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gJzAnICsgc3RyIDogc3RyO1xufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL25vZGVfbW9kdWxlcy9jb2xvci1uYW1lL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIGNvbG9yU3RyaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgY29sb3Itc3RyaW5nICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3Itc3RyaW5nL2luZGV4LmpzXCIpO1xudmFyIGNvbnZlcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBjb2xvci1jb252ZXJ0ICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9pbmRleC5qc1wiKTtcblxudmFyIF9zbGljZSA9IFtdLnNsaWNlO1xuXG52YXIgc2tpcHBlZE1vZGVscyA9IFtcblx0Ly8gdG8gYmUgaG9uZXN0LCBJIGRvbid0IHJlYWxseSBmZWVsIGxpa2Uga2V5d29yZCBiZWxvbmdzIGluIGNvbG9yIGNvbnZlcnQsIGJ1dCBlaC5cblx0J2tleXdvcmQnLFxuXG5cdC8vIGdyYXkgY29uZmxpY3RzIHdpdGggc29tZSBtZXRob2QgbmFtZXMsIGFuZCBoYXMgaXRzIG93biBtZXRob2QgZGVmaW5lZC5cblx0J2dyYXknLFxuXG5cdC8vIHNob3VsZG4ndCByZWFsbHkgYmUgaW4gY29sb3ItY29udmVydCBlaXRoZXIuLi5cblx0J2hleCdcbl07XG5cbnZhciBoYXNoZWRNb2RlbEtleXMgPSB7fTtcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGhhc2hlZE1vZGVsS2V5c1tfc2xpY2UuY2FsbChjb252ZXJ0W21vZGVsXS5sYWJlbHMpLnNvcnQoKS5qb2luKCcnKV0gPSBtb2RlbDtcbn0pO1xuXG52YXIgbGltaXRlcnMgPSB7fTtcblxuZnVuY3Rpb24gQ29sb3Iob2JqLCBtb2RlbCkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmosIG1vZGVsKTtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiBtb2RlbCBpbiBza2lwcGVkTW9kZWxzKSB7XG5cdFx0bW9kZWwgPSBudWxsO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmICEobW9kZWwgaW4gY29udmVydCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW9kZWw6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHR2YXIgaTtcblx0dmFyIGNoYW5uZWxzO1xuXG5cdGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gWzAsIDAsIDBdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHRoaXMubW9kZWwgPSBvYmoubW9kZWw7XG5cdFx0dGhpcy5jb2xvciA9IG9iai5jb2xvci5zbGljZSgpO1xuXHRcdHRoaXMudmFscGhhID0gb2JqLnZhbHBoYTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHZhciByZXN1bHQgPSBjb2xvclN0cmluZy5nZXQob2JqKTtcblx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZzogJyArIG9iaik7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IHJlc3VsdC5tb2RlbDtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dGhpcy5jb2xvciA9IHJlc3VsdC52YWx1ZS5zbGljZSgwLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2YgcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyByZXN1bHQudmFsdWVbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmIChvYmoubGVuZ3RoKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG1vZGVsIHx8ICdyZ2InO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbmV3QXJyID0gX3NsaWNlLmNhbGwob2JqLCAwLCBjaGFubmVscyk7XG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShuZXdBcnIsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmpbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IG9ialtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG5cdFx0Ly8gdGhpcyBpcyBhbHdheXMgUkdCIC0gY2FuIGJlIGNvbnZlcnRlZCBsYXRlciBvbi5cblx0XHRvYmogJj0gMHhGRkZGRkY7XG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbXG5cdFx0XHQob2JqID4+IDE2KSAmIDB4RkYsXG5cdFx0XHQob2JqID4+IDgpICYgMHhGRixcblx0XHRcdG9iaiAmIDB4RkZcblx0XHRdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cdFx0aWYgKCdhbHBoYScgaW4gb2JqKSB7XG5cdFx0XHRrZXlzLnNwbGljZShrZXlzLmluZGV4T2YoJ2FscGhhJyksIDEpO1xuXHRcdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqLmFscGhhID09PSAnbnVtYmVyJyA/IG9iai5hbHBoYSA6IDA7XG5cdFx0fVxuXG5cdFx0dmFyIGhhc2hlZEtleXMgPSBrZXlzLnNvcnQoKS5qb2luKCcnKTtcblx0XHRpZiAoIShoYXNoZWRLZXlzIGluIGhhc2hlZE1vZGVsS2V5cykpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IGhhc2hlZE1vZGVsS2V5c1toYXNoZWRLZXlzXTtcblxuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblx0XHR2YXIgY29sb3IgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb2xvci5wdXNoKG9ialtsYWJlbHNbaV1dKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KGNvbG9yKTtcblx0fVxuXG5cdC8vIHBlcmZvcm0gbGltaXRhdGlvbnMgKGNsYW1waW5nLCBldGMuKVxuXHRpZiAobGltaXRlcnNbdGhpcy5tb2RlbF0pIHtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHZhciBsaW1pdCA9IGxpbWl0ZXJzW3RoaXMubW9kZWxdW2ldO1xuXHRcdFx0aWYgKGxpbWl0KSB7XG5cdFx0XHRcdHRoaXMuY29sb3JbaV0gPSBsaW1pdCh0aGlzLmNvbG9yW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aGlzLnZhbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMudmFscGhhKSk7XG5cblx0aWYgKE9iamVjdC5mcmVlemUpIHtcblx0XHRPYmplY3QuZnJlZXplKHRoaXMpO1xuXHR9XG59XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0dG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJpbmcoKTtcblx0fSxcblxuXHR0b0pTT046IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpc1t0aGlzLm1vZGVsXSgpO1xuXHR9LFxuXG5cdHN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5tb2RlbCBpbiBjb2xvclN0cmluZy50byA/IHRoaXMgOiB0aGlzLnJnYigpO1xuXHRcdHNlbGYgPSBzZWxmLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvW3NlbGYubW9kZWxdKGFyZ3MpO1xuXHR9LFxuXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMucmdiKCkucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8ucmdiLnBlcmNlbnQoYXJncyk7XG5cdH0sXG5cblx0YXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxwaGEgPT09IDEgPyB0aGlzLmNvbG9yLnNsaWNlKCkgOiB0aGlzLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdH0sXG5cblx0b2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHRyZXN1bHRbbGFiZWxzW2ldXSA9IHRoaXMuY29sb3JbaV07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXN1bHQuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXG5cdHVuaXRBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJnYlswXSAvPSAyNTU7XG5cdFx0cmdiWzFdIC89IDI1NTtcblx0XHRyZ2JbMl0gLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IucHVzaCh0aGlzLnZhbHBoYSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHR1bml0T2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkub2JqZWN0KCk7XG5cdFx0cmdiLnIgLz0gMjU1O1xuXHRcdHJnYi5nIC89IDI1NTtcblx0XHRyZ2IuYiAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0cm91bmQ6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHRwbGFjZXMgPSBNYXRoLm1heChwbGFjZXMgfHwgMCwgMCk7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLm1hcChyb3VuZFRvUGxhY2UocGxhY2VzKSkuY29uY2F0KHRoaXMudmFscGhhKSwgdGhpcy5tb2RlbCk7XG5cdH0sXG5cblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLmNvbmNhdChNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWwpKSksIHRoaXMubW9kZWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnZhbHBoYTtcblx0fSxcblxuXHQvLyByZ2Jcblx0cmVkOiBnZXRzZXQoJ3JnYicsIDAsIG1heGZuKDI1NSkpLFxuXHRncmVlbjogZ2V0c2V0KCdyZ2InLCAxLCBtYXhmbigyNTUpKSxcblx0Ymx1ZTogZ2V0c2V0KCdyZ2InLCAyLCBtYXhmbigyNTUpKSxcblxuXHRodWU6IGdldHNldChbJ2hzbCcsICdoc3YnLCAnaHNsJywgJ2h3YicsICdoY2cnXSwgMCwgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gKCh2YWwgJSAzNjApICsgMzYwKSAlIDM2MDsgfSksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYnJhY2Utc3R5bGVcblxuXHRzYXR1cmF0aW9ubDogZ2V0c2V0KCdoc2wnLCAxLCBtYXhmbigxMDApKSxcblx0bGlnaHRuZXNzOiBnZXRzZXQoJ2hzbCcsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHNhdHVyYXRpb252OiBnZXRzZXQoJ2hzdicsIDEsIG1heGZuKDEwMCkpLFxuXHR2YWx1ZTogZ2V0c2V0KCdoc3YnLCAyLCBtYXhmbigxMDApKSxcblxuXHRjaHJvbWE6IGdldHNldCgnaGNnJywgMSwgbWF4Zm4oMTAwKSksXG5cdGdyYXk6IGdldHNldCgnaGNnJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0d2hpdGU6IGdldHNldCgnaHdiJywgMSwgbWF4Zm4oMTAwKSksXG5cdHdibGFjazogZ2V0c2V0KCdod2InLCAyLCBtYXhmbigxMDApKSxcblxuXHRjeWFuOiBnZXRzZXQoJ2NteWsnLCAwLCBtYXhmbigxMDApKSxcblx0bWFnZW50YTogZ2V0c2V0KCdjbXlrJywgMSwgbWF4Zm4oMTAwKSksXG5cdHllbGxvdzogZ2V0c2V0KCdjbXlrJywgMiwgbWF4Zm4oMTAwKSksXG5cdGJsYWNrOiBnZXRzZXQoJ2NteWsnLCAzLCBtYXhmbigxMDApKSxcblxuXHR4OiBnZXRzZXQoJ3h5eicsIDAsIG1heGZuKDEwMCkpLFxuXHR5OiBnZXRzZXQoJ3h5eicsIDEsIG1heGZuKDEwMCkpLFxuXHR6OiBnZXRzZXQoJ3h5eicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGw6IGdldHNldCgnbGFiJywgMCwgbWF4Zm4oMTAwKSksXG5cdGE6IGdldHNldCgnbGFiJywgMSksXG5cdGI6IGdldHNldCgnbGFiJywgMiksXG5cblx0a2V5d29yZDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnZlcnRbdGhpcy5tb2RlbF0ua2V5d29yZCh0aGlzLmNvbG9yKTtcblx0fSxcblxuXHRoZXg6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5oZXgodGhpcy5yZ2IoKS5yb3VuZCgpLmNvbG9yKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZXR1cm4gKChyZ2JbMF0gJiAweEZGKSA8PCAxNikgfCAoKHJnYlsxXSAmIDB4RkYpIDw8IDgpIHwgKHJnYlsyXSAmIDB4RkYpO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcblx0fSxcblxuXHRjb250cmFzdDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWZcblx0XHR2YXIgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuXHRcdHZhciBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcblxuXHRcdGlmIChsdW0xID4gbHVtMikge1xuXHRcdFx0cmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpO1xuXHRcdH1cblxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGlzRGFyazogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFlJUSBlcXVhdGlvbiBmcm9tIGh0dHA6Ly8yNHdheXMub3JnLzIwMTAvY2FsY3VsYXRpbmctY29sb3ItY29udHJhc3Rcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0aXNMaWdodDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAhdGhpcy5pc0RhcmsoKTtcblx0fSxcblxuXHRuZWdhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiLmNvbG9yW2ldID0gMjU1IC0gcmdiLmNvbG9yW2ldO1xuXHRcdH1cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdGxpZ2h0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSArPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRhcmtlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdIC09IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSArPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRlc2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSAtPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHdoaXRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzFdICs9IGh3Yi5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzJdICs9IGh3Yi5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0Z3JheXNjYWxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0cmV0dXJuIENvbG9yLnJnYih2YWwsIHZhbCwgdmFsKTtcblx0fSxcblxuXHRmYWRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSAtICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0b3BhcXVlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgKyAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdHJvdGF0ZTogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHR2YXIgaHVlID0gaHNsLmNvbG9yWzBdO1xuXHRcdGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcblx0XHRodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuXHRcdGhzbC5jb2xvclswXSA9IGh1ZTtcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdC8vIHBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuXHRcdHZhciBjb2xvcjEgPSBtaXhpbkNvbG9yLnJnYigpO1xuXHRcdHZhciBjb2xvcjIgPSB0aGlzLnJnYigpO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gQ29sb3IucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpLFxuXHRcdFx0XHRjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9XG59O1xuXG4vLyBtb2RlbCBjb252ZXJzaW9uIG1ldGhvZHMgYW5kIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGlmIChza2lwcGVkTW9kZWxzLmluZGV4T2YobW9kZWwpICE9PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXG5cdC8vIGNvbnZlcnNpb24gbWV0aG9kc1xuXHRDb2xvci5wcm90b3R5cGVbbW9kZWxdID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzLm1vZGVsID09PSBtb2RlbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihhcmd1bWVudHMsIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3QWxwaGEgPSB0eXBlb2YgYXJndW1lbnRzW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBjaGFubmVscyA6IHRoaXMudmFscGhhO1xuXHRcdHJldHVybiBuZXcgQ29sb3IoYXNzZXJ0QXJyYXkoY29udmVydFt0aGlzLm1vZGVsXVttb2RlbF0ucmF3KHRoaXMuY29sb3IpKS5jb25jYXQobmV3QWxwaGEpLCBtb2RlbCk7XG5cdH07XG5cblx0Ly8gJ3N0YXRpYycgY29uc3RydWN0aW9uIG1ldGhvZHNcblx0Q29sb3JbbW9kZWxdID0gZnVuY3Rpb24gKGNvbG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbG9yID0gemVyb0FycmF5KF9zbGljZS5jYWxsKGFyZ3VtZW50cyksIGNoYW5uZWxzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihjb2xvciwgbW9kZWwpO1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIHJvdW5kVG8obnVtLCBwbGFjZXMpIHtcblx0cmV0dXJuIE51bWJlcihudW0udG9GaXhlZChwbGFjZXMpKTtcbn1cblxuZnVuY3Rpb24gcm91bmRUb1BsYWNlKHBsYWNlcykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG51bSkge1xuXHRcdHJldHVybiByb3VuZFRvKG51bSwgcGxhY2VzKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0c2V0KG1vZGVsLCBjaGFubmVsLCBtb2RpZmllcikge1xuXHRtb2RlbCA9IEFycmF5LmlzQXJyYXkobW9kZWwpID8gbW9kZWwgOiBbbW9kZWxdO1xuXG5cdG1vZGVsLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcblx0XHQobGltaXRlcnNbbV0gfHwgKGxpbWl0ZXJzW21dID0gW10pKVtjaGFubmVsXSA9IG1vZGlmaWVyO1xuXHR9KTtcblxuXHRtb2RlbCA9IG1vZGVsWzBdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0dmFyIHJlc3VsdDtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdFx0dmFsID0gbW9kaWZpZXIodmFsKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKTtcblx0XHRcdHJlc3VsdC5jb2xvcltjaGFubmVsXSA9IHZhbDtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKS5jb2xvcltjaGFubmVsXTtcblx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdHJlc3VsdCA9IG1vZGlmaWVyKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn1cblxuZnVuY3Rpb24gbWF4Zm4obWF4KSB7XG5cdHJldHVybiBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIHYpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QXJyYXkodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXTtcbn1cblxuZnVuY3Rpb24gemVyb0FycmF5KGFyciwgbGVuZ3RoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodHlwZW9mIGFycltpXSAhPT0gJ251bWJlcicpIHtcblx0XHRcdGFycltpXSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9pcy1hcnJheWlzaC9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9pcy1hcnJheWlzaC9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJyYXlpc2gob2JqKSB7XG5cdGlmICghb2JqIHx8IHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkob2JqKSB8fFxuXHRcdChvYmoubGVuZ3RoID49IDAgJiYgKG9iai5zcGxpY2UgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuXHRcdFx0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCAob2JqLmxlbmd0aCAtIDEpKSAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPT0gJ1N0cmluZycpKSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zd2l6emxlL2luZGV4LmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3NpbXBsZS1zd2l6emxlL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBpc0FycmF5aXNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgaXMtYXJyYXlpc2ggKi8gXCIuL25vZGVfbW9kdWxlcy9pcy1hcnJheWlzaC9pbmRleC5qc1wiKTtcblxudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBzd2l6emxlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzd2l6emxlKGFyZ3MpIHtcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciBhcmcgPSBhcmdzW2ldO1xuXG5cdFx0aWYgKGlzQXJyYXlpc2goYXJnKSkge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vamF2YXNjcmlwdC1hcnJheS1jb25jYXQtdnMtcHVzaC85OFxuXHRcdFx0cmVzdWx0cyA9IGNvbmNhdC5jYWxsKHJlc3VsdHMsIHNsaWNlLmNhbGwoYXJnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuc3dpenpsZS53cmFwID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZuKHN3aXp6bGUoYXJndW1lbnRzKSk7XG5cdH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9zcmMvZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBEeW5hbWljSGVhdExheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWFya2VyX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi4vbWFya2VyL01hcmtlcnNMYXllciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHNcIik7XG5cbmNsYXNzIER5bmFtaWNIZWF0TGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZHluYW1pY0RhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5keW5hbWljRGF0YUxpc3QgPSBkeW5hbWljRGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuYztcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IHRydWU7XG4gICAgfVxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmF1dG8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUGF1c2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKiog5pKt5pS+5a6M5q+VICovXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RlcCA+PSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuZ290b1N0ZXAodGhpcy5jdXJyZW50U3RlcCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc1BhdXNlID0gdHJ1ZTtcbiAgICB9XG4gICAgcHJldigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcC0tO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID1cbiAgICAgICAgICAgICh0aGlzLmN1cnJlbnRTdGVwICsgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoKSAlXG4gICAgICAgICAgICAgICAgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIH1cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKys7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSB0aGlzLmN1cnJlbnRTdGVwICUgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoO1xuICAgICAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIH1cbiAgICBnb3RvU3RlcChzdGVwKSB7XG4gICAgICAgIGlmIChzdGVwIDwgMCB8fCBzdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBnb3RvU3RlcCgke3N0ZXB9KTogc3RlcCBpcyBvdXQgb2YgaW5kZXggYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllci5zZXREYXRhKHRoaXMuZHluYW1pY0RhdGFMaXN0W3N0ZXBdKTtcbiAgICAgICAgdGhpcy5sYXllci5kcmF3KCk7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRMYXllcigpO1xuICAgICAgICB0aGlzLmxheWVyLmRyYXcoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGluaXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIGF1dG86IGZhbHNlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDEwMDAsXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRMYXllcigpIHtcbiAgICAgICAgY29uc3QgbWFya2Vyc0xheWVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJlbmRlclR5cGU6ICdoZWF0JyxcbiAgICAgICAgICAgIGhlYXRPcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGF5ZXIgPSBuZXcgX21hcmtlcl9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0odGhpcy5tYXAsIHRoaXMuZHluYW1pY0RhdGFMaXN0WzBdLCBtYXJrZXJzTGF5ZXJPcHRpb25zLCB0aGlzLmNoYW5uZWxGdW5jKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXI7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL2luZGV4LnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQsIE1hcmtlciwgTWFya2Vyc0xheWVyLCBNYXJrZXJzQnVmZmVyTGF5ZXIsIFBvbHlsaW5lLCBQb2x5bGluZXNMYXllciwgUG9seWxpbmVzQnVmZmVyTGF5ZXIsIFBvbHlnb24sIFBvbHlnb25zTGF5ZXIsIEdyaWRzTGF5ZXIsIER5bmFtaWNIZWF0TGF5ZXIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX21hcmtlcl9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbWFya2VyL01hcmtlciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJNYXJrZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfbWFya2VyX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWFya2VyX01hcmtlcnNMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9tYXJrZXIvTWFya2Vyc0xheWVyICovIFwiLi9zcmMvbWFya2VyL01hcmtlcnNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIk1hcmtlcnNMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9tYXJrZXJfTWFya2Vyc0J1ZmZlckxheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTWFya2Vyc0J1ZmZlckxheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX21hcmtlcl9NYXJrZXJzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlsaW5lX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlsaW5lL1BvbHlsaW5lICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5bGluZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5bGluZV9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWxpbmVfUG9seWxpbmVzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIgKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlsaW5lc0xheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlsaW5lX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5bGluZV9Qb2x5bGluZXNCdWZmZXJMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllciAqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0J1ZmZlckxheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiUG9seWxpbmVzQnVmZmVyTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWxpbmVfUG9seWxpbmVzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9wb2x5Z29uL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJQb2x5Z29uXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3BvbHlnb24vUG9seWdvbnNMYXllciAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50c1wiKTtcbi8qIGhhcm1vbnkgcmVleHBvcnQgKHNhZmUpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIlBvbHlnb25zTGF5ZXJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19bXCJkZWZhdWx0XCJdOyB9KTtcblxuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vcG9seWdvbi9Hcmlkc0xheWVyICovIFwiLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzXCIpO1xuLyogaGFybW9ueSByZWV4cG9ydCAoc2FmZSkgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiR3JpZHNMYXllclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX1tcImRlZmF1bHRcIl07IH0pO1xuXG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIgKi8gXCIuL3NyYy9keW5hbWljSGVhdExheWVyL0R5bmFtaWNIZWF0TGF5ZXIudHNcIik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChzYWZlKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJEeW5hbWljSGVhdExheWVyXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fW1wiZGVmYXVsdFwiXTsgfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh7XG4gICAgTWFya2VyOiBfbWFya2VyX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXSxcbiAgICBNYXJrZXJzTGF5ZXI6IF9tYXJrZXJfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdLFxuICAgIE1hcmtlcnNCdWZmZXJMYXllcjogX21hcmtlcl9NYXJrZXJzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWxpbmU6IF9wb2x5bGluZV9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5bGluZXNMYXllcjogX3BvbHlsaW5lX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19bXCJkZWZhdWx0XCJdLFxuICAgIFBvbHlsaW5lc0J1ZmZlckxheWVyOiBfcG9seWxpbmVfUG9seWxpbmVzQnVmZmVyTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX1tcImRlZmF1bHRcIl0sXG4gICAgUG9seWdvbjogX3BvbHlnb25fUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fW1wiZGVmYXVsdFwiXSxcbiAgICBQb2x5Z29uc0xheWVyOiBfcG9seWdvbl9Qb2x5Z29uc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19bXCJkZWZhdWx0XCJdLFxuICAgIEdyaWRzTGF5ZXI6IF9wb2x5Z29uX0dyaWRzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX1tcImRlZmF1bHRcIl0sXG4gICAgRHluYW1pY0hlYXRMYXllcjogX2R5bmFtaWNIZWF0TGF5ZXJfRHluYW1pY0hlYXRMYXllcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fW1wiZGVmYXVsdFwiXSxcbn0pO1xuXG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvbWFya2VyL01hcmtlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL21hcmtlci9NYXJrZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBNYXJrZXI7IH0pO1xuY2xhc3MgTWFya2VyIGV4dGVuZHMgTC5NYXJrZXIge1xuICAgIGNvbnN0cnVjdG9yKGxhdGxuZywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmcsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fX2RhdGEgPSBkYXRhO1xuICAgIH1cbiAgICBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2RhdGE7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYXJrZXIvTWFya2Vyc0J1ZmZlckxheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTWFya2Vyc0J1ZmZlckxheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfTWFya2Vyc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL01hcmtlcnNMYXllciAqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHNcIik7XG5cbmNsYXNzIE1hcmtlcnNCdWZmZXJMYXllciBleHRlbmRzIF9NYXJrZXJzTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ21hcmtlckJ1ZmZlcic7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRCdWZmZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgcmFkaXVzOiAxMDAwLFxuICAgICAgICAgICAgc3Ryb2tlOiB0cnVlLFxuICAgICAgICAgICAgd2VpZ2h0OiAxLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgeyBidWZmZXJPcHRpb25zOiBkZWZhdWx0QnVmZmVyT3B0aW9ucyB9LCBvcHRpb25zKTtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMuY29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yO1xuICAgICAgICB0aGlzLmluaXRNYXJrZXJzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmJ1ZmZlckxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1hcmtlckxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpO1xuICAgICAgICB0aGlzLmJ1ZmZlckxheWVyID0gdGhpcy5jb25maWdCdWZmZXJMYXllcigpO1xuICAgICAgICB0aGlzLmxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5idWZmZXJMYXllcik7XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWFya2Vycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2LmV4dGVuZChjdXJyLmdldExhdExuZygpLnRvQm91bmRzKHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLnJhZGl1cykpO1xuICAgICAgICB9LCB0aGlzLm1hcmtlcnNbMF0uZ2V0TGF0TG5nKCkudG9Cb3VuZHModGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnMucmFkaXVzKSk7XG4gICAgfVxuICAgIGNvbmZpZ0J1ZmZlckxheWVyKCkge1xuICAgICAgICBjb25zdCBncm91cExheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNpcmNsZUxheWVyID0gTC5jaXJjbGUobWFya2VyLmdldExhdExuZygpLCB0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJ1ZmZlclRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5idWZmZXJUb29sdGlwQXR0cl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwTGF5ZXIuYWRkTGF5ZXIoY2lyY2xlTGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyb3VwTGF5ZXI7XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL21hcmtlci9NYXJrZXJzTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTWFya2Vyc0xheWVyOyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL3V0aWxzL2luZGV4ICovIFwiLi9zcmMvdXRpbHMvaW5kZXgudHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX01hcmtlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NYXJrZXIgKi8gXCIuL3NyYy9tYXJrZXIvTWFya2VyLnRzXCIpO1xuXG5cbmNsYXNzIE1hcmtlcnNMYXllciB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJlbmRlclR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICByZW5kZXJQb2ludENvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICAgICAgICBpY29uVHlwZTogJ3VuaWNvZGUnLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyMCwgMjBdLFxuICAgICAgICAgICAgaWNvbkNsYXNzOiAnaWNvbmZvbnQnLFxuICAgICAgICAgICAgaWNvbkNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgICAgICBpY29uQW5jaG9yOiBbMTAsIDIwXSxcbiAgICAgICAgICAgIHBvcHVwQXR0cjogeyBsYWJlbDogJ+WQjeensCcsIHZhbHVlOiAnbmFtZScgfSxcbiAgICAgICAgICAgIHRvb2x0aXBBdHRyOiAnbmFtZScsXG4gICAgICAgICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgICAgICAgaXNDbHVzdGVyOiBmYWxzZSxcbiAgICAgICAgICAgIGhlYXRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbWF4OiAxLFxuICAgICAgICAgICAgICAgIG1pbk9wYWNpdHk6IDEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAnbWFya2VyJztcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkTWFya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlciA9IG51bGw7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLm1hcmtlckxheWVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWF0TGF5ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmNsdXN0ZXJMYXllciA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuem9vbVN0YXJ0Q2IgPSB0aGlzLl96b29tU3RhcnRDYi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnpvb21FbmRDYiA9IHRoaXMuX3pvb21FbmRDYi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBkcmF3KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pbml0TWFya2VycygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5sYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDkvJjlhYjliKTmlq0gaXNDbHVzdGVyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyICYmIHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdwb2ludCc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnTWFya2VyTGF5ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsdXN0ZXInOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0NsdXN0ZXJMYXllcigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnaGVhdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnSGVhdExheWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclR5cGV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGE7XG4gICAgfVxuICAgIHNldE9wdGlvbnMob3B0aW9ucywgcmVkcmF3ID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAocmVkcmF3KSB7XG4gICAgICAgICAgICB0aGlzLnJlZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSk7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldEJvdW5kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlcnMubWFwKChtYXJrZXIpID0+IFttYXJrZXIuZ2V0TGF0TG5nKCkubGF0LCBtYXJrZXIuZ2V0TGF0TG5nKCkubG5nXSk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXAub2ZmKCd6b29tc3RhcnQnLCB0aGlzLnpvb21TdGFydENiKTtcbiAgICAgICAgdGhpcy5tYXAub2ZmKCd6b29tZW5kJywgdGhpcy56b29tRW5kQ2IpO1xuICAgIH1cbiAgICB0b2dnbGVWaXNpYmxlKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5pY29uQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgY2hhbmdlSWNvbihpY29uVW5pY29kZSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGUgPSBpY29uVW5pY29kZTtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcGl0Y2goaWQpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJzLmZvckVhY2goKG1hcmtlcikgPT4ge1xuICAgICAgICAgICAgaWYgKG1hcmtlci5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfem9vbVN0YXJ0Q2IoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ21hcmtlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyVHlwZSA9PT0gJ3BvaW50JyAmJiAhdGhpcy5vcHRpb25zLmlzQ2x1c3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3pvb21FbmRDYigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnbWFya2VyJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnICYmICF0aGlzLm9wdGlvbnMuaXNDbHVzdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5tYXJrZXJMYXllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLm1hcmtlckxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5riy5p+T5Li65pWj54K55Zu+ICovXG4gICAgY29uZmlnTWFya2VyTGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtlckxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbnZhc0ljb25MYXllciA9IEwuY2FudmFzSWNvbkxheWVyKHt9KS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAgIC8vIOa3u+WKoOeCueWHu+S6i+S7tlxuICAgICAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25DbGlja0xpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDmt7vliqAgaG92ZXIg5LqL5Lu2XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRPbkhvdmVyTGlzdGVuZXIoKF8sIFt7IGRhdGE6IG1hcmtlciB9XSkgPT4ge1xuICAgICAgICAgICAgLy8g5LmL5YmN5pyJIGhvdmVyIOeahOWFs+mXrSB0b29sdGlwXG4gICAgICAgICAgICBpZiAodGhpcy5ob3ZlcmVkTWFya2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbWFya2VyO1xuICAgICAgICAgICAgaWYgKHRoaXMuaG92ZXJlZE1hcmtlci5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlt7Lnu4/orr7nva4gdG9vbHRpcCDnm7TmjqXlsZXnpLogdG9vbHRpcFxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5vcGVuVG9vbHRpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5ZCm5YiZ57uR5a6aIHRvb2x0aXAg5bm25bGV56S6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvdmVyZWRNYXJrZXIuYmluZFRvb2x0aXAoJycgKyB0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNhbnZhc0ljb25MYXllci5hZGRNYXJrZXJzKHRoaXMubWFya2Vycyk7XG4gICAgICAgIC8vIOino+WGs+WIneasoea4suafk+S4jeWHuuWbvuagh+mXrumimFxuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLm1hcC5nZXRDZW50ZXIoKSk7XG4gICAgICAgIHRoaXMubWFya2VyTGF5ZXIgPSBjYW52YXNJY29uTGF5ZXI7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtlckxheWVyO1xuICAgIH1cbiAgICBnZXRUb29sVGlwQ29udGVudChkYXRhKSB7XG4gICAgICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXTtcbiAgICB9XG4gICAgaW5pdE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0TWFya2VycygpIHtcbiAgICAgICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgICAgIHRoaXMuY2FjaGVTZWdtZW50UGFyYW1zKCk7XG4gICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFMaXN0LmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gTC5nZW9KU09OKGRhdGEuZ2VvbWV0cnkpLmdldExheWVycygpWzBdO1xuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0oW1xuICAgICAgICAgICAgICAgIGxheWVyLmdldExhdExuZygpLmxhdCxcbiAgICAgICAgICAgICAgICBsYXllci5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgICAgICBdLCB7XG4gICAgICAgICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKGRhdGEpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICAgICAgICBtYXJrZXIuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLm1hcC5vbignem9vbXN0YXJ0JywgdGhpcy56b29tU3RhcnRDYik7XG4gICAgICAgIHRoaXMubWFwLm9uKCd6b29tZW5kJywgdGhpcy56b29tRW5kQ2IpO1xuICAgICAgICB0aGlzLm1hcC5vbignY29udGV4dG1lbnUnLCBjb25zb2xlLmxvZyk7XG4gICAgfVxuICAgIC8vIOWkhOeQhiBtYXJrZXIg54K55Ye75LqL5Lu2XG4gICAgbWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciwgZml0Qm91bmRzKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZE1hcmtlciA9IG1hcmtlcjtcbiAgICAgICAgLy8g5Yig6Zmk5YmN5LiA5Liq5pS+5aSn5Zu+5qCHXG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLnJlbW92ZUZyb20odGhpcy5tYXApO1xuICAgICAgICB9XG4gICAgICAgIC8vIOeUn+aIkOW9k+WJjeaUvuWkp+Wbvuagh1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbmV3IF9NYXJrZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0obWFya2VyLmdldExhdExuZygpLCB7XG4gICAgICAgICAgICBpY29uOiB0aGlzLmdldExhcmdlck1hcmtlckljb24obWFya2VyLmdldERhdGEoKSksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlclxuICAgICAgICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSlcbiAgICAgICAgICAgIC5vcGVuUG9wdXAoKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtYXJrZXIuY2xvc2VUb29sdGlwKCk7XG4gICAgICAgIHRoaXMubWFwLnBhblRvKHRoaXMuZm9jdXNlZE1hcmtlci5nZXRMYXRMbmcoKSk7XG4gICAgICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhtYXJrZXIuZ2V0TGF0TG5nKCkudG9Cb3VuZHMoMTApKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1tYXJrZXInLCBtYXJrZXIpO1xuICAgIH1cbiAgICBjb25maWdDbHVzdGVyTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWxleekuuiBmuWQiOWbvuWxglxuICAgICAgICBpZiAodGhpcy5jbHVzdGVyTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2x1c3RlckxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2x1c3RlckxheWVyID0gTC5tYXJrZXJDbHVzdGVyR3JvdXAoe1xuICAgICAgICAgICAgaWNvbkNyZWF0ZUZ1bmN0aW9uOiB0aGlzLmljb25DcmVhdGVGdW5jdGlvbi5iaW5kKHRoaXMpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbHVzdGVyTGF5ZXIuYWRkTGF5ZXJzKHRoaXMubWFya2Vycy5tYXAoKG0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBfTWFya2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKG0uZ2V0TGF0TG5nKCksIHtcbiAgICAgICAgICAgICAgICBpY29uOiB0aGlzLmdldE1hcmtlckljb24obS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYXJrZXIuc2V0RGF0YShtLmdldERhdGEoKSk7XG4gICAgICAgICAgICBtYXJrZXIuYmluZFRvb2x0aXAoJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl0pO1xuICAgICAgICAgICAgbWFya2VyLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSk7XG4gICAgICAgICAgICBtYXJrZXIub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtYXJrZXI7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2x1c3RlckxheWVyO1xuICAgIH1cbiAgICAvKiog5riy5p+T5Li654Ot5Yqb5Zu+ICovXG4gICAgY29uZmlnSGVhdExheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5oZWF0TGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhdExheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhdExuZyA9IG1hcmtlci5nZXRMYXRMbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbkF0dHIgPSB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLmRpbWVuc2lvbkF0dHI7XG4gICAgICAgICAgICBsZXQgYWx0ID0gKGRpbWVuc2lvbkF0dHIgJiYgbWFya2VyLmdldERhdGEoKVtkaW1lbnNpb25BdHRyXSkgfHxcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBhbHQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgYWx0ID0gdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLm1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmtlci5zZXRMYXRMbmcoTC5sYXRMbmcobGF0TG5nLmxhdCwgbGF0TG5nLmxuZywgYWx0KSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhlYXRMYXllciA9IEwuaGVhdExheWVyKHRoaXMubWFya2Vycy5tYXAoKGl0KSA9PiBpdC5nZXRMYXRMbmcoKSksIFxuICAgICAgICAvLyBUT0RPOiDkvb/nlKggbWVyZ2VDb25maWcg566A5YyWXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucy5oZWF0T3B0aW9ucywgeyBtaW5PcGFjaXR5OiAxIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhdExheWVyO1xuICAgIH1cbiAgICBnZXRMYXJnZXJNYXJrZXJJY29uKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgdHJ1ZSk7XG4gICAgfVxuICAgIGdldE1hcmtlckljb24oZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0TWFya2VySWNvbihkYXRhLCBmYWxzZSk7XG4gICAgfVxuICAgIC8qKiDojrflj5blvZPliY0gbWFya2VyIOmcgOimgeWxleekuueahCBpY29uICovXG4gICAgX2dldE1hcmtlckljb24oZGF0YSwgaXNMYXJnZXIpIHtcbiAgICAgICAgY29uc3QgaWNvblNpemUgPSB0aGlzLm9wdGlvbnMuaWNvblNpemU7XG4gICAgICAgIGNvbnN0IGljb25BbmNob3IgPSB0aGlzLm9wdGlvbnMuaWNvbkFuY2hvcjtcbiAgICAgICAgY29uc3QgbGFyZ2VySWNvblNpemUgPSBbaWNvblNpemVbMF0gKiAxLjUsIGljb25TaXplWzFdICogMS41XTtcbiAgICAgICAgY29uc3QgbGFyZ2VySWNvbkFuY2hvciA9IFtpY29uQW5jaG9yWzBdICogMS41LCBpY29uQW5jaG9yWzFdICogMS41XTtcbiAgICAgICAgY29uc3QgaWNvbkNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvcjtcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaWNvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ltYWdlJzoge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBMLmljb24oe1xuICAgICAgICAgICAgICAgIC8vICAgaWNvblVybDogdGhpcy5vcHRpb25zLmljb25JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAvLyAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICAgICAgLy8gICBpY29uQW5jaG9yLFxuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdmb250X2NsYXNzJzpcbiAgICAgICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgICAgIHJldHVybiBMLmRpdkljb24oe1xuICAgICAgICAgICAgICAgICAgICBodG1sOiB0aGlzLmdldEN1c3RvbUljb25IVE1MKGRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGlzTGFyZ2VyID8gJ2xhcmdlLWRpdi1pY29uLW1hcmtlcicgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbkFuY2hvcjogaXNMYXJnZXIgPyBsYXJnZXJJY29uQW5jaG9yIDogaWNvbkFuY2hvcixcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBpc0xhcmdlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbMCwgLWxhcmdlckljb25BbmNob3JbMV0gLyAyXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBbMCwgLWljb25BbmNob3JbMV0gLyAyXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclR5cGUg5LiN6IO95Li6ICR7dGhpcy5vcHRpb25zLmljb25UeXBlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEN1c3RvbUljb25IVE1MKGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NpbmdsZSc6IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke29wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55SoIHN2Z1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzeW1ib2wnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbi1zeW1ib2xcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMub3B0aW9ucy5pY29uU3ltYm9sfVwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDkvb/nlKggdW5pY29kZVxuICAgICAgICAgICAgICAgICAgICBjYXNlICd1bmljb2RlJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHtvcHRpb25zLmljb25Db2xvcn07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3B0aW9ucy5pY29uVW5pY29kZX1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3NlZ21lbnRlZCc6IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDkvb/nlKggY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKX07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqCBzdmdcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3ltYm9sJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb24tc3ltYm9sXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiJHt0aGlzLm9wdGlvbnMuaWNvblN5bWJvbH1cIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55SoIHVuaWNvZGVcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKX07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMub3B0aW9ucy5pY29uVW5pY29kZX1cbiAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclBvaW50Q29sb3JUeXBlIOS4jeaUr+aMgVwiJHt0aGlzLm9wdGlvbnMucmVuZGVyUG9pbnRDb2xvclR5cGV9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWNoZVNlZ21lbnRQYXJhbXMoKSB7XG4gICAgICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoO1xuICAgICAgICBsZXQgbWF4VmFsID0gLUluZmluaXR5O1xuICAgICAgICBsZXQgbWluVmFsID0gSW5maW5pdHk7XG4gICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgICAgIG1heFZhbCA9IE1hdGgubWF4KG1heFZhbCwgdmFsKTtcbiAgICAgICAgICAgIG1pblZhbCA9IE1hdGgubWluKG1pblZhbCwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGVwID0gKG1heFZhbCAtIG1pblZhbCArIDEpIC8gc2VnbWVudGVkTGVuZ3RoO1xuICAgICAgICB0aGlzLnNlZ21lbnRlZE1pbiA9IG1pblZhbDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcDtcbiAgICB9XG4gICAgZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSkge1xuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW3BhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICBnZXRQb3B1cENvbnRlbnQoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWNvbkNyZWF0ZUZ1bmN0aW9uKGNsdXN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgICBodG1sOiBgXG4gICAgICAgPGRpdlxuICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJsaWdodGVuXCJdKSh0aGlzLm9wdGlvbnMuaWNvbkNvbG9yKX07XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhpcy5vcHRpb25zLmljb25Db2xvcn07XG4gICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogOXB4O1xuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICBsZWZ0OiA5cHg7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAke2NsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgICAgICAgaWNvblNpemU6IFs0MCwgNDBdLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5Z29uL0dyaWRzTGF5ZXIudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEdyaWRzTGF5ZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vUG9seWdvbnNMYXllciAqLyBcIi4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50c1wiKTtcblxuXG5jbGFzcyBHcmlkc0xheWVyIGV4dGVuZHMgX1BvbHlnb25zTGF5ZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0ge1xuICAgIGNvbnN0cnVjdG9yKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKSB7XG4gICAgICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKTtcbiAgICAgICAgdGhpcy5wcm9wTWF4TGVuZ3RoID0gLTE7XG4gICAgfVxuICAgIHJlZHJhdygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXllcikge1xuICAgICAgICAgICAgdGhpcy5sYXllci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdHcmlkTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIC8vIHRvb2x0aXAg5pyJ5Y+v6IO96ZyA6KaB55u05o6l5bGV56S677yM6ZyA6KaB5ZyoIHBvbHlnb24g5re75Yqg5Yiw5Zyw5Zu+5LiK5LmL5ZCO5omN5Y+v5Lul77yM5omA5Lul6ZyA6KaB5bu26L+f6K6+572uXG4gICAgICAgIHRoaXMuY29uZmlnVG9vbHRpcCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuem9vbUhhbmRsZXIoKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRvZ2dsZVRvb2x0aXAodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIGlmIChwb2x5Z29uLmdldFRvb2x0aXAoKSkge1xuICAgICAgICAgICAgICAgIHBvbHlnb24uZ2V0VG9vbHRpcCgpLnNldE9wYWNpdHkodmlzaWJsZSA/IDEgOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5tYXAub24oJ3pvb20nLCB0aGlzLnpvb21IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBjb25maWdUb29sdGlwKCkge1xuICAgICAgICB0aGlzLnByb3BNYXhMZW5ndGggPSB0aGlzLmdldFByb3BNYXhMZW5ndGgoKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSwge1xuICAgICAgICAgICAgICAgICAgICBwZXJtYW5lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25maWdHcmlkTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSB0aGlzLnBvbHlnb25zLm1hcCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IocG9seWdvbi5nZXREYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyDph43mlrDlupTnlKggb3B0aW9uc1xuICAgICAgICAgICAgY29uc3QgbmV3UG9seWdvbiA9IG5ldyBfUG9seWdvbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpO1xuICAgICAgICAgICAgbmV3UG9seWdvbi5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9seWdvbi5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXdQb2x5Z29uO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllcjtcbiAgICB9XG4gICAgem9vbUhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLnBvbHlnb25zWzBdO1xuICAgICAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvZ2dsZVRvb2x0aXAodGhpcy5nZXRSZWN0YW5nbGVXaWR0aChwb2x5Z29uKSA+XG4gICAgICAgICAgICB0aGlzLmdldFRvb2x0aXBNYXhXaWR0aCh0aGlzLnByb3BNYXhMZW5ndGgpKTtcbiAgICB9XG4gICAgZ2V0UmVjdGFuZ2xlV2lkdGgocG9seWdvbikge1xuICAgICAgICByZXR1cm4gKHRoaXMubWFwLmxhdExuZ1RvTGF5ZXJQb2ludChwb2x5Z29uLmdldEJvdW5kcygpLmdldE5vcnRoRWFzdCgpKS54IC1cbiAgICAgICAgICAgIHRoaXMubWFwLmxhdExuZ1RvTGF5ZXJQb2ludChwb2x5Z29uLmdldEJvdW5kcygpLmdldFNvdXRoV2VzdCgpKS54KTtcbiAgICB9XG4gICAgZ2V0VG9vbHRpcE1heFdpZHRoKHRleHRMZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRleHRMZW5ndGggKiAxMiArIDE0O1xuICAgIH1cbiAgICBnZXRQcm9wTWF4TGVuZ3RoKCkge1xuICAgICAgICBjb25zdCBwcm9wID0gdHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5wb3B1cEF0dHJcbiAgICAgICAgICAgIDogdGhpcy5vcHRpb25zLnBvcHVwQXR0ci52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbnNcbiAgICAgICAgICAgIC5tYXAoKHBvbHlnb24pID0+IGAke3BvbHlnb24uZ2V0RGF0YSgpW3Byb3BdfWAubGVuZ3RoKVxuICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHByZXYsIGN1cnIpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5Z29uL1BvbHlnb24udHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlnb247IH0pO1xuY2xhc3MgUG9seWdvbiBleHRlbmRzIEwuUG9seWdvbiB7XG4gICAgY29uc3RydWN0b3IobGF0bG5ncywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb25zTGF5ZXIudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlnb24vUG9seWdvbnNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gUG9seWdvbnNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlnb24gKi8gXCIuL3NyYy9wb2x5Z29uL1BvbHlnb24udHNcIik7XG5cblxuY2xhc3MgUG9seWdvbnNMYXllciB7XG4gICAgY29uc3RydWN0b3IobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICAgICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIGZpbGw6IHRydWUsXG4gICAgICAgICAgICBmaWxsQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgICAgICAgIHdlaWdodDogMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC41LFxuICAgICAgICAgICAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICAgICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWdvbic7XG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xuICAgICAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3Q7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBudWxsO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbiA9IG51bGw7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRQb2x5Z29ucygpO1xuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlnb25MYXllcigpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSk7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9seWdvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29ucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLCB0aGlzLnBvbHlnb25zWzBdLmdldEJvdW5kcygpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUNvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcGl0Y2goaWQpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICAgICAgICBpZiAocG9seWdvbi5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24sIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRFdmVudCgpIHsgfVxuICAgIGdldFRvb2xUaXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdO1xuICAgIH1cbiAgICBnZXRQb3B1cENvbnRlbnQoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgICAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aDtcbiAgICAgICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eTtcbiAgICAgICAgbGV0IG1pblZhbCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl07XG4gICAgICAgICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbCk7XG4gICAgICAgICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXA7XG4gICAgfVxuICAgIGdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFbdGhpcy5vcHRpb25zLnNlZ21lbnRlZEF0dHJdO1xuICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnNbcGFyc2VJbnQoJycgKyAodmFsIC0gdGhpcy5zZWdtZW50ZWRNaW4pIC8gdGhpcy5zZWdtZW50ZWRTdGVwLCAxMCldO1xuICAgICAgICByZXR1cm4gY29sb3I7XG4gICAgfVxuICAgIHBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbiwgZml0Qm91bmRzKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlnb24gPSBwb2x5Z29uO1xuICAgICAgICAvLyDliKDpmaTliY3kuIDkuKogZm9jdXNcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDnlJ/miJDlvZPliY0gZm9jdXNcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24gPSBuZXcgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0ocG9seWdvbi5nZXRMYXRMbmdzKCksIHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgICAgICBmaWxsQ29sb3I6IHRoaXMuZ2V0Q29sb3IocG9seWdvbi5nZXREYXRhKCkpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24uYWRkVG8odGhpcy5tYXApO1xuICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvblxuICAgICAgICAgICAgLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChwb2x5Z29uLmdldERhdGEoKSkpXG4gICAgICAgICAgICAub3BlblBvcHVwKCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uLm9uKCdwb3B1cGNsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwb2x5Z29uLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5nZXRDZW50ZXIoKSk7XG4gICAgICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5Z29uLmdldEJvdW5kcygpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1wb2x5Z29uJywgcG9seWdvbik7XG4gICAgfVxuICAgIGluaXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0UG9seWdvbnMoKSB7XG4gICAgICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgICAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpO1xuICAgICAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgICAgIHRoaXMuZGF0YUxpc3QuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF07XG4gICAgICAgICAgICBjb25zdCBwb2x5Z29uID0gbmV3IF9Qb2x5Z29uX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkZWZhdWx0XCJdKGxheWVyLmdldExhdExuZ3MoKSk7XG4gICAgICAgICAgICBwb2x5Z29uLnNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25maWdQb2x5Z29uTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWdvbnMgPSB0aGlzLnBvbHlnb25zLm1hcCgocG9seWdvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlnb24uZ2V0RGF0YSgpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g6YeN5paw5bqU55SoIG9wdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IG5ld1BvbHlnb24gPSBuZXcgX1BvbHlnb25fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcImRlZmF1bHRcIl0ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgbmV3UG9seWdvbi5zZXREYXRhKHBvbHlnb24uZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgICAgICAgICBuZXdQb2x5Z29uLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1BvbHlnb24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWdvbkNsaWNrSGFuZGxlcihwb2x5Z29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1BvbHlnb247XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9seWdvbkxheWVyLmFkZExheWVyKHBvbHlnb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWdvbkxheWVyO1xuICAgIH1cbiAgICBnZXRDb2xvcihkYXRhLCBtb2RlKSB7XG4gICAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvcjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5Z29uQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Rhcmtlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRhcmtlblwiXSkoY29sb3IpO1xuICAgICAgICAgICAgY2FzZSAnbGlnaHRlbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdChfdXRpbHNfaW5kZXhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImxpZ2h0ZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIFBvbHlsaW5lOyB9KTtcbmNsYXNzIFBvbHlsaW5lIGV4dGVuZHMgTC5Qb2x5bGluZSB7XG4gICAgY29uc3RydWN0b3IobGF0bG5ncywgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX19kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kYXRhO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5bGluZXNCdWZmZXJMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlsaW5lc0xheWVyICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmVzTGF5ZXIudHNcIik7XG5cbmNsYXNzIFBvbHlsaW5lc0J1ZmZlckxheWVyIGV4dGVuZHMgX1BvbHlsaW5lc0xheWVyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJkZWZhdWx0XCJdIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBzdXBlcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYyk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgICAgICAgIGNvcnJpZG9yOiAxMDAsXG4gICAgICAgICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9seWxpbmVCdWZmZXInO1xuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcbiAgICAgICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIC8vIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbFxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGRyYXcob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgcmVkcmF3KCkge1xuICAgICAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxheWVyLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKTtcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBmaXRCb3VuZHMoKSB7XG4gICAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKTtcbiAgICB9XG4gICAgZ2V0Qm91bmRzKCkge1xuICAgICAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSwgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKCkpO1xuICAgIH1cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5yZWRyYXcoKTtcbiAgICB9XG4gICAgY29uZmlnUG9seWxpbmVCdWZmZXJMYXllcigpIHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBwb2x5bGluZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBwb2x5bGluZUJ1ZmZlciA9IEwuY29ycmlkb3IocG9seWxpbmUuZ2V0TGF0TG5ncygpLm1hcCgobGF0TG5nKSA9PiBMLmxhdExuZyhbbGF0TG5nLmxhdCwgbGF0TG5nLmxuZ10pKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyKSB7XG4gICAgICAgICAgICAgICAgcG9seWxpbmVCdWZmZXIuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucG9seWxpbmVMYXllci5hZGRMYXllcihwb2x5bGluZUJ1ZmZlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5bGluZUxheWVyO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNMYXllci50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBQb2x5bGluZXNMYXllcjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX1BvbHlsaW5lX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL1BvbHlsaW5lICovIFwiLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuLi91dGlscy9pbmRleCAqLyBcIi4vc3JjL3V0aWxzL2luZGV4LnRzXCIpO1xuXG5cbmNsYXNzIFBvbHlsaW5lc0xheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihtYXAsIGRhdGFMaXN0LCBvcHRpb25zLCBjaGFubmVsRnVuYykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgICAgICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICAgICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3BvbHlsaW5lJztcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XG4gICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoYW5uZWxGdW5jID0gY2hhbm5lbEZ1bmM7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHk7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbnVsbDtcbiAgICB9XG4gICAgZHJhdyhvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pbml0UG9seWxpbmVzKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZHJhdygpO1xuICAgIH1cbiAgICByZWRyYXcoKSB7XG4gICAgICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWxpbmVMYXllcigpO1xuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGZpdEJvdW5kcygpIHtcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSk7XG4gICAgfVxuICAgIGdldEJvdW5kcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWxpbmVzLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksIHRoaXMucG9seWxpbmVzWzBdLmdldEJvdW5kcygpKTtcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZVZpc2libGUodmlzaWJsZSkge1xuICAgICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICBpZiAoIXRoaXMubGF5ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMucmVkcmF3KCk7XG4gICAgfVxuICAgIHBpdGNoKGlkKSB7XG4gICAgICAgIHRoaXMucG9seWxpbmVzLmZvckVhY2goKHBvbHlsaW5lKSA9PiB7XG4gICAgICAgICAgICBpZiAocG9seWxpbmUuZ2V0RGF0YSgpLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRQb2x5bGluZXMoKSB7XG4gICAgICAgIC8vIOe8k+WtmCBzZWdtZW50IOebuOWFs+aVsOaNrlxuICAgICAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpO1xuICAgICAgICB0aGlzLnBvbHlsaW5lcyA9IHRoaXMuZGF0YUxpc3QubWFwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXTtcbiAgICAgICAgICAgIC8vIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgICAgIC8vICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSlcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGNvbnN0IHBvbHlsaW5lID0gbmV3IF9Qb2x5bGluZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiZGVmYXVsdFwiXShsYXllci5nZXRMYXRMbmdzKCkpO1xuICAgICAgICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgICAgICAgcG9seWxpbmUuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBwb2x5bGluZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSkge1xuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXTtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzW3BhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXTtcbiAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgIH1cbiAgICBwb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSwgZml0Qm91bmRzKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZFBvbHlsaW5lID0gcG9seWxpbmU7XG4gICAgICAgIC8vIOWIoOmZpOWJjeS4gOS4qiBmb2N1c1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSA9IG5ldyBfUG9seWxpbmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ocG9seWxpbmUuZ2V0TGF0TG5ncygpLCB7XG4gICAgICAgICAgICBjb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICAgICAgZmlsbENvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSwgJ25vcm1hbCcpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lXG4gICAgICAgICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlsaW5lLmdldERhdGEoKSkpXG4gICAgICAgICAgICAub3BlblBvcHVwKCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBvbHlsaW5lLmNsb3NlVG9vbHRpcCgpO1xuICAgICAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUuZ2V0Q2VudGVyKCkpO1xuICAgICAgICBpZiAoZml0Qm91bmRzKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5maXRCb3VuZHMocG9seWxpbmUuZ2V0Qm91bmRzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlsaW5lJywgcG9seWxpbmUpO1xuICAgIH1cbiAgICBnZXRUb29sVGlwQ29udGVudChkYXRhKSB7XG4gICAgICAgIHJldHVybiAnJyArIGRhdGFbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXTtcbiAgICB9XG4gICAgZ2V0UG9wdXBDb250ZW50KGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucG9wdXBBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHJ9OiAke2RhdGFbdGhpcy5vcHRpb25zLnBvcHVwQXR0cl19YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0ci5sYWJlbH06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbmZpZ1BvbHlsaW5lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucG9seWxpbmVMYXllciA9IEwubGF5ZXJHcm91cCgpO1xuICAgICAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBuZXdQb2x5bGluZSA9IG5ldyBfUG9seWxpbmVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImRlZmF1bHRcIl0ocG9seWxpbmUuZ2V0TGF0TG5ncygpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIG5ld1BvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmV3UG9seWxpbmUuc2V0RGF0YShwb2x5bGluZS5nZXREYXRhKCkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgICAgICAgIG5ld1BvbHlsaW5lLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQobmV3UG9seWxpbmUuZ2V0RGF0YSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvbHlsaW5lTGF5ZXIuYWRkTGF5ZXIobmV3UG9seWxpbmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllcjtcbiAgICB9XG4gICAgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgICAgICBjb25zdCBzZWdtZW50ZWRMZW5ndGggPSB0aGlzLm9wdGlvbnMuc2VnbWVudGVkQ29sb3JzLmxlbmd0aDtcbiAgICAgICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eTtcbiAgICAgICAgbGV0IG1pblZhbCA9IEluZmluaXR5O1xuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5kYXRhTGlzdCkge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZGF0YVt0aGlzLm9wdGlvbnMuc2VnbWVudGVkQXR0cl07XG4gICAgICAgICAgICBtYXhWYWwgPSBNYXRoLm1heChtYXhWYWwsIHZhbCk7XG4gICAgICAgICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aDtcbiAgICAgICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBtaW5WYWw7XG4gICAgICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IHN0ZXA7XG4gICAgfVxuICAgIGdldENvbG9yKGRhdGEsIG1vZGUpIHtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2VnbWVudGVkJykge1xuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICAgICAgICBjYXNlICdkYXJrZW4nOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJkYXJrZW5cIl0pKGNvbG9yKTtcbiAgICAgICAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QoX3V0aWxzX2luZGV4X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19bXCJsaWdodGVuXCJdKShjb2xvcik7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL3NyYy91dGlscy9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3NyYy91dGlscy9pbmRleC50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0LCBsaWdodGVuLCBkYXJrZW4gKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwibGlnaHRlblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGxpZ2h0ZW47IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRhcmtlblwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGRhcmtlbjsgfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29sb3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGNvbG9yICovIFwiLi9ub2RlX21vZHVsZXMvY29sb3IvaW5kZXguanNcIik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29sb3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcblxuZnVuY3Rpb24gbGlnaHRlbihoZXhDb2xvcikge1xuICAgIHJldHVybiBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKGhleENvbG9yKVxuICAgICAgICAubGlnaHRlbigwLjUpXG4gICAgICAgIC5oZXgoKTtcbn1cbmZ1bmN0aW9uIGRhcmtlbihoZXhDb2xvcikge1xuICAgIHJldHVybiBjb2xvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKGhleENvbG9yKVxuICAgICAgICAuZGFya2VuKDAuNSlcbiAgICAgICAgLmhleCgpO1xufVxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9ICh7XG4gICAgbGlnaHRlbixcbiAgICBkYXJrZW4sXG59KTtcblxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3TDNkbFluQmhZMnN2ZFc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0wzZGxZbkJoWTJzdlltOXZkSE4wY21Gd0lpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjlzYjNJdFkyOXVkbVZ5ZEM5amIyNTJaWEp6YVc5dWN5NXFjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmJHOXlMV052Ym5abGNuUXZhVzVrWlhndWFuTWlMQ0ozWldKd1lXTnJPaTh2YkdWaFpteGxkRTFoY0M4dUwyNXZaR1ZmYlc5a2RXeGxjeTlqYjJ4dmNpMWpiMjUyWlhKMEwzSnZkWFJsTG1weklpd2lkMlZpY0dGamF6b3ZMMnhsWVdac1pYUk5ZWEF2TGk5dWIyUmxYMjF2WkhWc1pYTXZZMjlzYjNJdGJtRnRaUzlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmJHOXlMWE4wY21sdVp5OXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmJtOWtaVjl0YjJSMWJHVnpMMk52Ykc5eUxYTjBjbWx1Wnk5dWIyUmxYMjF2WkhWc1pYTXZZMjlzYjNJdGJtRnRaUzlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZibTlrWlY5dGIyUjFiR1Z6TDJOdmJHOXlMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXViMlJsWDIxdlpIVnNaWE12YVhNdFlYSnlZWGxwYzJndmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDI1dlpHVmZiVzlrZFd4bGN5OXphVzF3YkdVdGMzZHBlbnBzWlM5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OXNaV0ZtYkdWMFRXRndMeTR2YzNKakwyUjVibUZ0YVdOSVpXRjBUR0Y1WlhJdlJIbHVZVzFwWTBobFlYUk1ZWGxsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmMzSmpMMmx1WkdWNExuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12YldGeWEyVnlMMDFoY210bGNpNTBjeUlzSW5kbFluQmhZMnM2THk5c1pXRm1iR1YwVFdGd0x5NHZjM0pqTDIxaGNtdGxjaTlOWVhKclpYSnpRblZtWm1WeVRHRjVaWEl1ZEhNaUxDSjNaV0p3WVdOck9pOHZiR1ZoWm14bGRFMWhjQzh1TDNOeVl5OXRZWEpyWlhJdlRXRnlhMlZ5YzB4aGVXVnlMblJ6SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl6Y21NdmNHOXNlV2R2Ymk5SGNtbGtjMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12Y0c5c2VXZHZiaTlRYjJ4NVoyOXVMblJ6SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl6Y21NdmNHOXNlV2R2Ymk5UWIyeDVaMjl1YzB4aGVXVnlMblJ6SWl3aWQyVmljR0ZqYXpvdkwyeGxZV1pzWlhSTllYQXZMaTl6Y21NdmNHOXNlV3hwYm1VdlVHOXNlV3hwYm1VdWRITWlMQ0ozWldKd1lXTnJPaTh2YkdWaFpteGxkRTFoY0M4dUwzTnlZeTl3YjJ4NWJHbHVaUzlRYjJ4NWJHbHVaWE5DZFdabVpYSk1ZWGxsY2k1MGN5SXNJbmRsWW5CaFkyczZMeTlzWldGbWJHVjBUV0Z3THk0dmMzSmpMM0J2Ykhsc2FXNWxMMUJ2Ykhsc2FXNWxjMHhoZVdWeUxuUnpJaXdpZDJWaWNHRmphem92TDJ4bFlXWnNaWFJOWVhBdkxpOXpjbU12ZFhScGJITXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUTBGQlF6dEJRVU5FTEU4N1FVTldRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHdEVRVUV3UXl4blEwRkJaME03UVVGRE1VVTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5SVUZCZDBRc2EwSkJRV3RDTzBGQlF6RkZPMEZCUTBFc2VVUkJRV2xFTEdOQlFXTTdRVUZETDBRN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsRVFVRjVReXhwUTBGQmFVTTdRVUZETVVVc2QwaEJRV2RJTEcxQ1FVRnRRaXhGUVVGRk8wRkJRM0pKTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN096czdPenM3T3pzN096dEJRMnhHUVR0QlFVTkJMR3RDUVVGclFpeHRRa0ZCVHl4RFFVRkRMSE5FUVVGWk96dEJRVVYwUXp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVVVGQlVTdzBRa0ZCTkVJN1FVRkRjRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5d3lRa0ZCTWtJN1FVRkRiRU1zVDBGQlR5dzJRa0ZCTmtJN1FVRkRjRU1zVjBGQlZ5eHBRMEZCYVVNN1FVRkROVU1zVlVGQlZTeG5RMEZCWjBNN1FVRkRNVU1zVjBGQlZ5eHBRMEZCYVVNN1FVRkROVU1zVDBGQlR5eHhRMEZCY1VNN1FVRkROVU1zVTBGQlV5d3lRMEZCTWtNN1FVRkRjRVFzVVVGQlVUdEJRVU5TT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzY1VSQlFYRkVMR2RDUVVGblFqdEJRVU55UlN4dFJFRkJiVVFzWTBGQll6dEJRVU5xUlR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQkxHZENRVUZuUWl4UFFVRlBPMEZCUTNaQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3gxUWtGQmRVSTdPMEZCUlhaQ08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RDUVVGblFpeFBRVUZQTEZGQlFWRTdRVUZETDBJc1owSkJRV2RDTEU5QlFVOHNVVUZCVVR0QlFVTXZRaXhwUWtGQmFVSXNUMEZCVHl4UFFVRlBPMEZCUXk5Q0xHbENRVUZwUWl4UFFVRlBMRTlCUVU4N1FVRkRMMElzWjBKQlFXZENMRkZCUVZFc1QwRkJUenRCUVVNdlFpeG5Ra0ZCWjBJc1VVRkJVU3hQUVVGUE8wRkJReTlDT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhORlFVRnpSVHM3UVVGRmRFVTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzYzBKQlFYTkNPMEZCUTNSQ08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxDdERRVUVyUXl4RlFVRkZMRlZCUVZVc1JVRkJSVHRCUVVNM1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1pVRkJaU3hoUVVGaExHRkJRV0U3UVVGRGVrTTdRVUZEUVN4bFFVRmxMR0ZCUVdFc1lVRkJZVHRCUVVONlF6dEJRVU5CTEdWQlFXVXNZVUZCWVN4aFFVRmhPMEZCUTNwRE8wRkJRMEVzWlVGQlpTeGhRVUZoTEdGQlFXRTdRVUZEZWtNN1FVRkRRU3hsUVVGbExHRkJRV0VzWVVGQllUdEJRVU42UXp0QlFVTkJMR1ZCUVdVc1lVRkJZVHRCUVVNMVFqczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN1FVTnVNa0pCTEd0Q1FVRnJRaXh0UWtGQlR5eERRVUZETEd0RlFVRmxPMEZCUTNwRExGbEJRVmtzYlVKQlFVOHNRMEZCUXl4elJFRkJVenM3UVVGRk4wSTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFc2EwTkJRV3RETzBGQlEyeERPMEZCUTBFN1FVRkRRU3gxUTBGQmRVTXNVMEZCVXp0QlFVTm9SRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNkMFJCUVhkRUxIVkRRVUYxUXp0QlFVTXZSaXh6UkVGQmMwUXNjVU5CUVhGRE96dEJRVVV6Ump0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSaXhEUVVGRE96dEJRVVZFT3pzN096czdPenM3T3pzN1FVTTNSVUVzYTBKQlFXdENMRzFDUVVGUExFTkJRVU1zYTBWQlFXVTdPMEZCUlhwRE8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHhRMEZCY1VNc1UwRkJVenRCUVVNNVF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIbENRVUY1UWpzN1FVRkZla0k3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxIbERRVUY1UXl4VFFVRlRPMEZCUTJ4RU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEhGRFFVRnhReXhUUVVGVE8wRkJRemxETzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3T3pzN096czdPenRCUXk5R1dUczdRVUZGV2p0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPenM3T3p0QlEzWktRVHRCUVVOQkxHbENRVUZwUWl4dFFrRkJUeXhEUVVGRExHZEdRVUZaTzBGQlEzSkRMR05CUVdNc2JVSkJRVThzUTBGQlF5dzRSRUZCWjBJN08wRkJSWFJET3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMRTlCUVU4N1FVRkRVRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzVTBGQlV6dEJRVU5VT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEhsQ1FVRjVRaXhKUVVGSk8wRkJRemRDTEhkQ1FVRjNRaXhGUVVGRkxGZEJRVmNzUlVGQlJUdEJRVU4yUXp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEdGQlFXRXNUMEZCVHp0QlFVTndRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFk3UVVGRFFUczdRVUZGUVN4aFFVRmhMRTlCUVU4N1FVRkRjRUk3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk8wRkJRMFlzWVVGQllTeFBRVUZQTzBGQlEzQkNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlR0QlFVTkdMR0ZCUVdFc1QwRkJUenRCUVVOd1FqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEVzUlVGQlJUdEJRVU5HTzBGQlEwRTdPMEZCUlVFc1dVRkJXU3hQUVVGUE8wRkJRMjVDTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenM3T3pzN096czdPenM3TzBGRGVrOVpPenRCUVVWYU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096dEJRM1pLWVRzN1FVRkZZaXhyUWtGQmEwSXNiVUpCUVU4c1EwRkJReXd3UkVGQll6dEJRVU40UXl4alFVRmpMRzFDUVVGUExFTkJRVU1zTkVSQlFXVTdPMEZCUlhKRE96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeERRVUZET3p0QlFVVkVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGTzBGQlEwWTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPMEZCUTBZN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzWVVGQllTeHRRa0ZCYlVJN1FVRkRhRU03UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdGQlFXRXNZMEZCWXp0QlFVTXpRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN08wRkJSVVk3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNhVUpCUVdsQ0xHTkJRV003UVVGREwwSTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNjVVZCUVhGRkxHdERRVUZyUXl4RlFVRkZPenRCUVVWNlJ6dEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJMR2xDUVVGcFFpeG5Ra0ZCWjBJN1FVRkRha003UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFTeHBRa0ZCYVVJc1QwRkJUenRCUVVONFFqdEJRVU5CTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUczdRVUZGUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHTzBGQlEwRTdRVUZEUVN4RlFVRkZPenRCUVVWR08wRkJRMEU3UVVGRFFTeEZRVUZGT3p0QlFVVkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlRzN1FVRkZSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXpzN1FVRkZSRHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hGUVVGRk96dEJRVVZHT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzWjBKQlFXZENMRmxCUVZrN1FVRkROVUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUczdPenM3T3pzN096czdPMEZET1dSQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEVW1FN08wRkJSV0lzYVVKQlFXbENMRzFDUVVGUExFTkJRVU1zZDBSQlFXRTdPMEZCUlhSRE8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRU3h0UTBGQmJVTXNVMEZCVXp0QlFVTTFRenM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096czdPenRCUXpOQ1FUdEJRVUZCTzBGQlFVRTdRVUZISzBJN1FVRlhhRUlzVFVGQlRTeG5Ra0ZCWjBJN1NVRlZia01zV1VGRFJTeEhRVUZWTEVWQlExWXNaVUZCYVVNc1JVRkRha01zVDBGQlowTXNSVUZEYUVNc1YwRkJkMEk3VVVGRmVFSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSE8xRkJRMlFzU1VGQlNTeERRVUZETEdWQlFXVXNSMEZCUnl4bFFVRmxPMUZCUTNSRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHp0UlFVTjBRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEZkQlFWYzdVVUZET1VJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eERRVUZETzFGQlEzQkNMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNUdEpRVU55UWl4RFFVRkRPMGxCUTAwc1QwRkJUenRSUVVOYUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3p0UlFVTndRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITEVOQlFVTTdVVUZEY0VJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMUZCUXk5Q0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdTVUZEWkN4RFFVRkRPMGxCUTAwc1MwRkJTenRSUVVOV0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3p0UlFVTndRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRVZCUVVVN1dVRkRkRUlzVDBGQlRUdFRRVU5RTzFGQlEwUXNWVUZCVlN4RFFVRkRMRWRCUVVjc1JVRkJSVHRaUVVOa0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0blFrRkRhRUlzVDBGQlRUdGhRVU5RTzFsQlEwUXNWMEZCVnp0WlFVTllMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzU1VGQlNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3WjBKQlEzWkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NSVUZCUlR0dlFrRkRkRUlzVDBGQlRUdHBRa0ZEVUR0blFrRkRSQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzJGQlEyWTdhVUpCUVUwN1owSkJRMHdzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkRiRUlzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8yZENRVU12UWl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8yRkJRMkk3VVVGRFNDeERRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU03U1VGRE0wSXNRMEZCUXp0SlFVTk5MRXRCUVVzN1VVRkRWaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVazdTVUZEY2tJc1EwRkJRenRKUVVOTkxFbEJRVWs3VVVGRFZDeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMUZCUTJ4Q0xFbEJRVWtzUTBGQlF5eFhRVUZYTzFsQlEyUXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRPMmRDUVVOb1JDeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwN1VVRkROMElzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRE8wbEJRMnBETEVOQlFVTTdTVUZEVFN4SlFVRkpPMUZCUTFRc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhIUVVGSExFbEJRVWtzUTBGQlF5eFhRVUZYTEVkQlFVY3NTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhOUVVGTk8xRkJRMnBGTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dEpRVU5xUXl4RFFVRkRPMGxCUTAwc1VVRkJVU3hEUVVGRExFbEJRVms3VVVGRE1VSXNTVUZCU1N4SlFVRkpMRWRCUVVjc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwc1JVRkJSVHRaUVVOdVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRmxCUVZrc1NVRkJTU3d3UWtGQk1FSXNRMEZCUXp0VFFVTTFSRHRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVTdTVUZEYmtJc1EwRkJRenRKUVVOTkxFbEJRVWtzUTBGQlF5eFBRVUZwUXp0UlFVTXpReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEU5QlFVOHNRMEZCUXp0UlFVTjZRaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzFGQlEyaENMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTzFGQlEycENMRTlCUVU4c1NVRkJTVHRKUVVOaUxFTkJRVU03U1VGRFR5eFhRVUZYTEVOQlFVTXNUMEZCYVVNN1VVRkRia1FzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVNeFFqdFpRVU5GTEVsQlFVa3NSVUZCUlN4TFFVRkxPMWxCUTFnc1NVRkJTU3hGUVVGRkxFdEJRVXM3V1VGRFdDeFJRVUZSTEVWQlFVVXNTVUZCU1R0VFFVTm1MRVZCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGRFdpeFBRVUZQTEVOQlExSTdTVUZEU0N4RFFVRkRPMGxCUTA4c1UwRkJVenRSUVVObUxFMUJRVTBzYlVKQlFXMUNMRWRCUVhkQ08xbEJReTlETEZWQlFWVXNSVUZCUlN4TlFVRk5PMWxCUTJ4Q0xGZEJRVmNzUlVGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHp0VFFVTXhRanRSUVVORUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N3MFJFRkJXU3hEUVVNelFpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RlFVTlNMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlEzWkNMRzFDUVVGdFFpeEZRVU51UWl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVOcVFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzN1NVRkRia0lzUTBGQlF6dERRVU5HT3pzN096czdPenM3T3pzN08wRkRkRWhFTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVc5RE8wRkJRMWs3UVVGRFdUdEJRVU5zUWp0QlFVTlpPMEZCUTFrN1FVRkRNMEk3UVVGRFdUdEJRVU5PTzBGQlEzRkNPMEZCUld4RkxDdEVRVUZsTzBsQlEySXNPRVJCUVUwN1NVRkRUaXd3UlVGQldUdEpRVU5hTEhOR1FVRnJRanRKUVVOc1FpeHZSVUZCVVR0SlFVTlNMR2RHUVVGak8wbEJRMlFzTkVaQlFXOUNPMGxCUTNCQ0xHbEZRVUZQTzBsQlExQXNOa1ZCUVdFN1NVRkRZaXgxUlVGQlZUdEpRVU5XTERSR1FVRm5RanREUVVOcVFqdEJRVmxCT3pzN096czdPenM3T3pzN08wRkRhRU5FTzBGQlFVRTdRVUZCWlN4TlFVRk5MRTFCUVU4c1UwRkJVU3hEUVVGRExFTkJRVU1zVFVGQlRUdEpRVWN4UXl4WlFVRlpMRTFCUVRCQ0xFVkJRVVVzVDBGQmVVSTdVVUZETDBRc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJTeFBRVUZQTEVOQlFVTTdTVUZEZUVJc1EwRkJRenRKUVVOTkxFOUJRVThzUTBGQlF5eEpRVUZyUWp0UlFVTXZRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVazdTVUZEY0VJc1EwRkJRenRKUVVOTkxFOUJRVTg3VVVGRFdpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5PMGxCUTNCQ0xFTkJRVU03UTBGRFJqczdPenM3T3pzN096czdPenRCUTJKRU8wRkJRVUU3UVVGQlFUdEJRVUZyUlR0QlFVdHVSQ3hOUVVGTkxHdENRVUZ0UWl4VFFVRlJMSEZFUVVGWk8wbEJSekZFTEZsQlEwVXNSMEZCVlN4RlFVTldMRkZCUVhkQ0xFVkJRM2hDTEU5QlFXdERMRVZCUTJ4RExGZEJRWGRDTzFGQlJYaENMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzVVVGQlVTeEZRVUZGTEU5QlFVOHNSVUZCUlN4WFFVRlhMRU5CUVVNN1VVRkRNVU1zU1VGQlNTeERRVUZETEVsQlFVa3NSMEZCUnl4alFVRmpPMUZCUXpGQ0xFMUJRVTBzYjBKQlFXOUNMRWRCUVRCQ08xbEJRMnhFTEUxQlFVMHNSVUZCUlN4SlFVRkpPMWxCUTFvc1RVRkJUU3hGUVVGRkxFbEJRVWs3V1VGRFdpeE5RVUZOTEVWQlFVVXNRMEZCUXp0VFFVTldPMUZCUTBRc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVTXhRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVU5hTEVWQlFVVXNZVUZCWVN4RlFVRkZMRzlDUVVGdlFpeEZRVUZGTEVWQlEzWkRMRTlCUVU4c1EwRkRVanRKUVVOSUxFTkJRVU03U1VGRlRTeEpRVUZKTEVOQlFVTXNUMEZCYlVNN1VVRkROME1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTTdVVUZEZWtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFJRVU5zUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3U1VGRGRFSXNRMEZCUXp0SlFVVk5MRTFCUVUwN1VVRkRXQ3hKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTnFRaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4WFFVRlhMRVZCUVVVN1dVRkRjRUlzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFRRVU4yUXp0UlFVTkVMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdFpRVU53UWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRPMU5CUTNaRE8xRkJRMFFzU1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVWQlFVVTdVVUZETTBNc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVVU3VVVGRk0wTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVU1zVlVGQlZTeEZRVUZGTzFGQlF6TkNMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1VVRkRja01zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVVZ5UXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpkQ0xFOUJRVThzU1VGQlNUdEpRVU5pTEVOQlFVTTdTVUZGVFN4VFFVRlRPMUZCUTJRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkROVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSVHRUUVVNMVFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVN1dVRkRlRU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVTm9RaXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVTTNSRHRSUVVOSUxFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTTNSU3hEUVVGRE8wbEJSVThzYVVKQlFXbENPMUZCUTNaQ0xFMUJRVTBzVlVGQlZTeEhRVUZITEVOQlFVTXNRMEZCUXl4VlFVRlZMRVZCUVVVN1VVRkRha01zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJUdFpRVU01UWl4TlFVRk5MRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVU14UWl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRMnhDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVNelFqdFpRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhwUWtGQmFVSXNSVUZCUlR0blFrRkRiRU1zVjBGQlZ5eERRVUZETEZkQlFWY3NRMEZEY2tJc1JVRkJSU3hIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHbENRVUZwUWl4RFFVRkRMRU5CUTNSRU8yRkJRMFk3YVVKQlFVMDdaMEpCUTB3c1VVRkJVU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZPMjlDUVVOeVF5eExRVUZMTEZGQlFWRTdkMEpCUTFnc1YwRkJWeXhEUVVGRExGZEJRVmNzUTBGRGNrSXNSVUZCUlN4SFFVRkhMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVNNVF6dDNRa0ZEUkN4TlFVRkxPMjlDUVVOUUxFdEJRVXNzVVVGQlVUdDNRa0ZEV0N4WFFVRlhMRU5CUVVNc1YwRkJWeXhEUVVOeVFpeEZRVUZGTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVOd1JEdHZRa0ZEU0R0M1FrRkRSU3hOUVVGTE8ybENRVU5TTzJGQlEwWTdXVUZEUkN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExGZEJRVmNzUTBGQlF6dFJRVU5zUXl4RFFVRkRMRU5CUVVNN1VVRkRSaXhQUVVGUExGVkJRVlU3U1VGRGJrSXNRMEZCUXp0RFFVTkdPenM3T3pzN096czdPenM3TzBGRGJFZEVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRWGRETzBGQlJWZzdRVUY1UkdRc1RVRkJUU3haUVVGWk8wbEJPRUl2UWl4WlFVTkZMRWRCUVZVc1JVRkRWaXhSUVVGM1FpeEZRVU40UWl4UFFVRTBRaXhGUVVNMVFpeFhRVUYzUWp0UlFVVjRRaXhKUVVGSkxFTkJRVU1zWTBGQll5eEhRVUZITzFsQlEzQkNMRlZCUVZVc1JVRkJSU3hQUVVGUE8xbEJRMjVDTEc5Q1FVRnZRaXhGUVVGRkxGRkJRVkU3V1VGRE9VSXNVVUZCVVN4RlFVRkZMRk5CUVZNN1dVRkRia0lzVVVGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJRenRaUVVOc1FpeFRRVUZUTEVWQlFVVXNWVUZCVlR0WlFVTnlRaXhUUVVGVExFVkJRVVVzVTBGQlV6dFpRVU53UWl4VlFVRlZMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzFsQlEzQkNMRk5CUVZNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSVHRaUVVONlF5eFhRVUZYTEVWQlFVVXNUVUZCVFR0WlFVTnVRaXhsUVVGbExFVkJRVVVzUTBGQlF5eFRRVUZUTEVOQlFVTTdXVUZETlVJc1UwRkJVeXhGUVVGRkxFdEJRVXM3V1VGRGFFSXNWMEZCVnl4RlFVRkZPMmRDUVVOWUxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTk9MRlZCUVZVc1JVRkJSU3hEUVVGRE8yRkJRMlE3VTBGRFJqdFJRVU5FTEVsQlFVa3NRMEZCUXl4SlFVRkpMRWRCUVVjc1VVRkJVVHRSUVVOd1FpeEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjN1VVRkRaQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRTdVVUZEZUVJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTzFGQlEzUkNMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzVjBGQlZ6dFJRVVU1UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWs3VVVGRGJrSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSk8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1NVRkJTVHRSUVVONlFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWxCUVVrN1VVRkRla0lzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhIUVVGSExFbEJRVWs3VVVGRGFFTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRk8xRkJRMnBDTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1NVRkJTVHRSUVVOMlFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrN1VVRkRja0lzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpPMUZCUlhoQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NVVUZCVVR0UlFVTTFRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTTdVVUZGZEVJc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGREwwTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1NVRkROME1zUTBGQlF6dEpRVU5OTEVsQlFVa3NRMEZCUXl4UFFVRTJRanRSUVVOMlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrN1VVRkRia0lzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4UFFVRlBMRU5CUVVNN1VVRkRla0lzU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0UlFVTnNRaXhKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVUZGTzFGQlEycENMRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJUdEpRVU4wUWl4RFFVRkRPMGxCUTAwc1RVRkJUVHRSUVVOWUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMWxCUTJwQ0xFOUJRVTA3VTBGRFVEdFJRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRaUVVOa0xFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZPMU5CUTNCQ08xRkJSVVFzYVVKQlFXbENPMUZCUTJwQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEV0QlFVc3NUMEZCVHl4RlFVRkZPMWxCUTJwRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR3RDUVVGclFpeEZRVUZGTzFOQlEzWkRPMkZCUVUwN1dVRkRUQ3hSUVVGUkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZPMmRDUVVNdlFpeExRVUZMTEU5QlFVOHNRMEZCUXl4RFFVRkRPMjlDUVVOYUxFbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTzI5Q1FVTnlReXhOUVVGTE8ybENRVU5PTzJkQ1FVTkVMRXRCUVVzc1UwRkJVeXhEUVVGRExFTkJRVU03YjBKQlEyUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVN2IwSkJRM1JETEUxQlFVczdhVUpCUTA0N1owSkJRMFFzUzBGQlN5eE5RVUZOTEVOQlFVTXNRMEZCUXp0dlFrRkRXQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVN2IwSkJRMjVETEUxQlFVczdhVUpCUTA0N1owSkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTTdiMEpCUTFBc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVkQlFVY3NRMEZCUXp0cFFrRkRPVVE3WVVGRFJqdFRRVU5HTzFGQlEwUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVTTNRaXhQUVVGUExFbEJRVWs3U1VGRFlpeERRVUZETzBsQlEwMHNUMEZCVHl4RFFVRkRMRWxCUVc5Q08xRkJRMnBETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1NVRkJTVHRKUVVOMFFpeERRVUZETzBsQlEwMHNWVUZCVlN4RFFVRkRMRTlCUVRSQ0xFVkJRVVVzVFVGQlRTeEhRVUZITEV0QlFVczdVVUZETlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETzFGQlEyNUVMRWxCUVVrc1RVRkJUU3hGUVVGRk8xbEJRMVlzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0VFFVTmtPMGxCUTBnc1EwRkJRenRKUVVOTkxGTkJRVk03VVVGRFpDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVXNSVUZCUlN4UFFVRlBMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXp0SlFVTTNSQ3hEUVVGRE8wbEJRMDBzVTBGQlV6dFJRVU5rTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6VkNMRTlCUVU4c1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVTdVMEZETlVJN1VVRkRSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVTnlRaXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlExUXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRWEZDTEVOQlEzWkZPMGxCUTBnc1EwRkJRenRKUVVOTkxFOUJRVTg3VVVGRFdpeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xTkJRMnBETzFGQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVWQlFVVTdXVUZETjBJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETzFOQlEyaEVPMUZCUTBRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU03VVVGRE0wTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNN1NVRkRla01zUTBGQlF6dEpRVU5OTEdGQlFXRXNRMEZCUXl4UFFVRm5RanRSUVVOdVF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4N1VVRkRkRUlzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVN1dVRkRaaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEU5QlFVOHNSVUZCUlR0WlFVTllMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRPVUk3WVVGQlRUdFpRVU5NTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdXVUZEYkVNc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRUUVVOcVF6dEpRVU5JTEVOQlFVTTdTVUZEVFN4WFFVRlhMRU5CUVVNc1MwRkJZVHRSUVVNNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTE8xRkJRemxDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1NVRkRaaXhEUVVGRE8wbEJRMDBzVlVGQlZTeERRVUZETEZkQlFXMUNPMUZCUTI1RExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4SFFVRkhMRmRCUVZjN1VVRkRkRU1zU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlR0SlFVTm1MRU5CUVVNN1NVRkRUU3hMUVVGTExFTkJRVU1zUlVGQlZUdFJRVU55UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZPMWxCUXpsQ0xFbEJRVWtzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1MwRkJTeXhGUVVGRkxFVkJRVVU3WjBKQlF6bENMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRE8yZENRVU55UXl4UFFVRk5PMkZCUTFBN1VVRkRTQ3hEUVVGRExFTkJRVU03U1VGRFNpeERRVUZETzBsQlExTXNXVUZCV1R0UlFVTndRaXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTnFRaXhQUVVGTk8xTkJRMUE3VVVGRFJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4SlFVRkpMRXRCUVVzc1VVRkJVU3hGUVVGRk8xbEJRekZDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFdEJRVXNzVDBGQlR5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVU3WjBKQlEyeEZMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1lVRkRka003VTBGRFJqdGhRVUZOTzFsQlEwd3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0VFFVTjJRenRKUVVOSUxFTkJRVU03U1VGRFV5eFZRVUZWTzFGQlEyeENMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEycENMRTlCUVUwN1UwRkRVRHRSUVVORUxFbEJRVWtzU1VGQlNTeERRVUZETEVsQlFVa3NTMEZCU3l4UlFVRlJMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1MwRkJTeXhQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSVHRuUWtGRGJFVXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXp0aFFVTndRenRUUVVOR08yRkJRVTA3V1VGRFRDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETzFOQlEzQkRPMGxCUTBnc1EwRkJRenRKUVVORUxHRkJRV0U3U1VGRFNDeHBRa0ZCYVVJN1VVRkRla0lzU1VGQlNTeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMWxCUTNCQ0xFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNUVUZCVFN4RlFVRkZPMU5CUXpGQ08xRkJRMFFzVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZCUXl4RFFVRkRMR1ZCUVdVc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJRenRSUVVNM1JDeFRRVUZUTzFGQlExUXNaVUZCWlN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMWxCUXpORUxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhOUVVGblFpeERRVUZETzFGQlF6TkRMRU5CUVVNc1EwRkJRenRSUVVOR0xHTkJRV003VVVGRFpDeGxRVUZsTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdXVUZETTBRc2QwSkJRWGRDTzFsQlEzaENMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJUdG5Ra0ZEZEVJc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFpRVUZaTEVWQlFVVTdZVUZEYkVNN1dVRkRSQ3hKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEUxQlFXZENPMWxCUlhKRExFbEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSVHRuUWtGRGJrTXNPRUpCUVRoQ08yZENRVU01UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGZEJRVmNzUlVGQlJUdGhRVU5xUXp0cFFrRkJUVHRuUWtGRFRDeHRRa0ZCYlVJN1owSkJRMjVDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFVkJRVVU3YjBKQlF6VkNMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVjBGQlZ5eERRVU0xUWl4RlFVRkZMRWRCUVVjc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVU0xUkR0cFFrRkRSanRoUVVOR08xRkJRMGdzUTBGQlF5eERRVUZETzFGQlEwWXNaVUZCWlN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETzFGQlJYaERMR1ZCUVdVN1VVRkRaaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFGQlJYQkRMRWxCUVVrc1EwRkJReXhYUVVGWExFZEJRVWNzWlVGQlpUdFJRVU5zUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhYUVVGWE8wbEJRM3BDTEVOQlFVTTdTVUZEVXl4cFFrRkJhVUlzUTBGQlF5eEpRVUZyUWp0UlFVTTFReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU03U1VGRE5VTXNRMEZCUXp0SlFVTlRMRmRCUVZjc1EwRkJReXhQUVVFMFFqdFJRVU5vUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNN1NVRkRPVVVzUTBGQlF6dEpRVU5UTEZkQlFWYzdVVUZEYmtJc2EwSkJRV3RDTzFGQlEyeENMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNSVUZCUlR0UlFVTjZRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVTdVVUZEYWtJc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSVHRaUVVNM1FpeE5RVUZOTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRmNrUXNUVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3dyUTBGQlRTeERRVU4yUWp0blFrRkRSeXhMUVVGclFpeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRWRCUVVjN1owSkJRMnhETEV0QlFXdENMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUjBGQlJ6dGhRVU53UXl4RlFVTkVPMmRDUVVORkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWxCUVVrc1EwRkJRenRoUVVNdlFpeERRVU5HTzFsQlJVUXNhMEpCUVd0Q08xbEJRMnhDTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRE8xbEJRM0JDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dFJRVU16UWl4RFFVRkRMRU5CUVVNN1NVRkRTaXhEUVVGRE8wbEJRMU1zVlVGQlZUdFJRVU5zUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRSUVVNeFF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhUUVVGVExFVkJRVVVzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXp0UlFVTjBReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4aFFVRmhMRVZCUVVVc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF6dEpRVU42UXl4RFFVRkRPMGxCUTBRc2FVSkJRV2xDTzBsQlExUXNhMEpCUVd0Q0xFTkJRVU1zVFVGQll5eEZRVUZGTEZOQlFXMUNPMUZCUXpWRUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NUVUZCVFR0UlFVTXpRaXhaUVVGWk8xRkJRMW9zU1VGQlNTeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVU3V1VGRE4wSXNTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRE8xTkJReTlETzFGQlEwUXNWMEZCVnp0UlFVTllMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNSMEZCUnl4SlFVRkpMQ3REUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZPMWxCUTNwRUxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMU5CUTJwRUxFTkJRVU03VVVGRFJpeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNN1VVRkZla01zU1VGQlNTeERRVUZETEc5Q1FVRnZRanRoUVVOMFFpeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0aFFVTnFSQ3hUUVVGVExFVkJRVVU3VVVGRFpDeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4SFFVRkhMRVZCUVVVN1dVRkRPVU1zU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFMUJRVTBzUlVGQlJUdFJRVU53UXl4RFFVRkRMRU5CUVVNN1VVRkRSaXhOUVVGTkxFTkJRVU1zV1VGQldTeEZRVUZGTzFGQlJYSkNMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03VVVGRE9VTXNTVUZCU1N4VFFVRlRMRVZCUVVVN1dVRkRZaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNCRU8xRkJRMFFzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4cFFrRkJhVUlzUlVGQlJTeE5RVUZOTEVOQlFVTTdTVUZETjBNc1EwRkJRenRKUVVOUExHdENRVUZyUWp0UlFVTjRRaXhUUVVGVE8xRkJRMVFzU1VGQlNTeEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPMWxCUTNKQ0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RlFVRkZPMU5CUXpOQ08xRkJRMFFzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTTdXVUZEZGtNc2EwSkJRV3RDTEVWQlFVVXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNN1UwRkRka1FzUTBGQlF6dFJRVU5HTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1UwRkJVeXhEUVVONlFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTzFsQlEzSkNMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzSzBOQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxFVkJRVVU3WjBKQlEzWkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRoUVVOMFF5eERRVUZETzFsQlEwWXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdXVUZETTBJc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1dVRkRia1VzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hEUVVGRExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMWxCUTNoRUxFMUJRVTBzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWRCUVVjc1JVRkJSVHRuUWtGRGRFSXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEUxQlFVMHNRMEZCUXp0WlFVTnFReXhEUVVGRExFTkJRVU03V1VGRFJpeFBRVUZQTEUxQlFVMDdVVUZEWml4RFFVRkRMRU5CUVVNc1EwRkRTRHRSUVVORUxFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWazdTVUZETVVJc1EwRkJRenRKUVVWRUxHRkJRV0U3U1VGRFRDeGxRVUZsTzFGQlEzSkNMRWxCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJUdFpRVU5zUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJUdFRRVU40UWp0UlFVTkVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVN1dVRkRPVUlzVFVGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkRMRk5CUVZNc1JVRkJSVHRaUVVOcVF5eE5RVUZOTEdGQlFXRXNSMEZEYWtJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zWVVGQllUdFpRVU53UlN4SlFVRkpMRWRCUVVjc1IwRkRUQ3hEUVVGRExHRkJRV0VzU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03WjBKQlEyeEVMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVYzdXVUZET1VJc1NVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTEVWQlFVVTdaMEpCUXpOQ0xFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSE8yRkJRMjVETzFsQlEwUXNUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTjZSQ3hEUVVGRExFTkJRVU03VVVGRFJpeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJReXhUUVVGVExFTkJRekZDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU03VVVGRGVFTXNNRUpCUVRCQ08xRkJRekZDTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlF5OUVPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV6dEpRVU4yUWl4RFFVRkRPMGxCUlU4c2JVSkJRVzFDTEVOQlFVTXNTVUZCYTBJN1VVRkROVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU03U1VGRGVFTXNRMEZCUXp0SlFVVlBMR0ZCUVdFc1EwRkJReXhKUVVGclFqdFJRVU4wUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXp0SlFVTjZReXhEUVVGRE8wbEJSVVFzTmtKQlFUWkNPMGxCUTNKQ0xHTkJRV01zUTBGRGNFSXNTVUZCYTBJc1JVRkRiRUlzVVVGQmFVSTdVVUZGYWtJc1RVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJPMUZCUTNSRExFMUJRVTBzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWVHRSUVVNeFF5eE5RVUZOTEdOQlFXTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGSE0wUTdVVUZEUkN4TlFVRk5MR2RDUVVGblFpeEhRVUZITEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVkcVJUdFJRVVZFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV6dFJRVVY0UXl4UlFVRlJMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTzFsQlF6ZENMRXRCUVVzc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlExb3NhMEpCUVd0Q08yZENRVU5zUWl4M1EwRkJkME03WjBKQlEzaERMRzlFUVVGdlJEdG5Ra0ZEY0VRc1owSkJRV2RDTzJkQ1FVTm9RaXhMUVVGTE8yRkJRMDQ3V1VGRFJDeExRVUZMTEZsQlFWa3NRMEZCUXp0WlFVTnNRaXhMUVVGTExGRkJRVkVzUTBGQlF6dFpRVU5rTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN1owSkJRMlFzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMjlDUVVObUxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTzNkQ1FVTnFReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRExGRkJRVkU3ZDBKQlF6bERMRk5CUVZNN2NVSkJRMVlzUTBGQlF6dHZRa0ZEUml4VFFVRlRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eDFRa0ZCZFVJc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJUdHZRa0ZEYkVRc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhSUVVGUk8yOUNRVU01UXl4VlFVRlZMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFTkJRVU1zVlVGQlZUdHZRa0ZEY0VRc1lVRkJZU3hGUVVGRkxGRkJRVkU3ZDBKQlEzSkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkRMMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0dlFrRkRNMElzVjBGQlZ5eEZRVUZGTEZGQlFWRTdkMEpCUTI1Q0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGREwwSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRwUWtGRE5VSXNRMEZCUXp0aFFVTklPMWxCUTBRc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlExQXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhyUWtGQmEwSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dGhRVU16UkR0VFFVTkdPMGxCUTBnc1EwRkJRenRKUVVOUExHbENRVUZwUWl4RFFVTjJRaXhKUVVGclFpeEZRVU5zUWl4UFFVRTRRanRSUVVVNVFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hGUVVGRk8xbEJRemRDTEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJRenRaUVVOc1JDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUlVGQlJTeFBRVUZQTEVOQlFVTTdVMEZEYUVRN1VVRkRSQ3hSUVVGUkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNiMEpCUVc5Q0xFVkJRVVU3V1VGRGVrTXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGRFlpeFJRVUZSTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRk8yOUNRVU0zUWl4WFFVRlhPMjlDUVVOWUxFdEJRVXNzV1VGQldTeERRVUZETEVOQlFVTTdkMEpCUTJwQ0xFOUJRVTg3TUVKQlEwOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVE96c3lRa0ZGY2tJc1QwRkJUeXhEUVVGRExGTkJRVk03SzBKQlEySXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03T3p0aFFVZHlRenR4UWtGRFJqdHZRa0ZEUkN4VFFVRlRPMjlDUVVOVUxFdEJRVXNzVVVGQlVTeERRVUZETEVOQlFVTTdkMEpCUTJJc1QwRkJUenM3YlVOQlJXZENMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZUczdZVUZGTjBNN2NVSkJRMFk3YjBKQlEwUXNZVUZCWVR0dlFrRkRZaXhMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETzNkQ1FVTmtMRTlCUVU4N08zbENRVVZOTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenM3TWtKQlJYQkNMRTlCUVU4c1EwRkJReXhUUVVGVE95dENRVU5pTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE96czdhMEpCUjJoRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnpzN1lVRkZOMEk3Y1VKQlEwWTdhVUpCUTBZN1owSkJRMFFzVFVGQlN6dGhRVU5PTzFsQlEwUXNTMEZCU3l4WFFVRlhMRU5CUVVNc1EwRkJRenRuUWtGRGFFSXNVVUZCVVN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJUdHZRa0ZETjBJc1YwRkJWenR2UWtGRFdDeExRVUZMTEZsQlFWa3NRMEZCUXl4RFFVRkRPM2RDUVVOcVFpeFBRVUZQT3p0NVFrRkZUU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTTdPekpDUVVWd1FpeEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xFTkJRVU1zU1VGQlNTeERRVUZET3l0Q1FVTTVRaXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXpzN08yRkJSM0pETzNGQ1FVTkdPMjlDUVVORUxGTkJRVk03YjBKQlExUXNTMEZCU3l4UlFVRlJMRU5CUVVNc1EwRkJRenQzUWtGRFlpeFBRVUZQT3p0dFEwRkZaMElzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZPenRoUVVVM1F6dHhRa0ZEUmp0dlFrRkRSQ3hoUVVGaE8yOUNRVU5pTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNN2QwSkJRMlFzVDBGQlR6czdlVUpCUlUwc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUT3pzeVFrRkZjRUlzU1VGQlNTeERRVUZETEhWQ1FVRjFRaXhEUVVGRExFbEJRVWtzUTBGQlF6c3JRa0ZET1VJc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdPenRyUWtGSGFFTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWE96dGhRVVUzUWp0eFFrRkRSanRwUWtGRFJqdG5Ra0ZEUkN4TlFVRkxPMkZCUTA0N1dVRkRSQ3hQUVVGUExFTkJRVU1zUTBGQlF6dG5Ra0ZEVUN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVOaUxEUkNRVUUwUWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHOUNRVUZ2UWl4SFFVRkhMRU5CUTJwRk8yRkJRMFk3VTBGRFJqdEpRVU5JTEVOQlFVTTdTVUZEVHl4clFrRkJhMEk3VVVGRGVFSXNUVUZCVFN4bFFVRmxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTXNUVUZCVFR0UlFVTXpSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEZGQlFWRTdVVUZEZEVJc1NVRkJTU3hOUVVGTkxFZEJRVWNzVVVGQlVUdFJRVU55UWl4TFFVRkxMRTFCUVUwc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVTdXVUZEYUVNc1RVRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1lVRkJZU3hEUVVGRE8xbEJRelZETEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTTdXVUZET1VJc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJRenRUUVVNdlFqdFJRVU5FTEUxQlFVMHNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4bFFVRmxPMUZCUTNCRUxFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NUVUZCVFR0UlFVTXhRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVsQlFVazdTVUZETTBJc1EwRkJRenRKUVVOUExIVkNRVUYxUWl4RFFVRkRMRWxCUVd0Q08xRkJRMmhFTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdGQlFXRXNRMEZCUXp0UlFVTTFReXhOUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkRlRU1zVVVGQlVTeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGRGJFVTdVVUZEUkN4UFFVRlBMRXRCUVVzN1NVRkRaQ3hEUVVGRE8wbEJRMDhzWlVGQlpTeERRVUZETEVsQlFXdENPMUZCUTNoRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSVHRaUVVNelFpeFBRVUZQTEVWQlFVVTdVMEZEVmp0UlFVTkVMRWxCUVVrc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1dVRkRPVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhMUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8xTkJRM0JGTzFGQlEwUXNTVUZCU1N4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eExRVUZMTEZGQlFWRXNSVUZCUlR0WlFVTTVReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhMUVVOd1F5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVU51UXl4RlFVRkZPMU5CUTBnN1NVRkRTQ3hEUVVGRE8wbEJRMDhzYTBKQlFXdENMRU5CUVVNc1QwRkJlVUk3VVVGRGJFUXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRE8xbEJRMllzU1VGQlNTeEZRVUZGT3pzN096czdPenM3T3pzN01FSkJXV01zTkVSQlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF6czdPenM3T3pzN096czdORUpCVnpkQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXpzN096czdPenM3T3pzN096czdPenM3T3pzN1dVRnZRblJETEU5QlFVOHNRMEZCUXl4aFFVRmhMRVZCUVVVN096czdUMEZKTlVJN1dVRkRSQ3hSUVVGUkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMU5CUTI1Q0xFTkJRVU03U1VGRFNpeERRVUZETzBOQlEwWTdPenM3T3pzN096czdPenM3UVVOc2IwSkVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRU3RDTzBGQlEzRkRPMEZCUjNKRUxFMUJRVTBzVlVGQlZ5eFRRVUZSTEhORVFVRmhPMGxCUlc1RUxGbEJRMFVzUjBGQlZTeEZRVU5XTEZGQlFYZENMRVZCUTNoQ0xFOUJRVFJDTEVWQlF6VkNMRmRCUVhkQ08xRkJSWGhDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRVZCUVVVc1VVRkJVU3hGUVVGRkxFOUJRVThzUlVGQlJTeFhRVUZYTEVOQlFVTTdVVUZETVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVOTkxFMUJRVTA3VVVGRFdDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOcVFpeFBRVUZOTzFOQlExQTdVVUZEUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRVVU3V1VGRFpDeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHRUUVVOd1FqdFJRVU5FTEVsQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExHVkJRV1VzUlVGQlJUdFJRVU51UXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpkQ0xIRkVRVUZ4UkR0UlFVTnlSQ3hKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTzFGQlEzQkNMRlZCUVZVc1EwRkJReXhIUVVGSExFVkJRVVU3V1VGRFpDeEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMUZCUTNCQ0xFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTTdVVUZEVUN4UFFVRlBMRWxCUVVrN1NVRkRZaXhEUVVGRE8wbEJRMDBzWVVGQllTeERRVUZETEU5QlFXZENPMUZCUTI1RExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRGFFTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFVkJRVVU3WjBKQlEzaENMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0aFFVTnFSRHRSUVVOSUxFTkJRVU1zUTBGQlF6dEpRVU5LTEVOQlFVTTdTVUZEVXl4VFFVRlRPMUZCUTJwQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOc1JDeERRVUZETzBsQlEwOHNZVUZCWVR0UlFVTnVRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUlVGQlJUdFJRVU0xUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eEZRVUZGTzFsQlF6VkNMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVN1owSkJRMmhETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eEZRVUZGTzI5Q1FVTTNSQ3hUUVVGVExFVkJRVVVzU1VGQlNUdHZRa0ZEWml4VFFVRlRMRVZCUVVVc1VVRkJVVHRwUWtGRGNFSXNRMEZCUXp0WlFVTktMRU5CUVVNc1EwRkJRenRUUVVOSU8wbEJRMGdzUTBGQlF6dEpRVU5QTEdWQlFXVTdVVUZEY2tJc1NVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTXNWVUZCVlN4RlFVRkZPMUZCUTJ4RExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNSVUZCUlR0WlFVTTFReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzN1dVRkRPVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMSE5DUVVGelFpeExRVUZMTEZkQlFWY3NSVUZCUlR0blFrRkRka1FzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4M1FrRkJkMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1lVRkRla1E3V1VGRFJDeE5RVUZOTEU5QlFVOHNSMEZCYzBJc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRuUWtGRGFrVXNTMEZCU3p0aFFVTk9MRU5CUVVNN1dVRkRSaXhsUVVGbE8xbEJRMllzVFVGQlRTeFZRVUZWTEVkQlFVY3NTVUZCU1N4blJFRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNN1dVRkROMFFzVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03V1VGRGNrTXNWVUZCVlN4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTzJkQ1FVTXhRaXh2UTBGQmIwTTdXVUZEZEVNc1EwRkJReXhEUVVGRE8xbEJRMFlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSVHRuUWtGRE1VSXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJReXhEUVVGRE8yRkJRMnBGTzFsQlEwUXNUMEZCVHl4VlFVRlZPMUZCUTI1Q0xFTkJRVU1zUTBGQlF6dFJRVU5HTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZEYUVNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRPMUZCUTNKRExFTkJRVU1zUTBGQlF6dFJRVU5HTEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrN1NVRkRNVUlzUTBGQlF6dEpRVU5QTEZkQlFWYzdVVUZEYWtJc1RVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRhRU1zU1VGQlNTeERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTmFMRTlCUVUwN1UwRkRVRHRSUVVORUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlEyaENMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4UFFVRlBMRU5CUVVNN1dVRkROMElzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZET1VNN1NVRkRTQ3hEUVVGRE8wbEJRMDhzYVVKQlFXbENMRU5CUVVNc1QwRkJaMEk3VVVGRGVFTXNUMEZCVHl4RFFVTk1MRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOcVJTeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMR3RDUVVGclFpeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZEYkVVN1NVRkRTQ3hEUVVGRE8wbEJRMDhzYTBKQlFXdENMRU5CUVVNc1ZVRkJhMEk3VVVGRE0wTXNUMEZCVHl4VlFVRlZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVU3U1VGRE4wSXNRMEZCUXp0SlFVTlBMR2RDUVVGblFqdFJRVU4wUWl4TlFVRk5MRWxCUVVrc1IwRkRVaXhQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRkZCUVZFN1dVRkRlRU1zUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVenRaUVVONFFpeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN6dFJRVU5zUXl4UFFVRlBMRWxCUVVrc1EwRkJReXhSUVVGUk8yRkJRMnBDTEVkQlFVY3NRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTTdZVUZEY2tRc1RVRkJUU3hEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZPMWxCUTNKQ0xFOUJRVThzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1NVRkJTU3hEUVVGRE8xRkJRemRDTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRWQ3hEUVVGRE8wTkJRMFk3T3pzN096czdPenM3T3pzN1FVTXhSMFE3UVVGQlFUdEJRVUZsTEUxQlFVMHNUMEZCVVN4VFFVRlJMRU5CUVVNc1EwRkJReXhQUVVGUE8wbEJSelZETEZsQlEwVXNUMEZITkVJc1JVRkROVUlzVDBGQk1rSTdVVUZGTTBJc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTTdTVUZEZWtJc1EwRkJRenRKUVVOTkxFOUJRVThzUTBGQlF5eEpRVUZyUWp0UlFVTXZRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVazdTVUZEY0VJc1EwRkJRenRKUVVOTkxFOUJRVTg3VVVGRFdpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5PMGxCUTNCQ0xFTkJRVU03UTBGRFJqczdPenM3T3pzN096czdPenRCUTNCQ1JEdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRm5SRHRCUVVWcVFqdEJRVzFDYUVJc1RVRkJUU3hoUVVGaE8wbEJhVUpvUXl4WlFVTkZMRWRCUVZVc1JVRkRWaXhSUVVGM1FpeEZRVU40UWl4UFFVRTBRaXhGUVVNMVFpeFhRVUYzUWp0UlFVVjRRaXhOUVVGTkxHTkJRV01zUjBGQmQwSTdXVUZETVVNc1UwRkJVeXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1RVRkJUU3hGUVVGRk8xbEJRM3BETEZkQlFWY3NSVUZCUlN4TlFVRk5PMWxCUTI1Q0xFdEJRVXNzUlVGQlJTeFRRVUZUTzFsQlEyaENMRWxCUVVrc1JVRkJSU3hKUVVGSk8xbEJRMVlzVTBGQlV5eEZRVUZGTEZOQlFWTTdXVUZEY0VJc1RVRkJUU3hGUVVGRkxFTkJRVU03V1VGRFZDeFBRVUZQTEVWQlFVVXNRMEZCUXp0WlFVTldMRmRCUVZjc1JVRkJSU3hIUVVGSE8xbEJRMmhDTEhOQ1FVRnpRaXhGUVVGRkxGRkJRVkU3V1VGRGFFTXNaVUZCWlN4RlFVRkZMRU5CUVVNc1UwRkJVeXhEUVVGRE8xTkJRemRDTzFGQlEwUXNTVUZCU1N4RFFVRkRMRWxCUVVrc1IwRkJSeXhUUVVGVE8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRWRCUVVjc1IwRkJSenRSUVVOa0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVR0UlFVTjRRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1JVRkJSU3hGUVVGRkxHTkJRV01zUlVGQlJTeFBRVUZQTEVOQlFVTTdVVUZEZWtRc1NVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFhRVUZYTzFGQlJUbENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNUdFJRVU51UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFVkJRVVU3VVVGRGJFSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhSUVVGUk8xRkJRelZDTEVsQlFVa3NRMEZCUXl4aFFVRmhMRWRCUVVjc1EwRkJRenRSUVVOMFFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4SFFVRkhMRWxCUVVrN1VVRkRNVUlzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhIUVVGSExFbEJRVWs3U1VGRGJrTXNRMEZCUXp0SlFVTk5MRWxCUVVrc1EwRkJReXhQUVVFMlFqdFJRVU4yUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhEUVVGRExFOUJRVThzUTBGQlF6dFJRVU42UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRk8xRkJRMjVDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVN1VVRkRhRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMGxCUTNSQ0xFTkJRVU03U1VGRFRTeE5RVUZOTzFGQlExZ3NTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVU3V1VGRGFrSXNUMEZCVFR0VFFVTlFPMUZCUTBRc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3VTBGRGNFSTdVVUZEUkN4SlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSVHRSUVVOMFF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFGQlF6ZENMRTlCUVU4c1NVRkJTVHRKUVVOaUxFTkJRVU03U1VGRFRTeFRRVUZUTzFGQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkROMFFzUTBGQlF6dEpRVU5OTEZOQlFWTTdVVUZEWkN4SlFVRkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTXNSVUZCUlR0WlFVTTNRaXhQUVVGUExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZCVXl4RlFVRkZPMU5CUXpWQ08xRkJRMFFzVDBGQlR5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkRla0lzUTBGQlF5eEpRVUZKTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhGUVVNM1F5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVU0zUWp0SlFVTklMRU5CUVVNN1NVRkRUU3hQUVVGUE8xRkJRMW9zU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMWxCUTJRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRUUVVOcVF6dFJRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTzFsQlF6bENMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUTBGQlF6dFRRVU5xUkR0SlFVTklMRU5CUVVNN1NVRkRUU3hoUVVGaExFTkJRVU1zVDBGQlowSTdVVUZEYmtNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTzFGQlEzUkNMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyWXNUMEZCVFR0VFFVTlFPMUZCUTBRc1NVRkJTU3hQUVVGUExFVkJRVVU3V1VGRFdDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzFOQlF6bENPMkZCUVUwN1dVRkRUQ3hKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1RVRkJUU3hGUVVGRk8xbEJRMjVETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdVMEZEYWtNN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEV0QlFXRTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3p0UlFVTTVRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBsQlEyWXNRMEZCUXp0SlFVTk5MRXRCUVVzc1EwRkJReXhGUVVGVk8xRkJRM0pDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdXVUZEYUVNc1NVRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkJSVHRuUWtGREwwSXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNN1owSkJRM1pETEU5QlFVMDdZVUZEVUR0UlFVTklMRU5CUVVNc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGRFV5eFRRVUZUTEV0QlFVa3NRMEZCUXp0SlFVTmtMR2xDUVVGcFFpeERRVUZETEVsQlFXdENPMUZCUXpWRExFOUJRVThzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF6dEpRVU0xUXl4RFFVRkRPMGxCUTFNc1pVRkJaU3hEUVVGRExFbEJRV3RDTzFGQlF6RkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlR0WlFVTXpRaXhQUVVGUExFVkJRVVU3VTBGRFZqdFJRVU5FTEVsQlFVa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZET1VNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMU5CUTNCRk8xRkJRMFFzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhMUVVGTExGRkJRVkVzUlVGQlJUdFpRVU01UXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4TFFVTndReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVOdVF5eEZRVUZGTzFOQlEwZzdTVUZEU0N4RFFVRkRPMGxCUTFNc2EwSkJRV3RDTzFGQlF6RkNMRTFCUVUwc1pVRkJaU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRTFCUVUwN1VVRkRNMFFzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4UlFVRlJPMUZCUTNSQ0xFbEJRVWtzVFVGQlRTeEhRVUZITEZGQlFWRTdVVUZEY2tJc1MwRkJTeXhOUVVGTkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RlFVRkZPMWxCUTJoRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUTBGQlF6dFpRVU0xUXl4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RFFVRkRPMWxCUXpsQ0xFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGREwwSTdVVUZEUkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1pVRkJaVHRSUVVOd1JDeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRTFCUVUwN1VVRkRNVUlzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4SlFVRkpPMGxCUXpOQ0xFTkJRVU03U1VGRFV5eDNRa0ZCZDBJc1EwRkJReXhKUVVGclFqdFJRVU51UkN4TlFVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4aFFVRmhMRU5CUVVNN1VVRkROVU1zVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRM2hETEZGQlFWRXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlEyeEZPMUZCUTBRc1QwRkJUeXhMUVVGTE8wbEJRMlFzUTBGQlF6dEpRVU5UTEcxQ1FVRnRRaXhEUVVGRExFOUJRV2RDTEVWQlFVVXNVMEZCYlVJN1VVRkRha1VzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4UFFVRlBPMUZCUXpkQ0xHTkJRV003VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUlVGQlJUdFpRVU01UWl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNUVUZCVFN4RlFVRkZPMU5CUTNCRE8xRkJRMFFzWVVGQllUdFJRVU5pTEVsQlFVa3NRMEZCUXl4eFFrRkJjVUlzUjBGQlJ5eEpRVUZKTEdkRVFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTzFsQlF6ZEVMRXRCUVVzc1JVRkJSU3hUUVVGVE8xbEJRMmhDTEZOQlFWTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0VFFVTTFReXhEUVVGRE8xRkJRMFlzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPMUZCUlRGRExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJN1lVRkRka0lzVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEYkVRc1UwRkJVeXhGUVVGRk8xRkJSV1FzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhEUVVGRExFVkJRVVVzUTBGQlF5eFpRVUZaTEVWQlFVVXNSMEZCUnl4RlFVRkZPMWxCUXk5RExFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhOUVVGTkxFVkJRVVU3VVVGRGNrTXNRMEZCUXl4RFFVRkRPMUZCUTBZc1QwRkJUeXhEUVVGRExGbEJRVmtzUlVGQlJUdFJRVVYwUWl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVVUZEZEVRc1NVRkJTU3hUUVVGVExFVkJRVVU3V1VGRFlpeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEVOQlFVTTdVMEZEZUVNN1VVRkRSQ3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEd0Q1FVRnJRaXhGUVVGRkxFOUJRVThzUTBGQlF6dEpRVU12UXl4RFFVRkRPMGxCUTFNc1YwRkJWeXhEUVVGRExFOUJRVFJDTzFGQlEyaEVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF6dEpRVU55UkN4RFFVRkRPMGxCUTFNc1dVRkJXVHRSUVVOd1FpeHJRa0ZCYTBJN1VVRkRiRUlzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhGUVVGRk8xRkJRM3BDTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1JVRkJSVHRSUVVOc1FpeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTzFsQlF6ZENMRTFCUVUwc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTnlSQ3hOUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEdkRVFVRlBMRU5CUVVVc1MwRkJiVUlzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0WlFVVTVSQ3hQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXp0WlFVTnlRaXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN1VVRkROMElzUTBGQlF5eERRVUZETzBsQlEwb3NRMEZCUXp0SlFVTlBMR3RDUVVGclFqdFJRVU40UWl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFTkJRVU1zUTBGQlF5eFZRVUZWTEVWQlFVVTdVVUZEYkVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeEZRVUZGTzFsQlF6VkRMRTFCUVUwc1QwRkJUeXhIUVVGelFpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzJkQ1FVTnFSU3hMUVVGTExFVkJRVVVzVTBGQlV6dG5Ra0ZEYUVJc1UwRkJVeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8yRkJRelZETEVOQlFVTTdXVUZEUml4bFFVRmxPMWxCUTJZc1RVRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeG5SRUZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzUlVGQlJTeFBRVUZQTEVOQlFVTTdXVUZETjBRc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1dVRkRja01zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRE5VSXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdZVUZEY2tVN1dVRkRSQ3hWUVVGVkxFTkJRVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVN1owSkJRekZDTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eFBRVUZQTEVOQlFVTTdXVUZEYmtNc1EwRkJReXhEUVVGRE8xbEJRMFlzVDBGQlR5eFZRVUZWTzFGQlEyNUNMRU5CUVVNc1EwRkJRenRSUVVOR0xFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhGUVVGRkxFVkJRVVU3V1VGRGFFTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETzFGQlEzSkRMRU5CUVVNc1EwRkJRenRSUVVOR0xFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWazdTVUZETVVJc1EwRkJRenRKUVVOUExGRkJRVkVzUTBGQlF5eEpRVUZyUWl4RlFVRkZMRWxCUVdkQ08xRkJRMjVFTEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN6dFJRVU01UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zYzBKQlFYTkNMRXRCUVVzc1YwRkJWeXhGUVVGRk8xbEJRM1pFTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc2QwSkJRWGRDTEVOQlFVTXNTVUZCU1N4RFFVRkRPMU5CUXpWRE8xRkJRMFFzVVVGQlVTeEpRVUZKTEVWQlFVVTdXVUZEV2l4TFFVRkxMRkZCUVZFN1owSkJRMWdzVDBGQlR5d3lSRUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJRenRaUVVOMFFpeExRVUZMTEZOQlFWTTdaMEpCUTFvc1QwRkJUeXcwUkVGQlR5eERRVUZETEV0QlFVc3NRMEZCUXp0WlFVTjJRanRuUWtGRFJTeFBRVUZQTEV0QlFVczdVMEZEWmp0SlFVTklMRU5CUVVNN1EwRkRSanM3T3pzN096czdPenM3T3p0QlEyeFFSRHRCUVVGQk8wRkJRV1VzVFVGQlRTeFJRVUZUTEZOQlFWRXNRMEZCUXl4RFFVRkRMRkZCUVZFN1NVRkhPVU1zV1VGQldTeFBRVUZwUXl4RlFVRkZMRTlCUVRKQ08xRkJRM2hGTEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRE8wbEJRM3BDTEVOQlFVTTdTVUZEVFN4UFFVRlBMRU5CUVVNc1NVRkJhMEk3VVVGREwwSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhKUVVGSk8wbEJRM0JDTEVOQlFVTTdTVUZEVFN4UFFVRlBPMUZCUTFvc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRUdEpRVU53UWl4RFFVRkRPME5CUTBZN096czdPenM3T3pzN096czdRVU5vUWtRN1FVRkJRVHRCUVVGQk8wRkJRVFpETzBGQmEwSTVRaXhOUVVGTkxHOUNRVUZ4UWl4VFFVRlJMSFZFUVVGak8wbEJSemxFTEZsQlEwVXNSMEZCVlN4RlFVTldMRkZCUVhkQ0xFVkJRM2hDTEU5QlFXMURMRVZCUTI1RExGZEJRWGRDTzFGQlJYaENMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzVVVGQlVTeEZRVUZGTEU5QlFVOHNSVUZCUlN4WFFVRlhMRU5CUVVNN1VVRkRNVU1zVFVGQlRTeGpRVUZqTEVkQlFTdENPMWxCUTJwRUxIVkNRVUYxUWl4RlFVRkZMRkZCUVZFN1dVRkRha01zWlVGQlpTeEZRVUZGTEVOQlFVTXNVMEZCVXl4RFFVRkRPMWxCUXpWQ0xGRkJRVkVzUlVGQlJTeEhRVUZITzFsQlEySXNTMEZCU3l4RlFVRkZMRk5CUVZNN1dVRkRhRUlzVDBGQlR5eEZRVUZGTEVkQlFVYzdVMEZEWWp0UlFVTkVMRWxCUVVrc1EwRkJReXhKUVVGSkxFZEJRVWNzWjBKQlFXZENPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnp0UlFVTmtMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVUdFJRVU40UWl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVTg3VVVGRGRFSXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhYUVVGWE8xRkJSVGxDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1NVRkJTVHRSUVVOdVFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRVZCUVVVN1VVRkRia0lzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4UlFVRlJPMUZCUXpWQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NRMEZCUXp0UlFVTjBRaXc0UWtGQk9FSTdVVUZGT1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hqUVVGakxFVkJRVVVzVDBGQlR5eERRVUZETzBsQlF6TkVMRU5CUVVNN1NVRkRUU3hKUVVGSkxFTkJRVU1zVDBGQmIwTTdVVUZET1VNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETzFGQlEyNUVMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVU3VVVGRGNFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8wbEJRM1JDTEVOQlFVTTdTVUZEVFN4TlFVRk5PMUZCUTFnc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdXVUZEYWtJc1QwRkJUVHRUUVVOUU8xRkJRMFFzU1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMWxCUTJRc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdVMEZEY0VJN1VVRkRSQ3hKUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4NVFrRkJlVUlzUlVGQlJUdFJRVU0zUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMUZCUXpkQ0xFOUJRVThzU1VGQlNUdEpRVU5pTEVOQlFVTTdTVUZEVFN4VFFVRlRPMUZCUTJRc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVGRE8wbEJRM1JETEVOQlFVTTdTVUZEVFN4VFFVRlRPMUZCUTJRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNTVUZCU1N4RFFVRkRMRVZCUVVVN1dVRkRPVUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRk5CUVZNc1JVRkJSVHRUUVVNMVFqdFJRVU5FTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRekZDTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGRE4wTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZET1VJN1NVRkRTQ3hEUVVGRE8wbEJRMDBzVjBGQlZ5eERRVUZETEV0QlFXRTdVVUZET1VJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVkQlFVY3NTMEZCU3p0UlFVTXhRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBsQlEyWXNRMEZCUXp0SlFVTlBMSGxDUVVGNVFqdFJRVU12UWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF5eFZRVUZWTEVWQlFVVTdVVUZEYmtNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSVHRaUVVOc1F5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVU3WjBKQlEzaENMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNRMEZCUXl4UlFVRlJMRU5CUVVNN1dVRkRja01zUTBGQlF5eERRVUZETzFsQlEwWXNUVUZCVFN4UFFVRlBMRWRCUVN0Q0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlEzWkVMRVZCUVVVc1JVRkRSaXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVU5hTzJkQ1FVTkZMRXRCUVVzc1JVRkRTQ3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEhWQ1FVRjFRaXhMUVVGTExGRkJRVkU3YjBKQlF5OURMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVczdiMEpCUTNCQ0xFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNlVUpCUVhsQ0xFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMkZCUTNwRUxFTkJRMFk3V1VGRlJDeE5RVUZOTEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1VVRkJVU3hEUVVNNVFpeFJRVUZSTEVOQlFVTXNWVUZCVlN4RlFVRnBRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZMRU5CUTI1RUxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVTnVReXhGUVVORUxFOUJRVThzUTBGRFVqdFpRVU5FTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFVkJRVVU3WjBKQlF6VkNMR05CUVdNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTNaRk8xbEJRMFFzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRE8xRkJRemRETEVOQlFVTXNRMEZCUXp0UlFVTkdMRTlCUVU4c1NVRkJTU3hEUVVGRExHRkJRV0U3U1VGRE0wSXNRMEZCUXp0RFFVTkdPenM3T3pzN096czdPenM3TzBGREwwZEVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRU3RFTzBGQlEyWTdRVUZ0UW1wRExFMUJRVTBzWTBGQll6dEpRV2RDYWtNc1dVRkRSU3hIUVVGVkxFVkJRMVlzVVVGQmQwSXNSVUZEZUVJc1QwRkJOa0lzUlVGRE4wSXNWMEZCZDBJN1VVRkZlRUlzVFVGQlRTeGpRVUZqTEVkQlFYbENPMWxCUXpORExFdEJRVXNzUlVGQlJTeFRRVUZUTzFsQlEyaENMSFZDUVVGMVFpeEZRVUZGTEZGQlFWRTdXVUZEYWtNc1pVRkJaU3hGUVVGRkxFTkJRVU1zVTBGQlV5eERRVUZETzFsQlF6VkNMRk5CUVZNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSVHRaUVVONlF5eFhRVUZYTEVWQlFVVXNUVUZCVFR0VFFVTndRanRSUVVORUxFbEJRVWtzUTBGQlF5eEpRVUZKTEVkQlFVY3NWVUZCVlR0UlFVTjBRaXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVYzdVVUZEWkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkU3VVVGRGVFSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVWQlFVVXNSVUZCUlN4alFVRmpMRVZCUVVVc1QwRkJUeXhEUVVGRE8xRkJRM3BFTEVsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1YwRkJWenRSUVVVNVFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrN1VVRkRia0lzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4RlFVRkZPMUZCUTI1Q0xFbEJRVWtzUTBGQlF5eFpRVUZaTEVkQlFVY3NVVUZCVVR0UlFVTTFRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVOQlFVTTdVVUZEZEVJc1NVRkJTU3hEUVVGRExHVkJRV1VzUjBGQlJ5eEpRVUZKTzFGQlF6TkNMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4SlFVRkpPMGxCUTNCRExFTkJRVU03U1VGRFRTeEpRVUZKTEVOQlFVTXNUMEZCT0VJN1VVRkRlRU1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRPMUZCUTI1RUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVTdVVUZEY0VJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBsQlEzUkNMRU5CUVVNN1NVRkRUU3hOUVVGTk8xRkJRMWdzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVN1dVRkRha0lzVDBGQlRUdFRRVU5RTzFGQlEwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRk8xbEJRMlFzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1UwRkRjRUk3VVVGRFJDeEpRVUZKTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSVUZCUlR0UlFVTjJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJRemRDTEU5QlFVOHNTVUZCU1R0SlFVTmlMRU5CUVVNN1NVRkRUU3hUUVVGVE8xRkJRMlFzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZETjBRc1EwRkJRenRKUVVOTkxGTkJRVk03VVVGRFpDeEpRVUZKTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU01UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTzFOQlF6VkNPMUZCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNRMEZETVVJc1EwRkJReXhKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4RlFVTTNReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRk5CUVZNc1JVRkJSU3hEUVVNNVFqdEpRVU5JTEVOQlFVTTdTVUZEVFN4UFFVRlBPMUZCUTFvc1NVRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZGTzFsQlEyUXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0VFFVTnFRenRKUVVOSUxFTkJRVU03U1VGRFRTeGhRVUZoTEVOQlFVTXNUMEZCWjBJN1VVRkRia01zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBPMUZCUTNSQ0xFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMWxCUTJZc1QwRkJUVHRUUVVOUU8xRkJRMFFzU1VGQlNTeFBRVUZQTEVWQlFVVTdXVUZEV0N4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRPMU5CUXpsQ08yRkJRVTA3V1VGRFRDeEpRVUZKTEVOQlFVTXNjMEpCUVhOQ0xFTkJRVU1zVFVGQlRTeEZRVUZGTzFsQlEzQkRMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN1UwRkRha003U1VGRFNDeERRVUZETzBsQlEwMHNWMEZCVnl4RFFVRkRMRXRCUVdFN1VVRkRPVUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTenRSUVVNNVFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZPMGxCUTJZc1EwRkJRenRKUVVOTkxFdEJRVXNzUTBGQlF5eEZRVUZWTzFGQlEzSkNMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVN1dVRkRiRU1zU1VGQlNTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFVkJRVVVzUlVGQlJUdG5Ra0ZEYUVNc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU03WjBKQlEzcERMRTlCUVUwN1lVRkRVRHRSUVVOSUxFTkJRVU1zUTBGQlF6dEpRVU5LTEVOQlFVTTdTVUZEVXl4aFFVRmhPMUZCUTNKQ0xHdENRVUZyUWp0UlFVTnNRaXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVN1VVRkZla0lzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZPMWxCUXpGRExFMUJRVTBzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOeVJDeHBRMEZCYVVNN1dVRkRha01zT0VSQlFUaEVPMWxCUXpsRUxHbEVRVUZwUkR0WlFVTnFSQ3hKUVVGSk8xbEJRMG9zVFVGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4cFJFRkJVU3hEUVVNeFFpeExRVUZ2UWl4RFFVRkRMRlZCUVZVc1JVRkJPRUlzUTBGREwwUTdXVUZGUkN4clFrRkJhMEk3V1VGRGJFSXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU03V1VGRmRFSXNUMEZCVHl4UlFVRlJPMUZCUTJwQ0xFTkJRVU1zUTBGQlF6dEpRVU5LTEVOQlFVTTdTVUZEVXl4NVFrRkJlVUlzUTBGQlF5eEpRVUZyUWp0UlFVTndSQ3hOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU03VVVGRE5VTXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlEzaERMRkZCUVZFc1EwRkJReXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUTJ4Rk8xRkJRMFFzVDBGQlR5eExRVUZMTzBsQlEyUXNRMEZCUXp0SlFVTlRMRzlDUVVGdlFpeERRVUZETEZGQlFXdENMRVZCUVVVc1UwRkJiVUk3VVVGRGNFVXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1IwRkJSeXhSUVVGUk8xRkJReTlDTEdOQlFXTTdVVUZEWkN4SlFVRkpMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNSVUZCUlR0WlFVTXZRaXhKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1RVRkJUU3hGUVVGRk8xTkJRM0pETzFGQlEwUXNZVUZCWVR0UlFVTmlMRWxCUVVrc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4SlFVRkpMR2xFUVVGUkxFTkJRM2hETEZGQlFWRXNRMEZCUXl4VlFVRlZMRVZCUVRoQ0xFVkJRMnBFTzFsQlEwVXNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMWxCUTNoRExGTkJRVk1zUlVGQlJTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUlVGQlJTeFJRVUZSTEVOQlFVTTdVMEZEZGtRc1EwRkRSanRSUVVORUxFbEJRVWtzUTBGQlF5eHpRa0ZCYzBJc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXp0UlFVVXpReXhKUVVGSkxFTkJRVU1zYzBKQlFYTkNPMkZCUTNoQ0xGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzJGQlEyNUVMRk5CUVZNc1JVRkJSVHRSUVVWa0xFbEJRVWtzUTBGQlF5eHpRa0ZCYzBJc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTEVkQlFVY3NSVUZCUlR0WlFVTm9SQ3hKUVVGSkxFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1RVRkJUU3hGUVVGRk8xRkJRM1JETEVOQlFVTXNRMEZCUXp0UlFVVkdMRkZCUVZFc1EwRkJReXhaUVVGWkxFVkJRVVU3VVVGRmRrSXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEhOQ1FVRnpRaXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFGQlEzWkVMRWxCUVVrc1UwRkJVeXhGUVVGRk8xbEJRMklzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzFOQlEzcERPMUZCUTBRc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3hSUVVGUkxFTkJRVU03U1VGRGFrUXNRMEZCUXp0SlFVTlRMR2xDUVVGcFFpeERRVUZETEVsQlFXdENPMUZCUXpWRExFOUJRVThzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF6dEpRVU0xUXl4RFFVRkRPMGxCUTFNc1pVRkJaU3hEUVVGRExFbEJRV3RDTzFGQlF6RkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlR0WlFVTXpRaXhQUVVGUExFVkJRVVU3VTBGRFZqdFJRVU5FTEVsQlFVa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUzBGQlN5eFJRVUZSTEVWQlFVVTdXVUZET1VNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4TFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RlFVRkZPMU5CUTNCRk8xRkJRMFFzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhMUVVGTExGRkJRVkVzUlVGQlJUdFpRVU01UXl4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4TFFVTndReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVOdVF5eEZRVUZGTzFOQlEwZzdTVUZEU0N4RFFVRkRPMGxCUTA4c2JVSkJRVzFDTzFGQlEzcENMRWxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEZWQlFWVXNSVUZCUlR0UlFVTnVReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRk8xbEJRMnhETEVsQlFVa3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN6dFpRVU01UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zZFVKQlFYVkNMRXRCUVVzc1YwRkJWeXhGUVVGRk8yZENRVU40UkN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExIbENRVUY1UWl4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dGhRVU16UkR0WlFVTkVMRTFCUVUwc1QwRkJUeXhIUVVGelFpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzJkQ1FVTnFSU3hMUVVGTE8yRkJRMDRzUTBGQlF6dFpRVU5HTEUxQlFVMHNWMEZCVnl4SFFVRkhMRWxCUVVrc2FVUkJRVkVzUTBGRE9VSXNVVUZCVVN4RFFVRkRMRlZCUVZVc1JVRkJPRUlzUlVGRGFrUXNUMEZCVHl4RFFVTlNPMWxCUTBRc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZPMmRDUVVNelFpeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zVVVGQlVTeERRVUZETzFsQlEzSkRMRU5CUVVNc1EwRkJRenRaUVVOR0xGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8xbEJRM1pETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFVkJRVVU3WjBKQlF6VkNMRmRCUVZjc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMkZCUTNaRk8xbEJRMFFzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRE8xRkJRekZETEVOQlFVTXNRMEZCUXp0UlFVTkdMRTlCUVU4c1NVRkJTU3hEUVVGRExHRkJRV0U3U1VGRE0wSXNRMEZCUXp0SlFVTlBMR3RDUVVGclFqdFJRVU40UWl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4TlFVRk5PMUZCUXpORUxFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNVVUZCVVR0UlFVTjBRaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eFJRVUZSTzFGQlEzSkNMRXRCUVVzc1RVRkJUU3hKUVVGSkxFbEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlR0WlFVTm9ReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhoUVVGaExFTkJRVU03V1VGRE5VTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXp0WlFVTTVRaXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhEUVVGRE8xTkJReTlDTzFGQlEwUXNUVUZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMR1ZCUVdVN1VVRkRjRVFzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4TlFVRk5PMUZCUXpGQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NTVUZCU1R0SlFVTXpRaXhEUVVGRE8wbEJRMDhzVVVGQlVTeERRVUZETEVsQlFXdENMRVZCUVVVc1NVRkJaMEk3VVVGRGJrUXNTVUZCU1N4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTzFGQlF6bENMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eDFRa0ZCZFVJc1MwRkJTeXhYUVVGWExFVkJRVVU3V1VGRGVFUXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4SlFVRkpMRU5CUVVNN1UwRkROME03VVVGRFJDeFJRVUZSTEVsQlFVa3NSVUZCUlR0WlFVTmFMRXRCUVVzc1VVRkJVVHRuUWtGRFdDeFBRVUZQTERKRVFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRE8xbEJRM1JDTEV0QlFVc3NVMEZCVXp0blFrRkRXaXhQUVVGUExEUkVRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRPMWxCUTNaQ08yZENRVU5GTEU5QlFVOHNTMEZCU3p0VFFVTm1PMGxCUTBnc1EwRkJRenREUVVOR096czdPenM3T3pzN096czdPMEZEZGxCRU8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCT0VJN1FVRkZPVUlzVTBGQlV5eFBRVUZQTEVOQlFVTXNVVUZCWjBJN1NVRkRMMElzVDBGQlR5eHJRMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJRenRUUVVOdVFpeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRPMU5CUTFvc1IwRkJSeXhGUVVGRk8wRkJRMVlzUTBGQlF6dEJRVU5FTEZOQlFWTXNUVUZCVFN4RFFVRkRMRkZCUVdkQ08wbEJRemxDTEU5QlFVOHNhME5CUVVzc1EwRkJReXhSUVVGUkxFTkJRVU03VTBGRGJrSXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJRenRUUVVOWUxFZEJRVWNzUlVGQlJUdEJRVU5XTEVOQlFVTTdRVUZEWXp0SlFVTmlMRTlCUVU4N1NVRkRVQ3hOUVVGTk8wTkJRMUE3UVVGRGVVSWlMQ0ptYVd4bElqb2liR1ZoWm14bGRDMXNZWGxsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaWhtZFc1amRHbHZiaUIzWldKd1lXTnJWVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJpaHliMjkwTENCbVlXTjBiM0o1S1NCN1hHNWNkR2xtS0hSNWNHVnZaaUJsZUhCdmNuUnpJRDA5UFNBbmIySnFaV04wSnlBbUppQjBlWEJsYjJZZ2JXOWtkV3hsSUQwOVBTQW5iMkpxWldOMEp5bGNibHgwWEhSdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pHVm1hVzVsSUQwOVBTQW5ablZ1WTNScGIyNG5JQ1ltSUdSbFptbHVaUzVoYldRcFhHNWNkRngwWkdWbWFXNWxLRnRkTENCbVlXTjBiM0o1S1R0Y2JseDBaV3h6WlNCcFppaDBlWEJsYjJZZ1pYaHdiM0owY3lBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MFpYaHdiM0owYzF0Y0lteGxZV1pzWlhSTllYQmNJbDBnUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJWY2JseDBYSFJ5YjI5MFcxd2liR1ZoWm14bGRFMWhjRndpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hkcGJtUnZkeXdnWm5WdVkzUnBiMjRvS1NCN1hHNXlaWFIxY200Z0lpd2lJRngwTHk4Z1ZHaGxJRzF2WkhWc1pTQmpZV05vWlZ4dUlGeDBkbUZ5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE1nUFNCN2ZUdGNibHh1SUZ4MEx5OGdWR2hsSUhKbGNYVnBjbVVnWm5WdVkzUnBiMjVjYmlCY2RHWjFibU4wYVc5dUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9iVzlrZFd4bFNXUXBJSHRjYmx4dUlGeDBYSFF2THlCRGFHVmpheUJwWmlCdGIyUjFiR1VnYVhNZ2FXNGdZMkZqYUdWY2JpQmNkRngwYVdZb2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwcElIdGNiaUJjZEZ4MFhIUnlaWFIxY200Z2FXNXpkR0ZzYkdWa1RXOWtkV3hsYzF0dGIyUjFiR1ZKWkYwdVpYaHdiM0owY3p0Y2JpQmNkRngwZlZ4dUlGeDBYSFF2THlCRGNtVmhkR1VnWVNCdVpYY2diVzlrZFd4bElDaGhibVFnY0hWMElHbDBJR2x1ZEc4Z2RHaGxJR05oWTJobEtWeHVJRngwWEhSMllYSWdiVzlrZFd4bElEMGdhVzV6ZEdGc2JHVmtUVzlrZFd4bGMxdHRiMlIxYkdWSlpGMGdQU0I3WEc0Z1hIUmNkRngwYVRvZ2JXOWtkV3hsU1dRc1hHNGdYSFJjZEZ4MGJEb2dabUZzYzJVc1hHNGdYSFJjZEZ4MFpYaHdiM0owY3pvZ2UzMWNiaUJjZEZ4MGZUdGNibHh1SUZ4MFhIUXZMeUJGZUdWamRYUmxJSFJvWlNCdGIyUjFiR1VnWm5WdVkzUnBiMjVjYmlCY2RGeDBiVzlrZFd4bGMxdHRiMlIxYkdWSlpGMHVZMkZzYkNodGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5d2dYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWs3WEc1Y2JpQmNkRngwTHk4Z1JteGhaeUIwYUdVZ2JXOWtkV3hsSUdGeklHeHZZV1JsWkZ4dUlGeDBYSFJ0YjJSMWJHVXViQ0E5SUhSeWRXVTdYRzVjYmlCY2RGeDBMeThnVW1WMGRYSnVJSFJvWlNCbGVIQnZjblJ6SUc5bUlIUm9aU0J0YjJSMWJHVmNiaUJjZEZ4MGNtVjBkWEp1SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1SUZ4MGZWeHVYRzVjYmlCY2RDOHZJR1Y0Y0c5elpTQjBhR1VnYlc5a2RXeGxjeUJ2WW1wbFkzUWdLRjlmZDJWaWNHRmphMTl0YjJSMWJHVnpYMThwWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbTBnUFNCdGIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCbGVIQnZjMlVnZEdobElHMXZaSFZzWlNCallXTm9aVnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWpJRDBnYVc1emRHRnNiR1ZrVFc5a2RXeGxjenRjYmx4dUlGeDBMeThnWkdWbWFXNWxJR2RsZEhSbGNpQm1kVzVqZEdsdmJpQm1iM0lnYUdGeWJXOXVlU0JsZUhCdmNuUnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUWdQU0JtZFc1amRHbHZiaWhsZUhCdmNuUnpMQ0J1WVcxbExDQm5aWFIwWlhJcElIdGNiaUJjZEZ4MGFXWW9JVjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlobGVIQnZjblJ6TENCdVlXMWxLU2tnZTF4dUlGeDBYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQnVZVzFsTENCN0lHVnVkVzFsY21GaWJHVTZJSFJ5ZFdVc0lHZGxkRG9nWjJWMGRHVnlJSDBwTzF4dUlGeDBYSFI5WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdYMTlsYzAxdlpIVnNaU0J2YmlCbGVIQnZjblJ6WEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbklnUFNCbWRXNWpkR2x2YmlobGVIQnZjblJ6S1NCN1hHNGdYSFJjZEdsbUtIUjVjR1Z2WmlCVGVXMWliMndnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUZONWJXSnZiQzUwYjFOMGNtbHVaMVJoWnlrZ2UxeHVJRngwWEhSY2RFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsZUhCdmNuUnpMQ0JUZVcxaWIyd3VkRzlUZEhKcGJtZFVZV2NzSUhzZ2RtRnNkV1U2SUNkTmIyUjFiR1VuSUgwcE8xeHVJRngwWEhSOVhHNGdYSFJjZEU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQW5YMTlsYzAxdlpIVnNaU2NzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc0Z1hIUjlPMXh1WEc0Z1hIUXZMeUJqY21WaGRHVWdZU0JtWVd0bElHNWhiV1Z6Y0dGalpTQnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUF4T2lCMllXeDFaU0JwY3lCaElHMXZaSFZzWlNCcFpDd2djbVZ4ZFdseVpTQnBkRnh1SUZ4MEx5OGdiVzlrWlNBbUlESTZJRzFsY21kbElHRnNiQ0J3Y205d1pYSjBhV1Z6SUc5bUlIWmhiSFZsSUdsdWRHOGdkR2hsSUc1elhHNGdYSFF2THlCdGIyUmxJQ1lnTkRvZ2NtVjBkWEp1SUhaaGJIVmxJSGRvWlc0Z1lXeHlaV0ZrZVNCdWN5QnZZbXBsWTNSY2JpQmNkQzh2SUcxdlpHVWdKaUE0ZkRFNklHSmxhR0YyWlNCc2FXdGxJSEpsY1hWcGNtVmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWRDQTlJR1oxYm1OMGFXOXVLSFpoYkhWbExDQnRiMlJsS1NCN1hHNGdYSFJjZEdsbUtHMXZaR1VnSmlBeEtTQjJZV3gxWlNBOUlGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOG9kbUZzZFdVcE8xeHVJRngwWEhScFppaHRiMlJsSUNZZ09Da2djbVYwZFhKdUlIWmhiSFZsTzF4dUlGeDBYSFJwWmlnb2JXOWtaU0FtSURRcElDWW1JSFI1Y0dWdlppQjJZV3gxWlNBOVBUMGdKMjlpYW1WamRDY2dKaVlnZG1Gc2RXVWdKaVlnZG1Gc2RXVXVYMTlsYzAxdlpIVnNaU2tnY21WMGRYSnVJSFpoYkhWbE8xeHVJRngwWEhSMllYSWdibk1nUFNCUFltcGxZM1F1WTNKbFlYUmxLRzUxYkd3cE8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuSW9ibk1wTzF4dUlGeDBYSFJQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb2JuTXNJQ2RrWldaaGRXeDBKeXdnZXlCbGJuVnRaWEpoWW14bE9pQjBjblZsTENCMllXeDFaVG9nZG1Gc2RXVWdmU2s3WEc0Z1hIUmNkR2xtS0cxdlpHVWdKaUF5SUNZbUlIUjVjR1Z2WmlCMllXeDFaU0FoUFNBbmMzUnlhVzVuSnlrZ1ptOXlLSFpoY2lCclpYa2dhVzRnZG1Gc2RXVXBJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNodWN5d2dhMlY1TENCbWRXNWpkR2x2YmloclpYa3BJSHNnY21WMGRYSnVJSFpoYkhWbFcydGxlVjA3SUgwdVltbHVaQ2h1ZFd4c0xDQnJaWGtwS1R0Y2JpQmNkRngwY21WMGRYSnVJRzV6TzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWjJWMFJHVm1ZWFZzZEVWNGNHOXlkQ0JtZFc1amRHbHZiaUJtYjNJZ1kyOXRjR0YwYVdKcGJHbDBlU0IzYVhSb0lHNXZiaTFvWVhKdGIyNTVJRzF2WkhWc1pYTmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWJpQTlJR1oxYm1OMGFXOXVLRzF2WkhWc1pTa2dlMXh1SUZ4MFhIUjJZWElnWjJWMGRHVnlJRDBnYlc5a2RXeGxJQ1ltSUcxdlpIVnNaUzVmWDJWelRXOWtkV3hsSUQ5Y2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUkVaV1poZFd4MEtDa2dleUJ5WlhSMWNtNGdiVzlrZFd4bFd5ZGtaV1poZFd4MEoxMDdJSDBnT2x4dUlGeDBYSFJjZEdaMWJtTjBhVzl1SUdkbGRFMXZaSFZzWlVWNGNHOXlkSE1vS1NCN0lISmxkSFZ5YmlCdGIyUjFiR1U3SUgwN1hHNGdYSFJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDaG5aWFIwWlhJc0lDZGhKeXdnWjJWMGRHVnlLVHRjYmlCY2RGeDBjbVYwZFhKdUlHZGxkSFJsY2p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkZ4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wTENCd2NtOXdaWEowZVNrZ2V5QnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcE95QjlPMXh1WEc0Z1hIUXZMeUJmWDNkbFluQmhZMnRmY0hWaWJHbGpYM0JoZEdoZlgxeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1d0lEMGdYQ0pjSWp0Y2JseHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0Y5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWN5QTlJRndpTGk5emNtTXZhVzVrWlhndWRITmNJaWs3WEc0aUxDSXZLaUJOU1ZRZ2JHbGpaVzV6WlNBcUwxeHVkbUZ5SUdOemMwdGxlWGR2Y21SeklEMGdjbVZ4ZFdseVpTZ25ZMjlzYjNJdGJtRnRaU2NwTzF4dVhHNHZMeUJPVDFSRk9pQmpiMjUyWlhKemFXOXVjeUJ6YUc5MWJHUWdiMjVzZVNCeVpYUjFjbTRnY0hKcGJXbDBhWFpsSUhaaGJIVmxjeUFvYVM1bExpQmhjbkpoZVhNc0lHOXlYRzR2THlBZ0lDQWdJQ0IyWVd4MVpYTWdkR2hoZENCbmFYWmxJR052Y25KbFkzUWdZSFI1Y0dWdlptQWdjbVZ6ZFd4MGN5a3VYRzR2THlBZ0lDQWdJQ0JrYnlCdWIzUWdkWE5sSUdKdmVDQjJZV3gxWlhNZ2RIbHdaWE1nS0drdVpTNGdUblZ0WW1WeUtDa3NJRk4wY21sdVp5Z3BMQ0JsZEdNdUtWeHVYRzUyWVhJZ2NtVjJaWEp6WlV0bGVYZHZjbVJ6SUQwZ2UzMDdYRzVtYjNJZ0tIWmhjaUJyWlhrZ2FXNGdZM056UzJWNWQyOXlaSE1wSUh0Y2JseDBhV1lnS0dOemMwdGxlWGR2Y21SekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmx4MFhIUnlaWFpsY25ObFMyVjVkMjl5WkhOYlkzTnpTMlY1ZDI5eVpITmJhMlY1WFYwZ1BTQnJaWGs3WEc1Y2RIMWNibjFjYmx4dWRtRnlJR052Ym5abGNuUWdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjYmx4MGNtZGlPaUI3WTJoaGJtNWxiSE02SURNc0lHeGhZbVZzY3pvZ0ozSm5ZaWQ5TEZ4dVhIUm9jMnc2SUh0amFHRnVibVZzY3pvZ015d2diR0ZpWld4ek9pQW5hSE5zSjMwc1hHNWNkR2h6ZGpvZ2UyTm9ZVzV1Wld4ek9pQXpMQ0JzWVdKbGJITTZJQ2RvYzNZbmZTeGNibHgwYUhkaU9pQjdZMmhoYm01bGJITTZJRE1zSUd4aFltVnNjem9nSjJoM1lpZDlMRnh1WEhSamJYbHJPaUI3WTJoaGJtNWxiSE02SURRc0lHeGhZbVZzY3pvZ0oyTnRlV3NuZlN4Y2JseDBlSGw2T2lCN1kyaGhibTVsYkhNNklETXNJR3hoWW1Wc2N6b2dKM2g1ZWlkOUxGeHVYSFJzWVdJNklIdGphR0Z1Ym1Wc2N6b2dNeXdnYkdGaVpXeHpPaUFuYkdGaUozMHNYRzVjZEd4amFEb2dlMk5vWVc1dVpXeHpPaUF6TENCc1lXSmxiSE02SUNkc1kyZ25mU3hjYmx4MGFHVjRPaUI3WTJoaGJtNWxiSE02SURFc0lHeGhZbVZzY3pvZ1d5ZG9aWGduWFgwc1hHNWNkR3RsZVhkdmNtUTZJSHRqYUdGdWJtVnNjem9nTVN3Z2JHRmlaV3h6T2lCYkoydGxlWGR2Y21RblhYMHNYRzVjZEdGdWMya3hOam9nZTJOb1lXNXVaV3h6T2lBeExDQnNZV0psYkhNNklGc25ZVzV6YVRFMkoxMTlMRnh1WEhSaGJuTnBNalUyT2lCN1kyaGhibTVsYkhNNklERXNJR3hoWW1Wc2N6b2dXeWRoYm5OcE1qVTJKMTE5TEZ4dVhIUm9ZMmM2SUh0amFHRnVibVZzY3pvZ015d2diR0ZpWld4ek9pQmJKMmduTENBbll5Y3NJQ2RuSjExOUxGeHVYSFJoY0hCc1pUb2dlMk5vWVc1dVpXeHpPaUF6TENCc1lXSmxiSE02SUZzbmNqRTJKeXdnSjJjeE5pY3NJQ2RpTVRZblhYMHNYRzVjZEdkeVlYazZJSHRqYUdGdWJtVnNjem9nTVN3Z2JHRmlaV3h6T2lCYkoyZHlZWGtuWFgxY2JuMDdYRzVjYmk4dklHaHBaR1VnTG1Ob1lXNXVaV3h6SUdGdVpDQXViR0ZpWld4eklIQnliM0JsY25ScFpYTmNibVp2Y2lBb2RtRnlJRzF2WkdWc0lHbHVJR052Ym5abGNuUXBJSHRjYmx4MGFXWWdLR052Ym5abGNuUXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2JXOWtaV3dwS1NCN1hHNWNkRngwYVdZZ0tDRW9KMk5vWVc1dVpXeHpKeUJwYmlCamIyNTJaWEowVzIxdlpHVnNYU2twSUh0Y2JseDBYSFJjZEhSb2NtOTNJRzVsZHlCRmNuSnZjaWduYldsemMybHVaeUJqYUdGdWJtVnNjeUJ3Y205d1pYSjBlVG9nSnlBcklHMXZaR1ZzS1R0Y2JseDBYSFI5WEc1Y2JseDBYSFJwWmlBb0lTZ25iR0ZpWld4ekp5QnBiaUJqYjI1MlpYSjBXMjF2WkdWc1hTa3BJSHRjYmx4MFhIUmNkSFJvY205M0lHNWxkeUJGY25KdmNpZ25iV2x6YzJsdVp5QmphR0Z1Ym1Wc0lHeGhZbVZzY3lCd2NtOXdaWEowZVRvZ0p5QXJJRzF2WkdWc0tUdGNibHgwWEhSOVhHNWNibHgwWEhScFppQW9ZMjl1ZG1WeWRGdHRiMlJsYkYwdWJHRmlaV3h6TG14bGJtZDBhQ0FoUFQwZ1kyOXVkbVZ5ZEZ0dGIyUmxiRjB1WTJoaGJtNWxiSE1wSUh0Y2JseDBYSFJjZEhSb2NtOTNJRzVsZHlCRmNuSnZjaWduWTJoaGJtNWxiQ0JoYm1RZ2JHRmlaV3dnWTI5MWJuUnpJRzFwYzIxaGRHTm9PaUFuSUNzZ2JXOWtaV3dwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSFpoY2lCamFHRnVibVZzY3lBOUlHTnZiblpsY25SYmJXOWtaV3hkTG1Ob1lXNXVaV3h6TzF4dVhIUmNkSFpoY2lCc1lXSmxiSE1nUFNCamIyNTJaWEowVzIxdlpHVnNYUzVzWVdKbGJITTdYRzVjZEZ4MFpHVnNaWFJsSUdOdmJuWmxjblJiYlc5a1pXeGRMbU5vWVc1dVpXeHpPMXh1WEhSY2RHUmxiR1YwWlNCamIyNTJaWEowVzIxdlpHVnNYUzVzWVdKbGJITTdYRzVjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR052Ym5abGNuUmJiVzlrWld4ZExDQW5ZMmhoYm01bGJITW5MQ0I3ZG1Gc2RXVTZJR05vWVc1dVpXeHpmU2s3WEc1Y2RGeDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dOdmJuWmxjblJiYlc5a1pXeGRMQ0FuYkdGaVpXeHpKeXdnZTNaaGJIVmxPaUJzWVdKbGJITjlLVHRjYmx4MGZWeHVmVnh1WEc1amIyNTJaWEowTG5KbllpNW9jMndnUFNCbWRXNWpkR2x2YmlBb2NtZGlLU0I3WEc1Y2RIWmhjaUJ5SUQwZ2NtZGlXekJkSUM4Z01qVTFPMXh1WEhSMllYSWdaeUE5SUhKbllsc3hYU0F2SURJMU5UdGNibHgwZG1GeUlHSWdQU0J5WjJKYk1sMGdMeUF5TlRVN1hHNWNkSFpoY2lCdGFXNGdQU0JOWVhSb0xtMXBiaWh5TENCbkxDQmlLVHRjYmx4MGRtRnlJRzFoZUNBOUlFMWhkR2d1YldGNEtISXNJR2NzSUdJcE8xeHVYSFIyWVhJZ1pHVnNkR0VnUFNCdFlYZ2dMU0J0YVc0N1hHNWNkSFpoY2lCb08xeHVYSFIyWVhJZ2N6dGNibHgwZG1GeUlHdzdYRzVjYmx4MGFXWWdLRzFoZUNBOVBUMGdiV2x1S1NCN1hHNWNkRngwYUNBOUlEQTdYRzVjZEgwZ1pXeHpaU0JwWmlBb2NpQTlQVDBnYldGNEtTQjdYRzVjZEZ4MGFDQTlJQ2huSUMwZ1lpa2dMeUJrWld4MFlUdGNibHgwZlNCbGJITmxJR2xtSUNobklEMDlQU0J0WVhncElIdGNibHgwWEhSb0lEMGdNaUFySUNoaUlDMGdjaWtnTHlCa1pXeDBZVHRjYmx4MGZTQmxiSE5sSUdsbUlDaGlJRDA5UFNCdFlYZ3BJSHRjYmx4MFhIUm9JRDBnTkNBcklDaHlJQzBnWnlrZ0x5QmtaV3gwWVR0Y2JseDBmVnh1WEc1Y2RHZ2dQU0JOWVhSb0xtMXBiaWhvSUNvZ05qQXNJRE0yTUNrN1hHNWNibHgwYVdZZ0tHZ2dQQ0F3S1NCN1hHNWNkRngwYUNBclBTQXpOakE3WEc1Y2RIMWNibHh1WEhSc0lEMGdLRzFwYmlBcklHMWhlQ2tnTHlBeU8xeHVYRzVjZEdsbUlDaHRZWGdnUFQwOUlHMXBiaWtnZTF4dVhIUmNkSE1nUFNBd08xeHVYSFI5SUdWc2MyVWdhV1lnS0d3Z1BEMGdNQzQxS1NCN1hHNWNkRngwY3lBOUlHUmxiSFJoSUM4Z0tHMWhlQ0FySUcxcGJpazdYRzVjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBjeUE5SUdSbGJIUmhJQzhnS0RJZ0xTQnRZWGdnTFNCdGFXNHBPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJRnRvTENCeklDb2dNVEF3TENCc0lDb2dNVEF3WFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1Y21kaUxtaHpkaUE5SUdaMWJtTjBhVzl1SUNoeVoySXBJSHRjYmx4MGRtRnlJSEprYVdZN1hHNWNkSFpoY2lCblpHbG1PMXh1WEhSMllYSWdZbVJwWmp0Y2JseDBkbUZ5SUdnN1hHNWNkSFpoY2lCek8xeHVYRzVjZEhaaGNpQnlJRDBnY21kaVd6QmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1p5QTlJSEpuWWxzeFhTQXZJREkxTlR0Y2JseDBkbUZ5SUdJZ1BTQnlaMkpiTWwwZ0x5QXlOVFU3WEc1Y2RIWmhjaUIySUQwZ1RXRjBhQzV0WVhnb2Npd2daeXdnWWlrN1hHNWNkSFpoY2lCa2FXWm1JRDBnZGlBdElFMWhkR2d1YldsdUtISXNJR2NzSUdJcE8xeHVYSFIyWVhJZ1pHbG1abU1nUFNCbWRXNWpkR2x2YmlBb1l5a2dlMXh1WEhSY2RISmxkSFZ5YmlBb2RpQXRJR01wSUM4Z05pQXZJR1JwWm1ZZ0t5QXhJQzhnTWp0Y2JseDBmVHRjYmx4dVhIUnBaaUFvWkdsbVppQTlQVDBnTUNrZ2UxeHVYSFJjZEdnZ1BTQnpJRDBnTUR0Y2JseDBmU0JsYkhObElIdGNibHgwWEhSeklEMGdaR2xtWmlBdklIWTdYRzVjZEZ4MGNtUnBaaUE5SUdScFptWmpLSElwTzF4dVhIUmNkR2RrYVdZZ1BTQmthV1ptWXlobktUdGNibHgwWEhSaVpHbG1JRDBnWkdsbVptTW9ZaWs3WEc1Y2JseDBYSFJwWmlBb2NpQTlQVDBnZGlrZ2UxeHVYSFJjZEZ4MGFDQTlJR0prYVdZZ0xTQm5aR2xtTzF4dVhIUmNkSDBnWld4elpTQnBaaUFvWnlBOVBUMGdkaWtnZTF4dVhIUmNkRngwYUNBOUlDZ3hJQzhnTXlrZ0t5QnlaR2xtSUMwZ1ltUnBaanRjYmx4MFhIUjlJR1ZzYzJVZ2FXWWdLR0lnUFQwOUlIWXBJSHRjYmx4MFhIUmNkR2dnUFNBb01pQXZJRE1wSUNzZ1oyUnBaaUF0SUhKa2FXWTdYRzVjZEZ4MGZWeHVYSFJjZEdsbUlDaG9JRHdnTUNrZ2UxeHVYSFJjZEZ4MGFDQXJQU0F4TzF4dVhIUmNkSDBnWld4elpTQnBaaUFvYUNBK0lERXBJSHRjYmx4MFhIUmNkR2dnTFQwZ01UdGNibHgwWEhSOVhHNWNkSDFjYmx4dVhIUnlaWFIxY200Z1cxeHVYSFJjZEdnZ0tpQXpOakFzWEc1Y2RGeDBjeUFxSURFd01DeGNibHgwWEhSMklDb2dNVEF3WEc1Y2RGMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExuSm5ZaTVvZDJJZ1BTQm1kVzVqZEdsdmJpQW9jbWRpS1NCN1hHNWNkSFpoY2lCeUlEMGdjbWRpV3pCZE8xeHVYSFIyWVhJZ1p5QTlJSEpuWWxzeFhUdGNibHgwZG1GeUlHSWdQU0J5WjJKYk1sMDdYRzVjZEhaaGNpQm9JRDBnWTI5dWRtVnlkQzV5WjJJdWFITnNLSEpuWWlsYk1GMDdYRzVjZEhaaGNpQjNJRDBnTVNBdklESTFOU0FxSUUxaGRHZ3ViV2x1S0hJc0lFMWhkR2d1YldsdUtHY3NJR0lwS1R0Y2JseHVYSFJpSUQwZ01TQXRJREVnTHlBeU5UVWdLaUJOWVhSb0xtMWhlQ2h5TENCTllYUm9MbTFoZUNobkxDQmlLU2s3WEc1Y2JseDBjbVYwZFhKdUlGdG9MQ0IzSUNvZ01UQXdMQ0JpSUNvZ01UQXdYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVjbWRpTG1OdGVXc2dQU0JtZFc1amRHbHZiaUFvY21kaUtTQjdYRzVjZEhaaGNpQnlJRDBnY21kaVd6QmRJQzhnTWpVMU8xeHVYSFIyWVhJZ1p5QTlJSEpuWWxzeFhTQXZJREkxTlR0Y2JseDBkbUZ5SUdJZ1BTQnlaMkpiTWwwZ0x5QXlOVFU3WEc1Y2RIWmhjaUJqTzF4dVhIUjJZWElnYlR0Y2JseDBkbUZ5SUhrN1hHNWNkSFpoY2lCck8xeHVYRzVjZEdzZ1BTQk5ZWFJvTG0xcGJpZ3hJQzBnY2l3Z01TQXRJR2NzSURFZ0xTQmlLVHRjYmx4MFl5QTlJQ2d4SUMwZ2NpQXRJR3NwSUM4Z0tERWdMU0JyS1NCOGZDQXdPMXh1WEhSdElEMGdLREVnTFNCbklDMGdheWtnTHlBb01TQXRJR3NwSUh4OElEQTdYRzVjZEhrZ1BTQW9NU0F0SUdJZ0xTQnJLU0F2SUNneElDMGdheWtnZkh3Z01EdGNibHh1WEhSeVpYUjFjbTRnVzJNZ0tpQXhNREFzSUcwZ0tpQXhNREFzSUhrZ0tpQXhNREFzSUdzZ0tpQXhNREJkTzF4dWZUdGNibHh1THlvcVhHNGdLaUJUWldVZ2FIUjBjSE02THk5bGJpNXRMbmRwYTJsd1pXUnBZUzV2Y21jdmQybHJhUzlGZFdOc2FXUmxZVzVmWkdsemRHRnVZMlVqVTNGMVlYSmxaRjlGZFdOc2FXUmxZVzVmWkdsemRHRnVZMlZjYmlBcUlDb3ZYRzVtZFc1amRHbHZiaUJqYjIxd1lYSmhkR2wyWlVScGMzUmhibU5sS0hnc0lIa3BJSHRjYmx4MGNtVjBkWEp1SUNoY2JseDBYSFJOWVhSb0xuQnZkeWg0V3pCZElDMGdlVnN3WFN3Z01pa2dLMXh1WEhSY2RFMWhkR2d1Y0c5M0tIaGJNVjBnTFNCNVd6RmRMQ0F5S1NBclhHNWNkRngwVFdGMGFDNXdiM2NvZUZzeVhTQXRJSGxiTWwwc0lESXBYRzVjZENrN1hHNTlYRzVjYm1OdmJuWmxjblF1Y21kaUxtdGxlWGR2Y21RZ1BTQm1kVzVqZEdsdmJpQW9jbWRpS1NCN1hHNWNkSFpoY2lCeVpYWmxjbk5sWkNBOUlISmxkbVZ5YzJWTFpYbDNiM0prYzF0eVoySmRPMXh1WEhScFppQW9jbVYyWlhKelpXUXBJSHRjYmx4MFhIUnlaWFIxY200Z2NtVjJaWEp6WldRN1hHNWNkSDFjYmx4dVhIUjJZWElnWTNWeWNtVnVkRU5zYjNObGMzUkVhWE4wWVc1alpTQTlJRWx1Wm1sdWFYUjVPMXh1WEhSMllYSWdZM1Z5Y21WdWRFTnNiM05sYzNSTFpYbDNiM0prTzF4dVhHNWNkR1p2Y2lBb2RtRnlJR3RsZVhkdmNtUWdhVzRnWTNOelMyVjVkMjl5WkhNcElIdGNibHgwWEhScFppQW9ZM056UzJWNWQyOXlaSE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1ZDI5eVpDa3BJSHRjYmx4MFhIUmNkSFpoY2lCMllXeDFaU0E5SUdOemMwdGxlWGR2Y21SelcydGxlWGR2Y21SZE8xeHVYRzVjZEZ4MFhIUXZMeUJEYjIxd2RYUmxJR052YlhCaGNtRjBhWFpsSUdScGMzUmhibU5sWEc1Y2RGeDBYSFIyWVhJZ1pHbHpkR0Z1WTJVZ1BTQmpiMjF3WVhKaGRHbDJaVVJwYzNSaGJtTmxLSEpuWWl3Z2RtRnNkV1VwTzF4dVhHNWNkRngwWEhRdkx5QkRhR1ZqYXlCcFppQnBkSE1nYkdWemN5d2dhV1lnYzI4Z2MyVjBJR0Z6SUdOc2IzTmxjM1JjYmx4MFhIUmNkR2xtSUNoa2FYTjBZVzVqWlNBOElHTjFjbkpsYm5SRGJHOXpaWE4wUkdsemRHRnVZMlVwSUh0Y2JseDBYSFJjZEZ4MFkzVnljbVZ1ZEVOc2IzTmxjM1JFYVhOMFlXNWpaU0E5SUdScGMzUmhibU5sTzF4dVhIUmNkRngwWEhSamRYSnlaVzUwUTJ4dmMyVnpkRXRsZVhkdmNtUWdQU0JyWlhsM2IzSmtPMXh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQmpkWEp5Wlc1MFEyeHZjMlZ6ZEV0bGVYZHZjbVE3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbXRsZVhkdmNtUXVjbWRpSUQwZ1puVnVZM1JwYjI0Z0tHdGxlWGR2Y21RcElIdGNibHgwY21WMGRYSnVJR056YzB0bGVYZHZjbVJ6VzJ0bGVYZHZjbVJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzV5WjJJdWVIbDZJRDBnWm5WdVkzUnBiMjRnS0hKbllpa2dlMXh1WEhSMllYSWdjaUE5SUhKbllsc3dYU0F2SURJMU5UdGNibHgwZG1GeUlHY2dQU0J5WjJKYk1WMGdMeUF5TlRVN1hHNWNkSFpoY2lCaUlEMGdjbWRpV3pKZElDOGdNalUxTzF4dVhHNWNkQzh2SUdGemMzVnRaU0J6VWtkQ1hHNWNkSElnUFNCeUlENGdNQzR3TkRBME5TQS9JRTFoZEdndWNHOTNLQ2dvY2lBcklEQXVNRFUxS1NBdklERXVNRFUxS1N3Z01pNDBLU0E2SUNoeUlDOGdNVEl1T1RJcE8xeHVYSFJuSUQwZ1p5QStJREF1TURRd05EVWdQeUJOWVhSb0xuQnZkeWdvS0djZ0t5QXdMakExTlNrZ0x5QXhMakExTlNrc0lESXVOQ2tnT2lBb1p5QXZJREV5TGpreUtUdGNibHgwWWlBOUlHSWdQaUF3TGpBME1EUTFJRDhnVFdGMGFDNXdiM2NvS0NoaUlDc2dNQzR3TlRVcElDOGdNUzR3TlRVcExDQXlMalFwSURvZ0tHSWdMeUF4TWk0NU1pazdYRzVjYmx4MGRtRnlJSGdnUFNBb2NpQXFJREF1TkRFeU5Da2dLeUFvWnlBcUlEQXVNelUzTmlrZ0t5QW9ZaUFxSURBdU1UZ3dOU2s3WEc1Y2RIWmhjaUI1SUQwZ0tISWdLaUF3TGpJeE1qWXBJQ3NnS0djZ0tpQXdMamN4TlRJcElDc2dLR0lnS2lBd0xqQTNNaklwTzF4dVhIUjJZWElnZWlBOUlDaHlJQ29nTUM0d01Ua3pLU0FySUNobklDb2dNQzR4TVRreUtTQXJJQ2hpSUNvZ01DNDVOVEExS1R0Y2JseHVYSFJ5WlhSMWNtNGdXM2dnS2lBeE1EQXNJSGtnS2lBeE1EQXNJSG9nS2lBeE1EQmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNXlaMkl1YkdGaUlEMGdablZ1WTNScGIyNGdLSEpuWWlrZ2UxeHVYSFIyWVhJZ2VIbDZJRDBnWTI5dWRtVnlkQzV5WjJJdWVIbDZLSEpuWWlrN1hHNWNkSFpoY2lCNElEMGdlSGw2V3pCZE8xeHVYSFIyWVhJZ2VTQTlJSGg1ZWxzeFhUdGNibHgwZG1GeUlIb2dQU0I0ZVhwYk1sMDdYRzVjZEhaaGNpQnNPMXh1WEhSMllYSWdZVHRjYmx4MGRtRnlJR0k3WEc1Y2JseDBlQ0F2UFNBNU5TNHdORGM3WEc1Y2RIa2dMejBnTVRBd08xeHVYSFI2SUM4OUlERXdPQzQ0T0RNN1hHNWNibHgwZUNBOUlIZ2dQaUF3TGpBd09EZzFOaUEvSUUxaGRHZ3VjRzkzS0hnc0lERWdMeUF6S1NBNklDZzNMamM0TnlBcUlIZ3BJQ3NnS0RFMklDOGdNVEUyS1R0Y2JseDBlU0E5SUhrZ1BpQXdMakF3T0RnMU5pQS9JRTFoZEdndWNHOTNLSGtzSURFZ0x5QXpLU0E2SUNnM0xqYzROeUFxSUhrcElDc2dLREUySUM4Z01URTJLVHRjYmx4MGVpQTlJSG9nUGlBd0xqQXdPRGcxTmlBL0lFMWhkR2d1Y0c5M0tIb3NJREVnTHlBektTQTZJQ2czTGpjNE55QXFJSG9wSUNzZ0tERTJJQzhnTVRFMktUdGNibHh1WEhSc0lEMGdLREV4TmlBcUlIa3BJQzBnTVRZN1hHNWNkR0VnUFNBMU1EQWdLaUFvZUNBdElIa3BPMXh1WEhSaUlEMGdNakF3SUNvZ0tIa2dMU0I2S1R0Y2JseHVYSFJ5WlhSMWNtNGdXMndzSUdFc0lHSmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW9jMnd1Y21kaUlEMGdablZ1WTNScGIyNGdLR2h6YkNrZ2UxeHVYSFIyWVhJZ2FDQTlJR2h6YkZzd1hTQXZJRE0yTUR0Y2JseDBkbUZ5SUhNZ1BTQm9jMnhiTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUJzSUQwZ2FITnNXekpkSUM4Z01UQXdPMXh1WEhSMllYSWdkREU3WEc1Y2RIWmhjaUIwTWp0Y2JseDBkbUZ5SUhRek8xeHVYSFIyWVhJZ2NtZGlPMXh1WEhSMllYSWdkbUZzTzF4dVhHNWNkR2xtSUNoeklEMDlQU0F3S1NCN1hHNWNkRngwZG1Gc0lEMGdiQ0FxSURJMU5UdGNibHgwWEhSeVpYUjFjbTRnVzNaaGJDd2dkbUZzTENCMllXeGRPMXh1WEhSOVhHNWNibHgwYVdZZ0tHd2dQQ0F3TGpVcElIdGNibHgwWEhSME1pQTlJR3dnS2lBb01TQXJJSE1wTzF4dVhIUjlJR1ZzYzJVZ2UxeHVYSFJjZEhReUlEMGdiQ0FySUhNZ0xTQnNJQ29nY3p0Y2JseDBmVnh1WEc1Y2RIUXhJRDBnTWlBcUlHd2dMU0IwTWp0Y2JseHVYSFJ5WjJJZ1BTQmJNQ3dnTUN3Z01GMDdYRzVjZEdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z016c2dhU3NyS1NCN1hHNWNkRngwZERNZ1BTQm9JQ3NnTVNBdklETWdLaUF0S0drZ0xTQXhLVHRjYmx4MFhIUnBaaUFvZERNZ1BDQXdLU0I3WEc1Y2RGeDBYSFIwTXlzck8xeHVYSFJjZEgxY2JseDBYSFJwWmlBb2RETWdQaUF4S1NCN1hHNWNkRngwWEhSME15MHRPMXh1WEhSY2RIMWNibHh1WEhSY2RHbG1JQ2cySUNvZ2RETWdQQ0F4S1NCN1hHNWNkRngwWEhSMllXd2dQU0IwTVNBcklDaDBNaUF0SUhReEtTQXFJRFlnS2lCME16dGNibHgwWEhSOUlHVnNjMlVnYVdZZ0tESWdLaUIwTXlBOElERXBJSHRjYmx4MFhIUmNkSFpoYkNBOUlIUXlPMXh1WEhSY2RIMGdaV3h6WlNCcFppQW9NeUFxSUhReklEd2dNaWtnZTF4dVhIUmNkRngwZG1Gc0lEMGdkREVnS3lBb2RESWdMU0IwTVNrZ0tpQW9NaUF2SURNZ0xTQjBNeWtnS2lBMk8xeHVYSFJjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBYSFIyWVd3Z1BTQjBNVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnlaMkpiYVYwZ1BTQjJZV3dnS2lBeU5UVTdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdjbWRpTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVvYzJ3dWFITjJJRDBnWm5WdVkzUnBiMjRnS0doemJDa2dlMXh1WEhSMllYSWdhQ0E5SUdoemJGc3dYVHRjYmx4MGRtRnlJSE1nUFNCb2MyeGJNVjBnTHlBeE1EQTdYRzVjZEhaaGNpQnNJRDBnYUhOc1d6SmRJQzhnTVRBd08xeHVYSFIyWVhJZ2MyMXBiaUE5SUhNN1hHNWNkSFpoY2lCc2JXbHVJRDBnVFdGMGFDNXRZWGdvYkN3Z01DNHdNU2s3WEc1Y2RIWmhjaUJ6ZGp0Y2JseDBkbUZ5SUhZN1hHNWNibHgwYkNBcVBTQXlPMXh1WEhSeklDbzlJQ2hzSUR3OUlERXBJRDhnYkNBNklESWdMU0JzTzF4dVhIUnpiV2x1SUNvOUlHeHRhVzRnUEQwZ01TQS9JR3h0YVc0Z09pQXlJQzBnYkcxcGJqdGNibHgwZGlBOUlDaHNJQ3NnY3lrZ0x5QXlPMXh1WEhSemRpQTlJR3dnUFQwOUlEQWdQeUFvTWlBcUlITnRhVzRwSUM4Z0tHeHRhVzRnS3lCemJXbHVLU0E2SUNneUlDb2djeWtnTHlBb2JDQXJJSE1wTzF4dVhHNWNkSEpsZEhWeWJpQmJhQ3dnYzNZZ0tpQXhNREFzSUhZZ0tpQXhNREJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVvYzNZdWNtZGlJRDBnWm5WdVkzUnBiMjRnS0doemRpa2dlMXh1WEhSMllYSWdhQ0E5SUdoemRsc3dYU0F2SURZd08xeHVYSFIyWVhJZ2N5QTlJR2h6ZGxzeFhTQXZJREV3TUR0Y2JseDBkbUZ5SUhZZ1BTQm9jM1piTWwwZ0x5QXhNREE3WEc1Y2RIWmhjaUJvYVNBOUlFMWhkR2d1Wm14dmIzSW9hQ2tnSlNBMk8xeHVYRzVjZEhaaGNpQm1JRDBnYUNBdElFMWhkR2d1Wm14dmIzSW9hQ2s3WEc1Y2RIWmhjaUJ3SUQwZ01qVTFJQ29nZGlBcUlDZ3hJQzBnY3lrN1hHNWNkSFpoY2lCeElEMGdNalUxSUNvZ2RpQXFJQ2d4SUMwZ0tITWdLaUJtS1NrN1hHNWNkSFpoY2lCMElEMGdNalUxSUNvZ2RpQXFJQ2d4SUMwZ0tITWdLaUFvTVNBdElHWXBLU2s3WEc1Y2RIWWdLajBnTWpVMU8xeHVYRzVjZEhOM2FYUmphQ0FvYUdrcElIdGNibHgwWEhSallYTmxJREE2WEc1Y2RGeDBYSFJ5WlhSMWNtNGdXM1lzSUhRc0lIQmRPMXh1WEhSY2RHTmhjMlVnTVRwY2JseDBYSFJjZEhKbGRIVnliaUJiY1N3Z2Rpd2djRjA3WEc1Y2RGeDBZMkZ6WlNBeU9seHVYSFJjZEZ4MGNtVjBkWEp1SUZ0d0xDQjJMQ0IwWFR0Y2JseDBYSFJqWVhObElETTZYRzVjZEZ4MFhIUnlaWFIxY200Z1czQXNJSEVzSUhaZE8xeHVYSFJjZEdOaGMyVWdORHBjYmx4MFhIUmNkSEpsZEhWeWJpQmJkQ3dnY0N3Z2RsMDdYRzVjZEZ4MFkyRnpaU0ExT2x4dVhIUmNkRngwY21WMGRYSnVJRnQyTENCd0xDQnhYVHRjYmx4MGZWeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1b2MzWXVhSE5zSUQwZ1puVnVZM1JwYjI0Z0tHaHpkaWtnZTF4dVhIUjJZWElnYUNBOUlHaHpkbHN3WFR0Y2JseDBkbUZ5SUhNZ1BTQm9jM1piTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUIySUQwZ2FITjJXekpkSUM4Z01UQXdPMXh1WEhSMllYSWdkbTFwYmlBOUlFMWhkR2d1YldGNEtIWXNJREF1TURFcE8xeHVYSFIyWVhJZ2JHMXBianRjYmx4MGRtRnlJSE5zTzF4dVhIUjJZWElnYkR0Y2JseHVYSFJzSUQwZ0tESWdMU0J6S1NBcUlIWTdYRzVjZEd4dGFXNGdQU0FvTWlBdElITXBJQ29nZG0xcGJqdGNibHgwYzJ3Z1BTQnpJQ29nZG0xcGJqdGNibHgwYzJ3Z0x6MGdLR3h0YVc0Z1BEMGdNU2tnUHlCc2JXbHVJRG9nTWlBdElHeHRhVzQ3WEc1Y2RITnNJRDBnYzJ3Z2ZId2dNRHRjYmx4MGJDQXZQU0F5TzF4dVhHNWNkSEpsZEhWeWJpQmJhQ3dnYzJ3Z0tpQXhNREFzSUd3Z0tpQXhNREJkTzF4dWZUdGNibHh1THk4Z2FIUjBjRG92TDJSbGRpNTNNeTV2Y21jdlkzTnpkMmN2WTNOekxXTnZiRzl5THlOb2QySXRkRzh0Y21kaVhHNWpiMjUyWlhKMExtaDNZaTV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9hSGRpS1NCN1hHNWNkSFpoY2lCb0lEMGdhSGRpV3pCZElDOGdNell3TzF4dVhIUjJZWElnZDJnZ1BTQm9kMkpiTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUJpYkNBOUlHaDNZbHN5WFNBdklERXdNRHRjYmx4MGRtRnlJSEpoZEdsdklEMGdkMmdnS3lCaWJEdGNibHgwZG1GeUlHazdYRzVjZEhaaGNpQjJPMXh1WEhSMllYSWdaanRjYmx4MGRtRnlJRzQ3WEc1Y2JseDBMeThnZDJnZ0t5QmliQ0JqWVc1MElHSmxJRDRnTVZ4dVhIUnBaaUFvY21GMGFXOGdQaUF4S1NCN1hHNWNkRngwZDJnZ0x6MGdjbUYwYVc4N1hHNWNkRngwWW13Z0x6MGdjbUYwYVc4N1hHNWNkSDFjYmx4dVhIUnBJRDBnVFdGMGFDNW1iRzl2Y2lnMklDb2dhQ2s3WEc1Y2RIWWdQU0F4SUMwZ1ltdzdYRzVjZEdZZ1BTQTJJQ29nYUNBdElHazdYRzVjYmx4MGFXWWdLQ2hwSUNZZ01IZ3dNU2tnSVQwOUlEQXBJSHRjYmx4MFhIUm1JRDBnTVNBdElHWTdYRzVjZEgxY2JseHVYSFJ1SUQwZ2QyZ2dLeUJtSUNvZ0tIWWdMU0IzYUNrN0lDOHZJR3hwYm1WaGNpQnBiblJsY25CdmJHRjBhVzl1WEc1Y2JseDBkbUZ5SUhJN1hHNWNkSFpoY2lCbk8xeHVYSFIyWVhJZ1lqdGNibHgwYzNkcGRHTm9JQ2hwS1NCN1hHNWNkRngwWkdWbVlYVnNkRHBjYmx4MFhIUmpZWE5sSURZNlhHNWNkRngwWTJGelpTQXdPaUJ5SUQwZ2Rqc2daeUE5SUc0N0lHSWdQU0IzYURzZ1luSmxZV3M3WEc1Y2RGeDBZMkZ6WlNBeE9pQnlJRDBnYmpzZ1p5QTlJSFk3SUdJZ1BTQjNhRHNnWW5KbFlXczdYRzVjZEZ4MFkyRnpaU0F5T2lCeUlEMGdkMmc3SUdjZ1BTQjJPeUJpSUQwZ2Jqc2dZbkpsWVdzN1hHNWNkRngwWTJGelpTQXpPaUJ5SUQwZ2QyZzdJR2NnUFNCdU95QmlJRDBnZGpzZ1luSmxZV3M3WEc1Y2RGeDBZMkZ6WlNBME9pQnlJRDBnYmpzZ1p5QTlJSGRvT3lCaUlEMGdkanNnWW5KbFlXczdYRzVjZEZ4MFkyRnpaU0ExT2lCeUlEMGdkanNnWnlBOUlIZG9PeUJpSUQwZ2Jqc2dZbkpsWVdzN1hHNWNkSDFjYmx4dVhIUnlaWFIxY200Z1czSWdLaUF5TlRVc0lHY2dLaUF5TlRVc0lHSWdLaUF5TlRWZE8xeHVmVHRjYmx4dVkyOXVkbVZ5ZEM1amJYbHJMbkpuWWlBOUlHWjFibU4wYVc5dUlDaGpiWGxyS1NCN1hHNWNkSFpoY2lCaklEMGdZMjE1YTFzd1hTQXZJREV3TUR0Y2JseDBkbUZ5SUcwZ1BTQmpiWGxyV3pGZElDOGdNVEF3TzF4dVhIUjJZWElnZVNBOUlHTnRlV3RiTWwwZ0x5QXhNREE3WEc1Y2RIWmhjaUJySUQwZ1kyMTVhMXN6WFNBdklERXdNRHRjYmx4MGRtRnlJSEk3WEc1Y2RIWmhjaUJuTzF4dVhIUjJZWElnWWp0Y2JseHVYSFJ5SUQwZ01TQXRJRTFoZEdndWJXbHVLREVzSUdNZ0tpQW9NU0F0SUdzcElDc2dheWs3WEc1Y2RHY2dQU0F4SUMwZ1RXRjBhQzV0YVc0b01Td2diU0FxSUNneElDMGdheWtnS3lCcktUdGNibHgwWWlBOUlERWdMU0JOWVhSb0xtMXBiaWd4TENCNUlDb2dLREVnTFNCcktTQXJJR3NwTzF4dVhHNWNkSEpsZEhWeWJpQmJjaUFxSURJMU5Td2daeUFxSURJMU5Td2dZaUFxSURJMU5WMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExuaDVlaTV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9lSGw2S1NCN1hHNWNkSFpoY2lCNElEMGdlSGw2V3pCZElDOGdNVEF3TzF4dVhIUjJZWElnZVNBOUlIaDVlbHN4WFNBdklERXdNRHRjYmx4MGRtRnlJSG9nUFNCNGVYcGJNbDBnTHlBeE1EQTdYRzVjZEhaaGNpQnlPMXh1WEhSMllYSWdaenRjYmx4MGRtRnlJR0k3WEc1Y2JseDBjaUE5SUNoNElDb2dNeTR5TkRBMktTQXJJQ2g1SUNvZ0xURXVOVE0zTWlrZ0t5QW9laUFxSUMwd0xqUTVPRFlwTzF4dVhIUm5JRDBnS0hnZ0tpQXRNQzQ1TmpnNUtTQXJJQ2g1SUNvZ01TNDROelU0S1NBcklDaDZJQ29nTUM0d05ERTFLVHRjYmx4MFlpQTlJQ2g0SUNvZ01DNHdOVFUzS1NBcklDaDVJQ29nTFRBdU1qQTBNQ2tnS3lBb2VpQXFJREV1TURVM01DazdYRzVjYmx4MEx5OGdZWE56ZFcxbElITlNSMEpjYmx4MGNpQTlJSElnUGlBd0xqQXdNekV6TURoY2JseDBYSFEvSUNnb01TNHdOVFVnS2lCTllYUm9MbkJ2ZHloeUxDQXhMakFnTHlBeUxqUXBLU0F0SURBdU1EVTFLVnh1WEhSY2REb2djaUFxSURFeUxqa3lPMXh1WEc1Y2RHY2dQU0JuSUQ0Z01DNHdNRE14TXpBNFhHNWNkRngwUHlBb0tERXVNRFUxSUNvZ1RXRjBhQzV3YjNjb1p5d2dNUzR3SUM4Z01pNDBLU2tnTFNBd0xqQTFOU2xjYmx4MFhIUTZJR2NnS2lBeE1pNDVNanRjYmx4dVhIUmlJRDBnWWlBK0lEQXVNREF6TVRNd09GeHVYSFJjZEQ4Z0tDZ3hMakExTlNBcUlFMWhkR2d1Y0c5M0tHSXNJREV1TUNBdklESXVOQ2twSUMwZ01DNHdOVFVwWEc1Y2RGeDBPaUJpSUNvZ01USXVPVEk3WEc1Y2JseDBjaUE5SUUxaGRHZ3ViV2x1S0UxaGRHZ3ViV0Y0S0RBc0lISXBMQ0F4S1R0Y2JseDBaeUE5SUUxaGRHZ3ViV2x1S0UxaGRHZ3ViV0Y0S0RBc0lHY3BMQ0F4S1R0Y2JseDBZaUE5SUUxaGRHZ3ViV2x1S0UxaGRHZ3ViV0Y0S0RBc0lHSXBMQ0F4S1R0Y2JseHVYSFJ5WlhSMWNtNGdXM0lnS2lBeU5UVXNJR2NnS2lBeU5UVXNJR0lnS2lBeU5UVmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNTRlWG91YkdGaUlEMGdablZ1WTNScGIyNGdLSGg1ZWlrZ2UxeHVYSFIyWVhJZ2VDQTlJSGg1ZWxzd1hUdGNibHgwZG1GeUlIa2dQU0I0ZVhwYk1WMDdYRzVjZEhaaGNpQjZJRDBnZUhsNld6SmRPMXh1WEhSMllYSWdiRHRjYmx4MGRtRnlJR0U3WEc1Y2RIWmhjaUJpTzF4dVhHNWNkSGdnTHowZ09UVXVNRFEzTzF4dVhIUjVJQzg5SURFd01EdGNibHgwZWlBdlBTQXhNRGd1T0Rnek8xeHVYRzVjZEhnZ1BTQjRJRDRnTUM0d01EZzROVFlnUHlCTllYUm9MbkJ2ZHloNExDQXhJQzhnTXlrZ09pQW9OeTQzT0RjZ0tpQjRLU0FySUNneE5pQXZJREV4TmlrN1hHNWNkSGtnUFNCNUlENGdNQzR3TURnNE5UWWdQeUJOWVhSb0xuQnZkeWg1TENBeElDOGdNeWtnT2lBb055NDNPRGNnS2lCNUtTQXJJQ2d4TmlBdklERXhOaWs3WEc1Y2RIb2dQU0I2SUQ0Z01DNHdNRGc0TlRZZ1B5Qk5ZWFJvTG5CdmR5aDZMQ0F4SUM4Z015a2dPaUFvTnk0M09EY2dLaUI2S1NBcklDZ3hOaUF2SURFeE5pazdYRzVjYmx4MGJDQTlJQ2d4TVRZZ0tpQjVLU0F0SURFMk8xeHVYSFJoSUQwZ05UQXdJQ29nS0hnZ0xTQjVLVHRjYmx4MFlpQTlJREl3TUNBcUlDaDVJQzBnZWlrN1hHNWNibHgwY21WMGRYSnVJRnRzTENCaExDQmlYVHRjYm4wN1hHNWNibU52Ym5abGNuUXViR0ZpTG5oNWVpQTlJR1oxYm1OMGFXOXVJQ2hzWVdJcElIdGNibHgwZG1GeUlHd2dQU0JzWVdKYk1GMDdYRzVjZEhaaGNpQmhJRDBnYkdGaVd6RmRPMXh1WEhSMllYSWdZaUE5SUd4aFlsc3lYVHRjYmx4MGRtRnlJSGc3WEc1Y2RIWmhjaUI1TzF4dVhIUjJZWElnZWp0Y2JseHVYSFI1SUQwZ0tHd2dLeUF4TmlrZ0x5QXhNVFk3WEc1Y2RIZ2dQU0JoSUM4Z05UQXdJQ3NnZVR0Y2JseDBlaUE5SUhrZ0xTQmlJQzhnTWpBd08xeHVYRzVjZEhaaGNpQjVNaUE5SUUxaGRHZ3VjRzkzS0hrc0lETXBPMXh1WEhSMllYSWdlRElnUFNCTllYUm9MbkJ2ZHloNExDQXpLVHRjYmx4MGRtRnlJSG95SUQwZ1RXRjBhQzV3YjNjb2Vpd2dNeWs3WEc1Y2RIa2dQU0I1TWlBK0lEQXVNREE0T0RVMklEOGdlVElnT2lBb2VTQXRJREUySUM4Z01URTJLU0F2SURjdU56ZzNPMXh1WEhSNElEMGdlRElnUGlBd0xqQXdPRGcxTmlBL0lIZ3lJRG9nS0hnZ0xTQXhOaUF2SURFeE5pa2dMeUEzTGpjNE56dGNibHgwZWlBOUlIb3lJRDRnTUM0d01EZzROVFlnUHlCNk1pQTZJQ2g2SUMwZ01UWWdMeUF4TVRZcElDOGdOeTQzT0RjN1hHNWNibHgwZUNBcVBTQTVOUzR3TkRjN1hHNWNkSGtnS2owZ01UQXdPMXh1WEhSNklDbzlJREV3T0M0NE9ETTdYRzVjYmx4MGNtVjBkWEp1SUZ0NExDQjVMQ0I2WFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1YkdGaUxteGphQ0E5SUdaMWJtTjBhVzl1SUNoc1lXSXBJSHRjYmx4MGRtRnlJR3dnUFNCc1lXSmJNRjA3WEc1Y2RIWmhjaUJoSUQwZ2JHRmlXekZkTzF4dVhIUjJZWElnWWlBOUlHeGhZbHN5WFR0Y2JseDBkbUZ5SUdoeU8xeHVYSFIyWVhJZ2FEdGNibHgwZG1GeUlHTTdYRzVjYmx4MGFISWdQU0JOWVhSb0xtRjBZVzR5S0dJc0lHRXBPMXh1WEhSb0lEMGdhSElnS2lBek5qQWdMeUF5SUM4Z1RXRjBhQzVRU1R0Y2JseHVYSFJwWmlBb2FDQThJREFwSUh0Y2JseDBYSFJvSUNzOUlETTJNRHRjYmx4MGZWeHVYRzVjZEdNZ1BTQk5ZWFJvTG5OeGNuUW9ZU0FxSUdFZ0t5QmlJQ29nWWlrN1hHNWNibHgwY21WMGRYSnVJRnRzTENCakxDQm9YVHRjYm4wN1hHNWNibU52Ym5abGNuUXViR05vTG14aFlpQTlJR1oxYm1OMGFXOXVJQ2hzWTJncElIdGNibHgwZG1GeUlHd2dQU0JzWTJoYk1GMDdYRzVjZEhaaGNpQmpJRDBnYkdOb1d6RmRPMXh1WEhSMllYSWdhQ0E5SUd4amFGc3lYVHRjYmx4MGRtRnlJR0U3WEc1Y2RIWmhjaUJpTzF4dVhIUjJZWElnYUhJN1hHNWNibHgwYUhJZ1BTQm9JQzhnTXpZd0lDb2dNaUFxSUUxaGRHZ3VVRWs3WEc1Y2RHRWdQU0JqSUNvZ1RXRjBhQzVqYjNNb2FISXBPMXh1WEhSaUlEMGdZeUFxSUUxaGRHZ3VjMmx1S0doeUtUdGNibHh1WEhSeVpYUjFjbTRnVzJ3c0lHRXNJR0pkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzV5WjJJdVlXNXphVEUySUQwZ1puVnVZM1JwYjI0Z0tHRnlaM01wSUh0Y2JseDBkbUZ5SUhJZ1BTQmhjbWR6V3pCZE8xeHVYSFIyWVhJZ1p5QTlJR0Z5WjNOYk1WMDdYRzVjZEhaaGNpQmlJRDBnWVhKbmMxc3lYVHRjYmx4MGRtRnlJSFpoYkhWbElEMGdNU0JwYmlCaGNtZDFiV1Z1ZEhNZ1B5QmhjbWQxYldWdWRITmJNVjBnT2lCamIyNTJaWEowTG5KbllpNW9jM1lvWVhKbmN5bGJNbDA3SUM4dklHaHpkaUF0UGlCaGJuTnBNVFlnYjNCMGFXMXBlbUYwYVc5dVhHNWNibHgwZG1Gc2RXVWdQU0JOWVhSb0xuSnZkVzVrS0haaGJIVmxJQzhnTlRBcE8xeHVYRzVjZEdsbUlDaDJZV3gxWlNBOVBUMGdNQ2tnZTF4dVhIUmNkSEpsZEhWeWJpQXpNRHRjYmx4MGZWeHVYRzVjZEhaaGNpQmhibk5wSUQwZ016QmNibHgwWEhRcklDZ29UV0YwYUM1eWIzVnVaQ2hpSUM4Z01qVTFLU0E4UENBeUtWeHVYSFJjZEh3Z0tFMWhkR2d1Y205MWJtUW9aeUF2SURJMU5Ta2dQRHdnTVNsY2JseDBYSFI4SUUxaGRHZ3VjbTkxYm1Rb2NpQXZJREkxTlNrcE8xeHVYRzVjZEdsbUlDaDJZV3gxWlNBOVBUMGdNaWtnZTF4dVhIUmNkR0Z1YzJrZ0t6MGdOakE3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnWVc1emFUdGNibjA3WEc1Y2JtTnZiblpsY25RdWFITjJMbUZ1YzJreE5pQTlJR1oxYm1OMGFXOXVJQ2hoY21kektTQjdYRzVjZEM4dklHOXdkR2x0YVhwaGRHbHZiaUJvWlhKbE95QjNaU0JoYkhKbFlXUjVJR3R1YjNjZ2RHaGxJSFpoYkhWbElHRnVaQ0JrYjI0bmRDQnVaV1ZrSUhSdklHZGxkRnh1WEhRdkx5QnBkQ0JqYjI1MlpYSjBaV1FnWm05eUlIVnpMbHh1WEhSeVpYUjFjbTRnWTI5dWRtVnlkQzV5WjJJdVlXNXphVEUyS0dOdmJuWmxjblF1YUhOMkxuSm5ZaWhoY21kektTd2dZWEpuYzFzeVhTazdYRzU5TzF4dVhHNWpiMjUyWlhKMExuSm5ZaTVoYm5OcE1qVTJJRDBnWm5WdVkzUnBiMjRnS0dGeVozTXBJSHRjYmx4MGRtRnlJSElnUFNCaGNtZHpXekJkTzF4dVhIUjJZWElnWnlBOUlHRnlaM05iTVYwN1hHNWNkSFpoY2lCaUlEMGdZWEpuYzFzeVhUdGNibHh1WEhRdkx5QjNaU0IxYzJVZ2RHaGxJR1Y0ZEdWdVpHVmtJR2R5WlhselkyRnNaU0J3WVd4bGRIUmxJR2hsY21Vc0lIZHBkR2dnZEdobElHVjRZMlZ3ZEdsdmJpQnZabHh1WEhRdkx5QmliR0ZqYXlCaGJtUWdkMmhwZEdVdUlHNXZjbTFoYkNCd1lXeGxkSFJsSUc5dWJIa2dhR0Z6SURRZ1ozSmxlWE5qWVd4bElITm9ZV1JsY3k1Y2JseDBhV1lnS0hJZ1BUMDlJR2NnSmlZZ1p5QTlQVDBnWWlrZ2UxeHVYSFJjZEdsbUlDaHlJRHdnT0NrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SURFMk8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaHlJRDRnTWpRNEtTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z01qTXhPMXh1WEhSY2RIMWNibHh1WEhSY2RISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tDZ29jaUF0SURncElDOGdNalEzS1NBcUlESTBLU0FySURJek1qdGNibHgwZlZ4dVhHNWNkSFpoY2lCaGJuTnBJRDBnTVRaY2JseDBYSFFySUNnek5pQXFJRTFoZEdndWNtOTFibVFvY2lBdklESTFOU0FxSURVcEtWeHVYSFJjZENzZ0tEWWdLaUJOWVhSb0xuSnZkVzVrS0djZ0x5QXlOVFVnS2lBMUtTbGNibHgwWEhRcklFMWhkR2d1Y205MWJtUW9ZaUF2SURJMU5TQXFJRFVwTzF4dVhHNWNkSEpsZEhWeWJpQmhibk5wTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVoYm5OcE1UWXVjbWRpSUQwZ1puVnVZM1JwYjI0Z0tHRnlaM01wSUh0Y2JseDBkbUZ5SUdOdmJHOXlJRDBnWVhKbmN5QWxJREV3TzF4dVhHNWNkQzh2SUdoaGJtUnNaU0JuY21WNWMyTmhiR1ZjYmx4MGFXWWdLR052Ykc5eUlEMDlQU0F3SUh4OElHTnZiRzl5SUQwOVBTQTNLU0I3WEc1Y2RGeDBhV1lnS0dGeVozTWdQaUExTUNrZ2UxeHVYSFJjZEZ4MFkyOXNiM0lnS3owZ015NDFPMXh1WEhSY2RIMWNibHh1WEhSY2RHTnZiRzl5SUQwZ1kyOXNiM0lnTHlBeE1DNDFJQ29nTWpVMU8xeHVYRzVjZEZ4MGNtVjBkWEp1SUZ0amIyeHZjaXdnWTI5c2IzSXNJR052Ykc5eVhUdGNibHgwZlZ4dVhHNWNkSFpoY2lCdGRXeDBJRDBnS0g1K0tHRnlaM01nUGlBMU1Da2dLeUF4S1NBcUlEQXVOVHRjYmx4MGRtRnlJSElnUFNBb0tHTnZiRzl5SUNZZ01Ta2dLaUJ0ZFd4MEtTQXFJREkxTlR0Y2JseDBkbUZ5SUdjZ1BTQW9LQ2hqYjJ4dmNpQStQaUF4S1NBbUlERXBJQ29nYlhWc2RDa2dLaUF5TlRVN1hHNWNkSFpoY2lCaUlEMGdLQ2dvWTI5c2IzSWdQajRnTWlrZ0ppQXhLU0FxSUcxMWJIUXBJQ29nTWpVMU8xeHVYRzVjZEhKbGRIVnliaUJiY2l3Z1p5d2dZbDA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbUZ1YzJreU5UWXVjbWRpSUQwZ1puVnVZM1JwYjI0Z0tHRnlaM01wSUh0Y2JseDBMeThnYUdGdVpHeGxJR2R5WlhselkyRnNaVnh1WEhScFppQW9ZWEpuY3lBK1BTQXlNeklwSUh0Y2JseDBYSFIyWVhJZ1l5QTlJQ2hoY21keklDMGdNak15S1NBcUlERXdJQ3NnT0R0Y2JseDBYSFJ5WlhSMWNtNGdXMk1zSUdNc0lHTmRPMXh1WEhSOVhHNWNibHgwWVhKbmN5QXRQU0F4Tmp0Y2JseHVYSFIyWVhJZ2NtVnRPMXh1WEhSMllYSWdjaUE5SUUxaGRHZ3VabXh2YjNJb1lYSm5jeUF2SURNMktTQXZJRFVnS2lBeU5UVTdYRzVjZEhaaGNpQm5JRDBnVFdGMGFDNW1iRzl2Y2lnb2NtVnRJRDBnWVhKbmN5QWxJRE0yS1NBdklEWXBJQzhnTlNBcUlESTFOVHRjYmx4MGRtRnlJR0lnUFNBb2NtVnRJQ1VnTmlrZ0x5QTFJQ29nTWpVMU8xeHVYRzVjZEhKbGRIVnliaUJiY2l3Z1p5d2dZbDA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbkpuWWk1b1pYZ2dQU0JtZFc1amRHbHZiaUFvWVhKbmN5a2dlMXh1WEhSMllYSWdhVzUwWldkbGNpQTlJQ2dvVFdGMGFDNXliM1Z1WkNoaGNtZHpXekJkS1NBbUlEQjRSa1lwSUR3OElERTJLVnh1WEhSY2RDc2dLQ2hOWVhSb0xuSnZkVzVrS0dGeVozTmJNVjBwSUNZZ01IaEdSaWtnUER3Z09DbGNibHgwWEhRcklDaE5ZWFJvTG5KdmRXNWtLR0Z5WjNOYk1sMHBJQ1lnTUhoR1JpazdYRzVjYmx4MGRtRnlJSE4wY21sdVp5QTlJR2x1ZEdWblpYSXVkRzlUZEhKcGJtY29NVFlwTG5SdlZYQndaWEpEWVhObEtDazdYRzVjZEhKbGRIVnliaUFuTURBd01EQXdKeTV6ZFdKemRISnBibWNvYzNSeWFXNW5MbXhsYm1kMGFDa2dLeUJ6ZEhKcGJtYzdYRzU5TzF4dVhHNWpiMjUyWlhKMExtaGxlQzV5WjJJZ1BTQm1kVzVqZEdsdmJpQW9ZWEpuY3lrZ2UxeHVYSFIyWVhJZ2JXRjBZMmdnUFNCaGNtZHpMblJ2VTNSeWFXNW5LREUyS1M1dFlYUmphQ2d2VzJFdFpqQXRPVjE3Tm4xOFcyRXRaakF0T1YxN00zMHZhU2s3WEc1Y2RHbG1JQ2doYldGMFkyZ3BJSHRjYmx4MFhIUnlaWFIxY200Z1d6QXNJREFzSURCZE8xeHVYSFI5WEc1Y2JseDBkbUZ5SUdOdmJHOXlVM1J5YVc1bklEMGdiV0YwWTJoYk1GMDdYRzVjYmx4MGFXWWdLRzFoZEdOb1d6QmRMbXhsYm1kMGFDQTlQVDBnTXlrZ2UxeHVYSFJjZEdOdmJHOXlVM1J5YVc1bklEMGdZMjlzYjNKVGRISnBibWN1YzNCc2FYUW9KeWNwTG0xaGNDaG1kVzVqZEdsdmJpQW9ZMmhoY2lrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUdOb1lYSWdLeUJqYUdGeU8xeHVYSFJjZEgwcExtcHZhVzRvSnljcE8xeHVYSFI5WEc1Y2JseDBkbUZ5SUdsdWRHVm5aWElnUFNCd1lYSnpaVWx1ZENoamIyeHZjbE4wY21sdVp5d2dNVFlwTzF4dVhIUjJZWElnY2lBOUlDaHBiblJsWjJWeUlENCtJREUyS1NBbUlEQjRSa1k3WEc1Y2RIWmhjaUJuSUQwZ0tHbHVkR1ZuWlhJZ1BqNGdPQ2tnSmlBd2VFWkdPMXh1WEhSMllYSWdZaUE5SUdsdWRHVm5aWElnSmlBd2VFWkdPMXh1WEc1Y2RISmxkSFZ5YmlCYmNpd2daeXdnWWwwN1hHNTlPMXh1WEc1amIyNTJaWEowTG5KbllpNW9ZMmNnUFNCbWRXNWpkR2x2YmlBb2NtZGlLU0I3WEc1Y2RIWmhjaUJ5SUQwZ2NtZGlXekJkSUM4Z01qVTFPMXh1WEhSMllYSWdaeUE5SUhKbllsc3hYU0F2SURJMU5UdGNibHgwZG1GeUlHSWdQU0J5WjJKYk1sMGdMeUF5TlRVN1hHNWNkSFpoY2lCdFlYZ2dQU0JOWVhSb0xtMWhlQ2hOWVhSb0xtMWhlQ2h5TENCbktTd2dZaWs3WEc1Y2RIWmhjaUJ0YVc0Z1BTQk5ZWFJvTG0xcGJpaE5ZWFJvTG0xcGJpaHlMQ0JuS1N3Z1lpazdYRzVjZEhaaGNpQmphSEp2YldFZ1BTQW9iV0Y0SUMwZ2JXbHVLVHRjYmx4MGRtRnlJR2R5WVhselkyRnNaVHRjYmx4MGRtRnlJR2gxWlR0Y2JseHVYSFJwWmlBb1kyaHliMjFoSUR3Z01Ta2dlMXh1WEhSY2RHZHlZWGx6WTJGc1pTQTlJRzFwYmlBdklDZ3hJQzBnWTJoeWIyMWhLVHRjYmx4MGZTQmxiSE5sSUh0Y2JseDBYSFJuY21GNWMyTmhiR1VnUFNBd08xeHVYSFI5WEc1Y2JseDBhV1lnS0dOb2NtOXRZU0E4UFNBd0tTQjdYRzVjZEZ4MGFIVmxJRDBnTUR0Y2JseDBmU0JsYkhObFhHNWNkR2xtSUNodFlYZ2dQVDA5SUhJcElIdGNibHgwWEhSb2RXVWdQU0FvS0djZ0xTQmlLU0F2SUdOb2NtOXRZU2tnSlNBMk8xeHVYSFI5SUdWc2MyVmNibHgwYVdZZ0tHMWhlQ0E5UFQwZ1p5a2dlMXh1WEhSY2RHaDFaU0E5SURJZ0t5QW9ZaUF0SUhJcElDOGdZMmh5YjIxaE8xeHVYSFI5SUdWc2MyVWdlMXh1WEhSY2RHaDFaU0E5SURRZ0t5QW9jaUF0SUdjcElDOGdZMmh5YjIxaElDc2dORHRjYmx4MGZWeHVYRzVjZEdoMVpTQXZQU0EyTzF4dVhIUm9kV1VnSlQwZ01UdGNibHh1WEhSeVpYUjFjbTRnVzJoMVpTQXFJRE0yTUN3Z1kyaHliMjFoSUNvZ01UQXdMQ0JuY21GNWMyTmhiR1VnS2lBeE1EQmRPMXh1ZlR0Y2JseHVZMjl1ZG1WeWRDNW9jMnd1YUdObklEMGdablZ1WTNScGIyNGdLR2h6YkNrZ2UxeHVYSFIyWVhJZ2N5QTlJR2h6YkZzeFhTQXZJREV3TUR0Y2JseDBkbUZ5SUd3Z1BTQm9jMnhiTWwwZ0x5QXhNREE3WEc1Y2RIWmhjaUJqSUQwZ01UdGNibHgwZG1GeUlHWWdQU0F3TzF4dVhHNWNkR2xtSUNoc0lEd2dNQzQxS1NCN1hHNWNkRngwWXlBOUlESXVNQ0FxSUhNZ0tpQnNPMXh1WEhSOUlHVnNjMlVnZTF4dVhIUmNkR01nUFNBeUxqQWdLaUJ6SUNvZ0tERXVNQ0F0SUd3cE8xeHVYSFI5WEc1Y2JseDBhV1lnS0dNZ1BDQXhMakFwSUh0Y2JseDBYSFJtSUQwZ0tHd2dMU0F3TGpVZ0tpQmpLU0F2SUNneExqQWdMU0JqS1R0Y2JseDBmVnh1WEc1Y2RISmxkSFZ5YmlCYmFITnNXekJkTENCaklDb2dNVEF3TENCbUlDb2dNVEF3WFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1YUhOMkxtaGpaeUE5SUdaMWJtTjBhVzl1SUNob2MzWXBJSHRjYmx4MGRtRnlJSE1nUFNCb2MzWmJNVjBnTHlBeE1EQTdYRzVjZEhaaGNpQjJJRDBnYUhOMld6SmRJQzhnTVRBd08xeHVYRzVjZEhaaGNpQmpJRDBnY3lBcUlIWTdYRzVjZEhaaGNpQm1JRDBnTUR0Y2JseHVYSFJwWmlBb1l5QThJREV1TUNrZ2UxeHVYSFJjZEdZZ1BTQW9kaUF0SUdNcElDOGdLREVnTFNCaktUdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQmJhSE4yV3pCZExDQmpJQ29nTVRBd0xDQm1JQ29nTVRBd1hUdGNibjA3WEc1Y2JtTnZiblpsY25RdWFHTm5MbkpuWWlBOUlHWjFibU4wYVc5dUlDaG9ZMmNwSUh0Y2JseDBkbUZ5SUdnZ1BTQm9ZMmRiTUYwZ0x5QXpOakE3WEc1Y2RIWmhjaUJqSUQwZ2FHTm5XekZkSUM4Z01UQXdPMXh1WEhSMllYSWdaeUE5SUdoaloxc3lYU0F2SURFd01EdGNibHh1WEhScFppQW9ZeUE5UFQwZ01DNHdLU0I3WEc1Y2RGeDBjbVYwZFhKdUlGdG5JQ29nTWpVMUxDQm5JQ29nTWpVMUxDQm5JQ29nTWpVMVhUdGNibHgwZlZ4dVhHNWNkSFpoY2lCd2RYSmxJRDBnV3pBc0lEQXNJREJkTzF4dVhIUjJZWElnYUdrZ1BTQW9hQ0FsSURFcElDb2dOanRjYmx4MGRtRnlJSFlnUFNCb2FTQWxJREU3WEc1Y2RIWmhjaUIzSUQwZ01TQXRJSFk3WEc1Y2RIWmhjaUJ0WnlBOUlEQTdYRzVjYmx4MGMzZHBkR05vSUNoTllYUm9MbVpzYjI5eUtHaHBLU2tnZTF4dVhIUmNkR05oYzJVZ01EcGNibHgwWEhSY2RIQjFjbVZiTUYwZ1BTQXhPeUJ3ZFhKbFd6RmRJRDBnZGpzZ2NIVnlaVnN5WFNBOUlEQTdJR0p5WldGck8xeHVYSFJjZEdOaGMyVWdNVHBjYmx4MFhIUmNkSEIxY21WYk1GMGdQU0IzT3lCd2RYSmxXekZkSUQwZ01Uc2djSFZ5WlZzeVhTQTlJREE3SUdKeVpXRnJPMXh1WEhSY2RHTmhjMlVnTWpwY2JseDBYSFJjZEhCMWNtVmJNRjBnUFNBd095QndkWEpsV3pGZElEMGdNVHNnY0hWeVpWc3lYU0E5SUhZN0lHSnlaV0ZyTzF4dVhIUmNkR05oYzJVZ016cGNibHgwWEhSY2RIQjFjbVZiTUYwZ1BTQXdPeUJ3ZFhKbFd6RmRJRDBnZHpzZ2NIVnlaVnN5WFNBOUlERTdJR0p5WldGck8xeHVYSFJjZEdOaGMyVWdORHBjYmx4MFhIUmNkSEIxY21WYk1GMGdQU0IyT3lCd2RYSmxXekZkSUQwZ01Ec2djSFZ5WlZzeVhTQTlJREU3SUdKeVpXRnJPMXh1WEhSY2RHUmxabUYxYkhRNlhHNWNkRngwWEhSd2RYSmxXekJkSUQwZ01Uc2djSFZ5WlZzeFhTQTlJREE3SUhCMWNtVmJNbDBnUFNCM08xeHVYSFI5WEc1Y2JseDBiV2NnUFNBb01TNHdJQzBnWXlrZ0tpQm5PMXh1WEc1Y2RISmxkSFZ5YmlCYlhHNWNkRngwS0dNZ0tpQndkWEpsV3pCZElDc2diV2NwSUNvZ01qVTFMRnh1WEhSY2RDaGpJQ29nY0hWeVpWc3hYU0FySUcxbktTQXFJREkxTlN4Y2JseDBYSFFvWXlBcUlIQjFjbVZiTWwwZ0t5QnRaeWtnS2lBeU5UVmNibHgwWFR0Y2JuMDdYRzVjYm1OdmJuWmxjblF1YUdObkxtaHpkaUE5SUdaMWJtTjBhVzl1SUNob1kyY3BJSHRjYmx4MGRtRnlJR01nUFNCb1kyZGJNVjBnTHlBeE1EQTdYRzVjZEhaaGNpQm5JRDBnYUdObld6SmRJQzhnTVRBd08xeHVYRzVjZEhaaGNpQjJJRDBnWXlBcklHY2dLaUFvTVM0d0lDMGdZeWs3WEc1Y2RIWmhjaUJtSUQwZ01EdGNibHh1WEhScFppQW9kaUErSURBdU1Da2dlMXh1WEhSY2RHWWdQU0JqSUM4Z2RqdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQmJhR05uV3pCZExDQm1JQ29nTVRBd0xDQjJJQ29nTVRBd1hUdGNibjA3WEc1Y2JtTnZiblpsY25RdWFHTm5MbWh6YkNBOUlHWjFibU4wYVc5dUlDaG9ZMmNwSUh0Y2JseDBkbUZ5SUdNZ1BTQm9ZMmRiTVYwZ0x5QXhNREE3WEc1Y2RIWmhjaUJuSUQwZ2FHTm5XekpkSUM4Z01UQXdPMXh1WEc1Y2RIWmhjaUJzSUQwZ1p5QXFJQ2d4TGpBZ0xTQmpLU0FySURBdU5TQXFJR003WEc1Y2RIWmhjaUJ6SUQwZ01EdGNibHh1WEhScFppQW9iQ0ErSURBdU1DQW1KaUJzSUR3Z01DNDFLU0I3WEc1Y2RGeDBjeUE5SUdNZ0x5QW9NaUFxSUd3cE8xeHVYSFI5SUdWc2MyVmNibHgwYVdZZ0tHd2dQajBnTUM0MUlDWW1JR3dnUENBeExqQXBJSHRjYmx4MFhIUnpJRDBnWXlBdklDZ3lJQ29nS0RFZ0xTQnNLU2s3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnVzJoaloxc3dYU3dnY3lBcUlERXdNQ3dnYkNBcUlERXdNRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWhqWnk1b2QySWdQU0JtZFc1amRHbHZiaUFvYUdObktTQjdYRzVjZEhaaGNpQmpJRDBnYUdObld6RmRJQzhnTVRBd08xeHVYSFIyWVhJZ1p5QTlJR2hqWjFzeVhTQXZJREV3TUR0Y2JseDBkbUZ5SUhZZ1BTQmpJQ3NnWnlBcUlDZ3hMakFnTFNCaktUdGNibHgwY21WMGRYSnVJRnRvWTJkYk1GMHNJQ2gySUMwZ1l5a2dLaUF4TURBc0lDZ3hJQzBnZGlrZ0tpQXhNREJkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzVvZDJJdWFHTm5JRDBnWm5WdVkzUnBiMjRnS0doM1lpa2dlMXh1WEhSMllYSWdkeUE5SUdoM1lsc3hYU0F2SURFd01EdGNibHgwZG1GeUlHSWdQU0JvZDJKYk1sMGdMeUF4TURBN1hHNWNkSFpoY2lCMklEMGdNU0F0SUdJN1hHNWNkSFpoY2lCaklEMGdkaUF0SUhjN1hHNWNkSFpoY2lCbklEMGdNRHRjYmx4dVhIUnBaaUFvWXlBOElERXBJSHRjYmx4MFhIUm5JRDBnS0hZZ0xTQmpLU0F2SUNneElDMGdZeWs3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnVzJoM1lsc3dYU3dnWXlBcUlERXdNQ3dnWnlBcUlERXdNRjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbUZ3Y0d4bExuSm5ZaUE5SUdaMWJtTjBhVzl1SUNoaGNIQnNaU2tnZTF4dVhIUnlaWFIxY200Z1d5aGhjSEJzWlZzd1hTQXZJRFkxTlRNMUtTQXFJREkxTlN3Z0tHRndjR3hsV3pGZElDOGdOalUxTXpVcElDb2dNalUxTENBb1lYQndiR1ZiTWwwZ0x5QTJOVFV6TlNrZ0tpQXlOVFZkTzF4dWZUdGNibHh1WTI5dWRtVnlkQzV5WjJJdVlYQndiR1VnUFNCbWRXNWpkR2x2YmlBb2NtZGlLU0I3WEc1Y2RISmxkSFZ5YmlCYktISm5ZbHN3WFNBdklESTFOU2tnS2lBMk5UVXpOU3dnS0hKbllsc3hYU0F2SURJMU5Ta2dLaUEyTlRVek5Td2dLSEpuWWxzeVhTQXZJREkxTlNrZ0tpQTJOVFV6TlYwN1hHNTlPMXh1WEc1amIyNTJaWEowTG1keVlYa3VjbWRpSUQwZ1puVnVZM1JwYjI0Z0tHRnlaM01wSUh0Y2JseDBjbVYwZFhKdUlGdGhjbWR6V3pCZElDOGdNVEF3SUNvZ01qVTFMQ0JoY21keld6QmRJQzhnTVRBd0lDb2dNalUxTENCaGNtZHpXekJkSUM4Z01UQXdJQ29nTWpVMVhUdGNibjA3WEc1Y2JtTnZiblpsY25RdVozSmhlUzVvYzJ3Z1BTQmpiMjUyWlhKMExtZHlZWGt1YUhOMklEMGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwY21WMGRYSnVJRnN3TENBd0xDQmhjbWR6V3pCZFhUdGNibjA3WEc1Y2JtTnZiblpsY25RdVozSmhlUzVvZDJJZ1BTQm1kVzVqZEdsdmJpQW9aM0poZVNrZ2UxeHVYSFJ5WlhSMWNtNGdXekFzSURFd01Dd2daM0poZVZzd1hWMDdYRzU5TzF4dVhHNWpiMjUyWlhKMExtZHlZWGt1WTIxNWF5QTlJR1oxYm1OMGFXOXVJQ2huY21GNUtTQjdYRzVjZEhKbGRIVnliaUJiTUN3Z01Dd2dNQ3dnWjNKaGVWc3dYVjA3WEc1OU8xeHVYRzVqYjI1MlpYSjBMbWR5WVhrdWJHRmlJRDBnWm5WdVkzUnBiMjRnS0dkeVlYa3BJSHRjYmx4MGNtVjBkWEp1SUZ0bmNtRjVXekJkTENBd0xDQXdYVHRjYm4wN1hHNWNibU52Ym5abGNuUXVaM0poZVM1b1pYZ2dQU0JtZFc1amRHbHZiaUFvWjNKaGVTa2dlMXh1WEhSMllYSWdkbUZzSUQwZ1RXRjBhQzV5YjNWdVpDaG5jbUY1V3pCZElDOGdNVEF3SUNvZ01qVTFLU0FtSURCNFJrWTdYRzVjZEhaaGNpQnBiblJsWjJWeUlEMGdLSFpoYkNBOFBDQXhOaWtnS3lBb2RtRnNJRHc4SURncElDc2dkbUZzTzF4dVhHNWNkSFpoY2lCemRISnBibWNnUFNCcGJuUmxaMlZ5TG5SdlUzUnlhVzVuS0RFMktTNTBiMVZ3Y0dWeVEyRnpaU2dwTzF4dVhIUnlaWFIxY200Z0p6QXdNREF3TUNjdWMzVmljM1J5YVc1bktITjBjbWx1Wnk1c1pXNW5kR2dwSUNzZ2MzUnlhVzVuTzF4dWZUdGNibHh1WTI5dWRtVnlkQzV5WjJJdVozSmhlU0E5SUdaMWJtTjBhVzl1SUNoeVoySXBJSHRjYmx4MGRtRnlJSFpoYkNBOUlDaHlaMkpiTUYwZ0t5QnlaMkpiTVYwZ0t5QnlaMkpiTWwwcElDOGdNenRjYmx4MGNtVjBkWEp1SUZ0MllXd2dMeUF5TlRVZ0tpQXhNREJkTzF4dWZUdGNiaUlzSW5aaGNpQmpiMjUyWlhKemFXOXVjeUE5SUhKbGNYVnBjbVVvSnk0dlkyOXVkbVZ5YzJsdmJuTW5LVHRjYm5aaGNpQnliM1YwWlNBOUlISmxjWFZwY21Vb0p5NHZjbTkxZEdVbktUdGNibHh1ZG1GeUlHTnZiblpsY25RZ1BTQjdmVHRjYmx4dWRtRnlJRzF2WkdWc2N5QTlJRTlpYW1WamRDNXJaWGx6S0dOdmJuWmxjbk5wYjI1ektUdGNibHh1Wm5WdVkzUnBiMjRnZDNKaGNGSmhkeWhtYmlrZ2UxeHVYSFIyWVhJZ2QzSmhjSEJsWkVadUlEMGdablZ1WTNScGIyNGdLR0Z5WjNNcElIdGNibHgwWEhScFppQW9ZWEpuY3lBOVBUMGdkVzVrWldacGJtVmtJSHg4SUdGeVozTWdQVDA5SUc1MWJHd3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQmhjbWR6TzF4dVhIUmNkSDFjYmx4dVhIUmNkR2xtSUNoaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvSUQ0Z01Ta2dlMXh1WEhSY2RGeDBZWEpuY3lBOUlFRnljbUY1TG5CeWIzUnZkSGx3WlM1emJHbGpaUzVqWVd4c0tHRnlaM1Z0Wlc1MGN5azdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUdadUtHRnlaM01wTzF4dVhIUjlPMXh1WEc1Y2RDOHZJSEJ5WlhObGNuWmxJQzVqYjI1MlpYSnphVzl1SUhCeWIzQmxjblI1SUdsbUlIUm9aWEpsSUdseklHOXVaVnh1WEhScFppQW9KMk52Ym5abGNuTnBiMjRuSUdsdUlHWnVLU0I3WEc1Y2RGeDBkM0poY0hCbFpFWnVMbU52Ym5abGNuTnBiMjRnUFNCbWJpNWpiMjUyWlhKemFXOXVPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJSGR5WVhCd1pXUkdianRjYm4xY2JseHVablZ1WTNScGIyNGdkM0poY0ZKdmRXNWtaV1FvWm00cElIdGNibHgwZG1GeUlIZHlZWEJ3WldSR2JpQTlJR1oxYm1OMGFXOXVJQ2hoY21kektTQjdYRzVjZEZ4MGFXWWdLR0Z5WjNNZ1BUMDlJSFZ1WkdWbWFXNWxaQ0I4ZkNCaGNtZHpJRDA5UFNCdWRXeHNLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdZWEpuY3p0Y2JseDBYSFI5WEc1Y2JseDBYSFJwWmlBb1lYSm5kVzFsYm5SekxteGxibWQwYUNBK0lERXBJSHRjYmx4MFhIUmNkR0Z5WjNNZ1BTQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWMyeHBZMlV1WTJGc2JDaGhjbWQxYldWdWRITXBPMXh1WEhSY2RIMWNibHh1WEhSY2RIWmhjaUJ5WlhOMWJIUWdQU0JtYmloaGNtZHpLVHRjYmx4dVhIUmNkQzh2SUhkbEozSmxJR0Z6YzNWdGFXNW5JSFJvWlNCeVpYTjFiSFFnYVhNZ1lXNGdZWEp5WVhrZ2FHVnlaUzVjYmx4MFhIUXZMeUJ6WldVZ2JtOTBhV05sSUdsdUlHTnZiblpsY25OcGIyNXpMbXB6T3lCa2IyNG5kQ0IxYzJVZ1ltOTRJSFI1Y0dWelhHNWNkRngwTHk4Z2FXNGdZMjl1ZG1WeWMybHZiaUJtZFc1amRHbHZibk11WEc1Y2RGeDBhV1lnS0hSNWNHVnZaaUJ5WlhOMWJIUWdQVDA5SUNkdlltcGxZM1FuS1NCN1hHNWNkRngwWEhSbWIzSWdLSFpoY2lCc1pXNGdQU0J5WlhOMWJIUXViR1Z1WjNSb0xDQnBJRDBnTURzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3WEc1Y2RGeDBYSFJjZEhKbGMzVnNkRnRwWFNBOUlFMWhkR2d1Y205MWJtUW9jbVZ6ZFd4MFcybGRLVHRjYmx4MFhIUmNkSDFjYmx4MFhIUjlYRzVjYmx4MFhIUnlaWFIxY200Z2NtVnpkV3gwTzF4dVhIUjlPMXh1WEc1Y2RDOHZJSEJ5WlhObGNuWmxJQzVqYjI1MlpYSnphVzl1SUhCeWIzQmxjblI1SUdsbUlIUm9aWEpsSUdseklHOXVaVnh1WEhScFppQW9KMk52Ym5abGNuTnBiMjRuSUdsdUlHWnVLU0I3WEc1Y2RGeDBkM0poY0hCbFpFWnVMbU52Ym5abGNuTnBiMjRnUFNCbWJpNWpiMjUyWlhKemFXOXVPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJSGR5WVhCd1pXUkdianRjYm4xY2JseHViVzlrWld4ekxtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tHWnliMjFOYjJSbGJDa2dlMXh1WEhSamIyNTJaWEowVzJaeWIyMU5iMlJsYkYwZ1BTQjdmVHRjYmx4dVhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWTI5dWRtVnlkRnRtY205dFRXOWtaV3hkTENBblkyaGhibTVsYkhNbkxDQjdkbUZzZFdVNklHTnZiblpsY25OcGIyNXpXMlp5YjIxTmIyUmxiRjB1WTJoaGJtNWxiSE45S1R0Y2JseDBUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dOdmJuWmxjblJiWm5KdmJVMXZaR1ZzWFN3Z0oyeGhZbVZzY3ljc0lIdDJZV3gxWlRvZ1kyOXVkbVZ5YzJsdmJuTmJabkp2YlUxdlpHVnNYUzVzWVdKbGJITjlLVHRjYmx4dVhIUjJZWElnY205MWRHVnpJRDBnY205MWRHVW9abkp2YlUxdlpHVnNLVHRjYmx4MGRtRnlJSEp2ZFhSbFRXOWtaV3h6SUQwZ1QySnFaV04wTG10bGVYTW9jbTkxZEdWektUdGNibHh1WEhSeWIzVjBaVTF2WkdWc2N5NW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaDBiMDF2WkdWc0tTQjdYRzVjZEZ4MGRtRnlJR1p1SUQwZ2NtOTFkR1Z6VzNSdlRXOWtaV3hkTzF4dVhHNWNkRngwWTI5dWRtVnlkRnRtY205dFRXOWtaV3hkVzNSdlRXOWtaV3hkSUQwZ2QzSmhjRkp2ZFc1a1pXUW9abTRwTzF4dVhIUmNkR052Ym5abGNuUmJabkp2YlUxdlpHVnNYVnQwYjAxdlpHVnNYUzV5WVhjZ1BTQjNjbUZ3VW1GM0tHWnVLVHRjYmx4MGZTazdYRzU5S1R0Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmpiMjUyWlhKME8xeHVJaXdpZG1GeUlHTnZiblpsY25OcGIyNXpJRDBnY21WeGRXbHlaU2duTGk5amIyNTJaWEp6YVc5dWN5Y3BPMXh1WEc0dktseHVYSFIwYUdseklHWjFibU4wYVc5dUlISnZkWFJsY3lCaElHMXZaR1ZzSUhSdklHRnNiQ0J2ZEdobGNpQnRiMlJsYkhNdVhHNWNibHgwWVd4c0lHWjFibU4wYVc5dWN5QjBhR0YwSUdGeVpTQnliM1YwWldRZ2FHRjJaU0JoSUhCeWIzQmxjblI1SUdBdVkyOXVkbVZ5YzJsdmJtQWdZWFIwWVdOb1pXUmNibHgwZEc4Z2RHaGxJSEpsZEhWeWJtVmtJSE41Ym5Sb1pYUnBZeUJtZFc1amRHbHZiaTRnVkdocGN5QndjbTl3WlhKMGVTQnBjeUJoYmlCaGNuSmhlVnh1WEhSdlppQnpkSEpwYm1kekxDQmxZV05vSUhkcGRHZ2dkR2hsSUhOMFpYQnpJR2x1SUdKbGRIZGxaVzRnZEdobElDZG1jbTl0SnlCaGJtUWdKM1J2SjF4dVhIUmpiMnh2Y2lCdGIyUmxiSE1nS0dsdVkyeDFjMmwyWlNrdVhHNWNibHgwWTI5dWRtVnljMmx2Ym5NZ2RHaGhkQ0JoY21VZ2JtOTBJSEJ2YzNOcFlteGxJSE5wYlhCc2VTQmhjbVVnYm05MElHbHVZMngxWkdWa0xseHVLaTljYmx4dVpuVnVZM1JwYjI0Z1luVnBiR1JIY21Gd2FDZ3BJSHRjYmx4MGRtRnlJR2R5WVhCb0lEMGdlMzA3WEc1Y2RDOHZJR2gwZEhCek9pOHZhbk53WlhKbUxtTnZiUzl2WW1wbFkzUXRhMlY1Y3kxMmN5MW1iM0l0YVc0dGQybDBhQzFqYkc5emRYSmxMek5jYmx4MGRtRnlJRzF2WkdWc2N5QTlJRTlpYW1WamRDNXJaWGx6S0dOdmJuWmxjbk5wYjI1ektUdGNibHh1WEhSbWIzSWdLSFpoY2lCc1pXNGdQU0J0YjJSbGJITXViR1Z1WjNSb0xDQnBJRDBnTURzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3WEc1Y2RGeDBaM0poY0doYmJXOWtaV3h6VzJsZFhTQTlJSHRjYmx4MFhIUmNkQzh2SUdoMGRIQTZMeTlxYzNCbGNtWXVZMjl0THpFdGRuTXRhVzVtYVc1cGRIbGNibHgwWEhSY2RDOHZJRzFwWTNKdkxXOXdkQ3dnWW5WMElIUm9hWE1nYVhNZ2MybHRjR3hsTGx4dVhIUmNkRngwWkdsemRHRnVZMlU2SUMweExGeHVYSFJjZEZ4MGNHRnlaVzUwT2lCdWRXeHNYRzVjZEZ4MGZUdGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQm5jbUZ3YUR0Y2JuMWNibHh1THk4Z2FIUjBjSE02THk5bGJpNTNhV3RwY0dWa2FXRXViM0puTDNkcGEya3ZRbkpsWVdSMGFDMW1hWEp6ZEY5elpXRnlZMmhjYm1aMWJtTjBhVzl1SUdSbGNtbDJaVUpHVXlobWNtOXRUVzlrWld3cElIdGNibHgwZG1GeUlHZHlZWEJvSUQwZ1luVnBiR1JIY21Gd2FDZ3BPMXh1WEhSMllYSWdjWFZsZFdVZ1BTQmJabkp2YlUxdlpHVnNYVHNnTHk4Z2RXNXphR2xtZENBdFBpQnhkV1YxWlNBdFBpQndiM0JjYmx4dVhIUm5jbUZ3YUZ0bWNtOXRUVzlrWld4ZExtUnBjM1JoYm1ObElEMGdNRHRjYmx4dVhIUjNhR2xzWlNBb2NYVmxkV1V1YkdWdVozUm9LU0I3WEc1Y2RGeDBkbUZ5SUdOMWNuSmxiblFnUFNCeGRXVjFaUzV3YjNBb0tUdGNibHgwWEhSMllYSWdZV1JxWVdObGJuUnpJRDBnVDJKcVpXTjBMbXRsZVhNb1kyOXVkbVZ5YzJsdmJuTmJZM1Z5Y21WdWRGMHBPMXh1WEc1Y2RGeDBabTl5SUNoMllYSWdiR1Z1SUQwZ1lXUnFZV05sYm5SekxteGxibWQwYUN3Z2FTQTlJREE3SUdrZ1BDQnNaVzQ3SUdrckt5a2dlMXh1WEhSY2RGeDBkbUZ5SUdGa2FtRmpaVzUwSUQwZ1lXUnFZV05sYm5SelcybGRPMXh1WEhSY2RGeDBkbUZ5SUc1dlpHVWdQU0JuY21Gd2FGdGhaR3BoWTJWdWRGMDdYRzVjYmx4MFhIUmNkR2xtSUNodWIyUmxMbVJwYzNSaGJtTmxJRDA5UFNBdE1Ta2dlMXh1WEhSY2RGeDBYSFJ1YjJSbExtUnBjM1JoYm1ObElEMGdaM0poY0doYlkzVnljbVZ1ZEYwdVpHbHpkR0Z1WTJVZ0t5QXhPMXh1WEhSY2RGeDBYSFJ1YjJSbExuQmhjbVZ1ZENBOUlHTjFjbkpsYm5RN1hHNWNkRngwWEhSY2RIRjFaWFZsTG5WdWMyaHBablFvWVdScVlXTmxiblFwTzF4dVhIUmNkRngwZlZ4dVhIUmNkSDFjYmx4MGZWeHVYRzVjZEhKbGRIVnliaUJuY21Gd2FEdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2JHbHVheWhtY205dExDQjBieWtnZTF4dVhIUnlaWFIxY200Z1puVnVZM1JwYjI0Z0tHRnlaM01wSUh0Y2JseDBYSFJ5WlhSMWNtNGdkRzhvWm5KdmJTaGhjbWR6S1NrN1hHNWNkSDA3WEc1OVhHNWNibVoxYm1OMGFXOXVJSGR5WVhCRGIyNTJaWEp6YVc5dUtIUnZUVzlrWld3c0lHZHlZWEJvS1NCN1hHNWNkSFpoY2lCd1lYUm9JRDBnVzJkeVlYQm9XM1J2VFc5a1pXeGRMbkJoY21WdWRDd2dkRzlOYjJSbGJGMDdYRzVjZEhaaGNpQm1iaUE5SUdOdmJuWmxjbk5wYjI1elcyZHlZWEJvVzNSdlRXOWtaV3hkTG5CaGNtVnVkRjFiZEc5TmIyUmxiRjA3WEc1Y2JseDBkbUZ5SUdOMWNpQTlJR2R5WVhCb1czUnZUVzlrWld4ZExuQmhjbVZ1ZER0Y2JseDBkMmhwYkdVZ0tHZHlZWEJvVzJOMWNsMHVjR0Z5Wlc1MEtTQjdYRzVjZEZ4MGNHRjBhQzUxYm5Ob2FXWjBLR2R5WVhCb1cyTjFjbDB1Y0dGeVpXNTBLVHRjYmx4MFhIUm1iaUE5SUd4cGJtc29ZMjl1ZG1WeWMybHZibk5iWjNKaGNHaGJZM1Z5WFM1d1lYSmxiblJkVzJOMWNsMHNJR1p1S1R0Y2JseDBYSFJqZFhJZ1BTQm5jbUZ3YUZ0amRYSmRMbkJoY21WdWREdGNibHgwZlZ4dVhHNWNkR1p1TG1OdmJuWmxjbk5wYjI0Z1BTQndZWFJvTzF4dVhIUnlaWFIxY200Z1ptNDdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z0tHWnliMjFOYjJSbGJDa2dlMXh1WEhSMllYSWdaM0poY0dnZ1BTQmtaWEpwZG1WQ1JsTW9abkp2YlUxdlpHVnNLVHRjYmx4MGRtRnlJR052Ym5abGNuTnBiMjRnUFNCN2ZUdGNibHh1WEhSMllYSWdiVzlrWld4eklEMGdUMkpxWldOMExtdGxlWE1vWjNKaGNHZ3BPMXh1WEhSbWIzSWdLSFpoY2lCc1pXNGdQU0J0YjJSbGJITXViR1Z1WjNSb0xDQnBJRDBnTURzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3WEc1Y2RGeDBkbUZ5SUhSdlRXOWtaV3dnUFNCdGIyUmxiSE5iYVYwN1hHNWNkRngwZG1GeUlHNXZaR1VnUFNCbmNtRndhRnQwYjAxdlpHVnNYVHRjYmx4dVhIUmNkR2xtSUNodWIyUmxMbkJoY21WdWRDQTlQVDBnYm5Wc2JDa2dlMXh1WEhSY2RGeDBMeThnYm04Z2NHOXpjMmxpYkdVZ1kyOXVkbVZ5YzJsdmJpd2diM0lnZEdocGN5QnViMlJsSUdseklIUm9aU0J6YjNWeVkyVWdiVzlrWld3dVhHNWNkRngwWEhSamIyNTBhVzUxWlR0Y2JseDBYSFI5WEc1Y2JseDBYSFJqYjI1MlpYSnphVzl1VzNSdlRXOWtaV3hkSUQwZ2QzSmhjRU52Ym5abGNuTnBiMjRvZEc5TmIyUmxiQ3dnWjNKaGNHZ3BPMXh1WEhSOVhHNWNibHgwY21WMGRYSnVJR052Ym5abGNuTnBiMjQ3WEc1OU8xeHVYRzRpTENJbmRYTmxJSE4wY21samRDZGNjbHh1WEhKY2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2UxeHlYRzVjZEZ3aVlXeHBZMlZpYkhWbFhDSTZJRnN5TkRBc0lESTBPQ3dnTWpVMVhTeGNjbHh1WEhSY0ltRnVkR2x4ZFdWM2FHbDBaVndpT2lCYk1qVXdMQ0F5TXpVc0lESXhOVjBzWEhKY2JseDBYQ0poY1hWaFhDSTZJRnN3TENBeU5UVXNJREkxTlYwc1hISmNibHgwWENKaGNYVmhiV0Z5YVc1bFhDSTZJRnN4TWpjc0lESTFOU3dnTWpFeVhTeGNjbHh1WEhSY0ltRjZkWEpsWENJNklGc3lOREFzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW1KbGFXZGxYQ0k2SUZzeU5EVXNJREkwTlN3Z01qSXdYU3hjY2x4dVhIUmNJbUpwYzNGMVpWd2lPaUJiTWpVMUxDQXlNamdzSURFNU5sMHNYSEpjYmx4MFhDSmliR0ZqYTF3aU9pQmJNQ3dnTUN3Z01GMHNYSEpjYmx4MFhDSmliR0Z1WTJobFpHRnNiVzl1WkZ3aU9pQmJNalUxTENBeU16VXNJREl3TlYwc1hISmNibHgwWENKaWJIVmxYQ0k2SUZzd0xDQXdMQ0F5TlRWZExGeHlYRzVjZEZ3aVlteDFaWFpwYjJ4bGRGd2lPaUJiTVRNNExDQTBNeXdnTWpJMlhTeGNjbHh1WEhSY0ltSnliM2R1WENJNklGc3hOalVzSURReUxDQTBNbDBzWEhKY2JseDBYQ0ppZFhKc2VYZHZiMlJjSWpvZ1d6SXlNaXdnTVRnMExDQXhNelZkTEZ4eVhHNWNkRndpWTJGa1pYUmliSFZsWENJNklGczVOU3dnTVRVNExDQXhOakJkTEZ4eVhHNWNkRndpWTJoaGNuUnlaWFZ6WlZ3aU9pQmJNVEkzTENBeU5UVXNJREJkTEZ4eVhHNWNkRndpWTJodlkyOXNZWFJsWENJNklGc3lNVEFzSURFd05Td2dNekJkTEZ4eVhHNWNkRndpWTI5eVlXeGNJam9nV3pJMU5Td2dNVEkzTENBNE1GMHNYSEpjYmx4MFhDSmpiM0p1Wm14dmQyVnlZbXgxWlZ3aU9pQmJNVEF3TENBeE5Ea3NJREl6TjEwc1hISmNibHgwWENKamIzSnVjMmxzYTF3aU9pQmJNalUxTENBeU5EZ3NJREl5TUYwc1hISmNibHgwWENKamNtbHRjMjl1WENJNklGc3lNakFzSURJd0xDQTJNRjBzWEhKY2JseDBYQ0pqZVdGdVhDSTZJRnN3TENBeU5UVXNJREkxTlYwc1hISmNibHgwWENKa1lYSnJZbXgxWlZ3aU9pQmJNQ3dnTUN3Z01UTTVYU3hjY2x4dVhIUmNJbVJoY210amVXRnVYQ0k2SUZzd0xDQXhNemtzSURFek9WMHNYSEpjYmx4MFhDSmtZWEpyWjI5c1pHVnVjbTlrWENJNklGc3hPRFFzSURFek5Dd2dNVEZkTEZ4eVhHNWNkRndpWkdGeWEyZHlZWGxjSWpvZ1d6RTJPU3dnTVRZNUxDQXhOamxkTEZ4eVhHNWNkRndpWkdGeWEyZHlaV1Z1WENJNklGc3dMQ0F4TURBc0lEQmRMRnh5WEc1Y2RGd2laR0Z5YTJkeVpYbGNJam9nV3pFMk9Td2dNVFk1TENBeE5qbGRMRnh5WEc1Y2RGd2laR0Z5YTJ0b1lXdHBYQ0k2SUZzeE9Ea3NJREU0TXl3Z01UQTNYU3hjY2x4dVhIUmNJbVJoY210dFlXZGxiblJoWENJNklGc3hNemtzSURBc0lERXpPVjBzWEhKY2JseDBYQ0prWVhKcmIyeHBkbVZuY21WbGJsd2lPaUJiT0RVc0lERXdOeXdnTkRkZExGeHlYRzVjZEZ3aVpHRnlhMjl5WVc1blpWd2lPaUJiTWpVMUxDQXhOREFzSURCZExGeHlYRzVjZEZ3aVpHRnlhMjl5WTJocFpGd2lPaUJiTVRVekxDQTFNQ3dnTWpBMFhTeGNjbHh1WEhSY0ltUmhjbXR5WldSY0lqb2dXekV6T1N3Z01Dd2dNRjBzWEhKY2JseDBYQ0prWVhKcmMyRnNiVzl1WENJNklGc3lNek1zSURFMU1Dd2dNVEl5WFN4Y2NseHVYSFJjSW1SaGNtdHpaV0ZuY21WbGJsd2lPaUJiTVRRekxDQXhPRGdzSURFME0xMHNYSEpjYmx4MFhDSmtZWEpyYzJ4aGRHVmliSFZsWENJNklGczNNaXdnTmpFc0lERXpPVjBzWEhKY2JseDBYQ0prWVhKcmMyeGhkR1ZuY21GNVhDSTZJRnMwTnl3Z056a3NJRGM1WFN4Y2NseHVYSFJjSW1SaGNtdHpiR0YwWldkeVpYbGNJam9nV3pRM0xDQTNPU3dnTnpsZExGeHlYRzVjZEZ3aVpHRnlhM1IxY25GMWIybHpaVndpT2lCYk1Dd2dNakEyTENBeU1EbGRMRnh5WEc1Y2RGd2laR0Z5YTNacGIyeGxkRndpT2lCYk1UUTRMQ0F3TENBeU1URmRMRnh5WEc1Y2RGd2laR1ZsY0hCcGJtdGNJam9nV3pJMU5Td2dNakFzSURFME4xMHNYSEpjYmx4MFhDSmtaV1Z3YzJ0NVlteDFaVndpT2lCYk1Dd2dNVGt4TENBeU5UVmRMRnh5WEc1Y2RGd2laR2x0WjNKaGVWd2lPaUJiTVRBMUxDQXhNRFVzSURFd05WMHNYSEpjYmx4MFhDSmthVzFuY21WNVhDSTZJRnN4TURVc0lERXdOU3dnTVRBMVhTeGNjbHh1WEhSY0ltUnZaR2RsY21Kc2RXVmNJam9nV3pNd0xDQXhORFFzSURJMU5WMHNYSEpjYmx4MFhDSm1hWEpsWW5KcFkydGNJam9nV3pFM09Dd2dNelFzSURNMFhTeGNjbHh1WEhSY0ltWnNiM0poYkhkb2FYUmxYQ0k2SUZzeU5UVXNJREkxTUN3Z01qUXdYU3hjY2x4dVhIUmNJbVp2Y21WemRHZHlaV1Z1WENJNklGc3pOQ3dnTVRNNUxDQXpORjBzWEhKY2JseDBYQ0ptZFdOb2MybGhYQ0k2SUZzeU5UVXNJREFzSURJMU5WMHNYSEpjYmx4MFhDSm5ZV2x1YzJKdmNtOWNJam9nV3pJeU1Dd2dNakl3TENBeU1qQmRMRnh5WEc1Y2RGd2laMmh2YzNSM2FHbDBaVndpT2lCYk1qUTRMQ0F5TkRnc0lESTFOVjBzWEhKY2JseDBYQ0puYjJ4a1hDSTZJRnN5TlRVc0lESXhOU3dnTUYwc1hISmNibHgwWENKbmIyeGtaVzV5YjJSY0lqb2dXekl4T0N3Z01UWTFMQ0F6TWwwc1hISmNibHgwWENKbmNtRjVYQ0k2SUZzeE1qZ3NJREV5T0N3Z01USTRYU3hjY2x4dVhIUmNJbWR5WldWdVhDSTZJRnN3TENBeE1qZ3NJREJkTEZ4eVhHNWNkRndpWjNKbFpXNTVaV3hzYjNkY0lqb2dXekUzTXl3Z01qVTFMQ0EwTjEwc1hISmNibHgwWENKbmNtVjVYQ0k2SUZzeE1qZ3NJREV5T0N3Z01USTRYU3hjY2x4dVhIUmNJbWh2Ym1WNVpHVjNYQ0k2SUZzeU5EQXNJREkxTlN3Z01qUXdYU3hjY2x4dVhIUmNJbWh2ZEhCcGJtdGNJam9nV3pJMU5Td2dNVEExTENBeE9EQmRMRnh5WEc1Y2RGd2lhVzVrYVdGdWNtVmtYQ0k2SUZzeU1EVXNJRGt5TENBNU1sMHNYSEpjYmx4MFhDSnBibVJwWjI5Y0lqb2dXemMxTENBd0xDQXhNekJkTEZ4eVhHNWNkRndpYVhadmNubGNJam9nV3pJMU5Td2dNalUxTENBeU5EQmRMRnh5WEc1Y2RGd2lhMmhoYTJsY0lqb2dXekkwTUN3Z01qTXdMQ0F4TkRCZExGeHlYRzVjZEZ3aWJHRjJaVzVrWlhKY0lqb2dXekl6TUN3Z01qTXdMQ0F5TlRCZExGeHlYRzVjZEZ3aWJHRjJaVzVrWlhKaWJIVnphRndpT2lCYk1qVTFMQ0F5TkRBc0lESTBOVjBzWEhKY2JseDBYQ0pzWVhkdVozSmxaVzVjSWpvZ1d6RXlOQ3dnTWpVeUxDQXdYU3hjY2x4dVhIUmNJbXhsYlc5dVkyaHBabVp2Ymx3aU9pQmJNalUxTENBeU5UQXNJREl3TlYwc1hISmNibHgwWENKc2FXZG9kR0pzZFdWY0lqb2dXekUzTXl3Z01qRTJMQ0F5TXpCZExGeHlYRzVjZEZ3aWJHbG5hSFJqYjNKaGJGd2lPaUJiTWpRd0xDQXhNamdzSURFeU9GMHNYSEpjYmx4MFhDSnNhV2RvZEdONVlXNWNJam9nV3pJeU5Dd2dNalUxTENBeU5UVmRMRnh5WEc1Y2RGd2liR2xuYUhSbmIyeGtaVzV5YjJSNVpXeHNiM2RjSWpvZ1d6STFNQ3dnTWpVd0xDQXlNVEJkTEZ4eVhHNWNkRndpYkdsbmFIUm5jbUY1WENJNklGc3lNVEVzSURJeE1Td2dNakV4WFN4Y2NseHVYSFJjSW14cFoyaDBaM0psWlc1Y0lqb2dXekUwTkN3Z01qTTRMQ0F4TkRSZExGeHlYRzVjZEZ3aWJHbG5hSFJuY21WNVhDSTZJRnN5TVRFc0lESXhNU3dnTWpFeFhTeGNjbHh1WEhSY0lteHBaMmgwY0dsdWExd2lPaUJiTWpVMUxDQXhPRElzSURFNU0xMHNYSEpjYmx4MFhDSnNhV2RvZEhOaGJHMXZibHdpT2lCYk1qVTFMQ0F4TmpBc0lERXlNbDBzWEhKY2JseDBYQ0pzYVdkb2RITmxZV2R5WldWdVhDSTZJRnN6TWl3Z01UYzRMQ0F4TnpCZExGeHlYRzVjZEZ3aWJHbG5hSFJ6YTNsaWJIVmxYQ0k2SUZzeE16VXNJREl3Tml3Z01qVXdYU3hjY2x4dVhIUmNJbXhwWjJoMGMyeGhkR1ZuY21GNVhDSTZJRnN4TVRrc0lERXpOaXdnTVRVelhTeGNjbHh1WEhSY0lteHBaMmgwYzJ4aGRHVm5jbVY1WENJNklGc3hNVGtzSURFek5pd2dNVFV6WFN4Y2NseHVYSFJjSW14cFoyaDBjM1JsWld4aWJIVmxYQ0k2SUZzeE56WXNJREU1Tml3Z01qSXlYU3hjY2x4dVhIUmNJbXhwWjJoMGVXVnNiRzkzWENJNklGc3lOVFVzSURJMU5Td2dNakkwWFN4Y2NseHVYSFJjSW14cGJXVmNJam9nV3pBc0lESTFOU3dnTUYwc1hISmNibHgwWENKc2FXMWxaM0psWlc1Y0lqb2dXelV3TENBeU1EVXNJRFV3WFN4Y2NseHVYSFJjSW14cGJtVnVYQ0k2SUZzeU5UQXNJREkwTUN3Z01qTXdYU3hjY2x4dVhIUmNJbTFoWjJWdWRHRmNJam9nV3pJMU5Td2dNQ3dnTWpVMVhTeGNjbHh1WEhSY0ltMWhjbTl2Ymx3aU9pQmJNVEk0TENBd0xDQXdYU3hjY2x4dVhIUmNJbTFsWkdsMWJXRnhkV0Z0WVhKcGJtVmNJam9nV3pFd01pd2dNakExTENBeE56QmRMRnh5WEc1Y2RGd2liV1ZrYVhWdFlteDFaVndpT2lCYk1Dd2dNQ3dnTWpBMVhTeGNjbHh1WEhSY0ltMWxaR2wxYlc5eVkyaHBaRndpT2lCYk1UZzJMQ0E0TlN3Z01qRXhYU3hjY2x4dVhIUmNJbTFsWkdsMWJYQjFjbkJzWlZ3aU9pQmJNVFEzTENBeE1USXNJREl4T1Ywc1hISmNibHgwWENKdFpXUnBkVzF6WldGbmNtVmxibHdpT2lCYk5qQXNJREUzT1N3Z01URXpYU3hjY2x4dVhIUmNJbTFsWkdsMWJYTnNZWFJsWW14MVpWd2lPaUJiTVRJekxDQXhNRFFzSURJek9GMHNYSEpjYmx4MFhDSnRaV1JwZFcxemNISnBibWRuY21WbGJsd2lPaUJiTUN3Z01qVXdMQ0F4TlRSZExGeHlYRzVjZEZ3aWJXVmthWFZ0ZEhWeWNYVnZhWE5sWENJNklGczNNaXdnTWpBNUxDQXlNRFJkTEZ4eVhHNWNkRndpYldWa2FYVnRkbWx2YkdWMGNtVmtYQ0k2SUZzeE9Ua3NJREl4TENBeE16TmRMRnh5WEc1Y2RGd2liV2xrYm1sbmFIUmliSFZsWENJNklGc3lOU3dnTWpVc0lERXhNbDBzWEhKY2JseDBYQ0p0YVc1MFkzSmxZVzFjSWpvZ1d6STBOU3dnTWpVMUxDQXlOVEJkTEZ4eVhHNWNkRndpYldsemRIbHliM05sWENJNklGc3lOVFVzSURJeU9Dd2dNakkxWFN4Y2NseHVYSFJjSW0xdlkyTmhjMmx1WENJNklGc3lOVFVzSURJeU9Dd2dNVGd4WFN4Y2NseHVYSFJjSW01aGRtRnFiM2RvYVhSbFhDSTZJRnN5TlRVc0lESXlNaXdnTVRjelhTeGNjbHh1WEhSY0ltNWhkbmxjSWpvZ1d6QXNJREFzSURFeU9GMHNYSEpjYmx4MFhDSnZiR1JzWVdObFhDSTZJRnN5TlRNc0lESTBOU3dnTWpNd1hTeGNjbHh1WEhSY0ltOXNhWFpsWENJNklGc3hNamdzSURFeU9Dd2dNRjBzWEhKY2JseDBYQ0p2YkdsMlpXUnlZV0pjSWpvZ1d6RXdOeXdnTVRReUxDQXpOVjBzWEhKY2JseDBYQ0p2Y21GdVoyVmNJam9nV3pJMU5Td2dNVFkxTENBd1hTeGNjbHh1WEhSY0ltOXlZVzVuWlhKbFpGd2lPaUJiTWpVMUxDQTJPU3dnTUYwc1hISmNibHgwWENKdmNtTm9hV1JjSWpvZ1d6SXhPQ3dnTVRFeUxDQXlNVFJkTEZ4eVhHNWNkRndpY0dGc1pXZHZiR1JsYm5KdlpGd2lPaUJiTWpNNExDQXlNeklzSURFM01GMHNYSEpjYmx4MFhDSndZV3hsWjNKbFpXNWNJam9nV3pFMU1pd2dNalV4TENBeE5USmRMRnh5WEc1Y2RGd2ljR0ZzWlhSMWNuRjFiMmx6WlZ3aU9pQmJNVGMxTENBeU16Z3NJREl6T0Ywc1hISmNibHgwWENKd1lXeGxkbWx2YkdWMGNtVmtYQ0k2SUZzeU1Ua3NJREV4TWl3Z01UUTNYU3hjY2x4dVhIUmNJbkJoY0dGNVlYZG9hWEJjSWpvZ1d6STFOU3dnTWpNNUxDQXlNVE5kTEZ4eVhHNWNkRndpY0dWaFkyaHdkV1ptWENJNklGc3lOVFVzSURJeE9Dd2dNVGcxWFN4Y2NseHVYSFJjSW5CbGNuVmNJam9nV3pJd05Td2dNVE16TENBMk0xMHNYSEpjYmx4MFhDSndhVzVyWENJNklGc3lOVFVzSURFNU1pd2dNakF6WFN4Y2NseHVYSFJjSW5Cc2RXMWNJam9nV3pJeU1Td2dNVFl3TENBeU1qRmRMRnh5WEc1Y2RGd2ljRzkzWkdWeVlteDFaVndpT2lCYk1UYzJMQ0F5TWpRc0lESXpNRjBzWEhKY2JseDBYQ0p3ZFhKd2JHVmNJam9nV3pFeU9Dd2dNQ3dnTVRJNFhTeGNjbHh1WEhSY0luSmxZbVZqWTJGd2RYSndiR1ZjSWpvZ1d6RXdNaXdnTlRFc0lERTFNMTBzWEhKY2JseDBYQ0p5WldSY0lqb2dXekkxTlN3Z01Dd2dNRjBzWEhKY2JseDBYQ0p5YjNONVluSnZkMjVjSWpvZ1d6RTRPQ3dnTVRRekxDQXhORE5kTEZ4eVhHNWNkRndpY205NVlXeGliSFZsWENJNklGczJOU3dnTVRBMUxDQXlNalZkTEZ4eVhHNWNkRndpYzJGa1pHeGxZbkp2ZDI1Y0lqb2dXekV6T1N3Z05qa3NJREU1WFN4Y2NseHVYSFJjSW5OaGJHMXZibHdpT2lCYk1qVXdMQ0F4TWpnc0lERXhORjBzWEhKY2JseDBYQ0p6WVc1a2VXSnliM2R1WENJNklGc3lORFFzSURFMk5Dd2dPVFpkTEZ4eVhHNWNkRndpYzJWaFozSmxaVzVjSWpvZ1d6UTJMQ0F4TXprc0lEZzNYU3hjY2x4dVhIUmNJbk5sWVhOb1pXeHNYQ0k2SUZzeU5UVXNJREkwTlN3Z01qTTRYU3hjY2x4dVhIUmNJbk5wWlc1dVlWd2lPaUJiTVRZd0xDQTRNaXdnTkRWZExGeHlYRzVjZEZ3aWMybHNkbVZ5WENJNklGc3hPVElzSURFNU1pd2dNVGt5WFN4Y2NseHVYSFJjSW5OcmVXSnNkV1ZjSWpvZ1d6RXpOU3dnTWpBMkxDQXlNelZkTEZ4eVhHNWNkRndpYzJ4aGRHVmliSFZsWENJNklGc3hNRFlzSURrd0xDQXlNRFZkTEZ4eVhHNWNkRndpYzJ4aGRHVm5jbUY1WENJNklGc3hNVElzSURFeU9Dd2dNVFEwWFN4Y2NseHVYSFJjSW5Oc1lYUmxaM0psZVZ3aU9pQmJNVEV5TENBeE1qZ3NJREUwTkYwc1hISmNibHgwWENKemJtOTNYQ0k2SUZzeU5UVXNJREkxTUN3Z01qVXdYU3hjY2x4dVhIUmNJbk53Y21sdVoyZHlaV1Z1WENJNklGc3dMQ0F5TlRVc0lERXlOMTBzWEhKY2JseDBYQ0p6ZEdWbGJHSnNkV1ZjSWpvZ1d6Y3dMQ0F4TXpBc0lERTRNRjBzWEhKY2JseDBYQ0owWVc1Y0lqb2dXekl4TUN3Z01UZ3dMQ0F4TkRCZExGeHlYRzVjZEZ3aWRHVmhiRndpT2lCYk1Dd2dNVEk0TENBeE1qaGRMRnh5WEc1Y2RGd2lkR2hwYzNSc1pWd2lPaUJiTWpFMkxDQXhPVEVzSURJeE5sMHNYSEpjYmx4MFhDSjBiMjFoZEc5Y0lqb2dXekkxTlN3Z09Ua3NJRGN4WFN4Y2NseHVYSFJjSW5SMWNuRjFiMmx6WlZ3aU9pQmJOalFzSURJeU5Dd2dNakE0WFN4Y2NseHVYSFJjSW5acGIyeGxkRndpT2lCYk1qTTRMQ0F4TXpBc0lESXpPRjBzWEhKY2JseDBYQ0ozYUdWaGRGd2lPaUJiTWpRMUxDQXlNaklzSURFM09WMHNYSEpjYmx4MFhDSjNhR2wwWlZ3aU9pQmJNalUxTENBeU5UVXNJREkxTlYwc1hISmNibHgwWENKM2FHbDBaWE50YjJ0bFhDSTZJRnN5TkRVc0lESTBOU3dnTWpRMVhTeGNjbHh1WEhSY0lubGxiR3h2ZDF3aU9pQmJNalUxTENBeU5UVXNJREJkTEZ4eVhHNWNkRndpZVdWc2JHOTNaM0psWlc1Y0lqb2dXekUxTkN3Z01qQTFMQ0ExTUYxY2NseHVmVHRjY2x4dUlpd2lMeW9nVFVsVUlHeHBZMlZ1YzJVZ0tpOWNiblpoY2lCamIyeHZjazVoYldWeklEMGdjbVZ4ZFdseVpTZ25ZMjlzYjNJdGJtRnRaU2NwTzF4dWRtRnlJSE4zYVhwNmJHVWdQU0J5WlhGMWFYSmxLQ2R6YVcxd2JHVXRjM2RwZW5wc1pTY3BPMXh1WEc1MllYSWdjbVYyWlhKelpVNWhiV1Z6SUQwZ2UzMDdYRzVjYmk4dklHTnlaV0YwWlNCaElHeHBjM1FnYjJZZ2NtVjJaWEp6WlNCamIyeHZjaUJ1WVcxbGMxeHVabTl5SUNoMllYSWdibUZ0WlNCcGJpQmpiMnh2Y2s1aGJXVnpLU0I3WEc1Y2RHbG1JQ2hqYjJ4dmNrNWhiV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLRzVoYldVcEtTQjdYRzVjZEZ4MGNtVjJaWEp6WlU1aGJXVnpXMk52Ykc5eVRtRnRaWE5iYm1GdFpWMWRJRDBnYm1GdFpUdGNibHgwZlZ4dWZWeHVYRzUyWVhJZ1kzTWdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSHRjYmx4MGRHODZJSHQ5TEZ4dVhIUm5aWFE2SUh0OVhHNTlPMXh1WEc1amN5NW5aWFFnUFNCbWRXNWpkR2x2YmlBb2MzUnlhVzVuS1NCN1hHNWNkSFpoY2lCd2NtVm1hWGdnUFNCemRISnBibWN1YzNWaWMzUnlhVzVuS0RBc0lETXBMblJ2VEc5M1pYSkRZWE5sS0NrN1hHNWNkSFpoY2lCMllXdzdYRzVjZEhaaGNpQnRiMlJsYkR0Y2JseDBjM2RwZEdOb0lDaHdjbVZtYVhncElIdGNibHgwWEhSallYTmxJQ2RvYzJ3bk9seHVYSFJjZEZ4MGRtRnNJRDBnWTNNdVoyVjBMbWh6YkNoemRISnBibWNwTzF4dVhIUmNkRngwYlc5a1pXd2dQU0FuYUhOc0p6dGNibHgwWEhSY2RHSnlaV0ZyTzF4dVhIUmNkR05oYzJVZ0oyaDNZaWM2WEc1Y2RGeDBYSFIyWVd3Z1BTQmpjeTVuWlhRdWFIZGlLSE4wY21sdVp5azdYRzVjZEZ4MFhIUnRiMlJsYkNBOUlDZG9kMkluTzF4dVhIUmNkRngwWW5KbFlXczdYRzVjZEZ4MFpHVm1ZWFZzZERwY2JseDBYSFJjZEhaaGJDQTlJR056TG1kbGRDNXlaMklvYzNSeWFXNW5LVHRjYmx4MFhIUmNkRzF2WkdWc0lEMGdKM0puWWljN1hHNWNkRngwWEhSaWNtVmhhenRjYmx4MGZWeHVYRzVjZEdsbUlDZ2hkbUZzS1NCN1hHNWNkRngwY21WMGRYSnVJRzUxYkd3N1hHNWNkSDFjYmx4dVhIUnlaWFIxY200Z2UyMXZaR1ZzT2lCdGIyUmxiQ3dnZG1Gc2RXVTZJSFpoYkgwN1hHNTlPMXh1WEc1amN5NW5aWFF1Y21kaUlEMGdablZ1WTNScGIyNGdLSE4wY21sdVp5a2dlMXh1WEhScFppQW9JWE4wY21sdVp5a2dlMXh1WEhSY2RISmxkSFZ5YmlCdWRXeHNPMXh1WEhSOVhHNWNibHgwZG1GeUlHRmlZbklnUFNBdlhpTW9XMkV0WmpBdE9WMTdNeXcwZlNra0wyazdYRzVjZEhaaGNpQm9aWGdnUFNBdlhpTW9XMkV0WmpBdE9WMTdObjBwS0Z0aExXWXdMVGxkZXpKOUtUOGtMMms3WEc1Y2RIWmhjaUJ5WjJKaElEMGdMMTV5WjJKaFAxeGNLRnhjY3lvb1d5c3RYVDljWEdRcktWeGNjeW9zWEZ4ektpaGJLeTFkUDF4Y1pDc3BYRnh6S2l4Y1hITXFLRnNyTFYwL1hGeGtLeWxjWEhNcUtEODZMRnhjY3lvb1d5c3RYVDliWEZ4a1hGd3VYU3NwWEZ4ektpay9YRndwSkM4N1hHNWNkSFpoY2lCd1pYSWdQU0F2WG5KblltRS9YRndvWEZ4ektpaGJLeTFkUDF0Y1hHUmNYQzVkS3lsY1hDVmNYSE1xTEZ4Y2N5b29XeXN0WFQ5YlhGeGtYRnd1WFNzcFhGd2xYRnh6S2l4Y1hITXFLRnNyTFYwL1cxeGNaRnhjTGwwcktWeGNKVnhjY3lvb1B6b3NYRnh6S2loYkt5MWRQMXRjWEdSY1hDNWRLeWxjWEhNcUtUOWNYQ2trTHp0Y2JseDBkbUZ5SUd0bGVYZHZjbVFnUFNBdktGeGNSQ3NwTHp0Y2JseHVYSFIyWVhJZ2NtZGlJRDBnV3pBc0lEQXNJREFzSURGZE8xeHVYSFIyWVhJZ2JXRjBZMmc3WEc1Y2RIWmhjaUJwTzF4dVhIUjJZWElnYUdWNFFXeHdhR0U3WEc1Y2JseDBhV1lnS0cxaGRHTm9JRDBnYzNSeWFXNW5MbTFoZEdOb0tHaGxlQ2twSUh0Y2JseDBYSFJvWlhoQmJIQm9ZU0E5SUcxaGRHTm9XekpkTzF4dVhIUmNkRzFoZEdOb0lEMGdiV0YwWTJoYk1WMDdYRzVjYmx4MFhIUm1iM0lnS0drZ1BTQXdPeUJwSUR3Z016c2dhU3NyS1NCN1hHNWNkRngwWEhRdkx5Qm9kSFJ3Y3pvdkwycHpjR1Z5Wmk1amIyMHZjMnhwWTJVdGRuTXRjM1ZpYzNSeUxYWnpMWE4xWW5OMGNtbHVaeTF0WlhSb2IyUnpMV3h2Ym1jdGMzUnlhVzVuTHpFNVhHNWNkRngwWEhSMllYSWdhVElnUFNCcElDb2dNanRjYmx4MFhIUmNkSEpuWWx0cFhTQTlJSEJoY25ObFNXNTBLRzFoZEdOb0xuTnNhV05sS0dreUxDQnBNaUFySURJcExDQXhOaWs3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0dobGVFRnNjR2hoS1NCN1hHNWNkRngwWEhSeVoySmJNMTBnUFNCTllYUm9Mbkp2ZFc1a0tDaHdZWEp6WlVsdWRDaG9aWGhCYkhCb1lTd2dNVFlwSUM4Z01qVTFLU0FxSURFd01Da2dMeUF4TURBN1hHNWNkRngwZlZ4dVhIUjlJR1ZzYzJVZ2FXWWdLRzFoZEdOb0lEMGdjM1J5YVc1bkxtMWhkR05vS0dGaVluSXBLU0I3WEc1Y2RGeDBiV0YwWTJnZ1BTQnRZWFJqYUZzeFhUdGNibHgwWEhSb1pYaEJiSEJvWVNBOUlHMWhkR05vV3pOZE8xeHVYRzVjZEZ4MFptOXlJQ2hwSUQwZ01Ec2dhU0E4SURNN0lHa3JLeWtnZTF4dVhIUmNkRngwY21kaVcybGRJRDBnY0dGeWMyVkpiblFvYldGMFkyaGJhVjBnS3lCdFlYUmphRnRwWFN3Z01UWXBPMXh1WEhSY2RIMWNibHh1WEhSY2RHbG1JQ2hvWlhoQmJIQm9ZU2tnZTF4dVhIUmNkRngwY21kaVd6TmRJRDBnVFdGMGFDNXliM1Z1WkNnb2NHRnljMlZKYm5Rb2FHVjRRV3h3YUdFZ0t5Qm9aWGhCYkhCb1lTd2dNVFlwSUM4Z01qVTFLU0FxSURFd01Da2dMeUF4TURBN1hHNWNkRngwZlZ4dVhIUjlJR1ZzYzJVZ2FXWWdLRzFoZEdOb0lEMGdjM1J5YVc1bkxtMWhkR05vS0hKblltRXBLU0I3WEc1Y2RGeDBabTl5SUNocElEMGdNRHNnYVNBOElETTdJR2tyS3lrZ2UxeHVYSFJjZEZ4MGNtZGlXMmxkSUQwZ2NHRnljMlZKYm5Rb2JXRjBZMmhiYVNBcklERmRMQ0F3S1R0Y2JseDBYSFI5WEc1Y2JseDBYSFJwWmlBb2JXRjBZMmhiTkYwcElIdGNibHgwWEhSY2RISm5ZbHN6WFNBOUlIQmhjbk5sUm14dllYUW9iV0YwWTJoYk5GMHBPMXh1WEhSY2RIMWNibHgwZlNCbGJITmxJR2xtSUNodFlYUmphQ0E5SUhOMGNtbHVaeTV0WVhSamFDaHdaWElwS1NCN1hHNWNkRngwWm05eUlDaHBJRDBnTURzZ2FTQThJRE03SUdrckt5a2dlMXh1WEhSY2RGeDBjbWRpVzJsZElEMGdUV0YwYUM1eWIzVnVaQ2h3WVhKelpVWnNiMkYwS0cxaGRHTm9XMmtnS3lBeFhTa2dLaUF5TGpVMUtUdGNibHgwWEhSOVhHNWNibHgwWEhScFppQW9iV0YwWTJoYk5GMHBJSHRjYmx4MFhIUmNkSEpuWWxzelhTQTlJSEJoY25ObFJteHZZWFFvYldGMFkyaGJORjBwTzF4dVhIUmNkSDFjYmx4MGZTQmxiSE5sSUdsbUlDaHRZWFJqYUNBOUlITjBjbWx1Wnk1dFlYUmphQ2hyWlhsM2IzSmtLU2tnZTF4dVhIUmNkR2xtSUNodFlYUmphRnN4WFNBOVBUMGdKM1J5WVc1emNHRnlaVzUwSnlrZ2UxeHVYSFJjZEZ4MGNtVjBkWEp1SUZzd0xDQXdMQ0F3TENBd1hUdGNibHgwWEhSOVhHNWNibHgwWEhSeVoySWdQU0JqYjJ4dmNrNWhiV1Z6VzIxaGRHTm9XekZkWFR0Y2JseHVYSFJjZEdsbUlDZ2hjbWRpS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnYm5Wc2JEdGNibHgwWEhSOVhHNWNibHgwWEhSeVoySmJNMTBnUFNBeE8xeHVYRzVjZEZ4MGNtVjBkWEp1SUhKbllqdGNibHgwZlNCbGJITmxJSHRjYmx4MFhIUnlaWFIxY200Z2JuVnNiRHRjYmx4MGZWeHVYRzVjZEdadmNpQW9hU0E5SURBN0lHa2dQQ0F6T3lCcEt5c3BJSHRjYmx4MFhIUnlaMkpiYVYwZ1BTQmpiR0Z0Y0NoeVoySmJhVjBzSURBc0lESTFOU2s3WEc1Y2RIMWNibHgwY21kaVd6TmRJRDBnWTJ4aGJYQW9jbWRpV3pOZExDQXdMQ0F4S1R0Y2JseHVYSFJ5WlhSMWNtNGdjbWRpTzF4dWZUdGNibHh1WTNNdVoyVjBMbWh6YkNBOUlHWjFibU4wYVc5dUlDaHpkSEpwYm1jcElIdGNibHgwYVdZZ0tDRnpkSEpwYm1jcElIdGNibHgwWEhSeVpYUjFjbTRnYm5Wc2JEdGNibHgwZlZ4dVhHNWNkSFpoY2lCb2Myd2dQU0F2WG1oemJHRS9YRndvWEZ4ektpaGJLeTFkUHlnL09seGNaQ3BjWEM0cFAxeGNaQ3NwS0Q4NlpHVm5LVDljWEhNcUxGeGNjeW9vV3lzdFhUOWJYRnhrWEZ3dVhTc3BKVnhjY3lvc1hGeHpLaWhiS3kxZFAxdGNYR1JjWEM1ZEt5a2xYRnh6S2lnL09peGNYSE1xS0ZzckxWMC9XMXhjWkZ4Y0xsMHJLVnhjY3lvcFAxeGNLU1F2TzF4dVhIUjJZWElnYldGMFkyZ2dQU0J6ZEhKcGJtY3ViV0YwWTJnb2FITnNLVHRjYmx4dVhIUnBaaUFvYldGMFkyZ3BJSHRjYmx4MFhIUjJZWElnWVd4d2FHRWdQU0J3WVhKelpVWnNiMkYwS0cxaGRHTm9XelJkS1R0Y2JseDBYSFIyWVhJZ2FDQTlJQ2h3WVhKelpVWnNiMkYwS0cxaGRHTm9XekZkS1NBcklETTJNQ2tnSlNBek5qQTdYRzVjZEZ4MGRtRnlJSE1nUFNCamJHRnRjQ2h3WVhKelpVWnNiMkYwS0cxaGRHTm9XekpkS1N3Z01Dd2dNVEF3S1R0Y2JseDBYSFIyWVhJZ2JDQTlJR05zWVcxd0tIQmhjbk5sUm14dllYUW9iV0YwWTJoYk0xMHBMQ0F3TENBeE1EQXBPMXh1WEhSY2RIWmhjaUJoSUQwZ1kyeGhiWEFvYVhOT1lVNG9ZV3h3YUdFcElEOGdNU0E2SUdGc2NHaGhMQ0F3TENBeEtUdGNibHh1WEhSY2RISmxkSFZ5YmlCYmFDd2djeXdnYkN3Z1lWMDdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdiblZzYkR0Y2JuMDdYRzVjYm1OekxtZGxkQzVvZDJJZ1BTQm1kVzVqZEdsdmJpQW9jM1J5YVc1bktTQjdYRzVjZEdsbUlDZ2hjM1J5YVc1bktTQjdYRzVjZEZ4MGNtVjBkWEp1SUc1MWJHdzdYRzVjZEgxY2JseHVYSFIyWVhJZ2FIZGlJRDBnTDE1b2QySmNYQ2hjWEhNcUtGc3JMVjAvWEZ4a0tsdGNYQzVkUDF4Y1pDc3BLRDg2WkdWbktUOWNYSE1xTEZ4Y2N5b29XeXN0WFQ5YlhGeGtYRnd1WFNzcEpWeGNjeW9zWEZ4ektpaGJLeTFkUDF0Y1hHUmNYQzVkS3lrbFhGeHpLaWcvT2l4Y1hITXFLRnNyTFYwL1cxeGNaRnhjTGwwcktWeGNjeW9wUDF4Y0tTUXZPMXh1WEhSMllYSWdiV0YwWTJnZ1BTQnpkSEpwYm1jdWJXRjBZMmdvYUhkaUtUdGNibHh1WEhScFppQW9iV0YwWTJncElIdGNibHgwWEhSMllYSWdZV3h3YUdFZ1BTQndZWEp6WlVac2IyRjBLRzFoZEdOb1d6UmRLVHRjYmx4MFhIUjJZWElnYUNBOUlDZ29jR0Z5YzJWR2JHOWhkQ2h0WVhSamFGc3hYU2tnSlNBek5qQXBJQ3NnTXpZd0tTQWxJRE0yTUR0Y2JseDBYSFIyWVhJZ2R5QTlJR05zWVcxd0tIQmhjbk5sUm14dllYUW9iV0YwWTJoYk1sMHBMQ0F3TENBeE1EQXBPMXh1WEhSY2RIWmhjaUJpSUQwZ1kyeGhiWEFvY0dGeWMyVkdiRzloZENodFlYUmphRnN6WFNrc0lEQXNJREV3TUNrN1hHNWNkRngwZG1GeUlHRWdQU0JqYkdGdGNDaHBjMDVoVGloaGJIQm9ZU2tnUHlBeElEb2dZV3h3YUdFc0lEQXNJREVwTzF4dVhIUmNkSEpsZEhWeWJpQmJhQ3dnZHl3Z1lpd2dZVjA3WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnYm5Wc2JEdGNibjA3WEc1Y2JtTnpMblJ2TG1obGVDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBkbUZ5SUhKblltRWdQU0J6ZDJsNmVteGxLR0Z5WjNWdFpXNTBjeWs3WEc1Y2JseDBjbVYwZFhKdUlDaGNibHgwWEhRbkl5Y2dLMXh1WEhSY2RHaGxlRVJ2ZFdKc1pTaHlaMkpoV3pCZEtTQXJYRzVjZEZ4MGFHVjRSRzkxWW14bEtISm5ZbUZiTVYwcElDdGNibHgwWEhSb1pYaEViM1ZpYkdVb2NtZGlZVnN5WFNrZ0sxeHVYSFJjZENoeVoySmhXek5kSUR3Z01WeHVYSFJjZEZ4MFB5QW9hR1Y0Ukc5MVlteGxLRTFoZEdndWNtOTFibVFvY21kaVlWc3pYU0FxSURJMU5Ta3BLVnh1WEhSY2RGeDBPaUFuSnlsY2JseDBLVHRjYm4wN1hHNWNibU56TG5SdkxuSm5ZaUE5SUdaMWJtTjBhVzl1SUNncElIdGNibHgwZG1GeUlISm5ZbUVnUFNCemQybDZlbXhsS0dGeVozVnRaVzUwY3lrN1hHNWNibHgwY21WMGRYSnVJSEpuWW1FdWJHVnVaM1JvSUR3Z05DQjhmQ0J5WjJKaFd6TmRJRDA5UFNBeFhHNWNkRngwUHlBbmNtZGlLQ2NnS3lCTllYUm9Mbkp2ZFc1a0tISm5ZbUZiTUYwcElDc2dKeXdnSnlBcklFMWhkR2d1Y205MWJtUW9jbWRpWVZzeFhTa2dLeUFuTENBbklDc2dUV0YwYUM1eWIzVnVaQ2h5WjJKaFd6SmRLU0FySUNjcEoxeHVYSFJjZERvZ0ozSm5ZbUVvSnlBcklFMWhkR2d1Y205MWJtUW9jbWRpWVZzd1hTa2dLeUFuTENBbklDc2dUV0YwYUM1eWIzVnVaQ2h5WjJKaFd6RmRLU0FySUNjc0lDY2dLeUJOWVhSb0xuSnZkVzVrS0hKblltRmJNbDBwSUNzZ0p5d2dKeUFySUhKblltRmJNMTBnS3lBbktTYzdYRzU5TzF4dVhHNWpjeTUwYnk1eVoySXVjR1Z5WTJWdWRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBkbUZ5SUhKblltRWdQU0J6ZDJsNmVteGxLR0Z5WjNWdFpXNTBjeWs3WEc1Y2JseDBkbUZ5SUhJZ1BTQk5ZWFJvTG5KdmRXNWtLSEpuWW1GYk1GMGdMeUF5TlRVZ0tpQXhNREFwTzF4dVhIUjJZWElnWnlBOUlFMWhkR2d1Y205MWJtUW9jbWRpWVZzeFhTQXZJREkxTlNBcUlERXdNQ2s3WEc1Y2RIWmhjaUJpSUQwZ1RXRjBhQzV5YjNWdVpDaHlaMkpoV3pKZElDOGdNalUxSUNvZ01UQXdLVHRjYmx4dVhIUnlaWFIxY200Z2NtZGlZUzVzWlc1bmRHZ2dQQ0EwSUh4OElISm5ZbUZiTTEwZ1BUMDlJREZjYmx4MFhIUS9JQ2R5WjJJb0p5QXJJSElnS3lBbkpTd2dKeUFySUdjZ0t5QW5KU3dnSnlBcklHSWdLeUFuSlNrblhHNWNkRngwT2lBbmNtZGlZU2duSUNzZ2NpQXJJQ2NsTENBbklDc2daeUFySUNjbExDQW5JQ3NnWWlBcklDY2xMQ0FuSUNzZ2NtZGlZVnN6WFNBcklDY3BKenRjYm4wN1hHNWNibU56TG5SdkxtaHpiQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNibHgwZG1GeUlHaHpiR0VnUFNCemQybDZlbXhsS0dGeVozVnRaVzUwY3lrN1hHNWNkSEpsZEhWeWJpQm9jMnhoTG14bGJtZDBhQ0E4SURRZ2ZId2dhSE5zWVZzelhTQTlQVDBnTVZ4dVhIUmNkRDhnSjJoemJDZ25JQ3NnYUhOc1lWc3dYU0FySUNjc0lDY2dLeUJvYzJ4aFd6RmRJQ3NnSnlVc0lDY2dLeUJvYzJ4aFd6SmRJQ3NnSnlVcEoxeHVYSFJjZERvZ0oyaHpiR0VvSnlBcklHaHpiR0ZiTUYwZ0t5QW5MQ0FuSUNzZ2FITnNZVnN4WFNBcklDY2xMQ0FuSUNzZ2FITnNZVnN5WFNBcklDY2xMQ0FuSUNzZ2FITnNZVnN6WFNBcklDY3BKenRjYm4wN1hHNWNiaTh2SUdoM1lpQnBjeUJoSUdKcGRDQmthV1ptWlhKbGJuUWdkR2hoYmlCeVoySW9ZU2tnSmlCb2Myd29ZU2tnYzJsdVkyVWdkR2hsY21VZ2FYTWdibThnWVd4d2FHRWdjM0JsWTJsbWFXTWdjM2x1ZEdGNFhHNHZMeUFvYUhkaUlHaGhkbVVnWVd4d2FHRWdiM0IwYVc5dVlXd2dKaUF4SUdseklHUmxabUYxYkhRZ2RtRnNkV1VwWEc1amN5NTBieTVvZDJJZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RIWmhjaUJvZDJKaElEMGdjM2RwZW5wc1pTaGhjbWQxYldWdWRITXBPMXh1WEc1Y2RIWmhjaUJoSUQwZ0p5YzdYRzVjZEdsbUlDaG9kMkpoTG14bGJtZDBhQ0ErUFNBMElDWW1JR2gzWW1GYk0xMGdJVDA5SURFcElIdGNibHgwWEhSaElEMGdKeXdnSnlBcklHaDNZbUZiTTEwN1hHNWNkSDFjYmx4dVhIUnlaWFIxY200Z0oyaDNZaWduSUNzZ2FIZGlZVnN3WFNBcklDY3NJQ2NnS3lCb2QySmhXekZkSUNzZ0p5VXNJQ2NnS3lCb2QySmhXekpkSUNzZ0p5VW5JQ3NnWVNBcklDY3BKenRjYm4wN1hHNWNibU56TG5SdkxtdGxlWGR2Y21RZ1BTQm1kVzVqZEdsdmJpQW9jbWRpS1NCN1hHNWNkSEpsZEhWeWJpQnlaWFpsY25ObFRtRnRaWE5iY21kaUxuTnNhV05sS0RBc0lETXBYVHRjYm4wN1hHNWNiaTh2SUdobGJIQmxjbk5jYm1aMWJtTjBhVzl1SUdOc1lXMXdLRzUxYlN3Z2JXbHVMQ0J0WVhncElIdGNibHgwY21WMGRYSnVJRTFoZEdndWJXbHVLRTFoZEdndWJXRjRLRzFwYml3Z2JuVnRLU3dnYldGNEtUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2FHVjRSRzkxWW14bEtHNTFiU2tnZTF4dVhIUjJZWElnYzNSeUlEMGdiblZ0TG5SdlUzUnlhVzVuS0RFMktTNTBiMVZ3Y0dWeVEyRnpaU2dwTzF4dVhIUnlaWFIxY200Z0tITjBjaTVzWlc1bmRHZ2dQQ0F5S1NBL0lDY3dKeUFySUhOMGNpQTZJSE4wY2p0Y2JuMWNiaUlzSWlkMWMyVWdjM1J5YVdOMEoxeHlYRzVjY2x4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN1hISmNibHgwWENKaGJHbGpaV0pzZFdWY0lqb2dXekkwTUN3Z01qUTRMQ0F5TlRWZExGeHlYRzVjZEZ3aVlXNTBhWEYxWlhkb2FYUmxYQ0k2SUZzeU5UQXNJREl6TlN3Z01qRTFYU3hjY2x4dVhIUmNJbUZ4ZFdGY0lqb2dXekFzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW1GeGRXRnRZWEpwYm1WY0lqb2dXekV5Tnl3Z01qVTFMQ0F5TVRKZExGeHlYRzVjZEZ3aVlYcDFjbVZjSWpvZ1d6STBNQ3dnTWpVMUxDQXlOVFZkTEZ4eVhHNWNkRndpWW1WcFoyVmNJam9nV3pJME5Td2dNalExTENBeU1qQmRMRnh5WEc1Y2RGd2lZbWx6Y1hWbFhDSTZJRnN5TlRVc0lESXlPQ3dnTVRrMlhTeGNjbHh1WEhSY0ltSnNZV05yWENJNklGc3dMQ0F3TENBd1hTeGNjbHh1WEhSY0ltSnNZVzVqYUdWa1lXeHRiMjVrWENJNklGc3lOVFVzSURJek5Td2dNakExWFN4Y2NseHVYSFJjSW1Kc2RXVmNJam9nV3pBc0lEQXNJREkxTlYwc1hISmNibHgwWENKaWJIVmxkbWx2YkdWMFhDSTZJRnN4TXpnc0lEUXpMQ0F5TWpaZExGeHlYRzVjZEZ3aVluSnZkMjVjSWpvZ1d6RTJOU3dnTkRJc0lEUXlYU3hjY2x4dVhIUmNJbUoxY214NWQyOXZaRndpT2lCYk1qSXlMQ0F4T0RRc0lERXpOVjBzWEhKY2JseDBYQ0pqWVdSbGRHSnNkV1ZjSWpvZ1d6azFMQ0F4TlRnc0lERTJNRjBzWEhKY2JseDBYQ0pqYUdGeWRISmxkWE5sWENJNklGc3hNamNzSURJMU5Td2dNRjBzWEhKY2JseDBYQ0pqYUc5amIyeGhkR1ZjSWpvZ1d6SXhNQ3dnTVRBMUxDQXpNRjBzWEhKY2JseDBYQ0pqYjNKaGJGd2lPaUJiTWpVMUxDQXhNamNzSURnd1hTeGNjbHh1WEhSY0ltTnZjbTVtYkc5M1pYSmliSFZsWENJNklGc3hNREFzSURFME9Td2dNak0zWFN4Y2NseHVYSFJjSW1OdmNtNXphV3hyWENJNklGc3lOVFVzSURJME9Dd2dNakl3WFN4Y2NseHVYSFJjSW1OeWFXMXpiMjVjSWpvZ1d6SXlNQ3dnTWpBc0lEWXdYU3hjY2x4dVhIUmNJbU41WVc1Y0lqb2dXekFzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW1SaGNtdGliSFZsWENJNklGc3dMQ0F3TENBeE16bGRMRnh5WEc1Y2RGd2laR0Z5YTJONVlXNWNJam9nV3pBc0lERXpPU3dnTVRNNVhTeGNjbHh1WEhSY0ltUmhjbXRuYjJ4a1pXNXliMlJjSWpvZ1d6RTROQ3dnTVRNMExDQXhNVjBzWEhKY2JseDBYQ0prWVhKclozSmhlVndpT2lCYk1UWTVMQ0F4Tmprc0lERTJPVjBzWEhKY2JseDBYQ0prWVhKclozSmxaVzVjSWpvZ1d6QXNJREV3TUN3Z01GMHNYSEpjYmx4MFhDSmtZWEpyWjNKbGVWd2lPaUJiTVRZNUxDQXhOamtzSURFMk9WMHNYSEpjYmx4MFhDSmtZWEpyYTJoaGEybGNJam9nV3pFNE9Td2dNVGd6TENBeE1EZGRMRnh5WEc1Y2RGd2laR0Z5YTIxaFoyVnVkR0ZjSWpvZ1d6RXpPU3dnTUN3Z01UTTVYU3hjY2x4dVhIUmNJbVJoY210dmJHbDJaV2R5WldWdVhDSTZJRnM0TlN3Z01UQTNMQ0EwTjEwc1hISmNibHgwWENKa1lYSnJiM0poYm1kbFhDSTZJRnN5TlRVc0lERTBNQ3dnTUYwc1hISmNibHgwWENKa1lYSnJiM0pqYUdsa1hDSTZJRnN4TlRNc0lEVXdMQ0F5TURSZExGeHlYRzVjZEZ3aVpHRnlhM0psWkZ3aU9pQmJNVE01TENBd0xDQXdYU3hjY2x4dVhIUmNJbVJoY210ellXeHRiMjVjSWpvZ1d6SXpNeXdnTVRVd0xDQXhNakpkTEZ4eVhHNWNkRndpWkdGeWEzTmxZV2R5WldWdVhDSTZJRnN4TkRNc0lERTRPQ3dnTVRRelhTeGNjbHh1WEhSY0ltUmhjbXR6YkdGMFpXSnNkV1ZjSWpvZ1d6Y3lMQ0EyTVN3Z01UTTVYU3hjY2x4dVhIUmNJbVJoY210emJHRjBaV2R5WVhsY0lqb2dXelEzTENBM09Td2dOemxkTEZ4eVhHNWNkRndpWkdGeWEzTnNZWFJsWjNKbGVWd2lPaUJiTkRjc0lEYzVMQ0EzT1Ywc1hISmNibHgwWENKa1lYSnJkSFZ5Y1hWdmFYTmxYQ0k2SUZzd0xDQXlNRFlzSURJd09WMHNYSEpjYmx4MFhDSmtZWEpyZG1sdmJHVjBYQ0k2SUZzeE5EZ3NJREFzSURJeE1WMHNYSEpjYmx4MFhDSmtaV1Z3Y0dsdWExd2lPaUJiTWpVMUxDQXlNQ3dnTVRRM1hTeGNjbHh1WEhSY0ltUmxaWEJ6YTNsaWJIVmxYQ0k2SUZzd0xDQXhPVEVzSURJMU5WMHNYSEpjYmx4MFhDSmthVzFuY21GNVhDSTZJRnN4TURVc0lERXdOU3dnTVRBMVhTeGNjbHh1WEhSY0ltUnBiV2R5WlhsY0lqb2dXekV3TlN3Z01UQTFMQ0F4TURWZExGeHlYRzVjZEZ3aVpHOWtaMlZ5WW14MVpWd2lPaUJiTXpBc0lERTBOQ3dnTWpVMVhTeGNjbHh1WEhSY0ltWnBjbVZpY21samExd2lPaUJiTVRjNExDQXpOQ3dnTXpSZExGeHlYRzVjZEZ3aVpteHZjbUZzZDJocGRHVmNJam9nV3pJMU5Td2dNalV3TENBeU5EQmRMRnh5WEc1Y2RGd2labTl5WlhOMFozSmxaVzVjSWpvZ1d6TTBMQ0F4TXprc0lETTBYU3hjY2x4dVhIUmNJbVoxWTJoemFXRmNJam9nV3pJMU5Td2dNQ3dnTWpVMVhTeGNjbHh1WEhSY0ltZGhhVzV6WW05eWIxd2lPaUJiTWpJd0xDQXlNakFzSURJeU1GMHNYSEpjYmx4MFhDSm5hRzl6ZEhkb2FYUmxYQ0k2SUZzeU5EZ3NJREkwT0N3Z01qVTFYU3hjY2x4dVhIUmNJbWR2YkdSY0lqb2dXekkxTlN3Z01qRTFMQ0F3WFN4Y2NseHVYSFJjSW1kdmJHUmxibkp2WkZ3aU9pQmJNakU0TENBeE5qVXNJRE15WFN4Y2NseHVYSFJjSW1keVlYbGNJam9nV3pFeU9Dd2dNVEk0TENBeE1qaGRMRnh5WEc1Y2RGd2laM0psWlc1Y0lqb2dXekFzSURFeU9Dd2dNRjBzWEhKY2JseDBYQ0puY21WbGJubGxiR3h2ZDF3aU9pQmJNVGN6TENBeU5UVXNJRFEzWFN4Y2NseHVYSFJjSW1keVpYbGNJam9nV3pFeU9Dd2dNVEk0TENBeE1qaGRMRnh5WEc1Y2RGd2lhRzl1Wlhsa1pYZGNJam9nV3pJME1Dd2dNalUxTENBeU5EQmRMRnh5WEc1Y2RGd2lhRzkwY0dsdWExd2lPaUJiTWpVMUxDQXhNRFVzSURFNE1GMHNYSEpjYmx4MFhDSnBibVJwWVc1eVpXUmNJam9nV3pJd05Td2dPVElzSURreVhTeGNjbHh1WEhSY0ltbHVaR2xuYjF3aU9pQmJOelVzSURBc0lERXpNRjBzWEhKY2JseDBYQ0pwZG05eWVWd2lPaUJiTWpVMUxDQXlOVFVzSURJME1GMHNYSEpjYmx4MFhDSnJhR0ZyYVZ3aU9pQmJNalF3TENBeU16QXNJREUwTUYwc1hISmNibHgwWENKc1lYWmxibVJsY2x3aU9pQmJNak13TENBeU16QXNJREkxTUYwc1hISmNibHgwWENKc1lYWmxibVJsY21Kc2RYTm9YQ0k2SUZzeU5UVXNJREkwTUN3Z01qUTFYU3hjY2x4dVhIUmNJbXhoZDI1bmNtVmxibHdpT2lCYk1USTBMQ0F5TlRJc0lEQmRMRnh5WEc1Y2RGd2liR1Z0YjI1amFHbG1abTl1WENJNklGc3lOVFVzSURJMU1Dd2dNakExWFN4Y2NseHVYSFJjSW14cFoyaDBZbXgxWlZ3aU9pQmJNVGN6TENBeU1UWXNJREl6TUYwc1hISmNibHgwWENKc2FXZG9kR052Y21Gc1hDSTZJRnN5TkRBc0lERXlPQ3dnTVRJNFhTeGNjbHh1WEhSY0lteHBaMmgwWTNsaGJsd2lPaUJiTWpJMExDQXlOVFVzSURJMU5WMHNYSEpjYmx4MFhDSnNhV2RvZEdkdmJHUmxibkp2WkhsbGJHeHZkMXdpT2lCYk1qVXdMQ0F5TlRBc0lESXhNRjBzWEhKY2JseDBYQ0pzYVdkb2RHZHlZWGxjSWpvZ1d6SXhNU3dnTWpFeExDQXlNVEZkTEZ4eVhHNWNkRndpYkdsbmFIUm5jbVZsYmx3aU9pQmJNVFEwTENBeU16Z3NJREUwTkYwc1hISmNibHgwWENKc2FXZG9kR2R5WlhsY0lqb2dXekl4TVN3Z01qRXhMQ0F5TVRGZExGeHlYRzVjZEZ3aWJHbG5hSFJ3YVc1clhDSTZJRnN5TlRVc0lERTRNaXdnTVRrelhTeGNjbHh1WEhSY0lteHBaMmgwYzJGc2JXOXVYQ0k2SUZzeU5UVXNJREUyTUN3Z01USXlYU3hjY2x4dVhIUmNJbXhwWjJoMGMyVmhaM0psWlc1Y0lqb2dXek15TENBeE56Z3NJREUzTUYwc1hISmNibHgwWENKc2FXZG9kSE5yZVdKc2RXVmNJam9nV3pFek5Td2dNakEyTENBeU5UQmRMRnh5WEc1Y2RGd2liR2xuYUhSemJHRjBaV2R5WVhsY0lqb2dXekV4T1N3Z01UTTJMQ0F4TlROZExGeHlYRzVjZEZ3aWJHbG5hSFJ6YkdGMFpXZHlaWGxjSWpvZ1d6RXhPU3dnTVRNMkxDQXhOVE5kTEZ4eVhHNWNkRndpYkdsbmFIUnpkR1ZsYkdKc2RXVmNJam9nV3pFM05pd2dNVGsyTENBeU1qSmRMRnh5WEc1Y2RGd2liR2xuYUhSNVpXeHNiM2RjSWpvZ1d6STFOU3dnTWpVMUxDQXlNalJkTEZ4eVhHNWNkRndpYkdsdFpWd2lPaUJiTUN3Z01qVTFMQ0F3WFN4Y2NseHVYSFJjSW14cGJXVm5jbVZsYmx3aU9pQmJOVEFzSURJd05Td2dOVEJkTEZ4eVhHNWNkRndpYkdsdVpXNWNJam9nV3pJMU1Dd2dNalF3TENBeU16QmRMRnh5WEc1Y2RGd2liV0ZuWlc1MFlWd2lPaUJiTWpVMUxDQXdMQ0F5TlRWZExGeHlYRzVjZEZ3aWJXRnliMjl1WENJNklGc3hNamdzSURBc0lEQmRMRnh5WEc1Y2RGd2liV1ZrYVhWdFlYRjFZVzFoY21sdVpWd2lPaUJiTVRBeUxDQXlNRFVzSURFM01GMHNYSEpjYmx4MFhDSnRaV1JwZFcxaWJIVmxYQ0k2SUZzd0xDQXdMQ0F5TURWZExGeHlYRzVjZEZ3aWJXVmthWFZ0YjNKamFHbGtYQ0k2SUZzeE9EWXNJRGcxTENBeU1URmRMRnh5WEc1Y2RGd2liV1ZrYVhWdGNIVnljR3hsWENJNklGc3hORGNzSURFeE1pd2dNakU1WFN4Y2NseHVYSFJjSW0xbFpHbDFiWE5sWVdkeVpXVnVYQ0k2SUZzMk1Dd2dNVGM1TENBeE1UTmRMRnh5WEc1Y2RGd2liV1ZrYVhWdGMyeGhkR1ZpYkhWbFhDSTZJRnN4TWpNc0lERXdOQ3dnTWpNNFhTeGNjbHh1WEhSY0ltMWxaR2wxYlhOd2NtbHVaMmR5WldWdVhDSTZJRnN3TENBeU5UQXNJREUxTkYwc1hISmNibHgwWENKdFpXUnBkVzEwZFhKeGRXOXBjMlZjSWpvZ1d6Y3lMQ0F5TURrc0lESXdORjBzWEhKY2JseDBYQ0p0WldScGRXMTJhVzlzWlhSeVpXUmNJam9nV3pFNU9Td2dNakVzSURFek0xMHNYSEpjYmx4MFhDSnRhV1J1YVdkb2RHSnNkV1ZjSWpvZ1d6STFMQ0F5TlN3Z01URXlYU3hjY2x4dVhIUmNJbTFwYm5SamNtVmhiVndpT2lCYk1qUTFMQ0F5TlRVc0lESTFNRjBzWEhKY2JseDBYQ0p0YVhOMGVYSnZjMlZjSWpvZ1d6STFOU3dnTWpJNExDQXlNalZkTEZ4eVhHNWNkRndpYlc5alkyRnphVzVjSWpvZ1d6STFOU3dnTWpJNExDQXhPREZkTEZ4eVhHNWNkRndpYm1GMllXcHZkMmhwZEdWY0lqb2dXekkxTlN3Z01qSXlMQ0F4TnpOZExGeHlYRzVjZEZ3aWJtRjJlVndpT2lCYk1Dd2dNQ3dnTVRJNFhTeGNjbHh1WEhSY0ltOXNaR3hoWTJWY0lqb2dXekkxTXl3Z01qUTFMQ0F5TXpCZExGeHlYRzVjZEZ3aWIyeHBkbVZjSWpvZ1d6RXlPQ3dnTVRJNExDQXdYU3hjY2x4dVhIUmNJbTlzYVhabFpISmhZbHdpT2lCYk1UQTNMQ0F4TkRJc0lETTFYU3hjY2x4dVhIUmNJbTl5WVc1blpWd2lPaUJiTWpVMUxDQXhOalVzSURCZExGeHlYRzVjZEZ3aWIzSmhibWRsY21Wa1hDSTZJRnN5TlRVc0lEWTVMQ0F3WFN4Y2NseHVYSFJjSW05eVkyaHBaRndpT2lCYk1qRTRMQ0F4TVRJc0lESXhORjBzWEhKY2JseDBYQ0p3WVd4bFoyOXNaR1Z1Y205a1hDSTZJRnN5TXpnc0lESXpNaXdnTVRjd1hTeGNjbHh1WEhSY0luQmhiR1ZuY21WbGJsd2lPaUJiTVRVeUxDQXlOVEVzSURFMU1sMHNYSEpjYmx4MFhDSndZV3hsZEhWeWNYVnZhWE5sWENJNklGc3hOelVzSURJek9Dd2dNak00WFN4Y2NseHVYSFJjSW5CaGJHVjJhVzlzWlhSeVpXUmNJam9nV3pJeE9Td2dNVEV5TENBeE5EZGRMRnh5WEc1Y2RGd2ljR0Z3WVhsaGQyaHBjRndpT2lCYk1qVTFMQ0F5TXprc0lESXhNMTBzWEhKY2JseDBYQ0p3WldGamFIQjFabVpjSWpvZ1d6STFOU3dnTWpFNExDQXhPRFZkTEZ4eVhHNWNkRndpY0dWeWRWd2lPaUJiTWpBMUxDQXhNek1zSURZelhTeGNjbHh1WEhSY0luQnBibXRjSWpvZ1d6STFOU3dnTVRreUxDQXlNRE5kTEZ4eVhHNWNkRndpY0d4MWJWd2lPaUJiTWpJeExDQXhOakFzSURJeU1WMHNYSEpjYmx4MFhDSndiM2RrWlhKaWJIVmxYQ0k2SUZzeE56WXNJREl5TkN3Z01qTXdYU3hjY2x4dVhIUmNJbkIxY25Cc1pWd2lPaUJiTVRJNExDQXdMQ0F4TWpoZExGeHlYRzVjZEZ3aWNtVmlaV05qWVhCMWNuQnNaVndpT2lCYk1UQXlMQ0ExTVN3Z01UVXpYU3hjY2x4dVhIUmNJbkpsWkZ3aU9pQmJNalUxTENBd0xDQXdYU3hjY2x4dVhIUmNJbkp2YzNsaWNtOTNibHdpT2lCYk1UZzRMQ0F4TkRNc0lERTBNMTBzWEhKY2JseDBYQ0p5YjNsaGJHSnNkV1ZjSWpvZ1d6WTFMQ0F4TURVc0lESXlOVjBzWEhKY2JseDBYQ0p6WVdSa2JHVmljbTkzYmx3aU9pQmJNVE01TENBMk9Td2dNVGxkTEZ4eVhHNWNkRndpYzJGc2JXOXVYQ0k2SUZzeU5UQXNJREV5T0N3Z01URTBYU3hjY2x4dVhIUmNJbk5oYm1SNVluSnZkMjVjSWpvZ1d6STBOQ3dnTVRZMExDQTVObDBzWEhKY2JseDBYQ0p6WldGbmNtVmxibHdpT2lCYk5EWXNJREV6T1N3Z09EZGRMRnh5WEc1Y2RGd2ljMlZoYzJobGJHeGNJam9nV3pJMU5Td2dNalExTENBeU16aGRMRnh5WEc1Y2RGd2ljMmxsYm01aFhDSTZJRnN4TmpBc0lEZ3lMQ0EwTlYwc1hISmNibHgwWENKemFXeDJaWEpjSWpvZ1d6RTVNaXdnTVRreUxDQXhPVEpkTEZ4eVhHNWNkRndpYzJ0NVlteDFaVndpT2lCYk1UTTFMQ0F5TURZc0lESXpOVjBzWEhKY2JseDBYQ0p6YkdGMFpXSnNkV1ZjSWpvZ1d6RXdOaXdnT1RBc0lESXdOVjBzWEhKY2JseDBYQ0p6YkdGMFpXZHlZWGxjSWpvZ1d6RXhNaXdnTVRJNExDQXhORFJkTEZ4eVhHNWNkRndpYzJ4aGRHVm5jbVY1WENJNklGc3hNVElzSURFeU9Dd2dNVFEwWFN4Y2NseHVYSFJjSW5OdWIzZGNJam9nV3pJMU5Td2dNalV3TENBeU5UQmRMRnh5WEc1Y2RGd2ljM0J5YVc1blozSmxaVzVjSWpvZ1d6QXNJREkxTlN3Z01USTNYU3hjY2x4dVhIUmNJbk4wWldWc1lteDFaVndpT2lCYk56QXNJREV6TUN3Z01UZ3dYU3hjY2x4dVhIUmNJblJoYmx3aU9pQmJNakV3TENBeE9EQXNJREUwTUYwc1hISmNibHgwWENKMFpXRnNYQ0k2SUZzd0xDQXhNamdzSURFeU9GMHNYSEpjYmx4MFhDSjBhR2x6ZEd4bFhDSTZJRnN5TVRZc0lERTVNU3dnTWpFMlhTeGNjbHh1WEhSY0luUnZiV0YwYjF3aU9pQmJNalUxTENBNU9Td2dOekZkTEZ4eVhHNWNkRndpZEhWeWNYVnZhWE5sWENJNklGczJOQ3dnTWpJMExDQXlNRGhkTEZ4eVhHNWNkRndpZG1sdmJHVjBYQ0k2SUZzeU16Z3NJREV6TUN3Z01qTTRYU3hjY2x4dVhIUmNJbmRvWldGMFhDSTZJRnN5TkRVc0lESXlNaXdnTVRjNVhTeGNjbHh1WEhSY0luZG9hWFJsWENJNklGc3lOVFVzSURJMU5Td2dNalUxWFN4Y2NseHVYSFJjSW5kb2FYUmxjMjF2YTJWY0lqb2dXekkwTlN3Z01qUTFMQ0F5TkRWZExGeHlYRzVjZEZ3aWVXVnNiRzkzWENJNklGc3lOVFVzSURJMU5Td2dNRjBzWEhKY2JseDBYQ0o1Wld4c2IzZG5jbVZsYmx3aU9pQmJNVFUwTENBeU1EVXNJRFV3WFZ4eVhHNTlPMXh5WEc0aUxDSW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJqYjJ4dmNsTjBjbWx1WnlBOUlISmxjWFZwY21Vb0oyTnZiRzl5TFhOMGNtbHVaeWNwTzF4dWRtRnlJR052Ym5abGNuUWdQU0J5WlhGMWFYSmxLQ2RqYjJ4dmNpMWpiMjUyWlhKMEp5azdYRzVjYm5aaGNpQmZjMnhwWTJVZ1BTQmJYUzV6YkdsalpUdGNibHh1ZG1GeUlITnJhWEJ3WldSTmIyUmxiSE1nUFNCYlhHNWNkQzh2SUhSdklHSmxJR2h2Ym1WemRDd2dTU0JrYjI0bmRDQnlaV0ZzYkhrZ1ptVmxiQ0JzYVd0bElHdGxlWGR2Y21RZ1ltVnNiMjVuY3lCcGJpQmpiMnh2Y2lCamIyNTJaWEowTENCaWRYUWdaV2d1WEc1Y2RDZHJaWGwzYjNKa0p5eGNibHh1WEhRdkx5Qm5jbUY1SUdOdmJtWnNhV04wY3lCM2FYUm9JSE52YldVZ2JXVjBhRzlrSUc1aGJXVnpMQ0JoYm1RZ2FHRnpJR2wwY3lCdmQyNGdiV1YwYUc5a0lHUmxabWx1WldRdVhHNWNkQ2RuY21GNUp5eGNibHh1WEhRdkx5QnphRzkxYkdSdUozUWdjbVZoYkd4NUlHSmxJR2x1SUdOdmJHOXlMV052Ym5abGNuUWdaV2wwYUdWeUxpNHVYRzVjZENkb1pYZ25YRzVkTzF4dVhHNTJZWElnYUdGemFHVmtUVzlrWld4TFpYbHpJRDBnZTMwN1hHNVBZbXBsWTNRdWEyVjVjeWhqYjI1MlpYSjBLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h0YjJSbGJDa2dlMXh1WEhSb1lYTm9aV1JOYjJSbGJFdGxlWE5iWDNOc2FXTmxMbU5oYkd3b1kyOXVkbVZ5ZEZ0dGIyUmxiRjB1YkdGaVpXeHpLUzV6YjNKMEtDa3VhbTlwYmlnbkp5bGRJRDBnYlc5a1pXdzdYRzU5S1R0Y2JseHVkbUZ5SUd4cGJXbDBaWEp6SUQwZ2UzMDdYRzVjYm1aMWJtTjBhVzl1SUVOdmJHOXlLRzlpYWl3Z2JXOWtaV3dwSUh0Y2JseDBhV1lnS0NFb2RHaHBjeUJwYm5OMFlXNWpaVzltSUVOdmJHOXlLU2tnZTF4dVhIUmNkSEpsZEhWeWJpQnVaWGNnUTI5c2IzSW9iMkpxTENCdGIyUmxiQ2s3WEc1Y2RIMWNibHh1WEhScFppQW9iVzlrWld3Z0ppWWdiVzlrWld3Z2FXNGdjMnRwY0hCbFpFMXZaR1ZzY3lrZ2UxeHVYSFJjZEcxdlpHVnNJRDBnYm5Wc2JEdGNibHgwZlZ4dVhHNWNkR2xtSUNodGIyUmxiQ0FtSmlBaEtHMXZaR1ZzSUdsdUlHTnZiblpsY25RcEtTQjdYRzVjZEZ4MGRHaHliM2NnYm1WM0lFVnljbTl5S0NkVmJtdHViM2R1SUcxdlpHVnNPaUFuSUNzZ2JXOWtaV3dwTzF4dVhIUjlYRzVjYmx4MGRtRnlJR2s3WEc1Y2RIWmhjaUJqYUdGdWJtVnNjenRjYmx4dVhIUnBaaUFvZEhsd1pXOW1JRzlpYWlBOVBUMGdKM1Z1WkdWbWFXNWxaQ2NwSUh0Y2JseDBYSFIwYUdsekxtMXZaR1ZzSUQwZ0ozSm5ZaWM3WEc1Y2RGeDBkR2hwY3k1amIyeHZjaUE5SUZzd0xDQXdMQ0F3WFR0Y2JseDBYSFIwYUdsekxuWmhiSEJvWVNBOUlERTdYRzVjZEgwZ1pXeHpaU0JwWmlBb2IySnFJR2x1YzNSaGJtTmxiMllnUTI5c2IzSXBJSHRjYmx4MFhIUjBhR2x6TG0xdlpHVnNJRDBnYjJKcUxtMXZaR1ZzTzF4dVhIUmNkSFJvYVhNdVkyOXNiM0lnUFNCdlltb3VZMjlzYjNJdWMyeHBZMlVvS1R0Y2JseDBYSFIwYUdsekxuWmhiSEJvWVNBOUlHOWlhaTUyWVd4d2FHRTdYRzVjZEgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUc5aWFpQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JseDBYSFIyWVhJZ2NtVnpkV3gwSUQwZ1kyOXNiM0pUZEhKcGJtY3VaMlYwS0c5aWFpazdYRzVjZEZ4MGFXWWdLSEpsYzNWc2RDQTlQVDBnYm5Wc2JDa2dlMXh1WEhSY2RGeDBkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZFZibUZpYkdVZ2RHOGdjR0Z5YzJVZ1kyOXNiM0lnWm5KdmJTQnpkSEpwYm1jNklDY2dLeUJ2WW1vcE8xeHVYSFJjZEgxY2JseHVYSFJjZEhSb2FYTXViVzlrWld3Z1BTQnlaWE4xYkhRdWJXOWtaV3c3WEc1Y2RGeDBZMmhoYm01bGJITWdQU0JqYjI1MlpYSjBXM1JvYVhNdWJXOWtaV3hkTG1Ob1lXNXVaV3h6TzF4dVhIUmNkSFJvYVhNdVkyOXNiM0lnUFNCeVpYTjFiSFF1ZG1Gc2RXVXVjMnhwWTJVb01Dd2dZMmhoYm01bGJITXBPMXh1WEhSY2RIUm9hWE11ZG1Gc2NHaGhJRDBnZEhsd1pXOW1JSEpsYzNWc2RDNTJZV3gxWlZ0amFHRnVibVZzYzEwZ1BUMDlJQ2R1ZFcxaVpYSW5JRDhnY21WemRXeDBMblpoYkhWbFcyTm9ZVzV1Wld4elhTQTZJREU3WEc1Y2RIMGdaV3h6WlNCcFppQW9iMkpxTG14bGJtZDBhQ2tnZTF4dVhIUmNkSFJvYVhNdWJXOWtaV3dnUFNCdGIyUmxiQ0I4ZkNBbmNtZGlKenRjYmx4MFhIUmphR0Z1Ym1Wc2N5QTlJR052Ym5abGNuUmJkR2hwY3k1dGIyUmxiRjB1WTJoaGJtNWxiSE03WEc1Y2RGeDBkbUZ5SUc1bGQwRnljaUE5SUY5emJHbGpaUzVqWVd4c0tHOWlhaXdnTUN3Z1kyaGhibTVsYkhNcE8xeHVYSFJjZEhSb2FYTXVZMjlzYjNJZ1BTQjZaWEp2UVhKeVlYa29ibVYzUVhKeUxDQmphR0Z1Ym1Wc2N5azdYRzVjZEZ4MGRHaHBjeTUyWVd4d2FHRWdQU0IwZVhCbGIyWWdiMkpxVzJOb1lXNXVaV3h6WFNBOVBUMGdKMjUxYldKbGNpY2dQeUJ2WW1wYlkyaGhibTVsYkhOZElEb2dNVHRjYmx4MGZTQmxiSE5sSUdsbUlDaDBlWEJsYjJZZ2IySnFJRDA5UFNBbmJuVnRZbVZ5SnlrZ2UxeHVYSFJjZEM4dklIUm9hWE1nYVhNZ1lXeDNZWGx6SUZKSFFpQXRJR05oYmlCaVpTQmpiMjUyWlhKMFpXUWdiR0YwWlhJZ2IyNHVYRzVjZEZ4MGIySnFJQ1k5SURCNFJrWkdSa1pHTzF4dVhIUmNkSFJvYVhNdWJXOWtaV3dnUFNBbmNtZGlKenRjYmx4MFhIUjBhR2x6TG1OdmJHOXlJRDBnVzF4dVhIUmNkRngwS0c5aWFpQStQaUF4TmlrZ0ppQXdlRVpHTEZ4dVhIUmNkRngwS0c5aWFpQStQaUE0S1NBbUlEQjRSa1lzWEc1Y2RGeDBYSFJ2WW1vZ0ppQXdlRVpHWEc1Y2RGeDBYVHRjYmx4MFhIUjBhR2x6TG5aaGJIQm9ZU0E5SURFN1hHNWNkSDBnWld4elpTQjdYRzVjZEZ4MGRHaHBjeTUyWVd4d2FHRWdQU0F4TzF4dVhHNWNkRngwZG1GeUlHdGxlWE1nUFNCUFltcGxZM1F1YTJWNWN5aHZZbW9wTzF4dVhIUmNkR2xtSUNnbllXeHdhR0VuSUdsdUlHOWlhaWtnZTF4dVhIUmNkRngwYTJWNWN5NXpjR3hwWTJVb2EyVjVjeTVwYm1SbGVFOW1LQ2RoYkhCb1lTY3BMQ0F4S1R0Y2JseDBYSFJjZEhSb2FYTXVkbUZzY0doaElEMGdkSGx3Wlc5bUlHOWlhaTVoYkhCb1lTQTlQVDBnSjI1MWJXSmxjaWNnUHlCdlltb3VZV3h3YUdFZ09pQXdPMXh1WEhSY2RIMWNibHh1WEhSY2RIWmhjaUJvWVhOb1pXUkxaWGx6SUQwZ2EyVjVjeTV6YjNKMEtDa3VhbTlwYmlnbkp5azdYRzVjZEZ4MGFXWWdLQ0VvYUdGemFHVmtTMlY1Y3lCcGJpQm9ZWE5vWldSTmIyUmxiRXRsZVhNcEtTQjdYRzVjZEZ4MFhIUjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oxVnVZV0pzWlNCMGJ5QndZWEp6WlNCamIyeHZjaUJtY205dElHOWlhbVZqZERvZ0p5QXJJRXBUVDA0dWMzUnlhVzVuYVdaNUtHOWlhaWtwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSFJvYVhNdWJXOWtaV3dnUFNCb1lYTm9aV1JOYjJSbGJFdGxlWE5iYUdGemFHVmtTMlY1YzEwN1hHNWNibHgwWEhSMllYSWdiR0ZpWld4eklEMGdZMjl1ZG1WeWRGdDBhR2x6TG0xdlpHVnNYUzVzWVdKbGJITTdYRzVjZEZ4MGRtRnlJR052Ykc5eUlEMGdXMTA3WEc1Y2RGeDBabTl5SUNocElEMGdNRHNnYVNBOElHeGhZbVZzY3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1WEhSY2RGeDBZMjlzYjNJdWNIVnphQ2h2WW1wYmJHRmlaV3h6VzJsZFhTazdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGRHaHBjeTVqYjJ4dmNpQTlJSHBsY205QmNuSmhlU2hqYjJ4dmNpazdYRzVjZEgxY2JseHVYSFF2THlCd1pYSm1iM0p0SUd4cGJXbDBZWFJwYjI1eklDaGpiR0Z0Y0dsdVp5d2daWFJqTGlsY2JseDBhV1lnS0d4cGJXbDBaWEp6VzNSb2FYTXViVzlrWld4ZEtTQjdYRzVjZEZ4MFkyaGhibTVsYkhNZ1BTQmpiMjUyWlhKMFczUm9hWE11Ylc5a1pXeGRMbU5vWVc1dVpXeHpPMXh1WEhSY2RHWnZjaUFvYVNBOUlEQTdJR2tnUENCamFHRnVibVZzY3pzZ2FTc3JLU0I3WEc1Y2RGeDBYSFIyWVhJZ2JHbHRhWFFnUFNCc2FXMXBkR1Z5YzF0MGFHbHpMbTF2WkdWc1hWdHBYVHRjYmx4MFhIUmNkR2xtSUNoc2FXMXBkQ2tnZTF4dVhIUmNkRngwWEhSMGFHbHpMbU52Ykc5eVcybGRJRDBnYkdsdGFYUW9kR2hwY3k1amIyeHZjbHRwWFNrN1hHNWNkRngwWEhSOVhHNWNkRngwZlZ4dVhIUjlYRzVjYmx4MGRHaHBjeTUyWVd4d2FHRWdQU0JOWVhSb0xtMWhlQ2d3TENCTllYUm9MbTFwYmlneExDQjBhR2x6TG5aaGJIQm9ZU2twTzF4dVhHNWNkR2xtSUNoUFltcGxZM1F1Wm5KbFpYcGxLU0I3WEc1Y2RGeDBUMkpxWldOMExtWnlaV1Y2WlNoMGFHbHpLVHRjYmx4MGZWeHVmVnh1WEc1RGIyeHZjaTV3Y205MGIzUjVjR1VnUFNCN1hHNWNkSFJ2VTNSeWFXNW5PaUJtZFc1amRHbHZiaUFvS1NCN1hHNWNkRngwY21WMGRYSnVJSFJvYVhNdWMzUnlhVzVuS0NrN1hHNWNkSDBzWEc1Y2JseDBkRzlLVTA5T09pQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBjbVYwZFhKdUlIUm9hWE5iZEdocGN5NXRiMlJsYkYwb0tUdGNibHgwZlN4Y2JseHVYSFJ6ZEhKcGJtYzZJR1oxYm1OMGFXOXVJQ2h3YkdGalpYTXBJSHRjYmx4MFhIUjJZWElnYzJWc1ppQTlJSFJvYVhNdWJXOWtaV3dnYVc0Z1kyOXNiM0pUZEhKcGJtY3VkRzhnUHlCMGFHbHpJRG9nZEdocGN5NXlaMklvS1R0Y2JseDBYSFJ6Wld4bUlEMGdjMlZzWmk1eWIzVnVaQ2gwZVhCbGIyWWdjR3hoWTJWeklEMDlQU0FuYm5WdFltVnlKeUEvSUhCc1lXTmxjeUE2SURFcE8xeHVYSFJjZEhaaGNpQmhjbWR6SUQwZ2MyVnNaaTUyWVd4d2FHRWdQVDA5SURFZ1B5QnpaV3htTG1OdmJHOXlJRG9nYzJWc1ppNWpiMnh2Y2k1amIyNWpZWFFvZEdocGN5NTJZV3h3YUdFcE8xeHVYSFJjZEhKbGRIVnliaUJqYjJ4dmNsTjBjbWx1Wnk1MGIxdHpaV3htTG0xdlpHVnNYU2hoY21kektUdGNibHgwZlN4Y2JseHVYSFJ3WlhKalpXNTBVM1J5YVc1bk9pQm1kVzVqZEdsdmJpQW9jR3hoWTJWektTQjdYRzVjZEZ4MGRtRnlJSE5sYkdZZ1BTQjBhR2x6TG5KbllpZ3BMbkp2ZFc1a0tIUjVjR1Z2WmlCd2JHRmpaWE1nUFQwOUlDZHVkVzFpWlhJbklEOGdjR3hoWTJWeklEb2dNU2s3WEc1Y2RGeDBkbUZ5SUdGeVozTWdQU0J6Wld4bUxuWmhiSEJvWVNBOVBUMGdNU0EvSUhObGJHWXVZMjlzYjNJZ09pQnpaV3htTG1OdmJHOXlMbU52Ym1OaGRDaDBhR2x6TG5aaGJIQm9ZU2s3WEc1Y2RGeDBjbVYwZFhKdUlHTnZiRzl5VTNSeWFXNW5MblJ2TG5KbllpNXdaWEpqWlc1MEtHRnlaM01wTzF4dVhIUjlMRnh1WEc1Y2RHRnljbUY1T2lCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MGNtVjBkWEp1SUhSb2FYTXVkbUZzY0doaElEMDlQU0F4SUQ4Z2RHaHBjeTVqYjJ4dmNpNXpiR2xqWlNncElEb2dkR2hwY3k1amIyeHZjaTVqYjI1allYUW9kR2hwY3k1MllXeHdhR0VwTzF4dVhIUjlMRnh1WEc1Y2RHOWlhbVZqZERvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RIWmhjaUJ5WlhOMWJIUWdQU0I3ZlR0Y2JseDBYSFIyWVhJZ1kyaGhibTVsYkhNZ1BTQmpiMjUyWlhKMFczUm9hWE11Ylc5a1pXeGRMbU5vWVc1dVpXeHpPMXh1WEhSY2RIWmhjaUJzWVdKbGJITWdQU0JqYjI1MlpYSjBXM1JvYVhNdWJXOWtaV3hkTG14aFltVnNjenRjYmx4dVhIUmNkR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnWTJoaGJtNWxiSE03SUdrckt5a2dlMXh1WEhSY2RGeDBjbVZ6ZFd4MFcyeGhZbVZzYzF0cFhWMGdQU0IwYUdsekxtTnZiRzl5VzJsZE8xeHVYSFJjZEgxY2JseHVYSFJjZEdsbUlDaDBhR2x6TG5aaGJIQm9ZU0FoUFQwZ01Ta2dlMXh1WEhSY2RGeDBjbVZ6ZFd4MExtRnNjR2hoSUQwZ2RHaHBjeTUyWVd4d2FHRTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUhKbGMzVnNkRHRjYmx4MGZTeGNibHh1WEhSMWJtbDBRWEp5WVhrNklHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUjJZWElnY21kaUlEMGdkR2hwY3k1eVoySW9LUzVqYjJ4dmNqdGNibHgwWEhSeVoySmJNRjBnTHowZ01qVTFPMXh1WEhSY2RISm5ZbHN4WFNBdlBTQXlOVFU3WEc1Y2RGeDBjbWRpV3pKZElDODlJREkxTlR0Y2JseHVYSFJjZEdsbUlDaDBhR2x6TG5aaGJIQm9ZU0FoUFQwZ01Ta2dlMXh1WEhSY2RGeDBjbWRpTG5CMWMyZ29kR2hwY3k1MllXeHdhR0VwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQnlaMkk3WEc1Y2RIMHNYRzVjYmx4MGRXNXBkRTlpYW1WamREb2dablZ1WTNScGIyNGdLQ2tnZTF4dVhIUmNkSFpoY2lCeVoySWdQU0IwYUdsekxuSm5ZaWdwTG05aWFtVmpkQ2dwTzF4dVhIUmNkSEpuWWk1eUlDODlJREkxTlR0Y2JseDBYSFJ5WjJJdVp5QXZQU0F5TlRVN1hHNWNkRngwY21kaUxtSWdMejBnTWpVMU8xeHVYRzVjZEZ4MGFXWWdLSFJvYVhNdWRtRnNjR2hoSUNFOVBTQXhLU0I3WEc1Y2RGeDBYSFJ5WjJJdVlXeHdhR0VnUFNCMGFHbHpMblpoYkhCb1lUdGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnY21kaU8xeHVYSFI5TEZ4dVhHNWNkSEp2ZFc1a09pQm1kVzVqZEdsdmJpQW9jR3hoWTJWektTQjdYRzVjZEZ4MGNHeGhZMlZ6SUQwZ1RXRjBhQzV0WVhnb2NHeGhZMlZ6SUh4OElEQXNJREFwTzF4dVhIUmNkSEpsZEhWeWJpQnVaWGNnUTI5c2IzSW9kR2hwY3k1amIyeHZjaTV0WVhBb2NtOTFibVJVYjFCc1lXTmxLSEJzWVdObGN5a3BMbU52Ym1OaGRDaDBhR2x6TG5aaGJIQm9ZU2tzSUhSb2FYTXViVzlrWld3cE8xeHVYSFI5TEZ4dVhHNWNkR0ZzY0doaE9pQm1kVzVqZEdsdmJpQW9kbUZzS1NCN1hHNWNkRngwYVdZZ0tHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdncElIdGNibHgwWEhSY2RISmxkSFZ5YmlCdVpYY2dRMjlzYjNJb2RHaHBjeTVqYjJ4dmNpNWpiMjVqWVhRb1RXRjBhQzV0WVhnb01Dd2dUV0YwYUM1dGFXNG9NU3dnZG1Gc0tTa3BMQ0IwYUdsekxtMXZaR1ZzS1R0Y2JseDBYSFI5WEc1Y2JseDBYSFJ5WlhSMWNtNGdkR2hwY3k1MllXeHdhR0U3WEc1Y2RIMHNYRzVjYmx4MEx5OGdjbWRpWEc1Y2RISmxaRG9nWjJWMGMyVjBLQ2R5WjJJbkxDQXdMQ0J0WVhobWJpZ3lOVFVwS1N4Y2JseDBaM0psWlc0NklHZGxkSE5sZENnbmNtZGlKeXdnTVN3Z2JXRjRabTRvTWpVMUtTa3NYRzVjZEdKc2RXVTZJR2RsZEhObGRDZ25jbWRpSnl3Z01pd2diV0Y0Wm00b01qVTFLU2tzWEc1Y2JseDBhSFZsT2lCblpYUnpaWFFvV3lkb2Myd25MQ0FuYUhOMkp5d2dKMmh6YkNjc0lDZG9kMkluTENBbmFHTm5KMTBzSURBc0lHWjFibU4wYVc5dUlDaDJZV3dwSUhzZ2NtVjBkWEp1SUNnb2RtRnNJQ1VnTXpZd0tTQXJJRE0yTUNrZ0pTQXpOakE3SUgwcExDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXNhVzVsSUdKeVlXTmxMWE4wZVd4bFhHNWNibHgwYzJGMGRYSmhkR2x2Ym13NklHZGxkSE5sZENnbmFITnNKeXdnTVN3Z2JXRjRabTRvTVRBd0tTa3NYRzVjZEd4cFoyaDBibVZ6Y3pvZ1oyVjBjMlYwS0Nkb2Myd25MQ0F5TENCdFlYaG1iaWd4TURBcEtTeGNibHh1WEhSellYUjFjbUYwYVc5dWRqb2daMlYwYzJWMEtDZG9jM1luTENBeExDQnRZWGhtYmlneE1EQXBLU3hjYmx4MGRtRnNkV1U2SUdkbGRITmxkQ2duYUhOMkp5d2dNaXdnYldGNFptNG9NVEF3S1Nrc1hHNWNibHgwWTJoeWIyMWhPaUJuWlhSelpYUW9KMmhqWnljc0lERXNJRzFoZUdadUtERXdNQ2twTEZ4dVhIUm5jbUY1T2lCblpYUnpaWFFvSjJoalp5Y3NJRElzSUcxaGVHWnVLREV3TUNrcExGeHVYRzVjZEhkb2FYUmxPaUJuWlhSelpYUW9KMmgzWWljc0lERXNJRzFoZUdadUtERXdNQ2twTEZ4dVhIUjNZbXhoWTJzNklHZGxkSE5sZENnbmFIZGlKeXdnTWl3Z2JXRjRabTRvTVRBd0tTa3NYRzVjYmx4MFkzbGhiam9nWjJWMGMyVjBLQ2RqYlhsckp5d2dNQ3dnYldGNFptNG9NVEF3S1Nrc1hHNWNkRzFoWjJWdWRHRTZJR2RsZEhObGRDZ25ZMjE1YXljc0lERXNJRzFoZUdadUtERXdNQ2twTEZ4dVhIUjVaV3hzYjNjNklHZGxkSE5sZENnblkyMTVheWNzSURJc0lHMWhlR1p1S0RFd01Da3BMRnh1WEhSaWJHRmphem9nWjJWMGMyVjBLQ2RqYlhsckp5d2dNeXdnYldGNFptNG9NVEF3S1Nrc1hHNWNibHgwZURvZ1oyVjBjMlYwS0NkNGVYb25MQ0F3TENCdFlYaG1iaWd4TURBcEtTeGNibHgwZVRvZ1oyVjBjMlYwS0NkNGVYb25MQ0F4TENCdFlYaG1iaWd4TURBcEtTeGNibHgwZWpvZ1oyVjBjMlYwS0NkNGVYb25MQ0F5TENCdFlYaG1iaWd4TURBcEtTeGNibHh1WEhSc09pQm5aWFJ6WlhRb0oyeGhZaWNzSURBc0lHMWhlR1p1S0RFd01Da3BMRnh1WEhSaE9pQm5aWFJ6WlhRb0oyeGhZaWNzSURFcExGeHVYSFJpT2lCblpYUnpaWFFvSjJ4aFlpY3NJRElwTEZ4dVhHNWNkR3RsZVhkdmNtUTZJR1oxYm1OMGFXOXVJQ2gyWVd3cElIdGNibHgwWEhScFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDa2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHNWxkeUJEYjJ4dmNpaDJZV3dwTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQmpiMjUyWlhKMFczUm9hWE11Ylc5a1pXeGRMbXRsZVhkdmNtUW9kR2hwY3k1amIyeHZjaWs3WEc1Y2RIMHNYRzVjYmx4MGFHVjRPaUJtZFc1amRHbHZiaUFvZG1Gc0tTQjdYRzVjZEZ4MGFXWWdLR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQnVaWGNnUTI5c2IzSW9kbUZzS1R0Y2JseDBYSFI5WEc1Y2JseDBYSFJ5WlhSMWNtNGdZMjlzYjNKVGRISnBibWN1ZEc4dWFHVjRLSFJvYVhNdWNtZGlLQ2t1Y205MWJtUW9LUzVqYjJ4dmNpazdYRzVjZEgwc1hHNWNibHgwY21kaVRuVnRZbVZ5T2lCbWRXNWpkR2x2YmlBb0tTQjdYRzVjZEZ4MGRtRnlJSEpuWWlBOUlIUm9hWE11Y21kaUtDa3VZMjlzYjNJN1hHNWNkRngwY21WMGRYSnVJQ2dvY21kaVd6QmRJQ1lnTUhoR1Jpa2dQRHdnTVRZcElId2dLQ2h5WjJKYk1WMGdKaUF3ZUVaR0tTQThQQ0E0S1NCOElDaHlaMkpiTWwwZ0ppQXdlRVpHS1R0Y2JseDBmU3hjYmx4dVhIUnNkVzFwYm05emFYUjVPaUJtZFc1amRHbHZiaUFvS1NCN1hHNWNkRngwTHk4Z2FIUjBjRG92TDNkM2R5NTNNeTV2Y21jdlZGSXZWME5CUnpJd0x5TnlaV3hoZEdsMlpXeDFiV2x1WVc1alpXUmxabHh1WEhSY2RIWmhjaUJ5WjJJZ1BTQjBhR2x6TG5KbllpZ3BMbU52Ykc5eU8xeHVYRzVjZEZ4MGRtRnlJR3gxYlNBOUlGdGRPMXh1WEhSY2RHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2djbWRpTG14bGJtZDBhRHNnYVNzcktTQjdYRzVjZEZ4MFhIUjJZWElnWTJoaGJpQTlJSEpuWWx0cFhTQXZJREkxTlR0Y2JseDBYSFJjZEd4MWJWdHBYU0E5SUNoamFHRnVJRHc5SURBdU1ETTVNamdwSUQ4Z1kyaGhiaUF2SURFeUxqa3lJRG9nVFdGMGFDNXdiM2NvS0NoamFHRnVJQ3NnTUM0d05UVXBJQzhnTVM0d05UVXBMQ0F5TGpRcE8xeHVYSFJjZEgxY2JseHVYSFJjZEhKbGRIVnliaUF3TGpJeE1qWWdLaUJzZFcxYk1GMGdLeUF3TGpjeE5USWdLaUJzZFcxYk1WMGdLeUF3TGpBM01qSWdLaUJzZFcxYk1sMDdYRzVjZEgwc1hHNWNibHgwWTI5dWRISmhjM1E2SUdaMWJtTjBhVzl1SUNoamIyeHZjaklwSUh0Y2JseDBYSFF2THlCb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5VVVpOVhRMEZITWpBdkkyTnZiblJ5WVhOMExYSmhkR2x2WkdWbVhHNWNkRngwZG1GeUlHeDFiVEVnUFNCMGFHbHpMbXgxYldsdWIzTnBkSGtvS1R0Y2JseDBYSFIyWVhJZ2JIVnRNaUE5SUdOdmJHOXlNaTVzZFcxcGJtOXphWFI1S0NrN1hHNWNibHgwWEhScFppQW9iSFZ0TVNBK0lHeDFiVElwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUFvYkhWdE1TQXJJREF1TURVcElDOGdLR3gxYlRJZ0t5QXdMakExS1R0Y2JseDBYSFI5WEc1Y2JseDBYSFJ5WlhSMWNtNGdLR3gxYlRJZ0t5QXdMakExS1NBdklDaHNkVzB4SUNzZ01DNHdOU2s3WEc1Y2RIMHNYRzVjYmx4MGJHVjJaV3c2SUdaMWJtTjBhVzl1SUNoamIyeHZjaklwSUh0Y2JseDBYSFIyWVhJZ1kyOXVkSEpoYzNSU1lYUnBieUE5SUhSb2FYTXVZMjl1ZEhKaGMzUW9ZMjlzYjNJeUtUdGNibHgwWEhScFppQW9ZMjl1ZEhKaGMzUlNZWFJwYnlBK1BTQTNMakVwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUFuUVVGQkp6dGNibHgwWEhSOVhHNWNibHgwWEhSeVpYUjFjbTRnS0dOdmJuUnlZWE4wVW1GMGFXOGdQajBnTkM0MUtTQS9JQ2RCUVNjZ09pQW5KenRjYmx4MGZTeGNibHh1WEhScGMwUmhjbXM2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhRdkx5QlpTVkVnWlhGMVlYUnBiMjRnWm5KdmJTQm9kSFJ3T2k4dk1qUjNZWGx6TG05eVp5OHlNREV3TDJOaGJHTjFiR0YwYVc1bkxXTnZiRzl5TFdOdmJuUnlZWE4wWEc1Y2RGeDBkbUZ5SUhKbllpQTlJSFJvYVhNdWNtZGlLQ2t1WTI5c2IzSTdYRzVjZEZ4MGRtRnlJSGxwY1NBOUlDaHlaMkpiTUYwZ0tpQXlPVGtnS3lCeVoySmJNVjBnS2lBMU9EY2dLeUJ5WjJKYk1sMGdLaUF4TVRRcElDOGdNVEF3TUR0Y2JseDBYSFJ5WlhSMWNtNGdlV2x4SUR3Z01USTRPMXh1WEhSOUxGeHVYRzVjZEdselRHbG5hSFE2SUdaMWJtTjBhVzl1SUNncElIdGNibHgwWEhSeVpYUjFjbTRnSVhSb2FYTXVhWE5FWVhKcktDazdYRzVjZEgwc1hHNWNibHgwYm1WbllYUmxPaUJtZFc1amRHbHZiaUFvS1NCN1hHNWNkRngwZG1GeUlISm5ZaUE5SUhSb2FYTXVjbWRpS0NrN1hHNWNkRngwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENBek95QnBLeXNwSUh0Y2JseDBYSFJjZEhKbllpNWpiMnh2Y2x0cFhTQTlJREkxTlNBdElISm5ZaTVqYjJ4dmNsdHBYVHRjYmx4MFhIUjlYRzVjZEZ4MGNtVjBkWEp1SUhKbllqdGNibHgwZlN4Y2JseHVYSFJzYVdkb2RHVnVPaUJtZFc1amRHbHZiaUFvY21GMGFXOHBJSHRjYmx4MFhIUjJZWElnYUhOc0lEMGdkR2hwY3k1b2Myd29LVHRjYmx4MFhIUm9jMnd1WTI5c2IzSmJNbDBnS3owZ2FITnNMbU52Ykc5eVd6SmRJQ29nY21GMGFXODdYRzVjZEZ4MGNtVjBkWEp1SUdoemJEdGNibHgwZlN4Y2JseHVYSFJrWVhKclpXNDZJR1oxYm1OMGFXOXVJQ2h5WVhScGJ5a2dlMXh1WEhSY2RIWmhjaUJvYzJ3Z1BTQjBhR2x6TG1oemJDZ3BPMXh1WEhSY2RHaHpiQzVqYjJ4dmNsc3lYU0F0UFNCb2Myd3VZMjlzYjNKYk1sMGdLaUJ5WVhScGJ6dGNibHgwWEhSeVpYUjFjbTRnYUhOc08xeHVYSFI5TEZ4dVhHNWNkSE5oZEhWeVlYUmxPaUJtZFc1amRHbHZiaUFvY21GMGFXOHBJSHRjYmx4MFhIUjJZWElnYUhOc0lEMGdkR2hwY3k1b2Myd29LVHRjYmx4MFhIUm9jMnd1WTI5c2IzSmJNVjBnS3owZ2FITnNMbU52Ykc5eVd6RmRJQ29nY21GMGFXODdYRzVjZEZ4MGNtVjBkWEp1SUdoemJEdGNibHgwZlN4Y2JseHVYSFJrWlhOaGRIVnlZWFJsT2lCbWRXNWpkR2x2YmlBb2NtRjBhVzhwSUh0Y2JseDBYSFIyWVhJZ2FITnNJRDBnZEdocGN5NW9jMndvS1R0Y2JseDBYSFJvYzJ3dVkyOXNiM0piTVYwZ0xUMGdhSE5zTG1OdmJHOXlXekZkSUNvZ2NtRjBhVzg3WEc1Y2RGeDBjbVYwZFhKdUlHaHpiRHRjYmx4MGZTeGNibHh1WEhSM2FHbDBaVzQ2SUdaMWJtTjBhVzl1SUNoeVlYUnBieWtnZTF4dVhIUmNkSFpoY2lCb2QySWdQU0IwYUdsekxtaDNZaWdwTzF4dVhIUmNkR2gzWWk1amIyeHZjbHN4WFNBclBTQm9kMkl1WTI5c2IzSmJNVjBnS2lCeVlYUnBienRjYmx4MFhIUnlaWFIxY200Z2FIZGlPMXh1WEhSOUxGeHVYRzVjZEdKc1lXTnJaVzQ2SUdaMWJtTjBhVzl1SUNoeVlYUnBieWtnZTF4dVhIUmNkSFpoY2lCb2QySWdQU0IwYUdsekxtaDNZaWdwTzF4dVhIUmNkR2gzWWk1amIyeHZjbHN5WFNBclBTQm9kMkl1WTI5c2IzSmJNbDBnS2lCeVlYUnBienRjYmx4MFhIUnlaWFIxY200Z2FIZGlPMXh1WEhSOUxGeHVYRzVjZEdkeVlYbHpZMkZzWlRvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RDOHZJR2gwZEhBNkx5OWxiaTUzYVd0cGNHVmthV0V1YjNKbkwzZHBhMmt2UjNKaGVYTmpZV3hsSTBOdmJuWmxjblJwYm1kZlkyOXNiM0pmZEc5ZlozSmhlWE5qWVd4bFhHNWNkRngwZG1GeUlISm5ZaUE5SUhSb2FYTXVjbWRpS0NrdVkyOXNiM0k3WEc1Y2RGeDBkbUZ5SUhaaGJDQTlJSEpuWWxzd1hTQXFJREF1TXlBcklISm5ZbHN4WFNBcUlEQXVOVGtnS3lCeVoySmJNbDBnS2lBd0xqRXhPMXh1WEhSY2RISmxkSFZ5YmlCRGIyeHZjaTV5WjJJb2RtRnNMQ0IyWVd3c0lIWmhiQ2s3WEc1Y2RIMHNYRzVjYmx4MFptRmtaVG9nWm5WdVkzUnBiMjRnS0hKaGRHbHZLU0I3WEc1Y2RGeDBjbVYwZFhKdUlIUm9hWE11WVd4d2FHRW9kR2hwY3k1MllXeHdhR0VnTFNBb2RHaHBjeTUyWVd4d2FHRWdLaUJ5WVhScGJ5a3BPMXh1WEhSOUxGeHVYRzVjZEc5d1lYRjFaWEk2SUdaMWJtTjBhVzl1SUNoeVlYUnBieWtnZTF4dVhIUmNkSEpsZEhWeWJpQjBhR2x6TG1Gc2NHaGhLSFJvYVhNdWRtRnNjR2hoSUNzZ0tIUm9hWE11ZG1Gc2NHaGhJQ29nY21GMGFXOHBLVHRjYmx4MGZTeGNibHh1WEhSeWIzUmhkR1U2SUdaMWJtTjBhVzl1SUNoa1pXZHlaV1Z6S1NCN1hHNWNkRngwZG1GeUlHaHpiQ0E5SUhSb2FYTXVhSE5zS0NrN1hHNWNkRngwZG1GeUlHaDFaU0E5SUdoemJDNWpiMnh2Y2xzd1hUdGNibHgwWEhSb2RXVWdQU0FvYUhWbElDc2daR1ZuY21WbGN5a2dKU0F6TmpBN1hHNWNkRngwYUhWbElEMGdhSFZsSUR3Z01DQS9JRE0yTUNBcklHaDFaU0E2SUdoMVpUdGNibHgwWEhSb2Myd3VZMjlzYjNKYk1GMGdQU0JvZFdVN1hHNWNkRngwY21WMGRYSnVJR2h6YkR0Y2JseDBmU3hjYmx4dVhIUnRhWGc2SUdaMWJtTjBhVzl1SUNodGFYaHBia052Ykc5eUxDQjNaV2xuYUhRcElIdGNibHgwWEhRdkx5QndiM0owWldRZ1puSnZiU0J6WVhOeklHbHRjR3hsYldWdWRHRjBhVzl1SUdsdUlFTmNibHgwWEhRdkx5Qm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZjMkZ6Y3k5c2FXSnpZWE56TDJKc2IySXZNR1UyWWpSaE1qZzFNREE1TWpNMU5tRmhNMlZqWlRBM1l6WmlNalE1WmpBeU1qRmpZV05sWkM5bWRXNWpkR2x2Ym5NdVkzQndJMHd5TURsY2JseDBYSFIyWVhJZ1kyOXNiM0l4SUQwZ2JXbDRhVzVEYjJ4dmNpNXlaMklvS1R0Y2JseDBYSFIyWVhJZ1kyOXNiM0l5SUQwZ2RHaHBjeTV5WjJJb0tUdGNibHgwWEhSMllYSWdjQ0E5SUhkbGFXZG9kQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lEOGdNQzQxSURvZ2QyVnBaMmgwTzF4dVhHNWNkRngwZG1GeUlIY2dQU0F5SUNvZ2NDQXRJREU3WEc1Y2RGeDBkbUZ5SUdFZ1BTQmpiMnh2Y2pFdVlXeHdhR0VvS1NBdElHTnZiRzl5TWk1aGJIQm9ZU2dwTzF4dVhHNWNkRngwZG1GeUlIY3hJRDBnS0Nnb2R5QXFJR0VnUFQwOUlDMHhLU0EvSUhjZ09pQW9keUFySUdFcElDOGdLREVnS3lCM0lDb2dZU2twSUNzZ01Ta2dMeUF5TGpBN1hHNWNkRngwZG1GeUlIY3lJRDBnTVNBdElIY3hPMXh1WEc1Y2RGeDBjbVYwZFhKdUlFTnZiRzl5TG5KbllpaGNibHgwWEhSY2RGeDBkekVnS2lCamIyeHZjakV1Y21Wa0tDa2dLeUIzTWlBcUlHTnZiRzl5TWk1eVpXUW9LU3hjYmx4MFhIUmNkRngwZHpFZ0tpQmpiMnh2Y2pFdVozSmxaVzRvS1NBcklIY3lJQ29nWTI5c2IzSXlMbWR5WldWdUtDa3NYRzVjZEZ4MFhIUmNkSGN4SUNvZ1kyOXNiM0l4TG1Kc2RXVW9LU0FySUhjeUlDb2dZMjlzYjNJeUxtSnNkV1VvS1N4Y2JseDBYSFJjZEZ4MFkyOXNiM0l4TG1Gc2NHaGhLQ2tnS2lCd0lDc2dZMjlzYjNJeUxtRnNjR2hoS0NrZ0tpQW9NU0F0SUhBcEtUdGNibHgwZlZ4dWZUdGNibHh1THk4Z2JXOWtaV3dnWTI5dWRtVnljMmx2YmlCdFpYUm9iMlJ6SUdGdVpDQnpkR0YwYVdNZ1kyOXVjM1J5ZFdOMGIzSnpYRzVQWW1wbFkzUXVhMlY1Y3loamIyNTJaWEowS1M1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNodGIyUmxiQ2tnZTF4dVhIUnBaaUFvYzJ0cGNIQmxaRTF2WkdWc2N5NXBibVJsZUU5bUtHMXZaR1ZzS1NBaFBUMGdMVEVwSUh0Y2JseDBYSFJ5WlhSMWNtNDdYRzVjZEgxY2JseHVYSFIyWVhJZ1kyaGhibTVsYkhNZ1BTQmpiMjUyWlhKMFcyMXZaR1ZzWFM1amFHRnVibVZzY3p0Y2JseHVYSFF2THlCamIyNTJaWEp6YVc5dUlHMWxkR2h2WkhOY2JseDBRMjlzYjNJdWNISnZkRzkwZVhCbFcyMXZaR1ZzWFNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmx4MFhIUnBaaUFvZEdocGN5NXRiMlJsYkNBOVBUMGdiVzlrWld3cElIdGNibHgwWEhSY2RISmxkSFZ5YmlCdVpYY2dRMjlzYjNJb2RHaHBjeWs3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0dGeVozVnRaVzUwY3k1c1pXNW5kR2dwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUJ1WlhjZ1EyOXNiM0lvWVhKbmRXMWxiblJ6TENCdGIyUmxiQ2s3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBkbUZ5SUc1bGQwRnNjR2hoSUQwZ2RIbHdaVzltSUdGeVozVnRaVzUwYzF0amFHRnVibVZzYzEwZ1BUMDlJQ2R1ZFcxaVpYSW5JRDhnWTJoaGJtNWxiSE1nT2lCMGFHbHpMblpoYkhCb1lUdGNibHgwWEhSeVpYUjFjbTRnYm1WM0lFTnZiRzl5S0dGemMyVnlkRUZ5Y21GNUtHTnZiblpsY25SYmRHaHBjeTV0YjJSbGJGMWJiVzlrWld4ZExuSmhkeWgwYUdsekxtTnZiRzl5S1NrdVkyOXVZMkYwS0c1bGQwRnNjR2hoS1N3Z2JXOWtaV3dwTzF4dVhIUjlPMXh1WEc1Y2RDOHZJQ2R6ZEdGMGFXTW5JR052Ym5OMGNuVmpkR2x2YmlCdFpYUm9iMlJ6WEc1Y2RFTnZiRzl5VzIxdlpHVnNYU0E5SUdaMWJtTjBhVzl1SUNoamIyeHZjaWtnZTF4dVhIUmNkR2xtSUNoMGVYQmxiMllnWTI5c2IzSWdQVDA5SUNkdWRXMWlaWEluS1NCN1hHNWNkRngwWEhSamIyeHZjaUE5SUhwbGNtOUJjbkpoZVNoZmMyeHBZMlV1WTJGc2JDaGhjbWQxYldWdWRITXBMQ0JqYUdGdWJtVnNjeWs3WEc1Y2RGeDBmVnh1WEhSY2RISmxkSFZ5YmlCdVpYY2dRMjlzYjNJb1kyOXNiM0lzSUcxdlpHVnNLVHRjYmx4MGZUdGNibjBwTzF4dVhHNW1kVzVqZEdsdmJpQnliM1Z1WkZSdktHNTFiU3dnY0d4aFkyVnpLU0I3WEc1Y2RISmxkSFZ5YmlCT2RXMWlaWElvYm5WdExuUnZSbWw0WldRb2NHeGhZMlZ6S1NrN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUhKdmRXNWtWRzlRYkdGalpTaHdiR0ZqWlhNcElIdGNibHgwY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2h1ZFcwcElIdGNibHgwWEhSeVpYUjFjbTRnY205MWJtUlVieWh1ZFcwc0lIQnNZV05sY3lrN1hHNWNkSDA3WEc1OVhHNWNibVoxYm1OMGFXOXVJR2RsZEhObGRDaHRiMlJsYkN3Z1kyaGhibTVsYkN3Z2JXOWthV1pwWlhJcElIdGNibHgwYlc5a1pXd2dQU0JCY25KaGVTNXBjMEZ5Y21GNUtHMXZaR1ZzS1NBL0lHMXZaR1ZzSURvZ1cyMXZaR1ZzWFR0Y2JseHVYSFJ0YjJSbGJDNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaHRLU0I3WEc1Y2RGeDBLR3hwYldsMFpYSnpXMjFkSUh4OElDaHNhVzFwZEdWeWMxdHRYU0E5SUZ0ZEtTbGJZMmhoYm01bGJGMGdQU0J0YjJScFptbGxjanRjYmx4MGZTazdYRzVjYmx4MGJXOWtaV3dnUFNCdGIyUmxiRnN3WFR0Y2JseHVYSFJ5WlhSMWNtNGdablZ1WTNScGIyNGdLSFpoYkNrZ2UxeHVYSFJjZEhaaGNpQnlaWE4xYkhRN1hHNWNibHgwWEhScFppQW9ZWEpuZFcxbGJuUnpMbXhsYm1kMGFDa2dlMXh1WEhSY2RGeDBhV1lnS0cxdlpHbG1hV1Z5S1NCN1hHNWNkRngwWEhSY2RIWmhiQ0E5SUcxdlpHbG1hV1Z5S0haaGJDazdYRzVjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkSEpsYzNWc2RDQTlJSFJvYVhOYmJXOWtaV3hkS0NrN1hHNWNkRngwWEhSeVpYTjFiSFF1WTI5c2IzSmJZMmhoYm01bGJGMGdQU0IyWVd3N1hHNWNkRngwWEhSeVpYUjFjbTRnY21WemRXeDBPMXh1WEhSY2RIMWNibHh1WEhSY2RISmxjM1ZzZENBOUlIUm9hWE5iYlc5a1pXeGRLQ2t1WTI5c2IzSmJZMmhoYm01bGJGMDdYRzVjZEZ4MGFXWWdLRzF2WkdsbWFXVnlLU0I3WEc1Y2RGeDBYSFJ5WlhOMWJIUWdQU0J0YjJScFptbGxjaWh5WlhOMWJIUXBPMXh1WEhSY2RIMWNibHh1WEhSY2RISmxkSFZ5YmlCeVpYTjFiSFE3WEc1Y2RIMDdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHMWhlR1p1S0cxaGVDa2dlMXh1WEhSeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0hZcElIdGNibHgwWEhSeVpYUjFjbTRnVFdGMGFDNXRZWGdvTUN3Z1RXRjBhQzV0YVc0b2JXRjRMQ0IyS1NrN1hHNWNkSDA3WEc1OVhHNWNibVoxYm1OMGFXOXVJR0Z6YzJWeWRFRnljbUY1S0haaGJDa2dlMXh1WEhSeVpYUjFjbTRnUVhKeVlYa3VhWE5CY25KaGVTaDJZV3dwSUQ4Z2RtRnNJRG9nVzNaaGJGMDdYRzU5WEc1Y2JtWjFibU4wYVc5dUlIcGxjbTlCY25KaGVTaGhjbklzSUd4bGJtZDBhQ2tnZTF4dVhIUm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYm1kMGFEc2dhU3NyS1NCN1hHNWNkRngwYVdZZ0tIUjVjR1Z2WmlCaGNuSmJhVjBnSVQwOUlDZHVkVzFpWlhJbktTQjdYRzVjZEZ4MFhIUmhjbkpiYVYwZ1BTQXdPMXh1WEhSY2RIMWNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQmhjbkk3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdRMjlzYjNJN1hHNGlMQ0p0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR2x6UVhKeVlYbHBjMmdvYjJKcUtTQjdYRzVjZEdsbUlDZ2hiMkpxSUh4OElIUjVjR1Z2WmlCdlltb2dQVDA5SUNkemRISnBibWNuS1NCN1hHNWNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFI5WEc1Y2JseDBjbVYwZFhKdUlHOWlhaUJwYm5OMFlXNWpaVzltSUVGeWNtRjVJSHg4SUVGeWNtRjVMbWx6UVhKeVlYa29iMkpxS1NCOGZGeHVYSFJjZENodlltb3ViR1Z1WjNSb0lENDlJREFnSmlZZ0tHOWlhaTV6Y0d4cFkyVWdhVzV6ZEdGdVkyVnZaaUJHZFc1amRHbHZiaUI4ZkZ4dVhIUmNkRngwS0U5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVVUmxjMk55YVhCMGIzSW9iMkpxTENBb2IySnFMbXhsYm1kMGFDQXRJREVwS1NBbUppQnZZbW91WTI5dWMzUnlkV04wYjNJdWJtRnRaU0FoUFQwZ0oxTjBjbWx1WnljcEtTazdYRzU5TzF4dUlpd2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnYVhOQmNuSmhlV2x6YUNBOUlISmxjWFZwY21Vb0oybHpMV0Z5Y21GNWFYTm9KeWs3WEc1Y2JuWmhjaUJqYjI1allYUWdQU0JCY25KaGVTNXdjbTkwYjNSNWNHVXVZMjl1WTJGME8xeHVkbUZ5SUhOc2FXTmxJRDBnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbk5zYVdObE8xeHVYRzUyWVhJZ2MzZHBlbnBzWlNBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1puVnVZM1JwYjI0Z2MzZHBlbnBzWlNoaGNtZHpLU0I3WEc1Y2RIWmhjaUJ5WlhOMWJIUnpJRDBnVzEwN1hHNWNibHgwWm05eUlDaDJZWElnYVNBOUlEQXNJR3hsYmlBOUlHRnlaM011YkdWdVozUm9PeUJwSUR3Z2JHVnVPeUJwS3lzcElIdGNibHgwWEhSMllYSWdZWEpuSUQwZ1lYSm5jMXRwWFR0Y2JseHVYSFJjZEdsbUlDaHBjMEZ5Y21GNWFYTm9LR0Z5WnlrcElIdGNibHgwWEhSY2RDOHZJR2gwZEhBNkx5OXFjM0JsY21ZdVkyOXRMMnBoZG1GelkzSnBjSFF0WVhKeVlYa3RZMjl1WTJGMExYWnpMWEIxYzJndk9UaGNibHgwWEhSY2RISmxjM1ZzZEhNZ1BTQmpiMjVqWVhRdVkyRnNiQ2h5WlhOMWJIUnpMQ0J6YkdsalpTNWpZV3hzS0dGeVp5a3BPMXh1WEhSY2RIMGdaV3h6WlNCN1hHNWNkRngwWEhSeVpYTjFiSFJ6TG5CMWMyZ29ZWEpuS1R0Y2JseDBYSFI5WEc1Y2RIMWNibHh1WEhSeVpYUjFjbTRnY21WemRXeDBjenRjYm4wN1hHNWNibk4zYVhwNmJHVXVkM0poY0NBOUlHWjFibU4wYVc5dUlDaG1iaWtnZTF4dVhIUnlaWFIxY200Z1puVnVZM1JwYjI0Z0tDa2dlMXh1WEhSY2RISmxkSFZ5YmlCbWJpaHpkMmw2ZW14bEtHRnlaM1Z0Wlc1MGN5a3BPMXh1WEhSOU8xeHVmVHRjYmlJc0ltbHRjRzl5ZENCN0lFUmhkR0ZNYVhOMFNYUmxiU3dnUTJoaGJtNWxiRVoxYm1NZ2ZTQm1jbTl0SUNjdUxpOWtaV1pwYm1sMGFXOXVjeWRjYm1sdGNHOXlkQ0JOWVhKclpYSnpUR0Y1WlhJc0lIdGNiaUFnVFdGeWEyVnljMHhoZVdWeVQzQjBhVzl1Y3l4Y2JpQWdUV0Z5YTJWeWMwaGxZWFJNWVhsbGNrOXdkR2x2Ym5Nc1hHNTlJR1p5YjIwZ0p5NHVMMjFoY210bGNpOU5ZWEpyWlhKelRHRjVaWEluWEc1Y2JtbHVkR1Z5Wm1GalpTQkVlVzVoYldsalNHVmhkRXhoZVdWeVQzQjBhVzl1Y3lCbGVIUmxibVJ6SUUxaGNtdGxjbk5JWldGMFRHRjVaWEpQY0hScGIyNXpJSHRjYmlBZ0x5b3FJT2FZcitXUXB1VytxdWVPcithU3JlYVV2aUFxTDF4dUlDQnNiMjl3T2lCaWIyOXNaV0Z1WEc0Z0lDOHFLaURtbUsvbGtLYm9oNnJsaXFqbWtxM21sTDRnS2k5Y2JpQWdZWFYwYnpvZ1ltOXZiR1ZoYmx4dUlDQXZLaW9nNlplMDZacVU1cGUyNlplMElDb3ZYRzRnSUdsdWRHVnlkbUZzT2lCdWRXMWlaWEpjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUkhsdVlXMXBZMGhsWVhSTVlYbGxjaUI3WEc0Z0lDOHFLaURsdlpQbGlZM21rcTNtbEw3bGlMRG5yS3psaDZEbXJhVWdLaTljYmlBZ2NISnBkbUYwWlNCamRYSnlaVzUwVTNSbGNEb2diblZ0WW1WeVhHNWNiaUFnY0hKcGRtRjBaU0J0WVhBNklFd3VUV0Z3WEc0Z0lIQnlhWFpoZEdVZ1pIbHVZVzFwWTBSaGRHRk1hWE4wT2lCRVlYUmhUR2x6ZEVsMFpXMWJYVnRkWEc0Z0lIQnlhWFpoZEdVZ2IzQjBhVzl1Y3pvZ1JIbHVZVzFwWTBobFlYUk1ZWGxsY2s5d2RHbHZibk5jYmlBZ2NISnBkbUYwWlNCamFHRnVibVZzUm5WdVl6b2dRMmhoYm01bGJFWjFibU5jYmlBZ2NISnBkbUYwWlNCc1lYbGxjam9nVFdGeWEyVnljMHhoZVdWeVhHNGdJSEJ5YVhaaGRHVWdhWE5RWVhWelpUb2dZbTl2YkdWaGJseHVJQ0JqYjI1emRISjFZM1J2Y2loY2JpQWdJQ0J0WVhBNklFd3VUV0Z3TEZ4dUlDQWdJR1I1Ym1GdGFXTkVZWFJoVEdsemREb2dSR0YwWVV4cGMzUkpkR1Z0VzExYlhTeGNiaUFnSUNCdmNIUnBiMjV6T2lCRWVXNWhiV2xqU0dWaGRFeGhlV1Z5VDNCMGFXOXVjeXhjYmlBZ0lDQmphR0Z1Ym1Wc1JuVnVZem9nUTJoaGJtNWxiRVoxYm1OY2JpQWdLU0I3WEc0Z0lDQWdkR2hwY3k1dFlYQWdQU0J0WVhCY2JpQWdJQ0IwYUdsekxtUjVibUZ0YVdORVlYUmhUR2x6ZENBOUlHUjVibUZ0YVdORVlYUmhUR2x6ZEZ4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5OY2JpQWdJQ0IwYUdsekxtTm9ZVzV1Wld4R2RXNWpJRDBnWTJoaGJtNWxiRVoxYm1OY2JpQWdJQ0IwYUdsekxtTjFjbkpsYm5SVGRHVndJRDBnTUZ4dUlDQWdJSFJvYVhNdWFYTlFZWFZ6WlNBOUlIUnlkV1ZjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjbVZ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1selVHRjFjMlVnUFNCbVlXeHpaVnh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkRk4wWlhBZ1BTQXdYRzRnSUNBZ2RHaHBjeTVuYjNSdlUzUmxjQ2gwYUdsekxtTjFjbkpsYm5SVGRHVndLVnh1SUNBZ0lIUm9hWE11YzNSaGNuUW9LVnh1SUNCOVhHNGdJSEIxWW14cFl5QnpkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbWx6VUdGMWMyVWdQU0JtWVd4elpWeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1dmNIUnBiMjV6TG1GMWRHOHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUgxY2JpQWdJQ0J6WlhSVWFXMWxiM1YwS0NncElEMCtJSHRjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbWx6VUdGMWMyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQXZLaW9nNXBLdDVwUys1YTZNNXErVklDb3ZYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NWpkWEp5Wlc1MFUzUmxjQ0ErUFNCMGFHbHpMbVI1Ym1GdGFXTkVZWFJoVEdsemRDNXNaVzVuZEdnZ0xTQXhLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1dmNIUnBiMjV6TG14dmIzQXBJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCMGFHbHpMbkpsYzNSaGNuUW9LVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1amRYSnlaVzUwVTNSbGNDc3JYRzRnSUNBZ0lDQWdJSFJvYVhNdVoyOTBiMU4wWlhBb2RHaHBjeTVqZFhKeVpXNTBVM1JsY0NsY2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDZ3BYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTd2dkR2hwY3k1dmNIUnBiMjV6TG1sdWRHVnlkbUZzS1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ3WVhWelpTZ3BJSHRjYmlBZ0lDQjBhR2x6TG1selVHRjFjMlVnUFNCMGNuVmxYRzRnSUgxY2JpQWdjSFZpYkdsaklIQnlaWFlvS1NCN1hHNGdJQ0FnZEdocGN5NWpkWEp5Wlc1MFUzUmxjQzB0WEc0Z0lDQWdkR2hwY3k1amRYSnlaVzUwVTNSbGNDQTlYRzRnSUNBZ0lDQW9kR2hwY3k1amRYSnlaVzUwVTNSbGNDQXJJSFJvYVhNdVpIbHVZVzFwWTBSaGRHRk1hWE4wTG14bGJtZDBhQ2tnSlZ4dUlDQWdJQ0FnZEdocGN5NWtlVzVoYldsalJHRjBZVXhwYzNRdWJHVnVaM1JvWEc0Z0lDQWdkR2hwY3k1bmIzUnZVM1JsY0NoMGFHbHpMbU4xY25KbGJuUlRkR1Z3S1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ1WlhoMEtDa2dlMXh1SUNBZ0lIUm9hWE11WTNWeWNtVnVkRk4wWlhBcksxeHVJQ0FnSUhSb2FYTXVZM1Z5Y21WdWRGTjBaWEFnUFNCMGFHbHpMbU4xY25KbGJuUlRkR1Z3SUNVZ2RHaHBjeTVrZVc1aGJXbGpSR0YwWVV4cGMzUXViR1Z1WjNSb1hHNGdJQ0FnZEdocGN5NW5iM1J2VTNSbGNDaDBhR2x6TG1OMWNuSmxiblJUZEdWd0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCbmIzUnZVM1JsY0NoemRHVndPaUJ1ZFcxaVpYSXBJSHRjYmlBZ0lDQnBaaUFvYzNSbGNDQThJREFnZkh3Z2MzUmxjQ0ErUFNCMGFHbHpMbVI1Ym1GdGFXTkVZWFJoVEdsemRDNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1oyOTBiMU4wWlhBb0pIdHpkR1Z3ZlNrNklITjBaWEFnYVhNZ2IzVjBJRzltSUdsdVpHVjRJR0FwWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11YkdGNVpYSXVjMlYwUkdGMFlTaDBhR2x6TG1SNWJtRnRhV05FWVhSaFRHbHpkRnR6ZEdWd1hTbGNiaUFnSUNCMGFHbHpMbXhoZVdWeUxtUnlZWGNvS1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJrY21GM0tHOXdkR2x2Ym5NL09pQkVlVzVoYldsalNHVmhkRXhoZVdWeVQzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVhVzVwZEU5d2RHbHZibk1vYjNCMGFXOXVjeWxjYmlBZ0lDQjBhR2x6TG1sdWFYUk1ZWGxsY2lncFhHNGdJQ0FnZEdocGN5NXNZWGxsY2k1a2NtRjNLQ2xjYmlBZ0lDQnlaWFIxY200Z2RHaHBjMXh1SUNCOVhHNGdJSEJ5YVhaaGRHVWdhVzVwZEU5d2RHbHZibk1vYjNCMGFXOXVjejg2SUVSNWJtRnRhV05JWldGMFRHRjVaWEpQY0hScGIyNXpLU0I3WEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWhjYmlBZ0lDQWdJSHRjYmlBZ0lDQWdJQ0FnYkc5dmNEb2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lHRjFkRzg2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0JwYm5SbGNuWmhiRG9nTVRBd01DeGNiaUFnSUNBZ0lIMHNYRzRnSUNBZ0lDQjBhR2x6TG05d2RHbHZibk1zWEc0Z0lDQWdJQ0J2Y0hScGIyNXpYRzRnSUNBZ0tWeHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ2FXNXBkRXhoZVdWeUtDa2dlMXh1SUNBZ0lHTnZibk4wSUcxaGNtdGxjbk5NWVhsbGNrOXdkR2x2Ym5NNklFMWhjbXRsY25OTVlYbGxjazl3ZEdsdmJuTWdQU0I3WEc0Z0lDQWdJQ0J5Wlc1a1pYSlVlWEJsT2lBbmFHVmhkQ2NzWEc0Z0lDQWdJQ0JvWldGMFQzQjBhVzl1Y3pvZ2RHaHBjeTV2Y0hScGIyNXpMRnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbXhoZVdWeUlEMGdibVYzSUUxaGNtdGxjbk5NWVhsbGNpaGNiaUFnSUNBZ0lIUm9hWE11YldGd0xGeHVJQ0FnSUNBZ2RHaHBjeTVrZVc1aGJXbGpSR0YwWVV4cGMzUmJNRjBzWEc0Z0lDQWdJQ0J0WVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6TEZ4dUlDQWdJQ0FnZEdocGN5NWphR0Z1Ym1Wc1JuVnVZMXh1SUNBZ0lDbGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXNZWGxsY2x4dUlDQjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ1RXRnlhMlZ5SUdaeWIyMGdKeTR2YldGeWEyVnlMMDFoY210bGNpZGNibWx0Y0c5eWRDQk5ZWEpyWlhKelRHRjVaWElnWm5KdmJTQW5MaTl0WVhKclpYSXZUV0Z5YTJWeWMweGhlV1Z5SjF4dWFXMXdiM0owSUUxaGNtdGxjbk5DZFdabVpYSk1ZWGxsY2lCbWNtOXRJQ2N1TDIxaGNtdGxjaTlOWVhKclpYSnpRblZtWm1WeVRHRjVaWEluWEc1cGJYQnZjblFnVUc5c2VXeHBibVVnWm5KdmJTQW5MaTl3YjJ4NWJHbHVaUzlRYjJ4NWJHbHVaU2RjYm1sdGNHOXlkQ0JRYjJ4NWJHbHVaWE5NWVhsbGNpQm1jbTl0SUNjdUwzQnZiSGxzYVc1bEwxQnZiSGxzYVc1bGMweGhlV1Z5SjF4dWFXMXdiM0owSUZCdmJIbHNhVzVsYzBKMVptWmxja3hoZVdWeUlHWnliMjBnSnk0dmNHOXNlV3hwYm1VdlVHOXNlV3hwYm1WelFuVm1abVZ5VEdGNVpYSW5YRzVwYlhCdmNuUWdVRzlzZVdkdmJpQm1jbTl0SUNjdUwzQnZiSGxuYjI0dlVHOXNlV2R2YmlkY2JtbHRjRzl5ZENCUWIyeDVaMjl1YzB4aGVXVnlJR1p5YjIwZ0p5NHZjRzlzZVdkdmJpOVFiMng1WjI5dWMweGhlV1Z5SjF4dWFXMXdiM0owSUVkeWFXUnpUR0Y1WlhJZ1puSnZiU0FuTGk5d2IyeDVaMjl1TDBkeWFXUnpUR0Y1WlhJblhHNXBiWEJ2Y25RZ1JIbHVZVzFwWTBobFlYUk1ZWGxsY2lCbWNtOXRJQ2N1TDJSNWJtRnRhV05JWldGMFRHRjVaWEl2UkhsdVlXMXBZMGhsWVhSTVlYbGxjaWRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQk5ZWEpyWlhJc1hHNGdJRTFoY210bGNuTk1ZWGxsY2l4Y2JpQWdUV0Z5YTJWeWMwSjFabVpsY2t4aGVXVnlMRnh1SUNCUWIyeDViR2x1WlN4Y2JpQWdVRzlzZVd4cGJtVnpUR0Y1WlhJc1hHNGdJRkJ2Ykhsc2FXNWxjMEoxWm1abGNreGhlV1Z5TEZ4dUlDQlFiMng1WjI5dUxGeHVJQ0JRYjJ4NVoyOXVjMHhoZVdWeUxGeHVJQ0JIY21sa2MweGhlV1Z5TEZ4dUlDQkVlVzVoYldsalNHVmhkRXhoZVdWeUxGeHVmVnh1Wlhod2IzSjBJSHRjYmlBZ1RXRnlhMlZ5TEZ4dUlDQk5ZWEpyWlhKelRHRjVaWElzWEc0Z0lFMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNpeGNiaUFnVUc5c2VXeHBibVVzWEc0Z0lGQnZiSGxzYVc1bGMweGhlV1Z5TEZ4dUlDQlFiMng1YkdsdVpYTkNkV1ptWlhKTVlYbGxjaXhjYmlBZ1VHOXNlV2R2Yml4Y2JpQWdVRzlzZVdkdmJuTk1ZWGxsY2l4Y2JpQWdSM0pwWkhOTVlYbGxjaXhjYmlBZ1JIbHVZVzFwWTBobFlYUk1ZWGxsY2l4Y2JuMWNiaUlzSW1sdGNHOXlkQ0I3SUVSaGRHRk1hWE4wU1hSbGJTQjlJR1p5YjIwZ0p5NHVMMlJsWm1sdWFYUnBiMjV6SjF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJOWVhKclpYSWdaWGgwWlc1a2N5Qk1MazFoY210bGNpQjdYRzRnSUM4dklIUnpiR2x1ZERwa2FYTmhZbXhsTFc1bGVIUXRiR2x1WlRwMllYSnBZV0pzWlMxdVlXMWxYRzRnSUhCeWFYWmhkR1VnWDE5a1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcxY2JpQWdZMjl1YzNSeWRXTjBiM0lvYkdGMGJHNW5PaUJNTGt4aGRFeHVaMFY0Y0hKbGMzTnBiMjRzSUc5d2RHbHZibk0vT2lCTUxrMWhjbXRsY2s5d2RHbHZibk1wSUh0Y2JpQWdJQ0J6ZFhCbGNpaHNZWFJzYm1jc0lHOXdkR2x2Ym5NcFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhObGRFUmhkR0VvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1NCN1hHNGdJQ0FnZEdocGN5NWZYMlJoZEdFZ1BTQmtZWFJoWEc0Z0lIMWNiaUFnY0hWaWJHbGpJR2RsZEVSaGRHRW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11WDE5a1lYUmhYRzRnSUgxY2JuMWNiaUlzSW1sdGNHOXlkQ0I3SUVSaGRHRk1hWE4wU1hSbGJTd2dRMmhoYm01bGJFWjFibU1nZlNCbWNtOXRJQ2N1TGk5a1pXWnBibWwwYVc5dWN5ZGNibWx0Y0c5eWRDQk5ZWEpyWlhKelRHRjVaWElzSUhzZ1RXRnlhMlZ5YzB4aGVXVnlUM0IwYVc5dWN5QjlJR1p5YjIwZ0p5NHZUV0Z5YTJWeWMweGhlV1Z5SjF4dWFXNTBaWEptWVdObElFMWhjbXRsY25OQ2RXWm1aWEpNWVhsbGNrOXdkR2x2Ym5NZ1pYaDBaVzVrY3lCTllYSnJaWEp6VEdGNVpYSlBjSFJwYjI1eklIdGNiaUFnWW5WbVptVnlWRzl2YkhScGNFRjBkSEk2SUhOMGNtbHVaMXh1SUNCaWRXWm1aWEpQY0hScGIyNXpPaUJNTGtOcGNtTnNaVTFoY210bGNrOXdkR2x2Ym5OY2JuMWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUUxaGNtdGxjbk5DZFdabVpYSk1ZWGxsY2lCbGVIUmxibVJ6SUUxaGNtdGxjbk5NWVhsbGNpQjdYRzRnSUhCMVlteHBZeUJ2Y0hScGIyNXpPaUJOWVhKclpYSnpRblZtWm1WeVRHRjVaWEpQY0hScGIyNXpYRzRnSUhCeWFYWmhkR1VnWW5WbVptVnlUR0Y1WlhJNklFd3VUR0Y1WlhKSGNtOTFjRnh1SUNCamIyNXpkSEoxWTNSdmNpaGNiaUFnSUNCdFlYQTZJRXd1VFdGd0xGeHVJQ0FnSUdSaGRHRk1hWE4wT2lCRVlYUmhUR2x6ZEVsMFpXMWJYU3hjYmlBZ0lDQnZjSFJwYjI1ek9pQk5ZWEpyWlhKelFuVm1abVZ5VEdGNVpYSlBjSFJwYjI1ekxGeHVJQ0FnSUdOb1lXNXVaV3hHZFc1ak9pQkRhR0Z1Ym1Wc1JuVnVZMXh1SUNBcElIdGNiaUFnSUNCemRYQmxjaWh0WVhBc0lHUmhkR0ZNYVhOMExDQnZjSFJwYjI1ekxDQmphR0Z1Ym1Wc1JuVnVZeWxjYmlBZ0lDQjBhR2x6TG5SNWNHVWdQU0FuYldGeWEyVnlRblZtWm1WeUoxeHVJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUkNkV1ptWlhKUGNIUnBiMjV6T2lCTUxrTnBjbU5zWlUxaGNtdGxjazl3ZEdsdmJuTWdQU0I3WEc0Z0lDQWdJQ0J5WVdScGRYTTZJREV3TURBc1hHNGdJQ0FnSUNCemRISnZhMlU2SUhSeWRXVXNYRzRnSUNBZ0lDQjNaV2xuYUhRNklERXNYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5QTlJRTlpYW1WamRDNWhjM05wWjI0b1hHNGdJQ0FnSUNCMGFHbHpMbTl3ZEdsdmJuTXNYRzRnSUNBZ0lDQjdJR0oxWm1abGNrOXdkR2x2Ym5NNklHUmxabUYxYkhSQ2RXWm1aWEpQY0hScGIyNXpJSDBzWEc0Z0lDQWdJQ0J2Y0hScGIyNXpYRzRnSUNBZ0tWeHVJQ0I5WEc1Y2JpQWdjSFZpYkdsaklHUnlZWGNvYjNCMGFXOXVjejg2SUUxaGNtdGxjbk5DZFdabVpYSk1ZWGxsY2s5d2RHbHZibk1wSUh0Y2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0hSb2FYTXViM0IwYVc5dWN5d2diM0IwYVc5dWN5bGNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTXVZblZtWm1WeVQzQjBhVzl1Y3k1amIyeHZjaUE5SUhSb2FYTXViM0IwYVc5dWN5NXBZMjl1UTI5c2IzSmNiaUFnSUNCMGFHbHpMbWx1YVhSTllYSnJaWEp6S0NsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1eVpXUnlZWGNvS1Z4dUlDQjlYRzVjYmlBZ2NIVmliR2xqSUhKbFpISmhkeWdwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11ZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBhR2x6TG0xaGNtdGxja3hoZVdWeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG0xaGNDNXlaVzF2ZG1WTVlYbGxjaWgwYUdsekxtMWhjbXRsY2t4aGVXVnlLVnh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kR2hwY3k1aWRXWm1aWEpNWVhsbGNpa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVjbVZ0YjNabFRHRjVaWElvZEdocGN5NWlkV1ptWlhKTVlYbGxjaWxjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTV0WVhKclpYSk1ZWGxsY2lBOUlIUm9hWE11WTI5dVptbG5UV0Z5YTJWeVRHRjVaWElvS1Z4dUlDQWdJSFJvYVhNdVluVm1abVZ5VEdGNVpYSWdQU0IwYUdsekxtTnZibVpwWjBKMVptWmxja3hoZVdWeUtDbGNibHh1SUNBZ0lIUm9hWE11YkdGNVpYSWdQU0JNTG14aGVXVnlSM0p2ZFhBb0tWeHVJQ0FnSUhSb2FYTXViR0Y1WlhJdVlXUmtUR0Y1WlhJb2RHaHBjeTV0WVhKclpYSk1ZWGxsY2lsY2JpQWdJQ0IwYUdsekxteGhlV1Z5TG1Ga1pFeGhlV1Z5S0hSb2FYTXVZblZtWm1WeVRHRjVaWElwWEc1Y2JpQWdJQ0IwYUdsekxtMWhjQzVoWkdSTVlYbGxjaWgwYUdsekxteGhlV1Z5S1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6WEc0Z0lIMWNibHh1SUNCd2RXSnNhV01nWjJWMFFtOTFibVJ6S0NrNklFd3VUR0YwVEc1blFtOTFibVJ6Ulhod2NtVnpjMmx2YmlCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YldGeWEyVnljeTVzWlc1bmRHZ2dQRDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXViV0Z3TG1kbGRFSnZkVzVrY3lncFhHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG0xaGNtdGxjbk11Y21Wa2RXTmxLQ2h3Y21WMkxDQmpkWEp5S1NBOVBpQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2NISmxkaTVsZUhSbGJtUW9YRzRnSUNBZ0lDQWdJR04xY25JdVoyVjBUR0YwVEc1bktDa3VkRzlDYjNWdVpITW9kR2hwY3k1dmNIUnBiMjV6TG1KMVptWmxjazl3ZEdsdmJuTXVjbUZrYVhWektWeHVJQ0FnSUNBZ0tWeHVJQ0FnSUgwc0lIUm9hWE11YldGeWEyVnljMXN3WFM1blpYUk1ZWFJNYm1jb0tTNTBiMEp2ZFc1a2N5aDBhR2x6TG05d2RHbHZibk11WW5WbVptVnlUM0IwYVc5dWN5NXlZV1JwZFhNcEtWeHVJQ0I5WEc1Y2JpQWdjSEpwZG1GMFpTQmpiMjVtYVdkQ2RXWm1aWEpNWVhsbGNpZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCbmNtOTFjRXhoZVdWeUlEMGdUQzVzWVhsbGNrZHliM1Z3S0NsY2JpQWdJQ0IwYUdsekxtMWhjbXRsY25NdVptOXlSV0ZqYUNnb2JXRnlhMlZ5S1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCamFYSmpiR1ZNWVhsbGNpQTlJRXd1WTJseVkyeGxLRnh1SUNBZ0lDQWdJQ0J0WVhKclpYSXVaMlYwVEdGMFRHNW5LQ2tzWEc0Z0lDQWdJQ0FnSUhSb2FYTXViM0IwYVc5dWN5NWlkV1ptWlhKUGNIUnBiMjV6WEc0Z0lDQWdJQ0FwWEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTV2Y0hScGIyNXpMbUoxWm1abGNsUnZiMngwYVhCQmRIUnlLU0I3WEc0Z0lDQWdJQ0FnSUdOcGNtTnNaVXhoZVdWeUxtSnBibVJVYjI5c2RHbHdLRnh1SUNBZ0lDQWdJQ0FnSUNjbklDc2diV0Z5YTJWeUxtZGxkRVJoZEdFb0tWdDBhR2x6TG05d2RHbHZibk11WW5WbVptVnlWRzl2YkhScGNFRjBkSEpkWEc0Z0lDQWdJQ0FnSUNsY2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhOM2FYUmphQ0FvZEhsd1pXOW1JSFJvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJcElIdGNiaUFnSUNBZ0lDQWdJQ0JqWVhObElDZHpkSEpwYm1jbk9seHVJQ0FnSUNBZ0lDQWdJQ0FnWTJseVkyeGxUR0Y1WlhJdVltbHVaRlJ2YjJ4MGFYQW9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDY25JQ3NnYldGeWEyVnlMbWRsZEVSaGRHRW9LVnQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeVhWeHVJQ0FnSUNBZ0lDQWdJQ0FnS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdZbkpsWVd0Y2JpQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkdlltcGxZM1FuT2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMmx5WTJ4bFRHRjVaWEl1WW1sdVpGUnZiMngwYVhBb1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNjbklDc2diV0Z5YTJWeUxtZGxkRVJoZEdFb0tWdDBhR2x6TG05d2RHbHZibk11Y0c5d2RYQkJkSFJ5TG5aaGJIVmxYVnh1SUNBZ0lDQWdJQ0FnSUNBZ0tWeHVJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JuY205MWNFeGhlV1Z5TG1Ga1pFeGhlV1Z5S0dOcGNtTnNaVXhoZVdWeUtWeHVJQ0FnSUgwcFhHNGdJQ0FnY21WMGRYSnVJR2R5YjNWd1RHRjVaWEpjYmlBZ2ZWeHVmVnh1SWl3aWFXMXdiM0owSUhzZ2JHbG5hSFJsYmlCOUlHWnliMjBnSnk0dUwzVjBhV3h6TDJsdVpHVjRKMXh1YVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdExDQkRhR0Z1Ym1Wc1JuVnVZeUI5SUdaeWIyMGdKeTR1TDJSbFptbHVhWFJwYjI1ekoxeHVhVzF3YjNKMElFMWhjbXRsY2lCbWNtOXRJQ2N1TDAxaGNtdGxjaWRjYmx4dUx5b3FJT2E0c3VhZmsrYWd0K1c4anlEbWxhUG5ncmw4NTRPdDVZcWI1WnUrSUNvdlhHNTBlWEJsSUUxaGNtdGxjbk5NWVhsbGNsSmxibVJsY2xSNWNHVWdQU0FuY0c5cGJuUW5JSHdnSjJobFlYUW5JSHdnSjJOc2RYTjBaWEluWEc1Y2JpOHFLaURtdUxMbW41UHBvcHpvaWJMbW9MZmx2SThnNVkyVjZJbXlmT1dJaHVhdXRTQXFMMXh1ZEhsd1pTQk5ZWEpyWlhKelRHRjVaWEpTWlc1a1pYSlFiMmx1ZEVOdmJHOXlWSGx3WlNBOUlDZHphVzVuYkdVbklId2dKM05sWjIxbGJuUmxaQ2RjYmx4dUx5b3FJT2FWbytlQ3VlV2J2dWFnaCtleHUrV2VpeUJwWTI5dVptOXVkSHh6ZG1kOGFXMWhaMlVnS2k5Y2JuUjVjR1VnVFdGeWEyVnljMHhoZVdWeVNXTnZibFI1Y0dVZ1BTQW5abTl1ZEY5amJHRnpjeWNnZkNBbmRXNXBZMjlrWlNjZ2ZDQW5jM2x0WW05c0p5QjhJQ2RwYldGblpTZGNibHh1YVc1MFpYSm1ZV05sSUVsamIyNVNaVzVrWlhKR2RXNWpUM0IwYVc5dUlIdGNiaUFnYVdOdmJsTnBlbVU2SUZ0dWRXMWlaWElzSUc1MWJXSmxjbDFjYmlBZ2FXTnZia052Ykc5eU9pQnpkSEpwYm1kY2JuMWNiblI1Y0dVZ1NXTnZibEpsYm1SbGNrWjFibU1nUFNBb1hHNGdJR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU3hjYmlBZ2NHRnlZVzF6T2lCSlkyOXVVbVZ1WkdWeVJuVnVZMDl3ZEdsdmJseHVLU0E5UGlCemRISnBibWRjYmx4dVpYaHdiM0owSUdsdWRHVnlabUZqWlNCTllYSnJaWEp6VEdGNVpYSlBjSFJwYjI1eklIdGNiaUFnY21WdVpHVnlWSGx3WlRvZ1RXRnlhMlZ5YzB4aGVXVnlVbVZ1WkdWeVZIbHdaVnh1SUNCeVpXNWtaWEpRYjJsdWRFTnZiRzl5Vkhsd1pUODZJRTFoY210bGNuTk1ZWGxsY2xKbGJtUmxjbEJ2YVc1MFEyOXNiM0pVZVhCbFhHNGdJR2xqYjI1VWVYQmxQem9nVFdGeWEyVnljMHhoZVdWeVNXTnZibFI1Y0dWY2JseHVJQ0JwWTI5dVNXMWhaMlZWY213L09pQnpkSEpwYm1kY2JpQWdhV052YmxOcGVtVS9PaUJiYm5WdFltVnlMQ0J1ZFcxaVpYSmRYRzRnSUdsamIyNURiR0Z6Y3o4NklITjBjbWx1WjF4dUlDQnBZMjl1Vlc1cFkyOWtaVDg2SUhOMGNtbHVaMXh1SUNCcFkyOXVVM2x0WW05c1B6b2djM1J5YVc1blhHNGdJR2xqYjI1RGIyeHZjajg2SUhOMGNtbHVaMXh1SUNCcFkyOXVRVzVqYUc5eVB6b2dXMjUxYldKbGNpd2diblZ0WW1WeVhWeHVJQ0JwWTI5dVVtVnVaR1Z5WlhJL09pQkpZMjl1VW1WdVpHVnlSblZ1WTF4dVhHNGdJQzh2SU9hWXIrV1FwdWlCbXVXUWlPKzhqT1M4bU9XRmlPZTZwK21ybU9TNmppQnlaVzVrWlhKVWVYQmxJRDA5SUhCdmFXNTBYRzRnSUdselEyeDFjM1JsY2o4NklHSnZiMnhsWVc1Y2JseHVJQ0F2S2lvZ2NHOXdkWEFnNWJHVjU2UzY1YTJYNXE2MUlDb3ZYRzRnSUhCdmNIVndRWFIwY2o4NklITjBjbWx1WnlCOElIc2diR0ZpWld3NklITjBjbWx1WnpzZ2RtRnNkV1U2SUdGdWVTQjlYRzRnSUM4cUtpQjBiMjlzZEdsd0lPV3hsZWVrdXVXdGwrYXV0U0FxTDF4dUlDQjBiMjlzZEdsd1FYUjBjajg2SUhOMGNtbHVaMXh1WEc0Z0lHOXdZV05wZEhrL09pQnVkVzFpWlhKY2JseHVJQ0F2S2lvZzVZaUc1cTYxNXJpeTVwK1Q1N3VmNks2aDVhMlg1cTYxSUNvdlhHNGdJSE5sWjIxbGJuUmxaRUYwZEhJL09pQnpkSEpwYm1kY2JpQWdjMlZuYldWdWRHVmtRMjlzYjNKelB6b2djM1J5YVc1blcxMWNibHh1SUNCb1pXRjBUM0IwYVc5dWN6ODZJRTFoY210bGNuTklaV0YwVEdGNVpYSlBjSFJwYjI1elhHNGdJR05zZFhOMFpYSlBjSFJwYjI1elB6b2dUQzVOWVhKclpYSnpRMngxYzNSbGNrOXdkR2x2Ym5OY2JuMWNibHh1THlvcUlPaTlyT1dNbHVTNHV1ZURyZVdLbStXYnZ1ZWFoQ0J2Y0hScGIyNXpJQ292WEc1bGVIQnZjblFnYVc1MFpYSm1ZV05sSUUxaGNtdGxjbk5JWldGMFRHRjVaWEpQY0hScGIyNXpJR1Y0ZEdWdVpITWdUQzVJWldGMFRHRjVaWEpQY0hScGIyNXpJSHRjYmlBZ1pHbHRaVzV6YVc5dVFYUjBjajg2SUhOMGNtbHVaMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJOWVhKclpYSnpUR0Y1WlhJZ2UxeHVJQ0J3ZFdKc2FXTWdiV0Z3T2lCTUxrMWhjRnh1SUNCd2RXSnNhV01nWkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRYRzRnSUhCMVlteHBZeUJ2Y0hScGIyNXpPaUJOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6WEc0Z0lIQjFZbXhwWXlCamFHRnVibVZzUm5WdVl6b2dRMmhoYm01bGJFWjFibU5jYmx4dUlDQndkV0pzYVdNZ2RIbHdaVG9nYzNSeWFXNW5YRzVjYmlBZ2NISnZkR1ZqZEdWa0lHMWhjbXRsY25NNklFMWhjbXRsY2x0ZFhHNWNiaUFnY0hKdmRHVmpkR1ZrSUdadlkzVnpaV1JOWVhKclpYSTZJRTFoY210bGNseHVJQ0J3Y205MFpXTjBaV1FnYUc5MlpYSmxaRTFoY210bGNqb2dUV0Z5YTJWeVhHNGdJQzhxS2lEcG5JRG9wb0hsc1pYbnBMcm5tb1RtbEw3bHBLZm5tb1RsbTc3bW9JY2dLaTljYmlBZ2NISnZkR1ZqZEdWa0lHWnZZM1Z6WldSRWFYTndiR0Y1VFdGeWEyVnlPaUJOWVhKclpYSmNiaUFnY0hKdmRHVmpkR1ZrSUcxaGNtdGxja3hoZVdWeU9pQk1Ma05oYm5aaGMwbGpiMjVNWVhsbGNseHVYRzRnSUhCeWIzUmxZM1JsWkNCMmFYTnBZbXhsT2lCaWIyOXNaV0Z1WEc0Z0lIQnliM1JsWTNSbFpDQnNZWGxsY2pwY2JpQWdJQ0I4SUV3dVEyRnVkbUZ6U1dOdmJreGhlV1Z5WEc0Z0lDQWdmQ0JNTGtobFlYUk1ZWGxsY2x4dUlDQWdJSHdnVEM1TllYSnJaWEp6UTJ4MWMzUmxjbHh1SUNBZ0lId2dUQzVNWVhsbGNrZHliM1Z3WEc0Z0lIQnliM1JsWTNSbFpDQjZiMjl0VTNSaGNuUkRZam9nS0NrZ1BUNGdkbTlwWkZ4dUlDQndjbTkwWldOMFpXUWdlbTl2YlVWdVpFTmlPaUFvS1NBOVBpQjJiMmxrWEc0Z0lIQnlhWFpoZEdVZ2FHVmhkRXhoZVdWeU9pQk1Ma2hsWVhSTVlYbGxjbHh1SUNCd2NtbDJZWFJsSUdOc2RYTjBaWEpNWVhsbGNqb2dUQzVOWVhKclpYSnpRMngxYzNSbGNseHVYRzRnSUhCeWFYWmhkR1VnYzJWbmJXVnVkR1ZrVFdsdU9pQnVkVzFpWlhKY2JpQWdjSEpwZG1GMFpTQnpaV2R0Wlc1MFpXUlRkR1Z3T2lCdWRXMWlaWEpjYmlBZ2NISnBkbUYwWlNCa1pXWmhkV3gwVDNCMGFXOXVjem9nVFdGeWEyVnljMHhoZVdWeVQzQjBhVzl1YzF4dUlDQmpiMjV6ZEhKMVkzUnZjaWhjYmlBZ0lDQnRZWEE2SUV3dVRXRndMRnh1SUNBZ0lHUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFN4Y2JpQWdJQ0J2Y0hScGIyNXpPaUJOWVhKclpYSnpUR0Y1WlhKUGNIUnBiMjV6TEZ4dUlDQWdJR05vWVc1dVpXeEdkVzVqT2lCRGFHRnVibVZzUm5WdVkxeHVJQ0FwSUh0Y2JpQWdJQ0IwYUdsekxtUmxabUYxYkhSUGNIUnBiMjV6SUQwZ2UxeHVJQ0FnSUNBZ2NtVnVaR1Z5Vkhsd1pUb2dKM0J2YVc1MEp5eGNiaUFnSUNBZ0lISmxibVJsY2xCdmFXNTBRMjlzYjNKVWVYQmxPaUFuYzJsdVoyeGxKeXhjYmlBZ0lDQWdJR2xqYjI1VWVYQmxPaUFuZFc1cFkyOWtaU2NzWEc0Z0lDQWdJQ0JwWTI5dVUybDZaVG9nV3pJd0xDQXlNRjBzWEc0Z0lDQWdJQ0JwWTI5dVEyeGhjM002SUNkcFkyOXVabTl1ZENjc1hHNGdJQ0FnSUNCcFkyOXVRMjlzYjNJNklDY2pNek00T0VaR0p5eGNiaUFnSUNBZ0lHbGpiMjVCYm1Ob2IzSTZJRnN4TUN3Z01qQmRMRnh1SUNBZ0lDQWdjRzl3ZFhCQmRIUnlPaUI3SUd4aFltVnNPaUFuNVpDTjU2ZXdKeXdnZG1Gc2RXVTZJQ2R1WVcxbEp5QjlMRnh1SUNBZ0lDQWdkRzl2YkhScGNFRjBkSEk2SUNkdVlXMWxKeXhjYmlBZ0lDQWdJSE5sWjIxbGJuUmxaRU52Ykc5eWN6b2dXeWNqTXpNNE9FWkdKMTBzWEc0Z0lDQWdJQ0JwYzBOc2RYTjBaWEk2SUdaaGJITmxMRnh1SUNBZ0lDQWdhR1ZoZEU5d2RHbHZibk02SUh0Y2JpQWdJQ0FnSUNBZ2JXRjRPaUF4TEZ4dUlDQWdJQ0FnSUNCdGFXNVBjR0ZqYVhSNU9pQXhMRnh1SUNBZ0lDQWdmU3hjYmlBZ0lDQjlYRzRnSUNBZ2RHaHBjeTUwZVhCbElEMGdKMjFoY210bGNpZGNiaUFnSUNCMGFHbHpMbTFoY0NBOUlHMWhjRnh1SUNBZ0lIUm9hWE11WkdGMFlVeHBjM1FnUFNCa1lYUmhUR2x6ZEZ4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5OY2JpQWdJQ0IwYUdsekxtTm9ZVzV1Wld4R2RXNWpJRDBnWTJoaGJtNWxiRVoxYm1OY2JseHVJQ0FnSUhSb2FYTXVkbWx6YVdKc1pTQTlJSFJ5ZFdWY2JpQWdJQ0IwYUdsekxteGhlV1Z5SUQwZ2JuVnNiRnh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRTFoY210bGNpQTlJRzUxYkd4Y2JpQWdJQ0IwYUdsekxtaHZkbVZ5WldSTllYSnJaWElnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2lBOUlHNTFiR3hjYmlBZ0lDQjBhR2x6TG0xaGNtdGxjbk1nUFNCYlhWeHVJQ0FnSUhSb2FYTXViV0Z5YTJWeVRHRjVaWElnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTVvWldGMFRHRjVaWElnUFNCdWRXeHNYRzRnSUNBZ2RHaHBjeTVqYkhWemRHVnlUR0Y1WlhJZ1BTQnVkV3hzWEc1Y2JpQWdJQ0IwYUdsekxuTmxaMjFsYm5SbFpFMXBiaUE5SUVsdVptbHVhWFI1WEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSVGRHVndJRDBnTVZ4dVhHNGdJQ0FnZEdocGN5NTZiMjl0VTNSaGNuUkRZaUE5SUhSb2FYTXVYM3B2YjIxVGRHRnlkRU5pTG1KcGJtUW9kR2hwY3lsY2JpQWdJQ0IwYUdsekxucHZiMjFGYm1SRFlpQTlJSFJvYVhNdVgzcHZiMjFGYm1SRFlpNWlhVzVrS0hSb2FYTXBYRzRnSUgxY2JpQWdjSFZpYkdsaklHUnlZWGNvYjNCMGFXOXVjejg2SUUxaGNtdGxjbk5NWVhsbGNrOXdkR2x2Ym5NcElIdGNiaUFnSUNCMGFHbHpMblpwYzJsaWJHVWdQU0IwY25WbFhHNGdJQ0FnZEdocGN5NXBibWwwVDNCMGFXOXVjeWh2Y0hScGIyNXpLVnh1SUNBZ0lIUm9hWE11YVc1cGRFMWhjbXRsY25Nb0tWeHVJQ0FnSUhSb2FYTXVhVzVwZEVWMlpXNTBjeWdwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y21Wa2NtRjNLQ2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjbVZrY21GM0tDa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NTJhWE5wWW14bEtTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSb2FYTXViR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YkdGNVpYSXVjbVZ0YjNabEtDbGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5RGt2SmpsaFlqbGlLVG1scTBnYVhORGJIVnpkR1Z5WEc0Z0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXBjME5zZFhOMFpYSWdKaVlnZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2xSNWNHVWdQVDA5SUNkd2IybHVkQ2NwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViR0Y1WlhJZ1BTQjBhR2x6TG1OdmJtWnBaME5zZFhOMFpYSk1ZWGxsY2lncFhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSE4zYVhSamFDQW9kR2hwY3k1dmNIUnBiMjV6TG5KbGJtUmxjbFI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdZMkZ6WlNBbmNHOXBiblFuT2lCN1hHNGdJQ0FnSUNBZ0lDQWdkR2hwY3k1c1lYbGxjaUE5SUhSb2FYTXVZMjl1Wm1sblRXRnlhMlZ5VEdGNVpYSW9LVnh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWTJGelpTQW5ZMngxYzNSbGNpYzZJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbXhoZVdWeUlEMGdkR2hwY3k1amIyNW1hV2REYkhWemRHVnlUR0Y1WlhJb0tWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdZMkZ6WlNBbmFHVmhkQ2M2SUh0Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG14aGVXVnlJRDBnZEdocGN5NWpiMjVtYVdkSVpXRjBUR0Y1WlhJb0tWeHVJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdaR1ZtWVhWc2REb2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhnY21WdVpHVnlWSGx3WlNEa3VJM21sSy9taklGY0lpUjdkR2hwY3k1dmNIUnBiMjV6TG5KbGJtUmxjbFI1Y0dWOVhDSmdLVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11YldGd0xtRmtaRXhoZVdWeUtIUm9hWE11YkdGNVpYSXBYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTmNiaUFnZlZ4dUlDQndkV0pzYVdNZ2MyVjBSR0YwWVNoa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcxYlhTa2dlMXh1SUNBZ0lIUm9hWE11WkdGMFlVeHBjM1FnUFNCa1lYUmhYRzRnSUgxY2JpQWdjSFZpYkdsaklITmxkRTl3ZEdsdmJuTW9iM0IwYVc5dWN6b2dUV0Z5YTJWeWMweGhlV1Z5VDNCMGFXOXVjeXdnY21Wa2NtRjNJRDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk1nUFNCUFltcGxZM1F1WVhOemFXZHVLSFJvYVhNdWIzQjBhVzl1Y3l3Z2IzQjBhVzl1Y3lsY2JpQWdJQ0JwWmlBb2NtVmtjbUYzS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkpsWkhKaGR5Z3BYRzRnSUNBZ2ZWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCbWFYUkNiM1Z1WkhNb0tTQjdYRzRnSUNBZ2RHaHBjeTV0WVhBdVptbDBRbTkxYm1SektIUm9hWE11WjJWMFFtOTFibVJ6S0Nrc0lIc2djR0ZrWkdsdVp6b2dXekl3TENBeU1GMGdmU2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMlYwUW05MWJtUnpLQ2s2SUV3dVRHRjBURzVuUW05MWJtUnpSWGh3Y21WemMybHZiaUI3WEc0Z0lDQWdhV1lnS0hSb2FYTXViV0Z5YTJWeWN5NXNaVzVuZEdnZ1BEMGdNQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWJXRndMbWRsZEVKdmRXNWtjeWdwWEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTFoY210bGNuTXViV0Z3S0Z4dUlDQWdJQ0FnS0cxaGNtdGxjaWtnUFQ1Y2JpQWdJQ0FnSUNBZ1cyMWhjbXRsY2k1blpYUk1ZWFJNYm1jb0tTNXNZWFFzSUcxaGNtdGxjaTVuWlhSTVlYUk1ibWNvS1M1c2JtZGRJR0Z6SUZ0dWRXMWlaWElzSUc1MWJXSmxjbDFjYmlBZ0lDQXBYRzRnSUgxY2JpQWdjSFZpYkdsaklHUmxjM1J5YjNrb0tTQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdWJHRjVaWElwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViV0Z3TG5KbGJXOTJaVXhoZVdWeUtIUm9hWE11YkdGNVpYSXBYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVUV0Z5YTJWeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG0xaGNDNXlaVzF2ZG1WTVlYbGxjaWgwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VFdGeWEyVnlLVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbTFoY0M1dlptWW9KM3B2YjIxemRHRnlkQ2NzSUhSb2FYTXVlbTl2YlZOMFlYSjBRMklwWEc0Z0lDQWdkR2hwY3k1dFlYQXViMlptS0NkNmIyOXRaVzVrSnl3Z2RHaHBjeTU2YjI5dFJXNWtRMklwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSFJ2WjJkc1pWWnBjMmxpYkdVb2RtbHphV0pzWlRvZ1ltOXZiR1ZoYmlrZ2UxeHVJQ0FnSUhSb2FYTXVkbWx6YVdKc1pTQTlJSFpwYzJsaWJHVmNiaUFnSUNCcFppQW9JWFJvYVhNdWJHRjVaWElwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVZV1JrVEdGNVpYSW9kR2hwY3k1c1lYbGxjaWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJQ0FnZEdocGN5NXRZWEF1Y21WdGIzWmxUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NIVmliR2xqSUdOb1lXNW5aVU52Ykc5eUtHTnZiRzl5T2lCemRISnBibWNwSUh0Y2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NdWFXTnZia052Ykc5eUlEMGdZMjlzYjNKY2JpQWdJQ0IwYUdsekxuSmxaSEpoZHlncFhHNGdJSDFjYmlBZ2NIVmliR2xqSUdOb1lXNW5aVWxqYjI0b2FXTnZibFZ1YVdOdlpHVTZJSE4wY21sdVp5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeTVwWTI5dVZXNXBZMjlrWlNBOUlHbGpiMjVWYm1samIyUmxYRzRnSUNBZ2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNGdJSEIxWW14cFl5QndhWFJqYUNocFpEb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV0WVhKclpYSnpMbVp2Y2tWaFkyZ29LRzFoY210bGNpa2dQVDRnZTF4dUlDQWdJQ0FnYVdZZ0tHMWhjbXRsY2k1blpYUkVZWFJoS0NrdWFXUWdQVDA5SUdsa0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXRnlhMlZ5UTJ4cFkydElZVzVrYkdWeUtHMWhjbXRsY2l3Z2RISjFaU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndjbTkwWldOMFpXUWdYM3B2YjIxVGRHRnlkRU5pS0NrZ2UxeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1MmFYTnBZbXhsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVjYmlBZ0lDQjlYRzRnSUNBZ2FXWWdLSFJvYVhNdWRIbHdaU0E5UFQwZ0oyMWhjbXRsY2ljcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWNtVnVaR1Z5Vkhsd1pTQTlQVDBnSjNCdmFXNTBKeUFtSmlBaGRHaHBjeTV2Y0hScGIyNXpMbWx6UTJ4MWMzUmxjaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbTFoY0M1eVpXMXZkbVZNWVhsbGNpaDBhR2x6TG0xaGNtdGxja3hoZVdWeUtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbTFoY210bGNreGhlV1Z5S1Z4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWDNwdmIyMUZibVJEWWlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxuUjVjR1VnUFQwOUlDZHRZWEpyWlhJbktTQjdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2xSNWNHVWdQVDA5SUNkd2IybHVkQ2NnSmlZZ0lYUm9hWE11YjNCMGFXOXVjeTVwYzBOc2RYTjBaWElwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTV0WVhKclpYSk1ZWGxsY2lsY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVZV1JrVEdGNVpYSW9kR2hwY3k1dFlYSnJaWEpNWVhsbGNpbGNiaUFnSUNCOVhHNGdJSDFjYmlBZ0x5b3FJT2E0c3VhZmsrUzR1dWFWbytlQ3VlV2J2aUFxTDF4dUlDQndjbTkwWldOMFpXUWdZMjl1Wm1sblRXRnlhMlZ5VEdGNVpYSW9LU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXViV0Z5YTJWeVRHRjVaWElwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViV0Z5YTJWeVRHRjVaWEl1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlYRzRnSUNBZ1kyOXVjM1FnWTJGdWRtRnpTV052Ymt4aGVXVnlJRDBnVEM1allXNTJZWE5KWTI5dVRHRjVaWElvZTMwcExtRmtaRlJ2S0hSb2FYTXViV0Z3S1Z4dUlDQWdJQzh2SU9hM3UrV0tvT2VDdWVXSHUrUzZpK1M3dGx4dUlDQWdJR05oYm5aaGMwbGpiMjVNWVhsbGNpNWhaR1JQYmtOc2FXTnJUR2x6ZEdWdVpYSW9LRjhzSUZ0N0lHUmhkR0U2SUcxaGNtdGxjaUI5WFNrZ1BUNGdlMXh1SUNBZ0lDQWdkR2hwY3k1dFlYSnJaWEpEYkdsamEwaGhibVJzWlhJb2JXRnlhMlZ5SUdGeklFMWhjbXRsY2lsY2JpQWdJQ0I5S1Z4dUlDQWdJQzh2SU9hM3UrV0tvQ0JvYjNabGNpRGt1b3ZrdTdaY2JpQWdJQ0JqWVc1MllYTkpZMjl1VEdGNVpYSXVZV1JrVDI1SWIzWmxja3hwYzNSbGJtVnlLQ2hmTENCYmV5QmtZWFJoT2lCdFlYSnJaWElnZlYwcElEMCtJSHRjYmlBZ0lDQWdJQzh2SU9TNWkrV0pqZWFjaVNCb2IzWmxjaURubW9UbGhiUHBsNjBnZEc5dmJIUnBjRnh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVhRzkyWlhKbFpFMWhjbXRsY2lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1odmRtVnlaV1JOWVhKclpYSXVZMnh2YzJWVWIyOXNkR2x3S0NsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhSb2FYTXVhRzkyWlhKbFpFMWhjbXRsY2lBOUlHMWhjbXRsY2lCaGN5Qk5ZWEpyWlhKY2JseHVJQ0FnSUNBZ2FXWWdLSFJvYVhNdWFHOTJaWEpsWkUxaGNtdGxjaTVuWlhSVWIyOXNkR2x3S0NrcElIdGNiaUFnSUNBZ0lDQWdMeThnNWFhQzVwNmM1YmV5NTd1UDZLNis1NzJ1SUhSdmIyeDBhWEFnNTV1MDVvNmw1YkdWNTZTNklIUnZiMngwYVhCY2JpQWdJQ0FnSUNBZ2RHaHBjeTVvYjNabGNtVmtUV0Z5YTJWeUxtOXdaVzVVYjI5c2RHbHdLQ2xjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQzh2SU9XUXB1V0ltZWU3a2VXdW1pQjBiMjlzZEdsd0lPVzV0dVd4bGVla3VseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxuUnZiMngwYVhCQmRIUnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVvYjNabGNtVmtUV0Z5YTJWeUxtSnBibVJVYjI5c2RHbHdLRnh1SUNBZ0lDQWdJQ0FnSUNBZ0p5Y2dLeUIwYUdsekxtaHZkbVZ5WldSTllYSnJaWEl1WjJWMFJHRjBZU2dwVzNSb2FYTXViM0IwYVc5dWN5NTBiMjlzZEdsd1FYUjBjbDFjYmlBZ0lDQWdJQ0FnSUNBcFhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOUtWeHVJQ0FnSUdOaGJuWmhjMGxqYjI1TVlYbGxjaTVoWkdSTllYSnJaWEp6S0hSb2FYTXViV0Z5YTJWeWN5bGNibHh1SUNBZ0lDOHZJT2lubytXR3MrV0luZWFzb2VhNHN1YWZrK1M0amVXSHV1V2J2dWFnaCttWHJ1bWltRnh1SUNBZ0lIUm9hWE11YldGd0xuQmhibFJ2S0hSb2FYTXViV0Z3TG1kbGRFTmxiblJsY2lncEtWeHVYRzRnSUNBZ2RHaHBjeTV0WVhKclpYSk1ZWGxsY2lBOUlHTmhiblpoYzBsamIyNU1ZWGxsY2x4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG0xaGNtdGxja3hoZVdWeVhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lHZGxkRlJ2YjJ4VWFYQkRiMjUwWlc1MEtHUmhkR0U2SUVSaGRHRk1hWE4wU1hSbGJTa2dlMXh1SUNBZ0lISmxkSFZ5YmlBbkp5QXJJR1JoZEdGYmRHaHBjeTV2Y0hScGIyNXpMblJ2YjJ4MGFYQkJkSFJ5WFZ4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCcGJtbDBUM0IwYVc5dWN5aHZjSFJwYjI1ek9pQk5ZWEpyWlhKelRHRjVaWEpQY0hScGIyNXpLU0I3WEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z2RHaHBjeTVrWldaaGRXeDBUM0IwYVc5dWN5d2dkR2hwY3k1dmNIUnBiMjV6TENCdmNIUnBiMjV6S1Z4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCcGJtbDBUV0Z5YTJWeWN5Z3BJSHRjYmlBZ0lDQXZMeURudkpQbHJaZ2djMlZuYldWdWRDRG5tN2psaGJQbWxiRG1qYTVjYmlBZ0lDQjBhR2x6TG1OaFkyaGxVMlZuYldWdWRGQmhjbUZ0Y3lncFhHNGdJQ0FnZEdocGN5NXRZWEpyWlhKeklEMGdXMTFjYmlBZ0lDQjBhR2x6TG1SaGRHRk1hWE4wTG1admNrVmhZMmdvS0dSaGRHRXBJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR3hoZVdWeUlEMGdUQzVuWlc5S1UwOU9LR1JoZEdFdVoyVnZiV1YwY25rcExtZGxkRXhoZVdWeWN5Z3BXekJkWEc1Y2JpQWdJQ0FnSUdOdmJuTjBJRzFoY210bGNpQTlJRzVsZHlCTllYSnJaWElvWEc0Z0lDQWdJQ0FnSUZ0Y2JpQWdJQ0FnSUNBZ0lDQW9iR0Y1WlhJZ1lYTWdUQzVOWVhKclpYSXBMbWRsZEV4aGRFeHVaeWdwTG14aGRDeGNiaUFnSUNBZ0lDQWdJQ0FvYkdGNVpYSWdZWE1nVEM1TllYSnJaWElwTG1kbGRFeGhkRXh1WnlncExteHVaeXhjYmlBZ0lDQWdJQ0FnWFN4Y2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xqYjI0NklIUm9hWE11WjJWMFRXRnlhMlZ5U1dOdmJpaGtZWFJoS1N4Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0tWeHVYRzRnSUNBZ0lDQXZMeURsc0libm03amxoYlBsZ0x6bnU1SGxycHJsaUxBZ2JXRnlhMlZ5NUxpS1hHNGdJQ0FnSUNCdFlYSnJaWEl1YzJWMFJHRjBZU2hrWVhSaEtWeHVJQ0FnSUNBZ2RHaHBjeTV0WVhKclpYSnpMbkIxYzJnb2JXRnlhMlZ5S1Z4dUlDQWdJSDBwWEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdsdWFYUkZkbVZ1ZEhNb0tTQjdYRzRnSUNBZ2RHaHBjeTV0WVhBdWIyNG9KM3B2YjIxemRHRnlkQ2NzSUhSb2FYTXVlbTl2YlZOMFlYSjBRMklwWEc0Z0lDQWdkR2hwY3k1dFlYQXViMjRvSjNwdmIyMWxibVFuTENCMGFHbHpMbnB2YjIxRmJtUkRZaWxjYmlBZ0lDQjBhR2x6TG0xaGNDNXZiaWduWTI5dWRHVjRkRzFsYm5VbkxDQmpiMjV6YjJ4bExteHZaeWxjYmlBZ2ZWeHVJQ0F2THlEbHBJVG5rSVlnYldGeWEyVnlJT2VDdWVXSHUrUzZpK1M3dGx4dUlDQndjbWwyWVhSbElHMWhjbXRsY2tOc2FXTnJTR0Z1Wkd4bGNpaHRZWEpyWlhJNklFMWhjbXRsY2l3Z1ptbDBRbTkxYm1SelB6b2dZbTl2YkdWaGJpa2dlMXh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRTFoY210bGNpQTlJRzFoY210bGNseHVJQ0FnSUM4dklPV0lvT21acE9XSmplUzRnT1M0cXVhVXZ1V2twK1didnVhZ2gxeHVJQ0FnSUdsbUlDaDBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVUV0Z5YTJWeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVUV0Z5YTJWeUxuSmxiVzkyWlVaeWIyMG9kR2hwY3k1dFlYQXBYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklPZVVuK2FJa09XOWsrV0pqZWFVdnVXa3ArV2J2dWFnaDF4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxOWVhKclpYSWdQU0J1WlhjZ1RXRnlhMlZ5S0cxaGNtdGxjaTVuWlhSTVlYUk1ibWNvS1N3Z2UxeHVJQ0FnSUNBZ2FXTnZiam9nZEdocGN5NW5aWFJNWVhKblpYSk5ZWEpyWlhKSlkyOXVLRzFoY210bGNpNW5aWFJFWVhSaEtDa3BMRnh1SUNBZ0lIMHBYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2k1aFpHUlVieWgwYUdsekxtMWhjQ2xjYmx4dUlDQWdJSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxOWVhKclpYSmNiaUFnSUNBZ0lDNWlhVzVrVUc5d2RYQW9kR2hwY3k1blpYUlFiM0IxY0VOdmJuUmxiblFvYldGeWEyVnlMbWRsZEVSaGRHRW9LU2twWEc0Z0lDQWdJQ0F1YjNCbGJsQnZjSFZ3S0NsY2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VFdGeWEyVnlMbTl1S0Nkd2IzQjFjR05zYjNObEp5d2dLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVVMWhjbXRsY2k1eVpXMXZkbVVvS1Z4dUlDQWdJSDBwWEc0Z0lDQWdiV0Z5YTJWeUxtTnNiM05sVkc5dmJIUnBjQ2dwWEc1Y2JpQWdJQ0IwYUdsekxtMWhjQzV3WVc1VWJ5aDBhR2x6TG1adlkzVnpaV1JOWVhKclpYSXVaMlYwVEdGMFRHNW5LQ2twWEc0Z0lDQWdhV1lnS0dacGRFSnZkVzVrY3lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdVptbDBRbTkxYm1SektHMWhjbXRsY2k1blpYUk1ZWFJNYm1jb0tTNTBiMEp2ZFc1a2N5Z3hNQ2twWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11WTJoaGJtNWxiRVoxYm1Nb0oyOXVMV05zYVdOckxXMWhjbXRsY2ljc0lHMWhjbXRsY2lsY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdOdmJtWnBaME5zZFhOMFpYSk1ZWGxsY2lncElIdGNiaUFnSUNBdkx5RGxzWlhucExyb2dacmxrSWpsbTc3bHNZSmNiaUFnSUNCcFppQW9kR2hwY3k1amJIVnpkR1Z5VEdGNVpYSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyeDFjM1JsY2t4aGVXVnlMbkpsYlc5MlpTZ3BYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVZMngxYzNSbGNreGhlV1Z5SUQwZ1RDNXRZWEpyWlhKRGJIVnpkR1Z5UjNKdmRYQW9lMXh1SUNBZ0lDQWdhV052YmtOeVpXRjBaVVoxYm1OMGFXOXVPaUIwYUdsekxtbGpiMjVEY21WaGRHVkdkVzVqZEdsdmJpNWlhVzVrS0hSb2FYTXBMRnh1SUNBZ0lIMHBYRzRnSUNBZ2RHaHBjeTVqYkhWemRHVnlUR0Y1WlhJdVlXUmtUR0Y1WlhKektGeHVJQ0FnSUNBZ2RHaHBjeTV0WVhKclpYSnpMbTFoY0Nnb2JTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J0WVhKclpYSWdQU0J1WlhjZ1RXRnlhMlZ5S0cwdVoyVjBUR0YwVEc1bktDa3NJSHRjYmlBZ0lDQWdJQ0FnSUNCcFkyOXVPaUIwYUdsekxtZGxkRTFoY210bGNrbGpiMjRvYlM1blpYUkVZWFJoS0NrcExGeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0J0WVhKclpYSXVjMlYwUkdGMFlTaHRMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJQ0FnYldGeWEyVnlMbUpwYm1SVWIyOXNkR2x3S0NjbklDc2diV0Z5YTJWeUxtZGxkRVJoZEdFb0tWdDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjRUYwZEhKZEtWeHVJQ0FnSUNBZ0lDQnRZWEpyWlhJdVltbHVaRkJ2Y0hWd0tIUm9hWE11WjJWMFVHOXdkWEJEYjI1MFpXNTBLRzFoY210bGNpNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdJQ0J0WVhKclpYSXViMjRvSjJOc2FXTnJKeXdnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXViV0Z5YTJWeVEyeHBZMnRJWVc1a2JHVnlLRzFoY210bGNpbGNiaUFnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzFoY210bGNseHVJQ0FnSUNBZ2ZTbGNiaUFnSUNBcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVkyeDFjM1JsY2t4aGVXVnlYRzRnSUgxY2JseHVJQ0F2S2lvZzVyaXk1cCtUNUxpNjU0T3Q1WXFiNVp1K0lDb3ZYRzRnSUhCeWFYWmhkR1VnWTI5dVptbG5TR1ZoZEV4aGVXVnlLQ2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbWhsWVhSTVlYbGxjaWtnZTF4dUlDQWdJQ0FnZEdocGN5NW9aV0YwVEdGNVpYSXVjbVZ0YjNabEtDbGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXRZWEpyWlhKekxtWnZja1ZoWTJnb0tHMWhjbXRsY2lrZ1BUNGdlMXh1SUNBZ0lDQWdZMjl1YzNRZ2JHRjBURzVuSUQwZ2JXRnlhMlZ5TG1kbGRFeGhkRXh1WnlncFhHNGdJQ0FnSUNCamIyNXpkQ0JrYVcxbGJuTnBiMjVCZEhSeUlEMWNiaUFnSUNBZ0lDQWdkR2hwY3k1dmNIUnBiMjV6TG1obFlYUlBjSFJwYjI1eklDWW1JSFJvYVhNdWIzQjBhVzl1Y3k1b1pXRjBUM0IwYVc5dWN5NWthVzFsYm5OcGIyNUJkSFJ5WEc0Z0lDQWdJQ0JzWlhRZ1lXeDBJRDFjYmlBZ0lDQWdJQ0FnS0dScGJXVnVjMmx2YmtGMGRISWdKaVlnYldGeWEyVnlMbWRsZEVSaGRHRW9LVnRrYVcxbGJuTnBiMjVCZEhSeVhTa2dmSHhjYmlBZ0lDQWdJQ0FnZEdocGN5NXZjSFJwYjI1ekxtaGxZWFJQY0hScGIyNXpMbTFoZUZ4dUlDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCaGJIUWdJVDA5SUNkdWRXMWlaWEluS1NCN1hHNGdJQ0FnSUNBZ0lHRnNkQ0E5SUhSb2FYTXViM0IwYVc5dWN5NW9aV0YwVDNCMGFXOXVjeTV0WVhoY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUcxaGNtdGxjaTV6WlhSTVlYUk1ibWNvVEM1c1lYUk1ibWNvYkdGMFRHNW5MbXhoZEN3Z2JHRjBURzVuTG14dVp5d2dZV3gwS1NsY2JpQWdJQ0I5S1Z4dUlDQWdJSFJvYVhNdWFHVmhkRXhoZVdWeUlEMGdUQzVvWldGMFRHRjVaWElvWEc0Z0lDQWdJQ0IwYUdsekxtMWhjbXRsY25NdWJXRndLQ2hwZENrZ1BUNGdhWFF1WjJWMFRHRjBURzVuS0NrcExGeHVJQ0FnSUNBZ0x5OGdWRTlFVHpvZzVMMi81NVNvSUcxbGNtZGxRMjl1Wm1sbklPZXVnT1dNbGx4dUlDQWdJQ0FnVDJKcVpXTjBMbUZ6YzJsbmJpaDdmU3dnZEdocGN5NXZjSFJwYjI1ekxtaGxZWFJQY0hScGIyNXpMQ0I3SUcxcGJrOXdZV05wZEhrNklERWdmU2xjYmlBZ0lDQXBYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVhR1ZoZEV4aGVXVnlYRzRnSUgxY2JseHVJQ0J3Y21sMllYUmxJR2RsZEV4aGNtZGxjazFoY210bGNrbGpiMjRvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVgyZGxkRTFoY210bGNrbGpiMjRvWkdGMFlTd2dkSEoxWlNsY2JpQWdmVnh1WEc0Z0lIQnlhWFpoZEdVZ1oyVjBUV0Z5YTJWeVNXTnZiaWhrWVhSaE9pQkVZWFJoVEdsemRFbDBaVzBwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1ZloyVjBUV0Z5YTJWeVNXTnZiaWhrWVhSaExDQm1ZV3h6WlNsY2JpQWdmVnh1WEc0Z0lDOHFLaURvanJmbGo1Ymx2WlBsaVkwZ2JXRnlhMlZ5SU9tY2dPaW1nZVd4bGVla3V1ZWFoQ0JwWTI5dUlDb3ZYRzRnSUhCeWFYWmhkR1VnWDJkbGRFMWhjbXRsY2tsamIyNG9YRzRnSUNBZ1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdExGeHVJQ0FnSUdselRHRnlaMlZ5T2lCaWIyOXNaV0Z1WEc0Z0lDazZJRXd1U1dOdmJpQjhJRXd1UkdsMlNXTnZiaUI3WEc0Z0lDQWdZMjl1YzNRZ2FXTnZibE5wZW1VZ1BTQjBhR2x6TG05d2RHbHZibk11YVdOdmJsTnBlbVZjYmlBZ0lDQmpiMjV6ZENCcFkyOXVRVzVqYUc5eUlEMGdkR2hwY3k1dmNIUnBiMjV6TG1samIyNUJibU5vYjNKY2JpQWdJQ0JqYjI1emRDQnNZWEpuWlhKSlkyOXVVMmw2WlNBOUlGdHBZMjl1VTJsNlpWc3dYU0FxSURFdU5Td2dhV052YmxOcGVtVmJNVjBnS2lBeExqVmRJR0Z6SUZ0Y2JpQWdJQ0FnSUc1MWJXSmxjaXhjYmlBZ0lDQWdJRzUxYldKbGNseHVJQ0FnSUYxY2JpQWdJQ0JqYjI1emRDQnNZWEpuWlhKSlkyOXVRVzVqYUc5eUlEMGdXMmxqYjI1QmJtTm9iM0piTUYwZ0tpQXhMalVzSUdsamIyNUJibU5vYjNKYk1WMGdLaUF4TGpWZElHRnpJRnRjYmlBZ0lDQWdJRzUxYldKbGNpeGNiaUFnSUNBZ0lHNTFiV0psY2x4dUlDQWdJRjFjYmx4dUlDQWdJR052Ym5OMElHbGpiMjVEYjJ4dmNpQTlJSFJvYVhNdWIzQjBhVzl1Y3k1cFkyOXVRMjlzYjNKY2JseHVJQ0FnSUhOM2FYUmphQ0FvZEdocGN5NXZjSFJwYjI1ekxtbGpiMjVVZVhCbEtTQjdYRzRnSUNBZ0lDQmpZWE5sSUNkcGJXRm5aU2M2SUh0Y2JpQWdJQ0FnSUNBZ0x5OGdjbVYwZFhKdUlFd3VhV052YmloN1hHNGdJQ0FnSUNBZ0lDOHZJQ0FnYVdOdmJsVnliRG9nZEdocGN5NXZjSFJwYjI1ekxtbGpiMjVKYldGblpWVnliQ3hjYmlBZ0lDQWdJQ0FnTHk4Z0lDQnBZMjl1VTJsNlpUb2dhWE5NWVhKblpYSWdQeUJzWVhKblpYSkpZMjl1VTJsNlpTQTZJR2xqYjI1VGFYcGxMRnh1SUNBZ0lDQWdJQ0F2THlBZ0lHbGpiMjVCYm1Ob2IzSXNYRzRnSUNBZ0lDQWdJQzh2SUgwcFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCallYTmxJQ2RtYjI1MFgyTnNZWE56SnpwY2JpQWdJQ0FnSUdOaGMyVWdKM041YldKdmJDYzZYRzRnSUNBZ0lDQmpZWE5sSUNkMWJtbGpiMlJsSnpvZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1RDNWthWFpKWTI5dUtIdGNiaUFnSUNBZ0lDQWdJQ0JvZEcxc09pQjBhR2x6TG1kbGRFTjFjM1J2YlVsamIyNUlWRTFNS0dSaGRHRXNJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbGpiMjVUYVhwbE9pQnBjMHhoY21kbGNpQS9JR3hoY21kbGNrbGpiMjVUYVhwbElEb2dhV052YmxOcGVtVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCcFkyOXVRMjlzYjNJc1hHNGdJQ0FnSUNBZ0lDQWdmU2tzWEc0Z0lDQWdJQ0FnSUNBZ1kyeGhjM05PWVcxbE9pQnBjMHhoY21kbGNpQS9JQ2RzWVhKblpTMWthWFl0YVdOdmJpMXRZWEpyWlhJbklEb2dKeWNzWEc0Z0lDQWdJQ0FnSUNBZ2FXTnZibE5wZW1VNklHbHpUR0Z5WjJWeUlEOGdiR0Z5WjJWeVNXTnZibE5wZW1VZ09pQnBZMjl1VTJsNlpTeGNiaUFnSUNBZ0lDQWdJQ0JwWTI5dVFXNWphRzl5T2lCcGMweGhjbWRsY2lBL0lHeGhjbWRsY2tsamIyNUJibU5vYjNJZ09pQnBZMjl1UVc1amFHOXlMRnh1SUNBZ0lDQWdJQ0FnSUhSdmIyeDBhWEJCYm1Ob2IzSTZJR2x6VEdGeVoyVnlYRzRnSUNBZ0lDQWdJQ0FnSUNBL0lGc3dMQ0F0YkdGeVoyVnlTV052YmtGdVkyaHZjbHN4WFNBdklESmRYRzRnSUNBZ0lDQWdJQ0FnSUNBNklGc3dMQ0F0YVdOdmJrRnVZMmh2Y2xzeFhTQXZJREpkTEZ4dUlDQWdJQ0FnSUNBZ0lIQnZjSFZ3UVc1amFHOXlPaUJwYzB4aGNtZGxjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1B5QmJNQ3dnTFd4aGNtZGxja2xqYjI1QmJtTm9iM0piTVYwZ0x5QXlYVnh1SUNBZ0lDQWdJQ0FnSUNBZ09pQmJNQ3dnTFdsamIyNUJibU5vYjNKYk1WMGdMeUF5WFN4Y2JpQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHUmxabUYxYkhRNklIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtHQnlaVzVrWlhKVWVYQmxJT1M0amVpRHZlUzR1aUFrZTNSb2FYTXViM0IwYVc5dWN5NXBZMjl1Vkhsd1pYMWdLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndjbWwyWVhSbElHZGxkRU4xYzNSdmJVbGpiMjVJVkUxTUtGeHVJQ0FnSUdSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlN4Y2JpQWdJQ0J2Y0hScGIyNXpQem9nU1dOdmJsSmxibVJsY2taMWJtTlBjSFJwYjI1Y2JpQWdLVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXZjSFJwYjI1ekxtbGpiMjVTWlc1a1pYSmxjaWtnZTF4dUlDQWdJQ0FnYjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUhSb2FYTXViM0IwYVc5dWN5d2diM0IwYVc5dWN5bGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTl3ZEdsdmJuTXVhV052YmxKbGJtUmxjbVZ5S0dSaGRHRXNJRzl3ZEdsdmJuTXBYRzRnSUNBZ2ZWeHVJQ0FnSUhOM2FYUmphQ0FvZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2xCdmFXNTBRMjlzYjNKVWVYQmxLU0I3WEc0Z0lDQWdJQ0JqWVhObElDZHphVzVuYkdVbk9pQjdYRzRnSUNBZ0lDQWdJSE4zYVhSamFDQW9kR2hwY3k1dmNIUnBiMjV6TG1samIyNVVlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdMeThnNUwyLzU1U29JR05zWVhOelhHNGdJQ0FnSUNBZ0lDQWdZMkZ6WlNBblptOXVkRjlqYkdGemN5YzZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cElHTnNZWE56UFZ3aUpIdDBhR2x6TG05d2RHbHZibk11YVdOdmJrTnNZWE56ZlZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1U5WENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZiRzl5T2lBa2UyOXdkR2x2Ym5NdWFXTnZia052Ykc5eWZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Ym5RdGMybDZaVG9nSkh0dmNIUnBiMjV6TG1samIyNVRhWHBsV3pCZGZYQjRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJR0JjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdMeThnNUwyLzU1U29JSE4yWjF4dUlDQWdJQ0FnSUNBZ0lHTmhjMlVnSjNONWJXSnZiQ2M2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHpkbWNnWTJ4aGMzTTlYQ0pwWTI5dUxYTjViV0p2YkZ3aUlHRnlhV0V0YUdsa1pHVnVQVndpZEhKMVpWd2lQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHgxYzJVZ2VHeHBibXM2YUhKbFpqMWNJaVI3ZEdocGN5NXZjSFJwYjI1ekxtbGpiMjVUZVcxaWIyeDlYQ0lnTHo1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5emRtYytYRzRnSUNBZ0lDQWdJQ0FnSUNCZ1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUM4dklPUzl2K2VVcUNCMWJtbGpiMlJsWEc0Z0lDQWdJQ0FnSUNBZ1kyRnpaU0FuZFc1cFkyOWtaU2M2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMnhoYzNNOVhDSWtlM1JvYVhNdWIzQjBhVzl1Y3k1cFkyOXVRMnhoYzNOOVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpkSGxzWlQxY0lseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjlzYjNJNklDUjdiM0IwYVc5dWN5NXBZMjl1UTI5c2IzSjlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05dWRDMXphWHBsT2lBa2UyOXdkR2x2Ym5NdWFXTnZibE5wZW1WYk1GMTljSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0pIdDBhR2x6TG05d2RHbHZibk11YVdOdmJsVnVhV052WkdWOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dmFUNWNiaUFnSUNBZ0lDQWdJQ0FnSUdCY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lHTmhjMlVnSjNObFoyMWxiblJsWkNjNklIdGNiaUFnSUNBZ0lDQWdjM2RwZEdOb0lDaDBhR2x6TG05d2RHbHZibk11YVdOdmJsUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMeURrdmIvbmxLZ2dZMnhoYzNOY2JpQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkbWIyNTBYMk5zWVhOekp6b2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnUEdsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamJHRnpjejFjSWlSN2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1RGJHRnpjMzFjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxQVndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyeHZjam9nSkh0MGFHbHpMbWRsZEZObFoyMWxiblJsWkUxaGNtdGxja052Ykc5eUtHUmhkR0VwZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZiblF0YzJsNlpUb2dKSHR2Y0hScGIyNXpMbWxqYjI1VGFYcGxXekJkZlhCNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGd2lYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lHQmNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0x5OGc1TDIvNTVTb0lITjJaMXh1SUNBZ0lDQWdJQ0FnSUdOaGMyVWdKM041YldKdmJDYzZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4emRtY2dZMnhoYzNNOVhDSnBZMjl1TFhONWJXSnZiRndpSUdGeWFXRXRhR2xrWkdWdVBWd2lkSEoxWlZ3aVBseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeDFjMlVnZUd4cGJtczZhSEpsWmoxY0lpUjdkR2hwY3k1dmNIUnBiMjV6TG1samIyNVRlVzFpYjJ4OVhDSWdMejVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzl6ZG1jK1hHNGdJQ0FnSUNBZ0lDQWdJQ0JnWEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQzh2SU9TOXYrZVVxQ0IxYm1samIyUmxYRzRnSUNBZ0lDQWdJQ0FnWTJGelpTQW5kVzVwWTI5a1pTYzZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUR4cFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyeGhjM005WENJa2UzUm9hWE11YjNCMGFXOXVjeTVwWTI5dVEyeGhjM045WENKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemRIbHNaVDFjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0k2SUNSN2RHaHBjeTVuWlhSVFpXZHRaVzUwWldSTllYSnJaWEpEYjJ4dmNpaGtZWFJoS1gwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iMjUwTFhOcGVtVTZJQ1I3YjNCMGFXOXVjeTVwWTI5dVUybDZaVnN3WFgxd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRDVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FrZTNSb2FYTXViM0IwYVc5dWN5NXBZMjl1Vlc1cFkyOWtaWDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdQQzlwUGx4dUlDQWdJQ0FnSUNBZ0lDQWdZRnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmljbVZoYTF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWkdWbVlYVnNkRG9nZTF4dUlDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWEc0Z0lDQWdJQ0FnSUNBZ1lISmxibVJsY2xCdmFXNTBRMjlzYjNKVWVYQmxJT1M0amVhVXIrYU1nVndpSkh0MGFHbHpMbTl3ZEdsdmJuTXVjbVZ1WkdWeVVHOXBiblJEYjJ4dmNsUjVjR1Y5WENKZ1hHNGdJQ0FnSUNBZ0lDbGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCallXTm9aVk5sWjIxbGJuUlFZWEpoYlhNb0tTQjdYRzRnSUNBZ1kyOXVjM1FnYzJWbmJXVnVkR1ZrVEdWdVozUm9JRDBnZEdocGN5NXZjSFJwYjI1ekxuTmxaMjFsYm5SbFpFTnZiRzl5Y3k1c1pXNW5kR2hjYmlBZ0lDQnNaWFFnYldGNFZtRnNJRDBnTFVsdVptbHVhWFI1WEc0Z0lDQWdiR1YwSUcxcGJsWmhiQ0E5SUVsdVptbHVhWFI1WEc0Z0lDQWdabTl5SUNoamIyNXpkQ0JrWVhSaElHOW1JSFJvYVhNdVpHRjBZVXhwYzNRcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJDQTlJR1JoZEdGYmRHaHBjeTV2Y0hScGIyNXpMbk5sWjIxbGJuUmxaRUYwZEhKZFhHNGdJQ0FnSUNCdFlYaFdZV3dnUFNCTllYUm9MbTFoZUNodFlYaFdZV3dzSUhaaGJDbGNiaUFnSUNBZ0lHMXBibFpoYkNBOUlFMWhkR2d1YldsdUtHMXBibFpoYkN3Z2RtRnNLVnh1SUNBZ0lIMWNiaUFnSUNCamIyNXpkQ0J6ZEdWd0lEMGdLRzFoZUZaaGJDQXRJRzFwYmxaaGJDQXJJREVwSUM4Z2MyVm5iV1Z1ZEdWa1RHVnVaM1JvWEc0Z0lDQWdkR2hwY3k1elpXZHRaVzUwWldSTmFXNGdQU0J0YVc1V1lXeGNiaUFnSUNCMGFHbHpMbk5sWjIxbGJuUmxaRk4wWlhBZ1BTQnpkR1Z3WEc0Z0lIMWNiaUFnY0hKcGRtRjBaU0JuWlhSVFpXZHRaVzUwWldSTllYSnJaWEpEYjJ4dmNpaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBPaUJ6ZEhKcGJtY2dlMXh1SUNBZ0lHTnZibk4wSUhaaGJDQTlJR1JoZEdGYmRHaHBjeTV2Y0hScGIyNXpMbk5sWjIxbGJuUmxaRUYwZEhKZFhHNGdJQ0FnWTI5dWMzUWdZMjlzYjNJZ1BTQjBhR2x6TG05d2RHbHZibk11YzJWbmJXVnVkR1ZrUTI5c2IzSnpXMXh1SUNBZ0lDQWdjR0Z5YzJWSmJuUW9KeWNnS3lBb2RtRnNJQzBnZEdocGN5NXpaV2R0Wlc1MFpXUk5hVzRwSUM4Z2RHaHBjeTV6WldkdFpXNTBaV1JUZEdWd0xDQXhNQ2xjYmlBZ0lDQmRYRzRnSUNBZ2NtVjBkWEp1SUdOdmJHOXlYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJRYjNCMWNFTnZiblJsYm5Rb1pHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdEtTQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z0p5ZGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCMGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdBa2UzUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEo5T2lBa2UyUmhkR0ZiZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNsMTlZRnh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElnUFQwOUlDZHZZbXBsWTNRbktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1lDUjdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2k1c1lXSmxiSDA2SUNSN1hHNGdJQ0FnSUNBZ0lHUmhkR0ZiZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpNTJZV3gxWlYxY2JpQWdJQ0FnSUgxZ1hHNGdJQ0FnZlZ4dUlDQjlYRzRnSUhCeWFYWmhkR1VnYVdOdmJrTnlaV0YwWlVaMWJtTjBhVzl1S0dOc2RYTjBaWEk2SUV3dVRXRnlhMlZ5YzBOc2RYTjBaWElwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdUQzVrYVhaSlkyOXVLSHRjYmlBZ0lDQWdJR2gwYld3NklHQmNiaUFnSUNBZ0lDQThaR2wyWEc0Z0lDQWdJQ0FnSUhOMGVXeGxQVndpWEc0Z0lDQWdJQ0FnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTlRBbE8xeHVJQ0FnSUNBZ0lDQWdJSEJ2YzJsMGFXOXVPaUJ5Wld4aGRHbDJaVHRjYmlBZ0lDQWdJQ0FnSUNCM2FXUjBhRG9nTlRCd2VEdGNiaUFnSUNBZ0lDQWdJQ0JvWldsbmFIUTZJRFV3Y0hnN1hHNGdJQ0FnSUNBZ0lGd2lYRzRnSUNBZ0lDQWdJRDVjYmlBZ0lDQWdJQ0FnUEdScGRseHVJQ0FnSUNBZ0lDQWdJSE4wZVd4bFBWd2lYRzRnSUNBZ0lDQWdJQ0FnSUNCaWIzSmtaWEl0Y21Ga2FYVnpPaUExTUNVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpWVdOclozSnZkVzVrT2lBa2UyeHBaMmgwWlc0b2RHaHBjeTV2Y0hScGIyNXpMbWxqYjI1RGIyeHZjaWw5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdkMmxrZEdnNklEVXdjSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm9aV2xuYUhRNklEVXdjSGc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZjR0ZqYVhSNU9pQXdMamM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndiM05wZEdsdmJqb2dZV0p6YjJ4MWRHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGIzQTZJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaV1owT2lBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJK1hHNGdJQ0FnSUNBZ0lDQWdQR1JwZGx4dUlDQWdJQ0FnSUNBZ0lDQWdjM1I1YkdVOVhDSmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1ltOXlaR1Z5TFhKaFpHbDFjem9nTlRBbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCaVlXTnJaM0p2ZFc1a09pQWtlM1JvYVhNdWIzQjBhVzl1Y3k1cFkyOXVRMjlzYjNKOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCM2FXUjBhRG9nTXpKd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2FHVnBaMmgwT2lBek1uQjRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnRZWEpuYVc0NklEbHdlRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lQbHh1SUNBZ0lDQWdJQ0FnSUR3dlpHbDJQbHh1SUNBZ0lDQWdJQ0E4TDJScGRqNWNiaUFnSUNBZ0lDQWdQR1JwZGx4dUlDQWdJQ0FnSUNBZ0lITjBlV3hsUFZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwWlhoMExXRnNhV2R1T2lCalpXNTBaWEk3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNhVzVsTFdobGFXZG9kRG9nTXpCd2VEdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCdmMybDBhVzl1T2lCaFluTnZiSFYwWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ2Y0RvZ09YQjRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVm1kRG9nT1hCNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZDJsa2RHZzZJRE15Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JvWldsbmFIUTZJRE15Y0hnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjJ4dmNqb2dkMmhwZEdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjI1MExYTnBlbVU2SURFMGNIZzdYRzRnSUNBZ0lDQWdJQ0FnWENKY2JpQWdJQ0FnSUNBZ0lDQStYRzRnSUNBZ0lDQWdJQ0FnSkh0amJIVnpkR1Z5TG1kbGRFTm9hV3hrUTI5MWJuUW9LWDFjYmlBZ0lDQWdJQ0FnUEM5a2FYWStYRzRnSUNBZ0lDQWdQQzlrYVhZK1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ1lDeGNiaUFnSUNBZ0lHbGpiMjVUYVhwbE9pQmJOREFzSURRd1hTeGNiaUFnSUNCOUtWeHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdVRzlzZVdkdmJpQm1jbTl0SUNjdUwxQnZiSGxuYjI0blhHNXBiWEJ2Y25RZ1VHOXNlV2R2Ym5OTVlYbGxjaXdnZXlCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1eklIMGdabkp2YlNBbkxpOVFiMng1WjI5dWMweGhlV1Z5SjF4dWFXMXdiM0owSUhzZ1JHRjBZVXhwYzNSSmRHVnRMQ0JEYUdGdWJtVnNSblZ1WXlCOUlHWnliMjBnSnk0dUwyUmxabWx1YVhScGIyNXpKMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkhjbWxrYzB4aGVXVnlJR1Y0ZEdWdVpITWdVRzlzZVdkdmJuTk1ZWGxsY2lCN1hHNGdJSEJ5YVhaaGRHVWdjSEp2Y0UxaGVFeGxibWQwYURvZ2JuVnRZbVZ5WEc0Z0lHTnZibk4wY25WamRHOXlLRnh1SUNBZ0lHMWhjRG9nVEM1TllYQXNYRzRnSUNBZ1pHRjBZVXhwYzNRNklFUmhkR0ZNYVhOMFNYUmxiVnRkTEZ4dUlDQWdJRzl3ZEdsdmJuTTZJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJSE4xY0dWeUtHMWhjQ3dnWkdGMFlVeHBjM1FzSUc5d2RHbHZibk1zSUdOb1lXNXVaV3hHZFc1aktWeHVJQ0FnSUhSb2FYTXVjSEp2Y0UxaGVFeGxibWQwYUNBOUlDMHhYRzRnSUgxY2JpQWdjSFZpYkdsaklISmxaSEpoZHlncElIdGNiaUFnSUNCcFppQW9JWFJvYVhNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwYUdsekxteGhlV1Z5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbXhoZVdWeUxuSmxiVzkyWlNncFhHNGdJQ0FnZlZ4dUlDQWdJSFJvYVhNdWJHRjVaWElnUFNCMGFHbHpMbU52Ym1acFowZHlhV1JNWVhsbGNpZ3BYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNBdkx5QjBiMjlzZEdsd0lPYWNpZVdQcitpRHZlbWNnT2ltZ2VlYnRPYU9wZVd4bGVla3V1KzhqT21jZ09pbWdlV2NxQ0J3YjJ4NVoyOXVJT2EzdStXS29PV0lzT1djc09XYnZ1UzRpdVM1aStXUWp1YUpqZVdQcitTN3BlKzhqT2FKZ09TN3BlbWNnT2ltZ2VXN3R1aS9uK2l1dnVlOXJseHVJQ0FnSUhSb2FYTXVZMjl1Wm1sblZHOXZiSFJwY0NncFhHNGdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUI3WEc0Z0lDQWdJQ0IwYUdsekxucHZiMjFJWVc1a2JHVnlLQ2xjYmlBZ0lDQjlMQ0F5TURBcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhOY2JpQWdmVnh1SUNCd2RXSnNhV01nZEc5bloyeGxWRzl2YkhScGNDaDJhWE5wWW14bE9pQmliMjlzWldGdUtTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjeTVtYjNKRllXTm9LQ2h3YjJ4NVoyOXVLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9jRzlzZVdkdmJpNW5aWFJVYjI5c2RHbHdLQ2twSUh0Y2JpQWdJQ0FnSUNBZ2NHOXNlV2R2Ymk1blpYUlViMjlzZEdsd0tDa3VjMlYwVDNCaFkybDBlU2gyYVhOcFlteGxJRDhnTVNBNklEQXBYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQndjbTkwWldOMFpXUWdhVzVwZEVWMlpXNTBLQ2tnZTF4dUlDQWdJSFJvYVhNdWJXRndMbTl1S0NkNmIyOXRKeXdnZEdocGN5NTZiMjl0U0dGdVpHeGxjaTVpYVc1a0tIUm9hWE1wS1Z4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWTI5dVptbG5WRzl2YkhScGNDZ3BJSHRjYmlBZ0lDQjBhR2x6TG5CeWIzQk5ZWGhNWlc1bmRHZ2dQU0IwYUdsekxtZGxkRkJ5YjNCTllYaE1aVzVuZEdnb0tWeHVJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11ZEc5dmJIUnBjRUYwZEhJcElIdGNiaUFnSUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQndiMng1WjI5dUxtSnBibVJVYjI5c2RHbHdLSFJvYVhNdVoyVjBWRzl2YkZScGNFTnZiblJsYm5Rb2NHOXNlV2R2Ymk1blpYUkVZWFJoS0NrcExDQjdYRzRnSUNBZ0lDQWdJQ0FnY0dWeWJXRnVaVzUwT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUdScGNtVmpkR2x2YmpvZ0oyTmxiblJsY2ljc1hHNGdJQ0FnSUNBZ0lIMHBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndjbWwyWVhSbElHTnZibVpwWjBkeWFXUk1ZWGxsY2lncElIdGNiaUFnSUNCMGFHbHpMbkJ2YkhsbmIyNU1ZWGxsY2lBOUlFd3ViR0Y1WlhKSGNtOTFjQ2dwWEc0Z0lDQWdkR2hwY3k1d2IyeDVaMjl1Y3lBOUlIUm9hWE11Y0c5c2VXZHZibk11YldGd0tDaHdiMng1WjI5dUtTQTlQaUI3WEc0Z0lDQWdJQ0JzWlhRZ1kyOXNiM0lnUFNCMGFHbHpMbTl3ZEdsdmJuTXVZMjlzYjNKY2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11Y21WdVpHVnlVRzlzZVdkdmJrTnZiRzl5Vkhsd1pTQTlQVDBnSjNObFoyMWxiblJsWkNjcElIdGNiaUFnSUNBZ0lDQWdZMjlzYjNJZ1BTQjBhR2x6TG1kbGRGTmxaMjFsYm5SbFpGQnZiSGxuYjI1RGIyeHZjaWh3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR052Ym5OMElHOXdkR2x2Ym5NNklFd3VVRzlzZVd4cGJtVlBjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloN2ZTd2dkR2hwY3k1dmNIUnBiMjV6TENCN1hHNGdJQ0FnSUNBZ0lHTnZiRzl5TEZ4dUlDQWdJQ0FnZlNsY2JpQWdJQ0FnSUM4dklPbUhqZWFXc09XNmxPZVVxQ0J2Y0hScGIyNXpYRzRnSUNBZ0lDQmpiMjV6ZENCdVpYZFFiMng1WjI5dUlEMGdibVYzSUZCdmJIbG5iMjRvY0c5c2VXZHZiaTVuWlhSTVlYUk1ibWR6S0Nrc0lHOXdkR2x2Ym5NcFhHNGdJQ0FnSUNCdVpYZFFiMng1WjI5dUxuTmxkRVJoZEdFb2NHOXNlV2R2Ymk1blpYUkVZWFJoS0NrcFhHNGdJQ0FnSUNCdVpYZFFiMng1WjI5dUxtOXVLQ2RqYkdsamF5Y3NJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdMeThnZEdocGN5NXdiMng1WjI5dVEyeHBZMnRJWVc1a2JHVnlLSEJ2YkhsbmIyNHBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1VHOXNlV2R2Ymk1aWFXNWtVRzl3ZFhBb2RHaHBjeTVuWlhSUWIzQjFjRU52Ym5SbGJuUW9ibVYzVUc5c2VXZHZiaTVuWlhSRVlYUmhLQ2twS1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnY21WMGRYSnVJRzVsZDFCdmJIbG5iMjVjYmlBZ0lDQjlLVnh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZibk11Wm05eVJXRmphQ2dvY0c5c2VXZHZiaWtnUFQ0Z2UxeHVJQ0FnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVUR0Y1WlhJdVlXUmtUR0Y1WlhJb2NHOXNlV2R2YmlsY2JpQWdJQ0I5S1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5CdmJIbG5iMjVNWVhsbGNseHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ2VtOXZiVWhoYm1Sc1pYSW9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2NHOXNlV2R2YmlBOUlIUm9hWE11Y0c5c2VXZHZibk5iTUYxY2JpQWdJQ0JwWmlBb0lYQnZiSGxuYjI0cElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymx4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5SdloyZHNaVlJ2YjJ4MGFYQW9YRzRnSUNBZ0lDQjBhR2x6TG1kbGRGSmxZM1JoYm1kc1pWZHBaSFJvS0hCdmJIbG5iMjRwSUQ1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVuWlhSVWIyOXNkR2x3VFdGNFYybGtkR2dvZEdocGN5NXdjbTl3VFdGNFRHVnVaM1JvS1Z4dUlDQWdJQ2xjYmlBZ2ZWeHVJQ0J3Y21sMllYUmxJR2RsZEZKbFkzUmhibWRzWlZkcFpIUm9LSEJ2YkhsbmIyNDZJRkJ2YkhsbmIyNHBJSHRjYmlBZ0lDQnlaWFIxY200Z0tGeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdWJHRjBURzVuVkc5TVlYbGxjbEJ2YVc1MEtIQnZiSGxuYjI0dVoyVjBRbTkxYm1SektDa3VaMlYwVG05eWRHaEZZWE4wS0NrcExuZ2dMVnh1SUNBZ0lDQWdkR2hwY3k1dFlYQXViR0YwVEc1blZHOU1ZWGxsY2xCdmFXNTBLSEJ2YkhsbmIyNHVaMlYwUW05MWJtUnpLQ2t1WjJWMFUyOTFkR2hYWlhOMEtDa3BMbmhjYmlBZ0lDQXBYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJVYjI5c2RHbHdUV0Y0VjJsa2RHZ29kR1Y0ZEV4bGJtZDBhRG9nYm5WdFltVnlLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUmxlSFJNWlc1bmRHZ2dLaUF4TWlBcklERTBYRzRnSUgxY2JpQWdjSEpwZG1GMFpTQm5aWFJRY205d1RXRjRUR1Z1WjNSb0tDa2dlMXh1SUNBZ0lHTnZibk4wSUhCeWIzQWdQVnh1SUNBZ0lDQWdkSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElnUFQwOUlDZHpkSEpwYm1jblhHNGdJQ0FnSUNBZ0lEOGdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2x4dUlDQWdJQ0FnSUNBNklIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEl1ZG1Gc2RXVmNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NXdiMng1WjI5dWMxeHVJQ0FnSUNBZ0xtMWhjQ2dvY0c5c2VXZHZiaWtnUFQ0Z1lDUjdjRzlzZVdkdmJpNW5aWFJFWVhSaEtDbGJjSEp2Y0YxOVlDNXNaVzVuZEdncFhHNGdJQ0FnSUNBdWNtVmtkV05sS0Nod2NtVjJMQ0JqZFhKeUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJOWVhSb0xtMWhlQ2h3Y21WMkxDQmpkWEp5S1Z4dUlDQWdJQ0FnZlN3Z01DbGNiaUFnZlZ4dWZWeHVJaXdpYVcxd2IzSjBJSHNnUkdGMFlVeHBjM1JKZEdWdElIMGdabkp2YlNBbkxpNHZaR1ZtYVc1cGRHbHZibk1uWEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ2YkhsbmIyNGdaWGgwWlc1a2N5Qk1MbEJ2YkhsbmIyNGdlMXh1SUNBdkx5QjBjMnhwYm5RNlpHbHpZV0pzWlMxdVpYaDBMV3hwYm1VNmRtRnlhV0ZpYkdVdGJtRnRaVnh1SUNCd2NtbDJZWFJsSUY5ZlpHRjBZVG9nUkdGMFlVeHBjM1JKZEdWdFhHNGdJR052Ym5OMGNuVmpkRzl5S0Z4dUlDQWdJR3hoZEd4dVozTTZYRzRnSUNBZ0lDQjhJRXd1VEdGMFRHNW5SWGh3Y21WemMybHZibHRkWEc0Z0lDQWdJQ0I4SUV3dVRHRjBURzVuUlhod2NtVnpjMmx2Ymx0ZFcxMWNiaUFnSUNBZ0lId2dUQzVNWVhSTWJtZEZlSEJ5WlhOemFXOXVXMTFiWFZ0ZExGeHVJQ0FnSUc5d2RHbHZibk0vT2lCTUxsQnZiSGxzYVc1bFQzQjBhVzl1YzF4dUlDQXBJSHRjYmlBZ0lDQnpkWEJsY2loc1lYUnNibWR6TENCdmNIUnBiMjV6S1Z4dUlDQjlYRzRnSUhCMVlteHBZeUJ6WlhSRVlYUmhLR1JoZEdFNklFUmhkR0ZNYVhOMFNYUmxiU2tnZTF4dUlDQWdJSFJvYVhNdVgxOWtZWFJoSUQwZ1pHRjBZVnh1SUNCOVhHNGdJSEIxWW14cFl5Qm5aWFJFWVhSaEtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbDlmWkdGMFlWeHVJQ0I5WEc1OVhHNGlMQ0pwYlhCdmNuUWdleUJzYVdkb2RHVnVMQ0JrWVhKclpXNGdmU0JtY205dElDY3VMaTkxZEdsc2N5OXBibVJsZUNkY2JtbHRjRzl5ZENCN0lFUmhkR0ZNYVhOMFNYUmxiU3dnUTJoaGJtNWxiRVoxYm1NZ2ZTQm1jbTl0SUNjdUxpOWtaV1pwYm1sMGFXOXVjeWRjYm1sdGNHOXlkQ0JRYjJ4NVoyOXVJR1p5YjIwZ0p5NHZVRzlzZVdkdmJpZGNibHh1THlvcUlPYTRzdWFmayttaW5PaUpzdWFndCtXOGp5RGxqWlhvaWJKODVZaUc1cTYxSUNvdlhHNTBlWEJsSUZCdmJIbG5iMjVNWVhsbGNsSmxibVJsY2tOdmJHOXlWSGx3WlNBOUlDZHphVzVuYkdVbklId2dKM05sWjIxbGJuUmxaQ2RjYm5SNWNHVWdRMjlzYjNKTmIyUmxJRDBnSjJSaGNtdGxiaWNnZkNBbmJHbG5hSFJsYmljZ2ZDQW5ibTl5YldGc0oxeHVaWGh3YjNKMElHbHVkR1Z5Wm1GalpTQlFiMng1WjI5dVRHRjVaWEpQY0hScGIyNXpJR1Y0ZEdWdVpITWdUQzVRYjJ4NWJHbHVaVTl3ZEdsdmJuTWdlMXh1SUNCeVpXNWtaWEpRYjJ4NVoyOXVRMjlzYjNKVWVYQmxPaUJRYjJ4NVoyOXVUR0Y1WlhKU1pXNWtaWEpEYjJ4dmNsUjVjR1ZjYmx4dUlDQXZLaW9nY0c5d2RYQWc1YkdWNTZTNjVhMlg1cTYxSUNvdlhHNGdJSEJ2Y0hWd1FYUjBjajg2SUhOMGNtbHVaeUI4SUhzZ2JHRmlaV3c2SUhOMGNtbHVaenNnZG1Gc2RXVTZJR0Z1ZVNCOVhHNGdJQzhxS2lCMGIyOXNkR2x3SU9XeGxlZWt1dVd0bCthdXRTQXFMMXh1SUNCMGIyOXNkR2x3UVhSMGNqODZJSE4wY21sdVoxeHVYRzRnSUc5d1lXTnBkSGsvT2lCdWRXMWlaWEpjYmx4dUlDQXZLaW9nNVlpRzVxNjE1cml5NXArVDU3dWY2SzZoNWEyWDVxNjFJQ292WEc0Z0lITmxaMjFsYm5SbFpFRjBkSEkvT2lCemRISnBibWRjYmlBZ2MyVm5iV1Z1ZEdWa1EyOXNiM0p6UHpvZ2MzUnlhVzVuVzExY2JuMWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmJIbG5iMjV6VEdGNVpYSWdlMXh1SUNCd2RXSnNhV01nZEhsd1pUb2djM1J5YVc1blhHNWNiaUFnY0hKdmRHVmpkR1ZrSUhacGMybGliR1U2SUdKdmIyeGxZVzVjYmlBZ2NISnZkR1ZqZEdWa0lHeGhlV1Z5T2lCTUxreGhlV1Z5UjNKdmRYQmNibHh1SUNCd2NtOTBaV04wWldRZ2JXRndPaUJNTGsxaGNGeHVJQ0J3Y205MFpXTjBaV1FnWkdGMFlVeHBjM1E2SUVSaGRHRk1hWE4wU1hSbGJWdGRYRzRnSUhCeWIzUmxZM1JsWkNCdmNIUnBiMjV6T2lCUWIyeDVaMjl1VEdGNVpYSlBjSFJwYjI1elhHNGdJSEJ5YjNSbFkzUmxaQ0JqYUdGdWJtVnNSblZ1WXpvZ1EyaGhibTVsYkVaMWJtTmNiaUFnY0hKdmRHVmpkR1ZrSUhObFoyMWxiblJsWkUxcGJqb2diblZ0WW1WeVhHNGdJSEJ5YjNSbFkzUmxaQ0J6WldkdFpXNTBaV1JUZEdWd09pQnVkVzFpWlhKY2JpQWdjSEp2ZEdWamRHVmtJSEJ2YkhsbmIyNXpPaUJRYjJ4NVoyOXVXMTFjYmlBZ2NISnZkR1ZqZEdWa0lHWnZZM1Z6WldSUWIyeDVaMjl1T2lCUWIyeDVaMjl1WEc0Z0lIQnliM1JsWTNSbFpDQm1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbG5iMjQ2SUZCdmJIbG5iMjVjYmlBZ2NISnZkR1ZqZEdWa0lIQnZiSGxuYjI1TVlYbGxjam9nVEM1TVlYbGxja2R5YjNWd1hHNWNiaUFnWTI5dWMzUnlkV04wYjNJb1hHNGdJQ0FnYldGd09pQk1MazFoY0N4Y2JpQWdJQ0JrWVhSaFRHbHpkRG9nUkdGMFlVeHBjM1JKZEdWdFcxMHNYRzRnSUNBZ2IzQjBhVzl1Y3pvZ1VHOXNlV2R2Ymt4aGVXVnlUM0IwYVc5dWN5eGNiaUFnSUNCamFHRnVibVZzUm5WdVl6b2dRMmhoYm01bGJFWjFibU5jYmlBZ0tTQjdYRzRnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRTl3ZEdsdmJuTTZJRkJ2YkhsbmIyNU1ZWGxsY2s5d2RHbHZibk1nUFNCN1hHNGdJQ0FnSUNCd2IzQjFjRUYwZEhJNklIc2diR0ZpWld3NklDZmxrSTNucDdBbkxDQjJZV3gxWlRvZ0oyNWhiV1VuSUgwc1hHNGdJQ0FnSUNCMGIyOXNkR2x3UVhSMGNqb2dKMjVoYldVbkxGeHVJQ0FnSUNBZ1kyOXNiM0k2SUNjak16TTRPRVpHSnl4Y2JpQWdJQ0FnSUdacGJHdzZJSFJ5ZFdVc1hHNGdJQ0FnSUNCbWFXeHNRMjlzYjNJNklDY2pNek00T0VaR0p5eGNiaUFnSUNBZ0lIZGxhV2RvZERvZ01TeGNiaUFnSUNBZ0lHOXdZV05wZEhrNklERXNYRzRnSUNBZ0lDQm1hV3hzVDNCaFkybDBlVG9nTUM0MUxGeHVJQ0FnSUNBZ2NtVnVaR1Z5VUc5c2VXZHZia052Ykc5eVZIbHdaVG9nSjNOcGJtZHNaU2NzWEc0Z0lDQWdJQ0J6WldkdFpXNTBaV1JEYjJ4dmNuTTZJRnNuSXpNek9EaEdSaWRkTEZ4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5SNWNHVWdQU0FuY0c5c2VXZHZiaWRjYmlBZ0lDQjBhR2x6TG0xaGNDQTlJRzFoY0Z4dUlDQWdJSFJvYVhNdVpHRjBZVXhwYzNRZ1BTQmtZWFJoVEdsemRGeHVJQ0FnSUhSb2FYTXViM0IwYVc5dWN5QTlJRTlpYW1WamRDNWhjM05wWjI0b2UzMHNJR1JsWm1GMWJIUlBjSFJwYjI1ekxDQnZjSFJwYjI1ektWeHVJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1nUFNCamFHRnVibVZzUm5WdVkxeHVYRzRnSUNBZ2RHaHBjeTUyYVhOcFlteGxJRDBnZEhKMVpWeHVJQ0FnSUhSb2FYTXVjRzlzZVdkdmJuTWdQU0JiWFZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQWdQU0F4WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrVUc5c2VXZHZiaUE5SUc1MWJHeGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV2R2YmlBOUlHNTFiR3hjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaSEpoZHlodmNIUnBiMjV6UHpvZ1VHOXNlV2R2Ymt4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YVc1cGRFOXdkR2x2Ym5Nb2IzQjBhVzl1Y3lsY2JpQWdJQ0IwYUdsekxtbHVhWFJRYjJ4NVoyOXVjeWdwWEc0Z0lDQWdkR2hwY3k1cGJtbDBSWFpsYm5Rb0tWeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxuSmxaSEpoZHlncFhHNGdJSDFjYmlBZ2NIVmliR2xqSUhKbFpISmhkeWdwSUh0Y2JpQWdJQ0JwWmlBb0lYUm9hWE11ZG1semFXSnNaU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ2ZWeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxteGhlV1Z5TG5KbGJXOTJaU2dwWEc0Z0lDQWdmVnh1SUNBZ0lIUm9hWE11YkdGNVpYSWdQU0IwYUdsekxtTnZibVpwWjFCdmJIbG5iMjVNWVhsbGNpZ3BYRzRnSUNBZ2RHaHBjeTV0WVhBdVlXUmtUR0Y1WlhJb2RHaHBjeTVzWVhsbGNpbGNiaUFnSUNCeVpYUjFjbTRnZEdocGMxeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCbWFYUkNiM1Z1WkhNb0tTQjdYRzRnSUNBZ2RHaHBjeTV0WVhBdVptbDBRbTkxYm1SektIUm9hWE11WjJWMFFtOTFibVJ6S0Nrc0lIc2djR0ZrWkdsdVp6b2dXekl3TENBeU1GMGdmU2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdaMlYwUW05MWJtUnpLQ2s2SUV3dVRHRjBURzVuUW05MWJtUnpSWGh3Y21WemMybHZiaUI3WEc0Z0lDQWdhV1lnS0hSb2FYTXVjRzlzZVdkdmJuTXViR1Z1WjNSb0lEdzlJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtMWhjQzVuWlhSQ2IzVnVaSE1vS1Z4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3YjJ4NVoyOXVjeTV5WldSMVkyVW9YRzRnSUNBZ0lDQW9jSEpsZGl3Z1kzVnljaWtnUFQ0Z2NISmxkaTVsZUhSbGJtUW9ZM1Z5Y2k1blpYUkNiM1Z1WkhNb0tTa3NYRzRnSUNBZ0lDQjBhR2x6TG5CdmJIbG5iMjV6V3pCZExtZGxkRUp2ZFc1a2N5Z3BYRzRnSUNBZ0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa1pYTjBjbTk1S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0cElIdGNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NVoyOXVLVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQndkV0pzYVdNZ2RHOW5aMnhsVm1semFXSnNaU2gyYVhOcFlteGxPaUJpYjI5c1pXRnVLU0I3WEc0Z0lDQWdkR2hwY3k1MmFYTnBZbXhsSUQwZ2RtbHphV0pzWlZ4dUlDQWdJR2xtSUNnaGRHaHBjeTVzWVhsbGNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMmFYTnBZbXhsS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbTFoY0M1aFpHUk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0IwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXZHZiaTV5WlcxdmRtVW9LVnh1SUNBZ0lDQWdkR2hwY3k1dFlYQXVjbVZ0YjNabFRHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY0hWaWJHbGpJR05vWVc1blpVTnZiRzl5S0dOdmJHOXlPaUJ6ZEhKcGJtY3BJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk11Wm1sc2JFTnZiRzl5SUQwZ1kyOXNiM0pjYmlBZ0lDQjBhR2x6TG5KbFpISmhkeWdwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSEJwZEdOb0tHbGtPaUJ6ZEhKcGJtY3BJSHRjYmlBZ0lDQjBhR2x6TG5CdmJIbG5iMjV6TG1admNrVmhZMmdvS0hCdmJIbG5iMjRwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2h3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LUzVwWkNBOVBUMGdhV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVRMnhwWTJ0SVlXNWtiR1Z5S0hCdmJIbG5iMjRzSUhSeWRXVXBYRzRnSUNBZ0lDQWdJSEpsZEhWeWJseHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcFhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lHbHVhWFJGZG1WdWRDZ3BJSHQ5WEc0Z0lIQnliM1JsWTNSbFpDQm5aWFJVYjI5c1ZHbHdRMjl1ZEdWdWRDaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQnlaWFIxY200Z0p5Y2dLeUJrWVhSaFczUm9hWE11YjNCMGFXOXVjeTUwYjI5c2RHbHdRWFIwY2wxY2JpQWdmVnh1SUNCd2NtOTBaV04wWldRZ1oyVjBVRzl3ZFhCRGIyNTBaVzUwS0dSaGRHRTZJRVJoZEdGTWFYTjBTWFJsYlNrZ2UxeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUNjblhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGVYQmxiMllnZEdocGN5NXZjSFJwYjI1ekxuQnZjSFZ3UVhSMGNpQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJnSkh0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlmVG9nSkh0a1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhKZGZXQmNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCMGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlJRDA5UFNBbmIySnFaV04wSnlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdBa2UzUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSEl1YkdGaVpXeDlPaUFrZTF4dUlDQWdJQ0FnSUNCa1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1d2IzQjFjRUYwZEhJdWRtRnNkV1ZkWEc0Z0lDQWdJQ0I5WUZ4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWTJGamFHVlRaV2R0Wlc1MFVHRnlZVzF6S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSE5sWjIxbGJuUmxaRXhsYm1kMGFDQTlJSFJvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSRGIyeHZjbk11YkdWdVozUm9YRzRnSUNBZ2JHVjBJRzFoZUZaaGJDQTlJQzFKYm1acGJtbDBlVnh1SUNBZ0lHeGxkQ0J0YVc1V1lXd2dQU0JKYm1acGJtbDBlVnh1SUNBZ0lHWnZjaUFvWTI5dWMzUWdaR0YwWVNCdlppQjBhR2x6TG1SaGRHRk1hWE4wS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0IyWVd3Z1BTQmtZWFJoVzNSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkJkSFJ5WFZ4dUlDQWdJQ0FnYldGNFZtRnNJRDBnVFdGMGFDNXRZWGdvYldGNFZtRnNMQ0IyWVd3cFhHNGdJQ0FnSUNCdGFXNVdZV3dnUFNCTllYUm9MbTFwYmlodGFXNVdZV3dzSUhaaGJDbGNiaUFnSUNCOVhHNGdJQ0FnWTI5dWMzUWdjM1JsY0NBOUlDaHRZWGhXWVd3Z0xTQnRhVzVXWVd3Z0t5QXhLU0F2SUhObFoyMWxiblJsWkV4bGJtZDBhRnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVFdsdUlEMGdiV2x1Vm1Gc1hHNGdJQ0FnZEdocGN5NXpaV2R0Wlc1MFpXUlRkR1Z3SUQwZ2MzUmxjRnh1SUNCOVhHNGdJSEJ5YjNSbFkzUmxaQ0JuWlhSVFpXZHRaVzUwWldSUWIyeDVaMjl1UTI5c2IzSW9aR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRLVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQmpiMjV6ZENCMllXd2dQU0JrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JCZEhSeVhWeHVJQ0FnSUdOdmJuTjBJR052Ykc5eUlEMGdkR2hwY3k1dmNIUnBiMjV6TG5ObFoyMWxiblJsWkVOdmJHOXljMXRjYmlBZ0lDQWdJSEJoY25ObFNXNTBLQ2NuSUNzZ0tIWmhiQ0F0SUhSb2FYTXVjMlZuYldWdWRHVmtUV2x1S1NBdklIUm9hWE11YzJWbmJXVnVkR1ZrVTNSbGNDd2dNVEFwWEc0Z0lDQWdYVnh1SUNBZ0lISmxkSFZ5YmlCamIyeHZjbHh1SUNCOVhHNGdJSEJ5YjNSbFkzUmxaQ0J3YjJ4NVoyOXVRMnhwWTJ0SVlXNWtiR1Z5S0hCdmJIbG5iMjQ2SUZCdmJIbG5iMjRzSUdacGRFSnZkVzVrY3o4NklHSnZiMnhsWVc0cElIdGNiaUFnSUNCMGFHbHpMbVp2WTNWelpXUlFiMng1WjI5dUlEMGdjRzlzZVdkdmJseHVJQ0FnSUM4dklPV0lvT21acE9XSmplUzRnT1M0cWlCbWIyTjFjMXh1SUNBZ0lHbG1JQ2gwYUdsekxtWnZZM1Z6WldSRWFYTndiR0Y1VUc5c2VXZHZiaWtnZTF4dUlDQWdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbG5iMjR1Y21WdGIzWmxLQ2xjYmlBZ0lDQjlYRzRnSUNBZ0x5OGc1NVNmNW9pUTViMlQ1WW1OSUdadlkzVnpYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtSR2x6Y0d4aGVWQnZiSGxuYjI0Z1BTQnVaWGNnVUc5c2VXZHZiaWh3YjJ4NVoyOXVMbWRsZEV4aGRFeHVaM01vS1N3Z2UxeHVJQ0FnSUNBZ1kyOXNiM0k2SUNjak16TTRPRVpHSnl4Y2JpQWdJQ0FnSUdacGJHeERiMnh2Y2pvZ2RHaHBjeTVuWlhSRGIyeHZjaWh3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2tzWEc0Z0lDQWdmU2xjYmlBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVVRzlzZVdkdmJpNWhaR1JVYnloMGFHbHpMbTFoY0NsY2JseHVJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsUWIyeDVaMjl1WEc0Z0lDQWdJQ0F1WW1sdVpGQnZjSFZ3S0hSb2FYTXVaMlYwVUc5d2RYQkRiMjUwWlc1MEtIQnZiSGxuYjI0dVoyVjBSR0YwWVNncEtTbGNiaUFnSUNBZ0lDNXZjR1Z1VUc5d2RYQW9LVnh1WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2YkhsbmIyNHViMjRvSjNCdmNIVndZMnh2YzJVbkxDQW9LU0E5UGlCN1hHNGdJQ0FnSUNCMGFHbHpMbVp2WTNWelpXUkVhWE53YkdGNVVHOXNlV2R2Ymk1eVpXMXZkbVVvS1Z4dUlDQWdJSDBwWEc0Z0lDQWdjRzlzZVdkdmJpNWpiRzl6WlZSdmIyeDBhWEFvS1Z4dVhHNGdJQ0FnZEdocGN5NXRZWEF1Y0dGdVZHOG9kR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2YkhsbmIyNHVaMlYwUTJWdWRHVnlLQ2twWEc0Z0lDQWdhV1lnS0dacGRFSnZkVzVrY3lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV0WVhBdVptbDBRbTkxYm1SektIQnZiSGxuYjI0dVoyVjBRbTkxYm1SektDa3BYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXVZMmhoYm01bGJFWjFibU1vSjI5dUxXTnNhV05yTFhCdmJIbG5iMjRuTENCd2IyeDVaMjl1S1Z4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCcGJtbDBUM0IwYVc5dWN5aHZjSFJwYjI1ek9pQlFiMng1WjI5dVRHRjVaWEpQY0hScGIyNXpLU0I3WEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWgwYUdsekxtOXdkR2x2Ym5Nc0lHOXdkR2x2Ym5NcFhHNGdJSDFjYmlBZ2NISnZkR1ZqZEdWa0lHbHVhWFJRYjJ4NVoyOXVjeWdwSUh0Y2JpQWdJQ0F2THlEbnZKUGxyWmdnYzJWbmJXVnVkQ0RubTdqbGhiUG1sYkRtamE1Y2JpQWdJQ0IwYUdsekxtTmhZMmhsVTJWbmJXVnVkRkJoY21GdGN5Z3BYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjeUE5SUZ0ZFhHNGdJQ0FnZEdocGN5NWtZWFJoVEdsemRDNW1iM0pGWVdOb0tDaGtZWFJoS1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCc1lYbGxjaUE5SUV3dVoyVnZTbE5QVGloa1lYUmhMbWRsYjIxbGRISjVLUzVuWlhSTVlYbGxjbk1vS1Zzd1hWeHVJQ0FnSUNBZ1kyOXVjM1FnY0c5c2VXZHZiaUE5SUc1bGR5QlFiMng1WjI5dUtDaHNZWGxsY2lCaGN5Qk1MbEJ2YkhsbmIyNHBMbWRsZEV4aGRFeHVaM01vS1NsY2JseHVJQ0FnSUNBZ2NHOXNlV2R2Ymk1elpYUkVZWFJoS0dSaGRHRXBYRzRnSUNBZ0lDQjBhR2x6TG5CdmJIbG5iMjV6TG5CMWMyZ29jRzlzZVdkdmJpbGNiaUFnSUNCOUtWeHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1kyOXVabWxuVUc5c2VXZHZia3hoZVdWeUtDa2dlMXh1SUNBZ0lIUm9hWE11Y0c5c2VXZHZia3hoZVdWeUlEMGdUQzVzWVhsbGNrZHliM1Z3S0NsY2JpQWdJQ0IwYUdsekxuQnZiSGxuYjI1eklEMGdkR2hwY3k1d2IyeDVaMjl1Y3k1dFlYQW9LSEJ2YkhsbmIyNHBJRDArSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJRzl3ZEdsdmJuTTZJRXd1VUc5c2VXeHBibVZQY0hScGIyNXpJRDBnVDJKcVpXTjBMbUZ6YzJsbmJpaDdmU3dnZEdocGN5NXZjSFJwYjI1ekxDQjdYRzRnSUNBZ0lDQWdJR052Ykc5eU9pQW5Jek16T0RoR1JpY3NYRzRnSUNBZ0lDQWdJR1pwYkd4RGIyeHZjam9nZEdocGN5NW5aWFJEYjJ4dmNpaHdiMng1WjI5dUxtZGxkRVJoZEdFb0tTa3NYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdMeThnNlllTjVwYXc1YnFVNTVTb0lHOXdkR2x2Ym5OY2JpQWdJQ0FnSUdOdmJuTjBJRzVsZDFCdmJIbG5iMjRnUFNCdVpYY2dVRzlzZVdkdmJpaHdiMng1WjI5dUxtZGxkRXhoZEV4dVozTW9LU3dnYjNCMGFXOXVjeWxjYmlBZ0lDQWdJRzVsZDFCdmJIbG5iMjR1YzJWMFJHRjBZU2h3YjJ4NVoyOXVMbWRsZEVSaGRHRW9LU2xjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbTl3ZEdsdmJuTXVkRzl2YkhScGNFRjBkSElwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNVRzlzZVdkdmJpNWlhVzVrVkc5dmJIUnBjQ2gwYUdsekxtZGxkRlJ2YjJ4VWFYQkRiMjUwWlc1MEtHNWxkMUJ2YkhsbmIyNHVaMlYwUkdGMFlTZ3BLU2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJRzVsZDFCdmJIbG5iMjR1YjI0b0oyTnNhV05ySnl3Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2YkhsbmIyNURiR2xqYTBoaGJtUnNaWElvY0c5c2VXZHZiaWxjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0J5WlhSMWNtNGdibVYzVUc5c2VXZHZibHh1SUNBZ0lIMHBYRzRnSUNBZ2RHaHBjeTV3YjJ4NVoyOXVjeTVtYjNKRllXTm9LQ2h3YjJ4NVoyOXVLU0E5UGlCN1hHNGdJQ0FnSUNCMGFHbHpMbkJ2YkhsbmIyNU1ZWGxsY2k1aFpHUk1ZWGxsY2lod2IyeDVaMjl1S1Z4dUlDQWdJSDBwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y0c5c2VXZHZia3hoZVdWeVhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCblpYUkRiMnh2Y2loa1lYUmhPaUJFWVhSaFRHbHpkRWwwWlcwc0lHMXZaR1UvT2lCRGIyeHZjazF2WkdVcElIdGNiaUFnSUNCc1pYUWdZMjlzYjNJZ1BTQjBhR2x6TG05d2RHbHZibk11WTI5c2IzSmNiaUFnSUNCcFppQW9kR2hwY3k1dmNIUnBiMjV6TG5KbGJtUmxjbEJ2YkhsbmIyNURiMnh2Y2xSNWNHVWdQVDA5SUNkelpXZHRaVzUwWldRbktTQjdYRzRnSUNBZ0lDQmpiMnh2Y2lBOUlIUm9hWE11WjJWMFUyVm5iV1Z1ZEdWa1VHOXNlV2R2YmtOdmJHOXlLR1JoZEdFcFhHNGdJQ0FnZlZ4dUlDQWdJSE4zYVhSamFDQW9iVzlrWlNrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0FuWkdGeWEyVnVKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JoY210bGJpaGpiMnh2Y2lsY2JpQWdJQ0FnSUdOaGMyVWdKMnhwWjJoMFpXNG5PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiR2xuYUhSbGJpaGpiMnh2Y2lsY2JpQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNseHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElIc2dSR0YwWVV4cGMzUkpkR1Z0SUgwZ1puSnZiU0FuTGk0dlpHVm1hVzVwZEdsdmJuTW5YRzVjYm1WNGNHOXlkQ0IwZVhCbElGQnZiSGxzYVc1bFRHRjBURzVuUlhod2NtVnpjMmx2YmlBOVhHNGdJSHdnVEM1TVlYUk1ibWRGZUhCeVpYTnphVzl1VzExY2JpQWdmQ0JNTGt4aGRFeHVaMFY0Y0hKbGMzTnBiMjViWFZ0ZFhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYjJ4NWJHbHVaU0JsZUhSbGJtUnpJRXd1VUc5c2VXeHBibVVnZTF4dUlDQXZMeUIwYzJ4cGJuUTZaR2x6WVdKc1pTMXVaWGgwTFd4cGJtVTZkbUZ5YVdGaWJHVXRibUZ0WlZ4dUlDQndjbWwyWVhSbElGOWZaR0YwWVRvZ1JHRjBZVXhwYzNSSmRHVnRYRzRnSUdOdmJuTjBjblZqZEc5eUtHeGhkR3h1WjNNNklGQnZiSGxzYVc1bFRHRjBURzVuUlhod2NtVnpjMmx2Yml3Z2IzQjBhVzl1Y3o4NklFd3VVRzlzZVd4cGJtVlBjSFJwYjI1ektTQjdYRzRnSUNBZ2MzVndaWElvYkdGMGJHNW5jeXdnYjNCMGFXOXVjeWxjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjMlYwUkdGMFlTaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQjBhR2x6TGw5ZlpHRjBZU0E5SUdSaGRHRmNiaUFnZlZ4dUlDQndkV0pzYVdNZ1oyVjBSR0YwWVNncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWZYMlJoZEdGY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElIc2dSR0YwWVV4cGMzUkpkR1Z0TENCRGFHRnVibVZzUm5WdVl5QjlJR1p5YjIwZ0p5NHVMMlJsWm1sdWFYUnBiMjV6SjF4dWFXMXdiM0owSUZCdmJIbHNhVzVsYzB4aGVXVnlJR1p5YjIwZ0p5NHZVRzlzZVd4cGJtVnpUR0Y1WlhJblhHNWNiaThxS2lEbXVMTG1uNVBwb3B6b2liTG1vTGZsdkk4ZzVZMlY2SW15Zk9XSWh1YXV0U0FxTDF4dWRIbHdaU0JRYjJ4NWJHbHVaVXhoZVdWeVVtVnVaR1Z5UTI5c2IzSlVlWEJsSUQwZ0ozTnBibWRzWlNjZ2ZDQW5jMlZuYldWdWRHVmtKMXh1YVc1MFpYSm1ZV05sSUZCdmJIbHNhVzVsUW5WbVptVnlUR0Y1WlhKUGNIUnBiMjV6SUdWNGRHVnVaSE1nVEM1RGIzSnlhV1J2Y2s5d2RHbHZibk1nZTF4dUlDQnlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlRvZ1VHOXNlV3hwYm1WTVlYbGxjbEpsYm1SbGNrTnZiRzl5Vkhsd1pWeHVYRzRnSUM4cUtpQndiM0IxY0NEbHNaWG5wTHJsclpmbXJyVWdLaTljYmlBZ2NHOXdkWEJCZEhSeVB6b2djM1J5YVc1blhHNGdJQzhxS2lCMGIyOXNkR2x3SU9XeGxlZWt1dVd0bCthdXRTQXFMMXh1SUNCMGIyOXNkR2x3UVhSMGNqODZJSE4wY21sdVoxeHVYRzRnSUc5d1lXTnBkSGsvT2lCdWRXMWlaWEpjYmx4dUlDQXZLaW9nNVlpRzVxNjE1cml5NXArVDU3dWY2SzZoNWEyWDVxNjFJQ292WEc0Z0lITmxaMjFsYm5SbFpFRjBkSEkvT2lCemRISnBibWRjYmlBZ2MyVm5iV1Z1ZEdWa1EyOXNiM0p6UHpvZ2MzUnlhVzVuVzExY2JuMWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmJIbHNhVzVsYzBKMVptWmxja3hoZVdWeUlHVjRkR1Z1WkhNZ1VHOXNlV3hwYm1WelRHRjVaWElnZTF4dUlDQndkV0pzYVdNZ2RIbHdaVG9nYzNSeWFXNW5YRzRnSUhCeWIzUmxZM1JsWkNCdmNIUnBiMjV6T2lCUWIyeDViR2x1WlVKMVptWmxja3hoZVdWeVQzQjBhVzl1YzF4dUlDQmpiMjV6ZEhKMVkzUnZjaWhjYmlBZ0lDQnRZWEE2SUV3dVRXRndMRnh1SUNBZ0lHUmhkR0ZNYVhOME9pQkVZWFJoVEdsemRFbDBaVzFiWFN4Y2JpQWdJQ0J2Y0hScGIyNXpPaUJRYjJ4NWJHbHVaVUoxWm1abGNreGhlV1Z5VDNCMGFXOXVjeXhjYmlBZ0lDQmphR0Z1Ym1Wc1JuVnVZem9nUTJoaGJtNWxiRVoxYm1OY2JpQWdLU0I3WEc0Z0lDQWdjM1Z3WlhJb2JXRndMQ0JrWVhSaFRHbHpkQ3dnYjNCMGFXOXVjeXdnWTJoaGJtNWxiRVoxYm1NcFhHNGdJQ0FnWTI5dWMzUWdaR1ZtWVhWc2RFOXdkR2x2Ym5NNklGQnZiSGxzYVc1bFFuVm1abVZ5VEdGNVpYSlBjSFJwYjI1eklEMGdlMXh1SUNBZ0lDQWdjbVZ1WkdWeVVHOXNlV3hwYm1WRGIyeHZjbFI1Y0dVNklDZHphVzVuYkdVbkxGeHVJQ0FnSUNBZ2MyVm5iV1Z1ZEdWa1EyOXNiM0p6T2lCYkp5TXpNemc0UmtZblhTeGNiaUFnSUNBZ0lHTnZjbkpwWkc5eU9pQXhNREFzWEc0Z0lDQWdJQ0JqYjJ4dmNqb2dKeU16TXpnNFJrWW5MRnh1SUNBZ0lDQWdiM0JoWTJsMGVUb2dNQzQxTEZ4dUlDQWdJSDFjYmlBZ0lDQjBhR2x6TG5SNWNHVWdQU0FuY0c5c2VXeHBibVZDZFdabVpYSW5YRzRnSUNBZ2RHaHBjeTV0WVhBZ1BTQnRZWEJjYmlBZ0lDQjBhR2x6TG1SaGRHRk1hWE4wSUQwZ1pHRjBZVXhwYzNSY2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1elhHNGdJQ0FnZEdocGN5NWphR0Z1Ym1Wc1JuVnVZeUE5SUdOb1lXNXVaV3hHZFc1alhHNWNiaUFnSUNCMGFHbHpMblpwYzJsaWJHVWdQU0IwY25WbFhHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTWdQU0JiWFZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnU1c1bWFXNXBkSGxjYmlBZ0lDQjBhR2x6TG5ObFoyMWxiblJsWkZOMFpYQWdQU0F4WEc0Z0lDQWdMeThnZEdocGN5NW1iMk4xYzJWa1VHOXNlV3hwYm1VZ1BTQnVkV3hzWEc1Y2JpQWdJQ0IwYUdsekxtOXdkR2x2Ym5NZ1BTQlBZbXBsWTNRdVlYTnphV2R1S0h0OUxDQmtaV1poZFd4MFQzQjBhVzl1Y3l3Z2IzQjBhVzl1Y3lsY2JpQWdmVnh1SUNCd2RXSnNhV01nWkhKaGR5aHZjSFJwYjI1elB6b2dVRzlzZVd4cGJtVkNkV1ptWlhKTVlYbGxjazl3ZEdsdmJuTXBJSHRjYmlBZ0lDQjBhR2x6TG05d2RHbHZibk1nUFNCUFltcGxZM1F1WVhOemFXZHVLSFJvYVhNdWIzQjBhVzl1Y3l3Z2IzQjBhVzl1Y3lsY2JpQWdJQ0IwYUdsekxtbHVhWFJRYjJ4NWJHbHVaWE1vS1Z4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG5KbFpISmhkeWdwWEc0Z0lIMWNiaUFnY0hWaWJHbGpJSEpsWkhKaGR5Z3BJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXVkbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVhHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGFHbHpMbXhoZVdWeUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG14aGVXVnlMbkpsYlc5MlpTZ3BYRzRnSUNBZ2ZWeHVJQ0FnSUhSb2FYTXViR0Y1WlhJZ1BTQjBhR2x6TG1OdmJtWnBaMUJ2Ykhsc2FXNWxRblZtWm1WeVRHRjVaWElvS1Z4dUlDQWdJSFJvYVhNdWJXRndMbUZrWkV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE5jYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdabWwwUW05MWJtUnpLQ2tnZTF4dUlDQWdJSFJvYVhNdWJXRndMbVpwZEVKdmRXNWtjeWgwYUdsekxtZGxkRUp2ZFc1a2N5Z3BLVnh1SUNCOVhHNGdJSEIxWW14cFl5Qm5aWFJDYjNWdVpITW9LVG9nVEM1TVlYUk1ibWRDYjNWdVpITkZlSEJ5WlhOemFXOXVJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXdiMng1YkdsdVpYTXViR1Z1WjNSb0lEdzlJREFwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtMWhjQzVuWlhSQ2IzVnVaSE1vS1Z4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTV3YjJ4NWJHbHVaWE11Y21Wa2RXTmxLRnh1SUNBZ0lDQWdLSEJ5WlhZc0lHTjFjbklwSUQwK0lIQnlaWFl1WlhoMFpXNWtLR04xY25JdVoyVjBRbTkxYm1SektDa3BMRnh1SUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlhOYk1GMHVaMlYwUW05MWJtUnpLQ2xjYmlBZ0lDQXBYRzRnSUgxY2JpQWdjSFZpYkdsaklHTm9ZVzVuWlVOdmJHOXlLR052Ykc5eU9pQnpkSEpwYm1jcElIdGNiaUFnSUNCMGFHbHpMbTl3ZEdsdmJuTXVZMjlzYjNJZ1BTQmpiMnh2Y2x4dUlDQWdJSFJvYVhNdWNtVmtjbUYzS0NsY2JpQWdmVnh1SUNCd2NtbDJZWFJsSUdOdmJtWnBaMUJ2Ykhsc2FXNWxRblZtWm1WeVRHRjVaWElvS1NCN1hHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpVeGhlV1Z5SUQwZ1RDNXNZWGxsY2tkeWIzVndLQ2xjYmlBZ0lDQjBhR2x6TG5CdmJIbHNhVzVsY3k1bWIzSkZZV05vS0Nod2IyeDViR2x1WlNrZ1BUNGdlMXh1SUNBZ0lDQWdjRzlzZVd4cGJtVXViMjRvSjJOc2FXTnJKeXdnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZiSGxzYVc1bFEyeHBZMnRJWVc1a2JHVnlLSEJ2Ykhsc2FXNWxLVnh1SUNBZ0lDQWdmU2xjYmlBZ0lDQWdJR052Ym5OMElHOXdkR2x2Ym5NNklGQnZiSGxzYVc1bFFuVm1abVZ5VEdGNVpYSlBjSFJwYjI1eklEMGdUMkpxWldOMExtRnpjMmxuYmloY2JpQWdJQ0FnSUNBZ2UzMHNYRzRnSUNBZ0lDQWdJSFJvYVhNdWIzQjBhVzl1Y3l4Y2JpQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJR052Ykc5eU9seHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZjSFJwYjI1ekxuSmxibVJsY2xCdmJIbHNhVzVsUTI5c2IzSlVlWEJsSUQwOVBTQW5jMmx1WjJ4bEoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBL0lIUm9hWE11YjNCMGFXOXVjeTVqYjJ4dmNseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBNklIUm9hWE11WjJWMFUyVm5iV1Z1ZEdWa1VHOXNlV3hwYm1WRGIyeHZjaWh3YjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2twTEZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBcFhHNWNiaUFnSUNBZ0lHTnZibk4wSUhCdmJIbHNhVzVsUW5WbVptVnlJRDBnVEM1amIzSnlhV1J2Y2loY2JpQWdJQ0FnSUNBZ0tIQnZiSGxzYVc1bExtZGxkRXhoZEV4dVozTW9LU0JoY3lCTUxreGhkRXh1WjF0ZEtTNXRZWEFvS0d4aGRFeHVaeWtnUFQ1Y2JpQWdJQ0FnSUNBZ0lDQk1MbXhoZEV4dVp5aGJiR0YwVEc1bkxteGhkQ3dnYkdGMFRHNW5MbXh1WjEwcFhHNGdJQ0FnSUNBZ0lDa3NYRzRnSUNBZ0lDQWdJRzl3ZEdsdmJuTmNiaUFnSUNBZ0lDbGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWRHOXZiSFJwY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnY0c5c2VXeHBibVZDZFdabVpYSXVZbWx1WkZSdmIyeDBhWEFvZEdocGN5NW5aWFJVYjI5c1ZHbHdRMjl1ZEdWdWRDaHdiMng1YkdsdVpTNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlV4aGVXVnlMbUZrWkV4aGVXVnlLSEJ2Ykhsc2FXNWxRblZtWm1WeUtWeHVJQ0FnSUgwcFhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWNHOXNlV3hwYm1WTVlYbGxjbHh1SUNCOVhHNTlYRzRpTENKcGJYQnZjblFnZXlCRVlYUmhUR2x6ZEVsMFpXMHNJRU5vWVc1dVpXeEdkVzVqSUgwZ1puSnZiU0FuTGk0dlpHVm1hVzVwZEdsdmJuTW5YRzVwYlhCdmNuUWdVRzlzZVd4cGJtVXNJSHNnVUc5c2VXeHBibVZNWVhSTWJtZEZlSEJ5WlhOemFXOXVJSDBnWm5KdmJTQW5MaTlRYjJ4NWJHbHVaU2RjYm1sdGNHOXlkQ0I3SUdSaGNtdGxiaXdnYkdsbmFIUmxiaUI5SUdaeWIyMGdKeTR1TDNWMGFXeHpMMmx1WkdWNEoxeHVYRzR2S2lvZzVyaXk1cCtUNmFLYzZJbXk1cUMzNWJ5UElPV05sZWlKc256bGlJYm1yclVnS2k5Y2JuUjVjR1VnVUc5c2VXeHBibVZNWVhsbGNsSmxibVJsY2tOdmJHOXlWSGx3WlNBOUlDZHphVzVuYkdVbklId2dKM05sWjIxbGJuUmxaQ2RjYm5SNWNHVWdRMjlzYjNKTmIyUmxJRDBnSjJSaGNtdGxiaWNnZkNBbmJHbG5hSFJsYmljZ2ZDQW5ibTl5YldGc0oxeHVhVzUwWlhKbVlXTmxJRkJ2Ykhsc2FXNWxUR0Y1WlhKUGNIUnBiMjV6SUdWNGRHVnVaSE1nVEM1UWIyeDViR2x1WlU5d2RHbHZibk1nZTF4dUlDQnlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlRvZ1VHOXNlV3hwYm1WTVlYbGxjbEpsYm1SbGNrTnZiRzl5Vkhsd1pWeHVYRzRnSUM4cUtpQndiM0IxY0NEbHNaWG5wTHJsclpmbXJyVWdLaTljYmlBZ2NHOXdkWEJCZEhSeVB6b2djM1J5YVc1bklId2dleUJzWVdKbGJEb2djM1J5YVc1bk95QjJZV3gxWlRvZ1lXNTVJSDFjYmlBZ0x5b3FJSFJ2YjJ4MGFYQWc1YkdWNTZTNjVhMlg1cTYxSUNvdlhHNGdJSFJ2YjJ4MGFYQkJkSFJ5UHpvZ2MzUnlhVzVuWEc1Y2JpQWdiM0JoWTJsMGVUODZJRzUxYldKbGNseHVYRzRnSUM4cUtpRGxpSWJtcnJYbXVMTG1uNVBudTUvb3JxSGxyWmZtcnJVZ0tpOWNiaUFnYzJWbmJXVnVkR1ZrUVhSMGNqODZJSE4wY21sdVoxeHVJQ0J6WldkdFpXNTBaV1JEYjJ4dmNuTS9PaUJ6ZEhKcGJtZGJYVnh1ZlZ4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdVRzlzZVd4cGJtVnpUR0Y1WlhJZ2UxeHVJQ0J3ZFdKc2FXTWdkSGx3WlRvZ2MzUnlhVzVuWEc1Y2JpQWdjSEp2ZEdWamRHVmtJSFpwYzJsaWJHVTZJR0p2YjJ4bFlXNWNiaUFnY0hKdmRHVmpkR1ZrSUd4aGVXVnlPaUJNTGt4aGVXVnlSM0p2ZFhCY2JseHVJQ0J3Y205MFpXTjBaV1FnYldGd09pQk1MazFoY0Z4dUlDQndjbTkwWldOMFpXUWdaR0YwWVV4cGMzUTZJRVJoZEdGTWFYTjBTWFJsYlZ0ZFhHNGdJSEJ5YjNSbFkzUmxaQ0J2Y0hScGIyNXpPaUJRYjJ4NWJHbHVaVXhoZVdWeVQzQjBhVzl1YzF4dUlDQndjbTkwWldOMFpXUWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJSEJ5YjNSbFkzUmxaQ0J3YjJ4NWJHbHVaWE02SUZCdmJIbHNhVzVsVzExY2JpQWdjSEp2ZEdWamRHVmtJSE5sWjIxbGJuUmxaRTFwYmpvZ2JuVnRZbVZ5WEc0Z0lIQnliM1JsWTNSbFpDQnpaV2R0Wlc1MFpXUlRkR1Z3T2lCdWRXMWlaWEpjYmlBZ2NISnZkR1ZqZEdWa0lHWnZZM1Z6WldSUWIyeDViR2x1WlRvZ1VHOXNlV3hwYm1WY2JpQWdjSEp2ZEdWamRHVmtJR1p2WTNWelpXUkVhWE53YkdGNVVHOXNlV3hwYm1VNklGQnZiSGxzYVc1bFhHNGdJSEJ5YjNSbFkzUmxaQ0J3YjJ4NWJHbHVaVXhoZVdWeU9pQk1Ma3hoZVdWeVIzSnZkWEJjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9YRzRnSUNBZ2JXRndPaUJNTGsxaGNDeGNiaUFnSUNCa1lYUmhUR2x6ZERvZ1JHRjBZVXhwYzNSSmRHVnRXMTBzWEc0Z0lDQWdiM0IwYVc5dWN6b2dVRzlzZVd4cGJtVk1ZWGxsY2s5d2RHbHZibk1zWEc0Z0lDQWdZMmhoYm01bGJFWjFibU02SUVOb1lXNXVaV3hHZFc1alhHNGdJQ2tnZTF4dUlDQWdJR052Ym5OMElHUmxabUYxYkhSUGNIUnBiMjV6T2lCUWIyeDViR2x1WlV4aGVXVnlUM0IwYVc5dWN5QTlJSHRjYmlBZ0lDQWdJR052Ykc5eU9pQW5Jek16T0RoR1JpY3NYRzRnSUNBZ0lDQnlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlRvZ0ozTnBibWRzWlNjc1hHNGdJQ0FnSUNCelpXZHRaVzUwWldSRGIyeHZjbk02SUZzbkl6TXpPRGhHUmlkZExGeHVJQ0FnSUNBZ2NHOXdkWEJCZEhSeU9pQjdJR3hoWW1Wc09pQW41WkNONTZld0p5d2dkbUZzZFdVNklDZHVZVzFsSnlCOUxGeHVJQ0FnSUNBZ2RHOXZiSFJwY0VGMGRISTZJQ2R1WVcxbEp5eGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NTBlWEJsSUQwZ0ozQnZiSGxzYVc1bEoxeHVJQ0FnSUhSb2FYTXViV0Z3SUQwZ2JXRndYRzRnSUNBZ2RHaHBjeTVrWVhSaFRHbHpkQ0E5SUdSaGRHRk1hWE4wWEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1pHVm1ZWFZzZEU5d2RHbHZibk1zSUc5d2RHbHZibk1wWEc0Z0lDQWdkR2hwY3k1amFHRnVibVZzUm5WdVl5QTlJR05vWVc1dVpXeEdkVzVqWEc1Y2JpQWdJQ0IwYUdsekxuWnBjMmxpYkdVZ1BTQjBjblZsWEc0Z0lDQWdkR2hwY3k1d2IyeDViR2x1WlhNZ1BTQmJYVnh1SUNBZ0lIUm9hWE11YzJWbmJXVnVkR1ZrVFdsdUlEMGdTVzVtYVc1cGRIbGNiaUFnSUNCMGFHbHpMbk5sWjIxbGJuUmxaRk4wWlhBZ1BTQXhYRzRnSUNBZ2RHaHBjeTVtYjJOMWMyVmtVRzlzZVd4cGJtVWdQU0J1ZFd4c1hHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsSUQwZ2JuVnNiRnh1SUNCOVhHNGdJSEIxWW14cFl5QmtjbUYzS0c5d2RHbHZibk0vT2lCUWIyeDViR2x1WlV4aGVXVnlUM0IwYVc5dWN5a2dlMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeUE5SUU5aWFtVmpkQzVoYzNOcFoyNG9kR2hwY3k1dmNIUnBiMjV6TENCdmNIUnBiMjV6S1Z4dUlDQWdJSFJvYVhNdWFXNXBkRkJ2Ykhsc2FXNWxjeWdwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y21Wa2NtRjNLQ2xjYmlBZ2ZWeHVJQ0J3ZFdKc2FXTWdjbVZrY21GM0tDa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NTJhWE5wWW14bEtTQjdYRzRnSUNBZ0lDQnlaWFIxY201Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0hSb2FYTXViR0Y1WlhJcElIdGNiaUFnSUNBZ0lIUm9hWE11YkdGNVpYSXVjbVZ0YjNabEtDbGNiaUFnSUNCOVhHNGdJQ0FnZEdocGN5NXNZWGxsY2lBOUlIUm9hWE11WTI5dVptbG5VRzlzZVd4cGJtVk1ZWGxsY2lncFhHNGdJQ0FnZEdocGN5NXRZWEF1WVdSa1RHRjVaWElvZEdocGN5NXNZWGxsY2lsY2JpQWdJQ0J5WlhSMWNtNGdkR2hwYzF4dUlDQjlYRzRnSUhCMVlteHBZeUJtYVhSQ2IzVnVaSE1vS1NCN1hHNGdJQ0FnZEdocGN5NXRZWEF1Wm1sMFFtOTFibVJ6S0hSb2FYTXVaMlYwUW05MWJtUnpLQ2tzSUhzZ2NHRmtaR2x1WnpvZ1d6SXdMQ0F5TUYwZ2ZTbGNiaUFnZlZ4dUlDQndkV0pzYVdNZ1oyVjBRbTkxYm1SektDazZJRXd1VEdGMFRHNW5RbTkxYm1SelJYaHdjbVZ6YzJsdmJpQjdYRzRnSUNBZ2FXWWdLSFJvYVhNdWNHOXNlV3hwYm1WekxteGxibWQwYUNBOFBTQXdLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dFlYQXVaMlYwUW05MWJtUnpLQ2xjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjRzlzZVd4cGJtVnpMbkpsWkhWalpTaGNiaUFnSUNBZ0lDaHdjbVYyTENCamRYSnlLU0E5UGlCd2NtVjJMbVY0ZEdWdVpDaGpkWEp5TG1kbGRFSnZkVzVrY3lncEtTeGNiaUFnSUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZ6V3pCZExtZGxkRUp2ZFc1a2N5Z3BYRzRnSUNBZ0tWeHVJQ0I5WEc0Z0lIQjFZbXhwWXlCa1pYTjBjbTk1S0NrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG14aGVXVnlLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzV5WlcxdmRtVk1ZWGxsY2loMGFHbHpMbXhoZVdWeUtWeHVJQ0FnSUgxY2JpQWdmVnh1SUNCd2RXSnNhV01nZEc5bloyeGxWbWx6YVdKc1pTaDJhWE5wWW14bE9pQmliMjlzWldGdUtTQjdYRzRnSUNBZ2RHaHBjeTUyYVhOcFlteGxJRDBnZG1semFXSnNaVnh1SUNBZ0lHbG1JQ2doZEdocGN5NXNZWGxsY2lrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gyYVhOcFlteGxLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtMWhjQzVoWkdSTVlYbGxjaWgwYUdsekxteGhlV1Z5S1Z4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQjBhR2x6TG1adlkzVnpaV1JFYVhOd2JHRjVVRzlzZVd4cGJtVXVjbVZ0YjNabEtDbGNiaUFnSUNBZ0lIUm9hWE11YldGd0xuSmxiVzkyWlV4aGVXVnlLSFJvYVhNdWJHRjVaWElwWEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEIxWW14cFl5QmphR0Z1WjJWRGIyeHZjaWhqYjJ4dmNqb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpMbVpwYkd4RGIyeHZjaUE5SUdOdmJHOXlYRzRnSUNBZ2RHaHBjeTV5WldSeVlYY29LVnh1SUNCOVhHNGdJSEIxWW14cFl5QndhWFJqYUNocFpEb2djM1J5YVc1bktTQjdYRzRnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaWE11Wm05eVJXRmphQ2dvY0c5c2VXeHBibVVwSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2h3YjJ4NWJHbHVaUzVuWlhSRVlYUmhLQ2t1YVdRZ1BUMDlJR2xrS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZEYkdsamEwaGhibVJzWlhJb2NHOXNlV3hwYm1Vc0lIUnlkV1VwWEc0Z0lDQWdJQ0FnSUhKbGRIVnlibHh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBYRzRnSUgxY2JpQWdjSEp2ZEdWamRHVmtJR2x1YVhSUWIyeDViR2x1WlhNb0tTQjdYRzRnSUNBZ0x5OGc1N3lUNWEyWUlITmxaMjFsYm5RZzU1dTQ1WVd6NXBXdzVvMnVYRzRnSUNBZ2RHaHBjeTVqWVdOb1pWTmxaMjFsYm5SUVlYSmhiWE1vS1Z4dVhHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTWdQU0IwYUdsekxtUmhkR0ZNYVhOMExtMWhjQ2dvWkdGMFlTa2dQVDRnZTF4dUlDQWdJQ0FnWTI5dWMzUWdiR0Y1WlhJZ1BTQk1MbWRsYjBwVFQwNG9aR0YwWVM1blpXOXRaWFJ5ZVNrdVoyVjBUR0Y1WlhKektDbGJNRjFjYmlBZ0lDQWdJQzh2SUd4bGRDQmpiMnh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTVqYjJ4dmNseHVJQ0FnSUNBZ0x5OGdhV1lnS0hSb2FYTXViM0IwYVc5dWN5NXlaVzVrWlhKUWIyeDViR2x1WlVOdmJHOXlWSGx3WlNBOVBUMGdKM05sWjIxbGJuUmxaQ2NwSUh0Y2JpQWdJQ0FnSUM4dklDQWdZMjlzYjNJZ1BTQjBhR2x6TG1kbGRGTmxaMjFsYm5SbFpGQnZiSGxzYVc1bFEyOXNiM0lvWkdGMFlTbGNiaUFnSUNBZ0lDOHZJSDFjYmlBZ0lDQWdJR052Ym5OMElIQnZiSGxzYVc1bElEMGdibVYzSUZCdmJIbHNhVzVsS0Z4dUlDQWdJQ0FnSUNBb2JHRjVaWElnWVhNZ1RDNVFiMng1YkdsdVpTa3VaMlYwVEdGMFRHNW5jeWdwSUdGeklGQnZiSGxzYVc1bFRHRjBURzVuUlhod2NtVnpjMmx2Ymx4dUlDQWdJQ0FnS1Z4dVhHNGdJQ0FnSUNBdkx5RGxzSWJubTdqbGhiUGxnTHpudTVIbHJwcmxpTEFnYldGeWEyVnk1TGlLWEc0Z0lDQWdJQ0J3YjJ4NWJHbHVaUzV6WlhSRVlYUmhLR1JoZEdFcFhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCd2IyeDViR2x1WlZ4dUlDQWdJSDBwWEc0Z0lIMWNiaUFnY0hKdmRHVmpkR1ZrSUdkbGRGTmxaMjFsYm5SbFpGQnZiSGxzYVc1bFEyOXNiM0lvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1RvZ2MzUnlhVzVuSUh0Y2JpQWdJQ0JqYjI1emRDQjJZV3dnUFNCa1lYUmhXM1JvYVhNdWIzQjBhVzl1Y3k1elpXZHRaVzUwWldSQmRIUnlYVnh1SUNBZ0lHTnZibk4wSUdOdmJHOXlJRDBnZEdocGN5NXZjSFJwYjI1ekxuTmxaMjFsYm5SbFpFTnZiRzl5YzF0Y2JpQWdJQ0FnSUhCaGNuTmxTVzUwS0NjbklDc2dLSFpoYkNBdElIUm9hWE11YzJWbmJXVnVkR1ZrVFdsdUtTQXZJSFJvYVhNdWMyVm5iV1Z1ZEdWa1UzUmxjQ3dnTVRBcFhHNGdJQ0FnWFZ4dUlDQWdJSEpsZEhWeWJpQmpiMnh2Y2x4dUlDQjlYRzRnSUhCeWIzUmxZM1JsWkNCd2IyeDViR2x1WlVOc2FXTnJTR0Z1Wkd4bGNpaHdiMng1YkdsdVpUb2dVRzlzZVd4cGJtVXNJR1pwZEVKdmRXNWtjejg2SUdKdmIyeGxZVzRwSUh0Y2JpQWdJQ0IwYUdsekxtWnZZM1Z6WldSUWIyeDViR2x1WlNBOUlIQnZiSGxzYVc1bFhHNGdJQ0FnTHk4ZzVZaWc2Wm1rNVltTjVMaUE1TGlxSUdadlkzVnpYRzRnSUNBZ2FXWWdLSFJvYVhNdVptOWpkWE5sWkVScGMzQnNZWGxRYjJ4NWJHbHVaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsTG5KbGJXOTJaU2dwWEc0Z0lDQWdmVnh1SUNBZ0lDOHZJT2VVbithSWtPVzlrK1dKalNCbWIyTjFjMXh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1YkdsdVpTQTlJRzVsZHlCUWIyeDViR2x1WlNoY2JpQWdJQ0FnSUhCdmJIbHNhVzVsTG1kbGRFeGhkRXh1WjNNb0tTQmhjeUJRYjJ4NWJHbHVaVXhoZEV4dVowVjRjSEpsYzNOcGIyNHNYRzRnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJR052Ykc5eU9pQjBhR2x6TG1kbGRFTnZiRzl5S0hCdmJIbHNhVzVsTG1kbGRFUmhkR0VvS1Nrc1hHNGdJQ0FnSUNBZ0lHWnBiR3hEYjJ4dmNqb2dkR2hwY3k1blpYUkRiMnh2Y2lod2IyeDViR2x1WlM1blpYUkVZWFJoS0Nrc0lDZHViM0p0WVd3bktTeGNiaUFnSUNBZ0lIMWNiaUFnSUNBcFhHNGdJQ0FnZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsTG1Ga1pGUnZLSFJvYVhNdWJXRndLVnh1WEc0Z0lDQWdkR2hwY3k1bWIyTjFjMlZrUkdsemNHeGhlVkJ2Ykhsc2FXNWxYRzRnSUNBZ0lDQXVZbWx1WkZCdmNIVndLSFJvYVhNdVoyVjBVRzl3ZFhCRGIyNTBaVzUwS0hCdmJIbHNhVzVsTG1kbGRFUmhkR0VvS1NrcFhHNGdJQ0FnSUNBdWIzQmxibEJ2Y0hWd0tDbGNibHh1SUNBZ0lIUm9hWE11Wm05amRYTmxaRVJwYzNCc1lYbFFiMng1YkdsdVpTNXZiaWduY0c5d2RYQmpiRzl6WlNjc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUhSb2FYTXVabTlqZFhObFpFUnBjM0JzWVhsUWIyeDViR2x1WlM1eVpXMXZkbVVvS1Z4dUlDQWdJSDBwWEc1Y2JpQWdJQ0J3YjJ4NWJHbHVaUzVqYkc5elpWUnZiMngwYVhBb0tWeHVYRzRnSUNBZ2RHaHBjeTV0WVhBdWNHRnVWRzhvZEdocGN5NW1iMk4xYzJWa1JHbHpjR3hoZVZCdmJIbHNhVzVsTG1kbGRFTmxiblJsY2lncEtWeHVJQ0FnSUdsbUlDaG1hWFJDYjNWdVpITXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXRndMbVpwZEVKdmRXNWtjeWh3YjJ4NWJHbHVaUzVuWlhSQ2IzVnVaSE1vS1NsY2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1amFHRnVibVZzUm5WdVl5Z25iMjR0WTJ4cFkyc3RjRzlzZVd4cGJtVW5MQ0J3YjJ4NWJHbHVaU2xjYmlBZ2ZWeHVJQ0J3Y205MFpXTjBaV1FnWjJWMFZHOXZiRlJwY0VOdmJuUmxiblFvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0S1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2NuSUNzZ1pHRjBZVnQwYUdsekxtOXdkR2x2Ym5NdWRHOXZiSFJwY0VGMGRISmRYRzRnSUgxY2JpQWdjSEp2ZEdWamRHVmtJR2RsZEZCdmNIVndRMjl1ZEdWdWRDaGtZWFJoT2lCRVlYUmhUR2x6ZEVsMFpXMHBJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXViM0IwYVc5dWN5NXdiM0IxY0VGMGRISXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQW5KMXh1SUNBZ0lIMWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlIUm9hWE11YjNCMGFXOXVjeTV3YjNCMWNFRjBkSElnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1lDUjdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY24wNklDUjdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlYWDFnWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gwZVhCbGIyWWdkR2hwY3k1dmNIUnBiMjV6TG5CdmNIVndRWFIwY2lBOVBUMGdKMjlpYW1WamRDY3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmdKSHQwYUdsekxtOXdkR2x2Ym5NdWNHOXdkWEJCZEhSeUxteGhZbVZzZlRvZ0pIdGNiaUFnSUNBZ0lDQWdaR0YwWVZ0MGFHbHpMbTl3ZEdsdmJuTXVjRzl3ZFhCQmRIUnlMblpoYkhWbFhWeHVJQ0FnSUNBZ2ZXQmNiaUFnSUNCOVhHNGdJSDFjYmlBZ2NISnBkbUYwWlNCamIyNW1hV2RRYjJ4NWJHbHVaVXhoZVdWeUtDa2dlMXh1SUNBZ0lIUm9hWE11Y0c5c2VXeHBibVZNWVhsbGNpQTlJRXd1YkdGNVpYSkhjbTkxY0NncFhHNGdJQ0FnZEdocGN5NXdiMng1YkdsdVpYTXVabTl5UldGamFDZ29jRzlzZVd4cGJtVXBJRDArSUh0Y2JpQWdJQ0FnSUd4bGRDQmpiMnh2Y2lBOUlIUm9hWE11YjNCMGFXOXVjeTVqYjJ4dmNseHVJQ0FnSUNBZ2FXWWdLSFJvYVhNdWIzQjBhVzl1Y3k1eVpXNWtaWEpRYjJ4NWJHbHVaVU52Ykc5eVZIbHdaU0E5UFQwZ0ozTmxaMjFsYm5SbFpDY3BJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSWdQU0IwYUdsekxtZGxkRk5sWjIxbGJuUmxaRkJ2Ykhsc2FXNWxRMjlzYjNJb2NHOXNlV3hwYm1VdVoyVjBSR0YwWVNncEtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1kyOXVjM1FnYjNCMGFXOXVjem9nVEM1UWIyeDViR2x1WlU5d2RHbHZibk1nUFNCUFltcGxZM1F1WVhOemFXZHVLSHQ5TENCMGFHbHpMbTl3ZEdsdmJuTXNJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSXNYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdZMjl1YzNRZ2JtVjNVRzlzZVd4cGJtVWdQU0J1WlhjZ1VHOXNlV3hwYm1Vb1hHNGdJQ0FnSUNBZ0lIQnZiSGxzYVc1bExtZGxkRXhoZEV4dVozTW9LU0JoY3lCUWIyeDViR2x1WlV4aGRFeHVaMFY0Y0hKbGMzTnBiMjRzWEc0Z0lDQWdJQ0FnSUc5d2RHbHZibk5jYmlBZ0lDQWdJQ2xjYmlBZ0lDQWdJRzVsZDFCdmJIbHNhVzVsTG05dUtDZGpiR2xqYXljc0lDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjJ4NWJHbHVaVU5zYVdOclNHRnVaR3hsY2lod2IyeDViR2x1WlNsY2JpQWdJQ0FnSUgwcFhHNGdJQ0FnSUNCdVpYZFFiMng1YkdsdVpTNXpaWFJFWVhSaEtIQnZiSGxzYVc1bExtZGxkRVJoZEdFb0tTbGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWRHOXZiSFJwY0VGMGRISXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1VHOXNlV3hwYm1VdVltbHVaRlJ2YjJ4MGFYQW9kR2hwY3k1blpYUlViMjlzVkdsd1EyOXVkR1Z1ZENodVpYZFFiMng1YkdsdVpTNW5aWFJFWVhSaEtDa3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1d2IyeDViR2x1WlV4aGVXVnlMbUZrWkV4aGVXVnlLRzVsZDFCdmJIbHNhVzVsS1Z4dUlDQWdJSDBwWEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Y0c5c2VXeHBibVZNWVhsbGNseHVJQ0I5WEc0Z0lIQnlhWFpoZEdVZ1kyRmphR1ZUWldkdFpXNTBVR0Z5WVcxektDa2dlMXh1SUNBZ0lHTnZibk4wSUhObFoyMWxiblJsWkV4bGJtZDBhQ0E5SUhSb2FYTXViM0IwYVc5dWN5NXpaV2R0Wlc1MFpXUkRiMnh2Y25NdWJHVnVaM1JvWEc0Z0lDQWdiR1YwSUcxaGVGWmhiQ0E5SUMxSmJtWnBibWwwZVZ4dUlDQWdJR3hsZENCdGFXNVdZV3dnUFNCSmJtWnBibWwwZVZ4dUlDQWdJR1p2Y2lBb1kyOXVjM1FnWkdGMFlTQnZaaUIwYUdsekxtUmhkR0ZNYVhOMEtTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCMllXd2dQU0JrWVhSaFczUm9hWE11YjNCMGFXOXVjeTV6WldkdFpXNTBaV1JCZEhSeVhWeHVJQ0FnSUNBZ2JXRjRWbUZzSUQwZ1RXRjBhQzV0WVhnb2JXRjRWbUZzTENCMllXd3BYRzRnSUNBZ0lDQnRhVzVXWVd3Z1BTQk5ZWFJvTG0xcGJpaHRhVzVXWVd3c0lIWmhiQ2xjYmlBZ0lDQjlYRzRnSUNBZ1kyOXVjM1FnYzNSbGNDQTlJQ2h0WVhoV1lXd2dMU0J0YVc1V1lXd2dLeUF4S1NBdklITmxaMjFsYm5SbFpFeGxibWQwYUZ4dUlDQWdJSFJvYVhNdWMyVm5iV1Z1ZEdWa1RXbHVJRDBnYldsdVZtRnNYRzRnSUNBZ2RHaHBjeTV6WldkdFpXNTBaV1JUZEdWd0lEMGdjM1JsY0Z4dUlDQjlYRzRnSUhCeWFYWmhkR1VnWjJWMFEyOXNiM0lvWkdGMFlUb2dSR0YwWVV4cGMzUkpkR1Z0TENCdGIyUmxQem9nUTI5c2IzSk5iMlJsS1NCN1hHNGdJQ0FnYkdWMElHTnZiRzl5SUQwZ2RHaHBjeTV2Y0hScGIyNXpMbU52Ykc5eVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjNCMGFXOXVjeTV5Wlc1a1pYSlFiMng1YkdsdVpVTnZiRzl5Vkhsd1pTQTlQVDBnSjNObFoyMWxiblJsWkNjcElIdGNiaUFnSUNBZ0lHTnZiRzl5SUQwZ2RHaHBjeTVuWlhSVFpXZHRaVzUwWldSUWIyeDViR2x1WlVOdmJHOXlLR1JoZEdFcFhHNGdJQ0FnZlZ4dUlDQWdJSE4zYVhSamFDQW9iVzlrWlNrZ2UxeHVJQ0FnSUNBZ1kyRnpaU0FuWkdGeWEyVnVKenBjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JoY210bGJpaGpiMnh2Y2lsY2JpQWdJQ0FnSUdOaGMyVWdKMnhwWjJoMFpXNG5PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiR2xuYUhSbGJpaGpiMnh2Y2lsY2JpQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNseHVJQ0FnSUgxY2JpQWdmVnh1ZlZ4dUlpd2lhVzF3YjNKMElDb2dZWE1nUTI5c2IzSWdabkp2YlNBblkyOXNiM0luWEc1Y2JtWjFibU4wYVc5dUlHeHBaMmgwWlc0b2FHVjRRMjlzYjNJNklITjBjbWx1WnlrZ2UxeHVJQ0J5WlhSMWNtNGdRMjlzYjNJb2FHVjRRMjlzYjNJcFhHNGdJQ0FnTG14cFoyaDBaVzRvTUM0MUtWeHVJQ0FnSUM1b1pYZ29LVnh1ZlZ4dVpuVnVZM1JwYjI0Z1pHRnlhMlZ1S0dobGVFTnZiRzl5T2lCemRISnBibWNwSUh0Y2JpQWdjbVYwZFhKdUlFTnZiRzl5S0dobGVFTnZiRzl5S1Z4dUlDQWdJQzVrWVhKclpXNG9NQzQxS1Z4dUlDQWdJQzVvWlhnb0tWeHVmVnh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNCc2FXZG9kR1Z1TEZ4dUlDQmtZWEpyWlc0c1hHNTlYRzVsZUhCdmNuUWdleUJzYVdkb2RHVnVMQ0JrWVhKclpXNGdmVnh1SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PSIsIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBsZWFmbGV0TWFwIGZyb20gJy4uLy4uLy4uL2xlYWZsZXQtbGF5ZXInXG5cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IEwgPSB3aW5kb3cuTFxuXG52YXIgcG9zaXRpb24gPSBuZXcgTC5MYXRMbmcoMzkuOTA3NzgsIDExNi40MDEyMTYpXG52YXIgbWFwID0gTC5tYXAoJ21hcCcpLnNldFZpZXcocG9zaXRpb24sIDEzKVxuXG5MLnRpbGVMYXllclxuICAuY2hpbmFQcm92aWRlcignR2FvRGUuTm9ybWFsLk1hcCcsIHsgbWF4Wm9vbTogMTgsIG1pblpvb206IDMgfSlcbiAgLmFkZFRvKG1hcClcblxudmFyIGRhdGFMaXN0ID0gW1xuICB7XG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIHR5cGU6ICdQb2x5Z29uJyxcbiAgICAgIGNvb3JkaW5hdGVzOiBbXG4gICAgICAgIFtcbiAgICAgICAgICBbMTE2LjQwMTIxNiwgMzkuOTA3NzhdLFxuICAgICAgICAgIFsxMTYuMzkxMjE2LCAzOS45MDc3OF0sXG4gICAgICAgICAgWzExNi4zOTEyMTYsIDM5LjkxNzc4XSxcbiAgICAgICAgICBbMTE2LjQwMTIxNiwgMzkuOTE3NzhdLFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHByaWNlOiAxMDkwOTA5MDkwOTAsXG4gIH0sXG5dXG5cbnZhciBsYXllciA9IG5ldyBsZWFmbGV0TWFwLkdyaWRzTGF5ZXIoXG4gIG1hcCxcbiAgZGF0YUxpc3QsXG4gIHsgdG9vbHRpcEF0dHI6ICdwcmljZScsIHBvcHVwQXR0cjogeyBsYWJlbDogJ3AnLCB2YWx1ZTogJ3ByaWNlJyB9IH0sXG4gIGNvbnNvbGUubG9nXG4pXG5sYXllci50b2dnbGVUb29sdGlwKHRydWUpXG5sYXllci5kcmF3KClcblxuLy8gdmFyIGRhdGFMaXN0ID0gW1xuLy8gICB7XG4vLyAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICB9LFxuLy8gICAgIHByaWNlOiAxLFxuLy8gICAgIG5hbWU6ICc1Jyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgfSxcbi8vICAgICBwcmljZTogMSxcbi8vICAgICBuYW1lOiAnMicsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM5MTIxNiwgMzkuOTE3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDEsXG4vLyAgICAgbmFtZTogJzEnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkxNzc4XSxcbi8vICAgICB9LFxuLy8gICAgIHByaWNlOiAxLFxuLy8gICAgIG5hbWU6ICcyJ1xuLy8gICB9LFxuLy8gXVxuXG4vLyB2YXIgbGF5ZXIgPSBuZXcgbGVhZmxldE1hcC5NYXJrZXJzTGF5ZXIoXG4vLyAgIG1hcCxcbi8vICAgZGF0YUxpc3QsXG4vLyAgIHsgcmVuZGVyVHlwZTogJ2NsdXN0ZXInLCBpY29uVW5pY29kZTogJyYjeGU2NTU7JywgcG9wdXBBdHRyOiAnbmFtZScsIHRvb2x0aXBBdHRyOiAnbmFtZScgfSxcbi8vICAgY29uc29sZS5sb2dcbi8vIClcbi8vIGxheWVyLmRyYXcoKVxuXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDEsXG4vLyAgIH0sXG4vLyBdXG5cbi8vIHZhciBsYXllciA9IG5ldyBsZWFmbGV0TWFwLk1ha2Vyc0xheWVyKG1hcCwgZGF0YUxpc3QsIHt9LCBjb25zb2xlLmxvZylcbi8vIGxheWVyLmRyYXcoKVxuXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIFtcbi8vICAgICB7XG4vLyAgICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkwNzc4XSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBwcmljZTogMSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gICBbXG4vLyAgICAge1xuLy8gICAgICAgZ2VvbWV0cnk6IHtcbi8vICAgICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgICAgY29vcmRpbmF0ZXM6IFsxMTYuMzkxMjE2LCAzOS45MDc3OF0sXG4vLyAgICAgICB9LFxuLy8gICAgICAgcHJpY2U6IDEsXG4vLyAgICAgfSxcbi8vICAgXSxcbi8vICAgW1xuLy8gICAgIHtcbi8vICAgICAgIGdlb21ldHJ5OiB7XG4vLyAgICAgICAgIHR5cGU6ICdQb2ludCcsXG4vLyAgICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjM5MTIxNiwgMzkuOTE3NzhdLFxuLy8gICAgICAgfSxcbi8vICAgICAgIHByaWNlOiAxLFxuLy8gICAgIH0sXG4vLyAgIF0sXG4vLyAgIFtcbi8vICAgICB7XG4vLyAgICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgICB0eXBlOiAnUG9pbnQnLFxuLy8gICAgICAgICBjb29yZGluYXRlczogWzExNi40MDEyMTYsIDM5LjkxNzc4XSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBwcmljZTogMSxcbi8vICAgICB9LFxuLy8gICBdLFxuLy8gXVxuLy8gY29uc3QgbGF5ZXIgPSBuZXcgbGVhZmxldE1hcC5EeW5hbWljSGVhdExheWVyKFxuLy8gICBtYXAsXG4vLyAgIGRhdGFMaXN0LFxuLy8gICB7IGxvb3A6IHRydWUsIGF1dG86IHRydWUgfSxcbi8vICAgY29uc29sZS5sb2dcbi8vIClcbi8vICAgLmRyYXcoKVxuLy8gICAuc3RhcnQoKVxuXG4vLyBMLm1hcmtlcihbMzIuMDMwNCwgMTE4Ljc5NjhdLCB7XG4vLyAgIGljb246IEwuZGl2SWNvbih7XG4vLyAgICAgaHRtbDogJzxpIGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogNDBweDtcIj4mI3hlNjU1OzwvaT4nLFxuLy8gICAgIGljb25TaXplOiBbNDAsIDQwXSxcbi8vICAgICBjbGFzc05hbWU6ICd0ZXN0Jyxcbi8vICAgfSksXG4vLyB9KS5hZGRUbyhtYXApXG4vLyBMLm1hcmtlcihbMzIuMDMwNCwgMTE4Ljc5NjhdKS5hZGRUbyhtYXApXG4vLyB2YXIgZGF0YUxpc3QgPSBbXG4vLyAgIHtcbi8vICAgICBnZW9tZXRyeToge1xuLy8gICAgICAgdHlwZTogJ1BvaW50Jyxcbi8vICAgICAgIGNvb3JkaW5hdGVzOiBbMTE2LjQwMTIxNiwgMzkuOTA3NzhdLFxuLy8gICAgIH0sXG4vLyAgICAgcHJpY2U6IDIsXG4vLyAgIH0sXG4vLyBdXG5cbi8vIGNvbnN0IGxheWVyID0gbmV3IGxlYWZsZXRNYXAuTWFya2Vyc0xheWVyKFxuLy8gICBtYXAsXG4vLyAgIGRhdGFMaXN0LFxuLy8gICB7XG4vLyAgICAgaWNvblVuaWNvZGU6ICcmI3hlNjU1OycsXG4vLyAgICAgaWNvblNpemU6IFsyMCwgMjBdLFxuLy8gICAgIGljb25BbmNob3I6IFsxMCwgMjBdLFxuLy8gICAgIHBvcHVwQXR0cjogJ3ByaWNlJyxcbi8vICAgICB0b29sdGlwQXR0cjogJ3ByaWNlJyxcbi8vICAgfSxcbi8vICAgZnVuY3Rpb24oZXZlbnROYW1lKSB7XG4vLyAgICAgY29uc29sZS5sb2coZXZlbnROYW1lKVxuLy8gICB9XG4vLyApXG5cbi8vIGxheWVyLmRyYXcoKVxuXG4vLyAvLyBMLm1hcmtlcihMLmxhdExuZygzOS45MDc3OCwgMTE2LjQwMTIxNikpXG4vLyAvLyAgIC5hZGRUbyhtYXApXG4vLyAvLyAgIC5iaW5kVG9vbHRpcCgnYWRmJylcblxuLy8gTC5tYXJrZXIoTC5sYXRMbmcoMzkuOTA3NzgsIDExNi40MDEyMTYpLCB7XG4vLyAgIG9wYWNpdHk6IDAuMixcbi8vICAgaWNvbjogTC5kaXZJY29uKHtcbi8vICAgICBpY29uQW5jaG9yOiBbMTAsIDIwXSxcbi8vICAgICBpY29uU2l6ZTogWzIwLCAyMF0sXG4vLyAgICAgaHRtbDogYFxuLy8gICAgIDxpXG4vLyAgICAgICBjbGFzcz1cImljb25mb250XCJcbi8vICAgICAgIHN0eWxlPVwiXG4vLyAgICAgICAgIGNvbG9yOiByZWQ7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgICAgIFwiXG4vLyAgICAgICA+XG4vLyAgICAgICAmI3hlNjU1O1xuLy8gICAgIDwvaT5cbi8vICAgYCxcbi8vICAgfSksXG4vLyB9KS5hZGRUbyhtYXApXG4vLyB3aW5kb3cubGF5ZXIgPSBsYXllclxuIl0sInNvdXJjZVJvb3QiOiIifQ==