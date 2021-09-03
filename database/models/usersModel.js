const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        // required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    passwordHash: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
    },
    lastName:{
        type: String,
    },
    isCreator: {
        type: Boolean,
        // required: true,
        default: false
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User;