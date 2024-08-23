export function muscleGroupFilter(exercises, muscleGroup) {
  return exercises.filter(function(exercise) {
    //console.log('filtrando...' , exercise);
    return exercise.facts.muscleGroup === muscleGroup;
    
  }
  )}

function ascendingOrder(a,b) {
  return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
}
//Si a.name es mayor que b.name (según el orden alfabético), retorna 1, indicando que a debería ir después de b.
//Si b.name es mayor que a.name, retorna -1, indicando que a debería ir antes de b.
//Si son iguales, retorna 0, indicando que su orden relativo no cambia.
function descendingOrder(a,b) {
  return b.name.localeCompare(a.name);
}
//Si b.name es mayor que a.name, retorna un número positivo (indicando que b debe ir antes de a), si es menor, retorna un número negativo (indicando que b debe ir después de a).
export function sortExercises(exercises, criterion, ascendente) {
  return exercises.sort((a, b) => {
    if (criterion === 'name') {
      return ascendente === 'asc'? ascendingOrder(a, b) : descendingOrder(a, b); //Si ascendente es 'asc', se usa la función ascendingOrder para ordenar de A a Z.
      //Si no, se usa la función descendingOrder para ordenar de Z a A.
    } 
    return 0;
  });
}
