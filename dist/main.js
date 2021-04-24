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

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.scss */ \"./src/main.scss\");\n/*\r\ninput.click {\r\n    nomeAccount = value;\r\n\r\n    fetch .... {\r\n        new Account (value, tweets, )\r\n    }\r\n}    \r\n\r\n--ACCOUNT OBJECT: create the account object and a method to call the Tweet obj\r\n\r\nclasse Account {\r\nthis.name\r\nthis.tweet\r\n\r\ndisplay Name() {\r\n    .....\r\n}\r\n\r\nget Tweets() {\r\n    new TweetObj (tweet.text, tweet.image, tweet.title)\r\n}\r\n\r\n}\r\n\r\n--Tweet OBJECT: create the Tweet object and a method to display it\r\nclasse TweetObj {\r\n    this.text\r\n    this.image\r\n    this.title\r\n\r\ndisplay() {\r\n    document.query = this.text, image, title ...\r\n}\r\n\r\n}\r\n\r\n*/\n\n\n(function init() {\n  var searchBtn = document.querySelector(\".search-container__button\");\n  searchBtn.addEventListener(\"click\", searchAccount);\n})();\n\nfunction searchAccount(e) {\n  var url = \"https://api.twitter.com/2/tweets/search/recent?query=nyc\";\n  fetch(url, {\n    \"method\": \"GET\",\n    \"headers\": {\n      \"Authorization\": \"Bearer \".concat(\"AAAAAAAAAAAAAAAAAAAAADJ%2FOwEAAAAASl3tDf7%2BQpcQYZnXYcn22QJJnK4%3D3dbT0VUY82Pg84mau4YkxQyqzZbwiISYnvOwZFlkggt9yVZwtK;\")\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (body) {\n    console.log(body);\n  });\n}\n\n//# sourceURL=webpack://twitter-feed-page/./src/js/script.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://twitter-feed-page/./src/main.scss?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;