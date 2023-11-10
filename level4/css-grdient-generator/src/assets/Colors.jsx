import React from 'react'
import Controls from './Controls'

export default function Colors(props){
    console.log(props)
    return (
        <div className="generatedCSS">
            <p>background: linear-gradient({props.colors.angle}deg, {props.colors.firstColor}, {props.colors.secondColor}); </p>
            <p>-moz-background: linear-gradient({props.colors.angle}deg, {props.colors.firstColor}, {props.colors.secondColor}); </p>
            <p>-webkit: linear-gradient({props.colors.angle}deg, {props.colors.firstColor}, {props.colors.secondColor})</p> 
        </div>
    )
}
