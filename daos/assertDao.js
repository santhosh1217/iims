const {getDb,getCollection}=require("./config.js") //mongodb connection
function insertAssert(assertName, quantity, status) 
{
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "assert") //getting location collection
    collection.insertOne({ AssertName: assertName, Quantity: quantity, Status: status }) //insert assert in db

}
async function getAsserts() 
{
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "assert") //getting location collection
    return {name:"santhosh"} //await collection.find({}).toArray() //insert assert in db

}
module.exports = { insertAssert ,getAsserts }