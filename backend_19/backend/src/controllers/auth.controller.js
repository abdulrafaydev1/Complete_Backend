const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {


    const { username, email, password } = req.body;

    const user = await userModel.create({
        username, email, password
    })

    const userCheck = userModel.findOne({
        email
    })

    if(userCheck){
        return res.status(409).json({
            message: 'user already exist'
        })
    }

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
