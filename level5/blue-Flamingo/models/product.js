const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  item: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  material: {
    type: String
  },
  details: {
    type: String,
  }
})



module.exports = mongoose.model("product", ProductSchema)