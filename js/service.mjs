import { findIndex } from "./utils.js";

export const allTasks = [];

// Récupérer les tâches et les afficher

const displayTask = (task) => {
    const tableBody = document.querySelector("tbody");
  
    const row = document.createElement("tr");
    row.setAttribute("id", task.id);
  
    const firstColumn = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    if (task.done === true) {
      checkbox.setAttribute("checked", true);
    }
    checkbox.onclick = changeStatus;
    firstColumn.appendChild(checkbox);
    row.appendChild(firstColumn);
  
    const secondColumn = document.createElement("td");
    const taskDescription = document.createElement("p");
    secondColumn.appendChild(taskDescription);
    taskDescription.innerText = task.text;
    row.appendChild(secondColumn);
  
    const thirdColumn = document.createElement("td");
    const user = document.createElement("p");
    const userName = document.createElement("span");
    userName.innerText = task.user.name;
    const userIcon = document.createElement("span");
    userIcon.innerText = task.user.icon;
    user.appendChild(userName);
    user.appendChild(userIcon);
    thirdColumn.appendChild(user);
    row.appendChild(thirdColumn);

    const fourthColumn = document.createElement("td");
    const box = document.createElement("p"); 
    box.classList.add('trash');
    box.innerHTML = '&#128465;';
    box.onclick = deleteTask;
    fourthColumn.appendChild(box);
    row.appendChild(fourthColumn);
  
    tableBody.appendChild(row);
};

export const retrieveAllTasks = () => {
    allTasks.forEach(task => {
        displayTask(task);
    });
}

const deleteTask = (event) => {
    const row = event.target.parentNode.parentNode;
    const id = row.id;
    // Remove the task from the array
    const index = findIndex(id, allTasks);
    allTasks.splice(index, 1);
    // Remove from the DOM
    const tableBody = document.querySelector("tbody");
    tableBody.removeChild(row);
}

const changeStatus = event => {
    const id = event.target.parentNode.parentNode.id;
    const index = findIndex(id, allTasks);
    console.log(index);
}