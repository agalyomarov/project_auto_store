const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const suppySchema = new Schema({
    order: {
        type: Object,
    },
    paymentOfTheFee: {
        type: Number,
    },
    deliveryDate: {
        type: Date,
    },
    added_cell: {
        type: Boolean,
    },
});

const Suppy = mongoose.model("suppies", suppySchema);
module.exports = Suppy;