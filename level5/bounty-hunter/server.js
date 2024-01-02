const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid') 

//Middleware (for every request)
app.use(express.json())

//routes
app.use("/bounties", require('./routes/bountyRouter.js'))


app.listen(9000, () => {
  console.log('The server is running on port 9000')
})