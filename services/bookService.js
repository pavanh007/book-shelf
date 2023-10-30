import {BookShelf} from "../db/models/index.js";

export const getBooks = async () => {
  return await BookShelf.find({});
};

export const findBookById = async (bookId) => {
  return await BookShelf.findById({_id: bookId});
};

export const insertNewBook = async (bookDetails) => {
  return await BookShelf.create(bookDetails);
};

export const updateBookDetails = async (bookId, title, author, summary) => {
  return await BookShelf.findOneAndUpdate({_id: bookId}, {title: title, author: author, summary: summary}, {new: true});
};

export const deleteBook = async (bookId) => {
  return await BookShelf.findByIdAndDelete({_id: bookId});
};

