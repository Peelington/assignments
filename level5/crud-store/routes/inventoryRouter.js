const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

//Get all
inventoryRouter.get("/", (req, res, next)=>{
  Inventory.find((err, items) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(items)
  })
})


//post
inventoryRouter.post("/", (req, res, next) => {
  const newItem = new Inventory(req.body)
  newItem.save((err, savedItem) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedItem)
  })
})

module.exports = inventoryRouter