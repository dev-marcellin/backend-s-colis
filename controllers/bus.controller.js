const busModel = require('../models/bus.model');
const gerantModel = require('../models/gerantAgence.model');


module.exports.register = async (req, res)=>{

    const {immatriculation, commentaire} = req.body 
    try{
        //a ce niveau on créé un bus
        const bus = await busModel.create({immatriculation, commentaire});

        //res.status(201).json({bus: bus._id})
        //ici on recherche le gerant qui créé le bus grace a son id fourni dans l'url et on lui ajoute l'id du bus créé
            await gerantModel.findByIdAndUpdate(
                req.params.id,
               {
                   $addToSet: {
                       idBus: bus._id
                   }
               },
               {new: true, upsert: true},
               (err,docs)=>{
                   if(!err) res.status(200).json({bus: bus._id});
                   else  return res.status(400).json(err); 
                       
               }
           )
      


    }catch(err){
        res.status(400).send({err})
        console.log(err);
    }
}