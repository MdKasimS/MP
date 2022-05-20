const dbConnect = require('./db/mongodb');
const static = require('./db/statData');
const express = require('express');
const app = express();


app.get('/book', (req,res)=>{
    console.log(req.query['kasim']);
    res.send(static);
});


app.listen(5500);
console.log(static);
console.log("Salam Hindutshan !!!");
console.log("Alhamdulillah !!! All set !!!");


async function getData() {
    let collection = await dbConnect();
    let data = await collection.find().toArray();
    console.log(data)
}

// async function setData() {
//     let collection = await dbConnect();
//     console.log("Alhamdulillah adding 1st data");
//     const status = await collection.bulkWrite(
//         {
//             insertOne:{
//                 document:
//                 {
//                     ISBN:"1623439671",
//                     JPEG:"1623439671.jpg",
//                     ImageURL:"http://ecx.images-amazon.com/images/I/61t-hrSw9BL.jpg",
//                     Title:"Doug the Pug 2016 Wall Calendar",
//                     Author:"Doug the Pug",
//                     Ratings:4,
//                 }
//             }
//         });
//         console.log(status);
// };

async function updateData() {
    let collection = await dbConnect();
    let data = await collection.updateOne({userName:'qasim'},{$set:{userName:'qasim04',passWord:'qasim@04'}});
    console.log(data);
}

async function deleteData() {}

// getData();
// setData();
// updateData();
// deleteData();
