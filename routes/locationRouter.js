const express = require("express")
const router = express.Router()
const {postLocation} = require("../services/locationService")
router.post("/add",(req,res)=>
{
    postLocation(req,res)
})
module.exports = router