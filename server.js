const dbConnect = require('./db/mongodb');


console.log("Salam Hindutshan !!!");
console.log("Alhamdulillah !!! All set !!!");


// async function getData() {
//     let collection = await dbConnect();
//     let data = await collection.find().toArray();
//     console.log(data)
// }

function setData() {}
function updateData() {}
function deleteData() {}


const main = async ()=>{
    console.log("main function");
    let dbs = await dbConnect();
    let colle = await dbs.find().toArray();
    console.log(colle);
};

main();

// getData();
// setData();
// updateData();
// deleteData();