const express = require('express')
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postmodel = require('./models/post.model')

const app = express()
app.use(express.json())

const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single('image'), async (req, res) => {
    console.log(req.body)
    console.log(req.file)

    const result = await uploadFile(req.file.buffer)

    const post = postmodel.create({
        image: result.url,
        caption: req.body.caption
    })
  
    return res.status(201).send({
        mesage: 'post created',
        post
    })
    
})

module.exports = app