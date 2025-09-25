const express=require('express')
const app=express()

app.use('/',(req,res)=>{
    res.json({message:"hello server"})
})

app.listen(3000,()=>{
    console.log("Server is start on 3000")
})