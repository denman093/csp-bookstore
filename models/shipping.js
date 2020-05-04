const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShippingSchema = new Schema({
    address: String,
    city: String,
    state: String,
    phone: String
});

const Shipping = mongoose.model('Shipping', ShippingSchema);

module.exports = Shipping;