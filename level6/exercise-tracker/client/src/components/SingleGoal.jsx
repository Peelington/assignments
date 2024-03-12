import React from "react";

export default function SingleGoal(props){

  const {waist, chest, arm, weight} = props

  return (
    <div className='goal-posted'>
        <h2 className='goal-listed'>Weight: {weight} lbs</h2>
        <h2 className='goal-listed'>Waist: {waist} inches</h2>
        <h2 className='goal-listed'>Chest: {chest} inches</h2>
        <h2 className='goal-listed'>Arm: {arm} inches</h2>
      </div>
  )
}