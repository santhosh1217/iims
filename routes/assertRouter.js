const express = require("express")
const router = express.Router()
const {postAssert,getAssert} = require("../services/assertService")

router.post("/add",(req,res)=>
{
    postAssert(req,res)
})
router.get("/get",(req,res)=>
{
    
    getAssert(req,res)
})
module.exports = router