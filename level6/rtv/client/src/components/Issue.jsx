import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import axios from 'axios'
import Comment from './Comment'
import CommentForm from './CommentForm'

export default function Issue(props) {
  const { userAxios, comments, setComments } = useContext(UserContext)
  const { title, description, _id } = props

  // Efficiently filter comments for the current issue
  const filteredComments = comments?.filter(comment => comment.issue === _id);
  const commentComponents = filteredComments.map(comment => <Comment key={comment._id} text={comment.commentText} />)

  console.log(filteredComments)
  return (
    <div className="issue">
      <h1 className='Issue-title'>{title}</h1>
      <h3 className='Issue-description'>{description}</h3>
      {commentComponents}
      <CommentForm issueId={_id} />
    </div>

  )
}

