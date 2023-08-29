const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categories_model = newSchema({
    type: {
        type: String,
        default: "Investment"
    },
    color: {
        type: String,
        default: "#FCBE44"
    }
})

const transaction_model = newSchema({
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
})

const Categories = mongoose.model("categories", categories_model)
const Transaction = mongoose.model("transaction", transaction_model)

exports.default = Transaction;
module.exports = {
    Categories,
    Transaction
}