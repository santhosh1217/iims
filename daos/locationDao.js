const {getDb,getCollection}=require("./config.js") //mongodb connection
function insertLocation(buildingName,roomNumber,floor)
{
    const database = getDb("iims") //getting iims database
    const collection = getCollection(db,"location") //getting location collection
    col.insertOne({BuildingName:buildingName,RoomNumber:roomNumber,Floor:floor}) //insert location in db   
}
function getLocation(id)
{
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database,"location") //getting location collection
    return collection.find({_id:id}).toArray() //insert location in db   
}
module.exports = {insertLocation,getLocation}