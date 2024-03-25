// this is the entry point for the app
alert('Keep Going...🍊🌊');

// import toggle the toggle module
import toggleTheme from './theme';

import { addProjectPopup } from './addProjectPopup.js';

import { projectPreview } from './projectPreview';

import { openNav } from './hamburgerNav.js';

import { displayTaskForm, hideTaskForm } from './formDisplay.js';

// import { createTask } from './taskCreation.js';

import { handleFormSubmission, extractProjectIdFromPreview } from './taskCreation.js';

// Function to initialize the application
function initializeApp() {
    // Get the default project buttons
    const defaultProjectButtons = document.querySelectorAll('.button-default-project');

    // Add event listeners to the default project buttons
    defaultProjectButtons.forEach(button => {
        button.addEventListener('click', handleDefaultProjectClick);
    });
}


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
        const projectId = clickedElement.dataset.projectId; // Fetch projectId from the dataset
        selectUserProject(clickedElement, projectId); // Pass the clicked button element
    }
});

// Function to handle selecting a user-created project
function selectUserProject(projectButton, projectId) { // Change the argument to projectButton
    // Call the displaySelectedProject function from the projectPreview module
    const projectName = projectButton.querySelector('span').textContent;
    projectPreview.displaySelectedProject(projectName, projectId, false);
    projectPreview.highlightSelectedProjectButton(projectButton); // Pass the button element
};


// Event listeners for default projects
const defaultProjects = document.getElementById('default-projects-list');
defaultProjects.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('button-default-project')) {
        const projectName = clickedElement.textContent.trim();
        projectPreview.displaySelectedProject(projectName, '', true);
        projectPreview.highlightSelectedProjectButton(clickedElement);
    }
});

// Function to handle clicks on default project buttons
function handleDefaultProjectClick(event) {
    // Retrieve the project name and ID from the clicked button
    const projectName = event.target.textContent.trim();
    const projectId = event.target.id; // Retrieve project ID from the button's id attribute

    // Display the selected default project
    projectPreview.displaySelectedProject(projectName, projectId, true); // Pass true to indicate it's a default project
    console.log('Default Project Clicked:', projectId);
}

// Add event listener to the form for form submission
// document.getElementById('task-form').addEventListener('submit', handleFormSubmission);
document.getElementById('task-form').addEventListener('submit', hideTaskForm);

// Add event listeners to x btns on forms to close task-form
const hideTask = document.getElementById('close-task-form');
hideTask.addEventListener('click', () => {
    hideTaskForm();
})


// Initialize the application when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

let taskID; // Define a global variable to store the taskId

document.addEventListener('DOMContentLoaded', () => {
    const projectPreview = document.getElementById('project-preview');
    projectPreview.addEventListener('click', (event) => {
        if (event.target && event.target.matches('.button-add-task')) {
            displayTaskForm();

            // Retrieve task ID and store it in the global variable
            taskID = event.target.id;
            console.log('Task ID:', taskID);
        }
    });
});


// Function to handle form submission
document.getElementById('task-form').addEventListener('submit', (event) => {
    // Pass taskId to handleFormSubmission function
    handleFormSubmission(event, taskID);
});