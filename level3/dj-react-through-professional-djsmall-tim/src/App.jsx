import { useState } from 'react'
import React from 'react'
import Square from './assets/Square'
import './App.css'

function App() {
  const [color, setColor] = React.useState(["white", "white", "white", "white"])

  const squareElement = color.map(color => (
    <Square color={color} />
  ))


  function small(){
    setColor(prevColor => prevColor.map(color => color[0] === 'white' ? 'black' : 'white'))
  }

  function party(){
    setColor(prevColor => ["purple", "purple", prevColor[2], prevColor[3]])

  }

  function leftBlue(){
    setColor(prevColor => [prevColor[0], "blue", prevColor[2], "blue"])
  }

  function rightBlue(){
    setColor(prevColor => ["blue", prevColor[1], "blue", prevColor[3]])
  }

  function one(){
    setColor(preColor => [preColor[0],"red", preColor[2], "green"])
  }

  function two(){
    setColor(preColor => [preColor[1], preColor[3], preColor[0],preColor[2]])
  }

  function three(){
    setColor(prevColor => ['pink', 'yellow', prevColor[2], prevColor[2]])
  }

  function four(){
    setColor(preColor => preColor.map(color => color === "green" ? "red" : "green"))
  }
  function makeNoise(){
    setColor(preColor => preColor.map(color => color === 'white' ? 'black' : 'white'))
  }
console.log(color)
  return (
    <>
      <div className='square-container'>
        {squareElement}
      </div>

      <div className='btnDiv'>
        <button className='button' onClick={small}>DJ Small</button>
        <button className='button' onClick={party}>Party DJ</button>
        <button className='button' onClick={leftBlue}>Left Blue</button>
        <button className='button' onClick={rightBlue}>Right Blue</button>
        <button className='button' onClick={one}>Big DJ one</button>
        <button className='button' onClick={two}>Big DJ two</button>
        <button className='button' onClick={three}>Big DJ tree</button>
        <button className='button' onClick={four}>Big DJv four</button>
        <button className='button' onClick={makeNoise}>Make Noise</button>
      </div>
    </>
  )
}

export default App
