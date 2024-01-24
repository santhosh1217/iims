const {getDb,getCollection}=require("./config.js") //mongodb connection
const {ObjectId} = require("mongodb")
function insertLocation(buildingName,roomNumber,floor)

{
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database,"location") //getting location collection
    collection.insertOne({BuildingName:buildingName,RoomNumber:roomNumber,Floor:floor}) //insert location in db   
}
async function getLocation()
{
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database,"location") //getting location collection
    return await collection.find({}).toArray() //insert location in db   
}
async function getLocationsById(id) {
    const lid = new ObjectId(id)
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "location") //getting location collection
    return await collection.find({ _id: lid }).toArray() //insert assert in db

}
async function UpdateLoc(id, bname, roomno , floor) {
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "location") //getting location collection
    const lid = new ObjectId(id)
    await collection.updateOne({ _id: lid }, {
        $set: {
            BuildingName: bname,
            RoomNumber: roomno,
            Floor: floor, 
            
        }
    })
}
async function DeleteLoc(assertId) {
    const assertid = new ObjectId(assertId)

    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "location") //getting location collection
    await collection.deleteOne({ _id: assertid })
}
module.exports = {insertLocation,getLocation , getLocationsById , UpdateLoc , DeleteLoc}