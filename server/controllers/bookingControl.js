 const { parse } = require("dotenv");
const { isValidObjectId } = require("mongoose");
const Booking = require("../models/bookingSchema");
 
 const getBooking = async (req,res )=> {
 

    let date = new Date(req.params.date)
    let resObject= {
      time18:0,
  
      time21:0,
     
    }
   
    const bookings = await Booking.find({date:date})
   
    for(let i = 0; i < bookings.length; i++){
      if(bookings[i].time === 18){
   
       
        resObject.time18 += Math.ceil(bookings[i].seats/6)
      
      }
      else{
        resObject.time21 += Math.ceil(bookings[i].seats/6)
             
      }

    }

 


  return  res.send(resObject)
}

const postBooking = async (req,res )=> {

    const {date,name,id,email,time, phonenumber,seats} = req.body
 

    try{
      const booking = await new Booking ({
        _id: id,
        date:date,
        name:name,
        email:email,
        time:time,
        phonenumber:phonenumber,
        seats:seats
      },{runValidators:true}).save()
      res.send(200)
      console.log(booking)
    }
    catch(err){
      console.log(err)
     
      return res.status(400).send({
        message:"Uppgifter saknas, eller är inte ifyllda korrekt, vänligen dubbelkolla formuläret."
      })
   
    }
  
   
 



}

module.exports = { 
    getBooking,
    postBooking
}