const express = require('express')
const auth = require('./routes/auth.route')

const app = express()

app.use('/auth', auth)

module.exports = app