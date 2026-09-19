const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: true,
        unique: true  // Automatically creates a unique index on 'email'
    },
    password: String
})

const userModel = mongoose.model('user', userSchema)
 
module.exports = userModel