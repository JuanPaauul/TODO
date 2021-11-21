import Task from "./Task.js"

class TasksList {
    constructor() {
        this.tasksList = [];
    }
    addTask(id, name, type, limitdate, label, description) {
        let task = new Task(id, name, type, limitdate, label, description);
        this.tasksList.push(task);
    }
}

export default TasksList;