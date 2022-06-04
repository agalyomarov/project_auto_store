const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cellsSchema = new Schema({
    product: {
        type: Object,
    },
    numberBox: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
});

const Cells = mongoose.model("cells", cellsSchema);
module.exports = Cells;