import eventHandlers from './service.mjs';

const createRow = id => {
    const row = document.createElement("tr");
    row.setAttribute("data-id", id);
    return row;
}

const createStatusBox = state => {
    const statusBox = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    if (state === true) {
      checkbox.setAttribute("checked", true);
    }
    checkbox.onclick = eventHandlers.changeStatus;
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
    box.onclick = eventHandlers.deleteTask;
    trashBox.appendChild(box);
    return trashBox;
}


export const displayTask = (task) => {
    const {id, state, description, user} = task;

    const tableBody = document.querySelector("tbody");

    const row = createRow(id);
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