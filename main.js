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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\n// Module to create website contact page\nconst contactPage = (function () {\n\n    // Function to create website contact page.\n    function createContactPage() {\n\n        //Create page holder\n        const contactContainer = document.createElement('div');\n        contactContainer.classList.add('middleContact');\n\n        //Add Image\n        const image = document.createElement('img');\n        image.src = '/src/logo.png'\n        image.classList.add('logo');\n        contactContainer.appendChild(image);\n\n        // Add text to middle section\n        const middleText = document.createElement('div');\n        contactContainer.appendChild(middleText);\n        middleText.classList.add('middleText');\n        middleText.innerText = \"Address: 701 E Harmony Rd, Ft Collins, CO\\n Phone: (555)223-0111\\n Hours of Operation: 11AM - 10PM\"\n\n        // Append the menu container to the main content container\n        content.appendChild(contactContainer);\n\n        // Add footer\n        const footer = document.createElement('div');\n        footer.classList.add('footer');\n        content.appendChild(footer);\n    }\n\n    return { createContactPage }\n\n})();\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homepage\": () => (/* binding */ homepage)\n/* harmony export */ });\n// Module to create website homepage\nconst homepage = (function () {\n\n    const body = document.body;\n    body.style.backgroundImage = \"url('/src/b.jpg')\";\n\n    const content = document.getElementById('content')\n    const middleSection = document.createElement('div');\n\n    // Function to create website homepage.\n    function createHomepage() {\n\n        const middleSection = document.createElement('div');\n\n        // Create Middle Section and append to content\n        middleSection.classList.add('middleHome');\n        content.appendChild(middleSection);\n\n        //Add Image\n        const image = document.createElement('img');\n        image.src = '/src/logo.png'\n        image.classList.add('logo');\n        middleSection.appendChild(image);\n\n        // Add text to middle section\n        const middleText = document.createElement('div');\n        middleSection.appendChild(middleText);\n        middleText.classList.add('middleText');\n        middleText.innerText = \"Hurry in to try limited time gourmet burgers and more. With some new craves, and all of your faves, Red Robin Gourmet Burgers and Brews has options for the whole family!\"\n\n        // Add footer\n        const footer = document.createElement('div');\n        footer.classList.add('footer');\n        content.appendChild(footer);\n    }\n\n    //Function to delte current pages contents when switching tabs\n    function deletePageContents() {\n\n        content.removeChild(content.lastChild);\n        content.removeChild(content.lastChild);\n\n    }\n\n    return { createHomepage, deletePageContents, content, middleSection }\n\n})();\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n// Import module from homepage.js\n\n\n\n\n// Module for NavBar\nconst nav = (function () {\n    \n    const items = document.querySelectorAll('li');\n\n    //Create Navbar\n    const navbar = document.createElement('div');\n    navbar.classList.add('nav')\n\n    // Create UL element\n    const navLinks = document.createElement('ul');\n    navbar.appendChild(navLinks);\n\n    // Create li elements and link them to the navbar\n    const homeLink = document.createElement('li');\n    homeLink.innerText = \"Home\";\n    homeLink.addEventListener('click', function() {_homepage__WEBPACK_IMPORTED_MODULE_1__.homepage.deletePageContents(); _homepage__WEBPACK_IMPORTED_MODULE_1__.homepage.createHomepage(); })\n\n    const menuLink = document.createElement('li');\n    menuLink.innerText = \"Menu\";\n    menuLink.addEventListener('click', function() { _homepage__WEBPACK_IMPORTED_MODULE_1__.homepage.deletePageContents();  _menu__WEBPACK_IMPORTED_MODULE_2__.menuPage.createMenuPage(); })\n\n    const contactLink = document.createElement('li');\n    contactLink.innerText = \"Contact\";\n    contactLink.addEventListener('click', function() { _homepage__WEBPACK_IMPORTED_MODULE_1__.homepage.deletePageContents(); _contact__WEBPACK_IMPORTED_MODULE_0__.contactPage.createContactPage(); })\n\n    // Append li to ul\n    navLinks.appendChild(homeLink);\n    navLinks.appendChild(menuLink);\n    navLinks.appendChild(contactLink);\n\n    // Append Navbar to content div\n    _homepage__WEBPACK_IMPORTED_MODULE_1__.homepage.content.appendChild(navbar);\n\n})();\n\n// Call create homepage function from homepage.js\n_homepage__WEBPACK_IMPORTED_MODULE_1__.homepage.createHomepage();\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\n\n// Module to create website homepage\nconst menuPage = (function () {\n\n    //Array to hold the menu item divs\n    const list = [];\n\n    // Function to create website homepage.\n    function createMenuPage() {\n\n\n\n        //Create page holder\n        const menuContainer = document.createElement('div');\n        menuContainer.classList.add('menuContainer');\n\n        // Add div for item names\n        const itemNames = document.createElement('div');\n        itemNames.classList.add('itemNames');\n        menuContainer.appendChild(itemNames);\n\n        //1\n        const item1 = document.createElement('div');\n        item1.classList.add('item');\n        item1.innerText = \"Bacon Burger\";\n        itemNames.appendChild(item1);\n\n        //2\n        const item2 = document.createElement('div');\n        item2.classList.add('item');\n        item2.innerText = \"Mushroom Burger\";\n        itemNames.appendChild(item2);\n\n        //3\n        const item3 = document.createElement('div');\n        item3.classList.add('item');\n        item3.innerText = \"Banzai Burger\";\n        itemNames.appendChild(item3);\n\n        // Add text to middle section\n        const middleText = document.createElement('div');\n        menuContainer.appendChild(middleText);\n        middleText.classList.add('menuContainerInner');\n\n        // Loop to create specified number of menu items\n        for (let i = 0; i < 3; i++) {\n            let menuItem = document.createElement('div');\n            menuItem.classList.add('menuItems');\n            middleText.appendChild(menuItem);\n            list[i] = menuItem;\n        }\n\n\n        //Add Image1\n        const image1 = document.createElement('img');\n        image1.src = '/src/bacon-burger.jpg'\n        image1.classList.add('menuPic');\n        list[0].appendChild(image1);\n\n        //Add Image2\n        const image2 = document.createElement('img');\n        image2.src = '/src/mushroom-burger.jpeg'\n        image2.classList.add('menuPic');\n        list[1].appendChild(image2);\n\n        //Add Image3\n        const image3 = document.createElement('img');\n        image3.src = '/src/banzai.png'\n        image3.classList.add('menuPic');\n        list[2].appendChild(image3);\n\n        // Append the menu container to the main content container\n        content.appendChild(menuContainer);\n\n        // Add footer to main content container\n        let footer = document.createElement('div');\n        footer.classList.add('footer');\n        content.appendChild(footer);\n\n\n\n    }\n\n    return { createMenuPage }\n\n})();\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

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