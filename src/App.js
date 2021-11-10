let AllTask = Array();

function createTask(nameTask,tipeTask)
{
    AllTask.push(nameTask +" , " +tipeTask);
    return(AllTask);
}

function returnEtiqueta(etiqueta)
{
    return "#etiqueta1"
}

function getDate(date) {
    return new Date(date).toISOString().split('T')[0];
}

module.exports = {createTask, returnEtiqueta, getDate};