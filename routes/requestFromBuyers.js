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
        const array = Object.entries(req.body);
        const products = [];
        let totalAmount = 0;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i][1]) {
                products[i] = {};
                products[i].product = await ProductDirectory.findOne({
                    _id: array[i][0],
                });
                products[i].quantity = array[i][1];
                totalAmount += products[i].product.price * products[i].quantity;
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