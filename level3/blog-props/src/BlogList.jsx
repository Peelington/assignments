import { useState } from 'react'

export default function BlogList (props){
    
    return (
        <div>
             <p>Title: {props.title}</p>
             <p>Sub Title: {props.subTitle}</p>
             <p>Author: {props.author}</p>
             <p>Date: {props.date}</p>
        </div>
    )
}