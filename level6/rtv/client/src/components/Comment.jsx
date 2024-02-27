import React from 'react'

export default function Comment(props){

  const { text } = props

  return (
    <div className="comment">
      <h1 className='comment-text'>{text}</h1>
    </div>
  )
}