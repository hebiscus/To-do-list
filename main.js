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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: 'Cairo', sans-serif;\\n}\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tvertical-align: baseline;\\n}\\n\\n#content {\\n    height: 100vh;\\n    width: 100vw;\\n    display: grid;\\n    grid-template-columns: 12% 5% 70% 2% 1fr;\\n    grid-template-rows: 11% 1% 70% 1fr;\\n    background-color: #878fff;\\n    gap: 2rem\\n}\\n\\n.header {\\n    display: flex;\\n    flex-direction: row-reverse;\\n    align-items: center;\\n    grid-column: 2 / 5;\\n    grid-row: 1;\\n    background-color: white;\\n    border-radius: 0% 0% 20px 20px;\\n    border-right: 5px solid;\\n    border-left: 5px solid;\\n    border-bottom: 5px solid;\\n}\\n\\n.headerText {\\n    font-size: 6rem;\\n    font-weight: 600;\\n}\\n\\n.sidebar {\\n    display: flex;\\n    flex-direction: column;\\n    grid-column: 1 / 3;\\n    grid-row: 2 / 5;\\n    background-color: white;\\n    border-radius: 0% 20px 20px 0%;\\n    border-right: 5px solid;\\n    border-top: 5px solid;;\\n}\\n\\n.addButton {\\n    align-self: center;\\n}\\n\\n.tasks-space {\\n    grid-column: 3 / 4;\\n    grid-row: 3 / 4;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: white;\\n    border-radius: 20px;\\n    border: 5px solid;\\n}\\n\\n.top-section {\\n  width: 100%;\\n  height: 20%;\\n  display: grid;\\n  grid-template-columns: 65% 12% 12% 12%;\\n  grid-template-rows: 1fr 1fr;\\n  text-align: center;\\n}\\n\\n.sort-by {\\n  display: flex;\\n  grid-column: 1;\\n  grid-row: 1;\\n  align-items: center;\\n  font-size: 2.2rem;\\n}\\n\\n.sort-date {\\n  font-size: 2.2rem;\\n}\\n\\n.sort-priority {\\n  font-size: 2.2rem;\\n}\\n\\n.priority-headline {\\n  grid-column: 2;\\n  grid-row: 2;\\n  align-self: end;\\n  font-size: 2rem;\\n}\\n\\n.due-headline {\\n  grid-column: 3;\\n  grid-row: 2;\\n  align-self: end;\\n  font-size: 2rem;\\n}\\n\\n.task-div {\\n  width: 100%;\\n  flex: 1;\\n}\\n\\n.task-content {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n  .modal {\\n    display: none;\\n    position: fixed; \\n    padding-top: 50px;\\n    left: 0; \\n    width: 100%;\\n    height: 100%; \\n    background-color: rgba(0, 0, 0, 0.5);\\n  }\\n  .modal-content {\\n    position: relative; \\n    background-color: white;\\n    top: 20%;\\n    padding: 20px; \\n    margin: auto; \\n    height: 30%;\\n    width: 40%;  \\n    border-radius: 20px;\\n    border: 5px solid;\\n    animation-name: animatetop;\\n    animation-duration: 0.4s\\n  }\\n  .close-btn {\\n    height: 1rem;\\n    width: 2rem;\\n    float: right; \\n    color: lightgray; \\n    font-size: 24px;  \\n    font-weight: bold;\\n  }\\n  .close-btn:hover {\\n    color: darkgray;\\n  }\\n  @-webkit-keyframes animatetop {\\n    from {top:-300px; opacity:0} \\n    to {top:0; opacity:1}\\n  }\\n  @keyframes animatetop {\\n    from {top:-300px; opacity:0}\\n    to {top:0; opacity:1}\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddTask\": () => (/* binding */ AddTask),\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n\n\nconst Task = class {\n    constructor(name, description, dueDate, priority, status) {\n        this.name = name;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.status = status;        \n    }\n\n    toggleStatus() {\n        if (this.status == \"completed\") {\n            this.status = \"notcompleted\";\n        } else {\n            this.status = \"completed\";\n        }\n    }\n}\n\nconst AddTask = {\n    render: container => {\n        const addButton = document.createElement(\"button\");\n        addButton.classList.add(\"addButton\");\n        addButton.innerText = \"Add new\";\n        addButton.addEventListener('click', AddTask.popupModal);\n        container.appendChild(addButton);\n      },\n    popupModal: function popupModal() {\n        const content = document.getElementById(\"content\");\n        const modalContainer = document.createElement(\"section\");\n        modalContainer.classList.add(\"modal\");\n        content.appendChild(modalContainer);\n        modalContainer.style.display = \"block\";\n\n        const modalContent = document.createElement(\"div\");\n        modalContent.classList.add(\"modal-content\");\n        modalContainer.appendChild(modalContent);\n\n        const closeModalButton = document.createElement(\"button\");\n        closeModalButton.classList.add(\"close-btn\");\n        \n        closeModalButton.onclick = function(){\n            modalContainer.style.display = \"none\";\n        }\n        window.onclick = function(e){\n        if(e.target == modalContainer){\n            modalContainer.style.display = \"none\";\n            \n            }\n        }\n\n        modalContent.appendChild(closeModalButton);\n\n        const modalForm = document.createElement(\"form\");\n        modalForm.classList.add(\"modalform\");\n        modalContent.appendChild(modalForm);\n\n        const formName = document.createElement(\"input\");\n        formName.classList.add(\"form-name\");\n        formName.setAttribute(\"type\", \"text\");\n        formName.setAttribute(\"placeholder\", \"Task name\");\n        modalForm.appendChild(formName);\n\n        const formDescription = document.createElement(\"input\");\n        formDescription.classList.add(\"form-description\");\n        formDescription.setAttribute(\"type\", \"text\");\n        formDescription.setAttribute(\"placeholder\", \"Description\");\n        modalForm.appendChild(formDescription);\n\n        const formDate = document.createElement(\"input\");\n        formDate.setAttribute(\"type\", \"date\");\n        formDate.classList.add(\"form-date\");\n        modalForm.appendChild(formDate);\n\n        const formPriority = document.createElement(\"select\");\n        formPriority.classList.add(\"form-priority\");\n        modalForm.appendChild(formPriority);\n\n        const lowPriority = document.createElement(\"option\");\n        lowPriority.setAttribute(\"value\", \"low priority\");\n        lowPriority.innerText = \"low priority\";\n        formPriority.appendChild(lowPriority);\n\n        const mediumPriority = document.createElement(\"option\");\n        mediumPriority.setAttribute(\"value\", \"medium priority\");\n        mediumPriority.innerText = \"medium priority\";\n        formPriority.appendChild(mediumPriority);\n\n        const highPriority = document.createElement(\"option\");\n        highPriority.setAttribute(\"value\", \"high priority\");\n        highPriority.innerText = \"high priority\";\n        formPriority.appendChild(highPriority);\n\n        const formSubmit = document.createElement(\"input\");\n        formSubmit.setAttribute(\"type\", \"submit\");\n        formSubmit.classList.add(\"form-submit\");\n        modalForm.appendChild(formSubmit);\n        formSubmit.addEventListener(\"click\", AddTask.add);\n    },\n    add: ev => {\n        ev.preventDefault();\n        let nameInput = document.querySelector('.form-name');\n        let descriptionInput = document.querySelector('.form-description');\n        let dateInput = document.querySelector('.form-date');\n        let priorityInput = document.querySelector('.form-priority');\n        \n        let name = nameInput.value;\n        let description = descriptionInput.value;\n        let dueDate = dateInput.value;\n        let priority = priorityInput.value;\n        nameInput.value = ''; //clear the form\n        descriptionInput.value = '';\n        dateInput.value = '';\n        priorityInput.value = '';\n        \n        const newTask = new Task(name, description, dueDate, priority, \"\");\n\n        //tell subscribers that a task was added\n        console.log(`TASK FORM: just taskAdded ${newTask.name}`);\n        _pubsub_js__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish('taskAdded', newTask);\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/addTask.js?");

