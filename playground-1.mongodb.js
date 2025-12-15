use("demo")
// db.products.insertOne({
//     id : 1,
//     nom : "iphone",
//     prix : 1500,
//     categorie : "electronique",
//     disponibilite : true
// }
// )

// db.products.insertMany([
//   {
//     id: 2,
//     name: "Montre Connectée Solar",
//     description: "Montre connectée avec suivi d'activité et panneau solaire",
//     price: 199.99,
//     category: "Wearables",
//     available: true
//   },
//   {
//     id: 3,
//     name: "Casque Audio Pro",
//     description: "Casque audio sans fil avec réduction de bruit",
//     price: 299.99,
//     category: "Audio",
//     available: false
//   },
//   {
//     id: 4,
//     name: "Tablette Pro 12",
//     description: "Tablette 12 pouces avec stylet et clavier détachable",
//     price: 899.99,
//     category: "Computers",
//     available: true
//   }
// ])

// db.products.insertOne({
//   id: 10,
//   name: "Drone Explorer Air",
//   description: "Drone avec caméra 4K",
//   price: 1199.99,
//   category: "Electronics",
//   available: false,
//   tags: ["drone", "4K", "high-tech"]
// })

// db.products.insertOne({
//   id: 11,
//   name: "Cafetière Expresso QuickBrew",
//   description: "Cafetière automatique",
//   price: 249.99,
//   category: "Kitchen Appliances",
//   available: true,
//   comments: [
//     { user: "Alice", comment: "Très rapide." },
//     { user: "Bob", comment: "Facile à nettoyer." }
//   ]
// })

db.products.find({id : 11})

