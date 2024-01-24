const {getDb,getCollection}=require("./config.js") //mongodb connection
function insertUser(mail, password) 
{
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "user") //getting location collection
    collection.insertOne({Username: mail, Password: password }) //insert assert in db

}

async function getUser(username)
{
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "user") //getting location collection
    return await collection.findOne({Username: mail }).toArray() //insert assert in db


}


module.exports = { insertUser , getUser} 