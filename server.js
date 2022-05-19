console.log("Salam Hindutshan !!!");

console.log("Alhamdulillah !!! All set !!!");

// /* ---------- tried to do a 5 step driver-solution code------------

// get process's driver code
const mongo = require('mongodb');

// get process's ID (either finr or its predecided)
const mongoClient = new mongo.MongoClient("mongodb://localhost:27017")


// get process's objects called connection object
// call process's higher-level objects
// call process's lower-level objects
// const connectionObject = async function () {
//     return await mongoClient.connect().then();
// };

// const database = async function () {
//     return await connectionObject().then();//.db('local');

// };

// const myDb = async function () {
//     let dbs = (await database()).db('local');
//     return  dbs.collection('via_csv');
// }

// const myCollection = async function(){
//     let data = await myDb().then();
//     console.log(await data.find().toArray());
// };


const connectionObject = async ()=>{
    return await mongoClient.connect();
}

const database = async ()=>{
    let dbs = await connectionObject();
    let dbms = dbs.db('local');
    let collection = dbms.collection('via_csv');
    console.log(await collection.find({}).toArray());

}


function getData() {
    // let connectionObject = await mongoClient.connect();
    // console.log(connectionObject);

    // let db = connectionObject.db('local');
    // let collection = db.collection('via_csv');

    // console.log(await collection.dbName); //not compulsory to write await here

    // console.log(await collection.find({}).toArray());
    // myCollection();
    database();
}


async function setData() {
    // let connectionObject = await mongoClient.connect();
    // let db = await connectionObject.db('local');
    // let collection = await db.collection('via_csv');
    // console.log(await collection.stats()['wiredTiger']);
}

async function updateData() {
    return 0;
}

async function deleteData() {
    return 0;
}


getData();

setData();

updateData();

deleteData();