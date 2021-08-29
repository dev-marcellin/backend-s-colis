const colisModel = require("../models/colis.model");
const etatModel = require("../models/etat.model");
const ObjectID = require('mongoose').Types.ObjectId;


module.exports.suivre = async (req, res)=>{

    try{

        const suivi = await colisModel.findOne({code: req.body.code} ,'description').exec();
        console.log('voici id '+suivi);

        if(!suivi)
            return res.status(200).send('code de suivi incorect ')

            const etat = await etatModel.findOne({idColis: suivi._id}, 'etat').exec();

        res.status(200).json({etat, suivi});
        
    }catch(err){
        res.status(400).json(err+'');
        console.log(err);
    }
}