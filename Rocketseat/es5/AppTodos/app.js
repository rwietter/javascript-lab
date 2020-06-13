var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");
var delElement = document.querySelector("#app a");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

const renderTodos = () => {
  listElement.innerHTML = "";
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    // delete todo
    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    // procurando a posição do todo
    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "removeTodo(" + pos + ")");

    // delete todo
    var linkText = document.createTextNode(" Excluir");
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
};

renderTodos();

const addTodo = () => {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  savetoStorage();
};

buttonElement.onclick = addTodo;

const removeTodo = pos => {
  todos.splice(pos, 1);
  renderTodos();
  savetoStorage();
};

const savetoStorage = () => {
  localStorage.setItem("list_todos", JSON.stringify(todos));
};
