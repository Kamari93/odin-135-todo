// this is the entry point for the app
alert('Keep Going');

// import toggle the toggle module
import toggleTheme from './theme';

import { addProjectPopup } from './addProjectPopup.js';

import { projectPreview } from './projectPreview';

import { openNav } from './hamburgerNav.js';


//on start up checked whether its on light mode or dark mode
const themeSelect = document.getElementById("theme-select");

const addProjectBtn = document.getElementById("button-add-project");

// opens hamburger drop down nav
const openNavButton = document.getElementById('button-dropdown-nav');

themeSelect.addEventListener('change', toggleTheme);

addProjectBtn.addEventListener('click', addProjectPopup);

openNavButton.addEventListener('click', openNav);

// Initialize the projectPreview module
const projectsList = document.getElementById('projects-list');
projectPreview.initialize(projectsList);

// Event listeners for user-created projects
projectsList.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('button-project')) {
        const projectName = clickedElement.querySelector('span').textContent;
        selectUserProject(projectName);
    }
});

// Function to handle selecting a user-created project
function selectUserProject(projectName) {
    // Logic to handle selecting a user-created project
    // ...

    // Call the displaySelectedProject function from the projectPreview module
    projectPreview.displaySelectedProject(projectName);
};

// Event listeners for default projects
const defaultProjects = document.getElementById('default-projects-list');
defaultProjects.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('button-default-project')) {
        const projectName = clickedElement.textContent.trim();
        projectPreview.displaySelectedProject(projectName);
    }
});