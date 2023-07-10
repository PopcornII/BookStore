
const mysql = require("mysql")


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    Password: " ",
    database: "books" 

})

module.exports = db




