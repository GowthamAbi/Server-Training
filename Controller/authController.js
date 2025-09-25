const authController={
    register:async(req,res)=>{
       
       const{email}=req.body
       console.log(email)
       res.json(email)
    },

    login:(req,res)=>{
    res.json({message:"Enter in Loging"})
},

logout:(req,res)=>{
    res.json({message:"Enter in LogOut"})
}

}


module.exports=authController