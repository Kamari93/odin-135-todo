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

/***/ "./src/addProjectPopup.js":
/*!********************************!*\
  !*** ./src/addProjectPopup.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectPopup: () => (/* binding */ addProjectPopup)\n/* harmony export */ });\nconst addProjectPopup = (() => {\n    const buttonAddProject = document.getElementById('button-add-project');\n    const addProjectPopup = document.getElementById('add-project-popup');\n    // use these to add a new project to displayed project list\n    const inputAddProjectPopup = document.getElementById('input-add-project-popup');\n    const projectsList = document.getElementById('projects-list');\n\n    buttonAddProject.addEventListener('click', () => {\n        addProjectPopup.style.display = 'block';\n    });\n\n    const buttonCancelProjectPopup = document.getElementById('button-cancel-project-popup');\n    buttonCancelProjectPopup.addEventListener('click', () => {\n        addProjectPopup.style.display = 'none';\n    });\n\n    const buttonAddProjectPopup = document.getElementById('button-add-project-popup');\n\n    buttonAddProjectPopup.addEventListener('click', () => {\n        const newProjectName = inputAddProjectPopup.value;\n        if (newProjectName) {\n            // Create a new project object\n            const newProject = { name: newProjectName };\n\n            // Call a function or method to add the new project to the list\n            addNewProject(newProject);\n\n            // Optionally, close the popup\n            addProjectPopup.style.display = 'none';\n\n            // Optionally, clear the input field\n            inputAddProjectPopup.value = '';\n        }\n    });\n\n    function addNewProject(project) {\n        // Logic to add the new project to the projectsList\n        // You might want to create a Project class or use a data structure to manage projects\n        // For now, let's assume projectsList is an array\n        // projectsList.innerHTML += `<div class=\"project\">${project.name}</div>`;\n        projectsList.innerHTML += ` \n        <button class=\"button-project\" data-project-button>\n          <div class=\"left-project-panel\">\n            <i class=\"fas fa-tasks\"></i>\n            <span>${project.name}</span>\n          </div>\n          <div class=\"right-project-panel\">\n            <i class=\"fas fa-times\"></i>\n          </div>\n        </button>`\n    }\n\n    // Other functionality to handle adding a new project (on \"Add\" button click), etc.\n\n    return {\n        // Expose any necessary functions or variables\n    };\n})();\n\n\n//# sourceURL=webpack://odin-135-todo/./src/addProjectPopup.js?");

/***/ }),

/***/ "./src/hamburgerNav.js":
/*!*****************************!*\
  !*** ./src/hamburgerNav.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openNav: () => (/* binding */ openNav)\n/* harmony export */ });\n// opens hamburger drop down nav\nconst openNavButton = document.getElementById('button-dropdown-nav');\n\n// Static method that opens nav menu\nfunction openNav() {\n    const nav = document.getElementById('nav')\n\n    // UI.closeAllPopups()\n    nav.classList.toggle('active')\n}\n\n//# sourceURL=webpack://odin-135-todo/./src/hamburgerNav.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ \"./src/theme.js\");\n/* harmony import */ var _addProjectPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjectPopup.js */ \"./src/addProjectPopup.js\");\n/* harmony import */ var _hamburgerNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburgerNav.js */ \"./src/hamburgerNav.js\");\n// this is the entry point for the app\nalert('Keep Going');\n\n// import toggle the toggle module\n\n\n\n\n\n\n//on start up checked whether its on light mode or dark mode\nconst themeSelect = document.getElementById(\"theme-select\");\n\nconst addProjectBtn = document.getElementById(\"button-add-project\");\n\n// opens hamburger drop down nav\nconst openNavButton = document.getElementById('button-dropdown-nav');\n\nthemeSelect.addEventListener('change', _theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\naddProjectBtn.addEventListener('click', _addProjectPopup_js__WEBPACK_IMPORTED_MODULE_1__.addProjectPopup);\n\nopenNavButton.addEventListener('click', _hamburgerNav_js__WEBPACK_IMPORTED_MODULE_2__.openNav);\n\n//# sourceURL=webpack://odin-135-todo/./src/index.js?");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleTheme)\n/* harmony export */ });\n// theme.js\nfunction toggleTheme() {\n    const themeSelect = document.getElementById(\"theme-select\");\n    const selectedTheme = themeSelect.value;\n\n    // change body styling based on the selected theme\n    document.body.className = selectedTheme;\n\n    // remove the previous icon before adding the new selected theme icon\n    const existingIcon = document.querySelector('.theme i');\n    if (existingIcon) {\n        existingIcon.remove();\n    }\n\n    // Create a new icon based on the selected theme\n    const icon = document.createElement('i');\n\n    // Add icons based on the selected theme\n    if (selectedTheme === 'dark') {\n        icon.className = 'fa fa-moon-o';\n    } else {\n        icon.className = 'fa fa-sun-o';\n    }\n\n    // Append the new icon to the label\n    document.querySelector('.theme label').appendChild(icon);\n\n    console.log(selectedTheme);\n}\n\n\n//# sourceURL=webpack://odin-135-todo/./src/theme.js?");

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