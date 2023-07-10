const loginController = require("../controller/login/login.controller")

const login = (app) => {
    app.post("/api/user/login", loginController.login)
}

module.exports = login;