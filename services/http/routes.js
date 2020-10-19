const routes = require('express').Router();
const book = require('./controllers/v1/book');
const authMiddleware = require('./middlewares/auth-middleware');
const authUser = require('./middlewares/auth-user');

// v1
routes.use('/api/v1/books', authMiddleware.api);
routes.use('/api/v1/books', authUser.defineId);
routes.use('/api/v1/books', book);

module.exports = routes;