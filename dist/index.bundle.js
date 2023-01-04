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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: -apple-system, 'Lato', 'roboto', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;\\r\\n  background-image: url('http://127.0.0.1:5500/dist/b190d3df533764e4f333.jpg');\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: cover;\\r\\n  background-position: 50% 50%;\\r\\n  image-rendering: -webkit-optimize-contrast;\\r\\n  color: #000;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 24px 20%;\\r\\n  background-color: #0a0a23;\\r\\n  color: #fff;\\r\\n  border-bottom: 4px solid #fdb347;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 32px;\\r\\n  font-weight: 900;\\r\\n  font-style: italic;\\r\\n  color: #f9faf8;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.links {\\r\\n  display: flex;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  gap: 16px;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.grid-container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n  padding: 10px;\\r\\n  gap: 40px;\\r\\n  margin: 0 9%;\\r\\n}\\r\\n\\r\\n.grid-item {\\r\\n  width: auto;\\r\\n  background-color: #fff;\\r\\n  border: 1px solid rgba(0, 0, 0, 0.8);\\r\\n  border-radius: 5px;\\r\\n  font-size: 30px;\\r\\n  text-align: center;\\r\\n  box-shadow: 2px 2px 17px 0;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 100%;\\r\\n  height: 240px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 4%;\\r\\n}\\r\\n\\r\\nh2,\\r\\n.likes {\\r\\n  font-size: 13px;\\r\\n}\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  text-align: start;\\r\\n  padding: 0 4%;\\r\\n}\\r\\n\\r\\np {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  width: 90%;\\r\\n  margin: 10px 9px;\\r\\n  background-color: #ec5242;\\r\\n  color: #f0f2f5;\\r\\n  border: 0;\\r\\n  padding: 2%;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  text-align: center;\\r\\n  background-color: #0a0a23;\\r\\n  color: #fff;\\r\\n  border-top: 4px solid #fdb347;\\r\\n  padding: 32px 0;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\nfooter * {\\r\\n  margin: 2px;\\r\\n}\\r\\n\\r\\n#popup {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-color: #f5f6f7;\\r\\n  z-index: 100;\\r\\n  overflow-y: scroll;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: calc(100% - 60px);\\r\\n  padding: 16px 0 16px 20px;\\r\\n}\\r\\n\\r\\n.close h1 {\\r\\n  flex: 1;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup img {\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.close a img {\\r\\n  width: 36px;\\r\\n  height: 36px;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  width: 60%;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n#food-image {\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  width: 100%;\\r\\n  vertical-align: middle;\\r\\n  text-align: center;\\r\\n  padding: 8px 0;\\r\\n}\\r\\n\\r\\n.div {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  padding: 8px 0;\\r\\n}\\r\\n\\r\\n#recipe-info {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  gap: 8px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n#recipe-info .recipe {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n#recipe-info .recipe h3 {\\r\\n  width: 100%;\\r\\n  margin: 20px 0 5px;\\r\\n  text-align: left;\\r\\n}\\r\\n\\r\\n#recipe-info .recipe ul,\\r\\n#recipe-info .recipe ol {\\r\\n  margin-left: -20px;\\r\\n}\\r\\n\\r\\n#comments-list li {\\r\\n  padding-bottom: 8px;\\r\\n}\\r\\n\\r\\n#recipe-info .recipe li {\\r\\n  margin: 8px 0;\\r\\n}\\r\\n\\r\\n#add-comment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  width: 100%;\\r\\n  padding: 54px 0;\\r\\n}\\r\\n\\r\\n#comments-title {\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  padding: 8px 0;\\r\\n  font-size: 24px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n#add-comment input[type=text],\\r\\ntextarea {\\r\\n  padding: 0.5em;\\r\\n  border: 1px solid #b8b7b7;\\r\\n  border-radius: 4px;\\r\\n  width: 100%;\\r\\n  margin: 8px 0;\\r\\n}\\r\\n\\r\\n#add-comment input[type=submit] {\\r\\n  margin-top: 16px;\\r\\n  padding: 8px 32px;\\r\\n  align-self: flex-start;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  background-color: #ec5242;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n#add-comment input[type=submit]:hover {\\r\\n  background-color: #234342;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n#add-comment h2 {\\r\\n  width: 100%;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  padding: 8px 0;\\r\\n  font-size: 24px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n#comments-list {\\r\\n  list-style-type: none;\\r\\n  text-indent: -40px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-project-2/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_populatePopupWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/populatePopupWindow.js */ \"./src/modules/populatePopupWindow.js\");\n/* harmony import */ var _modules_populate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/populate.js */ \"./src/modules/populate.js\");\n\n\n\n\nwindow.addEventListener('load', () => {\n  (0,_modules_populate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\nconst openPopupWindow = async (foodId) => {\n  await (0,_modules_populatePopupWindow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(foodId);\n  document.body.style.overflowY = 'hidden';\n  document.querySelector('#popup').style.display = 'block';\n};\n\nwindow.openPopupWindow = openPopupWindow;\n\n\n//# sourceURL=webpack://capstone-project-2/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = async (foodId) => {\n  const requestURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/comments?item_id=${foodId}`;\n  const request = new Request(requestURL);\n  const response = await fetch(request);\n  const comments = await response.json();\n  return comments;\n};\n\nconst addComment = async (comment) => {\n  const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/iD8cGInPlC4yvUbCyKZp/comments';\n  const options = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(comment),\n  };\n  const response = await fetch(URL, options);\n  return response.status;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/const.js":
/*!******************************!*\
  !*** ./src/modules/const.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"grid\": () => (/* binding */ grid),\n/* harmony export */   \"like\": () => (/* binding */ like)\n/* harmony export */ });\nconst grid = document.querySelector('.grid-container');\nconst like = document.getElementsByClassName('material-symbols-outlined');\n\n\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/const.js?");

