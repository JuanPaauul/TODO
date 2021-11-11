import * as f from "./App.js";

const form = document.querySelector("#Organizador-form");


var todoIndex = 0;
var todoData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todoFormData = new FormData(form);
  todoFormData["task-id"]=todoIndex.toString();
  f.insertNewTodoInTable(todoFormData, todoIndex);
  todoIndex =+ 1;
});