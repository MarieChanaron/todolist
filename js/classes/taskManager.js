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

    export() {
        fetch('http://localhost:3000/upload-json', 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"tasks": this.tasks})
            }
        ).then(response => response.json())
        .then(response => console.log(JSON.stringify(response)));
    }
    
}