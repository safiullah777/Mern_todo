const dotenv=require('dotenv');
const app = require('./app');
const connectDatabase = require('./config/database');
 

// handling uncaught exception
process.on('uncaughtException',err=>{
    console.log(`error:${err.message}`)
    console.log(`shutting down the server de to uncaught Exception`)
    process.exit(1);
})


//env file
dotenv.config({path:".env"})
app.listen(process.env.PORT,()=>{
    console.log(`server is working on port ${process.env.PORT}`);
})


//connect to database
connectDatabase();


// unhandled promise rejection
process.on('unhandledRejection',(err)=>{
    console.log(`error:${err.message}`)
    console.log(`shutting down the server due to unhandled promise rejection`)
server.close(()=>{{
    process.exit(1);
}})
})
