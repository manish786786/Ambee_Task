const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('./database/mongoose')

//database schema
const sensorData = require('./database/models/sensorData')

/*
CORS - cross origin resquest security
localhost:3000 = backend
localhost:4200 = frontend
this allow to access our backend from any origin
 */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,Origin,X-Requested-With');
    next();
});


//get one row
//http://localhost:3000/list/20  //get
app.get('/get/:value', (req, res) => {
    sensorData.find({ value: req.params.value })
        .then((list) =>
            res.send({ status: 200, message: 'Submitted successfully', data: list }))
        .catch((error) =>
            console.log(error))
})

app.listen(3002, () => console.log("server is running on port 3002"))