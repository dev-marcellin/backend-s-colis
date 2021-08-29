const router = require('express').Router();
const infosController = require('../controllers/infos.controller');


//infos sur les gains 
router.get('/admin', infosController.gainAdmin);
router.get('/agence/:id', infosController.gainAgence);
router.get('/branche/:id', infosController.gainBranche);


//infos sur l'historique

router.get('/branche/historique/:id', infosController.histoBranche);

module.exports =  router ;