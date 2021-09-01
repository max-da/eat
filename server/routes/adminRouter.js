const express = require("express");
const router = express.Router();
const {getAllReservations, getAllAvailableTables, getReservationById, deleteReservationById} = require("../controllers/adminControl");

//Get reservations for admin
router.get("/admin", getAllReservations);
router.get("/admin/change/:id", getReservationById);

//Edit reservation for admin
router.put("/admin/change", getAllAvailableTables);

// Delete reservation for admin
router.delete("/admin/delete/:id", deleteReservationById);

module.exports = router;