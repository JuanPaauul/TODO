let AllTask = Array();

function createTask(nameTask,tipeTask)
{
    AllTask.push(nameTask +" , " +tipeTask);
    return(AllTask);
}

function returnEtiqueta(etiqueta)
{
    let etiquetasConHashtag=getEtiquetaSeparadas(etiqueta);
    let stringEtiquetas = etiquetasConHashtag.join(" ");
    return stringEtiquetas;
}

function getEtiquetaSeparadas(etiquetas)
{
    let separadas = etiquetas.split(',');
    for (let i = 0; i <separadas.length; i++) {
        separadas[i]="#"+separadas[i];
    }
    return separadas;
}

export function insertNewTodoInTable(todoFormData){
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

function getDate(date) {
    return new Date(date).toISOString().split('T')[0];
}

module.exports = {createTask, returnEtiqueta, getDate, insertNewTodoInTable};