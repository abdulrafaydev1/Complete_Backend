const express = require('express')
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')
const multer = require('multer')

const app = express()
app.use(express.json())

const upload = multer({
    storage: multer.memoryStorage()
})

app.post('/create-post', upload.fields([

    {
        name: 'profileImage',
        maxCount: 1
    },
    {
        name: 'postImage',
        maxCount: 1
    }

]), async (req, res) => {

    try {

        const postImageFile = req.files?.postImage?.[0];
        const profileImageFile = req.files?.profileImage?.[0];

        if (!postImageFile || !profileImageFile) {
            return res.status(400).json({
                message: "postImage aur profileImage dono required hain",
            });
        }

        const postImageResult = await uploadFile(
            postImageFile.buffer
        );

        const profileImageResult = await uploadFile(
            profileImageFile.buffer
        );

    } catch (error) {

    }

    const result = await uploadFile(req.file.buffer)

    const posts = await postModel.create({

        profileImage: result.url,
        postImage: result.url,
        caption: req.body.caption

    })

    res.status(201).json({
        message: 'post created',
        posts
    })

})

module.exports = app