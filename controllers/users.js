const User = require('../models/user')

module.exports = {
  getAll: async (req, res) => {
    const users = await User.find({})
    
    res.status(200).json(users)
  },

  createOne: async (req, res) => {
    const newUser = new User(req.body)
    
    const user = await newUser.save()

    res.status(201).json(user)
  }
}