const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const supplierSchema = new Schema({
    fullName: {
        type: String,
    },
    country: {
        type: String,
    },
    address: {
        type: String,
    },
    telefone: {
        type: String,
    },
    yearsWarranty: {
        type: Number,
    },
    treaty: {
        type: String,
    },
    supplierCategory: {
        type: Object,
    },
});

const Supplier = mongoose.model("suppliers", supplierSchema);
module.exports = Supplier;