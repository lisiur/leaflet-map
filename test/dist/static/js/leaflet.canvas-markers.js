!function(t){var n={};function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(e,a,function(n){return t[n]}.bind(null,a));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=0)}([function(t,n,i){var e=i(1),a=i(3);window.L.CanvasIconLayer=a(L),window.rbush=e},function(t,n,i){"use strict";t.exports=a,t.exports.default=a;var e=i(2);function a(t,n){if(!(this instanceof a))return new a(t,n);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&this._initFormat(n),this.clear()}function r(t,n,i){if(!i)return n.indexOf(t);for(var e=0;e<n.length;e++)if(i(t,n[e]))return e;return-1}function o(t,n){s(t,0,t.children.length,n,t)}function s(t,n,i,e,a){a||(a=x(null)),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(var r,o=n;o<i;o++)r=t.children[o],h(a,t.leaf?e(r):r);return a}function h(t,n){return t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY),t}function l(t,n){return t.minX-n.minX}function c(t,n){return t.minY-n.minY}function u(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function m(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,n){return(Math.max(n.maxX,t.maxX)-Math.min(n.minX,t.minX))*(Math.max(n.maxY,t.maxY)-Math.min(n.minY,t.minY))}function d(t,n){var i=Math.max(t.minX,n.minX),e=Math.max(t.minY,n.minY),a=Math.min(t.maxX,n.maxX),r=Math.min(t.maxY,n.maxY);return Math.max(0,a-i)*Math.max(0,r-e)}function _(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function p(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function x(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function g(t,n,i,a,r){for(var o,s=[n,i];s.length;)(i=s.pop())-(n=s.pop())<=a||(o=n+Math.ceil((i-n)/a/2)*a,e(t,o,n,i,r),s.push(n,o,o,i))}a.prototype={all:function(){return this._all(this.data,[])},search:function(t){var n=this.data,i=[],e=this.toBBox;if(!p(t,n))return i;for(var a,r,o,s,h=[];n;){for(a=0,r=n.children.length;a<r;a++)o=n.children[a],p(t,s=n.leaf?e(o):o)&&(n.leaf?i.push(o):_(t,s)?this._all(o,i):h.push(o));n=h.pop()}return i},collides:function(t){var n=this.data,i=this.toBBox;if(!p(t,n))return!1;for(var e,a,r,o,s=[];n;){for(e=0,a=n.children.length;e<a;e++)if(r=n.children[e],p(t,o=n.leaf?i(r):r)){if(n.leaf||_(t,o))return!0;s.push(r)}n=s.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var n=0,i=t.length;n<i;n++)this.insert(t[n]);return this}var e=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){var a=this.data;this.data=e,e=a}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this},insert:function(t){return t&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=x([]),this},remove:function(t,n){if(!t)return this;for(var i,e,a,o,s=this.data,h=this.toBBox(t),l=[],c=[];s||l.length;){if(s||(s=l.pop(),e=l[l.length-1],i=c.pop(),o=!0),s.leaf&&-1!==(a=r(t,s.children,n)))return s.children.splice(a,1),l.push(s),this._condense(l),this;o||s.leaf||!_(s,h)?e?(i++,s=e.children[i],o=!1):s=null:(l.push(s),c.push(i),i=0,e=s,s=s.children[0])}return this},toBBox:function(t){return t},compareMinX:l,compareMinY:c,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,n){for(var i=[];t;)t.leaf?n.push.apply(n,t.children):i.push.apply(i,t.children),t=i.pop();return n},_build:function(t,n,i,e){var a,r=i-n+1,s=this._maxEntries;if(r<=s)return o(a=x(t.slice(n,i+1)),this.toBBox),a;e||(e=Math.ceil(Math.log(r)/Math.log(s)),s=Math.ceil(r/Math.pow(s,e-1))),(a=x([])).leaf=!1,a.height=e;var h,l,c,u,m=Math.ceil(r/s),f=m*Math.ceil(Math.sqrt(s));for(g(t,n,i,f,this.compareMinX),h=n;h<=i;h+=f)for(g(t,h,c=Math.min(h+f-1,i),m,this.compareMinY),l=h;l<=c;l+=m)u=Math.min(l+m-1,c),a.children.push(this._build(t,l,u,e-1));return o(a,this.toBBox),a},_chooseSubtree:function(t,n,i,e){for(var a,r,o,s,h,l,c,m;e.push(n),!n.leaf&&e.length-1!==i;){for(c=m=1/0,a=0,r=n.children.length;a<r;a++)h=u(o=n.children[a]),(l=f(t,o)-h)<m?(m=l,c=h<c?h:c,s=o):l===m&&h<c&&(c=h,s=o);n=s||n.children[0]}return n},_insert:function(t,n,i){var e=this.toBBox,a=i?t:e(t),r=[],o=this._chooseSubtree(a,this.data,n,r);for(o.children.push(t),h(o,a);n>=0&&r[n].children.length>this._maxEntries;)this._split(r,n),n--;this._adjustParentBBoxes(a,r,n)},_split:function(t,n){var i=t[n],e=i.children.length,a=this._minEntries;this._chooseSplitAxis(i,a,e);var r=this._chooseSplitIndex(i,a,e),s=x(i.children.splice(r,i.children.length-r));s.height=i.height,s.leaf=i.leaf,o(i,this.toBBox),o(s,this.toBBox),n?t[n-1].children.push(s):this._splitRoot(i,s)},_splitRoot:function(t,n){this.data=x([t,n]),this.data.height=t.height+1,this.data.leaf=!1,o(this.data,this.toBBox)},_chooseSplitIndex:function(t,n,i){var e,a,r,o,h,l,c,m;for(l=c=1/0,e=n;e<=i-n;e++)o=d(a=s(t,0,e,this.toBBox),r=s(t,e,i,this.toBBox)),h=u(a)+u(r),o<l?(l=o,m=e,c=h<c?h:c):o===l&&h<c&&(c=h,m=e);return m},_chooseSplitAxis:function(t,n,i){var e=t.leaf?this.compareMinX:l,a=t.leaf?this.compareMinY:c;this._allDistMargin(t,n,i,e)<this._allDistMargin(t,n,i,a)&&t.children.sort(e)},_allDistMargin:function(t,n,i,e){t.children.sort(e);var a,r,o=this.toBBox,l=s(t,0,n,o),c=s(t,i-n,i,o),u=m(l)+m(c);for(a=n;a<i-n;a++)r=t.children[a],h(l,t.leaf?o(r):r),u+=m(l);for(a=i-n-1;a>=n;a--)r=t.children[a],h(c,t.leaf?o(r):r),u+=m(c);return u},_adjustParentBBoxes:function(t,n,i){for(var e=i;e>=0;e--)h(n[e],t)},_condense:function(t){for(var n,i=t.length-1;i>=0;i--)0===t[i].children.length?i>0?(n=t[i-1].children).splice(n.indexOf(t[i]),1):this.clear():o(t[i],this.toBBox)},_initFormat:function(t){var n=["return a"," - b",";"];this.compareMinX=new Function("a","b",n.join(t[0])),this.compareMinY=new Function("a","b",n.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}},function(t,n,i){t.exports=function(){"use strict";function t(t,n,i){var e=t[n];t[n]=t[i],t[i]=e}function n(t,n){return t<n?-1:t>n?1:0}return function(i,e,a,r,o){!function n(i,e,a,r,o){for(;r>a;){if(r-a>600){var s=r-a+1,h=e-a+1,l=Math.log(s),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(s-c)/s)*(h-s/2<0?-1:1),m=Math.max(a,Math.floor(e-h*c/s+u)),f=Math.min(r,Math.floor(e+(s-h)*c/s+u));n(i,e,m,f,o)}var d=i[e],_=a,p=r;for(t(i,a,e),o(i[r],d)>0&&t(i,a,r);_<p;){for(t(i,_,p),_++,p--;o(i[_],d)<0;)_++;for(;o(i[p],d)>0;)p--}0===o(i[a],d)?t(i,a,p):t(i,++p,r),p<=e&&(a=p+1),e<=p&&(r=p-1)}}(i,e,a||0,r||i.length-1,o||n)}}()},function(t,n,i){"use strict";t.exports=function(t){var n=(t.Layer?t.Layer:t.Class).extend({initialize:function(n){t.setOptions(this,n),this._onClickListeners=[],this._onHoverListeners=[],this._onContextmenuListeners=[]},setOptions:function(n){return t.setOptions(this,n),this.redraw()},redraw:function(){this._redraw(!0)},addMarkers:function(t){var n=this,i=[],e=[];t.forEach(function(t){if("markerPane"==t.options.pane&&t.options.icon){var a=t.getLatLng(),r=n._map.getBounds().contains(a),o=n._addMarker(t,a,r);!0===r&&i.push(o[0]),e.push(o[1])}else console.error("Layer isn't a marker")}),n._markers.load(i),n._latlngMarkers.load(e)},addMarker:function(t){var n=t.getLatLng(),i=this._map.getBounds().contains(n),e=this._addMarker(t,n,i);!0===i&&this._markers.insert(e[0]),this._latlngMarkers.insert(e[1])},addLayer:function(t){"markerPane"==t.options.pane&&t.options.icon?this.addMarker(t):console.error("Layer isn't a marker")},addLayers:function(t){this.addMarkers(t)},removeLayer:function(t){this.removeMarker(t,!0)},removeMarker:function(t,n){t.minX&&(t=t.data);var i=t.getLatLng(),e=this._map.getBounds().contains(i),a={minX:i.lng,minY:i.lat,maxX:i.lng,maxY:i.lat,data:t};this._latlngMarkers.remove(a,function(t,n){return t.data._leaflet_id===n.data._leaflet_id}),this._latlngMarkers.total--,this._latlngMarkers.dirty++,!0===e&&!0===n&&this._redraw(!0)},onAdd:function(t){this._map=t,this._canvas||this._initCanvas(),this.options.pane?this.getPane().appendChild(this._canvas):t._panes.overlayPane.appendChild(this._canvas),t.on("moveend",this._reset,this),t.on("resize",this._reset,this),t.on("click",this._executeListeners,this),t.on("mousemove",this._executeListeners,this),t.on("contextmenu",this._executeListeners,this)},onRemove:function(t){this.options.pane?this.getPane().removeChild(this._canvas):t.getPanes().overlayPane.removeChild(this._canvas),t.off("click",this._executeListeners,this),t.off("mousemove",this._executeListeners,this),t.off("moveend",this._reset,this),t.off("resize",this._reset,this)},addTo:function(t){return t.addLayer(this),this},clearLayers:function(){this._latlngMarkers=null,this._markers=null,this._redraw(!0)},_addMarker:function(n,i,e){n._map=this._map,this._markers||(this._markers=new rbush),this._latlngMarkers||(this._latlngMarkers=new rbush,this._latlngMarkers.dirty=0,this._latlngMarkers.total=0),t.Util.stamp(n);var a=this._map.latLngToContainerPoint(i),r=n.options.icon.options.iconSize,o=r[0]/2,s=r[1],h=[{minX:a.x-o,minY:a.y-s,maxX:a.x+o,maxY:a.y,data:n},{minX:i.lng,minY:i.lat,maxX:i.lng,maxY:i.lat,data:n}];return this._latlngMarkers.dirty++,this._latlngMarkers.total++,!0===e&&this._drawMarker(n,a),h},_drawMarker:function(t,n){var i=this;this._imageLookup||(this._imageLookup={}),n||(n=i._map.latLngToContainerPoint(t.getLatLng()));var e=t.options.icon.options.iconUrl;if(t.canvas_img)i._drawImage(t,n);else if(t.options.icon.options.html)i._drawHtml(t,n);else if(i._imageLookup[e])t.canvas_img=i._imageLookup[e][0],!1===i._imageLookup[e][1]?i._imageLookup[e][2].push([t,n]):i._drawImage(t,n);else{var a=new Image;a.src=e,t.canvas_img=a,i._imageLookup[e]=[a,!1,[[t,n]]],a.onload=function(){i._imageLookup[e][1]=!0,i._imageLookup[e][2].forEach(function(t){i._drawImage(t[0],t[1])})}}},_drawImage:function(t,n){var i=t.options.icon.options;this._context.drawImage(t.canvas_img,n.x-i.iconAnchor[0],n.y-i.iconAnchor[1],i.iconSize[0],i.iconSize[1])},_drawHtml:function(t,n){var i=function(t){var n=document.createElement("div");return n.innerHTML=t.trim(),n.firstChild}(t.options.icon.options.html),e=i.style["font-size"],a=i.style.color,r=i.className;this._context.font=`${e} ${r}`,this._context.textBaseline="bottom",this._context.fillStyle=a,this._context.fillText(i.textContent.trim(),n.x-parseFloat(e)/2,n.y)},_reset:function(){var n=this._map.containerPointToLayerPoint([0,0]);t.DomUtil.setPosition(this._canvas,n);var i=this._map.getSize();this._canvas.width=i.x,this._canvas.height=i.y,this._redraw()},_redraw:function(t){var n=this;if(t&&this._context.clearRect(0,0,this._canvas.width,this._canvas.height),this._map&&this._latlngMarkers){var i=[];n._latlngMarkers.dirty/n._latlngMarkers.total>=.1&&(n._latlngMarkers.all().forEach(function(t){i.push(t)}),n._latlngMarkers.clear(),n._latlngMarkers.load(i),n._latlngMarkers.dirty=0,i=[]);var e=n._map.getBounds(),a={minX:e.getWest(),minY:e.getSouth(),maxX:e.getEast(),maxY:e.getNorth()};n._latlngMarkers.search(a).forEach(function(t){var e=n._map.latLngToContainerPoint(t.data.getLatLng()),a=t.data.options.icon.options.iconSize,r=a[0]/2,o=a[1],s={minX:e.x-r,minY:e.y-o,maxX:e.x+r,maxY:e.y,data:t.data};i.push(s),n._drawMarker(t.data,e)}),this._markers.clear(),this._markers.load(i)}},_initCanvas:function(){this._canvas=t.DomUtil.create("canvas","leaflet-canvas-icon-layer leaflet-layer");var n=t.DomUtil.testProp(["transformOrigin","WebkitTransformOrigin","msTransformOrigin"]);this._canvas.style[n]="50% 50%";var i=this._map.getSize();this._canvas.width=i.x,this._canvas.height=i.y,this._context=this._canvas.getContext("2d");var e=this._map.options.zoomAnimation&&t.Browser.any3d;t.DomUtil.addClass(this._canvas,"leaflet-zoom-"+(e?"animated":"hide"))},addOnClickListener:function(t){this._onClickListeners.push(t)},addOnHoverListener:function(t){this._onHoverListeners.push(t)},addOnContextmenuListener:function(t){this._onContextmenuListeners.push(t)},_executeListeners:function(t){if(this._markers){var n=this,i=t.containerPoint.x,e=t.containerPoint.y;n._openToolTip&&(n._openToolTip.closeTooltip(),delete n._openToolTip);var a=this._markers.search({minX:i,minY:e,maxX:i,maxY:e});a&&a.length>0?(n._map._container.style.cursor="pointer","click"===t.type&&(a[0].data.getPopup()&&a[0].data.openPopup(),n._onClickListeners.forEach(function(n){n(t,a)})),"contextmenu"===t.type&&n._onContextmenuListeners.forEach(function(n){n(t,a)}),"mousemove"===t.type&&(a[0].data.getTooltip()&&(n._openToolTip=a[0].data,a[0].data.openTooltip()),n._onHoverListeners.forEach(function(n){n(t,a)}))):n._map._container.style.cursor=""}}});t.canvasIconLayer=function(t){return new n(t)}}}]);