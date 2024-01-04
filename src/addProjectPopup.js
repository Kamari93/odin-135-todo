export const addProjectPopup = (() => {
    const buttonAddProject = document.getElementById('button-add-project');
    const addProjectPopup = document.getElementById('add-project-popup');

    buttonAddProject.addEventListener('click', () => {
        addProjectPopup.style.display = 'block';
    });

    const buttonCancelProjectPopup = document.getElementById('button-cancel-project-popup');
    buttonCancelProjectPopup.addEventListener('click', () => {
        addProjectPopup.style.display = 'none';
    });

    // Other functionality to handle adding a new project (on "Add" button click), etc.

    return {
        // Expose any necessary functions or variables
    };
})();
