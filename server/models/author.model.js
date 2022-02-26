const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: [true, 'Add a name'],
        minlength: [3, 'Minimum name length is 3']
    }
}, {timestamps: true});

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;