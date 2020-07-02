const mongoose = require('mongoose');

const Whitewalker_Schema = mongoose.Schema({
    whitewalker: {
        type: String,
        required: true,
    },
    location :{
        type: String,
        required: true,
    },
  
    ruler: {
        type: String,
        required: true,
    },
  
    lan:{
    type: String,
    required: true,
   },
   disfea:{
    type: String,
    required:true,
   },
   origin:{
    type: String,
    required:true,
   },
   status:{
    type: String,
    required:true,
   },
   des: {
        type: String,
        required:true,
    },
   
   
    power: {
        type: String,
        required:true,
    },
   
    weak: {
        type: String,
        required:true,
    },
    
    Alias: {
        type: String,
        required: true,
    },
    history: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
   
    date: {
        type: Date,
        default: Date.now
    },
   
  
})

module.exports = mongoose.model('whitewalkers', Whitewalker_Schema)