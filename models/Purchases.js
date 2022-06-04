const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const purchasesSchema = new Schema({
    products: {
        type: Array,
    },
    totalAmount: {
        type: Number,
    },
    dateOfPurchase: {
        type: Date,
    },
    fullName: {
        type: String,
    },
});

const Purchases = mongoose.model("purchases", purchasesSchema);
module.exports = Purchases;