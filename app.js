// import functions
import { getPokedex } from './fetch-utils.js';
// grab DOM elements
const template = document.querySelector('#template');
const selectorEl = document.querySelector('select');
const list = document.querySelector('#list');
const errorEl = document.querySelector('#error-message');

async function loadPokedex() {
    const pokedex = await getPokedex();

    list.classList.add('pokemon');

    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('h2');
        const image = clone.querySelector('img');
        const type = clone.querySelector('h6');


        name.textContent = 'Name: ' + pokemon.pokemon;
        type.textContent = 'Type: ' + pokemon.type_1 + pokemon.type_2;

        image.src = pokemon.url_image;
        image.alt = 'photo of ' + pokemon.pokemon; 

        list.appendChild(clone);
    }
}
// set event listeners 
selectorEl.addEventListener('change', async(event) => {
    const selected = event.target.value;

    if (selected === 'none') {
        const p = document.createElement('p');

        p.textContent = 'please select an API';

        errorEl.appendChild(p);
    } else if (selected === 'pokemon') {
        list.innerHTML = '';
        errorEl.innerHTML = '';

        await loadPokedex();
    } else if (selected === 'star-wars') {
        //do some star wars stuff
        
    }
});
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
