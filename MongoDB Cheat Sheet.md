# 🟢 MongoDB Cheat Sheet — Base + CRUD + Opérateurs Logiques + Agrégation

## Exemple de base (Structure)
- **Base de données** : `ecole`
- **Collection** : `eleves`
- **Document type** :
```json
{ "prenom": "Emma", "age": 14, "classe": "4e", "club": "basket", "note": 15 }

use ecole
show dbs
show collections
db

db.eleves.insertMany([
  { "prenom": "Lucas", "age": 12, "classe": "5e" },
  { "prenom": "Emma", "age": 14, "classe": "4e", "club": "basket", "note": 15 },
  { "prenom": "Lina", "age": 15, "classe": "4e", "club": "foot", "note": 18 },
  { "prenom": "Noah", "age": 14, "classe": "4e", "note": 12 }
])

db.eleves.find()
db.eleves.find({ "prenom": "Emma" })
db.eleves.findOne({ "prenom": "Lucas" })
db.eleves.find({ "age": { $gt: 13 } })


// AND (ET)
db.eleves.find({ "age": { $gte: 14 }, "classe": "4e" })

// OR (OU)
db.eleves.find({ $or: [ { "classe": "5e" }, { "club": "basket" } ] })

// NOT (NON)
db.eleves.find({ "age": { $not: { $lt: 14 } } })

// Champ existant
db.eleves.find({ "club": { $exists: true } })

db.eleves.updateOne({ "prenom": "Emma" }, { $set: { "age": 15 } })
db.eleves.updateMany({ "classe": "5e" }, { $set: { "classe": "4e" } })


// Compter par classe
db.eleves.aggregate([{ $group: { _id: "$classe", total: { $sum: 1 } } }])

// Moyenne des notes par classe
db.eleves.aggregate([{ $group: { _id: "$classe", moyenneNote: { $avg: "$note" } } }])

// Max / Min des notes
db.eleves.aggregate([{ $group: { _id: "$classe", noteMax: { $max: "$note" }, noteMin: { $min: "$note" } } }])

// Filtrer puis agréger
db.eleves.aggregate([{ $match: { "classe": "4e" } }, { $group: { _id: "$classe", moyenneAge: { $avg: "$age" } } }])

// Trier et limiter
db.eleves.aggregate([{ $group: { _id: "$classe", total: { $sum: 1 } } }, { $sort: { total: -1 } }, { $limit: 2 }])


$gt  >   | $lt  <
$gte >= | $lte <=
$ne  ≠
$and → ET | $or → OU | $not → NON
$match → filtrer
$group → regrouper
$avg   → moyenne
$sum   → somme / count
$max   → max
$min   → min
$sort  → trier
$limit → limiter

