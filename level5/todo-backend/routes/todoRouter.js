const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const todos = [{
  name: "The name",
  description: "The description of the todo",
  imageUrl: "http://www.myimage....",
  completed: false,
  _id: uuidv4()
}]

//get all
todoRouter.get('/', (req,res) =>{
  res.send(todos)
})

//get one
todoRouter.post('/', (req, res) =>{
  const newTodo = req.body
  newTodo._id = uuidv4()
  todos.push(newTodo)
  res.send(`added ${newTodo} to the todo list`)
  console.log(newTodo)
})

// delete todo
todoRouter.delete('/:todoID', (req, res) =>{
  const todoID = req.params.todoID
  const todoIndex = todos.findIndex(todo => todo._id === todoID)
  todos.splice(todoIndex, 1)
  res.send(`successfully deleted todo task`)
  console.log(todos)
})

//update todos
todoRouter.put('/:todoID', (req, res)=>{
  const todoID = req.params.todoID
  const todoIndex = todos.findIndex(todos = todos._id === todoID)
  const updateTodo = Object.assign(todos[todoIndex], req.body)
  res.send(updateBounty)
})

module.exports = todoRouter