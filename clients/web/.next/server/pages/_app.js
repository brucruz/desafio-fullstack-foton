module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/GlobalStyles */ \"./src/styles/GlobalStyles.ts\");\n\n\nvar _jsxFileName = \"/Users/brunocruz/code/brucruz/desafio-fullstack-foton/clients/web/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFZSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBZ0U7QUFDN0Usc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBLGtCQURGO0FBTUQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIjtcbmltcG9ydCBHbG9iYWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9HbG9iYWxTdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcyk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/GlobalStyles.ts":
/*!************************************!*\
  !*** ./src/styles/GlobalStyles.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  @font-face {\n    font-family: 'SF Pro Display';\n    src: url(\"/fonts/SF-Pro-Display/SF-Pro-Display-Regular.ttf\");\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: 'SF Pro Display';\n    src: url(\"/fonts/SF-Pro-Display/SF-Pro-Display-Semibold.ttf\");\n    font-style: normal;\n    font-weight: 600;\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: 'SF Pro Display';\n    src: url(\"/fonts/SF-Pro-Display/SF-Pro-Display-Bold.ttf\");\n    font-style: normal;\n    font-weight: 700;\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: 'SF Pro Text';\n    src: url(\"/fonts/SF-Pro-Text/SF-Pro-Text-Regular.ttf\");\n    font-style: normal;\n    font-weight: 400;\n    font-display: swap;\n  }\n\n  :root {\n    --font-pro-display: 'SF Pro Display';\n    --font-pro-text: 'SF Pro Text';\n    --font-roboto: 'Roboto';\n  }\n\n  html {\n    font-size: 14px;\n    line-height: 1.339rem;\n    letter-spacing: 0.2px;\n  \n    * {\n      margin: 0;\n      padding: 0;\n      box-sizing: border-box;\n      outline: 0;\n    }\n\n    body {\n    background: #F2F2F2;\n    -webkit-font-smoothing: antialiased;\n\n    font-family: var(--font-pro-display);\n    }\n\n    a {\n      text-decoration: none;\n    }\n\n    button {\n      cursor: pointer;\n      border: 0;\n      background-color: transparent;\n\n      &:disabled {\n        cursor: not-allowed;\n      }\n    }\n  }\n`);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0dsb2JhbFN0eWxlcy50cz84ZjhhIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlQSxrSUFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBeEVBIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9HbG9iYWxTdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XG4gICAgc3JjOiB1cmwoXCIvZm9udHMvU0YtUHJvLURpc3BsYXkvU0YtUHJvLURpc3BsYXktUmVndWxhci50dGZcIik7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICB9XG5cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XG4gICAgc3JjOiB1cmwoXCIvZm9udHMvU0YtUHJvLURpc3BsYXkvU0YtUHJvLURpc3BsYXktU2VtaWJvbGQudHRmXCIpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIERpc3BsYXknO1xuICAgIHNyYzogdXJsKFwiL2ZvbnRzL1NGLVByby1EaXNwbGF5L1NGLVByby1EaXNwbGF5LUJvbGQudHRmXCIpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgfVxuXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnU0YgUHJvIFRleHQnO1xuICAgIHNyYzogdXJsKFwiL2ZvbnRzL1NGLVByby1UZXh0L1NGLVByby1UZXh0LVJlZ3VsYXIudHRmXCIpO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgfVxuXG4gIDpyb290IHtcbiAgICAtLWZvbnQtcHJvLWRpc3BsYXk6ICdTRiBQcm8gRGlzcGxheSc7XG4gICAgLS1mb250LXByby10ZXh0OiAnU0YgUHJvIFRleHQnO1xuICAgIC0tZm9udC1yb2JvdG86ICdSb2JvdG8nO1xuICB9XG5cbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjMzOXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIFxuICAgICoge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cblxuICAgIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcm8tZGlzcGxheSk7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/GlobalStyles.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });