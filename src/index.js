// this is the entry point for the app
alert('Keep Going...🍊🌊');

// import toggle the toggle module
import toggleTheme from './theme';

import { addProjectPopup } from './addProjectPopup.js';

import { projectPreview } from './projectPreview';

import { openNav } from './hamburgerNav.js';

import { displayTaskForm, hideTaskForm } from './formDisplay.js';


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
        // const projectName = clickedElement.querySelector('span').textContent;
        selectUserProject(clickedElement); // Pass the clicked button element
        // selectUserProject(projectName, false); // Pass false as the second argument
    }
});

// Function to handle selecting a user-created project
function selectUserProject(projectButton) { // Change the argument to projectButton
    // Call the displaySelectedProject function from the projectPreview module
    const projectName = projectButton.querySelector('span').textContent;
    projectPreview.displaySelectedProject(projectName, false);
    projectPreview.highlightSelectedProjectButton(projectButton); // Pass the button element
};


// Event listeners for default projects
const defaultProjects = document.getElementById('default-projects-list');
defaultProjects.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('button-default-project')) {
        const projectName = clickedElement.textContent.trim();
        projectPreview.displaySelectedProject(projectName, true);
        projectPreview.highlightSelectedProjectButton(clickedElement);
    }
});

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
            console.log('Display')
        }
    });
});

// Add event listeners to x btns on forms to close task-form
const hideTask = document.getElementById('close-task-form');
hideTask.addEventListener('click', () => {
    hideTaskForm();
})



// // Event listeners for user-created projects
// projectsList.addEventListener('click', (event) => {
//     const clickedElement = event.target;
//     if (clickedElement.classList.contains('button-project')) {
//         const projectName = clickedElement.querySelector('span').textContent;
//         selectUserProject(projectName);
//     }
// });

// // Function to handle selecting a user-created project
// function selectUserProject(projectName) {
//     // Logic to handle selecting a user-created project
//     // ...

//     // Call the displaySelectedProject function from the projectPreview module
//     projectPreview.displaySelectedProject(projectName);
// };