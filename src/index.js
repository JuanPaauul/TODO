import * as f from "./App.js";
import TasksList from "./TasksList.js";

const form = document.querySelector("#Organizador-form");
const filterform = document.querySelector("#filter-form");
const dataTable = document.querySelector("#todo-table");
var btnfilter =document.getElementById("#filter-button");

var todoIndex = 0;
var todoData = {};

let listOfTasks = new TasksList();
const listTask = document.querySelector("#list-task");
const taskName = document.querySelector("#task-name");
const taskType = document.querySelector("#task-type");
const taskLimitDate = document.querySelector("#task-limit-date");
const taskTags = document.querySelector("#task-tag");
const taskDescription = document.querySelector("#task-description");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (listTask.innerHTML == "") {
    listOfTasks = new TasksList();
  }
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
  //filterform.reset();
  event.preventDefault();
  f.clearTable("todo-table-filter");
  let eti=f.getEtiquetas();
  let tipoFiltro=document.getElementById("task-filter");
  let tabla = document.getElementById("todo-table").rows;
  let etiAbuscar=document.getElementById("task-filter-input");
  let row = tabla[tabla.length - 1];
  let c=1;
  if(tipoFiltro.value == "EtiquetasF")
  {
    eti.forEach(element => {
      let separado=element.split(' ');
      separado.forEach(elemento => {
        if(elemento === "#"+etiAbuscar.value)
        {
          row=tabla[c];
          f.filtertasks(row);
        } 
      });
             
      c++;
    });

  }
  filterform.reset();
});