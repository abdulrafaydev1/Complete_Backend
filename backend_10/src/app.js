const express = require('express')
const multer = require('multer')
const postModel = require('./models/post.model')
const uploadFile = require('./services/storage.service')
const app = express()
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single('image'), (req, res) => {

    

    postModel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: 'post created',
       
    })
    
})



module.exports = app