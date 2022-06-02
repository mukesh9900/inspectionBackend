const mongoose = require('mongoose')
const inspectionRemarksSchema = new mongoose.Schema({
    inspectionId:{
        type:String,
        required:true
    },
    inspectionDate:{
        type:Date,
        required:true
    },
    inspectionResult:{
         type:Number,
         required:true
    }
});

module.exports = mongoose.model('GeneralInfo', inspectionRemarksSchema)