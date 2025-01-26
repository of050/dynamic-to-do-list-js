// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

   // Function to add a new task
function addTask() {
    // Get the task text from the input field
    const taskText = document.getElementById("taskInput").value;
  
    // If the task text is not empty
    if (taskText !== "") {
      // Create a new list item (li) element
      const newListItem = document.createElement("li");
  
      // Set the text content of the list item to the task text
      newListItem.textContent = taskText;
  
      // Create a new button element for removing the task
      const removeButton = document.createElement("button");
  
      // Set the text content of the button to "Remove"
      removeButton.textContent = "Remove";
  
      // Add a class name to the button for styling
      removeButton.classList.add("remove-btn");
  
      // Add an onclick event listener to the remove button
      removeButton.onclick = function() {
        // Remove the list item from the task list
        taskList.removeChild(newListItem);
      };
  
      // Append the remove button to the list item
      newListItem.appendChild(removeButton);
  
      // Append the list item to the task list
      taskList.appendChild(newListItem);
  
      // Clear the task input field
      document.getElementById("taskInput").value = "";
    }
  }
  
  // Add an event listener to the add button
  document.getElementById("addButton").addEventListener("click", addTask);
  
  // Add an event listener to the task input field for the 'keypress' event
  document.getElementById("taskInput").addEventListener("keypress", function(event) {
    // If the key pressed is 'Enter'
    if (event.key === "Enter") {
      // Call the addTask function to add the task
      addTask();
    }
  });