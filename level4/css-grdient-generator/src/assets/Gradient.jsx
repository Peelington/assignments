import React, { useState } from "react"

export default function Gradient(props){
    console.log(props)

    return (
        
        <div className="colorBox" style = {{background: `linear-gradient(${props.colors.angle}deg, ${props.colors.firstColor}, ${props.colors.secondColor})`}}>
            
        </div>
    )
}