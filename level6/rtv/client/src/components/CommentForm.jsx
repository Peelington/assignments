import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'


export default function CommentForm(props) {
  const [newComment, setNewComment] = useState("")
  const { userAxios, setComments, user } = useContext(UserContext)
  const { issueId } = props

  // console.log(props)

  function handleChange(e) {
    const { value } = e.target
    setNewComment(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    postNewComment()
    setNewComment("")
  }

  function postNewComment() {
    userAxios.post(`/api/comments/${issueId}`, { commentText: newComment, user: user._id, issue: issueId })
      .then(res => {
        // Update the comments state with the new comment
        setComments(prev => [...prev, res.data]);
      })
      .catch(err => console.log(err));
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={newComment}
        className='comment-input'
        onChange={handleChange}
        placeholder="Whats' your Comment" />
      <button className="comment-btn"> Add your Comment to the pile </button>
    </form>
  )
}