const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

// Middleware
app.use(express.json())

//Routes
app.use("/tools", require('./routes/toolsRouter.js'))


app.listen(9000, () => {
  console.log('The Server is running on local port 9000')
})