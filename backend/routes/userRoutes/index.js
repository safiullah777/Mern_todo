const express=require('express');
const {authenticateUser}=require('../../controllers/userController');
const router=express.Router();


router.route('/userAuthenticate').post(authenticateUser)
module.exports=router