/***/ }),

/***/ "./src/allTasks.js":
/*!*************************!*\
  !*** ./src/allTasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allTasks\": () => (/* binding */ allTasks)\n/* harmony export */ });\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask.js */ \"./src/addTask.js\");\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n\n\n\nconst allTasks = {\n  list: [],\n  render: container => {\n    const topSection = document.createElement(\"div\");\n    topSection.classList.add(\"top-section\");\n    container.appendChild(topSection);\n    const sortByDiv = document.createElement(\"div\");\n    sortByDiv.classList.add(\"sort-by\");\n    topSection.appendChild(sortByDiv);\n    const sortText1 = document.createElement(\"p\");\n    sortText1.innerText = \"Sort by:\";\n    const sortDate = document.createElement(\"button\");\n    sortDate.classList.add(\"sort-date\");\n    sortDate.innerText = \"date added\"\n    const sortText2 = document.createElement(\"p\");\n    sortText2.innerText = \"/\";\n    const sortPriority = document.createElement(\"button\");\n    sortPriority.classList.add(\"sort-priority\");\n    sortPriority.innerText = \"priority\";\n    const priorityHeadline = document.createElement(\"h3\");\n    priorityHeadline.classList.add(\"priority-headline\");\n    priorityHeadline.innerText = \"Priority\"\n    const dueHeadline = document.createElement(\"h3\");\n    dueHeadline.classList.add(\"due-headline\")\n    dueHeadline.innerText = \"Due\";\n\n    sortByDiv.append(sortText1, sortDate, sortText2, sortPriority);\n    topSection.append(priorityHeadline, dueHeadline);\n    \n    const taskDiv = document.createElement(\"div\");\n    taskDiv.classList.add(\"task-div\")\n    container.appendChild(taskDiv);\n    \n    // deleteButton.addEventListener('click', actors.actorDeleted);\n\n    //tell the pubsub controller that we want to know about any taskAdded event\n    console.log('allTasks: wants to know if a task is added');\n    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.subscribe('taskAdded', allTasks.taskAdded);\n  },\n  taskAdded: taskobject => {\n    //taskAdded event was published\n    console.log(`TASKS: I hear that ${taskobject.name} was added`);\n    let list = new Set(allTasks.list);\n    list.add(taskobject);\n    allTasks.list = Array.from(list).sort();\n\n    //tell everyone that a task has been added to the list\n    console.log('allTasks: tasksUpdated the list');\n    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__.pubsub.publish('tasksUpdated', allTasks.list);\n\n    //then the ui stuff for a new task list\n    const taskDiv= document.querySelector(\".task-div\");\n    const taskContent = document.createElement(\"div\");\n    taskContent.classList.add(\"task-content\");\n    taskDiv.appendChild(taskContent);\n\n    const statusCheckbox = document.createElement(\"input\");\n    statusCheckbox.classList.add(\"status-checkbox\");\n    statusCheckbox.setAttribute(\"type\", \"checkbox\");\n    taskContent.appendChild(statusCheckbox);\n\n    const tasknameText = document.createElement(\"p\");\n    tasknameText.classList.add(\"taskname-text\");\n    tasknameText.innerText = `${taskobject.name}`;\n    taskContent.appendChild(tasknameText);\n\n    const taskPriorityButton = document.createElement(\"button\");\n    taskPriorityButton.classList.add(\"taskpriority-button\");\n    taskPriorityButton.innerText = `${taskobject.priority}`;\n    taskContent.appendChild(taskPriorityButton);\n    \n    const taskdueDateText = document.createElement(\"p\");\n    taskdueDateText.classList.add(\"taskdate-text\");\n    taskdueDateText.innerText = `${taskobject.dueDate}`;\n    taskContent.appendChild(taskdueDateText);\n\n    const taskEdit = document.createElement(\"button\");\n    taskEdit.classList.add(\"task-edit\");\n    taskContent.appendChild(taskEdit);\n\n    const taskDelete = document.createElement(\"button\");\n    taskDelete.classList.add(\"task-delete\");\n    taskContent.appendChild(taskDelete);\n\n\n    // allTasks.list.forEach(name => {\n    //   let li = document.createElement('li');\n    //   li.innerText = name;\n    //   df.appendChild(li);\n    // });\n    // ul.appendChild(df);\n  },\n  // actorDeleted: ev => {\n  //   let item = ev.target.closest('li');\n  //   let name = item.textContent;\n  //   actors.list = actors.list.filter(nm => nm !== name);\n  //   item.parentElement.removeChild(item);\n  //   console.log(`ACTORS: actorDeleted the ${name}`);\n  //   pubsub.publish('actorDeleted', actors.list);\n  // }\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/allTasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask */ \"./src/addTask.js\");\n/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub.js */ \"./src/pubsub.js\");\n/* harmony import */ var _allTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allTasks */ \"./src/allTasks.js\");\n\n\n\n\n\n\nfunction renderTemplate() {\n    const content = document.getElementById(\"content\");\n\n    const headerDiv = document.createElement(\"div\");\n    headerDiv.classList.add(\"header\");\n    content.appendChild(headerDiv);\n\n    const headerText = document.createElement(\"h1\");\n    headerText.classList.add(\"headerText\")\n    headerText.innerText = \"Heb To-do\";\n    headerDiv.appendChild(headerText);\n\n    const sidebarDiv = document.createElement(\"div\");\n    sidebarDiv.classList.add(\"sidebar\");\n    content.appendChild(sidebarDiv);\n\n    const taskspaceDiv = document.createElement(\"div\");\n    taskspaceDiv.classList.add(\"tasks-space\");\n    content.appendChild(taskspaceDiv);\n}\n\nrenderTemplate();\n\n(function renderModules() {\n    const sidebar = document.querySelector(\".sidebar\");\n    const taskSpace = document.querySelector(\".tasks-space\");\n\n    _addTask__WEBPACK_IMPORTED_MODULE_1__.AddTask.render(sidebar);\n    _allTasks__WEBPACK_IMPORTED_MODULE_3__.allTasks.render(taskSpace);\n\n\n})();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pubsub\": () => (/* binding */ pubsub)\n/* harmony export */ });\nconst pubsub = {\n  events: {},\n  subscribe: function(eventName, func) {\n    console.log(`PUBSUB: someone just subscribed to know about ${eventName}`);\n    //add an event with a name as new or to existing list\n    this.events[eventName] = this.events[eventName] || [];\n    this.events[eventName].push(func);\n  },\n  unsubscribe: function(eventName, func) {\n    console.log(`PUBSUB: someone just Unsubscribed from ${eventName}`);\n    //remove an event function by name\n    if (this.events[eventName]) {\n      this.events[eventName] = this.events[eventName].filter(f => f !== func);\n    }\n  },\n  publish: function(eventName, data) {\n    console.log(`PUBSUB: Making a broadcast about ${eventName} with ${data}`);\n    //emit|publish|announce the event to anyone who is subscribed\n    if (this.events[eventName]) {\n      this.events[eventName].forEach(f => {\n        f(data);\n      });\n    }\n  }\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/pubsub.js?");

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