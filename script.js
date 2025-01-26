// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const taskInput = document.querySelector("#new-task");
const addButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

// Function to add a new task to the list
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create a new list item (li) element
    const newTask = document.createElement("li");

    // Set the text content of the list item
    newTask.textContent = taskText;

    // Create a new button element for removing the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add an event listener to the remove button
    removeButton.addEventListener("click", () => {
      // Remove the list item from the list
      taskList.removeChild(newTask);
    });

    // Append the remove button to the list item
    newTask.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(newTask);

    // Clear the task input field
    taskInput.value = "";
  }
}

// Add an event listener to the "Add Task" button
addButton.addEventListener("click", addTask);

// Add an event listener to the task input field
taskInput.addEventListener("keypress", (event) => {
  // Check if the Enter key is pressed
  if (event.key === "Enter") {
    // Call the addTask function to add the task
    addTask();
  }
});