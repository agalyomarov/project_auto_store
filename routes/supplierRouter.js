const createPath = require("../helpers/createPath.js");
const Supplier = require("../models/Supplier.js");
const SupplierCategory = require("../models/SupplierCategory.js");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const supplier_categories = await SupplierCategory.find();
        const suppliers = await Supplier.find();
        const supplier = {};
        res.render(createPath("suppliers"), {
            suppliers,
            supplier_categories,
            supplier,
        });
    } catch (err) {
        console.log(err);
    }
});

router.post("/", async(req, res) => {
    try {
        const supplier_category = await SupplierCategory.findOne({
            _id: req.body.supplierCategory,
        });
        req.body.supplierCategory = supplier_category;
        await Supplier.findOneAndUpdate({ _id: req.body._id }, {
            fullName: req.body.fullName,
            country: req.body.country,
            telefone: req.body.telefone,
            supplierCategory: req.body.supplierCategory,
            address: req.body.address,
            yearsWarranty: req.body.yearsWarranty,
            treaty: req.body.treaty,
        }, { upsert: true });
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

router.get("/edit/:id", async(req, res) => {
    try {
        const supplier_categories = await SupplierCategory.find();
        const suppliers = await Supplier.find();
        const supplier = await Supplier.findOne({ _id: req.params.id });
        res.render(createPath("suppliers"), {
            suppliers,
            supplier_categories,
            supplier,
        });
    } catch (err) {
        console.log(err);
    }
});

router.get("/delete/:id", async(req, res) => {
    try {
        await Supplier.findOneAndDelete({ _id: req.params.id });
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;