const express = require('express')
const bountyRouter = express.Router() 
const Bounty = require('../models/bounty.js');



//routes
// get all
bountyRouter.get("/", (req, res, next) => {
  Bounty.find((err, bounties) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounties)
  })
});


//get one
bountyRouter.get("/:bountyId", (req, res, next) =>{
  const bountyId = req.params.bountyId
  const foundBounty = Bounty.find(bounty => bounty._id === bountyId)
    if(!foundBounty){
      const error = new Error(`The Bounty with id${bountyID}couldn't be found`)
      return next(error)
    }
  res.status(200).send(foundBounty)
  // console.log(req.params.bountyId)
})

//post one
bountyRouter.post("/", (req, res, next) => {
  const newBounty = new Bounty(req.body)
  newBounty.save((err, savedBounty) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedBounty)
  })
});


//search by faction
bountyRouter.get("/search/type", (req, res, next) => {
  console.log(req.query.type)
  Bounty.find({type: req.query.type}, (err, bounties) =>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounties)
  })
})

//delete bounty
bountyRouter.delete("/:bountyID", (req, res, next) => {
  Bounty.findOneAndDelete({_id: req.params.bountyID}, (err, deletedItem) => {
    if(err){
    res.status(500)
    return next(err)
  }
  return res.status(200).send(`Successfully deleted ${deletedItem.firstName} ${deletedItem.lastName} bounty`)
  })
});



//update
bountyRouter.put("/:bountyId", (req, res, next) => {
  Bounty.findOneAndUpdate(
    {_id: req.params.bountyId},
    req.body,
    {new: true},
    (err, updatedBounty)=>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedBounty)
    }
  )
});



module.exports = bountyRouter