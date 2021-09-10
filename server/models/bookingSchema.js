const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  time: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  seats: {
    type: Number,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
