import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName:{
        type: String,
    },
    userName: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    isCreator: {
        type: Boolean,
        required: true,
        default: false
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User