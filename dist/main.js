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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"summonContactPage\": () => (/* binding */ summonContactPage)\n/* harmony export */ });\nfunction summonContactPage(){\r\n    const contactContainer = document.createElement('div');\r\n    contactContainer.classList.add(\"contact-page\");\r\n\r\n    const line = document.createElement('h4');\r\n    line.textContent = (\"कोनोहा नगर , फकौली बाज़ार\")\r\n    contactContainer.appendChild(line);\r\n\r\n    const para = document.createElement('p');\r\n    para.textContent = (\"वहां एक ही खाने की दुकान है, आओगे तो पता चल जायेगा। \")\r\n    contactContainer.appendChild(para);\r\n\r\n    const contentDiv = document.getElementById('content');\r\n    contentDiv.appendChild(contactContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footerPrakatHoo\": () => (/* binding */ footerPrakatHoo)\n/* harmony export */ });\n\r\nfunction footerPrakatHoo(){\r\n    const footer = document.createElement('footer');\r\n\r\n    footer.textContent=(\"Made by hokageCV\");\r\n\r\n    const contentDiv = document.getElementById('content');\r\n    contentDiv.appendChild(footer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"summonHomePage\": () => (/* binding */ summonHomePage)\n/* harmony export */ });\n\r\nfunction summonHomePage(){\r\n    const homePageContainer = document.createElement('div');\r\n    homePageContainer.classList.add(\"homePage\");\r\n\r\n    const tagline = document.createElement('h2');\r\n    tagline.textContent = (\"Enjoy Classic Indian Snacks\");\r\n    homePageContainer.appendChild(tagline);\r\n    \r\n\r\n    const copyWrite = document.createElement('p');\r\n    copyWrite.textContent = (\"We have food from several Indian cusines\");\r\n    homePageContainer.appendChild(copyWrite);\r\n\r\n    const contentDiv = document.getElementById('content');\r\n    contentDiv.appendChild(homePageContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ \"./src/navbar.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst contentDiv = document.getElementById('content');\r\n\r\n\r\nfunction homePageBanao(){\r\n    contentDiv.replaceChildren();\r\n    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.navBarPrakatHoo)();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.summonHomePage)();\r\n    (0,_footer_js__WEBPACK_IMPORTED_MODULE_4__.footerPrakatHoo)();\r\n}\r\nfunction menuPageBanao(){\r\n    contentDiv.replaceChildren();\r\n    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.navBarPrakatHoo)();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.summonMenuPage)();\r\n    (0,_footer_js__WEBPACK_IMPORTED_MODULE_4__.footerPrakatHoo)();\r\n}\r\nfunction contactPageBanao(){\r\n    contentDiv.replaceChildren();\r\n    (0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.navBarPrakatHoo)();\r\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__.summonContactPage)();\r\n    (0,_footer_js__WEBPACK_IMPORTED_MODULE_4__.footerPrakatHoo)();    \r\n}\r\n\r\nhomePageBanao();\r\n\r\ndocument.addEventListener(\"click\", (e) => {\r\n    const target = e.target.textContent;\r\n  \r\n    if (target === \"HOME\") homePageBanao();\r\n    if (target === \"MENU\") menuPageBanao();\r\n    if (target === \"CONTACT\") contactPageBanao();\r\n  });\r\n\r\n\r\nconsole.log( \" નાશ્તો કરવા હાલો \" );\n\n//# sourceURL=webpack://Restaurant_Page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"summonMenuPage\": () => (/* binding */ summonMenuPage)\n/* harmony export */ });\nconst menu = [\r\n    {\r\n        name: \"छास\",\r\n        description: \"One of the best drinks in the Universe\",\r\n        price: \"₹ 10/-\",\r\n    },\r\n    {\r\n        name: \"दाल बाटी\",\r\n        description: \"Oh, uh, this is my Doc, Uncle, Brown. You're George McFly. Um, well it's a delorean, right? Wait a minute, wait a minute, Doc, are you telling me that you built a time machine out of a delorean. Who do you think, the Libyans.\",\r\n        price: \"₹ 120/-\",\r\n    },\r\n    {\r\n        name: \"लिट्टी चोखा\",\r\n        description: \"Which one's your pop? No no no this sucker's electrical, but I need a nuclear reaction to generate the one point twenty-one gigawatts of electricity that I need. He's a very strange young man. When could weathermen predict the weather, let alone the future. Right, I got it.\",\r\n        price: \"₹ 60/-\",\r\n    },\r\n    {\r\n        name: \"डोसा\",\r\n        description: \"Cambrian explosion at the edge of forever vanquish the impossible not a sunrise but a galaxyrise kindling the energy hidden in matter courage of our questions? Rich in heavy atoms concept of the number one how far away Drake Equation dream of the mind's eye citizens of distant epochs? The only home we've ever known Euclid venture bits of moving fluff Sea of Tranquility bits of moving fluff and billions upon billions upon billions upon billions upon billions upon billions upon billions.\",\r\n        price: \"₹40/-\",\r\n    },\r\n    {\r\n        name: \"खिचड़ी, कढ़ी, बाजरा रोटी\",\r\n        description: \"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.\",\r\n        price: \"₹60/-\",\r\n    },\r\n    {\r\n        name: \"oats\",\r\n        description: \"Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. \",\r\n        price: \"₹30/-\",\r\n    },\r\n];\r\n\r\n// //first try\r\nfunction summonMenuPage(){\r\n    let menuContainer = document.createElement('div');\r\n    menuContainer.classList.add(\"menu-container\");\r\n\r\n    menu.forEach( (khavanu)=>{\r\n        let menuItem = document.createElement('div');\r\n        menuItem.classList.add(\"menu-item\");\r\n\r\n        let name = document.createElement('h6');\r\n        name.textContent = (khavanu.name);\r\n        menuItem.appendChild(name);\r\n\r\n        let desc = document.createElement('p');\r\n        desc.textContent = (khavanu.description);\r\n        menuItem.appendChild(desc);\r\n\r\n        let price = document.createElement('p');\r\n        price.textContent = (khavanu.price);\r\n        price.classList.add('price');\r\n        menuItem.appendChild(price);\r\n\r\n\r\n        menuContainer.appendChild(menuItem);\r\n\r\n    })\r\n    const contentDiv = document.getElementById('content');\r\n    contentDiv.appendChild(menuContainer);\r\n\r\n}\r\n\r\n\r\n// // second try\r\n// function summonMenuPage(){\r\n//     let menuContainer = document.createElement('div');\r\n//     menuContainer.classList.add(\"menu-container\");\r\n\r\n//     menuContainer.forEach( (khavanu)=>{\r\n        \r\n//         for( let key in khavanu){\r\n//             let menuItem = document.createElement('div');\r\n//             menuItem.classList.add(\"menu-item\");\r\n\r\n//             let name = document.createElement('h6');\r\n//             name.textContent = (khavanu[key]);\r\n//             menuItem.appendChild(name);\r\n\r\n//             let desc = document.createElement('p');\r\n//             desc.textContent = (khavanu[key]);\r\n//             menuItem.appendChild(desc);\r\n\r\n//             let price = document.createElement('p');\r\n//             price.textContent = (khavanu[key]);\r\n//             menuItem.appendChild(price);\r\n            \r\n\r\n//             menuContainer.appendChild(menuItem);\r\n//         }\r\n\r\n//     });\r\n//     const contentDiv = document.getElementById('content');\r\n//     contentDiv.appendChild(menuContainer);\r\n\r\n// }\r\n\r\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navBarPrakatHoo\": () => (/* binding */ navBarPrakatHoo)\n/* harmony export */ });\n// import { contentDiv } from \"./index.js\";\r\n\r\nfunction navBarPrakatHoo(){\r\n    const navDiv = document.createElement('nav');\r\n    navDiv.classList.add(\"navbar\");\r\n\r\n    // display board\r\n    const heading = document.createElement('h4');\r\n    const textNode = document.createTextNode(\"નાશ્તો\");\r\n\r\n    heading.appendChild(textNode);\r\n    navDiv.appendChild(heading);\r\n\r\n    // menu buttons\r\n    const navBtnDiv = document.createElement('div');\r\n    navBtnDiv.classList.add(\"navBtn-container\");\r\n\r\n    const homeBtn =document.createElement('a');\r\n    homeBtn.textContent = \"HOME\";\r\n    navBtnDiv.appendChild(homeBtn);\r\n\r\n    const menuBtn =document.createElement('a');\r\n    menuBtn.textContent = \"MENU\";\r\n    navBtnDiv.appendChild(menuBtn);\r\n\r\n    const contactBtn =document.createElement('a');\r\n    contactBtn.textContent = \"CONTACT\";\r\n    navBtnDiv.appendChild(contactBtn);\r\n\r\n    navDiv.appendChild(navBtnDiv);\r\n\r\n    const contentDiv = document.getElementById('content');\r\n    contentDiv.appendChild(navDiv);\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Restaurant_Page/./src/navbar.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;