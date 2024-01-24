const { insertAssert,getAsserts,DeleteAssert, getAssertsById , UpdateAssert} = require("../daos/assertDao")
function postAssert(req, res) 
{
    insertAssert(req.body.aname, req.body.qnty)
}
function deleteAssert(req,res)
{
    
    DeleteAssert(req.params.id)
    res.send("deleted successfully")
}
function updateAssert(req,res)
{
    console.log(req.params)
    UpdateAssert(req.params.id,req.body.assetname,req.body.quantity,req.body.assigned,req.body.available)
}

async function getAssert(req,res)
{
    let msg1 = null
    await getAsserts().then((msg)=> res.send( msg))
    
}
async function getAssertById(req,res)
{
    let msg1 = null
    getAssertsById(req.params.id).then((msg)=> res.send( msg))
    
}


module.exports = { postAssert , getAssert , deleteAssert ,getAssertById , updateAssert}