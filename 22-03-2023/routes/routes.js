const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer')

const {showResults, postResult} = require('../controller/controller')

router.get('/showresult', showResults);
// router.post('/upload', upload.single('photo'));

router.post('/postresult', upload.single('photo'), postResult);


module.exports = router;