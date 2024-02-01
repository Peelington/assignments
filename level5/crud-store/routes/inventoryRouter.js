const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

//Get all
// inventoryRouter.get("/", (req, res, next)=>{
//   Inventory.find((err, items) => {
//     if(err){
//       res.status(500)
//       return next(err)
//     }
//     return res.status(200).send(items)
//   })
// });

inventoryRouter.get('/', async (req, res, next) => {
  try {
    const items = await Inventory.find()
    return res.status(200).send(items)
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//get one
// inventoryRouter.get("/:itemId", (req, res, next)=>{
//   const itemId = req.params.itemId
//   Inventory.findOne({_id: itemId}, (err, item) =>{
//     if(err){
//       res.status(500)
//       return next(err)
//     }
//     return res.status(200).send(item)
//   })
// })

//get one try catch
inventoryRouter.get('/:itemId', async (req, res, next)=>{
  try {
    const item = await Inventory.findOne({_id: req.params.itemId})
    return res.status(200).send(item)
  } catch (err) {
    res.status(500)
    return next(err)
  }
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
});

//post try catch
// inventoryRouter.post('/', async (req, res, next) => {
//   try {
//     const newItem = await new Inventory(req.body)
//     newItem.save(savedItem)
//     return res.status(201).send(savedItem)
//   } catch (err) {
//     res.status(500)
//     return next(err)
//   }
// })

//delete
inventoryRouter.delete("/:itemId", (req, res, next) =>{
  Inventory.findOneAndDelete({_id: req.params.itemId}, (err, deletedItem)=>{
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`successfullly deleted ${deletedItem.item}`)
  })
});


//try catch update
inventoryRouter.put("/:itemId", async (req, res, next)=>{
  try {
    const updatedItem = await Inventory.findByIdAndUpdate(req.params.itemId, req.body, {new: true})
    return res.status(201).send(updatedItem)
    
  } catch (err) {
    res.status(500)
    return next(err)
  }
})

//update
// inventoryRouter.put("/:itemId", (req, res, next)=>{
//   Inventory,Inventory.findByIdAndUpdate(
//     {_id: req.params.itemId},
//     req.body,
//     {new: true},
//     (err, updatedItem)=>{
//       if(err){
//       res.status(500)
//       return next(err)
//     }
//     return res.status(201).send(updatedItem)
//   }
//   )
// })

module.exports = inventoryRouter