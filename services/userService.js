const {insertUser,getUser} = require("../daos/userDao")
async function user(req,res)
{
    console.log(req.body.mail)
    if(getUser(req.body.mail))
    {
        console.log("mail id exist")
    }
    else
    {
        insertUser(req.body.mail,req.body.password)
    }
    

}

module.exports = user