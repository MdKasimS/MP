const dbConnect = require('./mongodb');

async function getData() {
    let collection = await dbConnect();
    let data = await collection.find().toArray();
    console.log(data);
}

module.exports = getData;