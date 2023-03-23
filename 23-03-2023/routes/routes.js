const express = require('express');
const router = express.Router();
const { createUser, loginUser, changePassword } = require('../controller/usercontroller');


router.post('/register', createUser);

router.post('/login', loginUser)

router.post('/changepassword', changePassword)


module.exports = router;