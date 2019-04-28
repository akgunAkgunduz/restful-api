const User = require('../models/user')

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

  removeOne: async (req, res) => {
    const { id } = req.params
    const user = await User.findOneAndRemove({ _id: id })

    res.status(200).json({ deletedUser: user })
  }
}