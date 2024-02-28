import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import axios from 'axios'
import Comment from './Comment'
import CommentForm from './CommentForm'

export default function Issue(props) {
  const { userAxios, comments, setComments, setAllIssues, setUserState } = useContext(UserContext)
  const { title, description, likedUsers, dislikedUser, _id } = props

  // console.log(props)

  // Efficiently filter comments for the current issue
  const filteredComments = comments?.filter(comment => comment.issue === _id);
  const commentComponents = filteredComments.map(comment => <Comment key={comment._id} text={comment.commentText} />)

  // console.log(filteredComments)

  function upVoteIssue(issueId) {
    userAxios.put(`/api/issues/upVote/${_id}`)
      .then(res => {
        console.log(res.data)
        setAllIssues(prevIssues => prevIssues.map(issue => _id !== issue._id ? issue : res.data))
        setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => _id !== issue._id ? issue : res.data) }))
      })
      .catch(err => console.log(err))
  }

  function downVoteIssue(issueId) {
    userAxios.put(`/api/issues/downVote/${_id}`)
      .then(res => {
        setAllIssues(prevIssues => prevIssues.map(issue => _id !== issue._id ? issue : res.data))
        setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => _id !== issue._id ? issue : res.data) }))
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="issue">
      <h1 className='Issue-title'>{title}</h1>
      <h3 className='Issue-description'>{description}</h3>
      <div className='vote-container'>
        <button onClick={upVoteIssue}>upvote</button>
        <p>{likedUsers.length}</p>
        <button onClick={downVoteIssue}>downVote</button>
      </div>

      {commentComponents}
      <CommentForm issueId={_id} />
    </div>

  )
}

