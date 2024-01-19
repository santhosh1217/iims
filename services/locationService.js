const {insertLocation} = require("../daos/locationDao")

function postLocation(req=null,res=null)
{
    //bussiness logic
    //get data from req and res
    insertLocation("psg st block",5,47)
    
}
postLocation()