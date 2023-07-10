
const db = require("../../config/db.config")
const bcrypt = require("bcrypt")

const create =(req,res) =>{
    var body = req.body
    var password = bcrypt.hashSync(body.password, 10) // encrypt password key
    var sqlUser = "INSERT INTO register(last_name, first_name, email, password,username,tel) VALUE (?,?,?,?,?,?)"
    var userValue = [body.last_name, body.first_name, body.email, password,body.username,body.tel]

    db.query(sqlUser, userValue,(error, data)=> {
        if(error){
            res.json({
                message : "Wrong data input!",
                error : true               
            })
        }else{
            res.json({
                message : "Register Success.",
                list : data
            }) 
        }
    })  
}
const getList = (req, res) => {
    var Userlist ="SELECT * FROM register"
    db.query(Userlist, (error, data) => {
        if(error){
            res.json({
                error: true,
                message: "Fail Connection Data!"
            })
        }else{
            res.json({
                message: "Here is the User List",
                list : data
            })
        }
    })

}

const getOne = (req,res) => {
    var user_id = req.params.user_id
    var filterUser = "SELECT * FROM register WHERE user_id=?"
    var getUser = [user_id]
    db.query(filterUser, getUser, (error, data) =>{
        if(error){
            res.json({
                error : true,
                message : " User is not found!"
            })
        }else{
            res.json({
                message : "Success to search User",
                list : data
            })
        }
    })
}

const update = (req, res) => {
    var body = req.body
    var editUser = "UPDATE register SET last_name=?, first_name=?, password=?, username=?, tel=? WHERE email=?"
    var updateUser = [body.last_name, body.first_name, body.password, body.email, body.username, body.tel]

    db.query(editUser, updateUser, (error, data) =>{
        if(error){
            res.json({
                message : "data not found!",
                error: true
            })
        }else{
            res.json({
                message : "User update success!",
                list : data
            })
        }

    })
}

const remove = (req,res) => {
    var user_id = req.params.user_id
    var email = req.params.email
    var deleteUser = "SELECT * FROM register WHERE user_id =?, email=?"
    var queryUser = [user_id]
    var queryEmail = [email]
    db.query(deleteUser, queryUser, queryEmail, (error, data) => {
        if(queryUser == null && queryEmail != null){
            if(error){
                res.json({
                    error : true,
                    message : "Data Not Found!"
                })
            }else{
                res.json({
                    message : "User Delete Success!",
                    list : data
                })
            }


        }else{
            if(error){
                res.json({
                    error : true,
                    message : "Data Not Found!"
    
                })
            }else{
                res.json({
                    message : "User Delete Success!",
                    list : data
                })
            }
        }

    })
}




module.exports = {
    remove,
    create,
    update,
    getList,
    getOne
    
}