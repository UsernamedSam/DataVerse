//import { example } from './dataFunctions.js'; 
import { renderItems } from './view.js';

import data from './data/dataset.js';
const mainContainer = document.getElementById("root")
mainContainer.appendChild(renderItems(data))
console.log()

