const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  items: [
    {
      _id: String,
      productId: String,
      name: String,
      price: Number,
      image: String,
      rating: Number,
    },
  ],
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
