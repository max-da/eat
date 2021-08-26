const express = require("express");
const router = express.Router();
const {getBooking, postBooking, getAllReservations, getReservationById} = require("../controllers/bookingControl");

// router.get("/bookings", getBooking);
router.get("/bookings/:date", getBooking)
router.route("/bookings")
    //.get(getBooking)
    .post(postBooking)

//Get reservations for admin
router.get("/bookings", getAllReservations);
router.get("/bookings/:id", getReservationById);

module.exports = router;