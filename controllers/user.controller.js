const userModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUser = async (req, res)=>{
    const users = await userModel.find().select();
    res.status(200).json(users);
}


module.exports.signUpAdmin = async (req, res)=>{
    const {nom, prenom, login, email, role, mdp}= req.body
    
        try{
            const user = await userModel.create({nom, prenom,login, email, role, mdp});
            
    
            res.status(201).json({user: user._id});
        }catch(err){
            res.status(200).send({err})
            console.log(err);
        }
    }
