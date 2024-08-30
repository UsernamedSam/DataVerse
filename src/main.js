import { renderItems } from './view.js';
import data from './data/dataset.js'; 
import { muscleGroupFilter } from './dataFunctions.js'; 
import { sortExercises } from './dataFunctions.js';

let criteriaOrder = 'asc'; 

function showExercises(exercises, sortCriteria) {
  const mainContainer = document.querySelector("#root");
  mainContainer.innerHTML = "";
  exercises = sortExercises(exercises, 'name', sortCriteria);
  mainContainer.appendChild(renderItems(exercises)); 
}

showExercises(data,criteriaOrder);

const muscleGroupFilterElement = document.querySelector("#filter") 
console.log(muscleGroupFilterElement);

let exerciseForShowing = data;

muscleGroupFilterElement.addEventListener("change", function () {
  const selectedGroup = muscleGroupFilterElement.value; 
  console.log(`Grupo muscular seleccionado: ${selectedGroup}`);

  if(selectedGroup === "all"){
    exerciseForShowing = data;
    showExercises(exerciseForShowing, criteriaOrder);
  } else {
    exerciseForShowing = muscleGroupFilter(data, selectedGroup);
    console.log('Ejercicios filtrados:', exerciseForShowing);
    if (exerciseForShowing.length > 0) {
      showExercises(exerciseForShowing, criteriaOrder); 
    } 
  }
  
})

const sortElm = document.querySelector("#sort");
sortElm.addEventListener("change", function(evt){
  console.log(evt.target.value);
  criteriaOrder = evt.target.value;
  if(exerciseForShowing.length === 0){
    return;
  }

  console.log('exerciseForShowing -->', exerciseForShowing);
  showExercises(exerciseForShowing, evt.target.value);

})


