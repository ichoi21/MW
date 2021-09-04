const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // userName: {
    //     type: String,
    //     // required: true,
    //     unique:true
    // },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Enter a valid email"],
    },
    passwordHash: {
        type: String,
        required: true
    },
    // firstName: {
    //     type: String,
    // },
    // lastName:{
    //     type: String,
    // },
    // isCreator: {
    //     type: Boolean,
    //     // required: true,
    //     default: false
    // },
})

const User = mongoose.model('user', userSchema)

module.exports = User;