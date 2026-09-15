const express = require('express');
const noteModel = require('./models/note.model')

const app = express()
app.use(express.json())

app.post('/notes', async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description,
    })
    res.status(201).send({
        message: 'note created'
    })
})

app.get('/notes', (req, res) => {
    const data = req.body

    res.status(200).json({
        message: 'This is all notes',
        Allnote: data
    })
})


module.exports = app