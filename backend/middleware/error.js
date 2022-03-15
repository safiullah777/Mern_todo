const ErrorHandler=require('../utils/errorHandler')
module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.message=err.message || "internal server error"

// wrong mongodb error
if(err.name=="CastError"){
    const message=`resource not found. invalid:${err.path}`
    err=new ErrorHandler(message,400)
}

//mongoose duplcate key error
console.log(err.code);
if(err.code==11000){
    const message=`Duplicate ${Object.keys(err.keyValue)} entered`
    err=new ErrorHandler(message,400)
}
// // wrong JWT error
if(err.name=="JsonWebTokenError"){
    const message=`JOSN web Token is invalid try again`
    err=new ErrorHandler(message,400)
}

// JWT expire error
if(err.name=="TokenExpiredError"){
    const message=`JOSN web Token is expired try again`
    err=new ErrorHandler(message,400)
}


res.status(err.statusCode)
.json({
    success:false,
    message:err.message
})
}
