const express = require("express")
const path = require("path")
const app = express()
const PORT =  8003
const cors = require("cors")

app.use(cors())

const bodyParser = require("body-parser")

const locationRoute = require("./routes/locationRouter")
const assertRoute = require("./routes/assertRouter")
const userRoute = require("./routes/userRouter")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/location",locationRoute)
app.use("/assert",assertRoute)
app.use("/user",userRoute)

app.get("/dashboard",(req,res)=>res.sendFile(path.join(__dirname,"public","dashboard.html")))
app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"public","login.html")))
app.get("/signup",(req,res)=>res.sendFile(path.join(__dirname,"public","signup.html")))






app.listen(PORT,()=>console.log(`server listening on port ${PORT}`))