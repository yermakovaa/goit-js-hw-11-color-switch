parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"oLA8":[function(require,module,exports) {
var t=["#FF5668","#FFFFFF","#2196F3","#FFC0CB","#4CAF50","#FF9800","#FF69B4","#4169E1","#808000","#009688","#795548","#00FFFF","#FFFF00","#008000","#FF00FF","#800080","#00FF00","#FFA07A","#C7A1BA","#D2B29B","#00CBA3"],F=1e3,n=null,o=!1,e={body:document.querySelector("body"),start:document.querySelector('button[data-action="start"]'),stop:document.querySelector('button[data-action="stop"]')},c=function(t,F){return Math.floor(Math.random()*(F-t+1)+t)};function r(){o||(n=setInterval(u,F),o=!0)}function a(){clearTimeout(n),o=!1}function u(){e.body.style.cssText="background-color: ".concat(d())}function d(){var F=c(0,t.length-1);return t[F]}e.start.addEventListener("click",r),e.stop.addEventListener("click",a);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/colors");
},{"./sass/main.scss":"clu1","./js/colors":"oLA8"}]},{},["Focm"], null)
//# sourceMappingURL=/src.73ab428d.js.map