const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();



// Login route
// 1. Validate request body using loginValidation middleware
// 2. If valid, call login controller to authenticate user
router.post('/login', loginValidation, login);

// Signup route
// 1. Validate request body using signupValidation middleware
// 2. If valid, call signup controller to register new user

router.post('/signup', signupValidation, signup);

module.exports = router;