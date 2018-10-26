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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItY29udmVydC9jb252ZXJzaW9ucy5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9jb2xvci1jb252ZXJ0L3JvdXRlLmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yLXN0cmluZy9ub2RlX21vZHVsZXMvY29sb3ItbmFtZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vbm9kZV9tb2R1bGVzL2NvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9ub2RlX21vZHVsZXMvaXMtYXJyYXlpc2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL25vZGVfbW9kdWxlcy9zaW1wbGUtc3dpenpsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2R5bmFtaWNIZWF0TGF5ZXIvRHluYW1pY0hlYXRMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvbWFya2VyL01hcmtlci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL21hcmtlci9NYXJrZXJzQnVmZmVyTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9tYXJrZXIvTWFya2Vyc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Hcmlkc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWdvbi9Qb2x5Z29uc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvcG9seWxpbmUvUG9seWxpbmUudHMiLCJ3ZWJwYWNrOi8vbGVhZmxldE1hcC8uL3NyYy9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllci50cyIsIndlYnBhY2s6Ly9sZWFmbGV0TWFwLy4vc3JjL3BvbHlsaW5lL1BvbHlsaW5lc0xheWVyLnRzIiwid2VicGFjazovL2xlYWZsZXRNYXAvLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHNEQUFZOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsUUFBUSw0QkFBNEI7QUFDcEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTywyQkFBMkI7QUFDbEMsT0FBTyw2QkFBNkI7QUFDcEMsV0FBVyxpQ0FBaUM7QUFDNUMsVUFBVSxnQ0FBZ0M7QUFDMUMsV0FBVyxpQ0FBaUM7QUFDNUMsT0FBTyxxQ0FBcUM7QUFDNUMsU0FBUywyQ0FBMkM7QUFDcEQsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdCQUFnQjtBQUNyRSxtREFBbUQsY0FBYztBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPLFFBQVE7QUFDL0IsZ0JBQWdCLE9BQU8sUUFBUTtBQUMvQixpQkFBaUIsT0FBTyxPQUFPO0FBQy9CLGlCQUFpQixPQUFPLE9BQU87QUFDL0IsZ0JBQWdCLFFBQVEsT0FBTztBQUMvQixnQkFBZ0IsUUFBUSxPQUFPO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxFQUFFLFVBQVUsRUFBRTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLGdGQUFZO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyw4REFBZ0I7O0FBRXRDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixJQUFJO0FBQzdCLHdCQUF3QixFQUFFLFdBQVcsRUFBRTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDek9ZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZKYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQywwREFBYztBQUN4QyxjQUFjLG1CQUFPLENBQUMsNERBQWU7O0FBRXJDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUVBQXFFLGtDQUFrQyxFQUFFOztBQUV6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixLQUFLLFdBQVcsRUFBRTtZQUN4RCxLQUFLLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQztTQUM3QztRQUNELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxRQUFRO2dCQUNYLE9BQU8sMkRBQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sNERBQU8sQ0FBQyxLQUFLLENBQUM7WUFDdkI7Z0JBQ0UsT0FBTyxLQUFLO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7QUN2UEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUU5QixTQUFTLE9BQU8sQ0FBQyxRQUFnQjtJQUMvQixPQUFPLGtDQUFLLENBQUMsUUFBUSxDQUFDO1NBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDWixHQUFHLEVBQUU7QUFDVixDQUFDO0FBQ0QsU0FBUyxNQUFNLENBQUMsUUFBZ0I7SUFDOUIsT0FBTyxrQ0FBSyxDQUFDLFFBQVEsQ0FBQztTQUNuQixNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ1gsR0FBRyxFQUFFO0FBQ1YsQ0FBQztBQUNjO0lBQ2IsT0FBTztJQUNQLE1BQU07Q0FDUDtBQUN5QiIsImZpbGUiOiJsZWFmbGV0LWxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibGVhZmxldE1hcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJsZWFmbGV0TWFwXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8qIE1JVCBsaWNlbnNlICovXG52YXIgY3NzS2V5d29yZHMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG5cbi8vIE5PVEU6IGNvbnZlcnNpb25zIHNob3VsZCBvbmx5IHJldHVybiBwcmltaXRpdmUgdmFsdWVzIChpLmUuIGFycmF5cywgb3Jcbi8vICAgICAgIHZhbHVlcyB0aGF0IGdpdmUgY29ycmVjdCBgdHlwZW9mYCByZXN1bHRzKS5cbi8vICAgICAgIGRvIG5vdCB1c2UgYm94IHZhbHVlcyB0eXBlcyAoaS5lLiBOdW1iZXIoKSwgU3RyaW5nKCksIGV0Yy4pXG5cbnZhciByZXZlcnNlS2V5d29yZHMgPSB7fTtcbmZvciAodmFyIGtleSBpbiBjc3NLZXl3b3Jkcykge1xuXHRpZiAoY3NzS2V5d29yZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdHJldmVyc2VLZXl3b3Jkc1tjc3NLZXl3b3Jkc1trZXldXSA9IGtleTtcblx0fVxufVxuXG52YXIgY29udmVydCA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHRyZ2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAncmdiJ30sXG5cdGhzbDoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdoc2wnfSxcblx0aHN2OiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2hzdid9LFxuXHRod2I6IHtjaGFubmVsczogMywgbGFiZWxzOiAnaHdiJ30sXG5cdGNteWs6IHtjaGFubmVsczogNCwgbGFiZWxzOiAnY215ayd9LFxuXHR4eXo6IHtjaGFubmVsczogMywgbGFiZWxzOiAneHl6J30sXG5cdGxhYjoge2NoYW5uZWxzOiAzLCBsYWJlbHM6ICdsYWInfSxcblx0bGNoOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogJ2xjaCd9LFxuXHRoZXg6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2hleCddfSxcblx0a2V5d29yZDoge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsna2V5d29yZCddfSxcblx0YW5zaTE2OiB7Y2hhbm5lbHM6IDEsIGxhYmVsczogWydhbnNpMTYnXX0sXG5cdGFuc2kyNTY6IHtjaGFubmVsczogMSwgbGFiZWxzOiBbJ2Fuc2kyNTYnXX0sXG5cdGhjZzoge2NoYW5uZWxzOiAzLCBsYWJlbHM6IFsnaCcsICdjJywgJ2cnXX0sXG5cdGFwcGxlOiB7Y2hhbm5lbHM6IDMsIGxhYmVsczogWydyMTYnLCAnZzE2JywgJ2IxNiddfSxcblx0Z3JheToge2NoYW5uZWxzOiAxLCBsYWJlbHM6IFsnZ3JheSddfVxufTtcblxuLy8gaGlkZSAuY2hhbm5lbHMgYW5kIC5sYWJlbHMgcHJvcGVydGllc1xuZm9yICh2YXIgbW9kZWwgaW4gY29udmVydCkge1xuXHRpZiAoY29udmVydC5oYXNPd25Qcm9wZXJ0eShtb2RlbCkpIHtcblx0XHRpZiAoISgnY2hhbm5lbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmICghKCdsYWJlbHMnIGluIGNvbnZlcnRbbW9kZWxdKSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGNoYW5uZWwgbGFiZWxzIHByb3BlcnR5OiAnICsgbW9kZWwpO1xuXHRcdH1cblxuXHRcdGlmIChjb252ZXJ0W21vZGVsXS5sYWJlbHMubGVuZ3RoICE9PSBjb252ZXJ0W21vZGVsXS5jaGFubmVscykge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjaGFubmVsIGFuZCBsYWJlbCBjb3VudHMgbWlzbWF0Y2g6ICcgKyBtb2RlbCk7XG5cdFx0fVxuXG5cdFx0dmFyIGNoYW5uZWxzID0gY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRkZWxldGUgY29udmVydFttb2RlbF0uY2hhbm5lbHM7XG5cdFx0ZGVsZXRlIGNvbnZlcnRbbW9kZWxdLmxhYmVscztcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY2hhbm5lbHN9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFttb2RlbF0sICdsYWJlbHMnLCB7dmFsdWU6IGxhYmVsc30pO1xuXHR9XG59XG5cbmNvbnZlcnQucmdiLmhzbCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cdHZhciBkZWx0YSA9IG1heCAtIG1pbjtcblx0dmFyIGg7XG5cdHZhciBzO1xuXHR2YXIgbDtcblxuXHRpZiAobWF4ID09PSBtaW4pIHtcblx0XHRoID0gMDtcblx0fSBlbHNlIGlmIChyID09PSBtYXgpIHtcblx0XHRoID0gKGcgLSBiKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuXHRcdGggPSAyICsgKGIgLSByKSAvIGRlbHRhO1xuXHR9IGVsc2UgaWYgKGIgPT09IG1heCkge1xuXHRcdGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuXHR9XG5cblx0aCA9IE1hdGgubWluKGggKiA2MCwgMzYwKTtcblxuXHRpZiAoaCA8IDApIHtcblx0XHRoICs9IDM2MDtcblx0fVxuXG5cdGwgPSAobWluICsgbWF4KSAvIDI7XG5cblx0aWYgKG1heCA9PT0gbWluKSB7XG5cdFx0cyA9IDA7XG5cdH0gZWxzZSBpZiAobCA8PSAwLjUpIHtcblx0XHRzID0gZGVsdGEgLyAobWF4ICsgbWluKTtcblx0fSBlbHNlIHtcblx0XHRzID0gZGVsdGEgLyAoMiAtIG1heCAtIG1pbik7XG5cdH1cblxuXHRyZXR1cm4gW2gsIHMgKiAxMDAsIGwgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuaHN2ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgcmRpZjtcblx0dmFyIGdkaWY7XG5cdHZhciBiZGlmO1xuXHR2YXIgaDtcblx0dmFyIHM7XG5cblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIHYgPSBNYXRoLm1heChyLCBnLCBiKTtcblx0dmFyIGRpZmYgPSB2IC0gTWF0aC5taW4ociwgZywgYik7XG5cdHZhciBkaWZmYyA9IGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICh2IC0gYykgLyA2IC8gZGlmZiArIDEgLyAyO1xuXHR9O1xuXG5cdGlmIChkaWZmID09PSAwKSB7XG5cdFx0aCA9IHMgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHMgPSBkaWZmIC8gdjtcblx0XHRyZGlmID0gZGlmZmMocik7XG5cdFx0Z2RpZiA9IGRpZmZjKGcpO1xuXHRcdGJkaWYgPSBkaWZmYyhiKTtcblxuXHRcdGlmIChyID09PSB2KSB7XG5cdFx0XHRoID0gYmRpZiAtIGdkaWY7XG5cdFx0fSBlbHNlIGlmIChnID09PSB2KSB7XG5cdFx0XHRoID0gKDEgLyAzKSArIHJkaWYgLSBiZGlmO1xuXHRcdH0gZWxzZSBpZiAoYiA9PT0gdikge1xuXHRcdFx0aCA9ICgyIC8gMykgKyBnZGlmIC0gcmRpZjtcblx0XHR9XG5cdFx0aWYgKGggPCAwKSB7XG5cdFx0XHRoICs9IDE7XG5cdFx0fSBlbHNlIGlmIChoID4gMSkge1xuXHRcdFx0aCAtPSAxO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBbXG5cdFx0aCAqIDM2MCxcblx0XHRzICogMTAwLFxuXHRcdHYgKiAxMDBcblx0XTtcbn07XG5cbmNvbnZlcnQucmdiLmh3YiA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF07XG5cdHZhciBnID0gcmdiWzFdO1xuXHR2YXIgYiA9IHJnYlsyXTtcblx0dmFyIGggPSBjb252ZXJ0LnJnYi5oc2wocmdiKVswXTtcblx0dmFyIHcgPSAxIC8gMjU1ICogTWF0aC5taW4ociwgTWF0aC5taW4oZywgYikpO1xuXG5cdGIgPSAxIC0gMSAvIDI1NSAqIE1hdGgubWF4KHIsIE1hdGgubWF4KGcsIGIpKTtcblxuXHRyZXR1cm4gW2gsIHcgKiAxMDAsIGIgKiAxMDBdO1xufTtcblxuY29udmVydC5yZ2IuY215ayA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIGM7XG5cdHZhciBtO1xuXHR2YXIgeTtcblx0dmFyIGs7XG5cblx0ayA9IE1hdGgubWluKDEgLSByLCAxIC0gZywgMSAtIGIpO1xuXHRjID0gKDEgLSByIC0gaykgLyAoMSAtIGspIHx8IDA7XG5cdG0gPSAoMSAtIGcgLSBrKSAvICgxIC0gaykgfHwgMDtcblx0eSA9ICgxIC0gYiAtIGspIC8gKDEgLSBrKSB8fCAwO1xuXG5cdHJldHVybiBbYyAqIDEwMCwgbSAqIDEwMCwgeSAqIDEwMCwgayAqIDEwMF07XG59O1xuXG4vKipcbiAqIFNlZSBodHRwczovL2VuLm0ud2lraXBlZGlhLm9yZy93aWtpL0V1Y2xpZGVhbl9kaXN0YW5jZSNTcXVhcmVkX0V1Y2xpZGVhbl9kaXN0YW5jZVxuICogKi9cbmZ1bmN0aW9uIGNvbXBhcmF0aXZlRGlzdGFuY2UoeCwgeSkge1xuXHRyZXR1cm4gKFxuXHRcdE1hdGgucG93KHhbMF0gLSB5WzBdLCAyKSArXG5cdFx0TWF0aC5wb3coeFsxXSAtIHlbMV0sIDIpICtcblx0XHRNYXRoLnBvdyh4WzJdIC0geVsyXSwgMilcblx0KTtcbn1cblxuY29udmVydC5yZ2Iua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHJldmVyc2VkID0gcmV2ZXJzZUtleXdvcmRzW3JnYl07XG5cdGlmIChyZXZlcnNlZCkge1xuXHRcdHJldHVybiByZXZlcnNlZDtcblx0fVxuXG5cdHZhciBjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gSW5maW5pdHk7XG5cdHZhciBjdXJyZW50Q2xvc2VzdEtleXdvcmQ7XG5cblx0Zm9yICh2YXIga2V5d29yZCBpbiBjc3NLZXl3b3Jkcykge1xuXHRcdGlmIChjc3NLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShrZXl3b3JkKSkge1xuXHRcdFx0dmFyIHZhbHVlID0gY3NzS2V5d29yZHNba2V5d29yZF07XG5cblx0XHRcdC8vIENvbXB1dGUgY29tcGFyYXRpdmUgZGlzdGFuY2Vcblx0XHRcdHZhciBkaXN0YW5jZSA9IGNvbXBhcmF0aXZlRGlzdGFuY2UocmdiLCB2YWx1ZSk7XG5cblx0XHRcdC8vIENoZWNrIGlmIGl0cyBsZXNzLCBpZiBzbyBzZXQgYXMgY2xvc2VzdFxuXHRcdFx0aWYgKGRpc3RhbmNlIDwgY3VycmVudENsb3Nlc3REaXN0YW5jZSkge1xuXHRcdFx0XHRjdXJyZW50Q2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG5cdFx0XHRcdGN1cnJlbnRDbG9zZXN0S2V5d29yZCA9IGtleXdvcmQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDbG9zZXN0S2V5d29yZDtcbn07XG5cbmNvbnZlcnQua2V5d29yZC5yZ2IgPSBmdW5jdGlvbiAoa2V5d29yZCkge1xuXHRyZXR1cm4gY3NzS2V5d29yZHNba2V5d29yZF07XG59O1xuXG5jb252ZXJ0LnJnYi54eXogPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciByID0gcmdiWzBdIC8gMjU1O1xuXHR2YXIgZyA9IHJnYlsxXSAvIDI1NTtcblx0dmFyIGIgPSByZ2JbMl0gLyAyNTU7XG5cblx0Ly8gYXNzdW1lIHNSR0Jcblx0ciA9IHIgPiAwLjA0MDQ1ID8gTWF0aC5wb3coKChyICsgMC4wNTUpIC8gMS4wNTUpLCAyLjQpIDogKHIgLyAxMi45Mik7XG5cdGcgPSBnID4gMC4wNDA0NSA/IE1hdGgucG93KCgoZyArIDAuMDU1KSAvIDEuMDU1KSwgMi40KSA6IChnIC8gMTIuOTIpO1xuXHRiID0gYiA+IDAuMDQwNDUgPyBNYXRoLnBvdygoKGIgKyAwLjA1NSkgLyAxLjA1NSksIDIuNCkgOiAoYiAvIDEyLjkyKTtcblxuXHR2YXIgeCA9IChyICogMC40MTI0KSArIChnICogMC4zNTc2KSArIChiICogMC4xODA1KTtcblx0dmFyIHkgPSAociAqIDAuMjEyNikgKyAoZyAqIDAuNzE1MikgKyAoYiAqIDAuMDcyMik7XG5cdHZhciB6ID0gKHIgKiAwLjAxOTMpICsgKGcgKiAwLjExOTIpICsgKGIgKiAwLjk1MDUpO1xuXG5cdHJldHVybiBbeCAqIDEwMCwgeSAqIDEwMCwgeiAqIDEwMF07XG59O1xuXG5jb252ZXJ0LnJnYi5sYWIgPSBmdW5jdGlvbiAocmdiKSB7XG5cdHZhciB4eXogPSBjb252ZXJ0LnJnYi54eXoocmdiKTtcblx0dmFyIHggPSB4eXpbMF07XG5cdHZhciB5ID0geHl6WzFdO1xuXHR2YXIgeiA9IHh5elsyXTtcblx0dmFyIGw7XG5cdHZhciBhO1xuXHR2YXIgYjtcblxuXHR4IC89IDk1LjA0Nztcblx0eSAvPSAxMDA7XG5cdHogLz0gMTA4Ljg4MztcblxuXHR4ID0geCA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeCwgMSAvIDMpIDogKDcuNzg3ICogeCkgKyAoMTYgLyAxMTYpO1xuXHR5ID0geSA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeSwgMSAvIDMpIDogKDcuNzg3ICogeSkgKyAoMTYgLyAxMTYpO1xuXHR6ID0geiA+IDAuMDA4ODU2ID8gTWF0aC5wb3coeiwgMSAvIDMpIDogKDcuNzg3ICogeikgKyAoMTYgLyAxMTYpO1xuXG5cdGwgPSAoMTE2ICogeSkgLSAxNjtcblx0YSA9IDUwMCAqICh4IC0geSk7XG5cdGIgPSAyMDAgKiAoeSAtIHopO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LmhzbC5yZ2IgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdIC8gMzYwO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciB0MTtcblx0dmFyIHQyO1xuXHR2YXIgdDM7XG5cdHZhciByZ2I7XG5cdHZhciB2YWw7XG5cblx0aWYgKHMgPT09IDApIHtcblx0XHR2YWwgPSBsICogMjU1O1xuXHRcdHJldHVybiBbdmFsLCB2YWwsIHZhbF07XG5cdH1cblxuXHRpZiAobCA8IDAuNSkge1xuXHRcdHQyID0gbCAqICgxICsgcyk7XG5cdH0gZWxzZSB7XG5cdFx0dDIgPSBsICsgcyAtIGwgKiBzO1xuXHR9XG5cblx0dDEgPSAyICogbCAtIHQyO1xuXG5cdHJnYiA9IFswLCAwLCAwXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHR0MyA9IGggKyAxIC8gMyAqIC0oaSAtIDEpO1xuXHRcdGlmICh0MyA8IDApIHtcblx0XHRcdHQzKys7XG5cdFx0fVxuXHRcdGlmICh0MyA+IDEpIHtcblx0XHRcdHQzLS07XG5cdFx0fVxuXG5cdFx0aWYgKDYgKiB0MyA8IDEpIHtcblx0XHRcdHZhbCA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzO1xuXHRcdH0gZWxzZSBpZiAoMiAqIHQzIDwgMSkge1xuXHRcdFx0dmFsID0gdDI7XG5cdFx0fSBlbHNlIGlmICgzICogdDMgPCAyKSB7XG5cdFx0XHR2YWwgPSB0MSArICh0MiAtIHQxKSAqICgyIC8gMyAtIHQzKSAqIDY7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbCA9IHQxO1xuXHRcdH1cblxuXHRcdHJnYltpXSA9IHZhbCAqIDI1NTtcblx0fVxuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jb252ZXJ0LmhzbC5oc3YgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBoID0gaHNsWzBdO1xuXHR2YXIgcyA9IGhzbFsxXSAvIDEwMDtcblx0dmFyIGwgPSBoc2xbMl0gLyAxMDA7XG5cdHZhciBzbWluID0gcztcblx0dmFyIGxtaW4gPSBNYXRoLm1heChsLCAwLjAxKTtcblx0dmFyIHN2O1xuXHR2YXIgdjtcblxuXHRsICo9IDI7XG5cdHMgKj0gKGwgPD0gMSkgPyBsIDogMiAtIGw7XG5cdHNtaW4gKj0gbG1pbiA8PSAxID8gbG1pbiA6IDIgLSBsbWluO1xuXHR2ID0gKGwgKyBzKSAvIDI7XG5cdHN2ID0gbCA9PT0gMCA/ICgyICogc21pbikgLyAobG1pbiArIHNtaW4pIDogKDIgKiBzKSAvIChsICsgcyk7XG5cblx0cmV0dXJuIFtoLCBzdiAqIDEwMCwgdiAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmhzdi5yZ2IgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdIC8gNjA7XG5cdHZhciBzID0gaHN2WzFdIC8gMTAwO1xuXHR2YXIgdiA9IGhzdlsyXSAvIDEwMDtcblx0dmFyIGhpID0gTWF0aC5mbG9vcihoKSAlIDY7XG5cblx0dmFyIGYgPSBoIC0gTWF0aC5mbG9vcihoKTtcblx0dmFyIHAgPSAyNTUgKiB2ICogKDEgLSBzKTtcblx0dmFyIHEgPSAyNTUgKiB2ICogKDEgLSAocyAqIGYpKTtcblx0dmFyIHQgPSAyNTUgKiB2ICogKDEgLSAocyAqICgxIC0gZikpKTtcblx0diAqPSAyNTU7XG5cblx0c3dpdGNoIChoaSkge1xuXHRcdGNhc2UgMDpcblx0XHRcdHJldHVybiBbdiwgdCwgcF07XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIFtxLCB2LCBwXTtcblx0XHRjYXNlIDI6XG5cdFx0XHRyZXR1cm4gW3AsIHYsIHRdO1xuXHRcdGNhc2UgMzpcblx0XHRcdHJldHVybiBbcCwgcSwgdl07XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cmV0dXJuIFt0LCBwLCB2XTtcblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gW3YsIHAsIHFdO1xuXHR9XG59O1xuXG5jb252ZXJ0Lmhzdi5oc2wgPSBmdW5jdGlvbiAoaHN2KSB7XG5cdHZhciBoID0gaHN2WzBdO1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cdHZhciB2bWluID0gTWF0aC5tYXgodiwgMC4wMSk7XG5cdHZhciBsbWluO1xuXHR2YXIgc2w7XG5cdHZhciBsO1xuXG5cdGwgPSAoMiAtIHMpICogdjtcblx0bG1pbiA9ICgyIC0gcykgKiB2bWluO1xuXHRzbCA9IHMgKiB2bWluO1xuXHRzbCAvPSAobG1pbiA8PSAxKSA/IGxtaW4gOiAyIC0gbG1pbjtcblx0c2wgPSBzbCB8fCAwO1xuXHRsIC89IDI7XG5cblx0cmV0dXJuIFtoLCBzbCAqIDEwMCwgbCAqIDEwMF07XG59O1xuXG4vLyBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3MtY29sb3IvI2h3Yi10by1yZ2JcbmNvbnZlcnQuaHdiLnJnYiA9IGZ1bmN0aW9uIChod2IpIHtcblx0dmFyIGggPSBod2JbMF0gLyAzNjA7XG5cdHZhciB3aCA9IGh3YlsxXSAvIDEwMDtcblx0dmFyIGJsID0gaHdiWzJdIC8gMTAwO1xuXHR2YXIgcmF0aW8gPSB3aCArIGJsO1xuXHR2YXIgaTtcblx0dmFyIHY7XG5cdHZhciBmO1xuXHR2YXIgbjtcblxuXHQvLyB3aCArIGJsIGNhbnQgYmUgPiAxXG5cdGlmIChyYXRpbyA+IDEpIHtcblx0XHR3aCAvPSByYXRpbztcblx0XHRibCAvPSByYXRpbztcblx0fVxuXG5cdGkgPSBNYXRoLmZsb29yKDYgKiBoKTtcblx0diA9IDEgLSBibDtcblx0ZiA9IDYgKiBoIC0gaTtcblxuXHRpZiAoKGkgJiAweDAxKSAhPT0gMCkge1xuXHRcdGYgPSAxIC0gZjtcblx0fVxuXG5cdG4gPSB3aCArIGYgKiAodiAtIHdoKTsgLy8gbGluZWFyIGludGVycG9sYXRpb25cblxuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXHRzd2l0Y2ggKGkpIHtcblx0XHRkZWZhdWx0OlxuXHRcdGNhc2UgNjpcblx0XHRjYXNlIDA6IHIgPSB2OyBnID0gbjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDE6IHIgPSBuOyBnID0gdjsgYiA9IHdoOyBicmVhaztcblx0XHRjYXNlIDI6IHIgPSB3aDsgZyA9IHY7IGIgPSBuOyBicmVhaztcblx0XHRjYXNlIDM6IHIgPSB3aDsgZyA9IG47IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDQ6IHIgPSBuOyBnID0gd2g7IGIgPSB2OyBicmVhaztcblx0XHRjYXNlIDU6IHIgPSB2OyBnID0gd2g7IGIgPSBuOyBicmVhaztcblx0fVxuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0LmNteWsucmdiID0gZnVuY3Rpb24gKGNteWspIHtcblx0dmFyIGMgPSBjbXlrWzBdIC8gMTAwO1xuXHR2YXIgbSA9IGNteWtbMV0gLyAxMDA7XG5cdHZhciB5ID0gY215a1syXSAvIDEwMDtcblx0dmFyIGsgPSBjbXlrWzNdIC8gMTAwO1xuXHR2YXIgcjtcblx0dmFyIGc7XG5cdHZhciBiO1xuXG5cdHIgPSAxIC0gTWF0aC5taW4oMSwgYyAqICgxIC0gaykgKyBrKTtcblx0ZyA9IDEgLSBNYXRoLm1pbigxLCBtICogKDEgLSBrKSArIGspO1xuXHRiID0gMSAtIE1hdGgubWluKDEsIHkgKiAoMSAtIGspICsgayk7XG5cblx0cmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbn07XG5cbmNvbnZlcnQueHl6LnJnYiA9IGZ1bmN0aW9uICh4eXopIHtcblx0dmFyIHggPSB4eXpbMF0gLyAxMDA7XG5cdHZhciB5ID0geHl6WzFdIC8gMTAwO1xuXHR2YXIgeiA9IHh5elsyXSAvIDEwMDtcblx0dmFyIHI7XG5cdHZhciBnO1xuXHR2YXIgYjtcblxuXHRyID0gKHggKiAzLjI0MDYpICsgKHkgKiAtMS41MzcyKSArICh6ICogLTAuNDk4Nik7XG5cdGcgPSAoeCAqIC0wLjk2ODkpICsgKHkgKiAxLjg3NTgpICsgKHogKiAwLjA0MTUpO1xuXHRiID0gKHggKiAwLjA1NTcpICsgKHkgKiAtMC4yMDQwKSArICh6ICogMS4wNTcwKTtcblxuXHQvLyBhc3N1bWUgc1JHQlxuXHRyID0gciA+IDAuMDAzMTMwOFxuXHRcdD8gKCgxLjA1NSAqIE1hdGgucG93KHIsIDEuMCAvIDIuNCkpIC0gMC4wNTUpXG5cdFx0OiByICogMTIuOTI7XG5cblx0ZyA9IGcgPiAwLjAwMzEzMDhcblx0XHQ/ICgoMS4wNTUgKiBNYXRoLnBvdyhnLCAxLjAgLyAyLjQpKSAtIDAuMDU1KVxuXHRcdDogZyAqIDEyLjkyO1xuXG5cdGIgPSBiID4gMC4wMDMxMzA4XG5cdFx0PyAoKDEuMDU1ICogTWF0aC5wb3coYiwgMS4wIC8gMi40KSkgLSAwLjA1NSlcblx0XHQ6IGIgKiAxMi45MjtcblxuXHRyID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgciksIDEpO1xuXHRnID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgZyksIDEpO1xuXHRiID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgYiksIDEpO1xuXG5cdHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG59O1xuXG5jb252ZXJ0Lnh5ei5sYWIgPSBmdW5jdGlvbiAoeHl6KSB7XG5cdHZhciB4ID0geHl6WzBdO1xuXHR2YXIgeSA9IHh5elsxXTtcblx0dmFyIHogPSB4eXpbMl07XG5cdHZhciBsO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cblx0eCAvPSA5NS4wNDc7XG5cdHkgLz0gMTAwO1xuXHR6IC89IDEwOC44ODM7XG5cblx0eCA9IHggPiAwLjAwODg1NiA/IE1hdGgucG93KHgsIDEgLyAzKSA6ICg3Ljc4NyAqIHgpICsgKDE2IC8gMTE2KTtcblx0eSA9IHkgPiAwLjAwODg1NiA/IE1hdGgucG93KHksIDEgLyAzKSA6ICg3Ljc4NyAqIHkpICsgKDE2IC8gMTE2KTtcblx0eiA9IHogPiAwLjAwODg1NiA/IE1hdGgucG93KHosIDEgLyAzKSA6ICg3Ljc4NyAqIHopICsgKDE2IC8gMTE2KTtcblxuXHRsID0gKDExNiAqIHkpIC0gMTY7XG5cdGEgPSA1MDAgKiAoeCAtIHkpO1xuXHRiID0gMjAwICogKHkgLSB6KTtcblxuXHRyZXR1cm4gW2wsIGEsIGJdO1xufTtcblxuY29udmVydC5sYWIueHl6ID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgeDtcblx0dmFyIHk7XG5cdHZhciB6O1xuXG5cdHkgPSAobCArIDE2KSAvIDExNjtcblx0eCA9IGEgLyA1MDAgKyB5O1xuXHR6ID0geSAtIGIgLyAyMDA7XG5cblx0dmFyIHkyID0gTWF0aC5wb3coeSwgMyk7XG5cdHZhciB4MiA9IE1hdGgucG93KHgsIDMpO1xuXHR2YXIgejIgPSBNYXRoLnBvdyh6LCAzKTtcblx0eSA9IHkyID4gMC4wMDg4NTYgPyB5MiA6ICh5IC0gMTYgLyAxMTYpIC8gNy43ODc7XG5cdHggPSB4MiA+IDAuMDA4ODU2ID8geDIgOiAoeCAtIDE2IC8gMTE2KSAvIDcuNzg3O1xuXHR6ID0gejIgPiAwLjAwODg1NiA/IHoyIDogKHogLSAxNiAvIDExNikgLyA3Ljc4NztcblxuXHR4ICo9IDk1LjA0Nztcblx0eSAqPSAxMDA7XG5cdHogKj0gMTA4Ljg4MztcblxuXHRyZXR1cm4gW3gsIHksIHpdO1xufTtcblxuY29udmVydC5sYWIubGNoID0gZnVuY3Rpb24gKGxhYikge1xuXHR2YXIgbCA9IGxhYlswXTtcblx0dmFyIGEgPSBsYWJbMV07XG5cdHZhciBiID0gbGFiWzJdO1xuXHR2YXIgaHI7XG5cdHZhciBoO1xuXHR2YXIgYztcblxuXHRociA9IE1hdGguYXRhbjIoYiwgYSk7XG5cdGggPSBociAqIDM2MCAvIDIgLyBNYXRoLlBJO1xuXG5cdGlmIChoIDwgMCkge1xuXHRcdGggKz0gMzYwO1xuXHR9XG5cblx0YyA9IE1hdGguc3FydChhICogYSArIGIgKiBiKTtcblxuXHRyZXR1cm4gW2wsIGMsIGhdO1xufTtcblxuY29udmVydC5sY2gubGFiID0gZnVuY3Rpb24gKGxjaCkge1xuXHR2YXIgbCA9IGxjaFswXTtcblx0dmFyIGMgPSBsY2hbMV07XG5cdHZhciBoID0gbGNoWzJdO1xuXHR2YXIgYTtcblx0dmFyIGI7XG5cdHZhciBocjtcblxuXHRociA9IGggLyAzNjAgKiAyICogTWF0aC5QSTtcblx0YSA9IGMgKiBNYXRoLmNvcyhocik7XG5cdGIgPSBjICogTWF0aC5zaW4oaHIpO1xuXG5cdHJldHVybiBbbCwgYSwgYl07XG59O1xuXG5jb252ZXJ0LnJnYi5hbnNpMTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXHR2YXIgdmFsdWUgPSAxIGluIGFyZ3VtZW50cyA/IGFyZ3VtZW50c1sxXSA6IGNvbnZlcnQucmdiLmhzdihhcmdzKVsyXTsgLy8gaHN2IC0+IGFuc2kxNiBvcHRpbWl6YXRpb25cblxuXHR2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgLyA1MCk7XG5cblx0aWYgKHZhbHVlID09PSAwKSB7XG5cdFx0cmV0dXJuIDMwO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAzMFxuXHRcdCsgKChNYXRoLnJvdW5kKGIgLyAyNTUpIDw8IDIpXG5cdFx0fCAoTWF0aC5yb3VuZChnIC8gMjU1KSA8PCAxKVxuXHRcdHwgTWF0aC5yb3VuZChyIC8gMjU1KSk7XG5cblx0aWYgKHZhbHVlID09PSAyKSB7XG5cdFx0YW5zaSArPSA2MDtcblx0fVxuXG5cdHJldHVybiBhbnNpO1xufTtcblxuY29udmVydC5oc3YuYW5zaTE2ID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0Ly8gb3B0aW1pemF0aW9uIGhlcmU7IHdlIGFscmVhZHkga25vdyB0aGUgdmFsdWUgYW5kIGRvbid0IG5lZWQgdG8gZ2V0XG5cdC8vIGl0IGNvbnZlcnRlZCBmb3IgdXMuXG5cdHJldHVybiBjb252ZXJ0LnJnYi5hbnNpMTYoY29udmVydC5oc3YucmdiKGFyZ3MpLCBhcmdzWzJdKTtcbn07XG5cbmNvbnZlcnQucmdiLmFuc2kyNTYgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgciA9IGFyZ3NbMF07XG5cdHZhciBnID0gYXJnc1sxXTtcblx0dmFyIGIgPSBhcmdzWzJdO1xuXG5cdC8vIHdlIHVzZSB0aGUgZXh0ZW5kZWQgZ3JleXNjYWxlIHBhbGV0dGUgaGVyZSwgd2l0aCB0aGUgZXhjZXB0aW9uIG9mXG5cdC8vIGJsYWNrIGFuZCB3aGl0ZS4gbm9ybWFsIHBhbGV0dGUgb25seSBoYXMgNCBncmV5c2NhbGUgc2hhZGVzLlxuXHRpZiAociA9PT0gZyAmJiBnID09PSBiKSB7XG5cdFx0aWYgKHIgPCA4KSB7XG5cdFx0XHRyZXR1cm4gMTY7XG5cdFx0fVxuXG5cdFx0aWYgKHIgPiAyNDgpIHtcblx0XHRcdHJldHVybiAyMzE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgucm91bmQoKChyIC0gOCkgLyAyNDcpICogMjQpICsgMjMyO1xuXHR9XG5cblx0dmFyIGFuc2kgPSAxNlxuXHRcdCsgKDM2ICogTWF0aC5yb3VuZChyIC8gMjU1ICogNSkpXG5cdFx0KyAoNiAqIE1hdGgucm91bmQoZyAvIDI1NSAqIDUpKVxuXHRcdCsgTWF0aC5yb3VuZChiIC8gMjU1ICogNSk7XG5cblx0cmV0dXJuIGFuc2k7XG59O1xuXG5jb252ZXJ0LmFuc2kxNi5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHR2YXIgY29sb3IgPSBhcmdzICUgMTA7XG5cblx0Ly8gaGFuZGxlIGdyZXlzY2FsZVxuXHRpZiAoY29sb3IgPT09IDAgfHwgY29sb3IgPT09IDcpIHtcblx0XHRpZiAoYXJncyA+IDUwKSB7XG5cdFx0XHRjb2xvciArPSAzLjU7XG5cdFx0fVxuXG5cdFx0Y29sb3IgPSBjb2xvciAvIDEwLjUgKiAyNTU7XG5cblx0XHRyZXR1cm4gW2NvbG9yLCBjb2xvciwgY29sb3JdO1xuXHR9XG5cblx0dmFyIG11bHQgPSAofn4oYXJncyA+IDUwKSArIDEpICogMC41O1xuXHR2YXIgciA9ICgoY29sb3IgJiAxKSAqIG11bHQpICogMjU1O1xuXHR2YXIgZyA9ICgoKGNvbG9yID4+IDEpICYgMSkgKiBtdWx0KSAqIDI1NTtcblx0dmFyIGIgPSAoKChjb2xvciA+PiAyKSAmIDEpICogbXVsdCkgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQuYW5zaTI1Ni5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHQvLyBoYW5kbGUgZ3JleXNjYWxlXG5cdGlmIChhcmdzID49IDIzMikge1xuXHRcdHZhciBjID0gKGFyZ3MgLSAyMzIpICogMTAgKyA4O1xuXHRcdHJldHVybiBbYywgYywgY107XG5cdH1cblxuXHRhcmdzIC09IDE2O1xuXG5cdHZhciByZW07XG5cdHZhciByID0gTWF0aC5mbG9vcihhcmdzIC8gMzYpIC8gNSAqIDI1NTtcblx0dmFyIGcgPSBNYXRoLmZsb29yKChyZW0gPSBhcmdzICUgMzYpIC8gNikgLyA1ICogMjU1O1xuXHR2YXIgYiA9IChyZW0gJSA2KSAvIDUgKiAyNTU7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhleCA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBpbnRlZ2VyID0gKChNYXRoLnJvdW5kKGFyZ3NbMF0pICYgMHhGRikgPDwgMTYpXG5cdFx0KyAoKE1hdGgucm91bmQoYXJnc1sxXSkgJiAweEZGKSA8PCA4KVxuXHRcdCsgKE1hdGgucm91bmQoYXJnc1syXSkgJiAweEZGKTtcblxuXHR2YXIgc3RyaW5nID0gaW50ZWdlci50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0cmV0dXJuICcwMDAwMDAnLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbn07XG5cbmNvbnZlcnQuaGV4LnJnYiA9IGZ1bmN0aW9uIChhcmdzKSB7XG5cdHZhciBtYXRjaCA9IGFyZ3MudG9TdHJpbmcoMTYpLm1hdGNoKC9bYS1mMC05XXs2fXxbYS1mMC05XXszfS9pKTtcblx0aWYgKCFtYXRjaCkge1xuXHRcdHJldHVybiBbMCwgMCwgMF07XG5cdH1cblxuXHR2YXIgY29sb3JTdHJpbmcgPSBtYXRjaFswXTtcblxuXHRpZiAobWF0Y2hbMF0ubGVuZ3RoID09PSAzKSB7XG5cdFx0Y29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5zcGxpdCgnJykubWFwKGZ1bmN0aW9uIChjaGFyKSB7XG5cdFx0XHRyZXR1cm4gY2hhciArIGNoYXI7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgaW50ZWdlciA9IHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG5cdHZhciByID0gKGludGVnZXIgPj4gMTYpICYgMHhGRjtcblx0dmFyIGcgPSAoaW50ZWdlciA+PiA4KSAmIDB4RkY7XG5cdHZhciBiID0gaW50ZWdlciAmIDB4RkY7XG5cblx0cmV0dXJuIFtyLCBnLCBiXTtcbn07XG5cbmNvbnZlcnQucmdiLmhjZyA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0dmFyIHIgPSByZ2JbMF0gLyAyNTU7XG5cdHZhciBnID0gcmdiWzFdIC8gMjU1O1xuXHR2YXIgYiA9IHJnYlsyXSAvIDI1NTtcblx0dmFyIG1heCA9IE1hdGgubWF4KE1hdGgubWF4KHIsIGcpLCBiKTtcblx0dmFyIG1pbiA9IE1hdGgubWluKE1hdGgubWluKHIsIGcpLCBiKTtcblx0dmFyIGNocm9tYSA9IChtYXggLSBtaW4pO1xuXHR2YXIgZ3JheXNjYWxlO1xuXHR2YXIgaHVlO1xuXG5cdGlmIChjaHJvbWEgPCAxKSB7XG5cdFx0Z3JheXNjYWxlID0gbWluIC8gKDEgLSBjaHJvbWEpO1xuXHR9IGVsc2Uge1xuXHRcdGdyYXlzY2FsZSA9IDA7XG5cdH1cblxuXHRpZiAoY2hyb21hIDw9IDApIHtcblx0XHRodWUgPSAwO1xuXHR9IGVsc2Vcblx0aWYgKG1heCA9PT0gcikge1xuXHRcdGh1ZSA9ICgoZyAtIGIpIC8gY2hyb21hKSAlIDY7XG5cdH0gZWxzZVxuXHRpZiAobWF4ID09PSBnKSB7XG5cdFx0aHVlID0gMiArIChiIC0gcikgLyBjaHJvbWE7XG5cdH0gZWxzZSB7XG5cdFx0aHVlID0gNCArIChyIC0gZykgLyBjaHJvbWEgKyA0O1xuXHR9XG5cblx0aHVlIC89IDY7XG5cdGh1ZSAlPSAxO1xuXG5cdHJldHVybiBbaHVlICogMzYwLCBjaHJvbWEgKiAxMDAsIGdyYXlzY2FsZSAqIDEwMF07XG59O1xuXG5jb252ZXJ0LmhzbC5oY2cgPSBmdW5jdGlvbiAoaHNsKSB7XG5cdHZhciBzID0gaHNsWzFdIC8gMTAwO1xuXHR2YXIgbCA9IGhzbFsyXSAvIDEwMDtcblx0dmFyIGMgPSAxO1xuXHR2YXIgZiA9IDA7XG5cblx0aWYgKGwgPCAwLjUpIHtcblx0XHRjID0gMi4wICogcyAqIGw7XG5cdH0gZWxzZSB7XG5cdFx0YyA9IDIuMCAqIHMgKiAoMS4wIC0gbCk7XG5cdH1cblxuXHRpZiAoYyA8IDEuMCkge1xuXHRcdGYgPSAobCAtIDAuNSAqIGMpIC8gKDEuMCAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc2xbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oc3YuaGNnID0gZnVuY3Rpb24gKGhzdikge1xuXHR2YXIgcyA9IGhzdlsxXSAvIDEwMDtcblx0dmFyIHYgPSBoc3ZbMl0gLyAxMDA7XG5cblx0dmFyIGMgPSBzICogdjtcblx0dmFyIGYgPSAwO1xuXG5cdGlmIChjIDwgMS4wKSB7XG5cdFx0ZiA9ICh2IC0gYykgLyAoMSAtIGMpO1xuXHR9XG5cblx0cmV0dXJuIFtoc3ZbMF0sIGMgKiAxMDAsIGYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cucmdiID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgaCA9IGhjZ1swXSAvIDM2MDtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXG5cdGlmIChjID09PSAwLjApIHtcblx0XHRyZXR1cm4gW2cgKiAyNTUsIGcgKiAyNTUsIGcgKiAyNTVdO1xuXHR9XG5cblx0dmFyIHB1cmUgPSBbMCwgMCwgMF07XG5cdHZhciBoaSA9IChoICUgMSkgKiA2O1xuXHR2YXIgdiA9IGhpICUgMTtcblx0dmFyIHcgPSAxIC0gdjtcblx0dmFyIG1nID0gMDtcblxuXHRzd2l0Y2ggKE1hdGguZmxvb3IoaGkpKSB7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cHVyZVswXSA9IDE7IHB1cmVbMV0gPSB2OyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cHVyZVswXSA9IHc7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gMDsgYnJlYWs7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSAxOyBwdXJlWzJdID0gdjsgYnJlYWs7XG5cdFx0Y2FzZSAzOlxuXHRcdFx0cHVyZVswXSA9IDA7IHB1cmVbMV0gPSB3OyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0Y2FzZSA0OlxuXHRcdFx0cHVyZVswXSA9IHY7IHB1cmVbMV0gPSAwOyBwdXJlWzJdID0gMTsgYnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHB1cmVbMF0gPSAxOyBwdXJlWzFdID0gMDsgcHVyZVsyXSA9IHc7XG5cdH1cblxuXHRtZyA9ICgxLjAgLSBjKSAqIGc7XG5cblx0cmV0dXJuIFtcblx0XHQoYyAqIHB1cmVbMF0gKyBtZykgKiAyNTUsXG5cdFx0KGMgKiBwdXJlWzFdICsgbWcpICogMjU1LFxuXHRcdChjICogcHVyZVsyXSArIG1nKSAqIDI1NVxuXHRdO1xufTtcblxuY29udmVydC5oY2cuaHN2ID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIHYgPSBjICsgZyAqICgxLjAgLSBjKTtcblx0dmFyIGYgPSAwO1xuXG5cdGlmICh2ID4gMC4wKSB7XG5cdFx0ZiA9IGMgLyB2O1xuXHR9XG5cblx0cmV0dXJuIFtoY2dbMF0sIGYgKiAxMDAsIHYgKiAxMDBdO1xufTtcblxuY29udmVydC5oY2cuaHNsID0gZnVuY3Rpb24gKGhjZykge1xuXHR2YXIgYyA9IGhjZ1sxXSAvIDEwMDtcblx0dmFyIGcgPSBoY2dbMl0gLyAxMDA7XG5cblx0dmFyIGwgPSBnICogKDEuMCAtIGMpICsgMC41ICogYztcblx0dmFyIHMgPSAwO1xuXG5cdGlmIChsID4gMC4wICYmIGwgPCAwLjUpIHtcblx0XHRzID0gYyAvICgyICogbCk7XG5cdH0gZWxzZVxuXHRpZiAobCA+PSAwLjUgJiYgbCA8IDEuMCkge1xuXHRcdHMgPSBjIC8gKDIgKiAoMSAtIGwpKTtcblx0fVxuXG5cdHJldHVybiBbaGNnWzBdLCBzICogMTAwLCBsICogMTAwXTtcbn07XG5cbmNvbnZlcnQuaGNnLmh3YiA9IGZ1bmN0aW9uIChoY2cpIHtcblx0dmFyIGMgPSBoY2dbMV0gLyAxMDA7XG5cdHZhciBnID0gaGNnWzJdIC8gMTAwO1xuXHR2YXIgdiA9IGMgKyBnICogKDEuMCAtIGMpO1xuXHRyZXR1cm4gW2hjZ1swXSwgKHYgLSBjKSAqIDEwMCwgKDEgLSB2KSAqIDEwMF07XG59O1xuXG5jb252ZXJ0Lmh3Yi5oY2cgPSBmdW5jdGlvbiAoaHdiKSB7XG5cdHZhciB3ID0gaHdiWzFdIC8gMTAwO1xuXHR2YXIgYiA9IGh3YlsyXSAvIDEwMDtcblx0dmFyIHYgPSAxIC0gYjtcblx0dmFyIGMgPSB2IC0gdztcblx0dmFyIGcgPSAwO1xuXG5cdGlmIChjIDwgMSkge1xuXHRcdGcgPSAodiAtIGMpIC8gKDEgLSBjKTtcblx0fVxuXG5cdHJldHVybiBbaHdiWzBdLCBjICogMTAwLCBnICogMTAwXTtcbn07XG5cbmNvbnZlcnQuYXBwbGUucmdiID0gZnVuY3Rpb24gKGFwcGxlKSB7XG5cdHJldHVybiBbKGFwcGxlWzBdIC8gNjU1MzUpICogMjU1LCAoYXBwbGVbMV0gLyA2NTUzNSkgKiAyNTUsIChhcHBsZVsyXSAvIDY1NTM1KSAqIDI1NV07XG59O1xuXG5jb252ZXJ0LnJnYi5hcHBsZSA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIFsocmdiWzBdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzFdIC8gMjU1KSAqIDY1NTM1LCAocmdiWzJdIC8gMjU1KSAqIDY1NTM1XTtcbn07XG5cbmNvbnZlcnQuZ3JheS5yZ2IgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gW2FyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTUsIGFyZ3NbMF0gLyAxMDAgKiAyNTVdO1xufTtcblxuY29udmVydC5ncmF5LmhzbCA9IGNvbnZlcnQuZ3JheS5oc3YgPSBmdW5jdGlvbiAoYXJncykge1xuXHRyZXR1cm4gWzAsIDAsIGFyZ3NbMF1dO1xufTtcblxuY29udmVydC5ncmF5Lmh3YiA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHJldHVybiBbMCwgMTAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5jbXlrID0gZnVuY3Rpb24gKGdyYXkpIHtcblx0cmV0dXJuIFswLCAwLCAwLCBncmF5WzBdXTtcbn07XG5cbmNvbnZlcnQuZ3JheS5sYWIgPSBmdW5jdGlvbiAoZ3JheSkge1xuXHRyZXR1cm4gW2dyYXlbMF0sIDAsIDBdO1xufTtcblxuY29udmVydC5ncmF5LmhleCA9IGZ1bmN0aW9uIChncmF5KSB7XG5cdHZhciB2YWwgPSBNYXRoLnJvdW5kKGdyYXlbMF0gLyAxMDAgKiAyNTUpICYgMHhGRjtcblx0dmFyIGludGVnZXIgPSAodmFsIDw8IDE2KSArICh2YWwgPDwgOCkgKyB2YWw7XG5cblx0dmFyIHN0cmluZyA9IGludGVnZXIudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAnMDAwMDAwJy5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCkgKyBzdHJpbmc7XG59O1xuXG5jb252ZXJ0LnJnYi5ncmF5ID0gZnVuY3Rpb24gKHJnYikge1xuXHR2YXIgdmFsID0gKHJnYlswXSArIHJnYlsxXSArIHJnYlsyXSkgLyAzO1xuXHRyZXR1cm4gW3ZhbCAvIDI1NSAqIDEwMF07XG59O1xuIiwidmFyIGNvbnZlcnNpb25zID0gcmVxdWlyZSgnLi9jb252ZXJzaW9ucycpO1xudmFyIHJvdXRlID0gcmVxdWlyZSgnLi9yb3V0ZScpO1xuXG52YXIgY29udmVydCA9IHt9O1xuXG52YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5mdW5jdGlvbiB3cmFwUmF3KGZuKSB7XG5cdHZhciB3cmFwcGVkRm4gPSBmdW5jdGlvbiAoYXJncykge1xuXHRcdGlmIChhcmdzID09PSB1bmRlZmluZWQgfHwgYXJncyA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGFyZ3M7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm4oYXJncyk7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5mdW5jdGlvbiB3cmFwUm91bmRlZChmbikge1xuXHR2YXIgd3JhcHBlZEZuID0gZnVuY3Rpb24gKGFyZ3MpIHtcblx0XHRpZiAoYXJncyA9PT0gdW5kZWZpbmVkIHx8IGFyZ3MgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBhcmdzO1xuXHRcdH1cblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cdFx0fVxuXG5cdFx0dmFyIHJlc3VsdCA9IGZuKGFyZ3MpO1xuXG5cdFx0Ly8gd2UncmUgYXNzdW1pbmcgdGhlIHJlc3VsdCBpcyBhbiBhcnJheSBoZXJlLlxuXHRcdC8vIHNlZSBub3RpY2UgaW4gY29udmVyc2lvbnMuanM7IGRvbid0IHVzZSBib3ggdHlwZXNcblx0XHQvLyBpbiBjb252ZXJzaW9uIGZ1bmN0aW9ucy5cblx0XHRpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGZvciAodmFyIGxlbiA9IHJlc3VsdC5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0cmVzdWx0W2ldID0gTWF0aC5yb3VuZChyZXN1bHRbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0Ly8gcHJlc2VydmUgLmNvbnZlcnNpb24gcHJvcGVydHkgaWYgdGhlcmUgaXMgb25lXG5cdGlmICgnY29udmVyc2lvbicgaW4gZm4pIHtcblx0XHR3cmFwcGVkRm4uY29udmVyc2lvbiA9IGZuLmNvbnZlcnNpb247XG5cdH1cblxuXHRyZXR1cm4gd3JhcHBlZEZuO1xufVxuXG5tb2RlbHMuZm9yRWFjaChmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdGNvbnZlcnRbZnJvbU1vZGVsXSA9IHt9O1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb252ZXJ0W2Zyb21Nb2RlbF0sICdjaGFubmVscycsIHt2YWx1ZTogY29udmVyc2lvbnNbZnJvbU1vZGVsXS5jaGFubmVsc30pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoY29udmVydFtmcm9tTW9kZWxdLCAnbGFiZWxzJywge3ZhbHVlOiBjb252ZXJzaW9uc1tmcm9tTW9kZWxdLmxhYmVsc30pO1xuXG5cdHZhciByb3V0ZXMgPSByb3V0ZShmcm9tTW9kZWwpO1xuXHR2YXIgcm91dGVNb2RlbHMgPSBPYmplY3Qua2V5cyhyb3V0ZXMpO1xuXG5cdHJvdXRlTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKHRvTW9kZWwpIHtcblx0XHR2YXIgZm4gPSByb3V0ZXNbdG9Nb2RlbF07XG5cblx0XHRjb252ZXJ0W2Zyb21Nb2RlbF1bdG9Nb2RlbF0gPSB3cmFwUm91bmRlZChmbik7XG5cdFx0Y29udmVydFtmcm9tTW9kZWxdW3RvTW9kZWxdLnJhdyA9IHdyYXBSYXcoZm4pO1xuXHR9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnQ7XG4iLCJ2YXIgY29udmVyc2lvbnMgPSByZXF1aXJlKCcuL2NvbnZlcnNpb25zJyk7XG5cbi8qXG5cdHRoaXMgZnVuY3Rpb24gcm91dGVzIGEgbW9kZWwgdG8gYWxsIG90aGVyIG1vZGVscy5cblxuXHRhbGwgZnVuY3Rpb25zIHRoYXQgYXJlIHJvdXRlZCBoYXZlIGEgcHJvcGVydHkgYC5jb252ZXJzaW9uYCBhdHRhY2hlZFxuXHR0byB0aGUgcmV0dXJuZWQgc3ludGhldGljIGZ1bmN0aW9uLiBUaGlzIHByb3BlcnR5IGlzIGFuIGFycmF5XG5cdG9mIHN0cmluZ3MsIGVhY2ggd2l0aCB0aGUgc3RlcHMgaW4gYmV0d2VlbiB0aGUgJ2Zyb20nIGFuZCAndG8nXG5cdGNvbG9yIG1vZGVscyAoaW5jbHVzaXZlKS5cblxuXHRjb252ZXJzaW9ucyB0aGF0IGFyZSBub3QgcG9zc2libGUgc2ltcGx5IGFyZSBub3QgaW5jbHVkZWQuXG4qL1xuXG5mdW5jdGlvbiBidWlsZEdyYXBoKCkge1xuXHR2YXIgZ3JhcGggPSB7fTtcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL29iamVjdC1rZXlzLXZzLWZvci1pbi13aXRoLWNsb3N1cmUvM1xuXHR2YXIgbW9kZWxzID0gT2JqZWN0LmtleXMoY29udmVyc2lvbnMpO1xuXG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRncmFwaFttb2RlbHNbaV1dID0ge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vMS12cy1pbmZpbml0eVxuXHRcdFx0Ly8gbWljcm8tb3B0LCBidXQgdGhpcyBpcyBzaW1wbGUuXG5cdFx0XHRkaXN0YW5jZTogLTEsXG5cdFx0XHRwYXJlbnQ6IG51bGxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CcmVhZHRoLWZpcnN0X3NlYXJjaFxuZnVuY3Rpb24gZGVyaXZlQkZTKGZyb21Nb2RlbCkge1xuXHR2YXIgZ3JhcGggPSBidWlsZEdyYXBoKCk7XG5cdHZhciBxdWV1ZSA9IFtmcm9tTW9kZWxdOyAvLyB1bnNoaWZ0IC0+IHF1ZXVlIC0+IHBvcFxuXG5cdGdyYXBoW2Zyb21Nb2RlbF0uZGlzdGFuY2UgPSAwO1xuXG5cdHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcblx0XHR2YXIgY3VycmVudCA9IHF1ZXVlLnBvcCgpO1xuXHRcdHZhciBhZGphY2VudHMgPSBPYmplY3Qua2V5cyhjb252ZXJzaW9uc1tjdXJyZW50XSk7XG5cblx0XHRmb3IgKHZhciBsZW4gPSBhZGphY2VudHMubGVuZ3RoLCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR2YXIgYWRqYWNlbnQgPSBhZGphY2VudHNbaV07XG5cdFx0XHR2YXIgbm9kZSA9IGdyYXBoW2FkamFjZW50XTtcblxuXHRcdFx0aWYgKG5vZGUuZGlzdGFuY2UgPT09IC0xKSB7XG5cdFx0XHRcdG5vZGUuZGlzdGFuY2UgPSBncmFwaFtjdXJyZW50XS5kaXN0YW5jZSArIDE7XG5cdFx0XHRcdG5vZGUucGFyZW50ID0gY3VycmVudDtcblx0XHRcdFx0cXVldWUudW5zaGlmdChhZGphY2VudCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGdyYXBoO1xufVxuXG5mdW5jdGlvbiBsaW5rKGZyb20sIHRvKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuXHRcdHJldHVybiB0byhmcm9tKGFyZ3MpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gd3JhcENvbnZlcnNpb24odG9Nb2RlbCwgZ3JhcGgpIHtcblx0dmFyIHBhdGggPSBbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50LCB0b01vZGVsXTtcblx0dmFyIGZuID0gY29udmVyc2lvbnNbZ3JhcGhbdG9Nb2RlbF0ucGFyZW50XVt0b01vZGVsXTtcblxuXHR2YXIgY3VyID0gZ3JhcGhbdG9Nb2RlbF0ucGFyZW50O1xuXHR3aGlsZSAoZ3JhcGhbY3VyXS5wYXJlbnQpIHtcblx0XHRwYXRoLnVuc2hpZnQoZ3JhcGhbY3VyXS5wYXJlbnQpO1xuXHRcdGZuID0gbGluayhjb252ZXJzaW9uc1tncmFwaFtjdXJdLnBhcmVudF1bY3VyXSwgZm4pO1xuXHRcdGN1ciA9IGdyYXBoW2N1cl0ucGFyZW50O1xuXHR9XG5cblx0Zm4uY29udmVyc2lvbiA9IHBhdGg7XG5cdHJldHVybiBmbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnJvbU1vZGVsKSB7XG5cdHZhciBncmFwaCA9IGRlcml2ZUJGUyhmcm9tTW9kZWwpO1xuXHR2YXIgY29udmVyc2lvbiA9IHt9O1xuXG5cdHZhciBtb2RlbHMgPSBPYmplY3Qua2V5cyhncmFwaCk7XG5cdGZvciAodmFyIGxlbiA9IG1vZGVscy5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHR2YXIgdG9Nb2RlbCA9IG1vZGVsc1tpXTtcblx0XHR2YXIgbm9kZSA9IGdyYXBoW3RvTW9kZWxdO1xuXG5cdFx0aWYgKG5vZGUucGFyZW50ID09PSBudWxsKSB7XG5cdFx0XHQvLyBubyBwb3NzaWJsZSBjb252ZXJzaW9uLCBvciB0aGlzIG5vZGUgaXMgdGhlIHNvdXJjZSBtb2RlbC5cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnZlcnNpb25bdG9Nb2RlbF0gPSB3cmFwQ29udmVyc2lvbih0b01vZGVsLCBncmFwaCk7XG5cdH1cblxuXHRyZXR1cm4gY29udmVyc2lvbjtcbn07XG5cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0XCJhbGljZWJsdWVcIjogWzI0MCwgMjQ4LCAyNTVdLFxyXG5cdFwiYW50aXF1ZXdoaXRlXCI6IFsyNTAsIDIzNSwgMjE1XSxcclxuXHRcImFxdWFcIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImFxdWFtYXJpbmVcIjogWzEyNywgMjU1LCAyMTJdLFxyXG5cdFwiYXp1cmVcIjogWzI0MCwgMjU1LCAyNTVdLFxyXG5cdFwiYmVpZ2VcIjogWzI0NSwgMjQ1LCAyMjBdLFxyXG5cdFwiYmlzcXVlXCI6IFsyNTUsIDIyOCwgMTk2XSxcclxuXHRcImJsYWNrXCI6IFswLCAwLCAwXSxcclxuXHRcImJsYW5jaGVkYWxtb25kXCI6IFsyNTUsIDIzNSwgMjA1XSxcclxuXHRcImJsdWVcIjogWzAsIDAsIDI1NV0sXHJcblx0XCJibHVldmlvbGV0XCI6IFsxMzgsIDQzLCAyMjZdLFxyXG5cdFwiYnJvd25cIjogWzE2NSwgNDIsIDQyXSxcclxuXHRcImJ1cmx5d29vZFwiOiBbMjIyLCAxODQsIDEzNV0sXHJcblx0XCJjYWRldGJsdWVcIjogWzk1LCAxNTgsIDE2MF0sXHJcblx0XCJjaGFydHJldXNlXCI6IFsxMjcsIDI1NSwgMF0sXHJcblx0XCJjaG9jb2xhdGVcIjogWzIxMCwgMTA1LCAzMF0sXHJcblx0XCJjb3JhbFwiOiBbMjU1LCAxMjcsIDgwXSxcclxuXHRcImNvcm5mbG93ZXJibHVlXCI6IFsxMDAsIDE0OSwgMjM3XSxcclxuXHRcImNvcm5zaWxrXCI6IFsyNTUsIDI0OCwgMjIwXSxcclxuXHRcImNyaW1zb25cIjogWzIyMCwgMjAsIDYwXSxcclxuXHRcImN5YW5cIjogWzAsIDI1NSwgMjU1XSxcclxuXHRcImRhcmtibHVlXCI6IFswLCAwLCAxMzldLFxyXG5cdFwiZGFya2N5YW5cIjogWzAsIDEzOSwgMTM5XSxcclxuXHRcImRhcmtnb2xkZW5yb2RcIjogWzE4NCwgMTM0LCAxMV0sXHJcblx0XCJkYXJrZ3JheVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJrZ3JlZW5cIjogWzAsIDEwMCwgMF0sXHJcblx0XCJkYXJrZ3JleVwiOiBbMTY5LCAxNjksIDE2OV0sXHJcblx0XCJkYXJra2hha2lcIjogWzE4OSwgMTgzLCAxMDddLFxyXG5cdFwiZGFya21hZ2VudGFcIjogWzEzOSwgMCwgMTM5XSxcclxuXHRcImRhcmtvbGl2ZWdyZWVuXCI6IFs4NSwgMTA3LCA0N10sXHJcblx0XCJkYXJrb3JhbmdlXCI6IFsyNTUsIDE0MCwgMF0sXHJcblx0XCJkYXJrb3JjaGlkXCI6IFsxNTMsIDUwLCAyMDRdLFxyXG5cdFwiZGFya3JlZFwiOiBbMTM5LCAwLCAwXSxcclxuXHRcImRhcmtzYWxtb25cIjogWzIzMywgMTUwLCAxMjJdLFxyXG5cdFwiZGFya3NlYWdyZWVuXCI6IFsxNDMsIDE4OCwgMTQzXSxcclxuXHRcImRhcmtzbGF0ZWJsdWVcIjogWzcyLCA2MSwgMTM5XSxcclxuXHRcImRhcmtzbGF0ZWdyYXlcIjogWzQ3LCA3OSwgNzldLFxyXG5cdFwiZGFya3NsYXRlZ3JleVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrdHVycXVvaXNlXCI6IFswLCAyMDYsIDIwOV0sXHJcblx0XCJkYXJrdmlvbGV0XCI6IFsxNDgsIDAsIDIxMV0sXHJcblx0XCJkZWVwcGlua1wiOiBbMjU1LCAyMCwgMTQ3XSxcclxuXHRcImRlZXBza3libHVlXCI6IFswLCAxOTEsIDI1NV0sXHJcblx0XCJkaW1ncmF5XCI6IFsxMDUsIDEwNSwgMTA1XSxcclxuXHRcImRpbWdyZXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZG9kZ2VyYmx1ZVwiOiBbMzAsIDE0NCwgMjU1XSxcclxuXHRcImZpcmVicmlja1wiOiBbMTc4LCAzNCwgMzRdLFxyXG5cdFwiZmxvcmFsd2hpdGVcIjogWzI1NSwgMjUwLCAyNDBdLFxyXG5cdFwiZm9yZXN0Z3JlZW5cIjogWzM0LCAxMzksIDM0XSxcclxuXHRcImZ1Y2hzaWFcIjogWzI1NSwgMCwgMjU1XSxcclxuXHRcImdhaW5zYm9yb1wiOiBbMjIwLCAyMjAsIDIyMF0sXHJcblx0XCJnaG9zdHdoaXRlXCI6IFsyNDgsIDI0OCwgMjU1XSxcclxuXHRcImdvbGRcIjogWzI1NSwgMjE1LCAwXSxcclxuXHRcImdvbGRlbnJvZFwiOiBbMjE4LCAxNjUsIDMyXSxcclxuXHRcImdyYXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiZ3JlZW5cIjogWzAsIDEyOCwgMF0sXHJcblx0XCJncmVlbnllbGxvd1wiOiBbMTczLCAyNTUsIDQ3XSxcclxuXHRcImdyZXlcIjogWzEyOCwgMTI4LCAxMjhdLFxyXG5cdFwiaG9uZXlkZXdcIjogWzI0MCwgMjU1LCAyNDBdLFxyXG5cdFwiaG90cGlua1wiOiBbMjU1LCAxMDUsIDE4MF0sXHJcblx0XCJpbmRpYW5yZWRcIjogWzIwNSwgOTIsIDkyXSxcclxuXHRcImluZGlnb1wiOiBbNzUsIDAsIDEzMF0sXHJcblx0XCJpdm9yeVwiOiBbMjU1LCAyNTUsIDI0MF0sXHJcblx0XCJraGFraVwiOiBbMjQwLCAyMzAsIDE0MF0sXHJcblx0XCJsYXZlbmRlclwiOiBbMjMwLCAyMzAsIDI1MF0sXHJcblx0XCJsYXZlbmRlcmJsdXNoXCI6IFsyNTUsIDI0MCwgMjQ1XSxcclxuXHRcImxhd25ncmVlblwiOiBbMTI0LCAyNTIsIDBdLFxyXG5cdFwibGVtb25jaGlmZm9uXCI6IFsyNTUsIDI1MCwgMjA1XSxcclxuXHRcImxpZ2h0Ymx1ZVwiOiBbMTczLCAyMTYsIDIzMF0sXHJcblx0XCJsaWdodGNvcmFsXCI6IFsyNDAsIDEyOCwgMTI4XSxcclxuXHRcImxpZ2h0Y3lhblwiOiBbMjI0LCAyNTUsIDI1NV0sXHJcblx0XCJsaWdodGdvbGRlbnJvZHllbGxvd1wiOiBbMjUwLCAyNTAsIDIxMF0sXHJcblx0XCJsaWdodGdyYXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRncmVlblwiOiBbMTQ0LCAyMzgsIDE0NF0sXHJcblx0XCJsaWdodGdyZXlcIjogWzIxMSwgMjExLCAyMTFdLFxyXG5cdFwibGlnaHRwaW5rXCI6IFsyNTUsIDE4MiwgMTkzXSxcclxuXHRcImxpZ2h0c2FsbW9uXCI6IFsyNTUsIDE2MCwgMTIyXSxcclxuXHRcImxpZ2h0c2VhZ3JlZW5cIjogWzMyLCAxNzgsIDE3MF0sXHJcblx0XCJsaWdodHNreWJsdWVcIjogWzEzNSwgMjA2LCAyNTBdLFxyXG5cdFwibGlnaHRzbGF0ZWdyYXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzbGF0ZWdyZXlcIjogWzExOSwgMTM2LCAxNTNdLFxyXG5cdFwibGlnaHRzdGVlbGJsdWVcIjogWzE3NiwgMTk2LCAyMjJdLFxyXG5cdFwibGlnaHR5ZWxsb3dcIjogWzI1NSwgMjU1LCAyMjRdLFxyXG5cdFwibGltZVwiOiBbMCwgMjU1LCAwXSxcclxuXHRcImxpbWVncmVlblwiOiBbNTAsIDIwNSwgNTBdLFxyXG5cdFwibGluZW5cIjogWzI1MCwgMjQwLCAyMzBdLFxyXG5cdFwibWFnZW50YVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwibWFyb29uXCI6IFsxMjgsIDAsIDBdLFxyXG5cdFwibWVkaXVtYXF1YW1hcmluZVwiOiBbMTAyLCAyMDUsIDE3MF0sXHJcblx0XCJtZWRpdW1ibHVlXCI6IFswLCAwLCAyMDVdLFxyXG5cdFwibWVkaXVtb3JjaGlkXCI6IFsxODYsIDg1LCAyMTFdLFxyXG5cdFwibWVkaXVtcHVycGxlXCI6IFsxNDcsIDExMiwgMjE5XSxcclxuXHRcIm1lZGl1bXNlYWdyZWVuXCI6IFs2MCwgMTc5LCAxMTNdLFxyXG5cdFwibWVkaXVtc2xhdGVibHVlXCI6IFsxMjMsIDEwNCwgMjM4XSxcclxuXHRcIm1lZGl1bXNwcmluZ2dyZWVuXCI6IFswLCAyNTAsIDE1NF0sXHJcblx0XCJtZWRpdW10dXJxdW9pc2VcIjogWzcyLCAyMDksIDIwNF0sXHJcblx0XCJtZWRpdW12aW9sZXRyZWRcIjogWzE5OSwgMjEsIDEzM10sXHJcblx0XCJtaWRuaWdodGJsdWVcIjogWzI1LCAyNSwgMTEyXSxcclxuXHRcIm1pbnRjcmVhbVwiOiBbMjQ1LCAyNTUsIDI1MF0sXHJcblx0XCJtaXN0eXJvc2VcIjogWzI1NSwgMjI4LCAyMjVdLFxyXG5cdFwibW9jY2FzaW5cIjogWzI1NSwgMjI4LCAxODFdLFxyXG5cdFwibmF2YWpvd2hpdGVcIjogWzI1NSwgMjIyLCAxNzNdLFxyXG5cdFwibmF2eVwiOiBbMCwgMCwgMTI4XSxcclxuXHRcIm9sZGxhY2VcIjogWzI1MywgMjQ1LCAyMzBdLFxyXG5cdFwib2xpdmVcIjogWzEyOCwgMTI4LCAwXSxcclxuXHRcIm9saXZlZHJhYlwiOiBbMTA3LCAxNDIsIDM1XSxcclxuXHRcIm9yYW5nZVwiOiBbMjU1LCAxNjUsIDBdLFxyXG5cdFwib3JhbmdlcmVkXCI6IFsyNTUsIDY5LCAwXSxcclxuXHRcIm9yY2hpZFwiOiBbMjE4LCAxMTIsIDIxNF0sXHJcblx0XCJwYWxlZ29sZGVucm9kXCI6IFsyMzgsIDIzMiwgMTcwXSxcclxuXHRcInBhbGVncmVlblwiOiBbMTUyLCAyNTEsIDE1Ml0sXHJcblx0XCJwYWxldHVycXVvaXNlXCI6IFsxNzUsIDIzOCwgMjM4XSxcclxuXHRcInBhbGV2aW9sZXRyZWRcIjogWzIxOSwgMTEyLCAxNDddLFxyXG5cdFwicGFwYXlhd2hpcFwiOiBbMjU1LCAyMzksIDIxM10sXHJcblx0XCJwZWFjaHB1ZmZcIjogWzI1NSwgMjE4LCAxODVdLFxyXG5cdFwicGVydVwiOiBbMjA1LCAxMzMsIDYzXSxcclxuXHRcInBpbmtcIjogWzI1NSwgMTkyLCAyMDNdLFxyXG5cdFwicGx1bVwiOiBbMjIxLCAxNjAsIDIyMV0sXHJcblx0XCJwb3dkZXJibHVlXCI6IFsxNzYsIDIyNCwgMjMwXSxcclxuXHRcInB1cnBsZVwiOiBbMTI4LCAwLCAxMjhdLFxyXG5cdFwicmViZWNjYXB1cnBsZVwiOiBbMTAyLCA1MSwgMTUzXSxcclxuXHRcInJlZFwiOiBbMjU1LCAwLCAwXSxcclxuXHRcInJvc3licm93blwiOiBbMTg4LCAxNDMsIDE0M10sXHJcblx0XCJyb3lhbGJsdWVcIjogWzY1LCAxMDUsIDIyNV0sXHJcblx0XCJzYWRkbGVicm93blwiOiBbMTM5LCA2OSwgMTldLFxyXG5cdFwic2FsbW9uXCI6IFsyNTAsIDEyOCwgMTE0XSxcclxuXHRcInNhbmR5YnJvd25cIjogWzI0NCwgMTY0LCA5Nl0sXHJcblx0XCJzZWFncmVlblwiOiBbNDYsIDEzOSwgODddLFxyXG5cdFwic2Vhc2hlbGxcIjogWzI1NSwgMjQ1LCAyMzhdLFxyXG5cdFwic2llbm5hXCI6IFsxNjAsIDgyLCA0NV0sXHJcblx0XCJzaWx2ZXJcIjogWzE5MiwgMTkyLCAxOTJdLFxyXG5cdFwic2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDIzNV0sXHJcblx0XCJzbGF0ZWJsdWVcIjogWzEwNiwgOTAsIDIwNV0sXHJcblx0XCJzbGF0ZWdyYXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic2xhdGVncmV5XCI6IFsxMTIsIDEyOCwgMTQ0XSxcclxuXHRcInNub3dcIjogWzI1NSwgMjUwLCAyNTBdLFxyXG5cdFwic3ByaW5nZ3JlZW5cIjogWzAsIDI1NSwgMTI3XSxcclxuXHRcInN0ZWVsYmx1ZVwiOiBbNzAsIDEzMCwgMTgwXSxcclxuXHRcInRhblwiOiBbMjEwLCAxODAsIDE0MF0sXHJcblx0XCJ0ZWFsXCI6IFswLCAxMjgsIDEyOF0sXHJcblx0XCJ0aGlzdGxlXCI6IFsyMTYsIDE5MSwgMjE2XSxcclxuXHRcInRvbWF0b1wiOiBbMjU1LCA5OSwgNzFdLFxyXG5cdFwidHVycXVvaXNlXCI6IFs2NCwgMjI0LCAyMDhdLFxyXG5cdFwidmlvbGV0XCI6IFsyMzgsIDEzMCwgMjM4XSxcclxuXHRcIndoZWF0XCI6IFsyNDUsIDIyMiwgMTc5XSxcclxuXHRcIndoaXRlXCI6IFsyNTUsIDI1NSwgMjU1XSxcclxuXHRcIndoaXRlc21va2VcIjogWzI0NSwgMjQ1LCAyNDVdLFxyXG5cdFwieWVsbG93XCI6IFsyNTUsIDI1NSwgMF0sXHJcblx0XCJ5ZWxsb3dncmVlblwiOiBbMTU0LCAyMDUsIDUwXVxyXG59O1xyXG4iLCIvKiBNSVQgbGljZW5zZSAqL1xudmFyIGNvbG9yTmFtZXMgPSByZXF1aXJlKCdjb2xvci1uYW1lJyk7XG52YXIgc3dpenpsZSA9IHJlcXVpcmUoJ3NpbXBsZS1zd2l6emxlJyk7XG5cbnZhciByZXZlcnNlTmFtZXMgPSB7fTtcblxuLy8gY3JlYXRlIGEgbGlzdCBvZiByZXZlcnNlIGNvbG9yIG5hbWVzXG5mb3IgKHZhciBuYW1lIGluIGNvbG9yTmFtZXMpIHtcblx0aWYgKGNvbG9yTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcblx0XHRyZXZlcnNlTmFtZXNbY29sb3JOYW1lc1tuYW1lXV0gPSBuYW1lO1xuXHR9XG59XG5cbnZhciBjcyA9IG1vZHVsZS5leHBvcnRzID0ge1xuXHR0bzoge30sXG5cdGdldDoge31cbn07XG5cbmNzLmdldCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0dmFyIHByZWZpeCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgMykudG9Mb3dlckNhc2UoKTtcblx0dmFyIHZhbDtcblx0dmFyIG1vZGVsO1xuXHRzd2l0Y2ggKHByZWZpeCkge1xuXHRcdGNhc2UgJ2hzbCc6XG5cdFx0XHR2YWwgPSBjcy5nZXQuaHNsKHN0cmluZyk7XG5cdFx0XHRtb2RlbCA9ICdoc2wnO1xuXHRcdFx0YnJlYWs7XG5cdFx0Y2FzZSAnaHdiJzpcblx0XHRcdHZhbCA9IGNzLmdldC5od2Ioc3RyaW5nKTtcblx0XHRcdG1vZGVsID0gJ2h3Yic7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dmFsID0gY3MuZ2V0LnJnYihzdHJpbmcpO1xuXHRcdFx0bW9kZWwgPSAncmdiJztcblx0XHRcdGJyZWFrO1xuXHR9XG5cblx0aWYgKCF2YWwpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiB7bW9kZWw6IG1vZGVsLCB2YWx1ZTogdmFsfTtcbn07XG5cbmNzLmdldC5yZ2IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdGlmICghc3RyaW5nKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIgYWJiciA9IC9eIyhbYS1mMC05XXszLDR9KSQvaTtcblx0dmFyIGhleCA9IC9eIyhbYS1mMC05XXs2fSkoW2EtZjAtOV17Mn0pPyQvaTtcblx0dmFyIHJnYmEgPSAvXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLztcblx0dmFyIHBlciA9IC9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvO1xuXHR2YXIga2V5d29yZCA9IC8oXFxEKykvO1xuXG5cdHZhciByZ2IgPSBbMCwgMCwgMCwgMV07XG5cdHZhciBtYXRjaDtcblx0dmFyIGk7XG5cdHZhciBoZXhBbHBoYTtcblxuXHRpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goaGV4KSkge1xuXHRcdGhleEFscGhhID0gbWF0Y2hbMl07XG5cdFx0bWF0Y2ggPSBtYXRjaFsxXTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCAzOyBpKyspIHtcblx0XHRcdC8vIGh0dHBzOi8vanNwZXJmLmNvbS9zbGljZS12cy1zdWJzdHItdnMtc3Vic3RyaW5nLW1ldGhvZHMtbG9uZy1zdHJpbmcvMTlcblx0XHRcdHZhciBpMiA9IGkgKiAyO1xuXHRcdFx0cmdiW2ldID0gcGFyc2VJbnQobWF0Y2guc2xpY2UoaTIsIGkyICsgMiksIDE2KTtcblx0XHR9XG5cblx0XHRpZiAoaGV4QWxwaGEpIHtcblx0XHRcdHJnYlszXSA9IE1hdGgucm91bmQoKHBhcnNlSW50KGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2goYWJicikpIHtcblx0XHRtYXRjaCA9IG1hdGNoWzFdO1xuXHRcdGhleEFscGhhID0gbWF0Y2hbM107XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpXSArIG1hdGNoW2ldLCAxNik7XG5cdFx0fVxuXG5cdFx0aWYgKGhleEFscGhhKSB7XG5cdFx0XHRyZ2JbM10gPSBNYXRoLnJvdW5kKChwYXJzZUludChoZXhBbHBoYSArIGhleEFscGhhLCAxNikgLyAyNTUpICogMTAwKSAvIDEwMDtcblx0XHR9XG5cdH0gZWxzZSBpZiAobWF0Y2ggPSBzdHJpbmcubWF0Y2gocmdiYSkpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBwYXJzZUludChtYXRjaFtpICsgMV0sIDApO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKHBlcikpIHtcblx0XHRmb3IgKGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cdFx0XHRyZ2JbaV0gPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWF0Y2hbaSArIDFdKSAqIDIuNTUpO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaFs0XSkge1xuXHRcdFx0cmdiWzNdID0gcGFyc2VGbG9hdChtYXRjaFs0XSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG1hdGNoID0gc3RyaW5nLm1hdGNoKGtleXdvcmQpKSB7XG5cdFx0aWYgKG1hdGNoWzFdID09PSAndHJhbnNwYXJlbnQnKSB7XG5cdFx0XHRyZXR1cm4gWzAsIDAsIDAsIDBdO1xuXHRcdH1cblxuXHRcdHJnYiA9IGNvbG9yTmFtZXNbbWF0Y2hbMV1dO1xuXG5cdFx0aWYgKCFyZ2IpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHJnYlszXSA9IDE7XG5cblx0XHRyZXR1cm4gcmdiO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Zm9yIChpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdHJnYltpXSA9IGNsYW1wKHJnYltpXSwgMCwgMjU1KTtcblx0fVxuXHRyZ2JbM10gPSBjbGFtcChyZ2JbM10sIDAsIDEpO1xuXG5cdHJldHVybiByZ2I7XG59O1xuXG5jcy5nZXQuaHNsID0gZnVuY3Rpb24gKHN0cmluZykge1xuXHRpZiAoIXN0cmluZykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGhzbCA9IC9eaHNsYT9cXChcXHMqKFsrLV0/KD86XFxkKlxcLik/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChoc2wpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKHBhcnNlRmxvYXQobWF0Y2hbMV0pICsgMzYwKSAlIDM2MDtcblx0XHR2YXIgcyA9IGNsYW1wKHBhcnNlRmxvYXQobWF0Y2hbMl0pLCAwLCAxMDApO1xuXHRcdHZhciBsID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFszXSksIDAsIDEwMCk7XG5cdFx0dmFyIGEgPSBjbGFtcChpc05hTihhbHBoYSkgPyAxIDogYWxwaGEsIDAsIDEpO1xuXG5cdFx0cmV0dXJuIFtoLCBzLCBsLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MuZ2V0Lmh3YiA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcblx0aWYgKCFzdHJpbmcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBod2IgPSAvXmh3YlxcKFxccyooWystXT9cXGQqW1xcLl0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC87XG5cdHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaChod2IpO1xuXG5cdGlmIChtYXRjaCkge1xuXHRcdHZhciBhbHBoYSA9IHBhcnNlRmxvYXQobWF0Y2hbNF0pO1xuXHRcdHZhciBoID0gKChwYXJzZUZsb2F0KG1hdGNoWzFdKSAlIDM2MCkgKyAzNjApICUgMzYwO1xuXHRcdHZhciB3ID0gY2xhbXAocGFyc2VGbG9hdChtYXRjaFsyXSksIDAsIDEwMCk7XG5cdFx0dmFyIGIgPSBjbGFtcChwYXJzZUZsb2F0KG1hdGNoWzNdKSwgMCwgMTAwKTtcblx0XHR2YXIgYSA9IGNsYW1wKGlzTmFOKGFscGhhKSA/IDEgOiBhbHBoYSwgMCwgMSk7XG5cdFx0cmV0dXJuIFtoLCB3LCBiLCBhXTtcblx0fVxuXG5cdHJldHVybiBudWxsO1xufTtcblxuY3MudG8uaGV4ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gKFxuXHRcdCcjJyArXG5cdFx0aGV4RG91YmxlKHJnYmFbMF0pICtcblx0XHRoZXhEb3VibGUocmdiYVsxXSkgK1xuXHRcdGhleERvdWJsZShyZ2JhWzJdKSArXG5cdFx0KHJnYmFbM10gPCAxXG5cdFx0XHQ/IChoZXhEb3VibGUoTWF0aC5yb3VuZChyZ2JhWzNdICogMjU1KSkpXG5cdFx0XHQ6ICcnKVxuXHQpO1xufTtcblxuY3MudG8ucmdiID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHRyZXR1cm4gcmdiYS5sZW5ndGggPCA0IHx8IHJnYmFbM10gPT09IDFcblx0XHQ/ICdyZ2IoJyArIE1hdGgucm91bmQocmdiYVswXSkgKyAnLCAnICsgTWF0aC5yb3VuZChyZ2JhWzFdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMl0pICsgJyknXG5cdFx0OiAncmdiYSgnICsgTWF0aC5yb3VuZChyZ2JhWzBdKSArICcsICcgKyBNYXRoLnJvdW5kKHJnYmFbMV0pICsgJywgJyArIE1hdGgucm91bmQocmdiYVsyXSkgKyAnLCAnICsgcmdiYVszXSArICcpJztcbn07XG5cbmNzLnRvLnJnYi5wZXJjZW50ID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcmdiYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblxuXHR2YXIgciA9IE1hdGgucm91bmQocmdiYVswXSAvIDI1NSAqIDEwMCk7XG5cdHZhciBnID0gTWF0aC5yb3VuZChyZ2JhWzFdIC8gMjU1ICogMTAwKTtcblx0dmFyIGIgPSBNYXRoLnJvdW5kKHJnYmFbMl0gLyAyNTUgKiAxMDApO1xuXG5cdHJldHVybiByZ2JhLmxlbmd0aCA8IDQgfHwgcmdiYVszXSA9PT0gMVxuXHRcdD8gJ3JnYignICsgciArICclLCAnICsgZyArICclLCAnICsgYiArICclKSdcblx0XHQ6ICdyZ2JhKCcgKyByICsgJyUsICcgKyBnICsgJyUsICcgKyBiICsgJyUsICcgKyByZ2JhWzNdICsgJyknO1xufTtcblxuY3MudG8uaHNsID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgaHNsYSA9IHN3aXp6bGUoYXJndW1lbnRzKTtcblx0cmV0dXJuIGhzbGEubGVuZ3RoIDwgNCB8fCBoc2xhWzNdID09PSAxXG5cdFx0PyAnaHNsKCcgKyBoc2xhWzBdICsgJywgJyArIGhzbGFbMV0gKyAnJSwgJyArIGhzbGFbMl0gKyAnJSknXG5cdFx0OiAnaHNsYSgnICsgaHNsYVswXSArICcsICcgKyBoc2xhWzFdICsgJyUsICcgKyBoc2xhWzJdICsgJyUsICcgKyBoc2xhWzNdICsgJyknO1xufTtcblxuLy8gaHdiIGlzIGEgYml0IGRpZmZlcmVudCB0aGFuIHJnYihhKSAmIGhzbChhKSBzaW5jZSB0aGVyZSBpcyBubyBhbHBoYSBzcGVjaWZpYyBzeW50YXhcbi8vIChod2IgaGF2ZSBhbHBoYSBvcHRpb25hbCAmIDEgaXMgZGVmYXVsdCB2YWx1ZSlcbmNzLnRvLmh3YiA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGh3YmEgPSBzd2l6emxlKGFyZ3VtZW50cyk7XG5cblx0dmFyIGEgPSAnJztcblx0aWYgKGh3YmEubGVuZ3RoID49IDQgJiYgaHdiYVszXSAhPT0gMSkge1xuXHRcdGEgPSAnLCAnICsgaHdiYVszXTtcblx0fVxuXG5cdHJldHVybiAnaHdiKCcgKyBod2JhWzBdICsgJywgJyArIGh3YmFbMV0gKyAnJSwgJyArIGh3YmFbMl0gKyAnJScgKyBhICsgJyknO1xufTtcblxuY3MudG8ua2V5d29yZCA9IGZ1bmN0aW9uIChyZ2IpIHtcblx0cmV0dXJuIHJldmVyc2VOYW1lc1tyZ2Iuc2xpY2UoMCwgMyldO1xufTtcblxuLy8gaGVscGVyc1xuZnVuY3Rpb24gY2xhbXAobnVtLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobWluLCBudW0pLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBoZXhEb3VibGUobnVtKSB7XG5cdHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdHJldHVybiAoc3RyLmxlbmd0aCA8IDIpID8gJzAnICsgc3RyIDogc3RyO1xufVxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRcImFsaWNlYmx1ZVwiOiBbMjQwLCAyNDgsIDI1NV0sXHJcblx0XCJhbnRpcXVld2hpdGVcIjogWzI1MCwgMjM1LCAyMTVdLFxyXG5cdFwiYXF1YVwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiYXF1YW1hcmluZVwiOiBbMTI3LCAyNTUsIDIxMl0sXHJcblx0XCJhenVyZVwiOiBbMjQwLCAyNTUsIDI1NV0sXHJcblx0XCJiZWlnZVwiOiBbMjQ1LCAyNDUsIDIyMF0sXHJcblx0XCJiaXNxdWVcIjogWzI1NSwgMjI4LCAxOTZdLFxyXG5cdFwiYmxhY2tcIjogWzAsIDAsIDBdLFxyXG5cdFwiYmxhbmNoZWRhbG1vbmRcIjogWzI1NSwgMjM1LCAyMDVdLFxyXG5cdFwiYmx1ZVwiOiBbMCwgMCwgMjU1XSxcclxuXHRcImJsdWV2aW9sZXRcIjogWzEzOCwgNDMsIDIyNl0sXHJcblx0XCJicm93blwiOiBbMTY1LCA0MiwgNDJdLFxyXG5cdFwiYnVybHl3b29kXCI6IFsyMjIsIDE4NCwgMTM1XSxcclxuXHRcImNhZGV0Ymx1ZVwiOiBbOTUsIDE1OCwgMTYwXSxcclxuXHRcImNoYXJ0cmV1c2VcIjogWzEyNywgMjU1LCAwXSxcclxuXHRcImNob2NvbGF0ZVwiOiBbMjEwLCAxMDUsIDMwXSxcclxuXHRcImNvcmFsXCI6IFsyNTUsIDEyNywgODBdLFxyXG5cdFwiY29ybmZsb3dlcmJsdWVcIjogWzEwMCwgMTQ5LCAyMzddLFxyXG5cdFwiY29ybnNpbGtcIjogWzI1NSwgMjQ4LCAyMjBdLFxyXG5cdFwiY3JpbXNvblwiOiBbMjIwLCAyMCwgNjBdLFxyXG5cdFwiY3lhblwiOiBbMCwgMjU1LCAyNTVdLFxyXG5cdFwiZGFya2JsdWVcIjogWzAsIDAsIDEzOV0sXHJcblx0XCJkYXJrY3lhblwiOiBbMCwgMTM5LCAxMzldLFxyXG5cdFwiZGFya2dvbGRlbnJvZFwiOiBbMTg0LCAxMzQsIDExXSxcclxuXHRcImRhcmtncmF5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtncmVlblwiOiBbMCwgMTAwLCAwXSxcclxuXHRcImRhcmtncmV5XCI6IFsxNjksIDE2OSwgMTY5XSxcclxuXHRcImRhcmtraGFraVwiOiBbMTg5LCAxODMsIDEwN10sXHJcblx0XCJkYXJrbWFnZW50YVwiOiBbMTM5LCAwLCAxMzldLFxyXG5cdFwiZGFya29saXZlZ3JlZW5cIjogWzg1LCAxMDcsIDQ3XSxcclxuXHRcImRhcmtvcmFuZ2VcIjogWzI1NSwgMTQwLCAwXSxcclxuXHRcImRhcmtvcmNoaWRcIjogWzE1MywgNTAsIDIwNF0sXHJcblx0XCJkYXJrcmVkXCI6IFsxMzksIDAsIDBdLFxyXG5cdFwiZGFya3NhbG1vblwiOiBbMjMzLCAxNTAsIDEyMl0sXHJcblx0XCJkYXJrc2VhZ3JlZW5cIjogWzE0MywgMTg4LCAxNDNdLFxyXG5cdFwiZGFya3NsYXRlYmx1ZVwiOiBbNzIsIDYxLCAxMzldLFxyXG5cdFwiZGFya3NsYXRlZ3JheVwiOiBbNDcsIDc5LCA3OV0sXHJcblx0XCJkYXJrc2xhdGVncmV5XCI6IFs0NywgNzksIDc5XSxcclxuXHRcImRhcmt0dXJxdW9pc2VcIjogWzAsIDIwNiwgMjA5XSxcclxuXHRcImRhcmt2aW9sZXRcIjogWzE0OCwgMCwgMjExXSxcclxuXHRcImRlZXBwaW5rXCI6IFsyNTUsIDIwLCAxNDddLFxyXG5cdFwiZGVlcHNreWJsdWVcIjogWzAsIDE5MSwgMjU1XSxcclxuXHRcImRpbWdyYXlcIjogWzEwNSwgMTA1LCAxMDVdLFxyXG5cdFwiZGltZ3JleVwiOiBbMTA1LCAxMDUsIDEwNV0sXHJcblx0XCJkb2RnZXJibHVlXCI6IFszMCwgMTQ0LCAyNTVdLFxyXG5cdFwiZmlyZWJyaWNrXCI6IFsxNzgsIDM0LCAzNF0sXHJcblx0XCJmbG9yYWx3aGl0ZVwiOiBbMjU1LCAyNTAsIDI0MF0sXHJcblx0XCJmb3Jlc3RncmVlblwiOiBbMzQsIDEzOSwgMzRdLFxyXG5cdFwiZnVjaHNpYVwiOiBbMjU1LCAwLCAyNTVdLFxyXG5cdFwiZ2FpbnNib3JvXCI6IFsyMjAsIDIyMCwgMjIwXSxcclxuXHRcImdob3N0d2hpdGVcIjogWzI0OCwgMjQ4LCAyNTVdLFxyXG5cdFwiZ29sZFwiOiBbMjU1LCAyMTUsIDBdLFxyXG5cdFwiZ29sZGVucm9kXCI6IFsyMTgsIDE2NSwgMzJdLFxyXG5cdFwiZ3JheVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJncmVlblwiOiBbMCwgMTI4LCAwXSxcclxuXHRcImdyZWVueWVsbG93XCI6IFsxNzMsIDI1NSwgNDddLFxyXG5cdFwiZ3JleVwiOiBbMTI4LCAxMjgsIDEyOF0sXHJcblx0XCJob25leWRld1wiOiBbMjQwLCAyNTUsIDI0MF0sXHJcblx0XCJob3RwaW5rXCI6IFsyNTUsIDEwNSwgMTgwXSxcclxuXHRcImluZGlhbnJlZFwiOiBbMjA1LCA5MiwgOTJdLFxyXG5cdFwiaW5kaWdvXCI6IFs3NSwgMCwgMTMwXSxcclxuXHRcIml2b3J5XCI6IFsyNTUsIDI1NSwgMjQwXSxcclxuXHRcImtoYWtpXCI6IFsyNDAsIDIzMCwgMTQwXSxcclxuXHRcImxhdmVuZGVyXCI6IFsyMzAsIDIzMCwgMjUwXSxcclxuXHRcImxhdmVuZGVyYmx1c2hcIjogWzI1NSwgMjQwLCAyNDVdLFxyXG5cdFwibGF3bmdyZWVuXCI6IFsxMjQsIDI1MiwgMF0sXHJcblx0XCJsZW1vbmNoaWZmb25cIjogWzI1NSwgMjUwLCAyMDVdLFxyXG5cdFwibGlnaHRibHVlXCI6IFsxNzMsIDIxNiwgMjMwXSxcclxuXHRcImxpZ2h0Y29yYWxcIjogWzI0MCwgMTI4LCAxMjhdLFxyXG5cdFwibGlnaHRjeWFuXCI6IFsyMjQsIDI1NSwgMjU1XSxcclxuXHRcImxpZ2h0Z29sZGVucm9keWVsbG93XCI6IFsyNTAsIDI1MCwgMjEwXSxcclxuXHRcImxpZ2h0Z3JheVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodGdyZWVuXCI6IFsxNDQsIDIzOCwgMTQ0XSxcclxuXHRcImxpZ2h0Z3JleVwiOiBbMjExLCAyMTEsIDIxMV0sXHJcblx0XCJsaWdodHBpbmtcIjogWzI1NSwgMTgyLCAxOTNdLFxyXG5cdFwibGlnaHRzYWxtb25cIjogWzI1NSwgMTYwLCAxMjJdLFxyXG5cdFwibGlnaHRzZWFncmVlblwiOiBbMzIsIDE3OCwgMTcwXSxcclxuXHRcImxpZ2h0c2t5Ymx1ZVwiOiBbMTM1LCAyMDYsIDI1MF0sXHJcblx0XCJsaWdodHNsYXRlZ3JheVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHNsYXRlZ3JleVwiOiBbMTE5LCAxMzYsIDE1M10sXHJcblx0XCJsaWdodHN0ZWVsYmx1ZVwiOiBbMTc2LCAxOTYsIDIyMl0sXHJcblx0XCJsaWdodHllbGxvd1wiOiBbMjU1LCAyNTUsIDIyNF0sXHJcblx0XCJsaW1lXCI6IFswLCAyNTUsIDBdLFxyXG5cdFwibGltZWdyZWVuXCI6IFs1MCwgMjA1LCA1MF0sXHJcblx0XCJsaW5lblwiOiBbMjUwLCAyNDAsIDIzMF0sXHJcblx0XCJtYWdlbnRhXCI6IFsyNTUsIDAsIDI1NV0sXHJcblx0XCJtYXJvb25cIjogWzEyOCwgMCwgMF0sXHJcblx0XCJtZWRpdW1hcXVhbWFyaW5lXCI6IFsxMDIsIDIwNSwgMTcwXSxcclxuXHRcIm1lZGl1bWJsdWVcIjogWzAsIDAsIDIwNV0sXHJcblx0XCJtZWRpdW1vcmNoaWRcIjogWzE4NiwgODUsIDIxMV0sXHJcblx0XCJtZWRpdW1wdXJwbGVcIjogWzE0NywgMTEyLCAyMTldLFxyXG5cdFwibWVkaXVtc2VhZ3JlZW5cIjogWzYwLCAxNzksIDExM10sXHJcblx0XCJtZWRpdW1zbGF0ZWJsdWVcIjogWzEyMywgMTA0LCAyMzhdLFxyXG5cdFwibWVkaXVtc3ByaW5nZ3JlZW5cIjogWzAsIDI1MCwgMTU0XSxcclxuXHRcIm1lZGl1bXR1cnF1b2lzZVwiOiBbNzIsIDIwOSwgMjA0XSxcclxuXHRcIm1lZGl1bXZpb2xldHJlZFwiOiBbMTk5LCAyMSwgMTMzXSxcclxuXHRcIm1pZG5pZ2h0Ymx1ZVwiOiBbMjUsIDI1LCAxMTJdLFxyXG5cdFwibWludGNyZWFtXCI6IFsyNDUsIDI1NSwgMjUwXSxcclxuXHRcIm1pc3R5cm9zZVwiOiBbMjU1LCAyMjgsIDIyNV0sXHJcblx0XCJtb2NjYXNpblwiOiBbMjU1LCAyMjgsIDE4MV0sXHJcblx0XCJuYXZham93aGl0ZVwiOiBbMjU1LCAyMjIsIDE3M10sXHJcblx0XCJuYXZ5XCI6IFswLCAwLCAxMjhdLFxyXG5cdFwib2xkbGFjZVwiOiBbMjUzLCAyNDUsIDIzMF0sXHJcblx0XCJvbGl2ZVwiOiBbMTI4LCAxMjgsIDBdLFxyXG5cdFwib2xpdmVkcmFiXCI6IFsxMDcsIDE0MiwgMzVdLFxyXG5cdFwib3JhbmdlXCI6IFsyNTUsIDE2NSwgMF0sXHJcblx0XCJvcmFuZ2VyZWRcIjogWzI1NSwgNjksIDBdLFxyXG5cdFwib3JjaGlkXCI6IFsyMTgsIDExMiwgMjE0XSxcclxuXHRcInBhbGVnb2xkZW5yb2RcIjogWzIzOCwgMjMyLCAxNzBdLFxyXG5cdFwicGFsZWdyZWVuXCI6IFsxNTIsIDI1MSwgMTUyXSxcclxuXHRcInBhbGV0dXJxdW9pc2VcIjogWzE3NSwgMjM4LCAyMzhdLFxyXG5cdFwicGFsZXZpb2xldHJlZFwiOiBbMjE5LCAxMTIsIDE0N10sXHJcblx0XCJwYXBheWF3aGlwXCI6IFsyNTUsIDIzOSwgMjEzXSxcclxuXHRcInBlYWNocHVmZlwiOiBbMjU1LCAyMTgsIDE4NV0sXHJcblx0XCJwZXJ1XCI6IFsyMDUsIDEzMywgNjNdLFxyXG5cdFwicGlua1wiOiBbMjU1LCAxOTIsIDIwM10sXHJcblx0XCJwbHVtXCI6IFsyMjEsIDE2MCwgMjIxXSxcclxuXHRcInBvd2RlcmJsdWVcIjogWzE3NiwgMjI0LCAyMzBdLFxyXG5cdFwicHVycGxlXCI6IFsxMjgsIDAsIDEyOF0sXHJcblx0XCJyZWJlY2NhcHVycGxlXCI6IFsxMDIsIDUxLCAxNTNdLFxyXG5cdFwicmVkXCI6IFsyNTUsIDAsIDBdLFxyXG5cdFwicm9zeWJyb3duXCI6IFsxODgsIDE0MywgMTQzXSxcclxuXHRcInJveWFsYmx1ZVwiOiBbNjUsIDEwNSwgMjI1XSxcclxuXHRcInNhZGRsZWJyb3duXCI6IFsxMzksIDY5LCAxOV0sXHJcblx0XCJzYWxtb25cIjogWzI1MCwgMTI4LCAxMTRdLFxyXG5cdFwic2FuZHlicm93blwiOiBbMjQ0LCAxNjQsIDk2XSxcclxuXHRcInNlYWdyZWVuXCI6IFs0NiwgMTM5LCA4N10sXHJcblx0XCJzZWFzaGVsbFwiOiBbMjU1LCAyNDUsIDIzOF0sXHJcblx0XCJzaWVubmFcIjogWzE2MCwgODIsIDQ1XSxcclxuXHRcInNpbHZlclwiOiBbMTkyLCAxOTIsIDE5Ml0sXHJcblx0XCJza3libHVlXCI6IFsxMzUsIDIwNiwgMjM1XSxcclxuXHRcInNsYXRlYmx1ZVwiOiBbMTA2LCA5MCwgMjA1XSxcclxuXHRcInNsYXRlZ3JheVwiOiBbMTEyLCAxMjgsIDE0NF0sXHJcblx0XCJzbGF0ZWdyZXlcIjogWzExMiwgMTI4LCAxNDRdLFxyXG5cdFwic25vd1wiOiBbMjU1LCAyNTAsIDI1MF0sXHJcblx0XCJzcHJpbmdncmVlblwiOiBbMCwgMjU1LCAxMjddLFxyXG5cdFwic3RlZWxibHVlXCI6IFs3MCwgMTMwLCAxODBdLFxyXG5cdFwidGFuXCI6IFsyMTAsIDE4MCwgMTQwXSxcclxuXHRcInRlYWxcIjogWzAsIDEyOCwgMTI4XSxcclxuXHRcInRoaXN0bGVcIjogWzIxNiwgMTkxLCAyMTZdLFxyXG5cdFwidG9tYXRvXCI6IFsyNTUsIDk5LCA3MV0sXHJcblx0XCJ0dXJxdW9pc2VcIjogWzY0LCAyMjQsIDIwOF0sXHJcblx0XCJ2aW9sZXRcIjogWzIzOCwgMTMwLCAyMzhdLFxyXG5cdFwid2hlYXRcIjogWzI0NSwgMjIyLCAxNzldLFxyXG5cdFwid2hpdGVcIjogWzI1NSwgMjU1LCAyNTVdLFxyXG5cdFwid2hpdGVzbW9rZVwiOiBbMjQ1LCAyNDUsIDI0NV0sXHJcblx0XCJ5ZWxsb3dcIjogWzI1NSwgMjU1LCAwXSxcclxuXHRcInllbGxvd2dyZWVuXCI6IFsxNTQsIDIwNSwgNTBdXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbG9yU3RyaW5nID0gcmVxdWlyZSgnY29sb3Itc3RyaW5nJyk7XG52YXIgY29udmVydCA9IHJlcXVpcmUoJ2NvbG9yLWNvbnZlcnQnKTtcblxudmFyIF9zbGljZSA9IFtdLnNsaWNlO1xuXG52YXIgc2tpcHBlZE1vZGVscyA9IFtcblx0Ly8gdG8gYmUgaG9uZXN0LCBJIGRvbid0IHJlYWxseSBmZWVsIGxpa2Uga2V5d29yZCBiZWxvbmdzIGluIGNvbG9yIGNvbnZlcnQsIGJ1dCBlaC5cblx0J2tleXdvcmQnLFxuXG5cdC8vIGdyYXkgY29uZmxpY3RzIHdpdGggc29tZSBtZXRob2QgbmFtZXMsIGFuZCBoYXMgaXRzIG93biBtZXRob2QgZGVmaW5lZC5cblx0J2dyYXknLFxuXG5cdC8vIHNob3VsZG4ndCByZWFsbHkgYmUgaW4gY29sb3ItY29udmVydCBlaXRoZXIuLi5cblx0J2hleCdcbl07XG5cbnZhciBoYXNoZWRNb2RlbEtleXMgPSB7fTtcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGhhc2hlZE1vZGVsS2V5c1tfc2xpY2UuY2FsbChjb252ZXJ0W21vZGVsXS5sYWJlbHMpLnNvcnQoKS5qb2luKCcnKV0gPSBtb2RlbDtcbn0pO1xuXG52YXIgbGltaXRlcnMgPSB7fTtcblxuZnVuY3Rpb24gQ29sb3Iob2JqLCBtb2RlbCkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29sb3IpKSB7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihvYmosIG1vZGVsKTtcblx0fVxuXG5cdGlmIChtb2RlbCAmJiBtb2RlbCBpbiBza2lwcGVkTW9kZWxzKSB7XG5cdFx0bW9kZWwgPSBudWxsO1xuXHR9XG5cblx0aWYgKG1vZGVsICYmICEobW9kZWwgaW4gY29udmVydCkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbW9kZWw6ICcgKyBtb2RlbCk7XG5cdH1cblxuXHR2YXIgaTtcblx0dmFyIGNoYW5uZWxzO1xuXG5cdGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRoaXMubW9kZWwgPSAncmdiJztcblx0XHR0aGlzLmNvbG9yID0gWzAsIDAsIDBdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBDb2xvcikge1xuXHRcdHRoaXMubW9kZWwgPSBvYmoubW9kZWw7XG5cdFx0dGhpcy5jb2xvciA9IG9iai5jb2xvci5zbGljZSgpO1xuXHRcdHRoaXMudmFscGhhID0gb2JqLnZhbHBoYTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuXHRcdHZhciByZXN1bHQgPSBjb2xvclN0cmluZy5nZXQob2JqKTtcblx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZzogJyArIG9iaik7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IHJlc3VsdC5tb2RlbDtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dGhpcy5jb2xvciA9IHJlc3VsdC52YWx1ZS5zbGljZSgwLCBjaGFubmVscyk7XG5cdFx0dGhpcy52YWxwaGEgPSB0eXBlb2YgcmVzdWx0LnZhbHVlW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyByZXN1bHQudmFsdWVbY2hhbm5lbHNdIDogMTtcblx0fSBlbHNlIGlmIChvYmoubGVuZ3RoKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG1vZGVsIHx8ICdyZ2InO1xuXHRcdGNoYW5uZWxzID0gY29udmVydFt0aGlzLm1vZGVsXS5jaGFubmVscztcblx0XHR2YXIgbmV3QXJyID0gX3NsaWNlLmNhbGwob2JqLCAwLCBjaGFubmVscyk7XG5cdFx0dGhpcy5jb2xvciA9IHplcm9BcnJheShuZXdBcnIsIGNoYW5uZWxzKTtcblx0XHR0aGlzLnZhbHBoYSA9IHR5cGVvZiBvYmpbY2hhbm5lbHNdID09PSAnbnVtYmVyJyA/IG9ialtjaGFubmVsc10gOiAxO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG5cdFx0Ly8gdGhpcyBpcyBhbHdheXMgUkdCIC0gY2FuIGJlIGNvbnZlcnRlZCBsYXRlciBvbi5cblx0XHRvYmogJj0gMHhGRkZGRkY7XG5cdFx0dGhpcy5tb2RlbCA9ICdyZ2InO1xuXHRcdHRoaXMuY29sb3IgPSBbXG5cdFx0XHQob2JqID4+IDE2KSAmIDB4RkYsXG5cdFx0XHQob2JqID4+IDgpICYgMHhGRixcblx0XHRcdG9iaiAmIDB4RkZcblx0XHRdO1xuXHRcdHRoaXMudmFscGhhID0gMTtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnZhbHBoYSA9IDE7XG5cblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG5cdFx0aWYgKCdhbHBoYScgaW4gb2JqKSB7XG5cdFx0XHRrZXlzLnNwbGljZShrZXlzLmluZGV4T2YoJ2FscGhhJyksIDEpO1xuXHRcdFx0dGhpcy52YWxwaGEgPSB0eXBlb2Ygb2JqLmFscGhhID09PSAnbnVtYmVyJyA/IG9iai5hbHBoYSA6IDA7XG5cdFx0fVxuXG5cdFx0dmFyIGhhc2hlZEtleXMgPSBrZXlzLnNvcnQoKS5qb2luKCcnKTtcblx0XHRpZiAoIShoYXNoZWRLZXlzIGluIGhhc2hlZE1vZGVsS2V5cykpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb2RlbCA9IGhhc2hlZE1vZGVsS2V5c1toYXNoZWRLZXlzXTtcblxuXHRcdHZhciBsYWJlbHMgPSBjb252ZXJ0W3RoaXMubW9kZWxdLmxhYmVscztcblx0XHR2YXIgY29sb3IgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb2xvci5wdXNoKG9ialtsYWJlbHNbaV1dKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbG9yID0gemVyb0FycmF5KGNvbG9yKTtcblx0fVxuXG5cdC8vIHBlcmZvcm0gbGltaXRhdGlvbnMgKGNsYW1waW5nLCBldGMuKVxuXHRpZiAobGltaXRlcnNbdGhpcy5tb2RlbF0pIHtcblx0XHRjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0Zm9yIChpID0gMDsgaSA8IGNoYW5uZWxzOyBpKyspIHtcblx0XHRcdHZhciBsaW1pdCA9IGxpbWl0ZXJzW3RoaXMubW9kZWxdW2ldO1xuXHRcdFx0aWYgKGxpbWl0KSB7XG5cdFx0XHRcdHRoaXMuY29sb3JbaV0gPSBsaW1pdCh0aGlzLmNvbG9yW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aGlzLnZhbHBoYSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHRoaXMudmFscGhhKSk7XG5cblx0aWYgKE9iamVjdC5mcmVlemUpIHtcblx0XHRPYmplY3QuZnJlZXplKHRoaXMpO1xuXHR9XG59XG5cbkNvbG9yLnByb3RvdHlwZSA9IHtcblx0dG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJpbmcoKTtcblx0fSxcblxuXHR0b0pTT046IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpc1t0aGlzLm1vZGVsXSgpO1xuXHR9LFxuXG5cdHN0cmluZzogZnVuY3Rpb24gKHBsYWNlcykge1xuXHRcdHZhciBzZWxmID0gdGhpcy5tb2RlbCBpbiBjb2xvclN0cmluZy50byA/IHRoaXMgOiB0aGlzLnJnYigpO1xuXHRcdHNlbGYgPSBzZWxmLnJvdW5kKHR5cGVvZiBwbGFjZXMgPT09ICdudW1iZXInID8gcGxhY2VzIDogMSk7XG5cdFx0dmFyIGFyZ3MgPSBzZWxmLnZhbHBoYSA9PT0gMSA/IHNlbGYuY29sb3IgOiBzZWxmLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdFx0cmV0dXJuIGNvbG9yU3RyaW5nLnRvW3NlbGYubW9kZWxdKGFyZ3MpO1xuXHR9LFxuXG5cdHBlcmNlbnRTdHJpbmc6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMucmdiKCkucm91bmQodHlwZW9mIHBsYWNlcyA9PT0gJ251bWJlcicgPyBwbGFjZXMgOiAxKTtcblx0XHR2YXIgYXJncyA9IHNlbGYudmFscGhhID09PSAxID8gc2VsZi5jb2xvciA6IHNlbGYuY29sb3IuY29uY2F0KHRoaXMudmFscGhhKTtcblx0XHRyZXR1cm4gY29sb3JTdHJpbmcudG8ucmdiLnBlcmNlbnQoYXJncyk7XG5cdH0sXG5cblx0YXJyYXk6IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy52YWxwaGEgPT09IDEgPyB0aGlzLmNvbG9yLnNsaWNlKCkgOiB0aGlzLmNvbG9yLmNvbmNhdCh0aGlzLnZhbHBoYSk7XG5cdH0sXG5cblx0b2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IHt9O1xuXHRcdHZhciBjaGFubmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0uY2hhbm5lbHM7XG5cdFx0dmFyIGxhYmVscyA9IGNvbnZlcnRbdGhpcy5tb2RlbF0ubGFiZWxzO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGFubmVsczsgaSsrKSB7XG5cdFx0XHRyZXN1bHRbbGFiZWxzW2ldXSA9IHRoaXMuY29sb3JbaV07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZXN1bHQuYWxwaGEgPSB0aGlzLnZhbHBoYTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXG5cdHVuaXRBcnJheTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciByZ2IgPSB0aGlzLnJnYigpLmNvbG9yO1xuXHRcdHJnYlswXSAvPSAyNTU7XG5cdFx0cmdiWzFdIC89IDI1NTtcblx0XHRyZ2JbMl0gLz0gMjU1O1xuXG5cdFx0aWYgKHRoaXMudmFscGhhICE9PSAxKSB7XG5cdFx0XHRyZ2IucHVzaCh0aGlzLnZhbHBoYSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJnYjtcblx0fSxcblxuXHR1bml0T2JqZWN0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkub2JqZWN0KCk7XG5cdFx0cmdiLnIgLz0gMjU1O1xuXHRcdHJnYi5nIC89IDI1NTtcblx0XHRyZ2IuYiAvPSAyNTU7XG5cblx0XHRpZiAodGhpcy52YWxwaGEgIT09IDEpIHtcblx0XHRcdHJnYi5hbHBoYSA9IHRoaXMudmFscGhhO1xuXHRcdH1cblxuXHRcdHJldHVybiByZ2I7XG5cdH0sXG5cblx0cm91bmQ6IGZ1bmN0aW9uIChwbGFjZXMpIHtcblx0XHRwbGFjZXMgPSBNYXRoLm1heChwbGFjZXMgfHwgMCwgMCk7XG5cdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLm1hcChyb3VuZFRvUGxhY2UocGxhY2VzKSkuY29uY2F0KHRoaXMudmFscGhhKSwgdGhpcy5tb2RlbCk7XG5cdH0sXG5cblx0YWxwaGE6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzLmNvbG9yLmNvbmNhdChNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWwpKSksIHRoaXMubW9kZWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnZhbHBoYTtcblx0fSxcblxuXHQvLyByZ2Jcblx0cmVkOiBnZXRzZXQoJ3JnYicsIDAsIG1heGZuKDI1NSkpLFxuXHRncmVlbjogZ2V0c2V0KCdyZ2InLCAxLCBtYXhmbigyNTUpKSxcblx0Ymx1ZTogZ2V0c2V0KCdyZ2InLCAyLCBtYXhmbigyNTUpKSxcblxuXHRodWU6IGdldHNldChbJ2hzbCcsICdoc3YnLCAnaHNsJywgJ2h3YicsICdoY2cnXSwgMCwgZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gKCh2YWwgJSAzNjApICsgMzYwKSAlIDM2MDsgfSksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgYnJhY2Utc3R5bGVcblxuXHRzYXR1cmF0aW9ubDogZ2V0c2V0KCdoc2wnLCAxLCBtYXhmbigxMDApKSxcblx0bGlnaHRuZXNzOiBnZXRzZXQoJ2hzbCcsIDIsIG1heGZuKDEwMCkpLFxuXG5cdHNhdHVyYXRpb252OiBnZXRzZXQoJ2hzdicsIDEsIG1heGZuKDEwMCkpLFxuXHR2YWx1ZTogZ2V0c2V0KCdoc3YnLCAyLCBtYXhmbigxMDApKSxcblxuXHRjaHJvbWE6IGdldHNldCgnaGNnJywgMSwgbWF4Zm4oMTAwKSksXG5cdGdyYXk6IGdldHNldCgnaGNnJywgMiwgbWF4Zm4oMTAwKSksXG5cblx0d2hpdGU6IGdldHNldCgnaHdiJywgMSwgbWF4Zm4oMTAwKSksXG5cdHdibGFjazogZ2V0c2V0KCdod2InLCAyLCBtYXhmbigxMDApKSxcblxuXHRjeWFuOiBnZXRzZXQoJ2NteWsnLCAwLCBtYXhmbigxMDApKSxcblx0bWFnZW50YTogZ2V0c2V0KCdjbXlrJywgMSwgbWF4Zm4oMTAwKSksXG5cdHllbGxvdzogZ2V0c2V0KCdjbXlrJywgMiwgbWF4Zm4oMTAwKSksXG5cdGJsYWNrOiBnZXRzZXQoJ2NteWsnLCAzLCBtYXhmbigxMDApKSxcblxuXHR4OiBnZXRzZXQoJ3h5eicsIDAsIG1heGZuKDEwMCkpLFxuXHR5OiBnZXRzZXQoJ3h5eicsIDEsIG1heGZuKDEwMCkpLFxuXHR6OiBnZXRzZXQoJ3h5eicsIDIsIG1heGZuKDEwMCkpLFxuXG5cdGw6IGdldHNldCgnbGFiJywgMCwgbWF4Zm4oMTAwKSksXG5cdGE6IGdldHNldCgnbGFiJywgMSksXG5cdGI6IGdldHNldCgnbGFiJywgMiksXG5cblx0a2V5d29yZDogZnVuY3Rpb24gKHZhbCkge1xuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gbmV3IENvbG9yKHZhbCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbnZlcnRbdGhpcy5tb2RlbF0ua2V5d29yZCh0aGlzLmNvbG9yKTtcblx0fSxcblxuXHRoZXg6IGZ1bmN0aW9uICh2YWwpIHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih2YWwpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2xvclN0cmluZy50by5oZXgodGhpcy5yZ2IoKS5yb3VuZCgpLmNvbG9yKTtcblx0fSxcblxuXHRyZ2JOdW1iZXI6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHRyZXR1cm4gKChyZ2JbMF0gJiAweEZGKSA8PCAxNikgfCAoKHJnYlsxXSAmIDB4RkYpIDw8IDgpIHwgKHJnYlsyXSAmIDB4RkYpO1xuXHR9LFxuXG5cdGx1bWlub3NpdHk6IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI3JlbGF0aXZlbHVtaW5hbmNlZGVmXG5cdFx0dmFyIHJnYiA9IHRoaXMucmdiKCkuY29sb3I7XG5cblx0XHR2YXIgbHVtID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZ2IubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBjaGFuID0gcmdiW2ldIC8gMjU1O1xuXHRcdFx0bHVtW2ldID0gKGNoYW4gPD0gMC4wMzkyOCkgPyBjaGFuIC8gMTIuOTIgOiBNYXRoLnBvdygoKGNoYW4gKyAwLjA1NSkgLyAxLjA1NSksIDIuNCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDAuMjEyNiAqIGx1bVswXSArIDAuNzE1MiAqIGx1bVsxXSArIDAuMDcyMiAqIGx1bVsyXTtcblx0fSxcblxuXHRjb250cmFzdDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWZcblx0XHR2YXIgbHVtMSA9IHRoaXMubHVtaW5vc2l0eSgpO1xuXHRcdHZhciBsdW0yID0gY29sb3IyLmx1bWlub3NpdHkoKTtcblxuXHRcdGlmIChsdW0xID4gbHVtMikge1xuXHRcdFx0cmV0dXJuIChsdW0xICsgMC4wNSkgLyAobHVtMiArIDAuMDUpO1xuXHRcdH1cblxuXHRcdHJldHVybiAobHVtMiArIDAuMDUpIC8gKGx1bTEgKyAwLjA1KTtcblx0fSxcblxuXHRsZXZlbDogZnVuY3Rpb24gKGNvbG9yMikge1xuXHRcdHZhciBjb250cmFzdFJhdGlvID0gdGhpcy5jb250cmFzdChjb2xvcjIpO1xuXHRcdGlmIChjb250cmFzdFJhdGlvID49IDcuMSkge1xuXHRcdFx0cmV0dXJuICdBQUEnO1xuXHRcdH1cblxuXHRcdHJldHVybiAoY29udHJhc3RSYXRpbyA+PSA0LjUpID8gJ0FBJyA6ICcnO1xuXHR9LFxuXG5cdGlzRGFyazogZnVuY3Rpb24gKCkge1xuXHRcdC8vIFlJUSBlcXVhdGlvbiBmcm9tIGh0dHA6Ly8yNHdheXMub3JnLzIwMTAvY2FsY3VsYXRpbmctY29sb3ItY29udHJhc3Rcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgeWlxID0gKHJnYlswXSAqIDI5OSArIHJnYlsxXSAqIDU4NyArIHJnYlsyXSAqIDExNCkgLyAxMDAwO1xuXHRcdHJldHVybiB5aXEgPCAxMjg7XG5cdH0sXG5cblx0aXNMaWdodDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAhdGhpcy5pc0RhcmsoKTtcblx0fSxcblxuXHRuZWdhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXHRcdFx0cmdiLmNvbG9yW2ldID0gMjU1IC0gcmdiLmNvbG9yW2ldO1xuXHRcdH1cblx0XHRyZXR1cm4gcmdiO1xuXHR9LFxuXG5cdGxpZ2h0ZW46IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsyXSArPSBoc2wuY29sb3JbMl0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRhcmtlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGhzbCA9IHRoaXMuaHNsKCk7XG5cdFx0aHNsLmNvbG9yWzJdIC09IGhzbC5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBoc2w7XG5cdH0sXG5cblx0c2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSArPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdGRlc2F0dXJhdGU6IGZ1bmN0aW9uIChyYXRpbykge1xuXHRcdHZhciBoc2wgPSB0aGlzLmhzbCgpO1xuXHRcdGhzbC5jb2xvclsxXSAtPSBoc2wuY29sb3JbMV0gKiByYXRpbztcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdHdoaXRlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzFdICs9IGh3Yi5jb2xvclsxXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0YmxhY2tlbjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0dmFyIGh3YiA9IHRoaXMuaHdiKCk7XG5cdFx0aHdiLmNvbG9yWzJdICs9IGh3Yi5jb2xvclsyXSAqIHJhdGlvO1xuXHRcdHJldHVybiBod2I7XG5cdH0sXG5cblx0Z3JheXNjYWxlOiBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9HcmF5c2NhbGUjQ29udmVydGluZ19jb2xvcl90b19ncmF5c2NhbGVcblx0XHR2YXIgcmdiID0gdGhpcy5yZ2IoKS5jb2xvcjtcblx0XHR2YXIgdmFsID0gcmdiWzBdICogMC4zICsgcmdiWzFdICogMC41OSArIHJnYlsyXSAqIDAuMTE7XG5cdFx0cmV0dXJuIENvbG9yLnJnYih2YWwsIHZhbCwgdmFsKTtcblx0fSxcblxuXHRmYWRlOiBmdW5jdGlvbiAocmF0aW8pIHtcblx0XHRyZXR1cm4gdGhpcy5hbHBoYSh0aGlzLnZhbHBoYSAtICh0aGlzLnZhbHBoYSAqIHJhdGlvKSk7XG5cdH0sXG5cblx0b3BhcXVlcjogZnVuY3Rpb24gKHJhdGlvKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWxwaGEodGhpcy52YWxwaGEgKyAodGhpcy52YWxwaGEgKiByYXRpbykpO1xuXHR9LFxuXG5cdHJvdGF0ZTogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcblx0XHR2YXIgaHNsID0gdGhpcy5oc2woKTtcblx0XHR2YXIgaHVlID0gaHNsLmNvbG9yWzBdO1xuXHRcdGh1ZSA9IChodWUgKyBkZWdyZWVzKSAlIDM2MDtcblx0XHRodWUgPSBodWUgPCAwID8gMzYwICsgaHVlIDogaHVlO1xuXHRcdGhzbC5jb2xvclswXSA9IGh1ZTtcblx0XHRyZXR1cm4gaHNsO1xuXHR9LFxuXG5cdG1peDogZnVuY3Rpb24gKG1peGluQ29sb3IsIHdlaWdodCkge1xuXHRcdC8vIHBvcnRlZCBmcm9tIHNhc3MgaW1wbGVtZW50YXRpb24gaW4gQ1xuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL2xpYnNhc3MvYmxvYi8wZTZiNGEyODUwMDkyMzU2YWEzZWNlMDdjNmIyNDlmMDIyMWNhY2VkL2Z1bmN0aW9ucy5jcHAjTDIwOVxuXHRcdHZhciBjb2xvcjEgPSBtaXhpbkNvbG9yLnJnYigpO1xuXHRcdHZhciBjb2xvcjIgPSB0aGlzLnJnYigpO1xuXHRcdHZhciBwID0gd2VpZ2h0ID09PSB1bmRlZmluZWQgPyAwLjUgOiB3ZWlnaHQ7XG5cblx0XHR2YXIgdyA9IDIgKiBwIC0gMTtcblx0XHR2YXIgYSA9IGNvbG9yMS5hbHBoYSgpIC0gY29sb3IyLmFscGhhKCk7XG5cblx0XHR2YXIgdzEgPSAoKCh3ICogYSA9PT0gLTEpID8gdyA6ICh3ICsgYSkgLyAoMSArIHcgKiBhKSkgKyAxKSAvIDIuMDtcblx0XHR2YXIgdzIgPSAxIC0gdzE7XG5cblx0XHRyZXR1cm4gQ29sb3IucmdiKFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5yZWQoKSArIHcyICogY29sb3IyLnJlZCgpLFxuXHRcdFx0XHR3MSAqIGNvbG9yMS5ncmVlbigpICsgdzIgKiBjb2xvcjIuZ3JlZW4oKSxcblx0XHRcdFx0dzEgKiBjb2xvcjEuYmx1ZSgpICsgdzIgKiBjb2xvcjIuYmx1ZSgpLFxuXHRcdFx0XHRjb2xvcjEuYWxwaGEoKSAqIHAgKyBjb2xvcjIuYWxwaGEoKSAqICgxIC0gcCkpO1xuXHR9XG59O1xuXG4vLyBtb2RlbCBjb252ZXJzaW9uIG1ldGhvZHMgYW5kIHN0YXRpYyBjb25zdHJ1Y3RvcnNcbk9iamVjdC5rZXlzKGNvbnZlcnQpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG5cdGlmIChza2lwcGVkTW9kZWxzLmluZGV4T2YobW9kZWwpICE9PSAtMSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHZhciBjaGFubmVscyA9IGNvbnZlcnRbbW9kZWxdLmNoYW5uZWxzO1xuXG5cdC8vIGNvbnZlcnNpb24gbWV0aG9kc1xuXHRDb2xvci5wcm90b3R5cGVbbW9kZWxdID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzLm1vZGVsID09PSBtb2RlbCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcih0aGlzKTtcblx0XHR9XG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIG5ldyBDb2xvcihhcmd1bWVudHMsIG1vZGVsKTtcblx0XHR9XG5cblx0XHR2YXIgbmV3QWxwaGEgPSB0eXBlb2YgYXJndW1lbnRzW2NoYW5uZWxzXSA9PT0gJ251bWJlcicgPyBjaGFubmVscyA6IHRoaXMudmFscGhhO1xuXHRcdHJldHVybiBuZXcgQ29sb3IoYXNzZXJ0QXJyYXkoY29udmVydFt0aGlzLm1vZGVsXVttb2RlbF0ucmF3KHRoaXMuY29sb3IpKS5jb25jYXQobmV3QWxwaGEpLCBtb2RlbCk7XG5cdH07XG5cblx0Ly8gJ3N0YXRpYycgY29uc3RydWN0aW9uIG1ldGhvZHNcblx0Q29sb3JbbW9kZWxdID0gZnVuY3Rpb24gKGNvbG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBjb2xvciA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbG9yID0gemVyb0FycmF5KF9zbGljZS5jYWxsKGFyZ3VtZW50cyksIGNoYW5uZWxzKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBDb2xvcihjb2xvciwgbW9kZWwpO1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIHJvdW5kVG8obnVtLCBwbGFjZXMpIHtcblx0cmV0dXJuIE51bWJlcihudW0udG9GaXhlZChwbGFjZXMpKTtcbn1cblxuZnVuY3Rpb24gcm91bmRUb1BsYWNlKHBsYWNlcykge1xuXHRyZXR1cm4gZnVuY3Rpb24gKG51bSkge1xuXHRcdHJldHVybiByb3VuZFRvKG51bSwgcGxhY2VzKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gZ2V0c2V0KG1vZGVsLCBjaGFubmVsLCBtb2RpZmllcikge1xuXHRtb2RlbCA9IEFycmF5LmlzQXJyYXkobW9kZWwpID8gbW9kZWwgOiBbbW9kZWxdO1xuXG5cdG1vZGVsLmZvckVhY2goZnVuY3Rpb24gKG0pIHtcblx0XHQobGltaXRlcnNbbV0gfHwgKGxpbWl0ZXJzW21dID0gW10pKVtjaGFubmVsXSA9IG1vZGlmaWVyO1xuXHR9KTtcblxuXHRtb2RlbCA9IG1vZGVsWzBdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0dmFyIHJlc3VsdDtcblxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdFx0dmFsID0gbW9kaWZpZXIodmFsKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKTtcblx0XHRcdHJlc3VsdC5jb2xvcltjaGFubmVsXSA9IHZhbDtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmVzdWx0ID0gdGhpc1ttb2RlbF0oKS5jb2xvcltjaGFubmVsXTtcblx0XHRpZiAobW9kaWZpZXIpIHtcblx0XHRcdHJlc3VsdCA9IG1vZGlmaWVyKHJlc3VsdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn1cblxuZnVuY3Rpb24gbWF4Zm4obWF4KSB7XG5cdHJldHVybiBmdW5jdGlvbiAodikge1xuXHRcdHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihtYXgsIHYpKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gYXNzZXJ0QXJyYXkodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyB2YWwgOiBbdmFsXTtcbn1cblxuZnVuY3Rpb24gemVyb0FycmF5KGFyciwgbGVuZ3RoKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodHlwZW9mIGFycltpXSAhPT0gJ251bWJlcicpIHtcblx0XHRcdGFycltpXSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvcjtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcnJheWlzaChvYmopIHtcblx0aWYgKCFvYmogfHwgdHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXkgfHwgQXJyYXkuaXNBcnJheShvYmopIHx8XG5cdFx0KG9iai5sZW5ndGggPj0gMCAmJiAob2JqLnNwbGljZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG5cdFx0XHQoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIChvYmoubGVuZ3RoIC0gMSkpICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9PSAnU3RyaW5nJykpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0FycmF5aXNoID0gcmVxdWlyZSgnaXMtYXJyYXlpc2gnKTtcblxudmFyIGNvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbnZhciBzd2l6emxlID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzd2l6emxlKGFyZ3MpIHtcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gYXJncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdHZhciBhcmcgPSBhcmdzW2ldO1xuXG5cdFx0aWYgKGlzQXJyYXlpc2goYXJnKSkge1xuXHRcdFx0Ly8gaHR0cDovL2pzcGVyZi5jb20vamF2YXNjcmlwdC1hcnJheS1jb25jYXQtdnMtcHVzaC85OFxuXHRcdFx0cmVzdWx0cyA9IGNvbmNhdC5jYWxsKHJlc3VsdHMsIHNsaWNlLmNhbGwoYXJnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdHMucHVzaChhcmcpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuc3dpenpsZS53cmFwID0gZnVuY3Rpb24gKGZuKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGZuKHN3aXp6bGUoYXJndW1lbnRzKSk7XG5cdH07XG59O1xuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IE1hcmtlcnNMYXllciwge1xuICBNYXJrZXJzTGF5ZXJPcHRpb25zLFxuICBNYXJrZXJzSGVhdExheWVyT3B0aW9ucyxcbn0gZnJvbSAnLi4vbWFya2VyL01hcmtlcnNMYXllcidcblxuaW50ZXJmYWNlIER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zIGV4dGVuZHMgTWFya2Vyc0hlYXRMYXllck9wdGlvbnMge1xuICAvKiog5piv5ZCm5b6q546v5pKt5pS+ICovXG4gIGxvb3A6IGJvb2xlYW5cbiAgLyoqIOaYr+WQpuiHquWKqOaSreaUviAqL1xuICBhdXRvOiBib29sZWFuXG4gIC8qKiDpl7TpmpTml7bpl7QgKi9cbiAgaW50ZXJ2YWw6IG51bWJlclxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljSGVhdExheWVyIHtcbiAgLyoqIOW9k+WJjeaSreaUvuWIsOesrOWHoOatpSAqL1xuICBwcml2YXRlIGN1cnJlbnRTdGVwOiBudW1iZXJcblxuICBwcml2YXRlIG1hcDogTC5NYXBcbiAgcHJpdmF0ZSBkeW5hbWljRGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdW11cbiAgcHJpdmF0ZSBvcHRpb25zOiBEeW5hbWljSGVhdExheWVyT3B0aW9uc1xuICBwcml2YXRlIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICBwcml2YXRlIGxheWVyOiBNYXJrZXJzTGF5ZXJcbiAgcHJpdmF0ZSBpc1BhdXNlOiBib29sZWFuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZHluYW1pY0RhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXVtdLFxuICAgIG9wdGlvbnM6IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zLFxuICAgIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuICApIHtcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZHluYW1pY0RhdGFMaXN0ID0gZHluYW1pY0RhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwXG4gICAgdGhpcy5pc1BhdXNlID0gdHJ1ZVxuICB9XG4gIHB1YmxpYyByZXN0YXJ0KCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IDBcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gICAgdGhpcy5zdGFydCgpXG4gIH1cbiAgcHVibGljIHN0YXJ0KCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IGZhbHNlXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuYXV0bykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNQYXVzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIC8qKiDmkq3mlL7lrozmr5UgKi9cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdGFydCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKytcbiAgICAgICAgdGhpcy5nb3RvU3RlcCh0aGlzLmN1cnJlbnRTdGVwKVxuICAgICAgICB0aGlzLnN0YXJ0KClcbiAgICAgIH1cbiAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpXG4gIH1cbiAgcHVibGljIHBhdXNlKCkge1xuICAgIHRoaXMuaXNQYXVzZSA9IHRydWVcbiAgfVxuICBwdWJsaWMgcHJldigpIHtcbiAgICB0aGlzLmN1cnJlbnRTdGVwLS1cbiAgICB0aGlzLmN1cnJlbnRTdGVwID1cbiAgICAgICh0aGlzLmN1cnJlbnRTdGVwICsgdGhpcy5keW5hbWljRGF0YUxpc3QubGVuZ3RoKSAlXG4gICAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGhcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gIH1cbiAgcHVibGljIG5leHQoKSB7XG4gICAgdGhpcy5jdXJyZW50U3RlcCsrXG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IHRoaXMuY3VycmVudFN0ZXAgJSB0aGlzLmR5bmFtaWNEYXRhTGlzdC5sZW5ndGhcbiAgICB0aGlzLmdvdG9TdGVwKHRoaXMuY3VycmVudFN0ZXApXG4gIH1cbiAgcHVibGljIGdvdG9TdGVwKHN0ZXA6IG51bWJlcikge1xuICAgIGlmIChzdGVwIDwgMCB8fCBzdGVwID49IHRoaXMuZHluYW1pY0RhdGFMaXN0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBnb3RvU3RlcCgke3N0ZXB9KTogc3RlcCBpcyBvdXQgb2YgaW5kZXggYClcbiAgICB9XG4gICAgdGhpcy5sYXllci5zZXREYXRhKHRoaXMuZHluYW1pY0RhdGFMaXN0W3N0ZXBdKVxuICAgIHRoaXMubGF5ZXIuZHJhdygpXG4gIH1cbiAgcHVibGljIGRyYXcob3B0aW9ucz86IER5bmFtaWNIZWF0TGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5pbml0T3B0aW9ucyhvcHRpb25zKVxuICAgIHRoaXMuaW5pdExheWVyKClcbiAgICB0aGlzLmxheWVyLmRyYXcoKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIGZpdEJvdW5kcygpIHtcbiAgICB0aGlzLmxheWVyLmZpdEJvdW5kcygpXG4gIH1cbiAgcHJpdmF0ZSBpbml0T3B0aW9ucyhvcHRpb25zPzogRHluYW1pY0hlYXRMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgYXV0bzogZmFsc2UsXG4gICAgICAgIGludGVydmFsOiAxMDAwLFxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIG9wdGlvbnNcbiAgICApXG4gIH1cbiAgcHJpdmF0ZSBpbml0TGF5ZXIoKSB7XG4gICAgY29uc3QgbWFya2Vyc0xheWVyT3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucyA9IHtcbiAgICAgIHJlbmRlclR5cGU6ICdoZWF0JyxcbiAgICAgIGhlYXRPcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSBuZXcgTWFya2Vyc0xheWVyKFxuICAgICAgdGhpcy5tYXAsXG4gICAgICB0aGlzLmR5bmFtaWNEYXRhTGlzdFswXSxcbiAgICAgIG1hcmtlcnNMYXllck9wdGlvbnMsXG4gICAgICB0aGlzLmNoYW5uZWxGdW5jXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmxheWVyXG4gIH1cbn1cbiIsImltcG9ydCBNYXJrZXIgZnJvbSAnLi9tYXJrZXIvTWFya2VyJ1xuaW1wb3J0IE1hcmtlcnNMYXllciBmcm9tICcuL21hcmtlci9NYXJrZXJzTGF5ZXInXG5pbXBvcnQgTWFya2Vyc0J1ZmZlckxheWVyIGZyb20gJy4vbWFya2VyL01hcmtlcnNCdWZmZXJMYXllcidcbmltcG9ydCBQb2x5bGluZSBmcm9tICcuL3BvbHlsaW5lL1BvbHlsaW5lJ1xuaW1wb3J0IFBvbHlsaW5lc0xheWVyIGZyb20gJy4vcG9seWxpbmUvUG9seWxpbmVzTGF5ZXInXG5pbXBvcnQgUG9seWxpbmVzQnVmZmVyTGF5ZXIgZnJvbSAnLi9wb2x5bGluZS9Qb2x5bGluZXNCdWZmZXJMYXllcidcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vcG9seWdvbi9Qb2x5Z29uJ1xuaW1wb3J0IFBvbHlnb25zTGF5ZXIgZnJvbSAnLi9wb2x5Z29uL1BvbHlnb25zTGF5ZXInXG5pbXBvcnQgR3JpZHNMYXllciBmcm9tICcuL3BvbHlnb24vR3JpZHNMYXllcidcbmltcG9ydCBEeW5hbWljSGVhdExheWVyIGZyb20gJy4vZHluYW1pY0hlYXRMYXllci9EeW5hbWljSGVhdExheWVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIE1hcmtlcixcbiAgTWFya2Vyc0xheWVyLFxuICBNYXJrZXJzQnVmZmVyTGF5ZXIsXG4gIFBvbHlsaW5lLFxuICBQb2x5bGluZXNMYXllcixcbiAgUG9seWxpbmVzQnVmZmVyTGF5ZXIsXG4gIFBvbHlnb24sXG4gIFBvbHlnb25zTGF5ZXIsXG4gIEdyaWRzTGF5ZXIsXG4gIER5bmFtaWNIZWF0TGF5ZXIsXG59XG5leHBvcnQge1xuICBNYXJrZXIsXG4gIE1hcmtlcnNMYXllcixcbiAgTWFya2Vyc0J1ZmZlckxheWVyLFxuICBQb2x5bGluZSxcbiAgUG9seWxpbmVzTGF5ZXIsXG4gIFBvbHlsaW5lc0J1ZmZlckxheWVyLFxuICBQb2x5Z29uLFxuICBQb2x5Z29uc0xheWVyLFxuICBHcmlkc0xheWVyLFxuICBEeW5hbWljSGVhdExheWVyLFxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlciBleHRlbmRzIEwuTWFya2VyIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgcHJpdmF0ZSBfX2RhdGE6IERhdGFMaXN0SXRlbVxuICBjb25zdHJ1Y3RvcihsYXRsbmc6IEwuTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IEwuTWFya2VyT3B0aW9ucykge1xuICAgIHN1cGVyKGxhdGxuZywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IE1hcmtlcnNMYXllciwgeyBNYXJrZXJzTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi9NYXJrZXJzTGF5ZXInXG5pbnRlcmZhY2UgTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9ucyBleHRlbmRzIE1hcmtlcnNMYXllck9wdGlvbnMge1xuICBidWZmZXJUb29sdGlwQXR0cjogc3RyaW5nXG4gIGJ1ZmZlck9wdGlvbnM6IEwuQ2lyY2xlTWFya2VyT3B0aW9uc1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya2Vyc0J1ZmZlckxheWVyIGV4dGVuZHMgTWFya2Vyc0xheWVyIHtcbiAgcHVibGljIG9wdGlvbnM6IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnNcbiAgcHJpdmF0ZSBidWZmZXJMYXllcjogTC5MYXllckdyb3VwXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IE1hcmtlcnNCdWZmZXJMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIHRoaXMudHlwZSA9ICdtYXJrZXJCdWZmZXInXG4gICAgY29uc3QgZGVmYXVsdEJ1ZmZlck9wdGlvbnM6IEwuQ2lyY2xlTWFya2VyT3B0aW9ucyA9IHtcbiAgICAgIHJhZGl1czogMTAwMCxcbiAgICAgIHN0cm9rZTogdHJ1ZSxcbiAgICAgIHdlaWdodDogMSxcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHsgYnVmZmVyT3B0aW9uczogZGVmYXVsdEJ1ZmZlck9wdGlvbnMgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApXG4gIH1cblxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogTWFya2Vyc0J1ZmZlckxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLmNvbG9yID0gdGhpcy5vcHRpb25zLmljb25Db2xvclxuICAgIHRoaXMuaW5pdE1hcmtlcnMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cblxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubWFya2VyTGF5ZXIpIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgfVxuICAgIGlmICh0aGlzLmJ1ZmZlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmJ1ZmZlckxheWVyKVxuICAgIH1cbiAgICB0aGlzLm1hcmtlckxheWVyID0gdGhpcy5jb25maWdNYXJrZXJMYXllcigpXG4gICAgdGhpcy5idWZmZXJMYXllciA9IHRoaXMuY29uZmlnQnVmZmVyTGF5ZXIoKVxuXG4gICAgdGhpcy5sYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5sYXllci5hZGRMYXllcih0aGlzLm1hcmtlckxheWVyKVxuICAgIHRoaXMubGF5ZXIuYWRkTGF5ZXIodGhpcy5idWZmZXJMYXllcilcblxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWFya2Vycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgIHJldHVybiBwcmV2LmV4dGVuZChcbiAgICAgICAgY3Vyci5nZXRMYXRMbmcoKS50b0JvdW5kcyh0aGlzLm9wdGlvbnMuYnVmZmVyT3B0aW9ucy5yYWRpdXMpXG4gICAgICApXG4gICAgfSwgdGhpcy5tYXJrZXJzWzBdLmdldExhdExuZygpLnRvQm91bmRzKHRoaXMub3B0aW9ucy5idWZmZXJPcHRpb25zLnJhZGl1cykpXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ0J1ZmZlckxheWVyKCkge1xuICAgIGNvbnN0IGdyb3VwTGF5ZXIgPSBMLmxheWVyR3JvdXAoKVxuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGNvbnN0IGNpcmNsZUxheWVyID0gTC5jaXJjbGUoXG4gICAgICAgIG1hcmtlci5nZXRMYXRMbmcoKSxcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1ZmZlck9wdGlvbnNcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnVmZmVyVG9vbHRpcEF0dHIpIHtcbiAgICAgICAgY2lyY2xlTGF5ZXIuYmluZFRvb2x0aXAoXG4gICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5idWZmZXJUb29sdGlwQXR0cl1cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBjaXJjbGVMYXllci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICAgJycgKyBtYXJrZXIuZ2V0RGF0YSgpW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICAgICAgICApXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGdyb3VwTGF5ZXIuYWRkTGF5ZXIoY2lyY2xlTGF5ZXIpXG4gICAgfSlcbiAgICByZXR1cm4gZ3JvdXBMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBsaWdodGVuIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnXG5pbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgTWFya2VyIGZyb20gJy4vTWFya2VyJ1xuXG4vKiog5riy5p+T5qC35byPIOaVo+eCuXzng63lipvlm74gKi9cbnR5cGUgTWFya2Vyc0xheWVyUmVuZGVyVHlwZSA9ICdwb2ludCcgfCAnaGVhdCcgfCAnY2x1c3RlcidcblxuLyoqIOa4suafk+minOiJsuagt+W8jyDljZXoibJ85YiG5q61ICovXG50eXBlIE1hcmtlcnNMYXllclJlbmRlclBvaW50Q29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuXG4vKiog5pWj54K55Zu+5qCH57G75Z6LIGljb25mb250fHN2Z3xpbWFnZSAqL1xudHlwZSBNYXJrZXJzTGF5ZXJJY29uVHlwZSA9ICdmb250X2NsYXNzJyB8ICd1bmljb2RlJyB8ICdzeW1ib2wnIHwgJ2ltYWdlJ1xuXG5pbnRlcmZhY2UgSWNvblJlbmRlckZ1bmNPcHRpb24ge1xuICBpY29uU2l6ZTogW251bWJlciwgbnVtYmVyXVxuICBpY29uQ29sb3I6IHN0cmluZ1xufVxudHlwZSBJY29uUmVuZGVyRnVuYyA9IChcbiAgZGF0YTogRGF0YUxpc3RJdGVtLFxuICBwYXJhbXM6IEljb25SZW5kZXJGdW5jT3B0aW9uXG4pID0+IHN0cmluZ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlcnNMYXllck9wdGlvbnMge1xuICByZW5kZXJUeXBlOiBNYXJrZXJzTGF5ZXJSZW5kZXJUeXBlXG4gIHJlbmRlclBvaW50Q29sb3JUeXBlPzogTWFya2Vyc0xheWVyUmVuZGVyUG9pbnRDb2xvclR5cGVcbiAgaWNvblR5cGU/OiBNYXJrZXJzTGF5ZXJJY29uVHlwZVxuXG4gIGljb25JbWFnZVVybD86IHN0cmluZ1xuICBpY29uU2l6ZT86IFtudW1iZXIsIG51bWJlcl1cbiAgaWNvbkNsYXNzPzogc3RyaW5nXG4gIGljb25Vbmljb2RlPzogc3RyaW5nXG4gIGljb25TeW1ib2w/OiBzdHJpbmdcbiAgaWNvbkNvbG9yPzogc3RyaW5nXG4gIGljb25BbmNob3I/OiBbbnVtYmVyLCBudW1iZXJdXG4gIGljb25SZW5kZXJlcj86IEljb25SZW5kZXJGdW5jXG5cbiAgLy8g5piv5ZCm6IGa5ZCI77yM5LyY5YWI57qn6auY5LqOIHJlbmRlclR5cGUgPT0gcG9pbnRcbiAgaXNDbHVzdGVyPzogYm9vbGVhblxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxuXG4gIGhlYXRPcHRpb25zPzogTWFya2Vyc0hlYXRMYXllck9wdGlvbnNcbiAgY2x1c3Rlck9wdGlvbnM/OiBMLk1hcmtlcnNDbHVzdGVyT3B0aW9uc1xufVxuXG4vKiog6L2s5YyW5Li654Ot5Yqb5Zu+55qEIG9wdGlvbnMgKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2Vyc0hlYXRMYXllck9wdGlvbnMgZXh0ZW5kcyBMLkhlYXRMYXllck9wdGlvbnMge1xuICBkaW1lbnNpb25BdHRyPzogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtlcnNMYXllciB7XG4gIHB1YmxpYyBtYXA6IEwuTWFwXG4gIHB1YmxpYyBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW11cbiAgcHVibGljIG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnNcbiAgcHVibGljIGNoYW5uZWxGdW5jOiBDaGFubmVsRnVuY1xuXG4gIHB1YmxpYyB0eXBlOiBzdHJpbmdcblxuICBwcm90ZWN0ZWQgbWFya2VyczogTWFya2VyW11cblxuICBwcm90ZWN0ZWQgZm9jdXNlZE1hcmtlcjogTWFya2VyXG4gIHByb3RlY3RlZCBob3ZlcmVkTWFya2VyOiBNYXJrZXJcbiAgLyoqIOmcgOimgeWxleekuueahOaUvuWkp+eahOWbvuaghyAqL1xuICBwcm90ZWN0ZWQgZm9jdXNlZERpc3BsYXlNYXJrZXI6IE1hcmtlclxuICBwcm90ZWN0ZWQgbWFya2VyTGF5ZXI6IEwuQ2FudmFzSWNvbkxheWVyXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOlxuICAgIHwgTC5DYW52YXNJY29uTGF5ZXJcbiAgICB8IEwuSGVhdExheWVyXG4gICAgfCBMLk1hcmtlcnNDbHVzdGVyXG4gICAgfCBMLkxheWVyR3JvdXBcbiAgcHJvdGVjdGVkIHpvb21TdGFydENiOiAoKSA9PiB2b2lkXG4gIHByb3RlY3RlZCB6b29tRW5kQ2I6ICgpID0+IHZvaWRcbiAgcHJpdmF0ZSBoZWF0TGF5ZXI6IEwuSGVhdExheWVyXG4gIHByaXZhdGUgY2x1c3RlckxheWVyOiBMLk1hcmtlcnNDbHVzdGVyXG5cbiAgcHJpdmF0ZSBzZWdtZW50ZWRNaW46IG51bWJlclxuICBwcml2YXRlIHNlZ21lbnRlZFN0ZXA6IG51bWJlclxuICBwcml2YXRlIGRlZmF1bHRPcHRpb25zOiBNYXJrZXJzTGF5ZXJPcHRpb25zXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICByZW5kZXJUeXBlOiAncG9pbnQnLFxuICAgICAgcmVuZGVyUG9pbnRDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgaWNvblR5cGU6ICd1bmljb2RlJyxcbiAgICAgIGljb25TaXplOiBbMjAsIDIwXSxcbiAgICAgIGljb25DbGFzczogJ2ljb25mb250JyxcbiAgICAgIGljb25Db2xvcjogJyMzMzg4RkYnLFxuICAgICAgaWNvbkFuY2hvcjogWzEwLCAyMF0sXG4gICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIGlzQ2x1c3RlcjogZmFsc2UsXG4gICAgICBoZWF0T3B0aW9uczoge1xuICAgICAgICBtYXg6IDEsXG4gICAgICAgIG1pbk9wYWNpdHk6IDAuNSxcbiAgICAgIH0sXG4gICAgfVxuICAgIHRoaXMudHlwZSA9ICdtYXJrZXInXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5sYXllciA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBudWxsXG4gICAgdGhpcy5ob3ZlcmVkTWFya2VyID0gbnVsbFxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIgPSBudWxsXG4gICAgdGhpcy5tYXJrZXJzID0gW11cbiAgICB0aGlzLm1hcmtlckxheWVyID0gbnVsbFxuICAgIHRoaXMuaGVhdExheWVyID0gbnVsbFxuICAgIHRoaXMuY2x1c3RlckxheWVyID0gbnVsbFxuXG4gICAgdGhpcy5zZWdtZW50ZWRNaW4gPSBJbmZpbml0eVxuICAgIHRoaXMuc2VnbWVudGVkU3RlcCA9IDFcblxuICAgIHRoaXMuem9vbVN0YXJ0Q2IgPSB0aGlzLl96b29tU3RhcnRDYi5iaW5kKHRoaXMpXG4gICAgdGhpcy56b29tRW5kQ2IgPSB0aGlzLl96b29tRW5kQ2IuYmluZCh0aGlzKVxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBNYXJrZXJzTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRNYXJrZXJzKClcbiAgICB0aGlzLmluaXRFdmVudHMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuXG4gICAgLy8g5LyY5YWI5Yik5patIGlzQ2x1c3RlclxuICAgIGlmICh0aGlzLm9wdGlvbnMuaXNDbHVzdGVyICYmIHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnKSB7XG4gICAgICB0aGlzLmxheWVyID0gdGhpcy5jb25maWdDbHVzdGVyTGF5ZXIoKVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlKSB7XG4gICAgICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ01hcmtlckxheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2NsdXN0ZXInOiB7XG4gICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnQ2x1c3RlckxheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ2hlYXQnOiB7XG4gICAgICAgICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnSGVhdExheWVyKClcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlbmRlclR5cGUg5LiN5pSv5oyBXCIke3RoaXMub3B0aW9ucy5yZW5kZXJUeXBlfVwiYClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgcHVibGljIHNldERhdGEoZGF0YTogRGF0YUxpc3RJdGVtW10pIHtcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YVxuICB9XG4gIHB1YmxpYyBzZXRPcHRpb25zKG9wdGlvbnM6IE1hcmtlcnNMYXllck9wdGlvbnMsIHJlZHJhdyA9IGZhbHNlKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgaWYgKHJlZHJhdykge1xuICAgICAgdGhpcy5yZWRyYXcoKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpLCB7IHBhZGRpbmc6IFsyMCwgMjBdIH0pXG4gIH1cbiAgcHVibGljIGdldEJvdW5kcygpOiBMLkxhdExuZ0JvdW5kc0V4cHJlc3Npb24ge1xuICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tYXJrZXJzLm1hcChcbiAgICAgIChtYXJrZXIpID0+XG4gICAgICAgIFttYXJrZXIuZ2V0TGF0TG5nKCkubGF0LCBtYXJrZXIuZ2V0TGF0TG5nKCkubG5nXSBhcyBbbnVtYmVyLCBudW1iZXJdXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcilcbiAgICB9XG4gICAgdGhpcy5tYXAub2ZmKCd6b29tc3RhcnQnLCB0aGlzLnpvb21TdGFydENiKVxuICAgIHRoaXMubWFwLm9mZignem9vbWVuZCcsIHRoaXMuem9vbUVuZENiKVxuICB9XG4gIHB1YmxpYyB0b2dnbGVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlXG4gICAgaWYgKCF0aGlzLmxheWVyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHZpc2libGUpIHtcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlKClcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25zLmljb25Db2xvciA9IGNvbG9yXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VJY29uKGljb25Vbmljb2RlOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGUgPSBpY29uVW5pY29kZVxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcGl0Y2goaWQ6IHN0cmluZykge1xuICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKChtYXJrZXIpID0+IHtcbiAgICAgIGlmIChtYXJrZXIuZ2V0RGF0YSgpLmlkID09PSBpZCkge1xuICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIsIHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIF96b29tU3RhcnRDYigpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLnR5cGUgPT09ICdtYXJrZXInKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclR5cGUgPT09ICdwb2ludCcgJiYgIXRoaXMub3B0aW9ucy5pc0NsdXN0ZXIpIHtcbiAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXJMYXllcilcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF96b29tRW5kQ2IoKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSAnbWFya2VyJykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJUeXBlID09PSAncG9pbnQnICYmICF0aGlzLm9wdGlvbnMuaXNDbHVzdGVyKSB7XG4gICAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubWFya2VyTGF5ZXIpXG4gICAgfVxuICB9XG4gIC8qKiDmuLLmn5PkuLrmlaPngrnlm74gKi9cbiAgcHJvdGVjdGVkIGNvbmZpZ01hcmtlckxheWVyKCkge1xuICAgIGlmICh0aGlzLm1hcmtlckxheWVyKSB7XG4gICAgICB0aGlzLm1hcmtlckxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIGNvbnN0IGNhbnZhc0ljb25MYXllciA9IEwuY2FudmFzSWNvbkxheWVyKHt9KS5hZGRUbyh0aGlzLm1hcClcbiAgICAvLyDmt7vliqDngrnlh7vkuovku7ZcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkT25DbGlja0xpc3RlbmVyKChfLCBbeyBkYXRhOiBtYXJrZXIgfV0pID0+IHtcbiAgICAgIHRoaXMubWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciBhcyBNYXJrZXIpXG4gICAgfSlcbiAgICAvLyDmt7vliqAgaG92ZXIg5LqL5Lu2XG4gICAgY2FudmFzSWNvbkxheWVyLmFkZE9uSG92ZXJMaXN0ZW5lcigoXywgW3sgZGF0YTogbWFya2VyIH1dKSA9PiB7XG4gICAgICAvLyDkuYvliY3mnIkgaG92ZXIg55qE5YWz6ZetIHRvb2x0aXBcbiAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIpIHtcbiAgICAgICAgdGhpcy5ob3ZlcmVkTWFya2VyLmNsb3NlVG9vbHRpcCgpXG4gICAgICB9XG4gICAgICB0aGlzLmhvdmVyZWRNYXJrZXIgPSBtYXJrZXIgYXMgTWFya2VyXG5cbiAgICAgIGlmICh0aGlzLmhvdmVyZWRNYXJrZXIuZ2V0VG9vbHRpcCgpKSB7XG4gICAgICAgIC8vIOWmguaenOW3sue7j+iuvue9riB0b29sdGlwIOebtOaOpeWxleekuiB0b29sdGlwXG4gICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5vcGVuVG9vbHRpcCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyDlkKbliJnnu5HlrpogdG9vbHRpcCDlubblsZXnpLpcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b29sdGlwQXR0cikge1xuICAgICAgICAgIHRoaXMuaG92ZXJlZE1hcmtlci5iaW5kVG9vbHRpcChcbiAgICAgICAgICAgICcnICsgdGhpcy5ob3ZlcmVkTWFya2VyLmdldERhdGEoKVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBjYW52YXNJY29uTGF5ZXIuYWRkTWFya2Vycyh0aGlzLm1hcmtlcnMpXG5cbiAgICAvLyDop6PlhrPliJ3mrKHmuLLmn5PkuI3lh7rlm77moIfpl67pophcbiAgICB0aGlzLm1hcC5wYW5Ubyh0aGlzLm1hcC5nZXRDZW50ZXIoKSlcblxuICAgIHRoaXMubWFya2VyTGF5ZXIgPSBjYW52YXNJY29uTGF5ZXJcbiAgICByZXR1cm4gdGhpcy5tYXJrZXJMYXllclxuICB9XG4gIHByb3RlY3RlZCBnZXRUb29sVGlwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgfVxuICBwcm90ZWN0ZWQgaW5pdE9wdGlvbnMob3B0aW9uczogTWFya2Vyc0xheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdE1hcmtlcnMoKSB7XG4gICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuICAgIHRoaXMubWFya2VycyA9IFtdXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuXG4gICAgICBjb25zdCBtYXJrZXIgPSBuZXcgTWFya2VyKFxuICAgICAgICBbXG4gICAgICAgICAgKGxheWVyIGFzIEwuTWFya2VyKS5nZXRMYXRMbmcoKS5sYXQsXG4gICAgICAgICAgKGxheWVyIGFzIEwuTWFya2VyKS5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgIF0sXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiB0aGlzLmdldE1hcmtlckljb24oZGF0YSksXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgLy8g5bCG55u45YWz5YC857uR5a6a5YiwIG1hcmtlcuS4ilxuICAgICAgbWFya2VyLnNldERhdGEoZGF0YSlcbiAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcilcbiAgICB9KVxuICB9XG4gIHByb3RlY3RlZCBpbml0RXZlbnRzKCkge1xuICAgIHRoaXMubWFwLm9uKCd6b29tc3RhcnQnLCB0aGlzLnpvb21TdGFydENiKVxuICAgIHRoaXMubWFwLm9uKCd6b29tZW5kJywgdGhpcy56b29tRW5kQ2IpXG4gICAgdGhpcy5tYXAub24oJ2NvbnRleHRtZW51JywgY29uc29sZS5sb2cpXG4gIH1cbiAgLy8g5aSE55CGIG1hcmtlciDngrnlh7vkuovku7ZcbiAgcHJpdmF0ZSBtYXJrZXJDbGlja0hhbmRsZXIobWFya2VyOiBNYXJrZXIsIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRNYXJrZXIgPSBtYXJrZXJcbiAgICAvLyDliKDpmaTliY3kuIDkuKrmlL7lpKflm77moIdcbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlcikge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5yZW1vdmVGcm9tKHRoaXMubWFwKVxuICAgIH1cbiAgICAvLyDnlJ/miJDlvZPliY3mlL7lpKflm77moIdcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyID0gbmV3IE1hcmtlcihtYXJrZXIuZ2V0TGF0TG5nKCksIHtcbiAgICAgIGljb246IHRoaXMuZ2V0TGFyZ2VyTWFya2VySWNvbihtYXJrZXIuZ2V0RGF0YSgpKSxcbiAgICB9KVxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIuYWRkVG8odGhpcy5tYXApXG5cbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5TWFya2VyXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KG1hcmtlci5nZXREYXRhKCkpKVxuICAgICAgLm9wZW5Qb3B1cCgpXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheU1hcmtlci5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlNYXJrZXIucmVtb3ZlKClcbiAgICB9KVxuICAgIG1hcmtlci5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkTWFya2VyLmdldExhdExuZygpKVxuICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhtYXJrZXIuZ2V0TGF0TG5nKCkudG9Cb3VuZHMoMTApKVxuICAgIH1cbiAgICB0aGlzLmNoYW5uZWxGdW5jKCdvbi1jbGljay1tYXJrZXInLCBtYXJrZXIpXG4gIH1cbiAgcHJpdmF0ZSBjb25maWdDbHVzdGVyTGF5ZXIoKSB7XG4gICAgLy8g5bGV56S66IGa5ZCI5Zu+5bGCXG4gICAgaWYgKHRoaXMuY2x1c3RlckxheWVyKSB7XG4gICAgICB0aGlzLmNsdXN0ZXJMYXllci5yZW1vdmUoKVxuICAgIH1cbiAgICB0aGlzLmNsdXN0ZXJMYXllciA9IEwubWFya2VyQ2x1c3Rlckdyb3VwKHtcbiAgICAgIGljb25DcmVhdGVGdW5jdGlvbjogdGhpcy5pY29uQ3JlYXRlRnVuY3Rpb24uYmluZCh0aGlzKSxcbiAgICB9KVxuICAgIHRoaXMuY2x1c3RlckxheWVyLmFkZExheWVycyhcbiAgICAgIHRoaXMubWFya2Vycy5tYXAoKG0pID0+IHtcbiAgICAgICAgY29uc3QgbWFya2VyID0gbmV3IE1hcmtlcihtLmdldExhdExuZygpLCB7XG4gICAgICAgICAgaWNvbjogdGhpcy5nZXRNYXJrZXJJY29uKG0uZ2V0RGF0YSgpKSxcbiAgICAgICAgfSlcbiAgICAgICAgbWFya2VyLnNldERhdGEobS5nZXREYXRhKCkpXG4gICAgICAgIG1hcmtlci5iaW5kVG9vbHRpcCgnJyArIG1hcmtlci5nZXREYXRhKClbdGhpcy5vcHRpb25zLnRvb2x0aXBBdHRyXSlcbiAgICAgICAgbWFya2VyLmJpbmRQb3B1cCh0aGlzLmdldFBvcHVwQ29udGVudChtYXJrZXIuZ2V0RGF0YSgpKSlcbiAgICAgICAgbWFya2VyLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBtYXJrZXJcbiAgICAgIH0pXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmNsdXN0ZXJMYXllclxuICB9XG5cbiAgLyoqIOa4suafk+S4uueDreWKm+WbviAqL1xuICBwcml2YXRlIGNvbmZpZ0hlYXRMYXllcigpIHtcbiAgICBpZiAodGhpcy5oZWF0TGF5ZXIpIHtcbiAgICAgIHRoaXMuaGVhdExheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIGNvbnN0IGFsdHM6IG51bWJlcltdID0gW11cbiAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBjb25zdCBsYXRMbmcgPSBtYXJrZXIuZ2V0TGF0TG5nKClcbiAgICAgIGNvbnN0IGRpbWVuc2lvbkF0dHIgPVxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLmRpbWVuc2lvbkF0dHJcbiAgICAgIGxldCBhbHQgPVxuICAgICAgICAoZGltZW5zaW9uQXR0ciAmJiBtYXJrZXIuZ2V0RGF0YSgpW2RpbWVuc2lvbkF0dHJdKSB8fFxuICAgICAgICB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMubWF4XG4gICAgICBpZiAodHlwZW9mIGFsdCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgYWx0ID0gdGhpcy5vcHRpb25zLmhlYXRPcHRpb25zLm1heFxuICAgICAgfVxuICAgICAgYWx0cy5wdXNoKGFsdClcbiAgICAgIG1hcmtlci5zZXRMYXRMbmcoTC5sYXRMbmcobGF0TG5nLmxhdCwgbGF0TG5nLmxuZywgYWx0KSlcbiAgICB9KVxuICAgIHRoaXMuaGVhdExheWVyID0gTC5oZWF0TGF5ZXIoXG4gICAgICB0aGlzLm1hcmtlcnMubWFwKChpdCwgaW5kZXgpID0+IFtcbiAgICAgICAgaXQuZ2V0TGF0TG5nKCkubGF0LFxuICAgICAgICBpdC5nZXRMYXRMbmcoKS5sbmcsXG4gICAgICAgIGFsdHNbaW5kZXhdLFxuICAgICAgXSksXG4gICAgICAvLyBUT0RPOiDkvb/nlKggbWVyZ2VDb25maWcg566A5YyWXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCB7IG1pbk9wYWNpdHk6IDAuNSB9LCB0aGlzLm9wdGlvbnMuaGVhdE9wdGlvbnMpXG4gICAgKVxuICAgIHJldHVybiB0aGlzLmhlYXRMYXllclxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYXJnZXJNYXJrZXJJY29uKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRNYXJrZXJJY29uKGRhdGEsIHRydWUpXG4gIH1cblxuICBwcml2YXRlIGdldE1hcmtlckljb24oZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldE1hcmtlckljb24oZGF0YSwgZmFsc2UpXG4gIH1cblxuICAvKiog6I635Y+W5b2T5YmNIG1hcmtlciDpnIDopoHlsZXnpLrnmoQgaWNvbiAqL1xuICBwcml2YXRlIF9nZXRNYXJrZXJJY29uKFxuICAgIGRhdGE6IERhdGFMaXN0SXRlbSxcbiAgICBpc0xhcmdlcjogYm9vbGVhblxuICApOiBMLkljb24gfCBMLkRpdkljb24ge1xuICAgIGNvbnN0IGljb25TaXplID0gdGhpcy5vcHRpb25zLmljb25TaXplXG4gICAgY29uc3QgaWNvbkFuY2hvciA9IHRoaXMub3B0aW9ucy5pY29uQW5jaG9yXG4gICAgY29uc3QgbGFyZ2VySWNvblNpemUgPSBbaWNvblNpemVbMF0gKiAxLjUsIGljb25TaXplWzFdICogMS41XSBhcyBbXG4gICAgICBudW1iZXIsXG4gICAgICBudW1iZXJcbiAgICBdXG4gICAgY29uc3QgbGFyZ2VySWNvbkFuY2hvciA9IFtpY29uQW5jaG9yWzBdICogMS41LCBpY29uQW5jaG9yWzFdICogMS41XSBhcyBbXG4gICAgICBudW1iZXIsXG4gICAgICBudW1iZXJcbiAgICBdXG5cbiAgICBjb25zdCBpY29uQ29sb3IgPSB0aGlzLm9wdGlvbnMuaWNvbkNvbG9yXG5cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgY2FzZSAnaW1hZ2UnOiB7XG4gICAgICAgIC8vIHJldHVybiBMLmljb24oe1xuICAgICAgICAvLyAgIGljb25Vcmw6IHRoaXMub3B0aW9ucy5pY29uSW1hZ2VVcmwsXG4gICAgICAgIC8vICAgaWNvblNpemU6IGlzTGFyZ2VyID8gbGFyZ2VySWNvblNpemUgOiBpY29uU2l6ZSxcbiAgICAgICAgLy8gICBpY29uQW5jaG9yLFxuICAgICAgICAvLyB9KVxuICAgICAgfVxuICAgICAgY2FzZSAnZm9udF9jbGFzcyc6XG4gICAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgY2FzZSAndW5pY29kZSc6IHtcbiAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgaHRtbDogdGhpcy5nZXRDdXN0b21JY29uSFRNTChkYXRhLCB7XG4gICAgICAgICAgICBpY29uU2l6ZTogaXNMYXJnZXIgPyBsYXJnZXJJY29uU2l6ZSA6IGljb25TaXplLFxuICAgICAgICAgICAgaWNvbkNvbG9yLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNsYXNzTmFtZTogaXNMYXJnZXIgPyAnbGFyZ2UtZGl2LWljb24tbWFya2VyJyA6ICcnLFxuICAgICAgICAgIGljb25TaXplOiBpc0xhcmdlciA/IGxhcmdlckljb25TaXplIDogaWNvblNpemUsXG4gICAgICAgICAgaWNvbkFuY2hvcjogaXNMYXJnZXIgPyBsYXJnZXJJY29uQW5jaG9yIDogaWNvbkFuY2hvcixcbiAgICAgICAgICB0b29sdGlwQW5jaG9yOiBpc0xhcmdlclxuICAgICAgICAgICAgPyBbMCwgLWxhcmdlckljb25BbmNob3JbMV0gLyAyXVxuICAgICAgICAgICAgOiBbMCwgLWljb25BbmNob3JbMV0gLyAyXSxcbiAgICAgICAgICBwb3B1cEFuY2hvcjogaXNMYXJnZXJcbiAgICAgICAgICAgID8gWzAsIC1sYXJnZXJJY29uQW5jaG9yWzFdIC8gMl1cbiAgICAgICAgICAgIDogWzAsIC1pY29uQW5jaG9yWzFdIC8gMl0sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgcmVuZGVyVHlwZSDkuI3og73kuLogJHt0aGlzLm9wdGlvbnMuaWNvblR5cGV9YClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBnZXRDdXN0b21JY29uSFRNTChcbiAgICBkYXRhOiBEYXRhTGlzdEl0ZW0sXG4gICAgb3B0aW9ucz86IEljb25SZW5kZXJGdW5jT3B0aW9uXG4gICk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5pY29uUmVuZGVyZXIpIHtcbiAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmljb25SZW5kZXJlcihkYXRhLCBvcHRpb25zKVxuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5yZW5kZXJQb2ludENvbG9yVHlwZSkge1xuICAgICAgY2FzZSAnc2luZ2xlJzoge1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9ucy5pY29uVHlwZSkge1xuICAgICAgICAgIC8vIOS9v+eUqCBjbGFzc1xuICAgICAgICAgIGNhc2UgJ2ZvbnRfY2xhc3MnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aSBjbGFzcz1cIiR7dGhpcy5vcHRpb25zLmljb25DbGFzc31cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHtvcHRpb25zLmljb25Db2xvcn07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS9v+eUqCBzdmdcbiAgICAgICAgICBjYXNlICdzeW1ib2wnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbi1zeW1ib2xcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMub3B0aW9ucy5pY29uU3ltYm9sfVwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkvb/nlKggdW5pY29kZVxuICAgICAgICAgIGNhc2UgJ3VuaWNvZGUnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke29wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtvcHRpb25zLmljb25TaXplWzBdfXB4O1xuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5vcHRpb25zLmljb25Vbmljb2RlfVxuICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdzZWdtZW50ZWQnOiB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5vcHRpb25zLmljb25UeXBlKSB7XG4gICAgICAgICAgLy8g5L2/55SoIGNsYXNzXG4gICAgICAgICAgY2FzZSAnZm9udF9jbGFzcyc6IHtcbiAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3M9XCIke3RoaXMub3B0aW9ucy5pY29uQ2xhc3N9XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7dGhpcy5nZXRTZWdtZW50ZWRNYXJrZXJDb2xvcihkYXRhKX07XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7b3B0aW9ucy5pY29uU2l6ZVswXX1weDtcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIOS9v+eUqCBzdmdcbiAgICAgICAgICBjYXNlICdzeW1ib2wnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvbi1zeW1ib2xcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMub3B0aW9ucy5pY29uU3ltYm9sfVwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyDkvb/nlKggdW5pY29kZVxuICAgICAgICAgIGNhc2UgJ3VuaWNvZGUnOiB7XG4gICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiJHt0aGlzLm9wdGlvbnMuaWNvbkNsYXNzfVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAke3RoaXMuZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YSl9O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke29wdGlvbnMuaWNvblNpemVbMF19cHg7XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnMuaWNvblVuaWNvZGV9XG4gICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGByZW5kZXJQb2ludENvbG9yVHlwZSDkuI3mlK/mjIFcIiR7dGhpcy5vcHRpb25zLnJlbmRlclBvaW50Q29sb3JUeXBlfVwiYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0U2VnbWVudGVkTWFya2VyQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByaXZhdGUgZ2V0UG9wdXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWBcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke1xuICAgICAgICBkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICB9YFxuICAgIH1cbiAgfVxuICBwcml2YXRlIGljb25DcmVhdGVGdW5jdGlvbihjbHVzdGVyOiBMLk1hcmtlcnNDbHVzdGVyKSB7XG4gICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICBodG1sOiBgXG4gICAgICAgPGRpdlxuICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVuKHRoaXMub3B0aW9ucy5pY29uQ29sb3IpfTtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPVwiXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLm9wdGlvbnMuaWNvbkNvbG9yfTtcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA5cHg7XG4gICAgICAgICAgICBcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT1cIlxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICAgIGxlZnQ6IDlweDtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICR7Y2x1c3Rlci5nZXRDaGlsZENvdW50KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgIDwvZGl2PlxuICAgICAgYCxcbiAgICAgIGljb25TaXplOiBbNDAsIDQwXSxcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgUG9seWdvbiBmcm9tICcuL1BvbHlnb24nXG5pbXBvcnQgUG9seWdvbnNMYXllciwgeyBQb2x5Z29uTGF5ZXJPcHRpb25zIH0gZnJvbSAnLi9Qb2x5Z29uc0xheWVyJ1xuaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkc0xheWVyIGV4dGVuZHMgUG9seWdvbnNMYXllciB7XG4gIHByaXZhdGUgcHJvcE1heExlbmd0aDogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1hcDogTC5NYXAsXG4gICAgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdLFxuICAgIG9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIHN1cGVyKG1hcCwgZGF0YUxpc3QsIG9wdGlvbnMsIGNoYW5uZWxGdW5jKVxuICAgIHRoaXMucHJvcE1heExlbmd0aCA9IC0xXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ0dyaWRMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICAvLyB0b29sdGlwIOacieWPr+iDvemcgOimgeebtOaOpeWxleekuu+8jOmcgOimgeWcqCBwb2x5Z29uIOa3u+WKoOWIsOWcsOWbvuS4iuS5i+WQjuaJjeWPr+S7pe+8jOaJgOS7pemcgOimgeW7tui/n+iuvue9rlxuICAgIHRoaXMuY29uZmlnVG9vbHRpcCgpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnpvb21IYW5kbGVyKClcbiAgICB9LCAyMDApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgdG9nZ2xlVG9vbHRpcCh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICBpZiAocG9seWdvbi5nZXRUb29sdGlwKCkpIHtcbiAgICAgICAgcG9seWdvbi5nZXRUb29sdGlwKCkuc2V0T3BhY2l0eSh2aXNpYmxlID8gMSA6IDApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBwcm90ZWN0ZWQgaW5pdEV2ZW50KCkge1xuICAgIHRoaXMubWFwLm9uKCd6b29tJywgdGhpcy56b29tSGFuZGxlci5iaW5kKHRoaXMpKVxuICB9XG4gIHByaXZhdGUgY29uZmlnVG9vbHRpcCgpIHtcbiAgICB0aGlzLnByb3BNYXhMZW5ndGggPSB0aGlzLmdldFByb3BNYXhMZW5ndGgoKVxuICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgICBwb2x5Z29uLmJpbmRUb29sdGlwKHRoaXMuZ2V0VG9vbFRpcENvbnRlbnQocG9seWdvbi5nZXREYXRhKCkpLCB7XG4gICAgICAgICAgcGVybWFuZW50OiB0cnVlLFxuICAgICAgICAgIGRpcmVjdGlvbjogJ2NlbnRlcicsXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGNvbmZpZ0dyaWRMYXllcigpIHtcbiAgICB0aGlzLnBvbHlnb25MYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5Z29ucyA9IHRoaXMucG9seWdvbnMubWFwKChwb2x5Z29uKSA9PiB7XG4gICAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVuZGVyUG9seWdvbkNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlnb25Db2xvcihwb2x5Z29uLmdldERhdGEoKSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9wdGlvbnM6IEwuUG9seWxpbmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yLFxuICAgICAgfSlcbiAgICAgIC8vIOmHjeaWsOW6lOeUqCBvcHRpb25zXG4gICAgICBjb25zdCBuZXdQb2x5Z29uID0gbmV3IFBvbHlnb24ocG9seWdvbi5nZXRMYXRMbmdzKCksIG9wdGlvbnMpXG4gICAgICBuZXdQb2x5Z29uLnNldERhdGEocG9seWdvbi5nZXREYXRhKCkpXG4gICAgICBuZXdQb2x5Z29uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24pXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWdvbi5iaW5kUG9wdXAodGhpcy5nZXRQb3B1cENvbnRlbnQobmV3UG9seWdvbi5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1BvbHlnb25cbiAgICB9KVxuICAgIHRoaXMucG9seWdvbnMuZm9yRWFjaCgocG9seWdvbikgPT4ge1xuICAgICAgdGhpcy5wb2x5Z29uTGF5ZXIuYWRkTGF5ZXIocG9seWdvbilcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnBvbHlnb25MYXllclxuICB9XG4gIHByaXZhdGUgem9vbUhhbmRsZXIoKSB7XG4gICAgY29uc3QgcG9seWdvbiA9IHRoaXMucG9seWdvbnNbMF1cbiAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVRvb2x0aXAoXG4gICAgICB0aGlzLmdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb24pID5cbiAgICAgICAgdGhpcy5nZXRUb29sdGlwTWF4V2lkdGgodGhpcy5wcm9wTWF4TGVuZ3RoKVxuICAgIClcbiAgfVxuICBwcml2YXRlIGdldFJlY3RhbmdsZVdpZHRoKHBvbHlnb246IFBvbHlnb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0Tm9ydGhFYXN0KCkpLnggLVxuICAgICAgdGhpcy5tYXAubGF0TG5nVG9MYXllclBvaW50KHBvbHlnb24uZ2V0Qm91bmRzKCkuZ2V0U291dGhXZXN0KCkpLnhcbiAgICApXG4gIH1cbiAgcHJpdmF0ZSBnZXRUb29sdGlwTWF4V2lkdGgodGV4dExlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRleHRMZW5ndGggKiAxMiArIDE0XG4gIH1cbiAgcHJpdmF0ZSBnZXRQcm9wTWF4TGVuZ3RoKCkge1xuICAgIGNvbnN0IHByb3AgPVxuICAgICAgdHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnBvcHVwQXR0clxuICAgICAgICA6IHRoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVcbiAgICByZXR1cm4gdGhpcy5wb2x5Z29uc1xuICAgICAgLm1hcCgocG9seWdvbikgPT4gYCR7cG9seWdvbi5nZXREYXRhKClbcHJvcF19YC5sZW5ndGgpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChwcmV2LCBjdXJyKVxuICAgICAgfSwgMClcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24gZXh0ZW5kcyBMLlBvbHlnb24ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKFxuICAgIGxhdGxuZ3M6XG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdXG4gICAgICB8IEwuTGF0TG5nRXhwcmVzc2lvbltdW11cbiAgICAgIHwgTC5MYXRMbmdFeHByZXNzaW9uW11bXVtdLFxuICAgIG9wdGlvbnM/OiBMLlBvbHlsaW5lT3B0aW9uc1xuICApIHtcbiAgICBzdXBlcihsYXRsbmdzLCBvcHRpb25zKVxuICB9XG4gIHB1YmxpYyBzZXREYXRhKGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIHRoaXMuX19kYXRhID0gZGF0YVxuICB9XG4gIHB1YmxpYyBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YVxuICB9XG59XG4iLCJpbXBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfSBmcm9tICcuLi91dGlscy9pbmRleCdcbmltcG9ydCB7IERhdGFMaXN0SXRlbSwgQ2hhbm5lbEZ1bmMgfSBmcm9tICcuLi9kZWZpbml0aW9ucydcbmltcG9ydCBQb2x5Z29uIGZyb20gJy4vUG9seWdvbidcblxuLyoqIOa4suafk+minOiJsuagt+W8jyDljZXoibJ85YiG5q61ICovXG50eXBlIFBvbHlnb25MYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbnR5cGUgQ29sb3JNb2RlID0gJ2RhcmtlbicgfCAnbGlnaHRlbicgfCAnbm9ybWFsJ1xuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5Z29uQ29sb3JUeXBlOiBQb2x5Z29uTGF5ZXJSZW5kZXJDb2xvclR5cGVcblxuICAvKiogcG9wdXAg5bGV56S65a2X5q61ICovXG4gIHBvcHVwQXR0cj86IHN0cmluZyB8IHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IGFueSB9XG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb25zTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOiBMLkxheWVyR3JvdXBcblxuICBwcm90ZWN0ZWQgbWFwOiBMLk1hcFxuICBwcm90ZWN0ZWQgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zXG4gIHByb3RlY3RlZCBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgcHJvdGVjdGVkIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJvdGVjdGVkIHBvbHlnb25zOiBQb2x5Z29uW11cbiAgcHJvdGVjdGVkIGZvY3VzZWRQb2x5Z29uOiBQb2x5Z29uXG4gIHByb3RlY3RlZCBmb2N1c2VkRGlzcGxheVBvbHlnb246IFBvbHlnb25cbiAgcHJvdGVjdGVkIHBvbHlnb25MYXllcjogTC5MYXllckdyb3VwXG5cbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWdvbkxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBvbHlnb25MYXllck9wdGlvbnMgPSB7XG4gICAgICBwb3B1cEF0dHI6IHsgbGFiZWw6ICflkI3np7AnLCB2YWx1ZTogJ25hbWUnIH0sXG4gICAgICB0b29sdGlwQXR0cjogJ25hbWUnLFxuICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIGZpbGw6IHRydWUsXG4gICAgICBmaWxsQ29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIHdlaWdodDogMSxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBmaWxsT3BhY2l0eTogMC41LFxuICAgICAgcmVuZGVyUG9seWdvbkNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncG9seWdvbidcbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhTGlzdFxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMgPSBjaGFubmVsRnVuY1xuXG4gICAgdGhpcy52aXNpYmxlID0gdHJ1ZVxuICAgIHRoaXMucG9seWdvbnMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5mb2N1c2VkUG9seWdvbiA9IG51bGxcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbiA9IG51bGxcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWdvbkxheWVyT3B0aW9ucykge1xuICAgIHRoaXMuaW5pdE9wdGlvbnMob3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5Z29ucygpXG4gICAgdGhpcy5pbml0RXZlbnQoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlnb25MYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWdvbnMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5Z29ucy5yZWR1Y2UoXG4gICAgICAocHJldiwgY3VycikgPT4gcHJldi5leHRlbmQoY3Vyci5nZXRCb3VuZHMoKSksXG4gICAgICB0aGlzLnBvbHlnb25zWzBdLmdldEJvdW5kcygpXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgICBpZiAodGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24pIHtcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgdG9nZ2xlVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZVxuICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKVxuICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcilcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuZmlsbENvbG9yID0gY29sb3JcbiAgICB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHBpdGNoKGlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBvbHlnb25zLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICAgIGlmIChwb2x5Z29uLmdldERhdGEoKS5pZCA9PT0gaWQpIHtcbiAgICAgICAgdGhpcy5wb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb24sIHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRFdmVudCgpIHt9XG4gIHByb3RlY3RlZCBnZXRUb29sVGlwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICByZXR1cm4gJycgKyBkYXRhW3RoaXMub3B0aW9ucy50b29sdGlwQXR0cl1cbiAgfVxuICBwcm90ZWN0ZWQgZ2V0UG9wdXBDb250ZW50KGRhdGE6IERhdGFMaXN0SXRlbSkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLnBvcHVwQXR0cikge1xuICAgICAgcmV0dXJuICcnXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyfTogJHtkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHJdfWBcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMucG9wdXBBdHRyID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGAke3RoaXMub3B0aW9ucy5wb3B1cEF0dHIubGFiZWx9OiAke1xuICAgICAgICBkYXRhW3RoaXMub3B0aW9ucy5wb3B1cEF0dHIudmFsdWVdXG4gICAgICB9YFxuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByb3RlY3RlZCBnZXRTZWdtZW50ZWRQb2x5Z29uQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByb3RlY3RlZCBwb2x5Z29uQ2xpY2tIYW5kbGVyKHBvbHlnb246IFBvbHlnb24sIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRQb2x5Z29uID0gcG9seWdvblxuICAgIC8vIOWIoOmZpOWJjeS4gOS4qiBmb2N1c1xuICAgIGlmICh0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbikge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ucmVtb3ZlKClcbiAgICB9XG4gICAgLy8g55Sf5oiQ5b2T5YmNIGZvY3VzXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwge1xuICAgICAgY29sb3I6ICcjMzM4OEZGJyxcbiAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgfSlcbiAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5hZGRUbyh0aGlzLm1hcClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5Z29uXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgIC5vcGVuUG9wdXAoKVxuXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24ub24oJ3BvcHVwY2xvc2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWdvbi5yZW1vdmUoKVxuICAgIH0pXG4gICAgcG9seWdvbi5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkRGlzcGxheVBvbHlnb24uZ2V0Q2VudGVyKCkpXG4gICAgaWYgKGZpdEJvdW5kcykge1xuICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKHBvbHlnb24uZ2V0Qm91bmRzKCkpXG4gICAgfVxuICAgIHRoaXMuY2hhbm5lbEZ1bmMoJ29uLWNsaWNrLXBvbHlnb24nLCBwb2x5Z29uKVxuICB9XG4gIHByb3RlY3RlZCBpbml0T3B0aW9ucyhvcHRpb25zOiBQb2x5Z29uTGF5ZXJPcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRQb2x5Z29ucygpIHtcbiAgICAvLyDnvJPlrZggc2VnbWVudCDnm7jlhbPmlbDmja5cbiAgICB0aGlzLmNhY2hlU2VnbWVudFBhcmFtcygpXG4gICAgdGhpcy5wb2x5Z29ucyA9IFtdXG4gICAgdGhpcy5kYXRhTGlzdC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IEwuZ2VvSlNPTihkYXRhLmdlb21ldHJ5KS5nZXRMYXllcnMoKVswXVxuICAgICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uKChsYXllciBhcyBMLlBvbHlnb24pLmdldExhdExuZ3MoKSlcblxuICAgICAgcG9seWdvbi5zZXREYXRhKGRhdGEpXG4gICAgICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbilcbiAgICB9KVxuICB9XG4gIHByaXZhdGUgY29uZmlnUG9seWdvbkxheWVyKCkge1xuICAgIHRoaXMucG9seWdvbkxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlnb25zID0gdGhpcy5wb2x5Z29ucy5tYXAoKHBvbHlnb24pID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IEwuUG9seWxpbmVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCB7XG4gICAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5Z29uLmdldERhdGEoKSksXG4gICAgICB9KVxuICAgICAgLy8g6YeN5paw5bqU55SoIG9wdGlvbnNcbiAgICAgIGNvbnN0IG5ld1BvbHlnb24gPSBuZXcgUG9seWdvbihwb2x5Z29uLmdldExhdExuZ3MoKSwgb3B0aW9ucylcbiAgICAgIG5ld1BvbHlnb24uc2V0RGF0YShwb2x5Z29uLmdldERhdGEoKSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWdvbi5iaW5kVG9vbHRpcCh0aGlzLmdldFRvb2xUaXBDb250ZW50KG5ld1BvbHlnb24uZ2V0RGF0YSgpKSlcbiAgICAgIH1cbiAgICAgIG5ld1BvbHlnb24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvbHlnb25DbGlja0hhbmRsZXIocG9seWdvbilcbiAgICAgIH0pXG4gICAgICByZXR1cm4gbmV3UG9seWdvblxuICAgIH0pXG4gICAgdGhpcy5wb2x5Z29ucy5mb3JFYWNoKChwb2x5Z29uKSA9PiB7XG4gICAgICB0aGlzLnBvbHlnb25MYXllci5hZGRMYXllcihwb2x5Z29uKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWdvbkxheWVyXG4gIH1cbiAgcHJpdmF0ZSBnZXRDb2xvcihkYXRhOiBEYXRhTGlzdEl0ZW0sIG1vZGU/OiBDb2xvck1vZGUpIHtcbiAgICBsZXQgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3JcbiAgICBpZiAodGhpcy5vcHRpb25zLnJlbmRlclBvbHlnb25Db2xvclR5cGUgPT09ICdzZWdtZW50ZWQnKSB7XG4gICAgICBjb2xvciA9IHRoaXMuZ2V0U2VnbWVudGVkUG9seWdvbkNvbG9yKGRhdGEpXG4gICAgfVxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgcmV0dXJuIGRhcmtlbihjb2xvcilcbiAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICByZXR1cm4gbGlnaHRlbihjb2xvcilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb2xvclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5cbmV4cG9ydCB0eXBlIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiA9XG4gIHwgTC5MYXRMbmdFeHByZXNzaW9uW11cbiAgfCBMLkxhdExuZ0V4cHJlc3Npb25bXVtdXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2x5bGluZSBleHRlbmRzIEwuUG9seWxpbmUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF9fZGF0YTogRGF0YUxpc3RJdGVtXG4gIGNvbnN0cnVjdG9yKGxhdGxuZ3M6IFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvbiwgb3B0aW9ucz86IEwuUG9seWxpbmVPcHRpb25zKSB7XG4gICAgc3VwZXIobGF0bG5ncywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgc2V0RGF0YShkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICB0aGlzLl9fZGF0YSA9IGRhdGFcbiAgfVxuICBwdWJsaWMgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGF0YUxpc3RJdGVtLCBDaGFubmVsRnVuYyB9IGZyb20gJy4uL2RlZmluaXRpb25zJ1xuaW1wb3J0IFBvbHlsaW5lc0xheWVyIGZyb20gJy4vUG9seWxpbmVzTGF5ZXInXG5cbi8qKiDmuLLmn5PpopzoibLmoLflvI8g5Y2V6ImyfOWIhuautSAqL1xudHlwZSBQb2x5bGluZUxheWVyUmVuZGVyQ29sb3JUeXBlID0gJ3NpbmdsZScgfCAnc2VnbWVudGVkJ1xuaW50ZXJmYWNlIFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Db3JyaWRvck9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nXG4gIC8qKiB0b29sdGlwIOWxleekuuWtl+autSAqL1xuICB0b29sdGlwQXR0cj86IHN0cmluZ1xuXG4gIG9wYWNpdHk/OiBudW1iZXJcblxuICAvKiog5YiG5q615riy5p+T57uf6K6h5a2X5q61ICovXG4gIHNlZ21lbnRlZEF0dHI/OiBzdHJpbmdcbiAgc2VnbWVudGVkQ29sb3JzPzogc3RyaW5nW11cbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlsaW5lc0J1ZmZlckxheWVyIGV4dGVuZHMgUG9seWxpbmVzTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9uc1xuICBjb25zdHJ1Y3RvcihcbiAgICBtYXA6IEwuTWFwLFxuICAgIGRhdGFMaXN0OiBEYXRhTGlzdEl0ZW1bXSxcbiAgICBvcHRpb25zOiBQb2x5bGluZUJ1ZmZlckxheWVyT3B0aW9ucyxcbiAgICBjaGFubmVsRnVuYzogQ2hhbm5lbEZ1bmNcbiAgKSB7XG4gICAgc3VwZXIobWFwLCBkYXRhTGlzdCwgb3B0aW9ucywgY2hhbm5lbEZ1bmMpXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zID0ge1xuICAgICAgcmVuZGVyUG9seWxpbmVDb2xvclR5cGU6ICdzaW5nbGUnLFxuICAgICAgc2VnbWVudGVkQ29sb3JzOiBbJyMzMzg4RkYnXSxcbiAgICAgIGNvcnJpZG9yOiAxMDAsXG4gICAgICBjb2xvcjogJyMzMzg4RkYnLFxuICAgICAgb3BhY2l0eTogMC41LFxuICAgIH1cbiAgICB0aGlzLnR5cGUgPSAncG9seWxpbmVCdWZmZXInXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLmRhdGFMaXN0ID0gZGF0YUxpc3RcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgLy8gdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgfVxuICBwdWJsaWMgZHJhdyhvcHRpb25zPzogUG9seWxpbmVCdWZmZXJMYXllck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLmluaXRQb2x5bGluZXMoKVxuICAgIHJldHVybiB0aGlzLnJlZHJhdygpXG4gIH1cbiAgcHVibGljIHJlZHJhdygpIHtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLmxheWVyLnJlbW92ZSgpXG4gICAgfVxuICAgIHRoaXMubGF5ZXIgPSB0aGlzLmNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKVxuICAgIHRoaXMubWFwLmFkZExheWVyKHRoaXMubGF5ZXIpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBwdWJsaWMgZml0Qm91bmRzKCkge1xuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0aGlzLmdldEJvdW5kcygpKVxuICB9XG4gIHB1YmxpYyBnZXRCb3VuZHMoKTogTC5MYXRMbmdCb3VuZHNFeHByZXNzaW9uIHtcbiAgICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm1hcC5nZXRCb3VuZHMoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb2x5bGluZXMucmVkdWNlKFxuICAgICAgKHByZXYsIGN1cnIpID0+IHByZXYuZXh0ZW5kKGN1cnIuZ2V0Qm91bmRzKCkpLFxuICAgICAgdGhpcy5wb2x5bGluZXNbMF0uZ2V0Qm91bmRzKClcbiAgICApXG4gIH1cbiAgcHVibGljIGNoYW5nZUNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICB0aGlzLm9wdGlvbnMuY29sb3IgPSBjb2xvclxuICAgIHRoaXMucmVkcmF3KClcbiAgfVxuICBwcml2YXRlIGNvbmZpZ1BvbHlsaW5lQnVmZmVyTGF5ZXIoKSB7XG4gICAgdGhpcy5wb2x5bGluZUxheWVyID0gTC5sYXllckdyb3VwKClcbiAgICB0aGlzLnBvbHlsaW5lcy5mb3JFYWNoKChwb2x5bGluZSkgPT4ge1xuICAgICAgcG9seWxpbmUub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnBvbHlsaW5lQ2xpY2tIYW5kbGVyKHBvbHlsaW5lKVxuICAgICAgfSlcbiAgICAgIGNvbnN0IG9wdGlvbnM6IFBvbHlsaW5lQnVmZmVyTGF5ZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnJlbmRlclBvbHlsaW5lQ29sb3JUeXBlID09PSAnc2luZ2xlJ1xuICAgICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgICAgICAgICA6IHRoaXMuZ2V0U2VnbWVudGVkUG9seWxpbmVDb2xvcihwb2x5bGluZS5nZXREYXRhKCkpLFxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGNvbnN0IHBvbHlsaW5lQnVmZmVyID0gTC5jb3JyaWRvcihcbiAgICAgICAgKHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBMLkxhdExuZ1tdKS5tYXAoKGxhdExuZykgPT5cbiAgICAgICAgICBMLmxhdExuZyhbbGF0TG5nLmxhdCwgbGF0TG5nLmxuZ10pXG4gICAgICAgICksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgcG9seWxpbmVCdWZmZXIuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChwb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKHBvbHlsaW5lQnVmZmVyKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBEYXRhTGlzdEl0ZW0sIENoYW5uZWxGdW5jIH0gZnJvbSAnLi4vZGVmaW5pdGlvbnMnXG5pbXBvcnQgUG9seWxpbmUsIHsgUG9seWxpbmVMYXRMbmdFeHByZXNzaW9uIH0gZnJvbSAnLi9Qb2x5bGluZSdcbmltcG9ydCB7IGRhcmtlbiwgbGlnaHRlbiB9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xuXG4vKiog5riy5p+T6aKc6Imy5qC35byPIOWNleiJsnzliIbmrrUgKi9cbnR5cGUgUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZSA9ICdzaW5nbGUnIHwgJ3NlZ21lbnRlZCdcbnR5cGUgQ29sb3JNb2RlID0gJ2RhcmtlbicgfCAnbGlnaHRlbicgfCAnbm9ybWFsJ1xuaW50ZXJmYWNlIFBvbHlsaW5lTGF5ZXJPcHRpb25zIGV4dGVuZHMgTC5Qb2x5bGluZU9wdGlvbnMge1xuICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogUG9seWxpbmVMYXllclJlbmRlckNvbG9yVHlwZVxuXG4gIC8qKiBwb3B1cCDlsZXnpLrlrZfmrrUgKi9cbiAgcG9wdXBBdHRyPzogc3RyaW5nIHwgeyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogYW55IH1cbiAgLyoqIHRvb2x0aXAg5bGV56S65a2X5q61ICovXG4gIHRvb2x0aXBBdHRyPzogc3RyaW5nXG5cbiAgb3BhY2l0eT86IG51bWJlclxuXG4gIC8qKiDliIbmrrXmuLLmn5Pnu5/orqHlrZfmrrUgKi9cbiAgc2VnbWVudGVkQXR0cj86IHN0cmluZ1xuICBzZWdtZW50ZWRDb2xvcnM/OiBzdHJpbmdbXVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWxpbmVzTGF5ZXIge1xuICBwdWJsaWMgdHlwZTogc3RyaW5nXG5cbiAgcHJvdGVjdGVkIHZpc2libGU6IGJvb2xlYW5cbiAgcHJvdGVjdGVkIGxheWVyOiBMLkxheWVyR3JvdXBcblxuICBwcm90ZWN0ZWQgbWFwOiBMLk1hcFxuICBwcm90ZWN0ZWQgZGF0YUxpc3Q6IERhdGFMaXN0SXRlbVtdXG4gIHByb3RlY3RlZCBvcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9uc1xuICBwcm90ZWN0ZWQgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gIHByb3RlY3RlZCBwb2x5bGluZXM6IFBvbHlsaW5lW11cbiAgcHJvdGVjdGVkIHNlZ21lbnRlZE1pbjogbnVtYmVyXG4gIHByb3RlY3RlZCBzZWdtZW50ZWRTdGVwOiBudW1iZXJcbiAgcHJvdGVjdGVkIGZvY3VzZWRQb2x5bGluZTogUG9seWxpbmVcbiAgcHJvdGVjdGVkIGZvY3VzZWREaXNwbGF5UG9seWxpbmU6IFBvbHlsaW5lXG4gIHByb3RlY3RlZCBwb2x5bGluZUxheWVyOiBMLkxheWVyR3JvdXBcbiAgY29uc3RydWN0b3IoXG4gICAgbWFwOiBMLk1hcCxcbiAgICBkYXRhTGlzdDogRGF0YUxpc3RJdGVtW10sXG4gICAgb3B0aW9uczogUG9seWxpbmVMYXllck9wdGlvbnMsXG4gICAgY2hhbm5lbEZ1bmM6IENoYW5uZWxGdW5jXG4gICkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBQb2x5bGluZUxheWVyT3B0aW9ucyA9IHtcbiAgICAgIGNvbG9yOiAnIzMzODhGRicsXG4gICAgICByZW5kZXJQb2x5bGluZUNvbG9yVHlwZTogJ3NpbmdsZScsXG4gICAgICBzZWdtZW50ZWRDb2xvcnM6IFsnIzMzODhGRiddLFxuICAgICAgcG9wdXBBdHRyOiB7IGxhYmVsOiAn5ZCN56ewJywgdmFsdWU6ICduYW1lJyB9LFxuICAgICAgdG9vbHRpcEF0dHI6ICduYW1lJyxcbiAgICB9XG4gICAgdGhpcy50eXBlID0gJ3BvbHlsaW5lJ1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy5kYXRhTGlzdCA9IGRhdGFMaXN0XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG4gICAgdGhpcy5jaGFubmVsRnVuYyA9IGNoYW5uZWxGdW5jXG5cbiAgICB0aGlzLnZpc2libGUgPSB0cnVlXG4gICAgdGhpcy5wb2x5bGluZXMgPSBbXVxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gSW5maW5pdHlcbiAgICB0aGlzLnNlZ21lbnRlZFN0ZXAgPSAxXG4gICAgdGhpcy5mb2N1c2VkUG9seWxpbmUgPSBudWxsXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lID0gbnVsbFxuICB9XG4gIHB1YmxpYyBkcmF3KG9wdGlvbnM/OiBQb2x5bGluZUxheWVyT3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuaW5pdFBvbHlsaW5lcygpXG4gICAgcmV0dXJuIHRoaXMucmVkcmF3KClcbiAgfVxuICBwdWJsaWMgcmVkcmF3KCkge1xuICAgIGlmICghdGhpcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXIpIHtcbiAgICAgIHRoaXMubGF5ZXIucmVtb3ZlKClcbiAgICB9XG4gICAgdGhpcy5sYXllciA9IHRoaXMuY29uZmlnUG9seWxpbmVMYXllcigpXG4gICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcilcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIHB1YmxpYyBmaXRCb3VuZHMoKSB7XG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKHRoaXMuZ2V0Qm91bmRzKCksIHsgcGFkZGluZzogWzIwLCAyMF0gfSlcbiAgfVxuICBwdWJsaWMgZ2V0Qm91bmRzKCk6IEwuTGF0TG5nQm91bmRzRXhwcmVzc2lvbiB7XG4gICAgaWYgKHRoaXMucG9seWxpbmVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0Qm91bmRzKClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVzLnJlZHVjZShcbiAgICAgIChwcmV2LCBjdXJyKSA9PiBwcmV2LmV4dGVuZChjdXJyLmdldEJvdW5kcygpKSxcbiAgICAgIHRoaXMucG9seWxpbmVzWzBdLmdldEJvdW5kcygpXG4gICAgKVxuICB9XG4gIHB1YmxpYyBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmxheWVyKSB7XG4gICAgICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyKVxuICAgIH1cbiAgfVxuICBwdWJsaWMgdG9nZ2xlVmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZVxuICAgIGlmICghdGhpcy5sYXllcikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvY3VzZWREaXNwbGF5UG9seWxpbmUucmVtb3ZlKClcbiAgICAgIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXIpXG4gICAgfVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25zLmZpbGxDb2xvciA9IGNvbG9yXG4gICAgdGhpcy5yZWRyYXcoKVxuICB9XG4gIHB1YmxpYyBwaXRjaChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIGlmIChwb2x5bGluZS5nZXREYXRhKCkuaWQgPT09IGlkKSB7XG4gICAgICAgIHRoaXMucG9seWxpbmVDbGlja0hhbmRsZXIocG9seWxpbmUsIHRydWUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGluaXRQb2x5bGluZXMoKSB7XG4gICAgLy8g57yT5a2YIHNlZ21lbnQg55u45YWz5pWw5o2uXG4gICAgdGhpcy5jYWNoZVNlZ21lbnRQYXJhbXMoKVxuXG4gICAgdGhpcy5wb2x5bGluZXMgPSB0aGlzLmRhdGFMaXN0Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGF5ZXIgPSBMLmdlb0pTT04oZGF0YS5nZW9tZXRyeSkuZ2V0TGF5ZXJzKClbMF1cbiAgICAgIC8vIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgLy8gaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIC8vICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YSlcbiAgICAgIC8vIH1cbiAgICAgIGNvbnN0IHBvbHlsaW5lID0gbmV3IFBvbHlsaW5lKFxuICAgICAgICAobGF5ZXIgYXMgTC5Qb2x5bGluZSkuZ2V0TGF0TG5ncygpIGFzIFBvbHlsaW5lTGF0TG5nRXhwcmVzc2lvblxuICAgICAgKVxuXG4gICAgICAvLyDlsIbnm7jlhbPlgLznu5HlrprliLAgbWFya2Vy5LiKXG4gICAgICBwb2x5bGluZS5zZXREYXRhKGRhdGEpXG5cbiAgICAgIHJldHVybiBwb2x5bGluZVxuICAgIH0pXG4gIH1cbiAgcHJvdGVjdGVkIGdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IoZGF0YTogRGF0YUxpc3RJdGVtKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgIGNvbnN0IGNvbG9yID0gdGhpcy5vcHRpb25zLnNlZ21lbnRlZENvbG9yc1tcbiAgICAgIHBhcnNlSW50KCcnICsgKHZhbCAtIHRoaXMuc2VnbWVudGVkTWluKSAvIHRoaXMuc2VnbWVudGVkU3RlcCwgMTApXG4gICAgXVxuICAgIHJldHVybiBjb2xvclxuICB9XG4gIHByb3RlY3RlZCBwb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZTogUG9seWxpbmUsIGZpdEJvdW5kcz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmZvY3VzZWRQb2x5bGluZSA9IHBvbHlsaW5lXG4gICAgLy8g5Yig6Zmk5YmN5LiA5LiqIGZvY3VzXG4gICAgaWYgKHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSkge1xuICAgICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLnJlbW92ZSgpXG4gICAgfVxuICAgIC8vIOeUn+aIkOW9k+WJjSBmb2N1c1xuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZSA9IG5ldyBQb2x5bGluZShcbiAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiB0aGlzLmdldENvbG9yKHBvbHlsaW5lLmdldERhdGEoKSksXG4gICAgICAgIGZpbGxDb2xvcjogdGhpcy5nZXRDb2xvcihwb2x5bGluZS5nZXREYXRhKCksICdub3JtYWwnKSxcbiAgICAgIH1cbiAgICApXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmFkZFRvKHRoaXMubWFwKVxuXG4gICAgdGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lXG4gICAgICAuYmluZFBvcHVwKHRoaXMuZ2V0UG9wdXBDb250ZW50KHBvbHlsaW5lLmdldERhdGEoKSkpXG4gICAgICAub3BlblBvcHVwKClcblxuICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5vbigncG9wdXBjbG9zZScsICgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZERpc3BsYXlQb2x5bGluZS5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICBwb2x5bGluZS5jbG9zZVRvb2x0aXAoKVxuXG4gICAgdGhpcy5tYXAucGFuVG8odGhpcy5mb2N1c2VkRGlzcGxheVBvbHlsaW5lLmdldENlbnRlcigpKVxuICAgIGlmIChmaXRCb3VuZHMpIHtcbiAgICAgIHRoaXMubWFwLmZpdEJvdW5kcyhwb2x5bGluZS5nZXRCb3VuZHMoKSlcbiAgICB9XG4gICAgdGhpcy5jaGFubmVsRnVuYygnb24tY2xpY2stcG9seWxpbmUnLCBwb2x5bGluZSlcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0VG9vbFRpcENvbnRlbnQoZGF0YTogRGF0YUxpc3RJdGVtKSB7XG4gICAgcmV0dXJuICcnICsgZGF0YVt0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHJdXG4gIH1cbiAgcHJvdGVjdGVkIGdldFBvcHVwQ29udGVudChkYXRhOiBEYXRhTGlzdEl0ZW0pIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wb3B1cEF0dHIpIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5wb3B1cEF0dHIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5vcHRpb25zLnBvcHVwQXR0cn06ICR7ZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyXX1gXG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLnBvcHVwQXR0ciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLmxhYmVsfTogJHtcbiAgICAgICAgZGF0YVt0aGlzLm9wdGlvbnMucG9wdXBBdHRyLnZhbHVlXVxuICAgICAgfWBcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBjb25maWdQb2x5bGluZUxheWVyKCkge1xuICAgIHRoaXMucG9seWxpbmVMYXllciA9IEwubGF5ZXJHcm91cCgpXG4gICAgdGhpcy5wb2x5bGluZXMuZm9yRWFjaCgocG9seWxpbmUpID0+IHtcbiAgICAgIGxldCBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgICAgY29sb3IgPSB0aGlzLmdldFNlZ21lbnRlZFBvbHlsaW5lQ29sb3IocG9seWxpbmUuZ2V0RGF0YSgpKVxuICAgICAgfVxuICAgICAgY29uc3Qgb3B0aW9uczogTC5Qb2x5bGluZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgY29sb3IsXG4gICAgICB9KVxuICAgICAgY29uc3QgbmV3UG9seWxpbmUgPSBuZXcgUG9seWxpbmUoXG4gICAgICAgIHBvbHlsaW5lLmdldExhdExuZ3MoKSBhcyBQb2x5bGluZUxhdExuZ0V4cHJlc3Npb24sXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcbiAgICAgIG5ld1BvbHlsaW5lLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5wb2x5bGluZUNsaWNrSGFuZGxlcihwb2x5bGluZSlcbiAgICAgIH0pXG4gICAgICBuZXdQb2x5bGluZS5zZXREYXRhKHBvbHlsaW5lLmdldERhdGEoKSlcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbHRpcEF0dHIpIHtcbiAgICAgICAgbmV3UG9seWxpbmUuYmluZFRvb2x0aXAodGhpcy5nZXRUb29sVGlwQ29udGVudChuZXdQb2x5bGluZS5nZXREYXRhKCkpKVxuICAgICAgfVxuICAgICAgdGhpcy5wb2x5bGluZUxheWVyLmFkZExheWVyKG5ld1BvbHlsaW5lKVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMucG9seWxpbmVMYXllclxuICB9XG4gIHByaXZhdGUgY2FjaGVTZWdtZW50UGFyYW1zKCkge1xuICAgIGNvbnN0IHNlZ21lbnRlZExlbmd0aCA9IHRoaXMub3B0aW9ucy5zZWdtZW50ZWRDb2xvcnMubGVuZ3RoXG4gICAgbGV0IG1heFZhbCA9IC1JbmZpbml0eVxuICAgIGxldCBtaW5WYWwgPSBJbmZpbml0eVxuICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmRhdGFMaXN0KSB7XG4gICAgICBjb25zdCB2YWwgPSBkYXRhW3RoaXMub3B0aW9ucy5zZWdtZW50ZWRBdHRyXVxuICAgICAgbWF4VmFsID0gTWF0aC5tYXgobWF4VmFsLCB2YWwpXG4gICAgICBtaW5WYWwgPSBNYXRoLm1pbihtaW5WYWwsIHZhbClcbiAgICB9XG4gICAgY29uc3Qgc3RlcCA9IChtYXhWYWwgLSBtaW5WYWwgKyAxKSAvIHNlZ21lbnRlZExlbmd0aFxuICAgIHRoaXMuc2VnbWVudGVkTWluID0gbWluVmFsXG4gICAgdGhpcy5zZWdtZW50ZWRTdGVwID0gc3RlcFxuICB9XG4gIHByaXZhdGUgZ2V0Q29sb3IoZGF0YTogRGF0YUxpc3RJdGVtLCBtb2RlPzogQ29sb3JNb2RlKSB7XG4gICAgbGV0IGNvbG9yID0gdGhpcy5vcHRpb25zLmNvbG9yXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZW5kZXJQb2x5bGluZUNvbG9yVHlwZSA9PT0gJ3NlZ21lbnRlZCcpIHtcbiAgICAgIGNvbG9yID0gdGhpcy5nZXRTZWdtZW50ZWRQb2x5bGluZUNvbG9yKGRhdGEpXG4gICAgfVxuICAgIHN3aXRjaCAobW9kZSkge1xuICAgICAgY2FzZSAnZGFya2VuJzpcbiAgICAgICAgcmV0dXJuIGRhcmtlbihjb2xvcilcbiAgICAgIGNhc2UgJ2xpZ2h0ZW4nOlxuICAgICAgICByZXR1cm4gbGlnaHRlbihjb2xvcilcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjb2xvclxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgQ29sb3IgZnJvbSAnY29sb3InXG5cbmZ1bmN0aW9uIGxpZ2h0ZW4oaGV4Q29sb3I6IHN0cmluZykge1xuICByZXR1cm4gQ29sb3IoaGV4Q29sb3IpXG4gICAgLmxpZ2h0ZW4oMC41KVxuICAgIC5oZXgoKVxufVxuZnVuY3Rpb24gZGFya2VuKGhleENvbG9yOiBzdHJpbmcpIHtcbiAgcmV0dXJuIENvbG9yKGhleENvbG9yKVxuICAgIC5kYXJrZW4oMC41KVxuICAgIC5oZXgoKVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICBsaWdodGVuLFxuICBkYXJrZW4sXG59XG5leHBvcnQgeyBsaWdodGVuLCBkYXJrZW4gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==