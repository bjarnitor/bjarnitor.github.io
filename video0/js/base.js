(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// External links should target _blank by default (if not already set to something).
var host = window.location.host;
var links = document.getElementsByTagName('a');
console.log(links)
for (var i = 0; i < links.length; i++) {
    if (links[i].host !== host && !links[i].getAttribute('target')) {
        links[i].setAttribute('target', '_blank');
    }
}

},{}],2:[function(require,module,exports){
require("./useful.js");
require("./_blank.js");

},{"./_blank.js":1,"./useful.js":3}],3:[function(require,module,exports){
(function (global){
var sizes = {
	"xl": 1280,
	"lg": 1024,
	"md": 768,
	"sm": 568
}

function viewport(){
    var e = window;
    var a = 'inner';
    if (!('innerWidth' in window)){
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

global.viewport = viewport;
global.sizes = sizes;
global.getParameterByName = getParameterByName;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[2]);
