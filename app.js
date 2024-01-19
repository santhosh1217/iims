const express = require("express")
const path = require("path")
const app = express()
const PORT =  8003

const bodyParser = require("body-parser")

const locationRoute = require("./routes/locationRouter")
const assertRoute = require("./routes/assertRouter")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/location",locationRoute)
app.use("/assert",assertRoute)

app.get("/dashboard",(req,res)=>res.sendFile(path.join(__dirname,"public","dashboard.html")))
app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"public","login.html")))
app.get("/signup",(req,res)=>res.sendFile(path.join(__dirname,"public","signup.html")))

app.post("/submitForm",(req,res)=>{
    res.send("form submitted successfully")
})





app.listen(PORT,()=>console.log(`server listening on port ${PORT}`))