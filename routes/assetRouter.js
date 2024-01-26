const express = require("express")
const router = express.Router()
const path = require("path")
const {postAssert,getAssert,deleteAssert, getAssertById , updateAssert} = require("../services/assertService")

router.post("/add",(req,res)=>
{
    postAssert(req,res)
})
router.get("/get",(req,res)=>
{
    
    getAssert(req,res)
})
router.post("/edit/:id/update",(req,res)=>
{
    
    getAssertById(req,res)
})
router.get("/edit/:id",(req,res)=>
{
   
    res.sendFile(path.join(__dirname,"../public","assertedit.html"))
})
router.post("/edit/:id",(req,res)=>
{
   
    updateAssert(req,res)
})
router.post("/delete/:id",(req,res)=>
{
    deleteAssert(req,res)
}


)
module.exports = router