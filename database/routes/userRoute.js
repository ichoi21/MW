const {getUsers,getUserById, createUser, logInUser, logOutUser} = require("../controllers/userController")
const router = require("express").Router()

// exporess router method to create route for logging user out
router.get('/logout', logOutUser)

// express router method to create route for getting all users
router.route('/').get(getUsers)

// express router method to create route for getting users by id
router.route('/:id').get(getUserById)

// express router method to create route for creating an account
router.route('/create').post(createUser)

// exporess router method to create route for logging user in
router.route('/login').post(logInUser)



module.exports = router