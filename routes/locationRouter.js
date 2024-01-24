const express = require("express")
const router = express.Router()

const path = require("path")
const {postLocation,getLocationDetial , getLocationById , updateLocation , deleteLocation
} = require("../services/locationService")

router.post("/add",(req,res)=>
{
    postLocation(req,res)
})

router.get("/get",(req,res)=>
{
  
    getLocationDetial(req,res)
})

router.post("/delete/:id",(req,res)=>
{
    deleteLocation(req,res)
}
)

router.get("/edit/:id",(req,res)=>res.sendFile(path.join(__dirname,"../public","locationedit.html")))

router.post("/edit/:id/update",(req,res)=>
{
    getLocationById(req,res)
})
router.post("/edit/:id",(req,res)=>
{
   
    updateLocation(req,res)
})

module.exports = router