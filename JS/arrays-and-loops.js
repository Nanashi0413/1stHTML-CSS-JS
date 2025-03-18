const todoArray = [];

function renderTodoList () {

  let todoListHTML = '';

  for (let i = 0; i < todoArray.length; i++) {
    const todo = todoArray[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
    document.querySelector('.js-todo-container')
    .innerHTML = todoListHTML;
  }
}

function addTodo () {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  todoArray.push(name);
  inputElement.value = ''
  renderTodoList();
}

function addTodoPressEnter(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}