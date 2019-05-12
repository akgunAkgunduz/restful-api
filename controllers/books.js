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
  },

  replaceOne: async (req, res) => {
    const { id } = req.params
    const incomingBook = { ...req.body }
    const book = await Book.findOneAndUpdate({ _id: id }, incomingBook, { new: true })

    res.status(200).json({ replacedBook: book })
  },

  updateOne: async (req, res) => {
    const { id } = req.params
    const incomingFields = { ...req.body }
    const book = await Book.findOneAndUpdate({ _id: id }, incomingFields, { new: true })

    res.status(200).json({ updatedBook: book })
  },

  removeOne: async (req, res) => {
    const { id } = req.params
    const book = await Book.findOneAndRemove({ _id: id })

    res.status(200).json({ deletedBook: book })
  }
}