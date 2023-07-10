
const express = require('express')



const app = express() // create server express middleware

app.use(express.json()) 

app.get("/", (req,res) =>{
    res.send("Welcome to My book server.")
})

require("./src/route/books.route") (app)
require("./src/route/userregister.route")(app)
require("./src/route/login.route")(app)


app.listen(1680, () =>{ // localhost sever 1680
    console.log("http://localhost:1680/")

})