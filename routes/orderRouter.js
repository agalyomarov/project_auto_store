const createPath = require("../helpers/createPath.js");
const Order = require("../models/Order.js");
const ProductDirectory = require("../models/ProductDirectory.js");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const orders = await (await Order.find()).reverse();
        const products = await ProductDirectory.find();
        const order = {};
        res.render(createPath("orders"), {
            products,
            orders,
            order,
        });
    } catch (err) {
        console.log(err);
    }
});

router.post("/", async(req, res) => {
    try {
        const product = await ProductDirectory.findOne({
            _id: req.body.product,
        });
        await Order.findOneAndUpdate({ _id: req.body._id }, {
            product,
            quantity: req.body.quantity,
            manager: req.body.manager,
            orderDate: new Date(),
            price: parseInt(req.body.quantity) * product.price,
        }, { upsert: true });
        res.redirect("/order");
    } catch (err) {
        console.log(err);
    }
});

router.get("/edit/:id", async(req, res) => {
    try {
        const orders = await Order.find();
        const products = await ProductDirectory.find();
        const order = await Order.findOne({ _id: req.params.id });
        res.render(createPath("orders"), {
            orders,
            order,
            products,
        });
    } catch (err) {
        console.log(err);
    }
});

router.get("/delete/:id", async(req, res) => {
    try {
        await Order.findOneAndDelete({ _id: req.params.id });
        res.redirect("/order");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;