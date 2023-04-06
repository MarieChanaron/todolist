// Modules
import { generateRandomTask, generateRandomUser } from "../utils.mjs";
import { displayTask } from "../app.js";

// Classes
import { Task } from './task.mjs';
import { User } from './user.mjs';


export class TaskManager {


    constructor() {

        // if (!window.location.href.includes('index.html')) {
        //     return;
        // }

        this._tasks = [];
        console.log(typeof this._tasks === "object");
        console.log("in the constructor " + window.location.href);
        console.log(typeof this._tasks === "object");
        console.log(Object.keys(this._tasks).length);

        fetch('http://localhost:3000/tasks', 
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then(response => {
            if (Array.isArray(response) && response.length !== 0) {
                for (let i = 0; i < response[0].length; i++) {
                    const record = response[0][i];
                    const user = new User(record['_user']['_icon'], record['_user']['_name']);
                    const task = new Task(record['_state'], record['_description'], user);
                    this._tasks.push(task);
                    console.log(Object.keys(this._tasks).length);
                    displayTask(task);
                }
            } else {
                for (let i = 0; i < 10; i++) {
                    const {name, icon} = generateRandomUser();
                    const {state, description} = generateRandomTask();
                    const user = new User(name, icon);
                    const task = new Task(state, description, user);
                    this._tasks.push(task);
                    displayTask(task);
                }
                this.export();
            }
        })
        .catch(err => console.log(err));
    }


    get tasks() {

        fetch('http://localhost:3000/tasks', 
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then(response => {
            if (Array.isArray(response) && response.length !== 0) {
                for (let i = 0; i < response[0].length; i++) {
                    const record = response[0][i];
                    const user = new User(record['_user']['_icon'], record['_user']['_name']);
                    const task = new Task(record['_state'], record['_description'], user);
                    this._tasks.push(task);
                    displayTask(task);
                }
            }
        });

        return this._tasks;
    }


    add(task) {
        console.log(this._tasks);
        this._tasks.push(task);
        console.log(this._tasks);
        this.export();
    }


    delete(index) {
        this._tasks.splice(index, 1);
    }


    export() {

        this.tasks;

        console.log(JSON.stringify(this.tasks));

        fetch('http://localhost:3000/tasks', 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.tasks)
            }
        ).then(response => response.json())
        .then(response => console.log(JSON.stringify(response)));
    }
    
}