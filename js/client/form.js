// Modules
import {handleSubmit} from './app.js';
import { RANDOM_ICONS, RANDOM_NAMES, generateRandomTask } from './utils.mjs';


document.querySelector('input[type="submit"]').addEventListener('click', handleSubmit);


const generateRandom = event => {
    event.preventDefault();
    document.querySelector('textarea').value = generateRandomTask().description;
    document.querySelector(`option[value="${Math.floor(Math.random() * RANDOM_NAMES.length)}"]`).setAttribute('selected', true);
}


const initializeFormPage = () => {

    const select = document.querySelector('select');

    for (let i = 0; i < RANDOM_NAMES.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = `${RANDOM_NAMES[i]} ${RANDOM_ICONS[i]}`;
        select.appendChild(option);
    }
    
    document.querySelector('form a').addEventListener('click', generateRandom)

}

initializeFormPage();