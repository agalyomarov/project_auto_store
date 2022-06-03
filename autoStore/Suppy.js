////////////////////////////////////////
///////////Suppy - поставка/////////////
////////////////////////////////////////

let Suppy1 = db.suppy.insertOne({
    order: db.orders.findOne({ _id: Order1.insertedId }),
    paymentOfTheFee: 1111,
    deliveryDate: new Date(),
});

let Suppy2 = db.suppy.insertOne({
    order: db.orders.findOne({ _id: Order2.insertedId }),
    paymentOfTheFee: 1430,
    deliveryDate: new Date(),
});

let Suppy3 = db.suppy.insertOne({
    order: db.orders.findOne({ _id: Order3.insertedId }),
    paymentOfTheFee: 1678,
    deliveryDate: new Date(),
});

let Suppy4 = db.suppy.insertOne({
    order: db.orders.findOne({ _id: Order4.insertedId }),
    paymentOfTheFee: 2975,
    deliveryDate: new Date(),
});

let Suppy5 = db.suppy.insertOne({
    order: db.orders.findOne({ _id: Order5.insertedId }),
    paymentOfTheFee: 572,
    deliveryDate: new Date(),
});