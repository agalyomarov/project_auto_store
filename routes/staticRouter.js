const createPath = require("../helpers/createPath.js");
const Suppy = require("../models/Suppy.js");
const Supplier = require("../models/Supplier");
const ProductDirectory = require("../models/ProductDirectory.js");
const Purchases = require("../models/Purchases");
const express = require("express");
const router = express.Router();

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
        // console.log(req.body);
        let purchases = await Purchases.aggregate([{
            $match: {
                dateOfPurchase: {
                    $gte: new Date(Date.parse(req.body.start)),
                    $lte: new Date(Date.parse(req.body.end)),
                },
                "products.product.name": req.body.name,
            },
        }, ]);
        res.render(createPath("statics/buyer"), { purchases });
    } catch (err) {
        console.log(err);
    }
});

router.get("/supplier", async(req, res) => {
    try {
        const suppliers = await ProductDirectory.aggregate([
            { $match: { name: req.query.name } },
            {
                $group: {
                    _id: "$supplier._id",
                    fullName: { $first: "$supplier.fullName" },
                    country: { $first: "$supplier.country" },
                    address: { $first: "$supplier.address" },
                    telefone: { $first: "$supplier.telefone" },
                    category: { $first: "$supplier.supplierCategory.title" },
                },
            },
        ]);
        // console.log(suppliers);
        res.render(createPath("statics/supplier"), { suppliers });
    } catch (err) {
        console.log(err);
    }
});

router.get("/buyer", async(req, res) => {
    res.redirect("/static/product");
});

router.get("/top_10_product", async(req, res) => {
    try {
        const products = await Purchases.aggregate([
            { $unwind: "$products" },
            {
                $replaceRoot: { newRoot: "$products" },
            },
            {
                $group: {
                    _id: "$product._id",
                    count: { $sum: "$quantity" },
                    name: { $first: "$product.name" },
                    manufacturer: { $first: "$product.manufacturer" },
                    article: { $first: "$product.article" },
                    price: { $first: "$product.price" },
                    supplier: { $first: "$product.supplier" },
                },
            },
            { $sort: { count: 1 } },
            { $limit: 10 },
        ]);
        res.render(createPath("statics/top_10_product"), { products });
    } catch (err) {
        console.log(err);
    }
});

router.get("/10_nice_supplier", async(req, res) => {
    try {
        const suppliers = await ProductDirectory.aggregate([
            { $sort: { price: 1 } },
            {
                $group: {
                    _id: "$name",
                    supplier: {
                        $first: "$supplier",
                    },
                },
            },
            { $replaceRoot: { newRoot: "$supplier" } },
            { $limit: 10 },
        ]);
        // console.log(suppliers);
        res.render(createPath("statics/10_nice_supplier"), { suppliers });
    } catch (err) {
        console.log(err);
    }
});

router.post("/dolya_probyl", async(req, res) => {
    try {
        console.log(req.body);
        const percent = await Purchases.aggregate([{
                $match: {
                    dateOfPurchase: {
                        $gte: new Date(Date.parse(req.body.start)),
                        $lte: new Date(Date.parse(req.body.end)),
                    },
                },
            },
            { $replaceRoot: { newRoot: { products: "$products" } } },
            { $unwind: "$products" },
            {
                $project: {
                    _id: "$products.product._id",
                    name: "$products.product.name",
                    article: "$products.product.article",
                    price: "$products.product.price",
                    quantity: "$products.quantity",
                    totalAmount: {
                        $multiply: ["$products.product.price", "$products.quantity"],
                    },
                },
            },
            {
                $group: {
                    _id: "$_id",
                    name: { $first: "$name" },
                    article: { $first: "$article" },
                    quantity: { $sum: "$quantity" },
                    totalAmount: { $sum: "$totalAmount" },
                    price: { $first: "$price" },
                },
            },
            {
                $facet: {
                    need_product: [{
                        $match: {
                            article: parseInt(req.body.article),
                        },
                    }, ],
                    total_info: [{
                        $group: {
                            _id: "total",
                            quantity: { $sum: "$quantity" },
                            totalAmount: { $sum: "$totalAmount" },
                        },
                    }, ],
                },
            },
        ]);
        const need_product = percent[0].need_product;
        const total_info = percent[0].total_info;
        const start_time = req.body.start;
        const end_time = req.body.end;
        // console.log(total_info);
        res.render(createPath("statics/dolya_pribyl"), {
            need_product,
            total_info,
            start_time,
            end_time,
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;