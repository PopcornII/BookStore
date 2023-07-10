const booksController = require("../controller/books/book.controller")


const book = (app) => { 

    app.post("/api/book/create", booksController.create)
    app.get("/api/book/get-List", booksController.getList)
    app.get("/api/book/get-One", booksController.getone)
    app.put("/api/book/update",booksController.update)
    app.delete("/api/book/remove", booksController.remove)
}

module.exports = book;