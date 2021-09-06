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

const getAllReservations = async (req, res) => {
    const allRes = await Booking.find();
  
    res.send(allRes);
  }
  
  const getReservationById = async (req, res) => {
    const resById = await Booking.findOne({_id: req.params.id});
  
    res.send(resById);
  }

  const deleteReservationById = async (req, res) => {
  const user = await Booking.findOne({_id: req.params.id});
 
  transporter.sendMail({

    to: user.email,
    from: "hey@feliciatranberg.se",
    subject: "subject",
    html:`<h3>"ksadlksa</h3>
    <p>"sdasd"</p>`
    })
  
    await Booking.deleteOne({_id: req.params.id});
    const getAll = await Booking.find();
    
    res.send(getAll);
  }

  const getAvailableTablesAndUpdate = async (req, res) => {
    const {date, _id, name, email, time, phonenumber, seats} = req.body;
    console.log(date, _id, name, email, time, phonenumber, seats);
    let dateToISO = new Date(date);
  
    const allRes = await Booking.find();
    const resFilteredByDay = allRes.filter(resByDay => resByDay.date.toString() === dateToISO.toString());
    const resFilteredByDayAndTime = resFilteredByDay.filter(resByTime => resByTime.time.toString() === time.toString());

    let chairsTaken = 0;

    for (let i = 0; i < resFilteredByDayAndTime.length; i++) {
        chairsTaken += resFilteredByDayAndTime[i].seats;
    }

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

    // if (date < Date.now()) { //!funkar _typ_
    //     console.log("Du måste välja ett senare datum.");
    //     return res.json({ message: "Du måste välja ett senare datum." });
    // }
  
    if (requiredNumberOfTables > availableTables) {
      return res.json({message: "Det finns tyvärr inga bord lediga denna tid."});
    }

    if (requiredNumberOfTables <= availableTables && seats != 0) {
        Booking.findByIdAndUpdate(_id, {date, time, seats}, {new: true}, function(error, updatedReservation) {
          if (err) {
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
      getAvailableTablesAndUpdate,
      getReservationById,
      deleteReservationById,
  }