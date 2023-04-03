export class TaskManager {

    constructor() {
        this._tasks = [];
    }

    get tasks() {
        return this._tasks;
    }

    add(task) {
        this._tasks.push(task);
    }

    delete(index) {
        this._tasks.splice(index, 1);
    }
    
}