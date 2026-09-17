const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    profileImage: String,
    postImage: String,
    caption: String
 

})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel