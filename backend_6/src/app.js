const express = require('express')
const noteModel = require('./models/note.model')

const app = express()
app.use(express.json())


app.post('/notes', (req, res) => {
    const data = req.body
    noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).send({
        message: 'note created'
    })
})

app.get('/notes', async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).send({
        message: 'notes fatched',
        notes: notes
    })
})

app.delete('/notes/:id', (req, res) => {
    const id = req.params.id
})


module.exports = app