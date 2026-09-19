const userModel = require('../models/user.models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {

    const { username, email, password, role = 'user' } = req.body

    const checkUserExsits = await userModel.findOne({
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

    const hast = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hast,
        role
    })

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SERECT)

    res.cookie('token', token)

    res.status(201).json({
        message: 'user register',
        user
    })

}

const loginUser = async (req, res) => {

    const { username, email, password } = req.body

    const user = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (!user) {
        return res.status(401).json({
            message: 'invalid creedentials'
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(401).json({
            message: 'invalid creedentials'
        })
    }

    const token = jwt.sign({
        id: user._id,
        role: user.role
    }, process.env.JWT_SERECT)

    res.cookie('token', token)

    res.status(200).json({
        message: 'user login',
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        }
    })
}
    
 

module.exports = { registerUser, loginUser }