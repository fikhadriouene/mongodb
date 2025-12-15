use("demo")
use("demo");
//db.products.find()
// db.products.find({category: "Electronics" })
// db.products.find({available: true}, {_id: 0, name: 1, price: 1 })

// db.products.find({category : {$in : ['Audio','Electronics']}})

    db.products.updateOne({id :1}, {$set: {price : 666}} )

db.find("")