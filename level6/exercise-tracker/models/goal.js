const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  weight: {
    type: String,
    required: true
  },
  waist: {
    type: String,
    required: true
  },
  chest: {
    type: String,
    required: true
  },
  arms: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model("Goal", GoalSchema);