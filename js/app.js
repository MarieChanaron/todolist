import { allTasks, retrieveAllTasks } from "./service.mjs";
import { generateRandomTodos } from "./utils.js";

// Initialize Tasks

const tasks = generateRandomTodos(10);

console.log(tasks[0]);

tasks.forEach(task => {
    allTasks.push(task);
});

retrieveAllTasks();