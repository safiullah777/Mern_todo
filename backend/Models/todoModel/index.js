const mongoose=require('mongoose');
const todoSchema =new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter your todo title"],
        minlength:[3,"title should be atleast of length 3"]
    },
    description:{
        type:String,
        default:""
    },
    userEmail:{
        type:String,
    },
    status:{
        type:String,
        default:'pending'
    },
    todoDate:{
        type:Date,
        default:Date.now()
        
    }
},
{timestamps:true}
)
module.exports=mongoose.model("Todo",todoSchema);
