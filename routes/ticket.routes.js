const router = require('express').Router();
const ticketController = require('../controllers/ticket.controller');


router.get('/print', ticketController.print);

//router.get('/qr',ticketController.qr);

module.exports = router;