const mongoose = require('mongoose');

const gerantSchema = new mongoose.Schema({

    nomAgence: {
        type: String,
        required: true
    },
    siege: {
        type: String,

    },
    reference: {
        type: String,
        required: true
    },
    idBus: {
        type: [String]
    },
    idBranche: {
        type: [String]
    }
},
{
    timestamps: true,
}

)

const gerantModel = mongoose.model('gerantAgence', gerantSchema);
module.exports = gerantModel;