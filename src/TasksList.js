import Task from "./Task.js"

class TasksList {
    lastTaskInserted;
    constructor() {
        this.tasksList = [];
        this.lastTaskInserted =0;
    }
    get listLength(){
        return this.lastTaskInserted;
    }
    getTaskByName(taskName){
        let id;
        let idList = [];
        this.tasksList.forEach(function(task){
            if(task.Name == taskName){
                idList.push(task.Id);
            } 
        });
        if(idList.length == 1)
            id = idList[0];
        else
            id = idList;
        return id;
    }
    getTask(id){
        return this.tasksList[id];
    }
    addTask( name, type, limitdate, label, description) {
        const task = new Task(this.lastTaskInserted, name, type, limitdate, label, description);
        this.tasksList.push(task);
        this.lastTaskInserted=this.lastTaskInserted+1;
    }
}

export default TasksList;