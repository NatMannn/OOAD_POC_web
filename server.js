const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CoinRouter = require('./routes/CoinRouter');


mongoose.Proise = global.Promise;
mongoose.connect('mongodb://localhost/expressdemo');



app.listen(port, function(){
    console.log('Node js Express js Tutorial');
});

app.use(express.static('pubilc'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.sendFile(path,join(__dirname, 'public', 'index.html'));
});

app.use('/coins', CoinRouter);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

















