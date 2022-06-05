const createPath = require("../helpers/createPath.js");
const ProductDirectory = require("../models/ProductDirectory.js");
const RequestsFromBuyers = require("../models/RequestFromBuyers.js");
const Supplier = require("../models/Supplier.js");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const product_directories = await ProductDirectory.find();
        const requestsFromBuyers = await (
            await RequestsFromBuyers.find()
        ).reverse();
        res.render(createPath("request_from_buyers"), {
            product_directories,
            requestsFromBuyers,
        });
    } catch (err) {
        console.log(err);
    }
});

router.post("/", async(req, res) => {
    try {
        const keys = Object.keys(req.body);
        const values = Object.values(req.body);
        const products = [];
        let totalAmount = 0;
        for (let i = 0; i < keys.length - 1; i++) {
            if (parseInt(values[i]) > 0) {
                let product = await ProductDirectory.findOne({
                    _id: keys[i],
                });
                totalAmount += product.price * values[i];
                products[products.length] = { product, quantity: values[i] };
            }
        }
        await RequestsFromBuyers.create({
            products,
            totalAmount,
            fullName: req.body.fullName,
            orderDate: new Date(),
        });
        res.redirect("/request_from_buyers");
    } catch (err) {
        console.log(err);
    }
});

router.get("/delete/:id", async(req, res) => {
    try {
        await RequestsFromBuyers.findOneAndDelete({ _id: req.params.id });
        res.redirect("/request_from_buyers");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;