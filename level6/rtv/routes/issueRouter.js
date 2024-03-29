const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')

// Get All Issues
issueRouter.get("/all", (req, res, next) => {
  Issue.find((err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// Get issues by user id
issueRouter.get("/findUser/:user", (req, res, next) => {
  Issue.find({ user: req.auth._id }, (err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// Add new Issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})

// Delete Issue
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`)
    }
  )
})

// Update issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

issueRouter.put('/upVote/:issueId', (req, res, next) => {
  Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      {
          $addToSet: { likedUsers: req.auth._id },
          $pull: { dislikedUsers: req.auth._id }
      },
      { new: true },
      (err, updatedIssue) => {
          if (err) {
              res.status(500)
              return next(err)
          }
          return res.status(201).send(updatedIssue)
      }
  )
})

issueRouter.put('/downVote/:issueId', (req, res, next) => {
  Issue.findOneAndUpdate(
      { _id: req.params.issueId },
      {
          $addToSet: { dislikedUsers: req.auth.__id },
          $pull: { likedUsers: req.auth._id }
      },
      { new: true },
      (err, updatedIssue) => {
          if (err) {
              res.status(500)
              return next(err)
          }
          return res.status(201).send(updatedIssue)
      }
  )
})



module.exports = issueRouter