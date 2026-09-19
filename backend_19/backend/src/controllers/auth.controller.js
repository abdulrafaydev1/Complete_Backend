const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {


    const { username, email, password } = req.body;

    const user = await userModel.create({
        username, email, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SERECT)

    res.cookie('token', token)

    res.status(201).json({
        message: 'register successful',
        user

    })




}

module.exports = { registerUser }
