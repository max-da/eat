const express = require("express");
const router = express.Router();

const {getAllReservations, getAvailableTablesAndUpdate, getReservationById, deleteReservationById} = require("../controllers/adminControl");

//Get reservations for admin
router.get("/admin", getAllReservations);
router.get("/admin/change/:id", getReservationById);

//Edit reservation for admin
router.put("/admin/change", getAvailableTablesAndUpdate);

//Delete reservation for admin
router.delete("/admin/delete/:id", deleteReservationById);
// router.post("/admin/delete/:id", deleteReservationById);

   

module.exports = router;