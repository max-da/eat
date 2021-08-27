const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    id: String,    
    date:{
        type:Date,
     //   min: Date.now(),
        //Max date+30

    } ,
    time:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    seats:{
        type:Number,
        required:true
    },
   


})

 const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;