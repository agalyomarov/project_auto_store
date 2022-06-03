////////////////////////////////////////
////////////Defective - Брак////////////
////////////////////////////////////////

let defective1 = db.Defective.insertOne({
    product: db.ProductDirectory.findOne({ _id: halogenLamp3.insertedId }),
    buyer: "Суворов Александр Георгиевич",
    defectDescription: "Не работает лампа.",
    date: new Date("2022-06-15T08:00:00Z"),
});