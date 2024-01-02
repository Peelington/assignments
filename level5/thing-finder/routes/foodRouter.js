const express = require('express')
const foodRouter = express.Router()
const { v4: uuidv4 } = require('uuid') 


const inventoryItems = [
  {
      name: "banana",
      type: "food",
      price: 200,
      _id: uuidv4()
  },{
      name: "pants",
      type: "clothing",
      price: 2500,
      _id: uuidv4()
  },{
      name: "basket ball",
      type: "toy",
      price: 1000,
      _id: uuidv4()
  },{
      name: "rockem sockem robots",
      type: "toy",
      price: 1500,
      _id: uuidv4()
  },{
      name: "shirt",
      type: "clothing",
      price: 800,
      _id: uuidv4()
  },{
      name: "soup",
      type: "food",
      price: 300,
      _id: uuidv4()
  },{
      name: "flour",
      type: "food",
      price: 100,
      _id: uuidv4()
  }
]

//routes
//get all
foodRouter.get("/", (req, res) =>{
  res.send(inventoryItems)
})

//get by type
foodRouter.get("/search/type", (req, res) => {
  const type = req.query.type
  const filteredItems = inventoryItems.filter(item => item.type === "food")
  res.send(filteredItems)
})

module.exports = foodRouter