const Booking = require("../models/bookingSchema");

const getAllReservations = async (req, res) => {
    const allRes = await Booking.find();
  
    res.send(allRes);
  }
  
  const getReservationById = async (req, res) => {
    const resById = await Booking.findOne({_id: req.params.id});
  
    res.send(resById);
  }
  
  const getAvailableTablesAndUpdate = async (req, res) => {
    const {date, _id, name, email, time, phonenumber, seats} = req.body;
    // console.log(date, _id, name, email, time, phonenumber, seats);
    let dateToISO = new Date(date);
  
    const reservationsChosenDay = await Booking.find({date: date});
    const resFilteredByTime = reservationsChosenDay.filter(resByTime => resByTime.time.toString() === time.toString());

    let chairsTaken = 0;

    for (let i = 0; i < resFilteredByTime.length; i++) {
        chairsTaken += resFilteredByTime[i].seats;
    }

    let today = new Date();
    let availableTables = 15;
    let tablesTaken = Math.ceil(chairsTaken/6); //number of booked tables chosen day
    let tablesNeeded = Math.ceil(seats/6); //number of tables needed by guest in one reservation
    let requiredNumberOfTables = tablesTaken + tablesNeeded;

    if (seats > 90) {
      return res.json({ message: "Antalet gäster är för många." });
    }

    if (seats < 1) {
      return res.json({ message: "Bokningen måste vara för minst 1 person." });
    }

    if (dateToISO.setHours(0,0,0,0) < today.setHours(0,0,0,0)) {
        return res.json({ message: "Du måste välja ett senare datum." });
    }
  
    if (requiredNumberOfTables > availableTables) {
      return res.json({message: "Det finns tyvärr inga bord lediga denna tid."});
    }

    if (requiredNumberOfTables <= availableTables && seats != 0) {
        Booking.findByIdAndUpdate(_id, {date, time, seats}, {new: true}, function(error, updatedReservation) {
          if (error) {
            console.log(error);
          } else {
            console.log(updatedReservation);
          }
        })

        //!SKICKA MAIL-KOD HÄR!

        return res.json({message: "Bokningen är ändrad, bekräftelse är skickad till: " + email});
    }
  }
  
  module.exports = { 
      getAllReservations,
      getReservationById,
      getAvailableTablesAndUpdate
  }