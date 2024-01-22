const taskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', toggleTaskCompleted);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}

function toggleTaskCompleted(event) {
    const clickedTask = event.target;
    if (clickedTask.tagName === 'LI') {
        clickedTask.classList.toggle('completed');
    }
}
