const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose');


//Middleware (for every request)
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb+srv://AltonPeel:bVVt3IvHFDDHTkNx@cluster0.w89hkq2.mongodb.net/',{useNewUrlParser: true})
.then(()=> console.log("Connected to MongoDB"))
.catch(err => console.error(err));

//routes
app.use("/api/bounties", require('./routes/bountyRouter.js'))

// error handling
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

//
app.listen(9000, () => {
  console.log('The server is running on port 9000')
})