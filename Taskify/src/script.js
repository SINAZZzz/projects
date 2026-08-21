const themeToggleBtn = document.getElementById('theme-toggle');
const moonIcon = document.querySelector('.moon-icon');
const sunIcon = document.querySelector('.sun-icon');
const addBtn = document.querySelector('.add-btn');
const modalOverlay = document.getElementById('modal-overlay');
const btnCancel = document.getElementById('btn-cancel');
const btnApply = document.getElementById('btn-apply');
const modalInput = document.getElementById('modal-input');
const modalTitle = document.querySelector('.modal-title');
const todoList = document.querySelector('.todo-list');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');
const emptyState = document.getElementById('empty-state');
const undoBtn = document.getElementById('undo-btn');
const undoCountdown = document.getElementById('undo-countdown');
const circleProgress = document.querySelector('.undo-toast .circle');

let currentEditItem = null;
let lastDeletedTask = null;
let lastDeletedIndex = null;
let undoTimeout = null;
let undoInterval = null;

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  moonIcon.classList.add('hidden');
  sunIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  moonIcon.classList.toggle('hidden', isDarkMode);
  sunIcon.classList.toggle('hidden', !isDarkMode);
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

function closeModal() {
  modalOverlay.classList.add('hidden');
  modalInput.value = '';
  currentEditItem = null;
}

addBtn.addEventListener('click', () => {
  currentEditItem = null;
  modalTitle.textContent = 'NEW NOTE';
  modalInput.value = '';
  modalOverlay.classList.remove('hidden');
  modalInput.focus();
});

btnCancel.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => e.target === modalOverlay && closeModal());

function filterAndSearchTodos() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const filterValue = filterSelect.value;
  const items = todoList.querySelectorAll('.todo-item');
  let visibleCount = 0;

  items.forEach(item => {
    const text = item.querySelector('.todo-text').textContent.toLowerCase();
    const isCompleted = item.classList.contains('completed');
    const matchesSearch = text.includes(searchValue);
    const matchesFilter = filterValue === 'all' || 
      (filterValue === 'complete' && isCompleted) || 
      (filterValue === 'incomplete' && !isCompleted);

    const isVisible = matchesSearch && matchesFilter;
    item.classList.toggle('hidden', !isVisible);
    if (isVisible) visibleCount++;
  });

  emptyState.classList.toggle('hidden', visibleCount > 0);
}

searchInput.addEventListener('input', filterAndSearchTodos);
filterSelect.addEventListener('change', filterAndSearchTodos);

btnApply.addEventListener('click', () => {
  const noteText = modalInput.value.trim();
  if (!noteText) return alert('لطفاً متنی وارد کنید!');

  if (currentEditItem) {
    currentEditItem.querySelector('.todo-text').textContent = noteText;
  } else {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
      <label class="checkbox-container">
        <input type="checkbox" />
        <span class="checkmark"></span>
        <span class="todo-text">${noteText}</span>
      </label>
      <div class="actions">
        <button class="action-btn edit-btn" aria-label="Edit">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </button>
        <button class="action-btn delete-btn" aria-label="Delete">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>`;
    todoList.appendChild(li);
  }

  closeModal();
  filterAndSearchTodos();
});

todoList.addEventListener('click', (e) => {
  const editBtn = e.target.closest('.edit-btn');
  if (editBtn) {
    currentEditItem = editBtn.closest('.todo-item');
    modalTitle.textContent = 'EDIT NOTE';
    modalInput.value = currentEditItem.querySelector('.todo-text').textContent;
    modalOverlay.classList.remove('hidden');
    modalInput.focus();
    return;
  }

  const deleteBtn = e.target.closest('.delete-btn');
  if (deleteBtn) {
    const todoItem = deleteBtn.closest('.todo-item');
    const itemIndex = Array.from(todoList.children).indexOf(todoItem);
    const clonedItem = todoItem.cloneNode(true);
    
    todoItem.remove();
    filterAndSearchTodos();
    showUndoToast(clonedItem, itemIndex);
  }
});

todoList.addEventListener('change', (e) => {
  if (e.target.matches('input[type="checkbox"]')) {
    e.target.closest('.todo-item').classList.toggle('completed', e.target.checked);
    filterAndSearchTodos();
  }
});

function showUndoToast(taskElement, index) {
  clearTimeout(undoTimeout);
  clearInterval(undoInterval);

  lastDeletedTask = taskElement;
  lastDeletedIndex = index;

  let timeLeft = 5;
  undoCountdown.textContent = timeLeft;
  circleProgress.style.strokeDasharray = '100, 100';
  undoBtn.classList.remove('hidden');

  undoInterval = setInterval(() => {
    timeLeft--;
    undoCountdown.textContent = timeLeft;
    circleProgress.style.strokeDasharray = `${(timeLeft / 5) * 100}, 100`;
    if (timeLeft <= 0) clearInterval(undoInterval);
  }, 1000);

  undoTimeout = setTimeout(() => {
    undoBtn.classList.add('hidden');
    lastDeletedTask = null;
    lastDeletedIndex = null;
  }, 5000);
}

undoBtn.addEventListener('click', () => {
  if (!lastDeletedTask) return;

  const allItems = todoList.querySelectorAll('.todo-item');
  if (lastDeletedIndex < allItems.length) {
    todoList.insertBefore(lastDeletedTask, allItems[lastDeletedIndex]);
  } else {
    todoList.appendChild(lastDeletedTask);
  }

  undoBtn.classList.add('hidden');
  clearTimeout(undoTimeout);
  clearInterval(undoInterval);
  filterAndSearchTodos();
  lastDeletedTask = null;
  lastDeletedIndex = null;
});

filterAndSearchTodos();