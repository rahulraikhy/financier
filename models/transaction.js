const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    name: {
        type: String,
        default: "Anonymous"
    },
    type: {
        type: String,
        default: "Investment"
    },
    amount: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);
