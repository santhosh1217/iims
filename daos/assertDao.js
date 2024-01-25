const { getDb, getCollection } = require("./config.js") //mongodb connection
const { ObjectId } = require("mongodb")

function insertAssert(assertName, quantity) {
    console.log(assertName, quantity)
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "assert") //getting location collection
    collection.insertOne({ AssertName: assertName, Quantity: quantity, Assigned: 0, Stock: quantity , Locations:[] }) //insert assert in db

}
async function getAsserts() {

    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "assert") //getting location collection
    return await collection.find({}).toArray() //insert assert in db

}
async function getAssertsById(id) {
    const assertid = new ObjectId(id)
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "assert") //getting location collection
    return await collection.find({ _id: assertid }).toArray() //insert assert in db

}
async function DeleteAssert(assertId) {
    const assertid = new ObjectId(assertId)

    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "assert") //getting location collection
    await collection.deleteOne({ _id: assertid })
}
async function UpdateAssert(id, name, qnty, assign, avlb) {
    const database = getDb("iims") //getting iims database
    const collection = getCollection(database, "assert") //getting location collection
    const assertid = new ObjectId(id)
    await collection.updateOne({ _id: assertid }, {
        $set: {
            AssertName: name,
            Quantity: qnty,
            Assigned: assign, 
            Stock: avlb
        }
    })
}
module.exports = { insertAssert, getAsserts, DeleteAssert, getAssertsById, UpdateAssert }