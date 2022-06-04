const createPath = require("../helpers/createPath.js");
const Suppy = require("../models/Suppy.js");
const Defective = require("../models/Defective.js");
const ProductDirectory = require("../models/ProductDirectory.js");
const Cells = require("../models/Cells.js");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const products = await ProductDirectory.find();
        const defectivies = await (await Defective.find()).reverse();
        res.render(createPath("defectivies"), {
            products,
            defectivies,
        });
        // console.log(defectivies);
    } catch (err) {
        console.log(err);
    }
});
router.post("/", async(req, res) => {
    try {
        const product = await ProductDirectory.findOne({ _id: req.body.product });
        const defective = new Defective({
            product,
            quantity: req.body.quantity,
            buyer: req.body.buyer,
            defectDescription: req.body.defectDescription,
            date: new Date(),
        });
        await defective.save();
        res.redirect("/defective");
    } catch (err) {
        console.log(err);
    }
});

router.get("/delete/:id", async(req, res) => {
    try {
        await Defective.findOneAndDelete({ _id: req.params.id });
        res.redirect("/defective");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;