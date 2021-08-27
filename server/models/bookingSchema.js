const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    id: String,    
    date:{
        type:Date,
     //   min: Date.now(),
        //Max date+30

    } ,
    time:Number,
    name:String,
    email:String,
    phonenumber:Number,
    noguests:Number,
   


})

 const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;