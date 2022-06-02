const mongoose = require('mongoose')
const generalInfoSchema = new mongoose.Schema({
    businessName:{
        type:String,
        required:true
    },
    IndustrySector:{
        type:String,
        required:true
    },
    CertificateN:{
         type:Number,
         required:true
    }
});

module.exports = mongoose.model('GeneralInfo', generalInfoSchema)