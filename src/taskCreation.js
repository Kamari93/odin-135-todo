// // Import projectPreview module
import { projectPreview } from './projectPreview.js';

// Data structure to store tasks associated with each project
const projectTasks = {};

// Function to create a task associated with the selected project
export function createTask(taskDetails, projectId, taskId) {
    // console.log(clickedButton);
    console.log(`on task creation: ${taskId}`);
    // Determine the task div based on the clicked button
    let taskDiv = taskId;
    // Determine task div based on clicked button
    if (taskId === `${projectId}-big-things-btn`) {
        taskDiv = document.getElementById(`${projectId}-big-things-container`);
    } else if (taskId === `${projectId}-medium-things-btn`) {
        taskDiv = document.getElementById(`${projectId}-medium-things-container`);
    } else {
        taskDiv = document.getElementById(`${projectId}-little-things-container`);
    }
    // Check if task div exists
    if (taskDiv) {
        // Construct task HTML based on taskDetails
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        const taskHTML = `
            <input type="checkbox" class="task-checkbox">
            <div class="task-details">
                <h3>${taskDetails.title}</h3>
                <p>${taskDetails.description}</p>
                <p>Due Date: ${taskDetails.dueDate}</p>
                <p>Duration: ${taskDetails.duration} pomodoros</p>
            </div>
            <button class="edit-task-btn">Edit</button>
            <button class="delete-task-btn">Delete</button>
        `;
        taskElement.innerHTML = taskHTML;

        // Append task to task div
        taskDiv.appendChild(taskElement);

        // Add task to projectTasks data structure
        if (!projectTasks[projectId]) {
            projectTasks[projectId] = [];
        }
        projectTasks[projectId].push(taskElement);

    } else {
        // Handle case where task div does not exist
        console.error('Task div not found for projectId:', projectId);
    }
}

// Function to handle form submission
export function handleFormSubmission(event, taskId) {
    event.preventDefault(); // Prevent the form from submitting

    // Retrieve task details from the form
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const duration = document.getElementById('task-duration').value;

    // Retrieve the selected project ID from the project preview
    const projectId = extractProjectIdFromPreview();

    // Create task details object
    const taskDetails = {
        title,
        description,
        dueDate,
        duration
    };

    // Create the task associated with the selected project
    // createTask(taskDetails, projectId, event.target, taskId);
    createTask(taskDetails, projectId, taskId);

    console.log('Project ID:', projectId); // Log the projectId for debugging
    console.log(`Retrieved taskID: ${taskId}`); // Log the taskID for debugging (taskId === `taskId);
    console.log(projectTasks); // Log the projectTasks data structure for debugging
}

// Function to extract the project ID from the project preview elements
export function extractProjectIdFromPreview() {
    // Get the selected project button
    const selectedProjectButton = document.querySelector('.selected-project-button');
    if (selectedProjectButton) {
        // Retrieve the project ID from the dataset
        const projectId = selectedProjectButton.dataset.projectId;
        return projectId;
    } else {
        console.error('No project selected.');
        return null;
    }
}




// Add event listener to the form for form submission
// document.getElementById('task-form').addEventListener('submit', handleFormSubmission);


