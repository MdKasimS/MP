const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, 'public');
const app = express();

app.use(express.static(publicPath));


app.get('/regi', (req, res)=>{
    console.log('I am in registry', req.query);
    res.redirect('http://localhost:5000/');
});

app.listen(5003);
