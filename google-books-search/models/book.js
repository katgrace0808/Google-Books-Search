const mongoose = require("mongoose");
const Schema = mongoos.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    description: String,
    image: URL,
    link: URL
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;