/***/ }),

/***/ "./src/modules/fetchApi.js":
/*!*********************************!*\
  !*** ./src/modules/fetchApi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"URL\": () => (/* binding */ URL),\n/* harmony export */   \"getFoodList\": () => (/* binding */ getFoodList)\n/* harmony export */ });\nconst URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c';\n\nconst getFoodList = async (URL) => {\n  const response = await fetch(URL);\n  const json = await response.json();\n  const mealList = json.meals.slice(0, 12);\n\n  return mealList;\n};\n\n\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/fetchApi.js?");

/***/ }),

/***/ "./src/modules/foodDetails.js":
/*!************************************!*\
  !*** ./src/modules/foodDetails.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getFoodDetails = async (foodId) => {\n  const requestURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;\n  const request = new Request(requestURL);\n  const response = await fetch(request);\n  const foodDetails = await response.json();\n  const data = foodDetails.meals[0];\n  const food = {};\n  if (data !== null) {\n    food.id = data.idMeal;\n    food.title = data.strMeal;\n    food.image = data.strMealThumb;\n    food.category = data.strCategory;\n    food.origin = data.strArea;\n    const steps = data.strInstructions.split('\\r\\n');\n    food.steps = steps;\n    const ingredients = [];\n    const measure = [];\n\n    Object.keys(data).forEach((key) => {\n      if (data[key] !== null && data[key] !== '') {\n        if (key.includes('strIngredient')) {\n          ingredients.push(data[key]);\n        }\n        if (key.includes('strMeasure')) {\n          measure.push(data[key]);\n        }\n      }\n    });\n    const newIngredients = ingredients.map((element, index) => `${measure[index]} ${element}`);\n    food.ingredients = newIngredients;\n  }\n  return food;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFoodDetails);\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/foodDetails.js?");

/***/ }),

/***/ "./src/modules/foodList.js":
/*!*********************************!*\
  !*** ./src/modules/foodList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchApi.js */ \"./src/modules/fetchApi.js\");\n\n\nconst getMeals = async () => {\n  const mealsArr = [];\n  const foodList = await (0,_fetchApi_js__WEBPACK_IMPORTED_MODULE_0__.getFoodList)(_fetchApi_js__WEBPACK_IMPORTED_MODULE_0__.URL);\n  foodList.forEach((food) => {\n    const foodObj = {\n      id: food.idMeal,\n      name: food.strMeal,\n      image: food.strMealThumb,\n      category: food.strCategory,\n      origin: food.strArea,\n      cookinginstruction: food.strInstructions,\n    };\n    mealsArr.push(foodObj);\n  });\n  return mealsArr;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/foodList.js?");

