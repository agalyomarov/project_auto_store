const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productDirectory = new Schema({
    name: {
        type: String,
    },
    category: {
        type: String,
    },
    manufacturer: {
        type: String,
    },
    article: {
        type: String,
    },
    price: {
        type: Number,
    },
    supplier: {
        type: Object,
    },
});

const ProductDirectory = mongoose.model("product_directory", productDirectory);
module.exports = ProductDirectory;