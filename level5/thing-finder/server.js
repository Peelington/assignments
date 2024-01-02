const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

//middleware
app.use(express.json())

//routes
app.use('/inventoryItems', require('./routes/foodRouter.js'))

app.listen(9000, () => {
  console.log("server is running on port 9000")
})
