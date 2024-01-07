const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

//middleware
app.use(express.json())

//route
app.use("/todos", require('./routes/todoRouter.js'))

app.listen(9000, ()=>{
  console.log("The server is runinng on port 9000")
})