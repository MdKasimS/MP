// const dbConnect = require('./db/mongodb');
const static = require('./db/statData');
const getData = require('./db/read');

const express = require('express');
const app = express();

console.log("Salam Hindutshan !!!");
console.log("Alhamdulillah !!! All set !!!");

app.get('/books', (req,res)=>{
    console.log(req.query['kasim']);
    res.send(static);
    getData();
});


app.listen(5001);
console.log(static);



// getData();
// setData();
// updateData();
// deleteData();
