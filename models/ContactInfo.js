const mongoose = require('mongoose')
const contactInfoSchema = new mongoose.Schema({
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
        }
    
});

module.exports = mongoose.model('ContactInfo', contactInfoSchema)