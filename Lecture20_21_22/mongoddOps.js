var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

const connection = MongoClient.connect(url);

connection.then(async (client) => {
    const db = client.db("usman");

    const exits = await db.listCollections({ name: "students" }).hasNext();
    let collec;
    if (!exits) {
        collec = await db.createCollection("students");
    } else {
        collec = db.collection("students");
    }

    const req = await collec.find({}).limit(1).toArray();
    console.log(req)
    client.close();




}).catch((error) => {
    console.log(error);
})
