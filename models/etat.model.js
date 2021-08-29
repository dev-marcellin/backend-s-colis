const mongoose = require('mongoose');

const etatSchema = new mongoose.Schema({

    etat: {
        type: [Date],
    },
    idColis: {
        type: String,
    }
},
{timestamps: true}
);

const etatModel = mongoose.model('etat', etatSchema);
module.exports = etatModel;