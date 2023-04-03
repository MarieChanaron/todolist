// Modules
import eventListeners from './modules/service.mjs';
import { RANDOM_ICONS, RANDOM_NAMES } from './modules/utils.mjs';

const {handleSubmit} = eventListeners;

document.querySelector('input[type="submit"]').addEventListener('click', handleSubmit);

const select = document.querySelector('select');

for (let i = 0; i < RANDOM_NAMES.length; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.innerText = `${RANDOM_NAMES[i]} ${RANDOM_ICONS[i]}`;
    select.appendChild(option);
}