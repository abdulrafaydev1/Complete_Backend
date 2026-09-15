const express = require('express')

const app = express()
app.use(express.json())


app.post('/post', (req, res) => {
    console.log(req.body)
})




module.exports = app