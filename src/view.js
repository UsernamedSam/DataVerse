//Esta línea define una función llamada renderItems 
//la exporta para que pueda ser utilizada en otros archivos.
//La función toma un argumento data, que se espera que sea un array de objetos 
//(en este caso, una lista de ejercicios).
export const renderItems = (data) => { 
  //Esta línea imprime el contenido de data en la consola del navegador
  console.log(data) 
  //Crea un nuevo elemento HTML ul (lista desordenada) y lo asigna a la variable list
  const list = document.createElement('ul');
  //Inicia un bucle que recorre cada elemento del array data. 
  //Para cada elemento, se ejecuta la función de flecha proporcionada.
  data.forEach(element => {
    //Dentro del bucle, crea un nuevo elemento HTML li (elemento de lista) y lo asigna a la variable listItem
    const listItem = document.createElement('li');
    //Establece el contenido HTML del listItem. 
    //Aquí, está creando un div que contiene el nombre del ejercicio (element.name).
    //ir creando las tarjetas completas y añadirlas
    listItem.innerHTML = `
       <div class="exercise-card">
        <h3>${element.name}</h3>
        <img src="${element.imageUrl}" alt="${element.name}">
        <p>${element.shortDescription}</p>
        <h3>Grupo muscular:</h3><p>${element.facts.muscleGroup}</p>
        <h3>Repeticiones recomendadas:</h3><p>${element.extraInfo.recommendedReps}</p>
      </div>
    `;
    //Añade el listItem creado al elemento list
    list.appendChild(listItem)
  }); // Cierra el bucle forEach
  return list; // La función devuelve el elemento list, que ahora contiene todos los listItem creados y añadidos.
}; 
