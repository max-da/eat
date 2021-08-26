 const Booking = require("../models/bookingSchema");
 
 const getBooking = async (req,res )=> {
 
    //const noPeople = JSON.parse(req.params.noPeople);
  
    let date = new Date(req.params.date)
  
    const bookings = await Booking.find({date:date})
    // console.log(date)
    // console.log(bookings)
  return  res.send(bookings)
}

const postBooking = async (req,res )=> {
    res.send("hej")
    // console.log(req.params)
    const {date,id,name,email,time} = req.body

    const bookings = await Booking.find({time:time})


    // console.log(bookings)
}

const getAllReservations = async (req, res) => {
  const allRes = await Booking.find(); //refaktorera? in i getBooking?

  res.send(allRes);
}

const getReservationById = async (req, res) => {
  console.log(req.params);
  // const resById = await Booking.findOne(id från param i frontend-url);

  // res.send(resById);
}

module.exports = { 
    getBooking,
    postBooking,
    getAllReservations,
    getReservationById
}