const express = require('express');
const noteModel = require('./models/note.model')

const app = express()
app.use(express.json())

app.post('/notes', (req, res) => {

    const data = req.body

    noteModel.create({
        noteModel = data.title
    })
})

module.exports = app