const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const Portfolio = require('./models/portfolio');

const setDetails = require('./controllers/setDetails');
const getDetails = require('./controllers/getDetails');

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

mongoose.connect('mongodb+srv://Rudresh:' +
 process.env.MONGO_PASS + 
 '@profiler-nwgfr.mongodb.net/test?retryWrites=true&w=majority',
 { useUnifiedTopology: true, useNewUrlParser: true }
 );

app.post('/setDetails', setDetails);

app.get('/getDetails', getDetails);

//404 page pending

const port = 9000;

app.listen(port, () => console.log(`Server started on ${port}`));