import * as f from "./App.js";

const form = document.querySelector("#Organizador-form");
var todoIndex = 0;
var todoData = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todoFormData = new FormData(form);
  todoFormData["task-id"]=todoIndex.toString();
  insertNewTodoInTable(todoFormData, todoIndex);

  todoIndex =+ 1;
});
function insertNewTodoInTable(todoFormData){
  let todoTableRef = document.getElementById("todo-table");
  let newTodoRowRef = todoTableRef.insertRow(-1);
  let newTypeCellRef = newTodoRowRef.insertCell(0);
  let tableId = todoTableRef.rows.length - 1;
  newTypeCellRef.textContent = todoTableRef.rows.length - 1;
  newTypeCellRef = newTodoRowRef.insertCell(1);
  newTypeCellRef.textContent = todoFormData.get("task-name")
  newTypeCellRef = newTodoRowRef.insertCell(2);
  newTypeCellRef.textContent = todoFormData.get("task-type")
  newTypeCellRef = newTodoRowRef.insertCell(3);
  newTypeCellRef.textContent = todoFormData.get("task-limit-date")
  newTypeCellRef = newTodoRowRef.insertCell(4);
  newTypeCellRef.textContent = todoFormData.get("task-tag")
  newTypeCellRef = newTodoRowRef.insertCell(5);
  newTypeCellRef.innerHTML = "<input type='checkbox' name='task-done-" + tableId + "'></input>";
}