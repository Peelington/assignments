const express = require('express')
const bountyRouter = express.Router()
const { v4: uuidv4 } = require('uuid') 


const bounties = [{
  firstName: "Obiwan",
  lastName: "Kenobi",
  living: true,
  bountyAmount: 10000,
  type: 'Jedi',
  _id: uuidv4()
},
{
  firstName: "Yoda",
  lastName: "unknown",
  living: true,
  bountyAmount: 10000,
  type: 'Jedi',
  _id: uuidv4()
}]

//routes
// get all
bountyRouter.get("/", (req, res) => {
  res.send(bounties);
});


//get one
bountyRouter.get("/:bountyId", (req, res) =>{
  const bountyId = req.params.bountyId
  const foundBounty = bounties.find(bounty => bounty._id === bountyId)
  res.send(foundBounty)
  console.log(req.params.bountyId)
})

//post 0ne
bountyRouter.post("/", (req, res) => {
  const newBounty = req.body
  newBounty._id = uuidv4()
  bounties.push(newBounty)
  res.send(`SuccessFully added ${newBounty.firstName} ${newBounty.lastName} to Target list`);
});

//delete bounty
bountyRouter.delete("/:bountyID", (req, res) => {
  const bountyID = req.params.bountyID
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyID)
  bounties.splice(bountyIndex, 1)
  res.send("Successfully deleted bounty")
});


//update
bountyRouter.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
  res.send(updatedBounty)
});



module.exports = bountyRouter