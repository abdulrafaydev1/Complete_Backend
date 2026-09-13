const express = require('express');
const app = express();
app.use(express.json());


// Cholo ek note application banai

app.get('/', (req, res) => {
  res.send('Welcome to the Note Application');
})

const notes = []

// Create a new note
app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.status(201).json({
        message: 'Note created successfully',
        note: req.body,
    });
})

// Get all notes
app.get('/notes', (req, res) => {

    res.status(200).json({
        message: 'Notes retrieved successfully',
        notes: notes,
    });  

});

// Get a specific note by index and delete it
app.delete('/notes/:index', (req, res) => {

    const i = req.params.index;

    delete notes[i];

    res.status(200).json({
        message: 'Note deleted successfully',
    });
})







module.exports = app;