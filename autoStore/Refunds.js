////////////////////////////////////////
//////////Refunds - возвраты на поставщиков////////////
////////////////////////////////////////

let Refunds1 = db.refunds.insertOne({
    defectiveProduct: db.defective.findOne({
        _id: defective1.insertedId,
    }),
    date: new Date("2022-06-15T08:00:00Z"),
});