const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid');

// Parse JSON bodies
app.use(bodyParser.json());

// POST /addTodo endpoint
app.post('/addTodo', (req, res) => {
  const { txt, cat, done, userID } = req.body;

  // Generate a new unique ID for the todo
  const id = uuid.v4();

  // Create a new todo object
  const newTodo = {
    id,
    txt,
    cat,
    done,
    userID,
  };
  // Return a response indicating success
  res.status(200).json({ message: 'Todo added successfully' });
});
  // Save the new todo to your JSON file or database
  // For example, you can push it to an existing todos array in your JSON file

  // Assuming you have the existing todos array stored in a variable called "todos"
  todos.push(newTodo);
// Log a message indicating the start of HTML element creation
console.log("début de la création des éléments HTML");

// Select the HTML element with the id "userSelect" and assign it to the variable `userSelect`
const userSelection = document.querySelector('#userSelection');

// Declare an empty array called `tasks` to store tasks
let tasks = [];
// Function to delete a task
function deleteTask(task) {
  const taskIndex = tasks.indexOf(task);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
}


// Add the following code in your JavaScript file or script tag

// Get the user selection dropdown element
const userSelectionDropdown = document.getElementById('userSelection');

// Add an event listener to the dropdown
userSelectionDropdown.addEventListener('change', handleUserSelection);

// Function to handle user selection change
function handleUserSelection() {
  // Get the selected user value
  const selectedUser = userSelectionDropdown.value;

  // Perform any necessary actions based on the selected user
  // For example, you can update the displayed tasks or perform other user-specific operations
  console.log('Selected user:', selectedUser);
}

// Function to render tasks
function renderTasks() {
  // Clear task lists
  tasksTodoList.innerHTML = '';
  tasksDoneList.innerHTML = '';

  // Filter tasks based on selected category
  const selectedCategory = categoryFilter.value;
  const filteredTasks = selectedCategory === 'all' ? tasks : tasks.filter(task => task.category === selectedCategory);

  // Render tasks in respective lists
  filteredTasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.textContent = task.text;

    if (task.completed) {
      tasksDoneList.appendChild(taskItem);
    } else {
      tasksTodoList.appendChild(taskItem);
    }

    // Create a delete button for each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTask(task);
    });
    taskItem.appendChild(deleteButton);
  });
}
// Function to create a new task
function createTask(event) {
  event.preventDefault();

  // Get the task text from the input field
  const taskText = taskInput.value;

  // Create a new task object
  const newTask = {
    text: taskText,
    completed: false,
    category: categoryInput.value,
  };

  // Add the new task to the tasks array
  tasks.push(newTask);

  // Clear the task input field
  taskInput.value = '';

  // Render the updated tasks
  renderTasks();
}
// Rest of your code...

// Event listener for `change` event on `userSelect` element
userSelection.addEventListener('change', () => {

  tasks = [];
  renderTasks();
});

const categoryFilter = document.getElementById('categoryFilter');
// Event listener for `submit` event on `taskForm` element
taskForm.addEventListener('submit', createTask);

// Event listener for `change` event on `categoryFilter` element
categoryFilter.addEventListener('change', renderTasks);

// Log a message indicating that the `my-script.js` file has been executed
console.log("my-script");