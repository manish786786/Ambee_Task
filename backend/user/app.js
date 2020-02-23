const express = require('express');
const app = express();
app.use(express.json())
const mongoose = require('./database/mongoose')

//database schema
const CustomerData = require('./database/models/userData')

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


//create
//http://localhost:3000/create  // post
app.post('/create', (req, res) => {
    CustomerData.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                });
            } else {
                (new CustomerData({ "customerName": req.body.name, "emailId": req.body.email }))
                    .save()
                    .then((list) =>
                        res.send({ status: 200, message: 'User created' }))
                    .catch((error) =>
                        console.log(error))
            }
        })

})

app.listen(3000, () => console.log("server is running on port 3000"))