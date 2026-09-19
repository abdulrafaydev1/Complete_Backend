const userModel = require('../models/user.models')
const jwt = require('jsonwebtoken')

const registerUser = async () => {

    const { username, email, password, role = 'user' } = req.body

    const checkUserExsits = userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (checkUserExsits) {
        return res.status(409).json({
            message: 'user already exist'
        })
    }

    const userCreate = userModel.create({
        username, email, password, role
    })

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SERECT)

    res.cookie('token', token)
}

module.exports = {registerUser}