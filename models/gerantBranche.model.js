const mongoose = require('mongoose');

const brancheSchema = new mongoose.Schema({

    nomBranche: {
        type: String,
        required: true,
    },
    localisation: {
        type: String,
    },
    reference: {
        type: String,
        required: true,
    },
    idGerant: {
        type: String,
    },
    idColis: {
        type: [String]
    }
},
{timestamps : true,}
)

const brancheModel = mongoose.model('gerantBranche', brancheSchema);
module.exports = brancheModel;