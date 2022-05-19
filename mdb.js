const mongo = require('mongodb');

const mongoClient = new mongo.MongoClient('mongodb://localhost:27017');

const connectionObject = mongoClient.connect();

const database = connectionObject.then();

// const collection = database.

