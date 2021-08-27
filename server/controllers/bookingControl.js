 const Booking = require("../models/bookingSchema");
 
 const getBooking = async (req,res )=> {
 
    //const noPeople = JSON.parse(req.params.noPeople);
  
    let date = new Date(req.params.date)
  
    const bookings = await Booking.find({date:date})
   /*  console.log(date)
    console.log(bookings) */
  return  res.send(bookings)
}

const postBooking = async (req,res )=> {
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


}

const getAllReservations = async (req, res) => {
  const allRes = await Booking.find();

  res.send(allRes);
}

module.exports ={ 
    getBooking,
    postBooking,
    getAllReservations
                    }