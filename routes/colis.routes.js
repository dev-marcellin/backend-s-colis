const router = require('express').Router();
const colisController = require('../controllers/colis.controller');


router.post('/register/:id', colisController.register);
router.put('/etat', colisController.setEtat);
router.post('/historique', colisController.historique);

router.post('/validation', colisController.validation);



module.exports = router;