const createPath = require("../helpers/createPath.js");
const Cells = require("../models/Cells");
const ProductDirectory = require("../models/ProductDirectory.js");
const Purchases = require("../models/Purchases.js");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const purchases = await (await Purchases.find()).reverse();
        const cells = await Cells.find();
        res.render(createPath("purchases"), {
            purchases,
            cells,
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
        for (let i = 0; i < values.length - 1; i++) {
            if (parseInt(values[i]) > 0) {
                const object = {};
                const cell = await Cells.findOne({ _id: keys[i] });
                await Cells.findOneAndUpdate({ _id: keys[i] }, {
                    quantity: parseInt(cell.quantity) - parseInt(values[i]),
                });
                object.product = cell.product;
                object.quantity = parseInt(values[i]);
                products[products.length] = object;
            }
        }
        let totalAmount = 0;
        for (let i = 0; i < products.length; i++) {
            totalAmount +=
                parseInt(products[i].product.price) * parseInt(products[i].quantity);
        }
        const purchase = new Purchases({
            products,
            totalAmount,
            fullName: req.body.fullName,
            dateOfPurchase: new Date(),
        });
        purchase.save();
        res.redirect("/purchases");
    } catch (err) {
        console.log(err);
    }
});

router.get("/delete/:id", async(req, res) => {
    try {
        await Purchases.findOneAndDelete({ _id: req.params.id });
        res.redirect("/purchases");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;