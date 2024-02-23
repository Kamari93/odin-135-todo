// taskCreation.js
export function createTask(projectId, taskDetails) {
    // Add new task to the specified project
    const projectElement = document.getElementById(projectId);
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

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
