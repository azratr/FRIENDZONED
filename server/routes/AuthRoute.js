const express = require('express')
const { registerUser } = require('../controllers/AuthController')
const { loginUser} = require('../controllers/AuthController')

const router = express.Router()

router.post('/register',registerUser)
router.post('/login', loginUser)
module.exports= router