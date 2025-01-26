// Wait for the DOM content to load

document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // `false` skips resaving to avoid duplicating during loading.
    }

    // Function to save tasks to Local Storage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to get tasks from Local Storage
    function getStoredTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        const trimmedText = taskText.trim();
        if (!trimmedText) {
            alert('Please enter a task.');
            return;
        }

        // Create list item for the task
        const li = document.createElement('li');
        li.textContent = trimmedText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function () {
            li.remove();

            // Remove task from Local Storage
            const tasks = getStoredTasks().filter(t => t !== trimmedText);
            saveTasks(tasks);
        };

        // Append remove button and li to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Save task in Local Storage if needed
        if (save) {
            const tasks = getStoredTasks();
            tasks.push(trimmedText);
            saveTasks(tasks);
        }

        // Clear the input field
        taskInput.value = '';
    }

    // Add Event Listeners

    // Add task when clicking the button
    addButton.addEventListener('click', () => addTask(taskInput.value));

    // Add task when pressing Enter
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Load existing tasks from Local Storage
    loadTasks();
});
