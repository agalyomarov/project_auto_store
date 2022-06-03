////////////////////////////////////////
//////////Refunds - возвраты на поставщиков////////////
////////////////////////////////////////

let Refunds1 = db.Refunds.insertOne({
    defectiveProduct: db.Defective.findOne({
        _id: defective1.insertedId,
    }),
    date: new Date("2022-06-15T08:00:00Z"),
});