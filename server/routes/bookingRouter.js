const express = require("express");
const router = express.Router();
const {getBooking, postBooking, getAllReservations, getReservationById} = require("../controllers/bookingControl");

router.get("/bookings", getBooking);
router.get("/bookings/:date", getBooking)
router.route("/bookings")
    //.get(getBooking)
    .post(postBooking)

//Get reservations for admin
router.get("/admin", getAllReservations);
router.get("/admin/change/:id", getReservationById);
//router.get("/bookingid/:id",getReservationById)

module.exports = router;