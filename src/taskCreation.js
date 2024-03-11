import { projectPreview } from './projectPreview.js';

// taskCreation.js
// Maintain a count of tasks in each div.
// Check the count before allowing the addition of a new task.
// Display an alert if the maximum limit is reached in a div.
let bigThingsCount = 0;
let mediumThingsCount = 0;
let littleThingsCount = 0;

export function createTask(taskDetails) {
    // for precautiion use projectId as an argument in above
    // const projectId = projectPreview.generateProjectId(); // Utilize the existing generateProjectId function
    // const projectElement = document.getElementById(projectId);
    const projectElement = document.getElementById(projectId);
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    // limit the task count for each task div
    // Check the div type and its corresponding task count
    let maxCount;
    switch (projectId) {
        case 'big-things':
            maxCount = 1;
            if (bigThingsCount >= maxCount) {
                alert('Maximum tasks reached for Big Things!');
                return; // Prevent adding more tasks
            }
            bigThingsCount++;
            break;
        case 'medium-things':
            maxCount = 3;
            if (mediumThingsCount >= maxCount) {
                alert('Maximum tasks reached for Medium Things!');
                return; // Prevent adding more tasks
            }
            mediumThingsCount++;
            break;
        case 'little-things':
            maxCount = 5;
            if (littleThingsCount >= maxCount) {
                alert('Maximum tasks reached for Little Things!');
                return; // Prevent adding more tasks
            }
            littleThingsCount++;
            break;
    }

    // Construct task HTML based on taskDetails
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

    // Append task to project
    projectElement.appendChild(taskElement);
}

// Function to remove a task (decrement count accordingly)
function removeTask(projectId) {
    switch (projectId) {
        case 'big-things':
            bigThingsCount--;
            break;
        case 'medium-things':
            mediumThingsCount--;
            break;
        case 'little-things':
            littleThingsCount--;
            break;
    }
}



document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const dueDate = document.getElementById('task-due-date').value;
    const duration = document.getElementById('task-duration').value;

    const taskDetails = {
        title,
        description,
        dueDate,
        duration
    };

    createTask(taskDetails); // Call the createTask function with the task details
});