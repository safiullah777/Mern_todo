const express=require('express');
const app=express();
const cookieparse=require('cookie-parser');
const user=require('./routes/userRoutes')
const todo=require('./routes/todoRoutes')
const cors=require('cors')
const jwtCheck = require('./utils/jwtcheck');
const error=require('./middleware/error')



app.use(express.json())
app.use(cookieparse())
app.use(cors())
app.use(user)
app.use(todo)
app.use(jwtCheck);




app.use(error);

module.exports=app