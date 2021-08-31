const express = require("express");
const router = express.Router();
const {getAllReservations, getReservationById, getAvailableTablesAndUpdate} = require("../controllers/adminControl");

//Get reservations for admin
router.get("/admin", getAllReservations);
router.get("/admin/change/:id", getReservationById);

//Edit reservation for admin
router.put("/admin/change", getAvailableTablesAndUpdate);

module.exports = router;