const jwt = require("jsonwebtoken")
const path = require("path")

const { getUser } = require("../daos/userDao")

secretkey = "IIMS"



function authenticate(req, res) 
{
    const token = req.headers.authorization
    console.log(token)
    jwt.verify(token, secretkey, (err, decode) => 
    {
        if (err) {
            
            res.json({success:false,message:"invalid token"})
        }
        else 
        {
            res.json({success:true,message:"authentication successfull"})
        }

    })


}

module.exports = { authenticate }