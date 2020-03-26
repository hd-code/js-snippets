/*! hd-snippets-js v0.1.1 | MIT | Hannes Dröse git+https://github.com/hd-code/hd-snippets-js.git */
"use strict";var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,o=0,e=arguments.length;o<e;o++)t+=arguments[o].length;var r=Array(t),p=0;for(o=0;o<e;o++)for(var n=arguments[o],s=0,i=n.length;s<i;s++,p++)r[p]=n[s];return r};NodeList.prototype.forEach=NodeList.prototype.forEach||Array.prototype.forEach,NodeList.prototype.map=NodeList.prototype.map||Array.prototype.map,NodeList.prototype.reduce=NodeList.prototype.reduce||Array.prototype.reduce,Element.prototype.on=Element.prototype.on||Element.prototype.addEventListener,NodeList.prototype.on=NodeList.prototype.on||function(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];this.forEach(function(t){return t.on.apply(t,o)})},Element.prototype.off=Element.prototype.off||Element.prototype.removeEventListener,NodeList.prototype.off=NodeList.prototype.off||function(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];this.forEach(function(t){return t.off.apply(t,o)})},Element.prototype.one=Element.prototype.one||function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var p=this,o=__spreadArrays(r);o.shift(),o.shift(),p.on.apply(p,__spreadArrays([r[0],function t(){for(var o=[],e=0;e<arguments.length;e++)o[e]=arguments[e];p.off(r[0],t),r[1].apply(r,o)}],o))},NodeList.prototype.one=NodeList.prototype.one||function(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];this.forEach(function(t){return t.one.apply(t,o)})},Element.prototype.hide=Element.prototype.hide||function(){this.style.display="none"},NodeList.prototype.hide=NodeList.prototype.hide||function(){this.forEach(function(t){return t.hide()})},Element.prototype.show=Element.prototype.show||function(){this.style.display=""},NodeList.prototype.show=NodeList.prototype.show||function(){this.forEach(function(t){return t.show()})},Element.prototype.toggle=Element.prototype.toggle||function(){this.style.display=this.style.display?"":"none"},NodeList.prototype.toggle=NodeList.prototype.toggle||function(){this.forEach(function(t){return t.toggle()})},Element.prototype.addClass=Element.prototype.addClass||function(t){this.classList.add(t)},NodeList.prototype.addClass=NodeList.prototype.addClass||function(o){this.forEach(function(t){return t.addClass(o)})},Element.prototype.removeClass=Element.prototype.removeClass||function(t){this.classList.remove(t)},NodeList.prototype.removeClass=NodeList.prototype.removeClass||function(o){this.forEach(function(t){return t.removeClass(o)})},Element.prototype.toggleClass=Element.prototype.toggleClass||function(t){this.classList.toggle(t)},NodeList.prototype.toggleClass=NodeList.prototype.toggleClass||function(o){this.forEach(function(t){return t.toggleClass(o)})};