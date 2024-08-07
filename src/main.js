import { renderItems } from './view.js';

import data from './data/dataset.js';
const mainContainer = document.getElementById("root")
mainContainer.appendChild(renderItems(data))
console.log()

const muscleGroupFilter = document.querySelector("#filter")
console.log(muscleGroupFilter);
muscleGroupFilter.addEventListener("change" , function(){
    console.log('Hola Mundo');
})
