const express = require('express')
const postModel = require('./models/post.model')
 
const app = express()
app.use(express.json())

app.post('/create-post', (req, res) => {

    const posts = postModel.create({
        caption: req.body.caption
    })

    res.status(201).json({
        message: 'post created',
        posts
    })

    
})

module.exports = app