const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// Initialize an array to store tasks
let tasks = [];

// Function to render the tasks
function renderTasks() {
  todoList.innerHTML = ''; // Clear the list
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <div class="button">
        <button onclick="editTask(${index})" class="edit">Edit</button>
        <button onclick="deleteTask(${index})" class="delete">Delete</button>
      </div>
    `;
    todoList.appendChild(li);
  });
}

// Add a new task
function addTask() {
  const task = todoInput.value.trim();
  if (task) {
    tasks.push(task);
    todoInput.value = '';
    renderTasks();
  } else {
    alert('Please enter a task!');
  }
}

// Edit a task
function editTask(index) {
  const newTask = prompt('Edit your task:', tasks[index]);
  if (newTask !== null && newTask.trim() !== '') {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Event Listeners
addButton.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

// Initial render
renderTasks();