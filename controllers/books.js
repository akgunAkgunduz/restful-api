const Book = require('../models/book')

module.exports = {
  getAll: async (req, res) => {
    const books = await Book.find({})

    res.status(200).json(books)
  },

  getOne: async (req, res) => {
    const { id } = req.params
    const book = await Book.findOne({ _id: id })

    res.status(200).json(book)
  },

  createOne: async (req, res) => {
    const newBook = new Book(req.body)
    const book = await newBook.save()

    res.status(201).json(book)
  }
}