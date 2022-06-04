////////////////////////////////////////
////////////orders - Заказы/////////////
////////////////////////////////////////

let Order1 = db.orders.insertOne({
    product: db.product_directories.findOne({
        _id: cabinFilterCarbon1.insertedId,
    }),
    quantity: 248,
    price: 2342,
    orderDate: new Date(),
    manager: "Плотникова Виктория Максимовна",
});

let Order2 = db.orders.insertOne({
    product: db.product_directories.findOne({ _id: airFilter2.insertedId }),
    quantity: 253,
    price: 2342,
    orderDate: new Date(),
    manager: "Денисов Григорий Фёдорович",
});

let Order3 = db.orders.insertOne({
    product: db.product_directories.findOne({ _id: halogenLamp3.insertedId }),
    quantity: 167,
    price: 2342,
    orderDate: new Date(),
    manager: "Ермакова Ева Ярославовна",
});

let Order4 = db.orders.insertOne({
    product: db.product_directories.findOne({ _id: brakePads4.insertedId }),
    quantity: 78,
    price: 2342,
    orderDate: new Date(),
    manager: "Плотникова Виктория Максимовна",
});

let Order5 = db.orders.insertOne({
    product: db.product_directories.findOne({ _id: antifreeze5.insertedId }),
    quantity: 98,
    price: 2342,
    orderDate: new Date(),
    manager: "Ермакова Ева Ярославовна",
});