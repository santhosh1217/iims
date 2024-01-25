const express = require('express')
const Route = express.Router()
const path = require("path")
const { getAssertById  } = require("../services/assertService")
const { deploy} = require("../services/dashboardService")

Route.get("/",(req,res)=>res.sendFile(path.join(__dirname,"../public","dashboard.html")))
Route.get("/deploy/:id",(req,res)=>res.sendFile(path.join(__dirname,"../public","deploy.html")))
Route.post("/deploy/:id",(req,res)=>deploy(req,res))
Route.get("/deploy/:id/getasset",(req,res)=>getAssertById(req,res))
Route.get("/deploy")


module.exports = Route