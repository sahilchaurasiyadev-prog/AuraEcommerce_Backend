const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  quantity: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('Cart', cartSchema);