const express = require("express");
const router = express.Router();
const { showDetails, bookTable, confirmBooking, deleteBooking } = require("../controller/controller");



router.get("/showDetails/:userName?", (req, res)=>{showDetails(req, res, req.params.userName)});

router.get('/book/:date?/:time?', (req, res) => {bookTable(req, res, req.params.date, req.params.time)})

router.post("/deleteBooking/:booking?", (req, res) => {deleteBooking(req, res, req.params.booking)});

router.post("/book/:entry?", async (req, res) => {confirmBooking(req, res, req.params.entry)})

module.exports = router;