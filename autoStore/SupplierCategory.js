////// Категории поставщиков //////////////////////////////////

let supplierCategory1 = db.supplier_categories.insertOne({
    title: "Фирма",
});
let supplierCategory2 = db.supplier_categories.insertOne({
    title: "Дилер",
});
let supplierCategory3 = db.supplier_categories.insertOne({
    title: "Магазин",
});
let supplierCategory4 = db.supplier_categories.insertOne({
    title: "Мелкий поставщик",
});