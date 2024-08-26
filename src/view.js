export const renderItems = (data) => { 
  console.log(data) 
  const list = document.createElement('ul');
  data.forEach(element => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
       <div class="exercise-card">
        <h3>${element.name}</h3>
        <img src="${element.imageUrl}" alt="${element.name}">
        <p>${element.shortDescription}</p>
        <h3>Grupo muscular:</h3><p>${element.facts.muscleGroup}</p>
        <h3>Repeticiones recomendadas:</h3><p>${element.extraInfo.recommendedReps}</p>
      </div>
    `;
    list.appendChild(listItem)
  }); 
  return list; 
}; 
