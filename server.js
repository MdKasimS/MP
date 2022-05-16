console.log("Salam Hindutshan !!!");

console.log("Alhamdulillah !!! All set !!!");


const mongo = require('mongodb');
const mongoClient = new mongo.MongoClient("mongodb://localhost:27017")

// console.log(mongoClient);

async function getData()
{
    let result = await mongoClient.connect();
    console.log(result)

    let db = result.db('local');
    let collection = db.collection('via_csv');

    console.log(await collection.dbName);

    // console.log(await collection.find({}).toArray());
}


getData();