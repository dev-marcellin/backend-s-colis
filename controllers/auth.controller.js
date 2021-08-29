const { findById } = require('../models/user.model');
const userModel = require('../models/user.model');
const gerantModel = require('../models/gerantAgence.model');
const brancheModel = require('../models/gerantBranche.model');
const jwt = require('jsonwebtoken');

const maxAge = 3*24*60*60*1000;
const createToken = (id)=>{
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
};

module.exports.signUpAgence = async (req, res)=>{
const {nom, prenom, login, email, role, mdp, nomAgence, siege,reference }= req.body

    try{
        const user = await userModel.create({nom, prenom,login, email, role, mdp});
        const gerant = await gerantModel.create({nomAgence, siege, reference: user._id });

        res.status(201).json({user: user._id, gerant: gerant._id});
    }catch(err){
        res.status(200).send({err})
        console.log(err);
    }
}

module.exports.signUpBranche = async (req, res)=>{
    const {nom, prenom, login, email, role, mdp, nomBranche, localisation,reference}= req.body

    try {
        const user = await userModel.create({nom, prenom,login, email, role, mdp});
        const branche = await brancheModel.create({nomBranche, localisation, reference: user._id,});

//ici on met l'id de la branche dans le gerant qui créé la branche

await gerantModel.findByIdAndUpdate(
    req.params.id,
   {
       $addToSet: {
           idBranche: branche._id
       }
   },
   {new: true, upsert: true},
   //(err,docs)=>{
    //   if(!err) res.status(200).json({ colis: colis._id, etat: etat._id });
     //  else  return res.status(400).json(err) ;

  // } 
   )


        res.status(201).json({user: user._id, branche: branche._id});
    }catch(err){
        res.status(200).send({err})
        console.log(err);
    }
}


module.exports.signIn = async (req, res)=>{

    const {login, mdp} = req.body 
    
    try {
        const user = await userModel.login(login, mdp);
       
        let role='';
        let status = '';
        if(user.role == "agence"){
             role = await gerantModel.findOne({reference: user._id}, '_id').exec();
             status = 'agence';
        }else if(user.role == "branche"){
            role = await brancheModel.findOne({reference: user._id}, '_id').exec();
            status= 'branche';
        }else if(user.role == "admin"){
            role = user;
            
            status= 'admin';
        }
        

       //console.log("role de sorti "+role.id);
        const token = createToken(role.id);
        res.cookie('jwt', token, {httpOnly: true, maxAge});

        res.status(200).json({user: role._id, status: status})
    }catch(err) {
        res.status(200).json(err);
    }

    
}


module.exports.logOut = async (req, res)=>{
        res.cookie('jwt', '', {maxAge: 1});
        res.redirect('/');
}


module.exports.getAll = async (req, res)=>{
    
    try{
        const users = await userModel.find().select() ;
        res.status(200).json(users);
    }catch(err){
        console.log(err); 
    }

}