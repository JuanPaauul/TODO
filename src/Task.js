class Task {
    constructor(id, name, type, limitdate, label, description) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.limitdate = limitdate;
        this.label = label;
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
}

export default {Task}