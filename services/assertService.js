const { insertAssert,getAsserts } = require("../daos/assertDao")
function postAssert(req, res) 
{
    insertAssert(req.body.aname, req.body.qnty, req.body.status)
}
function getAssert(req,res)
{
    let msg1 = null
    console.log(getAsserts().then((msg)=>  msg))
    getAsserts().then((msg)=> msg1 = msg)
    console.log(msg1)
    res.send()
}
module.exports = { postAssert , getAssert }