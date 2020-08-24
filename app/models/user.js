const mongoose = require('mongoose');
// const Post = require('./post');
const catSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    admin : {
        type:Boolean,
        default:false
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String
    }
}, {timestamps: true});

module.exports = mongoose.model('Category', catSchema);