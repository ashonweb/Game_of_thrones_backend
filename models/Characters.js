const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
  
    house: {
        type: String,
        required: true,
    },
    realname: {
        type: String,
        required:true,
    },
    alias: {
        type: String,
        required: true,
    },
    children: {
        type: String,
        required: true,
    },
    culture: {
        type: String,
        required:true,
    },
    death: {
        type: String,
        required: true,
    },
    father: {
        type: String,
        required: true,
    },
    firstseen: {
        type: String,
        required:true,
    },
    lastseen: {
        type: String,
        required: true,
    },
    mother: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required:true,
    },
    siblings: {
        type: String,
        required: true,
    },
    spouse: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    titles: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required: true,
    },
    religin: {
        type: String,
        required: true,
    },
   
    date: {
        type: Date,
        default: Date.now
    },
    characters:{
        type: String,
        required: true,
    },
  
})

module.exports = mongoose.model('Characters', CharacterSchema)