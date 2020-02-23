const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    customerName : {
        type: String,
        trim: true
    },
    emailId : {
        type: String,
        trim: true
    }
});

const CustomerData = mongoose.model('customerData', CustomerSchema)

module.exports = CustomerData;