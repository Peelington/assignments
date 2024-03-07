const express = require('express')
const goalRouter = express.Router()
const Goal = require("../models/goal.js")

//get goal
goalRouter.get("/findGoal/:userId", (req, res, next) => {
  Goal.find({ user: req.auth._id }), (err, goal) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(goal)
  }
});

goalRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newGoal = new Goal(req.body)
  newGoal.save((err, savedGoal) => {
    if(err){
      res.status(500)
      next(err)
    }
    return res.status(201).send(savedGoal)
  })
})

module.exports = goalRouter