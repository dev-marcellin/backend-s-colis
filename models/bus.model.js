const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({

    immatriculation: {
        type: String,
        required: true,
        unique: true
    },
    commentaire: {
        type: String
    }

},
    {timestamps: true}
)

const busModel = mongoose.model('bus', busSchema);
module.exports = busModel ; 