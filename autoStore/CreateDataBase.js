//  load("D:\\autoStore\\CreateDataBase.js")
db.SupplierCategory.drop();
db.Suppliers.drop();
db.ProductDirectory.drop();
db.RequestsFromBuyers.drop();
db.Orders.drop();
db.Suppy.drop();
db.Warehouse.drop();
db.Purchases.drop();
db.Defective.drop();
db.Refunds.drop();

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