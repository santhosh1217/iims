const { insertLocation , getLocation , getLocationsById , UpdateLoc , DeleteLoc } = require("../daos/locationDao")
function postLocation(req, res) 
{
    insertLocation(req.body.bname, req.body.rno, req.body.floor)
}

function getLocationDetial(req,res)
{
    getLocation().then((msg)=>res.send(msg))
}
async function getLocationById(req,res)
{
    let msg1 = null
    
    getLocationsById(req.params.id).then((msg)=> res.send(msg))
    
}
function updateLocation(req,res)
{
    
    UpdateLoc(req.params.id,req.body.bname,req.body.roomno,req.body.floor)
}
function deleteLocation(req,res)
{
    
    DeleteLoc(req.params.id)
    res.send("deleted successfully")
}

module.exports = { postLocation , getLocationDetial , getLocationById , updateLocation , deleteLocation}