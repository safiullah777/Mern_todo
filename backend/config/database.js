const mongoose=require('mongoose')
const connectDatabase=()=>{
    mongoose.connect(process.env.DB_url,
    {
        // useNewUrlParse:true,
        useUnifiedTopology:true,
        // useCreateIndex:true
    }
    ).then(()=>{
        console.log('database connected')
    })
    }
module.exports=connectDatabase;