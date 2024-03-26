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
        projectsList.addEventListener('click', handleUserProjectClick);
    }

    // Function to handle clicks on user-created projects
    function handleUserProjectClick(event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('button-project')) {
            const projectName = clickedElement.querySelector('span').textContent;
            const projectId = clickedElement.dataset.projectId; // Fetch projectId from the dataset
            displaySelectedProject(projectName, projectId); // Pass projectId to displaySelectedProject
            highlightSelectedProjectButton(clickedElement); // Call to highlight the selected project button
        }
        // displaySelectedProject(projectName, projectId);
    }

    // Function to handle clicks on "Add Task" buttons
    function handleAddTaskButtonClick(event) {
        const clickedButton = event.target;
        if (clickedButton.classList.contains('button-add-task')) {
            const projectId = clickedButton.closest('.project-tasks').dataset.projectId;
            // Here, you can perform the necessary actions for adding a task
            // For example, you can open a form or directly add a task to the selected project
            console.log('Add task clicked for project:', projectId);
        }
    }

    // Function to display the selected project in the project preview
    function displaySelectedProject(projectName, projectId, isDefaultProject) {

        // Store projectId for internal use
        // Example: You can store it in an array or object for future reference
        // const storedProject = { name: projectName, id: projectId };
        // You can perform any additional logic with storedProject if needed

        let projectHTML = `<h1 class="selected-project">${projectName}</h1>`;

        // console.log('Stored Project ID:', projectId);

        if (!isDefaultProject) {
            projectHTML += `
            <div id="${projectId}-big-things-container" class="big-things">
                <h2>1 Big Thing</h2>
                <button class="button-add-task button-add-project big-things-btn" id="${projectId}-big-things-btn">
                  <i class="fas fa-plus"></i>
                  Add Task
                </button>
            </div>
            <div id="${projectId}-medium-things-container" class="medium-things">
                <h2>3 Medium Things</h2>
                <button class="button-add-task button-add-project medium-things-btn" id="${projectId}-medium-things-btn">
                  <i class="fas fa-plus"></i>
                  Add Task
                </button>
            </div>
            <div id="${projectId}-little-things-container" class="little-things">
                <h2>5 Little Things</h2>
                <button class="button-add-task button-add-project little-things-btn" id="${projectId}-little-things-btn">
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
        highlightSelectedProjectButton,
        // handleUserProjectClick
    };
})();

