const router = require('express').Router();
const busController = require('../controllers/bus.controller');


router.post('/register/:id', busController.register);


module.exports = router;