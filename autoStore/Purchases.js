////////////////////////////////////////
//////////Purchases - покупки///////////
////////////////////////////////////////

let Purchases1 = db.purchases.insertOne({
    products: [{
        product: db.product_directories.findOne({
            _id: cabinFilterCarbon1.insertedId,
        }),
        quantity: 1,
    }, ],
    totalAmount: 786,
    dateOfPurchase: new Date("2022-06-02T08:00:00Z"),
    fullName: "Суворов Александр Георгиевич",
});

let Purchases2 = db.purchases.insertOne({
    products: [{
        product: db.product_directories.findOne({ _id: halogenLamp3.insertedId }),
        quantity: 1,
    }, ],
    totalAmount: 786,
    dateOfPurchase: new Date("2022-06-02T08:00:00Z"),
    fullName: "Суворов Александр Георгиевич",
});

let Purchases4 = db.purchases.insertOne({
    products: [{
        product: db.product_directories.findOne({ _id: brakePads4.insertedId }),
        quantity: 1,
    }, ],
    totalAmount: 2555,
    dateOfPurchase: new Date("2022-06-18T08:00:00Z"),
    fullName: "Суворов Александр Георгиевич",
});