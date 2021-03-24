/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected \";\".\n   ╷\n32 │         font-weight: 600;\r\n   │                    ^\n   ╵\n  src\\sass\\_navigation.scss 32:20  @import\n  src\\style.scss 2:9               root stylesheet\n    at processResult (C:\\Users\\Marharyta\\OneDrive\\Рабочий стол\\Foodkit\\node_modules\\webpack\\lib\\NormalModule.js:597:19)\n    at C:\\Users\\Marharyta\\OneDrive\\Рабочий стол\\Foodkit\\node_modules\\webpack\\lib\\NormalModule.js:691:5\n    at C:\\Users\\Marharyta\\OneDrive\\Рабочий стол\\Foodkit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\Users\\Marharyta\\OneDrive\\Рабочий стол\\Foodkit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\Users\\Marharyta\\OneDrive\\Рабочий стол\\Foodkit\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\Users\\Marharyta\\OneDrive\\Рабочий стол\\Foodkit\\node_modules\\sass-loader\\dist\\index.js:62:7\n    at Function.call$2 (C:\\Users\\Marharyta\\OneDrive\\Рабочий стол\\Foodkit\\node_modules\\sass\\sass.dart.js:91131:16)\n    at _render_closure1.call$2 (C:\\Users\\Marharyta\\OneDrive\\Рабочий стол\\Foodkit\\node_modules\\sass\\sass.dart.js:80007:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Marharyta\\OneDrive\\Рабочий стол\\Foodkit\\node_modules\\sass\\sass.dart.js:27193:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Marharyta\\OneDrive\\Рабочий стол\\Foodkit\\node_modules\\sass\\sass.dart.js:25721:19)");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");


const headline = "Welocome to the web page";
console.log(headline)

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map