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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectPopup: () => (/* binding */ addProjectPopup)\n/* harmony export */ });\n/* harmony import */ var _projectPreview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectPreview */ \"./src/projectPreview.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n // Import the generateProjectId function\n\nconst addProjectPopup = (() => {\n    const buttonAddProject = document.getElementById('button-add-project');\n    const addProjectPopup = document.getElementById('add-project-popup');\n    // use these to add a new project to displayed project list\n    const inputAddProjectPopup = document.getElementById('input-add-project-popup');\n    const projectsList = document.getElementById('projects-list');\n\n    buttonAddProject.addEventListener('click', () => {\n        addProjectPopup.style.display = 'block';\n    });\n\n    const buttonCancelProjectPopup = document.getElementById('button-cancel-project-popup');\n    buttonCancelProjectPopup.addEventListener('click', () => {\n        addProjectPopup.style.display = 'none';\n    });\n\n    const buttonAddProjectPopup = document.getElementById('button-add-project-popup');\n\n    buttonAddProjectPopup.addEventListener('click', () => {\n        const newProjectName = inputAddProjectPopup.value;\n        if (newProjectName) {\n\n            const newProjectId = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.generateProjectId)(); // Generate project ID\n            const newProject = { name: newProjectName, id: newProjectId }; // Pass project ID\n            addNewProject(newProject);\n            console.log(newProjectId)\n            // Create a new project object\n            // const newProject = { name: newProjectName };\n\n            // Call a function or method to add the new project to the list\n            // addNewProject(newProject);\n\n            // Optionally, close the popup\n            addProjectPopup.style.display = 'none';\n\n            // Optionally, clear the input field\n            inputAddProjectPopup.value = '';\n        }\n    });\n\n    // function addNewProject(project) {\n    //     // Logic to add the new project to the projectsList\n    //     // Might want to create a Project class or use a data structure to manage projects\n    //     // For now, let's assume projectsList is an array\n    //     // projectsList.innerHTML += `<div class=\"project\">${project.name}</div>`;\n    //     projectsList.innerHTML += ` \n    //     <button class=\"button-project\" data-project-button>\n    //       <div class=\"left-project-panel\">\n    //         <i class=\"fas fa-tasks\"></i>\n    //         <span>${project.name}</span>\n    //       </div>\n    //       <div class=\"right-project-panel\">\n    //         <i class='fas fa-edit'></i>\n    //         <i class='fas fa-trash-alt'></i>\n    //       </div>\n    //     </button>`\n    // }\n\n    function addNewProject(project) {\n        // Generate a project ID\n        // const projectId = generateProjectId();\n        // console.log(projectId); // Log the project ID to the console\n\n        _projectPreview__WEBPACK_IMPORTED_MODULE_0__.projectPreview.displaySelectedProject(project.name, project.id); // Pass project ID\n        // Create a new project element\n        const projectElement = document.createElement('button');\n        projectElement.classList.add('button-project');\n\n        const leftPanel = document.createElement('div');\n        leftPanel.classList.add('left-project-panel');\n        leftPanel.innerHTML = `\n            <i class=\"fas fa-tasks\"></i>\n            <span>${project.name}</span>\n        `;\n\n        const rightPanel = document.createElement('div');\n        rightPanel.classList.add('right-project-panel');\n        rightPanel.innerHTML = `\n            <i class='fas fa-edit' data-action=\"edit\"></i>\n            <i class='fas fa-trash-alt' data-action=\"delete\"></i>\n        `;\n\n        projectElement.appendChild(leftPanel);\n        projectElement.appendChild(rightPanel);\n\n        // Append the project element to the projectsList\n        projectsList.appendChild(projectElement);\n\n        // Attach event listeners for edit and delete buttons\n        attachEditDeleteEventListeners(projectElement, project.name);\n    };\n\n    function attachEditDeleteEventListeners(projectElement, projectName) {\n        const editButton = projectElement.querySelector('.fa-edit');\n        const deleteButton = projectElement.querySelector('.fa-trash-alt');\n\n        editButton.addEventListener('click', () => {\n            // Call a function to handle editing the project\n            editProject(projectElement, projectName);\n        });\n\n        deleteButton.addEventListener('click', () => {\n            // Call a function to handle deleting the project\n            deleteProject(projectElement);\n        });\n\n        // Add click event listener for the project button\n        projectElement.addEventListener('click', () => {\n            // Call a function to handle selecting and displaying the project\n            selectAndDisplayProject(projectName);\n        });\n    };\n\n    function selectAndDisplayProject(projectName) {\n        // Call a function to display the selected project in the project preview\n        _projectPreview__WEBPACK_IMPORTED_MODULE_0__.projectPreview.displaySelectedProject(projectName);\n    }\n\n    function editProject(projectElement, projectName) {\n        // Ask the user for a new project name\n        let newProjectName = prompt('Enter the new project name:', projectName);\n\n        // Validate the user input\n        // The trim method is used to remove leading and trailing whitespaces from the input.\n        while (newProjectName !== null && newProjectName.trim() === \"\") {\n            // If the user entered an empty string, prompt again until a valid input is provided\n            newProjectName = prompt('Please enter a non-empty project name:', projectName);\n        };\n\n        // Update the project name in the UI\n        if (newProjectName !== null) {\n            projectElement.querySelector('span').textContent = newProjectName;\n        };\n    };\n\n    function deleteProject(projectElement) {\n        // Ask for confirmation before deleting the project\n        const confirmDelete = confirm('Are you sure you want to delete this project?');\n\n        // If the user confirms, remove the project from the UI\n        if (confirmDelete) {\n            projectElement.remove();\n        }\n    }\n\n    // Other functionality to handle adding a new project (on \"Add\" button click), etc.\n\n    return {\n        // Expose any necessary functions or variables\n    };\n})();\n\n\n//# sourceURL=webpack://odin-135-todo/./src/addProjectPopup.js?");

