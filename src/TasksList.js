import Task from "./Task.js"

class TasksList {
    constructor() {
        this.tasksList = [];
    }

    addTask(newName, newType, newLimitDate, newDescription) {
        let task = new Task(newName, newType, newLimitDate, newDescription);
        this.tasksList.push(task);
    }
}

export default {TasksList}