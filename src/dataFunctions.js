export function muscleGroupFilter(exercises, muscleGroup) {
  return exercises.filter(function(exercise) {
    console.log('filtrando...' , exercise);
    return exercise.facts.muscleGroup === muscleGroup;
    
  }
  )}

function ascendingOrder(a,b) {
  return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
}

function descendingOrder(a,b) {
  return b.name.localeCompare(a.name);
}
export function sortExercises(exercises, criterion, orden) {
  return exercises.sort((a, b) => {
    if (criterion === 'name') {
      return orden === 'asc'? ascendingOrder(a, b) : descendingOrder(a, b); 
    }
    return 0;
  });
}
