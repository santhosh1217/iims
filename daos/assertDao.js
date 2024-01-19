const {getDb,getCollection}=require("./config.js") //mongodb connection
function insertAssert(assertName, quantity, status) 
{
    const database = getDb("iims") //getting iims database
    const col = getCollection(db, "assert") //getting location collection
    col.insertOne({ AssertName: assertName, Quantity: quantity, Status: status }) //insert assert in db

}
function getAssert(id) 
{
    const database = getDb("iims") //getting iims database
    const collection = getCollection(db, "assert") //getting location collection
    return collection.find({_id:id}).toArray() //insert assert in db

}
module.exports = { insertAssert,getAssert }