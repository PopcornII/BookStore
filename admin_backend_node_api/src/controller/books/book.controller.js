

const db = require("../../config/db.config")


const create = (req,res) => {
    // Insert Into () Value ()
    var body = req.body 
    var bookInsert = "INSERT INTO book_list (book_title, book_author,rating, category, version_books) VALUES (?,?,?,?,?)"
    var paramInsert = [body.book_title, body.book_author,body.rating, body.category, body.version_books] 
    db.query(bookInsert, paramInsert, (error, data)=>{
        if(error){
            res.json({
                error: true,
                message: error
                
            })
        }else{
            res.json({
                message: "Book Insert Success!",
                list : data
            })
             
        }

    })
    
}

const getList = (req,res) => {
    // Select * From table 

    var bookList = "SELECT * FROM book_list"
    db.query(bookList, (error, data)=> {
        if(error){
            res.json({
                error: true,
                message: error
            })
        }else{
            res.json({
                message: "List Of The Books!",
                list : data
            })
        }

    })

}

const getone = (req,res) => {
    // Select * From table Where * // param key

    var book_id = req.params.book_id
    var book_title = req.params.book_title
    var filterBooks = "SELECT * FROM book_list WHERE (book_id =?, book_title=?)"
    var bookParams = [book_id, book_title]
    db.query(filterBooks, bookParams, (error, data) => {
        if(error){
            res.json({
                error: true,
                message: error
            })
        }else{
            res.json({

                list : data
            })
        }
    })

}

const update = (req, res) => {
    // Upate table Set ... =?
    var body = req.body
    var updateBook = "UPDATE book_list SET book_title=?, book_author=?, rating=?, category=? WHERE book_id=?"
    var updateParams = [body.book_title, body.book_author, body.rating, body.category]
    db.query(updateBook, updateParams, (error, data) => {
        if(error){
            res.json({
                error: true,
                message: error
            })
        }else{
            res.json({
                message: " Data updated successfully",
                list : data
            })
        }

    })
}

const remove = (req,res) => {
    // delete * from table () 
    var book_id = req.params.book_id
    var book_title = req.params.book_title
    var filterBooks = "DELETE books FROM book_id =?, book_title=?"
    var querybookid = [book_id]
    var querybookname = [book_title]
    db.query(filterBooks, querybookid,querybookname, (error, data) => {
        if(querybookid == null && querybookname != null){
            if(error){
                res.json({
                    error: true,
                    message: error
                })
            }else{
                res.json({
                    message: "Data deleted successfully",
                    list : data
                })
            }
        }else{
            if(error){
                res.json({
                    error: true,
                    message: error
                })
            }else{
                res.json({
                    message: "Data deleted successfully",
                    list : data
                })
            }
        }
    })
    
}


module.exports = {
    create,
    update,
    getList,
    getone,
    remove
}
   
   
