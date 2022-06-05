const { db } = require("../models/Suppy");

//////////////////////////////////////////////1 запрос////////////////////////////////////
name_product = "Антифриз"; //Имя продукта
db.product_directories.aggregate([
    { $match: { name: name_product } },
    {
        $replaceRoot: {
            newRoot: {
                supplier_name: "$supplier.fullName",
                supplier_category: "$supplier.supplierCategory.title",
                count: 1,
            },
        },
    },
    {
        $group: {
            _id: "$supplier_category",
            suppliers: { $push: "$supplier_name" },
            count: { $sum: "$count" },
        },
    },
]);

////////////////////////////////////////////2 запрос//////////////////////////////////////////
name_product = "Антифриз"; //Имя продукта
db.suppies.aggregate([
    { $match: { "order.product.name": name_product } },
    {
        $replaceRoot: {
            newRoot: {
                product_name: "$order.product.name",
                product_category: "$order.product.category",
                supplier_name: "$order.product.supplier.fullName",
                deliveryDate: "$deliveryDate",
            },
        },
    },
]);

/////////////////////////////////////3 запрос////////////////////////////////////////////////
name_product = "Антифриз"; //Имя продукта
start_time = "2022-06-01"; //Начало периода
end_time = "2022-06-19"; //конец периода

db.purchases.aggregate([{
        $match: {
            dateOfPurchase: {
                $gte: new Date(Date.parse(start_time)),
                $lte: new Date(Date.parse(end_time)),
            },
            "products.product.name": name_product,
        },
    },
    {
        $replaceRoot: {
            newRoot: {
                _id: "$_id",
                count: 1,
                name: "$fullName",
            },
        },
    },
    {
        $group: {
            _id: "Buyers",
            buyers: { $push: "$name" },
            count: { $sum: "$count" },
        },
    },
]);

/////////////////////////////4 запрос-TOP 10 продоваемый  товаров///////////////////////////////////
db.purchases.aggregate([
    { $unwind: "$products" },
    {
        $replaceRoot: { newRoot: "$products" },
    },
    {
        $group: {
            _id: "$product._id",
            count: { $sum: "$quantity" },
            name: { $first: "$product.name" },
            manufacturer: { $first: "$product.manufacturer" },
            article: { $first: "$product.article" },
            price: { $first: "$product.price" },
        },
    },
    { $sort: { count: 1 } },
    { $limit: 10 },
]);

///////////////////////////////4 запрос-TOP 10 дещевый поставщиков/////////////////////////////
db.product_directories.aggregate([
    { $sort: { price: 1 } },
    {
        $group: {
            _id: "$name",
            supplier: {
                $first: "$supplier",
            },
        },
    },
    {
        $replaceRoot: {
            newRoot: {
                fullName: "$supplier.fullName",
                country: "$supplier.country",
                address: "$supplier.address",
                telefone: "$supplier.telefone",
                category: "$supplier.supplierCategory.title",
            },
        },
    },
    { $limit: 10 },
]);

/////////////////////////5 запрос////////////////////////////////
db.cells.aggregate([{
        $replaceRoot: {
            newRoot: {
                _id: "$product.supplier._id",
                fullName: "$product.supplier.fullName",
                country: "$product.supplier.country",
                address: "$product.supplier.address",
                telefone: "$product.supplier.telefone",
                category: "$product.supplier.supplierCategory.title",
                price: "$product.price",
                product_quantity: "$quantity",
                total_price: { $multiply: ["$quantity", "$product.price"] },
            },
        },
    },
    {
        $group: {
            _id: "$_id",
            fullName: { $first: "$fullName" },
            country: { $first: "$country" },
            address: { $first: "$address" },
            telefone: { $first: "$telefone" },
            category: { $first: "$category" },
            price: { $first: "$price" },
            total_price: { $sum: "$total_price" },
            product_quantity: { $sum: "$product_quantity" },
        },
    },
    {
        $group: {
            _id: "all",
            supplier: {
                $push: {
                    _id: "$_id",
                    fullName: "$fullName",
                    country: "$country",
                    address: "$address",
                    telefone: "$telefone",
                    category: "$category",
                    price: "$price",
                    product_quantity: "$product_quantity",
                    total_price: "$total_price",
                },
            },
            all_quantity: { $sum: "$product_quantity" },
            total_price: { $sum: "$total_price" },
        },
    },
    { $unwind: "$supplier" },
    {
        $project: {
            fullName: "$supplier.fullName",
            country: "$supplier.country",
            address: "$supplier.address",
            telefone: "$supplier.telefone",
            category: "$supplier.category",
            product_quantity: "$supplier.product_quantity",
            all_quantity: "$all_quantity",
            quantity_percent: {
                $divide: ["$supplier.product_quantity", "$all_quantity"],
            },
            price_percent: {
                $divide: ["$supplier.total_price", "$total_price"],
            },
        },
    },
    {
        $group: {
            _id: "all",
            supplier: {
                $push: {
                    fullName: "$fullName",
                    country: "$country",
                    address: "$address",
                    telefone: "$telefone",
                    category: "$category",
                    product_quantity: "$product_quantity",
                    all_quantity: "$all_quantity",
                    quantity_percent: {
                        $round: ["$quantity_percent", 2],
                    },
                    price_percent: {
                        $round: ["$price_percent", 2],
                    },
                },
            },
        },
    },
]);

/////////////// 10 - Запрос/////////////////////////////////////////
db.requests_from_buyers.aggregate([
    { $unwind: "$products" },
    {
        $project: {
            totalAmount: "$totalAmount",
            product_name: "$products.product.name",
            product_category: "$products.product.category",
            fullName: "$fullName",
        },
    },
    {
        $group: {
            _id: "all",
            zayavki: {
                $push: {
                    product_name: "$product_name",
                    product_category: "$product_category",
                    fullName: "$fullName",
                },
            },
            totalAmount: { $sum: "$totalAmount" },
        },
    },
]);