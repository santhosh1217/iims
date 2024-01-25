const {getAssertsById} = require("./assertDao")
const {getDb , getCollection} = require("./config")
function updateAsset()
{
    const isFound = undefined;
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "assert") //getting location collection
    getAssertsById(id).then((msg)=> isFound= true )
    collection.updateOne({_id:id},{$push:{"Location":{"location Id":location,}}})
    
   

}
module.exports = {updateAsset}