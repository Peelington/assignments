import React, { useState } from 'react'
import Square from './assets/Square'
import './App.css'
import axios from 'axios'

function App() {
  const [color, setColor] = useState("")

  function handleClick(){
    
      axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      // .then(response => console.log(response.data))
      .then(res => setColor(res.data.colors[0].hex))
      .catch(error => console.log(error))
   }
   console.log(color)

React.useEffect(() => {
  handleClick()
}, [])

  return (
    <>
      <Square 
           color = {color}
      />
      <button onClick={handleClick} >Change squares color</button>
    </>
  )
}

export default App
