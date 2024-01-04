const express = require('express')
const toolsRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

let tools = {
  tool: "screwdriver",
  type: "hand tool",
  _id: uuidv4()
}

toolsRouter.use('/', (req, res, next) =>{
  console.log("I work")
  next()
})


toolsRouter.get('/', (req, res, next)=> {
  res.send(tools)
  console.log(tools)
})



module.exports = toolsRouter