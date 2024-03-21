// Import projectPreview module
import { projectPreview } from './projectPreview.js';

// Function to create a task associated with the selected project
export function createTask(taskDetails, projectId) {
    // Determine the project elements based on the project ID
    const bigThingsDiv = document.getElementById(`${projectId}-big-things`);
    const mediumThingsDiv = document.getElementById(`${projectId}-medium-things`);
    const littleThingsDiv = document.getElementById(`${projectId}-little-things`);
    // console.log(bigThingsDiv, mediumThingsDiv, littleThingsDiv);

    // Check if any of the project elements exist
    if (bigThingsDiv || mediumThingsDiv || littleThingsDiv) {
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

        // Determine which project element to append the task to based on priority
        if (bigThingsDiv) {
            bigThingsDiv.appendChild(taskElement);
        } else if (mediumThingsDiv) {
            mediumThingsDiv.appendChild(taskElement);
        } else {
            littleThingsDiv.appendChild(taskElement);
        }
    } else {
        // Handle case where project elements are not found
        console.error('Project elements not found for projectId:', projectId);
    }
}

// Function to handle form submission
export function handleFormSubmission(event) {
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
    createTask(taskDetails, projectId);

    console.log('Project ID:', projectId); // Log the projectId for debugging
}

// Function to extract the project ID from the project preview elements
function extractProjectIdFromPreview() {
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
document.getElementById('task-form').addEventListener('submit', handleFormSubmission);
