import { generateTasks, addContent } from "./modules/service.mjs";


const fetchDb = async() => {
    fetch('http://localhost:3000/tasks', 
    {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {addContent(response);})
    .catch(err => {
        console.log(err);
        generateTasks(10);
    });
}

fetchDb();