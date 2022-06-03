//  load("D:\\autoStore\\CreateDataBase.js")
db.supplier_categories.drop();
db.suppliers.drop();
db.product_directories.drop();
db.requests_from_buyers.drop();
db.orders.drop();
db.suppy.drop();
db.ware_house.drop();
db.purchases.drop();
db.defective.drop();
db.refunds.drop();

load("./SupplierCategory.js");
load("./Suppliers.js");
load("./ProductDirectory.js");
load("./RequestsFromBuyers.js");
load("./Orders.js");
load("./Suppy.js");
load("./Warehouse.js");
load("./Purchases.js");
load("./Defective.js");
load("./Refunds.js");