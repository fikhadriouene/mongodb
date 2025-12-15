use("hopital")

db.eleves.insertMany([
{ 
    lastname: "mohamed", 
    firstname: "tutu", "classe": "5e",
    age : 35,
    history : [
        {
            disease1 : "rhume",
            treatment : "fervex"
        },
        {
            disease1 : "toux",
            treatment : "sirop"
        }

    ]
},
{ 
    lastname: "mohamed", 
    firstname: "tutu", "classe": "5e",
    age : 35,
    history : [
        {
            disease1 : "rhume",
            treatment : "fervex"
        },
        {
            disease1 : "toux",
            treatment : "sirop"
        }

    ]
},
{ 
    lastname: "mohamed", 
    firstname: "tutu",
    age : 35,
    history : [
        {
            disease1 : "rhume",
            treatment : "fervex"
        },
        {
            disease1 : "toux",
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
            disease1 : "angine",
            treatment : "paracetamol"
        },
        {
            disease2 : "rhume",
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
            disease1 : "rhino",
            treatment : "paracetamol"
        },
        {
            disease1 : "otite",
            treatment : "paracetamol"
        }

    ]
}

])