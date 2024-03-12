import React, { useContext, useState } from "react";
import { ExerciseContext } from "../context/ExerciseContext";

export default function Home() {

  const { myWorkouts } = useContext(ExerciseContext)

  const personalWorkouts = myWorkouts.map(workout => {
    return (
      <Exercise
        key={workout.name}
        name={workout.name}
        muscle={workout.muscle}
        difficulty={workout.difficulty}
        instructions={workout.instructions}
        workout={workout}
      />
    )
  })
  console.log(myWorkouts)

  return (
    <div>
      <h1>Current workouts saved</h1>
      {personalWorkouts}
    </div>
  )
}