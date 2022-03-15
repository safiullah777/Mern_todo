const express=require('express');
const {addTodo, allTodos, updateTodo, deleteTodo, deleteAllTodos}=require('../../controllers/todoController');
const { auth } = require('../../middleware/auth');
const router=express.Router();


router.route('/addTodo').post(addTodo)
router.route('/myTodos').get(allTodos)
router.route('/updateTodo').put(updateTodo)
router.route('/deleteTodo').delete(deleteTodo)
router.route('/deleteAllTodos').delete(deleteAllTodos)
module.exports=router
