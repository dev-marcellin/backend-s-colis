const router = require('express').Router();

const suivreController = require('../controllers/suivre.controller');

router.post('/', suivreController.suivre);



module.exports = router; 