const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    type: {
        type: String,
        default: "Investment"
    },
    color: {
        type: String,
        default: "#FCBE44"
    }
});

module.exports = mongoose.model('Category', categorySchema);