const express = require("express");
const router = express.Router();
const {getBooking, postBooking} = require("../controllers/bookingControl");

//router.get("/bookings", getBooking);
router.get("/bookings/:date", getBooking)
router.route("/bookings")
    //.get(getBooking)
    .post(postBooking)

module.exports = router;