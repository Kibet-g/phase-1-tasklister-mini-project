document.addEventListener("DOMContentLoaded", () => {
  // Select form and task list
  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  // Listen for form submission
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get task description
    const taskInput = document.getElementById('new-task-description').value;
    
    // Create a new list item for the task
    const taskItem = document.createElement('li');
    taskItem.innerText = taskInput;
    
    // Append the new task to the task list
    taskList.appendChild(taskItem);
    
    // Clear the input field
    event.target.reset();
  });
});
