import {catchAsync, AppError} from "../../utils/index.js";
import {getBooks, findBookById, insertNewBook, deleteBook, updateBookDetails} from "../../services/index.js";

export const handleGetBooks = catchAsync(async (req, res, next) => {
  const books = await getBooks();
  if(books.length === 0) {
    return res.status(404).json({
      msg: "Books not found",
    });
  }
  return res.status(201).json({
    msg: "List of books",
    books: books
  });
});

export const handleInsertBooks = catchAsync(async (req, res, next) => {
  try {
    const books = await insertNewBook(req.body);
    return res.status(201).json({
      msg: "book added successfully",
      books: books
    });
  }catch (error){
    return res.status(400).json({
      error: error.message
    })
  }
});

export const handleBookById = catchAsync(async (req, res, next) => {
  const bookId = req.params["bookId"];
  if (!bookId) {
      return res.json({
        msg:'bookId not found',
      });
  }
  const bookDetails = await findBookById(bookId);
  if (!bookDetails) {
    return res.status(404).json({
      msg:'book not found',
    });
  }
  res.status(200).json({
    msg: "book details",
    bookDetails: bookDetails,
  });
});

export const handleDeleteBook = catchAsync(async (req, res, next) => {
  const bookId = req.params["bookId"];
  if (!bookId) {
    return res.status(404).json({
      msg:'book not found',
    });
  }
  const bookDetails = await deleteBook(bookId);
  if (!bookDetails) {
    return res.status(404).json({
      msg:'book not found',
    });
  }
  res.status(200).json({
    msg: "deleted book details",
    bookDetails: bookDetails,
  });
});

export const handleUpdateBookDetails = catchAsync(async (req, res, next) => {
  const bookId = req.params["bookId"];
  const {title, author, summary} = req.body;
  if (!bookId) {
    return res.status(400).json({
      msg:'bookID not found',
    });
  }
  const bookDetails =  await updateBookDetails(bookId, title, author, summary);
  res.status(200).json({
    msg: "Book details",
    updatedBookDetails: bookDetails,
  });
});