const express = require("express")
const router = express.Router()

const {signup,login} = require("../services/userService")
const {authenticate} = require("../services/authService")


router.post("/signup",(req,res)=>
{
    
    signup(req,res)
    
})

router.post("/login",(req,res)=>
    login(req,res)
)

router.post("/authenticate",(req,res)=>
    authenticate(req,res)
)


module.exports = router