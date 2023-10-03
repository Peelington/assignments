import { useState } from 'react'
import friends from '../Data'
import Friend from '../Friend'
import Friendlist from "../Friendlist"
import './App.css'

function App() {
  const petOwner = friends.map(data => {
    return(
      <>
        <Friend 
            name={data.name}
            age={data.age}
            />
        {/* <Pet 
          name={data.pet.name}
          breed={data.pet.breed}
        /> */}
      </>
    )}
  )
  

  return (
    <>
      <Friendlist />
    </>

  )
}

export default App
