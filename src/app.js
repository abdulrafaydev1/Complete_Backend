const express = require('express');
const app = express();


// Cholo ek note application banai
app.use(express.json());

const notes = []

app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: 'Note created successfully',
        note: req.body,
    });
})

app.get('/notes', (req, res) => {
   

    res.status(200).json({
        message: 'Notes retrieved successfully',
        notes: notes,
    });

    
});


module.exports = app;