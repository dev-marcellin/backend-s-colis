const router = require('express').Router();
const colisController = require('../controllers/colis.controller');

//enregistrer un colis
router.post('/register/:id', colisController.register);
//modifier l'etat d'un colis
router.put('/etat', colisController.setEtat);

router.post('/historique', colisController.historique);

router.post('/validation', colisController.validation);

router.post('/count', colisController.count);



module.exports = router;