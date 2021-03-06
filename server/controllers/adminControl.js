const Booking = require("../models/bookingSchema");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "send.one.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

/* Hämtar alla bokningar från databas och skickar till frontend */
const getAllReservations = async (req, res) => {
  const allRes = await Booking.find();

  res.send(allRes);
};

/* Hämtar bokning från databas, baserat på id från params, och skickar till frontend */
const getReservationById = async (req, res) => {
  const resById = await Booking.findOne({ _id: req.params.id });

  res.send(resById);
};

/* Raderar en bokning från databas och skickar mailbekräftelse via mail */
const deleteReservationById = async (req, res) => {
  const user = await Booking.findOne({ _id: req.params.id });

  transporter.sendMail({
    to: user.email,
    from: "hey@feliciatranberg.se",
    subject: "Avbokningsbekräftelse",
    html: `<center><br><br><br>
    <h2>Vi har nu tagit bort din bokning<br></h2>
    <h3>Välkommen åter!<br></h3>
    <p>För att boka en ny tid klicka <a href="http://localhost:3000/booking">här</a></p>
    <h4><a href="http://localhost:3000/">www.eat.se</a><br>
    </center>`,
  });

  await Booking.deleteOne({ _id: req.params.id });
  const getAll = await Booking.find();

  res.send(getAll);
};

/* Hämtar bokningar baserat på datum användaren väljer samt filtrerar på tid användaren väljer.
Uträkning för antal bord sker, så att vi kan svara med meddelanden ifall bokning blir godkänd
samt göra en put request + skicka mailbekräftelse ifall bokningen blir godkänd. */
const getAvailableTablesAndUpdate = async (req, res) => {
  const { date, _id, name, email, time, phonenumber, seats } = req.body;
  let dateToISO = new Date(date);

  const reservationsChosenDay = await Booking.find({ date: date });
  const resFilteredByTime = reservationsChosenDay.filter(
    (resByTime) => resByTime.time.toString() === time.toString()
  );

  let chairsTaken = 0;

  for (let i = 0; i < resFilteredByTime.length; i++) {
    chairsTaken += resFilteredByTime[i].seats;
  }

  let today = new Date();
  let availableTables = 15;
  let tablesTaken = Math.ceil(chairsTaken / 6); /* Visar antal bokade bord valt datum */
  let tablesNeeded = Math.ceil(seats / 6); /* Visar antal bord användare behöver vid en bokning baserat på antal gäster */
  let requiredNumberOfTables = tablesTaken + tablesNeeded; /* Visar antal bord vald dag och tid, bokade och önskat */

  if (seats > 90) {
    return res.json({ message: "Antalet gäster är för många." });
  }

  if (seats < 1) {
    return res.json({ message: "Bokningen måste vara för minst 1 person." });
  }

  if (dateToISO.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0)) {
    return res.json({ message: "Du måste välja ett senare datum." });
  }

  if (requiredNumberOfTables > availableTables) {
    return res.json({
      message: "Det finns tyvärr inga bord lediga denna tid.",
    });
  }

  if (requiredNumberOfTables <= availableTables && seats != 0) {
    Booking.findByIdAndUpdate(
      _id,
      { date, time, seats },
      { new: true },
      function (error, updatedReservation) {
        if (error) {
          console.log(error);
        } else {
          console.log(updatedReservation);
        }
      }
    );

    transporter.sendMail({
      to: email,
      from: "hey@feliciatranberg.se",
      subject: "Din bokning är nu ändrad",
      html: ` <center><br><br><br>
          <h2>Din nya bokning<br></h2>
          <h3>Namn: ${req.body.name} <br>
          Dag: ${req.body.date} <br>
          Tid: ${req.body.time}:00 <br>
          Antal: ${req.body.seats} </h3>
          <p>För att avboka klicka <a href="http://localhost:3000/maildelete/${_id}">här</a></p>
          <h4><a href="http://localhost:3000/">www.eat.se</a><br>
          </center>`,
    });

    return res.json({
      message: "Bokningen är ändrad, bekräftelse är skickad till: " + email,
    });
  }
};

/* Raderar en bokning från databas via länk i bekräftelsemail */
const deleteReservationByMailLink = async (req, res) => {
  await Booking.deleteOne({ _id: req.params.id });
};

module.exports = {
  getAllReservations,
  getAvailableTablesAndUpdate,
  getReservationById,
  deleteReservationById,
  deleteReservationByMailLink,
};