/***/ }),

/***/ "./src/formDisplay.js":
/*!****************************!*\
  !*** ./src/formDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTaskForm: () => (/* binding */ displayTaskForm),\n/* harmony export */   hideTaskForm: () => (/* binding */ hideTaskForm)\n/* harmony export */ });\n// formDisplay.js\nfunction displayTaskForm() {\n    // Display form for creating or editing tasks\n    const formElement = document.getElementById('task-form-popup');\n    formElement.style.display = 'block';\n}\n\nfunction hideTaskForm() {\n    // Hide task form\n    const formElement = document.getElementById('task-form-popup');\n    formElement.style.display = 'none';\n}\n\n\n//# sourceURL=webpack://odin-135-todo/./src/formDisplay.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ \"./src/theme.js\");\n/* harmony import */ var _addProjectPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProjectPopup.js */ \"./src/addProjectPopup.js\");\n/* harmony import */ var _projectPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPreview */ \"./src/projectPreview.js\");\n/* harmony import */ var _hamburgerNav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hamburgerNav.js */ \"./src/hamburgerNav.js\");\n/* harmony import */ var _formDisplay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formDisplay.js */ \"./src/formDisplay.js\");\n/* harmony import */ var _taskCreation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskCreation.js */ \"./src/taskCreation.js\");\n// this is the entry point for the app\nalert('Keep Going...🍊🌊');\n\n// import toggle the toggle module\n\n\n\n\n\n\n\n\n\n\n\n\n\n//on start up checked whether its on light mode or dark mode\nconst themeSelect = document.getElementById(\"theme-select\");\n\nconst addProjectBtn = document.getElementById(\"button-add-project\");\n\n// opens hamburger drop down nav\nconst openNavButton = document.getElementById('button-dropdown-nav');\n\nthemeSelect.addEventListener('change', _theme__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\naddProjectBtn.addEventListener('click', _addProjectPopup_js__WEBPACK_IMPORTED_MODULE_1__.addProjectPopup);\n\nopenNavButton.addEventListener('click', _hamburgerNav_js__WEBPACK_IMPORTED_MODULE_3__.openNav);\n\n// Initialize the projectPreview module\nconst projectsList = document.getElementById('projects-list');\n_projectPreview__WEBPACK_IMPORTED_MODULE_2__.projectPreview.initialize(projectsList);\n\n// Event listeners for user-created projects\nprojectsList.addEventListener('click', (event) => {\n    const clickedElement = event.target;\n    if (clickedElement.classList.contains('button-project')) {\n        // const projectName = clickedElement.querySelector('span').textContent;\n        selectUserProject(clickedElement); // Pass the clicked button element\n        // selectUserProject(projectName, false); // Pass false as the second argument\n    }\n});\n\n// Function to handle selecting a user-created project\nfunction selectUserProject(projectButton) { // Change the argument to projectButton\n    // Call the displaySelectedProject function from the projectPreview module\n    const projectName = projectButton.querySelector('span').textContent;\n    _projectPreview__WEBPACK_IMPORTED_MODULE_2__.projectPreview.displaySelectedProject(projectName, false);\n    _projectPreview__WEBPACK_IMPORTED_MODULE_2__.projectPreview.highlightSelectedProjectButton(projectButton); // Pass the button element\n};\n\n\n// Event listeners for default projects\nconst defaultProjects = document.getElementById('default-projects-list');\ndefaultProjects.addEventListener('click', (event) => {\n    const clickedElement = event.target;\n    if (clickedElement.classList.contains('button-default-project')) {\n        const projectName = clickedElement.textContent.trim();\n        _projectPreview__WEBPACK_IMPORTED_MODULE_2__.projectPreview.displaySelectedProject(projectName, true);\n        _projectPreview__WEBPACK_IMPORTED_MODULE_2__.projectPreview.highlightSelectedProjectButton(clickedElement);\n    }\n});\n\n// Add event listener for \"Add Task\" buttons in each div\ndocument.addEventListener('DOMContentLoaded', () => {\n    // Add event listener to a parent element that exists in the DOM\n    const projectPreview = document.getElementById('project-preview');\n\n    // Event delegation - listen for clicks on the parent element\n    projectPreview.addEventListener('click', (event) => {\n        // Check if the clicked element is a \".button-add-task\" within the projects list\n        if (event.target && event.target.matches('.button-add-task')) {\n            // Display the task form popup\n            (0,_formDisplay_js__WEBPACK_IMPORTED_MODULE_4__.displayTaskForm)();\n            console.log('Display')\n        }\n    });\n});\n\n// Add event listeners to x btns on forms to close task-form\nconst hideTask = document.getElementById('close-task-form');\nhideTask.addEventListener('click', () => {\n    (0,_formDisplay_js__WEBPACK_IMPORTED_MODULE_4__.hideTaskForm)();\n})\n\n\n\n// // Event listeners for user-created projects\n// projectsList.addEventListener('click', (event) => {\n//     const clickedElement = event.target;\n//     if (clickedElement.classList.contains('button-project')) {\n//         const projectName = clickedElement.querySelector('span').textContent;\n//         selectUserProject(projectName);\n//     }\n// });\n\n// // Function to handle selecting a user-created project\n// function selectUserProject(projectName) {\n//     // Logic to handle selecting a user-created project\n//     // ...\n\n//     // Call the displaySelectedProject function from the projectPreview module\n//     projectPreview.displaySelectedProject(projectName);\n// };\n\n// implement the create task function here\n// createTask('big-things', { name: 'My Task', description: 'This is my task' });\n// createTask(taskDetails);\n\n//# sourceURL=webpack://odin-135-todo/./src/index.js?");

