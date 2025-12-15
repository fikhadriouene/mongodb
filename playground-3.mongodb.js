use("hopital")

db.malades.insertMany([
{ 
    lastname: "titi", 
    firstname: "grosminet",
    age : 35,
    history : [
        {
            disease : "rhume",
            treatment : "fervex"
        },
        {
            disease : "toux",
            treatment : "sirop"
        }

    ]
},
{ 
    lastname: "robert", 
    firstname: "michel",
    age : 75,
    history : [
        {
            disease : "angine",
            treatment : "paracetamol"
        },
        {
            disease : "rhume",
            treatment : "fervex"
        }

    ]
},
{ 
    lastname: "julien", 
    firstname: "courbet",
    age : 35,
    history : [
        {
            disease : "rhino",
            treatment : "paracetamol"
        },
        {
            disease : "otite",
            treatment : "paracetamol"
        }

    ]
}

])



db.malades.updateOne(
    {firstname :"courbet"}, 
    {$set: {
        age : 99, 
        lastname : "Jérémy"
    }
    ,
    $push :{
        history : {disease : 'diabète',treatment :'insuline'}
    }    
    }
)

db.malades.find({age : {$gt : 29}})

db.malades.deleteMany({"history.disease" : "rhume"})

db.malades.find()