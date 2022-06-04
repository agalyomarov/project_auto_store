const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    product: {
        type: Object,
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    },
    manager: {
        type: String,
    },
    orderDate: {
        type: Date,
    },
});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;