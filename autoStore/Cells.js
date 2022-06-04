////////////////////////////////////////
///////////cells - ячейки в складе////////////
////////////////////////////////////////

let product1 = db.cells.insertOne({
    product: db.product_directories.findOne({
        _id: cabinFilterCarbon1.insertedId,
    }),
    numberBox: 1,
    quantity: 254,
});

let product2 = db.cells.insertOne({
    product: db.product_directories.findOne({ _id: airFilter2.insertedId }),
    numberBox: 2,
    quantity: 276,
});

let product3 = db.cells.insertOne({
    product: db.product_directories.findOne({ _id: halogenLamp3.insertedId }),
    numberBox: 3,
    quantity: 152,
});

let product4 = db.cells.insertOne({
    product: db.product_directories.findOne({ _id: brakePads4.insertedId }),
    numberBox: 4,
    quantity: 34,
});

let product5 = db.cells.insertOne({
    product: db.product_directories.findOne({ _id: antifreeze5.insertedId }),
    numberBox: 5,
    quantity: 345,
});