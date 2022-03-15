const catchAsyncError = require('../middleware/catchAsyncError');
const User=require('../Models/userModel')
exports.authenticateUser=catchAsyncError(async(req,res,next)=>{
    const {name,email,picture}=req.body
    console.log(req.body);
    let user=await User.findOne({email})
    if(!user){
        user=await User.create({name,email,picture})
    }
    // console.log(req.user);zyy
    res.json({success:true,user})
})