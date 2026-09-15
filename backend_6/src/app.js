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

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).send({
        message: "note deleted",
        id: id
    })
})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id

    const description = req.body.description
    const title = req.body.title

    await noteModel.findOneAndUpdate({
        _id: id
    }, {
        description: description,
        title: title,
        id: id
    })

    res.status(200).send({
        message: 'note updated'
    })

})


module.exports = app 