const express = require("express");
const path = require("path");
const supplierRouter = require("./routes/supplierRouter");
const productDirectoryRouter = require("./routes/productDirectory");
const mongoose = require("mongoose");
const app = express();

const MONGODB_URL = "mongodb://127.0.0.1/auto_store";
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/", supplierRouter);
app.use("/product_directory", productDirectoryRouter);

function start() {
    try {
        mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
        });
        app.listen(PORT, () => {
            console.log(`Server starting on port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();