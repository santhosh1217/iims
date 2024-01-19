const express = require("express")
const app = express()
const PORT =  8000



app.get("/dashboard",(req,res)=>res.send("dashboard page"))
app.get("/login",(req,res)=>res.send("login page"))
app.get("/signup",(req,res)=>res.send("signup page"))




app.listen(PORT,()=>console.log(`server listening on port ${PORT}`))