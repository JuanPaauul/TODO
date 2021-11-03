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

function getDate(date) {
    return new Date(date).toISOString().split('T')[0];
}

module.exports = {createTask, returnEtiqueta, getDate};