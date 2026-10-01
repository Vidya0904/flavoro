const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },

  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
});

module.exports = mongoose.model("Product", productSchema);
