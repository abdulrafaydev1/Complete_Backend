// const express = require('express');
// const notemodel = require('./models/note.model')

// const app = express()
// app.use(express.json())

// app.post('/notes', async (req, res) => {

//     const data = req.body //* req.body ma ayega ek object or object ma hoga ek tite or ek description
//     await notemodel.create({
//         title: data.title,
//         description: data.description
//     })

    
//     res.status(201).send({
//         message: 'note created'
//     })

// })

// module.exports = app