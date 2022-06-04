const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const defectiveSchema = new Schema({
    product: {
        type: Object,
    },
    quantity: {
        type: Number,
    },
    buyer: {
        type: String,
    },
    defectDescription: {
        type: String,
    },
    date: {
        type: Date,
    },
    refunded: {
        type: Boolean,
    },
});

const Defective = mongoose.model("defectivies", defectiveSchema);
module.exports = Defective;