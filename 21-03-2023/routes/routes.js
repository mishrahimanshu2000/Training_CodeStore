const express = require("express");
const router = express.Router();
const mysqlConnection = require('../app')

console.log(mysqlConnection);

const { showDetails, bookTable, confirmBooking, deleteBooking } = require("../controller/controller");



router.get("/showDetails/:userName?", showDetails);

router.get('/book/:date?/:time?', bookTable)

router.delete("/deleteBooking/:booking?", deleteBooking);

router.post("/book/:entry?", confirmBooking)

module.exports = router;