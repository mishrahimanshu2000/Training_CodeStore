const express = require("express");
const router = express.Router();
const upload = require('../middleware/multer')

const {showResults, postResult, deleteResult } = require('../controller/controller')

router.get('/showresult', showResults);
// router.post('/upload', upload.single('photo'));

router.post('/postresult', upload.single('photo'), postResult);

router.delete('/deleteresult/:id', deleteResult );


module.exports = router;