const colisModel = require("../models/colis.model");
const { find } = require("../models/gerantAgence.model");
const gerantModel = require("../models/gerantAgence.model");
const brancheModel = require("../models/gerantBranche.model");





module.exports.gainAdmin = async (req, res)=>{


    try {

        let  som=0;
        const gain = await colisModel.find().select().exec();
       // res.status(200).json(gain);
        for(i=0; i<gain.length; i++){
                som+=gain[i].prix;
           // console.log(gain[i].prix);
        }
        res.status(200).json(som);
       

    } catch (error) {
        console.log(error);
    }
}
//on recherche le gain de toute l'agence, on reherche d'abord le tableau regroupant toute les branche dans le gérant ensuite dans 
//chaque branche on parcours aussi le tableau contenant les id des colis enregistré et a chaque fois on récupere le prix et on somme
module.exports.gainAgence = async (req, res)=>{
   let som=0;
    try {
        const agence = await gerantModel.findById(req.params.id);
        
        for(i=0; i<agence.idBranche.length; i++){
            const branche = await brancheModel.findById(agence.idBranche[i]);
            

            for(j=0; j<branche.idColis.length; j++){
               
                    let colis =await  colisModel.findById(branche.idColis[j]);
                console.log('prix '+colis.prix);
                som+=colis.prix;
                
            }
        }
       res.status(200).json(som);  
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports.gainBranche = async (req, res)=>{
    let som=0;

    try {
        const branche = await brancheModel.findById(req.params.id) ;

        for(i=0; i<branche.idColis.length; i++){
            const colis = await colisModel.findById(branche.idColis[i]);
            som+=colis.prix ;
        }
        res.status(200).json(som);

    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports.histoBranche = async (req, res) => {

    try {
        const colis = await colisModel.find({reference: req.params.id}).select().exec()
        res.status(200).json(colis)
    } catch (error) {
        res.status(200).json(error)
    }
}