import Task from "./Task.js"

class TasksList {
    constructor() {
        this.tasksList = [];
    }
    get listLength(){
        return this.tasksList.length;
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
        let idList = [];
        for (var i = 0; i < this.tasksList.length; i++) {
            if (this.tasksList[i].Type == taskType) {
                idList.push(this.tasksList[i].Id);
            }
        }
        return idList;
    }
    getTaskByDate(taskDate){
        let idList = [];
        for (var i = 0; i < this.tasksList.length; i++) {
            if (this.tasksList[i].LimitDate == taskDate) {
                idList.push(this.tasksList[i].Id);
            }
        }
        return idList;
    }
    getTaskByTag(taskTag){
        let idList = [];
        for (var i = 0; i < this.tasksList.length; i++) {
            if (this.tasksList[i].Tag == taskTag) {
                idList.push(this.tasksList[i].Id);
            }
        }
        return idList;
    }
    getTaskByDescription(taskDescription){
        let idList = [];
        for (var i = 0; i < this.tasksList.length; i++) {
            if (this.tasksList[i].Description == taskDescription) {
                idList.push(this.tasksList[i].Id);
            }
        }
        return idList;
    }
    getTask(id){
        return this.tasksList[id];
    }
    addTask( name, type, limitdate, tags, description) {
        var id = this.listLength;
        var task = new Task(id, name, type, limitdate, tags, description);
        this.tasksList.push(task);
        id = id + 1;
    }
}

export default TasksList;