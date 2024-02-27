const express = require('express')
const app = express()
require("dotenv").config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', false)

async function connectToDB() {
  try {
    await mongoose.connect('mongodb+srv://altonpeel123:LL89XHOz5RdSCUfZ@cluster0.kfrwp8j.mongodb.net/')
    // password: LL89XHOz5RdSCUfZ
  } catch (err) {
    console.log(err)
  }
}

connectToDB().then(() => console.log('Connected to DB'))

app.use('/auth', require('./routes/authRouter.js'))
app.use("/api", expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/issues', require('./routes/issueRouter.js'))
app.use('/api/comments', require('./routes/commentRouter.js'))




app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({ errMsg: err.message })
})


app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})