 const Booking = require("../models/bookingSchema");
 
 const getBooking = async (req,res )=> {
 
    //const noPeople = JSON.parse(req.params.noPeople);
  
    let date = new Date(req.params.date)
  
    const bookings = await Booking.find({date:date})
<<<<<<< HEAD
    // console.log(date)
    // console.log(bookings)
=======
   /*  console.log(date)
    console.log(bookings) */
>>>>>>> post
  return  res.send(bookings)
}

const postBooking = async (req,res )=> {
<<<<<<< HEAD
    res.send("hej")
    // console.log(req.params)
    const {date,id,name,email,time} = req.body

    const bookings = await Booking.find({time:time})
    // console.log(bookings)
=======
   // res.send("hej")
    console.log(req.params)
    const {date,id,name,email,time, phonenumber,seats} = req.body

    try{
      const booking = await new Booking ({
        date:date,
        name:name,
        email:email,
        time:time,
        phonenumber:phonenumber,
        seats:seats
      }).save()
      console.log(booking)
    }
    catch(err){
      console.log(err)
    }
   
    res.send(200)
   // const bookings = await Booking.find({time:time})


>>>>>>> post
}

const getAllReservations = async (req, res) => {
  const allRes = await Booking.find();

  res.send(allRes);
}

const getReservationById = async (req, res) => {
  const resById = await Booking.findOne({_id: req.params.id});

  res.send(resById);
}

module.exports = { 
    getBooking,
    postBooking,
    getAllReservations,
    getReservationById
}