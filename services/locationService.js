const { insertLocation } = require("../daos/locationDao")
function postLocation(req, res) 
{
    insertLocation(req.body.bname, req.body.rno, req.body.floor)
}
module.exports = { postLocation }