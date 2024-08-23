import { muscleGroupFilter, sortExercises } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
import { dataNames} from './data.js';

console.log(fakeData);

describe('muscleGroupFilter', () => {

  it('Retornar un arreglo de un solo grupo muscular', () => { 
    const arrayExercises = muscleGroupFilter(fakeData, 'Piernas')
    expect(arrayExercises.length).toBe(2);
  });
});

describe('sortExercises', () => {

  it('Retornar un arreglo en orden alfabetico ascendente', () => { 
    const arrayAsc = sortExercises(dataNames, 'name')
    expect(arrayAsc).toEqual([
      {
        "name" : "Prensa de pierna "
      },
      {
        "name" : "Sentadillas"
      },
      
      {
        "name" : "Step up"
      }
    ])
  });
});
