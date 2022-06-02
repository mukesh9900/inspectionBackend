const mongoose = require('mongoose')
const inspectionSchema = new mongoose.Schema({
    businessName:{
        type:String,
        required:true
    },
    industrySector:{
        type:String,
        required:true
    },
    certificateN:{
         type:Number,
         required:true
    },
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    zipcode:{
         type:Number,
         required:true
    },
     phNumber:{
            type:Number,
            required:true
        },
    
    inspectionId:{
            type:String,
            required:true
        },
    inspectionDate:{
            type:Date,
        },
    inspectionResult:{
             type:String,
             required:true
        }
});

module.exports = mongoose.model('Inspection', inspectionSchema)