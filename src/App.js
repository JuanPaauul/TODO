let AllTask = Array();

var etiquetas=[];

function getEtiquetas()
{
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
    etiquetas=etiquetas.replace(/ /g,'');
    let separadas = etiquetas.split(',');
    separadas=eliminaRepetidas(separadas);
    for (let i = 0; i < separadas.length; i++) {
        separadas[i] = "#" + separadas[i];
    }
    return separadas;
}

function eliminaRepetidas(separadas)
{
    let resultado=[]
    separadas.forEach(element => {
        if(!resultado.includes(element))
        {
            resultado.push(element);
        }
    });
    return resultado;
}

function insertNewTodoInTable(todoFormData, taskId) {
    let todoTableRef = document.getElementById("todo-table");
    let newTodoRowRef = todoTableRef.insertRow(-1);
    let taskTags = todoFormData.get("task-tag");
    let tags = returnEtiqueta(taskTags);
    let newTypeCellRef = newTodoRowRef.insertCell(0);
    newTypeCellRef.textContent = taskId
    newTypeCellRef = newTodoRowRef.insertCell(1);
    newTypeCellRef.textContent = todoFormData.get("task-name")
    newTypeCellRef = newTodoRowRef.insertCell(2);
    newTypeCellRef.textContent = todoFormData.get("task-type")
    newTypeCellRef = newTodoRowRef.insertCell(3);
    newTypeCellRef.textContent = todoFormData.get("task-limit-date")
    newTypeCellRef = newTodoRowRef.insertCell(4);
    newTypeCellRef.textContent = tags;
    etiquetas.push(tags);
    newTypeCellRef = newTodoRowRef.insertCell(5);
    newTypeCellRef.textContent = todoFormData.get("task-description");
    newTypeCellRef = newTodoRowRef.insertCell(6);
    newTypeCellRef.innerHTML = "<button class='todo-table-button'>Marcar como terminado</button>";
    newTypeCellRef = newTodoRowRef.insertCell(7);
    newTypeCellRef.innerHTML = "<a href='#' class='btn btn-danger' name='delete'>Eliminar Tarea</a>";

}

function markTaskAsDone(taskDone){
    taskDone.deleteCell(-1);
    taskDone.deleteCell(-1);
    //let undoDone = taskDone.insertCell(-1);
    //undoDone.innerHTML = "<button class='undo-todo-table-button'>Desmarcar como terminado</button>";
    let todoTableRef = document.getElementById("todo-table");
    let todoDoneTableRef = document.getElementById("todo-done-table");
    todoDoneTableRef.append(taskDone);
}

function filtertasks(filtered)
{
    let todoDoneTableRef = document.getElementById("todo-table-filter");
    let newTodoRowRef = todoDoneTableRef.insertRow(-1);
    let newTypeCellRef = newTodoRowRef.insertCell(0);
    newTypeCellRef.textContent=filtered.cells[0].innerHTML;
    newTypeCellRef=newTodoRowRef.insertCell(1);
    newTypeCellRef.textContent=filtered.cells[1].innerHTML;
    newTypeCellRef=newTodoRowRef.insertCell(2);
    newTypeCellRef.textContent=filtered.cells[2].innerHTML;
    newTypeCellRef=newTodoRowRef.insertCell(3);
    newTypeCellRef.textContent=filtered.cells[3].innerHTML;
    newTypeCellRef=newTodoRowRef.insertCell(4);
    newTypeCellRef.textContent=filtered.cells[4].innerHTML;
    newTypeCellRef=newTodoRowRef.insertCell(5);
    newTypeCellRef.textContent=filtered.cells[5].innerHTML;
}

function editTask(){
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

export { createTask, returnEtiqueta, getDate, insertNewTodoInTable, markTaskAsDone, editTask, deleteTask, filtertasks,getEtiquetas};