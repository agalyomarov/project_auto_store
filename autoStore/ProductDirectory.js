/////////////////////////////////////////
//product_directory - справочник товаров//
/////////////////////////////////////////

let cabinFilterCarbon1 = db.product_directory.insertOne({
    name: "Салонный фильтр угольный",
    category: "Запчасти для ТО",
    manufacturer: "LYNX",
    article: 111111,
    price: 234,
    uniqueNumber: 1223,
    supplier: db.suppliers.findOne({ _id: SergeevNumber1.insertedId }),
});

let airFilter2 = db.product_directory.insertOne({
    name: "Фильтр воздушный",
    category: "Запчасти для ТО",
    manufacturer: "Miles",
    article: 234567,
    price: 421,
    supplier: db.suppliers.findOne({ _id: BogdanovaNumber2.insertedId }),
});

let halogenLamp3 = db.product_directory.insertOne({
    name: "Лампа галогеновая",
    category: "Лампа ближнего света",
    manufacturer: "Narva",
    article: 632348,
    price: 456,
    supplier: db.suppliers.findOne({ _id: SmirnovNumber3.insertedId }),
});

let brakePads4 = db.product_directory.insertOne({
    name: "Колодка тормозная",
    category: "Запчасти для ТО",
    manufacturer: "JEENICE",
    article: 890876,
    price: 456,
    supplier: db.suppliers.findOne({ _id: NovikovNumber4.insertedId }),
});

let antifreeze5 = db.product_directory.insertOne({
    name: "Антифриз",
    category: "Жидкости охлаждающие",
    manufacturer: "Лукойл",
    article: 456783,
    price: 765,
    supplier: db.suppliers.findOne({ _id: EfimovaNumber5.insertedId }),
});