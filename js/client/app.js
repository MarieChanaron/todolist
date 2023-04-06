import { findIndex, RANDOM_ICONS, RANDOM_NAMES } from "./utils.mjs";

// Classes
import { Task } from './classes/task.mjs';
import { User } from './classes/user.mjs';
import { TaskManager } from './classes/taskManager.mjs';


let taskManager;

if (taskManager === undefined) {
    taskManager = new TaskManager();
}


// EVENT HANDLERS */

// Export data on click
const saveButton = document.querySelector('table + button');
if (saveButton) {
    saveButton.addEventListener('click', () => taskManager.export());
}


const deleteTask = (event) => {
    const row = event.target.parentNode.parentNode;
    const id = row.dataset.id;
    const index = findIndex(id, taskManager.tasks); // Remove from the array
    taskManager.delete(index);
    const tableBody = document.querySelector("tbody");
    tableBody.removeChild(row); // Remove from the DOM
}

const changeStatus = event => {
    console.log(taskManager);
    const row = event.target.parentNode.parentNode;
    row.classList.toggle('strikethrough');
    const id = row.dataset.id;
    console.log(taskManager);
    const index = findIndex(id, taskManager.tasks);
    const task = taskManager.tasks[index];
    task.toggleState();
    console.log(taskManager);
}

export const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.forms[0];
    const userIndex = Number(form[1].value);
    addTask(
        true,
        form[0].value,
        {
            name: RANDOM_NAMES[userIndex], 
            icon: RANDOM_ICONS[userIndex]
        }
    );
    document.querySelector('form + p').innerText = 'The task has been added.';
    document.forms[0].reset();
}


const addTask = (state, description, user) => {
    const newUser = new User(user.name, user.icon);
    const newTask = new Task(state, description, newUser);
    taskManager.add(newTask);
}


/* GENERATE DOM ELEMENTS */

const createRow = (id, state) => {
    const row = document.createElement("tr");
    row.setAttribute("data-id", id);
    if (!state)  {
        row.classList.add("strikethrough");
    }
    return row;
}

const createStatusBox = state => {
    const statusBox = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    if (state === true) {
      checkbox.setAttribute("checked", true);
    }
    checkbox.onclick = changeStatus;
    statusBox.appendChild(checkbox);
    return statusBox;
}

const createDescriptionBox = description => {
    const descriptionBox = document.createElement("td");
    const taskDescription = document.createElement("p");
    descriptionBox.appendChild(taskDescription);
    taskDescription.innerText = description;
    return descriptionBox
}

const createUserBox = user => {
    const userBox = document.createElement("td");
    const userElement = document.createElement("p");
    const userName = document.createElement("span");
    userName.innerText = user.name;
    const userIcon = document.createElement("span");
    userIcon.innerText = user.icon;
    userElement.appendChild(userName);
    userElement.appendChild(userIcon);
    userBox.appendChild(userElement);
    return userBox;
}

const createTrashBox = () => {
    const trashBox = document.createElement("td");
    const box = document.createElement("p"); 
    box.classList.add('trash');
    box.innerHTML = '&#128465;';
    box.onclick = deleteTask;
    trashBox.appendChild(box);
    return trashBox;
}

export const displayTask = (task) => {
    const {id, state, description, user} = task;

    const tableBody = document.querySelector("tbody");

    const row = createRow(id, state);
    const statusBox = createStatusBox(state);
    const descriptionBox = createDescriptionBox(description);
    const userBox = createUserBox(user);
    const trashBox = createTrashBox();

    row.appendChild(statusBox);
    row.appendChild(descriptionBox);
    row.appendChild(userBox);
    row.appendChild(trashBox);

    if (tableBody) {
        tableBody.appendChild(row);
    }
};