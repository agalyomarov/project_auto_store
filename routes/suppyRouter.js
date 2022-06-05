const createPath = require("../helpers/createPath.js");
const Order = require("../models/Order.js");
const Suppy = require("../models/Suppy.js");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
    try {
        const orders = await Order.find();
        const suppies = await (await Suppy.find()).reverse();
        const suppy = {};
        res.render(createPath("suppies"), {
            suppies,
            orders,
            suppy,
        });
    } catch (err) {
        console.log(err);
    }
});

router.post("/", async(req, res) => {
    try {
        const order = await Order.findOne({
            _id: req.body.order,
        });
        if (req.body._id == "000000000000") {
            const suppy = new Suppy({
                order,
                paymentOfTheFee: req.body.paymentOfTheFee,
                orderDate: new Date(),
                deliveryDate: new Date(),
                add_cell: false,
            });
            await suppy.save();
        } else {
            await Suppy.findOneAndUpdate({ _id: req.body._id }, {
                order,
                paymentOfTheFee: req.body.paymentOfTheFee,
                orderDate: new Date(),
                deliveryDate: new Date(),
                add_cell: false,
            }, { upsert: true });
        }

        res.redirect("/suppy");
    } catch (err) {
        console.log(err);
    }
});

router.get("/edit/:id", async(req, res) => {
    try {
        const orders = await Order.find();
        const suppies = await Suppy.find();
        const suppy = await Suppy.findOne({ _id: req.params.id });
        res.render(createPath("suppies"), {
            suppies,
            orders,
            suppy,
        });
    } catch (err) {
        console.log(err);
    }
});

router.get("/delete/:id", async(req, res) => {
    try {
        await Suppy.findOneAndDelete({ _id: req.params.id });
        res.redirect("/suppy");
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;