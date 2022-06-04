////////////////////////////////////////
////////////Defective - Брак////////////
////////////////////////////////////////

let defective1 = db.defectivies.insertOne({
    product: db.product_directories.findOne({ _id: halogenLamp3.insertedId }),
    quantity: 1,
    buyer: "Суворов Александр Георгиевич",
    defectDescription: "Не работает лампа.",
    date: new Date("2022-06-15T08:00:00Z"),
    refunded: false,
});