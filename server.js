// const dbConnect = require('./db/mongodb');
const static = require('./db/statData');
const getData = require('./db/read');
const path = require('path');
const express = require('express');

const app = express();


// const connect = mongoose.connect(//)

const publicPath = path.join(__dirname,'public');

// console.log(publicPath);

app.use(express.static(publicPath));
// app.use(express.static());


console.log("Salam Hindutshan !!!");
console.log("Alhamdulillah !!! All set !!!");

app.get('/books', async (req,res)=>{
    console.log(req.query['kasim']);
    // res.send(static);
    res.sendFile(`${publicPath}/prodPract.html`);
    // console.log("I sent prodPract.html");
});

app.get('/books/data',async  (req, res)=>{
    let data = await getData();
    console.log(data);
    // res.send(JSON.stringify(data));
    res.send(data);
    console.log(typeof(data));
    console.log("I am at server :")
});


console.log("Listening Port:5001");
app.listen(5001);
// console.log(static);



// getData();
// setData();
// updateData();
// deleteData();
