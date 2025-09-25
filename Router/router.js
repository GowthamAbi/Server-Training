const express=require('express')
const authController = require('../Controller/authController')
const router=express.Router()

router.get('/get',authController)

module.exports=router