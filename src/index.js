import * as f from "./App.js";

const form = document.querySelector("#Organizador-form");
const filterform=document.querySelector("#filter-form");
const dataTable = document.querySelector("#todo-table");
var btnfilter =document.getElementById("#filter-button");

var todoIndex = 0;
var todoData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todoFormData = new FormData(form);
  todoFormData["task-id"]=todoIndex.toString();
  f.insertNewTodoInTable(todoFormData, todoIndex);
  todoIndex = todoIndex + 1;
  form.reset();
});
dataTable.addEventListener('click', (e)=>{
  if(e.target.classList.contains('todo-table-button')){
    f.markTaskAsDone(e.target.closest('tr')); //Mando una fila entera mi funcion. e.target selecciona mi boton de tarea termianda y .closest('tr') toma el superior a mi boton con la etiqueta tr.
  }
  if(e.target.classList.contains('edit-table-button')){
    f.editTask(e.target.closest('tr')); }
  f.deleteTask(e.target);
});

filterform.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Aa");
});