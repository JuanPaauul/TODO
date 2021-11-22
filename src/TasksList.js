import Task from "./Task.js"

class TasksList {
    id;
    constructor() {
        this.tasksList = [];
        this.id =0;
    }
    addTask( name, type, limitdate, label, description) {
        const task = new Task(this.id, name, type, limitdate, label, description);
        this.tasksList.push(task);
        console.log(this.tasksList.length);
        this.id=this.id+1;
    }
}

export default TasksList;