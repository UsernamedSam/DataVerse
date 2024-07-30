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
    const listItem = document.createElement('li')
    //Establece el contenido HTML del listItem. 
    //Aquí, está creando un div que contiene el nombre del ejercicio (element.name).
    //ir creando las tarjetas completas y añadirlas
       //R Mostrar la lista d ejercicios en la pag usando los datos provenientes del dataset.js
       //E Datos de entrada: Un array de objetos con información sobre los ejercicios. Salida esperada: Una lista visual en HTML mostrando el nombre, la descripción corta y una imagen de cada ejercicio.
       //A recorrer el array de ejercicios y crear elementos HTML para cada uno, añadiéndolos al DOM.
       //C 
    listItem.innerHTML = `
       <div class="exercise-card">
        <h2>${element.name}</h2>
        <img src="${element.imageUrl}" alt="${element.name}">
        <p>${element.shortDescription}</p>
        <h2>Grupo muscular:</h2>
        <p>${element.facts.muscleGroup}</p>
        <h2>Repeticiones recomendadas:</h2>
        <p>${element.extraInfo.recommendedReps}</p>
      </div>
    `;
    //Añade el listItem creado al elemento list
    list.appendChild(listItem)
  }); // Cierra el bucle forEach
  return list; // La función devuelve el elemento list, que ahora contiene todos los listItem creados y añadidos.
}; 

//`<div>${element.name}</div>`//
//<ul>
//${element.facts.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
//</ul>
