export const addProjectPopup = (() => {
    const buttonAddProject = document.getElementById('button-add-project');
    const addProjectPopup = document.getElementById('add-project-popup');
    // use these to add a new project to displayed project list
    const inputAddProjectPopup = document.getElementById('input-add-project-popup');
    const projectsList = document.getElementById('projects-list');

    buttonAddProject.addEventListener('click', () => {
        addProjectPopup.style.display = 'block';
    });

    const buttonCancelProjectPopup = document.getElementById('button-cancel-project-popup');
    buttonCancelProjectPopup.addEventListener('click', () => {
        addProjectPopup.style.display = 'none';
    });

    const buttonAddProjectPopup = document.getElementById('button-add-project-popup');

    buttonAddProjectPopup.addEventListener('click', () => {
        const newProjectName = inputAddProjectPopup.value;
        if (newProjectName) {
            // Create a new project object
            const newProject = { name: newProjectName };

            // Call a function or method to add the new project to the list
            addNewProject(newProject);

            // Optionally, close the popup
            addProjectPopup.style.display = 'none';

            // Optionally, clear the input field
            inputAddProjectPopup.value = '';
        }
    });

    function addNewProject(project) {
        // Logic to add the new project to the projectsList
        // You might want to create a Project class or use a data structure to manage projects
        // For now, let's assume projectsList is an array
        projectsList.innerHTML += `<div class="project">${project.name}</div>`;
    }

    // Other functionality to handle adding a new project (on "Add" button click), etc.

    return {
        // Expose any necessary functions or variables
    };
})();
