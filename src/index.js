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

// Add event listener for "Add Task" buttons in each div
document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to a parent element that exists in the DOM
    const projectPreview = document.getElementById('project-preview');

    // Event delegation - listen for clicks on the parent element
    projectPreview.addEventListener('click', (event) => {
        // Check if the clicked element is a ".button-add-task" within the projects list
        if (event.target && event.target.matches('.button-add-task')) {
            // Display the task form popup
            displayTaskForm();
            // console.log('Display')

            const taskId = event.target.id;
            console.log('Task ID:', taskId);
        }
    });
});

// Add event listener to the form for form submission
document.getElementById('task-form').addEventListener('submit', handleFormSubmission);
document.getElementById('task-form').addEventListener('submit', hideTaskForm);
// document.getElementById('task-form').addEventListener('submit', (event) => {
//     handleFormSubmission(event);
//     hideTaskForm();
// });

// Add event listeners to x btns on forms to close task-form
const hideTask = document.getElementById('close-task-form');
hideTask.addEventListener('click', () => {
    hideTaskForm();
})


// Initialize the application when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeApp);


// Add event listener for "Add Task" buttons in each div
// document.addEventListener('DOMContentLoaded', () => {
//     // Add event listener to a parent element that exists in the DOM
//     const projectPreview = document.getElementById('project-preview');

//     // Event delegation - listen for clicks on the parent element
//     projectPreview.addEventListener('click', (event) => {
//         // Check if the clicked element is a ".button-add-task" within the projects list
//         if (event.target && event.target.matches('.button-add-task')) {
//             // Display the task form popup
//             displayTaskForm();
//             // console.log('Display')

//             const taskId = event.target.id;
//             console.log('Task ID:', taskId);

//             // Retrieve task details from the form
//             const title = document.getElementById('task-title').value;
//             const description = document.getElementById('task-description').value;
//             const dueDate = document.getElementById('task-due-date').value;
//             const duration = document.getElementById('task-duration').value;

//             // Retrieve the selected project ID from the project preview
//             const projectId = extractProjectIdFromPreview();

//             // Create task details object
//             const taskDetails = {
//                 title,
//                 description,
//                 dueDate,
//                 duration
//             };

//             // Create the task associated with the selected project
//             createTask(taskDetails, projectId, event.target, taskId); // Pass taskId here
//             console.log('Project ID:', projectId); // Log the projectId for debugging
//         }
//     });
// });
