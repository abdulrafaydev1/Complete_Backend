const express = require("express")
const app = express()
app.use(express.json())
const noteModel = require('./models/note.model')

app.post('/notes', async (req, res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).send({
        messag: 'note created'
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

    const description = req.body.description

    noteModel.findOneAndDelete({
        _id: id
    })
})

module.exports = app
