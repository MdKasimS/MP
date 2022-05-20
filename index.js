const express= require('express');
const path = require('path');

// const connect = mongoose.connect(//)

const publicPath = path.join(__dirname,'public');
const app = express();

// console.log(publicPath);

app.use(express.static(publicPath));
// app.use(express.static());

app.get('/', (_, res)=>{
    res.sendFile(`${__dirname}/index.html`);
    console.log('Page requested');
});

app.get('/contact', (_, res)=>{
    res.send('Error Page Not Found');
});

app.get('/books', (_, res)=>{
    res.sendFile(`${publicPath}/prodPract.html`)
});


console.log("Listening port 5000");
app.listen(5000);