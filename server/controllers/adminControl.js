const Booking = require("../models/bookingSchema");

const getAllReservations = async (req, res) => {
    const allRes = await Booking.find();
  
    res.send(allRes);
  }
  
  const getReservationById = async (req, res) => {
    const resById = await Booking.findOne({_id: req.params.id});
  
    res.send(resById);
  }
  
  const getAllAvailableTables = async (req, res) => {
    const {date, _id, name, email, time, phonenumber, seats} = req.body;
    // console.log(date, _id, name, email, time, phonenumber, seats);
    let dateToISO = new Date(date);
  
    res.sendStatus(200);
  
    const allRes = await Booking.find();
      
    const resFilteredByDay = allRes.filter(resByDay => resByDay.date.toString() === dateToISO.toString());
    const resFilteredByDayAndTime = resFilteredByDay.filter(resByTime => resByTime.time.toString() === time.toString());
  
    if (resFilteredByDayAndTime.length === 15) {
      console.log("Det finns tyvärr inga bord lediga denna tid.");
      // res.send("Det finns tyvärr inga bord lediga denna tid.")
    }
  
    if (seats > 6 && resFilteredByDayAndTime.length >= 14) {
      console.log("Det finns tyvärr inte tillräckligt med platser denna tid.");
      // res.send("Det finns tyvärr inte tillräckligt med platser denna tid.")
    }
  
    if (seats > 0 && seats <= 6 && resFilteredByDayAndTime.length <= 14) {
      console.log("Ditt bord är bokat, bekräftelse är skickad till " + email);
      // res.send("Ditt bord är bokat, bekräftelse är skickad till " + email);
    }
  
    if (seats > 6 && seats <= 12 && resFilteredByDayAndTime.length <= 13) {
      console.log("Dina bord är bokade, bekräftelse är skickad till " + email);
      // res.send("Dina bord är bokade, bekräftelse är skickad till " + email)
  
      //Måste se till att TVÅ bokningar sker här.
    }
  
    // if (seats === 90) {
    //   console.log("Alla platser är fullbokade");
    // }
  
    // Booking.findByIdAndUpdate({_id: _id}, date, time, seats)
    //   .then(function() {
    //     Booking.findOne({_id: _id})
    //     .then(function(reservation) {
    //       res.send(reservation)
    //     })
    //   })
  }
  
  module.exports = { 
      getAllReservations,
      getAllAvailableTables,
      getReservationById
  }