/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ \"./src/modules/const.js\");\n/* harmony import */ var _foodList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foodList.js */ \"./src/modules/foodList.js\");\n\n\n\nconst populateMeal = async () => {\n  const foods = await (0,_foodList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  _const_js__WEBPACK_IMPORTED_MODULE_0__.grid.innerHTML = '';\n  foods.forEach((food) => {\n    const pop = `\n        <div class=\"grid-item\">\n      <div><img src=\"${food.image}\" alt=\"${food.name}\"></div>\n      <div class=\"card-title\">\n        <h2>${food.name}</h2>\n        <span class=\"material-symbols-outlined\">\n          favorite\n        </span>\n      </div>\n      <div class=\"likes\">\n        <p>0 Likes</p>\n        <button data-id=\"${food.id}\" onclick=\"openPopupWindow('${food.id}')\">Comment</button>\n      </div>\n      </div>\n        `;\n    _const_js__WEBPACK_IMPORTED_MODULE_0__.grid.innerHTML += pop;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateMeal);\n\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/populate.js?");

/***/ }),

/***/ "./src/modules/populatePopupWindow.js":
/*!********************************************!*\
  !*** ./src/modules/populatePopupWindow.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _foodDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./foodDetails.js */ \"./src/modules/foodDetails.js\");\n/* harmony import */ var _images_close_menu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/close_menu.png */ \"./src/images/close_menu.png\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\n\n\n\nfunction topElement() {\n  const closeDiv = document.createElement('div');\n  closeDiv.classList.add('close');\n  const h1 = document.createElement('h1');\n  closeDiv.appendChild(h1);\n  const closeA = document.createElement('a');\n  closeA.id = 'close';\n  closeA.setAttribute('href', '#');\n  const closeImg = document.createElement('img');\n  closeImg.setAttribute('src', _images_close_menu_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  closeImg.setAttribute('alt', 'Close');\n  closeA.appendChild(closeImg);\n  closeDiv.appendChild(closeA);\n  closeA.addEventListener('click', () => {\n    document.querySelector('#popup').style.display = 'none';\n    document.body.style.overflowY = 'scroll';\n    document.querySelector('.main').innerHTML = '';\n  });\n\n  return closeDiv;\n}\n\nfunction foodDetailsElement(food) {\n  const detailsDiv = document.createElement('div');\n\n  const img = document.createElement('img');\n  img.id = 'food-image';\n  img.setAttribute('src', food.image);\n  img.setAttribute('alt', food.title);\n  detailsDiv.appendChild(img);\n  const title = document.createElement('div');\n  const h1 = document.createElement('h1');\n  h1.classList.add('title');\n  h1.innerText = food.title;\n  title.appendChild(h1);\n  detailsDiv.appendChild(title);\n  const div = document.createElement('div');\n  div.classList.add('div');\n\n  const h21 = document.createElement('h3');\n  h21.innerHTML = `Category : <span style=\"color: blue\">${food.category}</span>`;\n  const h22 = document.createElement('h3');\n  h22.innerHTML = `Origin : <span style=\"color: blue\">${food.origin}</span>`;\n  div.appendChild(h21);\n  div.appendChild(h22);\n  detailsDiv.appendChild(div);\n\n  const recipeDiv = document.createElement('div');\n  recipeDiv.id = 'recipe-info';\n\n  const ingredients = document.createElement('div');\n  ingredients.classList.add('recipe');\n\n  const h31 = document.createElement('h3');\n  h31.innerText = 'Ingredients';\n  ingredients.appendChild(h31);\n\n  const ul1 = document.createElement('ul');\n\n  for (let i = 0; i < food.ingredients.length; i += 1) {\n    const item = food.ingredients[i];\n    const li = document.createElement('li');\n    li.textContent = item;\n    ul1.appendChild(li);\n  }\n\n  ingredients.appendChild(ul1);\n  recipeDiv.appendChild(ingredients);\n\n  const steps = document.createElement('div');\n  steps.classList.add('recipe');\n\n  const h32 = document.createElement('h3');\n  h32.innerText = 'Instructions';\n  steps.appendChild(h32);\n\n  const ol1 = document.createElement('ol');\n  for (let i = 0; i < food.steps.length; i += 1) {\n    if (food.steps[i] !== '' && food.steps[i] !== null) {\n      const item = food.steps[i];\n      const li = document.createElement('li');\n      li.textContent = item;\n      ol1.appendChild(li);\n    }\n  }\n\n  steps.appendChild(ol1);\n  recipeDiv.appendChild(steps);\n  detailsDiv.appendChild(recipeDiv);\n\n  return detailsDiv;\n}\n\nfunction commentsElement(comments) {\n  const commentsDiv = document.createElement('div');\n  const h23 = document.createElement('h2');\n  h23.id = 'comments-title';\n  if (comments === null || comments.length === undefined) {\n    h23.innerText = 'Comments (0)';\n  } else {\n    h23.innerText = `Comments (${comments.length})`;\n  }\n  commentsDiv.appendChild(h23);\n\n  const ul2 = document.createElement('ul');\n  ul2.id = 'comments-list';\n  for (let i = 0; i < comments.length; i += 1) {\n    const item = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;\n    const li = document.createElement('li');\n    li.textContent = item;\n    ul2.appendChild(li);\n  }\n  commentsDiv.appendChild(ul2);\n  return commentsDiv;\n}\n\nfunction addCommentElement(foodId) {\n  const form = document.createElement('form');\n  form.id = 'add-comment';\n  const h24 = document.createElement('h2');\n  h24.innerText = 'Add a comment';\n\n  form.appendChild(h24);\n\n  const userName = document.createElement('input');\n  userName.id = 'username';\n  userName.name = 'username';\n  userName.type = 'text';\n  userName.placeholder = 'Your name';\n  userName.required = true;\n\n  form.appendChild(userName);\n  const userComment = document.createElement('input');\n  userComment.id = 'comment';\n  userComment.type = 'text';\n  userComment.name = 'comment';\n  userComment.placeholder = 'Your insights';\n  userComment.required = true;\n\n  form.appendChild(userComment);\n  const submit = document.createElement('input');\n  submit.type = 'submit';\n  submit.id = 'submit';\n  submit.value = 'Comment';\n\n  form.appendChild(submit);\n\n  const clearForm = async () => {\n    form.elements.username.value = '';\n    form.elements.comment.value = '';\n  };\n\n  async function fillCommentsList(comments, ul2) {\n    ul2.innerHTML = '';\n    for (let i = 0; i < comments.length; i += 1) {\n      const item = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;\n      const li = document.createElement('li');\n      li.textContent = item;\n      ul2.appendChild(li);\n    }\n    document.querySelector('#comments-title').innerText = `Comments (${comments.length})`;\n  }\n\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const comments = {};\n    comments.item_id = foodId;\n    comments.username = form.elements.username.value;\n    comments.comment = form.elements.comment.value;\n    const list = document.querySelector('#comments-list');\n    (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__.addComment)(comments)\n      .then(async (data) => {\n        if (data === 201) {\n          const newComments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(foodId);\n          fillCommentsList(newComments, list);\n          clearForm();\n        }\n      });\n  });\n  return form;\n}\n\nconst loadFoodDetails = async (foodId) => {\n  const food = await (0,_foodDetails_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(foodId);\n  const comments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(foodId);\n  const popupDiv = document.createElement('div');\n  popupDiv.id = 'popup';\n  popupDiv.classList.add('popup');\n  popupDiv.appendChild(topElement(food.title));\n  const foodDescription = document.createElement('div');\n  foodDescription.classList.add('description');\n  foodDescription.appendChild(foodDetailsElement(food));\n  foodDescription.appendChild(commentsElement(comments));\n  foodDescription.appendChild(addCommentElement(foodId));\n  popupDiv.appendChild(foodDescription);\n  document.querySelector('.main').appendChild(popupDiv);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFoodDetails);\n\n//# sourceURL=webpack://capstone-project-2/./src/modules/populatePopupWindow.js?");

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