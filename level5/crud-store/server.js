const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//middleware
app.use(express.json())
app.use(morgan('dev'))

//old mongoose < 7
// mongoose.connect('mongodb+srv://altonpeel123:rSms0LHiIe8w0qxZ@cluster0.cvdlnyk.mongodb.net/', {useNewUrlParser: true})
// .then(()=> console.log('connected to MongoDB'))
// .catch(err => console.error(err))
mongoose.set('strictQuery', false)

async function  connectToDB(){
  try {
    await mongoose.connect('mongodb+srv://altonpeel123:rSms0LHiIe8w0qxZ@cluster0.cvdlnyk.mongodb.net/')
  } catch (err) {
    console.log(err)
  }
}

connectToDB().then(() => console.log('connected to db'))

//route
app.use("/api/inventory", require('./routes/inventoryRouter.js'))

//error handling 
app.use((err, req, res, next)=>{
  console.log(err)
  return res.send({errMsg: err.message})
})

//listen 
app.listen(8000, ()=>{
  console.log('The server is running on port 8000')
})