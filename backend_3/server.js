const express = require('express')
const app = express()
app.use(express.json())

const notes = []

app.get('/note', (req, res) => {
    res.status(200).send({
        message: 'All notes',
        notes: notes
    })
})

app.post('/note', (req, res) => {
    notes.push(req.body)
    res.status(201).send({
        message: 'note created',
        note: notes
    })
})

app.delete('/note/:index', (req, res) => {
    const index = req.params.index;
    delete notes[index]

    res.status(200).send({
        message: 'notes deleted',
        notes: notes
    })
})

app.patch('/note/:index', (req, res) => {
    const index = req.params.index;
    const title = req.body.title;
    notes[index].title = title

    res.status(200).send({
        message: 'notes updated',
        notes: notes
    })

})

app.listen(3002, () => {
    console.log("server is running at port 3002")
})