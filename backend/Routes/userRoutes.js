const express =  require('express');
const { registerUser } = require('../Controllers/userControllers');

const router = express.Router()

router.get('/').post(registerUser)
//router.get('/login',authUser)

module.exports=router;
