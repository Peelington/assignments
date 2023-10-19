import React from "react"

export default function Badges(props){
    return (
        <div className='badge-box'>
            <div className="badge-header">
                Badge:
            </div>
            <div className="badge-info">
                <span>Name: {props.firstName} {props.lastName}</span>
                <span>Phone: {props.phone}</span>
                <span>Place of Birth: {props.birthPlace}</span>
                <span>Favorite food: {props.favoriteFood}</span>
                <span>E-mail: {props.email}</span>
            </div>
            <div className="commentBox">
                {props.comments}
            </div>
        </div>
    )

}