const asyncHandler = require('express-async-handler')
const User = require('../Models/userModel');
const user = require('../Models/userModel');

const registerUser = async (req, res )=>{
       const { name , email , password, pic }= req.body;
       if(!name || !password || !password ){
        res.status(400);
        throw new Error("Please Enter all the feilds")
       }

       const userExists = await User.findOne({email})

       if(userExists){
        res.status(400);
        throw new Error("User already exists...!")
       }
       const user = await User.create({
        name,
        email,
        password,
        pic
       });

       if(user){
        res.status(201).json({
            _id: user._id,
            name:user.name,
            email: user.email,
            pic:user.pic,
            token:generateToken(user._id)
        })
       }
       else{
        res.status(400)
        throw new Error("User not Found...!!!")
       }


}

module.exports= { registerUser }