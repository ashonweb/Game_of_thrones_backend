const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    description: {
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
    logo:{
        type: String,
        required: true,
    },
    q :{
        type: Array, "default" : []
    },
    qa: {
        type: Array, "default" : []
    }
})

module.exports = mongoose.model('Posts', PostSchema)