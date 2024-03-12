import React, {useContext} from "react";
import { ExerciseContext } from '../context/ExerciseContext'

export default function Exercise(props) {

  const {name, muscle, difficulty, instructions, workout } = props
  const { getMyWorkouts } = useContext(ExerciseContext)
  // console.log("workout", workout)

return (
<div className="exercise">

    <h1 className="exercise-name">Exercise name: {name}</h1>
    <p className="exercise-muscle">Muscle: {muscle}</p>
    <p className="exercise-difficulty">Difficulty: {difficulty}</p>
    <p className="exercise-instructions" >Instructions: {instructions}</p>
    <button onClick={getMyWorkouts}> Add to your workouts</button>
</div>
  )
}