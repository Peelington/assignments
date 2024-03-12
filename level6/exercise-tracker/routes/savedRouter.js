const express = require('express')
const savedRouter = express.Router()
const SavedExercise = require("../models/saved.js")

savedRouter.get("/workouts/:userId", (req, res, next) => {
  SavedExercise.find({ user: req.auth._id }, (err, savedExercise) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(savedExercise)
  })
})

savedRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newSavedExercise = new SavedExercise(req.body)
  newSavedExercise.save((err, savedExercise) => {
    if (err) {
      res.status(500)
      next(err)
    }
    return res.status(201).send(savedExercise)
  })
})




module.exports = savedRouter