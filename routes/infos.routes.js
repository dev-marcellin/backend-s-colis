const router = require('express').Router();
const infosController = require('../controllers/infos.controller');


//infos sur les gains 
router.get('/admin', infosController.gainAdmin);
router.get('/agence/:id', infosController.gainAgence);
router.get('/branche/:id', infosController.gainBranche);


//infos sur l'historique simple

router.get('/branche/historique/:id', infosController.histoBranche);

//infos sur l'historique avec filtre 
router.post('/branche/historiquefiltre/:id', infosController.historique);

//historique agence simple 
router.get('/agence/historique/:id', infosController.historiqueAgence);

module.exports =  router ;