/***/ }),

/***/ "./src/projectPreview.js":
/*!*******************************!*\
  !*** ./src/projectPreview.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectPreview: () => (/* binding */ projectPreview)\n/* harmony export */ });\n/**\nThis module defines a function displaySelectedProject that takes a project \nname as an argument and updates the content of the project-preview div with \nan <h1> element containing the selected project name.\n */\n\nconst projectPreview = (() => {\n    let projectPreviewElement; // Variable to store a reference to the project preview element\n\n    // Initialize function to set up the module\n    function initialize(projectsList) {\n        // Assign the project preview element by selecting the element with the id 'project-preview'\n        projectPreviewElement = document.getElementById('project-preview');\n        projectsList.addEventListener('click', handleUserProjectClick);\n    }\n\n    // Function to handle clicks on user-created projects\n    function handleUserProjectClick(event) {\n        const clickedElement = event.target;\n        if (clickedElement.classList.contains('button-project')) {\n            const projectName = clickedElement.querySelector('span').textContent;\n            // const projectId = generateProjectId(); // Generate a unique project ID\n            displaySelectedProject(projectName);\n            highlightSelectedProjectButton(clickedElement); // Call to highlight the selected project button\n        }\n    }\n\n    // Function to display the selected project in the project preview\n    function displaySelectedProject(projectName, projectId, isDefaultProject) {\n        let projectHTML = `<h1 class=\"selected-project\">${projectName}</h1>`;\n\n        if (!isDefaultProject) {\n            projectHTML += `\n            <div class=\"big-things\">\n                <h2>1 Big Thing</h2>\n                <button class=\"button-add-task button-add-project\">\n                  <i class=\"fas fa-plus\"></i>\n                  Add Task\n                </button>\n            </div>\n            <div class=\"medium-things\">\n                <h2>3 Medium Things</h2>\n                <button class=\"button-add-task button-add-project\">\n                  <i class=\"fas fa-plus\"></i>\n                  Add Task\n                </button>\n            </div>\n            <div class=\"little-things\">\n                <h2>5 Little Things</h2>\n                <button class=\"button-add-task button-add-project\">\n                  <i class=\"fas fa-plus\"></i>\n                  Add Task\n                </button>\n            </div>\n        `;\n        }\n\n        projectPreviewElement.innerHTML = projectHTML;\n    }\n\n\n    // Function to highlight the selected Project\n    function highlightSelectedProjectButton(projectButton) {\n        // Remove the highlight from previously selected project button, if any\n        const prevSelectedButton = document.querySelector('.selected-project-button');\n        if (prevSelectedButton) {\n            prevSelectedButton.classList.remove('selected-project-button');\n        }\n\n        // Highlight the selected project button\n        projectButton.classList.add('selected-project-button');\n\n        // projectPreview.displaySelectedProject(projectName);\n    }\n\n    // Expose public functions or variables\n    return {\n        initialize,\n        displaySelectedProject,\n        highlightSelectedProjectButton,\n    };\n})();\n\n\n\n//# sourceURL=webpack://odin-135-todo/./src/projectPreview.js?");

/***/ }),

