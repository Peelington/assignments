import React from "react";

export default function Exercise() {

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

  return (
<div className="exercise">

    <h1>Exercise name: </h1>
    <select>{exerciseList}</select>
    <p>Muscle:</p>
    <p>Difficulty</p>
    <p>Instructions</p>
</div>
  )
}