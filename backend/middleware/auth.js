const catchAsyncError = require('./catchAsyncError');
const jsonwebtoken=require('jsonwebtoken')
const User=require('../Models/userModel')
exports.auth=catchAsyncError(async(req,res,next)=>{
    // if(!req.user){
    //     req.user=req.body.user
    // }
    // const {email}=req.body.user
    // const user=await User.findOne({email})
    // if(!user){
    //     return next(new ErrorHandler('please login to access',401))
    // }
    // req.user=user
    // next()
    res.send('djdj')
})

