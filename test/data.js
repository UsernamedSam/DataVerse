// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

export const data = [
  {
    "id": "squats",
    "name": "Sentadillas (Squats)",
    "shortDescription": "Ejercicio fundamental para piernas y glúteos.",
    "description": "Las sentadillas son un ejercicio básico que trabaja los músculos de las piernas y los glúteos. Este ejercicio se puede realizar con el peso corporal o con una barra cargada, y es esencial para el desarrollo de la fuerza y la masa muscular en la parte inferior del cuerpo.",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/82/Squats.svg",
    "facts": {
      "muscleGroup": "Piernas",
      "equipmentNeeded": "Barbell",
      "isCompoundExercise": true
    },
    "extraInfo": {
      "recommendedReps": "3 sets of 8-12 reps",
      "benefits": ["Increases leg strength", "Improves muscle mass"]
    }
  },
  {
    "id": "leg-press",
    "name": "Prensa de pierna (Leg Press)",
    "shortDescription": "Ejercicio para piernas utilizando una máquina de prensa.",
    "description": "La prensa de pierna es un ejercicio que se realiza en una máquina específica que permite empujar un peso con las piernas. Es excelente para trabajar los cuádriceps, glúteos e isquiotibiales, y es una alternativa segura para aquellos que prefieren no hacer sentadillas con barra.",
    "imageUrl": "https://www.entrenamientos.com/media/cache/exercise_375/uploads/exercise/prensa-de-piernas-inclinada-8428.png",
    "facts": {
      "muscleGroup": "Piernas",
      "equipmentNeeded": "Leg Press Machine",
      "isCompoundExercise": true
    },
    "extraInfo": {
      "recommendedReps": "3 sets of 10-15 reps",
      "benefits": ["Strengthens leg muscles", "Provides safe alternative to squats"]
    }
  },
  {
    "id": "step-up",
    "name": "Step Up",
    "shortDescription": "Ejercicio para piernas y glúteos.",
    "description": "El Step Up es un ejercicio que se realiza subiendo un pie a una plataforma elevada y luego elevando todo el cuerpo hasta que ambas piernas estén rectas. Este ejercicio es excelente para fortalecer las piernas y los glúteos, mejorando el equilibrio y la coordinación.",
    "imageUrl": "https://static.vecteezy.com/system/resources/previews/008/631/581/original/woman-doing-dumbbell-step-ups-exercise-flat-illustration-isolated-on-white-background-vector.jpg",
    "facts": {
      "muscleGroup": "Glúteos",
      "equipmentNeeded": "Plataforma elevada",
      "difficultyLevel": "Intermedio",
    },
    "extraInfo": {
      "recommendedReps": "3 sets of 12-15 reps",
      "benefits": [
        "Increases leg and glute strength",
        "Improves flexibility"
      ]
    }
  },
];

export const dataNames = [
  {
    "name" : "Sentadillas"
  },
  {
    "name" : "Prensa de pierna "
  },
  {
    "name" : "Step up"
  }
]