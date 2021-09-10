const express = require("express");
const router = express.Router();

const {getAllReservations, getAvailableTablesAndUpdate, getReservationById, deleteReservationById, deleteReservationByMailLink} = require("../controllers/adminControl");

router.get("/admin", getAllReservations);
router.get("/admin/change/:id", getReservationById);

router.put("/admin/change", getAvailableTablesAndUpdate);

router.delete("/admin/delete/:id", deleteReservationById);

router.delete("/maildelete/:id", deleteReservationByMailLink)
router.get("/maildelete/:id", getReservationById)


module.exports = router;