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
    return listOfTasks.addTask(taskName, taskType, taskLimitDate, taskTags, taskDescription)
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

function filtertasks(filtered) {
    let todoDoneTableRef = document.getElementById("todo-table-filter");
    let newTodoRowRef = todoDoneTableRef.insertRow(-1);
    let newTypeCellRef = newTodoRowRef.insertCell(0);
    newTypeCellRef.textContent = filtered.cells[0].innerHTML;
    newTypeCellRef = newTodoRowRef.insertCell(1);
    newTypeCellRef.textContent = filtered.cells[1].innerHTML;
    newTypeCellRef = newTodoRowRef.insertCell(2);
    newTypeCellRef.textContent = filtered.cells[2].innerHTML;
    newTypeCellRef = newTodoRowRef.insertCell(3);
    newTypeCellRef.textContent = filtered.cells[3].innerHTML;
    newTypeCellRef = newTodoRowRef.insertCell(4);
    newTypeCellRef.textContent = filtered.cells[4].innerHTML;
    newTypeCellRef = newTodoRowRef.insertCell(5);
    newTypeCellRef.textContent = filtered.cells[5].innerHTML;
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
    let eti = getEtiquetas();
    let c = 1;
    let tabla = document.getElementById("todo-table").rows;
    let row = tabla[tabla.length - 1];
    eti.forEach(element => {
        let separado = element.split(' ');
        separado.forEach(elemento => {
            if (elemento === "#" + etiAbuscar) {
                row = tabla[c];
                filtertasks(row);
            }
        });
        c++;
    });
}

export { createTask, returnEtiqueta, getDate, insertNewTodoInTable, markTaskAsDone, editTask, deleteTask, filtertasks, getEtiquetas, clearTable, filtrarEtiquetas };