const mongoose = require('mongoose');

const BookSchema: Object = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: false,
    }
});

export const Book = mongoose.model('book', BookSchema);