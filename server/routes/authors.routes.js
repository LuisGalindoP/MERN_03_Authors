const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/authors', AuthorController.findAllAuthors);
    app.get('/authors/:id', AuthorController.findAuthor);
    app.post('/authors', AuthorController.addAuthor);
    app.put('/authors/:id', AuthorController.updateAuthor);
    app.post('/authors/:id', AuthorController.deleteAuthor);
};
