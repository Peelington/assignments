import { useState } from "react"

export default function Card(props){
    let color
    if(props.timeToGo === "Spring"){
        color = {backgroundColor: "#e6e358"}
    }if(props.timeToGo === "Fall"){
        color = {backgroundColor: "#f0a763"}
    }if(props.timeToGo === "Winter"){
        color = {backgroundColor: "#8aebe6"}
    }if(props.timeToGo === "Summer"){
        color = {backgroundColor: "#ee6028"}
    }
        return (
            <div style={color} className= "card--travel">
                <p>Place: {props.place}</p>
                <p>Price: ${props.price}</p>
                <p>Best time to visit: {props.timeToGo}</p>
            </div>
    )
}