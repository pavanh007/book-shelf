import mongoose from "mongoose";

const bookShelfSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
    },
    summary: String,
});

export const BookShelf = mongoose.model('BookShelf', bookShelfSchema);

