const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({

    operation: {
        type: String,
        required: true
    },
    idColis: {
        type: String,
        required: true
    }
},
 {timestamps: true}
)

const ticketModel = mongoose.model('ticket', ticketSchema);
module.exports = ticketModel; 