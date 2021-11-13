import * as f from "./App.js";

const form = document.querySelector("#Organizador-form");
const dataTable = document.querySelector("#todo-table")

var todoIndex = 0;
var todoData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todoFormData = new FormData(form);
  todoFormData["task-id"]=todoIndex.toString();
  f.insertNewTodoInTable(todoFormData, todoIndex);
  todoIndex =+ 1;
});
dataTable.addEventListener('click', (e)=>{
  if(e.target.classList.contains('todo-table-button')){
    console.log("boton de tabla presionado")
  }
});