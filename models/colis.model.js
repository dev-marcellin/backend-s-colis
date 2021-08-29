const mongoose = require('mongoose');

const colisSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,

    },
    nombre: {
        type: Number,

    },
    poids: {
        type: Number,
    },
    valeur: {
        type: Number,
    },
    depart: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    prix: {
        type: Number,
        required: true,
    },
    nomExp: {
        type: String,
        required: String,
    },
    telExp: {
        type: String,
    },
    cniExp: {
        type: String
    },
    nomDest: {
        type:String,
        required: true,
    },
    telDest: {
        type: String,
    },
    reference: {
        type: String,
    },
    
    referenceBus: {
        type: String,
    }

},
{timestamps: true}
);

const colisModel = mongoose.model('colis', colisSchema);
module.exports = colisModel;
