const express = require('express')
const router = express.Router()

const userController = require('../controllers/users')

router.route('/')
  .get(userController.getAll)
  .post(userController.createOne)

router.route('/:id')
  .get(userController.getOne)
  .put(userController.replaceOne)
  .patch(userController.updateOne)
  .delete(userController.removeOne)

router.route('/:id/books')
  .get(userController.getFavoriteBooks)
  .post(userController.addFavoriteBook)

module.exports = router