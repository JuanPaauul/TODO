let AllTask = Array();
function createTask(nameTask)
{
    AllTask.push(nameTask);
    return(nameTask);
}

function returnEtiqueta(etiqueta)
{
    return "#etiqueta1"
}

module.exports = {createTask, returnEtiqueta, getDate};