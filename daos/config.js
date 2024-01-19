const {MongoClient} = require("mongodb")

function connect(){
const client =  new MongoClient("mongodb://127.0.0.1:27017")
client.connect()
return client
}

function getDb(dbName)
{

    const client = connect()
    const database =  client.db(dbName)
    return database
   

}
function getCollection(database,collectionName)
{
    return database.collection(collectionName)
}

module.exports = {getDb,getCollection}
