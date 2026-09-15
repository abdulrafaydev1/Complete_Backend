const express = require("express")
const app = express()
app.use(express.json())
const noteModel = require('./models/note.model')

app.post('/notes', (req, res) => {
    const data = req.body
    noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).send({
        messag: 'note created'
    })
})

app.get('/notes', (req, res) => {
    
})

module.exports = app
