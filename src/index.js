import * as f from "./App.js";

const form = document.querySelector("#Organizador-form");


var todoIndex = 0;
var todoData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todoFormData = new FormData(form);
  if(todoFormData.get("task-name") !=""){
    todoFormData["task-id"]=todoIndex.toString();
    f.insertNewTodoInTable(todoFormData, todoIndex);
  }
  else{
    alert("Acaba de ingresar un nombre de tarea vacio"+todoFormData.get("task-name")+ " \nPorfavor ingrese un nombre correcto de tarea");
  }
  todoIndex =+ 1;
});