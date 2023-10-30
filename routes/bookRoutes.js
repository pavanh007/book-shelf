import {Router} from "express";
import {handleBookById, handleInsertBooks, handleDeleteBook, handleGetBooks, handleUpdateBookDetails} from "./../controllers/index.js";

const bookRouter = Router();

bookRouter.get("/books", handleGetBooks);
bookRouter.get("/book-details/:bookId", handleBookById);
bookRouter.post("/add-book", handleInsertBooks)
bookRouter.delete("/delete-book/:bookId", handleDeleteBook);
bookRouter.put("/update-book/:bookId", handleUpdateBookDetails);

export { bookRouter };
