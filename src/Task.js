class Task {
    //id=0;
    name;
    id;
    type;
    limitdate;
    tag;
    description;
    constructor(id, name, type, limitdate, tag, description) {
       this.id = id;
        this.name = name;
        this.type = type;
        this.limitdate = limitdate;
        this.tag = tag;
        this.description = description;
    }
    get Id() {
		return this.id;
	}
    get Name() {
        return this.name;
    }
    get LimitDate() {
        return this.limitdate;
    }
    get Description() {
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