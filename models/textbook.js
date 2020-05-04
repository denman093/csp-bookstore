const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextbookSchema = new Schema({
    name: String,
    icon: String,
    price: String
});

const Textbook = mongoose.model('Textbook', TextbookSchema);

module.exports = Textbook;