const mongoose = require('mongoose');

const SwornhousesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
   
  
    house: {
        type: String,
        required: true,
    },
    logo:{
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
   titles: {
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
   
   
    
    religion: {
        type: String,
        required: true,
    },
    weapon: {
        type: String,
        required: true,
    },
   
   
    date: {
        type: Date,
        default: Date.now
    },
   
  
})

module.exports = mongoose.model('swonhouses', SwornhousesSchema)