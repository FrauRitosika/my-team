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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/stolzl_medium.otf */ \"./src/fonts/stolzl_medium.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! fonts/stolzl_regular.otf */ \"./src/fonts/stolzl_regular.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Verdana.ttf */ \"./src/fonts/Verdana.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./image/exclamation_mark.svg */ \"./src/image/exclamation_mark.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./image/information.svg */ \"./src/image/information.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n   font-family: 'Stolzl';\n   font-style: bold;\n   font-weight: 500;\n   src: local('Stolzl'),\n     url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('opentype')\n }\n \n @font-face {\n   font-family: 'Stolzl';\n   font-style: normal;\n   font-weight: 400;\n   src: local('Stolzl'),\n     url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('opentype')\n }\n\n @font-face {\n   font-family: 'Verdana';\n   font-style: normal;\n   font-weight: 400;\n   src: local('Verdana'),\n     url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('opentype')\n }\n\n.page {\n    display: block;\n    margin: 0;\n    padding: 0;\n    min-width: 100%;\n    min-height: 100%;\n    background: rgba(243, 248, 252, 1);\n    background-repeat: no-repeat;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n  }\n\n  .page-content {\n   width: 100%;\n    max-width: 1090px;\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n.page-content__title {\n   margin-bottom: 24px;\n   margin-left: 40px;\n   font-family: Stolzl;\n   font-size: 1.5em;\n   font-weight: 500;\n}\n\n .dashboard__list {\n   width: 100%;\n    padding: 0;\n    margin: 0;\n    flex-wrap: wrap;\n    display: flex;\n    gap: 20px;\n    list-style: none;\n    align-items: center;\n }\n\n .dashboard__title-container {\n   display: flex;\n   gap: 8px;\n   text-align: center;\n }\n\n .dashboard__title {\n   margin: 0;\n   padding: 0;\n   font-family: 'Stolzl';\n   font-size: 1em;\n   font-weight: 500;\n }\n\n .dashboard__item {\n    margin: 0;\n    padding: 40px;\n    height: 280px;\n    box-sizing: border-box;\n    background-color: rgba(255, 255, 255, 1);\n    box-shadow: 0px 4px 4px -2px rgba(24, 39, 75, 0.04), 0px 2px 4px -2px rgba(24, 39, 75, 0.06);\n    border-radius: 40px;\n }\n\n .legend__title {\n   margin: 0;\n   font-family: 'Stolzl';\n   font-size: 0.875em;\n   font-weight: 500;\n   color: rgba(0, 0, 0, 1);\n }\n\n .legend__list {\n   --graph-color: #B6D4ED;\n   list-style: none;\n   padding: 0;\n   margin: 0;\n }\n\n .training-progress-graph {\n   position: relative;\n   display: flex;\n   gap: 20px;\n   align-items: center;\n }\n\n .training-progress-graph__result {\n   position: absolute;\n   top: 60px;\n   left: 44px;\n   font-weight: 400;\n   font-size: 2em;\n   font-family: Verdana, Geneva, Tahoma, sans-serif;\n   color: rgba(0, 0, 0, 1);\n }\n\n .training-progress-graph__item {\n   margin-top: 8px;\n   display: flex;\n   align-items: center;\n   width: 183px;\n   font-size: 0.875em;\n   font-weight: 400;\n   font-family: Verdana, Geneva, Tahoma, sans-serif;\n   line-height: 1.4;\n   color: rgba(0, 0, 0, 1);\n }\n\n .training-progress-graph__item::before {\n   content: '';\n   position: relative;\n   display: block;\n   margin-right: 8px;\n   width: 8px;\n   height: 8px;\n   border-radius: 50%;\n   background-color: var(--graph-color);\n }\n\n .training-progress-graph__item-percent {\n   margin-left: auto;\n }\n\n .training-progress-graph__item-count {\n   margin-left: 4px;\n }\n\n .training-progress-graph__item-count {\n   opacity: 0.5;\n }\n\n .dashboard__graph {\n   margin-top: 20px;\n   width: 100%;\n }\n\n .employee-progress-graph {\n   width: 100%;\n   position: relative;\n }\n\n .employee-progress-graph__content {\n   display: block;\n   margin: 0 auto;\n }\n\n .employee-progress-graph__result {\n   position: absolute;\n   top: 70px;\n   left: 50%;\n   transform: translateX(-50%);\n   font-weight: 400;\n   font-size: 1.75em;\n   font-family: Verdana, Geneva, Tahoma, sans-serif;\n   color: rgba(0, 0, 0, 1);\n   text-align: center;\n }\n\n .employee-progress-graph__text {\n   font-weight: 400;\n   font-size: 0.875em;\n   font-family: Verdana, Geneva, Tahoma, sans-serif;\n   color: rgba(0, 0, 0, 1);\n }\n\n .employee-progress-graph__text-container {\n   margin-top: 10px;\n   text-align: center;\n   max-width: 186px;\n   margin: 20px auto;\n }\n\n .warnings-graph__list {\n   list-style: none;\n   padding: 0;\n   margin: 0;\n }\n\n .warnings-graph__item-info {\n   font-weight: 400;\n   font-size: 0.75em;\n   font-family: Verdana, Geneva, Tahoma, sans-serif;\n   color: rgba(0, 0, 0, 1);\n }\n\n .warnings-graph__item {\n   margin-top: 12px;\n   display: flex;\n   gap: 6px;\n   border: rgba(231, 241, 249, 1) solid 1px;\n   border-radius: 8px;\n   padding: 4px 11px;\n }\n\n .warnings-graph__item::before {\n   content: '';\n   position: relative;\n   display: block;\n   background-color: rgba(236, 19, 61, 1);\n   width: 16px;\n   height: 16px;\n   border-radius: 50%;\n   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n   background-repeat: no-repeat;\n   background-position: center;\n   background-size: 2px;\n }\n\n .text-info {\n   font-size: 0.875em;\n   font-weight: 400;\n   font-family: Verdana, Geneva, Tahoma, sans-serif;\n   line-height: 1.4;\n   color: rgba(0, 0, 0, 1);\n }\n\n .icon-info {\n   width: 16px;\n   height: 16px;\n   background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n   background-repeat: no-repeat;\n   background-size: contain;\n   cursor: pointer;\n }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-team/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-team/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://my-team/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-team/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = `<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n    <title>Моя команда</title>\n</head>\n\n<body class=\"page\">\n    <main class=\"page-content\">\n        <div class=\"page-content__main container\">\n            <h1 class=\"page-content__title\">Моя команда</h1>\n            <div class=\"dashboard\">\n                <ul class=\"dashboard__list\">\n                    <li class=\"dashboard__item\">\n                        <div class=\"dashboard__title-container\">\n                            <h2 class=\"dashboard__title\">Обученность команды</h2>\n                            <div class=\"icon-info\"></div>\n                        </div>\n                        <div class=\"dashboard__graph\">\n                            <div class=\"training-progress-graph js-training-progress-graph\">\n                                <canvas id=\"trainingProgressGraph\" width=\"160\" height=\"160\"></canvas>\n                                <span class=\"training-progress-graph__result\"></span>\n                                <div class=\"legend\">\n                                    <h3 class=\"legend__title\">Курсы и траектории</h3>\n                                    <ul class=\"legend__list js-training-progress-graph__list\"> </ul>\n                                </div>\n                                <template id=\"statusItem\">\n                    <li class=\"training-progress-graph__item  js-training-progress-graph__item\">\n                        <span class=\"training-progress-graph__item-name js-training-progress-graph__item-name\"></span>\n                        <span\n                            class=\"training-progress-graph__item-percent js-training-progress-graph__item-percent\"></span>\n                        <span class=\"training-progress-graph__item-count js-training-progress-graph__item-count\"></span>\n                    </li>\n                    </template>\n            </div>\n        </div>\n        </li>\n        <li class=\"dashboard__item\">\n            <div class=\"dashboard__title-container\">\n                <h2 class=\"dashboard__title\">Прогресс сотрудников</h2>\n                <div class=\"icon-info\"></div>\n            </div>\n            <div class=\"dashboard__graph\">\n                <div class=\"employee-progress-graph js-employee-progress-graph\">\n                    <canvas class=\"employee-progress-graph__content\" id=\"employeeProgressGraph\" width=\"200\"\n                        height=\"100\"></canvas>\n                    <div class=\"employee-progress-graph__text-container\">\n                        <span class=\"employee-progress-graph__text\">сотрудников завершили обучение</span>\n                    </div>\n                    <div class=\"employee-progress-graph__result\">\n                        <span class=\"js-employee-progress__result-text\"></span>\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li class=\"dashboard__item\">\n            <h2 class=\"dashboard__title\">Обратите внимание</h2>\n            <div class=\"dashboard__graph\">\n                <div class=\"js-warnings-graph\">\n                    <ul class=\"warnings-graph__list js-warnings-graph__list\"></ul>\n                    <template id=\"warningItem\">\n        <li class=\"warnings-graph__item js-warnings-item\">\n            <span class=\"warnings-graph__item-info js-warnings-item-text\"></span>\n        </li>\n        </template>\n        </div>\n        </div>\n        </li>\n        </ul>\n        </div>\n        </div>\n    </main>\n</body>\n\n</html>`;\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://my-team/./src/index.html?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-team/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-team/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-team/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-team/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-team/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-team/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-team/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dashboard/employeeProgress/employee-progress-data.js":
/*!******************************************************************!*\
  !*** ./src/dashboard/employeeProgress/employee-progress-data.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   employeeProgress: () => (/* binding */ employeeProgress)\n/* harmony export */ });\n/* harmony import */ var _team_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../team-data.js */ \"./src/team-data.js\");\n\n\nconst employeeProgress = {\n    total: 0,\n    completed: 0\n};\n\nemployeeProgress.total = _team_data_js__WEBPACK_IMPORTED_MODULE_0__.teamTrainingInfo.employeeTrainingProgress.length ?? 0;\nemployeeProgress.completed = _team_data_js__WEBPACK_IMPORTED_MODULE_0__.teamTrainingInfo.employeeTrainingProgress.filter((employee => \n    (employee.assignedСourses.filter(course => course.progressStatus === 'COMPLETED').length === employee.assignedСourses.length)\n)).length;\n\n\n\n//# sourceURL=webpack://my-team/./src/dashboard/employeeProgress/employee-progress-data.js?");

