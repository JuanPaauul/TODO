
import CreateTask from "./App.js";
const form = document.querySelector("#Organizador-form");
const taskName = document.querySelector("#name-task");
const direcciones = document.querySelector("#tipeTask");
//const div = document.querySelector("#pos-final");

form.addEventListener("submit", (event) => {
  event.preventDefault();
   alert(CreateTask(String(taskName.value)));
  //div.innerHTML = "<p>" + moverAuto( String( posIni+"/"+direcc)) + "</p>";
  

});