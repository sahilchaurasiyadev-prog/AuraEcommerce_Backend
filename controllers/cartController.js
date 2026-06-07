const Cart = require('../models/Cart');

const getCartItems = async (req, res) => {
  try {
    const items = await Cart.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId, name, price } = req.body;

    const existingItem = await Cart.findOne({ productId });

    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
      return res.status(200).json(existingItem);
    }

    const item = await Cart.create({
      productId,
      name,
      price,
      quantity: 1
    });

    res.status(201).json(item);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: 'Item removed'
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCartItems,
  addToCart,
  removeItem
};