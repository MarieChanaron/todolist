/*
* This file handles all CRUD operations
*/

// Modules
import { generateRandomTask, generateRandomUser, findIndex } from "./utils.js";
import { displayTask } from "./display.mjs";
import { RANDOM_ICONS, RANDOM_NAMES } from './utils.js';

// Classes
import { Task } from '../classes/task.js';
import { User } from '../classes/user.js';
import { TaskManager } from '../classes/taskManager.js';



const taskManager = new TaskManager();


// Récupérer les tâches et les afficher

export const initializeApp = (count) => {
    for (let i = 0; i < count; i++) {
        const {name, icon} = generateRandomUser();
        const {state, description} = generateRandomTask();
        const user = new User(name, icon);
        const task = new Task(state, description, user);
        taskManager.add(task);
        displayTask(task);
    }
    console.log(taskManager);
}

const deleteTask = (event) => {
    const row = event.target.parentNode.parentNode;
    const id = row.dataset.id;
    // Remove the task from the taskManager
    const index = findIndex(id, taskManager.tasks);
    taskManager.delete(index);
    // Remove from the DOM
    const tableBody = document.querySelector("tbody");
    tableBody.removeChild(row);
}

const changeStatus = event => {
    const id = event.target.parentNode.parentNode.dataset.id;
    const index = findIndex(id, taskManager.tasks);
    const task = taskManager.tasks[index];
    task.toggleState();
}

const addTask = (state, description, user) => {
    const newTask = new Task(state, description, user);
    taskManager.add(newTask);
    console.log(taskManager);
}

const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.forms[0];
    addTask(
        form[0].checked,
        form[1].value,
        {
            name: RANDOM_NAMES[form[2].value], 
            icon: RANDOM_ICONS[form[2].value]
        }
    );
    document.querySelector('form + p').innerText = 'La tâche a bien été ajoutée.';
    document.forms[0].reset();
}


export default {deleteTask, changeStatus, handleSubmit};