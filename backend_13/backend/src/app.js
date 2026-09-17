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

        const profileImageFile = req?.files?.profileImage?.[0];
        const postImageFile = req?.files?.postImage?.[0];

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

        const posts = await postModel.create({

            profileImage: profileImageResult.url,
            postImage: postImageResult.url,
            caption: req.body.caption,
            likes: req.body.likes,
            comments: req.body.comments

        })

        res.status(201).json({
            message: 'post created',
            posts
        })

    } catch (error) {
        console.error("Create post error:", error);
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }

})

module.exports = app