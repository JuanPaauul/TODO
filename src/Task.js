class Task {
    constructor(id, name, type, limitdate, tag, description) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.limitdate = limitdate;
        this.tag = tag;
        this.description = description;
    }
    getId() {
		return this.id;
	}
    getName() {
        return this.name;
    }
    getLimitDate() {
        return this.limitdate;
    }
    getDescription() {
        return this.description;
    }
    setTask(newName, newType, newLimitDate, newDescription) {
        this.name = newName;
        this.type = newType;
        this.limitdate = newLimitDate;
        this.description = newDescription;

    }
}

export default Task;