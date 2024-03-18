// app.ts
import store from './redux';

const todoList = document.getElementById('todo-list')!;
const taskInput = document.getElementById('task-input') as HTMLInputElement;
const addTaskBtn = document.getElementById('add-task-btn')!;

const addTask = () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    console.log('Adding task:', taskText); // Debugging
    store.dispatch({ type: 'ADD_TASK', payload: taskText });
    taskInput.value = '';
  }
};

const removeTask = (id: number) => {
  console.log('Removing task:', id); // Debugging
  store.dispatch({ type: 'REMOVE_TASK', payload: id });
};

const toggleTask = (id: number) => {
  console.log('Toggling task:', id); // Debugging
  store.dispatch({ type: 'TOGGLE_TASK', payload: id });
};

const renderTasks = () => {
  const tasks = store.getState().tasks;
  todoList.innerHTML = '';
  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    if (task.completed) {
      taskElement.classList.add('completed');
    }
    taskElement.textContent = task.text;
    taskElement.addEventListener('click', () => toggleTask(task.id));
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '❌';
    removeBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      removeTask(task.id);
    });
    taskElement.appendChild(removeBtn);
    todoList.appendChild(taskElement);
  });
};

addTaskBtn.addEventListener('click', addTask);

store.subscribe(renderTasks);
renderTasks();
