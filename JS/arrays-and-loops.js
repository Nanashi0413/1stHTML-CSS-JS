const todoArray = [];

function renderTodoList () {

  let todoListHTML = '';

  for (let i = 0; i < todoArray.length; i++) {
    const todoObj = todoArray[i];
    const {name, dueDate} = todoObj;
    const html = `
    <p>
      ${name} ${dueDate}
      <button 
      onclick="
        todoArray.splice(${i},1);
        renderTodoList();
      ">Delete</button>
    </p>
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