/***/ "./src/taskCreation.js":
/*!*****************************!*\
  !*** ./src/taskCreation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTask: () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _projectPreview_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectPreview.js */ \"./src/projectPreview.js\");\n\n\n// taskCreation.js\n// Maintain a count of tasks in each div.\n// Check the count before allowing the addition of a new task.\n// Display an alert if the maximum limit is reached in a div.\nlet bigThingsCount = 0;\nlet mediumThingsCount = 0;\nlet littleThingsCount = 0;\n\nfunction createTask(taskDetails) {\n    // for precautiion use projectId as an argument in above\n    // const projectId = projectPreview.generateProjectId(); // Utilize the existing generateProjectId function\n    // const projectElement = document.getElementById(projectId);\n    const projectElement = document.getElementById(projectId);\n    const taskElement = document.createElement('div');\n    taskElement.classList.add('task');\n\n    // limit the task count for each task div\n    // Check the div type and its corresponding task count\n    let maxCount;\n    switch (projectId) {\n        case 'big-things':\n            maxCount = 1;\n            if (bigThingsCount >= maxCount) {\n                alert('Maximum tasks reached for Big Things!');\n                return; // Prevent adding more tasks\n            }\n            bigThingsCount++;\n            break;\n        case 'medium-things':\n            maxCount = 3;\n            if (mediumThingsCount >= maxCount) {\n                alert('Maximum tasks reached for Medium Things!');\n                return; // Prevent adding more tasks\n            }\n            mediumThingsCount++;\n            break;\n        case 'little-things':\n            maxCount = 5;\n            if (littleThingsCount >= maxCount) {\n                alert('Maximum tasks reached for Little Things!');\n                return; // Prevent adding more tasks\n            }\n            littleThingsCount++;\n            break;\n    }\n\n    // Construct task HTML based on taskDetails\n    const taskHTML = `\n        <input type=\"checkbox\" class=\"task-checkbox\">\n        <div class=\"task-details\">\n            <h3>${taskDetails.title}</h3>\n            <p>${taskDetails.description}</p>\n            <p>Due Date: ${taskDetails.dueDate}</p>\n            <p>Duration: ${taskDetails.duration} pomodoros</p>\n        </div>\n        <button class=\"edit-task-btn\">Edit</button>\n        <button class=\"delete-task-btn\">Delete</button>\n    `;\n    taskElement.innerHTML = taskHTML;\n\n    // Append task to project\n    projectElement.appendChild(taskElement);\n}\n\n// Function to remove a task (decrement count accordingly)\nfunction removeTask(projectId) {\n    switch (projectId) {\n        case 'big-things':\n            bigThingsCount--;\n            break;\n        case 'medium-things':\n            mediumThingsCount--;\n            break;\n        case 'little-things':\n            littleThingsCount--;\n            break;\n    }\n}\n\n\n\ndocument.getElementById('task-form').addEventListener('submit', function (event) {\n    event.preventDefault(); // Prevent the form from submitting\n\n    const title = document.getElementById('task-title').value;\n    const description = document.getElementById('task-description').value;\n    const dueDate = document.getElementById('task-due-date').value;\n    const duration = document.getElementById('task-duration').value;\n\n    const taskDetails = {\n        title,\n        description,\n        dueDate,\n        duration\n    };\n\n    createTask(taskDetails); // Call the createTask function with the task details\n});\n\n//# sourceURL=webpack://odin-135-todo/./src/taskCreation.js?");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleTheme)\n/* harmony export */ });\n// theme.js\nfunction toggleTheme() {\n    const themeSelect = document.getElementById(\"theme-select\");\n    const selectedTheme = themeSelect.value;\n\n    // change body styling based on the selected theme\n    document.body.className = selectedTheme;\n\n    // remove the previous icon before adding the new selected theme icon\n    const existingIcon = document.querySelector('.theme i');\n    if (existingIcon) {\n        existingIcon.remove();\n    }\n\n    // Create a new icon based on the selected theme\n    const icon = document.createElement('i');\n\n    // Add icons based on the selected theme\n    if (selectedTheme === 'dark') {\n        icon.className = 'fa fa-moon-o';\n    } else {\n        icon.className = 'fa fa-sun-o';\n    }\n\n    // Append the new icon to the label\n    document.querySelector('.theme label').appendChild(icon);\n\n    console.log(selectedTheme);\n}\n\n\n//# sourceURL=webpack://odin-135-todo/./src/theme.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateProjectId: () => (/* binding */ generateProjectId)\n/* harmony export */ });\n// utils.js// utils.js\nlet projectIdCounter = 0;\n\nfunction generateProjectId() {\n    projectIdCounter++;\n    return `project_${projectIdCounter}`;\n}\n\n\n//# sourceURL=webpack://odin-135-todo/./src/utils.js?");

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