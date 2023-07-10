
const db = require("../../config/db.config")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const login = (req, res) => {
    var {username, password} = req.body
    var message = {}
    var userName = "SELECT * FROM register WHERE username =?"
    var queryuserName = [username]
    if(password == null || password == " "){
        message.password = "Please fill in password!"
        
    }
    if(username == null || username == " "){
        message.username = "Please fill in username!"
    }
    if(Object.keys(message).length>0){
        res.json({
          error: true,
          message : message
        })
        return
    }
    db.query(userName, queryuserName, (error, data)=> {
        if(!error){
            if(data.length == 0){
                res.json({
                    error : true,
                    message : {
                        username : "Username does not exist!"
                    }
                })

            }else{
                var username = data[0]
                var passworddb = username.password
                var isCorrectPassword = bcrypt.compareSync(password, passworddb)
                if(isCorrectPassword){
                    delete username.password
                    res.json({
                        message : "Login Success!",
                        profile : username
                    })
                }else{
                    res.json({
                        error : true,
                        message : { password: "Password Incorrect!" }
                    })
                }

                
            }
        }


    })
    
    
   
}

module.exports = {login}

