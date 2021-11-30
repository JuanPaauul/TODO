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
    let task = listOfTasks.getTask(taskDone.cells[0].textContent);
    task.Done();
    console.log(task);
    return task;
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

function filtrarFechas(fechaABuscar){
    let taskIdList = listOfTasks.getTaskByDate(fechaABuscar);
    let tasks = [];
    taskIdList.forEach(id =>{
        tasks.push(listOfTasks.getTask(id));
    });
    return tasks;
    /*let tabla = document.getElementById("todo-table").rows;
    let row = tabla[tabla.length - 1];
    let cell;
    let cellvalue;
    for (let i = 0; i < tabla.length; i++) {
        row = tabla[i];
        cell=row.cells[3];
        cellvalue=cell.innerHTML;
        if(cellvalue==fechaABuscar)
        {
            filtertasks(row);
        }
    }*/
}
function filtrarDescripcion(etiAbuscar) {
    let taskIdList = listOfTasks.getTaskByDescription(etiAbuscar);
    let tasks = [];
    taskIdList.forEach(id =>{
        tasks.push(listOfTasks.getTask(id));
    });
    return tasks;
}

function filtrarCategoria(categoriaAbuscar) {
    let taskIdList = listOfTasks.getTaskByType(categoriaAbuscar);
    let tasks = [];
    taskIdList.forEach(id =>{
        tasks.push(listOfTasks.getTask(id));
    });
    return tasks;
}
function filtrarNombre(nombreAbuscar) {
    let taskIdList = listOfTasks.getTaskByName(nombreAbuscar);
    let tasks = [];
    taskIdList.forEach(id =>{
        tasks.push(listOfTasks.getTask(id));
    });
    return tasks;
}


export { createTask, returnEtiqueta, getDate, insertNewTodoInTable, markTaskAsDone, editTask, deleteTask, getEtiquetas, filtrarEtiquetas, filtrarFechas,filtrarDescripcion, filtrarCategoria,filtrarNombre };
