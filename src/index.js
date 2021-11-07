import * as f from "./App.js";
//import CreateTask from "./App.js"
const form = document.querySelector("#Organizador-form");
const taskName = document.querySelector("#name-task");
const direcciones = document.querySelector("#tipeTask");
const etiquetas=document.querySelector("#labelsTask");
const fechaLimite = document.querySelector("#fecha-limite");
const div = document.querySelector("#list-task");
//const div = document.querySelector("#pos-final");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todoFormData = new FormData(form);
  insertNewTodoInTable(todoFormData);
});
function insertNewTodoInTable(todoFormData){
    let todoTableRef = document.getElementById("todo-table");
    let newTodoRowRef = todoTableRef.insertRow(-1);
    let newTypeCellRef = newTodoRowRef.insertCell(0);
    newTypeCellRef.textContent = 1;
    newTypeCellRef = newTodoRowRef.insertCell(1);
    newTypeCellRef.textContent = todoFormData.get("task-name")
    newTypeCellRef = newTodoRowRef.insertCell(2);
    newTypeCellRef.textContent = todoFormData.get("task-type")
    newTypeCellRef = newTodoRowRef.insertCell(3);
    newTypeCellRef.textContent = todoFormData.get("task-limit-date")
    newTypeCellRef = newTodoRowRef.insertCell(4);
    newTypeCellRef.textContent = todoFormData.get("task-tag")
}