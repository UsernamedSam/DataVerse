import { renderItems } from './view.js';
import data from './data/dataset.js'; 
import { muscleGroupFilter } from './dataFunctions.js'; 
import { sortExercises } from './dataFunctions.js';

let criteriaOrder = 'asc'; //indica el criterio de ordenamiento inicial, está configurado a 'asc'

//sortCriteria: El criterio de ordenamiento, que puede ser 'asc' o 'dsc' 
function showExercises(exercises, sortCriteria) {
  const mainContainer = document.getElementById("root");
  //Limpiar el contenido incial
  mainContainer.innerHTML = "";
  exercises = sortExercises(exercises, 'name', sortCriteria);
  mainContainer.appendChild(renderItems(exercises)); // Agrega la nueva lista de ejercicios filtrados
}

showExercises(data,criteriaOrder); //mostrar todos los ejercicios al cargar la página inicialmente.

const muscleGroupFilterElement = document.querySelector("#filter") // Se selecciona el elemento para filtrar por grupo muscular
console.log(muscleGroupFilterElement);

let exerciseForShowing = data;

muscleGroupFilterElement.addEventListener("change", function () {
  const selectedGroup = muscleGroupFilterElement.value; // Obtiene el valor seleccionado en el filtro
  console.log(`Grupo muscular seleccionado: ${selectedGroup}`);

  if(selectedGroup === "all"){
    exerciseForShowing = data;
    showExercises(exerciseForShowing, criteriaOrder);
  } else {
    exerciseForShowing = muscleGroupFilter(data, selectedGroup);
    console.log('Ejercicios filtrados:', exerciseForShowing);
    // Asegúra de que los ejercicios filtrados no estén vacíos
    if (exerciseForShowing.length > 0) {
      showExercises(exerciseForShowing, criteriaOrder); // Muestra los ejercicios filtrados
    } 
  }

})

const sortElm = document.getElementById("sort");
sortElm.addEventListener("change", function(evt){
  console.log(evt.target.value);
  criteriaOrder = evt.target.value;
  if(exerciseForShowing.length === 0){
    return;
  }

  console.log('exerciseForShowing -->', exerciseForShowing);
  showExercises(exerciseForShowing, evt.target.value);

})


