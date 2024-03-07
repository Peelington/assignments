import React, { useContext } from 'react'
import GoalForm from './GoalForm'

export default function Goals(props) {
  const { weight, waist, chest, arm} = props
 
  return (
    <div>
      <GoalForm />
      <h2>Weight: {weight} lbs</h2>
      <h2>Waist: {waist} inches</h2>
      <h2>Chest: {chest} inches</h2>
      <h2>Arm: {arm} inches</h2>
    </div>
    
  )
}