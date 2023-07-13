// Log a message indicating the start of HTML element creation
console.log("début de la création des éléments HTML");

// Select the HTML element with the id "userSelect" and assign it to the variable `userSelect`
const userSelect = document.querySelector('#userSelect');

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

// Rest of your code...

// Event listener for `change` event on `userSelect` element
userSelect.addEventListener('change', () => {
  // Update tasks based on selected user
  // Replace with your logic to fetch user-specific tasks
  tasks = [];
  renderTasks();
});

// Event listener for `submit` event on `taskForm` element
taskForm.addEventListener('submit', createTask);

// Event listener for `change` event on `categoryFilter` element
categoryFilter.addEventListener('change', renderTasks);

// Log a message indicating that the `my-script.js` file has been executed
console.log("my-script");