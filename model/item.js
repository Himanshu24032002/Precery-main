const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  img: String,
});

module.exports = mongoose.model("Item", itemSchema);
