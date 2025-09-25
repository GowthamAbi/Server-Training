const express=require('express')
const router=express.Router()

router.get('/get',(req,res)=>{
    res.json({message:"hello server"})
    console.log(req.baseUrl)
    console.log(req.cookies)
    console.log(req.method)
})

module.exports=router