const createPath = require("../helpers/createPath.js");
const Suppy = require("../models/Suppy.js");
const Defective = require("../models/Defective.js");
const Refund = require("../models/Refund.js");
const ProductDirectory = require("../models/ProductDirectory.js");
const Cells = require("../models/Cells.js");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const refunds = await (await Refund.find()).reverse();
        res.render(createPath("refunds"), {
            refunds,
        });
    } catch (err) {
        console.log(err);
    }
});
router.get("/store/:id", async(req, res) => {
    try {
        const defectiveProduct = await Defective.findOneAndUpdate({
            _id: req.params.id,
        }, {
            refunded: true,
        });
        const refund = new Refund({ defectiveProduct, date: new Date() });
        await refund.save();
        res.redirect("/refund");
    } catch (err) {
        console.log(err);
    }
});
router.get("/delete/:id", async(req, res) => {
    try {
        await Refund.findOneAndDelete({ _id: req.params.id });
        res.redirect("/refund");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;