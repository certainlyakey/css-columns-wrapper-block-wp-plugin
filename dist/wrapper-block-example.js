parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kpqe":[function(require,module,exports) {
var define;
var e;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var s=n.apply(null,o);s&&e.push(s)}else if("object"===a)for(var u in o)r.call(o,u)&&o[u]&&e.push(u)}}return e.join(" ")}"undefined"!=typeof module&&module.exports?(n.default=n,module.exports=n):"function"==typeof e&&"object"==typeof e.amd&&e.amd?e("classnames",[],function(){return n}):window.classNames=n}();
},{}],"ZZJ8":[function(require,module,exports) {
"use strict";var e=a(require("classnames"));function a(e){return e&&e.__esModule?e:{default:e}}var l=wp.i18n.__,r=wp.blocks.registerBlockType,t=wp.element.Fragment,o=wp.editor,n=o.InnerBlocks,c=o.InspectorControls,p=wp.components,u=p.PanelBody,s=p.SelectControl;r("wrapper-block-example/wrapper-block",{title:l("Background","wrapper-block-example"),icon:"editor-table",category:"layout",keywords:[l("Background","wrapper-block-example"),l("Wrapper Block","wrapper-block-example")],supports:{align:!1},attributes:{bgColor:{type:"string"}},edit:function(e){var a=e.attributes,r=e.setAttributes,o=e.className,p=a.bgColor,i=void 0===p?"":p;return React.createElement(t,null,React.createElement(c,null,React.createElement(u,{title:l("Background Color","wrapper-block-example"),initialOpen:!0},React.createElement(s,{label:l("Background Color","wrapper-block-example"),value:i,options:[{value:"",label:l("No Background Color","wrapper-block-example")},{value:"paleturquoise",label:l("Light Blue","wrapper-block-example")},{value:"orange",label:l("Orange","wrapper-block-example")}],onChange:function(e){return r({bgColor:e})}}))),React.createElement("div",{className:o,style:{backgroundColor:i}},React.createElement(n,null)))},save:function(a){var l=a.attributes,r=a.className,t=l.bgColor,o=void 0===t?"":t;return React.createElement("div",{className:(0,e.default)("wrapper-block-example","bg-".concat(o),r),style:{backgroundColor:o,padding:"10px"}},React.createElement(n.Content,null))}});
},{"classnames":"kpqe"}]},{},["ZZJ8"], null)
//# sourceMappingURL=/wrapper-block-example.js.map