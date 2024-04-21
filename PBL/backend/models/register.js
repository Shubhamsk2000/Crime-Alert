const mongoose = require('mongoose');

const userNameScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAuth:{
        type:Boolean,
        required:false,
        default:false,
    }
})

const Register = new mongoose.model("Nihal_UserName", userNameScheme);
module.exports = Register;



