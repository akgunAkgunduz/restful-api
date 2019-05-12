const express = require('express')
const router = express.Router()

const bookController = require('../controllers/books')

router.route('/')
  .get(bookController.getAll)
  .post(bookController.createOne)

router.route('/:id')
  .get(bookController.getOne)
  .put(bookController.replaceOne)
  .patch(bookController.updateOne)
  .delete(bookController.removeOne)

module.exports = router