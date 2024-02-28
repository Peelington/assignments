import React from "react"
import Comment from "./Comment"

export default function CommentList(props) {

  const { comment } = props

  return (
    <div className="comment-list">
      {comment?.map(comment => <Comment {...comment} key={comment._id} />)}
    </div>
  )
}