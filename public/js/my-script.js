console.log("début de la création des éléments HTML");
const userSelect = document.querySelector('#userSelect');
// Store tasks
let tasks = [];

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
  });
}

// Function to handle task creation
function createTask(e) {
  e.preventDefault();

  const taskText = taskInput.value;
  const taskCategory = categorySelect.value;

  if (taskText.trim() !== '') {
    const newTask = {
      text: taskText,
      category: taskCategory,
      completed: false
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = '';
  }
}

// Event listeners
userSelect.addEventListener('change', () => {
  // Update tasks based on selected user
  // Replace with your logic to fetch user-specific tasks
  tasks = [];
  renderTasks();
});

taskForm.addEventListener('submit', createTask);

categoryFilter.addEventListener('change', renderTasks);

console.log("my-script.js");

// Path to your JSON file on the server
const filePath = '../../database/data.json';

function readTodos() {
    return fetch(filePath)
      .then(response => response.json())
      .catch(error => {
        console.error('Error reading todos from file:', error);
        return { todos: [] };
      });
  }
  
  function writeTodos(todos) {
    return fetch('/database/save-todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todos)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error writing todos to file');
        }
        console.log('Todos saved to file.');
      })
      .catch(error => {
        console.error('Error writing todos to file:', error);
      });
  }
  
  // Read todos from file
  readTodos()
    .then(data => {
      const todos = data.todos;
  
      userSelect.addEventListener('change', function() {
        const selectedUserId = userSelect.value;
        const selectedUserTodos = todos.filter(todo => todo.userID === selectedUserId);
  
        // Use the selectedUserTodos array for further processing or rendering on your page
        console.log(selectedUserTodos);
      });
  
      const newTodo = {
        id: '7ab3b1d3-a4e0-48db-9690-319d2735cd50',
        txt: 'test',
        cat: 'urgent',
        done: false,
        userID: '9df455e5-a4db-4cc5-896e-8134016de60e'
      };
  
      console.log("new todo ", newTodo);
      todos.push(newTodo);
  
      // Write todos to file
      writeTodos({ todos });
  
      // Store tasks
      let tasks = [];
  
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
        });
      }
  
      // Function to handle task creation
      function createTask(e) {
        e.preventDefault();
  
        const taskText = taskInput.value;
        const taskCategory = categorySelect.value;
  
        if (taskText.trim() !== '') {
          const newTask = {
            text: taskText,
            category: taskCategory,
            completed: false
          };
  
          tasks.push(newTask);
          renderTasks();
          taskInput.value = '';
        }
      }
    //   const userSelect = document.querySelector('#userSelect');
      // Event listeners
      userSelect.addEventListener('change', () => {
        // Update tasks based on selected user
        // Replace with your logic to fetch user-specific tasks
        tasks = [];
        renderTasks();
      });
  
      taskForm.addEventListener('submit', createTask);
  
      categoryFilter.addEventListener('change', renderTasks);
  
      console.log("my-script.js");
    });