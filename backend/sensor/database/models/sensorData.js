const mongoose = require('mongoose')

const sensorSchema = new mongoose.Schema({
    AQI : {
        type: String,
        trim: true,
      
    },
    AQICategory : {
        type: String,
        trim: true,
       
    },
    sensitiveGroup : {
        type: String,
        trim: true,
       
    },
    healthEffectsStatements : {
        type: String,
        trim: true,
       
    },
    cautionaryStatements : {
        type: String,
        trim: true,
       
    },
    value : {
        type: String,
        trim: true,
    }
});

const sensorData = mongoose.model('sensorData', sensorSchema)

module.exports = sensorData;