/***/ }),

/***/ "./src/dashboard/employeeProgress/employee-progress-graph.js":
/*!*******************************************************************!*\
  !*** ./src/dashboard/employeeProgress/employee-progress-graph.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _employee_progress_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-progress-data.js */ \"./src/dashboard/employeeProgress/employee-progress-data.js\");\n\n\nconst employeeProgressGraph = document.querySelector('.js-employee-progress-graph');\nemployeeProgressGraph.querySelector('.js-employee-progress__result-text').textContent = `${_employee_progress_data_js__WEBPACK_IMPORTED_MODULE_0__.employeeProgress.completed}/${_employee_progress_data_js__WEBPACK_IMPORTED_MODULE_0__.employeeProgress.total}`;\n\nconst completedPersent = _employee_progress_data_js__WEBPACK_IMPORTED_MODULE_0__.employeeProgress.total && _employee_progress_data_js__WEBPACK_IMPORTED_MODULE_0__.employeeProgress.completed ? _employee_progress_data_js__WEBPACK_IMPORTED_MODULE_0__.employeeProgress.completed * 100 / _employee_progress_data_js__WEBPACK_IMPORTED_MODULE_0__.employeeProgress.total : 0;\n\ndrawdGraph('employeeProgressGraph', completedPersent);\n\nfunction drawdGraph(canvasId, completedPercent) {\n    const canvas = document.getElementById(canvasId);\n    const ctx = canvas.getContext('2d');\n    const radius = Math.min(canvas.width / 2, canvas.height);\n    let startAngle = Math.PI;\n\n\n    ctx.beginPath();\n    ctx.moveTo(canvas.width / 2, canvas.height);\n    ctx.arc(canvas.width / 2, canvas.height, radius, startAngle, startAngle + Math.PI);\n    ctx.closePath();\n    ctx.fillStyle = '#E7F1F9';\n    ctx.fill();\n\n\n    const sliceAngle = completedPercent * Math.PI / 100;\n    ctx.beginPath();\n    ctx.moveTo(canvas.width / 2, canvas.height);\n    ctx.arc(canvas.width / 2, canvas.height, radius, startAngle, startAngle + sliceAngle);\n    ctx.closePath();\n    ctx.fillStyle = '#E9841D';\n    ctx.fill();\n\n    ctx.beginPath();\n    ctx.moveTo(canvas.width / 2, canvas.height);\n    ctx.arc(canvas.width / 2, canvas.height, radius*0.8, startAngle, startAngle + Math.PI);\n    ctx.closePath();\n    ctx.fillStyle = 'white';\n    ctx.fill();\n}\n\n//# sourceURL=webpack://my-team/./src/dashboard/employeeProgress/employee-progress-graph.js?");

