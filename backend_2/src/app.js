const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('this is port 3001')
})

module.exports = app