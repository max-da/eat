
const Booking = require("../models/bookingSchema");
 const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "send.one.com",
  port: 587,
  secure: false, 
  auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASSWORD
  }
});


 /* Hämtar datum från params som vi använder för att söka på datum instagerar ett objekt som vi ska svara med när vi räknat bokningar  */
 /* Exakt samma uträkning som i frontend, vi delar antalet gäster per bokning på 6 och avrundar uppåt  */
 /* så att vi kan svara med ett objekt som bara innehåller hur många bokade bord som finns för varje tid*/
 /* vid angivet datum */

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


/* Post request. Svarar med statuskod för godkänt/ickegodkänt beroende på om  */
/* schema validering går igenom. */
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
      res.sendStatus(200)
      console.log(booking)

      transporter.sendMail({

        to: email,
        from: "hey@feliciatranberg.se",
        subject: "Bokningsbekräftelse",
        html:` <center><br><br><br>
        <h2>Tack för din bokning på Eat<br></h2>
        <h3>Namn: ${req.body.name} <br>
        Dag: ${req.body.date} <br>
        Tid: ${req.body.time}:00 <br>
        Antal: ${req.body.seats} </h3>
        <p>För att avboka klicka <a href="http://localhost:3000/maildelete/${booking._id}">här</a></p>
        <h4><a href="http://localhost:3000/">www.eat.se</a><br>
        </center>`
        })
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