const catchAsyncError = require('../middleware/catchAsyncError');
const Todo=require('../Models/todoModel')


// add new todo
exports.addTodo=catchAsyncError(async(req,res,next)=>{
    console.log(req.body);

    const {title,description,userEmail,todoDate}=req.body.todo
    const todo=await Todo.create({title,description,userEmail,todoDate})
    res.send({success:true,todo})
})


// get all todos
exports.allTodos=catchAsyncError(async(req,res,next)=>{
    const {useremail}=req.headers
    const todos=await Todo.find({useremail})
    res.send({success:true,todos})
})

// edit or update todo
exports.updateTodo=catchAsyncError(async(req,res,next)=>{
    const {_id,title,description,todoDate}=req.body.todo
    console.log(req.body.todo);
    const todo=await Todo.findByIdAndUpdate({_id},{title,description,todoDate})
    const todos=await Todo.find();
    console.log(todo,todos,"updated todo");
    res.send({success:true,todos})
})


// delete single todo
exports.deleteTodo=catchAsyncError(async(req,res,next)=>{
    const todo=await Todo.findById(req.body._id)
    await todo.remove()
    const newTodos=await Todo.find()
    res.send({success:true,newTodos})
})


// delete all todos

exports.deleteAllTodos=catchAsyncError(async(req,res,next)=>{
    const {useremail}=req.body
    const todos=await Todo.deleteMany({useremail})
    // await todos.remove({})

    res.send({success:true,todos})
})