/***/ }),

/***/ "./src/dashboard/teamProgress/team-progress-data.js":
/*!**********************************************************!*\
  !*** ./src/dashboard/teamProgress/team-progress-data.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trainingProgress: () => (/* binding */ trainingProgress)\n/* harmony export */ });\n/* harmony import */ var _team_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../team-data.js */ \"./src/team-data.js\");\n\n\nconst trainingProgress = {\n    courseTotal: 0,\n    courseStatus: {}\n};\n\n_team_data_js__WEBPACK_IMPORTED_MODULE_0__.teamTrainingInfo.employeeTrainingProgress.forEach(employee => {\n    employee.assignedСourses.forEach(course => {\n        trainingProgress.courseTotal = trainingProgress.courseTotal + 1;\n        trainingProgress.courseStatus[course.progressStatus] = (trainingProgress.courseStatus[course?.progressStatus] ?? 0) + 1;\n    });\n});\n\n\n\n//# sourceURL=webpack://my-team/./src/dashboard/teamProgress/team-progress-data.js?");

/***/ }),

/***/ "./src/dashboard/teamProgress/team-progress-graph.js":
/*!***********************************************************!*\
  !*** ./src/dashboard/teamProgress/team-progress-graph.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _team_progress_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-progress-data.js */ \"./src/dashboard/teamProgress/team-progress-data.js\");\n\n\nconst DISPLAY_PROGRESS_STATUS = [\n    {\n        status: 'COMPLETED',\n        statusDisplayName: 'Завершено',\n        statusColor: '#00A75C'\n    },\n    {\n        status: 'IN_PROGRESS',\n        statusDisplayName: 'В процессе',\n        statusColor: '#E9841D'\n    },\n    {\n        status: 'FAILED',\n        statusDisplayName: 'Не пройдено',\n        statusColor: '#EC133D'\n    },\n    {\n        status: 'NOT_STARTED',\n        statusDisplayName: 'Не начато',\n        statusColor: '#B6D4ED'\n    }\n];\n\nconst trainingProgressGraph = document.querySelector('.js-training-progress-graph');\nconst segmentData = DISPLAY_PROGRESS_STATUS.map(status => {\n    return {\n        count: _team_progress_data_js__WEBPACK_IMPORTED_MODULE_0__.trainingProgress.courseStatus[status.status] ?? 0,\n        percent: (_team_progress_data_js__WEBPACK_IMPORTED_MODULE_0__.trainingProgress.courseStatus[status.status] ?? 0) * 100 / _team_progress_data_js__WEBPACK_IMPORTED_MODULE_0__.trainingProgress.courseTotal,\n        displayName: status.statusDisplayName,\n        name: status.status,\n        color: status.statusColor\n    };\n});\n\nconst statusList = trainingProgressGraph.querySelector('.js-training-progress-graph__list');\nconst templateStatusItem = document.getElementById('statusItem');\nfillWarningList(segmentData);\n\ndrawdGraph('trainingProgressGraph', segmentData);\n\ntrainingProgressGraph.querySelector('.training-progress-graph__result').textContent = `${segmentData.find(status => status.name === 'COMPLETED').percent ?? 0}%`;\n\nfunction fillWarningList(data) {\n    data.forEach(status => {\n        const statusItem = document.importNode(templateStatusItem.content, true);\n        statusItem.querySelector('.js-training-progress-graph__item-name').textContent = status.displayName;\n        statusItem.querySelector('.js-training-progress-graph__item-count').textContent = `(${status.count})`;\n        statusItem.querySelector('.js-training-progress-graph__item-percent').textContent = `${status.percent}%`;\n        statusItem.querySelector('.js-training-progress-graph__item').style.setProperty('--graph-color', status.color);\n        statusList.appendChild(statusItem);\n    });\n}\n\nfunction drawdGraph(canvasId, data) {\n    const canvas = document.getElementById(canvasId);\n    const ctx = canvas.getContext('2d');\n    const radius = Math.min(canvas.width, canvas.height) / 2;\n    let startAngle = (2 * Math.PI) * 3 / 4;\n\n    data.forEach(status => {\n        const sliceAngle = status.percent * (2 * Math.PI) / 100;\n        ctx.beginPath();\n        ctx.moveTo(canvas.width / 2, canvas.height / 2);\n        ctx.arc(canvas.width / 2, canvas.height / 2, radius, startAngle, startAngle + sliceAngle);\n        ctx.closePath();\n        ctx.fillStyle = status.color;\n        ctx.fill();\n        startAngle += sliceAngle;\n    });\n\n    ctx.beginPath();\n    ctx.arc(canvas.width / 2, canvas.height / 2, radius * 0.8, 0, 2 * Math.PI);\n    ctx.fillStyle = \"white\";\n    ctx.fill();\n}\n\n//# sourceURL=webpack://my-team/./src/dashboard/teamProgress/team-progress-graph.js?");

