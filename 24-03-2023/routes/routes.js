const router = require('express').Router();
const { getUsers } = require('../controller/controller');
const { paginate } = require('../middleware/paginate');


router.get('/', paginate(), getUsers);

module.exports = router;