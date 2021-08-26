const express = require("express");
const router = express.Router();
const {getBooking, postBooking, getAllReservations} = require("../controllers/bookingControl");

// router.get("/bookings", getBooking);
router.get("/bookings/:date", getBooking)
router.route("/bookings")
    //.get(getBooking)
    .post(postBooking)

router.get("/admin", getAllReservations);

module.exports = router;