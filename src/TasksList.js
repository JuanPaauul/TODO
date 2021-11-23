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
    addTask( name, type, limitdate, label, description) {
        const task = new Task(this.lastTaskInserted, name, type, limitdate, label, description);
        this.tasksList.push(task);
        this.lastTaskInserted=this.lastTaskInserted+1;
    }
}

export default TasksList;