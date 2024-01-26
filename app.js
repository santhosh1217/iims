const express = require("express")
const path = require("path")
const cors = require("cors")

const locationRoute = require("./routes/locationRouter")
const assetRoute = require("./routes/assetRouter")
const userRoute = require("./routes/userRouter")
const dashboardRoute = require("./routes/dashboardRouter")

const app = express()
const PORT =  8003

//Middileware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Routes
app.use("/dashboard",dashboardRoute)
app.use("/user",userRoute)
app.use("/location",locationRoute)
app.use("/assert",assetRoute)

app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"./public/login.html")))
app.get("/signup",(req,res)=>res.sendFile(path.join(__dirname,"./public/signup.html")))

//server
app.listen(PORT,()=>console.log(`server listening on port ${PORT}`))