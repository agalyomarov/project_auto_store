////////////////////////////////////////
////////////Defective - Брак////////////
////////////////////////////////////////

let defective1 = db.defective.insertOne({
    product: db.product_directory.findOne({ _id: halogenLamp3.insertedId }),
    buyer: "Суворов Александр Георгиевич",
    defectDescription: "Не работает лампа.",
    date: new Date("2022-06-15T08:00:00Z"),
});