const mongoose = require('mongoose');

const TriviaSchema = mongoose.Schema({
    
    des: {
        type: String,
        required: true,
    },
    house: {
        type: String,
        required: true,
    },
   
    date: {
        type: Date,
        default: Date.now
    },
    title:{
        type: String,
        required: true,
    },
   
})

module.exports = mongoose.model('Trivias', TriviaSchema)