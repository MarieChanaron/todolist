import { generateRandomTodos } from "./generateRandomTodos.js";

const task = generateRandomTodos();

// const state = task.done;
// const id = task.id;
// const description = task.text;
// const user = {
//     name: task.user.name, 
//     icon: task.user.icon
// }

const tableBody = document.querySelector('tbody');

const row = document.createElement('tr');

const firstColumn = document.createElement('td');
const checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
// if (state) {
//     checkbox.setAttribute('checked', true);
// } 
firstColumn.appendChild(checkbox);
row.appendChild(firstColumn);

const secondColumn = document.createElement('td');
const taskDescription = document.createElement('p');
secondColumn.appendChild(taskDescription);
row.appendChild(secondColumn);

const thirdColumn = document.createElement('td');
const user = document.createElement('p');
const userName = document.createElement('span');
const userIcon = document.createElement('span');
user.appendChild(userName);
user.appendChild(userIcon);
thirdColumn.appendChild(user);
row.appendChild(thirdColumn);

tableBody.appendChild(row);

console.log(task);