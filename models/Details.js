const mongoose = require('mongoose');

const Details_Noblehouses_Schema = mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    background :{
        type: String,
        required: true,
    },
  
    house: {
        type: String,
        required: true,
    },
  
   sigil:{
    type: String,
    required: true,
   },
   words:{
    type: String,
    required:true,
   },
   seat:{
    type: String,
    required:true,
   },
   region:{
    type: String,
    required:true,
   },
    lord: {
        type: String,
        required:true,
    },
   
   
    swornto: {
        type: String,
        required:true,
    },
   
    titles: {
        type: String,
        required:true,
    },
    
    religion: {
        type: String,
        required: true,
    },
    weapon: {
        type: String,
        required: true,
    },
    founder: {
        type: String,
        required: true,
    },
   
    date: {
        type: Date,
        default: Date.now
    },
    place:{
        type: String,
        required: true,
    },
  
})

module.exports = mongoose.model('details_nobelhouses', Details_Noblehouses_Schema)