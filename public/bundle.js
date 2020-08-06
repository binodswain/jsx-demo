/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./renderer/h.js":
/*!***********************!*\
  !*** ./renderer/h.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction h(nodeName, attributes) {\n  var _ref;\n\n  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    args[_key - 2] = arguments[_key];\n  }\n\n  var children = args.length ? (_ref = []).concat.apply(_ref, args) : null;\n  return {\n    nodeName: nodeName,\n    attributes: attributes,\n    children: children\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (h);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZW5kZXJlci9oLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVuZGVyZXIvaC5qcz9kZWU1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGgobm9kZU5hbWUsIGF0dHJpYnV0ZXMsIC4uLmFyZ3MpIHsgIFxuICAgIGxldCBjaGlsZHJlbiA9IGFyZ3MubGVuZ3RoID8gW10uY29uY2F0KC4uLmFyZ3MpIDogbnVsbDtcbiAgICByZXR1cm4geyBub2RlTmFtZSwgYXR0cmlidXRlcywgY2hpbGRyZW4gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./renderer/h.js\n");

/***/ }),

/***/ "./renderer/index.js":
/*!***************************!*\
  !*** ./renderer/index.js ***!
  \***************************/
/*! exports provided: h, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./renderer/h.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _h__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./renderer/render.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _render__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZW5kZXJlci9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlbmRlcmVyL2luZGV4LmpzPzFmOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGggZnJvbSAnLi9oJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuXG5leHBvcnQge1xuICAgIGgsIHJlbmRlclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./renderer/index.js\n");

/***/ }),

/***/ "./renderer/render.js":
/*!****************************!*\
  !*** ./renderer/render.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render; });\nfunction render(vnode) {\n  // Strings just convert to #text Nodes:\n  if (vnode.split) return document.createTextNode(vnode); // create a DOM element with the nodeName of our VDOM element:\n\n  var n = document.createElement(vnode.nodeName); // copy attributes onto the new node:\n\n  var a = vnode.attributes || {};\n  Object.keys(a).forEach(function (k) {\n    return n.setAttribute(k, a[k]);\n  }); // render (build) and then append child nodes:\n\n  (vnode.children || []).forEach(function (c) {\n    return n.appendChild(render(c));\n  });\n  return n;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZW5kZXJlci9yZW5kZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZW5kZXJlci9yZW5kZXIuanM/OTIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIodm5vZGUpIHsgIFxuICAgIC8vIFN0cmluZ3MganVzdCBjb252ZXJ0IHRvICN0ZXh0IE5vZGVzOlxuICAgIGlmICh2bm9kZS5zcGxpdCkgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZub2RlKTtcblxuICAgIC8vIGNyZWF0ZSBhIERPTSBlbGVtZW50IHdpdGggdGhlIG5vZGVOYW1lIG9mIG91ciBWRE9NIGVsZW1lbnQ6XG4gICAgbGV0IG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZub2RlLm5vZGVOYW1lKTtcblxuICAgIC8vIGNvcHkgYXR0cmlidXRlcyBvbnRvIHRoZSBuZXcgbm9kZTpcbiAgICBsZXQgYSA9IHZub2RlLmF0dHJpYnV0ZXMgfHwge307XG4gICAgT2JqZWN0LmtleXMoYSkuZm9yRWFjaCggayA9PiBuLnNldEF0dHJpYnV0ZShrLCBhW2tdKSApO1xuXG4gICAgLy8gcmVuZGVyIChidWlsZCkgYW5kIHRoZW4gYXBwZW5kIGNoaWxkIG5vZGVzOlxuICAgICh2bm9kZS5jaGlsZHJlbiB8fCBbXSkuZm9yRWFjaCggYyA9PiBuLmFwcGVuZENoaWxkKHJlbmRlcihjKSkgKTtcblxuICAgIHJldHVybiBuO1xufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./renderer/render.js\n");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer */ \"./renderer/index.js\");\n// import React from 'react';\n// import ReactDOM from 'react-dom';\n// import './styles/styles.scss';\n\nvar template = Object(_renderer__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(\"p\", {\n  className: \"sample\"\n}, \"Hello from react\"); // ReactDOM.render(template, document.getElementById('root'));\n\ndocument.body.appendChild(Object(_renderer__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(template));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vIGltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG5pbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuY29uc3QgdGVtcGxhdGUgPSA8cCBjbGFzc05hbWU9XCJzYW1wbGVcIj5IZWxsbyBmcm9tIHJlYWN0PC9wPjtcblxuLy8gUmVhY3RET00ucmVuZGVyKHRlbXBsYXRlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggIFxuICAgIHJlbmRlciggdGVtcGxhdGUgKVxuKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });