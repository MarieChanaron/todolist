// Modules
import { generateRandomTask, generateRandomUser, findIndex } from "./utils.js";
import { displayTask } from "./display.mjs";

// Classes
import { Task } from '../classes/task.js';
import { User } from '../classes/user.js';
import { TaskManager } from '../classes/taskManager.js';



const taskManager = new TaskManager();


// Récupérer les tâches et les afficher

export const initializeApp = (count) => {
    for (let i = 0; i < count; i++) {
        const {name, icon} = generateRandomUser();
        const {id, state, description} = generateRandomTask();
        const user = new User(name, icon);
        const task = new Task(id, state, description, user);
        taskManager.add(task);
        displayTask(task);
    }
}

const deleteTask = (event) => {
    const row = event.target.parentNode.parentNode;
    const id = row.id;
    // Remove the task from the taskManager
    const index = findIndex(id, taskManager.tasks);
    taskManager.delete(index);
    // Remove from the DOM
    const tableBody = document.querySelector("tbody");
    tableBody.removeChild(row);
}

const changeStatus = event => {
    const id = event.target.parentNode.parentNode.id;
    const index = findIndex(id, taskManager);
    console.log(index);
}

export default {deleteTask, changeStatus};