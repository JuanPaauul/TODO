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
  alert(taskName.value);
  //alert(f.createTask(String(taskName.value + " \nEtiquetas: " + etiquetas.value + " \nFecha Limite: " + fechaLimite.value)));
  let ListTask =f.createTask(String(taskName.value), "Aqui deberia ir la cate de la tarea");
  alert("ListTask");
  div.innerHTML = "<p>" + JSON.stringify(ListTask) + String(" Etiquetas: " + etiquetas.value) + String(" Fecha Limite: " + fechaLimite.value) +"</p>";
});