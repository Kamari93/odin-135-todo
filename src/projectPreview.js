/**
This module defines a function displaySelectedProject that takes a project 
name as an argument and updates the content of the project-preview div with 
an <h1> element containing the selected project name.
 */

export const projectPreview = (() => {
    let projectPreviewElement; // Variable to store a reference to the project preview element

    // Initialize function to set up the module
    function initialize(projectsList) {
        // Assign the project preview element by selecting the element with the id 'project-preview'
        projectPreviewElement = document.getElementById('project-preview');

        // Add any additional setup logic here, if needed

        // Example: Attach an event listener to the projectsList container for user-created projects
        // if (projectsList) {
        //     projectsList.addEventListener('click', handleUserProjectClick);
        // }
        projectsList.addEventListener('click', handleUserProjectClick);
    }

    // Function to handle clicks on user-created projects
    function handleUserProjectClick(event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('button-project')) {
            const projectName = clickedElement.querySelector('span').textContent;
            displaySelectedProject(projectName);
            highlightSelectedProjectButton(clickedElement); // Call to highlight the selected project button
        }
    }

    // Function to display the selected project in the project preview
    // function displaySelectedProject(projectName) {
    //     projectPreviewElement.innerHTML = `<h1 class="selected-project">${projectName}</h1>`;
    //     // Add more logic here to handle displaying tasks for the selected project
    // }

    // Function to display the selected project in the project preview
    function displaySelectedProject(projectName, isDefaultProject) {
        let projectHTML = `<h1 class="selected-project">${projectName}</h1>`;

        if (!isDefaultProject) {
            projectHTML += `
            <div class="big-things">
                <h2>1 Big Thing</h2>
                <button class="button-add-project" id="button-add-task">
                  <i class="fas fa-plus"></i>
                  Add Task
                </button>
            </div>
            <div class="medium-things">
                <h2>3 Medium Things</h2>
                <button class="button-add-project" id="button-add-task">
                  <i class="fas fa-plus"></i>
                  Add Task
                </button>
            </div>
            <div class="little-things">
                <h2>5 Little Things</h2>
                <button class="button-add-project" id="button-add-task">
                  <i class="fas fa-plus"></i>
                  Add Task
                </button>
            </div>
        `;
        }

        projectPreviewElement.innerHTML = projectHTML;
    }


    // Function to highlight the selected Project
    function highlightSelectedProjectButton(projectButton) {
        // Remove the highlight from previously selected project button, if any
        const prevSelectedButton = document.querySelector('.selected-project-button');
        if (prevSelectedButton) {
            prevSelectedButton.classList.remove('selected-project-button');
        }

        // Highlight the selected project button
        projectButton.classList.add('selected-project-button');

        // projectPreview.displaySelectedProject(projectName);
    }

    // Expose public functions or variables
    return {
        initialize,
        displaySelectedProject,
        highlightSelectedProjectButton
    };
})();

