const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const refundSchema = new Schema({
    defectiveProduct: {
        type: Object,
    },
    date: {
        type: Date,
    },
});

const Refund = mongoose.model("refunds", refundSchema);
module.exports = Refund;