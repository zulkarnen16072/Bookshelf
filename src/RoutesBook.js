

const routesBook = require('express').Router();

const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
  } = require('./handler');

routesBook.get('/books', (req, res) => {
    getAllBooksHandler(req, res)
})

routesBook.get('/books/:id', (req, res) => {
    const {id} = req.params;
    getBookByIdHandler(req, res)
})

routesBook.post('/books', (req, res) => {
    addBookHandler(req, res)
})

routesBook.put('/books/:id', (req, res) => {
    editBookByIdHandler(req, res)
})

routesBook.delete('/books/:id', (req, res) => {
    deleteBookByIdHandler(req, res)
})

module.exports = routesBook;
