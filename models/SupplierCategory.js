const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const supplierCategorySchema = new Schema({
    title: {
        type: String,
    },
});

const SupplierCategory = mongoose.model(
    "supplier_category",
    supplierCategorySchema
);
module.exports = SupplierCategory;