const mongoose = require('mongoose');

const Friends_Foes_Schema = mongoose.Schema({
    houses_logo_of_type: {
        type: String,
        required: true,
    },
    type :{
        type: String,
        required: true,
    },
  
    house: {
        type: String,
        required: true,
    },
  
    des:{
    type: String,
    required: true,
   },
  
    date: {
        type: Date,
        default: Date.now
    },
   
  
})

module.exports = mongoose.model('Friends_Foes', Friends_Foes_Schema)