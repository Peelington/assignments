const mongoose = require('mongoose')
const Schema = mongoose.Schema

//inventory blueprint

const InventorySchema = new Schema({

  item:{
    type: String,
    required: true
  },

  price:{
    type: Number,
    required: true
  },

})

module.exports = mongoose.model("Inventory", InventorySchema)