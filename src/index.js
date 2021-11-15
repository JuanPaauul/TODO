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
  form.reset();
});
dataTable.addEventListener('click', (e)=>{
  if(e.target.classList.contains('todo-table-button')){
    f.markTaskAsDone(e.target.closest('tr')); //Mando una fila entera mi funcion. e.target selecciona mi boton de tarea termianda y .closest('tr') toma el superior a mi boton con la etiqueta tr.
  }
});