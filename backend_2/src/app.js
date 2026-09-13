const express = require('express')
const app = express()
app.use(express.json())

//! ek notes application banao jis ma ya ya hona chaiye *//
//* 1, note create hon 
//* 2, note delete hon  
//* 3, note update hon   
//* 4, Sare notes dekhna chaiye   

const notes = []

app.post('/note', (req, res) => {
    notes.push(req.body)
    res.status(201).send({
        message: 'note created successfully',
        note: notes
    })
})

app.get('/note', (req, res) => {
    res.status(200).send({
        message: 'This is All notes you created',
        notes: notes
    })
})

app.delete('/note/:index', (req, res) => {
    const index = req.params.index
    delete notes[ index ]
    res.status(200).send({
        message: 'note deleted successfully',
        note: notes
        
    })
})


app.patch('/note/:index', (req, res) => {


    
    
    
})

module.exports = app