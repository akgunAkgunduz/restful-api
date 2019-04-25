const express = require('express')
const router = express.Router()

const User = require('../models/user')

router.route('/')
  .get(async (req, res) => {
    const users = await User.find({})
    
    res.status(200).json(users)
  })

  .post(async (req, res) => {
    const newUser = new User(req.body)
    
    const user = await newUser.save()

    res.status(201).json(user)
  })

module.exports = router