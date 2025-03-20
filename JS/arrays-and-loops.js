const todoArray = [];

function renderTodoList () {

  let todoListHTML = '';

  for (let i = 0; i < todoArray.length; i++) {
    const todoObj = todoArray[i];
    const {name, dueDate} = todoObj;
    const html = `
      <div class="todo-list">${name}</div>
      <div class="todo-list">${dueDate}</div>
      <button 
        class="js-delete-todo"
        onclick="
          todoArray.splice(${i},1);
          renderTodoList();
      ">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-container')
    .innerHTML = todoListHTML;
}

function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dueDateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateInputElement.value;

  
  todoArray.push({
    name,
    dueDate
  });
  inputElement.value = '';
  dueDateInputElement.value = '';
  renderTodoList();
}

function addTodoPressEnter(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}