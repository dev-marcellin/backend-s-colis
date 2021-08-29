const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(

    {
        nom: {
            type:String,
            required: true,
            minLength: 3,
            
        },
        prenom: {
            type: String,
            minLength: 3,
        },
        login: {
            type: String,
            unique: true,
            minLength: 3, 
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
            trim: true,
        },
        mdp: {
            type: String,
            required: true,
            max: 1024
        }
    },
    {
        timestamps: true,
    }
);
//play function before save 

userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt();
    this.mdp = await bcrypt.hash(this.mdp,salt);
    next();
} );

userSchema.statics.login = async function(login, mdp){
    const user = await this.findOne({login});
    

    if(user){
        console.log("entré dans if user");
        const auth = await bcrypt.compare(mdp, user.mdp);
        
        if(auth){
            return user;
        } throw Error ('incorrect password');
    }
    throw  Error('incorrect login')
};

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;