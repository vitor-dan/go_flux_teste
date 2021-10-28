const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://localhost:27017/gofluxDB", {useNewUrlParser: true});


//ROUTES
const embarcadorRoute = require('./routes/Embarcador');


app.use(express.json());
app.use('/embarcador', embarcadorRoute);


app.listen(3000);