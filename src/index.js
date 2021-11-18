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
  let eti=f.getEtiquetas();
  let tipoFiltro=document.getElementById("task-filter");
  let tabla = document.getElementById("todo-table").rows;
  let etiAbuscar=document.getElementById("task-filter-input");
  let row = tabla[tabla.length - 1];
  let c=1;
  if(tipoFiltro.value == "EtiquetasF")
    {
      eti.forEach(element => {
        if(element.includes(etiAbuscar.value))
        {
          row=tabla[c];
          f.filtertasks(row);
        }
        console.log("WTF");
        console.log(element);
        
        c++;
      });
      
    }
});