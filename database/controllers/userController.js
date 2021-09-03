const User = require("../models/usersModel")
const asyncHandler = require("express-async-handler")


//getUsers function to get all users
 const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find({})
    res.json(users)
})

//getUserById function to retrieve user by id
 const getUserById  = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)

    //if user id match param id send user else throw error
    if(user){
        res.json(user)
    }else{
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
})


module.exports = {getUsers, getUserById}