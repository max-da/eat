const express = require("express");
const router = express.Router();

const {getAllReservations, getAvailableTablesAndUpdate, getReservationById, deleteReservationById, deleteReservationByMailLink} = require("../controllers/adminControl");

//Get reservations for admin
router.get("/admin", getAllReservations);
router.get("/admin/change/:id", getReservationById);

//Edit reservation for admin
router.put("/admin/change", getAvailableTablesAndUpdate);

//Delete reservation for admin
router.delete("/admin/delete/:id", deleteReservationById);

//Mail
router.delete("/maildelete/:id", deleteReservationByMailLink)
router.get("/maildelete/:id", getReservationById)




module.exports = router;