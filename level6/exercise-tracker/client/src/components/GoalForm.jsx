import React, { useContext, useState } from 'react'
import { ExerciseContext } from '../context/ExerciseContext'


export default function GoalForm(props){

  const {addGoal} =useContext(ExerciseContext)

  const initInputs = {
    weight: "",
    waist: "",
    chest: "",
    arms: ""
  }

  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }


  function handleSubmit(e) {
    e.preventDefault()
    addGoal(inputs)
    setInputs(initInputs)
  }

  const { weight, waist, chest, arms} = inputs

  return (

    <form>
      <h2>Weight</h2>
      <input
        type="text"
        name="weight"
        value={weight}
        onChange={handleChange}
        placeholder="Goal Weight" />

      <h2>Waist</h2>
      <input
        type="text"
        name="waist"
        value={waist}
        onChange={handleChange}
        placeholder="Waist size" />

      <h2>Chest</h2>
      <input
        type="text"
        name="chest"
        value={chest}
        onChange={handleChange}
        placeholder="Chest size" />

      <h2>Arm</h2>
      <input
        type="text"
        name="arms"
        value={arms}
        onChange={handleChange}
        placeholder="Arm size" />

        <button onClick={handleSubmit}>Save Goal</button>

    </form>
  )
}