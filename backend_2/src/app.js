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
        message: 'note created suscessfull',
        note: notes
    })
})

app.get('/note', (req, res) => {

    
    
})


module.exports = app