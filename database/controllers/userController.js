const User = require("../models/usersModel")
const asyncHandler = require("express-async-handler")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
const createUser = asyncHandler(async(req, res) => {
    try{
        const {email, password, passwordVerify} = req.body;

        // validation
        if (!email || !password || !passwordVerify) 
        return res
            .status(400)
            .json({errorMessage: "Please enter all required fields."});

        if (password.length < 6)
        return res.status(400).json({
            errorMessage: "Please enter a password of at least 6  characters."
        });

        if (password !== passwordVerify)
        return res.status(400).json({
            errorMessage: "Please enter the same password twice."
        })

        const existingUser = await User.findOne({email});
        if (existingUser)
            return res.status(400).json({
                errorMessage: "An account with this email already exists."
            })

        
        // hash password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        // save a new user to DB
        const newUser = new User({
            email, passwordHash
        });

        const savedUser = await newUser.save();

        // sign token
        const token = jwt.sign({
            user: savedUser._id,
        },
        process.env.JWT_SECRET
        );

        // send the token to in a HTTP-only token
        res.cookie("token", token, {
            httpOnly: true,
        })
        .send();

    } catch (err) {
        console.log(err); 
        res.status(500).send();
    }
})

module.exports = {getUsers, getUserById, createUser}