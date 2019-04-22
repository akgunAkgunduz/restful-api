const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' })
})

app.listen(5000, () => console.log('Server started on port 5000'))