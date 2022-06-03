///////////////////////////////////////////
//RequestsFromBuyers - заявки покупателей//
///////////////////////////////////////////

let RequestsFromBuyers1 = db.RequestsFromBuyers.insertOne({
    products: [{
            product: db.ProductDirectory.findOne({
                _id: cabinFilterCarbon1.insertedId,
            }),
            quantity: 1,
        },
        {
            product: db.ProductDirectory.findOne({ _id: airFilter2.insertedId }),
            quantity: 2,
        },
    ],
    totalAmount: 874,
    orderDate: new Date(),
    fullName: "Волков Никита Ярославович",
});

let RequestsFromBuyers2 = db.RequestsFromBuyers.insertOne({
    products: [{
        product: db.ProductDirectory.findOne({ _id: halogenLamp3.insertedId }),
        quantity: 1,
    }, ],
    totalAmount: 786,
    orderDate: new Date(),
    fullName: "Суворов Александр Георгиевич",
});

let RequestsFromBuyers3 = db.RequestsFromBuyers.insertOne({
    products: [{
        product: db.ProductDirectory.findOne({ _id: brakePads4.insertedId }),
        quantity: 1,
    }, ],
    totalAmount: 2555,
    orderDate: new Date(),
    fullName: "Суворов Александр Георгиевич",
});

let RequestsFromBuyers4 = db.RequestsFromBuyers.insertOne({
    products: [{
            product: db.ProductDirectory.findOne({
                _id: cabinFilterCarbon1.insertedId,
            }),
            quantity: 1,
        },
        {
            product: db.ProductDirectory.findOne({ _id: antifreeze5.insertedId }),
            quantity: 4,
        },
    ],
    totalAmount: 1474,
    orderDate: new Date(),
    fullName: "Суворов Александр Георгиевич",
});

let RequestsFromBuyers5 = db.RequestsFromBuyers.insertOne({
    products: [{
        product: db.ProductDirectory.findOne({ _id: brakePads4.insertedId }),
        quantity: 2,
    }, ],
    totalAmount: 5110,
    orderDate: new Date(),
    fullName: "Суворов Александр Георгиевич",
});