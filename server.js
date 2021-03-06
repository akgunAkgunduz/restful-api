const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')

const userRoutes = require('./routes/users')
const bookRoutes = require('./routes/books')

mongoose.connect('mongodb://localhost/restfulapi', { useNewUrlParser: true })

const app = express()
const port = 5000

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', userRoutes)
app.use('/books', bookRoutes)

app.listen(port, () => console.log(`App listening on port ${port}`))