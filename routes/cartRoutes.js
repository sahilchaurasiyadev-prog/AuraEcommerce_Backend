const express = require('express');
const router = express.Router();

const {
  getCartItems,
  addToCart,
  removeItem
} = require('../controllers/cartController');

router.get('/', getCartItems);

router.post('/', addToCart);

router.delete('/:id', removeItem);

module.exports = router;