/***/ }),

/***/ "./src/dashboard/warnings/warnings-data.js":
/*!*************************************************!*\
  !*** ./src/dashboard/warnings/warnings-data.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   warningList: () => (/* binding */ warningList)\n/* harmony export */ });\n/* harmony import */ var _team_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../team-data.js */ \"./src/team-data.js\");\n\n\nconst warningList = {};\n\n_team_data_js__WEBPACK_IMPORTED_MODULE_0__.teamTrainingInfo.warningInfo?.forEach(warning => {\n    warningList[warning.warningType] = warning.employees?.length ?? 0;\n});\n\n\n\n//# sourceURL=webpack://my-team/./src/dashboard/warnings/warnings-data.js?");

/***/ }),

/***/ "./src/dashboard/warnings/warnings-graph.js":
/*!**************************************************!*\
  !*** ./src/dashboard/warnings/warnings-graph.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warnings_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warnings-data.js */ \"./src/dashboard/warnings/warnings-data.js\");\n\n\nconst DISPLAY_WARNING_TYPES = [\n    {\n        type: 'failedTrainingWarning',\n        displayMessage: 'Не прошли обучение'\n    },\n    {\n        type: 'notLoginWarning',\n        displayMessage: 'Не заходили на портал'\n    },\n    {\n        type: 'notLoginTwoWeeksWarning',\n        displayMessage: 'Не были более 2 недель'\n    }\n];\n\nconst warningGraph = document.querySelector('.js-warnings-graph');\nconst warningListElement = warningGraph.querySelector('.js-warnings-graph__list');\nconst warningTemplate = document.getElementById('warningItem');\n\nlet isEptyGraph = true;\n\nDISPLAY_WARNING_TYPES.forEach(warningType => {\n    const count = _warnings_data_js__WEBPACK_IMPORTED_MODULE_0__.warningList[warningType.type] ?? 0;\n\n    if (count) {\n        const warningElement = document.importNode(warningTemplate.content, true);\n        warningElement.querySelector('.js-warnings-item-text').textContent = `${warningType.displayMessage}: ${count}`;\n        warningListElement.appendChild(warningElement);\n        isEptyGraph = false;\n    }\n});\n\nif (isEptyGraph) {\n    const messageElement = document.createElement('p');\n    messageElement.textContent = 'Проблем не обнаружено';\n    messageElement.classList.add('text-info');\n    warningGraph.appendChild(messageElement);\n}\n\n\n//# sourceURL=webpack://my-team/./src/dashboard/warnings/warnings-graph.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.html */ \"./src/index.html\");\n/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles.css */ \"./src/styles.css\");\n/* harmony import */ var _dashboard_teamProgress_team_progress_graph_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/teamProgress/team-progress-graph.js */ \"./src/dashboard/teamProgress/team-progress-graph.js\");\n/* harmony import */ var _dashboard_employeeProgress_employee_progress_graph_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/employeeProgress/employee-progress-graph.js */ \"./src/dashboard/employeeProgress/employee-progress-graph.js\");\n/* harmony import */ var _dashboard_warnings_warnings_graph_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/warnings/warnings-graph.js */ \"./src/dashboard/warnings/warnings-graph.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://my-team/./src/index.js?");

