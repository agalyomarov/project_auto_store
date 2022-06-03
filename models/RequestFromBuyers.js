const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const requestsFromBuyers = new Schema({
    products: {
        type: Array,
    },
    totalAmount: {
        type: Number,
    },
    manufacturer: {
        type: String,
    },
    orderDate: {
        type: Date,
    },
    fullName: {
        type: String,
    },
});

const RequestsFromBuyers = mongoose.model(
    "requests_from_buyers",
    requestsFromBuyers
);
module.exports = RequestsFromBuyers;