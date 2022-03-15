const mongoose=require('mongoose');
const userSchema =new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    picture:{
        type:String,
    }
})
module.exports=mongoose.model("User",userSchema);
