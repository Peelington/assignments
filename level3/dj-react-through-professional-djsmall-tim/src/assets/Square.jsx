import { useState } from 'react'

export default function Square(props){
    console.log(props.color)
    return(
     <div 
        className="square"
        style = {{backgroundColor: props.color}}
     ></div>
    )
}