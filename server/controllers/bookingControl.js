 const Booking =require("../models/bookingSchema");
 
 const getBooking = async (req,res )=> {
 
    //const noPeople = JSON.parse(req.params.noPeople);
  
    let date = new Date(req.params.date)
  
    const bookings = await Booking.find({date:date})
    console.log(date)
  return  res.send(bookings)
}

const postBooking = async (req,res )=> {
    res.send("hej")
    console.log(req.params)
    const {date,id,name,email,time} = req.body

    const bookings = await Booking.find({time:time})


    console.log(bookings)
}
module.exports ={ 
    getBooking,
    postBooking
                    }