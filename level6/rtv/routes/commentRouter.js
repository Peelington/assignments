const express = require('express')
const commentRouter = express.Router()
const Comments = require('../models/comment.js')


//get comments based on issue
commentRouter.get("/findIssue/:issueId", (req, res, next) => {
  Comments.find({ issue: req.params._id }, (err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

commentRouter.get("/all", (req, res, next) => {
  Comments.find((err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

//comments based off issue
commentRouter.post('/:issueId', (req, res, next) => {
  req.body.user = req.auth._id
  req.body.issue = req.params.issueId
  const newComment = new Comments(req.body)
  newComment.save((err,savedComment) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedComment)
  })
})

module.exports = commentRouter