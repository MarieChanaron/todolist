// Modules
import {handleSubmit} from './app.js';
import { RANDOM_ICONS, RANDOM_NAMES } from './utils.mjs';


document.querySelector('input[type="submit"]').addEventListener('click', handleSubmit);


const addSelectOptions = () => {

    const select = document.querySelector('select');

    for (let i = 0; i < RANDOM_NAMES.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.innerText = `${RANDOM_NAMES[i]} ${RANDOM_ICONS[i]}`;
        select.appendChild(option);
    }

}

addSelectOptions();