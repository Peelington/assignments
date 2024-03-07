import React, {useState} from "react";
import axios from 'axios'

export default function Workouts() {

const [muscleGroup, setMuscleGroup] = useState("")
const [exerciseChosen, setExerciseChosen] = useState("")

  const exercise_array = [
    "Select Exercise",
    "Abdominals",
    "Abductors",
    "Adductors",
    "Biceps",
    "Calves",
    "Chest",
    "Forearms",
    "Glutes",
    "Hamstrings",
    "Lats",
    "Lower_back",
    "Middle_back",
    "Neck",
    "Quadriceps",
    "Traps",
    "Triceps"
  ]

  const exerciseList = exercise_array.map(exercise => {
    return (
      <option value={exercise.toLowerCase()}>{exercise}</option>
    )
  })

  
  function handleChange(e){
    setMuscleGroup(e.target.value)
  }
  // console.log(muscleGroup)

   axios.defaults.headers.common["x-api-key"] = "cLZn1xxZAL8XFNXNCjSodQ==BbvQac5011FSGNbd"
  
   function getExercises(muscleGroup){
    console.log(muscleGroup)
    axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`)
    .then(res => setExerciseChosen(res.data))
    .catch(err => console.log(err.response.data.errMsg))

  }

  console.log(exerciseChosen)
  return (
    <div>

      <h1>workouts</h1>
      <select onChange={handleChange}>{exerciseList}</select>
      <button onClick={getExercises}>Pick Exercise</button>
    </div>
  )
}