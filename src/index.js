import * as f from "./App.js";
const form = document.querySelector("#Organizador-form");
const taskName = document.querySelector("#name-task");
const direcciones = document.querySelector("#tipeTask");
const etiquetas=document.querySelector("#labelsTask");
const fechaLimite = document.querySelector("#fecha-limite");
//const div = document.querySelector("#pos-final");

form.addEventListener("submit", (event) => {
  event.preventDefault();
    alert(f.createTask(String(taskName.value + " \nEtiquetas: " + etiquetas.value + " \nFecha Limite: " + fechaLimite.value)));
  //div.innerHTML = "<p>" + moverAuto( String( posIni+"/"+direcc)) + "</p>";
});