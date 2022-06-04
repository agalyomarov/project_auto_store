const createPath = require("../helpers/createPath.js");
const Suppy = require("../models/Suppy.js");
const Supplier = require("../models/Supplier");
const ProductDirectory = require("../models/ProductDirectory.js");
const Purchases = require("../models/Purchases");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const suppliers = await (await Supplier.find()).reverse();
        res.render(createPath("statics/supplier"), { suppliers });
    } catch (err) {
        console.log(err);
    }
});

router.get("/product", async(req, res) => {
    try {
        const suppies = await (await Suppy.find()).reverse();
        res.render(createPath("statics/product"), { suppies });
    } catch (err) {
        console.log(err);
    }
});

router.post("/buyer", async(req, res) => {
    try {
        const needPurchases = await Purchases.find({
            dateOfPurchase: { $gte: req.body.start, $lte: req.body.end },
        });
        const purchases = [];
        for (let i = 0; i < needPurchases.length; i++) {
            for (let j = 0; j < needPurchases[i].products.length; j++) {
                if (
                    req.body._id.toString() ==
                    needPurchases[i].products[j].product._id.toString()
                ) {
                    purchases.push(needPurchases[i]);
                }
            }
        }
        res.render(createPath("statics/buyer"), { purchases });
    } catch (err) {
        console.log(err);
    }
});

router.get("/buyer", async(req, res) => {
    res.redirect("/static/product");
});

router.get("/top_10_product", async(req, res) => {
    try {
        const allPurchases = await Purchases.find();
        let products = [];
        for (let i = 0; i < allPurchases.length; i++) {
            for (let j = 0; j < allPurchases[i].products.length; j++) {
                if (products[allPurchases[i].products[j].product._id]) {
                    products[allPurchases[i].products[j].product._id] =
                        parseInt(products[allPurchases[i].products[j].product._id]) + 1;
                } else {
                    products[allPurchases[i].products[j].product._id] = 1;
                }
            }
        }
        var tuples = [];
        for (var key in products) tuples.push([key, products[key]]);
        tuples.sort(function(a, b) {
            a = a[1];
            b = b[1];
            return a < b ? -1 : a > b ? 1 : 0;
        });
        products = [];
        for (var i = 0; i < tuples.length; i++) {
            if (i < 10) {
                products[i] = await ProductDirectory.findOne({ _id: tuples[i][0] });
            }
        }
        console.log(tuples);
        res.render(createPath("statics/top_10_product"), { products });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;