/***/ }),

/***/ "./src/team-data.js":
/*!**************************!*\
  !*** ./src/team-data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   teamTrainingInfo: () => (/* binding */ teamTrainingInfo)\n/* harmony export */ });\nconst teamTrainingInfo = {\n    employeeTrainingProgress: [\n        {\n            employee: 'employee1',\n            assignedСourses: [\n                {\n                    courseName: 'course1',\n                    progressStatus: 'COMPLETED'\n                },\n                {\n                    courseName: 'course2',\n                    progressStatus: 'COMPLETED'\n                },\n            ]\n        },\n        {\n            employee: 'employee2',\n            assignedСourses: [\n                {\n                    courseName: 'course1',\n                    progressStatus: 'COMPLETED'\n                },\n                {\n                    courseName: 'course2',\n                    progressStatus: 'COMPLETED'\n                },\n            ]\n        },\n        {\n            employee: 'employee3',\n            assignedСourses: [\n                {\n                    courseName: 'course1',\n                    progressStatus: 'COMPLETED'\n                },\n                {\n                    courseName: 'course2',\n                    progressStatus: 'NOT_STARTED'\n                },\n            ]\n        },\n        {\n            employee: 'employee4',\n            assignedСourses: [\n                {\n                    courseName: 'course1',\n                    progressStatus: 'COMPLETED'\n                },\n                {\n                    courseName: 'course2',\n                    progressStatus: 'IN_PROGRESS'\n                },\n            ]\n        },\n        {\n            employee: 'employee5',\n            assignedСourses: [\n                {\n                    courseName: 'course1',\n                    progressStatus: 'FAILED'\n                },\n                {\n                    courseName: 'course2',\n                    progressStatus: 'COMPLETED'\n                },\n            ]\n        }\n    ],\n    warningInfo: [\n        {\n            warningType: 'failedTrainingWarning',\n            employees: ['employee5']\n        },\n        {\n            warningType: 'notLoginWarning',\n            employees: ['employee3']\n        },\n        {\n            warningType: 'notLoginTwoWeeksWarning',\n            employees: ['employee3']\n        }\n    ]\n};\n\n\n\n//# sourceURL=webpack://my-team/./src/team-data.js?");

