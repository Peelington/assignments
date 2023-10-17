import React, { useState } from 'react'

export default function Square(props){
    const[square, setSquare] = React.useState()
    return(
     <div 
        className="square"
        style = {{backgroundColor: props.color}}
     ></div>
    )
}