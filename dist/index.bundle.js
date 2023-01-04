/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: -apple-system, 'Lato', 'roboto', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;;\\r\\n  background-color: #f5f6f7;;\\r\\n  color: #000;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 24px 20%;\\r\\n  background-color: #0a0a23;\\r\\n  color: #fff;\\r\\n  border-bottom: 4px solid #fdb347;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 32px;\\r\\n  font-weight: 900;\\r\\n  font-style: italic;\\r\\n  color: #f9faf8;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.links {\\r\\n  display: flex;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  gap: 16px;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.main {\\r\\n  height: 75vh;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  background-color: #0a0a23;\\r\\n  color: #fff;\\r\\n  border-top: 4px solid #fdb347;\\r\\n  padding: 32px 0;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\nfooter * {\\r\\n  margin: 2px;\\r\\n}\\r\\n\\r\\n#popup {\\r\\n  display: none;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-color: #f5f6f7;\\r\\n  z-index: 100;\\r\\n  overflow-y: scroll;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: calc(100% - 60px);\\r\\n  padding: 16px 0 16px 20px;\\r\\n}\\r\\n\\r\\n.close h1 {\\r\\n  flex: 1;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.close a img {\\r\\n  width: 36px;\\r\\n  height: 36px;\\r\\n}\\r\\n\\r\\n.description{\\r\\n  width: 60%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.popup img {\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n#recipe-info{\\r\\n  width: 50%;\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.div {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  padding: 8px 0;\\r\\n}\\r\\n\\r\\n#recipe-info{\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  gap: 8px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n#recipe-info .recipe {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n#recipe-info .recipe h3 {\\r\\n  width: 100%;\\r\\n  margin: 20px 0 5px;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n#recipe-info .recipe ul, #recipe-info .recipe ol {\\r\\n  margin-left: -20px;\\r\\n}\\r\\n\\r\\n#recipe-info .recipe li { \\r\\n  margin: 8px 0;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  width: 100%;\\r\\n  padding: 54px 0;\\r\\n}\\r\\n\\r\\nform input[type=text], textarea {\\r\\n  padding: 0.5em;\\r\\n  border: 1px solid #b8b7b7;\\r\\n  border-radius: 4px;\\r\\n  width: 100%;\\r\\n  margin: 8px 0;\\r\\n}\\r\\n\\r\\nform textarea {\\r\\n  height: 120px;\\r\\n}\\r\\n\\r\\nform input[type=submit] {\\r\\n  width: 50%;\\r\\n  padding: 0.5em 1em;\\r\\n  align-self: center;\\r\\n  border-radius: 4px;\\r\\n  background-color: #080808;\\r\\n  color: #fff;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project-2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/close_menu.png":
/*!***********************************!*\
  !*** ./src/images/close_menu.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/close_menu.png\");\n\n//# sourceURL=webpack://capstone-project-2/./src/images/close_menu.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-project-2/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-project-2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_populatePopupWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/populatePopupWindow.js */ \"./src/modules/populatePopupWindow.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n\r\n\r\n\r\n\r\nlet food_ID = '';\r\n\r\n  const container = document.querySelector(\".main\");\r\n  var button = document.createElement(\"button\");\r\n  button.innerHTML = \"Click me\";\r\n  button.addEventListener(\"click\", function() {\r\n    openPopupWindow('52767');\r\n  });\r\n  container.appendChild(button);\r\n\r\nconst openPopupWindow = async (foodId) => {  \r\n  await (0,_modules_populatePopupWindow_js__WEBPACK_IMPORTED_MODULE_1__.loadFoodDetails)(foodId);\r\n  document.body.style.overflowY = 'hidden';\r\n  document.querySelector('#popup').style.display = 'block';\r\n  food_ID = foodId;\r\n};\r\n\r\nwindow.openPopupWindow = openPopupWindow;\r\n\r\n\r\n// const form = document.getElementById('form');\r\n\r\n// const clearForm = () => {\r\n//   form.elements.username.value = '';\r\n//   form.elements.comment.value = '';\r\n// };\r\n\r\n// form.addEventListener('submit', (event) => {\r\n//   event.preventDefault();\r\n//   const comments = {};\r\n//   comments.item_id = food_ID;\r\n//   comments.username = form.elements.username.value;\r\n//   comments.comment = form.elements.comment.value;\r\n//   addComment(comments);\r\n//   clearForm();\r\n// });\n\n//# sourceURL=webpack://capstone-project-2/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\nconst getComments = async(foodId) => {\r\n  const requestURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/comments?item_id=${foodId}`;\r\n  const request = new Request(requestURL);\r\n  const response = await fetch(request);\r\n  const comments = await response.json();\r\n  return comments;\r\n};\r\n\r\nconst storeComment = async (comment) => {\r\n  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/comments`;\r\n  const options = {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(comment),\r\n  };\r\n  const response = await fetch(URL, options);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst addComment = (obj) => {\r\n  storeComment(obj)\r\n    .then(() => {\r\n      getComments(obj.item_id);\r\n    })\r\n    .catch((error) => {\r\n    });\r\n};\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/foodDetails.js":
