const mongoose = require("mongoose");
const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  liked: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = dish = mongoose.model("dish", dishSchema);
