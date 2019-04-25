const express = require('express')
const mongoose = require('mongoose')

const userRoutes = require('./routes/users')

mongoose.connect('mongodb://localhost/restfulapi', { useNewUrlParser: true })

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', userRoutes)

app.listen(5000, () => console.log('Server started on port 5000'))