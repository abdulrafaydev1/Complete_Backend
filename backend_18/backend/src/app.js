const express = require('express')
const postModel = require('./models/post.model')
 
const app = express()
app.use(express.json())

app.post('/create-post', async (req, res) => {

    const posts = await postModel.create({
        caption: req.body.caption
    })

    res.status(201).json({
        message: 'post created',
        posts
    })

    
})

module.exports = app