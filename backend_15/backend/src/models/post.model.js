const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    profileImage: String,
    userName: String,
    postImage: String,
    caption: String,
    likes: Number,
    comments: Number,
    shares: Number,
    saves: Number
})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel