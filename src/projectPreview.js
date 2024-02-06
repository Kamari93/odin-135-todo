/**
This module defines a function displaySelectedProject that takes a project 
name as an argument and updates the content of the project-preview div with 
an <h1> element containing the selected project name.
 */

// projectPreview.js

// export const projectPreview = (() => {
//     const projectPreview = document.getElementById('project-preview');

//     function displaySelectedProject(projectName) {
//         projectPreview.innerHTML = `<h1 class="selected-project">${projectName}</h1>`;
//     }

//     return {
//         displaySelectedProject,
//     };
// })();



export const projectPreview = (() => {
    let projectPreviewElement; // Variable to store a reference to the project preview element

    // Initialize function to set up the module
    function initialize(projectsList) {
        // Assign the project preview element by selecting the element with the id 'project-preview'
        projectPreviewElement = document.getElementById('project-preview');

        // Add any additional setup logic here, if needed

        // Example: Attach an event listener to the projectsList container for user-created projects
        if (projectsList) {
            projectsList.addEventListener('click', handleUserProjectClick);
        }
    }

    // Function to handle clicks on user-created projects
    function handleUserProjectClick(event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('button-project')) {
            const projectName = clickedElement.querySelector('span').textContent;
            displaySelectedProject(projectName);
        }
    }

    // Function to display the selected project in the project preview
    function displaySelectedProject(projectName) {
        projectPreviewElement.innerHTML = `<h1 class="selected-project">${projectName}</h1>`;
        // Add more logic here to handle displaying tasks for the selected project
    }

    // Expose public functions or variables
    return {
        initialize,
        displaySelectedProject,
    };
})();

