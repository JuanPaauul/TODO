import * as f from "./App.js";
import TasksList from "./TasksList.js";

const form = document.querySelector("#Organizador-form");
const filterform = document.querySelector("#filter-form");
const dataTable = document.querySelector("#todo-table");
var btnfilter = document.getElementById("#filter-button");

var todoIndex = 0;
var todoData = {};

let listOfTasks = new TasksList();
const listTask = document.querySelector("#list-task");
const taskName = document.querySelector("#task-name");
const taskType = document.querySelector("#task-type");
const taskLimitDate = document.querySelector("#task-limit-date");
const taskTags = document.querySelector("#task-tag");
const taskDescription = document.querySelector("#task-description");

function fillValuesToTable(table, task){
    let newTodoRowRef = table.insertRow(-1);
    newTodoRowRef.insertCell(0).textContent = task.Id;
    newTodoRowRef.insertCell(1).textContent = task.Name;
    newTodoRowRef.insertCell(2).textContent = task.Type;
    newTodoRowRef.insertCell(3).textContent = task.LimitDate;
    newTodoRowRef.insertCell(4).textContent = task.Tag;
    newTodoRowRef.insertCell(5).textContent = task.Description;
}

function addTasksToList(task){
    let todoTableRef = document.getElementById("todo-table");
    let newTodoRowRef = todoTableRef.insertRow(-1);
    newTodoRowRef.insertCell(0).textContent = task.Id;
    newTodoRowRef.insertCell(1).textContent = task.Name;
    newTodoRowRef.insertCell(2).textContent = task.Type;
    newTodoRowRef.insertCell(3).textContent = task.LimitDate;
    newTodoRowRef.insertCell(4).textContent = task.Tag;
    newTodoRowRef.insertCell(5).textContent = task.Description;
    newTodoRowRef.insertCell(6).innerHTML = "<button class='todo-table-button'>Marcar como terminado</button>";
    newTodoRowRef.insertCell(7).innerHTML = "<a href='#' class='btn btn-danger' name='delete'>Eliminar Tarea</a>";
}
function filtertasks(tasksFiltered) {
    let todoDoneTableRef = document.getElementById("todo-table-filter");
    let newTodoRowRef = todoDoneTableRef.insertRow(-1);
    tasksFiltered.forEach(task => {
        newTodoRowRef.insertCell(0).textContent = task.Id;
        newTodoRowRef.insertCell(1).textContent = task.Name;
        newTodoRowRef.insertCell(2).textContent = task.Type;
        newTodoRowRef.insertCell(3).textContent = task.LimitDate;
        newTodoRowRef.insertCell(4).textContent = task.Tag;
        newTodoRowRef.insertCell(5).textContent = task.Description;
    });
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    var taskCreate = f.insertNewTodoInTable(taskName.value, taskType.value, taskLimitDate.value, taskTags.value, taskDescription.value);
    addTasksToList(taskCreate);
    form.reset();
});

dataTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo-table-button')) {
        var tableRow = e.target.closest('tr');
        var task = f.markTaskAsDone(tableRow);
        fillValuesToTable(document.getElementById("todo-done-table"),task);
        tableRow.remove();
    }
    if (e.target.classList.contains('edit-table-button')) {
        f.editTask(e.target.closest('tr'));
    }
    f.deleteTask(e.target);
});

filterform.addEventListener("submit", (event) => {
    //filterform.reset();
    event.preventDefault();
    f.clearTable("todo-table-filter");
    let tipoFiltro = document.getElementById("task-filter");
    let elementoABuscar = document.getElementById("task-filter-input");
    switch (tipoFiltro.value) {
        case "EtiquetasF":
            let tasks = f.filtrarEtiquetas(elementoABuscar.value);
            if(tasks.length>0){
                filtertasks(tasks);
            }
            break;
        case "DescripcionF":

            break;

        default:
            break;
    }
    filterform.reset();
});