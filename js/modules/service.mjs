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
    console.log(event.target.parentNode);
    const id = event.target.parentNode.parentNode.dataset.id;
    const index = findIndex(id, taskManager.tasks);
    const task = taskManager.tasks[index];
    task.toggleState();
}

export default {deleteTask, changeStatus};