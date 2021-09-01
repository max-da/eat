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

 

   // console.log(resObject)


  return  res.send(resObject)
}

const postBooking = async (req,res )=> {

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
   
      res.send(200)
    }
    catch(err){
      console.log(err)
     
      return res.status(400).send({
        message:"Uppgifter saknas, vänligen fyll i samtliga fält."
      })
   
    }
   
 



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