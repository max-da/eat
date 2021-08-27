const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  /*   id: {
        type:String,
        required:true
    },    */
    date:{
        type:Date,
        required:true
       // min: Date.now(),
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