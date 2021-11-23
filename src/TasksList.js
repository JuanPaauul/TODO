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
    getTaskByName(taskName) {
        let idList = [];
        for (var i = 0; i < this.tasksList.length; i++) {
            if (this.tasksList[i].Name == taskName) {
                idList.push(this.tasksList[i].Id);
            }
        }
        return idList;
    }
    getTaskByType(taskType){
        let id;
        let idList = [];
        this.tasksList.forEach(function(task){
            if(task.Type == taskType){
                idList.push(task.Id);
            } 
        });
        if(idList.length == 1)
            id = idList[0];
        else
            id = idList;
        return id;
    }
    getTaskByDate(taskDate){
        let id;
        let idList = [];
        this.tasksList.forEach(function(task){
            if(task.LimitDate == taskDate){
                idList.push(task.Id);
            } 
        });
        if(idList.length == 1)
            id = idList[0];
        else
            id = idList;
        return id;
    }
    getTaskByTag(taskTag){
        let id;
        let idList = [];
        this.tasksList.forEach(function(task){
            if(task.Tag == taskTag){
                idList.push(task.Id);
            } 
        });
        if(idList.length == 1)
            id = idList[0];
        else
            id = idList;
        return id;
    }
    getTaskByDescription(taskDescription){
        let id;
        let idList = [];
        this.tasksList.forEach(function(task){
            if(task.Description == taskDescription){
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