const createPath = require("../helpers/createPath.js");
const ProductDirectory = require("../models/ProductDirectory.js");
const Supplier = require("../models/Supplier.js");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const product_directories = await (await ProductDirectory.find()).reverse();
        const suppliers = await Supplier.find();
        const product = {};
        res.render(createPath("product_directories"), {
            product_directories,
            product,
            suppliers,
        });
    } catch (err) {
        console.log(err);
    }
});

router.post("/", async(req, res) => {
    try {
        const supplier = await Supplier.findOne({
            _id: req.body.supplier,
        });
        req.body.supplier = supplier;
        await ProductDirectory.findOneAndUpdate({ _id: req.body._id }, {
            name: req.body.name,
            category: req.body.category,
            manufacturer: req.body.manufacturer,
            article: req.body.article,
            price: req.body.price,
            supplier: req.body.supplier,
        }, { upsert: true });
        res.redirect("/product_directory");
    } catch (err) {
        console.log(err);
    }
});

router.get("/edit/:id", async(req, res) => {
    try {
        const product_directories = await ProductDirectory.find();
        const product = await ProductDirectory.findOne({ _id: req.params.id });
        const suppliers = await Supplier.find();
        res.render(createPath("product_directories"), {
            product_directories,
            product,
            suppliers,
        });
    } catch (err) {
        console.log(err);
    }
});

router.get("/delete/:id", async(req, res) => {
    try {
        await ProductDirectory.findOneAndDelete({ _id: req.params.id });
        res.redirect("/product_directory");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;