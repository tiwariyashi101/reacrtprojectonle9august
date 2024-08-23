import express from "express"

const router=express.Router()

const userController=require('../Controller/user.controller.js')

router.post('/login',userController.login);
router 








export default router




