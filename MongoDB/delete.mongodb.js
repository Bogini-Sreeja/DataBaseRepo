use('Ecommerce');
db.orders.deleteMany({status: "Delivered"});
//delete item price less than 20
db.products.deleteMany({price:{$lt: 20}});