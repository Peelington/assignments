const mongoose = require('mongoose')
const Schema = mongoose.Schema

//blueprint
const bountySchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  require: true
},
  type: {
    type: String,
    required: true
  },
  bountyAmount: {
    type: Number, 
    required: true,
  },
  living: {
    type: Boolean,
  }
})

module.exports = mongoose.model("bounty", bountySchema)