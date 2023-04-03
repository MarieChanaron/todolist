import { generateRandomTodos } from "./generateRandomTodos.js";



// const state = task.done;
// const id = task.id;
// const description = task.text;
// const taskUser = {
//     name: task.user.name,
//     icon: task.user.icon
// }

const addTaskToTable = (task) => {
  const tableBody = document.querySelector("tbody");

  const row = document.createElement("tr");
  row.setAttribute("id", task.id);

  const firstColumn = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  if (task.done === true) {
    checkbox.setAttribute("checked", true);
  }
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

  tableBody.appendChild(row);
};

const initializeTable = nbTasks => {
    for (let i = 0; i < nbTasks; i ++) {
        const task = generateRandomTodos()[0];
        addTaskToTable(task);
    }
}

initializeTable(10);

console.log(task);
