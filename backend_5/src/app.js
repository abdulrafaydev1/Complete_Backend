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

app.get('/notes', async (req, res) => {
     const notes = await noteModel.find({
        title: "note_3"
     })
    res.status(200).json({
        message: 'This is All notes you created',
        note: notes
    })
})

co


module.exports = app