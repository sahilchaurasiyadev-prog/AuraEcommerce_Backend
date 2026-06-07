const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    customerName: String,
    address: String,
    mobile: String,
    items: Array,
    total: Number,
    createdAt: Date
});

module.exports = mongoose.model('Order', orderSchema)