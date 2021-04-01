const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
var port = process.env.port;
var host = process.env.host;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


// making connection with mongo data

var url = "mongodb://localhost:27017/testApi";

mongoose.connect(url, {useUnifiedTopology:true, useNewUrlParser:true});

var db = mongoose.connection;
db.once('open', (req, res)=>
{
    console.log('Connection Has been established');
});

const dataController = require('./controller/controllerData');
app.use('/api', dataController);




// listening on the port
app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});