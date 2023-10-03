import React from "react"

export default function Pet (props){
    console.log(props)
    return (
        <div>
            <p>Pet Name: {props.item.name}</p>
            <p>Breed: {props.item.breed}</p>            
        </div>
    )
}