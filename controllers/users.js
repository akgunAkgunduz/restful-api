const User = require('../models/user')
const Book = require('../models/book')

module.exports = {
  getAll: async (req, res) => {
    const users = await User.find({})

    res.status(200).json(users)
  },

  getOne: async (req, res) => {
    const { id } = req.params
    const user = await User.findOne({ _id: id })
    
    res.status(200).json(user)
  },

  createOne: async (req, res) => {
    const newUser = new User(req.body)    
    const user = await newUser.save()

    res.status(201).json(user)
  },

  replaceOne: async (req, res) => {
    const { id } = req.params
    const incomingUser = { ...req.body }
    const user = await User.findOneAndUpdate({ _id: id }, incomingUser, { new: true })

    res.status(200).json({ replacedUser: user })
  },

  updateOne: async (req, res) => {
    const { id } = req.params
    const incomingFields = { ...req.body }
    const user = await User.findOneAndUpdate({ _id: id }, incomingFields, { new: true })

    res.status(200).json({ updatedUser: user })
  },

  removeOne: async (req, res) => {
    const { id } = req.params
    const user = await User.findOneAndRemove({ _id: id })

    res.status(200).json({ deletedUser: user })
  },

  getFavoriteBooks: async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).populate('favoriteBooks')

    res.status(200).json(user.favoriteBooks)
  },

  addFavoriteBook: async (req, res) => {
    const { id } = req.params
    const user = await User.findOne({ _id: id })

    const { bookId } = req.body

    const book = await Book.findOne({ _id: bookId })
    if (!book) throw new Error('No such book on DB!')

    user.favoriteBooks.push(bookId)
    await user.save()

    res.status(201).json(user)
  }
}