const {insertUser,getUser} = require("../daos/userDao")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secretkey = "IIMS"

function login(req,res)
{
    if(true)//getUser(req.body.mail))
    {
        if(true)//getUser(req.body.mail).password == req.body.password)
        {
            res.json({success:true,message:"login successfull"})
        }
        else
        {
            res.json({success:false,message:"invalid password"}) 
        }
    }
    else
    {
        res.json({success:false,message:"invalid mail"})
    }
    
}

async function signup(req,res)
{ 
    if(mailexist())
    {
        return res.json({mailexist:true})
    }
    else
    {
        const token = jwt.sign({ mail:req.body.mail,password:req.body.password },secretkey,expireIn:"6h")
        console.log("ecrypt :"+token)
        jwt.verify(token,secretkey,(err,decode)=>{
        if(err)
        {
            console.log("error :"+err.message)
        }
        else{
            console.log("decrypt :"+decode.password)
        }
        res.json({token:token})
    }
    )
}

    function mailexist()
    {
        if(false){//getUser(req.body.mail)){
            return true
        }
        else
        {
            return false
        }
    }
    
    

}

module.exports = {signup,login}