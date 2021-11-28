import TasksList from "./TasksList.js";

let AllTask = Array();

var etiquetas = [];
var tareas = [];
const listOfTasks = new TasksList();

function getEtiquetas() {
    return etiquetas;
}

function createTask(nameTask, tipeTask) {
    AllTask.push(nameTask + " , " + tipeTask);
    return (AllTask);
}

function returnEtiqueta(etiqueta) {
    let etiquetasConHashtag = getEtiquetaSeparadas(etiqueta);
    let stringEtiquetas = etiquetasConHashtag.join(" ");
    return stringEtiquetas;
}

function getEtiquetaSeparadas(etiquetas) {
    etiquetas = etiquetas.replace(/ /g, '');
    let separadas = etiquetas.split(',');
    separadas = eliminaRepetidas(separadas);
    for (let i = 0; i < separadas.length; i++) {
        separadas[i] = "#" + separadas[i];
    }
    return separadas;
}

function eliminaRepetidas(separadas) {
    let resultado = []
    separadas.forEach(element => {
        if (!resultado.includes(element)) {
            resultado.push(element);
        }
    });
    return resultado;
}

function insertNewTodoInTable(taskName, taskType, taskLimitDate, taskTags, taskDescription) {
    let tTags = returnEtiqueta(taskTags);
    return listOfTasks.addTask(taskName, taskType, taskLimitDate, tTags, taskDescription)
}

function markTaskAsDone(taskDone) {
    taskDone.deleteCell(-1);
    taskDone.deleteCell(-1);
    //let undoDone = taskDone.insertCell(-1);
    //undoDone.innerHTML = "<button class='undo-todo-table-button'>Desmarcar como terminado</button>";
    let todoTableRef = document.getElementById("todo-table");
    let todoDoneTableRef = document.getElementById("todo-done-table");
    todoDoneTableRef.append(taskDone);
}

function clearTable(TableID) {
    let TableRef = document.getElementById(TableID).rows;
    let size = TableRef.length;
    for (let i = 1; i < size; i++) {
        TableRef[i].remove();
    }
}

function editTask() {
    document.getElementById("task-tag").value = taskTags;

}

function deleteTask(element) {
    if (element.name === "delete") {
        element.parentElement.parentElement.remove();
    }
}

function getDate(date) {
    return new Date(date).toISOString().split('T')[0];
}

function filtrarEtiquetas(etiAbuscar) {
    let taskIdList = listOfTasks.getTaskByTag("#"+etiAbuscar);
    let tasks = [];
    taskIdList.forEach(id =>{
        tasks.push(listOfTasks.getTask(id));
    });
    return tasks;
}

export { createTask, returnEtiqueta, getDate, insertNewTodoInTable, markTaskAsDone, editTask, deleteTask, getEtiquetas, clearTable, filtrarEtiquetas };