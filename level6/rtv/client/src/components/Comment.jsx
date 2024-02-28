import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export default function Comment(props) {

  // const { userAxios, setAllIssues, setUserState } = useContext(UserContext)
  const { text } = props




  return (
    <div className="comment">
      <h1 className='comment-text'>{text}</h1>
    </div>
  )
}