const createPath = require("../helpers/createPath.js");
const Suppy = require("../models/Suppy.js");
const ProductDirectory = require("../models/ProductDirectory.js");
const Cells = require("../models/Cells.js");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const cells = await (await Cells.find()).reverse();
        const products = await ProductDirectory.find();
        const cell = false;
        res.render(createPath("cells"), {
            cells,
            products,
            cell,
        });
    } catch (err) {
        console.log(err);
    }
});
router.get("/store/:id", async(req, res) => {
    try {
        let numberBox = Math.ceil(Math.random() * (500 - 1) + 1);
        let checkNumberBox = await Cells.findOne({ numberBox });
        while (checkNumberBox) {
            numberBox = Math.ceil(Math.random() * (500 - 1) + 1);
            checkNumberBox = await Cells.findOne({ numberBox });
        }
        const suppy = await Suppy.findOneAndUpdate({ _id: req.params.id }, { added_cell: true });
        const cell = new Cells({
            product: suppy.order.product,
            quantity: suppy.order.quantity,
            numberBox,
        });
        await cell.save();
        res.redirect("/cells");
    } catch (err) {
        console.log(err);
    }
});

router.post("/", async(req, res) => {
    try {
        const product = await ProductDirectory.findOne({ _id: req.body.product });
        await Cells.updateOne({ _id: req.body._id }, {
            quantity: req.body.quantity,
            product: product,
        });
        res.redirect("/cells");
    } catch (err) {
        console.log(err);
    }
});

router.get("/edit/:id", async(req, res) => {
    try {
        const cells = await (await Cells.find()).reverse();
        const products = await ProductDirectory.find();
        const cell = await Cells.findOne({ _id: req.params.id });
        res.render(createPath("cells"), {
            cells,
            products,
            cell,
        });
    } catch (err) {
        console.log(err);
    }
});

router.get("/delete/:id", async(req, res) => {
    try {
        await Cells.findOneAndDelete({ _id: req.params.id });
        res.redirect("/cells");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;