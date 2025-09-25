const express=require('express')
const router = require('./Router/router')
const requestLogger = require('./requestLogger')
const app=express()

app.use(requestLogger)
app.use(express.json())
app.use('/',router)

app.listen(3000,()=>{
    console.log("Server is start on 3000")
})