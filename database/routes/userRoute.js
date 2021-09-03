const {getUsers,getUserById, createUser} = require("../controllers/userController")
const router = require("express").Router()


// express router method to create route for getting all users
router.route('/').get(getUsers)

// express router method to create route for getting users by id
router.route('/:id').get(getUserById)

// express router methodd to create route for creating an account
router.route('/create').post(createUser)

module.exports = router