/*!************************************!*\
  !*** ./src/modules/foodDetails.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFoodDetails\": () => (/* binding */ getFoodDetails)\n/* harmony export */ });\nconst getFoodDetails = async(foodId) => {\r\n  const requestURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;\r\n  const request = new Request(requestURL);\r\n  const response = await fetch(request);\r\n  const foodDetails = await response.json();\r\n  const data = foodDetails.meals[0];\r\n  const food = {};\r\n  food.id = data.idMeal;\r\n  food.title = data.strMeal;\r\n  food.image = data.strMealThumb;\r\n  food.category = data.strCategory;\r\n  food.origin = data.strArea;\r\n  const steps = data.strInstructions.split('\\n'); \r\n  food.steps = steps;\r\n  const ingredients = [];\r\n  const measure = [];\r\n  for (const key in data) {\r\n    if (key.includes('strIngredient') && data[key] !== null && data[key] !== '') {\r\n      ingredients.push(data[key]);\r\n    }\r\n\r\n    if (key.includes('strMeasure') && data[key] !== null && data[key] !== '') {\r\n      measure.push(data[key]);\r\n    }\r\n  }\r\n  const newIngredients = ingredients.map((element, index) => measure[index] + ' ' + element);\r\n  food.ingredients = newIngredients;\r\n  return food;\r\n};\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/foodDetails.js?");

/***/ }),