/***/ }),

/***/ "./src/fonts/Verdana.ttf":
/*!*******************************!*\
  !*** ./src/fonts/Verdana.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Verdana.ttf\";\n\n//# sourceURL=webpack://my-team/./src/fonts/Verdana.ttf?");

/***/ }),

/***/ "./src/fonts/stolzl_medium.otf":
/*!*************************************!*\
  !*** ./src/fonts/stolzl_medium.otf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/stolzl_medium.otf\";\n\n//# sourceURL=webpack://my-team/./src/fonts/stolzl_medium.otf?");

/***/ }),

/***/ "./src/fonts/stolzl_regular.otf":
/*!**************************************!*\
  !*** ./src/fonts/stolzl_regular.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/stolzl_regular.otf\";\n\n//# sourceURL=webpack://my-team/./src/fonts/stolzl_regular.otf?");

/***/ }),

/***/ "./src/image/exclamation_mark.svg":
/*!****************************************!*\
  !*** ./src/image/exclamation_mark.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/exclamation_mark.614d8de9f26e34329e2e.svg\";\n\n//# sourceURL=webpack://my-team/./src/image/exclamation_mark.svg?");

/***/ }),

/***/ "./src/image/information.svg":
/*!***********************************!*\
  !*** ./src/image/information.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"icons/information.b8a9253d2310f34557dc.svg\";\n\n//# sourceURL=webpack://my-team/./src/image/information.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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