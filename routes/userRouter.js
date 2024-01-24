const express = require("express")
const router = express.Router()

const user = require("../services/userService")

router.post("/submit",(req,res)=>
{
    
    user(req,res)
    
})


module.exports = router