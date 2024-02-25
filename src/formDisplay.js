// formDisplay.js
export function displayTaskForm() {
    // Display form for creating or editing tasks
    const formElement = document.getElementById('task-form-popup');
    formElement.style.display = 'block';
}

export function hideTaskForm() {
    // Hide task form
    const formElement = document.getElementById('task-form-popup');
    formElement.style.display = 'none';
}
