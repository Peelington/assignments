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
  }

})

modulelexports = mongoose.model("Inventory", InventorySchema)