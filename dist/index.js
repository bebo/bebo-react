!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],t):"object"==typeof exports?exports.ReactSimpleFetch=t(require("react"),require("react-dom")):e.ReactSimpleFetch=t(e.React,e.ReactDOM)}(this,function(e,t){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){return e.displayName||e.name||"Component"}function i(e){var t=p["default"].createClass({displayName:"WithBebo",render:function(){return Bebo?p["default"].createElement(e,u({},this.props,{bebo:Bebo,Bebo:Bebo})):console.error("Bebo is not defined yet...")}});return t.displayName="withBebo("+a(e)+")",t.WrappedComponent=e,(0,b["default"])(t,e)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.withBebo=i;var f=r(2),p=o(f),s=r(3),l=o(s),d=r(1),b=o(d);t["default"]=new(function(){function e(){n(this,e),this.bebo=Bebo}return c(e,[{key:"render",value:function(e,t,r){this.bebo.onReady(function(){var o=r.disableKeyboardDoneStrip;o&&Bebo.UI.disableKeyboardDoneStrip(),l["default"].render(e,t)})}}]),e}())},function(e,t){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},n="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,t,a){if("string"!=typeof t){var i=Object.getOwnPropertyNames(t);n&&(i=i.concat(Object.getOwnPropertySymbols(t)));for(var c=0;c<i.length;++c)if(!(r[i[c]]||o[i[c]]||a&&a[i[c]]))try{e[i[c]]=t[i[c]]}catch(u){}}return e}},function(t,r){t.exports=e},function(e,r){e.exports=t}])});