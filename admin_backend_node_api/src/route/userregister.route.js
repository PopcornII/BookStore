
const userController = require("../controller/user/userregister.controller")

const user = (app) => {
    app.post("/api/User/create",userController.create)
    app.get("/api/User/get-list",userController.getList)
    app.get("/api/User/getOne",userController.getOne)
    app.put("/api/User/update",userController.update)
    app.delete("/api/User/create",userController.remove)
}

module.exports = user