/***/ "./src/modules/populatePopupWindow.js":
/*!********************************************!*\
  !*** ./src/modules/populatePopupWindow.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFoodDetails\": () => (/* binding */ loadFoodDetails)\n/* harmony export */ });\n/* harmony import */ var _foodDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodDetails.js */ \"./src/modules/foodDetails.js\");\n/* harmony import */ var _images_close_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/close_menu.png */ \"./src/images/close_menu.png\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\r\n\r\n\r\n// const loadComments = async (foodId) => {\r\n//   const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;\r\n//   const options = {\r\n//     method: 'POST',\r\n//     headers: {\r\n//       'Content-Type': 'application/json',\r\n//     },\r\n//     body: JSON.stringify(obj),\r\n//   };\r\n//   const response = await fetch(url, options);\r\n//   const data = await response.json();\r\n//   return data;\r\n// }; \r\n\r\nconst loadFoodDetails = async (foodId) => {\r\n  const food = await (0,_foodDetails_js__WEBPACK_IMPORTED_MODULE_0__.getFoodDetails)(foodId);\r\n  const comments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.getComments)(foodId);\r\n\r\n  const popupDiv = document.createElement('div');\r\n  popupDiv.id = 'popup';\r\n  popupDiv.classList.add('popup');\r\n\r\n  const closeDiv = document.createElement('div');\r\n  closeDiv.classList.add('close');\r\n\r\n  const h1 = document.createElement('h1');\r\n  h1.innerText = food.title;\r\n  closeDiv.appendChild(h1);\r\n\r\n  const closeA = document.createElement('a');\r\n  closeA.id = 'close';\r\n  closeA.setAttribute('href', '#');\r\n\r\n  const closeImg = document.createElement('img');\r\n\r\n  closeImg.setAttribute('src', _images_close_menu_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  closeImg.setAttribute('alt','Close');\r\n  closeA.appendChild(closeImg);\r\n  closeDiv.appendChild(closeA);\r\n  popupDiv.appendChild(closeDiv);\r\n\r\n  const foodDescription = document.createElement('div');\r\n  foodDescription.classList.add('description')\r\n\r\n  const img = document.createElement('img');\r\n  img.id = 'food-image';\r\n  img.setAttribute('src', food.image);\r\n  img.setAttribute('alt', food.title);\r\n  foodDescription.appendChild(img);\r\n\r\n  const div = document.createElement('div');\r\n  div.classList.add('div');\r\n\r\n  const h21 = document.createElement('h2');\r\n  h21.innerText = 'Category : ' + food.category;\r\n  const h22 = document.createElement('h2');\r\n  h22.innerText = 'Origin : ' + food.origin;\r\n  div.appendChild(h21);\r\n  div.appendChild(h22);\r\n  foodDescription.appendChild(div);\r\n\r\n  const recipeDiv = document.createElement('div');\r\n  recipeDiv.id = 'recipe-info';\r\n\r\n  const ingredients = document.createElement('div');\r\n  ingredients.classList.add('recipe');\r\n\r\n  const h31 = document.createElement('h3');\r\n  h31.innerText = 'Ingredients';\r\n  ingredients.appendChild(h31);\r\n\r\n  const ul1 = document.createElement('ul');\r\n\r\n  for (let i = 0; i < food.ingredients.length; i++) {\r\n    const item = food.ingredients[i];\r\n    const li = document.createElement('li');\r\n    li.textContent = item;\r\n    ul1.appendChild(li);\r\n  }\r\n\r\n  ingredients.appendChild(ul1);\r\n  recipeDiv.appendChild(ingredients);\r\n\r\n  const steps = document.createElement('div');\r\n  steps.classList.add('recipe');\r\n\r\n  const h32 = document.createElement('h3');\r\n  h32.innerText = 'Instructions';\r\n  steps.appendChild(h32);\r\n\r\n  const ol1 = document.createElement('ol');\r\n  for (let i = 0; i < food.steps.length; i++) {\r\n    const item = food.steps[i];\r\n    const li = document.createElement('li');\r\n    li.textContent = item;\r\n    ol1.appendChild(li);\r\n  }\r\n\r\n  steps.appendChild(ol1);\r\n  recipeDiv.appendChild(steps);\r\n  foodDescription.appendChild(recipeDiv);\r\n\r\n  const commentsDiv = document.createElement('div');\r\n  const h23 = document.createElement('h2');\r\n  h23.innerText = 'Comments';\r\n  commentsDiv.appendChild(h23);\r\n\r\n  const ul2 = document.createElement('ul');\r\n  for (let i = 0; i < comments.length; i++) {\r\n    const item = comments[i].creation_date + ' ' + comments[i].username + ': ' + comments[i].comment ;\r\n    const li = document.createElement('li');\r\n    li.textContent = item;\r\n    ul2.appendChild(li);\r\n  }\r\n  commentsDiv.appendChild(ul2);\r\n  foodDescription.appendChild(commentsDiv);\r\n  \r\n  const form = document.createElement('form');\r\n  form.id = 'form';\r\n  const h24 = document.createElement('h2');\r\n  h24.innerText = 'Add a comment';\r\n  form.appendChild(h24);\r\n\r\n  const userName = document.createElement('input');\r\n  userName.id = 'username';\r\n  userName.name = 'username';\r\n  userName.type = 'text';\r\n  userName.placeholder = 'Your name';\r\n  userName.required = true;\r\n\r\n  form.appendChild(userName);\r\n  const userComment = document.createElement('textarea');\r\n  userComment.id = 'comment';\r\n  userComment.name = 'comment';\r\n  userComment.placeholder = 'Your insights';\r\n  userComment.required = true;\r\n\r\n  form.appendChild(userComment);\r\n  const submit = document.createElement('input');\r\n  submit.type = 'submit';\r\n  submit.id = 'submit';\r\n  submit.value = 'Comment';\r\n\r\n  form.appendChild(submit);\r\n\r\n  foodDescription.appendChild(form);\r\n  popupDiv.appendChild(foodDescription);\r\n  document.querySelector('.main').appendChild(popupDiv);\r\n\r\n  closeA.addEventListener('click', function() {\r\n    document.querySelector('#popup').style.display = 'none';\r\n    document.body.style.overflowY = 'scroll';\r\n  });\r\n};\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/populatePopupWindow.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;