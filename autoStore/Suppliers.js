////////////////////////////////////////
////////suppliers - Поставщики//////////
////////////////////////////////////////

let SergeevNumber1 = db.suppliers.insertOne({
    fullName: "Сергеев Захар Дмитриевич",
    country: "Швейцария",
    address: "Nguyen Anh, Av. du Midi 13, 1700 Fribourg",
    telefone: "79233083818",
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory3.insertedId,
    }),
});

let BogdanovaNumber2 = db.suppliers.insertOne({
    fullName: "Богданова Анна Ивановна",
    country: "Австрия",
    address: "Lindenallee, 8720 Knittelfeld",
    telefone: "79254191872",
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory3.insertedId,
    }),
});

let SmirnovNumber3 = db.suppliers.insertOne({
    fullName: "Смирнов Александр Александрович",
    country: "Польша",
    address: "Gołębia, 85-309 Bydgoszcz",
    telefone: "79082245833",
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory3.insertedId,
    }),
});

let NovikovNumber4 = db.suppliers.insertOne({
    fullName: "Новиков Марк Сергеевич",
    country: "Литва",
    address: "Tilžės g. 52B, Šiauliai 78174",
    telefone: "79860524590",
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory4.insertedId,
    }),
});

let EfimovaNumber5 = db.suppliers.insertOne({
    fullName: "Ефимова Ксения Львовна",
    country: "Нидерланды",
    address: "Abraham Kuyperplein 45, 1067 DE Amsterdam",
    telefone: "79233083818",
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory3.insertedId,
    }),
});

let SmirnovNumber6 = db.suppliers.insertOne({
    fullName: "Смирнов Константин Маркович",
    country: "Португалия",
    address: "Praceta dos Vales de Baixo 4, 2700-134 Amadora",
    telefone: "79882641466",
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory4.insertedId,
    }),
});

let MeshcheryakovNumber7 = db.suppliers.insertOne({
    fullName: "Мещеряков Тимофей Даниилович",
    country: "Тунис",
    address: "Institute Languages Elite, R43C+F9G",
    telefone: "79099027467",
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory3.insertedId,
    }),
});

let ArkhipovaNumber8 = db.suppliers.insertOne({
    fullName: "Архипова Айлин Михайловна",
    country: "Финляндия",
    address: "Kamreerintie 3, 02770 Espoo",
    telefone: "79001987887",
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory4.insertedId,
    }),
});

let KozhevnikovaNumber9 = db.suppliers.insertOne({
    fullName: "Кожевникова Василиса Александровна",
    country: "Китай",
    address: "Yau Ma Tei Theatre, 6 Waterloo Rd, Yau Ma Tei",
    telefone: "79787056129",
    yearsWarranty: 1,
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory2.insertedId,
    }),
});

let GolovinNumber10 = db.suppliers.insertOne({
    fullName: "Головин Владислав Артёмович",
    country: "Эстония",
    address: "Koidu 19, Rapla, 79513 Rapla maakond",
    telefone: "79538453120",
    yearsWarranty: 1,
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory1.insertedId,
    }),
});

let GrishinNumber11 = db.suppliers.insertOne({
    fullName: "Гришин Филипп Андреевич",
    country: "Швеция",
    address: "Drottninggatan 72-76, 111 21 Stockholm",
    telefone: "79588352442",
    yearsWarranty: 2,
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory2.insertedId,
    }),
});

let VasilyevaNumber12 = db.suppliers.insertOne({
    fullName: "Васильева Ярослава Игоревна",
    country: "Китай",
    address: "Baoshan, 大宁地区 邮政编码: 200436",
    telefone: "79637529044",
    supplierCategory: db.supplier_categories.findOne({
        _id: supplierCategory3.insertedId,
    }),
});